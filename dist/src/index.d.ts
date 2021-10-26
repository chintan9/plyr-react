import React, { HTMLProps } from 'react';
import PlyrJS, { Options, SourceInfo, PlyrEvent as PlyrJSEvent } from 'plyr';
export declare type PlyrInstance = PlyrJS;
export declare type PlyrEvent = PlyrJSEvent;
export declare type PlyrCallback = (this: PlyrJS, event: PlyrEvent) => void;
export declare type PlyrProps = Omit<HTMLProps<HTMLVideoElement>, 'ref'> & {
    source?: SourceInfo;
    options?: Options;
};
export declare type HTMLPlyrVideoElement = HTMLVideoElement & {
    plyr?: PlyrInstance;
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
declare const Plyr: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLVideoElement>, "ref"> & {
    source?: PlyrJS.SourceInfo | undefined;
    options?: PlyrJS.Options | undefined;
} & React.RefAttributes<APITypes>>;
export default Plyr;
