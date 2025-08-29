import * as React from "react";
import * as Plyr from "plyr";
import useAptor from "react-aptor";
import { jsx } from "react/jsx-runtime";

//#region src/index.tsx
const PlyrJS = Plyr.default;
const instantiate = (_, params) => {
	const plyr = new PlyrJS(".plyr-react", params?.options ?? {});
	if (params?.source) plyr.source = params?.source;
	return plyr;
};
const destroy = (plyr) => {
	if (plyr) plyr.destroy();
};
const noop = () => {};
const getAPI = (plyr) => {
	if (!plyr) return () => new Proxy({ plyr: { source: null } }, { get: (target, prop) => {
		if (prop === "plyr") return target[prop];
		return noop;
	} });
	return () => ({ plyr });
};
function usePlyr(ref, params, deps = null) {
	return useAptor(ref, {
		instantiate,
		getAPI,
		destroy,
		params
	}, deps ?? [params.options, params.source]);
}
const PlyrComponent = React.forwardRef((props, ref) => {
	const { source, options = null,...rest } = props;
	const raptorRef = usePlyr(ref, {
		source,
		options
	});
	return /* @__PURE__ */ jsx("video", {
		ref: raptorRef,
		className: "plyr-react plyr",
		...rest
	});
});

//#endregion
export { PlyrComponent as Plyr, usePlyr };
//# sourceMappingURL=index.js.map