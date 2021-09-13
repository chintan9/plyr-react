/* eslint-disable react/self-closing-comp */
import React, { HTMLProps, MutableRefObject } from 'react'
import PlyrJS, { Options, SourceInfo, PlyrEvent as PlyrJSEvent } from 'plyr'
import PropTypes from 'prop-types'
import useAptor from 'react-aptor'

export type PlyrInstance = PlyrJS
export type PlyrEvent = PlyrJSEvent
export type PlyrCallback = (this: PlyrJS, event: PlyrEvent) => void

export type PlyrProps = Omit<HTMLProps<HTMLVideoElement>, 'ref'> & {
  source?: SourceInfo
  options?: Options
}
export type HTMLPlyrVideoElement = HTMLVideoElement & { plyr?: PlyrInstance }

export type APITypes = ReturnType<ReturnType<typeof getAPI>>

/* REACT-APTOR */
const instantiate = (node, { options, source }) => {
  const plyr = new PlyrJS(node, options || {})
  plyr.source = source
  return plyr
}

const destroy = (plyr: PlyrJS | null) => {
  if (plyr) plyr.destroy()
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

const getAPI = (plyr: PlyrJS | null) => {
  if (!plyr)
    return () =>
      new Proxy(
        { plyr: { source: null } },
        {
          get: (target, prop) => {
            if (prop === 'plyr') {
              return target[prop]
            }
            return noop
          },
        }
      )

  return () => ({
    /**
     * Plyr instance with all of its functionality
     */
    plyr,
  })
}

const Plyr = React.forwardRef<APITypes, PlyrProps>((props, ref) => {
  const { source, options = null, ...rest } = props

  const raptorRef = useAptor(
    ref,
    {
      instantiate,
      getAPI,
      destroy,
      params: { options, source },
    },
    [options, source]
  )

  return (
    <video
      ref={raptorRef as MutableRefObject<HTMLVideoElement>}
      className="plyr-react plyr"
      {...rest}
    />
  )
})

Plyr.displayName = 'Plyr'

Plyr.defaultProps = {
  options: {
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
    ],
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop',
    },
  },
  source: {
    type: 'video',
    sources: [
      {
        src: 'https://cdn.plyr.io/static/blank.mp4',
        type: 'video/mp4',
        size: 720,
      },
      {
        src: 'https://cdn.plyr.io/static/blank.mp4',
        type: 'video/mp4',
        size: 1080,
      },
    ],
  },
}

Plyr.propTypes = {
  options: PropTypes.object,
  source: PropTypes.any,
}

export default Plyr
