import * as React from "react";
import { APITypes, PlyrProps, usePlyr } from "plyr-react";
import "plyr-react/dist/plyr.css";
import Hls from "hls.js";
import { Options } from "plyr";

const videoOptions = null;
const videoSource = null;
const hlsSource = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

const useHls = (src: string, options: Options | null) => {
  const hls = React.useRef<Hls>(new Hls());
  const hasQuality = React.useRef<boolean>(false);
  const [plyrOptions, setPlyrOptions] = React.useState<Options | null>(options);

  React.useEffect(() => {
    hasQuality.current = false;
  }, [options]);

  React.useEffect(() => {
    hls.current.loadSource(src);
    // NOTE: although it is more reactive to use the ref, but it seems that plyr wants to use the old as lazy process
    hls.current.attachMedia(document.querySelector(".plyr-react")!);
    /**
     * You can all your custom event listener here
     * For this example we iterate over the qualities and pass them to plyr player
     * ref.current.plyr.play() ❌
     * console.log.bind(console, 'MANIFEST_PARSED') ✅
     * NOTE: you can only start play the audio here
     * Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
     */
    hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
      if (hasQuality.current) return; // early quit if already set

      const levels = hls.current.levels;
      const quality: Options["quality"] = {
        default: levels[levels.length - 1].height,
        options: levels.map((level) => level.height),
        forced: true,
        onChange: (newQuality: number) => {
          console.log("changes", newQuality);
          levels.forEach((level, levelIndex) => {
            if (level.height === newQuality) {
              hls.current.currentLevel = levelIndex;
            }
          });
        },
      };
      setPlyrOptions({ ...plyrOptions, quality });
      hasQuality.current = true;
    });
  });

  return { options: plyrOptions };
};

const CustomPlyrInstance = React.forwardRef<
  APITypes,
  PlyrProps & { hlsSource: string }
>((props, ref) => {
  const { source, options = null, hlsSource } = props;
  const raptorRef = usePlyr(ref, {
    ...useHls(hlsSource, options),
    source,
  }) as React.MutableRefObject<HTMLVideoElement>;
  return <video ref={raptorRef} className="plyr-react plyr" />;
});

const PlyrComponent = () => {
  const ref = React.useRef<APITypes>(null);
  const supported = Hls.isSupported();

  return (
    <div className="wrapper">
      {supported ? (
        <CustomPlyrInstance
          ref={ref}
          source={videoSource}
          options={videoOptions}
          hlsSource={hlsSource}
        />
      ) : (
        "HLS is not supported in your browser"
      )}
    </div>
  );
};

export default PlyrComponent;
