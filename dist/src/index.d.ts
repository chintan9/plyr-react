import React, { DetailedHTMLProps, VideoHTMLAttributes } from 'react';
import PlyrJS, { Options, SourceInfo } from 'plyr';
export declare type PlyrInstance = PlyrJS;
declare type ReactVideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
export declare type PlyrProps = Omit<ReactVideoProps, 'ref'> & {
    source?: SourceInfo;
    options?: Options;
};
export declare type APITypes = ReturnType<ReturnType<typeof getAPI>>;
declare const getAPI: (plyr: PlyrJS | null) => (() => {
    plyr: {
        source: null;
    };
}) | (() => {
    /**
     * Plyr instance with all of its functionality
     */
    plyr: PlyrJS;
});
export declare function usePlyr(ref: any, { source, options }: {
    source: any;
    options: any;
}): React.RefObject<HTMLElement>;
declare const Plyr: React.ForwardRefExoticComponent<Omit<ReactVideoProps, "ref"> & {
    source?: PlyrJS.SourceInfo | undefined;
    options?: PlyrJS.Options | undefined;
} & React.RefAttributes<APITypes>>;
export default Plyr;
