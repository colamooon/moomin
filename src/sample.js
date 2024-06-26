! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 16)
}([function(e, t) {
    e.exports = jQuery
}, function(e, t, n) {
    e.exports = function() {
        "use strict";

        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(t)
        }

        function t(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function i(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        var r = Date.now();

        function o() {
            var e = {},
                t = !0,
                n = 0,
                i = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);
            for (var r = function(n) {
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t && "[object Object]" === Object.prototype.toString.call(n[i]) ? e[i] = o(!0, e[i], n[i]) : e[i] = n[i])
                }; n < i; n++) {
                var s = arguments[n];
                r(s)
            }
            return e
        }

        function s(e, t) {
            if ((T(e) || e === window || e === document) && (e = [e]), O(e) || C(e) || (e = [e]), 0 != L(e))
                if (O(e) && !C(e))
                    for (var n = e.length, i = 0; i < n && !1 !== t.call(e[i], e[i], i, e); i++);
                else if (C(e))
                for (var r in e)
                    if (k(e, r) && !1 === t.call(e[r], e[r], r, e)) break
        }

        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = e[r] = e[r] || [],
                o = {
                    all: i,
                    evt: null,
                    found: null
                };
            return t && n && L(i) > 0 && s(i, function(e, i) {
                if (e.eventName == t && e.fn.toString() == n.toString()) return o.found = !0, o.evt = i, !1
            }), o
        }

        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.onElement,
                i = t.withCallback,
                r = t.avoidDuplicate,
                o = void 0 === r || r,
                l = t.once,
                c = void 0 !== l && l,
                u = t.useCapture,
                d = void 0 !== u && u,
                h = arguments.length > 2 ? arguments[2] : void 0,
                f = n || [];

            function p(e) {
                _(i) && i.call(h, e, this), c && p.destroy()
            }
            return S(f) && (f = document.querySelectorAll(f)), p.destroy = function() {
                s(f, function(t) {
                    var n = a(t, e, p);
                    n.found && n.all.splice(n.evt, 1), t.removeEventListener && t.removeEventListener(e, p, d)
                })
            }, s(f, function(t) {
                var n = a(t, e, p);
                (t.addEventListener && o && !n.found || !o) && (t.addEventListener(e, p, d), n.all.push({
                    eventName: e,
                    fn: p
                }))
            }), p
        }

        function c(e, t) {
            s(t.split(" "), function(t) {
                return e.classList.add(t)
            })
        }

        function u(e, t) {
            s(t.split(" "), function(t) {
                return e.classList.remove(t)
            })
        }

        function d(e, t) {
            return e.classList.contains(t)
        }

        function h(e, t) {
            for (; e !== document.body;) {
                if (!(e = e.parentElement)) return !1;
                if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
            }
        }

        function f(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e || "" === t) return !1;
            if ("none" === t) return _(n) && n(), !1;
            var i = function() {
                    var e, t = document.createElement("fakeelement"),
                        n = {
                            animation: "animationend",
                            OAnimation: "oAnimationEnd",
                            MozAnimation: "animationend",
                            WebkitAnimation: "webkitAnimationEnd"
                        };
                    for (e in n)
                        if (void 0 !== t.style[e]) return n[e]
                }(),
                r = t.split(" ");
            s(r, function(t) {
                c(e, "g" + t)
            }), l(i, {
                onElement: e,
                avoidDuplicate: !1,
                once: !0,
                withCallback: function(e, t) {
                    s(r, function(e) {
                        u(t, "g" + e)
                    }), _(n) && n()
                }
            })
        }

        function p(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
            e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
        }

        function g(e) {
            e.style.display = "block"
        }

        function v(e) {
            e.style.display = "none"
        }

        function m(e) {
            var t = document.createDocumentFragment(),
                n = document.createElement("div");
            for (n.innerHTML = e; n.firstChild;) t.appendChild(n.firstChild);
            return t
        }

        function y() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
        }

        function b(e, t, n, i) {
            if (e()) t();
            else {
                var r;
                n || (n = 100);
                var o = setInterval(function() {
                    e() && (clearInterval(o), r && clearTimeout(r), t())
                }, n);
                i && (r = setTimeout(function() {
                    clearInterval(o)
                }, i))
            }
        }

        function w(e, t, n) {
            if (A(e)) console.error("Inject assets error");
            else if (_(t) && (n = t, t = !1), S(t) && t in window) _(n) && n();
            else {
                var i;
                if (-1 !== e.indexOf(".css")) {
                    if ((i = document.querySelectorAll('link[href="' + e + '"]')) && i.length > 0) return void(_(n) && n());
                    var r = document.getElementsByTagName("head")[0],
                        o = r.querySelectorAll('link[rel="stylesheet"]'),
                        s = document.createElement("link");
                    return s.rel = "stylesheet", s.type = "text/css", s.href = e, s.media = "all", o ? r.insertBefore(s, o[0]) : r.appendChild(s), void(_(n) && n())
                }
                if ((i = document.querySelectorAll('script[src="' + e + '"]')) && i.length > 0) {
                    if (_(n)) {
                        if (S(t)) return b(function() {
                            return void 0 !== window[t]
                        }, function() {
                            n()
                        }), !1;
                        n()
                    }
                } else {
                    var a = document.createElement("script");
                    a.type = "text/javascript", a.src = e, a.onload = function() {
                        if (_(n)) {
                            if (S(t)) return b(function() {
                                return void 0 !== window[t]
                            }, function() {
                                n()
                            }), !1;
                            n()
                        }
                    }, document.body.appendChild(a)
                }
            }
        }

        function E() {
            return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
        }

        function _(e) {
            return "function" == typeof e
        }

        function S(e) {
            return "string" == typeof e
        }

        function T(e) {
            return !(!e || !e.nodeType || 1 != e.nodeType)
        }

        function x(e) {
            return Array.isArray(e)
        }

        function O(e) {
            return e && e.length && isFinite(e.length)
        }

        function C(t) {
            return "object" === e(t) && null != t && !_(t) && !x(t)
        }

        function A(e) {
            return null == e
        }

        function k(e, t) {
            return null !== e && hasOwnProperty.call(e, t)
        }

        function L(e) {
            if (C(e)) {
                if (e.keys) return e.keys().length;
                var t = 0;
                for (var n in e) k(e, n) && t++;
                return t
            }
            return e.length
        }

        function N(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }

        function I() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
            if (!t.length) return !1;
            if (1 == t.length) return t[0];
            "string" == typeof e && (e = parseInt(e));
            var n = [];
            s(t, function(e) {
                n.push(e.getAttribute("data-taborder"))
            });
            var i = Math.max.apply(Math, n.map(function(e) {
                    return parseInt(e)
                })),
                r = e < 0 ? 1 : e + 1;
            r > i && (r = "1");
            var o = n.filter(function(e) {
                    return e >= parseInt(r)
                }),
                a = o.sort()[0];
            return document.querySelector('.gbtn[data-taborder="'.concat(a, '"]'))
        }

        function D(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y)
        }
        var P = function() {
            function e(n) {
                t(this, e), this.handlers = [], this.el = n
            }
            return i(e, [{
                key: "add",
                value: function(e) {
                    this.handlers.push(e)
                }
            }, {
                key: "del",
                value: function(e) {
                    e || (this.handlers = []);
                    for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
                }
            }, {
                key: "dispatch",
                value: function() {
                    for (var e = 0, t = this.handlers.length; e < t; e++) {
                        var n = this.handlers[e];
                        "function" == typeof n && n.apply(this.el, arguments)
                    }
                }
            }]), e
        }();

        function M(e, t) {
            var n = new P(e);
            return n.add(t), n
        }
        var H = function() {
            function e(n, i) {
                t(this, e), this.element = "string" == typeof n ? document.querySelector(n) : n, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                    x: null,
                    y: null
                }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
                var r = function() {};
                this.rotate = M(this.element, i.rotate || r), this.touchStart = M(this.element, i.touchStart || r), this.multipointStart = M(this.element, i.multipointStart || r), this.multipointEnd = M(this.element, i.multipointEnd || r), this.pinch = M(this.element, i.pinch || r), this.swipe = M(this.element, i.swipe || r), this.tap = M(this.element, i.tap || r), this.doubleTap = M(this.element, i.doubleTap || r), this.longTap = M(this.element, i.longTap || r), this.singleTap = M(this.element, i.singleTap || r), this.pressMove = M(this.element, i.pressMove || r), this.twoFingerPressMove = M(this.element, i.twoFingerPressMove || r), this.touchMove = M(this.element, i.touchMove || r), this.touchEnd = M(this.element, i.touchEnd || r), this.touchCancel = M(this.element, i.touchCancel || r), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                    x: null,
                    y: null
                }
            }
            return i(e, [{
                key: "start",
                value: function(e) {
                    if (e.touches)
                        if (e.target && e.target.nodeName && ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                        else {
                            this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                            var t = this.preV;
                            if (e.touches.length > 1) {
                                this._cancelLongTap(), this._cancelSingleTap();
                                var n = {
                                    x: e.touches[1].pageX - this.x1,
                                    y: e.touches[1].pageY - this.y1
                                };
                                t.x = n.x, t.y = n.y, this.pinchStartLen = D(t), this.multipointStart.dispatch(e, this.element)
                            }
                            this._preventTap = !1, this.longTapTimeout = setTimeout(function() {
                                this.longTap.dispatch(e, this.element), this._preventTap = !0
                            }.bind(this), 750)
                        }
                }
            }, {
                key: "move",
                value: function(e) {
                    if (e.touches) {
                        var t = this.preV,
                            n = e.touches.length,
                            i = e.touches[0].pageX,
                            r = e.touches[0].pageY;
                        if (this.isDoubleTap = !1, n > 1) {
                            var o = e.touches[1].pageX,
                                s = e.touches[1].pageY,
                                a = {
                                    x: e.touches[1].pageX - i,
                                    y: e.touches[1].pageY - r
                                };
                            null !== t.x && (this.pinchStartLen > 0 && (e.zoom = D(a) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = function(e, t) {
                                var n = function(e, t) {
                                    var n = D(e) * D(t);
                                    if (0 === n) return 0;
                                    var i = function(e, t) {
                                        return e.x * t.x + e.y * t.y
                                    }(e, t) / n;
                                    return i > 1 && (i = 1), Math.acos(i)
                                }(e, t);
                                return function(e, t) {
                                    return e.x * t.y - t.x * e.y
                                }(e, t) > 0 && (n *= -1), 180 * n / Math.PI
                            }(a, t), this.rotate.dispatch(e, this.element)), t.x = a.x, t.y = a.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (i - this.x2 + o - this.sx2) / 2, e.deltaY = (r - this.y2 + s - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = o, this.sy2 = s
                        } else {
                            if (null !== this.x2) {
                                e.deltaX = i - this.x2, e.deltaY = r - this.y2;
                                var l = Math.abs(this.x1 - this.x2),
                                    c = Math.abs(this.y1 - this.y2);
                                (l > 10 || c > 10) && (this._preventTap = !0)
                            } else e.deltaX = 0, e.deltaY = 0;
                            this.pressMove.dispatch(e, this.element)
                        }
                        this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = i, this.y2 = r, n > 1 && e.preventDefault()
                    }
                }
            }, {
                key: "end",
                value: function(e) {
                    if (e.changedTouches) {
                        this._cancelLongTap();
                        var t = this;
                        e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                            t.swipe.dispatch(e, t.element)
                        }, 0)) : (this.tapTimeout = setTimeout(function() {
                            t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
                        }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                            t.singleTap.dispatch(e, t.element)
                        }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                    }
                }
            }, {
                key: "cancelAll",
                value: function() {
                    this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
                }
            }, {
                key: "cancel",
                value: function(e) {
                    this.cancelAll(), this.touchCancel.dispatch(e, this.element)
                }
            }, {
                key: "_cancelLongTap",
                value: function() {
                    clearTimeout(this.longTapTimeout)
                }
            }, {
                key: "_cancelSingleTap",
                value: function() {
                    clearTimeout(this.singleTapTimeout)
                }
            }, {
                key: "_swipeDirection",
                value: function(e, t, n, i) {
                    return Math.abs(e - t) >= Math.abs(n - i) ? e - t > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this[e] && this[e].add(t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this[e] && this[e].del(t)
                }
            }, {
                key: "destroy",
                value: function() {
                    return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
                }
            }]), e
        }();

        function q(e) {
            var t = function() {
                    var e, t = document.createElement("fakeelement"),
                        n = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (e in n)
                        if (void 0 !== t.style[e]) return n[e]
                }(),
                n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                i = d(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
                r = h(i, ".ginner-container"),
                o = e.querySelector(".gslide-description");
            n > 769 && (i = r), c(i, "greset"), p(i, "translate3d(0, 0, 0)"), l(t, {
                onElement: i,
                once: !0,
                withCallback: function(e, t) {
                    u(i, "greset")
                }
            }), i.style.opacity = "", o && (o.style.opacity = "")
        }
        var W = function() {
                function e(n, i) {
                    var r = this,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (t(this, e), this.img = n, this.slide = i, this.onclose = o, this.img.setZoomEvents) return !1;
                    this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
                        return r.dragStart(e)
                    }, !1), this.img.addEventListener("mouseup", function(e) {
                        return r.dragEnd(e)
                    }, !1), this.img.addEventListener("mousemove", function(e) {
                        return r.drag(e)
                    }, !1), this.img.addEventListener("click", function(e) {
                        return r.slide.classList.contains("dragging-nav") ? (r.zoomOut(), !1) : r.zoomedIn ? void(r.zoomedIn && !r.dragging && r.zoomOut()) : r.zoomIn()
                    }, !1), this.img.setZoomEvents = !0
                }
                return i(e, [{
                    key: "zoomIn",
                    value: function() {
                        var e = this.widowWidth();
                        if (!(this.zoomedIn || e <= 768)) {
                            var t = this.img;
                            if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                                var n = e / 2 - t.naturalWidth / 2;
                                this.setTranslate(this.img.parentNode, n, 0)
                            }
                            this.slide.classList.add("zoomed"), this.zoomedIn = !0
                        }
                    }
                }, {
                    key: "zoomOut",
                    value: function() {
                        this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
                    }
                }, {
                    key: "dragStart",
                    value: function(e) {
                        e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
                    }
                }, {
                    key: "dragEnd",
                    value: function(e) {
                        var t = this;
                        e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                            t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
                        }, 100)
                    }
                }, {
                    key: "drag",
                    value: function(e) {
                        this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
                    }
                }, {
                    key: "onMove",
                    value: function(e) {
                        if (this.zoomedIn) {
                            var t = e.clientX - this.img.naturalWidth / 2,
                                n = e.clientY - this.img.naturalHeight / 2;
                            this.setTranslate(this.img, t, n)
                        }
                    }
                }, {
                    key: "setTranslate",
                    value: function(e, t, n) {
                        e.style.transform = "translate3d(" + t + "px, " + n + "px, 0)"
                    }
                }, {
                    key: "widowWidth",
                    value: function() {
                        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                    }
                }]), e
            }(),
            j = function() {
                function e() {
                    var n = this,
                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t(this, e);
                    var r = i.dragEl,
                        o = i.toleranceX,
                        s = void 0 === o ? 40 : o,
                        a = i.toleranceY,
                        l = void 0 === a ? 65 : a,
                        c = i.slide,
                        u = void 0 === c ? null : c,
                        d = i.instance,
                        h = void 0 === d ? null : d;
                    this.el = r, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = s, this.toleranceY = l, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = u, this.instance = h, this.el.addEventListener("mousedown", function(e) {
                        return n.dragStart(e)
                    }, !1), this.el.addEventListener("mouseup", function(e) {
                        return n.dragEnd(e)
                    }, !1), this.el.addEventListener("mousemove", function(e) {
                        return n.drag(e)
                    }, !1)
                }
                return i(e, [{
                    key: "dragStart",
                    value: function(e) {
                        if (this.slide.classList.contains("zoomed")) this.active = !1;
                        else {
                            "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                            var t = e.target.nodeName.toLowerCase();
                            e.target.classList.contains("nodrag") || h(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && h(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = h(e.target, ".ginner-container")))
                        }
                    }
                }, {
                    key: "dragEnd",
                    value: function(e) {
                        var t = this;
                        e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                            t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
                        }, 100)
                    }
                }, {
                    key: "drag",
                    value: function(e) {
                        if (this.active) {
                            e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                            var t = Math.abs(this.currentX),
                                n = Math.abs(this.currentY);
                            if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                                this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                                var i = this.shouldChange();
                                if (!this.instance.settings.dragAutoSnap && i && (this.doSlideChange = i), this.instance.settings.dragAutoSnap && i) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == i && this.instance.prevSlide(), void("left" == i && this.instance.nextSlide())
                            }
                            if (this.toleranceY > 0 && n > 0 && n >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                                this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                                var r = this.shouldClose();
                                return !this.instance.settings.dragAutoSnap && r && (this.doSlideClose = !0), void(this.instance.settings.dragAutoSnap && r && this.instance.close())
                            }
                        }
                    }
                }, {
                    key: "shouldChange",
                    value: function() {
                        var e = !1;
                        if (Math.abs(this.currentX) >= this.toleranceX) {
                            var t = this.currentX > 0 ? "right" : "left";
                            ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
                        }
                        return e
                    }
                }, {
                    key: "shouldClose",
                    value: function() {
                        var e = !1;
                        return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
                    }
                }, {
                    key: "setTranslate",
                    value: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        e.style.transition = i ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(n, "px, 0)")
                    }
                }]), e
            }();

        function V(e) {
            var t = h(e.target, ".gslide-media");
            "enterfullscreen" === e.type && c(t, "fullscreen"), "exitfullscreen" === e.type && u(t, "fullscreen")
        }

        function R(e, t, n, i) {
            var r, o = this,
                s = e.querySelector(".gslide-media"),
                a = !(!k(t, "href") || !t.href) && t.href.split("#").pop().trim(),
                u = !(!k(t, "content") || !t.content) && t.content;
            if (u && (S(u) && (r = m('<div class="ginlined-content">'.concat(u, "</div>"))), T(u))) {
                "none" == u.style.display && (u.style.display = "block");
                var d = document.createElement("div");
                d.className = "ginlined-content", d.appendChild(u), r = d
            }
            if (a) {
                var h = document.getElementById(a);
                if (!h) return !1;
                var f = h.cloneNode(!0);
                f.style.height = t.height, f.style.maxWidth = t.width, c(f, "ginlined-content"), r = f
            }
            if (!r) return console.error("Unable to append inline slide content", t), !1;
            s.style.height = t.height, s.style.width = t.width, s.appendChild(r), this.events["inlineclose" + a] = l("click", {
                onElement: s.querySelectorAll(".gtrigger-close"),
                withCallback: function(e) {
                    e.preventDefault(), o.close()
                }
            }), _(i) && i()
        }
        var z = function() {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t(this, e), this.defaults = {
                        href: "",
                        sizes: "",
                        srcset: "",
                        title: "",
                        type: "",
                        videoProvider: "",
                        description: "",
                        alt: "",
                        descPosition: "bottom",
                        effect: "",
                        width: "",
                        height: "",
                        content: !1,
                        zoomable: !0,
                        draggable: !0
                    }, C(n) && (this.defaults = o(this.defaults, n))
                }
                return i(e, [{
                    key: "sourceType",
                    value: function(e) {
                        var t = e;
                        return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) ? "video" : e.match(/vimeo\.com\/([0-9]*)/) ? "video" : null !== e.match(/\.(mp4|ogg|webm|mov)/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/) ? "audio" : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external"
                    }
                }, {
                    key: "parseConfig",
                    value: function(e, t) {
                        var n = this,
                            i = o({
                                descPosition: t.descPosition
                            }, this.defaults);
                        if (C(e) && !T(e)) {
                            k(e, "type") || (k(e, "content") && e.content ? e.type = "inline" : k(e, "href") && (e.type = this.sourceType(e.href)));
                            var r = o(i, e);
                            return this.setSize(r, t), r
                        }
                        var a = "",
                            l = e.getAttribute("data-glightbox"),
                            c = e.nodeName.toLowerCase();
                        if ("a" === c && (a = e.href), "img" === c && (a = e.src, i.alt = e.alt), i.href = a, s(i, function(r, o) {
                                k(t, o) && "width" !== o && (i[o] = t[o]);
                                var s = e.dataset[o];
                                A(s) || (i[o] = n.sanitizeValue(s))
                            }), i.content && (i.type = "inline"), !i.type && a && (i.type = this.sourceType(a)), A(l)) {
                            if (!i.title && "a" == c) {
                                var u = e.title;
                                A(u) || "" === u || (i.title = u)
                            }
                            if (!i.title && "img" == c) {
                                var d = e.alt;
                                A(d) || "" === d || (i.title = d)
                            }
                        } else {
                            var h = [];
                            s(i, function(e, t) {
                                h.push(";\\s?" + t)
                            }), h = h.join("\\s?:|"), "" !== l.trim() && s(i, function(e, t) {
                                var r = l,
                                    o = new RegExp("s?" + t + "s?:s?(.*?)(" + h + "s?:|$)"),
                                    s = r.match(o);
                                if (s && s.length && s[1]) {
                                    var a = s[1].trim().replace(/;\s*$/, "");
                                    i[t] = n.sanitizeValue(a)
                                }
                            })
                        }
                        if (i.description && "." === i.description.substring(0, 1)) {
                            var f;
                            try {
                                f = document.querySelector(i.description).innerHTML
                            } catch (e) {
                                if (!(e instanceof DOMException)) throw e
                            }
                            f && (i.description = f)
                        }
                        if (!i.description) {
                            var p = e.querySelector(".glightbox-desc");
                            p && (i.description = p.innerHTML)
                        }
                        return this.setSize(i, t, e), this.slideConfig = i, i
                    }
                }, {
                    key: "setSize",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
                            r = this.checkSize(t.height);
                        return e.width = k(e, "width") && "" !== e.width ? this.checkSize(e.width) : i, e.height = k(e, "height") && "" !== e.height ? this.checkSize(e.height) : r, n && "image" == e.type && (e._hasCustomWidth = !!n.dataset.width, e._hasCustomHeight = !!n.dataset.height), e
                    }
                }, {
                    key: "checkSize",
                    value: function(e) {
                        return N(e) ? "".concat(e, "px") : e
                    }
                }, {
                    key: "sanitizeValue",
                    value: function(e) {
                        return "true" !== e && "false" !== e ? e : "true" === e
                    }
                }]), e
            }(),
            F = function() {
                function e(n, i, r) {
                    t(this, e), this.element = n, this.instance = i, this.index = r
                }
                return i(e, [{
                    key: "setContent",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (d(t, "loaded")) return !1;
                        var i = this.instance.settings,
                            r = this.slideConfig,
                            o = E();
                        _(i.beforeSlideLoad) && i.beforeSlideLoad({
                            index: this.index,
                            slide: t,
                            player: !1
                        });
                        var s = r.type,
                            a = r.descPosition,
                            l = t.querySelector(".gslide-media"),
                            u = t.querySelector(".gslide-title"),
                            h = t.querySelector(".gslide-desc"),
                            f = t.querySelector(".gdesc-inner"),
                            p = n,
                            g = "gSlideTitle_" + this.index,
                            v = "gSlideDesc_" + this.index;
                        if (_(i.afterSlideLoad) && (p = function() {
                                _(n) && n(), i.afterSlideLoad({
                                    index: e.index,
                                    slide: t,
                                    player: e.instance.getSlidePlayerInstance(e.index)
                                })
                            }), "" == r.title && "" == r.description ? f && f.parentNode.parentNode.removeChild(f.parentNode) : (u && "" !== r.title ? (u.id = g, u.innerHTML = r.title) : u.parentNode.removeChild(u), h && "" !== r.description ? (h.id = v, o && i.moreLength > 0 ? (r.smallDescription = this.slideShortDesc(r.description, i.moreLength, i.moreText), h.innerHTML = r.smallDescription, this.descriptionEvents(h, r)) : h.innerHTML = r.description) : h.parentNode.removeChild(h), c(l.parentNode, "desc-".concat(a)), c(f.parentNode, "description-".concat(a))), c(l, "gslide-".concat(s)), c(t, "loaded"), "video" !== s) {
                            if ("external" !== s) return "inline" === s ? (R.apply(this.instance, [t, r, this.index, p]), void(r.draggable && new j({
                                dragEl: t.querySelector(".gslide-inline"),
                                toleranceX: i.dragToleranceX,
                                toleranceY: i.dragToleranceY,
                                slide: t,
                                instance: this.instance
                            }))) : void("image" !== s ? _(p) && p() : function(e, t, n, i) {
                                var r = e.querySelector(".gslide-media"),
                                    o = new Image,
                                    s = "gSlideTitle_" + n,
                                    a = "gSlideDesc_" + n;
                                o.addEventListener("load", function() {
                                    _(i) && i()
                                }, !1), o.src = t.href, "" != t.sizes && "" != t.srcset && (o.sizes = t.sizes, o.srcset = t.srcset), o.alt = "", A(t.alt) || "" === t.alt || (o.alt = t.alt), "" !== t.title && o.setAttribute("aria-labelledby", s), "" !== t.description && o.setAttribute("aria-describedby", a), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (o.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (o.style.height = t.height), r.insertBefore(o, r.firstChild)
                            }(t, r, this.index, function() {
                                var n = t.querySelector("img");
                                r.draggable && new j({
                                    dragEl: n,
                                    toleranceX: i.dragToleranceX,
                                    toleranceY: i.dragToleranceY,
                                    slide: t,
                                    instance: e.instance
                                }), r.zoomable && n.naturalWidth > n.offsetWidth && (c(n, "zoomable"), new W(n, t, function() {
                                    e.instance.resize()
                                })), _(p) && p()
                            }));
                            (function(e, t, n, i) {
                                var r = e.querySelector(".gslide-media"),
                                    o = function(e) {
                                        var t = e.url,
                                            n = e.allow,
                                            i = e.callback,
                                            r = e.appendTo,
                                            o = document.createElement("iframe");
                                        return o.className = "vimeo-video gvideo", o.src = t, o.style.width = "100%", o.style.height = "100%", n && o.setAttribute("allow", n), o.onload = function() {
                                            o.onload = null, c(o, "node-ready"), _(i) && i()
                                        }, r && r.appendChild(o), o
                                    }({
                                        url: t.href,
                                        callback: i
                                    });
                                r.parentNode.style.maxWidth = t.width, r.parentNode.style.height = t.height, r.appendChild(o)
                            }).apply(this, [t, r, this.index, p])
                        } else(function(e, t, n, i) {
                            var r = this,
                                o = e.querySelector(".ginner-container"),
                                s = "gvideo" + n,
                                a = e.querySelector(".gslide-media"),
                                l = this.getAllPlayers();
                            c(o, "gvideo-container"), a.insertBefore(m('<div class="gvideo-wrapper"></div>'), a.firstChild);
                            var u = e.querySelector(".gvideo-wrapper");
                            w(this.settings.plyr.css, "Plyr");
                            var d = t.href,
                                h = null == t ? void 0 : t.videoProvider,
                                f = !1;
                            a.style.maxWidth = t.width, w(this.settings.plyr.js, "Plyr", function() {
                                if (!h && d.match(/vimeo\.com\/([0-9]*)/) && (h = "vimeo"), !h && (d.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || d.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (h = "youtube"), "local" === h || !h) {
                                    h = "local";
                                    var o = '<video id="' + s + '" ';
                                    o += 'style="background:#000; max-width: '.concat(t.width, ';" '), o += 'preload="metadata" ', o += 'x-webkit-airplay="allow" ', o += "playsinline ", o += "controls ", o += 'class="gvideo-local">', o += '<source src="'.concat(d, '">'), f = m(o += "</video>")
                                }
                                var a = f || m('<div id="'.concat(s, '" data-plyr-provider="').concat(h, '" data-plyr-embed-id="').concat(d, '"></div>'));
                                c(u, "".concat(h, "-video gvideo")), u.appendChild(a), u.setAttribute("data-id", s), u.setAttribute("data-index", n);
                                var p = k(r.settings.plyr, "config") ? r.settings.plyr.config : {},
                                    g = new Plyr("#" + s, p);
                                g.on("ready", function(e) {
                                    l[s] = e.detail.plyr, _(i) && i()
                                }), b(function() {
                                    return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready
                                }, function() {
                                    r.resize(e)
                                }), g.on("enterfullscreen", V), g.on("exitfullscreen", V)
                            })
                        }).apply(this.instance, [t, r, this.index, p])
                    }
                }, {
                    key: "slideShortDesc",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = document.createElement("div");
                        i.innerHTML = e;
                        var r = i.innerText,
                            o = n;
                        if ((e = r.trim()).length <= t) return e;
                        var s = e.substr(0, t - 1);
                        return o ? (i = null, s + '... <a href="#" class="desc-more">' + n + "</a>") : s
                    }
                }, {
                    key: "descriptionEvents",
                    value: function(e, t) {
                        var n = this,
                            i = e.querySelector(".desc-more");
                        if (!i) return !1;
                        l("click", {
                            onElement: i,
                            withCallback: function(e, i) {
                                e.preventDefault();
                                var r = document.body,
                                    o = h(i, ".gslide-desc");
                                if (!o) return !1;
                                o.innerHTML = t.description, c(r, "gdesc-open");
                                var s = l("click", {
                                    onElement: [r, h(o, ".gslide-description")],
                                    withCallback: function(e, i) {
                                        "a" !== e.target.nodeName.toLowerCase() && (u(r, "gdesc-open"), c(r, "gdesc-closed"), o.innerHTML = t.smallDescription, n.descriptionEvents(o, t), setTimeout(function() {
                                            u(r, "gdesc-closed")
                                        }, 400), s.destroy())
                                    }
                                })
                            }
                        })
                    }
                }, {
                    key: "create",
                    value: function() {
                        return m(this.instance.settings.slideHTML)
                    }
                }, {
                    key: "getConfig",
                    value: function() {
                        T(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                        var e = new z(this.instance.settings.slideExtraAttributes);
                        return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
                    }
                }]), e
            }(),
            B = E(),
            Y = null !== E() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
            G = document.getElementsByTagName("html")[0],
            U = {
                selector: ".glightbox",
                elements: null,
                skin: "clean",
                theme: "clean",
                closeButton: !0,
                startAt: null,
                autoplayVideos: !0,
                autofocusVideos: !0,
                descPosition: "bottom",
                width: "900px",
                height: "506px",
                videosWidth: "960px",
                beforeSlideChange: null,
                afterSlideChange: null,
                beforeSlideLoad: null,
                afterSlideLoad: null,
                slideInserted: null,
                slideRemoved: null,
                slideExtraAttributes: null,
                onOpen: null,
                onClose: null,
                loop: !1,
                zoomable: !0,
                draggable: !0,
                dragAutoSnap: !1,
                dragToleranceX: 40,
                dragToleranceY: 65,
                preload: !0,
                oneSlidePerOpen: !1,
                touchNavigation: !0,
                touchFollowAxis: !0,
                keyboardNavigation: !0,
                closeOnOutsideClick: !0,
                plugins: !1,
                plyr: {
                    css: "https://cdn.plyr.io/3.6.12/plyr.css",
                    js: "https://cdn.plyr.io/3.6.12/plyr.js",
                    config: {
                        ratio: "16:9",
                        fullscreen: {
                            enabled: !0,
                            iosNative: !0
                        },
                        youtube: {
                            noCookie: !0,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3
                        },
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            transparent: !1
                        }
                    }
                },
                openEffect: "zoom",
                closeEffect: "zoom",
                slideEffect: "slide",
                moreText: "See more",
                moreLength: 60,
                cssEfects: {
                    fade: {
                        in: "fadeIn",
                        out: "fadeOut"
                    },
                    zoom: {
                        in: "zoomIn",
                        out: "zoomOut"
                    },
                    slide: {
                        in: "slideInRight",
                        out: "slideOutLeft"
                    },
                    slideBack: {
                        in: "slideInLeft",
                        out: "slideOutRight"
                    },
                    none: {
                        in: "none",
                        out: "none"
                    }
                },
                svg: {
                    close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                    next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                    prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
                },
                slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
                lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
            },
            X = function() {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    t(this, e), this.customOptions = n, this.settings = o(U, n), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
                }
                return i(e, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            t = this.getSelector();
                        t && (this.baseEvents = l("click", {
                            onElement: t,
                            withCallback: function(t, n) {
                                t.preventDefault(), e.open(n)
                            }
                        })), this.elements = this.getElements()
                    }
                }, {
                    key: "open",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (0 === this.elements.length) return !1;
                        this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                        var n = N(t) ? t : this.settings.startAt;
                        if (T(e)) {
                            var i = e.getAttribute("data-gallery");
                            i && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, i)), A(n) && (n = this.getElementIndex(e)) < 0 && (n = 0)
                        }
                        N(n) || (n = 0), this.build(), f(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                        var r = document.body,
                            o = window.innerWidth - document.documentElement.clientWidth;
                        if (o > 0) {
                            var s = document.createElement("style");
                            s.type = "text/css", s.className = "gcss-styles", s.innerText = ".gscrollbar-fixer {margin-right: ".concat(o, "px}"), document.head.appendChild(s), c(r, "gscrollbar-fixer")
                        }
                        c(r, "glightbox-open"), c(G, "glightbox-open"), B && (c(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(n, !0), 1 === this.elements.length ? (c(this.prevButton, "glightbox-button-hidden"), c(this.nextButton, "glightbox-button-hidden")) : (u(this.prevButton, "glightbox-button-hidden"), u(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), _(this.settings.onOpen) && this.settings.onOpen(), Y && this.settings.touchNavigation && function(e) {
                            if (e.events.hasOwnProperty("touch")) return !1;
                            var t, n, i, r = y(),
                                o = r.width,
                                s = r.height,
                                a = !1,
                                l = null,
                                f = null,
                                g = null,
                                v = !1,
                                m = 1,
                                b = 1,
                                w = !1,
                                E = !1,
                                _ = null,
                                S = null,
                                T = null,
                                x = null,
                                O = 0,
                                C = 0,
                                A = !1,
                                k = !1,
                                L = {},
                                N = {},
                                I = 0,
                                D = 0,
                                P = document.getElementById("glightbox-slider"),
                                M = document.querySelector(".goverlay"),
                                W = new H(P, {
                                    touchStart: function(t) {
                                        if (a = !0, (d(t.targetTouches[0].target, "ginner-container") || h(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (a = !1), h(t.targetTouches[0].target, ".gslide-inline") && !d(t.targetTouches[0].target.parentNode, "gslide-inline") && (a = !1), a) {
                                            if (N = t.targetTouches[0], L.pageX = t.targetTouches[0].pageX, L.pageY = t.targetTouches[0].pageY, I = t.targetTouches[0].clientX, D = t.targetTouches[0].clientY, l = e.activeSlide, f = l.querySelector(".gslide-media"), i = l.querySelector(".gslide-inline"), g = null, d(f, "gslide-image") && (g = f.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (f = l.querySelector(".ginner-container")), u(M, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                                            t.preventDefault()
                                        }
                                    },
                                    touchMove: function(r) {
                                        if (a && (N = r.targetTouches[0], !w && !E)) {
                                            if (i && i.offsetHeight > s) {
                                                var l = L.pageX - N.pageX;
                                                if (Math.abs(l) <= 13) return !1
                                            }
                                            v = !0;
                                            var c, u = r.targetTouches[0].clientX,
                                                d = r.targetTouches[0].clientY,
                                                h = I - u,
                                                m = D - d;
                                            if (Math.abs(h) > Math.abs(m) ? (A = !1, k = !0) : (k = !1, A = !0), t = N.pageX - L.pageX, O = 100 * t / o, n = N.pageY - L.pageY, C = 100 * n / s, A && g && (c = 1 - Math.abs(n) / s, M.style.opacity = c, e.settings.touchFollowAxis && (O = 0)), k && (c = 1 - Math.abs(t) / o, f.style.opacity = c, e.settings.touchFollowAxis && (C = 0)), !g) return p(f, "translate3d(".concat(O, "%, 0, 0)"));
                                            p(f, "translate3d(".concat(O, "%, ").concat(C, "%, 0)"))
                                        }
                                    },
                                    touchEnd: function() {
                                        if (a) {
                                            if (v = !1, E || w) return T = _, void(x = S);
                                            var t = Math.abs(parseInt(C)),
                                                n = Math.abs(parseInt(O));
                                            if (!(t > 29 && g)) return t < 29 && n < 25 ? (c(M, "greset"), M.style.opacity = 1, q(f)) : void 0;
                                            e.close()
                                        }
                                    },
                                    multipointEnd: function() {
                                        setTimeout(function() {
                                            w = !1
                                        }, 50)
                                    },
                                    multipointStart: function() {
                                        w = !0, m = b || 1
                                    },
                                    pinch: function(e) {
                                        if (!g || v) return !1;
                                        w = !0, g.scaleX = g.scaleY = m * e.zoom;
                                        var t = m * e.zoom;
                                        if (E = !0, t <= 1) return E = !1, t = 1, x = null, T = null, _ = null, S = null, void g.setAttribute("style", "");
                                        t > 4.5 && (t = 4.5), g.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), b = t
                                    },
                                    pressMove: function(e) {
                                        if (E && !w) {
                                            var t = N.pageX - L.pageX,
                                                n = N.pageY - L.pageY;
                                            T && (t += T), x && (n += x), _ = t, S = n;
                                            var i = "translate3d(".concat(t, "px, ").concat(n, "px, 0)");
                                            b && (i += " scale3d(".concat(b, ", ").concat(b, ", 1)")), p(g, i)
                                        }
                                    },
                                    swipe: function(t) {
                                        if (!E)
                                            if (w) w = !1;
                                            else {
                                                if ("Left" == t.direction) {
                                                    if (e.index == e.elements.length - 1) return q(f);
                                                    e.nextSlide()
                                                }
                                                if ("Right" == t.direction) {
                                                    if (0 == e.index) return q(f);
                                                    e.prevSlide()
                                                }
                                            }
                                    }
                                });
                            e.events.touch = W
                        }(this), this.settings.keyboardNavigation && function(e) {
                            if (e.events.hasOwnProperty("keyboard")) return !1;
                            e.events.keyboard = l("keydown", {
                                onElement: window,
                                withCallback: function(t, n) {
                                    var i = (t = t || window.event).keyCode;
                                    if (9 == i) {
                                        var r = document.querySelector(".gbtn.focused");
                                        if (!r) {
                                            var o = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                                            if ("input" == o || "textarea" == o || "button" == o) return
                                        }
                                        t.preventDefault();
                                        var s = document.querySelectorAll(".gbtn[data-taborder]");
                                        if (!s || s.length <= 0) return;
                                        if (!r) {
                                            var a = I();
                                            return void(a && (a.focus(), c(a, "focused")))
                                        }
                                        var l = I(r.getAttribute("data-taborder"));
                                        u(r, "focused"), l && (l.focus(), c(l, "focused"))
                                    }
                                    39 == i && e.nextSlide(), 37 == i && e.prevSlide(), 27 == i && e.close()
                                }
                            })
                        }(this)
                    }
                }, {
                    key: "openAt",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.open(null, e)
                    }
                }, {
                    key: "showSlide",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        g(this.loader), this.index = parseInt(t);
                        var i = this.slidesContainer.querySelector(".current");
                        i && u(i, "current"), this.slideAnimateOut();
                        var r = this.slidesContainer.querySelectorAll(".gslide")[t];
                        if (d(r, "loaded")) this.slideAnimateIn(r, n), v(this.loader);
                        else {
                            g(this.loader);
                            var o = this.elements[t],
                                s = {
                                    index: this.index,
                                    slide: r,
                                    slideNode: r,
                                    slideConfig: o.slideConfig,
                                    slideIndex: this.index,
                                    trigger: o.node,
                                    player: null
                                };
                            this.trigger("slide_before_load", s), o.instance.setContent(r, function() {
                                v(e.loader), e.resize(), e.slideAnimateIn(r, n), e.trigger("slide_after_load", s)
                            })
                        }
                        this.slideDescription = r.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && d(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = r
                    }
                }, {
                    key: "preloadSlide",
                    value: function(e) {
                        var t = this;
                        if (e < 0 || e > this.elements.length - 1) return !1;
                        if (A(this.elements[e])) return !1;
                        var n = this.slidesContainer.querySelectorAll(".gslide")[e];
                        if (d(n, "loaded")) return !1;
                        var i = this.elements[e],
                            r = i.type,
                            o = {
                                index: e,
                                slide: n,
                                slideNode: n,
                                slideConfig: i.slideConfig,
                                slideIndex: e,
                                trigger: i.node,
                                player: null
                            };
                        this.trigger("slide_before_load", o), "video" === r || "external" === r ? setTimeout(function() {
                            i.instance.setContent(n, function() {
                                t.trigger("slide_after_load", o)
                            })
                        }, 200) : i.instance.setContent(n, function() {
                            t.trigger("slide_after_load", o)
                        })
                    }
                }, {
                    key: "prevSlide",
                    value: function() {
                        this.goToSlide(this.index - 1)
                    }
                }, {
                    key: "nextSlide",
                    value: function() {
                        this.goToSlide(this.index + 1)
                    }
                }, {
                    key: "goToSlide",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                        e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
                    }
                }, {
                    key: "insertSlide",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        t < 0 && (t = this.elements.length);
                        var n = new F(e, this, t),
                            i = n.getConfig(),
                            r = o({}, i),
                            s = n.create(),
                            a = this.elements.length - 1;
                        r.index = t, r.node = !1, r.instance = n, r.slideConfig = i, this.elements.splice(t, 0, r);
                        var l = null,
                            c = null;
                        if (this.slidesContainer) {
                            if (t > a) this.slidesContainer.appendChild(s);
                            else {
                                var u = this.slidesContainer.querySelectorAll(".gslide")[t];
                                this.slidesContainer.insertBefore(s, u)
                            }(this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), l = this.slidesContainer.querySelectorAll(".gslide")[t], c = this.getSlidePlayerInstance(t), r.slideNode = l
                        }
                        this.trigger("slide_inserted", {
                            index: t,
                            slide: l,
                            slideNode: l,
                            slideConfig: i,
                            slideIndex: t,
                            trigger: null,
                            player: c
                        }), _(this.settings.slideInserted) && this.settings.slideInserted({
                            index: t,
                            slide: l,
                            player: c
                        })
                    }
                }, {
                    key: "removeSlide",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                        if (e < 0 || e > this.elements.length - 1) return !1;
                        var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                        t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), _(this.settings.slideRemoved) && this.settings.slideRemoved(e)
                    }
                }, {
                    key: "slideAnimateIn",
                    value: function(e, t) {
                        var n = this,
                            i = e.querySelector(".gslide-media"),
                            r = e.querySelector(".gslide-description"),
                            o = {
                                index: this.prevActiveSlideIndex,
                                slide: this.prevActiveSlide,
                                slideNode: this.prevActiveSlide,
                                slideIndex: this.prevActiveSlide,
                                slideConfig: A(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                                trigger: A(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                            },
                            s = {
                                index: this.index,
                                slide: this.activeSlide,
                                slideNode: this.activeSlide,
                                slideConfig: this.elements[this.index].slideConfig,
                                slideIndex: this.index,
                                trigger: this.elements[this.index].node,
                                player: this.getSlidePlayerInstance(this.index)
                            };
                        if (i.offsetWidth > 0 && r && (v(r), r.style.display = ""), u(e, this.effectsClasses), t) f(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                            n.settings.autoplayVideos && n.slidePlayerPlay(e), n.trigger("slide_changed", {
                                prev: o,
                                current: s
                            }), _(n.settings.afterSlideChange) && n.settings.afterSlideChange.apply(n, [o, s])
                        });
                        else {
                            var a = this.settings.slideEffect,
                                l = "none" !== a ? this.settings.cssEfects[a].in : a;
                            this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (l = this.settings.cssEfects.slideBack.in), f(e, l, function() {
                                n.settings.autoplayVideos && n.slidePlayerPlay(e), n.trigger("slide_changed", {
                                    prev: o,
                                    current: s
                                }), _(n.settings.afterSlideChange) && n.settings.afterSlideChange.apply(n, [o, s])
                            })
                        }
                        setTimeout(function() {
                            n.resize(e)
                        }, 100), c(e, "current")
                    }
                }, {
                    key: "slideAnimateOut",
                    value: function() {
                        if (!this.prevActiveSlide) return !1;
                        var e = this.prevActiveSlide;
                        u(e, this.effectsClasses), c(e, "prev");
                        var t = this.settings.slideEffect,
                            n = "none" !== t ? this.settings.cssEfects[t].out : t;
                        this.slidePlayerPause(e), this.trigger("slide_before_change", {
                            prev: {
                                index: this.prevActiveSlideIndex,
                                slide: this.prevActiveSlide,
                                slideNode: this.prevActiveSlide,
                                slideIndex: this.prevActiveSlideIndex,
                                slideConfig: A(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                                trigger: A(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                            },
                            current: {
                                index: this.index,
                                slide: this.activeSlide,
                                slideNode: this.activeSlide,
                                slideIndex: this.index,
                                slideConfig: this.elements[this.index].slideConfig,
                                trigger: this.elements[this.index].node,
                                player: this.getSlidePlayerInstance(this.index)
                            }
                        }), _(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        }, {
                            index: this.index,
                            slide: this.activeSlide,
                            player: this.getSlidePlayerInstance(this.index)
                        }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (n = this.settings.cssEfects.slideBack.out), f(e, n, function() {
                            var t = e.querySelector(".ginner-container"),
                                n = e.querySelector(".gslide-media"),
                                i = e.querySelector(".gslide-description");
                            t.style.transform = "", n.style.transform = "", u(n, "greset"), n.style.opacity = "", i && (i.style.opacity = ""), u(e, "prev")
                        })
                    }
                }, {
                    key: "getAllPlayers",
                    value: function() {
                        return this.videoPlayers
                    }
                }, {
                    key: "getSlidePlayerInstance",
                    value: function(e) {
                        var t = "gvideo" + e,
                            n = this.getAllPlayers();
                        return !(!k(n, t) || !n[t]) && n[t]
                    }
                }, {
                    key: "stopSlideVideo",
                    value: function(e) {
                        if (T(e)) {
                            var t = e.querySelector(".gvideo-wrapper");
                            t && (e = t.getAttribute("data-index"))
                        }
                        console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                        var n = this.getSlidePlayerInstance(e);
                        n && n.playing && n.pause()
                    }
                }, {
                    key: "slidePlayerPause",
                    value: function(e) {
                        if (T(e)) {
                            var t = e.querySelector(".gvideo-wrapper");
                            t && (e = t.getAttribute("data-index"))
                        }
                        var n = this.getSlidePlayerInstance(e);
                        n && n.playing && n.pause()
                    }
                }, {
                    key: "playSlideVideo",
                    value: function(e) {
                        if (T(e)) {
                            var t = e.querySelector(".gvideo-wrapper");
                            t && (e = t.getAttribute("data-index"))
                        }
                        console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                        var n = this.getSlidePlayerInstance(e);
                        n && !n.playing && n.play()
                    }
                }, {
                    key: "slidePlayerPlay",
                    value: function(e) {
                        var t;
                        if (!B || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                            if (T(e)) {
                                var n = e.querySelector(".gvideo-wrapper");
                                n && (e = n.getAttribute("data-index"))
                            }
                            var i = this.getSlidePlayerInstance(e);
                            i && !i.playing && (i.play(), this.settings.autofocusVideos && i.elements.container.focus())
                        }
                    }
                }, {
                    key: "setElements",
                    value: function(e) {
                        var t = this;
                        this.settings.elements = !1;
                        var n = [];
                        e && e.length && s(e, function(e, i) {
                            var r = new F(e, t, i),
                                s = r.getConfig(),
                                a = o({}, s);
                            a.slideConfig = s, a.instance = r, a.index = i, n.push(a)
                        }), this.elements = n, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (s(this.elements, function() {
                            var e = m(t.settings.slideHTML);
                            t.slidesContainer.appendChild(e)
                        }), this.showSlide(0, !0)))
                    }
                }, {
                    key: "getElementIndex",
                    value: function(e) {
                        var t = !1;
                        return s(this.elements, function(n, i) {
                            if (k(n, "node") && n.node == e) return t = i, !0
                        }), t
                    }
                }, {
                    key: "getElements",
                    value: function() {
                        var e = this,
                            t = [];
                        this.elements = this.elements ? this.elements : [], !A(this.settings.elements) && x(this.settings.elements) && this.settings.elements.length && s(this.settings.elements, function(n, i) {
                            var r = new F(n, e, i),
                                s = r.getConfig(),
                                a = o({}, s);
                            a.node = !1, a.index = i, a.instance = r, a.slideConfig = s, t.push(a)
                        });
                        var n = !1;
                        return this.getSelector() && (n = document.querySelectorAll(this.getSelector())), n ? (s(n, function(n, i) {
                            var r = new F(n, e, i),
                                s = r.getConfig(),
                                a = o({}, s);
                            a.node = n, a.index = i, a.instance = r, a.slideConfig = s, a.gallery = n.getAttribute("data-gallery"), t.push(a)
                        }), t) : t
                    }
                }, {
                    key: "getGalleryElements",
                    value: function(e, t) {
                        return e.filter(function(e) {
                            return e.gallery == t
                        })
                    }
                }, {
                    key: "getSelector",
                    value: function() {
                        return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
                    }
                }, {
                    key: "getActiveSlide",
                    value: function() {
                        return this.slidesContainer.querySelectorAll(".gslide")[this.index]
                    }
                }, {
                    key: "getActiveSlideIndex",
                    value: function() {
                        return this.index
                    }
                }, {
                    key: "getAnimationClasses",
                    value: function() {
                        var e = [];
                        for (var t in this.settings.cssEfects)
                            if (this.settings.cssEfects.hasOwnProperty(t)) {
                                var n = this.settings.cssEfects[t];
                                e.push("g".concat(n.in)), e.push("g".concat(n.out))
                            } return e.join(" ")
                    }
                }, {
                    key: "build",
                    value: function() {
                        var e = this;
                        if (this.built) return !1;
                        var t = document.body.childNodes,
                            n = [];
                        s(t, function(e) {
                            e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (n.push(e), e.setAttribute("aria-hidden", "true"))
                        });
                        var i = k(this.settings.svg, "next") ? this.settings.svg.next : "",
                            r = k(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                            o = k(this.settings.svg, "close") ? this.settings.svg.close : "",
                            a = this.settings.lightboxHTML;
                        a = m(a = (a = (a = a.replace(/{nextSVG}/g, i)).replace(/{prevSVG}/g, r)).replace(/{closeSVG}/g, o)), document.body.appendChild(a);
                        var u = document.getElementById("glightbox-body");
                        this.modal = u;
                        var f = u.querySelector(".gclose");
                        this.prevButton = u.querySelector(".gprev"), this.nextButton = u.querySelector(".gnext"), this.overlay = u.querySelector(".goverlay"), this.loader = u.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = n, this.events = {}, c(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && f && (this.events.close = l("click", {
                            onElement: f,
                            withCallback: function(t, n) {
                                t.preventDefault(), e.close()
                            }
                        })), f && !this.settings.closeButton && f.parentNode.removeChild(f), this.nextButton && (this.events.next = l("click", {
                            onElement: this.nextButton,
                            withCallback: function(t, n) {
                                t.preventDefault(), e.nextSlide()
                            }
                        })), this.prevButton && (this.events.prev = l("click", {
                            onElement: this.prevButton,
                            withCallback: function(t, n) {
                                t.preventDefault(), e.prevSlide()
                            }
                        })), this.settings.closeOnOutsideClick && (this.events.outClose = l("click", {
                            onElement: u,
                            withCallback: function(t, n) {
                                e.preventOutsideClick || d(document.body, "glightbox-mobile") || h(t.target, ".ginner-container") || h(t.target, ".gbtn") || d(t.target, "gnext") || d(t.target, "gprev") || e.close()
                            }
                        })), s(this.elements, function(t, n) {
                            e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[n]
                        }), Y && c(document.body, "glightbox-touch"), this.events.resize = l("resize", {
                            onElement: window,
                            withCallback: function() {
                                e.resize()
                            }
                        }), this.built = !0
                    }
                }, {
                    key: "resize",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if ((e = e || this.activeSlide) && !d(e, "zoomed")) {
                            var t = y(),
                                n = e.querySelector(".gvideo-wrapper"),
                                i = e.querySelector(".gslide-image"),
                                r = this.slideDescription,
                                o = t.width,
                                s = t.height;
                            if (o <= 768 ? c(document.body, "glightbox-mobile") : u(document.body, "glightbox-mobile"), n || i) {
                                var a = !1;
                                if (r && (d(r, "description-bottom") || d(r, "description-top")) && !d(r, "gabsolute") && (a = !0), i)
                                    if (o <= 768) i.querySelector("img");
                                    else if (a) {
                                    var l = r.offsetHeight,
                                        h = i.querySelector("img");
                                    h.setAttribute("style", "max-height: calc(100vh - ".concat(l, "px)")), r.setAttribute("style", "max-width: ".concat(h.offsetWidth, "px;"))
                                }
                                if (n) {
                                    var f = k(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                    if (!f) {
                                        var p = n.clientWidth,
                                            g = n.clientHeight,
                                            v = p / g;
                                        f = "".concat(p / v, ":").concat(g / v)
                                    }
                                    var m = f.split(":"),
                                        b = this.settings.videosWidth,
                                        w = this.settings.videosWidth,
                                        E = (w = N(b) || -1 !== b.indexOf("px") ? parseInt(b) : -1 !== b.indexOf("vw") ? o * parseInt(b) / 100 : -1 !== b.indexOf("vh") ? s * parseInt(b) / 100 : -1 !== b.indexOf("%") ? o * parseInt(b) / 100 : parseInt(n.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                    if (E = Math.floor(E), a && (s -= r.offsetHeight), w > o || E > s || s < E && o > w) {
                                        var _ = n.offsetWidth,
                                            S = n.offsetHeight,
                                            T = s / S,
                                            x = {
                                                width: _ * T,
                                                height: S * T
                                            };
                                        n.parentNode.setAttribute("style", "max-width: ".concat(x.width, "px")), a && r.setAttribute("style", "max-width: ".concat(x.width, "px;"))
                                    } else n.parentNode.style.maxWidth = "".concat(b), a && r.setAttribute("style", "max-width: ".concat(b, ";"))
                                }
                            }
                        }
                    }
                }, {
                    key: "reload",
                    value: function() {
                        this.init()
                    }
                }, {
                    key: "updateNavigationClasses",
                    value: function() {
                        var e = this.loop();
                        u(this.nextButton, "disabled"), u(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (c(this.prevButton, "disabled"), c(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || c(this.nextButton, "disabled") : c(this.prevButton, "disabled")
                    }
                }, {
                    key: "loop",
                    value: function() {
                        var e = k(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                        return e = k(this.settings, "loop") ? this.settings.loop : e
                    }
                }, {
                    key: "close",
                    value: function() {
                        var e = this;
                        if (!this.lightboxOpen) {
                            if (this.events) {
                                for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
                                this.events = null
                            }
                            return !1
                        }
                        if (this.closing) return !1;
                        this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && s(this.bodyHiddenChildElms, function(e) {
                            e.removeAttribute("aria-hidden")
                        }), c(this.modal, "glightbox-closing"), f(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), f(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                            if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                                for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                                e.events = null
                            }
                            var n = document.body;
                            u(G, "glightbox-open"), u(n, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), _(e.settings.onClose) && e.settings.onClose();
                            var i = document.querySelector(".gcss-styles");
                            i && i.parentNode.removeChild(i), e.lightboxOpen = !1, e.closing = null
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!e || !_(t)) throw new TypeError("Event name and callback must be defined");
                        this.apiEvents.push({
                            evt: e,
                            once: n,
                            callback: t
                        })
                    }
                }, {
                    key: "once",
                    value: function(e, t) {
                        this.on(e, t, !0)
                    }
                }, {
                    key: "trigger",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            i = [];
                        s(this.apiEvents, function(t, r) {
                            var o = t.evt,
                                s = t.once,
                                a = t.callback;
                            o == e && (a(n), s && i.push(r))
                        }), i.length && s(i, function(e) {
                            return t.apiEvents.splice(e, 1)
                        })
                    }
                }, {
                    key: "clearAllEvents",
                    value: function() {
                        this.apiEvents.splice(0, this.apiEvents.length)
                    }
                }, {
                    key: "version",
                    value: function() {
                        return "3.1.0"
                    }
                }]), e
            }();
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = new X(e);
            return t.init(), t
        }
    }()
}, function(e, t, n) {
    e.exports = function(e) {
        "use strict";
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var t = "transitionend";

        function n(t) {
            var n = this,
                r = !1;
            return e(this).one(i.TRANSITION_END, function() {
                r = !0
            }), setTimeout(function() {
                r || i.triggerTransitionEnd(n)
            }, t), this
        }
        var i = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration"),
                    i = e(t).css("transition-delay"),
                    r = parseFloat(n),
                    o = parseFloat(i);
                return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(n) {
                e(n).trigger(t)
            },
            supportsTransitionEnd: function() {
                return Boolean(t)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, n) {
                for (var r in n)
                    if (Object.prototype.hasOwnProperty.call(n, r)) {
                        var o = n[r],
                            s = t[r],
                            a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                    } var l
            },
            findShadowRoot: function(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? i.findShadowRoot(e.parentNode) : null
            }
        };
        return e.fn.emulateTransitionEnd = n, e.event.special[i.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function(t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }, i
    }(n(0))
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            for (var n = "undefined" != typeof window && "undefined" != typeof document, i = ["Edge", "Trident", "Firefox"], r = 0, o = 0; o < i.length; o += 1)
                if (n && navigator.userAgent.indexOf(i[o]) >= 0) {
                    r = 1;
                    break
                } var s = n && window.Promise ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then(function() {
                        t = !1, e()
                    }))
                }
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout(function() {
                        t = !1, e()
                    }, r))
                }
            };

            function a(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function l(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function c(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function u(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = l(e),
                    n = t.overflow,
                    i = t.overflowX,
                    r = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + r + i) ? e : u(c(e))
            }
            var d = n && !(!window.MSInputMethodContext || !document.documentMode),
                h = n && /MSIE 10/.test(navigator.userAgent);

            function f(e) {
                return 11 === e ? d : 10 === e ? h : d || h
            }

            function p(e) {
                if (!e) return document.documentElement;
                for (var t = f(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function g(e) {
                return null !== e.parentNode ? g(e.parentNode) : e
            }

            function v(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? e : t,
                    r = n ? t : e,
                    o = document.createRange();
                o.setStart(i, 0), o.setEnd(r, 0);
                var s, a, l = o.commonAncestorContainer;
                if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && p(s.firstElementChild) !== s ? p(l) : l;
                var c = g(e);
                return c.host ? v(c.host, t) : v(e, g(t).host)
            }

            function m(e) {
                var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                    n = e.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var i = e.ownerDocument.documentElement;
                    return (e.ownerDocument.scrollingElement || i)[t]
                }
                return e[t]
            }

            function y(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
            }

            function b(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], f(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function w(e) {
                var t = e.body,
                    n = e.documentElement,
                    i = f(10) && getComputedStyle(n);
                return {
                    height: b("Height", t, n, i),
                    width: b("Width", t, n, i)
                }
            }
            var E = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                _ = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                S = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                };

            function x(e) {
                return T({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function O(e) {
                var t = {};
                try {
                    if (f(10)) {
                        t = e.getBoundingClientRect();
                        var n = m(e, "top"),
                            i = m(e, "left");
                        t.top += n, t.left += i, t.bottom += n, t.right += i
                    } else t = e.getBoundingClientRect()
                } catch (e) {}
                var r = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    o = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
                    s = o.width || e.clientWidth || r.right - r.left,
                    a = o.height || e.clientHeight || r.bottom - r.top,
                    c = e.offsetWidth - s,
                    u = e.offsetHeight - a;
                if (c || u) {
                    var d = l(e);
                    c -= y(d, "x"), u -= y(d, "y"), r.width -= c, r.height -= u
                }
                return x(r)
            }

            function C(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = f(10),
                    r = "HTML" === t.nodeName,
                    o = O(e),
                    s = O(t),
                    a = u(e),
                    c = l(t),
                    d = parseFloat(c.borderTopWidth, 10),
                    h = parseFloat(c.borderLeftWidth, 10);
                n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                var p = x({
                    top: o.top - s.top - d,
                    left: o.left - s.left - h,
                    width: o.width,
                    height: o.height
                });
                if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
                    var g = parseFloat(c.marginTop, 10),
                        v = parseFloat(c.marginLeft, 10);
                    p.top -= d - g, p.bottom -= d - g, p.left -= h - v, p.right -= h - v, p.marginTop = g, p.marginLeft = v
                }
                return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (p = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = m(t, "top"),
                        r = m(t, "left"),
                        o = n ? -1 : 1;
                    return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
                }(p, t)), p
            }

            function A(e) {
                if (!e || !e.parentElement || f()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === l(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function k(e, t, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = {
                        top: 0,
                        left: 0
                    },
                    s = r ? A(e) : v(e, t);
                if ("viewport" === i) o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = C(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = t ? 0 : m(n),
                        a = t ? 0 : m(n, "left");
                    return x({
                        top: s - i.top + i.marginTop,
                        left: a - i.left + i.marginLeft,
                        width: r,
                        height: o
                    })
                }(s, r);
                else {
                    var a = void 0;
                    "scrollParent" === i ? "BODY" === (a = u(c(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
                    var d = C(a, s, r);
                    if ("HTML" !== a.nodeName || function e(t) {
                            var n = t.nodeName;
                            if ("BODY" === n || "HTML" === n) return !1;
                            if ("fixed" === l(t, "position")) return !0;
                            var i = c(t);
                            return !!i && e(i)
                        }(s)) o = d;
                    else {
                        var h = w(e.ownerDocument),
                            f = h.height,
                            p = h.width;
                        o.top += d.top - d.marginTop, o.bottom = f + d.top, o.left += d.left - d.marginLeft, o.right = p + d.left
                    }
                }
                var g = "number" == typeof(n = n || 0);
                return o.left += g ? n : n.left || 0, o.top += g ? n : n.top || 0, o.right -= g ? n : n.right || 0, o.bottom -= g ? n : n.bottom || 0, o
            }

            function L(e, t, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var s = k(n, i, o, r),
                    a = {
                        top: {
                            width: s.width,
                            height: t.top - s.top
                        },
                        right: {
                            width: s.right - t.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - t.bottom
                        },
                        left: {
                            width: t.left - s.left,
                            height: s.height
                        }
                    },
                    l = Object.keys(a).map(function(e) {
                        return T({
                            key: e
                        }, a[e], {
                            area: (t = a[e], t.width * t.height)
                        });
                        var t
                    }).sort(function(e, t) {
                        return t.area - e.area
                    }),
                    c = l.filter(function(e) {
                        var t = e.width,
                            i = e.height;
                        return t >= n.clientWidth && i >= n.clientHeight
                    }),
                    u = c.length > 0 ? c[0].key : l[0].key,
                    d = e.split("-")[1];
                return u + (d ? "-" + d : "")
            }

            function N(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return C(n, i ? A(t) : v(t, n), i)
            }

            function I(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + i,
                    height: e.offsetHeight + n
                }
            }

            function D(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return t[e]
                })
            }

            function P(e, t, n) {
                n = n.split("-")[0];
                var i = I(e),
                    r = {
                        width: i.width,
                        height: i.height
                    },
                    o = -1 !== ["right", "left"].indexOf(n),
                    s = o ? "top" : "left",
                    a = o ? "left" : "top",
                    l = o ? "height" : "width",
                    c = o ? "width" : "height";
                return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[D(a)], r
            }

            function M(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function H(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex(function(e) {
                        return e[t] === n
                    });
                    var i = M(e, function(e) {
                        return e[t] === n
                    });
                    return e.indexOf(i)
                }(e, "name", n))).forEach(function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && a(n) && (t.offsets.popper = x(t.offsets.popper), t.offsets.reference = x(t.offsets.reference), t = n(t, e))
                }), t
            }

            function q(e, t) {
                return e.some(function(e) {
                    var n = e.name;
                    return e.enabled && n === t
                })
            }

            function W(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var r = t[i],
                        o = r ? "" + r + n : e;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }

            function j(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function V(e, t, n, i) {
                n.updateBound = i, j(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var r = u(e);
                return function e(t, n, i, r) {
                    var o = "BODY" === t.nodeName,
                        s = o ? t.ownerDocument.defaultView : t;
                    s.addEventListener(n, i, {
                        passive: !0
                    }), o || e(u(s.parentNode), n, i, r), r.push(s)
                }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
            }

            function R() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, j(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
            }

            function z(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function F(e, t) {
                Object.keys(t).forEach(function(n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && z(t[n]) && (i = "px"), e.style[n] = t[n] + i
                })
            }
            var B = n && /Firefox/i.test(navigator.userAgent);

            function Y(e, t, n) {
                var i = M(e, function(e) {
                        return e.name === t
                    }),
                    r = !!i && e.some(function(e) {
                        return e.name === n && e.enabled && e.order < i.order
                    });
                if (!r) {
                    var o = "`" + t + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return r
            }
            var G = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                U = G.slice(3);

            function X(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = U.indexOf(e),
                    i = U.slice(n + 1).concat(U.slice(0, n));
                return t ? i.reverse() : i
            }
            var $ = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            };

            function J(e, t, n, i) {
                var r = [0, 0],
                    o = -1 !== ["right", "left"].indexOf(i),
                    s = e.split(/(\+|\-)/).map(function(e) {
                        return e.trim()
                    }),
                    a = s.indexOf(M(s, function(e) {
                        return -1 !== e.search(/,|\s/)
                    }));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return (c = c.map(function(e, i) {
                    var r = (1 === i ? !o : o) ? "height" : "width",
                        s = !1;
                    return e.reduce(function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                    }, []).map(function(e) {
                        return function(e, t, n, i) {
                            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                o = +r[1],
                                s = r[2];
                            if (!o) return e;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i
                                }
                                return x(a)[t] / 100 * o
                            }
                            if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                            return o
                        }(e, r, t, n)
                    })
                })).forEach(function(e, t) {
                    e.forEach(function(n, i) {
                        z(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                    })
                }), r
            }
            var K = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var r = e.offsets,
                                        o = r.reference,
                                        s = r.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        c = a ? "width" : "height",
                                        u = {
                                            start: S({}, l, o[l]),
                                            end: S({}, l, o[l] + o[c] - s[c])
                                        };
                                    e.offsets.popper = T({}, s, u[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    r = e.offsets,
                                    o = r.popper,
                                    s = r.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = z(+n) ? [+n, 0] : J(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.boundariesElement || p(e.instance.popper);
                                e.instance.reference === n && (n = p(n));
                                var i = W("transform"),
                                    r = e.instance.popper.style,
                                    o = r.top,
                                    s = r.left,
                                    a = r[i];
                                r.top = "", r.left = "", r[i] = "";
                                var l = k(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                                var c = t.priority,
                                    u = e.offsets.popper,
                                    d = {
                                        primary: function(e) {
                                            var n = u[e];
                                            return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), S({}, e, n)
                                        },
                                        secondary: function(e) {
                                            var n = "right" === e ? "left" : "top",
                                                i = u[n];
                                            return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), S({}, n, i)
                                        }
                                    };
                                return c.forEach(function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    u = T({}, u, d[t](e))
                                }), e.offsets.popper = u, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    r = e.placement.split("-")[0],
                                    o = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(r),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    c = s ? "width" : "height";
                                return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                var n;
                                if (!Y(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var r = e.placement.split("-")[0],
                                    o = e.offsets,
                                    s = o.popper,
                                    a = o.reference,
                                    c = -1 !== ["left", "right"].indexOf(r),
                                    u = c ? "height" : "width",
                                    d = c ? "Top" : "Left",
                                    h = d.toLowerCase(),
                                    f = c ? "left" : "top",
                                    p = c ? "bottom" : "right",
                                    g = I(i)[u];
                                a[p] - g < s[h] && (e.offsets.popper[h] -= s[h] - (a[p] - g)), a[h] + g > s[p] && (e.offsets.popper[h] += a[h] + g - s[p]), e.offsets.popper = x(e.offsets.popper);
                                var v = a[h] + a[u] / 2 - g / 2,
                                    m = l(e.instance.popper),
                                    y = parseFloat(m["margin" + d], 10),
                                    b = parseFloat(m["border" + d + "Width"], 10),
                                    w = v - e.offsets.popper[h] - y - b;
                                return w = Math.max(Math.min(s[u] - g, w), 0), e.arrowElement = i, e.offsets.arrow = (S(n = {}, h, Math.round(w)), S(n, f, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(e, t) {
                                if (q(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = k(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    i = e.placement.split("-")[0],
                                    r = D(i),
                                    o = e.placement.split("-")[1] || "",
                                    s = [];
                                switch (t.behavior) {
                                    case $.FLIP:
                                        s = [i, r];
                                        break;
                                    case $.CLOCKWISE:
                                        s = X(i);
                                        break;
                                    case $.COUNTERCLOCKWISE:
                                        s = X(i, !0);
                                        break;
                                    default:
                                        s = t.behavior
                                }
                                return s.forEach(function(a, l) {
                                    if (i !== a || s.length === l + 1) return e;
                                    i = e.placement.split("-")[0], r = D(i);
                                    var c = e.offsets.popper,
                                        u = e.offsets.reference,
                                        d = Math.floor,
                                        h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                                        f = d(c.left) < d(n.left),
                                        p = d(c.right) > d(n.right),
                                        g = d(c.top) < d(n.top),
                                        v = d(c.bottom) > d(n.bottom),
                                        m = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && v,
                                        y = -1 !== ["top", "bottom"].indexOf(i),
                                        b = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && v);
                                    (h || m || b) && (e.flipped = !0, (h || m) && (i = s[l + 1]), b && (o = function(e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = T({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = H(e.instance.modifiers, e, "flip"))
                                }), e
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport"
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    r = i.popper,
                                    o = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = D(t), e.offsets.popper = x(r), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!Y(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = M(e.instance.modifiers, function(e) {
                                        return "preventOverflow" === e.name
                                    }).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.x,
                                    i = t.y,
                                    r = e.offsets.popper,
                                    o = M(e.instance.modifiers, function(e) {
                                        return "applyStyle" === e.name
                                    }).gpuAcceleration;
                                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== o ? o : t.gpuAcceleration,
                                    a = p(e.instance.popper),
                                    l = O(a),
                                    c = {
                                        position: r.position
                                    },
                                    u = function(e, t) {
                                        var n = e.offsets,
                                            i = n.popper,
                                            r = n.reference,
                                            o = Math.round,
                                            s = Math.floor,
                                            a = function(e) {
                                                return e
                                            },
                                            l = o(r.width),
                                            c = o(i.width),
                                            u = -1 !== ["left", "right"].indexOf(e.placement),
                                            d = -1 !== e.placement.indexOf("-"),
                                            h = t ? u || d || l % 2 == c % 2 ? o : s : a,
                                            f = t ? o : a;
                                        return {
                                            left: h(l % 2 == 1 && c % 2 == 1 && !d && t ? i.left - 1 : i.left),
                                            top: f(i.top),
                                            bottom: f(i.bottom),
                                            right: h(i.right)
                                        }
                                    }(e, window.devicePixelRatio < 2 || !B),
                                    d = "bottom" === n ? "top" : "bottom",
                                    h = "right" === i ? "left" : "right",
                                    f = W("transform"),
                                    g = void 0,
                                    v = void 0;
                                if (v = "bottom" === d ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, g = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && f) c[f] = "translate3d(" + g + "px, " + v + "px, 0)", c[d] = 0, c[h] = 0, c.willChange = "transform";
                                else {
                                    var m = "bottom" === d ? -1 : 1,
                                        y = "right" === h ? -1 : 1;
                                    c[d] = v * m, c[h] = g * y, c.willChange = d + ", " + h
                                }
                                var b = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = T({}, b, e.attributes), e.styles = T({}, c, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                var t, n;
                                return F(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                }), e.arrowElement && Object.keys(e.arrowStyles).length && F(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function(e, t, n, i, r) {
                                var o = N(r, t, e, n.positionFixed),
                                    s = L(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", s), F(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                Q = function() {
                    function e(t, n) {
                        var i = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        E(this, e), this.scheduleUpdate = function() {
                            return requestAnimationFrame(i.update)
                        }, this.update = s(this.update.bind(this)), this.options = T({}, e.Defaults, r), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) {
                            i.options.modifiers[t] = T({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                            return T({
                                name: e
                            }, i.options.modifiers[e])
                        }).sort(function(e, t) {
                            return e.order - t.order
                        }), this.modifiers.forEach(function(e) {
                            e.enabled && a(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                        }), this.update();
                        var o = this.options.eventsEnabled;
                        o && this.enableEventListeners(), this.state.eventsEnabled = o
                    }
                    return _(e, [{
                        key: "update",
                        value: function() {
                            return function() {
                                if (!this.state.isDestroyed) {
                                    var e = {
                                        instance: this,
                                        styles: {},
                                        arrowStyles: {},
                                        attributes: {},
                                        flipped: !1,
                                        offsets: {}
                                    };
                                    e.offsets.reference = N(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = L(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = H(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                                }
                            }.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return function() {
                                return this.state.isDestroyed = !0, q(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[W("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                            }.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return function() {
                                this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate))
                            }.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return R.call(this)
                        }
                    }]), e
                }();
            Q.Utils = ("undefined" != typeof window ? window : e).PopperUtils, Q.placements = G, Q.Defaults = K, t.default = Q
        }.call(this, n(9))
}, function(e, t, n) {
    var i, r, o, s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    o = function() {
        "use strict";
        var e = !("onscroll" in window) || /glebot/.test(navigator.userAgent),
            t = function(e, t) {
                e && e(t)
            },
            n = function(e) {
                return e.getBoundingClientRect().top + window.pageYOffset - e.ownerDocument.documentElement.clientTop
            },
            i = function(e) {
                return e.getBoundingClientRect().left + window.pageXOffset - e.ownerDocument.documentElement.clientLeft
            },
            r = function(e, t, r) {
                return !(function(e, t, i) {
                    return (t === window ? window.innerHeight + window.pageYOffset : n(t) + t.offsetHeight) <= n(e) - i
                }(e, t, r) || function(e, t, i) {
                    return (t === window ? window.pageYOffset : n(t)) >= n(e) + i + e.offsetHeight
                }(e, t, r) || function(e, t, n) {
                    var r = window.innerWidth;
                    return (t === window ? r + window.pageXOffset : i(t) + r) <= i(e) - n
                }(e, t, r) || function(e, t, n) {
                    return (t === window ? window.pageXOffset : i(t)) >= i(e) + n + e.offsetWidth
                }(e, t, r))
            },
            o = function(e, t) {
                var n, i = new e(t);
                try {
                    n = new CustomEvent("LazyLoad::Initialized", {
                        detail: {
                            instance: i
                        }
                    })
                } catch (e) {
                    (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                        instance: i
                    })
                }
                window.dispatchEvent(n)
            },
            a = function(e, t) {
                return e.getAttribute("data-" + t)
            },
            l = function(e, t, n) {
                return e.setAttribute("data-" + t, n)
            },
            c = function(e, t, n) {
                var i = e.tagName,
                    r = a(e, n);
                if ("IMG" === i) {
                    ! function(e, t) {
                        var n = e.parentNode;
                        if (!n || "PICTURE" === n.tagName)
                            for (var i = 0; i < n.children.length; i++) {
                                var r = n.children[i];
                                if ("SOURCE" === r.tagName) {
                                    var o = a(r, t);
                                    o && r.setAttribute("srcset", o)
                                }
                            }
                    }(e, t);
                    var o = a(e, t);
                    return o && e.setAttribute("srcset", o), void(r && e.setAttribute("src", r))
                }
                "IFRAME" !== i ? r && (e.style.backgroundImage = 'url("' + r + '")') : r && e.setAttribute("src", r)
            },
            u = "undefined" != typeof window,
            d = u && "classList" in document.createElement("p"),
            h = function(e, t) {
                d ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
            },
            f = function(e, t) {
                d ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            },
            p = function(e) {
                this._settings = s({}, {
                    elements_selector: "img",
                    container: window,
                    threshold: 300,
                    throttle: 150,
                    data_src: "src",
                    data_srcset: "srcset",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_initial: "initial",
                    skip_invisible: !0,
                    callback_load: null,
                    callback_error: null,
                    callback_set: null,
                    callback_processed: null,
                    callback_enter: null
                }, e), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update()
            };
        p.prototype = {
            _reveal: function(e) {
                var n = this._settings,
                    i = function i() {
                        n && (e.removeEventListener("load", r), e.removeEventListener("error", i), f(e, n.class_loading), h(e, n.class_error), t(n.callback_error, e))
                    },
                    r = function r() {
                        n && (f(e, n.class_loading), h(e, n.class_loaded), e.removeEventListener("load", r), e.removeEventListener("error", i), t(n.callback_load, e))
                    };
                t(n.callback_enter, e), "IMG" !== e.tagName && "IFRAME" !== e.tagName || (e.addEventListener("load", r), e.addEventListener("error", i), h(e, n.class_loading)), c(e, n.data_srcset, n.data_src), t(n.callback_set, e)
            },
            _loopThroughElements: function() {
                var n = this._settings,
                    i = this._elements,
                    o = i ? i.length : 0,
                    s = void 0,
                    a = [],
                    c = this._isFirstLoop;
                for (s = 0; s < o; s++) {
                    var u = i[s];
                    n.skip_invisible && null === u.offsetParent || (e || r(u, n.container, n.threshold)) && (c && h(u, n.class_initial), this._reveal(u), a.push(s), l(u, "was-processed", !0))
                }
                for (; a.length;) i.splice(a.pop(), 1), t(n.callback_processed, i.length);
                0 === o && this._stopScrollHandler(), c && (this._isFirstLoop = !1)
            },
            _purgeElements: function() {
                var e = this._elements,
                    t = e.length,
                    n = void 0,
                    i = [];
                for (n = 0; n < t; n++) {
                    var r = e[n];
                    a(r, "was-processed") && i.push(n)
                }
                for (; i.length > 0;) e.splice(i.pop(), 1)
            },
            _startScrollHandler: function() {
                this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll))
            },
            _stopScrollHandler: function() {
                this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll))
            },
            handleScroll: function() {
                var e = this._settings.throttle;
                if (0 !== e) {
                    var t = Date.now(),
                        n = e - (t - this._previousLoopTime);
                    n <= 0 || n > e ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = t, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function() {
                        this._previousLoopTime = Date.now(), this._loopTimeout = null, this._loopThroughElements()
                    }.bind(this), n))
                } else this._loopThroughElements()
            },
            update: function() {
                this._elements = Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
            },
            destroy: function() {
                window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
            }
        };
        var g = window.lazyLoadOptions;
        return u && g && function(e, t) {
            var n = t.length;
            if (n)
                for (var i = 0; i < n; i++) o(e, t[i]);
            else o(e, t)
        }(p, g), p
    }, "object" === a(t) && void 0 !== e ? e.exports = o() : void 0 === (r = "function" == typeof(i = o) ? i.call(t, n, t, e) : i) || (e.exports = r)
}, function(e, t) {
    var n = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object"],
        i = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";

    function r(e, t) {
        return "string" == typeof e && (t = e, e = document), Array.prototype.slice.call(e.querySelectorAll(t))
    }

    function o(e) {
        return "string" == typeof e ? e.split(",").map(a).filter(s) : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }(e) ? function(e) {
            return [].concat.apply([], e)
        }(e.map(o).filter(s)) : e || []
    }

    function s(e) {
        return e.length > 0
    }

    function a(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
    e.exports = function(e, t) {
        var a;
        t = t || {}, a = e = e || "body", "[object Object]" === Object.prototype.toString.call(a) && (t = e, e = "body"), t.ignore = t.ignore || "", t.players = t.players || "";
        var l = r(e);
        if (s(l)) {
            var c;
            if (!document.getElementById("fit-vids-style"))(document.head || document.getElementsByTagName("head")[0]).appendChild(((c = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">' + i + "</style>", c.childNodes[1]));
            var u = o(t.players),
                d = o(t.ignore),
                h = d.length > 0 ? d.join() : null,
                f = n.concat(u).join();
            s(f) && l.forEach(function(e) {
                r(e, f).forEach(function(e) {
                    h && e.matches(h) || function(e) {
                        if (/fluid-width-video-wrapper/.test(e.parentNode.className)) return;
                        var t = parseInt(e.getAttribute("width"), 10),
                            n = parseInt(e.getAttribute("height"), 10),
                            i = isNaN(t) ? e.clientWidth : t,
                            r = (isNaN(n) ? e.clientHeight : n) / i;
                        e.removeAttribute("width"), e.removeAttribute("height");
                        var o = document.createElement("div");
                        e.parentNode.insertBefore(o, e), o.className = "fluid-width-video-wrapper", o.style.paddingTop = 100 * r + "%", o.appendChild(e)
                    }(e)
                })
            })
        }
    }
}, function(e, t, n) {
    e.exports = function() {
        "use strict";

        function e(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (window.Promise) return p(e, t, n);
            e.recalculate(!0, !0)
        }

        function t(e) {
            var t = e.useContainerForBreakpoints ? e.container.clientWidth : window.innerWidth,
                n = {
                    columns: e.columns
                };
            m(e.margin) ? n.margin = {
                x: e.margin.x,
                y: e.margin.y
            } : n.margin = {
                x: e.margin,
                y: e.margin
            };
            var i = Object.keys(e.breakAt);
            return e.mobileFirst ? function(e) {
                for (var t = e.options, n = e.responsiveOptions, i = e.keys, r = e.docWidth, o = void 0, s = 0; s < i.length; s++) {
                    var a = parseInt(i[s], 10);
                    r >= a && (o = t.breakAt[a], y(o, n))
                }
                return n
            }({
                options: e,
                responsiveOptions: n,
                keys: i,
                docWidth: t
            }) : function(e) {
                for (var t = e.options, n = e.responsiveOptions, i = e.keys, r = e.docWidth, o = void 0, s = i.length - 1; s >= 0; s--) {
                    var a = parseInt(i[s], 10);
                    r <= a && (o = t.breakAt[a], y(o, n))
                }
                return n
            }({
                options: e,
                responsiveOptions: n,
                keys: i,
                docWidth: t
            })
        }

        function n(e) {
            return t(e).columns
        }

        function i(e) {
            return t(e).margin
        }

        function r(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                r = n(e),
                o = i(e).x,
                s = 100 / r;
            if (!t) return s;
            if (1 === r) return "100%";
            var a = "px";
            if ("string" == typeof o) {
                var l = parseFloat(o);
                a = o.replace(l, ""), o = l
            }
            return o = (r - 1) * o / r, "%" === a ? s - o + "%" : "calc(" + s + "% - " + o + a + ")"
        }

        function o(e, t) {
            var o = n(e.options),
                s = 0,
                a = void 0,
                l = void 0;
            if (1 == ++t) return 0;
            l = i(e.options).x;
            var c = "px";
            if ("string" == typeof l) {
                var u = parseFloat(l, 10);
                c = l.replace(u, ""), l = u
            }
            return a = (l - (o - 1) * l / o) * (t - 1), s += r(e.options, !1) * (t - 1), "%" === c ? s + a + "%" : "calc(" + s + "% + " + a + c + ")"
        }

        function s(e) {
            var t = 0,
                n = e.container,
                i = e.rows;
            l(i, function(e) {
                t = e > t ? e : t
            }), n.style.height = t + "px"
        }
        var a = function e(t, n) {
            if (!(this instanceof e)) return new e(t, n);
            if (t && t.nodeName) return t;
            if (t = t.replace(/^\s*/, "").replace(/\s*$/, ""), n) return this.byCss(t, n);
            for (var i in this.selectors)
                if (n = i.split("/"), new RegExp(n[1], n[2]).test(t)) return this.selectors[i](t);
            return this.byCss(t)
        };
        a.prototype.byCss = function(e, t) {
            return (t || document).querySelectorAll(e)
        }, a.prototype.selectors = {}, a.prototype.selectors[/^\.[\w\-]+$/] = function(e) {
            return document.getElementsByClassName(e.substring(1))
        }, a.prototype.selectors[/^\w+$/] = function(e) {
            return document.getElementsByTagName(e)
        }, a.prototype.selectors[/^\#[\w\-]+$/] = function(e) {
            return document.getElementById(e.substring(1))
        };
        var l = function(e, t) {
                for (var n = e.length, i = n; n--;) t(e[i - n - 1])
            },
            c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.running = !1, this.events = [], this.add(e)
            };
        c.prototype.run = function() {
            if (!this.running && this.events.length > 0) {
                var e = this.events.shift();
                this.running = !0, e(), this.running = !1, this.run()
            }
        }, c.prototype.add = function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return !!t && (Array.isArray(t) ? l(t, function(t) {
                return e.add(t)
            }) : (this.events.push(t), void this.run()))
        }, c.prototype.clear = function() {
            this.events = []
        };
        var u = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.instance = e, this.data = t, this
            },
            d = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.events = {}, this.instance = e
            };
        d.prototype.on = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return !(!e || !t) && (Array.isArray(this.events[e]) || (this.events[e] = []), this.events[e].push(t))
        }, d.prototype.emit = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e || !Array.isArray(this.events[e])) return !1;
            var n = new u(this.instance, t);
            l(this.events[e], function(e) {
                return e(n)
            })
        };
        var h = function(e) {
                return !("naturalHeight" in e && e.naturalHeight + e.naturalWidth === 0) || e.width + e.height !== 0
            },
            f = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return function(e, t) {
                    for (var n = e.length, i = n, r = []; n--;) r.push(t(e[i - n - 1]));
                    return r
                }(t, function(t) {
                    return function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return new Promise(function(e, n) {
                            if (t.complete) return h(t) ? e(t) : n(t);
                            t.addEventListener("load", function() {
                                return h(t) ? e(t) : n(t)
                            }), t.addEventListener("error", function() {
                                return n(t)
                            })
                        }).then(function(t) {
                            n && e.emit(e.constants.EVENT_IMAGE_LOAD, {
                                img: t
                            })
                        }).catch(function(t) {
                            return e.emit(e.constants.EVENT_IMAGE_ERROR, {
                                img: t
                            })
                        })
                    }(e, t, n)
                })
            },
            p = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return Promise.all(f(e, t, n)).then(function() {
                    e.emit(e.constants.EVENT_IMAGE_COMPLETE)
                })
            },
            g = function(e) {
                return function(e, t) {
                    var n = void 0;
                    return function() {
                        n && clearTimeout(n), n = setTimeout(e, t)
                    }
                }(function() {
                    e.emit(e.constants.EVENT_RESIZE), e.queue.add(function() {
                        return e.recalculate(!0, !0)
                    })
                }, 100)
            },
            v = function(t) {
                (function(e) {
                    if (e.container = a(e.options.container), e.container instanceof a || !e.container) return !!e.options.debug && console.error("Error: Container not found");
                    e.container.length && (e.container = e.container[0]), e.options.container = e.container, e.container.style.position = "relative"
                })(t),
                function(e) {
                    e.queue = new c, e.events = new d(e), e.rows = [], e.resizer = g(e)
                }(t),
                function(t) {
                    var n = a("img", t.container);
                    window.addEventListener("resize", t.resizer), t.on(t.constants.EVENT_IMAGE_LOAD, function() {
                        return t.recalculate(!1, !1)
                    }), t.on(t.constants.EVENT_IMAGE_COMPLETE, function() {
                        return t.recalculate(!0, !0)
                    }), t.options.useOwnImageLoader || e(t, n, !t.options.waitForImages), t.emit(t.constants.EVENT_INITIALIZED)
                }(t)
            },
            m = function(e) {
                return e === Object(e) && "[object Array]" !== Object.prototype.toString.call(e)
            },
            y = function(e, t) {
                m(e) || (t.columns = e), m(e) && e.columns && (t.columns = e.columns), m(e) && e.margin && !m(e.margin) && (t.margin = {
                    x: e.margin,
                    y: e.margin
                }), m(e) && e.margin && m(e.margin) && e.margin.x && (t.margin.x = e.margin.x), m(e) && e.margin && m(e.margin) && e.margin.y && (t.margin.y = e.margin.y)
            },
            b = function(e, t) {
                return window.getComputedStyle(e, null).getPropertyValue(t)
            },
            w = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e.lastcol || (e.lastcol = 0), e.rows.length < 1 && (n = !0), n) {
                    e.rows = [], e.cols = [], e.lastcol = 0;
                    for (var i = t - 1; i >= 0; i--) e.rows[i] = 0, e.cols[i] = o(e, i)
                } else if (e.tmpRows) {
                    e.rows = [];
                    for (var i = t - 1; i >= 0; i--) e.rows[i] = e.tmpRows[i]
                } else {
                    e.tmpRows = [];
                    for (var i = t - 1; i >= 0; i--) e.tmpRows[i] = e.rows[i]
                }
            },
            E = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    c = t ? e.container.children : a(':scope > *:not([data-macy-complete="1"])', e.container);
                c = Array.from(c).filter(function(e) {
                    return null !== e.offsetParent
                });
                var u = r(e.options);
                return l(c, function(e) {
                    t && (e.dataset.macyComplete = 0), e.style.width = u
                }), e.options.trueOrder ? (function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = n(e.options),
                        c = i(e.options).y;
                    w(e, a, r), l(t, function(t) {
                        e.lastcol === a && (e.lastcol = 0);
                        var n = b(t, "height");
                        n = parseInt(t.offsetHeight, 10), isNaN(n) || (t.style.position = "absolute", t.style.top = e.rows[e.lastcol] + "px", t.style.left = "" + e.cols[e.lastcol], e.rows[e.lastcol] += isNaN(n) ? 0 : n + c, e.lastcol += 1, o && (t.dataset.macyComplete = 1))
                    }), o && (e.tmpRows = null), s(e)
                }(e, c, t, o), e.emit(e.constants.EVENT_RECALCULATED)) : (function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = n(e.options),
                        c = i(e.options).y;
                    w(e, a, r), l(t, function(t) {
                        var n = 0,
                            i = parseInt(t.offsetHeight, 10);
                        isNaN(i) || (e.rows.forEach(function(t, i) {
                            t < e.rows[n] && (n = i)
                        }), t.style.position = "absolute", t.style.top = e.rows[n] + "px", t.style.left = "" + e.cols[n], e.rows[n] += isNaN(i) ? 0 : i + c, o && (t.dataset.macyComplete = 1))
                    }), o && (e.tmpRows = null), s(e)
                }(e, c, t, o), e.emit(e.constants.EVENT_RECALCULATED))
            },
            _ = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            };
        Array.from || (Array.from = function(e) {
            for (var t = 0, n = []; t < e.length;) n.push(e[t++]);
            return n
        });
        var S = {
            columns: 4,
            margin: 2,
            trueOrder: !1,
            waitForImages: !1,
            useImageLoader: !0,
            breakAt: {},
            useOwnImageLoader: !1,
            onInit: !1,
            cancelLegacy: !1,
            useContainerForBreakpoints: !1
        };
        ! function() {
            try {
                document.createElement("a").querySelector(":scope *")
            } catch (e) {
                ! function() {
                    function e(e) {
                        return function(n) {
                            if (n && t.test(n)) {
                                var i = this.getAttribute("id");
                                i || (this.id = "q" + Math.floor(9e6 * Math.random()) + 1e6), arguments[0] = n.replace(t, "#" + this.id);
                                var r = e.apply(this, arguments);
                                return null === i ? this.removeAttribute("id") : i || (this.id = i), r
                            }
                            return e.apply(this, arguments)
                        }
                    }
                    var t = /:scope\b/gi,
                        n = e(Element.prototype.querySelector);
                    Element.prototype.querySelector = function(e) {
                        return n.apply(this, arguments)
                    };
                    var i = e(Element.prototype.querySelectorAll);
                    Element.prototype.querySelectorAll = function(e) {
                        return i.apply(this, arguments)
                    }
                }()
            }
        }();
        var T = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S;
            if (!(this instanceof e)) return new e(t);
            this.options = {}, _(this.options, S, t), this.options.cancelLegacy && !window.Promise || v(this)
        };
        return T.init = function(e) {
            return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), new T(e)
        }, T.prototype.recalculateOnImageLoad = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e(this, a("img", this.container), !t)
        }, T.prototype.runOnImageLoad = function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = a("img", this.container);
            return this.on(this.constants.EVENT_IMAGE_COMPLETE, t), n && this.on(this.constants.EVENT_IMAGE_LOAD, t), e(this, i, n)
        }, T.prototype.recalculate = function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return n && this.queue.clear(), this.queue.add(function() {
                return E(e, t, n)
            })
        }, T.prototype.remove = function() {
            window.removeEventListener("resize", this.resizer), l(this.container.children, function(e) {
                e.removeAttribute("data-macy-complete"), e.removeAttribute("style")
            }), this.container.removeAttribute("style")
        }, T.prototype.reInit = function() {
            this.recalculate(!0, !0), this.emit(this.constants.EVENT_INITIALIZED), window.addEventListener("resize", this.resizer), this.container.style.position = "relative"
        }, T.prototype.on = function(e, t) {
            this.events.on(e, t)
        }, T.prototype.emit = function(e, t) {
            this.events.emit(e, t)
        }, T.constants = {
            EVENT_INITIALIZED: "macy.initialized",
            EVENT_RECALCULATED: "macy.recalculated",
            EVENT_IMAGE_LOAD: "macy.image.load",
            EVENT_IMAGE_ERROR: "macy.image.error",
            EVENT_IMAGE_COMPLETE: "macy.images.complete",
            EVENT_RESIZE: "macy.resize"
        }, T.prototype.constants = T.constants, T
    }()
}, function(e, t, n) {
    e.exports = function(e, t) {
        "use strict";

        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t;
        var i = e.fn.tab,
            r = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api"
            },
            o = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                DISABLED: "disabled",
                FADE: "fade",
                SHOW: "show"
            },
            s = {
                DROPDOWN: ".dropdown",
                NAV_LIST_GROUP: ".nav, .list-group",
                ACTIVE: ".active",
                ACTIVE_UL: "> li > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            },
            a = function() {
                function i(e) {
                    this._element = e
                }
                var a, l, c, u = i.prototype;
                return u.show = function() {
                    var n = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(o.ACTIVE) || e(this._element).hasClass(o.DISABLED))) {
                        var i, a, l = e(this._element).closest(s.NAV_LIST_GROUP)[0],
                            c = t.getSelectorFromElement(this._element);
                        if (l) {
                            var u = "UL" === l.nodeName || "OL" === l.nodeName ? s.ACTIVE_UL : s.ACTIVE;
                            a = (a = e.makeArray(e(l).find(u)))[a.length - 1]
                        }
                        var d = e.Event(r.HIDE, {
                                relatedTarget: this._element
                            }),
                            h = e.Event(r.SHOW, {
                                relatedTarget: a
                            });
                        if (a && e(a).trigger(d), e(this._element).trigger(h), !h.isDefaultPrevented() && !d.isDefaultPrevented()) {
                            c && (i = document.querySelector(c)), this._activate(this._element, l);
                            var f = function() {
                                var t = e.Event(r.HIDDEN, {
                                        relatedTarget: n._element
                                    }),
                                    i = e.Event(r.SHOWN, {
                                        relatedTarget: a
                                    });
                                e(a).trigger(t), e(n._element).trigger(i)
                            };
                            i ? this._activate(i, i.parentNode, f) : f()
                        }
                    }
                }, u.dispose = function() {
                    e.removeData(this._element, "bs.tab"), this._element = null
                }, u._activate = function(n, i, r) {
                    var a = this,
                        l = !i || "UL" !== i.nodeName && "OL" !== i.nodeName ? e(i).children(s.ACTIVE) : e(i).find(s.ACTIVE_UL),
                        c = l[0],
                        u = r && c && e(c).hasClass(o.FADE),
                        d = function() {
                            return a._transitionComplete(n, c, r)
                        };
                    if (c && u) {
                        var h = t.getTransitionDurationFromElement(c);
                        e(c).removeClass(o.SHOW).one(t.TRANSITION_END, d).emulateTransitionEnd(h)
                    } else d()
                }, u._transitionComplete = function(n, i, r) {
                    if (i) {
                        e(i).removeClass(o.ACTIVE);
                        var a = e(i.parentNode).find(s.DROPDOWN_ACTIVE_CHILD)[0];
                        a && e(a).removeClass(o.ACTIVE), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                    }
                    if (e(n).addClass(o.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), t.reflow(n), n.classList.contains(o.FADE) && n.classList.add(o.SHOW), n.parentNode && e(n.parentNode).hasClass(o.DROPDOWN_MENU)) {
                        var l = e(n).closest(s.DROPDOWN)[0];
                        if (l) {
                            var c = [].slice.call(l.querySelectorAll(s.DROPDOWN_TOGGLE));
                            e(c).addClass(o.ACTIVE)
                        }
                        n.setAttribute("aria-expanded", !0)
                    }
                    r && r()
                }, i._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = e(this),
                            r = n.data("bs.tab");
                        if (r || (r = new i(this), n.data("bs.tab", r)), "string" == typeof t) {
                            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                            r[t]()
                        }
                    })
                }, a = i, c = [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }], (l = null) && n(a.prototype, l), c && n(a, c), i
            }();
        return e(document).on(r.CLICK_DATA_API, s.DATA_TOGGLE, function(t) {
            t.preventDefault(), a._jQueryInterface.call(e(this), "show")
        }), e.fn.tab = a._jQueryInterface, e.fn.tab.Constructor = a, e.fn.tab.noConflict = function() {
            return e.fn.tab = i, a._jQueryInterface
        }, a
    }(n(0), n(2))
}, function(e, t, n) {
    e.exports = function(e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                    r(e, t, n[t])
                })
            }
            return e
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
        var s = "dropdown",
            a = "bs.dropdown",
            l = "." + a,
            c = e.fn[s],
            u = new RegExp("38|40|27"),
            d = {
                HIDE: "hide" + l,
                HIDDEN: "hidden" + l,
                SHOW: "show" + l,
                SHOWN: "shown" + l,
                CLICK: "click" + l,
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            },
            h = {
                DISABLED: "disabled",
                SHOW: "show",
                DROPUP: "dropup",
                DROPRIGHT: "dropright",
                DROPLEFT: "dropleft",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                POSITION_STATIC: "position-static"
            },
            f = {
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                MENU: ".dropdown-menu",
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
            },
            p = {
                TOP: "top-start",
                TOPEND: "top-end",
                BOTTOM: "bottom-start",
                BOTTOMEND: "bottom-end",
                RIGHT: "right-start",
                RIGHTEND: "right-end",
                LEFT: "left-start",
                LEFTEND: "left-end"
            },
            g = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            },
            v = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            },
            m = function() {
                function r(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var c, m, y, b = r.prototype;
                return b.toggle = function() {
                    if (!this._element.disabled && !e(this._element).hasClass(h.DISABLED)) {
                        var i = r._getParentFromElement(this._element),
                            o = e(this._menu).hasClass(h.SHOW);
                        if (r._clearMenus(), !o) {
                            var s = {
                                    relatedTarget: this._element
                                },
                                a = e.Event(d.SHOW, s);
                            if (e(i).trigger(a), !a.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var l = this._element;
                                    "parent" === this._config.reference ? l = i : n.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(i).addClass(h.POSITION_STATIC), this._popper = new t(l, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === e(i).closest(f.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h.SHOW), e(i).toggleClass(h.SHOW).trigger(e.Event(d.SHOWN, s))
                            }
                        }
                    }
                }, b.show = function() {
                    if (!(this._element.disabled || e(this._element).hasClass(h.DISABLED) || e(this._menu).hasClass(h.SHOW))) {
                        var t = {
                                relatedTarget: this._element
                            },
                            n = e.Event(d.SHOW, t),
                            i = r._getParentFromElement(this._element);
                        e(i).trigger(n), n.isDefaultPrevented() || (e(this._menu).toggleClass(h.SHOW), e(i).toggleClass(h.SHOW).trigger(e.Event(d.SHOWN, t)))
                    }
                }, b.hide = function() {
                    if (!this._element.disabled && !e(this._element).hasClass(h.DISABLED) && e(this._menu).hasClass(h.SHOW)) {
                        var t = {
                                relatedTarget: this._element
                            },
                            n = e.Event(d.HIDE, t),
                            i = r._getParentFromElement(this._element);
                        e(i).trigger(n), n.isDefaultPrevented() || (e(this._menu).toggleClass(h.SHOW), e(i).toggleClass(h.SHOW).trigger(e.Event(d.HIDDEN, t)))
                    }
                }, b.dispose = function() {
                    e.removeData(this._element, a), e(this._element).off(l), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, b.update = function() {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, b._addEventListeners = function() {
                    var t = this;
                    e(this._element).on(d.CLICK, function(e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    })
                }, b._getConfig = function(t) {
                    return t = o({}, this.constructor.Default, e(this._element).data(), t), n.typeCheckConfig(s, t, this.constructor.DefaultType), t
                }, b._getMenuElement = function() {
                    if (!this._menu) {
                        var e = r._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(f.MENU))
                    }
                    return this._menu
                }, b._getPlacement = function() {
                    var t = e(this._element.parentNode),
                        n = p.BOTTOM;
                    return t.hasClass(h.DROPUP) ? (n = p.TOP, e(this._menu).hasClass(h.MENURIGHT) && (n = p.TOPEND)) : t.hasClass(h.DROPRIGHT) ? n = p.RIGHT : t.hasClass(h.DROPLEFT) ? n = p.LEFT : e(this._menu).hasClass(h.MENURIGHT) && (n = p.BOTTOMEND), n
                }, b._detectNavbar = function() {
                    return e(this._element).closest(".navbar").length > 0
                }, b._getOffset = function() {
                    var e = this,
                        t = {};
                    return "function" == typeof this._config.offset ? t.fn = function(t) {
                        return t.offsets = o({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                    } : t.offset = this._config.offset, t
                }, b._getPopperConfig = function() {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), e
                }, r._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = e(this).data(a),
                            i = "object" == typeof t ? t : null;
                        if (n || (n = new r(this, i), e(this).data(a, n)), "string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, r._clearMenus = function(t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var n = [].slice.call(document.querySelectorAll(f.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
                            var s = r._getParentFromElement(n[i]),
                                l = e(n[i]).data(a),
                                c = {
                                    relatedTarget: n[i]
                                };
                            if (t && "click" === t.type && (c.clickEvent = t), l) {
                                var u = l._menu;
                                if (e(s).hasClass(h.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
                                    var p = e.Event(d.HIDE, c);
                                    e(s).trigger(p), p.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[i].setAttribute("aria-expanded", "false"), e(u).removeClass(h.SHOW), e(s).removeClass(h.SHOW).trigger(e.Event(d.HIDDEN, c)))
                                }
                            }
                        }
                }, r._getParentFromElement = function(e) {
                    var t, i = n.getSelectorFromElement(e);
                    return i && (t = document.querySelector(i)), t || e.parentNode
                }, r._dataApiKeydownHandler = function(t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(f.MENU).length)) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(h.DISABLED))) {
                        var n = r._getParentFromElement(this),
                            i = e(n).hasClass(h.SHOW);
                        if (i && (!i || 27 !== t.which && 32 !== t.which)) {
                            var o = [].slice.call(n.querySelectorAll(f.VISIBLE_ITEMS));
                            if (0 !== o.length) {
                                var s = o.indexOf(t.target);
                                38 === t.which && s > 0 && s--, 40 === t.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var a = n.querySelector(f.DATA_TOGGLE);
                                e(a).trigger("focus")
                            }
                            e(this).trigger("click")
                        }
                    }
                }, c = r, y = [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return g
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return v
                    }
                }], (m = null) && i(c.prototype, m), y && i(c, y), r
            }();
        return e(document).on(d.KEYDOWN_DATA_API, f.DATA_TOGGLE, m._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API, f.MENU, m._dataApiKeydownHandler).on(d.CLICK_DATA_API + " " + d.KEYUP_DATA_API, m._clearMenus).on(d.CLICK_DATA_API, f.DATA_TOGGLE, function(t) {
            t.preventDefault(), t.stopPropagation(), m._jQueryInterface.call(e(this), "toggle")
        }).on(d.CLICK_DATA_API, f.FORM_CHILD, function(e) {
            e.stopPropagation()
        }), e.fn[s] = m._jQueryInterface, e.fn[s].Constructor = m, e.fn[s].noConflict = function() {
            return e.fn[s] = c, m._jQueryInterface
        }, m
    }(n(0), n(3), n(2))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    e.exports = function(e, t) {
        "use strict";

        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    i(e, t, n[t])
                })
            }
            return e
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t;
        var o = "collapse",
            s = "bs.collapse",
            a = e.fn[o],
            l = {
                toggle: !0,
                parent: ""
            },
            c = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            u = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api"
            },
            d = {
                SHOW: "show",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed"
            },
            h = {
                WIDTH: "width",
                HEIGHT: "height"
            },
            f = {
                ACTIVES: ".show, .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            },
            p = function() {
                function i(e, n) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var i = [].slice.call(document.querySelectorAll(f.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
                        var s = i[r],
                            a = t.getSelectorFromElement(s),
                            l = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                                return t === e
                            });
                        null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(s))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var a, p, g, v = i.prototype;
                return v.toggle = function() {
                    e(this._element).hasClass(d.SHOW) ? this.hide() : this.show()
                }, v.show = function() {
                    var n, r, o = this;
                    if (!(this._isTransitioning || e(this._element).hasClass(d.SHOW) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(f.ACTIVES)).filter(function(e) {
                            return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(d.COLLAPSE)
                        })).length && (n = null), n && (r = e(n).not(this._selector).data(s)) && r._isTransitioning))) {
                        var a = e.Event(u.SHOW);
                        if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                            n && (i._jQueryInterface.call(e(n).not(this._selector), "hide"), r || e(n).data(s, null));
                            var l = this._getDimension();
                            e(this._element).removeClass(d.COLLAPSE).addClass(d.COLLAPSING), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(d.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var c = l[0].toUpperCase() + l.slice(1),
                                h = "scroll" + c,
                                p = t.getTransitionDurationFromElement(this._element);
                            e(this._element).one(t.TRANSITION_END, function() {
                                e(o._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).addClass(d.SHOW), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(u.SHOWN)
                            }).emulateTransitionEnd(p), this._element.style[l] = this._element[h] + "px"
                        }
                    }
                }, v.hide = function() {
                    var n = this;
                    if (!this._isTransitioning && e(this._element).hasClass(d.SHOW)) {
                        var i = e.Event(u.HIDE);
                        if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
                            var r = this._getDimension();
                            this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", t.reflow(this._element), e(this._element).addClass(d.COLLAPSING).removeClass(d.COLLAPSE).removeClass(d.SHOW);
                            var o = this._triggerArray.length;
                            if (o > 0)
                                for (var s = 0; s < o; s++) {
                                    var a = this._triggerArray[s],
                                        l = t.getSelectorFromElement(a);
                                    if (null !== l) {
                                        var c = e([].slice.call(document.querySelectorAll(l)));
                                        c.hasClass(d.SHOW) || e(a).addClass(d.COLLAPSED).attr("aria-expanded", !1)
                                    }
                                }
                            this.setTransitioning(!0), this._element.style[r] = "";
                            var h = t.getTransitionDurationFromElement(this._element);
                            e(this._element).one(t.TRANSITION_END, function() {
                                n.setTransitioning(!1), e(n._element).removeClass(d.COLLAPSING).addClass(d.COLLAPSE).trigger(u.HIDDEN)
                            }).emulateTransitionEnd(h)
                        }
                    }
                }, v.setTransitioning = function(e) {
                    this._isTransitioning = e
                }, v.dispose = function() {
                    e.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, v._getConfig = function(e) {
                    return (e = r({}, l, e)).toggle = Boolean(e.toggle), t.typeCheckConfig(o, e, c), e
                }, v._getDimension = function() {
                    var t = e(this._element).hasClass(h.WIDTH);
                    return t ? h.WIDTH : h.HEIGHT
                }, v._getParent = function() {
                    var n, r = this;
                    t.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        s = [].slice.call(n.querySelectorAll(o));
                    return e(s).each(function(e, t) {
                        r._addAriaAndCollapsedClass(i._getTargetFromElement(t), [t])
                    }), n
                }, v._addAriaAndCollapsedClass = function(t, n) {
                    var i = e(t).hasClass(d.SHOW);
                    n.length && e(n).toggleClass(d.COLLAPSED, !i).attr("aria-expanded", i)
                }, i._getTargetFromElement = function(e) {
                    var n = t.getSelectorFromElement(e);
                    return n ? document.querySelector(n) : null
                }, i._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = e(this),
                            o = n.data(s),
                            a = r({}, l, n.data(), "object" == typeof t && t ? t : {});
                        if (!o && a.toggle && /show|hide/.test(t) && (a.toggle = !1), o || (o = new i(this, a), n.data(s, o)), "string" == typeof t) {
                            if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                            o[t]()
                        }
                    })
                }, a = i, g = [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return l
                    }
                }], (p = null) && n(a.prototype, p), g && n(a, g), i
            }();
        return e(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function(n) {
            "A" === n.currentTarget.tagName && n.preventDefault();
            var i = e(this),
                r = t.getSelectorFromElement(this),
                o = [].slice.call(document.querySelectorAll(r));
            e(o).each(function() {
                var t = e(this),
                    n = t.data(s) ? "toggle" : i.data();
                p._jQueryInterface.call(t, n)
            })
        }), e.fn[o] = p._jQueryInterface, e.fn[o].Constructor = p, e.fn[o].noConflict = function() {
            return e.fn[o] = a, p._jQueryInterface
        }, p
    }(n(0), n(2))
}, function(e, t, n) {
    e.exports = function(e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                    r(e, t, n[t])
                })
            }
            return e
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
        var s = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            a = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            c = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function u(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var i = new window.DOMParser, r = i.parseFromString(e, "text/html"), o = Object.keys(t), a = [].slice.call(r.body.querySelectorAll("*")), u = function(e, n) {
                    var i = a[e],
                        r = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var u = [].slice.call(i.attributes),
                        d = [].concat(t["*"] || [], t[r] || []);
                    u.forEach(function(e) {
                        (function(e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n)) return -1 === s.indexOf(n) || Boolean(e.nodeValue.match(l) || e.nodeValue.match(c));
                            for (var i = t.filter(function(e) {
                                    return e instanceof RegExp
                                }), r = 0, o = i.length; r < o; r++)
                                if (n.match(i[r])) return !0;
                            return !1
                        })(e, d) || i.removeAttribute(e.nodeName)
                    })
                }, d = 0, h = a.length; d < h; d++) u(d);
            return r.body.innerHTML
        }
        var d = "tooltip",
            h = ".bs.tooltip",
            f = e.fn[d],
            p = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            g = ["sanitize", "whiteList", "sanitizeFn"],
            v = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object"
            },
            m = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            y = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: a
            },
            b = {
                SHOW: "show",
                OUT: "out"
            },
            w = {
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                INSERTED: "inserted" + h,
                CLICK: "click" + h,
                FOCUSIN: "focusin" + h,
                FOCUSOUT: "focusout" + h,
                MOUSEENTER: "mouseenter" + h,
                MOUSELEAVE: "mouseleave" + h
            },
            E = {
                FADE: "fade",
                SHOW: "show"
            },
            _ = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner",
                ARROW: ".arrow"
            },
            S = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            },
            T = function() {
                function r(e, n) {
                    if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(n), this.tip = null, this._setListeners()
                }
                var s, a, l, c = r.prototype;
                return c.enable = function() {
                    this._isEnabled = !0
                }, c.disable = function() {
                    this._isEnabled = !1
                }, c.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                }, c.toggle = function(t) {
                    if (this._isEnabled)
                        if (t) {
                            var n = this.constructor.DATA_KEY,
                                i = e(t.currentTarget).data(n);
                            i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (e(this.getTipElement()).hasClass(E.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, c.dispose = function() {
                    clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, c.show = function() {
                    var i = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var r = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(r);
                        var o = n.findShadowRoot(this.element),
                            s = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                        if (r.isDefaultPrevented() || !s) return;
                        var a = this.getTipElement(),
                            l = n.getUID(this.constructor.NAME);
                        a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass(E.FADE);
                        var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                            u = this._getAttachment(c);
                        this.addAttachmentClass(u);
                        var d = this._getContainer();
                        e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new t(this.element, a, {
                            placement: u,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: _.ARROW
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function(e) {
                                e.originalPlacement !== e.placement && i._handlePopperPlacementChange(e)
                            },
                            onUpdate: function(e) {
                                return i._handlePopperPlacementChange(e)
                            }
                        }), e(a).addClass(E.SHOW), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var h = function() {
                            i.config.animation && i._fixTransition();
                            var t = i._hoverState;
                            i._hoverState = null, e(i.element).trigger(i.constructor.Event.SHOWN), t === b.OUT && i._leave(null, i)
                        };
                        if (e(this.tip).hasClass(E.FADE)) {
                            var f = n.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(n.TRANSITION_END, h).emulateTransitionEnd(f)
                        } else h()
                    }
                }, c.hide = function(t) {
                    var i = this,
                        r = this.getTipElement(),
                        o = e.Event(this.constructor.Event.HIDE),
                        s = function() {
                            i._hoverState !== b.SHOW && r.parentNode && r.parentNode.removeChild(r), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
                        };
                    if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
                        if (e(r).removeClass(E.SHOW), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[S.CLICK] = !1, this._activeTrigger[S.FOCUS] = !1, this._activeTrigger[S.HOVER] = !1, e(this.tip).hasClass(E.FADE)) {
                            var a = n.getTransitionDurationFromElement(r);
                            e(r).one(n.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else s();
                        this._hoverState = ""
                    }
                }, c.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, c.isWithContent = function() {
                    return Boolean(this.getTitle())
                }, c.addAttachmentClass = function(t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t)
                }, c.getTipElement = function() {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, c.setContent = function() {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(_.TOOLTIP_INNER)), this.getTitle()), e(t).removeClass(E.FADE + " " + E.SHOW)
                }, c.setElementContent = function(t, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = u(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
                }, c.getTitle = function() {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, c._getOffset = function() {
                    var e = this,
                        t = {};
                    return "function" == typeof this.config.offset ? t.fn = function(t) {
                        return t.offsets = o({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                    } : t.offset = this.config.offset, t
                }, c._getContainer = function() {
                    return !1 === this.config.container ? document.body : n.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
                }, c._getAttachment = function(e) {
                    return m[e.toUpperCase()]
                }, c._setListeners = function() {
                    var t = this,
                        n = this.config.trigger.split(" ");
                    n.forEach(function(n) {
                        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                            return t.toggle(e)
                        });
                        else if (n !== S.MANUAL) {
                            var i = n === S.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                r = n === S.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(i, t.config.selector, function(e) {
                                return t._enter(e)
                            }).on(r, t.config.selector, function(e) {
                                return t._leave(e)
                            })
                        }
                    }), e(this.element).closest(".modal").on("hide.bs.modal", function() {
                        t.element && t.hide()
                    }), this.config.selector ? this.config = o({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, c._fixTitle = function() {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, c._enter = function(t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? S.FOCUS : S.HOVER] = !0), e(n.getTipElement()).hasClass(E.SHOW) || n._hoverState === b.SHOW ? n._hoverState = b.SHOW : (clearTimeout(n._timeout), n._hoverState = b.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                        n._hoverState === b.SHOW && n.show()
                    }, n.config.delay.show) : n.show())
                }, c._leave = function(t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? S.FOCUS : S.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = b.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                        n._hoverState === b.OUT && n.hide()
                    }, n.config.delay.hide) : n.hide())
                }, c._isWithActiveTrigger = function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, c._getConfig = function(t) {
                    var i = e(this.element).data();
                    return Object.keys(i).forEach(function(e) {
                        -1 !== g.indexOf(e) && delete i[e]
                    }), "number" == typeof(t = o({}, this.constructor.Default, i, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), n.typeCheckConfig(d, t, this.constructor.DefaultType), t.sanitize && (t.template = u(t.template, t.whiteList, t.sanitizeFn)), t
                }, c._getDelegateConfig = function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, c._cleanTipClass = function() {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(p);
                    null !== n && n.length && t.removeClass(n.join(""))
                }, c._handlePopperPlacementChange = function(e) {
                    var t = e.instance;
                    this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, c._fixTransition = function() {
                    var t = this.getTipElement(),
                        n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass(E.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, r._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = e(this).data("bs.tooltip"),
                            i = "object" == typeof t && t;
                        if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, s = r, l = [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return y
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return d
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return w
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return h
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return v
                    }
                }], (a = null) && i(s.prototype, a), l && i(s, l), r
            }();
        return e.fn[d] = T._jQueryInterface, e.fn[d].Constructor = T, e.fn[d].noConflict = function() {
            return e.fn[d] = f, T._jQueryInterface
        }, T
    }(n(0), n(3), n(2))
}, function(e, t, n) {}, function(e, t) {
    jQuery.fn.endlessRiver = function(e) {
        e = jQuery.extend({
            speed: 100,
            pause: !0,
            buttons: !1
        }, e);
        var t = $('<ul class="er-controls"><li class="prev glyphicon glyphicon-chevron-left"></li><li class="pause glyphicon glyphicon-pause"></li><li class="next glyphicon glyphicon-chevron-right"></li></ul>'),
            n = "mouseenter mouseleave",
            i = "play glyphicon-play pause glyphicon-pause",
            r = function(e) {
                return e.children("li:first")
            },
            o = function(t) {
                return t / e.speed * 1e3
            };
        return this.each(function() {
            var s, a, l = jQuery,
                c = l("body"),
                u = l(this),
                d = "ER_" + +new Date,
                h = !0;
            u.wrap("<div id='" + d + "'></div>"), u.css({
                margin: "0 !important",
                padding: "0 !important"
            });
            var f = u.offset().left,
                p = 1;
            u.children("li.tick-clones").remove(), u.addClass("newsticker");
            u.wrap("<div class='mask'></div>");
            for (var g = u.parent().wrap("<div class='tickercontainer'></div>"), v = u.children("li"), m = g.outerWidth(!0); p < m;) p = 1, u.append(v.clone(!0).addClass("tick-clones")), u.children("li").each(function(e) {
                p += l(this, e).outerWidth(!0)
            });

            function y(e, t) {
                u.animate({
                    left: "-=" + e
                }, t, "linear", function() {
                    r(u).appendTo(u), u.css("left", 0), s = r(u).outerWidth(!0), a = t / e * s, h && y(s, a)
                })
            }

            function b() {
                u.off(n), u.hover(w, E)
            }

            function w() {
                l("#" + d + " .er-controls > .pause").toggleClass(i), h = !1, u.stop()
            }

            function E() {
                l("#" + d + " .er-controls > .play").toggleClass(i), h = !0;
                var e = u.offset().left + r(u).outerWidth(!0) - f;
                y(e, a / s * e)
            }
            if (u.width(p), u.height(u.parent().height()), s = r(u).outerWidth(!0), a = s / e.speed * 1e3, y(s, a), e.pause && b(), e.buttons) {
                t.insertAfter(g), c.on("click.erPause", "#" + d + " .er-controls > .pause", function() {
                    if (!h) return !1;
                    l(this).toggleClass(i), u.off(n), h = !1
                }), c.on("click.erPlay", "#" + d + " .er-controls > .play", function() {
                    if (h) return !1;
                    l(this).toggleClass(i), h = !0, b();
                    var e = u.offset().left + r(u).outerWidth(!0) - f;
                    y(e, a / s * e)
                });
                var _ = !1;
                c.on("click.erNext", "#" + d + " .er-controls > .next", function() {
                    if (h) return l("#" + d + " .er-controls > .pause").toggleClass(i), void(h = !1);
                    if (_) return !1;
                    var e = r(u).outerWidth(!0);
                    _ = !0, u.stop(!0, !0).animate({
                        left: "-=" + e
                    }, o(e), "linear", function() {
                        r(u).appendTo(u), u.css("left", 0), _ = !1
                    })
                }), c.on("click.erPrev", "#" + d + " .er-controls > .prev", function() {
                    if (h) return l("#" + d + " .er-controls > .pause").toggleClass(i), void(h = !1);
                    if (_) return !1;
                    var e = u.children("li:last").outerWidth(!0);
                    u.css("left", "-" + e + "px"), u.children("li:last").prependTo(u), _ = !0, u.stop(!0, !0).animate({
                        left: "+=" + e
                    }, o(e), "linear", function() {
                        _ = !1
                    })
                })
            }
        })
    }
}, , , function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0),
        r = n.n(i),
        o = (n(2), n(7), n(8), n(10), n(11), n(12), function(e) {
            return "".concat(e.charAt(0).toLowerCase()).concat(e.replace(/[\W_]/g, "|").split("|").map(function(e) {
                return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
            }).join("").slice(1))
        });

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var a = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.routes = t
            }
            var t, n, i;
            return t = e, (n = [{
                key: "fire",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "init",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = "" !== e && this.routes[e] && "function" == typeof this.routes[e][t];
                    i && this.routes[e][t](n)
                }
            }, {
                key: "loadEvents",
                value: function() {
                    var e = this;
                    this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(o).forEach(function(t) {
                        e.fire(t), e.fire(t, "finalize")
                    }), this.fire("common", "finalize")
                }
            }]) && s(t.prototype, n), i && s(t, i), e
        }(),
        l = n(4),
        c = n.n(l),
        u = n(5),
        d = n.n(u),
        h = n(6),
        f = n.n(h),
        p = n(1),
        g = n.n(p),
        v = function() {
            g()({
                selector: ".search-popup-js",
                onOpen: function() {
                    $(".gslider form input[type=text]").focus()
                }
            })
        },
        m = function() {
            g()({
                selector: ".language-popup-js"
            })
        };
    var y = function() {
            var e = $(".moomin-nav"),
                t = 0;
            $(window).scroll(function(n) {
                var i = $(this).scrollTop();
                i > t ? i > 50 && e.removeClass("show-full") : e.addClass("show-full"), t = i
            }), $(document).on("click", "[data-sub-menu=toggle]", function(e) {
                e.preventDefault();
                var t = $(this).parent("a"),
                    n = t.siblings("[data-sub-menu=dropdown]");
                n.is(":visible") ? (t.removeClass("open"), t.addClass("closed"), n.hide()) : (t.addClass("open"), t.removeClass("closed"), n.show())
            }), $(document).on("click", "[data-search-toggle]", function(e) {
                var t, n, i;
                e.preventDefault(), $(this).parent().hasClass("active") ? $(this).parent().removeClass("active") : ($(this).parent().addClass("active"), $(this).next("form").find("[name=s]").focus(), t = ".moomin-nav__search", n = function(e) {
                    !$(e.target).closest(t).length && $(t).is(":visible") && ($(t).removeClass("active"), i())
                }, i = function() {
                    document.removeEventListener("click", n)
                }, document.addEventListener("click", n))
            })
        },
        b = function(e, t) {
            var n = e("[data-more-posts=container]");

            function i(e) {
                if (!e.ok) throw Error(e.statusText);
                return e
            }
            e(document).on("click", "[data-more-posts=link]", function(r) {
                r.preventDefault();
                var o = e("[data-more-posts=loader]"),
                    s = e(this).data("next-page"),
                    a = e(this).data("lang"),
                    l = e(this).data("cat"),
                    c = e(this).data("tag"),
                    u = new URL("".concat(window.location.protocol, "//").concat(window.location.host, "/wp-json/moomin/v1/load_more_posts?paged=").concat(s, "&lang=").concat(a, "&cat=").concat(l, "&tag=").concat(c));
                o.addClass("show");
                var d = e(this).closest(".container-fluid");
                e(this).remove(),
                    function(e, t) {
                        if (e) return fetch(e).then(i).then(function(e) {
                            return e.text()
                        }).catch(function(e) {
                            return console.log(e)
                        })
                    }(u).then(function(e) {
                        d.remove(), o.removeClass("show"), n.append(e), t.update()
                    })
            })
        },
        w = {
            
            finalize: function() {
                ! function() {
                    for (var e = document.querySelectorAll(".image-gallery .gallery"), t = [], n = {
                            trueOrder: !1,
                            columns: 3,
                            breakAt: {
                                940: 3,
                                767: 2,
                                320: 1
                            }
                        }, i = 0; i < e.length; i++) {
                        var r = "galleryinstance-" + i;
                        e[i].id = r, n.container = "#" + r, t.push(f()(n))
                    }
                    $(".gallery .gallery-item").each(function() {
                        var e = $(this).find("figcaption").text();
                        $(this).find("a").attr("data-glightbox", e.trim())
                    });
                    g()({
                        selector: ".gallery a",
                        autoplayVideos: !0
                    })
                }(), v(), m(), $(".rte").length > 0 && $(".rte p").find("img").closest("p").addClass("thumbnail-container"), y()
            }
        },
        E = {
            init: function() {
                console.log("home")
            },
            finalize: function() {}
        },
        _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        S = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        T = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        x = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        };

    function O(e) {
        return !0 === e || !1 === e
    }

    function C(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }

    function A(e) {
        return !(!e || !e.nodeType)
    }

    function k(e) {
        return "number" == typeof e
    }

    function L(e) {
        if (!e || "object" !== (void 0 === e ? "undefined" : _(e)) || e.nodeType || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return !t || t.hasOwnProperty("constructor") && t.constructor === Object
    }

    function N(e) {
        return "string" == typeof e
    }

    function I(e) {
        return e && k(e.length) && C(e.velocity)
    }

    function D(e) {
        return e && e !== window && k(e.length) && !N(e) && !C(e) && !A(e) && (0 === e.length || A(e[0]))
    }

    function P(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function M(e, t, n, i) {
        e && Object.defineProperty(e, t, {
            configurable: !i,
            writable: !i,
            value: n
        })
    }

    function H() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = !0,
            r = !1,
            o = void 0;
        try {
            for (var s, a = arguments[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                var l = s.value;
                if (void 0 !== l && l == l) return l
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !i && a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
    }
    var q = Date.now ? Date.now : function() {
        return (new Date).getTime()
    };

    function W(e, t) {
        e instanceof Element && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(\\s|$)", "gi"), " "))
    }
    var j = {};

    function V(e, t) {
        var n, i, r = e[0],
            o = e[1];
        N(r) ? C(o) ? j[r] && (n = j, i = r, !Object.prototype.propertyIsEnumerable.call(n, i)) ? console.warn("VelocityJS: Trying to override internal 'registerAction' callback", r) : !0 === t ? M(j, r, o) : j[r] = o : console.warn("VelocityJS: Trying to set 'registerAction' callback to an invalid value:", r, o) : console.warn("VelocityJS: Trying to set 'registerAction' name to an invalid value:", r)
    }
    V(["registerAction", V], !0);
    var R = 400,
        z = {
            fast: 200,
            normal: 400,
            slow: 600
        },
        F = {};

    function B(e) {
        var t = e[0],
            n = e[1];
        N(t) ? C(n) ? F[t] ? console.warn("VelocityJS: Trying to override 'registerEasing' callback", t) : F[t] = n : console.warn("VelocityJS: Trying to set 'registerEasing' callback to an invalid value:", t, n) : console.warn("VelocityJS: Trying to set 'registerEasing' name to an invalid value:", t)
    }

    function Y(e, t, n, i) {
        return t + e * (n - t)
    }

    function G(e) {
        return Math.min(Math.max(e, 0), 1)
    }

    function U(e, t) {
        return 1 - 3 * t + 3 * e
    }

    function X(e, t) {
        return 3 * t - 6 * e
    }

    function J(e) {
        return 3 * e
    }

    function K(e, t, n) {
        return ((U(t, n) * e + X(t, n)) * e + J(t)) * e
    }

    function Q(e, t, n) {
        return 3 * U(t, n) * e * e + 2 * X(t, n) * e + J(t)
    }

    function Z(e, t, n, i) {
        var r = 4,
            o = .001,
            s = 1e-7,
            a = 10,
            l = 11,
            c = 1 / (l - 1),
            u = "Float32Array" in window;
        if (4 === arguments.length) {
            for (var d = 0; d < 4; ++d)
                if ("number" != typeof arguments[d] || isNaN(arguments[d]) || !isFinite(arguments[d])) return;
            e = G(e), n = G(n);
            var h = u ? new Float32Array(l) : new Array(l),
                f = !1,
                p = "generateBezier(" + [e, t, n, i] + ")",
                g = function(r, o, s, a) {
                    return f || m(), 0 === r ? o : 1 === r ? s : e === t && n === i ? o + r * (s - o) : o + K(v(r), t, i) * (s - o)
                };
            return g.getControlPoints = function() {
                return [{
                    x: e,
                    y: t
                }, {
                    x: n,
                    y: i
                }]
            }, g.toString = function() {
                return p
            }, g
        }

        function v(t) {
            for (var i = l - 1, u = 0, d = 1; d !== i && h[d] <= t; ++d) u += c;
            var f = u + (t - h[--d]) / (h[d + 1] - h[d]) * c,
                p = Q(f, e, n);
            return p >= o ? function(t, i) {
                for (var o = 0; o < r; ++o) {
                    var s = Q(i, e, n);
                    if (0 === s) return i;
                    i -= (K(i, e, n) - t) / s
                }
                return i
            }(t, f) : 0 === p ? f : function(t, i, r) {
                var o = void 0,
                    l = void 0,
                    c = 0;
                do {
                    (o = K(l = i + (r - i) / 2, e, n) - t) > 0 ? r = l : i = l
                } while (Math.abs(o) > s && ++c < a);
                return l
            }(t, u, u + c)
        }

        function m() {
            f = !0, e === t && n === i || function() {
                for (var t = 0; t < l; ++t) h[t] = K(t * c, e, n)
            }()
        }
    }
    V(["registerEasing", B], !0), B(["linear", Y]), B(["swing", function(e, t, n) {
        return t + (.5 - Math.cos(e * Math.PI) / 2) * (n - t)
    }]), B(["spring", function(e, t, n) {
        return t + (1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)) * (n - t)
    }]);
    var ee = Z(.42, 0, 1, 1),
        te = Z(0, 0, .58, 1),
        ne = Z(.42, 0, .58, 1);

    function ie(e) {
        return -e.tension * e.x - e.friction * e.v
    }

    function re(e, t, n) {
        var i = {
            x: e.x + n.dx * t,
            v: e.v + n.dv * t,
            tension: e.tension,
            friction: e.friction
        };
        return {
            dx: i.v,
            dv: ie(i)
        }
    }

    function oe(e, t) {
        var n = {
                dx: e.v,
                dv: ie(e)
            },
            i = re(e, .5 * t, n),
            r = re(e, .5 * t, i),
            o = re(e, t, r),
            s = 1 / 6 * (n.dx + 2 * (i.dx + r.dx) + o.dx),
            a = 1 / 6 * (n.dv + 2 * (i.dv + r.dv) + o.dv);
        return e.x = e.x + s * t, e.v = e.v + a * t, e
    }
    B(["ease", Z(.25, .1, .25, 1)]), B(["easeIn", ee]), B(["ease-in", ee]), B(["easeOut", te]), B(["ease-out", te]), B(["easeInOut", ne]), B(["ease-in-out", ne]), B(["easeInSine", Z(.47, 0, .745, .715)]), B(["easeOutSine", Z(.39, .575, .565, 1)]), B(["easeInOutSine", Z(.445, .05, .55, .95)]), B(["easeInQuad", Z(.55, .085, .68, .53)]), B(["easeOutQuad", Z(.25, .46, .45, .94)]), B(["easeInOutQuad", Z(.455, .03, .515, .955)]), B(["easeInCubic", Z(.55, .055, .675, .19)]), B(["easeOutCubic", Z(.215, .61, .355, 1)]), B(["easeInOutCubic", Z(.645, .045, .355, 1)]), B(["easeInQuart", Z(.895, .03, .685, .22)]), B(["easeOutQuart", Z(.165, .84, .44, 1)]), B(["easeInOutQuart", Z(.77, 0, .175, 1)]), B(["easeInQuint", Z(.755, .05, .855, .06)]), B(["easeOutQuint", Z(.23, 1, .32, 1)]), B(["easeInOutQuint", Z(.86, 0, .07, 1)]), B(["easeInExpo", Z(.95, .05, .795, .035)]), B(["easeOutExpo", Z(.19, 1, .22, 1)]), B(["easeInOutExpo", Z(1, 0, 0, 1)]), B(["easeInCirc", Z(.6, .04, .98, .335)]), B(["easeOutCirc", Z(.075, .82, .165, 1)]), B(["easeInOutCirc", Z(.785, .135, .15, .86)]);
    var se = {};

    function ae(e, t) {
        return k(e) ? e : N(e) ? z[e.toLowerCase()] || parseFloat(e.replace("ms", "").replace("s", "000")) : null == t ? void 0 : ae(t)
    }

    function le(e) {
        if (O(e)) return e;
        null != e && console.warn("VelocityJS: Trying to set 'cache' to an invalid value:", e)
    }

    function ce(e) {
        if (C(e)) return e;
        null != e && console.warn("VelocityJS: Trying to set 'begin' to an invalid value:", e)
    }

    function ue(e, t) {
        if (C(e)) return e;
        null == e || t || console.warn("VelocityJS: Trying to set 'complete' to an invalid value:", e)
    }

    function de(e) {
        var t = ae(e);
        if (!isNaN(t)) return t;
        null != e && console.error("VelocityJS: Trying to set 'delay' to an invalid value:", e)
    }

    function he(e, t) {
        var n = ae(e);
        if (!isNaN(n) && n >= 0) return n;
        null == e || t || console.error("VelocityJS: Trying to set 'duration' to an invalid value:", e)
    }

    function fe(e, t, n) {
        if (N(e)) return F[e];
        if (C(e)) return e;
        if (Array.isArray(e)) {
            if (1 === e.length) return i = e[0], se[i] || (se[i] = function(e, t, n) {
                return 0 === e ? t : 1 === e ? n : t + Math.round(e * i) * (1 / i) * (n - t)
            });
            if (2 === e.length) return function e(t, n, i) {
                var r = {
                        x: -1,
                        v: 0,
                        tension: parseFloat(t) || 500,
                        friction: parseFloat(n) || 20
                    },
                    o = [0],
                    s = null != i,
                    a = 0,
                    l = void 0,
                    c = void 0;
                for (l = s ? (a = e(r.tension, r.friction)) / i * .016 : .016; c = oe(c || r, l), o.push(1 + c.x), a += 16, Math.abs(c.x) > 1e-4 && Math.abs(c.v) > 1e-4;);
                return s ? function(e, t, n) {
                    return 0 === e ? t : 1 === e ? n : t + o[Math.floor(e * (o.length - 1))] * (n - t)
                } : a
            }(e[0], e[1], t);
            if (4 === e.length) return Z.apply(null, e) || !1
        }
        var i;
        null == e || n || console.error("VelocityJS: Trying to set 'easing' to an invalid value:", e)
    }

    function pe(e) {
        if (!1 === e) return 0;
        var t = parseInt(e, 10);
        if (!isNaN(t) && t >= 0) return Math.min(t, 60);
        null != e && console.warn("VelocityJS: Trying to set 'fpsLimit' to an invalid value:", e)
    }

    function ge(e) {
        switch (e) {
            case !1:
                return 0;
            case !0:
                return !0;
            default:
                var t = parseInt(e, 10);
                if (!isNaN(t) && t >= 0) return t
        }
        null != e && console.warn("VelocityJS: Trying to set 'loop' to an invalid value:", e)
    }

    function ve(e, t) {
        if (!1 === e || N(e)) return e;
        null == e || t || console.warn("VelocityJS: Trying to set 'queue' to an invalid value:", e)
    }

    function me(e) {
        switch (e) {
            case !1:
                return 0;
            case !0:
                return !0;
            default:
                var t = parseInt(e, 10);
                if (!isNaN(t) && t >= 0) return t
        }
        null != e && console.warn("VelocityJS: Trying to set 'repeat' to an invalid value:", e)
    }

    function ye(e) {
        if (k(e)) return e;
        null != e && console.error("VelocityJS: Trying to set 'speed' to an invalid value:", e)
    }

    function be(e) {
        if (O(e)) return e;
        null != e && console.error("VelocityJS: Trying to set 'sync' to an invalid value:", e)
    }
    var we = void 0,
        Ee = void 0,
        _e = void 0,
        Se = void 0,
        Te = void 0,
        xe = void 0,
        Oe = void 0,
        Ce = void 0,
        Ae = void 0,
        ke = void 0,
        Le = void 0,
        Ne = void 0,
        Ie = void 0,
        De = void 0,
        Pe = void 0,
        Me = void 0,
        He = function() {
            function e() {
                S(this, e)
            }
            return T(e, null, [{
                key: "reset",
                value: function() {
                    we = !0, Ee = void 0, _e = void 0, Se = 0, Te = R, xe = fe("swing", R), Oe = 60, Ce = 0, ke = 980 / 60, Le = !0, Ne = !0, Ie = "", De = 0, Pe = 1, Me = !0
                }
            }, {
                key: "cache",
                get: function() {
                    return we
                },
                set: function(e) {
                    void 0 !== (e = le(e)) && (we = e)
                }
            }, {
                key: "begin",
                get: function() {
                    return Ee
                },
                set: function(e) {
                    void 0 !== (e = ce(e)) && (Ee = e)
                }
            }, {
                key: "complete",
                get: function() {
                    return _e
                },
                set: function(e) {
                    void 0 !== (e = ue(e)) && (_e = e)
                }
            }, {
                key: "delay",
                get: function() {
                    return Se
                },
                set: function(e) {
                    void 0 !== (e = de(e)) && (Se = e)
                }
            }, {
                key: "duration",
                get: function() {
                    return Te
                },
                set: function(e) {
                    void 0 !== (e = he(e)) && (Te = e)
                }
            }, {
                key: "easing",
                get: function() {
                    return xe
                },
                set: function(e) {
                    void 0 !== (e = fe(e, Te)) && (xe = e)
                }
            }, {
                key: "fpsLimit",
                get: function() {
                    return Oe
                },
                set: function(e) {
                    void 0 !== (e = pe(e)) && (Oe = e, ke = 980 / e)
                }
            }, {
                key: "loop",
                get: function() {
                    return Ce
                },
                set: function(e) {
                    void 0 !== (e = ge(e)) && (Ce = e)
                }
            }, {
                key: "mobileHA",
                get: function() {
                    return Ae
                },
                set: function(e) {
                    O(e) && (Ae = e)
                }
            }, {
                key: "minFrameTime",
                get: function() {
                    return ke
                }
            }, {
                key: "promise",
                get: function() {
                    return Le
                },
                set: function(e) {
                    void 0 !== (e = function(e) {
                        if (O(e)) return e;
                        null != e && console.warn("VelocityJS: Trying to set 'promise' to an invalid value:", e)
                    }(e)) && (Le = e)
                }
            }, {
                key: "promiseRejectEmpty",
                get: function() {
                    return Ne
                },
                set: function(e) {
                    void 0 !== (e = function(e) {
                        if (O(e)) return e;
                        null != e && console.warn("VelocityJS: Trying to set 'promiseRejectEmpty' to an invalid value:", e)
                    }(e)) && (Ne = e)
                }
            }, {
                key: "queue",
                get: function() {
                    return Ie
                },
                set: function(e) {
                    void 0 !== (e = ve(e)) && (Ie = e)
                }
            }, {
                key: "repeat",
                get: function() {
                    return De
                },
                set: function(e) {
                    void 0 !== (e = me(e)) && (De = e)
                }
            }, {
                key: "repeatAgain",
                get: function() {
                    return De
                }
            }, {
                key: "speed",
                get: function() {
                    return Pe
                },
                set: function(e) {
                    void 0 !== (e = ye(e)) && (Pe = e)
                }
            }, {
                key: "sync",
                get: function() {
                    return Me
                },
                set: function(e) {
                    void 0 !== (e = be(e)) && (Me = e)
                }
            }]), e
        }();
    Object.freeze(He), He.reset();
    var qe = [],
        We = {},
        je = new Set,
        Ve = [],
        Re = new Map,
        ze = "velocityData";

    function Fe(e) {
        var t = e[ze];
        if (t) return t;
        for (var n = e.ownerDocument.defaultView, i = 0, r = 0; r < Ve.length; r++) {
            var o = Ve[r];
            N(o) ? e instanceof n[o] && (i |= 1 << r) : e instanceof o && (i |= 1 << r)
        }
        var s = {
            types: i,
            count: 0,
            computedStyle: null,
            cache: {},
            queueList: {},
            lastAnimationList: {},
            lastFinishList: {},
            window: n
        };
        return Object.defineProperty(e, ze, {
            value: s
        }), s
    }
    var Be = window && window === window.window,
        Ye = Be && void 0 !== window.pageYOffset,
        Ge = {
            isClient: Be,
            isMobile: Be && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isGingerbread: Be && /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            prefixElement: Be && document.createElement("div"),
            windowScrollAnchor: Ye,
            scrollAnchor: Ye ? window : !Be || document.documentElement || document.body.parentNode || document.body,
            scrollPropertyLeft: Ye ? "pageXOffset" : "scrollLeft",
            scrollPropertyTop: Ye ? "pageYOffset" : "scrollTop",
            className: "velocity-animating",
            isTicking: !1,
            first: void 0,
            last: void 0,
            firstNew: void 0
        };

    function Ue(e) {
        var t = Ge.last;
        e._prev = t, e._next = void 0, t ? t._next = e : Ge.first = e, Ge.last = e, Ge.firstNew || (Ge.firstNew = e);
        var n = e.element;
        Fe(n).count++ || function(e, t) {
            e instanceof Element && (e.classList ? e.classList.add(t) : (W(e, t), e.className += (e.className.length ? " " : "") + t))
        }(n, Ge.className)
    }

    function Xe(e, t, n) {
        var i = Fe(e);
        if (!1 !== n && (i.lastAnimationList[n] = t), !1 === n) Ue(t);
        else {
            N(n) || (n = "");
            var r = i.queueList[n];
            if (r) {
                for (; r._next;) r = r._next;
                r._next = t, t._prev = r
            } else null === r ? i.queueList[n] = t : (i.queueList[n] = null, Ue(t))
        }
    }

    function $e(e) {
        var t = e._next,
            n = e._prev,
            i = null == e.queue ? e.options.queue : e.queue;
        (Ge.firstNew === e && (Ge.firstNew = t), Ge.first === e ? Ge.first = t : n && (n._next = t), Ge.last === e ? Ge.last = n : t && (t._prev = n), i) && (Fe(e.element) && (e._next = e._prev = void 0))
    }
    var Je = {};

    function Ke(e) {
        var t = e.options,
            n = H(e.queue, t.queue),
            i = H(e.loop, t.loop, He.loop),
            r = H(e.repeat, t.repeat, He.repeat),
            o = 8 & e._flags;
        if (o || !i && !r) {
            var s = e.element,
                a = Fe(s);
            if (--a.count || o || W(s, Ge.className), t && ++t._completed === t._total) {
                !o && t.complete && (! function(e) {
                    var t = e.complete || e.options.complete;
                    if (t) try {
                        var n = e.elements;
                        t.call(n, n, e)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                }(e), t.complete = null);
                var l = t._resolver;
                l && (l(e.elements), delete t._resolver)
            }!1 !== n && (o || (a.lastFinishList[n] = e.timeStart + H(e.duration, t.duration, He.duration)), function(e, t, n) {
                if (!1 !== t) {
                    N(t) || (t = "");
                    var i = Fe(e),
                        r = i.queueList[t];
                    r ? (i.queueList[t] = r._next || null, n || Ue(r)) : null === r && delete i.queueList[t]
                }
            }(s, n)), $e(e)
        } else r && !0 !== r ? e.repeat = r - 1 : i && !0 !== i && (e.loop = i - 1, e.repeat = H(e.repeatAgain, t.repeatAgain, He.repeatAgain)), i && (e._flags ^= 64), !1 !== n && (Fe(e.element).lastFinishList[n] = e.timeStart + H(e.duration, t.duration, He.duration)), e.timeStart = e.ellapsedTime = e.percentComplete = 0, e._flags &= -5
    }

    function Qe(e) {
        var t = e[0],
            n = e[1],
            i = e[2];
        if ((!N(t) || window[t] instanceof Object) && (N(t) || t instanceof Object))
            if (N(n))
                if (C(i)) {
                    var r = Ve.indexOf(t),
                        o = 3;
                    if (r < 0 && !N(t))
                        if (Re.has(t)) r = Ve.indexOf(Re.get(t));
                        else
                            for (var s in window)
                                if (window[s] === t) {
                                    (r = Ve.indexOf(s)) < 0 && (r = Ve.push(s) - 1, qe[r] = {}, Re.set(t, s));
                                    break
                                } if (r < 0 && (r = Ve.push(t) - 1, qe[r] = {}), qe[r][n] = i, N(e[o])) {
                        var a = e[o++],
                            l = We[a];
                        l || (l = We[a] = []), l.push(i)
                    }!1 === e[o] && je.add(n)
                } else console.warn("VelocityJS: Trying to set 'registerNormalization' callback to an invalid value:", n, i);
        else console.warn("VelocityJS: Trying to set 'registerNormalization' name to an invalid value:", n);
        else console.warn("VelocityJS: Trying to set 'registerNormalization' constructor to an invalid value:", t)
    }

    function Ze(e) {
        var t = e[0],
            n = e[1],
            i = Ve.indexOf(t);
        if (i < 0 && !N(t))
            if (Re.has(t)) i = Ve.indexOf(Re.get(t));
            else
                for (var r in window)
                    if (window[r] === t) {
                        i = Ve.indexOf(r);
                        break
                    } return i >= 0 && qe[i].hasOwnProperty(n)
    }

    function et(e, t) {
        for (var n = Fe(e), i = void 0, r = Ve.length - 1, o = n.types; !i && r >= 0; r--) o & 1 << r && (i = qe[r][t]);
        return i
    }

    function tt(e, t, n, i) {
        var r = je.has(t),
            o = !r && Fe(e);
        (r || o && o.cache[t] !== n) && (r || (o.cache[t] = n || void 0), (i = i || et(e, t)) && i(e, n), bn.debug >= 2 && console.info('Set "' + t + '": "' + n + '"', e))
    }
    V(["registerNormalization", Qe]), V(["hasNormalization", Ze]);
    var nt = {};

    function it(e) {
        var t = nt[e];
        return t || (nt[e] = e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        }))
    }
    var rt = /#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,
        ot = /#([a-f\d])([a-f\d])([a-f\d])/gi,
        st = /(rgba?\(\s*)?(\b[a-z]+\b)/g,
        at = /rgb(a?)\(([^\)]+)\)/gi,
        lt = /\s+/g,
        ct = {};

    function ut(e, t, n, i) {
        return "rgba(" + parseInt(t, 16) + "," + parseInt(n, 16) + "," + parseInt(i, 16) + ",1)"
    }

    function dt(e) {
        return e.replace(rt, ut).replace(ot, function(e, t, n, i) {
            return ut(0, t + t, n + n, i + i)
        }).replace(st, function(e, t, n) {
            return ct[n] ? (t || "rgba(") + ct[n] + (t ? "" : ",1)") : e
        }).replace(at, function(e, t, n) {
            return "rgba(" + n.replace(lt, "") + (t ? "" : ",1") + ")"
        })
    }

    function ht(e, t, n) {
        if ("border-box" === gt(e, "boxSizing").toString().toLowerCase() === n) {
            var i = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                r = ["padding" + i[0], "padding" + i[1], "border" + i[0] + "Width", "border" + i[1] + "Width"],
                o = 0,
                s = !0,
                a = !1,
                l = void 0;
            try {
                for (var c, u = r[Symbol.iterator](); !(s = (c = u.next()).done); s = !0) {
                    var d = c.value,
                        h = parseFloat(gt(e, d));
                    isNaN(h) || (o += h)
                }
            } catch (e) {
                a = !0, l = e
            } finally {
                try {
                    !s && u.return && u.return()
                } finally {
                    if (a) throw l
                }
            }
            return n ? -o : o
        }
        return 0
    }

    function ft(e, t) {
        return e.getBoundingClientRect()[t] + ht(e, t, !0) + "px"
    }

    function pt(e, t) {
        var n = Fe(e),
            i = n.computedStyle ? n.computedStyle : n.window.getComputedStyle(e, null),
            r = 0;
        if (n.computedStyle || (n.computedStyle = i), "none" === i.display) switch (t) {
            case "width":
            case "height":
                return tt(e, "display", "auto"), r = ft(e, t), tt(e, "display", "none"), String(r)
        }
        if ((r = i[t]) || (r = e.style[t]), "auto" === r) switch (t) {
            case "width":
            case "height":
                r = ft(e, t);
                break;
            case "top":
            case "left":
            case "right":
            case "bottom":
                var o = gt(e, "position");
                if ("fixed" === o || "absolute" === o) {
                    r = e.getBoundingClientRect[t] + "px";
                    break
                }
            default:
                r = "0px"
        }
        return r ? String(r) : ""
    }

    function gt(e, t, n, i) {
        var r = Fe(e),
            o = void 0;
        return je.has(t) && (i = !0), !i && r && null != r.cache[t] ? o = r.cache[t] : (n = n || et(e, t)) && (o = n(e), r && (r.cache[t] = o)), bn.debug >= 2 && console.info('Get "' + t + '": "' + o + '"', e), o
    }
    var vt = /^#([A-f\d]{3}){1,2}$/i,
        mt = {
            function: function(e, t, n, i, r, o) {
                return e.call(t, i, n.length, r)
            },
            number: function(e, t, n, i, r, o) {
                return String(e) + function(e) {
                    for (var t in We)
                        if (We[t].includes(e)) return t;
                    return ""
                }(o.fn)
            },
            string: function(e, t, n, i, r, o) {
                return dt(e)
            },
            undefined: function(e, t, n, i, r, o) {
                return dt(gt(t, r, o.fn) || "")
            }
        };

    function yt(e, t) {
        var n = e.tweens = Object.create(null),
            i = e.elements,
            r = e.element,
            o = i.indexOf(r),
            s = Fe(r),
            a = H(e.queue, e.options.queue),
            l = H(e.options.duration, He.duration);
        for (var c in t)
            if (t.hasOwnProperty(c)) {
                var u = it(c),
                    d = et(r, u),
                    h = t[c];
                if (!d && "tween" !== u) {
                    bn.debug && console.log('Skipping "' + c + '" due to a lack of browser support.');
                    continue
                }
                if (null == h) {
                    bn.debug && console.log('Skipping "' + c + '" due to no value supplied.');
                    continue
                }
                var f = n[u] = {},
                    p = void 0,
                    g = void 0;
                if (f.fn = d, C(h) && (h = h.call(r, o, i.length, i)), Array.isArray(h)) {
                    var v = h[1],
                        m = h[2];
                    p = h[0], N(v) && (/^[\d-]/.test(v) || vt.test(v)) || C(v) || k(v) ? g = v : N(v) && F[v] || Array.isArray(v) ? (f.easing = fe(v, l), g = m) : g = v || m
                } else p = h;
                f.end = mt[void 0 === p ? "undefined" : _(p)](p, r, i, o, u, f), null == g && !1 !== a && void 0 !== s.queueList[a] || (f.start = mt[void 0 === g ? "undefined" : _(g)](g, r, i, o, u, f), _t(u, f, l))
            }
    }
    var bt = /((?:[+\-*/]=)?(?:[+-]?\d*\.\d+|[+-]?\d+)[a-z%]*|(?:.(?!$|[+-]?\d|[+\-*/]=[+-]?\d))+.|.)/g,
        wt = /^([+\-*/]=)?([+-]?\d*\.\d+|[+-]?\d+)(.*)$/;

    function Et(e, t) {
        for (var n = e.length, i = [], r = [], o = void 0, s = 0; s < n; s++) {
            if (!N(e[s])) return;
            "" === e[s] ? i[s] = [""] : i[s] = P(e[s].match(bt)), r[s] = 0, o = o || i[s].length > 1
        }
        for (var a = [], l = a.pattern = [], c = function(e) {
                if (N(l[l.length - 1])) l[l.length - 1] += e;
                else if (e) {
                    l.push(e);
                    for (var t = 0; t < n; t++) a[t].push(null)
                }
            }, u = function() {
                if (!(o || l.length > 1)) {
                    for (var i = "display" === t, r = "visibility" === t, s = 0; s < n; s++) {
                        var c = e[s];
                        a[s][0] = c, a[s].easing = fe(i && "none" === c || r && "hidden" === c || !i && !r ? "at-end" : "at-start", 400)
                    }
                    return l[0] = !1, a
                }
            }, d = !0, h = 0; h < n; h++) a[h] = [];
        for (; d;) {
            for (var f = [], p = [], g = void 0, v = !1, m = !1, y = 0; y < n; y++) {
                var b = r[y]++,
                    w = i[y][b];
                if (!w) {
                    if (y) return;
                    for (; y < n; y++) {
                        var E = r[y]++;
                        if (i[y][E]) return u()
                    }
                    d = !1;
                    break
                }
                var _ = w.match(wt);
                if (_) {
                    if (g) return u();
                    var S = parseFloat(_[2]),
                        T = _[3],
                        x = _[1] ? _[1][0] + T : void 0,
                        O = x || T;
                    S && !p.includes(O) && p.push(O), T || (S ? m = !0 : v = !0), f[y] = x ? [S, O, !0] : [S, O]
                } else {
                    if (f.length) return u();
                    if (g) {
                        if (g !== w) return u()
                    } else g = w
                }
            }
            if (g) c(g);
            else if (p.length)
                if (2 === p.length && v && !m && p.splice(p[0] ? 1 : 0, 1), 1 === p.length) {
                    var C = p[0];
                    switch (C[0]) {
                        case "+":
                        case "-":
                        case "*":
                        case "/":
                            return void(t && console.error('Velocity: The first property must not contain a relative function "' + t + '":', e))
                    }
                    l.push(!1);
                    for (var A = 0; A < n; A++) a[A].push(f[A][0]);
                    c(C)
                } else {
                    c("calc(");
                    for (var k = l.length - 1, L = 0; L < p.length; L++) {
                        var I = p[L],
                            D = I[0],
                            M = "*" === D || "/" === D,
                            H = M || "+" === D || "-" === D;
                        M && (l[k] += "(", c(")")), L && c(" " + (H ? D : "+") + " "), l.push(!1);
                        for (var q = 0; q < n; q++) {
                            var W = f[q],
                                j = W[1] === I ? W[0] : 3 === W.length ? a[q - 1][a[q - 1].length - 1] : M ? 1 : 0;
                            a[q].push(j)
                        }
                        c(H ? I.substring(1) : I)
                    }
                    c(")")
                }
        }
        for (var V = 0, R = 0; V < l.length; V++) {
            var z = l[V];
            N(z) ? R && z.indexOf(",") >= 0 ? R++ : z.indexOf("rgb") >= 0 && (R = 1) : R && (R < 4 ? l[V] = !0 : R = 0)
        }
        return a
    }

    function _t(e, t, n, i) {
        var r = t.start,
            o = t.end;
        if (N(o) && N(r)) {
            var s = Et([r, o], e);
            if (!s && i) {
                var a = r.match(/\d\.?\d*/g) || ["0"],
                    l = a.length,
                    c = 0;
                s = Et([o.replace(/\d+\.?\d*/g, function() {
                    return a[c++ % l]
                }), o], e)
            }
            if (s) switch (bn.debug && console.log("Velocity: Sequence found:", s), s[0].percent = 0, s[1].percent = 1, t.sequence = s, t.easing) {
                case F["at-start"]:
                case F.during:
                case F["at-end"]:
                    s[0].easing = s[1].easing = t.easing
            }
        }
    }

    function St(e) {
        if (Ge.firstNew === e && (Ge.firstNew = e._next), !(1 & e._flags)) {
            var t = e.element,
                n = e.tweens;
            H(e.options.duration, He.duration);
            for (var i in n) {
                var r = n[i];
                if (null == r.start) {
                    var o = gt(e.element, i);
                    N(o) ? (r.start = dt(o), _t(i, r, 0, !0)) : Array.isArray(o) || console.warn("bad type", r, i, o)
                }
                bn.debug && console.log('tweensContainer "' + i + '": ' + JSON.stringify(r), t)
            }
            e._flags |= 1
        }
    }

    function Tt(e) {
        var t = e.begin || e.options.begin;
        if (t) try {
            var n = e.elements;
            t.call(n, n, e)
        } catch (e) {
            setTimeout(function() {
                throw e
            }, 1)
        }
    }

    function xt(e) {
        var t = e.progress || e.options.progress;
        if (t) try {
            var n = e.elements,
                i = e.percentComplete,
                r = e.options,
                o = e.tween;
            t.call(n, n, i, Math.max(0, e.timeStart + (null != e.duration ? e.duration : null != r.duration ? r.duration : He.duration) - Mt), void 0 !== o ? o : String(100 * i), e)
        } catch (e) {
            setTimeout(function() {
                throw e
            }, 1)
        }
    }

    function Ot() {
        var e = !0,
            t = !1,
            n = void 0;
        try {
            for (var i, r = kt[Symbol.iterator](); !(e = (i = r.next()).done); e = !0) {
                xt(i.value)
            }
        } catch (e) {
            t = !0, n = e
        } finally {
            try {
                !e && r.return && r.return()
            } finally {
                if (t) throw n
            }
        }
        kt.clear();
        var o = !0,
            s = !1,
            a = void 0;
        try {
            for (var l, c = At[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                Ke(l.value)
            }
        } catch (e) {
            s = !0, a = e
        } finally {
            try {
                !o && c.return && c.return()
            } finally {
                if (s) throw a
            }
        }
        At.clear()
    }
    var Ct = 1e3 / 60,
        At = new Set,
        kt = new Set,
        Lt = function() {
            var e = window.performance || {};
            if ("function" != typeof e.now) {
                var t = e.timing && e.timing.navigationStart ? e.timing.navigationStart : q();
                e.now = function() {
                    return q() - t
                }
            }
            return e
        }(),
        Nt = function(e) {
            return setTimeout(e, Math.max(0, Ct - (Lt.now() - Mt)))
        },
        It = window.requestAnimationFrame || Nt,
        Dt = void 0,
        Pt = void 0,
        Mt = 0;
    try {
        (Pt = new Worker(URL.createObjectURL(new Blob(["(" + function() {
            var e = this,
                t = void 0;
            this.onmessage = function(n) {
                switch (n.data) {
                    case !0:
                        t || (t = setInterval(function() {
                            e.postMessage(!0)
                        }, 1e3 / 30));
                        break;
                    case !1:
                        t && (clearInterval(t), t = 0);
                        break;
                    default:
                        e.postMessage(n.data)
                }
            }
        } + ")()"])))).onmessage = function(e) {
            !0 === e.data ? Ht() : Ot()
        }, Ge.isMobile || void 0 === document.hidden || document.addEventListener("visibilitychange", function() {
            Pt.postMessage(Ge.isTicking && document.hidden)
        })
    } catch (e) {}

    function Ht(e) {
        if (!Dt) {
            if (Dt = !0, !1 !== e) {
                var t = Lt.now(),
                    n = Mt ? t - Mt : Ct,
                    i = He.speed,
                    r = He.easing,
                    o = He.duration,
                    s = void 0,
                    a = void 0;
                if (n >= He.minFrameTime || !Mt) {
                    for (Mt = t; Ge.firstNew;) St(Ge.firstNew);
                    for (s = Ge.first; s && s !== Ge.firstNew; s = s._next) {
                        var l = s.element,
                            c = Fe(l);
                        if (l.parentNode && c) {
                            var u = s.options,
                                d = s._flags,
                                h = s.timeStart;
                            if (!h) {
                                var f = null != s.queue ? s.queue : u.queue;
                                h = t - n, !1 !== f && (h = Math.max(h, c.lastFinishList[f] || 0)), s.timeStart = h
                            }
                            16 & d ? s.timeStart += n : 2 & d || (s._flags |= 2, u._ready++)
                        } else $e(s)
                    }
                    for (s = Ge.first; s && s !== Ge.firstNew; s = a) {
                        var p = s._flags;
                        if (a = s._next, 2 & p && !(16 & p)) {
                            var g = s.options;
                            if (32 & p && g._ready < g._total) s.timeStart += n;
                            else {
                                var v = null != s.speed ? s.speed : null != g.speed ? g.speed : i,
                                    m = s.timeStart;
                                if (!(4 & p)) {
                                    var y = null != s.delay ? s.delay : g.delay;
                                    if (y) {
                                        if (m + y / v > t) continue;
                                        s.timeStart = m += y / (y > 0 ? v : 1)
                                    }
                                    s._flags |= 4, 0 == g._started++ && (g._first = s, g.begin && (Tt(s), g.begin = void 0))
                                }
                                1 !== v && (s.timeStart = m += Math.min(n, t - m) * (1 - v));
                                var b = null != s.easing ? s.easing : null != g.easing ? g.easing : r,
                                    w = s.ellapsedTime = t - m,
                                    E = null != s.duration ? s.duration : null != g.duration ? g.duration : o,
                                    _ = s.percentComplete = bn.mock ? 1 : Math.min(w / E, 1),
                                    S = s.tweens,
                                    T = 64 & p;
                                for (var x in (s.progress || g._first === s && g.progress) && kt.add(s), 1 === _ && At.add(s), S) {
                                    var O = S[x],
                                        C = O.sequence,
                                        A = C.pattern,
                                        k = "",
                                        L = 0;
                                    if (A) {
                                        for (var N = (O.easing || b)(_, 0, 1, x), I = 0, D = 0; D < C.length - 1; D++) C[D].percent < N && (I = D);
                                        for (var P = C[I], M = C[I + 1] || P, H = (_ - P.percent) / (M.percent - P.percent), q = M.easing || Y; L < A.length; L++) {
                                            var W = P[L];
                                            if (null == W) k += A[L];
                                            else {
                                                var j = M[L];
                                                if (W === j) k += W;
                                                else {
                                                    var V = q(T ? 1 - H : H, W, j, x);
                                                    k += !0 === A[L] ? Math.round(V) : V
                                                }
                                            }
                                        }
                                        "tween" !== x ? (1 === _ && k.startsWith("calc(0 + ") && (k = k.replace(/^calc\(0[^\d]* \+ ([^\(\)]+)\)$/, "$1")), tt(s.element, x, k, O.fn)) : s.tween = k
                                    } else console.warn("VelocityJS: Missing pattern:", x, JSON.stringify(O[x])), delete S[x]
                                }
                            }
                        }
                    }(kt.size || At.size) && (document.hidden ? Pt ? Pt.postMessage("") : setTimeout(Ot, 1) : Ot())
                }
            }
            Ge.first ? (Ge.isTicking = !0, document.hidden ? Pt ? !1 === e && Pt.postMessage(!0) : Nt(Ht) : It(Ht)) : (Ge.isTicking = !1, Mt = 0, document.hidden && Pt && Pt.postMessage(!1)), Dt = !1
        }
    }

    function qt(e, t, n) {
        if (St(e), void 0 === t || t === H(e.queue, e.options.queue, n)) {
            if (!(4 & e._flags)) {
                var i = e.options;
                0 == i._started++ && (i._first = e, i.begin && (Tt(e), i.begin = void 0)), e._flags |= 4
            }
            for (var r in e.tweens) {
                var o = e.tweens[r],
                    s = o.sequence,
                    a = s.pattern,
                    l = "",
                    c = 0;
                if (a)
                    for (var u = s[s.length - 1]; c < a.length; c++) {
                        var d = u[c];
                        l += null == d ? a[c] : d
                    }
                tt(e.element, r, l, o.fn)
            }
            Ke(e)
        }
    }
    V(["finish", function(e, t, n) {
        var i = ve(e[0], !0),
            r = He.queue,
            o = !0 === e[void 0 === i ? 0 : 1];
        if (I(t) && t.velocity.animations) {
            var s = !0,
                a = !1,
                l = void 0;
            try {
                for (var c, u = t.velocity.animations[Symbol.iterator](); !(s = (c = u.next()).done); s = !0) qt(c.value, i, r)
            } catch (e) {
                a = !0, l = e
            } finally {
                try {
                    !s && u.return && u.return()
                } finally {
                    if (a) throw l
                }
            }
        } else {
            for (; Ge.firstNew;) St(Ge.firstNew);
            for (var d, h = Ge.first; h && (o || h !== Ge.firstNew); h = d || Ge.firstNew) d = h._next, t && !t.includes(h.element) || qt(h, i, r)
        }
        n && (I(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t))
    }], !0);
    var Wt = {
        isExpanded: 1,
        isReady: 2,
        isStarted: 4,
        isStopped: 8,
        isPaused: 16,
        isSync: 32,
        isReverse: 64
    };

    function jt(e, t, n, i) {
        void 0 !== t && t !== H(e.queue, e.options.queue, n) || (i ? e._flags |= 16 : e._flags &= -17)
    }

    function Vt(e, t, n, i) {
        var r = 0 === i.indexOf("pause"),
            o = "false" !== (i.indexOf(".") >= 0 ? i.replace(/^.*\./, "") : void 0) && ve(e[0]),
            s = He.queue;
        if (I(t) && t.velocity.animations) {
            var a = !0,
                l = !1,
                c = void 0;
            try {
                for (var u, d = t.velocity.animations[Symbol.iterator](); !(a = (u = d.next()).done); a = !0) {
                    jt(u.value, o, s, r)
                }
            } catch (e) {
                l = !0, c = e
            } finally {
                try {
                    !a && d.return && d.return()
                } finally {
                    if (l) throw c
                }
            }
        } else
            for (var h = Ge.first; h;) t && !t.includes(h.element) || jt(h, o, s, r), h = h._next;
        n && (I(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t))
    }

    function Rt(e, t, n, i) {
        var r = e[0],
            o = e[1];
        if (!r) return console.warn("VelocityJS: Cannot access a non-existant property!"), null;
        if (void 0 === o && !L(r)) {
            if (Array.isArray(r)) {
                if (1 === t.length) {
                    var s = {},
                        a = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var u, d = r[Symbol.iterator](); !(a = (u = d.next()).done); a = !0) {
                            var h = u.value;
                            s[h] = dt(gt(t[0], h))
                        }
                    } catch (e) {
                        l = !0, c = e
                    } finally {
                        try {
                            !a && d.return && d.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                    return s
                }
                var f = [],
                    p = !0,
                    g = !1,
                    v = void 0;
                try {
                    for (var m, y = t[Symbol.iterator](); !(p = (m = y.next()).done); p = !0) {
                        var b = m.value,
                            w = {},
                            E = !0,
                            S = !1,
                            T = void 0;
                        try {
                            for (var x, O = r[Symbol.iterator](); !(E = (x = O.next()).done); E = !0) {
                                var C = x.value;
                                w[C] = dt(gt(b, C))
                            }
                        } catch (e) {
                            S = !0, T = e
                        } finally {
                            try {
                                !E && O.return && O.return()
                            } finally {
                                if (S) throw T
                            }
                        }
                        f.push(w)
                    }
                } catch (e) {
                    g = !0, v = e
                } finally {
                    try {
                        !p && y.return && y.return()
                    } finally {
                        if (g) throw v
                    }
                }
                return f
            }
            if (1 === t.length) return dt(gt(t[0], r));
            var A = [],
                D = !0,
                P = !1,
                M = void 0;
            try {
                for (var H, q = t[Symbol.iterator](); !(D = (H = q.next()).done); D = !0) {
                    var W = H.value;
                    A.push(dt(gt(W, r)))
                }
            } catch (e) {
                P = !0, M = e
            } finally {
                try {
                    !D && q.return && q.return()
                } finally {
                    if (P) throw M
                }
            }
            return A
        }
        var j = [];
        if (L(r)) {
            for (var V in r)
                if (r.hasOwnProperty(V)) {
                    var R = !0,
                        z = !1,
                        F = void 0;
                    try {
                        for (var B, Y = t[Symbol.iterator](); !(R = (B = Y.next()).done); R = !0) {
                            var G = B.value,
                                U = r[V];
                            N(U) || k(U) ? tt(G, V, r[V]) : (j.push('Cannot set a property "' + V + '" to an unknown type: ' + (void 0 === U ? "undefined" : _(U))), console.warn('VelocityJS: Cannot set a property "' + V + '" to an unknown type:', U))
                        }
                    } catch (e) {
                        z = !0, F = e
                    } finally {
                        try {
                            !R && Y.return && Y.return()
                        } finally {
                            if (z) throw F
                        }
                    }
                }
        } else if (N(o) || k(o)) {
            var X = !0,
                $ = !1,
                J = void 0;
            try {
                for (var K, Q = t[Symbol.iterator](); !(X = (K = Q.next()).done); X = !0) {
                    tt(K.value, r, String(o))
                }
            } catch (e) {
                $ = !0, J = e
            } finally {
                try {
                    !X && Q.return && Q.return()
                } finally {
                    if ($) throw J
                }
            }
        } else j.push('Cannot set a property "' + r + '" to an unknown type: ' + (void 0 === o ? "undefined" : _(o))), console.warn('VelocityJS: Cannot set a property "' + r + '" to an unknown type:', o);
        n && (j.length ? n._rejecter(j.join(", ")) : I(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t))
    }

    function zt(e, t, n) {
        St(e), void 0 !== t && t !== H(e.queue, e.options.queue, n) || (e._flags |= 8, Ke(e))
    }
    V(["option", function(e, t, n, i) {
        var r = e[0],
            o = i.indexOf(".") >= 0 ? i.replace(/^.*\./, "") : void 0,
            s = "false" !== o && ve(o, !0),
            a = void 0,
            l = e[1];
        if (!r) return console.warn("VelocityJS: Cannot access a non-existant key!"), null;
        if (I(t) && t.velocity.animations) a = t.velocity.animations;
        else {
            a = [];
            for (var c = Ge.first; c; c = c._next) t.indexOf(c.element) >= 0 && H(c.queue, c.options.queue) === s && a.push(c);
            if (t.length > 1 && a.length > 1) {
                for (var u = 1, d = a[0].options; u < a.length;)
                    if (a[u++].options !== d) {
                        d = null;
                        break
                    } d && (a = [a[0]])
            }
        }
        if (void 0 === l) {
            var h = [],
                f = Wt[r],
                p = !0,
                g = !1,
                v = void 0;
            try {
                for (var m, y = a[Symbol.iterator](); !(p = (m = y.next()).done); p = !0) {
                    var b = m.value;
                    void 0 === f ? h.push(H(b[r], b.options[r])) : h.push(0 == (b._flags & f))
                }
            } catch (e) {
                g = !0, v = e
            } finally {
                try {
                    !p && y.return && y.return()
                } finally {
                    if (g) throw v
                }
            }
            return 1 === t.length && 1 === a.length ? h[0] : h
        }
        var w = void 0;
        switch (r) {
            case "cache":
                l = le(l);
                break;
            case "begin":
                l = ce(l);
                break;
            case "complete":
                l = ue(l);
                break;
            case "delay":
                l = de(l);
                break;
            case "duration":
                l = he(l);
                break;
            case "fpsLimit":
                l = pe(l);
                break;
            case "loop":
                l = ge(l);
                break;
            case "percentComplete":
                w = !0, l = parseFloat(l);
                break;
            case "repeat":
            case "repeatAgain":
                l = me(l);
                break;
            default:
                if ("_" !== r[0]) {
                    var E = parseFloat(l);
                    l === String(E) && (l = E);
                    break
                }
            case "queue":
            case "promise":
            case "promiseRejectEmpty":
            case "easing":
            case "started":
                return void console.warn("VelocityJS: Trying to set a read-only key:", r)
        }
        if (void 0 === l || l != l) return console.warn("VelocityJS: Trying to set an invalid value:" + r + "=" + l + " (" + e[1] + ")"), null;
        var _ = !0,
            S = !1,
            T = void 0;
        try {
            for (var x, O = a[Symbol.iterator](); !(_ = (x = O.next()).done); _ = !0) {
                var C = x.value;
                w ? C.timeStart = Mt - H(C.duration, C.options.duration, He.duration) * l : C[r] = l
            }
        } catch (e) {
            S = !0, T = e
        } finally {
            try {
                !_ && O.return && O.return()
            } finally {
                if (S) throw T
            }
        }
        n && (I(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t))
    }], !0), V(["pause", Vt], !0), V(["resume", Vt], !0), V(["property", Rt], !0), V(["reverse", function(e, t, n, i) {
        throw new SyntaxError("VelocityJS: The 'reverse' action is built in and private.")
    }], !0), V(["stop", function(e, t, n, i) {
        var r = ve(e[0], !0),
            o = He.queue,
            s = !0 === e[void 0 === r ? 0 : 1];
        if (I(t) && t.velocity.animations) {
            var a = !0,
                l = !1,
                c = void 0;
            try {
                for (var u, d = t.velocity.animations[Symbol.iterator](); !(a = (u = d.next()).done); a = !0) zt(u.value, r, o)
            } catch (e) {
                l = !0, c = e
            } finally {
                try {
                    !a && d.return && d.return()
                } finally {
                    if (l) throw c
                }
            }
        } else {
            for (; Ge.firstNew;) St(Ge.firstNew);
            for (var h, f = Ge.first; f && (s || f !== Ge.firstNew); f = h || Ge.firstNew) h = f._next, t && !t.includes(f.element) || zt(f, r, o)
        }
        n && (I(t) && t.velocity.animations && t.then ? t.then(n._resolver) : n._resolver(t))
    }], !0), V(["style", Rt], !0), V(["tween", function(e, t, n, i) {
        var r = void 0;
        if (t) {
            if (1 !== t.length) throw new Error("VelocityJS: Cannot tween more than one element!")
        } else {
            if (!e.length) return console.info('Velocity(<element>, "tween", percentComplete, property, end | [end, <easing>, <start>], <easing>) => value\nVelocity(<element>, "tween", percentComplete, {property: end | [end, <easing>, <start>], ...}, <easing>) => {property: value, ...}'), null;
            t = [document.body], r = !0
        }
        var o = e[0],
            s = {
                elements: t,
                element: t[0],
                queue: !1,
                options: {
                    duration: 1e3
                },
                tweens: null
            },
            a = {},
            l = e[1],
            c = void 0,
            u = void 0,
            d = e[2],
            h = 0;
        if (N(e[1]) ? Je && Je[e[1]] ? (u = Je[e[1]], l = {}, d = e[2]) : (c = !0, l = x({}, e[1], e[2]), d = e[3]) : Array.isArray(e[1]) && (c = !0, l = {
                tween: e[1]
            }, d = e[2]), !k(o) || o < 0 || o > 1) throw new Error("VelocityJS: Must tween a percentage from 0 to 1!");
        if (!L(l)) throw new Error("VelocityJS: Cannot tween an invalid property!");
        if (r)
            for (var f in l)
                if (l.hasOwnProperty(f) && (!Array.isArray(l[f]) || l[f].length < 2)) throw new Error("VelocityJS: When not supplying an element you must force-feed values: " + f);
        var p = fe(H(d, He.easing), R);
        for (var g in u ? xn(s, u) : yt(s, l), s.tweens) {
            var v = s.tweens[g],
                m = v.sequence,
                y = m.pattern,
                b = "",
                w = 0;
            if (h++, y) {
                for (var E = (v.easing || p)(o, 0, 1, g), _ = 0, S = 0; S < m.length - 1; S++) m[S].percent < E && (_ = S);
                for (var T = m[_], O = m[_ + 1] || T, C = (o - T.percent) / (O.percent - T.percent), A = O.easing || Y; w < y.length; w++) {
                    var I = T[w];
                    if (null == I) b += y[w];
                    else {
                        var D = O[w];
                        if (I === D) b += I;
                        else {
                            var P = A(C, I, D, g);
                            b += !0 === y[w] ? Math.round(P) : P
                        }
                    }
                }
                a[g] = b
            }
        }
        if (c && 1 === h)
            for (var M in a)
                if (a.hasOwnProperty(M)) return a[M];
        return a
    }], !0);
    var Ft, Bt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgrey: 11119017,
        darkgreen: 25600,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        grey: 8421504,
        green: 32768,
        greenyellow: 11403055,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgrey: 13882323,
        lightgreen: 9498256,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    for (var Yt in Bt)
        if (Bt.hasOwnProperty(Yt)) {
            var Gt = Bt[Yt];
            ct[Yt] = Math.floor(Gt / 65536) + "," + Math.floor(Gt / 256 % 256) + "," + Gt % 256
        }
    function Ut(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Xt(e) {
        return 1 - Ut(1 - e)
    }
    Ft = 1.7, B(["easeInBack", function(e, t, n) {
            return 0 === e ? t : 1 === e ? n : Math.pow(e, 2) * ((Ft + 1) * e - Ft) * (n - t)
        }]),
        function(e, t) {
            B([e, function(e, n, i) {
                return 0 === e ? n : 1 === e ? i : (Math.pow(--e, 2) * ((t + 1) * e + t) + 1) * (i - n)
            }])
        }("easeOutBack", 1.7),
        function(e, t) {
            t *= 1.525, B([e, function(e, n, i) {
                return 0 === e ? n : 1 === e ? i : .5 * ((e *= 2) < 1 ? Math.pow(e, 2) * ((t + 1) * e - t) : Math.pow(e - 2, 2) * ((t + 1) * (e - 2) + t) + 2) * (i - n)
            }])
        }("easeInOutBack", 1.7), B(["easeInBounce", function(e, t, n) {
            return 0 === e ? t : 1 === e ? n : Xt(e) * (n - t)
        }]), B(["easeOutBounce", function(e, t, n) {
            return 0 === e ? t : 1 === e ? n : Ut(e) * (n - t)
        }]), B(["easeInOutBounce", function(e, t, n) {
            return 0 === e ? t : 1 === e ? n : (e < .5 ? .5 * Xt(2 * e) : .5 * Ut(2 * e - 1) + .5) * (n - t)
        }]);
    var $t = 2 * Math.PI;

    function Jt(e, t) {
        return function(n, i) {
            if (void 0 === i) return ht(n, e, t) + "px";
            tt(n, e, parseFloat(i) - ht(n, e, t) + "px")
        }
    }! function(e, t, n) {
        B([e, function(e, i, r) {
            return 0 === e ? i : 1 === e ? r : -t * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - n / $t * Math.asin(1 / t)) * $t / n) * (r - i)
        }])
    }("easeInElastic", 1, .3),
    function(e, t, n) {
        B([e, function(e, i, r) {
            return 0 === e ? i : 1 === e ? r : (t * Math.pow(2, -10 * e) * Math.sin((e - n / $t * Math.asin(1 / t)) * $t / n) + 1) * (r - i)
        }])
    }("easeOutElastic", 1, .3),
    function(e, t, n) {
        B([e, function(e, i, r) {
            if (0 === e) return i;
            if (1 === e) return r;
            var o = n / $t * Math.asin(1 / t);
            return ((e = 2 * e - 1) < 0 ? t * Math.pow(2, 10 * e) * Math.sin((e - o) * $t / n) * -.5 : t * Math.pow(2, -10 * e) * Math.sin((e - o) * $t / n) * .5 + 1) * (r - i)
        }])
    }("easeInOutElastic", 1, .3 * 1.5), B(["at-start", function(e, t, n) {
        return 0 === e ? t : n
    }]), B(["during", function(e, t, n) {
        return 0 === e || 1 === e ? t : n
    }]), B(["at-end", function(e, t, n) {
        return 1 === e ? n : t
    }]), Qe(["Element", "innerWidth", Jt("width", !0)]), Qe(["Element", "innerHeight", Jt("height", !0)]), Qe(["Element", "outerWidth", Jt("width", !1)]), Qe(["Element", "outerHeight", Jt("height", !1)]);
    var Kt = /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i,
        Qt = /^(li)$/i,
        Zt = /^(tr)$/i,
        en = /^(table)$/i,
        tn = /^(tbody)$/i;

    function nn(e, t) {
        return function(n, i) {
            if (null == i) return gt(n, "client" + e, null, !0), gt(n, "scroll" + e, null, !0), n["scroll" + t] + "px";
            var r = parseFloat(i);
            switch (i.replace(String(r), "")) {
                case "":
                case "px":
                    n["scroll" + t] = r;
                    break;
                case "%":
                    var o = parseFloat(gt(n, "client" + e)),
                        s = parseFloat(gt(n, "scroll" + e));
                    n["scroll" + t] = Math.max(0, s - o) * r / 100
            }
        }
    }
    Qe(["Element", "display", function(e, t) {
        var n = e.style;
        if (void 0 === t) return pt(e, "display");
        if ("auto" === t) {
            var i = e && e.nodeName,
                r = Fe(e);
            t = Kt.test(i) ? "inline" : Qt.test(i) ? "list-item" : Zt.test(i) ? "table-row" : en.test(i) ? "table" : tn.test(i) ? "table-row-group" : "block", r.cache.display = t
        }
        n.display = t
    }]), Qe(["HTMLElement", "scroll", nn("Height", "Top"), !1]), Qe(["HTMLElement", "scrollTop", nn("Height", "Top"), !1]), Qe(["HTMLElement", "scrollLeft", nn("Width", "Left"), !1]), Qe(["HTMLElement", "scrollWidth", function(e, t) {
        if (null == t) return e.scrollWidth + "px"
    }]), Qe(["HTMLElement", "clientWidth", function(e, t) {
        if (null == t) return e.clientWidth + "px"
    }]), Qe(["HTMLElement", "scrollHeight", function(e, t) {
        if (null == t) return e.scrollHeight + "px"
    }]), Qe(["HTMLElement", "clientHeight", function(e, t) {
        if (null == t) return e.clientHeight + "px"
    }]);
    var rn = /^(b(lockSize|o(rder(Bottom(LeftRadius|RightRadius|Width)|Image(Outset|Width)|LeftWidth|R(adius|ightWidth)|Spacing|Top(LeftRadius|RightRadius|Width)|Width)|ttom))|column(Gap|RuleWidth|Width)|f(lexBasis|ontSize)|grid(ColumnGap|Gap|RowGap)|height|inlineSize|le(ft|tterSpacing)|m(a(rgin(Bottom|Left|Right|Top)|x(BlockSize|Height|InlineSize|Width))|in(BlockSize|Height|InlineSize|Width))|o(bjectPosition|utline(Offset|Width))|p(adding(Bottom|Left|Right|Top)|erspective)|right|s(hapeMargin|troke(Dashoffset|Width))|t(extIndent|op|ransformOrigin)|w(idth|ordSpacing))$/;

    function on(e, t) {
        return function(n, i) {
            if (void 0 === i) return pt(n, e) || pt(n, t);
            n.style[e] = n.style[t] = i
        }
    }

    function sn(e) {
        return function(t, n) {
            if (void 0 === n) return pt(t, e);
            t.style[e] = n
        }
    }
    var an = /^(webkit|moz|ms|o)[A-Z]/,
        ln = Ge.prefixElement;
    if (ln)
        for (var cn in ln.style)
            if (an.test(cn)) {
                var un = cn.replace(/^[a-z]+([A-Z])/, function(e, t) {
                        return t.toLowerCase()
                    }),
                    dn = rn.test(un) ? "px" : void 0;
                Qe(["Element", un, on(cn, un), dn])
            } else if (!Ze(["Element", cn])) {
        var hn = rn.test(cn) ? "px" : void 0;
        Qe(["Element", cn, sn(cn), hn])
    }

    function fn(e) {
        return function(t, n) {
            if (void 0 === n) return t.getAttribute(e);
            t.setAttribute(e, n)
        }
    }
    var pn = document.createElement("div"),
        gn = /^SVG(.*)Element$/,
        vn = /Element$/;

    function mn(e) {
        return function(t, n) {
            if (void 0 === n) try {
                return t.getBBox()[e] + "px"
            } catch (e) {
                return "0px"
            }
            t.setAttribute(e, n)
        }
    }
    Object.getOwnPropertyNames(window).forEach(function(e) {
        var t = gn.exec(e);
        if (t && "SVG" !== t[1]) try {
            var n = t[1] ? document.createElementNS("http://www.w3.org/2000/svg", (t[1] || "svg").toLowerCase()) : document.createElement("svg");
            for (var i in n) {
                var r = n[i];
                !N(i) || "o" === i[0] && "n" === i[1] || i === i.toUpperCase() || vn.test(i) || i in pn || C(r) || Qe([e, i, fn(i)])
            }
        } catch (t) {
            console.error("VelocityJS: Error when trying to identify SVG attributes on " + e + ".", t)
        }
    }), Qe(["SVGElement", "width", mn("width")]), Qe(["SVGElement", "height", mn("height")]), Qe(["Element", "tween", function(e, t) {
        if (void 0 === t) return ""
    }]);
    var yn, bn = kn;
    if (function(e) {
            e.Actions = j, e.Easings = F, e.Sequences = Je, e.State = Ge, e.defaults = He, e.patch = Nn, e.debug = !1, e.mock = !1, e.version = "2.0.5", e.Velocity = kn
        }(yn || (yn = {})), function() {
            if (document.documentMode) return document.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = document.createElement("div");
                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
            }
        }() <= 8) throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
    if (window) {
        var wn = window.jQuery,
            En = window.Zepto;
        Nn(window, !0), Nn(Element && Element.prototype), Nn(NodeList && NodeList.prototype), Nn(HTMLCollection && HTMLCollection.prototype), Nn(wn, !0), Nn(wn && wn.fn), Nn(En, !0), Nn(En && En.fn)
    }
    var _n = function(e) {
        if (yn.hasOwnProperty(e)) switch (void 0 === e ? "undefined" : _(e)) {
            case "number":
            case "boolean":
                M(bn, e, {
                    get: function() {
                        return yn[e]
                    },
                    set: function(t) {
                        yn[e] = t
                    }
                }, !0);
                break;
            default:
                M(bn, e, yn[e], !0)
        }
    };
    for (var Sn in yn) _n(Sn);
    Object.freeze(bn);
    var Tn = /(\d*\.\d+|\d+\.?|from|to)/g;

    function xn(e, t) {
        var n = e.tweens = Object.create(null),
            i = e.element;
        for (var r in t.tweens)
            if (t.tweens.hasOwnProperty(r)) {
                var o = et(i, r);
                if (!o && "tween" !== r) {
                    bn.debug && console.log("Skipping [" + r + "] due to a lack of browser support.");
                    continue
                }
                n[r] = {
                    fn: o,
                    sequence: t.tweens[r]
                }
            }
    }
    V(["registerSequence", function e(t) {
        if (L(t[0]))
            for (var n in t[0]) t[0].hasOwnProperty(n) && e([n, t[0][n]]);
        else if (N(t[0])) {
            var i = t[0],
                r = t[1];
            if (N(i))
                if (L(r)) {
                    Je[i] && console.warn("VelocityJS: Replacing named sequence:", i);
                    var o = {},
                        s = new Array(100),
                        a = [],
                        l = Je[i] = {},
                        c = he(r.duration);
                    for (var u in l.tweens = {}, k(c) && (l.duration = c), r)
                        if (r.hasOwnProperty(u)) {
                            var d = String(u).match(Tn);
                            if (d) {
                                var h = !0,
                                    f = !1,
                                    p = void 0;
                                try {
                                    for (var g, v = d[Symbol.iterator](); !(h = (g = v.next()).done); h = !0) {
                                        var m = g.value,
                                            y = "from" === m ? 0 : "to" === m ? 100 : parseFloat(m);
                                        if (y < 0 || y > 100) console.warn("VelocityJS: Trying to use an invalid value as a percentage (0 <= n <= 100):", i, y);
                                        else if (isNaN(y)) console.warn("VelocityJS: Trying to use an invalid number as a percentage:", i, u, m);
                                        else
                                            for (var b in o[String(y)] || (o[String(y)] = []), o[String(y)].push(u), r[u]) a.includes(b) || a.push(b)
                                    }
                                } catch (e) {
                                    f = !0, p = e
                                } finally {
                                    try {
                                        !h && v.return && v.return()
                                    } finally {
                                        if (f) throw p
                                    }
                                }
                            }
                        } var w = Object.keys(o).sort(function(e, t) {
                        var n = parseFloat(e),
                            i = parseFloat(t);
                        return n > i ? 1 : n < i ? -1 : 0
                    });
                    w.forEach(function(e) {
                        s.push.apply(o[e])
                    });
                    var E = !0,
                        _ = !1,
                        S = void 0;
                    try {
                        for (var T, x = a[Symbol.iterator](); !(E = (T = x.next()).done); E = !0) {
                            var O = T.value,
                                C = [],
                                A = it(O),
                                I = !0,
                                D = !1,
                                P = void 0;
                            try {
                                for (var M, H = w[Symbol.iterator](); !(I = (M = H.next()).done); I = !0) {
                                    var q = M.value,
                                        W = !0,
                                        j = !1,
                                        V = void 0;
                                    try {
                                        for (var z, F = o[q][Symbol.iterator](); !(W = (z = F.next()).done); W = !0) {
                                            var B = r[z.value];
                                            B[A] && C.push(N(B[A]) ? B[A] : B[A][0])
                                        }
                                    } catch (e) {
                                        j = !0, V = e
                                    } finally {
                                        try {
                                            !W && F.return && F.return()
                                        } finally {
                                            if (j) throw V
                                        }
                                    }
                                }
                            } catch (e) {
                                D = !0, P = e
                            } finally {
                                try {
                                    !I && H.return && H.return()
                                } finally {
                                    if (D) throw P
                                }
                            }
                            if (C.length) {
                                var Y = Et(C, A),
                                    G = 0;
                                if (Y) {
                                    var U = !0,
                                        X = !1,
                                        $ = void 0;
                                    try {
                                        for (var J, K = w[Symbol.iterator](); !(U = (J = K.next()).done); U = !0) {
                                            var Q = J.value,
                                                Z = !0,
                                                ee = !1,
                                                te = void 0;
                                            try {
                                                for (var ne, ie = o[Q][Symbol.iterator](); !(Z = (ne = ie.next()).done); Z = !0) {
                                                    var re = r[ne.value][A];
                                                    re && (Array.isArray(re) && re.length > 1 && (N(re[1]) || Array.isArray(re[1])) && (Y[G].easing = fe(re[1], l.duration || R)), Y[G++].percent = parseFloat(Q) / 100)
                                                }
                                            } catch (e) {
                                                ee = !0, te = e
                                            } finally {
                                                try {
                                                    !Z && ie.return && ie.return()
                                                } finally {
                                                    if (ee) throw te
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        X = !0, $ = e
                                    } finally {
                                        try {
                                            !U && K.return && K.return()
                                        } finally {
                                            if (X) throw $
                                        }
                                    }
                                    l.tweens[A] = Y
                                }
                            }
                        }
                    } catch (e) {
                        _ = !0, S = e
                    } finally {
                        try {
                            !E && x.return && x.return()
                        } finally {
                            if (_) throw S
                        }
                    }
                } else console.warn("VelocityJS: Trying to set 'registerSequence' sequence to an invalid value:", i, r);
            else console.warn("VelocityJS: Trying to set 'registerSequence' name to an invalid value:", i)
        }
    }], !0);
    var On = void 0;
    try {
        On = Promise
    } catch (e) {}
    var Cn = ", if that is deliberate then pass `promiseRejectEmpty:false` as an option";

    function An(e, t) {
        M(t, "promise", e), M(t, "then", e.then.bind(e)), M(t, "catch", e.catch.bind(e)), e.finally && M(t, "finally", e.finally.bind(e))
    }

    function kn() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = He,
            r = arguments,
            o = r[0],
            s = L(o) && (o.p || L(o.properties) && !o.properties.names || N(o.properties)),
            a = 0,
            l = void 0,
            c = void 0,
            u = void 0,
            d = void 0,
            h = void 0,
            f = void 0,
            p = void 0;
        A(this) ? l = [this] : D(this) ? (l = P(this), I(this) && (d = this.velocity.animations)) : s ? (l = P(o.elements || o.e), a++) : A(o) ? (l = P([o]), a++) : D(o) && (l = P(o), a++), l && (M(l, "velocity", kn.bind(l)), d && M(l.velocity, "animations", d));
        var g = "reverse" === (c = s ? H(o.properties, o.p) : r[a++]),
            v = !g && N(c),
            m = v && Je[c],
            y = s ? H(o.options, o.o) : r[a];
        if (L(y) && (u = y), On && H(u && u.promise, i.promise) && (h = new On(function(e, t) {
                p = t, f = function(t) {
                    I(t) && t.promise ? (delete t.then, delete t.catch, delete t.finally, e(t), An(t.promise, t)) : e(t)
                }
            }), l && An(h, l)), h) {
            var b = u && u.promiseRejectEmpty,
                w = H(b, i.promiseRejectEmpty);
            l || v ? c || (w ? p("Velocity: No properties supplied" + (O(b) ? "" : Cn) + ". Aborting.") : f()) : w ? p("Velocity: No elements supplied" + (O(b) ? "" : Cn) + ". Aborting.") : f()
        }
        if (!l && !v || !c) return h;
        if (v) {
            for (var E = [], _ = h && {
                    _promise: h,
                    _resolver: f,
                    _rejecter: p
                }; a < r.length;) E.push(r[a++]);
            var S = c.replace(/\..*$/, ""),
                T = j[S];
            if (T) {
                var x = T(E, l, _, c);
                return void 0 !== x ? x : l || h
            }
            if (!m) return void console.error("VelocityJS: First argument (" + c + ") was not a property map, a known action, or a registered redirect. Aborting.")
        }
        var q = void 0;
        if (L(c) || g || m) {
            var W = {},
                V = i.sync;
            if (h && (M(W, "_promise", h), M(W, "_rejecter", p), M(W, "_resolver", f)), M(W, "_ready", 0), M(W, "_started", 0), M(W, "_completed", 0), M(W, "_total", 0), L(u)) {
                var R = he(u.duration);
                q = void 0 !== R, W.duration = H(R, i.duration), W.delay = H(de(u.delay), i.delay), W.easing = fe(H(u.easing, i.easing), W.duration) || fe(i.easing, W.duration), W.loop = H(ge(u.loop), i.loop), W.repeat = W.repeatAgain = H(me(u.repeat), i.repeat), null != u.speed && (W.speed = H(ye(u.speed), 1)), O(u.promise) && (W.promise = u.promise), W.queue = H(ve(u.queue), i.queue), u.mobileHA && !Ge.isGingerbread && (W.mobileHA = !0), !0 === u.drag && (W.drag = !0), (k(u.stagger) || C(u.stagger)) && (W.stagger = u.stagger), g || (null != u.display && (c.display = u.display, console.error('Deprecated "options.display" used, this is now a property:', u.display)), null != u.visibility && (c.visibility = u.visibility, console.error('Deprecated "options.visibility" used, this is now a property:', u.visibility)));
                var z = ce(u.begin),
                    F = ue(u.complete),
                    B = function(e) {
                        if (C(e)) return e;
                        null != e && console.warn("VelocityJS: Trying to set 'progress' to an invalid value:", e)
                    }(u.progress),
                    Y = be(u.sync);
                null != z && (W.begin = z), null != F && (W.complete = F), null != B && (W.progress = B), null != Y && (V = Y)
            } else if (!s) {
                var G = 0;
                if (W.duration = he(r[a], !0), void 0 === W.duration ? W.duration = i.duration : (q = !0, G++), !C(r[a + G])) {
                    var U = fe(r[a + G], H(W && he(W.duration), i.duration), !0);
                    void 0 !== U && (G++, W.easing = U)
                }
                var X = ue(r[a + G], !0);
                void 0 !== X && (W.complete = X), W.delay = i.delay, W.loop = i.loop, W.repeat = W.repeatAgain = i.repeat
            }
            if (g && !1 === W.queue) throw new Error("VelocityJS: Cannot reverse a queue:false animation.");
            !q && m && m.duration && (W.duration = m.duration);
            var $ = {
                options: W,
                elements: l,
                _prev: void 0,
                _next: void 0,
                _flags: V ? 32 : 0,
                percentComplete: 0,
                ellapsedTime: 0,
                timeStart: 0
            };
            d = [];
            for (var J = 0; J < l.length; J++) {
                var K = l[J],
                    Q = 0;
                if (A(K)) {
                    if (g) {
                        var Z = Fe(K).lastAnimationList[W.queue];
                        if (!(c = Z && Z.tweens)) {
                            console.error("VelocityJS: Attempting to reverse an animation on an element with no previous animation:", K);
                            continue
                        }
                        Q |= 64 & ~(64 & Z._flags)
                    }
                    var ee = Object.assign({}, $, {
                        element: K,
                        _flags: $._flags | Q
                    });
                    if (W._total++, d.push(ee), W.stagger)
                        if (C(W.stagger)) {
                            var te = Ln(W.stagger, K, J, l.length, l, "stagger");
                            k(te) && (ee.delay = W.delay + te)
                        } else ee.delay = W.delay + W.stagger * J;
                    W.drag && (ee.duration = W.duration - W.duration * Math.max(1 - (J + 1) / l.length, .75)), m ? xn(ee, m) : g ? ee.tweens = c : (ee.tweens = Object.create(null), yt(ee, c)), Xe(K, ee, W.queue)
                }
            }!1 === Ge.isTicking && Ht(!1), d && M(l.velocity, "animations", d)
        }
        return l || h
    }

    function Ln(e, t, n, i, r, o) {
        try {
            return e.call(t, n, i, r, o)
        } catch (e) {
            console.error("VelocityJS: Exception when calling '" + o + "' callback:", e)
        }
    }

    function Nn(e, t) {
        try {
            M(e, (t ? "V" : "v") + "elocity", kn)
        } catch (e) {
            console.warn("VelocityJS: Error when trying to add prototype.", e)
        }
    }
    var In, Dn = kn;
    if (function(e) {
            e.Actions = j, e.Easings = F, e.Sequences = Je, e.State = Ge, e.defaults = He, e.patch = Nn, e.debug = !1, e.mock = !1, e.version = "2.0.5", e.Velocity = kn
        }(In || (In = {})), function() {
            if (document.documentMode) return document.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = document.createElement("div");
                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
            }
        }() <= 8) throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
    if (window) {
        var Pn = window.jQuery,
            Mn = window.Zepto;
        Nn(window, !0), Nn(Element && Element.prototype), Nn(NodeList && NodeList.prototype), Nn(HTMLCollection && HTMLCollection.prototype), Nn(Pn, !0), Nn(Pn && Pn.fn), Nn(Mn, !0), Nn(Mn && Mn.fn)
    }
    var Hn = function(e) {
        if (In.hasOwnProperty(e)) switch (void 0 === e ? "undefined" : _(e)) {
            case "number":
            case "boolean":
                M(Dn, e, {
                    get: function() {
                        return In[e]
                    },
                    set: function(t) {
                        In[e] = t
                    }
                }, !0);
                break;
            default:
                M(Dn, e, In[e], !0)
        }
    };
    for (var qn in In) Hn(qn);
    Object.freeze(Dn);

    function Wn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var jn = function(e) {
            var t = function() {
                var n = void 0,
                    i = void 0,
                    r = void 0,
                    o = void 0,
                    s = void 0,
                    a = void 0,
                    l = void 0,
                    c = void 0;
                e("[data-quiz=collection]");
                return (t = function() {
                    function t() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var u, d, h;
                    return u = t, h = [{
                        key: "initClass",
                        value: function() {
                            i = n = {
                                moomintroll: 0,
                                snorkmaiden: 0,
                                moominpappa: 0,
                                moominmamma: 0,
                                "little-my": 0,
                                snufkin: 0,
                                sniff: 0,
                                stinky: 0,
                                hattifatteners: 0,
                                groke: 0,
                                mymble: 0,
                                "too-ticky": 0,
                                hemulen: 0,
                                fillyjonk: 0,
                                "thingummy-and-bob": 0
                            }, r = 1, 0, o = "", s = function() {
                                return e(".answer-radio").each(function(t, n) {
                                    if ("checked" === e(n).attr("checked")) {
                                        var r = e(n).data("characters").split(",");
                                        for (t = 0; t < r.length;) i[r[t]] = i[r[t]] + 1, t++
                                    }
                                })
                            }, a = function() {
                                var t = 0,
                                    n = "",
                                    r = 0;
                                return e.each(Object(i), function(e, i) {
                                    return t < i && (n = e, t = i, r), r++
                                }), n
                            }, c = function(t) {
                                e("[data-quiz-character=".concat(t, "]")).length < 1 || (e("[data-quiz-character=".concat(t, "]")).addClass("flex-show"), e("[data-quiz-character=".concat(t, "]")).closest("[data-quiz]").show())
                            }, e(".start-button").click(function() {
                                return e("#q-count")[0].innerHTML = r + "/" + e(".question").length, e("#q-count").velocity({
                                    opacity: 1
                                }), e("#q0").velocity({
                                    opacity: 0
                                }, {
                                    duration: 250,
                                    complete: function() {
                                        return e("#q1").velocity({
                                            opacity: 1
                                        }, {
                                            begin: function() {
                                                return e("#q0").hide(), e("#q1").show()
                                            }
                                        })
                                    }
                                })
                            }), e(".answer-radio").click(function() {
                                return e(this).attr("checked", !0), e(this).parent().parent().find(".answer-radio").attr("disabled", !0), r < e(".question").length ? e("#q".concat(r)).velocity({
                                    opacity: 0
                                }, {
                                    duration: 250,
                                    complete: function() {
                                        return e("#q".concat(++r)).velocity({
                                            opacity: 1
                                        }, {
                                            begin: function() {
                                                return e("#q".concat(r - 1)).hide(), e("#q".concat(r)).show(), e("#q-count")[0].innerHTML = r + "/" + e(".question").length
                                            }
                                        })
                                    }
                                }) : (e("#q-count").fadeOut(), e("#quiz-form").fadeOut({
                                    complete: function() {
                                        return e("#shares").velocity({
                                            opacity: 1
                                        }, {
                                            duration: 250,
                                            begin: function() {
                                                e("#shares").show(), e("#q".concat(r)).hide(), s(), console.log(i), i = l(n), o = a();
                                                var t = window.quiz;
                                                e("#".concat(o)).show(), c(o), e("#result")[0].innerHTML = t.characterDescriptions[o];
                                                var u = t.characterNames[o];
                                                return e("#which-moomin-heading")[0].innerHTML = t.you_are + " " + u + "!", e("#share-facebook").on("click", function() {
                                                    var e = t.pre_title.replace(/\+/g, " ");
                                                    FB.ui({
                                                        method: "share",
                                                        href: "https://moomin.com/en/which-moomin-are-you/",
                                                        quote: "".concat(e, " ").concat(u)
                                                    }, function(e) {})
                                                }), e("#share-twitter").attr("href", t.twitter_uri + "text=" + t.pre_title + u + t.post_title + " @MoominOfficial&url=" + t.site_uri + "&referer_url=" + t.site_uri), e("#share-pinterest").attr("href", t.pinterest_uri + "description=" + t.pre_title + u + t.post_title + "%20" + t.desc_short + "&media=" + t.characterImages[o] + "&url=" + t.site_uri), console.log(o), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                                    event: "whichMoominCharacter",
                                                    character: o
                                                }), e.each(e(".featured-products").find(".featured-item"), function(n, i) {
                                                    var r = e(i),
                                                        s = t["shopify_".concat(o)][n],
                                                        a = s.variants[0].price.split("."),
                                                        l = s.image.src.replace(/(\?v\=)(\d+)/g, "");
                                                    return l = l.replace(/\.(?=[^.]*$)/, "_medium."), r.closest("a").attr("href", "https://shop.moomin.com/products/".concat(s.handle)), r.find("img").attr("src", l), r.find(".manufacturer")[0].innerHTML = s.vendor, r.find("h6")[0].innerHTML = s.title, r.find(".price-tag-integer")[0].innerHTML = a[0], r.find(".price-tag-decimal")[0].innerHTML = a[1]
                                                })
                                            }
                                        })
                                    }
                                }))
                            }), e("#quiz-form").submit(function() {
                                return !1
                            }), l = function(e) {
                                return JSON.parse(JSON.stringify(e))
                            }
                        }
                    }], (d = null) && Wn(u.prototype, d), h && Wn(u, h), t
                }()).initClass(), t
            }();
            t = new t
        },
        Vn = n(0);
    window.jQuery = Vn, window.$ = Vn;
    var Rn = {
            init: function() {
                console.log("quiz")
            },
            finalize: function() {
                jn(Vn)
            }
        },
        zn = (n(13), {
            init: function() {
                $("#character-marquee").endlessRiver()
            },
            finalize: function() {}
        }),
        Fn = ($(".explore__map__img"), {
            init: function() {
                $(function() {
                    $('[data-toggle="tooltip"]').tooltip()
                })
            },
            finalize: function() {}
        }),
        Bn = new a({
            common: w,
            home: E,
            character: zn,
            characters: Fn,
            moominvalley: Fn,
            whichMoominAreYou: Rn
        });
    r()(document).ready(function() {
        return Bn.loadEvents()
    })
}]);