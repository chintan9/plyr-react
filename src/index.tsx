import * as React from "react";
import type {
  DependencyList,
  DetailedHTMLProps,
  MutableRefObject,
  Ref,
  VideoHTMLAttributes,
} from "react";
import PlyrJS, { Options, SourceInfo } from "plyr";
import PropTypes from "prop-types";
import useAptor, { Destroy, GetAPI, Instantiate } from "react-aptor";

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

/**
 * It creates a new PlyrJS instance, and if a source is provided, it sets the source of the PlyrJS
 * instance to the source provided
 * @param node - The latest element of the DOM node which has plyr in it.
 * @param params - The props passed to the component
 * @returns A function that takes two parameters and returns a new instance of PlyrJS.
 */
/* REACT-APTOR */
const instantiate: Instantiate<
  PlyrJS,
  HTMLVideoElement,
  PlyrConfigurationProps
> = (_, params) => {
  // The node update of ref in react life cycle seems to have issue, used class selector instead
  const plyr = new PlyrJS(".plyr-react", params!.options || {});
  if (params!.source) plyr.source = params!.source;
  return plyr;
};

/**
 * It destroys the PlyrJS instance.
 * @param {PlyrJS | null} plyr - PlyrJS | null
 */
const destroy: Destroy<PlyrJS, PlyrConfigurationProps> = (
  plyr: PlyrJS | null
) => {
  if (plyr) plyr.destroy();
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

/**
 * It returns an object with a `plyr` property that contains the Plyr instance
 * @param {PlyrJS | null} plyr - PlyrJS | null
 * @returns A function that returns an object with a single property, plyr.
 */
const getAPI: GetAPI<PlyrJS, PlyrConfigurationProps> = (
  plyr: PlyrJS | null
) => {
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

/**
 * It creates a React hook that returns a ref to a video element that is initialized with Plyr
 * @param ref - Ref<APITypes>
 * @param {PlyrConfigurationProps} params - PlyrConfigurationProps,
 * @param {DependencyList | null} [deps=null] - DependencyList | null = null
 * @returns A function that returns a React component.
 */
export function usePlyr(
  ref: Ref<APITypes>,
  params: PlyrConfigurationProps,
  deps: DependencyList | null = null
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

/* Creating a React component that is initialized with Plyr. */
const Plyr = React.forwardRef<APITypes, PlyrProps>((props, ref) => {
  const { source, options = null, ...rest } = props;
  const raptorRef = usePlyr(ref, {
    source,
    options,
  }) as MutableRefObject<HTMLVideoElement>;
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />;
});

/* Setting the default props and prop types for the component. */
if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
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
