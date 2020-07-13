import React, { HTMLAttributes } from 'react';
import { Options } from 'plyr';
export declare type PlyrProps = HTMLAttributes<HTMLDivElement> & {
    options?: Options;
};
export declare const Plyr: React.SFC<PlyrProps>;
export default Plyr;
