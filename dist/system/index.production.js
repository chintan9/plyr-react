System.register(["react", "plyr", "react-aptor"], function (c) {
  "use strict";
  var l, u, s;
  return {
    setters: [
      function (o) {
        l = o;
      },
      function (o) {
        u = o.default;
      },
      function (o) {
        s = o.default;
      },
    ],
    execute: function () {
      c("usePlyr", y);
      var o = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (r, e, t) =>
          e in r
            ? o(r, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (r[e] = t),
        v = (r, e) => {
          for (var t in e || (e = {})) i.call(e, t) && p(r, t, e[t]);
          if (a) for (var t of a(e)) f.call(e, t) && p(r, t, e[t]);
          return r;
        },
        d = (r, e) => {
          var t = {};
          for (var n in r) i.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
          if (r != null && a)
            for (var n of a(r))
              e.indexOf(n) < 0 && f.call(r, n) && (t[n] = r[n]);
          return t;
        };
      const b = (r, e) => {
          const t = new u(".plyr-react", e.options || {});
          return e.source && (t.source = e.source), t;
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
                  { get: (e, t) => (t === "plyr" ? e[t] : O) }
                );
      function y(r, e, t = null) {
        return s(
          r,
          { instantiate: b, getAPI: P, destroy: m, params: e },
          t || [e.options, e.source]
        );
      }
      const x = c(
        "default",
        l.forwardRef((r, e) => {
          const t = r,
            { source: n, options: g = null } = t,
            w = d(t, ["source", "options"]),
            j = y(e, { source: n, options: g });
          return l.createElement(
            "video",
            v({ ref: j, className: "plyr-react plyr" }, w)
          );
        })
      );
    },
  };
});
