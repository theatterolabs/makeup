(window.webpackJsonp = window.webpackJsonp || []).push([
	[177], {
		1: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(393),
				r = n.n(i),
				o = function() {
					return s.a.createElement("div", {
						className: "text-center"
					})
				};
			t.a = function(e) {
				return r()({
					loader: e,
					loading: o
				})
			}
		},
		102: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return m
			});
			var a = n(0),
				s = n.n(a),
				i = n(2),
				r = n(8),
				o = n(5),
				c = n.n(o),
				u = n(26),
				l = (n(850), n(32));

			function m(e) {
				var t = e.hideStatement,
					n = void 0 === t || t,
					a = e.setHideStatement,
					o = Object(i.d)().i18n;
				return s.a.createElement("div", {
					className: c()("pf-language pf-header-cookiestatement", {
						"pf-language-ja": "ja" === o.language,
						"pf-header-cookiestatement-hide": n
					})
				}, s.a.createElement(l.a, {
					mobileType: !0,
					className: "pf-header-cookiestatement-container"
				}, s.a.createElement("div", {
					className: "pf-header-cookiestatement-text"
				}, s.a.createElement(i.a, {
					i18nKey: "business:c.l.h.cookie.statement"
				}, "By using the website, you agree to our use of cookies. Head to our", " ", s.a.createElement(r.a, {
					to: "/business/privacy",
					target: "_blank",
					rel: "nofollow"
				}, "cookie statement"), " ", "to learn more about cookies and manage cookies on this website.")), s.a.createElement("button", {
					className: "pf-header-cookiestatement-close",
					onClick: function() {
						return u.a.setCookieStatement(!0), void a(!0)
					}
				}, s.a.createElement(i.a, {
					i18nKey: "business:c.l.h.cookie.statement.continue"
				}, "CONTINUE"))))
			}
		},
		105: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(2),
				r = n(169),
				o = n(170),
				c = {
					home: {
						id: "menu.consumer.technologies",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.technologylinks.home"
						}, "Technologies"),
						link: "/business/technologies",
						i18nKey: "consumer:u.c.technologylinks.home"
					},
					overview: {
						id: "menu.consumer.overview",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.technologylinks.overview"
						}, "Overview"),
						link: "/business/technologies/agile-face-tracking",
						i18nKey: "consumer:u.c.technologylinks.overview"
					},
					facedetectiontracking: {
						id: "menu.consumer.facedetectiontracking",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.technologylinks.face.detection.tracking"
						}, "Face Detection & Tracking"),
						link: "/business/technologies/face-detection-tracking",
						i18nKey: "consumer:u.c.technologylinks.face.detection.tracking"
					},
					makeupar: {
						id: "menu.consumer.makeupar",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.technologylinks.makeup.ar"
						}, "Makeup AR"),
						link: "/business/technologies/makeup-ar",
						i18nKey: "consumer:u.c.technologylinks.makeup.ar"
					},
					live3dfacear: {
						id: "menu.consumer.live3dfacear",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.technologylinks.live.3d.face.ar"
						}, "Live 3D Face AR"),
						link: "/business/technologies/live-3d-face-ar",
						i18nKey: "consumer:u.c.technologylinks.live.3d.face.ar"
					},
					skincarear: {
						id: "menu.consumer.skincarear",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.technologylinks.skincare.ar"
						}, "Skincare AR"),
						link: "/business/technologies/skincare-ar",
						i18nKey: "consumer:u.c.technologylinks.skincare.ar"
					},
					faceai: {
						id: "menu.consumer.faceai",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.technologylinks.face.ai"
						}, "Face AI"),
						link: "/business/technologies/face-ai",
						i18nKey: "consumer:u.c.technologylinks.face.ai"
					},
					agileface: {
						id: "menu.business.agileface",
						text: s.a.createElement(r.a, null),
						link: "/business/technologies/agile-face-tracking",
						i18nKey: "business:u.c.solutionlinks.agile.face"
					},
					agilehand: {
						id: "menu.business.agilehand",
						text: s.a.createElement(o.a, null),
						link: "/business/technologies/agile-hand-tracking",
						i18nKey: "business:u.c.solutionlinks.agile.hand"
					}
				};
			t.a = c
		},
		106: function(e, t, n) {
			"use strict";
			var a = n(4),
				s = n(34),
				i = {
					isBtfEnabled: function() {
						return -1 !== ["en", "ja"].indexOf(a.a.determineLanguage(s.a.language))
					},
					isBtfvEnabled: function() {
						return -1 !== ["fr", "ja"].indexOf(a.a.determineLanguage(s.a.language))
					},
					isEducationEnabled: function() {
						return -1 !== ["en"].indexOf(a.a.determineLanguage(s.a.language))
					}
				};
			t.a = i
		},
		107: function(e, t, n) {
			"use strict";
			var a = n(26),
				s = {
					isUtmEmpty: function(e) {
						return !e || !e.utm_source || !e.utm_medium
					},
					updateFirst: function(e) {
						s.isUtmEmpty(e) || (a.a.getFirstUtmSource() || a.a.setFirstUtmSource(e))
					},
					updateLastTargetedAd: function(e) {
						s.isUtmEmpty(e) || "cpc" !== e.utm_medium && "display" !== e.utm_medium || a.a.setLastTargetedAdUtmSource(e)
					},
					getSupportSourceUtm: function() {
						var e = {},
							t = a.a.getFirstUtmSource(),
							n = a.a.getLastTargetedAdUtmSource();
						return t && (e.FIRST_IN_30_DAYS = {
							utmSource: t.utm_source,
							utmMedium: t.utm_medium,
							utmCampaign: t.utm_campaign,
							utmContent: t.utm_content
						}), n && (e.LAST_ADS_IN_30_DAYS = {
							utmSource: n.utm_source,
							utmMedium: n.utm_medium,
							utmCampaign: n.utm_campaign,
							utmContent: n.utm_content
						}), e
					}
				};
			t.a = s
		},
		116: function(e, t, n) {
			"use strict";
			var a = n(34),
				s = n(403),
				i = n(2),
				r = n(9),
				o = n.n(r),
				c = n(18),
				u = function() {
					var e = Object(c.a)(o.a.mark(function e(t) {
						return o.a.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									e.t0 = t, e.next = "zh_CN" === e.t0 ? 3 : "zh-CN" === e.t0 ? 4 : "de" === e.t0 ? 5 : "es" === e.t0 ? 6 : "fr" === e.t0 ? 7 : "ja" === e.t0 ? 8 : "ko" === e.t0 ? 9 : "pt" === e.t0 ? 10 : "zh_TW" === e.t0 ? 11 : "zh-TW" === e.t0 ? 12 : "it" === e.t0 ? 13 : 14;
									break;
								case 3:
								case 4:
									return e.abrupt("return", n.e(39).then(n.t.bind(null, 3276, 3)));
								case 5:
									return e.abrupt("return", n.e(43).then(n.t.bind(null, 3277, 3)));
								case 6:
									return e.abrupt("return", n.e(48).then(n.t.bind(null, 3278, 3)));
								case 7:
									return e.abrupt("return", n.e(49).then(n.t.bind(null, 3279, 3)));
								case 8:
									return e.abrupt("return", n.e(62).then(n.t.bind(null, 3280, 3)));
								case 9:
									return e.abrupt("return", n.e(63).then(n.t.bind(null, 3281, 3)));
								case 10:
									return e.abrupt("return", n.e(97).then(n.t.bind(null, 3282, 3)));
								case 11:
								case 12:
									return e.abrupt("return", n.e(133).then(n.t.bind(null, 3283, 3)));
								case 13:
									return e.abrupt("return", n.e(61).then(n.t.bind(null, 3284, 3)));
								case 14:
									return e.abrupt("return", n.e(47).then(n.t.bind(null, 3285, 3)));
								case 15:
								case "end":
									return e.stop()
							}
						}, e)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}(),
				l = function() {
					var e = Object(c.a)(o.a.mark(function e(t) {
						return o.a.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									e.t0 = t, e.next = "zh_CN" === e.t0 ? 3 : "zh-CN" === e.t0 ? 4 : "de" === e.t0 ? 5 : "es" === e.t0 ? 6 : "fr" === e.t0 ? 7 : "ja" === e.t0 ? 8 : "ko" === e.t0 ? 9 : "pt" === e.t0 ? 10 : "zh_TW" === e.t0 ? 11 : "zh-TW" === e.t0 ? 12 : "it" === e.t0 ? 13 : 14;
									break;
								case 3:
								case 4:
									return e.abrupt("return", n.e(153).then(n.t.bind(null, 3286, 3)));
								case 5:
									return e.abrupt("return", n.e(154).then(n.t.bind(null, 3287, 3)));
								case 6:
									return e.abrupt("return", n.e(156).then(n.t.bind(null, 3288, 3)));
								case 7:
									return e.abrupt("return", n.e(157).then(n.t.bind(null, 3289, 3)));
								case 8:
									return e.abrupt("return", n.e(160).then(n.t.bind(null, 3290, 3)));
								case 9:
									return e.abrupt("return", n.e(161).then(n.t.bind(null, 3291, 3)));
								case 10:
									return e.abrupt("return", n.e(164).then(n.t.bind(null, 3292, 3)));
								case 11:
								case 12:
									return e.abrupt("return", n.e(170).then(n.t.bind(null, 3293, 3)));
								case 13:
									return e.abrupt("return", n.e(170).then(n.t.bind(null, 3294, 3)));
								case 14:
									return e.abrupt("return", n.e(155).then(n.t.bind(null, 3295, 3)));
								case 15:
								case "end":
									return e.stop()
							}
						}, e)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}(),
				m = function() {
					var e = Object(c.a)(o.a.mark(function e(t) {
						return o.a.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									e.t0 = t, e.next = "zh_CN" === e.t0 ? 3 : "zh-CN" === e.t0 ? 4 : "de" === e.t0 ? 5 : "es" === e.t0 ? 6 : "fr" === e.t0 ? 7 : "ja" === e.t0 ? 8 : "ko" === e.t0 ? 9 : "pt" === e.t0 ? 10 : "zh_TW" === e.t0 ? 11 : "zh-TW" === e.t0 ? 12 : "it" === e.t0 ? 13 : 14;
									break;
								case 3:
								case 4:
									return e.abrupt("return", n.e(179).then(n.t.bind(null, 3296, 3)));
								case 5:
									return e.abrupt("return", n.e(180).then(n.t.bind(null, 3297, 3)));
								case 6:
									return e.abrupt("return", n.e(182).then(n.t.bind(null, 3298, 3)));
								case 7:
									return e.abrupt("return", n.e(183).then(n.t.bind(null, 3299, 3)));
								case 8:
									return e.abrupt("return", n.e(184).then(n.t.bind(null, 3300, 3)));
								case 9:
									return e.abrupt("return", n.e(185).then(n.t.bind(null, 3301, 3)));
								case 10:
									return e.abrupt("return", n.e(186).then(n.t.bind(null, 3302, 3)));
								case 11:
								case 12:
									return e.abrupt("return", n.e(187).then(n.t.bind(null, 3303, 3)));
								case 13:
									return e.abrupt("return", n.e(187).then(n.t.bind(null, 3304, 3)));
								case 14:
									return e.abrupt("return", n.e(181).then(n.t.bind(null, 3305, 3)));
								case 15:
								case "end":
									return e.stop()
							}
						}, e)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}(),
				p = {
					type: "backend",
					init: function() {},
					read: function(e, t, n) {
						"business" === t ? u(e).then(function(e) {
							n(null, e.default)
						}) : "consumer" === t ? l(e).then(function(e) {
							return n(null, e.default)
						}) : "seo" === t ? m(e).then(function(e) {
							return n(null, e.default)
						}) : n(!0, !1)
					},
					readMulti: function() {},
					save: function() {},
					create: function() {}
				},
				d = ["en", "fr", "ja", "de", "ko", "es", "it", "pt", "zh", "zh-cn", "zh-tw"];
			a.a.use(p).use(s.a).use(i.c).init({
				debug: !1,
				supportedLngs: d,
				whitelist: d,
				initImmediate: !1,
				nonExplicitWhitelist: !0,
				defaultNS: "",
				fallbackLng: "en",
				interpolation: {
					escapeValue: !1
				},
				keySeparator: !1,
				ns: ["business", "consumer", "seo"],
				react: {
					bindI18n: "languageChanged",
					bindI18nStore: "added",
					wait: !0,
					useSuspense: !1
				},
				detection: {
					order: ["path", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
					lookupFromPathIndex: 0,
					checkWhitelist: !0
				}
			});
			t.a = a.a
		},
		117: function(e, t, n) {
			"use strict";
			var a = n(16),
				s = n(34),
				i = n(21),
				r = n.n(i),
				o = n(279),
				c = n.n(o),
				u = n(253),
				l = n.n(u),
				m = n(367),
				p = n.n(m),
				d = n(4),
				b = n(267),
				f = n(289),
				h = {
					isEnabled: function() {
						return -1 !== ["en", "zh_CN", "ja", "fr", "ko", "de", "es", "it"].indexOf(d.a.determineLanguage(s.a.language))
					},
					convertLang: function(e) {
						return {
							zh_CN: "chs",
							"zh-cn": "chs",
							"zh-tw": "cht",
							zh_TW: "cht",
							en: "enu",
							fr: "fra",
							ja: "jpn",
							ko: "kor",
							de: "deu",
							es: "esp",
							it: "ita",
							pt: "ptb"
						} [e]
					},
					convertLanguage: function(e) {
						return {
							chs: "zh-cn",
							cht: "zh-tw",
							enu: "en",
							fra: "fr",
							jpn: "ja",
							kor: "ko",
							deu: "de",
							esp: "es",
							ita: "it",
							ptb: "pt"
						} [e]
					},
					getAuthorLink: function(e) {
						var t = d.a.isBusiness() ? "business" : "consumer";
						return r()(e, "authorHandle") ? "/".concat(t, "/blog/author/").concat(e.authorHandle) : "/".concat(t, "/blog/author?authorId=").concat(r()(e, "id"))
					},
					getPostLink: function(e) {
						var t = d.a.isBusiness() ? "business" : "consumer",
							n = d.a.determineLanguage(s.a.language, d.a.isBusiness()).replace("_", "-").toLowerCase();
						return r()(e, "postHandle") ? "".concat("en" === n ? "" : "/".concat(n), "/").concat(t, "/blog/").concat(e.postHandle) : "".concat("en" === n ? "" : "/".concat(n), "/").concat(t, "/blog/post?postId=").concat(r()(e, "id"))
					},
					getNewsLink: function(e) {
						var t = d.a.isBusiness() ? "business" : "consumer",
							n = d.a.determineLanguage(s.a.language, d.a.isBusiness()).replace("_", "-").toLowerCase();
						return "".concat("en" === n ? "" : "/".concat(n), "/").concat(t, "/news/detail/").concat(r()(e, "id"))
					},
					joinKeywordsToHashtags: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
							t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",",
							n = e.map(function(e) {
								return h.toHashtagFormat(r()(e, "keyword.title"))
							});
						return c()(n, t)
					},
					getTransformedMonth: function(e, t) {
						return {
							zh_cn: t.format("M"),
							zh_tw: t.format("M"),
							"zh-cn": t.format("M"),
							"zh-tw": t.format("M"),
							en: t.format("MMM"),
							ja: t.format("M"),
							fr: d.a.convertToFrenchMonth(t.month()),
							de: t.format("MMM"),
							es: t.format("MMM"),
							ko: t.format("MMM"),
							it: t.format("MMM"),
							pt: t.format("MMM")
						} [e]
					},
					toHashtagFormat: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						return l()(p()(e))
					},
					getInitialFilterValue: function() {
						return {
							FOCUS: d.a.isBusiness() ? "BF_BUSINESS_FOCUS" : "CF_CONSUMER_FOCUS",
							BUSINESS_SERVICES: [],
							BUSINESS_TOPICS: [],
							CONSUMER_APPS: [],
							CONSUMER_TOPICS: []
						}
					},
					flattenedFilter: n.n(f)()(Object.values(b.a)).reduce(function(e, t) {
						return e = Object(a.a)({}, e, t)
					}, {})
				};
			t.a = h
		},
		119: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return i
			});
			var a = n(7),
				s = n(0);

			function i() {
				var e = Object(s.useState)(window.scrollY || document.documentElement.scrollTop || 0),
					t = Object(a.a)(e, 2),
					n = t[0],
					i = t[1];
				return Object(s.useEffect)(function() {
					var e = function() {
						return i(window.scrollY || document.documentElement.scrollTop || 0)
					};
					return window.addEventListener("scroll", e),
						function() {
							window.removeEventListener("scroll", e)
						}
				}, [n]), n
			}
		},
		12: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(2),
				r = {
					aifacialrecognition: {
						id: "menu.business.aifacialrecognition",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ai.facial.recognition"
						}, "AI Facial Recognition"),
						link: "/business/products/ai-facial-recognition",
						i18nKey: "business:u.c.solutionlinks.ai.facial.recognition"
					},
					aiproductrecommendation: {
						id: "menu.business.aiproductrecommendation",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ai.product.recommendation"
						}, "AI Product Recommendation"),
						link: "/business/products/ai-product-recommendation",
						i18nKey: "business:u.c.solutionlinks.ai.product.recommendation"
					},
					aishadefinder: {
						id: "menu.business.aishadefinder",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ai.shade.finder"
						}, "AI Foundation Shade Finder and Matcher"),
						link: "/business/products/ai-shade-finder",
						i18nKey: "business:u.c.solutionlinks.ai.shade.finder"
					},
					arskindiagnostic: {
						id: "menu.business.arskindiagnostic",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ai.skin.diagnostic"
						}, "AI Skin Analysis"),
						link: "/business/products/ai-skin-diagnostic",
						i18nKey: "business:u.c.solutionlinks.ai.skin.diagnostic"
					},
					ar3deyewear: {
						id: "menu.business.ar3deyewear",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.ar.3d.eyewear"
						}, "AI-Powered Virtual Try-On for Glasses"),
						link: "/business/products/eye-wear",
						i18nKey: "business:u.c.servicelinks.ar.3d.eyewear"
					},
					ba1on1: {
						id: "menu.business.ba1on1",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ba.1.on.1"
						}, "Beauty Advisor 1-on-1"),
						link: "/business/products/ba-1-on-1",
						i18nKey: "business:u.c.solutionlinks.ba.1.on.1"
					},
					instorebarcode: {
						id: "menu.business.instorebarcode",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.in.store.barcode"
						}, "In-store Barcode Try on"),
						link: "/business/products/in-store-barcode",
						i18nKey: "business:u.c.solutionlinks.in.store.barcode"
					},
					liveartraining: {
						id: "menu.business.liveartraining",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.live.ar.training"
						}, "Live AR for Corporate Training"),
						link: "/business/products/live-ar-training",
						i18nKey: "business:u.c.solutionlinks.live.ar.training"
					},
					livehaircolor: {
						id: "menu.business.livehaircolor",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.live.hair.color"
						}, "AI Virtual Hair Color Try On"),
						link: "/business/products/live-hair-color",
						i18nKey: "business:u.c.solutionlinks.live.hair.color"
					},
					livestreaming: {
						id: "menu.business.livestreaming",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.live.streaming"
						}, "AR Live Casting for Web and App"),
						link: "/business/products/live-streaming",
						i18nKey: "business:u.c.solutionlinks.live.streaming"
					},
					virtualaccessories: {
						id: "menu.business.virtualaccessories",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.virtual.accessories"
						}, "Hat and Hairband Virtual Try-On"),
						link: "/business/products/ar-virtual-accessories",
						i18nKey: "business:u.c.solutionlinks.virtual.accessories"
					},
					virtualmakeup: {
						id: "menu.business.virtualmakeup",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.virtual.makeup"
						}, "AI-Powered Virtual Makeup"),
						link: "/business/products/virtual-makeup",
						i18nKey: "business:u.c.solutionlinks.virtual.makeup"
					},
					youcamtutorial: {
						id: "menu.business.youcam.tutorial",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.youcam.tutorial"
						}, "YouCam Tutorial"),
						link: "/business/products/youcam-tutorial",
						i18nKey: "business:u.c.solutionlinks.youcam.tutorial"
					},
					videos: {
						id: "menu.business.videos",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.s.leftmenu.demo.video"
						}, "Videos"),
						link: "/business/videos",
						sublinks: ["/business/videos", "/business/video"],
						i18nKey: "business:c.l.s.leftmenu.demo.video"
					},
					blog: {
						id: "menu.business.blog",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.s.leftmenu.demo.blog"
						}, "Blog"),
						link: "/business/blog/1",
						i18nKey: "business:c.l.s.leftmenu.demo.blog"
					},
					stories: {
						id: "menu.business.stories",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.s.leftmenu.demo.story"
						}, "Success Stories"),
						link: "/business/successstory/list",
						i18nKey: "business:c.l.s.leftmenu.demo.story"
					},
					colorReport: {
						id: "menu.business.color.report",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.color.report"
						}, "Beauty Trend Report"),
						link: "/business/color-list",
						i18nKey: "business:c.l.f.menudefinitions.color.report"
					},
					partners: {
						id: "menu.business.partners",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.partners"
						}, "Partners"),
						link: "/business/partners",
						i18nKey: "business:c.l.f.menudefinitions.partners"
					},
					btf: {
						id: "menu.business.btf",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.btf"
						}, "Beauty Tech Forum Master Series"),
						link: "/business/beauty-tech-forum-master-class",
						i18nKey: "business:c.l.f.menudefinitions.btf"
					},
					education: {
						id: "menu.business.education",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.education"
						}, "Beauty Tech Forum Education Series"),
						link: "/business/education-series",
						i18nKey: "business:c.l.f.menudefinitions.education"
					},
					gbtf2021: {
						id: "menu.business.gbtf2021",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.gbtf2021"
						}, "Beauty Tech Forum 2022"),
						link: "/business/global-beauty-tech-forum",
						i18nKey: "business:c.l.f.menudefinitions.gbtf2021"
					},
					btfVirtual: {
						id: "menu.business.btfVirtual",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.gbtf2021"
						}, "Beauty Tech Forum 2022"),
						i18nKey: "business:c.l.f.menudefinitions.btfVirtual"
					},
					btfVirtualUS: {
						id: "menu.business.btfVirtual-us",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.btfVirtual-us"
						}, "Beauty Tech Forum - US"),
						link: "/business/global-beauty-tech-forum",
						i18nKey: "business:c.l.f.menudefinitions.btfVirtual-us"
					},
					btfVirtualFR: {
						id: "menu.business.btfVirtual-fr",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.btfVirtual-fr"
						}, "Beauty Tech Forum - France"),
						link: "/business/global-beauty-tech-forum/fra",
						i18nKey: "business:c.l.f.menudefinitions.btfVirtual-fr"
					},
					btfVirtualJP: {
						id: "menu.business.btfVirtual-jp",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.btfVirtual-jp"
						}, "Beauty Tech Forum - Japan"),
						link: "/business/global-beauty-tech-forum/jpn",
						i18nKey: "business:c.l.f.menudefinitions.btfVirtual-jp"
					},
					btfVirtual2021FR: {
						id: "menu.business.btfVirtual-fr",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.btfVirtual.2021"
						}, "Beauty Tech Forum 2022"),
						link: "/business/global-beauty-tech-forum-2021/fra",
						i18nKey: "business:c.l.f.menudefinitions.btfVirtual.2021"
					},
					aifaceanalyzer: {
						id: "menu.business.ai.face.analyzer",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.ai.face.analyzer"
						}, "AI Face Analyzer"),
						link: "/business/products/ai-face-analyzer",
						i18nKey: "business:c.l.f.menudefinitions.ai.face.analyzer"
					},
					aibearddye: {
						id: "menu.business.ai.beard.dye",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.ai.beard.dye"
						}, "AI Beard Dye and Beard Style"),
						link: "/business/products/ai-beard-dye",
						i18nKey: "business:c.l.f.menudefinitions.ai.beard.dye"
					},
					nailColor: {
						id: "menu.business.ai.beard.dye",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.nail.color"
						}, "Virtual Try-On for Nails"),
						link: "/business/products/ai-nail-color",
						i18nKey: "business:c.l.f.menudefinitions.nail.color"
					},
					ces2022: {
						id: "menu.business.ces2022",
						text: s.a.createElement(i.a, {
							i18nKey: "business:c.l.f.menudefinitions.ces.2022"
						}, "Beauty & Fashion Metaverse"),
						link: "/business/beauty-fashion-metaverse",
						i18nKey: "business:c.l.f.menudefinitions.ces.2022"
					},
					arwatch: {
						id: "menu.business.arwatch",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ar.watch"
						}, "AR Watch Virtual Try-On"),
						link: "/business/products/ar-watch",
						i18nKey: "business:u.c.solutionlinks.ar.watch"
					},
					arring: {
						id: "menu.business.arring",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ar.ring"
						}, "AR Virtual Ring Try-On"),
						link: "/business/products/ar-virtual-ring",
						i18nKey: "business:u.c.solutionlinks.ar.ring"
					},
					arbracelet: {
						id: "menu.business.arbracelet",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ar.bracelet"
						}, "AR Bracelet Virtual Try-On"),
						link: "/business/products/ar-bracelet",
						i18nKey: "business:u.c.solutionlinks.ar.bracelet"
					},
					arearring: {
						id: "menu.business.arbracelet",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ar.earring"
						}, "AR Earring Virtual Try-On"),
						link: "/business/products/ar-virtual-earrings",
						i18nKey: "business:u.c.solutionlinks.ar.earring"
					},
					facereshaping: {
						id: "menu.business.face.reshaping",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.face.reshaping"
						}, "AI Face Reshaping"),
						link: "/business/products/face-reshaping",
						i18nKey: "business:u.c.solutionlinks.face.reshaping"
					},
					aipersonality: {
						id: "menu.business.ai.personality",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.ai.personality"
						}, "AI Personality Finder and Product Recommendation"),
						link: "/business/products/ai-personality",
						i18nKey: "business:u.c.solutionlinks.ai.personality"
					},
					background: {
						id: "menu.business.virtual.background",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.solutionlinks.virtual.background"
						}, "AI Virtual Background Changer"),
						link: "/business/products/virtual-background",
						i18nKey: "business:u.c.solutionlinks.virtual.background"
					}
				};
			t.a = r
		},
		132: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return m
			});
			var a = n(7),
				s = n(5),
				i = n.n(s),
				r = n(0),
				o = n.n(r),
				c = n(10),
				u = n(2),
				l = (n(839), n(42));

			function m(e) {
				var t = e.isScrolled,
					s = e.is2b,
					m = e.isNewHeader,
					p = Object(r.useRef)("null"),
					d = s ? "business" : "consumer",
					b = Object(l.a)(),
					f = Object(u.d)(),
					h = f.i18n,
					g = f.t,
					v = Object(r.useState)(!1),
					y = Object(a.a)(v, 2),
					E = y[0],
					k = y[1],
					w = Object(c.useHistory)(),
					O = Object(r.useState)(!1),
					_ = Object(a.a)(O, 2),
					x = _[0],
					S = _[1],
					j = Object(r.useState)(""),
					A = Object(a.a)(j, 2),
					T = A[0],
					C = A[1],
					N = "en" !== h.language && h.language ? "/".concat(h.language.replace("_", "-").toLowerCase()) : "";
				return b <= 600 ? o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					className: "pf-header-mobile-search--icon",
					alt: "",
					src: n(370),
					onClick: function() {
						T && (window.location.href = "".concat(N, "/").concat(d, "/gcse?q=").concat(T))
					}
				}), o.a.createElement("input", {
					className: "pf-header-mobile-search",
					type: "text",
					name: "search",
					placeholder: g("business:c.l.g.enter.keywords", "Enter keywords"),
					onKeyUp: function(e) {
						"Enter" === e.key && (window.location.href = "".concat(N, "/").concat(d, "/gcse?q=").concat(e.target.value)), C(e.target.value)
					}
				})) : o.a.createElement("div", {
					className: "pf-header__search"
				}, o.a.createElement("img", {
					alt: "",
					src: n(E || t && m ? 840 : 370),
					onClick: function(e) {
						e.stopPropagation(), T && E ? window.location.href = "".concat(N, "/").concat(d, "/gcse?q=").concat(T) : E ? k(!1) : (k(!0), S(!0), setTimeout(function() {
							p.current.focus()
						}, 400))
					}
				}), o.a.createElement("input", {
					ref: p,
					className: i()({
						"pf-header__search-active": E,
						"pf-header__search-inactive": !E && x
					}),
					style: {
						backgroundColor: t && "#f2f2f2"
					},
					type: "text",
					name: "search",
					placeholder: g("business:c.l.g.enter.keywords", "Enter keywords"),
					onKeyUp: function(e) {
						S(!0), "Enter" === e.key && w.push("".concat(N, "/").concat(d, "/gcse?q=").concat(e.target.value)), C(e.target.value)
					}
				}))
			}
		},
		135: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(2),
				r = {
					home: {
						id: "menu.consumer.home",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.applinks.home"
						}, "Our Apps"),
						link: "/consumer/apps",
						i18nKey: "consumer:u.c.applinks.home"
					},
					all: {
						id: "menu.consumer.all",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.applinks.all"
						}, "All Apps"),
						link: "/consumer/apps",
						i18nKey: "consumer:u.c.applinks.all"
					},
					allApps: {
						id: "menu.consumer.allapps",
						iosUrl: "https://apps.apple.com/us/developer/perfect-corp/id1018779369",
						androidUrl: "https://play.google.com/store/apps/dev?id=5286790089270932286&hl=en"
					},
					ycf: {
						id: "menu.consumer.ycf",
						bgColor: "#efb407",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.applinks.ycf"
						}, "YouCam Fun"),
						link: "/consumer/apps/ycf",
						i18nKey: "consumer:u.c.applinks.ycf",
						iosUrl: "https://apps.apple.com/app/id1136617049?pt=117886073&ct=PFwebsite_consumer&mt=8",
						cnIosUrl: "https://apps.apple.com/cn/app/id1136617049",
						androidUrl: "https://play.google.com/store/apps/details?id=com.perfectcorp.ycf&referrer=utm_source%3DPFwebsite%26utm_medium%3DPFwebsite%26utm_campaign%3DPFwebsite_consumer",
						cnAndroidUrl: "https://shouji.baidu.com/software/29148122.html",
						bannerIOSUrl: "https://apps.apple.com/us/app/youcam-fun-live-face-filters/id1136617049?pt=117886073&ct=PFWebsite-mobile-banner&mt=8",
						bannerAndroidUrl: "https://play.google.com/store/apps/details?id=com.perfectcorp.ycf&referrer=utm_source%3DPFWebsite%26utm_medium%3DPFWebsite%26utm_campaign%3DPFWebsite-mobile-banner",
						qrcode: n(841),
						version: "1.15.10"
					},
					ycn: {
						id: "menu.consumer.ycn",
						bgColor: "#ff844a",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.applinks.ycn"
						}, "YouCam Nail"),
						link: "/consumer/apps/ycn",
						i18nKey: "consumer:u.c.applinks.ycn",
						iosUrl: "https://apps.apple.com/app/id1051710880?pt=117886073&ct=PFwebsite_consumer&mt=8",
						cnIosUrl: "https://apps.apple.com/cn/app/id1051710880",
						androidUrl: "https://play.google.com/store/apps/details?id=com.perfectcorp.ycn&referrer=utm_source%3DPFwebsite%26utm_medium%3DPFwebsite%26utm_campaign%3DPFwebsite_consumer",
						cnAndroidUrl: "https://shouji.baidu.com/software/29147030.html",
						bannerIOSUrl: "https://apps.apple.com/us/app/youcam-nails-manicure-salon/id1051710880?pt=117886073&ct=PFWebsite-mobile-banner&mt=8",
						bannerAndroidUrl: "https://play.google.com/store/apps/details?id=com.perfectcorp.ycn&referrer=utm_source%3DPFWebsite%26utm_medium%3DPFWebsite%26utm_campaign%3DPFWebsite-mobile-banner",
						qrcode: n(842),
						version: "1.25.11"
					},
					ycp: {
						id: "menu.consumer.ycp",
						bgColor: "#882075",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.applinks.ycp"
						}, "YouCam Perfect"),
						link: "/consumer/apps/ycp",
						i18nKey: "consumer:u.c.applinks.ycp",
						iosUrl: "https://youperfect.page.link/PFwebsite_consumer_ycp_download",
						cnIosUrl: "https://apps.apple.com/cn/app/id1522816615",
						androidUrl: "https://youperfect.page.link/PFwebsite_consumer_ycp_download_android",
						cnAndroidUrl: "https://shouji.baidu.com/software/29377979.html",
						bannerIOSUrl: "https://youperfect.page.link/PFwebsite_top_banner_iOS",
						bannerAndroidUrl: "https://youperfect.page.link/PFwebsite_top_banner_And",
						appsPageBannerIOSUrl: "https://youperfect.page.link/PFwebsite_top_prod_iOS",
						appsPageBannerAndroidUrl: "https://youperfect.page.link/PFwebsite_top_prod_And",
						qrcode: n(843)
					},
					ycv: {
						id: "menu.consumer.ycv",
						bgColor: "#212529",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.applinks.ycv"
						}, "YouCam Video"),
						link: "/consumer/apps/ycv",
						i18nKey: "consumer:u.c.applinks.ycv",
						iosUrl: "https://youvideo.page.link/PFwebsite_consumer_ycv_download",
						androidUrl: "https://youvideo.page.link/PFwebsite_ycv_android",
						bannerIOSUrl: "https://youvideo.page.link/PFwebsite_top_banner_iOS",
						bannerAndroidUrl: "https://youvideo.page.link/PFwebsite_top_banner_And",
						appsPageBannerIOSUrl: "https://youvideo.page.link/PFwebsite_top_prod_iOS",
						appsPageBannerAndroidUrl: "https://youvideo.page.link/PFwebsite_top_prod_And"
					},
					ycc: {
						id: "menu.consumer.ycc",
						bgColor: "#212529",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.applinks.ycc"
						}, "YouCam Cut"),
						link: "/consumer/apps/ycc",
						i18nKey: "consumer:u.c.applinks.ycc",
						androidUrl: "https://play.google.com/store/apps/details?id=com.perfectcorp.ycv&referrer=utm_source%3DPFwebsite%26utm_medium%3DPFwebsite%26utm_campaign%3DPFwebsite_consumer",
						bannerUrl: "https://play.google.com/store/apps/details?id=com.perfectcorp.ycv&referrer=utm_source%3DPFWebsite%26utm_medium%3DPFWebsite%26utm_campaign%3DPFWebsite-mobile-banner"
					},
					ymk: {
						id: "menu.consumer.ymk",
						bgColor: "#e53874",
						text: s.a.createElement(i.a, {
							i18nKey: "consumer:u.c.applinks.ymk"
						}, "YouCam Makeup"),
						link: "/consumer/apps/ymk",
						i18nKey: "consumer:u.c.applinks.ymk",
						iosUrl: "https://youmakeup.page.link/PFwebsite_consumer_download",
						cnIosUrl: "https://apps.apple.com/cn/app/id1522818382",
						androidUrl: "https://youmakeup.page.link/PFwebsite_ymk_android",
						cnAndroidUrl: "https://shouji.baidu.com/software/29440613.html",
						bannerIOSUrl: "https://youmakeup.page.link/PFwebsite_top_banner_iOS",
						bannerAndroidUrl: "https://youmakeup.page.link/PFwebsite_top_banner_And",
						appsPageBannerIOSUrl: "https://youmakeup.page.link/PFwebsite_top_prod_iOS",
						appsPageBannerAndroidUrl: "https://youmakeup.page.link/PFwebsite_top_prod_And",
						qrcode: n(844),
						version: "5.62.0"
					}
				};
			t.a = r
		},
		138: function(e, t, n) {
			"use strict";
			var a = n(16),
				s = n(9),
				i = n.n(s),
				r = n(18),
				o = n(85),
				c = n.n(o),
				u = n(25),
				l = n.n(u),
				m = n(90),
				p = n(107),
				d = {
					buildQs: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return "?" + c.a.stringify(e)
					},
					listCourse: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, l()("/smb-frontend/course/list-sessions.action" + d.buildQs(t), {
											method: "GET"
										});
									case 3:
										return n = e.sent, e.abrupt("return", n.json());
									case 7:
										return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", Promise.reject());
									case 10:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 7]
							])
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					listSessionsByCourseId: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, l()("/smb-frontend/course/list-sessions-by-course-id.action" + d.buildQs(t), {
											method: "GET"
										});
									case 3:
										return n = e.sent, e.abrupt("return", n.json());
									case 7:
										return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", Promise.reject());
									case 10:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 7]
							])
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					querySession: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, l()("/smb-frontend/course/query-session.action" + d.buildQs(t), {
											method: "GET"
										});
									case 3:
										return n = e.sent, e.abrupt("return", n.json());
									case 7:
										return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", Promise.reject());
									case 10:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 7]
							])
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					SubmitWebinar: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n, s;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = p.a.getSupportSourceUtm(), e.next = 3, l()("/smb-frontend/support/create-request.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify({
												support: Object(a.a)({}, t, {
													sourceUtm: n
												})
											})
										});
									case 3:
										if (!(s = e.sent).ok) {
											e.next = 9;
											break
										}
										return m.a.sendBeautyTechForumPardotSubmitSuccess(), e.next = 8, s.json();
									case 8:
										return e.abrupt("return", e.sent);
									case 9:
										return e.abrupt("return", Promise.reject({
											status: s.status,
											statusText: s.statusText
										}));
									case 10:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					querySpeaker: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, l()("/smb-frontend/course/query-speaker.action" + d.buildQs(t), {
											method: "GET"
										});
									case 3:
										return n = e.sent, e.abrupt("return", n.json());
									case 7:
										return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", Promise.reject());
									case 10:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 7]
							])
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}()
				};
			t.a = d
		},
		160: function(e, t, n) {},
		161: function(e, t, n) {
			"use strict";
			var a = n(1);
			t.a = Object(a.a)(function() {
				return n.e(173).then(n.bind(null, 927))
			})
		},
		168: function(e, t, n) {
			e.exports = n.p + "static/media/background.582ae9f8.jpg"
		},
		169: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return c
			});
			var a = n(5),
				s = n.n(a),
				i = n(2),
				r = n(0),
				o = n.n(r);

			function c(e) {
				var t = e.highlight,
					n = void 0 !== t && t,
					a = e.style,
					r = void 0 === a ? {} : a;
				return o.a.createElement("span", {
					className: s()({
						"agileFace--registered": !0,
						highlight: n
					}),
					style: r
				}, o.a.createElement(i.a, {
					i18nKey: "business:u.c.solutionlinks.agile.face"
				}, "AgileFace", o.a.createElement("i", {
					style: {
						display: "inline-block",
						transform: "scale(0.7)",
						fontStyle: "normal",
						verticalAlign: "super",
						position: "relative",
						right: "2px",
						lineHeight: "1"
					}
				}, "\xae")))
			}
		},
		170: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return c
			});
			var a = n(5),
				s = n.n(a),
				i = n(2),
				r = n(0),
				o = n.n(r);

			function c(e) {
				var t = e.highlight,
					n = void 0 !== t && t,
					a = e.style,
					r = void 0 === a ? {} : a;
				return o.a.createElement("span", {
					className: s()({
						"agileFace--registered": !0,
						highlight: n
					}),
					style: r
				}, o.a.createElement(i.a, {
					i18nKey: "business:u.c.solutionlinks.agile.hand"
				}, "AgileHand", o.a.createElement("i", {
					style: {
						display: "inline-block",
						transform: "scale(0.7)",
						fontStyle: "normal",
						verticalAlign: "super",
						position: "relative",
						right: "2px",
						lineHeight: "1"
					}
				}, "TM")))
			}
		},
		171: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return c
			});
			var a = n(33),
				s = n(0),
				i = n.n(s),
				r = n(4),
				o = "".concat("https://bcm-media.beautycircle.com/pfweb/assets/images");

			function c(e) {
				var t = e.className,
					n = e.platform,
					s = void 0 === n ? "mobile" : n,
					c = e.filename,
					b = void 0 === c ? "" : c,
					f = e.alt,
					h = void 0 === f ? "" : f,
					g = e.style,
					v = e.onLoad,
					y = void 0 === v ? function() {} : v,
					E = e.small,
					k = void 0 !== E && E,
					w = Object(a.a)(e, ["className", "platform", "filename", "alt", "style", "onLoad", "small"]);
				return r.a.isPictureTagSupported() ? k ? i.a.createElement("picture", null, "mobile" === s ? p(b) : l(b), i.a.createElement("img", Object.assign({
					as: "image",
					className: t,
					alt: h,
					style: g,
					src: "".concat(o, "/").concat(b),
					onLoad: y
				}, w))) : i.a.createElement("picture", null, "mobile" === s ? d(b) : m(b), i.a.createElement("img", Object.assign({
					rel: "preload",
					as: "image",
					className: t,
					alt: h,
					style: g,
					src: "".concat(o, "/").concat(b),
					onLoad: y
				}, w))) : i.a.createElement("img", Object.assign({
					as: "image",
					alt: h,
					className: t,
					src: u(b, "mobile" === s ? 828 : 2732),
					style: g
				}, w))
			}
			var u = function(e, t) {
					return "".concat(o, "/").concat(function(e) {
						return e.substring(0, e.lastIndexOf("."))
					}(e), "-").concat(t, ".").concat(function(e) {
						return e.split(".").pop()
					}(e))
				},
				l = function(e) {
					return [i.a.createElement("source", {
						key: "".concat(e, "-s-1440"),
						srcSet: "".concat(u(e, 1440)),
						media: "(max-width:1024px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-2732"),
						srcSet: "".concat(u(e, 2732)),
						media: "(min-width:1024px)"
					})]
				},
				m = function(e) {
					return [i.a.createElement("source", {
						key: "".concat(e, "-s-768"),
						srcSet: "".concat(u(e, 768), ", ").concat(u(e, 768), " 2x"),
						media: "(max-width:375px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-768-2"),
						srcSet: "".concat(u(e, 768), ", ").concat(u(e, 1024), " 2x"),
						media: "(max-width:414px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-768-3"),
						srcSet: "".concat(u(e, 768), ", ").concat(u(e, 1536), " 2x"),
						media: "(max-width:768px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-1024"),
						srcSet: "".concat(u(e, 1024), ", ").concat(u(e, 2048), " 2x"),
						media: "(min-width:768px) and (max-width:1024px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-1280"),
						srcSet: "".concat(u(e, 1280)),
						media: "(min-width:1024px) and (max-width:1280px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-1366"),
						srcSet: "".concat(u(e, 1366), ", ").concat(u(e, 2732), " 2x"),
						media: "(min-width:1280px) and (max-width:1366px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-1440"),
						srcSet: "".concat(u(e, 1440)),
						media: "(min-width:1366px) and (max-width:1440px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-1536"),
						srcSet: "".concat(u(e, 1536)),
						media: "(min-width:1440px) and (max-width:1536px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-1600"),
						srcSet: "".concat(u(e, 1600)),
						media: "(min-width:1536px) and (max-width:1600px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-1920"),
						srcSet: "".concat(u(e, 1920)),
						media: "(min-width:1600px) and (max-width:1920px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-2048"),
						srcSet: "".concat(u(e, 2048)),
						media: "(min-width:1920px) and (max-width:2048px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-2732"),
						srcSet: "".concat(u(e, 2732)),
						media: "(min-width:2048px)"
					})]
				},
				p = function(e) {
					return [i.a.createElement("source", {
						key: "".concat(e, "-s-414"),
						srcSet: "".concat(u(e, 414), ", ").concat(u(e, 828), " 2x"),
						media: "(max-width:414px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-828"),
						srcSet: "".concat(u(e, 828)),
						media: "(min-width:414px)"
					})]
				},
				d = function(e) {
					return [i.a.createElement("source", {
						key: "".concat(e, "-s-320"),
						srcSet: "".concat(u(e, 320), ", ").concat(u(e, 640), " 2x"),
						media: "(max-width:320px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-360"),
						srcSet: "".concat(u(e, 360), ", ").concat(u(e, 720), " 2x"),
						media: "(min-width:320px) and (max-width:360px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-375"),
						srcSet: "".concat(u(e, 375), ", ").concat(u(e, 750), " 2x"),
						media: "(min-width:360px) and (max-width:375px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-414"),
						srcSet: "".concat(u(e, 414), ", ").concat(u(e, 828), " 2x"),
						media: "(min-width:375px) and (max-width:414px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-640"),
						srcSet: "".concat(u(e, 640)),
						media: "(min-width:414px) and (max-width:640px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-720"),
						srcSet: "".concat(u(e, 720)),
						media: "(min-width:640px) and (max-width:720px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-750"),
						srcSet: "".concat(u(e, 750)),
						media: "(min-width:720px) and (max-width:750px)"
					}), i.a.createElement("source", {
						key: "".concat(e, "-s-828"),
						srcSet: "".concat(u(e, 828)),
						media: "(min-width:750px)"
					})]
				}
		},
		199: function(e, t, n) {
			"use strict";
			var a = n(7),
				s = n(0),
				i = n.n(s),
				r = (n(822), n(16)),
				o = n(91),
				c = n(2),
				u = n(8),
				l = n(12),
				m = n(66),
				p = n(5),
				d = n.n(p),
				b = n(108),
				f = n.n(b),
				h = (n(824), n(4)),
				g = n(117),
				v = n(106),
				y = n(41),
				E = n(105),
				k = n(262),
				w = n(169),
				O = n(170),
				_ = n(132),
				x = function(e) {
					var t = e.isShow,
						n = e.color,
						a = e.style,
						s = void 0 === a ? {} : a;
					return "grey" !== n || t ? i.a.createElement("div", {
						className: d()({
							"pf-header-mobile-business-menus__arrow": !0,
							up: t,
							down: !t
						}),
						style: s
					}) : i.a.createElement("div", {
						className: " pf-header-mobile-business-menus__arrow grey",
						style: s
					})
				},
				S = !1,
				j = !1,
				A = !1,
				T = !1;

			function C(e) {
				var t = e.setPopupMenu,
					n = Object(c.d)().i18n,
					p = h.a.isChs(n.language),
					b = [l.a.virtualmakeup, l.a.youcamtutorial, l.a.aishadefinder, l.a.aiproductrecommendation, l.a.aifaceanalyzer, Object(r.a)({}, l.a.instorebarcode, {
						showDivider: !0
					}), l.a.virtualaccessories, Object(r.a)({}, l.a.ar3deyewear, {
						showDivider: !0
					}), l.a.arring, l.a.arbracelet, l.a.arearring, Object(r.a)({}, l.a.arwatch, {
						showDivider: !0
					}), Object(r.a)({}, l.a.arskindiagnostic, {
						showDivider: !0
					}), Object(r.a)({}, l.a.livehaircolor, {
						showDivider: !0
					}), Object(r.a)({}, l.a.aibearddye, {
						showDivider: !0
					}), l.a.aishadefinder, l.a.arskindiagnostic, l.a.aiproductrecommendation, l.a.livestreaming, l.a.ba1on1, Object(r.a)({}, l.a.liveartraining, {
						showDivider: !0
					}), Object(r.a)({}, l.a.nailColor, {
						showDivider: !0
					})],
					C = f()().location,
					N = Object(s.useState)(S),
					P = Object(a.a)(N, 2),
					K = P[0],
					I = P[1],
					B = Object(s.useState)(j),
					L = Object(a.a)(B, 2),
					R = L[0],
					F = L[1],
					D = Object(s.useContext)(o.a).isSignIn,
					M = Object(s.useState)(A),
					U = Object(a.a)(M, 2),
					H = U[0],
					G = U[1],
					V = Object(s.useState)(T),
					Y = Object(a.a)(V, 2),
					z = Y[0],
					W = Y[1],
					J = v.a.isBtfEnabled(),
					q = v.a.isBtfvEnabled(),
					Q = v.a.isEducationEnabled(),
					X = h.a.isChs(n.language),
					Z = Object(s.useRef)(null),
					$ = [m.a.youcam4web, Object(r.a)({}, m.a.sdk, {
						showDivider: !0
					}), Object(r.a)({}, m.a.instoreconsultation, {
						showDivider: !0
					}), Object(r.a)({}, m.a.applisting, {
						showDivider: !0
					}), m.a.youcam4google, m.a.virtualmakeupsnapchat, Object(r.a)({}, m.a.virtualmakeupinstagram, {
						showDivider: !0
					}), m.a.wechatminiprogram, m.a.taobaominiprogram, m.a.douyinminiprogram],
					ee = [l.a.videos, g.a.isEnabled() && l.a.blog, l.a.stories, "zh_CN" !== n.language && l.a.colorReport, !X && l.a.partners].filter(function(e) {
						return e
					}),
					te = [J && l.a.btf, Q && l.a.education, "fr" === n.language && l.a.btfVirtual2021FR, "en" === n.language && l.a.gbtf2021, q && l.a.btfVirtual, "en" === n.language && l.a.ces2022].filter(function(e) {
						return e
					}),
					ne = [("fr" === n.language || "ja" === n.language) && l.a.btfVirtualUS, "fr" === n.language && l.a.btfVirtualFR, "ja" === n.language && l.a.btfVirtualJP].filter(function(e) {
						return e
					});
				h.a.isChs(n.language) && $.splice(2, 1);
				var ae = function() {
						return t(!1)
					},
					se = function(e) {
						return -1 !== C.pathname.indexOf(e)
					},
					ie = n.language ? n.language.toLowerCase().replace("_", "-") : "en";
				return i.a.createElement("div", {
					className: "pf-header-mobile-business-menus"
				}, i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__item"
				}, i.a.createElement(_.a, {
					is2b: !0
				})), i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__item",
					onClick: function() {
						return S = e = !K, void I(e);
						var e
					}
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.popupmenu.enterprise"
				}, "Enterprise"), i.a.createElement(x, {
					isShow: K,
					color: "grey"
				})), i.a.createElement("div", {
					className: d()({
						"mobile-business-menu": !0,
						"pf-header-mobile-business-menus--collapse": !K
					})
				}, i.a.createElement("div", {
					className: "mobile-business-menu__title"
				}, i.a.createElement(c.a, {
					i18nKey: "business:p.b.s.e.s.menu.products"
				}, "Products")), b.map(function(e, t) {
					return i.a.createElement(i.a.Fragment, {
						key: "".concat(e.link, "-").concat(t)
					}, i.a.createElement(u.a, {
						to: e.link,
						className: d()({
							"mobile-business-menu__item": !0,
							"mobile-business-menu__item--active": se(e.link)
						}),
						onClick: ae
					}, i.a.createElement(c.a, {
						i18nKey: e.i18nKey
					})), e.showDivider && i.a.createElement("div", {
						className: "mobile-business-menu__divider"
					}))
				}), i.a.createElement("div", {
					className: "mobile-business-menu__title"
				}, i.a.createElement(c.a, {
					i18nKey: "business:p.b.s.e.s.menu.services"
				}, "Services")), $.map(function(e, t) {
					return i.a.createElement(i.a.Fragment, {
						key: "".concat(e.link, "-").concat(t)
					}, i.a.createElement(u.a, {
						key: e.link,
						to: e.link,
						className: d()({
							"mobile-business-menu__item": !0,
							"mobile-business-menu__item--active": se(e.link)
						}),
						onClick: ae
					}, i.a.createElement(c.a, {
						i18nKey: e.i18nKey
					})), e.showDivider && i.a.createElement("div", {
						className: "mobile-business-menu__divider"
					}))
				}), i.a.createElement(u.a, {
					to: "/business/solutions/enterprise",
					className: "mobile-business-menu__viewall",
					onClick: function() {
						return ae()
					}
				}, i.a.createElement(c.a, {
					i18nKey: "business:p.b.s.e.s.view.all"
				}, "View all products")), i.a.createElement(u.a, {
					to: "/business/contact-us/sales?numberOfEmployees=C999",
					className: "mobile-business-menu__contact",
					onClick: function() {
						return ae()
					}
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.f.menudefinitions.contact.sales"
				}, "Contatct Sales"))), i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__item": !0,
						"pf-header-mobile-business-menus__item--active": se("/business/solutions/smb"),
						"pf-header-mobile-business-menus--collapse": H
					})
				}, i.a.createElement(u.a, {
					to: "/business/solutions/smb",
					onClick: ae
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.popupmenu.smb"
				}, "Small and Medium Business"))), !p && i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__item"
				}, i.a.createElement(u.a, {
					to: "/nft?is2b=true",
					onClick: ae
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.nft.header.nft"
				}, "NFT"))), i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__item": !0,
						"pf-header-mobile-business-menus__item--active": se("/business/plan"),
						"pf-header-mobile-business-menus--collapse": H
					})
				}, i.a.createElement(u.a, {
					to: "/business/plan",
					onClick: ae
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.leftmenu.plan.pricing"
				}, "Plan & Pricing"))), i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__item": !0,
						"pf-header-mobile-business-menus--collapse": H,
						"pf-header-mobile-business-menus__item--opened": z
					}),
					onClick: function() {
						return T = e = !z, void W(e);
						var e
					}
				}, i.a.createElement(c.a, {
					i18nKey: "consumer:u.c.technologylinks.home"
				}, "Technologies"), i.a.createElement(x, {
					isShow: z
				})), [E.a.agileface, E.a.agilehand, E.a.makeupar, E.a.live3dfacear, E.a.skincarear, E.a.faceai].map(function(e, t) {
					return i.a.createElement("div", {
						key: "menu4-" + t,
						className: d()({
							"pf-header-mobile-business-menus__subitem-category": !0,
							"pf-header-mobile-business-menus__subitem-category-item--active": se(e.link),
							"pf-header-mobile-business-menus--collapse": !z || H
						})
					}, i.a.createElement(u.a, {
						to: e.link,
						onClick: ae
					}, "business:u.c.solutionlinks.agile.face" === (n = e.i18nKey) ? i.a.createElement(w.a, null) : "business:u.c.solutionlinks.agile.hand" === n ? i.a.createElement(O.a, null) : i.a.createElement(c.a, {
						i18nKey: n
					})));
					var n
				}), i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__item": !0,
						"pf-header-mobile-business-menus__item--active": se("/business/showcase"),
						"pf-header-mobile-business-menus--collapse": H
					}),
					onClick: function() {
						window.location.href = k.a.addLangPrefix("/business/showcase/lip-color")
					}
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.leftmenu.demo.store"
				}, "Demo Store")), i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__item": !0,
						"pf-header-mobile-business-menus__item--opened": H
					}),
					onClick: function() {
						var e;
						A = e = !H, e && S && (S = !1, I(!1)), G(e)
					},
					ref: Z
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.leftmenu.demo.resources"
				}, "Resources"), " ", i.a.createElement(x, {
					isShow: H
				})), i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__resources": !0,
						"pf-header-mobile-business-menus--collapse": !H
					})
				}, ee.map(function(e) {
					return i.a.createElement(u.a, {
						key: e.id,
						to: e.link,
						className: d()({
							"pf-header-mobile-business-menus__resource": !0,
							"pf-header-mobile-business-menus__resource--active": se(e.link)
						}),
						onClick: ae
					}, i.a.createElement(c.a, {
						i18nKey: e.i18nKey
					}))
				}), te.map(function(e) {
					return "en" !== n.language && "menu.business.btfVirtual" === e.id ? i.a.createElement("div", {
						key: e.id,
						className: d()({
							"pf-header-mobile-business-menus__resource": !0,
							"pf-header-mobile-business-menus__resource--active": se("/business/global-beauty-tech-forum")
						}),
						onClick: function() {
							return j = e = !R, void F(e);
							var e
						}
					}, i.a.createElement(c.a, {
						i18nKey: e.i18nKey
					}), "en" !== n.language && "menu.business.btfVirtual" === e.id && i.a.createElement(x, {
						color: "grey",
						style: {
							marginLeft: "8px"
						},
						isShow: R
					})) : i.a.createElement(u.a, {
						key: e.id,
						to: e.link,
						className: d()({
							"pf-header-mobile-business-menus__resource": !0,
							"pf-header-mobile-business-menus__resource--active": se(e.link)
						}),
						onClick: ae
					}, i.a.createElement(c.a, {
						i18nKey: e.i18nKey
					}))
				}), R && i.a.createElement("div", {
					style: {
						borderLeft: "2px solid #e5e5e5",
						marginLeft: "16px"
					}
				}, ne.map(function(e) {
					return i.a.createElement(u.a, {
						key: e.id,
						to: e.link,
						className: d()({
							"pf-header-mobile-business-menus__resource--active": se(e.link),
							"pf-header-mobile-business-menus__resource__sub": !0
						}),
						onClick: ae,
						isNewTab: !0
					}, i.a.createElement(c.a, {
						i18nKey: e.i18nKey
					}))
				})), i.a.createElement("div", {
					style: {
						borderBottom: "2px solid #e5e5e5",
						margin: "25px -10% 30px"
					}
				}), i.a.createElement("div", null, i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__featured"
				}, i.a.createElement(u.a, {
					to: y.b.post[ie] && y.b.post[ie].pathname,
					style: {
						backgroundImage: y.b.post[ie] && "url(".concat(y.b.post[ie].imageUrl, ")")
					},
					className: "pf-header-mobile-business-menus__featured__img",
					onClick: ae
				}), i.a.createElement("div", {
					style: {
						width: "70%"
					}
				}, i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__featured__type"
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.resources.featured.post"
				}, "Featured Blog Post")), i.a.createElement(u.a, {
					to: y.b.post[ie] && y.b.post[ie].pathname,
					className: "pf-header-mobile-business-menus__featured__title",
					onClick: ae
				}, y.b.post[ie] && y.b.post[ie].title), i.a.createElement(u.a, {
					to: "/business/blog",
					className: "pf-header-mobile-business-menus__featured__link",
					onClick: ae
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.resources.more.blog.posts"
				}, "More Blog Posts"), " ", ">"))), i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__featured"
				}, i.a.createElement(u.a, {
					to: y.b.video[ie] && y.b.video[ie].pathname,
					style: {
						backgroundImage: y.b.video[ie] && "url(".concat(y.b.video[ie].imageUrl, ")")
					},
					className: "pf-header-mobile-business-menus__featured__img",
					onClick: ae
				}), i.a.createElement("div", {
					style: {
						width: "70%"
					}
				}, i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__featured__type"
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.resources.featured.video"
				}, "Featured Video")), i.a.createElement(u.a, {
					to: y.b.video[ie] && y.b.video[ie].pathname,
					className: "pf-header-mobile-business-menus__featured__title",
					onClick: ae
				}, y.b.video[ie] && y.b.video[ie].title), i.a.createElement(u.a, {
					to: "/business/videos",
					className: "pf-header-mobile-business-menus__featured__link",
					onClick: ae
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.resources.more.video"
				}, "More Videos"), " ", ">"))))), "en" === n.language && i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__item": !0,
						"pf-header-mobile-business-menus__item--active": se("/business/investors"),
						"pf-header-mobile-business-menus--collapse": H
					})
				}, i.a.createElement(u.a, {
					to: "/business/investors",
					onClick: ae
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.leftmenu.investors"
				}, "Investors"))), !D && i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__item": !0,
						"pf-header-mobile-business-menus__item--active": se("/business/user/sign-in")
					})
				}, i.a.createElement(u.a, {
					to: "/business/user/sign-in",
					onClick: ae
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.s.rightmenu.sign.in"
				}, "Sign In"))), !D && i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-business-menus__item": !0,
						"pf-header-mobile-business-menus__item-trial": !0,
						"pf-header-mobile-business-menus__item--active": se("/business/user/free-trial")
					})
				}, i.a.createElement(u.a, {
					to: "/business/user/free-trial",
					onClick: ae
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.h.mobile.business.start.trial"
				}, "Start free trial"))))
			}
			var N = n(135),
				P = (n(371), n(10)),
				K = "";

			function I(e) {
				var t = e.setPopupMenu,
					n = Object(c.d)().i18n,
					r = Object(s.useState)(K),
					o = Object(a.a)(r, 2),
					l = o[0],
					m = o[1],
					p = f()().location,
					b = Object(P.useHistory)(),
					g = h.a.isChs(n.language),
					v = function() {
						return "apps" === l
					},
					y = "en" !== n.language && n.language ? "/".concat(n.language.replace("_", "-").toLowerCase()) : "";
				return i.a.createElement("div", {
					className: "pf-header-mobile-consumer-menus"
				}, i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-consumer-menus__item": !0
					})
				}, i.a.createElement(_.a, {
					is2b: !1
				})), i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-consumer-menus__item": !0,
						"pf-header-mobile-consumer-menus__item--opened": v()
					}),
					onClick: function() {
						return function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "apps",
								t = l === e ? "" : e;
							K = t, m(t)
						}("apps")
					}
				}, n.t("consumer:u.c.applinks.home", "Our Apps"), v() ? i.a.createElement("i", {
					className: "fa fa-caret-up pf-header-mobile-consumer-menus__icon"
				}) : i.a.createElement("i", {
					className: "fa fa-caret-down pf-header-mobile-consumer-menus__icon"
				})), v() && h.a.getConsumerAppsByLanguage(n.language).map(function(e, a) {
					return i.a.createElement("div", {
						key: "menu-" + a,
						className: d()({
							"pf-header-mobile-consumer-menus__subitem": !0,
							"pf-header-mobile-consumer-menus__subitem--active": (s = N.a[e].link, p.pathname === s)
						})
					}, i.a.createElement(u.a, {
						to: N.a[e].link,
						onClick: function() {
							return t(!1)
						}
					}, n.t(N.a[e].i18nKey, N.a[e].text)));
					var s
				}), i.a.createElement("div", {
					className: d()({
						"pf-header-mobile-consumer-menus__item": !0
					}),
					onClick: function() {
						b.push("".concat(y, "/consumer/blog")), t(!1)
					}
				}, i.a.createElement("div", {
					className: d()({
						"pf-subheader-4-consumer__left-menu--active": -1 !== p.pathname.indexOf("/consumer/blog"),
						"pf-content-popupmenu1 pf-content-popupmenu1--white": !0
					}),
					style: -1 !== p.pathname.indexOf("/consumer/blog") ? {} : {
						color: "#ffffff"
					}
				}, n.t("consumer:u.c.blog", "Blog"))), !g && i.a.createElement("div", {
					className: "pf-header-mobile-consumer-menus__item",
					onClick: function() {
						b.push("".concat(y, "/nft")), t(!1)
					}
				}, i.a.createElement("div", {
					className: "pf-content-popupmenu1 pf-content-popupmenu1--white"
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.nft.header.nft"
				}, "NFT"))))
			}
			var B = n(1),
				L = Object(B.a)(function() {
					return n.e(219).then(n.bind(null, 3308))
				});

			function R(e) {
				var t = e.imageUrl,
					a = void 0 === t ? "" : t,
					s = e.width,
					o = void 0 === s ? 150 : s,
					c = e.height,
					u = void 0 === c ? 150 : c,
					l = e.borderRadius,
					m = void 0 === l ? 50 : l,
					p = e.style,
					d = void 0 === p ? {} : p,
					b = e.isOriginalSize,
					f = void 0 !== b && b;
				return i.a.createElement("img", {
					alt: "avatar",
					src: a || n(435),
					style: f ? d : Object(r.a)({
						width: o.toString() + "px",
						height: u.toString() + "px",
						borderRadius: m.toString() + "%"
					}, d)
				})
			}
			var F = n(74);

			function D() {
				var e = Object(s.useContext)(o.a).accountSummary,
					t = e.account,
					a = e.customer;
				return i.a.createElement("div", {
					className: "pf-header-mobile-business-menus",
					style: {
						width: "50vw",
						float: "right"
					}
				}, i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__item bg-white",
					style: {
						cursor: "pointer"
					},
					onClick: function() {
						return a.partner ? window.location.href = "https://smb.perfectcorp.com/partner" : window.location.href = "https://smb.perfectcorp.com"
					}
				}, i.a.createElement("div", {
					className: "d-flex flex-nowrap align-items-center"
				}, i.a.createElement(R, {
					imageUrl: t.imageUrl,
					width: 30,
					height: 30,
					style: {
						marginRight: "10px"
					}
				}), i.a.createElement("span", {
					className: "text-dark flex-grow-1",
					style: {
						overflow: "hidden",
						whiteSpace: "nowrap",
						textOverflow: "ellipsis"
					}
				}, "".concat(t.firstName, " ").concat(t.lastName)))), i.a.createElement("div", {
					className: "pf-header-mobile-business-menus__item bg-white",
					style: {
						cursor: "pointer",
						marginBottom: "0"
					},
					onClick: function() {
						return F.b.signOut().then(function() {
							return window.location.reload()
						})
					}
				}, i.a.createElement("img", {
					alt: "sign-out",
					src: n(845),
					style: {
						marginTop: "-6px",
						marginLeft: "5px",
						marginRight: "10px"
					}
				}), i.a.createElement("span", {
					className: "text-dark"
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.h.mobile.avatar.menus.log.out"
				}, "Log out"))))
			}
			var M = n(42),
				U = n(47);
			n(846);

			function H(e) {
				var t = e.setPopupMenu,
					n = "true" === new URLSearchParams(window.location.search).get("is2b"),
					a = Object(c.d)().i18n,
					s = "en" !== a.language && a.language ? "/".concat(a.language.replace("_", "-").toLowerCase()) : "";
				return i.a.createElement("div", {
					className: "pf-header-mobile-consumer-menus"
				}, n && i.a.createElement("div", {
					className: "nft-header-mobile-menus__item",
					onClick: function() {
						return t(!1)
					}
				}, i.a.createElement(U.HashLink, {
					className: d()({
						"nft-content-popupmenu1--active": -1 !== window.location.href.indexOf("/nft#howitwork"),
						"nft-content-popupmenu1--white": !0
					}),
					to: "".concat(s, "/nft?is2b=").concat(n, "#howitwork")
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.nft.header.how.it.works"
				}, "How it works?"))), i.a.createElement("div", {
					className: "nft-header-mobile-menus__item",
					onClick: function() {
						return t(!1)
					}
				}, i.a.createElement(U.HashLink, {
					className: d()({
						"nft-content-popupmenu1--active": -1 !== window.location.href.indexOf("/nft#nftcollection"),
						"nft-content-popupmenu1--white": !0
					}),
					to: "".concat(s, "/nft?is2b=").concat(n, "#nftcollection")
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.nft.header.nft.collection"
				}, "NFT Collection"))), i.a.createElement("div", {
					className: "nft-header-mobile-menus__item",
					onClick: function() {
						return t(!1)
					}
				}, i.a.createElement(U.HashLink, {
					className: d()({
						"nft-content-popupmenu1--active": -1 !== window.location.href.indexOf("/nft#faq"),
						"nft-content-popupmenu1--white": !0
					}),
					to: "".concat(s, "/nft?is2b=").concat(n, "#faq")
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.nft.header.faq"
				}, "FAQ"))), n && i.a.createElement("div", {
					className: "nft-header-mobile-menus__item",
					onClick: function() {
						return t(!1)
					}
				}, i.a.createElement(U.HashLink, {
					className: d()({
						"nft-content-popupmenu1--active": -1 !== window.location.href.indexOf("/nft#contactus"),
						"nft-content-popupmenu1--white": !0
					}),
					to: "".concat(s, "/business/contact-us/sales")
				}, i.a.createElement(c.a, {
					i18nKey: "business:c.l.nft.header.contact.us"
				}, "Contact Us"))))
			}

			function G(e) {
				var t = e.setPopupMenu,
					n = Object(c.d)().i18n,
					a = "fr" === n.language ? "fra" : "ja" === n.language ? "jpn" : "enu";
				return i.a.createElement("div", {
					className: "pf-header-mobile-consumer-menus"
				}, i.a.createElement("div", {
					className: "nft-header-mobile-menus__item",
					onClick: function() {
						return t(!1)
					}
				}, i.a.createElement(U.HashLink, {
					className: d()({
						"nft-content-popupmenu1--active": -1 !== window.location.href.indexOf("/business/global-beauty-tech-forum#speakers") || -1 !== window.location.href.indexOf("/business/global-beauty-tech-forum/".concat(a, "#speakers")),
						"nft-content-popupmenu1--white": !0
					}),
					to: "#speakers"
				}, i.a.createElement(c.a, {
					i18nKey: "business:p.b.g.e.speakers"
				}, "Speakers"))), i.a.createElement("div", {
					className: "nft-header-mobile-menus__item",
					onClick: function() {
						return t(!1)
					}
				}, i.a.createElement(U.HashLink, {
					className: d()({
						"nft-content-popupmenu1--active": -1 !== window.location.href.indexOf("/business/global-beauty-tech-forum#agenda") || -1 !== window.location.href.indexOf("/business/global-beauty-tech-forum/".concat(a, "#agenda")),
						"nft-content-popupmenu1--white": !0
					}),
					to: "#agenda"
				}, i.a.createElement(c.a, {
					i18nKey: "business:p.b.g.e.agenda"
				}, "Agenda"))), i.a.createElement("div", {
					className: "nft-header-mobile-menus__item",
					onClick: function() {
						return t(!1)
					}
				}, i.a.createElement(U.HashLink, {
					className: d()({
						"nft-content-popupmenu1--active": -1 !== window.location.href.indexOf("/business/global-beauty-tech-forum#tickets") || -1 !== window.location.href.indexOf("/business/global-beauty-tech-forum/".concat(a, "#tickets")),
						"nft-content-popupmenu1--white": !0
					}),
					to: "#tickets"
				}, i.a.createElement(c.a, {
					i18nKey: "business:p.b.g.e.tickets"
				}, "Tickets"))))
			}

			function V(e) {
				var t = e.isBusiness,
					r = e.isScrolled,
					c = e.popupMenu,
					u = e.setPopupMenu,
					l = e.isNewHeader,
					m = e.isEvent,
					p = Object(s.useContext)(o.a),
					b = p.isFirstLoaded,
					f = p.accountSummary,
					h = f ? f.account : void 0,
					g = Object(s.useState)(!1),
					v = Object(a.a)(g, 2),
					y = v[0],
					E = v[1],
					k = Object(M.a)(),
					w = window.location.pathname && window.location.pathname.startsWith("/nft"),
					O = m ? i.a.createElement(G, {
						setPopupMenu: u
					}) : w ? i.a.createElement(H, {
						setPopupMenu: u
					}) : t ? i.a.createElement(C, {
						setPopupMenu: u
					}) : i.a.createElement(I, {
						setPopupMenu: u
					});
				return i.a.createElement("div", {
					className: "pf-header__mobile-menus"
				}, b && f && i.a.createElement(L, {
					component: i.a.createElement(D, null),
					theme: "white",
					show: y,
					setPopupMenu: E
				}, i.a.createElement("div", {
					className: "pf-header__mobile-menus-icon"
				}, i.a.createElement(R, {
					imageUrl: h.imageUrl,
					width: 27,
					height: 27,
					style: {
						marginRight: "3px"
					}
				}))), i.a.createElement(L, {
					component: O,
					theme: "white",
					show: c,
					setPopupMenu: u
				}, i.a.createElement("div", {
					className: d()({
						"pf-header__mobile-menus-icon": !0,
						"nft-header__mobile-menus-icon": w || m
					})
				}, i.a.createElement("span", {
					className: "helper"
				}), i.a.createElement("img", {
					alt: "",
					src: n(r && l ? 847 : 848),
					width: k > 400 ? 31 : 25,
					height: "22"
				}))))
			}
			n.d(t, "a", function() {
				return V
			})
		},
		200: function(e, t, n) {
			"use strict";
			var a = n(16),
				s = n(7),
				i = n(0),
				r = n.n(i),
				o = n(166),
				c = n(10),
				u = n(70),
				l = n(13),
				m = n.n(l),
				p = n(21),
				d = n.n(p),
				b = n(163),
				f = n.n(b),
				h = n(400),
				g = n.n(h),
				v = n(263),
				y = n.n(v),
				E = n(60),
				k = n.n(E),
				w = n(401),
				O = n.n(w),
				_ = n(4),
				x = n(9),
				S = n.n(x),
				j = n(18),
				A = n(25),
				T = n.n(A),
				C = n(85),
				N = n.n(C),
				P = {
					buildQs: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return "?" + N.a.stringify(e)
					},
					querySEO: function() {
						var e = Object(j.a)(S.a.mark(function e() {
							var t, n, a = arguments;
							return S.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e.prev = 1, e.next = 4, T()("/smb-frontend/seo/query-meta.action" + P.buildQs(t), {
											method: "GET"
										});
									case 4:
										return n = e.sent, e.abrupt("return", n.json());
									case 8:
										return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", Promise.reject());
									case 11:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[1, 8]
							])
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					querySEOByPath: function() {
						var e = Object(j.a)(S.a.mark(function e() {
							var t, n, a = arguments;
							return S.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e.prev = 1, e.next = 4, T()("/smb-frontend/seo/query-meta-by-path.action" + P.buildQs(t), {
											method: "GET"
										});
									case 4:
										return n = e.sent, e.abrupt("return", n.json());
									case 8:
										return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", Promise.reject());
									case 11:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[1, 8]
							])
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}()
				},
				K = P,
				I = n(117),
				B = n(2);

			function L(e) {
				var t = e.title,
					l = void 0 === t ? u.defaultTitle : t,
					p = e.description,
					b = void 0 === p ? u.defaultDescription : p,
					h = e.datePublished,
					v = void 0 === h ? null : h,
					E = e.dateModified,
					w = void 0 === E ? null : E,
					O = e.author,
					x = void 0 === O ? null : O,
					S = e.translator,
					j = void 0 === S ? null : S,
					A = e.image,
					T = void 0 === A ? n(468) : A,
					C = e.url,
					N = void 0 === C ? "" : C,
					P = e.type,
					L = (void 0 === P && u.defaultType, e.seoType),
					R = void 0 === L ? u.defaultSeoType : L,
					F = e.disabledLanguages,
					D = void 0 === F ? [] : F,
					M = e.metadata,
					U = void 0 === M ? {} : M,
					H = e.breadcrumb,
					G = void 0 === H ? [] : H,
					V = e.post,
					Y = void 0 === V ? {} : V,
					z = e.video,
					W = void 0 === z ? {} : z,
					J = e.lcpImage,
					q = e.keyword,
					Q = void 0 === q ? [] : q,
					X = e.alternates,
					Z = e.canonical,
					$ = Object(B.d)().i18n,
					ee = Object(i.useState)({}),
					te = Object(s.a)(ee, 2),
					ne = te[0],
					ae = te[1],
					se = Object(c.useLocation)(),
					ie = _.a.getPathnameLang(se.pathname);
				ie = "en" === ie ? "" : "/".concat(ie);
				var re = N ? N.startsWith("/business") || N.startsWith("/consumer") || N.startsWith("/nft") ? "".concat("https://www.perfectcorp.com").concat(ie).concat(N) : N : "".concat("https://www.perfectcorp.com").concat(se.pathname),
					oe = _.a.getSupportedLanguages().filter(function(e) {
						return -1 === D.indexOf(e)
					}),
					ce = v ? k.a.unix(v / 1e3) : null,
					ue = w ? k.a.unix(w / 1e3) : null,
					le = Object(c.useRouteMatch)(),
					me = JSON.stringify(U),
					pe = function() {
						var e = d()(ne, "title", "");
						return m()(e) ? l : e
					},
					de = function() {
						var e = d()(ne, "ogTitle", "");
						return m()(e) ? l : e
					},
					be = function() {
						var e = d()(ne, "description", "");
						return m()(e) ? b : e
					},
					fe = function() {
						var e = d()(ne, "imageUrl", "");
						return m()(e) ? T : e
					},
					he = function() {
						var e = pe() || "",
							t = ne.howToTotalTime || 1,
							n = {
								"@type": "HowTo",
								image: {
									"@type": "ImageObject",
									url: fe()
								},
								name: e.replace(" | PERFECT", ""),
								description: be(),
								supply: [{
									"@type": "HowToSupply",
									name: ne.howToSupply
								}],
								tool: [{
									"@type": "HowToTool",
									name: ne.howToTool
								}],
								totalTime: k.a.duration(t, "minutes").toISOString()
							};
						return ne.enableVideo && (n.video = {
							"@type": "VideoObject",
							name: pe(),
							description: be(),
							thumbnailUrl: ne.videoCover,
							contentUrl: ne.videoLink,
							embedUrl: "",
							uploadDate: ce ? ce.format() : "",
							duration: ne.videoDuration ? k.a.duration(ne.videoDuration, "minutes").toISOString() : "PT4M"
						}), ne.enableHowTo && (n.step = ne.serpSteps && ne.serpSteps.map(function(e) {
							return {
								"@type": "HowToStep",
								name: e.name,
								text: e.text,
								image: e.image,
								url: re
							}
						})), n
					},
					ge = function() {
						var e = {
							"@type": "FAQPage"
						};
						return m()(ne.serpFaqs) || (e.mainEntity = ne.serpFaqs.map(function(e) {
							return {
								"@type": "Question",
								name: e.question,
								acceptedAnswer: {
									"@type": "Answer",
									text: e.answer
								}
							}
						})), e
					};
				Object(i.useEffect)(function() {
					he(), ge()
				}, [ne]);
				var ve = '{\n    "@context": "http://schema.org",\n    "@graph": [\n      '.concat(m()(G) ? "" : '{\n          "@type": "BreadcrumbList",\n          "itemListElement": '.concat(JSON.stringify(G.map(function(e, t) {
					return Object(a.a)({}, e, {
						item: "".concat(e.item ? "".concat("https://www.perfectcorp.com").concat(e.item) : t === G.length - 1 ? "".concat("https://www.perfectcorp.com").concat(le.url) : "".concat("https://www.perfectcorp.com").concat(g()(le.url.split(e.name.toLowerCase()))).concat(e.name)),
						name: "".concat("post_title" === e.name ? Y.title : e.name),
						"@type": "ListItem"
					})
				})), "\n        },"), " \n      ").concat(m()(Y) ? "" : "".concat(JSON.stringify(function() {
					var e = (new DOMParser).parseFromString(Y.postContent, "text/html");
					return {
						"@type": "BlogPosting",
						headline: Y.title,
						description: Y.metaDesc,
						author: {
							"@type": "Person",
							name: x ? x.displayName : ""
						},
						translator: {
							"@type": "Person",
							name: j ? j.displayName : ""
						},
						datePublished: ce ? ce.format() : "",
						dateModified: ue ? ue.format() : "",
						Publisher: {
							"@type": "Organization",
							name: "Perfect Corp",
							logo: {
								"@type": "ImageObject",
								url: "https://bcm-media.beautycircle.com/pfweb/assets/images/logo_pf-wyzzm8nmo4-2732.png"
							}
						},
						mainEntityOfPage: {
							"@type": "WebPage",
							"@id": re
						},
						image: [y()(e.images, function(e) {
							return e.src
						})]
					}
				}()), ","), "\n      ").concat(m()(W) ? "" : "".concat(JSON.stringify({
					"@type": "VideoObject",
					name: pe(),
					description: be(),
					thumbnailUrl: [W.videoImageUrl],
					contentUrl: re,
					uploadDate: k.a.unix(W.createdTime / 1e3).format(),
					duration: W.videoDuration ? k.a.duration(W.videoDuration, "seconds").toISOString() : "PT4M"
				}), ","), "\n      ").concat(ne.enableHowTo ? "".concat(JSON.stringify(he()), ",") : "", "\n      ").concat(m()(ne.serpFaqs) ? "" : "".concat(JSON.stringify(ge()), ","), '\n      {\n        "@type": "Corporation",\n        "url": "https://www.perfectcorp.com/business",\n        "legalName":"Perfect Corp.",\n        "description": "Complete line of Beauty Tech solution to help beauty brands to digitally transform the online shopping experience with AR and AI ecommerce tech.",\n        "foundingDate":"2015",\n        "sameAs": [\n          "https://www.facebook.com/YouCamApps.tw","https://www.instagram.com/youcamapps.tw/?hl=zh-tw",\n          "https://www.youtube.com/channel/UC7GeoFYO277cNdRa_k8TWug",\n          "https://www.linkedin.com/company/perfect-corp/",\n          "https://apps.apple.com/us/developer/perfect-mobile-corp/id1018779369",\n          "https://play.google.com/store/apps/dev?id=7878009122471162106"    \n        ],\n        "founders":[{\n          "@type":"Person",\n          "name":"Alice Chang"\n        }],\n        "contactPoint": [{\n          "@type": "ContactPoint",\n          "email": "appsupport@perfectcorp.com",\n          "telephone": "+886-2-8667-1265",\n          "contactType": "customer service",\n          "url":"https://www.perfectcorp.com/business/contact-us/sales"\n        }],\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress":"14F., No. 98, Minquan Rd.",\n          "addressLocality": "Xindian Dist.",\n          "addressRegion": "New Taipei City",\n          "addressCountry": "Taiwan",\n          "postalCode": "23141"\n        }\n      }\n    ]\n  }');
				Object(i.useEffect)(function() {
					m()(ne) && (m()(U) || f()(U.sourceId) ? m()(U) && K.querySEOByPath({
						path: window.location.pathname,
						languageType: I.a.convertLang($.language || "en")
					}).then(function(e) {
						e && !m()(e) && ae(e)
					}) : K.querySEO(U).then(function(e) {
						return ae(e)
					}))
				}, [me]);
				var ye = _.a.isChs($.language);
				return r.a.createElement("div", null, r.a.createElement(o.Helmet, null, r.a.createElement("meta", {
					name: "author",
					content: u.defaultAuthor
				}), r.a.createElement("meta", {
					name: "title",
					content: m()(pe()) ? u.defaultTitle : pe()
				}), r.a.createElement("meta", {
					name: "image",
					content: fe()
				}), r.a.createElement("meta", {
					name: "description",
					content: be() || u.defaultDescription
				}), r.a.createElement("meta", {
					property: "og:description",
					content: function() {
						var e = d()(ne, "ogDescription", "");
						return m()(e) ? b : e
					}() || u.defaultDescription
				}), r.a.createElement("meta", {
					property: "og:title",
					content: m()(de()) ? u.defaultTitle : de()
				}), r.a.createElement("meta", {
					property: "og:image",
					content: fe()
				}), r.a.createElement("meta", {
					property: "og:url",
					content: re
				}), r.a.createElement("meta", {
					property: "og:type",
					content: R
				}), ye && r.a.createElement("meta", {
					name: "keywords",
					content: Q,
					"data-react-helmet": "true"
				}), J && r.a.createElement("link", {
					rel: "preload",
					as: "image",
					href: J
				}), J && r.a.createElement("link", {
					rel: "preconnect",
					href: new URL(J).host
				}), r.a.createElement("link", {
					rel: "alternate",
					hrefLang: "x-default",
					href: re
				}), X && X.length ? X.map(function(e) {
					return r.a.createElement("link", {
						key: e.lang,
						rel: "alternate",
						hrefLang: e.lang,
						href: "https://www.perfectcorp.com" + e.path
					})
				}) : oe.map(function(e) {
					return r.a.createElement("link", {
						key: e,
						rel: "alternate",
						hrefLang: e,
						href: (t = re, n = "en" === e ? "" : "/".concat(e), "".concat("https://www.perfectcorp.com").concat(n).concat(_.a.removePathnameLang(t).replace("https://www.perfectcorp.com", "")))
					});
					var t, n
				}), r.a.createElement("link", {
					rel: "canonical",
					href: Z || re
				}), r.a.createElement("script", {
					type: "application/ld+json"
				}, ve), r.a.createElement("title", null, m()(pe()) ? u.defaultTitle : pe())))
			}
			n.d(t, "a", function() {
				return L
			}), k.a.extend(O.a)
		},
		201: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return m
			});
			var a = n(7),
				s = n(0),
				i = n.n(s),
				r = (n(857), n(8)),
				o = n(5),
				c = n.n(o),
				u = n(119),
				l = n(42);

			function m(e) {
				var t = e.contactsalesbutton,
					n = Object(l.a)(),
					o = Object(u.a)(),
					m = Object(s.useState)(!1),
					p = Object(a.a)(m, 2),
					d = p[0],
					b = p[1];
				return Object(s.useEffect)(function() {
					o > 0 && !d && b(!0)
				}, [o]), i.a.createElement("div", null, t && i.a.createElement(r.a, {
					className: c()({
						"go-contact-btn": !0,
						"go-contact-btn--active": n <= 800 && d
					}),
					to: "/business/contact-us/sales?numberOfEmployees=C999"
				}))
			}
		},
		202: function(e, t, n) {
			"use strict";
			var a = n(7),
				s = n(0),
				i = n.n(s),
				r = (n(858), n(119)),
				o = n(5),
				c = n.n(o),
				u = n(8),
				l = n(10),
				m = [{
					key: "virtual-makeup",
					value: "/business/showcase/lip-color"
				}, {
					key: "youcam-tutorial",
					value: "/business/showcase/youcam-tutorial"
				}, {
					key: "ai-shade-finder",
					value: "/business/showcase/shadefinder/home"
				}, {
					key: "ai-skin-diagnostic",
					value: "/business/showcase/skincare/home"
				}, {
					key: "ai-product-recommendation",
					value: "/business/showcase/lip-color"
				}, {
					key: "ai-face-analyzer",
					value: "/business/showcase/face-analyzer"
				}, {
					key: "in-store-barcode",
					value: "/business/showcase/lip-color"
				}, {
					key: "virtual-accessories",
					value: "/business/showcase/earrings"
				}, {
					key: "eye-wear",
					value: "/business/showcase/eye-wear"
				}, {
					key: "live-hair-color",
					value: "/business/showcase/hair-color"
				}, {
					key: "ai-beard-dye",
					value: "/business/showcase/beard-dye"
				}, {
					key: "ai-nail-color",
					value: "/business/showcase/nail-color"
				}, {
					key: "live-ar-training",
					value: "/business/showcase/lip-color"
				}, {
					key: "ar-virtual-ring",
					value: "/business/showcase/rings"
				}, {
					key: "ar-bracelet",
					value: "/business/showcase/bracelets"
				}, {
					key: "ar-watch",
					value: "/business/showcase/watches"
				}, {
					key: "ba-1-on-1",
					value: "/business/showcase/lip-color"
				}, {
					key: "live-streaming",
					value: "/business/showcase/live-shows"
				}, {
					key: "ar-virtual-earrings",
					value: "/business/showcase/earrings"
				}, {
					key: "face-reshaping",
					value: "/business/showcase/face-reshaping"
				}, {
					key: "ai-personality",
					value: "/business/showcase/personality"
				}];

			function p() {
				var e = Object(r.a)(),
					t = Object(s.useState)(!1),
					n = Object(a.a)(t, 2),
					o = n[0],
					p = n[1],
					d = Object(l.useLocation)().pathname.split("/"),
					b = Object(s.useState)(),
					f = Object(a.a)(b, 2),
					h = f[0],
					g = f[1],
					v = Object(s.useState)("/business/showcase/lip-color"),
					y = Object(a.a)(v, 2),
					E = y[0],
					k = y[1];
				return Object(s.useEffect)(function() {
					e > 0 && !o && p(!0)
				}, [e]), Object(s.useEffect)(function() {
					if (-1 !== d.indexOf("products")) {
						g(d[d.indexOf("products") + 1]);
						var e = m.filter(function(e) {
							return e.key === h
						})[0];
						e && k(e.value)
					}
				}, [d]), i.a.createElement(u.a, {
					className: c()({
						"pf-language": !0,
						"go-demo-btn--container": !0,
						"go-demo-btn--container--active": o
					}),
					to: E
				}, i.a.createElement("div", {
					className: "go-demo-text"
				}, i.a.createElement("div", null, "TRY-ON")))
			}
			n.d(t, "a", function() {
				return p
			})
		},
		203: function(e, t, n) {
			"use strict";
			var a, s = n(69),
				i = {
					isMobile: function() {
						var e, t = window.screen.width <= 500;
						return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), /\(macintosh; intel mac os x 10_15\)/i.test(e) && (t = !1), t
					},
					isAndroid: function() {
						return /android/i.test(navigator.userAgent)
					},
					isLine: function() {
						return /LINE/i.test(navigator.userAgent)
					},
					isInstagram: function() {
						return /instagram/i.test(navigator.userAgent)
					},
					isSony: function() {
						return /401SO|402SO|501SO|502SO|601SO|602SO|701SO|D200\u2715|D21\u2715\u2715|D2202|D2203|D2206|D2212|D2243|D2302|D2303|D2305|D2306|D240\u2715|D2502|D2533|D510\u2715|D5303|D5306|D5322|D5788|D58\u2715\u2715|D65\u2715\u2715|D6563|D6603|D6616|D6633|D6643|D6646|D6653|D6683|D6708|E2003|E2006|E2033|E2043|E2053|E2104|E2105|E2114|E2115|E2124|E2303|E2306|E2312|E2333|E2353|E2363|E5303|E5306|E5333|E5343|E5353|E5363|E5506|E5533|E5553|E5563|E5603|E5606|E5633|E5643|E5653|E5663|E58\u2715\u2715|E6533|E6553|E6583|E6603|E6633|E6653|E6683|E6833|E6853|E6883|F3111|F3112|F3113|F3115|F3116|F3211|F3212|F3213|F3215|F3216|F3311|F3313|F5121|F5122|F5321|F8131|F8132|F8331|F8332|G2199|G2299|G3112|G3116|G3121|G3123|G3125|G3212|G3221|G3223|G3226|G3311|G3312|G3313|G3412|G3416|G3421|G3423|G3426|G8141|G8142|G8231|G8232|G8341|G8342|G8343|G8441|H3113|H3123|H3133|H3213|H3223|H3311|H3321|H4113|H4133|H4213|H4233|H4311|H4331|L50t|L50u|L50w|L55t|L55u|M50w|S50h|S55t|S55u|S55w|SO-01G|SO-01H|SO-01J|SO-01K|SO-02G|SO-02H|SO-02J|SO-02K|SO-03F|SO-03G|SO-03H|SO-03J|SO-04F|SO-04G|SO-04H|SO-04J|SOL25|SOL26|SOV31|SOV32|SOV33|SOV34|SOV35|SOV36|XM50h|XM50t/i.test(navigator.userAgent)
					},
					isWeixin: function() {
						return /weixin|micromessenger/i.test(navigator.userAgent)
					},
					isChrome64: function() {
						return /Chrome\/64/i.test(navigator.userAgent)
					},
					isCameraEnabled: function() {
						return !i.isWeixin() && ((!i.isAndroid() || !i.isLine()) && ((!i.isAndroid() || !i.isInstagram()) && ((!i.isSony() || !i.isChrome64()) && (!(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) || (!(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) || navigator.getUserMedia)))))
					},
					isIOs: function() {
						var e = navigator.userAgent;
						return -1 !== e.indexOf("iPhone") || -1 !== e.indexOf("iPod") || -1 !== e.indexOf("iPad")
					},
					isMac: function() {
						return -1 !== window.navigator.platform.indexOf("Mac")
					},
					isIpad: function() {
						if (/iPad/i.test(navigator.userAgent)) return !0;
						if (/Macintosh/i.test(navigator.userAgent)) try {
							return document.createEvent("TouchEvent"), !0
						} catch (e) {}
						return !1
					},
					isIpadUnderA11: function() {
						return i.isIpad() && i.isUnderA11()
					},
					isIpadAboveA11: function() {
						return i.isIpad() && !i.isUnderA11()
					},
					isUnderA11: function() {
						if (!a) try {
							a = function() {
								var e = document.createElement("canvas").getContext("webgl"),
									t = e.createShader(s.GL_VERTEX_SHADER),
									n = e.createShader(s.GL_FRAGMENT_SHADER),
									a = e.createProgram();
								if (null !== n && null !== t && null !== a) {
									e.shaderSource(t, "\n    precision highp float;\n    attribute vec3 aPosition;\n    varying float vvv;\n    void main() {\n      vvv = 0.31622776601683794;\n      gl_Position = vec4(aPosition, 1.0);\n    }\n  "), e.shaderSource(n, "\n    precision highp float;\n    varying float vvv;\n    void main() {\n      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;\n      enc = fract(enc);\n      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\n      gl_FragColor = enc;\n    }\n  "), e.compileShader(t), e.compileShader(n), e.attachShader(a, t), e.attachShader(a, n), e.linkProgram(a), e.detachShader(a, t), e.detachShader(a, n), e.deleteShader(t), e.deleteShader(n), e.useProgram(a);
									var i = e.createBuffer();
									e.bindBuffer(s.GL_ARRAY_BUFFER, i), e.bufferData(s.GL_ARRAY_BUFFER, new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), s.GL_STATIC_DRAW);
									var r = e.getAttribLocation(a, "aPosition");
									e.vertexAttribPointer(r, 3, s.GL_FLOAT, !1, 0, 0), e.enableVertexAttribArray(r), e.clearColor(1, 1, 1, 1), e.clear(s.GL_COLOR_BUFFER_BIT), e.viewport(0, 0, 1, 1), e.drawArrays(s.GL_TRIANGLES, 0, 3);
									var o = new Uint8Array(4);
									e.readPixels(0, 0, 1, 1, s.GL_RGBA, s.GL_UNSIGNED_BYTE, o);
									var c = o.join("");
									switch (e.deleteProgram(a), e.deleteBuffer(i), c) {
										case "801621810":
											return "apple a11 gpu";
										case "8016218135":
											return "apple a10 gpu"
									}
								}
								return "apple a10 gpu"
							}()
						} catch (e) {
							console.error(e)
						}
						return /apple a10/i.test(a)
					},
					isIpadPro: function() {
						return i.isIpad() && window.screen.width >= 834 && !i.isUnderA11()
					},
					getSafariVer: function() {
						if (!i.isIOs() && !i.isMac()) return null;
						var e = /Version\/([0-9.]+)/.exec(navigator.userAgent);
						return e && e[1] ? parseFloat(e[1], 10) : null
					},
					getOrientation: function() {
						return window.innerWidth > window.innerHeight ? "landscape" : "portrait"
					},
					uuidv4: function() {
						return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
							var t = 16 * Math.random() | 0;
							return ("x" === e ? t : 3 & t | 8).toString(16)
						})
					},
					isChrome: function() {
						if (i.isIOs()) {
							var e = navigator.userAgent;
							return !!/chrome/i.test(e) || /crios/i.test(e)
						}
						return !!window.chrome && !!window.chrome.webstore
					},
					isFireFox: function() {
						var e = navigator.userAgent;
						return !!/FxiOS/i.test(e) || (!!/Firefox/i.test(e) || "undefined" !== typeof InstallTrigger)
					},
					isProduction: function() {
						return !0
					},
					httpToHttps: function(e) {
						return e ? e.replace("http:", "https:") : ""
					},
					isLive: function(e) {
						return e.info ? "Started" === e.info.status || "Paused" === e.info.status : "Started" === e.status || "Paused" === e.status
					},
					hexToRgb: function(e) {
						var t = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
						return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
					}
				};
			t.a = i
		},
		209: function(e, t, n) {
			"use strict";
			var a = "https://twitter.com/intent/tweet",
				s = "https://www.linkedin.com/shareArticle",
				i = "".concat("https://www.perfectcorp.com", "/business/video/"),
				r = "".concat("https://www.perfectcorp.com", "/business/beauty-tech-forum-master-class/detail/"),
				o = "".concat("https://www.perfectcorp.com", "/business/global-beauty-tech-forum/detail/"),
				c = {
					isFbSdkExists: function() {
						var e = document.getElementById("facebook-sdk");
						return void 0 != e || null != e
					},
					loadFbSdk: function() {
						! function(e, t, n) {
							var a, s = e.getElementsByTagName(t)[0];
							e.getElementById(n) || ((a = e.createElement(t)).id = n, a.src = "//connect.facebook.net/en_US/sdk.js", s.parentNode.insertBefore(a, s))
						}(document, "script", "facebook-sdk")
					},
					initFbSdk: function() {
						FB.init({
							appId: "534169110558013",
							autoLogAppEvents: !0,
							xfbml: !0,
							version: "v7.0"
						})
					},
					shareToFb: function(e) {
						var t = e.url,
							n = void 0 === t ? "/" : t,
							a = e.display,
							s = {
								method: "share",
								display: void 0 === a ? "popup" : a,
								href: "".concat("https://www.perfectcorp.com").concat(n)
							},
							i = function(e) {
								console.log(e)
							};
						c.isFbSdkExists() ? FB.ui(s, i) : (c.loadFbSdk(), window.fbAsyncInit = function() {
							c.initFbSdk(), FB.getLoginStatus(function(e) {
								FB.ui(s, i)
							})
						})
					},
					shareVideoToFb: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "popup";
						c.isFbSdkExists() ? FB.ui({
							method: "share",
							display: t,
							href: i + e.id
						}, function(e) {
							console.log({
								response: e
							})
						}) : (c.loadFbSdk(), window.fbAsyncInit = function() {
							c.initFbSdk(), FB.getLoginStatus(function(n) {
								FB.ui({
									method: "share",
									display: t,
									href: i + e.id
								}, function(e) {
									console.log({
										response: e
									})
								})
							})
						})
					},
					shareBtfToFb: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "btf",
							t = arguments.length > 1 ? arguments[1] : void 0,
							n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "popup",
							a = "btf" === e ? r + t.id : "".concat(o).concat(t.id);
						c.isFbSdkExists() ? FB.ui({
							method: "share",
							display: n,
							href: a
						}, function(e) {
							console.log({
								response: e
							})
						}) : (c.loadFbSdk(), window.fbAsyncInit = function() {
							c.initFbSdk(), FB.getLoginStatus(function(e) {
								FB.ui({
									method: "share",
									display: n,
									href: a
								}, function(e) {
									console.log({
										response: e
									})
								})
							})
						})
					},
					shareToLinkedIn: function(e) {
						var t = e.url,
							n = void 0 === t ? "/" : t,
							a = e.popupWindowName,
							i = void 0 === a ? "" : a,
							r = "".concat("https://www.perfectcorp.com").concat(n),
							o = "".concat(s, "?url=").concat(encodeURIComponent(r));
						c.popupWindow(o, i)
					},
					shareVideoToLinkedIn: function(e) {
						var t = s + "?url=" + encodeURIComponent(i + e.id);
						c.popupWindow(t, e.videoName)
					},
					shareBtfToLinkedIn: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "btf",
							t = arguments.length > 1 ? arguments[1] : void 0,
							n = "btf" === e ? r + t.id : "".concat(o).concat(t.id),
							a = s + "?url=" + encodeURIComponent(n);
						c.popupWindow(a, t.sessionTitle)
					},
					tweetToTwitter: function(e) {
						var t = e.url,
							n = void 0 === t ? "/" : t,
							s = e.popupWindowName,
							i = void 0 === s ? "" : s,
							r = e.defaultSharingText,
							o = void 0 === r ? "" : r,
							u = e.hashtags,
							l = void 0 === u ? [] : u;
						l = Array.isArray(l) ? l.join(",") : l;
						var m = "".concat("https://www.perfectcorp.com").concat(n),
							p = "".concat(a, "?") + "text=".concat(encodeURIComponent(o)) + "&hashtags=".concat(l) + "&url=".concat(encodeURIComponent(m));
						c.popupWindow(p, i)
					},
					tweetVideoToTwitter: function(e) {
						var t = a + "?text=" + encodeURIComponent(e.videoName) + "&hashtags=" + c.genHashtags(e) + "&url=" + encodeURIComponent(i + e.id);
						c.popupWindow(t, e.videoName)
					},
					tweetBtfToTwitter: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "btf",
							t = arguments.length > 1 ? arguments[1] : void 0,
							n = "btf" === e ? r + t.id : "".concat(o).concat(t.id),
							s = a + "?text=" + encodeURIComponent(t.sessionTitle) + "&url=" + encodeURIComponent(n);
						c.popupWindow(s, t.videoName)
					},
					popupWindow: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
							n = window.screen.width / 2 - 300,
							a = window.screen.height / 2 - 200;
						return window.open(e, t, "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=\n        ".concat(600, ",height=").concat(400, ",top=").concat(a, ",left=").concat(n)), !1
					},
					genHashtags: function(e) {
						var t = [];
						return e.productTypeNames && e.productTypeNames.length && e.productTypeNames.forEach(function(e) {
							return t.push(e.replaceAll(/[\s-]/g, "_"))
						}), e.serviceTypeNames && e.serviceTypeNames.length && e.serviceTypeNames.forEach(function(e) {
							return t.push(e.replaceAll(/[\s-]/g, "_"))
						}), t.length ? t.join(",") : "PerfectCorp"
					}
				};
			t.a = c
		},
		259: function(e, t, n) {
			"use strict";
			var a = n(4),
				s = n(209),
				i = n(21),
				r = n.n(i),
				o = n(100),
				c = n.n(o),
				u = n(392),
				l = n.n(u),
				m = n(164),
				p = n.n(m),
				d = n(25),
				b = n.n(d),
				f = {
					isActiveType: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
							t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
						return !("youcam-tutorial" !== e || !window.location.pathname.match("/business/showcase/allure-november-look")) || (t && !!window.location.pathname.match(t) || e && !!window.location.pathname.match(new RegExp("/".concat(e, "(/[a-zA-Z]*)?$"), "g")))
					},
					isBeardDye: function() {
						return f.isActiveType("beard-dye")
					},
					isBeardStyle: function() {
						return f.isActiveType("beard-style")
					},
					isTutorial: function() {
						return f.isActiveType("youcam-tutorial")
					},
					isNail: function() {
						return f.isActiveType("nail-color")
					},
					isWatch: function() {
						return f.isActiveType("watches")
					},
					isBracelets: function() {
						return f.isActiveType("bracelets")
					},
					isRings: function() {
						return f.isActiveType("rings")
					},
					isFaceAnalyzer: function() {
						return f.isActiveType("face-analyzer")
					},
					isSkincare: function() {
						return f.isActiveType("skincare")
					},
					isEarring: function() {
						return f.isActiveType("earrings")
					},
					isHandAR: function() {
						return f.isNail() || f.isWatch() || f.isRings() || f.isBracelets()
					},
					isNonMakeupLauncher: function() {
						return ["eye-wear", "hat", "headband", "hair-color"].some(function(e) {
							return f.isActiveType(e)
						})
					},
					getApiKey: function() {
						return f.isBeardDye() ? "for-demostore-beard-dye" : f.isEarring() ? "x1r2CKNmcVJhyYGIJO0A" : f.isNonMakeupLauncher() ? "for-demostore-eyewear" : f.isTutorial() ? "SW1H0BokbuNBIEKsYNjgHQ" : f.isFaceAnalyzer() ? "ER33JgfdB02arUkFlgqhA" : f.isNail() ? "R8928ZcYxrd3pnt0GrWk0g" : f.isWatch() || f.isBracelets() ? "for-smb-watch" : f.isRings() ? "for-smb-ring" : "for-smb-adv-skincare"
					},
					getModuleSdkUrl: function() {
						var e = f.getApiKey(),
							t = "v1.47-demostore";
						return f.isTutorial() && (t = "v1.5-tutorial-demostore"), f.isBeardStyle() && (t = "v1.36-beard-style-demostore-1"), a.a.isChs(a.a.getPathnameLang(window.location.pathname)) ? "https://plugins-media.youcamapi.cn/".concat(t, "/sdk.js?apiKey=").concat(e) : "//plugins-media.perfectcorp.com/".concat(t, "/sdk.js?apiKey=").concat(e)
					},
					getModuleFeature: function() {
						return f.isHandAR() ? "handAR" : f.isSkincare() ? "skincare" : "makeup"
					},
					getModuleInitParams: function() {
						return {
							userGoogleAnalyticsConsent: "agree",
							language: f.getModuleLanguage(),
							disable2ColorComparison: f.isRings() || f.isBracelets() || f.isWatch(),
							hideFlipCameraButton: !f.isBeardDye(),
							disableEarringForFrontal: f.isEarring()
						}
					},
					getModuleSharingParams: function() {
						var e = a.a.getPathnameLang(window.location.pathname),
							t = a.a.isChs(e),
							n = !t;
						return n && !window.FB && (s.a.loadFbSdk(), window.fbAsyncInit = s.a.initFbSdk), {
							enableFBSharing: n,
							enableWeiboSharing: t,
							enableEmailSharing: !0,
							enableTwitterSharing: !0,
							enablePinterestSharing: !0,
							enableSMSSharing: !0,
							enableWhatsAppSharing: !0
						}
					},
					getModuleLanguage: function() {
						var e = a.a.getPathnameLang(window.location.pathname);
						switch (a.a.determineLanguage(e)) {
							case "zh_CN":
								return "chs";
							case "zh_TW":
								return "cht";
							case "ja":
								return "jpn";
							case "fr":
								return "fra";
							case "ko":
								return "kor";
							case "de":
								return "deu";
							case "es":
								return "esp";
							case "pt":
								return "ptb";
							case "it":
								return "ita";
							case "en":
							default:
								return "enu"
						}
					},
					ymkOnceEventListener: function(e, t) {
						if (window.YMK) var n = window.YMK.addEventListener(e, function() {
							window.YMK && window.YMK.removeEventListener(n), t && t()
						})
					},
					isSupported: function() {
						return f.isActiveType("eye-wear") ? !a.a.isIE() && !a.a.isEdge() && !a.a.isFirefox() : f.isActiveType("earrings") ? !a.a.isIE() && !a.a.isEdge() && !a.a.isFirefox() : !f.isActiveType("skincare") || !a.a.isIE() && !a.a.isEdge() && !a.a.isFirefox()
					},
					isLookPage: function() {
						return -1 !== r()(window, "location.pathname", "/").indexOf("/business/showcase/look")
					},
					productTypeToTitleName: function(e) {
						switch (e) {
							case "lip-color":
								return "Lipstick";
							case "lip-liner":
								return "Lip Liner";
							case "eyebrow":
								return "Eyebrow";
							case "eye-color":
								return "Contact Lens";
							case "eyelashes":
								return "Eyelashes";
							case "eye-liner":
								return "Eyeliner";
							case "eye-shadow":
								return "Eyeshadow";
							case "blush":
								return "Blush";
							case "foundation":
								return "Foundation";
							case "concealer":
								return "Concealer";
							case "bronzer":
								return "Bronzer";
							case "contour":
								return "Contour";
							case "eye-wear":
								return "Glasses";
							case "hair-color":
								return "Hair Color";
							default:
								return e
						}
					},
					getProductName: function() {
						var e = window.location.pathname.split("showcase/").pop();
						return /\//.test(e) ? e.split("/")[0] : e
					},
					hasWhite: function(e) {
						return Array.isArray(e) ? !e.length || l()(e, function(e) {
							return !e || "#ffffff" === c()(e)
						}) : !e || "#ffffff" === c()(e)
					},
					getStrokeColor: function(e) {
						return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || f.hasWhite(e) ? "#ddd" : "#fff"
					},
					prefetch: function(e) {
						return p()(e, function(e) {
							return e && b()(e, {
								method: "GET"
							})
						})
					},
					convertSkinAnalysisResult: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return {
							skinAge: e.skinAge,
							all: e.skinHealth,
							spots: e.ageSpots || e.spots,
							wrinkles: e.wrinkles,
							texture: e.texture,
							darkCircles: e.darkCirclesV2 || e.darkCircles,
							moisture: e.moisture,
							oiliness: e.oiliness,
							redness: e.redness,
							eyeBags: e.eyeBags,
							acne: e.acne,
							droopyUpperEyelid: e.droopyUpperEyelid,
							droopyLowerEyelid: e.droopyLowerEyelid,
							firmness: e.firmness,
							radiance: e.radiance,
							pore: e.pore
						}
					},
					toSkinAnalysisFeature: function(e) {
						switch (e) {
							case "eyebag":
							case "eyeBags":
								return "eyeBags";
							case "darkCircles":
								return "darkCirclesV2";
							default:
								return e
						}
					},
					splitArrayIntoChunks: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
							t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						if (!t || !e.length) return e;
						var n = Math.ceil(e.length / t);
						return Array.from({
							length: n
						}, function(n, a) {
							return e.slice(a * t, a * t + t)
						})
					}
				};
			t.a = f
		},
		26: function(e, t, n) {
			"use strict";
			var a = n(35),
				s = n.n(a),
				i = n(394),
				r = n.n(i);
			s.a.addPlugin(r.a);
			var o = "is-attempting-to-sign-in",
				c = "cookie-statement",
				u = "un-supported-modal",
				l = "current-language",
				m = "utm-source-first",
				p = "utm-source-last-targeted-ad",
				d = "nft-first-try",
				b = "nft-access-code",
				f = "nft-wallet-address",
				h = {
					setIsAttemptingToSignIn: function(e) {
						return s.a.set(o, e)
					},
					getIsAttemptingToSignIn: function() {
						return s.a.get(o)
					},
					setCookieStatement: function(e) {
						return s.a.set(c, e)
					},
					getCookieStatement: function() {
						return s.a.get(c)
					},
					setUnsupportedModal: function(e) {
						return s.a.set(u, e)
					},
					getUnsupportedModal: function() {
						return s.a.get(u)
					},
					setCurrentLanguage: function(e) {
						return s.a.set(l, e)
					},
					getCurrentLanguage: function() {
						return s.a.get(l)
					},
					setFirstUtmSource: function(e) {
						return s.a.set(m, e, (new Date).getTime() + 2592e6)
					},
					getFirstUtmSource: function() {
						return s.a.get(m)
					},
					setLastTargetedAdUtmSource: function(e) {
						return s.a.set(p, e, (new Date).getTime() + 2592e6)
					},
					getLastTargetedAdUtmSource: function() {
						return s.a.get(p)
					},
					setNftFirstTry: function(e) {
						return s.a.set(d, e)
					},
					getNftFirstTry: function(e) {
						return s.a.get(d, e)
					},
					setNftAccessCode: function(e) {
						return s.a.set(b, e)
					},
					getNftAccessCode: function(e) {
						var t = window.ethereum ? window.ethereum.selectedAddress : window.web3 ? window.web3.currentProvider.selectedAddress : null;
						if (!t) return null;
						var n = h.getNftWalletAddress();
						return n && t == n ? s.a.get(b, e) : (console.log("Reset access code"), void h.setNftAccessCode())
					},
					setNftWalletAddress: function(e) {
						return s.a.set(f, e)
					},
					getNftWalletAddress: function() {
						return s.a.get(f)
					}
				};
			t.a = h
		},
		262: function(e, t, n) {
			"use strict";
			var a = n(4),
				s = n(100),
				i = n.n(s),
				r = n(269),
				o = n.n(r),
				c = {
					getParam: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id",
							t = arguments.length > 1 ? arguments[1] : void 0,
							n = arguments.length > 2 ? arguments[2] : void 0;
						return t[e] ? t[e] : new URLSearchParams(n.search).get(e)
					},
					addLangPrefix: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
							t = a.a.getPathnameLang(window.location.pathname);
						return t && "en" !== t ? "/".concat(o()(i()(t), "_", "-")).concat(e) : e
					}
				};
			t.a = c
		},
		264: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a);
			t.a = function() {
				return s.a.createElement("div", {
					className: "text-center"
				}, s.a.createElement("div", {
					className: "spinner-border",
					role: "status"
				}, s.a.createElement("span", {
					className: "sr-only"
				})))
			}
		},
		265: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return i
			});
			var a = n(10),
				s = n(203);

			function i() {
				var e = Object(a.useLocation)(),
					t = e.search && new URLSearchParams(e.search).get("source"),
					n = e.search && new URLSearchParams(e.search).get("autoclose"),
					i = "business-weekly" === t;
				return {
					autoOpenLive: i,
					closeWindowOnModuleClosed: i || "true" === n && (s.a.isMobile() || s.a.isIpad())
				}
			}
		},
		267: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(2);
			t.a = {
				BUSINESS_SERVICES: {
					BS_WEB_MODULE: {
						id: 2,
						value: "BS_WEB_MODULE",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.web.module"
						}, "Web Module/SDK")
					},
					BS_MOBILE_SDK: {
						id: 3,
						value: "BS_MOBILE_SDK",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.sdk"
						}, "Mobile App SDK")
					},
					BS_INSTORE_CONSULTATION: {
						id: 4,
						value: "BS_INSTORE_CONSULTATION",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.instore.consultation"
						}, "In-Store Consultation")
					},
					BS_TAOBAO_MINI_PROGRAM: {
						id: 5,
						value: "BS_TAOBAO_MINI_PROGRAM",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.taobao"
						}, "Taobao Mini-program")
					},
					BS_WECHAT_MINI_PROGRAM: {
						id: 6,
						value: "BS_WECHAT_MINI_PROGRAM",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.wechat"
						}, "WeChat Mini-program")
					},
					BS_AR_SHOPIFY: {
						id: 7,
						value: "BS_AR_SHOPIFY",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.shopify"
						}, "AR for ShopifyBusiness focus")
					},
					BS_AR_LIVE_TRAINING: {
						id: 8,
						value: "BS_AR_LIVE_TRAINING",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.live.training"
						}, "AR Live Training")
					},
					BS_AR_LIVE_CASTING: {
						id: 9,
						value: "BS_AR_LIVE_CASTING",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.live.casting"
						}, "AR Live Casting")
					},
					BS_BA_1ON1: {
						id: 10,
						value: "BS_BA_1ON1",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.ba.1on1"
						}, "Beauty Advisor 1-on-1")
					},
					BS_AR_SNAPCHAT: {
						id: 11,
						value: "BS_AR_SNAPCHAT",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.ar.snapchat"
						}, "Virtual Try-on AR on Snapchat")
					},
					BS_AR_YOUTUBE: {
						id: 12,
						value: "BS_AR_YOUTUBE",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.youtube"
						}, "Virtual Try-on AR on YouTube")
					},
					BS_AR_GOOGLE_SEARCH: {
						id: 13,
						value: "BS_AR_GOOGLE_SEARCH",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.google.search"
						}, "Virtual Try-on AR on Google Search")
					},
					BS_DOUYIN_MINI_PROGRAM: {
						id: 14,
						value: "BS_DOUYIN_MINI_PROGRAM",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.douyin"
						}, "Douyin Mini-program")
					},
					BS_YMK_APP_LISTING: {
						id: 15,
						value: "BS_YMK_APP_LISTING",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bs.app.listing"
						}, "YouCam Makeup App Listing")
					}
				},
				BUSINESS_TOPICS: {
					BT_AI_AR_MAKEUP: {
						id: 16,
						value: "BT_AI_AR_MAKEUP",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.virtual.makeup"
						}, "AI/AR Makeup")
					},
					BT_AI_SKINCARE: {
						id: 17,
						value: "BT_AI_SKINCARE",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.skincare"
						}, "AI Skincare")
					},
					BT_AI_SHADE_FINDER: {
						id: 18,
						value: "BT_AI_SHADE_FINDER",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.shade.finder"
						}, "AI Shade Finder")
					},
					BT_AI_AR_HAIR: {
						id: 19,
						value: "BT_AI_AR_HAIR",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.hair"
						}, "AI/AR Hair")
					},
					BT_PARTNER_SUCCESS: {
						id: 20,
						value: "BT_PARTNER_SUCCESS",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.partner.success"
						}, "Partner Success")
					},
					BT_RETAIL: {
						id: 21,
						value: "BT_RETAIL",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.retail"
						}, "Retail")
					},
					BT_ECOMMERCE: {
						id: 22,
						value: "BT_ECOMMERCE",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.ecommerce"
						}, "E-Commerce")
					},
					BT_FACE_TECH: {
						id: 23,
						value: "BT_FACE_TECH",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.face.tech"
						}, "Face Technology")
					},
					BT_AR_VIDEO_ON_DEMAND: {
						id: 24,
						value: "BT_AR_VIDEO_ON_DEMAND",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.ar.video"
						}, "AR Video On-Demand")
					},
					BT_PLATFORM_SUPPORT: {
						id: 25,
						value: "BT_PLATFORM_SUPPORT",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.platform.support"
						}, "Platform Support")
					},
					BT_AR_ACCESSORIES: {
						id: 26,
						value: "BT_AR_ACCESSORIES",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bt.ar.accessories"
						}, "AR Accessories")
					}
				},
				CONSUMER_APPS: {
					CA_YMK: {
						id: 27,
						value: "CA_YMK",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ca.ymk"
						}, "YouCam Makeup")
					},
					CA_YCP: {
						id: 28,
						value: "CA_YCP",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ca.ycp"
						}, "YouCam Perfect")
					},
					CA_YCV: {
						id: 29,
						value: "CA_YCV",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ca.ycv"
						}, "YouCam Video")
					}
				},
				CONSUMER_TOPICS: {
					CT_PHOTO_EDITING: {
						id: 30,
						value: "CT_PHOTO_EDITING",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.photo.edit"
						}, "Photo Editing")
					},
					CT_VIDEO_EDITING: {
						id: 31,
						value: "CT_VIDEO_EDITING",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.video.edit"
						}, "Video Editing")
					},
					CT_FACE_RETOUCH: {
						id: 32,
						value: "CT_FACE_RETOUCH",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.face.retouch"
						}, "Face Retouch/Reshape")
					},
					CT_SELFIE_CAM: {
						id: 33,
						value: "CT_SELFIE_CAM",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.selfie.cam"
						}, "Selfie Cam")
					},
					CT_EFFECT: {
						id: 34,
						value: "CT_EFFECT",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.effect"
						}, "Effect")
					},
					CT_HOW_TO: {
						id: 35,
						value: "CT_HOW_TO",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.how.to"
						}, "How-to")
					},
					CT_MAKEUP_LOOKS: {
						id: 36,
						value: "CT_MAKEUP_LOOKS",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.makeup.looks"
						}, "Makeup & Looks")
					},
					CT_SKINCARE: {
						id: 37,
						value: "CT_SKINCARE",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.skincare"
						}, "Skincare")
					},
					CT_HAIR_COLOR: {
						id: 38,
						value: "CT_HAIR_COLOR",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.hair.color"
						}, "Hair Color")
					},
					CT_AR_FILTER: {
						id: 39,
						value: "CT_AR_FILTER",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.ar.filter"
						}, "AR Filter")
					},
					CT_TOP_TRENDS: {
						id: 40,
						value: "CT_TOP_TRENDS",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.ct.trends"
						}, "Top Trends")
					}
				},
				FOCUS: {
					BF_BUSINESS_FOCUS: {
						id: 0,
						value: "BF_BUSINESS_FOCUS",
						label: s.a.createElement(i.a, {
							i18nKey: "business:u.t.b.f.bf.focus"
						}, "Business Focus")
					},
					CF_CONSUMER_FOCUS: {
						id: 1,
						value: "CF_CONSUMER_FOCUS",
						label: s.a.createElement(i.a, {
							i18nKey: "consumer:u.t.b.f.cf.focus"
						}, "Consumer Focus")
					}
				}
			}
		},
		268: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwDwoFBg4ECAwCCwkNAQMG+gCWfaAAABUUlEQVRYw8VY2ZLDMAizHXwm7fL/X7ttZrpHx2DIamb1HsUGgcAhiOhUR8v8QG6jUg9uUDo//4mcNg9DSZGniKlYKRoraBaarlKcNMvoVDag6sc42IRDOQxFNiKKiSJ2gOYciV3YARxTFmI3CMDB/BbdHq+QxN+ZPvgSDrdOF9rtfBnfF2rXSdpX7fMfUNSDNNdRiqDHbqO5K3p/xr1YMp9Okqgkj/JacYrgXwqo0SL+tJDRbTfcJ6+1OFSSLKu12l2kiz3graNvWesr1WoLH1GuwmH2lpv0vyEW38ygehKUn10ud2/T9Hitskz+6iYJkyj+D8n0OpDAQlIMERtE9pAChLQCSFPCtEdIo4ZYBsa8IDYKMXTMaAEZcjDjFmTww4ygmGE4bICxHLMghLB7OaYLzw7gwKxvj+gCFknMSotZrkFrPubBAfT0AXqE8T4HfQIvJcd/UmiJBQAAAABJRU5ErkJggg=="
		},
		278: function(e, t, n) {
			e.exports = n.p + "static/media/icon_service_webmodule.d1ccedd5.svg"
		},
		287: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return f
			});
			var a = n(16),
				s = n(33),
				i = n(7),
				r = n(0),
				o = n.n(r),
				c = n(273),
				u = n.n(c),
				l = (n(811), n(5)),
				m = n.n(l),
				p = n(165),
				d = n.n(p),
				b = n(2);

			function f(e) {
				var t = e.children,
					n = e.component,
					c = e.theme,
					l = void 0 === c ? "dark" : c,
					p = e.placement,
					f = void 0 === p ? "bottom" : p,
					h = e.onChange,
					g = Object(r.useRef)(null),
					v = Object(r.useState)(!1),
					y = Object(i.a)(v, 2),
					E = y[0],
					k = y[1],
					w = Object(b.d)().i18n,
					O = function(e) {
						k(e), d()(h) && h(e)
					};
				return o.a.createElement("div", {
					className: m()({
						"pf-content-popupmenu1": !0,
						"pf-content-popupmenu1--dark": "dark" === l,
						"pf-content-popupmenu1--white": "dark" !== l
					})
				}, o.a.createElement("a", {
					href: "javascript:;",
					ref: g,
					onClick: function() {
						return O(!E)
					}
				}, t), o.a.createElement(u.a, {
					id: "popover-1",
					placement: f,
					rootClose: !0,
					show: E,
					transition: !0,
					onHide: function() {
						return O(!1)
					},
					target: g.current
				}, function(e) {
					e.placement, e.outOfBoundaries, e.scheduleUpdate, e.arrowProps;
					var t = Object(s.a)(e, ["placement", "outOfBoundaries", "scheduleUpdate", "arrowProps"]);
					return o.a.createElement("div", Object.assign({}, t, {
						className: m()({
							"pf-language": !0,
							"pf-language-ja": "ja" === w.language
						}),
						style: Object(a.a)({
							backgroundColor: "#fff",
							color: "white",
							borderRadius: 3,
							border: "1px solid rgba(0,0,0, 0.15)",
							zIndex: 10
						}, t.style)
					}), o.a.createElement(n, {
						onClick: function() {
							return O(!1)
						}
					}))
				}))
			}
		},
		290: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(8),
				r = (n(872), n(2)),
				o = n(47);
			t.a = function(e) {
				var t = e.actionLink,
					a = e.actionText,
					c = e.actionType,
					u = e.style,
					l = void 0 === u ? {} : u,
					m = e.className,
					p = void 0 === m ? "" : m,
					d = e.onClick,
					b = void 0 === d ? function() {} : d,
					f = e.actionHref,
					h = void 0 === f ? "" : f,
					g = e.actionWebinar,
					v = s.a.createElement(s.a.Fragment, null, !c && s.a.createElement("span", null, a), ("register" === c || "gotowebinar" === c) && s.a.createElement("span", null, s.a.createElement(r.a, {
						i18nKey: "business:p.b.b.home.btf.register.free"
					}, "REGISTER FOR FREE")), "video" === c && s.a.createElement(s.a.Fragment, null, s.a.createElement("span", null, s.a.createElement(r.a, {
						i18nKey: "business:p.b.b.v.replay"
					}, "WATCH NOW")), " ", s.a.createElement("img", {
						alt: "",
						src: n(268),
						style: {
							maxWidth: "26px",
							width: "100%"
						}
					})));
				return g ? s.a.createElement(o.HashLink, {
					to: g
				}, s.a.createElement("div", {
					className: "btfv-action-button ".concat(p),
					style: l
				}, v)) : t ? s.a.createElement(i.a, {
					to: t
				}, s.a.createElement("div", {
					className: "btfv-action-button ".concat(p),
					style: l
				}, v)) : h ? s.a.createElement("a", {
					href: h,
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.a.createElement("div", {
					className: "btfv-action-button ".concat(p),
					style: l
				}, v)) : s.a.createElement("div", {
					className: "btfv-action-button ".concat(p),
					style: l,
					onClick: b
				}, v)
			}
		},
		291: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return c
			});
			var a = n(0),
				s = n.n(a),
				i = n(92),
				r = n(60),
				o = n.n(r);

			function c(e) {
				var t = e.ustDate,
					n = e.width,
					a = e.type;
				return "gbtf-event" === (void 0 === a ? "" : a) ? s.a.createElement(s.a.Fragment, null, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][o()(t).day()], ",", " ", s.a.createElement(i.a, {
					type: "gbtf-pre",
					time: t
				}), function(e) {
					if (e > 3 && e < 21) return "th";
					switch (e % 10) {
						case 1:
							return "st";
						case 2:
							return "nd";
						case 3:
							return "rd";
						default:
							return "th"
					}
				}(t.getDate()), ",", " ", s.a.createElement(i.a, {
					type: "newsDetailY",
					time: t
				})) : s.a.createElement("div", null, s.a.createElement(i.a, {
					type: n < 1024 && n > 800 ? "btfDetail" : n < 350 ? "btfDetail" : "newsIndex",
					time: t
				}), "\xa0at\xa0", s.a.createElement(i.a, {
					type: "estMin",
					time: t
				}), "\xa0EST")
			}
		},
		32: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return c
			});
			var a = n(78),
				s = n(0),
				i = n.n(s),
				r = n(5),
				o = n.n(r);
			n(821);

			function c(e) {
				var t = e.children,
					n = e.style,
					s = void 0 === n ? {} : n,
					r = e.className,
					c = void 0 === r ? "" : r,
					u = e.mobileType,
					l = void 0 !== u && u,
					m = e.id,
					p = void 0 === m ? "" : m;
				return i.a.createElement("div", {
					id: p,
					style: s,
					className: o()(Object(a.a)({
						"pf-layout-container": !0,
						"pf-layout-container--mobile": l
					}, c, !!c))
				}, t)
			}
		},
		368: function(e, t, n) {
			e.exports = n.p + "static/media/arrow_s_up.4fa350ab.svg"
		},
		369: function(e, t, n) {
			e.exports = n.p + "static/media/arrow_s_down.3f8fcb77.svg"
		},
		370: function(e, t, n) {
			e.exports = n.p + "static/media/icon_search.edee526e.svg"
		},
		371: function(e, t, n) {},
		373: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(2),
				r = n(8),
				o = n(21),
				c = n.n(o),
				u = n(290),
				l = (n(873), n(13)),
				m = n.n(l);
			t.a = function(e) {
				var t = e.label,
					a = void 0 === t ? "PANEL" : t,
					o = e.title,
					l = void 0 === o ? "" : o,
					p = e.speakers,
					d = void 0 === p ? [] : p,
					b = e.languageType,
					f = void 0 === b ? "enu" : b,
					h = e.actionLink,
					g = e.actionType,
					v = e.image,
					y = e.labelColor,
					E = e.showWatchReplay,
					k = e.eventType,
					w = e.eventList,
					O = !m()(w.filter(function(e) {
						return e.sessionSpeakers && e.sessionSpeakers.length > 2
					}));
				return s.a.createElement("div", {
					className: "btfv-event-card__wrapper"
				}, s.a.createElement(r.a, {
					to: h
				}, s.a.createElement("div", {
					className: "btfv-event-card__label",
					style: {
						backgroundColor: y
					}
				}, a), s.a.createElement("div", {
					className: "btfv-event-card__image"
				}, s.a.createElement("img", {
					src: v,
					alt: l
				}), E && s.a.createElement("div", {
					className: "btfv-event-card__button"
				}, s.a.createElement("span", {
					className: "btfv-event-card__button__text"
				}, s.a.createElement(i.a, {
					i18nKey: "business:p.b.b.v.watch.replay"
				}, "WATCH NOW")), " ", s.a.createElement("img", {
					alt: "",
					src: n(268),
					style: {
						maxWidth: "26px",
						width: "100%"
					}
				}))), s.a.createElement("div", {
					className: "btfv-event-card__title"
				}, l), s.a.createElement("div", {
					className: "btfv-event-card__speakers",
					style: {
						minHeight: O && "270px"
					}
				}, d.map(function(e, t) {
					return s.a.createElement("div", {
						className: "btfv-event-card__speaker",
						key: c()(e, "speaker.speakerName", "speaker".concat(t))
					}, s.a.createElement("img", {
						src: c()(e, "speaker.speakerImageUrl", ""),
						alt: "",
						className: "btfv-event-card__speaker__img"
					}), s.a.createElement("div", {
						style: {
							width: "calc(100% - 70px)"
						}
					}, s.a.createElement("div", {
						className: "btfv-event-card__speaker__name"
					}, c()(e, "speaker.speakerName", "")), c()(e, "speaker.brandName", "") && s.a.createElement("div", {
						className: "btfv-event-card__speaker__brand"
					}, e.speaker.brandName), s.a.createElement("div", {
						className: "btfv-event-card__speaker__position"
					}, c()(e, "speaker.speakerPosition", ""))))
				}), d.length <= 1 && "btfv" !== k && s.a.createElement("div", {
					className: "btfv-event-card__speaker"
				}, s.a.createElement("div", {
					className: "btfv-event-card__speaker__name"
				}, "enu" === f ? "Guest speakers to be announced" : "")), m()(d) && "btfv" === k && s.a.createElement("div", {
					className: "btfv-event-card__speaker"
				}, s.a.createElement("div", {
					className: "btfv-event-card__speaker__name"
				}, s.a.createElement(i.a, {
					i18nKey: "business:p.b.c.eventcard.speaker.announce"
				}, "Guest speakers to be announced")))), "btfv" !== k && s.a.createElement(u.a, {
					actionType: g
				})))
			}
		},
		385: function(e, t, n) {
			e.exports = n.p + "static/media/arrow.11da0daf.png"
		},
		386: function(e, t, n) {
			e.exports = n.p + "static/media/ico_ticket1.a85cfcab.svg"
		},
		387: function(e, t, n) {
			e.exports = n.p + "static/media/ico_ticket2.873bdae4.svg"
		},
		4: function(e, t, n) {
			"use strict";
			var a = n(9),
				s = n.n(a),
				i = n(18),
				r = n(130),
				o = n.n(r),
				c = n(206),
				u = n.n(c),
				l = n(21),
				m = n.n(l),
				p = n(39),
				d = n.n(p),
				b = n(100),
				f = n.n(b),
				h = n(64),
				g = n(116),
				v = n(4),
				y = n(259),
				E = n(204),
				k = n.n(E),
				w = {
					isExternalUrl: function(e) {
						return o()(e, "http")
					},
					isMobile: function() {
						return window.innerWidth <= 600
					},
					isPad: function() {
						return window.screen.width > 600 && window.screen.width <= 1024
					},
					isYoutube: function(e) {
						return e && -1 !== e.indexOf("youtube")
					},
					isBusiness: function() {
						var e = m()(window, "location.pathname", "/");
						return "/" === e || -1 !== e.indexOf("/business")
					},
					isInvestors: function() {
						var e = m()(window, "location.pathname", "/");
						return "/" === e || -1 !== e.indexOf("/investors")
					},
					isGcse: function() {
						var e = m()(window, "location.pathname", "/");
						return "/" === e || -1 !== e.indexOf("/gcse")
					},
					isSmb: function() {
						return -1 !== m()(window, "location.pathname", "/").indexOf("/business/solutions/smb")
					},
					isEnterprise: function() {
						var e = m()(window, "location.pathname", "/");
						return -1 !== e.indexOf("/business/solutions/enterprise") || -1 !== e.indexOf("/business/products") || -1 !== e.indexOf("/business/services") || -1 !== e.indexOf("/business/showcase/youcam-tutorial") || -1 !== e.indexOf("/business/showcase/lip-liner") || -1 !== e.indexOf("/business/showcase/earrings") || -1 !== e.indexOf("/business/showcase/eye-wear") || -1 !== e.indexOf("/business/showcase/eyebrow") || -1 !== e.indexOf("/business/showcase/eye-color") || -1 !== e.indexOf("/business/showcase/concealer") || -1 !== e.indexOf("/business/showcase/bronzer") || -1 !== e.indexOf("/business/showcase/contour") || -1 !== e.indexOf("/business/showcase/hair-color") || -1 !== e.indexOf("/business/showcase/beard-dye") || -1 !== e.indexOf("/business/showcase/beard-style") || -1 !== e.indexOf("/business/showcase/shadefinder") || -1 !== e.indexOf("/business/showcase/skincare") || -1 !== e.indexOf("/business/showcase/nail-color") || -1 !== e.indexOf("/business/showcase/face-analyzer") || -1 !== e.indexOf("/business/showcase/watches") || -1 !== e.indexOf("/business/showcase/bracelets") || -1 !== e.indexOf("/business/showcase/rings") || -1 !== e.indexOf("/business/showcase/live-shows")
					},
					isAndroid: function() {
						return /android/i.test(navigator.userAgent)
					},
					isIos: function() {
						return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
					},
					isLine: function() {
						return /LINE/i.test(navigator.userAgent)
					},
					isInstagram: function() {
						return /instagram/i.test(navigator.userAgent)
					},
					isSony: function() {
						return /401SO|402SO|501SO|502SO|601SO|602SO|701SO|D200\u2715|D21\u2715\u2715|D2202|D2203|D2206|D2212|D2243|D2302|D2303|D2305|D2306|D240\u2715|D2502|D2533|D510\u2715|D5303|D5306|D5322|D5788|D58\u2715\u2715|D65\u2715\u2715|D6563|D6603|D6616|D6633|D6643|D6646|D6653|D6683|D6708|E2003|E2006|E2033|E2043|E2053|E2104|E2105|E2114|E2115|E2124|E2303|E2306|E2312|E2333|E2353|E2363|E5303|E5306|E5333|E5343|E5353|E5363|E5506|E5533|E5553|E5563|E5603|E5606|E5633|E5643|E5653|E5663|E58\u2715\u2715|E6533|E6553|E6583|E6603|E6633|E6653|E6683|E6833|E6853|E6883|F3111|F3112|F3113|F3115|F3116|F3211|F3212|F3213|F3215|F3216|F3311|F3313|F5121|F5122|F5321|F8131|F8132|F8331|F8332|G2199|G2299|G3112|G3116|G3121|G3123|G3125|G3212|G3221|G3223|G3226|G3311|G3312|G3313|G3412|G3416|G3421|G3423|G3426|G8141|G8142|G8231|G8232|G8341|G8342|G8343|G8441|H3113|H3123|H3133|H3213|H3223|H3311|H3321|H4113|H4133|H4213|H4233|H4311|H4331|L50t|L50u|L50w|L55t|L55u|M50w|S50h|S55t|S55u|S55w|SO-01G|SO-01H|SO-01J|SO-01K|SO-02G|SO-02H|SO-02J|SO-02K|SO-03F|SO-03G|SO-03H|SO-03J|SO-04F|SO-04G|SO-04H|SO-04J|SOL25|SOL26|SOV31|SOV32|SOV33|SOV34|SOV35|SOV36|XM50h|XM50t/i.test(navigator.userAgent)
					},
					isWeixin: function() {
						return /weixin|micromessenger/i.test(navigator.userAgent)
					},
					isChrome64: function() {
						return /Chrome\/64/i.test(navigator.userAgent)
					},
					isPictureTagSupported: function() {
						return !!window.HTMLPictureElement
					},
					isWebPSupported: function() {
						var e = document.createElement("canvas");
						return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
					},
					isCameraEnabled: function(e) {
						w.isWeixin() ? e(!1) : w.isAndroid() && w.isLine() ? e(!1) : w.isAndroid() && w.isInstagram() ? e(!1) : w.isSony() && w.isChrome64() ? e(!1) : w._isVideoDeviceAvailable(e)
					},
					isIE: function() {
						return !!document.documentMode
					},
					isEdge: function() {
						return !w.isIE() && !!window.StyleMedia
					},
					isFirefox: function() {
						return "undefined" !== typeof InstallTrigger
					},
					isSublink: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
						if (!d()(t)) {
							if ("/business/global-beauty-tech-forum" === t) {
								var n = !("en" === g.a.language || !g.a.language) && "/".concat(g.a.language.replace("_", "-").toLowerCase());
								return "en" === n ? e === t : e === "".concat(n).concat(t)
							}
							return -1 !== e.indexOf(t)
						}
						var a = !0,
							s = !1,
							i = void 0;
						try {
							for (var r, o = t[Symbol.iterator](); !(a = (r = o.next()).done); a = !0) {
								var c = r.value;
								if (-1 !== e.indexOf(c)) return !0
							}
						} catch (u) {
							s = !0, i = u
						} finally {
							try {
								a || null == o.return || o.return()
							} finally {
								if (s) throw i
							}
						}
						return !1
					},
					isSameLink: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
						arguments.length > 2 && arguments[2];
						if (-1 !== e.indexOf("2021")) return e === "/fr" + t;
						if (!d()(t)) return -1 !== e.indexOf(t);
						var n = !0,
							a = !1,
							s = void 0;
						try {
							for (var i, r = t[Symbol.iterator](); !(n = (i = r.next()).done); n = !0) {
								var o = i.value;
								if (-1 !== e.indexOf(o)) return !0
							}
						} catch (c) {
							a = !0, s = c
						} finally {
							try {
								n || null == r.return || r.return()
							} finally {
								if (a) throw s
							}
						}
						return !1
					},
					_isVideoDeviceAvailable: function() {
						var e = Object(i.a)(s.a.mark(function e(t) {
							var n, a;
							return s.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!navigator.mediaDevices) {
											e.next = 8;
											break
										}
										return e.next = 3, navigator.mediaDevices.enumerateDevices();
									case 3:
										n = e.sent, a = !!n.find(function(e) {
											return "videoinput" === e.kind
										}), t(a), e.next = 9;
										break;
									case 8:
										t(!1);
									case 9:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					isSelfLink: function(e) {
						return -1 !== e.indexOf("perfectcorp.com")
					},
					isEventPageLink: function(e) {
						return -1 !== e.indexOf("events")
					},
					getNewsId: function(e) {
						return -1 !== e.indexOf("?id=") ? e.split("?id=")[1] : e.split("/")[e.split("/").length - 1]
					},
					determineLanguage: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
							t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.isBusiness(),
							n = e;
						e.length > 2 && -1 === ["zh_cn", "zh-cn", "zh_tw", "zh-tw"].indexOf(e.toLowerCase()) && (n = e.substring(0, 2));
						var a = u()(t ? h.a.business : h.a.consumer, function(e) {
							return e.i18nKey.toLowerCase() === n
						});
						return a || (a = u()(t ? h.a.business : h.a.consumer, function(e) {
							return e.code.toLowerCase() === n
						})), a && a.code ? a.code : "en"
					},
					getSupportedLanguages: function() {
						return (w.isBusiness() ? h.a.business : h.a.consumer).map(function(e) {
							return e.i18nKey.toLowerCase()
						})
					},
					isConsumerOnlyLanguage: function(e) {
						return !!h.a.consumer.filter(function(e) {
							return !h.a.business.find(function(t) {
								return t.i18nKey.toLowerCase() === e.i18nKey.toLowerCase()
							})
						}).find(function(t) {
							return t.i18nKey.toLowerCase() === e.toLowerCase()
						})
					},
					getCountryByLanguage: function(e) {
						return new Promise(function(t) {
							return "en" === e ? t("US") : "zh-tw" === e ? t("TW") : w.isChs(e) ? t("CN") : t("ja" === e ? "JP" : "ko" === e ? "KR" : "de" === e ? "DE" : "fr" === e ? "FR" : "es" === e ? "ES" : "pt" === e ? "PT" : "it" === e ? "IT" : "US")
						})
					},
					changeLanguage: function(e) {
						g.a.changeLanguage(e).then(function() {
							var t = window.location,
								n = t.pathname,
								a = t.search;
							window.location.href = "en" === e ? v.a.removePathnameLang(n, a) : "/".concat(e.replace("_", "-").toLowerCase()).concat(v.a.removePathnameLang(n)).concat(a)
						})
					},
					changeHeaderLanguage: function(e) {
						w.changeLanguage(e)
					},
					changeFooterLanguage: function(e) {
						w.changeLanguage(e), window.scrollTo(0, 0)
					},
					getYmkForShopifyAppUrl: function() {
						return "https://apps.shopify.com/youcam-makeup-official?locale=" + w.determineLanguage(g.a.language).replace("_", "-")
					},
					loadWebModule: function() {
						if (!window.YMK) {
							var e = document.createElement("script");
							e.src = y.a.getModuleSdkUrl(), e.async = !0, document.body.appendChild(e)
						}
					},
					getConsumerAppsByLanguage: function(e) {
						return w.isChs(e) ? ["ymk", "ycp"] : ["ymk", "ycp", "ycv", "ycc", "ycn", "ycf"]
					},
					isCnDomain: function() {
						return -1 !== window.location.hostname.indexOf("perfectcorp.cn")
					},
					isChs: function(e) {
						return ["zh_cn", "zh-cn"].includes(f()(e))
					},
					isEn: function(e) {
						return ["en"].includes(f()(e))
					},
					isTw: function() {
						return -1 !== window.location.href.indexOf("zh_tw") || -1 !== window.location.href.indexOf("zh-tw")
					},
					isJa: function() {
						return -1 !== window.location.href.indexOf("ja") || -1 !== window.location.href.indexOf("ja")
					},
					removePathnameLang: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
						return -1 !== e.indexOf("business") ? "".concat(e.substring(e.indexOf("/business"))).concat(t) : -1 !== e.indexOf("consumer") ? "".concat(e.substring(e.indexOf("/consumer"))).concat(t) : -1 !== e.indexOf("nft") ? "".concat(e.substring(e.indexOf("/nft"))).concat(t) : void 0
					},
					getPathnameLang: function(e) {
						var t = e.split("/");
						return -1 !== ["business", "consumer", "nft"].indexOf(t[1]) ? "en" : t[1] || "en"
					},
					getTwoLettersLang: function() {
						var e = v.a.getPathnameLang(window.location.pathname);
						switch (e) {
							case "zh-cn":
								return "cn";
							case "zh-tw":
								return "tw";
							default:
								return e
						}
					},
					convertToUst: function(e) {
						var t = new Date(e);
						return t.setTime(t.getTime() + 60 * t.getTimezoneOffset() * 1e3), new Date(t.getTime())
					},
					convertToFrenchMonth: function(e) {
						return ["JAN", "F\xc9V", "MAR", "AVR", "MAI", "JUN", "JUL", "AO\xdb", "SEP", "OCT", "NOV", "D\xc9C"][e]
					},
					isNewHeader: function() {
						var e = m()(window, "location.pathname", "/"),
							t = ["/business", "/consumer", "/consumer/apps/ymk", "/consumer/apps/ycp"];
						return o()(e, "/business") || o()(e, "/consumer") ? -1 !== t.indexOf(e) : !!e.match(/\/(fr|ja|zh-cn|zh-tw|ko|pt|es|de|it)/) && -1 !== t.indexOf(v.a.removePathnameLang(e))
					},
					twitterLink: function() {
						return v.a.isJa() ? "https://twitter.com/youcammake" : "https://twitter.com/youcamapps"
					},
					ytLink: function() {
						return v.a.isJa() ? "https://www.youtube.com/channel/UCvb76vuw_lla1ELqb-WaUnA" : v.a.isBusiness() ? "https://www.youtube.com/channel/UC7GeoFYO277cNdRa_k8TWug" : "https://www.youtube.com/channel/UCExTYT6XYEt_bT6qs7m-X0A"
					},
					fbLink: function() {
						return v.a.isTw() ? "https://www.facebook.com/YouCamApps.tw" : v.a.isJa() ? "https://www.facebook.com/perfectcorp.jp" : "https://www.facebook.com/youcamapps/"
					},
					jobLink: function() {
						return v.a.isTw() ? "https://www.104.com.tw/company/1a2x6bjgwu" : "https://www.linkedin.com/company/perfect-corp"
					},
					igLink: function() {
						return v.a.isTw() ? "https://www.instagram.com/youcamapps.tw/" : v.a.isJa() ? "https://www.instagram.com/youcammake/" : "https://instagram.com/youcamapps/"
					},
					arrayHasSameElement: function(e, t) {
						var n = e.map(function(e) {
							return k()(t, e)
						});
						return k()(n, !0)
					}
				};
			t.a = w
		},
		41: function(e, t, n) {
			"use strict";
			n.d(t, "b", function() {
				return g
			}), n.d(t, "a", function() {
				return v
			});
			var a = n(7),
				s = n(0),
				i = n.n(s),
				r = n(2),
				o = n(12),
				c = n(5),
				u = n.n(c),
				l = n(108),
				m = n.n(l),
				p = n(4),
				d = n(117),
				b = n(8),
				f = n(32),
				h = (n(838), n(466), n(106)),
				g = {
					post: {
						en: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/749dc8c7-6817-40b2-894a-c6b22f5a5df7.jpg",
							pathname: "/business/blog/general/the-complete-guide-to-beauty-tech",
							title: "Beauty Tech: The Complete Guide 2022"
						},
						fr: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/749dc8c7-6817-40b2-894a-c6b22f5a5df7.jpg",
							pathname: "/business/blog/general/le-guide-complet-de-la-beauty-tech",
							title: "Le guide complet de la Beauty Tech"
						},
						ja: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/749dc8c7-6817-40b2-894a-c6b22f5a5df7.jpg",
							pathname: "/business/blog/general/the-complete-guide-to-beauty-tech-ja",
							title: "\u4fdd\u5b58\u7248\u30112022\u5e74\u30d3\u30e5\u30fc\u30c6\u30a3\u30fc\u30c6\u30c3\u30af\u5c0e\u5165\u30fb\u6d3b\u7528\u5b8c\u5168\u30ac\u30a4\u30c9"
						},
						"zh-cn": {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/749dc8c7-6817-40b2-894a-c6b22f5a5df7.jpg",
							pathname: "/business/blog/general/complete-guide-to-beauty-tech",
							title: "\u7f8e\u5986\u79d1\u6280\u5168\u9762\u6307\u5357"
						},
						ko: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/749dc8c7-6817-40b2-894a-c6b22f5a5df7.jpg",
							pathname: "/business/blog/general/the-complete-guide-to-beauty-tech",
							title: "\ubdf0\ud2f0 \ud14c\ud06c: 2022\ub144 \uc644\ubcbd \uac00\uc774\ub4dc"
						},
						de: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/749dc8c7-6817-40b2-894a-c6b22f5a5df7.jpg",
							pathname: "/business/blog/general/der-komplette-beauty-tech-leitfaden",
							title: "Beauty Tech: Der komplette Leitfaden 2022"
						},
						it: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/749dc8c7-6817-40b2-894a-c6b22f5a5df7.jpg",
							pathname: "/business/blog/general/the-complete-guide-to-beauty-tech",
							title: "Beauty Tech: La guida completa 2021"
						},
						es: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/749dc8c7-6817-40b2-894a-c6b22f5a5df7.jpg",
							pathname: "/business/blog/general/la-completa-guia-de-belleza-tech",
							title: "Tecnolog\xeda de belleza: Gu\xeda completa 2022"
						}
					},
					video: {
						en: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/6e58686b-9de4-42f0-a7c2-690bf963a365.png",
							pathname: "/business/video/73",
							title: "The Next Generation of YouCam\u2019s AI Skin Diagnostic Solution"
						},
						fr: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/6e58686b-9de4-42f0-a7c2-690bf963a365.png",
							pathname: "/business/video/73",
							title: "The Next Generation of YouCam\u2019s AI Skin Diagnostic Solution"
						},
						ja: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/6e58686b-9de4-42f0-a7c2-690bf963a365.png",
							pathname: "/business/video/29",
							title: "AI\u808c\u5206\u6790\u6a5f\u80fd\u306e\u7d39\u4ecb"
						},
						"zh-cn": {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/6e58686b-9de4-42f0-a7c2-690bf963a365.png",
							pathname: "/business/video/76",
							title: "\u65b0\u4e00\u4ee3\u73a9\u7f8eAI\u808c\u80a4\u8bca\u65ad\u65b9\u6848"
						},
						de: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/6e58686b-9de4-42f0-a7c2-690bf963a365.png",
							pathname: "/business/video/73",
							title: "Die n\xe4chste Generation der KI-Hautdiagnosel\xf6sung von YouCam"
						},
						es: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/6e58686b-9de4-42f0-a7c2-690bf963a365.png",
							pathname: "/business/video/73",
							title: "La pr\xf3xima generaci\xf3n de la soluci\xf3n de diagn\xf3stico de la piel con IA de YouCam"
						},
						it: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/6e58686b-9de4-42f0-a7c2-690bf963a365.png",
							pathname: "/business/video/73",
							title: "La Nuova Generazione della Soluzione AI di Diagnostica Pelle YouCam"
						},
						ko: {
							imageUrl: "https://plugins-media.makeupar.com/smb/story/2022-01-26/6e58686b-9de4-42f0-a7c2-690bf963a365.png",
							pathname: "/business/video/73",
							title: "\ucc28\uc138\ub300 YouCam AI \ud53c\ubd80 \uc9c4\ub2e8 \uc194\ub8e8\uc158"
						}
					}
				};

			function v(e) {
				var t = e.onClick,
					c = m()().location,
					l = Object(r.d)().i18n,
					v = function(e) {
						return p.a.isSublink(c.pathname, e)
					},
					y = function(e) {
						return p.a.isSameLink(c.pathname, e, l.language)
					},
					E = Object(s.useState)(!0),
					k = Object(a.a)(E, 2),
					w = k[0],
					O = k[1],
					_ = p.a.isChs(l.language),
					x = [o.a.videos, d.a.isEnabled() && o.a.blog, o.a.stories, "zh_CN" !== l.language && o.a.colorReport, !_ && o.a.partners].filter(function(e) {
						return e
					}),
					S = [h.a.isBtfEnabled() && o.a.btf, "en" === l.language && o.a.education, "fr" === l.language && o.a.btfVirtual2021FR, "en" === l.language && o.a.gbtf2021, h.a.isBtfvEnabled() && o.a.btfVirtual, "en" === l.language && o.a.ces2022].filter(function(e) {
						return e
					});
				var j = function() {
						return O(!0)
					},
					A = function() {
						return O(!1)
					},
					T = l.language ? l.language.toLowerCase().replace("_", "-") : "en";
				return i.a.createElement("div", {
					className: "pf-subheader-pop-menu",
					style: {
						width: "100vw",
						padding: 0
					}
				}, i.a.createElement(f.a, {
					className: "pf-subheader-pop-menu__container",
					style: {
						maxWidth: "85%"
					}
				}, i.a.createElement("div", {
					className: "subheader-resources__left"
				}, i.a.createElement("div", {
					className: "subheader-resources__featured"
				}, i.a.createElement(b.a, {
					to: g.post[T] && g.post[T].pathname,
					className: "subheader-resources__featured__img",
					style: {
						backgroundImage: "url(".concat(g.post[T] && g.post[T].imageUrl, ")")
					},
					onClick: t
				}), i.a.createElement("div", {
					className: "subheader-resources__featured__text"
				}, i.a.createElement("div", null, i.a.createElement("div", {
					className: "subheader-resources__featured__type"
				}, i.a.createElement(r.a, {
					i18nKey: "business:c.l.s.resources.featured.post"
				}, "Featured Blog Post")), i.a.createElement(b.a, {
					to: g.post[T] && g.post[T].pathname,
					className: "subheader-resources__featured__title",
					onClick: t
				}, g.post[T] && g.post[T].title)), i.a.createElement(b.a, {
					className: "subheader-resources__featured__link",
					to: "/business/blog",
					onClick: t
				}, i.a.createElement(r.a, {
					i18nKey: "business:c.l.s.resources.more.blog.posts"
				}, "More Blog Posts"), " ", ">"))), i.a.createElement("div", {
					className: "subheader-resources__featured"
				}, i.a.createElement(b.a, {
					to: g.video[T] && g.video[T].pathname,
					className: "subheader-resources__featured__img",
					style: {
						backgroundImage: "url(".concat(g.video[T] && g.video[T].imageUrl, ")")
					},
					onClick: t
				}), i.a.createElement("div", {
					className: "subheader-resources__featured__text"
				}, i.a.createElement("div", null, i.a.createElement("div", {
					className: "subheader-resources__featured__type"
				}, i.a.createElement(r.a, {
					i18nKey: "business:c.l.s.resources.featured.video"
				}, "Featured Video")), i.a.createElement(b.a, {
					to: g.video[T] && g.video[T].pathname,
					className: "subheader-resources__featured__title",
					onClick: t
				}, g.video[T] && g.video[T].title)), i.a.createElement(b.a, {
					to: "/business/videos",
					className: "subheader-resources__featured__link",
					onClick: t
				}, i.a.createElement(r.a, {
					i18nKey: "business:c.l.s.resources.more.video"
				}, "More Videos"), " ", ">")))), i.a.createElement("div", {
					className: "pf-subheader-pop-menu__right subheader-resources__right"
				}, i.a.createElement("div", {
					className: "pf-subheader-pop-menu__menus subheader-resources__group"
				}, x.map(function(e, n) {
					return i.a.createElement("div", {
						key: "res-".concat(n)
					}, i.a.createElement(b.a, {
						key: "menu-" + n,
						to: e.link,
						className: u()({
							"pf-subheader-pop-menu__menus--active": v(e.sublinks || e.link),
							"subheader-resources__link": !0
						}),
						onClick: t
					}, e.text))
				})), i.a.createElement("div", {
					className: "pf-subheader-pop-menu__menus subheader-resources__group"
				}, S.map(function(e, a) {
					return i.a.createElement("div", {
						key: "res-".concat(a),
						onMouseEnter: "menu.business.btfVirtual" === e.id ? j : A,
						onMouseLeave: "menu.business.btfVirtual" === e.id ? A : function() {}
					}, e.link ? i.a.createElement(b.a, {
						key: "btf-" + a,
						to: e.link,
						className: u()({
							"pf-subheader-pop-menu__menus--active": y(e.link),
							"subheader-resources__link": !0
						}),
						style: {
							fontSize: "16px"
						},
						onMouseEnter: "menu.business.btfVirtual" === e.id ? j : A,
						onClick: t
					}, e.text, "en" !== l.language && "menu.business.btfVirtual" === e.id && i.a.createElement("img", {
						width: "20",
						alt: "",
						src: n(w ? 368 : 369)
					})) : i.a.createElement("div", {
						key: "btf-" + a,
						className: u()({
							"pf-subheader-pop-menu__menus--active": y(e.link),
							"subheader-resources__link": !0,
							"pf-subheader-pop-menu__menus--hover": !0
						}),
						style: {
							fontSize: "16px"
						},
						onMouseEnter: "menu.business.btfVirtual" === e.id ? j : A,
						onClick: t
					}, e.text, "en" !== l.language && "menu.business.btfVirtual" === e.id && i.a.createElement("img", {
						width: "20",
						alt: "",
						src: n(w ? 368 : 369)
					})), "en" !== l.language && "menu.business.btfVirtual" === e.id && i.a.createElement("div", {
						className: "subheader-resources__link__sub"
					}, "en" !== l.language && w && (p.a.isChs(l.language) ? [] : "fr" === l.language ? [o.a.btfVirtualUS, o.a.btfVirtualFR] : "ja" === l.language ? [o.a.btfVirtualUS, o.a.btfVirtualJP] : [o.a.btfVirtualUS, o.a.btfVirtualJP, o.a.btfVirtualFR]).map(function(e, n) {
						return i.a.createElement(b.a, {
							key: "menu-" + n,
							to: e.link,
							className: u()({
								"pf-subheader-pop-menu__menus--active": v(e.link)
							}),
							onClick: t
						}, e.text)
					})))
				})))))
			}
		},
		410: function(e, t, n) {
			e.exports = n.p + "static/media/perfect_logo.170ea44d.svg"
		},
		413: function(e, t, n) {
			"use strict";
			t.a = {
				getHeaderTopByWidth: function(e) {
					return e >= 1400 ? 40 : e >= 800 ? 60 : e >= 500 ? 80 : e >= 300 ? 100 : void 0
				},
				getSubHeaderTopByWidth: function(e) {
					return e >= 1400 ? 92 : e >= 800 ? 112 : e >= 500 ? 132 : e >= 300 ? 152 : void 0
				},
				getHeightByWidth: function(e) {
					return e >= 1400 ? 40 : e >= 800 ? 60 : e >= 500 ? 80 : e >= 300 ? 100 : void 0
				}
			}
		},
		42: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return i
			});
			var a = n(7),
				s = n(0);

			function i() {
				var e = Object(s.useState)(window.innerWidth),
					t = Object(a.a)(e, 2),
					n = t[0],
					i = t[1],
					r = function() {
						return i(window.innerWidth)
					};
				return Object(s.useEffect)(function() {
					return i(window.innerWidth), window.addEventListener("resize", r),
						function() {
							window.removeEventListener("resize", r)
						}
				}, []), n
			}
		},
		432: function(e, t, n) {
			e.exports = n.p + "static/media/icon_service_instore.a8872081.svg"
		},
		433: function(e, t, n) {
			e.exports = n.p + "static/media/icon_service_sdk.4ed5a621.svg"
		},
		435: function(e, t, n) {
			e.exports = n.p + "static/media/avatar.d340489c.png"
		},
		452: function(e, t, n) {},
		463: function(e, t, n) {
			e.exports = n.p + "static/media/icon_language.1856287d.svg"
		},
		466: function(e, t, n) {},
		468: function(e, t, n) {
			e.exports = n.p + "static/media/logo_pf.fa51a7b6.png"
		},
		469: function(e, t, n) {},
		472: function(e, t, n) {
			e.exports = n(924)
		},
		6: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(925);
			t.a = function(e) {
				return Object(a.memo)(function(t) {
					return s.a.createElement(i.a, {
						live: e.preload()
					}, s.a.createElement(e, t))
				})
			}
		},
		64: function(e, t, n) {
			"use strict";
			var a = n(2),
				s = n(0),
				i = n.n(s),
				r = {
					business: [{
						code: "en",
						i18nKey: "en",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.en"
						}, "English")
					}, {
						code: "zh_CN",
						i18nKey: "zh-CN",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.zh_CN"
						}, "\u7b80\u4f53\u4e2d\u6587")
					}, {
						code: "ja",
						i18nKey: "ja",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.ja"
						}, "\u65e5\u672c\u8a9e")
					}, {
						code: "fr",
						i18nKey: "fr",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.fr"
						}, "Fran\xe7ais")
					}, {
						code: "ko",
						i18nKey: "ko",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.ko"
						}, "\ud55c\uad6d\uc5b4")
					}, {
						code: "de",
						i18nKey: "de",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.de"
						}, "Deutsch")
					}, {
						code: "es",
						i18nKey: "es",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.es"
						}, "Espa\xf1ol")
					}, {
						code: "it",
						i18nKey: "it",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.it"
						}, "Italian")
					}],
					consumer: [{
						code: "en",
						i18nKey: "en",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.en"
						}, "English")
					}, {
						code: "zh_TW",
						i18nKey: "zh-TW",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.zh_TW"
						}, "\u6b63\u9ad4\u4e2d\u6587")
					}, {
						code: "zh_CN",
						i18nKey: "zh-CN",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.zh_CN"
						}, "\u7b80\u4f53\u4e2d\u6587")
					}, {
						code: "ja",
						i18nKey: "ja",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.ja"
						}, "\u65e5\u672c\u8a9e")
					}, {
						code: "ko",
						i18nKey: "ko",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.ko"
						}, "\ud55c\uad6d\uc5b4")
					}, {
						code: "de",
						i18nKey: "de",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.de"
						}, "Deutsch")
					}, {
						code: "fr",
						i18nKey: "fr",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.fr"
						}, "Fran\xe7ais")
					}, {
						code: "es",
						i18nKey: "es",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.es"
						}, "Espa\xf1ol")
					}, {
						code: "pt",
						i18nKey: "pt",
						text: i.a.createElement(a.a, {
							i18nKey: "business:c.l.h.language.pt"
						}, "Portugu\xeas")
					}]
				};
			t.a = r
		},
		66: function(e, t, n) {
			"use strict";
			var a = n(0),
				s = n.n(a),
				i = n(2),
				r = {
					applisting: {
						id: "menu.business.applisting",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.app.listing"
						}, "YouCam Makeup App Listing"),
						link: "/business/services/app-listing",
						i18nKey: "business:u.c.servicelinks.app.listing"
					},
					facebookarchatbot: {
						id: "menu.business.facebookarchatbot",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.facebook.ar.chatbot"
						}, "Facebook AR Chatbot"),
						link: "/business/services/facebook-ar-chatbot",
						i18nKey: "business:u.c.servicelinks.facebook.ar.chatbot"
					},
					instoreconsultation: {
						id: "menu.business.instoreconsultation",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.in.store.consultation"
						}, "In-store Consultation"),
						link: "/business/services/in-store-consultation",
						image: n(432),
						i18nKey: "business:u.c.servicelinks.in.store.consultation"
					},
					sdk: {
						id: "menu.business.sdk",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.sdk"
						}, "Mobile SDK"),
						link: "/business/services/sdk",
						image: n(433),
						i18nKey: "business:u.c.servicelinks.sdk"
					},
					taobaominiprogram: {
						id: "menu.business.taobaominiprogram",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.taobao.mini.program"
						}, "Taobao Mini-program"),
						link: "/business/services/taobao-mini-program",
						i18nKey: "business:u.c.servicelinks.taobao.mini.program"
					},
					wechatminiprogram: {
						id: "menu.business.wechatminiprogram",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.wechat.mini.program"
						}, "WeChat Mini-program"),
						link: "/business/services/wechat-mini-program",
						i18nKey: "business:u.c.servicelinks.wechat.mini.program"
					},
					restfulapi: {
						id: "menu.business.restfulapi",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.restful.api"
						}, "RESTful API"),
						i18nKey: "business:u.c.servicelinks.restful.api"
					},
					youcam4web: {
						id: "menu.business.youcam4web",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.header.servicelinks.youcam.4.web"
						}, "YouCam for Web (Web SDK)"),
						link: "/business/services/youcam-4-web",
						i18nKey: "business:u.c.header.servicelinks.youcam.4.web",
						image: n(278)
					},
					youcam4google: {
						id: "menu.business.youcam4google",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.ar.virtual.makeup.for.google.and.youtube"
						}, "AR Virtual Makeup for Google and YouTube"),
						link: "/business/services/youcam-4-google",
						i18nKey: "business:u.c.servicelinks.ar.virtual.makeup.for.google.and.youtube"
					},
					virtualmakeupsnapchat: {
						id: "menu.business.virtualmakeupsnapchat",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.virtual.makeup.snapchat"
						}, "AR Virtual Makeup for Snapchat"),
						link: "/business/services/virtual-makeup-snapchat",
						i18nKey: "business:u.c.servicelinks.virtual.makeup.snapchat"
					},
					douyinminiprogram: {
						id: "menu.business.douyinminiprogram",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.servicelinks.douyin.mini.program"
						}, "Douyin Mini-program"),
						link: "/business/services/douyin-mini-program",
						i18nKey: "business:u.c.servicelinks.douyin.mini.program"
					},
					webmodule: {
						id: "menu.business.webmodule",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.web.module"
						}, "E-commerce Web Module"),
						link: "/business/services/youcam-4-web",
						image: n(278),
						i18nKey: "business:u.c.web.module"
					},
					virtualmakeupinstagram: {
						id: "menu.business.virtualmakeupinstagram",
						text: s.a.createElement(i.a, {
							i18nKey: "business:u.c.virtual.makeup.instagram"
						}, "AR Virtual Makeup for Instagram"),
						link: "/business/services/virtual-makeup-instagram",
						i18nKey: "business:u.c.virtual.makeup.instagram"
					}
				};
			t.a = r
		},
		70: function(e) {
			e.exports = {
				defaultUrl: "https://www.perfectcorp.com/",
				defaultSiteName: "Perfect Corp",
				defaultAuthor: "Perfect Corp",
				defaultTitle: "Beauty AR Company and Makeup AR Technology Platform",
				defaultDescription: "Beauty AR Company and Makeup AR Technology Platform",
				defaultH1: ["Beauty AR Company and Makeup AR Technology Platform"],
				defaultH2: ["Beauty AR Company and Makeup AR Technology Platform"],
				defaultBold: ["Beauty AR Company and Makeup AR Technology Platform"],
				defaultType: "Corporation",
				defaultSeoType: "website"
			}
		},
		705: function(e, t, n) {},
		72: function(e, t, n) {
			"use strict";
			var a = n(7),
				s = n(0),
				i = n.n(s),
				r = n(10),
				o = n(2),
				c = n(272),
				u = n.n(c),
				l = n(5),
				m = n.n(l),
				p = n(91),
				d = n(8),
				b = (n(808), n(171)),
				f = n(4);

			function h(e) {
				var t = e.isBusiness,
					n = f.a.isMobile();
				return i.a.createElement("div", {
					className: "pf-header__logo"
				}, i.a.createElement("span", {
					className: "helper"
				}), i.a.createElement(d.a, {
					to: t ? "/business" : "/consumer"
				}, i.a.createElement(b.a, {
					alt: "logo",
					platform: "desktop",
					filename: "logo_pf-wyzzm8nmo4.png",
					small: !0,
					width: n ? "114" : "150",
					height: n ? "22" : "29"
				})))
			}
			var g = n(78);
			n(452), n(809);

			function v(e) {
				var t, n, a = e.isBusiness,
					s = e.gtmClassNamePrefix,
					r = void 0 === s ? "" : s,
					c = e.isNewHeader,
					u = Object(o.d)().i18n;
				return i.a.createElement("div", {
					className: "pf-header__menus"
				}, i.a.createElement(d.a, {
					to: "/business",
					className: m()((t = {
						"pf-header__menu": !0,
						"pf-header__menu--active": a
					}, Object(g.a)(t, "".concat(r, "_business_").concat(f.a.determineLanguage(u.language)), !0), Object(g.a)(t, "v1", !c), t)),
					isBusiness: !0
				}, i.a.createElement(o.a, {
					i18nKey: "business:c.l.h.menu.for.business"
				}, "Business"), " "), i.a.createElement(d.a, {
					to: "/consumer",
					className: m()((n = {
						"pf-header__menu": !0,
						"pf-header__menu--active": !a
					}, Object(g.a)(n, "".concat(r, "_consumer_").concat(f.a.determineLanguage(u.language)), !0), Object(g.a)(n, "v1", !c), n)),
					isBusiness: !1
				}, i.a.createElement(o.a, {
					i18nKey: "business:c.l.h.menu.for.consumer"
				}, "Consumer"), " "))
			}
			n(810);
			var y = n(34),
				E = n(287),
				k = n(64);

			function w(e) {
				var t = e.isBusiness,
					o = e.isScrolled,
					c = Object(r.useLocation)(),
					u = t ? k.a.business : k.a.consumer,
					l = Object(s.useMemo)(f.a.isNewHeader, [window.location.pathname]),
					m = y.a.language ? y.a.language : "en",
					p = function() {
						return u.find(function(e) {
							return e.i18nKey.replace("-", "_").toLowerCase() === m.replace("-", "_").toLowerCase()
						})
					},
					d = Object(s.useState)(p),
					b = Object(a.a)(d, 2),
					h = b[0],
					g = b[1],
					v = window.location;
				v.pathname, v.search;
				return Object(s.useEffect)(function() {
					y.a.language && g(p)
				}, [y.a.language, c]), [i.a.createElement("div", {
					key: "language",
					className: "pf-header__language"
				}, i.a.createElement(E.a, {
					component: function() {
						return i.a.createElement("div", {
							className: "pf-language-menu"
						}, u.map(function(e) {
							return i.a.createElement("div", {
								className: "pf-language-menu__item",
								key: e.code
							}, i.a.createElement("div", {
								onClick: function() {
									return f.a.changeHeaderLanguage(e.code)
								}
							}, e.text))
						}))
					},
					theme: l && o ? "dark" : "white",
					placement: "bottom-end"
				}, i.a.createElement("div", {
					className: "pf-header__language"
				}, i.a.createElement("span", {
					className: "helper"
				}), i.a.createElement("img", {
					alt: "",
					src: n(o && l ? 820 : 463),
					width: "22",
					height: "22"
				}), " ", i.a.createElement("span", null, h ? h.text : u[0].text))))]
			}
			var O = n(32),
				_ = n(199),
				x = (n(849), n(132));

			function S(e) {
				var t = e.isBusiness,
					n = e.isNewHeader,
					r = e.isScrolled,
					c = Object(s.useState)(!1),
					u = Object(a.a)(c, 2),
					l = u[0],
					p = u[1],
					b = Object(o.d)().i18n;
				return i.a.createElement("div", {
					className: m()({
						"pf-header": !0,
						v1: !n
					})
				}, i.a.createElement(O.a, {
					style: {
						maxWidth: "none"
					},
					className: "pf-header-container"
				}, i.a.createElement("div", {
					className: "pf-header__left"
				}, i.a.createElement("span", {
					onClick: function() {
						return p(!1)
					}
				}, i.a.createElement(h, {
					isBusiness: t
				})), i.a.createElement(v, {
					isBusiness: t,
					gtmClassNamePrefix: "gtm_".concat(t ? "business" : "consumer", "_header"),
					isNewHeader: n
				})), i.a.createElement("div", {
					className: "pf-header__right"
				}, i.a.createElement(x.a, {
					isScrolled: r,
					is2b: f.a.isBusiness(),
					isNewHeader: n
				}), f.a.isBusiness() && "en" === b.language && i.a.createElement(d.a, {
					className: "pf-header__investors",
					to: "/business/investors",
					style: {
						color: n && r && "#212529"
					}
				}, i.a.createElement(o.a, {
					i18nKey: "business:c.l.s.rightmenu.investors"
				}, "Investors")), f.a.isBusiness() && i.a.createElement(d.a, {
					className: "pf-header__sign-in",
					to: "/business/user/sign-in",
					style: {
						color: n && r && "#212529"
					}
				}, i.a.createElement(o.a, {
					i18nKey: "business:c.l.s.rightmenu.sign.in"
				}, "Sign In")), i.a.createElement(w, {
					isBusiness: t,
					isScrolled: r
				})), i.a.createElement(_.a, {
					isBusiness: t,
					isScrolled: r,
					popupMenu: l,
					setPopupMenu: p,
					isNewHeader: n
				})))
			}
			var j = n(26),
				A = n(1),
				T = Object(A.a)(function() {
					return n.e(174).then(n.bind(null, 3413))
				}),
				C = Object(A.a)(function() {
					return n.e(175).then(n.bind(null, 3434))
				}),
				N = n(102),
				P = n(42),
				K = n(158),
				I = n.n(K);
			n(851), n(413), n(852);

			function B(e) {
				e.isBusiness;
				return i.a.createElement("div", {
					className: "pf-header__logo-ppc"
				}, i.a.createElement("span", {
					className: "helper"
				}), i.a.createElement(d.a, {
					to: "/business"
				}, i.a.createElement("img", {
					src: n(853),
					alt: "perfect"
				})))
			}
			n(854);
			var L = function(e) {
				var t = e.link,
					n = e.text,
					a = e.style,
					s = e.hash;
				return i.a.createElement("div", {
					className: "pf-header__btn-ppc",
					style: {
						display: "table"
					}
				}, i.a.createElement("div", {
					style: {
						display: "table-cell",
						verticalAlign: "middle"
					}
				}, i.a.createElement(d.a, {
					to: t,
					className: "pf-btn__trial gtm_campaignlp-smb_header_start-free-trial",
					isBusiness: !0,
					style: a,
					hash: s
				}, i.a.createElement("div", {
					className: "pf-btn__trial-text"
				}, n))))
			};
			n(855);

			function R(e) {
				var t = e.isBusiness,
					n = (e.hideStatement, e.width),
					r = Object(o.d)().i18n,
					c = Object(s.useState)(!1),
					u = Object(a.a)(c, 2),
					l = (u[0], u[1]),
					m = Object(P.a)(),
					p = function() {
						document.documentElement.dataset.scroll = window.scrollY, document.documentElement.dataset.scroll50 = window.scrollY > 50, document.documentElement.dataset.scroll100 = window.scrollY > 100, document.documentElement.dataset.scroll150 = window.scrollY > 150
					};
				document.addEventListener("scroll", function(e) {
					var t;
					return function() {
						for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
						t && cancelAnimationFrame(t), t = requestAnimationFrame(function() {
							e.apply(void 0, a)
						})
					}
				}(p)), Object(s.useEffect)(function() {
					p()
				}, []);
				var d = m > 768 ? 77 : 69,
					b = -1 !== window.location.pathname.indexOf("skin-diagnostic"),
					f = -1 !== window.location.pathname.indexOf("/vto"),
					h = -1 !== window.location.pathname.indexOf("skin-analysis"),
					g = -1 !== window.location.pathname.indexOf("virtual-makeup");
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: "pf-header__ppc",
					style: {
						backgroundColor: f ? "rgb(255, 255, 255)" : "inherit"
					}
				}, i.a.createElement(O.a, {
					className: "pf-header__ppc-mobile"
				}, i.a.createElement("div", {
					className: "pf-header__left"
				}, i.a.createElement("span", {
					onClick: function() {
						return l(!1)
					}
				}, i.a.createElement(B, {
					isBusiness: t
				}))), i.a.createElement("div", {
					className: "pf-header__right",
					style: {
						display: "block"
					}
				}, i.a.createElement(L, {
					link: g ? "/business/campaign/virtual-makeup" : b || f ? "/business/contact-us/sales" : h ? "/business/campaign/ai-skin-analysis" : "/business/user/free-trial",
					hash: "contactsales",
					text: f ? i.a.createElement(o.a, {
						i18nKey: "business:p.b.c.header2.request.free.demo"
					}, "Request Free Demo") : b || h || g ? i.a.createElement(i.a.Fragment, null, "ja" === r.language && n <= 500 ? i.a.createElement(o.a, {
						i18nKey: "business:p.b.c.header2.contact.us.now"
					}, "Contact Us Now") : i.a.createElement(o.a, {
						i18nKey: "business:p.b.c.arskindiagnostic.contact.us.now"
					}, "Contact Us Now")) : i.a.createElement(o.a, {
						i18nKey: "business:c.l.h.btn.trial.title"
					}, "Try free for 30 days")
				})))), i.a.createElement("div", {
					className: "pf-header__ppc-shadow",
					style: {
						top: "".concat(d, "px")
					}
				}))
			}
			n(856);

			function F(e) {
				var t = e.title;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: "pf-header__default"
				}, i.a.createElement("div", {
					className: "pf-header__default-title"
				}, t)))
			}

			function D(e) {
				var t = e.children,
					n = Object(r.useLocation)(),
					c = Object(o.d)().i18n,
					l = f.a.isBusiness(),
					d = f.a.isSmb(),
					b = Object(s.useMemo)(f.a.isNewHeader, [window.location.pathname]);
				var h = Object(s.useState)("sticky"),
					g = Object(a.a)(h, 2),
					v = g[0],
					y = g[1],
					E = Object(s.useState)(!0),
					k = Object(a.a)(E, 2),
					w = k[0],
					O = k[1];
				Object(s.useEffect)(function() {
					"ReactSnap" !== window.navigator.userAgent && O(j.a.getCookieStatement())
				}, []), Object(s.useEffect)(function() {
					-1 !== n.pathname.indexOf("/business/showcase") && f.a.isMobile() ? y("relative") : y("sticky")
				}, [n.pathname]);
				var _ = Object(P.a)(),
					x = Object(s.useState)(window.pageYOffset),
					A = Object(a.a)(x, 2),
					K = A[0],
					B = A[1],
					L = u()(function() {
						B(window.pageYOffset)
					}, 200);
				return Object(s.useEffect)(function() {
					return B(0), window.addEventListener("scroll", L, {
							passive: !0
						}),
						function() {
							window.removeEventListener("scroll", L)
						}
				}, [b]), i.a.createElement(p.b, null, i.a.createElement("div", {
					className: m()({
						"pf-language": !0,
						"pf-language-ja": "ja" === c.language,
						"fade-header": !0,
						v1: !b,
						scrolled: K > 0
					}),
					style: {
						position: "sticky" === v ? "sticky" : "relative"
					}
				}, function(e, t) {
					var n = "en" !== c.language && c.language ? "/".concat(c.language.replace("_", "-").toLowerCase()) : "",
						a = -1 !== I()(["".concat(n, "/business/campaign/smb"), "".concat(n, "/business/campaign/ai-skin-diagnostic"), "".concat(n, "/business/campaign/skin-diagnostic"), "".concat(n, "/business/campaign/ai-skin-analysis"), "".concat(n, "/business/campaign/skin-analysis"), "".concat(n, "/business/campaign/vto"), "".concat(n, "/business/campaign/vto-v1"), "".concat(n, "/business/campaign/virtual-makeup")], window.location.pathname),
						s = -1 !== I()(["".concat(n, "/business/SDK/privacy")], window.location.pathname);
					return -1 !== window.location.href.indexOf("/highlight/ymk") ? i.a.createElement("div", null) : a ? i.a.createElement(R, {
						isBusiness: l,
						hideStatement: w,
						width: _
					}) : s ? i.a.createElement(F, {
						title: "SDK Privacy Policy"
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(S, {
						isBusiness: l,
						width: _,
						isNewHeader: b,
						isScrolled: t
					}), _ > 600 ? l ? i.a.createElement(T, {
						isSmb: d,
						width: _,
						isNewHeader: b
					}) : i.a.createElement(C, {
						width: _,
						isNewHeader: b
					}) : null)
				}(0, K > 0)), t, i.a.createElement(N.a, {
					hideStatement: !!w,
					setHideStatement: O
				}))
			}
			n.d(t, "a", function() {
				return D
			})
		},
		74: function(e, t, n) {
			"use strict";
			var a = n(16),
				s = n(9),
				i = n.n(s),
				r = n(18),
				o = n(25),
				c = n.n(o),
				u = n(26),
				l = n(85),
				m = n.n(l),
				p = n(395),
				d = n.n(p),
				b = n(13),
				f = n.n(b),
				h = n(163),
				g = n.n(h),
				v = {
					triggerMemberRegisterAffiliate: function(e) {
						if (!f()(e)) return v.loadScript("//track.bannerbridge.net/lead_js.php", [18240], e)
					},
					loadScript: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
							t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [18240],
							n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
							s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
							i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
						if (!f()(e)) {
							var r = d()({
								proID: t,
								orderid: n,
								trans_amount: s,
								productID: i
							}, g.a);
							return new Promise(function(t, n) {
								var s = document.createElement("script");
								s.src = "".concat(e, "?").concat(m.a.stringify(Object(a.a)({}, r))), s.async = !0, s.onload = t, s.onerror = n, document.body.appendChild(s)
							})
						}
					}
				},
				y = v,
				E = n(90),
				k = n(4),
				w = n(34),
				O = n(107);
			n.d(t, "a", function() {
				return _
			});
			var _ = {
					accountSummary: null,
					isFirstLoaded: !1
				},
				x = {
					loadAuth: function() {
						var e = Object(r.a)(i.a.mark(function e() {
							var t;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (u.a.getIsAttemptingToSignIn()) {
											e.next = 2;
											break
										}
										return e.abrupt("return", Promise.reject("loadAuth-fail"));
									case 2:
										return e.next = 4, c()("/smb-frontend/auth/auth.action", {
											method: "GET",
											credentials: "same-origin"
										});
									case 4:
										if (!(t = e.sent).ok) {
											e.next = 9;
											break
										}
										return e.next = 8, t.json();
									case 8:
										return e.abrupt("return", e.sent);
									case 9:
										return e.abrupt("return", Promise.reject("loadAuth-fail"));
									case 10:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					signIn: function() {
						var e = Object(r.a)(i.a.mark(function e(t, n) {
							var a, s, r, o, l, m = arguments;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return a = m.length > 2 && void 0 !== m[2] ? m[2] : "", s = m.length > 3 ? m[3] : void 0, r = m.length > 4 ? m[4] : void 0, u.a.setIsAttemptingToSignIn(!0), e.next = 6, c()("/smb-frontend/auth/sign-in.action", {
											method: "POST",
											credentials: "include",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify({
												email: t,
												password: n,
												recaptcha: a,
												customerType: s,
												next: r,
												responseType: "json"
											})
										});
									case 6:
										if (!(o = e.sent).ok) {
											e.next = 11;
											break
										}
										return e.next = 10, o.json();
									case 10:
										return e.abrupt("return", e.sent);
									case 11:
										return e.next = 13, o.json();
									case 13:
										return l = e.sent, e.abrupt("return", Promise.reject(l));
									case 15:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					signOut: function() {
						var e = Object(r.a)(i.a.mark(function e() {
							var t;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/auth/sign-out.action", {
											method: "GET",
											credentials: "same-origin"
										});
									case 2:
										if (!(t = e.sent).ok) {
											e.next = 5;
											break
										}
										return e.abrupt("return", t);
									case 5:
										return e.abrupt("return", Promise.reject("signOut-fail"));
									case 6:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					checkEmail: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/auth/check-email.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify({
												email: t
											})
										});
									case 2:
										if (!(n = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, n.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.abrupt("return", Promise.reject({
											status: n.status,
											statusText: n.statusText
										}));
									case 8:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					checkBusinessName: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/auth/check-business-name.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify({
												businessName: t
											})
										});
									case 2:
										if (!(n = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, n.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.abrupt("return", Promise.reject({
											status: n.status,
											statusText: n.statusText
										}));
									case 8:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					checkTrial: function() {
						var e = Object(r.a)(i.a.mark(function e() {
							var t;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, c()("/smb-frontend/subscription/check-trial.action", {
											method: "GET",
											credentials: "same-origin"
										});
									case 3:
										if (!(t = e.sent).ok) {
											e.next = 8;
											break
										}
										return e.next = 7, t.json();
									case 7:
										return e.abrupt("return", e.sent);
									case 8:
										return e.abrupt("return", Promise.reject({
											status: t.status,
											statusText: t.statusText
										}));
									case 11:
										return e.prev = 11, e.t0 = e.catch(0), e.abrupt("return", Promise.reject());
									case 14:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[0, 11]
							])
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					createTrial: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n, s, r, o;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return n = O.a.getSupportSourceUtm(), e.next = 3, c()("/smb-frontend/subscription/create-trial.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify(Object(a.a)({}, t, {
												sourceUtm: n,
												responseType: "json"
											}))
										});
									case 3:
										if (!(s = e.sent).ok) {
											e.next = 14;
											break
										}
										return e.next = 7, s.json();
									case 7:
										return r = e.sent, o = "en" === w.a.language ? "/business/user/free-trial/success" : "/".concat(w.a.language, "/business/user/free-trial/success"), E.a.sendVirtualPageView({
											type: "FREE_TRIAL",
											url: o,
											title: "start free trial"
										}), E.a.sendMultilingualVirtualPageView({
											url: o,
											title: "start free trial"
										}, k.a.determineLanguage(w.a.language)), console.log({
											json: r
										}), y.triggerMemberRegisterAffiliate(r.customerId).then(function(e) {
											console.log({
												r: e
											})
										}), e.abrupt("return", r);
									case 14:
										return e.abrupt("return", Promise.reject({
											status: s.status,
											statusText: s.statusText
										}));
									case 15:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					checkSubscription: function() {
						var e = Object(r.a)(i.a.mark(function e() {
							var t;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/subscription/check-subscription.action", {
											method: "GET",
											credentials: "same-origin"
										});
									case 2:
										if (!(t = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, t.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.abrupt("return", Promise.reject({
											status: t.status,
											statusText: t.statusText
										}));
									case 8:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					createSubscription: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n, s;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/subscription/create-subscription.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify(Object(a.a)({}, t, {
												responseType: "json"
											}))
										});
									case 2:
										if (!(n = e.sent).ok) {
											e.next = 9;
											break
										}
										return e.next = 6, n.json();
									case 6:
										return s = e.sent, window.location.href = s.redirectUrl, e.abrupt("return", s);
									case 9:
										return e.abrupt("return", Promise.reject({
											status: n.status,
											statusText: n.statusText
										}));
									case 10:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					checkPartner: function() {
						var e = Object(r.a)(i.a.mark(function e() {
							var t;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/partner/check-partner.action", {
											method: "GET",
											credentials: "same-origin"
										});
									case 2:
										if (!(t = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, t.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.abrupt("return", Promise.reject({
											status: t.status,
											statusText: t.statusText
										}));
									case 8:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					createPartner: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/partner/create-partner.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify(Object(a.a)({}, t, {
												responseType: "json"
											}))
										});
									case 2:
										if (!(n = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, n.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.abrupt("return", Promise.reject({
											status: n.status,
											statusText: n.statusText
										}));
									case 8:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					verifyEmail: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/account/verify-email.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify({
												code: t
											})
										});
									case 2:
										if (!(n = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, n.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.abrupt("return", Promise.reject({
											status: n.status,
											statusText: n.statusText
										}));
									case 8:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					forgotPassword: function() {
						var e = Object(r.a)(i.a.mark(function e(t) {
							var n;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/account/forgot-password.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify({
												email: t
											})
										});
									case 2:
										if (!(n = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, n.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.prev = 7, e.t0 = Promise, e.t1 = n.status, e.t2 = n.statusText, e.next = 13, n.json();
									case 13:
										return e.t3 = e.sent, e.t4 = {
											status: e.t1,
											statusText: e.t2,
											message: e.t3
										}, e.abrupt("return", e.t0.reject.call(e.t0, e.t4));
									case 18:
										return e.prev = 18, e.t5 = e.catch(7), e.abrupt("return", Promise.reject(e.t5));
									case 21:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[7, 18]
							])
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					resetPassword: function() {
						var e = Object(r.a)(i.a.mark(function e(t, n) {
							var a;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/account/reset-password.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify({
												code: t,
												password: n
											})
										});
									case 2:
										if (!(a = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, a.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.prev = 7, e.t0 = Promise, e.t1 = a.status, e.t2 = a.statusText, e.next = 13, a.json();
									case 13:
										return e.t3 = e.sent, e.t4 = {
											status: e.t1,
											statusText: e.t2,
											message: e.t3
										}, e.abrupt("return", e.t0.reject.call(e.t0, e.t4));
									case 18:
										return e.prev = 18, e.t5 = e.catch(7), e.abrupt("return", Promise.reject(e.t5));
									case 21:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[7, 18]
							])
						}));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					setupPassword: function() {
						var e = Object(r.a)(i.a.mark(function e(t, n) {
							var a;
							return i.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, c()("/smb-frontend/account/setup-password.action", {
											method: "POST",
											credentials: "same-origin",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json"
											},
											body: JSON.stringify({
												code: t,
												password: n
											})
										});
									case 2:
										if (!(a = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, a.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.prev = 7, e.t0 = Promise, e.t1 = a.status, e.t2 = a.statusText, e.next = 13, a.json();
									case 13:
										return e.t3 = e.sent, e.t4 = {
											status: e.t1,
											statusText: e.t2,
											message: e.t3
										}, e.abrupt("return", e.t0.reject.call(e.t0, e.t4));
									case 18:
										return e.prev = 18, e.t5 = e.catch(7), e.abrupt("return", Promise.reject(e.t5));
									case 21:
									case "end":
										return e.stop()
								}
							}, e, null, [
								[7, 18]
							])
						}));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}()
				};
			t.b = x
		},
		77: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return s
			});
			var a = n(0);

			function s() {
				Object(a.useLayoutEffect)(function() {
					return window.scrollTo(0, 0)
				}, [])
			}
		},
		8: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return p
			});
			var a = n(33),
				s = n(0),
				i = n.n(s),
				r = n(14),
				o = n(47),
				c = n(4),
				u = n(130),
				l = n.n(u),
				m = n(2);

			function p(e) {
				var t = e.to,
					n = e.hash,
					s = e.isBusiness,
					u = e.linkRef,
					p = e.children,
					d = e.isNewTab,
					b = void 0 !== d && d,
					f = e.rel,
					h = Object(a.a)(e, ["to", "hash", "isBusiness", "linkRef", "children", "isNewTab", "rel"]),
					g = Object(m.d)().i18n;
				if (!t) return i.a.createElement(r.Link, Object.assign({
					to: "",
					ref: u
				}, h), p);
				var v = c.a.determineLanguage(g.language, s).replace("_", "-").toLowerCase(),
					y = "en" === v ? "" : "/".concat(v);
				return l()(t, "http") ? i.a.createElement("a", Object.assign({
					href: t,
					ref: u
				}, h, {
					rel: f || "noopener noreferrer",
					target: b ? "_blank" : "_self"
				}), p) : (t = c.a.removePathnameLang(t), n ? i.a.createElement(o.HashLink, Object.assign({
					to: "".concat(y).concat(t, "#").concat(n),
					ref: u
				}, h), p) : i.a.createElement(r.Link, Object.assign({
					target: b ? "_blank" : "_self",
					rel: f && f,
					to: "".concat(y).concat(t),
					ref: u
				}, h), p))
			}
		},
		808: function(e, t, n) {},
		809: function(e, t, n) {},
		810: function(e, t, n) {},
		811: function(e, t, n) {},
		820: function(e, t, n) {
			e.exports = n.p + "static/media/icon_language_black.30b3c3a5.svg"
		},
		821: function(e, t, n) {},
		822: function(e, t, n) {},
		824: function(e, t, n) {},
		838: function(e, t, n) {},
		839: function(e, t, n) {},
		840: function(e, t, n) {
			e.exports = n.p + "static/media/active-search.ee860326.svg"
		},
		841: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABlBMVEX///8AAABVwtN+AAABDElEQVQ4y7XSsa3EIAwGYEcurrssgMQadKyULPBCFkhWossaSCwQOhfo/ue7AfA1Z1mCrwB+S9AvioHyF2jLgBhKVHH5OxQKhk4pC5VV6usLzeAzf6VNcARbmiURzbmQJaAeQRuQsbT4IP5sLcWu/aQ+ZUMreL/8Ltpj8QlN7Sj4V7CUaQk+Ee9iKFF5xs9wYSyaLrc8dK2HIb6jToYjampDTfhFtQmaIY1Q74dPkSZDvMPr9e39DceiGX2+ypo5WaL3cP4UfWEsbrlvUpaIPY+lxSm6SfgIYzFQkfWFmiwlqmcGhG8ypCfa5TZoFlMaudPDzV9oEzdfbhZDiVSdqK+WgPIMaJooD/X7+geRr/jcxzoJQgAAAABJRU5ErkJggg=="
		},
		842: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAABlBMVEX///8AAABVwtN+AAABNUlEQVRYw+2WsRHEMAgEceQy1KlsdUoZRObvEJ5v4IML/obRINYBIwGy/fVznQk9ZvN0+mEXA65B3Co8bawYN3wGVciVXjuutDMfKcJdQvfpcsTGDaOvRbBgt/ItSexVSAV4kG3VJRqkNdi7YUf0XoIwa2a6YlQl0lmhQVo9+UpwXIMM9m6wAC9m3WENYnRrPZJGJzRIj7oyG4vFOB4TISw9FOC9eyX38HMJUplOcMSCH+7HVofsG55cR/JQNcieLjD+nvQ9TxMhPjvlvPv1gLkIOfr5qqls3SUiZPb8A+wDPkKFXMHGZYyt3JcvQaDOHeGKAYqQt/qgle9fp5kG8WrZHipHZb1ChTDT6pXn28SuRBDbnIN5pRQhRIBHC4WJECydNa2yViHvK2EDlixG+Brkr9/qA2iUobLcd4m2AAAAAElFTkSuQmCC"
		},
		843: function(e, t, n) {
			e.exports = n.p + "static/media/ycp-qrcode.641058aa.png"
		},
		844: function(e, t, n) {
			e.exports = n.p + "static/media/ymk-qrcode.7f3c08b0.png"
		},
		845: function(e, t, n) {
			e.exports = n.p + "static/media/sign_out.08526ebc.svg"
		},
		846: function(e, t, n) {},
		847: function(e, t, n) {
			e.exports = n.p + "static/media/menu_black.eb79a0a0.svg"
		},
		848: function(e, t, n) {
			e.exports = n.p + "static/media/menu_white.daecbe3d.svg"
		},
		849: function(e, t, n) {},
		850: function(e, t, n) {},
		851: function(e, t, n) {},
		852: function(e, t, n) {},
		853: function(e, t, n) {
			e.exports = n.p + "static/media/logo.aad85021.svg"
		},
		854: function(e, t, n) {},
		855: function(e, t, n) {},
		856: function(e, t, n) {},
		857: function(e, t, n) {},
		858: function(e, t, n) {},
		87: function(e, t, n) {
			"use strict";
			var a = n(16),
				s = {
					getCookie: function(e) {
						var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
						return t ? decodeURIComponent(t[1]) : void 0
					},
					setCookie: function(e, t) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						(n = Object(a.a)({
							path: "/"
						}, n)).expires && n.expires.toUTCString && (n.expires = n.expires.toUTCString());
						var s = encodeURIComponent(e) + "=" + encodeURIComponent(t);
						for (var i in n) {
							s += "; " + i;
							var r = n[i];
							!0 !== r && (s += "=" + r)
						}
						document.cookie = s
					},
					deleteCookie: function(e) {
						s.setCookie(e, "", {
							expires: -1
						})
					}
				};
			t.a = s
		},
		872: function(e, t, n) {},
		873: function(e, t, n) {},
		890: function(e, t) {},
		90: function(e, t, n) {
			"use strict";
			var a = function(e) {
					window.dataLayer = window.dataLayer || [], window.dataLayer.push(e)
				},
				s = {
					sendVirtualPageView: function(e) {
						a({
							event: "VirtualPageView",
							virtualPageURL: e.url,
							virtualPageTitle: e.title
						})
					},
					sendMultilingualVirtualPageView: function(e, t) {
						a({
							event: "MultilingualVirtualPageView_" + t,
							virtualPageURL: e.url,
							virtualPageTitle: e.title
						})
					},
					sendMultilingualPageView: function(e) {
						a({
							event: "".concat("MultilingualEvent_" + e)
						})
					},
					loadGtagScript: function() {
						
					},
					sendRotateBannerShowedEvent: function(e, t) {
						a({
							event: "".concat("RotateBannerShowedEvent", "_").concat(t),
							bannerType: e
						})
					},
					sendSubmitSuccessPopUp: function() {
						a({
							event: "email-sub-success-popup"
						})
					},
					sendSubmitSuccessFooter: function() {
						a({
							event: "email-sub-success-bottom"
						})
					},
					sendColorTrendsSubmitSuccess: function() {
						a({
							event: "trend-report-success"
						})
					},
					sendBeautyTechForumSubmitSuccess: function() {
						a({
							event: "video-archive-success"
						})
					},
					sendBeautyTechForumPardotSubmitSuccess: function() {
						a({
							event: "ms-register"
						})
					},
					sendInvestorsSubmitSuccess: function() {
						a({
							event: "ir-register"
						})
					},
					sendPartnersSubmitSuccess: function() {
						a({
							event: "partners-success"
						})
					}
				};
			t.a = s
		},
		905: function(e, t, n) {},
		906: function(e, t, n) {},
		907: function(e, t, n) {},
		909: function(e, t, n) {
			e.exports = n.p + "static/media/ico_date.923afd8d.svg"
		},
		91: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return c
			}), n.d(t, "c", function() {
				return u
			}), n.d(t, "b", function() {
				return l
			});
			var a = n(16),
				s = n(7),
				i = n(0),
				r = n.n(i),
				o = n(74),
				c = r.a.createContext({
					accountSummary: null,
					isFirstLoaded: !1,
					isLoaded: !1,
					isSignIn: !1
				}),
				u = function(e) {
					return function(t) {
						return r.a.createElement(c.Consumer, null, function(n) {
							return r.a.createElement(e, Object.assign({}, t, {
								auth: n
							}))
						})
					}
				};

			function l(e) {
				var t = e.children,
					n = Object(i.useState)(o.a.isFirstLoaded),
					u = Object(s.a)(n, 2),
					l = u[0],
					m = u[1],
					p = Object(i.useState)(!!o.a.accountSummary),
					d = Object(s.a)(p, 2),
					b = d[0],
					f = d[1],
					h = Object(i.useState)(o.a.accountSummary),
					g = Object(s.a)(h, 2),
					v = g[0],
					y = g[1];
				return Object(i.useEffect)(function() {
					v || o.b.loadAuth().then(function(e) {
						o.a.accountSummary = Object(a.a)({}, e), o.a.isFirstLoaded = !0, m(!0), f(!0), y(e)
					}).catch(function() {
						o.a.isFirstLoaded = !0, m(!0), f(!0)
					})
				}, []), r.a.createElement(c.Provider, {
					value: {
						accountSummary: v,
						isFirstLoaded: l,
						isLoaded: b,
						isSignIn: !!v
					}
				}, t)
			}
		},
		910: function(e, t, n) {
			e.exports = n.p + "static/media/ico_time.362926f0.svg"
		},
		911: function(e, t, n) {
			e.exports = n.p + "static/media/ico_location.684ea2b1.svg"
		},
		912: function(e, t, n) {
			e.exports = n.p + "static/media/logo_PERFECT.b5a8faf3.svg"
		},
		913: function(e, t, n) {
			e.exports = n.p + "static/media/ico_ymk.7c4e0f62.svg"
		},
		914: function(e, t, n) {},
		915: function(e, t, n) {
			e.exports = n.p + "static/media/terms_arrow.05d8d724.svg"
		},
		916: function(e, t, n) {
			e.exports = n.p + "static/media/contact-us-bg.e8c80669.jpg"
		},
		92: function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return o
			});
			var a = n(0),
				s = n.n(a),
				i = n(60),
				r = n.n(i);

			function o(e) {
				var t = e.time,
					n = e.type;
				return t ? s.a.createElement("span", null, r()(t).format(function(e) {
					return "newsIndex" === e ? "MMMM DD, YYYY" : "newsDetailY" === e ? "YYYY" : "newsDetailMD" === e ? "MMMM DD" : "newsList" === e ? "YYYY MMMM DD" : "newsCard" === e ? "MMM DD, YYYY" : "estMin" === e ? "h:mm A" : "mon" === e ? "MMM" : "date" === e ? "D" : "sessionMobileCard" === e ? "MMMM D" : "btfDetail" === e ? "MMM DD, YYYY" : "btfGtmClass" === e ? "MD" : "btfMDja" === e ? "M\u6708D\u65e5" : "btfYMDHja" === e ? "YYYY\u5e74M\u6708D\u65e5H\u6642" : "btfYMDja" === e ? "YYYY\u5e74M\u6708D\u65e5" : "gbtf-pre" === e ? "MMMM DD" : "MM/DD/YYYY"
				}(n))) : s.a.createElement("div", null)
			}
		},
		920: function(e, t, n) {},
		921: function(e, t, n) {},
		922: function(e, t, n) {},
		923: function(e, t, n) {},
		924: function(e, t, n) {
			"use strict";
			n.r(t);
			n(473), n(489);
			var a = n(0),
				s = n.n(a),
				i = n(50);
			Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
			var r = n(14),
				o = n(205),
				c = n(388),
				u = n.n(c);
			n(705);

			function l() {
				var e = -1 !== window.location.href.indexOf("/nft/try-on");
				return s.a.createElement("div", {
					style: {
						display: e ? "none" : "block"
					}
				}, s.a.createElement(u.a, {
					ContainerClassName: "gotopbutton-for-container",
					TransitionClassName: "gotopbutton-for-transition",
					ShowAtPosition: 27
				}, s.a.createElement("div", null, s.a.createElement("div", {
					className: "go-top-btn"
				}))))
			}
			var m = n(7),
				p = n(10),
				d = n(9),
				b = n.n(d),
				f = n(18),
				h = n(25),
				g = n.n(h),
				v = n(85),
				y = n.n(v),
				E = {
					queryAffiliate: function() {
						var e = Object(f.a)(b.a.mark(function e(t) {
							var n;
							return b.a.wrap(function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, g()("/smb-frontend/aff/query-active-aff.action" + E.buildQs({
											affiliate: t
										}), {
											method: "GET"
										});
									case 2:
										if (!(n = e.sent).ok) {
											e.next = 7;
											break
										}
										return e.next = 6, n.json();
									case 6:
										return e.abrupt("return", e.sent);
									case 7:
										return e.abrupt("return", Promise.reject({
											status: n.status
										}));
									case 8:
									case "end":
										return e.stop()
								}
							}, e)
						}));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					buildQs: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						return "?" + y.a.stringify(e)
					}
				},
				k = E,
				w = n(87),
				O = n(90),
				_ = n(4),
				x = n(13),
				S = n.n(x),
				j = n(16),
				A = n(1),
				T = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(5), n.e(6), n.e(50)]).then(n.bind(null, 3429))
				}),
				C = n(33),
				N = n(2),
				P = Object(A.a)(function() {
					return n.e(176).then(n.bind(null, 3306))
				}),
				K = n(77),
				I = n(52),
				B = n.n(I),
				L = (n(160), n(5)),
				R = n.n(L),
				F = Object(A.a)(function() {
					return n.e(176).then(n.bind(null, 3307))
				}),
				D = n(72),
				M = n(201),
				U = n(202),
				H = n(158),
				G = n.n(H),
				V = n(138),
				Y = n(161),
				z = n(102),
				W = n(26),
				J = function(e) {
					var t = e.component,
						n = (e.isEnterprise, e.breadcrumb),
						i = void 0 === n ? [] : n,
						r = e.contactsalesbutton,
						o = void 0 === r || r,
						c = e.demostorebutton,
						u = void 0 === c || c,
						l = e.isGbtf,
						d = void 0 !== l && l,
						b = Object(C.a)(e, ["component", "isEnterprise", "breadcrumb", "contactsalesbutton", "demostorebutton", "isGbtf"]);
					Object(K.a)();
					var f = Object(N.d)().i18n,
						h = _.a.isBusiness(),
						g = _.a.isInvestors(),
						v = _.a.isGcse(),
						y = "en" !== f.language && f.language ? "/".concat(f.language.replace("_", "-").toLowerCase()) : "",
						E = -1 !== G()(["".concat(y, "/business/SDK/privacy")], window.location.pathname),
						k = Object(a.useState)(!1),
						w = Object(m.a)(k, 2),
						O = w[0],
						x = w[1],
						S = Object(a.useState)(!0),
						j = Object(m.a)(S, 2),
						A = j[0],
						T = j[1],
						I = Object(a.useState)({}),
						L = Object(m.a)(I, 2),
						H = L[0],
						J = L[1],
						q = b.computedMatch.params.lang,
						Q = q || "enu";
					Object(a.useEffect)(function() {
						if (d) {
							var e = {
								languageType: Q,
								courseType: "VIRTUAL_EVENT"
							};
							V.a.listCourse(e).then(function(e) {
								if (J(e), "EVENT_PAGE" === e[0].course.pageType) {
									if (x(!0), "ReactSnap" === window.navigator.userAgent) return;
									T(W.a.getCookieStatement())
								}
							})
						}
					}, []);
					return O ? s.a.createElement(p.Route, Object.assign({}, b, {
						render: function(e) {
							return s.a.createElement("div", null, s.a.createElement(M.a, {
								contactsalesbutton: o
							}), !g && !v && u && s.a.createElement(U.a, null), s.a.createElement("div", {
								className: R()({
									"pf-language": !0,
									"pf-language-ja": "ja" === f.language
								})
							}, function(e) {
								return s.a.createElement(t, Object.assign({}, e, {
									breadcrumb: i,
									val: H
								}))
							}(e), s.a.createElement(z.a, {
								hideStatement: !!A,
								setHideStatement: T
							}), s.a.createElement(B.a, {
								height: 500,
								once: !0,
								unmountIfInvisible: !0,
								throttle: 1e3
							}, s.a.createElement(Y.a, {
								isGbtfEvent: !0
							}))))
						}
					})) : s.a.createElement(p.Route, Object.assign({}, b, {
						render: function(e) {
							return s.a.createElement(D.a, null, !E && s.a.createElement(M.a, {
								contactsalesbutton: o
							}), !g && !E && !v && u && s.a.createElement(U.a, null), s.a.createElement("div", {
								className: R()({
									"pf-language": !0,
									"pf-language-ja": "ja" === f.language
								})
							}, s.a.createElement("div", {
								style: {
									backgroundColor: "#fff"
								}
							}, s.a.createElement(t, Object.assign({}, e, {
								breadcrumb: i,
								val: H
							}))), s.a.createElement(B.a, {
								height: 500,
								once: !0,
								unmountIfInvisible: !0,
								throttle: 1e3
							}, E ? s.a.createElement(s.a.Fragment, null) : h ? s.a.createElement(P, null) : s.a.createElement(F, null))))
						}
					}))
				},
				q = [s.a.createElement(J, {
					key: "/business",
					exact: !0,
					path: "/business",
					component: T,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}]
				}), s.a.createElement(J, {
					key: "/",
					exact: !0,
					path: "/",
					component: T,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}]
				})],
				Q = Object(A.a)(function() {
					return n.e(69).then(n.bind(null, 3309))
				}),
				X = s.a.createElement(J, {
					key: "/business/privacy",
					exact: !0,
					path: "/business/privacy",
					component: Q,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Privacy",
						item: "/business/privacy"
					}]
				}),
				Z = Object(A.a)(function() {
					return n.e(70).then(n.bind(null, 3310))
				}),
				$ = s.a.createElement(J, {
					key: "/business/terms",
					exact: !0,
					path: "/business/terms",
					component: Z,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Terms",
						item: "/business/terms"
					}]
				}),
				ee = Object(A.a)(function() {
					return n.e(68).then(n.bind(null, 3486))
				}),
				te = s.a.createElement(J, {
					key: "/business/faq/:defaultType?",
					exact: !0,
					path: "/business/faq/:defaultType(|account-payments|integration-of-youcam|subscription|trouble-shooting)?",
					component: ee,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Faq",
						item: "/business/faq"
					}]
				}),
				ne = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(7), n.e(11), n.e(66)]).then(n.bind(null, 3485))
				}),
				ae = [s.a.createElement(p.Redirect, {
					key: "/business/contact-us",
					exact: !0,
					from: "/business/contact-us",
					to: "/business/contact-us/sales"
				}), s.a.createElement(J, {
					key: "/business/contact-us",
					exact: !0,
					path: "/business/contact-us/:type(sales|media|thank-you)?",
					component: ne,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "contact-us",
						item: "/business/contact-us"
					}],
					contactsalesbutton: !1
				}), s.a.createElement(J, {
					key: "/business/contact-us",
					exact: !0,
					path: "/business/contact-us/:type(thank-you)?",
					component: ne,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "thank-you",
						item: "/business/contact-us/thank-you"
					}],
					contactsalesbutton: !1
				})],
				se = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(64)]).then(n.bind(null, 3484))
				}),
				ie = Object(A.a)(function() {
					return n.e(65).then(n.bind(null, 3482))
				}),
				re = Object(A.a)(function() {
					return n.e(67).then(n.bind(null, 3480))
				}),
				oe = [s.a.createElement(J, {
					key: "/business/info/awards",
					exact: !0,
					path: "/business/info/awards",
					component: ie,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Info",
						item: "/business/info"
					}]
				}), s.a.createElement(J, {
					key: "/business/info/aboutus",
					exact: !0,
					path: "/business/info/aboutus",
					component: se,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Info",
						item: "/business/info"
					}]
				}), s.a.createElement(J, {
					key: "/business/info/esg",
					exact: !0,
					path: "/business/info/esg",
					component: re,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Info",
						item: "/business/info"
					}],
					contactsalesbutton: !1,
					demostorebutton: !1
				})],
				ce = Object(A.a)(function() {
					return n.e(69).then(n.bind(null, 3311))
				}),
				ue = s.a.createElement(J, {
					key: "/business/shopify/privacy",
					exact: !0,
					path: "/business/shopify/privacy",
					component: ce,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Shopify Privacy",
						item: "/business/shopify/privacy"
					}]
				}),
				le = Object(A.a)(function() {
					return n.e(69).then(n.bind(null, 3312))
				}),
				me = s.a.createElement(J, {
					key: "/business/shopify/terms",
					exact: !0,
					path: "/business/shopify/terms",
					component: le,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Shopify Terms",
						item: "/business/shopify/terms"
					}]
				}),
				pe = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(7), n.e(11), n.e(66)]).then(n.bind(null, 3438))
				}),
				de = [s.a.createElement(J, {
					key: "/business/contact-sales",
					exact: !0,
					path: "/business/contact-sales",
					component: pe,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Contact Sales",
						item: "/business/contact-sales"
					}],
					contactsalesbutton: !1
				}), s.a.createElement(J, {
					key: "/business/contact-sales/:thankyou",
					exact: !0,
					path: "/business/contact-sales/:thankyou(thank-you)",
					component: pe,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Thank you",
						item: "/business/contact-sales/thankyou"
					}],
					contactsalesbutton: !1
				})],
				be = Object(A.a)(function() {
					return n.e(224).then(n.bind(null, 3313))
				}),
				fe = s.a.createElement(J, {
					key: "/business/impressum",
					exact: !0,
					path: "/business/impressum",
					component: be
				}),
				he = Object(A.a)(function() {
					return n.e(69).then(n.bind(null, 3314))
				}),
				ge = s.a.createElement(J, {
					key: "/business/SDK/privacy",
					exact: !0,
					path: "/business/SDK/privacy",
					component: he,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "SDK Privacy",
						item: "/business/SDK/privacy"
					}]
				}),
				ve = [X, $, oe, te, ae, ue, me, de, fe, ge],
				ye = Object(A.a)(function() {
					return n.e(74).then(n.bind(null, 3405))
				}),
				Ee = [{
					position: 1,
					name: "Home",
					item: "/"
				}, {
					position: 2,
					name: "Business",
					item: "/business"
				}, {
					position: 3,
					name: "Plan",
					item: "/business/plan"
				}],
				ke = [s.a.createElement(J, {
					key: "/business/plan",
					exact: !0,
					path: "/business/plan",
					component: ye,
					breadcrumb: Ee
				}), s.a.createElement(J, {
					key: "/business/plan/:platform?",
					exact: !0,
					path: "/business/plan/:platform(|shopify|standard)?",
					component: ye,
					breadcrumb: Ee
				})],
				we = [ke],
				Oe = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(166)]).then(n.bind(null, 3315))
				}),
				_e = [s.a.createElement(J, {
					key: "/business/technologies/face-ai",
					exact: !0,
					path: "/business/technologies/face-ai",
					component: Oe,
					backgroundImage: n(168)
				})],
				xe = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(167)]).then(n.bind(null, 3316))
				}),
				Se = [s.a.createElement(J, {
					key: "/business/technologies/live-3d-face-ar",
					exact: !0,
					path: "/business/technologies/live-3d-face-ar",
					component: xe,
					backgroundImage: n(168)
				})],
				je = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(168)]).then(n.bind(null, 3317))
				}),
				Ae = [s.a.createElement(J, {
					key: "/business/technologies/makeup-ar",
					exact: !0,
					path: "/business/technologies/makeup-ar",
					component: je,
					backgroundImage: n(168)
				})],
				Te = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(169)]).then(n.bind(null, 3318))
				}),
				Ce = [s.a.createElement(J, {
					key: "/business/technologies/skincare-ar",
					exact: !0,
					path: "/business/technologies/skincare-ar",
					component: Te,
					backgroundImage: n(168)
				})],
				Ne = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(82)]).then(n.bind(null, 3441))
				}),
				Pe = [s.a.createElement(J, {
					key: "/business/technologies/agile-face-tracking",
					exact: !0,
					path: "/business/technologies/agile-face-tracking",
					component: Ne,
					isEnterprise: !0,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Agile Face Tracking",
						item: "/business/technologies/agile-face-tracking"
					}]
				})],
				Ke = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(165)]).then(n.bind(null, 3319))
				}),
				Ie = [s.a.createElement(J, {
					key: "/business/technologies/agile-hand-tracking",
					exact: !0,
					path: "/business/technologies/agile-hand-tracking",
					component: Ke
				})],
				Be = [_e, Se, Ae, Ce, Pe, Ie],
				Le = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(15), n.e(123)]).then(n.bind(null, 3409))
				}),
				Re = [s.a.createElement(J, {
					key: "/business/solutions/enterprise",
					exact: !0,
					path: "/business/solutions/enterprise",
					component: Le,
					isEnterprise: !0,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Enterprise",
						item: "/business/solutions/enterprise"
					}]
				}), s.a.createElement(J, {
					key: "/business/solutions/enterprise/:menu?",
					exact: !0,
					path: "/business/solutions/enterprise/:menu(products|services)?",
					component: Le,
					isEnterprise: !0,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Enterprise",
						item: "/business/solutions/enterprise"
					}]
				})],
				Fe = n(6),
				De = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(105)]).then(n.bind(null, 3450))
				}),
				Me = Object(Fe.a)(De),
				Ue = [s.a.createElement(J, {
					key: "/business/solutions/smb",
					exact: !0,
					path: "/business/solutions/smb",
					component: Me,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "SMB",
						item: "/business/solutions/smb"
					}]
				})],
				He = [Re, Ue],
				Ge = n(133),
				Ve = n.n(Ge),
				Ye = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(85)]).then(n.bind(null, 3320))
				}),
				ze = Object(Fe.a)(Ye),
				We = (s.a.createElement(p.Route, {
					key: "/business/products/ai-facial-recognition",
					exact: !0,
					path: "/business/products/ai-facial-recognition",
					component: ze
				}), Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(86)]).then(n.bind(null, 3321))
				})),
				Je = Object(Fe.a)(We),
				qe = [s.a.createElement(p.Route, {
					key: "/business/products/ai-product-recommendation",
					exact: !0,
					path: "/business/products/ai-product-recommendation",
					component: Je
				})],
				Qe = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(18), n.e(87)]).then(n.bind(null, 3452))
				}),
				Xe = Object(Fe.a)(Qe),
				Ze = [s.a.createElement(p.Route, {
					key: "/business/products/ai-shade-finder",
					exact: !0,
					path: "/business/products/ai-shade-finder",
					component: Xe
				})],
				$e = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(89)]).then(n.bind(null, 3435))
				}),
				et = Object(Fe.a)($e),
				tt = [s.a.createElement(p.Route, {
					key: "/business/products/ai-skin-diagnostic",
					exact: !0,
					path: "/business/products/ai-skin-diagnostic",
					component: et
				})],
				nt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(90)]).then(n.bind(null, 3322))
				}),
				at = Object(Fe.a)(nt),
				st = [s.a.createElement(p.Route, {
					key: "/business/products/ba-1-on-1",
					exact: !0,
					path: "/business/products/ba-1-on-1",
					component: at
				})],
				it = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(91)]).then(n.bind(null, 3323))
				}),
				rt = Object(Fe.a)(it),
				ot = [s.a.createElement(p.Route, {
					key: "/business/products/in-store-barcode",
					exact: !0,
					path: "/business/products/in-store-barcode",
					component: rt
				})],
				ct = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(92)]).then(n.bind(null, 3324))
				}),
				ut = Object(Fe.a)(ct),
				lt = [s.a.createElement(p.Route, {
					key: "/business/products/live-ar-training",
					exact: !0,
					path: "/business/products/live-ar-training",
					component: ut
				})],
				mt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(93)]).then(n.bind(null, 3411))
				}),
				pt = Object(Fe.a)(mt),
				dt = [s.a.createElement(p.Route, {
					key: "/business/products/live-hair-color",
					exact: !0,
					path: "/business/products/live-hair-color",
					component: pt
				})],
				bt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(94)]).then(n.bind(null, 3325))
				}),
				ft = Object(Fe.a)(bt),
				ht = [s.a.createElement(p.Route, {
					key: "/business/products/live-streaming",
					exact: !0,
					path: "/business/products/live-streaming",
					component: ft
				})],
				gt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(95)]).then(n.bind(null, 3326))
				}),
				vt = Object(Fe.a)(gt),
				yt = [s.a.createElement(p.Route, {
					key: "/business/products/ar-virtual-accessories",
					exact: !0,
					path: "/business/products/ar-virtual-accessories",
					component: vt
				})],
				Et = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(96)]).then(n.bind(null, 3476))
				}),
				kt = Object(Fe.a)(Et),
				wt = [s.a.createElement(p.Route, {
					key: "/business/products/virtual-makeup",
					exact: !0,
					path: "/business/products/virtual-makeup",
					component: kt
				})],
				Ot = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(22), n.e(79)]).then(n.bind(null, 3430))
				}),
				_t = Object(Fe.a)(Ot),
				xt = [s.a.createElement(p.Route, {
					key: "/business/products/eye-wear",
					exact: !0,
					path: "/business/products/:productType(eye-wear)",
					component: _t
				})],
				St = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(96)]).then(n.bind(null, 3327))
				}),
				jt = Object(Fe.a)(St),
				At = [s.a.createElement(p.Route, {
					key: "/business/products/youcam-tutorial",
					exact: !0,
					path: "/business/products/youcam-tutorial",
					component: jt
				})],
				Tt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(83)]).then(n.bind(null, 3439))
				}),
				Ct = Object(Fe.a)(Tt),
				Nt = [s.a.createElement(p.Route, {
					key: "/business/products/ai-beard-dye",
					exact: !0,
					path: "/business/products/ai-beard-dye",
					component: Ct
				})],
				Pt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(84)]).then(n.bind(null, 3328))
				}),
				Kt = Object(Fe.a)(Pt),
				It = [s.a.createElement(p.Route, {
					key: "/business/products/ai-face-analyzer",
					exact: !0,
					path: "/business/products/ai-face-analyzer",
					component: Kt
				})],
				Bt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(83)]).then(n.bind(null, 3329))
				}),
				Lt = Object(Fe.a)(Bt),
				Rt = [s.a.createElement(p.Route, {
					key: "/business/products/ai-nail-color",
					exact: !0,
					path: "/business/products/ai-nail-color",
					component: Lt
				})],
				Ft = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(78)]).then(n.bind(null, 3330))
				}),
				Dt = Object(Fe.a)(Ft),
				Mt = [s.a.createElement(p.Route, {
					key: "/business/products/ar-watch",
					exact: !0,
					path: "/business/products/ar-watch",
					component: Dt
				})],
				Ut = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(22), n.e(211)]).then(n.bind(null, 3331))
				}),
				Ht = Object(Fe.a)(Ut),
				Gt = [s.a.createElement(p.Route, {
					key: "/business/products/ar-virtual-ring",
					exact: !0,
					path: "/business/products/ar-virtual-ring",
					component: Ht
				})],
				Vt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(22), n.e(79)]).then(n.bind(null, 3332))
				}),
				Yt = Object(Fe.a)(Vt),
				zt = [s.a.createElement(p.Route, {
					key: "/business/products/ar-bracelet",
					exact: !0,
					path: "/business/products/ar-bracelet",
					component: Yt
				})],
				Wt = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(193)]).then(n.bind(null, 3474))
				}),
				Jt = Object(Fe.a)(Wt),
				qt = [s.a.createElement(p.Route, {
					key: "/business/products/ar-virtual-earrings",
					exact: !0,
					path: "/business/products/ar-virtual-earrings",
					component: Jt
				}), s.a.createElement(p.Route, {
					key: "/business/products/virtual-accessories",
					exact: !0,
					path: "/business/products/virtual-accessories",
					component: Jt
				})],
				Qt = Object(A.a)(function() {
					return Promise.all([n.e(2), n.e(3), n.e(15), n.e(16), n.e(226)]).then(n.bind(null, 3333))
				}),
				Xt = Object(Fe.a)(Qt),
				Zt = [s.a.createElement(p.Route, {
					key: "/business/products/face-reshaping",
					exact: !0,
					path: "/business/products/face-reshaping",
					component: Xt
				})],
				$t = Object(A.a)(function() {
					return Promise.all([n.e(2), n.e(3), n.e(15), n.e(16), n.e(230)]).then(n.bind(null, 3334))
				}),
				en = Object(Fe.a)($t),
				tn = [s.a.createElement(p.Route, {
					key: "/business/products/ai-personality",
					exact: !0,
					path: "/business/products/ai-personality",
					component: en
				})],
				nn = Object(A.a)(function() {
					return Promise.all([n.e(2), n.e(3), n.e(15), n.e(16), n.e(231)]).then(n.bind(null, 3335))
				}),
				an = Object(Fe.a)(nn),
				sn = [qe, Ze, tt, st, ot, lt, dt, ht, yt, wt, xt, At, Nt, It, Rt, Mt, Gt, zt, qt, Zt, tn, [s.a.createElement(p.Route, {
					key: "/business/products/virtual-background",
					exact: !0,
					path: "/business/products/virtual-background",
					component: an
				})]],
				rn = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(88)]).then(n.bind(null, 3336))
				}),
				on = Object(Fe.a)(rn),
				cn = [s.a.createElement(p.Route, {
					key: "/business/services/app-listing",
					exact: !0,
					path: "/business/services/app-listing",
					component: on
				})],
				un = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(99)]).then(n.bind(null, 3337))
				}),
				ln = Object(Fe.a)(un),
				mn = (s.a.createElement(p.Route, {
					key: "/business/services/facebook-ar-chatbot",
					exact: !0,
					path: "/business/services/facebook-ar-chatbot",
					component: ln
				}), Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(100)]).then(n.bind(null, 3424))
				})),
				pn = Object(Fe.a)(mn),
				dn = [s.a.createElement(p.Route, {
					key: "/business/services/in-store-consultation",
					exact: !0,
					path: "/business/services/in-store-consultation",
					component: pn
				})],
				bn = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(101)]).then(n.bind(null, 3338))
				}),
				fn = Object(Fe.a)(bn),
				hn = [s.a.createElement(p.Route, {
					key: "/business/services/sdk",
					exact: !0,
					path: "/business/services/sdk",
					component: fn
				})],
				gn = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(18), n.e(103)]).then(n.bind(null, 3442))
				}),
				vn = Object(Fe.a)(gn),
				yn = [s.a.createElement(p.Route, {
					key: "/business/services/wechat-mini-program",
					exact: !0,
					path: "/business/services/wechat-mini-program",
					component: vn
				})],
				En = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(105)]).then(n.bind(null, 3443))
				}),
				kn = Object(Fe.a)(En),
				wn = [s.a.createElement(p.Route, {
					key: "/business/services/youcam-4-web",
					exact: !0,
					path: "/business/services/youcam-4-web",
					component: kn
				})],
				On = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(104)]).then(n.bind(null, 3339))
				}),
				_n = Object(Fe.a)(On),
				xn = [s.a.createElement(p.Route, {
					key: "/business/services/youcam-4-google",
					exact: !0,
					path: "/business/services/youcam-4-google",
					component: _n
				})],
				Sn = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(18), n.e(102)]).then(n.bind(null, 3471))
				}),
				jn = Object(Fe.a)(Sn),
				An = [s.a.createElement(p.Route, {
					key: "/business/services/taobao-mini-program",
					exact: !0,
					path: "/business/services/taobao-mini-program",
					component: jn
				})],
				Tn = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(98)]).then(n.bind(null, 3407))
				}),
				Cn = Object(Fe.a)(Tn),
				Nn = [s.a.createElement(p.Route, {
					key: "/business/services/douyin-mini-program",
					exact: !0,
					path: "/business/services/douyin-mini-program",
					component: Cn
				})],
				Pn = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(196)]).then(n.bind(null, 3426))
				}),
				Kn = Object(Fe.a)(Pn),
				In = [s.a.createElement(p.Route, {
					key: "/business/services/virtual-makeup-snapchat",
					exact: !0,
					path: "/business/services/virtual-makeup-snapchat",
					component: Kn
				})],
				Bn = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(4), n.e(199)]).then(n.bind(null, 3340))
				}),
				Ln = Object(Fe.a)(Bn),
				Rn = [cn, dn, hn, yn, wn, xn, An, Nn, In, [s.a.createElement(p.Route, {
					key: "/business/services/virtual-makeup-instagram",
					exact: !0,
					path: "/business/services/virtual-makeup-instagram",
					component: Ln
				})]],
				Fn = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(9), n.e(134)]).then(n.bind(null, 3451))
				}),
				Dn = [s.a.createElement(J, {
					key: "/business/user/forgot-password",
					exact: !0,
					path: "/business/user/forgot-password",
					component: Fn
				})],
				Mn = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(11), n.e(9), n.e(135)]).then(n.bind(null, 3463))
				}),
				Un = [s.a.createElement(J, {
					key: "/business/user/free-trial/:subscriptionType(premium-trial|essential-trial)?",
					exact: !0,
					path: "/business/user/free-trial/:subscriptionType(premium-trial|essential-trial)?",
					component: Mn
				})],
				Hn = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(9), n.e(136)]).then(n.bind(null, 3436))
				}),
				Gn = [s.a.createElement(J, {
					key: "/business/user/reset-password",
					exact: !0,
					path: "/business/user/reset-password",
					component: Hn
				})],
				Vn = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(9), n.e(137)]).then(n.bind(null, 3447))
				}),
				Yn = [s.a.createElement(J, {
					key: "/business/user/setup-password",
					exact: !0,
					path: "/business/user/setup-password",
					component: Vn
				})],
				zn = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(9), n.e(138)]).then(n.bind(null, 3448))
				}),
				Wn = [s.a.createElement(J, {
					key: "/business/user/sign-in",
					exact: !0,
					path: "/business/user/sign-in",
					component: zn
				})],
				Jn = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(9), n.e(139)]).then(n.bind(null, 3341))
				}),
				qn = [s.a.createElement(J, {
					key: "/business/user/sign-up/:subscriptionType(premium|essential)?",
					exact: !0,
					path: "/business/user/sign-up/:subscriptionType(premium|essential)?",
					component: Jn
				})],
				Qn = Object(A.a)(function() {
					return n.e(140).then(n.bind(null, 3342))
				}),
				Xn = [Dn, Un, Gn, Yn, Wn, qn, [s.a.createElement(J, {
					key: "/business/user/verify-email",
					exact: !0,
					path: "/business/user/verify-email",
					component: Qn
				})]],
				Zn = Object(A.a)(function() {
					return n.e(71).then(n.bind(null, 3449))
				}),
				$n = [s.a.createElement(J, {
					key: "/:type(business)/news/detail/:id?",
					exact: !0,
					path: "/:type(business)/news/detail/:id?",
					component: Zn,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "news_title",
						item: "/business/news/detail"
					}]
				}), s.a.createElement(J, {
					key: "/:type(business)/news/:newsHandle?",
					exact: !0,
					path: "/:type(business)/news/:newsHandle?",
					component: Zn,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "news_title",
						item: "/business/news"
					}]
				}), s.a.createElement(J, {
					key: "/:type(business)/news/preview/:id?",
					exact: !0,
					path: "/:type(business)/news/preview/:id?",
					component: Zn,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "news_title",
						item: "/business/news/preview"
					}]
				})],
				ea = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(5), n.e(6), n.e(163)]).then(n.bind(null, 3462))
				}),
				ta = [
					[s.a.createElement(J, {
						key: "/:type(business)/news/list",
						exact: !0,
						path: "/:type(business)/news/list",
						component: ea,
						breadcrumb: [{
							position: 1,
							name: "Home",
							item: "/"
						}, {
							position: 2,
							name: "Business",
							item: "/business"
						}, {
							position: 3,
							name: "News List",
							item: "/business/news/list"
						}]
					})], $n
				],
				na = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(2), n.e(14), n.e(20), n.e(106)]).then(n.bind(null, 3391))
				}),
				aa = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(5), n.e(191), n.e(109)]).then(n.bind(null, 3393))
				}),
				sa = Object(A.a)(function() {
					return Promise.all([n.e(20), n.e(203), n.e(44)]).then(n.bind(null, 3395))
				}),
				ia = n(164),
				ra = n.n(ia),
				oa = n(265),
				ca = [],
				ua = function(e) {
					var t = e.component,
						n = (e.isEnterprise, Object(C.a)(e, ["component", "isEnterprise"]));
					Object(K.a)();
					var i = Object(N.d)().i18n,
						r = Object(a.useState)(!1),
						o = Object(m.a)(r, 2),
						c = o[0],
						u = o[1],
						l = Object(oa.a)().closeWindowOnModuleClosed;
					Object(a.useEffect)(function() {
						i.on("initialized", function() {
							return u(!0)
						})
					}, [i]);
					return Object(a.useEffect)(function() {
						return function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
								return ["/business/showcase/youcam-tutorial", "/business/showcase/allure-november-look", "/business/showcase/nail-color", "/business/showcase/beard-dye", "/business/showcase/beard-style", "/business/showcase/skincare/diagnostics", "/business/showcase/skincare/emulation", "/business/showcase/shadefinder/finder", "/business/showcase/shadefinder/debug", "/business/showcase/face-analyzer", "/business/showcase/live-shows", "/business/showcase/watches", "/business/showcase/bracelets", "/business/showcase/rings"].some(function(t) {
									return e.match(t)
								})
							}(n.location.pathname) && (_.a.loadWebModule(), function e() {
								setTimeout(function() {
									window.YMK ? ca.push(window.YMK.addEventListener("closed", function() {
										l && window.close()
									})) : e()
								}, 500)
							}()),
							function() {
								ca && ra()(ca, function(e) {
									return window.YMK && window.YMK.removeEventListener(e)
								}), ca.length = 0
							}
					}, []), s.a.createElement(p.Route, Object.assign({}, n, {
						render: function(e) {
							return s.a.createElement(D.a, null, s.a.createElement(sa, {
								key: c
							}), s.a.createElement(B.a, {
								height: 1e3,
								once: !0,
								unmountIfInvisible: !0
							}, s.a.createElement("div", {
								style: {
									backgroundColor: "#fff"
								},
								className: R()({
									"pf-language": !0,
									"pf-language-ja": "ja" === i.language
								})
							}, s.a.createElement(t, e))), s.a.createElement(B.a, {
								height: 500,
								once: !0,
								unmountIfInvisible: !0,
								throttle: 1e3
							}, s.a.createElement(P, null)))
						}
					}))
				},
				la = [s.a.createElement(p.Redirect, {
					key: "/business/showcase/",
					exact: !0,
					from: "/business/showcase/",
					to: "/business/showcase/lip-color"
				}), s.a.createElement(ua, {
					key: "/business/showcase/live-shows",
					exact: !0,
					path: "/business/showcase/live-shows",
					component: aa
				}), s.a.createElement(ua, {
					key: "/business/showcase/producttype",
					exact: !0,
					path: "/business/showcase/:productType(".concat("lip-color|lip-plumper|lip-liner", "|").concat("blush|bronzer|foundation|concealer|contour", "|").concat("eyebrow|eye-liner|eye-shadow|eyelashes|eye-color", "|").concat("earrings|hat|headband", "|").concat("look|eye-wear|hair-color", ")"),
					component: na
				})],
				ma = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(2), n.e(12), n.e(14), n.e(107)]).then(n.bind(null, 3410))
				}),
				pa = [s.a.createElement(ua, {
					key: "/business/showcase/beard-dye",
					exact: !0,
					path: "/business/showcase/beard-dye",
					component: ma
				})],
				da = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(2), n.e(12), n.e(14), n.e(107)]).then(n.bind(null, 3401))
				}),
				ba = [s.a.createElement(ua, {
					key: "/business/showcase/nail-color",
					exact: !0,
					path: "/business/showcase/nail-color",
					component: da
				})],
				fa = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(13), n.e(108)]).then(n.bind(null, 3404))
				}),
				ha = [s.a.createElement(ua, {
					key: "/business/showcase/beard-style",
					exact: !0,
					path: "/business/showcase/beard-style",
					component: fa
				})],
				ga = Object(A.a)(function() {
					return n.e(115).then(n.bind(null, 3464))
				}),
				va = [s.a.createElement(ua, {
					key: "/business/showcase/shadefinder/home",
					exact: !0,
					path: "/business/showcase/shadefinder/home",
					component: ga
				})],
				ya = Object(A.a)(function() {
					return Promise.all([n.e(20), n.e(114)]).then(n.bind(null, 3399))
				}),
				Ea = [s.a.createElement(ua, {
					key: "/business/showcase/shadefinder/finder",
					exact: !0,
					path: "/business/showcase/shadefinder/finder",
					component: ya
				})],
				ka = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(190), n.e(113)]).then(n.bind(null, 3419))
				}),
				wa = [s.a.createElement(ua, {
					key: "/business/showcase/shadefinder/debug",
					exact: !0,
					path: "/business/showcase/shadefinder/debug",
					component: ka
				})],
				Oa = [s.a.createElement(p.Redirect, {
					key: "/business/showcase/shadefinder/",
					exact: !0,
					from: "/business/showcase/shadefinder/",
					to: "/business/showcase/shadefinder/home"
				}), va, Ea, wa],
				_a = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(118)]).then(n.bind(null, 3406))
				}),
				xa = [s.a.createElement(ua, {
					key: "/business/showcase/skincare/home",
					exact: !0,
					path: "/business/showcase/skincare/home",
					component: _a
				})],
				Sa = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(2), n.e(3), n.e(23), n.e(116)]).then(n.bind(null, 3397))
				}),
				ja = [s.a.createElement(ua, {
					key: "/business/showcase/skincare/diagnostics",
					exact: !0,
					path: "/business/showcase/skincare/diagnostics",
					component: Sa
				})],
				Aa = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(2), n.e(14), n.e(23), n.e(117)]).then(n.bind(null, 3396))
				}),
				Ta = [s.a.createElement(ua, {
					key: "/business/showcase/skincare/emulation",
					exact: !0,
					path: "/business/showcase/skincare/emulation",
					component: Aa
				})],
				Ca = [s.a.createElement(p.Redirect, {
					key: "/business/showcase/skincare/",
					exact: !0,
					from: "/business/showcase/skincare/",
					to: "/business/showcase/skincare/home"
				}), xa, ja, Ta],
				Na = Object(A.a)(function() {
					return n.e(111).then(n.bind(null, 3392))
				}),
				Pa = [s.a.createElement(ua, {
					key: "/business/showcase/face-analyzer",
					exact: !0,
					path: "/business/showcase/face-analyzer",
					component: Na
				})],
				Ka = Object(A.a)(function() {
					return n.e(119).then(n.bind(null, 3394))
				}),
				Ia = [s.a.createElement(ua, {
					key: "/business/showcase/youcam-tutorial",
					exact: !0,
					path: "/business/showcase/youcam-tutorial",
					component: Ka
				}), s.a.createElement(ua, {
					key: "/business/showcase/allure-november-look",
					exact: !0,
					path: "/business/showcase/allure-november-look",
					component: Ka
				})],
				Ba = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(12), n.e(13), n.e(120)]).then(n.bind(null, 3416))
				}),
				La = [s.a.createElement(ua, {
					key: "/business/showcase/watches",
					exact: !0,
					path: "/business/showcase/watches",
					component: Ba
				})],
				Ra = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(12), n.e(13), n.e(110)]).then(n.bind(null, 3415))
				}),
				Fa = [s.a.createElement(ua, {
					key: "/business/showcase/bracelets",
					exact: !0,
					path: "/business/showcase/bracelets",
					component: Ra
				})],
				Da = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(12), n.e(13), n.e(112)]).then(n.bind(null, 3425))
				}),
				Ma = [la, pa, ba, ha, Oa, Ca, Pa, Ia, La, Fa, [s.a.createElement(ua, {
					key: "/business/showcase/rings",
					exact: !0,
					path: "/business/showcase/rings",
					component: Da
				})]],
				Ua = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(7), n.e(9), n.e(72)]).then(n.bind(null, 3412))
				}),
				Ha = Object(A.a)(function() {
					return n.e(73).then(n.bind(null, 3343))
				}),
				Ga = s.a.createElement(J, {
					key: "/business/partner/applied",
					exact: !0,
					path: "/business/partner/applied",
					component: Ha,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Partner Applied",
						item: "/business/partner/applied"
					}]
				}),
				Va = [s.a.createElement(J, {
					key: "/business/partner/sign-up",
					exact: !0,
					path: "/business/partner/sign-up",
					component: Ua,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Partner Sign-up",
						item: "/business/partner/sign-up"
					}]
				}), Ga],
				Ya = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(7), n.e(11), n.e(144)]).then(n.bind(null, 3423))
				}),
				za = Object(A.a)(function() {
					return n.e(145).then(n.bind(null, 3344))
				}),
				Wa = [s.a.createElement(J, {
					key: "/business/color-trends/download",
					exact: !0,
					path: "/business/color-trends/download",
					component: za,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Color Trends Download",
						item: "/business/color-trends/download"
					}]
				}), s.a.createElement(J, {
					key: "/business/color-trends/:id?",
					exact: !0,
					path: "/business/color-trends/:id?",
					component: Ya,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Color Trends",
						item: "/business/color-trends"
					}]
				})],
				Ja = Object(A.a)(function() {
					return n.e(143).then(n.bind(null, 3345))
				}),
				qa = s.a.createElement(J, {
					key: "/business/color-trends/applied/:id",
					exact: !0,
					path: "/business/color-trends/applied/:id",
					component: Ja,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Color Trends Applied",
						item: "/business/color-trends/applied"
					}]
				}),
				Qa = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(7), n.e(11), n.e(144)]).then(n.bind(null, 3465))
				}),
				Xa = Object(Fe.a)(Qa),
				Za = [
					[s.a.createElement(p.Route, {
						key: "/business/color-list",
						exact: !0,
						path: "/business/color-list",
						component: Xa
					})], Wa, qa
				],
				$a = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(209), n.e(131)]).then(n.bind(null, 3466))
				}),
				es = s.a.createElement(J, {
					key: "/business/successstory/list",
					exact: !0,
					path: "/business/successstory/list",
					component: $a,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Success Story List",
						item: "/business/successstory/list"
					}]
				}),
				ts = Object(A.a)(function() {
					return n.e(130).then(n.bind(null, 3467))
				}),
				ns = [es, [s.a.createElement(J, {
					key: "/business/successstory/detail/:id?",
					exact: !0,
					path: "/business/successstory/detail/:id?",
					component: ts,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Success Story Detail",
						item: "/business/successstory/detail"
					}]
				}), s.a.createElement(J, {
					key: "/business/successstory/:storyHandle",
					exact: !0,
					path: "/business/successstory/:storyHandle",
					component: ts,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Success Story Detail",
						item: "/business/successstory"
					}]
				})]],
				as = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(5), n.e(6), n.e(163)]).then(n.bind(null, 3408))
				}),
				ss = s.a.createElement(J, {
					key: "/business/videos",
					exact: !0,
					path: "/business/videos",
					component: as,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Videos List",
						item: "/business/videos"
					}]
				}),
				is = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(5), n.e(6), n.e(163)]).then(n.bind(null, 3469))
				}),
				rs = [ss, s.a.createElement(J, {
					key: "/business/video/detail",
					exact: !0,
					path: "/business/video/:videoId",
					component: is,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Video",
						item: "/business/video"
					}]
				})],
				os = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(5), n.e(6), n.e(7), n.e(34)]).then(n.bind(null, 3433))
				}),
				cs = Object(A.a)(function() {
					return n.e(37).then(n.bind(null, 3346))
				}),
				us = Object(Fe.a)(cs),
				ls = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(25), n.e(24), n.e(33)]).then(n.bind(null, 3347))
				}),
				ms = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(25), n.e(24), n.e(38)]).then(n.bind(null, 3348))
				}),
				ps = [s.a.createElement(J, {
					key: "/business/blog/author/:name",
					exact: !0,
					path: "/:type(business)/blog/author/:name",
					component: ls,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Author"
					}]
				}), s.a.createElement(J, {
					key: "/business/blog/post",
					exact: !0,
					path: "/:type(business)/blog/post",
					component: us,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Post"
					}]
				}), s.a.createElement(J, {
					key: "/business/blog/author",
					exact: !0,
					path: "/:type(business)/blog/author",
					component: ls,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Author"
					}]
				}), s.a.createElement(J, {
					key: "/business/blog/search",
					exact: !0,
					path: "/:type(business)/blog/search/:keywords",
					component: ms,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Search"
					}]
				}), s.a.createElement(J, {
					key: "/business/blog/category/:attr",
					exact: !0,
					path: "/:type(business)/blog/category/:attr",
					component: ms,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Search"
					}]
				}), s.a.createElement(J, {
					key: "/business/blog/:category/:title",
					exact: !0,
					path: "/:type(business)/blog/:category/:title",
					component: us,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "post_title"
					}]
				}), s.a.createElement(J, {
					key: "/business/blog",
					exact: !0,
					path: "/:type(business)/blog/:page?",
					component: os,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}]
				})],
				ds = Object(A.a)(function() {
					return n.e(32).then(n.bind(null, 3349))
				}),
				bs = [s.a.createElement(J, {
					key: "/business/beauty-tech-forum-master-class",
					exact: !0,
					path: "/business/beauty-tech-forum-master-class/:courseKey?",
					component: function(e) {
						return s.a.createElement(ds, e)
					},
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Master Class",
						item: "/business/beauty-tech-forum-master-class"
					}]
				})],
				fs = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(5), n.e(6), n.e(31)]).then(n.bind(null, 3454))
				}),
				hs = [s.a.createElement(J, {
					key: "/business/beauty-tech-forum-master-class/detail/:sessionId?",
					exact: !0,
					path: "/business/beauty-tech-forum-master-class/detail/:sessionId?",
					component: function(e) {
						return s.a.createElement(fs, e)
					},
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Master Series",
						item: "/business/beauty-tech-forum-master-class/detail"
					}]
				}), s.a.createElement(J, {
					key: "/business/beauty-tech-forum-master-class/detail/:sessionId?/:thankyou?",
					exact: !0,
					path: "/business/beauty-tech-forum-master-class/detail/:sessionId?/:thankyou?",
					component: function(e) {
						return s.a.createElement(fs, e)
					}
				}), s.a.createElement(J, {
					key: "/business/global-beauty-tech-forum/detail/:sessionId?",
					exact: !0,
					path: "/business/global-beauty-tech-forum/detail/:sessionId?",
					component: function(e) {
						return s.a.createElement(fs, e)
					},
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "GBTF",
						item: "/business/global-beauty-tech-forum/detail"
					}]
				})],
				gs = [bs, hs],
				vs = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(15), n.e(123)]).then(n.bind(null, 3432))
				}),
				ys = function(e) {
					var t = e.component,
						n = Object(C.a)(e, ["component"]);
					Object(K.a)();
					var a = Object(N.d)().i18n;
					return s.a.createElement(p.Route, Object.assign({}, n, {
						render: function(e) {
							return s.a.createElement(D.a, null, s.a.createElement("div", {
								className: R()({
									"pf-language": !0,
									"pf-language-ja": "ja" === a.language
								})
							}, s.a.createElement(B.a, {
								height: 1e3,
								once: !0,
								unmountIfInvisible: !0
							}, s.a.createElement("div", {
								style: {
									backgroundColor: "#fff"
								}
							}, s.a.createElement(t, e))), s.a.createElement(B.a, {
								height: 500,
								once: !0,
								unmountIfInvisible: !0,
								throttle: 1e3
							}, s.a.createElement(Y.a, {
								isCampaign: !0
							}))))
						}
					}))
				},
				Es = [
					[s.a.createElement(ys, {
						key: "/business/campaign/smb",
						exact: !0,
						path: "/business/campaign/smb",
						component: vs,
						breadcrumb: [{
							position: 1,
							name: "Home",
							item: "/"
						}, {
							position: 2,
							name: "Business",
							item: "/business"
						}, {
							position: 3,
							name: "SMB Campaign",
							item: "/business/campaign/smb"
						}]
					})]
				],
				ks = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(15), n.e(123)]).then(n.bind(null, 3453))
				}),
				ws = [s.a.createElement(ys, {
					key: "/business/campaign/ai-skin-diagnostic",
					exact: !0,
					path: "/business/campaign/ai-skin-diagnostic",
					component: ks,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "AI Skin Diagnostic",
						item: "/business/campaign/ai-skin-diagnostic"
					}]
				}), s.a.createElement(ys, {
					key: "/business/campaign/skin-diagnostic",
					exact: !0,
					path: "/business/campaign/skin-diagnostic",
					component: ks,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Skin Diagnostic",
						item: "/business/campaign/skin-diagnostic"
					}]
				})],
				Os = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(15), n.e(123)]).then(n.bind(null, 3445))
				}),
				_s = [s.a.createElement(ys, {
					key: "/business/campaign/ai-skin-analysis",
					exact: !0,
					path: "/business/campaign/ai-skin-analysis",
					component: Os,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "AI Skin Analysis",
						item: "/business/campaign/ai-skin-analysis"
					}]
				}), s.a.createElement(ys, {
					key: "/business/campaign/skin-analysis",
					exact: !0,
					path: "/business/campaign/skin-analysis",
					component: Os,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Skin Analysis",
						item: "/business/campaign/skin-analysis"
					}]
				})],
				xs = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(15), n.e(123)]).then(n.bind(null, 3417))
				}),
				Ss = [s.a.createElement(ys, {
					key: "/business/campaign/vto",
					exact: !0,
					path: "/business/campaign/vto",
					component: xs,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "SMB Campaign",
						item: "/business/campaign/vto"
					}]
				}), s.a.createElement(ys, {
					key: "/business/campaign/vto-v1",
					exact: !0,
					path: "/business/campaign/vto-v1",
					component: xs,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "SMB Campaign",
						item: "/business/campaign/vto-v1"
					}]
				})],
				js = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(2), n.e(3), n.e(15), n.e(123)]).then(n.bind(null, 3422))
				}),
				As = [Es, ws, _s, Ss, [s.a.createElement(ys, {
					key: "/business/campaign/virtual-makeup",
					exact: !0,
					path: "/business/campaign/virtual-makeup",
					component: js,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Virtual Makeup",
						item: "/business/campaign/virtual-makeup"
					}]
				})]],
				Ts = Object(A.a)(function() {
					return n.e(172).then(n.bind(null, 3488))
				}),
				Cs = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(171)]).then(n.bind(null, 3487))
				}),
				Ns = [s.a.createElement(J, {
					key: "/business/education-series/detail/:sessionId?",
					exact: !0,
					path: "/business/education-series/detail/:sessionId?",
					component: function(e) {
						return s.a.createElement(Cs, e)
					},
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Education Series",
						item: "/business/education-series/detail"
					}]
				}), s.a.createElement(J, {
					key: "/business/education-series",
					exact: !0,
					path: "/business/education-series",
					component: function(e) {
						return s.a.createElement(Ts, e)
					},
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Education Series",
						item: "/business/education-series"
					}]
				})],
				Ps = Object(A.a)(function() {
					return n.e(223).then(n.bind(null, 3350))
				}),
				Ks = function(e) {
					var t = e.component,
						n = Object(C.a)(e, ["component"]),
						i = Object(a.useState)(!0),
						r = Object(m.a)(i, 2),
						o = r[0],
						c = r[1];
					return Object(a.useEffect)(function() {
						"ReactSnap" !== window.navigator.userAgent && c(W.a.getCookieStatement())
					}, []), s.a.createElement(p.Route, Object.assign({}, n, {
						render: function(e) {
							return s.a.createElement("div", null, s.a.createElement(t, e), s.a.createElement(z.a, {
								hideStatement: !!o,
								setHideStatement: c
							}))
						}
					}))
				},
				Is = [
					[s.a.createElement(Ks, {
						key: "/business/beauty-fashion-metaverse",
						exact: !0,
						path: "/business/beauty-fashion-metaverse",
						component: Ps
					}), s.a.createElement(Ks, {
						key: "/business/CES2022",
						exact: !0,
						path: "/business/CES2022",
						component: Ps
					})]
				],
				Bs = n(210),
				Ls = n.n(Bs),
				Rs = n(21),
				Fs = n.n(Rs),
				Ds = n(200),
				Ms = n(264),
				Us = n(32),
				Hs = n(373),
				Gs = (n(469), n(88)),
				Vs = n.n(Gs),
				Ys = (n(905), n(199)),
				zs = n(42),
				Ws = n(119),
				Js = (n(906), n(47)),
				qs = n(8);

			function Qs(e) {
				var t = e.is2b,
					i = e.item,
					r = e.menu,
					o = e.activeText,
					c = e.BannerIcon,
					u = e.isEvent,
					l = void 0 !== u && u,
					p = Object(Ws.a)(),
					d = Object(a.useState)(!1),
					b = Object(m.a)(d, 2),
					f = b[0],
					h = b[1],
					g = Object(zs.a)();
				return s.a.createElement(Us.a, {
					className: R()({
						"nft-header": !0,
						"nft-header-scroll": !!p || g <= 1024
					})
				}, s.a.createElement("div", {
					className: "nft-header--left-container"
				}, s.a.createElement(qs.a, {
					className: "nft-header--pf-btn",
					href: t ? "/business" : "/consumer"
				}, s.a.createElement("img", {
					alt: "",
					src: n(410)
				})), !S()(c) && s.a.createElement("div", {
					className: "nft-header--nft-btn",
					onClick: c.func,
					style: c.style
				}, c.text)), s.a.createElement("div", {
					className: "nft-header--right-container"
				}, !S()(i) && i.map(function(e, t) {
					return s.a.createElement("div", {
						key: "nft-header--item".concat(t)
					}, e.hashlink ? s.a.createElement(Js.HashLink, {
						to: e.link,
						className: R()({
							"nft-header--btn-active": o === e.activeText
						})
					}, e.text) : s.a.createElement(qs.a, {
						to: e.link,
						className: R()({
							"nft-header--btn-active": o === e.activeText
						})
					}, e.text))
				})), r && s.a.createElement(Ys.a, {
					isBusiness: !1,
					popupMenu: f,
					setPopupMenu: h,
					isNewHeader: !1,
					isEvent: l
				}))
			}
			var Xs = n(291),
				Zs = n(92),
				$s = (n(907), n(258)),
				ei = n.n($s);

			function ti(e) {
				var t = e.data,
					n = e.speakerCircle,
					i = Object(zs.a)(),
					r = Object(a.useState)(!0),
					o = Object(m.a)(r, 2),
					c = o[0],
					u = o[1],
					l = t.sessionSpeakers.length > 0 || t.sessionSubTitle && "&nbsp;" !== t.sessionSubTitle,
					p = s.a.createElement("div", {
						className: R()({
							"pf-gbtf--event-sec4-list--btn": !0,
							"pf-gbtf--event-sec4-list--btn--active": c
						})
					});
				return s.a.createElement("div", {
					className: R()({
						"pf-gbtf--event-sec4-list": !0,
						"pf-gbtf--event-sec4-list--hover": l
					}),
					onClick: function() {
						l && u(!c)
					}
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-list--content"
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-list--date"
				}, s.a.createElement(Zs.a, {
					type: "estMin",
					time: _.a.convertToUst(t.sessionStartDate)
				}), " ", "-", " ", s.a.createElement(Zs.a, {
					type: "estMin",
					time: _.a.convertToUst(t.sessionEndDate)
				}), " ", "ET"), s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-list--info"
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-list--info-title"
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-list--info-title-container"
				}, t.sessionTitle, c && t.sessionSubTitle && "&nbsp;" !== t.sessionSubTitle && s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-list--info-subtitle"
				}, Vs()(t.sessionSubTitle))), i <= 600 && l && s.a.createElement(s.a.Fragment, null, p)), c && !S()(t.sessionSpeakers) && s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-list--info-container"
				}, t.sessionSpeakers.map(function(e, t) {
					return s.a.createElement("div", {
						key: "gbtf-event-sec4-list".concat(t),
						style: {
							display: i > 600 ? "flex" : "block",
							alignItems: "center"
						}
					}, n(e.speaker.speakerImageUrl, 100, {
						margin: i <= 600 ? "0 auto 10px" : "initial"
					}, 4), s.a.createElement("div", {
						className: "gbtf--event-speaker--cover--list--speaker"
					}, e.speaker.brandImageUrl && s.a.createElement("div", {
						className: "gbtf--event-speaker--cover--list--speaker-img"
					}, s.a.createElement("img", {
						alt: "",
						src: e.speaker.brandImageUrl
					})), s.a.createElement("div", null, e.speaker.speakerName)))
				})), !c && !S()(ei()(t.sessionSpeakers, "speaker.brandName")) && s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-list--brandlogo-container"
				}, ei()(t.sessionSpeakers, "speaker.brandName").map(function(e, n) {
					return s.a.createElement("div", {
						key: "".concat(t.sessionTitle).concat(n)
					}, e.speaker.brandImageUrl && s.a.createElement("img", {
						alt: "",
						src: e.speaker.brandImageUrl
					}))
				})))), l && i > 600 && s.a.createElement(s.a.Fragment, null, p))
			}
			var ni = n(115),
				ai = n.n(ni);

			function si(e) {
				var t = e.val,
					i = e.courseData,
					r = e.courseInfo,
					o = e.speaker,
					c = e.speakerId,
					u = Object(zs.a)(),
					l = Object(N.d)().i18n,
					p = Object(a.useState)(""),
					d = Object(m.a)(p, 2),
					b = d[0],
					f = d[1],
					h = "en" !== l.language && l.language ? "/".concat(l.language.replace("_", "-").toLowerCase()) : "",
					g = Object(a.useState)(!0),
					v = Object(m.a)(g, 2),
					y = v[0],
					E = v[1],
					k = new Date(2022, 5, 21, 9),
					w = (new Date).getTimezoneOffset() / 60,
					O = new Date;
				O.setTime(O.setHours(O.getHours() + w + 8)), Object(a.useEffect)(function() {
					O >= k && E(!1)
				}, [O, k]);
				var x = [{
						text: s.a.createElement(N.a, {
							i18nKey: "business:p.b.g.e.speakers"
						}, "Speakers"),
						hashlink: !0,
						link: "#speakers",
						activeText: "speakers"
					}, {
						text: s.a.createElement(N.a, {
							i18nKey: "business:p.b.g.e.agenda"
						}, "Agenda"),
						hashlink: !0,
						link: "#agenda",
						activeText: "agenda"
					}, {
						text: s.a.createElement(N.a, {
							i18nKey: "business:p.b.g.e.tickets"
						}, "Tickets"),
						hashlink: !0,
						link: "".concat(window.location.pathname, "#tickets"),
						activeText: "tickets"
					}],
					A = W.a.getFirstUtmSource() && W.a.getFirstUtmSource().utm_medium ? W.a.getFirstUtmSource().utm_medium.toLowerCase() : "",
					T = W.a.getLastTargetedAdUtmSource() && W.a.getLastTargetedAdUtmSource().utm_source ? W.a.getLastTargetedAdUtmSource().utm_source.toLowerCase() : "",
					C = T ? "google" === T ? "GoogleAds" : "linkedin" === T && "LinkedInAds" : "email" === A && "Email",
					P = "https://www.eventbrite.com/e/the-global-beauty-and-fashion-tech-forum-2022-tickets-310863841117?aff=".concat(C || "GBTF2022"),
					K = "https://register.gotowebinar.com/register/132198003596039440?source=".concat(C || "GlobalBeautyFashionTechForum"),
					I = function(e, t, a, i) {
						return s.a.createElement("div", {
							className: "pf-gbtf--event-sec2-card-bgc"
						}, s.a.createElement(qs.a, {
							className: "pf-gbtf--event-sec2-card-content ".concat(i),
							to: a,
							isNewTab: !0
						}, s.a.createElement("img", {
							alt: "",
							className: "pf-gbtf--event-sec2-card-content--icon",
							src: e
						}), s.a.createElement("div", null, t), s.a.createElement("img", {
							alt: "",
							className: "pf-gbtf--event-sec2-card-content--arrow",
							src: n(385)
						})))
					},
					B = function(e, t, a, i) {
						return u <= 600 ? I(e, t, a, i) : s.a.createElement("div", {
							className: "pf-gbtf--event-sec5-card-bgc"
						}, s.a.createElement(qs.a, {
							className: "pf-gbtf--event-sec5-card-content ".concat(i),
							to: a,
							isNewTab: !0
						}, s.a.createElement("img", {
							alt: "",
							width: 90,
							src: e
						}), s.a.createElement("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							}
						}, s.a.createElement("div", null, t), s.a.createElement("img", {
							alt: "",
							className: "pf-gbtf--event-sec2-card-content--arrow",
							src: n(385)
						}))))
					};
				var L = function(e, t, n, a) {
					return s.a.createElement("div", {
						className: "gbtf--event-speaker--cover",
						style: Object(j.a)({
							width: t,
							height: t
						}, n)
					}, s.a.createElement("div", {
						style: {
							width: t - a,
							height: t - a,
							top: a / 2
						}
					}, s.a.createElement("img", {
						alt: "",
						src: e,
						width: t - (a + 4),
						height: t - (a + 4)
					})))
				};
				return s.a.createElement("div", {
					style: {
						overflowX: "hidden"
					}
				}, s.a.createElement(Qs, {
					language: h,
					activeText: b,
					item: x,
					is2b: !0,
					menu: !0,
					isEvent: !0
				}), s.a.createElement("div", {
					className: "pf-gbtf--event-banner--bgc",
					style: {
						backgroundImage: "url('".concat(function() {
							if (!S()(r)) {
								var e = u > 600 ? r.desktopBanner : r.mobileBanner;
								return (new Image).src = e, e
							}
						}(), "')")
					}
				}), s.a.createElement(Us.a, {
					className: "pf-gbtf--event-sec1-bgc"
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec1-container"
				}, s.a.createElement(ai.a, {
					onChange: function(e) {
						e && f("")
					}
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec1-title"
				}, Vs()(i.courseTitle))), s.a.createElement("div", {
					className: "pf-gbtf--event-sec1-desc"
				}, Vs()(i.courseDesc))), s.a.createElement("div", {
					className: "pf-gbtf--event-sec1-card"
				}, s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement("img", {
					alt: "",
					src: n(909)
				}), s.a.createElement("div", null, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.date"
				}, "Date"))), s.a.createElement("div", null, r.courseDate && r.courseDate)), s.a.createElement("span", {
					className: "pf-gbtf--event-sec1-card--border"
				}), s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement("img", {
					alt: "",
					src: n(910)
				}), s.a.createElement("div", null, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.time"
				}, "Time"))), s.a.createElement("div", null, r.courseTime && r.courseTime)), s.a.createElement("span", {
					className: "pf-gbtf--event-sec1-card--border"
				}), s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement("img", {
					alt: "",
					src: n(911)
				}), s.a.createElement("div", null, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.location"
				}, "Location"))), s.a.createElement("div", null, r.courseLocation && r.courseLocation)))), s.a.createElement("div", {
					className: "pf-gbtf--event-sec2-bgc",
					id: "tickets",
					style: {
						display: !y && "none"
					}
				}, s.a.createElement(Us.a, {
					mobileType: !0
				}, s.a.createElement(ai.a, {
					onChange: function(e) {
						e && f("tickets")
					}
				}, s.a.createElement("h2", {
					className: "pf-gbtf--event-sec2-title"
				}, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec2.title"
				}, "Tickets on sale now!"))), s.a.createElement("div", {
					className: "pf-gbtf--event-sec2-card--container"
				}, I(n(386), s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec2.ticket1.text"
				}, "Join in Person!"), P, "gtm_pf-gbtf--event-sec2-card-content_Join-in-Person"), I(n(387), s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec2.ticket2.text"
				}, "Join Online!"), K, "gtm_pf-gbtf--event-sec2-card-content_Join-Online")), s.a.createElement("div", {
					className: "pf-gbtf--event-sec2-desc"
				}, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec2.desc"
				}, s.a.createElement("strong", null, "Joining in person"), " will grant you access to all keynote presentations, and mainstage panels, as well as an interactive technology showcase, and catered lunch.", s.a.createElement("br", null), s.a.createElement("br", null), u <= 600 && s.a.createElement("br", null), s.a.createElement("strong", null, "Joining online"), " will grant you access to all keynote presentations, and mainstage panels that will be streamed in real time.")))), s.a.createElement("div", {
					className: "pf-gbtf--event-sec3-bgc",
					id: "speakers"
				}, s.a.createElement(Us.a, {
					mobileType: !0
				}, s.a.createElement(ai.a, {
					onChange: function(e) {
						e && f("speakers")
					}
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec3-title"
				}, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec3.title"
				}, "Speakers")))), s.a.createElement(Us.a, {
					className: "gbtf--event-sec3-container",
					mobileType: !0
				}, !S()(c) && !S()(o) && c.map(function(e, t) {
					return s.a.createElement("div", {
						className: "gbtf--event-speaker--block",
						key: "gbtf--speaker".concat(t)
					}, e && o[e] && o[e].speakerImageUrl && s.a.createElement(s.a.Fragment, null, L(o[e].speakerImageUrl, u > 600 ? 200 : 130, {
						margin: "0 auto 12px"
					}, 8)), e && e && o[e] && o[e].brandImageUrl && s.a.createElement("div", {
						className: "gbtf--event-speaker--brand"
					}, s.a.createElement("img", {
						alt: "",
						src: o[e].brandImageUrl
					})), s.a.createElement("div", {
						className: "gbtf--event-speaker--speakername"
					}, e && o[e] && o[e].speakerName), s.a.createElement("div", {
						className: "gbtf--event-speaker--speakerPosition"
					}, e && o[e] && o[e].speakerPosition))
				})), !S()(c) && c.length > 6 && s.a.createElement("img", {
					className: "pf-gbtf--event-sec3-mobile--bottom-image",
					alt: "",
					src: "https://plugins-media.makeupar.com/smb/story/2022-04-12/3dd04285-7a03-40d0-af2d-6553dbe7a936.jpg"
				})), s.a.createElement(Us.a, {
					mobileType: !0,
					className: "pf-gbtf--event-sec4-bgc",
					id: "agenda"
				}, s.a.createElement(ai.a, {
					onChange: function(e) {
						e && f("agenda")
					}
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-title"
				}, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec4.title"
				}, "Agenda"))), !S()(t) && s.a.createElement("div", null, s.a.createElement("div", {
					className: "pf-gbtf--event-sec4-date"
				}, s.a.createElement(Xs.a, {
					ustDate: _.a.convertToUst(t[0].sessionStartDate),
					type: "gbtf-event"
				})), t.map(function(e, t) {
					return s.a.createElement("div", {
						className: "pf-gbtf--event-sec4-list--bottom",
						key: "pf-gbtf--event-sec4-list".concat(t)
					}, s.a.createElement(ti, {
						data: e,
						speakerCircle: L
					}))
				}))), s.a.createElement("div", {
					className: "pf-gbtf--event-sec5-bgc",
					style: {
						display: !y && "none"
					}
				}, s.a.createElement(Us.a, {
					mobileType: !0
				}, s.a.createElement(ai.a, {
					onChange: function(e) {
						e && f("")
					}
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec3-title"
				}, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec5.title"
				}, "Tickets on sale now!"))), s.a.createElement("div", {
					className: "pf-gbtf--event-sec2-card--container"
				}, B(n(386), s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec2.ticket1.text"
				}, "Join in Person!"), P, "gtm_pf-gbtf--event-sec5-card-content_Join-in-Person"), B(n(387), s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec2.ticket2.text"
				}, "Join Online!"), K, "gtm_pf-gbtf--event-sec5-card-content_Join-Online")))), s.a.createElement(Us.a, {
					className: "pf-gbtf--event-sec6-bgc",
					mobileType: !0
				}, s.a.createElement(ai.a, {
					onChange: function(e) {
						e && f("")
					}
				}, s.a.createElement("div", {
					className: "pf-gbtf--event-sec3-title"
				}, s.a.createElement(N.a, {
					i18nKey: "business:p.b.g.e.sec6.title"
				}, "Sponsors"))), s.a.createElement("div", {
					className: "pf-gbtf--event-sec6-block"
				}, s.a.createElement(qs.a, {
					to: "/business"
				}, s.a.createElement("img", {
					alt: "",
					src: n(912)
				})), s.a.createElement(qs.a, {
					to: "/consumer/apps/ymk"
				}, s.a.createElement("img", {
					alt: "",
					src: n(913)
				})))))
			}

			function ii(e) {
				var t = e.val,
					n = e.courseId,
					i = Object(N.d)().t,
					r = Object(a.useState)([]),
					o = Object(m.a)(r, 2),
					c = o[0],
					u = o[1],
					l = Object(a.useState)(!1),
					p = Object(m.a)(l, 2),
					d = p[0],
					h = p[1],
					g = Object(a.useState)({
						courseTitle: "",
						courseDesc: "",
						courseKey: "",
						courseName: ""
					}),
					v = Object(m.a)(g, 2),
					y = v[0],
					E = v[1],
					k = e.match.params.lang,
					w = k || "enu";
				Object(a.useEffect)(function() {
					if (h(!0), n) V.a.listSessionsByCourseId({
						courseId: n
					}).then(function(e) {
						S()(e) || (E({
							courseTitle: e[0].course.courseTitle,
							courseDesc: e[0].course.courseDesc,
							courseKey: e[0].course.courseKey,
							courseName: e[0].course.courseName,
							isLatest: e[0].course.isLatest
						}), u(Ls()(e, ["sessionStartDate"])), h(!1))
					});
					else {
						if (S()(t)) return;
						E({
							courseTitle: t[0].course.courseTitle,
							courseDesc: t[0].course.courseDesc,
							courseKey: t[0].course.courseKey,
							courseName: t[0].course.courseName,
							isLatest: t[0].course.isLatest
						}), u(Ls()(t, ["sessionStartDate"])), h(!1)
					}
					window.scrollTo(0, 0)
				}, [k, t]);
				var O = Object(a.useState)({}),
					_ = Object(m.a)(O, 2),
					x = _[0],
					j = _[1],
					A = Object(a.useState)({}),
					T = Object(m.a)(A, 2),
					C = T[0],
					P = T[1],
					K = Object(a.useState)([]),
					I = Object(m.a)(K, 2),
					B = I[0],
					L = I[1];
				Object(a.useEffect)(function() {
					S()(t) || "EVENT_PAGE" !== t[0].course.pageType || (P(JSON.parse(t[0].course.attrs.META_COURSES)), t[0] && t[0].course.attrs.SPEAKER_ORDER && L(JSON.parse(t[0].course.attrs.SPEAKER_ORDER)))
				}, []);
				var R = function() {
					var e = Object(f.a)(b.a.mark(function e(t) {
						return b.a.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, V.a.querySpeaker({
										speakerId: t
									});
								case 2:
									return e.abrupt("return", e.sent);
								case 3:
								case "end":
									return e.stop()
							}
						}, e)
					}));
					return function(t) {
						return e.apply(this, arguments)
					}
				}();
				return Object(a.useEffect)(function() {
					if (!S()(B)) {
						var e = {};
						B.forEach(function(t) {
							R(t).then(function(t) {
								e[t.id] = t, j(e)
							})
						})
					}
				}, [B]), d && S()(t) ? s.a.createElement(Us.a, null, s.a.createElement(Ms.a, null)) : S()(t) || "EVENT_PAGE" !== t[0].course.pageType ? s.a.createElement("div", null, s.a.createElement(Ds.a, {
					key: "seo",
					title: i("seo:business.beauty.tech.forum.virtual.title", "The Global Beauty Tech Forum Virtual Event Archive | PERFECT"),
					description: i("seo:business.beauty.tech.forum.virtual.desc", "Learn more about our expert-led monthly webinars showcasing the fundamentals of AI & AR beauty technologies and their real-world practical application."),
					image: Fs()(c, "[0].sessionImageUrl"),
					breadcrumb: e.breadcrumb
				}), s.a.createElement(Us.a, {
					mobileType: !0
				}, s.a.createElement("div", {
					className: "btfv-title"
				}, Vs()(y.courseTitle)), s.a.createElement("div", {
					className: "btfv-desc"
				}, Vs()(y.courseDesc)), s.a.createElement("h2", {
					className: "btfv-title"
				}, y.courseName), s.a.createElement("div", {
					className: "btfv-events"
				}, !S()(c) && c.map(function(e, t) {
					return s.a.createElement(Hs.a, {
						key: "panel-".concat(t),
						label: s.a.createElement("div", null, s.a.createElement(N.a, {
							i18nKey: "business:p.b.b.v.home.panel"
						}, "PANEL"), " ", Fs()(e, "sessionNumber")),
						labelColor: "#73a9c6",
						showWatchReplay: !0,
						title: e.sessionTitle,
						speakers: e.sessionSpeakers,
						actionLink: "/business/global-beauty-tech-forum/detail/".concat(e.id),
						image: e.sessionImageUrl,
						actionType: e.videoUrl ? "video" : "register",
						languageType: w,
						eventList: c
					})
				})))) : s.a.createElement("div", null, s.a.createElement(Ds.a, {
					key: "seo",
					title: i("seo:business.beauty.tech.forum.virtual.title", "The Global Beauty Tech Forum Virtual Event Archive | PERFECT"),
					description: i("seo:business.beauty.tech.forum.virtual.desc", "Learn more about our expert-led monthly webinars showcasing the fundamentals of AI & AR beauty technologies and their real-world practical application."),
					image: Fs()(c, "[0].sessionImageUrl"),
					breadcrumb: e.breadcrumb
				}), s.a.createElement(si, {
					val: t,
					courseData: y,
					courseInfo: C,
					speaker: x,
					speakerId: B
				}))
			}
			var ri = [
					[s.a.createElement(J, {
						key: "/business/global-beauty-tech-forum",
						exact: !0,
						path: "/business/global-beauty-tech-forum/:lang(|fra|enu|jpn)?",
						component: function(e) {
							return s.a.createElement(ii, e)
						},
						breadcrumb: [{
							position: 1,
							name: "Home",
							item: "/"
						}, {
							position: 2,
							name: "Business",
							item: "/business"
						}, {
							position: 3,
							name: "GBTF",
							item: "/business/global-beauty-tech-forum"
						}],
						isGbtf: !0
					}), s.a.createElement(J, {
						key: "/business/global-beauty-tech-forum-2021/fra",
						exact: !0,
						path: "/business/global-beauty-tech-forum-2021/fra",
						component: function(e) {
							return s.a.createElement(ii, Object.assign({
								courseId: 8
							}, e))
						},
						breadcrumb: [{
							position: 1,
							name: "Home",
							item: "/"
						}, {
							position: 2,
							name: "Business",
							item: "/business"
						}, {
							position: 3,
							name: "Master Class",
							item: "/business/beauty-tech-forum-master-class"
						}],
						isGbtf: !0
					})], hs
				],
				oi = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(5), n.e(6), n.e(163)]).then(n.bind(null, 3427))
				}),
				ci = [s.a.createElement(J, {
					key: "/business/investors",
					exact: !0,
					path: "/business/investors",
					component: oi,
					isEnterprise: !0,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Investors",
						item: "/business/investors"
					}],
					contactsalesbutton: !1
				})],
				ui = Object(A.a)(function() {
					return Promise.all([n.e(17), n.e(206)]).then(n.bind(null, 3351))
				});
			n(914);

			function li(e) {
				var t = e.terms,
					a = e.is2b,
					i = e.language,
					r = Object(N.d)().t;
				return s.a.createElement("div", {
					className: "nft-footer"
				}, s.a.createElement("div", null, "2022@\xa0\xa0", r("business:c.l.f.copyright", "Perfect Corp. All Rights Reserved.")), !t && s.a.createElement("a", {
					className: "nft-footer--terms",
					href: "".concat(i, "/nft/terms?is2b=").concat(a),
					target: "_blank"
				}, s.a.createElement("div", null, "Terms of use"), s.a.createElement("img", {
					alt: "",
					src: n(915)
				})))
			}
			var mi = function(e) {
					var t = e.component,
						n = e.menu,
						i = void 0 !== n && n,
						r = e.footer,
						o = void 0 !== r && r,
						c = e.terms,
						u = void 0 !== c && c,
						l = Object(C.a)(e, ["component", "menu", "footer", "terms"]),
						d = Object(a.useState)(""),
						b = Object(m.a)(d, 2),
						f = b[0],
						h = b[1],
						g = "true" === new URLSearchParams(window.location.search).get("is2b"),
						v = Object(N.d)().i18n,
						y = "en" !== v.language && v.language ? "/".concat(v.language.replace("_", "-").toLowerCase()) : "",
						E = [{
							show: "2b",
							text: s.a.createElement(N.a, {
								i18nKey: "business:c.l.nft.header.how.it.works"
							}, "How it works?"),
							hashlink: !0,
							link: "".concat(y, "/nft?is2b=").concat(g, "#howitwork"),
							activeText: "howitwork"
						}, {
							show: "all",
							text: s.a.createElement(N.a, {
								i18nKey: "business:c.l.nft.header.nft.collection"
							}, "NFT Collection"),
							hashlink: !0,
							link: "".concat(y, "/nft?is2b=").concat(g, "#nftcollection"),
							activeText: "nftcollection"
						}, {
							show: "all",
							text: s.a.createElement(N.a, {
								i18nKey: "business:c.l.nft.header.faq"
							}, "FAQ"),
							hashlink: !0,
							link: "".concat(y, "/nft?is2b=").concat(g, "#faq"),
							activeText: "faq"
						}, {
							show: "2b",
							text: s.a.createElement(N.a, {
								i18nKey: "business:c.l.nft.header.contact.us"
							}, "Contact Us"),
							hashlink: !1,
							link: "/business/contact-us/sales",
							activeText: "contactus"
						}],
						k = Object(a.useState)(!0),
						w = Object(m.a)(k, 2),
						O = w[0],
						_ = w[1];
					return Object(a.useEffect)(function() {
						"ReactSnap" !== window.navigator.userAgent && _(W.a.getCookieStatement())
					}, []), s.a.createElement(p.Route, Object.assign({}, l, {
						render: function(e) {
							return s.a.createElement("div", {
								className: R()({
									"pf-language": !0,
									"pf-language-ja": "ja" === v.language
								})
							}, s.a.createElement(Qs, {
								activeText: f,
								menu: i,
								is2b: g,
								item: g ? E : E.filter(function(e) {
									return e.show && "2b" !== e.show
								}),
								BannerIcon: {
									text: s.a.createElement(N.a, {
										i18nKey: "business:c.l.nft.header.nft"
									}, "NFT"),
									func: function() {
										u && window.open("".concat(y, "/nft?is2b=").concat(g))
									},
									style: {
										cursor: u ? "pointer" : "context-menu"
									}
								}
							}), s.a.createElement(t, Object.assign({}, e, {
								setActiveText: h
							})), s.a.createElement(z.a, {
								hideStatement: !!O,
								setHideStatement: _
							}), o && s.a.createElement(li, {
								terms: u,
								is2b: g,
								language: y
							}))
						}
					}))
				},
				pi = [s.a.createElement(mi, {
					key: "/nft/wallet",
					exact: !0,
					path: "/nft/wallet",
					component: ui
				})],
				di = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(12), n.e(26), n.e(17), n.e(197)]).then(n.bind(null, 3352))
				}),
				bi = [s.a.createElement(mi, {
					key: "/nft/detail",
					exact: !0,
					path: "/nft/detail/:tokenId",
					component: di
				})],
				fi = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(2), n.e(3), n.e(12), n.e(189)]).then(n.bind(null, 3437))
				}),
				hi = [s.a.createElement(mi, {
					key: "/nft",
					exact: !0,
					path: "/nft",
					component: fi,
					footer: !0,
					menu: !0
				})],
				gi = Object(A.a)(function() {
					return Promise.all([n.e(1), n.e(26), n.e(17), n.e(200)]).then(n.bind(null, 3353))
				}),
				vi = [s.a.createElement(Ks, {
					key: "/nft/try-on/:lookGuid?",
					exact: !0,
					path: "/nft/try-on/:lookGuid?",
					component: gi
				})],
				yi = Object(A.a)(function() {
					return n.e(225).then(n.bind(null, 3354))
				}),
				Ei = [pi, hi, bi, vi, [s.a.createElement(mi, {
					key: "/nft/terms",
					exact: !0,
					path: "/nft/terms",
					component: yi,
					footer: !0,
					menu: !0,
					terms: !0
				})]],
				ki = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(1), n.e(5), n.e(6), n.e(50)]).then(n.bind(null, 3440))
				}),
				wi = [s.a.createElement(J, {
					key: "/business/partners",
					exact: !0,
					path: "/business/partners",
					component: ki,
					isEnterprise: !0,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Business",
						item: "/business"
					}, {
						position: 3,
						name: "Investors",
						item: "/business/partners"
					}],
					contactsalesbutton: !1
				})],
				Oi = Object(A.a)(function() {
					return n.e(217).then(n.bind(null, 3355))
				}),
				_i = [q, ve, we, He, Rn, Xn, sn, ta, Ma, Va, Za, ns, rs, ps, gs, Ns, As, Be, Is, ri, ci, Ei, wi, [s.a.createElement(J, {
					key: "/business/gcse",
					exact: !0,
					path: "/business/gcse",
					component: Oi,
					contactsalesbutton: !1
				})]],
				xi = Object(A.a)(function() {
					return Promise.all([n.e(2), n.e(3), n.e(158)]).then(n.bind(null, 3428))
				}),
				Si = function(e) {
					var t = e.component,
						n = e.backgroundImage,
						a = e.breadcrumb,
						i = void 0 === a ? [] : a,
						r = Object(C.a)(e, ["component", "backgroundImage", "breadcrumb"]);
					Object(K.a)();
					var o = Object(N.d)().i18n;
					return s.a.createElement(p.Route, Object.assign({}, r, {
						render: function(e) {
							return s.a.createElement(D.a, null, s.a.createElement("div", {
								className: R()({
									"pf-language": !0,
									"pf-language-ja": "ja" === o.language
								}),
								style: {
									background: n && "url(".concat(n, ") no-repeat 50% fixed"),
									backgroundSize: "cover"
								}
							}, s.a.createElement("div", null, s.a.createElement(t, Object.assign({}, e, {
								breadcrumb: i
							}))), s.a.createElement(B.a, {
								height: 500,
								once: !0,
								unmountIfInvisible: !0,
								throttle: 1e3
							}, s.a.createElement(F, null))))
						}
					}))
				},
				ji = [s.a.createElement(Si, {
					key: "/consumer",
					exact: !0,
					path: "/consumer",
					component: xi,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}]
				})],
				Ai = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(19), n.e(148)]).then(n.bind(null, 3356))
				}),
				Ti = [s.a.createElement(Si, {
					key: "/consumer/apps/ycf",
					exact: !0,
					path: "/consumer/apps/ycf",
					component: Ai,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "YCF",
						item: "/consumer/apps/ycf"
					}]
				})],
				Ci = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(19), n.e(149)]).then(n.bind(null, 3357))
				}),
				Ni = [s.a.createElement(Si, {
					key: "/consumer/apps/ycn",
					exact: !0,
					path: "/consumer/apps/ycn",
					component: Ci,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "YCN",
						item: "/consumer/apps/ycn"
					}]
				})],
				Pi = Object(A.a)(function() {
					return Promise.all([n.e(2), n.e(3), n.e(21), n.e(150)]).then(n.bind(null, 3455))
				}),
				Ki = [s.a.createElement(Si, {
					key: "/consumer/apps/ycp",
					exact: !0,
					path: "/consumer/apps/ycp",
					component: Pi,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "YCP",
						item: "/consumer/apps/ycp"
					}]
				})],
				Ii = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(19), n.e(151)]).then(n.bind(null, 3459))
				}),
				Bi = [s.a.createElement(Si, {
					key: "/consumer/apps/ycv",
					exact: !0,
					path: "/consumer/apps/ycv",
					component: Ii,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "YCV",
						item: "/consumer/apps/ycv"
					}]
				})],
				Li = Object(A.a)(function() {
					return Promise.all([n.e(0), n.e(19), n.e(151)]).then(n.bind(null, 3358))
				}),
				Ri = [s.a.createElement(Si, {
					key: "/consumer/apps/ycc",
					exact: !0,
					path: "/consumer/apps/ycc",
					component: Li,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "YCC",
						item: "/consumer/apps/ycc"
					}]
				})],
				Fi = Object(A.a)(function() {
					return Promise.all([n.e(2), n.e(3), n.e(21), n.e(152)]).then(n.bind(null, 3420))
				}),
				Di = [s.a.createElement(Si, {
					key: "/consumer/apps/ymk",
					exact: !0,
					path: "/consumer/apps/ymk",
					component: Fi,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "YMK",
						item: "/consumer/apps/ymk"
					}]
				})],
				Mi = Object(A.a)(function() {
					return n.e(147).then(n.bind(null, 3470))
				}),
				Ui = (s.a.createElement(Si, {
					key: "/consumer/apps",
					exact: !0,
					path: "/consumer/apps",
					component: Mi
				}), [Ti, Ni, Ki, Ri, Bi, Di]),
				Hi = [s.a.createElement(Si, {
					key: "/consumer/about-us",
					exact: !0,
					path: "/consumer/about-us",
					component: se,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "About us",
						item: "/consumer/about-us"
					}]
				})],
				Gi = Object(A.a)(function() {
					return Promise.all([n.e(5), n.e(6), n.e(7), n.e(11), n.e(162)]).then(n.bind(null, 3421))
				}),
				Vi = [Hi, [s.a.createElement(Si, {
						key: "/consumer/contact-us",
						exact: !0,
						path: "/consumer/contact-us/:type(media|support)?",
						component: Gi,
						backgroundImage: n(916),
						breadcrumb: [{
							position: 1,
							name: "Home",
							item: "/"
						}, {
							position: 2,
							name: "Consumer",
							item: "/consumer"
						}, {
							position: 3,
							name: "Contact us",
							item: "/consumer/contact-us"
						}]
					})],
					[s.a.createElement(Si, {
						key: "/consumer/impressum",
						exact: !0,
						path: "/consumer/impressum",
						component: be,
						breadcrumb: [{
							position: 1,
							name: "Home",
							item: "/"
						}, {
							position: 2,
							name: "Consumer",
							item: "/consumer"
						}, {
							position: 3,
							name: "Impressum",
							item: "/consumer/impressum"
						}]
					})]
				],
				Yi = Object(A.a)(function() {
					return n.e(146).then(n.bind(null, 3489))
				}),
				zi = [s.a.createElement(Si, {
					key: "/consumer/appdownload/:defaultApp?",
					exact: !0,
					path: "/consumer/appdownload/:defaultApp(ycf|ycn|ycp|ycv|ycc|ymk)?",
					component: Yi,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "App download",
						item: "/consumer/appdownload/ymk"
					}]
				})],
				Wi = [s.a.createElement(Si, {
					key: "/consumer/blog/author/:name",
					exact: !0,
					path: "/:type(consumer)/blog/author/:name",
					component: ls,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Author"
					}]
				}), s.a.createElement(Si, {
					key: "/consumer/blog/post",
					exact: !0,
					path: "/:type(consumer)/blog/post",
					component: us,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Post"
					}]
				}), s.a.createElement(Si, {
					key: "/consumer/blog/author",
					exact: !0,
					path: "/:type(consumer)/blog/author",
					component: ls,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Author"
					}]
				}), s.a.createElement(Si, {
					key: "/consumer/blog/search",
					exact: !0,
					path: "/:type(consumer)/blog/search/:keywords",
					component: ms,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Search"
					}]
				}), s.a.createElement(Si, {
					key: "/consumer/blog/category/:attr",
					exact: !0,
					path: "/:type(consumer)/blog/category/:attr",
					component: ms,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "Search"
					}]
				}), s.a.createElement(Si, {
					key: "/consumer/blog/:category/:title",
					exact: !0,
					path: "/:type(consumer)/blog/:category/:title",
					component: us,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}, {
						position: 3,
						name: "post_title"
					}]
				}), s.a.createElement(Si, {
					key: "/consumer/blog",
					exact: !0,
					path: "/:type(consumer)/blog/:page?",
					component: os,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Blog"
					}]
				})],
				Ji = [s.a.createElement(J, {
					key: "/:type(consumer)/news/detail/:id?",
					exact: !0,
					path: "/:type(consumer)/news/detail/:id?",
					component: Zn,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "news_title",
						item: "/consumer/news/detail"
					}]
				}), s.a.createElement(J, {
					key: "/:type(consumer)/news/:newsHandle?",
					exact: !0,
					path: "/:type(consumer)/news/:newsHandle?",
					component: Zn,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "news_title",
						item: "/consumer/news"
					}]
				}), s.a.createElement(J, {
					key: "/:type(consumer)/news/preview/:id?",
					exact: !0,
					path: "/:type(consumer)/news/preview/:id?",
					component: Zn,
					breadcrumb: [{
						position: 1,
						name: "Home",
						item: "/"
					}, {
						position: 2,
						name: "Consumer",
						item: "/consumer"
					}, {
						position: 3,
						name: "news_title",
						item: "/consumer/news/preview"
					}]
				})],
				qi = [
					[s.a.createElement(J, {
						key: "/:type(consumer)/news/list",
						exact: !0,
						path: "/:type(consumer)/news/list",
						component: ea,
						breadcrumb: [{
							position: 1,
							name: "Home",
							item: "/"
						}, {
							position: 2,
							name: "Consumer",
							item: "/consumer"
						}, {
							position: 3,
							name: "News List",
							item: "/consumer/news/list"
						}]
					})], Ji
				],
				Qi = Object(A.a)(function() {
					return n.e(192).then(n.bind(null, 3403))
				}),
				Xi = [
					[s.a.createElement(Si, {
						key: "/consumer/highlight/ymk",
						exact: !0,
						path: "/consumer/highlight/ymk",
						component: Qi
					})]
				],
				Zi = Object(A.a)(function() {
					return n.e(218).then(n.bind(null, 3359))
				}),
				$i = [ji, Ui, Vi, zi, Wi, qi, Xi, [s.a.createElement(Si, {
					key: "/consumer/gcse",
					exact: !0,
					path: "/consumer/gcse",
					component: Zi
				})]],
				er = Object(A.a)(function() {
					return n.e(204).then(n.bind(null, 3446))
				}),
				tr = [s.a.createElement(function(e) {
					var t = e.component,
						n = (e.isEnterprise, e.breadcrumb),
						a = void 0 === n ? [] : n,
						i = Object(C.a)(e, ["component", "isEnterprise", "breadcrumb"]);
					Object(K.a)();
					var r = Object(N.d)().i18n;
					return s.a.createElement(p.Route, Object.assign({}, i, {
						render: function(e) {
							return s.a.createElement(D.a, null, s.a.createElement("div", {
								className: R()({
									"pf-language": !0,
									"pf-language-ja": "ja" === r.language
								})
							}, s.a.createElement(B.a, {
								height: 1e3,
								once: !0,
								unmountIfInvisible: !0
							}, s.a.createElement("div", {
								style: {
									backgroundColor: "#fff"
								}
							}, s.a.createElement(t, Object.assign({}, e, {
								breadcrumb: a
							}))))))
						}
					}))
				}, {
					component: er
				})],
				nr = n(402),
				ar = n.n(nr),
				sr = n(166),
				ir = n(107),
				rr = {
					gtmId: "GTM-K6L9D76"
				},
				or = Object(p.withRouter)(function(e) {
					var t = e.location,
						n = Object(p.useHistory)(),
						i = Object(N.d)().i18n,
						r = new URLSearchParams(t.search),
						o = Object(a.useState)(W.a.getCurrentLanguage() || "en"),
						c = Object(m.a)(o, 2),
						u = c[0],
						l = c[1],
						d = r.get("ref") || "",
						b = r.get("affiliate") || "",
						f = r.get("utm_source") || "",
						h = r.get("utm_medium") || "",
						g = r.get("utm_campaign") || "",
						v = r.get("utm_content") || "";
					return w.a.setCookie("ref_code", d), w.a.setCookie("ref_source", f), w.a.setCookie("ref_medium", h), w.a.setCookie("ref_campaign", g), w.a.setCookie("ref_content", v), Object(a.useEffect)(function() {
						setTimeout(function() {
							var e = _.a.determineLanguage(i.language);
							O.a.sendMultilingualPageView(e)
						}, 0)
					}, [t]), Object(a.useEffect)(function() {
						ar.a.initialize(rr), O.a.loadGtagScript(), S()(b) || k.queryAffiliate(b).then(function(e) {
							if (e) {
								var t = new Date((new Date).getTime() + 864e5);
								w.a.setCookie("affiliationCode", b, {
									expires: t
								}), w.a.setCookie("affiliationDays", e.extensionDays, {
									expires: t
								})
							}
						})
					}, []), Object(a.useEffect)(function() {
						i.on("initialized", function() {
							var e = _.a.getPathnameLang(t.pathname);
							if (e && e.toLowerCase().replace("-", "_") !== _.a.determineLanguage(i.language).toLowerCase()) return i.changeLanguage(e), void l(e.replace("_", "-").toLowerCase());
							var n = _.a.determineLanguage(i.language);
							i.language !== n && (i.changeLanguage(n), l(n.replace("_", "-").toLowerCase()))
						})
					}, [t]), Object(a.useEffect)(function() {
						i.on("languageChanged", function(e) {
							return l(e.replace("_", "-").toLowerCase())
						}), i.on("languageChanged", function(e) {
							return W.a.setCurrentLanguage(e)
						})
					}, []), Object(a.useEffect)(function() {
						var e = _.a.getPathnameLang(t.pathname);
						l(e)
					}, [t]), Object(a.useEffect)(function() {
						var e = {
							utm_source: f,
							utm_medium: h,
							utm_campaign: g,
							utm_content: v
						};
						ir.a.updateFirst(e), ir.a.updateLastTargetedAd(e)
					}, [f, h, g, v]), Object(a.useEffect)(function() {
						var e = n.listen(function(e) {
							window.snapStore = null
						});
						return function() {
							e()
						}
					}, []), s.a.createElement(a.Suspense, {
						fallback: s.a.createElement("div", null)
					}, s.a.createElement(sr.Helmet, {
						htmlAttributes: {
							lang: i.language
						}
					}, s.a.createElement("html", {
						lang: i.language
					})), s.a.createElement(p.Switch, {
						location: t
					}, s.a.createElement(p.Redirect, {
						exact: !0,
						from: u && "en" !== u ? "/".concat(u) : "/",
						to: u && "en" !== u ? _.a.isConsumerOnlyLanguage(u) ? "/".concat(u, "/consumer") : "/".concat(u, "/business") : _.a.isConsumerOnlyLanguage(u) ? "/consumer" : "/business"
					}), [Ve()([_i, $i]).map(function(e) {
						return Object(j.a)({}, e, {
							props: Object(j.a)({}, e.props, {
								path: e.props.path
							})
						})
					}), Ve()([_i, $i]).map(function(e) {
						return Object(j.a)({}, e, {
							props: Object(j.a)({}, e.props, {
								path: "/:lang(ja|zh-tw|zh-cn|fr|de|es|ko|pt|it)".concat(e.props.path)
							})
						})
					}), Ve()([tr]).map(function(e) {
						return Object(j.a)({}, e, {
							props: Object(j.a)({}, e.props)
						})
					})]))
				}),
				cr = (n(920), n(921), n(922), n(923), document.getElementById("root")),
				ur = window.location.href.indexOf("business/SDK/privacy") > -1;
			cr.hasChildNodes() ? Object(i.hydrate)(s.a.createElement(r.BrowserRouter, null, s.a.createElement(o.LastLocationProvider, null, s.a.createElement(or, null), s.a.createElement(l, null))), cr) : Object(i.render)(s.a.createElement(r.BrowserRouter, null, s.a.createElement(o.LastLocationProvider, null, s.a.createElement(or, null), !ur && s.a.createElement(l, null))), cr), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
				e.unregister()
			})
		}
	},
	[
		[472, 178, 188]
	]
]);
//# sourceMappingURL=main.4554f946.chunk.js.map