import * as React from "react";
import { render } from "@testing-library/react";
import Plyr, { PlyrInstance } from "../src/index";

// https://github.com/jsdom/jsdom/issues/2541#issuecomment-788761237
jest.mock("plyr");
jest.mock("plyr", () => {
  return jest.fn().mockImplementation(() => ({ destroy: jest.fn() }));
});

describe("<Plyr />", () => {
  it("should render", () => {
    const { container } = render(<Plyr />);
    expect(container.querySelector("video")).toBeDefined();
  });

  it("should render and set a forward ref", () => {
    const setRef = jest.fn();
    const { container } = render(<Plyr ref={setRef} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(setRef).toHaveBeenCalled();
  });

  it("should render and have a plyr instance in ref.current", () => {
    const ref = React.createRef<any>();
    const { container } = render(<Plyr ref={ref} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current.plyr).toBeDefined();
  });

  it("should render and have a plyr instance in ref.current when using a ref callback", () => {
    const ref = React.createRef<any>() as any;
    const { container } = render(
      <Plyr ref={(player) => (ref.current = player)} />
    );

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current.plyr).toBeDefined();
  });

  it("should render and keep a plyr instance after a rerender", () => {
    const ref = React.createRef<any>();
    const { container, rerender } = render(<Plyr ref={ref} />);

    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current.plyr).toBeDefined();

    rerender(<Plyr ref={ref} />);
    expect(container.querySelector("video")).toBeDefined();
    expect(ref.current).toBeDefined();
    expect(ref.current.plyr).toBeDefined();
    expect((ref.current.plyr as PlyrInstance).playing).toBeFalsy();
  });
});
