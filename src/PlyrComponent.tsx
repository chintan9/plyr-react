/* eslint-disable react/self-closing-comp */
import React, { useEffect, HTMLAttributes } from 'react'
import PropTypes, { object } from 'prop-types'
import PlyrLib, { SourceInfo, Options } from 'plyr'
export type PlyrProps = HTMLAttributes<HTMLVideoElement> & {
  source?: SourceInfo
  options?: Options
}

export const Plyr: React.SFC<PlyrProps> = (props) => {
  const { options = null, source, ...rest } = props
  let player: PlyrLib
  useEffect(() => {
    player = new PlyrLib('.plyr-react', options ?? {})
    if (source) {
      player.source = source
    }
    return () => player?.destroy()
  }, [source])

  return <video className="plyr-react plyr" {...rest} />
}
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
          'https://rawcdn.githack.com/chintan9/Big-Buck-Bunny/e577fdbb23064bdd8ac4cecf13db86eef5720565/BigBuckBunny720p30s.mp4',
        type: 'video/mp4',
        size: 720,
      },
      {
        src:
          'https://rawcdn.githack.com/chintan9/Big-Buck-Bunny/e577fdbb23064bdd8ac4cecf13db86eef5720565/BigBuckBunny1080p30s.mp4',
        type: 'video/mp4',
        size: 1080,
      },
    ],
  },
}

Plyr.propTypes = {
  options: PropTypes.object,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: PropTypes.oneOfType([object, null as any, undefined]),
}

export default Plyr
