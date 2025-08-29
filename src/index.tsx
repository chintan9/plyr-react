import * as React from "react";
import type {
  DependencyList,
  DetailedHTMLProps,
  MutableRefObject,
  Ref,
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

const instantiate: Instantiate<
  PlyrInstance,
  HTMLVideoElement,
  PlyrConfigurationProps
> = (_, params) => {
  const plyr = new PlyrJS(".plyr-react", params?.options ?? {});
  if (params?.source) plyr.source = params?.source;
  return plyr;
};

const destroy: Destroy<PlyrInstance, PlyrConfigurationProps> = (
  plyr: PlyrInstance | null
) => {
  if (plyr) plyr.destroy();
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

export function usePlyr(
  ref: Ref<APITypes>,
  params: PlyrConfigurationProps,
  deps: DependencyList | null = null
) {
  return useAptor<PlyrInstance, HTMLVideoElement, PlyrConfigurationProps>(
    ref,
    {
      instantiate,
      getAPI,
      destroy,
      params,
    },
    deps ?? [params.options, params.source]
  );
}

const PlyrComponent = React.forwardRef<APITypes, PlyrProps>((props, ref) => {
  const { source, options = null, ...rest } = props;
  const raptorRef = usePlyr(ref, {
    source,
    options,
  }) as MutableRefObject<HTMLVideoElement>;
  return <video ref={raptorRef} className="plyr-react plyr" {...rest} />;
});

PlyrComponent.displayName = "Plyr";

export { PlyrComponent as Plyr };
