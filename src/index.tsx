/* eslint-disable react/self-closing-comp */
import React, {
  HTMLProps,
  MutableRefObject,
  useEffect,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import PlyrJS, { Options, SourceInfo, PlyrEvent as PlyrJSEvent } from 'plyr'

export type PlyrInstance = PlyrJS
export type PlyrEvent = PlyrJSEvent
export type PlyrCallback = (this: PlyrJS, event: PlyrEvent) => void

export type PlyrProps = HTMLProps<HTMLVideoElement> & {
  source?: SourceInfo
  options?: Options
}
export type HTMLPlyrVideoElement = HTMLVideoElement & { plyr?: PlyrInstance }

export const Plyr = React.forwardRef<HTMLPlyrVideoElement, PlyrProps>(
  (props, ref) => {
    const { options = null, source, ...rest } = props
    const innerRef = useRef<HTMLPlyrVideoElement>()
    useEffect(() => {
      if (!innerRef.current) return

      if (!innerRef.current?.plyr) {
        innerRef.current.plyr = new PlyrJS('.plyr-react', options ?? {})
      }

      if (typeof ref === 'function') {
        if (innerRef.current) ref(innerRef.current)
      } else {
        if (ref && innerRef.current) ref.current = innerRef.current
      }

      if (innerRef.current && source) {
        innerRef.current.plyr.source = source
      }
    }, [ref, options, source])

    return (
      <video
        ref={(innerRef as unknown) as MutableRefObject<HTMLVideoElement>}
        className="plyr-react plyr"
        {...rest}
      />
    )
  }
)

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
        src:
          'https://cdn.plyr.io/static/blank.mp4',
        type: 'video/mp4',
        size: 720,
      },
      {
        src:
          'https://cdn.plyr.io/static/blank.mp4',
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
