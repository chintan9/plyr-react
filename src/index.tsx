import {
  DetailedHTMLProps,
  MutableRefObject,
  Ref,
  VideoHTMLAttributes,
  forwardRef,
} from "react";
import PlyrJS, { Options, SourceInfo } from "plyr";
import useAptor from "react-aptor";

export type PlyrInstance = PlyrJS;
export type PlyrOptions = Options;
export type PlyrSource = SourceInfo;
type PlyrConfigurationProps = {
  source: PlyrSource | null;
  options?: PlyrOptions | null;
};

type ReactVideoProps = DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;
export type PlyrProps = Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps;

export interface APITypes {
  plyr: PlyrInstance;
}

/* REACT-APTOR */
const instantiate = (_, params: PlyrConfigurationProps) => {
  // The node update of ref in react life cycle seems to have issue, used class selector instead
  const plyr = new PlyrJS(".plyr-react", params.options || {});
  if (params.source) plyr.source = params.source;
  return plyr;
};

const destroy = (plyr: PlyrJS | null) => {
  if (plyr) plyr.destroy();
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const getAPI = (plyr: PlyrJS | null) => {
  if (!plyr) {
    return () =>
      new Proxy({ plyr: { source: null } } as unknown as APITypes, {
        get: (target, prop) => {
          if (prop === "plyr") {
            return target[prop];
          }
          return noop;
        },
      });
  }

  return () => ({
    /**
     * Plyr instance with all of its functionality
     */
    plyr,
  });
};

export function usePlyr(
  ref: Ref<APITypes>,
  params: PlyrConfigurationProps,
  deps: any = null
) {
  return useAptor<PlyrInstance, HTMLVideoElement, PlyrConfigurationProps>(
    ref,
    {
      instantiate,
      getAPI,
      destroy,
      params,
    },
    deps || [params.options, params.source]
  );
}

const Plyr = forwardRef<APITypes, PlyrProps>((props, ref) => {
  const { source, options = null, ...rest } = props;
  const raptorRef = usePlyr(ref, {
    source,
    options,
  }) as MutableRefObject<HTMLVideoElement>;
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />;
});
if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const PropTypes = require("prop-types");
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
        "fullscreen",
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
        loop: "Loop",
      },
    },
    source: {
      type: "video",
      sources: [
        {
          src: "https://cdn.plyr.io/static/blank.mp4",
          type: "video/mp4",
          size: 720,
        },
        {
          src: "https://cdn.plyr.io/static/blank.mp4",
          type: "video/mp4",
          size: 1080,
        },
      ],
    },
  };

  Plyr.propTypes = {
    options: PropTypes.object,
    source: PropTypes.any,
  };
}

export default Plyr;
