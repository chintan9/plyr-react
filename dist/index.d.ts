import * as React from "react";
import type { DependencyList, DetailedHTMLProps, Ref, RefAttributes, VideoHTMLAttributes } from "react";
import * as Plyr from "plyr";
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
type ReactVideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
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
export declare function usePlyr(ref: Ref<APITypes>, params: PlyrConfigurationProps, deps?: DependencyList | null): React.Ref<HTMLVideoElement>;
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
declare const PlyrComponent: React.ForwardRefExoticComponent<PlyrProps & RefAttributes<APITypes>>;
export { PlyrComponent as Plyr };
