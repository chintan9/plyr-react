import React, { DetailedHTMLProps, VideoHTMLAttributes } from 'react';
import PlyrJS, { Options, SourceInfo } from 'plyr';
export declare type PlyrInstance = PlyrJS;
export declare type PlyrOptions = Options;
export declare type PlyrSource = SourceInfo;
declare type PlyrConfigurationProps = {
    source?: PlyrSource | null;
    options?: PlyrOptions | null;
};
declare type ReactVideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
export declare type PlyrProps = Omit<ReactVideoProps, 'ref'> & PlyrConfigurationProps;
export interface APITypes {
    plyr: PlyrInstance;
}
export declare function usePlyr(ref: React.Ref<APITypes> | undefined, { source, options }: PlyrConfigurationProps, deps?: any): React.RefObject<HTMLElement>;
declare const Plyr: React.ForwardRefExoticComponent<Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps & React.RefAttributes<APITypes>>;
export default Plyr;
