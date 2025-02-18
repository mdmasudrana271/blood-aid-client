var Vm = Object.defineProperty;
var Hm = (n, i, o) =>
  i in n
    ? Vm(n, i, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (n[i] = o);
var Wr = (n, i, o) => Hm(n, typeof i != "symbol" ? i + "" : i, o);
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) s(d);
  new MutationObserver((d) => {
    for (const c of d)
      if (c.type === "childList")
        for (const h of c.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && s(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(d) {
    const c = {};
    return (
      d.integrity && (c.integrity = d.integrity),
      d.referrerPolicy && (c.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function s(d) {
    if (d.ep) return;
    d.ep = !0;
    const c = o(d);
    fetch(d.href, c);
  }
})();
function Oi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Js = { exports: {} },
  wi = {},
  Zs = { exports: {} },
  Ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf;
function Wm() {
  if (vf) return Ae;
  vf = 1;
  var n = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function w(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (C && N[C]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    F = Object.assign,
    I = {};
  function $(N, U, Se) {
    (this.props = N),
      (this.context = U),
      (this.refs = I),
      (this.updater = Se || R);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (N, U) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, N, U, "setState");
    }),
    ($.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    });
  function z() {}
  z.prototype = $.prototype;
  function W(N, U, Se) {
    (this.props = N),
      (this.context = U),
      (this.refs = I),
      (this.updater = Se || R);
  }
  var ee = (W.prototype = new z());
  (ee.constructor = W), F(ee, $.prototype), (ee.isPureReactComponent = !0);
  var pe = Array.isArray,
    T = Object.prototype.hasOwnProperty,
    ue = { current: null },
    Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function de(N, U, Se) {
    var Te,
      Le = {},
      Fe = null,
      Be = null;
    if (U != null)
      for (Te in (U.ref !== void 0 && (Be = U.ref),
      U.key !== void 0 && (Fe = "" + U.key),
      U))
        T.call(U, Te) && !Ee.hasOwnProperty(Te) && (Le[Te] = U[Te]);
    var Ie = arguments.length - 2;
    if (Ie === 1) Le.children = Se;
    else if (1 < Ie) {
      for (var Pe = Array(Ie), at = 0; at < Ie; at++)
        Pe[at] = arguments[at + 2];
      Le.children = Pe;
    }
    if (N && N.defaultProps)
      for (Te in ((Ie = N.defaultProps), Ie))
        Le[Te] === void 0 && (Le[Te] = Ie[Te]);
    return {
      $$typeof: n,
      type: N,
      key: Fe,
      ref: Be,
      props: Le,
      _owner: ue.current,
    };
  }
  function Ne(N, U) {
    return {
      $$typeof: n,
      type: N.type,
      key: U,
      ref: N.ref,
      props: N.props,
      _owner: N._owner,
    };
  }
  function Re(N) {
    return typeof N == "object" && N !== null && N.$$typeof === n;
  }
  function Xe(N) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (Se) {
        return U[Se];
      })
    );
  }
  var ve = /\/+/g;
  function ge(N, U) {
    return typeof N == "object" && N !== null && N.key != null
      ? Xe("" + N.key)
      : U.toString(36);
  }
  function Me(N, U, Se, Te, Le) {
    var Fe = typeof N;
    (Fe === "undefined" || Fe === "boolean") && (N = null);
    var Be = !1;
    if (N === null) Be = !0;
    else
      switch (Fe) {
        case "string":
        case "number":
          Be = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case n:
            case i:
              Be = !0;
          }
      }
    if (Be)
      return (
        (Be = N),
        (Le = Le(Be)),
        (N = Te === "" ? "." + ge(Be, 0) : Te),
        pe(Le)
          ? ((Se = ""),
            N != null && (Se = N.replace(ve, "$&/") + "/"),
            Me(Le, U, Se, "", function (at) {
              return at;
            }))
          : Le != null &&
            (Re(Le) &&
              (Le = Ne(
                Le,
                Se +
                  (!Le.key || (Be && Be.key === Le.key)
                    ? ""
                    : ("" + Le.key).replace(ve, "$&/") + "/") +
                  N
              )),
            U.push(Le)),
        1
      );
    if (((Be = 0), (Te = Te === "" ? "." : Te + ":"), pe(N)))
      for (var Ie = 0; Ie < N.length; Ie++) {
        Fe = N[Ie];
        var Pe = Te + ge(Fe, Ie);
        Be += Me(Fe, U, Se, Pe, Le);
      }
    else if (((Pe = w(N)), typeof Pe == "function"))
      for (N = Pe.call(N), Ie = 0; !(Fe = N.next()).done; )
        (Fe = Fe.value),
          (Pe = Te + ge(Fe, Ie++)),
          (Be += Me(Fe, U, Se, Pe, Le));
    else if (Fe === "object")
      throw (
        ((U = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Be;
  }
  function _e(N, U, Se) {
    if (N == null) return N;
    var Te = [],
      Le = 0;
    return (
      Me(N, Te, "", "", function (Fe) {
        return U.call(Se, Fe, Le++);
      }),
      Te
    );
  }
  function $e(N) {
    if (N._status === -1) {
      var U = N._result;
      (U = U()),
        U.then(
          function (Se) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = Se));
          },
          function (Se) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = Se));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = U));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var De = { current: null },
    G = { transition: null },
    ie = {
      ReactCurrentDispatcher: De,
      ReactCurrentBatchConfig: G,
      ReactCurrentOwner: ue,
    };
  function J() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ae.Children = {
      map: _e,
      forEach: function (N, U, Se) {
        _e(
          N,
          function () {
            U.apply(this, arguments);
          },
          Se
        );
      },
      count: function (N) {
        var U = 0;
        return (
          _e(N, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (N) {
        return (
          _e(N, function (U) {
            return U;
          }) || []
        );
      },
      only: function (N) {
        if (!Re(N))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return N;
      },
    }),
    (Ae.Component = $),
    (Ae.Fragment = o),
    (Ae.Profiler = d),
    (Ae.PureComponent = W),
    (Ae.StrictMode = s),
    (Ae.Suspense = v),
    (Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie),
    (Ae.act = J),
    (Ae.cloneElement = function (N, U, Se) {
      if (N == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            N +
            "."
        );
      var Te = F({}, N.props),
        Le = N.key,
        Fe = N.ref,
        Be = N._owner;
      if (U != null) {
        if (
          (U.ref !== void 0 && ((Fe = U.ref), (Be = ue.current)),
          U.key !== void 0 && (Le = "" + U.key),
          N.type && N.type.defaultProps)
        )
          var Ie = N.type.defaultProps;
        for (Pe in U)
          T.call(U, Pe) &&
            !Ee.hasOwnProperty(Pe) &&
            (Te[Pe] = U[Pe] === void 0 && Ie !== void 0 ? Ie[Pe] : U[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) Te.children = Se;
      else if (1 < Pe) {
        Ie = Array(Pe);
        for (var at = 0; at < Pe; at++) Ie[at] = arguments[at + 2];
        Te.children = Ie;
      }
      return {
        $$typeof: n,
        type: N.type,
        key: Le,
        ref: Fe,
        props: Te,
        _owner: Be,
      };
    }),
    (Ae.createContext = function (N) {
      return (
        (N = {
          $$typeof: h,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (N.Provider = { $$typeof: c, _context: N }),
        (N.Consumer = N)
      );
    }),
    (Ae.createElement = de),
    (Ae.createFactory = function (N) {
      var U = de.bind(null, N);
      return (U.type = N), U;
    }),
    (Ae.createRef = function () {
      return { current: null };
    }),
    (Ae.forwardRef = function (N) {
      return { $$typeof: p, render: N };
    }),
    (Ae.isValidElement = Re),
    (Ae.lazy = function (N) {
      return { $$typeof: x, _payload: { _status: -1, _result: N }, _init: $e };
    }),
    (Ae.memo = function (N, U) {
      return { $$typeof: g, type: N, compare: U === void 0 ? null : U };
    }),
    (Ae.startTransition = function (N) {
      var U = G.transition;
      G.transition = {};
      try {
        N();
      } finally {
        G.transition = U;
      }
    }),
    (Ae.unstable_act = J),
    (Ae.useCallback = function (N, U) {
      return De.current.useCallback(N, U);
    }),
    (Ae.useContext = function (N) {
      return De.current.useContext(N);
    }),
    (Ae.useDebugValue = function () {}),
    (Ae.useDeferredValue = function (N) {
      return De.current.useDeferredValue(N);
    }),
    (Ae.useEffect = function (N, U) {
      return De.current.useEffect(N, U);
    }),
    (Ae.useId = function () {
      return De.current.useId();
    }),
    (Ae.useImperativeHandle = function (N, U, Se) {
      return De.current.useImperativeHandle(N, U, Se);
    }),
    (Ae.useInsertionEffect = function (N, U) {
      return De.current.useInsertionEffect(N, U);
    }),
    (Ae.useLayoutEffect = function (N, U) {
      return De.current.useLayoutEffect(N, U);
    }),
    (Ae.useMemo = function (N, U) {
      return De.current.useMemo(N, U);
    }),
    (Ae.useReducer = function (N, U, Se) {
      return De.current.useReducer(N, U, Se);
    }),
    (Ae.useRef = function (N) {
      return De.current.useRef(N);
    }),
    (Ae.useState = function (N) {
      return De.current.useState(N);
    }),
    (Ae.useSyncExternalStore = function (N, U, Se) {
      return De.current.useSyncExternalStore(N, U, Se);
    }),
    (Ae.useTransition = function () {
      return De.current.useTransition();
    }),
    (Ae.version = "18.3.1"),
    Ae
  );
}
var gf;
function Pu() {
  return gf || ((gf = 1), (Zs.exports = Wm())), Zs.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf;
function qm() {
  if (yf) return wi;
  yf = 1;
  var n = Pu(),
    i = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(p, v, g) {
    var x,
      C = {},
      w = null,
      R = null;
    g !== void 0 && (w = "" + g),
      v.key !== void 0 && (w = "" + v.key),
      v.ref !== void 0 && (R = v.ref);
    for (x in v) s.call(v, x) && !c.hasOwnProperty(x) && (C[x] = v[x]);
    if (p && p.defaultProps)
      for (x in ((v = p.defaultProps), v)) C[x] === void 0 && (C[x] = v[x]);
    return {
      $$typeof: i,
      type: p,
      key: w,
      ref: R,
      props: C,
      _owner: d.current,
    };
  }
  return (wi.Fragment = o), (wi.jsx = h), (wi.jsxs = h), wi;
}
var xf;
function Qm() {
  return xf || ((xf = 1), (Js.exports = qm())), Js.exports;
}
var f = Qm(),
  _ = Pu();
const ft = Oi(_);
var Ho = {},
  eu = { exports: {} },
  Vt = {},
  tu = { exports: {} },
  ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf;
function Km() {
  return (
    wf ||
      ((wf = 1),
      (function (n) {
        function i(G, ie) {
          var J = G.length;
          G.push(ie);
          e: for (; 0 < J; ) {
            var N = (J - 1) >>> 1,
              U = G[N];
            if (0 < d(U, ie)) (G[N] = ie), (G[J] = U), (J = N);
            else break e;
          }
        }
        function o(G) {
          return G.length === 0 ? null : G[0];
        }
        function s(G) {
          if (G.length === 0) return null;
          var ie = G[0],
            J = G.pop();
          if (J !== ie) {
            G[0] = J;
            e: for (var N = 0, U = G.length, Se = U >>> 1; N < Se; ) {
              var Te = 2 * (N + 1) - 1,
                Le = G[Te],
                Fe = Te + 1,
                Be = G[Fe];
              if (0 > d(Le, J))
                Fe < U && 0 > d(Be, Le)
                  ? ((G[N] = Be), (G[Fe] = J), (N = Fe))
                  : ((G[N] = Le), (G[Te] = J), (N = Te));
              else if (Fe < U && 0 > d(Be, J))
                (G[N] = Be), (G[Fe] = J), (N = Fe);
              else break e;
            }
          }
          return ie;
        }
        function d(G, ie) {
          var J = G.sortIndex - ie.sortIndex;
          return J !== 0 ? J : G.id - ie.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var h = Date,
            p = h.now();
          n.unstable_now = function () {
            return h.now() - p;
          };
        }
        var v = [],
          g = [],
          x = 1,
          C = null,
          w = 3,
          R = !1,
          F = !1,
          I = !1,
          $ = typeof setTimeout == "function" ? setTimeout : null,
          z = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ee(G) {
          for (var ie = o(g); ie !== null; ) {
            if (ie.callback === null) s(g);
            else if (ie.startTime <= G)
              s(g), (ie.sortIndex = ie.expirationTime), i(v, ie);
            else break;
            ie = o(g);
          }
        }
        function pe(G) {
          if (((I = !1), ee(G), !F))
            if (o(v) !== null) (F = !0), $e(T);
            else {
              var ie = o(g);
              ie !== null && De(pe, ie.startTime - G);
            }
        }
        function T(G, ie) {
          (F = !1), I && ((I = !1), z(de), (de = -1)), (R = !0);
          var J = w;
          try {
            for (
              ee(ie), C = o(v);
              C !== null && (!(C.expirationTime > ie) || (G && !Xe()));

            ) {
              var N = C.callback;
              if (typeof N == "function") {
                (C.callback = null), (w = C.priorityLevel);
                var U = N(C.expirationTime <= ie);
                (ie = n.unstable_now()),
                  typeof U == "function"
                    ? (C.callback = U)
                    : C === o(v) && s(v),
                  ee(ie);
              } else s(v);
              C = o(v);
            }
            if (C !== null) var Se = !0;
            else {
              var Te = o(g);
              Te !== null && De(pe, Te.startTime - ie), (Se = !1);
            }
            return Se;
          } finally {
            (C = null), (w = J), (R = !1);
          }
        }
        var ue = !1,
          Ee = null,
          de = -1,
          Ne = 5,
          Re = -1;
        function Xe() {
          return !(n.unstable_now() - Re < Ne);
        }
        function ve() {
          if (Ee !== null) {
            var G = n.unstable_now();
            Re = G;
            var ie = !0;
            try {
              ie = Ee(!0, G);
            } finally {
              ie ? ge() : ((ue = !1), (Ee = null));
            }
          } else ue = !1;
        }
        var ge;
        if (typeof W == "function")
          ge = function () {
            W(ve);
          };
        else if (typeof MessageChannel < "u") {
          var Me = new MessageChannel(),
            _e = Me.port2;
          (Me.port1.onmessage = ve),
            (ge = function () {
              _e.postMessage(null);
            });
        } else
          ge = function () {
            $(ve, 0);
          };
        function $e(G) {
          (Ee = G), ue || ((ue = !0), ge());
        }
        function De(G, ie) {
          de = $(function () {
            G(n.unstable_now());
          }, ie);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            F || R || ((F = !0), $e(T));
          }),
          (n.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ne = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(v);
          }),
          (n.unstable_next = function (G) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var ie = 3;
                break;
              default:
                ie = w;
            }
            var J = w;
            w = ie;
            try {
              return G();
            } finally {
              w = J;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (G, ie) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var J = w;
            w = G;
            try {
              return ie();
            } finally {
              w = J;
            }
          }),
          (n.unstable_scheduleCallback = function (G, ie, J) {
            var N = n.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? N + J : N))
                : (J = N),
              G)
            ) {
              case 1:
                var U = -1;
                break;
              case 2:
                U = 250;
                break;
              case 5:
                U = 1073741823;
                break;
              case 4:
                U = 1e4;
                break;
              default:
                U = 5e3;
            }
            return (
              (U = J + U),
              (G = {
                id: x++,
                callback: ie,
                priorityLevel: G,
                startTime: J,
                expirationTime: U,
                sortIndex: -1,
              }),
              J > N
                ? ((G.sortIndex = J),
                  i(g, G),
                  o(v) === null &&
                    G === o(g) &&
                    (I ? (z(de), (de = -1)) : (I = !0), De(pe, J - N)))
                : ((G.sortIndex = U), i(v, G), F || R || ((F = !0), $e(T))),
              G
            );
          }),
          (n.unstable_shouldYield = Xe),
          (n.unstable_wrapCallback = function (G) {
            var ie = w;
            return function () {
              var J = w;
              w = ie;
              try {
                return G.apply(this, arguments);
              } finally {
                w = J;
              }
            };
          });
      })(ru)),
    ru
  );
}
var Sf;
function Ym() {
  return Sf || ((Sf = 1), (tu.exports = Km())), tu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ef;
function Gm() {
  if (Ef) return Vt;
  Ef = 1;
  var n = Pu(),
    i = Ym();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    d = {};
  function c(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    v = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    x = {},
    C = {};
  function w(e) {
    return v.call(C, e)
      ? !0
      : v.call(x, e)
      ? !1
      : g.test(e)
      ? (C[e] = !0)
      : ((x[e] = !0), !1);
  }
  function R(e, t, r, l) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function F(e, t, r, l) {
    if (t === null || typeof t > "u" || R(e, t, r, l)) return !0;
    if (l) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function I(e, t, r, l, a, u, m) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = a),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = m);
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      $[e] = new I(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      $[t] = new I(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      $[e] = new I(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      $[e] = new I(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        $[e] = new I(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      $[e] = new I(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      $[e] = new I(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      $[e] = new I(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      $[e] = new I(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var z = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(z, W);
      $[t] = new I(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(z, W);
        $[t] = new I(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(z, W);
      $[t] = new I(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      $[e] = new I(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    ($.xlinkHref = new I(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      $[e] = new I(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function ee(e, t, r, l) {
    var a = $.hasOwnProperty(t) ? $[t] : null;
    (a !== null
      ? a.type !== 0
      : l ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (F(t, r, a, l) && (r = null),
      l || a === null
        ? w(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : a.mustUseProperty
        ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
        : ((t = a.attributeName),
          (l = a.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((a = a.type),
              (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
              l ? e.setAttributeNS(l, t, r) : e.setAttribute(t, r))));
  }
  var pe = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    T = Symbol.for("react.element"),
    ue = Symbol.for("react.portal"),
    Ee = Symbol.for("react.fragment"),
    de = Symbol.for("react.strict_mode"),
    Ne = Symbol.for("react.profiler"),
    Re = Symbol.for("react.provider"),
    Xe = Symbol.for("react.context"),
    ve = Symbol.for("react.forward_ref"),
    ge = Symbol.for("react.suspense"),
    Me = Symbol.for("react.suspense_list"),
    _e = Symbol.for("react.memo"),
    $e = Symbol.for("react.lazy"),
    De = Symbol.for("react.offscreen"),
    G = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (G && e[G]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var J = Object.assign,
    N;
  function U(e) {
    if (N === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        N = (t && t[1]) || "";
      }
    return (
      `
` +
      N +
      e
    );
  }
  var Se = !1;
  function Te(e, t) {
    if (!e || Se) return "";
    Se = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (A) {
            var l = A;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (A) {
            l = A;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          l = A;
        }
        e();
      }
    } catch (A) {
      if (A && l && typeof A.stack == "string") {
        for (
          var a = A.stack.split(`
`),
            u = l.stack.split(`
`),
            m = a.length - 1,
            y = u.length - 1;
          1 <= m && 0 <= y && a[m] !== u[y];

        )
          y--;
        for (; 1 <= m && 0 <= y; m--, y--)
          if (a[m] !== u[y]) {
            if (m !== 1 || y !== 1)
              do
                if ((m--, y--, 0 > y || a[m] !== u[y])) {
                  var E =
                    `
` + a[m].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      E.includes("<anonymous>") &&
                      (E = E.replace("<anonymous>", e.displayName)),
                    E
                  );
                }
              while (1 <= m && 0 <= y);
            break;
          }
      }
    } finally {
      (Se = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? U(e) : "";
  }
  function Le(e) {
    switch (e.tag) {
      case 5:
        return U(e.type);
      case 16:
        return U("Lazy");
      case 13:
        return U("Suspense");
      case 19:
        return U("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Te(e.type, !1)), e;
      case 11:
        return (e = Te(e.type.render, !1)), e;
      case 1:
        return (e = Te(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Fe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ee:
        return "Fragment";
      case ue:
        return "Portal";
      case Ne:
        return "Profiler";
      case de:
        return "StrictMode";
      case ge:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xe:
          return (e.displayName || "Context") + ".Consumer";
        case Re:
          return (e._context.displayName || "Context") + ".Provider";
        case ve:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case _e:
          return (
            (t = e.displayName || null), t !== null ? t : Fe(e.type) || "Memo"
          );
        case $e:
          (t = e._payload), (e = e._init);
          try {
            return Fe(e(t));
          } catch {}
      }
    return null;
  }
  function Be(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Fe(t);
      case 8:
        return t === de ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Ie(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function at(e) {
    var t = Pe(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var a = r.get,
        u = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (m) {
            (l = "" + m), u.call(this, m);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (m) {
            l = "" + m;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function jr(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function Zn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      l = "";
    return (
      e && (l = Pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Dt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Yr(e, t) {
    var r = t.checked;
    return J({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function zl(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    (r = Ie(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function el(e, t) {
    (t = t.checked), t != null && ee(e, "checked", t, !1);
  }
  function tl(e, t) {
    el(e, t);
    var r = Ie(t.value),
      l = t.type;
    if (r != null)
      l === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? O(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && O(e, t.type, Ie(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function S(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function O(e, t, r) {
    (t !== "number" || Dt(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var b = Array.isArray;
  function X(e, t, r, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        (a = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Ie(r), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          (e[a].selected = !0), l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Y(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return J({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Q(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(o(92));
        if (b(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Ie(r) };
  }
  function me(e, t) {
    var r = Ie(t.value),
      l = Ie(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      l != null && (e.defaultValue = "" + l);
  }
  function we(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ve(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Je(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ve(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var _t,
    rl = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, l, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, l, a);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          _t = _t || document.createElement("div"),
            _t.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = _t.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function wt(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    nl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Zt).forEach(function (e) {
    nl.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zt[t] = Zt[e]);
    });
  });
  function Gr(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Zt.hasOwnProperty(e) && Zt[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ll(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var l = r.indexOf("--") === 0,
          a = Gr(r, t[r], l);
        r === "float" && (r = "cssFloat"), l ? e.setProperty(r, a) : (e[r] = a);
      }
  }
  var Tn = J(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Xr(e, t) {
    if (t) {
      if (Tn[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function il(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rn = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ol = null,
    Jr = null,
    Fr = null;
  function Pn(e) {
    if ((e = ii(e))) {
      if (typeof ol != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = lo(t)), ol(e.stateNode, e.type, t));
    }
  }
  function Ln(e) {
    Jr ? (Fr ? Fr.push(e) : (Fr = [e])) : (Jr = e);
  }
  function Ii() {
    if (Jr) {
      var e = Jr,
        t = Fr;
      if (((Fr = Jr = null), Pn(e), t)) for (e = 0; e < t.length; e++) Pn(t[e]);
    }
  }
  function zi(e, t) {
    return e(t);
  }
  function k() {}
  var P = !1;
  function M(e, t, r) {
    if (P) return e(t, r);
    P = !0;
    try {
      return zi(e, t, r);
    } finally {
      (P = !1), (Jr !== null || Fr !== null) && (k(), Ii());
    }
  }
  function V(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = lo(r);
    if (l === null) return null;
    r = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(o(231, t, typeof r));
    return r;
  }
  var ne = !1;
  if (p)
    try {
      var fe = {};
      Object.defineProperty(fe, "passive", {
        get: function () {
          ne = !0;
        },
      }),
        window.addEventListener("test", fe, fe),
        window.removeEventListener("test", fe, fe);
    } catch {
      ne = !1;
    }
  function ke(e, t, r, l, a, u, m, y, E) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, A);
    } catch (H) {
      this.onError(H);
    }
  }
  var re = !1,
    se = null,
    Z = !1,
    je = null,
    Oe = {
      onError: function (e) {
        (re = !0), (se = e);
      },
    };
  function Ke(e, t, r, l, a, u, m, y, E) {
    (re = !1), (se = null), ke.apply(Oe, arguments);
  }
  function mt(e, t, r, l, a, u, m, y, E) {
    if ((Ke.apply(this, arguments), re)) {
      if (re) {
        var A = se;
        (re = !1), (se = null);
      } else throw Error(o(198));
      Z || ((Z = !0), (je = A));
    }
  }
  function He(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Qe(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function st(e) {
    if (He(e) !== e) throw Error(o(188));
  }
  function Zr(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = He(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, l = t; ; ) {
      var a = r.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (((l = a.return), l !== null)) {
          r = l;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === r) return st(a), e;
          if (u === l) return st(a), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== l.return) (r = a), (l = u);
      else {
        for (var m = !1, y = a.child; y; ) {
          if (y === r) {
            (m = !0), (r = a), (l = u);
            break;
          }
          if (y === l) {
            (m = !0), (l = a), (r = u);
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = u.child; y; ) {
            if (y === r) {
              (m = !0), (r = u), (l = a);
              break;
            }
            if (y === l) {
              (m = !0), (l = u), (r = a);
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (r.alternate !== l) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function en(e) {
    return (e = Zr(e)), e !== null ? er(e) : null;
  }
  function er(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = er(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var qt = i.unstable_scheduleCallback,
    al = i.unstable_cancelCallback,
    Dn = i.unstable_shouldYield,
    Ar = i.unstable_requestPaint,
    Ye = i.unstable_now,
    sl = i.unstable_getCurrentPriorityLevel,
    We = i.unstable_ImmediatePriority,
    vt = i.unstable_UserBlockingPriority,
    Mr = i.unstable_NormalPriority,
    On = i.unstable_LowPriority,
    lt = i.unstable_IdlePriority,
    cr = null,
    Qt = null;
  function ya(e) {
    if (Qt && typeof Qt.onCommitFiberRoot == "function")
      try {
        Qt.onCommitFiberRoot(cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var dr = Math.clz32 ? Math.clz32 : ap,
    ip = Math.log,
    op = Math.LN2;
  function ap(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ip(e) / op) | 0)) | 0;
  }
  var Ui = 64,
    $i = 4194304;
  function $l(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Bi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var l = 0,
      a = e.suspendedLanes,
      u = e.pingedLanes,
      m = r & 268435455;
    if (m !== 0) {
      var y = m & ~a;
      y !== 0 ? (l = $l(y)) : ((u &= m), u !== 0 && (l = $l(u)));
    } else (m = r & ~a), m !== 0 ? (l = $l(m)) : u !== 0 && (l = $l(u));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      !(t & a) &&
      ((a = l & -l), (u = t & -t), a >= u || (a === 16 && (u & 4194240) !== 0))
    )
      return t;
    if ((l & 4 && (l |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t; )
        (r = 31 - dr(t)), (a = 1 << r), (l |= e[r]), (t &= ~a);
    return l;
  }
  function sp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function up(e, t) {
    for (
      var r = e.suspendedLanes,
        l = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var m = 31 - dr(u),
        y = 1 << m,
        E = a[m];
      E === -1
        ? (!(y & r) || y & l) && (a[m] = sp(y, t))
        : E <= t && (e.expiredLanes |= y),
        (u &= ~y);
    }
  }
  function xa(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function qu() {
    var e = Ui;
    return (Ui <<= 1), !(Ui & 4194240) && (Ui = 64), e;
  }
  function wa(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Bl(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - dr(t)),
      (e[t] = r);
  }
  function cp(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var a = 31 - dr(r),
        u = 1 << a;
      (t[a] = 0), (l[a] = -1), (e[a] = -1), (r &= ~u);
    }
  }
  function Sa(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var l = 31 - dr(r),
        a = 1 << l;
      (a & t) | (e[l] & t) && (e[l] |= t), (r &= ~a);
    }
  }
  var qe = 0;
  function Qu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ku,
    Ea,
    Yu,
    Gu,
    Xu,
    ka = !1,
    Vi = [],
    tn = null,
    rn = null,
    nn = null,
    Vl = new Map(),
    Hl = new Map(),
    ln = [],
    dp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Ju(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        rn = null;
        break;
      case "mouseover":
      case "mouseout":
        nn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hl.delete(t.pointerId);
    }
  }
  function Wl(e, t, r, l, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = ii(t)), t !== null && Ea(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function fp(e, t, r, l, a) {
    switch (t) {
      case "focusin":
        return (tn = Wl(tn, e, t, r, l, a)), !0;
      case "dragenter":
        return (rn = Wl(rn, e, t, r, l, a)), !0;
      case "mouseover":
        return (nn = Wl(nn, e, t, r, l, a)), !0;
      case "pointerover":
        var u = a.pointerId;
        return Vl.set(u, Wl(Vl.get(u) || null, e, t, r, l, a)), !0;
      case "gotpointercapture":
        return (
          (u = a.pointerId), Hl.set(u, Wl(Hl.get(u) || null, e, t, r, l, a)), !0
        );
    }
    return !1;
  }
  function Zu(e) {
    var t = Fn(e.target);
    if (t !== null) {
      var r = He(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Qe(r)), t !== null)) {
            (e.blockedOn = t),
              Xu(e.priority, function () {
                Yu(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Hi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        (Rn = l), r.target.dispatchEvent(l), (Rn = null);
      } else return (t = ii(r)), t !== null && Ea(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function ec(e, t, r) {
    Hi(e) && r.delete(t);
  }
  function hp() {
    (ka = !1),
      tn !== null && Hi(tn) && (tn = null),
      rn !== null && Hi(rn) && (rn = null),
      nn !== null && Hi(nn) && (nn = null),
      Vl.forEach(ec),
      Hl.forEach(ec);
  }
  function ql(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ka ||
        ((ka = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, hp)));
  }
  function Ql(e) {
    function t(a) {
      return ql(a, e);
    }
    if (0 < Vi.length) {
      ql(Vi[0], e);
      for (var r = 1; r < Vi.length; r++) {
        var l = Vi[r];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      tn !== null && ql(tn, e),
        rn !== null && ql(rn, e),
        nn !== null && ql(nn, e),
        Vl.forEach(t),
        Hl.forEach(t),
        r = 0;
      r < ln.length;
      r++
    )
      (l = ln[r]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < ln.length && ((r = ln[0]), r.blockedOn === null); )
      Zu(r), r.blockedOn === null && ln.shift();
  }
  var ul = pe.ReactCurrentBatchConfig,
    Wi = !0;
  function pp(e, t, r, l) {
    var a = qe,
      u = ul.transition;
    ul.transition = null;
    try {
      (qe = 1), ja(e, t, r, l);
    } finally {
      (qe = a), (ul.transition = u);
    }
  }
  function mp(e, t, r, l) {
    var a = qe,
      u = ul.transition;
    ul.transition = null;
    try {
      (qe = 4), ja(e, t, r, l);
    } finally {
      (qe = a), (ul.transition = u);
    }
  }
  function ja(e, t, r, l) {
    if (Wi) {
      var a = Ca(e, t, r, l);
      if (a === null) Ba(e, t, l, qi, r), Ju(e, l);
      else if (fp(a, e, t, r, l)) l.stopPropagation();
      else if ((Ju(e, l), t & 4 && -1 < dp.indexOf(e))) {
        for (; a !== null; ) {
          var u = ii(a);
          if (
            (u !== null && Ku(u),
            (u = Ca(e, t, r, l)),
            u === null && Ba(e, t, l, qi, r),
            u === a)
          )
            break;
          a = u;
        }
        a !== null && l.stopPropagation();
      } else Ba(e, t, l, null, r);
    }
  }
  var qi = null;
  function Ca(e, t, r, l) {
    if (((qi = null), (e = Ul(l)), (e = Fn(e)), e !== null))
      if (((t = He(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Qe(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (qi = e), null;
  }
  function tc(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (sl()) {
          case We:
            return 1;
          case vt:
            return 4;
          case Mr:
          case On:
            return 16;
          case lt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var on = null,
    Na = null,
    Qi = null;
  function rc() {
    if (Qi) return Qi;
    var e,
      t = Na,
      r = t.length,
      l,
      a = "value" in on ? on.value : on.textContent,
      u = a.length;
    for (e = 0; e < r && t[e] === a[e]; e++);
    var m = r - e;
    for (l = 1; l <= m && t[r - l] === a[u - l]; l++);
    return (Qi = a.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Ki(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yi() {
    return !0;
  }
  function nc() {
    return !1;
  }
  function Kt(e) {
    function t(r, l, a, u, m) {
      (this._reactName = r),
        (this._targetInst = a),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = m),
        (this.currentTarget = null);
      for (var y in e)
        e.hasOwnProperty(y) && ((r = e[y]), (this[y] = r ? r(u) : u[y]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Yi
          : nc),
        (this.isPropagationStopped = nc),
        this
      );
    }
    return (
      J(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Yi));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Yi));
        },
        persist: function () {},
        isPersistent: Yi,
      }),
      t
    );
  }
  var cl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    _a = Kt(cl),
    Kl = J({}, cl, { view: 0, detail: 0 }),
    vp = Kt(Kl),
    Ta,
    Ra,
    Yl,
    Gi = J({}, Kl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: La,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Yl &&
              (Yl && e.type === "mousemove"
                ? ((Ta = e.screenX - Yl.screenX), (Ra = e.screenY - Yl.screenY))
                : (Ra = Ta = 0),
              (Yl = e)),
            Ta);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ra;
      },
    }),
    lc = Kt(Gi),
    gp = J({}, Gi, { dataTransfer: 0 }),
    yp = Kt(gp),
    xp = J({}, Kl, { relatedTarget: 0 }),
    Pa = Kt(xp),
    wp = J({}, cl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sp = Kt(wp),
    Ep = J({}, cl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    kp = Kt(Ep),
    jp = J({}, cl, { data: 0 }),
    ic = Kt(jp),
    Cp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Np = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _p = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Tp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = _p[e])
      ? !!t[e]
      : !1;
  }
  function La() {
    return Tp;
  }
  var Rp = J({}, Kl, {
      key: function (e) {
        if (e.key) {
          var t = Cp[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ki(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Np[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: La,
      charCode: function (e) {
        return e.type === "keypress" ? Ki(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ki(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Pp = Kt(Rp),
    Lp = J({}, Gi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    oc = Kt(Lp),
    Dp = J({}, Kl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: La,
    }),
    Op = Kt(Dp),
    Fp = J({}, cl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ap = Kt(Fp),
    Mp = J({}, Gi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    bp = Kt(Mp),
    Ip = [9, 13, 27, 32],
    Da = p && "CompositionEvent" in window,
    Gl = null;
  p && "documentMode" in document && (Gl = document.documentMode);
  var zp = p && "TextEvent" in window && !Gl,
    ac = p && (!Da || (Gl && 8 < Gl && 11 >= Gl)),
    sc = " ",
    uc = !1;
  function cc(e, t) {
    switch (e) {
      case "keyup":
        return Ip.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function dc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var dl = !1;
  function Up(e, t) {
    switch (e) {
      case "compositionend":
        return dc(t);
      case "keypress":
        return t.which !== 32 ? null : ((uc = !0), sc);
      case "textInput":
        return (e = t.data), e === sc && uc ? null : e;
      default:
        return null;
    }
  }
  function $p(e, t) {
    if (dl)
      return e === "compositionend" || (!Da && cc(e, t))
        ? ((e = rc()), (Qi = Na = on = null), (dl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ac && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Bp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function fc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Bp[e.type] : t === "textarea";
  }
  function hc(e, t, r, l) {
    Ln(l),
      (t = to(t, "onChange")),
      0 < t.length &&
        ((r = new _a("onChange", "change", null, r, l)),
        e.push({ event: r, listeners: t }));
  }
  var Xl = null,
    Jl = null;
  function Vp(e) {
    Lc(e, 0);
  }
  function Xi(e) {
    var t = vl(e);
    if (Zn(t)) return e;
  }
  function Hp(e, t) {
    if (e === "change") return t;
  }
  var pc = !1;
  if (p) {
    var Oa;
    if (p) {
      var Fa = "oninput" in document;
      if (!Fa) {
        var mc = document.createElement("div");
        mc.setAttribute("oninput", "return;"),
          (Fa = typeof mc.oninput == "function");
      }
      Oa = Fa;
    } else Oa = !1;
    pc = Oa && (!document.documentMode || 9 < document.documentMode);
  }
  function vc() {
    Xl && (Xl.detachEvent("onpropertychange", gc), (Jl = Xl = null));
  }
  function gc(e) {
    if (e.propertyName === "value" && Xi(Jl)) {
      var t = [];
      hc(t, Jl, e, Ul(e)), M(Vp, t);
    }
  }
  function Wp(e, t, r) {
    e === "focusin"
      ? (vc(), (Xl = t), (Jl = r), Xl.attachEvent("onpropertychange", gc))
      : e === "focusout" && vc();
  }
  function qp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xi(Jl);
  }
  function Qp(e, t) {
    if (e === "click") return Xi(t);
  }
  function Kp(e, t) {
    if (e === "input" || e === "change") return Xi(t);
  }
  function Yp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var fr = typeof Object.is == "function" ? Object.is : Yp;
  function Zl(e, t) {
    if (fr(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      l = Object.keys(t);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var a = r[l];
      if (!v.call(t, a) || !fr(e[a], t[a])) return !1;
    }
    return !0;
  }
  function yc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xc(e, t) {
    var r = yc(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (((l = e + r.textContent.length), e <= t && l >= t))
          return { node: r, offset: t - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = yc(r);
    }
  }
  function wc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? wc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Sc() {
    for (var e = window, t = Dt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Dt(e.document);
    }
    return t;
  }
  function Aa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Gp(e) {
    var t = Sc(),
      r = e.focusedElem,
      l = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      wc(r.ownerDocument.documentElement, r)
    ) {
      if (l !== null && Aa(r)) {
        if (
          ((t = l.start),
          (e = l.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = r.textContent.length,
            u = Math.min(l.start, a);
          (l = l.end === void 0 ? u : Math.min(l.end, a)),
            !e.extend && u > l && ((a = l), (l = u), (u = a)),
            (a = xc(r, u));
          var m = xc(r, l);
          a &&
            m &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== m.node ||
              e.focusOffset !== m.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            u > l
              ? (e.addRange(t), e.extend(m.node, m.offset))
              : (t.setEnd(m.node, m.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Xp = p && "documentMode" in document && 11 >= document.documentMode,
    fl = null,
    Ma = null,
    ei = null,
    ba = !1;
  function Ec(e, t, r) {
    var l =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ba ||
      fl == null ||
      fl !== Dt(l) ||
      ((l = fl),
      "selectionStart" in l && Aa(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ei && Zl(ei, l)) ||
        ((ei = l),
        (l = to(Ma, "onSelect")),
        0 < l.length &&
          ((t = new _a("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: l }),
          (t.target = fl))));
  }
  function Ji(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var hl = {
      animationend: Ji("Animation", "AnimationEnd"),
      animationiteration: Ji("Animation", "AnimationIteration"),
      animationstart: Ji("Animation", "AnimationStart"),
      transitionend: Ji("Transition", "TransitionEnd"),
    },
    Ia = {},
    kc = {};
  p &&
    ((kc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hl.animationend.animation,
      delete hl.animationiteration.animation,
      delete hl.animationstart.animation),
    "TransitionEvent" in window || delete hl.transitionend.transition);
  function Zi(e) {
    if (Ia[e]) return Ia[e];
    if (!hl[e]) return e;
    var t = hl[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in kc) return (Ia[e] = t[r]);
    return e;
  }
  var jc = Zi("animationend"),
    Cc = Zi("animationiteration"),
    Nc = Zi("animationstart"),
    _c = Zi("transitionend"),
    Tc = new Map(),
    Rc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function an(e, t) {
    Tc.set(e, t), c(t, [e]);
  }
  for (var za = 0; za < Rc.length; za++) {
    var Ua = Rc[za],
      Jp = Ua.toLowerCase(),
      Zp = Ua[0].toUpperCase() + Ua.slice(1);
    an(Jp, "on" + Zp);
  }
  an(jc, "onAnimationEnd"),
    an(Cc, "onAnimationIteration"),
    an(Nc, "onAnimationStart"),
    an("dblclick", "onDoubleClick"),
    an("focusin", "onFocus"),
    an("focusout", "onBlur"),
    an(_c, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ti =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    em = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ti)
    );
  function Pc(e, t, r) {
    var l = e.type || "unknown-event";
    (e.currentTarget = r), mt(l, t, void 0, e), (e.currentTarget = null);
  }
  function Lc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r],
        a = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var y = l[m],
              E = y.instance,
              A = y.currentTarget;
            if (((y = y.listener), E !== u && a.isPropagationStopped()))
              break e;
            Pc(a, y, A), (u = E);
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((y = l[m]),
              (E = y.instance),
              (A = y.currentTarget),
              (y = y.listener),
              E !== u && a.isPropagationStopped())
            )
              break e;
            Pc(a, y, A), (u = E);
          }
      }
    }
    if (Z) throw ((e = je), (Z = !1), (je = null), e);
  }
  function Ze(e, t) {
    var r = t[Ka];
    r === void 0 && (r = t[Ka] = new Set());
    var l = e + "__bubble";
    r.has(l) || (Dc(t, e, 2, !1), r.add(l));
  }
  function $a(e, t, r) {
    var l = 0;
    t && (l |= 4), Dc(r, e, l, t);
  }
  var eo = "_reactListening" + Math.random().toString(36).slice(2);
  function ri(e) {
    if (!e[eo]) {
      (e[eo] = !0),
        s.forEach(function (r) {
          r !== "selectionchange" && (em.has(r) || $a(r, !1, e), $a(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[eo] || ((t[eo] = !0), $a("selectionchange", !1, t));
    }
  }
  function Dc(e, t, r, l) {
    switch (tc(t)) {
      case 1:
        var a = pp;
        break;
      case 4:
        a = mp;
        break;
      default:
        a = ja;
    }
    (r = a.bind(null, t, r, e)),
      (a = void 0),
      !ne ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (a = !0),
      l
        ? a !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: a })
          : e.addEventListener(t, r, !0)
        : a !== void 0
        ? e.addEventListener(t, r, { passive: a })
        : e.addEventListener(t, r, !1);
  }
  function Ba(e, t, r, l, a) {
    var u = l;
    if (!(t & 1) && !(t & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var y = l.stateNode.containerInfo;
          if (y === a || (y.nodeType === 8 && y.parentNode === a)) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var E = m.tag;
              if (
                (E === 3 || E === 4) &&
                ((E = m.stateNode.containerInfo),
                E === a || (E.nodeType === 8 && E.parentNode === a))
              )
                return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (((m = Fn(y)), m === null)) return;
            if (((E = m.tag), E === 5 || E === 6)) {
              l = u = m;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    M(function () {
      var A = u,
        H = Ul(r),
        q = [];
      e: {
        var B = Tc.get(e);
        if (B !== void 0) {
          var te = _a,
            oe = e;
          switch (e) {
            case "keypress":
              if (Ki(r) === 0) break e;
            case "keydown":
            case "keyup":
              te = Pp;
              break;
            case "focusin":
              (oe = "focus"), (te = Pa);
              break;
            case "focusout":
              (oe = "blur"), (te = Pa);
              break;
            case "beforeblur":
            case "afterblur":
              te = Pa;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = lc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = yp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = Op;
              break;
            case jc:
            case Cc:
            case Nc:
              te = Sp;
              break;
            case _c:
              te = Ap;
              break;
            case "scroll":
              te = vp;
              break;
            case "wheel":
              te = bp;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = kp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = oc;
          }
          var ce = (t & 4) !== 0,
            dt = !ce && e === "scroll",
            L = ce ? (B !== null ? B + "Capture" : null) : B;
          ce = [];
          for (var j = A, D; j !== null; ) {
            D = j;
            var K = D.stateNode;
            if (
              (D.tag === 5 &&
                K !== null &&
                ((D = K),
                L !== null &&
                  ((K = V(j, L)), K != null && ce.push(ni(j, K, D)))),
              dt)
            )
              break;
            j = j.return;
          }
          0 < ce.length &&
            ((B = new te(B, oe, null, r, H)),
            q.push({ event: B, listeners: ce }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((B = e === "mouseover" || e === "pointerover"),
            (te = e === "mouseout" || e === "pointerout"),
            B &&
              r !== Rn &&
              (oe = r.relatedTarget || r.fromElement) &&
              (Fn(oe) || oe[br]))
          )
            break e;
          if (
            (te || B) &&
            ((B =
              H.window === H
                ? H
                : (B = H.ownerDocument)
                ? B.defaultView || B.parentWindow
                : window),
            te
              ? ((oe = r.relatedTarget || r.toElement),
                (te = A),
                (oe = oe ? Fn(oe) : null),
                oe !== null &&
                  ((dt = He(oe)),
                  oe !== dt || (oe.tag !== 5 && oe.tag !== 6)) &&
                  (oe = null))
              : ((te = null), (oe = A)),
            te !== oe)
          ) {
            if (
              ((ce = lc),
              (K = "onMouseLeave"),
              (L = "onMouseEnter"),
              (j = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ce = oc),
                (K = "onPointerLeave"),
                (L = "onPointerEnter"),
                (j = "pointer")),
              (dt = te == null ? B : vl(te)),
              (D = oe == null ? B : vl(oe)),
              (B = new ce(K, j + "leave", te, r, H)),
              (B.target = dt),
              (B.relatedTarget = D),
              (K = null),
              Fn(H) === A &&
                ((ce = new ce(L, j + "enter", oe, r, H)),
                (ce.target = D),
                (ce.relatedTarget = dt),
                (K = ce)),
              (dt = K),
              te && oe)
            )
              t: {
                for (ce = te, L = oe, j = 0, D = ce; D; D = pl(D)) j++;
                for (D = 0, K = L; K; K = pl(K)) D++;
                for (; 0 < j - D; ) (ce = pl(ce)), j--;
                for (; 0 < D - j; ) (L = pl(L)), D--;
                for (; j--; ) {
                  if (ce === L || (L !== null && ce === L.alternate)) break t;
                  (ce = pl(ce)), (L = pl(L));
                }
                ce = null;
              }
            else ce = null;
            te !== null && Oc(q, B, te, ce, !1),
              oe !== null && dt !== null && Oc(q, dt, oe, ce, !0);
          }
        }
        e: {
          if (
            ((B = A ? vl(A) : window),
            (te = B.nodeName && B.nodeName.toLowerCase()),
            te === "select" || (te === "input" && B.type === "file"))
          )
            var he = Hp;
          else if (fc(B))
            if (pc) he = Kp;
            else {
              he = qp;
              var ye = Wp;
            }
          else
            (te = B.nodeName) &&
              te.toLowerCase() === "input" &&
              (B.type === "checkbox" || B.type === "radio") &&
              (he = Qp);
          if (he && (he = he(e, A))) {
            hc(q, he, r, H);
            break e;
          }
          ye && ye(e, B, A),
            e === "focusout" &&
              (ye = B._wrapperState) &&
              ye.controlled &&
              B.type === "number" &&
              O(B, "number", B.value);
        }
        switch (((ye = A ? vl(A) : window), e)) {
          case "focusin":
            (fc(ye) || ye.contentEditable === "true") &&
              ((fl = ye), (Ma = A), (ei = null));
            break;
          case "focusout":
            ei = Ma = fl = null;
            break;
          case "mousedown":
            ba = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ba = !1), Ec(q, r, H);
            break;
          case "selectionchange":
            if (Xp) break;
          case "keydown":
          case "keyup":
            Ec(q, r, H);
        }
        var xe;
        if (Da)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          dl
            ? cc(e, r) && (Ce = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (Ce = "onCompositionStart");
        Ce &&
          (ac &&
            r.locale !== "ko" &&
            (dl || Ce !== "onCompositionStart"
              ? Ce === "onCompositionEnd" && dl && (xe = rc())
              : ((on = H),
                (Na = "value" in on ? on.value : on.textContent),
                (dl = !0))),
          (ye = to(A, Ce)),
          0 < ye.length &&
            ((Ce = new ic(Ce, e, null, r, H)),
            q.push({ event: Ce, listeners: ye }),
            xe
              ? (Ce.data = xe)
              : ((xe = dc(r)), xe !== null && (Ce.data = xe)))),
          (xe = zp ? Up(e, r) : $p(e, r)) &&
            ((A = to(A, "onBeforeInput")),
            0 < A.length &&
              ((H = new ic("onBeforeInput", "beforeinput", null, r, H)),
              q.push({ event: H, listeners: A }),
              (H.data = xe)));
      }
      Lc(q, t);
    });
  }
  function ni(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function to(e, t) {
    for (var r = t + "Capture", l = []; e !== null; ) {
      var a = e,
        u = a.stateNode;
      a.tag === 5 &&
        u !== null &&
        ((a = u),
        (u = V(e, r)),
        u != null && l.unshift(ni(e, u, a)),
        (u = V(e, t)),
        u != null && l.push(ni(e, u, a))),
        (e = e.return);
    }
    return l;
  }
  function pl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Oc(e, t, r, l, a) {
    for (var u = t._reactName, m = []; r !== null && r !== l; ) {
      var y = r,
        E = y.alternate,
        A = y.stateNode;
      if (E !== null && E === l) break;
      y.tag === 5 &&
        A !== null &&
        ((y = A),
        a
          ? ((E = V(r, u)), E != null && m.unshift(ni(r, E, y)))
          : a || ((E = V(r, u)), E != null && m.push(ni(r, E, y)))),
        (r = r.return);
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var tm = /\r\n?/g,
    rm = /\u0000|\uFFFD/g;
  function Fc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        tm,
        `
`
      )
      .replace(rm, "");
  }
  function ro(e, t, r) {
    if (((t = Fc(t)), Fc(e) !== t && r)) throw Error(o(425));
  }
  function no() {}
  var Va = null,
    Ha = null;
  function Wa(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var qa = typeof setTimeout == "function" ? setTimeout : void 0,
    nm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ac = typeof Promise == "function" ? Promise : void 0,
    lm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ac < "u"
        ? function (e) {
            return Ac.resolve(null).then(e).catch(im);
          }
        : qa;
  function im(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Qa(e, t) {
    var r = t,
      l = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === "/$")) {
          if (l === 0) {
            e.removeChild(a), Ql(t);
            return;
          }
          l--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || l++;
      r = a;
    } while (r);
    Ql(t);
  }
  function sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Mc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ml = Math.random().toString(36).slice(2),
    Cr = "__reactFiber$" + ml,
    li = "__reactProps$" + ml,
    br = "__reactContainer$" + ml,
    Ka = "__reactEvents$" + ml,
    om = "__reactListeners$" + ml,
    am = "__reactHandles$" + ml;
  function Fn(e) {
    var t = e[Cr];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[br] || r[Cr])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Mc(e); e !== null; ) {
            if ((r = e[Cr])) return r;
            e = Mc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function ii(e) {
    return (
      (e = e[Cr] || e[br]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function vl(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function lo(e) {
    return e[li] || null;
  }
  var Ya = [],
    gl = -1;
  function un(e) {
    return { current: e };
  }
  function et(e) {
    0 > gl || ((e.current = Ya[gl]), (Ya[gl] = null), gl--);
  }
  function Ge(e, t) {
    gl++, (Ya[gl] = e.current), (e.current = t);
  }
  var cn = {},
    Tt = un(cn),
    It = un(!1),
    An = cn;
  function yl(e, t) {
    var r = e.type.contextTypes;
    if (!r) return cn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var a = {},
      u;
    for (u in r) a[u] = t[u];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      a
    );
  }
  function zt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function io() {
    et(It), et(Tt);
  }
  function bc(e, t, r) {
    if (Tt.current !== cn) throw Error(o(168));
    Ge(Tt, t), Ge(It, r);
  }
  function Ic(e, t, r) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
      return r;
    l = l.getChildContext();
    for (var a in l) if (!(a in t)) throw Error(o(108, Be(e) || "Unknown", a));
    return J({}, r, l);
  }
  function oo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        cn),
      (An = Tt.current),
      Ge(Tt, e),
      Ge(It, It.current),
      !0
    );
  }
  function zc(e, t, r) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    r
      ? ((e = Ic(e, t, An)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        et(It),
        et(Tt),
        Ge(Tt, e))
      : et(It),
      Ge(It, r);
  }
  var Ir = null,
    ao = !1,
    Ga = !1;
  function Uc(e) {
    Ir === null ? (Ir = [e]) : Ir.push(e);
  }
  function sm(e) {
    (ao = !0), Uc(e);
  }
  function dn() {
    if (!Ga && Ir !== null) {
      Ga = !0;
      var e = 0,
        t = qe;
      try {
        var r = Ir;
        for (qe = 1; e < r.length; e++) {
          var l = r[e];
          do l = l(!0);
          while (l !== null);
        }
        (Ir = null), (ao = !1);
      } catch (a) {
        throw (Ir !== null && (Ir = Ir.slice(e + 1)), qt(We, dn), a);
      } finally {
        (qe = t), (Ga = !1);
      }
    }
    return null;
  }
  var xl = [],
    wl = 0,
    so = null,
    uo = 0,
    tr = [],
    rr = 0,
    Mn = null,
    zr = 1,
    Ur = "";
  function bn(e, t) {
    (xl[wl++] = uo), (xl[wl++] = so), (so = e), (uo = t);
  }
  function $c(e, t, r) {
    (tr[rr++] = zr), (tr[rr++] = Ur), (tr[rr++] = Mn), (Mn = e);
    var l = zr;
    e = Ur;
    var a = 32 - dr(l) - 1;
    (l &= ~(1 << a)), (r += 1);
    var u = 32 - dr(t) + a;
    if (30 < u) {
      var m = a - (a % 5);
      (u = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (a -= m),
        (zr = (1 << (32 - dr(t) + a)) | (r << a) | l),
        (Ur = u + e);
    } else (zr = (1 << u) | (r << a) | l), (Ur = e);
  }
  function Xa(e) {
    e.return !== null && (bn(e, 1), $c(e, 1, 0));
  }
  function Ja(e) {
    for (; e === so; )
      (so = xl[--wl]), (xl[wl] = null), (uo = xl[--wl]), (xl[wl] = null);
    for (; e === Mn; )
      (Mn = tr[--rr]),
        (tr[rr] = null),
        (Ur = tr[--rr]),
        (tr[rr] = null),
        (zr = tr[--rr]),
        (tr[rr] = null);
  }
  var Yt = null,
    Gt = null,
    rt = !1,
    hr = null;
  function Bc(e, t) {
    var r = or(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Vc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Yt = e), (Gt = sn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Yt = e), (Gt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Mn !== null ? { id: zr, overflow: Ur } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = or(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Yt = e),
              (Gt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Za(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function es(e) {
    if (rt) {
      var t = Gt;
      if (t) {
        var r = t;
        if (!Vc(e, t)) {
          if (Za(e)) throw Error(o(418));
          t = sn(r.nextSibling);
          var l = Yt;
          t && Vc(e, t)
            ? Bc(l, r)
            : ((e.flags = (e.flags & -4097) | 2), (rt = !1), (Yt = e));
        }
      } else {
        if (Za(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (rt = !1), (Yt = e);
      }
    }
  }
  function Hc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Yt = e;
  }
  function co(e) {
    if (e !== Yt) return !1;
    if (!rt) return Hc(e), (rt = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Wa(e.type, e.memoizedProps))),
      t && (t = Gt))
    ) {
      if (Za(e)) throw (Wc(), Error(o(418)));
      for (; t; ) Bc(e, t), (t = sn(t.nextSibling));
    }
    if ((Hc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Gt = sn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Gt = null;
      }
    } else Gt = Yt ? sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wc() {
    for (var e = Gt; e; ) e = sn(e.nextSibling);
  }
  function Sl() {
    (Gt = Yt = null), (rt = !1);
  }
  function ts(e) {
    hr === null ? (hr = [e]) : hr.push(e);
  }
  var um = pe.ReactCurrentBatchConfig;
  function oi(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(o(309));
          var l = r.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var a = l,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (m) {
              var y = a.refs;
              m === null ? delete y[u] : (y[u] = m);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!r._owner) throw Error(o(290, e));
    }
    return e;
  }
  function fo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function qc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qc(e) {
    function t(L, j) {
      if (e) {
        var D = L.deletions;
        D === null ? ((L.deletions = [j]), (L.flags |= 16)) : D.push(j);
      }
    }
    function r(L, j) {
      if (!e) return null;
      for (; j !== null; ) t(L, j), (j = j.sibling);
      return null;
    }
    function l(L, j) {
      for (L = new Map(); j !== null; )
        j.key !== null ? L.set(j.key, j) : L.set(j.index, j), (j = j.sibling);
      return L;
    }
    function a(L, j) {
      return (L = xn(L, j)), (L.index = 0), (L.sibling = null), L;
    }
    function u(L, j, D) {
      return (
        (L.index = D),
        e
          ? ((D = L.alternate),
            D !== null
              ? ((D = D.index), D < j ? ((L.flags |= 2), j) : D)
              : ((L.flags |= 2), j))
          : ((L.flags |= 1048576), j)
      );
    }
    function m(L) {
      return e && L.alternate === null && (L.flags |= 2), L;
    }
    function y(L, j, D, K) {
      return j === null || j.tag !== 6
        ? ((j = qs(D, L.mode, K)), (j.return = L), j)
        : ((j = a(j, D)), (j.return = L), j);
    }
    function E(L, j, D, K) {
      var he = D.type;
      return he === Ee
        ? H(L, j, D.props.children, K, D.key)
        : j !== null &&
          (j.elementType === he ||
            (typeof he == "object" &&
              he !== null &&
              he.$$typeof === $e &&
              qc(he) === j.type))
        ? ((K = a(j, D.props)), (K.ref = oi(L, j, D)), (K.return = L), K)
        : ((K = Mo(D.type, D.key, D.props, null, L.mode, K)),
          (K.ref = oi(L, j, D)),
          (K.return = L),
          K);
    }
    function A(L, j, D, K) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== D.containerInfo ||
        j.stateNode.implementation !== D.implementation
        ? ((j = Qs(D, L.mode, K)), (j.return = L), j)
        : ((j = a(j, D.children || [])), (j.return = L), j);
    }
    function H(L, j, D, K, he) {
      return j === null || j.tag !== 7
        ? ((j = Wn(D, L.mode, K, he)), (j.return = L), j)
        : ((j = a(j, D)), (j.return = L), j);
    }
    function q(L, j, D) {
      if ((typeof j == "string" && j !== "") || typeof j == "number")
        return (j = qs("" + j, L.mode, D)), (j.return = L), j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case T:
            return (
              (D = Mo(j.type, j.key, j.props, null, L.mode, D)),
              (D.ref = oi(L, null, j)),
              (D.return = L),
              D
            );
          case ue:
            return (j = Qs(j, L.mode, D)), (j.return = L), j;
          case $e:
            var K = j._init;
            return q(L, K(j._payload), D);
        }
        if (b(j) || ie(j))
          return (j = Wn(j, L.mode, D, null)), (j.return = L), j;
        fo(L, j);
      }
      return null;
    }
    function B(L, j, D, K) {
      var he = j !== null ? j.key : null;
      if ((typeof D == "string" && D !== "") || typeof D == "number")
        return he !== null ? null : y(L, j, "" + D, K);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case T:
            return D.key === he ? E(L, j, D, K) : null;
          case ue:
            return D.key === he ? A(L, j, D, K) : null;
          case $e:
            return (he = D._init), B(L, j, he(D._payload), K);
        }
        if (b(D) || ie(D)) return he !== null ? null : H(L, j, D, K, null);
        fo(L, D);
      }
      return null;
    }
    function te(L, j, D, K, he) {
      if ((typeof K == "string" && K !== "") || typeof K == "number")
        return (L = L.get(D) || null), y(j, L, "" + K, he);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case T:
            return (
              (L = L.get(K.key === null ? D : K.key) || null), E(j, L, K, he)
            );
          case ue:
            return (
              (L = L.get(K.key === null ? D : K.key) || null), A(j, L, K, he)
            );
          case $e:
            var ye = K._init;
            return te(L, j, D, ye(K._payload), he);
        }
        if (b(K) || ie(K)) return (L = L.get(D) || null), H(j, L, K, he, null);
        fo(j, K);
      }
      return null;
    }
    function oe(L, j, D, K) {
      for (
        var he = null, ye = null, xe = j, Ce = (j = 0), kt = null;
        xe !== null && Ce < D.length;
        Ce++
      ) {
        xe.index > Ce ? ((kt = xe), (xe = null)) : (kt = xe.sibling);
        var Ue = B(L, xe, D[Ce], K);
        if (Ue === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && Ue.alternate === null && t(L, xe),
          (j = u(Ue, j, Ce)),
          ye === null ? (he = Ue) : (ye.sibling = Ue),
          (ye = Ue),
          (xe = kt);
      }
      if (Ce === D.length) return r(L, xe), rt && bn(L, Ce), he;
      if (xe === null) {
        for (; Ce < D.length; Ce++)
          (xe = q(L, D[Ce], K)),
            xe !== null &&
              ((j = u(xe, j, Ce)),
              ye === null ? (he = xe) : (ye.sibling = xe),
              (ye = xe));
        return rt && bn(L, Ce), he;
      }
      for (xe = l(L, xe); Ce < D.length; Ce++)
        (kt = te(xe, L, Ce, D[Ce], K)),
          kt !== null &&
            (e &&
              kt.alternate !== null &&
              xe.delete(kt.key === null ? Ce : kt.key),
            (j = u(kt, j, Ce)),
            ye === null ? (he = kt) : (ye.sibling = kt),
            (ye = kt));
      return (
        e &&
          xe.forEach(function (wn) {
            return t(L, wn);
          }),
        rt && bn(L, Ce),
        he
      );
    }
    function ce(L, j, D, K) {
      var he = ie(D);
      if (typeof he != "function") throw Error(o(150));
      if (((D = he.call(D)), D == null)) throw Error(o(151));
      for (
        var ye = (he = null), xe = j, Ce = (j = 0), kt = null, Ue = D.next();
        xe !== null && !Ue.done;
        Ce++, Ue = D.next()
      ) {
        xe.index > Ce ? ((kt = xe), (xe = null)) : (kt = xe.sibling);
        var wn = B(L, xe, Ue.value, K);
        if (wn === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && wn.alternate === null && t(L, xe),
          (j = u(wn, j, Ce)),
          ye === null ? (he = wn) : (ye.sibling = wn),
          (ye = wn),
          (xe = kt);
      }
      if (Ue.done) return r(L, xe), rt && bn(L, Ce), he;
      if (xe === null) {
        for (; !Ue.done; Ce++, Ue = D.next())
          (Ue = q(L, Ue.value, K)),
            Ue !== null &&
              ((j = u(Ue, j, Ce)),
              ye === null ? (he = Ue) : (ye.sibling = Ue),
              (ye = Ue));
        return rt && bn(L, Ce), he;
      }
      for (xe = l(L, xe); !Ue.done; Ce++, Ue = D.next())
        (Ue = te(xe, L, Ce, Ue.value, K)),
          Ue !== null &&
            (e &&
              Ue.alternate !== null &&
              xe.delete(Ue.key === null ? Ce : Ue.key),
            (j = u(Ue, j, Ce)),
            ye === null ? (he = Ue) : (ye.sibling = Ue),
            (ye = Ue));
      return (
        e &&
          xe.forEach(function (Bm) {
            return t(L, Bm);
          }),
        rt && bn(L, Ce),
        he
      );
    }
    function dt(L, j, D, K) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === Ee &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case T:
            e: {
              for (var he = D.key, ye = j; ye !== null; ) {
                if (ye.key === he) {
                  if (((he = D.type), he === Ee)) {
                    if (ye.tag === 7) {
                      r(L, ye.sibling),
                        (j = a(ye, D.props.children)),
                        (j.return = L),
                        (L = j);
                      break e;
                    }
                  } else if (
                    ye.elementType === he ||
                    (typeof he == "object" &&
                      he !== null &&
                      he.$$typeof === $e &&
                      qc(he) === ye.type)
                  ) {
                    r(L, ye.sibling),
                      (j = a(ye, D.props)),
                      (j.ref = oi(L, ye, D)),
                      (j.return = L),
                      (L = j);
                    break e;
                  }
                  r(L, ye);
                  break;
                } else t(L, ye);
                ye = ye.sibling;
              }
              D.type === Ee
                ? ((j = Wn(D.props.children, L.mode, K, D.key)),
                  (j.return = L),
                  (L = j))
                : ((K = Mo(D.type, D.key, D.props, null, L.mode, K)),
                  (K.ref = oi(L, j, D)),
                  (K.return = L),
                  (L = K));
            }
            return m(L);
          case ue:
            e: {
              for (ye = D.key; j !== null; ) {
                if (j.key === ye)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === D.containerInfo &&
                    j.stateNode.implementation === D.implementation
                  ) {
                    r(L, j.sibling),
                      (j = a(j, D.children || [])),
                      (j.return = L),
                      (L = j);
                    break e;
                  } else {
                    r(L, j);
                    break;
                  }
                else t(L, j);
                j = j.sibling;
              }
              (j = Qs(D, L.mode, K)), (j.return = L), (L = j);
            }
            return m(L);
          case $e:
            return (ye = D._init), dt(L, j, ye(D._payload), K);
        }
        if (b(D)) return oe(L, j, D, K);
        if (ie(D)) return ce(L, j, D, K);
        fo(L, D);
      }
      return (typeof D == "string" && D !== "") || typeof D == "number"
        ? ((D = "" + D),
          j !== null && j.tag === 6
            ? (r(L, j.sibling), (j = a(j, D)), (j.return = L), (L = j))
            : (r(L, j), (j = qs(D, L.mode, K)), (j.return = L), (L = j)),
          m(L))
        : r(L, j);
    }
    return dt;
  }
  var El = Qc(!0),
    Kc = Qc(!1),
    ho = un(null),
    po = null,
    kl = null,
    rs = null;
  function ns() {
    rs = kl = po = null;
  }
  function ls(e) {
    var t = ho.current;
    et(ho), (e._currentValue = t);
  }
  function is(e, t, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function jl(e, t) {
    (po = e),
      (rs = kl = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ut = !0), (e.firstContext = null));
  }
  function nr(e) {
    var t = e._currentValue;
    if (rs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), kl === null)) {
        if (po === null) throw Error(o(308));
        (kl = e), (po.dependencies = { lanes: 0, firstContext: e });
      } else kl = kl.next = e;
    return t;
  }
  var In = null;
  function os(e) {
    In === null ? (In = [e]) : In.push(e);
  }
  function Yc(e, t, r, l) {
    var a = t.interleaved;
    return (
      a === null ? ((r.next = r), os(t)) : ((r.next = a.next), (a.next = r)),
      (t.interleaved = r),
      $r(e, l)
    );
  }
  function $r(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var fn = !1;
  function as(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Br(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function hn(e, t, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), ze & 2)) {
      var a = l.pending;
      return (
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (l.pending = t),
        $r(e, r)
      );
    }
    return (
      (a = l.interleaved),
      a === null ? ((t.next = t), os(l)) : ((t.next = a.next), (a.next = t)),
      (l.interleaved = t),
      $r(e, r)
    );
  }
  function mo(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), Sa(e, r);
    }
  }
  function Xc(e, t) {
    var r = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), r === l)) {
      var a = null,
        u = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var m = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          u === null ? (a = u = m) : (u = u.next = m), (r = r.next);
        } while (r !== null);
        u === null ? (a = u = t) : (u = u.next = t);
      } else a = u = t;
      (r = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function vo(e, t, r, l) {
    var a = e.updateQueue;
    fn = !1;
    var u = a.firstBaseUpdate,
      m = a.lastBaseUpdate,
      y = a.shared.pending;
    if (y !== null) {
      a.shared.pending = null;
      var E = y,
        A = E.next;
      (E.next = null), m === null ? (u = A) : (m.next = A), (m = E);
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (y = H.lastBaseUpdate),
        y !== m &&
          (y === null ? (H.firstBaseUpdate = A) : (y.next = A),
          (H.lastBaseUpdate = E)));
    }
    if (u !== null) {
      var q = a.baseState;
      (m = 0), (H = A = E = null), (y = u);
      do {
        var B = y.lane,
          te = y.eventTime;
        if ((l & B) === B) {
          H !== null &&
            (H = H.next =
              {
                eventTime: te,
                lane: 0,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null,
              });
          e: {
            var oe = e,
              ce = y;
            switch (((B = t), (te = r), ce.tag)) {
              case 1:
                if (((oe = ce.payload), typeof oe == "function")) {
                  q = oe.call(te, q, B);
                  break e;
                }
                q = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = ce.payload),
                  (B = typeof oe == "function" ? oe.call(te, q, B) : oe),
                  B == null)
                )
                  break e;
                q = J({}, q, B);
                break e;
              case 2:
                fn = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((e.flags |= 64),
            (B = a.effects),
            B === null ? (a.effects = [y]) : B.push(y));
        } else
          (te = {
            eventTime: te,
            lane: B,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            H === null ? ((A = H = te), (E = q)) : (H = H.next = te),
            (m |= B);
        if (((y = y.next), y === null)) {
          if (((y = a.shared.pending), y === null)) break;
          (B = y),
            (y = B.next),
            (B.next = null),
            (a.lastBaseUpdate = B),
            (a.shared.pending = null);
        }
      } while (!0);
      if (
        (H === null && (E = q),
        (a.baseState = E),
        (a.firstBaseUpdate = A),
        (a.lastBaseUpdate = H),
        (t = a.shared.interleaved),
        t !== null)
      ) {
        a = t;
        do (m |= a.lane), (a = a.next);
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      ($n |= m), (e.lanes = m), (e.memoizedState = q);
    }
  }
  function Jc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          a = l.callback;
        if (a !== null) {
          if (((l.callback = null), (l = r), typeof a != "function"))
            throw Error(o(191, a));
          a.call(l);
        }
      }
  }
  var ai = {},
    Nr = un(ai),
    si = un(ai),
    ui = un(ai);
  function zn(e) {
    if (e === ai) throw Error(o(174));
    return e;
  }
  function ss(e, t) {
    switch ((Ge(ui, t), Ge(si, e), Ge(Nr, ai), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Je(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Je(t, e));
    }
    et(Nr), Ge(Nr, t);
  }
  function Cl() {
    et(Nr), et(si), et(ui);
  }
  function Zc(e) {
    zn(ui.current);
    var t = zn(Nr.current),
      r = Je(t, e.type);
    t !== r && (Ge(si, e), Ge(Nr, r));
  }
  function us(e) {
    si.current === e && (et(Nr), et(si));
  }
  var it = un(0);
  function go(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var cs = [];
  function ds() {
    for (var e = 0; e < cs.length; e++)
      cs[e]._workInProgressVersionPrimary = null;
    cs.length = 0;
  }
  var yo = pe.ReactCurrentDispatcher,
    fs = pe.ReactCurrentBatchConfig,
    Un = 0,
    ot = null,
    gt = null,
    St = null,
    xo = !1,
    ci = !1,
    di = 0,
    cm = 0;
  function Rt() {
    throw Error(o(321));
  }
  function hs(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!fr(e[r], t[r])) return !1;
    return !0;
  }
  function ps(e, t, r, l, a, u) {
    if (
      ((Un = u),
      (ot = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yo.current = e === null || e.memoizedState === null ? pm : mm),
      (e = r(l, a)),
      ci)
    ) {
      u = 0;
      do {
        if (((ci = !1), (di = 0), 25 <= u)) throw Error(o(301));
        (u += 1),
          (St = gt = null),
          (t.updateQueue = null),
          (yo.current = vm),
          (e = r(l, a));
      } while (ci);
    }
    if (
      ((yo.current = Eo),
      (t = gt !== null && gt.next !== null),
      (Un = 0),
      (St = gt = ot = null),
      (xo = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function ms() {
    var e = di !== 0;
    return (di = 0), e;
  }
  function _r() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return St === null ? (ot.memoizedState = St = e) : (St = St.next = e), St;
  }
  function lr() {
    if (gt === null) {
      var e = ot.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = gt.next;
    var t = St === null ? ot.memoizedState : St.next;
    if (t !== null) (St = t), (gt = e);
    else {
      if (e === null) throw Error(o(310));
      (gt = e),
        (e = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null,
        }),
        St === null ? (ot.memoizedState = St = e) : (St = St.next = e);
    }
    return St;
  }
  function fi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vs(e) {
    var t = lr(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var l = gt,
      a = l.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (a !== null) {
        var m = a.next;
        (a.next = u.next), (u.next = m);
      }
      (l.baseQueue = a = u), (r.pending = null);
    }
    if (a !== null) {
      (u = a.next), (l = l.baseState);
      var y = (m = null),
        E = null,
        A = u;
      do {
        var H = A.lane;
        if ((Un & H) === H)
          E !== null &&
            (E = E.next =
              {
                lane: 0,
                action: A.action,
                hasEagerState: A.hasEagerState,
                eagerState: A.eagerState,
                next: null,
              }),
            (l = A.hasEagerState ? A.eagerState : e(l, A.action));
        else {
          var q = {
            lane: H,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null,
          };
          E === null ? ((y = E = q), (m = l)) : (E = E.next = q),
            (ot.lanes |= H),
            ($n |= H);
        }
        A = A.next;
      } while (A !== null && A !== u);
      E === null ? (m = l) : (E.next = y),
        fr(l, t.memoizedState) || (Ut = !0),
        (t.memoizedState = l),
        (t.baseState = m),
        (t.baseQueue = E),
        (r.lastRenderedState = l);
    }
    if (((e = r.interleaved), e !== null)) {
      a = e;
      do (u = a.lane), (ot.lanes |= u), ($n |= u), (a = a.next);
      while (a !== e);
    } else a === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function gs(e) {
    var t = lr(),
      r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch,
      a = r.pending,
      u = t.memoizedState;
    if (a !== null) {
      r.pending = null;
      var m = (a = a.next);
      do (u = e(u, m.action)), (m = m.next);
      while (m !== a);
      fr(u, t.memoizedState) || (Ut = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u);
    }
    return [u, l];
  }
  function ed() {}
  function td(e, t) {
    var r = ot,
      l = lr(),
      a = t(),
      u = !fr(l.memoizedState, a);
    if (
      (u && ((l.memoizedState = a), (Ut = !0)),
      (l = l.queue),
      ys(ld.bind(null, r, l, e), [e]),
      l.getSnapshot !== t || u || (St !== null && St.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        hi(9, nd.bind(null, r, l, a, t), void 0, null),
        Et === null)
      )
        throw Error(o(349));
      Un & 30 || rd(r, t, a);
    }
    return a;
  }
  function rd(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = ot.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ot.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function nd(e, t, r, l) {
    (t.value = r), (t.getSnapshot = l), id(t) && od(e);
  }
  function ld(e, t, r) {
    return r(function () {
      id(t) && od(e);
    });
  }
  function id(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !fr(e, r);
    } catch {
      return !0;
    }
  }
  function od(e) {
    var t = $r(e, 1);
    t !== null && gr(t, e, 1, -1);
  }
  function ad(e) {
    var t = _r();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = hm.bind(null, ot, e)),
      [t.memoizedState, e]
    );
  }
  function hi(e, t, r, l) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: l, next: null }),
      (t = ot.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ot.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((l = r.next), (r.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function sd() {
    return lr().memoizedState;
  }
  function wo(e, t, r, l) {
    var a = _r();
    (ot.flags |= e),
      (a.memoizedState = hi(1 | t, r, void 0, l === void 0 ? null : l));
  }
  function So(e, t, r, l) {
    var a = lr();
    l = l === void 0 ? null : l;
    var u = void 0;
    if (gt !== null) {
      var m = gt.memoizedState;
      if (((u = m.destroy), l !== null && hs(l, m.deps))) {
        a.memoizedState = hi(t, r, u, l);
        return;
      }
    }
    (ot.flags |= e), (a.memoizedState = hi(1 | t, r, u, l));
  }
  function ud(e, t) {
    return wo(8390656, 8, e, t);
  }
  function ys(e, t) {
    return So(2048, 8, e, t);
  }
  function cd(e, t) {
    return So(4, 2, e, t);
  }
  function dd(e, t) {
    return So(4, 4, e, t);
  }
  function fd(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function hd(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), So(4, 4, fd.bind(null, t, e), r)
    );
  }
  function xs() {}
  function pd(e, t) {
    var r = lr();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return l !== null && t !== null && hs(t, l[1])
      ? l[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function md(e, t) {
    var r = lr();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return l !== null && t !== null && hs(t, l[1])
      ? l[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function vd(e, t, r) {
    return Un & 21
      ? (fr(r, t) ||
          ((r = qu()), (ot.lanes |= r), ($n |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Ut = !0)), (e.memoizedState = r));
  }
  function dm(e, t) {
    var r = qe;
    (qe = r !== 0 && 4 > r ? r : 4), e(!0);
    var l = fs.transition;
    fs.transition = {};
    try {
      e(!1), t();
    } finally {
      (qe = r), (fs.transition = l);
    }
  }
  function gd() {
    return lr().memoizedState;
  }
  function fm(e, t, r) {
    var l = gn(e);
    if (
      ((r = {
        lane: l,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yd(e))
    )
      xd(t, r);
    else if (((r = Yc(e, t, r, l)), r !== null)) {
      var a = Ft();
      gr(r, e, l, a), wd(r, t, l);
    }
  }
  function hm(e, t, r) {
    var l = gn(e),
      a = {
        lane: l,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (yd(e)) xd(t, a);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var m = t.lastRenderedState,
            y = u(m, r);
          if (((a.hasEagerState = !0), (a.eagerState = y), fr(y, m))) {
            var E = t.interleaved;
            E === null
              ? ((a.next = a), os(t))
              : ((a.next = E.next), (E.next = a)),
              (t.interleaved = a);
            return;
          }
        } catch {
        } finally {
        }
      (r = Yc(e, t, a, l)),
        r !== null && ((a = Ft()), gr(r, e, l, a), wd(r, t, l));
    }
  }
  function yd(e) {
    var t = e.alternate;
    return e === ot || (t !== null && t === ot);
  }
  function xd(e, t) {
    ci = xo = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function wd(e, t, r) {
    if (r & 4194240) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), Sa(e, r);
    }
  }
  var Eo = {
      readContext: nr,
      useCallback: Rt,
      useContext: Rt,
      useEffect: Rt,
      useImperativeHandle: Rt,
      useInsertionEffect: Rt,
      useLayoutEffect: Rt,
      useMemo: Rt,
      useReducer: Rt,
      useRef: Rt,
      useState: Rt,
      useDebugValue: Rt,
      useDeferredValue: Rt,
      useTransition: Rt,
      useMutableSource: Rt,
      useSyncExternalStore: Rt,
      useId: Rt,
      unstable_isNewReconciler: !1,
    },
    pm = {
      readContext: nr,
      useCallback: function (e, t) {
        return (_r().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nr,
      useEffect: ud,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          wo(4194308, 4, fd.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return wo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return wo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = _r();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var l = _r();
        return (
          (t = r !== void 0 ? r(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = fm.bind(null, ot, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = _r();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: ad,
      useDebugValue: xs,
      useDeferredValue: function (e) {
        return (_r().memoizedState = e);
      },
      useTransition: function () {
        var e = ad(!1),
          t = e[0];
        return (e = dm.bind(null, e[1])), (_r().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var l = ot,
          a = _r();
        if (rt) {
          if (r === void 0) throw Error(o(407));
          r = r();
        } else {
          if (((r = t()), Et === null)) throw Error(o(349));
          Un & 30 || rd(l, t, r);
        }
        a.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (a.queue = u),
          ud(ld.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          hi(9, nd.bind(null, l, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = _r(),
          t = Et.identifierPrefix;
        if (rt) {
          var r = Ur,
            l = zr;
          (r = (l & ~(1 << (32 - dr(l) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = di++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = cm++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    mm = {
      readContext: nr,
      useCallback: pd,
      useContext: nr,
      useEffect: ys,
      useImperativeHandle: hd,
      useInsertionEffect: cd,
      useLayoutEffect: dd,
      useMemo: md,
      useReducer: vs,
      useRef: sd,
      useState: function () {
        return vs(fi);
      },
      useDebugValue: xs,
      useDeferredValue: function (e) {
        var t = lr();
        return vd(t, gt.memoizedState, e);
      },
      useTransition: function () {
        var e = vs(fi)[0],
          t = lr().memoizedState;
        return [e, t];
      },
      useMutableSource: ed,
      useSyncExternalStore: td,
      useId: gd,
      unstable_isNewReconciler: !1,
    },
    vm = {
      readContext: nr,
      useCallback: pd,
      useContext: nr,
      useEffect: ys,
      useImperativeHandle: hd,
      useInsertionEffect: cd,
      useLayoutEffect: dd,
      useMemo: md,
      useReducer: gs,
      useRef: sd,
      useState: function () {
        return gs(fi);
      },
      useDebugValue: xs,
      useDeferredValue: function (e) {
        var t = lr();
        return gt === null ? (t.memoizedState = e) : vd(t, gt.memoizedState, e);
      },
      useTransition: function () {
        var e = gs(fi)[0],
          t = lr().memoizedState;
        return [e, t];
      },
      useMutableSource: ed,
      useSyncExternalStore: td,
      useId: gd,
      unstable_isNewReconciler: !1,
    };
  function pr(e, t) {
    if (e && e.defaultProps) {
      (t = J({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function ws(e, t, r, l) {
    (t = e.memoizedState),
      (r = r(l, t)),
      (r = r == null ? t : J({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ko = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? He(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var l = Ft(),
        a = gn(e),
        u = Br(l, a);
      (u.payload = t),
        r != null && (u.callback = r),
        (t = hn(e, u, a)),
        t !== null && (gr(t, e, a, l), mo(t, e, a));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var l = Ft(),
        a = gn(e),
        u = Br(l, a);
      (u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = hn(e, u, a)),
        t !== null && (gr(t, e, a, l), mo(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ft(),
        l = gn(e),
        a = Br(r, l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = hn(e, a, l)),
        t !== null && (gr(t, e, l, r), mo(t, e, l));
    },
  };
  function Sd(e, t, r, l, a, u, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, u, m)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Zl(r, l) || !Zl(a, u)
        : !0
    );
  }
  function Ed(e, t, r) {
    var l = !1,
      a = cn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = nr(u))
        : ((a = zt(t) ? An : Tt.current),
          (l = t.contextTypes),
          (u = (l = l != null) ? yl(e, a) : cn)),
      (t = new t(r, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ko),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function kd(e, t, r, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, l),
      t.state !== e && ko.enqueueReplaceState(t, t.state, null);
  }
  function Ss(e, t, r, l) {
    var a = e.stateNode;
    (a.props = r), (a.state = e.memoizedState), (a.refs = {}), as(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (a.context = nr(u))
      : ((u = zt(t) ? An : Tt.current), (a.context = yl(e, u))),
      (a.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (ws(e, t, u, r), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function" ||
        (typeof a.UNSAFE_componentWillMount != "function" &&
          typeof a.componentWillMount != "function") ||
        ((t = a.state),
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && ko.enqueueReplaceState(a, a.state, null),
        vo(e, r, a, l),
        (a.state = e.memoizedState)),
      typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Nl(e, t) {
    try {
      var r = "",
        l = t;
      do (r += Le(l)), (l = l.return);
      while (l);
      var a = r;
    } catch (u) {
      a =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Es(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function ks(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var gm = typeof WeakMap == "function" ? WeakMap : Map;
  function jd(e, t, r) {
    (r = Br(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var l = t.value;
    return (
      (r.callback = function () {
        Po || ((Po = !0), (Is = l)), ks(e, t);
      }),
      r
    );
  }
  function Cd(e, t, r) {
    (r = Br(-1, r)), (r.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var a = t.value;
      (r.payload = function () {
        return l(a);
      }),
        (r.callback = function () {
          ks(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          ks(e, t),
            typeof l != "function" &&
              (mn === null ? (mn = new Set([this])) : mn.add(this));
          var m = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: m !== null ? m : "",
          });
        }),
      r
    );
  }
  function Nd(e, t, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new gm();
      var a = new Set();
      l.set(t, a);
    } else (a = l.get(t)), a === void 0 && ((a = new Set()), l.set(t, a));
    a.has(r) || (a.add(r), (e = Lm.bind(null, e, t, r)), t.then(e, e));
  }
  function _d(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Td(e, t, r, l, a) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Br(-1, 1)), (t.tag = 2), hn(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var ym = pe.ReactCurrentOwner,
    Ut = !1;
  function Ot(e, t, r, l) {
    t.child = e === null ? Kc(t, null, r, l) : El(t, e.child, r, l);
  }
  function Rd(e, t, r, l, a) {
    r = r.render;
    var u = t.ref;
    return (
      jl(t, a),
      (l = ps(e, t, r, l, u, a)),
      (r = ms()),
      e !== null && !Ut
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Vr(e, t, a))
        : (rt && r && Xa(t), (t.flags |= 1), Ot(e, t, l, a), t.child)
    );
  }
  function Pd(e, t, r, l, a) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !Ws(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Ld(e, t, u, l, a))
        : ((e = Mo(r.type, null, l, t, t.mode, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !(e.lanes & a))) {
      var m = u.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Zl), r(m, l) && e.ref === t.ref)
      )
        return Vr(e, t, a);
    }
    return (
      (t.flags |= 1),
      (e = xn(u, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ld(e, t, r, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zl(u, l) && e.ref === t.ref)
        if (((Ut = !1), (t.pendingProps = l = u), (e.lanes & a) !== 0))
          e.flags & 131072 && (Ut = !0);
        else return (t.lanes = e.lanes), Vr(e, t, a);
    }
    return js(e, t, r, l, a);
  }
  function Dd(e, t, r) {
    var l = t.pendingProps,
      a = l.children,
      u = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ge(Tl, Xt),
          (Xt |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ge(Tl, Xt),
            (Xt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = u !== null ? u.baseLanes : r),
          Ge(Tl, Xt),
          (Xt |= l);
      }
    else
      u !== null ? ((l = u.baseLanes | r), (t.memoizedState = null)) : (l = r),
        Ge(Tl, Xt),
        (Xt |= l);
    return Ot(e, t, a, r), t.child;
  }
  function Od(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function js(e, t, r, l, a) {
    var u = zt(r) ? An : Tt.current;
    return (
      (u = yl(t, u)),
      jl(t, a),
      (r = ps(e, t, r, l, u, a)),
      (l = ms()),
      e !== null && !Ut
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Vr(e, t, a))
        : (rt && l && Xa(t), (t.flags |= 1), Ot(e, t, r, a), t.child)
    );
  }
  function Fd(e, t, r, l, a) {
    if (zt(r)) {
      var u = !0;
      oo(t);
    } else u = !1;
    if ((jl(t, a), t.stateNode === null))
      Co(e, t), Ed(t, r, l), Ss(t, r, l, a), (l = !0);
    else if (e === null) {
      var m = t.stateNode,
        y = t.memoizedProps;
      m.props = y;
      var E = m.context,
        A = r.contextType;
      typeof A == "object" && A !== null
        ? (A = nr(A))
        : ((A = zt(r) ? An : Tt.current), (A = yl(t, A)));
      var H = r.getDerivedStateFromProps,
        q =
          typeof H == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function";
      q ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((y !== l || E !== A) && kd(t, m, l, A)),
        (fn = !1);
      var B = t.memoizedState;
      (m.state = B),
        vo(t, l, m, a),
        (E = t.memoizedState),
        y !== l || B !== E || It.current || fn
          ? (typeof H == "function" && (ws(t, r, H, l), (E = t.memoizedState)),
            (y = fn || Sd(t, r, y, l, B, E, A))
              ? (q ||
                  (typeof m.UNSAFE_componentWillMount != "function" &&
                    typeof m.componentWillMount != "function") ||
                  (typeof m.componentWillMount == "function" &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == "function" &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof m.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = E)),
            (m.props = l),
            (m.state = E),
            (m.context = A),
            (l = y))
          : (typeof m.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (m = t.stateNode),
        Gc(e, t),
        (y = t.memoizedProps),
        (A = t.type === t.elementType ? y : pr(t.type, y)),
        (m.props = A),
        (q = t.pendingProps),
        (B = m.context),
        (E = r.contextType),
        typeof E == "object" && E !== null
          ? (E = nr(E))
          : ((E = zt(r) ? An : Tt.current), (E = yl(t, E)));
      var te = r.getDerivedStateFromProps;
      (H =
        typeof te == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function") ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((y !== q || B !== E) && kd(t, m, l, E)),
        (fn = !1),
        (B = t.memoizedState),
        (m.state = B),
        vo(t, l, m, a);
      var oe = t.memoizedState;
      y !== q || B !== oe || It.current || fn
        ? (typeof te == "function" && (ws(t, r, te, l), (oe = t.memoizedState)),
          (A = fn || Sd(t, r, A, l, B, oe, E) || !1)
            ? (H ||
                (typeof m.UNSAFE_componentWillUpdate != "function" &&
                  typeof m.componentWillUpdate != "function") ||
                (typeof m.componentWillUpdate == "function" &&
                  m.componentWillUpdate(l, oe, E),
                typeof m.UNSAFE_componentWillUpdate == "function" &&
                  m.UNSAFE_componentWillUpdate(l, oe, E)),
              typeof m.componentDidUpdate == "function" && (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof m.componentDidUpdate != "function" ||
                (y === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = oe)),
          (m.props = l),
          (m.state = oe),
          (m.context = E),
          (l = A))
        : (typeof m.componentDidUpdate != "function" ||
            (y === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return Cs(e, t, r, l, u, a);
  }
  function Cs(e, t, r, l, a, u) {
    Od(e, t);
    var m = (t.flags & 128) !== 0;
    if (!l && !m) return a && zc(t, r, !1), Vr(e, t, u);
    (l = t.stateNode), (ym.current = t);
    var y =
      m && typeof r.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && m
        ? ((t.child = El(t, e.child, null, u)), (t.child = El(t, null, y, u)))
        : Ot(e, t, y, u),
      (t.memoizedState = l.state),
      a && zc(t, r, !0),
      t.child
    );
  }
  function Ad(e) {
    var t = e.stateNode;
    t.pendingContext
      ? bc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && bc(e, t.context, !1),
      ss(e, t.containerInfo);
  }
  function Md(e, t, r, l, a) {
    return Sl(), ts(a), (t.flags |= 256), Ot(e, t, r, l), t.child;
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _s(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function bd(e, t, r) {
    var l = t.pendingProps,
      a = it.current,
      u = !1,
      m = (t.flags & 128) !== 0,
      y;
    if (
      ((y = m) ||
        (y = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
      y
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (a |= 1),
      Ge(it, a & 1),
      e === null)
    )
      return (
        es(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((m = l.children),
            (e = l.fallback),
            u
              ? ((l = t.mode),
                (u = t.child),
                (m = { mode: "hidden", children: m }),
                !(l & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = m))
                  : (u = bo(m, l, 0, null)),
                (e = Wn(e, l, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = _s(r)),
                (t.memoizedState = Ns),
                e)
              : Ts(t, m))
      );
    if (((a = e.memoizedState), a !== null && ((y = a.dehydrated), y !== null)))
      return xm(e, t, m, l, y, a, r);
    if (u) {
      (u = l.fallback), (m = t.mode), (a = e.child), (y = a.sibling);
      var E = { mode: "hidden", children: l.children };
      return (
        !(m & 1) && t.child !== a
          ? ((l = t.child),
            (l.childLanes = 0),
            (l.pendingProps = E),
            (t.deletions = null))
          : ((l = xn(a, E)), (l.subtreeFlags = a.subtreeFlags & 14680064)),
        y !== null ? (u = xn(y, u)) : ((u = Wn(u, m, r, null)), (u.flags |= 2)),
        (u.return = t),
        (l.return = t),
        (l.sibling = u),
        (t.child = l),
        (l = u),
        (u = t.child),
        (m = e.child.memoizedState),
        (m =
          m === null
            ? _s(r)
            : {
                baseLanes: m.baseLanes | r,
                cachePool: null,
                transitions: m.transitions,
              }),
        (u.memoizedState = m),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ns),
        l
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (l = xn(u, { mode: "visible", children: l.children })),
      !(t.mode & 1) && (l.lanes = r),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Ts(e, t) {
    return (
      (t = bo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function jo(e, t, r, l) {
    return (
      l !== null && ts(l),
      El(t, e.child, null, r),
      (e = Ts(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function xm(e, t, r, l, a, u, m) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (l = Es(Error(o(422)))), jo(e, t, m, l))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = l.fallback),
          (a = t.mode),
          (l = bo({ mode: "visible", children: l.children }, a, 0, null)),
          (u = Wn(u, a, m, null)),
          (u.flags |= 2),
          (l.return = t),
          (u.return = t),
          (l.sibling = u),
          (t.child = l),
          t.mode & 1 && El(t, e.child, null, m),
          (t.child.memoizedState = _s(m)),
          (t.memoizedState = Ns),
          u);
    if (!(t.mode & 1)) return jo(e, t, m, null);
    if (a.data === "$!") {
      if (((l = a.nextSibling && a.nextSibling.dataset), l)) var y = l.dgst;
      return (
        (l = y), (u = Error(o(419))), (l = Es(u, l, void 0)), jo(e, t, m, l)
      );
    }
    if (((y = (m & e.childLanes) !== 0), Ut || y)) {
      if (((l = Et), l !== null)) {
        switch (m & -m) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        (a = a & (l.suspendedLanes | m) ? 0 : a),
          a !== 0 &&
            a !== u.retryLane &&
            ((u.retryLane = a), $r(e, a), gr(l, e, a, -1));
      }
      return Hs(), (l = Es(Error(o(421)))), jo(e, t, m, l);
    }
    return a.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Dm.bind(null, e)),
        (a._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (Gt = sn(a.nextSibling)),
        (Yt = t),
        (rt = !0),
        (hr = null),
        e !== null &&
          ((tr[rr++] = zr),
          (tr[rr++] = Ur),
          (tr[rr++] = Mn),
          (zr = e.id),
          (Ur = e.overflow),
          (Mn = t)),
        (t = Ts(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Id(e, t, r) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), is(e.return, t, r);
  }
  function Rs(e, t, r, l, a) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: r,
          tailMode: a,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = l),
        (u.tail = r),
        (u.tailMode = a));
  }
  function zd(e, t, r) {
    var l = t.pendingProps,
      a = l.revealOrder,
      u = l.tail;
    if ((Ot(e, t, l.children, r), (l = it.current), l & 2))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Id(e, r, t);
          else if (e.tag === 19) Id(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((Ge(it, l), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (r = t.child, a = null; r !== null; )
            (e = r.alternate),
              e !== null && go(e) === null && (a = r),
              (r = r.sibling);
          (r = a),
            r === null
              ? ((a = t.child), (t.child = null))
              : ((a = r.sibling), (r.sibling = null)),
            Rs(t, !1, a, r, u);
          break;
        case "backwards":
          for (r = null, a = t.child, t.child = null; a !== null; ) {
            if (((e = a.alternate), e !== null && go(e) === null)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = r), (r = a), (a = e);
          }
          Rs(t, !0, r, null, u);
          break;
        case "together":
          Rs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Co(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Vr(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      ($n |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, r = xn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = xn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function wm(e, t, r) {
    switch (t.tag) {
      case 3:
        Ad(t), Sl();
        break;
      case 5:
        Zc(t);
        break;
      case 1:
        zt(t.type) && oo(t);
        break;
      case 4:
        ss(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          a = t.memoizedProps.value;
        Ge(ho, l._currentValue), (l._currentValue = a);
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ge(it, it.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? bd(e, t, r)
            : (Ge(it, it.current & 1),
              (e = Vr(e, t, r)),
              e !== null ? e.sibling : null);
        Ge(it, it.current & 1);
        break;
      case 19:
        if (((l = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (l) return zd(e, t, r);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Ge(it, it.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Dd(e, t, r);
    }
    return Vr(e, t, r);
  }
  var Ud, Ps, $d, Bd;
  (Ud = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (Ps = function () {}),
    ($d = function (e, t, r, l) {
      var a = e.memoizedProps;
      if (a !== l) {
        (e = t.stateNode), zn(Nr.current);
        var u = null;
        switch (r) {
          case "input":
            (a = Yr(e, a)), (l = Yr(e, l)), (u = []);
            break;
          case "select":
            (a = J({}, a, { value: void 0 })),
              (l = J({}, l, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (a = Y(e, a)), (l = Y(e, l)), (u = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = no);
        }
        Xr(r, l);
        var m;
        r = null;
        for (A in a)
          if (!l.hasOwnProperty(A) && a.hasOwnProperty(A) && a[A] != null)
            if (A === "style") {
              var y = a[A];
              for (m in y) y.hasOwnProperty(m) && (r || (r = {}), (r[m] = ""));
            } else
              A !== "dangerouslySetInnerHTML" &&
                A !== "children" &&
                A !== "suppressContentEditableWarning" &&
                A !== "suppressHydrationWarning" &&
                A !== "autoFocus" &&
                (d.hasOwnProperty(A)
                  ? u || (u = [])
                  : (u = u || []).push(A, null));
        for (A in l) {
          var E = l[A];
          if (
            ((y = a != null ? a[A] : void 0),
            l.hasOwnProperty(A) && E !== y && (E != null || y != null))
          )
            if (A === "style")
              if (y) {
                for (m in y)
                  !y.hasOwnProperty(m) ||
                    (E && E.hasOwnProperty(m)) ||
                    (r || (r = {}), (r[m] = ""));
                for (m in E)
                  E.hasOwnProperty(m) &&
                    y[m] !== E[m] &&
                    (r || (r = {}), (r[m] = E[m]));
              } else r || (u || (u = []), u.push(A, r)), (r = E);
            else
              A === "dangerouslySetInnerHTML"
                ? ((E = E ? E.__html : void 0),
                  (y = y ? y.__html : void 0),
                  E != null && y !== E && (u = u || []).push(A, E))
                : A === "children"
                ? (typeof E != "string" && typeof E != "number") ||
                  (u = u || []).push(A, "" + E)
                : A !== "suppressContentEditableWarning" &&
                  A !== "suppressHydrationWarning" &&
                  (d.hasOwnProperty(A)
                    ? (E != null && A === "onScroll" && Ze("scroll", e),
                      u || y === E || (u = []))
                    : (u = u || []).push(A, E));
        }
        r && (u = u || []).push("style", r);
        var A = u;
        (t.updateQueue = A) && (t.flags |= 4);
      }
    }),
    (Bd = function (e, t, r, l) {
      r !== l && (t.flags |= 4);
    });
  function pi(e, t) {
    if (!rt)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), (r = r.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Pt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags & 14680064),
          (l |= a.flags & 14680064),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; a !== null; )
        (r |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags),
          (l |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = r), t;
  }
  function Sm(e, t, r) {
    var l = t.pendingProps;
    switch ((Ja(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pt(t), null;
      case 1:
        return zt(t.type) && io(), Pt(t), null;
      case 3:
        return (
          (l = t.stateNode),
          Cl(),
          et(It),
          et(Tt),
          ds(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (co(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), hr !== null && ($s(hr), (hr = null)))),
          Ps(e, t),
          Pt(t),
          null
        );
      case 5:
        us(t);
        var a = zn(ui.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          $d(e, t, r, l, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return Pt(t), null;
          }
          if (((e = zn(Nr.current)), co(t))) {
            (l = t.stateNode), (r = t.type);
            var u = t.memoizedProps;
            switch (((l[Cr] = t), (l[li] = u), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Ze("cancel", l), Ze("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ze("load", l);
                break;
              case "video":
              case "audio":
                for (a = 0; a < ti.length; a++) Ze(ti[a], l);
                break;
              case "source":
                Ze("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Ze("error", l), Ze("load", l);
                break;
              case "details":
                Ze("toggle", l);
                break;
              case "input":
                zl(l, u), Ze("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!u.multiple }),
                  Ze("invalid", l);
                break;
              case "textarea":
                Q(l, u), Ze("invalid", l);
            }
            Xr(r, u), (a = null);
            for (var m in u)
              if (u.hasOwnProperty(m)) {
                var y = u[m];
                m === "children"
                  ? typeof y == "string"
                    ? l.textContent !== y &&
                      (u.suppressHydrationWarning !== !0 &&
                        ro(l.textContent, y, e),
                      (a = ["children", y]))
                    : typeof y == "number" &&
                      l.textContent !== "" + y &&
                      (u.suppressHydrationWarning !== !0 &&
                        ro(l.textContent, y, e),
                      (a = ["children", "" + y]))
                  : d.hasOwnProperty(m) &&
                    y != null &&
                    m === "onScroll" &&
                    Ze("scroll", l);
              }
            switch (r) {
              case "input":
                jr(l), S(l, u, !0);
                break;
              case "textarea":
                jr(l), we(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (l.onclick = no);
            }
            (l = a), (t.updateQueue = l), l !== null && (t.flags |= 4);
          } else {
            (m = a.nodeType === 9 ? a : a.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ve(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = m.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                  ? (e = m.createElement(r, { is: l.is }))
                  : ((e = m.createElement(r)),
                    r === "select" &&
                      ((m = e),
                      l.multiple
                        ? (m.multiple = !0)
                        : l.size && (m.size = l.size)))
                : (e = m.createElementNS(e, r)),
              (e[Cr] = t),
              (e[li] = l),
              Ud(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((m = il(r, l)), r)) {
                case "dialog":
                  Ze("cancel", e), Ze("close", e), (a = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ze("load", e), (a = l);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < ti.length; a++) Ze(ti[a], e);
                  a = l;
                  break;
                case "source":
                  Ze("error", e), (a = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Ze("error", e), Ze("load", e), (a = l);
                  break;
                case "details":
                  Ze("toggle", e), (a = l);
                  break;
                case "input":
                  zl(e, l), (a = Yr(e, l)), Ze("invalid", e);
                  break;
                case "option":
                  a = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (a = J({}, l, { value: void 0 })),
                    Ze("invalid", e);
                  break;
                case "textarea":
                  Q(e, l), (a = Y(e, l)), Ze("invalid", e);
                  break;
                default:
                  a = l;
              }
              Xr(r, a), (y = a);
              for (u in y)
                if (y.hasOwnProperty(u)) {
                  var E = y[u];
                  u === "style"
                    ? ll(e, E)
                    : u === "dangerouslySetInnerHTML"
                    ? ((E = E ? E.__html : void 0), E != null && rl(e, E))
                    : u === "children"
                    ? typeof E == "string"
                      ? (r !== "textarea" || E !== "") && wt(e, E)
                      : typeof E == "number" && wt(e, "" + E)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (d.hasOwnProperty(u)
                        ? E != null && u === "onScroll" && Ze("scroll", e)
                        : E != null && ee(e, u, E, m));
                }
              switch (r) {
                case "input":
                  jr(e), S(e, l, !1);
                  break;
                case "textarea":
                  jr(e), we(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + Ie(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (u = l.value),
                    u != null
                      ? X(e, !!l.multiple, u, !1)
                      : l.defaultValue != null &&
                        X(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = no);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Pt(t), null;
      case 6:
        if (e && t.stateNode != null) Bd(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (((r = zn(ui.current)), zn(Nr.current), co(t))) {
            if (
              ((l = t.stateNode),
              (r = t.memoizedProps),
              (l[Cr] = t),
              (u = l.nodeValue !== r) && ((e = Yt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ro(l.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ro(l.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (l = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(l)),
              (l[Cr] = t),
              (t.stateNode = l);
        }
        return Pt(t), null;
      case 13:
        if (
          (et(it),
          (l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (rt && Gt !== null && t.mode & 1 && !(t.flags & 128))
            Wc(), Sl(), (t.flags |= 98560), (u = !1);
          else if (((u = co(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[Cr] = t;
            } else
              Sl(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Pt(t), (u = !1);
          } else hr !== null && ($s(hr), (hr = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || it.current & 1 ? yt === 0 && (yt = 3) : Hs())),
            t.updateQueue !== null && (t.flags |= 4),
            Pt(t),
            null);
      case 4:
        return (
          Cl(),
          Ps(e, t),
          e === null && ri(t.stateNode.containerInfo),
          Pt(t),
          null
        );
      case 10:
        return ls(t.type._context), Pt(t), null;
      case 17:
        return zt(t.type) && io(), Pt(t), null;
      case 19:
        if ((et(it), (u = t.memoizedState), u === null)) return Pt(t), null;
        if (((l = (t.flags & 128) !== 0), (m = u.rendering), m === null))
          if (l) pi(u, !1);
          else {
            if (yt !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((m = go(e)), m !== null)) {
                  for (
                    t.flags |= 128,
                      pi(u, !1),
                      l = m.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = r,
                      r = t.child;
                    r !== null;

                  )
                    (u = r),
                      (e = l),
                      (u.flags &= 14680066),
                      (m = u.alternate),
                      m === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = m.childLanes),
                          (u.lanes = m.lanes),
                          (u.child = m.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = m.memoizedProps),
                          (u.memoizedState = m.memoizedState),
                          (u.updateQueue = m.updateQueue),
                          (u.type = m.type),
                          (e = m.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Ge(it, (it.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Ye() > Rl &&
              ((t.flags |= 128), (l = !0), pi(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = go(m)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                pi(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !m.alternate &&
                  !rt)
              )
                return Pt(t), null;
            } else
              2 * Ye() - u.renderingStartTime > Rl &&
                r !== 1073741824 &&
                ((t.flags |= 128), (l = !0), pi(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((m.sibling = t.child), (t.child = m))
            : ((r = u.last),
              r !== null ? (r.sibling = m) : (t.child = m),
              (u.last = m));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Ye()),
            (t.sibling = null),
            (r = it.current),
            Ge(it, l ? (r & 1) | 2 : r & 1),
            t)
          : (Pt(t), null);
      case 22:
      case 23:
        return (
          Vs(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && t.mode & 1
            ? Xt & 1073741824 &&
              (Pt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Pt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Em(e, t) {
    switch ((Ja(t), t.tag)) {
      case 1:
        return (
          zt(t.type) && io(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Cl(),
          et(It),
          et(Tt),
          ds(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return us(t), null;
      case 13:
        if (
          (et(it), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Sl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return et(it), null;
      case 4:
        return Cl(), null;
      case 10:
        return ls(t.type._context), null;
      case 22:
      case 23:
        return Vs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var No = !1,
    Lt = !1,
    km = typeof WeakSet == "function" ? WeakSet : Set,
    le = null;
  function _l(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (l) {
          ut(e, t, l);
        }
      else r.current = null;
  }
  function Ls(e, t, r) {
    try {
      r();
    } catch (l) {
      ut(e, t, l);
    }
  }
  var Vd = !1;
  function jm(e, t) {
    if (((Va = Wi), (e = Sc()), Aa(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var a = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, u.nodeType;
            } catch {
              r = null;
              break e;
            }
            var m = 0,
              y = -1,
              E = -1,
              A = 0,
              H = 0,
              q = e,
              B = null;
            t: for (;;) {
              for (
                var te;
                q !== r || (a !== 0 && q.nodeType !== 3) || (y = m + a),
                  q !== u || (l !== 0 && q.nodeType !== 3) || (E = m + l),
                  q.nodeType === 3 && (m += q.nodeValue.length),
                  (te = q.firstChild) !== null;

              )
                (B = q), (q = te);
              for (;;) {
                if (q === e) break t;
                if (
                  (B === r && ++A === a && (y = m),
                  B === u && ++H === l && (E = m),
                  (te = q.nextSibling) !== null)
                )
                  break;
                (q = B), (B = q.parentNode);
              }
              q = te;
            }
            r = y === -1 || E === -1 ? null : { start: y, end: E };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Ha = { focusedElem: e, selectionRange: r }, Wi = !1, le = t;
      le !== null;

    )
      if (
        ((t = le), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (le = e);
      else
        for (; le !== null; ) {
          t = le;
          try {
            var oe = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (oe !== null) {
                    var ce = oe.memoizedProps,
                      dt = oe.memoizedState,
                      L = t.stateNode,
                      j = L.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ce : pr(t.type, ce),
                        dt
                      );
                    L.__reactInternalSnapshotBeforeUpdate = j;
                  }
                  break;
                case 3:
                  var D = t.stateNode.containerInfo;
                  D.nodeType === 1
                    ? (D.textContent = "")
                    : D.nodeType === 9 &&
                      D.documentElement &&
                      D.removeChild(D.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (K) {
            ut(t, t.return, K);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (le = e);
            break;
          }
          le = t.return;
        }
    return (oe = Vd), (Vd = !1), oe;
  }
  function mi(e, t, r) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var a = (l = l.next);
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          (a.destroy = void 0), u !== void 0 && Ls(t, r, u);
        }
        a = a.next;
      } while (a !== l);
    }
  }
  function _o(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var l = r.create;
          r.destroy = l();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Ds(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Hd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Hd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Cr],
          delete t[li],
          delete t[Ka],
          delete t[om],
          delete t[am])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Wd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Os(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = no));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Os(e, t, r), e = e.sibling; e !== null; )
        Os(e, t, r), (e = e.sibling);
  }
  function Fs(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Fs(e, t, r), e = e.sibling; e !== null; )
        Fs(e, t, r), (e = e.sibling);
  }
  var Ct = null,
    mr = !1;
  function pn(e, t, r) {
    for (r = r.child; r !== null; ) Qd(e, t, r), (r = r.sibling);
  }
  function Qd(e, t, r) {
    if (Qt && typeof Qt.onCommitFiberUnmount == "function")
      try {
        Qt.onCommitFiberUnmount(cr, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Lt || _l(r, t);
      case 6:
        var l = Ct,
          a = mr;
        (Ct = null),
          pn(e, t, r),
          (Ct = l),
          (mr = a),
          Ct !== null &&
            (mr
              ? ((e = Ct),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : Ct.removeChild(r.stateNode));
        break;
      case 18:
        Ct !== null &&
          (mr
            ? ((e = Ct),
              (r = r.stateNode),
              e.nodeType === 8
                ? Qa(e.parentNode, r)
                : e.nodeType === 1 && Qa(e, r),
              Ql(e))
            : Qa(Ct, r.stateNode));
        break;
      case 4:
        (l = Ct),
          (a = mr),
          (Ct = r.stateNode.containerInfo),
          (mr = !0),
          pn(e, t, r),
          (Ct = l),
          (mr = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Lt &&
          ((l = r.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          a = l = l.next;
          do {
            var u = a,
              m = u.destroy;
            (u = u.tag),
              m !== void 0 && (u & 2 || u & 4) && Ls(r, t, m),
              (a = a.next);
          } while (a !== l);
        }
        pn(e, t, r);
        break;
      case 1:
        if (
          !Lt &&
          (_l(r, t),
          (l = r.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = r.memoizedProps),
              (l.state = r.memoizedState),
              l.componentWillUnmount();
          } catch (y) {
            ut(r, t, y);
          }
        pn(e, t, r);
        break;
      case 21:
        pn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((Lt = (l = Lt) || r.memoizedState !== null), pn(e, t, r), (Lt = l))
          : pn(e, t, r);
        break;
      default:
        pn(e, t, r);
    }
  }
  function Kd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new km()),
        t.forEach(function (l) {
          var a = Om.bind(null, e, l);
          r.has(l) || (r.add(l), l.then(a, a));
        });
    }
  }
  function vr(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var a = r[l];
        try {
          var u = e,
            m = t,
            y = m;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 5:
                (Ct = y.stateNode), (mr = !1);
                break e;
              case 3:
                (Ct = y.stateNode.containerInfo), (mr = !0);
                break e;
              case 4:
                (Ct = y.stateNode.containerInfo), (mr = !0);
                break e;
            }
            y = y.return;
          }
          if (Ct === null) throw Error(o(160));
          Qd(u, m, a), (Ct = null), (mr = !1);
          var E = a.alternate;
          E !== null && (E.return = null), (a.return = null);
        } catch (A) {
          ut(a, t, A);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Yd(t, e), (t = t.sibling);
  }
  function Yd(e, t) {
    var r = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vr(t, e), Tr(e), l & 4)) {
          try {
            mi(3, e, e.return), _o(3, e);
          } catch (ce) {
            ut(e, e.return, ce);
          }
          try {
            mi(5, e, e.return);
          } catch (ce) {
            ut(e, e.return, ce);
          }
        }
        break;
      case 1:
        vr(t, e), Tr(e), l & 512 && r !== null && _l(r, r.return);
        break;
      case 5:
        if (
          (vr(t, e),
          Tr(e),
          l & 512 && r !== null && _l(r, r.return),
          e.flags & 32)
        ) {
          var a = e.stateNode;
          try {
            wt(a, "");
          } catch (ce) {
            ut(e, e.return, ce);
          }
        }
        if (l & 4 && ((a = e.stateNode), a != null)) {
          var u = e.memoizedProps,
            m = r !== null ? r.memoizedProps : u,
            y = e.type,
            E = e.updateQueue;
          if (((e.updateQueue = null), E !== null))
            try {
              y === "input" && u.type === "radio" && u.name != null && el(a, u),
                il(y, m);
              var A = il(y, u);
              for (m = 0; m < E.length; m += 2) {
                var H = E[m],
                  q = E[m + 1];
                H === "style"
                  ? ll(a, q)
                  : H === "dangerouslySetInnerHTML"
                  ? rl(a, q)
                  : H === "children"
                  ? wt(a, q)
                  : ee(a, H, q, A);
              }
              switch (y) {
                case "input":
                  tl(a, u);
                  break;
                case "textarea":
                  me(a, u);
                  break;
                case "select":
                  var B = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!u.multiple;
                  var te = u.value;
                  te != null
                    ? X(a, !!u.multiple, te, !1)
                    : B !== !!u.multiple &&
                      (u.defaultValue != null
                        ? X(a, !!u.multiple, u.defaultValue, !0)
                        : X(a, !!u.multiple, u.multiple ? [] : "", !1));
              }
              a[li] = u;
            } catch (ce) {
              ut(e, e.return, ce);
            }
        }
        break;
      case 6:
        if ((vr(t, e), Tr(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (a = e.stateNode), (u = e.memoizedProps);
          try {
            a.nodeValue = u;
          } catch (ce) {
            ut(e, e.return, ce);
          }
        }
        break;
      case 3:
        if (
          (vr(t, e), Tr(e), l & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Ql(t.containerInfo);
          } catch (ce) {
            ut(e, e.return, ce);
          }
        break;
      case 4:
        vr(t, e), Tr(e);
        break;
      case 13:
        vr(t, e),
          Tr(e),
          (a = e.child),
          a.flags & 8192 &&
            ((u = a.memoizedState !== null),
            (a.stateNode.isHidden = u),
            !u ||
              (a.alternate !== null && a.alternate.memoizedState !== null) ||
              (bs = Ye())),
          l & 4 && Kd(e);
        break;
      case 22:
        if (
          ((H = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Lt = (A = Lt) || H), vr(t, e), (Lt = A)) : vr(t, e),
          Tr(e),
          l & 8192)
        ) {
          if (
            ((A = e.memoizedState !== null),
            (e.stateNode.isHidden = A) && !H && e.mode & 1)
          )
            for (le = e, H = e.child; H !== null; ) {
              for (q = le = H; le !== null; ) {
                switch (((B = le), (te = B.child), B.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mi(4, B, B.return);
                    break;
                  case 1:
                    _l(B, B.return);
                    var oe = B.stateNode;
                    if (typeof oe.componentWillUnmount == "function") {
                      (l = B), (r = B.return);
                      try {
                        (t = l),
                          (oe.props = t.memoizedProps),
                          (oe.state = t.memoizedState),
                          oe.componentWillUnmount();
                      } catch (ce) {
                        ut(l, r, ce);
                      }
                    }
                    break;
                  case 5:
                    _l(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      Jd(q);
                      continue;
                    }
                }
                te !== null ? ((te.return = B), (le = te)) : Jd(q);
              }
              H = H.sibling;
            }
          e: for (H = null, q = e; ; ) {
            if (q.tag === 5) {
              if (H === null) {
                H = q;
                try {
                  (a = q.stateNode),
                    A
                      ? ((u = a.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((y = q.stateNode),
                        (E = q.memoizedProps.style),
                        (m =
                          E != null && E.hasOwnProperty("display")
                            ? E.display
                            : null),
                        (y.style.display = Gr("display", m)));
                } catch (ce) {
                  ut(e, e.return, ce);
                }
              }
            } else if (q.tag === 6) {
              if (H === null)
                try {
                  q.stateNode.nodeValue = A ? "" : q.memoizedProps;
                } catch (ce) {
                  ut(e, e.return, ce);
                }
            } else if (
              ((q.tag !== 22 && q.tag !== 23) ||
                q.memoizedState === null ||
                q === e) &&
              q.child !== null
            ) {
              (q.child.return = q), (q = q.child);
              continue;
            }
            if (q === e) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === e) break e;
              H === q && (H = null), (q = q.return);
            }
            H === q && (H = null),
              (q.sibling.return = q.return),
              (q = q.sibling);
          }
        }
        break;
      case 19:
        vr(t, e), Tr(e), l & 4 && Kd(e);
        break;
      case 21:
        break;
      default:
        vr(t, e), Tr(e);
    }
  }
  function Tr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Wd(r)) {
              var l = r;
              break e;
            }
            r = r.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var a = l.stateNode;
            l.flags & 32 && (wt(a, ""), (l.flags &= -33));
            var u = qd(e);
            Fs(e, u, a);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              y = qd(e);
            Os(e, y, m);
            break;
          default:
            throw Error(o(161));
        }
      } catch (E) {
        ut(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Cm(e, t, r) {
    (le = e), Gd(e);
  }
  function Gd(e, t, r) {
    for (var l = (e.mode & 1) !== 0; le !== null; ) {
      var a = le,
        u = a.child;
      if (a.tag === 22 && l) {
        var m = a.memoizedState !== null || No;
        if (!m) {
          var y = a.alternate,
            E = (y !== null && y.memoizedState !== null) || Lt;
          y = No;
          var A = Lt;
          if (((No = m), (Lt = E) && !A))
            for (le = a; le !== null; )
              (m = le),
                (E = m.child),
                m.tag === 22 && m.memoizedState !== null
                  ? Zd(a)
                  : E !== null
                  ? ((E.return = m), (le = E))
                  : Zd(a);
          for (; u !== null; ) (le = u), Gd(u), (u = u.sibling);
          (le = a), (No = y), (Lt = A);
        }
        Xd(e);
      } else
        a.subtreeFlags & 8772 && u !== null
          ? ((u.return = a), (le = u))
          : Xd(e);
    }
  }
  function Xd(e) {
    for (; le !== null; ) {
      var t = le;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Lt || _o(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !Lt)
                  if (r === null) l.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : pr(t.type, r.memoizedProps);
                    l.componentDidUpdate(
                      a,
                      r.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && Jc(t, u, l);
                break;
              case 3:
                var m = t.updateQueue;
                if (m !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Jc(t, m, r);
                }
                break;
              case 5:
                var y = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = y;
                  var E = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      E.autoFocus && r.focus();
                      break;
                    case "img":
                      E.src && (r.src = E.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var A = t.alternate;
                  if (A !== null) {
                    var H = A.memoizedState;
                    if (H !== null) {
                      var q = H.dehydrated;
                      q !== null && Ql(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          Lt || (t.flags & 512 && Ds(t));
        } catch (B) {
          ut(t, t.return, B);
        }
      }
      if (t === e) {
        le = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (le = r);
        break;
      }
      le = t.return;
    }
  }
  function Jd(e) {
    for (; le !== null; ) {
      var t = le;
      if (t === e) {
        le = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (le = r);
        break;
      }
      le = t.return;
    }
  }
  function Zd(e) {
    for (; le !== null; ) {
      var t = le;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              _o(4, t);
            } catch (E) {
              ut(t, r, E);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var a = t.return;
              try {
                l.componentDidMount();
              } catch (E) {
                ut(t, a, E);
              }
            }
            var u = t.return;
            try {
              Ds(t);
            } catch (E) {
              ut(t, u, E);
            }
            break;
          case 5:
            var m = t.return;
            try {
              Ds(t);
            } catch (E) {
              ut(t, m, E);
            }
        }
      } catch (E) {
        ut(t, t.return, E);
      }
      if (t === e) {
        le = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        (y.return = t.return), (le = y);
        break;
      }
      le = t.return;
    }
  }
  var Nm = Math.ceil,
    To = pe.ReactCurrentDispatcher,
    As = pe.ReactCurrentOwner,
    ir = pe.ReactCurrentBatchConfig,
    ze = 0,
    Et = null,
    pt = null,
    Nt = 0,
    Xt = 0,
    Tl = un(0),
    yt = 0,
    vi = null,
    $n = 0,
    Ro = 0,
    Ms = 0,
    gi = null,
    $t = null,
    bs = 0,
    Rl = 1 / 0,
    Hr = null,
    Po = !1,
    Is = null,
    mn = null,
    Lo = !1,
    vn = null,
    Do = 0,
    yi = 0,
    zs = null,
    Oo = -1,
    Fo = 0;
  function Ft() {
    return ze & 6 ? Ye() : Oo !== -1 ? Oo : (Oo = Ye());
  }
  function gn(e) {
    return e.mode & 1
      ? ze & 2 && Nt !== 0
        ? Nt & -Nt
        : um.transition !== null
        ? (Fo === 0 && (Fo = qu()), Fo)
        : ((e = qe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tc(e.type))),
          e)
      : 1;
  }
  function gr(e, t, r, l) {
    if (50 < yi) throw ((yi = 0), (zs = null), Error(o(185)));
    Bl(e, r, l),
      (!(ze & 2) || e !== Et) &&
        (e === Et && (!(ze & 2) && (Ro |= r), yt === 4 && yn(e, Nt)),
        Bt(e, l),
        r === 1 &&
          ze === 0 &&
          !(t.mode & 1) &&
          ((Rl = Ye() + 500), ao && dn()));
  }
  function Bt(e, t) {
    var r = e.callbackNode;
    up(e, t);
    var l = Bi(e, e === Et ? Nt : 0);
    if (l === 0)
      r !== null && al(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((r != null && al(r), t === 1))
        e.tag === 0 ? sm(tf.bind(null, e)) : Uc(tf.bind(null, e)),
          lm(function () {
            !(ze & 6) && dn();
          }),
          (r = null);
      else {
        switch (Qu(l)) {
          case 1:
            r = We;
            break;
          case 4:
            r = vt;
            break;
          case 16:
            r = Mr;
            break;
          case 536870912:
            r = lt;
            break;
          default:
            r = Mr;
        }
        r = cf(r, ef.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function ef(e, t) {
    if (((Oo = -1), (Fo = 0), ze & 6)) throw Error(o(327));
    var r = e.callbackNode;
    if (Pl() && e.callbackNode !== r) return null;
    var l = Bi(e, e === Et ? Nt : 0);
    if (l === 0) return null;
    if (l & 30 || l & e.expiredLanes || t) t = Ao(e, l);
    else {
      t = l;
      var a = ze;
      ze |= 2;
      var u = nf();
      (Et !== e || Nt !== t) && ((Hr = null), (Rl = Ye() + 500), Vn(e, t));
      do
        try {
          Rm();
          break;
        } catch (y) {
          rf(e, y);
        }
      while (!0);
      ns(),
        (To.current = u),
        (ze = a),
        pt !== null ? (t = 0) : ((Et = null), (Nt = 0), (t = yt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((a = xa(e)), a !== 0 && ((l = a), (t = Us(e, a)))),
        t === 1)
      )
        throw ((r = vi), Vn(e, 0), yn(e, l), Bt(e, Ye()), r);
      if (t === 6) yn(e, l);
      else {
        if (
          ((a = e.current.alternate),
          !(l & 30) &&
            !_m(a) &&
            ((t = Ao(e, l)),
            t === 2 && ((u = xa(e)), u !== 0 && ((l = u), (t = Us(e, u)))),
            t === 1))
        )
          throw ((r = vi), Vn(e, 0), yn(e, l), Bt(e, Ye()), r);
        switch (((e.finishedWork = a), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Hn(e, $t, Hr);
            break;
          case 3:
            if (
              (yn(e, l),
              (l & 130023424) === l && ((t = bs + 500 - Ye()), 10 < t))
            ) {
              if (Bi(e, 0) !== 0) break;
              if (((a = e.suspendedLanes), (a & l) !== l)) {
                Ft(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = qa(Hn.bind(null, e, $t, Hr), t);
              break;
            }
            Hn(e, $t, Hr);
            break;
          case 4:
            if ((yn(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, a = -1; 0 < l; ) {
              var m = 31 - dr(l);
              (u = 1 << m), (m = t[m]), m > a && (a = m), (l &= ~u);
            }
            if (
              ((l = a),
              (l = Ye() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * Nm(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = qa(Hn.bind(null, e, $t, Hr), l);
              break;
            }
            Hn(e, $t, Hr);
            break;
          case 5:
            Hn(e, $t, Hr);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Bt(e, Ye()), e.callbackNode === r ? ef.bind(null, e) : null;
  }
  function Us(e, t) {
    var r = gi;
    return (
      e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
      (e = Ao(e, t)),
      e !== 2 && ((t = $t), ($t = r), t !== null && $s(t)),
      e
    );
  }
  function $s(e) {
    $t === null ? ($t = e) : $t.push.apply($t, e);
  }
  function _m(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var l = 0; l < r.length; l++) {
            var a = r[l],
              u = a.getSnapshot;
            a = a.value;
            try {
              if (!fr(u(), a)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function yn(e, t) {
    for (
      t &= ~Ms,
        t &= ~Ro,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - dr(t),
        l = 1 << r;
      (e[r] = -1), (t &= ~l);
    }
  }
  function tf(e) {
    if (ze & 6) throw Error(o(327));
    Pl();
    var t = Bi(e, 0);
    if (!(t & 1)) return Bt(e, Ye()), null;
    var r = Ao(e, t);
    if (e.tag !== 0 && r === 2) {
      var l = xa(e);
      l !== 0 && ((t = l), (r = Us(e, l)));
    }
    if (r === 1) throw ((r = vi), Vn(e, 0), yn(e, t), Bt(e, Ye()), r);
    if (r === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Hn(e, $t, Hr),
      Bt(e, Ye()),
      null
    );
  }
  function Bs(e, t) {
    var r = ze;
    ze |= 1;
    try {
      return e(t);
    } finally {
      (ze = r), ze === 0 && ((Rl = Ye() + 500), ao && dn());
    }
  }
  function Bn(e) {
    vn !== null && vn.tag === 0 && !(ze & 6) && Pl();
    var t = ze;
    ze |= 1;
    var r = ir.transition,
      l = qe;
    try {
      if (((ir.transition = null), (qe = 1), e)) return e();
    } finally {
      (qe = l), (ir.transition = r), (ze = t), !(ze & 6) && dn();
    }
  }
  function Vs() {
    (Xt = Tl.current), et(Tl);
  }
  function Vn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), nm(r)), pt !== null))
      for (r = pt.return; r !== null; ) {
        var l = r;
        switch ((Ja(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && io();
            break;
          case 3:
            Cl(), et(It), et(Tt), ds();
            break;
          case 5:
            us(l);
            break;
          case 4:
            Cl();
            break;
          case 13:
            et(it);
            break;
          case 19:
            et(it);
            break;
          case 10:
            ls(l.type._context);
            break;
          case 22:
          case 23:
            Vs();
        }
        r = r.return;
      }
    if (
      ((Et = e),
      (pt = e = xn(e.current, null)),
      (Nt = Xt = t),
      (yt = 0),
      (vi = null),
      (Ms = Ro = $n = 0),
      ($t = gi = null),
      In !== null)
    ) {
      for (t = 0; t < In.length; t++)
        if (((r = In[t]), (l = r.interleaved), l !== null)) {
          r.interleaved = null;
          var a = l.next,
            u = r.pending;
          if (u !== null) {
            var m = u.next;
            (u.next = a), (l.next = m);
          }
          r.pending = l;
        }
      In = null;
    }
    return e;
  }
  function rf(e, t) {
    do {
      var r = pt;
      try {
        if ((ns(), (yo.current = Eo), xo)) {
          for (var l = ot.memoizedState; l !== null; ) {
            var a = l.queue;
            a !== null && (a.pending = null), (l = l.next);
          }
          xo = !1;
        }
        if (
          ((Un = 0),
          (St = gt = ot = null),
          (ci = !1),
          (di = 0),
          (As.current = null),
          r === null || r.return === null)
        ) {
          (yt = 1), (vi = t), (pt = null);
          break;
        }
        e: {
          var u = e,
            m = r.return,
            y = r,
            E = t;
          if (
            ((t = Nt),
            (y.flags |= 32768),
            E !== null && typeof E == "object" && typeof E.then == "function")
          ) {
            var A = E,
              H = y,
              q = H.tag;
            if (!(H.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var B = H.alternate;
              B
                ? ((H.updateQueue = B.updateQueue),
                  (H.memoizedState = B.memoizedState),
                  (H.lanes = B.lanes))
                : ((H.updateQueue = null), (H.memoizedState = null));
            }
            var te = _d(m);
            if (te !== null) {
              (te.flags &= -257),
                Td(te, m, y, u, t),
                te.mode & 1 && Nd(u, A, t),
                (t = te),
                (E = A);
              var oe = t.updateQueue;
              if (oe === null) {
                var ce = new Set();
                ce.add(E), (t.updateQueue = ce);
              } else oe.add(E);
              break e;
            } else {
              if (!(t & 1)) {
                Nd(u, A, t), Hs();
                break e;
              }
              E = Error(o(426));
            }
          } else if (rt && y.mode & 1) {
            var dt = _d(m);
            if (dt !== null) {
              !(dt.flags & 65536) && (dt.flags |= 256),
                Td(dt, m, y, u, t),
                ts(Nl(E, y));
              break e;
            }
          }
          (u = E = Nl(E, y)),
            yt !== 4 && (yt = 2),
            gi === null ? (gi = [u]) : gi.push(u),
            (u = m);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var L = jd(u, E, t);
                Xc(u, L);
                break e;
              case 1:
                y = E;
                var j = u.type,
                  D = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof j.getDerivedStateFromError == "function" ||
                    (D !== null &&
                      typeof D.componentDidCatch == "function" &&
                      (mn === null || !mn.has(D))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var K = Cd(u, y, t);
                  Xc(u, K);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        of(r);
      } catch (he) {
        (t = he), pt === r && r !== null && (pt = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nf() {
    var e = To.current;
    return (To.current = Eo), e === null ? Eo : e;
  }
  function Hs() {
    (yt === 0 || yt === 3 || yt === 2) && (yt = 4),
      Et === null || (!($n & 268435455) && !(Ro & 268435455)) || yn(Et, Nt);
  }
  function Ao(e, t) {
    var r = ze;
    ze |= 2;
    var l = nf();
    (Et !== e || Nt !== t) && ((Hr = null), Vn(e, t));
    do
      try {
        Tm();
        break;
      } catch (a) {
        rf(e, a);
      }
    while (!0);
    if ((ns(), (ze = r), (To.current = l), pt !== null)) throw Error(o(261));
    return (Et = null), (Nt = 0), yt;
  }
  function Tm() {
    for (; pt !== null; ) lf(pt);
  }
  function Rm() {
    for (; pt !== null && !Dn(); ) lf(pt);
  }
  function lf(e) {
    var t = uf(e.alternate, e, Xt);
    (e.memoizedProps = e.pendingProps),
      t === null ? of(e) : (pt = t),
      (As.current = null);
  }
  function of(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = Em(r, t)), r !== null)) {
          (r.flags &= 32767), (pt = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (yt = 6), (pt = null);
          return;
        }
      } else if (((r = Sm(r, t, Xt)), r !== null)) {
        pt = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        pt = t;
        return;
      }
      pt = t = e;
    } while (t !== null);
    yt === 0 && (yt = 5);
  }
  function Hn(e, t, r) {
    var l = qe,
      a = ir.transition;
    try {
      (ir.transition = null), (qe = 1), Pm(e, t, r, l);
    } finally {
      (ir.transition = a), (qe = l);
    }
    return null;
  }
  function Pm(e, t, r, l) {
    do Pl();
    while (vn !== null);
    if (ze & 6) throw Error(o(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = r.lanes | r.childLanes;
    if (
      (cp(e, u),
      e === Et && ((pt = Et = null), (Nt = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        Lo ||
        ((Lo = !0),
        cf(Mr, function () {
          return Pl(), null;
        })),
      (u = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || u)
    ) {
      (u = ir.transition), (ir.transition = null);
      var m = qe;
      qe = 1;
      var y = ze;
      (ze |= 4),
        (As.current = null),
        jm(e, r),
        Yd(r, e),
        Gp(Ha),
        (Wi = !!Va),
        (Ha = Va = null),
        (e.current = r),
        Cm(r),
        Ar(),
        (ze = y),
        (qe = m),
        (ir.transition = u);
    } else e.current = r;
    if (
      (Lo && ((Lo = !1), (vn = e), (Do = a)),
      (u = e.pendingLanes),
      u === 0 && (mn = null),
      ya(r.stateNode),
      Bt(e, Ye()),
      t !== null)
    )
      for (l = e.onRecoverableError, r = 0; r < t.length; r++)
        (a = t[r]), l(a.value, { componentStack: a.stack, digest: a.digest });
    if (Po) throw ((Po = !1), (e = Is), (Is = null), e);
    return (
      Do & 1 && e.tag !== 0 && Pl(),
      (u = e.pendingLanes),
      u & 1 ? (e === zs ? yi++ : ((yi = 0), (zs = e))) : (yi = 0),
      dn(),
      null
    );
  }
  function Pl() {
    if (vn !== null) {
      var e = Qu(Do),
        t = ir.transition,
        r = qe;
      try {
        if (((ir.transition = null), (qe = 16 > e ? 16 : e), vn === null))
          var l = !1;
        else {
          if (((e = vn), (vn = null), (Do = 0), ze & 6)) throw Error(o(331));
          var a = ze;
          for (ze |= 4, le = e.current; le !== null; ) {
            var u = le,
              m = u.child;
            if (le.flags & 16) {
              var y = u.deletions;
              if (y !== null) {
                for (var E = 0; E < y.length; E++) {
                  var A = y[E];
                  for (le = A; le !== null; ) {
                    var H = le;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mi(8, H, u);
                    }
                    var q = H.child;
                    if (q !== null) (q.return = H), (le = q);
                    else
                      for (; le !== null; ) {
                        H = le;
                        var B = H.sibling,
                          te = H.return;
                        if ((Hd(H), H === A)) {
                          le = null;
                          break;
                        }
                        if (B !== null) {
                          (B.return = te), (le = B);
                          break;
                        }
                        le = te;
                      }
                  }
                }
                var oe = u.alternate;
                if (oe !== null) {
                  var ce = oe.child;
                  if (ce !== null) {
                    oe.child = null;
                    do {
                      var dt = ce.sibling;
                      (ce.sibling = null), (ce = dt);
                    } while (ce !== null);
                  }
                }
                le = u;
              }
            }
            if (u.subtreeFlags & 2064 && m !== null) (m.return = u), (le = m);
            else
              e: for (; le !== null; ) {
                if (((u = le), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mi(9, u, u.return);
                  }
                var L = u.sibling;
                if (L !== null) {
                  (L.return = u.return), (le = L);
                  break e;
                }
                le = u.return;
              }
          }
          var j = e.current;
          for (le = j; le !== null; ) {
            m = le;
            var D = m.child;
            if (m.subtreeFlags & 2064 && D !== null) (D.return = m), (le = D);
            else
              e: for (m = j; le !== null; ) {
                if (((y = le), y.flags & 2048))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(9, y);
                    }
                  } catch (he) {
                    ut(y, y.return, he);
                  }
                if (y === m) {
                  le = null;
                  break e;
                }
                var K = y.sibling;
                if (K !== null) {
                  (K.return = y.return), (le = K);
                  break e;
                }
                le = y.return;
              }
          }
          if (
            ((ze = a),
            dn(),
            Qt && typeof Qt.onPostCommitFiberRoot == "function")
          )
            try {
              Qt.onPostCommitFiberRoot(cr, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (qe = r), (ir.transition = t);
      }
    }
    return !1;
  }
  function af(e, t, r) {
    (t = Nl(r, t)),
      (t = jd(e, t, 1)),
      (e = hn(e, t, 1)),
      (t = Ft()),
      e !== null && (Bl(e, 1, t), Bt(e, t));
  }
  function ut(e, t, r) {
    if (e.tag === 3) af(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          af(t, e, r);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (mn === null || !mn.has(l)))
          ) {
            (e = Nl(r, e)),
              (e = Cd(t, e, 1)),
              (t = hn(t, e, 1)),
              (e = Ft()),
              t !== null && (Bl(t, 1, e), Bt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Lm(e, t, r) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (t = Ft()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Et === e &&
        (Nt & r) === r &&
        (yt === 4 || (yt === 3 && (Nt & 130023424) === Nt && 500 > Ye() - bs)
          ? Vn(e, 0)
          : (Ms |= r)),
      Bt(e, t);
  }
  function sf(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = $i), ($i <<= 1), !($i & 130023424) && ($i = 4194304))
        : (t = 1));
    var r = Ft();
    (e = $r(e, t)), e !== null && (Bl(e, t, r), Bt(e, r));
  }
  function Dm(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), sf(e, r);
  }
  function Om(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), sf(e, r);
  }
  var uf;
  uf = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || It.current) Ut = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (Ut = !1), wm(e, t, r);
        Ut = !!(e.flags & 131072);
      }
    else (Ut = !1), rt && t.flags & 1048576 && $c(t, uo, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        Co(e, t), (e = t.pendingProps);
        var a = yl(t, Tt.current);
        jl(t, r), (a = ps(null, t, l, e, a, r));
        var u = ms();
        return (
          (t.flags |= 1),
          typeof a == "object" &&
          a !== null &&
          typeof a.render == "function" &&
          a.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              zt(l) ? ((u = !0), oo(t)) : (u = !1),
              (t.memoizedState =
                a.state !== null && a.state !== void 0 ? a.state : null),
              as(t),
              (a.updater = ko),
              (t.stateNode = a),
              (a._reactInternals = t),
              Ss(t, l, e, r),
              (t = Cs(null, t, l, !0, u, r)))
            : ((t.tag = 0), rt && u && Xa(t), Ot(null, t, a, r), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (Co(e, t),
            (e = t.pendingProps),
            (a = l._init),
            (l = a(l._payload)),
            (t.type = l),
            (a = t.tag = Am(l)),
            (e = pr(l, e)),
            a)
          ) {
            case 0:
              t = js(null, t, l, e, r);
              break e;
            case 1:
              t = Fd(null, t, l, e, r);
              break e;
            case 11:
              t = Rd(null, t, l, e, r);
              break e;
            case 14:
              t = Pd(null, t, l, pr(l.type, e), r);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : pr(l, a)),
          js(e, t, l, a, r)
        );
      case 1:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : pr(l, a)),
          Fd(e, t, l, a, r)
        );
      case 3:
        e: {
          if ((Ad(t), e === null)) throw Error(o(387));
          (l = t.pendingProps),
            (u = t.memoizedState),
            (a = u.element),
            Gc(e, t),
            vo(t, l, null, r);
          var m = t.memoizedState;
          if (((l = m.element), u.isDehydrated))
            if (
              ((u = {
                element: l,
                isDehydrated: !1,
                cache: m.cache,
                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                transitions: m.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (a = Nl(Error(o(423)), t)), (t = Md(e, t, l, r, a));
              break e;
            } else if (l !== a) {
              (a = Nl(Error(o(424)), t)), (t = Md(e, t, l, r, a));
              break e;
            } else
              for (
                Gt = sn(t.stateNode.containerInfo.firstChild),
                  Yt = t,
                  rt = !0,
                  hr = null,
                  r = Kc(t, null, l, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Sl(), l === a)) {
              t = Vr(e, t, r);
              break e;
            }
            Ot(e, t, l, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Zc(t),
          e === null && es(t),
          (l = t.type),
          (a = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (m = a.children),
          Wa(l, a) ? (m = null) : u !== null && Wa(l, u) && (t.flags |= 32),
          Od(e, t),
          Ot(e, t, m, r),
          t.child
        );
      case 6:
        return e === null && es(t), null;
      case 13:
        return bd(e, t, r);
      case 4:
        return (
          ss(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = El(t, null, l, r)) : Ot(e, t, l, r),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : pr(l, a)),
          Rd(e, t, l, a, r)
        );
      case 7:
        return Ot(e, t, t.pendingProps, r), t.child;
      case 8:
        return Ot(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Ot(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (a = t.pendingProps),
            (u = t.memoizedProps),
            (m = a.value),
            Ge(ho, l._currentValue),
            (l._currentValue = m),
            u !== null)
          )
            if (fr(u.value, m)) {
              if (u.children === a.children && !It.current) {
                t = Vr(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var y = u.dependencies;
                if (y !== null) {
                  m = u.child;
                  for (var E = y.firstContext; E !== null; ) {
                    if (E.context === l) {
                      if (u.tag === 1) {
                        (E = Br(-1, r & -r)), (E.tag = 2);
                        var A = u.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var H = A.pending;
                          H === null
                            ? (E.next = E)
                            : ((E.next = H.next), (H.next = E)),
                            (A.pending = E);
                        }
                      }
                      (u.lanes |= r),
                        (E = u.alternate),
                        E !== null && (E.lanes |= r),
                        is(u.return, r, t),
                        (y.lanes |= r);
                      break;
                    }
                    E = E.next;
                  }
                } else if (u.tag === 10) m = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((m = u.return), m === null)) throw Error(o(341));
                  (m.lanes |= r),
                    (y = m.alternate),
                    y !== null && (y.lanes |= r),
                    is(m, r, t),
                    (m = u.sibling);
                } else m = u.child;
                if (m !== null) m.return = u;
                else
                  for (m = u; m !== null; ) {
                    if (m === t) {
                      m = null;
                      break;
                    }
                    if (((u = m.sibling), u !== null)) {
                      (u.return = m.return), (m = u);
                      break;
                    }
                    m = m.return;
                  }
                u = m;
              }
          Ot(e, t, a.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (l = t.pendingProps.children),
          jl(t, r),
          (a = nr(a)),
          (l = l(a)),
          (t.flags |= 1),
          Ot(e, t, l, r),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (a = pr(l, t.pendingProps)),
          (a = pr(l.type, a)),
          Pd(e, t, l, a, r)
        );
      case 15:
        return Ld(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (a = t.elementType === l ? a : pr(l, a)),
          Co(e, t),
          (t.tag = 1),
          zt(l) ? ((e = !0), oo(t)) : (e = !1),
          jl(t, r),
          Ed(t, l, a),
          Ss(t, l, a, r),
          Cs(null, t, l, !0, e, r)
        );
      case 19:
        return zd(e, t, r);
      case 22:
        return Dd(e, t, r);
    }
    throw Error(o(156, t.tag));
  };
  function cf(e, t) {
    return qt(e, t);
  }
  function Fm(e, t, r, l) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function or(e, t, r, l) {
    return new Fm(e, t, r, l);
  }
  function Ws(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Am(e) {
    if (typeof e == "function") return Ws(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ve)) return 11;
      if (e === _e) return 14;
    }
    return 2;
  }
  function xn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = or(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Mo(e, t, r, l, a, u) {
    var m = 2;
    if (((l = e), typeof e == "function")) Ws(e) && (m = 1);
    else if (typeof e == "string") m = 5;
    else
      e: switch (e) {
        case Ee:
          return Wn(r.children, a, u, t);
        case de:
          (m = 8), (a |= 8);
          break;
        case Ne:
          return (
            (e = or(12, r, t, a | 2)), (e.elementType = Ne), (e.lanes = u), e
          );
        case ge:
          return (e = or(13, r, t, a)), (e.elementType = ge), (e.lanes = u), e;
        case Me:
          return (e = or(19, r, t, a)), (e.elementType = Me), (e.lanes = u), e;
        case De:
          return bo(r, a, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Re:
                m = 10;
                break e;
              case Xe:
                m = 9;
                break e;
              case ve:
                m = 11;
                break e;
              case _e:
                m = 14;
                break e;
              case $e:
                (m = 16), (l = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = or(m, r, t, a)), (t.elementType = e), (t.type = l), (t.lanes = u), t
    );
  }
  function Wn(e, t, r, l) {
    return (e = or(7, e, l, t)), (e.lanes = r), e;
  }
  function bo(e, t, r, l) {
    return (
      (e = or(22, e, l, t)),
      (e.elementType = De),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function qs(e, t, r) {
    return (e = or(6, e, null, t)), (e.lanes = r), e;
  }
  function Qs(e, t, r) {
    return (
      (t = or(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Mm(e, t, r, l, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = wa(0)),
      (this.expirationTimes = wa(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wa(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ks(e, t, r, l, a, u, m, y, E) {
    return (
      (e = new Mm(e, t, r, y, E)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = or(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: l,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      as(u),
      e
    );
  }
  function bm(e, t, r) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ue,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function df(e) {
    if (!e) return cn;
    e = e._reactInternals;
    e: {
      if (He(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (zt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (zt(r)) return Ic(e, r, t);
    }
    return t;
  }
  function ff(e, t, r, l, a, u, m, y, E) {
    return (
      (e = Ks(r, l, !0, e, a, u, m, y, E)),
      (e.context = df(null)),
      (r = e.current),
      (l = Ft()),
      (a = gn(r)),
      (u = Br(l, a)),
      (u.callback = t ?? null),
      hn(r, u, a),
      (e.current.lanes = a),
      Bl(e, a, l),
      Bt(e, l),
      e
    );
  }
  function Io(e, t, r, l) {
    var a = t.current,
      u = Ft(),
      m = gn(a);
    return (
      (r = df(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Br(u, m)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = hn(a, t, m)),
      e !== null && (gr(e, a, m, u), mo(e, a, m)),
      m
    );
  }
  function zo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function hf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Ys(e, t) {
    hf(e, t), (e = e.alternate) && hf(e, t);
  }
  function Im() {
    return null;
  }
  var pf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Gs(e) {
    this._internalRoot = e;
  }
  (Uo.prototype.render = Gs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Io(e, t, null, null);
    }),
    (Uo.prototype.unmount = Gs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Bn(function () {
            Io(null, e, null, null);
          }),
            (t[br] = null);
        }
      });
  function Uo(e) {
    this._internalRoot = e;
  }
  Uo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < ln.length && t !== 0 && t < ln[r].priority; r++);
      ln.splice(r, 0, e), r === 0 && Zu(e);
    }
  };
  function Xs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function $o(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function mf() {}
  function zm(e, t, r, l, a) {
    if (a) {
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var A = zo(m);
          u.call(A);
        };
      }
      var m = ff(t, l, e, 0, null, !1, !1, "", mf);
      return (
        (e._reactRootContainer = m),
        (e[br] = m.current),
        ri(e.nodeType === 8 ? e.parentNode : e),
        Bn(),
        m
      );
    }
    for (; (a = e.lastChild); ) e.removeChild(a);
    if (typeof l == "function") {
      var y = l;
      l = function () {
        var A = zo(E);
        y.call(A);
      };
    }
    var E = Ks(e, 0, !1, null, null, !1, !1, "", mf);
    return (
      (e._reactRootContainer = E),
      (e[br] = E.current),
      ri(e.nodeType === 8 ? e.parentNode : e),
      Bn(function () {
        Io(t, E, r, l);
      }),
      E
    );
  }
  function Bo(e, t, r, l, a) {
    var u = r._reactRootContainer;
    if (u) {
      var m = u;
      if (typeof a == "function") {
        var y = a;
        a = function () {
          var E = zo(m);
          y.call(E);
        };
      }
      Io(t, m, e, a);
    } else m = zm(r, t, e, a, l);
    return zo(m);
  }
  (Ku = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = $l(t.pendingLanes);
          r !== 0 &&
            (Sa(t, r | 1), Bt(t, Ye()), !(ze & 6) && ((Rl = Ye() + 500), dn()));
        }
        break;
      case 13:
        Bn(function () {
          var l = $r(e, 1);
          if (l !== null) {
            var a = Ft();
            gr(l, e, 1, a);
          }
        }),
          Ys(e, 1);
    }
  }),
    (Ea = function (e) {
      if (e.tag === 13) {
        var t = $r(e, 134217728);
        if (t !== null) {
          var r = Ft();
          gr(t, e, 134217728, r);
        }
        Ys(e, 134217728);
      }
    }),
    (Yu = function (e) {
      if (e.tag === 13) {
        var t = gn(e),
          r = $r(e, t);
        if (r !== null) {
          var l = Ft();
          gr(r, e, t, l);
        }
        Ys(e, t);
      }
    }),
    (Gu = function () {
      return qe;
    }),
    (Xu = function (e, t) {
      var r = qe;
      try {
        return (qe = e), t();
      } finally {
        qe = r;
      }
    }),
    (ol = function (e, t, r) {
      switch (t) {
        case "input":
          if ((tl(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var l = r[t];
              if (l !== e && l.form === e.form) {
                var a = lo(l);
                if (!a) throw Error(o(90));
                Zn(l), tl(l, a);
              }
            }
          }
          break;
        case "textarea":
          me(e, r);
          break;
        case "select":
          (t = r.value), t != null && X(e, !!r.multiple, t, !1);
      }
    }),
    (zi = Bs),
    (k = Bn);
  var Um = { usingClientEntryPoint: !1, Events: [ii, vl, lo, Ln, Ii, Bs] },
    xi = {
      findFiberByHostInstance: Fn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    $m = {
      bundleType: xi.bundleType,
      version: xi.version,
      rendererPackageName: xi.rendererPackageName,
      rendererConfig: xi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: pe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = en(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: xi.findFiberByHostInstance || Im,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vo.isDisabled && Vo.supportsFiber)
      try {
        (cr = Vo.inject($m)), (Qt = Vo);
      } catch {}
  }
  return (
    (Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um),
    (Vt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xs(t)) throw Error(o(200));
      return bm(e, t, null, r);
    }),
    (Vt.createRoot = function (e, t) {
      if (!Xs(e)) throw Error(o(299));
      var r = !1,
        l = "",
        a = pf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Ks(e, 1, !1, null, null, r, !1, l, a)),
        (e[br] = t.current),
        ri(e.nodeType === 8 ? e.parentNode : e),
        new Gs(t)
      );
    }),
    (Vt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = en(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Vt.flushSync = function (e) {
      return Bn(e);
    }),
    (Vt.hydrate = function (e, t, r) {
      if (!$o(t)) throw Error(o(200));
      return Bo(null, e, t, !0, r);
    }),
    (Vt.hydrateRoot = function (e, t, r) {
      if (!Xs(e)) throw Error(o(405));
      var l = (r != null && r.hydratedSources) || null,
        a = !1,
        u = "",
        m = pf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (m = r.onRecoverableError)),
        (t = ff(t, null, e, 1, r ?? null, a, !1, u, m)),
        (e[br] = t.current),
        ri(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (r = l[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new Uo(t);
    }),
    (Vt.render = function (e, t, r) {
      if (!$o(t)) throw Error(o(200));
      return Bo(null, e, t, !1, r);
    }),
    (Vt.unmountComponentAtNode = function (e) {
      if (!$o(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (Bn(function () {
            Bo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[br] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Vt.unstable_batchedUpdates = Bs),
    (Vt.unstable_renderSubtreeIntoContainer = function (e, t, r, l) {
      if (!$o(r)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Bo(e, t, r, !1, l);
    }),
    (Vt.version = "18.3.1-next-f1338f8080-20240426"),
    Vt
  );
}
var kf;
function yh() {
  if (kf) return eu.exports;
  kf = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), (eu.exports = Gm()), eu.exports;
}
var jf;
function Xm() {
  if (jf) return Ho;
  jf = 1;
  var n = yh();
  return (Ho.createRoot = n.createRoot), (Ho.hydrateRoot = n.hydrateRoot), Ho;
}
var Jm = Xm(),
  Si = {},
  Cf;
function Zm() {
  if (Cf) return Si;
  (Cf = 1),
    Object.defineProperty(Si, "__esModule", { value: !0 }),
    (Si.parse = h),
    (Si.serialize = g);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    d = Object.prototype.toString,
    c = (() => {
      const w = function () {};
      return (w.prototype = Object.create(null)), w;
    })();
  function h(w, R) {
    const F = new c(),
      I = w.length;
    if (I < 2) return F;
    const $ = (R == null ? void 0 : R.decode) || x;
    let z = 0;
    do {
      const W = w.indexOf("=", z);
      if (W === -1) break;
      const ee = w.indexOf(";", z),
        pe = ee === -1 ? I : ee;
      if (W > pe) {
        z = w.lastIndexOf(";", W - 1) + 1;
        continue;
      }
      const T = p(w, z, W),
        ue = v(w, W, T),
        Ee = w.slice(T, ue);
      if (F[Ee] === void 0) {
        let de = p(w, W + 1, pe),
          Ne = v(w, pe, de);
        const Re = $(w.slice(de, Ne));
        F[Ee] = Re;
      }
      z = pe + 1;
    } while (z < I);
    return F;
  }
  function p(w, R, F) {
    do {
      const I = w.charCodeAt(R);
      if (I !== 32 && I !== 9) return R;
    } while (++R < F);
    return F;
  }
  function v(w, R, F) {
    for (; R > F; ) {
      const I = w.charCodeAt(--R);
      if (I !== 32 && I !== 9) return R + 1;
    }
    return F;
  }
  function g(w, R, F) {
    const I = (F == null ? void 0 : F.encode) || encodeURIComponent;
    if (!n.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
    const $ = I(R);
    if (!i.test($)) throw new TypeError(`argument val is invalid: ${R}`);
    let z = w + "=" + $;
    if (!F) return z;
    if (F.maxAge !== void 0) {
      if (!Number.isInteger(F.maxAge))
        throw new TypeError(`option maxAge is invalid: ${F.maxAge}`);
      z += "; Max-Age=" + F.maxAge;
    }
    if (F.domain) {
      if (!o.test(F.domain))
        throw new TypeError(`option domain is invalid: ${F.domain}`);
      z += "; Domain=" + F.domain;
    }
    if (F.path) {
      if (!s.test(F.path))
        throw new TypeError(`option path is invalid: ${F.path}`);
      z += "; Path=" + F.path;
    }
    if (F.expires) {
      if (!C(F.expires) || !Number.isFinite(F.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${F.expires}`);
      z += "; Expires=" + F.expires.toUTCString();
    }
    if (
      (F.httpOnly && (z += "; HttpOnly"),
      F.secure && (z += "; Secure"),
      F.partitioned && (z += "; Partitioned"),
      F.priority)
    )
      switch (
        typeof F.priority == "string" ? F.priority.toLowerCase() : void 0
      ) {
        case "low":
          z += "; Priority=Low";
          break;
        case "medium":
          z += "; Priority=Medium";
          break;
        case "high":
          z += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${F.priority}`);
      }
    if (F.sameSite)
      switch (
        typeof F.sameSite == "string" ? F.sameSite.toLowerCase() : F.sameSite
      ) {
        case !0:
        case "strict":
          z += "; SameSite=Strict";
          break;
        case "lax":
          z += "; SameSite=Lax";
          break;
        case "none":
          z += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${F.sameSite}`);
      }
    return z;
  }
  function x(w) {
    if (w.indexOf("%") === -1) return w;
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }
  function C(w) {
    return d.call(w) === "[object Date]";
  }
  return Si;
}
Zm();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Nf = "popstate";
function ev(n = {}) {
  function i(s, d) {
    let { pathname: c, search: h, hash: p } = s.location;
    return Di(
      "",
      { pathname: c, search: h, hash: p },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default"
    );
  }
  function o(s, d) {
    return typeof d == "string" ? d : Cn(d);
  }
  return rv(i, o, null, n);
}
function be(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
function jt(n, i) {
  if (!n) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function tv() {
  return Math.random().toString(36).substring(2, 10);
}
function _f(n, i) {
  return { usr: n.state, key: n.key, idx: i };
}
function Di(n, i, o = null, s) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? Nn(i) : i),
    state: o,
    key: (i && i.key) || s || tv(),
  };
}
function Cn({ pathname: n = "/", search: i = "", hash: o = "" }) {
  return (
    i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    o && o !== "#" && (n += o.charAt(0) === "#" ? o : "#" + o),
    n
  );
}
function Nn(n) {
  let i = {};
  if (n) {
    let o = n.indexOf("#");
    o >= 0 && ((i.hash = n.substring(o)), (n = n.substring(0, o)));
    let s = n.indexOf("?");
    s >= 0 && ((i.search = n.substring(s)), (n = n.substring(0, s))),
      n && (i.pathname = n);
  }
  return i;
}
function rv(n, i, o, s = {}) {
  let { window: d = document.defaultView, v5Compat: c = !1 } = s,
    h = d.history,
    p = "POP",
    v = null,
    g = x();
  g == null && ((g = 0), h.replaceState({ ...h.state, idx: g }, ""));
  function x() {
    return (h.state || { idx: null }).idx;
  }
  function C() {
    p = "POP";
    let $ = x(),
      z = $ == null ? null : $ - g;
    (g = $), v && v({ action: p, location: I.location, delta: z });
  }
  function w($, z) {
    p = "PUSH";
    let W = Di(I.location, $, z);
    g = x() + 1;
    let ee = _f(W, g),
      pe = I.createHref(W);
    try {
      h.pushState(ee, "", pe);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      d.location.assign(pe);
    }
    c && v && v({ action: p, location: I.location, delta: 1 });
  }
  function R($, z) {
    p = "REPLACE";
    let W = Di(I.location, $, z);
    g = x();
    let ee = _f(W, g),
      pe = I.createHref(W);
    h.replaceState(ee, "", pe),
      c && v && v({ action: p, location: I.location, delta: 0 });
  }
  function F($) {
    let z = d.location.origin !== "null" ? d.location.origin : d.location.href,
      W = typeof $ == "string" ? $ : Cn($);
    return (
      (W = W.replace(/ $/, "%20")),
      be(
        z,
        `No window.location.(origin|href) available to create URL for href: ${W}`
      ),
      new URL(W, z)
    );
  }
  let I = {
    get action() {
      return p;
    },
    get location() {
      return n(d, h);
    },
    listen($) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(Nf, C),
        (v = $),
        () => {
          d.removeEventListener(Nf, C), (v = null);
        }
      );
    },
    createHref($) {
      return i(d, $);
    },
    createURL: F,
    encodeLocation($) {
      let z = F($);
      return { pathname: z.pathname, search: z.search, hash: z.hash };
    },
    push: w,
    replace: R,
    go($) {
      return h.go($);
    },
  };
  return I;
}
var nv = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function lv(n) {
  return n.index === !0;
}
function na(n, i, o = [], s = {}) {
  return n.map((d, c) => {
    let h = [...o, String(c)],
      p = typeof d.id == "string" ? d.id : h.join("-");
    if (
      (be(
        d.index !== !0 || !d.children,
        "Cannot specify children on an index route"
      ),
      be(
        !s[p],
        `Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`
      ),
      lv(d))
    ) {
      let v = { ...d, ...i(d), id: p };
      return (s[p] = v), v;
    } else {
      let v = { ...d, ...i(d), id: p, children: void 0 };
      return (
        (s[p] = v), d.children && (v.children = na(d.children, i, h, s)), v
      );
    }
  });
}
function En(n, i, o = "/") {
  return Yo(n, i, o, !1);
}
function Yo(n, i, o, s) {
  let d = typeof i == "string" ? Nn(i) : i,
    c = Sr(d.pathname || "/", o);
  if (c == null) return null;
  let h = xh(n);
  ov(h);
  let p = null;
  for (let v = 0; p == null && v < h.length; ++v) {
    let g = gv(c);
    p = mv(h[v], g, s);
  }
  return p;
}
function iv(n, i) {
  let { route: o, pathname: s, params: d } = n;
  return { id: o.id, pathname: s, params: d, data: i[o.id], handle: o.handle };
}
function xh(n, i = [], o = [], s = "") {
  let d = (c, h, p) => {
    let v = {
      relativePath: p === void 0 ? c.path || "" : p,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: h,
      route: c,
    };
    v.relativePath.startsWith("/") &&
      (be(
        v.relativePath.startsWith(s),
        `Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (v.relativePath = v.relativePath.slice(s.length)));
    let g = Dr([s, v.relativePath]),
      x = o.concat(v);
    c.children &&
      c.children.length > 0 &&
      (be(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      xh(c.children, i, x, g)),
      !(c.path == null && !c.index) &&
        i.push({ path: g, score: hv(g, c.index), routesMeta: x });
  };
  return (
    n.forEach((c, h) => {
      var p;
      if (c.path === "" || !((p = c.path) != null && p.includes("?"))) d(c, h);
      else for (let v of wh(c.path)) d(c, h, v);
    }),
    i
  );
}
function wh(n) {
  let i = n.split("/");
  if (i.length === 0) return [];
  let [o, ...s] = i,
    d = o.endsWith("?"),
    c = o.replace(/\?$/, "");
  if (s.length === 0) return d ? [c, ""] : [c];
  let h = wh(s.join("/")),
    p = [];
  return (
    p.push(...h.map((v) => (v === "" ? c : [c, v].join("/")))),
    d && p.push(...h),
    p.map((v) => (n.startsWith("/") && v === "" ? "/" : v))
  );
}
function ov(n) {
  n.sort((i, o) =>
    i.score !== o.score
      ? o.score - i.score
      : pv(
          i.routesMeta.map((s) => s.childrenIndex),
          o.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
var av = /^:[\w-]+$/,
  sv = 3,
  uv = 2,
  cv = 1,
  dv = 10,
  fv = -2,
  Tf = (n) => n === "*";
function hv(n, i) {
  let o = n.split("/"),
    s = o.length;
  return (
    o.some(Tf) && (s += fv),
    i && (s += uv),
    o
      .filter((d) => !Tf(d))
      .reduce((d, c) => d + (av.test(c) ? sv : c === "" ? cv : dv), s)
  );
}
function pv(n, i) {
  return n.length === i.length && n.slice(0, -1).every((s, d) => s === i[d])
    ? n[n.length - 1] - i[i.length - 1]
    : 0;
}
function mv(n, i, o = !1) {
  let { routesMeta: s } = n,
    d = {},
    c = "/",
    h = [];
  for (let p = 0; p < s.length; ++p) {
    let v = s[p],
      g = p === s.length - 1,
      x = c === "/" ? i : i.slice(c.length) || "/",
      C = la(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: g },
        x
      ),
      w = v.route;
    if (
      (!C &&
        g &&
        o &&
        !s[s.length - 1].route.index &&
        (C = la(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          x
        )),
      !C)
    )
      return null;
    Object.assign(d, C.params),
      h.push({
        params: d,
        pathname: Dr([c, C.pathname]),
        pathnameBase: wv(Dr([c, C.pathnameBase])),
        route: w,
      }),
      C.pathnameBase !== "/" && (c = Dr([c, C.pathnameBase]));
  }
  return h;
}
function la(n, i) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [o, s] = vv(n.path, n.caseSensitive, n.end),
    d = i.match(o);
  if (!d) return null;
  let c = d[0],
    h = c.replace(/(.)\/+$/, "$1"),
    p = d.slice(1);
  return {
    params: s.reduce((g, { paramName: x, isOptional: C }, w) => {
      if (x === "*") {
        let F = p[w] || "";
        h = c.slice(0, c.length - F.length).replace(/(.)\/+$/, "$1");
      }
      const R = p[w];
      return (
        C && !R ? (g[x] = void 0) : (g[x] = (R || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: c,
    pathnameBase: h,
    pattern: n,
  };
}
function vv(n, i = !1, o = !0) {
  jt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let s = [],
    d =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, p, v) => (
            s.push({ paramName: p, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (d += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
      ? (d += "\\/*$")
      : n !== "" && n !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, i ? void 0 : "i"), s]
  );
}
function gv(n) {
  try {
    return n
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      jt(
        !1,
        `The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      n
    );
  }
}
function Sr(n, i) {
  if (i === "/") return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let o = i.endsWith("/") ? i.length - 1 : i.length,
    s = n.charAt(o);
  return s && s !== "/" ? null : n.slice(o) || "/";
}
function yv(n, i = "/") {
  let {
    pathname: o,
    search: s = "",
    hash: d = "",
  } = typeof n == "string" ? Nn(n) : n;
  return {
    pathname: o ? (o.startsWith("/") ? o : xv(o, i)) : i,
    search: Sv(s),
    hash: Ev(d),
  };
}
function xv(n, i) {
  let o = i.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((d) => {
      d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function nu(n, i, o, s) {
  return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Sh(n) {
  return n.filter(
    (i, o) => o === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function ca(n) {
  let i = Sh(n);
  return i.map((o, s) => (s === i.length - 1 ? o.pathname : o.pathnameBase));
}
function da(n, i, o, s = !1) {
  let d;
  typeof n == "string"
    ? (d = Nn(n))
    : ((d = { ...n }),
      be(
        !d.pathname || !d.pathname.includes("?"),
        nu("?", "pathname", "search", d)
      ),
      be(
        !d.pathname || !d.pathname.includes("#"),
        nu("#", "pathname", "hash", d)
      ),
      be(!d.search || !d.search.includes("#"), nu("#", "search", "hash", d)));
  let c = n === "" || d.pathname === "",
    h = c ? "/" : d.pathname,
    p;
  if (h == null) p = o;
  else {
    let C = i.length - 1;
    if (!s && h.startsWith("..")) {
      let w = h.split("/");
      for (; w[0] === ".."; ) w.shift(), (C -= 1);
      d.pathname = w.join("/");
    }
    p = C >= 0 ? i[C] : "/";
  }
  let v = yv(d, p),
    g = h && h !== "/" && h.endsWith("/"),
    x = (c || h === ".") && o.endsWith("/");
  return !v.pathname.endsWith("/") && (g || x) && (v.pathname += "/"), v;
}
var Dr = (n) => n.join("/").replace(/\/\/+/g, "/"),
  wv = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Sv = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  Ev = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n),
  ia = class {
    constructor(n, i, o, s = !1) {
      (this.status = n),
        (this.statusText = i || ""),
        (this.internal = s),
        o instanceof Error
          ? ((this.data = o.toString()), (this.error = o))
          : (this.data = o);
    }
  };
function fa(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
var Eh = ["POST", "PUT", "PATCH", "DELETE"],
  kv = new Set(Eh),
  jv = ["GET", ...Eh],
  Cv = new Set(jv),
  Nv = new Set([301, 302, 303, 307, 308]),
  _v = new Set([307, 308]),
  lu = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Tv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ei = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Lu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Rv = (n) => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
  kh = "remix-router-transitions",
  jh = Symbol("ResetLoaderData");
function Pv(n) {
  const i = n.window ? n.window : typeof window < "u" ? window : void 0,
    o =
      typeof i < "u" &&
      typeof i.document < "u" &&
      typeof i.document.createElement < "u";
  be(
    n.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let s = n.mapRouteProperties || Rv,
    d = {},
    c = na(n.routes, s, void 0, d),
    h,
    p = n.basename || "/",
    v = n.dataStrategy || Av,
    g = n.patchRoutesOnNavigation,
    x = { ...n.future },
    C = null,
    w = new Set(),
    R = null,
    F = null,
    I = null,
    $ = n.hydrationData != null,
    z = En(c, n.history.location, p),
    W = null;
  if (z == null && !g) {
    let k = ur(404, { pathname: n.history.location.pathname }),
      { matches: P, route: M } = zf(c);
    (z = P), (W = { [M.id]: k });
  }
  z &&
    !n.hydrationData &&
    Pn(z, c, n.history.location.pathname).active &&
    (z = null);
  let ee;
  if (z)
    if (z.some((k) => k.route.lazy)) ee = !1;
    else if (!z.some((k) => k.route.loader)) ee = !0;
    else {
      let k = n.hydrationData ? n.hydrationData.loaderData : null,
        P = n.hydrationData ? n.hydrationData.errors : null;
      if (P) {
        let M = z.findIndex((V) => P[V.route.id] !== void 0);
        ee = z.slice(0, M + 1).every((V) => !Su(V.route, k, P));
      } else ee = z.every((M) => !Su(M.route, k, P));
    }
  else {
    (ee = !1), (z = []);
    let k = Pn(null, c, n.history.location.pathname);
    k.active && k.matches && (z = k.matches);
  }
  let pe,
    T = {
      historyAction: n.history.action,
      location: n.history.location,
      matches: z,
      initialized: ee,
      navigation: lu,
      restoreScrollPosition: n.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
      actionData: (n.hydrationData && n.hydrationData.actionData) || null,
      errors: (n.hydrationData && n.hydrationData.errors) || W,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ue = "POP",
    Ee = !1,
    de,
    Ne = !1,
    Re = new Map(),
    Xe = null,
    ve = !1,
    ge = !1,
    Me = new Set(),
    _e = new Map(),
    $e = 0,
    De = -1,
    G = new Map(),
    ie = new Set(),
    J = new Map(),
    N = new Map(),
    U = new Set(),
    Se = new Map(),
    Te,
    Le = null;
  function Fe() {
    if (
      ((C = n.history.listen(({ action: k, location: P, delta: M }) => {
        if (Te) {
          Te(), (Te = void 0);
          return;
        }
        jt(
          Se.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let V = il({
          currentLocation: T.location,
          nextLocation: P,
          historyAction: k,
        });
        if (V && M != null) {
          let ne = new Promise((fe) => {
            Te = fe;
          });
          n.history.go(M * -1),
            Xr(V, {
              state: "blocked",
              location: P,
              proceed() {
                Xr(V, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: P,
                }),
                  ne.then(() => n.history.go(M));
              },
              reset() {
                let fe = new Map(T.blockers);
                fe.set(V, Ei), Pe({ blockers: fe });
              },
            });
          return;
        }
        return Dt(k, P);
      })),
      o)
    ) {
      qv(i, Re);
      let k = () => Qv(i, Re);
      i.addEventListener("pagehide", k),
        (Xe = () => i.removeEventListener("pagehide", k));
    }
    return T.initialized || Dt("POP", T.location, { initialHydration: !0 }), pe;
  }
  function Be() {
    C && C(),
      Xe && Xe(),
      w.clear(),
      de && de.abort(),
      T.fetchers.forEach((k, P) => _t(P)),
      T.blockers.forEach((k, P) => Tn(P));
  }
  function Ie(k) {
    return w.add(k), () => w.delete(k);
  }
  function Pe(k, P = {}) {
    T = { ...T, ...k };
    let M = [],
      V = [];
    T.fetchers.forEach((ne, fe) => {
      ne.state === "idle" && (U.has(fe) ? M.push(fe) : V.push(fe));
    }),
      [...w].forEach((ne) =>
        ne(T, {
          deletedFetchers: M,
          viewTransitionOpts: P.viewTransitionOpts,
          flushSync: P.flushSync === !0,
        })
      ),
      M.forEach((ne) => _t(ne)),
      V.forEach((ne) => T.fetchers.delete(ne));
  }
  function at(k, P, { flushSync: M } = {}) {
    var Z, je;
    let V =
        T.actionData != null &&
        T.navigation.formMethod != null &&
        yr(T.navigation.formMethod) &&
        T.navigation.state === "loading" &&
        ((Z = k.state) == null ? void 0 : Z._isRedirect) !== !0,
      ne;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (ne = P.actionData)
        : (ne = null)
      : V
      ? (ne = T.actionData)
      : (ne = null);
    let fe = P.loaderData
        ? bf(T.loaderData, P.loaderData, P.matches || [], P.errors)
        : T.loaderData,
      ke = T.blockers;
    ke.size > 0 && ((ke = new Map(ke)), ke.forEach((Oe, Ke) => ke.set(Ke, Ei)));
    let re =
      Ee === !0 ||
      (T.navigation.formMethod != null &&
        yr(T.navigation.formMethod) &&
        ((je = k.state) == null ? void 0 : je._isRedirect) !== !0);
    h && ((c = h), (h = void 0)),
      ve ||
        ue === "POP" ||
        (ue === "PUSH"
          ? n.history.push(k, k.state)
          : ue === "REPLACE" && n.history.replace(k, k.state));
    let se;
    if (ue === "POP") {
      let Oe = Re.get(T.location.pathname);
      Oe && Oe.has(k.pathname)
        ? (se = { currentLocation: T.location, nextLocation: k })
        : Re.has(k.pathname) &&
          (se = { currentLocation: k, nextLocation: T.location });
    } else if (Ne) {
      let Oe = Re.get(T.location.pathname);
      Oe
        ? Oe.add(k.pathname)
        : ((Oe = new Set([k.pathname])), Re.set(T.location.pathname, Oe)),
        (se = { currentLocation: T.location, nextLocation: k });
    }
    Pe(
      {
        ...P,
        actionData: ne,
        loaderData: fe,
        historyAction: ue,
        location: k,
        initialized: !0,
        navigation: lu,
        revalidation: "idle",
        restoreScrollPosition: Fr(k, P.matches || T.matches),
        preventScrollReset: re,
        blockers: ke,
      },
      { viewTransitionOpts: se, flushSync: M === !0 }
    ),
      (ue = "POP"),
      (Ee = !1),
      (Ne = !1),
      (ve = !1),
      (ge = !1),
      Le == null || Le.resolve(),
      (Le = null);
  }
  async function jr(k, P) {
    if (typeof k == "number") {
      n.history.go(k);
      return;
    }
    let M = wu(
        T.location,
        T.matches,
        p,
        k,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      { path: V, submission: ne, error: fe } = Rf(!1, M, P),
      ke = T.location,
      re = Di(T.location, V, P && P.state);
    re = { ...re, ...n.history.encodeLocation(re) };
    let se = P && P.replace != null ? P.replace : void 0,
      Z = "PUSH";
    se === !0
      ? (Z = "REPLACE")
      : se === !1 ||
        (ne != null &&
          yr(ne.formMethod) &&
          ne.formAction === T.location.pathname + T.location.search &&
          (Z = "REPLACE"));
    let je =
        P && "preventScrollReset" in P ? P.preventScrollReset === !0 : void 0,
      Oe = (P && P.flushSync) === !0,
      Ke = il({ currentLocation: ke, nextLocation: re, historyAction: Z });
    if (Ke) {
      Xr(Ke, {
        state: "blocked",
        location: re,
        proceed() {
          Xr(Ke, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: re,
          }),
            jr(k, P);
        },
        reset() {
          let mt = new Map(T.blockers);
          mt.set(Ke, Ei), Pe({ blockers: mt });
        },
      });
      return;
    }
    await Dt(Z, re, {
      submission: ne,
      pendingError: fe,
      preventScrollReset: je,
      replace: P && P.replace,
      enableViewTransition: P && P.viewTransition,
      flushSync: Oe,
    });
  }
  function Zn() {
    Le || (Le = Kv()), me(), Pe({ revalidation: "loading" });
    let k = Le.promise;
    return T.navigation.state === "submitting"
      ? k
      : T.navigation.state === "idle"
      ? (Dt(T.historyAction, T.location, {
          startUninterruptedRevalidation: !0,
        }),
        k)
      : (Dt(ue || T.historyAction, T.navigation.location, {
          overrideNavigation: T.navigation,
          enableViewTransition: Ne === !0,
        }),
        k);
  }
  async function Dt(k, P, M) {
    de && de.abort(),
      (de = null),
      (ue = k),
      (ve = (M && M.startUninterruptedRevalidation) === !0),
      Jr(T.location, T.matches),
      (Ee = (M && M.preventScrollReset) === !0),
      (Ne = (M && M.enableViewTransition) === !0);
    let V = h || c,
      ne = M && M.overrideNavigation,
      fe = En(V, P, p),
      ke = (M && M.flushSync) === !0,
      re = Pn(fe, V, P.pathname);
    if ((re.active && re.matches && (fe = re.matches), !fe)) {
      let { error: He, notFoundMatches: Qe, route: st } = Rn(P.pathname);
      at(
        P,
        { matches: Qe, loaderData: {}, errors: { [st.id]: He } },
        { flushSync: ke }
      );
      return;
    }
    if (
      T.initialized &&
      !ge &&
      $v(T.location, P) &&
      !(M && M.submission && yr(M.submission.formMethod))
    ) {
      at(P, { matches: fe }, { flushSync: ke });
      return;
    }
    de = new AbortController();
    let se = Ll(n.history, P, de.signal, M && M.submission),
      Z;
    if (M && M.pendingError)
      Z = [qn(fe).route.id, { type: "error", error: M.pendingError }];
    else if (M && M.submission && yr(M.submission.formMethod)) {
      let He = await Yr(se, P, M.submission, fe, re.active, {
        replace: M.replace,
        flushSync: ke,
      });
      if (He.shortCircuited) return;
      if (He.pendingActionResult) {
        let [Qe, st] = He.pendingActionResult;
        if (Jt(st) && fa(st.error) && st.error.status === 404) {
          (de = null),
            at(P, {
              matches: He.matches,
              loaderData: {},
              errors: { [Qe]: st.error },
            });
          return;
        }
      }
      (fe = He.matches || fe),
        (Z = He.pendingActionResult),
        (ne = iu(P, M.submission)),
        (ke = !1),
        (re.active = !1),
        (se = Ll(n.history, se.url, se.signal));
    }
    let {
      shortCircuited: je,
      matches: Oe,
      loaderData: Ke,
      errors: mt,
    } = await zl(
      se,
      P,
      fe,
      re.active,
      ne,
      M && M.submission,
      M && M.fetcherSubmission,
      M && M.replace,
      M && M.initialHydration === !0,
      ke,
      Z
    );
    je ||
      ((de = null),
      at(P, { matches: Oe || fe, ...If(Z), loaderData: Ke, errors: mt }));
  }
  async function Yr(k, P, M, V, ne, fe = {}) {
    me();
    let ke = Hv(P, M);
    if ((Pe({ navigation: ke }, { flushSync: fe.flushSync === !0 }), ne)) {
      let Z = await Ln(V, P.pathname, k.signal);
      if (Z.type === "aborted") return { shortCircuited: !0 };
      if (Z.type === "error") {
        let je = qn(Z.partialMatches).route.id;
        return {
          matches: Z.partialMatches,
          pendingActionResult: [je, { type: "error", error: Z.error }],
        };
      } else if (Z.matches) V = Z.matches;
      else {
        let { notFoundMatches: je, error: Oe, route: Ke } = Rn(P.pathname);
        return {
          matches: je,
          pendingActionResult: [Ke.id, { type: "error", error: Oe }],
        };
      }
    }
    let re,
      se = Ri(V, P);
    if (!se.route.action && !se.route.lazy)
      re = {
        type: "error",
        error: ur(405, {
          method: k.method,
          pathname: P.pathname,
          routeId: se.route.id,
        }),
      };
    else if (
      ((re = (await Y("action", T, k, [se], V, null))[se.route.id]),
      k.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Qn(re)) {
      let Z;
      return (
        fe && fe.replace != null
          ? (Z = fe.replace)
          : (Z =
              Ff(re.response.headers.get("Location"), new URL(k.url), p) ===
              T.location.pathname + T.location.search),
        await X(k, re, !0, { submission: M, replace: Z }),
        { shortCircuited: !0 }
      );
    }
    if (Jt(re)) {
      let Z = qn(V, se.route.id);
      return (
        (fe && fe.replace) !== !0 && (ue = "PUSH"),
        { matches: V, pendingActionResult: [Z.route.id, re] }
      );
    }
    return { matches: V, pendingActionResult: [se.route.id, re] };
  }
  async function zl(k, P, M, V, ne, fe, ke, re, se, Z, je) {
    let Oe = ne || iu(P, fe),
      Ke = fe || ke || $f(Oe),
      mt = !ve && !se;
    if (V) {
      if (mt) {
        let vt = el(je);
        Pe(
          { navigation: Oe, ...(vt !== void 0 ? { actionData: vt } : {}) },
          { flushSync: Z }
        );
      }
      let We = await Ln(M, P.pathname, k.signal);
      if (We.type === "aborted") return { shortCircuited: !0 };
      if (We.type === "error") {
        let vt = qn(We.partialMatches).route.id;
        return {
          matches: We.partialMatches,
          loaderData: {},
          errors: { [vt]: We.error },
        };
      } else if (We.matches) M = We.matches;
      else {
        let { error: vt, notFoundMatches: Mr, route: On } = Rn(P.pathname);
        return { matches: Mr, loaderData: {}, errors: { [On.id]: vt } };
      }
    }
    let He = h || c,
      [Qe, st] = Lf(
        n.history,
        T,
        M,
        Ke,
        P,
        se === !0,
        ge,
        Me,
        U,
        J,
        ie,
        He,
        p,
        je
      );
    if (((De = ++$e), Qe.length === 0 && st.length === 0)) {
      let We = nl();
      return (
        at(
          P,
          {
            matches: M,
            loaderData: {},
            errors: je && Jt(je[1]) ? { [je[0]]: je[1].error } : null,
            ...If(je),
            ...(We ? { fetchers: new Map(T.fetchers) } : {}),
          },
          { flushSync: Z }
        ),
        { shortCircuited: !0 }
      );
    }
    if (mt) {
      let We = {};
      if (!V) {
        We.navigation = Oe;
        let vt = el(je);
        vt !== void 0 && (We.actionData = vt);
      }
      st.length > 0 && (We.fetchers = tl(st)), Pe(We, { flushSync: Z });
    }
    st.forEach((We) => {
      wt(We.key), We.controller && _e.set(We.key, We.controller);
    });
    let Zr = () => st.forEach((We) => wt(We.key));
    de && de.signal.addEventListener("abort", Zr);
    let { loaderResults: en, fetcherResults: er } = await Q(T, M, Qe, st, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    de && de.signal.removeEventListener("abort", Zr),
      st.forEach((We) => _e.delete(We.key));
    let qt = Wo(en);
    if (qt)
      return await X(k, qt.result, !0, { replace: re }), { shortCircuited: !0 };
    if (((qt = Wo(er)), qt))
      return (
        ie.add(qt.key),
        await X(k, qt.result, !0, { replace: re }),
        { shortCircuited: !0 }
      );
    let { loaderData: al, errors: Dn } = Mf(T, M, en, je, st, er);
    se && T.errors && (Dn = { ...T.errors, ...Dn });
    let Ar = nl(),
      Ye = Gr(De),
      sl = Ar || Ye || st.length > 0;
    return {
      matches: M,
      loaderData: al,
      errors: Dn,
      ...(sl ? { fetchers: new Map(T.fetchers) } : {}),
    };
  }
  function el(k) {
    if (k && !Jt(k[1])) return { [k[0]]: k[1].data };
    if (T.actionData)
      return Object.keys(T.actionData).length === 0 ? null : T.actionData;
  }
  function tl(k) {
    return (
      k.forEach((P) => {
        let M = T.fetchers.get(P.key),
          V = ki(void 0, M ? M.data : void 0);
        T.fetchers.set(P.key, V);
      }),
      new Map(T.fetchers)
    );
  }
  async function S(k, P, M, V) {
    wt(k);
    let ne = (V && V.flushSync) === !0,
      fe = h || c,
      ke = wu(T.location, T.matches, p, M, P, V == null ? void 0 : V.relative),
      re = En(fe, ke, p),
      se = Pn(re, fe, ke);
    if ((se.active && se.matches && (re = se.matches), !re)) {
      Ve(k, P, ur(404, { pathname: ke }), { flushSync: ne });
      return;
    }
    let { path: Z, submission: je, error: Oe } = Rf(!0, ke, V);
    if (Oe) {
      Ve(k, P, Oe, { flushSync: ne });
      return;
    }
    let Ke = Ri(re, Z),
      mt = (V && V.preventScrollReset) === !0;
    if (je && yr(je.formMethod)) {
      await O(k, P, Z, Ke, re, se.active, ne, mt, je);
      return;
    }
    J.set(k, { routeId: P, path: Z }),
      await b(k, P, Z, Ke, re, se.active, ne, mt, je);
  }
  async function O(k, P, M, V, ne, fe, ke, re, se) {
    me(), J.delete(k);
    function Z(lt) {
      if (!lt.route.action && !lt.route.lazy) {
        let cr = ur(405, { method: se.formMethod, pathname: M, routeId: P });
        return Ve(k, P, cr, { flushSync: ke }), !0;
      }
      return !1;
    }
    if (!fe && Z(V)) return;
    let je = T.fetchers.get(k);
    we(k, Wv(se, je), { flushSync: ke });
    let Oe = new AbortController(),
      Ke = Ll(n.history, M, Oe.signal, se);
    if (fe) {
      let lt = await Ln(ne, M, Ke.signal);
      if (lt.type === "aborted") return;
      if (lt.type === "error") {
        Ve(k, P, lt.error, { flushSync: ke });
        return;
      } else if (lt.matches) {
        if (((ne = lt.matches), (V = Ri(ne, M)), Z(V))) return;
      } else {
        Ve(k, P, ur(404, { pathname: M }), { flushSync: ke });
        return;
      }
    }
    _e.set(k, Oe);
    let mt = $e,
      Qe = (await Y("action", T, Ke, [V], ne, k))[V.route.id];
    if (Ke.signal.aborted) {
      _e.get(k) === Oe && _e.delete(k);
      return;
    }
    if (U.has(k)) {
      if (Qn(Qe) || Jt(Qe)) {
        we(k, Sn(void 0));
        return;
      }
    } else {
      if (Qn(Qe))
        if ((_e.delete(k), De > mt)) {
          we(k, Sn(void 0));
          return;
        } else
          return (
            ie.add(k),
            we(k, ki(se)),
            X(Ke, Qe, !1, { fetcherSubmission: se, preventScrollReset: re })
          );
      if (Jt(Qe)) {
        Ve(k, P, Qe.error);
        return;
      }
    }
    let st = T.navigation.location || T.location,
      Zr = Ll(n.history, st, Oe.signal),
      en = h || c,
      er =
        T.navigation.state !== "idle"
          ? En(en, T.navigation.location, p)
          : T.matches;
    be(er, "Didn't find any matches after fetcher action");
    let qt = ++$e;
    G.set(k, qt);
    let al = ki(se, Qe.data);
    T.fetchers.set(k, al);
    let [Dn, Ar] = Lf(n.history, T, er, se, st, !1, ge, Me, U, J, ie, en, p, [
      V.route.id,
      Qe,
    ]);
    Ar.filter((lt) => lt.key !== k).forEach((lt) => {
      let cr = lt.key,
        Qt = T.fetchers.get(cr),
        ya = ki(void 0, Qt ? Qt.data : void 0);
      T.fetchers.set(cr, ya),
        wt(cr),
        lt.controller && _e.set(cr, lt.controller);
    }),
      Pe({ fetchers: new Map(T.fetchers) });
    let Ye = () => Ar.forEach((lt) => wt(lt.key));
    Oe.signal.addEventListener("abort", Ye);
    let { loaderResults: sl, fetcherResults: We } = await Q(T, er, Dn, Ar, Zr);
    if (Oe.signal.aborted) return;
    Oe.signal.removeEventListener("abort", Ye),
      G.delete(k),
      _e.delete(k),
      Ar.forEach((lt) => _e.delete(lt.key));
    let vt = Wo(sl);
    if (vt) return X(Zr, vt.result, !1, { preventScrollReset: re });
    if (((vt = Wo(We)), vt))
      return ie.add(vt.key), X(Zr, vt.result, !1, { preventScrollReset: re });
    let { loaderData: Mr, errors: On } = Mf(T, er, sl, void 0, Ar, We);
    if (T.fetchers.has(k)) {
      let lt = Sn(Qe.data);
      T.fetchers.set(k, lt);
    }
    Gr(qt),
      T.navigation.state === "loading" && qt > De
        ? (be(ue, "Expected pending action"),
          de && de.abort(),
          at(T.navigation.location, {
            matches: er,
            loaderData: Mr,
            errors: On,
            fetchers: new Map(T.fetchers),
          }))
        : (Pe({
            errors: On,
            loaderData: bf(T.loaderData, Mr, er, On),
            fetchers: new Map(T.fetchers),
          }),
          (ge = !1));
  }
  async function b(k, P, M, V, ne, fe, ke, re, se) {
    let Z = T.fetchers.get(k);
    we(k, ki(se, Z ? Z.data : void 0), { flushSync: ke });
    let je = new AbortController(),
      Oe = Ll(n.history, M, je.signal);
    if (fe) {
      let Qe = await Ln(ne, M, Oe.signal);
      if (Qe.type === "aborted") return;
      if (Qe.type === "error") {
        Ve(k, P, Qe.error, { flushSync: ke });
        return;
      } else if (Qe.matches) (ne = Qe.matches), (V = Ri(ne, M));
      else {
        Ve(k, P, ur(404, { pathname: M }), { flushSync: ke });
        return;
      }
    }
    _e.set(k, je);
    let Ke = $e,
      He = (await Y("loader", T, Oe, [V], ne, k))[V.route.id];
    if ((_e.get(k) === je && _e.delete(k), !Oe.signal.aborted)) {
      if (U.has(k)) {
        we(k, Sn(void 0));
        return;
      }
      if (Qn(He))
        if (De > Ke) {
          we(k, Sn(void 0));
          return;
        } else {
          ie.add(k), await X(Oe, He, !1, { preventScrollReset: re });
          return;
        }
      if (Jt(He)) {
        Ve(k, P, He.error);
        return;
      }
      we(k, Sn(He.data));
    }
  }
  async function X(
    k,
    P,
    M,
    {
      submission: V,
      fetcherSubmission: ne,
      preventScrollReset: fe,
      replace: ke,
    } = {}
  ) {
    P.response.headers.has("X-Remix-Revalidate") && (ge = !0);
    let re = P.response.headers.get("Location");
    be(re, "Expected a Location header on the redirect Response"),
      (re = Ff(re, new URL(k.url), p));
    let se = Di(T.location, re, { _isRedirect: !0 });
    if (o) {
      let He = !1;
      if (P.response.headers.has("X-Remix-Reload-Document")) He = !0;
      else if (Lu.test(re)) {
        const Qe = n.history.createURL(re);
        He = Qe.origin !== i.location.origin || Sr(Qe.pathname, p) == null;
      }
      if (He) {
        ke ? i.location.replace(re) : i.location.assign(re);
        return;
      }
    }
    de = null;
    let Z =
        ke === !0 || P.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: je, formAction: Oe, formEncType: Ke } = T.navigation;
    !V && !ne && je && Oe && Ke && (V = $f(T.navigation));
    let mt = V || ne;
    if (_v.has(P.response.status) && mt && yr(mt.formMethod))
      await Dt(Z, se, {
        submission: { ...mt, formAction: re },
        preventScrollReset: fe || Ee,
        enableViewTransition: M ? Ne : void 0,
      });
    else {
      let He = iu(se, V);
      await Dt(Z, se, {
        overrideNavigation: He,
        fetcherSubmission: ne,
        preventScrollReset: fe || Ee,
        enableViewTransition: M ? Ne : void 0,
      });
    }
  }
  async function Y(k, P, M, V, ne, fe) {
    let ke,
      re = {};
    try {
      ke = await Mv(v, k, P, M, V, ne, fe, d, s);
    } catch (se) {
      return (
        V.forEach((Z) => {
          re[Z.route.id] = { type: "error", error: se };
        }),
        re
      );
    }
    for (let [se, Z] of Object.entries(ke))
      if (Bv(Z)) {
        let je = Z.result;
        re[se] = { type: "redirect", response: zv(je, M, se, ne, p) };
      } else re[se] = await Iv(Z);
    return re;
  }
  async function Q(k, P, M, V, ne) {
    let fe = Y("loader", k, ne, M, P, null),
      ke = Promise.all(
        V.map(async (Z) => {
          if (Z.matches && Z.match && Z.controller) {
            let Oe = (
              await Y(
                "loader",
                k,
                Ll(n.history, Z.path, Z.controller.signal),
                [Z.match],
                Z.matches,
                Z.key
              )
            )[Z.match.route.id];
            return { [Z.key]: Oe };
          } else
            return Promise.resolve({
              [Z.key]: { type: "error", error: ur(404, { pathname: Z.path }) },
            });
        })
      ),
      re = await fe,
      se = (await ke).reduce((Z, je) => Object.assign(Z, je), {});
    return { loaderResults: re, fetcherResults: se };
  }
  function me() {
    (ge = !0),
      J.forEach((k, P) => {
        _e.has(P) && Me.add(P), wt(P);
      });
  }
  function we(k, P, M = {}) {
    T.fetchers.set(k, P),
      Pe(
        { fetchers: new Map(T.fetchers) },
        { flushSync: (M && M.flushSync) === !0 }
      );
  }
  function Ve(k, P, M, V = {}) {
    let ne = qn(T.matches, P);
    _t(k),
      Pe(
        { errors: { [ne.route.id]: M }, fetchers: new Map(T.fetchers) },
        { flushSync: (V && V.flushSync) === !0 }
      );
  }
  function Je(k) {
    return (
      N.set(k, (N.get(k) || 0) + 1),
      U.has(k) && U.delete(k),
      T.fetchers.get(k) || Tv
    );
  }
  function _t(k) {
    let P = T.fetchers.get(k);
    _e.has(k) && !(P && P.state === "loading" && G.has(k)) && wt(k),
      J.delete(k),
      G.delete(k),
      ie.delete(k),
      U.delete(k),
      Me.delete(k),
      T.fetchers.delete(k);
  }
  function rl(k) {
    let P = (N.get(k) || 0) - 1;
    P <= 0 ? (N.delete(k), U.add(k)) : N.set(k, P),
      Pe({ fetchers: new Map(T.fetchers) });
  }
  function wt(k) {
    let P = _e.get(k);
    P && (P.abort(), _e.delete(k));
  }
  function Zt(k) {
    for (let P of k) {
      let M = Je(P),
        V = Sn(M.data);
      T.fetchers.set(P, V);
    }
  }
  function nl() {
    let k = [],
      P = !1;
    for (let M of ie) {
      let V = T.fetchers.get(M);
      be(V, `Expected fetcher: ${M}`),
        V.state === "loading" && (ie.delete(M), k.push(M), (P = !0));
    }
    return Zt(k), P;
  }
  function Gr(k) {
    let P = [];
    for (let [M, V] of G)
      if (V < k) {
        let ne = T.fetchers.get(M);
        be(ne, `Expected fetcher: ${M}`),
          ne.state === "loading" && (wt(M), G.delete(M), P.push(M));
      }
    return Zt(P), P.length > 0;
  }
  function ll(k, P) {
    let M = T.blockers.get(k) || Ei;
    return Se.get(k) !== P && Se.set(k, P), M;
  }
  function Tn(k) {
    T.blockers.delete(k), Se.delete(k);
  }
  function Xr(k, P) {
    let M = T.blockers.get(k) || Ei;
    be(
      (M.state === "unblocked" && P.state === "blocked") ||
        (M.state === "blocked" && P.state === "blocked") ||
        (M.state === "blocked" && P.state === "proceeding") ||
        (M.state === "blocked" && P.state === "unblocked") ||
        (M.state === "proceeding" && P.state === "unblocked"),
      `Invalid blocker state transition: ${M.state} -> ${P.state}`
    );
    let V = new Map(T.blockers);
    V.set(k, P), Pe({ blockers: V });
  }
  function il({ currentLocation: k, nextLocation: P, historyAction: M }) {
    if (Se.size === 0) return;
    Se.size > 1 && jt(!1, "A router only supports one blocker at a time");
    let V = Array.from(Se.entries()),
      [ne, fe] = V[V.length - 1],
      ke = T.blockers.get(ne);
    if (
      !(ke && ke.state === "proceeding") &&
      fe({ currentLocation: k, nextLocation: P, historyAction: M })
    )
      return ne;
  }
  function Rn(k) {
    let P = ur(404, { pathname: k }),
      M = h || c,
      { matches: V, route: ne } = zf(M);
    return { notFoundMatches: V, route: ne, error: P };
  }
  function Ul(k, P, M) {
    if (((R = k), (I = P), (F = M || null), !$ && T.navigation === lu)) {
      $ = !0;
      let V = Fr(T.location, T.matches);
      V != null && Pe({ restoreScrollPosition: V });
    }
    return () => {
      (R = null), (I = null), (F = null);
    };
  }
  function ol(k, P) {
    return (
      (F &&
        F(
          k,
          P.map((V) => iv(V, T.loaderData))
        )) ||
      k.key
    );
  }
  function Jr(k, P) {
    if (R && I) {
      let M = ol(k, P);
      R[M] = I();
    }
  }
  function Fr(k, P) {
    if (R) {
      let M = ol(k, P),
        V = R[M];
      if (typeof V == "number") return V;
    }
    return null;
  }
  function Pn(k, P, M) {
    if (g)
      if (k) {
        if (Object.keys(k[0].params).length > 0)
          return { active: !0, matches: Yo(P, M, p, !0) };
      } else return { active: !0, matches: Yo(P, M, p, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ln(k, P, M) {
    if (!g) return { type: "success", matches: k };
    let V = k;
    for (;;) {
      let ne = h == null,
        fe = h || c,
        ke = d;
      try {
        await g({
          path: P,
          matches: V,
          patch: (Z, je) => {
            M.aborted || Of(Z, je, fe, ke, s);
          },
        });
      } catch (Z) {
        return { type: "error", error: Z, partialMatches: V };
      } finally {
        ne && !M.aborted && (c = [...c]);
      }
      if (M.aborted) return { type: "aborted" };
      let re = En(fe, P, p);
      if (re) return { type: "success", matches: re };
      let se = Yo(fe, P, p, !0);
      if (
        !se ||
        (V.length === se.length &&
          V.every((Z, je) => Z.route.id === se[je].route.id))
      )
        return { type: "success", matches: null };
      V = se;
    }
  }
  function Ii(k) {
    (d = {}), (h = na(k, s, void 0, d));
  }
  function zi(k, P) {
    let M = h == null;
    Of(k, P, h || c, d, s), M && ((c = [...c]), Pe({}));
  }
  return (
    (pe = {
      get basename() {
        return p;
      },
      get future() {
        return x;
      },
      get state() {
        return T;
      },
      get routes() {
        return c;
      },
      get window() {
        return i;
      },
      initialize: Fe,
      subscribe: Ie,
      enableScrollRestoration: Ul,
      navigate: jr,
      fetch: S,
      revalidate: Zn,
      createHref: (k) => n.history.createHref(k),
      encodeLocation: (k) => n.history.encodeLocation(k),
      getFetcher: Je,
      deleteFetcher: rl,
      dispose: Be,
      getBlocker: ll,
      deleteBlocker: Tn,
      patchRoutes: zi,
      _internalFetchControllers: _e,
      _internalSetRoutes: Ii,
    }),
    pe
  );
}
function Lv(n) {
  return (
    n != null &&
    (("formData" in n && n.formData != null) ||
      ("body" in n && n.body !== void 0))
  );
}
function wu(n, i, o, s, d, c) {
  let h, p;
  if (d) {
    h = [];
    for (let g of i)
      if ((h.push(g), g.route.id === d)) {
        p = g;
        break;
      }
  } else (h = i), (p = i[i.length - 1]);
  let v = da(s || ".", ca(h), Sr(n.pathname, o) || n.pathname, c === "path");
  if (
    (s == null && ((v.search = n.search), (v.hash = n.hash)),
    (s == null || s === "" || s === ".") && p)
  ) {
    let g = Du(v.search);
    if (p.route.index && !g)
      v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index";
    else if (!p.route.index && g) {
      let x = new URLSearchParams(v.search),
        C = x.getAll("index");
      x.delete("index"),
        C.filter((R) => R).forEach((R) => x.append("index", R));
      let w = x.toString();
      v.search = w ? `?${w}` : "";
    }
  }
  return (
    o !== "/" && (v.pathname = v.pathname === "/" ? o : Dr([o, v.pathname])),
    Cn(v)
  );
}
function Rf(n, i, o) {
  if (!o || !Lv(o)) return { path: i };
  if (o.formMethod && !Vv(o.formMethod))
    return { path: i, error: ur(405, { method: o.formMethod }) };
  let s = () => ({ path: i, error: ur(400, { type: "invalid-body" }) }),
    c = (o.formMethod || "get").toUpperCase(),
    h = Nh(i);
  if (o.body !== void 0) {
    if (o.formEncType === "text/plain") {
      if (!yr(c)) return s();
      let C =
        typeof o.body == "string"
          ? o.body
          : o.body instanceof FormData || o.body instanceof URLSearchParams
          ? Array.from(o.body.entries()).reduce(
              (w, [R, F]) => `${w}${R}=${F}
`,
              ""
            )
          : String(o.body);
      return {
        path: i,
        submission: {
          formMethod: c,
          formAction: h,
          formEncType: o.formEncType,
          formData: void 0,
          json: void 0,
          text: C,
        },
      };
    } else if (o.formEncType === "application/json") {
      if (!yr(c)) return s();
      try {
        let C = typeof o.body == "string" ? JSON.parse(o.body) : o.body;
        return {
          path: i,
          submission: {
            formMethod: c,
            formAction: h,
            formEncType: o.formEncType,
            formData: void 0,
            json: C,
            text: void 0,
          },
        };
      } catch {
        return s();
      }
    }
  }
  be(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let p, v;
  if (o.formData) (p = Eu(o.formData)), (v = o.formData);
  else if (o.body instanceof FormData) (p = Eu(o.body)), (v = o.body);
  else if (o.body instanceof URLSearchParams) (p = o.body), (v = Af(p));
  else if (o.body == null) (p = new URLSearchParams()), (v = new FormData());
  else
    try {
      (p = new URLSearchParams(o.body)), (v = Af(p));
    } catch {
      return s();
    }
  let g = {
    formMethod: c,
    formAction: h,
    formEncType: (o && o.formEncType) || "application/x-www-form-urlencoded",
    formData: v,
    json: void 0,
    text: void 0,
  };
  if (yr(g.formMethod)) return { path: i, submission: g };
  let x = Nn(i);
  return (
    n && x.search && Du(x.search) && p.append("index", ""),
    (x.search = `?${p}`),
    { path: Cn(x), submission: g }
  );
}
function Pf(n, i, o = !1) {
  let s = n.findIndex((d) => d.route.id === i);
  return s >= 0 ? n.slice(0, o ? s + 1 : s) : n;
}
function Lf(n, i, o, s, d, c, h, p, v, g, x, C, w, R) {
  let F = R ? (Jt(R[1]) ? R[1].error : R[1].data) : void 0,
    I = n.createURL(i.location),
    $ = n.createURL(d),
    z = o;
  c && i.errors
    ? (z = Pf(o, Object.keys(i.errors)[0], !0))
    : R && Jt(R[1]) && (z = Pf(o, R[0]));
  let W = R ? R[1].statusCode : void 0,
    ee = W && W >= 400,
    pe = z.filter((ue, Ee) => {
      let { route: de } = ue;
      if (de.lazy) return !0;
      if (de.loader == null) return !1;
      if (c) return Su(de, i.loaderData, i.errors);
      if (Dv(i.loaderData, i.matches[Ee], ue)) return !0;
      let Ne = i.matches[Ee],
        Re = ue;
      return Df(ue, {
        currentUrl: I,
        currentParams: Ne.params,
        nextUrl: $,
        nextParams: Re.params,
        ...s,
        actionResult: F,
        actionStatus: W,
        defaultShouldRevalidate: ee
          ? !1
          : h ||
            I.pathname + I.search === $.pathname + $.search ||
            I.search !== $.search ||
            Ov(Ne, Re),
      });
    }),
    T = [];
  return (
    g.forEach((ue, Ee) => {
      if (c || !o.some((ve) => ve.route.id === ue.routeId) || v.has(Ee)) return;
      let de = En(C, ue.path, w);
      if (!de) {
        T.push({
          key: Ee,
          routeId: ue.routeId,
          path: ue.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Ne = i.fetchers.get(Ee),
        Re = Ri(de, ue.path),
        Xe = !1;
      x.has(Ee)
        ? (Xe = !1)
        : p.has(Ee)
        ? (p.delete(Ee), (Xe = !0))
        : Ne && Ne.state !== "idle" && Ne.data === void 0
        ? (Xe = h)
        : (Xe = Df(Re, {
            currentUrl: I,
            currentParams: i.matches[i.matches.length - 1].params,
            nextUrl: $,
            nextParams: o[o.length - 1].params,
            ...s,
            actionResult: F,
            actionStatus: W,
            defaultShouldRevalidate: ee ? !1 : h,
          })),
        Xe &&
          T.push({
            key: Ee,
            routeId: ue.routeId,
            path: ue.path,
            matches: de,
            match: Re,
            controller: new AbortController(),
          });
    }),
    [pe, T]
  );
}
function Su(n, i, o) {
  if (n.lazy) return !0;
  if (!n.loader) return !1;
  let s = i != null && i[n.id] !== void 0,
    d = o != null && o[n.id] !== void 0;
  return !s && d
    ? !1
    : typeof n.loader == "function" && n.loader.hydrate === !0
    ? !0
    : !s && !d;
}
function Dv(n, i, o) {
  let s = !i || o.route.id !== i.route.id,
    d = !n.hasOwnProperty(o.route.id);
  return s || d;
}
function Ov(n, i) {
  let o = n.route.path;
  return (
    n.pathname !== i.pathname ||
    (o != null && o.endsWith("*") && n.params["*"] !== i.params["*"])
  );
}
function Df(n, i) {
  if (n.route.shouldRevalidate) {
    let o = n.route.shouldRevalidate(i);
    if (typeof o == "boolean") return o;
  }
  return i.defaultShouldRevalidate;
}
function Of(n, i, o, s, d) {
  let c;
  if (n) {
    let v = s[n];
    be(v, `No route found to patch children into: routeId = ${n}`),
      v.children || (v.children = []),
      (c = v.children);
  } else c = o;
  let h = i.filter((v) => !c.some((g) => Ch(v, g))),
    p = na(
      h,
      d,
      [n || "_", "patch", String((c == null ? void 0 : c.length) || "0")],
      s
    );
  c.push(...p);
}
function Ch(n, i) {
  return "id" in n && "id" in i && n.id === i.id
    ? !0
    : n.index === i.index &&
      n.path === i.path &&
      n.caseSensitive === i.caseSensitive
    ? (!n.children || n.children.length === 0) &&
      (!i.children || i.children.length === 0)
      ? !0
      : n.children.every((o, s) => {
          var d;
          return (d = i.children) == null ? void 0 : d.some((c) => Ch(o, c));
        })
    : !1;
}
async function Fv(n, i, o) {
  if (!n.lazy) return;
  let s = await n.lazy();
  if (!n.lazy) return;
  let d = o[n.id];
  be(d, "No route found in manifest");
  let c = {};
  for (let h in s) {
    let v = d[h] !== void 0 && h !== "hasErrorBoundary";
    jt(
      !v,
      `Route "${d.id}" has a static property "${h}" defined but its lazy function is also returning a value for this property. The lazy route property "${h}" will be ignored.`
    ),
      !v && !nv.has(h) && (c[h] = s[h]);
  }
  Object.assign(d, c), Object.assign(d, { ...i(d), lazy: void 0 });
}
async function Av({ matches: n }) {
  let i = n.filter((s) => s.shouldLoad);
  return (await Promise.all(i.map((s) => s.resolve()))).reduce(
    (s, d, c) => Object.assign(s, { [i[c].route.id]: d }),
    {}
  );
}
async function Mv(n, i, o, s, d, c, h, p, v, g) {
  let x = c.map((R) => (R.route.lazy ? Fv(R.route, v, p) : void 0)),
    C = c.map((R, F) => {
      let I = x[F],
        $ = d.some((W) => W.route.id === R.route.id);
      return {
        ...R,
        shouldLoad: $,
        resolve: async (W) => (
          W &&
            s.method === "GET" &&
            (R.route.lazy || R.route.loader) &&
            ($ = !0),
          $
            ? bv(i, s, R, I, W, g)
            : Promise.resolve({ type: "data", result: void 0 })
        ),
      };
    }),
    w = await n({
      matches: C,
      request: s,
      params: c[0].params,
      fetcherKey: h,
      context: g,
    });
  try {
    await Promise.all(x);
  } catch {}
  return w;
}
async function bv(n, i, o, s, d, c) {
  let h,
    p,
    v = (g) => {
      let x,
        C = new Promise((F, I) => (x = I));
      (p = () => x()), i.signal.addEventListener("abort", p);
      let w = (F) =>
          typeof g != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${n}" [routeId: ${o.route.id}]`
                )
              )
            : g(
                { request: i, params: o.params, context: c },
                ...(F !== void 0 ? [F] : [])
              ),
        R = (async () => {
          try {
            return { type: "data", result: await (d ? d((I) => w(I)) : w()) };
          } catch (F) {
            return { type: "error", result: F };
          }
        })();
      return Promise.race([R, C]);
    };
  try {
    let g = o.route[n];
    if (s)
      if (g) {
        let x,
          [C] = await Promise.all([
            v(g).catch((w) => {
              x = w;
            }),
            s,
          ]);
        if (x !== void 0) throw x;
        h = C;
      } else if ((await s, (g = o.route[n]), g)) h = await v(g);
      else if (n === "action") {
        let x = new URL(i.url),
          C = x.pathname + x.search;
        throw ur(405, { method: i.method, pathname: C, routeId: o.route.id });
      } else return { type: "data", result: void 0 };
    else if (g) h = await v(g);
    else {
      let x = new URL(i.url),
        C = x.pathname + x.search;
      throw ur(404, { pathname: C });
    }
  } catch (g) {
    return { type: "error", result: g };
  } finally {
    p && i.signal.removeEventListener("abort", p);
  }
  return h;
}
async function Iv(n) {
  var s, d, c, h;
  let { result: i, type: o } = n;
  if (_h(i)) {
    let p;
    try {
      let v = i.headers.get("Content-Type");
      v && /\bapplication\/json\b/.test(v)
        ? i.body == null
          ? (p = null)
          : (p = await i.json())
        : (p = await i.text());
    } catch (v) {
      return { type: "error", error: v };
    }
    return o === "error"
      ? {
          type: "error",
          error: new ia(i.status, i.statusText, p),
          statusCode: i.status,
          headers: i.headers,
        }
      : { type: "data", data: p, statusCode: i.status, headers: i.headers };
  }
  if (o === "error") {
    if (Uf(i)) {
      if (i.data instanceof Error)
        return {
          type: "error",
          error: i.data,
          statusCode: (s = i.init) == null ? void 0 : s.status,
        };
      i = new ia(
        ((d = i.init) == null ? void 0 : d.status) || 500,
        void 0,
        i.data
      );
    }
    return { type: "error", error: i, statusCode: fa(i) ? i.status : void 0 };
  }
  return Uf(i)
    ? {
        type: "data",
        data: i.data,
        statusCode: (c = i.init) == null ? void 0 : c.status,
        headers:
          (h = i.init) != null && h.headers
            ? new Headers(i.init.headers)
            : void 0,
      }
    : { type: "data", data: i };
}
function zv(n, i, o, s, d) {
  let c = n.headers.get("Location");
  if (
    (be(
      c,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Lu.test(c))
  ) {
    let h = s.slice(0, s.findIndex((p) => p.route.id === o) + 1);
    (c = wu(new URL(i.url), h, d, c)), n.headers.set("Location", c);
  }
  return n;
}
function Ff(n, i, o) {
  if (Lu.test(n)) {
    let s = n,
      d = s.startsWith("//") ? new URL(i.protocol + s) : new URL(s),
      c = Sr(d.pathname, o) != null;
    if (d.origin === i.origin && c) return d.pathname + d.search + d.hash;
  }
  return n;
}
function Ll(n, i, o, s) {
  let d = n.createURL(Nh(i)).toString(),
    c = { signal: o };
  if (s && yr(s.formMethod)) {
    let { formMethod: h, formEncType: p } = s;
    (c.method = h.toUpperCase()),
      p === "application/json"
        ? ((c.headers = new Headers({ "Content-Type": p })),
          (c.body = JSON.stringify(s.json)))
        : p === "text/plain"
        ? (c.body = s.text)
        : p === "application/x-www-form-urlencoded" && s.formData
        ? (c.body = Eu(s.formData))
        : (c.body = s.formData);
  }
  return new Request(d, c);
}
function Eu(n) {
  let i = new URLSearchParams();
  for (let [o, s] of n.entries())
    i.append(o, typeof s == "string" ? s : s.name);
  return i;
}
function Af(n) {
  let i = new FormData();
  for (let [o, s] of n.entries()) i.append(o, s);
  return i;
}
function Uv(n, i, o, s = !1, d = !1) {
  let c = {},
    h = null,
    p,
    v = !1,
    g = {},
    x = o && Jt(o[1]) ? o[1].error : void 0;
  return (
    n.forEach((C) => {
      if (!(C.route.id in i)) return;
      let w = C.route.id,
        R = i[w];
      if (
        (be(!Qn(R), "Cannot handle redirect results in processLoaderData"),
        Jt(R))
      ) {
        let F = R.error;
        if ((x !== void 0 && ((F = x), (x = void 0)), (h = h || {}), d))
          h[w] = F;
        else {
          let I = qn(n, w);
          h[I.route.id] == null && (h[I.route.id] = F);
        }
        s || (c[w] = jh),
          v || ((v = !0), (p = fa(R.error) ? R.error.status : 500)),
          R.headers && (g[w] = R.headers);
      } else
        (c[w] = R.data),
          R.statusCode && R.statusCode !== 200 && !v && (p = R.statusCode),
          R.headers && (g[w] = R.headers);
    }),
    x !== void 0 && o && ((h = { [o[0]]: x }), (c[o[0]] = void 0)),
    { loaderData: c, errors: h, statusCode: p || 200, loaderHeaders: g }
  );
}
function Mf(n, i, o, s, d, c) {
  let { loaderData: h, errors: p } = Uv(i, o, s);
  return (
    d.forEach((v) => {
      let { key: g, match: x, controller: C } = v,
        w = c[g];
      if (
        (be(w, "Did not find corresponding fetcher result"),
        !(C && C.signal.aborted))
      )
        if (Jt(w)) {
          let R = qn(n.matches, x == null ? void 0 : x.route.id);
          (p && p[R.route.id]) || (p = { ...p, [R.route.id]: w.error }),
            n.fetchers.delete(g);
        } else if (Qn(w)) be(!1, "Unhandled fetcher revalidation redirect");
        else {
          let R = Sn(w.data);
          n.fetchers.set(g, R);
        }
    }),
    { loaderData: h, errors: p }
  );
}
function bf(n, i, o, s) {
  let d = Object.entries(i)
    .filter(([, c]) => c !== jh)
    .reduce((c, [h, p]) => ((c[h] = p), c), {});
  for (let c of o) {
    let h = c.route.id;
    if (
      (!i.hasOwnProperty(h) &&
        n.hasOwnProperty(h) &&
        c.route.loader &&
        (d[h] = n[h]),
      s && s.hasOwnProperty(h))
    )
      break;
  }
  return d;
}
function If(n) {
  return n
    ? Jt(n[1])
      ? { actionData: {} }
      : { actionData: { [n[0]]: n[1].data } }
    : {};
}
function qn(n, i) {
  return (
    (i ? n.slice(0, n.findIndex((s) => s.route.id === i) + 1) : [...n])
      .reverse()
      .find((s) => s.route.hasErrorBoundary === !0) || n[0]
  );
}
function zf(n) {
  let i =
    n.length === 1
      ? n[0]
      : n.find((o) => o.index || !o.path || o.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: i }],
    route: i,
  };
}
function ur(
  n,
  { pathname: i, routeId: o, method: s, type: d, message: c } = {}
) {
  let h = "Unknown Server Error",
    p = "Unknown @remix-run/router error";
  return (
    n === 400
      ? ((h = "Bad Request"),
        s && i && o
          ? (p = `You made a ${s} request to "${i}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`)
          : d === "invalid-body" && (p = "Unable to encode submission body"))
      : n === 403
      ? ((h = "Forbidden"), (p = `Route "${o}" does not match URL "${i}"`))
      : n === 404
      ? ((h = "Not Found"), (p = `No route matches URL "${i}"`))
      : n === 405 &&
        ((h = "Method Not Allowed"),
        s && i && o
          ? (p = `You made a ${s.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`)
          : s && (p = `Invalid request method "${s.toUpperCase()}"`)),
    new ia(n || 500, h, new Error(p), !0)
  );
}
function Wo(n) {
  let i = Object.entries(n);
  for (let o = i.length - 1; o >= 0; o--) {
    let [s, d] = i[o];
    if (Qn(d)) return { key: s, result: d };
  }
}
function Nh(n) {
  let i = typeof n == "string" ? Nn(n) : n;
  return Cn({ ...i, hash: "" });
}
function $v(n, i) {
  return n.pathname !== i.pathname || n.search !== i.search
    ? !1
    : n.hash === ""
    ? i.hash !== ""
    : n.hash === i.hash
    ? !0
    : i.hash !== "";
}
function Bv(n) {
  return _h(n.result) && Nv.has(n.result.status);
}
function Jt(n) {
  return n.type === "error";
}
function Qn(n) {
  return (n && n.type) === "redirect";
}
function Uf(n) {
  return (
    typeof n == "object" &&
    n != null &&
    "type" in n &&
    "data" in n &&
    "init" in n &&
    n.type === "DataWithResponseInit"
  );
}
function _h(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.headers == "object" &&
    typeof n.body < "u"
  );
}
function Vv(n) {
  return Cv.has(n.toUpperCase());
}
function yr(n) {
  return kv.has(n.toUpperCase());
}
function Du(n) {
  return new URLSearchParams(n).getAll("index").some((i) => i === "");
}
function Ri(n, i) {
  let o = typeof i == "string" ? Nn(i).search : i.search;
  if (n[n.length - 1].route.index && Du(o || "")) return n[n.length - 1];
  let s = Sh(n);
  return s[s.length - 1];
}
function $f(n) {
  let {
    formMethod: i,
    formAction: o,
    formEncType: s,
    text: d,
    formData: c,
    json: h,
  } = n;
  if (!(!i || !o || !s)) {
    if (d != null)
      return {
        formMethod: i,
        formAction: o,
        formEncType: s,
        formData: void 0,
        json: void 0,
        text: d,
      };
    if (c != null)
      return {
        formMethod: i,
        formAction: o,
        formEncType: s,
        formData: c,
        json: void 0,
        text: void 0,
      };
    if (h !== void 0)
      return {
        formMethod: i,
        formAction: o,
        formEncType: s,
        formData: void 0,
        json: h,
        text: void 0,
      };
  }
}
function iu(n, i) {
  return i
    ? {
        state: "loading",
        location: n,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
      }
    : {
        state: "loading",
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Hv(n, i) {
  return {
    state: "submitting",
    location: n,
    formMethod: i.formMethod,
    formAction: i.formAction,
    formEncType: i.formEncType,
    formData: i.formData,
    json: i.json,
    text: i.text,
  };
}
function ki(n, i) {
  return n
    ? {
        state: "loading",
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: i,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: i,
      };
}
function Wv(n, i) {
  return {
    state: "submitting",
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
    data: i ? i.data : void 0,
  };
}
function Sn(n) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n,
  };
}
function qv(n, i) {
  try {
    let o = n.sessionStorage.getItem(kh);
    if (o) {
      let s = JSON.parse(o);
      for (let [d, c] of Object.entries(s || {}))
        c && Array.isArray(c) && i.set(d, new Set(c || []));
    }
  } catch {}
}
function Qv(n, i) {
  if (i.size > 0) {
    let o = {};
    for (let [s, d] of i) o[s] = [...d];
    try {
      n.sessionStorage.setItem(kh, JSON.stringify(o));
    } catch (s) {
      jt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${s}).`
      );
    }
  }
}
function Kv() {
  let n,
    i,
    o = new Promise((s, d) => {
      (n = async (c) => {
        s(c);
        try {
          await o;
        } catch {}
      }),
        (i = async (c) => {
          d(c);
          try {
            await o;
          } catch {}
        });
    });
  return { promise: o, resolve: n, reject: i };
}
var Gn = _.createContext(null);
Gn.displayName = "DataRouter";
var Fi = _.createContext(null);
Fi.displayName = "DataRouterState";
var Ou = _.createContext({ isTransitioning: !1 });
Ou.displayName = "ViewTransition";
var Th = _.createContext(new Map());
Th.displayName = "Fetchers";
var Yv = _.createContext(null);
Yv.displayName = "Await";
var Er = _.createContext(null);
Er.displayName = "Navigation";
var ha = _.createContext(null);
ha.displayName = "Location";
var kr = _.createContext({ outlet: null, matches: [], isDataRoute: !1 });
kr.displayName = "Route";
var Fu = _.createContext(null);
Fu.displayName = "RouteError";
function Gv(n, { relative: i } = {}) {
  be(
    Il(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: s } = _.useContext(Er),
    { hash: d, pathname: c, search: h } = Ai(n, { relative: i }),
    p = c;
  return (
    o !== "/" && (p = c === "/" ? o : Dr([o, c])),
    s.createHref({ pathname: p, search: h, hash: d })
  );
}
function Il() {
  return _.useContext(ha) != null;
}
function Or() {
  return (
    be(
      Il(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    _.useContext(ha).location
  );
}
var Rh =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ph(n) {
  _.useContext(Er).static || _.useLayoutEffect(n);
}
function Au() {
  let { isDataRoute: n } = _.useContext(kr);
  return n ? dg() : Xv();
}
function Xv() {
  be(
    Il(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = _.useContext(Gn),
    { basename: i, navigator: o } = _.useContext(Er),
    { matches: s } = _.useContext(kr),
    { pathname: d } = Or(),
    c = JSON.stringify(ca(s)),
    h = _.useRef(!1);
  return (
    Ph(() => {
      h.current = !0;
    }),
    _.useCallback(
      (v, g = {}) => {
        if ((jt(h.current, Rh), !h.current)) return;
        if (typeof v == "number") {
          o.go(v);
          return;
        }
        let x = da(v, JSON.parse(c), d, g.relative === "path");
        n == null &&
          i !== "/" &&
          (x.pathname = x.pathname === "/" ? i : Dr([i, x.pathname])),
          (g.replace ? o.replace : o.push)(x, g.state, g);
      },
      [i, o, c, d, n]
    )
  );
}
var Jv = _.createContext(null);
function Zv(n) {
  let i = _.useContext(kr).outlet;
  return i && _.createElement(Jv.Provider, { value: n }, i);
}
function Ai(n, { relative: i } = {}) {
  let { matches: o } = _.useContext(kr),
    { pathname: s } = Or(),
    d = JSON.stringify(ca(o));
  return _.useMemo(() => da(n, JSON.parse(d), s, i === "path"), [n, d, s, i]);
}
function eg(n, i, o, s) {
  be(
    Il(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = _.useContext(Er),
    { matches: c } = _.useContext(kr),
    h = c[c.length - 1],
    p = h ? h.params : {},
    v = h ? h.pathname : "/",
    g = h ? h.pathnameBase : "/",
    x = h && h.route;
  {
    let z = (x && x.path) || "";
    Lh(
      v,
      !x || z.endsWith("*") || z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${
        z === "/" ? "*" : `${z}/*`
      }">.`
    );
  }
  let C = Or(),
    w;
  w = C;
  let R = w.pathname || "/",
    F = R;
  if (g !== "/") {
    let z = g.replace(/^\//, "").split("/");
    F = "/" + R.replace(/^\//, "").split("/").slice(z.length).join("/");
  }
  let I = En(n, { pathname: F });
  return (
    jt(
      x || I != null,
      `No routes matched location "${w.pathname}${w.search}${w.hash}" `
    ),
    jt(
      I == null ||
        I[I.length - 1].route.element !== void 0 ||
        I[I.length - 1].route.Component !== void 0 ||
        I[I.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    ig(
      I &&
        I.map((z) =>
          Object.assign({}, z, {
            params: Object.assign({}, p, z.params),
            pathname: Dr([
              g,
              d.encodeLocation
                ? d.encodeLocation(z.pathname).pathname
                : z.pathname,
            ]),
            pathnameBase:
              z.pathnameBase === "/"
                ? g
                : Dr([
                    g,
                    d.encodeLocation
                      ? d.encodeLocation(z.pathnameBase).pathname
                      : z.pathnameBase,
                  ]),
          })
        ),
      c,
      o,
      s
    )
  );
}
function tg() {
  let n = cg(),
    i = fa(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    o = n instanceof Error ? n.stack : null,
    s = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: s },
    c = { padding: "2px 4px", backgroundColor: s },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (h = _.createElement(
      _.Fragment,
      null,
      _.createElement("p", null, "💿 Hey developer 👋"),
      _.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        _.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        _.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    _.createElement(
      _.Fragment,
      null,
      _.createElement("h2", null, "Unexpected Application Error!"),
      _.createElement("h3", { style: { fontStyle: "italic" } }, i),
      o ? _.createElement("pre", { style: d }, o) : null,
      h
    )
  );
}
var rg = _.createElement(tg, null),
  ng = class extends _.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, i) {
      return i.location !== n.location ||
        (i.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation,
          };
    }
    componentDidCatch(n, i) {
      console.error(
        "React Router caught the following error during render",
        n,
        i
      );
    }
    render() {
      return this.state.error !== void 0
        ? _.createElement(
            kr.Provider,
            { value: this.props.routeContext },
            _.createElement(Fu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function lg({ routeContext: n, match: i, children: o }) {
  let s = _.useContext(Gn);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = i.route.id),
    _.createElement(kr.Provider, { value: n }, o)
  );
}
function ig(n, i = [], o = null, s = null) {
  if (n == null) {
    if (!o) return null;
    if (o.errors) n = o.matches;
    else if (i.length === 0 && !o.initialized && o.matches.length > 0)
      n = o.matches;
    else return null;
  }
  let d = n,
    c = o == null ? void 0 : o.errors;
  if (c != null) {
    let v = d.findIndex(
      (g) => g.route.id && (c == null ? void 0 : c[g.route.id]) !== void 0
    );
    be(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ),
      (d = d.slice(0, Math.min(d.length, v + 1)));
  }
  let h = !1,
    p = -1;
  if (o)
    for (let v = 0; v < d.length; v++) {
      let g = d[v];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (p = v),
        g.route.id)
      ) {
        let { loaderData: x, errors: C } = o,
          w =
            g.route.loader &&
            !x.hasOwnProperty(g.route.id) &&
            (!C || C[g.route.id] === void 0);
        if (g.route.lazy || w) {
          (h = !0), p >= 0 ? (d = d.slice(0, p + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((v, g, x) => {
    let C,
      w = !1,
      R = null,
      F = null;
    o &&
      ((C = c && g.route.id ? c[g.route.id] : void 0),
      (R = g.route.errorElement || rg),
      h &&
        (p < 0 && x === 0
          ? (Lh(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (w = !0),
            (F = null))
          : p === x &&
            ((w = !0), (F = g.route.hydrateFallbackElement || null))));
    let I = i.concat(d.slice(0, x + 1)),
      $ = () => {
        let z;
        return (
          C
            ? (z = R)
            : w
            ? (z = F)
            : g.route.Component
            ? (z = _.createElement(g.route.Component, null))
            : g.route.element
            ? (z = g.route.element)
            : (z = v),
          _.createElement(lg, {
            match: g,
            routeContext: { outlet: v, matches: I, isDataRoute: o != null },
            children: z,
          })
        );
      };
    return o && (g.route.ErrorBoundary || g.route.errorElement || x === 0)
      ? _.createElement(ng, {
          location: o.location,
          revalidation: o.revalidation,
          component: R,
          error: C,
          children: $(),
          routeContext: { outlet: null, matches: I, isDataRoute: !0 },
        })
      : $();
  }, null);
}
function Mu(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function og(n) {
  let i = _.useContext(Gn);
  return be(i, Mu(n)), i;
}
function ag(n) {
  let i = _.useContext(Fi);
  return be(i, Mu(n)), i;
}
function sg(n) {
  let i = _.useContext(kr);
  return be(i, Mu(n)), i;
}
function bu(n) {
  let i = sg(n),
    o = i.matches[i.matches.length - 1];
  return (
    be(
      o.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    o.route.id
  );
}
function ug() {
  return bu("useRouteId");
}
function cg() {
  var s;
  let n = _.useContext(Fu),
    i = ag("useRouteError"),
    o = bu("useRouteError");
  return n !== void 0 ? n : (s = i.errors) == null ? void 0 : s[o];
}
function dg() {
  let { router: n } = og("useNavigate"),
    i = bu("useNavigate"),
    o = _.useRef(!1);
  return (
    Ph(() => {
      o.current = !0;
    }),
    _.useCallback(
      async (d, c = {}) => {
        jt(o.current, Rh),
          o.current &&
            (typeof d == "number"
              ? n.navigate(d)
              : await n.navigate(d, { fromRouteId: i, ...c }));
      },
      [n, i]
    )
  );
}
var Bf = {};
function Lh(n, i, o) {
  !i && !Bf[n] && ((Bf[n] = !0), jt(!1, o));
}
var Vf = {};
function Hf(n, i) {
  !n && !Vf[i] && ((Vf[i] = !0), console.warn(i));
}
function fg(n) {
  let i = {
    hasErrorBoundary:
      n.hasErrorBoundary || n.ErrorBoundary != null || n.errorElement != null,
  };
  return (
    n.Component &&
      (n.element &&
        jt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(i, {
        element: _.createElement(n.Component),
        Component: void 0,
      })),
    n.HydrateFallback &&
      (n.hydrateFallbackElement &&
        jt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(i, {
        hydrateFallbackElement: _.createElement(n.HydrateFallback),
        HydrateFallback: void 0,
      })),
    n.ErrorBoundary &&
      (n.errorElement &&
        jt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(i, {
        errorElement: _.createElement(n.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    i
  );
}
var hg = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((n, i) => {
        (this.resolve = (o) => {
          this.status === "pending" && ((this.status = "resolved"), n(o));
        }),
          (this.reject = (o) => {
            this.status === "pending" && ((this.status = "rejected"), i(o));
          });
      }));
  }
};
function pg({ router: n, flushSync: i }) {
  let [o, s] = _.useState(n.state),
    [d, c] = _.useState(),
    [h, p] = _.useState({ isTransitioning: !1 }),
    [v, g] = _.useState(),
    [x, C] = _.useState(),
    [w, R] = _.useState(),
    F = _.useRef(new Map()),
    I = _.useCallback(
      (ee, { deletedFetchers: pe, flushSync: T, viewTransitionOpts: ue }) => {
        pe.forEach((de) => F.current.delete(de)),
          ee.fetchers.forEach((de, Ne) => {
            de.data !== void 0 && F.current.set(Ne, de.data);
          }),
          Hf(
            T === !1 || i != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let Ee =
          n.window != null &&
          n.window.document != null &&
          typeof n.window.document.startViewTransition == "function";
        if (
          (Hf(
            ue == null || Ee,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !ue || !Ee)
        ) {
          i && T ? i(() => s(ee)) : _.startTransition(() => s(ee));
          return;
        }
        if (i && T) {
          i(() => {
            x && (v && v.resolve(), x.skipTransition()),
              p({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ue.currentLocation,
                nextLocation: ue.nextLocation,
              });
          });
          let de = n.window.document.startViewTransition(() => {
            i(() => s(ee));
          });
          de.finished.finally(() => {
            i(() => {
              g(void 0), C(void 0), c(void 0), p({ isTransitioning: !1 });
            });
          }),
            i(() => C(de));
          return;
        }
        x
          ? (v && v.resolve(),
            x.skipTransition(),
            R({
              state: ee,
              currentLocation: ue.currentLocation,
              nextLocation: ue.nextLocation,
            }))
          : (c(ee),
            p({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ue.currentLocation,
              nextLocation: ue.nextLocation,
            }));
      },
      [n.window, i, x, v]
    );
  _.useLayoutEffect(() => n.subscribe(I), [n, I]),
    _.useEffect(() => {
      h.isTransitioning && !h.flushSync && g(new hg());
    }, [h]),
    _.useEffect(() => {
      if (v && d && n.window) {
        let ee = d,
          pe = v.promise,
          T = n.window.document.startViewTransition(async () => {
            _.startTransition(() => s(ee)), await pe;
          });
        T.finished.finally(() => {
          g(void 0), C(void 0), c(void 0), p({ isTransitioning: !1 });
        }),
          C(T);
      }
    }, [d, v, n.window]),
    _.useEffect(() => {
      v && d && o.location.key === d.location.key && v.resolve();
    }, [v, x, o.location, d]),
    _.useEffect(() => {
      !h.isTransitioning &&
        w &&
        (c(w.state),
        p({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        R(void 0));
    }, [h.isTransitioning, w]);
  let $ = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (ee) => n.navigate(ee),
        push: (ee, pe, T) =>
          n.navigate(ee, {
            state: pe,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
        replace: (ee, pe, T) =>
          n.navigate(ee, {
            replace: !0,
            state: pe,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
      }),
      [n]
    ),
    z = n.basename || "/",
    W = _.useMemo(
      () => ({ router: n, navigator: $, static: !1, basename: z }),
      [n, $, z]
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      Gn.Provider,
      { value: W },
      _.createElement(
        Fi.Provider,
        { value: o },
        _.createElement(
          Th.Provider,
          { value: F.current },
          _.createElement(
            Ou.Provider,
            { value: h },
            _.createElement(
              yg,
              {
                basename: z,
                location: o.location,
                navigationType: o.historyAction,
                navigator: $,
              },
              _.createElement(mg, {
                routes: n.routes,
                future: n.future,
                state: o,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var mg = _.memo(vg);
function vg({ routes: n, future: i, state: o }) {
  return eg(n, void 0, o, i);
}
function gg({ to: n, replace: i, state: o, relative: s }) {
  be(
    Il(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = _.useContext(Er);
  jt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: c } = _.useContext(kr),
    { pathname: h } = Or(),
    p = Au(),
    v = da(n, ca(c), h, s === "path"),
    g = JSON.stringify(v);
  return (
    _.useEffect(() => {
      p(JSON.parse(g), { replace: i, state: o, relative: s });
    }, [p, g, s, i, o]),
    null
  );
}
function Dh(n) {
  return Zv(n.context);
}
function yg({
  basename: n = "/",
  children: i = null,
  location: o,
  navigationType: s = "POP",
  navigator: d,
  static: c = !1,
}) {
  be(
    !Il(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = n.replace(/^\/*/, "/"),
    p = _.useMemo(
      () => ({ basename: h, navigator: d, static: c, future: {} }),
      [h, d, c]
    );
  typeof o == "string" && (o = Nn(o));
  let {
      pathname: v = "/",
      search: g = "",
      hash: x = "",
      state: C = null,
      key: w = "default",
    } = o,
    R = _.useMemo(() => {
      let F = Sr(v, h);
      return F == null
        ? null
        : {
            location: { pathname: F, search: g, hash: x, state: C, key: w },
            navigationType: s,
          };
    }, [h, v, g, x, C, w, s]);
  return (
    jt(
      R != null,
      `<Router basename="${h}"> is not able to match the URL "${v}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    R == null
      ? null
      : _.createElement(
          Er.Provider,
          { value: p },
          _.createElement(ha.Provider, { children: i, value: R })
        )
  );
}
var Go = "get",
  Xo = "application/x-www-form-urlencoded";
function pa(n) {
  return n != null && typeof n.tagName == "string";
}
function xg(n) {
  return pa(n) && n.tagName.toLowerCase() === "button";
}
function wg(n) {
  return pa(n) && n.tagName.toLowerCase() === "form";
}
function Sg(n) {
  return pa(n) && n.tagName.toLowerCase() === "input";
}
function Eg(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function kg(n, i) {
  return n.button === 0 && (!i || i === "_self") && !Eg(n);
}
var qo = null;
function jg() {
  if (qo === null)
    try {
      new FormData(document.createElement("form"), 0), (qo = !1);
    } catch {
      qo = !0;
    }
  return qo;
}
var Cg = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ou(n) {
  return n != null && !Cg.has(n)
    ? (jt(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xo}"`
      ),
      null)
    : n;
}
function Ng(n, i) {
  let o, s, d, c, h;
  if (wg(n)) {
    let p = n.getAttribute("action");
    (s = p ? Sr(p, i) : null),
      (o = n.getAttribute("method") || Go),
      (d = ou(n.getAttribute("enctype")) || Xo),
      (c = new FormData(n));
  } else if (xg(n) || (Sg(n) && (n.type === "submit" || n.type === "image"))) {
    let p = n.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = n.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((s = v ? Sr(v, i) : null),
      (o = n.getAttribute("formmethod") || p.getAttribute("method") || Go),
      (d =
        ou(n.getAttribute("formenctype")) ||
        ou(p.getAttribute("enctype")) ||
        Xo),
      (c = new FormData(p, n)),
      !jg())
    ) {
      let { name: g, type: x, value: C } = n;
      if (x === "image") {
        let w = g ? `${g}.` : "";
        c.append(`${w}x`, "0"), c.append(`${w}y`, "0");
      } else g && c.append(g, C);
    }
  } else {
    if (pa(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (o = Go), (s = null), (d = Xo), (h = n);
  }
  return (
    c && d === "text/plain" && ((h = c), (c = void 0)),
    { action: s, method: o.toLowerCase(), encType: d, formData: c, body: h }
  );
}
function Iu(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
async function _g(n, i) {
  if (n.id in i) return i[n.id];
  try {
    let o = await import(n.module);
    return (i[n.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Tg(n) {
  return n == null
    ? !1
    : n.href == null
    ? n.rel === "preload" &&
      typeof n.imageSrcSet == "string" &&
      typeof n.imageSizes == "string"
    : typeof n.rel == "string" && typeof n.href == "string";
}
async function Rg(n, i, o) {
  let s = await Promise.all(
    n.map(async (d) => {
      let c = i.routes[d.route.id];
      if (c) {
        let h = await _g(c, o);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Og(
    s
      .flat(1)
      .filter(Tg)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" }
      )
  );
}
function Wf(n, i, o, s, d, c) {
  let h = (v, g) => (o[g] ? v.route.id !== o[g].route.id : !0),
    p = (v, g) => {
      var x;
      return (
        o[g].pathname !== v.pathname ||
        (((x = o[g].route.path) == null ? void 0 : x.endsWith("*")) &&
          o[g].params["*"] !== v.params["*"])
      );
    };
  return c === "assets"
    ? i.filter((v, g) => h(v, g) || p(v, g))
    : c === "data"
    ? i.filter((v, g) => {
        var C;
        let x = s.routes[v.route.id];
        if (!x || !x.hasLoader) return !1;
        if (h(v, g) || p(v, g)) return !0;
        if (v.route.shouldRevalidate) {
          let w = v.route.shouldRevalidate({
            currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
            currentParams: ((C = o[0]) == null ? void 0 : C.params) || {},
            nextUrl: new URL(n, window.origin),
            nextParams: v.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof w == "boolean") return w;
        }
        return !0;
      })
    : [];
}
function Pg(n, i) {
  return Lg(
    n
      .map((o) => {
        let s = i.routes[o.route.id];
        if (!s) return [];
        let d = [s.module];
        return s.imports && (d = d.concat(s.imports)), d;
      })
      .flat(1)
  );
}
function Lg(n) {
  return [...new Set(n)];
}
function Dg(n) {
  let i = {},
    o = Object.keys(n).sort();
  for (let s of o) i[s] = n[s];
  return i;
}
function Og(n, i) {
  let o = new Set();
  return (
    new Set(i),
    n.reduce((s, d) => {
      let c = JSON.stringify(Dg(d));
      return o.has(c) || (o.add(c), s.push({ key: c, link: d })), s;
    }, [])
  );
}
function Fg(n) {
  let i =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : n;
  return (
    i.pathname === "/"
      ? (i.pathname = "_root.data")
      : (i.pathname = `${i.pathname.replace(/\/$/, "")}.data`),
    i
  );
}
function Ag() {
  let n = _.useContext(Gn);
  return (
    Iu(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    n
  );
}
function Mg() {
  let n = _.useContext(Fi);
  return (
    Iu(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    n
  );
}
var zu = _.createContext(void 0);
zu.displayName = "FrameworkContext";
function Oh() {
  let n = _.useContext(zu);
  return (
    Iu(n, "You must render this element inside a <HydratedRouter> element"), n
  );
}
function bg(n, i) {
  let o = _.useContext(zu),
    [s, d] = _.useState(!1),
    [c, h] = _.useState(!1),
    {
      onFocus: p,
      onBlur: v,
      onMouseEnter: g,
      onMouseLeave: x,
      onTouchStart: C,
    } = i,
    w = _.useRef(null);
  _.useEffect(() => {
    if ((n === "render" && h(!0), n === "viewport")) {
      let I = (z) => {
          z.forEach((W) => {
            h(W.isIntersecting);
          });
        },
        $ = new IntersectionObserver(I, { threshold: 0.5 });
      return (
        w.current && $.observe(w.current),
        () => {
          $.disconnect();
        }
      );
    }
  }, [n]),
    _.useEffect(() => {
      if (s) {
        let I = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(I);
        };
      }
    }, [s]);
  let R = () => {
      d(!0);
    },
    F = () => {
      d(!1), h(!1);
    };
  return o
    ? n !== "intent"
      ? [c, w, {}]
      : [
          c,
          w,
          {
            onFocus: ji(p, R),
            onBlur: ji(v, F),
            onMouseEnter: ji(g, R),
            onMouseLeave: ji(x, F),
            onTouchStart: ji(C, R),
          },
        ]
    : [!1, w, {}];
}
function ji(n, i) {
  return (o) => {
    n && n(o), o.defaultPrevented || i(o);
  };
}
function Ig({ page: n, ...i }) {
  let { router: o } = Ag(),
    s = _.useMemo(() => En(o.routes, n, o.basename), [o.routes, n, o.basename]);
  return s
    ? _.createElement(Ug, { page: n, matches: s, ...i })
    : (console.warn(`Tried to prefetch ${n} but no routes matched.`), null);
}
function zg(n) {
  let { manifest: i, routeModules: o } = Oh(),
    [s, d] = _.useState([]);
  return (
    _.useEffect(() => {
      let c = !1;
      return (
        Rg(n, i, o).then((h) => {
          c || d(h);
        }),
        () => {
          c = !0;
        }
      );
    }, [n, i, o]),
    s
  );
}
function Ug({ page: n, matches: i, ...o }) {
  let s = Or(),
    { manifest: d, routeModules: c } = Oh(),
    { loaderData: h, matches: p } = Mg(),
    v = _.useMemo(() => Wf(n, i, p, d, s, "data"), [n, i, p, d, s]),
    g = _.useMemo(() => Wf(n, i, p, d, s, "assets"), [n, i, p, d, s]),
    x = _.useMemo(() => {
      if (n === s.pathname + s.search + s.hash) return [];
      let R = new Set(),
        F = !1;
      if (
        (i.forEach(($) => {
          var W;
          let z = d.routes[$.route.id];
          !z ||
            !z.hasLoader ||
            ((!v.some((ee) => ee.route.id === $.route.id) &&
              $.route.id in h &&
              (W = c[$.route.id]) != null &&
              W.shouldRevalidate) ||
            z.hasClientLoader
              ? (F = !0)
              : R.add($.route.id));
        }),
        R.size === 0)
      )
        return [];
      let I = Fg(n);
      return (
        F &&
          R.size > 0 &&
          I.searchParams.set(
            "_routes",
            i
              .filter(($) => R.has($.route.id))
              .map(($) => $.route.id)
              .join(",")
          ),
        [I.pathname + I.search]
      );
    }, [h, s, d, v, i, n, c]),
    C = _.useMemo(() => Pg(g, d), [g, d]),
    w = zg(g);
  return _.createElement(
    _.Fragment,
    null,
    x.map((R) =>
      _.createElement("link", {
        key: R,
        rel: "prefetch",
        as: "fetch",
        href: R,
        ...o,
      })
    ),
    C.map((R) =>
      _.createElement("link", { key: R, rel: "modulepreload", href: R, ...o })
    ),
    w.map(({ key: R, link: F }) => _.createElement("link", { key: R, ...F }))
  );
}
function $g(...n) {
  return (i) => {
    n.forEach((o) => {
      typeof o == "function" ? o(i) : o != null && (o.current = i);
    });
  };
}
var Fh =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Fh && (window.__reactRouterVersion = "7.0.2");
} catch {}
function Bg(n, i) {
  return Pv({
    basename: i == null ? void 0 : i.basename,
    future: i == null ? void 0 : i.future,
    history: ev({ window: i == null ? void 0 : i.window }),
    hydrationData: Vg(),
    routes: n,
    mapRouteProperties: fg,
    dataStrategy: i == null ? void 0 : i.dataStrategy,
    patchRoutesOnNavigation: i == null ? void 0 : i.patchRoutesOnNavigation,
    window: i == null ? void 0 : i.window,
  }).initialize();
}
function Vg() {
  let n = window == null ? void 0 : window.__staticRouterHydrationData;
  return n && n.errors && (n = { ...n, errors: Hg(n.errors) }), n;
}
function Hg(n) {
  if (!n) return null;
  let i = Object.entries(n),
    o = {};
  for (let [s, d] of i)
    if (d && d.__type === "RouteErrorResponse")
      o[s] = new ia(d.status, d.statusText, d.data, d.internal === !0);
    else if (d && d.__type === "Error") {
      if (d.__subType) {
        let c = window[d.__subType];
        if (typeof c == "function")
          try {
            let h = new c(d.message);
            (h.stack = ""), (o[s] = h);
          } catch {}
      }
      if (o[s] == null) {
        let c = new Error(d.message);
        (c.stack = ""), (o[s] = c);
      }
    } else o[s] = d;
  return o;
}
var Ah = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  At = _.forwardRef(function (
    {
      onClick: i,
      discover: o = "render",
      prefetch: s = "none",
      relative: d,
      reloadDocument: c,
      replace: h,
      state: p,
      target: v,
      to: g,
      preventScrollReset: x,
      viewTransition: C,
      ...w
    },
    R
  ) {
    let { basename: F } = _.useContext(Er),
      I = typeof g == "string" && Ah.test(g),
      $,
      z = !1;
    if (typeof g == "string" && I && (($ = g), Fh))
      try {
        let Ne = new URL(window.location.href),
          Re = g.startsWith("//") ? new URL(Ne.protocol + g) : new URL(g),
          Xe = Sr(Re.pathname, F);
        Re.origin === Ne.origin && Xe != null
          ? (g = Xe + Re.search + Re.hash)
          : (z = !0);
      } catch {
        jt(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let W = Gv(g, { relative: d }),
      [ee, pe, T] = bg(s, w),
      ue = Qg(g, {
        replace: h,
        state: p,
        target: v,
        preventScrollReset: x,
        relative: d,
        viewTransition: C,
      });
    function Ee(Ne) {
      i && i(Ne), Ne.defaultPrevented || ue(Ne);
    }
    let de = _.createElement("a", {
      ...w,
      ...T,
      href: $ || W,
      onClick: z || c ? i : Ee,
      ref: $g(R, pe),
      target: v,
      "data-discover": !I && o === "render" ? "true" : void 0,
    });
    return ee && !I
      ? _.createElement(_.Fragment, null, de, _.createElement(Ig, { page: W }))
      : de;
  });
At.displayName = "Link";
var Fl = _.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: o = !1,
    className: s = "",
    end: d = !1,
    style: c,
    to: h,
    viewTransition: p,
    children: v,
    ...g
  },
  x
) {
  let C = Ai(h, { relative: g.relative }),
    w = Or(),
    R = _.useContext(Fi),
    { navigator: F, basename: I } = _.useContext(Er),
    $ = R != null && Jg(C) && p === !0,
    z = F.encodeLocation ? F.encodeLocation(C).pathname : C.pathname,
    W = w.pathname,
    ee =
      R && R.navigation && R.navigation.location
        ? R.navigation.location.pathname
        : null;
  o ||
    ((W = W.toLowerCase()),
    (ee = ee ? ee.toLowerCase() : null),
    (z = z.toLowerCase())),
    ee && I && (ee = Sr(ee, I) || ee);
  const pe = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
  let T = W === z || (!d && W.startsWith(z) && W.charAt(pe) === "/"),
    ue =
      ee != null &&
      (ee === z || (!d && ee.startsWith(z) && ee.charAt(z.length) === "/")),
    Ee = { isActive: T, isPending: ue, isTransitioning: $ },
    de = T ? i : void 0,
    Ne;
  typeof s == "function"
    ? (Ne = s(Ee))
    : (Ne = [
        s,
        T ? "active" : null,
        ue ? "pending" : null,
        $ ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Re = typeof c == "function" ? c(Ee) : c;
  return _.createElement(
    At,
    {
      ...g,
      "aria-current": de,
      className: Ne,
      ref: x,
      style: Re,
      to: h,
      viewTransition: p,
    },
    typeof v == "function" ? v(Ee) : v
  );
});
Fl.displayName = "NavLink";
var Wg = _.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: i,
      navigate: o,
      reloadDocument: s,
      replace: d,
      state: c,
      method: h = Go,
      action: p,
      onSubmit: v,
      relative: g,
      preventScrollReset: x,
      viewTransition: C,
      ...w
    },
    R
  ) => {
    let F = Gg(),
      I = Xg(p, { relative: g }),
      $ = h.toLowerCase() === "get" ? "get" : "post",
      z = typeof p == "string" && Ah.test(p),
      W = (ee) => {
        if ((v && v(ee), ee.defaultPrevented)) return;
        ee.preventDefault();
        let pe = ee.nativeEvent.submitter,
          T = (pe == null ? void 0 : pe.getAttribute("formmethod")) || h;
        F(pe || ee.currentTarget, {
          fetcherKey: i,
          method: T,
          navigate: o,
          replace: d,
          state: c,
          relative: g,
          preventScrollReset: x,
          viewTransition: C,
        });
      };
    return _.createElement("form", {
      ref: R,
      method: $,
      action: I,
      onSubmit: s ? v : W,
      ...w,
      "data-discover": !z && n === "render" ? "true" : void 0,
    });
  }
);
Wg.displayName = "Form";
function qg(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mh(n) {
  let i = _.useContext(Gn);
  return be(i, qg(n)), i;
}
function Qg(
  n,
  {
    target: i,
    replace: o,
    state: s,
    preventScrollReset: d,
    relative: c,
    viewTransition: h,
  } = {}
) {
  let p = Au(),
    v = Or(),
    g = Ai(n, { relative: c });
  return _.useCallback(
    (x) => {
      if (kg(x, i)) {
        x.preventDefault();
        let C = o !== void 0 ? o : Cn(v) === Cn(g);
        p(n, {
          replace: C,
          state: s,
          preventScrollReset: d,
          relative: c,
          viewTransition: h,
        });
      }
    },
    [v, p, g, o, s, i, n, d, c, h]
  );
}
var Kg = 0,
  Yg = () => `__${String(++Kg)}__`;
function Gg() {
  let { router: n } = Mh("useSubmit"),
    { basename: i } = _.useContext(Er),
    o = ug();
  return _.useCallback(
    async (s, d = {}) => {
      let { action: c, method: h, encType: p, formData: v, body: g } = Ng(s, i);
      if (d.navigate === !1) {
        let x = d.fetcherKey || Yg();
        await n.fetch(x, o, d.action || c, {
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: g,
          formMethod: d.method || h,
          formEncType: d.encType || p,
          flushSync: d.flushSync,
        });
      } else
        await n.navigate(d.action || c, {
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: g,
          formMethod: d.method || h,
          formEncType: d.encType || p,
          replace: d.replace,
          state: d.state,
          fromRouteId: o,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [n, i, o]
  );
}
function Xg(n, { relative: i } = {}) {
  let { basename: o } = _.useContext(Er),
    s = _.useContext(kr);
  be(s, "useFormAction must be used inside a RouteContext");
  let [d] = s.matches.slice(-1),
    c = { ...Ai(n || ".", { relative: i }) },
    h = Or();
  if (n == null) {
    c.search = h.search;
    let p = new URLSearchParams(c.search),
      v = p.getAll("index");
    if (v.some((x) => x === "")) {
      p.delete("index"),
        v.filter((C) => C).forEach((C) => p.append("index", C));
      let x = p.toString();
      c.search = x ? `?${x}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      d.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (c.pathname = c.pathname === "/" ? o : Dr([o, c.pathname])),
    Cn(c)
  );
}
function Jg(n, i = {}) {
  let o = _.useContext(Ou);
  be(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = Mh("useViewTransitionState"),
    d = Ai(n, { relative: i.relative });
  if (!o.isTransitioning) return !1;
  let c = Sr(o.currentLocation.pathname, s) || o.currentLocation.pathname,
    h = Sr(o.nextLocation.pathname, s) || o.nextLocation.pathname;
  return la(d.pathname, h) != null || la(d.pathname, c) != null;
}
new TextEncoder();
var Zg = yh();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ey(n) {
  return _.createElement(pg, { flushSync: Zg.flushSync, ...n });
}
const ty = () =>
  f.jsxs("footer", {
    className: "footer footer-center bg-black text-gray-200 rounded p-10",
    children: [
      f.jsxs("nav", {
        className: "grid grid-flow-col gap-4",
        children: [
          f.jsx("a", { className: "link link-hover", children: "About us" }),
          f.jsx("a", { className: "link link-hover", children: "Contact" }),
          f.jsx("a", { className: "link link-hover", children: "Jobs" }),
          f.jsx("a", { className: "link link-hover", children: "Press kit" }),
        ],
      }),
      f.jsx("nav", {
        children: f.jsxs("div", {
          className: "grid grid-flow-col gap-4",
          children: [
            f.jsx("a", {
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                className: "fill-current",
                children: f.jsx("path", {
                  d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                }),
              }),
            }),
            f.jsx("a", {
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                className: "fill-current",
                children: f.jsx("path", {
                  d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
                }),
              }),
            }),
            f.jsx("a", {
              children: f.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                className: "fill-current",
                children: f.jsx("path", {
                  d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                }),
              }),
            }),
          ],
        }),
      }),
      f.jsx("aside", {
        children: f.jsxs("p", {
          children: [
            "Copyright © ",
            new Date().getFullYear(),
            " - All right reserved by Blood Aid",
          ],
        }),
      }),
    ],
  });
var au = { exports: {} },
  su,
  qf;
function ry() {
  if (qf) return su;
  qf = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (su = n), su;
}
var uu, Qf;
function ny() {
  if (Qf) return uu;
  Qf = 1;
  var n = ry();
  function i() {}
  function o() {}
  return (
    (o.resetWarningCache = i),
    (uu = function () {
      function s(h, p, v, g, x, C) {
        if (C !== n) {
          var w = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((w.name = "Invariant Violation"), w);
        }
      }
      s.isRequired = s;
      function d() {
        return s;
      }
      var c = {
        array: s,
        bigint: s,
        bool: s,
        func: s,
        number: s,
        object: s,
        string: s,
        symbol: s,
        any: s,
        arrayOf: d,
        element: s,
        elementType: s,
        instanceOf: d,
        node: s,
        objectOf: d,
        oneOf: d,
        oneOfType: d,
        shape: d,
        exact: d,
        checkPropTypes: o,
        resetWarningCache: i,
      };
      return (c.PropTypes = c), c;
    }),
    uu
  );
}
var Kf;
function ly() {
  return Kf || ((Kf = 1), (au.exports = ny()())), au.exports;
}
var iy = ly();
const nt = Oi(iy);
let oy = { data: "" },
  ay = (n) =>
    typeof window == "object"
      ? (
          (n ? n.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (n || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : n || oy,
  sy = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  uy = /\/\*[^]*?\*\/|  +/g,
  Yf = /\n+/g,
  kn = (n, i) => {
    let o = "",
      s = "",
      d = "";
    for (let c in n) {
      let h = n[c];
      c[0] == "@"
        ? c[1] == "i"
          ? (o = c + " " + h + ";")
          : (s +=
              c[1] == "f"
                ? kn(h, c)
                : c + "{" + kn(h, c[1] == "k" ? "" : i) + "}")
        : typeof h == "object"
        ? (s += kn(
            h,
            i
              ? i.replace(/([^,])+/g, (p) =>
                  c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (v) =>
                    /&/.test(v) ? v.replace(/&/g, p) : p ? p + " " + v : v
                  )
                )
              : c
          ))
        : h != null &&
          ((c = /^--/.test(c) ? c : c.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (d += kn.p ? kn.p(c, h) : c + ":" + h + ";"));
    }
    return o + (i && d ? i + "{" + d + "}" : d) + s;
  },
  qr = {},
  bh = (n) => {
    if (typeof n == "object") {
      let i = "";
      for (let o in n) i += o + bh(n[o]);
      return i;
    }
    return n;
  },
  cy = (n, i, o, s, d) => {
    let c = bh(n),
      h =
        qr[c] ||
        (qr[c] = ((v) => {
          let g = 0,
            x = 11;
          for (; g < v.length; ) x = (101 * x + v.charCodeAt(g++)) >>> 0;
          return "go" + x;
        })(c));
    if (!qr[h]) {
      let v =
        c !== n
          ? n
          : ((g) => {
              let x,
                C,
                w = [{}];
              for (; (x = sy.exec(g.replace(uy, ""))); )
                x[4]
                  ? w.shift()
                  : x[3]
                  ? ((C = x[3].replace(Yf, " ").trim()),
                    w.unshift((w[0][C] = w[0][C] || {})))
                  : (w[0][x[1]] = x[2].replace(Yf, " ").trim());
              return w[0];
            })(n);
      qr[h] = kn(d ? { ["@keyframes " + h]: v } : v, o ? "" : "." + h);
    }
    let p = o && qr.g ? qr.g : null;
    return (
      o && (qr.g = qr[h]),
      ((v, g, x, C) => {
        C
          ? (g.data = g.data.replace(C, v))
          : g.data.indexOf(v) === -1 && (g.data = x ? v + g.data : g.data + v);
      })(qr[h], i, s, p),
      h
    );
  },
  dy = (n, i, o) =>
    n.reduce((s, d, c) => {
      let h = i[c];
      if (h && h.call) {
        let p = h(o),
          v = (p && p.props && p.props.className) || (/^go/.test(p) && p);
        h = v
          ? "." + v
          : p && typeof p == "object"
          ? p.props
            ? ""
            : kn(p, "")
          : p === !1
          ? ""
          : p;
      }
      return s + d + (h ?? "");
    }, "");
function ma(n) {
  let i = this || {},
    o = n.call ? n(i.p) : n;
  return cy(
    o.unshift
      ? o.raw
        ? dy(o, [].slice.call(arguments, 1), i.p)
        : o.reduce((s, d) => Object.assign(s, d && d.call ? d(i.p) : d), {})
      : o,
    ay(i.target),
    i.g,
    i.o,
    i.k
  );
}
let Ih, ku, ju;
ma.bind({ g: 1 });
let Kr = ma.bind({ k: 1 });
function fy(n, i, o, s) {
  (kn.p = i), (Ih = n), (ku = o), (ju = s);
}
function _n(n, i) {
  let o = this || {};
  return function () {
    let s = arguments;
    function d(c, h) {
      let p = Object.assign({}, c),
        v = p.className || d.className;
      (o.p = Object.assign({ theme: ku && ku() }, p)),
        (o.o = / *go\d+/.test(v)),
        (p.className = ma.apply(o, s) + (v ? " " + v : ""));
      let g = n;
      return (
        n[0] && ((g = p.as || n), delete p.as), ju && g[0] && ju(p), Ih(g, p)
      );
    }
    return d;
  };
}
var hy = (n) => typeof n == "function",
  oa = (n, i) => (hy(n) ? n(i) : n),
  py = (() => {
    let n = 0;
    return () => (++n).toString();
  })(),
  zh = (() => {
    let n;
    return () => {
      if (n === void 0 && typeof window < "u") {
        let i = matchMedia("(prefers-reduced-motion: reduce)");
        n = !i || i.matches;
      }
      return n;
    };
  })(),
  my = 20,
  Uh = (n, i) => {
    switch (i.type) {
      case 0:
        return { ...n, toasts: [i.toast, ...n.toasts].slice(0, my) };
      case 1:
        return {
          ...n,
          toasts: n.toasts.map((c) =>
            c.id === i.toast.id ? { ...c, ...i.toast } : c
          ),
        };
      case 2:
        let { toast: o } = i;
        return Uh(n, {
          type: n.toasts.find((c) => c.id === o.id) ? 1 : 0,
          toast: o,
        });
      case 3:
        let { toastId: s } = i;
        return {
          ...n,
          toasts: n.toasts.map((c) =>
            c.id === s || s === void 0
              ? { ...c, dismissed: !0, visible: !1 }
              : c
          ),
        };
      case 4:
        return i.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((c) => c.id !== i.toastId) };
      case 5:
        return { ...n, pausedAt: i.time };
      case 6:
        let d = i.time - (n.pausedAt || 0);
        return {
          ...n,
          pausedAt: void 0,
          toasts: n.toasts.map((c) => ({
            ...c,
            pauseDuration: c.pauseDuration + d,
          })),
        };
    }
  },
  Jo = [],
  Zo = { toasts: [], pausedAt: void 0 },
  Xn = (n) => {
    (Zo = Uh(Zo, n)),
      Jo.forEach((i) => {
        i(Zo);
      });
  },
  vy = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  gy = (n = {}) => {
    let [i, o] = _.useState(Zo);
    _.useEffect(
      () => (
        Jo.push(o),
        () => {
          let d = Jo.indexOf(o);
          d > -1 && Jo.splice(d, 1);
        }
      ),
      [i]
    );
    let s = i.toasts.map((d) => {
      var c, h, p;
      return {
        ...n,
        ...n[d.type],
        ...d,
        removeDelay:
          d.removeDelay ||
          ((c = n[d.type]) == null ? void 0 : c.removeDelay) ||
          (n == null ? void 0 : n.removeDelay),
        duration:
          d.duration ||
          ((h = n[d.type]) == null ? void 0 : h.duration) ||
          (n == null ? void 0 : n.duration) ||
          vy[d.type],
        style: {
          ...n.style,
          ...((p = n[d.type]) == null ? void 0 : p.style),
          ...d.style,
        },
      };
    });
    return { ...i, toasts: s };
  },
  yy = (n, i = "blank", o) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: i,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: n,
    pauseDuration: 0,
    ...o,
    id: (o == null ? void 0 : o.id) || py(),
  }),
  Mi = (n) => (i, o) => {
    let s = yy(i, n, o);
    return Xn({ type: 2, toast: s }), s.id;
  },
  bt = (n, i) => Mi("blank")(n, i);
bt.error = Mi("error");
bt.success = Mi("success");
bt.loading = Mi("loading");
bt.custom = Mi("custom");
bt.dismiss = (n) => {
  Xn({ type: 3, toastId: n });
};
bt.remove = (n) => Xn({ type: 4, toastId: n });
bt.promise = (n, i, o) => {
  let s = bt.loading(i.loading, { ...o, ...(o == null ? void 0 : o.loading) });
  return (
    typeof n == "function" && (n = n()),
    n
      .then((d) => {
        let c = i.success ? oa(i.success, d) : void 0;
        return (
          c
            ? bt.success(c, {
                id: s,
                ...o,
                ...(o == null ? void 0 : o.success),
              })
            : bt.dismiss(s),
          d
        );
      })
      .catch((d) => {
        let c = i.error ? oa(i.error, d) : void 0;
        c
          ? bt.error(c, { id: s, ...o, ...(o == null ? void 0 : o.error) })
          : bt.dismiss(s);
      }),
    n
  );
};
var xy = (n, i) => {
    Xn({ type: 1, toast: { id: n, height: i } });
  },
  wy = () => {
    Xn({ type: 5, time: Date.now() });
  },
  Pi = new Map(),
  Sy = 1e3,
  Ey = (n, i = Sy) => {
    if (Pi.has(n)) return;
    let o = setTimeout(() => {
      Pi.delete(n), Xn({ type: 4, toastId: n });
    }, i);
    Pi.set(n, o);
  },
  ky = (n) => {
    let { toasts: i, pausedAt: o } = gy(n);
    _.useEffect(() => {
      if (o) return;
      let c = Date.now(),
        h = i.map((p) => {
          if (p.duration === 1 / 0) return;
          let v = (p.duration || 0) + p.pauseDuration - (c - p.createdAt);
          if (v < 0) {
            p.visible && bt.dismiss(p.id);
            return;
          }
          return setTimeout(() => bt.dismiss(p.id), v);
        });
      return () => {
        h.forEach((p) => p && clearTimeout(p));
      };
    }, [i, o]);
    let s = _.useCallback(() => {
        o && Xn({ type: 6, time: Date.now() });
      }, [o]),
      d = _.useCallback(
        (c, h) => {
          let {
              reverseOrder: p = !1,
              gutter: v = 8,
              defaultPosition: g,
            } = h || {},
            x = i.filter(
              (R) => (R.position || g) === (c.position || g) && R.height
            ),
            C = x.findIndex((R) => R.id === c.id),
            w = x.filter((R, F) => F < C && R.visible).length;
          return x
            .filter((R) => R.visible)
            .slice(...(p ? [w + 1] : [0, w]))
            .reduce((R, F) => R + (F.height || 0) + v, 0);
        },
        [i]
      );
    return (
      _.useEffect(() => {
        i.forEach((c) => {
          if (c.dismissed) Ey(c.id, c.removeDelay);
          else {
            let h = Pi.get(c.id);
            h && (clearTimeout(h), Pi.delete(c.id));
          }
        });
      }, [i]),
      {
        toasts: i,
        handlers: {
          updateHeight: xy,
          startPause: wy,
          endPause: s,
          calculateOffset: d,
        },
      }
    );
  },
  jy = Kr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Cy = Kr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Ny = Kr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  _y = _n("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(n) => n.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Cy} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(n) => n.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ny} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Ty = Kr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Ry = _n("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(n) => n.secondary || "#e0e0e0"};
  border-right-color: ${(n) => n.primary || "#616161"};
  animation: ${Ty} 1s linear infinite;
`,
  Py = Kr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Ly = Kr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Dy = _n("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(n) => n.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Py} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ly} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(n) => n.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Oy = _n("div")`
  position: absolute;
`,
  Fy = _n("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Ay = Kr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  My = _n("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ay} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  by = ({ toast: n }) => {
    let { icon: i, type: o, iconTheme: s } = n;
    return i !== void 0
      ? typeof i == "string"
        ? _.createElement(My, null, i)
        : i
      : o === "blank"
      ? null
      : _.createElement(
          Fy,
          null,
          _.createElement(Ry, { ...s }),
          o !== "loading" &&
            _.createElement(
              Oy,
              null,
              o === "error"
                ? _.createElement(_y, { ...s })
                : _.createElement(Dy, { ...s })
            )
        );
  },
  Iy = (n) => `
0% {transform: translate3d(0,${n * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  zy = (n) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n * -150}%,-1px) scale(.6); opacity:0;}
`,
  Uy = "0%{opacity:0;} 100%{opacity:1;}",
  $y = "0%{opacity:1;} 100%{opacity:0;}",
  By = _n("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Vy = _n("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  Hy = (n, i) => {
    let o = n.includes("top") ? 1 : -1,
      [s, d] = zh() ? [Uy, $y] : [Iy(o), zy(o)];
    return {
      animation: i
        ? `${Kr(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Kr(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  Wy = _.memo(({ toast: n, position: i, style: o, children: s }) => {
    let d = n.height
        ? Hy(n.position || i || "top-center", n.visible)
        : { opacity: 0 },
      c = _.createElement(by, { toast: n }),
      h = _.createElement(Vy, { ...n.ariaProps }, oa(n.message, n));
    return _.createElement(
      By,
      { className: n.className, style: { ...d, ...o, ...n.style } },
      typeof s == "function"
        ? s({ icon: c, message: h })
        : _.createElement(_.Fragment, null, c, h)
    );
  });
fy(_.createElement);
var qy = ({
    id: n,
    className: i,
    style: o,
    onHeightUpdate: s,
    children: d,
  }) => {
    let c = _.useCallback(
      (h) => {
        if (h) {
          let p = () => {
            let v = h.getBoundingClientRect().height;
            s(n, v);
          };
          p(),
            new MutationObserver(p).observe(h, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [n, s]
    );
    return _.createElement("div", { ref: c, className: i, style: o }, d);
  },
  Qy = (n, i) => {
    let o = n.includes("top"),
      s = o ? { top: 0 } : { bottom: 0 },
      d = n.includes("center")
        ? { justifyContent: "center" }
        : n.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: zh() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${i * (o ? 1 : -1)}px)`,
      ...s,
      ...d,
    };
  },
  Ky = ma`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Qo = 16,
  Yy = ({
    reverseOrder: n,
    position: i = "top-center",
    toastOptions: o,
    gutter: s,
    children: d,
    containerStyle: c,
    containerClassName: h,
  }) => {
    let { toasts: p, handlers: v } = ky(o);
    return _.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Qo,
          left: Qo,
          right: Qo,
          bottom: Qo,
          pointerEvents: "none",
          ...c,
        },
        className: h,
        onMouseEnter: v.startPause,
        onMouseLeave: v.endPause,
      },
      p.map((g) => {
        let x = g.position || i,
          C = v.calculateOffset(g, {
            reverseOrder: n,
            gutter: s,
            defaultPosition: i,
          }),
          w = Qy(x, C);
        return _.createElement(
          qy,
          {
            id: g.id,
            key: g.id,
            onHeightUpdate: v.updateHeight,
            className: g.visible ? Ky : "",
            style: w,
          },
          g.type === "custom"
            ? oa(g.message, g)
            : d
            ? d(g)
            : _.createElement(Wy, { toast: g, position: x })
        );
      })
    );
  },
  Wt = bt;
const Uu = _.createContext(null),
  $h = ({ children: n }) => {
    const [i, o] = _.useState(),
      d = {
        user: i,
        setUser: o,
        logOut: () => {
          const c = localStorage.getItem("authToken");
          fetch("https://blood-aid-backend.vercel.app/account/logout/", {
            method: "GET",
            headers: {
              Authorization: `Token ${c}`,
              "Content-Type": "application/json",
            },
          })
            .then((h) => h.json())
            .then((h) => {
              console.log(h),
                localStorage.removeItem("authToken"),
                localStorage.removeItem("user_id"),
                localStorage.removeItem("username"),
                localStorage.removeItem("donor_id"),
                Wt.success("Login successful"),
                window.location.reload();
            });
        },
      };
    return f.jsx(Uu.Provider, { value: d, children: n });
  };
$h.propTypes = { children: nt.node.isRequired };
const Gy = () => {
    const { logOut: n } = _.useContext(Uu),
      i = localStorage.getItem("user_id");
    return f.jsxs("div", {
      className: "navbar bg-slate-300",
      children: [
        f.jsxs("div", {
          className: "navbar-start mx-10",
          children: [
            f.jsxs("div", {
              className: "dropdown",
              children: [
                f.jsx("div", {
                  tabIndex: 0,
                  role: "button",
                  className: "btn btn-ghost lg:hidden",
                  children: f.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: f.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 6h16M4 12h8m-8 6h16",
                    }),
                  }),
                }),
                f.jsx("ul", {
                  tabIndex: 0,
                  className:
                    "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-40",
                  children: f.jsxs(f.Fragment, {
                    children: [
                      f.jsx("li", {
                        children: f.jsx(At, { to: "/", children: "Home" }),
                      }),
                      i
                        ? f.jsxs(f.Fragment, {
                            children: [
                              f.jsx("li", {
                                children: f.jsx(At, {
                                  to: "/dashboard",
                                  children: "Dashboard",
                                }),
                              }),
                              f.jsx("li", {
                                onClick: n,
                                children: f.jsx(At, { children: "Logout" }),
                              }),
                            ],
                          })
                        : f.jsxs(f.Fragment, {
                            children: [
                              f.jsx("li", {
                                children: f.jsx(At, {
                                  to: "/login",
                                  children: "Login",
                                }),
                              }),
                              f.jsx("li", {
                                children: f.jsx(At, {
                                  to: "/signup",
                                  children: "Signup",
                                }),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              ],
            }),
            f.jsxs("a", {
              className: "font-bold text-3xl",
              children: [
                f.jsx("span", {
                  className: "text-error mr-1",
                  children: "Blood",
                }),
                "Aid",
              ],
            }),
          ],
        }),
        f.jsx("div", {
          className: "navbar-end hidden lg:flex",
          children: f.jsx("ul", {
            className: "menu menu-horizontal p-0",
            children: f.jsxs(f.Fragment, {
              children: [
                f.jsx("li", {
                  children: f.jsx(At, { to: "/", children: "Home" }),
                }),
                i
                  ? f.jsxs(f.Fragment, {
                      children: [
                        f.jsx("li", {
                          children: f.jsx(At, {
                            to: "/dashboard",
                            children: "Dashboard",
                          }),
                        }),
                        f.jsx("li", {
                          onClick: n,
                          children: f.jsx(At, { children: "Logout" }),
                        }),
                      ],
                    })
                  : f.jsxs(f.Fragment, {
                      children: [
                        f.jsx("li", {
                          children: f.jsx(At, {
                            to: "/login",
                            children: "Login",
                          }),
                        }),
                        f.jsx("li", {
                          children: f.jsx(At, {
                            to: "/signup",
                            children: "Signup",
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Xy = () => {
    const n = Or(),
      i = n.pathname.includes("login") || n.pathname.includes("signup");
    return f.jsxs("div", {
      children: [i || f.jsx(Gy, {}), f.jsx(Dh, {}), i || f.jsx(ty, {})],
    });
  };
var bi = (n) => n.type === "checkbox",
  Kn = (n) => n instanceof Date,
  Mt = (n) => n == null;
const Bh = (n) => typeof n == "object";
var ht = (n) => !Mt(n) && !Array.isArray(n) && Bh(n) && !Kn(n),
  Jy = (n) =>
    ht(n) && n.target ? (bi(n.target) ? n.target.checked : n.target.value) : n,
  Zy = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n,
  e0 = (n, i) => n.has(Zy(i)),
  t0 = (n) => {
    const i = n.constructor && n.constructor.prototype;
    return ht(i) && i.hasOwnProperty("isPrototypeOf");
  },
  $u =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function ar(n) {
  let i;
  const o = Array.isArray(n),
    s = typeof FileList < "u" ? n instanceof FileList : !1;
  if (n instanceof Date) i = new Date(n);
  else if (n instanceof Set) i = new Set(n);
  else if (!($u && (n instanceof Blob || s)) && (o || ht(n)))
    if (((i = o ? [] : {}), !o && !t0(n))) i = n;
    else for (const d in n) n.hasOwnProperty(d) && (i[d] = ar(n[d]));
  else return n;
  return i;
}
var va = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
  ct = (n) => n === void 0,
  ae = (n, i, o) => {
    if (!i || !ht(n)) return o;
    const s = va(i.split(/[,[\].]+?/)).reduce((d, c) => (Mt(d) ? d : d[c]), n);
    return ct(s) || s === n ? (ct(n[i]) ? o : n[i]) : s;
  },
  Rr = (n) => typeof n == "boolean",
  Bu = (n) => /^\w*$/.test(n),
  Vh = (n) => va(n.replace(/["|']|\]/g, "").split(/\.|\[/)),
  tt = (n, i, o) => {
    let s = -1;
    const d = Bu(i) ? [i] : Vh(i),
      c = d.length,
      h = c - 1;
    for (; ++s < c; ) {
      const p = d[s];
      let v = o;
      if (s !== h) {
        const g = n[p];
        v = ht(g) || Array.isArray(g) ? g : isNaN(+d[s + 1]) ? {} : [];
      }
      if (p === "__proto__" || p === "constructor" || p === "prototype") return;
      (n[p] = v), (n = n[p]);
    }
    return n;
  };
const Gf = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  xr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Qr = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
ft.createContext(null);
var r0 = (n, i, o, s = !0) => {
    const d = { defaultValues: i._defaultValues };
    for (const c in n)
      Object.defineProperty(d, c, {
        get: () => {
          const h = c;
          return (
            i._proxyFormState[h] !== xr.all &&
              (i._proxyFormState[h] = !s || xr.all),
            n[h]
          );
        },
      });
    return d;
  },
  Ht = (n) => ht(n) && !Object.keys(n).length,
  n0 = (n, i, o, s) => {
    o(n);
    const { name: d, ...c } = n;
    return (
      Ht(c) ||
      Object.keys(c).length >= Object.keys(i).length ||
      Object.keys(c).find((h) => i[h] === xr.all)
    );
  },
  ea = (n) => (Array.isArray(n) ? n : [n]);
function l0(n) {
  const i = ft.useRef(n);
  (i.current = n),
    ft.useEffect(() => {
      const o =
        !n.disabled &&
        i.current.subject &&
        i.current.subject.subscribe({ next: i.current.next });
      return () => {
        o && o.unsubscribe();
      };
    }, [n.disabled]);
}
var Lr = (n) => typeof n == "string",
  i0 = (n, i, o, s, d) =>
    Lr(n)
      ? (s && i.watch.add(n), ae(o, n, d))
      : Array.isArray(n)
      ? n.map((c) => (s && i.watch.add(c), ae(o, c)))
      : (s && (i.watchAll = !0), o),
  o0 = (n, i, o, s, d) =>
    i
      ? {
          ...o[n],
          types: { ...(o[n] && o[n].types ? o[n].types : {}), [s]: d || !0 },
        }
      : {},
  Xf = (n) => ({
    isOnSubmit: !n || n === xr.onSubmit,
    isOnBlur: n === xr.onBlur,
    isOnChange: n === xr.onChange,
    isOnAll: n === xr.all,
    isOnTouch: n === xr.onTouched,
  }),
  Jf = (n, i, o) =>
    !o &&
    (i.watchAll ||
      i.watch.has(n) ||
      [...i.watch].some(
        (s) => n.startsWith(s) && /^\.\w+/.test(n.slice(s.length))
      ));
const Li = (n, i, o, s) => {
  for (const d of o || Object.keys(n)) {
    const c = ae(n, d);
    if (c) {
      const { _f: h, ...p } = c;
      if (h) {
        if (h.refs && h.refs[0] && i(h.refs[0], d) && !s) return !0;
        if (h.ref && i(h.ref, h.name) && !s) return !0;
        if (Li(p, i)) break;
      } else if (ht(p) && Li(p, i)) break;
    }
  }
};
var a0 = (n, i, o) => {
    const s = ea(ae(n, o));
    return tt(s, "root", i[o]), tt(n, o, s), n;
  },
  Vu = (n) => n.type === "file",
  Pr = (n) => typeof n == "function",
  aa = (n) => {
    if (!$u) return !1;
    const i = n ? n.ownerDocument : 0;
    return (
      n instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  ta = (n) => Lr(n),
  Hu = (n) => n.type === "radio",
  sa = (n) => n instanceof RegExp;
const Zf = { value: !1, isValid: !1 },
  eh = { value: !0, isValid: !0 };
var Hh = (n) => {
  if (Array.isArray(n)) {
    if (n.length > 1) {
      const i = n
        .filter((o) => o && o.checked && !o.disabled)
        .map((o) => o.value);
      return { value: i, isValid: !!i.length };
    }
    return n[0].checked && !n[0].disabled
      ? n[0].attributes && !ct(n[0].attributes.value)
        ? ct(n[0].value) || n[0].value === ""
          ? eh
          : { value: n[0].value, isValid: !0 }
        : eh
      : Zf;
  }
  return Zf;
};
const th = { isValid: !1, value: null };
var Wh = (n) =>
  Array.isArray(n)
    ? n.reduce(
        (i, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : i,
        th
      )
    : th;
function rh(n, i, o = "validate") {
  if (ta(n) || (Array.isArray(n) && n.every(ta)) || (Rr(n) && !n))
    return { type: o, message: ta(n) ? n : "", ref: i };
}
var Dl = (n) => (ht(n) && !sa(n) ? n : { value: n, message: "" }),
  nh = async (n, i, o, s, d) => {
    const {
        ref: c,
        refs: h,
        required: p,
        maxLength: v,
        minLength: g,
        min: x,
        max: C,
        pattern: w,
        validate: R,
        name: F,
        valueAsNumber: I,
        mount: $,
        disabled: z,
      } = n._f,
      W = ae(i, F);
    if (!$ || z) return {};
    const ee = h ? h[0] : c,
      pe = (ve) => {
        s &&
          ee.reportValidity &&
          (ee.setCustomValidity(Rr(ve) ? "" : ve || ""), ee.reportValidity());
      },
      T = {},
      ue = Hu(c),
      Ee = bi(c),
      de = ue || Ee,
      Ne =
        ((I || Vu(c)) && ct(c.value) && ct(W)) ||
        (aa(c) && c.value === "") ||
        W === "" ||
        (Array.isArray(W) && !W.length),
      Re = o0.bind(null, F, o, T),
      Xe = (ve, ge, Me, _e = Qr.maxLength, $e = Qr.minLength) => {
        const De = ve ? ge : Me;
        T[F] = {
          type: ve ? _e : $e,
          message: De,
          ref: c,
          ...Re(ve ? _e : $e, De),
        };
      };
    if (
      d
        ? !Array.isArray(W) || !W.length
        : p &&
          ((!de && (Ne || Mt(W))) ||
            (Rr(W) && !W) ||
            (Ee && !Hh(h).isValid) ||
            (ue && !Wh(h).isValid))
    ) {
      const { value: ve, message: ge } = ta(p)
        ? { value: !!p, message: p }
        : Dl(p);
      if (
        ve &&
        ((T[F] = {
          type: Qr.required,
          message: ge,
          ref: ee,
          ...Re(Qr.required, ge),
        }),
        !o)
      )
        return pe(ge), T;
    }
    if (!Ne && (!Mt(x) || !Mt(C))) {
      let ve, ge;
      const Me = Dl(C),
        _e = Dl(x);
      if (!Mt(W) && !isNaN(W)) {
        const $e = c.valueAsNumber || (W && +W);
        Mt(Me.value) || (ve = $e > Me.value),
          Mt(_e.value) || (ge = $e < _e.value);
      } else {
        const $e = c.valueAsDate || new Date(W),
          De = (J) => new Date(new Date().toDateString() + " " + J),
          G = c.type == "time",
          ie = c.type == "week";
        Lr(Me.value) &&
          W &&
          (ve = G
            ? De(W) > De(Me.value)
            : ie
            ? W > Me.value
            : $e > new Date(Me.value)),
          Lr(_e.value) &&
            W &&
            (ge = G
              ? De(W) < De(_e.value)
              : ie
              ? W < _e.value
              : $e < new Date(_e.value));
      }
      if ((ve || ge) && (Xe(!!ve, Me.message, _e.message, Qr.max, Qr.min), !o))
        return pe(T[F].message), T;
    }
    if ((v || g) && !Ne && (Lr(W) || (d && Array.isArray(W)))) {
      const ve = Dl(v),
        ge = Dl(g),
        Me = !Mt(ve.value) && W.length > +ve.value,
        _e = !Mt(ge.value) && W.length < +ge.value;
      if ((Me || _e) && (Xe(Me, ve.message, ge.message), !o))
        return pe(T[F].message), T;
    }
    if (w && !Ne && Lr(W)) {
      const { value: ve, message: ge } = Dl(w);
      if (
        sa(ve) &&
        !W.match(ve) &&
        ((T[F] = {
          type: Qr.pattern,
          message: ge,
          ref: c,
          ...Re(Qr.pattern, ge),
        }),
        !o)
      )
        return pe(ge), T;
    }
    if (R) {
      if (Pr(R)) {
        const ve = await R(W, i),
          ge = rh(ve, ee);
        if (ge && ((T[F] = { ...ge, ...Re(Qr.validate, ge.message) }), !o))
          return pe(ge.message), T;
      } else if (ht(R)) {
        let ve = {};
        for (const ge in R) {
          if (!Ht(ve) && !o) break;
          const Me = rh(await R[ge](W, i), ee, ge);
          Me &&
            ((ve = { ...Me, ...Re(ge, Me.message) }),
            pe(Me.message),
            o && (T[F] = ve));
        }
        if (!Ht(ve) && ((T[F] = { ref: ee, ...ve }), !o)) return T;
      }
    }
    return pe(!0), T;
  };
function s0(n, i) {
  const o = i.slice(0, -1).length;
  let s = 0;
  for (; s < o; ) n = ct(n) ? s++ : n[i[s++]];
  return n;
}
function u0(n) {
  for (const i in n) if (n.hasOwnProperty(i) && !ct(n[i])) return !1;
  return !0;
}
function xt(n, i) {
  const o = Array.isArray(i) ? i : Bu(i) ? [i] : Vh(i),
    s = o.length === 1 ? n : s0(n, o),
    d = o.length - 1,
    c = o[d];
  return (
    s && delete s[c],
    d !== 0 &&
      ((ht(s) && Ht(s)) || (Array.isArray(s) && u0(s))) &&
      xt(n, o.slice(0, -1)),
    n
  );
}
var cu = () => {
    let n = [];
    return {
      get observers() {
        return n;
      },
      next: (d) => {
        for (const c of n) c.next && c.next(d);
      },
      subscribe: (d) => (
        n.push(d),
        {
          unsubscribe: () => {
            n = n.filter((c) => c !== d);
          },
        }
      ),
      unsubscribe: () => {
        n = [];
      },
    };
  },
  Cu = (n) => Mt(n) || !Bh(n);
function jn(n, i) {
  if (Cu(n) || Cu(i)) return n === i;
  if (Kn(n) && Kn(i)) return n.getTime() === i.getTime();
  const o = Object.keys(n),
    s = Object.keys(i);
  if (o.length !== s.length) return !1;
  for (const d of o) {
    const c = n[d];
    if (!s.includes(d)) return !1;
    if (d !== "ref") {
      const h = i[d];
      if (
        (Kn(c) && Kn(h)) ||
        (ht(c) && ht(h)) ||
        (Array.isArray(c) && Array.isArray(h))
          ? !jn(c, h)
          : c !== h
      )
        return !1;
    }
  }
  return !0;
}
var qh = (n) => n.type === "select-multiple",
  c0 = (n) => Hu(n) || bi(n),
  du = (n) => aa(n) && n.isConnected,
  Qh = (n) => {
    for (const i in n) if (Pr(n[i])) return !0;
    return !1;
  };
function ua(n, i = {}) {
  const o = Array.isArray(n);
  if (ht(n) || o)
    for (const s in n)
      Array.isArray(n[s]) || (ht(n[s]) && !Qh(n[s]))
        ? ((i[s] = Array.isArray(n[s]) ? [] : {}), ua(n[s], i[s]))
        : Mt(n[s]) || (i[s] = !0);
  return i;
}
function Kh(n, i, o) {
  const s = Array.isArray(n);
  if (ht(n) || s)
    for (const d in n)
      Array.isArray(n[d]) || (ht(n[d]) && !Qh(n[d]))
        ? ct(i) || Cu(o[d])
          ? (o[d] = Array.isArray(n[d]) ? ua(n[d], []) : { ...ua(n[d]) })
          : Kh(n[d], Mt(i) ? {} : i[d], o[d])
        : (o[d] = !jn(n[d], i[d]));
  return o;
}
var Ci = (n, i) => Kh(n, i, ua(i)),
  Yh = (n, { valueAsNumber: i, valueAsDate: o, setValueAs: s }) =>
    ct(n)
      ? n
      : i
      ? n === ""
        ? NaN
        : n && +n
      : o && Lr(n)
      ? new Date(n)
      : s
      ? s(n)
      : n;
function fu(n) {
  const i = n.ref;
  if (!(n.refs ? n.refs.every((o) => o.disabled) : i.disabled))
    return Vu(i)
      ? i.files
      : Hu(i)
      ? Wh(n.refs).value
      : qh(i)
      ? [...i.selectedOptions].map(({ value: o }) => o)
      : bi(i)
      ? Hh(n.refs).value
      : Yh(ct(i.value) ? n.ref.value : i.value, n);
}
var d0 = (n, i, o, s) => {
    const d = {};
    for (const c of n) {
      const h = ae(i, c);
      h && tt(d, c, h._f);
    }
    return {
      criteriaMode: o,
      names: [...n],
      fields: d,
      shouldUseNativeValidation: s,
    };
  },
  Ni = (n) =>
    ct(n)
      ? n
      : sa(n)
      ? n.source
      : ht(n)
      ? sa(n.value)
        ? n.value.source
        : n.value
      : n;
const lh = "AsyncFunction";
var f0 = (n) =>
    !!n &&
    !!n.validate &&
    !!(
      (Pr(n.validate) && n.validate.constructor.name === lh) ||
      (ht(n.validate) &&
        Object.values(n.validate).find((i) => i.constructor.name === lh))
    ),
  h0 = (n) =>
    n.mount &&
    (n.required ||
      n.min ||
      n.max ||
      n.maxLength ||
      n.minLength ||
      n.pattern ||
      n.validate);
function ih(n, i, o) {
  const s = ae(n, o);
  if (s || Bu(o)) return { error: s, name: o };
  const d = o.split(".");
  for (; d.length; ) {
    const c = d.join("."),
      h = ae(i, c),
      p = ae(n, c);
    if (h && !Array.isArray(h) && o !== c) return { name: o };
    if (p && p.type) return { name: c, error: p };
    d.pop();
  }
  return { name: o };
}
var p0 = (n, i, o, s, d) =>
    d.isOnAll
      ? !1
      : !o && d.isOnTouch
      ? !(i || n)
      : (o ? s.isOnBlur : d.isOnBlur)
      ? !n
      : (o ? s.isOnChange : d.isOnChange)
      ? n
      : !0,
  m0 = (n, i) => !va(ae(n, i)).length && xt(n, i);
const v0 = {
  mode: xr.onSubmit,
  reValidateMode: xr.onChange,
  shouldFocusError: !0,
};
function g0(n = {}) {
  let i = { ...v0, ...n },
    o = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Pr(i.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: i.errors || {},
      disabled: i.disabled || !1,
    },
    s = {},
    d =
      ht(i.defaultValues) || ht(i.values)
        ? ar(i.defaultValues || i.values) || {}
        : {},
    c = i.shouldUnregister ? {} : ar(d),
    h = { action: !1, mount: !1, watch: !1 },
    p = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    v,
    g = 0;
  const x = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    C = { values: cu(), array: cu(), state: cu() },
    w = Xf(i.mode),
    R = Xf(i.reValidateMode),
    F = i.criteriaMode === xr.all,
    I = (S) => (O) => {
      clearTimeout(g), (g = setTimeout(S, O));
    },
    $ = async (S) => {
      if (!i.disabled && (x.isValid || S)) {
        const O = i.resolver ? Ht((await de()).errors) : await Re(s, !0);
        O !== o.isValid && C.state.next({ isValid: O });
      }
    },
    z = (S, O) => {
      !i.disabled &&
        (x.isValidating || x.validatingFields) &&
        ((S || Array.from(p.mount)).forEach((b) => {
          b && (O ? tt(o.validatingFields, b, O) : xt(o.validatingFields, b));
        }),
        C.state.next({
          validatingFields: o.validatingFields,
          isValidating: !Ht(o.validatingFields),
        }));
    },
    W = (S, O = [], b, X, Y = !0, Q = !0) => {
      if (X && b && !i.disabled) {
        if (((h.action = !0), Q && Array.isArray(ae(s, S)))) {
          const me = b(ae(s, S), X.argA, X.argB);
          Y && tt(s, S, me);
        }
        if (Q && Array.isArray(ae(o.errors, S))) {
          const me = b(ae(o.errors, S), X.argA, X.argB);
          Y && tt(o.errors, S, me), m0(o.errors, S);
        }
        if (x.touchedFields && Q && Array.isArray(ae(o.touchedFields, S))) {
          const me = b(ae(o.touchedFields, S), X.argA, X.argB);
          Y && tt(o.touchedFields, S, me);
        }
        x.dirtyFields && (o.dirtyFields = Ci(d, c)),
          C.state.next({
            name: S,
            isDirty: ve(S, O),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          });
      } else tt(c, S, O);
    },
    ee = (S, O) => {
      tt(o.errors, S, O), C.state.next({ errors: o.errors });
    },
    pe = (S) => {
      (o.errors = S), C.state.next({ errors: o.errors, isValid: !1 });
    },
    T = (S, O, b, X) => {
      const Y = ae(s, S);
      if (Y) {
        const Q = ae(c, S, ct(b) ? ae(d, S) : b);
        ct(Q) || (X && X.defaultChecked) || O
          ? tt(c, S, O ? Q : fu(Y._f))
          : _e(S, Q),
          h.mount && $();
      }
    },
    ue = (S, O, b, X, Y) => {
      let Q = !1,
        me = !1;
      const we = { name: S };
      if (!i.disabled) {
        const Ve = !!(ae(s, S) && ae(s, S)._f && ae(s, S)._f.disabled);
        if (!b || X) {
          x.isDirty &&
            ((me = o.isDirty),
            (o.isDirty = we.isDirty = ve()),
            (Q = me !== we.isDirty));
          const Je = Ve || jn(ae(d, S), O);
          (me = !!(!Ve && ae(o.dirtyFields, S))),
            Je || Ve ? xt(o.dirtyFields, S) : tt(o.dirtyFields, S, !0),
            (we.dirtyFields = o.dirtyFields),
            (Q = Q || (x.dirtyFields && me !== !Je));
        }
        if (b) {
          const Je = ae(o.touchedFields, S);
          Je ||
            (tt(o.touchedFields, S, b),
            (we.touchedFields = o.touchedFields),
            (Q = Q || (x.touchedFields && Je !== b)));
        }
        Q && Y && C.state.next(we);
      }
      return Q ? we : {};
    },
    Ee = (S, O, b, X) => {
      const Y = ae(o.errors, S),
        Q = x.isValid && Rr(O) && o.isValid !== O;
      if (
        (i.delayError && b
          ? ((v = I(() => ee(S, b))), v(i.delayError))
          : (clearTimeout(g),
            (v = null),
            b ? tt(o.errors, S, b) : xt(o.errors, S)),
        (b ? !jn(Y, b) : Y) || !Ht(X) || Q)
      ) {
        const me = {
          ...X,
          ...(Q && Rr(O) ? { isValid: O } : {}),
          errors: o.errors,
          name: S,
        };
        (o = { ...o, ...me }), C.state.next(me);
      }
    },
    de = async (S) => {
      z(S, !0);
      const O = await i.resolver(
        c,
        i.context,
        d0(S || p.mount, s, i.criteriaMode, i.shouldUseNativeValidation)
      );
      return z(S), O;
    },
    Ne = async (S) => {
      const { errors: O } = await de(S);
      if (S)
        for (const b of S) {
          const X = ae(O, b);
          X ? tt(o.errors, b, X) : xt(o.errors, b);
        }
      else o.errors = O;
      return O;
    },
    Re = async (S, O, b = { valid: !0 }) => {
      for (const X in S) {
        const Y = S[X];
        if (Y) {
          const { _f: Q, ...me } = Y;
          if (Q) {
            const we = p.array.has(Q.name),
              Ve = Y._f && f0(Y._f);
            Ve && x.validatingFields && z([X], !0);
            const Je = await nh(Y, c, F, i.shouldUseNativeValidation && !O, we);
            if (
              (Ve && x.validatingFields && z([X]),
              Je[Q.name] && ((b.valid = !1), O))
            )
              break;
            !O &&
              (ae(Je, Q.name)
                ? we
                  ? a0(o.errors, Je, Q.name)
                  : tt(o.errors, Q.name, Je[Q.name])
                : xt(o.errors, Q.name));
          }
          !Ht(me) && (await Re(me, O, b));
        }
      }
      return b.valid;
    },
    Xe = () => {
      for (const S of p.unMount) {
        const O = ae(s, S);
        O &&
          (O._f.refs ? O._f.refs.every((b) => !du(b)) : !du(O._f.ref)) &&
          Fe(S);
      }
      p.unMount = new Set();
    },
    ve = (S, O) => !i.disabled && (S && O && tt(c, S, O), !jn(N(), d)),
    ge = (S, O, b) =>
      i0(S, p, { ...(h.mount ? c : ct(O) ? d : Lr(S) ? { [S]: O } : O) }, b, O),
    Me = (S) =>
      va(ae(h.mount ? c : d, S, i.shouldUnregister ? ae(d, S, []) : [])),
    _e = (S, O, b = {}) => {
      const X = ae(s, S);
      let Y = O;
      if (X) {
        const Q = X._f;
        Q &&
          (!Q.disabled && tt(c, S, Yh(O, Q)),
          (Y = aa(Q.ref) && Mt(O) ? "" : O),
          qh(Q.ref)
            ? [...Q.ref.options].forEach(
                (me) => (me.selected = Y.includes(me.value))
              )
            : Q.refs
            ? bi(Q.ref)
              ? Q.refs.length > 1
                ? Q.refs.forEach(
                    (me) =>
                      (!me.defaultChecked || !me.disabled) &&
                      (me.checked = Array.isArray(Y)
                        ? !!Y.find((we) => we === me.value)
                        : Y === me.value)
                  )
                : Q.refs[0] && (Q.refs[0].checked = !!Y)
              : Q.refs.forEach((me) => (me.checked = me.value === Y))
            : Vu(Q.ref)
            ? (Q.ref.value = "")
            : ((Q.ref.value = Y),
              Q.ref.type || C.values.next({ name: S, values: { ...c } })));
      }
      (b.shouldDirty || b.shouldTouch) &&
        ue(S, Y, b.shouldTouch, b.shouldDirty, !0),
        b.shouldValidate && J(S);
    },
    $e = (S, O, b) => {
      for (const X in O) {
        const Y = O[X],
          Q = `${S}.${X}`,
          me = ae(s, Q);
        (p.array.has(S) || ht(Y) || (me && !me._f)) && !Kn(Y)
          ? $e(Q, Y, b)
          : _e(Q, Y, b);
      }
    },
    De = (S, O, b = {}) => {
      const X = ae(s, S),
        Y = p.array.has(S),
        Q = ar(O);
      tt(c, S, Q),
        Y
          ? (C.array.next({ name: S, values: { ...c } }),
            (x.isDirty || x.dirtyFields) &&
              b.shouldDirty &&
              C.state.next({
                name: S,
                dirtyFields: Ci(d, c),
                isDirty: ve(S, Q),
              }))
          : X && !X._f && !Mt(Q)
          ? $e(S, Q, b)
          : _e(S, Q, b),
        Jf(S, p) && C.state.next({ ...o }),
        C.values.next({ name: h.mount ? S : void 0, values: { ...c } });
    },
    G = async (S) => {
      h.mount = !0;
      const O = S.target;
      let b = O.name,
        X = !0;
      const Y = ae(s, b),
        Q = () => (O.type ? fu(Y._f) : Jy(S)),
        me = (we) => {
          X =
            Number.isNaN(we) ||
            (Kn(we) && isNaN(we.getTime())) ||
            jn(we, ae(c, b, we));
        };
      if (Y) {
        let we, Ve;
        const Je = Q(),
          _t = S.type === Gf.BLUR || S.type === Gf.FOCUS_OUT,
          rl =
            (!h0(Y._f) && !i.resolver && !ae(o.errors, b) && !Y._f.deps) ||
            p0(_t, ae(o.touchedFields, b), o.isSubmitted, R, w),
          wt = Jf(b, p, _t);
        tt(c, b, Je),
          _t
            ? (Y._f.onBlur && Y._f.onBlur(S), v && v(0))
            : Y._f.onChange && Y._f.onChange(S);
        const Zt = ue(b, Je, _t, !1),
          nl = !Ht(Zt) || wt;
        if (
          (!_t && C.values.next({ name: b, type: S.type, values: { ...c } }),
          rl)
        )
          return (
            x.isValid && (i.mode === "onBlur" ? _t && $() : $()),
            nl && C.state.next({ name: b, ...(wt ? {} : Zt) })
          );
        if ((!_t && wt && C.state.next({ ...o }), i.resolver)) {
          const { errors: Gr } = await de([b]);
          if ((me(Je), X)) {
            const ll = ih(o.errors, s, b),
              Tn = ih(Gr, s, ll.name || b);
            (we = Tn.error), (b = Tn.name), (Ve = Ht(Gr));
          }
        } else
          z([b], !0),
            (we = (await nh(Y, c, F, i.shouldUseNativeValidation))[b]),
            z([b]),
            me(Je),
            X && (we ? (Ve = !1) : x.isValid && (Ve = await Re(s, !0)));
        X && (Y._f.deps && J(Y._f.deps), Ee(b, Ve, we, Zt));
      }
    },
    ie = (S, O) => {
      if (ae(o.errors, O) && S.focus) return S.focus(), 1;
    },
    J = async (S, O = {}) => {
      let b, X;
      const Y = ea(S);
      if (i.resolver) {
        const Q = await Ne(ct(S) ? S : Y);
        (b = Ht(Q)), (X = S ? !Y.some((me) => ae(Q, me)) : b);
      } else
        S
          ? ((X = (
              await Promise.all(
                Y.map(async (Q) => {
                  const me = ae(s, Q);
                  return await Re(me && me._f ? { [Q]: me } : me);
                })
              )
            ).every(Boolean)),
            !(!X && !o.isValid) && $())
          : (X = b = await Re(s));
      return (
        C.state.next({
          ...(!Lr(S) || (x.isValid && b !== o.isValid) ? {} : { name: S }),
          ...(i.resolver || !S ? { isValid: b } : {}),
          errors: o.errors,
        }),
        O.shouldFocus && !X && Li(s, ie, S ? Y : p.mount),
        X
      );
    },
    N = (S) => {
      const O = { ...(h.mount ? c : d) };
      return ct(S) ? O : Lr(S) ? ae(O, S) : S.map((b) => ae(O, b));
    },
    U = (S, O) => ({
      invalid: !!ae((O || o).errors, S),
      isDirty: !!ae((O || o).dirtyFields, S),
      error: ae((O || o).errors, S),
      isValidating: !!ae(o.validatingFields, S),
      isTouched: !!ae((O || o).touchedFields, S),
    }),
    Se = (S) => {
      S && ea(S).forEach((O) => xt(o.errors, O)),
        C.state.next({ errors: S ? o.errors : {} });
    },
    Te = (S, O, b) => {
      const X = (ae(s, S, { _f: {} })._f || {}).ref,
        Y = ae(o.errors, S) || {},
        { ref: Q, message: me, type: we, ...Ve } = Y;
      tt(o.errors, S, { ...Ve, ...O, ref: X }),
        C.state.next({ name: S, errors: o.errors, isValid: !1 }),
        b && b.shouldFocus && X && X.focus && X.focus();
    },
    Le = (S, O) =>
      Pr(S)
        ? C.values.subscribe({ next: (b) => S(ge(void 0, O), b) })
        : ge(S, O, !0),
    Fe = (S, O = {}) => {
      for (const b of S ? ea(S) : p.mount)
        p.mount.delete(b),
          p.array.delete(b),
          O.keepValue || (xt(s, b), xt(c, b)),
          !O.keepError && xt(o.errors, b),
          !O.keepDirty && xt(o.dirtyFields, b),
          !O.keepTouched && xt(o.touchedFields, b),
          !O.keepIsValidating && xt(o.validatingFields, b),
          !i.shouldUnregister && !O.keepDefaultValue && xt(d, b);
      C.values.next({ values: { ...c } }),
        C.state.next({ ...o, ...(O.keepDirty ? { isDirty: ve() } : {}) }),
        !O.keepIsValid && $();
    },
    Be = ({ disabled: S, name: O, field: b, fields: X, value: Y }) => {
      if ((Rr(S) && h.mount) || S) {
        const Q = S ? void 0 : ct(Y) ? fu(b ? b._f : ae(X, O)._f) : Y;
        (S || (!S && !ct(Q))) && tt(c, O, Q), ue(O, Q, !1, !1, !0);
      }
    },
    Ie = (S, O = {}) => {
      let b = ae(s, S);
      const X = Rr(O.disabled) || Rr(i.disabled);
      return (
        tt(s, S, {
          ...(b || {}),
          _f: {
            ...(b && b._f ? b._f : { ref: { name: S } }),
            name: S,
            mount: !0,
            ...O,
          },
        }),
        p.mount.add(S),
        b
          ? Be({
              field: b,
              disabled: Rr(O.disabled) ? O.disabled : i.disabled,
              name: S,
              value: O.value,
            })
          : T(S, !0, O.value),
        {
          ...(X ? { disabled: O.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!O.required,
                min: Ni(O.min),
                max: Ni(O.max),
                minLength: Ni(O.minLength),
                maxLength: Ni(O.maxLength),
                pattern: Ni(O.pattern),
              }
            : {}),
          name: S,
          onChange: G,
          onBlur: G,
          ref: (Y) => {
            if (Y) {
              Ie(S, O), (b = ae(s, S));
              const Q =
                  (ct(Y.value) &&
                    Y.querySelectorAll &&
                    Y.querySelectorAll("input,select,textarea")[0]) ||
                  Y,
                me = c0(Q),
                we = b._f.refs || [];
              if (me ? we.find((Ve) => Ve === Q) : Q === b._f.ref) return;
              tt(s, S, {
                _f: {
                  ...b._f,
                  ...(me
                    ? {
                        refs: [
                          ...we.filter(du),
                          Q,
                          ...(Array.isArray(ae(d, S)) ? [{}] : []),
                        ],
                        ref: { type: Q.type, name: S },
                      }
                    : { ref: Q }),
                },
              }),
                T(S, !1, void 0, Q);
            } else
              (b = ae(s, S, {})),
                b._f && (b._f.mount = !1),
                (i.shouldUnregister || O.shouldUnregister) &&
                  !(e0(p.array, S) && h.action) &&
                  p.unMount.add(S);
          },
        }
      );
    },
    Pe = () => i.shouldFocusError && Li(s, ie, p.mount),
    at = (S) => {
      Rr(S) &&
        (C.state.next({ disabled: S }),
        Li(
          s,
          (O, b) => {
            const X = ae(s, b);
            X &&
              ((O.disabled = X._f.disabled || S),
              Array.isArray(X._f.refs) &&
                X._f.refs.forEach((Y) => {
                  Y.disabled = X._f.disabled || S;
                }));
          },
          0,
          !1
        ));
    },
    jr = (S, O) => async (b) => {
      let X;
      if (
        (b &&
          (b.preventDefault && b.preventDefault(), b.persist && b.persist()),
        i.disabled)
      ) {
        O && (await O({ ...o.errors }, b));
        return;
      }
      let Y = ar(c);
      if ((C.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: Q, values: me } = await de();
        (o.errors = Q), (Y = me);
      } else await Re(s);
      if ((xt(o.errors, "root"), Ht(o.errors))) {
        C.state.next({ errors: {} });
        try {
          await S(Y, b);
        } catch (Q) {
          X = Q;
        }
      } else O && (await O({ ...o.errors }, b)), Pe(), setTimeout(Pe);
      if (
        (C.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ht(o.errors) && !X,
          submitCount: o.submitCount + 1,
          errors: o.errors,
        }),
        X)
      )
        throw X;
    },
    Zn = (S, O = {}) => {
      ae(s, S) &&
        (ct(O.defaultValue)
          ? De(S, ar(ae(d, S)))
          : (De(S, O.defaultValue), tt(d, S, ar(O.defaultValue))),
        O.keepTouched || xt(o.touchedFields, S),
        O.keepDirty ||
          (xt(o.dirtyFields, S),
          (o.isDirty = O.defaultValue ? ve(S, ar(ae(d, S))) : ve())),
        O.keepError || (xt(o.errors, S), x.isValid && $()),
        C.state.next({ ...o }));
    },
    Dt = (S, O = {}) => {
      const b = S ? ar(S) : d,
        X = ar(b),
        Y = Ht(S),
        Q = Y ? d : X;
      if ((O.keepDefaultValues || (d = b), !O.keepValues)) {
        if (O.keepDirtyValues) {
          const me = new Set([...p.mount, ...Object.keys(Ci(d, c))]);
          for (const we of Array.from(me))
            ae(o.dirtyFields, we) ? tt(Q, we, ae(c, we)) : De(we, ae(Q, we));
        } else {
          if ($u && ct(S))
            for (const me of p.mount) {
              const we = ae(s, me);
              if (we && we._f) {
                const Ve = Array.isArray(we._f.refs)
                  ? we._f.refs[0]
                  : we._f.ref;
                if (aa(Ve)) {
                  const Je = Ve.closest("form");
                  if (Je) {
                    Je.reset();
                    break;
                  }
                }
              }
            }
          s = {};
        }
        (c = i.shouldUnregister ? (O.keepDefaultValues ? ar(d) : {}) : ar(Q)),
          C.array.next({ values: { ...Q } }),
          C.values.next({ values: { ...Q } });
      }
      (p = {
        mount: O.keepDirtyValues ? p.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (h.mount = !x.isValid || !!O.keepIsValid || !!O.keepDirtyValues),
        (h.watch = !!i.shouldUnregister),
        C.state.next({
          submitCount: O.keepSubmitCount ? o.submitCount : 0,
          isDirty: Y
            ? !1
            : O.keepDirty
            ? o.isDirty
            : !!(O.keepDefaultValues && !jn(S, d)),
          isSubmitted: O.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: Y
            ? {}
            : O.keepDirtyValues
            ? O.keepDefaultValues && c
              ? Ci(d, c)
              : o.dirtyFields
            : O.keepDefaultValues && S
            ? Ci(d, S)
            : O.keepDirty
            ? o.dirtyFields
            : {},
          touchedFields: O.keepTouched ? o.touchedFields : {},
          errors: O.keepErrors ? o.errors : {},
          isSubmitSuccessful: O.keepIsSubmitSuccessful
            ? o.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Yr = (S, O) => Dt(Pr(S) ? S(c) : S, O);
  return {
    control: {
      register: Ie,
      unregister: Fe,
      getFieldState: U,
      handleSubmit: jr,
      setError: Te,
      _executeSchema: de,
      _getWatch: ge,
      _getDirty: ve,
      _updateValid: $,
      _removeUnmounted: Xe,
      _updateFieldArray: W,
      _updateDisabledField: Be,
      _getFieldArray: Me,
      _reset: Dt,
      _resetDefaultValues: () =>
        Pr(i.defaultValues) &&
        i.defaultValues().then((S) => {
          Yr(S, i.resetOptions), C.state.next({ isLoading: !1 });
        }),
      _updateFormState: (S) => {
        o = { ...o, ...S };
      },
      _disableForm: at,
      _subjects: C,
      _proxyFormState: x,
      _setErrors: pe,
      get _fields() {
        return s;
      },
      get _formValues() {
        return c;
      },
      get _state() {
        return h;
      },
      set _state(S) {
        h = S;
      },
      get _defaultValues() {
        return d;
      },
      get _names() {
        return p;
      },
      set _names(S) {
        p = S;
      },
      get _formState() {
        return o;
      },
      set _formState(S) {
        o = S;
      },
      get _options() {
        return i;
      },
      set _options(S) {
        i = { ...i, ...S };
      },
    },
    trigger: J,
    register: Ie,
    handleSubmit: jr,
    watch: Le,
    setValue: De,
    getValues: N,
    reset: Yr,
    resetField: Zn,
    clearErrors: Se,
    unregister: Fe,
    setError: Te,
    setFocus: (S, O = {}) => {
      const b = ae(s, S),
        X = b && b._f;
      if (X) {
        const Y = X.refs ? X.refs[0] : X.ref;
        Y.focus && (Y.focus(), O.shouldSelect && Pr(Y.select) && Y.select());
      }
    },
    getFieldState: U,
  };
}
function ga(n = {}) {
  const i = ft.useRef(),
    o = ft.useRef(),
    [s, d] = ft.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Pr(n.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
      defaultValues: Pr(n.defaultValues) ? void 0 : n.defaultValues,
    });
  i.current || (i.current = { ...g0(n), formState: s });
  const c = i.current.control;
  return (
    (c._options = n),
    l0({
      subject: c._subjects.state,
      next: (h) => {
        n0(h, c._proxyFormState, c._updateFormState) && d({ ...c._formState });
      },
    }),
    ft.useEffect(() => c._disableForm(n.disabled), [c, n.disabled]),
    ft.useEffect(() => {
      if (c._proxyFormState.isDirty) {
        const h = c._getDirty();
        h !== s.isDirty && c._subjects.state.next({ isDirty: h });
      }
    }, [c, s.isDirty]),
    ft.useEffect(() => {
      n.values && !jn(n.values, o.current)
        ? (c._reset(n.values, c._options.resetOptions),
          (o.current = n.values),
          d((h) => ({ ...h })))
        : c._resetDefaultValues();
    }, [n.values, c]),
    ft.useEffect(() => {
      n.errors && c._setErrors(n.errors);
    }, [n.errors, c]),
    ft.useEffect(() => {
      c._state.mount || (c._updateValid(), (c._state.mount = !0)),
        c._state.watch &&
          ((c._state.watch = !1), c._subjects.state.next({ ...c._formState })),
        c._removeUnmounted();
    }),
    ft.useEffect(() => {
      n.shouldUnregister && c._subjects.values.next({ values: c._getWatch() });
    }, [n.shouldUnregister, c]),
    ft.useMemo(() => ({ ...i.current, formState: r0(s, c) }), [s, c])
  );
}
var hu, oh;
function y0() {
  if (oh) return hu;
  oh = 1;
  var n = typeof Element < "u",
    i = typeof Map == "function",
    o = typeof Set == "function",
    s = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function d(c, h) {
    if (c === h) return !0;
    if (c && h && typeof c == "object" && typeof h == "object") {
      if (c.constructor !== h.constructor) return !1;
      var p, v, g;
      if (Array.isArray(c)) {
        if (((p = c.length), p != h.length)) return !1;
        for (v = p; v-- !== 0; ) if (!d(c[v], h[v])) return !1;
        return !0;
      }
      var x;
      if (i && c instanceof Map && h instanceof Map) {
        if (c.size !== h.size) return !1;
        for (x = c.entries(); !(v = x.next()).done; )
          if (!h.has(v.value[0])) return !1;
        for (x = c.entries(); !(v = x.next()).done; )
          if (!d(v.value[1], h.get(v.value[0]))) return !1;
        return !0;
      }
      if (o && c instanceof Set && h instanceof Set) {
        if (c.size !== h.size) return !1;
        for (x = c.entries(); !(v = x.next()).done; )
          if (!h.has(v.value[0])) return !1;
        return !0;
      }
      if (s && ArrayBuffer.isView(c) && ArrayBuffer.isView(h)) {
        if (((p = c.length), p != h.length)) return !1;
        for (v = p; v-- !== 0; ) if (c[v] !== h[v]) return !1;
        return !0;
      }
      if (c.constructor === RegExp)
        return c.source === h.source && c.flags === h.flags;
      if (
        c.valueOf !== Object.prototype.valueOf &&
        typeof c.valueOf == "function" &&
        typeof h.valueOf == "function"
      )
        return c.valueOf() === h.valueOf();
      if (
        c.toString !== Object.prototype.toString &&
        typeof c.toString == "function" &&
        typeof h.toString == "function"
      )
        return c.toString() === h.toString();
      if (((g = Object.keys(c)), (p = g.length), p !== Object.keys(h).length))
        return !1;
      for (v = p; v-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(h, g[v])) return !1;
      if (n && c instanceof Element) return !1;
      for (v = p; v-- !== 0; )
        if (
          !(
            (g[v] === "_owner" || g[v] === "__v" || g[v] === "__o") &&
            c.$$typeof
          ) &&
          !d(c[g[v]], h[g[v]])
        )
          return !1;
      return !0;
    }
    return c !== c && h !== h;
  }
  return (
    (hu = function (h, p) {
      try {
        return d(h, p);
      } catch (v) {
        if ((v.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw v;
      }
    }),
    hu
  );
}
var x0 = y0();
const w0 = Oi(x0);
var pu, ah;
function S0() {
  if (ah) return pu;
  ah = 1;
  var n = function (i, o, s, d, c, h, p, v) {
    if (!i) {
      var g;
      if (o === void 0)
        g = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var x = [s, d, c, h, p, v],
          C = 0;
        (g = new Error(
          o.replace(/%s/g, function () {
            return x[C++];
          })
        )),
          (g.name = "Invariant Violation");
      }
      throw ((g.framesToPop = 1), g);
    }
  };
  return (pu = n), pu;
}
var E0 = S0();
const sh = Oi(E0);
var mu, uh;
function k0() {
  return (
    uh ||
      ((uh = 1),
      (mu = function (i, o, s, d) {
        var c = s ? s.call(d, i, o) : void 0;
        if (c !== void 0) return !!c;
        if (i === o) return !0;
        if (typeof i != "object" || !i || typeof o != "object" || !o) return !1;
        var h = Object.keys(i),
          p = Object.keys(o);
        if (h.length !== p.length) return !1;
        for (
          var v = Object.prototype.hasOwnProperty.bind(o), g = 0;
          g < h.length;
          g++
        ) {
          var x = h[g];
          if (!v(x)) return !1;
          var C = i[x],
            w = o[x];
          if (
            ((c = s ? s.call(d, C, w, x) : void 0),
            c === !1 || (c === void 0 && C !== w))
          )
            return !1;
        }
        return !0;
      })),
    mu
  );
}
var j0 = k0();
const C0 = Oi(j0);
var Gh = ((n) => (
    (n.BASE = "base"),
    (n.BODY = "body"),
    (n.HEAD = "head"),
    (n.HTML = "html"),
    (n.LINK = "link"),
    (n.META = "meta"),
    (n.NOSCRIPT = "noscript"),
    (n.SCRIPT = "script"),
    (n.STYLE = "style"),
    (n.TITLE = "title"),
    (n.FRAGMENT = "Symbol(react.fragment)"),
    n
  ))(Gh || {}),
  vu = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  ch = Object.values(Gh),
  Wu = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  N0 = Object.entries(Wu).reduce((n, [i, o]) => ((n[o] = i), n), {}),
  wr = "data-rh",
  Ml = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  bl = (n, i) => {
    for (let o = n.length - 1; o >= 0; o -= 1) {
      const s = n[o];
      if (Object.prototype.hasOwnProperty.call(s, i)) return s[i];
    }
    return null;
  },
  _0 = (n) => {
    let i = bl(n, "title");
    const o = bl(n, Ml.TITLE_TEMPLATE);
    if ((Array.isArray(i) && (i = i.join("")), o && i))
      return o.replace(/%s/g, () => i);
    const s = bl(n, Ml.DEFAULT_TITLE);
    return i || s || void 0;
  },
  T0 = (n) => bl(n, Ml.ON_CHANGE_CLIENT_STATE) || (() => {}),
  gu = (n, i) =>
    i
      .filter((o) => typeof o[n] < "u")
      .map((o) => o[n])
      .reduce((o, s) => ({ ...o, ...s }), {}),
  R0 = (n, i) =>
    i
      .filter((o) => typeof o.base < "u")
      .map((o) => o.base)
      .reverse()
      .reduce((o, s) => {
        if (!o.length) {
          const d = Object.keys(s);
          for (let c = 0; c < d.length; c += 1) {
            const p = d[c].toLowerCase();
            if (n.indexOf(p) !== -1 && s[p]) return o.concat(s);
          }
        }
        return o;
      }, []),
  P0 = (n) => console && typeof console.warn == "function" && console.warn(n),
  _i = (n, i, o) => {
    const s = {};
    return o
      .filter((d) =>
        Array.isArray(d[n])
          ? !0
          : (typeof d[n] < "u" &&
              P0(
                `Helmet: ${n} should be of type "Array". Instead found type "${typeof d[
                  n
                ]}"`
              ),
            !1)
      )
      .map((d) => d[n])
      .reverse()
      .reduce((d, c) => {
        const h = {};
        c.filter((v) => {
          let g;
          const x = Object.keys(v);
          for (let w = 0; w < x.length; w += 1) {
            const R = x[w],
              F = R.toLowerCase();
            i.indexOf(F) !== -1 &&
              !(g === "rel" && v[g].toLowerCase() === "canonical") &&
              !(F === "rel" && v[F].toLowerCase() === "stylesheet") &&
              (g = F),
              i.indexOf(R) !== -1 &&
                (R === "innerHTML" || R === "cssText" || R === "itemprop") &&
                (g = R);
          }
          if (!g || !v[g]) return !1;
          const C = v[g].toLowerCase();
          return (
            s[g] || (s[g] = {}),
            h[g] || (h[g] = {}),
            s[g][C] ? !1 : ((h[g][C] = !0), !0)
          );
        })
          .reverse()
          .forEach((v) => d.push(v));
        const p = Object.keys(h);
        for (let v = 0; v < p.length; v += 1) {
          const g = p[v],
            x = { ...s[g], ...h[g] };
          s[g] = x;
        }
        return d;
      }, [])
      .reverse();
  },
  L0 = (n, i) => {
    if (Array.isArray(n) && n.length) {
      for (let o = 0; o < n.length; o += 1) if (n[o][i]) return !0;
    }
    return !1;
  },
  D0 = (n) => ({
    baseTag: R0(["href"], n),
    bodyAttributes: gu("bodyAttributes", n),
    defer: bl(n, Ml.DEFER),
    encode: bl(n, Ml.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: gu("htmlAttributes", n),
    linkTags: _i("link", ["rel", "href"], n),
    metaTags: _i(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      n
    ),
    noscriptTags: _i("noscript", ["innerHTML"], n),
    onChangeClientState: T0(n),
    scriptTags: _i("script", ["src", "innerHTML"], n),
    styleTags: _i("style", ["cssText"], n),
    title: _0(n),
    titleAttributes: gu("titleAttributes", n),
    prioritizeSeoTags: L0(n, Ml.PRIORITIZE_SEO_TAGS),
  }),
  Xh = (n) => (Array.isArray(n) ? n.join("") : n),
  O0 = (n, i) => {
    const o = Object.keys(n);
    for (let s = 0; s < o.length; s += 1)
      if (i[o[s]] && i[o[s]].includes(n[o[s]])) return !0;
    return !1;
  },
  yu = (n, i) =>
    Array.isArray(n)
      ? n.reduce(
          (o, s) => (O0(s, i) ? o.priority.push(s) : o.default.push(s), o),
          { priority: [], default: [] }
        )
      : { default: n, priority: [] },
  dh = (n, i) => ({ ...n, [i]: void 0 }),
  F0 = ["noscript", "script", "style"],
  Nu = (n, i = !0) =>
    i === !1
      ? String(n)
      : String(n)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  Jh = (n) =>
    Object.keys(n).reduce((i, o) => {
      const s = typeof n[o] < "u" ? `${o}="${n[o]}"` : `${o}`;
      return i ? `${i} ${s}` : s;
    }, ""),
  A0 = (n, i, o, s) => {
    const d = Jh(o),
      c = Xh(i);
    return d
      ? `<${n} ${wr}="true" ${d}>${Nu(c, s)}</${n}>`
      : `<${n} ${wr}="true">${Nu(c, s)}</${n}>`;
  },
  M0 = (n, i, o = !0) =>
    i.reduce((s, d) => {
      const c = d,
        h = Object.keys(c)
          .filter((g) => !(g === "innerHTML" || g === "cssText"))
          .reduce((g, x) => {
            const C = typeof c[x] > "u" ? x : `${x}="${Nu(c[x], o)}"`;
            return g ? `${g} ${C}` : C;
          }, ""),
        p = c.innerHTML || c.cssText || "",
        v = F0.indexOf(n) === -1;
      return `${s}<${n} ${wr}="true" ${h}${v ? "/>" : `>${p}</${n}>`}`;
    }, ""),
  Zh = (n, i = {}) =>
    Object.keys(n).reduce((o, s) => {
      const d = Wu[s];
      return (o[d || s] = n[s]), o;
    }, i),
  b0 = (n, i, o) => {
    const s = { key: i, [wr]: !0 },
      d = Zh(o, s);
    return [ft.createElement("title", d, i)];
  },
  ra = (n, i) =>
    i.map((o, s) => {
      const d = { key: s, [wr]: !0 };
      return (
        Object.keys(o).forEach((c) => {
          const p = Wu[c] || c;
          if (p === "innerHTML" || p === "cssText") {
            const v = o.innerHTML || o.cssText;
            d.dangerouslySetInnerHTML = { __html: v };
          } else d[p] = o[c];
        }),
        ft.createElement(n, d)
      );
    }),
  sr = (n, i, o = !0) => {
    switch (n) {
      case "title":
        return {
          toComponent: () => b0(n, i.title, i.titleAttributes),
          toString: () => A0(n, i.title, i.titleAttributes, o),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => Zh(i), toString: () => Jh(i) };
      default:
        return { toComponent: () => ra(n, i), toString: () => M0(n, i, o) };
    }
  },
  I0 = ({ metaTags: n, linkTags: i, scriptTags: o, encode: s }) => {
    const d = yu(n, vu.meta),
      c = yu(i, vu.link),
      h = yu(o, vu.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...ra("meta", d.priority),
          ...ra("link", c.priority),
          ...ra("script", h.priority),
        ],
        toString: () =>
          `${sr("meta", d.priority, s)} ${sr("link", c.priority, s)} ${sr(
            "script",
            h.priority,
            s
          )}`,
      },
      metaTags: d.default,
      linkTags: c.default,
      scriptTags: h.default,
    };
  },
  z0 = (n) => {
    const {
      baseTag: i,
      bodyAttributes: o,
      encode: s = !0,
      htmlAttributes: d,
      noscriptTags: c,
      styleTags: h,
      title: p = "",
      titleAttributes: v,
      prioritizeSeoTags: g,
    } = n;
    let { linkTags: x, metaTags: C, scriptTags: w } = n,
      R = { toComponent: () => {}, toString: () => "" };
    return (
      g &&
        ({
          priorityMethods: R,
          linkTags: x,
          metaTags: C,
          scriptTags: w,
        } = I0(n)),
      {
        priority: R,
        base: sr("base", i, s),
        bodyAttributes: sr("bodyAttributes", o, s),
        htmlAttributes: sr("htmlAttributes", d, s),
        link: sr("link", x, s),
        meta: sr("meta", C, s),
        noscript: sr("noscript", c, s),
        script: sr("script", w, s),
        style: sr("style", h, s),
        title: sr("title", { title: p, titleAttributes: v }, s),
      }
    );
  },
  _u = z0,
  Ko = [],
  ep = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Tu = class {
    constructor(n, i) {
      Wr(this, "instances", []);
      Wr(this, "canUseDOM", ep);
      Wr(this, "context");
      Wr(this, "value", {
        setHelmet: (n) => {
          this.context.helmet = n;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? Ko : this.instances),
          add: (n) => {
            (this.canUseDOM ? Ko : this.instances).push(n);
          },
          remove: (n) => {
            const i = (this.canUseDOM ? Ko : this.instances).indexOf(n);
            (this.canUseDOM ? Ko : this.instances).splice(i, 1);
          },
        },
      });
      (this.context = n),
        (this.canUseDOM = i || !1),
        i ||
          (n.helmet = _u({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          }));
    }
  },
  U0 = {},
  tp = ft.createContext(U0),
  Yn,
  rp =
    ((Yn = class extends _.Component {
      constructor(o) {
        super(o);
        Wr(this, "helmetData");
        this.helmetData = new Tu(this.props.context || {}, Yn.canUseDOM);
      }
      render() {
        return ft.createElement(
          tp.Provider,
          { value: this.helmetData.value },
          this.props.children
        );
      }
    }),
    Wr(Yn, "canUseDOM", ep),
    Yn),
  Ol = (n, i) => {
    const o = document.head || document.querySelector("head"),
      s = o.querySelectorAll(`${n}[${wr}]`),
      d = [].slice.call(s),
      c = [];
    let h;
    return (
      i &&
        i.length &&
        i.forEach((p) => {
          const v = document.createElement(n);
          for (const g in p)
            if (Object.prototype.hasOwnProperty.call(p, g))
              if (g === "innerHTML") v.innerHTML = p.innerHTML;
              else if (g === "cssText")
                v.styleSheet
                  ? (v.styleSheet.cssText = p.cssText)
                  : v.appendChild(document.createTextNode(p.cssText));
              else {
                const x = g,
                  C = typeof p[x] > "u" ? "" : p[x];
                v.setAttribute(g, C);
              }
          v.setAttribute(wr, "true"),
            d.some((g, x) => ((h = x), v.isEqualNode(g)))
              ? d.splice(h, 1)
              : c.push(v);
        }),
      d.forEach((p) => {
        var v;
        return (v = p.parentNode) == null ? void 0 : v.removeChild(p);
      }),
      c.forEach((p) => o.appendChild(p)),
      { oldTags: d, newTags: c }
    );
  },
  Ru = (n, i) => {
    const o = document.getElementsByTagName(n)[0];
    if (!o) return;
    const s = o.getAttribute(wr),
      d = s ? s.split(",") : [],
      c = [...d],
      h = Object.keys(i);
    for (const p of h) {
      const v = i[p] || "";
      o.getAttribute(p) !== v && o.setAttribute(p, v),
        d.indexOf(p) === -1 && d.push(p);
      const g = c.indexOf(p);
      g !== -1 && c.splice(g, 1);
    }
    for (let p = c.length - 1; p >= 0; p -= 1) o.removeAttribute(c[p]);
    d.length === c.length
      ? o.removeAttribute(wr)
      : o.getAttribute(wr) !== h.join(",") && o.setAttribute(wr, h.join(","));
  },
  $0 = (n, i) => {
    typeof n < "u" && document.title !== n && (document.title = Xh(n)),
      Ru("title", i);
  },
  fh = (n, i) => {
    const {
      baseTag: o,
      bodyAttributes: s,
      htmlAttributes: d,
      linkTags: c,
      metaTags: h,
      noscriptTags: p,
      onChangeClientState: v,
      scriptTags: g,
      styleTags: x,
      title: C,
      titleAttributes: w,
    } = n;
    Ru("body", s), Ru("html", d), $0(C, w);
    const R = {
        baseTag: Ol("base", o),
        linkTags: Ol("link", c),
        metaTags: Ol("meta", h),
        noscriptTags: Ol("noscript", p),
        scriptTags: Ol("script", g),
        styleTags: Ol("style", x),
      },
      F = {},
      I = {};
    Object.keys(R).forEach(($) => {
      const { newTags: z, oldTags: W } = R[$];
      z.length && (F[$] = z), W.length && (I[$] = R[$].oldTags);
    }),
      i && i(),
      v(n, F, I);
  },
  Ti = null,
  B0 = (n) => {
    Ti && cancelAnimationFrame(Ti),
      n.defer
        ? (Ti = requestAnimationFrame(() => {
            fh(n, () => {
              Ti = null;
            });
          }))
        : (fh(n), (Ti = null));
  },
  V0 = B0,
  hh = class extends _.Component {
    constructor() {
      super(...arguments);
      Wr(this, "rendered", !1);
    }
    shouldComponentUpdate(i) {
      return !C0(i, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: i } = this.props.context;
      i.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: i, setHelmet: o } = this.props.context;
      let s = null;
      const d = D0(
        i.get().map((c) => {
          const h = { ...c.props };
          return delete h.context, h;
        })
      );
      rp.canUseDOM ? V0(d) : _u && (s = _u(d)), o(s);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: i } = this.props.context;
      i.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  xu,
  Jn =
    ((xu = class extends _.Component {
      shouldComponentUpdate(n) {
        return !w0(dh(this.props, "helmetData"), dh(n, "helmetData"));
      }
      mapNestedChildrenToProps(n, i) {
        if (!i) return null;
        switch (n.type) {
          case "script":
          case "noscript":
            return { innerHTML: i };
          case "style":
            return { cssText: i };
          default:
            throw new Error(
              `<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(n, i, o, s) {
        return {
          ...i,
          [n.type]: [
            ...(i[n.type] || []),
            { ...o, ...this.mapNestedChildrenToProps(n, s) },
          ],
        };
      }
      mapObjectTypeChildren(n, i, o, s) {
        switch (n.type) {
          case "title":
            return { ...i, [n.type]: s, titleAttributes: { ...o } };
          case "body":
            return { ...i, bodyAttributes: { ...o } };
          case "html":
            return { ...i, htmlAttributes: { ...o } };
          default:
            return { ...i, [n.type]: { ...o } };
        }
      }
      mapArrayTypeChildrenToProps(n, i) {
        let o = { ...i };
        return (
          Object.keys(n).forEach((s) => {
            o = { ...o, [s]: n[s] };
          }),
          o
        );
      }
      warnOnInvalidChildren(n, i) {
        return (
          sh(
            ch.some((o) => n.type === o),
            typeof n.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${ch.join(
                  ", "
                )} are allowed. Helmet does not support rendering <${
                  n.type
                }> elements. Refer to our API for more information.`
          ),
          sh(
            !i ||
              typeof i == "string" ||
              (Array.isArray(i) && !i.some((o) => typeof o != "string")),
            `Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`
          ),
          !0
        );
      }
      mapChildrenToProps(n, i) {
        let o = {};
        return (
          ft.Children.forEach(n, (s) => {
            if (!s || !s.props) return;
            const { children: d, ...c } = s.props,
              h = Object.keys(c).reduce(
                (v, g) => ((v[N0[g] || g] = c[g]), v),
                {}
              );
            let { type: p } = s;
            switch (
              (typeof p == "symbol"
                ? (p = p.toString())
                : this.warnOnInvalidChildren(s, d),
              p)
            ) {
              case "Symbol(react.fragment)":
                i = this.mapChildrenToProps(d, i);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                o = this.flattenArrayTypeChildren(s, o, h, d);
                break;
              default:
                i = this.mapObjectTypeChildren(s, i, h, d);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(o, i)
        );
      }
      render() {
        const { children: n, ...i } = this.props;
        let o = { ...i },
          { helmetData: s } = i;
        if (
          (n && (o = this.mapChildrenToProps(n, o)), s && !(s instanceof Tu))
        ) {
          const d = s;
          (s = new Tu(d.context, !0)), delete o.helmetData;
        }
        return s
          ? ft.createElement(hh, { ...o, context: s.value })
          : ft.createElement(tp.Consumer, null, (d) =>
              ft.createElement(hh, { ...o, context: d })
            );
      }
    }),
    Wr(xu, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    xu);
const H0 = () => {
    var x, C;
    const {
        register: n,
        formState: { errors: i },
        handleSubmit: o,
        reset: s,
      } = ga(),
      { setUser: d } = _.useContext(Uu),
      c = Au(),
      [h, p] = _.useState("password"),
      v = () => {
        if (h === "password") {
          p("text");
          return;
        } else p("password");
      },
      g = (w) => {
        const R = w.username,
          F = w.password;
        fetch("https://blood-aid-backend.vercel.app/account/login/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ username: R, password: F }),
        })
          .then((I) => I.json())
          .then((I) => {
            console.log(I),
              I.token
                ? (localStorage.setItem("authToken", I.token),
                  localStorage.setItem("user_id", I.user_id),
                  localStorage.setItem("donor_id", I.donor_id),
                  localStorage.setItem("username", I.username),
                  d(I.user),
                  Wt.success("Login successful"),
                  s(),
                  c("/dashboard/update_profile"))
                : Wt.error(I.error || "Login failed");
          })
          .catch((I) => {
            console.log(I.message);
          });
      };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx(Jn, { children: f.jsx("title", { children: "Login" }) }),
        f.jsx("div", {
          className:
            "card overflow-hidden p-5  md:w-6/12 mx-auto w-full shadow-xl bg-base-100 md:my-5",
          children: f.jsxs("div", {
            children: [
              f.jsx("h1", {
                className: "text-4xl text-center font-bold",
                children: "Login",
              }),
              f.jsxs("form", {
                className: "mt-6",
                onSubmit: o(g),
                children: [
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Username",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("username", { required: "Username is required" }),
                        type: "text",
                        placeholder: "Enter Your Username",
                        className: "input input-bordered w-full",
                      }),
                      i.username &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children:
                            (x = i.username) == null ? void 0 : x.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Password",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("password", {
                          required: "password is required",
                          minLength: {
                            value: 6,
                            message:
                              "Password must have uppercase, number and special characters",
                          },
                        }),
                        type: h,
                        placeholder: "******",
                        className: "input input-bordered w-full",
                      }),
                      h === "password"
                        ? f.jsx("p", {
                            onClick: v,
                            className: " cursor-pointer",
                            children: "show password",
                          })
                        : f.jsx("p", {
                            onClick: v,
                            className: " cursor-pointer",
                            children: "hide password",
                          }),
                      f.jsx("label", { className: "label mt-1" }),
                      i.password &&
                        f.jsx("p", {
                          className: "text-error",
                          children:
                            (C = i.password) == null ? void 0 : C.message,
                        }),
                    ],
                  }),
                  f.jsx("input", {
                    className:
                      "btn btn-outline btn-error w-full mt-5 text-xl font-bold",
                    value: "Login",
                    type: "submit",
                  }),
                  f.jsxs("p", {
                    className: "mt-3 text-center",
                    children: [
                      "New to this site ?",
                      " ",
                      f.jsx(At, {
                        className: "text-blue-700",
                        to: "/signup",
                        children: "Signup",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  W0 = () => {
    var p, v, g, x, C, w;
    const {
        register: n,
        formState: { errors: i },
        handleSubmit: o,
        reset: s,
      } = ga(),
      [d, c] = _.useState(""),
      h = (R) => {
        const F = {
          username: R.username,
          first_name: R.first_name,
          last_name: R.last_name,
          email: R.email,
          password: R.password,
          confirm_password: R.confirm_password,
        };
        fetch("https://blood-aid-backend.vercel.app/account/register/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(F),
        })
          .then((I) => I.json())
          .then((I) => {
            console.log(I),
              I.data
                ? (Wt.success(I.data), s())
                : Wt.error(I.error || "Signup failed");
          })
          .catch((I) => {
            console.log(I.message), c(I.message);
          });
      };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx(Jn, { children: f.jsx("title", { children: "Sign up" }) }),
        f.jsx("div", {
          className:
            "card overflow-hidden p-5  md:w-6/12 mx-auto w-full shadow-xl bg-base-100 md:my-5",
          children: f.jsxs("div", {
            children: [
              f.jsx("h1", {
                className: "text-4xl text-center font-bold",
                children: "Sign up",
              }),
              f.jsxs("form", {
                className: "mt-6",
                onSubmit: o(h),
                children: [
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "User Name",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("username", { required: "User Name is required" }),
                        type: "text",
                        placeholder: "Your Name",
                        className: "input input-bordered w-full",
                      }),
                      i.username &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children:
                            (p = i.username) == null ? void 0 : p.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "First Name",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("first_name", {
                          required: "First Name is required",
                        }),
                        type: "text",
                        placeholder: "Enter Your First Name",
                        className: "input input-bordered w-full",
                      }),
                      i.first_name &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children:
                            (v = i.first_name) == null ? void 0 : v.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Last Name",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("last_name", {
                          required: "Last Name is required",
                        }),
                        type: "text",
                        placeholder: "Enter Your Last Name",
                        className: "input input-bordered w-full",
                      }),
                      i.last_name &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children:
                            (g = i.last_name) == null ? void 0 : g.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Email",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("email", { required: "email is required" }),
                        type: "email",
                        placeholder: "Email Address",
                        className: "input input-bordered w-full",
                      }),
                      i.email &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children: (x = i.email) == null ? void 0 : x.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className:
                      "form-control w-full flex justify-between align-center",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Password",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("password", {
                          required: "password is required",
                          minLength: {
                            value: 6,
                            message:
                              "password must be at least 6 characters long",
                          },
                          pattern: {
                            value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                            message:
                              "Password must have uppercase, number and special characters",
                          },
                        }),
                        type: "password",
                        placeholder: "******",
                        className: "input input-bordered w-full",
                      }),
                      i.password &&
                        f.jsx("p", {
                          className: "text-error",
                          children:
                            (C = i.password) == null ? void 0 : C.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className:
                      "form-control w-full flex justify-between align-center",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Confirm Password",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("confirm_password", {
                          required: "password is required",
                          minLength: {
                            value: 8,
                            message:
                              "password must be at least 6 characters long",
                          },
                          pattern: {
                            value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                            message:
                              "Password must have uppercase, number and special characters",
                          },
                        }),
                        type: "password",
                        placeholder: "******",
                        className: "input input-bordered w-full",
                      }),
                      i.confirm_password &&
                        f.jsx("p", {
                          className: "text-error",
                          children:
                            (w = i.confirm_password) == null
                              ? void 0
                              : w.message,
                        }),
                    ],
                  }),
                  f.jsx("p", { className: "text-error", children: d }),
                  f.jsx("input", {
                    className:
                      "btn btn-outline btn-error w-full mt-5 text-xl font-bold",
                    value: "Signup",
                    type: "submit",
                  }),
                  f.jsxs("p", {
                    className: "mt-3 text-center",
                    children: [
                      "Already have an account ?",
                      " ",
                      f.jsx(At, {
                        className: "text-blue-700",
                        to: "/login",
                        children: "Login",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  q0 = () =>
    f.jsxs("div", {
      className:
        " flex flex-col justify-center items-start  lg:h-[100vh] px-10 bg-bannerImg bg-repeat bg-cover bg-right bg-white opacity-80",
      children: [
        f.jsx("h3", {
          className:
            " text-red-500 md:text-4xl text-2xl mt-10 md:mt-0 font-bold",
          children: "Donate blood,save life !",
        }),
        f.jsxs("h2", {
          className: "text-white font-extrabold md:text-7xl text-3xl my-8",
          children: ["Donate Blood And ", f.jsx("br", {}), " Inspire Others."],
        }),
        f.jsx("button", {
          className: "btn btn-error my-5 font-extrabold text-white",
          children: "Explore Now",
        }),
      ],
    }),
  Q0 = "/assets/home3-TXTyOCZt.jpg",
  np = ({ donor: n }) =>
    f.jsx(f.Fragment, {
      children: f.jsxs("div", {
        className: "card bg-base-100 image-full shadow-xl",
        children: [
          f.jsx("figure", {
            children: f.jsx("img", { src: Q0, alt: "Donor card bg" }),
          }),
          f.jsxs("div", {
            className: "card-body",
            children: [
              f.jsxs("h2", {
                className: "card-title",
                children: [
                  n == null ? void 0 : n.user.first_name,
                  " ",
                  n == null ? void 0 : n.user.last_name,
                ],
              }),
              f.jsx("p", { children: n == null ? void 0 : n.user.email }),
              f.jsxs("p", {
                children: [
                  f.jsx("span", {
                    className: "font-extrabold",
                    children: "Address:",
                  }),
                  " ",
                  n == null ? void 0 : n.address,
                ],
              }),
              f.jsxs("p", {
                children: [
                  f.jsx("span", {
                    className: "font-extrabold",
                    children: "Last donation date:",
                  }),
                  " ",
                  n == null ? void 0 : n.last_donation_date,
                ],
              }),
              f.jsx("div", {
                className: "card-actions justify-end",
                children: f.jsxs("button", {
                  className: "btn btn-error cursor-text",
                  children: ["Blood group ", n.blood_group],
                }),
              }),
            ],
          }),
        ],
      }),
    });
np.propTypes = {
  donor: nt.shape({
    id: nt.number.isRequired,
    blood_group: nt.string.isRequired,
    age: nt.number.isRequired,
    address: nt.string.isRequired,
    is_available_for_donation: nt.bool.isRequired,
    last_donation_date: nt.string.isRequired,
    user: nt.shape({
      id: nt.number.isRequired,
      username: nt.string.isRequired,
      email: nt.string.isRequired,
      first_name: nt.string.isRequired,
      last_name: nt.string.isRequired,
    }).isRequired,
  }).isRequired,
};
const K0 = () => {
    const [n, i] = _.useState(""),
      [o, s] = _.useState([]);
    _.useEffect(() => {
      d();
    }, []);
    const d = (p = "") => {
        let v = "https://blood-aid-backend.vercel.app/account/available_donor/";
        p && (v += `?blood_group=${p}`),
          fetch(v, {
            method: "GET",
            headers: { "content-type": "application/json" },
          })
            .then((g) => g.json())
            .then((g) => {
              g.length > 0
                ? s(g)
                : (s([]),
                  Wt.error("No available donors found for this blood group."));
            })
            .catch((g) => {
              console.log(g.message), Wt.error("Failed to fetch data.");
            });
      },
      c = (p) => {
        i(p.target.value);
      },
      h = () => {
        n ? d(n) : d();
      };
    return f.jsxs("div", {
      className: "my-10 p-10 bg-slate-100",
      children: [
        f.jsx("h1", {
          className: "text-error text-center font-bold text-3xl",
          children: "Available Donors",
        }),
        f.jsxs("div", {
          className: "join",
          children: [
            f.jsxs("select", {
              className: "select select-bordered join-item",
              onChange: c,
              children: [
                f.jsx("option", {
                  disabled: !0,
                  selected: !0,
                  children: "Blood Group",
                }),
                f.jsx("option", { value: "O%2B", children: "O+" }),
                f.jsx("option", { value: "O-", children: "O-" }),
                f.jsx("option", { value: "A%2B", children: "A+" }),
                f.jsx("option", { value: "A-", children: "A-" }),
                f.jsx("option", { value: "B%2B", children: "B+" }),
                f.jsx("option", { value: "B-", children: "B-" }),
                f.jsx("option", { value: "AB%2B", children: "AB+" }),
                f.jsx("option", { value: "AB-", children: "AB-" }),
              ],
            }),
            f.jsx("div", {
              className: "indicator",
              children: f.jsx("button", {
                onClick: h,
                className: "btn btn-error join-item",
                children: "Filter",
              }),
            }),
          ],
        }),
        o.length > 0
          ? f.jsx("div", {
              className:
                "donor-list mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
              children: o.map((p) => f.jsx(np, { donor: p }, p._id)),
            })
          : f.jsx("p", {
              className: "text-center text-error text-2xl font-semibold",
              children: "No donors found",
            }),
      ],
    });
  },
  Y0 = "/assets/home71-DcH3w9xD.jpg",
  G0 = () =>
    f.jsx(f.Fragment, {
      children: f.jsx("section", {
        className: "md:h-[100vh] overflow-hidden my-5",
        children: f.jsx("section", {
          className: "",
          children: f.jsxs("div", {
            className:
              "container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between",
            children: [
              f.jsx("div", {
                className: "flex items-center justify-center  mt-8 lg:mt-0 ",
                children: f.jsx("img", {
                  src: Y0,
                  alt: "",
                  className:
                    "object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128",
                }),
              }),
              f.jsxs("div", {
                className:
                  "flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left",
                children: [
                  f.jsx("p", {
                    className: "text-error md:text-3xl text-md font-bold my-5",
                    children: "Help The People in Need",
                  }),
                  f.jsxs("h1", {
                    className:
                      "md:text-5xl font-extrabold leading-none text-xl",
                    children: [
                      "Welcome to Blood ",
                      f.jsx("br", {}),
                      " Donors Organization",
                    ],
                  }),
                  f.jsx("p", {
                    className: "mt-6 mb-8 text-lg sm:mb-12",
                    children:
                      "This organization is dedicated to saving lives by connecting those in need of blood with compassionate donors. We strive to build a community of kindness and care, ensuring that no one faces a medical emergency without access to lifesaving blood.",
                  }),
                  f.jsx("button", {
                    className: "btn btn-error w-1/3 text-white",
                    children: "Explore More",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  X0 = "/assets/donation1-Cl5YAnyQ.jpg",
  J0 = "/assets/home8-BEpsUjxf.jpg",
  Z0 = () =>
    f.jsxs(f.Fragment, {
      children: [
        f.jsx("p", {
          className: "text-red-600 text-center text-2xl font-bold mt-10",
          children: "What We Do",
        }),
        f.jsx("h2", {
          className:
            "text-center text-black text-3xl md:text-6xl font-extrabold mt-10",
          children: "our best services",
        }),
        f.jsx("section", {
          className: "md:h-[100vh] overflow-hidden mb-10",
          children: f.jsx("section", {
            className: "",
            children: f.jsxs("div", {
              className:
                "container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between",
              children: [
                f.jsx("div", {
                  className: "flex items-center justify-center  my-8 lg:mt-0 ",
                  children: f.jsx("img", {
                    src: X0,
                    alt: "",
                    className:
                      "object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded",
                  }),
                }),
                f.jsxs("div", {
                  className:
                    "flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left",
                  children: [
                    f.jsx("h1", {
                      className:
                        "text-5xl font-extrabold leading-none sm:text-5xl",
                      children: "Blood Donation",
                    }),
                    f.jsx("p", {
                      className: "mt-6 mb-8 text-lg sm:mb-12 text-slate-600",
                      children:
                        "Blood Donation refers to the voluntary act of giving blood for medical purposes, typically to help individuals who need blood transfusions due to surgery, injury, or illness.",
                    }),
                    f.jsx("button", {
                      className: "btn btn-error w-1/3 text-white",
                      children: "Read More",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        f.jsx("section", {
          className: "md:h-[100vh] overflow-hidden my-10 lg:my-0",
          children: f.jsxs("div", {
            className:
              "container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center",
            children: [
              f.jsxs("div", {
                className:
                  "flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left",
                children: [
                  f.jsx("h1", {
                    className:
                      "text-5xl font-extrabold leading-none sm:text-5xl",
                    children: "Health Check",
                  }),
                  f.jsx("p", {
                    className: "mt-6 mb-8 text-lg sm:mb-12 text-slate-600",
                    children:
                      "Health Check refers to a comprehensive evaluation of an individual’s overall health through medical examinations, diagnostic tests, and consultations with healthcare professionals.",
                  }),
                  f.jsx("button", {
                    className: "btn btn-error w-1/3 text-white",
                    children: "Read More",
                  }),
                ],
              }),
              f.jsx("div", {
                className: "flex items-center justify-center  my-8 lg:mt-0 ",
                children: f.jsx("img", {
                  src: J0,
                  alt: "",
                  className:
                    "object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  ex = "/assets/home9-n_0APXqm.jpg",
  tx = () =>
    f.jsx(f.Fragment, {
      children: f.jsxs("div", {
        className: "hero min-h-screen",
        style: { backgroundImage: `url(${ex})` },
        children: [
          f.jsx("div", { className: "hero-overlay bg-opacity-60" }),
          f.jsx("div", {
            className: "hero-content text-neutral-content text-center",
            children: f.jsxs("div", {
              className: "max-w-md",
              children: [
                f.jsx("h1", {
                  className: "mb-5 text-white text-5xl font-bold",
                  children: "Blood Donation Campaign",
                }),
                f.jsx("p", {
                  className: "mb-5 text-slate-50",
                  children:
                    "A Blood Donation Campaign is a community-driven initiative aimed at collecting blood donations to support healthcare facilities, emergency needs, or people requiring blood transfusions due to medical conditions, surgeries, or accidents.",
                }),
                f.jsx("button", {
                  className: "btn btn-error text-white",
                  children: "Get Started",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  rx = "/assets/img1-Boqk__k6.jpg",
  nx = "/assets/img2-Cz7HI4Y6.jpg",
  lx = "/assets/img3-Bapb8mVU.jpg",
  ix = "/assets/img4-Dejz3L8E.jpg",
  ox = "/assets/img5-DnD18499.jpg",
  ax = () =>
    f.jsxs("div", {
      className: "my-10 p-10 bg-slate-50",
      children: [
        f.jsx("h1", {
          className: "text-error text-center font-bold text-3xl",
          children: "Our Blood Donation History",
        }),
        f.jsx("div", {
          className:
            "relative flex items-center justify-center w-full dark:text-gray-900",
          children: f.jsxs("div", {
            className:
              "flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8",
            children: [
              f.jsx("div", {
                className: "relative flex flex-shrink-0 w-full sm:w-auto",
                children: f.jsx("img", {
                  className:
                    "object-cover object-center dark:bg-gray-500 h-96 aspect-square",
                  src: rx,
                  alt: "Image 1",
                }),
              }),
              f.jsx("div", {
                className: "relative flex flex-shrink-0 w-full sm:w-auto",
                children: f.jsx("img", {
                  className:
                    "object-cover object-center dark:bg-gray-500 h-96 aspect-square",
                  src: nx,
                  alt: "Image 2",
                }),
              }),
              f.jsx("div", {
                className: "relative flex flex-shrink-0 w-full sm:w-auto",
                children: f.jsx("img", {
                  className:
                    "object-cover object-center dark:bg-gray-500 h-96 aspect-square",
                  src: lx,
                  alt: "Image 3",
                }),
              }),
              f.jsx("div", {
                className: "relative flex flex-shrink-0 w-full sm:w-auto",
                children: f.jsx("img", {
                  className:
                    "object-cover object-center dark:bg-gray-500 h-96 aspect-square",
                  src: ix,
                  alt: "Image 4",
                }),
              }),
              f.jsx("div", {
                className: "relative flex flex-shrink-0 w-full sm:w-auto",
                children: f.jsx("img", {
                  className:
                    "object-cover object-center dark:bg-gray-500 h-96 aspect-square",
                  src: ox,
                  alt: "Image 5",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  sx = "/assets/postbg-L6qXf2fz.avif",
  lp = ({ post: n }) => {
    const i = (o, s) => {
      const d = { event_id: o, recipient_id: s };
      console.log(d),
        fetch("https://blood-aid-backend.vercel.app/dashboard/create/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Token ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify(d),
        })
          .then((c) => c.json())
          .then((c) => {
            console.log(c),
              c.message
                ? (Wt.success(c.message), window.location.reload())
                : Wt.error(c.error || "Request failed");
          })
          .catch((c) => {
            console.log(c.message);
          });
    };
    return f.jsx(f.Fragment, {
      children: f.jsxs("div", {
        className: "card bg-base-100 image-full shadow-xl",
        children: [
          f.jsx("figure", {
            children: f.jsx("img", { src: sx, alt: "Donor card bg" }),
          }),
          f.jsxs("div", {
            className: "card-body",
            children: [
              f.jsxs("h2", {
                className: "card-title",
                children: ["Recipient: ", n == null ? void 0 : n.creator],
              }),
              f.jsxs("p", {
                children: [
                  f.jsx("span", { className: "font-bold", children: "Title:" }),
                  " ",
                  n.title,
                ],
              }),
              f.jsxs("p", {
                children: [
                  f.jsx("span", {
                    className: "font-bold",
                    children: "Description:",
                  }),
                  " ",
                  n == null ? void 0 : n.description,
                ],
              }),
              f.jsxs("p", {
                children: [
                  f.jsx("span", {
                    className: "font-bold",
                    children: "Blood Group: ",
                  }),
                  f.jsx("span", {
                    className: "text-error font-bold",
                    children: n == null ? void 0 : n.blood_group,
                  }),
                ],
              }),
              f.jsxs("p", {
                children: [
                  f.jsx("span", {
                    className: "font-bold",
                    children: "Status:",
                  }),
                  " ",
                  n == null ? void 0 : n.status,
                ],
              }),
              f.jsxs("p", {
                children: [
                  f.jsx("span", {
                    className: "font-bold",
                    children: "Created at:",
                  }),
                  " ",
                  new Date(n.created_at).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: !0,
                  }),
                ],
              }),
              f.jsx("div", {
                className: "card-actions justify-end",
                children: f.jsx("button", {
                  disabled: localStorage.getItem("username") === n.creator,
                  onClick: () => i(n.id, n.creator_id),
                  className: "btn btn-error btn-xs",
                  children: "Accept",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
lp.propTypes = {
  post: nt.shape({
    id: nt.number.isRequired,
    creator: nt.string.isRequired,
    title: nt.string.isRequired,
    status: nt.string.isRequired,
    description: nt.string,
    blood_group: nt.string.isRequired,
    created_at: nt.string.isRequired,
    creator_id: nt.number.isRequired,
  }).isRequired,
};
const ux = () => {
    const [n, i] = _.useState([]),
      [o, s] = _.useState("");
    _.useEffect(() => {
      d();
    }, []);
    const d = (p = "") => {
        let v = "https://blood-aid-backend.vercel.app/event/bloodevents/";
        p && (v += `?blood_group=${p}`),
          fetch(v, {
            method: "GET",
            headers: { "content-type": "application/json" },
          })
            .then((g) => g.json())
            .then((g) => {
              console.log(g);
              const x = g.filter((C) => C.status === "pending");
              i(x);
            })
            .catch((g) => {
              console.log(g.message);
            });
      },
      c = (p) => {
        s(p.target.value);
      },
      h = () => {
        o ? d(o) : d();
      };
    return f.jsx(f.Fragment, {
      children: f.jsxs("div", {
        className: "my-10 p-10 bg-slate-100",
        children: [
          f.jsx("h1", {
            className: "text-error text-center font-bold text-3xl",
            children: "Blood Requests",
          }),
          f.jsxs("div", {
            className: "join",
            children: [
              f.jsxs("select", {
                className: "select select-bordered join-item",
                onChange: c,
                children: [
                  f.jsx("option", {
                    disabled: !0,
                    selected: !0,
                    children: "Blood Group",
                  }),
                  f.jsx("option", { value: "O%2B", children: "O+" }),
                  f.jsx("option", { value: "O-", children: "O-" }),
                  f.jsx("option", { value: "A%2B", children: "A+" }),
                  f.jsx("option", { value: "A-", children: "A-" }),
                  f.jsx("option", { value: "B%2B", children: "B+" }),
                  f.jsx("option", { value: "B-", children: "B-" }),
                  f.jsx("option", { value: "AB%2B", children: "AB+" }),
                  f.jsx("option", { value: "AB-", children: "AB-" }),
                ],
              }),
              f.jsx("div", {
                className: "indicator",
                children: f.jsx("button", {
                  onClick: h,
                  className: "btn btn-error join-item",
                  children: "Filter",
                }),
              }),
            ],
          }),
          n.length > 0
            ? f.jsx("div", {
                className:
                  "donor-list mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
                children: n.map((p) => f.jsx(lp, { post: p }, p._id)),
              })
            : f.jsx("p", {
                className: "text-center text-error text-2xl font-semibold",
                children: "No donors found",
              }),
        ],
      }),
    });
  },
  cx = () =>
    f.jsxs("div", {
      children: [
        f.jsx(Jn, {
          children: f.jsx("title", { children: "Blood Aid | Home" }),
        }),
        f.jsx("div", { children: f.jsx(q0, {}) }),
        f.jsx("div", { children: f.jsx(K0, {}) }),
        f.jsx("div", { children: f.jsx(G0, {}) }),
        f.jsx("div", { children: f.jsx(ux, {}) }),
        f.jsx("div", { children: f.jsx(tx, {}) }),
        f.jsx("div", { children: f.jsx(ax, {}) }),
        f.jsx("div", { children: f.jsx(Z0, {}) }),
      ],
    }),
  ph = () => {
    var h, p, v, g, x, C;
    const {
        register: n,
        formState: { errors: i },
        handleSubmit: o,
        reset: s,
      } = ga(),
      d = localStorage.getItem("donor_id");
    _.useEffect(() => {
      fetch(`https://blood-aid-backend.vercel.app/account/list/${d}/`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Token ${localStorage.getItem("authToken")}`,
        },
      })
        .then((w) => w.json())
        .then((w) => {
          s({
            username: (w == null ? void 0 : w.user.username) || "",
            first_name: (w == null ? void 0 : w.user.first_name) || "",
            last_name: (w == null ? void 0 : w.user.last_name) || "",
            adress: (w == null ? void 0 : w.address) || "",
            age: (w == null ? void 0 : w.age) || "",
            blood_group: (w == null ? void 0 : w.blood_group) || "",
            last_donation: (w == null ? void 0 : w.last_donation_date) || "",
            available_donation:
              (w == null ? void 0 : w.is_available_for_donation) || !1,
          });
        });
    }, [d, s]);
    const c = (w) => {
      const R = {
        user: {
          username: w.username,
          first_name: w.first_name,
          last_name: w.last_name,
        },
        age: parseInt(w.age, 10),
        address: w.adress,
        last_donation_date: new Date(w.last_donation)
          .toISOString()
          .split("T")[0],
        is_available_for_donation: w.available_donation,
        blood_group: w.blood_group,
      };
      fetch(`https://blood-aid-backend.vercel.app/account/list/${d}/`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Token ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(R),
      })
        .then((F) => F.json())
        .then((F) => {
          console.log("update data", F),
            Wt.success("Profile updated successfully");
        })
        .catch((F) => {
          console.log(F.message);
        });
    };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx(Jn, { children: f.jsx("title", { children: "Update profile" }) }),
        f.jsx("div", {
          className:
            "card overflow-hidden p-5  mx-auto w-full shadow-xl bg-base-100 md:my-5",
          children: f.jsxs("div", {
            children: [
              f.jsx("h1", {
                className: "text-4xl text-center font-bold",
                children: "Update Profile",
              }),
              f.jsxs("form", {
                className: "mt-6",
                onSubmit: o(c),
                children: [
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "User Name",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("username", {}),
                        disabled: !0,
                        type: "text",
                        placeholder: "Enter Your User Name",
                        className: "input input-bordered w-full",
                      }),
                      i.first_name &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children:
                            (h = i.first_name) == null ? void 0 : h.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "First Name",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("first_name", {}),
                        type: "text",
                        placeholder: "Enter Your First Name",
                        className: "input input-bordered w-full",
                      }),
                      i.first_name &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children:
                            (p = i.first_name) == null ? void 0 : p.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Last Name",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("last_name", {}),
                        type: "text",
                        placeholder: "Enter Your Last Name",
                        className: "input input-bordered w-full",
                      }),
                      i.last_name &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children:
                            (v = i.last_name) == null ? void 0 : v.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Adress",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("adress", {}),
                        type: "text",
                        placeholder: "Enter Your Adress",
                        className: "input input-bordered w-full",
                      }),
                      i.adress &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children: (g = i.adress) == null ? void 0 : g.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Age",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("age", {}),
                        type: "number",
                        placeholder: "Enter Your Last Name",
                        className: "input input-bordered w-full",
                      }),
                      i.age &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children: (x = i.age) == null ? void 0 : x.message,
                        }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Blood Group",
                        }),
                      }),
                      f.jsxs("select", {
                        ...n("blood_group", {}),
                        className: "select select-bordered w-full",
                        children: [
                          f.jsx("option", {
                            disabled: !0,
                            selected: !0,
                            children: "Please Select Blood Group",
                          }),
                          f.jsx("option", { children: "O+" }),
                          f.jsx("option", { children: "O-" }),
                          f.jsx("option", { children: "A+" }),
                          f.jsx("option", { children: "A-" }),
                          f.jsx("option", { children: "B+" }),
                          f.jsx("option", { children: "B-" }),
                          f.jsx("option", { children: "AB+" }),
                          f.jsx("option", { children: "AB-" }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "form-control w-full",
                    children: [
                      f.jsx("label", {
                        className: "label",
                        children: f.jsx("span", {
                          className: "label-text",
                          children: "Last Donation",
                        }),
                      }),
                      f.jsx("input", {
                        ...n("last_donation", {}),
                        type: "date",
                        placeholder: "Last donation date",
                        className: "input input-bordered w-full",
                      }),
                      i.last_donation &&
                        f.jsx("p", {
                          role: "alert",
                          className: "text-error",
                          children:
                            (C = i.last_donation) == null ? void 0 : C.message,
                        }),
                    ],
                  }),
                  f.jsx("div", {
                    className: "form-control w-full mt-4",
                    children: f.jsxs("label", {
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          ...n("available_donation"),
                        }),
                        "Available for Donation",
                      ],
                    }),
                  }),
                  f.jsx("input", {
                    className:
                      "btn btn-outline btn-error w-full mt-5 text-xl font-bold",
                    value: "Update",
                    type: "submit",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  mh = () => {
    var c;
    const {
        register: n,
        formState: { errors: i },
        handleSubmit: o,
        reset: s,
      } = ga(),
      d = (h) => {
        const p = {
          title: h.title,
          description: h.description,
          blood_group: h.blood_group,
        };
        console.log(p),
          fetch("https://blood-aid-backend.vercel.app/event/create/", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Token ${localStorage.getItem("authToken")}`,
            },
            body: JSON.stringify(p),
          })
            .then((v) => v.json())
            .then((v) => {
              console.log(v),
                v.message
                  ? (Wt.success(v.message), s())
                  : Wt.error(v.error || "Event creation failed");
            });
      };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx(Jn, { children: f.jsx("title", { children: "Create Event" }) }),
        f.jsxs("div", {
          className: " p-7",
          children: [
            f.jsx("h1", {
              className: "text-3xl font-bold",
              children: "Request for blood",
            }),
            f.jsxs("form", {
              className: "mt-6",
              onSubmit: o(d),
              children: [
                f.jsxs("div", {
                  className: "form-control w-full",
                  children: [
                    f.jsx("label", {
                      className: "label",
                      children: f.jsx("span", {
                        className: "label-text",
                        children: "Title",
                      }),
                    }),
                    f.jsx("input", {
                      ...n("title", { required: "Title is required" }),
                      type: "text",
                      placeholder: "Enter title for blood request...",
                      className: "input input-bordered w-full",
                    }),
                    i.title &&
                      f.jsx("p", {
                        role: "alert",
                        className: "text-error",
                        children: (c = i.title) == null ? void 0 : c.message,
                      }),
                  ],
                }),
                f.jsxs("div", {
                  className: "form-control w-full",
                  children: [
                    f.jsx("label", {
                      className: "label",
                      children: f.jsx("span", {
                        className: "label-text",
                        children: "Description",
                      }),
                    }),
                    f.jsx("input", {
                      ...n("description", {
                        required: "Description is required",
                      }),
                      type: "text",
                      placeholder: "Enter description for blood request...",
                      className: "input input-bordered w-full",
                    }),
                    i.description &&
                      f.jsx("p", {
                        role: "alert",
                        className: "text-error",
                        children: i.description.message,
                      }),
                  ],
                }),
                f.jsxs("div", {
                  className: "form-control w-full",
                  children: [
                    f.jsx("label", {
                      className: "label",
                      children: f.jsx("span", {
                        className: "label-text",
                        children: "Blood Group",
                      }),
                    }),
                    f.jsxs("select", {
                      ...n("blood_group", {
                        required: "Blood group is required",
                      }),
                      className: "select select-bordered w-full",
                      children: [
                        f.jsx("option", {
                          disabled: !0,
                          selected: !0,
                          children: "Please Select Blood Group",
                        }),
                        f.jsx("option", { children: "O+" }),
                        f.jsx("option", { children: "O-" }),
                        f.jsx("option", { children: "A+" }),
                        f.jsx("option", { children: "A-" }),
                        f.jsx("option", { children: "B+" }),
                        f.jsx("option", { children: "B-" }),
                        f.jsx("option", { children: "AB+" }),
                        f.jsx("option", { children: "AB-" }),
                      ],
                    }),
                  ],
                }),
                f.jsx("input", {
                  className: "btn btn-error w-full mt-5",
                  value: "Create Blood Request",
                  type: "submit",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  vh = () => {
    const [n, i] = _.useState([]);
    _.useEffect(() => {
      fetch("https://blood-aid-backend.vercel.app/event/list/", {
        headers: {
          "content-type": "application/json",
          authorization: `Token ${localStorage.getItem("authToken")}`,
        },
      })
        .then((s) => s.json())
        .then((s) => {
          const d = s.filter((c) => c.status === "pending");
          i(d);
        });
    }, []),
      console.log(n);
    const o = (s, d) => {
      const c = { event_id: s, recipient_id: d };
      console.log(c),
        fetch("https://blood-aid-backend.vercel.app/dashboard/create/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Token ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify(c),
        })
          .then((h) => h.json())
          .then((h) => {
            console.log(h),
              h.message
                ? (Wt.success(h.message), window.location.reload())
                : Wt.error(h.error || "Request failed");
          })
          .catch((h) => {
            console.log(h.message);
          });
    };
    return f.jsxs(f.Fragment, {
      children: [
        f.jsx(Jn, { children: f.jsx("title", { children: "All Event" }) }),
        f.jsx("div", {
          className: "lg:h-[100vh]",
          children: f.jsx("div", {
            className: "overflow-x-auto",
            children: f.jsxs("table", {
              className: "table",
              children: [
                f.jsx("thead", {
                  children: f.jsxs("tr", {
                    children: [
                      f.jsx("th", {}),
                      f.jsx("th", { children: "Recipient" }),
                      f.jsx("th", { children: "Title" }),
                      f.jsx("th", { children: "Description" }),
                      f.jsx("th", { children: "Blood Group" }),
                      f.jsx("th", { children: "Request At" }),
                      f.jsx("th", { children: "Action" }),
                    ],
                  }),
                }),
                f.jsx("tbody", {
                  children:
                    n == null
                      ? void 0
                      : n.map((s) =>
                          f.jsxs(
                            "tr",
                            {
                              children: [
                                f.jsx("td", {}),
                                f.jsx("td", { children: s.creator }),
                                f.jsx("td", { children: s.title }),
                                f.jsx("td", { children: s.description }),
                                f.jsx("td", { children: s.blood_group }),
                                f.jsx("th", {
                                  children: new Date(
                                    s.created_at
                                  ).toLocaleString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric",
                                    hour12: !0,
                                  }),
                                }),
                                f.jsx("th", {
                                  children:
                                    s.status == "accepted"
                                      ? f.jsx("p", {
                                          className: "text-success",
                                          children: "Accepted",
                                        })
                                      : f.jsx("button", {
                                          disabled:
                                            localStorage.getItem("username") ===
                                            s.creator,
                                          onClick: () => o(s.id, s.creator_id),
                                          className: "btn btn-error btn-xs",
                                          children: "Accept",
                                        }),
                                }),
                              ],
                            },
                            s.id
                          )
                        ),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  gh = () => {
    const [n, i] = _.useState([]),
      o = localStorage.getItem("username");
    return (
      _.useEffect(() => {
        fetch("https://blood-aid-backend.vercel.app/dashboard/list/", {
          headers: {
            "content-type": "application/json",
            authorization: `Token ${localStorage.getItem("authToken")}`,
          },
        })
          .then((s) => s.json())
          .then((s) => {
            i(s);
          });
      }, []),
      console.log(n),
      f.jsxs(f.Fragment, {
        children: [
          f.jsx(Jn, {
            children: f.jsx("title", { children: "Donation History" }),
          }),
          f.jsx("div", {
            className: "lg:h-[100vh]",
            children: f.jsx("div", {
              className: "overflow-x-auto",
              children: f.jsxs("table", {
                className: "table",
                children: [
                  f.jsx("thead", {
                    children: f.jsxs("tr", {
                      children: [
                        f.jsx("th", {}),
                        f.jsx("th", { children: "Donor" }),
                        f.jsx("th", { children: "Recipient" }),
                        f.jsx("th", { children: "Event" }),
                        f.jsx("th", { children: "Blood Group" }),
                        f.jsx("th", { children: "Accept At" }),
                        f.jsx("th", { children: "Status" }),
                      ],
                    }),
                  }),
                  f.jsx("tbody", {
                    children:
                      n == null
                        ? void 0
                        : n.map((s) =>
                            f.jsxs(
                              "tr",
                              {
                                children: [
                                  f.jsx("td", {}),
                                  f.jsx("td", { children: s.donor }),
                                  f.jsx("td", { children: s.recipient }),
                                  f.jsx("td", { children: s.event }),
                                  f.jsx("td", { children: s.blood_group }),
                                  f.jsx("td", { children: s.accepted_at }),
                                  o === s.recipient
                                    ? f.jsx("td", { children: "Recieved" })
                                    : f.jsx("td", {
                                        className: "text-success",
                                        children: s.status,
                                      }),
                                ],
                              },
                              s.id
                            )
                          ),
                  }),
                ],
              }),
            }),
          }),
        ],
      })
    );
  },
  Al = ({ children: n }) => {
    const i = Or(),
      o = localStorage.getItem("username"),
      s = localStorage.getItem("authToken");
    return o && s
      ? n
      : f.jsx(gg, { to: "/login", state: { from: i }, replace: !0 });
  };
Al.propTypes = { children: nt.node.isRequired };
const dx = () =>
    f.jsx(f.Fragment, {
      children: f.jsx("section", {
        className:
          "flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800",
        children: f.jsx("div", {
          className:
            "container flex flex-col items-center justify-center px-5 mx-auto my-8",
          children: f.jsxs("div", {
            className: "max-w-md text-center",
            children: [
              f.jsxs("h2", {
                className: "mb-8 font-extrabold text-9xl dark:text-gray-400",
                children: [
                  f.jsx("span", { className: "sr-only", children: "Error" }),
                  "404",
                ],
              }),
              f.jsx("p", {
                className: "text-2xl font-semibold md:text-3xl",
                children: "Sorry, we couldn't find this page.",
              }),
              f.jsx("p", {
                className: "mt-4 mb-8 dark:text-gray-600",
                children:
                  "But dont worry, you can find plenty of other things on our homepage.",
              }),
              f.jsx(At, {
                to: "/",
                className:
                  "px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50",
                children: "Back to homepage",
              }),
            ],
          }),
        }),
      }),
    }),
  fx = () =>
    f.jsx("div", {
      children: f.jsxs("div", {
        className: "flex",
        children: [
          f.jsx("div", {
            className: "w-64 min-h-screen bg-error text-white",
            children: f.jsxs("ul", {
              className: "menu p-4",
              children: [
                f.jsxs(f.Fragment, {
                  children: [
                    f.jsx("li", {
                      children: f.jsx(Fl, {
                        to: "/dashboard/update_profile",
                        children: "Update Profile",
                      }),
                    }),
                    f.jsx("li", {
                      children: f.jsx(Fl, {
                        to: "/dashboard/events",
                        children: "Create Event",
                      }),
                    }),
                    f.jsx("li", {
                      children: f.jsx(Fl, {
                        to: "/dashboard/request",
                        children: "All Events",
                      }),
                    }),
                    f.jsx("li", {
                      children: f.jsx(Fl, {
                        to: "/dashboard/history",
                        children: "Donation History",
                      }),
                    }),
                  ],
                }),
                f.jsx("div", { className: "divider" }),
                f.jsx("li", {
                  children: f.jsx(Fl, { to: "/", children: "Home" }),
                }),
              ],
            }),
          }),
          f.jsx("div", { className: "flex-1 p-8", children: f.jsx(Dh, {}) }),
        ],
      }),
    }),
  hx = Bg([
    {
      path: "/",
      element: f.jsx(Xy, {}),
      children: [
        { path: "/", element: f.jsx(cx, {}) },
        { path: "update_profile", element: f.jsx(ph, {}) },
        { path: "events", element: f.jsx(mh, {}) },
        { path: "request", element: f.jsx(vh, {}) },
        { path: "history", element: f.jsx(gh, {}) },
        { path: "login", element: f.jsx(H0, {}) },
        { path: "signup", element: f.jsx(W0, {}) },
      ],
    },
    {
      path: "/dashboard",
      element: f.jsx(Al, { children: f.jsx(fx, {}) }),
      errorElement: f.jsx(dx, {}),
      children: [
        {
          path: "/dashboard/update_profile",
          element: f.jsx(Al, { children: f.jsx(ph, {}) }),
        },
        {
          path: "/dashboard/events",
          element: f.jsx(Al, { children: f.jsx(mh, {}) }),
        },
        {
          path: "/dashboard/request",
          element: f.jsx(Al, { children: f.jsx(vh, {}) }),
        },
        {
          path: "/dashboard/history",
          element: f.jsx(Al, { children: f.jsx(gh, {}) }),
        },
      ],
    },
  ]);
Jm.createRoot(document.getElementById("root")).render(
  f.jsx(_.StrictMode, {
    children: f.jsx($h, {
      children: f.jsxs(rp, {
        children: [f.jsx(ey, { router: hx }), f.jsx(Yy, {})],
      }),
    }),
  })
);
