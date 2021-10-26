import React, { useState, useRef, useEffect, useMemo, useImperativeHandle } from 'react';
import PlyrJS from 'plyr';

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * react aptor(api-connector) a hook which connect api to react itself
 * @param ref - react forwarded ref
 * @param {Object} configuration - configuration object for setup
 * @param {Array} [deps=[]] - react dependencies array
 * @return domRef - can be bound to dom element
 */

function useAptor(ref, configuration, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var _a = useState(null),
      instance = _a[0],
      setInstance = _a[1];

  var domRef = useRef(null);
  var instantiate = configuration.instantiate,
      destroy = configuration.destroy,
      getAPI = configuration.getAPI,
      params = configuration.params;
  useEffect(function () {
    var instanceReference = instantiate(domRef.current, params);
    setInstance(instanceReference);
    return function () {
      if (destroy) destroy(instanceReference, params);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // eslint-disable-next-line react-hooks/exhaustive-deps

  var api = useMemo(function () {
    return getAPI(instance, params);
  }, [instance]); // eslint-disable-next-line react-hooks/exhaustive-deps

  useImperativeHandle(ref, api, [api]);
  return domRef;
}

/* REACT-APTOR */
var instantiate = function instantiate(_, _ref) {
  var options = _ref.options,
      source = _ref.source;
  // The node update of ref in react life cycle seems to have issue, used class selector instead
  var plyr = new PlyrJS('.plyr-react', options || {});
  plyr.source = source;
  return plyr;
};

var destroy = function destroy(plyr) {
  if (plyr) plyr.destroy();
}; // eslint-disable-next-line @typescript-eslint/no-empty-function


var noop = function noop() {};

var getAPI = function getAPI(plyr) {
  if (!plyr) return function () {
    return new Proxy({
      plyr: {
        source: null
      }
    }, {
      get: function get(target, prop) {
        if (prop === 'plyr') {
          return target[prop];
        }

        return noop;
      }
    });
  };
  return function () {
    return {
      /**
       * Plyr instance with all of its functionality
       */
      plyr: plyr
    };
  };
};

var Plyr = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var source = props.source,
      _props$options = props.options,
      options = _props$options === void 0 ? null : _props$options,
      rest = _objectWithoutProperties(props, ["source", "options"]);

  var raptorRef = useAptor(ref, {
    instantiate: instantiate,
    getAPI: getAPI,
    destroy: destroy,
    params: {
      options: options,
      source: source
    }
  }, [options, source]);
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: raptorRef,
    className: "plyr-react plyr"
  }, rest));
});
Plyr.displayName = 'Plyr';
Plyr.defaultProps = {
  options: {
    controls: ['rewind', 'play', 'fast-forward', 'progress', 'current-time', 'duration', 'mute', 'volume', 'settings', 'fullscreen'],
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop'
    }
  },
  source: {
    type: 'video',
    sources: [{
      src: 'https://cdn.plyr.io/static/blank.mp4',
      type: 'video/mp4',
      size: 720
    }, {
      src: 'https://cdn.plyr.io/static/blank.mp4',
      type: 'video/mp4',
      size: 1080
    }]
  }
};

export default Plyr;
