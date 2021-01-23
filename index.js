// https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js
! function () {
    var e;
    try {
        function t(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function n(e) {
            return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function r(e, t) {
            return (r = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function i() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }

        function o(e, t, n) {
            return (o = i() ? Reflect.construct : function (e, t, n) {
                var i = [null];
                i.push.apply(i, t);
                var o = new(Function.bind.apply(e, i));
                return n && r(o, n.prototype), o
            }).apply(null, arguments)
        }

        function a(e) {
            return (a = function (e) {
                if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
                var t;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

                function i() {
                    return o(e, arguments, n(this).constructor)
                }
                return i.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), r(i, e)
            })(e)
        }
        var c = "hmAKKQbM5cnNdzYambeGgpJTDcyYFuymMj6U3x4gerRRqh43p5t2hFKxYH9wduigjPoN169XTFBlPYUlrgqHRrT6pufJ+VbOeWAuI8g3yrDpb9EPA5Fx2ZbbKz0yFpkJl2LLxOeyJBELUr/mHnHdng==";

        function u() {}
        var l = {};

        function s(e, t) {
            l.hasOwnProperty(e) || (l[e] = []), l[e].push(t)
        }

        function f(e, t) {
            if (l.hasOwnProperty(e)) {
                var n = l[e],
                    r = n.indexOf(t);
                r >= 0 && n.splice(r, 1)
            }
        }

        function p(e, t, n) {
            if (void 0 === n && (n = !1), l.hasOwnProperty(e))
                if (n) {
                    var r = {
                        type: e,
                        detail: t
                    };
                    l[e].forEach((function (e) {
                        try {
                            e(r)
                        } catch (e) {}
                    }))
                } else p(e, t, !0)
        }
        var d = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })),
            h = {
                WHILE_LIST: 1,
                NORMAL: 2,
                ERROR: 4,
                PROMISE_ERROR: 8,
                AJAX_ERROR: 16,
                JS_ERROR: 32,
                PIC_ERROR: 64,
                CSS_ERROR: 128
            },
            v = [];

        function w(e) {
            g(h.NORMAL, e)
        }

        function y(e) {
            g(h.ERROR, e),
                function () {
                    var e;
                    0 !== v.length && (e = v.reverse(), function (e, t) {
                        var n = new XMLHttpRequest;
                        "withCredentials" in n || (n = new XDomainRequest);
                        for (var r = [], i = t.length, o = 0; o < i; o++) r.push(["msg[" + o + "]=" + t[o].msg, "level[" + o + "]=" + t[o].level].join("&"));
                        r.push("count=" + i), n.open("POST", e), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.send(r.join("&"))
                    }("https://aegis.qq.com/collect?id=LsKWKztteVKOjNJGsl&sessionId=" + d + "&version=210114-160020-429", e), v = [])
                }()
        }

        function g(e, t) {
            v.unshift({
                level: e,
                msg: t
            })
        }
        e = {
            captureException: x
        };
        var m = {
            LOG: 1,
            ERROR: 2
        };

        function b(e, t) {
            return function () {
                try {
                    return t.apply(this, arguments)
                } catch (t) {
                    x(t, e), p("error", t)
                }
            }
        }
        var O = S(m.LOG, (function () {})),
            E = S(m.ERROR, (function () {}));

        function x(e, t) {
            var n = {
                error: {
                    message: e.name + " " + e.message,
                    stack: e.stack
                },
                context: t
            };
            y(JSON.stringify(n))
        }

        function S(e, t) {
            return function () {
                for (var n = [], r = 0, i = arguments.length; r < i; r++) {
                    var o = arguments[r];
                    "object" == typeof o && (o = JSON.stringify(o)), n.push(arguments[r])
                }
                var a = n.join(",");
                switch (e) {
                    case m.LOG:
                        w(a);
                        break;
                    case m.ERROR:
                        y(a)
                }
                t.apply(void 0, arguments)
            }
        }
        var _ = window.encodeURIComponent;

        function R() {}
        var C = location.origin || location.protocol + "//" + location.host,
            A = "https://open.work.weixin.qq.com",
            j = A + "/wwopen/openData/frame/index#origin=" + _(C);

        function D(e, t, n) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !0
            })
        }

        function T(e) {
            var t = Object.create(null);
            return Object.getOwnPropertyNames(e).forEach((function (n) {
                if ("prototype" !== n) {
                    var r = Object.getOwnPropertyDescriptor(e, n),
                        i = Object.create(null);
                    D(i, "value", r.value), D(i, "get", r.get), D(i, "set", r.set), D(t, n, Object.freeze(i))
                }
            })), t
        }
        var P, k, M, N = function () {
                var e = {
                        JSON: window.JSON,
                        Promise: window.Promise,
                        Uint8Array: window.Uint8Array,
                        Function: window.Function,
                        Object: window.Object,
                        Array: window.Array,
                        String: window.String,
                        WeakMap: window.WeakMap,
                        Element: window.Element,
                        ShadowRoot: window.ShadowRoot,
                        Image: window.Image,
                        Node: window.Node,
                        EventTarget: window.EventTarget,
                        HTMLIFrameElement: window.HTMLIFrameElement,
                        CanvasRenderingContext2D: window.CanvasRenderingContext2D
                    },
                    t = {
                        fetch: window.fetch,
                        parseInt: window.parseInt,
                        setTimeout: window.setTimeout
                    },
                    n = Object.create(null);
                return D(n, "protected", Object.create(null)), D(n, "singleton", Object.create(null)), Object.keys(e).forEach((function (t) {
                    e[t] && (D(n.singleton, t, e[t]), D(n.protected, t, T(e[t])), e[t].prototype && (D(n.protected[t], "prototype", T(e[t].prototype)), Object.freeze(n.protected[t].prototype)), Object.freeze(n.protected[t]))
                })), Object.keys(t).forEach((function (e) {
                    D(n.singleton, e, t[e])
                })), D(n.singleton, "call", Function.prototype.call.bind(Function.prototype.call)), Object.defineProperty(n, "__version__", {
                    value: "wwopendata.web.js@210114-160020-429"
                }), Object.freeze(n.protected), Object.freeze(n.singleton), Object.freeze(n), n
            }(),
            F = null == N ? void 0 : N.protected,
            I = null == N ? void 0 : N.singleton,
            L = (null == I ? void 0 : I.call) || Function.prototype.call.bind(Function.prototype.call),
            W = function (e) {
                return e && L(q, J, e)
            },
            q = ue(F, "Function.prototype.bind"),
            J = ue(F, "Function.prototype.call"),
            H = (ue(F, "Object.create"), ue(F, "Object.defineProperty")),
            z = ue(I, "setTimeout", "direct"),
            U = W(ue(F, "Object.prototype.hasOwnProperty")),
            B = (W(ue(F, "Array.prototype.push")), W(ue(F, "Array.prototype.forEach"))),
            X = W(ue(F, "String.prototype.indexOf")),
            G = W(ue(F, "String.prototype.slice")),
            K = (ue(I, "Image", "direct"), W(ue(F, "Image.prototype.src", "set")) || W(ue(F, "HTMLImageElement.prototype.src", "set")) || function (e, t) {
                e.src = t
            }),
            V = W(ue(F, "HTMLIframeElement.prototype.contentWindow", "get")) || function (e) {
                return e.contentWindow
            },
            Y = W(ue(F, "HTMLIframeElement.prototype.contentDocument", "get")) || function (e) {
                return e.contentDocument
            },
            Q = W(ue(F, "EventTarget.prototype.addEventListener")) || function (e, t, n) {
                e.addEventListener(t, n)
            },
            Z = W(ue(F, "CanvasRenderingContext2D.prototype.fillText")),
            $ = W(ue(F, "CanvasRenderingContext2D.prototype.drawImage")),
            ee = W(ue(F, "CanvasRenderingContext2D.prototype.strokeText")),
            te = W(ue(F, "CanvasRenderingContext2D.prototype.measureText")),
            ne = ue(I, "WeakMap", "direct"),
            re = W(ue(F, "WeakMap.prototype.get")),
            ie = W(ue(F, "WeakMap.prototype.set")),
            oe = W(ue(F, "Element.prototype.attachShadow")),
            ae = W(ue(F, "Node.prototype.textContent", "set"));

        function ce(e) {
            for (var t = ue(F, "JSON.parse"), n = ue(I, "Uint8Array", "direct"), r = ue(F, "String.fromCodePoint"), i = r, o = new n(e), a = "", c = 0, u = o.length; c < u;) {
                var l = o[c++];
                if (l <= 127) a += i(l);
                else {
                    var s = 63 & o[c++];
                    if (l <= 223) a += i((31 & l) << 6 | s);
                    else {
                        var f = 63 & o[c++];
                        if (l <= 239) a += i((15 & l) << 12 | s << 6 | f);
                        else {
                            var p = 63 & o[c++];
                            r ? a += i((7 & l) << 18 | s << 12 | f << 6 | p) : (a += i(63), c += 3)
                        }
                    }
                }
            }
            return t(a)
        }

        function ue(e, t, n) {
            var r, i, o, a, c;
            void 0 === n && (n = "value");
            var u = (null == F || null == (r = F.String) ? void 0 : r.prototype.split.value) || window.String.prototype.split,
                l = (null == F || null == (i = F.Array) ? void 0 : i.prototype.pop.value) || window.Array.prototype.pop,
                s = (null == F || null == (o = F.Array) ? void 0 : o.prototype.forEach.value) || window.Array.prototype.forEach,
                f = (null == F || null == (a = F.Object) ? void 0 : a.getOwnPropertyDescriptor.value) || Object.getOwnPropertyDescriptor,
                p = L(u, t, "."),
                d = L(l, p),
                h = e,
                v = window;
            if (L(s, p, (function (e) {
                h && (h = h[e]), v && (v = v[e])
            })), h && h[d]) {
                if (h = h[d], "direct" === n) return h;
                if (h[n]) return h[n]
            }
            if (v) return "direct" === n || "value" === n ? v[d] : null == (c = f(v, d)) ? void 0 : c[n]
        }
        var le = (null == (P = window.crypto) ? void 0 : P.subtle) || (null == (k = window.crypto) ? void 0 : k.webkitSubtle);

        function se(e, t) {
            if (U(e, t)) return e[t]
        }

        function fe(e, t, n) {
            H(e, t, {
                value: n,
                writable: !0,
                enumerable: !0,
                configurable: !0
            })
        }

        function pe(e, t, n, r, i) {
            if (window.fetch) window.fetch(e, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            }).then((function (e) {
                if (200 === e.status) return i ? e.arrayBuffer() : e.json();
                throw new Error("Invalid response status " + e.status)
            })).then(n, r);
            else {
                var o = new XMLHttpRequest;
                o.open("POST", e), o.withCredentials = !0, i && (o.responseType = "arraybuffer"), o.setRequestHeader("Content-Type", "application/json"), o.onreadystatechange = function () {
                    if (o.readyState === XMLHttpRequest.DONE)
                        if (200 === o.status)
                            if (i) n(o.response);
                            else try {
                                n(JSON.parse(o.responseText))
                            } catch (e) {
                                r(new Error("Parse response error"))
                            } else r(new Error("Invalid response status " + o.status))
                }, o.onerror = function () {
                    r(new Error("Request error"))
                }, o.send(JSON.stringify(t))
            }
        }
        var de = {},
            he = 1,
            ve = {};

        function we(e, t) {
            var n = "" + he++;
            fe(de, n, t),
                function (e, t) {
                    var n = Math.random(),
                        r = A + "/wwopen/openData/getOpenData?f=json&r=" + n;
                    O("[fetchData] begin #" + t + " (" + n + ")");
                    var i = M || (M = le.importKey("raw", function (e) {
                        for (var t = ue(I, "Uint8Array", "direct"), n = ue(I, "parseInt", "direct"), r = W(ue(F, "String.prototype.substring")), i = new t(e.length / 2), o = 0, a = e.length; o < a; o += 2) i[o / 2] = n(r(e, o, o + 2), 16);
                        return i
                    }("cd35e1c5b2885e26985708e58c8ea0fccc089a5b74eb2b96efd9043360467cba"), "AES-CBC", !1, ["decrypt"]));

                    function o(r) {
                        E("[fetchData] fetch err #" + t + " " + JSON.stringify(e)), x(r, "fetchData callback"), ye(t, {
                            items: []
                        }), p("error", {
                            errMsg: "wwapp.fetchOpenData:fail",
                            rand: n
                        })
                    }! function (e, t, n, r) {
                        pe(e, t, n, r, !0)
                    }(r, {
                        items: e,
                        sid: c
                    }, (function (n) {
                        O("[fetchData] fetch res #" + t), i.then((function (e) {
                            return le.decrypt({
                                name: "AES-CBC",
                                iv: new Uint8Array(16)
                            }, e, n)
                        })).then(ce).then((function (n) {
                            O("[fetchData] fetch parsed #" + t + " " + JSON.stringify(e)), ye(t, n)
                        })).catch(o)
                    }), o)
                }(e, n)
        }

        function ye(e, t) {
            var n = se(de, e);
            if (delete de[e], n)
                if (t) {
                    var r = se(t, "items");
                    r ? (B(r, (function (e) {
                        var t = se(e, "type"),
                            n = se(e, "id"),
                            r = se(e, "corpid");
                        fe(ve, me(t, n, r), e)
                    })), n(null, t)) : n(new Error("Fetch data failed, missing items"))
                } else n(new Error("Fetch data failed, missing response"))
        }

        function ge(e, t, n) {
            return se(ve, me(e, t, n))
        }

        function me(e, t, n) {
            return e + "::" + t + "::" + (n || "")
        }
        var be = new Image,
            Oe = !1,
            Ee = null,
            xe = [];

        function Se() {
            var e = xe;
            xe = [], B(e, (function (e) {
                e(Ee)
            }))
        }
        Q(be, "load", (function () {
            Oe = !0, z(Se, 1)
        })), Q(be, "error", (function () {
            Ee = new Error("Failed to load crossorigin image"), z(Se, 1)
        })), K(be, "https://wwcdn.weixin.qq.com/node/wework/images/1x1-00000000.91e42db1c6.png");
        var _e = String.fromCharCode(8204),
            Re = String.fromCharCode(8205),
            Ce = String.fromCharCode(8203),
            Ae = [String.fromCharCode(8206), String.fromCharCode(8207), _e, Re, Ce],
            je = {},
            De = 0;

        function Te(e) {
            var t = se(e, "encrypt_token");
            if (t) return t;
            var n = se(e, "data"),
                r = se(e, "encrypt_text_data");
            if (n && r) {
                for (var i = (De++).toString(5), o = "", a = 0, c = i.length; a < c; a++) o += Ae[i[a]];
                var u = "\ufeff" + r + o + "\ufeff";
                return fe(je, u, n), fe(e, "encrypt_token", u), u
            }
        }

        function Pe(e) {
            var t = X(e, "\ufeff", 0);
            if (-1 === t) return e;
            for (var n = G(e, 0, t); - 1 !== t;) {
                var r = X(e, "\ufeff", t + 1);
                if (-1 === r) break;
                var i = se(je, G(e, t, r + 1));
                i ? (n += i, t = r + 1) : (n += G(e, t, r), t = r)
            }
            return n + G(e, t)
        }
        var ke = ne && new ne,
            Me = !1,
            Ne = !1;

        function Fe(e) {
            re(ke, e) || (Ne || $(e, be, 0, 0), ie(ke, e, !0))
        }

        function Ie(e, t) {
            var n = null;
            try {
                n = Y(e)
            } catch (e) {}
            if (null !== n) throw new Error("Missing cross origin");
            V(e).postMessage(t, A)
        }
        var Le, We, qe = function () {
                function e() {
                    var e = this;
                    this.iframe = document.createElement("iframe"), this.state = "loading", this.queue = [], this.timeout = null, this.iframe.onload = b("MainFrame.onload", (function () {
                        O("[MainFrame] onload"), e.state = "ready", e.fetchData()
                    })), this.iframe.onerror = function (t) {
                        x((null == t ? void 0 : t.error) || new Error("MainFrame load error"), "MainFrame.onerror"), e.state = "error"
                    }, this.iframe.style.display = "none", this.iframe.referrerPolicy = "origin", this.iframe.src = j
                }
                var t = e.prototype;
                return t.enqueueFetch = function (e) {
                    var t = this;
                    this.queue.push(e), this.timeout || (this.timeout = setTimeout(b("MainFrame.timeout", (function () {
                        "ready" === t.state && t.fetchData()
                    })), 20))
                }, t.fetchData = function () {
                    var e = {},
                        t = [];
                    this.queue.forEach((function (n) {
                        var r = n.type + "::" + n.id + "::" + (n.corpid || "");
                        e[r] || (e[r] = !0, t.push(n))
                    })), t.length && (this.timeout = null, this.queue = [], O("[MainFrame] fetchData"), Ie(this.iframe, JSON.stringify({
                        type: "fetch",
                        items: t,
                        sid: c
                    })))
                }, e
            }(),
            Je = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "fontVariant", "fontStretch", "fontSizeAdjust", "color", "cursor"],
            He = function () {
                function e(e, t) {
                    this.renderType = "emtpy", this.renderEl = null, this.container = e, this.mainFrame = t
                }
                var t = e.prototype;
                return t.update = function () {
                    var e = this.getItem();
                    if (!e.type || !e.id) return this.renderEmpty();
                    this.renderText(e)
                }, t.renderEmpty = function () {
                    this.setChild("empty")
                }, t.renderText = function (e) {
                    var t = this;
                    if ("frame" !== this.renderType || "error" === this.loadState) {
                        var n = document.createElement("iframe");
                        n.onload = b("Frame.onload", (function () {
                            t.renderEl === n && (t.loadState = "ready", t.notifyUpdate())
                        })), n.onerror = function (e) {
                            t.renderEl === n && (x((null == e ? void 0 : e.error) || new Error("Frame load error"), "Frame.onerror"), t.loadState = "error")
                        };
                        var r = _(e.type + "::" + e.id + "::" + (e.corpid || ""));
                        n.frameBorder = 0, n.referrerPolicy = "origin", n.src = j + "&init=" + r, this.loadState = "loading", this.setChild("frame", n)
                    }
                    this.mainFrame.enqueueFetch(e), "ready" === this.loadState && this.notifyUpdate(e)
                }, t.setChild = function (e, t) {
                    void 0 === t && (t = null);
                    for (var n = this.container; n.firstChild;) n.removeChild(n.firstChild);
                    t && n.appendChild(t), this.renderEl = t, this.renderType = e
                }, t.getItem = function () {
                    return {
                        type: this.container.getAttribute("type"),
                        id: this.container.getAttribute("openid"),
                        corpid: this.container.getAttribute("corpid")
                    }
                }, t.notifyUpdate = function (e) {
                    if (void 0 === e && (e = this.getItem()), e.type && e.id) {
                        var t = {},
                            n = getComputedStyle(this.container);
                        Je.forEach((function (e) {
                            t[e] = n[e]
                        })), Ie(this.renderEl, JSON.stringify({
                            type: "update",
                            item: e,
                            style: t
                        }))
                    }
                }, e
            }();

        function ze(e) {
            e && (e.__WW_OPENDATA_RENDER__ || (e.__WW_OPENDATA_RENDER__ = new He(e, Le)), e.__WW_OPENDATA_RENDER__.update())
        }
        var Ue = {};

        function Be(e) {
            if (e.origin === A) {
                var t, n, r;
                try {
                    t = JSON.parse(e.data)
                } catch (e) {}
                t && Ue[t.type] && (n = document.querySelectorAll("ww-open-data iframe"), r = function (n) {
                    n.contentWindow === e.source && Ue[t.type](e, t, n)
                }, Array.prototype.forEach.call(n, r))
            }
        }
        Ue["ww.opendata.event"] = function (e, t, n) {
            "click" === t.eventType && n.parentNode.click()
        }, Ue["ww.opendata.resize"] = function (e, t, n) {
            var r = t.size;
            n.style.width = r.width, n.style.height = r.height, p("update", {
                el: n.parentNode,
                hasData: !!r.width
            })
        };
        var Xe = ne && new ne;

        function Ge(e) {
            var t = re(Xe, e);
            if (t) return t;
            try {
                var n = oe(e, {
                    mode: "closed"
                });
                return ie(Xe, e, n), n
            } catch (e) {
                p("error", e)
            }
        }
        var Ke = [],
            Ve = null;

        function Ye(e) {
            if (e) {
                var t = e.getAttribute("type");
                if (t) {
                    var n = e.getAttribute("openid");
                    if (n) {
                        var r = e.getAttribute("corpid"),
                            i = Ge(e);
                        if (i) {
                            var o = ge(t, n, r);
                            if (o) {
                                var a = se(o, "data");
                                ae(i, a || ""), p("update", {
                                    element: e,
                                    hasData: !!a
                                })
                            }
                            Ke.indexOf(e) < 0 && Ke.push(e), Ve || (Ve = setTimeout(b("bindPending", Qe), 20))
                        }
                    }
                }
            }
        }

        function Qe() {
            var e = Ke;
            Ve = null, Ke = [];
            var t = [],
                n = {};
            B(e, (function (e) {
                var r = e.getAttribute("type");
                if (r) {
                    var i = e.getAttribute("openid");
                    if (i) {
                        var o = e.getAttribute("corpid"),
                            a = me(r, i, o);
                        n[a] || (n[a] = !0, t.push({
                            type: r,
                            id: i,
                            corpid: o
                        }))
                    }
                }
            })), t.length && we(t, (function (t) {
                t ? p("error", t) : B(e, (function (e) {
                    var t = Ge(e),
                        n = e.getAttribute("type");
                    if (n) {
                        var r = e.getAttribute("openid");
                        if (r) {
                            var i = ge(n, r, e.getAttribute("corpid"));
                            if (i) {
                                var o = se(i, "data");
                                ae(t, o || ""), p("update", {
                                    element: e,
                                    hasData: !!o
                                })
                            }
                        }
                    }
                }))
            }))
        }
        var Ze = 0;
        oe || (Ze |= 1), le || (Ze |= 2), "http:" === document.location.protocol && (Ze |= 4);
        var $e, et = 0;
        window.WeixinSandBox && (et |= 1), (null == ($e = window.wx) ? void 0 : $e.agentConfig) && (et |= 2);
        var tt = navigator.userAgent;
        /wxwork/i.test(tt) && !/miniProgram/i.test(tt) && (et |= 4);
        var nt = b("bind", Ze ? ze : Ye),
            rt = b("bindAll", Ze ? function (e) {
                Array.prototype.forEach.call(e, ze)
            } : function (e) {
                B(e, Ye)
            });

        function it(e) {
            if (void 0 === e && (e = {}), !(e.corpid && e.agentid && e.timestamp && e.nonceStr && e.signature && e.jsApiList)) {
                var t = {
                    err_Info: "fail",
                    errMsg: "agentConfig:fail",
                    hint: "Missing params"
                };
                return null == e.fail || e.fail(t), void(null == e.complete || e.complete(t))
            }
            var n = {
                corpid: e.corpid + "",
                agentid: e.agentid + "",
                timestamp: e.timestamp + "",
                nonceStr: e.nonceStr + "",
                signature: e.signature + "",
                jsApiList: e.jsApiList,
                url: window.location.href
            };
            ot("agentConfig", {
                config: n,
                sid: c
            }, e, (function () {
                rt(document.querySelectorAll("ww-open-data")), O("[user config] #" + JSON.stringify(n))
            }))
        }

        function ot(e, t, n, r) {
            void 0 === n && (n = {}), void 0 === r && (r = R), O("[invoke] " + e + " begin"),
                function (e, t, n, r) {
                    pe(e, t, n, r, !1)
                }(A + "/wwopen/openData/" + e + "?f=json", t, (function (t) {
                    O("[invoke] " + e + " res", JSON.stringify(t));
                    var i = t.data || {
                        errMsg: e + ":fail"
                    };
                    i.errMsg === e + ":ok" ? (r(i), null == n.success || n.success(i)) : (x(new Error("Invalid " + e + " response"), e + " callback"), null == n.fail || n.fail(i)), null == n.complete || n.complete(i)
                }), (function (t) {
                    x(t, e + " fail");
                    var r = {
                        errMsg: e + ":fail"
                    };
                    null == n.fail || n.fail(r), null == n.complete || n.complete(r)
                }))
        }
        if (!et) {
            if (O("[renderer] #" + Ze), Ze && function () {
                window.addEventListener ? window.addEventListener("message", b("dispatchMessage", Be)) : window.attachEvent("onmessage", b("dispatchMessage", Be));
                var e = document.querySelector("head");
                We = document.createElement("style"), e.appendChild(We), Le = new qe, e.appendChild(Le.iframe);
                var t = We.sheet;
                t.insertRule("ww-open-data {\n    display: inline-block;\n    vertical-align: text-bottom;\n    overflow: hidden;\n  }", 0), t.insertRule("ww-open-data img {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }", 1), t.insertRule("ww-open-data iframe {\n    display: block;\n    width: 0;\n    height: 0;\n  }", 2)
            }(), window.wx && window.wx.agentConfig, window.wx || (window.wx = {}), window.wx.agentConfig || (window.wx.agentConfig = b("agentConfig", it)), !window.WWOpenData) {
                var at = {};
                H(at, "bindAll", {
                    value: rt,
                    enumerable: !0
                }), H(at, "bind", {
                    value: nt,
                    enumerable: !0
                }), H(at, "on", {
                    value: s,
                    enumerable: !0
                }), H(at, "once", {
                    value: function (e, t) {
                        s(e, (function e(n) {
                            f("name", e), t(n)
                        }))
                    }, enumerable: !0
                }), H(at, "off", {
                    value: f,
                    enumerable: !0
                }), H(at, "report", {
                    value: function () {
                        w("Sentry report")
                    }, enumerable: !0
                }), H(at, "checkSession", {
                    value: function (e) {
                        void 0 === e && (e = {}), ot("checkSession", {
                            sid: c
                        }, e)
                    }, enumerable: !0
                }), H(at, "initCanvas", {
                    value: function () {
                        var e;
                        if (Me) return !0;
                        var t = null == (e = window.CanvasRenderingContext2D) ? void 0 : e.prototype;
                        return !!t && (t.strokeText = function (e, t, n, r) {
                            if (!Oe) return null == r ? ee(this, e, t, n) : ee(this, e, t, n, r);
                            var i = Pe(e);
                            return i !== e && Fe(this), null == r ? ee(this, i, t, n) : ee(this, i, t, n, r)
                        }, t.fillText = function (e, t, n, r) {
                            if (!Oe) return null == r ? Z(this, e, t, n) : Z(this, e, t, n, r);
                            var i = Pe(e);
                            return i !== e && Fe(this), null == r ? Z(this, i, t, n) : Z(this, i, t, n, r)
                        }, t.measureText = function (e) {
                            return te(this, Oe ? Pe(e) : e)
                        }, Me = !0, !0)
                    }, enumerable: !0
                }), H(at, "enableCanvasSharing", {
                    value: function () {
                        Ne = !0
                    }, enumerable: !0
                }), H(at, "disableCanvasSharing", {
                    value: function () {
                        Ne = !1
                    }, enumerable: !0
                }), H(at, "prefetch", {
                    value: function (e, t) {
                        var n = e.items;
                        we(n, (function (e) {
                            if (e) return t(e);
                            var r = [];
                            B(n, (function (e) {
                                var t = ge(e.type, e.id, e.corpid);
                                t && 1 === se(t, "datakind") && r.push({
                                    type: e.type,
                                    id: e.id,
                                    corpid: e.corpid,
                                    data: Te(t)
                                })
                            })),
                                function (e) {
                                    Oe ? e() : Ee ? e(Ee) : xe.push(e)
                                }((function (e) {
                                    e ? t(e) : t(null, {
                                        items: r
                                    })
                                }))
                        }))
                    }, enumerable: !0
                }), H(at, "__version__", {
                    value: "wwopendata.web.js@210114-160020-429"
                }), H(at, "agentConfig", {
                    value: b("agentConfig", it)
                }), H(window, "WWOpenData", {
                    value: at,
                    enumerable: !0
                })
            }
            if ("customElements" in window && !customElements.get("ww-open-data")) try {
                var ct = function (e) {
                    var n, r, i, o;

                    function a() {
                        var t;
                        return ut(function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(t = e.call(this) || this)), t
                    }
                    return r = e, (n = a).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, a.prototype.attributeChangedCallback = function () {
                        this._current.type === this.getAttribute("type") && this._current.id === this.getAttribute("openid") && this._current.corpid === this.getAttribute("corpid") || ut(this)
                    }, i = a, o = [{
                        key: "observedAttributes",
                        get: function () {
                            return ["type", "openid", "corpid"]
                        }
                    }], null && t(i.prototype, null), o && t(i, o), a
                }(a(HTMLElement));
                customElements.define("ww-open-data", ct)
            } catch (u) {
                x(u, "register custom element")
            }
        }

        function ut(e) {
            e._current = {
                type: e.getAttribute("type"),
                id: e.getAttribute("openid"),
                corpid: e.getAttribute("corpid")
            }, nt(e)
        }
    } catch (u) {
        e.captureException(u, "?")
    }
    module.exports = e;
}();
