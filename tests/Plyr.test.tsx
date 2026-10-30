import * as React from "react";
import { act, render } from "@testing-library/react";
import PlyrJS from "plyr";
import {
  APITypes,
  Plyr,
  PlyrInstance,
  PlyrSource,
  usePlyr,
} from "../src/index";

// https://github.com/jsdom/jsdom/issues/2541#issuecomment-788761237
jest.mock("plyr");
jest.mock("plyr", () => {
  return jest
    .fn()
    .mockImplementation(() => ({ destroy: jest.fn(), playing: false }));
});

const SOURCE = null;
describe("<Plyr />", () => {
  it("should render", () => {
    const { container } = render(<Plyr source={SOURCE} />);
    expect(container.querySelector("video")).toBeDefined();
  });

  it("should render and set a forward ref", () => {
    const setRef = jest.fn();
    const { container } = render(<Plyr ref={setRef} source={SOURCE} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(setRef).toHaveBeenCalled();
  });

  it("should render and have a plyr instance in ref.current", () => {
    const ref = React.createRef<{ plyr: PlyrInstance }>();
    const { container } = render(<Plyr ref={ref} source={SOURCE} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current?.plyr).toBeDefined();
  });

  it("should render and have a plyr instance in ref.current when using a ref callback", () => {
    const ref = React.createRef<{ plyr: PlyrInstance }>();
    const { container } = render(
      <Plyr
        ref={(player) => {
          // @ts-expect-error [Note: Current type is readonly]
          ref.current = player;
        }}
        source={SOURCE}
      />
    );

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current?.plyr).toBeDefined();
  });

  it("should render and keep a plyr instance after a rerender", () => {
    const ref = React.createRef<{ plyr: PlyrInstance }>();
    const { container, rerender } = render(<Plyr ref={ref} source={SOURCE} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current?.plyr).toBeDefined();

    rerender(<Plyr ref={ref} source={SOURCE} />);
    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current?.plyr).toBeDefined();
    expect((ref.current?.plyr as PlyrInstance).playing).toBe(false);
  });
});

describe("<Plyr /> lifecycle", () => {
  const PlyrMock = PlyrJS as unknown as jest.Mock;
  const instances = () =>
    PlyrMock.mock.results.map(
      (r) => r.value as { destroy: jest.Mock; playing: boolean }
    );

  beforeEach(() => {
    jest.useFakeTimers();
    PlyrMock.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should destroy the instance on unmount", () => {
    const { unmount } = render(<Plyr source={SOURCE} />);
    unmount();
    act(() => {
      jest.runAllTimers();
    });

    expect(instances()).toHaveLength(1);
    expect(instances()[0]?.destroy).toHaveBeenCalledTimes(1);
  });

  it("should re-instantiate when the source changes", () => {
    const ref = React.createRef<{ plyr: PlyrInstance }>();
    const next: PlyrSource = { type: "video", sources: [{ src: "a.mp4" }] };
    const { rerender } = render(<Plyr ref={ref} source={SOURCE} />);
    rerender(<Plyr ref={ref} source={next} />);

    expect(instances()).toHaveLength(2);
    expect(instances()[0]?.destroy).toHaveBeenCalledTimes(1);
    expect(instances()[1]?.destroy).not.toHaveBeenCalled();
    expect(ref.current?.plyr).toBe(instances()[1]);
  });

  it("should survive the Strict Mode double effect invocation", () => {
    const ref = React.createRef<{ plyr: PlyrInstance }>();
    render(
      <React.StrictMode>
        <Plyr ref={ref} source={SOURCE} />
      </React.StrictMode>
    );
    act(() => {
      jest.runAllTimers();
    });

    expect(instances()).toHaveLength(1);
    expect(instances()[0]?.destroy).not.toHaveBeenCalled();
    expect(ref.current?.plyr).toBe(instances()[0]);
  });

  it("should expose a safe no-op API before the player is instantiated", () => {
    const apis: (APITypes | null)[] = [];
    render(
      <Plyr
        ref={(api) => {
          apis.push(api);
        }}
        source={SOURCE}
      />
    );

    const initial = apis[0] as unknown as APITypes & { play: () => unknown };
    expect(initial.plyr.source).toBeNull();
    expect(initial.play()).toBeUndefined();
    expect(apis[apis.length - 1]?.plyr).toBe(instances()[0]);
  });

  it("should pass options to Plyr", () => {
    const options = { autoplay: true };
    render(<Plyr source={SOURCE} options={options} />);

    expect(PlyrMock).toHaveBeenCalledWith(".plyr-react", options);
  });

  it("should only re-instantiate on custom deps change when using usePlyr", () => {
    const Player = ({ depKey }: { depKey: number }) => {
      const ref = React.useRef<APITypes>(null);
      const videoRef = usePlyr(ref, { source: SOURCE }, [depKey]);
      return <video ref={videoRef} className="plyr-react plyr" />;
    };
    const { rerender } = render(<Player depKey={1} />);

    rerender(<Player depKey={1} />);
    expect(instances()).toHaveLength(1);

    rerender(<Player depKey={2} />);
    expect(instances()).toHaveLength(2);
    expect(instances()[0]?.destroy).toHaveBeenCalledTimes(1);
  });

  it("should re-instantiate on custom deps change even when params are stable", () => {
    const stableParams = { source: SOURCE };
    const Player = ({ depKey }: { depKey: number }) => {
      const ref = React.useRef<APITypes>(null);
      const videoRef = usePlyr(ref, stableParams, [depKey]);
      return <video ref={videoRef} className="plyr-react plyr" />;
    };
    const { rerender } = render(<Player depKey={1} />);

    rerender(<Player depKey={2} />);
    expect(instances()).toHaveLength(2);
    expect(instances()[0]?.destroy).toHaveBeenCalledTimes(1);
  });

  it("should survive Strict Mode with stable params passed to usePlyr", () => {
    const stableParams = { source: SOURCE };
    const Player = () => {
      const ref = React.useRef<APITypes>(null);
      const videoRef = usePlyr(ref, stableParams);
      return <video ref={videoRef} className="plyr-react plyr" />;
    };
    render(
      <React.StrictMode>
        <Player />
      </React.StrictMode>
    );
    act(() => {
      jest.runAllTimers();
    });

    expect(instances()).toHaveLength(1);
    expect(instances()[0]?.destroy).not.toHaveBeenCalled();
  });
});
