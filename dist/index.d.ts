import * as React from "react";
import { DependencyList, DetailedHTMLProps, Ref, VideoHTMLAttributes } from "react";
import PlyrJS, { Options, SourceInfo } from "plyr";

//#region src/index.d.ts
type PlyrInstance = PlyrJS;
type PlyrOptions = Options;
type PlyrSource = SourceInfo;
type PlyrConfigurationProps = {
  source: PlyrSource | null;
  options?: PlyrOptions | null;
};
type ReactVideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
type PlyrProps = Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps;
interface APITypes {
  plyr: PlyrInstance;
}
/**
 * It creates a React hook that returns a ref to a video element that is initialized with Plyr
 * @param ref - Ref<APITypes>
 * @param {PlyrConfigurationProps} params - PlyrConfigurationProps,
 * @param {DependencyList | null} [deps=null] - DependencyList | null = null
 * @returns A function that returns a React component.
 */
declare function usePlyr(ref: Ref<APITypes>, params: PlyrConfigurationProps, deps?: DependencyList | null): React.RefObject<HTMLVideoElement>;
declare const Plyr: React.ForwardRefExoticComponent<Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps & React.RefAttributes<APITypes>>;
//#endregion
export { APITypes, PlyrInstance, PlyrOptions, PlyrProps, PlyrSource, Plyr as default, usePlyr };