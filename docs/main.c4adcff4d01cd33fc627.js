(window.webpackJsonp = window.webpackJsonp || []).push([
	[1],
	{
		0: function(l, n, u) {
			l.exports = u('zUnb');
		},
		crnd: function(l, n) {
			function u(l) {
				return Promise.resolve().then(function() {
					var n = new Error("Cannot find module '" + l + "'");
					throw ((n.code = 'MODULE_NOT_FOUND'), n);
				});
			}
			(u.keys = function() {
				return [];
			}),
				(u.resolve = u),
				(l.exports = u),
				(u.id = 'crnd');
		},
		zUnb: function(l, n, u) {
			'use strict';
			u.r(n);
			var e = function(l, n) {
				return (e =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function(l, n) {
							l.__proto__ = n;
						}) ||
					function(l, n) {
						for (var u in n) n.hasOwnProperty(u) && (l[u] = n[u]);
					})(l, n);
			};
			function t(l, n) {
				function u() {
					this.constructor = l;
				}
				e(l, n), (l.prototype = null === n ? Object.create(n) : ((u.prototype = n.prototype), new u()));
			}
			var r = function() {
				return (r =
					Object.assign ||
					function(l) {
						for (var n, u = 1, e = arguments.length; u < e; u++) for (var t in (n = arguments[u])) Object.prototype.hasOwnProperty.call(n, t) && (l[t] = n[t]);
						return l;
					}).apply(this, arguments);
			};
			function s(l, n, u, e) {
				var t,
					r = arguments.length,
					s = r < 3 ? n : null === e ? (e = Object.getOwnPropertyDescriptor(n, u)) : e;
				if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(l, n, u, e);
				else for (var a = l.length - 1; a >= 0; a--) (t = l[a]) && (s = (r < 3 ? t(s) : r > 3 ? t(n, u, s) : t(n, u)) || s);
				return r > 3 && s && Object.defineProperty(n, u, s), s;
			}
			function a(l, n) {
				if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(l, n);
			}
			function o(l) {
				var n = 'function' == typeof Symbol && l[Symbol.iterator],
					u = 0;
				return n
					? n.call(l)
					: {
							next: function() {
								return l && u >= l.length && (l = void 0), { value: l && l[u++], done: !l };
							}
					  };
			}
			function i(l, n) {
				var u = 'function' == typeof Symbol && l[Symbol.iterator];
				if (!u) return l;
				var e,
					t,
					r = u.call(l),
					s = [];
				try {
					for (; (void 0 === n || n-- > 0) && !(e = r.next()).done; ) s.push(e.value);
				} catch (a) {
					t = { error: a };
				} finally {
					try {
						e && !e.done && (u = r.return) && u.call(r);
					} finally {
						if (t) throw t.error;
					}
				}
				return s;
			}
			function c() {
				for (var l = [], n = 0; n < arguments.length; n++) l = l.concat(i(arguments[n]));
				return l;
			}
			var p =
				Array.isArray ||
				function(l) {
					return l && 'number' == typeof l.length;
				};
			function h(l) {
				return null !== l && 'object' == typeof l;
			}
			function d(l) {
				return 'function' == typeof l;
			}
			function f(l) {
				return (
					Error.call(this),
					(this.message = l
						? l.length +
						  ' errors occurred during unsubscription:\n' +
						  l
								.map(function(l, n) {
									return n + 1 + ') ' + l.toString();
								})
								.join('\n  ')
						: ''),
					(this.name = 'UnsubscriptionError'),
					(this.errors = l),
					this
				);
			}
			f.prototype = Object.create(Error.prototype);
			var g = f,
				m = (function() {
					function l(l) {
						(this.closed = !1), (this._parentOrParents = null), (this._subscriptions = null), l && (this._unsubscribe = l);
					}
					var n;
					return (
						(l.prototype.unsubscribe = function() {
							var n;
							if (!this.closed) {
								var u = this._parentOrParents,
									e = this._unsubscribe,
									t = this._subscriptions;
								if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), u instanceof l)) u.remove(this);
								else if (null !== u) for (var r = 0; r < u.length; ++r) u[r].remove(this);
								if (d(e))
									try {
										e.call(this);
									} catch (o) {
										n = o instanceof g ? b(o.errors) : [o];
									}
								if (p(t)) {
									r = -1;
									for (var s = t.length; ++r < s; ) {
										var a = t[r];
										if (h(a))
											try {
												a.unsubscribe();
											} catch (o) {
												(n = n || []), o instanceof g ? (n = n.concat(b(o.errors))) : n.push(o);
											}
									}
								}
								if (n) throw new g(n);
							}
						}),
						(l.prototype.add = function(n) {
							var u = n;
							switch (typeof n) {
								case 'function':
									u = new l(n);
								case 'object':
									if (u === this || u.closed || 'function' != typeof u.unsubscribe) return u;
									if (this.closed) return u.unsubscribe(), u;
									if (!(u instanceof l)) {
										var e = u;
										(u = new l())._subscriptions = [e];
									}
									break;
								default:
									if (!n) return l.EMPTY;
									throw new Error('unrecognized teardown ' + n + ' added to Subscription.');
							}
							var t = u._parentOrParents;
							if (null === t) u._parentOrParents = this;
							else if (t instanceof l) {
								if (t === this) return u;
								u._parentOrParents = [t, this];
							} else {
								if (-1 !== t.indexOf(this)) return u;
								t.push(this);
							}
							var r = this._subscriptions;
							return null === r ? (this._subscriptions = [u]) : r.push(u), u;
						}),
						(l.prototype.remove = function(l) {
							var n = this._subscriptions;
							if (n) {
								var u = n.indexOf(l);
								-1 !== u && n.splice(u, 1);
							}
						}),
						(l.EMPTY = (((n = new l()).closed = !0), n)),
						l
					);
				})();
			function b(l) {
				return l.reduce(function(l, n) {
					return l.concat(n instanceof g ? n.errors : n);
				}, []);
			}
			var y = !1,
				v = {
					Promise: void 0,
					set useDeprecatedSynchronousErrorHandling(l) {
						y = l;
					},
					get useDeprecatedSynchronousErrorHandling() {
						return y;
					}
				};
			function w(l) {
				setTimeout(function() {
					throw l;
				}, 0);
			}
			var j = {
					closed: !0,
					next: function(l) {},
					error: function(l) {
						if (v.useDeprecatedSynchronousErrorHandling) throw l;
						w(l);
					},
					complete: function() {}
				},
				_ = 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random(),
				x = (function(l) {
					function n(u, e, t) {
						var r = l.call(this) || this;
						switch (((r.syncErrorValue = null), (r.syncErrorThrown = !1), (r.syncErrorThrowable = !1), (r.isStopped = !1), arguments.length)) {
							case 0:
								r.destination = j;
								break;
							case 1:
								if (!u) {
									r.destination = j;
									break;
								}
								if ('object' == typeof u) {
									u instanceof n ? ((r.syncErrorThrowable = u.syncErrorThrowable), (r.destination = u), u.add(r)) : ((r.syncErrorThrowable = !0), (r.destination = new k(r, u)));
									break;
								}
							default:
								(r.syncErrorThrowable = !0), (r.destination = new k(r, u, e, t));
						}
						return r;
					}
					return (
						t(n, l),
						(n.prototype[_] = function() {
							return this;
						}),
						(n.create = function(l, u, e) {
							var t = new n(l, u, e);
							return (t.syncErrorThrowable = !1), t;
						}),
						(n.prototype.next = function(l) {
							this.isStopped || this._next(l);
						}),
						(n.prototype.error = function(l) {
							this.isStopped || ((this.isStopped = !0), this._error(l));
						}),
						(n.prototype.complete = function() {
							this.isStopped || ((this.isStopped = !0), this._complete());
						}),
						(n.prototype.unsubscribe = function() {
							this.closed || ((this.isStopped = !0), l.prototype.unsubscribe.call(this));
						}),
						(n.prototype._next = function(l) {
							this.destination.next(l);
						}),
						(n.prototype._error = function(l) {
							this.destination.error(l), this.unsubscribe();
						}),
						(n.prototype._complete = function() {
							this.destination.complete(), this.unsubscribe();
						}),
						(n.prototype._unsubscribeAndRecycle = function() {
							var l = this._parentOrParents;
							return (this._parentOrParents = null), this.unsubscribe(), (this.closed = !1), (this.isStopped = !1), (this._parentOrParents = l), this;
						}),
						n
					);
				})(m),
				k = (function(l) {
					function n(n, u, e, t) {
						var r,
							s = l.call(this) || this;
						s._parentSubscriber = n;
						var a = s;
						return (
							d(u)
								? (r = u)
								: u &&
								  ((r = u.next),
								  (e = u.error),
								  (t = u.complete),
								  u !== j && (d((a = Object.create(u)).unsubscribe) && s.add(a.unsubscribe.bind(a)), (a.unsubscribe = s.unsubscribe.bind(s)))),
							(s._context = a),
							(s._next = r),
							(s._error = e),
							(s._complete = t),
							s
						);
					}
					return (
						t(n, l),
						(n.prototype.next = function(l) {
							if (!this.isStopped && this._next) {
								var n = this._parentSubscriber;
								v.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? this.__tryOrSetError(n, this._next, l) && this.unsubscribe() : this.__tryOrUnsub(this._next, l);
							}
						}),
						(n.prototype.error = function(l) {
							if (!this.isStopped) {
								var n = this._parentSubscriber,
									u = v.useDeprecatedSynchronousErrorHandling;
								if (this._error) u && n.syncErrorThrowable ? (this.__tryOrSetError(n, this._error, l), this.unsubscribe()) : (this.__tryOrUnsub(this._error, l), this.unsubscribe());
								else if (n.syncErrorThrowable) u ? ((n.syncErrorValue = l), (n.syncErrorThrown = !0)) : w(l), this.unsubscribe();
								else {
									if ((this.unsubscribe(), u)) throw l;
									w(l);
								}
							}
						}),
						(n.prototype.complete = function() {
							var l = this;
							if (!this.isStopped) {
								var n = this._parentSubscriber;
								if (this._complete) {
									var u = function() {
										return l._complete.call(l._context);
									};
									v.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? (this.__tryOrSetError(n, u), this.unsubscribe()) : (this.__tryOrUnsub(u), this.unsubscribe());
								} else this.unsubscribe();
							}
						}),
						(n.prototype.__tryOrUnsub = function(l, n) {
							try {
								l.call(this._context, n);
							} catch (u) {
								if ((this.unsubscribe(), v.useDeprecatedSynchronousErrorHandling)) throw u;
								w(u);
							}
						}),
						(n.prototype.__tryOrSetError = function(l, n, u) {
							if (!v.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
							try {
								n.call(this._context, u);
							} catch (e) {
								return v.useDeprecatedSynchronousErrorHandling ? ((l.syncErrorValue = e), (l.syncErrorThrown = !0), !0) : (w(e), !0);
							}
							return !1;
						}),
						(n.prototype._unsubscribe = function() {
							var l = this._parentSubscriber;
							(this._context = null), (this._parentSubscriber = null), l.unsubscribe();
						}),
						n
					);
				})(x),
				C = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
			function S() {}
			function E() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				return P(l);
			}
			function P(l) {
				return l
					? 1 === l.length
						? l[0]
						: function(n) {
								return l.reduce(function(l, n) {
									return n(l);
								}, n);
						  }
					: S;
			}
			var I = (function() {
				function l(l) {
					(this._isScalar = !1), l && (this._subscribe = l);
				}
				return (
					(l.prototype.lift = function(n) {
						var u = new l();
						return (u.source = this), (u.operator = n), u;
					}),
					(l.prototype.subscribe = function(l, n, u) {
						var e = this.operator,
							t = (function(l, n, u) {
								if (l) {
									if (l instanceof x) return l;
									if (l[_]) return l[_]();
								}
								return l || n || u ? new x(l, n, u) : new x(j);
							})(l, n, u);
						if (
							(t.add(e ? e.call(t, this.source) : this.source || (v.useDeprecatedSynchronousErrorHandling && !t.syncErrorThrowable) ? this._subscribe(t) : this._trySubscribe(t)),
							v.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable && ((t.syncErrorThrowable = !1), t.syncErrorThrown))
						)
							throw t.syncErrorValue;
						return t;
					}),
					(l.prototype._trySubscribe = function(l) {
						try {
							return this._subscribe(l);
						} catch (n) {
							v.useDeprecatedSynchronousErrorHandling && ((l.syncErrorThrown = !0), (l.syncErrorValue = n)),
								(function(l) {
									for (; l; ) {
										var n = l.destination;
										if (l.closed || l.isStopped) return !1;
										l = n && n instanceof x ? n : null;
									}
									return !0;
								})(l)
									? l.error(n)
									: console.warn(n);
						}
					}),
					(l.prototype.forEach = function(l, n) {
						var u = this;
						return new (n = O(n))(function(n, e) {
							var t;
							t = u.subscribe(
								function(n) {
									try {
										l(n);
									} catch (u) {
										e(u), t && t.unsubscribe();
									}
								},
								e,
								n
							);
						});
					}),
					(l.prototype._subscribe = function(l) {
						var n = this.source;
						return n && n.subscribe(l);
					}),
					(l.prototype[C] = function() {
						return this;
					}),
					(l.prototype.pipe = function() {
						for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
						return 0 === l.length ? this : P(l)(this);
					}),
					(l.prototype.toPromise = function(l) {
						var n = this;
						return new (l = O(l))(function(l, u) {
							var e;
							n.subscribe(
								function(l) {
									return (e = l);
								},
								function(l) {
									return u(l);
								},
								function() {
									return l(e);
								}
							);
						});
					}),
					(l.create = function(n) {
						return new l(n);
					}),
					l
				);
			})();
			function O(l) {
				if ((l || (l = v.Promise || Promise), !l)) throw new Error('no Promise impl found');
				return l;
			}
			function T() {
				return Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this;
			}
			T.prototype = Object.create(Error.prototype);
			var M = T,
				R = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						return (e.subject = n), (e.subscriber = u), (e.closed = !1), e;
					}
					return (
						t(n, l),
						(n.prototype.unsubscribe = function() {
							if (!this.closed) {
								this.closed = !0;
								var l = this.subject,
									n = l.observers;
								if (((this.subject = null), n && 0 !== n.length && !l.isStopped && !l.closed)) {
									var u = n.indexOf(this.subscriber);
									-1 !== u && n.splice(u, 1);
								}
							}
						}),
						n
					);
				})(m),
				A = (function(l) {
					function n(n) {
						var u = l.call(this, n) || this;
						return (u.destination = n), u;
					}
					return t(n, l), n;
				})(x),
				N = (function(l) {
					function n() {
						var n = l.call(this) || this;
						return (n.observers = []), (n.closed = !1), (n.isStopped = !1), (n.hasError = !1), (n.thrownError = null), n;
					}
					return (
						t(n, l),
						(n.prototype[_] = function() {
							return new A(this);
						}),
						(n.prototype.lift = function(l) {
							var n = new D(this, this);
							return (n.operator = l), n;
						}),
						(n.prototype.next = function(l) {
							if (this.closed) throw new M();
							if (!this.isStopped) for (var n = this.observers, u = n.length, e = n.slice(), t = 0; t < u; t++) e[t].next(l);
						}),
						(n.prototype.error = function(l) {
							if (this.closed) throw new M();
							(this.hasError = !0), (this.thrownError = l), (this.isStopped = !0);
							for (var n = this.observers, u = n.length, e = n.slice(), t = 0; t < u; t++) e[t].error(l);
							this.observers.length = 0;
						}),
						(n.prototype.complete = function() {
							if (this.closed) throw new M();
							this.isStopped = !0;
							for (var l = this.observers, n = l.length, u = l.slice(), e = 0; e < n; e++) u[e].complete();
							this.observers.length = 0;
						}),
						(n.prototype.unsubscribe = function() {
							(this.isStopped = !0), (this.closed = !0), (this.observers = null);
						}),
						(n.prototype._trySubscribe = function(n) {
							if (this.closed) throw new M();
							return l.prototype._trySubscribe.call(this, n);
						}),
						(n.prototype._subscribe = function(l) {
							if (this.closed) throw new M();
							return this.hasError ? (l.error(this.thrownError), m.EMPTY) : this.isStopped ? (l.complete(), m.EMPTY) : (this.observers.push(l), new R(this, l));
						}),
						(n.prototype.asObservable = function() {
							var l = new I();
							return (l.source = this), l;
						}),
						(n.create = function(l, n) {
							return new D(l, n);
						}),
						n
					);
				})(I),
				D = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						return (e.destination = n), (e.source = u), e;
					}
					return (
						t(n, l),
						(n.prototype.next = function(l) {
							var n = this.destination;
							n && n.next && n.next(l);
						}),
						(n.prototype.error = function(l) {
							var n = this.destination;
							n && n.error && this.destination.error(l);
						}),
						(n.prototype.complete = function() {
							var l = this.destination;
							l && l.complete && this.destination.complete();
						}),
						(n.prototype._subscribe = function(l) {
							return this.source ? this.source.subscribe(l) : m.EMPTY;
						}),
						n
					);
				})(N);
			function U(l) {
				return l && 'function' == typeof l.schedule;
			}
			var L = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t.parent = n), (t.outerValue = u), (t.outerIndex = e), (t.index = 0), t;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							this.parent.notifyNext(this.outerValue, l, this.outerIndex, this.index++, this);
						}),
						(n.prototype._error = function(l) {
							this.parent.notifyError(l, this), this.unsubscribe();
						}),
						(n.prototype._complete = function() {
							this.parent.notifyComplete(this), this.unsubscribe();
						}),
						n
					);
				})(x),
				V = function(l) {
					return function(n) {
						for (var u = 0, e = l.length; u < e && !n.closed; u++) n.next(l[u]);
						n.complete();
					};
				};
			function F() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			}
			var z = F(),
				H = function(l) {
					return l && 'number' == typeof l.length && 'function' != typeof l;
				};
			function B(l) {
				return !!l && 'function' != typeof l.subscribe && 'function' == typeof l.then;
			}
			var q = function(l) {
				if (l && 'function' == typeof l[C])
					return (
						(e = l),
						function(l) {
							var n = e[C]();
							if ('function' != typeof n.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
							return n.subscribe(l);
						}
					);
				if (H(l)) return V(l);
				if (B(l))
					return (
						(u = l),
						function(l) {
							return (
								u
									.then(
										function(n) {
											l.closed || (l.next(n), l.complete());
										},
										function(n) {
											return l.error(n);
										}
									)
									.then(null, w),
								l
							);
						}
					);
				if (l && 'function' == typeof l[z])
					return (
						(n = l),
						function(l) {
							for (var u = n[z](); ; ) {
								var e = u.next();
								if (e.done) {
									l.complete();
									break;
								}
								if ((l.next(e.value), l.closed)) break;
							}
							return (
								'function' == typeof u.return &&
									l.add(function() {
										u.return && u.return();
									}),
								l
							);
						}
					);
				var n,
					u,
					e,
					t = h(l) ? 'an invalid object' : "'" + l + "'";
				throw new TypeError('You provided ' + t + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.');
			};
			function G(l, n, u, e, t) {
				if ((void 0 === t && (t = new L(l, u, e)), !t.closed)) return n instanceof I ? n.subscribe(t) : q(n)(t);
			}
			var Z = (function(l) {
				function n() {
					return (null !== l && l.apply(this, arguments)) || this;
				}
				return (
					t(n, l),
					(n.prototype.notifyNext = function(l, n, u, e, t) {
						this.destination.next(n);
					}),
					(n.prototype.notifyError = function(l, n) {
						this.destination.error(l);
					}),
					(n.prototype.notifyComplete = function(l) {
						this.destination.complete();
					}),
					n
				);
			})(x);
			function Q(l, n) {
				return function(u) {
					if ('function' != typeof l) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
					return u.lift(new W(l, n));
				};
			}
			var W = (function() {
					function l(l, n) {
						(this.project = l), (this.thisArg = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new K(l, this.project, this.thisArg));
						}),
						l
					);
				})(),
				K = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						return (t.project = u), (t.count = 0), (t.thisArg = e || t), t;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							var n;
							try {
								n = this.project.call(this.thisArg, l, this.count++);
							} catch (u) {
								return void this.destination.error(u);
							}
							this.destination.next(n);
						}),
						n
					);
				})(x);
			function Y(l, n) {
				return new I(function(u) {
					var e = new m(),
						t = 0;
					return (
						e.add(
							n.schedule(function() {
								t !== l.length ? (u.next(l[t++]), u.closed || e.add(this.schedule())) : u.complete();
							})
						),
						e
					);
				});
			}
			function J(l, n) {
				return n
					? (function(l, n) {
							if (null != l) {
								if (
									(function(l) {
										return l && 'function' == typeof l[C];
									})(l)
								)
									return (function(l, n) {
										return new I(function(u) {
											var e = new m();
											return (
												e.add(
													n.schedule(function() {
														var t = l[C]();
														e.add(
															t.subscribe({
																next: function(l) {
																	e.add(
																		n.schedule(function() {
																			return u.next(l);
																		})
																	);
																},
																error: function(l) {
																	e.add(
																		n.schedule(function() {
																			return u.error(l);
																		})
																	);
																},
																complete: function() {
																	e.add(
																		n.schedule(function() {
																			return u.complete();
																		})
																	);
																}
															})
														);
													})
												),
												e
											);
										});
									})(l, n);
								if (B(l))
									return (function(l, n) {
										return new I(function(u) {
											var e = new m();
											return (
												e.add(
													n.schedule(function() {
														return l.then(
															function(l) {
																e.add(
																	n.schedule(function() {
																		u.next(l),
																			e.add(
																				n.schedule(function() {
																					return u.complete();
																				})
																			);
																	})
																);
															},
															function(l) {
																e.add(
																	n.schedule(function() {
																		return u.error(l);
																	})
																);
															}
														);
													})
												),
												e
											);
										});
									})(l, n);
								if (H(l)) return Y(l, n);
								if (
									(function(l) {
										return l && 'function' == typeof l[z];
									})(l) ||
									'string' == typeof l
								)
									return (function(l, n) {
										if (!l) throw new Error('Iterable cannot be null');
										return new I(function(u) {
											var e,
												t = new m();
											return (
												t.add(function() {
													e && 'function' == typeof e.return && e.return();
												}),
												t.add(
													n.schedule(function() {
														(e = l[z]()),
															t.add(
																n.schedule(function() {
																	if (!u.closed) {
																		var l, n;
																		try {
																			var t = e.next();
																			(l = t.value), (n = t.done);
																		} catch (r) {
																			return void u.error(r);
																		}
																		n ? u.complete() : (u.next(l), this.schedule());
																	}
																})
															);
													})
												),
												t
											);
										});
									})(l, n);
							}
							throw new TypeError(((null !== l && typeof l) || l) + ' is not observable');
					  })(l, n)
					: l instanceof I
					? l
					: new I(q(l));
			}
			function $(l, n, u) {
				return (
					void 0 === u && (u = Number.POSITIVE_INFINITY),
					'function' == typeof n
						? function(e) {
								return e.pipe(
									$(function(u, e) {
										return J(l(u, e)).pipe(
											Q(function(l, t) {
												return n(u, l, e, t);
											})
										);
									}, u)
								);
						  }
						: ('number' == typeof n && (u = n),
						  function(n) {
								return n.lift(new X(l, u));
						  })
				);
			}
			var X = (function() {
					function l(l, n) {
						void 0 === n && (n = Number.POSITIVE_INFINITY), (this.project = l), (this.concurrent = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new ll(l, this.project, this.concurrent));
						}),
						l
					);
				})(),
				ll = (function(l) {
					function n(n, u, e) {
						void 0 === e && (e = Number.POSITIVE_INFINITY);
						var t = l.call(this, n) || this;
						return (t.project = u), (t.concurrent = e), (t.hasCompleted = !1), (t.buffer = []), (t.active = 0), (t.index = 0), t;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							this.active < this.concurrent ? this._tryNext(l) : this.buffer.push(l);
						}),
						(n.prototype._tryNext = function(l) {
							var n,
								u = this.index++;
							try {
								n = this.project(l, u);
							} catch (e) {
								return void this.destination.error(e);
							}
							this.active++, this._innerSub(n, l, u);
						}),
						(n.prototype._innerSub = function(l, n, u) {
							var e = new L(this, void 0, void 0);
							this.destination.add(e), G(this, l, n, u, e);
						}),
						(n.prototype._complete = function() {
							(this.hasCompleted = !0), 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
						}),
						(n.prototype.notifyNext = function(l, n, u, e, t) {
							this.destination.next(n);
						}),
						(n.prototype.notifyComplete = function(l) {
							var n = this.buffer;
							this.remove(l), this.active--, n.length > 0 ? this._next(n.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
						}),
						n
					);
				})(Z);
			function nl(l) {
				return l;
			}
			function ul(l) {
				return void 0 === l && (l = Number.POSITIVE_INFINITY), $(nl, l);
			}
			function el(l, n) {
				return n ? Y(l, n) : new I(V(l));
			}
			function tl() {
				return function(l) {
					return l.lift(new rl(l));
				};
			}
			var rl = (function() {
					function l(l) {
						this.connectable = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							var u = this.connectable;
							u._refCount++;
							var e = new sl(l, u),
								t = n.subscribe(e);
							return e.closed || (e.connection = u.connect()), t;
						}),
						l
					);
				})(),
				sl = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.connectable = u), e;
					}
					return (
						t(n, l),
						(n.prototype._unsubscribe = function() {
							var l = this.connectable;
							if (l) {
								this.connectable = null;
								var n = l._refCount;
								if (n <= 0) this.connection = null;
								else if (((l._refCount = n - 1), n > 1)) this.connection = null;
								else {
									var u = this.connection,
										e = l._connection;
									(this.connection = null), !e || (u && e !== u) || e.unsubscribe();
								}
							} else this.connection = null;
						}),
						n
					);
				})(x),
				al = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						return (e.source = n), (e.subjectFactory = u), (e._refCount = 0), (e._isComplete = !1), e;
					}
					return (
						t(n, l),
						(n.prototype._subscribe = function(l) {
							return this.getSubject().subscribe(l);
						}),
						(n.prototype.getSubject = function() {
							var l = this._subject;
							return (l && !l.isStopped) || (this._subject = this.subjectFactory()), this._subject;
						}),
						(n.prototype.connect = function() {
							var l = this._connection;
							return (
								l ||
									((this._isComplete = !1),
									(l = this._connection = new m()).add(this.source.subscribe(new il(this.getSubject(), this))),
									l.closed && ((this._connection = null), (l = m.EMPTY))),
								l
							);
						}),
						(n.prototype.refCount = function() {
							return tl()(this);
						}),
						n
					);
				})(I).prototype,
				ol = {
					operator: { value: null },
					_refCount: { value: 0, writable: !0 },
					_subject: { value: null, writable: !0 },
					_connection: { value: null, writable: !0 },
					_subscribe: { value: al._subscribe },
					_isComplete: { value: al._isComplete, writable: !0 },
					getSubject: { value: al.getSubject },
					connect: { value: al.connect },
					refCount: { value: al.refCount }
				},
				il = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.connectable = u), e;
					}
					return (
						t(n, l),
						(n.prototype._error = function(n) {
							this._unsubscribe(), l.prototype._error.call(this, n);
						}),
						(n.prototype._complete = function() {
							(this.connectable._isComplete = !0), this._unsubscribe(), l.prototype._complete.call(this);
						}),
						(n.prototype._unsubscribe = function() {
							var l = this.connectable;
							if (l) {
								this.connectable = null;
								var n = l._connection;
								(l._refCount = 0), (l._subject = null), (l._connection = null), n && n.unsubscribe();
							}
						}),
						n
					);
				})(A);
			function cl() {
				return new N();
			}
			function pl(l) {
				for (var n in l) if (l[n] === pl) return n;
				throw Error('Could not find renamed property on target object.');
			}
			var hl = pl({ ngInjectableDef: pl });
			function dl(l) {
				return { providedIn: l.providedIn || null, factory: l.factory, value: void 0 };
			}
			function fl(l) {
				return l && l.hasOwnProperty(hl) ? l[hl] : null;
			}
			var gl = (function() {
					function l(l, n) {
						(this._desc = l), (this.ngMetadataName = 'InjectionToken'), (this.ngInjectableDef = void 0 !== n ? dl({ providedIn: n.providedIn || 'root', factory: n.factory }) : void 0);
					}
					return (
						(l.prototype.toString = function() {
							return 'InjectionToken ' + this._desc;
						}),
						l
					);
				})(),
				ml = '__parameters__';
			function bl(l, n, u) {
				var e = (function(l) {
					return function() {
						for (var n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
						if (l) {
							var e = l.apply(void 0, c(n));
							for (var t in e) this[t] = e[t];
						}
					};
				})(n);
				function t() {
					for (var l, n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
					if (this instanceof t) return e.apply(this, n), this;
					var r = new ((l = t).bind.apply(l, c([void 0], n)))();
					return (s.annotation = r), s;
					function s(l, n, u) {
						for (var e = l.hasOwnProperty(ml) ? l[ml] : Object.defineProperty(l, ml, { value: [] })[ml]; e.length <= u; ) e.push(null);
						return (e[u] = e[u] || []).push(r), l;
					}
				}
				return u && (t.prototype = Object.create(u.prototype)), (t.prototype.ngMetadataName = l), (t.annotationCls = t), t;
			}
			var yl = new gl('AnalyzeForEntryComponents'),
				vl = 'undefined' != typeof window && window,
				wl = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
				jl = ('undefined' != typeof global && global) || vl || wl,
				_l = Promise.resolve(0),
				xl = null;
			function kl() {
				if (!xl) {
					var l = jl.Symbol;
					if (l && l.iterator) xl = l.iterator;
					else
						for (var n = Object.getOwnPropertyNames(Map.prototype), u = 0; u < n.length; ++u) {
							var e = n[u];
							'entries' !== e && 'size' !== e && Map.prototype[e] === Map.prototype.entries && (xl = e);
						}
				}
				return xl;
			}
			function Cl(l) {
				'undefined' == typeof Zone
					? _l.then(function() {
							l && l.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', l);
			}
			function Sl(l, n) {
				return l === n || ('number' == typeof l && 'number' == typeof n && isNaN(l) && isNaN(n));
			}
			function El(l) {
				if ('string' == typeof l) return l;
				if (l instanceof Array) return '[' + l.map(El).join(', ') + ']';
				if (null == l) return '' + l;
				if (l.overriddenName) return '' + l.overriddenName;
				if (l.name) return '' + l.name;
				var n = l.toString();
				if (null == n) return '' + n;
				var u = n.indexOf('\n');
				return -1 === u ? n : n.substring(0, u);
			}
			var Pl = pl({ __forward_ref__: pl });
			function Il(l) {
				return (
					(l.__forward_ref__ = Il),
					(l.toString = function() {
						return El(this());
					}),
					l
				);
			}
			function Ol(l) {
				var n = l;
				return 'function' == typeof n && n.hasOwnProperty(Pl) && n.__forward_ref__ === Il ? n() : l;
			}
			var Tl,
				Ml = (function(l) {
					return (l[(l.Emulated = 0)] = 'Emulated'), (l[(l.Native = 1)] = 'Native'), (l[(l.None = 2)] = 'None'), (l[(l.ShadowDom = 3)] = 'ShadowDom'), l;
				})({}),
				Rl = bl('Inject', function(l) {
					return { token: l };
				}),
				Al = bl('Optional'),
				Nl = bl('Self'),
				Dl = bl('SkipSelf'),
				Ul = (function(l) {
					return (l[(l.Default = 0)] = 'Default'), (l[(l.Host = 1)] = 'Host'), (l[(l.Self = 2)] = 'Self'), (l[(l.SkipSelf = 4)] = 'SkipSelf'), (l[(l.Optional = 8)] = 'Optional'), l;
				})({}),
				Ll = void 0;
			function Vl(l) {
				var n = Ll;
				return (Ll = l), n;
			}
			function Fl(l, n) {
				return (
					void 0 === n && (n = Ul.Default),
					(Tl ||
						function(l, n) {
							if ((void 0 === n && (n = Ul.Default), void 0 === Ll)) throw new Error('inject() must be called from an injection context');
							return null === Ll
								? (function(l, n, u) {
										var e = fl(l);
										if (e && 'root' == e.providedIn) return void 0 === e.value ? (e.value = e.factory()) : e.value;
										if (u & Ul.Optional) return null;
										throw new Error('Injector: NOT_FOUND [' + El(l) + ']');
								  })(l, 0, n)
								: Ll.get(l, n & Ul.Optional ? null : void 0, n);
						})(l, n)
				);
			}
			var zl = /([A-Z])/g;
			function Hl(l) {
				try {
					return null != l ? l.toString().slice(0, 30) : l;
				} catch (n) {
					return '[ERROR] Exception while trying to serialize the value';
				}
			}
			function Bl(l, n) {
				var u = Zl(l),
					e = Zl(n);
				return u && e
					? (function(l, n, u) {
							for (var e = l[kl()](), t = n[kl()](); ; ) {
								var r = e.next(),
									s = t.next();
								if (r.done && s.done) return !0;
								if (r.done || s.done) return !1;
								if (!u(r.value, s.value)) return !1;
							}
					  })(l, n, Bl)
					: !(u || !l || ('object' != typeof l && 'function' != typeof l) || e || !n || ('object' != typeof n && 'function' != typeof n)) || Sl(l, n);
			}
			var ql = (function() {
					function l(l) {
						this.wrapped = l;
					}
					return (
						(l.wrap = function(n) {
							return new l(n);
						}),
						(l.unwrap = function(n) {
							return l.isWrapped(n) ? n.wrapped : n;
						}),
						(l.isWrapped = function(n) {
							return n instanceof l;
						}),
						l
					);
				})(),
				Gl = (function() {
					function l(l, n, u) {
						(this.previousValue = l), (this.currentValue = n), (this.firstChange = u);
					}
					return (
						(l.prototype.isFirstChange = function() {
							return this.firstChange;
						}),
						l
					);
				})();
			function Zl(l) {
				return !!Ql(l) && (Array.isArray(l) || (!(l instanceof Map) && kl() in l));
			}
			function Ql(l) {
				return null !== l && ('function' == typeof l || 'object' == typeof l);
			}
			function Wl() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
			}
			var Kl = '__source',
				Yl = new Object(),
				Jl = new gl('INJECTOR'),
				$l = (function() {
					function l() {}
					return (
						(l.prototype.get = function(l, n) {
							if ((void 0 === n && (n = Yl), n === Yl)) throw new Error('NullInjectorError: No provider for ' + El(l) + '!');
							return n;
						}),
						l
					);
				})(),
				Xl = (function() {
					function l() {}
					return (
						(l.create = function(l, n) {
							return Array.isArray(l) ? new cn(l, n) : new cn(l.providers, l.parent, l.name || null);
						}),
						(l.THROW_IF_NOT_FOUND = Yl),
						(l.NULL = new $l()),
						(l.ngInjectableDef = dl({
							providedIn: 'any',
							factory: function() {
								return Fl(Jl);
							}
						})),
						(l.__NG_ELEMENT_ID__ = function() {
							return ln();
						}),
						l
					);
				})(),
				ln = Wl,
				nn = function(l) {
					return l;
				},
				un = [],
				en = nn,
				tn = function() {
					return Array.prototype.slice.call(arguments);
				},
				rn = pl({ provide: String, useValue: pl }),
				sn = Xl.NULL,
				an = /\n/gm,
				on = '\u0275',
				cn = (function() {
					function l(l, n, u) {
						void 0 === n && (n = sn), void 0 === u && (u = null), (this.parent = n), (this.source = u);
						var e = (this._records = new Map());
						e.set(Xl, { token: Xl, fn: nn, deps: un, value: this, useNew: !1 }),
							e.set(Jl, { token: Jl, fn: nn, deps: un, value: this, useNew: !1 }),
							(function l(n, u) {
								if (u)
									if ((u = Ol(u)) instanceof Array) for (var e = 0; e < u.length; e++) l(n, u[e]);
									else {
										if ('function' == typeof u) throw dn('Function/Class not supported', u);
										if (!u || 'object' != typeof u || !u.provide) throw dn('Unexpected provider', u);
										var t = Ol(u.provide),
											r = (function(l) {
												var n = (function(l) {
														var n = un,
															u = l.deps;
														if (u && u.length) {
															n = [];
															for (var e = 0; e < u.length; e++) {
																var t = 6;
																if ((o = Ol(u[e])) instanceof Array)
																	for (var r = 0, s = o; r < s.length; r++) {
																		var a = s[r];
																		a instanceof Al || a == Al
																			? (t |= 1)
																			: a instanceof Dl || a == Dl
																			? (t &= -3)
																			: a instanceof Nl || a == Nl
																			? (t &= -5)
																			: (o = a instanceof Rl ? a.token : Ol(a));
																	}
																n.push({ token: o, options: t });
															}
														} else if (l.useExisting) {
															var o;
															n = [{ token: (o = Ol(l.useExisting)), options: 6 }];
														} else if (!(u || rn in l)) throw dn("'deps' required", l);
														return n;
													})(l),
													u = nn,
													e = un,
													t = !1,
													r = Ol(l.provide);
												if (rn in l) e = l.useValue;
												else if (l.useFactory) u = l.useFactory;
												else if (l.useExisting);
												else if (l.useClass) (t = !0), (u = Ol(l.useClass));
												else {
													if ('function' != typeof r) throw dn('StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable', l);
													(t = !0), (u = r);
												}
												return { deps: n, fn: u, useNew: t, value: e };
											})(u);
										if (!0 === u.multi) {
											var s = n.get(t);
											if (s) {
												if (s.fn !== tn) throw pn(t);
											} else n.set(t, (s = { token: u.provide, deps: [], useNew: !1, fn: tn, value: un }));
											s.deps.push({ token: (t = u), options: 6 });
										}
										var a = n.get(t);
										if (a && a.fn == tn) throw pn(t);
										n.set(t, r);
									}
							})(e, l);
					}
					return (
						(l.prototype.get = function(l, n, u) {
							void 0 === u && (u = Ul.Default);
							var e = this._records.get(l);
							try {
								return (function l(n, u, e, t, r, s) {
									try {
										return (function(n, u, e, t, r, s) {
											var a, o;
											if (!u || s & Ul.SkipSelf) s & Ul.Self || (o = t.get(n, r, Ul.Default));
											else {
												if ((o = u.value) == en) throw Error(on + 'Circular dependency');
												if (o === un) {
													u.value = en;
													var i = u.useNew,
														p = u.fn,
														h = u.deps,
														d = un;
													if (h.length) {
														d = [];
														for (var f = 0; f < h.length; f++) {
															var g = h[f],
																m = g.options,
																b = 2 & m ? e.get(g.token) : void 0;
															d.push(l(g.token, b, e, b || 4 & m ? t : sn, 1 & m ? null : Xl.THROW_IF_NOT_FOUND, Ul.Default));
														}
													}
													u.value = o = i ? new ((a = p).bind.apply(a, c([void 0], d)))() : p.apply(void 0, d);
												}
											}
											return o;
										})(n, u, e, t, r, s);
									} catch (a) {
										throw (a instanceof Error || (a = new Error(a)), (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(n), u && u.value == en && (u.value = un), a);
									}
								})(l, e, this._records, this.parent, n, u);
							} catch (r) {
								var t = r.ngTempTokenPath;
								throw (l[Kl] && t.unshift(l[Kl]), (r.message = hn('\n' + r.message, t, this.source)), (r.ngTokenPath = t), (r.ngTempTokenPath = null), r);
							}
						}),
						(l.prototype.toString = function() {
							var l = [];
							return (
								this._records.forEach(function(n, u) {
									return l.push(El(u));
								}),
								'StaticInjector[' + l.join(', ') + ']'
							);
						}),
						l
					);
				})();
			function pn(l) {
				return dn('Cannot mix multi providers and regular providers', l);
			}
			function hn(l, n, u) {
				void 0 === u && (u = null), (l = l && '\n' === l.charAt(0) && l.charAt(1) == on ? l.substr(2) : l);
				var e = El(n);
				if (n instanceof Array) e = n.map(El).join(' -> ');
				else if ('object' == typeof n) {
					var t = [];
					for (var r in n)
						if (n.hasOwnProperty(r)) {
							var s = n[r];
							t.push(r + ':' + ('string' == typeof s ? JSON.stringify(s) : El(s)));
						}
					e = '{' + t.join(', ') + '}';
				}
				return 'StaticInjectorError' + (u ? '(' + u + ')' : '') + '[' + e + ']: ' + l.replace(an, '\n  ');
			}
			function dn(l, n) {
				return new Error(hn(l, n));
			}
			var fn = new gl('The presence of this token marks an injector as being the root injector.'),
				gn = (function() {
					return function() {};
				})(),
				mn = (function() {
					return function() {};
				})();
			function bn(l) {
				var n = Error('No component factory found for ' + El(l) + '. Did you add it to @NgModule.entryComponents?');
				return (n[yn] = l), n;
			}
			var yn = 'ngComponent',
				vn = (function() {
					function l() {}
					return (
						(l.prototype.resolveComponentFactory = function(l) {
							throw bn(l);
						}),
						l
					);
				})(),
				wn = (function() {
					function l() {}
					return (l.NULL = new vn()), l;
				})(),
				jn = (function() {
					function l(l, n, u) {
						(this._parent = n), (this._ngModule = u), (this._factories = new Map());
						for (var e = 0; e < l.length; e++) {
							var t = l[e];
							this._factories.set(t.componentType, t);
						}
					}
					return (
						(l.prototype.resolveComponentFactory = function(l) {
							var n = this._factories.get(l);
							if ((!n && this._parent && (n = this._parent.resolveComponentFactory(l)), !n)) throw bn(l);
							return new _n(n, this._ngModule);
						}),
						l
					);
				})(),
				_n = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						return (
							(e.factory = n),
							(e.ngModule = u),
							(e.selector = n.selector),
							(e.componentType = n.componentType),
							(e.ngContentSelectors = n.ngContentSelectors),
							(e.inputs = n.inputs),
							(e.outputs = n.outputs),
							e
						);
					}
					return (
						t(n, l),
						(n.prototype.create = function(l, n, u, e) {
							return this.factory.create(l, n, u, e || this.ngModule);
						}),
						n
					);
				})(mn),
				xn = (function() {
					return function() {};
				})(),
				kn = (function() {
					return function() {};
				})(),
				Cn = (function() {
					function l(l) {
						this.nativeElement = l;
					}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Sn(l);
						}),
						l
					);
				})(),
				Sn = Wl,
				En = (function() {
					return function() {};
				})(),
				Pn = (function() {
					return function() {};
				})(),
				In = (function(l) {
					return (l[(l.Important = 1)] = 'Important'), (l[(l.DashCase = 2)] = 'DashCase'), l;
				})({}),
				On = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Tn();
						}),
						l
					);
				})(),
				Tn = Wl,
				Mn = (function(l) {
					return (
						(l[(l.NONE = 0)] = 'NONE'),
						(l[(l.HTML = 1)] = 'HTML'),
						(l[(l.STYLE = 2)] = 'STYLE'),
						(l[(l.SCRIPT = 3)] = 'SCRIPT'),
						(l[(l.URL = 4)] = 'URL'),
						(l[(l.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
						l
					);
				})({}),
				Rn = (function() {
					return function() {};
				})(),
				An = new ((function() {
					return function(l) {
						(this.full = l),
							(this.major = l.split('.')[0]),
							(this.minor = l.split('.')[1]),
							(this.patch = l
								.split('.')
								.slice(2)
								.join('.'));
					};
				})())('7.2.15'),
				Nn = !0,
				Dn = !1;
			function Un() {
				return (Dn = !0), Nn;
			}
			var Ln = (function() {
					function l(l) {
						if (
							((this.defaultDoc = l),
							(this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
							(this.inertBodyElement = this.inertDocument.body),
							null == this.inertBodyElement)
						) {
							var n = this.inertDocument.createElement('html');
							this.inertDocument.appendChild(n), (this.inertBodyElement = this.inertDocument.createElement('body')), n.appendChild(this.inertBodyElement);
						}
						(this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>'),
							!this.inertBodyElement.querySelector || this.inertBodyElement.querySelector('svg')
								? ((this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
								  (this.getInertBodyElement =
										this.inertBodyElement.querySelector &&
										this.inertBodyElement.querySelector('svg img') &&
										(function() {
											try {
												return !!window.DOMParser;
											} catch (l) {
												return !1;
											}
										})()
											? this.getInertBodyElement_DOMParser
											: this.getInertBodyElement_InertDocument))
								: (this.getInertBodyElement = this.getInertBodyElement_XHR);
					}
					return (
						(l.prototype.getInertBodyElement_XHR = function(l) {
							l = '<body><remove></remove>' + l + '</body>';
							try {
								l = encodeURI(l);
							} catch (e) {
								return null;
							}
							var n = new XMLHttpRequest();
							(n.responseType = 'document'), n.open('GET', 'data:text/html;charset=utf-8,' + l, !1), n.send(void 0);
							var u = n.response.body;
							return u.removeChild(u.firstChild), u;
						}),
						(l.prototype.getInertBodyElement_DOMParser = function(l) {
							l = '<body><remove></remove>' + l + '</body>';
							try {
								var n = new window.DOMParser().parseFromString(l, 'text/html').body;
								return n.removeChild(n.firstChild), n;
							} catch (u) {
								return null;
							}
						}),
						(l.prototype.getInertBodyElement_InertDocument = function(l) {
							var n = this.inertDocument.createElement('template');
							return 'content' in n
								? ((n.innerHTML = l), n)
								: ((this.inertBodyElement.innerHTML = l), this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement);
						}),
						(l.prototype.stripCustomNsAttrs = function(l) {
							for (var n = l.attributes, u = n.length - 1; 0 < u; u--) {
								var e = n.item(u).name;
								('xmlns:ns1' !== e && 0 !== e.indexOf('ns1:')) || l.removeAttribute(e);
							}
							for (var t = l.firstChild; t; ) t.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(t), (t = t.nextSibling);
						}),
						l
					);
				})(),
				Vn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				Fn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function zn(l) {
				return (l = String(l)).match(Vn) || l.match(Fn) ? l : (Un() && console.warn('WARNING: sanitizing unsafe URL value ' + l + ' (see http://g.co/ng/security#xss)'), 'unsafe:' + l);
			}
			function Hn(l) {
				var n,
					u,
					e = {};
				try {
					for (var t = o(l.split(',')), r = t.next(); !r.done; r = t.next()) e[r.value] = !0;
				} catch (s) {
					n = { error: s };
				} finally {
					try {
						r && !r.done && (u = t.return) && u.call(t);
					} finally {
						if (n) throw n.error;
					}
				}
				return e;
			}
			function Bn() {
				for (var l, n, u = [], e = 0; e < arguments.length; e++) u[e] = arguments[e];
				var t = {};
				try {
					for (var r = o(u), s = r.next(); !s.done; s = r.next()) {
						var a = s.value;
						for (var i in a) a.hasOwnProperty(i) && (t[i] = !0);
					}
				} catch (c) {
					l = { error: c };
				} finally {
					try {
						s && !s.done && (n = r.return) && n.call(r);
					} finally {
						if (l) throw l.error;
					}
				}
				return t;
			}
			var qn,
				Gn = Hn('area,br,col,hr,img,wbr'),
				Zn = Hn('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				Qn = Hn('rp,rt'),
				Wn = Bn(Qn, Zn),
				Kn = Bn(
					Gn,
					Bn(
						Zn,
						Hn(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					Bn(
						Qn,
						Hn(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					Wn
				),
				Yn = Hn('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				Jn = Hn('srcset'),
				$n = Bn(
					Yn,
					Jn,
					Hn(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					)
				),
				Xn = Hn('script,style,template'),
				lu = (function() {
					function l() {
						(this.sanitizedSomething = !1), (this.buf = []);
					}
					return (
						(l.prototype.sanitizeChildren = function(l) {
							for (var n = l.firstChild, u = !0; n; )
								if (
									(n.nodeType === Node.ELEMENT_NODE ? (u = this.startElement(n)) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : (this.sanitizedSomething = !0),
									u && n.firstChild)
								)
									n = n.firstChild;
								else
									for (; n; ) {
										n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
										var e = this.checkClobberedElement(n, n.nextSibling);
										if (e) {
											n = e;
											break;
										}
										n = this.checkClobberedElement(n, n.parentNode);
									}
							return this.buf.join('');
						}),
						(l.prototype.startElement = function(l) {
							var n,
								u = l.nodeName.toLowerCase();
							if (!Kn.hasOwnProperty(u)) return (this.sanitizedSomething = !0), !Xn.hasOwnProperty(u);
							this.buf.push('<'), this.buf.push(u);
							for (var e = l.attributes, t = 0; t < e.length; t++) {
								var r = e.item(t),
									s = r.name,
									a = s.toLowerCase();
								if ($n.hasOwnProperty(a)) {
									var o = r.value;
									Yn[a] && (o = zn(o)),
										Jn[a] &&
											((n = o),
											(o = (n = String(n))
												.split(',')
												.map(function(l) {
													return zn(l.trim());
												})
												.join(', '))),
										this.buf.push(' ', s, '="', eu(o), '"');
								} else this.sanitizedSomething = !0;
							}
							return this.buf.push('>'), !0;
						}),
						(l.prototype.endElement = function(l) {
							var n = l.nodeName.toLowerCase();
							Kn.hasOwnProperty(n) && !Gn.hasOwnProperty(n) && (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
						}),
						(l.prototype.chars = function(l) {
							this.buf.push(eu(l));
						}),
						(l.prototype.checkClobberedElement = function(l, n) {
							if (n && (l.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
								throw new Error('Failed to sanitize html because the element is clobbered: ' + l.outerHTML);
							return n;
						}),
						l
					);
				})(),
				nu = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				uu = /([^\#-~ |!])/g;
			function eu(l) {
				return l
					.replace(/&/g, '&amp;')
					.replace(nu, function(l) {
						return '&#' + (1024 * (l.charCodeAt(0) - 55296) + (l.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(uu, function(l) {
						return '&#' + l.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			function tu(l) {
				return 'content' in l &&
					(function(l) {
						return l.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === l.nodeName;
					})(l)
					? l.content
					: null;
			}
			var ru = (function(l) {
					function n(n) {
						void 0 === n && (n = !1);
						var u = l.call(this) || this;
						return (u.__isAsync = n), u;
					}
					return (
						t(n, l),
						(n.prototype.emit = function(n) {
							l.prototype.next.call(this, n);
						}),
						(n.prototype.subscribe = function(n, u, e) {
							var t,
								r = function(l) {
									return null;
								},
								s = function() {
									return null;
								};
							n && 'object' == typeof n
								? ((t = this.__isAsync
										? function(l) {
												setTimeout(function() {
													return n.next(l);
												});
										  }
										: function(l) {
												n.next(l);
										  }),
								  n.error &&
										(r = this.__isAsync
											? function(l) {
													setTimeout(function() {
														return n.error(l);
													});
											  }
											: function(l) {
													n.error(l);
											  }),
								  n.complete &&
										(s = this.__isAsync
											? function() {
													setTimeout(function() {
														return n.complete();
													});
											  }
											: function() {
													n.complete();
											  }))
								: ((t = this.__isAsync
										? function(l) {
												setTimeout(function() {
													return n(l);
												});
										  }
										: function(l) {
												n(l);
										  }),
								  u &&
										(r = this.__isAsync
											? function(l) {
													setTimeout(function() {
														return u(l);
													});
											  }
											: function(l) {
													u(l);
											  }),
								  e &&
										(s = this.__isAsync
											? function() {
													setTimeout(function() {
														return e();
													});
											  }
											: function() {
													e();
											  }));
							var a = l.prototype.subscribe.call(this, t, r, s);
							return n instanceof m && n.add(a), a;
						}),
						n
					);
				})(N),
				su = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return au(l, Cn);
						}),
						l
					);
				})(),
				au = Wl,
				ou = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				iu = /^url\(([^)]+)\)$/,
				cu = (function() {
					return function() {};
				})(),
				pu = 'ngDebugContext',
				hu = 'ngOriginalError',
				du = 'ngErrorLogger';
			function fu(l) {
				return l[pu];
			}
			function gu(l) {
				return l[hu];
			}
			function mu(l) {
				for (var n = [], u = 1; u < arguments.length; u++) n[u - 1] = arguments[u];
				l.error.apply(l, c(n));
			}
			var bu = (function() {
				function l() {
					this._console = console;
				}
				return (
					(l.prototype.handleError = function(l) {
						var n = this._findOriginalError(l),
							u = this._findContext(l),
							e = (function(l) {
								return l[du] || mu;
							})(l);
						e(this._console, 'ERROR', l), n && e(this._console, 'ORIGINAL ERROR', n), u && e(this._console, 'ERROR CONTEXT', u);
					}),
					(l.prototype._findContext = function(l) {
						return l ? (fu(l) ? fu(l) : this._findContext(gu(l))) : null;
					}),
					(l.prototype._findOriginalError = function(l) {
						for (var n = gu(l); n && gu(n); ) n = gu(n);
						return n;
					}),
					l
				);
			})();
			function yu(l) {
				return !!l && 'function' == typeof l.then;
			}
			function vu(l) {
				return !!l && 'function' == typeof l.subscribe;
			}
			var wu = new gl('Application Initializer'),
				ju = (function() {
					function l(l) {
						var n = this;
						(this.appInits = l),
							(this.initialized = !1),
							(this.done = !1),
							(this.donePromise = new Promise(function(l, u) {
								(n.resolve = l), (n.reject = u);
							}));
					}
					return (
						(l.prototype.runInitializers = function() {
							var l = this;
							if (!this.initialized) {
								var n = [],
									u = function() {
										(l.done = !0), l.resolve();
									};
								if (this.appInits)
									for (var e = 0; e < this.appInits.length; e++) {
										var t = this.appInits[e]();
										yu(t) && n.push(t);
									}
								Promise.all(n)
									.then(function() {
										u();
									})
									.catch(function(n) {
										l.reject(n);
									}),
									0 === n.length && u(),
									(this.initialized = !0);
							}
						}),
						l
					);
				})(),
				_u = new gl('AppId');
			function xu() {
				return '' + ku() + ku() + ku();
			}
			function ku() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			var Cu = new gl('Platform Initializer'),
				Su = new gl('Platform ID'),
				Eu = new gl('appBootstrapListener'),
				Pu = (function() {
					function l() {}
					return (
						(l.prototype.log = function(l) {
							console.log(l);
						}),
						(l.prototype.warn = function(l) {
							console.warn(l);
						}),
						l
					);
				})();
			function Iu() {
				throw new Error('Runtime compiler is not loaded');
			}
			var Ou,
				Tu,
				Mu = Iu,
				Ru = Iu,
				Au = Iu,
				Nu = Iu,
				Du = (function() {
					function l() {
						(this.compileModuleSync = Mu), (this.compileModuleAsync = Ru), (this.compileModuleAndAllComponentsSync = Au), (this.compileModuleAndAllComponentsAsync = Nu);
					}
					return (l.prototype.clearCache = function() {}), (l.prototype.clearCacheFor = function(l) {}), (l.prototype.getModuleId = function(l) {}), l;
				})(),
				Uu = (function() {
					return function() {};
				})();
			function Lu() {
				var l = jl.wtf;
				return !(!l || !(Ou = l.trace) || ((Tu = Ou.events), 0));
			}
			var Vu = Lu();
			function Fu(l, n) {
				return null;
			}
			var zu = Vu
					? function(l, n) {
							return void 0 === n && (n = null), Tu.createScope(l, n);
					  }
					: function(l, n) {
							return Fu;
					  },
				Hu = Vu
					? function(l, n) {
							return Ou.leaveScope(l, n), n;
					  }
					: function(l, n) {
							return n;
					  },
				Bu = (function() {
					function l(l) {
						var n,
							u = l.enableLongStackTrace,
							e = void 0 !== u && u;
						if (
							((this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new ru(!1)),
							(this.onMicrotaskEmpty = new ru(!1)),
							(this.onStable = new ru(!1)),
							(this.onError = new ru(!1)),
							'undefined' == typeof Zone)
						)
							throw new Error('In this configuration Angular requires Zone.js');
						Zone.assertZonePatched(),
							(this._nesting = 0),
							(this._outer = this._inner = Zone.current),
							Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
							Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
							e && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
							((n = this)._inner = n._inner.fork({
								name: 'angular',
								properties: { isAngularZone: !0 },
								onInvokeTask: function(l, u, e, t, r, s) {
									try {
										return Qu(n), l.invokeTask(e, t, r, s);
									} finally {
										Wu(n);
									}
								},
								onInvoke: function(l, u, e, t, r, s, a) {
									try {
										return Qu(n), l.invoke(e, t, r, s, a);
									} finally {
										Wu(n);
									}
								},
								onHasTask: function(l, u, e, t) {
									l.hasTask(e, t),
										u === e && ('microTask' == t.change ? ((n.hasPendingMicrotasks = t.microTask), Zu(n)) : 'macroTask' == t.change && (n.hasPendingMacrotasks = t.macroTask));
								},
								onHandleError: function(l, u, e, t) {
									return (
										l.handleError(e, t),
										n.runOutsideAngular(function() {
											return n.onError.emit(t);
										}),
										!1
									);
								}
							}));
					}
					return (
						(l.isInAngularZone = function() {
							return !0 === Zone.current.get('isAngularZone');
						}),
						(l.assertInAngularZone = function() {
							if (!l.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
						}),
						(l.assertNotInAngularZone = function() {
							if (l.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
						}),
						(l.prototype.run = function(l, n, u) {
							return this._inner.run(l, n, u);
						}),
						(l.prototype.runTask = function(l, n, u, e) {
							var t = this._inner,
								r = t.scheduleEventTask('NgZoneEvent: ' + e, l, Gu, qu, qu);
							try {
								return t.runTask(r, n, u);
							} finally {
								t.cancelTask(r);
							}
						}),
						(l.prototype.runGuarded = function(l, n, u) {
							return this._inner.runGuarded(l, n, u);
						}),
						(l.prototype.runOutsideAngular = function(l) {
							return this._outer.run(l);
						}),
						l
					);
				})();
			function qu() {}
			var Gu = {};
			function Zu(l) {
				if (0 == l._nesting && !l.hasPendingMicrotasks && !l.isStable)
					try {
						l._nesting++, l.onMicrotaskEmpty.emit(null);
					} finally {
						if ((l._nesting--, !l.hasPendingMicrotasks))
							try {
								l.runOutsideAngular(function() {
									return l.onStable.emit(null);
								});
							} finally {
								l.isStable = !0;
							}
					}
			}
			function Qu(l) {
				l._nesting++, l.isStable && ((l.isStable = !1), l.onUnstable.emit(null));
			}
			function Wu(l) {
				l._nesting--, Zu(l);
			}
			var Ku,
				Yu = (function() {
					function l() {
						(this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new ru()),
							(this.onMicrotaskEmpty = new ru()),
							(this.onStable = new ru()),
							(this.onError = new ru());
					}
					return (
						(l.prototype.run = function(l) {
							return l();
						}),
						(l.prototype.runGuarded = function(l) {
							return l();
						}),
						(l.prototype.runOutsideAngular = function(l) {
							return l();
						}),
						(l.prototype.runTask = function(l) {
							return l();
						}),
						l
					);
				})(),
				Ju = (function() {
					function l(l) {
						var n = this;
						(this._ngZone = l),
							(this._pendingCount = 0),
							(this._isZoneStable = !0),
							(this._didWork = !1),
							(this._callbacks = []),
							(this.taskTrackingZone = null),
							this._watchAngularEvents(),
							l.run(function() {
								n.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
							});
					}
					return (
						(l.prototype._watchAngularEvents = function() {
							var l = this;
							this._ngZone.onUnstable.subscribe({
								next: function() {
									(l._didWork = !0), (l._isZoneStable = !1);
								}
							}),
								this._ngZone.runOutsideAngular(function() {
									l._ngZone.onStable.subscribe({
										next: function() {
											Bu.assertNotInAngularZone(),
												Cl(function() {
													(l._isZoneStable = !0), l._runCallbacksIfReady();
												});
										}
									});
								});
						}),
						(l.prototype.increasePendingRequestCount = function() {
							return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
						}),
						(l.prototype.decreasePendingRequestCount = function() {
							if (((this._pendingCount -= 1), this._pendingCount < 0)) throw new Error('pending async requests below zero');
							return this._runCallbacksIfReady(), this._pendingCount;
						}),
						(l.prototype.isStable = function() {
							return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
						}),
						(l.prototype._runCallbacksIfReady = function() {
							var l = this;
							if (this.isStable())
								Cl(function() {
									for (; 0 !== l._callbacks.length; ) {
										var n = l._callbacks.pop();
										clearTimeout(n.timeoutId), n.doneCb(l._didWork);
									}
									l._didWork = !1;
								});
							else {
								var n = this.getPendingTasks();
								(this._callbacks = this._callbacks.filter(function(l) {
									return !l.updateCb || !l.updateCb(n) || (clearTimeout(l.timeoutId), !1);
								})),
									(this._didWork = !0);
							}
						}),
						(l.prototype.getPendingTasks = function() {
							return this.taskTrackingZone
								? this.taskTrackingZone.macroTasks.map(function(l) {
										return { source: l.source, creationLocation: l.creationLocation, data: l.data };
								  })
								: [];
						}),
						(l.prototype.addCallback = function(l, n, u) {
							var e = this,
								t = -1;
							n &&
								n > 0 &&
								(t = setTimeout(function() {
									(e._callbacks = e._callbacks.filter(function(l) {
										return l.timeoutId !== t;
									})),
										l(e._didWork, e.getPendingTasks());
								}, n)),
								this._callbacks.push({ doneCb: l, timeoutId: t, updateCb: u });
						}),
						(l.prototype.whenStable = function(l, n, u) {
							if (u && !this.taskTrackingZone)
								throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
							this.addCallback(l, n, u), this._runCallbacksIfReady();
						}),
						(l.prototype.getPendingRequestCount = function() {
							return this._pendingCount;
						}),
						(l.prototype.findProviders = function(l, n, u) {
							return [];
						}),
						l
					);
				})(),
				$u = (function() {
					function l() {
						(this._applications = new Map()), Xu.addToWindow(this);
					}
					return (
						(l.prototype.registerApplication = function(l, n) {
							this._applications.set(l, n);
						}),
						(l.prototype.unregisterApplication = function(l) {
							this._applications.delete(l);
						}),
						(l.prototype.unregisterAllApplications = function() {
							this._applications.clear();
						}),
						(l.prototype.getTestability = function(l) {
							return this._applications.get(l) || null;
						}),
						(l.prototype.getAllTestabilities = function() {
							return Array.from(this._applications.values());
						}),
						(l.prototype.getAllRootElements = function() {
							return Array.from(this._applications.keys());
						}),
						(l.prototype.findTestabilityInTree = function(l, n) {
							return void 0 === n && (n = !0), Xu.findTestabilityInTree(this, l, n);
						}),
						s([a('design:paramtypes', [])], l)
					);
				})(),
				Xu = new ((function() {
					function l() {}
					return (
						(l.prototype.addToWindow = function(l) {}),
						(l.prototype.findTestabilityInTree = function(l, n, u) {
							return null;
						}),
						l
					);
				})())(),
				le = new gl('AllowMultipleToken'),
				ne = (function() {
					return function(l, n) {
						(this.name = l), (this.token = n);
					};
				})();
			function ue(l, n, u) {
				void 0 === u && (u = []);
				var e = 'Platform: ' + n,
					t = new gl(e);
				return function(n) {
					void 0 === n && (n = []);
					var r = ee();
					if (!r || r.injector.get(le, !1))
						if (l) l(u.concat(n).concat({ provide: t, useValue: !0 }));
						else {
							var s = u.concat(n).concat({ provide: t, useValue: !0 });
							!(function(l) {
								if (Ku && !Ku.destroyed && !Ku.injector.get(le, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								Ku = l.get(te);
								var n = l.get(Cu, null);
								n &&
									n.forEach(function(l) {
										return l();
									});
							})(Xl.create({ providers: s, name: e }));
						}
					return (function(l) {
						var n = ee();
						if (!n) throw new Error('No platform exists!');
						if (!n.injector.get(l, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return n;
					})(t);
				};
			}
			function ee() {
				return Ku && !Ku.destroyed ? Ku : null;
			}
			var te = (function() {
				function l(l) {
					(this._injector = l), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
				}
				return (
					(l.prototype.bootstrapModuleFactory = function(l, n) {
						var u,
							e = this,
							t = 'noop' === (u = n ? n.ngZone : void 0) ? new Yu() : ('zone.js' === u ? void 0 : u) || new Bu({ enableLongStackTrace: Un() }),
							r = [{ provide: Bu, useValue: t }];
						return t.run(function() {
							var n = Xl.create({ providers: r, parent: e.injector, name: l.moduleType.name }),
								u = l.create(n),
								s = u.injector.get(bu, null);
							if (!s) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								u.onDestroy(function() {
									return ae(e._modules, u);
								}),
								t.runOutsideAngular(function() {
									return t.onError.subscribe({
										next: function(l) {
											s.handleError(l);
										}
									});
								}),
								(function(l, n, t) {
									try {
										var r = ((s = u.injector.get(ju)).runInitializers(),
										s.donePromise.then(function() {
											return e._moduleDoBootstrap(u), u;
										}));
										return yu(r)
											? r.catch(function(u) {
													throw (n.runOutsideAngular(function() {
														return l.handleError(u);
													}),
													u);
											  })
											: r;
									} catch (a) {
										throw (n.runOutsideAngular(function() {
											return l.handleError(a);
										}),
										a);
									}
									var s;
								})(s, t)
							);
						});
					}),
					(l.prototype.bootstrapModule = function(l, n) {
						var u = this;
						void 0 === n && (n = []);
						var e = re({}, n);
						return (function(l, n, u) {
							return l
								.get(Uu)
								.createCompiler([n])
								.compileModuleAsync(u);
						})(this.injector, e, l).then(function(l) {
							return u.bootstrapModuleFactory(l, e);
						});
					}),
					(l.prototype._moduleDoBootstrap = function(l) {
						var n = l.injector.get(se);
						if (l._bootstrapComponents.length > 0)
							l._bootstrapComponents.forEach(function(l) {
								return n.bootstrap(l);
							});
						else {
							if (!l.instance.ngDoBootstrap)
								throw new Error(
									'The module ' +
										El(l.instance.constructor) +
										' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
								);
							l.instance.ngDoBootstrap(n);
						}
						this._modules.push(l);
					}),
					(l.prototype.onDestroy = function(l) {
						this._destroyListeners.push(l);
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return this._injector;
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.destroy = function() {
						if (this._destroyed) throw new Error('The platform has already been destroyed!');
						this._modules.slice().forEach(function(l) {
							return l.destroy();
						}),
							this._destroyListeners.forEach(function(l) {
								return l();
							}),
							(this._destroyed = !0);
					}),
					Object.defineProperty(l.prototype, 'destroyed', {
						get: function() {
							return this._destroyed;
						},
						enumerable: !0,
						configurable: !0
					}),
					l
				);
			})();
			function re(l, n) {
				return Array.isArray(n) ? n.reduce(re, l) : r({}, l, n);
			}
			var se = (function() {
				function l(l, n, u, e, t, r) {
					var s = this;
					(this._zone = l),
						(this._console = n),
						(this._injector = u),
						(this._exceptionHandler = e),
						(this._componentFactoryResolver = t),
						(this._initStatus = r),
						(this._bootstrapListeners = []),
						(this._views = []),
						(this._runningTick = !1),
						(this._enforceNoNewChanges = !1),
						(this._stable = !0),
						(this.componentTypes = []),
						(this.components = []),
						(this._enforceNoNewChanges = Un()),
						this._zone.onMicrotaskEmpty.subscribe({
							next: function() {
								s._zone.run(function() {
									s.tick();
								});
							}
						});
					var a = new I(function(l) {
							(s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks),
								s._zone.runOutsideAngular(function() {
									l.next(s._stable), l.complete();
								});
						}),
						o = new I(function(l) {
							var n;
							s._zone.runOutsideAngular(function() {
								n = s._zone.onStable.subscribe(function() {
									Bu.assertNotInAngularZone(),
										Cl(function() {
											s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || ((s._stable = !0), l.next(!0));
										});
								});
							});
							var u = s._zone.onUnstable.subscribe(function() {
								Bu.assertInAngularZone(),
									s._stable &&
										((s._stable = !1),
										s._zone.runOutsideAngular(function() {
											l.next(!1);
										}));
							});
							return function() {
								n.unsubscribe(), u.unsubscribe();
							};
						});
					this.isStable = (function() {
						for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
						var u = Number.POSITIVE_INFINITY,
							e = null,
							t = l[l.length - 1];
						return (
							U(t) ? ((e = l.pop()), l.length > 1 && 'number' == typeof l[l.length - 1] && (u = l.pop())) : 'number' == typeof t && (u = l.pop()),
							null === e && 1 === l.length && l[0] instanceof I ? l[0] : ul(u)(el(l, e))
						);
					})(
						a,
						o.pipe(function(l) {
							return tl()(
								((n = cl),
								function(l) {
									var u;
									u =
										'function' == typeof n
											? n
											: function() {
													return n;
											  };
									var e = Object.create(l, ol);
									return (e.source = l), (e.subjectFactory = u), e;
								})(l)
							);
							var n;
						})
					);
				}
				var n;
				return (
					(n = l),
					(l.prototype.bootstrap = function(l, n) {
						var u,
							e = this;
						if (!this._initStatus.done)
							throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
						(u = l instanceof mn ? l : this._componentFactoryResolver.resolveComponentFactory(l)), this.componentTypes.push(u.componentType);
						var t = u instanceof _n ? null : this._injector.get(xn),
							r = u.create(Xl.NULL, [], n || u.selector, t);
						r.onDestroy(function() {
							e._unloadComponent(r);
						});
						var s = r.injector.get(Ju, null);
						return (
							s && r.injector.get($u).registerApplication(r.location.nativeElement, s),
							this._loadComponent(r),
							Un() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
							r
						);
					}),
					(l.prototype.tick = function() {
						var l = this;
						if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
						var u = n._tickScope();
						try {
							(this._runningTick = !0),
								this._views.forEach(function(l) {
									return l.detectChanges();
								}),
								this._enforceNoNewChanges &&
									this._views.forEach(function(l) {
										return l.checkNoChanges();
									});
						} catch (e) {
							this._zone.runOutsideAngular(function() {
								return l._exceptionHandler.handleError(e);
							});
						} finally {
							(this._runningTick = !1), Hu(u);
						}
					}),
					(l.prototype.attachView = function(l) {
						var n = l;
						this._views.push(n), n.attachToAppRef(this);
					}),
					(l.prototype.detachView = function(l) {
						var n = l;
						ae(this._views, n), n.detachFromAppRef();
					}),
					(l.prototype._loadComponent = function(l) {
						this.attachView(l.hostView),
							this.tick(),
							this.components.push(l),
							this._injector
								.get(Eu, [])
								.concat(this._bootstrapListeners)
								.forEach(function(n) {
									return n(l);
								});
					}),
					(l.prototype._unloadComponent = function(l) {
						this.detachView(l.hostView), ae(this.components, l);
					}),
					(l.prototype.ngOnDestroy = function() {
						this._views.slice().forEach(function(l) {
							return l.destroy();
						});
					}),
					Object.defineProperty(l.prototype, 'viewCount', {
						get: function() {
							return this._views.length;
						},
						enumerable: !0,
						configurable: !0
					}),
					(l._tickScope = zu('ApplicationRef#tick()')),
					l
				);
			})();
			function ae(l, n) {
				var u = l.indexOf(n);
				u > -1 && l.splice(u, 1);
			}
			var oe = (function() {
					function l() {
						(this.dirty = !0), (this._results = []), (this.changes = new ru()), (this.length = 0);
					}
					return (
						(l.prototype.map = function(l) {
							return this._results.map(l);
						}),
						(l.prototype.filter = function(l) {
							return this._results.filter(l);
						}),
						(l.prototype.find = function(l) {
							return this._results.find(l);
						}),
						(l.prototype.reduce = function(l, n) {
							return this._results.reduce(l, n);
						}),
						(l.prototype.forEach = function(l) {
							this._results.forEach(l);
						}),
						(l.prototype.some = function(l) {
							return this._results.some(l);
						}),
						(l.prototype.toArray = function() {
							return this._results.slice();
						}),
						(l.prototype[kl()] = function() {
							return this._results[kl()]();
						}),
						(l.prototype.toString = function() {
							return this._results.toString();
						}),
						(l.prototype.reset = function(l) {
							(this._results = (function l(n) {
								return n.reduce(function(n, u) {
									var e = Array.isArray(u) ? l(u) : u;
									return n.concat(e);
								}, []);
							})(l)),
								(this.dirty = !1),
								(this.length = this._results.length),
								(this.last = this._results[this.length - 1]),
								(this.first = this._results[0]);
						}),
						(l.prototype.notifyOnChanges = function() {
							this.changes.emit(this);
						}),
						(l.prototype.setDirty = function() {
							this.dirty = !0;
						}),
						(l.prototype.destroy = function() {
							this.changes.complete(), this.changes.unsubscribe();
						}),
						l
					);
				})(),
				ie = (function() {
					return function() {};
				})(),
				ce = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				pe = (function() {
					function l(l, n) {
						(this._compiler = l), (this._config = n || ce);
					}
					return (
						(l.prototype.load = function(l) {
							return this._compiler instanceof Du ? this.loadFactory(l) : this.loadAndCompile(l);
						}),
						(l.prototype.loadAndCompile = function(l) {
							var n = this,
								e = i(l.split('#'), 2),
								t = e[0],
								r = e[1];
							return (
								void 0 === r && (r = 'default'),
								u('crnd')(t)
									.then(function(l) {
										return l[r];
									})
									.then(function(l) {
										return he(l, t, r);
									})
									.then(function(l) {
										return n._compiler.compileModuleAsync(l);
									})
							);
						}),
						(l.prototype.loadFactory = function(l) {
							var n = i(l.split('#'), 2),
								e = n[0],
								t = n[1],
								r = 'NgFactory';
							return (
								void 0 === t && ((t = 'default'), (r = '')),
								u('crnd')(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix)
									.then(function(l) {
										return l[t + r];
									})
									.then(function(l) {
										return he(l, e, t);
									})
							);
						}),
						l
					);
				})();
			function he(l, n, u) {
				if (!l) throw new Error("Cannot find '" + u + "' in '" + n + "'");
				return l;
			}
			var de = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return fe(l, Cn);
						}),
						l
					);
				})(),
				fe = Wl,
				ge = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return me();
						}),
						l
					);
				})(),
				me = function() {
					for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				},
				be = (function() {
					return function(l, n) {
						(this.name = l), (this.callback = n);
					};
				})(),
				ye = (function() {
					function l(l, n, u) {
						(this.listeners = []), (this.parent = null), (this._debugContext = u), (this.nativeNode = l), n && n instanceof ve && n.addChild(this);
					}
					return (
						Object.defineProperty(l.prototype, 'injector', {
							get: function() {
								return this._debugContext.injector;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'componentInstance', {
							get: function() {
								return this._debugContext.component;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'context', {
							get: function() {
								return this._debugContext.context;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'references', {
							get: function() {
								return this._debugContext.references;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'providerTokens', {
							get: function() {
								return this._debugContext.providerTokens;
							},
							enumerable: !0,
							configurable: !0
						}),
						l
					);
				})(),
				ve = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n, u, e) || this;
						return (t.properties = {}), (t.attributes = {}), (t.classes = {}), (t.styles = {}), (t.childNodes = []), (t.nativeElement = n), t;
					}
					return (
						t(n, l),
						(n.prototype.addChild = function(l) {
							l && (this.childNodes.push(l), (l.parent = this));
						}),
						(n.prototype.removeChild = function(l) {
							var n = this.childNodes.indexOf(l);
							-1 !== n && ((l.parent = null), this.childNodes.splice(n, 1));
						}),
						(n.prototype.insertChildrenAfter = function(l, n) {
							var u,
								e = this,
								t = this.childNodes.indexOf(l);
							-1 !== t &&
								((u = this.childNodes).splice.apply(u, c([t + 1, 0], n)),
								n.forEach(function(n) {
									n.parent && n.parent.removeChild(n), (l.parent = e);
								}));
						}),
						(n.prototype.insertBefore = function(l, n) {
							var u = this.childNodes.indexOf(l);
							-1 === u ? this.addChild(n) : (n.parent && n.parent.removeChild(n), (n.parent = this), this.childNodes.splice(u, 0, n));
						}),
						(n.prototype.query = function(l) {
							return this.queryAll(l)[0] || null;
						}),
						(n.prototype.queryAll = function(l) {
							var n = [];
							return (
								(function l(n, u, e) {
									n.childNodes.forEach(function(n) {
										n instanceof ve && (u(n) && e.push(n), l(n, u, e));
									});
								})(this, l, n),
								n
							);
						}),
						(n.prototype.queryAllNodes = function(l) {
							var n = [];
							return (
								(function l(n, u, e) {
									n instanceof ve &&
										n.childNodes.forEach(function(n) {
											u(n) && e.push(n), n instanceof ve && l(n, u, e);
										});
								})(this, l, n),
								n
							);
						}),
						Object.defineProperty(n.prototype, 'children', {
							get: function() {
								return this.childNodes.filter(function(l) {
									return l instanceof n;
								});
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.triggerEventHandler = function(l, n) {
							this.listeners.forEach(function(u) {
								u.name == l && u.callback(n);
							});
						}),
						n
					);
				})(ye),
				we = new Map(),
				je = function(l) {
					return we.get(l) || null;
				};
			function _e(l) {
				we.set(l.nativeNode, l);
			}
			var xe = (function() {
					function l() {}
					return (
						(l.prototype.supports = function(l) {
							return Zl(l);
						}),
						(l.prototype.create = function(l) {
							return new Ce(l);
						}),
						l
					);
				})(),
				ke = function(l, n) {
					return n;
				},
				Ce = (function() {
					function l(l) {
						(this.length = 0),
							(this._linkedRecords = null),
							(this._unlinkedRecords = null),
							(this._previousItHead = null),
							(this._itHead = null),
							(this._itTail = null),
							(this._additionsHead = null),
							(this._additionsTail = null),
							(this._movesHead = null),
							(this._movesTail = null),
							(this._removalsHead = null),
							(this._removalsTail = null),
							(this._identityChangesHead = null),
							(this._identityChangesTail = null),
							(this._trackByFn = l || ke);
					}
					return (
						(l.prototype.forEachItem = function(l) {
							var n;
							for (n = this._itHead; null !== n; n = n._next) l(n);
						}),
						(l.prototype.forEachOperation = function(l) {
							for (var n = this._itHead, u = this._removalsHead, e = 0, t = null; n || u; ) {
								var r = !u || (n && n.currentIndex < Ie(u, e, t)) ? n : u,
									s = Ie(r, e, t),
									a = r.currentIndex;
								if (r === u) e--, (u = u._nextRemoved);
								else if (((n = n._next), null == r.previousIndex)) e++;
								else {
									t || (t = []);
									var o = s - e,
										i = a - e;
									if (o != i) {
										for (var c = 0; c < o; c++) {
											var p = c < t.length ? t[c] : (t[c] = 0),
												h = p + c;
											i <= h && h < o && (t[c] = p + 1);
										}
										t[r.previousIndex] = i - o;
									}
								}
								s !== a && l(r, s, a);
							}
						}),
						(l.prototype.forEachPreviousItem = function(l) {
							var n;
							for (n = this._previousItHead; null !== n; n = n._nextPrevious) l(n);
						}),
						(l.prototype.forEachAddedItem = function(l) {
							var n;
							for (n = this._additionsHead; null !== n; n = n._nextAdded) l(n);
						}),
						(l.prototype.forEachMovedItem = function(l) {
							var n;
							for (n = this._movesHead; null !== n; n = n._nextMoved) l(n);
						}),
						(l.prototype.forEachRemovedItem = function(l) {
							var n;
							for (n = this._removalsHead; null !== n; n = n._nextRemoved) l(n);
						}),
						(l.prototype.forEachIdentityChange = function(l) {
							var n;
							for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) l(n);
						}),
						(l.prototype.diff = function(l) {
							if ((null == l && (l = []), !Zl(l))) throw new Error("Error trying to diff '" + El(l) + "'. Only arrays and iterables are allowed");
							return this.check(l) ? this : null;
						}),
						(l.prototype.onDestroy = function() {}),
						(l.prototype.check = function(l) {
							var n = this;
							this._reset();
							var u,
								e,
								t,
								r = this._itHead,
								s = !1;
							if (Array.isArray(l)) {
								this.length = l.length;
								for (var a = 0; a < this.length; a++)
									(t = this._trackByFn(a, (e = l[a]))),
										null !== r && Sl(r.trackById, t)
											? (s && (r = this._verifyReinsertion(r, e, t, a)), Sl(r.item, e) || this._addIdentityChange(r, e))
											: ((r = this._mismatch(r, e, t, a)), (s = !0)),
										(r = r._next);
							} else
								(u = 0),
									(function(l, n) {
										if (Array.isArray(l)) for (var u = 0; u < l.length; u++) n(l[u]);
										else for (var e = l[kl()](), t = void 0; !(t = e.next()).done; ) n(t.value);
									})(l, function(l) {
										(t = n._trackByFn(u, l)),
											null !== r && Sl(r.trackById, t)
												? (s && (r = n._verifyReinsertion(r, l, t, u)), Sl(r.item, l) || n._addIdentityChange(r, l))
												: ((r = n._mismatch(r, l, t, u)), (s = !0)),
											(r = r._next),
											u++;
									}),
									(this.length = u);
							return this._truncate(r), (this.collection = l), this.isDirty;
						}),
						Object.defineProperty(l.prototype, 'isDirty', {
							get: function() {
								return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype._reset = function() {
							if (this.isDirty) {
								var l = void 0,
									n = void 0;
								for (l = this._previousItHead = this._itHead; null !== l; l = l._next) l._nextPrevious = l._next;
								for (l = this._additionsHead; null !== l; l = l._nextAdded) l.previousIndex = l.currentIndex;
								for (this._additionsHead = this._additionsTail = null, l = this._movesHead; null !== l; l = n) (l.previousIndex = l.currentIndex), (n = l._nextMoved);
								(this._movesHead = this._movesTail = null), (this._removalsHead = this._removalsTail = null), (this._identityChangesHead = this._identityChangesTail = null);
							}
						}),
						(l.prototype._mismatch = function(l, n, u, e) {
							var t;
							return (
								null === l ? (t = this._itTail) : ((t = l._prev), this._remove(l)),
								null !== (l = null === this._linkedRecords ? null : this._linkedRecords.get(u, e))
									? (Sl(l.item, n) || this._addIdentityChange(l, n), this._moveAfter(l, t, e))
									: null !== (l = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(u, null))
									? (Sl(l.item, n) || this._addIdentityChange(l, n), this._reinsertAfter(l, t, e))
									: (l = this._addAfter(new Se(n, u), t, e)),
								l
							);
						}),
						(l.prototype._verifyReinsertion = function(l, n, u, e) {
							var t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(u, null);
							return null !== t ? (l = this._reinsertAfter(t, l._prev, e)) : l.currentIndex != e && ((l.currentIndex = e), this._addToMoves(l, e)), l;
						}),
						(l.prototype._truncate = function(l) {
							for (; null !== l; ) {
								var n = l._next;
								this._addToRemovals(this._unlink(l)), (l = n);
							}
							null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
								null !== this._additionsTail && (this._additionsTail._nextAdded = null),
								null !== this._movesTail && (this._movesTail._nextMoved = null),
								null !== this._itTail && (this._itTail._next = null),
								null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
								null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
						}),
						(l.prototype._reinsertAfter = function(l, n, u) {
							null !== this._unlinkedRecords && this._unlinkedRecords.remove(l);
							var e = l._prevRemoved,
								t = l._nextRemoved;
							return (
								null === e ? (this._removalsHead = t) : (e._nextRemoved = t),
								null === t ? (this._removalsTail = e) : (t._prevRemoved = e),
								this._insertAfter(l, n, u),
								this._addToMoves(l, u),
								l
							);
						}),
						(l.prototype._moveAfter = function(l, n, u) {
							return this._unlink(l), this._insertAfter(l, n, u), this._addToMoves(l, u), l;
						}),
						(l.prototype._addAfter = function(l, n, u) {
							return this._insertAfter(l, n, u), (this._additionsTail = null === this._additionsTail ? (this._additionsHead = l) : (this._additionsTail._nextAdded = l)), l;
						}),
						(l.prototype._insertAfter = function(l, n, u) {
							var e = null === n ? this._itHead : n._next;
							return (
								(l._next = e),
								(l._prev = n),
								null === e ? (this._itTail = l) : (e._prev = l),
								null === n ? (this._itHead = l) : (n._next = l),
								null === this._linkedRecords && (this._linkedRecords = new Pe()),
								this._linkedRecords.put(l),
								(l.currentIndex = u),
								l
							);
						}),
						(l.prototype._remove = function(l) {
							return this._addToRemovals(this._unlink(l));
						}),
						(l.prototype._unlink = function(l) {
							null !== this._linkedRecords && this._linkedRecords.remove(l);
							var n = l._prev,
								u = l._next;
							return null === n ? (this._itHead = u) : (n._next = u), null === u ? (this._itTail = n) : (u._prev = n), l;
						}),
						(l.prototype._addToMoves = function(l, n) {
							return l.previousIndex === n ? l : ((this._movesTail = null === this._movesTail ? (this._movesHead = l) : (this._movesTail._nextMoved = l)), l);
						}),
						(l.prototype._addToRemovals = function(l) {
							return (
								null === this._unlinkedRecords && (this._unlinkedRecords = new Pe()),
								this._unlinkedRecords.put(l),
								(l.currentIndex = null),
								(l._nextRemoved = null),
								null === this._removalsTail
									? ((this._removalsTail = this._removalsHead = l), (l._prevRemoved = null))
									: ((l._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = l)),
								l
							);
						}),
						(l.prototype._addIdentityChange = function(l, n) {
							return (
								(l.item = n),
								(this._identityChangesTail = null === this._identityChangesTail ? (this._identityChangesHead = l) : (this._identityChangesTail._nextIdentityChange = l)),
								l
							);
						}),
						l
					);
				})(),
				Se = (function() {
					return function(l, n) {
						(this.item = l),
							(this.trackById = n),
							(this.currentIndex = null),
							(this.previousIndex = null),
							(this._nextPrevious = null),
							(this._prev = null),
							(this._next = null),
							(this._prevDup = null),
							(this._nextDup = null),
							(this._prevRemoved = null),
							(this._nextRemoved = null),
							(this._nextAdded = null),
							(this._nextMoved = null),
							(this._nextIdentityChange = null);
					};
				})(),
				Ee = (function() {
					function l() {
						(this._head = null), (this._tail = null);
					}
					return (
						(l.prototype.add = function(l) {
							null === this._head
								? ((this._head = this._tail = l), (l._nextDup = null), (l._prevDup = null))
								: ((this._tail._nextDup = l), (l._prevDup = this._tail), (l._nextDup = null), (this._tail = l));
						}),
						(l.prototype.get = function(l, n) {
							var u;
							for (u = this._head; null !== u; u = u._nextDup) if ((null === n || n <= u.currentIndex) && Sl(u.trackById, l)) return u;
							return null;
						}),
						(l.prototype.remove = function(l) {
							var n = l._prevDup,
								u = l._nextDup;
							return null === n ? (this._head = u) : (n._nextDup = u), null === u ? (this._tail = n) : (u._prevDup = n), null === this._head;
						}),
						l
					);
				})(),
				Pe = (function() {
					function l() {
						this.map = new Map();
					}
					return (
						(l.prototype.put = function(l) {
							var n = l.trackById,
								u = this.map.get(n);
							u || ((u = new Ee()), this.map.set(n, u)), u.add(l);
						}),
						(l.prototype.get = function(l, n) {
							var u = this.map.get(l);
							return u ? u.get(l, n) : null;
						}),
						(l.prototype.remove = function(l) {
							var n = l.trackById;
							return this.map.get(n).remove(l) && this.map.delete(n), l;
						}),
						Object.defineProperty(l.prototype, 'isEmpty', {
							get: function() {
								return 0 === this.map.size;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.clear = function() {
							this.map.clear();
						}),
						l
					);
				})();
			function Ie(l, n, u) {
				var e = l.previousIndex;
				if (null === e) return e;
				var t = 0;
				return u && e < u.length && (t = u[e]), e + n + t;
			}
			var Oe = (function() {
					function l() {}
					return (
						(l.prototype.supports = function(l) {
							return l instanceof Map || Ql(l);
						}),
						(l.prototype.create = function() {
							return new Te();
						}),
						l
					);
				})(),
				Te = (function() {
					function l() {
						(this._records = new Map()),
							(this._mapHead = null),
							(this._appendAfter = null),
							(this._previousMapHead = null),
							(this._changesHead = null),
							(this._changesTail = null),
							(this._additionsHead = null),
							(this._additionsTail = null),
							(this._removalsHead = null),
							(this._removalsTail = null);
					}
					return (
						Object.defineProperty(l.prototype, 'isDirty', {
							get: function() {
								return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.forEachItem = function(l) {
							var n;
							for (n = this._mapHead; null !== n; n = n._next) l(n);
						}),
						(l.prototype.forEachPreviousItem = function(l) {
							var n;
							for (n = this._previousMapHead; null !== n; n = n._nextPrevious) l(n);
						}),
						(l.prototype.forEachChangedItem = function(l) {
							var n;
							for (n = this._changesHead; null !== n; n = n._nextChanged) l(n);
						}),
						(l.prototype.forEachAddedItem = function(l) {
							var n;
							for (n = this._additionsHead; null !== n; n = n._nextAdded) l(n);
						}),
						(l.prototype.forEachRemovedItem = function(l) {
							var n;
							for (n = this._removalsHead; null !== n; n = n._nextRemoved) l(n);
						}),
						(l.prototype.diff = function(l) {
							if (l) {
								if (!(l instanceof Map || Ql(l))) throw new Error("Error trying to diff '" + El(l) + "'. Only maps and objects are allowed");
							} else l = new Map();
							return this.check(l) ? this : null;
						}),
						(l.prototype.onDestroy = function() {}),
						(l.prototype.check = function(l) {
							var n = this;
							this._reset();
							var u = this._mapHead;
							if (
								((this._appendAfter = null),
								this._forEach(l, function(l, e) {
									if (u && u.key === e) n._maybeAddToChanges(u, l), (n._appendAfter = u), (u = u._next);
									else {
										var t = n._getOrCreateRecordForKey(e, l);
										u = n._insertBeforeOrAppend(u, t);
									}
								}),
								u)
							) {
								u._prev && (u._prev._next = null), (this._removalsHead = u);
								for (var e = u; null !== e; e = e._nextRemoved)
									e === this._mapHead && (this._mapHead = null),
										this._records.delete(e.key),
										(e._nextRemoved = e._next),
										(e.previousValue = e.currentValue),
										(e.currentValue = null),
										(e._prev = null),
										(e._next = null);
							}
							return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
						}),
						(l.prototype._insertBeforeOrAppend = function(l, n) {
							if (l) {
								var u = l._prev;
								return (n._next = l), (n._prev = u), (l._prev = n), u && (u._next = n), l === this._mapHead && (this._mapHead = n), (this._appendAfter = l), l;
							}
							return this._appendAfter ? ((this._appendAfter._next = n), (n._prev = this._appendAfter)) : (this._mapHead = n), (this._appendAfter = n), null;
						}),
						(l.prototype._getOrCreateRecordForKey = function(l, n) {
							if (this._records.has(l)) {
								var u = this._records.get(l);
								this._maybeAddToChanges(u, n);
								var e = u._prev,
									t = u._next;
								return e && (e._next = t), t && (t._prev = e), (u._next = null), (u._prev = null), u;
							}
							var r = new Me(l);
							return this._records.set(l, r), (r.currentValue = n), this._addToAdditions(r), r;
						}),
						(l.prototype._reset = function() {
							if (this.isDirty) {
								var l = void 0;
								for (this._previousMapHead = this._mapHead, l = this._previousMapHead; null !== l; l = l._next) l._nextPrevious = l._next;
								for (l = this._changesHead; null !== l; l = l._nextChanged) l.previousValue = l.currentValue;
								for (l = this._additionsHead; null != l; l = l._nextAdded) l.previousValue = l.currentValue;
								(this._changesHead = this._changesTail = null), (this._additionsHead = this._additionsTail = null), (this._removalsHead = null);
							}
						}),
						(l.prototype._maybeAddToChanges = function(l, n) {
							Sl(n, l.currentValue) || ((l.previousValue = l.currentValue), (l.currentValue = n), this._addToChanges(l));
						}),
						(l.prototype._addToAdditions = function(l) {
							null === this._additionsHead ? (this._additionsHead = this._additionsTail = l) : ((this._additionsTail._nextAdded = l), (this._additionsTail = l));
						}),
						(l.prototype._addToChanges = function(l) {
							null === this._changesHead ? (this._changesHead = this._changesTail = l) : ((this._changesTail._nextChanged = l), (this._changesTail = l));
						}),
						(l.prototype._forEach = function(l, n) {
							l instanceof Map
								? l.forEach(n)
								: Object.keys(l).forEach(function(u) {
										return n(l[u], u);
								  });
						}),
						l
					);
				})(),
				Me = (function() {
					return function(l) {
						(this.key = l),
							(this.previousValue = null),
							(this.currentValue = null),
							(this._nextPrevious = null),
							(this._next = null),
							(this._prev = null),
							(this._nextAdded = null),
							(this._nextRemoved = null),
							(this._nextChanged = null);
					};
				})(),
				Re = (function() {
					function l(l) {
						this.factories = l;
					}
					return (
						(l.create = function(n, u) {
							if (null != u) {
								var e = u.factories.slice();
								n = n.concat(e);
							}
							return new l(n);
						}),
						(l.extend = function(n) {
							return {
								provide: l,
								useFactory: function(u) {
									if (!u) throw new Error('Cannot extend IterableDiffers without a parent injector');
									return l.create(n, u);
								},
								deps: [[l, new Dl(), new Al()]]
							};
						}),
						(l.prototype.find = function(l) {
							var n,
								u = this.factories.find(function(n) {
									return n.supports(l);
								});
							if (null != u) return u;
							throw new Error("Cannot find a differ supporting object '" + l + "' of type '" + ((n = l).name || typeof n) + "'");
						}),
						(l.ngInjectableDef = dl({
							providedIn: 'root',
							factory: function() {
								return new l([new xe()]);
							}
						})),
						l
					);
				})(),
				Ae = (function() {
					function l(l) {
						this.factories = l;
					}
					return (
						(l.create = function(n, u) {
							if (u) {
								var e = u.factories.slice();
								n = n.concat(e);
							}
							return new l(n);
						}),
						(l.extend = function(n) {
							return {
								provide: l,
								useFactory: function(u) {
									if (!u) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
									return l.create(n, u);
								},
								deps: [[l, new Dl(), new Al()]]
							};
						}),
						(l.prototype.find = function(l) {
							var n = this.factories.find(function(n) {
								return n.supports(l);
							});
							if (n) return n;
							throw new Error("Cannot find a differ supporting object '" + l + "'");
						}),
						(l.ngInjectableDef = dl({
							providedIn: 'root',
							factory: function() {
								return new l([new Oe()]);
							}
						})),
						l
					);
				})(),
				Ne = [new Oe()],
				De = new Re([new xe()]),
				Ue = new Ae(Ne),
				Le = ue(null, 'core', [{ provide: Su, useValue: 'unknown' }, { provide: te, deps: [Xl] }, { provide: $u, deps: [] }, { provide: Pu, deps: [] }]),
				Ve = new gl('LocaleId');
			function Fe() {
				return De;
			}
			function ze() {
				return Ue;
			}
			function He(l) {
				return l || 'en-US';
			}
			var Be = (function() {
				return function(l) {};
			})();
			function qe(l, n, u) {
				var e = l.state,
					t = 1792 & e;
				return t === n ? ((l.state = (-1793 & e) | u), (l.initIndex = -1), !0) : t === u;
			}
			function Ge(l, n, u) {
				return (1792 & l.state) === n && l.initIndex <= u && ((l.initIndex = u + 1), !0);
			}
			function Ze(l, n) {
				return l.nodes[n];
			}
			function Qe(l, n) {
				return l.nodes[n];
			}
			function We(l, n) {
				return l.nodes[n];
			}
			function Ke(l, n) {
				return l.nodes[n];
			}
			function Ye(l, n) {
				return l.nodes[n];
			}
			var Je = {
				setCurrentNode: void 0,
				createRootView: void 0,
				createEmbeddedView: void 0,
				createComponentView: void 0,
				createNgModuleRef: void 0,
				overrideProvider: void 0,
				overrideComponentView: void 0,
				clearOverrides: void 0,
				checkAndUpdateView: void 0,
				checkNoChangesView: void 0,
				destroyView: void 0,
				resolveDep: void 0,
				createDebugContext: void 0,
				handleEvent: void 0,
				updateDirectives: void 0,
				updateRenderer: void 0,
				dirtyParentQueries: void 0
			};
			function $e(l, n, u, e) {
				var t = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + n + "'. Current value: '" + u + "'.";
				return (
					e && (t += ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
					(function(l, n) {
						var u = new Error(l);
						return Xe(u, n), u;
					})(t, l)
				);
			}
			function Xe(l, n) {
				(l[pu] = n), (l[du] = n.logError.bind(n));
			}
			function lt(l) {
				return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + l);
			}
			var nt = function() {},
				ut = new Map();
			function et(l) {
				var n = ut.get(l);
				return n || ((n = El(l) + '_' + ut.size), ut.set(l, n)), n;
			}
			var tt = '$$undefined',
				rt = '$$empty';
			function st(l) {
				return { id: tt, styles: l.styles, encapsulation: l.encapsulation, data: l.data };
			}
			var at = 0;
			function ot(l, n, u, e) {
				return !(!(2 & l.state) && Sl(l.oldValues[n.bindingIndex + u], e));
			}
			function it(l, n, u, e) {
				return !!ot(l, n, u, e) && ((l.oldValues[n.bindingIndex + u] = e), !0);
			}
			function ct(l, n, u, e) {
				var t = l.oldValues[n.bindingIndex + u];
				if (1 & l.state || !Bl(t, e)) {
					var r = n.bindings[u].name;
					throw $e(Je.createDebugContext(l, n.nodeIndex), r + ': ' + t, r + ': ' + e, 0 != (1 & l.state));
				}
			}
			function pt(l) {
				for (var n = l; n; ) 2 & n.def.flags && (n.state |= 8), (n = n.viewContainerParent || n.parent);
			}
			function ht(l, n) {
				for (var u = l; u && u !== n; ) (u.state |= 64), (u = u.viewContainerParent || u.parent);
			}
			function dt(l, n, u, e) {
				try {
					return pt(33554432 & l.def.nodes[n].flags ? Qe(l, n).componentView : l), Je.handleEvent(l, n, u, e);
				} catch (t) {
					l.root.errorHandler.handleError(t);
				}
			}
			function ft(l) {
				return l.parent ? Qe(l.parent, l.parentNodeDef.nodeIndex) : null;
			}
			function gt(l) {
				return l.parent ? l.parentNodeDef.parent : null;
			}
			function mt(l, n) {
				switch (201347067 & n.flags) {
					case 1:
						return Qe(l, n.nodeIndex).renderElement;
					case 2:
						return Ze(l, n.nodeIndex).renderText;
				}
			}
			function bt(l) {
				return !!l.parent && !!(32768 & l.parentNodeDef.flags);
			}
			function yt(l) {
				return !(!l.parent || 32768 & l.parentNodeDef.flags);
			}
			function vt(l) {
				return 1 << l % 32;
			}
			function wt(l) {
				var n = {},
					u = 0,
					e = {};
				return (
					l &&
						l.forEach(function(l) {
							var t = i(l, 2),
								r = t[0],
								s = t[1];
							'number' == typeof r ? ((n[r] = s), (u |= vt(r))) : (e[r] = s);
						}),
					{ matchedQueries: n, references: e, matchedQueryIds: u }
				);
			}
			function jt(l, n) {
				return l.map(function(l) {
					var u, e, t;
					return (
						Array.isArray(l) ? ((t = (u = i(l, 2))[0]), (e = u[1])) : ((t = 0), (e = l)),
						e && ('function' == typeof e || 'object' == typeof e) && n && Object.defineProperty(e, Kl, { value: n, configurable: !0 }),
						{ flags: t, token: e, tokenKey: et(e) }
					);
				});
			}
			function _t(l, n, u) {
				var e = u.renderParent;
				return e
					? 0 == (1 & e.flags) || 0 == (33554432 & e.flags) || (e.element.componentRendererType && e.element.componentRendererType.encapsulation === Ml.Native)
						? Qe(l, u.renderParent.nodeIndex).renderElement
						: void 0
					: n;
			}
			var xt = new WeakMap();
			function kt(l) {
				var n = xt.get(l);
				return (
					n ||
						(((n = l(function() {
							return nt;
						})).factory = l),
						xt.set(l, n)),
					n
				);
			}
			function Ct(l, n, u, e, t) {
				3 === n && (u = l.renderer.parentNode(mt(l, l.def.lastRenderRootNode))), St(l, n, 0, l.def.nodes.length - 1, u, e, t);
			}
			function St(l, n, u, e, t, r, s) {
				for (var a = u; a <= e; a++) {
					var o = l.def.nodes[a];
					11 & o.flags && Pt(l, o, n, t, r, s), (a += o.childCount);
				}
			}
			function Et(l, n, u, e, t, r) {
				for (var s = l; s && !bt(s); ) s = s.parent;
				for (var a = s.parent, o = gt(s), i = o.nodeIndex + o.childCount, c = o.nodeIndex + 1; c <= i; c++) {
					var p = a.def.nodes[c];
					p.ngContentIndex === n && Pt(a, p, u, e, t, r), (c += p.childCount);
				}
				if (!a.parent) {
					var h = l.root.projectableNodes[n];
					if (h) for (c = 0; c < h.length; c++) It(l, h[c], u, e, t, r);
				}
			}
			function Pt(l, n, u, e, t, r) {
				if (8 & n.flags) Et(l, n.ngContent.index, u, e, t, r);
				else {
					var s = mt(l, n);
					if (
						(3 === u && 33554432 & n.flags && 48 & n.bindingFlags
							? (16 & n.bindingFlags && It(l, s, u, e, t, r), 32 & n.bindingFlags && It(Qe(l, n.nodeIndex).componentView, s, u, e, t, r))
							: It(l, s, u, e, t, r),
						16777216 & n.flags)
					)
						for (var a = Qe(l, n.nodeIndex).viewContainer._embeddedViews, o = 0; o < a.length; o++) Ct(a[o], u, e, t, r);
					1 & n.flags && !n.element.name && St(l, u, n.nodeIndex + 1, n.nodeIndex + n.childCount, e, t, r);
				}
			}
			function It(l, n, u, e, t, r) {
				var s = l.renderer;
				switch (u) {
					case 1:
						s.appendChild(e, n);
						break;
					case 2:
						s.insertBefore(e, n, t);
						break;
					case 3:
						s.removeChild(e, n);
						break;
					case 0:
						r.push(n);
				}
			}
			var Ot = /^:([^:]+):(.+)$/;
			function Tt(l) {
				if (':' === l[0]) {
					var n = l.match(Ot);
					return [n[1], n[2]];
				}
				return ['', l];
			}
			function Mt(l) {
				for (var n = 0, u = 0; u < l.length; u++) n |= l[u].flags;
				return n;
			}
			function Rt(l, n, u, e, t, r) {
				l |= 1;
				var s = wt(n);
				return {
					nodeIndex: -1,
					parent: null,
					renderParent: null,
					bindingIndex: -1,
					outputIndex: -1,
					flags: l,
					checkIndex: -1,
					childFlags: 0,
					directChildFlags: 0,
					childMatchedQueries: 0,
					matchedQueries: s.matchedQueries,
					matchedQueryIds: s.matchedQueryIds,
					references: s.references,
					ngContentIndex: u,
					childCount: e,
					bindings: [],
					bindingFlags: 0,
					outputs: [],
					element: {
						ns: null,
						name: null,
						attrs: null,
						template: r ? kt(r) : null,
						componentProvider: null,
						componentView: null,
						componentRendererType: null,
						publicProviders: null,
						allProviders: null,
						handleEvent: t || nt
					},
					provider: null,
					text: null,
					query: null,
					ngContent: null
				};
			}
			function At(l, n, u, e, t, r, s, a, o, c, p, h) {
				var d;
				void 0 === s && (s = []), c || (c = nt);
				var f = wt(u),
					g = f.matchedQueries,
					m = f.references,
					b = f.matchedQueryIds,
					y = null,
					v = null;
				r && ((y = (d = i(Tt(r), 2))[0]), (v = d[1])), (a = a || []);
				for (var w = new Array(a.length), j = 0; j < a.length; j++) {
					var _ = i(a[j], 3),
						x = _[0],
						k = _[2],
						C = i(Tt(_[1]), 2),
						S = C[0],
						E = C[1],
						P = void 0,
						I = void 0;
					switch (15 & x) {
						case 4:
							I = k;
							break;
						case 1:
						case 8:
							P = k;
					}
					w[j] = { flags: x, ns: S, name: E, nonMinifiedName: E, securityContext: P, suffix: I };
				}
				o = o || [];
				var O = new Array(o.length);
				for (j = 0; j < o.length; j++) {
					var T = i(o[j], 2);
					O[j] = { type: 0, target: T[0], eventName: T[1], propName: null };
				}
				var M = (s = s || []).map(function(l) {
					var n = i(l, 2),
						u = n[1],
						e = i(Tt(n[0]), 2);
					return [e[0], e[1], u];
				});
				return (
					(h = (function(l) {
						if (l && l.id === tt) {
							var n = (null != l.encapsulation && l.encapsulation !== Ml.None) || l.styles.length || Object.keys(l.data).length;
							l.id = n ? 'c' + at++ : rt;
						}
						return l && l.id === rt && (l = null), l || null;
					})(h)),
					p && (n |= 33554432),
					{
						nodeIndex: -1,
						parent: null,
						renderParent: null,
						bindingIndex: -1,
						outputIndex: -1,
						checkIndex: l,
						flags: (n |= 1),
						childFlags: 0,
						directChildFlags: 0,
						childMatchedQueries: 0,
						matchedQueries: g,
						matchedQueryIds: b,
						references: m,
						ngContentIndex: e,
						childCount: t,
						bindings: w,
						bindingFlags: Mt(w),
						outputs: O,
						element: {
							ns: y,
							name: v,
							attrs: M,
							template: null,
							componentProvider: null,
							componentView: p || null,
							componentRendererType: h,
							publicProviders: null,
							allProviders: null,
							handleEvent: c || nt
						},
						provider: null,
						text: null,
						query: null,
						ngContent: null
					}
				);
			}
			function Nt(l, n, u) {
				var e,
					t = u.element,
					r = l.root.selectorOrNode,
					s = l.renderer;
				if (l.parent || !r) {
					e = t.name ? s.createElement(t.name, t.ns) : s.createComment('');
					var a = _t(l, n, u);
					a && s.appendChild(a, e);
				} else e = s.selectRootElement(r, !!t.componentRendererType && t.componentRendererType.encapsulation === Ml.ShadowDom);
				if (t.attrs)
					for (var o = 0; o < t.attrs.length; o++) {
						var c = i(t.attrs[o], 3);
						s.setAttribute(e, c[1], c[2], c[0]);
					}
				return e;
			}
			function Dt(l, n, u, e) {
				for (var t = 0; t < u.outputs.length; t++) {
					var r = u.outputs[t],
						s = Ut(l, u.nodeIndex, ((p = r.eventName), (c = r.target) ? c + ':' + p : p)),
						a = r.target,
						o = l;
					'component' === r.target && ((a = null), (o = n));
					var i = o.renderer.listen(a || e, r.eventName, s);
					l.disposables[u.outputIndex + t] = i;
				}
				var c, p;
			}
			function Ut(l, n, u) {
				return function(e) {
					return dt(l, n, u, e);
				};
			}
			function Lt(l, n, u, e) {
				if (!it(l, n, u, e)) return !1;
				var t = n.bindings[u],
					r = Qe(l, n.nodeIndex),
					s = r.renderElement,
					a = t.name;
				switch (15 & t.flags) {
					case 1:
						!(function(l, n, u, e, t, r) {
							var s = n.securityContext,
								a = s ? l.root.sanitizer.sanitize(s, r) : r;
							a = null != a ? a.toString() : null;
							var o = l.renderer;
							null != r ? o.setAttribute(u, t, a, e) : o.removeAttribute(u, t, e);
						})(l, t, s, t.ns, a, e);
						break;
					case 2:
						!(function(l, n, u, e) {
							var t = l.renderer;
							e ? t.addClass(n, u) : t.removeClass(n, u);
						})(l, s, a, e);
						break;
					case 4:
						!(function(l, n, u, e, t) {
							var r = l.root.sanitizer.sanitize(Mn.STYLE, t);
							if (null != r) {
								r = r.toString();
								var s = n.suffix;
								null != s && (r += s);
							} else r = null;
							var a = l.renderer;
							null != r ? a.setStyle(u, e, r) : a.removeStyle(u, e);
						})(l, t, s, a, e);
						break;
					case 8:
						!(function(l, n, u, e, t) {
							var r = n.securityContext,
								s = r ? l.root.sanitizer.sanitize(r, t) : t;
							l.renderer.setProperty(u, e, s);
						})(33554432 & n.flags && 32 & t.flags ? r.componentView : l, t, s, a, e);
				}
				return !0;
			}
			var Vt = new Object(),
				Ft = et(Xl),
				zt = et(Jl),
				Ht = et(xn);
			function Bt(l, n, u, e) {
				return (u = Ol(u)), { index: -1, deps: jt(e, El(n)), flags: l, token: n, value: u };
			}
			function qt(l, n, u) {
				void 0 === u && (u = Xl.THROW_IF_NOT_FOUND);
				var e,
					t,
					r = Vl(l);
				try {
					if (8 & n.flags) return n.token;
					if ((2 & n.flags && (u = null), 1 & n.flags)) return l._parent.get(n.token, u);
					var s = n.tokenKey;
					switch (s) {
						case Ft:
						case zt:
						case Ht:
							return l;
					}
					var a,
						o = l._def.providersByKey[s];
					if (o) {
						var i = l._providers[o.index];
						return void 0 === i && (i = l._providers[o.index] = Gt(l, o)), i === Vt ? void 0 : i;
					}
					if (
						(a = fl(n.token)) &&
						((e = l),
						null != (t = a).providedIn &&
							((function(l, n) {
								return l._def.modules.indexOf(t.providedIn) > -1;
							})(e) ||
								('root' === t.providedIn && e._def.isRoot)))
					) {
						var c = l._providers.length;
						return (
							(l._def.providersByKey[n.tokenKey] = { flags: 5120, value: a.factory, deps: [], index: c, token: n.token }),
							(l._providers[c] = Vt),
							(l._providers[c] = Gt(l, l._def.providersByKey[n.tokenKey]))
						);
					}
					return 4 & n.flags ? u : l._parent.get(n.token, u);
				} finally {
					Vl(r);
				}
			}
			function Gt(l, n) {
				var u;
				switch (201347067 & n.flags) {
					case 512:
						u = (function(l, n, u) {
							var e = u.length;
							switch (e) {
								case 0:
									return new n();
								case 1:
									return new n(qt(l, u[0]));
								case 2:
									return new n(qt(l, u[0]), qt(l, u[1]));
								case 3:
									return new n(qt(l, u[0]), qt(l, u[1]), qt(l, u[2]));
								default:
									for (var t = new Array(e), r = 0; r < e; r++) t[r] = qt(l, u[r]);
									return new (n.bind.apply(n, c([void 0], t)))();
							}
						})(l, n.value, n.deps);
						break;
					case 1024:
						u = (function(l, n, u) {
							var e = u.length;
							switch (e) {
								case 0:
									return n();
								case 1:
									return n(qt(l, u[0]));
								case 2:
									return n(qt(l, u[0]), qt(l, u[1]));
								case 3:
									return n(qt(l, u[0]), qt(l, u[1]), qt(l, u[2]));
								default:
									for (var t = Array(e), r = 0; r < e; r++) t[r] = qt(l, u[r]);
									return n.apply(void 0, c(t));
							}
						})(l, n.value, n.deps);
						break;
					case 2048:
						u = qt(l, n.deps[0]);
						break;
					case 256:
						u = n.value;
				}
				return u === Vt || null == u || 'object' != typeof u || 131072 & n.flags || 'function' != typeof u.ngOnDestroy || (n.flags |= 131072), void 0 === u ? Vt : u;
			}
			function Zt(l, n) {
				var u = l.viewContainer._embeddedViews;
				if (((null == n || n >= u.length) && (n = u.length - 1), n < 0)) return null;
				var e = u[n];
				return (e.viewContainerParent = null), Yt(u, n), Je.dirtyParentQueries(e), Wt(e), e;
			}
			function Qt(l, n, u) {
				var e = n ? mt(n, n.def.lastRenderRootNode) : l.renderElement,
					t = u.renderer.parentNode(e),
					r = u.renderer.nextSibling(e);
				Ct(u, 2, t, r, void 0);
			}
			function Wt(l) {
				Ct(l, 3, null, null, void 0);
			}
			function Kt(l, n, u) {
				n >= l.length ? l.push(u) : l.splice(n, 0, u);
			}
			function Yt(l, n) {
				n >= l.length - 1 ? l.pop() : l.splice(n, 1);
			}
			var Jt = new Object();
			function $t(l, n, u, e, t, r) {
				return new Xt(l, n, u, e, t, r);
			}
			var Xt = (function(l) {
					function n(n, u, e, t, r, s) {
						var a = l.call(this) || this;
						return (a.selector = n), (a.componentType = u), (a._inputs = t), (a._outputs = r), (a.ngContentSelectors = s), (a.viewDefFactory = e), a;
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'inputs', {
							get: function() {
								var l = [],
									n = this._inputs;
								for (var u in n) l.push({ propName: u, templateName: n[u] });
								return l;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'outputs', {
							get: function() {
								var l = [];
								for (var n in this._outputs) l.push({ propName: n, templateName: this._outputs[n] });
								return l;
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.create = function(l, n, u, e) {
							if (!e) throw new Error('ngModule should be provided');
							var t = kt(this.viewDefFactory),
								r = t.nodes[0].element.componentProvider.nodeIndex,
								s = Je.createRootView(l, n || [], u, t, e, Jt),
								a = We(s, r).instance;
							return u && s.renderer.setAttribute(Qe(s, 0).renderElement, 'ng-version', An.full), new lr(s, new tr(s), a);
						}),
						n
					);
				})(mn),
				lr = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t._view = n), (t._viewRef = u), (t._component = e), (t._elDef = t._view.def.nodes[0]), (t.hostView = u), (t.changeDetectorRef = u), (t.instance = e), t;
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'location', {
							get: function() {
								return new Cn(Qe(this._view, this._elDef.nodeIndex).renderElement);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'injector', {
							get: function() {
								return new or(this._view, this._elDef);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'componentType', {
							get: function() {
								return this._component.constructor;
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.destroy = function() {
							this._viewRef.destroy();
						}),
						(n.prototype.onDestroy = function(l) {
							this._viewRef.onDestroy(l);
						}),
						n
					);
				})(gn);
			function nr(l, n, u) {
				return new ur(l, n, u);
			}
			var ur = (function() {
				function l(l, n, u) {
					(this._view = l), (this._elDef = n), (this._data = u), (this._embeddedViews = []);
				}
				return (
					Object.defineProperty(l.prototype, 'element', {
						get: function() {
							return new Cn(this._data.renderElement);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return new or(this._view, this._elDef);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'parentInjector', {
						get: function() {
							for (var l = this._view, n = this._elDef.parent; !n && l; ) (n = gt(l)), (l = l.parent);
							return l ? new or(l, n) : new or(this._view, null);
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.clear = function() {
						for (var l = this._embeddedViews.length - 1; l >= 0; l--) {
							var n = Zt(this._data, l);
							Je.destroyView(n);
						}
					}),
					(l.prototype.get = function(l) {
						var n = this._embeddedViews[l];
						if (n) {
							var u = new tr(n);
							return u.attachToViewContainerRef(this), u;
						}
						return null;
					}),
					Object.defineProperty(l.prototype, 'length', {
						get: function() {
							return this._embeddedViews.length;
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.createEmbeddedView = function(l, n, u) {
						var e = l.createEmbeddedView(n || {});
						return this.insert(e, u), e;
					}),
					(l.prototype.createComponent = function(l, n, u, e, t) {
						var r = u || this.parentInjector;
						t || l instanceof _n || (t = r.get(xn));
						var s = l.create(r, e, void 0, t);
						return this.insert(s.hostView, n), s;
					}),
					(l.prototype.insert = function(l, n) {
						if (l.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
						var u,
							e,
							t,
							r,
							s = l;
						return (
							(r = (u = this._data).viewContainer._embeddedViews),
							null == (e = n) && (e = r.length),
							((t = s._view).viewContainerParent = this._view),
							Kt(r, e, t),
							(function(l, n) {
								var u = ft(n);
								if (u && u !== l && !(16 & n.state)) {
									n.state |= 16;
									var e = u.template._projectedViews;
									e || (e = u.template._projectedViews = []),
										e.push(n),
										(function(l, u) {
											if (!(4 & u.flags)) {
												(n.parent.def.nodeFlags |= 4), (u.flags |= 4);
												for (var e = u.parent; e; ) (e.childFlags |= 4), (e = e.parent);
											}
										})(0, n.parentNodeDef);
								}
							})(u, t),
							Je.dirtyParentQueries(t),
							Qt(u, e > 0 ? r[e - 1] : null, t),
							s.attachToViewContainerRef(this),
							l
						);
					}),
					(l.prototype.move = function(l, n) {
						if (l.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
						var u,
							e,
							t,
							r,
							s,
							a = this._embeddedViews.indexOf(l._view);
						return (
							(t = n),
							(s = (r = (u = this._data).viewContainer._embeddedViews)[(e = a)]),
							Yt(r, e),
							null == t && (t = r.length),
							Kt(r, t, s),
							Je.dirtyParentQueries(s),
							Wt(s),
							Qt(u, t > 0 ? r[t - 1] : null, s),
							l
						);
					}),
					(l.prototype.indexOf = function(l) {
						return this._embeddedViews.indexOf(l._view);
					}),
					(l.prototype.remove = function(l) {
						var n = Zt(this._data, l);
						n && Je.destroyView(n);
					}),
					(l.prototype.detach = function(l) {
						var n = Zt(this._data, l);
						return n ? new tr(n) : null;
					}),
					l
				);
			})();
			function er(l) {
				return new tr(l);
			}
			var tr = (function() {
				function l(l) {
					(this._view = l), (this._viewContainerRef = null), (this._appRef = null);
				}
				return (
					Object.defineProperty(l.prototype, 'rootNodes', {
						get: function() {
							return Ct(this._view, 0, void 0, void 0, (l = [])), l;
							var l;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'context', {
						get: function() {
							return this._view.context;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'destroyed', {
						get: function() {
							return 0 != (128 & this._view.state);
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.markForCheck = function() {
						pt(this._view);
					}),
					(l.prototype.detach = function() {
						this._view.state &= -5;
					}),
					(l.prototype.detectChanges = function() {
						var l = this._view.root.rendererFactory;
						l.begin && l.begin();
						try {
							Je.checkAndUpdateView(this._view);
						} finally {
							l.end && l.end();
						}
					}),
					(l.prototype.checkNoChanges = function() {
						Je.checkNoChangesView(this._view);
					}),
					(l.prototype.reattach = function() {
						this._view.state |= 4;
					}),
					(l.prototype.onDestroy = function(l) {
						this._view.disposables || (this._view.disposables = []), this._view.disposables.push(l);
					}),
					(l.prototype.destroy = function() {
						this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Je.destroyView(this._view);
					}),
					(l.prototype.detachFromAppRef = function() {
						(this._appRef = null), Wt(this._view), Je.dirtyParentQueries(this._view);
					}),
					(l.prototype.attachToAppRef = function(l) {
						if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
						this._appRef = l;
					}),
					(l.prototype.attachToViewContainerRef = function(l) {
						if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
						this._viewContainerRef = l;
					}),
					l
				);
			})();
			function rr(l, n) {
				return new sr(l, n);
			}
			var sr = (function(l) {
				function n(n, u) {
					var e = l.call(this) || this;
					return (e._parentView = n), (e._def = u), e;
				}
				return (
					t(n, l),
					(n.prototype.createEmbeddedView = function(l) {
						return new tr(Je.createEmbeddedView(this._parentView, this._def, this._def.element.template, l));
					}),
					Object.defineProperty(n.prototype, 'elementRef', {
						get: function() {
							return new Cn(Qe(this._parentView, this._def.nodeIndex).renderElement);
						},
						enumerable: !0,
						configurable: !0
					}),
					n
				);
			})(su);
			function ar(l, n) {
				return new or(l, n);
			}
			var or = (function() {
				function l(l, n) {
					(this.view = l), (this.elDef = n);
				}
				return (
					(l.prototype.get = function(l, n) {
						return (
							void 0 === n && (n = Xl.THROW_IF_NOT_FOUND),
							Je.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: l, tokenKey: et(l) }, n)
						);
					}),
					l
				);
			})();
			function ir(l, n) {
				var u = l.def.nodes[n];
				if (1 & u.flags) {
					var e = Qe(l, u.nodeIndex);
					return u.element.template ? e.template : e.renderElement;
				}
				if (2 & u.flags) return Ze(l, u.nodeIndex).renderText;
				if (20240 & u.flags) return We(l, u.nodeIndex).instance;
				throw new Error('Illegal state: read nodeValue for node index ' + n);
			}
			function cr(l) {
				return new pr(l.renderer);
			}
			var pr = (function() {
				function l(l) {
					this.delegate = l;
				}
				return (
					(l.prototype.selectRootElement = function(l) {
						return this.delegate.selectRootElement(l);
					}),
					(l.prototype.createElement = function(l, n) {
						var u = i(Tt(n), 2),
							e = this.delegate.createElement(u[1], u[0]);
						return l && this.delegate.appendChild(l, e), e;
					}),
					(l.prototype.createViewRoot = function(l) {
						return l;
					}),
					(l.prototype.createTemplateAnchor = function(l) {
						var n = this.delegate.createComment('');
						return l && this.delegate.appendChild(l, n), n;
					}),
					(l.prototype.createText = function(l, n) {
						var u = this.delegate.createText(n);
						return l && this.delegate.appendChild(l, u), u;
					}),
					(l.prototype.projectNodes = function(l, n) {
						for (var u = 0; u < n.length; u++) this.delegate.appendChild(l, n[u]);
					}),
					(l.prototype.attachViewAfter = function(l, n) {
						for (var u = this.delegate.parentNode(l), e = this.delegate.nextSibling(l), t = 0; t < n.length; t++) this.delegate.insertBefore(u, n[t], e);
					}),
					(l.prototype.detachView = function(l) {
						for (var n = 0; n < l.length; n++) {
							var u = l[n],
								e = this.delegate.parentNode(u);
							this.delegate.removeChild(e, u);
						}
					}),
					(l.prototype.destroyView = function(l, n) {
						for (var u = 0; u < n.length; u++) this.delegate.destroyNode(n[u]);
					}),
					(l.prototype.listen = function(l, n, u) {
						return this.delegate.listen(l, n, u);
					}),
					(l.prototype.listenGlobal = function(l, n, u) {
						return this.delegate.listen(l, n, u);
					}),
					(l.prototype.setElementProperty = function(l, n, u) {
						this.delegate.setProperty(l, n, u);
					}),
					(l.prototype.setElementAttribute = function(l, n, u) {
						var e = i(Tt(n), 2),
							t = e[0],
							r = e[1];
						null != u ? this.delegate.setAttribute(l, r, u, t) : this.delegate.removeAttribute(l, r, t);
					}),
					(l.prototype.setBindingDebugInfo = function(l, n, u) {}),
					(l.prototype.setElementClass = function(l, n, u) {
						u ? this.delegate.addClass(l, n) : this.delegate.removeClass(l, n);
					}),
					(l.prototype.setElementStyle = function(l, n, u) {
						null != u ? this.delegate.setStyle(l, n, u) : this.delegate.removeStyle(l, n);
					}),
					(l.prototype.invokeElementMethod = function(l, n, u) {
						l[n].apply(l, u);
					}),
					(l.prototype.setText = function(l, n) {
						this.delegate.setValue(l, n);
					}),
					(l.prototype.animate = function() {
						throw new Error('Renderer.animate is no longer supported!');
					}),
					l
				);
			})();
			function hr(l, n, u, e) {
				return new dr(l, n, u, e);
			}
			var dr = (function() {
					function l(l, n, u, e) {
						(this._moduleType = l),
							(this._parent = n),
							(this._bootstrapComponents = u),
							(this._def = e),
							(this._destroyListeners = []),
							(this._destroyed = !1),
							(this.injector = this),
							(function(l) {
								for (var n = l._def, u = (l._providers = new Array(n.providers.length)), e = 0; e < n.providers.length; e++) {
									var t = n.providers[e];
									4096 & t.flags || (void 0 === u[e] && (u[e] = Gt(l, t)));
								}
							})(this);
					}
					return (
						(l.prototype.get = function(l, n, u) {
							void 0 === n && (n = Xl.THROW_IF_NOT_FOUND), void 0 === u && (u = Ul.Default);
							var e = 0;
							return u & Ul.SkipSelf ? (e |= 1) : u & Ul.Self && (e |= 4), qt(this, { token: l, tokenKey: et(l), flags: e }, n);
						}),
						Object.defineProperty(l.prototype, 'instance', {
							get: function() {
								return this.get(this._moduleType);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'componentFactoryResolver', {
							get: function() {
								return this.get(wn);
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.destroy = function() {
							if (this._destroyed) throw new Error('The ng module ' + El(this.instance.constructor) + ' has already been destroyed.');
							(this._destroyed = !0),
								(function(l, n) {
									for (var u = l._def, e = new Set(), t = 0; t < u.providers.length; t++)
										if (131072 & u.providers[t].flags) {
											var r = l._providers[t];
											if (r && r !== Vt) {
												var s = r.ngOnDestroy;
												'function' != typeof s || e.has(r) || (s.apply(r), e.add(r));
											}
										}
								})(this),
								this._destroyListeners.forEach(function(l) {
									return l();
								});
						}),
						(l.prototype.onDestroy = function(l) {
							this._destroyListeners.push(l);
						}),
						l
					);
				})(),
				fr = et(En),
				gr = et(On),
				mr = et(Cn),
				br = et(de),
				yr = et(su),
				vr = et(ge),
				wr = et(Xl),
				jr = et(Jl);
			function _r(l, n, u, e, t, r, s, a) {
				var o = [];
				if (s)
					for (var c in s) {
						var p = i(s[c], 2);
						o[p[0]] = { flags: 8, name: c, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null };
					}
				var h = [];
				if (a) for (var d in a) h.push({ type: 1, propName: d, target: null, eventName: a[d] });
				return (function(l, n, u, e, t, r, s, a, o) {
					var i = wt(u),
						c = i.matchedQueries,
						p = i.references,
						h = i.matchedQueryIds;
					o || (o = []), a || (a = []), (r = Ol(r));
					var d = jt(s, El(t));
					return {
						nodeIndex: -1,
						parent: null,
						renderParent: null,
						bindingIndex: -1,
						outputIndex: -1,
						checkIndex: l,
						flags: n,
						childFlags: 0,
						directChildFlags: 0,
						childMatchedQueries: 0,
						matchedQueries: c,
						matchedQueryIds: h,
						references: p,
						ngContentIndex: -1,
						childCount: e,
						bindings: a,
						bindingFlags: Mt(a),
						outputs: o,
						element: null,
						provider: { token: t, value: r, deps: d },
						text: null,
						query: null,
						ngContent: null
					};
				})(l, (n |= 16384), u, e, t, t, r, o, h);
			}
			function xr(l, n) {
				return Er(l, n);
			}
			function kr(l, n) {
				for (var u = l; u.parent && !bt(u); ) u = u.parent;
				return Pr(u.parent, gt(u), !0, n.provider.value, n.provider.deps);
			}
			function Cr(l, n) {
				var u = Pr(l, n.parent, (32768 & n.flags) > 0, n.provider.value, n.provider.deps);
				if (n.outputs.length)
					for (var e = 0; e < n.outputs.length; e++) {
						var t = n.outputs[e],
							r = u[t.propName];
						if (!vu(r)) throw new Error('@Output ' + t.propName + " not initialized in '" + u.constructor.name + "'.");
						var s = r.subscribe(Sr(l, n.parent.nodeIndex, t.eventName));
						l.disposables[n.outputIndex + e] = s.unsubscribe.bind(s);
					}
				return u;
			}
			function Sr(l, n, u) {
				return function(e) {
					return dt(l, n, u, e);
				};
			}
			function Er(l, n) {
				var u = (8192 & n.flags) > 0,
					e = n.provider;
				switch (201347067 & n.flags) {
					case 512:
						return Pr(l, n.parent, u, e.value, e.deps);
					case 1024:
						return (function(l, n, u, e, t) {
							var r = t.length;
							switch (r) {
								case 0:
									return e();
								case 1:
									return e(Or(l, n, u, t[0]));
								case 2:
									return e(Or(l, n, u, t[0]), Or(l, n, u, t[1]));
								case 3:
									return e(Or(l, n, u, t[0]), Or(l, n, u, t[1]), Or(l, n, u, t[2]));
								default:
									for (var s = Array(r), a = 0; a < r; a++) s[a] = Or(l, n, u, t[a]);
									return e.apply(void 0, c(s));
							}
						})(l, n.parent, u, e.value, e.deps);
					case 2048:
						return Or(l, n.parent, u, e.deps[0]);
					case 256:
						return e.value;
				}
			}
			function Pr(l, n, u, e, t) {
				var r = t.length;
				switch (r) {
					case 0:
						return new e();
					case 1:
						return new e(Or(l, n, u, t[0]));
					case 2:
						return new e(Or(l, n, u, t[0]), Or(l, n, u, t[1]));
					case 3:
						return new e(Or(l, n, u, t[0]), Or(l, n, u, t[1]), Or(l, n, u, t[2]));
					default:
						for (var s = new Array(r), a = 0; a < r; a++) s[a] = Or(l, n, u, t[a]);
						return new (e.bind.apply(e, c([void 0], s)))();
				}
			}
			var Ir = {};
			function Or(l, n, u, e, t) {
				if ((void 0 === t && (t = Xl.THROW_IF_NOT_FOUND), 8 & e.flags)) return e.token;
				var r = l;
				2 & e.flags && (t = null);
				var s = e.tokenKey;
				s === vr && (u = !(!n || !n.element.componentView)), n && 1 & e.flags && ((u = !1), (n = n.parent));
				for (var a = l; a; ) {
					if (n)
						switch (s) {
							case fr:
								return cr(Tr(a, n, u));
							case gr:
								return Tr(a, n, u).renderer;
							case mr:
								return new Cn(Qe(a, n.nodeIndex).renderElement);
							case br:
								return Qe(a, n.nodeIndex).viewContainer;
							case yr:
								if (n.element.template) return Qe(a, n.nodeIndex).template;
								break;
							case vr:
								return er(Tr(a, n, u));
							case wr:
							case jr:
								return ar(a, n);
							default:
								var o = (u ? n.element.allProviders : n.element.publicProviders)[s];
								if (o) {
									var i = We(a, o.nodeIndex);
									return i || ((i = { instance: Er(a, o) }), (a.nodes[o.nodeIndex] = i)), i.instance;
								}
						}
					(u = bt(a)), (n = gt(a)), (a = a.parent), 4 & e.flags && (a = null);
				}
				var c = r.root.injector.get(e.token, Ir);
				return c !== Ir || t === Ir ? c : r.root.ngModule.injector.get(e.token, t);
			}
			function Tr(l, n, u) {
				var e;
				if (u) e = Qe(l, n.nodeIndex).componentView;
				else for (e = l; e.parent && !bt(e); ) e = e.parent;
				return e;
			}
			function Mr(l, n, u, e, t, r) {
				if (32768 & u.flags) {
					var s = Qe(l, u.parent.nodeIndex).componentView;
					2 & s.def.flags && (s.state |= 8);
				}
				if (((n.instance[u.bindings[e].name] = t), 524288 & u.flags)) {
					r = r || {};
					var a = ql.unwrap(l.oldValues[u.bindingIndex + e]);
					r[u.bindings[e].nonMinifiedName] = new Gl(a, t, 0 != (2 & l.state));
				}
				return (l.oldValues[u.bindingIndex + e] = t), r;
			}
			function Rr(l, n) {
				if (l.def.nodeFlags & n)
					for (var u = l.def.nodes, e = 0, t = 0; t < u.length; t++) {
						var r = u[t],
							s = r.parent;
						for (!s && r.flags & n && Nr(l, t, r.flags & n, e++), 0 == (r.childFlags & n) && (t += r.childCount); s && 1 & s.flags && t === s.nodeIndex + s.childCount; )
							s.directChildFlags & n && (e = Ar(l, s, n, e)), (s = s.parent);
					}
			}
			function Ar(l, n, u, e) {
				for (var t = n.nodeIndex + 1; t <= n.nodeIndex + n.childCount; t++) {
					var r = l.def.nodes[t];
					r.flags & u && Nr(l, t, r.flags & u, e++), (t += r.childCount);
				}
				return e;
			}
			function Nr(l, n, u, e) {
				var t = We(l, n);
				if (t) {
					var r = t.instance;
					r &&
						(Je.setCurrentNode(l, n),
						1048576 & u && Ge(l, 512, e) && r.ngAfterContentInit(),
						2097152 & u && r.ngAfterContentChecked(),
						4194304 & u && Ge(l, 768, e) && r.ngAfterViewInit(),
						8388608 & u && r.ngAfterViewChecked(),
						131072 & u && r.ngOnDestroy());
				}
			}
			function Dr(l, n, u) {
				var e = [];
				for (var t in u) e.push({ propName: t, bindingType: u[t] });
				return {
					nodeIndex: -1,
					parent: null,
					renderParent: null,
					bindingIndex: -1,
					outputIndex: -1,
					checkIndex: -1,
					flags: l,
					childFlags: 0,
					directChildFlags: 0,
					childMatchedQueries: 0,
					ngContentIndex: -1,
					matchedQueries: {},
					matchedQueryIds: 0,
					references: {},
					childCount: 0,
					bindings: [],
					bindingFlags: 0,
					outputs: [],
					element: null,
					provider: null,
					text: null,
					query: { id: n, filterId: vt(n), bindings: e },
					ngContent: null
				};
			}
			function Ur(l) {
				for (var n = l.def.nodeMatchedQueries; l.parent && yt(l); ) {
					var u = l.parentNodeDef;
					l = l.parent;
					for (var e = u.nodeIndex + u.childCount, t = 0; t <= e; t++)
						67108864 & (r = l.def.nodes[t]).flags && 536870912 & r.flags && (r.query.filterId & n) === r.query.filterId && Ye(l, t).setDirty(),
							(!(1 & r.flags && t + r.childCount < u.nodeIndex) && 67108864 & r.childFlags && 536870912 & r.childFlags) || (t += r.childCount);
				}
				if (134217728 & l.def.nodeFlags)
					for (t = 0; t < l.def.nodes.length; t++) {
						var r;
						134217728 & (r = l.def.nodes[t]).flags && 536870912 & r.flags && Ye(l, t).setDirty(), (t += r.childCount);
					}
			}
			function Lr(l, n) {
				var u = Ye(l, n.nodeIndex);
				if (u.dirty) {
					var e,
						t = void 0;
					if (67108864 & n.flags) {
						var r = n.parent.parent;
						(t = Vr(l, r.nodeIndex, r.nodeIndex + r.childCount, n.query, [])), (e = We(l, n.parent.nodeIndex).instance);
					} else 134217728 & n.flags && ((t = Vr(l, 0, l.def.nodes.length - 1, n.query, [])), (e = l.component));
					u.reset(t);
					for (var s = n.query.bindings, a = !1, o = 0; o < s.length; o++) {
						var i = s[o],
							c = void 0;
						switch (i.bindingType) {
							case 0:
								c = u.first;
								break;
							case 1:
								(c = u), (a = !0);
						}
						e[i.propName] = c;
					}
					a && u.notifyOnChanges();
				}
			}
			function Vr(l, n, u, e, t) {
				for (var r = n; r <= u; r++) {
					var s = l.def.nodes[r],
						a = s.matchedQueries[e.id];
					if ((null != a && t.push(Fr(l, s, a)), 1 & s.flags && s.element.template && (s.element.template.nodeMatchedQueries & e.filterId) === e.filterId)) {
						var o = Qe(l, r);
						if (((s.childMatchedQueries & e.filterId) === e.filterId && (Vr(l, r + 1, r + s.childCount, e, t), (r += s.childCount)), 16777216 & s.flags))
							for (var i = o.viewContainer._embeddedViews, c = 0; c < i.length; c++) {
								var p = i[c],
									h = ft(p);
								h && h === o && Vr(p, 0, p.def.nodes.length - 1, e, t);
							}
						var d = o.template._projectedViews;
						if (d)
							for (c = 0; c < d.length; c++) {
								var f = d[c];
								Vr(f, 0, f.def.nodes.length - 1, e, t);
							}
					}
					(s.childMatchedQueries & e.filterId) !== e.filterId && (r += s.childCount);
				}
				return t;
			}
			function Fr(l, n, u) {
				if (null != u)
					switch (u) {
						case 1:
							return Qe(l, n.nodeIndex).renderElement;
						case 0:
							return new Cn(Qe(l, n.nodeIndex).renderElement);
						case 2:
							return Qe(l, n.nodeIndex).template;
						case 3:
							return Qe(l, n.nodeIndex).viewContainer;
						case 4:
							return We(l, n.nodeIndex).instance;
					}
			}
			function zr(l, n) {
				return {
					nodeIndex: -1,
					parent: null,
					renderParent: null,
					bindingIndex: -1,
					outputIndex: -1,
					checkIndex: -1,
					flags: 8,
					childFlags: 0,
					directChildFlags: 0,
					childMatchedQueries: 0,
					matchedQueries: {},
					matchedQueryIds: 0,
					references: {},
					ngContentIndex: l,
					childCount: 0,
					bindings: [],
					bindingFlags: 0,
					outputs: [],
					element: null,
					provider: null,
					text: null,
					query: null,
					ngContent: { index: n }
				};
			}
			function Hr(l, n, u) {
				var e = _t(l, n, u);
				e && Et(l, u.ngContent.index, 1, e, null, void 0);
			}
			function Br(l, n) {
				for (var u = Object.keys(n), e = u.length, t = new Array(e), r = 0; r < e; r++) {
					var s = u[r];
					t[n[s]] = s;
				}
				return (function(l, n, u) {
					for (var e = new Array(u.length), t = 0; t < u.length; t++) {
						var r = u[t];
						e[t] = { flags: 8, name: r, ns: null, nonMinifiedName: r, securityContext: null, suffix: null };
					}
					return {
						nodeIndex: -1,
						parent: null,
						renderParent: null,
						bindingIndex: -1,
						outputIndex: -1,
						checkIndex: n,
						flags: 64,
						childFlags: 0,
						directChildFlags: 0,
						childMatchedQueries: 0,
						matchedQueries: {},
						matchedQueryIds: 0,
						references: {},
						ngContentIndex: -1,
						childCount: 0,
						bindings: e,
						bindingFlags: Mt(e),
						outputs: [],
						element: null,
						provider: null,
						text: null,
						query: null,
						ngContent: null
					};
				})(0, l, t);
			}
			function qr(l, n, u) {
				for (var e = new Array(u.length - 1), t = 1; t < u.length; t++) e[t - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: u[t] };
				return {
					nodeIndex: -1,
					parent: null,
					renderParent: null,
					bindingIndex: -1,
					outputIndex: -1,
					checkIndex: l,
					flags: 2,
					childFlags: 0,
					directChildFlags: 0,
					childMatchedQueries: 0,
					matchedQueries: {},
					matchedQueryIds: 0,
					references: {},
					ngContentIndex: n,
					childCount: 0,
					bindings: e,
					bindingFlags: 8,
					outputs: [],
					element: null,
					provider: null,
					text: { prefix: u[0] },
					query: null,
					ngContent: null
				};
			}
			function Gr(l, n, u) {
				var e,
					t = l.renderer;
				e = t.createText(u.text.prefix);
				var r = _t(l, n, u);
				return r && t.appendChild(r, e), { renderText: e };
			}
			function Zr(l, n) {
				return (null != l ? l.toString() : '') + n.suffix;
			}
			function Qr(l, n, u, e) {
				for (var t = 0, r = 0, s = 0, a = 0, o = 0, i = null, c = null, p = !1, h = !1, d = null, f = 0; f < n.length; f++) {
					var g = n[f];
					if (((g.nodeIndex = f), (g.parent = i), (g.bindingIndex = t), (g.outputIndex = r), (g.renderParent = c), (s |= g.flags), (o |= g.matchedQueryIds), g.element)) {
						var m = g.element;
						(m.publicProviders = i ? i.element.publicProviders : Object.create(null)),
							(m.allProviders = m.publicProviders),
							(p = !1),
							(h = !1),
							g.element.template && (o |= g.element.template.nodeMatchedQueries);
					}
					if ((Kr(i, g, n.length), (t += g.bindings.length), (r += g.outputs.length), !c && 3 & g.flags && (d = g), 20224 & g.flags)) {
						p || ((p = !0), (i.element.publicProviders = Object.create(i.element.publicProviders)), (i.element.allProviders = i.element.publicProviders));
						var b = 0 != (32768 & g.flags);
						0 == (8192 & g.flags) || b
							? (i.element.publicProviders[et(g.provider.token)] = g)
							: (h || ((h = !0), (i.element.allProviders = Object.create(i.element.publicProviders))), (i.element.allProviders[et(g.provider.token)] = g)),
							b && (i.element.componentProvider = g);
					}
					if (
						(i
							? ((i.childFlags |= g.flags),
							  (i.directChildFlags |= g.flags),
							  (i.childMatchedQueries |= g.matchedQueryIds),
							  g.element && g.element.template && (i.childMatchedQueries |= g.element.template.nodeMatchedQueries))
							: (a |= g.flags),
						g.childCount > 0)
					)
						(i = g), Wr(g) || (c = g);
					else
						for (; i && f === i.nodeIndex + i.childCount; ) {
							var y = i.parent;
							y && ((y.childFlags |= i.childFlags), (y.childMatchedQueries |= i.childMatchedQueries)), (c = (i = y) && Wr(i) ? i.renderParent : i);
						}
				}
				return {
					factory: null,
					nodeFlags: s,
					rootNodeFlags: a,
					nodeMatchedQueries: o,
					flags: l,
					nodes: n,
					updateDirectives: u || nt,
					updateRenderer: e || nt,
					handleEvent: function(l, u, e, t) {
						return n[u].element.handleEvent(l, e, t);
					},
					bindingCount: t,
					outputCount: r,
					lastRenderRootNode: d
				};
			}
			function Wr(l) {
				return 0 != (1 & l.flags) && null === l.element.name;
			}
			function Kr(l, n, u) {
				var e = n.element && n.element.template;
				if (e) {
					if (!e.lastRenderRootNode) throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
					if (e.lastRenderRootNode && 16777216 & e.lastRenderRootNode.flags)
						throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + n.nodeIndex + '!');
				}
				if (20224 & n.flags && 0 == (1 & (l ? l.flags : 0)))
					throw new Error('Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ' + n.nodeIndex + '!');
				if (n.query) {
					if (67108864 & n.flags && (!l || 0 == (16384 & l.flags))) throw new Error('Illegal State: Content Query nodes need to be children of directives, at index ' + n.nodeIndex + '!');
					if (134217728 & n.flags && l) throw new Error('Illegal State: View Query nodes have to be top level nodes, at index ' + n.nodeIndex + '!');
				}
				if (n.childCount) {
					var t = l ? l.nodeIndex + l.childCount : u - 1;
					if (n.nodeIndex <= t && n.nodeIndex + n.childCount > t) throw new Error('Illegal State: childCount of node leads outside of parent, at index ' + n.nodeIndex + '!');
				}
			}
			function Yr(l, n, u, e) {
				var t = Xr(l.root, l.renderer, l, n, u);
				return ls(t, l.component, e), ns(t), t;
			}
			function Jr(l, n, u) {
				var e = Xr(l, l.renderer, null, null, n);
				return ls(e, u, u), ns(e), e;
			}
			function $r(l, n, u, e) {
				var t,
					r = n.element.componentRendererType;
				return (t = r ? l.root.rendererFactory.createRenderer(e, r) : l.root.renderer), Xr(l.root, t, l, n.element.componentProvider, u);
			}
			function Xr(l, n, u, e, t) {
				var r = new Array(t.nodes.length),
					s = t.outputCount ? new Array(t.outputCount) : null;
				return {
					def: t,
					parent: u,
					viewContainerParent: null,
					parentNodeDef: e,
					context: null,
					component: null,
					nodes: r,
					state: 13,
					root: l,
					renderer: n,
					oldValues: new Array(t.bindingCount),
					disposables: s,
					initIndex: -1
				};
			}
			function ls(l, n, u) {
				(l.component = n), (l.context = u);
			}
			function ns(l) {
				var n;
				bt(l) && (n = Qe(l.parent, l.parentNodeDef.parent.nodeIndex).renderElement);
				for (var u = l.def, e = l.nodes, t = 0; t < u.nodes.length; t++) {
					var r = u.nodes[t];
					Je.setCurrentNode(l, t);
					var s = void 0;
					switch (201347067 & r.flags) {
						case 1:
							var a = Nt(l, n, r),
								o = void 0;
							if (33554432 & r.flags) {
								var i = kt(r.element.componentView);
								o = Je.createComponentView(l, r, i, a);
							}
							Dt(l, o, r, a),
								(s = { renderElement: a, componentView: o, viewContainer: null, template: r.element.template ? rr(l, r) : void 0 }),
								16777216 & r.flags && (s.viewContainer = nr(l, r, s));
							break;
						case 2:
							s = Gr(l, n, r);
							break;
						case 512:
						case 1024:
						case 2048:
						case 256:
							(s = e[t]) || 4096 & r.flags || (s = { instance: xr(l, r) });
							break;
						case 16:
							s = { instance: kr(l, r) };
							break;
						case 16384:
							(s = e[t]) || (s = { instance: Cr(l, r) }), 32768 & r.flags && ls(Qe(l, r.parent.nodeIndex).componentView, s.instance, s.instance);
							break;
						case 32:
						case 64:
						case 128:
							s = { value: void 0 };
							break;
						case 67108864:
						case 134217728:
							s = new oe();
							break;
						case 8:
							Hr(l, n, r), (s = void 0);
					}
					e[t] = s;
				}
				cs(l, is.CreateViewNodes), fs(l, 201326592, 268435456, 0);
			}
			function us(l) {
				rs(l), Je.updateDirectives(l, 1), ps(l, is.CheckNoChanges), Je.updateRenderer(l, 1), cs(l, is.CheckNoChanges), (l.state &= -97);
			}
			function es(l) {
				1 & l.state ? ((l.state &= -2), (l.state |= 2)) : (l.state &= -3), qe(l, 0, 256), rs(l), Je.updateDirectives(l, 0), ps(l, is.CheckAndUpdate), fs(l, 67108864, 536870912, 0);
				var n = qe(l, 256, 512);
				Rr(l, 2097152 | (n ? 1048576 : 0)),
					Je.updateRenderer(l, 0),
					cs(l, is.CheckAndUpdate),
					fs(l, 134217728, 536870912, 0),
					Rr(l, 8388608 | ((n = qe(l, 512, 768)) ? 4194304 : 0)),
					2 & l.def.flags && (l.state &= -9),
					(l.state &= -97),
					qe(l, 768, 1024);
			}
			function ts(l, n, u, e, t, r, s, a, o, i, p, h, d) {
				return 0 === u
					? (function(l, n, u, e, t, r, s, a, o, i, c, p) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = n.bindings.length,
											d = !1;
										return (
											h > 0 && Lt(l, n, 0, u) && (d = !0),
											h > 1 && Lt(l, n, 1, e) && (d = !0),
											h > 2 && Lt(l, n, 2, t) && (d = !0),
											h > 3 && Lt(l, n, 3, r) && (d = !0),
											h > 4 && Lt(l, n, 4, s) && (d = !0),
											h > 5 && Lt(l, n, 5, a) && (d = !0),
											h > 6 && Lt(l, n, 6, o) && (d = !0),
											h > 7 && Lt(l, n, 7, i) && (d = !0),
											h > 8 && Lt(l, n, 8, c) && (d = !0),
											h > 9 && Lt(l, n, 9, p) && (d = !0),
											d
										);
									})(l, n, u, e, t, r, s, a, o, i, c, p);
								case 2:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = !1,
											d = n.bindings,
											f = d.length;
										if (
											(f > 0 && it(l, n, 0, u) && (h = !0),
											f > 1 && it(l, n, 1, e) && (h = !0),
											f > 2 && it(l, n, 2, t) && (h = !0),
											f > 3 && it(l, n, 3, r) && (h = !0),
											f > 4 && it(l, n, 4, s) && (h = !0),
											f > 5 && it(l, n, 5, a) && (h = !0),
											f > 6 && it(l, n, 6, o) && (h = !0),
											f > 7 && it(l, n, 7, i) && (h = !0),
											f > 8 && it(l, n, 8, c) && (h = !0),
											f > 9 && it(l, n, 9, p) && (h = !0),
											h)
										) {
											var g = n.text.prefix;
											f > 0 && (g += Zr(u, d[0])),
												f > 1 && (g += Zr(e, d[1])),
												f > 2 && (g += Zr(t, d[2])),
												f > 3 && (g += Zr(r, d[3])),
												f > 4 && (g += Zr(s, d[4])),
												f > 5 && (g += Zr(a, d[5])),
												f > 6 && (g += Zr(o, d[6])),
												f > 7 && (g += Zr(i, d[7])),
												f > 8 && (g += Zr(c, d[8])),
												f > 9 && (g += Zr(p, d[9]));
											var m = Ze(l, n.nodeIndex).renderText;
											l.renderer.setValue(m, g);
										}
										return h;
									})(l, n, u, e, t, r, s, a, o, i, c, p);
								case 16384:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = We(l, n.nodeIndex),
											d = h.instance,
											f = !1,
											g = void 0,
											m = n.bindings.length;
										return (
											m > 0 && ot(l, n, 0, u) && ((f = !0), (g = Mr(l, h, n, 0, u, g))),
											m > 1 && ot(l, n, 1, e) && ((f = !0), (g = Mr(l, h, n, 1, e, g))),
											m > 2 && ot(l, n, 2, t) && ((f = !0), (g = Mr(l, h, n, 2, t, g))),
											m > 3 && ot(l, n, 3, r) && ((f = !0), (g = Mr(l, h, n, 3, r, g))),
											m > 4 && ot(l, n, 4, s) && ((f = !0), (g = Mr(l, h, n, 4, s, g))),
											m > 5 && ot(l, n, 5, a) && ((f = !0), (g = Mr(l, h, n, 5, a, g))),
											m > 6 && ot(l, n, 6, o) && ((f = !0), (g = Mr(l, h, n, 6, o, g))),
											m > 7 && ot(l, n, 7, i) && ((f = !0), (g = Mr(l, h, n, 7, i, g))),
											m > 8 && ot(l, n, 8, c) && ((f = !0), (g = Mr(l, h, n, 8, c, g))),
											m > 9 && ot(l, n, 9, p) && ((f = !0), (g = Mr(l, h, n, 9, p, g))),
											g && d.ngOnChanges(g),
											65536 & n.flags && Ge(l, 256, n.nodeIndex) && d.ngOnInit(),
											262144 & n.flags && d.ngDoCheck(),
											f
										);
									})(l, n, u, e, t, r, s, a, o, i, c, p);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = n.bindings,
											d = !1,
											f = h.length;
										if (
											(f > 0 && it(l, n, 0, u) && (d = !0),
											f > 1 && it(l, n, 1, e) && (d = !0),
											f > 2 && it(l, n, 2, t) && (d = !0),
											f > 3 && it(l, n, 3, r) && (d = !0),
											f > 4 && it(l, n, 4, s) && (d = !0),
											f > 5 && it(l, n, 5, a) && (d = !0),
											f > 6 && it(l, n, 6, o) && (d = !0),
											f > 7 && it(l, n, 7, i) && (d = !0),
											f > 8 && it(l, n, 8, c) && (d = !0),
											f > 9 && it(l, n, 9, p) && (d = !0),
											d)
										) {
											var g = Ke(l, n.nodeIndex),
												m = void 0;
											switch (201347067 & n.flags) {
												case 32:
													(m = new Array(h.length)),
														f > 0 && (m[0] = u),
														f > 1 && (m[1] = e),
														f > 2 && (m[2] = t),
														f > 3 && (m[3] = r),
														f > 4 && (m[4] = s),
														f > 5 && (m[5] = a),
														f > 6 && (m[6] = o),
														f > 7 && (m[7] = i),
														f > 8 && (m[8] = c),
														f > 9 && (m[9] = p);
													break;
												case 64:
													(m = {}),
														f > 0 && (m[h[0].name] = u),
														f > 1 && (m[h[1].name] = e),
														f > 2 && (m[h[2].name] = t),
														f > 3 && (m[h[3].name] = r),
														f > 4 && (m[h[4].name] = s),
														f > 5 && (m[h[5].name] = a),
														f > 6 && (m[h[6].name] = o),
														f > 7 && (m[h[7].name] = i),
														f > 8 && (m[h[8].name] = c),
														f > 9 && (m[h[9].name] = p);
													break;
												case 128:
													var b = u;
													switch (f) {
														case 1:
															m = b.transform(u);
															break;
														case 2:
															m = b.transform(e);
															break;
														case 3:
															m = b.transform(e, t);
															break;
														case 4:
															m = b.transform(e, t, r);
															break;
														case 5:
															m = b.transform(e, t, r, s);
															break;
														case 6:
															m = b.transform(e, t, r, s, a);
															break;
														case 7:
															m = b.transform(e, t, r, s, a, o);
															break;
														case 8:
															m = b.transform(e, t, r, s, a, o, i);
															break;
														case 9:
															m = b.transform(e, t, r, s, a, o, i, c);
															break;
														case 10:
															m = b.transform(e, t, r, s, a, o, i, c, p);
													}
											}
											g.value = m;
										}
										return d;
									})(l, n, u, e, t, r, s, a, o, i, c, p);
								default:
									throw 'unreachable';
							}
					  })(l, n, e, t, r, s, a, o, i, p, h, d)
					: (function(l, n, u) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u) {
										for (var e = !1, t = 0; t < u.length; t++) Lt(l, n, t, u[t]) && (e = !0);
										return e;
									})(l, n, u);
								case 2:
									return (function(l, n, u) {
										for (var e = n.bindings, t = !1, r = 0; r < u.length; r++) it(l, n, r, u[r]) && (t = !0);
										if (t) {
											var s = '';
											for (r = 0; r < u.length; r++) s += Zr(u[r], e[r]);
											s = n.text.prefix + s;
											var a = Ze(l, n.nodeIndex).renderText;
											l.renderer.setValue(a, s);
										}
										return t;
									})(l, n, u);
								case 16384:
									return (function(l, n, u) {
										for (var e = We(l, n.nodeIndex), t = e.instance, r = !1, s = void 0, a = 0; a < u.length; a++) ot(l, n, a, u[a]) && ((r = !0), (s = Mr(l, e, n, a, u[a], s)));
										return s && t.ngOnChanges(s), 65536 & n.flags && Ge(l, 256, n.nodeIndex) && t.ngOnInit(), 262144 & n.flags && t.ngDoCheck(), r;
									})(l, n, u);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u) {
										for (var e = n.bindings, t = !1, r = 0; r < u.length; r++) it(l, n, r, u[r]) && (t = !0);
										if (t) {
											var s = Ke(l, n.nodeIndex),
												a = void 0;
											switch (201347067 & n.flags) {
												case 32:
													a = u;
													break;
												case 64:
													for (a = {}, r = 0; r < u.length; r++) a[e[r].name] = u[r];
													break;
												case 128:
													var o = u[0],
														i = u.slice(1);
													a = o.transform.apply(o, c(i));
											}
											s.value = a;
										}
										return t;
									})(l, n, u);
								default:
									throw 'unreachable';
							}
					  })(l, n, e);
			}
			function rs(l) {
				var n = l.def;
				if (4 & n.nodeFlags)
					for (var u = 0; u < n.nodes.length; u++) {
						var e = n.nodes[u];
						if (4 & e.flags) {
							var t = Qe(l, u).template._projectedViews;
							if (t)
								for (var r = 0; r < t.length; r++) {
									var s = t[r];
									(s.state |= 32), ht(s, l);
								}
						} else 0 == (4 & e.childFlags) && (u += e.childCount);
					}
			}
			function ss(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				return (
					0 === u
						? (function(l, n, u, e, t, r, s, a, o, i, c, p) {
								var h = n.bindings.length;
								h > 0 && ct(l, n, 0, u),
									h > 1 && ct(l, n, 1, e),
									h > 2 && ct(l, n, 2, t),
									h > 3 && ct(l, n, 3, r),
									h > 4 && ct(l, n, 4, s),
									h > 5 && ct(l, n, 5, a),
									h > 6 && ct(l, n, 6, o),
									h > 7 && ct(l, n, 7, i),
									h > 8 && ct(l, n, 8, c),
									h > 9 && ct(l, n, 9, p);
						  })(l, n, e, t, r, s, a, o, i, c, p, h)
						: (function(l, n, u) {
								for (var e = 0; e < u.length; e++) ct(l, n, e, u[e]);
						  })(l, n, e),
					!1
				);
			}
			function as(l, n) {
				if (Ye(l, n.nodeIndex).dirty) throw $e(Je.createDebugContext(l, n.nodeIndex), 'Query ' + n.query.id + ' not dirty', 'Query ' + n.query.id + ' dirty', 0 != (1 & l.state));
			}
			function os(l) {
				if (!(128 & l.state)) {
					if ((ps(l, is.Destroy), cs(l, is.Destroy), Rr(l, 131072), l.disposables)) for (var n = 0; n < l.disposables.length; n++) l.disposables[n]();
					!(function(l) {
						if (16 & l.state) {
							var n = ft(l);
							if (n) {
								var u = n.template._projectedViews;
								u && (Yt(u, u.indexOf(l)), Je.dirtyParentQueries(l));
							}
						}
					})(l),
						l.renderer.destroyNode &&
							(function(l) {
								for (var n = l.def.nodes.length, u = 0; u < n; u++) {
									var e = l.def.nodes[u];
									1 & e.flags
										? l.renderer.destroyNode(Qe(l, u).renderElement)
										: 2 & e.flags
										? l.renderer.destroyNode(Ze(l, u).renderText)
										: (67108864 & e.flags || 134217728 & e.flags) && Ye(l, u).destroy();
								}
							})(l),
						bt(l) && l.renderer.destroy(),
						(l.state |= 128);
				}
			}
			var is = (function(l) {
				return (
					(l[(l.CreateViewNodes = 0)] = 'CreateViewNodes'),
					(l[(l.CheckNoChanges = 1)] = 'CheckNoChanges'),
					(l[(l.CheckNoChangesProjectedViews = 2)] = 'CheckNoChangesProjectedViews'),
					(l[(l.CheckAndUpdate = 3)] = 'CheckAndUpdate'),
					(l[(l.CheckAndUpdateProjectedViews = 4)] = 'CheckAndUpdateProjectedViews'),
					(l[(l.Destroy = 5)] = 'Destroy'),
					l
				);
			})({});
			function cs(l, n) {
				var u = l.def;
				if (33554432 & u.nodeFlags)
					for (var e = 0; e < u.nodes.length; e++) {
						var t = u.nodes[e];
						33554432 & t.flags ? hs(Qe(l, e).componentView, n) : 0 == (33554432 & t.childFlags) && (e += t.childCount);
					}
			}
			function ps(l, n) {
				var u = l.def;
				if (16777216 & u.nodeFlags)
					for (var e = 0; e < u.nodes.length; e++) {
						var t = u.nodes[e];
						if (16777216 & t.flags) for (var r = Qe(l, e).viewContainer._embeddedViews, s = 0; s < r.length; s++) hs(r[s], n);
						else 0 == (16777216 & t.childFlags) && (e += t.childCount);
					}
			}
			function hs(l, n) {
				var u = l.state;
				switch (n) {
					case is.CheckNoChanges:
						0 == (128 & u) && (12 == (12 & u) ? us(l) : 64 & u && ds(l, is.CheckNoChangesProjectedViews));
						break;
					case is.CheckNoChangesProjectedViews:
						0 == (128 & u) && (32 & u ? us(l) : 64 & u && ds(l, n));
						break;
					case is.CheckAndUpdate:
						0 == (128 & u) && (12 == (12 & u) ? es(l) : 64 & u && ds(l, is.CheckAndUpdateProjectedViews));
						break;
					case is.CheckAndUpdateProjectedViews:
						0 == (128 & u) && (32 & u ? es(l) : 64 & u && ds(l, n));
						break;
					case is.Destroy:
						os(l);
						break;
					case is.CreateViewNodes:
						ns(l);
				}
			}
			function ds(l, n) {
				ps(l, n), cs(l, n);
			}
			function fs(l, n, u, e) {
				if (l.def.nodeFlags & n && l.def.nodeFlags & u)
					for (var t = l.def.nodes.length, r = 0; r < t; r++) {
						var s = l.def.nodes[r];
						if (s.flags & n && s.flags & u)
							switch ((Je.setCurrentNode(l, s.nodeIndex), e)) {
								case 0:
									Lr(l, s);
									break;
								case 1:
									as(l, s);
							}
						(s.childFlags & n && s.childFlags & u) || (r += s.childCount);
					}
			}
			var gs = !1;
			function ms(l, n, u, e, t, r) {
				var s = t.injector.get(Pn);
				return Jr(ys(l, t, s, n, u), e, r);
			}
			function bs(l, n, u, e, t, r) {
				var s = t.injector.get(Pn),
					a = ys(l, t, new Ys(s), n, u),
					o = Ps(e);
				return Ws(Us.create, Jr, null, [a, o, r]);
			}
			function ys(l, n, u, e, t) {
				var r = n.injector.get(Rn),
					s = n.injector.get(bu),
					a = u.createRenderer(null, null);
				return { ngModule: n, injector: l, projectableNodes: e, selectorOrNode: t, sanitizer: r, rendererFactory: u, renderer: a, errorHandler: s };
			}
			function vs(l, n, u, e) {
				var t = Ps(u);
				return Ws(Us.create, Yr, null, [l, n, t, e]);
			}
			function ws(l, n, u, e) {
				return (u = ks.get(n.element.componentProvider.provider.token) || Ps(u)), Ws(Us.create, $r, null, [l, n, u, e]);
			}
			function js(l, n, u, e) {
				return hr(
					l,
					n,
					u,
					(function(l) {
						var n = (function(l) {
								var n = !1,
									u = !1;
								return 0 === _s.size
									? { hasOverrides: n, hasDeprecatedOverrides: u }
									: (l.providers.forEach(function(l) {
											var e = _s.get(l.token);
											3840 & l.flags && e && ((n = !0), (u = u || e.deprecatedBehavior));
									  }),
									  l.modules.forEach(function(l) {
											xs.forEach(function(e, t) {
												fl(t).providedIn === l && ((n = !0), (u = u || e.deprecatedBehavior));
											});
									  }),
									  { hasOverrides: n, hasDeprecatedOverrides: u });
							})(l),
							u = n.hasDeprecatedOverrides;
						return n.hasOverrides
							? ((function(l) {
									for (var n = 0; n < l.providers.length; n++) {
										var e = l.providers[n];
										u && (e.flags |= 4096);
										var t = _s.get(e.token);
										t && ((e.flags = (-3841 & e.flags) | t.flags), (e.deps = jt(t.deps)), (e.value = t.value));
									}
									if (xs.size > 0) {
										var r = new Set(l.modules);
										xs.forEach(function(n, e) {
											if (r.has(fl(e).providedIn)) {
												var t = { token: e, flags: n.flags | (u ? 4096 : 0), deps: jt(n.deps), value: n.value, index: l.providers.length };
												l.providers.push(t), (l.providersByKey[et(e)] = t);
											}
										});
									}
							  })(
									(l = l.factory(function() {
										return nt;
									}))
							  ),
							  l)
							: l;
					})(e)
				);
			}
			var _s = new Map(),
				xs = new Map(),
				ks = new Map();
			function Cs(l) {
				var n;
				_s.set(l.token, l), 'function' == typeof l.token && (n = fl(l.token)) && 'function' == typeof n.providedIn && xs.set(l.token, l);
			}
			function Ss(l, n) {
				var u = kt(n.viewDefFactory),
					e = kt(u.nodes[0].element.componentView);
				ks.set(l, e);
			}
			function Es() {
				_s.clear(), xs.clear(), ks.clear();
			}
			function Ps(l) {
				if (0 === _s.size) return l;
				var n = (function(l) {
					for (var n = [], u = null, e = 0; e < l.nodes.length; e++) {
						var t = l.nodes[e];
						1 & t.flags && (u = t), u && 3840 & t.flags && _s.has(t.provider.token) && (n.push(u.nodeIndex), (u = null));
					}
					return n;
				})(l);
				if (0 === n.length) return l;
				l = l.factory(function() {
					return nt;
				});
				for (var u = 0; u < n.length; u++) e(l, n[u]);
				return l;
				function e(l, n) {
					for (var u = n + 1; u < l.nodes.length; u++) {
						var e = l.nodes[u];
						if (1 & e.flags) return;
						if (3840 & e.flags) {
							var t = e.provider,
								r = _s.get(t.token);
							r && ((e.flags = (-3841 & e.flags) | r.flags), (t.deps = jt(r.deps)), (t.value = r.value));
						}
					}
				}
			}
			function Is(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				var d = l.def.nodes[n];
				return ts(l, d, u, e, t, r, s, a, o, i, c, p, h), 224 & d.flags ? Ke(l, n).value : void 0;
			}
			function Os(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				var d = l.def.nodes[n];
				return ss(l, d, u, e, t, r, s, a, o, i, c, p, h), 224 & d.flags ? Ke(l, n).value : void 0;
			}
			function Ts(l) {
				return Ws(Us.detectChanges, es, null, [l]);
			}
			function Ms(l) {
				return Ws(Us.checkNoChanges, us, null, [l]);
			}
			function Rs(l) {
				return Ws(Us.destroy, os, null, [l]);
			}
			var As,
				Ns,
				Ds,
				Us = (function(l) {
					return (
						(l[(l.create = 0)] = 'create'),
						(l[(l.detectChanges = 1)] = 'detectChanges'),
						(l[(l.checkNoChanges = 2)] = 'checkNoChanges'),
						(l[(l.destroy = 3)] = 'destroy'),
						(l[(l.handleEvent = 4)] = 'handleEvent'),
						l
					);
				})({});
			function Ls(l, n) {
				(Ns = l), (Ds = n);
			}
			function Vs(l, n, u, e) {
				return Ls(l, n), Ws(Us.handleEvent, l.def.handleEvent, null, [l, n, u, e]);
			}
			function Fs(l, n) {
				if (128 & l.state) throw lt(Us[As]);
				return (
					Ls(l, qs(l, 0)),
					l.def.updateDirectives(function(l, u, e) {
						for (var t = [], r = 3; r < arguments.length; r++) t[r - 3] = arguments[r];
						var s = l.def.nodes[u];
						return 0 === n ? Hs(l, s, e, t) : Bs(l, s, e, t), 16384 & s.flags && Ls(l, qs(l, u)), 224 & s.flags ? Ke(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function zs(l, n) {
				if (128 & l.state) throw lt(Us[As]);
				return (
					Ls(l, Gs(l, 0)),
					l.def.updateRenderer(function(l, u, e) {
						for (var t = [], r = 3; r < arguments.length; r++) t[r - 3] = arguments[r];
						var s = l.def.nodes[u];
						return 0 === n ? Hs(l, s, e, t) : Bs(l, s, e, t), 3 & s.flags && Ls(l, Gs(l, u)), 224 & s.flags ? Ke(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function Hs(l, n, u, e) {
				if (ts.apply(void 0, c([l, n, u], e))) {
					var t = 1 === u ? e[0] : e;
					if (16384 & n.flags) {
						for (var r = {}, s = 0; s < n.bindings.length; s++) {
							var a = n.bindings[s],
								o = t[s];
							8 & a.flags &&
								(r[
									((d = a.nonMinifiedName),
									'ng-reflect-' +
										d.replace(/[$@]/g, '_').replace(zl, function() {
											for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
											return '-' + l[1].toLowerCase();
										}))
								] = Hl(o));
						}
						var i = n.parent,
							p = Qe(l, i.nodeIndex).renderElement;
						if (i.element.name) for (var h in r) null != (o = r[h]) ? l.renderer.setAttribute(p, h, o) : l.renderer.removeAttribute(p, h);
						else l.renderer.setValue(p, 'bindings=' + JSON.stringify(r, null, 2));
					}
				}
				var d;
			}
			function Bs(l, n, u, e) {
				ss.apply(void 0, c([l, n, u], e));
			}
			function qs(l, n) {
				for (var u = n; u < l.def.nodes.length; u++) {
					var e = l.def.nodes[u];
					if (16384 & e.flags && e.bindings && e.bindings.length) return u;
				}
				return null;
			}
			function Gs(l, n) {
				for (var u = n; u < l.def.nodes.length; u++) {
					var e = l.def.nodes[u];
					if (3 & e.flags && e.bindings && e.bindings.length) return u;
				}
				return null;
			}
			var Zs = (function() {
				function l(l, n) {
					(this.view = l), (this.nodeIndex = n), null == n && (this.nodeIndex = n = 0), (this.nodeDef = l.def.nodes[n]);
					for (var u = this.nodeDef, e = l; u && 0 == (1 & u.flags); ) u = u.parent;
					if (!u) for (; !u && e; ) (u = gt(e)), (e = e.parent);
					(this.elDef = u), (this.elView = e);
				}
				return (
					Object.defineProperty(l.prototype, 'elOrCompView', {
						get: function() {
							return Qe(this.elView, this.elDef.nodeIndex).componentView || this.view;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return ar(this.elView, this.elDef);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'component', {
						get: function() {
							return this.elOrCompView.component;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'context', {
						get: function() {
							return this.elOrCompView.context;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'providerTokens', {
						get: function() {
							var l = [];
							if (this.elDef)
								for (var n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
									var u = this.elView.def.nodes[n];
									20224 & u.flags && l.push(u.provider.token), (n += u.childCount);
								}
							return l;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'references', {
						get: function() {
							var l = {};
							if (this.elDef) {
								Qs(this.elView, this.elDef, l);
								for (var n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
									var u = this.elView.def.nodes[n];
									20224 & u.flags && Qs(this.elView, u, l), (n += u.childCount);
								}
							}
							return l;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'componentRenderElement', {
						get: function() {
							var l = (function(l) {
								for (; l && !bt(l); ) l = l.parent;
								return l.parent ? Qe(l.parent, gt(l).nodeIndex) : null;
							})(this.elOrCompView);
							return l ? l.renderElement : void 0;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'renderNode', {
						get: function() {
							return 2 & this.nodeDef.flags ? mt(this.view, this.nodeDef) : mt(this.elView, this.elDef);
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.logError = function(l) {
						for (var n, u, e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
						2 & this.nodeDef.flags ? ((n = this.view.def), (u = this.nodeDef.nodeIndex)) : ((n = this.elView.def), (u = this.elDef.nodeIndex));
						var r = (function(l, n) {
								for (var u = -1, e = 0; e <= n; e++) 3 & l.nodes[e].flags && u++;
								return u;
							})(n, u),
							s = -1;
						n.factory(function() {
							var n;
							return ++s === r ? (n = l.error).bind.apply(n, c([l], e)) : nt;
						}),
							s < r && (l.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), l.error.apply(l, c(e)));
					}),
					l
				);
			})();
			function Qs(l, n, u) {
				for (var e in n.references) u[e] = Fr(l, n, n.references[e]);
			}
			function Ws(l, n, u, e) {
				var t = As,
					r = Ns,
					s = Ds;
				try {
					As = l;
					var a = n.apply(u, e);
					return (Ns = r), (Ds = s), (As = t), a;
				} catch (o) {
					if (fu(o) || !Ns) throw o;
					throw (function(l, n) {
						return l instanceof Error || (l = new Error(l.toString())), Xe(l, n), l;
					})(o, Ks());
				}
			}
			function Ks() {
				return Ns ? new Zs(Ns, Ds) : null;
			}
			var Ys = (function() {
					function l(l) {
						this.delegate = l;
					}
					return (
						(l.prototype.createRenderer = function(l, n) {
							return new Js(this.delegate.createRenderer(l, n));
						}),
						(l.prototype.begin = function() {
							this.delegate.begin && this.delegate.begin();
						}),
						(l.prototype.end = function() {
							this.delegate.end && this.delegate.end();
						}),
						(l.prototype.whenRenderingDone = function() {
							return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null);
						}),
						l
					);
				})(),
				Js = (function() {
					function l(l) {
						(this.delegate = l), (this.debugContextFactory = Ks), (this.data = this.delegate.data);
					}
					return (
						(l.prototype.createDebugContext = function(l) {
							return this.debugContextFactory(l);
						}),
						(l.prototype.destroyNode = function(l) {
							!(function(l) {
								we.delete(l.nativeNode);
							})(je(l)),
								this.delegate.destroyNode && this.delegate.destroyNode(l);
						}),
						(l.prototype.destroy = function() {
							this.delegate.destroy();
						}),
						(l.prototype.createElement = function(l, n) {
							var u = this.delegate.createElement(l, n),
								e = this.createDebugContext(u);
							if (e) {
								var t = new ve(u, null, e);
								(t.name = l), _e(t);
							}
							return u;
						}),
						(l.prototype.createComment = function(l) {
							var n = this.delegate.createComment(l),
								u = this.createDebugContext(n);
							return u && _e(new ye(n, null, u)), n;
						}),
						(l.prototype.createText = function(l) {
							var n = this.delegate.createText(l),
								u = this.createDebugContext(n);
							return u && _e(new ye(n, null, u)), n;
						}),
						(l.prototype.appendChild = function(l, n) {
							var u = je(l),
								e = je(n);
							u && e && u instanceof ve && u.addChild(e), this.delegate.appendChild(l, n);
						}),
						(l.prototype.insertBefore = function(l, n, u) {
							var e = je(l),
								t = je(n),
								r = je(u);
							e && t && e instanceof ve && e.insertBefore(r, t), this.delegate.insertBefore(l, n, u);
						}),
						(l.prototype.removeChild = function(l, n) {
							var u = je(l),
								e = je(n);
							u && e && u instanceof ve && u.removeChild(e), this.delegate.removeChild(l, n);
						}),
						(l.prototype.selectRootElement = function(l, n) {
							var u = this.delegate.selectRootElement(l, n),
								e = Ks();
							return e && _e(new ve(u, null, e)), u;
						}),
						(l.prototype.setAttribute = function(l, n, u, e) {
							var t = je(l);
							t && t instanceof ve && (t.attributes[e ? e + ':' + n : n] = u), this.delegate.setAttribute(l, n, u, e);
						}),
						(l.prototype.removeAttribute = function(l, n, u) {
							var e = je(l);
							e && e instanceof ve && (e.attributes[u ? u + ':' + n : n] = null), this.delegate.removeAttribute(l, n, u);
						}),
						(l.prototype.addClass = function(l, n) {
							var u = je(l);
							u && u instanceof ve && (u.classes[n] = !0), this.delegate.addClass(l, n);
						}),
						(l.prototype.removeClass = function(l, n) {
							var u = je(l);
							u && u instanceof ve && (u.classes[n] = !1), this.delegate.removeClass(l, n);
						}),
						(l.prototype.setStyle = function(l, n, u, e) {
							var t = je(l);
							t && t instanceof ve && (t.styles[n] = u), this.delegate.setStyle(l, n, u, e);
						}),
						(l.prototype.removeStyle = function(l, n, u) {
							var e = je(l);
							e && e instanceof ve && (e.styles[n] = null), this.delegate.removeStyle(l, n, u);
						}),
						(l.prototype.setProperty = function(l, n, u) {
							var e = je(l);
							e && e instanceof ve && (e.properties[n] = u), this.delegate.setProperty(l, n, u);
						}),
						(l.prototype.listen = function(l, n, u) {
							if ('string' != typeof l) {
								var e = je(l);
								e && e.listeners.push(new be(n, u));
							}
							return this.delegate.listen(l, n, u);
						}),
						(l.prototype.parentNode = function(l) {
							return this.delegate.parentNode(l);
						}),
						(l.prototype.nextSibling = function(l) {
							return this.delegate.nextSibling(l);
						}),
						(l.prototype.setValue = function(l, n) {
							return this.delegate.setValue(l, n);
						}),
						l
					);
				})();
			function $s(l, n, u) {
				return new Xs(l, n, u);
			}
			var Xs = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t.moduleType = n), (t._bootstrapComponents = u), (t._ngModuleDefFactory = e), t;
					}
					return (
						t(n, l),
						(n.prototype.create = function(l) {
							!(function() {
								if (!gs) {
									gs = !0;
									var l = Un()
										? {
												setCurrentNode: Ls,
												createRootView: bs,
												createEmbeddedView: vs,
												createComponentView: ws,
												createNgModuleRef: js,
												overrideProvider: Cs,
												overrideComponentView: Ss,
												clearOverrides: Es,
												checkAndUpdateView: Ts,
												checkNoChangesView: Ms,
												destroyView: Rs,
												createDebugContext: function(l, n) {
													return new Zs(l, n);
												},
												handleEvent: Vs,
												updateDirectives: Fs,
												updateRenderer: zs
										  }
										: {
												setCurrentNode: function() {},
												createRootView: ms,
												createEmbeddedView: Yr,
												createComponentView: $r,
												createNgModuleRef: hr,
												overrideProvider: nt,
												overrideComponentView: nt,
												clearOverrides: nt,
												checkAndUpdateView: es,
												checkNoChangesView: us,
												destroyView: os,
												createDebugContext: function(l, n) {
													return new Zs(l, n);
												},
												handleEvent: function(l, n, u, e) {
													return l.def.handleEvent(l, n, u, e);
												},
												updateDirectives: function(l, n) {
													return l.def.updateDirectives(0 === n ? Is : Os, l);
												},
												updateRenderer: function(l, n) {
													return l.def.updateRenderer(0 === n ? Is : Os, l);
												}
										  };
									(Je.setCurrentNode = l.setCurrentNode),
										(Je.createRootView = l.createRootView),
										(Je.createEmbeddedView = l.createEmbeddedView),
										(Je.createComponentView = l.createComponentView),
										(Je.createNgModuleRef = l.createNgModuleRef),
										(Je.overrideProvider = l.overrideProvider),
										(Je.overrideComponentView = l.overrideComponentView),
										(Je.clearOverrides = l.clearOverrides),
										(Je.checkAndUpdateView = l.checkAndUpdateView),
										(Je.checkNoChangesView = l.checkNoChangesView),
										(Je.destroyView = l.destroyView),
										(Je.resolveDep = Or),
										(Je.createDebugContext = l.createDebugContext),
										(Je.handleEvent = l.handleEvent),
										(Je.updateDirectives = l.updateDirectives),
										(Je.updateRenderer = l.updateRenderer),
										(Je.dirtyParentQueries = Ur);
								}
							})();
							var n = (function(l) {
								var n = Array.from(l.providers),
									u = Array.from(l.modules),
									e = {};
								for (var t in l.providersByKey) e[t] = l.providersByKey[t];
								return { factory: l.factory, isRoot: l.isRoot, providers: n, modules: u, providersByKey: e };
							})(kt(this._ngModuleDefFactory));
							return Je.createNgModuleRef(this.moduleType, l || Xl.NULL, this._bootstrapComponents, n);
						}),
						n
					);
				})(kn),
				la = (function() {
					return function() {};
				})(),
				na = (function() {
					return function() {};
				})(),
				ua = (function() {
					return function() {};
				})(),
				ea = new gl('Location Initialized'),
				ta = (function() {
					return function() {};
				})(),
				ra = new gl('appBaseHref'),
				sa = (function() {
					function l(l) {
						var u = this;
						(this._subject = new ru()), (this._platformStrategy = l);
						var e = this._platformStrategy.getBaseHref();
						(this._baseHref = n.stripTrailingSlash(aa(e))),
							this._platformStrategy.onPopState(function(l) {
								u._subject.emit({ url: u.path(!0), pop: !0, state: l.state, type: l.type });
							});
					}
					var n;
					return (
						(n = l),
						(l.prototype.path = function(l) {
							return void 0 === l && (l = !1), this.normalize(this._platformStrategy.path(l));
						}),
						(l.prototype.isCurrentPathEqualTo = function(l, u) {
							return void 0 === u && (u = ''), this.path() == this.normalize(l + n.normalizeQueryParams(u));
						}),
						(l.prototype.normalize = function(l) {
							return n.stripTrailingSlash(
								(function(l, n) {
									return l && n.startsWith(l) ? n.substring(l.length) : n;
								})(this._baseHref, aa(l))
							);
						}),
						(l.prototype.prepareExternalUrl = function(l) {
							return l && '/' !== l[0] && (l = '/' + l), this._platformStrategy.prepareExternalUrl(l);
						}),
						(l.prototype.go = function(l, n, u) {
							void 0 === n && (n = ''), void 0 === u && (u = null), this._platformStrategy.pushState(u, '', l, n);
						}),
						(l.prototype.replaceState = function(l, n, u) {
							void 0 === n && (n = ''), void 0 === u && (u = null), this._platformStrategy.replaceState(u, '', l, n);
						}),
						(l.prototype.forward = function() {
							this._platformStrategy.forward();
						}),
						(l.prototype.back = function() {
							this._platformStrategy.back();
						}),
						(l.prototype.subscribe = function(l, n, u) {
							return this._subject.subscribe({ next: l, error: n, complete: u });
						}),
						(l.normalizeQueryParams = function(l) {
							return l && '?' !== l[0] ? '?' + l : l;
						}),
						(l.joinWithSlash = function(l, n) {
							if (0 == l.length) return n;
							if (0 == n.length) return l;
							var u = 0;
							return l.endsWith('/') && u++, n.startsWith('/') && u++, 2 == u ? l + n.substring(1) : 1 == u ? l + n : l + '/' + n;
						}),
						(l.stripTrailingSlash = function(l) {
							var n = l.match(/#|\?|$/),
								u = (n && n.index) || l.length;
							return l.slice(0, u - ('/' === l[u - 1] ? 1 : 0)) + l.slice(u);
						}),
						l
					);
				})();
			function aa(l) {
				return l.replace(/\/index.html$/, '');
			}
			var oa = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						return (e._platformLocation = n), (e._baseHref = ''), null != u && (e._baseHref = u), e;
					}
					return (
						t(n, l),
						(n.prototype.onPopState = function(l) {
							this._platformLocation.onPopState(l), this._platformLocation.onHashChange(l);
						}),
						(n.prototype.getBaseHref = function() {
							return this._baseHref;
						}),
						(n.prototype.path = function(l) {
							void 0 === l && (l = !1);
							var n = this._platformLocation.hash;
							return null == n && (n = '#'), n.length > 0 ? n.substring(1) : n;
						}),
						(n.prototype.prepareExternalUrl = function(l) {
							var n = sa.joinWithSlash(this._baseHref, l);
							return n.length > 0 ? '#' + n : n;
						}),
						(n.prototype.pushState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + sa.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.pushState(l, n, t);
						}),
						(n.prototype.replaceState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + sa.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.replaceState(l, n, t);
						}),
						(n.prototype.forward = function() {
							this._platformLocation.forward();
						}),
						(n.prototype.back = function() {
							this._platformLocation.back();
						}),
						n
					);
				})(ta),
				ia = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						if (((e._platformLocation = n), null == u && (u = e._platformLocation.getBaseHrefFromDOM()), null == u))
							throw new Error('No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.');
						return (e._baseHref = u), e;
					}
					return (
						t(n, l),
						(n.prototype.onPopState = function(l) {
							this._platformLocation.onPopState(l), this._platformLocation.onHashChange(l);
						}),
						(n.prototype.getBaseHref = function() {
							return this._baseHref;
						}),
						(n.prototype.prepareExternalUrl = function(l) {
							return sa.joinWithSlash(this._baseHref, l);
						}),
						(n.prototype.path = function(l) {
							void 0 === l && (l = !1);
							var n = this._platformLocation.pathname + sa.normalizeQueryParams(this._platformLocation.search),
								u = this._platformLocation.hash;
							return u && l ? '' + n + u : n;
						}),
						(n.prototype.pushState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + sa.normalizeQueryParams(e));
							this._platformLocation.pushState(l, n, t);
						}),
						(n.prototype.replaceState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + sa.normalizeQueryParams(e));
							this._platformLocation.replaceState(l, n, t);
						}),
						(n.prototype.forward = function() {
							this._platformLocation.forward();
						}),
						(n.prototype.back = function() {
							this._platformLocation.back();
						}),
						n
					);
				})(ta),
				ca = void 0,
				pa = [
					'en',
					[['a', 'p'], ['AM', 'PM'], ca],
					[['AM', 'PM'], ca, ca],
					[
						['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
						['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
					],
					ca,
					[
						['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
						['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
					],
					ca,
					[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
					0,
					[6, 0],
					['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
					['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
					['{1}, {0}', ca, "{1} 'at' {0}", ca],
					['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
					['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
					'$',
					'US Dollar',
					{},
					function(l) {
						var n = Math.floor(Math.abs(l)),
							u = l.toString().replace(/^[^.]*\.?/, '').length;
						return 1 === n && 0 === u ? 1 : 5;
					}
				],
				ha = {},
				da = (function(l) {
					return (l[(l.Zero = 0)] = 'Zero'), (l[(l.One = 1)] = 'One'), (l[(l.Two = 2)] = 'Two'), (l[(l.Few = 3)] = 'Few'), (l[(l.Many = 4)] = 'Many'), (l[(l.Other = 5)] = 'Other'), l;
				})({}),
				fa = new gl('UseV4Plurals'),
				ga = (function() {
					return function() {};
				})(),
				ma = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						return (e.locale = n), (e.deprecatedPluralFn = u), e;
					}
					return (
						t(n, l),
						(n.prototype.getPluralCategory = function(l, n) {
							switch (
								this.deprecatedPluralFn
									? this.deprecatedPluralFn(n || this.locale, l)
									: (function(l) {
											return (function(l) {
												var n = l.toLowerCase().replace(/_/g, '-'),
													u = ha[n];
												if (u) return u;
												var e = n.split('-')[0];
												if ((u = ha[e])) return u;
												if ('en' === e) return pa;
												throw new Error('Missing locale data for the locale "' + l + '".');
											})(l)[18];
									  })(n || this.locale)(l)
							) {
								case da.Zero:
									return 'zero';
								case da.One:
									return 'one';
								case da.Two:
									return 'two';
								case da.Few:
									return 'few';
								case da.Many:
									return 'many';
								default:
									return 'other';
							}
						}),
						n
					);
				})(ga),
				ba = (function() {
					function l(l, n, u, e) {
						(this._iterableDiffers = l), (this._keyValueDiffers = n), (this._ngEl = u), (this._renderer = e), (this._initialClasses = []);
					}
					return (
						Object.defineProperty(l.prototype, 'klass', {
							set: function(l) {
								this._removeClasses(this._initialClasses),
									(this._initialClasses = 'string' == typeof l ? l.split(/\s+/) : []),
									this._applyClasses(this._initialClasses),
									this._applyClasses(this._rawClass);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'ngClass', {
							set: function(l) {
								this._removeClasses(this._rawClass),
									this._applyClasses(this._initialClasses),
									(this._iterableDiffer = null),
									(this._keyValueDiffer = null),
									(this._rawClass = 'string' == typeof l ? l.split(/\s+/) : l),
									this._rawClass &&
										(Zl(this._rawClass)
											? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
											: (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.ngDoCheck = function() {
							if (this._iterableDiffer) {
								var l = this._iterableDiffer.diff(this._rawClass);
								l && this._applyIterableChanges(l);
							} else if (this._keyValueDiffer) {
								var n = this._keyValueDiffer.diff(this._rawClass);
								n && this._applyKeyValueChanges(n);
							}
						}),
						(l.prototype._applyKeyValueChanges = function(l) {
							var n = this;
							l.forEachAddedItem(function(l) {
								return n._toggleClass(l.key, l.currentValue);
							}),
								l.forEachChangedItem(function(l) {
									return n._toggleClass(l.key, l.currentValue);
								}),
								l.forEachRemovedItem(function(l) {
									l.previousValue && n._toggleClass(l.key, !1);
								});
						}),
						(l.prototype._applyIterableChanges = function(l) {
							var n = this;
							l.forEachAddedItem(function(l) {
								if ('string' != typeof l.item) throw new Error('NgClass can only toggle CSS classes expressed as strings, got ' + El(l.item));
								n._toggleClass(l.item, !0);
							}),
								l.forEachRemovedItem(function(l) {
									return n._toggleClass(l.item, !1);
								});
						}),
						(l.prototype._applyClasses = function(l) {
							var n = this;
							l &&
								(Array.isArray(l) || l instanceof Set
									? l.forEach(function(l) {
											return n._toggleClass(l, !0);
									  })
									: Object.keys(l).forEach(function(u) {
											return n._toggleClass(u, !!l[u]);
									  }));
						}),
						(l.prototype._removeClasses = function(l) {
							var n = this;
							l &&
								(Array.isArray(l) || l instanceof Set
									? l.forEach(function(l) {
											return n._toggleClass(l, !1);
									  })
									: Object.keys(l).forEach(function(l) {
											return n._toggleClass(l, !1);
									  }));
						}),
						(l.prototype._toggleClass = function(l, n) {
							var u = this;
							(l = l.trim()) &&
								l.split(/\s+/g).forEach(function(l) {
									n ? u._renderer.addClass(u._ngEl.nativeElement, l) : u._renderer.removeClass(u._ngEl.nativeElement, l);
								});
						}),
						l
					);
				})(),
				ya = (function() {
					function l(l, n) {
						(this._viewContainer = l),
							(this._context = new va()),
							(this._thenTemplateRef = null),
							(this._elseTemplateRef = null),
							(this._thenViewRef = null),
							(this._elseViewRef = null),
							(this._thenTemplateRef = n);
					}
					return (
						Object.defineProperty(l.prototype, 'ngIf', {
							set: function(l) {
								(this._context.$implicit = this._context.ngIf = l), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'ngIfThen', {
							set: function(l) {
								wa('ngIfThen', l), (this._thenTemplateRef = l), (this._thenViewRef = null), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'ngIfElse', {
							set: function(l) {
								wa('ngIfElse', l), (this._elseTemplateRef = l), (this._elseViewRef = null), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype._updateView = function() {
							this._context.$implicit
								? this._thenViewRef ||
								  (this._viewContainer.clear(),
								  (this._elseViewRef = null),
								  this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
								: this._elseViewRef ||
								  (this._viewContainer.clear(),
								  (this._thenViewRef = null),
								  this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
						}),
						(l.ngTemplateGuard_ngIf = function(l, n) {
							return !0;
						}),
						l
					);
				})(),
				va = (function() {
					return function() {
						(this.$implicit = null), (this.ngIf = null);
					};
				})();
			function wa(l, n) {
				if (n && !n.createEmbeddedView) throw new Error(l + " must be a TemplateRef, but received '" + El(n) + "'.");
			}
			var ja = (function() {
					return function() {};
				})(),
				_a = new gl('DocumentToken'),
				xa = 'server',
				ka = (function() {
					function l() {}
					return (
						(l.ngInjectableDef = dl({
							providedIn: 'root',
							factory: function() {
								return new Ca(Fl(_a), window, Fl(bu));
							}
						})),
						l
					);
				})(),
				Ca = (function() {
					function l(l, n, u) {
						(this.document = l),
							(this.window = n),
							(this.errorHandler = u),
							(this.offset = function() {
								return [0, 0];
							});
					}
					return (
						(l.prototype.setOffset = function(l) {
							this.offset = Array.isArray(l)
								? function() {
										return l;
								  }
								: l;
						}),
						(l.prototype.getScrollPosition = function() {
							return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
						}),
						(l.prototype.scrollToPosition = function(l) {
							this.supportScrollRestoration() && this.window.scrollTo(l[0], l[1]);
						}),
						(l.prototype.scrollToAnchor = function(l) {
							if (this.supportScrollRestoration()) {
								l = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(l) : l.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
								try {
									var n = this.document.querySelector('#' + l);
									if (n) return void this.scrollToElement(n);
									var u = this.document.querySelector("[name='" + l + "']");
									if (u) return void this.scrollToElement(u);
								} catch (e) {
									this.errorHandler.handleError(e);
								}
							}
						}),
						(l.prototype.setHistoryScrollRestoration = function(l) {
							if (this.supportScrollRestoration()) {
								var n = this.window.history;
								n && n.scrollRestoration && (n.scrollRestoration = l);
							}
						}),
						(l.prototype.scrollToElement = function(l) {
							var n = l.getBoundingClientRect(),
								u = n.left + this.window.pageXOffset,
								e = n.top + this.window.pageYOffset,
								t = this.offset();
							this.window.scrollTo(u - t[0], e - t[1]);
						}),
						(l.prototype.supportScrollRestoration = function() {
							try {
								return !!this.window && !!this.window.scrollTo;
							} catch (l) {
								return !1;
							}
						}),
						l
					);
				})();
			function Sa() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				var u = l[l.length - 1];
				return U(u) ? (l.pop(), Y(l, u)) : el(l);
			}
			var Ea = (function(l) {
				function n(n) {
					var u = l.call(this) || this;
					return (u._value = n), u;
				}
				return (
					t(n, l),
					Object.defineProperty(n.prototype, 'value', {
						get: function() {
							return this.getValue();
						},
						enumerable: !0,
						configurable: !0
					}),
					(n.prototype._subscribe = function(n) {
						var u = l.prototype._subscribe.call(this, n);
						return u && !u.closed && n.next(this._value), u;
					}),
					(n.prototype.getValue = function() {
						if (this.hasError) throw this.thrownError;
						if (this.closed) throw new M();
						return this._value;
					}),
					(n.prototype.next = function(n) {
						l.prototype.next.call(this, (this._value = n));
					}),
					n
				);
			})(N);
			function Pa() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			Pa.prototype = Object.create(Error.prototype);
			var Ia = Pa,
				Oa = {},
				Ta = (function() {
					function l(l) {
						this.resultSelector = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Ma(l, this.resultSelector));
						}),
						l
					);
				})(),
				Ma = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.resultSelector = u), (e.active = 0), (e.values = []), (e.observables = []), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							this.values.push(Oa), this.observables.push(l);
						}),
						(n.prototype._complete = function() {
							var l = this.observables,
								n = l.length;
							if (0 === n) this.destination.complete();
							else {
								(this.active = n), (this.toRespond = n);
								for (var u = 0; u < n; u++) {
									var e = l[u];
									this.add(G(this, e, e, u));
								}
							}
						}),
						(n.prototype.notifyComplete = function(l) {
							0 == (this.active -= 1) && this.destination.complete();
						}),
						(n.prototype.notifyNext = function(l, n, u, e, t) {
							var r = this.values,
								s = this.toRespond ? (r[u] === Oa ? --this.toRespond : this.toRespond) : 0;
							(r[u] = n), 0 === s && (this.resultSelector ? this._tryResultSelector(r) : this.destination.next(r.slice()));
						}),
						(n.prototype._tryResultSelector = function(l) {
							var n;
							try {
								n = this.resultSelector.apply(this, l);
							} catch (u) {
								return void this.destination.error(u);
							}
							this.destination.next(n);
						}),
						n
					);
				})(Z),
				Ra = new I(function(l) {
					return l.complete();
				});
			function Aa(l) {
				return l
					? (function(l) {
							return new I(function(n) {
								return l.schedule(function() {
									return n.complete();
								});
							});
					  })(l)
					: Ra;
			}
			function Na(l) {
				return new I(function(n) {
					var u;
					try {
						u = l();
					} catch (e) {
						return void n.error(e);
					}
					return (u ? J(u) : Aa()).subscribe(n);
				});
			}
			function Da() {
				return ul(1);
			}
			function Ua(l, n) {
				return function(u) {
					return u.lift(new La(l, n));
				};
			}
			var La = (function() {
					function l(l, n) {
						(this.predicate = l), (this.thisArg = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Va(l, this.predicate, this.thisArg));
						}),
						l
					);
				})(),
				Va = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						return (t.predicate = u), (t.thisArg = e), (t.count = 0), t;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							var n;
							try {
								n = this.predicate.call(this.thisArg, l, this.count++);
							} catch (u) {
								return void this.destination.error(u);
							}
							n && this.destination.next(l);
						}),
						n
					);
				})(x);
			function Fa() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			Fa.prototype = Object.create(Error.prototype);
			var za = Fa;
			function Ha(l) {
				return function(n) {
					return 0 === l ? Aa() : n.lift(new Ba(l));
				};
			}
			var Ba = (function() {
					function l(l) {
						if (((this.total = l), this.total < 0)) throw new za();
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new qa(l, this.total));
						}),
						l
					);
				})(),
				qa = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.total = u), (e.ring = new Array()), (e.count = 0), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							var n = this.ring,
								u = this.total,
								e = this.count++;
							n.length < u ? n.push(l) : (n[e % u] = l);
						}),
						(n.prototype._complete = function() {
							var l = this.destination,
								n = this.count;
							if (n > 0)
								for (var u = this.count >= this.total ? this.total : this.count, e = this.ring, t = 0; t < u; t++) {
									var r = n++ % u;
									l.next(e[r]);
								}
							l.complete();
						}),
						n
					);
				})(x);
			function Ga(l) {
				return (
					void 0 === l && (l = Wa),
					function(n) {
						return n.lift(new Za(l));
					}
				);
			}
			var Za = (function() {
					function l(l) {
						this.errorFactory = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Qa(l, this.errorFactory));
						}),
						l
					);
				})(),
				Qa = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.errorFactory = u), (e.hasValue = !1), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							(this.hasValue = !0), this.destination.next(l);
						}),
						(n.prototype._complete = function() {
							if (this.hasValue) return this.destination.complete();
							var l = void 0;
							try {
								l = this.errorFactory();
							} catch (n) {
								l = n;
							}
							this.destination.error(l);
						}),
						n
					);
				})(x);
			function Wa() {
				return new Ia();
			}
			function Ka(l) {
				return (
					void 0 === l && (l = null),
					function(n) {
						return n.lift(new Ya(l));
					}
				);
			}
			var Ya = (function() {
					function l(l) {
						this.defaultValue = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Ja(l, this.defaultValue));
						}),
						l
					);
				})(),
				Ja = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.defaultValue = u), (e.isEmpty = !0), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							(this.isEmpty = !1), this.destination.next(l);
						}),
						(n.prototype._complete = function() {
							this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
						}),
						n
					);
				})(x);
			function $a(l, n) {
				var u = arguments.length >= 2;
				return function(e) {
					return e.pipe(
						l
							? Ua(function(n, u) {
									return l(n, u, e);
							  })
							: nl,
						Ha(1),
						u
							? Ka(n)
							: Ga(function() {
									return new Ia();
							  })
					);
				};
			}
			function Xa(l) {
				return function(n) {
					var u = new lo(l),
						e = n.lift(u);
					return (u.caught = e);
				};
			}
			var lo = (function() {
					function l(l) {
						this.selector = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new no(l, this.selector, this.caught));
						}),
						l
					);
				})(),
				no = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						return (t.selector = u), (t.caught = e), t;
					}
					return (
						t(n, l),
						(n.prototype.error = function(n) {
							if (!this.isStopped) {
								var u = void 0;
								try {
									u = this.selector(n, this.caught);
								} catch (t) {
									return void l.prototype.error.call(this, t);
								}
								this._unsubscribeAndRecycle();
								var e = new L(this, void 0, void 0);
								this.add(e), G(this, u, void 0, void 0, e);
							}
						}),
						n
					);
				})(Z);
			function uo(l) {
				return function(n) {
					return 0 === l ? Aa() : n.lift(new eo(l));
				};
			}
			var eo = (function() {
					function l(l) {
						if (((this.total = l), this.total < 0)) throw new za();
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new to(l, this.total));
						}),
						l
					);
				})(),
				to = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.total = u), (e.count = 0), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							var n = this.total,
								u = ++this.count;
							u <= n && (this.destination.next(l), u === n && (this.destination.complete(), this.unsubscribe()));
						}),
						n
					);
				})(x);
			function ro(l, n) {
				var u = arguments.length >= 2;
				return function(e) {
					return e.pipe(
						l
							? Ua(function(n, u) {
									return l(n, u, e);
							  })
							: nl,
						uo(1),
						u
							? Ka(n)
							: Ga(function() {
									return new Ia();
							  })
					);
				};
			}
			var so = (function() {
					function l(l, n, u) {
						(this.predicate = l), (this.thisArg = n), (this.source = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new ao(l, this.predicate, this.thisArg, this.source));
						}),
						l
					);
				})(),
				ao = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						return (r.predicate = u), (r.thisArg = e), (r.source = t), (r.index = 0), (r.thisArg = e || r), r;
					}
					return (
						t(n, l),
						(n.prototype.notifyComplete = function(l) {
							this.destination.next(l), this.destination.complete();
						}),
						(n.prototype._next = function(l) {
							var n = !1;
							try {
								n = this.predicate.call(this.thisArg, l, this.index++, this.source);
							} catch (u) {
								return void this.destination.error(u);
							}
							n || this.notifyComplete(!1);
						}),
						(n.prototype._complete = function() {
							this.notifyComplete(!0);
						}),
						n
					);
				})(x);
			function oo(l, n) {
				return 'function' == typeof n
					? function(u) {
							return u.pipe(
								oo(function(u, e) {
									return J(l(u, e)).pipe(
										Q(function(l, t) {
											return n(u, l, e, t);
										})
									);
								})
							);
					  }
					: function(n) {
							return n.lift(new io(l));
					  };
			}
			var io = (function() {
					function l(l) {
						this.project = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new co(l, this.project));
						}),
						l
					);
				})(),
				co = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.project = u), (e.index = 0), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							var n,
								u = this.index++;
							try {
								n = this.project(l, u);
							} catch (e) {
								return void this.destination.error(e);
							}
							this._innerSub(n, l, u);
						}),
						(n.prototype._innerSub = function(l, n, u) {
							var e = this.innerSubscription;
							e && e.unsubscribe();
							var t = new L(this, void 0, void 0);
							this.destination.add(t), (this.innerSubscription = G(this, l, n, u, t));
						}),
						(n.prototype._complete = function() {
							var n = this.innerSubscription;
							(n && !n.closed) || l.prototype._complete.call(this), this.unsubscribe();
						}),
						(n.prototype._unsubscribe = function() {
							this.innerSubscription = null;
						}),
						(n.prototype.notifyComplete = function(n) {
							this.destination.remove(n), (this.innerSubscription = null), this.isStopped && l.prototype._complete.call(this);
						}),
						(n.prototype.notifyNext = function(l, n, u, e, t) {
							this.destination.next(n);
						}),
						n
					);
				})(Z);
			function po() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				return Da()(Sa.apply(void 0, l));
			}
			function ho(l, n) {
				var u = !1;
				return (
					arguments.length >= 2 && (u = !0),
					function(e) {
						return e.lift(new fo(l, n, u));
					}
				);
			}
			var fo = (function() {
					function l(l, n, u) {
						void 0 === u && (u = !1), (this.accumulator = l), (this.seed = n), (this.hasSeed = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new go(l, this.accumulator, this.seed, this.hasSeed));
						}),
						l
					);
				})(),
				go = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						return (r.accumulator = u), (r._seed = e), (r.hasSeed = t), (r.index = 0), r;
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'seed', {
							get: function() {
								return this._seed;
							},
							set: function(l) {
								(this.hasSeed = !0), (this._seed = l);
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype._next = function(l) {
							if (this.hasSeed) return this._tryNext(l);
							(this.seed = l), this.destination.next(l);
						}),
						(n.prototype._tryNext = function(l) {
							var n,
								u = this.index++;
							try {
								n = this.accumulator(this.seed, l, u);
							} catch (e) {
								this.destination.error(e);
							}
							(this.seed = n), this.destination.next(n);
						}),
						n
					);
				})(x);
			function mo(l, n) {
				return $(l, n, 1);
			}
			function bo(l, n, u) {
				return function(e) {
					return e.lift(new yo(l, n, u));
				};
			}
			var yo = (function() {
					function l(l, n, u) {
						(this.nextOrObserver = l), (this.error = n), (this.complete = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new vo(l, this.nextOrObserver, this.error, this.complete));
						}),
						l
					);
				})(),
				vo = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						return (
							(r._tapNext = S),
							(r._tapError = S),
							(r._tapComplete = S),
							(r._tapError = e || S),
							(r._tapComplete = t || S),
							d(u) ? ((r._context = r), (r._tapNext = u)) : u && ((r._context = u), (r._tapNext = u.next || S), (r._tapError = u.error || S), (r._tapComplete = u.complete || S)),
							r
						);
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							try {
								this._tapNext.call(this._context, l);
							} catch (n) {
								return void this.destination.error(n);
							}
							this.destination.next(l);
						}),
						(n.prototype._error = function(l) {
							try {
								this._tapError.call(this._context, l);
							} catch (l) {
								return void this.destination.error(l);
							}
							this.destination.error(l);
						}),
						(n.prototype._complete = function() {
							try {
								this._tapComplete.call(this._context);
							} catch (l) {
								return void this.destination.error(l);
							}
							return this.destination.complete();
						}),
						n
					);
				})(x),
				wo = (function() {
					function l(l) {
						this.callback = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new jo(l, this.callback));
						}),
						l
					);
				})(),
				jo = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return e.add(new m(u)), e;
					}
					return t(n, l), n;
				})(x),
				_o = null;
			function xo() {
				return _o;
			}
			var ko,
				Co = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				So = {
					'\b': 'Backspace',
					'\t': 'Tab',
					'\x7f': 'Delete',
					'\x1b': 'Escape',
					Del: 'Delete',
					Esc: 'Escape',
					Left: 'ArrowLeft',
					Right: 'ArrowRight',
					Up: 'ArrowUp',
					Down: 'ArrowDown',
					Menu: 'ContextMenu',
					Scroll: 'ScrollLock',
					Win: 'OS'
				},
				Eo = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' };
			jl.Node &&
				(ko =
					jl.Node.prototype.contains ||
					function(l) {
						return !!(16 & this.compareDocumentPosition(l));
					});
			var Po,
				Io = (function(l) {
					function n() {
						return (null !== l && l.apply(this, arguments)) || this;
					}
					return (
						t(n, l),
						(n.prototype.parse = function(l) {
							throw new Error('parse not implemented');
						}),
						(n.makeCurrent = function() {
							var l;
							(l = new n()), _o || (_o = l);
						}),
						(n.prototype.hasProperty = function(l, n) {
							return n in l;
						}),
						(n.prototype.setProperty = function(l, n, u) {
							l[n] = u;
						}),
						(n.prototype.getProperty = function(l, n) {
							return l[n];
						}),
						(n.prototype.invoke = function(l, n, u) {
							var e;
							(e = l)[n].apply(e, c(u));
						}),
						(n.prototype.logError = function(l) {
							window.console && (console.error ? console.error(l) : console.log(l));
						}),
						(n.prototype.log = function(l) {
							window.console && window.console.log && window.console.log(l);
						}),
						(n.prototype.logGroup = function(l) {
							window.console && window.console.group && window.console.group(l);
						}),
						(n.prototype.logGroupEnd = function() {
							window.console && window.console.groupEnd && window.console.groupEnd();
						}),
						Object.defineProperty(n.prototype, 'attrToPropMap', {
							get: function() {
								return Co;
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.contains = function(l, n) {
							return ko.call(l, n);
						}),
						(n.prototype.querySelector = function(l, n) {
							return l.querySelector(n);
						}),
						(n.prototype.querySelectorAll = function(l, n) {
							return l.querySelectorAll(n);
						}),
						(n.prototype.on = function(l, n, u) {
							l.addEventListener(n, u, !1);
						}),
						(n.prototype.onAndCancel = function(l, n, u) {
							return (
								l.addEventListener(n, u, !1),
								function() {
									l.removeEventListener(n, u, !1);
								}
							);
						}),
						(n.prototype.dispatchEvent = function(l, n) {
							l.dispatchEvent(n);
						}),
						(n.prototype.createMouseEvent = function(l) {
							var n = this.getDefaultDocument().createEvent('MouseEvent');
							return n.initEvent(l, !0, !0), n;
						}),
						(n.prototype.createEvent = function(l) {
							var n = this.getDefaultDocument().createEvent('Event');
							return n.initEvent(l, !0, !0), n;
						}),
						(n.prototype.preventDefault = function(l) {
							l.preventDefault(), (l.returnValue = !1);
						}),
						(n.prototype.isPrevented = function(l) {
							return l.defaultPrevented || (null != l.returnValue && !l.returnValue);
						}),
						(n.prototype.getInnerHTML = function(l) {
							return l.innerHTML;
						}),
						(n.prototype.getTemplateContent = function(l) {
							return 'content' in l && this.isTemplateElement(l) ? l.content : null;
						}),
						(n.prototype.getOuterHTML = function(l) {
							return l.outerHTML;
						}),
						(n.prototype.nodeName = function(l) {
							return l.nodeName;
						}),
						(n.prototype.nodeValue = function(l) {
							return l.nodeValue;
						}),
						(n.prototype.type = function(l) {
							return l.type;
						}),
						(n.prototype.content = function(l) {
							return this.hasProperty(l, 'content') ? l.content : l;
						}),
						(n.prototype.firstChild = function(l) {
							return l.firstChild;
						}),
						(n.prototype.nextSibling = function(l) {
							return l.nextSibling;
						}),
						(n.prototype.parentElement = function(l) {
							return l.parentNode;
						}),
						(n.prototype.childNodes = function(l) {
							return l.childNodes;
						}),
						(n.prototype.childNodesAsList = function(l) {
							for (var n = l.childNodes, u = new Array(n.length), e = 0; e < n.length; e++) u[e] = n[e];
							return u;
						}),
						(n.prototype.clearNodes = function(l) {
							for (; l.firstChild; ) l.removeChild(l.firstChild);
						}),
						(n.prototype.appendChild = function(l, n) {
							l.appendChild(n);
						}),
						(n.prototype.removeChild = function(l, n) {
							l.removeChild(n);
						}),
						(n.prototype.replaceChild = function(l, n, u) {
							l.replaceChild(n, u);
						}),
						(n.prototype.remove = function(l) {
							return l.parentNode && l.parentNode.removeChild(l), l;
						}),
						(n.prototype.insertBefore = function(l, n, u) {
							l.insertBefore(u, n);
						}),
						(n.prototype.insertAllBefore = function(l, n, u) {
							u.forEach(function(u) {
								return l.insertBefore(u, n);
							});
						}),
						(n.prototype.insertAfter = function(l, n, u) {
							l.insertBefore(u, n.nextSibling);
						}),
						(n.prototype.setInnerHTML = function(l, n) {
							l.innerHTML = n;
						}),
						(n.prototype.getText = function(l) {
							return l.textContent;
						}),
						(n.prototype.setText = function(l, n) {
							l.textContent = n;
						}),
						(n.prototype.getValue = function(l) {
							return l.value;
						}),
						(n.prototype.setValue = function(l, n) {
							l.value = n;
						}),
						(n.prototype.getChecked = function(l) {
							return l.checked;
						}),
						(n.prototype.setChecked = function(l, n) {
							l.checked = n;
						}),
						(n.prototype.createComment = function(l) {
							return this.getDefaultDocument().createComment(l);
						}),
						(n.prototype.createTemplate = function(l) {
							var n = this.getDefaultDocument().createElement('template');
							return (n.innerHTML = l), n;
						}),
						(n.prototype.createElement = function(l, n) {
							return (n = n || this.getDefaultDocument()).createElement(l);
						}),
						(n.prototype.createElementNS = function(l, n, u) {
							return (u = u || this.getDefaultDocument()).createElementNS(l, n);
						}),
						(n.prototype.createTextNode = function(l, n) {
							return (n = n || this.getDefaultDocument()).createTextNode(l);
						}),
						(n.prototype.createScriptTag = function(l, n, u) {
							var e = (u = u || this.getDefaultDocument()).createElement('SCRIPT');
							return e.setAttribute(l, n), e;
						}),
						(n.prototype.createStyleElement = function(l, n) {
							var u = (n = n || this.getDefaultDocument()).createElement('style');
							return this.appendChild(u, this.createTextNode(l, n)), u;
						}),
						(n.prototype.createShadowRoot = function(l) {
							return l.createShadowRoot();
						}),
						(n.prototype.getShadowRoot = function(l) {
							return l.shadowRoot;
						}),
						(n.prototype.getHost = function(l) {
							return l.host;
						}),
						(n.prototype.clone = function(l) {
							return l.cloneNode(!0);
						}),
						(n.prototype.getElementsByClassName = function(l, n) {
							return l.getElementsByClassName(n);
						}),
						(n.prototype.getElementsByTagName = function(l, n) {
							return l.getElementsByTagName(n);
						}),
						(n.prototype.classList = function(l) {
							return Array.prototype.slice.call(l.classList, 0);
						}),
						(n.prototype.addClass = function(l, n) {
							l.classList.add(n);
						}),
						(n.prototype.removeClass = function(l, n) {
							l.classList.remove(n);
						}),
						(n.prototype.hasClass = function(l, n) {
							return l.classList.contains(n);
						}),
						(n.prototype.setStyle = function(l, n, u) {
							l.style[n] = u;
						}),
						(n.prototype.removeStyle = function(l, n) {
							l.style[n] = '';
						}),
						(n.prototype.getStyle = function(l, n) {
							return l.style[n];
						}),
						(n.prototype.hasStyle = function(l, n, u) {
							var e = this.getStyle(l, n) || '';
							return u ? e == u : e.length > 0;
						}),
						(n.prototype.tagName = function(l) {
							return l.tagName;
						}),
						(n.prototype.attributeMap = function(l) {
							for (var n = new Map(), u = l.attributes, e = 0; e < u.length; e++) {
								var t = u.item(e);
								n.set(t.name, t.value);
							}
							return n;
						}),
						(n.prototype.hasAttribute = function(l, n) {
							return l.hasAttribute(n);
						}),
						(n.prototype.hasAttributeNS = function(l, n, u) {
							return l.hasAttributeNS(n, u);
						}),
						(n.prototype.getAttribute = function(l, n) {
							return l.getAttribute(n);
						}),
						(n.prototype.getAttributeNS = function(l, n, u) {
							return l.getAttributeNS(n, u);
						}),
						(n.prototype.setAttribute = function(l, n, u) {
							l.setAttribute(n, u);
						}),
						(n.prototype.setAttributeNS = function(l, n, u, e) {
							l.setAttributeNS(n, u, e);
						}),
						(n.prototype.removeAttribute = function(l, n) {
							l.removeAttribute(n);
						}),
						(n.prototype.removeAttributeNS = function(l, n, u) {
							l.removeAttributeNS(n, u);
						}),
						(n.prototype.templateAwareRoot = function(l) {
							return this.isTemplateElement(l) ? this.content(l) : l;
						}),
						(n.prototype.createHtmlDocument = function() {
							return document.implementation.createHTMLDocument('fakeTitle');
						}),
						(n.prototype.getDefaultDocument = function() {
							return document;
						}),
						(n.prototype.getBoundingClientRect = function(l) {
							try {
								return l.getBoundingClientRect();
							} catch (n) {
								return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
							}
						}),
						(n.prototype.getTitle = function(l) {
							return l.title;
						}),
						(n.prototype.setTitle = function(l, n) {
							l.title = n || '';
						}),
						(n.prototype.elementMatches = function(l, n) {
							return (
								!!this.isElementNode(l) && ((l.matches && l.matches(n)) || (l.msMatchesSelector && l.msMatchesSelector(n)) || (l.webkitMatchesSelector && l.webkitMatchesSelector(n)))
							);
						}),
						(n.prototype.isTemplateElement = function(l) {
							return this.isElementNode(l) && 'TEMPLATE' === l.nodeName;
						}),
						(n.prototype.isTextNode = function(l) {
							return l.nodeType === Node.TEXT_NODE;
						}),
						(n.prototype.isCommentNode = function(l) {
							return l.nodeType === Node.COMMENT_NODE;
						}),
						(n.prototype.isElementNode = function(l) {
							return l.nodeType === Node.ELEMENT_NODE;
						}),
						(n.prototype.hasShadowRoot = function(l) {
							return null != l.shadowRoot && l instanceof HTMLElement;
						}),
						(n.prototype.isShadowRoot = function(l) {
							return l instanceof DocumentFragment;
						}),
						(n.prototype.importIntoDoc = function(l) {
							return document.importNode(this.templateAwareRoot(l), !0);
						}),
						(n.prototype.adoptNode = function(l) {
							return document.adoptNode(l);
						}),
						(n.prototype.getHref = function(l) {
							return l.getAttribute('href');
						}),
						(n.prototype.getEventKey = function(l) {
							var n = l.key;
							if (null == n) {
								if (null == (n = l.keyIdentifier)) return 'Unidentified';
								n.startsWith('U+') && ((n = String.fromCharCode(parseInt(n.substring(2), 16))), 3 === l.location && Eo.hasOwnProperty(n) && (n = Eo[n]));
							}
							return So[n] || n;
						}),
						(n.prototype.getGlobalEventTarget = function(l, n) {
							return 'window' === n ? window : 'document' === n ? l : 'body' === n ? l.body : null;
						}),
						(n.prototype.getHistory = function() {
							return window.history;
						}),
						(n.prototype.getLocation = function() {
							return window.location;
						}),
						(n.prototype.getBaseHref = function(l) {
							var n,
								u = Oo || (Oo = document.querySelector('base')) ? Oo.getAttribute('href') : null;
							return null == u ? null : ((n = u), Po || (Po = document.createElement('a')), Po.setAttribute('href', n), '/' === Po.pathname.charAt(0) ? Po.pathname : '/' + Po.pathname);
						}),
						(n.prototype.resetBaseElement = function() {
							Oo = null;
						}),
						(n.prototype.getUserAgent = function() {
							return window.navigator.userAgent;
						}),
						(n.prototype.setData = function(l, n, u) {
							this.setAttribute(l, 'data-' + n, u);
						}),
						(n.prototype.getData = function(l, n) {
							return this.getAttribute(l, 'data-' + n);
						}),
						(n.prototype.getComputedStyle = function(l) {
							return getComputedStyle(l);
						}),
						(n.prototype.supportsWebAnimation = function() {
							return 'function' == typeof Element.prototype.animate;
						}),
						(n.prototype.performanceNow = function() {
							return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
						}),
						(n.prototype.supportsCookies = function() {
							return !0;
						}),
						(n.prototype.getCookie = function(l) {
							return (function(l, n) {
								var u, e;
								n = encodeURIComponent(n);
								try {
									for (var t = o(l.split(';')), r = t.next(); !r.done; r = t.next()) {
										var s = r.value,
											a = s.indexOf('='),
											c = i(-1 == a ? [s, ''] : [s.slice(0, a), s.slice(a + 1)], 2),
											p = c[1];
										if (c[0].trim() === n) return decodeURIComponent(p);
									}
								} catch (h) {
									u = { error: h };
								} finally {
									try {
										r && !r.done && (e = t.return) && e.call(t);
									} finally {
										if (u) throw u.error;
									}
								}
								return null;
							})(document.cookie, l);
						}),
						(n.prototype.setCookie = function(l, n) {
							document.cookie = encodeURIComponent(l) + '=' + encodeURIComponent(n);
						}),
						n
					);
				})(
					(function(l) {
						function n() {
							var n = l.call(this) || this;
							(n._animationPrefix = null), (n._transitionEnd = null);
							try {
								var u = n.createElement('div', document);
								if (null != n.getStyle(u, 'animationName')) n._animationPrefix = '';
								else
									for (var e = ['Webkit', 'Moz', 'O', 'ms'], t = 0; t < e.length; t++)
										if (null != n.getStyle(u, e[t] + 'AnimationName')) {
											n._animationPrefix = '-' + e[t].toLowerCase() + '-';
											break;
										}
								var r = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd otransitionend', transition: 'transitionend' };
								Object.keys(r).forEach(function(l) {
									null != n.getStyle(u, l) && (n._transitionEnd = r[l]);
								});
							} catch (s) {
								(n._animationPrefix = null), (n._transitionEnd = null);
							}
							return n;
						}
						return (
							t(n, l),
							(n.prototype.getDistributedNodes = function(l) {
								return l.getDistributedNodes();
							}),
							(n.prototype.resolveAndSetHref = function(l, n, u) {
								l.href = null == u ? n : n + '/../' + u;
							}),
							(n.prototype.supportsDOMEvents = function() {
								return !0;
							}),
							(n.prototype.supportsNativeShadowDOM = function() {
								return 'function' == typeof document.body.createShadowRoot;
							}),
							(n.prototype.getAnimationPrefix = function() {
								return this._animationPrefix ? this._animationPrefix : '';
							}),
							(n.prototype.getTransitionEnd = function() {
								return this._transitionEnd ? this._transitionEnd : '';
							}),
							(n.prototype.supportsAnimation = function() {
								return null != this._animationPrefix && null != this._transitionEnd;
							}),
							n
						);
					})(
						(function() {
							function l() {
								this.resourceLoaderType = null;
							}
							return (
								Object.defineProperty(l.prototype, 'attrToPropMap', {
									get: function() {
										return this._attrToPropMap;
									},
									set: function(l) {
										this._attrToPropMap = l;
									},
									enumerable: !0,
									configurable: !0
								}),
								l
							);
						})()
					)
				),
				Oo = null,
				To = _a;
			function Mo() {
				return !!window.history.pushState;
			}
			var Ro = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), u._init(), u;
					}
					var u;
					return (
						t(n, l),
						(n.prototype._init = function() {
							(this.location = xo().getLocation()), (this._history = xo().getHistory());
						}),
						(n.prototype.getBaseHrefFromDOM = function() {
							return xo().getBaseHref(this._doc);
						}),
						(n.prototype.onPopState = function(l) {
							xo()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', l, !1);
						}),
						(n.prototype.onHashChange = function(l) {
							xo()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('hashchange', l, !1);
						}),
						Object.defineProperty(n.prototype, 'pathname', {
							get: function() {
								return this.location.pathname;
							},
							set: function(l) {
								this.location.pathname = l;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'search', {
							get: function() {
								return this.location.search;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'hash', {
							get: function() {
								return this.location.hash;
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.pushState = function(l, n, u) {
							Mo() ? this._history.pushState(l, n, u) : (this.location.hash = u);
						}),
						(n.prototype.replaceState = function(l, n, u) {
							Mo() ? this._history.replaceState(l, n, u) : (this.location.hash = u);
						}),
						(n.prototype.forward = function() {
							this._history.forward();
						}),
						(n.prototype.back = function() {
							this._history.back();
						}),
						s(
							[
								((u = Rl(To)),
								function(l, n) {
									u(l, n, 0);
								}),
								a('design:paramtypes', [Object])
							],
							n
						)
					);
				})(ua),
				Ao = new gl('TRANSITION_ID'),
				No = [
					{
						provide: wu,
						useFactory: function(l, n, u) {
							return function() {
								u.get(ju).donePromise.then(function() {
									var u = xo();
									Array.prototype.slice
										.apply(u.querySelectorAll(n, 'style[ng-transition]'))
										.filter(function(n) {
											return u.getAttribute(n, 'ng-transition') === l;
										})
										.forEach(function(l) {
											return u.remove(l);
										});
								});
							};
						},
						deps: [Ao, To, Xl],
						multi: !0
					}
				],
				Do = (function() {
					function l() {}
					return (
						(l.init = function() {
							var n;
							(n = new l()), (Xu = n);
						}),
						(l.prototype.addToWindow = function(l) {
							(jl.getAngularTestability = function(n, u) {
								void 0 === u && (u = !0);
								var e = l.findTestabilityInTree(n, u);
								if (null == e) throw new Error('Could not find testability for element.');
								return e;
							}),
								(jl.getAllAngularTestabilities = function() {
									return l.getAllTestabilities();
								}),
								(jl.getAllAngularRootElements = function() {
									return l.getAllRootElements();
								}),
								jl.frameworkStabilizers || (jl.frameworkStabilizers = []),
								jl.frameworkStabilizers.push(function(l) {
									var n = jl.getAllAngularTestabilities(),
										u = n.length,
										e = !1,
										t = function(n) {
											(e = e || n), 0 == --u && l(e);
										};
									n.forEach(function(l) {
										l.whenStable(t);
									});
								});
						}),
						(l.prototype.findTestabilityInTree = function(l, n, u) {
							if (null == n) return null;
							var e = l.getTestability(n);
							return null != e ? e : u ? (xo().isShadowRoot(n) ? this.findTestabilityInTree(l, xo().getHost(n), !0) : this.findTestabilityInTree(l, xo().parentElement(n), !0)) : null;
						}),
						l
					);
				})();
			function Uo(l, n) {
				('undefined' != typeof COMPILED && COMPILED) || ((jl.ng = jl.ng || {})[l] = n);
			}
			var Lo = { ApplicationRef: se, NgZone: Bu };
			function Vo(l) {
				return je(l);
			}
			var Fo = new gl('EventManagerPlugins'),
				zo = (function() {
					function l(l, n) {
						var u = this;
						(this._zone = n),
							(this._eventNameToPlugin = new Map()),
							l.forEach(function(l) {
								return (l.manager = u);
							}),
							(this._plugins = l.slice().reverse());
					}
					return (
						(l.prototype.addEventListener = function(l, n, u) {
							return this._findPluginFor(n).addEventListener(l, n, u);
						}),
						(l.prototype.addGlobalEventListener = function(l, n, u) {
							return this._findPluginFor(n).addGlobalEventListener(l, n, u);
						}),
						(l.prototype.getZone = function() {
							return this._zone;
						}),
						(l.prototype._findPluginFor = function(l) {
							var n = this._eventNameToPlugin.get(l);
							if (n) return n;
							for (var u = this._plugins, e = 0; e < u.length; e++) {
								var t = u[e];
								if (t.supports(l)) return this._eventNameToPlugin.set(l, t), t;
							}
							throw new Error('No event manager plugin found for event ' + l);
						}),
						l
					);
				})(),
				Ho = (function() {
					function l(l) {
						this._doc = l;
					}
					return (
						(l.prototype.addGlobalEventListener = function(l, n, u) {
							var e = xo().getGlobalEventTarget(this._doc, l);
							if (!e) throw new Error('Unsupported event target ' + e + ' for event ' + n);
							return this.addEventListener(e, n, u);
						}),
						l
					);
				})(),
				Bo = (function() {
					function l() {
						this._stylesSet = new Set();
					}
					return (
						(l.prototype.addStyles = function(l) {
							var n = this,
								u = new Set();
							l.forEach(function(l) {
								n._stylesSet.has(l) || (n._stylesSet.add(l), u.add(l));
							}),
								this.onStylesAdded(u);
						}),
						(l.prototype.onStylesAdded = function(l) {}),
						(l.prototype.getAllStyles = function() {
							return Array.from(this._stylesSet);
						}),
						l
					);
				})(),
				qo = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), (u._hostNodes = new Set()), (u._styleNodes = new Set()), u._hostNodes.add(n.head), u;
					}
					return (
						t(n, l),
						(n.prototype._addStylesToHost = function(l, n) {
							var u = this;
							l.forEach(function(l) {
								var e = u._doc.createElement('style');
								(e.textContent = l), u._styleNodes.add(n.appendChild(e));
							});
						}),
						(n.prototype.addHost = function(l) {
							this._addStylesToHost(this._stylesSet, l), this._hostNodes.add(l);
						}),
						(n.prototype.removeHost = function(l) {
							this._hostNodes.delete(l);
						}),
						(n.prototype.onStylesAdded = function(l) {
							var n = this;
							this._hostNodes.forEach(function(u) {
								return n._addStylesToHost(l, u);
							});
						}),
						(n.prototype.ngOnDestroy = function() {
							this._styleNodes.forEach(function(l) {
								return xo().remove(l);
							});
						}),
						n
					);
				})(Bo),
				Go = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/'
				},
				Zo = /%COMP%/g,
				Qo = '_nghost-%COMP%',
				Wo = '_ngcontent-%COMP%';
			function Ko(l, n, u) {
				for (var e = 0; e < n.length; e++) {
					var t = n[e];
					Array.isArray(t) ? Ko(l, t, u) : ((t = t.replace(Zo, l)), u.push(t));
				}
				return u;
			}
			function Yo(l) {
				return function(n) {
					!1 === l(n) && (n.preventDefault(), (n.returnValue = !1));
				};
			}
			var Jo = (function() {
					function l(l, n, u) {
						(this.eventManager = l), (this.sharedStylesHost = n), (this.appId = u), (this.rendererByCompId = new Map()), (this.defaultRenderer = new $o(l));
					}
					return (
						(l.prototype.createRenderer = function(l, n) {
							if (!l || !n) return this.defaultRenderer;
							switch (n.encapsulation) {
								case Ml.Emulated:
									var u = this.rendererByCompId.get(n.id);
									return u || ((u = new ui(this.eventManager, this.sharedStylesHost, n, this.appId)), this.rendererByCompId.set(n.id, u)), u.applyToHost(l), u;
								case Ml.Native:
								case Ml.ShadowDom:
									return new ei(this.eventManager, this.sharedStylesHost, l, n);
								default:
									if (!this.rendererByCompId.has(n.id)) {
										var e = Ko(n.id, n.styles, []);
										this.sharedStylesHost.addStyles(e), this.rendererByCompId.set(n.id, this.defaultRenderer);
									}
									return this.defaultRenderer;
							}
						}),
						(l.prototype.begin = function() {}),
						(l.prototype.end = function() {}),
						l
					);
				})(),
				$o = (function() {
					function l(l) {
						(this.eventManager = l), (this.data = Object.create(null));
					}
					return (
						(l.prototype.destroy = function() {}),
						(l.prototype.createElement = function(l, n) {
							return n ? document.createElementNS(Go[n], l) : document.createElement(l);
						}),
						(l.prototype.createComment = function(l) {
							return document.createComment(l);
						}),
						(l.prototype.createText = function(l) {
							return document.createTextNode(l);
						}),
						(l.prototype.appendChild = function(l, n) {
							l.appendChild(n);
						}),
						(l.prototype.insertBefore = function(l, n, u) {
							l && l.insertBefore(n, u);
						}),
						(l.prototype.removeChild = function(l, n) {
							l && l.removeChild(n);
						}),
						(l.prototype.selectRootElement = function(l, n) {
							var u = 'string' == typeof l ? document.querySelector(l) : l;
							if (!u) throw new Error('The selector "' + l + '" did not match any elements');
							return n || (u.textContent = ''), u;
						}),
						(l.prototype.parentNode = function(l) {
							return l.parentNode;
						}),
						(l.prototype.nextSibling = function(l) {
							return l.nextSibling;
						}),
						(l.prototype.setAttribute = function(l, n, u, e) {
							if (e) {
								n = e + ':' + n;
								var t = Go[e];
								t ? l.setAttributeNS(t, n, u) : l.setAttribute(n, u);
							} else l.setAttribute(n, u);
						}),
						(l.prototype.removeAttribute = function(l, n, u) {
							if (u) {
								var e = Go[u];
								e ? l.removeAttributeNS(e, n) : l.removeAttribute(u + ':' + n);
							} else l.removeAttribute(n);
						}),
						(l.prototype.addClass = function(l, n) {
							l.classList.add(n);
						}),
						(l.prototype.removeClass = function(l, n) {
							l.classList.remove(n);
						}),
						(l.prototype.setStyle = function(l, n, u, e) {
							e & In.DashCase ? l.style.setProperty(n, u, e & In.Important ? 'important' : '') : (l.style[n] = u);
						}),
						(l.prototype.removeStyle = function(l, n, u) {
							u & In.DashCase ? l.style.removeProperty(n) : (l.style[n] = '');
						}),
						(l.prototype.setProperty = function(l, n, u) {
							li(n, 'property'), (l[n] = u);
						}),
						(l.prototype.setValue = function(l, n) {
							l.nodeValue = n;
						}),
						(l.prototype.listen = function(l, n, u) {
							return li(n, 'listener'), 'string' == typeof l ? this.eventManager.addGlobalEventListener(l, n, Yo(u)) : this.eventManager.addEventListener(l, n, Yo(u));
						}),
						l
					);
				})(),
				Xo = '@'.charCodeAt(0);
			function li(l, n) {
				if (l.charCodeAt(0) === Xo) throw new Error('Found the synthetic ' + n + ' ' + l + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
			}
			var ni,
				ui = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						r.component = e;
						var s = Ko(t + '-' + e.id, e.styles, []);
						return u.addStyles(s), (r.contentAttr = Wo.replace(Zo, t + '-' + e.id)), (r.hostAttr = Qo.replace(Zo, t + '-' + e.id)), r;
					}
					return (
						t(n, l),
						(n.prototype.applyToHost = function(n) {
							l.prototype.setAttribute.call(this, n, this.hostAttr, '');
						}),
						(n.prototype.createElement = function(n, u) {
							var e = l.prototype.createElement.call(this, n, u);
							return l.prototype.setAttribute.call(this, e, this.contentAttr, ''), e;
						}),
						n
					);
				})($o),
				ei = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						(r.sharedStylesHost = u),
							(r.hostEl = e),
							(r.component = t),
							(r.shadowRoot = t.encapsulation === Ml.ShadowDom ? e.attachShadow({ mode: 'open' }) : e.createShadowRoot()),
							r.sharedStylesHost.addHost(r.shadowRoot);
						for (var s = Ko(t.id, t.styles, []), a = 0; a < s.length; a++) {
							var o = document.createElement('style');
							(o.textContent = s[a]), r.shadowRoot.appendChild(o);
						}
						return r;
					}
					return (
						t(n, l),
						(n.prototype.nodeOrShadowRoot = function(l) {
							return l === this.hostEl ? this.shadowRoot : l;
						}),
						(n.prototype.destroy = function() {
							this.sharedStylesHost.removeHost(this.shadowRoot);
						}),
						(n.prototype.appendChild = function(n, u) {
							return l.prototype.appendChild.call(this, this.nodeOrShadowRoot(n), u);
						}),
						(n.prototype.insertBefore = function(n, u, e) {
							return l.prototype.insertBefore.call(this, this.nodeOrShadowRoot(n), u, e);
						}),
						(n.prototype.removeChild = function(n, u) {
							return l.prototype.removeChild.call(this, this.nodeOrShadowRoot(n), u);
						}),
						(n.prototype.parentNode = function(n) {
							return this.nodeOrShadowRoot(l.prototype.parentNode.call(this, this.nodeOrShadowRoot(n)));
						}),
						n
					);
				})($o),
				ti =
					('undefined' != typeof Zone && Zone.__symbol__) ||
					function(l) {
						return '__zone_symbol__' + l;
					},
				ri = ti('addEventListener'),
				si = ti('removeEventListener'),
				ai = {},
				oi = '__zone_symbol__propagationStopped';
			'undefined' != typeof Zone && Zone[ti('BLACK_LISTED_EVENTS')] && (ni = {});
			var ii = function(l) {
					return !!ni && ni.hasOwnProperty(l);
				},
				ci = function(l) {
					var n = ai[l.type];
					if (n) {
						var u = this[n];
						if (u) {
							var e = [l];
							if (1 === u.length) return (s = u[0]).zone !== Zone.current ? s.zone.run(s.handler, this, e) : s.handler.apply(this, e);
							for (var t = u.slice(), r = 0; r < t.length && !0 !== l[oi]; r++) {
								var s;
								(s = t[r]).zone !== Zone.current ? s.zone.run(s.handler, this, e) : s.handler.apply(this, e);
							}
						}
					}
				},
				pi = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						return (
							(t.ngZone = u),
							(e &&
								(function(l) {
									return l === xa;
								})(e)) ||
								t.patchEvent(),
							t
						);
					}
					return (
						t(n, l),
						(n.prototype.patchEvent = function() {
							if ('undefined' != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
								var l = (Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation);
								Event.prototype.stopImmediatePropagation = function() {
									this && (this[oi] = !0), l && l.apply(this, arguments);
								};
							}
						}),
						(n.prototype.supports = function(l) {
							return !0;
						}),
						(n.prototype.addEventListener = function(l, n, u) {
							var e = this,
								t = u;
							if (!l[ri] || (Bu.isInAngularZone() && !ii(n))) l.addEventListener(n, t, !1);
							else {
								var r = ai[n];
								r || (r = ai[n] = ti('ANGULAR' + n + 'FALSE'));
								var s = l[r],
									a = s && s.length > 0;
								s || (s = l[r] = []);
								var o = ii(n) ? Zone.root : Zone.current;
								if (0 === s.length) s.push({ zone: o, handler: t });
								else {
									for (var i = !1, c = 0; c < s.length; c++)
										if (s[c].handler === t) {
											i = !0;
											break;
										}
									i || s.push({ zone: o, handler: t });
								}
								a || l[ri](n, ci, !1);
							}
							return function() {
								return e.removeEventListener(l, n, t);
							};
						}),
						(n.prototype.removeEventListener = function(l, n, u) {
							var e = l[si];
							if (!e) return l.removeEventListener.apply(l, [n, u, !1]);
							var t = ai[n],
								r = t && l[t];
							if (!r) return l.removeEventListener.apply(l, [n, u, !1]);
							for (var s = !1, a = 0; a < r.length; a++)
								if (r[a].handler === u) {
									(s = !0), r.splice(a, 1);
									break;
								}
							s ? 0 === r.length && e.apply(l, [n, ci, !1]) : l.removeEventListener.apply(l, [n, u, !1]);
						}),
						n
					);
				})(Ho),
				hi = {
					pan: !0,
					panstart: !0,
					panmove: !0,
					panend: !0,
					pancancel: !0,
					panleft: !0,
					panright: !0,
					panup: !0,
					pandown: !0,
					pinch: !0,
					pinchstart: !0,
					pinchmove: !0,
					pinchend: !0,
					pinchcancel: !0,
					pinchin: !0,
					pinchout: !0,
					press: !0,
					pressup: !0,
					rotate: !0,
					rotatestart: !0,
					rotatemove: !0,
					rotateend: !0,
					rotatecancel: !0,
					swipe: !0,
					swipeleft: !0,
					swiperight: !0,
					swipeup: !0,
					swipedown: !0,
					tap: !0
				},
				di = new gl('HammerGestureConfig'),
				fi = new gl('HammerLoader'),
				gi = (function() {
					function l() {
						(this.events = []), (this.overrides = {});
					}
					return (
						(l.prototype.buildHammer = function(l) {
							var n = new Hammer(l, this.options);
							for (var u in (n.get('pinch').set({ enable: !0 }), n.get('rotate').set({ enable: !0 }), this.overrides)) n.get(u).set(this.overrides[u]);
							return n;
						}),
						l
					);
				})(),
				mi = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						return (r._config = u), (r.console = e), (r.loader = t), r;
					}
					return (
						t(n, l),
						(n.prototype.supports = function(l) {
							return !(
								(!hi.hasOwnProperty(l.toLowerCase()) && !this.isCustomEvent(l)) ||
								(!window.Hammer &&
									!this.loader &&
									(this.console.warn('The "' + l + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
							);
						}),
						(n.prototype.addEventListener = function(l, n, u) {
							var e = this,
								t = this.manager.getZone();
							if (((n = n.toLowerCase()), !window.Hammer && this.loader)) {
								var r = !1,
									s = function() {
										r = !0;
									};
								return (
									this.loader()
										.then(function() {
											if (!window.Hammer) return e.console.warn('The custom HAMMER_LOADER completed, but Hammer.JS is not present.'), void (s = function() {});
											r || (s = e.addEventListener(l, n, u));
										})
										.catch(function() {
											e.console.warn('The "' + n + '" event cannot be bound because the custom Hammer.JS loader failed.'), (s = function() {});
										}),
									function() {
										s();
									}
								);
							}
							return t.runOutsideAngular(function() {
								var r = e._config.buildHammer(l),
									s = function(l) {
										t.runGuarded(function() {
											u(l);
										});
									};
								return (
									r.on(n, s),
									function() {
										r.off(n, s), 'function' == typeof r.destroy && r.destroy();
									}
								);
							});
						}),
						(n.prototype.isCustomEvent = function(l) {
							return this._config.events.indexOf(l) > -1;
						}),
						n
					);
				})(Ho),
				bi = ['alt', 'control', 'meta', 'shift'],
				yi = {
					alt: function(l) {
						return l.altKey;
					},
					control: function(l) {
						return l.ctrlKey;
					},
					meta: function(l) {
						return l.metaKey;
					},
					shift: function(l) {
						return l.shiftKey;
					}
				},
				vi = (function(l) {
					function n(n) {
						return l.call(this, n) || this;
					}
					var u;
					return (
						t(n, l),
						(u = n),
						(n.prototype.supports = function(l) {
							return null != u.parseEventName(l);
						}),
						(n.prototype.addEventListener = function(l, n, e) {
							var t = u.parseEventName(n),
								r = u.eventCallback(t.fullKey, e, this.manager.getZone());
							return this.manager.getZone().runOutsideAngular(function() {
								return xo().onAndCancel(l, t.domEventName, r);
							});
						}),
						(n.parseEventName = function(l) {
							var n = l.toLowerCase().split('.'),
								e = n.shift();
							if (0 === n.length || ('keydown' !== e && 'keyup' !== e)) return null;
							var t = u._normalizeKey(n.pop()),
								r = '';
							if (
								(bi.forEach(function(l) {
									var u = n.indexOf(l);
									u > -1 && (n.splice(u, 1), (r += l + '.'));
								}),
								(r += t),
								0 != n.length || 0 === t.length)
							)
								return null;
							var s = {};
							return (s.domEventName = e), (s.fullKey = r), s;
						}),
						(n.getEventFullKey = function(l) {
							var n = '',
								u = xo().getEventKey(l);
							return (
								' ' === (u = u.toLowerCase()) ? (u = 'space') : '.' === u && (u = 'dot'),
								bi.forEach(function(e) {
									e != u && (0, yi[e])(l) && (n += e + '.');
								}),
								(n += u)
							);
						}),
						(n.eventCallback = function(l, n, e) {
							return function(t) {
								u.getEventFullKey(t) === l &&
									e.runGuarded(function() {
										return n(t);
									});
							};
						}),
						(n._normalizeKey = function(l) {
							switch (l) {
								case 'esc':
									return 'escape';
								default:
									return l;
							}
						}),
						n
					);
				})(Ho),
				wi = (function() {
					return function() {};
				})(),
				ji = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), u;
					}
					return (
						t(n, l),
						(n.prototype.sanitize = function(l, n) {
							if (null == n) return null;
							switch (l) {
								case Mn.NONE:
									return n;
								case Mn.HTML:
									return n instanceof xi
										? n.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(n, 'HTML'),
										  (function(l, n) {
												var u = null;
												try {
													qn = qn || new Ln(l);
													var e = n ? String(n) : '';
													u = qn.getInertBodyElement(e);
													var t = 5,
														r = e;
													do {
														if (0 === t) throw new Error('Failed to sanitize html because the input is unstable');
														t--, (e = r), (r = u.innerHTML), (u = qn.getInertBodyElement(e));
													} while (e !== r);
													var s = new lu(),
														a = s.sanitizeChildren(tu(u) || u);
													return Un() && s.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), a;
												} finally {
													if (u) for (var o = tu(u) || u; o.firstChild; ) o.removeChild(o.firstChild);
												}
										  })(this._doc, String(n)));
								case Mn.STYLE:
									return n instanceof ki
										? n.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(n, 'Style'),
										  (function(l) {
												if (!(l = String(l).trim())) return '';
												var n = l.match(iu);
												return (n && zn(n[1]) === n[1]) ||
													(l.match(ou) &&
														(function(l) {
															for (var n = !0, u = !0, e = 0; e < l.length; e++) {
																var t = l.charAt(e);
																"'" === t && u ? (n = !n) : '"' === t && n && (u = !u);
															}
															return n && u;
														})(l))
													? l
													: (Un() && console.warn('WARNING: sanitizing unsafe style value ' + l + ' (see http://g.co/ng/security#xss).'), 'unsafe');
										  })(n));
								case Mn.SCRIPT:
									if (n instanceof Ci) return n.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(n, 'Script'), new Error('unsafe value used in a script context'));
								case Mn.URL:
									return n instanceof Ei || n instanceof Si ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, 'URL'), zn(String(n)));
								case Mn.RESOURCE_URL:
									if (n instanceof Ei) return n.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(n, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
								default:
									throw new Error('Unexpected SecurityContext ' + l + ' (see http://g.co/ng/security#xss)');
							}
						}),
						(n.prototype.checkNotSafeValue = function(l, n) {
							if (l instanceof _i) throw new Error('Required a safe ' + n + ', got a ' + l.getTypeName() + ' (see http://g.co/ng/security#xss)');
						}),
						(n.prototype.bypassSecurityTrustHtml = function(l) {
							return new xi(l);
						}),
						(n.prototype.bypassSecurityTrustStyle = function(l) {
							return new ki(l);
						}),
						(n.prototype.bypassSecurityTrustScript = function(l) {
							return new Ci(l);
						}),
						(n.prototype.bypassSecurityTrustUrl = function(l) {
							return new Si(l);
						}),
						(n.prototype.bypassSecurityTrustResourceUrl = function(l) {
							return new Ei(l);
						}),
						n
					);
				})(wi),
				_i = (function() {
					function l(l) {
						this.changingThisBreaksApplicationSecurity = l;
					}
					return (
						(l.prototype.toString = function() {
							return 'SafeValue must use [property]=binding: ' + this.changingThisBreaksApplicationSecurity + ' (see http://g.co/ng/security#xss)';
						}),
						l
					);
				})(),
				xi = (function(l) {
					function n() {
						return (null !== l && l.apply(this, arguments)) || this;
					}
					return (
						t(n, l),
						(n.prototype.getTypeName = function() {
							return 'HTML';
						}),
						n
					);
				})(_i),
				ki = (function(l) {
					function n() {
						return (null !== l && l.apply(this, arguments)) || this;
					}
					return (
						t(n, l),
						(n.prototype.getTypeName = function() {
							return 'Style';
						}),
						n
					);
				})(_i),
				Ci = (function(l) {
					function n() {
						return (null !== l && l.apply(this, arguments)) || this;
					}
					return (
						t(n, l),
						(n.prototype.getTypeName = function() {
							return 'Script';
						}),
						n
					);
				})(_i),
				Si = (function(l) {
					function n() {
						return (null !== l && l.apply(this, arguments)) || this;
					}
					return (
						t(n, l),
						(n.prototype.getTypeName = function() {
							return 'URL';
						}),
						n
					);
				})(_i),
				Ei = (function(l) {
					function n() {
						return (null !== l && l.apply(this, arguments)) || this;
					}
					return (
						t(n, l),
						(n.prototype.getTypeName = function() {
							return 'ResourceURL';
						}),
						n
					);
				})(_i),
				Pi = ue(Le, 'browser', [
					{ provide: Su, useValue: 'browser' },
					{
						provide: Cu,
						useValue: function() {
							Io.makeCurrent(), Do.init();
						},
						multi: !0
					},
					{ provide: ua, useClass: Ro, deps: [To] },
					{
						provide: To,
						useFactory: function() {
							return document;
						},
						deps: []
					}
				]);
			function Ii() {
				return new bu();
			}
			var Oi = (function() {
				function l(l) {
					if (l)
						throw new Error(
							'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
						);
				}
				var n;
				return (
					(n = l),
					(l.withServerTransition = function(l) {
						return { ngModule: n, providers: [{ provide: _u, useValue: l.appId }, { provide: Ao, useExisting: _u }, No] };
					}),
					l
				);
			})();
			'undefined' != typeof window && window;
			var Ti = (function() {
					return function(l, n) {
						(this.id = l), (this.url = n);
					};
				})(),
				Mi = (function(l) {
					function n(n, u, e, t) {
						void 0 === e && (e = 'imperative'), void 0 === t && (t = null);
						var r = l.call(this, n, u) || this;
						return (r.navigationTrigger = e), (r.restoredState = t), r;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return 'NavigationStart(id: ' + this.id + ", url: '" + this.url + "')";
						}),
						n
					);
				})(Ti),
				Ri = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n, u) || this;
						return (t.urlAfterRedirects = e), t;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return 'NavigationEnd(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
						}),
						n
					);
				})(Ti),
				Ai = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n, u) || this;
						return (t.reason = e), t;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return 'NavigationCancel(id: ' + this.id + ", url: '" + this.url + "')";
						}),
						n
					);
				})(Ti),
				Ni = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n, u) || this;
						return (t.error = e), t;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return 'NavigationError(id: ' + this.id + ", url: '" + this.url + "', error: " + this.error + ')';
						}),
						n
					);
				})(Ti),
				Di = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n, u) || this;
						return (r.urlAfterRedirects = e), (r.state = t), r;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return 'RoutesRecognized(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ')';
						}),
						n
					);
				})(Ti),
				Ui = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n, u) || this;
						return (r.urlAfterRedirects = e), (r.state = t), r;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return 'GuardsCheckStart(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ')';
						}),
						n
					);
				})(Ti),
				Li = (function(l) {
					function n(n, u, e, t, r) {
						var s = l.call(this, n, u) || this;
						return (s.urlAfterRedirects = e), (s.state = t), (s.shouldActivate = r), s;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return (
								'GuardsCheckEnd(id: ' +
								this.id +
								", url: '" +
								this.url +
								"', urlAfterRedirects: '" +
								this.urlAfterRedirects +
								"', state: " +
								this.state +
								', shouldActivate: ' +
								this.shouldActivate +
								')'
							);
						}),
						n
					);
				})(Ti),
				Vi = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n, u) || this;
						return (r.urlAfterRedirects = e), (r.state = t), r;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return 'ResolveStart(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ')';
						}),
						n
					);
				})(Ti),
				Fi = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n, u) || this;
						return (r.urlAfterRedirects = e), (r.state = t), r;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return 'ResolveEnd(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ')';
						}),
						n
					);
				})(Ti),
				zi = (function() {
					function l(l) {
						this.route = l;
					}
					return (
						(l.prototype.toString = function() {
							return 'RouteConfigLoadStart(path: ' + this.route.path + ')';
						}),
						l
					);
				})(),
				Hi = (function() {
					function l(l) {
						this.route = l;
					}
					return (
						(l.prototype.toString = function() {
							return 'RouteConfigLoadEnd(path: ' + this.route.path + ')';
						}),
						l
					);
				})(),
				Bi = (function() {
					function l(l) {
						this.snapshot = l;
					}
					return (
						(l.prototype.toString = function() {
							return "ChildActivationStart(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') + "')";
						}),
						l
					);
				})(),
				qi = (function() {
					function l(l) {
						this.snapshot = l;
					}
					return (
						(l.prototype.toString = function() {
							return "ChildActivationEnd(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') + "')";
						}),
						l
					);
				})(),
				Gi = (function() {
					function l(l) {
						this.snapshot = l;
					}
					return (
						(l.prototype.toString = function() {
							return "ActivationStart(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') + "')";
						}),
						l
					);
				})(),
				Zi = (function() {
					function l(l) {
						this.snapshot = l;
					}
					return (
						(l.prototype.toString = function() {
							return "ActivationEnd(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') + "')";
						}),
						l
					);
				})(),
				Qi = (function() {
					function l(l, n, u) {
						(this.routerEvent = l), (this.position = n), (this.anchor = u);
					}
					return (
						(l.prototype.toString = function() {
							return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ', ' + this.position[1] : null) + "')";
						}),
						l
					);
				})(),
				Wi = (function() {
					return function() {};
				})(),
				Ki = 'primary',
				Yi = (function() {
					function l(l) {
						this.params = l || {};
					}
					return (
						(l.prototype.has = function(l) {
							return this.params.hasOwnProperty(l);
						}),
						(l.prototype.get = function(l) {
							if (this.has(l)) {
								var n = this.params[l];
								return Array.isArray(n) ? n[0] : n;
							}
							return null;
						}),
						(l.prototype.getAll = function(l) {
							if (this.has(l)) {
								var n = this.params[l];
								return Array.isArray(n) ? n : [n];
							}
							return [];
						}),
						Object.defineProperty(l.prototype, 'keys', {
							get: function() {
								return Object.keys(this.params);
							},
							enumerable: !0,
							configurable: !0
						}),
						l
					);
				})();
			function Ji(l) {
				return new Yi(l);
			}
			var $i = 'ngNavigationCancelingError';
			function Xi(l) {
				var n = Error('NavigationCancelingError: ' + l);
				return (n[$i] = !0), n;
			}
			function lc(l, n, u) {
				var e = u.path.split('/');
				if (e.length > l.length) return null;
				if ('full' === u.pathMatch && (n.hasChildren() || e.length < l.length)) return null;
				for (var t = {}, r = 0; r < e.length; r++) {
					var s = e[r],
						a = l[r];
					if (s.startsWith(':')) t[s.substring(1)] = a;
					else if (s !== a.path) return null;
				}
				return { consumed: l.slice(0, e.length), posParams: t };
			}
			var nc = (function() {
				return function(l, n) {
					(this.routes = l), (this.module = n);
				};
			})();
			function uc(l, n) {
				void 0 === n && (n = '');
				for (var u = 0; u < l.length; u++) {
					var e = l[u];
					ec(e, tc(n, e));
				}
			}
			function ec(l, n) {
				if (!l)
					throw new Error(
						"\n      Invalid configuration of route '" +
							n +
							"': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
					);
				if (Array.isArray(l)) throw new Error("Invalid configuration of route '" + n + "': Array cannot be specified");
				if (!l.component && !l.children && !l.loadChildren && l.outlet && l.outlet !== Ki)
					throw new Error("Invalid configuration of route '" + n + "': a componentless route without children or loadChildren cannot have a named outlet set");
				if (l.redirectTo && l.children) throw new Error("Invalid configuration of route '" + n + "': redirectTo and children cannot be used together");
				if (l.redirectTo && l.loadChildren) throw new Error("Invalid configuration of route '" + n + "': redirectTo and loadChildren cannot be used together");
				if (l.children && l.loadChildren) throw new Error("Invalid configuration of route '" + n + "': children and loadChildren cannot be used together");
				if (l.redirectTo && l.component) throw new Error("Invalid configuration of route '" + n + "': redirectTo and component cannot be used together");
				if (l.path && l.matcher) throw new Error("Invalid configuration of route '" + n + "': path and matcher cannot be used together");
				if (void 0 === l.redirectTo && !l.component && !l.children && !l.loadChildren)
					throw new Error("Invalid configuration of route '" + n + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
				if (void 0 === l.path && void 0 === l.matcher) throw new Error("Invalid configuration of route '" + n + "': routes must have either a path or a matcher specified");
				if ('string' == typeof l.path && '/' === l.path.charAt(0)) throw new Error("Invalid configuration of route '" + n + "': path cannot start with a slash");
				if ('' === l.path && void 0 !== l.redirectTo && void 0 === l.pathMatch)
					throw new Error(
						'Invalid configuration of route \'{path: "' +
							n +
							'", redirectTo: "' +
							l.redirectTo +
							"\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
					);
				if (void 0 !== l.pathMatch && 'full' !== l.pathMatch && 'prefix' !== l.pathMatch)
					throw new Error("Invalid configuration of route '" + n + "': pathMatch can only be set to 'prefix' or 'full'");
				l.children && uc(l.children, n);
			}
			function tc(l, n) {
				return n ? (l || n.path ? (l && !n.path ? l + '/' : !l && n.path ? n.path : l + '/' + n.path) : '') : l;
			}
			function rc(l) {
				var n = l.children && l.children.map(rc),
					u = n ? r({}, l, { children: n }) : r({}, l);
				return !u.component && (n || u.loadChildren) && u.outlet && u.outlet !== Ki && (u.component = Wi), u;
			}
			function sc(l, n) {
				var u,
					e = Object.keys(l),
					t = Object.keys(n);
				if (e.length != t.length) return !1;
				for (var r = 0; r < e.length; r++) if (l[(u = e[r])] !== n[u]) return !1;
				return !0;
			}
			function ac(l) {
				return Array.prototype.concat.apply([], l);
			}
			function oc(l) {
				return l.length > 0 ? l[l.length - 1] : null;
			}
			function ic(l, n) {
				for (var u in l) l.hasOwnProperty(u) && n(l[u], u);
			}
			function cc(l) {
				return vu(l) ? l : yu(l) ? J(Promise.resolve(l)) : Sa(l);
			}
			function pc(l, n, u) {
				return u
					? (function(l, n) {
							return sc(l, n);
					  })(l.queryParams, n.queryParams) &&
							(function l(n, u) {
								if (!gc(n.segments, u.segments)) return !1;
								if (n.numberOfChildren !== u.numberOfChildren) return !1;
								for (var e in u.children) {
									if (!n.children[e]) return !1;
									if (!l(n.children[e], u.children[e])) return !1;
								}
								return !0;
							})(l.root, n.root)
					: (function(l, n) {
							return (
								Object.keys(n).length <= Object.keys(l).length &&
								Object.keys(n).every(function(u) {
									return n[u] === l[u];
								})
							);
					  })(l.queryParams, n.queryParams) &&
							(function l(n, u) {
								return (function n(u, e, t) {
									if (u.segments.length > t.length) return !!gc((s = u.segments.slice(0, t.length)), t) && !e.hasChildren();
									if (u.segments.length === t.length) {
										if (!gc(u.segments, t)) return !1;
										for (var r in e.children) {
											if (!u.children[r]) return !1;
											if (!l(u.children[r], e.children[r])) return !1;
										}
										return !0;
									}
									var s = t.slice(0, u.segments.length),
										a = t.slice(u.segments.length);
									return !!gc(u.segments, s) && !!u.children[Ki] && n(u.children[Ki], e, a);
								})(n, u, u.segments);
							})(l.root, n.root);
			}
			var hc = (function() {
					function l(l, n, u) {
						(this.root = l), (this.queryParams = n), (this.fragment = u);
					}
					return (
						Object.defineProperty(l.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Ji(this.queryParams)), this._queryParamMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return vc.serialize(this);
						}),
						l
					);
				})(),
				dc = (function() {
					function l(l, n) {
						var u = this;
						(this.segments = l),
							(this.children = n),
							(this.parent = null),
							ic(n, function(l, n) {
								return (l.parent = u);
							});
					}
					return (
						(l.prototype.hasChildren = function() {
							return this.numberOfChildren > 0;
						}),
						Object.defineProperty(l.prototype, 'numberOfChildren', {
							get: function() {
								return Object.keys(this.children).length;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return wc(this);
						}),
						l
					);
				})(),
				fc = (function() {
					function l(l, n) {
						(this.path = l), (this.parameters = n);
					}
					return (
						Object.defineProperty(l.prototype, 'parameterMap', {
							get: function() {
								return this._parameterMap || (this._parameterMap = Ji(this.parameters)), this._parameterMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return Sc(this);
						}),
						l
					);
				})();
			function gc(l, n) {
				return (
					l.length === n.length &&
					l.every(function(l, u) {
						return l.path === n[u].path;
					})
				);
			}
			function mc(l, n) {
				var u = [];
				return (
					ic(l.children, function(l, e) {
						e === Ki && (u = u.concat(n(l, e)));
					}),
					ic(l.children, function(l, e) {
						e !== Ki && (u = u.concat(n(l, e)));
					}),
					u
				);
			}
			var bc = (function() {
					return function() {};
				})(),
				yc = (function() {
					function l() {}
					return (
						(l.prototype.parse = function(l) {
							var n = new Tc(l);
							return new hc(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment());
						}),
						(l.prototype.serialize = function(l) {
							var n, u;
							return (
								'/' +
								(function l(n, u) {
									if (!n.hasChildren()) return wc(n);
									if (u) {
										var e = n.children[Ki] ? l(n.children[Ki], !1) : '',
											t = [];
										return (
											ic(n.children, function(n, u) {
												u !== Ki && t.push(u + ':' + l(n, !1));
											}),
											t.length > 0 ? e + '(' + t.join('//') + ')' : e
										);
									}
									var r = mc(n, function(u, e) {
										return e === Ki ? [l(n.children[Ki], !1)] : [e + ':' + l(u, !1)];
									});
									return wc(n) + '/(' + r.join('//') + ')';
								})(l.root, !0) +
								((n = l.queryParams),
								(u = Object.keys(n).map(function(l) {
									var u = n[l];
									return Array.isArray(u)
										? u
												.map(function(n) {
													return _c(l) + '=' + _c(n);
												})
												.join('&')
										: _c(l) + '=' + _c(u);
								})).length
									? '?' + u.join('&')
									: '') +
								('string' == typeof l.fragment ? '#' + encodeURI(l.fragment) : '')
							);
						}),
						l
					);
				})(),
				vc = new yc();
			function wc(l) {
				return l.segments
					.map(function(l) {
						return Sc(l);
					})
					.join('/');
			}
			function jc(l) {
				return encodeURIComponent(l)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function _c(l) {
				return jc(l).replace(/%3B/gi, ';');
			}
			function xc(l) {
				return jc(l)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function kc(l) {
				return decodeURIComponent(l);
			}
			function Cc(l) {
				return kc(l.replace(/\+/g, '%20'));
			}
			function Sc(l) {
				return (
					'' +
					xc(l.path) +
					((n = l.parameters),
					Object.keys(n)
						.map(function(l) {
							return ';' + xc(l) + '=' + xc(n[l]);
						})
						.join(''))
				);
				var n;
			}
			var Ec = /^[^\/()?;=#]+/;
			function Pc(l) {
				var n = l.match(Ec);
				return n ? n[0] : '';
			}
			var Ic = /^[^=?&#]+/,
				Oc = /^[^?&#]+/,
				Tc = (function() {
					function l(l) {
						(this.url = l), (this.remaining = l);
					}
					return (
						(l.prototype.parseRootSegment = function() {
							return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new dc([], {}) : new dc([], this.parseChildren());
						}),
						(l.prototype.parseQueryParams = function() {
							var l = {};
							if (this.consumeOptional('?'))
								do {
									this.parseQueryParam(l);
								} while (this.consumeOptional('&'));
							return l;
						}),
						(l.prototype.parseFragment = function() {
							return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
						}),
						(l.prototype.parseChildren = function() {
							if ('' === this.remaining) return {};
							this.consumeOptional('/');
							var l = [];
							for (this.peekStartsWith('(') || l.push(this.parseSegment()); this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/('); )
								this.capture('/'), l.push(this.parseSegment());
							var n = {};
							this.peekStartsWith('/(') && (this.capture('/'), (n = this.parseParens(!0)));
							var u = {};
							return this.peekStartsWith('(') && (u = this.parseParens(!1)), (l.length > 0 || Object.keys(n).length > 0) && (u[Ki] = new dc(l, n)), u;
						}),
						(l.prototype.parseSegment = function() {
							var l = Pc(this.remaining);
							if ('' === l && this.peekStartsWith(';')) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
							return this.capture(l), new fc(kc(l), this.parseMatrixParams());
						}),
						(l.prototype.parseMatrixParams = function() {
							for (var l = {}; this.consumeOptional(';'); ) this.parseParam(l);
							return l;
						}),
						(l.prototype.parseParam = function(l) {
							var n = Pc(this.remaining);
							if (n) {
								this.capture(n);
								var u = '';
								if (this.consumeOptional('=')) {
									var e = Pc(this.remaining);
									e && this.capture((u = e));
								}
								l[kc(n)] = kc(u);
							}
						}),
						(l.prototype.parseQueryParam = function(l) {
							var n,
								u = (n = this.remaining.match(Ic)) ? n[0] : '';
							if (u) {
								this.capture(u);
								var e = '';
								if (this.consumeOptional('=')) {
									var t = (function(l) {
										var n = l.match(Oc);
										return n ? n[0] : '';
									})(this.remaining);
									t && this.capture((e = t));
								}
								var r = Cc(u),
									s = Cc(e);
								if (l.hasOwnProperty(r)) {
									var a = l[r];
									Array.isArray(a) || (l[r] = a = [a]), a.push(s);
								} else l[r] = s;
							}
						}),
						(l.prototype.parseParens = function(l) {
							var n = {};
							for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
								var u = Pc(this.remaining),
									e = this.remaining[u.length];
								if ('/' !== e && ')' !== e && ';' !== e) throw new Error("Cannot parse url '" + this.url + "'");
								var t = void 0;
								u.indexOf(':') > -1 ? ((t = u.substr(0, u.indexOf(':'))), this.capture(t), this.capture(':')) : l && (t = Ki);
								var r = this.parseChildren();
								(n[t] = 1 === Object.keys(r).length ? r[Ki] : new dc([], r)), this.consumeOptional('//');
							}
							return n;
						}),
						(l.prototype.peekStartsWith = function(l) {
							return this.remaining.startsWith(l);
						}),
						(l.prototype.consumeOptional = function(l) {
							return !!this.peekStartsWith(l) && ((this.remaining = this.remaining.substring(l.length)), !0);
						}),
						(l.prototype.capture = function(l) {
							if (!this.consumeOptional(l)) throw new Error('Expected "' + l + '".');
						}),
						l
					);
				})(),
				Mc = (function() {
					function l(l) {
						this._root = l;
					}
					return (
						Object.defineProperty(l.prototype, 'root', {
							get: function() {
								return this._root.value;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.parent = function(l) {
							var n = this.pathFromRoot(l);
							return n.length > 1 ? n[n.length - 2] : null;
						}),
						(l.prototype.children = function(l) {
							var n = Rc(l, this._root);
							return n
								? n.children.map(function(l) {
										return l.value;
								  })
								: [];
						}),
						(l.prototype.firstChild = function(l) {
							var n = Rc(l, this._root);
							return n && n.children.length > 0 ? n.children[0].value : null;
						}),
						(l.prototype.siblings = function(l) {
							var n = Ac(l, this._root);
							return n.length < 2
								? []
								: n[n.length - 2].children
										.map(function(l) {
											return l.value;
										})
										.filter(function(n) {
											return n !== l;
										});
						}),
						(l.prototype.pathFromRoot = function(l) {
							return Ac(l, this._root).map(function(l) {
								return l.value;
							});
						}),
						l
					);
				})();
			function Rc(l, n) {
				var u, e;
				if (l === n.value) return n;
				try {
					for (var t = o(n.children), r = t.next(); !r.done; r = t.next()) {
						var s = Rc(l, r.value);
						if (s) return s;
					}
				} catch (a) {
					u = { error: a };
				} finally {
					try {
						r && !r.done && (e = t.return) && e.call(t);
					} finally {
						if (u) throw u.error;
					}
				}
				return null;
			}
			function Ac(l, n) {
				var u, e;
				if (l === n.value) return [n];
				try {
					for (var t = o(n.children), r = t.next(); !r.done; r = t.next()) {
						var s = Ac(l, r.value);
						if (s.length) return s.unshift(n), s;
					}
				} catch (a) {
					u = { error: a };
				} finally {
					try {
						r && !r.done && (e = t.return) && e.call(t);
					} finally {
						if (u) throw u.error;
					}
				}
				return [];
			}
			var Nc = (function() {
				function l(l, n) {
					(this.value = l), (this.children = n);
				}
				return (
					(l.prototype.toString = function() {
						return 'TreeNode(' + this.value + ')';
					}),
					l
				);
			})();
			function Dc(l) {
				var n = {};
				return (
					l &&
						l.children.forEach(function(l) {
							return (n[l.value.outlet] = l);
						}),
					n
				);
			}
			var Uc = (function(l) {
				function n(n, u) {
					var e = l.call(this, n) || this;
					return (e.snapshot = u), Bc(e, n), e;
				}
				return (
					t(n, l),
					(n.prototype.toString = function() {
						return this.snapshot.toString();
					}),
					n
				);
			})(Mc);
			function Lc(l, n) {
				var u = (function(l, n) {
						var u = new zc([], {}, {}, '', {}, Ki, n, null, l.root, -1, {});
						return new Hc('', new Nc(u, []));
					})(l, n),
					e = new Ea([new fc('', {})]),
					t = new Ea({}),
					r = new Ea({}),
					s = new Ea({}),
					a = new Ea(''),
					o = new Vc(e, t, s, a, r, Ki, n, u.root);
				return (o.snapshot = u.root), new Uc(new Nc(o, []), u);
			}
			var Vc = (function() {
				function l(l, n, u, e, t, r, s, a) {
					(this.url = l), (this.params = n), (this.queryParams = u), (this.fragment = e), (this.data = t), (this.outlet = r), (this.component = s), (this._futureSnapshot = a);
				}
				return (
					Object.defineProperty(l.prototype, 'routeConfig', {
						get: function() {
							return this._futureSnapshot.routeConfig;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'root', {
						get: function() {
							return this._routerState.root;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'parent', {
						get: function() {
							return this._routerState.parent(this);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'firstChild', {
						get: function() {
							return this._routerState.firstChild(this);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'children', {
						get: function() {
							return this._routerState.children(this);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'pathFromRoot', {
						get: function() {
							return this._routerState.pathFromRoot(this);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'paramMap', {
						get: function() {
							return (
								this._paramMap ||
									(this._paramMap = this.params.pipe(
										Q(function(l) {
											return Ji(l);
										})
									)),
								this._paramMap
							);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'queryParamMap', {
						get: function() {
							return (
								this._queryParamMap ||
									(this._queryParamMap = this.queryParams.pipe(
										Q(function(l) {
											return Ji(l);
										})
									)),
								this._queryParamMap
							);
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.toString = function() {
						return this.snapshot ? this.snapshot.toString() : 'Future(' + this._futureSnapshot + ')';
					}),
					l
				);
			})();
			function Fc(l, n) {
				void 0 === n && (n = 'emptyOnly');
				var u = l.pathFromRoot,
					e = 0;
				if ('always' !== n)
					for (e = u.length - 1; e >= 1; ) {
						var t = u[e],
							s = u[e - 1];
						if (t.routeConfig && '' === t.routeConfig.path) e--;
						else {
							if (s.component) break;
							e--;
						}
					}
				return (function(l) {
					return l.reduce(
						function(l, n) {
							return { params: r({}, l.params, n.params), data: r({}, l.data, n.data), resolve: r({}, l.resolve, n._resolvedData) };
						},
						{ params: {}, data: {}, resolve: {} }
					);
				})(u.slice(e));
			}
			var zc = (function() {
					function l(l, n, u, e, t, r, s, a, o, i, c) {
						(this.url = l),
							(this.params = n),
							(this.queryParams = u),
							(this.fragment = e),
							(this.data = t),
							(this.outlet = r),
							(this.component = s),
							(this.routeConfig = a),
							(this._urlSegment = o),
							(this._lastPathIndex = i),
							(this._resolve = c);
					}
					return (
						Object.defineProperty(l.prototype, 'root', {
							get: function() {
								return this._routerState.root;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'parent', {
							get: function() {
								return this._routerState.parent(this);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'firstChild', {
							get: function() {
								return this._routerState.firstChild(this);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'children', {
							get: function() {
								return this._routerState.children(this);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'pathFromRoot', {
							get: function() {
								return this._routerState.pathFromRoot(this);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'paramMap', {
							get: function() {
								return this._paramMap || (this._paramMap = Ji(this.params)), this._paramMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Ji(this.queryParams)), this._queryParamMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return (
								"Route(url:'" +
								this.url
									.map(function(l) {
										return l.toString();
									})
									.join('/') +
								"', path:'" +
								(this.routeConfig ? this.routeConfig.path : '') +
								"')"
							);
						}),
						l
					);
				})(),
				Hc = (function(l) {
					function n(n, u) {
						var e = l.call(this, u) || this;
						return (e.url = n), Bc(e, u), e;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return qc(this._root);
						}),
						n
					);
				})(Mc);
			function Bc(l, n) {
				(n.value._routerState = l),
					n.children.forEach(function(n) {
						return Bc(l, n);
					});
			}
			function qc(l) {
				var n = l.children.length > 0 ? ' { ' + l.children.map(qc).join(', ') + ' } ' : '';
				return '' + l.value + n;
			}
			function Gc(l) {
				if (l.snapshot) {
					var n = l.snapshot,
						u = l._futureSnapshot;
					(l.snapshot = u),
						sc(n.queryParams, u.queryParams) || l.queryParams.next(u.queryParams),
						n.fragment !== u.fragment && l.fragment.next(u.fragment),
						sc(n.params, u.params) || l.params.next(u.params),
						(function(l, n) {
							if (l.length !== n.length) return !1;
							for (var u = 0; u < l.length; ++u) if (!sc(l[u], n[u])) return !1;
							return !0;
						})(n.url, u.url) || l.url.next(u.url),
						sc(n.data, u.data) || l.data.next(u.data);
				} else (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
			}
			function Zc(l, n) {
				var u, e;
				return (
					sc(l.params, n.params) &&
					gc((u = l.url), (e = n.url)) &&
					u.every(function(l, n) {
						return sc(l.parameters, e[n].parameters);
					}) &&
					!(!l.parent != !n.parent) &&
					(!l.parent || Zc(l.parent, n.parent))
				);
			}
			function Qc(l) {
				return 'object' == typeof l && null != l && !l.outlets && !l.segmentPath;
			}
			function Wc(l, n, u, e, t) {
				var r = {};
				return (
					e &&
						ic(e, function(l, n) {
							r[n] = Array.isArray(l)
								? l.map(function(l) {
										return '' + l;
								  })
								: '' + l;
						}),
					new hc(
						u.root === l
							? n
							: (function l(n, u, e) {
									var t = {};
									return (
										ic(n.children, function(n, r) {
											t[r] = n === u ? e : l(n, u, e);
										}),
										new dc(n.segments, t)
									);
							  })(u.root, l, n),
						r,
						t
					)
				);
			}
			var Kc = (function() {
					function l(l, n, u) {
						if (((this.isAbsolute = l), (this.numberOfDoubleDots = n), (this.commands = u), l && u.length > 0 && Qc(u[0]))) throw new Error('Root segment cannot have matrix parameters');
						var e = u.find(function(l) {
							return 'object' == typeof l && null != l && l.outlets;
						});
						if (e && e !== oc(u)) throw new Error('{outlets:{}} has to be the last command');
					}
					return (
						(l.prototype.toRoot = function() {
							return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
						}),
						l
					);
				})(),
				Yc = (function() {
					return function(l, n, u) {
						(this.segmentGroup = l), (this.processChildren = n), (this.index = u);
					};
				})();
			function Jc(l) {
				return 'object' == typeof l && null != l && l.outlets ? l.outlets[Ki] : '' + l;
			}
			function $c(l, n, u) {
				if ((l || (l = new dc([], {})), 0 === l.segments.length && l.hasChildren())) return Xc(l, n, u);
				var e = (function(l, n, u) {
						for (var e = 0, t = n, r = { match: !1, pathIndex: 0, commandIndex: 0 }; t < l.segments.length; ) {
							if (e >= u.length) return r;
							var s = l.segments[t],
								a = Jc(u[e]),
								o = e < u.length - 1 ? u[e + 1] : null;
							if (t > 0 && void 0 === a) break;
							if (a && o && 'object' == typeof o && void 0 === o.outlets) {
								if (!ep(a, o, s)) return r;
								e += 2;
							} else {
								if (!ep(a, {}, s)) return r;
								e++;
							}
							t++;
						}
						return { match: !0, pathIndex: t, commandIndex: e };
					})(l, n, u),
					t = u.slice(e.commandIndex);
				if (e.match && e.pathIndex < l.segments.length) {
					var r = new dc(l.segments.slice(0, e.pathIndex), {});
					return (r.children[Ki] = new dc(l.segments.slice(e.pathIndex), l.children)), Xc(r, 0, t);
				}
				return e.match && 0 === t.length ? new dc(l.segments, {}) : e.match && !l.hasChildren() ? lp(l, n, u) : e.match ? Xc(l, 0, t) : lp(l, n, u);
			}
			function Xc(l, n, u) {
				if (0 === u.length) return new dc(l.segments, {});
				var e = (function(l) {
						var n, u;
						return 'object' != typeof l[0] ? (((n = {})[Ki] = l), n) : void 0 === l[0].outlets ? (((u = {})[Ki] = l), u) : l[0].outlets;
					})(u),
					t = {};
				return (
					ic(e, function(u, e) {
						null !== u && (t[e] = $c(l.children[e], n, u));
					}),
					ic(l.children, function(l, n) {
						void 0 === e[n] && (t[n] = l);
					}),
					new dc(l.segments, t)
				);
			}
			function lp(l, n, u) {
				for (var e = l.segments.slice(0, n), t = 0; t < u.length; ) {
					if ('object' == typeof u[t] && void 0 !== u[t].outlets) {
						var r = np(u[t].outlets);
						return new dc(e, r);
					}
					if (0 === t && Qc(u[0])) e.push(new fc(l.segments[n].path, u[0])), t++;
					else {
						var s = Jc(u[t]),
							a = t < u.length - 1 ? u[t + 1] : null;
						s && a && Qc(a) ? (e.push(new fc(s, up(a))), (t += 2)) : (e.push(new fc(s, {})), t++);
					}
				}
				return new dc(e, {});
			}
			function np(l) {
				var n = {};
				return (
					ic(l, function(l, u) {
						null !== l && (n[u] = lp(new dc([], {}), 0, l));
					}),
					n
				);
			}
			function up(l) {
				var n = {};
				return (
					ic(l, function(l, u) {
						return (n[u] = '' + l);
					}),
					n
				);
			}
			function ep(l, n, u) {
				return l == u.path && sc(n, u.parameters);
			}
			var tp = (function() {
				function l(l, n, u, e) {
					(this.routeReuseStrategy = l), (this.futureState = n), (this.currState = u), (this.forwardEvent = e);
				}
				return (
					(l.prototype.activate = function(l) {
						var n = this.futureState._root,
							u = this.currState ? this.currState._root : null;
						this.deactivateChildRoutes(n, u, l), Gc(this.futureState.root), this.activateChildRoutes(n, u, l);
					}),
					(l.prototype.deactivateChildRoutes = function(l, n, u) {
						var e = this,
							t = Dc(n);
						l.children.forEach(function(l) {
							var n = l.value.outlet;
							e.deactivateRoutes(l, t[n], u), delete t[n];
						}),
							ic(t, function(l, n) {
								e.deactivateRouteAndItsChildren(l, u);
							});
					}),
					(l.prototype.deactivateRoutes = function(l, n, u) {
						var e = l.value,
							t = n ? n.value : null;
						if (e === t)
							if (e.component) {
								var r = u.getContext(e.outlet);
								r && this.deactivateChildRoutes(l, n, r.children);
							} else this.deactivateChildRoutes(l, n, u);
						else t && this.deactivateRouteAndItsChildren(n, u);
					}),
					(l.prototype.deactivateRouteAndItsChildren = function(l, n) {
						this.routeReuseStrategy.shouldDetach(l.value.snapshot) ? this.detachAndStoreRouteSubtree(l, n) : this.deactivateRouteAndOutlet(l, n);
					}),
					(l.prototype.detachAndStoreRouteSubtree = function(l, n) {
						var u = n.getContext(l.value.outlet);
						if (u && u.outlet) {
							var e = u.outlet.detach(),
								t = u.children.onOutletDeactivated();
							this.routeReuseStrategy.store(l.value.snapshot, { componentRef: e, route: l, contexts: t });
						}
					}),
					(l.prototype.deactivateRouteAndOutlet = function(l, n) {
						var u = this,
							e = n.getContext(l.value.outlet);
						if (e) {
							var t = Dc(l),
								r = l.value.component ? e.children : n;
							ic(t, function(l, n) {
								return u.deactivateRouteAndItsChildren(l, r);
							}),
								e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated());
						}
					}),
					(l.prototype.activateChildRoutes = function(l, n, u) {
						var e = this,
							t = Dc(n);
						l.children.forEach(function(l) {
							e.activateRoutes(l, t[l.value.outlet], u), e.forwardEvent(new Zi(l.value.snapshot));
						}),
							l.children.length && this.forwardEvent(new qi(l.value.snapshot));
					}),
					(l.prototype.activateRoutes = function(l, n, u) {
						var e = l.value,
							t = n ? n.value : null;
						if ((Gc(e), e === t))
							if (e.component) {
								var r = u.getOrCreateContext(e.outlet);
								this.activateChildRoutes(l, n, r.children);
							} else this.activateChildRoutes(l, n, u);
						else if (e.component)
							if (((r = u.getOrCreateContext(e.outlet)), this.routeReuseStrategy.shouldAttach(e.snapshot))) {
								var s = this.routeReuseStrategy.retrieve(e.snapshot);
								this.routeReuseStrategy.store(e.snapshot, null),
									r.children.onOutletReAttached(s.contexts),
									(r.attachRef = s.componentRef),
									(r.route = s.route.value),
									r.outlet && r.outlet.attach(s.componentRef, s.route.value),
									rp(s.route);
							} else {
								var a = (function(l) {
										for (var n = e.snapshot.parent; n; n = n.parent) {
											var u = n.routeConfig;
											if (u && u._loadedConfig) return u._loadedConfig;
											if (u && u.component) return null;
										}
										return null;
									})(),
									o = a ? a.module.componentFactoryResolver : null;
								(r.attachRef = null), (r.route = e), (r.resolver = o), r.outlet && r.outlet.activateWith(e, o), this.activateChildRoutes(l, null, r.children);
							}
						else this.activateChildRoutes(l, null, u);
					}),
					l
				);
			})();
			function rp(l) {
				Gc(l.value), l.children.forEach(rp);
			}
			function sp(l) {
				return 'function' == typeof l;
			}
			function ap(l) {
				return l instanceof hc;
			}
			var op = (function() {
					return function(l) {
						this.segmentGroup = l || null;
					};
				})(),
				ip = (function() {
					return function(l) {
						this.urlTree = l;
					};
				})();
			function cp(l) {
				return new I(function(n) {
					return n.error(new op(l));
				});
			}
			function pp(l) {
				return new I(function(n) {
					return n.error(new ip(l));
				});
			}
			function hp(l) {
				return new I(function(n) {
					return n.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + l + "'"));
				});
			}
			var dp = (function() {
				function l(l, n, u, e, t) {
					(this.configLoader = n), (this.urlSerializer = u), (this.urlTree = e), (this.config = t), (this.allowRedirects = !0), (this.ngModule = l.get(xn));
				}
				return (
					(l.prototype.apply = function() {
						var l = this;
						return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Ki)
							.pipe(
								Q(function(n) {
									return l.createUrlTree(n, l.urlTree.queryParams, l.urlTree.fragment);
								})
							)
							.pipe(
								Xa(function(n) {
									if (n instanceof ip) return (l.allowRedirects = !1), l.match(n.urlTree);
									if (n instanceof op) throw l.noMatchError(n);
									throw n;
								})
							);
					}),
					(l.prototype.match = function(l) {
						var n = this;
						return this.expandSegmentGroup(this.ngModule, this.config, l.root, Ki)
							.pipe(
								Q(function(u) {
									return n.createUrlTree(u, l.queryParams, l.fragment);
								})
							)
							.pipe(
								Xa(function(l) {
									if (l instanceof op) throw n.noMatchError(l);
									throw l;
								})
							);
					}),
					(l.prototype.noMatchError = function(l) {
						return new Error("Cannot match any routes. URL Segment: '" + l.segmentGroup + "'");
					}),
					(l.prototype.createUrlTree = function(l, n, u) {
						var e,
							t = l.segments.length > 0 ? new dc([], (((e = {})[Ki] = l), e)) : l;
						return new hc(t, n, u);
					}),
					(l.prototype.expandSegmentGroup = function(l, n, u, e) {
						return 0 === u.segments.length && u.hasChildren()
							? this.expandChildren(l, n, u).pipe(
									Q(function(l) {
										return new dc([], l);
									})
							  )
							: this.expandSegment(l, u, n, u.segments, e, !0);
					}),
					(l.prototype.expandChildren = function(l, n, u) {
						var e = this;
						return (function(u, t) {
							if (0 === Object.keys(u).length) return Sa({});
							var r = [],
								s = [],
								a = {};
							return (
								ic(u, function(u, t) {
									var o,
										i,
										c = ((o = t), (i = u), e.expandSegmentGroup(l, n, i, o)).pipe(
											Q(function(l) {
												return (a[t] = l);
											})
										);
									t === Ki ? r.push(c) : s.push(c);
								}),
								Sa.apply(null, r.concat(s)).pipe(
									Da(),
									$a(),
									Q(function() {
										return a;
									})
								)
							);
						})(u.children);
					}),
					(l.prototype.expandSegment = function(l, n, u, e, t, r) {
						var s = this;
						return Sa.apply(void 0, c(u)).pipe(
							Q(function(a) {
								return s.expandSegmentAgainstRoute(l, n, u, a, e, t, r).pipe(
									Xa(function(l) {
										if (l instanceof op) return Sa(null);
										throw l;
									})
								);
							}),
							Da(),
							ro(function(l) {
								return !!l;
							}),
							Xa(function(l, u) {
								if (l instanceof Ia || 'EmptyError' === l.name) {
									if (s.noLeftoversInUrl(n, e, t)) return Sa(new dc([], {}));
									throw new op(n);
								}
								throw l;
							})
						);
					}),
					(l.prototype.noLeftoversInUrl = function(l, n, u) {
						return 0 === n.length && !l.children[u];
					}),
					(l.prototype.expandSegmentAgainstRoute = function(l, n, u, e, t, r, s) {
						return bp(e) !== r
							? cp(n)
							: void 0 === e.redirectTo
							? this.matchSegmentAgainstRoute(l, n, e, t)
							: s && this.allowRedirects
							? this.expandSegmentAgainstRouteUsingRedirect(l, n, u, e, t, r)
							: cp(n);
					}),
					(l.prototype.expandSegmentAgainstRouteUsingRedirect = function(l, n, u, e, t, r) {
						return '**' === e.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, u, e, r) : this.expandRegularSegmentAgainstRouteUsingRedirect(l, n, u, e, t, r);
					}),
					(l.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(l, n, u, e) {
						var t = this,
							r = this.applyRedirectCommands([], u.redirectTo, {});
						return u.redirectTo.startsWith('/')
							? pp(r)
							: this.lineralizeSegments(u, r).pipe(
									$(function(u) {
										var r = new dc(u, {});
										return t.expandSegment(l, r, n, u, e, !1);
									})
							  );
					}),
					(l.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(l, n, u, e, t, r) {
						var s = this,
							a = fp(n, e, t),
							o = a.consumedSegments,
							i = a.lastChild,
							c = a.positionalParamSegments;
						if (!a.matched) return cp(n);
						var p = this.applyRedirectCommands(o, e.redirectTo, c);
						return e.redirectTo.startsWith('/')
							? pp(p)
							: this.lineralizeSegments(e, p).pipe(
									$(function(e) {
										return s.expandSegment(l, n, u, e.concat(t.slice(i)), r, !1);
									})
							  );
					}),
					(l.prototype.matchSegmentAgainstRoute = function(l, n, u, e) {
						var t = this;
						if ('**' === u.path)
							return u.loadChildren
								? this.configLoader.load(l.injector, u).pipe(
										Q(function(l) {
											return (u._loadedConfig = l), new dc(e, {});
										})
								  )
								: Sa(new dc(e, {}));
						var s = fp(n, u, e),
							a = s.consumedSegments,
							i = s.lastChild;
						if (!s.matched) return cp(n);
						var c = e.slice(i);
						return this.getChildConfig(l, u, e).pipe(
							$(function(l) {
								var u = l.module,
									e = l.routes,
									s = (function(l, n, u, e) {
										return u.length > 0 &&
											(function(l, n, u) {
												return e.some(function(u) {
													return mp(l, n, u) && bp(u) !== Ki;
												});
											})(l, u)
											? {
													segmentGroup: gp(
														new dc(
															n,
															(function(l, n) {
																var u,
																	e,
																	t = {};
																t[Ki] = n;
																try {
																	for (var r = o(l), s = r.next(); !s.done; s = r.next()) {
																		var a = s.value;
																		'' === a.path && bp(a) !== Ki && (t[bp(a)] = new dc([], {}));
																	}
																} catch (i) {
																	u = { error: i };
																} finally {
																	try {
																		s && !s.done && (e = r.return) && e.call(r);
																	} finally {
																		if (u) throw u.error;
																	}
																}
																return t;
															})(e, new dc(u, l.children))
														)
													),
													slicedSegments: []
											  }
											: 0 === u.length &&
											  (function(l, n, u) {
													return e.some(function(u) {
														return mp(l, n, u);
													});
											  })(l, u)
											? {
													segmentGroup: gp(
														new dc(
															l.segments,
															(function(l, n, u, e) {
																var t,
																	s,
																	a = {};
																try {
																	for (var i = o(u), c = i.next(); !c.done; c = i.next()) {
																		var p = c.value;
																		mp(l, n, p) && !e[bp(p)] && (a[bp(p)] = new dc([], {}));
																	}
																} catch (h) {
																	t = { error: h };
																} finally {
																	try {
																		c && !c.done && (s = i.return) && s.call(i);
																	} finally {
																		if (t) throw t.error;
																	}
																}
																return r({}, e, a);
															})(l, u, e, l.children)
														)
													),
													slicedSegments: u
											  }
											: { segmentGroup: l, slicedSegments: u };
									})(n, a, c, e),
									i = s.segmentGroup,
									p = s.slicedSegments;
								return 0 === p.length && i.hasChildren()
									? t.expandChildren(u, e, i).pipe(
											Q(function(l) {
												return new dc(a, l);
											})
									  )
									: 0 === e.length && 0 === p.length
									? Sa(new dc(a, {}))
									: t.expandSegment(u, i, e, p, Ki, !0).pipe(
											Q(function(l) {
												return new dc(a.concat(l.segments), l.children);
											})
									  );
							})
						);
					}),
					(l.prototype.getChildConfig = function(l, n, u) {
						var e = this;
						return n.children
							? Sa(new nc(n.children, l))
							: n.loadChildren
							? void 0 !== n._loadedConfig
								? Sa(n._loadedConfig)
								: (function(l, n, u) {
										var e,
											t = n.canLoad;
										return t && 0 !== t.length
											? J(t)
													.pipe(
														Q(function(e) {
															var t,
																r = l.get(e);
															if (
																(function(l) {
																	return l && sp(l.canLoad);
																})(r)
															)
																t = r.canLoad(n, u);
															else {
																if (!sp(r)) throw new Error('Invalid CanLoad guard');
																t = r(n, u);
															}
															return cc(t);
														})
													)
													.pipe(
														Da(),
														((e = function(l) {
															return !0 === l;
														}),
														function(l) {
															return l.lift(new so(e, void 0, l));
														})
													)
											: Sa(!0);
								  })(l.injector, n, u).pipe(
										$(function(u) {
											return u
												? e.configLoader.load(l.injector, n).pipe(
														Q(function(l) {
															return (n._loadedConfig = l), l;
														})
												  )
												: (function(l) {
														return new I(function(n) {
															return n.error(Xi('Cannot load children because the guard of the route "path: \'' + l.path + '\'" returned false'));
														});
												  })(n);
										})
								  )
							: Sa(new nc([], l));
					}),
					(l.prototype.lineralizeSegments = function(l, n) {
						for (var u = [], e = n.root; ; ) {
							if (((u = u.concat(e.segments)), 0 === e.numberOfChildren)) return Sa(u);
							if (e.numberOfChildren > 1 || !e.children[Ki]) return hp(l.redirectTo);
							e = e.children[Ki];
						}
					}),
					(l.prototype.applyRedirectCommands = function(l, n, u) {
						return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), l, u);
					}),
					(l.prototype.applyRedirectCreatreUrlTree = function(l, n, u, e) {
						var t = this.createSegmentGroup(l, n.root, u, e);
						return new hc(t, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment);
					}),
					(l.prototype.createQueryParams = function(l, n) {
						var u = {};
						return (
							ic(l, function(l, e) {
								if ('string' == typeof l && l.startsWith(':')) {
									var t = l.substring(1);
									u[e] = n[t];
								} else u[e] = l;
							}),
							u
						);
					}),
					(l.prototype.createSegmentGroup = function(l, n, u, e) {
						var t = this,
							r = this.createSegments(l, n.segments, u, e),
							s = {};
						return (
							ic(n.children, function(n, r) {
								s[r] = t.createSegmentGroup(l, n, u, e);
							}),
							new dc(r, s)
						);
					}),
					(l.prototype.createSegments = function(l, n, u, e) {
						var t = this;
						return n.map(function(n) {
							return n.path.startsWith(':') ? t.findPosParam(l, n, e) : t.findOrReturn(n, u);
						});
					}),
					(l.prototype.findPosParam = function(l, n, u) {
						var e = u[n.path.substring(1)];
						if (!e) throw new Error("Cannot redirect to '" + l + "'. Cannot find '" + n.path + "'.");
						return e;
					}),
					(l.prototype.findOrReturn = function(l, n) {
						var u,
							e,
							t = 0;
						try {
							for (var r = o(n), s = r.next(); !s.done; s = r.next()) {
								var a = s.value;
								if (a.path === l.path) return n.splice(t), a;
								t++;
							}
						} catch (i) {
							u = { error: i };
						} finally {
							try {
								s && !s.done && (e = r.return) && e.call(r);
							} finally {
								if (u) throw u.error;
							}
						}
						return l;
					}),
					l
				);
			})();
			function fp(l, n, u) {
				if ('' === n.path)
					return 'full' === n.pathMatch && (l.hasChildren() || u.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				var e = (n.matcher || lc)(u, l, n);
				return e
					? { matched: !0, consumedSegments: e.consumed, lastChild: e.consumed.length, positionalParamSegments: e.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function gp(l) {
				if (1 === l.numberOfChildren && l.children[Ki]) {
					var n = l.children[Ki];
					return new dc(l.segments.concat(n.segments), n.children);
				}
				return l;
			}
			function mp(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 !== u.redirectTo;
			}
			function bp(l) {
				return l.outlet || Ki;
			}
			var yp = (function() {
					return function(l) {
						(this.path = l), (this.route = this.path[this.path.length - 1]);
					};
				})(),
				vp = (function() {
					return function(l, n) {
						(this.component = l), (this.route = n);
					};
				})();
			function wp(l, n, u) {
				var e = (function(l) {
					if (!l) return null;
					for (var n = l.parent; n; n = n.parent) {
						var u = n.routeConfig;
						if (u && u._loadedConfig) return u._loadedConfig;
					}
					return null;
				})(n);
				return (e ? e.module.injector : u).get(l);
			}
			function jp(l, n, u, e, t) {
				void 0 === t && (t = { canDeactivateChecks: [], canActivateChecks: [] });
				var r = Dc(n);
				return (
					l.children.forEach(function(l) {
						!(function(l, n, u, e, t) {
							void 0 === t && (t = { canDeactivateChecks: [], canActivateChecks: [] });
							var r = l.value,
								s = n ? n.value : null,
								a = u ? u.getContext(l.value.outlet) : null;
							if (s && r.routeConfig === s.routeConfig) {
								var o = (function(l, n, u) {
									if ('function' == typeof u) return u(l, n);
									switch (u) {
										case 'pathParamsChange':
											return !gc(l.url, n.url);
										case 'pathParamsOrQueryParamsChange':
											return !gc(l.url, n.url) || !sc(l.queryParams, n.queryParams);
										case 'always':
											return !0;
										case 'paramsOrQueryParamsChange':
											return !Zc(l, n) || !sc(l.queryParams, n.queryParams);
										case 'paramsChange':
										default:
											return !Zc(l, n);
									}
								})(s, r, r.routeConfig.runGuardsAndResolvers);
								o ? t.canActivateChecks.push(new yp(e)) : ((r.data = s.data), (r._resolvedData = s._resolvedData)),
									jp(l, n, r.component ? (a ? a.children : null) : u, e, t),
									o && t.canDeactivateChecks.push(new vp((a && a.outlet && a.outlet.component) || null, s));
							} else s && _p(n, a, t), t.canActivateChecks.push(new yp(e)), jp(l, null, r.component ? (a ? a.children : null) : u, e, t);
						})(l, r[l.value.outlet], u, e.concat([l.value]), t),
							delete r[l.value.outlet];
					}),
					ic(r, function(l, n) {
						return _p(l, u.getContext(n), t);
					}),
					t
				);
			}
			function _p(l, n, u) {
				var e = Dc(l),
					t = l.value;
				ic(e, function(l, e) {
					_p(l, t.component ? (n ? n.children.getContext(e) : null) : n, u);
				}),
					u.canDeactivateChecks.push(new vp(t.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, t));
			}
			var xp = Symbol('INITIAL_VALUE');
			function kp() {
				return oo(function(l) {
					return function() {
						for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
						var u = null,
							e = null;
						return U(l[l.length - 1]) && (e = l.pop()), 'function' == typeof l[l.length - 1] && (u = l.pop()), 1 === l.length && p(l[0]) && (l = l[0]), el(l, e).lift(new Ta(u));
					}
						.apply(
							void 0,
							c(
								l.map(function(l) {
									return l.pipe(
										uo(1),
										(function() {
											for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
											var u = l[l.length - 1];
											return U(u)
												? (l.pop(),
												  function(n) {
														return po(l, n, u);
												  })
												: function(n) {
														return po(l, n);
												  };
										})(xp)
									);
								})
							)
						)
						.pipe(
							ho(function(l, n) {
								var u = !1;
								return n.reduce(function(l, e, t) {
									if (l !== xp) return l;
									if ((e === xp && (u = !0), !u)) {
										if (!1 === e) return e;
										if (t === n.length - 1 || ap(e)) return e;
									}
									return l;
								}, l);
							}, xp),
							Ua(function(l) {
								return l !== xp;
							}),
							Q(function(l) {
								return ap(l) ? l : !0 === l;
							}),
							uo(1)
						);
				});
			}
			function Cp(l, n) {
				return null !== l && n && n(new Gi(l)), Sa(!0);
			}
			function Sp(l, n) {
				return null !== l && n && n(new Bi(l)), Sa(!0);
			}
			function Ep(l, n, u) {
				var e = n.routeConfig ? n.routeConfig.canActivate : null;
				return e && 0 !== e.length
					? Sa(
							e.map(function(e) {
								return Na(function() {
									var t,
										r = wp(e, n, u);
									if (
										(function(l) {
											return l && sp(l.canActivate);
										})(r)
									)
										t = cc(r.canActivate(n, l));
									else {
										if (!sp(r)) throw new Error('Invalid CanActivate guard');
										t = cc(r(n, l));
									}
									return t.pipe(ro());
								});
							})
					  ).pipe(kp())
					: Sa(!0);
			}
			function Pp(l, n, u) {
				var e = n[n.length - 1],
					t = n
						.slice(0, n.length - 1)
						.reverse()
						.map(function(l) {
							return (function(l) {
								var n = l.routeConfig ? l.routeConfig.canActivateChild : null;
								return n && 0 !== n.length ? { node: l, guards: n } : null;
							})(l);
						})
						.filter(function(l) {
							return null !== l;
						})
						.map(function(n) {
							return Na(function() {
								return Sa(
									n.guards.map(function(t) {
										var r,
											s = wp(t, n.node, u);
										if (
											(function(l) {
												return l && sp(l.canActivateChild);
											})(s)
										)
											r = cc(s.canActivateChild(e, l));
										else {
											if (!sp(s)) throw new Error('Invalid CanActivateChild guard');
											r = cc(s(e, l));
										}
										return r.pipe(ro());
									})
								).pipe(kp());
							});
						});
				return Sa(t).pipe(kp());
			}
			var Ip = (function() {
					return function() {};
				})(),
				Op = (function() {
					function l(l, n, u, e, t, r) {
						(this.rootComponentType = l), (this.config = n), (this.urlTree = u), (this.url = e), (this.paramsInheritanceStrategy = t), (this.relativeLinkResolution = r);
					}
					return (
						(l.prototype.recognize = function() {
							try {
								var l = Rp(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
									n = this.processSegmentGroup(this.config, l, Ki),
									u = new zc(
										[],
										Object.freeze({}),
										Object.freeze(r({}, this.urlTree.queryParams)),
										this.urlTree.fragment,
										{},
										Ki,
										this.rootComponentType,
										null,
										this.urlTree.root,
										-1,
										{}
									),
									e = new Nc(u, n),
									t = new Hc(this.url, e);
								return this.inheritParamsAndData(t._root), Sa(t);
							} catch (s) {
								return new I(function(l) {
									return l.error(s);
								});
							}
						}),
						(l.prototype.inheritParamsAndData = function(l) {
							var n = this,
								u = l.value,
								e = Fc(u, this.paramsInheritanceStrategy);
							(u.params = Object.freeze(e.params)),
								(u.data = Object.freeze(e.data)),
								l.children.forEach(function(l) {
									return n.inheritParamsAndData(l);
								});
						}),
						(l.prototype.processSegmentGroup = function(l, n, u) {
							return 0 === n.segments.length && n.hasChildren() ? this.processChildren(l, n) : this.processSegment(l, n, n.segments, u);
						}),
						(l.prototype.processChildren = function(l, n) {
							var u,
								e = this,
								t = mc(n, function(n, u) {
									return e.processSegmentGroup(l, n, u);
								});
							return (
								(u = {}),
								t.forEach(function(l) {
									var n = u[l.value.outlet];
									if (n) {
										var e = n.url
												.map(function(l) {
													return l.toString();
												})
												.join('/'),
											t = l.value.url
												.map(function(l) {
													return l.toString();
												})
												.join('/');
										throw new Error("Two segments cannot have the same outlet name: '" + e + "' and '" + t + "'.");
									}
									u[l.value.outlet] = l.value;
								}),
								t.sort(function(l, n) {
									return l.value.outlet === Ki ? -1 : n.value.outlet === Ki ? 1 : l.value.outlet.localeCompare(n.value.outlet);
								}),
								t
							);
						}),
						(l.prototype.processSegment = function(l, n, u, e) {
							var t, r;
							try {
								for (var s = o(l), a = s.next(); !a.done; a = s.next()) {
									var i = a.value;
									try {
										return this.processSegmentAgainstRoute(i, n, u, e);
									} catch (c) {
										if (!(c instanceof Ip)) throw c;
									}
								}
							} catch (p) {
								t = { error: p };
							} finally {
								try {
									a && !a.done && (r = s.return) && r.call(s);
								} finally {
									if (t) throw t.error;
								}
							}
							if (this.noLeftoversInUrl(n, u, e)) return [];
							throw new Ip();
						}),
						(l.prototype.noLeftoversInUrl = function(l, n, u) {
							return 0 === n.length && !l.children[u];
						}),
						(l.prototype.processSegmentAgainstRoute = function(l, n, u, e) {
							if (l.redirectTo) throw new Ip();
							if ((l.outlet || Ki) !== e) throw new Ip();
							var t,
								s = [],
								a = [];
							if ('**' === l.path) {
								var o = u.length > 0 ? oc(u).parameters : {};
								t = new zc(u, o, Object.freeze(r({}, this.urlTree.queryParams)), this.urlTree.fragment, Dp(l), e, l.component, l, Tp(n), Mp(n) + u.length, Up(l));
							} else {
								var i = (function(l, n, u) {
									if ('' === n.path) {
										if ('full' === n.pathMatch && (l.hasChildren() || u.length > 0)) throw new Ip();
										return { consumedSegments: [], lastChild: 0, parameters: {} };
									}
									var e = (n.matcher || lc)(u, l, n);
									if (!e) throw new Ip();
									var t = {};
									ic(e.posParams, function(l, n) {
										t[n] = l.path;
									});
									var s = e.consumed.length > 0 ? r({}, t, e.consumed[e.consumed.length - 1].parameters) : t;
									return { consumedSegments: e.consumed, lastChild: e.consumed.length, parameters: s };
								})(n, l, u);
								(s = i.consumedSegments),
									(a = u.slice(i.lastChild)),
									(t = new zc(s, i.parameters, Object.freeze(r({}, this.urlTree.queryParams)), this.urlTree.fragment, Dp(l), e, l.component, l, Tp(n), Mp(n) + s.length, Up(l)));
							}
							var c = (function(l) {
									return l.children ? l.children : l.loadChildren ? l._loadedConfig.routes : [];
								})(l),
								p = Rp(n, s, a, c, this.relativeLinkResolution),
								h = p.segmentGroup,
								d = p.slicedSegments;
							if (0 === d.length && h.hasChildren()) {
								var f = this.processChildren(c, h);
								return [new Nc(t, f)];
							}
							if (0 === c.length && 0 === d.length) return [new Nc(t, [])];
							var g = this.processSegment(c, h, d, Ki);
							return [new Nc(t, g)];
						}),
						l
					);
				})();
			function Tp(l) {
				for (var n = l; n._sourceSegment; ) n = n._sourceSegment;
				return n;
			}
			function Mp(l) {
				for (var n = l, u = n._segmentIndexShift ? n._segmentIndexShift : 0; n._sourceSegment; ) u += (n = n._sourceSegment)._segmentIndexShift ? n._segmentIndexShift : 0;
				return u - 1;
			}
			function Rp(l, n, u, e, t) {
				if (
					u.length > 0 &&
					(function(l, n, u) {
						return e.some(function(u) {
							return Ap(l, n, u) && Np(u) !== Ki;
						});
					})(l, u)
				) {
					var s = new dc(
						n,
						(function(l, n, u, e) {
							var t,
								r,
								s = {};
							(s[Ki] = e), (e._sourceSegment = l), (e._segmentIndexShift = n.length);
							try {
								for (var a = o(u), i = a.next(); !i.done; i = a.next()) {
									var c = i.value;
									if ('' === c.path && Np(c) !== Ki) {
										var p = new dc([], {});
										(p._sourceSegment = l), (p._segmentIndexShift = n.length), (s[Np(c)] = p);
									}
								}
							} catch (h) {
								t = { error: h };
							} finally {
								try {
									i && !i.done && (r = a.return) && r.call(a);
								} finally {
									if (t) throw t.error;
								}
							}
							return s;
						})(l, n, e, new dc(u, l.children))
					);
					return (s._sourceSegment = l), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: [] };
				}
				if (
					0 === u.length &&
					(function(l, n, u) {
						return e.some(function(u) {
							return Ap(l, n, u);
						});
					})(l, u)
				) {
					var a = new dc(
						l.segments,
						(function(l, n, u, e, t, s) {
							var a,
								i,
								c = {};
							try {
								for (var p = o(e), h = p.next(); !h.done; h = p.next()) {
									var d = h.value;
									if (Ap(l, u, d) && !t[Np(d)]) {
										var f = new dc([], {});
										(f._sourceSegment = l), (f._segmentIndexShift = 'legacy' === s ? l.segments.length : n.length), (c[Np(d)] = f);
									}
								}
							} catch (g) {
								a = { error: g };
							} finally {
								try {
									h && !h.done && (i = p.return) && i.call(p);
								} finally {
									if (a) throw a.error;
								}
							}
							return r({}, t, c);
						})(l, n, u, e, l.children, t)
					);
					return (a._sourceSegment = l), (a._segmentIndexShift = n.length), { segmentGroup: a, slicedSegments: u };
				}
				var i = new dc(l.segments, l.children);
				return (i._sourceSegment = l), (i._segmentIndexShift = n.length), { segmentGroup: i, slicedSegments: u };
			}
			function Ap(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 === u.redirectTo;
			}
			function Np(l) {
				return l.outlet || Ki;
			}
			function Dp(l) {
				return l.data || {};
			}
			function Up(l) {
				return l.resolve || {};
			}
			function Lp(l, n, u, e) {
				var t = wp(l, n, e);
				return cc(t.resolve ? t.resolve(n, u) : t(n, u));
			}
			function Vp(l) {
				return function(n) {
					return n.pipe(
						oo(function(n) {
							var u = l(n);
							return u
								? J(u).pipe(
										Q(function() {
											return n;
										})
								  )
								: J([n]);
						})
					);
				};
			}
			var Fp = (function() {
					return function() {};
				})(),
				zp = (function() {
					function l() {}
					return (
						(l.prototype.shouldDetach = function(l) {
							return !1;
						}),
						(l.prototype.store = function(l, n) {}),
						(l.prototype.shouldAttach = function(l) {
							return !1;
						}),
						(l.prototype.retrieve = function(l) {
							return null;
						}),
						(l.prototype.shouldReuseRoute = function(l, n) {
							return l.routeConfig === n.routeConfig;
						}),
						l
					);
				})(),
				Hp = new gl('ROUTES'),
				Bp = (function() {
					function l(l, n, u, e) {
						(this.loader = l), (this.compiler = n), (this.onLoadStartListener = u), (this.onLoadEndListener = e);
					}
					return (
						(l.prototype.load = function(l, n) {
							var u = this;
							return (
								this.onLoadStartListener && this.onLoadStartListener(n),
								this.loadModuleFactory(n.loadChildren).pipe(
									Q(function(e) {
										u.onLoadEndListener && u.onLoadEndListener(n);
										var t = e.create(l);
										return new nc(ac(t.injector.get(Hp)).map(rc), t);
									})
								)
							);
						}),
						(l.prototype.loadModuleFactory = function(l) {
							var n = this;
							return 'string' == typeof l
								? J(this.loader.load(l))
								: cc(l()).pipe(
										$(function(l) {
											return l instanceof kn ? Sa(l) : J(n.compiler.compileModuleAsync(l));
										})
								  );
						}),
						l
					);
				})(),
				qp = (function() {
					return function() {};
				})(),
				Gp = (function() {
					function l() {}
					return (
						(l.prototype.shouldProcessUrl = function(l) {
							return !0;
						}),
						(l.prototype.extract = function(l) {
							return l;
						}),
						(l.prototype.merge = function(l, n) {
							return l;
						}),
						l
					);
				})();
			function Zp(l) {
				throw l;
			}
			function Qp(l, n, u) {
				return n.parse('/');
			}
			function Wp(l, n) {
				return Sa(null);
			}
			var Kp = (function() {
					function l(l, n, u, e, t, r, s, a) {
						var o = this;
						(this.rootComponentType = l),
							(this.urlSerializer = n),
							(this.rootContexts = u),
							(this.location = e),
							(this.config = a),
							(this.lastSuccessfulNavigation = null),
							(this.currentNavigation = null),
							(this.navigationId = 0),
							(this.isNgZoneEnabled = !1),
							(this.events = new N()),
							(this.errorHandler = Zp),
							(this.malformedUriErrorHandler = Qp),
							(this.navigated = !1),
							(this.lastSuccessfulId = -1),
							(this.hooks = { beforePreactivation: Wp, afterPreactivation: Wp }),
							(this.urlHandlingStrategy = new Gp()),
							(this.routeReuseStrategy = new zp()),
							(this.onSameUrlNavigation = 'ignore'),
							(this.paramsInheritanceStrategy = 'emptyOnly'),
							(this.urlUpdateStrategy = 'deferred'),
							(this.relativeLinkResolution = 'legacy'),
							(this.ngModule = t.get(xn)),
							(this.console = t.get(Pu));
						var i = t.get(Bu);
						(this.isNgZoneEnabled = i instanceof Bu),
							this.resetConfig(a),
							(this.currentUrlTree = new hc(new dc([], {}), {}, null)),
							(this.rawUrlTree = this.currentUrlTree),
							(this.browserUrlTree = this.currentUrlTree),
							(this.configLoader = new Bp(
								r,
								s,
								function(l) {
									return o.triggerEvent(new zi(l));
								},
								function(l) {
									return o.triggerEvent(new Hi(l));
								}
							)),
							(this.routerState = Lc(this.currentUrlTree, this.rootComponentType)),
							(this.transitions = new Ea({
								id: 0,
								currentUrlTree: this.currentUrlTree,
								currentRawUrl: this.currentUrlTree,
								extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
								urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
								rawUrl: this.currentUrlTree,
								extras: {},
								resolve: null,
								reject: null,
								promise: Promise.resolve(!0),
								source: 'imperative',
								restoredState: null,
								currentSnapshot: this.routerState.snapshot,
								targetSnapshot: null,
								currentRouterState: this.routerState,
								targetRouterState: null,
								guards: { canActivateChecks: [], canDeactivateChecks: [] },
								guardsResult: null
							})),
							(this.navigations = this.setupNavigations(this.transitions)),
							this.processNavigations();
					}
					return (
						(l.prototype.setupNavigations = function(l) {
							var n = this,
								u = this.events;
							return l.pipe(
								Ua(function(l) {
									return 0 !== l.id;
								}),
								Q(function(l) {
									return r({}, l, { extractedUrl: n.urlHandlingStrategy.extract(l.rawUrl) });
								}),
								oo(function(l) {
									var e,
										t,
										s,
										a,
										i = !1,
										c = !1;
									return Sa(l).pipe(
										bo(function(l) {
											n.currentNavigation = {
												id: l.id,
												initialUrl: l.currentRawUrl,
												extractedUrl: l.extractedUrl,
												trigger: l.source,
												extras: l.extras,
												previousNavigation: n.lastSuccessfulNavigation ? r({}, n.lastSuccessfulNavigation, { previousNavigation: null }) : null
											};
										}),
										oo(function(l) {
											var e,
												t,
												s,
												a,
												o = !n.navigated || l.extractedUrl.toString() !== n.browserUrlTree.toString();
											if (('reload' === n.onSameUrlNavigation || o) && n.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
												return Sa(l).pipe(
													oo(function(l) {
														var e = n.transitions.getValue();
														return u.next(new Mi(l.id, n.serializeUrl(l.extractedUrl), l.source, l.restoredState)), e !== n.transitions.getValue() ? Ra : [l];
													}),
													oo(function(l) {
														return Promise.resolve(l);
													}),
													((e = n.ngModule.injector),
													(t = n.configLoader),
													(s = n.urlSerializer),
													(a = n.config),
													function(l) {
														return l.pipe(
															oo(function(l) {
																return (function(n, u, e, t, r) {
																	return new dp(n, u, e, l.extractedUrl, r).apply();
																})(e, t, s, 0, a).pipe(
																	Q(function(n) {
																		return r({}, l, { urlAfterRedirects: n });
																	})
																);
															})
														);
													}),
													bo(function(l) {
														n.currentNavigation = r({}, n.currentNavigation, { finalUrl: l.urlAfterRedirects });
													}),
													(function(l, u, e, t, s) {
														return function(e) {
															return e.pipe(
																$(function(e) {
																	return (function(l, n, u, e, t, r) {
																		return void 0 === t && (t = 'emptyOnly'), void 0 === r && (r = 'legacy'), new Op(l, n, u, e, t, r).recognize();
																	})(l, u, e.urlAfterRedirects, ((a = e.urlAfterRedirects), n.serializeUrl(a)), t, s).pipe(
																		Q(function(l) {
																			return r({}, e, { targetSnapshot: l });
																		})
																	);
																	var a;
																})
															);
														};
													})(n.rootComponentType, n.config, 0, n.paramsInheritanceStrategy, n.relativeLinkResolution),
													bo(function(l) {
														'eager' === n.urlUpdateStrategy &&
															(l.extras.skipLocationChange || n.setBrowserUrl(l.urlAfterRedirects, !!l.extras.replaceUrl, l.id),
															(n.browserUrlTree = l.urlAfterRedirects));
													}),
													bo(function(l) {
														var e = new Di(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														u.next(e);
													})
												);
											if (o && n.rawUrlTree && n.urlHandlingStrategy.shouldProcessUrl(n.rawUrlTree)) {
												var i = l.extractedUrl,
													c = l.source,
													p = l.restoredState,
													h = l.extras,
													d = new Mi(l.id, n.serializeUrl(i), c, p);
												u.next(d);
												var f = Lc(i, n.rootComponentType).snapshot;
												return Sa(r({}, l, { targetSnapshot: f, urlAfterRedirects: i, extras: r({}, h, { skipLocationChange: !1, replaceUrl: !1 }) }));
											}
											return (n.rawUrlTree = l.rawUrl), l.resolve(null), Ra;
										}),
										Vp(function(l) {
											var u = l.extras;
											return n.hooks.beforePreactivation(l.targetSnapshot, {
												navigationId: l.id,
												appliedUrlTree: l.extractedUrl,
												rawUrlTree: l.rawUrl,
												skipLocationChange: !!u.skipLocationChange,
												replaceUrl: !!u.replaceUrl
											});
										}),
										bo(function(l) {
											var u = new Ui(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
											n.triggerEvent(u);
										}),
										Q(function(l) {
											return r({}, l, {
												guards: ((u = l.targetSnapshot), (e = l.currentSnapshot), (t = n.rootContexts), (s = u._root), jp(s, e ? e._root : null, t, [s.value]))
											});
											var u, e, t, s;
										}),
										(function(l, n) {
											return function(u) {
												return u.pipe(
													$(function(u) {
														var e = u.targetSnapshot,
															t = u.currentSnapshot,
															s = u.guards,
															a = s.canActivateChecks,
															o = s.canDeactivateChecks;
														return 0 === o.length && 0 === a.length
															? Sa(r({}, u, { guardsResult: !0 }))
															: (function(l, n, u, e) {
																	return J(o).pipe(
																		$(function(l) {
																			return (function(l, n, u, e, t) {
																				var r = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
																				return r && 0 !== r.length
																					? Sa(
																							r.map(function(r) {
																								var s,
																									a = wp(r, n, t);
																								if (
																									(function(l) {
																										return l && sp(l.canDeactivate);
																									})(a)
																								)
																									s = cc(a.canDeactivate(l, n, u, e));
																								else {
																									if (!sp(a)) throw new Error('Invalid CanDeactivate guard');
																									s = cc(a(l, n, u, e));
																								}
																								return s.pipe(ro());
																							})
																					  ).pipe(kp())
																					: Sa(!0);
																			})(l.component, l.route, u, n, e);
																		}),
																		ro(function(l) {
																			return !0 !== l;
																		}, !0)
																	);
															  })(0, e, t, l).pipe(
																	$(function(u) {
																		return u && 'boolean' == typeof u
																			? (function(l, n, u, e) {
																					return J(a).pipe(
																						mo(function(n) {
																							return J([Sp(n.route.parent, e), Cp(n.route, e), Pp(l, n.path, u), Ep(l, n.route, u)]).pipe(
																								Da(),
																								ro(function(l) {
																									return !0 !== l;
																								}, !0)
																							);
																						}),
																						ro(function(l) {
																							return !0 !== l;
																						}, !0)
																					);
																			  })(e, 0, l, n)
																			: Sa(u);
																	}),
																	Q(function(l) {
																		return r({}, u, { guardsResult: l });
																	})
															  );
													})
												);
											};
										})(n.ngModule.injector, function(l) {
											return n.triggerEvent(l);
										}),
										bo(function(l) {
											if (ap(l.guardsResult)) {
												var u = Xi('Redirecting to "' + n.serializeUrl(l.guardsResult) + '"');
												throw ((u.url = l.guardsResult), u);
											}
										}),
										bo(function(l) {
											var u = new Li(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
											n.triggerEvent(u);
										}),
										Ua(function(l) {
											if (!l.guardsResult) {
												n.resetUrlToCurrentUrlTree();
												var e = new Ai(l.id, n.serializeUrl(l.extractedUrl), '');
												return u.next(e), l.resolve(!1), !1;
											}
											return !0;
										}),
										Vp(function(l) {
											if (l.guards.canActivateChecks.length)
												return Sa(l).pipe(
													bo(function(l) {
														var u = new Vi(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														n.triggerEvent(u);
													}),
													((u = n.paramsInheritanceStrategy),
													(e = n.ngModule.injector),
													function(l) {
														return l.pipe(
															$(function(l) {
																var n = l.targetSnapshot,
																	t = l.guards.canActivateChecks;
																return t.length
																	? J(t).pipe(
																			mo(function(l) {
																				return (function(l, u, e, t) {
																					return (function(l, n, u, e) {
																						var t = Object.keys(l);
																						if (0 === t.length) return Sa({});
																						if (1 === t.length) {
																							var r = t[0];
																							return Lp(l[r], n, u, e).pipe(
																								Q(function(l) {
																									var n;
																									return ((n = {})[r] = l), n;
																								})
																							);
																						}
																						var s = {};
																						return J(t)
																							.pipe(
																								$(function(t) {
																									return Lp(l[t], n, u, e).pipe(
																										Q(function(l) {
																											return (s[t] = l), l;
																										})
																									);
																								})
																							)
																							.pipe(
																								$a(),
																								Q(function() {
																									return s;
																								})
																							);
																					})(l._resolve, l, n, t).pipe(
																						Q(function(n) {
																							return (l._resolvedData = n), (l.data = r({}, l.data, Fc(l, e).resolve)), null;
																						})
																					);
																				})(l.route, 0, u, e);
																			}),
																			(function(l, n) {
																				return arguments.length >= 2
																					? function(n) {
																							return E(ho(l, void 0), Ha(1), Ka(void 0))(n);
																					  }
																					: function(n) {
																							return E(
																								ho(function(n, u, e) {
																									return l(n);
																								}),
																								Ha(1)
																							)(n);
																					  };
																			})(function(l, n) {
																				return l;
																			}),
																			Q(function(n) {
																				return l;
																			})
																	  )
																	: Sa(l);
															})
														);
													}),
													bo(function(l) {
														var u = new Fi(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														n.triggerEvent(u);
													})
												);
											var u, e;
										}),
										Vp(function(l) {
											var u = l.extras;
											return n.hooks.afterPreactivation(l.targetSnapshot, {
												navigationId: l.id,
												appliedUrlTree: l.extractedUrl,
												rawUrlTree: l.rawUrl,
												skipLocationChange: !!u.skipLocationChange,
												replaceUrl: !!u.replaceUrl
											});
										}),
										Q(function(l) {
											var u,
												e,
												t,
												s = ((t = (function l(n, u, e) {
													if (e && n.shouldReuseRoute(u.value, e.value.snapshot)) {
														(i = e.value)._futureSnapshot = u.value;
														var t = (function(n, u, e) {
															return u.children.map(function(u) {
																var t, r;
																try {
																	for (var s = o(e.children), a = s.next(); !a.done; a = s.next()) {
																		var i = a.value;
																		if (n.shouldReuseRoute(i.value.snapshot, u.value)) return l(n, u, i);
																	}
																} catch (c) {
																	t = { error: c };
																} finally {
																	try {
																		a && !a.done && (r = s.return) && r.call(s);
																	} finally {
																		if (t) throw t.error;
																	}
																}
																return l(n, u);
															});
														})(n, u, e);
														return new Nc(i, t);
													}
													var r = n.retrieve(u.value);
													if (r) {
														var s = r.route;
														return (
															(function l(n, u) {
																if (n.value.routeConfig !== u.value.routeConfig)
																	throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
																if (n.children.length !== u.children.length)
																	throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
																u.value._futureSnapshot = n.value;
																for (var e = 0; e < n.children.length; ++e) l(n.children[e], u.children[e]);
															})(u, s),
															s
														);
													}
													var a,
														i = new Vc(new Ea((a = u.value).url), new Ea(a.params), new Ea(a.queryParams), new Ea(a.fragment), new Ea(a.data), a.outlet, a.component, a);
													return (
														(t = u.children.map(function(u) {
															return l(n, u);
														})),
														new Nc(i, t)
													);
												})(n.routeReuseStrategy, (u = l.targetSnapshot)._root, (e = l.currentRouterState) ? e._root : void 0)),
												new Uc(t, u));
											return r({}, l, { targetRouterState: s });
										}),
										bo(function(l) {
											(n.currentUrlTree = l.urlAfterRedirects),
												(n.rawUrlTree = n.urlHandlingStrategy.merge(n.currentUrlTree, l.rawUrl)),
												(n.routerState = l.targetRouterState),
												'deferred' === n.urlUpdateStrategy &&
													(l.extras.skipLocationChange || n.setBrowserUrl(n.rawUrlTree, !!l.extras.replaceUrl, l.id, l.extras.state),
													(n.browserUrlTree = l.urlAfterRedirects));
										}),
										((t = n.rootContexts),
										(s = n.routeReuseStrategy),
										(a = function(l) {
											return n.triggerEvent(l);
										}),
										Q(function(l) {
											return new tp(s, l.targetRouterState, l.currentRouterState, a).activate(t), l;
										})),
										bo({
											next: function() {
												i = !0;
											},
											complete: function() {
												i = !0;
											}
										}),
										((e = function() {
											if (!i && !c) {
												n.resetUrlToCurrentUrlTree();
												var e = new Ai(l.id, n.serializeUrl(l.extractedUrl), 'Navigation ID ' + l.id + ' is not equal to the current navigation id ' + n.navigationId);
												u.next(e), l.resolve(!1);
											}
											n.currentNavigation = null;
										}),
										function(l) {
											return l.lift(new wo(e));
										}),
										Xa(function(e) {
											if (((c = !0), (a = e) && a[$i])) {
												var t = ap(e.url);
												t || ((n.navigated = !0), n.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl));
												var r = new Ai(l.id, n.serializeUrl(l.extractedUrl), e.message);
												u.next(r), l.resolve(!1), t && n.navigateByUrl(e.url);
											} else {
												n.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl);
												var s = new Ni(l.id, n.serializeUrl(l.extractedUrl), e);
												u.next(s);
												try {
													l.resolve(n.errorHandler(e));
												} catch (o) {
													l.reject(o);
												}
											}
											var a;
											return Ra;
										})
									);
								})
							);
						}),
						(l.prototype.resetRootComponentType = function(l) {
							(this.rootComponentType = l), (this.routerState.root.component = this.rootComponentType);
						}),
						(l.prototype.getTransition = function() {
							return this.transitions.value;
						}),
						(l.prototype.setTransition = function(l) {
							this.transitions.next(r({}, this.getTransition(), l));
						}),
						(l.prototype.initialNavigation = function() {
							this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
						}),
						(l.prototype.setUpLocationChangeListener = function() {
							var l = this;
							this.locationSubscription ||
								(this.locationSubscription = this.location.subscribe(function(n) {
									var u = l.parseUrl(n.url),
										e = 'popstate' === n.type ? 'popstate' : 'hashchange',
										t = n.state && n.state.navigationId ? n.state : null;
									setTimeout(function() {
										l.scheduleNavigation(u, e, t, { replaceUrl: !0 });
									}, 0);
								}));
						}),
						Object.defineProperty(l.prototype, 'url', {
							get: function() {
								return this.serializeUrl(this.currentUrlTree);
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.getCurrentNavigation = function() {
							return this.currentNavigation;
						}),
						(l.prototype.triggerEvent = function(l) {
							this.events.next(l);
						}),
						(l.prototype.resetConfig = function(l) {
							uc(l), (this.config = l.map(rc)), (this.navigated = !1), (this.lastSuccessfulId = -1);
						}),
						(l.prototype.ngOnDestroy = function() {
							this.dispose();
						}),
						(l.prototype.dispose = function() {
							this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
						}),
						(l.prototype.createUrlTree = function(l, n) {
							void 0 === n && (n = {});
							var u = n.relativeTo,
								e = n.queryParams,
								t = n.fragment,
								s = n.preserveQueryParams,
								a = n.queryParamsHandling,
								o = n.preserveFragment;
							Un() && s && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
							var i = u || this.routerState.root,
								p = o ? this.currentUrlTree.fragment : t,
								h = null;
							if (a)
								switch (a) {
									case 'merge':
										h = r({}, this.currentUrlTree.queryParams, e);
										break;
									case 'preserve':
										h = this.currentUrlTree.queryParams;
										break;
									default:
										h = e || null;
								}
							else h = s ? this.currentUrlTree.queryParams : e || null;
							return (
								null !== h && (h = this.removeEmptyProps(h)),
								(function(l, n, u, e, t) {
									if (0 === u.length) return Wc(n.root, n.root, n, e, t);
									var r = (function(l) {
										if ('string' == typeof l[0] && 1 === l.length && '/' === l[0]) return new Kc(!0, 0, l);
										var n = 0,
											u = !1,
											e = l.reduce(function(l, e, t) {
												if ('object' == typeof e && null != e) {
													if (e.outlets) {
														var r = {};
														return (
															ic(e.outlets, function(l, n) {
																r[n] = 'string' == typeof l ? l.split('/') : l;
															}),
															c(l, [{ outlets: r }])
														);
													}
													if (e.segmentPath) return c(l, [e.segmentPath]);
												}
												return 'string' != typeof e
													? c(l, [e])
													: 0 === t
													? (e.split('/').forEach(function(e, t) {
															(0 == t && '.' === e) || (0 == t && '' === e ? (u = !0) : '..' === e ? n++ : '' != e && l.push(e));
													  }),
													  l)
													: c(l, [e]);
											}, []);
										return new Kc(u, n, e);
									})(u);
									if (r.toRoot()) return Wc(n.root, new dc([], {}), n, e, t);
									var s = (function(l, u, e) {
											if (l.isAbsolute) return new Yc(n.root, !0, 0);
											if (-1 === e.snapshot._lastPathIndex) return new Yc(e.snapshot._urlSegment, !0, 0);
											var t = Qc(l.commands[0]) ? 0 : 1;
											return (function(n, u, r) {
												for (var s = e.snapshot._urlSegment, a = e.snapshot._lastPathIndex + t, o = l.numberOfDoubleDots; o > a; ) {
													if (((o -= a), !(s = s.parent))) throw new Error("Invalid number of '../'");
													a = s.segments.length;
												}
												return new Yc(s, !1, a - o);
											})();
										})(r, 0, l),
										a = s.processChildren ? Xc(s.segmentGroup, s.index, r.commands) : $c(s.segmentGroup, s.index, r.commands);
									return Wc(s.segmentGroup, a, n, e, t);
								})(i, this.currentUrlTree, l, h, p)
							);
						}),
						(l.prototype.navigateByUrl = function(l, n) {
							void 0 === n && (n = { skipLocationChange: !1 }),
								Un() && this.isNgZoneEnabled && !Bu.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
							var u = ap(l) ? l : this.parseUrl(l),
								e = this.urlHandlingStrategy.merge(u, this.rawUrlTree);
							return this.scheduleNavigation(e, 'imperative', null, n);
						}),
						(l.prototype.navigate = function(l, n) {
							return (
								void 0 === n && (n = { skipLocationChange: !1 }),
								(function(l) {
									for (var n = 0; n < l.length; n++) {
										var u = l[n];
										if (null == u) throw new Error('The requested path contains ' + u + ' segment at index ' + n);
									}
								})(l),
								this.navigateByUrl(this.createUrlTree(l, n), n)
							);
						}),
						(l.prototype.serializeUrl = function(l) {
							return this.urlSerializer.serialize(l);
						}),
						(l.prototype.parseUrl = function(l) {
							var n;
							try {
								n = this.urlSerializer.parse(l);
							} catch (u) {
								n = this.malformedUriErrorHandler(u, this.urlSerializer, l);
							}
							return n;
						}),
						(l.prototype.isActive = function(l, n) {
							if (ap(l)) return pc(this.currentUrlTree, l, n);
							var u = this.parseUrl(l);
							return pc(this.currentUrlTree, u, n);
						}),
						(l.prototype.removeEmptyProps = function(l) {
							return Object.keys(l).reduce(function(n, u) {
								var e = l[u];
								return null != e && (n[u] = e), n;
							}, {});
						}),
						(l.prototype.processNavigations = function() {
							var l = this;
							this.navigations.subscribe(
								function(n) {
									(l.navigated = !0),
										(l.lastSuccessfulId = n.id),
										l.events.next(new Ri(n.id, l.serializeUrl(n.extractedUrl), l.serializeUrl(l.currentUrlTree))),
										(l.lastSuccessfulNavigation = l.currentNavigation),
										(l.currentNavigation = null),
										n.resolve(!0);
								},
								function(n) {
									l.console.warn('Unhandled Navigation Error: ');
								}
							);
						}),
						(l.prototype.scheduleNavigation = function(l, n, u, e) {
							var t = this.getTransition();
							if (t && 'imperative' !== n && 'imperative' === t.source && t.rawUrl.toString() === l.toString()) return Promise.resolve(!0);
							if (t && 'hashchange' == n && 'popstate' === t.source && t.rawUrl.toString() === l.toString()) return Promise.resolve(!0);
							if (t && 'popstate' == n && 'hashchange' === t.source && t.rawUrl.toString() === l.toString()) return Promise.resolve(!0);
							var r = null,
								s = null,
								a = new Promise(function(l, n) {
									(r = l), (s = n);
								}),
								o = ++this.navigationId;
							return (
								this.setTransition({
									id: o,
									source: n,
									restoredState: u,
									currentUrlTree: this.currentUrlTree,
									currentRawUrl: this.rawUrlTree,
									rawUrl: l,
									extras: e,
									resolve: r,
									reject: s,
									promise: a,
									currentSnapshot: this.routerState.snapshot,
									currentRouterState: this.routerState
								}),
								a.catch(function(l) {
									return Promise.reject(l);
								})
							);
						}),
						(l.prototype.setBrowserUrl = function(l, n, u, e) {
							var t = this.urlSerializer.serialize(l);
							(e = e || {}),
								this.location.isCurrentPathEqualTo(t) || n ? this.location.replaceState(t, '', r({}, e, { navigationId: u })) : this.location.go(t, '', r({}, e, { navigationId: u }));
						}),
						(l.prototype.resetStateAndUrl = function(l, n, u) {
							(this.routerState = l), (this.currentUrlTree = n), (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, u)), this.resetUrlToCurrentUrlTree();
						}),
						(l.prototype.resetUrlToCurrentUrlTree = function() {
							this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', { navigationId: this.lastSuccessfulId });
						}),
						l
					);
				})(),
				Yp = (function() {
					return function() {
						(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new Jp()), (this.attachRef = null);
					};
				})(),
				Jp = (function() {
					function l() {
						this.contexts = new Map();
					}
					return (
						(l.prototype.onChildOutletCreated = function(l, n) {
							var u = this.getOrCreateContext(l);
							(u.outlet = n), this.contexts.set(l, u);
						}),
						(l.prototype.onChildOutletDestroyed = function(l) {
							var n = this.getContext(l);
							n && (n.outlet = null);
						}),
						(l.prototype.onOutletDeactivated = function() {
							var l = this.contexts;
							return (this.contexts = new Map()), l;
						}),
						(l.prototype.onOutletReAttached = function(l) {
							this.contexts = l;
						}),
						(l.prototype.getOrCreateContext = function(l) {
							var n = this.getContext(l);
							return n || ((n = new Yp()), this.contexts.set(l, n)), n;
						}),
						(l.prototype.getContext = function(l) {
							return this.contexts.get(l) || null;
						}),
						l
					);
				})(),
				$p = (function() {
					function l(l, n, u, e, t) {
						(this.parentContexts = l),
							(this.location = n),
							(this.resolver = u),
							(this.changeDetector = t),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new ru()),
							(this.deactivateEvents = new ru()),
							(this.name = e || Ki),
							l.onChildOutletCreated(this.name, this);
					}
					return (
						(l.prototype.ngOnDestroy = function() {
							this.parentContexts.onChildOutletDestroyed(this.name);
						}),
						(l.prototype.ngOnInit = function() {
							if (!this.activated) {
								var l = this.parentContexts.getContext(this.name);
								l && l.route && (l.attachRef ? this.attach(l.attachRef, l.route) : this.activateWith(l.route, l.resolver || null));
							}
						}),
						Object.defineProperty(l.prototype, 'isActivated', {
							get: function() {
								return !!this.activated;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'component', {
							get: function() {
								if (!this.activated) throw new Error('Outlet is not activated');
								return this.activated.instance;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'activatedRoute', {
							get: function() {
								if (!this.activated) throw new Error('Outlet is not activated');
								return this._activatedRoute;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'activatedRouteData', {
							get: function() {
								return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.detach = function() {
							if (!this.activated) throw new Error('Outlet is not activated');
							this.location.detach();
							var l = this.activated;
							return (this.activated = null), (this._activatedRoute = null), l;
						}),
						(l.prototype.attach = function(l, n) {
							(this.activated = l), (this._activatedRoute = n), this.location.insert(l.hostView);
						}),
						(l.prototype.deactivate = function() {
							if (this.activated) {
								var l = this.component;
								this.activated.destroy(), (this.activated = null), (this._activatedRoute = null), this.deactivateEvents.emit(l);
							}
						}),
						(l.prototype.activateWith = function(l, n) {
							if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
							this._activatedRoute = l;
							var u = (n = n || this.resolver).resolveComponentFactory(l._futureSnapshot.routeConfig.component),
								e = this.parentContexts.getOrCreateContext(this.name).children,
								t = new Xp(l, e, this.location.injector);
							(this.activated = this.location.createComponent(u, this.location.length, t)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
						}),
						l
					);
				})(),
				Xp = (function() {
					function l(l, n, u) {
						(this.route = l), (this.childContexts = n), (this.parent = u);
					}
					return (
						(l.prototype.get = function(l, n) {
							return l === Vc ? this.route : l === Jp ? this.childContexts : this.parent.get(l, n);
						}),
						l
					);
				})(),
				lh = (function() {
					return function() {};
				})(),
				nh = (function() {
					function l() {}
					return (
						(l.prototype.preload = function(l, n) {
							return n().pipe(
								Xa(function() {
									return Sa(null);
								})
							);
						}),
						l
					);
				})(),
				uh = (function() {
					function l() {}
					return (
						(l.prototype.preload = function(l, n) {
							return Sa(null);
						}),
						l
					);
				})(),
				eh = (function() {
					function l(l, n, u, e, t) {
						(this.router = l),
							(this.injector = e),
							(this.preloadingStrategy = t),
							(this.loader = new Bp(
								n,
								u,
								function(n) {
									return l.triggerEvent(new zi(n));
								},
								function(n) {
									return l.triggerEvent(new Hi(n));
								}
							));
					}
					return (
						(l.prototype.setUpPreloading = function() {
							var l = this;
							this.subscription = this.router.events
								.pipe(
									Ua(function(l) {
										return l instanceof Ri;
									}),
									mo(function() {
										return l.preload();
									})
								)
								.subscribe(function() {});
						}),
						(l.prototype.preload = function() {
							var l = this.injector.get(xn);
							return this.processRoutes(l, this.router.config);
						}),
						(l.prototype.ngOnDestroy = function() {
							this.subscription.unsubscribe();
						}),
						(l.prototype.processRoutes = function(l, n) {
							var u,
								e,
								t = [];
							try {
								for (var r = o(n), s = r.next(); !s.done; s = r.next()) {
									var a = s.value;
									if (a.loadChildren && !a.canLoad && a._loadedConfig) {
										var i = a._loadedConfig;
										t.push(this.processRoutes(i.module, i.routes));
									} else a.loadChildren && !a.canLoad ? t.push(this.preloadConfig(l, a)) : a.children && t.push(this.processRoutes(l, a.children));
								}
							} catch (c) {
								u = { error: c };
							} finally {
								try {
									s && !s.done && (e = r.return) && e.call(r);
								} finally {
									if (u) throw u.error;
								}
							}
							return J(t).pipe(
								ul(),
								Q(function(l) {})
							);
						}),
						(l.prototype.preloadConfig = function(l, n) {
							var u = this;
							return this.preloadingStrategy.preload(n, function() {
								return u.loader.load(l.injector, n).pipe(
									$(function(l) {
										return (n._loadedConfig = l), u.processRoutes(l.module, l.routes);
									})
								);
							});
						}),
						l
					);
				})(),
				th = (function() {
					function l(l, n, u) {
						void 0 === u && (u = {}),
							(this.router = l),
							(this.viewportScroller = n),
							(this.options = u),
							(this.lastId = 0),
							(this.lastSource = 'imperative'),
							(this.restoredId = 0),
							(this.store = {}),
							(u.scrollPositionRestoration = u.scrollPositionRestoration || 'disabled'),
							(u.anchorScrolling = u.anchorScrolling || 'disabled');
					}
					return (
						(l.prototype.init = function() {
							'disabled' !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration('manual'),
								(this.routerEventsSubscription = this.createScrollEvents()),
								(this.scrollEventsSubscription = this.consumeScrollEvents());
						}),
						(l.prototype.createScrollEvents = function() {
							var l = this;
							return this.router.events.subscribe(function(n) {
								n instanceof Mi
									? ((l.store[l.lastId] = l.viewportScroller.getScrollPosition()),
									  (l.lastSource = n.navigationTrigger),
									  (l.restoredId = n.restoredState ? n.restoredState.navigationId : 0))
									: n instanceof Ri && ((l.lastId = n.id), l.scheduleScrollEvent(n, l.router.parseUrl(n.urlAfterRedirects).fragment));
							});
						}),
						(l.prototype.consumeScrollEvents = function() {
							var l = this;
							return this.router.events.subscribe(function(n) {
								n instanceof Qi &&
									(n.position
										? 'top' === l.options.scrollPositionRestoration
											? l.viewportScroller.scrollToPosition([0, 0])
											: 'enabled' === l.options.scrollPositionRestoration && l.viewportScroller.scrollToPosition(n.position)
										: n.anchor && 'enabled' === l.options.anchorScrolling
										? l.viewportScroller.scrollToAnchor(n.anchor)
										: 'disabled' !== l.options.scrollPositionRestoration && l.viewportScroller.scrollToPosition([0, 0]));
							});
						}),
						(l.prototype.scheduleScrollEvent = function(l, n) {
							this.router.triggerEvent(new Qi(l, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, n));
						}),
						(l.prototype.ngOnDestroy = function() {
							this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
						}),
						l
					);
				})(),
				rh = new gl('ROUTER_CONFIGURATION'),
				sh = new gl('ROUTER_FORROOT_GUARD'),
				ah = [
					sa,
					{ provide: bc, useClass: yc },
					{ provide: Kp, useFactory: fh, deps: [se, bc, Jp, sa, Xl, cu, Du, Hp, rh, [qp, new Al()], [Fp, new Al()]] },
					Jp,
					{ provide: Vc, useFactory: gh, deps: [Kp] },
					{ provide: cu, useClass: pe },
					eh,
					uh,
					nh,
					{ provide: rh, useValue: { enableTracing: !1 } }
				];
			function oh() {
				return new ne('Router', Kp);
			}
			var ih = (function() {
				function l(l, n) {}
				var n;
				return (
					(n = l),
					(l.forRoot = function(l, u) {
						return {
							ngModule: n,
							providers: [
								ah,
								dh(l),
								{ provide: sh, useFactory: hh, deps: [[Kp, new Al(), new Dl()]] },
								{ provide: rh, useValue: u || {} },
								{ provide: ta, useFactory: ph, deps: [ua, [new Rl(ra), new Al()], rh] },
								{ provide: th, useFactory: ch, deps: [Kp, ka, rh] },
								{ provide: lh, useExisting: u && u.preloadingStrategy ? u.preloadingStrategy : uh },
								{ provide: ne, multi: !0, useFactory: oh },
								[mh, { provide: wu, multi: !0, useFactory: bh, deps: [mh] }, { provide: vh, useFactory: yh, deps: [mh] }, { provide: Eu, multi: !0, useExisting: vh }]
							]
						};
					}),
					(l.forChild = function(l) {
						return { ngModule: n, providers: [dh(l)] };
					}),
					l
				);
			})();
			function ch(l, n, u) {
				return u.scrollOffset && n.setOffset(u.scrollOffset), new th(l, n, u);
			}
			function ph(l, n, u) {
				return void 0 === u && (u = {}), u.useHash ? new oa(l, n) : new ia(l, n);
			}
			function hh(l) {
				if (l) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function dh(l) {
				return [{ provide: yl, multi: !0, useValue: l }, { provide: Hp, multi: !0, useValue: l }];
			}
			function fh(l, n, u, e, t, r, s, a, o, i, c) {
				void 0 === o && (o = {});
				var p = new Kp(null, n, u, e, t, r, s, ac(a));
				if (
					(i && (p.urlHandlingStrategy = i),
					c && (p.routeReuseStrategy = c),
					o.errorHandler && (p.errorHandler = o.errorHandler),
					o.malformedUriErrorHandler && (p.malformedUriErrorHandler = o.malformedUriErrorHandler),
					o.enableTracing)
				) {
					var h = xo();
					p.events.subscribe(function(l) {
						h.logGroup('Router Event: ' + l.constructor.name), h.log(l.toString()), h.log(l), h.logGroupEnd();
					});
				}
				return (
					o.onSameUrlNavigation && (p.onSameUrlNavigation = o.onSameUrlNavigation),
					o.paramsInheritanceStrategy && (p.paramsInheritanceStrategy = o.paramsInheritanceStrategy),
					o.urlUpdateStrategy && (p.urlUpdateStrategy = o.urlUpdateStrategy),
					o.relativeLinkResolution && (p.relativeLinkResolution = o.relativeLinkResolution),
					p
				);
			}
			function gh(l) {
				return l.routerState.root;
			}
			var mh = (function() {
				function l(l) {
					(this.injector = l), (this.initNavigation = !1), (this.resultOfPreactivationDone = new N());
				}
				return (
					(l.prototype.appInitializer = function() {
						var l = this;
						return this.injector.get(ea, Promise.resolve(null)).then(function() {
							var n = null,
								u = new Promise(function(l) {
									return (n = l);
								}),
								e = l.injector.get(Kp),
								t = l.injector.get(rh);
							if (l.isLegacyDisabled(t) || l.isLegacyEnabled(t)) n(!0);
							else if ('disabled' === t.initialNavigation) e.setUpLocationChangeListener(), n(!0);
							else {
								if ('enabled' !== t.initialNavigation) throw new Error("Invalid initialNavigation options: '" + t.initialNavigation + "'");
								(e.hooks.afterPreactivation = function() {
									return l.initNavigation ? Sa(null) : ((l.initNavigation = !0), n(!0), l.resultOfPreactivationDone);
								}),
									e.initialNavigation();
							}
							return u;
						});
					}),
					(l.prototype.bootstrapListener = function(l) {
						var n = this.injector.get(rh),
							u = this.injector.get(eh),
							e = this.injector.get(th),
							t = this.injector.get(Kp),
							r = this.injector.get(se);
						l === r.components[0] &&
							(this.isLegacyEnabled(n) ? t.initialNavigation() : this.isLegacyDisabled(n) && t.setUpLocationChangeListener(),
							u.setUpPreloading(),
							e.init(),
							t.resetRootComponentType(r.componentTypes[0]),
							this.resultOfPreactivationDone.next(null),
							this.resultOfPreactivationDone.complete());
					}),
					(l.prototype.isLegacyEnabled = function(l) {
						return 'legacy_enabled' === l.initialNavigation || !0 === l.initialNavigation || void 0 === l.initialNavigation;
					}),
					(l.prototype.isLegacyDisabled = function(l) {
						return 'legacy_disabled' === l.initialNavigation || !1 === l.initialNavigation;
					}),
					l
				);
			})();
			function bh(l) {
				return l.appInitializer.bind(l);
			}
			function yh(l) {
				return l.bootstrapListener.bind(l);
			}
			var vh = new gl('Router Initializer'),
				wh = st({ encapsulation: 2, styles: [], data: {} });
			function jh(l) {
				return Qr(
					0,
					[(l()(), At(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)), _r(1, 212992, null, 0, $p, [Jp, de, wn, [8, null], ge], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			function _h(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 1, 'ng-component', [], null, null, null, jh, wh)), _r(1, 49152, null, 0, Wi, [], null, null)], null, null);
			}
			var xh = $t('ng-component', Wi, _h, {}, {}, []),
				kh = (function() {
					function l(l) {
						this.elementRef = l;
					}
					return (
						Object.defineProperty(l.prototype, 'class', {
							get: function() {
								return this.classList;
							},
							set: function(l) {
								l.includes('close')
									? ((this.classList = l.replace(/ close|close /g, '')), (this.close = !0), (this.role = 'alertdialog'))
									: ((this.classList = l), (this.close = !1), (this.role = 'alert')),
									(this.ariaLabelledby = this.id = this.class.match(/\balert\S+\b/)[0]);
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.ngOnInit = function() {
							(this.hostClass = this.class), (this.tabindex = '-1');
						}),
						(l.prototype.closeAlert = function() {
							this.hostClass = 'hide';
						}),
						(l.prototype.trap = function() {
							this.elementRef.nativeElement.focus();
						}),
						l
					);
				})(),
				Ch = (function() {
					return function() {};
				})(),
				Sh = (function() {
					return function() {};
				})(),
				Eh = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				Ph = (function() {
					return function() {};
				})(),
				Ih = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				Oh = (function() {
					return function() {};
				})(),
				Th = (function() {
					return function() {};
				})(),
				Mh = (function() {
					return function() {};
				})(),
				Rh = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				Ah = (function() {
					return function() {};
				})(),
				Nh = (function() {
					return function() {};
				})(),
				Dh = (function() {
					return function() {};
				})(),
				Uh = (function() {
					return function() {};
				})(),
				Lh = (function() {
					return function() {};
				})(),
				Vh = (function() {
					return function() {};
				})(),
				Fh = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				zh = (function() {
					return function() {};
				})(),
				Hh = (function() {
					return function() {};
				})(),
				Bh = (function() {
					return function() {};
				})(),
				qh = (function() {
					return function() {};
				})(),
				Gh = (function() {
					return function() {};
				})(),
				Zh = (function() {
					function l(l) {
						this.elementRef = l;
					}
					return (
						(l.prototype.ngOnInit = function() {}),
						(l.prototype.skip = function() {
							this.content.nativeElement.focus();
						}),
						l
					);
				})(),
				Qh = (function() {
					return function() {};
				})(),
				Wh = (function() {
					return function() {};
				})(),
				Kh = st({
					encapsulation: 2,
					styles: [
						"a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:'\\2012';color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex='-1']:focus,input[type=range]:focus{outline:0}.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{align-items:flex-start;display:flex;justify-content:flex-start}.col,.col-full{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{justify-content:center}.align-l,.col.align-t{justify-content:flex-start}.align-r,.col.align-b{justify-content:flex-end}.align-m,.col.align-c{align-items:center}.align-b,.col.align-r{align-items:flex-end}.align-t,.col.align-l{align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{justify-content:space-between}.align-st{align-items:stretch}.align-cm{align-items:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{flex-grow:0;flex-shrink:0}.item-g-0{flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{flex-grow:1;flex-shrink:1}.item-g-1{flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{flex-grow:2;flex-shrink:2}.item-g-2{flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{flex-grow:3;flex-shrink:3}.item-g-3{flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{flex-grow:4;flex-shrink:4}.item-g-4{flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{flex-grow:5;flex-shrink:5}.item-g-5{flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{flex-grow:6;flex-shrink:6}.item-g-6{flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{flex-grow:7;flex-shrink:7}.item-g-7{flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{flex-grow:8;flex-shrink:8}.item-g-8{flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{flex-grow:9;flex-shrink:9}.item-g-9{flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{flex-grow:10;flex-shrink:10}.item-g-10{flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{flex-grow:11;flex-shrink:11}.item-g-11{flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{flex-grow:12;flex-shrink:12}.item-g-12{flex-grow:12}.item-s-12{flex-shrink:12}[class*=flex-g]{flex-basis:auto}.item-order-1{order:1}.item-order-2{order:2}.item-order-3{order:3}.item-order-4{order:4}.item-order-5{order:5}.item-order-6{order:6}.item-order-7{order:7}.item-order-8{order:8}.item-order-9{order:9}.item-order-10{order:10}.item-order-11{order:11}.item-order-12{order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:46rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}:disabled,[disabled]{background-color:#efefef;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}"
					],
					data: {}
				});
			function Yh(l) {
				return Qr(
					0,
					[
						Dr(402653184, 1, { content: 0 }),
						(l()(),
						At(
							1,
							0,
							null,
							null,
							1,
							'a',
							[['class', 'show-focus'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.skip() && e), e;
							},
							null,
							null
						)),
						(l()(), qr(-1, null, ['Skip to content'])),
						zr(null, 0)
					],
					null,
					null
				);
			}
			var Jh = st({
				encapsulation: 0,
				styles: [
					'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;color:#fff;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
				],
				data: {}
			});
			function $h(l) {
				return Qr(
					0,
					[
						(l()(),
						At(
							0,
							0,
							null,
							null,
							1,
							'button',
							[['aria-label', 'close-alert'], ['autofocus', ''], ['class', 'close'], ['type', 'button']],
							null,
							[[null, 'click'], [null, 'blur']],
							function(l, n, u) {
								var e = !0,
									t = l.component;
								return 'click' === n && (e = !1 !== t.closeAlert() && e), 'blur' === n && (e = !1 !== t.trap() && e), e;
							},
							null,
							null
						)),
						(l()(), qr(-1, null, [' X\n']))
					],
					null,
					null
				);
			}
			function Xh(l) {
				return Qr(
					0,
					[
						Dr(402653184, 1, { message: 0 }),
						(l()(), At(1, 0, [[1, 0], ['message', 1]], null, 1, 'p', [['tabindex', '-1']], [[1, 'id', 0]], null, null, null, null)),
						zr(null, 0),
						(l()(), Rt(16777216, null, null, 1, null, $h)),
						_r(4, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						l(n, 4, 0, n.component.close);
					},
					function(l, n) {
						l(n, 1, 0, n.component.id);
					}
				);
			}
			var ld = st({
				encapsulation: 0,
				styles: [
					'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
				],
				data: {}
			});
			function nd(l) {
				return Qr(0, [zr(null, 0)], null, null);
			}
			var ud = st({
				encapsulation: 0,
				styles: [
					'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;flex-grow:1;flex-shrink:0}'
				],
				data: {}
			});
			function ed(l) {
				return Qr(0, [zr(null, 0)], null, null);
			}
			var td = st({
				encapsulation: 0,
				styles: [
					".checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex:1 1 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;border:.0625rem solid #bdbdbd}.form-field[_nghost-%COMP%]:not(:disabled), .form-field[_nghost-%COMP%]:not([disabled]){background-color:#fff}.form-field[_nghost-%COMP%]:-moz-read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[_nghost-%COMP%]:read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[type=checkbox][_nghost-%COMP%], .form-field[type=radio][_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;position:relative;width:1rem}.form-field[type=checkbox][_nghost-%COMP%]::after, .form-field[type=radio][_nghost-%COMP%]::after{display:block;font-size:1.175rem;height:.95rem;left:0;line-height:.8rem;position:absolute;text-align:center;top:0;width:.95rem}.form-field[type=checkbox][_nghost-%COMP%]:checked::after{content:'\\2713'}.form-field[type=radio][_nghost-%COMP%]{border-radius:50%}.form-field[type=radio][_nghost-%COMP%]:checked::after{content:'\\25CF'}.form-field[_nghost-%COMP%]:hover{transition-duration:.3s;transition-property:border;transition-timing-function:linear;border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3;outline:#2196f3 dotted 1px}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){flex:1 0 13.75rem;padding:.5rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{background-color:inherit;color:#8d8d8d;height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#8d8d8d}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{flex:0 0 7.5rem;flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{flex:none;font-size:1rem;padding-left:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{flex:1 0 auto}"
				],
				data: {}
			});
			function rd(l) {
				return Qr(0, [zr(null, 0)], null, null);
			}
			var sd = st({
				encapsulation: 0,
				styles: [
					'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
				],
				data: {}
			});
			function ad(l) {
				return Qr(0, [zr(null, 0)], null, null);
			}
			var od = (function() {
					function l() {}
					return (
						Object.defineProperty(l.prototype, 'section', {
							get: function() {
								return this.selectedSection;
							},
							set: function(l) {
								this.selectedSection = l;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.ngOnInit = function() {
							this.section = 'Alert';
						}),
						(l.prototype.checkSection = function(l) {
							return this.section === l;
						}),
						(l.prototype.selectSection = function(l) {
							this.section = l;
						}),
						l
					);
				})(),
				id = st({
					encapsulation: 0,
					styles: [
						[
							'.styleguide[_ngcontent-%COMP%]{margin-left:16rem}.styleguide[_ngcontent-%COMP%]   .hljs-attr[_ngcontent-%COMP%]{color:#954121}.styleguide-menu[_ngcontent-%COMP%]{left:2rem;top:5.5rem;width:14rem}.styleguide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#6a0080}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .styleguide[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:.875rem}.styleguide[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-width:15rem}#styleguide[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;color:#000;background:#f8f8ff;-webkit-text-size-adjust:none}.diff[_ngcontent-%COMP%]   .hljs-header[_ngcontent-%COMP%], .hljs-comment[_ngcontent-%COMP%]{color:#408080;font-style:italic}.assignment[_ngcontent-%COMP%], .css[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-subst[_ngcontent-%COMP%], .hljs-winutils[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#954121}.hljs-hexcolor[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%]{color:#40a070}.hljs-doctag[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-value[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{color:#219161}.hljs-id[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%]{color:#19469d}.hljs-params[_ngcontent-%COMP%]{color:#00f}.hljs-subst[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{font-weight:400}.haskell[_ngcontent-%COMP%]   .hljs-label[_ngcontent-%COMP%], .hljs-class[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-command[_ngcontent-%COMP%]{color:#458;font-weight:700}.django[_ngcontent-%COMP%]   .hljs-tag[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-rule[_ngcontent-%COMP%]   .hljs-property[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:navy;font-weight:400}.hljs-attr[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .instancevar[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-body[_ngcontent-%COMP%]{color:teal}.hljs-regexp[_ngcontent-%COMP%]{color:#b68}.hljs-class[_ngcontent-%COMP%]{color:#458;font-weight:700}.hljs-symbol[_ngcontent-%COMP%], .input_number[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .keymethods[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-special[_ngcontent-%COMP%]{color:#990073}.builtin[_ngcontent-%COMP%], .constructor[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#0086b3}.hljs-cdata[_ngcontent-%COMP%], .hljs-doctype[_ngcontent-%COMP%], .hljs-pi[_ngcontent-%COMP%], .hljs-pragma[_ngcontent-%COMP%], .hljs-preprocessor[_ngcontent-%COMP%], .hljs-shebang[_ngcontent-%COMP%]{color:#999;font-weight:700}.hljs-deletion[_ngcontent-%COMP%]{background:#fdd}.hljs-addition[_ngcontent-%COMP%]{background:#dfd}.diff[_ngcontent-%COMP%]   .hljs-change[_ngcontent-%COMP%]{background:#0086b3}.hljs-chunk[_ngcontent-%COMP%]{color:#aaa}.tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{opacity:.5}.flexbox[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][_ngcontent-%COMP%]{height:15.625rem;width:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][class*=wrap][_ngcontent-%COMP%]{width:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.col-full[_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][_ngcontent-%COMP%]{height:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][class*=wrap][_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.row[_ngcontent-%COMP%]{width:15.625rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;background-color:#2196f3;color:#fff;justify-content:center;min-height:6.25rem;min-width:7.5rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50;min-height:4.6875rem;min-width:6.25rem}.box[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:1rem;padding:0}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;text-align:center}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50}.box[_ngcontent-%COMP%]   p[class*=pad][_ngcontent-%COMP%]{display:inline-block;margin:0 1rem}'
						]
					],
					data: {}
				});
			function cd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Close']))
					],
					null,
					null
				);
			}
			function pd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Empty']))
					],
					null,
					null
				);
			}
			function hd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Group'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Rounded'])),
						(l()(), At(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function dd(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function fd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Accordion'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Expand']))
					],
					null,
					null
				);
			}
			function gd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 12, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Background'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Border'])),
						(l()(), At(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Hover'])),
						(l()(), At(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function md(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 24, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Container Column'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Container Row'])),
						(l()(), At(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item Column'])),
						(l()(), At(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item Order'])),
						(l()(), At(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item Row'])),
						(l()(), At(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item Size'])),
						(l()(), At(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Wrap Column'])),
						(l()(), At(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(23, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Wrap Row']))
					],
					null,
					null
				);
			}
			function bd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 21, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Checkbox'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Field'])),
						(l()(), At(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Field Group'])),
						(l()(), At(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Fieldset'])),
						(l()(), At(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Form Group'])),
						(l()(), At(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Label'])),
						(l()(), At(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function yd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Area'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Container'])),
						(l()(), At(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item']))
					],
					null,
					null
				);
			}
			function vd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Container'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Sticky Footer']))
					],
					null,
					null
				);
			}
			function wd(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function jd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Items'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Links'])),
						(l()(), At(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Placement']))
					],
					null,
					null
				);
			}
			function _d(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function xd(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function kd(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Cd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Margin'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Padding']))
					],
					null,
					null
				);
			}
			function Sd(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Ed(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Pd(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Id(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 15, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Border'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Hover'])),
						(l()(), At(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Striped'])),
						(l()(), At(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Table Cell'])),
						(l()(), At(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Table Row']))
					],
					null,
					null
				);
			}
			function Od(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Td(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Font'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function Md(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Rd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Hide'])),
						(l()(), At(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), At(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Show']))
					],
					null,
					null
				);
			}
			function Ad(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 115, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Alerts are styled with an '])),
						(l()(), At(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.alert-[bad || good || info || warn]'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(7, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(8, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(9, { flexbox: 0, box: 1 }),
						(l()(), At(10, 0, null, null, 2, 'aside', [['class', 'alert-bad']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						_r(11, 114688, null, 0, kh, [Cn], { class: [0, 'class'] }, null),
						(l()(), qr(-1, 0, ['bad'])),
						(l()(), At(13, 0, null, null, 2, 'aside', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						_r(14, 114688, null, 0, kh, [Cn], { class: [0, 'class'] }, null),
						(l()(), qr(-1, 0, ['good'])),
						(l()(), At(16, 0, null, null, 2, 'aside', [['class', 'alert-info']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						_r(17, 114688, null, 0, kh, [Cn], { class: [0, 'class'] }, null),
						(l()(), qr(-1, 0, ['info'])),
						(l()(), At(19, 0, null, null, 2, 'aside', [['class', 'alert-warn']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						_r(20, 114688, null, 0, kh, [Cn], { class: [0, 'class'] }, null),
						(l()(), qr(-1, 0, ['warn'])),
						(l()(), At(22, 0, null, null, 2, 'ez-alert', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						_r(23, 114688, null, 0, kh, [Cn], { class: [0, 'class'] }, null),
						(l()(), qr(-1, 0, ['good'])),
						(l()(), At(25, 0, null, null, 90, 'figure', [], null, null, null, null, null)),
						(l()(), At(26, 0, null, null, 89, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(27, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(29, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(32, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(35, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"alert-bad"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bad'])),
						(l()(), At(39, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(41, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(45, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(47, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(50, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(53, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"alert-good"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['good'])),
						(l()(), At(57, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(59, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(63, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(68, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(71, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"alert-info"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['info'])),
						(l()(), At(75, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(81, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(89, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"alert-warn"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['warn'])),
						(l()(), At(93, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(95, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(99, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(101, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ez-alert'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(104, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(107, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"alert-good"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['good'])),
						(l()(), At(111, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(113, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ez-alert'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 9, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 8, 0, 'pad-a-sm', e), l(n, 11, 0, 'alert-bad'), l(n, 14, 0, 'alert-good'), l(n, 17, 0, 'alert-info'), l(n, 20, 0, 'alert-warn'), l(n, 23, 0, 'alert-good');
					},
					function(l, n) {
						l(n, 10, 0, ir(n, 11).ariaLabelledby, ir(n, 11).hostClass, ir(n, 11).role, ir(n, 11).tabindex),
							l(n, 13, 0, ir(n, 14).ariaLabelledby, ir(n, 14).hostClass, ir(n, 14).role, ir(n, 14).tabindex),
							l(n, 16, 0, ir(n, 17).ariaLabelledby, ir(n, 17).hostClass, ir(n, 17).role, ir(n, 17).tabindex),
							l(n, 19, 0, ir(n, 20).ariaLabelledby, ir(n, 20).hostClass, ir(n, 20).role, ir(n, 20).tabindex),
							l(n, 22, 0, ir(n, 23).ariaLabelledby, ir(n, 23).hostClass, ir(n, 23).role, ir(n, 23).tabindex);
					}
				);
			}
			function Nd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 54, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Close'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Alerts are closed by adding a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.close'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(9, 0, null, null, 8, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(),
						At(12, 0, null, null, 2, 'aside', [['class', 'alert-good close']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						_r(13, 114688, null, 0, kh, [Cn], { class: [0, 'class'] }, null),
						(l()(), qr(-1, 0, ['close'])),
						(l()(),
						At(15, 0, null, null, 2, 'ez-alert', [['class', 'close alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						_r(16, 114688, null, 0, kh, [Cn], { class: [0, 'class'] }, null),
						(l()(), qr(-1, 0, ['close'])),
						(l()(), At(18, 0, null, null, 36, 'figure', [], null, null, null, null, null)),
						(l()(), At(19, 0, null, null, 35, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(20, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(22, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(25, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(28, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"alert-good close"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['close'])),
						(l()(), At(32, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(34, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['aside'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(38, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(40, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ez-alert'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(43, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(46, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"close alert-good"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['close'])),
						(l()(), At(50, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(52, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ez-alert'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 13, 0, 'alert-good close'), l(n, 16, 0, 'close alert-good');
					},
					function(l, n) {
						l(n, 12, 0, ir(n, 13).ariaLabelledby, ir(n, 13).hostClass, ir(n, 13).role, ir(n, 13).tabindex),
							l(n, 15, 0, ir(n, 16).ariaLabelledby, ir(n, 16).hostClass, ir(n, 16).role, ir(n, 16).tabindex);
					}
				);
			}
			function Dd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 94, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Badges are styled with a '])),
						(l()(), At(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.badge-[sm || md || lg]'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(7, 0, null, null, 14, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(8, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(9, { flexbox: 0, box: 1 }),
						(l()(), At(10, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, nd, ld)),
						_r(11, 114688, null, 0, Eh, [], null, null),
						(l()(), qr(-1, 0, ['1'])),
						(l()(), At(13, 0, null, null, 2, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, nd, ld)),
						_r(14, 114688, null, 0, Eh, [], null, null),
						(l()(), qr(-1, 0, ['20'])),
						(l()(), At(16, 0, null, null, 2, 'p', [['class', 'badge-lg bg-dk-blue text-white']], null, null, null, nd, ld)),
						_r(17, 114688, null, 0, Eh, [], null, null),
						(l()(), qr(-1, 0, ['300'])),
						(l()(), At(19, 0, null, null, 2, 'ez-badge', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, nd, ld)),
						_r(20, 114688, null, 0, Eh, [], null, null),
						(l()(), qr(-1, 0, ['10'])),
						(l()(), At(22, 0, null, null, 72, 'figure', [], null, null, null, null, null)),
						(l()(), At(23, 0, null, null, 71, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(24, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(26, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(29, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(32, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['1'])),
						(l()(), At(36, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(38, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(42, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(44, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(47, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(50, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['20'])),
						(l()(), At(54, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(56, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(68, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"badge-lg bg-dk-blue text-white"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['300'])),
						(l()(), At(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(78, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ez-badge'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['10'])),
						(l()(), At(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ez-badge'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 9, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 8, 0, 'pad-a-sm', e), l(n, 11, 0), l(n, 14, 0), l(n, 17, 0), l(n, 20, 0);
					},
					null
				);
			}
			function Ud(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 49, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Empty'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['If a badge does not contain text, it is not rendered.'])),
						(l()(), At(6, 0, null, null, 7, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(7, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(8, { flexbox: 0, box: 1 }),
						(l()(), At(9, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, nd, ld)),
						_r(10, 114688, null, 0, Eh, [], null, null),
						(l()(), qr(-1, 0, ['1'])),
						(l()(), At(12, 0, null, null, 1, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, nd, ld)),
						_r(13, 114688, null, 0, Eh, [], null, null),
						(l()(), At(14, 0, null, null, 35, 'figure', [], null, null, null, null, null)),
						(l()(), At(15, 0, null, null, 34, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(18, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(21, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(24, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['1'])),
						(l()(), At(28, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(30, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(34, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(36, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(39, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(42, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(45, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(47, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 8, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 7, 0, 'pad-a-sm', e), l(n, 10, 0), l(n, 13, 0);
					},
					null
				);
			}
			function Ld(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 114, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Buttons are styled with a '])),
						(l()(), At(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.btn-[xs || sm || md || lg || xl || full]'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(7, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(8, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(9, { flexbox: 0, box: 1 }),
						(l()(), At(10, 0, null, null, 2, 'button', [['class', 'btn-xs bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(11, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['xs'])),
						(l()(), At(13, 0, null, null, 2, 'button', [['class', 'btn-sm bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(14, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['sm'])),
						(l()(), At(16, 0, null, null, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(17, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(19, 0, null, null, 2, 'button', [['class', 'btn-lg bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(20, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['lg'])),
						(l()(), At(22, 0, null, null, 2, 'button', [['class', 'btn-xl bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(23, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['xl'])),
						(l()(), At(25, 0, null, null, 2, 'button', [['class', 'btn-full bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(26, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['full'])),
						(l()(), At(28, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), At(29, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<button '])),
						(l()(), At(31, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(35, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-xs bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(38, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(39, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>xs</button>\n<button '])),
						(l()(), At(45, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-sm bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(52, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>sm</button>\n<button '])),
						(l()(), At(59, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(60, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(63, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(66, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n<button '])),
						(l()(), At(73, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-lg bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(80, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>lg</button>\n<button '])),
						(l()(), At(87, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(91, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-xl bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(94, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(95, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(98, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>xl</button>\n<button '])),
						(l()(), At(101, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-full bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(108, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(112, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 9, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 8, 0, 'pad-a-sm', e), l(n, 11, 0), l(n, 14, 0), l(n, 17, 0), l(n, 20, 0), l(n, 23, 0), l(n, 26, 0);
					},
					null
				);
			}
			function Vd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 314, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Group'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Buttons are grouped with a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.btn-group-[row || col || full]'])),
						(l()(), qr(-1, null, [' class on a parent container.'])),
						(l()(), At(9, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 16, 'section', [['aria-label', 'button row group'], ['class', 'btn-group-row'], ['role', 'group']], null, null, null, ed, ud)),
						_r(13, 114688, null, 0, Ih, [], null, null),
						(l()(), At(14, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(15, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(17, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(18, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(20, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(21, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(23, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(24, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(26, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(27, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(29, 0, null, null, 16, 'section', [['aria-label', 'button column group'], ['class', 'btn-group-col'], ['role', 'group']], null, null, null, ed, ud)),
						_r(30, 114688, null, 0, Ih, [], null, null),
						(l()(), At(31, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(32, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(34, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(35, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(37, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(38, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(40, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(41, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(43, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(44, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(46, 0, null, null, 16, 'section', [['aria-label', 'button full row group'], ['class', 'btn-group-full'], ['role', 'group']], null, null, null, ed, ud)),
						_r(47, 114688, null, 0, Ih, [], null, null),
						(l()(), At(48, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(49, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(51, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(52, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(54, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(55, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(57, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(58, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(60, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(61, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(63, 0, null, null, 251, 'figure', [], null, null, null, null, null)),
						(l()(), At(64, 0, null, null, 250, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<section '])),
						(l()(), At(66, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-group-row"'])),
						(l()(), qr(-1, null, [' role='])),
						(l()(), At(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"group"'])),
						(l()(), qr(-1, null, [' aria-label='])),
						(l()(), At(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button row group"'])),
						(l()(), qr(-1, null, ['>\n    <button '])),
						(l()(), At(79, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(80, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(86, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(87, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(93, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(94, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(97, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(100, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(101, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(104, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(107, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(108, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(111, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(114, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(118, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(121, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(122, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(125, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(128, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(129, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(135, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(136, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(139, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(142, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(143, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(146, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), At(149, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(150, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(153, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-group-col"'])),
						(l()(), qr(-1, null, [' role='])),
						(l()(), At(156, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"group"'])),
						(l()(), qr(-1, null, [' aria-label='])),
						(l()(), At(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button column group"'])),
						(l()(), qr(-1, null, ['>\n    <button '])),
						(l()(), At(162, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(163, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(166, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(169, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(170, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(173, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(176, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(177, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(180, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(183, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(184, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(187, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(190, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(191, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(194, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(197, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(198, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(201, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(204, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(205, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(208, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(211, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(212, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(215, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(218, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(219, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(222, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(225, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(226, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(229, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), At(232, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(233, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(236, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-group-full"'])),
						(l()(), qr(-1, null, [' role='])),
						(l()(), At(239, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"group"'])),
						(l()(), qr(-1, null, [' aria-label='])),
						(l()(), At(242, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button full row group"'])),
						(l()(), qr(-1, null, ['>\n    <button '])),
						(l()(), At(245, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(246, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(249, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(252, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(253, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(256, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(259, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(260, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(263, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(266, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(267, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(270, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(273, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(274, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(277, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(280, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(281, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(284, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(287, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(288, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(291, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(294, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(295, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(298, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n    <button '])),
						(l()(), At(301, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(302, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(305, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(308, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(309, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(312, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n</section>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e),
							l(n, 13, 0),
							l(n, 15, 0),
							l(n, 18, 0),
							l(n, 21, 0),
							l(n, 24, 0),
							l(n, 27, 0),
							l(n, 30, 0),
							l(n, 32, 0),
							l(n, 35, 0),
							l(n, 38, 0),
							l(n, 41, 0),
							l(n, 44, 0),
							l(n, 47, 0),
							l(n, 49, 0),
							l(n, 52, 0),
							l(n, 55, 0),
							l(n, 58, 0),
							l(n, 61, 0);
					},
					null
				);
			}
			function Fd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 116, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Rounded'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Buttons are rounded by adding a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.rounded'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(9, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 2, 'button', [['class', 'btn-xs rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(13, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['xs'])),
						(l()(), At(15, 0, null, null, 2, 'button', [['class', 'btn-sm rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(16, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['sm'])),
						(l()(), At(18, 0, null, null, 2, 'button', [['class', 'btn-md rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(19, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['md'])),
						(l()(), At(21, 0, null, null, 2, 'button', [['class', 'btn-lg rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(22, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['lg'])),
						(l()(), At(24, 0, null, null, 2, 'button', [['class', 'btn-xl rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(25, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['xl'])),
						(l()(), At(27, 0, null, null, 2, 'button', [['class', 'btn-full rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						_r(28, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['full'])),
						(l()(), At(30, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), At(31, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<button '])),
						(l()(), At(33, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(37, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(40, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(41, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(44, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>xs</button>\n<button '])),
						(l()(), At(47, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(48, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(54, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>sm</button>\n<button '])),
						(l()(), At(61, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(68, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(69, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(72, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>md</button>\n<button '])),
						(l()(), At(75, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(76, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(82, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>lg</button>\n<button '])),
						(l()(), At(89, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(90, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(96, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(97, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(100, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>xl</button>\n<button '])),
						(l()(), At(103, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(104, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(107, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-full rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(110, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(114, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 13, 0), l(n, 16, 0), l(n, 19, 0), l(n, 22, 0), l(n, 25, 0), l(n, 28, 0);
					},
					null
				);
			}
			function zd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 31, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['State'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Buttons are disabled by adding a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['disabled'])),
						(l()(), qr(-1, null, [' attribute.'])),
						(l()(), At(9, 0, null, null, 5, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 2, 'button', [['class', 'btn-md'], ['disabled', ''], ['type', 'button']], null, null, null, ed, ud)),
						_r(13, 114688, null, 0, Ih, [], null, null),
						(l()(), qr(-1, 0, ['disabled'])),
						(l()(), At(15, 0, null, null, 16, 'figure', [], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 15, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<button '])),
						(l()(), At(18, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(19, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(22, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"btn-md"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(25, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), At(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(29, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"button"'])),
						(l()(), qr(-1, null, [' disabled>disabled</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 13, 0);
					},
					null
				);
			}
			function Hd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Bd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function qd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Accordion'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Gd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Expand'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Zd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Qd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Background'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Wd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Border'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Kd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Hover'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Yd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Text'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Jd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 201, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['In order for flexbox to work, a parent container must have a '])),
						(l()(), At(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.row[-full]'])),
						(l()(), qr(-1, null, [' or '])),
						(l()(), At(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.col[-full]'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(10, 0, null, null, 22, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(11, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(12, { flexbox: 0, box: 1 }),
						(l()(), At(13, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(14, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['row'])),
						(l()(), At(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['row'])),
						(l()(), At(18, 0, null, null, 4, 'ul', [['class', 'row-full']], null, null, null, null, null)),
						(l()(), At(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['full row'])),
						(l()(), At(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['full row'])),
						(l()(), At(23, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['column'])),
						(l()(), At(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['column'])),
						(l()(), At(28, 0, null, null, 4, 'ul', [['class', 'col-full']], null, null, null, null, null)),
						(l()(), At(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['full column'])),
						(l()(), At(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['full column'])),
						(l()(), At(33, 0, null, null, 168, 'figure', [], null, null, null, null, null)),
						(l()(), At(34, 0, null, null, 167, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(35, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(37, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(40, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(43, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(47, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(49, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['row'])),
						(l()(), At(53, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(55, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(59, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(61, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['row'])),
						(l()(), At(65, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(67, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(71, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(73, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(77, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(79, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(82, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(85, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row-full"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(89, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(91, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['full row'])),
						(l()(), At(95, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(97, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(101, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(103, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['full row'])),
						(l()(), At(107, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(109, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(113, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(115, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(119, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(121, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(124, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(127, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(131, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(133, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['column'])),
						(l()(), At(137, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(139, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(143, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(145, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['column'])),
						(l()(), At(149, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(151, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(155, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(157, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(161, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(163, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(166, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(169, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col-full"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(173, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(175, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['full column'])),
						(l()(), At(179, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(181, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(185, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(187, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['full column'])),
						(l()(), At(191, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(193, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(197, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(199, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function $d(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 485, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Container Column'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use an '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), qr(-1, null, [' class to align ALL items in a '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.col'])),
						(l()(), qr(-1, null, [' flex container.'])),
						(l()(), At(12, 0, null, null, 52, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 4, 'ul', [['class', 'col align-l']], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(20, 0, null, null, 4, 'ul', [['class', 'col align-c']], null, null, null, null, null)),
						(l()(), At(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(25, 0, null, null, 4, 'ul', [['class', 'col align-r']], null, null, null, null, null)),
						(l()(), At(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(30, 0, null, null, 4, 'ul', [['class', 'col align-t']], null, null, null, null, null)),
						(l()(), At(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(35, 0, null, null, 4, 'ul', [['class', 'col align-m']], null, null, null, null, null)),
						(l()(), At(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(40, 0, null, null, 4, 'ul', [['class', 'col align-b']], null, null, null, null, null)),
						(l()(), At(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(43, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(45, 0, null, null, 4, 'ul', [['class', 'col align-cm']], null, null, null, null, null)),
						(l()(), At(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(48, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(50, 0, null, null, 4, 'ul', [['class', 'col align-sa']], null, null, null, null, null)),
						(l()(), At(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(53, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(55, 0, null, null, 4, 'ul', [['class', 'col align-sb']], null, null, null, null, null)),
						(l()(), At(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(58, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(60, 0, null, null, 4, 'ul', [['class', 'col align-st']], null, null, null, null, null)),
						(l()(), At(61, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(63, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(65, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), At(66, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(67, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(69, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(72, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(75, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-l"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(79, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(81, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(85, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(87, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(91, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(93, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(97, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(99, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(103, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(105, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(109, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(111, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(114, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(117, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-c"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(121, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(123, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(127, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(129, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(133, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(135, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(139, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(141, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(145, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(147, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(151, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(153, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(156, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(159, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-r"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(163, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(165, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(169, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(171, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(175, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(177, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(181, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(183, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(187, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(189, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(193, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(195, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(198, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(201, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-t"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(205, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(207, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(211, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(213, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(217, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(219, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(223, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(225, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(229, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(231, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(235, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(237, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(240, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(243, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-m"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(247, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(249, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(253, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(255, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(259, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(261, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(265, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(267, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(271, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(273, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(277, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(279, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(282, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(285, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-b"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(289, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(291, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(295, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(297, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(301, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(303, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(307, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(309, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(313, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(315, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(319, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(321, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(324, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(327, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-cm"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(331, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(333, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(337, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(339, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(343, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(345, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(349, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(351, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(355, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(357, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(361, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(363, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(366, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(369, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-sa"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(373, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(375, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(379, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(381, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(385, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(387, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(391, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(393, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(397, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(399, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(403, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(405, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(408, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(411, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-sb"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(415, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(417, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(421, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(423, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(427, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(429, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(433, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(435, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(439, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(441, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(445, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(447, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(450, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(453, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col align-st"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(457, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(459, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(463, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(465, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(469, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(471, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(475, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(477, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(481, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(483, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Xd(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 485, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Container Row'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use an '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), qr(-1, null, [' class to align ALL items in a '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.row'])),
						(l()(), qr(-1, null, [' flex container.'])),
						(l()(), At(12, 0, null, null, 52, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 4, 'ul', [['class', 'row align-l']], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(20, 0, null, null, 4, 'ul', [['class', 'row align-c']], null, null, null, null, null)),
						(l()(), At(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(25, 0, null, null, 4, 'ul', [['class', 'row align-r']], null, null, null, null, null)),
						(l()(), At(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(30, 0, null, null, 4, 'ul', [['class', 'row align-t']], null, null, null, null, null)),
						(l()(), At(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(35, 0, null, null, 4, 'ul', [['class', 'row align-m']], null, null, null, null, null)),
						(l()(), At(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(40, 0, null, null, 4, 'ul', [['class', 'row align-b']], null, null, null, null, null)),
						(l()(), At(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(43, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(45, 0, null, null, 4, 'ul', [['class', 'row align-cm']], null, null, null, null, null)),
						(l()(), At(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(48, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(50, 0, null, null, 4, 'ul', [['class', 'row align-sa']], null, null, null, null, null)),
						(l()(), At(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(53, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(55, 0, null, null, 4, 'ul', [['class', 'row align-sb']], null, null, null, null, null)),
						(l()(), At(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(58, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(60, 0, null, null, 4, 'ul', [['class', 'row align-st']], null, null, null, null, null)),
						(l()(), At(61, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(63, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(65, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), At(66, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(67, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(69, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(72, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(75, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-l"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(79, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(81, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(85, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(87, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(91, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(93, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(97, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(99, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(103, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(105, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(109, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(111, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(114, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(117, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-c"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(121, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(123, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(127, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(129, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(133, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(135, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(139, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(141, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(145, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(147, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(151, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(153, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(156, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(159, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-r"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(163, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(165, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(169, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(171, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(175, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(177, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(181, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(183, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(187, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(189, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(193, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(195, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(198, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(201, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-t"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(205, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(207, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(211, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(213, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(217, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(219, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(223, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(225, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(229, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(231, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(235, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(237, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(240, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(243, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-m"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(247, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(249, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(253, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(255, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(259, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(261, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(265, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(267, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(271, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(273, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(277, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(279, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(282, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(285, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-b"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(289, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(291, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(295, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(297, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(301, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(303, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(307, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(309, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(313, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(315, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(319, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(321, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(324, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(327, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-cm"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(331, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(333, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(337, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(339, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(343, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(345, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(349, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(351, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(355, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(357, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(361, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(363, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(366, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(369, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-sa"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(373, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(375, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(379, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(381, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(385, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(387, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(391, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(393, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(397, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(399, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(403, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(405, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(408, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(411, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-sb"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(415, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(417, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(421, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(423, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(427, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(429, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(433, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(435, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(439, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(441, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(445, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(447, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(450, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(453, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row align-st"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(457, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(459, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(463, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(465, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(469, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(471, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(475, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(477, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(481, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(483, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function lf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 439, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item Column'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), qr(-1, null, [' classes to align ONE child in a '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.col'])),
						(l()(), qr(-1, null, [' flex container.'])),
						(l()(), At(12, 0, null, null, 42, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(18, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(20, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(23, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(25, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(28, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(30, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(33, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(35, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(38, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(40, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(43, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(45, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(48, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(50, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(53, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(55, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), At(56, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(57, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(59, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(62, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(69, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(71, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(75, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(81, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(89, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-l"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(93, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(95, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(99, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(101, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(105, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(107, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(110, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(113, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(117, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(119, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(123, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(125, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(129, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(131, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(134, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(137, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-c"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(141, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(143, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(147, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(149, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(153, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(155, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(158, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(161, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(165, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(167, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(171, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(173, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(177, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(179, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(182, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(185, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-r"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(189, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(191, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(195, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(197, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(201, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(203, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(206, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(209, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(213, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(215, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(219, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(221, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(225, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(227, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(230, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(233, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-t"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(237, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(239, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(243, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(245, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(249, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(251, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(254, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(257, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(261, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(263, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(267, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(269, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(273, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(275, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(278, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(281, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-m"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(285, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(287, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(291, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(293, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(297, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(299, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(302, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(305, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(309, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(311, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(315, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(317, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(321, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(323, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(326, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(329, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-b"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(333, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(335, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(339, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(341, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(345, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(347, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(350, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(353, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(357, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(359, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(363, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(365, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(369, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(371, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(374, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(377, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-cm"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(381, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(383, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(387, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(389, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(393, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(395, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(398, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(401, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(405, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(407, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(411, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(413, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(417, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(419, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(422, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(425, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-st"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(429, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(431, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(435, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(437, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function nf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 84, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item Order'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.item-order-[1 - 12]'])),
						(l()(), qr(-1, null, [' classes to align children in a flex container.'])),
						(l()(), At(9, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(13, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['1'])),
						(l()(), At(15, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['2'])),
						(l()(), At(17, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(18, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['1'])),
						(l()(), At(20, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['2'])),
						(l()(), At(22, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), At(23, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<ul '])),
						(l()(), At(25, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(28, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>\n    <'])),
						(l()(), At(31, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(37, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-order-2"'])),
						(l()(), qr(-1, null, ['>1</'])),
						(l()(), At(40, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n    <'])),
						(l()(), At(43, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-order-1"'])),
						(l()(), qr(-1, null, ['>2</'])),
						(l()(), At(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n</ul>\n<ul '])),
						(l()(), At(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>\n    <'])),
						(l()(), At(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-order-2"'])),
						(l()(), qr(-1, null, ['>1</'])),
						(l()(), At(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n    <'])),
						(l()(), At(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(76, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-order-1"'])),
						(l()(), qr(-1, null, ['>2</'])),
						(l()(), At(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n</ul>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function uf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 439, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item Row'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use an '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), qr(-1, null, [' class to align ONE child in a '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.row'])),
						(l()(), qr(-1, null, [' flex container.'])),
						(l()(), At(12, 0, null, null, 42, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(18, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(20, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(23, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(25, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(28, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(30, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(33, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(35, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(38, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(40, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(43, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(45, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(48, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(50, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(53, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(55, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), At(56, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(57, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(59, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(62, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(69, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(71, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(75, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(81, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(89, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-l"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(93, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(95, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(99, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(101, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(105, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(107, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(110, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(113, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(117, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(119, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(123, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(125, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(129, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(131, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(134, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(137, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-c"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(141, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(143, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(147, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(149, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(153, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(155, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(158, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(161, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(165, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(167, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(171, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(173, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(177, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(179, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(182, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(185, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-r"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(189, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(191, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(195, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(197, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(201, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(203, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(206, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(209, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(213, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(215, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(219, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(221, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(225, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(227, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(230, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(233, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-t"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(237, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(239, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(243, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(245, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(249, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(251, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(254, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(257, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(261, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(263, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(267, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(269, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(273, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(275, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(278, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(281, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-m"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(285, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(287, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(291, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(293, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(297, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(299, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(302, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(305, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(309, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(311, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(315, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(317, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(321, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(323, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(326, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(329, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-b"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(333, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(335, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(339, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(341, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(345, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(347, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(350, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(353, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(357, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(359, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(363, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(365, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(369, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(371, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(374, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(377, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-cm"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center middle'])),
						(l()(), At(381, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(383, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(387, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(389, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(393, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(395, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(398, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(401, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(405, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(407, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(411, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(413, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(417, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(419, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(422, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(425, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-st"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(429, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(431, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(435, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(437, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function ef(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 330, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item Size'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.item-[g || s || gs]-[1 - 12]'])),
						(l()(), qr(-1, null, [' classes to grow and/or shrink children in a flex container.'])),
						(l()(), At(9, 0, null, null, 32, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(13, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(15, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['grow'])),
						(l()(), At(17, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(20, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['shrink'])),
						(l()(), At(22, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), At(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(25, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['grow & shrink'])),
						(l()(), At(27, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(30, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['grow'])),
						(l()(), At(32, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(35, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['shrink'])),
						(l()(), At(37, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), At(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(40, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['grow & shrink'])),
						(l()(), At(42, 0, null, null, 288, 'figure', [], null, null, null, null, null)),
						(l()(), At(43, 0, null, null, 287, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(44, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(46, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(49, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(52, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(56, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(58, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(62, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(64, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(68, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(70, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(73, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(76, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-g-1"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['grow'])),
						(l()(), At(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(82, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(88, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(92, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(94, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(97, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(100, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(106, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(110, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(112, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(116, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(118, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(121, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(124, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-s-1"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['shrink'])),
						(l()(), At(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(130, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(136, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(140, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(142, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(145, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(148, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(152, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(154, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(158, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(160, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(164, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(166, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(169, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(172, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-gs-1"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['grow &amp; shrink'])),
						(l()(), At(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(178, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(184, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(188, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(190, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(193, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(196, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(200, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(202, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(208, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(212, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(214, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(217, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(220, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-g-1"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['grow'])),
						(l()(), At(224, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(226, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(230, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(232, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(236, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(238, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(241, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(244, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(250, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(256, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(260, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(262, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(265, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(268, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-s-1"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['shrink'])),
						(l()(), At(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(274, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(278, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(280, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(284, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(286, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(289, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(292, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(298, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['default'])),
						(l()(), At(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(304, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(308, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(310, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(313, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(316, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"item-gs-1"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['grow &amp; shrink'])),
						(l()(), At(320, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(322, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(326, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(328, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function tf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 381, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Wrap Column'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.wrap-[c || l || r || sa || sb || st]'])),
						(l()(), qr(-1, null, [' class to align multi-column items in a '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.col'])),
						(l()(), qr(-1, null, [' flex container.'])),
						(l()(), At(12, 0, null, null, 44, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 6, 'ul', [['class', 'col wrap-c']], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(20, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(22, 0, null, null, 6, 'ul', [['class', 'col wrap-l']], null, null, null, null, null)),
						(l()(), At(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(25, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(29, 0, null, null, 6, 'ul', [['class', 'col wrap-r']], null, null, null, null, null)),
						(l()(), At(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(36, 0, null, null, 6, 'ul', [['class', 'col wrap-sa']], null, null, null, null, null)),
						(l()(), At(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(43, 0, null, null, 6, 'ul', [['class', 'col wrap-sb']], null, null, null, null, null)),
						(l()(), At(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(48, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(50, 0, null, null, 6, 'ul', [['class', 'col wrap-st']], null, null, null, null, null)),
						(l()(), At(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(53, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(55, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(57, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), At(58, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(59, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(61, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(64, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(67, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col wrap-c"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(71, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(73, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(77, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(79, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(83, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(85, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(89, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(91, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(95, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(97, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['center'])),
						(l()(), At(101, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(103, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(107, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(109, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(113, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(115, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(118, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(121, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col wrap-l"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(125, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(127, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(131, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(133, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(137, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(139, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(143, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(145, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(149, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(151, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['left (default)'])),
						(l()(), At(155, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(157, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(161, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(163, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(167, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(169, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(172, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(175, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col wrap-r"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(179, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(181, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(185, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(187, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(191, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(193, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(197, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(199, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(203, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(205, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['right'])),
						(l()(), At(209, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(211, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(215, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(217, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(221, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(223, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(226, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(229, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col wrap-sa"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(233, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(235, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(239, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(241, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(245, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(247, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(251, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(253, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(257, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(259, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(263, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(265, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(269, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(271, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(275, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(277, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(280, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(283, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col wrap-sb"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(287, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(289, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(293, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(295, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(299, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(301, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(305, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(307, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(311, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(313, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(317, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(319, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(323, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(325, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(329, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(331, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(334, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(337, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"col wrap-st"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(341, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(343, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(347, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(349, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(353, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(355, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(359, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(361, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(365, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(367, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(371, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(373, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(377, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(379, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function rf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 381, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Wrap Row'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.wrap-[m || t || b || sa || sb || st]'])),
						(l()(), qr(-1, null, [' class to align multi-row items in a '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.row'])),
						(l()(), qr(-1, null, [' flex container.'])),
						(l()(), At(12, 0, null, null, 44, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 6, 'ul', [['class', 'row wrap-m']], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(20, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(22, 0, null, null, 6, 'ul', [['class', 'row wrap-t']], null, null, null, null, null)),
						(l()(), At(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(25, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(29, 0, null, null, 6, 'ul', [['class', 'row wrap-b']], null, null, null, null, null)),
						(l()(), At(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(36, 0, null, null, 6, 'ul', [['class', 'row wrap-sa']], null, null, null, null, null)),
						(l()(), At(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(43, 0, null, null, 6, 'ul', [['class', 'row wrap-sb']], null, null, null, null, null)),
						(l()(), At(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(48, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(50, 0, null, null, 6, 'ul', [['class', 'row wrap-st']], null, null, null, null, null)),
						(l()(), At(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(53, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(55, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(57, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), At(58, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(59, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(61, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(64, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(67, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row wrap-m"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(71, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(73, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(77, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(79, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(83, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(85, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(89, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(91, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(95, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(97, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['middle'])),
						(l()(), At(101, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(103, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(107, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(109, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(113, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(115, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(118, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(121, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row wrap-t"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(125, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(127, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(131, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(133, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(137, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(139, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(143, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(145, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(149, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(151, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['top (default)'])),
						(l()(), At(155, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(157, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(161, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(163, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(167, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(169, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(172, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(175, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row wrap-b"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(179, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(181, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(185, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(187, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(191, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(193, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(197, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(199, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(203, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(205, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), At(209, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(211, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(215, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(217, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(221, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(223, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(226, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(229, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row wrap-sa"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(233, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(235, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(239, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(241, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(245, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(247, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(251, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(253, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(257, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(259, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space around'])),
						(l()(), At(263, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(265, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(269, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(271, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(275, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(277, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(280, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(283, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row wrap-sb"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(287, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(289, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(293, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(295, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(299, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(301, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(305, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(307, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(311, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(313, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['space between'])),
						(l()(), At(317, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(319, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(323, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(325, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(329, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(331, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(334, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(337, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"row wrap-st"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(341, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(343, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(347, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(349, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(353, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(355, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(359, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(361, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(365, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(367, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['stretch'])),
						(l()(), At(371, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(373, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(377, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(379, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function sf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 15, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 14, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 13, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Forms are styled with '])),
						(l()(), At(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.form-group'])),
						(l()(), qr(-1, null, [', '])),
						(l()(), At(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.field-group'])),
						(l()(), qr(-1, null, [', '])),
						(l()(), At(10, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.form-label'])),
						(l()(), qr(-1, null, [', and '])),
						(l()(), At(13, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.form-field'])),
						(l()(), qr(-1, null, [' classes.']))
					],
					null,
					null
				);
			}
			function af(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 503, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Checkbox'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Checkboxes and radio buttons are grouped with a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.*-group'])),
						(l()(), qr(-1, null, [' class on a parent container.'])),
						(l()(), At(9, 0, null, null, 68, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 65, 'form', [], null, null, null, null, null)),
						(l()(), At(13, 0, null, null, 64, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						_r(14, 114688, null, 0, Rh, [], null, null),
						(l()(), At(15, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(16, 114688, null, 0, Rh, [], null, null),
						(l()(), At(17, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(18, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Name'])),
						(l()(), At(20, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						_r(21, 114688, null, 0, Rh, [], null, null),
						(l()(), At(22, 0, null, 0, 20, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(23, 114688, null, 0, Rh, [], null, null),
						(l()(), At(24, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, rd, td)),
						_r(25, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Agree'])),
						(l()(), At(27, 0, null, 0, 15, 'ul', [['class', 'radio-group']], null, null, null, rd, td)),
						_r(28, 114688, null, 0, Rh, [], null, null),
						(l()(), At(29, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(30, 114688, null, 0, Rh, [], null, null),
						(l()(), At(31, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yes'], ['name', 'agree'], ['type', 'radio']], null, null, null, rd, td)),
						_r(32, 114688, null, 0, Rh, [], null, null),
						(l()(), At(33, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yes']], null, null, null, rd, td)),
						_r(34, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Yes'])),
						(l()(), At(36, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(37, 114688, null, 0, Rh, [], null, null),
						(l()(), At(38, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'no'], ['name', 'agree'], ['type', 'radio']], null, null, null, rd, td)),
						_r(39, 114688, null, 0, Rh, [], null, null),
						(l()(), At(40, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'no']], null, null, null, rd, td)),
						_r(41, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['No'])),
						(l()(), At(43, 0, null, 0, 34, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(44, 114688, null, 0, Rh, [], null, null),
						(l()(), At(45, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, rd, td)),
						_r(46, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Color'])),
						(l()(), At(48, 0, null, 0, 29, 'ul', [['class', 'checkbox-group']], null, null, null, rd, td)),
						_r(49, 114688, null, 0, Rh, [], null, null),
						(l()(), At(50, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(51, 114688, null, 0, Rh, [], null, null),
						(l()(), At(52, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'blue'], ['name', 'color'], ['type', 'checkbox']], null, null, null, rd, td)),
						_r(53, 114688, null, 0, Rh, [], null, null),
						(l()(), At(54, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'blue']], null, null, null, rd, td)),
						_r(55, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Blue'])),
						(l()(), At(57, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(58, 114688, null, 0, Rh, [], null, null),
						(l()(), At(59, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'green'], ['name', 'color'], ['type', 'checkbox']], null, null, null, rd, td)),
						_r(60, 114688, null, 0, Rh, [], null, null),
						(l()(), At(61, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'green']], null, null, null, rd, td)),
						_r(62, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Green'])),
						(l()(), At(64, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(65, 114688, null, 0, Rh, [], null, null),
						(l()(), At(66, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'red'], ['name', 'color'], ['type', 'checkbox']], null, null, null, rd, td)),
						_r(67, 114688, null, 0, Rh, [], null, null),
						(l()(), At(68, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'red']], null, null, null, rd, td)),
						_r(69, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Red'])),
						(l()(), At(71, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(72, 114688, null, 0, Rh, [], null, null),
						(l()(), At(73, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yellow'], ['name', 'color'], ['type', 'checkbox']], null, null, null, rd, td)),
						_r(74, 114688, null, 0, Rh, [], null, null),
						(l()(), At(75, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yellow']], null, null, null, rd, td)),
						_r(76, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Yellow'])),
						(l()(), At(78, 0, null, null, 425, 'figure', [], null, null, null, null, null)),
						(l()(), At(79, 0, null, null, 424, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>\n    <ul '])),
						(l()(), At(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-group"'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(90, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(93, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(96, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(108, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(111, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>Name</'])),
						(l()(), At(114, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(120, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(123, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(126, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(129, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(135, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(138, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, ['>\n        </'])),
						(l()(), At(141, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(147, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(150, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <p '])),
						(l()(), At(153, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(156, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, ['>Agree</p>\n            <ul '])),
						(l()(), At(159, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(162, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"radio-group"'])),
						(l()(), qr(-1, null, ['>\n                <'])),
						(l()(), At(165, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(168, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(171, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(174, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(177, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(180, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(183, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(186, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"radio"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(189, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"agree"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(192, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"yes"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(195, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(198, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(201, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(204, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(207, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"yes"'])),
						(l()(), qr(-1, null, ['>Yes</'])),
						(l()(), At(210, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n                </'])),
						(l()(), At(213, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n                <'])),
						(l()(), At(216, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(219, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(222, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(225, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(228, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(231, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(234, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(237, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"radio"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(240, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"agree"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"no"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(246, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(249, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(252, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(255, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(258, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"no"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(261, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['No'])),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(264, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n                </'])),
						(l()(), At(267, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), At(270, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(273, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(276, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(279, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <p '])),
						(l()(), At(282, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(285, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, ['>Color</p>\n            <ul '])),
						(l()(), At(288, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(291, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"checkbox-group"'])),
						(l()(), qr(-1, null, ['>\n                <'])),
						(l()(), At(294, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(297, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(300, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(303, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(306, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(309, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(312, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(315, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"checkbox"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(318, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"color"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(321, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"blue"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(324, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(327, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(330, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(333, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(336, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"blue"'])),
						(l()(), qr(-1, null, ['>Blue</'])),
						(l()(), At(339, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n                </'])),
						(l()(), At(342, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n                <'])),
						(l()(), At(345, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(348, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(351, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(354, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(357, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(360, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(363, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(366, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"checkbox"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(369, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"color"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(372, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"green"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(375, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(378, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(381, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(384, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(387, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"green"'])),
						(l()(), qr(-1, null, ['>Green</'])),
						(l()(), At(390, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n                </'])),
						(l()(), At(393, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n                <'])),
						(l()(), At(396, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(399, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(402, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(405, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(408, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(411, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(414, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(417, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"checkbox"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(420, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"color"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(423, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"red"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(426, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(429, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(432, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(435, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(438, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"red"'])),
						(l()(), qr(-1, null, ['>Red</'])),
						(l()(), At(441, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n                </'])),
						(l()(), At(444, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n                <'])),
						(l()(), At(447, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(450, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(453, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(456, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(459, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(462, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(465, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(468, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"checkbox"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(471, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"color"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(474, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"yellow"'])),
						(l()(), qr(-1, null, ['>\n                    <'])),
						(l()(), At(477, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(480, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(483, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(486, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(489, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"yellow"'])),
						(l()(), qr(-1, null, ['>Yellow</'])),
						(l()(), At(492, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n                </'])),
						(l()(), At(495, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), At(498, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), At(501, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e),
							l(n, 14, 0),
							l(n, 16, 0),
							l(n, 18, 0),
							l(n, 21, 0),
							l(n, 23, 0),
							l(n, 25, 0),
							l(n, 28, 0),
							l(n, 30, 0),
							l(n, 32, 0),
							l(n, 34, 0),
							l(n, 37, 0),
							l(n, 39, 0),
							l(n, 41, 0),
							l(n, 44, 0),
							l(n, 46, 0),
							l(n, 49, 0),
							l(n, 51, 0),
							l(n, 53, 0),
							l(n, 55, 0),
							l(n, 58, 0),
							l(n, 60, 0),
							l(n, 62, 0),
							l(n, 65, 0),
							l(n, 67, 0),
							l(n, 69, 0),
							l(n, 72, 0),
							l(n, 74, 0),
							l(n, 76, 0);
					},
					null
				);
			}
			function of(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 477, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Field'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Form fields are styled with a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.form-field'])),
						(l()(), qr(-1, null, [' class. Different styles are applied based on the form field.'])),
						(l()(), At(9, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 42, 'form', [], null, null, null, null, null)),
						(l()(), At(13, 0, null, null, 41, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						_r(14, 114688, null, 0, Rh, [], null, null),
						(l()(), At(15, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(16, 114688, null, 0, Rh, [], null, null),
						(l()(), At(17, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(18, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Name'])),
						(l()(), At(20, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						_r(21, 114688, null, 0, Rh, [], null, null),
						(l()(), At(22, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(23, 114688, null, 0, Rh, [], null, null),
						(l()(), At(24, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'gender']], null, null, null, rd, td)),
						_r(25, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Gender'])),
						(l()(), At(27, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'gender'], ['name', 'gender']], null, null, null, rd, td)),
						_r(28, 114688, null, 0, Rh, [], null, null),
						(l()(), At(29, 0, null, 0, 1, 'option', [['value', '1']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Select'])),
						(l()(), At(31, 0, null, 0, 1, 'option', [['value', '2']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Female'])),
						(l()(), At(33, 0, null, 0, 1, 'option', [['value', '3']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Male'])),
						(l()(), At(35, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(36, 114688, null, 0, Rh, [], null, null),
						(l()(), At(37, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'language']], null, null, null, rd, td)),
						_r(38, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Language'])),
						(l()(), At(40, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'language'], ['multiple', ''], ['name', 'language']], null, null, null, rd, td)),
						_r(41, 114688, null, 0, Rh, [], null, null),
						(l()(), At(42, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['English'])),
						(l()(), At(44, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['French'])),
						(l()(), At(46, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Spanish'])),
						(l()(), At(48, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(49, 114688, null, 0, Rh, [], null, null),
						(l()(), At(50, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'notes']], null, null, null, rd, td)),
						_r(51, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Notes'])),
						(l()(), At(53, 0, null, 0, 1, 'textarea', [['class', 'form-field'], ['id', 'notes'], ['name', 'notes'], ['placeholder', 'Enter notes']], null, null, null, rd, td)),
						_r(54, 114688, null, 0, Rh, [], null, null),
						(l()(), At(55, 0, null, null, 422, 'figure', [], null, null, null, null, null)),
						(l()(), At(56, 0, null, null, 421, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(57, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(59, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(63, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(68, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(71, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-group"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n        '])),
						(l()(), At(75, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(80, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(87, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(89, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(92, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(95, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(98, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(101, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['Name'])),
						(l()(), At(105, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(107, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(111, 0, null, null, 34, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(113, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(116, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(119, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(122, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(125, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(128, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['id'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(131, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(134, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['name'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(137, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(140, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['placeholder'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(143, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n        '])),
						(l()(), At(147, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(149, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n        '])),
						(l()(), At(153, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(155, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(158, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(161, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(165, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(167, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(170, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(173, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(176, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(179, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"gender"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['Gender'])),
						(l()(), At(183, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(185, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(189, 0, null, null, 22, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(191, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['select'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(194, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(197, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(200, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['name'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(203, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"gender"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(206, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['id'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(209, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"gender"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n                '])),
						(l()(), At(213, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(215, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(218, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['value'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(221, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"1"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['Select'])),
						(l()(), At(225, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(227, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n                '])),
						(l()(), At(231, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(233, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(236, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['value'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(239, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"2"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['Female'])),
						(l()(), At(243, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(245, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n                '])),
						(l()(), At(249, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(251, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(254, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['value'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(257, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"3"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['Male'])),
						(l()(), At(261, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(263, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(267, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(269, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['select'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n        '])),
						(l()(), At(273, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(275, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n        '])),
						(l()(), At(279, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(281, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(284, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(287, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(291, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(293, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(296, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(299, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(302, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(305, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"language"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['Language'])),
						(l()(), At(309, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(311, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(315, 0, null, null, 25, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(317, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['select'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(320, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(323, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(326, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['name'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(329, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"language"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(332, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['id'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(335, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"language"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(338, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['multiple'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n                '])),
						(l()(), At(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(344, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['English'])),
						(l()(), At(348, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(350, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n                '])),
						(l()(), At(354, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(356, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['French'])),
						(l()(), At(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(362, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n                '])),
						(l()(), At(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(368, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['Spanish'])),
						(l()(), At(372, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(374, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['option'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(378, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(380, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['select'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n        '])),
						(l()(), At(384, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(386, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n        '])),
						(l()(), At(390, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(392, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(395, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(398, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(402, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(404, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(407, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(410, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(413, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(416, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"notes"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['Notes'])),
						(l()(), At(420, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(422, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n            '])),
						(l()(), At(426, 0, null, null, 28, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(428, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['textarea'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(431, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(434, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(437, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['name'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(440, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"notes"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(443, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['id'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(446, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"notes"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(449, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['placeholder'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(452, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter notes"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(455, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(457, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['textarea'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n        '])),
						(l()(), At(461, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(463, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n    '])),
						(l()(), At(467, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(469, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['ul'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['    \n'])),
						(l()(), At(473, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(475, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e),
							l(n, 14, 0),
							l(n, 16, 0),
							l(n, 18, 0),
							l(n, 21, 0),
							l(n, 23, 0),
							l(n, 25, 0),
							l(n, 28, 0),
							l(n, 36, 0),
							l(n, 38, 0),
							l(n, 41, 0),
							l(n, 49, 0),
							l(n, 51, 0),
							l(n, 54, 0);
					},
					null
				);
			}
			function cf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 90, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Field Group'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Field groups are styled with a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.field-group'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(9, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), At(13, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						_r(14, 114688, null, 0, Rh, [], null, null),
						(l()(), At(15, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(16, 114688, null, 0, Rh, [], null, null),
						(l()(), At(17, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(18, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Name'])),
						(l()(), At(20, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						_r(21, 114688, null, 0, Rh, [], null, null),
						(l()(), At(22, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), At(23, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(25, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>\n    <ul '])),
						(l()(), At(28, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(31, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-group"'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(37, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(40, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(43, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(55, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>Name</'])),
						(l()(), At(58, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, ['>\n        </'])),
						(l()(), At(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), At(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 16, 0), l(n, 18, 0), l(n, 21, 0);
					},
					null
				);
			}
			function pf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 103, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Fieldset'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Fieldsets are styled with a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.fieldset'])),
						(l()(), qr(-1, null, [' class and have a '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<legend>'])),
						(l()(), qr(-1, null, [' tag as the first child.'])),
						(l()(), At(12, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 13, 'form', [], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 12, 'fieldset', [['class', 'fieldset']], null, null, null, rd, td)),
						_r(17, 114688, null, 0, Rh, [], null, null),
						(l()(), At(18, 0, null, 0, 1, 'legend', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Contact'])),
						(l()(), At(20, 0, null, 0, 8, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						_r(21, 114688, null, 0, Rh, [], null, null),
						(l()(), At(22, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(23, 114688, null, 0, Rh, [], null, null),
						(l()(), At(24, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(25, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Name'])),
						(l()(), At(27, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						_r(28, 114688, null, 0, Rh, [], null, null),
						(l()(), At(29, 0, null, null, 74, 'figure', [], null, null, null, null, null)),
						(l()(), At(30, 0, null, null, 73, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>\n    <fieldset '])),
						(l()(), At(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"fieldset"'])),
						(l()(), qr(-1, null, ['>\n        <legend>Contact</legend>\n        <ul '])),
						(l()(), At(41, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(44, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(50, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(53, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n                <'])),
						(l()(), At(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(62, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>Name</'])),
						(l()(), At(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n                <'])),
						(l()(), At(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(95, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, ['>\n            </'])),
						(l()(), At(98, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n        </ul>\n    </fieldset>    \n</'])),
						(l()(), At(101, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e), l(n, 17, 0), l(n, 21, 0), l(n, 23, 0), l(n, 25, 0), l(n, 28, 0);
					},
					null
				);
			}
			function hf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 284, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Form Group'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Form groups are styled with a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.form-group'])),
						(l()(), qr(-1, null, [' class for vertical fields and '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.form-group-inline'])),
						(l()(), qr(-1, null, [' for horizontal fields.'])),
						(l()(), At(12, 0, null, null, 35, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 32, 'form', [], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 15, 'ul', [['class', 'form-group-inline']], null, null, null, rd, td)),
						_r(17, 114688, null, 0, Rh, [], null, null),
						(l()(), At(18, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(19, 114688, null, 0, Rh, [], null, null),
						(l()(), At(20, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(21, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Name'])),
						(l()(), At(23, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						_r(24, 114688, null, 0, Rh, [], null, null),
						(l()(), At(25, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(26, 114688, null, 0, Rh, [], null, null),
						(l()(), At(27, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, rd, td)),
						_r(28, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Email'])),
						(l()(),
						At(30, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, rd, td)),
						_r(31, 114688, null, 0, Rh, [], null, null),
						(l()(), At(32, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						_r(33, 114688, null, 0, Rh, [], null, null),
						(l()(), At(34, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(35, 114688, null, 0, Rh, [], null, null),
						(l()(), At(36, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(37, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Name'])),
						(l()(), At(39, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						_r(40, 114688, null, 0, Rh, [], null, null),
						(l()(), At(41, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(42, 114688, null, 0, Rh, [], null, null),
						(l()(), At(43, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, rd, td)),
						_r(44, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Email'])),
						(l()(),
						At(46, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, rd, td)),
						_r(47, 114688, null, 0, Rh, [], null, null),
						(l()(), At(48, 0, null, null, 236, 'figure', [], null, null, null, null, null)),
						(l()(), At(49, 0, null, null, 235, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(51, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>\n    <ul '])),
						(l()(), At(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(57, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-group-inline"'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(60, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(69, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(75, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(78, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>Name</'])),
						(l()(), At(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(87, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(90, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(99, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(102, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, ['>\n        </'])),
						(l()(), At(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(114, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(120, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(126, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(129, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(132, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(135, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"email"'])),
						(l()(), qr(-1, null, ['>Email</'])),
						(l()(), At(138, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(141, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(147, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(150, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(153, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(156, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"email"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"email"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(162, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter email"'])),
						(l()(), qr(-1, null, ['>\n        </'])),
						(l()(), At(165, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n    </ul>    \n    <ul '])),
						(l()(), At(168, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(171, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-group"'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(174, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(177, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(180, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(183, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(186, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(189, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(192, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(195, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>Name</'])),
						(l()(), At(198, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(201, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(204, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(207, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(210, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(213, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(216, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(219, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(222, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, ['>\n        </'])),
						(l()(), At(225, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(228, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(231, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(234, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(237, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(240, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(246, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(249, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"email"'])),
						(l()(), qr(-1, null, ['>Email</'])),
						(l()(), At(252, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(255, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(258, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(261, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(264, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(267, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(270, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"email"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(273, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"email"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(276, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter email"'])),
						(l()(), qr(-1, null, ['>\n        </'])),
						(l()(), At(279, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), At(282, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e),
							l(n, 17, 0),
							l(n, 19, 0),
							l(n, 21, 0),
							l(n, 24, 0),
							l(n, 26, 0),
							l(n, 28, 0),
							l(n, 31, 0),
							l(n, 33, 0),
							l(n, 35, 0),
							l(n, 37, 0),
							l(n, 40, 0),
							l(n, 42, 0),
							l(n, 44, 0),
							l(n, 47, 0);
					},
					null
				);
			}
			function df(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 90, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Label'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Form labels are styled with a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.form-label'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(9, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), At(13, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						_r(14, 114688, null, 0, Rh, [], null, null),
						(l()(), At(15, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(16, 114688, null, 0, Rh, [], null, null),
						(l()(), At(17, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(18, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Name'])),
						(l()(), At(20, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						_r(21, 114688, null, 0, Rh, [], null, null),
						(l()(), At(22, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), At(23, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(25, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>\n    <ul '])),
						(l()(), At(28, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(31, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-group"'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(37, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(40, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(43, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(55, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>Name</'])),
						(l()(), At(58, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, ['>\n        </'])),
						(l()(), At(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), At(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 16, 0), l(n, 18, 0), l(n, 21, 0);
					},
					null
				);
			}
			function ff(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 154, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['State'])),
						(l()(), At(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Form fields can be disabled by adding a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['disabled'])),
						(l()(), qr(-1, null, [' attribute or readonly by adding a '])),
						(l()(), At(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['readonly'])),
						(l()(), qr(-1, null, [' attribute. '])),
						(l()(), At(12, 0, null, null, 19, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(13, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(14, { flexbox: 0, box: 1 }),
						(l()(), At(15, 0, null, null, 16, 'form', [], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						_r(17, 114688, null, 0, Rh, [], null, null),
						(l()(), At(18, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(19, 114688, null, 0, Rh, [], null, null),
						(l()(), At(20, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(21, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Disabled'])),
						(l()(),
						At(
							23,
							0,
							null,
							0,
							1,
							'input',
							[['class', 'form-field'], ['disabled', ''], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']],
							null,
							null,
							null,
							rd,
							td
						)),
						_r(24, 114688, null, 0, Rh, [], null, null),
						(l()(), At(25, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						_r(26, 114688, null, 0, Rh, [], null, null),
						(l()(), At(27, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						_r(28, 114688, null, 0, Rh, [], null, null),
						(l()(), qr(-1, 0, ['Readonly'])),
						(l()(),
						At(
							30,
							0,
							null,
							0,
							1,
							'input',
							[['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['readonly', ''], ['type', 'text']],
							null,
							null,
							null,
							rd,
							td
						)),
						_r(31, 114688, null, 0, Rh, [], null, null),
						(l()(), At(32, 0, null, null, 122, 'figure', [], null, null, null, null, null)),
						(l()(), At(33, 0, null, null, 121, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>\n    <ul '])),
						(l()(), At(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-group"'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>Disabled</'])),
						(l()(), At(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(80, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, [' disabled>\n        </'])),
						(l()(), At(95, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n        <'])),
						(l()(), At(98, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(101, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(104, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"field-group"'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(107, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(110, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(113, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-label"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(116, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['for'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(119, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, ['>Readonly</'])),
						(l()(), At(122, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['label'])),
						(l()(), qr(-1, null, ['>\n            <'])),
						(l()(), At(125, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['input'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(128, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(131, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"form-field"'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(134, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['type'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(137, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"text"'])),
						(l()(), qr(-1, null, [' id='])),
						(l()(), At(140, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' name='])),
						(l()(), At(143, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"name"'])),
						(l()(), qr(-1, null, [' placeholder='])),
						(l()(), At(146, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"Enter name"'])),
						(l()(), qr(-1, null, [' readonly>\n        </'])),
						(l()(), At(149, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['li'])),
						(l()(), qr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), At(152, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['form'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e), l(n, 17, 0), l(n, 19, 0), l(n, 21, 0), l(n, 24, 0), l(n, 26, 0), l(n, 28, 0), l(n, 31, 0);
					},
					null
				);
			}
			function gf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function mf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Area'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function bf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Container'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function yf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Item'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function vf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function wf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Container'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function jf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Sticky Footer'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function _f(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function xf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function kf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Items'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Cf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Links'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Sf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Placement'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ef(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Pf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function If(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Of(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.']))
					],
					null,
					null
				);
			}
			function Tf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 94, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Margin'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), qr(-1, null, [' class to add margin to an element.'])),
						(l()(), At(9, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 1, 'p', [['class', 'mar-t-xs']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top extra small'])),
						(l()(), At(14, 0, null, null, 1, 'p', [['class', 'mar-r-sm']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right small'])),
						(l()(), At(16, 0, null, null, 1, 'p', [['class', 'mar-b-md']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom medium'])),
						(l()(), At(18, 0, null, null, 1, 'p', [['class', 'mar-l-lg']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left large'])),
						(l()(), At(20, 0, null, null, 1, 'p', [['class', 'mar-tb-xl']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top bottom extra large'])),
						(l()(), At(22, 0, null, null, 1, 'p', [['class', 'mar-lr-md']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left right medium'])),
						(l()(), At(24, 0, null, null, 1, 'p', [['class', 'mar-a-md']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['all medium'])),
						(l()(), At(26, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), At(27, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(29, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"mar-t-xs"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(35, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top'])),
						(l()(), qr(-1, null, [' extra small</p>\n<'])),
						(l()(), At(38, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"mar-r-sm"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(44, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), qr(-1, null, [' small</p>\n<'])),
						(l()(), At(47, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"mar-b-md"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(53, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), qr(-1, null, [' medium</p>\n<'])),
						(l()(), At(56, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"mar-l-lg"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(62, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left'])),
						(l()(), qr(-1, null, [' large</p>\n<'])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"mar-tb-xl"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(71, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(74, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), qr(-1, null, [' extra large</p>\n<'])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"mar-lr-md"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), qr(-1, null, [' medium</p>\n<'])),
						(l()(), At(89, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"mar-a-md"'])),
						(l()(), qr(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Mf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 94, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Padding'])),
						(l()(), At(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Use a '])),
						(l()(), At(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), qr(-1, null, [' class to add padding to an element.'])),
						(l()(), At(9, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(10, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(11, { flexbox: 0, box: 1 }),
						(l()(), At(12, 0, null, null, 1, 'p', [['class', 'pad-t-xs']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top extra small'])),
						(l()(), At(14, 0, null, null, 1, 'p', [['class', 'pad-r-sm']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right small'])),
						(l()(), At(16, 0, null, null, 1, 'p', [['class', 'pad-b-md']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom medium'])),
						(l()(), At(18, 0, null, null, 1, 'p', [['class', 'pad-l-lg']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left large'])),
						(l()(), At(20, 0, null, null, 1, 'p', [['class', 'pad-tb-xl']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top bottom extra large'])),
						(l()(), At(22, 0, null, null, 1, 'p', [['class', 'pad-lr-md']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left right medium'])),
						(l()(), At(24, 0, null, null, 1, 'p', [['class', 'pad-a-md']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['all medium'])),
						(l()(), At(26, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), At(27, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(29, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"pad-t-xs"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(35, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top'])),
						(l()(), qr(-1, null, [' extra small</p>\n<'])),
						(l()(), At(38, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"pad-r-sm"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(44, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), qr(-1, null, [' small</p>\n<'])),
						(l()(), At(47, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"pad-b-md"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(53, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), qr(-1, null, [' medium</p>\n<'])),
						(l()(), At(56, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"pad-l-lg"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(62, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left'])),
						(l()(), qr(-1, null, [' large</p>\n<'])),
						(l()(), At(65, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"pad-tb-xl"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(71, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['top'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(74, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['bottom'])),
						(l()(), qr(-1, null, [' extra large</p>\n<'])),
						(l()(), At(77, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"pad-lr-md"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(83, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['left'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(86, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['right'])),
						(l()(), qr(-1, null, [' medium</p>\n<'])),
						(l()(), At(89, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' class='])),
						(l()(), At(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"pad-a-md"'])),
						(l()(), qr(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Rf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 48, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Spinners are styled with a '])),
						(l()(), At(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['.spinner[-dotted]'])),
						(l()(), qr(-1, null, [' class.'])),
						(l()(), At(7, 0, null, null, 6, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						_r(8, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(9, { flexbox: 0, box: 1 }),
						(l()(), At(10, 0, null, null, 1, 'p', [['class', 'spinner']], null, null, null, ad, sd)),
						_r(11, 114688, null, 0, Fh, [], null, null),
						(l()(), At(12, 0, null, null, 1, 'p', [['class', 'spinner-dotted']], null, null, null, ad, sd)),
						_r(13, 114688, null, 0, Fh, [], null, null),
						(l()(), At(14, 0, null, null, 34, 'figure', [], null, null, null, null, null)),
						(l()(), At(15, 0, null, null, 33, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), At(16, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(18, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(21, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(24, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"spinner"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(27, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(29, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), qr(-1, null, ['\n'])),
						(l()(), At(33, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['<'])),
						(l()(), At(35, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, [' '])),
						(l()(), At(38, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['class'])),
						(l()(), qr(-1, null, ['='])),
						(l()(), At(41, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['"spinner-dotted"'])),
						(l()(), qr(-1, null, ['>'])),
						(l()(), At(44, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['</'])),
						(l()(), At(46, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), qr(-1, null, ['p'])),
						(l()(), qr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 9, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 8, 0, 'pad-a-sm', e), l(n, 11, 0), l(n, 13, 0);
					},
					null
				);
			}
			function Af(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Nf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Df(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Uf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Border'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Lf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Hover'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Vf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Striped'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ff(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Table Cell'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function zf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Table Row'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Hf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Bf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function qf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Font'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Gf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Text'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Zf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Qf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Wf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Hide'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Kf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Show'])),
						(l()(), At(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), qr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Yf(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 169, 'nav', [['class', 'pad-a-sm border-a-gray box-shadow-1 fixed-l styleguide-menu']], null, null, null, null, null)),
						(l()(), At(1, 0, null, null, 168, 'ul', [], null, null, null, null, null)),
						(l()(), At(2, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							3,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Alert') && e), e;
							},
							null,
							null
						)),
						_r(4, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(5, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Alert'])),
						(l()(), Rt(16777216, null, null, 1, null, cd)),
						_r(8, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(9, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							10,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Badge') && e), e;
							},
							null,
							null
						)),
						_r(11, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(12, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Badge'])),
						(l()(), Rt(16777216, null, null, 1, null, pd)),
						_r(15, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							17,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Button') && e), e;
							},
							null,
							null
						)),
						_r(18, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(19, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Button'])),
						(l()(), Rt(16777216, null, null, 1, null, hd)),
						_r(22, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(23, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							24,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Card') && e), e;
							},
							null,
							null
						)),
						_r(25, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(26, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Card'])),
						(l()(), Rt(16777216, null, null, 1, null, dd)),
						_r(29, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(30, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							31,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Collapse') && e), e;
							},
							null,
							null
						)),
						_r(32, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(33, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Collapse'])),
						(l()(), Rt(16777216, null, null, 1, null, fd)),
						_r(36, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(37, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							38,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Color') && e), e;
							},
							null,
							null
						)),
						_r(39, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(40, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Color'])),
						(l()(), Rt(16777216, null, null, 1, null, gd)),
						_r(43, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(44, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							45,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Flexbox') && e), e;
							},
							null,
							null
						)),
						_r(46, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(47, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Flexbox'])),
						(l()(), Rt(16777216, null, null, 1, null, md)),
						_r(50, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(51, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							52,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Form') && e), e;
							},
							null,
							null
						)),
						_r(53, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(54, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Form'])),
						(l()(), Rt(16777216, null, null, 1, null, bd)),
						_r(57, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(58, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							59,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Grid') && e), e;
							},
							null,
							null
						)),
						_r(60, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(61, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Grid'])),
						(l()(), Rt(16777216, null, null, 1, null, yd)),
						_r(64, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(65, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							66,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Layout') && e), e;
							},
							null,
							null
						)),
						_r(67, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(68, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Layout'])),
						(l()(), Rt(16777216, null, null, 1, null, vd)),
						_r(71, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(72, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							73,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Modal') && e), e;
							},
							null,
							null
						)),
						_r(74, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(75, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Modal'])),
						(l()(), Rt(16777216, null, null, 1, null, wd)),
						_r(78, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(79, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							80,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Nav') && e), e;
							},
							null,
							null
						)),
						_r(81, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(82, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Nav'])),
						(l()(), Rt(16777216, null, null, 1, null, jd)),
						_r(85, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(86, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							87,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Position') && e), e;
							},
							null,
							null
						)),
						_r(88, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(89, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Position'])),
						(l()(), Rt(16777216, null, null, 1, null, _d)),
						_r(92, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(93, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							94,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Slider') && e), e;
							},
							null,
							null
						)),
						_r(95, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(96, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Slider'])),
						(l()(), Rt(16777216, null, null, 1, null, xd)),
						_r(99, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(100, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							101,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Slideshow') && e), e;
							},
							null,
							null
						)),
						_r(102, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(103, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Slideshow'])),
						(l()(), Rt(16777216, null, null, 1, null, kd)),
						_r(106, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(107, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							108,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Space') && e), e;
							},
							null,
							null
						)),
						_r(109, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(110, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Space'])),
						(l()(), Rt(16777216, null, null, 1, null, Cd)),
						_r(113, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(114, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							115,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Spinner') && e), e;
							},
							null,
							null
						)),
						_r(116, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(117, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Spinner'])),
						(l()(), Rt(16777216, null, null, 1, null, Sd)),
						_r(120, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(121, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							122,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Switch') && e), e;
							},
							null,
							null
						)),
						_r(123, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(124, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Switch'])),
						(l()(), Rt(16777216, null, null, 1, null, Ed)),
						_r(127, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(128, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							129,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Tab') && e), e;
							},
							null,
							null
						)),
						_r(130, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(131, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Tab'])),
						(l()(), Rt(16777216, null, null, 1, null, Pd)),
						_r(134, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(135, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							136,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Table') && e), e;
							},
							null,
							null
						)),
						_r(137, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(138, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Table'])),
						(l()(), Rt(16777216, null, null, 1, null, Id)),
						_r(141, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(142, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							143,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Tooltip') && e), e;
							},
							null,
							null
						)),
						_r(144, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(145, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Tooltip'])),
						(l()(), Rt(16777216, null, null, 1, null, Od)),
						_r(148, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(149, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							150,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Typography') && e), e;
							},
							null,
							null
						)),
						_r(151, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(152, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Typography'])),
						(l()(), Rt(16777216, null, null, 1, null, Td)),
						_r(155, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(156, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							157,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Utilities') && e), e;
							},
							null,
							null
						)),
						_r(158, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(159, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Utilities'])),
						(l()(), Rt(16777216, null, null, 1, null, Md)),
						_r(162, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(163, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						At(
							164,
							0,
							null,
							null,
							3,
							'a',
							[['class', 'hover bg-hover-lt-gray pad-a-xs'], ['href', '#']],
							null,
							[[null, 'click']],
							function(l, n, u) {
								var e = !0;
								return 'click' === n && (e = !1 !== l.component.selectSection('Visibility') && e), e;
							},
							null,
							null
						)),
						_r(165, 278528, null, 0, ba, [Re, Ae, Cn, On], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Br(166, { 'bg-lt-gray': 0 }),
						(l()(), qr(-1, null, ['Visibility'])),
						(l()(), Rt(16777216, null, null, 1, null, Rd)),
						_r(169, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(170, 0, [['content', 1]], null, 139, 'main', [['class', 'pad-a-xl styleguide'], ['tabindex', '-1']], null, null, null, null, null)),
						(l()(), At(171, 0, null, null, 0, 'h1', [['class', 'pad-t-xl']], [[8, 'innerHTML', 1]], null, null, null, null)),
						(l()(), Rt(16777216, null, null, 1, null, Ad)),
						_r(173, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Nd)),
						_r(175, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Dd)),
						_r(177, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Ud)),
						_r(179, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Ld)),
						_r(181, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Vd)),
						_r(183, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Fd)),
						_r(185, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, zd)),
						_r(187, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Hd)),
						_r(189, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Bd)),
						_r(191, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, qd)),
						_r(193, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Gd)),
						_r(195, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Zd)),
						_r(197, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Qd)),
						_r(199, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Wd)),
						_r(201, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Kd)),
						_r(203, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Yd)),
						_r(205, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Jd)),
						_r(207, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, $d)),
						_r(209, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Xd)),
						_r(211, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, lf)),
						_r(213, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, nf)),
						_r(215, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, uf)),
						_r(217, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, ef)),
						_r(219, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, tf)),
						_r(221, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, rf)),
						_r(223, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, sf)),
						_r(225, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, af)),
						_r(227, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, of)),
						_r(229, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, cf)),
						_r(231, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, pf)),
						_r(233, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, hf)),
						_r(235, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, df)),
						_r(237, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, ff)),
						_r(239, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, gf)),
						_r(241, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, mf)),
						_r(243, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, bf)),
						_r(245, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, yf)),
						_r(247, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, vf)),
						_r(249, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, wf)),
						_r(251, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, jf)),
						_r(253, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, _f)),
						_r(255, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, xf)),
						_r(257, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, kf)),
						_r(259, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Cf)),
						_r(261, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Sf)),
						_r(263, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Ef)),
						_r(265, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Pf)),
						_r(267, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, If)),
						_r(269, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Of)),
						_r(271, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Tf)),
						_r(273, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Mf)),
						_r(275, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Rf)),
						_r(277, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Af)),
						_r(279, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Nf)),
						_r(281, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Df)),
						_r(283, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Uf)),
						_r(285, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Lf)),
						_r(287, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Vf)),
						_r(289, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Ff)),
						_r(291, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, zf)),
						_r(293, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Hf)),
						_r(295, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Bf)),
						_r(297, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, qf)),
						_r(299, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Gf)),
						_r(301, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Zf)),
						_r(303, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Qf)),
						_r(305, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Wf)),
						_r(307, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Rt(16777216, null, null, 1, null, Kf)),
						_r(309, 16384, null, 0, ya, [de, su], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 5, 0, u.checkSection('Alert'));
						l(n, 4, 0, 'hover bg-hover-lt-gray pad-a-xs', e), l(n, 8, 0, u.checkSection('Alert'));
						var t = l(n, 12, 0, u.checkSection('Badge'));
						l(n, 11, 0, 'hover bg-hover-lt-gray pad-a-xs', t), l(n, 15, 0, u.checkSection('Badge'));
						var r = l(n, 19, 0, u.checkSection('Button'));
						l(n, 18, 0, 'hover bg-hover-lt-gray pad-a-xs', r), l(n, 22, 0, u.checkSection('Button'));
						var s = l(n, 26, 0, u.checkSection('Card'));
						l(n, 25, 0, 'hover bg-hover-lt-gray pad-a-xs', s), l(n, 29, 0, u.checkSection('Card'));
						var a = l(n, 33, 0, u.checkSection('Collapse'));
						l(n, 32, 0, 'hover bg-hover-lt-gray pad-a-xs', a), l(n, 36, 0, u.checkSection('Collapse'));
						var o = l(n, 40, 0, u.checkSection('Color'));
						l(n, 39, 0, 'hover bg-hover-lt-gray pad-a-xs', o), l(n, 43, 0, u.checkSection('Color'));
						var i = l(n, 47, 0, u.checkSection('Flexbox'));
						l(n, 46, 0, 'hover bg-hover-lt-gray pad-a-xs', i), l(n, 50, 0, u.checkSection('Flexbox'));
						var c = l(n, 54, 0, u.checkSection('Form'));
						l(n, 53, 0, 'hover bg-hover-lt-gray pad-a-xs', c), l(n, 57, 0, u.checkSection('Form'));
						var p = l(n, 61, 0, u.checkSection('Grid'));
						l(n, 60, 0, 'hover bg-hover-lt-gray pad-a-xs', p), l(n, 64, 0, u.checkSection('Grid'));
						var h = l(n, 68, 0, u.checkSection('Layout'));
						l(n, 67, 0, 'hover bg-hover-lt-gray pad-a-xs', h), l(n, 71, 0, u.checkSection('Layout'));
						var d = l(n, 75, 0, u.checkSection('Modal'));
						l(n, 74, 0, 'hover bg-hover-lt-gray pad-a-xs', d), l(n, 78, 0, u.checkSection('Modal'));
						var f = l(n, 82, 0, u.checkSection('Nav'));
						l(n, 81, 0, 'hover bg-hover-lt-gray pad-a-xs', f), l(n, 85, 0, u.checkSection('Nav'));
						var g = l(n, 89, 0, u.checkSection('Position'));
						l(n, 88, 0, 'hover bg-hover-lt-gray pad-a-xs', g), l(n, 92, 0, u.checkSection('Position'));
						var m = l(n, 96, 0, u.checkSection('Slider'));
						l(n, 95, 0, 'hover bg-hover-lt-gray pad-a-xs', m), l(n, 99, 0, u.checkSection('Slider'));
						var b = l(n, 103, 0, u.checkSection('Slideshow'));
						l(n, 102, 0, 'hover bg-hover-lt-gray pad-a-xs', b), l(n, 106, 0, u.checkSection('Slideshow'));
						var y = l(n, 110, 0, u.checkSection('Space'));
						l(n, 109, 0, 'hover bg-hover-lt-gray pad-a-xs', y), l(n, 113, 0, u.checkSection('Space'));
						var v = l(n, 117, 0, u.checkSection('Spinner'));
						l(n, 116, 0, 'hover bg-hover-lt-gray pad-a-xs', v), l(n, 120, 0, u.checkSection('Spinner'));
						var w = l(n, 124, 0, u.checkSection('Switch'));
						l(n, 123, 0, 'hover bg-hover-lt-gray pad-a-xs', w), l(n, 127, 0, u.checkSection('Switch'));
						var j = l(n, 131, 0, u.checkSection('Tab'));
						l(n, 130, 0, 'hover bg-hover-lt-gray pad-a-xs', j), l(n, 134, 0, u.checkSection('Tab'));
						var _ = l(n, 138, 0, u.checkSection('Table'));
						l(n, 137, 0, 'hover bg-hover-lt-gray pad-a-xs', _), l(n, 141, 0, u.checkSection('Table'));
						var x = l(n, 145, 0, u.checkSection('Tooltip'));
						l(n, 144, 0, 'hover bg-hover-lt-gray pad-a-xs', x), l(n, 148, 0, u.checkSection('Tooltip'));
						var k = l(n, 152, 0, u.checkSection('Typography'));
						l(n, 151, 0, 'hover bg-hover-lt-gray pad-a-xs', k), l(n, 155, 0, u.checkSection('Typography'));
						var C = l(n, 159, 0, u.checkSection('Utilities'));
						l(n, 158, 0, 'hover bg-hover-lt-gray pad-a-xs', C), l(n, 162, 0, u.checkSection('Utilities'));
						var S = l(n, 166, 0, u.checkSection('Visibility'));
						l(n, 165, 0, 'hover bg-hover-lt-gray pad-a-xs', S),
							l(n, 169, 0, u.checkSection('Visibility')),
							l(n, 173, 0, u.checkSection('Alert')),
							l(n, 175, 0, u.checkSection('Alert')),
							l(n, 177, 0, u.checkSection('Badge')),
							l(n, 179, 0, u.checkSection('Badge')),
							l(n, 181, 0, u.checkSection('Button')),
							l(n, 183, 0, u.checkSection('Button')),
							l(n, 185, 0, u.checkSection('Button')),
							l(n, 187, 0, u.checkSection('Button')),
							l(n, 189, 0, u.checkSection('Card')),
							l(n, 191, 0, u.checkSection('Collapse')),
							l(n, 193, 0, u.checkSection('Collapse')),
							l(n, 195, 0, u.checkSection('Collapse')),
							l(n, 197, 0, u.checkSection('Color')),
							l(n, 199, 0, u.checkSection('Color')),
							l(n, 201, 0, u.checkSection('Color')),
							l(n, 203, 0, u.checkSection('Color')),
							l(n, 205, 0, u.checkSection('Color')),
							l(n, 207, 0, u.checkSection('Flexbox')),
							l(n, 209, 0, u.checkSection('Flexbox')),
							l(n, 211, 0, u.checkSection('Flexbox')),
							l(n, 213, 0, u.checkSection('Flexbox')),
							l(n, 215, 0, u.checkSection('Flexbox')),
							l(n, 217, 0, u.checkSection('Flexbox')),
							l(n, 219, 0, u.checkSection('Flexbox')),
							l(n, 221, 0, u.checkSection('Flexbox')),
							l(n, 223, 0, u.checkSection('Flexbox')),
							l(n, 225, 0, u.checkSection('Form')),
							l(n, 227, 0, u.checkSection('Form')),
							l(n, 229, 0, u.checkSection('Form')),
							l(n, 231, 0, u.checkSection('Form')),
							l(n, 233, 0, u.checkSection('Form')),
							l(n, 235, 0, u.checkSection('Form')),
							l(n, 237, 0, u.checkSection('Form')),
							l(n, 239, 0, u.checkSection('Form')),
							l(n, 241, 0, u.checkSection('Grid')),
							l(n, 243, 0, u.checkSection('Grid')),
							l(n, 245, 0, u.checkSection('Grid')),
							l(n, 247, 0, u.checkSection('Grid')),
							l(n, 249, 0, u.checkSection('Layout')),
							l(n, 251, 0, u.checkSection('Layout')),
							l(n, 253, 0, u.checkSection('Layout')),
							l(n, 255, 0, u.checkSection('Modal')),
							l(n, 257, 0, u.checkSection('Nav')),
							l(n, 259, 0, u.checkSection('Nav')),
							l(n, 261, 0, u.checkSection('Nav')),
							l(n, 263, 0, u.checkSection('Nav')),
							l(n, 265, 0, u.checkSection('Position')),
							l(n, 267, 0, u.checkSection('Slider')),
							l(n, 269, 0, u.checkSection('Slideshow')),
							l(n, 271, 0, u.checkSection('Space')),
							l(n, 273, 0, u.checkSection('Space')),
							l(n, 275, 0, u.checkSection('Space')),
							l(n, 277, 0, u.checkSection('Spinner')),
							l(n, 279, 0, u.checkSection('Switch')),
							l(n, 281, 0, u.checkSection('Tab')),
							l(n, 283, 0, u.checkSection('Table')),
							l(n, 285, 0, u.checkSection('Table')),
							l(n, 287, 0, u.checkSection('Table')),
							l(n, 289, 0, u.checkSection('Table')),
							l(n, 291, 0, u.checkSection('Table')),
							l(n, 293, 0, u.checkSection('Table')),
							l(n, 295, 0, u.checkSection('Tooltip')),
							l(n, 297, 0, u.checkSection('Typography')),
							l(n, 299, 0, u.checkSection('Typography')),
							l(n, 301, 0, u.checkSection('Typography')),
							l(n, 303, 0, u.checkSection('Utilities')),
							l(n, 305, 0, u.checkSection('Visibility')),
							l(n, 307, 0, u.checkSection('Visibility')),
							l(n, 309, 0, u.checkSection('Visibility'));
					},
					function(l, n) {
						l(n, 171, 0, n.component.section);
					}
				);
			}
			function Jf(l) {
				return Qr(
					0,
					[(l()(), At(0, 0, null, null, 1, 'ng-component', [], null, null, null, Yf, id)), _r(1, 114688, null, 0, od, [], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			var $f = $t('ng-component', od, Jf, {}, {}, []),
				Xf = st({ encapsulation: 0, styles: [['']], data: {} });
			function lg(l) {
				return Qr(
					0,
					[
						(l()(), At(0, 0, null, null, 3, 'ez-root', [], null, null, null, Yh, Kh)),
						_r(1, 114688, null, 0, Zh, [Cn], null, null),
						(l()(), At(2, 16777216, null, 0, 1, 'router-outlet', [], null, null, null, null, null)),
						_r(3, 212992, null, 0, $p, [Jp, de, wn, [8, null], ge], null, null)
					],
					function(l, n) {
						l(n, 1, 0), l(n, 3, 0);
					},
					null
				);
			}
			function ng(l) {
				return Qr(0, [(l()(), At(0, 0, null, null, 1, 'docs-root', [], null, null, null, lg, Xf)), _r(1, 49152, null, 0, na, [], null, null)], null, null);
			}
			var ug = $t('docs-root', na, ng, {}, {}, []),
				eg = (function() {
					return function() {};
				})(),
				tg = (function() {
					return function() {};
				})(),
				rg = $s(la, [na], function(l) {
					return (function(l) {
						for (var n = {}, u = [], e = !1, t = 0; t < l.length; t++) {
							var r = l[t];
							r.token === fn && !0 === r.value && (e = !0), 1073741824 & r.flags && u.push(r.token), (r.index = t), (n[et(r.token)] = r);
						}
						return { factory: null, providersByKey: n, providers: l, modules: u, isRoot: e };
					})([
						Bt(512, wn, jn, [[8, [xh, $f, ug]], [3, wn], xn]),
						Bt(5120, Ve, He, [[3, Ve]]),
						Bt(4608, ga, ma, [Ve, [2, fa]]),
						Bt(5120, _u, xu, []),
						Bt(5120, Re, Fe, []),
						Bt(5120, Ae, ze, []),
						Bt(4608, wi, ji, [_a]),
						Bt(6144, Rn, null, [wi]),
						Bt(4608, di, gi, []),
						Bt(
							5120,
							Fo,
							function(l, n, u, e, t, r, s, a) {
								return [new pi(l, n, u), new vi(e), new mi(t, r, s, a)];
							},
							[_a, Bu, Su, _a, _a, di, Pu, [2, fi]]
						),
						Bt(4608, zo, zo, [Fo, Bu]),
						Bt(135680, qo, qo, [_a]),
						Bt(4608, Jo, Jo, [zo, qo, _u]),
						Bt(6144, Pn, null, [Jo]),
						Bt(6144, Bo, null, [qo]),
						Bt(4608, Ju, Ju, [Bu]),
						Bt(5120, Vc, gh, [Kp]),
						Bt(4608, uh, uh, []),
						Bt(6144, lh, null, [uh]),
						Bt(135680, eh, eh, [Kp, cu, Du, Xl, lh]),
						Bt(4608, nh, nh, []),
						Bt(5120, th, ch, [Kp, ka, rh]),
						Bt(5120, vh, yh, [mh]),
						Bt(
							5120,
							Eu,
							function(l) {
								return [l];
							},
							[vh]
						),
						Bt(1073742336, ja, ja, []),
						Bt(1024, bu, Ii, []),
						Bt(
							1024,
							ne,
							function() {
								return [oh()];
							},
							[]
						),
						Bt(512, mh, mh, [Xl]),
						Bt(
							1024,
							wu,
							function(l, n) {
								return [
									((u = l),
									Uo('probe', Vo),
									Uo(
										'coreTokens',
										r(
											{},
											Lo,
											(u || []).reduce(function(l, n) {
												return (l[n.name] = n.token), l;
											}, {})
										)
									),
									function() {
										return Vo;
									}),
									bh(n)
								];
								var u;
							},
							[[2, ne], mh]
						),
						Bt(512, ju, ju, [[2, wu]]),
						Bt(131584, se, se, [Bu, Pu, Xl, bu, wn, ju]),
						Bt(1073742336, Be, Be, [se]),
						Bt(1073742336, Oi, Oi, [[3, Oi]]),
						Bt(1073742336, Qh, Qh, []),
						Bt(1024, sh, hh, [[3, Kp]]),
						Bt(512, bc, yc, []),
						Bt(512, Jp, Jp, []),
						Bt(256, rh, { useHash: !0, anchorScrolling: 'enabled' }, []),
						Bt(1024, ta, ph, [ua, [2, ra], rh]),
						Bt(512, sa, sa, [ta]),
						Bt(512, Du, Du, []),
						Bt(512, cu, pe, [Du, [2, ie]]),
						Bt(
							1024,
							Hp,
							function() {
								return [
									[{ path: 'components', component: od }, { path: '', redirectTo: '/components', pathMatch: 'full' }, { path: '**', redirectTo: '/components', pathMatch: 'full' }]
								];
							},
							[]
						),
						Bt(1024, Kp, fh, [se, bc, Jp, sa, Xl, cu, Du, Hp, rh, [2, qp], [2, Fp]]),
						Bt(1073742336, ih, ih, [[2, sh], [2, Kp]]),
						Bt(1073742336, eg, eg, []),
						Bt(1073742336, Ch, Ch, []),
						Bt(1073742336, Sh, Sh, []),
						Bt(1073742336, Ph, Ph, []),
						Bt(1073742336, Oh, Oh, []),
						Bt(1073742336, Th, Th, []),
						Bt(1073742336, Mh, Mh, []),
						Bt(1073742336, Ah, Ah, []),
						Bt(1073742336, Nh, Nh, []),
						Bt(1073742336, Dh, Dh, []),
						Bt(1073742336, Uh, Uh, []),
						Bt(1073742336, Lh, Lh, []),
						Bt(1073742336, Vh, Vh, []),
						Bt(1073742336, zh, zh, []),
						Bt(1073742336, Hh, Hh, []),
						Bt(1073742336, Bh, Bh, []),
						Bt(1073742336, qh, qh, []),
						Bt(1073742336, Gh, Gh, []),
						Bt(1073742336, Wh, Wh, []),
						Bt(1073742336, tg, tg, []),
						Bt(1073742336, la, la, []),
						Bt(256, fn, !0, [])
					]);
				});
			(function() {
				if (Dn) throw new Error('Cannot enable prod mode after platform setup.');
				Nn = !1;
			})(),
				Pi()
					.bootstrapModuleFactory(rg)
					.catch(function(l) {
						return console.log(l);
					});
		}
	},
	[[0, 0]]
]);
//# sourceMappingURL=main.c4adcff4d01cd33fc627.js.map
