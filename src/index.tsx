import * as React from "react";
import type {
  DependencyList,
  DetailedHTMLProps,
  MutableRefObject,
  Ref,
  RefAttributes,
  VideoHTMLAttributes,
} from "react";
// This is the critical change for the import
import * as Plyr from "plyr";
import useAptor, { Destroy, GetAPI, Instantiate } from "react-aptor";

// And this is the critical change for usage
const PlyrJS = Plyr.default;

/**
 * Represents an instance of the Plyr media player.
 * @see https://github.com/sampotts/plyr#api
 */
export type PlyrInstance = Plyr.default;

/**
 * Configuration options for the Plyr media player.
 * @see https://github.com/sampotts/plyr#options
 */
export type PlyrOptions = Plyr.Options;

/**
 * Describes the media source to be played by Plyr.
 * @see https://github.com/sampotts/plyr#sources
 */
export type PlyrSource = Plyr.SourceInfo;

type PlyrConfigurationProps = {
  source: PlyrSource | null;
  options?: PlyrOptions | null;
};

type ReactVideoProps = DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;

/**
 * Props for the main `<Plyr />` component.
 * Extends all standard HTMLVideoElement attributes.
 */
export type PlyrProps = Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps;

/**
 * Defines the structure of the API object accessible via the component's ref.
 */
export interface APITypes {
  /** The underlying Plyr instance, allowing full access to the Plyr API. */
  plyr: PlyrInstance;
}

/**
 * @internal
 * Instantiates the Plyr player on a given HTML element.
 * This function is used by the `useAptor` hook and is not intended for direct use.
 * It correctly handles null elements during React's render lifecycle.
 */
const instantiateImplementation = (
  element: HTMLVideoElement | null,
  params: PlyrConfigurationProps | undefined
): PlyrInstance | null => {
  if (element === null) {
    return null;
  }
  const plyr = new PlyrJS(element, params?.options ?? {});
  if (params?.source) {
    plyr.source = params?.source;
  }
  return plyr;
};

/**
 * @internal
 * A type-asserted version of the instantiation logic to satisfy the strict
 * type definition from the `react-aptor` library, which incorrectly disallows
 * a `null` return type.
 */
const instantiate = instantiateImplementation as Instantiate<
  PlyrInstance,
  HTMLVideoElement,
  PlyrConfigurationProps
>;

/**
 * @internal
 * Destroys the Plyr instance to clean up resources.
 * Used by the `useAptor` hook during component unmount.
 */
const destroy: Destroy<PlyrInstance, PlyrConfigurationProps> = (
  plyr: PlyrInstance | null
) => {
  if (plyr) plyr.destroy();
};

const noop = () => {};

/**
 * @internal
 * Provides the API object that will be exposed on the ref.
 * Used by the `useAptor` hook.
 */
const getAPI: GetAPI<PlyrInstance, PlyrConfigurationProps> = (
  plyr: PlyrInstance | null
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
    plyr,
  });
};

/**
 * A React hook for advanced integration of the Plyr player.
 * This hook handles the lifecycle of the Plyr instance and attaches it to a ref.
 * It is recommended for building custom player components.
 *
 * @param ref A React ref object that will receive the Plyr API.
 * @param params An object containing the `source` and `options` for the player.
 * @param deps A dependency array to control when the player should be re-instantiated.
 * Defaults to `[params.options, params.source]`.
 * @returns A ref callback that must be attached to a `<video>` or `<div>` element.
 *
 * @example
 * ```jsx
 * import { usePlyr } from 'plyr-react';
 * import 'plyr-react/plyr.css';
 *
 * const CustomPlayer = React.forwardRef((props, ref) => {
 *   const { source, options } = props;
 *   const playerRef = usePlyr(ref, { source, options });
 *   return <video ref={playerRef} className="plyr-react plyr" />;
 * });
 * ```
 */
export function usePlyr(
  ref: Ref<APITypes>,
  params: PlyrConfigurationProps,
  deps: DependencyList | null = null
): React.Ref<HTMLVideoElement> {
  return useAptor<PlyrInstance, HTMLVideoElement, PlyrConfigurationProps>(
    ref,
    {
      instantiate,
      getAPI,
      destroy,
      params,
    },
    deps ?? [params.options, params.source]
  );
}

/**
 * A responsive and accessible media player component for React, built on Plyr.
 * Supports HTML5 video, audio, YouTube, and Vimeo.
 *
 * This component forwards a ref to the underlying Plyr instance, allowing you
 * to access and control the player programmatically.
 *
 * @param {PlyrProps} props The props for the component.
 * @param {React.Ref<APITypes>} ref A ref to access the Plyr API.
 * @returns {React.ReactElement} A React component that renders the media player.
 *
 * @example
 * ```jsx
 * import { Plyr } from 'plyr-react';
 * import 'plyr-react/plyr.css';
 * import { useRef } from 'react';
 *
 * function MyVideoPlayer() {
 *   const ref = useRef(null);
 *
 *   const videoSource = {
 *     type: 'video',
 *     sources: [{ src: 'aqz-KE-bpKQ', provider: 'youtube' }],
 *   };
 *
 *   const handleClick = () => {
 *     if (ref.current && ref.current.plyr) {
 *       ref.current.plyr.play();
 *     }
 *   };
 *
 *   return (
 *     <div>
 *       <Plyr ref={ref} source={videoSource} />
 *       <button onClick={handleClick}>Play Video</button>
 *     </div>
 *   );
 * }
 * ```
 */
const PlyrComponent: React.ForwardRefExoticComponent<
  PlyrProps & RefAttributes<APITypes>
> = React.forwardRef<APITypes, PlyrProps>((props, ref) => {
  const { source, options = null, ...rest } = props;
  const raptorRef = usePlyr(ref, {
    source,
    options,
  }) as MutableRefObject<HTMLVideoElement>;
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />;
});

PlyrComponent.displayName = "Plyr";

export { PlyrComponent as Plyr };
