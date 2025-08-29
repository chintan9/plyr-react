//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
const react = __toESM(require("react"));
const plyr = __toESM(require("plyr"));
const react_aptor = __toESM(require("react-aptor"));
const react_jsx_runtime = __toESM(require("react/jsx-runtime"));

//#region src/index.tsx
const PlyrJS = plyr.default;
const instantiate = (_, params) => {
	const plyr$1 = new PlyrJS(".plyr-react", params?.options ?? {});
	if (params?.source) plyr$1.source = params?.source;
	return plyr$1;
};
const destroy = (plyr$1) => {
	if (plyr$1) plyr$1.destroy();
};
const noop = () => {};
const getAPI = (plyr$1) => {
	if (!plyr$1) return () => new Proxy({ plyr: { source: null } }, { get: (target, prop) => {
		if (prop === "plyr") return target[prop];
		return noop;
	} });
	return () => ({ plyr: plyr$1 });
};
function usePlyr(ref, params, deps = null) {
	return (0, react_aptor.default)(ref, {
		instantiate,
		getAPI,
		destroy,
		params
	}, deps ?? [params.options, params.source]);
}
const PlyrComponent = react.forwardRef((props, ref) => {
	const { source, options = null,...rest } = props;
	const raptorRef = usePlyr(ref, {
		source,
		options
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("video", {
		ref: raptorRef,
		className: "plyr-react plyr",
		...rest
	});
});
PlyrComponent.displayName = "Plyr";

//#endregion
exports.Plyr = PlyrComponent;
exports.usePlyr = usePlyr;
//# sourceMappingURL=index.cjs.map