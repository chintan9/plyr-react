System.register(['react', 'plyr', 'react-aptor'], (function (exports) {
  'use strict';
  var React, PlyrJS, useAptor;
  return {
    setters: [function (module) {
      React = module;
    }, function (module) {
      PlyrJS = module["default"];
    }, function (module) {
      useAptor = module["default"];
    }],
    execute: (function () {

      exports('usePlyr', usePlyr);

      var __defProp = Object.defineProperty;
      var __getOwnPropSymbols = Object.getOwnPropertySymbols;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __propIsEnum = Object.prototype.propertyIsEnumerable;
      var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
      var __spreadValues = (a, b) => {
        for (var prop in b || (b = {}))
          if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        if (__getOwnPropSymbols)
          for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
              __defNormalProp(a, prop, b[prop]);
          }
        return a;
      };
      var __objRest = (source, exclude) => {
        var target = {};
        for (var prop in source)
          if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
            target[prop] = source[prop];
        if (source != null && __getOwnPropSymbols)
          for (var prop of __getOwnPropSymbols(source)) {
            if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
              target[prop] = source[prop];
          }
        return target;
      };
      const instantiate = (_, params) => {
        const plyr = new PlyrJS(".plyr-react", params.options || {});
        if (params.source)
          plyr.source = params.source;
        return plyr;
      };
      const destroy = (plyr) => {
        if (plyr)
          plyr.destroy();
      };
      const noop = () => {
      };
      const getAPI = (plyr) => {
        if (!plyr) {
          return () => new Proxy({ plyr: { source: null } }, {
            get: (target, prop) => {
              if (prop === "plyr") {
                return target[prop];
              }
              return noop;
            }
          });
        }
        return () => ({
          plyr
        });
      };
      function usePlyr(ref, params, deps = null) {
        return useAptor(ref, {
          instantiate,
          getAPI,
          destroy,
          params
        }, deps || [params.options, params.source]);
      }
      const Plyr = exports('default', React.forwardRef((props, ref) => {
        const _a = props, { source, options = null } = _a, rest = __objRest(_a, ["source", "options"]);
        const raptorRef = usePlyr(ref, {
          source,
          options
        });
        return /* @__PURE__ */ React.createElement("video", __spreadValues({
          ref: raptorRef,
          className: "plyr-react plyr"
        }, rest));
      }));
      {
        const PropTypes = require("prop-types");
        Plyr.displayName = "Plyr";
        Plyr.defaultProps = {
          options: {
            controls: [
              "rewind",
              "play",
              "fast-forward",
              "progress",
              "current-time",
              "duration",
              "mute",
              "volume",
              "settings",
              "fullscreen"
            ],
            i18n: {
              restart: "Restart",
              rewind: "Rewind {seektime}s",
              play: "Play",
              pause: "Pause",
              fastForward: "Forward {seektime}s",
              seek: "Seek",
              seekLabel: "{currentTime} of {duration}",
              played: "Played",
              buffered: "Buffered",
              currentTime: "Current time",
              duration: "Duration",
              volume: "Volume",
              mute: "Mute",
              unmute: "Unmute",
              enableCaptions: "Enable captions",
              disableCaptions: "Disable captions",
              download: "Download",
              enterFullscreen: "Enter fullscreen",
              exitFullscreen: "Exit fullscreen",
              frameTitle: "Player for {title}",
              captions: "Captions",
              settings: "Settings",
              menuBack: "Go back to previous menu",
              speed: "Speed",
              normal: "Normal",
              quality: "Quality",
              loop: "Loop"
            }
          },
          source: {
            type: "video",
            sources: [
              {
                src: "https://cdn.plyr.io/static/blank.mp4",
                type: "video/mp4",
                size: 720
              },
              {
                src: "https://cdn.plyr.io/static/blank.mp4",
                type: "video/mp4",
                size: 1080
              }
            ]
          }
        };
        Plyr.propTypes = {
          options: PropTypes.object,
          source: PropTypes.any
        };
      }

    })
  };
}));
