System.register(["react", "plyr", "prop-types", "react-aptor"], function (l) {
  "use strict";
  var c, u, s;
  return {
    setters: [
      function (o) {
        c = o;
      },
      function (o) {
        u = o.default;
      },
      function () {},
      function (o) {
        s = o.default;
      },
    ],
    execute: function () {
      l("usePlyr", y);
      var o = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (r, t, e) =>
          t in r
            ? o(r, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              })
            : (r[t] = e),
        v = (r, t) => {
          for (var e in t || (t = {})) i.call(t, e) && p(r, e, t[e]);
          if (a) for (var e of a(t)) f.call(t, e) && p(r, e, t[e]);
          return r;
        },
        d = (r, t) => {
          var e = {};
          for (var n in r) i.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
          if (r != null && a)
            for (var n of a(r))
              t.indexOf(n) < 0 && f.call(r, n) && (e[n] = r[n]);
          return e;
        };
      const b = (r, t) => {
          const e = new u(".plyr-react", t.options || {});
          return t.source && (e.source = t.source), e;
        },
        m = (r) => {
          r && r.destroy();
        },
        O = () => {},
        P = (r) =>
          r
            ? () => ({ plyr: r })
            : () =>
                new Proxy(
                  { plyr: { source: null } },
                  { get: (t, e) => (e === "plyr" ? t[e] : O) }
                );
      function y(r, t, e = null) {
        return s(
          r,
          { instantiate: b, getAPI: P, destroy: m, params: t },
          e || [t.options, t.source]
        );
      }
      const x = l(
        "default",
        c.forwardRef((r, t) => {
          const e = r,
            { source: n, options: g = null } = e,
            w = d(e, ["source", "options"]),
            j = y(t, { source: n, options: g });
          return c.createElement(
            "video",
            v({ ref: j, className: "plyr-react plyr" }, w)
          );
        })
      );
    },
  };
});
