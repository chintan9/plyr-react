import * as React from "react";
import type {
  DependencyList,
  DetailedHTMLProps,
  MutableRefObject,
  Ref,
  RefAttributes, // Import RefAttributes
  VideoHTMLAttributes,
} from "react";
// This is the critical change for the import
import * as Plyr from "plyr";
import useAptor, { Destroy, GetAPI, Instantiate } from "react-aptor";

// And this is the critical change for usage
const PlyrJS = Plyr.default;

export type PlyrInstance = Plyr.default;
export type PlyrOptions = Plyr.Options;
export type PlyrSource = Plyr.SourceInfo;

type PlyrConfigurationProps = {
  source: PlyrSource | null;
  options?: PlyrOptions | null;
};

type ReactVideoProps = DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;
export type PlyrProps = Omit<ReactVideoProps, "ref"> & PlyrConfigurationProps;

export interface APITypes {
  plyr: PlyrInstance;
}

type MountedPlyr = {
  plyr: PlyrInstance;
  params: PlyrConfigurationProps | undefined;
};

const mountedByNode = new WeakMap<HTMLVideoElement, MountedPlyr>();
const pendingDestroy = new WeakMap<
  PlyrInstance,
  ReturnType<typeof setTimeout>
>();

const instantiate: Instantiate<
  PlyrInstance,
  HTMLVideoElement,
  PlyrConfigurationProps
> = (node, params) => {
  const previous = node ? mountedByNode.get(node) : undefined;
  const timer = previous && pendingDestroy.get(previous.plyr);
  if (previous && timer !== undefined) {
    clearTimeout(timer);
    pendingDestroy.delete(previous.plyr);
    // Same params object means React re-ran the effect without a re-render (Strict Mode replay).
    if (previous.params === params) return previous.plyr;
    previous.plyr.destroy();
  }

  const plyr = new PlyrJS(".plyr-react", params?.options ?? {});
  if (params?.source) plyr.source = params?.source;

  if (node) mountedByNode.set(node, { plyr, params });
  return plyr;
};

const destroy: Destroy<PlyrInstance, PlyrConfigurationProps> = (
  plyr: PlyrInstance | null
) => {
  if (!plyr) return;
  // Deferred so an immediate re-instantiate on the same node can reclaim this instance.
  pendingDestroy.set(
    plyr,
    setTimeout(() => {
      pendingDestroy.delete(plyr);
      plyr.destroy();
    }, 0)
  );
};

const noop = () => {};

const getAPI: GetAPI<PlyrInstance, PlyrConfigurationProps> = (
  plyr: PlyrInstance | null
) => {
  if (!plyr) {
    return () =>
      new Proxy({ plyr: { source: null } } as unknown as APITypes, {
        get: (target, prop) => {
          if (prop === "plyr") {
            return target[prop];
          }
          return noop;
        },
      });
  }

  return () => ({
    plyr,
  });
};

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
export function usePlyr(
  ref: Ref<APITypes>,
  params: PlyrConfigurationProps,
  deps: DependencyList | null = null
): React.Ref<HTMLVideoElement> {
  return useAptor<PlyrInstance, HTMLVideoElement, PlyrConfigurationProps>(
    ref,
    {
      instantiate,
      getAPI,
      destroy,
      // Fresh object per render so instantiate can tell a Strict Mode replay from a deps change.
      params: { ...params },
    },
    deps ?? [params.options, params.source]
  );
}

const PlyrComponent: React.ForwardRefExoticComponent<
  PlyrProps & RefAttributes<APITypes>
> = React.forwardRef<APITypes, PlyrProps>((props, ref) => {
  const { source, options = null, ...rest } = props;
  const raptorRef = usePlyr(ref, {
    source,
    options,
  }) as MutableRefObject<HTMLVideoElement>;
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />;
});

PlyrComponent.displayName = "Plyr";

export { PlyrComponent as Plyr };
