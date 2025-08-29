import * as React from "react";
import type { DependencyList, DetailedHTMLProps, Ref, VideoHTMLAttributes } from "react";
import * as Plyr from "plyr";
export type PlyrInstance = Plyr.default;
export type PlyrOptions = Plyr.Options;
export type PlyrSource = Plyr.SourceInfo;
type PlyrConfigurationProps = {
    source: PlyrSource | null;
    options?: PlyrOptions | null;
};
type ReactVideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
export type PlyrProps = Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps;
export interface APITypes {
    plyr: PlyrInstance;
}
export declare function usePlyr(ref: Ref<APITypes>, params: PlyrConfigurationProps, deps?: DependencyList | null): React.RefObject<HTMLVideoElement>;
declare const PlyrComponent: React.ForwardRefExoticComponent<Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps & React.RefAttributes<APITypes>>;
export { PlyrComponent as Plyr };
