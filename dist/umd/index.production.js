!(function (e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? r(
        exports,
        require("react"),
        require("plyr"),
        require("react-aptor"),
        require("react/jsx-runtime")
      )
    : "function" == typeof define && define.amd
    ? define(
        ["exports", "react", "plyr", "react-aptor", "react/jsx-runtime"],
        r
      )
    : r(
        ((e = "undefined" != typeof globalThis ? globalThis : e || self)[
          "plyr-react"
        ] = {}),
        e.React,
        e.PlyrJS,
        e.useAptor,
        e.jsxRuntime
      );
})(this, function (e, r, t, n, o) {
  "use strict";
  function u(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  function i(e) {
    if (e && e.__esModule) return e;
    var r = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (t) {
          if ("default" !== t) {
            var n = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
              r,
              t,
              n.get
                ? n
                : {
                    enumerable: !0,
                    get: function () {
                      return e[t];
                    },
                  }
            );
          }
        }),
      (r.default = e),
      Object.freeze(r)
    );
  }
  var c = i(r),
    f = u(t),
    a = u(n);
  function l() {
    return (
      (l =
        Object.assign ||
        function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
      l.apply(this, arguments)
    );
  }
  var s = ["source", "options"],
    p = function (e, r) {
      var t = new f.default(".plyr-react", r.options || {});
      return r.source && (t.source = r.source), t;
    },
    d = function (e) {
      e && e.destroy();
    },
    y = function () {},
    j = function (e) {
      return e
        ? function () {
            return { plyr: e };
          }
        : function () {
            return new Proxy(
              { plyr: { source: null } },
              {
                get: function (e, r) {
                  return "plyr" === r ? e[r] : y;
                },
              }
            );
          };
    };
  function v(e, r, t) {
    return (
      void 0 === t && (t = null),
      a.default(
        e,
        { instantiate: p, getAPI: j, destroy: d, params: r },
        t || [r.options, r.source]
      )
    );
  }
  var b = c.forwardRef(function (e, r) {
    var t = e.source,
      n = e.options,
      u = void 0 === n ? null : n,
      i = (function (e, r) {
        if (null == e) return {};
        var t,
          n,
          o = {},
          u = Object.keys(e);
        for (n = 0; n < u.length; n++)
          (t = u[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
        return o;
      })(e, s),
      c = v(r, { source: t, options: u });
    return o.jsx("video", l({ ref: c, className: "plyr-react plyr" }, i));
  });
  (e.default = b),
    (e.usePlyr = v),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
