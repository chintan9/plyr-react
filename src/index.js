import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react'
import PropTypes from 'prop-types'
import plyr from 'plyr'
import 'plyr/dist/plyr.css'

class PlyrComponent extends React.Component {
  componentDidMount() {
    this.player = new plyr('.js-plyr', this.props.options)
    this.player.source = this.props.sources
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  render() {
    return (
      <video className='js-plyr plyr'>
      </video>
    )
  }
}

PlyrComponent.defaultProps = {
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
  sources: {
    type: 'video',
    sources: [
      {
        src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1280_10MG.mp4',
        type: 'video/mp4',
        size: 720,
      },
      {
        src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
        type: 'video/mp4',
        size: 1080,
      },
    ],
  }
}

PlyrComponent.propTypes = {
  options: PropTypes.object,
  sources: PropTypes.object,
  source: PropTypes.func,
  destroy: PropTypes.func
}

export default PlyrComponent
