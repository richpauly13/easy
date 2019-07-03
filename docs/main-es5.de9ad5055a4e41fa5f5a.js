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
							if (!n) return l.EMPTY;
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
						(l.EMPTY = (function(l) {
							return (l.closed = !0), l;
						})(new l())),
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
				F = function(l) {
					return function(n) {
						for (var u = 0, e = l.length; u < e && !n.closed; u++) n.next(l[u]);
						n.complete();
					};
				};
			function V() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			}
			var z = V(),
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
				if (H(l)) return F(l);
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
				return n ? Y(l, n) : new I(F(l));
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
			var pl = '__parameters__';
			function hl(l, n, u) {
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
						for (var e = l.hasOwnProperty(pl) ? l[pl] : Object.defineProperty(l, pl, { value: [] })[pl]; e.length <= u; ) e.push(null);
						return (e[u] = e[u] || []).push(r), l;
					}
				}
				return u && (t.prototype = Object.create(u.prototype)), (t.prototype.ngMetadataName = l), (t.annotationCls = t), t;
			}
			var dl = hl('Inject', function(l) {
					return { token: l };
				}),
				fl = hl('Optional'),
				gl = hl('Self'),
				ml = hl('SkipSelf'),
				bl = (function(l) {
					return (l[(l.Default = 0)] = 'Default'), (l[(l.Host = 1)] = 'Host'), (l[(l.Self = 2)] = 'Self'), (l[(l.SkipSelf = 4)] = 'SkipSelf'), (l[(l.Optional = 8)] = 'Optional'), l;
				})({});
			function yl(l) {
				for (var n in l) if (l[n] === yl) return n;
				throw Error('Could not find renamed property on target object.');
			}
			function vl(l) {
				return { token: l.token, providedIn: l.providedIn || null, factory: l.factory, value: void 0 };
			}
			function wl(l) {
				var n = l[jl];
				return n && n.token === l ? n : null;
			}
			var jl = yl({ ngInjectableDef: yl });
			function _l(l) {
				if ('string' == typeof l) return l;
				if (l instanceof Array) return '[' + l.map(_l).join(', ') + ']';
				if (null == l) return '' + l;
				if (l.overriddenName) return '' + l.overriddenName;
				if (l.name) return '' + l.name;
				var n = l.toString();
				if (null == n) return '' + n;
				var u = n.indexOf('\n');
				return -1 === u ? n : n.substring(0, u);
			}
			var xl = yl({ __forward_ref__: yl });
			function kl(l) {
				return (
					(l.__forward_ref__ = kl),
					(l.toString = function() {
						return _l(this());
					}),
					l
				);
			}
			function Cl(l) {
				var n = l;
				return 'function' == typeof n && n.hasOwnProperty(xl) && n.__forward_ref__ === kl ? n() : l;
			}
			var Sl,
				El = 'undefined' != typeof globalThis && globalThis,
				Pl = 'undefined' != typeof window && window,
				Il = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
				Ol = 'undefined' != typeof global && global,
				Tl = El || Ol || Pl || Il,
				Ml = (function() {
					function l(l, n) {
						(this._desc = l),
							(this.ngMetadataName = 'InjectionToken'),
							(this.ngInjectableDef = void 0),
							'number' == typeof n ? (this.__NG_ELEMENT_ID__ = n) : void 0 !== n && (this.ngInjectableDef = vl({ token: this, providedIn: n.providedIn || 'root', factory: n.factory }));
					}
					return (
						(l.prototype.toString = function() {
							return 'InjectionToken ' + this._desc;
						}),
						l
					);
				})(),
				Rl = new Ml('INJECTOR', -1),
				Al = new Object(),
				Nl = /\n/gm,
				Dl = '\u0275',
				Ul = '__source',
				Ll = yl({ provide: String, useValue: yl }),
				Fl = void 0;
			function Vl(l) {
				var n = Fl;
				return (Fl = l), n;
			}
			function zl(l, n) {
				return (
					void 0 === n && (n = bl.Default),
					(Sl ||
						function(l, n) {
							if ((void 0 === n && (n = bl.Default), void 0 === Fl)) throw new Error('inject() must be called from an injection context');
							return null === Fl
								? (function(l, n, u) {
										var e = wl(l);
										if (e && 'root' == e.providedIn) return void 0 === e.value ? (e.value = e.factory()) : e.value;
										if (u & bl.Optional) return null;
										throw new Error('Injector: NOT_FOUND [' + _l(l) + ']');
								  })(l, 0, n)
								: Fl.get(l, n & bl.Optional ? null : void 0, n);
						})(l, n)
				);
			}
			var Hl = (function() {
				function l() {}
				return (
					(l.prototype.get = function(l, n) {
						if ((void 0 === n && (n = Al), n === Al)) {
							var u = new Error('NullInjectorError: No provider for ' + _l(l) + '!');
							throw ((u.name = 'NullInjectorError'), u);
						}
						return n;
					}),
					l
				);
			})();
			function Bl(l, n, u, e) {
				void 0 === e && (e = null), (l = l && '\n' === l.charAt(0) && l.charAt(1) == Dl ? l.substr(2) : l);
				var t = _l(n);
				if (n instanceof Array) t = n.map(_l).join(' -> ');
				else if ('object' == typeof n) {
					var r = [];
					for (var s in n)
						if (n.hasOwnProperty(s)) {
							var a = n[s];
							r.push(s + ':' + ('string' == typeof a ? JSON.stringify(a) : _l(a)));
						}
					t = '{' + r.join(', ') + '}';
				}
				return u + (e ? '(' + e + ')' : '') + '[' + t + ']: ' + l.replace(Nl, '\n  ');
			}
			var ql = new Ml('The presence of this token marks an injector as being the root injector.'),
				Gl = function(l, n, u) {
					return new Jl(l, n, u);
				},
				Zl = (function() {
					function l() {}
					return (
						(l.create = function(l, n) {
							return Array.isArray(l) ? Gl(l, n, '') : Gl(l.providers, l.parent, l.name || '');
						}),
						(l.THROW_IF_NOT_FOUND = Al),
						(l.NULL = new Hl()),
						(l.ngInjectableDef = vl({
							token: l,
							providedIn: 'any',
							factory: function() {
								return zl(Rl);
							}
						})),
						(l.__NG_ELEMENT_ID__ = -1),
						l
					);
				})(),
				Ql = function(l) {
					return l;
				},
				Wl = [],
				Kl = Ql,
				Yl = function() {
					return Array.prototype.slice.call(arguments);
				},
				Jl = (function() {
					function l(l, n, u) {
						void 0 === n && (n = Zl.NULL), void 0 === u && (u = null), (this.parent = n), (this.source = u);
						var e = (this._records = new Map());
						e.set(Zl, { token: Zl, fn: Ql, deps: Wl, value: this, useNew: !1 }),
							e.set(Rl, { token: Rl, fn: Ql, deps: Wl, value: this, useNew: !1 }),
							(function l(n, u) {
								if (u)
									if ((u = Cl(u)) instanceof Array) for (var e = 0; e < u.length; e++) l(n, u[e]);
									else {
										if ('function' == typeof u) throw Xl('Function/Class not supported', u);
										if (!u || 'object' != typeof u || !u.provide) throw Xl('Unexpected provider', u);
										var t = Cl(u.provide),
											r = (function(l) {
												var n = (function(l) {
														var n = Wl,
															u = l.deps;
														if (u && u.length) {
															n = [];
															for (var e = 0; e < u.length; e++) {
																var t = 6;
																if ((o = Cl(u[e])) instanceof Array)
																	for (var r = 0, s = o; r < s.length; r++) {
																		var a = s[r];
																		a instanceof fl || a == fl
																			? (t |= 1)
																			: a instanceof ml || a == ml
																			? (t &= -3)
																			: a instanceof gl || a == gl
																			? (t &= -5)
																			: (o = a instanceof dl ? a.token : Cl(a));
																	}
																n.push({ token: o, options: t });
															}
														} else if (l.useExisting) {
															var o;
															n = [{ token: (o = Cl(l.useExisting)), options: 6 }];
														} else if (!(u || Ll in l)) throw Xl("'deps' required", l);
														return n;
													})(l),
													u = Ql,
													e = Wl,
													t = !1,
													r = Cl(l.provide);
												if (Ll in l) e = l.useValue;
												else if (l.useFactory) u = l.useFactory;
												else if (l.useExisting);
												else if (l.useClass) (t = !0), (u = Cl(l.useClass));
												else {
													if ('function' != typeof r) throw Xl('StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable', l);
													(t = !0), (u = r);
												}
												return { deps: n, fn: u, useNew: t, value: e };
											})(u);
										if (!0 === u.multi) {
											var s = n.get(t);
											if (s) {
												if (s.fn !== Yl) throw $l(t);
											} else n.set(t, (s = { token: u.provide, deps: [], useNew: !1, fn: Yl, value: Wl }));
											s.deps.push({ token: (t = u), options: 6 });
										}
										var a = n.get(t);
										if (a && a.fn == Yl) throw $l(t);
										n.set(t, r);
									}
							})(e, l);
					}
					return (
						(l.prototype.get = function(l, n, u) {
							void 0 === u && (u = bl.Default);
							var e = this._records.get(l);
							try {
								return (function l(n, u, e, t, r, s) {
									try {
										return (function(n, u, e, t, r, s) {
											var a, o;
											if (!u || s & bl.SkipSelf) s & bl.Self || (o = t.get(n, r, bl.Default));
											else {
												if ((o = u.value) == Kl) throw Error('\u0275Circular dependency');
												if (o === Wl) {
													u.value = Kl;
													var i = u.useNew,
														p = u.fn,
														h = u.deps,
														d = Wl;
													if (h.length) {
														d = [];
														for (var f = 0; f < h.length; f++) {
															var g = h[f],
																m = g.options,
																b = 2 & m ? e.get(g.token) : void 0;
															d.push(l(g.token, b, e, b || 4 & m ? t : Zl.NULL, 1 & m ? null : Zl.THROW_IF_NOT_FOUND, bl.Default));
														}
													}
													u.value = o = i ? new ((a = p).bind.apply(a, c([void 0], d)))() : p.apply(void 0, d);
												}
											}
											return o;
										})(n, u, e, t, r, s);
									} catch (a) {
										throw (a instanceof Error || (a = new Error(a)), (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(n), u && u.value == Kl && (u.value = Wl), a);
									}
								})(l, e, this._records, this.parent, n, u);
							} catch (t) {
								return (function(l, n, u, e) {
									var t = l.ngTempTokenPath;
									throw (n[Ul] && t.unshift(n[Ul]), (l.message = Bl('\n' + l.message, t, 'StaticInjectorError', e)), (l.ngTokenPath = t), (l.ngTempTokenPath = null), l);
								})(t, l, 0, this.source);
							}
						}),
						(l.prototype.toString = function() {
							var l = [];
							return (
								this._records.forEach(function(n, u) {
									return l.push(_l(u));
								}),
								'StaticInjector[' + l.join(', ') + ']'
							);
						}),
						l
					);
				})();
			function $l(l) {
				return Xl('Cannot mix multi providers and regular providers', l);
			}
			function Xl(l, n) {
				return new Error(Bl(l, n, 'StaticInjectorError'));
			}
			var ln = 'ngDebugContext',
				nn = 'ngOriginalError',
				un = 'ngErrorLogger',
				en = new Ml('AnalyzeForEntryComponents'),
				tn = (function(l) {
					return (l[(l.Emulated = 0)] = 'Emulated'), (l[(l.Native = 1)] = 'Native'), (l[(l.None = 2)] = 'None'), (l[(l.ShadowDom = 3)] = 'ShadowDom'), l;
				})({}),
				rn = (function() {
					return (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(Tl);
				})(),
				sn = !0,
				an = !1;
			function on() {
				return (an = !0), sn;
			}
			var cn = (function() {
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
				pn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				hn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function dn(l) {
				return (l = String(l)).match(pn) || l.match(hn) ? l : (on() && console.warn('WARNING: sanitizing unsafe URL value ' + l + ' (see http://g.co/ng/security#xss)'), 'unsafe:' + l);
			}
			function fn(l) {
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
			function gn() {
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
			var mn,
				bn = fn('area,br,col,hr,img,wbr'),
				yn = fn('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				vn = fn('rp,rt'),
				wn = gn(vn, yn),
				jn = gn(
					bn,
					gn(
						yn,
						fn(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					gn(
						vn,
						fn(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					wn
				),
				_n = fn('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				xn = fn('srcset'),
				kn = gn(
					_n,
					xn,
					fn(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					),
					fn(
						'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
					)
				),
				Cn = fn('script,style,template'),
				Sn = (function() {
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
							if (!jn.hasOwnProperty(u)) return (this.sanitizedSomething = !0), !Cn.hasOwnProperty(u);
							this.buf.push('<'), this.buf.push(u);
							for (var e = l.attributes, t = 0; t < e.length; t++) {
								var r = e.item(t),
									s = r.name,
									a = s.toLowerCase();
								if (kn.hasOwnProperty(a)) {
									var o = r.value;
									_n[a] && (o = dn(o)),
										xn[a] &&
											((n = o),
											(o = (n = String(n))
												.split(',')
												.map(function(l) {
													return dn(l.trim());
												})
												.join(', '))),
										this.buf.push(' ', s, '="', In(o), '"');
								} else this.sanitizedSomething = !0;
							}
							return this.buf.push('>'), !0;
						}),
						(l.prototype.endElement = function(l) {
							var n = l.nodeName.toLowerCase();
							jn.hasOwnProperty(n) && !bn.hasOwnProperty(n) && (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
						}),
						(l.prototype.chars = function(l) {
							this.buf.push(In(l));
						}),
						(l.prototype.checkClobberedElement = function(l, n) {
							if (n && (l.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
								throw new Error('Failed to sanitize html because the element is clobbered: ' + l.outerHTML);
							return n;
						}),
						l
					);
				})(),
				En = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				Pn = /([^\#-~ |!])/g;
			function In(l) {
				return l
					.replace(/&/g, '&amp;')
					.replace(En, function(l) {
						return '&#' + (1024 * (l.charCodeAt(0) - 55296) + (l.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(Pn, function(l) {
						return '&#' + l.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			function On(l) {
				return 'content' in l &&
					(function(l) {
						return l.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === l.nodeName;
					})(l)
					? l.content
					: null;
			}
			var Tn = (function(l) {
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
				Mn = (function() {
					return function() {};
				})(),
				Rn = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				An = /^url\(([^)]+)\)$/;
			function Nn(l) {
				return l[ln];
			}
			function Dn(l) {
				return l[nn];
			}
			function Un(l) {
				for (var n = [], u = 1; u < arguments.length; u++) n[u - 1] = arguments[u];
				l.error.apply(l, c(n));
			}
			var Ln = (function() {
					function l() {
						this._console = console;
					}
					return (
						(l.prototype.handleError = function(l) {
							var n = this._findOriginalError(l),
								u = this._findContext(l),
								e = (function(l) {
									return l[un] || Un;
								})(l);
							e(this._console, 'ERROR', l), n && e(this._console, 'ORIGINAL ERROR', n), u && e(this._console, 'ERROR CONTEXT', u);
						}),
						(l.prototype._findContext = function(l) {
							return l ? (Nn(l) ? Nn(l) : this._findContext(Dn(l))) : null;
						}),
						(l.prototype._findOriginalError = function(l) {
							for (var n = Dn(l); n && Dn(n); ) n = Dn(n);
							return n;
						}),
						l
					);
				})(),
				Fn = /([A-Z])/g;
			function Vn(l) {
				try {
					return null != l ? l.toString().slice(0, 30) : l;
				} catch (n) {
					return '[ERROR] Exception while trying to serialize the value';
				}
			}
			var zn = null;
			function Hn() {
				if (!zn) {
					var l = Tl.Symbol;
					if (l && l.iterator) zn = l.iterator;
					else
						for (var n = Object.getOwnPropertyNames(Map.prototype), u = 0; u < n.length; ++u) {
							var e = n[u];
							'entries' !== e && 'size' !== e && Map.prototype[e] === Map.prototype.entries && (zn = e);
						}
				}
				return zn;
			}
			function Bn(l, n) {
				return l === n || ('number' == typeof l && 'number' == typeof n && isNaN(l) && isNaN(n));
			}
			function qn(l, n) {
				var u = Zn(l),
					e = Zn(n);
				return u && e
					? (function(l, n, u) {
							for (var e = l[Hn()](), t = n[Hn()](); ; ) {
								var r = e.next(),
									s = t.next();
								if (r.done && s.done) return !0;
								if (r.done || s.done) return !1;
								if (!u(r.value, s.value)) return !1;
							}
					  })(l, n, qn)
					: !(u || !l || ('object' != typeof l && 'function' != typeof l) || e || !n || ('object' != typeof n && 'function' != typeof n)) || Bn(l, n);
			}
			var Gn = (function() {
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
			})();
			function Zn(l) {
				return !!Qn(l) && (Array.isArray(l) || (!(l instanceof Map) && Hn() in l));
			}
			function Qn(l) {
				return null !== l && ('function' == typeof l || 'object' == typeof l);
			}
			function Wn(l) {
				return !!l && 'function' == typeof l.then;
			}
			function Kn(l) {
				return !!l && 'function' == typeof l.subscribe;
			}
			var Yn = (function() {
					function l(l, n, u) {
						(this.previousValue = l), (this.currentValue = n), (this.firstChange = u);
					}
					return (
						(l.prototype.isFirstChange = function() {
							return this.firstChange;
						}),
						l
					);
				})(),
				Jn = (function() {
					return function() {};
				})(),
				$n = (function() {
					return function() {};
				})();
			function Xn(l) {
				var n = Error('No component factory found for ' + _l(l) + '. Did you add it to @NgModule.entryComponents?');
				return (n[lu] = l), n;
			}
			var lu = 'ngComponent',
				nu = (function() {
					function l() {}
					return (
						(l.prototype.resolveComponentFactory = function(l) {
							throw Xn(l);
						}),
						l
					);
				})(),
				uu = (function() {
					function l() {}
					return (l.NULL = new nu()), l;
				})(),
				eu = (function() {
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
							if ((!n && this._parent && (n = this._parent.resolveComponentFactory(l)), !n)) throw Xn(l);
							return new tu(n, this._ngModule);
						}),
						l
					);
				})(),
				tu = (function(l) {
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
				})($n),
				ru = (function() {
					return function() {};
				})(),
				su = (function() {
					return function() {};
				})();
			function au() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
			}
			var ou = (function() {
					function l(l) {
						this.nativeElement = l;
					}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return iu(l);
						}),
						l
					);
				})(),
				iu = au,
				cu = (function() {
					return function() {};
				})(),
				pu = (function() {
					return function() {};
				})(),
				hu = (function(l) {
					return (l[(l.Important = 1)] = 'Important'), (l[(l.DashCase = 2)] = 'DashCase'), l;
				})({}),
				du = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return fu();
						}),
						l
					);
				})(),
				fu = au,
				gu = new ((function() {
					return function(l) {
						(this.full = l),
							(this.major = l.split('.')[0]),
							(this.minor = l.split('.')[1]),
							(this.patch = l
								.split('.')
								.slice(2)
								.join('.'));
					};
				})())('8.1.0'),
				mu = (function() {
					function l() {}
					return (
						(l.prototype.supports = function(l) {
							return Zn(l);
						}),
						(l.prototype.create = function(l) {
							return new yu(l);
						}),
						l
					);
				})(),
				bu = function(l, n) {
					return n;
				},
				yu = (function() {
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
							(this._trackByFn = l || bu);
					}
					return (
						(l.prototype.forEachItem = function(l) {
							var n;
							for (n = this._itHead; null !== n; n = n._next) l(n);
						}),
						(l.prototype.forEachOperation = function(l) {
							for (var n = this._itHead, u = this._removalsHead, e = 0, t = null; n || u; ) {
								var r = !u || (n && n.currentIndex < _u(u, e, t)) ? n : u,
									s = _u(r, e, t),
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
							if ((null == l && (l = []), !Zn(l))) throw new Error("Error trying to diff '" + _l(l) + "'. Only arrays and iterables are allowed");
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
										null !== r && Bn(r.trackById, t)
											? (s && (r = this._verifyReinsertion(r, e, t, a)), Bn(r.item, e) || this._addIdentityChange(r, e))
											: ((r = this._mismatch(r, e, t, a)), (s = !0)),
										(r = r._next);
							} else
								(u = 0),
									(function(l, n) {
										if (Array.isArray(l)) for (var u = 0; u < l.length; u++) n(l[u]);
										else for (var e = l[Hn()](), t = void 0; !(t = e.next()).done; ) n(t.value);
									})(l, function(l) {
										(t = n._trackByFn(u, l)),
											null !== r && Bn(r.trackById, t)
												? (s && (r = n._verifyReinsertion(r, l, t, u)), Bn(r.item, l) || n._addIdentityChange(r, l))
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
									? (Bn(l.item, n) || this._addIdentityChange(l, n), this._moveAfter(l, t, e))
									: null !== (l = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(u, null))
									? (Bn(l.item, n) || this._addIdentityChange(l, n), this._reinsertAfter(l, t, e))
									: (l = this._addAfter(new vu(n, u), t, e)),
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
								null === this._linkedRecords && (this._linkedRecords = new ju()),
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
								null === this._unlinkedRecords && (this._unlinkedRecords = new ju()),
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
				vu = (function() {
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
				wu = (function() {
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
							for (u = this._head; null !== u; u = u._nextDup) if ((null === n || n <= u.currentIndex) && Bn(u.trackById, l)) return u;
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
				ju = (function() {
					function l() {
						this.map = new Map();
					}
					return (
						(l.prototype.put = function(l) {
							var n = l.trackById,
								u = this.map.get(n);
							u || ((u = new wu()), this.map.set(n, u)), u.add(l);
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
			function _u(l, n, u) {
				var e = l.previousIndex;
				if (null === e) return e;
				var t = 0;
				return u && e < u.length && (t = u[e]), e + n + t;
			}
			var xu = (function() {
					function l() {}
					return (
						(l.prototype.supports = function(l) {
							return l instanceof Map || Qn(l);
						}),
						(l.prototype.create = function() {
							return new ku();
						}),
						l
					);
				})(),
				ku = (function() {
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
								if (!(l instanceof Map || Qn(l))) throw new Error("Error trying to diff '" + _l(l) + "'. Only maps and objects are allowed");
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
							var r = new Cu(l);
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
							Bn(n, l.currentValue) || ((l.previousValue = l.currentValue), (l.currentValue = n), this._addToChanges(l));
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
				Cu = (function() {
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
				Su = (function() {
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
								deps: [[l, new ml(), new fl()]]
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
						(l.ngInjectableDef = vl({
							token: l,
							providedIn: 'root',
							factory: function() {
								return new l([new mu()]);
							}
						})),
						l
					);
				})(),
				Eu = (function() {
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
								deps: [[l, new ml(), new fl()]]
							};
						}),
						(l.prototype.find = function(l) {
							var n = this.factories.find(function(n) {
								return n.supports(l);
							});
							if (n) return n;
							throw new Error("Cannot find a differ supporting object '" + l + "'");
						}),
						(l.ngInjectableDef = vl({
							token: l,
							providedIn: 'root',
							factory: function() {
								return new l([new xu()]);
							}
						})),
						l
					);
				})(),
				Pu = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Iu();
						}),
						l
					);
				})(),
				Iu = function() {
					for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				},
				Ou = [new xu()],
				Tu = new Su([new mu()]),
				Mu = new Eu(Ou),
				Ru = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Au(l, ou);
						}),
						l
					);
				})(),
				Au = au,
				Nu = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Du(l, ou);
						}),
						l
					);
				})(),
				Du = au;
			function Uu(l, n, u, e) {
				var t = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + n + "'. Current value: '" + u + "'.";
				return (
					e && (t += ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
					(function(l, n) {
						var u = new Error(l);
						return Lu(u, n), u;
					})(t, l)
				);
			}
			function Lu(l, n) {
				(l[ln] = n), (l[un] = n.logError.bind(n));
			}
			function Fu(l) {
				return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + l);
			}
			function Vu(l, n, u) {
				var e = l.state,
					t = 1792 & e;
				return t === n ? ((l.state = (-1793 & e) | u), (l.initIndex = -1), !0) : t === u;
			}
			function zu(l, n, u) {
				return (1792 & l.state) === n && l.initIndex <= u && ((l.initIndex = u + 1), !0);
			}
			function Hu(l, n) {
				return l.nodes[n];
			}
			function Bu(l, n) {
				return l.nodes[n];
			}
			function qu(l, n) {
				return l.nodes[n];
			}
			function Gu(l, n) {
				return l.nodes[n];
			}
			function Zu(l, n) {
				return l.nodes[n];
			}
			var Qu = {
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
				},
				Wu = function() {},
				Ku = new Map();
			function Yu(l) {
				var n = Ku.get(l);
				return n || ((n = _l(l) + '_' + Ku.size), Ku.set(l, n)), n;
			}
			var Ju = '$$undefined',
				$u = '$$empty';
			function Xu(l) {
				return { id: Ju, styles: l.styles, encapsulation: l.encapsulation, data: l.data };
			}
			var le = 0;
			function ne(l, n, u, e) {
				return !(!(2 & l.state) && Bn(l.oldValues[n.bindingIndex + u], e));
			}
			function ue(l, n, u, e) {
				return !!ne(l, n, u, e) && ((l.oldValues[n.bindingIndex + u] = e), !0);
			}
			function ee(l, n, u, e) {
				var t = l.oldValues[n.bindingIndex + u];
				if (1 & l.state || !qn(t, e)) {
					var r = n.bindings[u].name;
					throw Uu(Qu.createDebugContext(l, n.nodeIndex), r + ': ' + t, r + ': ' + e, 0 != (1 & l.state));
				}
			}
			function te(l) {
				for (var n = l; n; ) 2 & n.def.flags && (n.state |= 8), (n = n.viewContainerParent || n.parent);
			}
			function re(l, n) {
				for (var u = l; u && u !== n; ) (u.state |= 64), (u = u.viewContainerParent || u.parent);
			}
			function se(l, n, u, e) {
				try {
					return te(33554432 & l.def.nodes[n].flags ? Bu(l, n).componentView : l), Qu.handleEvent(l, n, u, e);
				} catch (t) {
					l.root.errorHandler.handleError(t);
				}
			}
			function ae(l) {
				return l.parent ? Bu(l.parent, l.parentNodeDef.nodeIndex) : null;
			}
			function oe(l) {
				return l.parent ? l.parentNodeDef.parent : null;
			}
			function ie(l, n) {
				switch (201347067 & n.flags) {
					case 1:
						return Bu(l, n.nodeIndex).renderElement;
					case 2:
						return Hu(l, n.nodeIndex).renderText;
				}
			}
			function ce(l) {
				return !!l.parent && !!(32768 & l.parentNodeDef.flags);
			}
			function pe(l) {
				return !(!l.parent || 32768 & l.parentNodeDef.flags);
			}
			function he(l) {
				return 1 << l % 32;
			}
			function de(l) {
				var n = {},
					u = 0,
					e = {};
				return (
					l &&
						l.forEach(function(l) {
							var t = i(l, 2),
								r = t[0],
								s = t[1];
							'number' == typeof r ? ((n[r] = s), (u |= he(r))) : (e[r] = s);
						}),
					{ matchedQueries: n, references: e, matchedQueryIds: u }
				);
			}
			function fe(l, n) {
				return l.map(function(l) {
					var u, e, t;
					return (
						Array.isArray(l) ? ((t = (u = i(l, 2))[0]), (e = u[1])) : ((t = 0), (e = l)),
						e && ('function' == typeof e || 'object' == typeof e) && n && Object.defineProperty(e, Ul, { value: n, configurable: !0 }),
						{ flags: t, token: e, tokenKey: Yu(e) }
					);
				});
			}
			function ge(l, n, u) {
				var e = u.renderParent;
				return e
					? 0 == (1 & e.flags) || 0 == (33554432 & e.flags) || (e.element.componentRendererType && e.element.componentRendererType.encapsulation === tn.Native)
						? Bu(l, u.renderParent.nodeIndex).renderElement
						: void 0
					: n;
			}
			var me = new WeakMap();
			function be(l) {
				var n = me.get(l);
				return (
					n ||
						(((n = l(function() {
							return Wu;
						})).factory = l),
						me.set(l, n)),
					n
				);
			}
			function ye(l, n, u, e, t) {
				3 === n && (u = l.renderer.parentNode(ie(l, l.def.lastRenderRootNode))), ve(l, n, 0, l.def.nodes.length - 1, u, e, t);
			}
			function ve(l, n, u, e, t, r, s) {
				for (var a = u; a <= e; a++) {
					var o = l.def.nodes[a];
					11 & o.flags && je(l, o, n, t, r, s), (a += o.childCount);
				}
			}
			function we(l, n, u, e, t, r) {
				for (var s = l; s && !ce(s); ) s = s.parent;
				for (var a = s.parent, o = oe(s), i = o.nodeIndex + o.childCount, c = o.nodeIndex + 1; c <= i; c++) {
					var p = a.def.nodes[c];
					p.ngContentIndex === n && je(a, p, u, e, t, r), (c += p.childCount);
				}
				if (!a.parent) {
					var h = l.root.projectableNodes[n];
					if (h) for (c = 0; c < h.length; c++) _e(l, h[c], u, e, t, r);
				}
			}
			function je(l, n, u, e, t, r) {
				if (8 & n.flags) we(l, n.ngContent.index, u, e, t, r);
				else {
					var s = ie(l, n);
					if (
						(3 === u && 33554432 & n.flags && 48 & n.bindingFlags
							? (16 & n.bindingFlags && _e(l, s, u, e, t, r), 32 & n.bindingFlags && _e(Bu(l, n.nodeIndex).componentView, s, u, e, t, r))
							: _e(l, s, u, e, t, r),
						16777216 & n.flags)
					)
						for (var a = Bu(l, n.nodeIndex).viewContainer._embeddedViews, o = 0; o < a.length; o++) ye(a[o], u, e, t, r);
					1 & n.flags && !n.element.name && ve(l, u, n.nodeIndex + 1, n.nodeIndex + n.childCount, e, t, r);
				}
			}
			function _e(l, n, u, e, t, r) {
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
			var xe = /^:([^:]+):(.+)$/;
			function ke(l) {
				if (':' === l[0]) {
					var n = l.match(xe);
					return [n[1], n[2]];
				}
				return ['', l];
			}
			function Ce(l) {
				for (var n = 0, u = 0; u < l.length; u++) n |= l[u].flags;
				return n;
			}
			var Se = new Object(),
				Ee = Yu(Zl),
				Pe = Yu(Rl),
				Ie = Yu(ru);
			function Oe(l, n, u, e) {
				return (u = Cl(u)), { index: -1, deps: fe(e, _l(n)), flags: l, token: n, value: u };
			}
			function Te(l, n, u) {
				void 0 === u && (u = Zl.THROW_IF_NOT_FOUND);
				var e,
					t,
					r = Vl(l);
				try {
					if (8 & n.flags) return n.token;
					if ((2 & n.flags && (u = null), 1 & n.flags)) return l._parent.get(n.token, u);
					var s = n.tokenKey;
					switch (s) {
						case Ee:
						case Pe:
						case Ie:
							return l;
					}
					var a,
						o = l._def.providersByKey[s];
					if (o) {
						var i = l._providers[o.index];
						return void 0 === i && (i = l._providers[o.index] = Me(l, o)), i === Se ? void 0 : i;
					}
					if (
						(a = wl(n.token)) &&
						((e = l),
						null != (t = a).providedIn &&
							((function(l, n) {
								return l._def.modules.indexOf(t.providedIn) > -1;
							})(e) ||
								('root' === t.providedIn && e._def.isRoot)))
					) {
						var c = l._providers.length;
						return (
							(l._def.providers[c] = l._def.providersByKey[n.tokenKey] = { flags: 5120, value: a.factory, deps: [], index: c, token: n.token }),
							(l._providers[c] = Se),
							(l._providers[c] = Me(l, l._def.providersByKey[n.tokenKey]))
						);
					}
					return 4 & n.flags ? u : l._parent.get(n.token, u);
				} finally {
					Vl(r);
				}
			}
			function Me(l, n) {
				var u;
				switch (201347067 & n.flags) {
					case 512:
						u = (function(l, n, u) {
							var e = u.length;
							switch (e) {
								case 0:
									return new n();
								case 1:
									return new n(Te(l, u[0]));
								case 2:
									return new n(Te(l, u[0]), Te(l, u[1]));
								case 3:
									return new n(Te(l, u[0]), Te(l, u[1]), Te(l, u[2]));
								default:
									for (var t = new Array(e), r = 0; r < e; r++) t[r] = Te(l, u[r]);
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
									return n(Te(l, u[0]));
								case 2:
									return n(Te(l, u[0]), Te(l, u[1]));
								case 3:
									return n(Te(l, u[0]), Te(l, u[1]), Te(l, u[2]));
								default:
									for (var t = Array(e), r = 0; r < e; r++) t[r] = Te(l, u[r]);
									return n.apply(void 0, c(t));
							}
						})(l, n.value, n.deps);
						break;
					case 2048:
						u = Te(l, n.deps[0]);
						break;
					case 256:
						u = n.value;
				}
				return u === Se || null === u || 'object' != typeof u || 131072 & n.flags || 'function' != typeof u.ngOnDestroy || (n.flags |= 131072), void 0 === u ? Se : u;
			}
			function Re(l, n) {
				var u = l.viewContainer._embeddedViews;
				if (((null == n || n >= u.length) && (n = u.length - 1), n < 0)) return null;
				var e = u[n];
				return (e.viewContainerParent = null), Ue(u, n), Qu.dirtyParentQueries(e), Ne(e), e;
			}
			function Ae(l, n, u) {
				var e = n ? ie(n, n.def.lastRenderRootNode) : l.renderElement,
					t = u.renderer.parentNode(e),
					r = u.renderer.nextSibling(e);
				ye(u, 2, t, r, void 0);
			}
			function Ne(l) {
				ye(l, 3, null, null, void 0);
			}
			function De(l, n, u) {
				n >= l.length ? l.push(u) : l.splice(n, 0, u);
			}
			function Ue(l, n) {
				n >= l.length - 1 ? l.pop() : l.splice(n, 1);
			}
			var Le = new Object();
			function Fe(l, n, u, e, t, r) {
				return new Ve(l, n, u, e, t, r);
			}
			var Ve = (function(l) {
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
							var t = be(this.viewDefFactory),
								r = t.nodes[0].element.componentProvider.nodeIndex,
								s = Qu.createRootView(l, n || [], u, t, e, Le),
								a = qu(s, r).instance;
							return u && s.renderer.setAttribute(Bu(s, 0).renderElement, 'ng-version', gu.full), new ze(s, new Ge(s), a);
						}),
						n
					);
				})($n),
				ze = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t._view = n), (t._viewRef = u), (t._component = e), (t._elDef = t._view.def.nodes[0]), (t.hostView = u), (t.changeDetectorRef = u), (t.instance = e), t;
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'location', {
							get: function() {
								return new ou(Bu(this._view, this._elDef.nodeIndex).renderElement);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'injector', {
							get: function() {
								return new Ke(this._view, this._elDef);
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
				})(Jn);
			function He(l, n, u) {
				return new Be(l, n, u);
			}
			var Be = (function() {
				function l(l, n, u) {
					(this._view = l), (this._elDef = n), (this._data = u), (this._embeddedViews = []);
				}
				return (
					Object.defineProperty(l.prototype, 'element', {
						get: function() {
							return new ou(this._data.renderElement);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return new Ke(this._view, this._elDef);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'parentInjector', {
						get: function() {
							for (var l = this._view, n = this._elDef.parent; !n && l; ) (n = oe(l)), (l = l.parent);
							return l ? new Ke(l, n) : new Ke(this._view, null);
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.clear = function() {
						for (var l = this._embeddedViews.length - 1; l >= 0; l--) {
							var n = Re(this._data, l);
							Qu.destroyView(n);
						}
					}),
					(l.prototype.get = function(l) {
						var n = this._embeddedViews[l];
						if (n) {
							var u = new Ge(n);
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
						t || l instanceof tu || (t = r.get(ru));
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
							De(r, e, t),
							(function(l, n) {
								var u = ae(n);
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
							Qu.dirtyParentQueries(t),
							Ae(u, e > 0 ? r[e - 1] : null, t),
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
							Ue(r, e),
							null == t && (t = r.length),
							De(r, t, s),
							Qu.dirtyParentQueries(s),
							Ne(s),
							Ae(u, t > 0 ? r[t - 1] : null, s),
							l
						);
					}),
					(l.prototype.indexOf = function(l) {
						return this._embeddedViews.indexOf(l._view);
					}),
					(l.prototype.remove = function(l) {
						var n = Re(this._data, l);
						n && Qu.destroyView(n);
					}),
					(l.prototype.detach = function(l) {
						var n = Re(this._data, l);
						return n ? new Ge(n) : null;
					}),
					l
				);
			})();
			function qe(l) {
				return new Ge(l);
			}
			var Ge = (function() {
				function l(l) {
					(this._view = l), (this._viewContainerRef = null), (this._appRef = null);
				}
				return (
					Object.defineProperty(l.prototype, 'rootNodes', {
						get: function() {
							return ye(this._view, 0, void 0, void 0, (l = [])), l;
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
						te(this._view);
					}),
					(l.prototype.detach = function() {
						this._view.state &= -5;
					}),
					(l.prototype.detectChanges = function() {
						var l = this._view.root.rendererFactory;
						l.begin && l.begin();
						try {
							Qu.checkAndUpdateView(this._view);
						} finally {
							l.end && l.end();
						}
					}),
					(l.prototype.checkNoChanges = function() {
						Qu.checkNoChangesView(this._view);
					}),
					(l.prototype.reattach = function() {
						this._view.state |= 4;
					}),
					(l.prototype.onDestroy = function(l) {
						this._view.disposables || (this._view.disposables = []), this._view.disposables.push(l);
					}),
					(l.prototype.destroy = function() {
						this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Qu.destroyView(this._view);
					}),
					(l.prototype.detachFromAppRef = function() {
						(this._appRef = null), Ne(this._view), Qu.dirtyParentQueries(this._view);
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
			function Ze(l, n) {
				return new Qe(l, n);
			}
			var Qe = (function(l) {
				function n(n, u) {
					var e = l.call(this) || this;
					return (e._parentView = n), (e._def = u), e;
				}
				return (
					t(n, l),
					(n.prototype.createEmbeddedView = function(l) {
						return new Ge(Qu.createEmbeddedView(this._parentView, this._def, this._def.element.template, l));
					}),
					Object.defineProperty(n.prototype, 'elementRef', {
						get: function() {
							return new ou(Bu(this._parentView, this._def.nodeIndex).renderElement);
						},
						enumerable: !0,
						configurable: !0
					}),
					n
				);
			})(Ru);
			function We(l, n) {
				return new Ke(l, n);
			}
			var Ke = (function() {
				function l(l, n) {
					(this.view = l), (this.elDef = n);
				}
				return (
					(l.prototype.get = function(l, n) {
						return (
							void 0 === n && (n = Zl.THROW_IF_NOT_FOUND),
							Qu.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: l, tokenKey: Yu(l) }, n)
						);
					}),
					l
				);
			})();
			function Ye(l, n) {
				var u = l.def.nodes[n];
				if (1 & u.flags) {
					var e = Bu(l, u.nodeIndex);
					return u.element.template ? e.template : e.renderElement;
				}
				if (2 & u.flags) return Hu(l, u.nodeIndex).renderText;
				if (20240 & u.flags) return qu(l, u.nodeIndex).instance;
				throw new Error('Illegal state: read nodeValue for node index ' + n);
			}
			function Je(l) {
				return new $e(l.renderer);
			}
			var $e = (function() {
				function l(l) {
					this.delegate = l;
				}
				return (
					(l.prototype.selectRootElement = function(l) {
						return this.delegate.selectRootElement(l);
					}),
					(l.prototype.createElement = function(l, n) {
						var u = i(ke(n), 2),
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
						var e = i(ke(n), 2),
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
			function Xe(l, n, u, e) {
				return new lt(l, n, u, e);
			}
			var lt = (function() {
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
									4096 & t.flags || (void 0 === u[e] && (u[e] = Me(l, t)));
								}
							})(this);
					}
					return (
						(l.prototype.get = function(l, n, u) {
							void 0 === n && (n = Zl.THROW_IF_NOT_FOUND), void 0 === u && (u = bl.Default);
							var e = 0;
							return u & bl.SkipSelf ? (e |= 1) : u & bl.Self && (e |= 4), Te(this, { token: l, tokenKey: Yu(l), flags: e }, n);
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
								return this.get(uu);
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.destroy = function() {
							if (this._destroyed) throw new Error('The ng module ' + _l(this.instance.constructor) + ' has already been destroyed.');
							(this._destroyed = !0),
								(function(l, n) {
									for (var u = l._def, e = new Set(), t = 0; t < u.providers.length; t++)
										if (131072 & u.providers[t].flags) {
											var r = l._providers[t];
											if (r && r !== Se) {
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
				nt = Yu(cu),
				ut = Yu(du),
				et = Yu(ou),
				tt = Yu(Nu),
				rt = Yu(Ru),
				st = Yu(Pu),
				at = Yu(Zl),
				ot = Yu(Rl);
			function it(l, n, u, e, t, r, s, a) {
				var o = [];
				if (s)
					for (var c in s) {
						var p = i(s[c], 2);
						o[p[0]] = { flags: 8, name: c, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null };
					}
				var h = [];
				if (a) for (var d in a) h.push({ type: 1, propName: d, target: null, eventName: a[d] });
				return pt(l, (n |= 16384), u, e, t, t, r, o, h);
			}
			function ct(l, n, u, e, t) {
				return pt(-1, l, n, 0, u, e, t);
			}
			function pt(l, n, u, e, t, r, s, a, o) {
				var i = de(u),
					c = i.matchedQueries,
					p = i.references,
					h = i.matchedQueryIds;
				o || (o = []), a || (a = []), (r = Cl(r));
				var d = fe(s, _l(t));
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
					bindingFlags: Ce(a),
					outputs: o,
					element: null,
					provider: { token: t, value: r, deps: d },
					text: null,
					query: null,
					ngContent: null
				};
			}
			function ht(l, n) {
				return mt(l, n);
			}
			function dt(l, n) {
				for (var u = l; u.parent && !ce(u); ) u = u.parent;
				return bt(u.parent, oe(u), !0, n.provider.value, n.provider.deps);
			}
			function ft(l, n) {
				var u = bt(l, n.parent, (32768 & n.flags) > 0, n.provider.value, n.provider.deps);
				if (n.outputs.length)
					for (var e = 0; e < n.outputs.length; e++) {
						var t = n.outputs[e],
							r = u[t.propName];
						if (!Kn(r)) throw new Error('@Output ' + t.propName + " not initialized in '" + u.constructor.name + "'.");
						var s = r.subscribe(gt(l, n.parent.nodeIndex, t.eventName));
						l.disposables[n.outputIndex + e] = s.unsubscribe.bind(s);
					}
				return u;
			}
			function gt(l, n, u) {
				return function(e) {
					return se(l, n, u, e);
				};
			}
			function mt(l, n) {
				var u = (8192 & n.flags) > 0,
					e = n.provider;
				switch (201347067 & n.flags) {
					case 512:
						return bt(l, n.parent, u, e.value, e.deps);
					case 1024:
						return (function(l, n, u, e, t) {
							var r = t.length;
							switch (r) {
								case 0:
									return e();
								case 1:
									return e(vt(l, n, u, t[0]));
								case 2:
									return e(vt(l, n, u, t[0]), vt(l, n, u, t[1]));
								case 3:
									return e(vt(l, n, u, t[0]), vt(l, n, u, t[1]), vt(l, n, u, t[2]));
								default:
									for (var s = Array(r), a = 0; a < r; a++) s[a] = vt(l, n, u, t[a]);
									return e.apply(void 0, c(s));
							}
						})(l, n.parent, u, e.value, e.deps);
					case 2048:
						return vt(l, n.parent, u, e.deps[0]);
					case 256:
						return e.value;
				}
			}
			function bt(l, n, u, e, t) {
				var r = t.length;
				switch (r) {
					case 0:
						return new e();
					case 1:
						return new e(vt(l, n, u, t[0]));
					case 2:
						return new e(vt(l, n, u, t[0]), vt(l, n, u, t[1]));
					case 3:
						return new e(vt(l, n, u, t[0]), vt(l, n, u, t[1]), vt(l, n, u, t[2]));
					default:
						for (var s = new Array(r), a = 0; a < r; a++) s[a] = vt(l, n, u, t[a]);
						return new (e.bind.apply(e, c([void 0], s)))();
				}
			}
			var yt = {};
			function vt(l, n, u, e, t) {
				if ((void 0 === t && (t = Zl.THROW_IF_NOT_FOUND), 8 & e.flags)) return e.token;
				var r = l;
				2 & e.flags && (t = null);
				var s = e.tokenKey;
				s === st && (u = !(!n || !n.element.componentView)), n && 1 & e.flags && ((u = !1), (n = n.parent));
				for (var a = l; a; ) {
					if (n)
						switch (s) {
							case nt:
								return Je(wt(a, n, u));
							case ut:
								return wt(a, n, u).renderer;
							case et:
								return new ou(Bu(a, n.nodeIndex).renderElement);
							case tt:
								return Bu(a, n.nodeIndex).viewContainer;
							case rt:
								if (n.element.template) return Bu(a, n.nodeIndex).template;
								break;
							case st:
								return qe(wt(a, n, u));
							case at:
							case ot:
								return We(a, n);
							default:
								var o = (u ? n.element.allProviders : n.element.publicProviders)[s];
								if (o) {
									var i = qu(a, o.nodeIndex);
									return i || ((i = { instance: mt(a, o) }), (a.nodes[o.nodeIndex] = i)), i.instance;
								}
						}
					(u = ce(a)), (n = oe(a)), (a = a.parent), 4 & e.flags && (a = null);
				}
				var c = r.root.injector.get(e.token, yt);
				return c !== yt || t === yt ? c : r.root.ngModule.injector.get(e.token, t);
			}
			function wt(l, n, u) {
				var e;
				if (u) e = Bu(l, n.nodeIndex).componentView;
				else for (e = l; e.parent && !ce(e); ) e = e.parent;
				return e;
			}
			function jt(l, n, u, e, t, r) {
				if (32768 & u.flags) {
					var s = Bu(l, u.parent.nodeIndex).componentView;
					2 & s.def.flags && (s.state |= 8);
				}
				if (((n.instance[u.bindings[e].name] = t), 524288 & u.flags)) {
					r = r || {};
					var a = Gn.unwrap(l.oldValues[u.bindingIndex + e]);
					r[u.bindings[e].nonMinifiedName] = new Yn(a, t, 0 != (2 & l.state));
				}
				return (l.oldValues[u.bindingIndex + e] = t), r;
			}
			function _t(l, n) {
				if (l.def.nodeFlags & n)
					for (var u = l.def.nodes, e = 0, t = 0; t < u.length; t++) {
						var r = u[t],
							s = r.parent;
						for (!s && r.flags & n && kt(l, t, r.flags & n, e++), 0 == (r.childFlags & n) && (t += r.childCount); s && 1 & s.flags && t === s.nodeIndex + s.childCount; )
							s.directChildFlags & n && (e = xt(l, s, n, e)), (s = s.parent);
					}
			}
			function xt(l, n, u, e) {
				for (var t = n.nodeIndex + 1; t <= n.nodeIndex + n.childCount; t++) {
					var r = l.def.nodes[t];
					r.flags & u && kt(l, t, r.flags & u, e++), (t += r.childCount);
				}
				return e;
			}
			function kt(l, n, u, e) {
				var t = qu(l, n);
				if (t) {
					var r = t.instance;
					r &&
						(Qu.setCurrentNode(l, n),
						1048576 & u && zu(l, 512, e) && r.ngAfterContentInit(),
						2097152 & u && r.ngAfterContentChecked(),
						4194304 & u && zu(l, 768, e) && r.ngAfterViewInit(),
						8388608 & u && r.ngAfterViewChecked(),
						131072 & u && r.ngOnDestroy());
				}
			}
			var Ct = new Ml('SCHEDULER_TOKEN', {
					providedIn: 'root',
					factory: function() {
						return rn;
					}
				}),
				St = {},
				Et = (function(l) {
					return (
						(l[(l.LocaleId = 0)] = 'LocaleId'),
						(l[(l.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
						(l[(l.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
						(l[(l.DaysFormat = 3)] = 'DaysFormat'),
						(l[(l.DaysStandalone = 4)] = 'DaysStandalone'),
						(l[(l.MonthsFormat = 5)] = 'MonthsFormat'),
						(l[(l.MonthsStandalone = 6)] = 'MonthsStandalone'),
						(l[(l.Eras = 7)] = 'Eras'),
						(l[(l.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
						(l[(l.WeekendRange = 9)] = 'WeekendRange'),
						(l[(l.DateFormat = 10)] = 'DateFormat'),
						(l[(l.TimeFormat = 11)] = 'TimeFormat'),
						(l[(l.DateTimeFormat = 12)] = 'DateTimeFormat'),
						(l[(l.NumberSymbols = 13)] = 'NumberSymbols'),
						(l[(l.NumberFormats = 14)] = 'NumberFormats'),
						(l[(l.CurrencySymbol = 15)] = 'CurrencySymbol'),
						(l[(l.CurrencyName = 16)] = 'CurrencyName'),
						(l[(l.Currencies = 17)] = 'Currencies'),
						(l[(l.PluralCase = 18)] = 'PluralCase'),
						(l[(l.ExtraData = 19)] = 'ExtraData'),
						l
					);
				})({}),
				Pt = void 0,
				It = [
					'en',
					[['a', 'p'], ['AM', 'PM'], Pt],
					[['AM', 'PM'], Pt, Pt],
					[
						['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
						['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
					],
					Pt,
					[
						['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
						['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
					],
					Pt,
					[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
					0,
					[6, 0],
					['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
					['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
					['{1}, {0}', Pt, "{1} 'at' {0}", Pt],
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
				Ot = (function(l) {
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
				})(N);
			function Tt() {
				return this._results[Hn()]();
			}
			var Mt = (function() {
					function l() {
						(this.dirty = !0), (this._results = []), (this.changes = new Ot()), (this.length = 0);
						var n = Hn(),
							u = l.prototype;
						u[n] || (u[n] = Tt);
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
						(l.prototype.toString = function() {
							return this._results.toString();
						}),
						(l.prototype.reset = function(l) {
							(this._results = (function l(n, u) {
								void 0 === u && (u = n);
								for (var e = 0; e < n.length; e++) {
									var t = n[e];
									Array.isArray(t) ? (u === n && (u = n.slice(0, e)), l(t, u)) : u !== n && u.push(t);
								}
								return u;
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
				Rt = new Ml('Application Initializer'),
				At = (function() {
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
										Wn(t) && n.push(t);
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
				Nt = new Ml('AppId');
			function Dt() {
				return '' + Ut() + Ut() + Ut();
			}
			function Ut() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			var Lt = new Ml('Platform Initializer'),
				Ft = new Ml('Platform ID'),
				Vt = new Ml('appBootstrapListener'),
				zt = (function() {
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
				})(),
				Ht = new Ml('LocaleId');
			function Bt() {
				throw new Error('Runtime compiler is not loaded');
			}
			var qt,
				Gt,
				Zt = Bt,
				Qt = Bt,
				Wt = Bt,
				Kt = Bt,
				Yt = (function() {
					function l() {
						(this.compileModuleSync = Zt), (this.compileModuleAsync = Qt), (this.compileModuleAndAllComponentsSync = Wt), (this.compileModuleAndAllComponentsAsync = Kt);
					}
					return (l.prototype.clearCache = function() {}), (l.prototype.clearCacheFor = function(l) {}), (l.prototype.getModuleId = function(l) {}), l;
				})(),
				Jt = (function() {
					return function() {};
				})();
			function $t() {
				var l = Tl.wtf;
				return !(!l || !(qt = l.trace) || ((Gt = qt.events), 0));
			}
			var Xt = $t();
			function lr(l, n) {
				return null;
			}
			var nr = Xt
					? function(l, n) {
							return void 0 === n && (n = null), Gt.createScope(l, n);
					  }
					: function(l, n) {
							return lr;
					  },
				ur = Xt
					? function(l, n) {
							return qt.leaveScope(l, n), n;
					  }
					: function(l, n) {
							return n;
					  },
				er = (function() {
					return Promise.resolve(0);
				})();
			function tr(l) {
				'undefined' == typeof Zone
					? er.then(function() {
							l && l.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', l);
			}
			var rr = (function() {
				function l(l) {
					var n,
						u = l.enableLongStackTrace,
						e = void 0 !== u && u;
					if (
						((this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new Ot(!1)),
						(this.onMicrotaskEmpty = new Ot(!1)),
						(this.onStable = new Ot(!1)),
						(this.onError = new Ot(!1)),
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
									return ir(n), l.invokeTask(e, t, r, s);
								} finally {
									cr(n);
								}
							},
							onInvoke: function(l, u, e, t, r, s, a) {
								try {
									return ir(n), l.invoke(e, t, r, s, a);
								} finally {
									cr(n);
								}
							},
							onHasTask: function(l, u, e, t) {
								l.hasTask(e, t),
									u === e && ('microTask' == t.change ? ((n.hasPendingMicrotasks = t.microTask), or(n)) : 'macroTask' == t.change && (n.hasPendingMacrotasks = t.macroTask));
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
							r = t.scheduleEventTask('NgZoneEvent: ' + e, l, ar, sr, sr);
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
			function sr() {}
			var ar = {};
			function or(l) {
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
			function ir(l) {
				l._nesting++, l.isStable && ((l.isStable = !1), l.onUnstable.emit(null));
			}
			function cr(l) {
				l._nesting--, or(l);
			}
			var pr,
				hr = (function() {
					function l() {
						(this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new Ot()),
							(this.onMicrotaskEmpty = new Ot()),
							(this.onStable = new Ot()),
							(this.onError = new Ot());
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
				dr = (function() {
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
											rr.assertNotInAngularZone(),
												tr(function() {
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
								tr(function() {
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
				fr = (function() {
					function l() {
						(this._applications = new Map()), gr.addToWindow(this);
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
							return void 0 === n && (n = !0), gr.findTestabilityInTree(this, l, n);
						}),
						s([a('design:paramtypes', [])], l)
					);
				})(),
				gr = new ((function() {
					function l() {}
					return (
						(l.prototype.addToWindow = function(l) {}),
						(l.prototype.findTestabilityInTree = function(l, n, u) {
							return null;
						}),
						l
					);
				})())(),
				mr = new Ml('AllowMultipleToken'),
				br = (function() {
					return function(l, n) {
						(this.name = l), (this.token = n);
					};
				})();
			function yr(l, n, u) {
				void 0 === u && (u = []);
				var e = 'Platform: ' + n,
					t = new Ml(e);
				return function(n) {
					void 0 === n && (n = []);
					var r = vr();
					if (!r || r.injector.get(mr, !1))
						if (l) l(u.concat(n).concat({ provide: t, useValue: !0 }));
						else {
							var s = u.concat(n).concat({ provide: t, useValue: !0 });
							!(function(l) {
								if (pr && !pr.destroyed && !pr.injector.get(mr, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								pr = l.get(wr);
								var n = l.get(Lt, null);
								n &&
									n.forEach(function(l) {
										return l();
									});
							})(Zl.create({ providers: s, name: e }));
						}
					return (function(l) {
						var n = vr();
						if (!n) throw new Error('No platform exists!');
						if (!n.injector.get(l, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return n;
					})(t);
				};
			}
			function vr() {
				return pr && !pr.destroyed ? pr : null;
			}
			var wr = (function() {
				function l(l) {
					(this._injector = l), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
				}
				return (
					(l.prototype.bootstrapModuleFactory = function(l, n) {
						var u,
							e = this,
							t = 'noop' === (u = n ? n.ngZone : void 0) ? new hr() : ('zone.js' === u ? void 0 : u) || new rr({ enableLongStackTrace: on() }),
							r = [{ provide: rr, useValue: t }];
						return t.run(function() {
							var n = Zl.create({ providers: r, parent: e.injector, name: l.moduleType.name }),
								u = l.create(n),
								s = u.injector.get(Ln, null);
							if (!s) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								u.injector
									.get(Ht, 'en-US')
									.toLowerCase()
									.replace(/_/g, '-'),
								u.onDestroy(function() {
									return xr(e._modules, u);
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
										var r =
											((s = u.injector.get(At)).runInitializers(),
											s.donePromise.then(function() {
												return e._moduleDoBootstrap(u), u;
											}));
										return Wn(r)
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
						var e = jr({}, n);
						return (function(l, n, u) {
							return l
								.get(Jt)
								.createCompiler([n])
								.compileModuleAsync(u);
						})(this.injector, e, l).then(function(l) {
							return u.bootstrapModuleFactory(l, e);
						});
					}),
					(l.prototype._moduleDoBootstrap = function(l) {
						var n = l.injector.get(_r);
						if (l._bootstrapComponents.length > 0)
							l._bootstrapComponents.forEach(function(l) {
								return n.bootstrap(l);
							});
						else {
							if (!l.instance.ngDoBootstrap)
								throw new Error(
									'The module ' +
										_l(l.instance.constructor) +
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
			function jr(l, n) {
				return Array.isArray(n) ? n.reduce(jr, l) : r({}, l, n);
			}
			var _r = (function() {
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
						(this._enforceNoNewChanges = on()),
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
									rr.assertNotInAngularZone(),
										tr(function() {
											s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || ((s._stable = !0), l.next(!0));
										});
								});
							});
							var u = s._zone.onUnstable.subscribe(function() {
								rr.assertInAngularZone(),
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
						(u = l instanceof $n ? l : this._componentFactoryResolver.resolveComponentFactory(l)), this.componentTypes.push(u.componentType);
						var t = u instanceof tu ? null : this._injector.get(ru),
							r = u.create(Zl.NULL, [], n || u.selector, t);
						r.onDestroy(function() {
							e._unloadComponent(r);
						});
						var s = r.injector.get(dr, null);
						return (
							s && r.injector.get(fr).registerApplication(r.location.nativeElement, s),
							this._loadComponent(r),
							on() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
							r
						);
					}),
					(l.prototype.tick = function() {
						var l,
							u,
							e,
							t,
							r = this;
						if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
						var s = n._tickScope();
						try {
							this._runningTick = !0;
							try {
								for (var a = o(this._views), i = a.next(); !i.done; i = a.next()) i.value.detectChanges();
							} catch (h) {
								l = { error: h };
							} finally {
								try {
									i && !i.done && (u = a.return) && u.call(a);
								} finally {
									if (l) throw l.error;
								}
							}
							if (this._enforceNoNewChanges)
								try {
									for (var c = o(this._views), p = c.next(); !p.done; p = c.next()) p.value.checkNoChanges();
								} catch (d) {
									e = { error: d };
								} finally {
									try {
										p && !p.done && (t = c.return) && t.call(c);
									} finally {
										if (e) throw e.error;
									}
								}
						} catch (f) {
							this._zone.runOutsideAngular(function() {
								return r._exceptionHandler.handleError(f);
							});
						} finally {
							(this._runningTick = !1), ur(s);
						}
					}),
					(l.prototype.attachView = function(l) {
						var n = l;
						this._views.push(n), n.attachToAppRef(this);
					}),
					(l.prototype.detachView = function(l) {
						var n = l;
						xr(this._views, n), n.detachFromAppRef();
					}),
					(l.prototype._loadComponent = function(l) {
						this.attachView(l.hostView),
							this.tick(),
							this.components.push(l),
							this._injector
								.get(Vt, [])
								.concat(this._bootstrapListeners)
								.forEach(function(n) {
									return n(l);
								});
					}),
					(l.prototype._unloadComponent = function(l) {
						this.detachView(l.hostView), xr(this.components, l);
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
					(l._tickScope = nr('ApplicationRef#tick()')),
					l
				);
			})();
			function xr(l, n) {
				var u = l.indexOf(n);
				u > -1 && l.splice(u, 1);
			}
			var kr = (function() {
					return function() {};
				})(),
				Cr = (function() {
					return function() {};
				})(),
				Sr = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				Er = (function() {
					function l(l, n) {
						(this._compiler = l), (this._config = n || Sr);
					}
					return (
						(l.prototype.load = function(l) {
							return this._compiler instanceof Yt ? this.loadFactory(l) : this.loadAndCompile(l);
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
										return Pr(l, t, r);
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
										return Pr(l, e, t);
									})
							);
						}),
						l
					);
				})();
			function Pr(l, n, u) {
				if (!l) throw new Error("Cannot find '" + u + "' in '" + n + "'");
				return l;
			}
			var Ir = (function() {
					return function(l, n) {
						(this.name = l), (this.callback = n);
					};
				})(),
				Or = (function() {
					function l(l, n, u) {
						(this.listeners = []), (this.parent = null), (this._debugContext = u), (this.nativeNode = l), n && n instanceof Tr && n.addChild(this);
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
				Tr = (function(l) {
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
										n instanceof Tr && (u(n) && e.push(n), l(n, u, e));
									});
								})(this, l, n),
								n
							);
						}),
						(n.prototype.queryAllNodes = function(l) {
							var n = [];
							return (
								(function l(n, u, e) {
									n instanceof Tr &&
										n.childNodes.forEach(function(n) {
											u(n) && e.push(n), n instanceof Tr && l(n, u, e);
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
				})(Or),
				Mr = new Map(),
				Rr = function(l) {
					return Mr.get(l) || null;
				};
			function Ar(l) {
				Mr.set(l.nativeNode, l);
			}
			var Nr = yr(null, 'core', [{ provide: Ft, useValue: 'unknown' }, { provide: wr, deps: [Zl] }, { provide: fr, deps: [] }, { provide: zt, deps: [] }]);
			function Dr() {
				return Tu;
			}
			function Ur() {
				return Mu;
			}
			function Lr(l) {
				return l || 'en-US';
			}
			function Fr(l) {
				var n = [];
				return (
					l.onStable.subscribe(function() {
						for (; n.length; ) n.pop()();
					}),
					function(l) {
						n.push(l);
					}
				);
			}
			var Vr = (function() {
				return function(l) {};
			})();
			function zr(l, n, u, e, t, r) {
				l |= 1;
				var s = de(n);
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
						template: r ? be(r) : null,
						componentProvider: null,
						componentView: null,
						componentRendererType: null,
						publicProviders: null,
						allProviders: null,
						handleEvent: t || Wu
					},
					provider: null,
					text: null,
					query: null,
					ngContent: null
				};
			}
			function Hr(l, n, u, e, t, r, s, a, o, c, p, h) {
				var d;
				void 0 === s && (s = []), c || (c = Wu);
				var f = de(u),
					g = f.matchedQueries,
					m = f.references,
					b = f.matchedQueryIds,
					y = null,
					v = null;
				r && ((y = (d = i(ke(r), 2))[0]), (v = d[1])), (a = a || []);
				for (var w = new Array(a.length), j = 0; j < a.length; j++) {
					var _ = i(a[j], 3),
						x = _[0],
						k = _[2],
						C = i(ke(_[1]), 2),
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
						e = i(ke(n[0]), 2);
					return [e[0], e[1], u];
				});
				return (
					(h = (function(l) {
						if (l && l.id === Ju) {
							var n = (null != l.encapsulation && l.encapsulation !== tn.None) || l.styles.length || Object.keys(l.data).length;
							l.id = n ? 'c' + le++ : $u;
						}
						return l && l.id === $u && (l = null), l || null;
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
						bindingFlags: Ce(w),
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
							handleEvent: c || Wu
						},
						provider: null,
						text: null,
						query: null,
						ngContent: null
					}
				);
			}
			function Br(l, n, u) {
				var e,
					t = u.element,
					r = l.root.selectorOrNode,
					s = l.renderer;
				if (l.parent || !r) {
					e = t.name ? s.createElement(t.name, t.ns) : s.createComment('');
					var a = ge(l, n, u);
					a && s.appendChild(a, e);
				} else e = s.selectRootElement(r, !!t.componentRendererType && t.componentRendererType.encapsulation === tn.ShadowDom);
				if (t.attrs)
					for (var o = 0; o < t.attrs.length; o++) {
						var c = i(t.attrs[o], 3);
						s.setAttribute(e, c[1], c[2], c[0]);
					}
				return e;
			}
			function qr(l, n, u, e) {
				for (var t = 0; t < u.outputs.length; t++) {
					var r = u.outputs[t],
						s = Gr(l, u.nodeIndex, ((p = r.eventName), (c = r.target) ? c + ':' + p : p)),
						a = r.target,
						o = l;
					'component' === r.target && ((a = null), (o = n));
					var i = o.renderer.listen(a || e, r.eventName, s);
					l.disposables[u.outputIndex + t] = i;
				}
				var c, p;
			}
			function Gr(l, n, u) {
				return function(e) {
					return se(l, n, u, e);
				};
			}
			function Zr(l, n, u, e) {
				if (!ue(l, n, u, e)) return !1;
				var t = n.bindings[u],
					r = Bu(l, n.nodeIndex),
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
							var r = l.root.sanitizer.sanitize(Tn.STYLE, t);
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
			function Qr(l, n, u) {
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
					query: { id: n, filterId: he(n), bindings: e },
					ngContent: null
				};
			}
			function Wr(l) {
				for (var n = l.def.nodeMatchedQueries; l.parent && pe(l); ) {
					var u = l.parentNodeDef;
					l = l.parent;
					for (var e = u.nodeIndex + u.childCount, t = 0; t <= e; t++)
						67108864 & (r = l.def.nodes[t]).flags && 536870912 & r.flags && (r.query.filterId & n) === r.query.filterId && Zu(l, t).setDirty(),
							(!(1 & r.flags && t + r.childCount < u.nodeIndex) && 67108864 & r.childFlags && 536870912 & r.childFlags) || (t += r.childCount);
				}
				if (134217728 & l.def.nodeFlags)
					for (t = 0; t < l.def.nodes.length; t++) {
						var r;
						134217728 & (r = l.def.nodes[t]).flags && 536870912 & r.flags && Zu(l, t).setDirty(), (t += r.childCount);
					}
			}
			function Kr(l, n) {
				var u = Zu(l, n.nodeIndex);
				if (u.dirty) {
					var e,
						t = void 0;
					if (67108864 & n.flags) {
						var r = n.parent.parent;
						(t = Yr(l, r.nodeIndex, r.nodeIndex + r.childCount, n.query, [])), (e = qu(l, n.parent.nodeIndex).instance);
					} else 134217728 & n.flags && ((t = Yr(l, 0, l.def.nodes.length - 1, n.query, [])), (e = l.component));
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
			function Yr(l, n, u, e, t) {
				for (var r = n; r <= u; r++) {
					var s = l.def.nodes[r],
						a = s.matchedQueries[e.id];
					if ((null != a && t.push(Jr(l, s, a)), 1 & s.flags && s.element.template && (s.element.template.nodeMatchedQueries & e.filterId) === e.filterId)) {
						var o = Bu(l, r);
						if (((s.childMatchedQueries & e.filterId) === e.filterId && (Yr(l, r + 1, r + s.childCount, e, t), (r += s.childCount)), 16777216 & s.flags))
							for (var i = o.viewContainer._embeddedViews, c = 0; c < i.length; c++) {
								var p = i[c],
									h = ae(p);
								h && h === o && Yr(p, 0, p.def.nodes.length - 1, e, t);
							}
						var d = o.template._projectedViews;
						if (d)
							for (c = 0; c < d.length; c++) {
								var f = d[c];
								Yr(f, 0, f.def.nodes.length - 1, e, t);
							}
					}
					(s.childMatchedQueries & e.filterId) !== e.filterId && (r += s.childCount);
				}
				return t;
			}
			function Jr(l, n, u) {
				if (null != u)
					switch (u) {
						case 1:
							return Bu(l, n.nodeIndex).renderElement;
						case 0:
							return new ou(Bu(l, n.nodeIndex).renderElement);
						case 2:
							return Bu(l, n.nodeIndex).template;
						case 3:
							return Bu(l, n.nodeIndex).viewContainer;
						case 4:
							return qu(l, n.nodeIndex).instance;
					}
			}
			function $r(l, n) {
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
			function Xr(l, n, u) {
				var e = ge(l, n, u);
				e && we(l, u.ngContent.index, 1, e, null, void 0);
			}
			function ls(l, n) {
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
						bindingFlags: Ce(e),
						outputs: [],
						element: null,
						provider: null,
						text: null,
						query: null,
						ngContent: null
					};
				})(0, l, t);
			}
			function ns(l, n, u) {
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
			function us(l, n, u) {
				var e,
					t = l.renderer;
				e = t.createText(u.text.prefix);
				var r = ge(l, n, u);
				return r && t.appendChild(r, e), { renderText: e };
			}
			function es(l, n) {
				return (null != l ? l.toString() : '') + n.suffix;
			}
			function ts(l, n, u, e) {
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
					if ((ss(i, g, n.length), (t += g.bindings.length), (r += g.outputs.length), !c && 3 & g.flags && (d = g), 20224 & g.flags)) {
						p || ((p = !0), (i.element.publicProviders = Object.create(i.element.publicProviders)), (i.element.allProviders = i.element.publicProviders));
						var b = 0 != (32768 & g.flags);
						0 == (8192 & g.flags) || b
							? (i.element.publicProviders[Yu(g.provider.token)] = g)
							: (h || ((h = !0), (i.element.allProviders = Object.create(i.element.publicProviders))), (i.element.allProviders[Yu(g.provider.token)] = g)),
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
						(i = g), rs(g) || (c = g);
					else
						for (; i && f === i.nodeIndex + i.childCount; ) {
							var y = i.parent;
							y && ((y.childFlags |= i.childFlags), (y.childMatchedQueries |= i.childMatchedQueries)), (c = (i = y) && rs(i) ? i.renderParent : i);
						}
				}
				return {
					factory: null,
					nodeFlags: s,
					rootNodeFlags: a,
					nodeMatchedQueries: o,
					flags: l,
					nodes: n,
					updateDirectives: u || Wu,
					updateRenderer: e || Wu,
					handleEvent: function(l, u, e, t) {
						return n[u].element.handleEvent(l, e, t);
					},
					bindingCount: t,
					outputCount: r,
					lastRenderRootNode: d
				};
			}
			function rs(l) {
				return 0 != (1 & l.flags) && null === l.element.name;
			}
			function ss(l, n, u) {
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
			function as(l, n, u, e) {
				var t = cs(l.root, l.renderer, l, n, u);
				return ps(t, l.component, e), hs(t), t;
			}
			function os(l, n, u) {
				var e = cs(l, l.renderer, null, null, n);
				return ps(e, u, u), hs(e), e;
			}
			function is(l, n, u, e) {
				var t,
					r = n.element.componentRendererType;
				return (t = r ? l.root.rendererFactory.createRenderer(e, r) : l.root.renderer), cs(l.root, t, l, n.element.componentProvider, u);
			}
			function cs(l, n, u, e, t) {
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
			function ps(l, n, u) {
				(l.component = n), (l.context = u);
			}
			function hs(l) {
				var n;
				ce(l) && (n = Bu(l.parent, l.parentNodeDef.parent.nodeIndex).renderElement);
				for (var u = l.def, e = l.nodes, t = 0; t < u.nodes.length; t++) {
					var r = u.nodes[t];
					Qu.setCurrentNode(l, t);
					var s = void 0;
					switch (201347067 & r.flags) {
						case 1:
							var a = Br(l, n, r),
								o = void 0;
							if (33554432 & r.flags) {
								var i = be(r.element.componentView);
								o = Qu.createComponentView(l, r, i, a);
							}
							qr(l, o, r, a),
								(s = { renderElement: a, componentView: o, viewContainer: null, template: r.element.template ? Ze(l, r) : void 0 }),
								16777216 & r.flags && (s.viewContainer = He(l, r, s));
							break;
						case 2:
							s = us(l, n, r);
							break;
						case 512:
						case 1024:
						case 2048:
						case 256:
							(s = e[t]) || 4096 & r.flags || (s = { instance: ht(l, r) });
							break;
						case 16:
							s = { instance: dt(l, r) };
							break;
						case 16384:
							(s = e[t]) || (s = { instance: ft(l, r) }), 32768 & r.flags && ps(Bu(l, r.parent.nodeIndex).componentView, s.instance, s.instance);
							break;
						case 32:
						case 64:
						case 128:
							s = { value: void 0 };
							break;
						case 67108864:
						case 134217728:
							s = new Mt();
							break;
						case 8:
							Xr(l, n, r), (s = void 0);
					}
					e[t] = s;
				}
				js(l, ws.CreateViewNodes), Cs(l, 201326592, 268435456, 0);
			}
			function ds(l) {
				ms(l), Qu.updateDirectives(l, 1), _s(l, ws.CheckNoChanges), Qu.updateRenderer(l, 1), js(l, ws.CheckNoChanges), (l.state &= -97);
			}
			function fs(l) {
				1 & l.state ? ((l.state &= -2), (l.state |= 2)) : (l.state &= -3), Vu(l, 0, 256), ms(l), Qu.updateDirectives(l, 0), _s(l, ws.CheckAndUpdate), Cs(l, 67108864, 536870912, 0);
				var n = Vu(l, 256, 512);
				_t(l, 2097152 | (n ? 1048576 : 0)),
					Qu.updateRenderer(l, 0),
					js(l, ws.CheckAndUpdate),
					Cs(l, 134217728, 536870912, 0),
					_t(l, 8388608 | ((n = Vu(l, 512, 768)) ? 4194304 : 0)),
					2 & l.def.flags && (l.state &= -9),
					(l.state &= -97),
					Vu(l, 768, 1024);
			}
			function gs(l, n, u, e, t, r, s, a, o, i, p, h, d) {
				return 0 === u
					? (function(l, n, u, e, t, r, s, a, o, i, c, p) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = n.bindings.length,
											d = !1;
										return (
											h > 0 && Zr(l, n, 0, u) && (d = !0),
											h > 1 && Zr(l, n, 1, e) && (d = !0),
											h > 2 && Zr(l, n, 2, t) && (d = !0),
											h > 3 && Zr(l, n, 3, r) && (d = !0),
											h > 4 && Zr(l, n, 4, s) && (d = !0),
											h > 5 && Zr(l, n, 5, a) && (d = !0),
											h > 6 && Zr(l, n, 6, o) && (d = !0),
											h > 7 && Zr(l, n, 7, i) && (d = !0),
											h > 8 && Zr(l, n, 8, c) && (d = !0),
											h > 9 && Zr(l, n, 9, p) && (d = !0),
											d
										);
									})(l, n, u, e, t, r, s, a, o, i, c, p);
								case 2:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = !1,
											d = n.bindings,
											f = d.length;
										if (
											(f > 0 && ue(l, n, 0, u) && (h = !0),
											f > 1 && ue(l, n, 1, e) && (h = !0),
											f > 2 && ue(l, n, 2, t) && (h = !0),
											f > 3 && ue(l, n, 3, r) && (h = !0),
											f > 4 && ue(l, n, 4, s) && (h = !0),
											f > 5 && ue(l, n, 5, a) && (h = !0),
											f > 6 && ue(l, n, 6, o) && (h = !0),
											f > 7 && ue(l, n, 7, i) && (h = !0),
											f > 8 && ue(l, n, 8, c) && (h = !0),
											f > 9 && ue(l, n, 9, p) && (h = !0),
											h)
										) {
											var g = n.text.prefix;
											f > 0 && (g += es(u, d[0])),
												f > 1 && (g += es(e, d[1])),
												f > 2 && (g += es(t, d[2])),
												f > 3 && (g += es(r, d[3])),
												f > 4 && (g += es(s, d[4])),
												f > 5 && (g += es(a, d[5])),
												f > 6 && (g += es(o, d[6])),
												f > 7 && (g += es(i, d[7])),
												f > 8 && (g += es(c, d[8])),
												f > 9 && (g += es(p, d[9]));
											var m = Hu(l, n.nodeIndex).renderText;
											l.renderer.setValue(m, g);
										}
										return h;
									})(l, n, u, e, t, r, s, a, o, i, c, p);
								case 16384:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = qu(l, n.nodeIndex),
											d = h.instance,
											f = !1,
											g = void 0,
											m = n.bindings.length;
										return (
											m > 0 && ne(l, n, 0, u) && ((f = !0), (g = jt(l, h, n, 0, u, g))),
											m > 1 && ne(l, n, 1, e) && ((f = !0), (g = jt(l, h, n, 1, e, g))),
											m > 2 && ne(l, n, 2, t) && ((f = !0), (g = jt(l, h, n, 2, t, g))),
											m > 3 && ne(l, n, 3, r) && ((f = !0), (g = jt(l, h, n, 3, r, g))),
											m > 4 && ne(l, n, 4, s) && ((f = !0), (g = jt(l, h, n, 4, s, g))),
											m > 5 && ne(l, n, 5, a) && ((f = !0), (g = jt(l, h, n, 5, a, g))),
											m > 6 && ne(l, n, 6, o) && ((f = !0), (g = jt(l, h, n, 6, o, g))),
											m > 7 && ne(l, n, 7, i) && ((f = !0), (g = jt(l, h, n, 7, i, g))),
											m > 8 && ne(l, n, 8, c) && ((f = !0), (g = jt(l, h, n, 8, c, g))),
											m > 9 && ne(l, n, 9, p) && ((f = !0), (g = jt(l, h, n, 9, p, g))),
											g && d.ngOnChanges(g),
											65536 & n.flags && zu(l, 256, n.nodeIndex) && d.ngOnInit(),
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
											(f > 0 && ue(l, n, 0, u) && (d = !0),
											f > 1 && ue(l, n, 1, e) && (d = !0),
											f > 2 && ue(l, n, 2, t) && (d = !0),
											f > 3 && ue(l, n, 3, r) && (d = !0),
											f > 4 && ue(l, n, 4, s) && (d = !0),
											f > 5 && ue(l, n, 5, a) && (d = !0),
											f > 6 && ue(l, n, 6, o) && (d = !0),
											f > 7 && ue(l, n, 7, i) && (d = !0),
											f > 8 && ue(l, n, 8, c) && (d = !0),
											f > 9 && ue(l, n, 9, p) && (d = !0),
											d)
										) {
											var g = Gu(l, n.nodeIndex),
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
										for (var e = !1, t = 0; t < u.length; t++) Zr(l, n, t, u[t]) && (e = !0);
										return e;
									})(l, n, u);
								case 2:
									return (function(l, n, u) {
										for (var e = n.bindings, t = !1, r = 0; r < u.length; r++) ue(l, n, r, u[r]) && (t = !0);
										if (t) {
											var s = '';
											for (r = 0; r < u.length; r++) s += es(u[r], e[r]);
											s = n.text.prefix + s;
											var a = Hu(l, n.nodeIndex).renderText;
											l.renderer.setValue(a, s);
										}
										return t;
									})(l, n, u);
								case 16384:
									return (function(l, n, u) {
										for (var e = qu(l, n.nodeIndex), t = e.instance, r = !1, s = void 0, a = 0; a < u.length; a++) ne(l, n, a, u[a]) && ((r = !0), (s = jt(l, e, n, a, u[a], s)));
										return s && t.ngOnChanges(s), 65536 & n.flags && zu(l, 256, n.nodeIndex) && t.ngOnInit(), 262144 & n.flags && t.ngDoCheck(), r;
									})(l, n, u);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u) {
										for (var e = n.bindings, t = !1, r = 0; r < u.length; r++) ue(l, n, r, u[r]) && (t = !0);
										if (t) {
											var s = Gu(l, n.nodeIndex),
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
			function ms(l) {
				var n = l.def;
				if (4 & n.nodeFlags)
					for (var u = 0; u < n.nodes.length; u++) {
						var e = n.nodes[u];
						if (4 & e.flags) {
							var t = Bu(l, u).template._projectedViews;
							if (t)
								for (var r = 0; r < t.length; r++) {
									var s = t[r];
									(s.state |= 32), re(s, l);
								}
						} else 0 == (4 & e.childFlags) && (u += e.childCount);
					}
			}
			function bs(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				return (
					0 === u
						? (function(l, n, u, e, t, r, s, a, o, i, c, p) {
								var h = n.bindings.length;
								h > 0 && ee(l, n, 0, u),
									h > 1 && ee(l, n, 1, e),
									h > 2 && ee(l, n, 2, t),
									h > 3 && ee(l, n, 3, r),
									h > 4 && ee(l, n, 4, s),
									h > 5 && ee(l, n, 5, a),
									h > 6 && ee(l, n, 6, o),
									h > 7 && ee(l, n, 7, i),
									h > 8 && ee(l, n, 8, c),
									h > 9 && ee(l, n, 9, p);
						  })(l, n, e, t, r, s, a, o, i, c, p, h)
						: (function(l, n, u) {
								for (var e = 0; e < u.length; e++) ee(l, n, e, u[e]);
						  })(l, n, e),
					!1
				);
			}
			function ys(l, n) {
				if (Zu(l, n.nodeIndex).dirty) throw Uu(Qu.createDebugContext(l, n.nodeIndex), 'Query ' + n.query.id + ' not dirty', 'Query ' + n.query.id + ' dirty', 0 != (1 & l.state));
			}
			function vs(l) {
				if (!(128 & l.state)) {
					if ((_s(l, ws.Destroy), js(l, ws.Destroy), _t(l, 131072), l.disposables)) for (var n = 0; n < l.disposables.length; n++) l.disposables[n]();
					!(function(l) {
						if (16 & l.state) {
							var n = ae(l);
							if (n) {
								var u = n.template._projectedViews;
								u && (Ue(u, u.indexOf(l)), Qu.dirtyParentQueries(l));
							}
						}
					})(l),
						l.renderer.destroyNode &&
							(function(l) {
								for (var n = l.def.nodes.length, u = 0; u < n; u++) {
									var e = l.def.nodes[u];
									1 & e.flags
										? l.renderer.destroyNode(Bu(l, u).renderElement)
										: 2 & e.flags
										? l.renderer.destroyNode(Hu(l, u).renderText)
										: (67108864 & e.flags || 134217728 & e.flags) && Zu(l, u).destroy();
								}
							})(l),
						ce(l) && l.renderer.destroy(),
						(l.state |= 128);
				}
			}
			var ws = (function(l) {
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
			function js(l, n) {
				var u = l.def;
				if (33554432 & u.nodeFlags)
					for (var e = 0; e < u.nodes.length; e++) {
						var t = u.nodes[e];
						33554432 & t.flags ? xs(Bu(l, e).componentView, n) : 0 == (33554432 & t.childFlags) && (e += t.childCount);
					}
			}
			function _s(l, n) {
				var u = l.def;
				if (16777216 & u.nodeFlags)
					for (var e = 0; e < u.nodes.length; e++) {
						var t = u.nodes[e];
						if (16777216 & t.flags) for (var r = Bu(l, e).viewContainer._embeddedViews, s = 0; s < r.length; s++) xs(r[s], n);
						else 0 == (16777216 & t.childFlags) && (e += t.childCount);
					}
			}
			function xs(l, n) {
				var u = l.state;
				switch (n) {
					case ws.CheckNoChanges:
						0 == (128 & u) && (12 == (12 & u) ? ds(l) : 64 & u && ks(l, ws.CheckNoChangesProjectedViews));
						break;
					case ws.CheckNoChangesProjectedViews:
						0 == (128 & u) && (32 & u ? ds(l) : 64 & u && ks(l, n));
						break;
					case ws.CheckAndUpdate:
						0 == (128 & u) && (12 == (12 & u) ? fs(l) : 64 & u && ks(l, ws.CheckAndUpdateProjectedViews));
						break;
					case ws.CheckAndUpdateProjectedViews:
						0 == (128 & u) && (32 & u ? fs(l) : 64 & u && ks(l, n));
						break;
					case ws.Destroy:
						vs(l);
						break;
					case ws.CreateViewNodes:
						hs(l);
				}
			}
			function ks(l, n) {
				_s(l, n), js(l, n);
			}
			function Cs(l, n, u, e) {
				if (l.def.nodeFlags & n && l.def.nodeFlags & u)
					for (var t = l.def.nodes.length, r = 0; r < t; r++) {
						var s = l.def.nodes[r];
						if (s.flags & n && s.flags & u)
							switch ((Qu.setCurrentNode(l, s.nodeIndex), e)) {
								case 0:
									Kr(l, s);
									break;
								case 1:
									ys(l, s);
							}
						(s.childFlags & n && s.childFlags & u) || (r += s.childCount);
					}
			}
			var Ss = !1;
			function Es(l, n, u, e, t, r) {
				var s = t.injector.get(pu);
				return os(Is(l, t, s, n, u), e, r);
			}
			function Ps(l, n, u, e, t, r) {
				var s = t.injector.get(pu),
					a = Is(l, t, new oa(s), n, u),
					o = Fs(e);
				return sa(Ws.create, os, null, [a, o, r]);
			}
			function Is(l, n, u, e, t) {
				var r = n.injector.get(Mn),
					s = n.injector.get(Ln),
					a = u.createRenderer(null, null);
				return { ngModule: n, injector: l, projectableNodes: e, selectorOrNode: t, sanitizer: r, rendererFactory: u, renderer: a, errorHandler: s };
			}
			function Os(l, n, u, e) {
				var t = Fs(u);
				return sa(Ws.create, as, null, [l, n, t, e]);
			}
			function Ts(l, n, u, e) {
				return (u = Ns.get(n.element.componentProvider.provider.token) || Fs(u)), sa(Ws.create, is, null, [l, n, u, e]);
			}
			function Ms(l, n, u, e) {
				return Xe(
					l,
					n,
					u,
					(function(l) {
						var n = (function(l) {
								var n = !1,
									u = !1;
								return 0 === Rs.size
									? { hasOverrides: n, hasDeprecatedOverrides: u }
									: (l.providers.forEach(function(l) {
											var e = Rs.get(l.token);
											3840 & l.flags && e && ((n = !0), (u = u || e.deprecatedBehavior));
									  }),
									  l.modules.forEach(function(l) {
											As.forEach(function(e, t) {
												wl(t).providedIn === l && ((n = !0), (u = u || e.deprecatedBehavior));
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
										var t = Rs.get(e.token);
										t && ((e.flags = (-3841 & e.flags) | t.flags), (e.deps = fe(t.deps)), (e.value = t.value));
									}
									if (As.size > 0) {
										var r = new Set(l.modules);
										As.forEach(function(n, e) {
											if (r.has(wl(e).providedIn)) {
												var t = { token: e, flags: n.flags | (u ? 4096 : 0), deps: fe(n.deps), value: n.value, index: l.providers.length };
												l.providers.push(t), (l.providersByKey[Yu(e)] = t);
											}
										});
									}
							  })(
									(l = l.factory(function() {
										return Wu;
									}))
							  ),
							  l)
							: l;
					})(e)
				);
			}
			var Rs = new Map(),
				As = new Map(),
				Ns = new Map();
			function Ds(l) {
				var n;
				Rs.set(l.token, l), 'function' == typeof l.token && (n = wl(l.token)) && 'function' == typeof n.providedIn && As.set(l.token, l);
			}
			function Us(l, n) {
				var u = be(n.viewDefFactory),
					e = be(u.nodes[0].element.componentView);
				Ns.set(l, e);
			}
			function Ls() {
				Rs.clear(), As.clear(), Ns.clear();
			}
			function Fs(l) {
				if (0 === Rs.size) return l;
				var n = (function(l) {
					for (var n = [], u = null, e = 0; e < l.nodes.length; e++) {
						var t = l.nodes[e];
						1 & t.flags && (u = t), u && 3840 & t.flags && Rs.has(t.provider.token) && (n.push(u.nodeIndex), (u = null));
					}
					return n;
				})(l);
				if (0 === n.length) return l;
				l = l.factory(function() {
					return Wu;
				});
				for (var u = 0; u < n.length; u++) e(l, n[u]);
				return l;
				function e(l, n) {
					for (var u = n + 1; u < l.nodes.length; u++) {
						var e = l.nodes[u];
						if (1 & e.flags) return;
						if (3840 & e.flags) {
							var t = e.provider,
								r = Rs.get(t.token);
							r && ((e.flags = (-3841 & e.flags) | r.flags), (t.deps = fe(r.deps)), (t.value = r.value));
						}
					}
				}
			}
			function Vs(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				var d = l.def.nodes[n];
				return gs(l, d, u, e, t, r, s, a, o, i, c, p, h), 224 & d.flags ? Gu(l, n).value : void 0;
			}
			function zs(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				var d = l.def.nodes[n];
				return bs(l, d, u, e, t, r, s, a, o, i, c, p, h), 224 & d.flags ? Gu(l, n).value : void 0;
			}
			function Hs(l) {
				return sa(Ws.detectChanges, fs, null, [l]);
			}
			function Bs(l) {
				return sa(Ws.checkNoChanges, ds, null, [l]);
			}
			function qs(l) {
				return sa(Ws.destroy, vs, null, [l]);
			}
			var Gs,
				Zs,
				Qs,
				Ws = (function(l) {
					return (
						(l[(l.create = 0)] = 'create'),
						(l[(l.detectChanges = 1)] = 'detectChanges'),
						(l[(l.checkNoChanges = 2)] = 'checkNoChanges'),
						(l[(l.destroy = 3)] = 'destroy'),
						(l[(l.handleEvent = 4)] = 'handleEvent'),
						l
					);
				})({});
			function Ks(l, n) {
				(Zs = l), (Qs = n);
			}
			function Ys(l, n, u, e) {
				return Ks(l, n), sa(Ws.handleEvent, l.def.handleEvent, null, [l, n, u, e]);
			}
			function Js(l, n) {
				if (128 & l.state) throw Fu(Ws[Gs]);
				return (
					Ks(l, na(l, 0)),
					l.def.updateDirectives(function(l, u, e) {
						for (var t = [], r = 3; r < arguments.length; r++) t[r - 3] = arguments[r];
						var s = l.def.nodes[u];
						return 0 === n ? Xs(l, s, e, t) : la(l, s, e, t), 16384 & s.flags && Ks(l, na(l, u)), 224 & s.flags ? Gu(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function $s(l, n) {
				if (128 & l.state) throw Fu(Ws[Gs]);
				return (
					Ks(l, ua(l, 0)),
					l.def.updateRenderer(function(l, u, e) {
						for (var t = [], r = 3; r < arguments.length; r++) t[r - 3] = arguments[r];
						var s = l.def.nodes[u];
						return 0 === n ? Xs(l, s, e, t) : la(l, s, e, t), 3 & s.flags && Ks(l, ua(l, u)), 224 & s.flags ? Gu(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function Xs(l, n, u, e) {
				if (gs.apply(void 0, c([l, n, u], e))) {
					var t = 1 === u ? e[0] : e;
					if (16384 & n.flags) {
						for (var r = {}, s = 0; s < n.bindings.length; s++) {
							var a = n.bindings[s],
								o = t[s];
							8 & a.flags &&
								(r[
									((d = a.nonMinifiedName),
									'ng-reflect-' +
										d.replace(/[$@]/g, '_').replace(Fn, function() {
											for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
											return '-' + l[1].toLowerCase();
										}))
								] = Vn(o));
						}
						var i = n.parent,
							p = Bu(l, i.nodeIndex).renderElement;
						if (i.element.name) for (var h in r) null != (o = r[h]) ? l.renderer.setAttribute(p, h, o) : l.renderer.removeAttribute(p, h);
						else l.renderer.setValue(p, 'bindings=' + JSON.stringify(r, null, 2));
					}
				}
				var d;
			}
			function la(l, n, u, e) {
				bs.apply(void 0, c([l, n, u], e));
			}
			function na(l, n) {
				for (var u = n; u < l.def.nodes.length; u++) {
					var e = l.def.nodes[u];
					if (16384 & e.flags && e.bindings && e.bindings.length) return u;
				}
				return null;
			}
			function ua(l, n) {
				for (var u = n; u < l.def.nodes.length; u++) {
					var e = l.def.nodes[u];
					if (3 & e.flags && e.bindings && e.bindings.length) return u;
				}
				return null;
			}
			var ea = (function() {
				function l(l, n) {
					(this.view = l), (this.nodeIndex = n), null == n && (this.nodeIndex = n = 0), (this.nodeDef = l.def.nodes[n]);
					for (var u = this.nodeDef, e = l; u && 0 == (1 & u.flags); ) u = u.parent;
					if (!u) for (; !u && e; ) (u = oe(e)), (e = e.parent);
					(this.elDef = u), (this.elView = e);
				}
				return (
					Object.defineProperty(l.prototype, 'elOrCompView', {
						get: function() {
							return Bu(this.elView, this.elDef.nodeIndex).componentView || this.view;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return We(this.elView, this.elDef);
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
								ra(this.elView, this.elDef, l);
								for (var n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
									var u = this.elView.def.nodes[n];
									20224 & u.flags && ra(this.elView, u, l), (n += u.childCount);
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
								for (; l && !ce(l); ) l = l.parent;
								return l.parent ? Bu(l.parent, oe(l).nodeIndex) : null;
							})(this.elOrCompView);
							return l ? l.renderElement : void 0;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'renderNode', {
						get: function() {
							return 2 & this.nodeDef.flags ? ie(this.view, this.nodeDef) : ie(this.elView, this.elDef);
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.logError = function(l) {
						for (var n, u, e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
						2 & this.nodeDef.flags ? ((n = this.view.def), (u = this.nodeDef.nodeIndex)) : ((n = this.elView.def), (u = this.elDef.nodeIndex));
						var r = ta(n, u),
							s = -1,
							a = function() {
								var n;
								return ++s === r ? (n = l.error).bind.apply(n, c([l], e)) : Wu;
							};
						n.factory(a), s < r && (l.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), l.error.apply(l, c(e)));
					}),
					l
				);
			})();
			function ta(l, n) {
				for (var u = -1, e = 0; e <= n; e++) 3 & l.nodes[e].flags && u++;
				return u;
			}
			function ra(l, n, u) {
				for (var e in n.references) u[e] = Jr(l, n, n.references[e]);
			}
			function sa(l, n, u, e) {
				var t = Gs,
					r = Zs,
					s = Qs;
				try {
					Gs = l;
					var a = n.apply(u, e);
					return (Zs = r), (Qs = s), (Gs = t), a;
				} catch (o) {
					if (Nn(o) || !Zs) throw o;
					throw (function(l, n) {
						return l instanceof Error || (l = new Error(l.toString())), Lu(l, n), l;
					})(o, aa());
				}
			}
			function aa() {
				return Zs ? new ea(Zs, Qs) : null;
			}
			var oa = (function() {
					function l(l) {
						this.delegate = l;
					}
					return (
						(l.prototype.createRenderer = function(l, n) {
							return new ia(this.delegate.createRenderer(l, n));
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
				ia = (function() {
					function l(l) {
						(this.delegate = l), (this.debugContextFactory = aa), (this.data = this.delegate.data);
					}
					return (
						(l.prototype.createDebugContext = function(l) {
							return this.debugContextFactory(l);
						}),
						(l.prototype.destroyNode = function(l) {
							!(function(l) {
								Mr.delete(l.nativeNode);
							})(Rr(l)),
								this.delegate.destroyNode && this.delegate.destroyNode(l);
						}),
						(l.prototype.destroy = function() {
							this.delegate.destroy();
						}),
						(l.prototype.createElement = function(l, n) {
							var u = this.delegate.createElement(l, n),
								e = this.createDebugContext(u);
							if (e) {
								var t = new Tr(u, null, e);
								(t.name = l), Ar(t);
							}
							return u;
						}),
						(l.prototype.createComment = function(l) {
							var n = this.delegate.createComment(l),
								u = this.createDebugContext(n);
							return u && Ar(new Or(n, null, u)), n;
						}),
						(l.prototype.createText = function(l) {
							var n = this.delegate.createText(l),
								u = this.createDebugContext(n);
							return u && Ar(new Or(n, null, u)), n;
						}),
						(l.prototype.appendChild = function(l, n) {
							var u = Rr(l),
								e = Rr(n);
							u && e && u instanceof Tr && u.addChild(e), this.delegate.appendChild(l, n);
						}),
						(l.prototype.insertBefore = function(l, n, u) {
							var e = Rr(l),
								t = Rr(n),
								r = Rr(u);
							e && t && e instanceof Tr && e.insertBefore(r, t), this.delegate.insertBefore(l, n, u);
						}),
						(l.prototype.removeChild = function(l, n) {
							var u = Rr(l),
								e = Rr(n);
							u && e && u instanceof Tr && u.removeChild(e), this.delegate.removeChild(l, n);
						}),
						(l.prototype.selectRootElement = function(l, n) {
							var u = this.delegate.selectRootElement(l, n),
								e = aa();
							return e && Ar(new Tr(u, null, e)), u;
						}),
						(l.prototype.setAttribute = function(l, n, u, e) {
							var t = Rr(l);
							t && t instanceof Tr && (t.attributes[e ? e + ':' + n : n] = u), this.delegate.setAttribute(l, n, u, e);
						}),
						(l.prototype.removeAttribute = function(l, n, u) {
							var e = Rr(l);
							e && e instanceof Tr && (e.attributes[u ? u + ':' + n : n] = null), this.delegate.removeAttribute(l, n, u);
						}),
						(l.prototype.addClass = function(l, n) {
							var u = Rr(l);
							u && u instanceof Tr && (u.classes[n] = !0), this.delegate.addClass(l, n);
						}),
						(l.prototype.removeClass = function(l, n) {
							var u = Rr(l);
							u && u instanceof Tr && (u.classes[n] = !1), this.delegate.removeClass(l, n);
						}),
						(l.prototype.setStyle = function(l, n, u, e) {
							var t = Rr(l);
							t && t instanceof Tr && (t.styles[n] = u), this.delegate.setStyle(l, n, u, e);
						}),
						(l.prototype.removeStyle = function(l, n, u) {
							var e = Rr(l);
							e && e instanceof Tr && (e.styles[n] = null), this.delegate.removeStyle(l, n, u);
						}),
						(l.prototype.setProperty = function(l, n, u) {
							var e = Rr(l);
							e && e instanceof Tr && (e.properties[n] = u), this.delegate.setProperty(l, n, u);
						}),
						(l.prototype.listen = function(l, n, u) {
							if ('string' != typeof l) {
								var e = Rr(l);
								e && e.listeners.push(new Ir(n, u));
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
			function ca(l, n, u) {
				return new pa(l, n, u);
			}
			var pa = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t.moduleType = n), (t._bootstrapComponents = u), (t._ngModuleDefFactory = e), t;
					}
					return (
						t(n, l),
						(n.prototype.create = function(l) {
							!(function() {
								if (!Ss) {
									Ss = !0;
									var l = on()
										? {
												setCurrentNode: Ks,
												createRootView: Ps,
												createEmbeddedView: Os,
												createComponentView: Ts,
												createNgModuleRef: Ms,
												overrideProvider: Ds,
												overrideComponentView: Us,
												clearOverrides: Ls,
												checkAndUpdateView: Hs,
												checkNoChangesView: Bs,
												destroyView: qs,
												createDebugContext: function(l, n) {
													return new ea(l, n);
												},
												handleEvent: Ys,
												updateDirectives: Js,
												updateRenderer: $s
										  }
										: {
												setCurrentNode: function() {},
												createRootView: Es,
												createEmbeddedView: as,
												createComponentView: is,
												createNgModuleRef: Xe,
												overrideProvider: Wu,
												overrideComponentView: Wu,
												clearOverrides: Wu,
												checkAndUpdateView: fs,
												checkNoChangesView: ds,
												destroyView: vs,
												createDebugContext: function(l, n) {
													return new ea(l, n);
												},
												handleEvent: function(l, n, u, e) {
													return l.def.handleEvent(l, n, u, e);
												},
												updateDirectives: function(l, n) {
													return l.def.updateDirectives(0 === n ? Vs : zs, l);
												},
												updateRenderer: function(l, n) {
													return l.def.updateRenderer(0 === n ? Vs : zs, l);
												}
										  };
									(Qu.setCurrentNode = l.setCurrentNode),
										(Qu.createRootView = l.createRootView),
										(Qu.createEmbeddedView = l.createEmbeddedView),
										(Qu.createComponentView = l.createComponentView),
										(Qu.createNgModuleRef = l.createNgModuleRef),
										(Qu.overrideProvider = l.overrideProvider),
										(Qu.overrideComponentView = l.overrideComponentView),
										(Qu.clearOverrides = l.clearOverrides),
										(Qu.checkAndUpdateView = l.checkAndUpdateView),
										(Qu.checkNoChangesView = l.checkNoChangesView),
										(Qu.destroyView = l.destroyView),
										(Qu.resolveDep = vt),
										(Qu.createDebugContext = l.createDebugContext),
										(Qu.handleEvent = l.handleEvent),
										(Qu.updateDirectives = l.updateDirectives),
										(Qu.updateRenderer = l.updateRenderer),
										(Qu.dirtyParentQueries = Wr);
								}
							})();
							var n = (function(l) {
								var n = Array.from(l.providers),
									u = Array.from(l.modules),
									e = {};
								for (var t in l.providersByKey) e[t] = l.providersByKey[t];
								return { factory: l.factory, isRoot: l.isRoot, providers: n, modules: u, providersByKey: e };
							})(be(this._ngModuleDefFactory));
							return Qu.createNgModuleRef(this.moduleType, l || Zl.NULL, this._bootstrapComponents, n);
						}),
						n
					);
				})(su),
				ha = (function() {
					return function() {};
				})(),
				da = (function() {
					return function() {};
				})(),
				fa = (function() {
					return function() {};
				})(),
				ga = new Ml('Location Initialized'),
				ma = (function() {
					return function() {};
				})(),
				ba = new Ml('appBaseHref'),
				ya = (function() {
					function l(l, u) {
						var e = this;
						(this._subject = new Ot()), (this._urlChangeListeners = []), (this._platformStrategy = l);
						var t = this._platformStrategy.getBaseHref();
						(this._platformLocation = u),
							(this._baseHref = n.stripTrailingSlash(va(t))),
							this._platformStrategy.onPopState(function(l) {
								e._subject.emit({ url: e.path(!0), pop: !0, state: l.state, type: l.type });
							});
					}
					var n;
					return (
						(n = l),
						(l.prototype.path = function(l) {
							return void 0 === l && (l = !1), this.normalize(this._platformStrategy.path(l));
						}),
						(l.prototype.getState = function() {
							return this._platformLocation.getState();
						}),
						(l.prototype.isCurrentPathEqualTo = function(l, u) {
							return void 0 === u && (u = ''), this.path() == this.normalize(l + n.normalizeQueryParams(u));
						}),
						(l.prototype.normalize = function(l) {
							return n.stripTrailingSlash(
								(function(l, n) {
									return l && n.startsWith(l) ? n.substring(l.length) : n;
								})(this._baseHref, va(l))
							);
						}),
						(l.prototype.prepareExternalUrl = function(l) {
							return l && '/' !== l[0] && (l = '/' + l), this._platformStrategy.prepareExternalUrl(l);
						}),
						(l.prototype.go = function(l, u, e) {
							void 0 === u && (u = ''),
								void 0 === e && (e = null),
								this._platformStrategy.pushState(e, '', l, u),
								this._notifyUrlChangeListeners(this.prepareExternalUrl(l + n.normalizeQueryParams(u)), e);
						}),
						(l.prototype.replaceState = function(l, u, e) {
							void 0 === u && (u = ''),
								void 0 === e && (e = null),
								this._platformStrategy.replaceState(e, '', l, u),
								this._notifyUrlChangeListeners(this.prepareExternalUrl(l + n.normalizeQueryParams(u)), e);
						}),
						(l.prototype.forward = function() {
							this._platformStrategy.forward();
						}),
						(l.prototype.back = function() {
							this._platformStrategy.back();
						}),
						(l.prototype.onUrlChange = function(l) {
							var n = this;
							this._urlChangeListeners.push(l),
								this.subscribe(function(l) {
									n._notifyUrlChangeListeners(l.url, l.state);
								});
						}),
						(l.prototype._notifyUrlChangeListeners = function(l, n) {
							void 0 === l && (l = ''),
								this._urlChangeListeners.forEach(function(u) {
									return u(l, n);
								});
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
			function va(l) {
				return l.replace(/\/index.html$/, '');
			}
			var wa = (function(l) {
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
							var n = ya.joinWithSlash(this._baseHref, l);
							return n.length > 0 ? '#' + n : n;
						}),
						(n.prototype.pushState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + ya.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.pushState(l, n, t);
						}),
						(n.prototype.replaceState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + ya.normalizeQueryParams(e));
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
				})(ma),
				ja = (function(l) {
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
							return ya.joinWithSlash(this._baseHref, l);
						}),
						(n.prototype.path = function(l) {
							void 0 === l && (l = !1);
							var n = this._platformLocation.pathname + ya.normalizeQueryParams(this._platformLocation.search),
								u = this._platformLocation.hash;
							return u && l ? '' + n + u : n;
						}),
						(n.prototype.pushState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + ya.normalizeQueryParams(e));
							this._platformLocation.pushState(l, n, t);
						}),
						(n.prototype.replaceState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + ya.normalizeQueryParams(e));
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
				})(ma),
				_a = (function(l) {
					return (l[(l.Zero = 0)] = 'Zero'), (l[(l.One = 1)] = 'One'), (l[(l.Two = 2)] = 'Two'), (l[(l.Few = 3)] = 'Few'), (l[(l.Many = 4)] = 'Many'), (l[(l.Other = 5)] = 'Other'), l;
				})({}),
				xa = new Ml('UseV4Plurals'),
				ka = (function() {
					return function() {};
				})(),
				Ca = (function(l) {
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
													u = St[n];
												if (u) return u;
												var e = n.split('-')[0];
												if ((u = St[e])) return u;
												if ('en' === e) return It;
												throw new Error('Missing locale data for the locale "' + l + '".');
											})(l)[Et.PluralCase];
									  })(n || this.locale)(l)
							) {
								case _a.Zero:
									return 'zero';
								case _a.One:
									return 'one';
								case _a.Two:
									return 'two';
								case _a.Few:
									return 'few';
								case _a.Many:
									return 'many';
								default:
									return 'other';
							}
						}),
						n
					);
				})(ka),
				Sa = (function() {
					return function() {};
				})(),
				Ea = (function() {
					function l(l, n, u, e) {
						(this._iterableDiffers = l), (this._keyValueDiffers = n), (this._ngEl = u), (this._renderer = e), (this._initialClasses = []);
					}
					return (
						(l.prototype.getValue = function() {
							return null;
						}),
						(l.prototype.setClass = function(l) {
							this._removeClasses(this._initialClasses),
								(this._initialClasses = 'string' == typeof l ? l.split(/\s+/) : []),
								this._applyClasses(this._initialClasses),
								this._applyClasses(this._rawClass);
						}),
						(l.prototype.setNgClass = function(l) {
							this._removeClasses(this._rawClass),
								this._applyClasses(this._initialClasses),
								(this._iterableDiffer = null),
								(this._keyValueDiffer = null),
								(this._rawClass = 'string' == typeof l ? l.split(/\s+/) : l),
								this._rawClass &&
									(Zn(this._rawClass)
										? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
										: (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
						}),
						(l.prototype.applyChanges = function() {
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
								if ('string' != typeof l.item) throw new Error('NgClass can only toggle CSS classes expressed as strings, got ' + _l(l.item));
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
				Pa = (function(l) {
					function n(n) {
						return l.call(this, n) || this;
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'klass', {
							set: function(l) {
								this._delegate.setClass(l);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'ngClass', {
							set: function(l) {
								this._delegate.setNgClass(l);
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.ngDoCheck = function() {
							this._delegate.applyChanges();
						}),
						n
					);
				})(
					(function() {
						function l(l) {
							this._delegate = l;
						}
						return (
							(l.prototype.getValue = function() {
								return this._delegate.getValue();
							}),
							(l.ngDirectiveDef = void 0),
							l
						);
					})()
				),
				Ia = (function() {
					function l(l, n) {
						(this._viewContainer = l),
							(this._context = new Oa()),
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
								Ta('ngIfThen', l), (this._thenTemplateRef = l), (this._thenViewRef = null), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'ngIfElse', {
							set: function(l) {
								Ta('ngIfElse', l), (this._elseTemplateRef = l), (this._elseViewRef = null), this._updateView();
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
						l
					);
				})(),
				Oa = (function() {
					return function() {
						(this.$implicit = null), (this.ngIf = null);
					};
				})();
			function Ta(l, n) {
				if (n && !n.createEmbeddedView) throw new Error(l + " must be a TemplateRef, but received '" + _l(n) + "'.");
			}
			var Ma = (function() {
					return function() {};
				})(),
				Ra = new Ml('DocumentToken'),
				Aa = 'server',
				Na = (function() {
					function l() {}
					return (
						(l.ngInjectableDef = vl({
							token: l,
							providedIn: 'root',
							factory: function() {
								return new Da(zl(Ra), window, zl(Ln));
							}
						})),
						l
					);
				})(),
				Da = (function() {
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
			function Ua() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				var u = l[l.length - 1];
				return U(u) ? (l.pop(), Y(l, u)) : el(l);
			}
			var La = (function(l) {
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
			function Fa() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			Fa.prototype = Object.create(Error.prototype);
			var Va = Fa,
				za = {},
				Ha = (function() {
					function l(l) {
						this.resultSelector = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Ba(l, this.resultSelector));
						}),
						l
					);
				})(),
				Ba = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.resultSelector = u), (e.active = 0), (e.values = []), (e.observables = []), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							this.values.push(za), this.observables.push(l);
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
								s = this.toRespond ? (r[u] === za ? --this.toRespond : this.toRespond) : 0;
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
				qa = new I(function(l) {
					return l.complete();
				});
			function Ga(l) {
				return l
					? (function(l) {
							return new I(function(n) {
								return l.schedule(function() {
									return n.complete();
								});
							});
					  })(l)
					: qa;
			}
			function Za(l) {
				return new I(function(n) {
					var u;
					try {
						u = l();
					} catch (e) {
						return void n.error(e);
					}
					return (u ? J(u) : Ga()).subscribe(n);
				});
			}
			function Qa() {
				return ul(1);
			}
			function Wa(l, n) {
				return function(u) {
					return u.lift(new Ka(l, n));
				};
			}
			var Ka = (function() {
					function l(l, n) {
						(this.predicate = l), (this.thisArg = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Ya(l, this.predicate, this.thisArg));
						}),
						l
					);
				})(),
				Ya = (function(l) {
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
			function Ja() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			Ja.prototype = Object.create(Error.prototype);
			var $a = Ja;
			function Xa(l) {
				return function(n) {
					return 0 === l ? Ga() : n.lift(new lo(l));
				};
			}
			var lo = (function() {
					function l(l) {
						if (((this.total = l), this.total < 0)) throw new $a();
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new no(l, this.total));
						}),
						l
					);
				})(),
				no = (function(l) {
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
			function uo(l) {
				return (
					void 0 === l && (l = ro),
					function(n) {
						return n.lift(new eo(l));
					}
				);
			}
			var eo = (function() {
					function l(l) {
						this.errorFactory = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new to(l, this.errorFactory));
						}),
						l
					);
				})(),
				to = (function(l) {
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
			function ro() {
				return new Va();
			}
			function so(l) {
				return (
					void 0 === l && (l = null),
					function(n) {
						return n.lift(new ao(l));
					}
				);
			}
			var ao = (function() {
					function l(l) {
						this.defaultValue = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new oo(l, this.defaultValue));
						}),
						l
					);
				})(),
				oo = (function(l) {
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
			function io(l, n) {
				var u = arguments.length >= 2;
				return function(e) {
					return e.pipe(
						l
							? Wa(function(n, u) {
									return l(n, u, e);
							  })
							: nl,
						Xa(1),
						u
							? so(n)
							: uo(function() {
									return new Va();
							  })
					);
				};
			}
			function co(l) {
				return function(n) {
					var u = new po(l),
						e = n.lift(u);
					return (u.caught = e);
				};
			}
			var po = (function() {
					function l(l) {
						this.selector = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new ho(l, this.selector, this.caught));
						}),
						l
					);
				})(),
				ho = (function(l) {
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
			function fo(l) {
				return function(n) {
					return 0 === l ? Ga() : n.lift(new go(l));
				};
			}
			var go = (function() {
					function l(l) {
						if (((this.total = l), this.total < 0)) throw new $a();
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new mo(l, this.total));
						}),
						l
					);
				})(),
				mo = (function(l) {
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
			function bo(l, n) {
				var u = arguments.length >= 2;
				return function(e) {
					return e.pipe(
						l
							? Wa(function(n, u) {
									return l(n, u, e);
							  })
							: nl,
						fo(1),
						u
							? so(n)
							: uo(function() {
									return new Va();
							  })
					);
				};
			}
			var yo = (function() {
					function l(l, n, u) {
						(this.predicate = l), (this.thisArg = n), (this.source = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new vo(l, this.predicate, this.thisArg, this.source));
						}),
						l
					);
				})(),
				vo = (function(l) {
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
			function wo(l, n) {
				return 'function' == typeof n
					? function(u) {
							return u.pipe(
								wo(function(u, e) {
									return J(l(u, e)).pipe(
										Q(function(l, t) {
											return n(u, l, e, t);
										})
									);
								})
							);
					  }
					: function(n) {
							return n.lift(new jo(l));
					  };
			}
			var jo = (function() {
					function l(l) {
						this.project = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new _o(l, this.project));
						}),
						l
					);
				})(),
				_o = (function(l) {
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
			function xo() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				return Qa()(Ua.apply(void 0, l));
			}
			function ko(l, n) {
				var u = !1;
				return (
					arguments.length >= 2 && (u = !0),
					function(e) {
						return e.lift(new Co(l, n, u));
					}
				);
			}
			var Co = (function() {
					function l(l, n, u) {
						void 0 === u && (u = !1), (this.accumulator = l), (this.seed = n), (this.hasSeed = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new So(l, this.accumulator, this.seed, this.hasSeed));
						}),
						l
					);
				})(),
				So = (function(l) {
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
			function Eo(l, n) {
				return $(l, n, 1);
			}
			function Po(l, n, u) {
				return function(e) {
					return e.lift(new Io(l, n, u));
				};
			}
			var Io = (function() {
					function l(l, n, u) {
						(this.nextOrObserver = l), (this.error = n), (this.complete = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Oo(l, this.nextOrObserver, this.error, this.complete));
						}),
						l
					);
				})(),
				Oo = (function(l) {
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
				To = (function() {
					function l(l) {
						this.callback = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Mo(l, this.callback));
						}),
						l
					);
				})(),
				Mo = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return e.add(new m(u)), e;
					}
					return t(n, l), n;
				})(x),
				Ro = null;
			function Ao() {
				return Ro;
			}
			var No,
				Do = (function(l) {
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
				),
				Uo = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				Lo = {
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
				Fo = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' },
				Vo = (function() {
					if (Tl.Node)
						return (
							Tl.Node.prototype.contains ||
							function(l) {
								return !!(16 & this.compareDocumentPosition(l));
							}
						);
				})(),
				zo = (function(l) {
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
							(l = new n()), Ro || (Ro = l);
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
								return Uo;
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.contains = function(l, n) {
							return Vo.call(l, n);
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
								n.startsWith('U+') && ((n = String.fromCharCode(parseInt(n.substring(2), 16))), 3 === l.location && Fo.hasOwnProperty(n) && (n = Fo[n]));
							}
							return Lo[n] || n;
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
								u = Ho || (Ho = document.querySelector('base')) ? Ho.getAttribute('href') : null;
							return null == u ? null : ((n = u), No || (No = document.createElement('a')), No.setAttribute('href', n), '/' === No.pathname.charAt(0) ? No.pathname : '/' + No.pathname);
						}),
						(n.prototype.resetBaseElement = function() {
							Ho = null;
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
				})(Do),
				Ho = null;
			function Bo() {
				return !!window.history.pushState;
			}
			var qo = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), u._init(), u;
					}
					var u;
					return (
						t(n, l),
						(n.prototype._init = function() {
							(this.location = Ao().getLocation()), (this._history = Ao().getHistory());
						}),
						(n.prototype.getBaseHrefFromDOM = function() {
							return Ao().getBaseHref(this._doc);
						}),
						(n.prototype.onPopState = function(l) {
							Ao()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', l, !1);
						}),
						(n.prototype.onHashChange = function(l) {
							Ao()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('hashchange', l, !1);
						}),
						Object.defineProperty(n.prototype, 'href', {
							get: function() {
								return this.location.href;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'protocol', {
							get: function() {
								return this.location.protocol;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'hostname', {
							get: function() {
								return this.location.hostname;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'port', {
							get: function() {
								return this.location.port;
							},
							enumerable: !0,
							configurable: !0
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
							Bo() ? this._history.pushState(l, n, u) : (this.location.hash = u);
						}),
						(n.prototype.replaceState = function(l, n, u) {
							Bo() ? this._history.replaceState(l, n, u) : (this.location.hash = u);
						}),
						(n.prototype.forward = function() {
							this._history.forward();
						}),
						(n.prototype.back = function() {
							this._history.back();
						}),
						(n.prototype.getState = function() {
							return this._history.state;
						}),
						s(
							[
								((u = dl(Ra)),
								function(l, n) {
									u(l, n, 0);
								}),
								a('design:paramtypes', [Object])
							],
							n
						)
					);
				})(fa),
				Go = new Ml('TRANSITION_ID'),
				Zo = [
					{
						provide: Rt,
						useFactory: function(l, n, u) {
							return function() {
								u.get(At).donePromise.then(function() {
									var u = Ao();
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
						deps: [Go, Ra, Zl],
						multi: !0
					}
				],
				Qo = (function() {
					function l() {}
					return (
						(l.init = function() {
							var n;
							(n = new l()), (gr = n);
						}),
						(l.prototype.addToWindow = function(l) {
							(Tl.getAngularTestability = function(n, u) {
								void 0 === u && (u = !0);
								var e = l.findTestabilityInTree(n, u);
								if (null == e) throw new Error('Could not find testability for element.');
								return e;
							}),
								(Tl.getAllAngularTestabilities = function() {
									return l.getAllTestabilities();
								}),
								(Tl.getAllAngularRootElements = function() {
									return l.getAllRootElements();
								}),
								Tl.frameworkStabilizers || (Tl.frameworkStabilizers = []),
								Tl.frameworkStabilizers.push(function(l) {
									var n = Tl.getAllAngularTestabilities(),
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
							return null != e ? e : u ? (Ao().isShadowRoot(n) ? this.findTestabilityInTree(l, Ao().getHost(n), !0) : this.findTestabilityInTree(l, Ao().parentElement(n), !0)) : null;
						}),
						l
					);
				})();
			function Wo(l, n) {
				('undefined' != typeof COMPILED && COMPILED) || ((Tl.ng = Tl.ng || {})[l] = n);
			}
			var Ko = (function() {
				return { ApplicationRef: _r, NgZone: rr };
			})();
			function Yo(l) {
				return Rr(l);
			}
			var Jo = new Ml('EventManagerPlugins'),
				$o = (function() {
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
				Xo = (function() {
					function l(l) {
						this._doc = l;
					}
					return (
						(l.prototype.addGlobalEventListener = function(l, n, u) {
							var e = Ao().getGlobalEventTarget(this._doc, l);
							if (!e) throw new Error('Unsupported event target ' + e + ' for event ' + n);
							return this.addEventListener(e, n, u);
						}),
						l
					);
				})(),
				li = (function() {
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
				ni = (function(l) {
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
								return Ao().remove(l);
							});
						}),
						n
					);
				})(li),
				ui = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/'
				},
				ei = /%COMP%/g,
				ti = '_nghost-%COMP%',
				ri = '_ngcontent-%COMP%';
			function si(l, n, u) {
				for (var e = 0; e < n.length; e++) {
					var t = n[e];
					Array.isArray(t) ? si(l, t, u) : ((t = t.replace(ei, l)), u.push(t));
				}
				return u;
			}
			function ai(l) {
				return function(n) {
					!1 === l(n) && (n.preventDefault(), (n.returnValue = !1));
				};
			}
			var oi = (function() {
					function l(l, n, u) {
						(this.eventManager = l), (this.sharedStylesHost = n), (this.appId = u), (this.rendererByCompId = new Map()), (this.defaultRenderer = new ii(l));
					}
					return (
						(l.prototype.createRenderer = function(l, n) {
							if (!l || !n) return this.defaultRenderer;
							switch (n.encapsulation) {
								case tn.Emulated:
									var u = this.rendererByCompId.get(n.id);
									return u || ((u = new hi(this.eventManager, this.sharedStylesHost, n, this.appId)), this.rendererByCompId.set(n.id, u)), u.applyToHost(l), u;
								case tn.Native:
								case tn.ShadowDom:
									return new di(this.eventManager, this.sharedStylesHost, l, n);
								default:
									if (!this.rendererByCompId.has(n.id)) {
										var e = si(n.id, n.styles, []);
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
				ii = (function() {
					function l(l) {
						(this.eventManager = l), (this.data = Object.create(null));
					}
					return (
						(l.prototype.destroy = function() {}),
						(l.prototype.createElement = function(l, n) {
							return n ? document.createElementNS(ui[n] || n, l) : document.createElement(l);
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
								var t = ui[e];
								t ? l.setAttributeNS(t, n, u) : l.setAttribute(n, u);
							} else l.setAttribute(n, u);
						}),
						(l.prototype.removeAttribute = function(l, n, u) {
							if (u) {
								var e = ui[u];
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
							e & hu.DashCase ? l.style.setProperty(n, u, e & hu.Important ? 'important' : '') : (l.style[n] = u);
						}),
						(l.prototype.removeStyle = function(l, n, u) {
							u & hu.DashCase ? l.style.removeProperty(n) : (l.style[n] = '');
						}),
						(l.prototype.setProperty = function(l, n, u) {
							pi(n, 'property'), (l[n] = u);
						}),
						(l.prototype.setValue = function(l, n) {
							l.nodeValue = n;
						}),
						(l.prototype.listen = function(l, n, u) {
							return pi(n, 'listener'), 'string' == typeof l ? this.eventManager.addGlobalEventListener(l, n, ai(u)) : this.eventManager.addEventListener(l, n, ai(u));
						}),
						l
					);
				})(),
				ci = (function() {
					return '@'.charCodeAt(0);
				})();
			function pi(l, n) {
				if (l.charCodeAt(0) === ci) throw new Error('Found the synthetic ' + n + ' ' + l + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
			}
			var hi = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						r.component = e;
						var s = si(t + '-' + e.id, e.styles, []);
						return u.addStyles(s), (r.contentAttr = ri.replace(ei, t + '-' + e.id)), (r.hostAttr = ti.replace(ei, t + '-' + e.id)), r;
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
				})(ii),
				di = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						(r.sharedStylesHost = u),
							(r.hostEl = e),
							(r.component = t),
							(r.shadowRoot = t.encapsulation === tn.ShadowDom ? e.attachShadow({ mode: 'open' }) : e.createShadowRoot()),
							r.sharedStylesHost.addHost(r.shadowRoot);
						for (var s = si(t.id, t.styles, []), a = 0; a < s.length; a++) {
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
				})(ii),
				fi = (function() {
					return (
						('undefined' != typeof Zone && Zone.__symbol__) ||
						function(l) {
							return '__zone_symbol__' + l;
						}
					);
				})(),
				gi = fi('addEventListener'),
				mi = fi('removeEventListener'),
				bi = {},
				yi = '__zone_symbol__propagationStopped',
				vi = (function() {
					var l = 'undefined' != typeof Zone && Zone[fi('BLACK_LISTED_EVENTS')];
					if (l) {
						var n = {};
						return (
							l.forEach(function(l) {
								n[l] = l;
							}),
							n
						);
					}
				})(),
				wi = function(l) {
					return !!vi && vi.hasOwnProperty(l);
				},
				ji = function(l) {
					var n = bi[l.type];
					if (n) {
						var u = this[n];
						if (u) {
							var e = [l];
							if (1 === u.length) return (s = u[0]).zone !== Zone.current ? s.zone.run(s.handler, this, e) : s.handler.apply(this, e);
							for (var t = u.slice(), r = 0; r < t.length && !0 !== l[yi]; r++) {
								var s;
								(s = t[r]).zone !== Zone.current ? s.zone.run(s.handler, this, e) : s.handler.apply(this, e);
							}
						}
					}
				},
				_i = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						return (
							(t.ngZone = u),
							(e &&
								(function(l) {
									return l === Aa;
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
									this && (this[yi] = !0), l && l.apply(this, arguments);
								};
							}
						}),
						(n.prototype.supports = function(l) {
							return !0;
						}),
						(n.prototype.addEventListener = function(l, n, u) {
							var e = this,
								t = u;
							if (!l[gi] || (rr.isInAngularZone() && !wi(n))) l.addEventListener(n, t, !1);
							else {
								var r = bi[n];
								r || (r = bi[n] = fi('ANGULAR' + n + 'FALSE'));
								var s = l[r],
									a = s && s.length > 0;
								s || (s = l[r] = []);
								var o = wi(n) ? Zone.root : Zone.current;
								if (0 === s.length) s.push({ zone: o, handler: t });
								else {
									for (var i = !1, c = 0; c < s.length; c++)
										if (s[c].handler === t) {
											i = !0;
											break;
										}
									i || s.push({ zone: o, handler: t });
								}
								a || l[gi](n, ji, !1);
							}
							return function() {
								return e.removeEventListener(l, n, t);
							};
						}),
						(n.prototype.removeEventListener = function(l, n, u) {
							var e = l[mi];
							if (!e) return l.removeEventListener.apply(l, [n, u, !1]);
							var t = bi[n],
								r = t && l[t];
							if (!r) return l.removeEventListener.apply(l, [n, u, !1]);
							for (var s = !1, a = 0; a < r.length; a++)
								if (r[a].handler === u) {
									(s = !0), r.splice(a, 1);
									break;
								}
							s ? 0 === r.length && e.apply(l, [n, ji, !1]) : l.removeEventListener.apply(l, [n, u, !1]);
						}),
						n
					);
				})(Xo),
				xi = {
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
				ki = new Ml('HammerGestureConfig'),
				Ci = new Ml('HammerLoader'),
				Si = (function() {
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
				Ei = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						return (r._config = u), (r.console = e), (r.loader = t), r;
					}
					return (
						t(n, l),
						(n.prototype.supports = function(l) {
							return !(
								(!xi.hasOwnProperty(l.toLowerCase()) && !this.isCustomEvent(l)) ||
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
				})(Xo),
				Pi = ['alt', 'control', 'meta', 'shift'],
				Ii = {
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
				Oi = (function(l) {
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
								return Ao().onAndCancel(l, t.domEventName, r);
							});
						}),
						(n.parseEventName = function(l) {
							var n = l.toLowerCase().split('.'),
								e = n.shift();
							if (0 === n.length || ('keydown' !== e && 'keyup' !== e)) return null;
							var t = u._normalizeKey(n.pop()),
								r = '';
							if (
								(Pi.forEach(function(l) {
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
								u = Ao().getEventKey(l);
							return (
								' ' === (u = u.toLowerCase()) ? (u = 'space') : '.' === u && (u = 'dot'),
								Pi.forEach(function(e) {
									e != u && (0, Ii[e])(l) && (n += e + '.');
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
				})(Xo),
				Ti = (function() {
					return function() {};
				})(),
				Mi = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), u;
					}
					return (
						t(n, l),
						(n.prototype.sanitize = function(l, n) {
							if (null == n) return null;
							switch (l) {
								case Tn.NONE:
									return n;
								case Tn.HTML:
									return n instanceof Ai
										? n.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(n, 'HTML'),
										  (function(l, n) {
												var u = null;
												try {
													mn = mn || new cn(l);
													var e = n ? String(n) : '';
													u = mn.getInertBodyElement(e);
													var t = 5,
														r = e;
													do {
														if (0 === t) throw new Error('Failed to sanitize html because the input is unstable');
														t--, (e = r), (r = u.innerHTML), (u = mn.getInertBodyElement(e));
													} while (e !== r);
													var s = new Sn(),
														a = s.sanitizeChildren(On(u) || u);
													return on() && s.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), a;
												} finally {
													if (u) for (var o = On(u) || u; o.firstChild; ) o.removeChild(o.firstChild);
												}
										  })(this._doc, String(n)));
								case Tn.STYLE:
									return n instanceof Ni
										? n.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(n, 'Style'),
										  (function(l) {
												if (!(l = String(l).trim())) return '';
												var n = l.match(An);
												return (n && dn(n[1]) === n[1]) ||
													(l.match(Rn) &&
														(function(l) {
															for (var n = !0, u = !0, e = 0; e < l.length; e++) {
																var t = l.charAt(e);
																"'" === t && u ? (n = !n) : '"' === t && n && (u = !u);
															}
															return n && u;
														})(l))
													? l
													: (on() && console.warn('WARNING: sanitizing unsafe style value ' + l + ' (see http://g.co/ng/security#xss).'), 'unsafe');
										  })(n));
								case Tn.SCRIPT:
									if (n instanceof Di) return n.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(n, 'Script'), new Error('unsafe value used in a script context'));
								case Tn.URL:
									return n instanceof Li || n instanceof Ui ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, 'URL'), dn(String(n)));
								case Tn.RESOURCE_URL:
									if (n instanceof Li) return n.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(n, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
								default:
									throw new Error('Unexpected SecurityContext ' + l + ' (see http://g.co/ng/security#xss)');
							}
						}),
						(n.prototype.checkNotSafeValue = function(l, n) {
							if (l instanceof Ri) throw new Error('Required a safe ' + n + ', got a ' + l.getTypeName() + ' (see http://g.co/ng/security#xss)');
						}),
						(n.prototype.bypassSecurityTrustHtml = function(l) {
							return new Ai(l);
						}),
						(n.prototype.bypassSecurityTrustStyle = function(l) {
							return new Ni(l);
						}),
						(n.prototype.bypassSecurityTrustScript = function(l) {
							return new Di(l);
						}),
						(n.prototype.bypassSecurityTrustUrl = function(l) {
							return new Ui(l);
						}),
						(n.prototype.bypassSecurityTrustResourceUrl = function(l) {
							return new Li(l);
						}),
						n
					);
				})(Ti),
				Ri = (function() {
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
				Ai = (function(l) {
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
				})(Ri),
				Ni = (function(l) {
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
				})(Ri),
				Di = (function(l) {
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
				})(Ri),
				Ui = (function(l) {
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
				})(Ri),
				Li = (function(l) {
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
				})(Ri),
				Fi = yr(Nr, 'browser', [
					{ provide: Ft, useValue: 'browser' },
					{
						provide: Lt,
						useValue: function() {
							zo.makeCurrent(), Qo.init();
						},
						multi: !0
					},
					{ provide: fa, useClass: qo, deps: [Ra] },
					{
						provide: Ra,
						useFactory: function() {
							return document;
						},
						deps: []
					}
				]);
			function Vi() {
				return new Ln();
			}
			var zi = (function() {
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
						return { ngModule: n, providers: [{ provide: Nt, useValue: l.appId }, { provide: Go, useExisting: Nt }, Zo] };
					}),
					l
				);
			})();
			'undefined' != typeof window && window;
			var Hi = (function() {
					return function(l, n) {
						(this.id = l), (this.url = n);
					};
				})(),
				Bi = (function(l) {
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
				})(Hi),
				qi = (function(l) {
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
				})(Hi),
				Gi = (function(l) {
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
				})(Hi),
				Zi = (function(l) {
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
				})(Hi),
				Qi = (function(l) {
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
				})(Hi),
				Wi = (function(l) {
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
				})(Hi),
				Ki = (function(l) {
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
				})(Hi),
				Yi = (function(l) {
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
				})(Hi),
				Ji = (function(l) {
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
				})(Hi),
				$i = (function() {
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
				Xi = (function() {
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
				lc = (function() {
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
				nc = (function() {
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
				uc = (function() {
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
				ec = (function() {
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
				tc = (function() {
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
				rc = (function() {
					return function() {};
				})(),
				sc = 'primary',
				ac = (function() {
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
			function oc(l) {
				return new ac(l);
			}
			var ic = 'ngNavigationCancelingError';
			function cc(l) {
				var n = Error('NavigationCancelingError: ' + l);
				return (n[ic] = !0), n;
			}
			function pc(l, n, u) {
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
			var hc = (function() {
				return function(l, n) {
					(this.routes = l), (this.module = n);
				};
			})();
			function dc(l, n) {
				void 0 === n && (n = '');
				for (var u = 0; u < l.length; u++) {
					var e = l[u];
					fc(e, gc(n, e));
				}
			}
			function fc(l, n) {
				if (!l)
					throw new Error(
						"\n      Invalid configuration of route '" +
							n +
							"': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
					);
				if (Array.isArray(l)) throw new Error("Invalid configuration of route '" + n + "': Array cannot be specified");
				if (!l.component && !l.children && !l.loadChildren && l.outlet && l.outlet !== sc)
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
				l.children && dc(l.children, n);
			}
			function gc(l, n) {
				return n ? (l || n.path ? (l && !n.path ? l + '/' : !l && n.path ? n.path : l + '/' + n.path) : '') : l;
			}
			function mc(l) {
				var n = l.children && l.children.map(mc),
					u = n ? r({}, l, { children: n }) : r({}, l);
				return !u.component && (n || u.loadChildren) && u.outlet && u.outlet !== sc && (u.component = rc), u;
			}
			function bc(l, n) {
				var u,
					e = Object.keys(l),
					t = Object.keys(n);
				if (!e || !t || e.length != t.length) return !1;
				for (var r = 0; r < e.length; r++) if (l[(u = e[r])] !== n[u]) return !1;
				return !0;
			}
			function yc(l) {
				return Array.prototype.concat.apply([], l);
			}
			function vc(l) {
				return l.length > 0 ? l[l.length - 1] : null;
			}
			function wc(l, n) {
				for (var u in l) l.hasOwnProperty(u) && n(l[u], u);
			}
			function jc(l) {
				return Kn(l) ? l : Wn(l) ? J(Promise.resolve(l)) : Ua(l);
			}
			function _c(l, n, u) {
				return u
					? (function(l, n) {
							return bc(l, n);
					  })(l.queryParams, n.queryParams) &&
							(function l(n, u) {
								if (!Sc(n.segments, u.segments)) return !1;
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
									if (u.segments.length > t.length) return !!Sc((s = u.segments.slice(0, t.length)), t) && !e.hasChildren();
									if (u.segments.length === t.length) {
										if (!Sc(u.segments, t)) return !1;
										for (var r in e.children) {
											if (!u.children[r]) return !1;
											if (!l(u.children[r], e.children[r])) return !1;
										}
										return !0;
									}
									var s = t.slice(0, u.segments.length),
										a = t.slice(u.segments.length);
									return !!Sc(u.segments, s) && !!u.children[sc] && n(u.children[sc], e, a);
								})(n, u, u.segments);
							})(l.root, n.root);
			}
			var xc = (function() {
					function l(l, n, u) {
						(this.root = l), (this.queryParams = n), (this.fragment = u);
					}
					return (
						Object.defineProperty(l.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = oc(this.queryParams)), this._queryParamMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return Oc.serialize(this);
						}),
						l
					);
				})(),
				kc = (function() {
					function l(l, n) {
						var u = this;
						(this.segments = l),
							(this.children = n),
							(this.parent = null),
							wc(n, function(l, n) {
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
							return Tc(this);
						}),
						l
					);
				})(),
				Cc = (function() {
					function l(l, n) {
						(this.path = l), (this.parameters = n);
					}
					return (
						Object.defineProperty(l.prototype, 'parameterMap', {
							get: function() {
								return this._parameterMap || (this._parameterMap = oc(this.parameters)), this._parameterMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return Uc(this);
						}),
						l
					);
				})();
			function Sc(l, n) {
				return (
					l.length === n.length &&
					l.every(function(l, u) {
						return l.path === n[u].path;
					})
				);
			}
			function Ec(l, n) {
				var u = [];
				return (
					wc(l.children, function(l, e) {
						e === sc && (u = u.concat(n(l, e)));
					}),
					wc(l.children, function(l, e) {
						e !== sc && (u = u.concat(n(l, e)));
					}),
					u
				);
			}
			var Pc = (function() {
					return function() {};
				})(),
				Ic = (function() {
					function l() {}
					return (
						(l.prototype.parse = function(l) {
							var n = new Hc(l);
							return new xc(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment());
						}),
						(l.prototype.serialize = function(l) {
							var n, u;
							return (
								'/' +
								(function l(n, u) {
									if (!n.hasChildren()) return Tc(n);
									if (u) {
										var e = n.children[sc] ? l(n.children[sc], !1) : '',
											t = [];
										return (
											wc(n.children, function(n, u) {
												u !== sc && t.push(u + ':' + l(n, !1));
											}),
											t.length > 0 ? e + '(' + t.join('//') + ')' : e
										);
									}
									var r = Ec(n, function(u, e) {
										return e === sc ? [l(n.children[sc], !1)] : [e + ':' + l(u, !1)];
									});
									return Tc(n) + '/(' + r.join('//') + ')';
								})(l.root, !0) +
								((n = l.queryParams),
								(u = Object.keys(n).map(function(l) {
									var u = n[l];
									return Array.isArray(u)
										? u
												.map(function(n) {
													return Rc(l) + '=' + Rc(n);
												})
												.join('&')
										: Rc(l) + '=' + Rc(u);
								})).length
									? '?' + u.join('&')
									: '') +
								('string' == typeof l.fragment ? '#' + encodeURI(l.fragment) : '')
							);
						}),
						l
					);
				})(),
				Oc = new Ic();
			function Tc(l) {
				return l.segments
					.map(function(l) {
						return Uc(l);
					})
					.join('/');
			}
			function Mc(l) {
				return encodeURIComponent(l)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function Rc(l) {
				return Mc(l).replace(/%3B/gi, ';');
			}
			function Ac(l) {
				return Mc(l)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function Nc(l) {
				return decodeURIComponent(l);
			}
			function Dc(l) {
				return Nc(l.replace(/\+/g, '%20'));
			}
			function Uc(l) {
				return (
					'' +
					Ac(l.path) +
					((n = l.parameters),
					Object.keys(n)
						.map(function(l) {
							return ';' + Ac(l) + '=' + Ac(n[l]);
						})
						.join(''))
				);
				var n;
			}
			var Lc = /^[^\/()?;=#]+/;
			function Fc(l) {
				var n = l.match(Lc);
				return n ? n[0] : '';
			}
			var Vc = /^[^=?&#]+/,
				zc = /^[^?&#]+/,
				Hc = (function() {
					function l(l) {
						(this.url = l), (this.remaining = l);
					}
					return (
						(l.prototype.parseRootSegment = function() {
							return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new kc([], {}) : new kc([], this.parseChildren());
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
							return this.peekStartsWith('(') && (u = this.parseParens(!1)), (l.length > 0 || Object.keys(n).length > 0) && (u[sc] = new kc(l, n)), u;
						}),
						(l.prototype.parseSegment = function() {
							var l = Fc(this.remaining);
							if ('' === l && this.peekStartsWith(';')) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
							return this.capture(l), new Cc(Nc(l), this.parseMatrixParams());
						}),
						(l.prototype.parseMatrixParams = function() {
							for (var l = {}; this.consumeOptional(';'); ) this.parseParam(l);
							return l;
						}),
						(l.prototype.parseParam = function(l) {
							var n = Fc(this.remaining);
							if (n) {
								this.capture(n);
								var u = '';
								if (this.consumeOptional('=')) {
									var e = Fc(this.remaining);
									e && this.capture((u = e));
								}
								l[Nc(n)] = Nc(u);
							}
						}),
						(l.prototype.parseQueryParam = function(l) {
							var n,
								u = (n = this.remaining.match(Vc)) ? n[0] : '';
							if (u) {
								this.capture(u);
								var e = '';
								if (this.consumeOptional('=')) {
									var t = (function(l) {
										var n = l.match(zc);
										return n ? n[0] : '';
									})(this.remaining);
									t && this.capture((e = t));
								}
								var r = Dc(u),
									s = Dc(e);
								if (l.hasOwnProperty(r)) {
									var a = l[r];
									Array.isArray(a) || (l[r] = a = [a]), a.push(s);
								} else l[r] = s;
							}
						}),
						(l.prototype.parseParens = function(l) {
							var n = {};
							for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
								var u = Fc(this.remaining),
									e = this.remaining[u.length];
								if ('/' !== e && ')' !== e && ';' !== e) throw new Error("Cannot parse url '" + this.url + "'");
								var t = void 0;
								u.indexOf(':') > -1 ? ((t = u.substr(0, u.indexOf(':'))), this.capture(t), this.capture(':')) : l && (t = sc);
								var r = this.parseChildren();
								(n[t] = 1 === Object.keys(r).length ? r[sc] : new kc([], r)), this.consumeOptional('//');
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
				Bc = (function() {
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
							var n = qc(l, this._root);
							return n
								? n.children.map(function(l) {
										return l.value;
								  })
								: [];
						}),
						(l.prototype.firstChild = function(l) {
							var n = qc(l, this._root);
							return n && n.children.length > 0 ? n.children[0].value : null;
						}),
						(l.prototype.siblings = function(l) {
							var n = Gc(l, this._root);
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
							return Gc(l, this._root).map(function(l) {
								return l.value;
							});
						}),
						l
					);
				})();
			function qc(l, n) {
				var u, e;
				if (l === n.value) return n;
				try {
					for (var t = o(n.children), r = t.next(); !r.done; r = t.next()) {
						var s = qc(l, r.value);
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
			function Gc(l, n) {
				var u, e;
				if (l === n.value) return [n];
				try {
					for (var t = o(n.children), r = t.next(); !r.done; r = t.next()) {
						var s = Gc(l, r.value);
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
			var Zc = (function() {
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
			function Qc(l) {
				var n = {};
				return (
					l &&
						l.children.forEach(function(l) {
							return (n[l.value.outlet] = l);
						}),
					n
				);
			}
			var Wc = (function(l) {
				function n(n, u) {
					var e = l.call(this, n) || this;
					return (e.snapshot = u), lp(e, n), e;
				}
				return (
					t(n, l),
					(n.prototype.toString = function() {
						return this.snapshot.toString();
					}),
					n
				);
			})(Bc);
			function Kc(l, n) {
				var u = (function(l, n) {
						var u = new $c([], {}, {}, '', {}, sc, n, null, l.root, -1, {});
						return new Xc('', new Zc(u, []));
					})(l, n),
					e = new La([new Cc('', {})]),
					t = new La({}),
					r = new La({}),
					s = new La({}),
					a = new La(''),
					o = new Yc(e, t, s, a, r, sc, n, u.root);
				return (o.snapshot = u.root), new Wc(new Zc(o, []), u);
			}
			var Yc = (function() {
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
											return oc(l);
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
											return oc(l);
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
			function Jc(l, n) {
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
			var $c = (function() {
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
								return this._paramMap || (this._paramMap = oc(this.params)), this._paramMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = oc(this.queryParams)), this._queryParamMap;
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
				Xc = (function(l) {
					function n(n, u) {
						var e = l.call(this, u) || this;
						return (e.url = n), lp(e, u), e;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return np(this._root);
						}),
						n
					);
				})(Bc);
			function lp(l, n) {
				(n.value._routerState = l),
					n.children.forEach(function(n) {
						return lp(l, n);
					});
			}
			function np(l) {
				var n = l.children.length > 0 ? ' { ' + l.children.map(np).join(', ') + ' } ' : '';
				return '' + l.value + n;
			}
			function up(l) {
				if (l.snapshot) {
					var n = l.snapshot,
						u = l._futureSnapshot;
					(l.snapshot = u),
						bc(n.queryParams, u.queryParams) || l.queryParams.next(u.queryParams),
						n.fragment !== u.fragment && l.fragment.next(u.fragment),
						bc(n.params, u.params) || l.params.next(u.params),
						(function(l, n) {
							if (l.length !== n.length) return !1;
							for (var u = 0; u < l.length; ++u) if (!bc(l[u], n[u])) return !1;
							return !0;
						})(n.url, u.url) || l.url.next(u.url),
						bc(n.data, u.data) || l.data.next(u.data);
				} else (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
			}
			function ep(l, n) {
				var u, e;
				return (
					bc(l.params, n.params) &&
					Sc((u = l.url), (e = n.url)) &&
					u.every(function(l, n) {
						return bc(l.parameters, e[n].parameters);
					}) &&
					!(!l.parent != !n.parent) &&
					(!l.parent || ep(l.parent, n.parent))
				);
			}
			function tp(l) {
				return 'object' == typeof l && null != l && !l.outlets && !l.segmentPath;
			}
			function rp(l, n, u, e, t) {
				var r = {};
				return (
					e &&
						wc(e, function(l, n) {
							r[n] = Array.isArray(l)
								? l.map(function(l) {
										return '' + l;
								  })
								: '' + l;
						}),
					new xc(
						u.root === l
							? n
							: (function l(n, u, e) {
									var t = {};
									return (
										wc(n.children, function(n, r) {
											t[r] = n === u ? e : l(n, u, e);
										}),
										new kc(n.segments, t)
									);
							  })(u.root, l, n),
						r,
						t
					)
				);
			}
			var sp = (function() {
					function l(l, n, u) {
						if (((this.isAbsolute = l), (this.numberOfDoubleDots = n), (this.commands = u), l && u.length > 0 && tp(u[0]))) throw new Error('Root segment cannot have matrix parameters');
						var e = u.find(function(l) {
							return 'object' == typeof l && null != l && l.outlets;
						});
						if (e && e !== vc(u)) throw new Error('{outlets:{}} has to be the last command');
					}
					return (
						(l.prototype.toRoot = function() {
							return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
						}),
						l
					);
				})(),
				ap = (function() {
					return function(l, n, u) {
						(this.segmentGroup = l), (this.processChildren = n), (this.index = u);
					};
				})();
			function op(l) {
				return 'object' == typeof l && null != l && l.outlets ? l.outlets[sc] : '' + l;
			}
			function ip(l, n, u) {
				if ((l || (l = new kc([], {})), 0 === l.segments.length && l.hasChildren())) return cp(l, n, u);
				var e = (function(l, n, u) {
						for (var e = 0, t = n, r = { match: !1, pathIndex: 0, commandIndex: 0 }; t < l.segments.length; ) {
							if (e >= u.length) return r;
							var s = l.segments[t],
								a = op(u[e]),
								o = e < u.length - 1 ? u[e + 1] : null;
							if (t > 0 && void 0 === a) break;
							if (a && o && 'object' == typeof o && void 0 === o.outlets) {
								if (!fp(a, o, s)) return r;
								e += 2;
							} else {
								if (!fp(a, {}, s)) return r;
								e++;
							}
							t++;
						}
						return { match: !0, pathIndex: t, commandIndex: e };
					})(l, n, u),
					t = u.slice(e.commandIndex);
				if (e.match && e.pathIndex < l.segments.length) {
					var r = new kc(l.segments.slice(0, e.pathIndex), {});
					return (r.children[sc] = new kc(l.segments.slice(e.pathIndex), l.children)), cp(r, 0, t);
				}
				return e.match && 0 === t.length ? new kc(l.segments, {}) : e.match && !l.hasChildren() ? pp(l, n, u) : e.match ? cp(l, 0, t) : pp(l, n, u);
			}
			function cp(l, n, u) {
				if (0 === u.length) return new kc(l.segments, {});
				var e = (function(l) {
						var n, u;
						return 'object' != typeof l[0] ? (((n = {})[sc] = l), n) : void 0 === l[0].outlets ? (((u = {})[sc] = l), u) : l[0].outlets;
					})(u),
					t = {};
				return (
					wc(e, function(u, e) {
						null !== u && (t[e] = ip(l.children[e], n, u));
					}),
					wc(l.children, function(l, n) {
						void 0 === e[n] && (t[n] = l);
					}),
					new kc(l.segments, t)
				);
			}
			function pp(l, n, u) {
				for (var e = l.segments.slice(0, n), t = 0; t < u.length; ) {
					if ('object' == typeof u[t] && void 0 !== u[t].outlets) {
						var r = hp(u[t].outlets);
						return new kc(e, r);
					}
					if (0 === t && tp(u[0])) e.push(new Cc(l.segments[n].path, u[0])), t++;
					else {
						var s = op(u[t]),
							a = t < u.length - 1 ? u[t + 1] : null;
						s && a && tp(a) ? (e.push(new Cc(s, dp(a))), (t += 2)) : (e.push(new Cc(s, {})), t++);
					}
				}
				return new kc(e, {});
			}
			function hp(l) {
				var n = {};
				return (
					wc(l, function(l, u) {
						null !== l && (n[u] = pp(new kc([], {}), 0, l));
					}),
					n
				);
			}
			function dp(l) {
				var n = {};
				return (
					wc(l, function(l, u) {
						return (n[u] = '' + l);
					}),
					n
				);
			}
			function fp(l, n, u) {
				return l == u.path && bc(n, u.parameters);
			}
			var gp = (function() {
				function l(l, n, u, e) {
					(this.routeReuseStrategy = l), (this.futureState = n), (this.currState = u), (this.forwardEvent = e);
				}
				return (
					(l.prototype.activate = function(l) {
						var n = this.futureState._root,
							u = this.currState ? this.currState._root : null;
						this.deactivateChildRoutes(n, u, l), up(this.futureState.root), this.activateChildRoutes(n, u, l);
					}),
					(l.prototype.deactivateChildRoutes = function(l, n, u) {
						var e = this,
							t = Qc(n);
						l.children.forEach(function(l) {
							var n = l.value.outlet;
							e.deactivateRoutes(l, t[n], u), delete t[n];
						}),
							wc(t, function(l, n) {
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
							var t = Qc(l),
								r = l.value.component ? e.children : n;
							wc(t, function(l, n) {
								return u.deactivateRouteAndItsChildren(l, r);
							}),
								e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated());
						}
					}),
					(l.prototype.activateChildRoutes = function(l, n, u) {
						var e = this,
							t = Qc(n);
						l.children.forEach(function(l) {
							e.activateRoutes(l, t[l.value.outlet], u), e.forwardEvent(new ec(l.value.snapshot));
						}),
							l.children.length && this.forwardEvent(new nc(l.value.snapshot));
					}),
					(l.prototype.activateRoutes = function(l, n, u) {
						var e = l.value,
							t = n ? n.value : null;
						if ((up(e), e === t))
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
									mp(s.route);
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
			function mp(l) {
				up(l.value), l.children.forEach(mp);
			}
			function bp(l) {
				return 'function' == typeof l;
			}
			function yp(l) {
				return l instanceof xc;
			}
			var vp = (function() {
					return function(l) {
						this.segmentGroup = l || null;
					};
				})(),
				wp = (function() {
					return function(l) {
						this.urlTree = l;
					};
				})();
			function jp(l) {
				return new I(function(n) {
					return n.error(new vp(l));
				});
			}
			function _p(l) {
				return new I(function(n) {
					return n.error(new wp(l));
				});
			}
			function xp(l) {
				return new I(function(n) {
					return n.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + l + "'"));
				});
			}
			var kp = (function() {
				function l(l, n, u, e, t) {
					(this.configLoader = n), (this.urlSerializer = u), (this.urlTree = e), (this.config = t), (this.allowRedirects = !0), (this.ngModule = l.get(ru));
				}
				return (
					(l.prototype.apply = function() {
						var l = this;
						return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, sc)
							.pipe(
								Q(function(n) {
									return l.createUrlTree(n, l.urlTree.queryParams, l.urlTree.fragment);
								})
							)
							.pipe(
								co(function(n) {
									if (n instanceof wp) return (l.allowRedirects = !1), l.match(n.urlTree);
									if (n instanceof vp) throw l.noMatchError(n);
									throw n;
								})
							);
					}),
					(l.prototype.match = function(l) {
						var n = this;
						return this.expandSegmentGroup(this.ngModule, this.config, l.root, sc)
							.pipe(
								Q(function(u) {
									return n.createUrlTree(u, l.queryParams, l.fragment);
								})
							)
							.pipe(
								co(function(l) {
									if (l instanceof vp) throw n.noMatchError(l);
									throw l;
								})
							);
					}),
					(l.prototype.noMatchError = function(l) {
						return new Error("Cannot match any routes. URL Segment: '" + l.segmentGroup + "'");
					}),
					(l.prototype.createUrlTree = function(l, n, u) {
						var e,
							t = l.segments.length > 0 ? new kc([], (((e = {})[sc] = l), e)) : l;
						return new xc(t, n, u);
					}),
					(l.prototype.expandSegmentGroup = function(l, n, u, e) {
						return 0 === u.segments.length && u.hasChildren()
							? this.expandChildren(l, n, u).pipe(
									Q(function(l) {
										return new kc([], l);
									})
							  )
							: this.expandSegment(l, u, n, u.segments, e, !0);
					}),
					(l.prototype.expandChildren = function(l, n, u) {
						var e = this;
						return (function(u, t) {
							if (0 === Object.keys(u).length) return Ua({});
							var r = [],
								s = [],
								a = {};
							return (
								wc(u, function(u, t) {
									var o,
										i,
										c = ((o = t), (i = u), e.expandSegmentGroup(l, n, i, o)).pipe(
											Q(function(l) {
												return (a[t] = l);
											})
										);
									t === sc ? r.push(c) : s.push(c);
								}),
								Ua.apply(null, r.concat(s)).pipe(
									Qa(),
									io(),
									Q(function() {
										return a;
									})
								)
							);
						})(u.children);
					}),
					(l.prototype.expandSegment = function(l, n, u, e, t, r) {
						var s = this;
						return Ua.apply(void 0, c(u)).pipe(
							Q(function(a) {
								return s.expandSegmentAgainstRoute(l, n, u, a, e, t, r).pipe(
									co(function(l) {
										if (l instanceof vp) return Ua(null);
										throw l;
									})
								);
							}),
							Qa(),
							bo(function(l) {
								return !!l;
							}),
							co(function(l, u) {
								if (l instanceof Va || 'EmptyError' === l.name) {
									if (s.noLeftoversInUrl(n, e, t)) return Ua(new kc([], {}));
									throw new vp(n);
								}
								throw l;
							})
						);
					}),
					(l.prototype.noLeftoversInUrl = function(l, n, u) {
						return 0 === n.length && !l.children[u];
					}),
					(l.prototype.expandSegmentAgainstRoute = function(l, n, u, e, t, r, s) {
						return Pp(e) !== r
							? jp(n)
							: void 0 === e.redirectTo
							? this.matchSegmentAgainstRoute(l, n, e, t)
							: s && this.allowRedirects
							? this.expandSegmentAgainstRouteUsingRedirect(l, n, u, e, t, r)
							: jp(n);
					}),
					(l.prototype.expandSegmentAgainstRouteUsingRedirect = function(l, n, u, e, t, r) {
						return '**' === e.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, u, e, r) : this.expandRegularSegmentAgainstRouteUsingRedirect(l, n, u, e, t, r);
					}),
					(l.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(l, n, u, e) {
						var t = this,
							r = this.applyRedirectCommands([], u.redirectTo, {});
						return u.redirectTo.startsWith('/')
							? _p(r)
							: this.lineralizeSegments(u, r).pipe(
									$(function(u) {
										var r = new kc(u, {});
										return t.expandSegment(l, r, n, u, e, !1);
									})
							  );
					}),
					(l.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(l, n, u, e, t, r) {
						var s = this,
							a = Cp(n, e, t),
							o = a.consumedSegments,
							i = a.lastChild,
							c = a.positionalParamSegments;
						if (!a.matched) return jp(n);
						var p = this.applyRedirectCommands(o, e.redirectTo, c);
						return e.redirectTo.startsWith('/')
							? _p(p)
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
											return (u._loadedConfig = l), new kc(e, {});
										})
								  )
								: Ua(new kc(e, {}));
						var s = Cp(n, u, e),
							a = s.consumedSegments,
							i = s.lastChild;
						if (!s.matched) return jp(n);
						var c = e.slice(i);
						return this.getChildConfig(l, u, e).pipe(
							$(function(l) {
								var u = l.module,
									e = l.routes,
									s = (function(l, n, u, e) {
										return u.length > 0 &&
											(function(l, n, u) {
												return e.some(function(u) {
													return Ep(l, n, u) && Pp(u) !== sc;
												});
											})(l, u)
											? {
													segmentGroup: Sp(
														new kc(
															n,
															(function(l, n) {
																var u,
																	e,
																	t = {};
																t[sc] = n;
																try {
																	for (var r = o(l), s = r.next(); !s.done; s = r.next()) {
																		var a = s.value;
																		'' === a.path && Pp(a) !== sc && (t[Pp(a)] = new kc([], {}));
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
															})(e, new kc(u, l.children))
														)
													),
													slicedSegments: []
											  }
											: 0 === u.length &&
											  (function(l, n, u) {
													return e.some(function(u) {
														return Ep(l, n, u);
													});
											  })(l, u)
											? {
													segmentGroup: Sp(
														new kc(
															l.segments,
															(function(l, n, u, e) {
																var t,
																	s,
																	a = {};
																try {
																	for (var i = o(u), c = i.next(); !c.done; c = i.next()) {
																		var p = c.value;
																		Ep(l, n, p) && !e[Pp(p)] && (a[Pp(p)] = new kc([], {}));
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
												return new kc(a, l);
											})
									  )
									: 0 === e.length && 0 === p.length
									? Ua(new kc(a, {}))
									: t.expandSegment(u, i, e, p, sc, !0).pipe(
											Q(function(l) {
												return new kc(a.concat(l.segments), l.children);
											})
									  );
							})
						);
					}),
					(l.prototype.getChildConfig = function(l, n, u) {
						var e = this;
						return n.children
							? Ua(new hc(n.children, l))
							: n.loadChildren
							? void 0 !== n._loadedConfig
								? Ua(n._loadedConfig)
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
																	return l && bp(l.canLoad);
																})(r)
															)
																t = r.canLoad(n, u);
															else {
																if (!bp(r)) throw new Error('Invalid CanLoad guard');
																t = r(n, u);
															}
															return jc(t);
														})
													)
													.pipe(
														Qa(),
														((e = function(l) {
															return !0 === l;
														}),
														function(l) {
															return l.lift(new yo(e, void 0, l));
														})
													)
											: Ua(!0);
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
															return n.error(cc('Cannot load children because the guard of the route "path: \'' + l.path + '\'" returned false'));
														});
												  })(n);
										})
								  )
							: Ua(new hc([], l));
					}),
					(l.prototype.lineralizeSegments = function(l, n) {
						for (var u = [], e = n.root; ; ) {
							if (((u = u.concat(e.segments)), 0 === e.numberOfChildren)) return Ua(u);
							if (e.numberOfChildren > 1 || !e.children[sc]) return xp(l.redirectTo);
							e = e.children[sc];
						}
					}),
					(l.prototype.applyRedirectCommands = function(l, n, u) {
						return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), l, u);
					}),
					(l.prototype.applyRedirectCreatreUrlTree = function(l, n, u, e) {
						var t = this.createSegmentGroup(l, n.root, u, e);
						return new xc(t, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment);
					}),
					(l.prototype.createQueryParams = function(l, n) {
						var u = {};
						return (
							wc(l, function(l, e) {
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
							wc(n.children, function(n, r) {
								s[r] = t.createSegmentGroup(l, n, u, e);
							}),
							new kc(r, s)
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
			function Cp(l, n, u) {
				if ('' === n.path)
					return 'full' === n.pathMatch && (l.hasChildren() || u.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				var e = (n.matcher || pc)(u, l, n);
				return e
					? { matched: !0, consumedSegments: e.consumed, lastChild: e.consumed.length, positionalParamSegments: e.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function Sp(l) {
				if (1 === l.numberOfChildren && l.children[sc]) {
					var n = l.children[sc];
					return new kc(l.segments.concat(n.segments), n.children);
				}
				return l;
			}
			function Ep(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 !== u.redirectTo;
			}
			function Pp(l) {
				return l.outlet || sc;
			}
			var Ip = (function() {
					return function(l) {
						(this.path = l), (this.route = this.path[this.path.length - 1]);
					};
				})(),
				Op = (function() {
					return function(l, n) {
						(this.component = l), (this.route = n);
					};
				})();
			function Tp(l, n, u) {
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
			function Mp(l, n, u, e, t) {
				void 0 === t && (t = { canDeactivateChecks: [], canActivateChecks: [] });
				var r = Qc(n);
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
											return !Sc(l.url, n.url);
										case 'pathParamsOrQueryParamsChange':
											return !Sc(l.url, n.url) || !bc(l.queryParams, n.queryParams);
										case 'always':
											return !0;
										case 'paramsOrQueryParamsChange':
											return !ep(l, n) || !bc(l.queryParams, n.queryParams);
										case 'paramsChange':
										default:
											return !ep(l, n);
									}
								})(s, r, r.routeConfig.runGuardsAndResolvers);
								o ? t.canActivateChecks.push(new Ip(e)) : ((r.data = s.data), (r._resolvedData = s._resolvedData)),
									Mp(l, n, r.component ? (a ? a.children : null) : u, e, t),
									o && t.canDeactivateChecks.push(new Op((a && a.outlet && a.outlet.component) || null, s));
							} else s && Rp(n, a, t), t.canActivateChecks.push(new Ip(e)), Mp(l, null, r.component ? (a ? a.children : null) : u, e, t);
						})(l, r[l.value.outlet], u, e.concat([l.value]), t),
							delete r[l.value.outlet];
					}),
					wc(r, function(l, n) {
						return Rp(l, u.getContext(n), t);
					}),
					t
				);
			}
			function Rp(l, n, u) {
				var e = Qc(l),
					t = l.value;
				wc(e, function(l, e) {
					Rp(l, t.component ? (n ? n.children.getContext(e) : null) : n, u);
				}),
					u.canDeactivateChecks.push(new Op(t.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, t));
			}
			var Ap = Symbol('INITIAL_VALUE');
			function Np() {
				return wo(function(l) {
					return function() {
						for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
						var u = null,
							e = null;
						return U(l[l.length - 1]) && (e = l.pop()), 'function' == typeof l[l.length - 1] && (u = l.pop()), 1 === l.length && p(l[0]) && (l = l[0]), el(l, e).lift(new Ha(u));
					}
						.apply(
							void 0,
							c(
								l.map(function(l) {
									return l.pipe(
										fo(1),
										(function() {
											for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
											var u = l[l.length - 1];
											return U(u)
												? (l.pop(),
												  function(n) {
														return xo(l, n, u);
												  })
												: function(n) {
														return xo(l, n);
												  };
										})(Ap)
									);
								})
							)
						)
						.pipe(
							ko(function(l, n) {
								var u = !1;
								return n.reduce(function(l, e, t) {
									if (l !== Ap) return l;
									if ((e === Ap && (u = !0), !u)) {
										if (!1 === e) return e;
										if (t === n.length - 1 || yp(e)) return e;
									}
									return l;
								}, l);
							}, Ap),
							Wa(function(l) {
								return l !== Ap;
							}),
							Q(function(l) {
								return yp(l) ? l : !0 === l;
							}),
							fo(1)
						);
				});
			}
			function Dp(l, n) {
				return null !== l && n && n(new uc(l)), Ua(!0);
			}
			function Up(l, n) {
				return null !== l && n && n(new lc(l)), Ua(!0);
			}
			function Lp(l, n, u) {
				var e = n.routeConfig ? n.routeConfig.canActivate : null;
				return e && 0 !== e.length
					? Ua(
							e.map(function(e) {
								return Za(function() {
									var t,
										r = Tp(e, n, u);
									if (
										(function(l) {
											return l && bp(l.canActivate);
										})(r)
									)
										t = jc(r.canActivate(n, l));
									else {
										if (!bp(r)) throw new Error('Invalid CanActivate guard');
										t = jc(r(n, l));
									}
									return t.pipe(bo());
								});
							})
					  ).pipe(Np())
					: Ua(!0);
			}
			function Fp(l, n, u) {
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
							return Za(function() {
								return Ua(
									n.guards.map(function(t) {
										var r,
											s = Tp(t, n.node, u);
										if (
											(function(l) {
												return l && bp(l.canActivateChild);
											})(s)
										)
											r = jc(s.canActivateChild(e, l));
										else {
											if (!bp(s)) throw new Error('Invalid CanActivateChild guard');
											r = jc(s(e, l));
										}
										return r.pipe(bo());
									})
								).pipe(Np());
							});
						});
				return Ua(t).pipe(Np());
			}
			var Vp = (function() {
					return function() {};
				})(),
				zp = (function() {
					function l(l, n, u, e, t, r) {
						(this.rootComponentType = l), (this.config = n), (this.urlTree = u), (this.url = e), (this.paramsInheritanceStrategy = t), (this.relativeLinkResolution = r);
					}
					return (
						(l.prototype.recognize = function() {
							try {
								var l = qp(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
									n = this.processSegmentGroup(this.config, l, sc),
									u = new $c(
										[],
										Object.freeze({}),
										Object.freeze(r({}, this.urlTree.queryParams)),
										this.urlTree.fragment,
										{},
										sc,
										this.rootComponentType,
										null,
										this.urlTree.root,
										-1,
										{}
									),
									e = new Zc(u, n),
									t = new Xc(this.url, e);
								return this.inheritParamsAndData(t._root), Ua(t);
							} catch (s) {
								return new I(function(l) {
									return l.error(s);
								});
							}
						}),
						(l.prototype.inheritParamsAndData = function(l) {
							var n = this,
								u = l.value,
								e = Jc(u, this.paramsInheritanceStrategy);
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
								t = Ec(n, function(n, u) {
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
									return l.value.outlet === sc ? -1 : n.value.outlet === sc ? 1 : l.value.outlet.localeCompare(n.value.outlet);
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
										if (!(c instanceof Vp)) throw c;
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
							throw new Vp();
						}),
						(l.prototype.noLeftoversInUrl = function(l, n, u) {
							return 0 === n.length && !l.children[u];
						}),
						(l.prototype.processSegmentAgainstRoute = function(l, n, u, e) {
							if (l.redirectTo) throw new Vp();
							if ((l.outlet || sc) !== e) throw new Vp();
							var t,
								s = [],
								a = [];
							if ('**' === l.path) {
								var o = u.length > 0 ? vc(u).parameters : {};
								t = new $c(u, o, Object.freeze(r({}, this.urlTree.queryParams)), this.urlTree.fragment, Qp(l), e, l.component, l, Hp(n), Bp(n) + u.length, Wp(l));
							} else {
								var i = (function(l, n, u) {
									if ('' === n.path) {
										if ('full' === n.pathMatch && (l.hasChildren() || u.length > 0)) throw new Vp();
										return { consumedSegments: [], lastChild: 0, parameters: {} };
									}
									var e = (n.matcher || pc)(u, l, n);
									if (!e) throw new Vp();
									var t = {};
									wc(e.posParams, function(l, n) {
										t[n] = l.path;
									});
									var s = e.consumed.length > 0 ? r({}, t, e.consumed[e.consumed.length - 1].parameters) : t;
									return { consumedSegments: e.consumed, lastChild: e.consumed.length, parameters: s };
								})(n, l, u);
								(s = i.consumedSegments),
									(a = u.slice(i.lastChild)),
									(t = new $c(s, i.parameters, Object.freeze(r({}, this.urlTree.queryParams)), this.urlTree.fragment, Qp(l), e, l.component, l, Hp(n), Bp(n) + s.length, Wp(l)));
							}
							var c = (function(l) {
									return l.children ? l.children : l.loadChildren ? l._loadedConfig.routes : [];
								})(l),
								p = qp(n, s, a, c, this.relativeLinkResolution),
								h = p.segmentGroup,
								d = p.slicedSegments;
							if (0 === d.length && h.hasChildren()) {
								var f = this.processChildren(c, h);
								return [new Zc(t, f)];
							}
							if (0 === c.length && 0 === d.length) return [new Zc(t, [])];
							var g = this.processSegment(c, h, d, sc);
							return [new Zc(t, g)];
						}),
						l
					);
				})();
			function Hp(l) {
				for (var n = l; n._sourceSegment; ) n = n._sourceSegment;
				return n;
			}
			function Bp(l) {
				for (var n = l, u = n._segmentIndexShift ? n._segmentIndexShift : 0; n._sourceSegment; ) u += (n = n._sourceSegment)._segmentIndexShift ? n._segmentIndexShift : 0;
				return u - 1;
			}
			function qp(l, n, u, e, t) {
				if (
					u.length > 0 &&
					(function(l, n, u) {
						return e.some(function(u) {
							return Gp(l, n, u) && Zp(u) !== sc;
						});
					})(l, u)
				) {
					var s = new kc(
						n,
						(function(l, n, u, e) {
							var t,
								r,
								s = {};
							(s[sc] = e), (e._sourceSegment = l), (e._segmentIndexShift = n.length);
							try {
								for (var a = o(u), i = a.next(); !i.done; i = a.next()) {
									var c = i.value;
									if ('' === c.path && Zp(c) !== sc) {
										var p = new kc([], {});
										(p._sourceSegment = l), (p._segmentIndexShift = n.length), (s[Zp(c)] = p);
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
						})(l, n, e, new kc(u, l.children))
					);
					return (s._sourceSegment = l), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: [] };
				}
				if (
					0 === u.length &&
					(function(l, n, u) {
						return e.some(function(u) {
							return Gp(l, n, u);
						});
					})(l, u)
				) {
					var a = new kc(
						l.segments,
						(function(l, n, u, e, t, s) {
							var a,
								i,
								c = {};
							try {
								for (var p = o(e), h = p.next(); !h.done; h = p.next()) {
									var d = h.value;
									if (Gp(l, u, d) && !t[Zp(d)]) {
										var f = new kc([], {});
										(f._sourceSegment = l), (f._segmentIndexShift = 'legacy' === s ? l.segments.length : n.length), (c[Zp(d)] = f);
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
				var i = new kc(l.segments, l.children);
				return (i._sourceSegment = l), (i._segmentIndexShift = n.length), { segmentGroup: i, slicedSegments: u };
			}
			function Gp(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 === u.redirectTo;
			}
			function Zp(l) {
				return l.outlet || sc;
			}
			function Qp(l) {
				return l.data || {};
			}
			function Wp(l) {
				return l.resolve || {};
			}
			function Kp(l, n, u, e) {
				var t = Tp(l, n, e);
				return jc(t.resolve ? t.resolve(n, u) : t(n, u));
			}
			function Yp(l) {
				return function(n) {
					return n.pipe(
						wo(function(n) {
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
			var Jp = (function() {
					return function() {};
				})(),
				$p = (function() {
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
				Xp = new Ml('ROUTES'),
				lh = (function() {
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
										return new hc(yc(t.injector.get(Xp)).map(mc), t);
									})
								)
							);
						}),
						(l.prototype.loadModuleFactory = function(l) {
							var n = this;
							return 'string' == typeof l
								? J(this.loader.load(l))
								: jc(l()).pipe(
										$(function(l) {
											return l instanceof su ? Ua(l) : J(n.compiler.compileModuleAsync(l));
										})
								  );
						}),
						l
					);
				})(),
				nh = (function() {
					return function() {};
				})(),
				uh = (function() {
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
			function eh(l) {
				throw l;
			}
			function th(l, n, u) {
				return n.parse('/');
			}
			function rh(l, n) {
				return Ua(null);
			}
			var sh = (function() {
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
							(this.errorHandler = eh),
							(this.malformedUriErrorHandler = th),
							(this.navigated = !1),
							(this.lastSuccessfulId = -1),
							(this.hooks = { beforePreactivation: rh, afterPreactivation: rh }),
							(this.urlHandlingStrategy = new uh()),
							(this.routeReuseStrategy = new $p()),
							(this.onSameUrlNavigation = 'ignore'),
							(this.paramsInheritanceStrategy = 'emptyOnly'),
							(this.urlUpdateStrategy = 'deferred'),
							(this.relativeLinkResolution = 'legacy'),
							(this.ngModule = t.get(ru)),
							(this.console = t.get(zt));
						var i = t.get(rr);
						(this.isNgZoneEnabled = i instanceof rr),
							this.resetConfig(a),
							(this.currentUrlTree = new xc(new kc([], {}), {}, null)),
							(this.rawUrlTree = this.currentUrlTree),
							(this.browserUrlTree = this.currentUrlTree),
							(this.configLoader = new lh(
								r,
								s,
								function(l) {
									return o.triggerEvent(new $i(l));
								},
								function(l) {
									return o.triggerEvent(new Xi(l));
								}
							)),
							(this.routerState = Kc(this.currentUrlTree, this.rootComponentType)),
							(this.transitions = new La({
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
								Wa(function(l) {
									return 0 !== l.id;
								}),
								Q(function(l) {
									return r({}, l, { extractedUrl: n.urlHandlingStrategy.extract(l.rawUrl) });
								}),
								wo(function(l) {
									var e,
										t,
										s,
										a,
										i = !1,
										c = !1;
									return Ua(l).pipe(
										Po(function(l) {
											n.currentNavigation = {
												id: l.id,
												initialUrl: l.currentRawUrl,
												extractedUrl: l.extractedUrl,
												trigger: l.source,
												extras: l.extras,
												previousNavigation: n.lastSuccessfulNavigation ? r({}, n.lastSuccessfulNavigation, { previousNavigation: null }) : null
											};
										}),
										wo(function(l) {
											var e,
												t,
												s,
												a,
												o = !n.navigated || l.extractedUrl.toString() !== n.browserUrlTree.toString();
											if (('reload' === n.onSameUrlNavigation || o) && n.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
												return Ua(l).pipe(
													wo(function(l) {
														var e = n.transitions.getValue();
														return u.next(new Bi(l.id, n.serializeUrl(l.extractedUrl), l.source, l.restoredState)), e !== n.transitions.getValue() ? qa : [l];
													}),
													wo(function(l) {
														return Promise.resolve(l);
													}),
													((e = n.ngModule.injector),
													(t = n.configLoader),
													(s = n.urlSerializer),
													(a = n.config),
													function(l) {
														return l.pipe(
															wo(function(l) {
																return (function(n, u, e, t, r) {
																	return new kp(n, u, e, l.extractedUrl, r).apply();
																})(e, t, s, 0, a).pipe(
																	Q(function(n) {
																		return r({}, l, { urlAfterRedirects: n });
																	})
																);
															})
														);
													}),
													Po(function(l) {
														n.currentNavigation = r({}, n.currentNavigation, { finalUrl: l.urlAfterRedirects });
													}),
													(function(l, u, e, t, s) {
														return function(e) {
															return e.pipe(
																$(function(e) {
																	return (function(l, n, u, e, t, r) {
																		return void 0 === t && (t = 'emptyOnly'), void 0 === r && (r = 'legacy'), new zp(l, n, u, e, t, r).recognize();
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
													Po(function(l) {
														'eager' === n.urlUpdateStrategy &&
															(l.extras.skipLocationChange || n.setBrowserUrl(l.urlAfterRedirects, !!l.extras.replaceUrl, l.id, l.extras.state),
															(n.browserUrlTree = l.urlAfterRedirects));
													}),
													Po(function(l) {
														var e = new Qi(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														u.next(e);
													})
												);
											if (o && n.rawUrlTree && n.urlHandlingStrategy.shouldProcessUrl(n.rawUrlTree)) {
												var i = l.extractedUrl,
													c = l.source,
													p = l.restoredState,
													h = l.extras,
													d = new Bi(l.id, n.serializeUrl(i), c, p);
												u.next(d);
												var f = Kc(i, n.rootComponentType).snapshot;
												return Ua(r({}, l, { targetSnapshot: f, urlAfterRedirects: i, extras: r({}, h, { skipLocationChange: !1, replaceUrl: !1 }) }));
											}
											return (n.rawUrlTree = l.rawUrl), (n.browserUrlTree = l.urlAfterRedirects), l.resolve(null), qa;
										}),
										Yp(function(l) {
											var u = l.extras;
											return n.hooks.beforePreactivation(l.targetSnapshot, {
												navigationId: l.id,
												appliedUrlTree: l.extractedUrl,
												rawUrlTree: l.rawUrl,
												skipLocationChange: !!u.skipLocationChange,
												replaceUrl: !!u.replaceUrl
											});
										}),
										Po(function(l) {
											var u = new Wi(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
											n.triggerEvent(u);
										}),
										Q(function(l) {
											return r({}, l, {
												guards: ((u = l.targetSnapshot), (e = l.currentSnapshot), (t = n.rootContexts), (s = u._root), Mp(s, e ? e._root : null, t, [s.value]))
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
															? Ua(r({}, u, { guardsResult: !0 }))
															: (function(l, n, u, e) {
																	return J(o).pipe(
																		$(function(l) {
																			return (function(l, n, u, e, t) {
																				var r = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
																				return r && 0 !== r.length
																					? Ua(
																							r.map(function(r) {
																								var s,
																									a = Tp(r, n, t);
																								if (
																									(function(l) {
																										return l && bp(l.canDeactivate);
																									})(a)
																								)
																									s = jc(a.canDeactivate(l, n, u, e));
																								else {
																									if (!bp(a)) throw new Error('Invalid CanDeactivate guard');
																									s = jc(a(l, n, u, e));
																								}
																								return s.pipe(bo());
																							})
																					  ).pipe(Np())
																					: Ua(!0);
																			})(l.component, l.route, u, n, e);
																		}),
																		bo(function(l) {
																			return !0 !== l;
																		}, !0)
																	);
															  })(0, e, t, l).pipe(
																	$(function(u) {
																		return u && 'boolean' == typeof u
																			? (function(l, n, u, e) {
																					return J(a).pipe(
																						Eo(function(n) {
																							return J([Up(n.route.parent, e), Dp(n.route, e), Fp(l, n.path, u), Lp(l, n.route, u)]).pipe(
																								Qa(),
																								bo(function(l) {
																									return !0 !== l;
																								}, !0)
																							);
																						}),
																						bo(function(l) {
																							return !0 !== l;
																						}, !0)
																					);
																			  })(e, 0, l, n)
																			: Ua(u);
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
										Po(function(l) {
											if (yp(l.guardsResult)) {
												var u = cc('Redirecting to "' + n.serializeUrl(l.guardsResult) + '"');
												throw ((u.url = l.guardsResult), u);
											}
										}),
										Po(function(l) {
											var u = new Ki(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
											n.triggerEvent(u);
										}),
										Wa(function(l) {
											if (!l.guardsResult) {
												n.resetUrlToCurrentUrlTree();
												var e = new Gi(l.id, n.serializeUrl(l.extractedUrl), '');
												return u.next(e), l.resolve(!1), !1;
											}
											return !0;
										}),
										Yp(function(l) {
											if (l.guards.canActivateChecks.length)
												return Ua(l).pipe(
													Po(function(l) {
														var u = new Yi(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
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
																			Eo(function(l) {
																				return (function(l, u, e, t) {
																					return (function(l, n, u, e) {
																						var t = Object.keys(l);
																						if (0 === t.length) return Ua({});
																						if (1 === t.length) {
																							var r = t[0];
																							return Kp(l[r], n, u, e).pipe(
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
																									return Kp(l[t], n, u, e).pipe(
																										Q(function(l) {
																											return (s[t] = l), l;
																										})
																									);
																								})
																							)
																							.pipe(
																								io(),
																								Q(function() {
																									return s;
																								})
																							);
																					})(l._resolve, l, n, t).pipe(
																						Q(function(n) {
																							return (l._resolvedData = n), (l.data = r({}, l.data, Jc(l, e).resolve)), null;
																						})
																					);
																				})(l.route, 0, u, e);
																			}),
																			(function(l, n) {
																				return arguments.length >= 2
																					? function(u) {
																							return E(ko(l, n), Xa(1), so(n))(u);
																					  }
																					: function(n) {
																							return E(
																								ko(function(n, u, e) {
																									return l(n, u, e + 1);
																								}),
																								Xa(1)
																							)(n);
																					  };
																			})(function(l, n) {
																				return l;
																			}),
																			Q(function(n) {
																				return l;
																			})
																	  )
																	: Ua(l);
															})
														);
													}),
													Po(function(l) {
														var u = new Ji(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														n.triggerEvent(u);
													})
												);
											var u, e;
										}),
										Yp(function(l) {
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
												s =
													((t = (function l(n, u, e) {
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
															return new Zc(i, t);
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
															i = new Yc(
																new La((a = u.value).url),
																new La(a.params),
																new La(a.queryParams),
																new La(a.fragment),
																new La(a.data),
																a.outlet,
																a.component,
																a
															);
														return (
															(t = u.children.map(function(u) {
																return l(n, u);
															})),
															new Zc(i, t)
														);
													})(n.routeReuseStrategy, (u = l.targetSnapshot)._root, (e = l.currentRouterState) ? e._root : void 0)),
													new Wc(t, u));
											return r({}, l, { targetRouterState: s });
										}),
										Po(function(l) {
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
											return new gp(s, l.targetRouterState, l.currentRouterState, a).activate(t), l;
										})),
										Po({
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
												var e = new Gi(l.id, n.serializeUrl(l.extractedUrl), 'Navigation ID ' + l.id + ' is not equal to the current navigation id ' + n.navigationId);
												u.next(e), l.resolve(!1);
											}
											n.currentNavigation = null;
										}),
										function(l) {
											return l.lift(new To(e));
										}),
										co(function(e) {
											if (((c = !0), (a = e) && a[ic])) {
												var t = yp(e.url);
												t || ((n.navigated = !0), n.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl));
												var r = new Gi(l.id, n.serializeUrl(l.extractedUrl), e.message);
												u.next(r), l.resolve(!1), t && n.navigateByUrl(e.url);
											} else {
												n.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl);
												var s = new Zi(l.id, n.serializeUrl(l.extractedUrl), e);
												u.next(s);
												try {
													l.resolve(n.errorHandler(e));
												} catch (o) {
													l.reject(o);
												}
											}
											var a;
											return qa;
										})
									);
								})
							);
						}),
						(l.prototype.resetRootComponentType = function(l) {
							(this.rootComponentType = l), (this.routerState.root.component = this.rootComponentType);
						}),
						(l.prototype.getTransition = function() {
							var l = this.transitions.value;
							return (l.urlAfterRedirects = this.browserUrlTree), l;
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
							dc(l), (this.config = l.map(mc)), (this.navigated = !1), (this.lastSuccessfulId = -1);
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
							on() && s && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
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
									if (0 === u.length) return rp(n.root, n.root, n, e, t);
									var r = (function(l) {
										if ('string' == typeof l[0] && 1 === l.length && '/' === l[0]) return new sp(!0, 0, l);
										var n = 0,
											u = !1,
											e = l.reduce(function(l, e, t) {
												if ('object' == typeof e && null != e) {
													if (e.outlets) {
														var r = {};
														return (
															wc(e.outlets, function(l, n) {
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
										return new sp(u, n, e);
									})(u);
									if (r.toRoot()) return rp(n.root, new kc([], {}), n, e, t);
									var s = (function(l, u, e) {
											if (l.isAbsolute) return new ap(n.root, !0, 0);
											if (-1 === e.snapshot._lastPathIndex) return new ap(e.snapshot._urlSegment, !0, 0);
											var t = tp(l.commands[0]) ? 0 : 1;
											return (function(n, u, r) {
												for (var s = e.snapshot._urlSegment, a = e.snapshot._lastPathIndex + t, o = l.numberOfDoubleDots; o > a; ) {
													if (((o -= a), !(s = s.parent))) throw new Error("Invalid number of '../'");
													a = s.segments.length;
												}
												return new ap(s, !1, a - o);
											})();
										})(r, 0, l),
										a = s.processChildren ? cp(s.segmentGroup, s.index, r.commands) : ip(s.segmentGroup, s.index, r.commands);
									return rp(s.segmentGroup, a, n, e, t);
								})(i, this.currentUrlTree, l, h, p)
							);
						}),
						(l.prototype.navigateByUrl = function(l, n) {
							void 0 === n && (n = { skipLocationChange: !1 }),
								on() && this.isNgZoneEnabled && !rr.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
							var u = yp(l) ? l : this.parseUrl(l),
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
							if (yp(l)) return _c(this.currentUrlTree, l, n);
							var u = this.parseUrl(l);
							return _c(this.currentUrlTree, u, n);
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
										l.events.next(new qi(n.id, l.serializeUrl(n.extractedUrl), l.serializeUrl(l.currentUrlTree))),
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
				ah = (function() {
					return function() {
						(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new oh()), (this.attachRef = null);
					};
				})(),
				oh = (function() {
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
							return n || ((n = new ah()), this.contexts.set(l, n)), n;
						}),
						(l.prototype.getContext = function(l) {
							return this.contexts.get(l) || null;
						}),
						l
					);
				})(),
				ih = (function() {
					function l(l, n, u, e, t) {
						(this.parentContexts = l),
							(this.location = n),
							(this.resolver = u),
							(this.changeDetector = t),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new Ot()),
							(this.deactivateEvents = new Ot()),
							(this.name = e || sc),
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
								t = new ch(l, e, this.location.injector);
							(this.activated = this.location.createComponent(u, this.location.length, t)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
						}),
						l
					);
				})(),
				ch = (function() {
					function l(l, n, u) {
						(this.route = l), (this.childContexts = n), (this.parent = u);
					}
					return (
						(l.prototype.get = function(l, n) {
							return l === Yc ? this.route : l === oh ? this.childContexts : this.parent.get(l, n);
						}),
						l
					);
				})(),
				ph = (function() {
					return function() {};
				})(),
				hh = (function() {
					function l() {}
					return (
						(l.prototype.preload = function(l, n) {
							return n().pipe(
								co(function() {
									return Ua(null);
								})
							);
						}),
						l
					);
				})(),
				dh = (function() {
					function l() {}
					return (
						(l.prototype.preload = function(l, n) {
							return Ua(null);
						}),
						l
					);
				})(),
				fh = (function() {
					function l(l, n, u, e, t) {
						(this.router = l),
							(this.injector = e),
							(this.preloadingStrategy = t),
							(this.loader = new lh(
								n,
								u,
								function(n) {
									return l.triggerEvent(new $i(n));
								},
								function(n) {
									return l.triggerEvent(new Xi(n));
								}
							));
					}
					return (
						(l.prototype.setUpPreloading = function() {
							var l = this;
							this.subscription = this.router.events
								.pipe(
									Wa(function(l) {
										return l instanceof qi;
									}),
									Eo(function() {
										return l.preload();
									})
								)
								.subscribe(function() {});
						}),
						(l.prototype.preload = function() {
							var l = this.injector.get(ru);
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
				gh = (function() {
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
								n instanceof Bi
									? ((l.store[l.lastId] = l.viewportScroller.getScrollPosition()),
									  (l.lastSource = n.navigationTrigger),
									  (l.restoredId = n.restoredState ? n.restoredState.navigationId : 0))
									: n instanceof qi && ((l.lastId = n.id), l.scheduleScrollEvent(n, l.router.parseUrl(n.urlAfterRedirects).fragment));
							});
						}),
						(l.prototype.consumeScrollEvents = function() {
							var l = this;
							return this.router.events.subscribe(function(n) {
								n instanceof tc &&
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
							this.router.triggerEvent(new tc(l, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, n));
						}),
						(l.prototype.ngOnDestroy = function() {
							this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
						}),
						l
					);
				})(),
				mh = new Ml('ROUTER_CONFIGURATION'),
				bh = new Ml('ROUTER_FORROOT_GUARD'),
				yh = [
					ya,
					{ provide: Pc, useClass: Ic },
					{ provide: sh, useFactory: Ch, deps: [_r, Pc, oh, ya, Zl, kr, Yt, Xp, mh, [nh, new fl()], [Jp, new fl()]] },
					oh,
					{ provide: Yc, useFactory: Sh, deps: [sh] },
					{ provide: kr, useClass: Er },
					fh,
					dh,
					hh,
					{ provide: mh, useValue: { enableTracing: !1 } }
				];
			function vh() {
				return new br('Router', sh);
			}
			var wh = (function() {
				function l(l, n) {}
				var n;
				return (
					(n = l),
					(l.forRoot = function(l, u) {
						return {
							ngModule: n,
							providers: [
								yh,
								kh(l),
								{ provide: bh, useFactory: xh, deps: [[sh, new fl(), new ml()]] },
								{ provide: mh, useValue: u || {} },
								{ provide: ma, useFactory: _h, deps: [fa, [new dl(ba), new fl()], mh] },
								{ provide: gh, useFactory: jh, deps: [sh, Na, mh] },
								{ provide: ph, useExisting: u && u.preloadingStrategy ? u.preloadingStrategy : dh },
								{ provide: br, multi: !0, useFactory: vh },
								[Eh, { provide: Rt, multi: !0, useFactory: Ph, deps: [Eh] }, { provide: Oh, useFactory: Ih, deps: [Eh] }, { provide: Vt, multi: !0, useExisting: Oh }]
							]
						};
					}),
					(l.forChild = function(l) {
						return { ngModule: n, providers: [kh(l)] };
					}),
					l
				);
			})();
			function jh(l, n, u) {
				return u.scrollOffset && n.setOffset(u.scrollOffset), new gh(l, n, u);
			}
			function _h(l, n, u) {
				return void 0 === u && (u = {}), u.useHash ? new wa(l, n) : new ja(l, n);
			}
			function xh(l) {
				if (l) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function kh(l) {
				return [{ provide: en, multi: !0, useValue: l }, { provide: Xp, multi: !0, useValue: l }];
			}
			function Ch(l, n, u, e, t, r, s, a, o, i, c) {
				void 0 === o && (o = {});
				var p = new sh(null, n, u, e, t, r, s, yc(a));
				if (
					(i && (p.urlHandlingStrategy = i),
					c && (p.routeReuseStrategy = c),
					o.errorHandler && (p.errorHandler = o.errorHandler),
					o.malformedUriErrorHandler && (p.malformedUriErrorHandler = o.malformedUriErrorHandler),
					o.enableTracing)
				) {
					var h = Ao();
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
			function Sh(l) {
				return l.routerState.root;
			}
			var Eh = (function() {
				function l(l) {
					(this.injector = l), (this.initNavigation = !1), (this.resultOfPreactivationDone = new N());
				}
				return (
					(l.prototype.appInitializer = function() {
						var l = this;
						return this.injector.get(ga, Promise.resolve(null)).then(function() {
							var n = null,
								u = new Promise(function(l) {
									return (n = l);
								}),
								e = l.injector.get(sh),
								t = l.injector.get(mh);
							if (l.isLegacyDisabled(t) || l.isLegacyEnabled(t)) n(!0);
							else if ('disabled' === t.initialNavigation) e.setUpLocationChangeListener(), n(!0);
							else {
								if ('enabled' !== t.initialNavigation) throw new Error("Invalid initialNavigation options: '" + t.initialNavigation + "'");
								(e.hooks.afterPreactivation = function() {
									return l.initNavigation ? Ua(null) : ((l.initNavigation = !0), n(!0), l.resultOfPreactivationDone);
								}),
									e.initialNavigation();
							}
							return u;
						});
					}),
					(l.prototype.bootstrapListener = function(l) {
						var n = this.injector.get(mh),
							u = this.injector.get(fh),
							e = this.injector.get(gh),
							t = this.injector.get(sh),
							r = this.injector.get(_r);
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
			function Ph(l) {
				return l.appInitializer.bind(l);
			}
			function Ih(l) {
				return l.bootstrapListener.bind(l);
			}
			var Oh = new Ml('Router Initializer'),
				Th = Xu({ encapsulation: 2, styles: [], data: {} });
			function Mh(l) {
				return ts(
					0,
					[(l()(), Hr(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)), it(1, 212992, null, 0, ih, [oh, Nu, uu, [8, null], Pu], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			function Rh(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 1, 'ng-component', [], null, null, null, Mh, Th)), it(1, 49152, null, 0, rc, [], null, null)], null, null);
			}
			var Ah = Fe('ng-component', rc, Rh, {}, {}, []),
				Nh = (function() {
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
				Dh = (function() {
					return function() {};
				})(),
				Uh = (function() {
					return function() {};
				})(),
				Lh = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				Fh = (function() {
					return function() {};
				})(),
				Vh = (function() {
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
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				Gh = (function() {
					return function() {};
				})(),
				Zh = (function() {
					return function() {};
				})(),
				Qh = (function() {
					return function() {};
				})(),
				Wh = (function() {
					return function() {};
				})(),
				Kh = (function() {
					return function() {};
				})(),
				Yh = (function() {
					return function() {};
				})(),
				Jh = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				$h = (function() {
					return function() {};
				})(),
				Xh = (function() {
					return function() {};
				})(),
				ld = (function() {
					return function() {};
				})(),
				nd = (function() {
					return function() {};
				})(),
				ud = (function() {
					return function() {};
				})(),
				ed = (function() {
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
				td = (function() {
					return function() {};
				})(),
				rd = (function() {
					return function() {};
				})(),
				sd = Xu({
					encapsulation: 2,
					styles: [
						'@charset "UTF-8";a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:"\u2012";color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex="-1"]:focus,input[type=range]:focus{outline:0}.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{align-items:flex-start;display:flex;justify-content:flex-start}.col,.col-full{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{justify-content:center}.align-l,.col.align-t{justify-content:flex-start}.align-r,.col.align-b{justify-content:flex-end}.align-m,.col.align-c{align-items:center}.align-b,.col.align-r{align-items:flex-end}.align-t,.col.align-l{align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{justify-content:space-between}.align-st{align-items:stretch}.align-cm{align-items:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{flex-grow:0;flex-shrink:0}.item-g-0{flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{flex-grow:1;flex-shrink:1}.item-g-1{flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{flex-grow:2;flex-shrink:2}.item-g-2{flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{flex-grow:3;flex-shrink:3}.item-g-3{flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{flex-grow:4;flex-shrink:4}.item-g-4{flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{flex-grow:5;flex-shrink:5}.item-g-5{flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{flex-grow:6;flex-shrink:6}.item-g-6{flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{flex-grow:7;flex-shrink:7}.item-g-7{flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{flex-grow:8;flex-shrink:8}.item-g-8{flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{flex-grow:9;flex-shrink:9}.item-g-9{flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{flex-grow:10;flex-shrink:10}.item-g-10{flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{flex-grow:11;flex-shrink:11}.item-g-11{flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{flex-grow:12;flex-shrink:12}.item-g-12{flex-grow:12}.item-s-12{flex-shrink:12}[class*=flex-g]{flex-basis:auto}.item-order-1{order:1}.item-order-2{order:2}.item-order-3{order:3}.item-order-4{order:4}.item-order-5{order:5}.item-order-6{order:6}.item-order-7{order:7}.item-order-8{order:8}.item-order-9{order:9}.item-order-10{order:10}.item-order-11{order:11}.item-order-12{order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:46rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}:disabled,[disabled]{background-color:#efefef;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}'
					],
					data: {}
				});
			function ad(l) {
				return ts(
					0,
					[
						Qr(671088640, 1, { content: 0 }),
						(l()(),
						Hr(
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
						(l()(), ns(-1, null, ['Skip to content'])),
						$r(null, 0)
					],
					null,
					null
				);
			}
			var od = Xu({
				encapsulation: 0,
				styles: [
					'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;color:#fff;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
				],
				data: {}
			});
			function id(l) {
				return ts(
					0,
					[
						(l()(),
						Hr(
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
						(l()(), ns(-1, null, [' X\n']))
					],
					null,
					null
				);
			}
			function cd(l) {
				return ts(
					0,
					[
						Qr(402653184, 1, { message: 0 }),
						(l()(), Hr(1, 0, [[1, 0], ['message', 1]], null, 1, 'p', [['tabindex', '-1']], [[1, 'id', 0]], null, null, null, null)),
						$r(null, 0),
						(l()(), zr(16777216, null, null, 1, null, id)),
						it(4, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						l(n, 4, 0, n.component.close);
					},
					function(l, n) {
						l(n, 1, 0, n.component.id);
					}
				);
			}
			var pd = Xu({
				encapsulation: 0,
				styles: [
					'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
				],
				data: {}
			});
			function hd(l) {
				return ts(0, [$r(null, 0)], null, null);
			}
			var dd = Xu({
				encapsulation: 0,
				styles: [
					'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;flex-grow:1;flex-shrink:0}'
				],
				data: {}
			});
			function fd(l) {
				return ts(0, [$r(null, 0)], null, null);
			}
			var gd = Xu({
				encapsulation: 0,
				styles: [
					'@charset "UTF-8";.checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex:1 1 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;border:.0625rem solid #bdbdbd}.form-field[_nghost-%COMP%]:not(:disabled), .form-field[_nghost-%COMP%]:not([disabled]){background-color:#fff}.form-field[_nghost-%COMP%]:-moz-read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[_nghost-%COMP%]:read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[type=checkbox][_nghost-%COMP%], .form-field[type=radio][_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;position:relative;width:1rem}.form-field[type=checkbox][_nghost-%COMP%]::after, .form-field[type=radio][_nghost-%COMP%]::after{display:block;font-size:1.175rem;height:.95rem;left:0;line-height:.8rem;position:absolute;text-align:center;top:0;width:.95rem}.form-field[type=checkbox][_nghost-%COMP%]:checked::after{content:"\u2713"}.form-field[type=radio][_nghost-%COMP%]{border-radius:50%}.form-field[type=radio][_nghost-%COMP%]:checked::after{content:"\u25cf"}.form-field[_nghost-%COMP%]:hover{transition-duration:.3s;transition-property:border;transition-timing-function:linear;border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3;outline:#2196f3 dotted 1px}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){flex:1 0 13.75rem;padding:.5rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-moz-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{background-color:inherit;color:#8d8d8d;height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#8d8d8d}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{flex:0 0 7.5rem;flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{flex:none;font-size:1rem;padding-left:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{flex:1 0 auto}'
				],
				data: {}
			});
			function md(l) {
				return ts(0, [$r(null, 0)], null, null);
			}
			var bd = Xu({
				encapsulation: 0,
				styles: [
					'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
				],
				data: {}
			});
			function yd(l) {
				return ts(0, [$r(null, 0)], null, null);
			}
			var vd = (function() {
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
				wd = Xu({
					encapsulation: 0,
					styles: [
						[
							'.styleguide[_ngcontent-%COMP%]{margin-left:16rem}.styleguide[_ngcontent-%COMP%]   .hljs-attr[_ngcontent-%COMP%]{color:#954121}.styleguide-menu[_ngcontent-%COMP%]{left:2rem;top:5.5rem;width:14rem}.styleguide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#6a0080}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .styleguide[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:.875rem}.styleguide[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-width:15rem}#styleguide[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;color:#000;background:#f8f8ff;-webkit-text-size-adjust:none}.diff[_ngcontent-%COMP%]   .hljs-header[_ngcontent-%COMP%], .hljs-comment[_ngcontent-%COMP%]{color:#408080;font-style:italic}.assignment[_ngcontent-%COMP%], .css[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-subst[_ngcontent-%COMP%], .hljs-winutils[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#954121}.hljs-hexcolor[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%]{color:#40a070}.hljs-doctag[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-value[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{color:#219161}.hljs-id[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%]{color:#19469d}.hljs-params[_ngcontent-%COMP%]{color:#00f}.hljs-subst[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{font-weight:400}.haskell[_ngcontent-%COMP%]   .hljs-label[_ngcontent-%COMP%], .hljs-class[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-command[_ngcontent-%COMP%]{color:#458;font-weight:700}.django[_ngcontent-%COMP%]   .hljs-tag[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-rule[_ngcontent-%COMP%]   .hljs-property[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:navy;font-weight:400}.hljs-attr[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .instancevar[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-body[_ngcontent-%COMP%]{color:teal}.hljs-regexp[_ngcontent-%COMP%]{color:#b68}.hljs-class[_ngcontent-%COMP%]{color:#458;font-weight:700}.hljs-symbol[_ngcontent-%COMP%], .input_number[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .keymethods[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-special[_ngcontent-%COMP%]{color:#990073}.builtin[_ngcontent-%COMP%], .constructor[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#0086b3}.hljs-cdata[_ngcontent-%COMP%], .hljs-doctype[_ngcontent-%COMP%], .hljs-pi[_ngcontent-%COMP%], .hljs-pragma[_ngcontent-%COMP%], .hljs-preprocessor[_ngcontent-%COMP%], .hljs-shebang[_ngcontent-%COMP%]{color:#999;font-weight:700}.hljs-deletion[_ngcontent-%COMP%]{background:#fdd}.hljs-addition[_ngcontent-%COMP%]{background:#dfd}.diff[_ngcontent-%COMP%]   .hljs-change[_ngcontent-%COMP%]{background:#0086b3}.hljs-chunk[_ngcontent-%COMP%]{color:#aaa}.tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{opacity:.5}.flexbox[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:wrap}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][_ngcontent-%COMP%]{height:15.625rem;width:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][class*=wrap][_ngcontent-%COMP%]{width:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.col-full[_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][_ngcontent-%COMP%]{height:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][class*=wrap][_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.row[_ngcontent-%COMP%]{width:15.625rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;background-color:#2196f3;color:#fff;-webkit-box-pack:center;justify-content:center;min-height:6.25rem;min-width:7.5rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50;min-height:4.6875rem;min-width:6.25rem}.box[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:1rem;padding:0}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;text-align:center}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50}.box[_ngcontent-%COMP%]   p[class*=pad][_ngcontent-%COMP%]{display:inline-block;margin:0 1rem}'
						]
					],
					data: {}
				});
			function jd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Close']))
					],
					null,
					null
				);
			}
			function _d(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Empty']))
					],
					null,
					null
				);
			}
			function xd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Group'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Rounded'])),
						(l()(), Hr(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function kd(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Cd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Accordion'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Expand']))
					],
					null,
					null
				);
			}
			function Sd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 12, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Background'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Border'])),
						(l()(), Hr(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Hover'])),
						(l()(), Hr(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function Ed(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 24, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Container Column'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Container Row'])),
						(l()(), Hr(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item Column'])),
						(l()(), Hr(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item Order'])),
						(l()(), Hr(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item Row'])),
						(l()(), Hr(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item Size'])),
						(l()(), Hr(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Wrap Column'])),
						(l()(), Hr(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(23, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Wrap Row']))
					],
					null,
					null
				);
			}
			function Pd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 21, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Checkbox'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Field'])),
						(l()(), Hr(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Field Group'])),
						(l()(), Hr(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Fieldset'])),
						(l()(), Hr(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Form Group'])),
						(l()(), Hr(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Label'])),
						(l()(), Hr(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function Id(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Area'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Container'])),
						(l()(), Hr(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item']))
					],
					null,
					null
				);
			}
			function Od(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Container'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Sticky Footer']))
					],
					null,
					null
				);
			}
			function Td(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Md(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Items'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Links'])),
						(l()(), Hr(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Placement']))
					],
					null,
					null
				);
			}
			function Rd(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Ad(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Nd(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Dd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Margin'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Padding']))
					],
					null,
					null
				);
			}
			function Ud(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Ld(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Fd(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Vd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 15, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Border'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Hover'])),
						(l()(), Hr(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Striped'])),
						(l()(), Hr(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Table Cell'])),
						(l()(), Hr(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Table Row']))
					],
					null,
					null
				);
			}
			function zd(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Hd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Font'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function Bd(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function qd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Hide'])),
						(l()(), Hr(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Hr(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Show']))
					],
					null,
					null
				);
			}
			function Gd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 116, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Alerts are styled with an '])),
						(l()(), Hr(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.alert-[bad || good || info || warn]'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(7, 0, null, null, 18, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(9, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(10, { flexbox: 0, box: 1 }),
						(l()(), Hr(11, 0, null, null, 2, 'aside', [['class', 'alert-bad']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, cd, od)),
						it(12, 114688, null, 0, Nh, [ou], { class: [0, 'class'] }, null),
						(l()(), ns(-1, 0, ['bad'])),
						(l()(), Hr(14, 0, null, null, 2, 'aside', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, cd, od)),
						it(15, 114688, null, 0, Nh, [ou], { class: [0, 'class'] }, null),
						(l()(), ns(-1, 0, ['good'])),
						(l()(), Hr(17, 0, null, null, 2, 'aside', [['class', 'alert-info']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, cd, od)),
						it(18, 114688, null, 0, Nh, [ou], { class: [0, 'class'] }, null),
						(l()(), ns(-1, 0, ['info'])),
						(l()(), Hr(20, 0, null, null, 2, 'aside', [['class', 'alert-warn']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, cd, od)),
						it(21, 114688, null, 0, Nh, [ou], { class: [0, 'class'] }, null),
						(l()(), ns(-1, 0, ['warn'])),
						(l()(), Hr(23, 0, null, null, 2, 'ez-alert', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, cd, od)),
						it(24, 114688, null, 0, Nh, [ou], { class: [0, 'class'] }, null),
						(l()(), ns(-1, 0, ['good'])),
						(l()(), Hr(26, 0, null, null, 90, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(27, 0, null, null, 89, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(28, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(30, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(33, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(36, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"alert-bad"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bad'])),
						(l()(), Hr(40, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(42, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(46, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(48, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(51, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(54, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"alert-good"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['good'])),
						(l()(), Hr(58, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(64, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(69, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(72, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"alert-info"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['info'])),
						(l()(), Hr(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"alert-warn"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['warn'])),
						(l()(), Hr(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(100, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ez-alert'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(105, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(108, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"alert-good"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['good'])),
						(l()(), Hr(112, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(114, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ez-alert'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0, 'alert-bad'), l(n, 15, 0, 'alert-good'), l(n, 18, 0, 'alert-info'), l(n, 21, 0, 'alert-warn'), l(n, 24, 0, 'alert-good');
					},
					function(l, n) {
						l(n, 11, 0, Ye(n, 12).ariaLabelledby, Ye(n, 12).hostClass, Ye(n, 12).role, Ye(n, 12).tabindex),
							l(n, 14, 0, Ye(n, 15).ariaLabelledby, Ye(n, 15).hostClass, Ye(n, 15).role, Ye(n, 15).tabindex),
							l(n, 17, 0, Ye(n, 18).ariaLabelledby, Ye(n, 18).hostClass, Ye(n, 18).role, Ye(n, 18).tabindex),
							l(n, 20, 0, Ye(n, 21).ariaLabelledby, Ye(n, 21).hostClass, Ye(n, 21).role, Ye(n, 21).tabindex),
							l(n, 23, 0, Ye(n, 24).ariaLabelledby, Ye(n, 24).hostClass, Ye(n, 24).role, Ye(n, 24).tabindex);
					}
				);
			}
			function Zd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 55, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Close'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Alerts are closed by adding a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.close'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(9, 0, null, null, 9, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(),
						Hr(13, 0, null, null, 2, 'aside', [['class', 'alert-good close']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, cd, od)),
						it(14, 114688, null, 0, Nh, [ou], { class: [0, 'class'] }, null),
						(l()(), ns(-1, 0, ['close'])),
						(l()(),
						Hr(16, 0, null, null, 2, 'ez-alert', [['class', 'close alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, cd, od)),
						it(17, 114688, null, 0, Nh, [ou], { class: [0, 'class'] }, null),
						(l()(), ns(-1, 0, ['close'])),
						(l()(), Hr(19, 0, null, null, 36, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(20, 0, null, null, 35, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(21, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(23, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(26, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(29, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"alert-good close"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['close'])),
						(l()(), Hr(33, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(35, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['aside'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(39, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(41, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ez-alert'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(44, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(47, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"close alert-good"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['close'])),
						(l()(), Hr(51, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(53, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ez-alert'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0, 'alert-good close'), l(n, 17, 0, 'close alert-good');
					},
					function(l, n) {
						l(n, 13, 0, Ye(n, 14).ariaLabelledby, Ye(n, 14).hostClass, Ye(n, 14).role, Ye(n, 14).tabindex),
							l(n, 16, 0, Ye(n, 17).ariaLabelledby, Ye(n, 17).hostClass, Ye(n, 17).role, Ye(n, 17).tabindex);
					}
				);
			}
			function Qd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Badges are styled with a '])),
						(l()(), Hr(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.badge-[sm || md || lg]'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(7, 0, null, null, 15, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(9, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(10, { flexbox: 0, box: 1 }),
						(l()(), Hr(11, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, hd, pd)),
						it(12, 114688, null, 0, Lh, [], null, null),
						(l()(), ns(-1, 0, ['1'])),
						(l()(), Hr(14, 0, null, null, 2, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, hd, pd)),
						it(15, 114688, null, 0, Lh, [], null, null),
						(l()(), ns(-1, 0, ['20'])),
						(l()(), Hr(17, 0, null, null, 2, 'p', [['class', 'badge-lg bg-dk-blue text-white']], null, null, null, hd, pd)),
						it(18, 114688, null, 0, Lh, [], null, null),
						(l()(), ns(-1, 0, ['300'])),
						(l()(), Hr(20, 0, null, null, 2, 'ez-badge', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, hd, pd)),
						it(21, 114688, null, 0, Lh, [], null, null),
						(l()(), ns(-1, 0, ['10'])),
						(l()(), Hr(23, 0, null, null, 72, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(24, 0, null, null, 71, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(25, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(27, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(30, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(33, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['1'])),
						(l()(), Hr(37, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(39, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(43, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(45, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(48, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(51, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['20'])),
						(l()(), Hr(55, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(57, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(61, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(63, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(69, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"badge-lg bg-dk-blue text-white"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['300'])),
						(l()(), Hr(73, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(75, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(79, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(81, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ez-badge'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['10'])),
						(l()(), Hr(91, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(93, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ez-badge'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 15, 0), l(n, 18, 0), l(n, 21, 0);
					},
					null
				);
			}
			function Wd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 50, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Empty'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['If a badge does not contain text, it is not rendered.'])),
						(l()(), Hr(6, 0, null, null, 8, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(8, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(9, { flexbox: 0, box: 1 }),
						(l()(), Hr(10, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, hd, pd)),
						it(11, 114688, null, 0, Lh, [], null, null),
						(l()(), ns(-1, 0, ['1'])),
						(l()(), Hr(13, 0, null, null, 1, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, hd, pd)),
						it(14, 114688, null, 0, Lh, [], null, null),
						(l()(), Hr(15, 0, null, null, 35, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(16, 0, null, null, 34, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(19, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(22, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(25, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['1'])),
						(l()(), Hr(29, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(31, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(35, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(37, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(40, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(43, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(46, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(48, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 9, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 8, 0, 'pad-a-sm', e), l(n, 11, 0), l(n, 14, 0);
					},
					null
				);
			}
			function Kd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 115, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Buttons are styled with a '])),
						(l()(), Hr(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.btn-[xs || sm || md || lg || xl || full]'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(7, 0, null, null, 21, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(9, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(10, { flexbox: 0, box: 1 }),
						(l()(), Hr(11, 0, null, null, 2, 'button', [['class', 'btn-xs bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(12, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['xs'])),
						(l()(), Hr(14, 0, null, null, 2, 'button', [['class', 'btn-sm bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(15, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['sm'])),
						(l()(), Hr(17, 0, null, null, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(18, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(20, 0, null, null, 2, 'button', [['class', 'btn-lg bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(21, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['lg'])),
						(l()(), Hr(23, 0, null, null, 2, 'button', [['class', 'btn-xl bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(24, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['xl'])),
						(l()(), Hr(26, 0, null, null, 2, 'button', [['class', 'btn-full bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(27, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['full'])),
						(l()(), Hr(29, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(30, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<button '])),
						(l()(), Hr(32, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(33, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(36, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-xs bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(39, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(40, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(43, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>xs</button>\n<button '])),
						(l()(), Hr(46, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-sm bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(53, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(57, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>sm</button>\n<button '])),
						(l()(), Hr(60, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(64, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(67, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n<button '])),
						(l()(), Hr(74, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-lg bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(81, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(85, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>lg</button>\n<button '])),
						(l()(), Hr(88, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-xl bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(95, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(99, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>xl</button>\n<button '])),
						(l()(), Hr(102, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(103, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-full bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(109, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(110, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(113, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 15, 0), l(n, 18, 0), l(n, 21, 0), l(n, 24, 0), l(n, 27, 0);
					},
					null
				);
			}
			function Yd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 315, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Group'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Buttons are grouped with a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.btn-group-[row || col || full]'])),
						(l()(), ns(-1, null, [' class on a parent container.'])),
						(l()(), Hr(9, 0, null, null, 54, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 16, 'section', [['aria-label', 'button row group'], ['class', 'btn-group-row'], ['role', 'group']], null, null, null, fd, dd)),
						it(14, 114688, null, 0, Vh, [], null, null),
						(l()(), Hr(15, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(16, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(18, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(19, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(21, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(22, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(24, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(25, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(27, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(28, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(30, 0, null, null, 16, 'section', [['aria-label', 'button column group'], ['class', 'btn-group-col'], ['role', 'group']], null, null, null, fd, dd)),
						it(31, 114688, null, 0, Vh, [], null, null),
						(l()(), Hr(32, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(33, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(35, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(36, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(38, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(39, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(41, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(42, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(44, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(45, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(47, 0, null, null, 16, 'section', [['aria-label', 'button full row group'], ['class', 'btn-group-full'], ['role', 'group']], null, null, null, fd, dd)),
						it(48, 114688, null, 0, Vh, [], null, null),
						(l()(), Hr(49, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(50, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(52, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(53, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(55, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(56, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(58, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(59, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(61, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(62, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(64, 0, null, null, 251, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(65, 0, null, null, 250, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<section '])),
						(l()(), Hr(67, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-group-row"'])),
						(l()(), ns(-1, null, [' role='])),
						(l()(), Hr(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"group"'])),
						(l()(), ns(-1, null, [' aria-label='])),
						(l()(), Hr(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button row group"'])),
						(l()(), ns(-1, null, ['>\n    <button '])),
						(l()(), Hr(80, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(87, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(91, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(94, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(95, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(98, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(101, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(108, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(112, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(115, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(116, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(119, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(122, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(126, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(129, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(130, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(133, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(136, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(137, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(140, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(143, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(147, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), Hr(150, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(151, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(154, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-group-col"'])),
						(l()(), ns(-1, null, [' role='])),
						(l()(), Hr(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"group"'])),
						(l()(), ns(-1, null, [' aria-label='])),
						(l()(), Hr(160, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button column group"'])),
						(l()(), ns(-1, null, ['>\n    <button '])),
						(l()(), Hr(163, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(164, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(167, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(170, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(171, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(174, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(177, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(184, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(185, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(188, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(191, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(192, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(195, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(198, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(202, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(205, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(206, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(209, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(212, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(213, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(216, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(219, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(220, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(226, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(227, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(230, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), Hr(233, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(234, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(237, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-group-full"'])),
						(l()(), ns(-1, null, [' role='])),
						(l()(), Hr(240, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"group"'])),
						(l()(), ns(-1, null, [' aria-label='])),
						(l()(), Hr(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button full row group"'])),
						(l()(), ns(-1, null, ['>\n    <button '])),
						(l()(), Hr(246, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(250, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(253, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(254, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(257, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(260, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(261, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(264, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(267, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(268, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(271, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(274, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(275, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(278, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(281, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(282, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(285, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(288, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(289, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(292, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(295, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(296, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(299, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n    <button '])),
						(l()(), Hr(302, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(303, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(306, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(309, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(310, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(313, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n</section>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e),
							l(n, 14, 0),
							l(n, 16, 0),
							l(n, 19, 0),
							l(n, 22, 0),
							l(n, 25, 0),
							l(n, 28, 0),
							l(n, 31, 0),
							l(n, 33, 0),
							l(n, 36, 0),
							l(n, 39, 0),
							l(n, 42, 0),
							l(n, 45, 0),
							l(n, 48, 0),
							l(n, 50, 0),
							l(n, 53, 0),
							l(n, 56, 0),
							l(n, 59, 0),
							l(n, 62, 0);
					},
					null
				);
			}
			function Jd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 117, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Rounded'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Buttons are rounded by adding a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.rounded'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(9, 0, null, null, 21, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 2, 'button', [['class', 'btn-xs rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(14, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['xs'])),
						(l()(), Hr(16, 0, null, null, 2, 'button', [['class', 'btn-sm rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(17, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['sm'])),
						(l()(), Hr(19, 0, null, null, 2, 'button', [['class', 'btn-md rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(20, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['md'])),
						(l()(), Hr(22, 0, null, null, 2, 'button', [['class', 'btn-lg rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(23, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['lg'])),
						(l()(), Hr(25, 0, null, null, 2, 'button', [['class', 'btn-xl rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(26, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['xl'])),
						(l()(), Hr(28, 0, null, null, 2, 'button', [['class', 'btn-full rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, fd, dd)),
						it(29, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['full'])),
						(l()(), Hr(31, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(32, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<button '])),
						(l()(), Hr(34, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(41, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(42, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(45, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>xs</button>\n<button '])),
						(l()(), Hr(48, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(49, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(52, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(55, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>sm</button>\n<button '])),
						(l()(), Hr(62, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(69, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>md</button>\n<button '])),
						(l()(), Hr(76, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(83, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>lg</button>\n<button '])),
						(l()(), Hr(90, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(94, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(97, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(98, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(101, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>xl</button>\n<button '])),
						(l()(), Hr(104, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(105, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-full rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(111, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(115, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 17, 0), l(n, 20, 0), l(n, 23, 0), l(n, 26, 0), l(n, 29, 0);
					},
					null
				);
			}
			function $d(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 32, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['State'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Buttons are disabled by adding a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['disabled'])),
						(l()(), ns(-1, null, [' attribute.'])),
						(l()(), Hr(9, 0, null, null, 6, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 2, 'button', [['class', 'btn-md'], ['disabled', ''], ['type', 'button']], null, null, null, fd, dd)),
						it(14, 114688, null, 0, Vh, [], null, null),
						(l()(), ns(-1, 0, ['disabled'])),
						(l()(), Hr(16, 0, null, null, 16, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 15, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<button '])),
						(l()(), Hr(19, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(20, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(23, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"btn-md"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(26, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Hr(27, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(30, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"button"'])),
						(l()(), ns(-1, null, [' disabled>disabled</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0);
					},
					null
				);
			}
			function Xd(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function lf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function nf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Accordion'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function uf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Expand'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ef(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function tf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Background'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function rf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Border'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function sf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Hover'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function af(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Text'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function of(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 202, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['In order for flexbox to work, a parent container must have a '])),
						(l()(), Hr(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.row[-full]'])),
						(l()(), ns(-1, null, [' or '])),
						(l()(), Hr(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.col[-full]'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(10, 0, null, null, 23, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(12, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(13, { flexbox: 0, box: 1 }),
						(l()(), Hr(14, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(15, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['row'])),
						(l()(), Hr(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['row'])),
						(l()(), Hr(19, 0, null, null, 4, 'ul', [['class', 'row-full']], null, null, null, null, null)),
						(l()(), Hr(20, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['full row'])),
						(l()(), Hr(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['full row'])),
						(l()(), Hr(24, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(25, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['column'])),
						(l()(), Hr(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['column'])),
						(l()(), Hr(29, 0, null, null, 4, 'ul', [['class', 'col-full']], null, null, null, null, null)),
						(l()(), Hr(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['full column'])),
						(l()(), Hr(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['full column'])),
						(l()(), Hr(34, 0, null, null, 168, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(35, 0, null, null, 167, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(36, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(38, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(41, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(44, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(48, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(50, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['row'])),
						(l()(), Hr(54, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(56, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(60, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['row'])),
						(l()(), Hr(66, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(68, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(78, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(83, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(86, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row-full"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['full row'])),
						(l()(), Hr(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['full row'])),
						(l()(), Hr(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(114, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(120, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(122, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(125, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(128, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['column'])),
						(l()(), Hr(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['column'])),
						(l()(), Hr(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(162, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(167, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(170, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col-full"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(174, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(176, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['full column'])),
						(l()(), Hr(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['full column'])),
						(l()(), Hr(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 13, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 12, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function cf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 486, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Container Column'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use an '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), ns(-1, null, [' class to align ALL items in a '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.col'])),
						(l()(), ns(-1, null, [' flex container.'])),
						(l()(), Hr(12, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 4, 'ul', [['class', 'col align-l']], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(21, 0, null, null, 4, 'ul', [['class', 'col align-c']], null, null, null, null, null)),
						(l()(), Hr(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(26, 0, null, null, 4, 'ul', [['class', 'col align-r']], null, null, null, null, null)),
						(l()(), Hr(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(31, 0, null, null, 4, 'ul', [['class', 'col align-t']], null, null, null, null, null)),
						(l()(), Hr(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(36, 0, null, null, 4, 'ul', [['class', 'col align-m']], null, null, null, null, null)),
						(l()(), Hr(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(41, 0, null, null, 4, 'ul', [['class', 'col align-b']], null, null, null, null, null)),
						(l()(), Hr(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(46, 0, null, null, 4, 'ul', [['class', 'col align-cm']], null, null, null, null, null)),
						(l()(), Hr(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(51, 0, null, null, 4, 'ul', [['class', 'col align-sa']], null, null, null, null, null)),
						(l()(), Hr(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(56, 0, null, null, 4, 'ul', [['class', 'col align-sb']], null, null, null, null, null)),
						(l()(), Hr(57, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(59, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(61, 0, null, null, 4, 'ul', [['class', 'col align-st']], null, null, null, null, null)),
						(l()(), Hr(62, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(64, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(66, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(67, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(68, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(70, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(73, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(76, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-l"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(82, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(88, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(94, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(100, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(106, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(110, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(112, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(115, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(118, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-c"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(122, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(124, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(130, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(136, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(142, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(148, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(152, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(154, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(157, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(160, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-r"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(164, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(166, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(170, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(172, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(178, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(184, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(190, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(194, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(196, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(199, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(202, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-t"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(208, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(212, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(214, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(218, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(220, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(224, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(226, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(230, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(232, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(236, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(238, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(241, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(244, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-m"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(250, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(256, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(260, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(262, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(266, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(268, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(274, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(278, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(280, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(283, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(286, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-b"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(290, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(292, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(298, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(304, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(308, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(310, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(314, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(316, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(320, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(322, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(325, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(328, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-cm"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(332, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(334, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(338, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(340, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(344, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(346, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(350, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(352, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(356, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(358, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(362, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(364, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(367, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(370, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-sa"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(374, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(376, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(380, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(382, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(386, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(388, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(392, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(394, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(398, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(400, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(404, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(406, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(409, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(412, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-sb"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(416, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(418, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(422, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(424, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(428, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(430, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(434, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(436, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(440, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(442, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(446, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(448, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(451, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(454, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col align-st"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(458, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(460, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(464, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(466, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(470, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(472, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(476, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(478, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(482, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(484, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function pf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 486, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Container Row'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use an '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), ns(-1, null, [' class to align ALL items in a '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.row'])),
						(l()(), ns(-1, null, [' flex container.'])),
						(l()(), Hr(12, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 4, 'ul', [['class', 'row align-l']], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(21, 0, null, null, 4, 'ul', [['class', 'row align-c']], null, null, null, null, null)),
						(l()(), Hr(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(26, 0, null, null, 4, 'ul', [['class', 'row align-r']], null, null, null, null, null)),
						(l()(), Hr(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(31, 0, null, null, 4, 'ul', [['class', 'row align-t']], null, null, null, null, null)),
						(l()(), Hr(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(36, 0, null, null, 4, 'ul', [['class', 'row align-m']], null, null, null, null, null)),
						(l()(), Hr(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(41, 0, null, null, 4, 'ul', [['class', 'row align-b']], null, null, null, null, null)),
						(l()(), Hr(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(46, 0, null, null, 4, 'ul', [['class', 'row align-cm']], null, null, null, null, null)),
						(l()(), Hr(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(51, 0, null, null, 4, 'ul', [['class', 'row align-sa']], null, null, null, null, null)),
						(l()(), Hr(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(56, 0, null, null, 4, 'ul', [['class', 'row align-sb']], null, null, null, null, null)),
						(l()(), Hr(57, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(59, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(61, 0, null, null, 4, 'ul', [['class', 'row align-st']], null, null, null, null, null)),
						(l()(), Hr(62, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(64, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(66, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(67, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(68, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(70, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(73, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(76, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-l"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(82, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(88, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(94, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(100, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(106, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(110, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(112, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(115, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(118, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-c"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(122, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(124, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(130, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(136, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(142, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(148, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(152, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(154, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(157, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(160, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-r"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(164, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(166, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(170, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(172, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(178, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(184, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(190, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(194, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(196, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(199, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(202, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-t"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(208, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(212, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(214, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(218, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(220, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(224, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(226, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(230, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(232, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(236, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(238, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(241, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(244, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-m"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(250, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(256, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(260, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(262, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(266, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(268, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(274, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(278, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(280, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(283, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(286, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-b"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(290, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(292, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(298, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(304, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(308, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(310, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(314, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(316, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(320, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(322, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(325, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(328, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-cm"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(332, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(334, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(338, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(340, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(344, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(346, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(350, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(352, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(356, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(358, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(362, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(364, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(367, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(370, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-sa"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(374, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(376, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(380, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(382, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(386, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(388, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(392, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(394, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(398, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(400, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(404, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(406, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(409, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(412, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-sb"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(416, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(418, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(422, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(424, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(428, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(430, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(434, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(436, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(440, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(442, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(446, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(448, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(451, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(454, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row align-st"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(458, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(460, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(464, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(466, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(470, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(472, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(476, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(478, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(482, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(484, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function hf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 440, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item Column'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), ns(-1, null, [' classes to align ONE child in a '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.col'])),
						(l()(), ns(-1, null, [' flex container.'])),
						(l()(), Hr(12, 0, null, null, 43, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(19, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(21, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(24, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(26, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(29, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(31, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(34, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(36, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(39, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(41, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(44, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(46, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(49, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(51, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(54, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(56, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(57, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(58, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(70, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(72, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-l"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(100, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(106, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(111, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(114, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(118, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(120, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(124, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(126, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(130, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(132, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-c"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(142, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(144, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(166, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(172, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(174, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(178, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(180, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(183, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(186, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-r"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(190, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(196, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(198, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(202, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(204, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(214, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(220, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(222, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(226, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(231, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(234, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-t"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(238, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(240, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(274, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(279, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(282, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-m"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(286, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(288, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(292, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(298, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(300, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(316, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(322, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(324, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-b"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(334, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(336, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(340, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(342, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(346, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(348, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(351, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(354, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(358, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(360, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(364, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(366, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(370, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(372, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(375, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(378, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-cm"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(382, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(384, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(388, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(390, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(394, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(396, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(399, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(402, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(406, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(408, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(412, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(414, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(418, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(420, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(423, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(426, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-st"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(430, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(432, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(436, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(438, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function df(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 85, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item Order'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.item-order-[1 - 12]'])),
						(l()(), ns(-1, null, [' classes to align children in a flex container.'])),
						(l()(), Hr(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['1'])),
						(l()(), Hr(16, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['2'])),
						(l()(), Hr(18, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(19, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['1'])),
						(l()(), Hr(21, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['2'])),
						(l()(), Hr(23, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(24, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<ul '])),
						(l()(), Hr(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(29, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>\n    <'])),
						(l()(), Hr(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-order-2"'])),
						(l()(), ns(-1, null, ['>1</'])),
						(l()(), Hr(41, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n    <'])),
						(l()(), Hr(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-order-1"'])),
						(l()(), ns(-1, null, ['>2</'])),
						(l()(), Hr(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n</ul>\n<ul '])),
						(l()(), Hr(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>\n    <'])),
						(l()(), Hr(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-order-2"'])),
						(l()(), ns(-1, null, ['>1</'])),
						(l()(), Hr(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n    <'])),
						(l()(), Hr(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-order-1"'])),
						(l()(), ns(-1, null, ['>2</'])),
						(l()(), Hr(83, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n</ul>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function ff(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 440, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item Row'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use an '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), ns(-1, null, [' class to align ONE child in a '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.row'])),
						(l()(), ns(-1, null, [' flex container.'])),
						(l()(), Hr(12, 0, null, null, 43, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(19, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(21, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(24, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(26, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(29, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(31, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(34, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(36, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(39, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(41, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(44, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(46, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(49, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(51, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(54, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(56, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(57, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(58, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(70, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(72, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-l"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(100, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(106, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(111, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(114, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(118, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(120, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(124, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(126, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(130, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(132, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-c"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(142, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(144, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(166, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(172, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(174, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(178, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(180, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(183, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(186, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-r"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(190, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(196, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(198, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(202, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(204, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(214, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(220, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(222, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(226, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(231, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(234, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-t"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(238, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(240, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(274, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(279, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(282, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-m"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(286, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(288, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(292, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(298, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(300, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(316, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(322, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(324, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-b"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(334, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(336, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(340, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(342, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(346, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(348, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(351, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(354, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(358, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(360, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(364, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(366, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(370, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(372, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(375, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(378, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-cm"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center middle'])),
						(l()(), Hr(382, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(384, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(388, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(390, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(394, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(396, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(399, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(402, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(406, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(408, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(412, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(414, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(418, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(420, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(423, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(426, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-st"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(430, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(432, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(436, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(438, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function gf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 331, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item Size'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.item-[g || s || gs]-[1 - 12]'])),
						(l()(), ns(-1, null, [' classes to grow and/or shrink children in a flex container.'])),
						(l()(), Hr(9, 0, null, null, 33, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(16, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['grow'])),
						(l()(), Hr(18, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(21, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['shrink'])),
						(l()(), Hr(23, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Hr(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(26, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['grow & shrink'])),
						(l()(), Hr(28, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(31, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['grow'])),
						(l()(), Hr(33, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(36, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['shrink'])),
						(l()(), Hr(38, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Hr(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(41, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['grow & shrink'])),
						(l()(), Hr(43, 0, null, null, 288, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(44, 0, null, null, 287, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(45, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(47, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(50, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(53, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(57, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(59, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(63, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(65, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(69, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(71, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(74, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(77, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-g-1"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['grow'])),
						(l()(), Hr(81, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(83, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(87, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(89, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(93, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(95, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(98, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(101, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(105, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(107, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(111, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(113, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(117, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(119, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(122, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(125, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-s-1"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['shrink'])),
						(l()(), Hr(129, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(131, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(135, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(137, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(141, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(143, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(146, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(149, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(153, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(155, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(159, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(161, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(165, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(167, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(170, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(173, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-gs-1"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['grow &amp; shrink'])),
						(l()(), Hr(177, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(179, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(183, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(185, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(189, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(191, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(194, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(197, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(201, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(203, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(207, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(209, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(213, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(215, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(218, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(221, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-g-1"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['grow'])),
						(l()(), Hr(225, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(227, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(231, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(233, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(237, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(239, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(242, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(245, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(249, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(251, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(255, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(257, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(261, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(263, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(266, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(269, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-s-1"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['shrink'])),
						(l()(), Hr(273, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(275, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(279, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(281, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(285, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(287, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(290, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(293, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(297, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(299, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['default'])),
						(l()(), Hr(303, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(305, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(309, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(311, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(314, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(317, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"item-gs-1"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['grow &amp; shrink'])),
						(l()(), Hr(321, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(323, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(327, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(329, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function mf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 382, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Wrap Column'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.wrap-[c || l || r || sa || sb || st]'])),
						(l()(), ns(-1, null, [' class to align multi-column items in a '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.col'])),
						(l()(), ns(-1, null, [' flex container.'])),
						(l()(), Hr(12, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 6, 'ul', [['class', 'col wrap-c']], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(23, 0, null, null, 6, 'ul', [['class', 'col wrap-l']], null, null, null, null, null)),
						(l()(), Hr(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(30, 0, null, null, 6, 'ul', [['class', 'col wrap-r']], null, null, null, null, null)),
						(l()(), Hr(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(35, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(37, 0, null, null, 6, 'ul', [['class', 'col wrap-sa']], null, null, null, null, null)),
						(l()(), Hr(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(40, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(44, 0, null, null, 6, 'ul', [['class', 'col wrap-sb']], null, null, null, null, null)),
						(l()(), Hr(45, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(51, 0, null, null, 6, 'ul', [['class', 'col wrap-st']], null, null, null, null, null)),
						(l()(), Hr(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(58, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(59, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(68, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col wrap-c"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(84, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(86, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['center'])),
						(l()(), Hr(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(114, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(119, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(122, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col wrap-l"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(126, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(128, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['left (default)'])),
						(l()(), Hr(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(162, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(168, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(170, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(173, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(176, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col wrap-r"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(204, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(206, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['right'])),
						(l()(), Hr(210, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(212, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(216, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(218, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(222, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(224, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(227, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(230, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col wrap-sa"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(234, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(236, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(240, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(242, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(246, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(248, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(252, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(254, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(258, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(260, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(264, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(266, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(270, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(272, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(276, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(278, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(281, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(284, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col wrap-sb"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(288, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(290, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(294, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(296, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(300, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(302, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(306, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(308, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(312, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(314, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(318, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(320, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(324, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(326, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(330, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(332, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(335, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(338, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"col wrap-st"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(344, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(348, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(350, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(354, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(356, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(362, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(368, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(372, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(374, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(378, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(380, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function bf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 382, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Wrap Row'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.wrap-[m || t || b || sa || sb || st]'])),
						(l()(), ns(-1, null, [' class to align multi-row items in a '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.row'])),
						(l()(), ns(-1, null, [' flex container.'])),
						(l()(), Hr(12, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 6, 'ul', [['class', 'row wrap-m']], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(23, 0, null, null, 6, 'ul', [['class', 'row wrap-t']], null, null, null, null, null)),
						(l()(), Hr(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(30, 0, null, null, 6, 'ul', [['class', 'row wrap-b']], null, null, null, null, null)),
						(l()(), Hr(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(35, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(37, 0, null, null, 6, 'ul', [['class', 'row wrap-sa']], null, null, null, null, null)),
						(l()(), Hr(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(40, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(44, 0, null, null, 6, 'ul', [['class', 'row wrap-sb']], null, null, null, null, null)),
						(l()(), Hr(45, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(51, 0, null, null, 6, 'ul', [['class', 'row wrap-st']], null, null, null, null, null)),
						(l()(), Hr(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(58, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(59, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(68, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row wrap-m"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(84, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(86, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['middle'])),
						(l()(), Hr(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(114, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(119, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(122, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row wrap-t"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(126, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(128, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['top (default)'])),
						(l()(), Hr(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(162, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(168, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(170, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(173, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(176, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row wrap-b"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(204, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(206, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), Hr(210, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(212, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(216, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(218, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(222, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(224, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(227, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(230, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row wrap-sa"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(234, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(236, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(240, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(242, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(246, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(248, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(252, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(254, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(258, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(260, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space around'])),
						(l()(), Hr(264, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(266, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(270, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(272, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(276, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(278, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(281, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(284, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row wrap-sb"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(288, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(290, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(294, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(296, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(300, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(302, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(306, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(308, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(312, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(314, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['space between'])),
						(l()(), Hr(318, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(320, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(324, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(326, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(330, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(332, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(335, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(338, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"row wrap-st"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(344, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(348, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(350, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(354, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(356, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(362, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(368, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['stretch'])),
						(l()(), Hr(372, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(374, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(378, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(380, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function yf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 15, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 14, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 13, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Forms are styled with '])),
						(l()(), Hr(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.form-group'])),
						(l()(), ns(-1, null, [', '])),
						(l()(), Hr(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.field-group'])),
						(l()(), ns(-1, null, [', '])),
						(l()(), Hr(10, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.form-label'])),
						(l()(), ns(-1, null, [', and '])),
						(l()(), Hr(13, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.form-field'])),
						(l()(), ns(-1, null, [' classes.']))
					],
					null,
					null
				);
			}
			function vf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 504, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Checkbox'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Checkboxes and radio buttons are grouped with a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.*-group'])),
						(l()(), ns(-1, null, [' class on a parent container.'])),
						(l()(), Hr(9, 0, null, null, 69, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 65, 'form', [], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 64, 'ul', [['class', 'form-group']], null, null, null, md, gd)),
						it(15, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(17, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(19, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Name'])),
						(l()(), Hr(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, md, gd)),
						it(22, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(23, 0, null, 0, 20, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(24, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(25, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, md, gd)),
						it(26, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Agree'])),
						(l()(), Hr(28, 0, null, 0, 15, 'ul', [['class', 'radio-group']], null, null, null, md, gd)),
						it(29, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(30, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(31, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(32, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yes'], ['name', 'agree'], ['type', 'radio']], null, null, null, md, gd)),
						it(33, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(34, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yes']], null, null, null, md, gd)),
						it(35, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Yes'])),
						(l()(), Hr(37, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(38, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(39, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'no'], ['name', 'agree'], ['type', 'radio']], null, null, null, md, gd)),
						it(40, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(41, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'no']], null, null, null, md, gd)),
						it(42, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['No'])),
						(l()(), Hr(44, 0, null, 0, 34, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(45, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(46, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, md, gd)),
						it(47, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Color'])),
						(l()(), Hr(49, 0, null, 0, 29, 'ul', [['class', 'checkbox-group']], null, null, null, md, gd)),
						it(50, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(51, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(52, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(53, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'blue'], ['name', 'color'], ['type', 'checkbox']], null, null, null, md, gd)),
						it(54, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(55, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'blue']], null, null, null, md, gd)),
						it(56, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Blue'])),
						(l()(), Hr(58, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(59, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(60, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'green'], ['name', 'color'], ['type', 'checkbox']], null, null, null, md, gd)),
						it(61, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(62, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'green']], null, null, null, md, gd)),
						it(63, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Green'])),
						(l()(), Hr(65, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(66, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(67, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'red'], ['name', 'color'], ['type', 'checkbox']], null, null, null, md, gd)),
						it(68, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(69, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'red']], null, null, null, md, gd)),
						it(70, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Red'])),
						(l()(), Hr(72, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(73, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(74, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yellow'], ['name', 'color'], ['type', 'checkbox']], null, null, null, md, gd)),
						it(75, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(76, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yellow']], null, null, null, md, gd)),
						it(77, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Yellow'])),
						(l()(), Hr(79, 0, null, null, 425, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(80, 0, null, null, 424, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>\n    <ul '])),
						(l()(), Hr(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(88, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-group"'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(94, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(97, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(100, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(103, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(112, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>Name</'])),
						(l()(), Hr(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(121, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(124, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(127, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(130, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(133, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(136, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(139, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, ['>\n        </'])),
						(l()(), Hr(142, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(145, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(148, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(151, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <p '])),
						(l()(), Hr(154, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, ['>Agree</p>\n            <ul '])),
						(l()(), Hr(160, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(163, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"radio-group"'])),
						(l()(), ns(-1, null, ['>\n                <'])),
						(l()(), Hr(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(169, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(172, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(175, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(184, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(187, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"radio"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(190, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"agree"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(193, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"yes"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(196, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(202, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(205, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(208, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"yes"'])),
						(l()(), ns(-1, null, ['>Yes</'])),
						(l()(), Hr(211, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n                </'])),
						(l()(), Hr(214, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n                <'])),
						(l()(), Hr(217, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(220, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(226, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(229, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(232, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(235, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(238, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"radio"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(241, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"agree"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(244, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"no"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(250, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(253, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(256, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(259, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"no"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(262, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['No'])),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(265, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n                </'])),
						(l()(), Hr(268, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), Hr(271, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(274, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(277, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(280, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <p '])),
						(l()(), Hr(283, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(286, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, ['>Color</p>\n            <ul '])),
						(l()(), Hr(289, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(292, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"checkbox-group"'])),
						(l()(), ns(-1, null, ['>\n                <'])),
						(l()(), Hr(295, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(298, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(301, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(304, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(307, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(310, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(313, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(316, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"checkbox"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(319, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"color"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(322, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"blue"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(325, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(328, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(331, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(334, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(337, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"blue"'])),
						(l()(), ns(-1, null, ['>Blue</'])),
						(l()(), Hr(340, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n                </'])),
						(l()(), Hr(343, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n                <'])),
						(l()(), Hr(346, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(349, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(352, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(355, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(358, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(361, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(364, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(367, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"checkbox"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(370, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"color"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(373, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"green"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(376, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(379, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(382, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(385, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(388, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"green"'])),
						(l()(), ns(-1, null, ['>Green</'])),
						(l()(), Hr(391, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n                </'])),
						(l()(), Hr(394, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n                <'])),
						(l()(), Hr(397, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(400, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(403, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(406, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(409, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(412, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(415, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(418, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"checkbox"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(421, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"color"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(424, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"red"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(427, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(430, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(433, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(436, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(439, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"red"'])),
						(l()(), ns(-1, null, ['>Red</'])),
						(l()(), Hr(442, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n                </'])),
						(l()(), Hr(445, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n                <'])),
						(l()(), Hr(448, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(451, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(454, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(457, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(460, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(463, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(466, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(469, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"checkbox"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(472, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"color"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(475, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"yellow"'])),
						(l()(), ns(-1, null, ['>\n                    <'])),
						(l()(), Hr(478, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(481, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(484, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(487, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(490, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"yellow"'])),
						(l()(), ns(-1, null, ['>Yellow</'])),
						(l()(), Hr(493, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n                </'])),
						(l()(), Hr(496, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), Hr(499, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Hr(502, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e),
							l(n, 15, 0),
							l(n, 17, 0),
							l(n, 19, 0),
							l(n, 22, 0),
							l(n, 24, 0),
							l(n, 26, 0),
							l(n, 29, 0),
							l(n, 31, 0),
							l(n, 33, 0),
							l(n, 35, 0),
							l(n, 38, 0),
							l(n, 40, 0),
							l(n, 42, 0),
							l(n, 45, 0),
							l(n, 47, 0),
							l(n, 50, 0),
							l(n, 52, 0),
							l(n, 54, 0),
							l(n, 56, 0),
							l(n, 59, 0),
							l(n, 61, 0),
							l(n, 63, 0),
							l(n, 66, 0),
							l(n, 68, 0),
							l(n, 70, 0),
							l(n, 73, 0),
							l(n, 75, 0),
							l(n, 77, 0);
					},
					null
				);
			}
			function wf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 478, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Field'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Form fields are styled with a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.form-field'])),
						(l()(), ns(-1, null, [' class. Different styles are applied based on the form field.'])),
						(l()(), Hr(9, 0, null, null, 46, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 42, 'form', [], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 41, 'ul', [['class', 'form-group']], null, null, null, md, gd)),
						it(15, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(17, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(19, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Name'])),
						(l()(), Hr(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, md, gd)),
						it(22, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(23, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(24, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(25, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'gender']], null, null, null, md, gd)),
						it(26, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Gender'])),
						(l()(), Hr(28, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'gender'], ['name', 'gender']], null, null, null, md, gd)),
						it(29, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(30, 0, null, 0, 1, 'option', [['value', '1']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Select'])),
						(l()(), Hr(32, 0, null, 0, 1, 'option', [['value', '2']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Female'])),
						(l()(), Hr(34, 0, null, 0, 1, 'option', [['value', '3']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Male'])),
						(l()(), Hr(36, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(37, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(38, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'language']], null, null, null, md, gd)),
						it(39, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Language'])),
						(l()(), Hr(41, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'language'], ['multiple', ''], ['name', 'language']], null, null, null, md, gd)),
						it(42, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(43, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['English'])),
						(l()(), Hr(45, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['French'])),
						(l()(), Hr(47, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Spanish'])),
						(l()(), Hr(49, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(50, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(51, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'notes']], null, null, null, md, gd)),
						it(52, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Notes'])),
						(l()(), Hr(54, 0, null, 0, 1, 'textarea', [['class', 'form-field'], ['id', 'notes'], ['name', 'notes'], ['placeholder', 'Enter notes']], null, null, null, md, gd)),
						it(55, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(56, 0, null, null, 422, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(57, 0, null, null, 421, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(58, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(64, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(69, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(72, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-group"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n        '])),
						(l()(), Hr(76, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(81, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(88, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(90, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(93, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(96, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(99, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(102, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['Name'])),
						(l()(), Hr(106, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(112, 0, null, null, 34, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(114, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(117, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(120, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(123, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(126, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(129, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['id'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(132, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['name'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(141, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['placeholder'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(144, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n        '])),
						(l()(), Hr(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n        '])),
						(l()(), Hr(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(166, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(171, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(174, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(177, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(180, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"gender"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['Gender'])),
						(l()(), Hr(184, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(186, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(190, 0, null, null, 22, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['select'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(195, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(198, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(201, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['name'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(204, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"gender"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['id'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"gender"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n                '])),
						(l()(), Hr(214, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(219, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['value'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(222, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"1"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['Select'])),
						(l()(), Hr(226, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n                '])),
						(l()(), Hr(232, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(234, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(237, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['value'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(240, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"2"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['Female'])),
						(l()(), Hr(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n                '])),
						(l()(), Hr(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['value'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"3"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['Male'])),
						(l()(), Hr(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['select'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n        '])),
						(l()(), Hr(274, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n        '])),
						(l()(), Hr(280, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(282, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(285, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(288, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(292, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(297, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(300, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"language"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['Language'])),
						(l()(), Hr(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(316, 0, null, null, 25, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['select'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(321, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(324, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['name'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"language"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(333, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['id'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(336, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"language"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(339, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['multiple'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n                '])),
						(l()(), Hr(343, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(345, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['English'])),
						(l()(), Hr(349, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(351, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n                '])),
						(l()(), Hr(355, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(357, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['French'])),
						(l()(), Hr(361, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(363, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n                '])),
						(l()(), Hr(367, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(369, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['Spanish'])),
						(l()(), Hr(373, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(375, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['option'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(379, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(381, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['select'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n        '])),
						(l()(), Hr(385, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(387, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n        '])),
						(l()(), Hr(391, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(393, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(396, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(399, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(403, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(405, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(408, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(411, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(414, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(417, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"notes"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['Notes'])),
						(l()(), Hr(421, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(423, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n            '])),
						(l()(), Hr(427, 0, null, null, 28, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(429, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['textarea'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(432, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(435, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(438, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['name'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(441, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"notes"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(444, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['id'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(447, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"notes"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(450, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['placeholder'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(453, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter notes"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(456, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(458, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['textarea'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n        '])),
						(l()(), Hr(462, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(464, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n    '])),
						(l()(), Hr(468, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(470, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['ul'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['    \n'])),
						(l()(), Hr(474, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(476, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e),
							l(n, 15, 0),
							l(n, 17, 0),
							l(n, 19, 0),
							l(n, 22, 0),
							l(n, 24, 0),
							l(n, 26, 0),
							l(n, 29, 0),
							l(n, 37, 0),
							l(n, 39, 0),
							l(n, 42, 0),
							l(n, 50, 0),
							l(n, 52, 0),
							l(n, 55, 0);
					},
					null
				);
			}
			function jf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 91, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Field Group'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Field groups are styled with a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.field-group'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, md, gd)),
						it(15, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(17, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(19, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Name'])),
						(l()(), Hr(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, md, gd)),
						it(22, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(23, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(24, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>\n    <ul '])),
						(l()(), Hr(29, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-group"'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>Name</'])),
						(l()(), Hr(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, ['>\n        </'])),
						(l()(), Hr(86, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Hr(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 15, 0), l(n, 17, 0), l(n, 19, 0), l(n, 22, 0);
					},
					null
				);
			}
			function _f(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 104, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Fieldset'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Fieldsets are styled with a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.fieldset'])),
						(l()(), ns(-1, null, [' class and have a '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<legend>'])),
						(l()(), ns(-1, null, [' tag as the first child.'])),
						(l()(), Hr(12, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 13, 'form', [], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 12, 'fieldset', [['class', 'fieldset']], null, null, null, md, gd)),
						it(18, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(19, 0, null, 0, 1, 'legend', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Contact'])),
						(l()(), Hr(21, 0, null, 0, 8, 'ul', [['class', 'form-group']], null, null, null, md, gd)),
						it(22, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(23, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(24, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(25, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(26, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Name'])),
						(l()(), Hr(28, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, md, gd)),
						it(29, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(30, 0, null, null, 74, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(31, 0, null, null, 73, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(33, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>\n    <fieldset '])),
						(l()(), Hr(36, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(39, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"fieldset"'])),
						(l()(), ns(-1, null, ['>\n        <legend>Contact</legend>\n        <ul '])),
						(l()(), Hr(42, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(45, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(48, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(51, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(54, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n                <'])),
						(l()(), Hr(57, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(60, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(63, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>Name</'])),
						(l()(), Hr(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n                <'])),
						(l()(), Hr(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(96, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, ['>\n            </'])),
						(l()(), Hr(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n        </ul>\n    </fieldset>    \n</'])),
						(l()(), Hr(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e), l(n, 18, 0), l(n, 22, 0), l(n, 24, 0), l(n, 26, 0), l(n, 29, 0);
					},
					null
				);
			}
			function xf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 285, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Form Group'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Form groups are styled with a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.form-group'])),
						(l()(), ns(-1, null, [' class for vertical fields and '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.form-group-inline'])),
						(l()(), ns(-1, null, [' for horizontal fields.'])),
						(l()(), Hr(12, 0, null, null, 36, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 32, 'form', [], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 15, 'ul', [['class', 'form-group-inline']], null, null, null, md, gd)),
						it(18, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(19, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(20, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(21, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(22, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Name'])),
						(l()(), Hr(24, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, md, gd)),
						it(25, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(26, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(27, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(28, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, md, gd)),
						it(29, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Email'])),
						(l()(),
						Hr(31, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, md, gd)),
						it(32, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(33, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, md, gd)),
						it(34, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(35, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(36, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(37, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(38, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Name'])),
						(l()(), Hr(40, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, md, gd)),
						it(41, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(42, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(43, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(44, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, md, gd)),
						it(45, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Email'])),
						(l()(),
						Hr(47, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, md, gd)),
						it(48, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(49, 0, null, null, 236, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(50, 0, null, null, 235, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>\n    <ul '])),
						(l()(), Hr(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-group-inline"'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(79, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>Name</'])),
						(l()(), Hr(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(94, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(97, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(100, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(103, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(109, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, ['>\n        </'])),
						(l()(), Hr(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(121, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(124, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(127, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(130, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(133, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(136, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"email"'])),
						(l()(), ns(-1, null, ['>Email</'])),
						(l()(), Hr(139, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(142, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(145, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(148, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(151, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(154, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"email"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(160, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"email"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(163, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter email"'])),
						(l()(), ns(-1, null, ['>\n        </'])),
						(l()(), Hr(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n    </ul>    \n    <ul '])),
						(l()(), Hr(169, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(172, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-group"'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(175, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(184, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(187, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(190, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(193, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(196, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>Name</'])),
						(l()(), Hr(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(202, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(205, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(208, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(211, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(214, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(217, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(220, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, ['>\n        </'])),
						(l()(), Hr(226, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(229, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(232, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(235, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(238, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(241, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(244, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(250, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"email"'])),
						(l()(), ns(-1, null, ['>Email</'])),
						(l()(), Hr(253, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(256, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(259, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(262, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(265, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(268, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(271, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"email"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(274, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"email"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(277, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter email"'])),
						(l()(), ns(-1, null, ['>\n        </'])),
						(l()(), Hr(280, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Hr(283, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e),
							l(n, 18, 0),
							l(n, 20, 0),
							l(n, 22, 0),
							l(n, 25, 0),
							l(n, 27, 0),
							l(n, 29, 0),
							l(n, 32, 0),
							l(n, 34, 0),
							l(n, 36, 0),
							l(n, 38, 0),
							l(n, 41, 0),
							l(n, 43, 0),
							l(n, 45, 0),
							l(n, 48, 0);
					},
					null
				);
			}
			function kf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 91, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Label'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Form labels are styled with a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.form-label'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Hr(14, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, md, gd)),
						it(15, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(17, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(19, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Name'])),
						(l()(), Hr(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, md, gd)),
						it(22, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(23, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(24, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>\n    <ul '])),
						(l()(), Hr(29, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-group"'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>Name</'])),
						(l()(), Hr(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, ['>\n        </'])),
						(l()(), Hr(86, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Hr(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 15, 0), l(n, 17, 0), l(n, 19, 0), l(n, 22, 0);
					},
					null
				);
			}
			function Cf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 155, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['State'])),
						(l()(), Hr(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Form fields can be disabled by adding a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['disabled'])),
						(l()(), ns(-1, null, [' attribute or readonly by adding a '])),
						(l()(), Hr(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['readonly'])),
						(l()(), ns(-1, null, [' attribute. '])),
						(l()(), Hr(12, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(14, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(15, { flexbox: 0, box: 1 }),
						(l()(), Hr(16, 0, null, null, 16, 'form', [], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, md, gd)),
						it(18, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(19, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(20, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(21, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(22, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Disabled'])),
						(l()(),
						Hr(
							24,
							0,
							null,
							0,
							1,
							'input',
							[['class', 'form-field'], ['disabled', ''], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']],
							null,
							null,
							null,
							md,
							gd
						)),
						it(25, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(26, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, md, gd)),
						it(27, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(28, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, md, gd)),
						it(29, 114688, null, 0, qh, [], null, null),
						(l()(), ns(-1, 0, ['Readonly'])),
						(l()(),
						Hr(
							31,
							0,
							null,
							0,
							1,
							'input',
							[['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['readonly', ''], ['type', 'text']],
							null,
							null,
							null,
							md,
							gd
						)),
						it(32, 114688, null, 0, qh, [], null, null),
						(l()(), Hr(33, 0, null, null, 122, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(34, 0, null, null, 121, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(36, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>\n    <ul '])),
						(l()(), Hr(39, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-group"'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(45, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(48, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(57, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>Disabled</'])),
						(l()(), Hr(69, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, [' disabled>\n        </'])),
						(l()(), Hr(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n        <'])),
						(l()(), Hr(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"field-group"'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(108, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(114, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-label"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['for'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(120, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, ['>Readonly</'])),
						(l()(), Hr(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['label'])),
						(l()(), ns(-1, null, ['>\n            <'])),
						(l()(), Hr(126, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['input'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(129, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"form-field"'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(135, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['type'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(138, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"text"'])),
						(l()(), ns(-1, null, [' id='])),
						(l()(), Hr(141, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' name='])),
						(l()(), Hr(144, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"name"'])),
						(l()(), ns(-1, null, [' placeholder='])),
						(l()(), Hr(147, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"Enter name"'])),
						(l()(), ns(-1, null, [' readonly>\n        </'])),
						(l()(), Hr(150, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['li'])),
						(l()(), ns(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Hr(153, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['form'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e), l(n, 18, 0), l(n, 20, 0), l(n, 22, 0), l(n, 25, 0), l(n, 27, 0), l(n, 29, 0), l(n, 32, 0);
					},
					null
				);
			}
			function Sf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ef(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Area'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Pf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Container'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function If(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Item'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Of(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Tf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Container'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Mf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Sticky Footer'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Rf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Af(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Nf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Items'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Df(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Links'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Uf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Placement'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Lf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ff(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Vf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function zf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.']))
					],
					null,
					null
				);
			}
			function Hf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Margin'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), ns(-1, null, [' class to add margin to an element.'])),
						(l()(), Hr(9, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 1, 'p', [['class', 'mar-t-xs']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top extra small'])),
						(l()(), Hr(15, 0, null, null, 1, 'p', [['class', 'mar-r-sm']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right small'])),
						(l()(), Hr(17, 0, null, null, 1, 'p', [['class', 'mar-b-md']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom medium'])),
						(l()(), Hr(19, 0, null, null, 1, 'p', [['class', 'mar-l-lg']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left large'])),
						(l()(), Hr(21, 0, null, null, 1, 'p', [['class', 'mar-tb-xl']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top bottom extra large'])),
						(l()(), Hr(23, 0, null, null, 1, 'p', [['class', 'mar-lr-md']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left right medium'])),
						(l()(), Hr(25, 0, null, null, 1, 'p', [['class', 'mar-a-md']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['all medium'])),
						(l()(), Hr(27, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(28, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(30, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(33, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"mar-t-xs"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(36, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top'])),
						(l()(), ns(-1, null, [' extra small</p>\n<'])),
						(l()(), Hr(39, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"mar-r-sm"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(45, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), ns(-1, null, [' small</p>\n<'])),
						(l()(), Hr(48, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"mar-b-md"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(54, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), ns(-1, null, [' medium</p>\n<'])),
						(l()(), Hr(57, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"mar-l-lg"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left'])),
						(l()(), ns(-1, null, [' large</p>\n<'])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"mar-tb-xl"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(72, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(75, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), ns(-1, null, [' extra large</p>\n<'])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"mar-lr-md"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), ns(-1, null, [' medium</p>\n<'])),
						(l()(), Hr(90, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"mar-a-md"'])),
						(l()(), ns(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Bf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Padding'])),
						(l()(), Hr(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Use a '])),
						(l()(), Hr(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), ns(-1, null, [' class to add padding to an element.'])),
						(l()(), Hr(9, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(11, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(12, { flexbox: 0, box: 1 }),
						(l()(), Hr(13, 0, null, null, 1, 'p', [['class', 'pad-t-xs']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top extra small'])),
						(l()(), Hr(15, 0, null, null, 1, 'p', [['class', 'pad-r-sm']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right small'])),
						(l()(), Hr(17, 0, null, null, 1, 'p', [['class', 'pad-b-md']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom medium'])),
						(l()(), Hr(19, 0, null, null, 1, 'p', [['class', 'pad-l-lg']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left large'])),
						(l()(), Hr(21, 0, null, null, 1, 'p', [['class', 'pad-tb-xl']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top bottom extra large'])),
						(l()(), Hr(23, 0, null, null, 1, 'p', [['class', 'pad-lr-md']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left right medium'])),
						(l()(), Hr(25, 0, null, null, 1, 'p', [['class', 'pad-a-md']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['all medium'])),
						(l()(), Hr(27, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(28, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(30, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(33, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"pad-t-xs"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(36, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top'])),
						(l()(), ns(-1, null, [' extra small</p>\n<'])),
						(l()(), Hr(39, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"pad-r-sm"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(45, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), ns(-1, null, [' small</p>\n<'])),
						(l()(), Hr(48, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"pad-b-md"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(54, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), ns(-1, null, [' medium</p>\n<'])),
						(l()(), Hr(57, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"pad-l-lg"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left'])),
						(l()(), ns(-1, null, [' large</p>\n<'])),
						(l()(), Hr(66, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"pad-tb-xl"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(72, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['top'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(75, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['bottom'])),
						(l()(), ns(-1, null, [' extra large</p>\n<'])),
						(l()(), Hr(78, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"pad-lr-md"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['left'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['right'])),
						(l()(), ns(-1, null, [' medium</p>\n<'])),
						(l()(), Hr(90, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' class='])),
						(l()(), Hr(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"pad-a-md"'])),
						(l()(), ns(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function qf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 49, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Spinners are styled with a '])),
						(l()(), Hr(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['.spinner[-dotted]'])),
						(l()(), ns(-1, null, [' class.'])),
						(l()(), Hr(7, 0, null, null, 7, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(9, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(10, { flexbox: 0, box: 1 }),
						(l()(), Hr(11, 0, null, null, 1, 'p', [['class', 'spinner']], null, null, null, yd, bd)),
						it(12, 114688, null, 0, Jh, [], null, null),
						(l()(), Hr(13, 0, null, null, 1, 'p', [['class', 'spinner-dotted']], null, null, null, yd, bd)),
						it(14, 114688, null, 0, Jh, [], null, null),
						(l()(), Hr(15, 0, null, null, 34, 'figure', [], null, null, null, null, null)),
						(l()(), Hr(16, 0, null, null, 33, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(17, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(19, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(22, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(25, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"spinner"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(28, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(30, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), ns(-1, null, ['\n'])),
						(l()(), Hr(34, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['<'])),
						(l()(), Hr(36, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, [' '])),
						(l()(), Hr(39, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['class'])),
						(l()(), ns(-1, null, ['='])),
						(l()(), Hr(42, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['"spinner-dotted"'])),
						(l()(), ns(-1, null, ['>'])),
						(l()(), Hr(45, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['</'])),
						(l()(), Hr(47, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), ns(-1, null, ['p'])),
						(l()(), ns(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 14, 0);
					},
					null
				);
			}
			function Gf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Zf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Qf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Wf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Border'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Kf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Hover'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Yf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Striped'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Jf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Table Cell'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function $f(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Table Row'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Xf(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function lg(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ng(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Font'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ug(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Text'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function eg(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function tg(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function rg(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Hide'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function sg(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Show'])),
						(l()(), Hr(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), ns(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ag(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 193, 'nav', [['class', 'pad-a-sm border-a-gray box-shadow-1 fixed-l styleguide-menu']], null, null, null, null, null)),
						(l()(), Hr(1, 0, null, null, 192, 'ul', [], null, null, null, null, null)),
						(l()(), Hr(2, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							3,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(5, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(6, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Alert'])),
						(l()(), zr(16777216, null, null, 1, null, jd)),
						it(9, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(10, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							11,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(13, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(14, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Badge'])),
						(l()(), zr(16777216, null, null, 1, null, _d)),
						it(17, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(18, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							19,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(21, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(22, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Button'])),
						(l()(), zr(16777216, null, null, 1, null, xd)),
						it(25, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(26, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							27,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(29, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(30, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Card'])),
						(l()(), zr(16777216, null, null, 1, null, kd)),
						it(33, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(34, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							35,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(37, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(38, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Collapse'])),
						(l()(), zr(16777216, null, null, 1, null, Cd)),
						it(41, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(42, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							43,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(45, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(46, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Color'])),
						(l()(), zr(16777216, null, null, 1, null, Sd)),
						it(49, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(50, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							51,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(53, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(54, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Flexbox'])),
						(l()(), zr(16777216, null, null, 1, null, Ed)),
						it(57, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(58, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							59,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(61, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(62, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Form'])),
						(l()(), zr(16777216, null, null, 1, null, Pd)),
						it(65, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(66, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							67,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(69, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(70, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Grid'])),
						(l()(), zr(16777216, null, null, 1, null, Id)),
						it(73, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(74, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							75,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(77, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(78, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Layout'])),
						(l()(), zr(16777216, null, null, 1, null, Od)),
						it(81, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(82, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							83,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(85, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(86, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Modal'])),
						(l()(), zr(16777216, null, null, 1, null, Td)),
						it(89, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(90, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							91,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(93, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(94, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Nav'])),
						(l()(), zr(16777216, null, null, 1, null, Md)),
						it(97, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(98, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							99,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(101, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(102, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Position'])),
						(l()(), zr(16777216, null, null, 1, null, Rd)),
						it(105, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(106, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							107,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(109, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(110, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Slider'])),
						(l()(), zr(16777216, null, null, 1, null, Ad)),
						it(113, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(114, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							115,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(117, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(118, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Slideshow'])),
						(l()(), zr(16777216, null, null, 1, null, Nd)),
						it(121, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(122, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							123,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(125, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(126, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Space'])),
						(l()(), zr(16777216, null, null, 1, null, Dd)),
						it(129, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(130, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							131,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(133, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(134, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Spinner'])),
						(l()(), zr(16777216, null, null, 1, null, Ud)),
						it(137, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(138, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							139,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(141, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(142, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Switch'])),
						(l()(), zr(16777216, null, null, 1, null, Ld)),
						it(145, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(146, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							147,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(149, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(150, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Tab'])),
						(l()(), zr(16777216, null, null, 1, null, Fd)),
						it(153, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(154, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							155,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(157, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(158, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Table'])),
						(l()(), zr(16777216, null, null, 1, null, Vd)),
						it(161, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(162, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							163,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(165, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(166, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Tooltip'])),
						(l()(), zr(16777216, null, null, 1, null, zd)),
						it(169, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(170, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							171,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(173, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(174, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Typography'])),
						(l()(), zr(16777216, null, null, 1, null, Hd)),
						it(177, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(178, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							179,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(181, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(182, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Utilities'])),
						(l()(), zr(16777216, null, null, 1, null, Bd)),
						it(185, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(186, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Hr(
							187,
							0,
							null,
							null,
							4,
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
						ct(512, null, Sa, Ea, [Su, Eu, ou, du]),
						it(189, 278528, null, 0, Pa, [Sa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ls(190, { 'bg-lt-gray': 0 }),
						(l()(), ns(-1, null, ['Visibility'])),
						(l()(), zr(16777216, null, null, 1, null, qd)),
						it(193, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Hr(194, 0, [['content', 1]], null, 139, 'main', [['class', 'pad-a-xl styleguide'], ['tabindex', '-1']], null, null, null, null, null)),
						(l()(), Hr(195, 0, null, null, 0, 'h1', [['class', 'pad-t-xl']], [[8, 'innerHTML', 1]], null, null, null, null)),
						(l()(), zr(16777216, null, null, 1, null, Gd)),
						it(197, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Zd)),
						it(199, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Qd)),
						it(201, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Wd)),
						it(203, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Kd)),
						it(205, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Yd)),
						it(207, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Jd)),
						it(209, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, $d)),
						it(211, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Xd)),
						it(213, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, lf)),
						it(215, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, nf)),
						it(217, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, uf)),
						it(219, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, ef)),
						it(221, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, tf)),
						it(223, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, rf)),
						it(225, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, sf)),
						it(227, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, af)),
						it(229, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, of)),
						it(231, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, cf)),
						it(233, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, pf)),
						it(235, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, hf)),
						it(237, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, df)),
						it(239, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, ff)),
						it(241, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, gf)),
						it(243, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, mf)),
						it(245, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, bf)),
						it(247, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, yf)),
						it(249, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, vf)),
						it(251, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, wf)),
						it(253, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, jf)),
						it(255, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, _f)),
						it(257, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, xf)),
						it(259, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, kf)),
						it(261, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Cf)),
						it(263, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Sf)),
						it(265, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Ef)),
						it(267, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Pf)),
						it(269, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, If)),
						it(271, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Of)),
						it(273, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Tf)),
						it(275, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Mf)),
						it(277, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Rf)),
						it(279, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Af)),
						it(281, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Nf)),
						it(283, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Df)),
						it(285, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Uf)),
						it(287, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Lf)),
						it(289, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Ff)),
						it(291, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Vf)),
						it(293, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, zf)),
						it(295, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Hf)),
						it(297, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Bf)),
						it(299, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, qf)),
						it(301, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Gf)),
						it(303, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Zf)),
						it(305, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Qf)),
						it(307, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Wf)),
						it(309, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Kf)),
						it(311, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Yf)),
						it(313, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Jf)),
						it(315, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, $f)),
						it(317, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, Xf)),
						it(319, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, lg)),
						it(321, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, ng)),
						it(323, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, ug)),
						it(325, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, eg)),
						it(327, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, tg)),
						it(329, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, rg)),
						it(331, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null),
						(l()(), zr(16777216, null, null, 1, null, sg)),
						it(333, 16384, null, 0, Ia, [Nu, Ru], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 6, 0, u.checkSection('Alert'));
						l(n, 5, 0, 'hover bg-hover-lt-gray pad-a-xs', e), l(n, 9, 0, u.checkSection('Alert'));
						var t = l(n, 14, 0, u.checkSection('Badge'));
						l(n, 13, 0, 'hover bg-hover-lt-gray pad-a-xs', t), l(n, 17, 0, u.checkSection('Badge'));
						var r = l(n, 22, 0, u.checkSection('Button'));
						l(n, 21, 0, 'hover bg-hover-lt-gray pad-a-xs', r), l(n, 25, 0, u.checkSection('Button'));
						var s = l(n, 30, 0, u.checkSection('Card'));
						l(n, 29, 0, 'hover bg-hover-lt-gray pad-a-xs', s), l(n, 33, 0, u.checkSection('Card'));
						var a = l(n, 38, 0, u.checkSection('Collapse'));
						l(n, 37, 0, 'hover bg-hover-lt-gray pad-a-xs', a), l(n, 41, 0, u.checkSection('Collapse'));
						var o = l(n, 46, 0, u.checkSection('Color'));
						l(n, 45, 0, 'hover bg-hover-lt-gray pad-a-xs', o), l(n, 49, 0, u.checkSection('Color'));
						var i = l(n, 54, 0, u.checkSection('Flexbox'));
						l(n, 53, 0, 'hover bg-hover-lt-gray pad-a-xs', i), l(n, 57, 0, u.checkSection('Flexbox'));
						var c = l(n, 62, 0, u.checkSection('Form'));
						l(n, 61, 0, 'hover bg-hover-lt-gray pad-a-xs', c), l(n, 65, 0, u.checkSection('Form'));
						var p = l(n, 70, 0, u.checkSection('Grid'));
						l(n, 69, 0, 'hover bg-hover-lt-gray pad-a-xs', p), l(n, 73, 0, u.checkSection('Grid'));
						var h = l(n, 78, 0, u.checkSection('Layout'));
						l(n, 77, 0, 'hover bg-hover-lt-gray pad-a-xs', h), l(n, 81, 0, u.checkSection('Layout'));
						var d = l(n, 86, 0, u.checkSection('Modal'));
						l(n, 85, 0, 'hover bg-hover-lt-gray pad-a-xs', d), l(n, 89, 0, u.checkSection('Modal'));
						var f = l(n, 94, 0, u.checkSection('Nav'));
						l(n, 93, 0, 'hover bg-hover-lt-gray pad-a-xs', f), l(n, 97, 0, u.checkSection('Nav'));
						var g = l(n, 102, 0, u.checkSection('Position'));
						l(n, 101, 0, 'hover bg-hover-lt-gray pad-a-xs', g), l(n, 105, 0, u.checkSection('Position'));
						var m = l(n, 110, 0, u.checkSection('Slider'));
						l(n, 109, 0, 'hover bg-hover-lt-gray pad-a-xs', m), l(n, 113, 0, u.checkSection('Slider'));
						var b = l(n, 118, 0, u.checkSection('Slideshow'));
						l(n, 117, 0, 'hover bg-hover-lt-gray pad-a-xs', b), l(n, 121, 0, u.checkSection('Slideshow'));
						var y = l(n, 126, 0, u.checkSection('Space'));
						l(n, 125, 0, 'hover bg-hover-lt-gray pad-a-xs', y), l(n, 129, 0, u.checkSection('Space'));
						var v = l(n, 134, 0, u.checkSection('Spinner'));
						l(n, 133, 0, 'hover bg-hover-lt-gray pad-a-xs', v), l(n, 137, 0, u.checkSection('Spinner'));
						var w = l(n, 142, 0, u.checkSection('Switch'));
						l(n, 141, 0, 'hover bg-hover-lt-gray pad-a-xs', w), l(n, 145, 0, u.checkSection('Switch'));
						var j = l(n, 150, 0, u.checkSection('Tab'));
						l(n, 149, 0, 'hover bg-hover-lt-gray pad-a-xs', j), l(n, 153, 0, u.checkSection('Tab'));
						var _ = l(n, 158, 0, u.checkSection('Table'));
						l(n, 157, 0, 'hover bg-hover-lt-gray pad-a-xs', _), l(n, 161, 0, u.checkSection('Table'));
						var x = l(n, 166, 0, u.checkSection('Tooltip'));
						l(n, 165, 0, 'hover bg-hover-lt-gray pad-a-xs', x), l(n, 169, 0, u.checkSection('Tooltip'));
						var k = l(n, 174, 0, u.checkSection('Typography'));
						l(n, 173, 0, 'hover bg-hover-lt-gray pad-a-xs', k), l(n, 177, 0, u.checkSection('Typography'));
						var C = l(n, 182, 0, u.checkSection('Utilities'));
						l(n, 181, 0, 'hover bg-hover-lt-gray pad-a-xs', C), l(n, 185, 0, u.checkSection('Utilities'));
						var S = l(n, 190, 0, u.checkSection('Visibility'));
						l(n, 189, 0, 'hover bg-hover-lt-gray pad-a-xs', S),
							l(n, 193, 0, u.checkSection('Visibility')),
							l(n, 197, 0, u.checkSection('Alert')),
							l(n, 199, 0, u.checkSection('Alert')),
							l(n, 201, 0, u.checkSection('Badge')),
							l(n, 203, 0, u.checkSection('Badge')),
							l(n, 205, 0, u.checkSection('Button')),
							l(n, 207, 0, u.checkSection('Button')),
							l(n, 209, 0, u.checkSection('Button')),
							l(n, 211, 0, u.checkSection('Button')),
							l(n, 213, 0, u.checkSection('Card')),
							l(n, 215, 0, u.checkSection('Collapse')),
							l(n, 217, 0, u.checkSection('Collapse')),
							l(n, 219, 0, u.checkSection('Collapse')),
							l(n, 221, 0, u.checkSection('Color')),
							l(n, 223, 0, u.checkSection('Color')),
							l(n, 225, 0, u.checkSection('Color')),
							l(n, 227, 0, u.checkSection('Color')),
							l(n, 229, 0, u.checkSection('Color')),
							l(n, 231, 0, u.checkSection('Flexbox')),
							l(n, 233, 0, u.checkSection('Flexbox')),
							l(n, 235, 0, u.checkSection('Flexbox')),
							l(n, 237, 0, u.checkSection('Flexbox')),
							l(n, 239, 0, u.checkSection('Flexbox')),
							l(n, 241, 0, u.checkSection('Flexbox')),
							l(n, 243, 0, u.checkSection('Flexbox')),
							l(n, 245, 0, u.checkSection('Flexbox')),
							l(n, 247, 0, u.checkSection('Flexbox')),
							l(n, 249, 0, u.checkSection('Form')),
							l(n, 251, 0, u.checkSection('Form')),
							l(n, 253, 0, u.checkSection('Form')),
							l(n, 255, 0, u.checkSection('Form')),
							l(n, 257, 0, u.checkSection('Form')),
							l(n, 259, 0, u.checkSection('Form')),
							l(n, 261, 0, u.checkSection('Form')),
							l(n, 263, 0, u.checkSection('Form')),
							l(n, 265, 0, u.checkSection('Grid')),
							l(n, 267, 0, u.checkSection('Grid')),
							l(n, 269, 0, u.checkSection('Grid')),
							l(n, 271, 0, u.checkSection('Grid')),
							l(n, 273, 0, u.checkSection('Layout')),
							l(n, 275, 0, u.checkSection('Layout')),
							l(n, 277, 0, u.checkSection('Layout')),
							l(n, 279, 0, u.checkSection('Modal')),
							l(n, 281, 0, u.checkSection('Nav')),
							l(n, 283, 0, u.checkSection('Nav')),
							l(n, 285, 0, u.checkSection('Nav')),
							l(n, 287, 0, u.checkSection('Nav')),
							l(n, 289, 0, u.checkSection('Position')),
							l(n, 291, 0, u.checkSection('Slider')),
							l(n, 293, 0, u.checkSection('Slideshow')),
							l(n, 295, 0, u.checkSection('Space')),
							l(n, 297, 0, u.checkSection('Space')),
							l(n, 299, 0, u.checkSection('Space')),
							l(n, 301, 0, u.checkSection('Spinner')),
							l(n, 303, 0, u.checkSection('Switch')),
							l(n, 305, 0, u.checkSection('Tab')),
							l(n, 307, 0, u.checkSection('Table')),
							l(n, 309, 0, u.checkSection('Table')),
							l(n, 311, 0, u.checkSection('Table')),
							l(n, 313, 0, u.checkSection('Table')),
							l(n, 315, 0, u.checkSection('Table')),
							l(n, 317, 0, u.checkSection('Table')),
							l(n, 319, 0, u.checkSection('Tooltip')),
							l(n, 321, 0, u.checkSection('Typography')),
							l(n, 323, 0, u.checkSection('Typography')),
							l(n, 325, 0, u.checkSection('Typography')),
							l(n, 327, 0, u.checkSection('Utilities')),
							l(n, 329, 0, u.checkSection('Visibility')),
							l(n, 331, 0, u.checkSection('Visibility')),
							l(n, 333, 0, u.checkSection('Visibility'));
					},
					function(l, n) {
						l(n, 195, 0, n.component.section);
					}
				);
			}
			function og(l) {
				return ts(
					0,
					[(l()(), Hr(0, 0, null, null, 1, 'ng-component', [], null, null, null, ag, wd)), it(1, 114688, null, 0, vd, [], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			var ig = Fe('ng-component', vd, og, {}, {}, []),
				cg = Xu({ encapsulation: 0, styles: [['']], data: {} });
			function pg(l) {
				return ts(
					0,
					[
						(l()(), Hr(0, 0, null, null, 3, 'ez-root', [], null, null, null, ad, sd)),
						it(1, 114688, null, 0, ed, [ou], null, null),
						(l()(), Hr(2, 16777216, null, 0, 1, 'router-outlet', [], null, null, null, null, null)),
						it(3, 212992, null, 0, ih, [oh, Nu, uu, [8, null], Pu], null, null)
					],
					function(l, n) {
						l(n, 1, 0), l(n, 3, 0);
					},
					null
				);
			}
			function hg(l) {
				return ts(0, [(l()(), Hr(0, 0, null, null, 1, 'docs-root', [], null, null, null, pg, cg)), it(1, 49152, null, 0, da, [], null, null)], null, null);
			}
			var dg = Fe('docs-root', da, hg, {}, {}, []),
				fg = (function() {
					return function() {};
				})(),
				gg = (function() {
					return function() {};
				})(),
				mg = ca(ha, [da], function(l) {
					return (function(l) {
						for (var n = {}, u = [], e = !1, t = 0; t < l.length; t++) {
							var r = l[t];
							r.token === ql && !0 === r.value && (e = !0), 1073741824 & r.flags && u.push(r.token), (r.index = t), (n[Yu(r.token)] = r);
						}
						return { factory: null, providersByKey: n, providers: l, modules: u, isRoot: e };
					})([
						Oe(512, uu, eu, [[8, [Ah, ig, dg]], [3, uu], ru]),
						Oe(5120, Ht, Lr, [[3, Ht]]),
						Oe(4608, ka, Ca, [Ht, [2, xa]]),
						Oe(5120, Ct, Fr, [rr]),
						Oe(5120, Nt, Dt, []),
						Oe(5120, Su, Dr, []),
						Oe(5120, Eu, Ur, []),
						Oe(4608, Ti, Mi, [Ra]),
						Oe(6144, Mn, null, [Ti]),
						Oe(4608, ki, Si, []),
						Oe(
							5120,
							Jo,
							function(l, n, u, e, t, r, s, a) {
								return [new _i(l, n, u), new Oi(e), new Ei(t, r, s, a)];
							},
							[Ra, rr, Ft, Ra, Ra, ki, zt, [2, Ci]]
						),
						Oe(4608, $o, $o, [Jo, rr]),
						Oe(135680, ni, ni, [Ra]),
						Oe(4608, oi, oi, [$o, ni, Nt]),
						Oe(6144, pu, null, [oi]),
						Oe(6144, li, null, [ni]),
						Oe(4608, dr, dr, [rr]),
						Oe(5120, Yc, Sh, [sh]),
						Oe(4608, dh, dh, []),
						Oe(6144, ph, null, [dh]),
						Oe(135680, fh, fh, [sh, kr, Yt, Zl, ph]),
						Oe(4608, hh, hh, []),
						Oe(5120, gh, jh, [sh, Na, mh]),
						Oe(5120, Oh, Ih, [Eh]),
						Oe(
							5120,
							Vt,
							function(l) {
								return [l];
							},
							[Oh]
						),
						Oe(1073742336, Ma, Ma, []),
						Oe(1024, Ln, Vi, []),
						Oe(
							1024,
							br,
							function() {
								return [vh()];
							},
							[]
						),
						Oe(512, Eh, Eh, [Zl]),
						Oe(
							1024,
							Rt,
							function(l, n) {
								return [
									((u = l),
									Wo('probe', Yo),
									Wo(
										'coreTokens',
										r(
											{},
											Ko,
											(u || []).reduce(function(l, n) {
												return (l[n.name] = n.token), l;
											}, {})
										)
									),
									function() {
										return Yo;
									}),
									Ph(n)
								];
								var u;
							},
							[[2, br], Eh]
						),
						Oe(512, At, At, [[2, Rt]]),
						Oe(131584, _r, _r, [rr, zt, Zl, Ln, uu, At]),
						Oe(1073742336, Vr, Vr, [_r]),
						Oe(1073742336, zi, zi, [[3, zi]]),
						Oe(1073742336, td, td, []),
						Oe(1024, bh, xh, [[3, sh]]),
						Oe(512, Pc, Ic, []),
						Oe(512, oh, oh, []),
						Oe(256, mh, { useHash: !0, anchorScrolling: 'enabled' }, []),
						Oe(1024, ma, _h, [fa, [2, ba], mh]),
						Oe(512, ya, ya, [ma, fa]),
						Oe(512, Yt, Yt, []),
						Oe(512, kr, Er, [Yt, [2, Cr]]),
						Oe(
							1024,
							Xp,
							function() {
								return [
									[{ path: 'components', component: vd }, { path: '', redirectTo: '/components', pathMatch: 'full' }, { path: '**', redirectTo: '/components', pathMatch: 'full' }]
								];
							},
							[]
						),
						Oe(1024, sh, Ch, [_r, Pc, oh, ya, Zl, kr, Yt, Xp, mh, [2, nh], [2, Jp]]),
						Oe(1073742336, wh, wh, [[2, bh], [2, sh]]),
						Oe(1073742336, fg, fg, []),
						Oe(1073742336, Dh, Dh, []),
						Oe(1073742336, Uh, Uh, []),
						Oe(1073742336, Fh, Fh, []),
						Oe(1073742336, zh, zh, []),
						Oe(1073742336, Hh, Hh, []),
						Oe(1073742336, Bh, Bh, []),
						Oe(1073742336, Gh, Gh, []),
						Oe(1073742336, Zh, Zh, []),
						Oe(1073742336, Qh, Qh, []),
						Oe(1073742336, Wh, Wh, []),
						Oe(1073742336, Kh, Kh, []),
						Oe(1073742336, Yh, Yh, []),
						Oe(1073742336, $h, $h, []),
						Oe(1073742336, Xh, Xh, []),
						Oe(1073742336, ld, ld, []),
						Oe(1073742336, nd, nd, []),
						Oe(1073742336, ud, ud, []),
						Oe(1073742336, rd, rd, []),
						Oe(1073742336, gg, gg, []),
						Oe(1073742336, ha, ha, []),
						Oe(256, ql, !0, [])
					]);
				});
			(function() {
				if (an) throw new Error('Cannot enable prod mode after platform setup.');
				sn = !1;
			})(),
				Fi()
					.bootstrapModuleFactory(mg)
					.catch(function(l) {
						return console.log(l);
					});
		}
	},
	[[0, 0]]
]);
//# sourceMappingURL=main-es5.de9ad5055a4e41fa5f5a.js.map
