import {
  DependencyList,
  DetailedHTMLProps,
  Ref,
  VideoHTMLAttributes,
} from "react";
import PlyrJS, { Options, SourceInfo } from "plyr";
export declare type PlyrInstance = PlyrJS;
export declare type PlyrOptions = Options;
export declare type PlyrSource = SourceInfo;
declare type PlyrConfigurationProps = {
  source: PlyrSource | null;
  options?: PlyrOptions | null;
};
declare type ReactVideoProps = DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;
export declare type PlyrProps = Omit<ReactVideoProps, "ref"> &
  PlyrConfigurationProps;
export interface APITypes {
  plyr: PlyrInstance;
}
export declare function usePlyr(
  ref: Ref<APITypes>,
  params: PlyrConfigurationProps,
  deps?: DependencyList | null
): import("react").RefObject<HTMLVideoElement>;
declare const Plyr: import("react").ForwardRefExoticComponent<
  Omit<ReactVideoProps, "ref"> &
    PlyrConfigurationProps &
    import("react").RefAttributes<APITypes>
>;
export default Plyr;
