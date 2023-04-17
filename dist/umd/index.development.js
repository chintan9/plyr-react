(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('plyr'), require('prop-types'), require('react-aptor'), require('react/jsx-runtime')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'plyr', 'prop-types', 'react-aptor', 'react/jsx-runtime'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["plyr-react"] = {}, global.React, global.PlyrJS, global.PropTypes, global.useAptor, global.jsxRuntime));
})(this, (function (exports, React, PlyrJS, PropTypes, useAptor, jsxRuntime) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var PlyrJS__default = /*#__PURE__*/_interopDefaultLegacy(PlyrJS);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var useAptor__default = /*#__PURE__*/_interopDefaultLegacy(useAptor);

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  var _excluded = ["source", "options"];
  var instantiate = function instantiate(_, params) {
    var plyr = new PlyrJS__default["default"](".plyr-react", params.options || {});
    if (params.source) plyr.source = params.source;
    return plyr;
  };
  var destroy = function destroy(plyr) {
    if (plyr) plyr.destroy();
  };
  var noop = function noop() {};
  var getAPI = function getAPI(plyr) {
    if (!plyr) {
      return function () {
        return new Proxy({
          plyr: {
            source: null
          }
        }, {
          get: function get(target, prop) {
            if (prop === "plyr") {
              return target[prop];
            }
            return noop;
          }
        });
      };
    }
    return function () {
      return {
        plyr: plyr
      };
    };
  };
  function usePlyr(ref, params, deps) {
    if (deps === void 0) {
      deps = null;
    }
    return useAptor__default["default"](ref, {
      instantiate: instantiate,
      getAPI: getAPI,
      destroy: destroy,
      params: params
    }, deps || [params.options, params.source]);
  }
  var Plyr = React__namespace.forwardRef(function (props, ref) {
    var source = props.source,
      _props$options = props.options,
      options = _props$options === void 0 ? null : _props$options,
      rest = _objectWithoutPropertiesLoose(props, _excluded);
    var raptorRef = usePlyr(ref, {
      source: source,
      options: options
    });
    return jsxRuntime.jsx("video", _extends({
      ref: raptorRef,
      className: "plyr-react plyr"
    }, rest));
  });
  {
    Plyr.displayName = "Plyr";
    Plyr.defaultProps = {
      options: {
        controls: ["rewind", "play", "fast-forward", "progress", "current-time", "duration", "mute", "volume", "settings", "fullscreen"],
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
        sources: [{
          src: "https://cdn.plyr.io/static/blank.mp4",
          type: "video/mp4",
          size: 720
        }, {
          src: "https://cdn.plyr.io/static/blank.mp4",
          type: "video/mp4",
          size: 1080
        }]
      }
    };
    Plyr.propTypes = {
      options: PropTypes__default["default"].object,
      source: PropTypes__default["default"].any
    };
  }

  exports["default"] = Plyr;
  exports.usePlyr = usePlyr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
