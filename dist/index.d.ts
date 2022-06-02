import * as React from "react";
import type { DependencyList, DetailedHTMLProps, Ref, VideoHTMLAttributes } from "react";
import PlyrJS, { Options, SourceInfo } from "plyr";
export declare type PlyrInstance = PlyrJS;
export declare type PlyrOptions = Options;
export declare type PlyrSource = SourceInfo;
declare type PlyrConfigurationProps = {
    source: PlyrSource | null;
    options?: PlyrOptions | null;
};
declare type ReactVideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
export declare type PlyrProps = Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps;
export interface APITypes {
    plyr: PlyrInstance;
}
export declare function usePlyr(ref: Ref<APITypes>, params: PlyrConfigurationProps, deps?: DependencyList | null): React.RefObject<HTMLVideoElement>;
declare const Plyr: React.ForwardRefExoticComponent<Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps & React.RefAttributes<APITypes>>;
export default Plyr;
