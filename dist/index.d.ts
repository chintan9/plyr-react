import * as React from "react";
import type { DependencyList, DetailedHTMLProps, Ref, RefAttributes, // Import RefAttributes
VideoHTMLAttributes } from "react";
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
/**
 * Connects a video element ref to a Plyr instance and exposes a forwarded API ref.
 *
 * Initializes and manages the Plyr lifecycle using the provided `params`. The returned ref
 * should be attached to the underlying <video> element; the forwarded `ref` receives an
 * API object (shape: { plyr: PlyrInstance }) that is safe to use from parent components.
 *
 * @param params - Configuration for the Plyr instance: `source` (media source or null) and
 *   `options` (Plyr options or null). Changes to these values will reconfigure the player.
 * @param deps - Optional dependency list controlling when the underlying aptor logic runs.
 *   If `null`, defaults to [params.options, params.source].
 * @returns A ref to attach to the <video> element that Plyr will control.
 */
export declare function usePlyr(ref: Ref<APITypes>, params: PlyrConfigurationProps, deps?: DependencyList | null): React.Ref<HTMLVideoElement>;
declare const PlyrComponent: React.ForwardRefExoticComponent<PlyrProps & RefAttributes<APITypes>>;
export { PlyrComponent as Plyr };
