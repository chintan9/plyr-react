import React from 'react';
import PlyrJS from 'plyr';
import useAptor from 'react-aptor';

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

var _excluded = ["source", "options"];

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

function usePlyr(ref, _ref2) {
  var source = _ref2.source,
      options = _ref2.options;
  var deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return useAptor( // FIXE: Mismatch type for extended type with APITypes
  ref, {
    instantiate: instantiate,
    getAPI: getAPI,
    destroy: destroy,
    params: {
      options: options,
      source: source
    }
  }, deps || [options, source]);
}
var Plyr = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var source = props.source,
      _props$options = props.options,
      options = _props$options === void 0 ? null : _props$options,
      rest = _objectWithoutProperties(props, _excluded);

  var raptorRef = usePlyr(ref, {
    source: source,
    options: options
  });
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: raptorRef,
    className: "plyr-react plyr"
  }, rest));
});

export { Plyr as default, usePlyr };
