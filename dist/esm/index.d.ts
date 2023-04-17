import * as React from "react";
import type { DependencyList, DetailedHTMLProps, Ref, VideoHTMLAttributes } from "react";
import PlyrJS, { Options, SourceInfo } from "plyr";
export type PlyrInstance = PlyrJS;
export type PlyrOptions = Options;
export type PlyrSource = SourceInfo;
type PlyrConfigurationProps = {
    source: PlyrSource | null;
    options?: PlyrOptions | null;
};
type ReactVideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
export type PlyrProps = Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps;
export interface APITypes {
    plyr: PlyrInstance;
}
/**
 * It creates a React hook that returns a ref to a video element that is initialized with Plyr
 * @param ref - Ref<APITypes>
 * @param {PlyrConfigurationProps} params - PlyrConfigurationProps,
 * @param {DependencyList | null} [deps=null] - DependencyList | null = null
 * @returns A function that returns a React component.
 */
export declare function usePlyr(ref: Ref<APITypes>, params: PlyrConfigurationProps, deps?: DependencyList | null): React.RefObject<HTMLVideoElement>;
declare const Plyr: React.ForwardRefExoticComponent<Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps & React.RefAttributes<APITypes>>;
export default Plyr;
