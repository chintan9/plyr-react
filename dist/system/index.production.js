System.register(["react", "plyr", "react-aptor"], function (c) {
  "use strict";
  var l, u, s;
  return {
    setters: [
      function (n) {
        l = n.forwardRef;
      },
      function (n) {
        u = n.default;
      },
      function (n) {
        s = n.default;
      },
    ],
    execute: function () {
      c("usePlyr", y);
      var n = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable,
        p = (r, e, t) =>
          e in r
            ? n(r, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (r[e] = t),
        v = (r, e) => {
          for (var t in e || (e = {})) f.call(e, t) && p(r, t, e[t]);
          if (a) for (var t of a(e)) i.call(e, t) && p(r, t, e[t]);
          return r;
        },
        d = (r, e) => {
          var t = {};
          for (var o in r) f.call(r, o) && e.indexOf(o) < 0 && (t[o] = r[o]);
          if (r != null && a)
            for (var o of a(r))
              e.indexOf(o) < 0 && i.call(r, o) && (t[o] = r[o]);
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
        l((r, e) => {
          const t = r,
            { source: o, options: w = null } = t,
            g = d(t, ["source", "options"]),
            j = y(e, { source: o, options: w });
          return React.createElement(
            "video",
            v({ ref: j, className: "plyr-react plyr" }, g)
          );
        })
      );
    },
  };
});
