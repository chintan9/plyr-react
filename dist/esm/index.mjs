import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import PlyrJS from 'plyr';
import PropTypes from 'prop-types';
import useAptor from 'react-aptor';

const instantiate = (_, params) => {
  const plyr = new PlyrJS(".plyr-react", params.options || {});
  if (params.source)
    plyr.source = params.source;
  return plyr;
};
const destroy = (plyr) => {
  if (plyr)
    plyr.destroy();
};
const noop = () => {
};
const getAPI = (plyr) => {
  if (!plyr) {
    return () => new Proxy({ plyr: { source: null } }, {
      get: (target, prop) => {
        if (prop === "plyr") {
          return target[prop];
        }
        return noop;
      }
    });
  }
  return () => ({
    /**
     * Plyr instance with all of its functionality
     */
    plyr
  });
};
function usePlyr(ref, params, deps = null) {
  return useAptor(
    ref,
    {
      instantiate,
      getAPI,
      destroy,
      params
    },
    deps || [params.options, params.source]
  );
}
const Plyr = React.forwardRef((props, ref) => {
  const { source, options = null, ...rest } = props;
  const raptorRef = usePlyr(ref, {
    source,
    options
  });
  return /* @__PURE__ */ jsx("video", { ref: raptorRef, className: "plyr-react plyr", ...rest });
});
if ((import.meta.env && import.meta.env.MODE) !== "production") {
  Plyr.displayName = "Plyr";
  Plyr.defaultProps = {
    options: {
      controls: [
        "rewind",
        "play",
        "fast-forward",
        "progress",
        "current-time",
        "duration",
        "mute",
        "volume",
        "settings",
        "fullscreen"
      ],
      i18n: {
        restart: "Restart",
        rewind: "Rewind {seektime}s",
        play: "Play",
        pause: "Pause",
        fastForward: "Forward {seektime}s",
        seek: "Seek",
        seekLabel: "{currentTime} of {duration}",
        played: "Played",
        buffered: "Buffered",
        currentTime: "Current time",
        duration: "Duration",
        volume: "Volume",
        mute: "Mute",
        unmute: "Unmute",
        enableCaptions: "Enable captions",
        disableCaptions: "Disable captions",
        download: "Download",
        enterFullscreen: "Enter fullscreen",
        exitFullscreen: "Exit fullscreen",
        frameTitle: "Player for {title}",
        captions: "Captions",
        settings: "Settings",
        menuBack: "Go back to previous menu",
        speed: "Speed",
        normal: "Normal",
        quality: "Quality",
        loop: "Loop"
      }
    },
    source: {
      type: "video",
      sources: [
        {
          src: "https://cdn.plyr.io/static/blank.mp4",
          type: "video/mp4",
          size: 720
        },
        {
          src: "https://cdn.plyr.io/static/blank.mp4",
          type: "video/mp4",
          size: 1080
        }
      ]
    }
  };
  Plyr.propTypes = {
    options: PropTypes.object,
    source: PropTypes.any
  };
}

export { Plyr as default, usePlyr };
