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
  var i = u(t),
    c = u(n);
  function a() {
    return (
      (a =
        Object.assign ||
        function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
      a.apply(this, arguments)
    );
  }
  var f = ["source", "options"],
    s = function (e, r) {
      var t = new i.default(".plyr-react", r.options || {});
      return r.source && (t.source = r.source), t;
    },
    l = function (e) {
      e && e.destroy();
    },
    p = function () {},
    y = function (e) {
      return e
        ? function () {
            return { plyr: e };
          }
        : function () {
            return new Proxy(
              { plyr: { source: null } },
              {
                get: function (e, r) {
                  return "plyr" === r ? e[r] : p;
                },
              }
            );
          };
    };
  function d(e, r, t) {
    return (
      void 0 === t && (t = null),
      c.default(
        e,
        { instantiate: s, getAPI: y, destroy: l, params: r },
        t || [r.options, r.source]
      )
    );
  }
  var v = r.forwardRef(function (e, r) {
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
      })(e, f),
      c = d(r, { source: t, options: u });
    return o.jsx("video", a({ ref: c, className: "plyr-react plyr" }, i));
  });
  (e.default = v),
    (e.usePlyr = d),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
