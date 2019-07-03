(window.webpackJsonp = window.webpackJsonp || []).push([
	[1],
	{
		0: function(t, e, n) {
			t.exports = n('zUnb');
		},
		zUnb: function(t, e, n) {
			'use strict';
			n.r(e);
			var r = function(t, e) {
				return (r =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function(t, e) {
							t.__proto__ = e;
						}) ||
					function(t, e) {
						for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
					})(t, e);
			};
			function o(t, e) {
				function n() {
					this.constructor = t;
				}
				r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
			}
			var i = function() {
				return (i =
					Object.assign ||
					function(t) {
						for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t;
					}).apply(this, arguments);
			};
			function a(t, e, n, r) {
				var o,
					i = arguments.length,
					a = i < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
				if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
				else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
				return i > 3 && a && Object.defineProperty(e, n, a), a;
			}
			function s(t, e) {
				if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(t, e);
			}
			function l(t) {
				var e = 'function' == typeof Symbol && t[Symbol.iterator],
					n = 0;
				return e
					? e.call(t)
					: {
							next: function() {
								return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
							}
					  };
			}
			function u(t, e) {
				var n = 'function' == typeof Symbol && t[Symbol.iterator];
				if (!n) return t;
				var r,
					o,
					i = n.call(t),
					a = [];
				try {
					for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
				} catch (s) {
					o = { error: s };
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i);
					} finally {
						if (o) throw o.error;
					}
				}
				return a;
			}
			function c() {
				for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(u(arguments[e]));
				return t;
			}
			var p =
				Array.isArray ||
				function(t) {
					return t && 'number' == typeof t.length;
				};
			function f(t) {
				return null !== t && 'object' == typeof t;
			}
			function d(t) {
				return 'function' == typeof t;
			}
			function h(t) {
				return (
					Error.call(this),
					(this.message = t
						? t.length +
						  ' errors occurred during unsubscription:\n' +
						  t
								.map(function(t, e) {
									return e + 1 + ') ' + t.toString();
								})
								.join('\n  ')
						: ''),
					(this.name = 'UnsubscriptionError'),
					(this.errors = t),
					this
				);
			}
			h.prototype = Object.create(Error.prototype);
			var g = h,
				m = (function() {
					function t(t) {
						(this.closed = !1), (this._parentOrParents = null), (this._subscriptions = null), t && (this._unsubscribe = t);
					}
					return (
						(t.prototype.unsubscribe = function() {
							var e;
							if (!this.closed) {
								var n = this._parentOrParents,
									r = this._unsubscribe,
									o = this._subscriptions;
								if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t)) n.remove(this);
								else if (null !== n) for (var i = 0; i < n.length; ++i) n[i].remove(this);
								if (d(r))
									try {
										r.call(this);
									} catch (l) {
										e = l instanceof g ? b(l.errors) : [l];
									}
								if (p(o)) {
									i = -1;
									for (var a = o.length; ++i < a; ) {
										var s = o[i];
										if (f(s))
											try {
												s.unsubscribe();
											} catch (l) {
												(e = e || []), l instanceof g ? (e = e.concat(b(l.errors))) : e.push(l);
											}
									}
								}
								if (e) throw new g(e);
							}
						}),
						(t.prototype.add = function(e) {
							var n = e;
							if (!e) return t.EMPTY;
							switch (typeof e) {
								case 'function':
									n = new t(e);
								case 'object':
									if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
									if (this.closed) return n.unsubscribe(), n;
									if (!(n instanceof t)) {
										var r = n;
										(n = new t())._subscriptions = [r];
									}
									break;
								default:
									throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
							}
							var o = n._parentOrParents;
							if (null === o) n._parentOrParents = this;
							else if (o instanceof t) {
								if (o === this) return n;
								n._parentOrParents = [o, this];
							} else {
								if (-1 !== o.indexOf(this)) return n;
								o.push(this);
							}
							var i = this._subscriptions;
							return null === i ? (this._subscriptions = [n]) : i.push(n), n;
						}),
						(t.prototype.remove = function(t) {
							var e = this._subscriptions;
							if (e) {
								var n = e.indexOf(t);
								-1 !== n && e.splice(n, 1);
							}
						}),
						(t.EMPTY = (function(t) {
							return (t.closed = !0), t;
						})(new t())),
						t
					);
				})();
			function b(t) {
				return t.reduce(function(t, e) {
					return t.concat(e instanceof g ? e.errors : e);
				}, []);
			}
			var v = !1,
				y = {
					Promise: void 0,
					set useDeprecatedSynchronousErrorHandling(t) {
						v = t;
					},
					get useDeprecatedSynchronousErrorHandling() {
						return v;
					}
				};
			function w(t) {
				setTimeout(function() {
					throw t;
				}, 0);
			}
			var _ = {
					closed: !0,
					next: function(t) {},
					error: function(t) {
						if (y.useDeprecatedSynchronousErrorHandling) throw t;
						w(t);
					},
					complete: function() {}
				},
				x = 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random(),
				C = (function(t) {
					function e(n, r, o) {
						var i = t.call(this) || this;
						switch (((i.syncErrorValue = null), (i.syncErrorThrown = !1), (i.syncErrorThrowable = !1), (i.isStopped = !1), arguments.length)) {
							case 0:
								i.destination = _;
								break;
							case 1:
								if (!n) {
									i.destination = _;
									break;
								}
								if ('object' == typeof n) {
									n instanceof e ? ((i.syncErrorThrowable = n.syncErrorThrowable), (i.destination = n), n.add(i)) : ((i.syncErrorThrowable = !0), (i.destination = new k(i, n)));
									break;
								}
							default:
								(i.syncErrorThrowable = !0), (i.destination = new k(i, n, r, o));
						}
						return i;
					}
					return (
						o(e, t),
						(e.prototype[x] = function() {
							return this;
						}),
						(e.create = function(t, n, r) {
							var o = new e(t, n, r);
							return (o.syncErrorThrowable = !1), o;
						}),
						(e.prototype.next = function(t) {
							this.isStopped || this._next(t);
						}),
						(e.prototype.error = function(t) {
							this.isStopped || ((this.isStopped = !0), this._error(t));
						}),
						(e.prototype.complete = function() {
							this.isStopped || ((this.isStopped = !0), this._complete());
						}),
						(e.prototype.unsubscribe = function() {
							this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
						}),
						(e.prototype._next = function(t) {
							this.destination.next(t);
						}),
						(e.prototype._error = function(t) {
							this.destination.error(t), this.unsubscribe();
						}),
						(e.prototype._complete = function() {
							this.destination.complete(), this.unsubscribe();
						}),
						(e.prototype._unsubscribeAndRecycle = function() {
							var t = this._parentOrParents;
							return (this._parentOrParents = null), this.unsubscribe(), (this.closed = !1), (this.isStopped = !1), (this._parentOrParents = t), this;
						}),
						e
					);
				})(m),
				k = (function(t) {
					function e(e, n, r, o) {
						var i,
							a = t.call(this) || this;
						a._parentSubscriber = e;
						var s = a;
						return (
							d(n)
								? (i = n)
								: n &&
								  ((i = n.next),
								  (r = n.error),
								  (o = n.complete),
								  n !== _ && (d((s = Object.create(n)).unsubscribe) && a.add(s.unsubscribe.bind(s)), (s.unsubscribe = a.unsubscribe.bind(a)))),
							(a._context = s),
							(a._next = i),
							(a._error = r),
							(a._complete = o),
							a
						);
					}
					return (
						o(e, t),
						(e.prototype.next = function(t) {
							if (!this.isStopped && this._next) {
								var e = this._parentSubscriber;
								y.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t);
							}
						}),
						(e.prototype.error = function(t) {
							if (!this.isStopped) {
								var e = this._parentSubscriber,
									n = y.useDeprecatedSynchronousErrorHandling;
								if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
								else if (e.syncErrorThrowable) n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : w(t), this.unsubscribe();
								else {
									if ((this.unsubscribe(), n)) throw t;
									w(t);
								}
							}
						}),
						(e.prototype.complete = function() {
							var t = this;
							if (!this.isStopped) {
								var e = this._parentSubscriber;
								if (this._complete) {
									var n = function() {
										return t._complete.call(t._context);
									};
									y.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe());
								} else this.unsubscribe();
							}
						}),
						(e.prototype.__tryOrUnsub = function(t, e) {
							try {
								t.call(this._context, e);
							} catch (n) {
								if ((this.unsubscribe(), y.useDeprecatedSynchronousErrorHandling)) throw n;
								w(n);
							}
						}),
						(e.prototype.__tryOrSetError = function(t, e, n) {
							if (!y.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
							try {
								e.call(this._context, n);
							} catch (r) {
								return y.useDeprecatedSynchronousErrorHandling ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0) : (w(r), !0);
							}
							return !1;
						}),
						(e.prototype._unsubscribe = function() {
							var t = this._parentSubscriber;
							(this._context = null), (this._parentSubscriber = null), t.unsubscribe();
						}),
						e
					);
				})(C),
				S = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
			function P() {}
			function E() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				return O(t);
			}
			function O(t) {
				return t
					? 1 === t.length
						? t[0]
						: function(e) {
								return t.reduce(function(t, e) {
									return e(t);
								}, e);
						  }
					: P;
			}
			var I = (function() {
				function t(t) {
					(this._isScalar = !1), t && (this._subscribe = t);
				}
				return (
					(t.prototype.lift = function(e) {
						var n = new t();
						return (n.source = this), (n.operator = e), n;
					}),
					(t.prototype.subscribe = function(t, e, n) {
						var r = this.operator,
							o = (function(t, e, n) {
								if (t) {
									if (t instanceof C) return t;
									if (t[x]) return t[x]();
								}
								return t || e || n ? new C(t, e, n) : new C(_);
							})(t, e, n);
						if (
							(o.add(r ? r.call(o, this.source) : this.source || (y.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable) ? this._subscribe(o) : this._trySubscribe(o)),
							y.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && ((o.syncErrorThrowable = !1), o.syncErrorThrown))
						)
							throw o.syncErrorValue;
						return o;
					}),
					(t.prototype._trySubscribe = function(t) {
						try {
							return this._subscribe(t);
						} catch (e) {
							y.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
								(function(t) {
									for (; t; ) {
										var e = t.destination;
										if (t.closed || t.isStopped) return !1;
										t = e && e instanceof C ? e : null;
									}
									return !0;
								})(t)
									? t.error(e)
									: console.warn(e);
						}
					}),
					(t.prototype.forEach = function(t, e) {
						var n = this;
						return new (e = T(e))(function(e, r) {
							var o;
							o = n.subscribe(
								function(e) {
									try {
										t(e);
									} catch (n) {
										r(n), o && o.unsubscribe();
									}
								},
								r,
								e
							);
						});
					}),
					(t.prototype._subscribe = function(t) {
						var e = this.source;
						return e && e.subscribe(t);
					}),
					(t.prototype[S] = function() {
						return this;
					}),
					(t.prototype.pipe = function() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						return 0 === t.length ? this : O(t)(this);
					}),
					(t.prototype.toPromise = function(t) {
						var e = this;
						return new (t = T(t))(function(t, n) {
							var r;
							e.subscribe(
								function(t) {
									return (r = t);
								},
								function(t) {
									return n(t);
								},
								function() {
									return t(r);
								}
							);
						});
					}),
					(t.create = function(e) {
						return new t(e);
					}),
					t
				);
			})();
			function T(t) {
				if ((t || (t = y.Promise || Promise), !t)) throw new Error('no Promise impl found');
				return t;
			}
			function M() {
				return Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this;
			}
			M.prototype = Object.create(Error.prototype);
			var A = M,
				j = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
					}
					return (
						o(e, t),
						(e.prototype.unsubscribe = function() {
							if (!this.closed) {
								this.closed = !0;
								var t = this.subject,
									e = t.observers;
								if (((this.subject = null), e && 0 !== e.length && !t.isStopped && !t.closed)) {
									var n = e.indexOf(this.subscriber);
									-1 !== n && e.splice(n, 1);
								}
							}
						}),
						e
					);
				})(m),
				R = (function(t) {
					function e(e) {
						var n = t.call(this, e) || this;
						return (n.destination = e), n;
					}
					return o(e, t), e;
				})(C),
				D = (function(t) {
					function e() {
						var e = t.call(this) || this;
						return (e.observers = []), (e.closed = !1), (e.isStopped = !1), (e.hasError = !1), (e.thrownError = null), e;
					}
					return (
						o(e, t),
						(e.prototype[x] = function() {
							return new R(this);
						}),
						(e.prototype.lift = function(t) {
							var e = new N(this, this);
							return (e.operator = t), e;
						}),
						(e.prototype.next = function(t) {
							if (this.closed) throw new A();
							if (!this.isStopped) for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t);
						}),
						(e.prototype.error = function(t) {
							if (this.closed) throw new A();
							(this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
							for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
							this.observers.length = 0;
						}),
						(e.prototype.complete = function() {
							if (this.closed) throw new A();
							this.isStopped = !0;
							for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
							this.observers.length = 0;
						}),
						(e.prototype.unsubscribe = function() {
							(this.isStopped = !0), (this.closed = !0), (this.observers = null);
						}),
						(e.prototype._trySubscribe = function(e) {
							if (this.closed) throw new A();
							return t.prototype._trySubscribe.call(this, e);
						}),
						(e.prototype._subscribe = function(t) {
							if (this.closed) throw new A();
							return this.hasError ? (t.error(this.thrownError), m.EMPTY) : this.isStopped ? (t.complete(), m.EMPTY) : (this.observers.push(t), new j(this, t));
						}),
						(e.prototype.asObservable = function() {
							var t = new I();
							return (t.source = this), t;
						}),
						(e.create = function(t, e) {
							return new N(t, e);
						}),
						e
					);
				})(I),
				N = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						return (r.destination = e), (r.source = n), r;
					}
					return (
						o(e, t),
						(e.prototype.next = function(t) {
							var e = this.destination;
							e && e.next && e.next(t);
						}),
						(e.prototype.error = function(t) {
							var e = this.destination;
							e && e.error && this.destination.error(t);
						}),
						(e.prototype.complete = function() {
							var t = this.destination;
							t && t.complete && this.destination.complete();
						}),
						(e.prototype._subscribe = function(t) {
							return this.source ? this.source.subscribe(t) : m.EMPTY;
						}),
						e
					);
				})(D);
			function U(t) {
				return t && 'function' == typeof t.schedule;
			}
			var L = (function(t) {
					function e(e, n, r) {
						var o = t.call(this) || this;
						return (o.parent = e), (o.outerValue = n), (o.outerIndex = r), (o.index = 0), o;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
						}),
						(e.prototype._error = function(t) {
							this.parent.notifyError(t, this), this.unsubscribe();
						}),
						(e.prototype._complete = function() {
							this.parent.notifyComplete(this), this.unsubscribe();
						}),
						e
					);
				})(C),
				H = function(t) {
					return function(e) {
						for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
						e.complete();
					};
				};
			function z() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			}
			var V = z(),
				F = function(t) {
					return t && 'number' == typeof t.length && 'function' != typeof t;
				};
			function B(t) {
				return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
			}
			var q = function(t) {
				if (t && 'function' == typeof t[S])
					return (
						(r = t),
						function(t) {
							var e = r[S]();
							if ('function' != typeof e.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
							return e.subscribe(t);
						}
					);
				if (F(t)) return H(t);
				if (B(t))
					return (
						(n = t),
						function(t) {
							return (
								n
									.then(
										function(e) {
											t.closed || (t.next(e), t.complete());
										},
										function(e) {
											return t.error(e);
										}
									)
									.then(null, w),
								t
							);
						}
					);
				if (t && 'function' == typeof t[V])
					return (
						(e = t),
						function(t) {
							for (var n = e[V](); ; ) {
								var r = n.next();
								if (r.done) {
									t.complete();
									break;
								}
								if ((t.next(r.value), t.closed)) break;
							}
							return (
								'function' == typeof n.return &&
									t.add(function() {
										n.return && n.return();
									}),
								t
							);
						}
					);
				var e,
					n,
					r,
					o = f(t) ? 'an invalid object' : "'" + t + "'";
				throw new TypeError('You provided ' + o + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.');
			};
			function G(t, e, n, r, o) {
				if ((void 0 === o && (o = new L(t, n, r)), !o.closed)) return e instanceof I ? e.subscribe(o) : q(e)(o);
			}
			var Z = (function(t) {
				function e() {
					return (null !== t && t.apply(this, arguments)) || this;
				}
				return (
					o(e, t),
					(e.prototype.notifyNext = function(t, e, n, r, o) {
						this.destination.next(e);
					}),
					(e.prototype.notifyError = function(t, e) {
						this.destination.error(t);
					}),
					(e.prototype.notifyComplete = function(t) {
						this.destination.complete();
					}),
					e
				);
			})(C);
			function W(t, e) {
				return function(n) {
					if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
					return n.lift(new Q(t, e));
				};
			}
			var Q = (function() {
					function t(t, e) {
						(this.project = t), (this.thisArg = e);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Y(t, this.project, this.thisArg));
						}),
						t
					);
				})(),
				Y = (function(t) {
					function e(e, n, r) {
						var o = t.call(this, e) || this;
						return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							var e;
							try {
								e = this.project.call(this.thisArg, t, this.count++);
							} catch (n) {
								return void this.destination.error(n);
							}
							this.destination.next(e);
						}),
						e
					);
				})(C);
			function J(t, e) {
				return new I(function(n) {
					var r = new m(),
						o = 0;
					return (
						r.add(
							e.schedule(function() {
								o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete();
							})
						),
						r
					);
				});
			}
			function K(t, e) {
				return e
					? (function(t, e) {
							if (null != t) {
								if (
									(function(t) {
										return t && 'function' == typeof t[S];
									})(t)
								)
									return (function(t, e) {
										return new I(function(n) {
											var r = new m();
											return (
												r.add(
													e.schedule(function() {
														var o = t[S]();
														r.add(
															o.subscribe({
																next: function(t) {
																	r.add(
																		e.schedule(function() {
																			return n.next(t);
																		})
																	);
																},
																error: function(t) {
																	r.add(
																		e.schedule(function() {
																			return n.error(t);
																		})
																	);
																},
																complete: function() {
																	r.add(
																		e.schedule(function() {
																			return n.complete();
																		})
																	);
																}
															})
														);
													})
												),
												r
											);
										});
									})(t, e);
								if (B(t))
									return (function(t, e) {
										return new I(function(n) {
											var r = new m();
											return (
												r.add(
													e.schedule(function() {
														return t.then(
															function(t) {
																r.add(
																	e.schedule(function() {
																		n.next(t),
																			r.add(
																				e.schedule(function() {
																					return n.complete();
																				})
																			);
																	})
																);
															},
															function(t) {
																r.add(
																	e.schedule(function() {
																		return n.error(t);
																	})
																);
															}
														);
													})
												),
												r
											);
										});
									})(t, e);
								if (F(t)) return J(t, e);
								if (
									(function(t) {
										return t && 'function' == typeof t[V];
									})(t) ||
									'string' == typeof t
								)
									return (function(t, e) {
										if (!t) throw new Error('Iterable cannot be null');
										return new I(function(n) {
											var r,
												o = new m();
											return (
												o.add(function() {
													r && 'function' == typeof r.return && r.return();
												}),
												o.add(
													e.schedule(function() {
														(r = t[V]()),
															o.add(
																e.schedule(function() {
																	if (!n.closed) {
																		var t, e;
																		try {
																			var o = r.next();
																			(t = o.value), (e = o.done);
																		} catch (i) {
																			return void n.error(i);
																		}
																		e ? n.complete() : (n.next(t), this.schedule());
																	}
																})
															);
													})
												),
												o
											);
										});
									})(t, e);
							}
							throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
					  })(t, e)
					: t instanceof I
					? t
					: new I(q(t));
			}
			function X(t, e, n) {
				return (
					void 0 === n && (n = Number.POSITIVE_INFINITY),
					'function' == typeof e
						? function(r) {
								return r.pipe(
									X(function(n, r) {
										return K(t(n, r)).pipe(
											W(function(t, o) {
												return e(n, t, r, o);
											})
										);
									}, n)
								);
						  }
						: ('number' == typeof e && (n = e),
						  function(e) {
								return e.lift(new $(t, n));
						  })
				);
			}
			var $ = (function() {
					function t(t, e) {
						void 0 === e && (e = Number.POSITIVE_INFINITY), (this.project = t), (this.concurrent = e);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new tt(t, this.project, this.concurrent));
						}),
						t
					);
				})(),
				tt = (function(t) {
					function e(e, n, r) {
						void 0 === r && (r = Number.POSITIVE_INFINITY);
						var o = t.call(this, e) || this;
						return (o.project = n), (o.concurrent = r), (o.hasCompleted = !1), (o.buffer = []), (o.active = 0), (o.index = 0), o;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
						}),
						(e.prototype._tryNext = function(t) {
							var e,
								n = this.index++;
							try {
								e = this.project(t, n);
							} catch (r) {
								return void this.destination.error(r);
							}
							this.active++, this._innerSub(e, t, n);
						}),
						(e.prototype._innerSub = function(t, e, n) {
							var r = new L(this, void 0, void 0);
							this.destination.add(r), G(this, t, e, n, r);
						}),
						(e.prototype._complete = function() {
							(this.hasCompleted = !0), 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
						}),
						(e.prototype.notifyNext = function(t, e, n, r, o) {
							this.destination.next(e);
						}),
						(e.prototype.notifyComplete = function(t) {
							var e = this.buffer;
							this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
						}),
						e
					);
				})(Z);
			function et(t) {
				return t;
			}
			function nt(t) {
				return void 0 === t && (t = Number.POSITIVE_INFINITY), X(et, t);
			}
			function rt(t, e) {
				return e ? J(t, e) : new I(H(t));
			}
			function ot() {
				return function(t) {
					return t.lift(new it(t));
				};
			}
			var it = (function() {
					function t(t) {
						this.connectable = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							var n = this.connectable;
							n._refCount++;
							var r = new at(t, n),
								o = e.subscribe(r);
							return r.closed || (r.connection = n.connect()), o;
						}),
						t
					);
				})(),
				at = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.connectable = n), r;
					}
					return (
						o(e, t),
						(e.prototype._unsubscribe = function() {
							var t = this.connectable;
							if (t) {
								this.connectable = null;
								var e = t._refCount;
								if (e <= 0) this.connection = null;
								else if (((t._refCount = e - 1), e > 1)) this.connection = null;
								else {
									var n = this.connection,
										r = t._connection;
									(this.connection = null), !r || (n && r !== n) || r.unsubscribe();
								}
							} else this.connection = null;
						}),
						e
					);
				})(C),
				st = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						return (r.source = e), (r.subjectFactory = n), (r._refCount = 0), (r._isComplete = !1), r;
					}
					return (
						o(e, t),
						(e.prototype._subscribe = function(t) {
							return this.getSubject().subscribe(t);
						}),
						(e.prototype.getSubject = function() {
							var t = this._subject;
							return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
						}),
						(e.prototype.connect = function() {
							var t = this._connection;
							return (
								t ||
									((this._isComplete = !1),
									(t = this._connection = new m()).add(this.source.subscribe(new ut(this.getSubject(), this))),
									t.closed && ((this._connection = null), (t = m.EMPTY))),
								t
							);
						}),
						(e.prototype.refCount = function() {
							return ot()(this);
						}),
						e
					);
				})(I).prototype,
				lt = {
					operator: { value: null },
					_refCount: { value: 0, writable: !0 },
					_subject: { value: null, writable: !0 },
					_connection: { value: null, writable: !0 },
					_subscribe: { value: st._subscribe },
					_isComplete: { value: st._isComplete, writable: !0 },
					getSubject: { value: st.getSubject },
					connect: { value: st.connect },
					refCount: { value: st.refCount }
				},
				ut = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.connectable = n), r;
					}
					return (
						o(e, t),
						(e.prototype._error = function(e) {
							this._unsubscribe(), t.prototype._error.call(this, e);
						}),
						(e.prototype._complete = function() {
							(this.connectable._isComplete = !0), this._unsubscribe(), t.prototype._complete.call(this);
						}),
						(e.prototype._unsubscribe = function() {
							var t = this.connectable;
							if (t) {
								this.connectable = null;
								var e = t._connection;
								(t._refCount = 0), (t._subject = null), (t._connection = null), e && e.unsubscribe();
							}
						}),
						e
					);
				})(R);
			function ct() {
				return new D();
			}
			var pt = '__parameters__';
			function ft(t, e, n) {
				var r = (function(t) {
					return function() {
						for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
						if (t) {
							var r = t.apply(void 0, c(e));
							for (var o in r) this[o] = r[o];
						}
					};
				})(e);
				function o() {
					for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					if (this instanceof o) return r.apply(this, e), this;
					var i = new ((t = o).bind.apply(t, c([void 0], e)))();
					return (a.annotation = i), a;
					function a(t, e, n) {
						for (var r = t.hasOwnProperty(pt) ? t[pt] : Object.defineProperty(t, pt, { value: [] })[pt]; r.length <= n; ) r.push(null);
						return (r[n] = r[n] || []).push(i), t;
					}
				}
				return n && (o.prototype = Object.create(n.prototype)), (o.prototype.ngMetadataName = t), (o.annotationCls = o), o;
			}
			var dt = ft('Inject', function(t) {
					return { token: t };
				}),
				ht = ft('Optional'),
				gt = ft('Self'),
				mt = ft('SkipSelf'),
				bt = (function(t) {
					return (t[(t.Default = 0)] = 'Default'), (t[(t.Host = 1)] = 'Host'), (t[(t.Self = 2)] = 'Self'), (t[(t.SkipSelf = 4)] = 'SkipSelf'), (t[(t.Optional = 8)] = 'Optional'), t;
				})({});
			function vt(t) {
				for (var e in t) if (t[e] === vt) return e;
				throw Error('Could not find renamed property on target object.');
			}
			function yt(t, e) {
				for (var n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
			}
			function wt(t) {
				return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 };
			}
			function _t(t) {
				return { factory: t.factory, providers: t.providers || [], imports: t.imports || [] };
			}
			function xt(t) {
				var e = t[kt];
				return e && e.token === t ? e : null;
			}
			function Ct(t) {
				return t && t.hasOwnProperty(St) ? t[St] : null;
			}
			var kt = vt({ ngInjectableDef: vt }),
				St = vt({ ngInjectorDef: vt });
			function Pt(t) {
				if ('string' == typeof t) return t;
				if (t instanceof Array) return '[' + t.map(Pt).join(', ') + ']';
				if (null == t) return '' + t;
				if (t.overriddenName) return '' + t.overriddenName;
				if (t.name) return '' + t.name;
				var e = t.toString();
				if (null == e) return '' + e;
				var n = e.indexOf('\n');
				return -1 === n ? e : e.substring(0, n);
			}
			var Et = vt({ __forward_ref__: vt });
			function Ot(t) {
				return (
					(t.__forward_ref__ = Ot),
					(t.toString = function() {
						return Pt(this());
					}),
					t
				);
			}
			function It(t) {
				var e = t;
				return 'function' == typeof e && e.hasOwnProperty(Et) && e.__forward_ref__ === Ot ? e() : t;
			}
			var Tt,
				Mt = 'undefined' != typeof globalThis && globalThis,
				At = 'undefined' != typeof window && window,
				jt = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
				Rt = 'undefined' != typeof global && global,
				Dt = Mt || Rt || At || jt,
				Nt = (function() {
					function t(t, e) {
						(this._desc = t),
							(this.ngMetadataName = 'InjectionToken'),
							(this.ngInjectableDef = void 0),
							'number' == typeof e ? (this.__NG_ELEMENT_ID__ = e) : void 0 !== e && (this.ngInjectableDef = wt({ token: this, providedIn: e.providedIn || 'root', factory: e.factory }));
					}
					return (
						(t.prototype.toString = function() {
							return 'InjectionToken ' + this._desc;
						}),
						t
					);
				})(),
				Ut = new Nt('INJECTOR', -1),
				Lt = new Object(),
				Ht = 'ngTempTokenPath',
				zt = 'ngTokenPath',
				Vt = /\n/gm,
				Ft = '\u0275',
				Bt = '__source',
				qt = vt({ provide: String, useValue: vt }),
				Gt = void 0;
			function Zt(t) {
				var e = Gt;
				return (Gt = t), e;
			}
			function Wt(t) {
				var e = Tt;
				return (Tt = t), e;
			}
			function Qt(t, e) {
				return (
					void 0 === e && (e = bt.Default),
					(Tt ||
						function(t, e) {
							if ((void 0 === e && (e = bt.Default), void 0 === Gt)) throw new Error('inject() must be called from an injection context');
							return null === Gt ? Yt(t, void 0, e) : Gt.get(t, e & bt.Optional ? null : void 0, e);
						})(t, e)
				);
			}
			function Yt(t, e, n) {
				var r = xt(t);
				if (r && 'root' == r.providedIn) return void 0 === r.value ? (r.value = r.factory()) : r.value;
				if (n & bt.Optional) return null;
				if (void 0 !== e) return e;
				throw new Error('Injector: NOT_FOUND [' + Pt(t) + ']');
			}
			function Jt(t) {
				for (var e = [], n = 0; n < t.length; n++) {
					var r = It(t[n]);
					if (Array.isArray(r)) {
						if (0 === r.length) throw new Error('Arguments array must have arguments.');
						for (var o = void 0, i = bt.Default, a = 0; a < r.length; a++) {
							var s = r[a];
							s instanceof ht || 'Optional' === s.ngMetadataName || s === ht
								? (i |= bt.Optional)
								: s instanceof mt || 'SkipSelf' === s.ngMetadataName || s === mt
								? (i |= bt.SkipSelf)
								: s instanceof gt || 'Self' === s.ngMetadataName || s === gt
								? (i |= bt.Self)
								: (o = s instanceof dt || s === dt ? s.token : s);
						}
						e.push(Qt(o, i));
					} else e.push(Qt(r));
				}
				return e;
			}
			var Kt = (function() {
				function t() {}
				return (
					(t.prototype.get = function(t, e) {
						if ((void 0 === e && (e = Lt), e === Lt)) {
							var n = new Error('NullInjectorError: No provider for ' + Pt(t) + '!');
							throw ((n.name = 'NullInjectorError'), n);
						}
						return e;
					}),
					t
				);
			})();
			function Xt(t) {
				throw new Error('Multiple components match node with tagname ' + t.tagName);
			}
			function $t() {
				throw new Error('Cannot mix multi providers and regular providers');
			}
			var te = new Nt('The presence of this token marks an injector as being the root injector.'),
				ee = {},
				ne = {},
				re = [],
				oe = void 0;
			function ie() {
				return void 0 === oe && (oe = new Kt()), oe;
			}
			function ae(t, e, n, r) {
				return void 0 === e && (e = null), void 0 === n && (n = null), (e = e || ie()), new se(t, n, e, r);
			}
			var se = (function() {
				function t(t, e, n, r) {
					var o = this;
					void 0 === r && (r = null), (this.parent = n), (this.records = new Map()), (this.injectorDefTypes = new Set()), (this.onDestroy = new Set()), (this._destroyed = !1);
					var i = [];
					pe([t], function(t) {
						return o.processInjectorType(t, [], i);
					}),
						e &&
							pe(e, function(n) {
								return o.processProvider(n, t, e);
							}),
						this.records.set(Ut, ce(void 0, this)),
						(this.isRootInjector = this.records.has(te)),
						this.injectorDefTypes.forEach(function(t) {
							return o.get(t);
						}),
						(this.source = r || ('object' == typeof t ? null : Pt(t)));
				}
				return (
					Object.defineProperty(t.prototype, 'destroyed', {
						get: function() {
							return this._destroyed;
						},
						enumerable: !0,
						configurable: !0
					}),
					(t.prototype.destroy = function() {
						this.assertNotDestroyed(), (this._destroyed = !0);
						try {
							this.onDestroy.forEach(function(t) {
								return t.ngOnDestroy();
							});
						} finally {
							this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
						}
					}),
					(t.prototype.get = function(t, e, n) {
						void 0 === e && (e = Lt), void 0 === n && (n = bt.Default), this.assertNotDestroyed();
						var r,
							o = Zt(this);
						try {
							if (!(n & bt.SkipSelf)) {
								var i = this.records.get(t);
								if (void 0 === i) {
									var a = ('function' == typeof (r = t) || ('object' == typeof r && r instanceof Nt)) && xt(t);
									a && this.injectableDefInScope(a) && ((i = ce(le(t), ee)), this.records.set(t, i));
								}
								if (void 0 !== i) return this.hydrate(t, i);
							}
							return (n & bt.Self ? ie() : this.parent).get(t, n & bt.Optional ? null : e);
						} catch (s) {
							if ('NullInjectorError' === s.name) {
								if (((s[Ht] = s[Ht] || []).unshift(Pt(t)), o)) throw s;
								return (function(t, e, n, r) {
									var o = t[Ht];
									throw (e[Bt] && o.unshift(e[Bt]),
									(t.message = (function(t, e, n, r) {
										void 0 === r && (r = null), (t = t && '\n' === t.charAt(0) && t.charAt(1) == Ft ? t.substr(2) : t);
										var o = Pt(e);
										if (e instanceof Array) o = e.map(Pt).join(' -> ');
										else if ('object' == typeof e) {
											var i = [];
											for (var a in e)
												if (e.hasOwnProperty(a)) {
													var s = e[a];
													i.push(a + ':' + ('string' == typeof s ? JSON.stringify(s) : Pt(s)));
												}
											o = '{' + i.join(', ') + '}';
										}
										return n + (r ? '(' + r + ')' : '') + '[' + o + ']: ' + t.replace(Vt, '\n  ');
									})('\n' + t.message, o, n, r)),
									(t[zt] = o),
									(t[Ht] = null),
									t);
								})(s, t, 'R3InjectorError', this.source);
							}
							throw s;
						} finally {
							Zt(o);
						}
					}),
					(t.prototype.toString = function() {
						var t = [];
						return (
							this.records.forEach(function(e, n) {
								return t.push(Pt(n));
							}),
							'R3Injector[' + t.join(', ') + ']'
						);
					}),
					(t.prototype.assertNotDestroyed = function() {
						if (this._destroyed) throw new Error('Injector has already been destroyed.');
					}),
					(t.prototype.processInjectorType = function(t, e, n) {
						var r = this;
						if (!(t = It(t))) return !1;
						var o = Ct(t),
							i = (null == o && t.ngModule) || void 0,
							a = void 0 === i ? t : i,
							s = -1 !== n.indexOf(a);
						if ((void 0 !== i && (o = Ct(i)), null == o)) return !1;
						if ((this.injectorDefTypes.add(a), this.records.set(a, ce(o.factory, ee)), null != o.imports && !s)) {
							var l;
							n.push(a);
							try {
								pe(o.imports, function(t) {
									r.processInjectorType(t, e, n) && (void 0 === l && (l = []), l.push(t));
								});
							} finally {
							}
							if (void 0 !== l)
								for (
									var u = function(t) {
											var e = l[t],
												n = e.ngModule,
												o = e.providers;
											pe(o, function(t) {
												return r.processProvider(t, n, o || re);
											});
										},
										c = 0;
									c < l.length;
									c++
								)
									u(c);
						}
						var p = o.providers;
						if (null != p && !s) {
							var f = t;
							pe(p, function(t) {
								return r.processProvider(t, f, p);
							});
						}
						return void 0 !== i && void 0 !== t.providers;
					}),
					(t.prototype.processProvider = function(t, e, n) {
						var r = de((t = It(t))) ? t : It(t && t.provide),
							o = (function(t, e, n) {
								var r = ue(t, e, n);
								return fe(t) ? ce(void 0, t.useValue) : ce(r, ee);
							})(t, e, n);
						if (de(t) || !0 !== t.multi) {
							var i = this.records.get(r);
							i && void 0 !== i.multi && $t();
						} else {
							var a = this.records.get(r);
							a
								? void 0 === a.multi && $t()
								: (((a = ce(void 0, ee, !0)).factory = function() {
										return Jt(a.multi);
								  }),
								  this.records.set(r, a)),
								(r = t),
								a.multi.push(t);
						}
						this.records.set(r, o);
					}),
					(t.prototype.hydrate = function(t, e) {
						var n;
						return (
							e.value === ne
								? (function(t) {
										throw new Error('Cannot instantiate cyclic dependency! ' + t);
								  })(Pt(t))
								: e.value === ee && ((e.value = ne), (e.value = e.factory())),
							'object' == typeof e.value && e.value && null !== (n = e.value) && 'object' == typeof n && 'function' == typeof n.ngOnDestroy && this.onDestroy.add(e.value),
							e.value
						);
					}),
					(t.prototype.injectableDefInScope = function(t) {
						return (
							!!t.providedIn && ('string' == typeof t.providedIn ? 'any' === t.providedIn || ('root' === t.providedIn && this.isRootInjector) : this.injectorDefTypes.has(t.providedIn))
						);
					}),
					t
				);
			})();
			function le(t) {
				var e = xt(t);
				if (null !== e) return e.factory;
				var n = Ct(t);
				if (null !== n) return n.factory;
				if (t instanceof Nt) throw new Error('Token ' + Pt(t) + ' is missing an ngInjectableDef definition.');
				if (t instanceof Function)
					return (function(t) {
						var e = t.length;
						if (e > 0) {
							var n = new Array(e).fill('?');
							throw new Error("Can't resolve all parameters for " + Pt(t) + ': (' + n.join(', ') + ').');
						}
						var r,
							o =
								(r = t) && r[kt]
									? (console.warn(
											'DEPRECATED: DI is instantiating a token "' +
												r.name +
												'" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "' +
												r.name +
												'" class.'
									  ),
									  r[kt])
									: null;
						return null !== o
							? function() {
									return o.factory(t);
							  }
							: function() {
									return new t();
							  };
					})(t);
				throw new Error('unreachable');
			}
			function ue(t, e, n) {
				var r,
					o = void 0;
				if (de(t)) return le(It(t));
				if (fe(t))
					o = function() {
						return It(t.useValue);
					};
				else if ((r = t) && r.useExisting)
					o = function() {
						return Qt(It(t.useExisting));
					};
				else if (t && t.useFactory)
					o = function() {
						return t.useFactory.apply(t, c(Jt(t.deps || [])));
					};
				else {
					var i = It(t && (t.useClass || t.provide));
					if (
						(i ||
							(function(t, e, n) {
								var r = '';
								throw (t &&
									e &&
									(r =
										' - only instances of Provider and Type are allowed, got: [' +
										e
											.map(function(t) {
												return t == n ? '?' + n + '?' : '...';
											})
											.join(', ') +
										']'),
								new Error("Invalid provider for the NgModule '" + Pt(t) + "'" + r));
							})(e, n, t),
						!t.deps)
					)
						return le(i);
					o = function() {
						return new (i.bind.apply(i, c([void 0], Jt(t.deps))))();
					};
				}
				return o;
			}
			function ce(t, e, n) {
				return void 0 === n && (n = !1), { factory: t, value: e, multi: n ? [] : void 0 };
			}
			function pe(t, e) {
				t.forEach(function(t) {
					return Array.isArray(t) ? pe(t, e) : e(t);
				});
			}
			function fe(t) {
				return null !== t && 'object' == typeof t && qt in t;
			}
			function de(t) {
				return 'function' == typeof t;
			}
			var he = function(t, e, n) {
					return ae({ name: n }, e, t, n);
				},
				ge = (function() {
					function t() {}
					return (
						(t.create = function(t, e) {
							return Array.isArray(t) ? he(t, e, '') : he(t.providers, t.parent, t.name || '');
						}),
						(t.THROW_IF_NOT_FOUND = Lt),
						(t.NULL = new Kt()),
						(t.ngInjectableDef = wt({
							token: t,
							providedIn: 'any',
							factory: function() {
								return Qt(Ut);
							}
						})),
						(t.__NG_ELEMENT_ID__ = -1),
						t
					);
				})(),
				me = 'ngDebugContext',
				be = 'ngOriginalError',
				ve = new Nt('AnalyzeForEntryComponents'),
				ye = (function(t) {
					return (t[(t.OnPush = 0)] = 'OnPush'), (t[(t.Default = 1)] = 'Default'), t;
				})({}),
				we = new Map(),
				_e = new Set();
			function xe(t) {
				return 'string' == typeof t ? t : t.text();
			}
			var Ce = (function(t) {
					return (t[(t.Emulated = 0)] = 'Emulated'), (t[(t.Native = 1)] = 'Native'), (t[(t.None = 2)] = 'None'), (t[(t.ShadowDom = 3)] = 'ShadowDom'), t;
				})({}),
				ke = {},
				Se = [],
				Pe = vt({ ngComponentDef: vt }),
				Ee = vt({ ngDirectiveDef: vt }),
				Oe = vt({ ngPipeDef: vt }),
				Ie = vt({ ngModuleDef: vt }),
				Te = vt({ ngLocaleIdDef: vt }),
				Me = vt({ __NG_ELEMENT_ID__: vt }),
				Ae = 0;
			function je(t) {
				var e = t.type,
					n = e.prototype,
					r = {},
					o = {
						type: e,
						providersResolver: null,
						consts: t.consts,
						vars: t.vars,
						factory: t.factory,
						template: t.template || null,
						ngContentSelectors: t.ngContentSelectors,
						hostBindings: t.hostBindings || null,
						contentQueries: t.contentQueries || null,
						declaredInputs: r,
						inputs: null,
						outputs: null,
						exportAs: t.exportAs || null,
						onChanges: null,
						onInit: n.ngOnInit || null,
						doCheck: n.ngDoCheck || null,
						afterContentInit: n.ngAfterContentInit || null,
						afterContentChecked: n.ngAfterContentChecked || null,
						afterViewInit: n.ngAfterViewInit || null,
						afterViewChecked: n.ngAfterViewChecked || null,
						onDestroy: n.ngOnDestroy || null,
						onPush: t.changeDetection === ye.OnPush,
						directiveDefs: null,
						pipeDefs: null,
						selectors: t.selectors,
						viewQuery: t.viewQuery || null,
						features: t.features || null,
						data: t.data || {},
						encapsulation: t.encapsulation || Ce.Emulated,
						id: 'c',
						styles: t.styles || Se,
						_: null,
						setInput: null,
						schemas: t.schemas || null,
						tView: null
					};
				return (
					(o._ =
						'' +
						{
							toString: function() {
								var n = t.directives,
									i = t.features,
									a = t.pipes;
								(o.id += Ae++),
									(o.inputs = Ue(t.inputs, r)),
									(o.outputs = Ue(t.outputs)),
									i &&
										i.forEach(function(t) {
											return t(o);
										}),
									(o.directiveDefs = n
										? function() {
												return ('function' == typeof n ? n() : n).map(Re);
										  }
										: null),
									(o.pipeDefs = a
										? function() {
												return ('function' == typeof a ? a() : a).map(De);
										  }
										: null),
									e.hasOwnProperty(kt) || (e[kt] = wt({ token: e, factory: t.factory }));
							}
						}),
					o
				);
			}
			function Re(t) {
				return (
					He(t) ||
					(function(t) {
						return t[Ee] || null;
					})(t)
				);
			}
			function De(t) {
				return (function(t) {
					return t[Oe] || null;
				})(t);
			}
			function Ne(t) {
				return {
					type: t.type,
					bootstrap: t.bootstrap || Se,
					declarations: t.declarations || Se,
					imports: t.imports || Se,
					exports: t.exports || Se,
					transitiveCompileScopes: null,
					schemas: t.schemas || null,
					id: t.id || null
				};
			}
			function Ue(t, e) {
				if (null == t) return ke;
				var n = {};
				for (var r in t)
					if (t.hasOwnProperty(r)) {
						var o = t[r],
							i = o;
						Array.isArray(o) && ((i = o[1]), (o = o[0])), (n[o] = r), e && (e[o] = i);
					}
				return n;
			}
			var Le = je;
			function He(t) {
				return t[Pe] || null;
			}
			function ze(t, e) {
				var n = t[Ie] || null;
				if (!n && !0 === e) throw new Error('Type ' + Pt(t) + " does not have 'ngModuleDef' property.");
				return n;
			}
			function Ve(t) {
				return 'string' == typeof t ? t : null == t ? '' : '' + t;
			}
			function Fe(t) {
				return 'function' == typeof t ? t.name || t.toString() : 'object' == typeof t && null != t && 'function' == typeof t.type ? t.type.name || t.type.toString() : Ve(t);
			}
			var Be = (function() {
					return (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(Dt);
				})(),
				qe = '\ufffd';
			function Ge(t) {
				return t instanceof Function ? t() : t;
			}
			var Ze = 0,
				We = 1,
				Qe = 2,
				Ye = 3,
				Je = 4,
				Ke = 5,
				Xe = 6,
				$e = 7,
				tn = 8,
				en = 9,
				nn = 10,
				rn = 11,
				on = 12,
				an = 13,
				sn = 14,
				ln = 15,
				un = 17,
				cn = 18,
				pn = 20,
				fn = 1,
				dn = 2,
				hn = 7,
				gn = 9,
				mn = '__ngContext__';
			function bn(t) {
				for (; Array.isArray(t); ) t = t[Ze];
				return t;
			}
			function vn(t) {
				return Array.isArray(t) && 'object' == typeof t[fn];
			}
			function yn(t) {
				return Array.isArray(t) && !0 === t[fn];
			}
			function wn(t) {
				return Array.isArray(t) && 'number' == typeof t[fn];
			}
			function _n(t, e) {
				return bn(e[t + pn]);
			}
			function xn(t, e) {
				return bn(e[t.index]);
			}
			function Cn(t, e) {
				return e[We].data[t + pn];
			}
			function kn(t, e) {
				var n = e[t];
				return vn(n) ? n : n[Ze];
			}
			function Sn(t) {
				return 0 != (4 & t.flags);
			}
			function Pn(t) {
				return 1 == (1 & t.flags);
			}
			function En(t) {
				return null !== t.template;
			}
			function On(t) {
				return 0 != (512 & t[Qe]);
			}
			function In(t) {
				var e = (function(t) {
					return t[mn];
				})(t);
				return e ? (Array.isArray(e) ? e : e.lView) : null;
			}
			function Tn(t) {
				return yn(t[Ye]);
			}
			function Mn(t) {
				t[cn] = 0;
			}
			function An(t, e, n, r, o, i) {
				var a = e.onChanges,
					s = e.onInit,
					l = e.doCheck;
				o >= 0 && (!n.preOrderHooks || o === n.preOrderHooks.length) && (a || s || l) && (n.preOrderHooks || (n.preOrderHooks = [])).push(r),
					i >= 0 && (!n.preOrderCheckHooks || i === n.preOrderCheckHooks.length) && (a || l) && (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(r),
					a && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, a), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, a)),
					s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s),
					l && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, l), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, l));
			}
			function jn(t, e) {
				if (t.firstTemplatePass)
					for (var n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
						var o = t.data[n];
						o.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, o.afterContentInit),
							o.afterContentChecked &&
								((t.contentHooks || (t.contentHooks = [])).push(n, o.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, o.afterContentChecked)),
							o.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, o.afterViewInit),
							o.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, o.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, o.afterViewChecked)),
							null != o.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, o.onDestroy);
					}
			}
			function Rn(t, e, n, r) {
				n || Dn(t, e.preOrderHooks, e.preOrderCheckHooks, n, 0, void 0 !== r ? r : null);
			}
			function Dn(t, e, n, r, o, i) {
				if (!r) {
					var a = (3 & t[Qe]) === o ? e : n;
					a &&
						(function(t, e, n, r) {
							for (var o = null != r ? r : -1, i = 0, a = void 0 !== r ? 65535 & t[cn] : 0; a < e.length; a++)
								if ('number' == typeof e[a + 1]) {
									if (((i = e[a]), null != r && i >= r)) break;
								} else e[a] < 0 && (t[cn] += 65536), (i < o || -1 == o) && (Nn(t, n, e, a), (t[cn] = (4294901760 & t[cn]) + a + 2)), a++;
						})(t, a, o, i),
						null == i && (3 & t[Qe]) === o && 3 !== o && ((t[Qe] &= 1023), (t[Qe] += 1));
				}
			}
			function Nn(t, e, n, r) {
				var o = n[r] < 0,
					i = n[r + 1],
					a = t[o ? -n[r] : n[r]];
				o ? t[Qe] >> 10 < t[cn] >> 16 && (3 & t[Qe]) === e && ((t[Qe] += 1024), i.call(a)) : i.call(a);
			}
			var Un,
				Ln = null;
			function Hn(t) {
				Ln = t;
			}
			var zn,
				Vn = null;
			function Fn(t) {
				Vn = t;
			}
			function Bn() {
				return Zn;
			}
			var qn,
				Gn,
				Zn,
				Wn = 1,
				Qn = Wn,
				Yn = 0,
				Jn = 0;
			function Kn(t) {
				void 0 === t && (t = null), _r !== t && (Cr(null == t ? -1 : t), (Qn = null == t ? 0 : Wn), (Yn = 0), (Jn = 0));
			}
			function Xn() {
				return Qn;
			}
			function $n() {
				(Qn += 1 + Jn), (Yn = 0), (Jn = 0);
			}
			function tr(t) {
				(Yn += t), (Jn = Math.max(Jn, Yn));
			}
			function er() {
				return Yn;
			}
			function nr(t) {
				ur = t;
			}
			function rr() {
				return qn;
			}
			function or(t, e) {
				(qn = t), (Gn = e);
			}
			function ir(t, e) {
				(qn = t), (Zn = e);
			}
			function ar() {
				return Gn;
			}
			function sr() {
				Gn = !1;
			}
			function lr(t) {
				return void 0 === t && (t = Zn), 4 == (4 & t[Qe]);
			}
			var ur = null,
				cr = !1;
			function pr() {
				return cr;
			}
			function fr(t) {
				cr = t;
			}
			var dr = -1;
			function hr() {
				return dr;
			}
			function gr(t) {
				dr = t;
			}
			var mr = 0;
			function br() {
				return mr;
			}
			function vr(t) {
				mr = t;
			}
			function yr(t, e) {
				var n = Zn;
				return t && (dr = t[We].bindingStartIndex), (qn = e), (Gn = !0), (Zn = ur = t), n;
			}
			function wr(t, e) {
				var n = Zn[We];
				if (lr(Zn)) Zn[Qe] &= -5;
				else
					try {
						Mn(Zn), e && Dn(Zn, n.viewHooks, n.viewCheckHooks, cr, 2, void 0);
					} finally {
						(Zn[Qe] &= -73), (Zn[$e] = n.bindingStartIndex);
					}
				Hn(null), yr(t, null);
			}
			var _r = -1;
			function xr() {
				return _r;
			}
			function Cr(t) {
				(_r = t), Hn(null);
			}
			var kr = null,
				Sr = '__SANITIZER_TRUSTED_BRAND__',
				Pr = !0,
				Er = !1;
			function Or() {
				return (Er = !0), Pr;
			}
			var Ir = (function() {
					function t(t) {
						if (
							((this.defaultDoc = t),
							(this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
							(this.inertBodyElement = this.inertDocument.body),
							null == this.inertBodyElement)
						) {
							var e = this.inertDocument.createElement('html');
							this.inertDocument.appendChild(e), (this.inertBodyElement = this.inertDocument.createElement('body')), e.appendChild(this.inertBodyElement);
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
											} catch (t) {
												return !1;
											}
										})()
											? this.getInertBodyElement_DOMParser
											: this.getInertBodyElement_InertDocument))
								: (this.getInertBodyElement = this.getInertBodyElement_XHR);
					}
					return (
						(t.prototype.getInertBodyElement_XHR = function(t) {
							t = '<body><remove></remove>' + t + '</body>';
							try {
								t = encodeURI(t);
							} catch (r) {
								return null;
							}
							var e = new XMLHttpRequest();
							(e.responseType = 'document'), e.open('GET', 'data:text/html;charset=utf-8,' + t, !1), e.send(void 0);
							var n = e.response.body;
							return n.removeChild(n.firstChild), n;
						}),
						(t.prototype.getInertBodyElement_DOMParser = function(t) {
							t = '<body><remove></remove>' + t + '</body>';
							try {
								var e = new window.DOMParser().parseFromString(t, 'text/html').body;
								return e.removeChild(e.firstChild), e;
							} catch (n) {
								return null;
							}
						}),
						(t.prototype.getInertBodyElement_InertDocument = function(t) {
							var e = this.inertDocument.createElement('template');
							return 'content' in e
								? ((e.innerHTML = t), e)
								: ((this.inertBodyElement.innerHTML = t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement);
						}),
						(t.prototype.stripCustomNsAttrs = function(t) {
							for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
								var r = e.item(n).name;
								('xmlns:ns1' !== r && 0 !== r.indexOf('ns1:')) || t.removeAttribute(r);
							}
							for (var o = t.firstChild; o; ) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), (o = o.nextSibling);
						}),
						t
					);
				})(),
				Tr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				Mr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function Ar(t) {
				return (t = String(t)).match(Tr) || t.match(Mr) ? t : (Or() && console.warn('WARNING: sanitizing unsafe URL value ' + t + ' (see http://g.co/ng/security#xss)'), 'unsafe:' + t);
			}
			function jr(t) {
				var e,
					n,
					r = {};
				try {
					for (var o = l(t.split(',')), i = o.next(); !i.done; i = o.next()) r[i.value] = !0;
				} catch (a) {
					e = { error: a };
				} finally {
					try {
						i && !i.done && (n = o.return) && n.call(o);
					} finally {
						if (e) throw e.error;
					}
				}
				return r;
			}
			function Rr() {
				for (var t, e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
				var o = {};
				try {
					for (var i = l(n), a = i.next(); !a.done; a = i.next()) {
						var s = a.value;
						for (var u in s) s.hasOwnProperty(u) && (o[u] = !0);
					}
				} catch (c) {
					t = { error: c };
				} finally {
					try {
						a && !a.done && (e = i.return) && e.call(i);
					} finally {
						if (t) throw t.error;
					}
				}
				return o;
			}
			var Dr,
				Nr = jr('area,br,col,hr,img,wbr'),
				Ur = jr('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				Lr = jr('rp,rt'),
				Hr = Rr(Lr, Ur),
				zr = Rr(
					Nr,
					Rr(
						Ur,
						jr(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					Rr(
						Lr,
						jr(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					Hr
				),
				Vr = jr('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				Fr = jr('srcset'),
				Br = Rr(
					Vr,
					Fr,
					jr(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					),
					jr(
						'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
					)
				),
				qr = jr('script,style,template'),
				Gr = (function() {
					function t() {
						(this.sanitizedSomething = !1), (this.buf = []);
					}
					return (
						(t.prototype.sanitizeChildren = function(t) {
							for (var e = t.firstChild, n = !0; e; )
								if (
									(e.nodeType === Node.ELEMENT_NODE ? (n = this.startElement(e)) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : (this.sanitizedSomething = !0),
									n && e.firstChild)
								)
									e = e.firstChild;
								else
									for (; e; ) {
										e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
										var r = this.checkClobberedElement(e, e.nextSibling);
										if (r) {
											e = r;
											break;
										}
										e = this.checkClobberedElement(e, e.parentNode);
									}
							return this.buf.join('');
						}),
						(t.prototype.startElement = function(t) {
							var e,
								n = t.nodeName.toLowerCase();
							if (!zr.hasOwnProperty(n)) return (this.sanitizedSomething = !0), !qr.hasOwnProperty(n);
							this.buf.push('<'), this.buf.push(n);
							for (var r = t.attributes, o = 0; o < r.length; o++) {
								var i = r.item(o),
									a = i.name,
									s = a.toLowerCase();
								if (Br.hasOwnProperty(s)) {
									var l = i.value;
									Vr[s] && (l = Ar(l)),
										Fr[s] &&
											((e = l),
											(l = (e = String(e))
												.split(',')
												.map(function(t) {
													return Ar(t.trim());
												})
												.join(', '))),
										this.buf.push(' ', a, '="', Qr(l), '"');
								} else this.sanitizedSomething = !0;
							}
							return this.buf.push('>'), !0;
						}),
						(t.prototype.endElement = function(t) {
							var e = t.nodeName.toLowerCase();
							zr.hasOwnProperty(e) && !Nr.hasOwnProperty(e) && (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
						}),
						(t.prototype.chars = function(t) {
							this.buf.push(Qr(t));
						}),
						(t.prototype.checkClobberedElement = function(t, e) {
							if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
								throw new Error('Failed to sanitize html because the element is clobbered: ' + t.outerHTML);
							return e;
						}),
						t
					);
				})(),
				Zr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				Wr = /([^\#-~ |!])/g;
			function Qr(t) {
				return t
					.replace(/&/g, '&amp;')
					.replace(Zr, function(t) {
						return '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(Wr, function(t) {
						return '&#' + t.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			function Yr(t, e) {
				var n = null;
				try {
					Dr = Dr || new Ir(t);
					var r = e ? String(e) : '';
					n = Dr.getInertBodyElement(r);
					var o = 5,
						i = r;
					do {
						if (0 === o) throw new Error('Failed to sanitize html because the input is unstable');
						o--, (r = i), (i = n.innerHTML), (n = Dr.getInertBodyElement(r));
					} while (r !== i);
					var a = new Gr(),
						s = a.sanitizeChildren(Jr(n) || n);
					return Or() && a.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), s;
				} finally {
					if (n) for (var l = Jr(n) || n; l.firstChild; ) l.removeChild(l.firstChild);
				}
			}
			function Jr(t) {
				return 'content' in t &&
					(function(t) {
						return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
					})(t)
					? t.content
					: null;
			}
			var Kr = (function(t) {
					return (
						(t[(t.NONE = 0)] = 'NONE'),
						(t[(t.HTML = 1)] = 'HTML'),
						(t[(t.STYLE = 2)] = 'STYLE'),
						(t[(t.SCRIPT = 3)] = 'SCRIPT'),
						(t[(t.URL = 4)] = 'URL'),
						(t[(t.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
						t
					);
				})({}),
				Xr = (function() {
					return function() {};
				})(),
				$r = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				to = /^url\(([^)]+)\)$/;
			function eo(t) {
				var e,
					n,
					r = (e = Bn()) && e[an];
				return r ? r.sanitize(Kr.HTML, t) || '' : ('Html', (n = t) instanceof String && 'Html' === n[Sr] ? t.toString() : Yr(document, Ve(t)));
			}
			var no = 8,
				ro = 8,
				oo = 9,
				io = -1,
				ao = (function() {
					return function(t, e, n) {
						(this.factory = t), (this.resolving = !1), (this.canSeeViewProviders = e), (this.injectImpl = n);
					};
				})(),
				so = (function(t) {
					return (t[(t.Important = 1)] = 'Important'), (t[(t.DashCase = 2)] = 'DashCase'), t;
				})({});
			function lo(t) {
				return !!t.listen;
			}
			var uo = {
				createRenderer: function(t, e) {
					return document;
				}
			};
			function co(t, e) {
				t[mn] = e;
			}
			var po = (function() {
					function t() {
						this._players = [];
					}
					return (
						(t.prototype.flushPlayers = function() {
							for (var t = 0; t < this._players.length; t++) {
								var e = this._players[t];
								e.parent || 0 !== e.state || e.play();
							}
							this._players.length = 0;
						}),
						(t.prototype.queuePlayer = function(t) {
							this._players.push(t);
						}),
						t
					);
				})(),
				fo = 0,
				ho = '@';
			function go(t, e, n, r) {
				var o = [t || null, 0, [], n || [null, null], r || [null, null], [0, 0], [0], [0], null, null];
				return mo(o, fo), o;
			}
			function mo(t, e, n, r) {
				void 0 === n && (n = -1);
				for (var o = t[2], i = 2 * e, a = i + 2, s = o.length; s < a; s += 2) o.push(-1, null);
				var l = i + 0;
				n >= 0 && -1 === o[l] && ((o[l] = n), (o[i + 1] = r || null));
			}
			function bo(t, e) {
				for (var n = t, r = e[n], o = e; Array.isArray(r); ) (o = r), (r = r[Ze]);
				if (wn(o)) return o;
				var i = Cn(t - pn, e).stylingTemplate;
				return (
					o !== e && (n = Ze),
					(o[n] = i
						? (function(t, e) {
								for (var n = e.slice(), r = 0; r < 10; r++) {
									var o = e[r];
									Array.isArray(o) && (n[r] = o.slice());
								}
								return (n[0] = t), (n[1] |= 16), n;
						  })(r, i)
						: go(r))
				);
			}
			function vo(t) {
				return t[0] === ho;
			}
			function yo(t) {
				return 0 != (8 & t.flags);
			}
			function wo(t, e, n, r, o, i) {
				return (
					(i = i || n),
					o ? (t[o] = r) : t.push(r),
					!!r &&
						(r.addEventListener(200, function() {
							var e = t.indexOf(r);
							e && (e < t[0] ? (t[e] = null) : t.splice(e, 1)), r.destroy();
						}),
						(e.playerHandler || (e.playerHandler = new po())).queuePlayer(r, i),
						!0)
				);
			}
			function _o(t) {
				return 3 === t || 4 === t || 6 === t;
			}
			function xo(t) {
				return t !== io;
			}
			function Co(t) {
				return 32767 & t;
			}
			function ko(t) {
				return t >> 16;
			}
			function So(t, e) {
				for (var n = ko(t), r = e; n > 0; ) (r = r[un]), n--;
				return r;
			}
			function Po(t) {
				var e = t[Ye];
				return yn(e) ? e[Ye] : e;
			}
			function Eo(t) {
				for (var e = t[Xe]; null !== e && 2 === e.type; ) e = (t = t[un])[Xe];
				return t;
			}
			function Oo(t) {
				return (function(t) {
					for (var e = vn(t) ? t : In(t); e && !(512 & e[Qe]); ) e = Po(e);
					return e;
				})(t)[en];
			}
			var Io = !0;
			function To(t) {
				var e = Io;
				return (Io = t), e;
			}
			var Mo = 255,
				Ao = 0;
			function jo(t, e) {
				var n = Do(t, e);
				if (-1 !== n) return n;
				var r = e[We];
				r.firstTemplatePass && ((t.injectorIndex = e.length), Ro(r.data, t), Ro(e, null), Ro(r.blueprint, null));
				var o = No(t, e),
					i = Co(o),
					a = So(o, e),
					s = t.injectorIndex;
				if (xo(o)) for (var l = a[We].data, u = 0; u < 8; u++) e[s + u] = a[i + u] | l[i + u];
				return (e[s + ro] = o), s;
			}
			function Ro(t, e) {
				t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
			}
			function Do(t, e) {
				return -1 === t.injectorIndex || (t.parent && t.parent.injectorIndex === t.injectorIndex) || null == e[t.injectorIndex + ro] ? -1 : t.injectorIndex;
			}
			function No(t, e) {
				if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
				for (var n = e[Xe], r = 1; n && -1 === n.injectorIndex; ) (n = (e = e[un]) ? e[Xe] : null), r++;
				return n ? n.injectorIndex | (r << 16) : -1;
			}
			function Uo(t, e, n) {
				!(function(t, e, n) {
					var r = 'string' != typeof n ? n[Me] : n.charCodeAt(0) || 0;
					null == r && (r = n[Me] = Ao++);
					var o = r & Mo,
						i = 1 << o,
						a = 64 & o,
						s = 32 & o,
						l = e.data;
					128 & o ? (a ? (s ? (l[t + 7] |= i) : (l[t + 6] |= i)) : s ? (l[t + 5] |= i) : (l[t + 4] |= i)) : a ? (s ? (l[t + 3] |= i) : (l[t + 2] |= i)) : s ? (l[t + 1] |= i) : (l[t] |= i);
				})(t, e[We], n);
			}
			function Lo(t, e, n, r, o) {
				if ((void 0 === r && (r = bt.Default), t)) {
					var i = (function(t) {
						if ('string' == typeof t) return t.charCodeAt(0) || 0;
						var e = t[Me];
						return 'number' == typeof e && e > 0 ? e & Mo : e;
					})(n);
					if ('function' == typeof i) {
						var a = rr(),
							s = Bn();
						ir(t, e);
						try {
							var l = i();
							if (null != l || r & bt.Optional) return l;
							throw new Error('No provider for ' + Fe(n) + '!');
						} finally {
							ir(a, s);
						}
					} else if ('number' == typeof i) {
						if (-1 === i) return new Go(t, e);
						var u = null,
							c = Do(t, e),
							p = io,
							f = r & bt.Host ? Eo(e)[Xe] : null;
						for ((-1 === c || r & bt.SkipSelf) && ((p = -1 === c ? No(t, e) : e[c + ro]), qo(r, !1) ? ((u = e[We]), (c = Co(p)), (e = So(p, e))) : (c = -1)); -1 !== c; ) {
							p = e[c + ro];
							var d = e[We];
							if (Bo(i, c, d.data)) {
								var h = zo(c, e, n, u, r, f);
								if (h !== Ho) return h;
							}
							qo(r, e[We].data[c + no] === f) && Bo(i, c, e) ? ((u = d), (c = Co(p)), (e = So(p, e))) : (c = -1);
						}
					}
				}
				if ((r & bt.Optional && void 0 === o && (o = null), 0 == (r & (bt.Self | bt.Host)))) {
					var g = e[nn],
						m = Wt(void 0);
					try {
						return g ? g.get(n, o, r & bt.Optional) : Yt(n, o, r & bt.Optional);
					} finally {
						Wt(m);
					}
				}
				if (r & bt.Optional) return o;
				throw new Error('NodeInjector: NOT_FOUND [' + Fe(n) + ']');
			}
			var Ho = {};
			function zo(t, e, n, r, o, i) {
				var a = e[We],
					s = a.data[t + no],
					l = Vo(s, a, n, null == r ? Pn(s) && Io : r != a && 3 === s.type, o & bt.Host && i === s);
				return null !== l ? Fo(a.data, e, l, s) : Ho;
			}
			function Vo(t, e, n, r, o) {
				for (var i = t.providerIndexes, a = e.data, s = 65535 & i, l = t.directiveStart, u = i >> 16, c = o ? s + u : t.directiveEnd, p = r ? s : s + u; p < c; p++) {
					var f = a[p];
					if ((p < l && n === f) || (p >= l && f.type === n)) return p;
				}
				if (o) {
					var d = a[l];
					if (d && En(d) && d.type === n) return l;
				}
				return null;
			}
			function Fo(t, e, n, r) {
				var o,
					i = e[n];
				if (null !== (o = i) && 'object' == typeof o && Object.getPrototypeOf(o) == ao.prototype) {
					var a = i;
					if (a.resolving) throw new Error('Circular dep for ' + Fe(t[n]));
					var s = To(a.canSeeViewProviders);
					a.resolving = !0;
					var l = void 0;
					a.injectImpl && (l = Wt(a.injectImpl));
					var u = rr(),
						c = Bn();
					ir(r, e);
					try {
						i = e[n] = a.factory(null, t, e, r);
					} finally {
						a.injectImpl && Wt(l), To(s), (a.resolving = !1), ir(u, c);
					}
				}
				return i;
			}
			function Bo(t, e, n) {
				var r = 64 & t,
					o = 32 & t;
				return !!((128 & t ? (r ? (o ? n[e + 7] : n[e + 6]) : o ? n[e + 5] : n[e + 4]) : r ? (o ? n[e + 3] : n[e + 2]) : o ? n[e + 1] : n[e]) & (1 << t));
			}
			function qo(t, e) {
				return !(t & bt.Self || (t & bt.Host && e));
			}
			var Go = (function() {
				function t(t, e) {
					(this._tNode = t), (this._lView = e);
				}
				return (
					(t.prototype.get = function(t, e) {
						return Lo(this._tNode, this._lView, t, void 0, e);
					}),
					t
				);
			})();
			function Zo(t) {
				return t[me];
			}
			function Wo(t) {
				return t[be];
			}
			function Qo(t) {
				for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
				t.error.apply(t, c(e));
			}
			var Yo = (function() {
					function t() {
						this._console = console;
					}
					return (
						(t.prototype.handleError = function(t) {
							var e = this._findOriginalError(t),
								n = this._findContext(t),
								r = (function(t) {
									return t.ngErrorLogger || Qo;
								})(t);
							r(this._console, 'ERROR', t), e && r(this._console, 'ORIGINAL ERROR', e), n && r(this._console, 'ERROR CONTEXT', n);
						}),
						(t.prototype._findContext = function(t) {
							return t ? (Zo(t) ? Zo(t) : this._findContext(Wo(t))) : null;
						}),
						(t.prototype._findOriginalError = function(t) {
							for (var e = Wo(t); e && Wo(e); ) e = Wo(e);
							return e;
						}),
						t
					);
				})(),
				Jo = {},
				Ko = (function() {
					return function(t, e) {
						(this.fn = t), (this.value = e);
					};
				})();
			function Xo(t, e, n, r) {
				for (var o = 2; o < t.length; o += 3) if (t[o + 0] === e) return void (Ni(t[o + 1], n, t[o + 2], r) && Vi(o, t, e, n, r));
				Vi(null, t, e, n, r);
			}
			function $o(t, e, n, r) {
				for (var o = e[4], i = r || 2; i < o.length; ) o[i + 1] && oi(t, o[i + 0], !0, n, null), (i += 3);
				return i;
			}
			function ti(t, e, n, r) {
				for (var o = e[3], i = r || 2; i < o.length; ) {
					var a = o[i + 1];
					a && ri(t, o[i + 0], a, n, null), (i += 3);
				}
				return i;
			}
			function ei(t, e, n, r) {
				for (var o = n; o < r; o += 4) if (Ci(t, o) === e) return o;
				return -1;
			}
			function ni(t, e, n) {
				void 0 === n && (n = 0),
					(function(t, e, n, r) {
						if (
							(void 0 === r && (r = 0),
							!(function(t, e, n, r) {
								return !t[6][1 + 4 * n + 0] && (r === Jo || Li(t, !0, n) === r);
							})(t, 0, r, e))
						) {
							var o,
								i,
								a = (e = e === Jo ? Li(t, !0, r) : e) instanceof Ko ? new Ai(e, t[0], 1) : null,
								s = a ? e.value : e,
								l = a ? 1 : 0,
								u = !1;
							(function(t, e, n) {
								var r = t[9];
								if (a) {
									if (!r) return !0;
								} else if (!r) return !1;
								return r[1] !== a;
							})(t) &&
								((function(t, e, n) {
									var r = t[9] || (t[9] = [5, null, null, null, null]);
									n > 0 ? (r[n] = e) : (r.splice((n = r[0]), 0, e, null), (r[0] += 2));
								})(t, a, 1),
								(u = !0));
							var c = !1;
							'string' == typeof s ? ((i = s.split(/\s+/)), (c = !0)) : (i = s ? Object.keys(s) : Se),
								(o = di(t)),
								(function(t, e, n, r, i, a, s, l, u) {
									for (
										var c = !1, p = 1 + 4 * e, f = t[6], d = f[p + 1], h = f[p + 3], g = 1 === f[p + 0] || !(f[p + 2] || !l), m = 0, b = 0, v = !0 === s, y = o, w = a.length;
										y < d;

									) {
										var _ = Ci(t, y);
										if (w)
											for (var x = 0; x < a.length; x++) {
												if ((O = (E = a[x]) || null) && _ === O) {
													var C = xi(t, y),
														k = ji(t, y),
														S = !!v || s[O],
														P = _i(t, y);
													Mi(P, C, S) && Ni(C, S, k, e) && (mi(t, y, S), bi(t, y, n, e), Ti(t, P, S) && (ii(t, y, !0), (c = !0))), (a[x] = null), w--;
													break;
												}
											}
										y += 4;
									}
									if (w) {
										t: for (x = 0; x < a.length; x++) {
											var E;
											if ((E = a[x])) {
												S = !!v || s[E];
												for (var O = E, I = y >= d, T = y; T < i; T += 4) {
													if (Ci(t, T) === O) {
														var M = ji(t, T),
															A = vi(t, T),
															j = xi(t, T),
															R = _i(t, T);
														Ni(j, S, M, e) &&
															(I && (Pi(t, y, T), m++),
															Mi(R, j, S) &&
																((null === S || (void 0 === S && S !== j)) && (g = !0), mi(t, y, S), (null !== j || Ti(t, R, S)) && (ii(t, y, !0), (c = !0))),
															(M === e && n === A) || bi(t, y, n, e)),
															(y += 4);
														continue t;
													}
												}
												if (null != S) (g = !0), m++, Ei(t, I ? y : d + 4 * b, !0, O, 1 | Ii(t, O, !0, null), S, e, n), b++, (i += 4), (y += 4), (c = !0);
											}
										}
									}
									for (; y < i; ) {
										g = !0;
										var D = xi(t, y),
											N = _i(t, y);
										ji(t, y), null != D && (g = !0), Mi(N, D, null) && (mi(t, y, null), Ti(t, N, D) && (ii(t, y, !0), (c = !0)), bi(t, y, n, e)), (y += 4);
									}
									(function(t, e, n, r, o, i, a, s) {
										var l = t[6],
											u = 1 + 4 * e;
										if (s) for (var c = o + 4 * a, p = u + 4; p < l.length; p += 4) (l[p + 1] = c), (l[p + 0] = 1);
										(l[u + 0] = 0), (l[u + 1] = o), (l[u + 2] = r), (l[u + 3] = a);
										for (var f = a, p = 1; p < u; p += 4) f += l[p + 3];
										l[0] = f;
									})(t, e, 0, l, d, 0, m, (g = g || h !== m)),
										c && ki(t, !0);
								})(t, r, l, 0, t.length, i, c || s || ke, e),
								u && Si(t, !0);
						}
					})(t, e, 0, n);
			}
			function ri(t, e, n, r, o, i, a) {
				(n = o && n ? o(e, n, 3) : n),
					i || a
						? (i && i.setValue(e, n), a && a.setValue(e, n))
						: n
						? ((n = n.toString()), lo(r) ? r.setStyle(t, e, n, so.DashCase) : t.style.setProperty(e, n))
						: lo(r)
						? r.removeStyle(t, e, so.DashCase)
						: t.style.removeProperty(e);
			}
			function oi(t, e, n, r, o, i) {
				o || i ? (o && o.setValue(e, n), i && i.setValue(e, n)) : '' !== e && (n ? (lo(r) ? r.addClass(t, e) : t.classList.add(e)) : lo(r) ? r.removeClass(t, e) : t.classList.remove(e));
			}
			function ii(t, e, n) {
				var r = e >= 10 ? e + 0 : e;
				n ? (t[r] |= 1) : (t[r] &= -2);
			}
			function ai(t, e) {
				return 1 == (1 & t[e >= 10 ? e + 0 : e]);
			}
			function si(t, e) {
				return 2 == (2 & t[e >= 10 ? e + 0 : e]);
			}
			function li(t, e) {
				return 4 == (4 & t[e >= 10 ? e + 0 : e]);
			}
			function ui(t, e, n) {
				return (31 & t) | (e << 5) | (n << 19);
			}
			function ci(t, e) {
				var n = pi(e);
				return (2 & e ? t[4] : t[3])[n];
			}
			function pi(t) {
				return (t >> 5) & 16383;
			}
			function fi(t) {
				var e = (t >> 19) & 16383;
				return e >= 10 ? e : -1;
			}
			function di(t) {
				return t[6][2];
			}
			function hi(t) {
				return t[7][2];
			}
			function gi(t, e, n) {
				t[e + 1] = n;
			}
			function mi(t, e, n) {
				t[e + 2] = n;
			}
			function bi(t, e, n, r) {
				var o = (function(t, e) {
					return (n << 16) | t;
				})(r);
				t[e + 3] = o;
			}
			function vi(t, e) {
				return (t[e + 3] >> 16) & 65535;
			}
			function yi(t, e) {
				var n = vi(t, e);
				if (n) {
					var r = t[9];
					if (r) return r[n];
				}
				return null;
			}
			function wi(t, e, n) {
				t[1 === e ? e : e + 0] = n;
			}
			function _i(t, e) {
				return t[1 === e ? e : e + 0];
			}
			function xi(t, e) {
				return t[e + 2];
			}
			function Ci(t, e) {
				return t[e + 1];
			}
			function ki(t, e) {
				ii(t, 1, e);
			}
			function Si(t, e) {
				e ? (t[1] |= 8) : (t[1] &= -9);
			}
			function Pi(t, e, n) {
				if (e !== n) {
					var r = xi(t, e),
						o = Ci(t, e),
						i = _i(t, e),
						a = vi(t, e),
						s = ji(t, e),
						l = i,
						u = _i(t, n),
						c = fi(l);
					c >= 0 && wi(t, c, ui((p = _i(t, c)), pi(p), n));
					var p,
						f = fi(u);
					f >= 0 && wi(t, f, ui((p = _i(t, f)), pi(p), e)),
						mi(t, e, xi(t, n)),
						gi(t, e, Ci(t, n)),
						wi(t, e, _i(t, n)),
						bi(t, e, vi(t, n), ji(t, n)),
						mi(t, n, r),
						gi(t, n, o),
						wi(t, n, i),
						bi(t, n, a, s);
				}
			}
			function Ei(t, e, n, r, o, i, a, s) {
				var l = e < t.length;
				t.splice(e, 0, 1 | o | (n ? 2 : 0), r, i, 0),
					bi(t, e, s, a),
					l &&
						(function(t, n) {
							for (var r = e + 4; r < t.length; r += 4) {
								var o = fi(_i(t, r));
								if (o > 0) {
									var i = pi(_i(t, o));
									wi(t, o, ui((ai(t, o) ? 1 : 0) | (si(t, o) ? 2 : 0) | (li(t, o) ? 4 : 0), i, r));
								}
							}
						})(t);
			}
			function Oi(t, e) {
				return null !== t;
			}
			function Ii(t, e, n, r) {
				var o,
					i = r && r(e, null, 1) ? 4 : 0;
				return n ? ((i |= 2), (o = Ri(t[4], e))) : (o = Ri(t[3], e)), ui(i, (o = o > 0 ? o + 1 : 0), 0);
			}
			function Ti(t, e, n) {
				var r = ci(t, e);
				return !r || Mi(e, r, n);
			}
			function Mi(t, e, n) {
				return !(2 & t) && e && n && 4 & t ? e.toString() !== n.toString() : e !== n;
			}
			var Ai = (function() {
				function t(t, e, n) {
					(this._element = e), (this._type = n), (this._values = {}), (this._dirty = !1), (this._factory = t);
				}
				return (
					(t.prototype.setValue = function(t, e) {
						this._values[t] !== e && ((this._values[t] = e), (this._dirty = !0));
					}),
					(t.prototype.buildPlayer = function(t, e) {
						if (this._dirty) {
							var n = this._factory.fn(this._element, this._type, this._values, e, t || null);
							return (this._values = {}), (this._dirty = !1), n;
						}
					}),
					t
				);
			})();
			function ji(t, e) {
				return 65535 & t[e + 3];
			}
			function Ri(t, e) {
				for (var n = 2; n < t.length; n += 3) if (t[n] === e) return n;
				return -1;
			}
			function Di(t, e) {
				var n = t[2];
				return n[2 * e + 1] || n[1] || null;
			}
			function Ni(t, e, n, r) {
				return null == t || (null != e ? r <= n : n === r);
			}
			function Ui(t) {
				var e = t[4],
					n = e[1];
				if (null === n) {
					n = '';
					for (var r = 2; r < e.length; r += 3) e[r + 1] && (n += (n.length ? ' ' : '') + e[r]);
					e[1] = n;
				}
				return n;
			}
			function Li(t, e, n) {
				return t[e ? 6 : 7][1 + 4 * n + 2] || null;
			}
			function Hi(t) {
				return t.replace(/[a-z][A-Z]/g, function(t) {
					return t.charAt(0) + '-' + t.charAt(1).toLowerCase();
				});
			}
			function zi(t, e, n, r, o) {
				void 0 === o && (o = 0);
				var i = t[n ? 6 : 7];
				if (e > 0) for (var a = 1 + 4 * e; i.length < a; ) i.push(0, r, null, 0);
				i.push(0, r, null, o);
			}
			function Vi(t, e, n, r, o) {
				return null === t && ((t = e.length), e.push(null, null, null), (e[t + 0] = n)), (e[t + 1] = r), (e[t + 2] = o), t;
			}
			var Fi = 'ng-template';
			function Bi(t, e) {
				var n = t.length,
					r = t.indexOf(e),
					o = r + e.length;
				return !(-1 === r || (r > 0 && ' ' !== t[r - 1]) || (o < n && ' ' !== t[o]));
			}
			function qi(t, e, n) {
				return e === (0 !== t.type || n ? t.tagName : Fi);
			}
			function Gi(t, e, n) {
				for (
					var r = 4,
						o = t.attrs || [],
						i = (function(t) {
							for (var e = 0; e < t.length; e++) if (_o(t[e])) return e;
							return t.length;
						})(o),
						a = !1,
						s = 0;
					s < e.length;
					s++
				) {
					var l = e[s];
					if ('number' != typeof l) {
						if (!a)
							if (4 & r) {
								if (((r = 2 | (1 & r)), ('' !== l && !qi(t, l, n)) || ('' === l && 1 === e.length))) {
									if (Zi(r)) return !1;
									a = !0;
								}
							} else {
								var u = 8 & r ? l : e[++s];
								if (8 & r && t.stylingTemplate) {
									if (!Bi(Wi(t), u)) {
										if (Zi(r)) return !1;
										a = !0;
									}
									continue;
								}
								var c = Qi(8 & r ? 'class' : l, o, 0 == t.type && t.tagName !== Fi, n);
								if (-1 === c) {
									if (Zi(r)) return !1;
									a = !0;
									continue;
								}
								if ('' !== u) {
									var p;
									p = c > i ? '' : o[c + 1];
									var f = 8 & r ? p : null;
									if ((f && !Bi(f, u)) || (2 & r && u !== p)) {
										if (Zi(r)) return !1;
										a = !0;
									}
								}
							}
					} else {
						if (!a && !Zi(r) && !Zi(l)) return !1;
						if (a && Zi(l)) continue;
						(a = !1), (r = l | (1 & r));
					}
				}
				return Zi(r) || a;
			}
			function Zi(t) {
				return 0 == (1 & t);
			}
			function Wi(t) {
				return t.stylingTemplate ? Ui(t.stylingTemplate) : '';
			}
			function Qi(t, e, n, r) {
				if (null === e) return -1;
				var o = 0;
				if (r || !n) {
					for (var i = !1; o < e.length; ) {
						var a = e[o];
						if (a === t) return o;
						if (3 === a || 6 === a) i = !0;
						else {
							if (1 === a) {
								for (var s = e[++o]; 'string' == typeof s; ) s = e[++o];
								continue;
							}
							if (4 === a) break;
							if (0 === a) {
								o += 4;
								continue;
							}
						}
						o += i ? 1 : 2;
					}
					return -1;
				}
				return (function(t, e) {
					var n = t.indexOf(4);
					if (n > -1)
						for (n++; n < t.length; ) {
							if (t[n] === e) return n;
							n++;
						}
					return -1;
				})(e, t);
			}
			function Yi(t, e, n) {
				void 0 === n && (n = !1);
				for (var r = 0; r < e.length; r++) if (Gi(t, e[r], n)) return !0;
				return !1;
			}
			function Ji(t, e) {
				t: for (var n = 0; n < e.length; n++) {
					var r = e[n];
					if (t.length === r.length) {
						for (var o = 0; o < t.length; o++) if (t[o] !== r[o]) continue t;
						return !0;
					}
				}
				return !1;
			}
			var Ki,
				Xi = 0;
			function $i() {
				return Xi > 0;
			}
			function ta(t) {
				Ki = t;
			}
			function ea() {
				return Ki;
			}
			var na = '--MAP--';
			function ra(t, e) {
				t[1] = e;
			}
			function oa(t) {
				return t[0];
			}
			function ia(t, e) {
				return t[e + 2];
			}
			function aa(t, e) {
				return 1 & t[e + 0];
			}
			function sa(t, e) {
				return (1 & aa(t, e)) > 0;
			}
			function la(t, e) {
				return t[e + 0] >> 1;
			}
			function ua(t, e, n) {
				var r = aa(t, e);
				t[e + 0] = r | (n << 1);
			}
			function ca(t, e) {
				return t[e + 1];
			}
			function pa(t, e, n) {
				return t[e + 3 + n];
			}
			function fa(t, e) {
				return e === t[1];
			}
			function da(t) {
				!(function(t, e) {
					t[0] = e;
				})(t, 1 | oa(t));
			}
			function ha(t) {
				return (1 & oa(t)) > 0;
			}
			function ga(t) {
				return 5 + t[3];
			}
			function ma(t, e) {
				return (Array.isArray(t) ? t[0] : t) !== (Array.isArray(e) ? e[0] : e);
			}
			function ba(t) {
				return null != t && '' !== t;
			}
			function va(t) {
				var e = ea() || t[an];
				return e && 'function' != typeof e ? (ta(e), ya) : e;
			}
			var ya = function(t, e, n) {
					var r = ea();
					return r ? !(2 & n) || r.sanitize(Kr.STYLE, e) : e;
				},
				wa = null,
				_a = 1,
				xa = 1,
				Ca = 0,
				ka = 1,
				Sa = 0,
				Pa = 0,
				Ea = [];
			function Oa(t, e, n, r, o, i, a, s, l) {
				ha(t) ||
					(a
						? (function(t, e, n, r, o) {
								Ea.unshift(t, e, n, r, o);
						  })(t, n, r, o, l)
						: (Ea.length && Ia(), Ta(t, n, r, o, l)));
				var u = s || ma(e[o], i);
				return u && (e[o] = i), u;
			}
			function Ia() {
				for (var t = 0; t < Ea.length; ) Ta(Ea[t++], Ea[t++], Ea[t++], Ea[t++], Ea[t++]);
				Ea.length = 0;
			}
			function Ta(t, e, n, r, o) {
				if (n) {
					for (var i = !1, a = ga(t); a < t.length; ) {
						var s = ca(t, a),
							l = ia(t, a);
						if ((i = n <= l)) {
							n < l && Ma(t, a, n, o), Aa(t, !1, a, r, e);
							break;
						}
						a += 3 + s;
					}
					i || (Ma(t, t.length, n, o), Aa(t, !1, a, r, e));
				} else Aa(t, !0, 2, r, e);
			}
			function Ma(t, e, n, r) {
				t.splice(e, 0, r ? 1 : 0, _a, n, wa), ua(t, e, xa);
			}
			function Aa(t, e, n, r, o) {
				var i = n + 3 + ca(t, n);
				e || i--, 'number' == typeof r ? (t.splice(i, 0, r), t[n + 1]++, ua(t, n, la(t, n) | (1 << o))) : 'string' == typeof r && null == t[i] && (t[i] = r);
			}
			function ja(t, e, n, r, o, i, a) {
				Ea.length && Ia();
				for (var s = !0 === o ? -1 : !1 === o ? 0 : o, l = Ra, u = (s & la(t, 2)) > 0 ? 1 : 0, c = ga(t); c < t.length; ) {
					var p = ca(t, c);
					if (s & la(t, c)) {
						for (var f = !1, d = ia(t, c), h = p - 1, g = pa(t, c, h), m = 0; m < h; m++) {
							var b = pa(t, c, m),
								v = r[b];
							if (ba(v)) {
								i(e, n, d, a && sa(t, c) ? a(d, v, 2) : v, b), (f = !0);
								break;
							}
						}
						if (l) {
							var y = l(t, e, n, r, i, a, u | (f ? 4 : 2), d, g);
							f = f || y;
						}
						f || i(e, n, d, g);
					}
					c += 3 + p;
				}
				l && l(t, e, n, r, i, a, u);
			}
			var Ra = null,
				Da = function(t, e, n, r) {
					r ? ((r = r.toString()), t && lo(t) ? t.setStyle(e, n, r, so.DashCase) : e.style.setProperty(n, r)) : t && lo(t) ? t.removeStyle(e, n, so.DashCase) : e.style.removeProperty(n);
				},
				Na = function(t, e, n, r) {
					'' !== n && (r ? (t && lo(t) ? t.addClass(e, n) : e.classList.add(n)) : t && lo(t) ? t.removeClass(e, n) : e.classList.remove(n));
				},
				Ua = function(t, e, n, r, o, i, a, s, l) {
					var u = !1;
					if (ca(t, 2)) {
						var c = !0,
							p = !s;
						p && -2 & a && ((c = !1), (u = !0)),
							c &&
								(u = (function t(e, n, r, o, i, a, s, l, u, c) {
									var p = !1;
									if (u < ca(e, 2)) {
										for (
											var f = pa(e, 2, u),
												d = o[f],
												h = (function(t) {
													return t >= za.length && za.push(1), za[t];
												})(u);
											h < d.length;

										) {
											var g = Va(d, h),
												m = l && g > l,
												b = !m && g === l,
												v = Ba(d, h),
												y = ba(v),
												w = t(e, n, r, o, i, a, m ? s : La(s, y, b), m ? l : g, u + 1, c);
											if (m) break;
											if (!w && Ha(s, b)) {
												var _ = b && !y,
													x = _ ? c : v,
													C = _ ? f : null;
												i(n, r, g, a ? a(g, x, 3) : x, C), (w = !0);
											}
											(p = w && b), (h += 2);
										}
										za[u] = h;
									}
									return p;
								})(t, e, n, r, o, i, a, s || null, 0, l || null)),
							p &&
								(function() {
									for (var t = 0; t < za.length; t++) za[t] = 1;
								})();
					}
					return u;
				};
			function La(t, e, n) {
				var r = t;
				return e || !n || 4 & t ? ((r |= 4), (r &= -3)) : ((r |= 2), (r &= -5)), r;
			}
			function Ha(t, e) {
				var n = (1 & t) > 0;
				return n ? 4 & t && e && (n = !1) : 2 & t && (n = e), n;
			}
			var za = [];
			function Va(t, e) {
				return t[e + 0];
			}
			function Fa(t, e, n) {
				t[e + 1] = n;
			}
			function Ba(t, e) {
				return t[e + 1];
			}
			function qa(t) {
				Ga(Bn(), t);
			}
			function Ga(t, e) {
				Rn(t, t[We], pr(), e), Cr(e);
			}
			var Za = (function() {
				return Promise.resolve(null);
			})();
			function Wa(t) {
				var e = t[We],
					n = lr(t);
				if (((e.firstTemplatePass = !1), (t[$e] = e.bindingStartIndex), !n)) {
					var r = pr();
					Rn(t, e, r, void 0),
						(function(t) {
							for (var e = t[sn]; null !== e; e = e[Je])
								if (-1 === e[dn] && yn(e))
									for (var n = gn; n < e.length; n++) {
										var r = e[n];
										$a(r, r[We], r[en]);
									}
						})(t),
						Qa(e, t),
						Mn(t),
						Dn(t, e.contentHooks, e.contentCheckHooks, r, 1, void 0),
						(function(t, e) {
							var n = xr();
							try {
								if (t.expandoInstructions) {
									var r = (e[$e] = t.expandoStartIndex);
									gr(r);
									for (var o = -1, i = -1, a = 0; a < t.expandoInstructions.length; a++) {
										var s = t.expandoInstructions[a];
										if ('number' == typeof s) {
											if (s <= 0) {
												Kn((i = -s));
												var l = t.expandoInstructions[++a];
												o = r += oo + l;
											} else r += s;
											gr(r);
										} else null !== s && ((e[$e] = r), s(2, bn(e[o]), i), $n()), o++;
									}
								}
							} finally {
								Kn(n);
							}
						})(e, t);
				}
				n && e.staticContentQueries && Qa(e, t),
					(function(t) {
						if (null != t) for (var e = 0; e < t.length; e++) ys(t[e]);
					})(e.components);
			}
			function Qa(t, e) {
				if (null != t.contentQueries) {
					vr(0);
					for (var n = 0; n < t.contentQueries.length; n++) {
						var r = t.contentQueries[n];
						t.data[r].contentQueries(2, e[r], r);
					}
				}
			}
			function Ya(t, e) {
				var n = e || Bn()[on],
					r = kr;
				return lo(n) ? n.createElement(t, r) : null === r ? n.createElement(t) : n.createElementNS(r, t);
			}
			function Ja(t, e, n, r, o, i, a, s, l, u) {
				var c = e.blueprint.slice();
				return (
					(c[Ze] = o),
					(c[Qe] = 140 | r),
					Mn(c),
					(c[Ye] = c[un] = t),
					(c[en] = n),
					(c[rn] = a || (t && t[rn])),
					(c[on] = s || (t && t[on])),
					(c[an] = l || (t && t[an]) || null),
					(c[nn] = u || (t && t[nn]) || null),
					(c[Xe] = i),
					c
				);
			}
			function Ka(t, e, n, r, o, i) {
				var a = n + pn,
					s =
						t.data[a] ||
						(function(t, e, n, r, o, i, a) {
							var s = rr(),
								l = ar(),
								u = l ? s : s && s.parent,
								c = (t.data[n] = as(u && u !== e ? u : null, r, n, o, i));
							return (0 !== a && t.firstChild) || (t.firstChild = c), s && (!l || null != s.child || (null === c.parent && 2 !== s.type) ? l || (s.next = c) : (s.child = c)), c;
						})(t, e, a, r, o, i, n);
				return or(s, !0), s;
			}
			function Xa(t, e, n, r) {
				var o = t.node;
				return null == o && (t.node = o = as(e, 2, n, null, null)), (r[Xe] = o);
			}
			function $a(t, e, n) {
				var r,
					o = ar(),
					i = rr();
				if (512 & t[Qe]) xs(Oo(t));
				else {
					var a = !1;
					try {
						or(null, !0), (r = yr(t, t[Xe])), Mn(t), es(t, e.template, ns(t), n), (t[We].firstTemplatePass = !1), Wa(t), (a = !0);
					} finally {
						wr(r, a), or(i, o);
					}
				}
			}
			function ts(t, e, n) {
				var r = t[rn],
					o = yr(t, t[Xe]),
					i = !pr(),
					a = lr(t),
					s = !1;
				try {
					i && !a && r.begin && r.begin(), a && (n && es(t, n, 1, e), Wa(t), (t[Qe] &= -5)), Mn(t), n && es(t, n, 2, e), Wa(t), (s = !0);
				} finally {
					i && !a && r.end && r.end(), wr(o, s);
				}
			}
			function es(t, e, n, r) {
				kr = null;
				var o = xr();
				try {
					Kn(null), 2 & n && Ga(t, 0), e(n, r);
				} finally {
					Cr(o);
				}
			}
			function ns(t) {
				return lr(t) ? 1 : 2;
			}
			function rs(t, e, n, r) {
				if ((void 0 === r && (r = xn), zn)) {
					var o = rr();
					t.firstTemplatePass &&
						(function(t, e, n, r, o) {
							var i = o ? { '': -1 } : null;
							if (n) {
								gs(r, t.data.length, n.length);
								for (var a = 0; a < n.length; a++) (c = n[a]).providersResolver && c.providersResolver(c);
								cs(t, r, n.length);
								var s = (t.preOrderHooks && t.preOrderHooks.length) || 0,
									l = (t.preOrderCheckHooks && t.preOrderCheckHooks.length) || 0,
									u = r.index - pn;
								for (a = 0; a < n.length; a++) {
									var c,
										p = t.data.length;
									ms(t, e, (c = n[a]), c.factory), hs(t.data.length - 1, c, i), An(p, c, t, u, s, l);
								}
							}
							i &&
								(function(t, e, n) {
									if (e)
										for (var r = (t.localNames = []), o = 0; o < e.length; o += 2) {
											var i = n[e[o + 1]];
											if (null == i) throw new Error("Export of name '" + e[o + 1] + "' not found!");
											r.push(e[o], i);
										}
								})(r, o, i);
						})(
							t,
							e,
							(function(t, e, n) {
								var r = t.directiveRegistry,
									o = null;
								if (r)
									for (var i = 0; i < r.length; i++) {
										var a = r[i];
										Yi(n, a.selectors, !1) && (o || (o = []), Uo(jo(rr(), e), e, a.type), En(a) ? (1 & n.flags && Xt(n), (n.flags = 1), o.unshift(a)) : o.push(a));
									}
								return o;
							})(t, e, o),
							o,
							n || null
						),
						(function(t, e, n) {
							var r = n.directiveStart,
								o = n.directiveEnd;
							!t.firstTemplatePass && r < o && jo(n, e);
							for (var i = r; i < o; i++) {
								var a = t.data[i];
								En(a) && bs(e, n, a), ps(e, Fo(t.data, e, i, n), a, i);
							}
						})(t, e, o),
						(function(t, e, n) {
							var r = n.directiveStart,
								o = n.directiveEnd,
								i = t.expandoInstructions,
								a = t.firstTemplatePass,
								s = n.index - pn,
								l = xr();
							try {
								Kn(s);
								for (var u = r; u < o; u++) {
									var c = t.data[u];
									c.hostBindings ? (us(c, i, e[u], n, a), $n()) : a && i.push(null);
								}
							} finally {
								Kn(l);
							}
						})(t, e, o),
						(function(t, e, n) {
							var r = e.localNames;
							if (r)
								for (var o = e.index + 1, i = 0; i < r.length; i += 2) {
									var a = r[i + 1],
										s = -1 === a ? n(e, t) : t[a];
									t[o++] = s;
								}
						})(e, o, r),
						Kn(null);
				}
			}
			function os(t) {
				return t.tView || (t.tView = is(-1, t.template, t.consts, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas));
			}
			function is(t, e, n, r, o, i, a, s) {
				var l = pn + n,
					u = l + r,
					c = (function(t, e) {
						var n = new Array(e).fill(null, 0, t).fill(Jo, t);
						return (n[$e] = t), n;
					})(l, u);
				return (c[We] = {
					id: t,
					blueprint: c,
					template: e,
					viewQuery: a,
					node: null,
					data: c.slice().fill(null, l),
					bindingStartIndex: l,
					viewQueryStartIndex: u,
					expandoStartIndex: u,
					expandoInstructions: null,
					firstTemplatePass: !0,
					staticViewQueries: !1,
					staticContentQueries: !1,
					preOrderHooks: null,
					preOrderCheckHooks: null,
					contentHooks: null,
					contentCheckHooks: null,
					viewHooks: null,
					viewCheckHooks: null,
					destroyHooks: null,
					cleanup: null,
					contentQueries: null,
					components: null,
					directiveRegistry: 'function' == typeof o ? o() : o,
					pipeRegistry: 'function' == typeof i ? i() : i,
					firstChild: null,
					schemas: s
				});
			}
			function as(t, e, n, r, o) {
				return {
					type: e,
					index: n,
					injectorIndex: t ? t.injectorIndex : -1,
					directiveStart: -1,
					directiveEnd: -1,
					propertyMetadataStartIndex: -1,
					propertyMetadataEndIndex: -1,
					flags: 0,
					providerIndexes: 0,
					tagName: r,
					attrs: o,
					localNames: null,
					initialInputs: void 0,
					inputs: void 0,
					outputs: void 0,
					tViews: null,
					next: null,
					projectionNext: null,
					child: null,
					parent: t,
					stylingTemplate: null,
					projection: null,
					onElementCreationFns: null,
					newStyles: null,
					newClasses: null
				};
			}
			function ss(t, e) {
				var n = Bn()[We],
					r = null,
					o = t.directiveStart,
					i = t.directiveEnd;
				if (i > o)
					for (var a = 0 === e, s = n.data, l = o; l < i; l++) {
						var u = s[l],
							c = a ? u.inputs : u.outputs;
						for (var p in c)
							if (c.hasOwnProperty(p)) {
								var f = c[p];
								(r = r || {}).hasOwnProperty(p) ? r[p].push(l, p, f) : (r[p] = [l, p, f]);
							}
					}
				return r;
			}
			var ls = { class: 'className', for: 'htmlFor', formaction: 'formAction', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' };
			function us(t, e, n, r, o) {
				var i = e.length;
				Fn(t), t.hostBindings(1, n, r.index - pn), Fn(null), i === e.length && o && e.push(t.hostBindings);
			}
			function cs(t, e, n) {
				var r = -(e.index - pn),
					o = t.data.length - (65535 & e.providerIndexes);
				(t.expandoInstructions || (t.expandoInstructions = [])).push(r, o, n);
			}
			function ps(t, e, n, r) {
				var o = rr();
				fs(t, o, e),
					o &&
						o.attrs &&
						(function(t, e, n, r) {
							var i = o.initialInputs;
							(void 0 === i || t >= i.length) &&
								(i = (function(t, e, n) {
									for (var r = n.initialInputs || (n.initialInputs = []), o = r.length; o <= t; o++) r.push(null);
									for (var i = n.attrs, a = 0; a < i.length; ) {
										var s = i[a];
										if (0 !== s)
											if (5 !== s) {
												if ('number' == typeof s) break;
												var l = e[s],
													u = i[a + 1];
												void 0 !== l && (r[t] || (r[t] = [])).push(s, l, u), (a += 2);
											} else a += 2;
										else a += 4;
									}
									return r;
								})(t, n.inputs, o));
							var a = i[t];
							if (a)
								for (var s = n.setInput, l = 0; l < a.length; ) {
									var u = a[l++],
										c = a[l++],
										p = a[l++];
									s ? n.setInput(e, p, u, c) : (e[c] = p);
								}
						})(r, e, n),
					t[We].firstTemplatePass && n.contentQueries && (o.flags |= 4),
					En(n) && (kn(o.index, t)[en] = e);
			}
			function fs(t, e, n) {
				var r = xn(e, t);
				co(n, t), r && co(r, t);
			}
			function ds(t) {
				var e = Bn()[We];
				(e.components || (e.components = [])).push(t.index);
			}
			function hs(t, e, n) {
				if (n) {
					if (e.exportAs) for (var r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
					e.template && (n[''] = t);
				}
			}
			function gs(t, e, n) {
				(t.flags = 1 & t.flags), (t.directiveStart = e), (t.directiveEnd = e + n), (t.providerIndexes = e);
			}
			function ms(t, e, n, r) {
				t.data.push(n);
				var o = new ao(r, En(n), null);
				t.blueprint.push(o), e.push(o);
			}
			function bs(t, e, n) {
				var r = xn(e, t),
					o = os(n),
					i = t[rn],
					a = ws(t, Ja(t, o, null, n.onPush ? 64 : 16, t[e.index], e, i, i.createRenderer(r, n)));
				(a[Xe] = e), (t[e.index] = a), t[We].firstTemplatePass && ds(e);
			}
			function vs(t, e, n, r, o) {
				return new Array(t, !0, o ? -1 : 0, e, null, null, r, n, null);
			}
			function ys(t) {
				var e = Bn(),
					n = kn(t, e);
				(128 == (128 & n[Qe]) || lr(e)) &&
					80 & n[Qe] &&
					((function(t) {
						for (var e = t[We], n = t.length; n < e.blueprint.length; n++) t[n] = e.blueprint[n];
					})(n),
					Ss(n, n[en]));
			}
			function ws(t, e) {
				return t[sn] ? (t[ln][Je] = e) : (t[sn] = e), (t[ln] = e), e;
			}
			function _s(t) {
				for (; t; ) {
					t[Qe] |= 64;
					var e = Po(t);
					if (On(t) && !e) return t;
					t = e;
				}
				return null;
			}
			function xs(t) {
				for (var e = 0; e < t.components.length; e++) {
					var n = t.components[e];
					ts(In(n), n);
				}
			}
			function Cs(t, e) {
				var n = t[rn];
				n.begin && n.begin();
				try {
					lr(t) && Ss(t, e), Ss(t, e);
				} catch (r) {
					throw (Ms(t, r), r);
				} finally {
					n.end && n.end();
				}
			}
			function ks(t) {
				xs(t[en]);
			}
			function Ss(t, e) {
				var n = t[We],
					r = yr(t, t[Xe]),
					o = n.template,
					i = lr(t),
					a = !1;
				try {
					Mn(t), i && Ps(1, n, e), es(t, o, ns(t), e), Wa(t), (i && !n.staticViewQueries) || Ps(2, n, e), (a = !0);
				} finally {
					wr(r, a);
				}
			}
			function Ps(t, e, n) {
				var r = e.viewQuery;
				r && (vr(e.viewQueryStartIndex), r(t, n));
			}
			var Es = Za;
			function Os(t) {
				return void 0 === t.inputs && (t.inputs = ss(t, 0)), t.inputs;
			}
			function Is(t) {
				return t[tn] || (t[tn] = []);
			}
			function Ts(t) {
				return t[We].cleanup || (t[We].cleanup = []);
			}
			function Ms(t, e) {
				var n = t[nn],
					r = n ? n.get(Yo, null) : null;
				r && r.handleError(e);
			}
			function As(t, e, n) {
				for (var r = t[We], o = 0; o < e.length; ) {
					var i = e[o++],
						a = e[o++],
						s = e[o++],
						l = t[i],
						u = r.data[i];
					u.setInput ? u.setInput(l, n, a, s) : (l[s] = n);
				}
			}
			function js(t) {
				var e;
				if ((e = t.onElementCreationFns)) {
					for (var n = 0; n < e.length; n++) e[n]();
					t.onElementCreationFns = null;
				}
			}
			var Rs = null;
			function Ds() {
				if (!Rs) {
					var t = Dt.Symbol;
					if (t && t.iterator) Rs = t.iterator;
					else
						for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
							var r = e[n];
							'entries' !== r && 'size' !== r && Map.prototype[r] === Map.prototype.entries && (Rs = r);
						}
				}
				return Rs;
			}
			function Ns(t, e) {
				return t === e || ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e));
			}
			function Us(t) {
				return !!Ls(t) && (Array.isArray(t) || (!(t instanceof Map) && Ds() in t));
			}
			function Ls(t) {
				return null !== t && ('function' == typeof t || 'object' == typeof t);
			}
			function Hs(t, e, n) {
				return (t[e] = n);
			}
			function zs(t, e) {
				return t[e];
			}
			function Vs(t, e, n) {
				var r, o;
				return (o = n), ((r = t[e]) == r || o == o) && r !== o && ((t[e] = n), !0);
			}
			function Fs(t, e, n, r) {
				var o = xr(),
					i = Bs(Bn(), e);
				return (
					i !== Jo &&
						(function(t, e, n, r, o, i) {
							var a,
								s,
								l = Bn(),
								u = _n(t, l),
								c = Cn(t, l);
							if (!o && (a = Os(c)) && (s = a[e]))
								As(l, s, n),
									Pn(c) &&
										(function(e, n) {
											var r = kn(t + pn, e);
											16 & r[Qe] || (r[Qe] |= 64);
										})(l);
							else if (3 === c.type) {
								!(function(t, e, n, r, o) {
									var i = e[$e] - 1,
										a = r[i];
									a[0] == qe && ((r[i] = n + a), o || (-1 == t.propertyMetadataStartIndex && (t.propertyMetadataStartIndex = i), (t.propertyMetadataEndIndex = i + 1)));
								})(c, l, (e = ls[e] || e), l[We].data, o);
								var p = l[on];
								(n = null != r ? r(n, c.tagName || '', e) : n), lo(p) ? p.setProperty(u, e, n) : vo(e) || (u.setProperty ? u.setProperty(e, n) : (u[e] = n));
							}
						})(o, t, i, n, r),
					Fs
				);
			}
			function Bs(t, e) {
				var n = t[$e]++;
				return (
					(function(t, e, n) {
						void 0 === e && (e = ''), void 0 === n && (n = '');
						var r = t[We].data,
							o = t[$e] - 1;
						null == r[o] && (r[o] = qe + e + qe + n);
					})(t),
					Vs(t, n, e) ? e : Jo
				);
			}
			function qs(t, e, n, r) {
				var o = xr(),
					i = Bn(),
					a = Bs(i, e);
				return (
					a !== Jo &&
						(function(t, e, n, r, o, i) {
							var a = _n(t, r),
								s = r[on];
							if (null == n) lo(s) ? s.removeAttribute(a, e, i) : a.removeAttribute(e);
							else {
								var l = Cn(t, r),
									u = null == o ? Ve(n) : o(n, l.tagName || '', e);
								lo(s) ? s.setAttribute(a, e, u, i) : i ? a.setAttributeNS(i, e, u) : a.setAttribute(e, u);
							}
						})(o, t, a, i, n, r),
					qs
				);
			}
			function Gs(t, e) {
				var n = e[Ye];
				return -1 === t.index ? (yn(n) ? n : null) : n;
			}
			function Zs(t, e) {
				var n = Gs(t, e);
				return n ? nl(e[on], n[hn]) : null;
			}
			function Ws(t, e, n, r, o) {
				var i,
					a = !1;
				yn(r) ? (i = r) : vn(r) && ((a = !0), (r = r[Ze]));
				var s = bn(r);
				0 === t
					? tl(e, n, s, o || null)
					: 1 === t
					? (function(t, e, n) {
							var r = nl(t, e);
							r &&
								(function(t, e, n, r) {
									lo(t) ? t.removeChild(e, n, r) : e.removeChild(n);
								})(t, r, e, n);
					  })(e, s, a)
					: 2 === t && e.destroyNode(s),
					null != i &&
						(function(t, e, n, r, o) {
							var i = n[hn];
							i !== bn(n) && Ws(e, t, r, i, o);
							for (var a = gn; a < n.length; a++) sl(t, e, n[a], r, i);
						})(e, t, i, n, o);
			}
			function Qs(t, e, n) {
				var r = Zs(t[We].node, t);
				r && sl(t[on], e ? 0 : 1, t, r, n);
			}
			function Ys(t, e, n) {
				var r = gn + n,
					o = e.length;
				n > 0 && (e[r - 1][Je] = t), n < o - gn ? ((t[Je] = e[r]), e.splice(gn + n, 0, t)) : (e.push(t), (t[Je] = null)), (t[Ye] = e), t[Ke] && t[Ke].insertView(n), (t[Qe] |= 128);
			}
			function Js(t, e) {
				if (!(t.length <= gn)) {
					var n = gn + e,
						r = t[n];
					return (
						r &&
							(e > 0 && (t[n - 1][Je] = r[Je]),
							t.splice(gn + e, 1),
							Qs(r, !1),
							128 & r[Qe] && !(256 & r[Qe]) && r[Ke] && r[Ke].removeView(),
							(r[Ye] = null),
							(r[Je] = null),
							(r[Qe] &= -129)),
						r
					);
				}
			}
			function Ks(t) {
				if (!(256 & t[Qe])) {
					var e = t[on];
					lo(e) && e.destroyNode && sl(e, 2, t, null, null),
						(function(t) {
							var e = t[sn];
							if (!e) return $s(t);
							for (; e; ) {
								var n = null;
								if (vn(e)) n = e[sn];
								else {
									var r = e[gn];
									r && (n = r);
								}
								if (!n) {
									for (; e && !e[Je] && e !== t; ) $s(e), (e = Xs(e, t));
									$s(e || t), (n = e && e[Je]);
								}
								e = n;
							}
						})(t);
				}
			}
			function Xs(t, e) {
				var n;
				return vn(t) && (n = t[Xe]) && 2 === n.type ? Gs(n, t) : t[Ye] === e ? null : t[Ye];
			}
			function $s(t) {
				if (vn(t) && !(256 & t[Qe])) {
					(t[Qe] &= -129),
						(t[Qe] |= 256),
						(function(t) {
							var e,
								n = t[We];
							if (null != n && null != (e = n.destroyHooks))
								for (var r = 0; r < e.length; r += 2) {
									var o = t[e[r]];
									o instanceof ao || e[r + 1].call(o);
								}
						})(t),
						(function(t) {
							var e = t[We].cleanup;
							if (null !== e) {
								for (var n = t[tn], r = 0; r < e.length - 1; r += 2)
									if ('string' == typeof e[r]) {
										var o = e[r + 1],
											i = 'function' == typeof o ? o(t) : bn(t[o]),
											a = e[r + 3];
										'boolean' == typeof a ? i.removeEventListener(e[r], n[e[r + 2]], a) : a >= 0 ? n[a]() : n[-a].unsubscribe(), (r += 2);
									} else e[r].call(n[e[r + 1]]);
								t[tn] = null;
							}
						})(t);
					var e = t[Xe];
					e && 3 === e.type && lo(t[on]) && t[on].destroy(), Tn(t) && t[Ke] && t[Ke].removeView();
				}
			}
			function tl(t, e, n, r) {
				lo(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0);
			}
			function el(t, e, n, r) {
				null !== r
					? tl(t, e, n, r)
					: (function(t, e, n) {
							lo(t) ? t.appendChild(e, n) : e.appendChild(n);
					  })(t, e, n);
			}
			function nl(t, e) {
				return lo(t) ? t.parentNode(e) : e.parentNode;
			}
			function rl(t, e, n) {
				var r,
					o,
					i = (function(t, e) {
						if (On(e)) return nl(e[on], xn(t, e));
						var n = (function(t) {
								for (; null != t.parent && (4 === t.parent.type || 5 === t.parent.type); ) t = t.parent;
								return t;
							})(t),
							r = n.parent;
						if (null == r) {
							var o = e[Xe];
							return 2 === o.type
								? Zs(o, e)
								: (function(t) {
										var e = t[Xe];
										return e && 3 === e.type ? xn(e, Po(t)) : null;
								  })(e);
						}
						var i = n && 5 === n.type;
						if (i && 2 & n.flags) return xn(n, e).parentNode;
						if (1 & r.flags && !i) {
							var a = e[We].data,
								s = a[a[r.index].directiveStart].encapsulation;
							if (s !== Ce.ShadowDom && s !== Ce.Native) return null;
						}
						return xn(r, e);
					})(e, n);
				if (null != i) {
					var a = n[on],
						s = (function(t, e) {
							if (2 === t.type) {
								var n = Gs(t, e);
								return ol(n.indexOf(e, gn) - gn, n);
							}
							return 4 === t.type || 5 === t.type ? xn(t, e) : null;
						})(e.parent || n[Xe], n);
					if (Array.isArray(t))
						try {
							for (var u = l(t), c = u.next(); !c.done; c = u.next()) el(a, i, c.value, s);
						} catch (p) {
							r = { error: p };
						} finally {
							try {
								c && !c.done && (o = u.return) && o.call(u);
							} finally {
								if (r) throw r.error;
							}
						}
					else el(a, i, t, s);
				}
			}
			function ol(t, e) {
				var n = gn + t + 1;
				if (n < e.length) {
					var r = e[n],
						o = r[Xe].child;
					return null !== o ? xn(o, r) : e[hn];
				}
				return e[hn];
			}
			function il(t, e, n, r) {
				for (; t; ) al(t, e, n, r), (t = t.next);
			}
			function al(t, e, n, r) {
				var o = xn(t, r);
				rl(o, e, n), co(o, r);
				var i = r[t.index];
				if (0 === t.type) for (var a = gn; a < i.length; a++) Qs(i[a], !0, i[hn]);
				else if (5 === t.type) {
					var s = t.child;
					il(s, s, r, r);
				} else 4 === t.type && il(t.child, e, n, r), yn(i) && rl(i[hn], e, n);
			}
			function sl(t, e, n, r, o) {
				for (var i = n[We].node.child; null !== i; ) ll(t, e, n, i, r, o), (i = i.next);
			}
			function ll(t, e, n, r, o, i) {
				var a = r.type;
				4 === a
					? (function(t, e, n, r, o, i) {
							Ws(e, t, o, n[r.index], i);
							for (var a = r.child; a; ) ll(t, e, n, a, o, i), (a = a.next);
					  })(t, e, n, r, o, i)
					: 1 === a
					? (function(t, e, n, r, o, i) {
							var a = Eo(n),
								s = a[Xe].projection[r.projection];
							if (Array.isArray(s)) for (var l = 0; l < s.length; l++) Ws(e, t, o, s[l], i);
							else for (var u = s, c = a[Ye]; null !== u; ) ll(t, e, c, u, o, i), (u = u.projectionNext);
					  })(t, e, n, r, o, i)
					: Ws(e, t, o, n[r.index], i);
			}
			function ul(t, e, n, r, o, i, a, s) {
				var l = Bn(),
					u = l[We],
					c = (function(t, e, n) {
						var r = Bn(),
							o = t + pn,
							i = (r[t + pn] = r[on].createComment('')),
							a = Ka(r[We], r[Xe], t, 0, e, n),
							s = (r[o] = vs(r[o], r, i, a));
						return rl(i, a, r), ws(r, s), a;
					})(t, o || null, i || null);
				u.firstTemplatePass && (c.tViews = is(-1, e, n, r, u.directiveRegistry, u.pipeRegistry, null, null)),
					rs(u, l, a, s),
					(function(t, e) {
						var n = t[Ke];
						if (n) {
							var r = t[e.index];
							r[Ke] ? n.insertNodeBeforeViews(e) : (n.addNode(e), (r[Ke] = n.container()));
						}
					})(l, c),
					co(xn(c, l), l),
					jn(u, c),
					sr();
			}
			function cl(t, e) {
				void 0 === e && (e = bt.Default), (t = It(t));
				var n = Bn();
				return null == n ? Qt(t, e) : Lo(rr(), n, t, e);
			}
			function pl() {
				return Xn() + er();
			}
			function fl(t) {
				return hl(t, !1);
			}
			function dl(t) {
				return hl(t, !0);
			}
			function hl(t, e) {
				var n = e ? t.newClasses : t.newStyles;
				return n || ((n = [0, 0, 1, 0, na]), e ? (t.newClasses = n) : (t.newStyles = n)), n;
			}
			function gl(t, e, n, r, o) {
				!(function(t, e, n, r, o) {
					if (
						!(16 & t[1]) &&
						(function(t, e, n, r) {
							var o = t[2],
								i = 2 * e;
							return !((i < o.length && o[i + 0] >= 0) || (mo(t, e, t[5].length, r), 0));
						})(t, e, 0, o)
					) {
						r &&
							(r = (function(t) {
								for (var e = [], n = 0; n < t.length; n++) e.push(Hi(t[n]));
								return e;
							})(r));
						var i = t[5],
							a = i[1],
							s = i[0],
							l = t[6],
							u = t[7],
							c = 4 * s,
							p = 10 + c,
							f = p + 4 * a,
							d = f + c,
							h = i.length;
						i.push(r ? r.length : 0, n ? n.length : 0);
						var g = 0,
							m = [];
						if (r && r.length)
							for (var b = 0; b < r.length; b++) {
								var v = r[b];
								-1 == (_ = ei(t, v, 10, p)) && ((_ = p + g), (g += 4), m.push(v)), i.push(_);
							}
						var y = [];
						if (n && n.length)
							for (var w = 0; w < n.length; w++) {
								var _,
									x = n[w];
								-1 == (_ = ei(t, x, p, f)) ? ((_ = f + g), (g += 4), y.push(x)) : (_ += 4 * m.length), i.push(_);
							}
						var C = 2;
						if (m.length)
							for (; C < h; ) {
								var k = i[C + 0],
									S = i[C + 1];
								if (S) for (var P = C + 2 + k, E = P; E < P + S; E++) i[E] += 4 * m.length;
								C += 2 + (k + S);
							}
						for (var O = y.length + m.length, I = 10; I < t.length; I += 4) {
							var T = I >= f,
								M = I >= (T ? d : p),
								A = _i(t, I),
								j = pi(A),
								R = fi(A);
							wi(t, I, ui(A, j, (R += T ? (M ? 4 * m.length : 0) : 4 * O + 4 * (M ? m.length : 0))));
						}
						for (var D = 0; D < 4 * m.length; D++) t.splice(d, 0, null), t.splice(p, 0, null), p++, f++, (d += 2);
						for (var N = 0; N < 4 * y.length; N++) t.splice(f, 0, null), t.push(null), f++, d++;
						for (var U = t[4], L = t[3], H = 0; H < O; H++) {
							var z = H >= m.length,
								V = z ? H - m.length : H,
								F = z ? y[V] : m[V],
								B = void 0,
								q = void 0;
							z ? ((B = d + 4 * (a + V)), (q = p + 4 * (a + V))) : ((B = f + 4 * (s + V)), (q = 10 + 4 * (s + V)));
							var G = z ? U : L,
								Z = Ri(G, F);
							-1 === Z ? (Z = Vi(null, G, F, !z && null, e) + 1) : (Z += 1);
							var W = Ii(t, F, z, o || null);
							wi(t, q, ui(W, Z, B)), gi(t, q, F), mi(t, q, null), bi(t, q, 0, e), wi(t, B, ui(W, Z, q)), gi(t, B, F), mi(t, B, null), bi(t, B, 0, e);
						}
						(i[1] = a + y.length), (i[0] = s + m.length), (l[0] += y.length), (u[0] += m.length);
						var Q = 4 * m.length,
							Y = 4 * y.length,
							J = u.length;
						zi(t, e, !1, f + 4 * s, m.length);
						for (var K = 1; K < J; K += 4) u[K + 1] += Y + Q;
						var X = l.length;
						zi(t, e, !0, d + 4 * a, y.length);
						for (var $ = 1; $ < X; $ += 4) l[$ + 1] += 2 * Q + Y;
						wi(t, 1, ui(0, 0, f));
					}
				})(t.stylingTemplate, o, e, n, r);
			}
			function ml() {
				return Xn() + er();
			}
			function bl(t, e) {
				var n = Ln;
				return n || Hn((n = bo(t + pn, e))), n;
			}
			function vl(t, e, n, r) {
				var o = Bn(),
					i = o[We],
					a = (o[t + pn] = Ya(e)),
					s = o[on],
					l = Ka(i, o[Xe], t, 3, e, n || null),
					u = 0,
					c = 0,
					p = -1;
				if (n) {
					!(function(t, e, n, r) {
						if (t.firstTemplatePass && !e.stylingTemplate) {
							var o = (function(t, e) {
								for (var n = r; n < t.length; n++) {
									var o = t[n];
									if (1 === o || 2 === o) return n;
								}
								return -1;
							})(n);
							o >= 0 &&
								(e.stylingTemplate = (function(t, e, n) {
									void 0 === n && (n = 0);
									var r = go();
									return (
										(function(t, e, n, r) {
											if (!(16 & t[1])) {
												mo(t, r);
												for (var o = null, i = null, a = -1, s = n; s < e.length; s++) {
													var l = e[s];
													'number' == typeof l ? (a = l) : 1 == a ? Xo((o = o || t[4]), l, !0, r) : 2 == a && Xo((i = i || t[3]), l, e[++s], r);
												}
											}
										})(r, t, e, n),
										r
									);
								})(n, o));
						}
					})(
						i,
						l,
						n,
						(p = (function(t, e) {
							for (var n = Bn()[on], r = lo(n), o = 0; o < e.length; ) {
								var i = e[o];
								if ('number' == typeof i) {
									if (0 !== i) break;
									o++;
									var a = e[o++],
										s = e[o++],
										l = e[o++];
									r ? n.setAttribute(t, s, l, a) : t.setAttributeNS(a, s, l);
								} else (l = e[++o]), vo((s = i)) ? r && n.setProperty(t, s, l) : r ? n.setAttribute(t, s, l) : t.setAttribute(s, l), o++;
							}
							return o;
						})(a, n))
					);
					var f = l.stylingTemplate;
					f && ((u = ti(a, f, s)), (c = $o(a, f, s)));
				}
				if ((rl(a, l, o), rs(i, o, r), 0 === Un && co(a, o), Un++, i.firstTemplatePass)) {
					var d = Os(l);
					d && d.hasOwnProperty('class') && (l.flags |= 8), d && d.hasOwnProperty('style') && (l.flags |= 16);
				}
				l.stylingTemplate && ($o(a, l.stylingTemplate, s, c), ti(a, l.stylingTemplate, s, u)),
					$i() &&
						p >= 0 &&
						(function(t, e, n) {
							for (var r, o, i = -1, a = p; a < e.length; a++) {
								var s = e[a];
								'number' == typeof s ? (i = s) : 1 == i ? Ta((r = r || dl(t)), -1, s, !0, !1) : 2 == i && Ta((o = o || fl(t)), -1, s, e[++a], !1);
							}
						})(l, n);
				var h = o[Ke];
				h && (h.addNode(l), (o[Ke] = h.clone(l))),
					(function(t, e, n) {
						if (Sn(e))
							for (var r = e.directiveEnd, o = e.directiveStart; o < r; o++) {
								var i = t.data[o];
								i.contentQueries && i.contentQueries(1, n[o], o);
							}
					})(i, l, o);
			}
			function yl() {
				var t = rr();
				ar() ? sr() : or((t = t.parent), !1), t.onElementCreationFns && js(t);
				var e = Bn(),
					n = e[Ke];
				n && t.index === n.nodeIndex && (e[Ke] = n.parent), jn(e[We], t), Un--;
				var r = null;
				yo(t) && ((r = bo(t.index, e)), As(e, t.inputs.class, Ui(r))),
					0 != (16 & t.flags) &&
						((r = r || bo(t.index, e)),
						As(
							e,
							t.inputs.style,
							(function(t) {
								var e = r[3],
									n = e[1];
								if (null === n) {
									n = '';
									for (var o = 2; o < e.length; o += 3) {
										var i = e[o + 1];
										null !== i && (n += (n.length ? ';' : '') + e[o] + ':' + i);
									}
									e[1] = n;
								}
								return n;
							})()
						));
			}
			function wl(t, e, n, r) {
				vl(t, e, n, r), yl();
			}
			function _l(t) {
				return !!t && 'function' == typeof t.then;
			}
			function xl(t, e, n, r) {
				void 0 === n && (n = !1),
					(function(t, e, n, r, o) {
						void 0 === n && (n = !1);
						var i = Bn(),
							a = rr(),
							s = i[We],
							l = s.firstTemplatePass && (s.cleanup || (s.cleanup = [])),
							u = !0;
						if (3 === a.type) {
							var c = xn(a, i),
								p = r ? r(c) : ke,
								f = p.target || c,
								d = i[on],
								h = (_ = Is(i)).length,
								g = r
									? function(t) {
											return r(bn(t[a.index])).target;
									  }
									: a.index;
							if (lo(d)) {
								var m = null;
								if (
									(!r &&
										(function(t) {
											return t.directiveEnd > t.directiveStart;
										})(a) &&
										(m = (function(t, e, n) {
											var r = t[We].cleanup;
											if (null != r)
												for (var o = 0; o < r.length - 1; o += 2) {
													var i = r[o];
													if (i === e && r[o + 1] === n) {
														var a = t[tn],
															s = r[o + 2];
														return a.length > s ? a[s] : null;
													}
													'string' == typeof i && (o += 2);
												}
											return null;
										})(i, t, a.index)),
									null !== m)
								)
									(e.__ngNextListenerFn__ = m.__ngNextListenerFn__), (m.__ngNextListenerFn__ = e), (u = !1);
								else {
									e = kl(a, i, e, !1);
									var b = d.listen(p.name || f, t, e);
									_.push(e, b), l && l.push(t, g, h, h + 1);
								}
							} else (e = kl(a, i, e, !0)), f.addEventListener(t, e, n), _.push(e), l && l.push(t, g, h, n);
						}
						void 0 === a.outputs && (a.outputs = ss(a, 1));
						var v,
							y = a.outputs;
						if (u && y && (v = y[t])) {
							var w = v.length;
							if (w)
								for (var _ = Is(i), x = 0; x < w; x += 3) {
									var C = i[v[x]][v[x + 2]].subscribe(e),
										k = _.length;
									_.push(e, C), l && l.push(t, a.index, k, -(k + 1));
								}
						}
					})(t, e, n, r);
			}
			function Cl(t, e, n) {
				try {
					return !1 !== e(n);
				} catch (r) {
					return Ms(t, r), !1;
				}
			}
			function kl(t, e, n, r) {
				return function o(i) {
					var a = 1 & t.flags ? kn(t.index, e) : e;
					0 == (32 & e[Qe]) && _s(a);
					for (var s = Cl(e, n, i), l = o.__ngNextListenerFn__; l; ) (s = Cl(e, l, i) && s), (l = l.__ngNextListenerFn__);
					return r && !1 === s && (i.preventDefault(), (i.returnValue = !1)), s;
				};
			}
			function Sl(t) {
				return (
					void 0 === t && (t = 1),
					(function(t) {
						return (
							void 0 === t && (t = 1),
							(ur = (function(t, e) {
								for (; t > 0; ) (e = e[un]), t--;
								return e;
							})(t, ur))[en]
						);
					})(t)
				);
			}
			function Pl(t, e) {
				for (
					var n = null,
						r = (function(t) {
							var e = t.attrs;
							if (null != e) {
								var n = e.indexOf(5);
								if (0 == (1 & n)) return e[n + 1];
							}
							return null;
						})(t),
						o = 0;
					o < e.length;
					o++
				) {
					var i = e[o];
					if ('*' !== i) {
						if (null === r ? Yi(t, i, !0) : Ji(r, i)) return o;
					} else n = o;
				}
				return n;
			}
			function El(t) {
				var e = Eo(Bn())[Xe];
				if (!e.projection)
					for (var n = (e.projection = new Array(t ? t.length : 1).fill(null)), r = n.slice(), o = e.child; null !== o; ) {
						var i = t ? Pl(o, t) : 0;
						null !== i && (r[i] ? (r[i].projectionNext = o) : (n[i] = o), (r[i] = o)), (o = o.next);
					}
			}
			var Ol = !1;
			function Il(t, e, n) {
				void 0 === e && (e = 0);
				var r = Bn(),
					o = Ka(r[We], r[Xe], t, 1, null, n || null);
				null === o.projection && (o.projection = e),
					sr(),
					Ol ||
						(function t(e, n, r, o) {
							var i = o[Ye],
								a = o[Xe].projection[r];
							if (Array.isArray(a)) rl(a, n, e);
							else for (; a; ) 32 & a.flags || (1 === a.type ? t(e, n, a.projection, Eo(i)) : ((a.flags |= 2), al(a, n, e, i))), (a = a.projectionNext);
						})(r, o, e, Eo(r));
			}
			function Tl(t, e) {
				var n = Bn(),
					r = (n[t + pn] = (function(t, e) {
						return lo(e) ? e.createText(Ve(t)) : e.createTextNode(Ve(t));
					})(e, n[on])),
					o = Ka(n[We], n[Xe], t, 3, null, null);
				sr(), rl(r, o, n);
			}
			function Ml(t, e) {
				return { components: [], scheduler: t || Be, clean: Es, playerHandler: e || null, flags: 0 };
			}
			function Al(t, e) {
				var n = In(t)[We],
					r = n.data.length - 1;
				An(r, e, n, -1, -1, -1), jn(n, { directiveStart: r, directiveEnd: r + 1 });
			}
			var jl = (function() {
				function t(t, e, n) {
					(this.previousValue = t), (this.currentValue = e), (this.firstChange = n);
				}
				return (
					(t.prototype.isFirstChange = function() {
						return this.firstChange;
					}),
					t
				);
			})();
			function Rl(t) {
				t.type.prototype.ngOnChanges &&
					((t.setInput = Dl),
					(t.onChanges = function() {
						var t = Ul(this),
							e = t && t.current;
						if (e) {
							var n = t.previous;
							if (n === ke) t.previous = e;
							else for (var r in e) n[r] = e[r];
							(t.current = null), this.ngOnChanges(e);
						}
					}));
			}
			function Dl(t, e, n, r) {
				var o =
						Ul(t) ||
						(function(t, e) {
							return (t[Nl] = { previous: ke, current: null });
						})(t),
					i = o.current || (o.current = {}),
					a = o.previous,
					s = this.declaredInputs[n],
					l = a[s];
				(i[s] = new jl(l && l.currentValue, e, a === ke)), (t[r] = e);
			}
			var Nl = '__ngSimpleChanges__';
			function Ul(t) {
				return t[Nl] || null;
			}
			function Ll(t) {
				for (var e, n, r = Object.getPrototypeOf(t.type.prototype).constructor; r; ) {
					var o = void 0;
					if (En(t)) o = r.ngComponentDef || r.ngDirectiveDef;
					else {
						if (r.ngComponentDef) throw new Error('Directives cannot inherit Components');
						o = r.ngDirectiveDef;
					}
					var i = r.ngBaseDef;
					if (i || o) {
						var a = t;
						(a.inputs = Hl(t.inputs)), (a.declaredInputs = Hl(t.declaredInputs)), (a.outputs = Hl(t.outputs));
					}
					if (i) {
						var s = i.viewQuery,
							u = i.contentQueries,
							c = i.hostBindings;
						c && Fl(t, c), s && zl(t, s), u && Vl(t, u), yt(t.inputs, i.inputs), yt(t.declaredInputs, i.declaredInputs), yt(t.outputs, i.outputs);
					}
					if (o) {
						var p = o.hostBindings;
						p && Fl(t, p);
						var f = o.viewQuery,
							d = o.contentQueries;
						f && zl(t, f),
							d && Vl(t, d),
							yt(t.inputs, o.inputs),
							yt(t.declaredInputs, o.declaredInputs),
							yt(t.outputs, o.outputs),
							(t.afterContentChecked = t.afterContentChecked || o.afterContentChecked),
							(t.afterContentInit = t.afterContentInit || o.afterContentInit),
							(t.afterViewChecked = t.afterViewChecked || o.afterViewChecked),
							(t.afterViewInit = t.afterViewInit || o.afterViewInit),
							(t.doCheck = t.doCheck || o.doCheck),
							(t.onDestroy = t.onDestroy || o.onDestroy),
							(t.onInit = t.onInit || o.onInit);
						var h = o.features;
						if (h)
							try {
								for (var g = l(h), m = g.next(); !m.done; m = g.next()) {
									var b = m.value;
									b && b.ngInherit && b(t);
								}
							} catch (y) {
								e = { error: y };
							} finally {
								try {
									m && !m.done && (n = g.return) && n.call(g);
								} finally {
									if (e) throw e.error;
								}
							}
					} else {
						var v = r.prototype;
						v &&
							((t.afterContentChecked = t.afterContentChecked || v.ngAfterContentChecked),
							(t.afterContentInit = t.afterContentInit || v.ngAfterContentInit),
							(t.afterViewChecked = t.afterViewChecked || v.ngAfterViewChecked),
							(t.afterViewInit = t.afterViewInit || v.ngAfterViewInit),
							(t.doCheck = t.doCheck || v.ngDoCheck),
							(t.onDestroy = t.onDestroy || v.ngOnDestroy),
							(t.onInit = t.onInit || v.ngOnInit),
							v.ngOnChanges && ((Rl.ngInherit = !0), Rl)(t));
					}
					r = Object.getPrototypeOf(r);
				}
			}
			function Hl(t) {
				return t === ke ? {} : t === Se ? [] : t;
			}
			function zl(t, e) {
				var n = t.viewQuery;
				t.viewQuery = n
					? function(t, r) {
							e(t, r), n(t, r);
					  }
					: e;
			}
			function Vl(t, e) {
				var n = t.contentQueries;
				t.contentQueries = n
					? function(t, r, o) {
							e(t, r, o), n(t, r, o);
					  }
					: e;
			}
			function Fl(t, e) {
				var n = t.hostBindings;
				e !== n &&
					(t.hostBindings = n
						? function(t, r, o) {
								tr(1);
								try {
									e(t, r, o);
								} finally {
									tr(-1);
								}
								n(t, r, o);
						  }
						: e);
			}
			function Bl(t, e, n, r, o) {
				if (((t = It(t)), Array.isArray(t))) for (var i = 0; i < t.length; i++) Bl(t[i], e, n, r, o);
				else {
					var a = Bn(),
						s = de(t) ? t : It(t.provide),
						l = ue(t),
						u = rr(),
						c = 65535 & u.providerIndexes,
						p = u.directiveStart,
						f = u.providerIndexes >> 16;
					if (t.useClass || de(t)) {
						var d = (t.useClass || t).prototype.ngOnDestroy;
						if (d) {
							var h = a[We];
							(h.destroyHooks || (h.destroyHooks = [])).push(e.length, d);
						}
					}
					if (de(t) || !t.multi) {
						var g = new ao(l, o, cl),
							m = Gl(s, e, o ? c : c + f, p);
						-1 == m ? (Uo(jo(u, a), a, s), e.push(s), u.directiveStart++, u.directiveEnd++, o && (u.providerIndexes += 65536), n.push(g), a.push(g)) : ((n[m] = g), (a[m] = g));
					} else {
						var b = Gl(s, e, c + f, p),
							v = Gl(s, e, c, c + f),
							y = v >= 0 && n[v];
						(o && !y) || (!o && !(b >= 0 && n[b]))
							? (Uo(jo(u, a), a, s),
							  (g = (function(t, e, n, r, o) {
									var i = new ao(t, n, cl);
									return (i.multi = []), (i.index = e), (i.componentProviders = 0), ql(i, o, r && !n), i;
							  })(o ? Wl : Zl, n.length, o, r, l)),
							  !o && y && (n[v].providerFactory = g),
							  e.push(s),
							  u.directiveStart++,
							  u.directiveEnd++,
							  o && (u.providerIndexes += 65536),
							  n.push(g),
							  a.push(g))
							: ql(n[o ? v : b], l, !o && r),
							!o && r && y && n[v].componentProviders++;
					}
				}
			}
			function ql(t, e, n) {
				t.multi.push(e), n && t.componentProviders++;
			}
			function Gl(t, e, n, r) {
				for (var o = n; o < r; o++) if (e[o] === t) return o;
				return -1;
			}
			function Zl(t, e, n, r) {
				return Ql(this.multi, []);
			}
			function Wl(t, e, n, r) {
				var o,
					i = this.multi;
				if (this.providerFactory) {
					var a = this.providerFactory.componentProviders,
						s = Fo(e, n, this.providerFactory.index, r);
					Ql(i, (o = s.slice(0, a)));
					for (var l = a; l < s.length; l++) o.push(s[l]);
				} else Ql(i, (o = []));
				return o;
			}
			function Ql(t, e) {
				for (var n = 0; n < t.length; n++) e.push((0, t[n])());
				return e;
			}
			var Yl,
				Jl,
				Kl,
				Xl = (function() {
					return function() {};
				})(),
				$l = (function() {
					return function() {};
				})(),
				tu = (function() {
					function t() {}
					return (
						(t.prototype.resolveComponentFactory = function(t) {
							throw (function(t) {
								var e = Error('No component factory found for ' + Pt(t) + '. Did you add it to @NgModule.entryComponents?');
								return (e.ngComponent = t), e;
							})(t);
						}),
						t
					);
				})(),
				eu = (function() {
					function t() {}
					return (t.NULL = new tu()), t;
				})(),
				nu = (function() {
					return function() {};
				})(),
				ru = (function() {
					return function() {};
				})(),
				ou = (function() {
					function t(t, e, n) {
						(this._context = e), (this._componentIndex = n), (this._appRef = null), (this._viewContainerRef = null), (this._tViewNode = null), (this._lView = t);
					}
					return (
						Object.defineProperty(t.prototype, 'rootNodes', {
							get: function() {
								return null == this._lView[Ze]
									? (function t(e, n, r) {
											for (var o = n.child; o; ) {
												var i = xn(o, e);
												if ((i && r.push(i), 4 === o.type)) t(e, o, r);
												else if (1 === o.type) for (var a = Eo(e), s = a[Xe], l = Po(a), u = s.projection[o.projection]; u && l; ) r.push(xn(u, l)), (u = u.next);
												o = o.next;
											}
											return r;
									  })(this._lView, this._lView[Xe], [])
									: [];
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'context', {
							get: function() {
								return this._context ? this._context : this._lookUpContext();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'destroyed', {
							get: function() {
								return 256 == (256 & this._lView[Qe]);
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.destroy = function() {
							if (this._appRef) this._appRef.detachView(this);
							else if (this._viewContainerRef) {
								var t = this._viewContainerRef.indexOf(this);
								t > -1 && this._viewContainerRef.detach(t), (this._viewContainerRef = null);
							}
							Ks(this._lView);
						}),
						(t.prototype.onDestroy = function(t) {
							var e, n;
							(n = t), Is((e = this._lView)).push(n), e[We].firstTemplatePass && Ts(e).push(e[tn].length - 1, null);
						}),
						(t.prototype.markForCheck = function() {
							_s(this._lView);
						}),
						(t.prototype.detach = function() {
							this._lView[Qe] &= -129;
						}),
						(t.prototype.reattach = function() {
							this._lView[Qe] |= 128;
						}),
						(t.prototype.detectChanges = function() {
							Cs(this._lView, this.context);
						}),
						(t.prototype.checkNoChanges = function() {
							!(function(t, e) {
								fr(!0);
								try {
									Cs(t, e);
								} finally {
									fr(!1);
								}
							})(this._lView, this.context);
						}),
						(t.prototype.attachToViewContainerRef = function(t) {
							if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
							this._viewContainerRef = t;
						}),
						(t.prototype.detachFromAppRef = function() {
							var t;
							(this._appRef = null), sl((t = this._lView)[on], 1, t, null, null);
						}),
						(t.prototype.attachToAppRef = function(t) {
							if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
							this._appRef = t;
						}),
						(t.prototype._lookUpContext = function() {
							return (this._context = Po(this._lView)[this._componentIndex]);
						}),
						t
					);
				})(),
				iu = (function(t) {
					function e(e) {
						var n = t.call(this, e, null, -1) || this;
						return (n._view = e), n;
					}
					return (
						o(e, t),
						(e.prototype.detectChanges = function() {
							ks(this._view);
						}),
						(e.prototype.checkNoChanges = function() {
							!(function(t) {
								fr(!0);
								try {
									ks(t);
								} finally {
									fr(!1);
								}
							})(this._view);
						}),
						Object.defineProperty(e.prototype, 'context', {
							get: function() {
								return null;
							},
							enumerable: !0,
							configurable: !0
						}),
						e
					);
				})(ou);
			function au(t, e, n) {
				return (
					Yl ||
						(Yl = (function(t) {
							function e() {
								return (null !== t && t.apply(this, arguments)) || this;
							}
							return o(e, t), e;
						})(t)),
					new Yl(xn(e, n))
				);
			}
			function su(t, e, n, r) {
				if (
					(Jl ||
						(Jl = (function(t) {
							function e(e, n, r, o, i) {
								var a = t.call(this) || this;
								return (a._declarationParentView = e), (a.elementRef = n), (a._tView = r), (a._hostLContainer = o), (a._injectorIndex = i), a;
							}
							return (
								o(e, t),
								(e.prototype.createEmbeddedView = function(t, e, n) {
									var r = this._declarationParentView[Ke];
									r && null == this._hostLContainer[Ke] && (this._hostLContainer[Ke] = r.container());
									var o = (function(t, e, n, r, o) {
										var i = ar(),
											a = rr();
										or(null, !0);
										var s = Ja(n, t, e, 16, null, null);
										return (s[un] = n), r && (s[Ke] = r.createView()), Xa(t, null, -1, s), t.firstTemplatePass && (t.node.injectorIndex = o), or(a, i), s;
									})(this._tView, t, this._declarationParentView, this._hostLContainer[Ke], this._injectorIndex);
									e && Ys(o, e, n), $a(o, this._tView, t);
									var i = new ou(o, t, -1);
									return (i._tViewNode = o[Xe]), i;
								}),
								e
							);
						})(t)),
					0 === n.type)
				) {
					var i = r[n.index];
					return new Jl(r, au(e, n, r), n.tViews, i, n.injectorIndex);
				}
				return null;
			}
			var lu = (function() {
					function t(t) {
						this.nativeElement = t;
					}
					return (
						(t.__NG_ELEMENT_ID__ = function() {
							return uu(t);
						}),
						t
					);
				})(),
				uu = function(t) {
					return au(t, rr(), Bn());
				},
				cu = (function() {
					return function() {};
				})(),
				pu = (function(t) {
					return (t[(t.Important = 1)] = 'Important'), (t[(t.DashCase = 2)] = 'DashCase'), t;
				})({}),
				fu = new ((function() {
					return function(t) {
						(this.full = t),
							(this.major = t.split('.')[0]),
							(this.minor = t.split('.')[1]),
							(this.patch = t
								.split('.')
								.slice(2)
								.join('.'));
					};
				})())('8.1.0'),
				du = (function() {
					function t() {}
					return (
						(t.prototype.supports = function(t) {
							return Us(t);
						}),
						(t.prototype.create = function(t) {
							return new gu(t);
						}),
						t
					);
				})(),
				hu = function(t, e) {
					return e;
				},
				gu = (function() {
					function t(t) {
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
							(this._trackByFn = t || hu);
					}
					return (
						(t.prototype.forEachItem = function(t) {
							var e;
							for (e = this._itHead; null !== e; e = e._next) t(e);
						}),
						(t.prototype.forEachOperation = function(t) {
							for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n; ) {
								var i = !n || (e && e.currentIndex < yu(n, r, o)) ? e : n,
									a = yu(i, r, o),
									s = i.currentIndex;
								if (i === n) r--, (n = n._nextRemoved);
								else if (((e = e._next), null == i.previousIndex)) r++;
								else {
									o || (o = []);
									var l = a - r,
										u = s - r;
									if (l != u) {
										for (var c = 0; c < l; c++) {
											var p = c < o.length ? o[c] : (o[c] = 0),
												f = p + c;
											u <= f && f < l && (o[c] = p + 1);
										}
										o[i.previousIndex] = u - l;
									}
								}
								a !== s && t(i, a, s);
							}
						}),
						(t.prototype.forEachPreviousItem = function(t) {
							var e;
							for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
						}),
						(t.prototype.forEachAddedItem = function(t) {
							var e;
							for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
						}),
						(t.prototype.forEachMovedItem = function(t) {
							var e;
							for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
						}),
						(t.prototype.forEachRemovedItem = function(t) {
							var e;
							for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
						}),
						(t.prototype.forEachIdentityChange = function(t) {
							var e;
							for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e);
						}),
						(t.prototype.diff = function(t) {
							if ((null == t && (t = []), !Us(t))) throw new Error("Error trying to diff '" + Pt(t) + "'. Only arrays and iterables are allowed");
							return this.check(t) ? this : null;
						}),
						(t.prototype.onDestroy = function() {}),
						(t.prototype.check = function(t) {
							var e = this;
							this._reset();
							var n,
								r,
								o,
								i = this._itHead,
								a = !1;
							if (Array.isArray(t)) {
								this.length = t.length;
								for (var s = 0; s < this.length; s++)
									(o = this._trackByFn(s, (r = t[s]))),
										null !== i && Ns(i.trackById, o)
											? (a && (i = this._verifyReinsertion(i, r, o, s)), Ns(i.item, r) || this._addIdentityChange(i, r))
											: ((i = this._mismatch(i, r, o, s)), (a = !0)),
										(i = i._next);
							} else
								(n = 0),
									(function(t, e) {
										if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e(t[n]);
										else for (var r = t[Ds()](), o = void 0; !(o = r.next()).done; ) e(o.value);
									})(t, function(t) {
										(o = e._trackByFn(n, t)),
											null !== i && Ns(i.trackById, o)
												? (a && (i = e._verifyReinsertion(i, t, o, n)), Ns(i.item, t) || e._addIdentityChange(i, t))
												: ((i = e._mismatch(i, t, o, n)), (a = !0)),
											(i = i._next),
											n++;
									}),
									(this.length = n);
							return this._truncate(i), (this.collection = t), this.isDirty;
						}),
						Object.defineProperty(t.prototype, 'isDirty', {
							get: function() {
								return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype._reset = function() {
							if (this.isDirty) {
								var t = void 0,
									e = void 0;
								for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
								for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
								for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) (t.previousIndex = t.currentIndex), (e = t._nextMoved);
								(this._movesHead = this._movesTail = null), (this._removalsHead = this._removalsTail = null), (this._identityChangesHead = this._identityChangesTail = null);
							}
						}),
						(t.prototype._mismatch = function(t, e, n, r) {
							var o;
							return (
								null === t ? (o = this._itTail) : ((o = t._prev), this._remove(t)),
								null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
									? (Ns(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r))
									: null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
									? (Ns(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r))
									: (t = this._addAfter(new mu(e, n), o, r)),
								t
							);
						}),
						(t.prototype._verifyReinsertion = function(t, e, n, r) {
							var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
							return null !== o ? (t = this._reinsertAfter(o, t._prev, r)) : t.currentIndex != r && ((t.currentIndex = r), this._addToMoves(t, r)), t;
						}),
						(t.prototype._truncate = function(t) {
							for (; null !== t; ) {
								var e = t._next;
								this._addToRemovals(this._unlink(t)), (t = e);
							}
							null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
								null !== this._additionsTail && (this._additionsTail._nextAdded = null),
								null !== this._movesTail && (this._movesTail._nextMoved = null),
								null !== this._itTail && (this._itTail._next = null),
								null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
								null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
						}),
						(t.prototype._reinsertAfter = function(t, e, n) {
							null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
							var r = t._prevRemoved,
								o = t._nextRemoved;
							return (
								null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
								null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
								this._insertAfter(t, e, n),
								this._addToMoves(t, n),
								t
							);
						}),
						(t.prototype._moveAfter = function(t, e, n) {
							return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
						}),
						(t.prototype._addAfter = function(t, e, n) {
							return this._insertAfter(t, e, n), (this._additionsTail = null === this._additionsTail ? (this._additionsHead = t) : (this._additionsTail._nextAdded = t)), t;
						}),
						(t.prototype._insertAfter = function(t, e, n) {
							var r = null === e ? this._itHead : e._next;
							return (
								(t._next = r),
								(t._prev = e),
								null === r ? (this._itTail = t) : (r._prev = t),
								null === e ? (this._itHead = t) : (e._next = t),
								null === this._linkedRecords && (this._linkedRecords = new vu()),
								this._linkedRecords.put(t),
								(t.currentIndex = n),
								t
							);
						}),
						(t.prototype._remove = function(t) {
							return this._addToRemovals(this._unlink(t));
						}),
						(t.prototype._unlink = function(t) {
							null !== this._linkedRecords && this._linkedRecords.remove(t);
							var e = t._prev,
								n = t._next;
							return null === e ? (this._itHead = n) : (e._next = n), null === n ? (this._itTail = e) : (n._prev = e), t;
						}),
						(t.prototype._addToMoves = function(t, e) {
							return t.previousIndex === e ? t : ((this._movesTail = null === this._movesTail ? (this._movesHead = t) : (this._movesTail._nextMoved = t)), t);
						}),
						(t.prototype._addToRemovals = function(t) {
							return (
								null === this._unlinkedRecords && (this._unlinkedRecords = new vu()),
								this._unlinkedRecords.put(t),
								(t.currentIndex = null),
								(t._nextRemoved = null),
								null === this._removalsTail
									? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
									: ((t._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = t)),
								t
							);
						}),
						(t.prototype._addIdentityChange = function(t, e) {
							return (
								(t.item = e),
								(this._identityChangesTail = null === this._identityChangesTail ? (this._identityChangesHead = t) : (this._identityChangesTail._nextIdentityChange = t)),
								t
							);
						}),
						t
					);
				})(),
				mu = (function() {
					return function(t, e) {
						(this.item = t),
							(this.trackById = e),
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
				bu = (function() {
					function t() {
						(this._head = null), (this._tail = null);
					}
					return (
						(t.prototype.add = function(t) {
							null === this._head
								? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
								: ((this._tail._nextDup = t), (t._prevDup = this._tail), (t._nextDup = null), (this._tail = t));
						}),
						(t.prototype.get = function(t, e) {
							var n;
							for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && Ns(n.trackById, t)) return n;
							return null;
						}),
						(t.prototype.remove = function(t) {
							var e = t._prevDup,
								n = t._nextDup;
							return null === e ? (this._head = n) : (e._nextDup = n), null === n ? (this._tail = e) : (n._prevDup = e), null === this._head;
						}),
						t
					);
				})(),
				vu = (function() {
					function t() {
						this.map = new Map();
					}
					return (
						(t.prototype.put = function(t) {
							var e = t.trackById,
								n = this.map.get(e);
							n || ((n = new bu()), this.map.set(e, n)), n.add(t);
						}),
						(t.prototype.get = function(t, e) {
							var n = this.map.get(t);
							return n ? n.get(t, e) : null;
						}),
						(t.prototype.remove = function(t) {
							var e = t.trackById;
							return this.map.get(e).remove(t) && this.map.delete(e), t;
						}),
						Object.defineProperty(t.prototype, 'isEmpty', {
							get: function() {
								return 0 === this.map.size;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.clear = function() {
							this.map.clear();
						}),
						t
					);
				})();
			function yu(t, e, n) {
				var r = t.previousIndex;
				if (null === r) return r;
				var o = 0;
				return n && r < n.length && (o = n[r]), r + e + o;
			}
			var wu = (function() {
					function t() {}
					return (
						(t.prototype.supports = function(t) {
							return t instanceof Map || Ls(t);
						}),
						(t.prototype.create = function() {
							return new _u();
						}),
						t
					);
				})(),
				_u = (function() {
					function t() {
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
						Object.defineProperty(t.prototype, 'isDirty', {
							get: function() {
								return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.forEachItem = function(t) {
							var e;
							for (e = this._mapHead; null !== e; e = e._next) t(e);
						}),
						(t.prototype.forEachPreviousItem = function(t) {
							var e;
							for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
						}),
						(t.prototype.forEachChangedItem = function(t) {
							var e;
							for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
						}),
						(t.prototype.forEachAddedItem = function(t) {
							var e;
							for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
						}),
						(t.prototype.forEachRemovedItem = function(t) {
							var e;
							for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
						}),
						(t.prototype.diff = function(t) {
							if (t) {
								if (!(t instanceof Map || Ls(t))) throw new Error("Error trying to diff '" + Pt(t) + "'. Only maps and objects are allowed");
							} else t = new Map();
							return this.check(t) ? this : null;
						}),
						(t.prototype.onDestroy = function() {}),
						(t.prototype.check = function(t) {
							var e = this;
							this._reset();
							var n = this._mapHead;
							if (
								((this._appendAfter = null),
								this._forEach(t, function(t, r) {
									if (n && n.key === r) e._maybeAddToChanges(n, t), (e._appendAfter = n), (n = n._next);
									else {
										var o = e._getOrCreateRecordForKey(r, t);
										n = e._insertBeforeOrAppend(n, o);
									}
								}),
								n)
							) {
								n._prev && (n._prev._next = null), (this._removalsHead = n);
								for (var r = n; null !== r; r = r._nextRemoved)
									r === this._mapHead && (this._mapHead = null),
										this._records.delete(r.key),
										(r._nextRemoved = r._next),
										(r.previousValue = r.currentValue),
										(r.currentValue = null),
										(r._prev = null),
										(r._next = null);
							}
							return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
						}),
						(t.prototype._insertBeforeOrAppend = function(t, e) {
							if (t) {
								var n = t._prev;
								return (e._next = t), (e._prev = n), (t._prev = e), n && (n._next = e), t === this._mapHead && (this._mapHead = e), (this._appendAfter = t), t;
							}
							return this._appendAfter ? ((this._appendAfter._next = e), (e._prev = this._appendAfter)) : (this._mapHead = e), (this._appendAfter = e), null;
						}),
						(t.prototype._getOrCreateRecordForKey = function(t, e) {
							if (this._records.has(t)) {
								var n = this._records.get(t);
								this._maybeAddToChanges(n, e);
								var r = n._prev,
									o = n._next;
								return r && (r._next = o), o && (o._prev = r), (n._next = null), (n._prev = null), n;
							}
							var i = new xu(t);
							return this._records.set(t, i), (i.currentValue = e), this._addToAdditions(i), i;
						}),
						(t.prototype._reset = function() {
							if (this.isDirty) {
								var t = void 0;
								for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
								for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
								for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
								(this._changesHead = this._changesTail = null), (this._additionsHead = this._additionsTail = null), (this._removalsHead = null);
							}
						}),
						(t.prototype._maybeAddToChanges = function(t, e) {
							Ns(e, t.currentValue) || ((t.previousValue = t.currentValue), (t.currentValue = e), this._addToChanges(t));
						}),
						(t.prototype._addToAdditions = function(t) {
							null === this._additionsHead ? (this._additionsHead = this._additionsTail = t) : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
						}),
						(t.prototype._addToChanges = function(t) {
							null === this._changesHead ? (this._changesHead = this._changesTail = t) : ((this._changesTail._nextChanged = t), (this._changesTail = t));
						}),
						(t.prototype._forEach = function(t, e) {
							t instanceof Map
								? t.forEach(e)
								: Object.keys(t).forEach(function(n) {
										return e(t[n], n);
								  });
						}),
						t
					);
				})(),
				xu = (function() {
					return function(t) {
						(this.key = t),
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
				Cu = (function() {
					function t(t) {
						this.factories = t;
					}
					return (
						(t.create = function(e, n) {
							if (null != n) {
								var r = n.factories.slice();
								e = e.concat(r);
							}
							return new t(e);
						}),
						(t.extend = function(e) {
							return {
								provide: t,
								useFactory: function(n) {
									if (!n) throw new Error('Cannot extend IterableDiffers without a parent injector');
									return t.create(e, n);
								},
								deps: [[t, new mt(), new ht()]]
							};
						}),
						(t.prototype.find = function(t) {
							var e,
								n = this.factories.find(function(e) {
									return e.supports(t);
								});
							if (null != n) return n;
							throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'");
						}),
						(t.ngInjectableDef = wt({
							token: t,
							providedIn: 'root',
							factory: function() {
								return new t([new du()]);
							}
						})),
						t
					);
				})(),
				ku = (function() {
					function t(t) {
						this.factories = t;
					}
					return (
						(t.create = function(e, n) {
							if (n) {
								var r = n.factories.slice();
								e = e.concat(r);
							}
							return new t(e);
						}),
						(t.extend = function(e) {
							return {
								provide: t,
								useFactory: function(n) {
									if (!n) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
									return t.create(e, n);
								},
								deps: [[t, new mt(), new ht()]]
							};
						}),
						(t.prototype.find = function(t) {
							var e = this.factories.find(function(e) {
								return e.supports(t);
							});
							if (e) return e;
							throw new Error("Cannot find a differ supporting object '" + t + "'");
						}),
						(t.ngInjectableDef = wt({
							token: t,
							providedIn: 'root',
							factory: function() {
								return new t([new wu()]);
							}
						})),
						t
					);
				})(),
				Su = (function() {
					function t() {}
					return (
						(t.__NG_ELEMENT_ID__ = function() {
							return Pu();
						}),
						t
					);
				})(),
				Pu = function() {
					return (function(t, e, n) {
						if (Pn(t)) {
							var r = t.directiveStart,
								o = kn(t.index, e);
							return new ou(o, null, r);
						}
						if (3 === t.type || 0 === t.type || 4 === t.type) {
							var i = Eo(e);
							return new ou(i, i[en], -1);
						}
						return null;
					})(rr(), Bn());
				},
				Eu = [new wu()],
				Ou = new Cu([new du()]),
				Iu = new ku(Eu),
				Tu = (function() {
					function t() {}
					return (
						(t.__NG_ELEMENT_ID__ = function() {
							return Mu(t, lu);
						}),
						t
					);
				})(),
				Mu = function(t, e) {
					return su(t, e, rr(), Bn());
				},
				Au = (function() {
					function t() {}
					return (
						(t.__NG_ELEMENT_ID__ = function() {
							return ju(t, lu);
						}),
						t
					);
				})(),
				ju = function(t, e) {
					return (function(t, e, n, r) {
						var i;
						Kl ||
							(Kl = (function(t) {
								function n(e, n, r) {
									var o = t.call(this) || this;
									return (o._lContainer = e), (o._hostTNode = n), (o._hostView = r), o;
								}
								return (
									o(n, t),
									Object.defineProperty(n.prototype, 'element', {
										get: function() {
											return au(e, this._hostTNode, this._hostView);
										},
										enumerable: !0,
										configurable: !0
									}),
									Object.defineProperty(n.prototype, 'injector', {
										get: function() {
											return new Go(this._hostTNode, this._hostView);
										},
										enumerable: !0,
										configurable: !0
									}),
									Object.defineProperty(n.prototype, 'parentInjector', {
										get: function() {
											var t = No(this._hostTNode, this._hostView),
												e = So(t, this._hostView),
												n = (function(t, e, n) {
													if (n.parent && -1 !== n.parent.injectorIndex) {
														for (var r = n.parent.injectorIndex, o = n.parent; null != o.parent && r == o.injectorIndex; ) o = o.parent;
														return o;
													}
													for (var i = ko(t), a = e, s = e[Xe]; i > 1; ) (s = (a = a[un])[Xe]), i--;
													return s;
												})(t, this._hostView, this._hostTNode);
											return xo(t) && null != n ? new Go(n, e) : new Go(null, this._hostView);
										},
										enumerable: !0,
										configurable: !0
									}),
									(n.prototype.clear = function() {
										for (; this.length; ) this.remove(0);
									}),
									(n.prototype.get = function(t) {
										return (null !== this._lContainer[8] && this._lContainer[8][t]) || null;
									}),
									Object.defineProperty(n.prototype, 'length', {
										get: function() {
											var t = this._lContainer.length - gn;
											return t > 0 ? t : 0;
										},
										enumerable: !0,
										configurable: !0
									}),
									(n.prototype.createEmbeddedView = function(t, e, n) {
										this.allocateContainerIfNeeded();
										var r = this._adjustIndex(n),
											o = t.createEmbeddedView(e || {}, this._lContainer, r);
										return o.attachToViewContainerRef(this), this._lContainer[8].splice(r, 0, o), o;
									}),
									(n.prototype.createComponent = function(t, e, n, r, o) {
										var i = n || this.parentInjector;
										!o && null == t.ngModule && i && (o = i.get(nu, null));
										var a = t.create(i, r, void 0, o);
										return this.insert(a.hostView, e), a;
									}),
									(n.prototype.insert = function(t, e) {
										if (t.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
										this.allocateContainerIfNeeded();
										var n = t._lView,
											r = this._adjustIndex(e);
										return Tn(n)
											? this.move(t, r)
											: (Ys(n, this._lContainer, r), Qs(n, !0, ol(r, this._lContainer)), t.attachToViewContainerRef(this), this._lContainer[8].splice(r, 0, t), t);
									}),
									(n.prototype.move = function(t, e) {
										if (t.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
										var n = this.indexOf(t);
										return -1 !== n && this.detach(n), this.insert(t, e), t;
									}),
									(n.prototype.indexOf = function(t) {
										return null !== this._lContainer[8] ? this._lContainer[8].indexOf(t) : 0;
									}),
									(n.prototype.remove = function(t) {
										this.allocateContainerIfNeeded();
										var e = this._adjustIndex(t, -1);
										(function(t, n) {
											var r = Js(t, e);
											r && Ks(r);
										})(this._lContainer),
											this._lContainer[8].splice(e, 1);
									}),
									(n.prototype.detach = function(t) {
										this.allocateContainerIfNeeded();
										var e = this._adjustIndex(t, -1),
											n = Js(this._lContainer, e);
										return n && null != this._lContainer[8].splice(e, 1)[0] ? new ou(n, n[en], -1) : null;
									}),
									(n.prototype._adjustIndex = function(t, e) {
										return void 0 === e && (e = 0), null == t ? this.length + e : t;
									}),
									(n.prototype.allocateContainerIfNeeded = function() {
										null === this._lContainer[8] && (this._lContainer[8] = []);
									}),
									n
								);
							})(t));
						var a = r[n.index];
						if (yn(a)) (i = a)[dn] = -1;
						else {
							var s;
							if (((s = 4 === n.type ? bn(a) : r[on].createComment('')), On(r))) {
								var l = r[on],
									u = xn(n, r);
								tl(
									l,
									nl(l, u),
									s,
									(function(t, e) {
										return lo(t) ? t.nextSibling(e) : e.nextSibling;
									})(l, u)
								);
							} else rl(s, n, r);
							(r[n.index] = i = vs(a, r, s, n, !0)), ws(r, i);
						}
						return new Kl(i, n, r);
					})(t, e, rr(), Bn());
				},
				Ru = {},
				Du = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (n.ngModule = e), n;
					}
					return (
						o(e, t),
						(e.prototype.resolveComponentFactory = function(t) {
							var e = He(t);
							return new Hu(e, this.ngModule);
						}),
						e
					);
				})(eu);
			function Nu(t) {
				var e = [];
				for (var n in t) t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
				return e;
			}
			var Uu = new Nt('ROOT_CONTEXT_TOKEN', {
					providedIn: 'root',
					factory: function() {
						return Ml(Qt(Lu));
					}
				}),
				Lu = new Nt('SCHEDULER_TOKEN', {
					providedIn: 'root',
					factory: function() {
						return Be;
					}
				}),
				Hu = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						return (
							(r.componentDef = e),
							(r.ngModule = n),
							(r.componentType = e.type),
							(r.selector = e.selectors[0][0]),
							(r.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : []),
							(r.isBoundToModule = !!n),
							r
						);
					}
					return (
						o(e, t),
						Object.defineProperty(e.prototype, 'inputs', {
							get: function() {
								return Nu(this.componentDef.inputs);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'outputs', {
							get: function() {
								return Nu(this.componentDef.outputs);
							},
							enumerable: !0,
							configurable: !0
						}),
						(e.prototype.create = function(t, e, n, r) {
							var o,
								i,
								a = void 0 === n,
								s = (r = r || this.ngModule)
									? (function(t, e) {
											return {
												get: function(n, r, o) {
													var i = t.get(n, Ru, o);
													return i !== Ru || r === Ru ? i : e.get(n, r, o);
												}
											};
									  })(t, r.injector)
									: t,
								l = s.get(cu, uo),
								u = s.get(Xr, null),
								c = a
									? Ya(this.selector, l.createRenderer(null, this.componentDef))
									: ((o = n), (i = l.createRenderer(null, null)), 'string' == typeof o ? (lo(i) ? i.selectRootElement(o) : i.querySelector(o)) : o),
								p = this.componentDef.onPush ? 576 : 528,
								f = 'string' == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
								d = a || f ? Ml() : s.get(Uu),
								h = l.createRenderer(c, this.componentDef);
							n && c && (lo(h) ? h.setAttribute(c, 'ng-version', fu.full) : c.setAttribute('ng-version', fu.full));
							var g,
								m,
								b = Ja(null, is(-1, null, 1, 0, null, null, null, null), d, p, null, null, l, h, u, s),
								v = yr(b, null),
								y = !1;
							try {
								var w = (function(t, e, n, r, o, i) {
									(Gn = !1), (qn = null), (Un = 0), (zn = !0);
									var a = n[We];
									n[0 + pn] = c;
									var s = Ka(a, null, 0, 3, null, null),
										l = Ja(n, os(e), null, e.onPush ? 64 : 16, n[pn], s, r, o, void 0);
									return a.firstTemplatePass && (Uo(jo(s, n), n, e.type), (s.flags = 1), gs(s, n.length, 1), ds(s)), (n[pn] = l);
								})(0, this.componentDef, b, l, h);
								(m = Cn(0, b)),
									e &&
										(m.projection = e.map(function(t) {
											return Array.from(t);
										})),
									(g = (function(t, e, n, r, o) {
										var i = n[We],
											a = (function(t, e, n) {
												var r = rr();
												t.firstTemplatePass && (n.providersResolver && n.providersResolver(n), cs(t, r, 1), ms(t, e, n, n.factory));
												var o = Fo(t.data, e, e.length - 1, r);
												return fs(e, r, o), o;
											})(i, n, e);
										r.components.push(a),
											(t[en] = a),
											o &&
												o.forEach(function(t) {
													return t(a, e);
												}),
											e.contentQueries && e.contentQueries(1, a, n.length - 1);
										var s = rr();
										if (
											(i.firstTemplatePass &&
												e.hostBindings &&
												(Kn(s.index - pn), us(e, i.expandoInstructions, a, s, i.firstTemplatePass), s.onElementCreationFns && js(s), Kn(null)),
											s.stylingTemplate)
										) {
											var l = t[Ze];
											$o(l, s.stylingTemplate, t[on]), ti(l, s.stylingTemplate, t[on]);
										}
										return a;
									})(w, this.componentDef, b, d, [Al])),
									ws(b, w),
									Wa(b),
									(y = !0);
							} finally {
								wr(v, y);
							}
							var _ = new zu(this.componentType, g, au(lu, m, b), b, m);
							return a && (_.hostView._tViewNode.child = m), _;
						}),
						e
					);
				})($l),
				zu = (function(t) {
					function e(e, n, r, o, i) {
						var a = t.call(this) || this;
						return (
							(a.location = r),
							(a._rootLView = o),
							(a._tNode = i),
							(a.destroyCbs = []),
							(a.instance = n),
							(a.hostView = a.changeDetectorRef = new iu(o)),
							(a.hostView._tViewNode = Xa(o[We], null, -1, o)),
							(a.componentType = e),
							a
						);
					}
					return (
						o(e, t),
						Object.defineProperty(e.prototype, 'injector', {
							get: function() {
								return new Go(this._tNode, this._rootLView);
							},
							enumerable: !0,
							configurable: !0
						}),
						(e.prototype.destroy = function() {
							this.destroyCbs &&
								(this.destroyCbs.forEach(function(t) {
									return t();
								}),
								(this.destroyCbs = null),
								!this.hostView.destroyed && this.hostView.destroy());
						}),
						(e.prototype.onDestroy = function(t) {
							this.destroyCbs && this.destroyCbs.push(t);
						}),
						e
					);
				})(Xl),
				Vu = {},
				Fu = (function(t) {
					return (
						(t[(t.LocaleId = 0)] = 'LocaleId'),
						(t[(t.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
						(t[(t.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
						(t[(t.DaysFormat = 3)] = 'DaysFormat'),
						(t[(t.DaysStandalone = 4)] = 'DaysStandalone'),
						(t[(t.MonthsFormat = 5)] = 'MonthsFormat'),
						(t[(t.MonthsStandalone = 6)] = 'MonthsStandalone'),
						(t[(t.Eras = 7)] = 'Eras'),
						(t[(t.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
						(t[(t.WeekendRange = 9)] = 'WeekendRange'),
						(t[(t.DateFormat = 10)] = 'DateFormat'),
						(t[(t.TimeFormat = 11)] = 'TimeFormat'),
						(t[(t.DateTimeFormat = 12)] = 'DateTimeFormat'),
						(t[(t.NumberSymbols = 13)] = 'NumberSymbols'),
						(t[(t.NumberFormats = 14)] = 'NumberFormats'),
						(t[(t.CurrencySymbol = 15)] = 'CurrencySymbol'),
						(t[(t.CurrencyName = 16)] = 'CurrencyName'),
						(t[(t.Currencies = 17)] = 'Currencies'),
						(t[(t.PluralCase = 18)] = 'PluralCase'),
						(t[(t.ExtraData = 19)] = 'ExtraData'),
						t
					);
				})({}),
				Bu = void 0,
				qu = [
					'en',
					[['a', 'p'], ['AM', 'PM'], Bu],
					[['AM', 'PM'], Bu, Bu],
					[
						['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
						['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
					],
					Bu,
					[
						['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
						['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
					],
					Bu,
					[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
					0,
					[6, 0],
					['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
					['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
					['{1}, {0}', Bu, "{1} 'at' {0}", Bu],
					['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
					['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
					'$',
					'US Dollar',
					{},
					function(t) {
						var e = Math.floor(Math.abs(t)),
							n = t.toString().replace(/^[^.]*\.?/, '').length;
						return 1 === e && 0 === n ? 1 : 5;
					}
				];
			function Gu(t) {
				t.toLowerCase().replace(/_/g, '-');
			}
			var Zu = new Map(),
				Wu = { provide: eu, useClass: Du, deps: [nu] },
				Qu = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						(r._parent = n), (r._bootstrapComponents = []), (r.injector = r), (r.destroyCbs = []);
						var o = ze(e),
							i = e[Te] || null;
						return i && Gu(i), (r._bootstrapComponents = Ge(o.bootstrap)), (r._r3Injector = ae(e, n, [{ provide: nu, useValue: r }, Wu], Pt(e))), (r.instance = r.get(e)), r;
					}
					return (
						o(e, t),
						(e.prototype.get = function(t, e, n) {
							return void 0 === e && (e = ge.THROW_IF_NOT_FOUND), void 0 === n && (n = bt.Default), t === ge || t === nu || t === Ut ? this : this._r3Injector.get(t, e, n);
						}),
						Object.defineProperty(e.prototype, 'componentFactoryResolver', {
							get: function() {
								return this.get(eu);
							},
							enumerable: !0,
							configurable: !0
						}),
						(e.prototype.destroy = function() {
							var t = this._r3Injector;
							!t.destroyed && t.destroy(),
								this.destroyCbs.forEach(function(t) {
									return t();
								}),
								(this.destroyCbs = null);
						}),
						(e.prototype.onDestroy = function(t) {
							this.destroyCbs.push(t);
						}),
						e
					);
				})(nu),
				Yu = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (
							(n.moduleType = e),
							null !== ze(e) &&
								(function t(e) {
									if (null !== e.ngModuleDef.id) {
										var n = e.ngModuleDef.id;
										(function(t, n, r) {
											if (n && n !== e) throw new Error('Duplicate module registered for ' + t + ' - ' + Pt(n) + ' vs ' + Pt(n.name));
										})(n, Zu.get(n)),
											Zu.set(n, e);
									}
									var r = e.ngModuleDef.imports;
									r instanceof Function && (r = r()),
										r &&
											r.forEach(function(e) {
												return t(e);
											});
								})(e),
							n
						);
					}
					return (
						o(e, t),
						(e.prototype.create = function(t) {
							return new Qu(this.moduleType, t);
						}),
						e
					);
				})(ru);
			function Ju(t, e, n, r) {
				var o = Bn(),
					i = hr() + t;
				return Vs(o, i, n) ? Hs(o, i + 1, r ? e.call(r, n) : e(n)) : zs(o, i + 1);
			}
			function Ku(t, e, n, r, o) {
				var i = hr() + t,
					a = Bn();
				return (function(t, e, n, r) {
					var o = Vs(t, e, n);
					return Vs(t, e + 1, r) || o;
				})(a, i, n, r)
					? Hs(a, i + 2, o ? e.call(o, n, r) : e(n, r))
					: zs(a, i + 2);
			}
			var Xu = (function(t) {
				function e(e) {
					void 0 === e && (e = !1);
					var n = t.call(this) || this;
					return (n.__isAsync = e), n;
				}
				return (
					o(e, t),
					(e.prototype.emit = function(e) {
						t.prototype.next.call(this, e);
					}),
					(e.prototype.subscribe = function(e, n, r) {
						var o,
							i = function(t) {
								return null;
							},
							a = function() {
								return null;
							};
						e && 'object' == typeof e
							? ((o = this.__isAsync
									? function(t) {
											setTimeout(function() {
												return e.next(t);
											});
									  }
									: function(t) {
											e.next(t);
									  }),
							  e.error &&
									(i = this.__isAsync
										? function(t) {
												setTimeout(function() {
													return e.error(t);
												});
										  }
										: function(t) {
												e.error(t);
										  }),
							  e.complete &&
									(a = this.__isAsync
										? function() {
												setTimeout(function() {
													return e.complete();
												});
										  }
										: function() {
												e.complete();
										  }))
							: ((o = this.__isAsync
									? function(t) {
											setTimeout(function() {
												return e(t);
											});
									  }
									: function(t) {
											e(t);
									  }),
							  n &&
									(i = this.__isAsync
										? function(t) {
												setTimeout(function() {
													return n(t);
												});
										  }
										: function(t) {
												n(t);
										  }),
							  r &&
									(a = this.__isAsync
										? function() {
												setTimeout(function() {
													return r();
												});
										  }
										: function() {
												r();
										  }));
						var s = t.prototype.subscribe.call(this, o, i, a);
						return e instanceof m && e.add(s), s;
					}),
					e
				);
			})(D);
			function $u() {
				return this._results[Ds()]();
			}
			var tc = (function() {
					function t() {
						(this.dirty = !0), (this._results = []), (this.changes = new Xu()), (this.length = 0);
						var e = Ds(),
							n = t.prototype;
						n[e] || (n[e] = $u);
					}
					return (
						(t.prototype.map = function(t) {
							return this._results.map(t);
						}),
						(t.prototype.filter = function(t) {
							return this._results.filter(t);
						}),
						(t.prototype.find = function(t) {
							return this._results.find(t);
						}),
						(t.prototype.reduce = function(t, e) {
							return this._results.reduce(t, e);
						}),
						(t.prototype.forEach = function(t) {
							this._results.forEach(t);
						}),
						(t.prototype.some = function(t) {
							return this._results.some(t);
						}),
						(t.prototype.toArray = function() {
							return this._results.slice();
						}),
						(t.prototype.toString = function() {
							return this._results.toString();
						}),
						(t.prototype.reset = function(t) {
							(this._results = (function t(e, n) {
								void 0 === n && (n = e);
								for (var r = 0; r < e.length; r++) {
									var o = e[r];
									Array.isArray(o) ? (n === e && (n = e.slice(0, r)), t(o, n)) : n !== e && n.push(o);
								}
								return n;
							})(t)),
								(this.dirty = !1),
								(this.length = this._results.length),
								(this.last = this._results[this.length - 1]),
								(this.first = this._results[0]);
						}),
						(t.prototype.notifyOnChanges = function() {
							this.changes.emit(this);
						}),
						(t.prototype.setDirty = function() {
							this.dirty = !0;
						}),
						(t.prototype.destroy = function() {
							this.changes.complete(), this.changes.unsubscribe();
						}),
						t
					);
				})(),
				ec = (function() {
					return function(t, e, n, r, o) {
						(this.next = t), (this.list = e), (this.predicate = n), (this.values = r), (this.containerValues = o);
					};
				})(),
				nc = (function() {
					function t(t, e, n, r) {
						void 0 === r && (r = -1), (this.parent = t), (this.shallow = e), (this.deep = n), (this.nodeIndex = r);
					}
					return (
						(t.prototype.track = function(t, e, n, r) {
							n ? (this.deep = dc(this.deep, t, e, null != r ? r : null)) : (this.shallow = dc(this.shallow, t, e, null != r ? r : null));
						}),
						(t.prototype.clone = function(e) {
							return null !== this.shallow || Sn(e) ? new t(this, null, this.deep, e.index) : this;
						}),
						(t.prototype.container = function() {
							var e = rc(this.shallow),
								n = rc(this.deep);
							return e || n ? new t(this, e, n) : null;
						}),
						(t.prototype.createView = function() {
							var e = oc(this.shallow),
								n = oc(this.deep);
							return e || n ? new t(this, e, n) : null;
						}),
						(t.prototype.insertView = function(t) {
							ic(t, this.shallow), ic(t, this.deep);
						}),
						(t.prototype.addNode = function(t) {
							pc(this.deep, t, !1), pc(this.shallow, t, !1);
						}),
						(t.prototype.insertNodeBeforeViews = function(t) {
							pc(this.deep, t, !0), pc(this.shallow, t, !0);
						}),
						(t.prototype.removeView = function() {
							ac(this.shallow), ac(this.deep);
						}),
						t
					);
				})();
			function rc(t) {
				for (var e = null; t; ) {
					var n = [];
					t.values.push(n), (e = new ec(e, t.list, t.predicate, n, null)), (t = t.next);
				}
				return e;
			}
			function oc(t) {
				for (var e = null; t; ) (e = new ec(e, t.list, t.predicate, [], t.values)), (t = t.next);
				return e;
			}
			function ic(t, e) {
				for (; e; ) e.containerValues.splice(t, 0, e.values), e.values.length && e.list.setDirty(), (e = e.next);
			}
			function ac(t) {
				for (; t; ) {
					var e = t.containerValues,
						n = e.indexOf(t.values);
					e.splice(n, 1)[0].length && t.list.setDirty(), (t = t.next);
				}
			}
			function sc(t, e) {
				var n = t.localNames;
				if (n) for (var r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
				return null;
			}
			function lc(t, e, n) {
				var r = t[Me];
				if ('function' == typeof r) return r();
				var o = n[We],
					i = Vo(e, o, t, !1, !1);
				return null !== i ? Fo(o.data, n, i, e) : null;
			}
			function uc(t, e, n, r) {
				var o = t[Me]();
				return r ? (o ? lc(r, e, n) : null) : o;
			}
			function cc(t, e, n, r) {
				return n
					? lc(n, t, e)
					: r > -1
					? Fo(e[We].data, e, r, t)
					: (function(t, e) {
							return 3 === t.type || 4 === t.type ? au(lu, t, e) : 0 === t.type ? su(Tu, lu, t, e) : null;
					  })(t, e);
			}
			function pc(t, e, n) {
				for (var r = Bn(), o = r[We]; t; ) {
					var i = t.predicate,
						a = i.type;
					if (a) {
						var s = null;
						a === Tu ? (s = uc(a, e, r, i.read)) : null !== (c = Vo(e, o, a, !1, !1)) && (s = cc(e, r, i.read, c)), null !== s && fc(t, s, n);
					} else
						for (var l = i.selector, u = 0; u < l.length; u++) {
							var c;
							null !== (c = sc(e, l[u])) && null !== (s = cc(e, r, i.read, c)) && fc(t, s, n);
						}
					t = t.next;
				}
			}
			function fc(t, e, n) {
				n ? t.values.unshift(e) : t.values.push(e), t.list.setDirty();
			}
			function dc(t, e, n, r) {
				return new ec(
					t,
					e,
					(function(t, e) {
						var n = Array.isArray(t);
						return { type: n ? null : t, selector: n ? t : null, read: e };
					})(n, r),
					e._valuesTree,
					null
				);
			}
			function hc(t) {
				var e = t,
					n = lr();
				return !(!t.dirty || n !== e._static || (t.reset(e._valuesTree || []), t.notifyOnChanges(), 0));
			}
			function gc(t, e, n, r, o, i) {
				e.firstTemplatePass && e.expandoStartIndex++;
				var a = br(),
					s = (function(t, e, n, r, o, i) {
						var a = new tc(),
							s = t[Ke] || (t[Ke] = new nc(null, null, null, -1));
						return (
							(a._valuesTree = []),
							(a._static = o),
							s.track(a, e, n, r),
							(function(t, e, n) {
								var r = Is(t);
								r.push(e), t[We].firstTemplatePass && Ts(t).push(n, r.length - 1);
							})(t, a, a.destroy),
							a
						);
					})(t, n, r, o, i);
				return (
					(function(t, e) {
						var n = Bn(),
							r = n[We],
							o = t + pn;
						o >= r.data.length && ((r.data[o] = null), (r.blueprint[o] = null)), (n[o] = e);
					})(a - pn, s),
					vr(a + 1),
					s
				);
			}
			function mc() {
				var t = br();
				return (
					vr(t + 1),
					(function(t, e) {
						return t[e + pn];
					})(Bn(), t - pn)
				);
			}
			var bc = new Nt('Application Initializer'),
				vc = (function() {
					function t(t) {
						var e = this;
						(this.appInits = t),
							(this.initialized = !1),
							(this.done = !1),
							(this.donePromise = new Promise(function(t, n) {
								(e.resolve = t), (e.reject = n);
							}));
					}
					return (
						(t.prototype.runInitializers = function() {
							var t = this;
							if (!this.initialized) {
								var e = [],
									n = function() {
										(t.done = !0), t.resolve();
									};
								if (this.appInits)
									for (var r = 0; r < this.appInits.length; r++) {
										var o = this.appInits[r]();
										_l(o) && e.push(o);
									}
								Promise.all(e)
									.then(function() {
										n();
									})
									.catch(function(e) {
										t.reject(e);
									}),
									0 === e.length && n(),
									(this.initialized = !0);
							}
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)(Qt(bc, 8));
							},
							providedIn: null
						})),
						t
					);
				})(),
				yc = new Nt('AppId'),
				wc = {
					provide: yc,
					useFactory: function() {
						return '' + _c() + _c() + _c();
					},
					deps: []
				};
			function _c() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			var xc,
				Cc,
				kc = new Nt('Platform Initializer'),
				Sc = new Nt('Platform ID'),
				Pc = new Nt('appBootstrapListener'),
				Ec = (function() {
					function t() {}
					return (
						(t.prototype.log = function(t) {
							console.log(t);
						}),
						(t.prototype.warn = function(t) {
							console.warn(t);
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				Oc = new Nt('LocaleId'),
				Ic = (function() {
					return function(t, e) {
						(this.ngModuleFactory = t), (this.componentFactories = e);
					};
				})(),
				Tc = function(t) {
					return new Yu(t);
				},
				Mc = Tc,
				Ac = function(t) {
					return Promise.resolve(Tc(t));
				},
				jc = function(t) {
					var e = Tc(t),
						n = Ge(ze(t).declarations).reduce(function(t, e) {
							var n = He(e);
							return n && t.push(new Hu(n)), t;
						}, []);
					return new Ic(e, n);
				},
				Rc = jc,
				Dc = function(t) {
					return Promise.resolve(jc(t));
				},
				Nc = (function() {
					function t() {
						(this.compileModuleSync = Mc), (this.compileModuleAsync = Ac), (this.compileModuleAndAllComponentsSync = Rc), (this.compileModuleAndAllComponentsAsync = Dc);
					}
					return (
						(t.prototype.clearCache = function() {}),
						(t.prototype.clearCacheFor = function(t) {}),
						(t.prototype.getModuleId = function(t) {}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				Uc = new Nt('compilerOptions');
			function Lc() {
				var t = Dt.wtf;
				return !(!t || !(xc = t.trace) || ((Cc = xc.events), 0));
			}
			var Hc = Lc();
			function zc(t, e) {
				return null;
			}
			var Vc = Hc
					? function(t, e) {
							return void 0 === e && (e = null), Cc.createScope(t, e);
					  }
					: function(t, e) {
							return zc;
					  },
				Fc = Hc
					? function(t, e) {
							return xc.leaveScope(t, e), e;
					  }
					: function(t, e) {
							return e;
					  },
				Bc = (function() {
					return Promise.resolve(0);
				})();
			function qc(t) {
				'undefined' == typeof Zone
					? Bc.then(function() {
							t && t.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', t);
			}
			var Gc = (function() {
				function t(t) {
					var e,
						n = t.enableLongStackTrace,
						r = void 0 !== n && n;
					if (
						((this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new Xu(!1)),
						(this.onMicrotaskEmpty = new Xu(!1)),
						(this.onStable = new Xu(!1)),
						(this.onError = new Xu(!1)),
						'undefined' == typeof Zone)
					)
						throw new Error('In this configuration Angular requires Zone.js');
					Zone.assertZonePatched(),
						(this._nesting = 0),
						(this._outer = this._inner = Zone.current),
						Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
						Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
						r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
						((e = this)._inner = e._inner.fork({
							name: 'angular',
							properties: { isAngularZone: !0 },
							onInvokeTask: function(t, n, r, o, i, a) {
								try {
									return Yc(e), t.invokeTask(r, o, i, a);
								} finally {
									Jc(e);
								}
							},
							onInvoke: function(t, n, r, o, i, a, s) {
								try {
									return Yc(e), t.invoke(r, o, i, a, s);
								} finally {
									Jc(e);
								}
							},
							onHasTask: function(t, n, r, o) {
								t.hasTask(r, o),
									n === r && ('microTask' == o.change ? ((e.hasPendingMicrotasks = o.microTask), Qc(e)) : 'macroTask' == o.change && (e.hasPendingMacrotasks = o.macroTask));
							},
							onHandleError: function(t, n, r, o) {
								return (
									t.handleError(r, o),
									e.runOutsideAngular(function() {
										return e.onError.emit(o);
									}),
									!1
								);
							}
						}));
				}
				return (
					(t.isInAngularZone = function() {
						return !0 === Zone.current.get('isAngularZone');
					}),
					(t.assertInAngularZone = function() {
						if (!t.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
					}),
					(t.assertNotInAngularZone = function() {
						if (t.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
					}),
					(t.prototype.run = function(t, e, n) {
						return this._inner.run(t, e, n);
					}),
					(t.prototype.runTask = function(t, e, n, r) {
						var o = this._inner,
							i = o.scheduleEventTask('NgZoneEvent: ' + r, t, Wc, Zc, Zc);
						try {
							return o.runTask(i, e, n);
						} finally {
							o.cancelTask(i);
						}
					}),
					(t.prototype.runGuarded = function(t, e, n) {
						return this._inner.runGuarded(t, e, n);
					}),
					(t.prototype.runOutsideAngular = function(t) {
						return this._outer.run(t);
					}),
					t
				);
			})();
			function Zc() {}
			var Wc = {};
			function Qc(t) {
				if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
					try {
						t._nesting++, t.onMicrotaskEmpty.emit(null);
					} finally {
						if ((t._nesting--, !t.hasPendingMicrotasks))
							try {
								t.runOutsideAngular(function() {
									return t.onStable.emit(null);
								});
							} finally {
								t.isStable = !0;
							}
					}
			}
			function Yc(t) {
				t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
			}
			function Jc(t) {
				t._nesting--, Qc(t);
			}
			var Kc,
				Xc = (function() {
					function t() {
						(this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new Xu()),
							(this.onMicrotaskEmpty = new Xu()),
							(this.onStable = new Xu()),
							(this.onError = new Xu());
					}
					return (
						(t.prototype.run = function(t) {
							return t();
						}),
						(t.prototype.runGuarded = function(t) {
							return t();
						}),
						(t.prototype.runOutsideAngular = function(t) {
							return t();
						}),
						(t.prototype.runTask = function(t) {
							return t();
						}),
						t
					);
				})(),
				$c = (function() {
					function t(t) {
						var e = this;
						(this._ngZone = t),
							(this._pendingCount = 0),
							(this._isZoneStable = !0),
							(this._didWork = !1),
							(this._callbacks = []),
							(this.taskTrackingZone = null),
							this._watchAngularEvents(),
							t.run(function() {
								e.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
							});
					}
					return (
						(t.prototype._watchAngularEvents = function() {
							var t = this;
							this._ngZone.onUnstable.subscribe({
								next: function() {
									(t._didWork = !0), (t._isZoneStable = !1);
								}
							}),
								this._ngZone.runOutsideAngular(function() {
									t._ngZone.onStable.subscribe({
										next: function() {
											Gc.assertNotInAngularZone(),
												qc(function() {
													(t._isZoneStable = !0), t._runCallbacksIfReady();
												});
										}
									});
								});
						}),
						(t.prototype.increasePendingRequestCount = function() {
							return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
						}),
						(t.prototype.decreasePendingRequestCount = function() {
							if (((this._pendingCount -= 1), this._pendingCount < 0)) throw new Error('pending async requests below zero');
							return this._runCallbacksIfReady(), this._pendingCount;
						}),
						(t.prototype.isStable = function() {
							return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
						}),
						(t.prototype._runCallbacksIfReady = function() {
							var t = this;
							if (this.isStable())
								qc(function() {
									for (; 0 !== t._callbacks.length; ) {
										var e = t._callbacks.pop();
										clearTimeout(e.timeoutId), e.doneCb(t._didWork);
									}
									t._didWork = !1;
								});
							else {
								var e = this.getPendingTasks();
								(this._callbacks = this._callbacks.filter(function(t) {
									return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1);
								})),
									(this._didWork = !0);
							}
						}),
						(t.prototype.getPendingTasks = function() {
							return this.taskTrackingZone
								? this.taskTrackingZone.macroTasks.map(function(t) {
										return { source: t.source, creationLocation: t.creationLocation, data: t.data };
								  })
								: [];
						}),
						(t.prototype.addCallback = function(t, e, n) {
							var r = this,
								o = -1;
							e &&
								e > 0 &&
								(o = setTimeout(function() {
									(r._callbacks = r._callbacks.filter(function(t) {
										return t.timeoutId !== o;
									})),
										t(r._didWork, r.getPendingTasks());
								}, e)),
								this._callbacks.push({ doneCb: t, timeoutId: o, updateCb: n });
						}),
						(t.prototype.whenStable = function(t, e, n) {
							if (n && !this.taskTrackingZone)
								throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
							this.addCallback(t, e, n), this._runCallbacksIfReady();
						}),
						(t.prototype.getPendingRequestCount = function() {
							return this._pendingCount;
						}),
						(t.prototype.findProviders = function(t, e, n) {
							return [];
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)(Qt(Gc));
							},
							providedIn: null
						})),
						t
					);
				})(),
				tp = (function() {
					function t() {
						(this._applications = new Map()), ep.addToWindow(this);
					}
					return (
						(t.prototype.registerApplication = function(t, e) {
							this._applications.set(t, e);
						}),
						(t.prototype.unregisterApplication = function(t) {
							this._applications.delete(t);
						}),
						(t.prototype.unregisterAllApplications = function() {
							this._applications.clear();
						}),
						(t.prototype.getTestability = function(t) {
							return this._applications.get(t) || null;
						}),
						(t.prototype.getAllTestabilities = function() {
							return Array.from(this._applications.values());
						}),
						(t.prototype.getAllRootElements = function() {
							return Array.from(this._applications.keys());
						}),
						(t.prototype.findTestabilityInTree = function(t, e) {
							return void 0 === e && (e = !0), ep.findTestabilityInTree(this, t, e);
						}),
						((t = a([s('design:paramtypes', [])], t)).ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				ep = new ((function() {
					function t() {}
					return (
						(t.prototype.addToWindow = function(t) {}),
						(t.prototype.findTestabilityInTree = function(t, e, n) {
							return null;
						}),
						t
					);
				})())(),
				np = new Nt('AllowMultipleToken'),
				rp = (function() {
					return function(t, e) {
						(this.name = t), (this.token = e);
					};
				})();
			function op(t, e, n) {
				void 0 === n && (n = []);
				var r = 'Platform: ' + e,
					o = new Nt(r);
				return function(e) {
					void 0 === e && (e = []);
					var i = ip();
					if (!i || i.injector.get(np, !1))
						if (t) t(n.concat(e).concat({ provide: o, useValue: !0 }));
						else {
							var a = n.concat(e).concat({ provide: o, useValue: !0 });
							!(function(t) {
								if (Kc && !Kc.destroyed && !Kc.injector.get(np, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								Kc = t.get(ap);
								var e = t.get(kc, null);
								e &&
									e.forEach(function(t) {
										return t();
									});
							})(ge.create({ providers: a, name: r }));
						}
					return (function(t) {
						var e = ip();
						if (!e) throw new Error('No platform exists!');
						if (!e.injector.get(t, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return e;
					})(o);
				};
			}
			function ip() {
				return Kc && !Kc.destroyed ? Kc : null;
			}
			var ap = (function() {
				function t(t) {
					(this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
				}
				return (
					(t.prototype.bootstrapModuleFactory = function(t, e) {
						var n,
							r = this,
							o = 'noop' === (n = e ? e.ngZone : void 0) ? new Xc() : ('zone.js' === n ? void 0 : n) || new Gc({ enableLongStackTrace: Or() }),
							i = [{ provide: Gc, useValue: o }];
						return o.run(function() {
							var e = ge.create({ providers: i, parent: r.injector, name: t.moduleType.name }),
								n = t.create(e),
								a = n.injector.get(Yo, null);
							if (!a) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								Gu(n.injector.get(Oc, 'en-US')),
								n.onDestroy(function() {
									return up(r._modules, n);
								}),
								o.runOutsideAngular(function() {
									return o.onError.subscribe({
										next: function(t) {
											a.handleError(t);
										}
									});
								}),
								(function(t, e, o) {
									try {
										var i =
											((a = n.injector.get(vc)).runInitializers(),
											a.donePromise.then(function() {
												return r._moduleDoBootstrap(n), n;
											}));
										return _l(i)
											? i.catch(function(n) {
													throw (e.runOutsideAngular(function() {
														return t.handleError(n);
													}),
													n);
											  })
											: i;
									} catch (s) {
										throw (e.runOutsideAngular(function() {
											return t.handleError(s);
										}),
										s);
									}
									var a;
								})(a, o)
							);
						});
					}),
					(t.prototype.bootstrapModule = function(t, e) {
						var n = this;
						void 0 === e && (e = []);
						var r = sp({}, e);
						return (function(t, e, n) {
							var r = new Yu(n);
							if (0 === we.size) return Promise.resolve(r);
							var o,
								i,
								a =
									((o = t
										.get(Uc, [])
										.concat(e)
										.map(function(t) {
											return t.providers;
										})),
									(i = []),
									o.forEach(function(t) {
										return t && i.push.apply(i, c(t));
									}),
									i);
							if (0 === a.length) return Promise.resolve(r);
							var s = (function() {
									var t = Dt.ng;
									if (!t || !t.ɵcompilerFacade)
										throw new Error(
											"Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
										);
									return t.ɵcompilerFacade;
								})(),
								l = ge.create({ providers: a }).get(s.ResourceLoader);
							return (function(t) {
								var e = [],
									n = new Map();
								function r(e) {
									var r = n.get(e);
									if (!r) {
										var o = t(e);
										n.set(e, (r = o.then(xe)));
									}
									return r;
								}
								return (
									we.forEach(function(t, n) {
										var o = [];
										t.templateUrl &&
											o.push(
												r(t.templateUrl).then(function(e) {
													t.template = e;
												})
											);
										var i = t.styleUrls,
											a = t.styles || (t.styles = []),
											s = t.styles.length;
										i &&
											i.forEach(function(e, n) {
												a.push(''),
													o.push(
														r(e).then(function(r) {
															(a[s + n] = r), i.splice(i.indexOf(e), 1), 0 == i.length && (t.styleUrls = void 0);
														})
													);
											});
										var l = Promise.all(o).then(function() {
											return (function(t) {
												_e.delete(t);
											})(n);
										});
										e.push(l);
									}),
									(we = new Map()),
									Promise.all(e).then(function() {})
								);
							})(function(t) {
								return Promise.resolve(l.get(t));
							}).then(function() {
								return r;
							});
						})(this.injector, r, t).then(function(t) {
							return n.bootstrapModuleFactory(t, r);
						});
					}),
					(t.prototype._moduleDoBootstrap = function(t) {
						var e = t.injector.get(lp);
						if (t._bootstrapComponents.length > 0)
							t._bootstrapComponents.forEach(function(t) {
								return e.bootstrap(t);
							});
						else {
							if (!t.instance.ngDoBootstrap)
								throw new Error(
									'The module ' +
										Pt(t.instance.constructor) +
										' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
								);
							t.instance.ngDoBootstrap(e);
						}
						this._modules.push(t);
					}),
					(t.prototype.onDestroy = function(t) {
						this._destroyListeners.push(t);
					}),
					Object.defineProperty(t.prototype, 'injector', {
						get: function() {
							return this._injector;
						},
						enumerable: !0,
						configurable: !0
					}),
					(t.prototype.destroy = function() {
						if (this._destroyed) throw new Error('The platform has already been destroyed!');
						this._modules.slice().forEach(function(t) {
							return t.destroy();
						}),
							this._destroyListeners.forEach(function(t) {
								return t();
							}),
							(this._destroyed = !0);
					}),
					Object.defineProperty(t.prototype, 'destroyed', {
						get: function() {
							return this._destroyed;
						},
						enumerable: !0,
						configurable: !0
					}),
					(t.ngInjectableDef = wt({
						token: t,
						factory: function(e) {
							return new (e || t)(Qt(ge));
						},
						providedIn: null
					})),
					t
				);
			})();
			function sp(t, e) {
				return Array.isArray(e) ? e.reduce(sp, t) : i({}, t, e);
			}
			var lp = (function() {
				function t(t, e, n, r, o, i) {
					var a = this;
					(this._zone = t),
						(this._console = e),
						(this._injector = n),
						(this._exceptionHandler = r),
						(this._componentFactoryResolver = o),
						(this._initStatus = i),
						(this._bootstrapListeners = []),
						(this._views = []),
						(this._runningTick = !1),
						(this._enforceNoNewChanges = !1),
						(this._stable = !0),
						(this.componentTypes = []),
						(this.components = []),
						(this._enforceNoNewChanges = Or()),
						this._zone.onMicrotaskEmpty.subscribe({
							next: function() {
								a._zone.run(function() {
									a.tick();
								});
							}
						});
					var s = new I(function(t) {
							(a._stable = a._zone.isStable && !a._zone.hasPendingMacrotasks && !a._zone.hasPendingMicrotasks),
								a._zone.runOutsideAngular(function() {
									t.next(a._stable), t.complete();
								});
						}),
						l = new I(function(t) {
							var e;
							a._zone.runOutsideAngular(function() {
								e = a._zone.onStable.subscribe(function() {
									Gc.assertNotInAngularZone(),
										qc(function() {
											a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || ((a._stable = !0), t.next(!0));
										});
								});
							});
							var n = a._zone.onUnstable.subscribe(function() {
								Gc.assertInAngularZone(),
									a._stable &&
										((a._stable = !1),
										a._zone.runOutsideAngular(function() {
											t.next(!1);
										}));
							});
							return function() {
								e.unsubscribe(), n.unsubscribe();
							};
						});
					this.isStable = (function() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						var n = Number.POSITIVE_INFINITY,
							r = null,
							o = t[t.length - 1];
						return (
							U(o) ? ((r = t.pop()), t.length > 1 && 'number' == typeof t[t.length - 1] && (n = t.pop())) : 'number' == typeof o && (n = t.pop()),
							null === r && 1 === t.length && t[0] instanceof I ? t[0] : nt(n)(rt(t, r))
						);
					})(
						s,
						l.pipe(function(t) {
							return ot()(
								((e = ct),
								function(t) {
									var n;
									n =
										'function' == typeof e
											? e
											: function() {
													return e;
											  };
									var r = Object.create(t, lt);
									return (r.source = t), (r.subjectFactory = n), r;
								})(t)
							);
							var e;
						})
					);
				}
				var e;
				return (
					(e = t),
					(t.prototype.bootstrap = function(t, e) {
						var n,
							r = this;
						if (!this._initStatus.done)
							throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
						(n = t instanceof $l ? t : this._componentFactoryResolver.resolveComponentFactory(t)), this.componentTypes.push(n.componentType);
						var o = n.isBoundToModule ? null : this._injector.get(nu),
							i = n.create(ge.NULL, [], e || n.selector, o);
						i.onDestroy(function() {
							r._unloadComponent(i);
						});
						var a = i.injector.get($c, null);
						return (
							a && i.injector.get(tp).registerApplication(i.location.nativeElement, a),
							this._loadComponent(i),
							Or() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
							i
						);
					}),
					(t.prototype.tick = function() {
						var t,
							n,
							r,
							o,
							i = this;
						if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
						var a = e._tickScope();
						try {
							this._runningTick = !0;
							try {
								for (var s = l(this._views), u = s.next(); !u.done; u = s.next()) u.value.detectChanges();
							} catch (f) {
								t = { error: f };
							} finally {
								try {
									u && !u.done && (n = s.return) && n.call(s);
								} finally {
									if (t) throw t.error;
								}
							}
							if (this._enforceNoNewChanges)
								try {
									for (var c = l(this._views), p = c.next(); !p.done; p = c.next()) p.value.checkNoChanges();
								} catch (d) {
									r = { error: d };
								} finally {
									try {
										p && !p.done && (o = c.return) && o.call(c);
									} finally {
										if (r) throw r.error;
									}
								}
						} catch (h) {
							this._zone.runOutsideAngular(function() {
								return i._exceptionHandler.handleError(h);
							});
						} finally {
							(this._runningTick = !1), Fc(a);
						}
					}),
					(t.prototype.attachView = function(t) {
						var e = t;
						this._views.push(e), e.attachToAppRef(this);
					}),
					(t.prototype.detachView = function(t) {
						var e = t;
						up(this._views, e), e.detachFromAppRef();
					}),
					(t.prototype._loadComponent = function(t) {
						this.attachView(t.hostView),
							this.tick(),
							this.components.push(t),
							this._injector
								.get(Pc, [])
								.concat(this._bootstrapListeners)
								.forEach(function(e) {
									return e(t);
								});
					}),
					(t.prototype._unloadComponent = function(t) {
						this.detachView(t.hostView), up(this.components, t);
					}),
					(t.prototype.ngOnDestroy = function() {
						this._views.slice().forEach(function(t) {
							return t.destroy();
						});
					}),
					Object.defineProperty(t.prototype, 'viewCount', {
						get: function() {
							return this._views.length;
						},
						enumerable: !0,
						configurable: !0
					}),
					(t._tickScope = Vc('ApplicationRef#tick()')),
					(t.ngInjectableDef = wt({
						token: t,
						factory: function(e) {
							return new (e || t)(Qt(Gc), Qt(Ec), Qt(ge), Qt(Yo), Qt(eu), Qt(vc));
						},
						providedIn: null
					})),
					t
				);
			})();
			function up(t, e) {
				var n = t.indexOf(e);
				n > -1 && t.splice(n, 1);
			}
			var cp = (function() {
					return function() {};
				})(),
				pp = (function() {
					return function() {};
				})(),
				fp = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				dp = (function() {
					function t(t, e) {
						(this._compiler = t), (this._config = e || fp);
					}
					return (
						(t.prototype.load = function(t) {
							return this.loadAndCompile(t);
						}),
						(t.prototype.loadAndCompile = function(t) {
							var e = this,
								r = u(t.split('#'), 2),
								o = r[0],
								i = r[1];
							return (
								void 0 === i && (i = 'default'),
								n('zn8P')(o)
									.then(function(t) {
										return t[i];
									})
									.then(function(t) {
										return hp(t, o, i);
									})
									.then(function(t) {
										return e._compiler.compileModuleAsync(t);
									})
							);
						}),
						(t.prototype.loadFactory = function(t) {
							var e = u(t.split('#'), 2),
								r = e[0],
								o = e[1],
								i = 'NgFactory';
							return (
								void 0 === o && ((o = 'default'), (i = '')),
								n('zn8P')(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix)
									.then(function(t) {
										return t[o + i];
									})
									.then(function(t) {
										return hp(t, r, o);
									})
							);
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)(Qt(Nc), Qt(pp, 8));
							},
							providedIn: null
						})),
						t
					);
				})();
			function hp(t, e, n) {
				if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
				return t;
			}
			var gp = op(null, 'core', [{ provide: Sc, useValue: 'unknown' }, { provide: ap, deps: [ge] }, { provide: tp, deps: [] }, { provide: Ec, deps: [] }]),
				mp = [
					{ provide: lp, useClass: lp, deps: [Gc, Ec, ge, Yo, eu, vc] },
					{
						provide: Lu,
						deps: [Gc],
						useFactory: function(t) {
							var e = [];
							return (
								t.onStable.subscribe(function() {
									for (; e.length; ) e.pop()();
								}),
								function(t) {
									e.push(t);
								}
							);
						}
					},
					{ provide: vc, useClass: vc, deps: [[new ht(), bc]] },
					{ provide: Nc, useClass: Nc, deps: [] },
					wc,
					{
						provide: Cu,
						useFactory: function() {
							return Ou;
						},
						deps: []
					},
					{
						provide: ku,
						useFactory: function() {
							return Iu;
						},
						deps: []
					},
					{
						provide: Oc,
						useFactory: function(t) {
							return t || 'en-US';
						},
						deps: [[new dt(Oc), new ht(), new mt()]]
					}
				],
				bp = (function() {
					function t(t) {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)(Qt(lp));
							},
							providers: mp
						})),
						t
					);
				})(),
				vp = (function() {
					return function() {};
				})(),
				yp = new Nt('Location Initialized'),
				wp = (function() {
					return function() {};
				})(),
				_p = new Nt('appBaseHref'),
				xp = (function() {
					function t(t, n) {
						var r = this;
						(this._subject = new Xu()), (this._urlChangeListeners = []), (this._platformStrategy = t);
						var o = this._platformStrategy.getBaseHref();
						(this._platformLocation = n),
							(this._baseHref = e.stripTrailingSlash(Cp(o))),
							this._platformStrategy.onPopState(function(t) {
								r._subject.emit({ url: r.path(!0), pop: !0, state: t.state, type: t.type });
							});
					}
					var e;
					return (
						(e = t),
						(t.prototype.path = function(t) {
							return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t));
						}),
						(t.prototype.getState = function() {
							return this._platformLocation.getState();
						}),
						(t.prototype.isCurrentPathEqualTo = function(t, n) {
							return void 0 === n && (n = ''), this.path() == this.normalize(t + e.normalizeQueryParams(n));
						}),
						(t.prototype.normalize = function(t) {
							return e.stripTrailingSlash(
								(function(t, e) {
									return t && e.startsWith(t) ? e.substring(t.length) : e;
								})(this._baseHref, Cp(t))
							);
						}),
						(t.prototype.prepareExternalUrl = function(t) {
							return t && '/' !== t[0] && (t = '/' + t), this._platformStrategy.prepareExternalUrl(t);
						}),
						(t.prototype.go = function(t, n, r) {
							void 0 === n && (n = ''),
								void 0 === r && (r = null),
								this._platformStrategy.pushState(r, '', t, n),
								this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r);
						}),
						(t.prototype.replaceState = function(t, n, r) {
							void 0 === n && (n = ''),
								void 0 === r && (r = null),
								this._platformStrategy.replaceState(r, '', t, n),
								this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r);
						}),
						(t.prototype.forward = function() {
							this._platformStrategy.forward();
						}),
						(t.prototype.back = function() {
							this._platformStrategy.back();
						}),
						(t.prototype.onUrlChange = function(t) {
							var e = this;
							this._urlChangeListeners.push(t),
								this.subscribe(function(t) {
									e._notifyUrlChangeListeners(t.url, t.state);
								});
						}),
						(t.prototype._notifyUrlChangeListeners = function(t, e) {
							void 0 === t && (t = ''),
								this._urlChangeListeners.forEach(function(n) {
									return n(t, e);
								});
						}),
						(t.prototype.subscribe = function(t, e, n) {
							return this._subject.subscribe({ next: t, error: e, complete: n });
						}),
						(t.normalizeQueryParams = function(t) {
							return t && '?' !== t[0] ? '?' + t : t;
						}),
						(t.joinWithSlash = function(t, e) {
							if (0 == t.length) return e;
							if (0 == e.length) return t;
							var n = 0;
							return t.endsWith('/') && n++, e.startsWith('/') && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e;
						}),
						(t.stripTrailingSlash = function(t) {
							var e = t.match(/#|\?|$/),
								n = (e && e.index) || t.length;
							return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)(Qt(wp), Qt(vp));
							},
							providedIn: null
						})),
						t
					);
				})();
			function Cp(t) {
				return t.replace(/\/index.html$/, '');
			}
			var kp = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						return (r._platformLocation = e), (r._baseHref = ''), null != n && (r._baseHref = n), r;
					}
					return (
						o(e, t),
						(e.prototype.onPopState = function(t) {
							this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
						}),
						(e.prototype.getBaseHref = function() {
							return this._baseHref;
						}),
						(e.prototype.path = function(t) {
							void 0 === t && (t = !1);
							var e = this._platformLocation.hash;
							return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
						}),
						(e.prototype.prepareExternalUrl = function(t) {
							var e = xp.joinWithSlash(this._baseHref, t);
							return e.length > 0 ? '#' + e : e;
						}),
						(e.prototype.pushState = function(t, e, n, r) {
							var o = this.prepareExternalUrl(n + xp.normalizeQueryParams(r));
							0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o);
						}),
						(e.prototype.replaceState = function(t, e, n, r) {
							var o = this.prepareExternalUrl(n + xp.normalizeQueryParams(r));
							0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o);
						}),
						(e.prototype.forward = function() {
							this._platformLocation.forward();
						}),
						(e.prototype.back = function() {
							this._platformLocation.back();
						}),
						(e.ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(vp), Qt(_p, 8));
							},
							providedIn: null
						})),
						e
					);
				})(wp),
				Sp = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						if (((r._platformLocation = e), null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n))
							throw new Error('No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.');
						return (r._baseHref = n), r;
					}
					return (
						o(e, t),
						(e.prototype.onPopState = function(t) {
							this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
						}),
						(e.prototype.getBaseHref = function() {
							return this._baseHref;
						}),
						(e.prototype.prepareExternalUrl = function(t) {
							return xp.joinWithSlash(this._baseHref, t);
						}),
						(e.prototype.path = function(t) {
							void 0 === t && (t = !1);
							var e = this._platformLocation.pathname + xp.normalizeQueryParams(this._platformLocation.search),
								n = this._platformLocation.hash;
							return n && t ? '' + e + n : e;
						}),
						(e.prototype.pushState = function(t, e, n, r) {
							var o = this.prepareExternalUrl(n + xp.normalizeQueryParams(r));
							this._platformLocation.pushState(t, e, o);
						}),
						(e.prototype.replaceState = function(t, e, n, r) {
							var o = this.prepareExternalUrl(n + xp.normalizeQueryParams(r));
							this._platformLocation.replaceState(t, e, o);
						}),
						(e.prototype.forward = function() {
							this._platformLocation.forward();
						}),
						(e.prototype.back = function() {
							this._platformLocation.back();
						}),
						(e.ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(vp), Qt(_p, 8));
							},
							providedIn: null
						})),
						e
					);
				})(wp),
				Pp = (function(t) {
					return (t[(t.Zero = 0)] = 'Zero'), (t[(t.One = 1)] = 'One'), (t[(t.Two = 2)] = 'Two'), (t[(t.Few = 3)] = 'Few'), (t[(t.Many = 4)] = 'Many'), (t[(t.Other = 5)] = 'Other'), t;
				})({}),
				Ep = new Nt('UseV4Plurals'),
				Op = (function() {
					return function() {};
				})(),
				Ip = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						return (r.locale = e), (r.deprecatedPluralFn = n), r;
					}
					return (
						o(e, t),
						(e.prototype.getPluralCategory = function(t, e) {
							switch (
								this.deprecatedPluralFn
									? this.deprecatedPluralFn(e || this.locale, t)
									: (function(t) {
											return (function(t) {
												var e = t.toLowerCase().replace(/_/g, '-'),
													n = Vu[e];
												if (n) return n;
												var r = e.split('-')[0];
												if ((n = Vu[r])) return n;
												if ('en' === r) return qu;
												throw new Error('Missing locale data for the locale "' + t + '".');
											})(t)[Fu.PluralCase];
									  })(e || this.locale)(t)
							) {
								case Pp.Zero:
									return 'zero';
								case Pp.One:
									return 'one';
								case Pp.Two:
									return 'two';
								case Pp.Few:
									return 'few';
								case Pp.Many:
									return 'many';
								default:
									return 'other';
							}
						}),
						(e.ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(Oc), Qt(Ep, 8));
							},
							providedIn: null
						})),
						e
					);
				})(Op),
				Tp = (function() {
					function t(t, e) {
						(this._name = t), (this._options = e), (this.value = null), (this._lastSetValue = null), (this._lastSetValueType = 0), (this._lastSetValueIdentityChange = !1);
					}
					return (
						(t.prototype.setValue = function(t) {
							if (Array.isArray(t)) this._lastSetValueType = 4;
							else if (t instanceof Set) this._lastSetValueType = 8;
							else if (t && 'string' == typeof t) {
								if (!(4 & this._options)) throw new Error(this._name + ' string values are not allowed');
								this._lastSetValueType = 1;
							} else this._lastSetValueType = t ? 2 : 0;
							(this._lastSetValueIdentityChange = !0), (this._lastSetValue = t || null);
						}),
						(t.prototype.hasValueChanged = function() {
							var t = this._lastSetValueIdentityChange;
							if (!(t || 14 & this._lastSetValueType)) return !1;
							var e = null,
								n = !!(1 & this._options),
								r = !!(8 & this._options),
								o = !!(2 & this._options);
							switch (this._lastSetValueType) {
								case 1:
									var i = this._lastSetValue.split(/\s+/g);
									16 & this._options
										? ((e = {}),
										  i.forEach(function(t, n) {
												return (e[t] = !0);
										  }))
										: (e = i.reduce(function(t, e, n) {
												return t + (n ? ' ' : '') + e;
										  }));
									break;
								case 2:
									var a = this._lastSetValue,
										s = Object.keys(a);
									t ||
										(t =
											!this.value ||
											(function(t, e, n) {
												var r = t;
												if (!Dp(Object.keys(e), r)) return !0;
												for (var o = 0; o < r.length; o++) {
													var i = r[o];
													if (e[i] !== n[i]) return !0;
												}
												return !1;
											})(s, this.value, a)),
										t && (e = Mp(this._name, n, r, o, a, s));
									break;
								case 4:
								case 8:
									var l = Array.from(this._lastSetValue);
									t || (t = !Dp(Object.keys(this.value), l)), t && (e = Mp(this._name, n, r, o, l));
									break;
								default:
									e = null;
							}
							return t && (this.value = e), t;
						}),
						t
					);
				})();
			function Mp(t, e, n, r, o, i) {
				var a = {};
				if (i)
					for (var s = 0; s < i.length; s++) {
						var l = i[s];
						jp(a, (l = e ? l.trim() : l), (u = o[l]), n, r);
					}
				else
					for (s = 0; s < o.length; s++) {
						var u;
						Ap(t, (u = o[s])), jp(a, (u = e ? u.trim() : u), !0, !1, r);
					}
				return a;
			}
			function Ap(t, e) {
				if ('string' != typeof e) throw new Error(t + ' can only toggle CSS classes expressed as strings, got ' + e);
			}
			function jp(t, e, n, r, o) {
				if (o && e.indexOf(' ') > 0) for (var i = e.split(/\s+/g), a = 0; a < i.length; a++) Rp(t, i[a], n, r);
				else Rp(t, e, n, r);
			}
			function Rp(t, e, n, r) {
				if (r) {
					var o = (function(t, e) {
						var n = t.indexOf('.');
						if (n > 0) {
							var r = t.substr(n + 1);
							(t = t.substring(0, n)), null != e && (e += r);
						}
						return { key: t, value: e };
					})(e, n);
					(n = o.value), (e = o.key);
				}
				t[e] = n;
			}
			function Dp(t, e) {
				if (t && e) {
					if (t.length !== e.length) return !1;
					for (var n = 0; n < t.length; n++) if (-1 === e.indexOf(t[n])) return !1;
					return !0;
				}
				return !1;
			}
			var Np = (function() {
					return function() {};
				})(),
				Up = {
					provide: Np,
					useClass: (function() {
						function t() {
							(this._value = null), (this._ngClassDiffer = new Tp('NgClass', 23)), (this._classStringDiffer = null);
						}
						return (
							(t.prototype.getValue = function() {
								return this._value;
							}),
							(t.prototype.setClass = function(t) {
								(t || this._classStringDiffer) && ((this._classStringDiffer = this._classStringDiffer || new Tp('class', 20)), this._classStringDiffer.setValue(t));
							}),
							(t.prototype.setNgClass = function(t) {
								this._ngClassDiffer.setValue(t);
							}),
							(t.prototype.applyChanges = function() {
								var t = !!this._classStringDiffer && this._classStringDiffer.hasValueChanged(),
									e = this._ngClassDiffer.hasValueChanged();
								if (t || e) {
									var n = this._ngClassDiffer.value;
									if (this._classStringDiffer) {
										var r = this._classStringDiffer.value;
										r && (n = n ? i({}, r, n) : r);
									}
									this._value = n;
								}
							}),
							(t.ngInjectableDef = wt({
								token: t,
								factory: function(e) {
									return new (e || t)();
								},
								providedIn: null
							})),
							t
						);
					})()
				},
				Lp = Le({
					type: function() {},
					selectors: null,
					factory: function() {},
					hostBindings: function(t, e, n) {
						1 & t &&
							(function(t, e, n) {
								var r = rr();
								r.stylingTemplate || (r.stylingTemplate = go());
								var o = ml();
								o
									? ($i() &&
											(function() {
												var t,
													e,
													n = Bn();
												(t = Cn(xr(), n)), (e = pl()), ra(dl(t), e), ra(fl(t), e);
											})(),
									  mo(r.stylingTemplate, o),
									  (r.onElementCreationFns = r.onElementCreationFns || []).push(function() {
											var i, a, s;
											gl(r, t, e, n, o), (a = o), (s = (i = r.stylingTemplate)[8]) || (s = i[8] = [fo]), (s[0] = a);
									  }))
									: gl(r, t, e, n, fo);
							})(),
							2 & t &&
								((function(t) {
									var e = xr(),
										n = Bn(),
										r = bl(e, n),
										o = ml();
									if (o)
										!(function(t, e, n, o) {
											var i = r[8];
											if (null != i) {
												var a = (function(t, e) {
													for (var n = 1; n < t.length; n += 3) if (t[n + 0] > e) return n;
													return t.length;
												})(i, e);
												i.splice(a, 0, e, n, o);
											}
										})(0, o, ni, [r, t, o]);
									else {
										var i = Cn(e, n);
										if (yo(i) && t !== Jo) {
											var a = Ui(r),
												s =
													(a.length ? a + ' ' : '') +
													(function(t) {
														return t && 'string' != typeof t && (t = Object.keys(t).join(' ')), t || '';
													})(t);
											As(n, i.inputs.class, s), (t = Jo);
										}
										ni(r, t);
									}
									$i() &&
										(function(t) {
											!(function(t, e) {
												Ra = Ua;
												var n = xr(),
													r = Bn(),
													o = r[$e]++;
												if (t !== Jo) {
													var i = Cn(n, r),
														a = Jn > 0,
														s = r[o],
														l = ma(s, t),
														u = (function(t, e) {
															var n = Array.isArray(t) ? t : [null];
															n[0] = e || null;
															for (var r = 1; r < n.length; r += 2) Fa(n, r, null);
															var o,
																i = null,
																a = !1;
															if (('string' == typeof e ? e.length && ((i = e.split(/\s+/)), (a = !0)) : ((i = e ? Object.keys(e) : null), (o = e)), i))
																t: for (var s = 0; s < i.length; s++) {
																	var l = i[s],
																		u = !!a || o[l];
																	for (r = 1; r < n.length; r += 2) {
																		var c = Va(n, r);
																		if (l <= c) {
																			c === l ? Fa(n, r, u) : n.splice(r, 0, l, u);
																			continue t;
																		}
																	}
																	n.push(l, u);
																}
															return n;
														})(s, t);
													e
														? (function(t, e, n, o, i, s, l) {
																var c = Ca;
																(Oa(t, r, c, null, o, u, a, l, !1) || l) && (Pa |= 1 << c);
														  })(dl(i), 0, 0, o, 0, 0, l)
														: (va(r),
														  (function(t, e, n, o, i, s, l, c) {
																var p = Ca;
																(Oa(t, r, p, null, o, u, a, c, !0) || c) && (Sa |= 1 << p);
														  })(fl(i), 0, 0, o, 0, 0, 0, l));
												}
											})(t, !0);
										})(t);
								})(e.getValue()),
								(function() {
									var t,
										e,
										n,
										r = xr(),
										o = ml() || fo,
										i = Bn(),
										a = 3 === Cn(r, i).type ? i[on] : null,
										s = 0 != (8 & i[Qe]),
										l = bl(r, i);
									Xi < 2 &&
										(function(t, e, n, r, o, i, a) {
											void 0 === a && (a = 0);
											var s = 0;
											if (
												(function(t, e) {
													var n = t[8];
													return !n || n[0] === e;
												})(t, a) &&
												((function(t) {
													var e = t[8];
													if (e) {
														for (var n = 1; n < e.length; n += 3) e[n + 1].apply(this, e[n + 2]);
														e.length = 1;
													}
												})(t),
												(function(t) {
													return ai(t, 1);
												})(t))
											) {
												for (var l = t[0], u = 8 & t[1], c = hi(t), p = 10; p < t.length; p += 4)
													if (ai(t, p)) {
														var f = _i(t, p),
															d = ji(t, p),
															h = Ci(t, p),
															g = xi(t, p),
															m = 4 & f ? Di(t, d) : null,
															b = yi(t, p),
															v = !!(2 & f),
															y = g;
														p < c && !Oi(y) && (y = xi(t, fi(f))),
															Oi(y) || (y = ci(t, f)),
															e && (!r || y) && (v ? oi(l, h, !!y, e, null, b) : ri(l, h, y, e, m, null, b)),
															ii(t, p, !1);
													}
												if (u) {
													var w = Array.isArray(n) ? Oo(n) : n,
														_ = t[9],
														x = _[0];
													for (p = 1; p < x; p += 2) {
														var C = _[p],
															k = p + 1,
															S = _[k];
														if (C) {
															var P = C.buildPlayer(S, r);
															void 0 !== P && (null != P && wo(_, w, l, P, k) && s++, S && S.destroy());
														} else S && S.destroy();
													}
													Si(t, !1);
												}
												ki(t, !1);
											}
											return s;
										})(l, a, i, s, 0, 0, o) > 0 &&
										((n = 0 === (t = Oo(i)).flags),
										(t.flags |= 2),
										n &&
											t.clean == Za &&
											((t.clean = new Promise(function(t) {
												return (e = t);
											})),
											t.scheduler(function() {
												if ((1 & t.flags && ((t.flags &= -2), xs(t)), 2 & t.flags)) {
													t.flags &= -3;
													var n = t.playerHandler;
													n && n.flushPlayers();
												}
												(t.clean = Za), e(null);
											}))),
										Hn(null),
										$i() &&
											(function() {
												var t = xr(),
													e = Bn(),
													n = Cn(t, e),
													r = (function(t, e) {
														return 3 === t.type ? e[on] : null;
													})(n, e),
													o = (function(t, n) {
														for (var r = e[t + pn], o = e; Array.isArray(r); ) (o = r), (r = r[Ze]);
														return wn(o) ? o[0] : r;
													})(t),
													i = pl();
												!(function(t, e, n, r, o) {
													fa(n, o) && (!ha(n) && da(n), Pa && (ja(n, t, r, e, Pa, Na, null), (Pa = 0)), ka);
												})(r, e, dl(n), o, i);
												var a = va(e);
												!(function(t, e, n, r, o, i) {
													fa(n, o) && (!ha(n) && da(n), Sa && (ja(n, t, r, e, Sa, Da, i), (Sa = 0)), ka);
												})(r, e, fl(n), o, i, a),
													ta(null);
											})();
								})());
					}
				}),
				Hp = (function(t) {
					function e(e) {
						return t.call(this, e) || this;
					}
					return (
						o(e, t),
						Object.defineProperty(e.prototype, 'klass', {
							set: function(t) {
								this._delegate.setClass(t);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'ngClass', {
							set: function(t) {
								this._delegate.setNgClass(t);
							},
							enumerable: !0,
							configurable: !0
						}),
						(e.prototype.ngDoCheck = function() {
							this._delegate.applyChanges();
						}),
						(e.ngDirectiveDef = Le({
							type: e,
							selectors: [['', 'ngClass', '']],
							factory: function(t) {
								return new (t || e)(cl(Np));
							},
							inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
							features: [
								((n = [Up]),
								void 0 === r && (r = []),
								function(t) {
									t.providersResolver = function(t, e) {
										return (function(t, e, n) {
											var r = Bn()[We];
											if (r.firstTemplatePass) {
												var o = En(t);
												Bl(n, r.data, r.blueprint, o, !0), Bl(e, r.data, r.blueprint, o, !1);
											}
										})(t, e ? e(n) : n, r);
									};
								}),
								Ll
							]
						})),
						e
					);
					var n, r;
				})(
					(function() {
						function t(t) {
							this._delegate = t;
						}
						return (
							(t.prototype.getValue = function() {
								return this._delegate.getValue();
							}),
							(t.ngDirectiveDef = Lp),
							t
						);
					})()
				),
				zp = (function() {
					function t(t, e) {
						(this._viewContainer = t),
							(this._context = new Vp()),
							(this._thenTemplateRef = null),
							(this._elseTemplateRef = null),
							(this._thenViewRef = null),
							(this._elseViewRef = null),
							(this._thenTemplateRef = e);
					}
					return (
						Object.defineProperty(t.prototype, 'ngIf', {
							set: function(t) {
								(this._context.$implicit = this._context.ngIf = t), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'ngIfThen', {
							set: function(t) {
								Fp('ngIfThen', t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'ngIfElse', {
							set: function(t) {
								Fp('ngIfElse', t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype._updateView = function() {
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
						(t.ngDirectiveDef = Le({
							type: t,
							selectors: [['', 'ngIf', '']],
							factory: function(e) {
								return new (e || t)(cl(Au), cl(Tu));
							},
							inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' }
						})),
						t
					);
				})(),
				Vp = (function() {
					return function() {
						(this.$implicit = null), (this.ngIf = null);
					};
				})();
			function Fp(t, e) {
				if (e && !e.createEmbeddedView) throw new Error(t + " must be a TemplateRef, but received '" + Pt(e) + "'.");
			}
			var Bp = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							},
							providers: [{ provide: Op, useClass: Ip }]
						})),
						t
					);
				})(),
				qp = new Nt('DocumentToken'),
				Gp = 'server',
				Zp = (function() {
					function t() {}
					return (
						(t.ngInjectableDef = wt({
							token: t,
							providedIn: 'root',
							factory: function() {
								return new Wp(Qt(qp), window, Qt(Yo));
							}
						})),
						t
					);
				})(),
				Wp = (function() {
					function t(t, e, n) {
						(this.document = t),
							(this.window = e),
							(this.errorHandler = n),
							(this.offset = function() {
								return [0, 0];
							});
					}
					return (
						(t.prototype.setOffset = function(t) {
							this.offset = Array.isArray(t)
								? function() {
										return t;
								  }
								: t;
						}),
						(t.prototype.getScrollPosition = function() {
							return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
						}),
						(t.prototype.scrollToPosition = function(t) {
							this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
						}),
						(t.prototype.scrollToAnchor = function(t) {
							if (this.supportScrollRestoration()) {
								t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
								try {
									var e = this.document.querySelector('#' + t);
									if (e) return void this.scrollToElement(e);
									var n = this.document.querySelector("[name='" + t + "']");
									if (n) return void this.scrollToElement(n);
								} catch (r) {
									this.errorHandler.handleError(r);
								}
							}
						}),
						(t.prototype.setHistoryScrollRestoration = function(t) {
							if (this.supportScrollRestoration()) {
								var e = this.window.history;
								e && e.scrollRestoration && (e.scrollRestoration = t);
							}
						}),
						(t.prototype.scrollToElement = function(t) {
							var e = t.getBoundingClientRect(),
								n = e.left + this.window.pageXOffset,
								r = e.top + this.window.pageYOffset,
								o = this.offset();
							this.window.scrollTo(n - o[0], r - o[1]);
						}),
						(t.prototype.supportScrollRestoration = function() {
							try {
								return !!this.window && !!this.window.scrollTo;
							} catch (t) {
								return !1;
							}
						}),
						t
					);
				})(),
				Qp = null;
			function Yp() {
				return Qp;
			}
			var Jp,
				Kp = (function(t) {
					function e() {
						var e = t.call(this) || this;
						(e._animationPrefix = null), (e._transitionEnd = null);
						try {
							var n = e.createElement('div', document);
							if (null != e.getStyle(n, 'animationName')) e._animationPrefix = '';
							else
								for (var r = ['Webkit', 'Moz', 'O', 'ms'], o = 0; o < r.length; o++)
									if (null != e.getStyle(n, r[o] + 'AnimationName')) {
										e._animationPrefix = '-' + r[o].toLowerCase() + '-';
										break;
									}
							var i = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd otransitionend', transition: 'transitionend' };
							Object.keys(i).forEach(function(t) {
								null != e.getStyle(n, t) && (e._transitionEnd = i[t]);
							});
						} catch (a) {
							(e._animationPrefix = null), (e._transitionEnd = null);
						}
						return e;
					}
					return (
						o(e, t),
						(e.prototype.getDistributedNodes = function(t) {
							return t.getDistributedNodes();
						}),
						(e.prototype.resolveAndSetHref = function(t, e, n) {
							t.href = null == n ? e : e + '/../' + n;
						}),
						(e.prototype.supportsDOMEvents = function() {
							return !0;
						}),
						(e.prototype.supportsNativeShadowDOM = function() {
							return 'function' == typeof document.body.createShadowRoot;
						}),
						(e.prototype.getAnimationPrefix = function() {
							return this._animationPrefix ? this._animationPrefix : '';
						}),
						(e.prototype.getTransitionEnd = function() {
							return this._transitionEnd ? this._transitionEnd : '';
						}),
						(e.prototype.supportsAnimation = function() {
							return null != this._animationPrefix && null != this._transitionEnd;
						}),
						e
					);
				})(
					(function() {
						function t() {
							this.resourceLoaderType = null;
						}
						return (
							Object.defineProperty(t.prototype, 'attrToPropMap', {
								get: function() {
									return this._attrToPropMap;
								},
								set: function(t) {
									this._attrToPropMap = t;
								},
								enumerable: !0,
								configurable: !0
							}),
							t
						);
					})()
				),
				Xp = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				$p = {
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
				tf = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' },
				ef = (function() {
					if (Dt.Node)
						return (
							Dt.Node.prototype.contains ||
							function(t) {
								return !!(16 & this.compareDocumentPosition(t));
							}
						);
				})(),
				nf = (function(t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						o(e, t),
						(e.prototype.parse = function(t) {
							throw new Error('parse not implemented');
						}),
						(e.makeCurrent = function() {
							var t;
							(t = new e()), Qp || (Qp = t);
						}),
						(e.prototype.hasProperty = function(t, e) {
							return e in t;
						}),
						(e.prototype.setProperty = function(t, e, n) {
							t[e] = n;
						}),
						(e.prototype.getProperty = function(t, e) {
							return t[e];
						}),
						(e.prototype.invoke = function(t, e, n) {
							var r;
							(r = t)[e].apply(r, c(n));
						}),
						(e.prototype.logError = function(t) {
							window.console && (console.error ? console.error(t) : console.log(t));
						}),
						(e.prototype.log = function(t) {
							window.console && window.console.log && window.console.log(t);
						}),
						(e.prototype.logGroup = function(t) {
							window.console && window.console.group && window.console.group(t);
						}),
						(e.prototype.logGroupEnd = function() {
							window.console && window.console.groupEnd && window.console.groupEnd();
						}),
						Object.defineProperty(e.prototype, 'attrToPropMap', {
							get: function() {
								return Xp;
							},
							enumerable: !0,
							configurable: !0
						}),
						(e.prototype.contains = function(t, e) {
							return ef.call(t, e);
						}),
						(e.prototype.querySelector = function(t, e) {
							return t.querySelector(e);
						}),
						(e.prototype.querySelectorAll = function(t, e) {
							return t.querySelectorAll(e);
						}),
						(e.prototype.on = function(t, e, n) {
							t.addEventListener(e, n, !1);
						}),
						(e.prototype.onAndCancel = function(t, e, n) {
							return (
								t.addEventListener(e, n, !1),
								function() {
									t.removeEventListener(e, n, !1);
								}
							);
						}),
						(e.prototype.dispatchEvent = function(t, e) {
							t.dispatchEvent(e);
						}),
						(e.prototype.createMouseEvent = function(t) {
							var e = this.getDefaultDocument().createEvent('MouseEvent');
							return e.initEvent(t, !0, !0), e;
						}),
						(e.prototype.createEvent = function(t) {
							var e = this.getDefaultDocument().createEvent('Event');
							return e.initEvent(t, !0, !0), e;
						}),
						(e.prototype.preventDefault = function(t) {
							t.preventDefault(), (t.returnValue = !1);
						}),
						(e.prototype.isPrevented = function(t) {
							return t.defaultPrevented || (null != t.returnValue && !t.returnValue);
						}),
						(e.prototype.getInnerHTML = function(t) {
							return t.innerHTML;
						}),
						(e.prototype.getTemplateContent = function(t) {
							return 'content' in t && this.isTemplateElement(t) ? t.content : null;
						}),
						(e.prototype.getOuterHTML = function(t) {
							return t.outerHTML;
						}),
						(e.prototype.nodeName = function(t) {
							return t.nodeName;
						}),
						(e.prototype.nodeValue = function(t) {
							return t.nodeValue;
						}),
						(e.prototype.type = function(t) {
							return t.type;
						}),
						(e.prototype.content = function(t) {
							return this.hasProperty(t, 'content') ? t.content : t;
						}),
						(e.prototype.firstChild = function(t) {
							return t.firstChild;
						}),
						(e.prototype.nextSibling = function(t) {
							return t.nextSibling;
						}),
						(e.prototype.parentElement = function(t) {
							return t.parentNode;
						}),
						(e.prototype.childNodes = function(t) {
							return t.childNodes;
						}),
						(e.prototype.childNodesAsList = function(t) {
							for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++) n[r] = e[r];
							return n;
						}),
						(e.prototype.clearNodes = function(t) {
							for (; t.firstChild; ) t.removeChild(t.firstChild);
						}),
						(e.prototype.appendChild = function(t, e) {
							t.appendChild(e);
						}),
						(e.prototype.removeChild = function(t, e) {
							t.removeChild(e);
						}),
						(e.prototype.replaceChild = function(t, e, n) {
							t.replaceChild(e, n);
						}),
						(e.prototype.remove = function(t) {
							return t.parentNode && t.parentNode.removeChild(t), t;
						}),
						(e.prototype.insertBefore = function(t, e, n) {
							t.insertBefore(n, e);
						}),
						(e.prototype.insertAllBefore = function(t, e, n) {
							n.forEach(function(n) {
								return t.insertBefore(n, e);
							});
						}),
						(e.prototype.insertAfter = function(t, e, n) {
							t.insertBefore(n, e.nextSibling);
						}),
						(e.prototype.setInnerHTML = function(t, e) {
							t.innerHTML = e;
						}),
						(e.prototype.getText = function(t) {
							return t.textContent;
						}),
						(e.prototype.setText = function(t, e) {
							t.textContent = e;
						}),
						(e.prototype.getValue = function(t) {
							return t.value;
						}),
						(e.prototype.setValue = function(t, e) {
							t.value = e;
						}),
						(e.prototype.getChecked = function(t) {
							return t.checked;
						}),
						(e.prototype.setChecked = function(t, e) {
							t.checked = e;
						}),
						(e.prototype.createComment = function(t) {
							return this.getDefaultDocument().createComment(t);
						}),
						(e.prototype.createTemplate = function(t) {
							var e = this.getDefaultDocument().createElement('template');
							return (e.innerHTML = t), e;
						}),
						(e.prototype.createElement = function(t, e) {
							return (e = e || this.getDefaultDocument()).createElement(t);
						}),
						(e.prototype.createElementNS = function(t, e, n) {
							return (n = n || this.getDefaultDocument()).createElementNS(t, e);
						}),
						(e.prototype.createTextNode = function(t, e) {
							return (e = e || this.getDefaultDocument()).createTextNode(t);
						}),
						(e.prototype.createScriptTag = function(t, e, n) {
							var r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
							return r.setAttribute(t, e), r;
						}),
						(e.prototype.createStyleElement = function(t, e) {
							var n = (e = e || this.getDefaultDocument()).createElement('style');
							return this.appendChild(n, this.createTextNode(t, e)), n;
						}),
						(e.prototype.createShadowRoot = function(t) {
							return t.createShadowRoot();
						}),
						(e.prototype.getShadowRoot = function(t) {
							return t.shadowRoot;
						}),
						(e.prototype.getHost = function(t) {
							return t.host;
						}),
						(e.prototype.clone = function(t) {
							return t.cloneNode(!0);
						}),
						(e.prototype.getElementsByClassName = function(t, e) {
							return t.getElementsByClassName(e);
						}),
						(e.prototype.getElementsByTagName = function(t, e) {
							return t.getElementsByTagName(e);
						}),
						(e.prototype.classList = function(t) {
							return Array.prototype.slice.call(t.classList, 0);
						}),
						(e.prototype.addClass = function(t, e) {
							t.classList.add(e);
						}),
						(e.prototype.removeClass = function(t, e) {
							t.classList.remove(e);
						}),
						(e.prototype.hasClass = function(t, e) {
							return t.classList.contains(e);
						}),
						(e.prototype.setStyle = function(t, e, n) {
							t.style[e] = n;
						}),
						(e.prototype.removeStyle = function(t, e) {
							t.style[e] = '';
						}),
						(e.prototype.getStyle = function(t, e) {
							return t.style[e];
						}),
						(e.prototype.hasStyle = function(t, e, n) {
							var r = this.getStyle(t, e) || '';
							return n ? r == n : r.length > 0;
						}),
						(e.prototype.tagName = function(t) {
							return t.tagName;
						}),
						(e.prototype.attributeMap = function(t) {
							for (var e = new Map(), n = t.attributes, r = 0; r < n.length; r++) {
								var o = n.item(r);
								e.set(o.name, o.value);
							}
							return e;
						}),
						(e.prototype.hasAttribute = function(t, e) {
							return t.hasAttribute(e);
						}),
						(e.prototype.hasAttributeNS = function(t, e, n) {
							return t.hasAttributeNS(e, n);
						}),
						(e.prototype.getAttribute = function(t, e) {
							return t.getAttribute(e);
						}),
						(e.prototype.getAttributeNS = function(t, e, n) {
							return t.getAttributeNS(e, n);
						}),
						(e.prototype.setAttribute = function(t, e, n) {
							t.setAttribute(e, n);
						}),
						(e.prototype.setAttributeNS = function(t, e, n, r) {
							t.setAttributeNS(e, n, r);
						}),
						(e.prototype.removeAttribute = function(t, e) {
							t.removeAttribute(e);
						}),
						(e.prototype.removeAttributeNS = function(t, e, n) {
							t.removeAttributeNS(e, n);
						}),
						(e.prototype.templateAwareRoot = function(t) {
							return this.isTemplateElement(t) ? this.content(t) : t;
						}),
						(e.prototype.createHtmlDocument = function() {
							return document.implementation.createHTMLDocument('fakeTitle');
						}),
						(e.prototype.getDefaultDocument = function() {
							return document;
						}),
						(e.prototype.getBoundingClientRect = function(t) {
							try {
								return t.getBoundingClientRect();
							} catch (e) {
								return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
							}
						}),
						(e.prototype.getTitle = function(t) {
							return t.title;
						}),
						(e.prototype.setTitle = function(t, e) {
							t.title = e || '';
						}),
						(e.prototype.elementMatches = function(t, e) {
							return (
								!!this.isElementNode(t) && ((t.matches && t.matches(e)) || (t.msMatchesSelector && t.msMatchesSelector(e)) || (t.webkitMatchesSelector && t.webkitMatchesSelector(e)))
							);
						}),
						(e.prototype.isTemplateElement = function(t) {
							return this.isElementNode(t) && 'TEMPLATE' === t.nodeName;
						}),
						(e.prototype.isTextNode = function(t) {
							return t.nodeType === Node.TEXT_NODE;
						}),
						(e.prototype.isCommentNode = function(t) {
							return t.nodeType === Node.COMMENT_NODE;
						}),
						(e.prototype.isElementNode = function(t) {
							return t.nodeType === Node.ELEMENT_NODE;
						}),
						(e.prototype.hasShadowRoot = function(t) {
							return null != t.shadowRoot && t instanceof HTMLElement;
						}),
						(e.prototype.isShadowRoot = function(t) {
							return t instanceof DocumentFragment;
						}),
						(e.prototype.importIntoDoc = function(t) {
							return document.importNode(this.templateAwareRoot(t), !0);
						}),
						(e.prototype.adoptNode = function(t) {
							return document.adoptNode(t);
						}),
						(e.prototype.getHref = function(t) {
							return t.getAttribute('href');
						}),
						(e.prototype.getEventKey = function(t) {
							var e = t.key;
							if (null == e) {
								if (null == (e = t.keyIdentifier)) return 'Unidentified';
								e.startsWith('U+') && ((e = String.fromCharCode(parseInt(e.substring(2), 16))), 3 === t.location && tf.hasOwnProperty(e) && (e = tf[e]));
							}
							return $p[e] || e;
						}),
						(e.prototype.getGlobalEventTarget = function(t, e) {
							return 'window' === e ? window : 'document' === e ? t : 'body' === e ? t.body : null;
						}),
						(e.prototype.getHistory = function() {
							return window.history;
						}),
						(e.prototype.getLocation = function() {
							return window.location;
						}),
						(e.prototype.getBaseHref = function(t) {
							var e,
								n = rf || (rf = document.querySelector('base')) ? rf.getAttribute('href') : null;
							return null == n ? null : ((e = n), Jp || (Jp = document.createElement('a')), Jp.setAttribute('href', e), '/' === Jp.pathname.charAt(0) ? Jp.pathname : '/' + Jp.pathname);
						}),
						(e.prototype.resetBaseElement = function() {
							rf = null;
						}),
						(e.prototype.getUserAgent = function() {
							return window.navigator.userAgent;
						}),
						(e.prototype.setData = function(t, e, n) {
							this.setAttribute(t, 'data-' + e, n);
						}),
						(e.prototype.getData = function(t, e) {
							return this.getAttribute(t, 'data-' + e);
						}),
						(e.prototype.getComputedStyle = function(t) {
							return getComputedStyle(t);
						}),
						(e.prototype.supportsWebAnimation = function() {
							return 'function' == typeof Element.prototype.animate;
						}),
						(e.prototype.performanceNow = function() {
							return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
						}),
						(e.prototype.supportsCookies = function() {
							return !0;
						}),
						(e.prototype.getCookie = function(t) {
							return (function(t, e) {
								var n, r;
								e = encodeURIComponent(e);
								try {
									for (var o = l(t.split(';')), i = o.next(); !i.done; i = o.next()) {
										var a = i.value,
											s = a.indexOf('='),
											c = u(-1 == s ? [a, ''] : [a.slice(0, s), a.slice(s + 1)], 2),
											p = c[1];
										if (c[0].trim() === e) return decodeURIComponent(p);
									}
								} catch (f) {
									n = { error: f };
								} finally {
									try {
										i && !i.done && (r = o.return) && r.call(o);
									} finally {
										if (n) throw n.error;
									}
								}
								return null;
							})(document.cookie, t);
						}),
						(e.prototype.setCookie = function(t, e) {
							document.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(e);
						}),
						e
					);
				})(Kp),
				rf = null;
			function of() {
				return !!window.history.pushState;
			}
			var af = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (n._doc = e), n._init(), n;
					}
					var n;
					return (
						o(e, t),
						(e.prototype._init = function() {
							(this.location = Yp().getLocation()), (this._history = Yp().getHistory());
						}),
						(e.prototype.getBaseHrefFromDOM = function() {
							return Yp().getBaseHref(this._doc);
						}),
						(e.prototype.onPopState = function(t) {
							Yp()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', t, !1);
						}),
						(e.prototype.onHashChange = function(t) {
							Yp()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('hashchange', t, !1);
						}),
						Object.defineProperty(e.prototype, 'href', {
							get: function() {
								return this.location.href;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'protocol', {
							get: function() {
								return this.location.protocol;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'hostname', {
							get: function() {
								return this.location.hostname;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'port', {
							get: function() {
								return this.location.port;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'pathname', {
							get: function() {
								return this.location.pathname;
							},
							set: function(t) {
								this.location.pathname = t;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'search', {
							get: function() {
								return this.location.search;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'hash', {
							get: function() {
								return this.location.hash;
							},
							enumerable: !0,
							configurable: !0
						}),
						(e.prototype.pushState = function(t, e, n) {
							of() ? this._history.pushState(t, e, n) : (this.location.hash = n);
						}),
						(e.prototype.replaceState = function(t, e, n) {
							of() ? this._history.replaceState(t, e, n) : (this.location.hash = n);
						}),
						(e.prototype.forward = function() {
							this._history.forward();
						}),
						(e.prototype.back = function() {
							this._history.back();
						}),
						(e.prototype.getState = function() {
							return this._history.state;
						}),
						((e = a(
							[
								((n = dt(qp)),
								function(t, e) {
									n(t, e, 0);
								}),
								s('design:paramtypes', [Object])
							],
							e
						)).ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(qp));
							},
							providedIn: null
						})),
						e
					);
				})(vp),
				sf = new Nt('TRANSITION_ID'),
				lf = [
					{
						provide: bc,
						useFactory: function(t, e, n) {
							return function() {
								n.get(vc).donePromise.then(function() {
									var n = Yp();
									Array.prototype.slice
										.apply(n.querySelectorAll(e, 'style[ng-transition]'))
										.filter(function(e) {
											return n.getAttribute(e, 'ng-transition') === t;
										})
										.forEach(function(t) {
											return n.remove(t);
										});
								});
							};
						},
						deps: [sf, qp, ge],
						multi: !0
					}
				],
				uf = (function() {
					function t() {}
					return (
						(t.init = function() {
							var e;
							(e = new t()), (ep = e);
						}),
						(t.prototype.addToWindow = function(t) {
							(Dt.getAngularTestability = function(e, n) {
								void 0 === n && (n = !0);
								var r = t.findTestabilityInTree(e, n);
								if (null == r) throw new Error('Could not find testability for element.');
								return r;
							}),
								(Dt.getAllAngularTestabilities = function() {
									return t.getAllTestabilities();
								}),
								(Dt.getAllAngularRootElements = function() {
									return t.getAllRootElements();
								}),
								Dt.frameworkStabilizers || (Dt.frameworkStabilizers = []),
								Dt.frameworkStabilizers.push(function(t) {
									var e = Dt.getAllAngularTestabilities(),
										n = e.length,
										r = !1,
										o = function(e) {
											(r = r || e), 0 == --n && t(r);
										};
									e.forEach(function(t) {
										t.whenStable(o);
									});
								});
						}),
						(t.prototype.findTestabilityInTree = function(t, e, n) {
							if (null == e) return null;
							var r = t.getTestability(e);
							return null != r ? r : n ? (Yp().isShadowRoot(e) ? this.findTestabilityInTree(t, Yp().getHost(e), !0) : this.findTestabilityInTree(t, Yp().parentElement(e), !0)) : null;
						}),
						t
					);
				})(),
				cf = new Nt('EventManagerPlugins'),
				pf = (function() {
					function t(t, e) {
						var n = this;
						(this._zone = e),
							(this._eventNameToPlugin = new Map()),
							t.forEach(function(t) {
								return (t.manager = n);
							}),
							(this._plugins = t.slice().reverse());
					}
					return (
						(t.prototype.addEventListener = function(t, e, n) {
							return this._findPluginFor(e).addEventListener(t, e, n);
						}),
						(t.prototype.addGlobalEventListener = function(t, e, n) {
							return this._findPluginFor(e).addGlobalEventListener(t, e, n);
						}),
						(t.prototype.getZone = function() {
							return this._zone;
						}),
						(t.prototype._findPluginFor = function(t) {
							var e = this._eventNameToPlugin.get(t);
							if (e) return e;
							for (var n = this._plugins, r = 0; r < n.length; r++) {
								var o = n[r];
								if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o;
							}
							throw new Error('No event manager plugin found for event ' + t);
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)(Qt(cf), Qt(Gc));
							},
							providedIn: null
						})),
						t
					);
				})(),
				ff = (function() {
					function t(t) {
						this._doc = t;
					}
					return (
						(t.prototype.addGlobalEventListener = function(t, e, n) {
							var r = Yp().getGlobalEventTarget(this._doc, t);
							if (!r) throw new Error('Unsupported event target ' + r + ' for event ' + e);
							return this.addEventListener(r, e, n);
						}),
						t
					);
				})(),
				df = (function() {
					function t() {
						this._stylesSet = new Set();
					}
					return (
						(t.prototype.addStyles = function(t) {
							var e = this,
								n = new Set();
							t.forEach(function(t) {
								e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t));
							}),
								this.onStylesAdded(n);
						}),
						(t.prototype.onStylesAdded = function(t) {}),
						(t.prototype.getAllStyles = function() {
							return Array.from(this._stylesSet);
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				hf = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (n._doc = e), (n._hostNodes = new Set()), (n._styleNodes = new Set()), n._hostNodes.add(e.head), n;
					}
					return (
						o(e, t),
						(e.prototype._addStylesToHost = function(t, e) {
							var n = this;
							t.forEach(function(t) {
								var r = n._doc.createElement('style');
								(r.textContent = t), n._styleNodes.add(e.appendChild(r));
							});
						}),
						(e.prototype.addHost = function(t) {
							this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
						}),
						(e.prototype.removeHost = function(t) {
							this._hostNodes.delete(t);
						}),
						(e.prototype.onStylesAdded = function(t) {
							var e = this;
							this._hostNodes.forEach(function(n) {
								return e._addStylesToHost(t, n);
							});
						}),
						(e.prototype.ngOnDestroy = function() {
							this._styleNodes.forEach(function(t) {
								return Yp().remove(t);
							});
						}),
						(e.ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(qp));
							},
							providedIn: null
						})),
						e
					);
				})(df),
				gf = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/'
				},
				mf = /%COMP%/g,
				bf = '_nghost-%COMP%',
				vf = '_ngcontent-%COMP%';
			function yf(t, e, n) {
				for (var r = 0; r < e.length; r++) {
					var o = e[r];
					Array.isArray(o) ? yf(t, o, n) : ((o = o.replace(mf, t)), n.push(o));
				}
				return n;
			}
			function wf(t) {
				return function(e) {
					!1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
				};
			}
			var _f = (function() {
					function t(t, e, n) {
						(this.eventManager = t), (this.sharedStylesHost = e), (this.appId = n), (this.rendererByCompId = new Map()), (this.defaultRenderer = new xf(t));
					}
					return (
						(t.prototype.createRenderer = function(t, e) {
							if (!t || !e) return this.defaultRenderer;
							switch (e.encapsulation) {
								case Ce.Emulated:
									var n = this.rendererByCompId.get(e.id);
									return n || ((n = new Sf(this.eventManager, this.sharedStylesHost, e, this.appId)), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
								case Ce.Native:
								case Ce.ShadowDom:
									return new Pf(this.eventManager, this.sharedStylesHost, t, e);
								default:
									if (!this.rendererByCompId.has(e.id)) {
										var r = yf(e.id, e.styles, []);
										this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer);
									}
									return this.defaultRenderer;
							}
						}),
						(t.prototype.begin = function() {}),
						(t.prototype.end = function() {}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)(Qt(pf), Qt(hf), Qt(yc));
							},
							providedIn: null
						})),
						t
					);
				})(),
				xf = (function() {
					function t(t) {
						(this.eventManager = t), (this.data = Object.create(null));
					}
					return (
						(t.prototype.destroy = function() {}),
						(t.prototype.createElement = function(t, e) {
							return e ? document.createElementNS(gf[e] || e, t) : document.createElement(t);
						}),
						(t.prototype.createComment = function(t) {
							return document.createComment(t);
						}),
						(t.prototype.createText = function(t) {
							return document.createTextNode(t);
						}),
						(t.prototype.appendChild = function(t, e) {
							t.appendChild(e);
						}),
						(t.prototype.insertBefore = function(t, e, n) {
							t && t.insertBefore(e, n);
						}),
						(t.prototype.removeChild = function(t, e) {
							t && t.removeChild(e);
						}),
						(t.prototype.selectRootElement = function(t, e) {
							var n = 'string' == typeof t ? document.querySelector(t) : t;
							if (!n) throw new Error('The selector "' + t + '" did not match any elements');
							return e || (n.textContent = ''), n;
						}),
						(t.prototype.parentNode = function(t) {
							return t.parentNode;
						}),
						(t.prototype.nextSibling = function(t) {
							return t.nextSibling;
						}),
						(t.prototype.setAttribute = function(t, e, n, r) {
							if (r) {
								e = r + ':' + e;
								var o = gf[r];
								o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n);
							} else t.setAttribute(e, n);
						}),
						(t.prototype.removeAttribute = function(t, e, n) {
							if (n) {
								var r = gf[n];
								r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ':' + e);
							} else t.removeAttribute(e);
						}),
						(t.prototype.addClass = function(t, e) {
							t.classList.add(e);
						}),
						(t.prototype.removeClass = function(t, e) {
							t.classList.remove(e);
						}),
						(t.prototype.setStyle = function(t, e, n, r) {
							r & pu.DashCase ? t.style.setProperty(e, n, r & pu.Important ? 'important' : '') : (t.style[e] = n);
						}),
						(t.prototype.removeStyle = function(t, e, n) {
							n & pu.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
						}),
						(t.prototype.setProperty = function(t, e, n) {
							kf(e, 'property'), (t[e] = n);
						}),
						(t.prototype.setValue = function(t, e) {
							t.nodeValue = e;
						}),
						(t.prototype.listen = function(t, e, n) {
							return kf(e, 'listener'), 'string' == typeof t ? this.eventManager.addGlobalEventListener(t, e, wf(n)) : this.eventManager.addEventListener(t, e, wf(n));
						}),
						t
					);
				})(),
				Cf = (function() {
					return '@'.charCodeAt(0);
				})();
			function kf(t, e) {
				if (t.charCodeAt(0) === Cf) throw new Error('Found the synthetic ' + e + ' ' + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
			}
			var Sf = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						i.component = r;
						var a = yf(o + '-' + r.id, r.styles, []);
						return n.addStyles(a), (i.contentAttr = vf.replace(mf, o + '-' + r.id)), (i.hostAttr = bf.replace(mf, o + '-' + r.id)), i;
					}
					return (
						o(e, t),
						(e.prototype.applyToHost = function(e) {
							t.prototype.setAttribute.call(this, e, this.hostAttr, '');
						}),
						(e.prototype.createElement = function(e, n) {
							var r = t.prototype.createElement.call(this, e, n);
							return t.prototype.setAttribute.call(this, r, this.contentAttr, ''), r;
						}),
						e
					);
				})(xf),
				Pf = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						(i.sharedStylesHost = n),
							(i.hostEl = r),
							(i.component = o),
							(i.shadowRoot = o.encapsulation === Ce.ShadowDom ? r.attachShadow({ mode: 'open' }) : r.createShadowRoot()),
							i.sharedStylesHost.addHost(i.shadowRoot);
						for (var a = yf(o.id, o.styles, []), s = 0; s < a.length; s++) {
							var l = document.createElement('style');
							(l.textContent = a[s]), i.shadowRoot.appendChild(l);
						}
						return i;
					}
					return (
						o(e, t),
						(e.prototype.nodeOrShadowRoot = function(t) {
							return t === this.hostEl ? this.shadowRoot : t;
						}),
						(e.prototype.destroy = function() {
							this.sharedStylesHost.removeHost(this.shadowRoot);
						}),
						(e.prototype.appendChild = function(e, n) {
							return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n);
						}),
						(e.prototype.insertBefore = function(e, n, r) {
							return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r);
						}),
						(e.prototype.removeChild = function(e, n) {
							return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n);
						}),
						(e.prototype.parentNode = function(e) {
							return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)));
						}),
						e
					);
				})(xf),
				Ef = (function() {
					return (
						('undefined' != typeof Zone && Zone.__symbol__) ||
						function(t) {
							return '__zone_symbol__' + t;
						}
					);
				})(),
				Of = Ef('addEventListener'),
				If = Ef('removeEventListener'),
				Tf = {},
				Mf = '__zone_symbol__propagationStopped',
				Af = (function() {
					var t = 'undefined' != typeof Zone && Zone[Ef('BLACK_LISTED_EVENTS')];
					if (t) {
						var e = {};
						return (
							t.forEach(function(t) {
								e[t] = t;
							}),
							e
						);
					}
				})(),
				jf = function(t) {
					return !!Af && Af.hasOwnProperty(t);
				},
				Rf = function(t) {
					var e = Tf[t.type];
					if (e) {
						var n = this[e];
						if (n) {
							var r = [t];
							if (1 === n.length) return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
							for (var o = n.slice(), i = 0; i < o.length && !0 !== t[Mf]; i++) {
								var a;
								(a = o[i]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
							}
						}
					}
				},
				Df = (function(t) {
					function e(e, n, r) {
						var o = t.call(this, e) || this;
						return (
							(o.ngZone = n),
							(r &&
								(function(t) {
									return t === Gp;
								})(r)) ||
								o.patchEvent(),
							o
						);
					}
					return (
						o(e, t),
						(e.prototype.patchEvent = function() {
							if ('undefined' != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
								var t = (Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation);
								Event.prototype.stopImmediatePropagation = function() {
									this && (this[Mf] = !0), t && t.apply(this, arguments);
								};
							}
						}),
						(e.prototype.supports = function(t) {
							return !0;
						}),
						(e.prototype.addEventListener = function(t, e, n) {
							var r = this,
								o = n;
							if (!t[Of] || (Gc.isInAngularZone() && !jf(e))) t.addEventListener(e, o, !1);
							else {
								var i = Tf[e];
								i || (i = Tf[e] = Ef('ANGULAR' + e + 'FALSE'));
								var a = t[i],
									s = a && a.length > 0;
								a || (a = t[i] = []);
								var l = jf(e) ? Zone.root : Zone.current;
								if (0 === a.length) a.push({ zone: l, handler: o });
								else {
									for (var u = !1, c = 0; c < a.length; c++)
										if (a[c].handler === o) {
											u = !0;
											break;
										}
									u || a.push({ zone: l, handler: o });
								}
								s || t[Of](e, Rf, !1);
							}
							return function() {
								return r.removeEventListener(t, e, o);
							};
						}),
						(e.prototype.removeEventListener = function(t, e, n) {
							var r = t[If];
							if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
							var o = Tf[e],
								i = o && t[o];
							if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
							for (var a = !1, s = 0; s < i.length; s++)
								if (i[s].handler === n) {
									(a = !0), i.splice(s, 1);
									break;
								}
							a ? 0 === i.length && r.apply(t, [e, Rf, !1]) : t.removeEventListener.apply(t, [e, n, !1]);
						}),
						(e.ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(qp), Qt(Gc), Qt(Sc, 8));
							},
							providedIn: null
						})),
						e
					);
				})(ff),
				Nf = {
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
				Uf = new Nt('HammerGestureConfig'),
				Lf = new Nt('HammerLoader'),
				Hf = (function() {
					function t() {
						(this.events = []), (this.overrides = {});
					}
					return (
						(t.prototype.buildHammer = function(t) {
							var e = new Hammer(t, this.options);
							for (var n in (e.get('pinch').set({ enable: !0 }), e.get('rotate').set({ enable: !0 }), this.overrides)) e.get(n).set(this.overrides[n]);
							return e;
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				zf = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						return (i._config = n), (i.console = r), (i.loader = o), i;
					}
					return (
						o(e, t),
						(e.prototype.supports = function(t) {
							return !(
								(!Nf.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t)) ||
								(!window.Hammer &&
									!this.loader &&
									(this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
							);
						}),
						(e.prototype.addEventListener = function(t, e, n) {
							var r = this,
								o = this.manager.getZone();
							if (((e = e.toLowerCase()), !window.Hammer && this.loader)) {
								var i = !1,
									a = function() {
										i = !0;
									};
								return (
									this.loader()
										.then(function() {
											if (!window.Hammer) return r.console.warn('The custom HAMMER_LOADER completed, but Hammer.JS is not present.'), void (a = function() {});
											i || (a = r.addEventListener(t, e, n));
										})
										.catch(function() {
											r.console.warn('The "' + e + '" event cannot be bound because the custom Hammer.JS loader failed.'), (a = function() {});
										}),
									function() {
										a();
									}
								);
							}
							return o.runOutsideAngular(function() {
								var i = r._config.buildHammer(t),
									a = function(t) {
										o.runGuarded(function() {
											n(t);
										});
									};
								return (
									i.on(e, a),
									function() {
										i.off(e, a), 'function' == typeof i.destroy && i.destroy();
									}
								);
							});
						}),
						(e.prototype.isCustomEvent = function(t) {
							return this._config.events.indexOf(t) > -1;
						}),
						(e.ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(qp), Qt(Uf), Qt(Ec), Qt(Lf, 8));
							},
							providedIn: null
						})),
						e
					);
				})(ff),
				Vf = ['alt', 'control', 'meta', 'shift'],
				Ff = {
					alt: function(t) {
						return t.altKey;
					},
					control: function(t) {
						return t.ctrlKey;
					},
					meta: function(t) {
						return t.metaKey;
					},
					shift: function(t) {
						return t.shiftKey;
					}
				},
				Bf = (function(t) {
					function e(e) {
						return t.call(this, e) || this;
					}
					var n;
					return (
						o(e, t),
						(n = e),
						(e.prototype.supports = function(t) {
							return null != n.parseEventName(t);
						}),
						(e.prototype.addEventListener = function(t, e, r) {
							var o = n.parseEventName(e),
								i = n.eventCallback(o.fullKey, r, this.manager.getZone());
							return this.manager.getZone().runOutsideAngular(function() {
								return Yp().onAndCancel(t, o.domEventName, i);
							});
						}),
						(e.parseEventName = function(t) {
							var e = t.toLowerCase().split('.'),
								r = e.shift();
							if (0 === e.length || ('keydown' !== r && 'keyup' !== r)) return null;
							var o = n._normalizeKey(e.pop()),
								i = '';
							if (
								(Vf.forEach(function(t) {
									var n = e.indexOf(t);
									n > -1 && (e.splice(n, 1), (i += t + '.'));
								}),
								(i += o),
								0 != e.length || 0 === o.length)
							)
								return null;
							var a = {};
							return (a.domEventName = r), (a.fullKey = i), a;
						}),
						(e.getEventFullKey = function(t) {
							var e = '',
								n = Yp().getEventKey(t);
							return (
								' ' === (n = n.toLowerCase()) ? (n = 'space') : '.' === n && (n = 'dot'),
								Vf.forEach(function(r) {
									r != n && (0, Ff[r])(t) && (e += r + '.');
								}),
								(e += n)
							);
						}),
						(e.eventCallback = function(t, e, r) {
							return function(o) {
								n.getEventFullKey(o) === t &&
									r.runGuarded(function() {
										return e(o);
									});
							};
						}),
						(e._normalizeKey = function(t) {
							switch (t) {
								case 'esc':
									return 'escape';
								default:
									return t;
							}
						}),
						(e.ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(qp));
							},
							providedIn: null
						})),
						e
					);
				})(ff),
				qf = (function() {
					return function() {};
				})(),
				Gf = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (n._doc = e), n;
					}
					return (
						o(e, t),
						(e.prototype.sanitize = function(t, e) {
							if (null == e) return null;
							switch (t) {
								case Kr.NONE:
									return e;
								case Kr.HTML:
									return e instanceof Wf ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, 'HTML'), Yr(this._doc, String(e)));
								case Kr.STYLE:
									return e instanceof Qf
										? e.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(e, 'Style'),
										  (function(t) {
												if (!(t = String(t).trim())) return '';
												var e = t.match(to);
												return (e && Ar(e[1]) === e[1]) ||
													(t.match($r) &&
														(function(t) {
															for (var e = !0, n = !0, r = 0; r < t.length; r++) {
																var o = t.charAt(r);
																"'" === o && n ? (e = !e) : '"' === o && e && (n = !n);
															}
															return e && n;
														})(t))
													? t
													: (Or() && console.warn('WARNING: sanitizing unsafe style value ' + t + ' (see http://g.co/ng/security#xss).'), 'unsafe');
										  })(e));
								case Kr.SCRIPT:
									if (e instanceof Yf) return e.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(e, 'Script'), new Error('unsafe value used in a script context'));
								case Kr.URL:
									return e instanceof Kf || e instanceof Jf ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, 'URL'), Ar(String(e)));
								case Kr.RESOURCE_URL:
									if (e instanceof Kf) return e.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(e, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
								default:
									throw new Error('Unexpected SecurityContext ' + t + ' (see http://g.co/ng/security#xss)');
							}
						}),
						(e.prototype.checkNotSafeValue = function(t, e) {
							if (t instanceof Zf) throw new Error('Required a safe ' + e + ', got a ' + t.getTypeName() + ' (see http://g.co/ng/security#xss)');
						}),
						(e.prototype.bypassSecurityTrustHtml = function(t) {
							return new Wf(t);
						}),
						(e.prototype.bypassSecurityTrustStyle = function(t) {
							return new Qf(t);
						}),
						(e.prototype.bypassSecurityTrustScript = function(t) {
							return new Yf(t);
						}),
						(e.prototype.bypassSecurityTrustUrl = function(t) {
							return new Jf(t);
						}),
						(e.prototype.bypassSecurityTrustResourceUrl = function(t) {
							return new Kf(t);
						}),
						(e.ngInjectableDef = wt({
							token: e,
							factory: function(t) {
								return new (t || e)(Qt(qp));
							},
							providedIn: null
						})),
						e
					);
				})(qf),
				Zf = (function() {
					function t(t) {
						this.changingThisBreaksApplicationSecurity = t;
					}
					return (
						(t.prototype.toString = function() {
							return 'SafeValue must use [property]=binding: ' + this.changingThisBreaksApplicationSecurity + ' (see http://g.co/ng/security#xss)';
						}),
						t
					);
				})(),
				Wf = (function(t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						o(e, t),
						(e.prototype.getTypeName = function() {
							return 'HTML';
						}),
						e
					);
				})(Zf),
				Qf = (function(t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						o(e, t),
						(e.prototype.getTypeName = function() {
							return 'Style';
						}),
						e
					);
				})(Zf),
				Yf = (function(t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						o(e, t),
						(e.prototype.getTypeName = function() {
							return 'Script';
						}),
						e
					);
				})(Zf),
				Jf = (function(t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						o(e, t),
						(e.prototype.getTypeName = function() {
							return 'URL';
						}),
						e
					);
				})(Zf),
				Kf = (function(t) {
					function e() {
						return (null !== t && t.apply(this, arguments)) || this;
					}
					return (
						o(e, t),
						(e.prototype.getTypeName = function() {
							return 'ResourceURL';
						}),
						e
					);
				})(Zf),
				Xf = [{ provide: Xr, useExisting: qf }, { provide: qf, useClass: Gf, deps: [qp] }],
				$f = op(gp, 'browser', [
					{ provide: Sc, useValue: 'browser' },
					{
						provide: kc,
						useValue: function() {
							nf.makeCurrent(), uf.init();
						},
						multi: !0
					},
					{ provide: vp, useClass: af, deps: [qp] },
					{
						provide: qp,
						useFactory: function() {
							return document;
						},
						deps: []
					}
				]),
				td = [
					Xf,
					{ provide: te, useValue: !0 },
					{
						provide: Yo,
						useFactory: function() {
							return new Yo();
						},
						deps: []
					},
					{ provide: cf, useClass: Df, multi: !0, deps: [qp, Gc, Sc] },
					{ provide: cf, useClass: Bf, multi: !0, deps: [qp] },
					{ provide: cf, useClass: zf, multi: !0, deps: [qp, Uf, Ec, [new ht(), Lf]] },
					{ provide: Uf, useClass: Hf, deps: [] },
					{ provide: _f, useClass: _f, deps: [pf, hf, yc] },
					{ provide: cu, useExisting: _f },
					{ provide: df, useExisting: hf },
					{ provide: hf, useClass: hf, deps: [qp] },
					{ provide: $c, useClass: $c, deps: [Gc] },
					{ provide: pf, useClass: pf, deps: [cf, Gc] },
					[]
				],
				ed = (function() {
					function t(t) {
						if (t)
							throw new Error(
								'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
							);
					}
					var e;
					return (
						(e = t),
						(t.withServerTransition = function(t) {
							return { ngModule: e, providers: [{ provide: yc, useValue: t.appId }, { provide: sf, useExisting: yc }, lf] };
						}),
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(n) {
								return new (n || t)(Qt(e, 12));
							},
							providers: td,
							imports: [Bp, bp]
						})),
						t
					);
				})();
			'undefined' != typeof window && window;
			const nd = ['message'],
				rd = ['tabindex', '-1', 3, 'id'],
				od = ['message', ''],
				id = ['class', 'close', 'type', 'button', 'aria-label', 'close-alert', 'autofocus', '', 3, 'click', 'blur', 4, 'ngIf'],
				ad = ['type', 'button', 'aria-label', 'close-alert', 'autofocus', '', 1, 'close', 3, 'click', 'blur'];
			function sd(t, e) {
				if (1 & t) {
					const t = Bn();
					vl(0, 'button', ad),
						xl('click', function(e) {
							return nr(t), Sl().closeAlert();
						}),
						xl('blur', function(e) {
							return nr(t), Sl().trap();
						}),
						Tl(1, ' X\n'),
						yl();
				}
			}
			const ld = ['*'],
				ud = ['content'],
				cd = ['href', '#', 1, 'show-focus', 3, 'click'];
			var pd = (function() {
					function t(t) {
						this.elementRef = t;
					}
					return (
						Object.defineProperty(t.prototype, 'class', {
							get: function() {
								return this.classList;
							},
							set: function(t) {
								t.includes('close')
									? ((this.classList = t.replace(/ close|close /g, '')), (this.close = !0), (this.role = 'alertdialog'))
									: ((this.classList = t), (this.close = !1), (this.role = 'alert')),
									(this.ariaLabelledby = this.id = this.class.match(/\balert\S+\b/)[0]);
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.ngOnInit = function() {
							(this.hostClass = this.class), (this.tabindex = '-1');
						}),
						(t.prototype.closeAlert = function() {
							this.hostClass = 'hide';
						}),
						(t.prototype.trap = function() {
							this.elementRef.nativeElement.focus();
						}),
						(t.ngComponentDef = je({
							type: t,
							selectors: [['ez-alert'], ['', 8, 'alert-bad'], ['', 8, 'alert-good'], ['', 8, 'alert-info'], ['', 8, 'alert-warn']],
							factory: function(e) {
								return new (e || t)(cl(lu));
							},
							viewQuery: function(t, e) {
								var n, r, o, i;
								1 & t && ((r = nd), !0, null, gc((o = Bn()), (i = o[We]), r, !0, null, !0), (i.staticViewQueries = !0)), 2 & t && hc((n = mc())) && (e.message = n.first);
							},
							hostBindings: function(t, e, n) {
								var r, o;
								1 & t &&
									(o = (r = Bn())[We]).firstTemplatePass &&
									((function(t, e, n) {
										var r = t.expandoInstructions,
											o = r.length;
										o >= 2 && r[o - 2] === e.hostBindings ? (r[o - 1] = r[o - 1] + 4) : r.push(e.hostBindings, 4);
									})(o, Vn),
									(function(t, e, n) {
										for (var r = 0; r < 4; r++) e.push(Jo), t.blueprint.push(Jo), t.data.push(null);
									})(o, r)),
									2 & t && (qs('class', e.hostClass), qs('tabindex', e.tabindex), qs('aria-labelledby', e.ariaLabelledby), qs('role', e.role));
							},
							inputs: { class: 'class' },
							ngContentSelectors: ld,
							consts: 4,
							vars: 2,
							template: function(t, e) {
								1 & t && (El(), vl(0, 'p', rd, od), Il(2), yl(), ul(3, sd, 2, 0, 'button', id)), 2 & t && (qs('id', e.id), qa(3), Fs('ngIf', e.close));
							},
							directives: [zp],
							styles: [
								'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
							]
						})),
						t
					);
				})(),
				fd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[], Bp]
						})),
						t
					);
				})(),
				dd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[fd]]
						})),
						t
					);
				})(),
				hd = (function() {
					function t() {}
					return (
						(t.prototype.ngOnInit = function() {}),
						(t.ngComponentDef = je({
							type: t,
							selectors: [['ez-badge'], ['', 8, 'badge-sm'], ['', 8, 'badge-md'], ['', 8, 'badge-lg']],
							factory: function(e) {
								return new (e || t)();
							},
							ngContentSelectors: ld,
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && (El(), Il(0));
							},
							styles: [
								'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
							]
						})),
						t
					);
				})(),
				gd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				md = (function() {
					function t() {}
					return (
						(t.prototype.ngOnInit = function() {}),
						(t.ngComponentDef = je({
							type: t,
							selectors: [
								['ez-button'],
								['', 8, 'btn-xs'],
								['', 8, 'btn-sm'],
								['', 8, 'btn-md'],
								['', 8, 'btn-lg'],
								['', 8, 'btn-xl'],
								['', 8, 'btn-full'],
								['', 8, 'btn-group-col'],
								['', 8, 'btn-group-full'],
								['', 8, 'btn-group-row']
							],
							factory: function(e) {
								return new (e || t)();
							},
							ngContentSelectors: ld,
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && (El(), Il(0));
							},
							styles: [
								'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;-webkit-box-flex:1;flex-grow:1;flex-shrink:0}'
							]
						})),
						t
					);
				})(),
				bd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				vd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				yd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				wd = (function() {
					function t() {}
					return (
						(t.prototype.ngOnInit = function() {}),
						(t.ngComponentDef = je({
							type: t,
							selectors: [
								['ez-form'],
								['', 8, 'checkbox-group'],
								['', 8, 'field-group'],
								['', 8, 'fieldset'],
								['', 8, 'form-field'],
								['', 8, 'form-group'],
								['', 8, 'form-group-inline'],
								['', 8, 'form-label'],
								['', 8, 'radio-group']
							],
							factory: function(e) {
								return new (e || t)();
							},
							ngContentSelectors: ld,
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && (El(), Il(0));
							},
							styles: [
								'@charset "UTF-8";.checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1 1 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border,box-shadow;transition-property:border,box-shadow;-webkit-transition-timing-function:linear;transition-timing-function:linear;border:.0625rem solid #bdbdbd}.form-field[_nghost-%COMP%]:not(:disabled), .form-field[_nghost-%COMP%]:not([disabled]){background-color:#fff}.form-field[_nghost-%COMP%]:-moz-read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[_nghost-%COMP%]:read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[type=checkbox][_nghost-%COMP%], .form-field[type=radio][_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;position:relative;width:1rem}.form-field[type=checkbox][_nghost-%COMP%]::after, .form-field[type=radio][_nghost-%COMP%]::after{display:block;font-size:1.175rem;height:.95rem;left:0;line-height:.8rem;position:absolute;text-align:center;top:0;width:.95rem}.form-field[type=checkbox][_nghost-%COMP%]:checked::after{content:"\u2713"}.form-field[type=radio][_nghost-%COMP%]{border-radius:50%}.form-field[type=radio][_nghost-%COMP%]:checked::after{content:"\u25cf"}.form-field[_nghost-%COMP%]:hover{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border;transition-property:border;-webkit-transition-timing-function:linear;transition-timing-function:linear;border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border,box-shadow;transition-property:border,box-shadow;-webkit-transition-timing-function:linear;transition-timing-function:linear;box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3;outline:#2196f3 dotted 1px}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){-webkit-box-flex:1;flex:1 0 13.75rem;padding:.5rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-moz-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{-webkit-box-flex:1;flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{background-color:inherit;color:#8d8d8d;height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#8d8d8d}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{-webkit-box-flex:0;flex:0 0 7.5rem;flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{-webkit-box-flex:0;flex:none;font-size:1rem;padding-left:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}'
							]
						})),
						t
					);
				})(),
				_d = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				xd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Cd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				kd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Sd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Pd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Ed = (function() {
					function t() {}
					return (
						(t.prototype.ngOnInit = function() {}),
						(t.ngComponentDef = je({
							type: t,
							selectors: [['ez-spinner'], ['', 8, 'spinner'], ['', 8, 'spinner-dotted']],
							factory: function(e) {
								return new (e || t)();
							},
							ngContentSelectors: ld,
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && (El(), Il(0));
							},
							styles: [
								'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
							]
						})),
						t
					);
				})(),
				Od = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Id = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Td = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Md = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Ad = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				jd = (function() {
					function t(t) {
						this.elementRef = t;
					}
					return (
						(t.prototype.ngOnInit = function() {}),
						(t.prototype.skip = function() {
							this.content.nativeElement.focus();
						}),
						(t.ngComponentDef = je({
							type: t,
							selectors: [['ez-root']],
							factory: function(e) {
								return new (e || t)(cl(lu));
							},
							viewQuery: function(t, e) {
								var n, r, o;
								1 & t && ((r = ud), !0, null, gc((o = Bn()), o[We], r, !0, null, !1)), 2 & t && hc((n = mc())) && (e.content = n.first);
							},
							ngContentSelectors: ld,
							consts: 3,
							vars: 0,
							template: function(t, e) {
								1 & t &&
									(El(),
									vl(0, 'a', cd),
									xl('click', function(t) {
										return e.skip();
									}),
									Tl(1, 'Skip to content'),
									yl(),
									Il(2));
							},
							styles: [
								'@charset "UTF-8";/*! Easy CSS/Angular Framework v0.0.1\n * Author: Paul Chehak\n * License: MIT License\n */a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:"\u2012";color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex="-1"]:focus,input[type=range]:focus{outline:0}/*! Easy CSS/Angular Framework v0.0.1\n * Author: Paul Chehak\n * License: MIT License\n */.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start}.col,.col-full{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{-webkit-box-pack:center;justify-content:center}.align-l,.col.align-t{-webkit-box-pack:start;justify-content:flex-start}.align-r,.col.align-b{-webkit-box-pack:end;justify-content:flex-end}.align-m,.col.align-c{-webkit-box-align:center;align-items:center}.align-b,.col.align-r{-webkit-box-align:end;align-items:flex-end}.align-t,.col.align-l{-webkit-box-align:start;align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{-webkit-box-pack:justify;justify-content:space-between}.align-st{-webkit-box-align:stretch;align-items:stretch}.align-cm{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.item-g-0{-webkit-box-flex:0;flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{-webkit-box-flex:1;flex-grow:1;flex-shrink:1}.item-g-1{-webkit-box-flex:1;flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{-webkit-box-flex:2;flex-grow:2;flex-shrink:2}.item-g-2{-webkit-box-flex:2;flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{-webkit-box-flex:3;flex-grow:3;flex-shrink:3}.item-g-3{-webkit-box-flex:3;flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{-webkit-box-flex:4;flex-grow:4;flex-shrink:4}.item-g-4{-webkit-box-flex:4;flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{-webkit-box-flex:5;flex-grow:5;flex-shrink:5}.item-g-5{-webkit-box-flex:5;flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{-webkit-box-flex:6;flex-grow:6;flex-shrink:6}.item-g-6{-webkit-box-flex:6;flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{-webkit-box-flex:7;flex-grow:7;flex-shrink:7}.item-g-7{-webkit-box-flex:7;flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{-webkit-box-flex:8;flex-grow:8;flex-shrink:8}.item-g-8{-webkit-box-flex:8;flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{-webkit-box-flex:9;flex-grow:9;flex-shrink:9}.item-g-9{-webkit-box-flex:9;flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{-webkit-box-flex:10;flex-grow:10;flex-shrink:10}.item-g-10{-webkit-box-flex:10;flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{-webkit-box-flex:11;flex-grow:11;flex-shrink:11}.item-g-11{-webkit-box-flex:11;flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{-webkit-box-flex:12;flex-grow:12;flex-shrink:12}.item-g-12{-webkit-box-flex:12;flex-grow:12}.item-s-12{flex-shrink:12}[class*=flex-g]{flex-basis:auto}.item-order-1{-webkit-box-ordinal-group:2;order:1}.item-order-2{-webkit-box-ordinal-group:3;order:2}.item-order-3{-webkit-box-ordinal-group:4;order:3}.item-order-4{-webkit-box-ordinal-group:5;order:4}.item-order-5{-webkit-box-ordinal-group:6;order:5}.item-order-6{-webkit-box-ordinal-group:7;order:6}.item-order-7{-webkit-box-ordinal-group:8;order:7}.item-order-8{-webkit-box-ordinal-group:9;order:8}.item-order-9{-webkit-box-ordinal-group:10;order:9}.item-order-10{-webkit-box-ordinal-group:11;order:10}.item-order-11{-webkit-box-ordinal-group:12;order:11}.item-order-12{-webkit-box-ordinal-group:13;order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:46rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}:disabled,[disabled]{background-color:#efefef;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}'
							],
							encapsulation: 2
						})),
						t
					);
				})(),
				Rd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[]]
						})),
						t
					);
				})(),
				Dd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [dd, gd, bd, vd, yd, _d, xd, Cd, kd, Sd, Pd, Od, Id, Td, Md, Ad]
						})),
						t
					);
				})();
			function Nd() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				var n = t[t.length - 1];
				return U(n) ? (t.pop(), J(t, n)) : rt(t);
			}
			var Ud = (function(t) {
				function e(e) {
					var n = t.call(this) || this;
					return (n._value = e), n;
				}
				return (
					o(e, t),
					Object.defineProperty(e.prototype, 'value', {
						get: function() {
							return this.getValue();
						},
						enumerable: !0,
						configurable: !0
					}),
					(e.prototype._subscribe = function(e) {
						var n = t.prototype._subscribe.call(this, e);
						return n && !n.closed && e.next(this._value), n;
					}),
					(e.prototype.getValue = function() {
						if (this.hasError) throw this.thrownError;
						if (this.closed) throw new A();
						return this._value;
					}),
					(e.prototype.next = function(e) {
						t.prototype.next.call(this, (this._value = e));
					}),
					e
				);
			})(D);
			function Ld() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			Ld.prototype = Object.create(Error.prototype);
			var Hd = Ld,
				zd = {},
				Vd = (function() {
					function t(t) {
						this.resultSelector = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Fd(t, this.resultSelector));
						}),
						t
					);
				})(),
				Fd = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.resultSelector = n), (r.active = 0), (r.values = []), (r.observables = []), r;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							this.values.push(zd), this.observables.push(t);
						}),
						(e.prototype._complete = function() {
							var t = this.observables,
								e = t.length;
							if (0 === e) this.destination.complete();
							else {
								(this.active = e), (this.toRespond = e);
								for (var n = 0; n < e; n++) {
									var r = t[n];
									this.add(G(this, r, r, n));
								}
							}
						}),
						(e.prototype.notifyComplete = function(t) {
							0 == (this.active -= 1) && this.destination.complete();
						}),
						(e.prototype.notifyNext = function(t, e, n, r, o) {
							var i = this.values,
								a = this.toRespond ? (i[n] === zd ? --this.toRespond : this.toRespond) : 0;
							(i[n] = e), 0 === a && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()));
						}),
						(e.prototype._tryResultSelector = function(t) {
							var e;
							try {
								e = this.resultSelector.apply(this, t);
							} catch (n) {
								return void this.destination.error(n);
							}
							this.destination.next(e);
						}),
						e
					);
				})(Z),
				Bd = new I(function(t) {
					return t.complete();
				});
			function qd(t) {
				return t
					? (function(t) {
							return new I(function(e) {
								return t.schedule(function() {
									return e.complete();
								});
							});
					  })(t)
					: Bd;
			}
			function Gd(t) {
				return new I(function(e) {
					var n;
					try {
						n = t();
					} catch (r) {
						return void e.error(r);
					}
					return (n ? K(n) : qd()).subscribe(e);
				});
			}
			function Zd() {
				return nt(1);
			}
			function Wd(t, e) {
				return function(n) {
					return n.lift(new Qd(t, e));
				};
			}
			var Qd = (function() {
					function t(t, e) {
						(this.predicate = t), (this.thisArg = e);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Yd(t, this.predicate, this.thisArg));
						}),
						t
					);
				})(),
				Yd = (function(t) {
					function e(e, n, r) {
						var o = t.call(this, e) || this;
						return (o.predicate = n), (o.thisArg = r), (o.count = 0), o;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							var e;
							try {
								e = this.predicate.call(this.thisArg, t, this.count++);
							} catch (n) {
								return void this.destination.error(n);
							}
							e && this.destination.next(t);
						}),
						e
					);
				})(C);
			function Jd() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			Jd.prototype = Object.create(Error.prototype);
			var Kd = Jd;
			function Xd(t) {
				return function(e) {
					return 0 === t ? qd() : e.lift(new $d(t));
				};
			}
			var $d = (function() {
					function t(t) {
						if (((this.total = t), this.total < 0)) throw new Kd();
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new th(t, this.total));
						}),
						t
					);
				})(),
				th = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							var e = this.ring,
								n = this.total,
								r = this.count++;
							e.length < n ? e.push(t) : (e[r % n] = t);
						}),
						(e.prototype._complete = function() {
							var t = this.destination,
								e = this.count;
							if (e > 0)
								for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
									var i = e++ % n;
									t.next(r[i]);
								}
							t.complete();
						}),
						e
					);
				})(C);
			function eh(t) {
				return (
					void 0 === t && (t = oh),
					function(e) {
						return e.lift(new nh(t));
					}
				);
			}
			var nh = (function() {
					function t(t) {
						this.errorFactory = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new rh(t, this.errorFactory));
						}),
						t
					);
				})(),
				rh = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.errorFactory = n), (r.hasValue = !1), r;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							(this.hasValue = !0), this.destination.next(t);
						}),
						(e.prototype._complete = function() {
							if (this.hasValue) return this.destination.complete();
							var t = void 0;
							try {
								t = this.errorFactory();
							} catch (e) {
								t = e;
							}
							this.destination.error(t);
						}),
						e
					);
				})(C);
			function oh() {
				return new Hd();
			}
			function ih(t) {
				return (
					void 0 === t && (t = null),
					function(e) {
						return e.lift(new ah(t));
					}
				);
			}
			var ah = (function() {
					function t(t) {
						this.defaultValue = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new sh(t, this.defaultValue));
						}),
						t
					);
				})(),
				sh = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.defaultValue = n), (r.isEmpty = !0), r;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							(this.isEmpty = !1), this.destination.next(t);
						}),
						(e.prototype._complete = function() {
							this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
						}),
						e
					);
				})(C);
			function lh(t, e) {
				var n = arguments.length >= 2;
				return function(r) {
					return r.pipe(
						t
							? Wd(function(e, n) {
									return t(e, n, r);
							  })
							: et,
						Xd(1),
						n
							? ih(e)
							: eh(function() {
									return new Hd();
							  })
					);
				};
			}
			function uh(t) {
				return function(e) {
					var n = new ch(t),
						r = e.lift(n);
					return (n.caught = r);
				};
			}
			var ch = (function() {
					function t(t) {
						this.selector = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new ph(t, this.selector, this.caught));
						}),
						t
					);
				})(),
				ph = (function(t) {
					function e(e, n, r) {
						var o = t.call(this, e) || this;
						return (o.selector = n), (o.caught = r), o;
					}
					return (
						o(e, t),
						(e.prototype.error = function(e) {
							if (!this.isStopped) {
								var n = void 0;
								try {
									n = this.selector(e, this.caught);
								} catch (o) {
									return void t.prototype.error.call(this, o);
								}
								this._unsubscribeAndRecycle();
								var r = new L(this, void 0, void 0);
								this.add(r), G(this, n, void 0, void 0, r);
							}
						}),
						e
					);
				})(Z);
			function fh(t) {
				return function(e) {
					return 0 === t ? qd() : e.lift(new dh(t));
				};
			}
			var dh = (function() {
					function t(t) {
						if (((this.total = t), this.total < 0)) throw new Kd();
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new hh(t, this.total));
						}),
						t
					);
				})(),
				hh = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.total = n), (r.count = 0), r;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							var e = this.total,
								n = ++this.count;
							n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()));
						}),
						e
					);
				})(C);
			function gh(t, e) {
				var n = arguments.length >= 2;
				return function(r) {
					return r.pipe(
						t
							? Wd(function(e, n) {
									return t(e, n, r);
							  })
							: et,
						fh(1),
						n
							? ih(e)
							: eh(function() {
									return new Hd();
							  })
					);
				};
			}
			var mh = (function() {
					function t(t, e, n) {
						(this.predicate = t), (this.thisArg = e), (this.source = n);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new bh(t, this.predicate, this.thisArg, this.source));
						}),
						t
					);
				})(),
				bh = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						return (i.predicate = n), (i.thisArg = r), (i.source = o), (i.index = 0), (i.thisArg = r || i), i;
					}
					return (
						o(e, t),
						(e.prototype.notifyComplete = function(t) {
							this.destination.next(t), this.destination.complete();
						}),
						(e.prototype._next = function(t) {
							var e = !1;
							try {
								e = this.predicate.call(this.thisArg, t, this.index++, this.source);
							} catch (n) {
								return void this.destination.error(n);
							}
							e || this.notifyComplete(!1);
						}),
						(e.prototype._complete = function() {
							this.notifyComplete(!0);
						}),
						e
					);
				})(C);
			function vh(t, e) {
				return 'function' == typeof e
					? function(n) {
							return n.pipe(
								vh(function(n, r) {
									return K(t(n, r)).pipe(
										W(function(t, o) {
											return e(n, t, r, o);
										})
									);
								})
							);
					  }
					: function(e) {
							return e.lift(new yh(t));
					  };
			}
			var yh = (function() {
					function t(t) {
						this.project = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new wh(t, this.project));
						}),
						t
					);
				})(),
				wh = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.project = n), (r.index = 0), r;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							var e,
								n = this.index++;
							try {
								e = this.project(t, n);
							} catch (r) {
								return void this.destination.error(r);
							}
							this._innerSub(e, t, n);
						}),
						(e.prototype._innerSub = function(t, e, n) {
							var r = this.innerSubscription;
							r && r.unsubscribe();
							var o = new L(this, void 0, void 0);
							this.destination.add(o), (this.innerSubscription = G(this, t, e, n, o));
						}),
						(e.prototype._complete = function() {
							var e = this.innerSubscription;
							(e && !e.closed) || t.prototype._complete.call(this), this.unsubscribe();
						}),
						(e.prototype._unsubscribe = function() {
							this.innerSubscription = null;
						}),
						(e.prototype.notifyComplete = function(e) {
							this.destination.remove(e), (this.innerSubscription = null), this.isStopped && t.prototype._complete.call(this);
						}),
						(e.prototype.notifyNext = function(t, e, n, r, o) {
							this.destination.next(e);
						}),
						e
					);
				})(Z);
			function _h() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				return Zd()(Nd.apply(void 0, t));
			}
			function xh(t, e) {
				var n = !1;
				return (
					arguments.length >= 2 && (n = !0),
					function(r) {
						return r.lift(new Ch(t, e, n));
					}
				);
			}
			var Ch = (function() {
					function t(t, e, n) {
						void 0 === n && (n = !1), (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new kh(t, this.accumulator, this.seed, this.hasSeed));
						}),
						t
					);
				})(),
				kh = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						return (i.accumulator = n), (i._seed = r), (i.hasSeed = o), (i.index = 0), i;
					}
					return (
						o(e, t),
						Object.defineProperty(e.prototype, 'seed', {
							get: function() {
								return this._seed;
							},
							set: function(t) {
								(this.hasSeed = !0), (this._seed = t);
							},
							enumerable: !0,
							configurable: !0
						}),
						(e.prototype._next = function(t) {
							if (this.hasSeed) return this._tryNext(t);
							(this.seed = t), this.destination.next(t);
						}),
						(e.prototype._tryNext = function(t) {
							var e,
								n = this.index++;
							try {
								e = this.accumulator(this.seed, t, n);
							} catch (r) {
								this.destination.error(r);
							}
							(this.seed = e), this.destination.next(e);
						}),
						e
					);
				})(C);
			function Sh(t, e) {
				return X(t, e, 1);
			}
			function Ph(t, e, n) {
				return function(r) {
					return r.lift(new Eh(t, e, n));
				};
			}
			var Eh = (function() {
					function t(t, e, n) {
						(this.nextOrObserver = t), (this.error = e), (this.complete = n);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Oh(t, this.nextOrObserver, this.error, this.complete));
						}),
						t
					);
				})(),
				Oh = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						return (
							(i._tapNext = P),
							(i._tapError = P),
							(i._tapComplete = P),
							(i._tapError = r || P),
							(i._tapComplete = o || P),
							d(n) ? ((i._context = i), (i._tapNext = n)) : n && ((i._context = n), (i._tapNext = n.next || P), (i._tapError = n.error || P), (i._tapComplete = n.complete || P)),
							i
						);
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							try {
								this._tapNext.call(this._context, t);
							} catch (e) {
								return void this.destination.error(e);
							}
							this.destination.next(t);
						}),
						(e.prototype._error = function(t) {
							try {
								this._tapError.call(this._context, t);
							} catch (t) {
								return void this.destination.error(t);
							}
							this.destination.error(t);
						}),
						(e.prototype._complete = function() {
							try {
								this._tapComplete.call(this._context);
							} catch (t) {
								return void this.destination.error(t);
							}
							return this.destination.complete();
						}),
						e
					);
				})(C),
				Ih = (function() {
					function t(t) {
						this.callback = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Th(t, this.callback));
						}),
						t
					);
				})(),
				Th = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return r.add(new m(n)), r;
					}
					return o(e, t), e;
				})(C),
				Mh = (function() {
					return function(t, e) {
						(this.id = t), (this.url = e);
					};
				})(),
				Ah = (function(t) {
					function e(e, n, r, o) {
						void 0 === r && (r = 'imperative'), void 0 === o && (o = null);
						var i = t.call(this, e, n) || this;
						return (i.navigationTrigger = r), (i.restoredState = o), i;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return 'NavigationStart(id: ' + this.id + ", url: '" + this.url + "')";
						}),
						e
					);
				})(Mh),
				jh = (function(t) {
					function e(e, n, r) {
						var o = t.call(this, e, n) || this;
						return (o.urlAfterRedirects = r), o;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return 'NavigationEnd(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
						}),
						e
					);
				})(Mh),
				Rh = (function(t) {
					function e(e, n, r) {
						var o = t.call(this, e, n) || this;
						return (o.reason = r), o;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return 'NavigationCancel(id: ' + this.id + ", url: '" + this.url + "')";
						}),
						e
					);
				})(Mh),
				Dh = (function(t) {
					function e(e, n, r) {
						var o = t.call(this, e, n) || this;
						return (o.error = r), o;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return 'NavigationError(id: ' + this.id + ", url: '" + this.url + "', error: " + this.error + ')';
						}),
						e
					);
				})(Mh),
				Nh = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e, n) || this;
						return (i.urlAfterRedirects = r), (i.state = o), i;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return 'RoutesRecognized(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ')';
						}),
						e
					);
				})(Mh),
				Uh = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e, n) || this;
						return (i.urlAfterRedirects = r), (i.state = o), i;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return 'GuardsCheckStart(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ')';
						}),
						e
					);
				})(Mh),
				Lh = (function(t) {
					function e(e, n, r, o, i) {
						var a = t.call(this, e, n) || this;
						return (a.urlAfterRedirects = r), (a.state = o), (a.shouldActivate = i), a;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
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
						e
					);
				})(Mh),
				Hh = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e, n) || this;
						return (i.urlAfterRedirects = r), (i.state = o), i;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return 'ResolveStart(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ')';
						}),
						e
					);
				})(Mh),
				zh = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e, n) || this;
						return (i.urlAfterRedirects = r), (i.state = o), i;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return 'ResolveEnd(id: ' + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ')';
						}),
						e
					);
				})(Mh),
				Vh = (function() {
					function t(t) {
						this.route = t;
					}
					return (
						(t.prototype.toString = function() {
							return 'RouteConfigLoadStart(path: ' + this.route.path + ')';
						}),
						t
					);
				})(),
				Fh = (function() {
					function t(t) {
						this.route = t;
					}
					return (
						(t.prototype.toString = function() {
							return 'RouteConfigLoadEnd(path: ' + this.route.path + ')';
						}),
						t
					);
				})(),
				Bh = (function() {
					function t(t) {
						this.snapshot = t;
					}
					return (
						(t.prototype.toString = function() {
							return "ChildActivationStart(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') + "')";
						}),
						t
					);
				})(),
				qh = (function() {
					function t(t) {
						this.snapshot = t;
					}
					return (
						(t.prototype.toString = function() {
							return "ChildActivationEnd(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') + "')";
						}),
						t
					);
				})(),
				Gh = (function() {
					function t(t) {
						this.snapshot = t;
					}
					return (
						(t.prototype.toString = function() {
							return "ActivationStart(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') + "')";
						}),
						t
					);
				})(),
				Zh = (function() {
					function t(t) {
						this.snapshot = t;
					}
					return (
						(t.prototype.toString = function() {
							return "ActivationEnd(path: '" + ((this.snapshot.routeConfig && this.snapshot.routeConfig.path) || '') + "')";
						}),
						t
					);
				})(),
				Wh = (function() {
					function t(t, e, n) {
						(this.routerEvent = t), (this.position = e), (this.anchor = n);
					}
					return (
						(t.prototype.toString = function() {
							return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ', ' + this.position[1] : null) + "')";
						}),
						t
					);
				})(),
				Qh = (function() {
					function t() {}
					return (
						(t.ngComponentDef = je({
							type: t,
							selectors: [['ng-component']],
							factory: function(e) {
								return new (e || t)();
							},
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && wl(0, 'router-outlet');
							},
							directives: function() {
								return [Xm];
							},
							encapsulation: 2
						})),
						t
					);
				})(),
				Yh = 'primary',
				Jh = (function() {
					function t(t) {
						this.params = t || {};
					}
					return (
						(t.prototype.has = function(t) {
							return this.params.hasOwnProperty(t);
						}),
						(t.prototype.get = function(t) {
							if (this.has(t)) {
								var e = this.params[t];
								return Array.isArray(e) ? e[0] : e;
							}
							return null;
						}),
						(t.prototype.getAll = function(t) {
							if (this.has(t)) {
								var e = this.params[t];
								return Array.isArray(e) ? e : [e];
							}
							return [];
						}),
						Object.defineProperty(t.prototype, 'keys', {
							get: function() {
								return Object.keys(this.params);
							},
							enumerable: !0,
							configurable: !0
						}),
						t
					);
				})();
			function Kh(t) {
				return new Jh(t);
			}
			var Xh = 'ngNavigationCancelingError';
			function $h(t) {
				var e = Error('NavigationCancelingError: ' + t);
				return (e[Xh] = !0), e;
			}
			function tg(t, e, n) {
				var r = n.path.split('/');
				if (r.length > t.length) return null;
				if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
				for (var o = {}, i = 0; i < r.length; i++) {
					var a = r[i],
						s = t[i];
					if (a.startsWith(':')) o[a.substring(1)] = s;
					else if (a !== s.path) return null;
				}
				return { consumed: t.slice(0, r.length), posParams: o };
			}
			var eg = (function() {
				return function(t, e) {
					(this.routes = t), (this.module = e);
				};
			})();
			function ng(t, e) {
				void 0 === e && (e = '');
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					rg(r, og(e, r));
				}
			}
			function rg(t, e) {
				if (!t)
					throw new Error(
						"\n      Invalid configuration of route '" +
							e +
							"': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
					);
				if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
				if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== Yh)
					throw new Error("Invalid configuration of route '" + e + "': a componentless route without children or loadChildren cannot have a named outlet set");
				if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together");
				if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together");
				if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together");
				if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together");
				if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together");
				if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
					throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
				if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified");
				if ('string' == typeof t.path && '/' === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash");
				if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
					throw new Error(
						'Invalid configuration of route \'{path: "' +
							e +
							'", redirectTo: "' +
							t.redirectTo +
							"\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
					);
				if (void 0 !== t.pathMatch && 'full' !== t.pathMatch && 'prefix' !== t.pathMatch)
					throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'");
				t.children && ng(t.children, e);
			}
			function og(t, e) {
				return e ? (t || e.path ? (t && !e.path ? t + '/' : !t && e.path ? e.path : t + '/' + e.path) : '') : t;
			}
			function ig(t) {
				var e = t.children && t.children.map(ig),
					n = e ? i({}, t, { children: e }) : i({}, t);
				return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== Yh && (n.component = Qh), n;
			}
			function ag(t, e) {
				var n,
					r = Object.keys(t),
					o = Object.keys(e);
				if (!r || !o || r.length != o.length) return !1;
				for (var i = 0; i < r.length; i++) if (t[(n = r[i])] !== e[n]) return !1;
				return !0;
			}
			function sg(t) {
				return Array.prototype.concat.apply([], t);
			}
			function lg(t) {
				return t.length > 0 ? t[t.length - 1] : null;
			}
			function ug(t, e) {
				for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
			}
			function cg(t) {
				return (e = t) && 'function' == typeof e.subscribe ? t : _l(t) ? K(Promise.resolve(t)) : Nd(t);
				var e;
			}
			function pg(t, e, n) {
				return n
					? (function(t, e) {
							return ag(t, e);
					  })(t.queryParams, e.queryParams) &&
							(function t(e, n) {
								if (!gg(e.segments, n.segments)) return !1;
								if (e.numberOfChildren !== n.numberOfChildren) return !1;
								for (var r in n.children) {
									if (!e.children[r]) return !1;
									if (!t(e.children[r], n.children[r])) return !1;
								}
								return !0;
							})(t.root, e.root)
					: (function(t, e) {
							return (
								Object.keys(e).length <= Object.keys(t).length &&
								Object.keys(e).every(function(n) {
									return e[n] === t[n];
								})
							);
					  })(t.queryParams, e.queryParams) &&
							(function t(e, n) {
								return (function e(n, r, o) {
									if (n.segments.length > o.length) return !!gg((a = n.segments.slice(0, o.length)), o) && !r.hasChildren();
									if (n.segments.length === o.length) {
										if (!gg(n.segments, o)) return !1;
										for (var i in r.children) {
											if (!n.children[i]) return !1;
											if (!t(n.children[i], r.children[i])) return !1;
										}
										return !0;
									}
									var a = o.slice(0, n.segments.length),
										s = o.slice(n.segments.length);
									return !!gg(n.segments, a) && !!n.children[Yh] && e(n.children[Yh], r, s);
								})(e, n, n.segments);
							})(t.root, e.root);
			}
			var fg = (function() {
					function t(t, e, n) {
						(this.root = t), (this.queryParams = e), (this.fragment = n);
					}
					return (
						Object.defineProperty(t.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Kh(this.queryParams)), this._queryParamMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.toString = function() {
							return yg.serialize(this);
						}),
						t
					);
				})(),
				dg = (function() {
					function t(t, e) {
						var n = this;
						(this.segments = t),
							(this.children = e),
							(this.parent = null),
							ug(e, function(t, e) {
								return (t.parent = n);
							});
					}
					return (
						(t.prototype.hasChildren = function() {
							return this.numberOfChildren > 0;
						}),
						Object.defineProperty(t.prototype, 'numberOfChildren', {
							get: function() {
								return Object.keys(this.children).length;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.toString = function() {
							return wg(this);
						}),
						t
					);
				})(),
				hg = (function() {
					function t(t, e) {
						(this.path = t), (this.parameters = e);
					}
					return (
						Object.defineProperty(t.prototype, 'parameterMap', {
							get: function() {
								return this._parameterMap || (this._parameterMap = Kh(this.parameters)), this._parameterMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.toString = function() {
							return Pg(this);
						}),
						t
					);
				})();
			function gg(t, e) {
				return (
					t.length === e.length &&
					t.every(function(t, n) {
						return t.path === e[n].path;
					})
				);
			}
			function mg(t, e) {
				var n = [];
				return (
					ug(t.children, function(t, r) {
						r === Yh && (n = n.concat(e(t, r)));
					}),
					ug(t.children, function(t, r) {
						r !== Yh && (n = n.concat(e(t, r)));
					}),
					n
				);
			}
			var bg = (function() {
					return function() {};
				})(),
				vg = (function() {
					function t() {}
					return (
						(t.prototype.parse = function(t) {
							var e = new Mg(t);
							return new fg(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
						}),
						(t.prototype.serialize = function(t) {
							var e, n;
							return (
								'/' +
								(function t(e, n) {
									if (!e.hasChildren()) return wg(e);
									if (n) {
										var r = e.children[Yh] ? t(e.children[Yh], !1) : '',
											o = [];
										return (
											ug(e.children, function(e, n) {
												n !== Yh && o.push(n + ':' + t(e, !1));
											}),
											o.length > 0 ? r + '(' + o.join('//') + ')' : r
										);
									}
									var i = mg(e, function(n, r) {
										return r === Yh ? [t(e.children[Yh], !1)] : [r + ':' + t(n, !1)];
									});
									return wg(e) + '/(' + i.join('//') + ')';
								})(t.root, !0) +
								((e = t.queryParams),
								(n = Object.keys(e).map(function(t) {
									var n = e[t];
									return Array.isArray(n)
										? n
												.map(function(e) {
													return xg(t) + '=' + xg(e);
												})
												.join('&')
										: xg(t) + '=' + xg(n);
								})).length
									? '?' + n.join('&')
									: '') +
								('string' == typeof t.fragment ? '#' + encodeURI(t.fragment) : '')
							);
						}),
						t
					);
				})(),
				yg = new vg();
			function wg(t) {
				return t.segments
					.map(function(t) {
						return Pg(t);
					})
					.join('/');
			}
			function _g(t) {
				return encodeURIComponent(t)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function xg(t) {
				return _g(t).replace(/%3B/gi, ';');
			}
			function Cg(t) {
				return _g(t)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function kg(t) {
				return decodeURIComponent(t);
			}
			function Sg(t) {
				return kg(t.replace(/\+/g, '%20'));
			}
			function Pg(t) {
				return (
					'' +
					Cg(t.path) +
					((e = t.parameters),
					Object.keys(e)
						.map(function(t) {
							return ';' + Cg(t) + '=' + Cg(e[t]);
						})
						.join(''))
				);
				var e;
			}
			var Eg = /^[^\/()?;=#]+/;
			function Og(t) {
				var e = t.match(Eg);
				return e ? e[0] : '';
			}
			var Ig = /^[^=?&#]+/,
				Tg = /^[^?&#]+/,
				Mg = (function() {
					function t(t) {
						(this.url = t), (this.remaining = t);
					}
					return (
						(t.prototype.parseRootSegment = function() {
							return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new dg([], {}) : new dg([], this.parseChildren());
						}),
						(t.prototype.parseQueryParams = function() {
							var t = {};
							if (this.consumeOptional('?'))
								do {
									this.parseQueryParam(t);
								} while (this.consumeOptional('&'));
							return t;
						}),
						(t.prototype.parseFragment = function() {
							return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
						}),
						(t.prototype.parseChildren = function() {
							if ('' === this.remaining) return {};
							this.consumeOptional('/');
							var t = [];
							for (this.peekStartsWith('(') || t.push(this.parseSegment()); this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/('); )
								this.capture('/'), t.push(this.parseSegment());
							var e = {};
							this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
							var n = {};
							return this.peekStartsWith('(') && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[Yh] = new dg(t, e)), n;
						}),
						(t.prototype.parseSegment = function() {
							var t = Og(this.remaining);
							if ('' === t && this.peekStartsWith(';')) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
							return this.capture(t), new hg(kg(t), this.parseMatrixParams());
						}),
						(t.prototype.parseMatrixParams = function() {
							for (var t = {}; this.consumeOptional(';'); ) this.parseParam(t);
							return t;
						}),
						(t.prototype.parseParam = function(t) {
							var e = Og(this.remaining);
							if (e) {
								this.capture(e);
								var n = '';
								if (this.consumeOptional('=')) {
									var r = Og(this.remaining);
									r && this.capture((n = r));
								}
								t[kg(e)] = kg(n);
							}
						}),
						(t.prototype.parseQueryParam = function(t) {
							var e,
								n = (e = this.remaining.match(Ig)) ? e[0] : '';
							if (n) {
								this.capture(n);
								var r = '';
								if (this.consumeOptional('=')) {
									var o = (function(t) {
										var e = t.match(Tg);
										return e ? e[0] : '';
									})(this.remaining);
									o && this.capture((r = o));
								}
								var i = Sg(n),
									a = Sg(r);
								if (t.hasOwnProperty(i)) {
									var s = t[i];
									Array.isArray(s) || (t[i] = s = [s]), s.push(a);
								} else t[i] = a;
							}
						}),
						(t.prototype.parseParens = function(t) {
							var e = {};
							for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
								var n = Og(this.remaining),
									r = this.remaining[n.length];
								if ('/' !== r && ')' !== r && ';' !== r) throw new Error("Cannot parse url '" + this.url + "'");
								var o = void 0;
								n.indexOf(':') > -1 ? ((o = n.substr(0, n.indexOf(':'))), this.capture(o), this.capture(':')) : t && (o = Yh);
								var i = this.parseChildren();
								(e[o] = 1 === Object.keys(i).length ? i[Yh] : new dg([], i)), this.consumeOptional('//');
							}
							return e;
						}),
						(t.prototype.peekStartsWith = function(t) {
							return this.remaining.startsWith(t);
						}),
						(t.prototype.consumeOptional = function(t) {
							return !!this.peekStartsWith(t) && ((this.remaining = this.remaining.substring(t.length)), !0);
						}),
						(t.prototype.capture = function(t) {
							if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".');
						}),
						t
					);
				})(),
				Ag = (function() {
					function t(t) {
						this._root = t;
					}
					return (
						Object.defineProperty(t.prototype, 'root', {
							get: function() {
								return this._root.value;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.parent = function(t) {
							var e = this.pathFromRoot(t);
							return e.length > 1 ? e[e.length - 2] : null;
						}),
						(t.prototype.children = function(t) {
							var e = jg(t, this._root);
							return e
								? e.children.map(function(t) {
										return t.value;
								  })
								: [];
						}),
						(t.prototype.firstChild = function(t) {
							var e = jg(t, this._root);
							return e && e.children.length > 0 ? e.children[0].value : null;
						}),
						(t.prototype.siblings = function(t) {
							var e = Rg(t, this._root);
							return e.length < 2
								? []
								: e[e.length - 2].children
										.map(function(t) {
											return t.value;
										})
										.filter(function(e) {
											return e !== t;
										});
						}),
						(t.prototype.pathFromRoot = function(t) {
							return Rg(t, this._root).map(function(t) {
								return t.value;
							});
						}),
						t
					);
				})();
			function jg(t, e) {
				var n, r;
				if (t === e.value) return e;
				try {
					for (var o = l(e.children), i = o.next(); !i.done; i = o.next()) {
						var a = jg(t, i.value);
						if (a) return a;
					}
				} catch (s) {
					n = { error: s };
				} finally {
					try {
						i && !i.done && (r = o.return) && r.call(o);
					} finally {
						if (n) throw n.error;
					}
				}
				return null;
			}
			function Rg(t, e) {
				var n, r;
				if (t === e.value) return [e];
				try {
					for (var o = l(e.children), i = o.next(); !i.done; i = o.next()) {
						var a = Rg(t, i.value);
						if (a.length) return a.unshift(e), a;
					}
				} catch (s) {
					n = { error: s };
				} finally {
					try {
						i && !i.done && (r = o.return) && r.call(o);
					} finally {
						if (n) throw n.error;
					}
				}
				return [];
			}
			var Dg = (function() {
				function t(t, e) {
					(this.value = t), (this.children = e);
				}
				return (
					(t.prototype.toString = function() {
						return 'TreeNode(' + this.value + ')';
					}),
					t
				);
			})();
			function Ng(t) {
				var e = {};
				return (
					t &&
						t.children.forEach(function(t) {
							return (e[t.value.outlet] = t);
						}),
					e
				);
			}
			var Ug = (function(t) {
				function e(e, n) {
					var r = t.call(this, e) || this;
					return (r.snapshot = n), Bg(r, e), r;
				}
				return (
					o(e, t),
					(e.prototype.toString = function() {
						return this.snapshot.toString();
					}),
					e
				);
			})(Ag);
			function Lg(t, e) {
				var n = (function(t, e) {
						var n = new Vg([], {}, {}, '', {}, Yh, e, null, t.root, -1, {});
						return new Fg('', new Dg(n, []));
					})(t, e),
					r = new Ud([new hg('', {})]),
					o = new Ud({}),
					i = new Ud({}),
					a = new Ud({}),
					s = new Ud(''),
					l = new Hg(r, o, a, s, i, Yh, e, n.root);
				return (l.snapshot = n.root), new Ug(new Dg(l, []), n);
			}
			var Hg = (function() {
				function t(t, e, n, r, o, i, a, s) {
					(this.url = t), (this.params = e), (this.queryParams = n), (this.fragment = r), (this.data = o), (this.outlet = i), (this.component = a), (this._futureSnapshot = s);
				}
				return (
					Object.defineProperty(t.prototype, 'routeConfig', {
						get: function() {
							return this._futureSnapshot.routeConfig;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(t.prototype, 'root', {
						get: function() {
							return this._routerState.root;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(t.prototype, 'parent', {
						get: function() {
							return this._routerState.parent(this);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(t.prototype, 'firstChild', {
						get: function() {
							return this._routerState.firstChild(this);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(t.prototype, 'children', {
						get: function() {
							return this._routerState.children(this);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(t.prototype, 'pathFromRoot', {
						get: function() {
							return this._routerState.pathFromRoot(this);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(t.prototype, 'paramMap', {
						get: function() {
							return (
								this._paramMap ||
									(this._paramMap = this.params.pipe(
										W(function(t) {
											return Kh(t);
										})
									)),
								this._paramMap
							);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(t.prototype, 'queryParamMap', {
						get: function() {
							return (
								this._queryParamMap ||
									(this._queryParamMap = this.queryParams.pipe(
										W(function(t) {
											return Kh(t);
										})
									)),
								this._queryParamMap
							);
						},
						enumerable: !0,
						configurable: !0
					}),
					(t.prototype.toString = function() {
						return this.snapshot ? this.snapshot.toString() : 'Future(' + this._futureSnapshot + ')';
					}),
					t
				);
			})();
			function zg(t, e) {
				void 0 === e && (e = 'emptyOnly');
				var n = t.pathFromRoot,
					r = 0;
				if ('always' !== e)
					for (r = n.length - 1; r >= 1; ) {
						var o = n[r],
							a = n[r - 1];
						if (o.routeConfig && '' === o.routeConfig.path) r--;
						else {
							if (a.component) break;
							r--;
						}
					}
				return (function(t) {
					return t.reduce(
						function(t, e) {
							return { params: i({}, t.params, e.params), data: i({}, t.data, e.data), resolve: i({}, t.resolve, e._resolvedData) };
						},
						{ params: {}, data: {}, resolve: {} }
					);
				})(n.slice(r));
			}
			var Vg = (function() {
					function t(t, e, n, r, o, i, a, s, l, u, c) {
						(this.url = t),
							(this.params = e),
							(this.queryParams = n),
							(this.fragment = r),
							(this.data = o),
							(this.outlet = i),
							(this.component = a),
							(this.routeConfig = s),
							(this._urlSegment = l),
							(this._lastPathIndex = u),
							(this._resolve = c);
					}
					return (
						Object.defineProperty(t.prototype, 'root', {
							get: function() {
								return this._routerState.root;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'parent', {
							get: function() {
								return this._routerState.parent(this);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'firstChild', {
							get: function() {
								return this._routerState.firstChild(this);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'children', {
							get: function() {
								return this._routerState.children(this);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'pathFromRoot', {
							get: function() {
								return this._routerState.pathFromRoot(this);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'paramMap', {
							get: function() {
								return this._paramMap || (this._paramMap = Kh(this.params)), this._paramMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Kh(this.queryParams)), this._queryParamMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.toString = function() {
							return (
								"Route(url:'" +
								this.url
									.map(function(t) {
										return t.toString();
									})
									.join('/') +
								"', path:'" +
								(this.routeConfig ? this.routeConfig.path : '') +
								"')"
							);
						}),
						t
					);
				})(),
				Fg = (function(t) {
					function e(e, n) {
						var r = t.call(this, n) || this;
						return (r.url = e), Bg(r, n), r;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return qg(this._root);
						}),
						e
					);
				})(Ag);
			function Bg(t, e) {
				(e.value._routerState = t),
					e.children.forEach(function(e) {
						return Bg(t, e);
					});
			}
			function qg(t) {
				var e = t.children.length > 0 ? ' { ' + t.children.map(qg).join(', ') + ' } ' : '';
				return '' + t.value + e;
			}
			function Gg(t) {
				if (t.snapshot) {
					var e = t.snapshot,
						n = t._futureSnapshot;
					(t.snapshot = n),
						ag(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
						e.fragment !== n.fragment && t.fragment.next(n.fragment),
						ag(e.params, n.params) || t.params.next(n.params),
						(function(t, e) {
							if (t.length !== e.length) return !1;
							for (var n = 0; n < t.length; ++n) if (!ag(t[n], e[n])) return !1;
							return !0;
						})(e.url, n.url) || t.url.next(n.url),
						ag(e.data, n.data) || t.data.next(n.data);
				} else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
			}
			function Zg(t, e) {
				var n, r;
				return (
					ag(t.params, e.params) &&
					gg((n = t.url), (r = e.url)) &&
					n.every(function(t, e) {
						return ag(t.parameters, r[e].parameters);
					}) &&
					!(!t.parent != !e.parent) &&
					(!t.parent || Zg(t.parent, e.parent))
				);
			}
			function Wg(t) {
				return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath;
			}
			function Qg(t, e, n, r, o) {
				var i = {};
				return (
					r &&
						ug(r, function(t, e) {
							i[e] = Array.isArray(t)
								? t.map(function(t) {
										return '' + t;
								  })
								: '' + t;
						}),
					new fg(
						n.root === t
							? e
							: (function t(e, n, r) {
									var o = {};
									return (
										ug(e.children, function(e, i) {
											o[i] = e === n ? r : t(e, n, r);
										}),
										new dg(e.segments, o)
									);
							  })(n.root, t, e),
						i,
						o
					)
				);
			}
			var Yg = (function() {
					function t(t, e, n) {
						if (((this.isAbsolute = t), (this.numberOfDoubleDots = e), (this.commands = n), t && n.length > 0 && Wg(n[0]))) throw new Error('Root segment cannot have matrix parameters');
						var r = n.find(function(t) {
							return 'object' == typeof t && null != t && t.outlets;
						});
						if (r && r !== lg(n)) throw new Error('{outlets:{}} has to be the last command');
					}
					return (
						(t.prototype.toRoot = function() {
							return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
						}),
						t
					);
				})(),
				Jg = (function() {
					return function(t, e, n) {
						(this.segmentGroup = t), (this.processChildren = e), (this.index = n);
					};
				})();
			function Kg(t) {
				return 'object' == typeof t && null != t && t.outlets ? t.outlets[Yh] : '' + t;
			}
			function Xg(t, e, n) {
				if ((t || (t = new dg([], {})), 0 === t.segments.length && t.hasChildren())) return $g(t, e, n);
				var r = (function(t, e, n) {
						for (var r = 0, o = e, i = { match: !1, pathIndex: 0, commandIndex: 0 }; o < t.segments.length; ) {
							if (r >= n.length) return i;
							var a = t.segments[o],
								s = Kg(n[r]),
								l = r < n.length - 1 ? n[r + 1] : null;
							if (o > 0 && void 0 === s) break;
							if (s && l && 'object' == typeof l && void 0 === l.outlets) {
								if (!rm(s, l, a)) return i;
								r += 2;
							} else {
								if (!rm(s, {}, a)) return i;
								r++;
							}
							o++;
						}
						return { match: !0, pathIndex: o, commandIndex: r };
					})(t, e, n),
					o = n.slice(r.commandIndex);
				if (r.match && r.pathIndex < t.segments.length) {
					var i = new dg(t.segments.slice(0, r.pathIndex), {});
					return (i.children[Yh] = new dg(t.segments.slice(r.pathIndex), t.children)), $g(i, 0, o);
				}
				return r.match && 0 === o.length ? new dg(t.segments, {}) : r.match && !t.hasChildren() ? tm(t, e, n) : r.match ? $g(t, 0, o) : tm(t, e, n);
			}
			function $g(t, e, n) {
				if (0 === n.length) return new dg(t.segments, {});
				var r = (function(t) {
						var e, n;
						return 'object' != typeof t[0] ? (((e = {})[Yh] = t), e) : void 0 === t[0].outlets ? (((n = {})[Yh] = t), n) : t[0].outlets;
					})(n),
					o = {};
				return (
					ug(r, function(n, r) {
						null !== n && (o[r] = Xg(t.children[r], e, n));
					}),
					ug(t.children, function(t, e) {
						void 0 === r[e] && (o[e] = t);
					}),
					new dg(t.segments, o)
				);
			}
			function tm(t, e, n) {
				for (var r = t.segments.slice(0, e), o = 0; o < n.length; ) {
					if ('object' == typeof n[o] && void 0 !== n[o].outlets) {
						var i = em(n[o].outlets);
						return new dg(r, i);
					}
					if (0 === o && Wg(n[0])) r.push(new hg(t.segments[e].path, n[0])), o++;
					else {
						var a = Kg(n[o]),
							s = o < n.length - 1 ? n[o + 1] : null;
						a && s && Wg(s) ? (r.push(new hg(a, nm(s))), (o += 2)) : (r.push(new hg(a, {})), o++);
					}
				}
				return new dg(r, {});
			}
			function em(t) {
				var e = {};
				return (
					ug(t, function(t, n) {
						null !== t && (e[n] = tm(new dg([], {}), 0, t));
					}),
					e
				);
			}
			function nm(t) {
				var e = {};
				return (
					ug(t, function(t, n) {
						return (e[n] = '' + t);
					}),
					e
				);
			}
			function rm(t, e, n) {
				return t == n.path && ag(e, n.parameters);
			}
			var om = (function() {
				function t(t, e, n, r) {
					(this.routeReuseStrategy = t), (this.futureState = e), (this.currState = n), (this.forwardEvent = r);
				}
				return (
					(t.prototype.activate = function(t) {
						var e = this.futureState._root,
							n = this.currState ? this.currState._root : null;
						this.deactivateChildRoutes(e, n, t), Gg(this.futureState.root), this.activateChildRoutes(e, n, t);
					}),
					(t.prototype.deactivateChildRoutes = function(t, e, n) {
						var r = this,
							o = Ng(e);
						t.children.forEach(function(t) {
							var e = t.value.outlet;
							r.deactivateRoutes(t, o[e], n), delete o[e];
						}),
							ug(o, function(t, e) {
								r.deactivateRouteAndItsChildren(t, n);
							});
					}),
					(t.prototype.deactivateRoutes = function(t, e, n) {
						var r = t.value,
							o = e ? e.value : null;
						if (r === o)
							if (r.component) {
								var i = n.getContext(r.outlet);
								i && this.deactivateChildRoutes(t, e, i.children);
							} else this.deactivateChildRoutes(t, e, n);
						else o && this.deactivateRouteAndItsChildren(e, n);
					}),
					(t.prototype.deactivateRouteAndItsChildren = function(t, e) {
						this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e);
					}),
					(t.prototype.detachAndStoreRouteSubtree = function(t, e) {
						var n = e.getContext(t.value.outlet);
						if (n && n.outlet) {
							var r = n.outlet.detach(),
								o = n.children.onOutletDeactivated();
							this.routeReuseStrategy.store(t.value.snapshot, { componentRef: r, route: t, contexts: o });
						}
					}),
					(t.prototype.deactivateRouteAndOutlet = function(t, e) {
						var n = this,
							r = e.getContext(t.value.outlet);
						if (r) {
							var o = Ng(t),
								i = t.value.component ? r.children : e;
							ug(o, function(t, e) {
								return n.deactivateRouteAndItsChildren(t, i);
							}),
								r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated());
						}
					}),
					(t.prototype.activateChildRoutes = function(t, e, n) {
						var r = this,
							o = Ng(e);
						t.children.forEach(function(t) {
							r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new Zh(t.value.snapshot));
						}),
							t.children.length && this.forwardEvent(new qh(t.value.snapshot));
					}),
					(t.prototype.activateRoutes = function(t, e, n) {
						var r = t.value,
							o = e ? e.value : null;
						if ((Gg(r), r === o))
							if (r.component) {
								var i = n.getOrCreateContext(r.outlet);
								this.activateChildRoutes(t, e, i.children);
							} else this.activateChildRoutes(t, e, n);
						else if (r.component)
							if (((i = n.getOrCreateContext(r.outlet)), this.routeReuseStrategy.shouldAttach(r.snapshot))) {
								var a = this.routeReuseStrategy.retrieve(r.snapshot);
								this.routeReuseStrategy.store(r.snapshot, null),
									i.children.onOutletReAttached(a.contexts),
									(i.attachRef = a.componentRef),
									(i.route = a.route.value),
									i.outlet && i.outlet.attach(a.componentRef, a.route.value),
									im(a.route);
							} else {
								var s = (function(t) {
										for (var e = r.snapshot.parent; e; e = e.parent) {
											var n = e.routeConfig;
											if (n && n._loadedConfig) return n._loadedConfig;
											if (n && n.component) return null;
										}
										return null;
									})(),
									l = s ? s.module.componentFactoryResolver : null;
								(i.attachRef = null), (i.route = r), (i.resolver = l), i.outlet && i.outlet.activateWith(r, l), this.activateChildRoutes(t, null, i.children);
							}
						else this.activateChildRoutes(t, null, n);
					}),
					t
				);
			})();
			function im(t) {
				Gg(t.value), t.children.forEach(im);
			}
			function am(t) {
				return 'function' == typeof t;
			}
			function sm(t) {
				return t instanceof fg;
			}
			var lm = (function() {
					return function(t) {
						this.segmentGroup = t || null;
					};
				})(),
				um = (function() {
					return function(t) {
						this.urlTree = t;
					};
				})();
			function cm(t) {
				return new I(function(e) {
					return e.error(new lm(t));
				});
			}
			function pm(t) {
				return new I(function(e) {
					return e.error(new um(t));
				});
			}
			function fm(t) {
				return new I(function(e) {
					return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"));
				});
			}
			var dm = (function() {
				function t(t, e, n, r, o) {
					(this.configLoader = e), (this.urlSerializer = n), (this.urlTree = r), (this.config = o), (this.allowRedirects = !0), (this.ngModule = t.get(nu));
				}
				return (
					(t.prototype.apply = function() {
						var t = this;
						return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Yh)
							.pipe(
								W(function(e) {
									return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment);
								})
							)
							.pipe(
								uh(function(e) {
									if (e instanceof um) return (t.allowRedirects = !1), t.match(e.urlTree);
									if (e instanceof lm) throw t.noMatchError(e);
									throw e;
								})
							);
					}),
					(t.prototype.match = function(t) {
						var e = this;
						return this.expandSegmentGroup(this.ngModule, this.config, t.root, Yh)
							.pipe(
								W(function(n) {
									return e.createUrlTree(n, t.queryParams, t.fragment);
								})
							)
							.pipe(
								uh(function(t) {
									if (t instanceof lm) throw e.noMatchError(t);
									throw t;
								})
							);
					}),
					(t.prototype.noMatchError = function(t) {
						return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'");
					}),
					(t.prototype.createUrlTree = function(t, e, n) {
						var r,
							o = t.segments.length > 0 ? new dg([], (((r = {})[Yh] = t), r)) : t;
						return new fg(o, e, n);
					}),
					(t.prototype.expandSegmentGroup = function(t, e, n, r) {
						return 0 === n.segments.length && n.hasChildren()
							? this.expandChildren(t, e, n).pipe(
									W(function(t) {
										return new dg([], t);
									})
							  )
							: this.expandSegment(t, n, e, n.segments, r, !0);
					}),
					(t.prototype.expandChildren = function(t, e, n) {
						var r = this;
						return (function(n, o) {
							if (0 === Object.keys(n).length) return Nd({});
							var i = [],
								a = [],
								s = {};
							return (
								ug(n, function(n, o) {
									var l,
										u,
										c = ((l = o), (u = n), r.expandSegmentGroup(t, e, u, l)).pipe(
											W(function(t) {
												return (s[o] = t);
											})
										);
									o === Yh ? i.push(c) : a.push(c);
								}),
								Nd.apply(null, i.concat(a)).pipe(
									Zd(),
									lh(),
									W(function() {
										return s;
									})
								)
							);
						})(n.children);
					}),
					(t.prototype.expandSegment = function(t, e, n, r, o, i) {
						var a = this;
						return Nd.apply(void 0, c(n)).pipe(
							W(function(s) {
								return a.expandSegmentAgainstRoute(t, e, n, s, r, o, i).pipe(
									uh(function(t) {
										if (t instanceof lm) return Nd(null);
										throw t;
									})
								);
							}),
							Zd(),
							gh(function(t) {
								return !!t;
							}),
							uh(function(t, n) {
								if (t instanceof Hd || 'EmptyError' === t.name) {
									if (a.noLeftoversInUrl(e, r, o)) return Nd(new dg([], {}));
									throw new lm(e);
								}
								throw t;
							})
						);
					}),
					(t.prototype.noLeftoversInUrl = function(t, e, n) {
						return 0 === e.length && !t.children[n];
					}),
					(t.prototype.expandSegmentAgainstRoute = function(t, e, n, r, o, i, a) {
						return bm(r) !== i
							? cm(e)
							: void 0 === r.redirectTo
							? this.matchSegmentAgainstRoute(t, e, r, o)
							: a && this.allowRedirects
							? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
							: cm(e);
					}),
					(t.prototype.expandSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
						return '**' === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i);
					}),
					(t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(t, e, n, r) {
						var o = this,
							i = this.applyRedirectCommands([], n.redirectTo, {});
						return n.redirectTo.startsWith('/')
							? pm(i)
							: this.lineralizeSegments(n, i).pipe(
									X(function(n) {
										var i = new dg(n, {});
										return o.expandSegment(t, i, e, n, r, !1);
									})
							  );
					}),
					(t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
						var a = this,
							s = hm(e, r, o),
							l = s.consumedSegments,
							u = s.lastChild,
							c = s.positionalParamSegments;
						if (!s.matched) return cm(e);
						var p = this.applyRedirectCommands(l, r.redirectTo, c);
						return r.redirectTo.startsWith('/')
							? pm(p)
							: this.lineralizeSegments(r, p).pipe(
									X(function(r) {
										return a.expandSegment(t, e, n, r.concat(o.slice(u)), i, !1);
									})
							  );
					}),
					(t.prototype.matchSegmentAgainstRoute = function(t, e, n, r) {
						var o = this;
						if ('**' === n.path)
							return n.loadChildren
								? this.configLoader.load(t.injector, n).pipe(
										W(function(t) {
											return (n._loadedConfig = t), new dg(r, {});
										})
								  )
								: Nd(new dg(r, {}));
						var a = hm(e, n, r),
							s = a.consumedSegments,
							u = a.lastChild;
						if (!a.matched) return cm(e);
						var c = r.slice(u);
						return this.getChildConfig(t, n, r).pipe(
							X(function(t) {
								var n = t.module,
									r = t.routes,
									a = (function(t, e, n, r) {
										return n.length > 0 &&
											(function(t, e, n) {
												return r.some(function(n) {
													return mm(t, e, n) && bm(n) !== Yh;
												});
											})(t, n)
											? {
													segmentGroup: gm(
														new dg(
															e,
															(function(t, e) {
																var n,
																	r,
																	o = {};
																o[Yh] = e;
																try {
																	for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
																		var s = a.value;
																		'' === s.path && bm(s) !== Yh && (o[bm(s)] = new dg([], {}));
																	}
																} catch (u) {
																	n = { error: u };
																} finally {
																	try {
																		a && !a.done && (r = i.return) && r.call(i);
																	} finally {
																		if (n) throw n.error;
																	}
																}
																return o;
															})(r, new dg(n, t.children))
														)
													),
													slicedSegments: []
											  }
											: 0 === n.length &&
											  (function(t, e, n) {
													return r.some(function(n) {
														return mm(t, e, n);
													});
											  })(t, n)
											? {
													segmentGroup: gm(
														new dg(
															t.segments,
															(function(t, e, n, r) {
																var o,
																	a,
																	s = {};
																try {
																	for (var u = l(n), c = u.next(); !c.done; c = u.next()) {
																		var p = c.value;
																		mm(t, e, p) && !r[bm(p)] && (s[bm(p)] = new dg([], {}));
																	}
																} catch (f) {
																	o = { error: f };
																} finally {
																	try {
																		c && !c.done && (a = u.return) && a.call(u);
																	} finally {
																		if (o) throw o.error;
																	}
																}
																return i({}, r, s);
															})(t, n, r, t.children)
														)
													),
													slicedSegments: n
											  }
											: { segmentGroup: t, slicedSegments: n };
									})(e, s, c, r),
									u = a.segmentGroup,
									p = a.slicedSegments;
								return 0 === p.length && u.hasChildren()
									? o.expandChildren(n, r, u).pipe(
											W(function(t) {
												return new dg(s, t);
											})
									  )
									: 0 === r.length && 0 === p.length
									? Nd(new dg(s, {}))
									: o.expandSegment(n, u, r, p, Yh, !0).pipe(
											W(function(t) {
												return new dg(s.concat(t.segments), t.children);
											})
									  );
							})
						);
					}),
					(t.prototype.getChildConfig = function(t, e, n) {
						var r = this;
						return e.children
							? Nd(new eg(e.children, t))
							: e.loadChildren
							? void 0 !== e._loadedConfig
								? Nd(e._loadedConfig)
								: (function(t, e, n) {
										var r,
											o = e.canLoad;
										return o && 0 !== o.length
											? K(o)
													.pipe(
														W(function(r) {
															var o,
																i = t.get(r);
															if (
																(function(t) {
																	return t && am(t.canLoad);
																})(i)
															)
																o = i.canLoad(e, n);
															else {
																if (!am(i)) throw new Error('Invalid CanLoad guard');
																o = i(e, n);
															}
															return cg(o);
														})
													)
													.pipe(
														Zd(),
														((r = function(t) {
															return !0 === t;
														}),
														function(t) {
															return t.lift(new mh(r, void 0, t));
														})
													)
											: Nd(!0);
								  })(t.injector, e, n).pipe(
										X(function(n) {
											return n
												? r.configLoader.load(t.injector, e).pipe(
														W(function(t) {
															return (e._loadedConfig = t), t;
														})
												  )
												: (function(t) {
														return new I(function(e) {
															return e.error($h('Cannot load children because the guard of the route "path: \'' + t.path + '\'" returned false'));
														});
												  })(e);
										})
								  )
							: Nd(new eg([], t));
					}),
					(t.prototype.lineralizeSegments = function(t, e) {
						for (var n = [], r = e.root; ; ) {
							if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Nd(n);
							if (r.numberOfChildren > 1 || !r.children[Yh]) return fm(t.redirectTo);
							r = r.children[Yh];
						}
					}),
					(t.prototype.applyRedirectCommands = function(t, e, n) {
						return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n);
					}),
					(t.prototype.applyRedirectCreatreUrlTree = function(t, e, n, r) {
						var o = this.createSegmentGroup(t, e.root, n, r);
						return new fg(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
					}),
					(t.prototype.createQueryParams = function(t, e) {
						var n = {};
						return (
							ug(t, function(t, r) {
								if ('string' == typeof t && t.startsWith(':')) {
									var o = t.substring(1);
									n[r] = e[o];
								} else n[r] = t;
							}),
							n
						);
					}),
					(t.prototype.createSegmentGroup = function(t, e, n, r) {
						var o = this,
							i = this.createSegments(t, e.segments, n, r),
							a = {};
						return (
							ug(e.children, function(e, i) {
								a[i] = o.createSegmentGroup(t, e, n, r);
							}),
							new dg(i, a)
						);
					}),
					(t.prototype.createSegments = function(t, e, n, r) {
						var o = this;
						return e.map(function(e) {
							return e.path.startsWith(':') ? o.findPosParam(t, e, r) : o.findOrReturn(e, n);
						});
					}),
					(t.prototype.findPosParam = function(t, e, n) {
						var r = n[e.path.substring(1)];
						if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
						return r;
					}),
					(t.prototype.findOrReturn = function(t, e) {
						var n,
							r,
							o = 0;
						try {
							for (var i = l(e), a = i.next(); !a.done; a = i.next()) {
								var s = a.value;
								if (s.path === t.path) return e.splice(o), s;
								o++;
							}
						} catch (u) {
							n = { error: u };
						} finally {
							try {
								a && !a.done && (r = i.return) && r.call(i);
							} finally {
								if (n) throw n.error;
							}
						}
						return t;
					}),
					t
				);
			})();
			function hm(t, e, n) {
				if ('' === e.path)
					return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				var r = (e.matcher || tg)(n, t, e);
				return r
					? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function gm(t) {
				if (1 === t.numberOfChildren && t.children[Yh]) {
					var e = t.children[Yh];
					return new dg(t.segments.concat(e.segments), e.children);
				}
				return t;
			}
			function mm(t, e, n) {
				return (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 !== n.redirectTo;
			}
			function bm(t) {
				return t.outlet || Yh;
			}
			var vm = (function() {
					return function(t) {
						(this.path = t), (this.route = this.path[this.path.length - 1]);
					};
				})(),
				ym = (function() {
					return function(t, e) {
						(this.component = t), (this.route = e);
					};
				})();
			function wm(t, e, n) {
				var r = (function(t) {
					if (!t) return null;
					for (var e = t.parent; e; e = e.parent) {
						var n = e.routeConfig;
						if (n && n._loadedConfig) return n._loadedConfig;
					}
					return null;
				})(e);
				return (r ? r.module.injector : n).get(t);
			}
			function _m(t, e, n, r, o) {
				void 0 === o && (o = { canDeactivateChecks: [], canActivateChecks: [] });
				var i = Ng(e);
				return (
					t.children.forEach(function(t) {
						!(function(t, e, n, r, o) {
							void 0 === o && (o = { canDeactivateChecks: [], canActivateChecks: [] });
							var i = t.value,
								a = e ? e.value : null,
								s = n ? n.getContext(t.value.outlet) : null;
							if (a && i.routeConfig === a.routeConfig) {
								var l = (function(t, e, n) {
									if ('function' == typeof n) return n(t, e);
									switch (n) {
										case 'pathParamsChange':
											return !gg(t.url, e.url);
										case 'pathParamsOrQueryParamsChange':
											return !gg(t.url, e.url) || !ag(t.queryParams, e.queryParams);
										case 'always':
											return !0;
										case 'paramsOrQueryParamsChange':
											return !Zg(t, e) || !ag(t.queryParams, e.queryParams);
										case 'paramsChange':
										default:
											return !Zg(t, e);
									}
								})(a, i, i.routeConfig.runGuardsAndResolvers);
								l ? o.canActivateChecks.push(new vm(r)) : ((i.data = a.data), (i._resolvedData = a._resolvedData)),
									_m(t, e, i.component ? (s ? s.children : null) : n, r, o),
									l && o.canDeactivateChecks.push(new ym((s && s.outlet && s.outlet.component) || null, a));
							} else a && xm(e, s, o), o.canActivateChecks.push(new vm(r)), _m(t, null, i.component ? (s ? s.children : null) : n, r, o);
						})(t, i[t.value.outlet], n, r.concat([t.value]), o),
							delete i[t.value.outlet];
					}),
					ug(i, function(t, e) {
						return xm(t, n.getContext(e), o);
					}),
					o
				);
			}
			function xm(t, e, n) {
				var r = Ng(t),
					o = t.value;
				ug(r, function(t, r) {
					xm(t, o.component ? (e ? e.children.getContext(r) : null) : e, n);
				}),
					n.canDeactivateChecks.push(new ym(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o));
			}
			var Cm = Symbol('INITIAL_VALUE');
			function km() {
				return vh(function(t) {
					return function() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						var n = null,
							r = null;
						return U(t[t.length - 1]) && (r = t.pop()), 'function' == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && p(t[0]) && (t = t[0]), rt(t, r).lift(new Vd(n));
					}
						.apply(
							void 0,
							c(
								t.map(function(t) {
									return t.pipe(
										fh(1),
										(function() {
											for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
											var n = t[t.length - 1];
											return U(n)
												? (t.pop(),
												  function(e) {
														return _h(t, e, n);
												  })
												: function(e) {
														return _h(t, e);
												  };
										})(Cm)
									);
								})
							)
						)
						.pipe(
							xh(function(t, e) {
								var n = !1;
								return e.reduce(function(t, r, o) {
									if (t !== Cm) return t;
									if ((r === Cm && (n = !0), !n)) {
										if (!1 === r) return r;
										if (o === e.length - 1 || sm(r)) return r;
									}
									return t;
								}, t);
							}, Cm),
							Wd(function(t) {
								return t !== Cm;
							}),
							W(function(t) {
								return sm(t) ? t : !0 === t;
							}),
							fh(1)
						);
				});
			}
			function Sm(t, e) {
				return null !== t && e && e(new Gh(t)), Nd(!0);
			}
			function Pm(t, e) {
				return null !== t && e && e(new Bh(t)), Nd(!0);
			}
			function Em(t, e, n) {
				var r = e.routeConfig ? e.routeConfig.canActivate : null;
				return r && 0 !== r.length
					? Nd(
							r.map(function(r) {
								return Gd(function() {
									var o,
										i = wm(r, e, n);
									if (
										(function(t) {
											return t && am(t.canActivate);
										})(i)
									)
										o = cg(i.canActivate(e, t));
									else {
										if (!am(i)) throw new Error('Invalid CanActivate guard');
										o = cg(i(e, t));
									}
									return o.pipe(gh());
								});
							})
					  ).pipe(km())
					: Nd(!0);
			}
			function Om(t, e, n) {
				var r = e[e.length - 1],
					o = e
						.slice(0, e.length - 1)
						.reverse()
						.map(function(t) {
							return (function(t) {
								var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
								return e && 0 !== e.length ? { node: t, guards: e } : null;
							})(t);
						})
						.filter(function(t) {
							return null !== t;
						})
						.map(function(e) {
							return Gd(function() {
								return Nd(
									e.guards.map(function(o) {
										var i,
											a = wm(o, e.node, n);
										if (
											(function(t) {
												return t && am(t.canActivateChild);
											})(a)
										)
											i = cg(a.canActivateChild(r, t));
										else {
											if (!am(a)) throw new Error('Invalid CanActivateChild guard');
											i = cg(a(r, t));
										}
										return i.pipe(gh());
									})
								).pipe(km());
							});
						});
				return Nd(o).pipe(km());
			}
			var Im = (function() {
					return function() {};
				})(),
				Tm = (function() {
					function t(t, e, n, r, o, i) {
						(this.rootComponentType = t), (this.config = e), (this.urlTree = n), (this.url = r), (this.paramsInheritanceStrategy = o), (this.relativeLinkResolution = i);
					}
					return (
						(t.prototype.recognize = function() {
							try {
								var t = jm(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
									e = this.processSegmentGroup(this.config, t, Yh),
									n = new Vg(
										[],
										Object.freeze({}),
										Object.freeze(i({}, this.urlTree.queryParams)),
										this.urlTree.fragment,
										{},
										Yh,
										this.rootComponentType,
										null,
										this.urlTree.root,
										-1,
										{}
									),
									r = new Dg(n, e),
									o = new Fg(this.url, r);
								return this.inheritParamsAndData(o._root), Nd(o);
							} catch (a) {
								return new I(function(t) {
									return t.error(a);
								});
							}
						}),
						(t.prototype.inheritParamsAndData = function(t) {
							var e = this,
								n = t.value,
								r = zg(n, this.paramsInheritanceStrategy);
							(n.params = Object.freeze(r.params)),
								(n.data = Object.freeze(r.data)),
								t.children.forEach(function(t) {
									return e.inheritParamsAndData(t);
								});
						}),
						(t.prototype.processSegmentGroup = function(t, e, n) {
							return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n);
						}),
						(t.prototype.processChildren = function(t, e) {
							var n,
								r = this,
								o = mg(e, function(e, n) {
									return r.processSegmentGroup(t, e, n);
								});
							return (
								(n = {}),
								o.forEach(function(t) {
									var e = n[t.value.outlet];
									if (e) {
										var r = e.url
												.map(function(t) {
													return t.toString();
												})
												.join('/'),
											o = t.value.url
												.map(function(t) {
													return t.toString();
												})
												.join('/');
										throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.");
									}
									n[t.value.outlet] = t.value;
								}),
								o.sort(function(t, e) {
									return t.value.outlet === Yh ? -1 : e.value.outlet === Yh ? 1 : t.value.outlet.localeCompare(e.value.outlet);
								}),
								o
							);
						}),
						(t.prototype.processSegment = function(t, e, n, r) {
							var o, i;
							try {
								for (var a = l(t), s = a.next(); !s.done; s = a.next()) {
									var u = s.value;
									try {
										return this.processSegmentAgainstRoute(u, e, n, r);
									} catch (c) {
										if (!(c instanceof Im)) throw c;
									}
								}
							} catch (p) {
								o = { error: p };
							} finally {
								try {
									s && !s.done && (i = a.return) && i.call(a);
								} finally {
									if (o) throw o.error;
								}
							}
							if (this.noLeftoversInUrl(e, n, r)) return [];
							throw new Im();
						}),
						(t.prototype.noLeftoversInUrl = function(t, e, n) {
							return 0 === e.length && !t.children[n];
						}),
						(t.prototype.processSegmentAgainstRoute = function(t, e, n, r) {
							if (t.redirectTo) throw new Im();
							if ((t.outlet || Yh) !== r) throw new Im();
							var o,
								a = [],
								s = [];
							if ('**' === t.path) {
								var l = n.length > 0 ? lg(n).parameters : {};
								o = new Vg(n, l, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Nm(t), r, t.component, t, Mm(e), Am(e) + n.length, Um(t));
							} else {
								var u = (function(t, e, n) {
									if ('' === e.path) {
										if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Im();
										return { consumedSegments: [], lastChild: 0, parameters: {} };
									}
									var r = (e.matcher || tg)(n, t, e);
									if (!r) throw new Im();
									var o = {};
									ug(r.posParams, function(t, e) {
										o[e] = t.path;
									});
									var a = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
									return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: a };
								})(e, t, n);
								(a = u.consumedSegments),
									(s = n.slice(u.lastChild)),
									(o = new Vg(a, u.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Nm(t), r, t.component, t, Mm(e), Am(e) + a.length, Um(t)));
							}
							var c = (function(t) {
									return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
								})(t),
								p = jm(e, a, s, c, this.relativeLinkResolution),
								f = p.segmentGroup,
								d = p.slicedSegments;
							if (0 === d.length && f.hasChildren()) {
								var h = this.processChildren(c, f);
								return [new Dg(o, h)];
							}
							if (0 === c.length && 0 === d.length) return [new Dg(o, [])];
							var g = this.processSegment(c, f, d, Yh);
							return [new Dg(o, g)];
						}),
						t
					);
				})();
			function Mm(t) {
				for (var e = t; e._sourceSegment; ) e = e._sourceSegment;
				return e;
			}
			function Am(t) {
				for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment; ) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
				return n - 1;
			}
			function jm(t, e, n, r, o) {
				if (
					n.length > 0 &&
					(function(t, e, n) {
						return r.some(function(n) {
							return Rm(t, e, n) && Dm(n) !== Yh;
						});
					})(t, n)
				) {
					var a = new dg(
						e,
						(function(t, e, n, r) {
							var o,
								i,
								a = {};
							(a[Yh] = r), (r._sourceSegment = t), (r._segmentIndexShift = e.length);
							try {
								for (var s = l(n), u = s.next(); !u.done; u = s.next()) {
									var c = u.value;
									if ('' === c.path && Dm(c) !== Yh) {
										var p = new dg([], {});
										(p._sourceSegment = t), (p._segmentIndexShift = e.length), (a[Dm(c)] = p);
									}
								}
							} catch (f) {
								o = { error: f };
							} finally {
								try {
									u && !u.done && (i = s.return) && i.call(s);
								} finally {
									if (o) throw o.error;
								}
							}
							return a;
						})(t, e, r, new dg(n, t.children))
					);
					return (a._sourceSegment = t), (a._segmentIndexShift = e.length), { segmentGroup: a, slicedSegments: [] };
				}
				if (
					0 === n.length &&
					(function(t, e, n) {
						return r.some(function(n) {
							return Rm(t, e, n);
						});
					})(t, n)
				) {
					var s = new dg(
						t.segments,
						(function(t, e, n, r, o, a) {
							var s,
								u,
								c = {};
							try {
								for (var p = l(r), f = p.next(); !f.done; f = p.next()) {
									var d = f.value;
									if (Rm(t, n, d) && !o[Dm(d)]) {
										var h = new dg([], {});
										(h._sourceSegment = t), (h._segmentIndexShift = 'legacy' === a ? t.segments.length : e.length), (c[Dm(d)] = h);
									}
								}
							} catch (g) {
								s = { error: g };
							} finally {
								try {
									f && !f.done && (u = p.return) && u.call(p);
								} finally {
									if (s) throw s.error;
								}
							}
							return i({}, o, c);
						})(t, e, n, r, t.children, o)
					);
					return (s._sourceSegment = t), (s._segmentIndexShift = e.length), { segmentGroup: s, slicedSegments: n };
				}
				var u = new dg(t.segments, t.children);
				return (u._sourceSegment = t), (u._segmentIndexShift = e.length), { segmentGroup: u, slicedSegments: n };
			}
			function Rm(t, e, n) {
				return (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 === n.redirectTo;
			}
			function Dm(t) {
				return t.outlet || Yh;
			}
			function Nm(t) {
				return t.data || {};
			}
			function Um(t) {
				return t.resolve || {};
			}
			function Lm(t, e, n, r) {
				var o = wm(t, e, r);
				return cg(o.resolve ? o.resolve(e, n) : o(e, n));
			}
			function Hm(t) {
				return function(e) {
					return e.pipe(
						vh(function(e) {
							var n = t(e);
							return n
								? K(n).pipe(
										W(function() {
											return e;
										})
								  )
								: K([e]);
						})
					);
				};
			}
			var zm = (function() {
					return function() {};
				})(),
				Vm = (function() {
					function t() {}
					return (
						(t.prototype.shouldDetach = function(t) {
							return !1;
						}),
						(t.prototype.store = function(t, e) {}),
						(t.prototype.shouldAttach = function(t) {
							return !1;
						}),
						(t.prototype.retrieve = function(t) {
							return null;
						}),
						(t.prototype.shouldReuseRoute = function(t, e) {
							return t.routeConfig === e.routeConfig;
						}),
						t
					);
				})(),
				Fm = new Nt('ROUTES'),
				Bm = (function() {
					function t(t, e, n, r) {
						(this.loader = t), (this.compiler = e), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
					}
					return (
						(t.prototype.load = function(t, e) {
							var n = this;
							return (
								this.onLoadStartListener && this.onLoadStartListener(e),
								this.loadModuleFactory(e.loadChildren).pipe(
									W(function(r) {
										n.onLoadEndListener && n.onLoadEndListener(e);
										var o = r.create(t);
										return new eg(sg(o.injector.get(Fm)).map(ig), o);
									})
								)
							);
						}),
						(t.prototype.loadModuleFactory = function(t) {
							var e = this;
							return 'string' == typeof t
								? K(this.loader.load(t))
								: cg(t()).pipe(
										X(function(t) {
											return t instanceof ru ? Nd(t) : K(e.compiler.compileModuleAsync(t));
										})
								  );
						}),
						t
					);
				})(),
				qm = (function() {
					return function() {};
				})(),
				Gm = (function() {
					function t() {}
					return (
						(t.prototype.shouldProcessUrl = function(t) {
							return !0;
						}),
						(t.prototype.extract = function(t) {
							return t;
						}),
						(t.prototype.merge = function(t, e) {
							return t;
						}),
						t
					);
				})();
			function Zm(t) {
				throw t;
			}
			function Wm(t, e, n) {
				return e.parse('/');
			}
			function Qm(t, e) {
				return Nd(null);
			}
			var Ym = (function() {
					function t(t, e, n, r, o, i, a, s) {
						var l = this;
						(this.rootComponentType = t),
							(this.urlSerializer = e),
							(this.rootContexts = n),
							(this.location = r),
							(this.config = s),
							(this.lastSuccessfulNavigation = null),
							(this.currentNavigation = null),
							(this.navigationId = 0),
							(this.isNgZoneEnabled = !1),
							(this.events = new D()),
							(this.errorHandler = Zm),
							(this.malformedUriErrorHandler = Wm),
							(this.navigated = !1),
							(this.lastSuccessfulId = -1),
							(this.hooks = { beforePreactivation: Qm, afterPreactivation: Qm }),
							(this.urlHandlingStrategy = new Gm()),
							(this.routeReuseStrategy = new Vm()),
							(this.onSameUrlNavigation = 'ignore'),
							(this.paramsInheritanceStrategy = 'emptyOnly'),
							(this.urlUpdateStrategy = 'deferred'),
							(this.relativeLinkResolution = 'legacy'),
							(this.ngModule = o.get(nu)),
							(this.console = o.get(Ec));
						var u = o.get(Gc);
						(this.isNgZoneEnabled = u instanceof Gc),
							this.resetConfig(s),
							(this.currentUrlTree = new fg(new dg([], {}), {}, null)),
							(this.rawUrlTree = this.currentUrlTree),
							(this.browserUrlTree = this.currentUrlTree),
							(this.configLoader = new Bm(
								i,
								a,
								function(t) {
									return l.triggerEvent(new Vh(t));
								},
								function(t) {
									return l.triggerEvent(new Fh(t));
								}
							)),
							(this.routerState = Lg(this.currentUrlTree, this.rootComponentType)),
							(this.transitions = new Ud({
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
						(t.prototype.setupNavigations = function(t) {
							var e = this,
								n = this.events;
							return t.pipe(
								Wd(function(t) {
									return 0 !== t.id;
								}),
								W(function(t) {
									return i({}, t, { extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl) });
								}),
								vh(function(t) {
									var r,
										o,
										a,
										s,
										u = !1,
										c = !1;
									return Nd(t).pipe(
										Ph(function(t) {
											e.currentNavigation = {
												id: t.id,
												initialUrl: t.currentRawUrl,
												extractedUrl: t.extractedUrl,
												trigger: t.source,
												extras: t.extras,
												previousNavigation: e.lastSuccessfulNavigation ? i({}, e.lastSuccessfulNavigation, { previousNavigation: null }) : null
											};
										}),
										vh(function(t) {
											var r,
												o,
												a,
												s,
												l = !e.navigated || t.extractedUrl.toString() !== e.browserUrlTree.toString();
											if (('reload' === e.onSameUrlNavigation || l) && e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))
												return Nd(t).pipe(
													vh(function(t) {
														var r = e.transitions.getValue();
														return n.next(new Ah(t.id, e.serializeUrl(t.extractedUrl), t.source, t.restoredState)), r !== e.transitions.getValue() ? Bd : [t];
													}),
													vh(function(t) {
														return Promise.resolve(t);
													}),
													((r = e.ngModule.injector),
													(o = e.configLoader),
													(a = e.urlSerializer),
													(s = e.config),
													function(t) {
														return t.pipe(
															vh(function(t) {
																return (function(e, n, r, o, i) {
																	return new dm(e, n, r, t.extractedUrl, i).apply();
																})(r, o, a, 0, s).pipe(
																	W(function(e) {
																		return i({}, t, { urlAfterRedirects: e });
																	})
																);
															})
														);
													}),
													Ph(function(t) {
														e.currentNavigation = i({}, e.currentNavigation, { finalUrl: t.urlAfterRedirects });
													}),
													(function(t, n, r, o, a) {
														return function(r) {
															return r.pipe(
																X(function(r) {
																	return (function(t, e, n, r, o, i) {
																		return void 0 === o && (o = 'emptyOnly'), void 0 === i && (i = 'legacy'), new Tm(t, e, n, r, o, i).recognize();
																	})(t, n, r.urlAfterRedirects, ((s = r.urlAfterRedirects), e.serializeUrl(s)), o, a).pipe(
																		W(function(t) {
																			return i({}, r, { targetSnapshot: t });
																		})
																	);
																	var s;
																})
															);
														};
													})(e.rootComponentType, e.config, 0, e.paramsInheritanceStrategy, e.relativeLinkResolution),
													Ph(function(t) {
														'eager' === e.urlUpdateStrategy &&
															(t.extras.skipLocationChange || e.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state),
															(e.browserUrlTree = t.urlAfterRedirects));
													}),
													Ph(function(t) {
														var r = new Nh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
														n.next(r);
													})
												);
											if (l && e.rawUrlTree && e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)) {
												var u = t.extractedUrl,
													c = t.source,
													p = t.restoredState,
													f = t.extras,
													d = new Ah(t.id, e.serializeUrl(u), c, p);
												n.next(d);
												var h = Lg(u, e.rootComponentType).snapshot;
												return Nd(i({}, t, { targetSnapshot: h, urlAfterRedirects: u, extras: i({}, f, { skipLocationChange: !1, replaceUrl: !1 }) }));
											}
											return (e.rawUrlTree = t.rawUrl), (e.browserUrlTree = t.urlAfterRedirects), t.resolve(null), Bd;
										}),
										Hm(function(t) {
											var n = t.extras;
											return e.hooks.beforePreactivation(t.targetSnapshot, {
												navigationId: t.id,
												appliedUrlTree: t.extractedUrl,
												rawUrlTree: t.rawUrl,
												skipLocationChange: !!n.skipLocationChange,
												replaceUrl: !!n.replaceUrl
											});
										}),
										Ph(function(t) {
											var n = new Uh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
											e.triggerEvent(n);
										}),
										W(function(t) {
											return i({}, t, {
												guards: ((n = t.targetSnapshot), (r = t.currentSnapshot), (o = e.rootContexts), (a = n._root), _m(a, r ? r._root : null, o, [a.value]))
											});
											var n, r, o, a;
										}),
										(function(t, e) {
											return function(n) {
												return n.pipe(
													X(function(n) {
														var r = n.targetSnapshot,
															o = n.currentSnapshot,
															a = n.guards,
															s = a.canActivateChecks,
															l = a.canDeactivateChecks;
														return 0 === l.length && 0 === s.length
															? Nd(i({}, n, { guardsResult: !0 }))
															: (function(t, e, n, r) {
																	return K(l).pipe(
																		X(function(t) {
																			return (function(t, e, n, r, o) {
																				var i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
																				return i && 0 !== i.length
																					? Nd(
																							i.map(function(i) {
																								var a,
																									s = wm(i, e, o);
																								if (
																									(function(t) {
																										return t && am(t.canDeactivate);
																									})(s)
																								)
																									a = cg(s.canDeactivate(t, e, n, r));
																								else {
																									if (!am(s)) throw new Error('Invalid CanDeactivate guard');
																									a = cg(s(t, e, n, r));
																								}
																								return a.pipe(gh());
																							})
																					  ).pipe(km())
																					: Nd(!0);
																			})(t.component, t.route, n, e, r);
																		}),
																		gh(function(t) {
																			return !0 !== t;
																		}, !0)
																	);
															  })(0, r, o, t).pipe(
																	X(function(n) {
																		return n && 'boolean' == typeof n
																			? (function(t, e, n, r) {
																					return K(s).pipe(
																						Sh(function(e) {
																							return K([Pm(e.route.parent, r), Sm(e.route, r), Om(t, e.path, n), Em(t, e.route, n)]).pipe(
																								Zd(),
																								gh(function(t) {
																									return !0 !== t;
																								}, !0)
																							);
																						}),
																						gh(function(t) {
																							return !0 !== t;
																						}, !0)
																					);
																			  })(r, 0, t, e)
																			: Nd(n);
																	}),
																	W(function(t) {
																		return i({}, n, { guardsResult: t });
																	})
															  );
													})
												);
											};
										})(e.ngModule.injector, function(t) {
											return e.triggerEvent(t);
										}),
										Ph(function(t) {
											if (sm(t.guardsResult)) {
												var n = $h('Redirecting to "' + e.serializeUrl(t.guardsResult) + '"');
												throw ((n.url = t.guardsResult), n);
											}
										}),
										Ph(function(t) {
											var n = new Lh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
											e.triggerEvent(n);
										}),
										Wd(function(t) {
											if (!t.guardsResult) {
												e.resetUrlToCurrentUrlTree();
												var r = new Rh(t.id, e.serializeUrl(t.extractedUrl), '');
												return n.next(r), t.resolve(!1), !1;
											}
											return !0;
										}),
										Hm(function(t) {
											if (t.guards.canActivateChecks.length)
												return Nd(t).pipe(
													Ph(function(t) {
														var n = new Hh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
														e.triggerEvent(n);
													}),
													((n = e.paramsInheritanceStrategy),
													(r = e.ngModule.injector),
													function(t) {
														return t.pipe(
															X(function(t) {
																var e = t.targetSnapshot,
																	o = t.guards.canActivateChecks;
																return o.length
																	? K(o).pipe(
																			Sh(function(t) {
																				return (function(t, n, r, o) {
																					return (function(t, e, n, r) {
																						var o = Object.keys(t);
																						if (0 === o.length) return Nd({});
																						if (1 === o.length) {
																							var i = o[0];
																							return Lm(t[i], e, n, r).pipe(
																								W(function(t) {
																									var e;
																									return ((e = {})[i] = t), e;
																								})
																							);
																						}
																						var a = {};
																						return K(o)
																							.pipe(
																								X(function(o) {
																									return Lm(t[o], e, n, r).pipe(
																										W(function(t) {
																											return (a[o] = t), t;
																										})
																									);
																								})
																							)
																							.pipe(
																								lh(),
																								W(function() {
																									return a;
																								})
																							);
																					})(t._resolve, t, e, o).pipe(
																						W(function(e) {
																							return (t._resolvedData = e), (t.data = i({}, t.data, zg(t, r).resolve)), null;
																						})
																					);
																				})(t.route, 0, n, r);
																			}),
																			(function(t, e) {
																				return arguments.length >= 2
																					? function(n) {
																							return E(xh(t, e), Xd(1), ih(e))(n);
																					  }
																					: function(e) {
																							return E(
																								xh(function(e, n, r) {
																									return t(e, n, r + 1);
																								}),
																								Xd(1)
																							)(e);
																					  };
																			})(function(t, e) {
																				return t;
																			}),
																			W(function(e) {
																				return t;
																			})
																	  )
																	: Nd(t);
															})
														);
													}),
													Ph(function(t) {
														var n = new zh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
														e.triggerEvent(n);
													})
												);
											var n, r;
										}),
										Hm(function(t) {
											var n = t.extras;
											return e.hooks.afterPreactivation(t.targetSnapshot, {
												navigationId: t.id,
												appliedUrlTree: t.extractedUrl,
												rawUrlTree: t.rawUrl,
												skipLocationChange: !!n.skipLocationChange,
												replaceUrl: !!n.replaceUrl
											});
										}),
										W(function(t) {
											var n,
												r,
												o,
												a =
													((o = (function t(e, n, r) {
														if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
															(u = r.value)._futureSnapshot = n.value;
															var o = (function(e, n, r) {
																return n.children.map(function(n) {
																	var o, i;
																	try {
																		for (var a = l(r.children), s = a.next(); !s.done; s = a.next()) {
																			var u = s.value;
																			if (e.shouldReuseRoute(u.value.snapshot, n.value)) return t(e, n, u);
																		}
																	} catch (c) {
																		o = { error: c };
																	} finally {
																		try {
																			s && !s.done && (i = a.return) && i.call(a);
																		} finally {
																			if (o) throw o.error;
																		}
																	}
																	return t(e, n);
																});
															})(e, n, r);
															return new Dg(u, o);
														}
														var i = e.retrieve(n.value);
														if (i) {
															var a = i.route;
															return (
																(function t(e, n) {
																	if (e.value.routeConfig !== n.value.routeConfig)
																		throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
																	if (e.children.length !== n.children.length)
																		throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
																	n.value._futureSnapshot = e.value;
																	for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r]);
																})(n, a),
																a
															);
														}
														var s,
															u = new Hg(
																new Ud((s = n.value).url),
																new Ud(s.params),
																new Ud(s.queryParams),
																new Ud(s.fragment),
																new Ud(s.data),
																s.outlet,
																s.component,
																s
															);
														return (
															(o = n.children.map(function(n) {
																return t(e, n);
															})),
															new Dg(u, o)
														);
													})(e.routeReuseStrategy, (n = t.targetSnapshot)._root, (r = t.currentRouterState) ? r._root : void 0)),
													new Ug(o, n));
											return i({}, t, { targetRouterState: a });
										}),
										Ph(function(t) {
											(e.currentUrlTree = t.urlAfterRedirects),
												(e.rawUrlTree = e.urlHandlingStrategy.merge(e.currentUrlTree, t.rawUrl)),
												(e.routerState = t.targetRouterState),
												'deferred' === e.urlUpdateStrategy &&
													(t.extras.skipLocationChange || e.setBrowserUrl(e.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state),
													(e.browserUrlTree = t.urlAfterRedirects));
										}),
										((o = e.rootContexts),
										(a = e.routeReuseStrategy),
										(s = function(t) {
											return e.triggerEvent(t);
										}),
										W(function(t) {
											return new om(a, t.targetRouterState, t.currentRouterState, s).activate(o), t;
										})),
										Ph({
											next: function() {
												u = !0;
											},
											complete: function() {
												u = !0;
											}
										}),
										((r = function() {
											if (!u && !c) {
												e.resetUrlToCurrentUrlTree();
												var r = new Rh(t.id, e.serializeUrl(t.extractedUrl), 'Navigation ID ' + t.id + ' is not equal to the current navigation id ' + e.navigationId);
												n.next(r), t.resolve(!1);
											}
											e.currentNavigation = null;
										}),
										function(t) {
											return t.lift(new Ih(r));
										}),
										uh(function(r) {
											if (((c = !0), (s = r) && s[Xh])) {
												var o = sm(r.url);
												o || ((e.navigated = !0), e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
												var i = new Rh(t.id, e.serializeUrl(t.extractedUrl), r.message);
												n.next(i), t.resolve(!1), o && e.navigateByUrl(r.url);
											} else {
												e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
												var a = new Dh(t.id, e.serializeUrl(t.extractedUrl), r);
												n.next(a);
												try {
													t.resolve(e.errorHandler(r));
												} catch (l) {
													t.reject(l);
												}
											}
											var s;
											return Bd;
										})
									);
								})
							);
						}),
						(t.prototype.resetRootComponentType = function(t) {
							(this.rootComponentType = t), (this.routerState.root.component = this.rootComponentType);
						}),
						(t.prototype.getTransition = function() {
							var t = this.transitions.value;
							return (t.urlAfterRedirects = this.browserUrlTree), t;
						}),
						(t.prototype.setTransition = function(t) {
							this.transitions.next(i({}, this.getTransition(), t));
						}),
						(t.prototype.initialNavigation = function() {
							this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
						}),
						(t.prototype.setUpLocationChangeListener = function() {
							var t = this;
							this.locationSubscription ||
								(this.locationSubscription = this.location.subscribe(function(e) {
									var n = t.parseUrl(e.url),
										r = 'popstate' === e.type ? 'popstate' : 'hashchange',
										o = e.state && e.state.navigationId ? e.state : null;
									setTimeout(function() {
										t.scheduleNavigation(n, r, o, { replaceUrl: !0 });
									}, 0);
								}));
						}),
						Object.defineProperty(t.prototype, 'url', {
							get: function() {
								return this.serializeUrl(this.currentUrlTree);
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.getCurrentNavigation = function() {
							return this.currentNavigation;
						}),
						(t.prototype.triggerEvent = function(t) {
							this.events.next(t);
						}),
						(t.prototype.resetConfig = function(t) {
							ng(t), (this.config = t.map(ig)), (this.navigated = !1), (this.lastSuccessfulId = -1);
						}),
						(t.prototype.ngOnDestroy = function() {
							this.dispose();
						}),
						(t.prototype.dispose = function() {
							this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
						}),
						(t.prototype.createUrlTree = function(t, e) {
							void 0 === e && (e = {});
							var n = e.relativeTo,
								r = e.queryParams,
								o = e.fragment,
								a = e.preserveQueryParams,
								s = e.queryParamsHandling,
								l = e.preserveFragment;
							Or() && a && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
							var u = n || this.routerState.root,
								p = l ? this.currentUrlTree.fragment : o,
								f = null;
							if (s)
								switch (s) {
									case 'merge':
										f = i({}, this.currentUrlTree.queryParams, r);
										break;
									case 'preserve':
										f = this.currentUrlTree.queryParams;
										break;
									default:
										f = r || null;
								}
							else f = a ? this.currentUrlTree.queryParams : r || null;
							return (
								null !== f && (f = this.removeEmptyProps(f)),
								(function(t, e, n, r, o) {
									if (0 === n.length) return Qg(e.root, e.root, e, r, o);
									var i = (function(t) {
										if ('string' == typeof t[0] && 1 === t.length && '/' === t[0]) return new Yg(!0, 0, t);
										var e = 0,
											n = !1,
											r = t.reduce(function(t, r, o) {
												if ('object' == typeof r && null != r) {
													if (r.outlets) {
														var i = {};
														return (
															ug(r.outlets, function(t, e) {
																i[e] = 'string' == typeof t ? t.split('/') : t;
															}),
															c(t, [{ outlets: i }])
														);
													}
													if (r.segmentPath) return c(t, [r.segmentPath]);
												}
												return 'string' != typeof r
													? c(t, [r])
													: 0 === o
													? (r.split('/').forEach(function(r, o) {
															(0 == o && '.' === r) || (0 == o && '' === r ? (n = !0) : '..' === r ? e++ : '' != r && t.push(r));
													  }),
													  t)
													: c(t, [r]);
											}, []);
										return new Yg(n, e, r);
									})(n);
									if (i.toRoot()) return Qg(e.root, new dg([], {}), e, r, o);
									var a = (function(t, n, r) {
											if (t.isAbsolute) return new Jg(e.root, !0, 0);
											if (-1 === r.snapshot._lastPathIndex) return new Jg(r.snapshot._urlSegment, !0, 0);
											var o = Wg(t.commands[0]) ? 0 : 1;
											return (function(e, n, i) {
												for (var a = r.snapshot._urlSegment, s = r.snapshot._lastPathIndex + o, l = t.numberOfDoubleDots; l > s; ) {
													if (((l -= s), !(a = a.parent))) throw new Error("Invalid number of '../'");
													s = a.segments.length;
												}
												return new Jg(a, !1, s - l);
											})();
										})(i, 0, t),
										s = a.processChildren ? $g(a.segmentGroup, a.index, i.commands) : Xg(a.segmentGroup, a.index, i.commands);
									return Qg(a.segmentGroup, s, e, r, o);
								})(u, this.currentUrlTree, t, f, p)
							);
						}),
						(t.prototype.navigateByUrl = function(t, e) {
							void 0 === e && (e = { skipLocationChange: !1 }),
								Or() && this.isNgZoneEnabled && !Gc.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
							var n = sm(t) ? t : this.parseUrl(t),
								r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
							return this.scheduleNavigation(r, 'imperative', null, e);
						}),
						(t.prototype.navigate = function(t, e) {
							return (
								void 0 === e && (e = { skipLocationChange: !1 }),
								(function(t) {
									for (var e = 0; e < t.length; e++) {
										var n = t[e];
										if (null == n) throw new Error('The requested path contains ' + n + ' segment at index ' + e);
									}
								})(t),
								this.navigateByUrl(this.createUrlTree(t, e), e)
							);
						}),
						(t.prototype.serializeUrl = function(t) {
							return this.urlSerializer.serialize(t);
						}),
						(t.prototype.parseUrl = function(t) {
							var e;
							try {
								e = this.urlSerializer.parse(t);
							} catch (n) {
								e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
							}
							return e;
						}),
						(t.prototype.isActive = function(t, e) {
							if (sm(t)) return pg(this.currentUrlTree, t, e);
							var n = this.parseUrl(t);
							return pg(this.currentUrlTree, n, e);
						}),
						(t.prototype.removeEmptyProps = function(t) {
							return Object.keys(t).reduce(function(e, n) {
								var r = t[n];
								return null != r && (e[n] = r), e;
							}, {});
						}),
						(t.prototype.processNavigations = function() {
							var t = this;
							this.navigations.subscribe(
								function(e) {
									(t.navigated = !0),
										(t.lastSuccessfulId = e.id),
										t.events.next(new jh(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(t.currentUrlTree))),
										(t.lastSuccessfulNavigation = t.currentNavigation),
										(t.currentNavigation = null),
										e.resolve(!0);
								},
								function(e) {
									t.console.warn('Unhandled Navigation Error: ');
								}
							);
						}),
						(t.prototype.scheduleNavigation = function(t, e, n, r) {
							var o = this.getTransition();
							if (o && 'imperative' !== e && 'imperative' === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
							if (o && 'hashchange' == e && 'popstate' === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
							if (o && 'popstate' == e && 'hashchange' === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
							var i = null,
								a = null,
								s = new Promise(function(t, e) {
									(i = t), (a = e);
								}),
								l = ++this.navigationId;
							return (
								this.setTransition({
									id: l,
									source: e,
									restoredState: n,
									currentUrlTree: this.currentUrlTree,
									currentRawUrl: this.rawUrlTree,
									rawUrl: t,
									extras: r,
									resolve: i,
									reject: a,
									promise: s,
									currentSnapshot: this.routerState.snapshot,
									currentRouterState: this.routerState
								}),
								s.catch(function(t) {
									return Promise.reject(t);
								})
							);
						}),
						(t.prototype.setBrowserUrl = function(t, e, n, r) {
							var o = this.urlSerializer.serialize(t);
							(r = r || {}),
								this.location.isCurrentPathEqualTo(o) || e ? this.location.replaceState(o, '', i({}, r, { navigationId: n })) : this.location.go(o, '', i({}, r, { navigationId: n }));
						}),
						(t.prototype.resetStateAndUrl = function(t, e, n) {
							(this.routerState = t), (this.currentUrlTree = e), (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)), this.resetUrlToCurrentUrlTree();
						}),
						(t.prototype.resetUrlToCurrentUrlTree = function() {
							this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', { navigationId: this.lastSuccessfulId });
						}),
						t
					);
				})(),
				Jm = (function() {
					return function() {
						(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new Km()), (this.attachRef = null);
					};
				})(),
				Km = (function() {
					function t() {
						this.contexts = new Map();
					}
					return (
						(t.prototype.onChildOutletCreated = function(t, e) {
							var n = this.getOrCreateContext(t);
							(n.outlet = e), this.contexts.set(t, n);
						}),
						(t.prototype.onChildOutletDestroyed = function(t) {
							var e = this.getContext(t);
							e && (e.outlet = null);
						}),
						(t.prototype.onOutletDeactivated = function() {
							var t = this.contexts;
							return (this.contexts = new Map()), t;
						}),
						(t.prototype.onOutletReAttached = function(t) {
							this.contexts = t;
						}),
						(t.prototype.getOrCreateContext = function(t) {
							var e = this.getContext(t);
							return e || ((e = new Jm()), this.contexts.set(t, e)), e;
						}),
						(t.prototype.getContext = function(t) {
							return this.contexts.get(t) || null;
						}),
						t
					);
				})(),
				Xm = (function() {
					function t(t, e, n, r, o) {
						(this.parentContexts = t),
							(this.location = e),
							(this.resolver = n),
							(this.changeDetector = o),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new Xu()),
							(this.deactivateEvents = new Xu()),
							(this.name = r || Yh),
							t.onChildOutletCreated(this.name, this);
					}
					return (
						(t.prototype.ngOnDestroy = function() {
							this.parentContexts.onChildOutletDestroyed(this.name);
						}),
						(t.prototype.ngOnInit = function() {
							if (!this.activated) {
								var t = this.parentContexts.getContext(this.name);
								t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null));
							}
						}),
						Object.defineProperty(t.prototype, 'isActivated', {
							get: function() {
								return !!this.activated;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'component', {
							get: function() {
								if (!this.activated) throw new Error('Outlet is not activated');
								return this.activated.instance;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'activatedRoute', {
							get: function() {
								if (!this.activated) throw new Error('Outlet is not activated');
								return this._activatedRoute;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'activatedRouteData', {
							get: function() {
								return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.detach = function() {
							if (!this.activated) throw new Error('Outlet is not activated');
							this.location.detach();
							var t = this.activated;
							return (this.activated = null), (this._activatedRoute = null), t;
						}),
						(t.prototype.attach = function(t, e) {
							(this.activated = t), (this._activatedRoute = e), this.location.insert(t.hostView);
						}),
						(t.prototype.deactivate = function() {
							if (this.activated) {
								var t = this.component;
								this.activated.destroy(), (this.activated = null), (this._activatedRoute = null), this.deactivateEvents.emit(t);
							}
						}),
						(t.prototype.activateWith = function(t, e) {
							if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
							this._activatedRoute = t;
							var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
								r = this.parentContexts.getOrCreateContext(this.name).children,
								o = new $m(t, r, this.location.injector);
							(this.activated = this.location.createComponent(n, this.location.length, o)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
						}),
						(t.ngDirectiveDef = Le({
							type: t,
							selectors: [['router-outlet']],
							factory: function(e) {
								return new (e || t)(
									cl(Km),
									cl(Au),
									cl(eu),
									('name',
									(function(t, e) {
										var n = t.attrs;
										if (n)
											for (var r = n.length, o = 0; o < r; ) {
												var i = n[o];
												if (_o(i)) break;
												if (0 === i) o += 2;
												else if ('number' == typeof i) {
													for (o++; o < r && 'string' == typeof n[o]; ) o++;
												} else {
													if ('name' === i) return n[o + 1];
													o += 2;
												}
											}
										return null;
									})(rr())),
									cl(Su)
								);
							},
							outputs: { activateEvents: 'activate', deactivateEvents: 'deactivate' },
							exportAs: ['outlet']
						})),
						t
					);
				})(),
				$m = (function() {
					function t(t, e, n) {
						(this.route = t), (this.childContexts = e), (this.parent = n);
					}
					return (
						(t.prototype.get = function(t, e) {
							return t === Hg ? this.route : t === Km ? this.childContexts : this.parent.get(t, e);
						}),
						t
					);
				})(),
				tb = (function() {
					return function() {};
				})(),
				eb = (function() {
					function t() {}
					return (
						(t.prototype.preload = function(t, e) {
							return e().pipe(
								uh(function() {
									return Nd(null);
								})
							);
						}),
						t
					);
				})(),
				nb = (function() {
					function t() {}
					return (
						(t.prototype.preload = function(t, e) {
							return Nd(null);
						}),
						t
					);
				})(),
				rb = (function() {
					function t(t, e, n, r, o) {
						(this.router = t),
							(this.injector = r),
							(this.preloadingStrategy = o),
							(this.loader = new Bm(
								e,
								n,
								function(e) {
									return t.triggerEvent(new Vh(e));
								},
								function(e) {
									return t.triggerEvent(new Fh(e));
								}
							));
					}
					return (
						(t.prototype.setUpPreloading = function() {
							var t = this;
							this.subscription = this.router.events
								.pipe(
									Wd(function(t) {
										return t instanceof jh;
									}),
									Sh(function() {
										return t.preload();
									})
								)
								.subscribe(function() {});
						}),
						(t.prototype.preload = function() {
							var t = this.injector.get(nu);
							return this.processRoutes(t, this.router.config);
						}),
						(t.prototype.ngOnDestroy = function() {
							this.subscription.unsubscribe();
						}),
						(t.prototype.processRoutes = function(t, e) {
							var n,
								r,
								o = [];
							try {
								for (var i = l(e), a = i.next(); !a.done; a = i.next()) {
									var s = a.value;
									if (s.loadChildren && !s.canLoad && s._loadedConfig) {
										var u = s._loadedConfig;
										o.push(this.processRoutes(u.module, u.routes));
									} else s.loadChildren && !s.canLoad ? o.push(this.preloadConfig(t, s)) : s.children && o.push(this.processRoutes(t, s.children));
								}
							} catch (c) {
								n = { error: c };
							} finally {
								try {
									a && !a.done && (r = i.return) && r.call(i);
								} finally {
									if (n) throw n.error;
								}
							}
							return K(o).pipe(
								nt(),
								W(function(t) {})
							);
						}),
						(t.prototype.preloadConfig = function(t, e) {
							var n = this;
							return this.preloadingStrategy.preload(e, function() {
								return n.loader.load(t.injector, e).pipe(
									X(function(t) {
										return (e._loadedConfig = t), n.processRoutes(t.module, t.routes);
									})
								);
							});
						}),
						(t.ngInjectableDef = wt({
							token: t,
							factory: function(e) {
								return new (e || t)(Qt(Ym), Qt(cp), Qt(Nc), Qt(ge), Qt(tb));
							},
							providedIn: null
						})),
						t
					);
				})(),
				ob = (function() {
					function t(t, e, n) {
						void 0 === n && (n = {}),
							(this.router = t),
							(this.viewportScroller = e),
							(this.options = n),
							(this.lastId = 0),
							(this.lastSource = 'imperative'),
							(this.restoredId = 0),
							(this.store = {}),
							(n.scrollPositionRestoration = n.scrollPositionRestoration || 'disabled'),
							(n.anchorScrolling = n.anchorScrolling || 'disabled');
					}
					return (
						(t.prototype.init = function() {
							'disabled' !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration('manual'),
								(this.routerEventsSubscription = this.createScrollEvents()),
								(this.scrollEventsSubscription = this.consumeScrollEvents());
						}),
						(t.prototype.createScrollEvents = function() {
							var t = this;
							return this.router.events.subscribe(function(e) {
								e instanceof Ah
									? ((t.store[t.lastId] = t.viewportScroller.getScrollPosition()),
									  (t.lastSource = e.navigationTrigger),
									  (t.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
									: e instanceof jh && ((t.lastId = e.id), t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment));
							});
						}),
						(t.prototype.consumeScrollEvents = function() {
							var t = this;
							return this.router.events.subscribe(function(e) {
								e instanceof Wh &&
									(e.position
										? 'top' === t.options.scrollPositionRestoration
											? t.viewportScroller.scrollToPosition([0, 0])
											: 'enabled' === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position)
										: e.anchor && 'enabled' === t.options.anchorScrolling
										? t.viewportScroller.scrollToAnchor(e.anchor)
										: 'disabled' !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0]));
							});
						}),
						(t.prototype.scheduleScrollEvent = function(t, e) {
							this.router.triggerEvent(new Wh(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, e));
						}),
						(t.prototype.ngOnDestroy = function() {
							this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
						}),
						t
					);
				})(),
				ib = new Nt('ROUTER_CONFIGURATION'),
				ab = new Nt('ROUTER_FORROOT_GUARD'),
				sb = [
					xp,
					{ provide: bg, useClass: vg },
					{
						provide: Ym,
						useFactory: function(t, e, n, r, o, i, a, s, l, u, c) {
							void 0 === l && (l = {});
							var p = new Ym(null, e, n, r, o, i, a, sg(s));
							if (
								(u && (p.urlHandlingStrategy = u),
								c && (p.routeReuseStrategy = c),
								l.errorHandler && (p.errorHandler = l.errorHandler),
								l.malformedUriErrorHandler && (p.malformedUriErrorHandler = l.malformedUriErrorHandler),
								l.enableTracing)
							) {
								var f = Yp();
								p.events.subscribe(function(t) {
									f.logGroup('Router Event: ' + t.constructor.name), f.log(t.toString()), f.log(t), f.logGroupEnd();
								});
							}
							return (
								l.onSameUrlNavigation && (p.onSameUrlNavigation = l.onSameUrlNavigation),
								l.paramsInheritanceStrategy && (p.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
								l.urlUpdateStrategy && (p.urlUpdateStrategy = l.urlUpdateStrategy),
								l.relativeLinkResolution && (p.relativeLinkResolution = l.relativeLinkResolution),
								p
							);
						},
						deps: [lp, bg, Km, xp, ge, cp, Nc, Fm, ib, [qm, new ht()], [zm, new ht()]]
					},
					Km,
					{
						provide: Hg,
						useFactory: function(t) {
							return t.routerState.root;
						},
						deps: [Ym]
					},
					{ provide: cp, useClass: dp },
					rb,
					nb,
					eb,
					{ provide: ib, useValue: { enableTracing: !1 } }
				];
			function lb() {
				return new rp('Router', Ym);
			}
			var ub = (function() {
				function t(t, e) {}
				var e;
				return (
					(e = t),
					(t.forRoot = function(t, n) {
						return {
							ngModule: e,
							providers: [
								sb,
								db(t),
								{ provide: ab, useFactory: fb, deps: [[Ym, new ht(), new mt()]] },
								{ provide: ib, useValue: n || {} },
								{ provide: wp, useFactory: pb, deps: [vp, [new dt(_p), new ht()], ib] },
								{ provide: ob, useFactory: cb, deps: [Ym, Zp, ib] },
								{ provide: tb, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : nb },
								{ provide: rp, multi: !0, useFactory: lb },
								[hb, { provide: bc, multi: !0, useFactory: gb, deps: [hb] }, { provide: bb, useFactory: mb, deps: [hb] }, { provide: Pc, multi: !0, useExisting: bb }]
							]
						};
					}),
					(t.forChild = function(t) {
						return { ngModule: e, providers: [db(t)] };
					}),
					(t.ngModuleDef = Ne({ type: t })),
					(t.ngInjectorDef = _t({
						factory: function(e) {
							return new (e || t)(Qt(ab, 8), Qt(Ym, 8));
						}
					})),
					t
				);
			})();
			function cb(t, e, n) {
				return n.scrollOffset && e.setOffset(n.scrollOffset), new ob(t, e, n);
			}
			function pb(t, e, n) {
				return void 0 === n && (n = {}), n.useHash ? new kp(t, e) : new Sp(t, e);
			}
			function fb(t) {
				if (t) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function db(t) {
				return [{ provide: ve, multi: !0, useValue: t }, { provide: Fm, multi: !0, useValue: t }];
			}
			var hb = (function() {
				function t(t) {
					(this.injector = t), (this.initNavigation = !1), (this.resultOfPreactivationDone = new D());
				}
				return (
					(t.prototype.appInitializer = function() {
						var t = this;
						return this.injector.get(yp, Promise.resolve(null)).then(function() {
							var e = null,
								n = new Promise(function(t) {
									return (e = t);
								}),
								r = t.injector.get(Ym),
								o = t.injector.get(ib);
							if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
							else if ('disabled' === o.initialNavigation) r.setUpLocationChangeListener(), e(!0);
							else {
								if ('enabled' !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
								(r.hooks.afterPreactivation = function() {
									return t.initNavigation ? Nd(null) : ((t.initNavigation = !0), e(!0), t.resultOfPreactivationDone);
								}),
									r.initialNavigation();
							}
							return n;
						});
					}),
					(t.prototype.bootstrapListener = function(t) {
						var e = this.injector.get(ib),
							n = this.injector.get(rb),
							r = this.injector.get(ob),
							o = this.injector.get(Ym),
							i = this.injector.get(lp);
						t === i.components[0] &&
							(this.isLegacyEnabled(e) ? o.initialNavigation() : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(),
							n.setUpPreloading(),
							r.init(),
							o.resetRootComponentType(i.componentTypes[0]),
							this.resultOfPreactivationDone.next(null),
							this.resultOfPreactivationDone.complete());
					}),
					(t.prototype.isLegacyEnabled = function(t) {
						return 'legacy_enabled' === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation;
					}),
					(t.prototype.isLegacyDisabled = function(t) {
						return 'legacy_disabled' === t.initialNavigation || !1 === t.initialNavigation;
					}),
					(t.ngInjectableDef = wt({
						token: t,
						factory: function(e) {
							return new (e || t)(Qt(ge));
						},
						providedIn: null
					})),
					t
				);
			})();
			function gb(t) {
				return t.appInitializer.bind(t);
			}
			function mb(t) {
				return t.bootstrapListener.bind(t);
			}
			var bb = new Nt('Router Initializer'),
				vb = (function() {
					function t() {}
					return (
						(t.ngComponentDef = je({
							type: t,
							selectors: [['docs-root']],
							factory: function(e) {
								return new (e || t)();
							},
							consts: 2,
							vars: 0,
							template: function(t, e) {
								1 & t && (vl(0, 'ez-root'), wl(1, 'router-outlet'), yl());
							},
							directives: [jd, Xm],
							styles: ['']
						})),
						t
					);
				})(),
				yb = [1, 'pad-a-sm', 'border-a-gray', 'box-shadow-1', 'fixed-l', 'styleguide-menu'],
				wb = ['href', '#', 1, 'hover', 'bg-hover-lt-gray', 'pad-a-xs', 3, 'ngClass', 'click'],
				_b = ['class', 'pad-l-sm submenu', 4, 'ngIf'],
				xb = ['tabindex', '-1', 1, 'pad-a-xl', 'styleguide'],
				Cb = ['content', ''],
				kb = [1, 'pad-t-xl', 3, 'innerHTML'],
				Sb = ['class', 'mar-b-lg box-shadow-1 border-lr-gray section', 4, 'ngIf'],
				Pb = [1, 'pad-l-sm', 'submenu'];
			function Eb(t, e) {
				1 & t && (vl(0, 'ul', Pb), vl(1, 'li'), vl(2, 'a'), Tl(3, 'Close'), yl(), yl(), yl());
			}
			function Ob(t, e) {
				1 & t && (vl(0, 'ul', Pb), vl(1, 'li'), vl(2, 'a'), Tl(3, 'Empty'), yl(), yl(), yl());
			}
			function Ib(t, e) {
				1 & t &&
					(vl(0, 'ul', Pb),
					vl(1, 'li'),
					vl(2, 'a'),
					Tl(3, 'Group'),
					yl(),
					yl(),
					vl(4, 'li'),
					vl(5, 'a'),
					Tl(6, 'Rounded'),
					yl(),
					yl(),
					vl(7, 'li'),
					vl(8, 'a'),
					Tl(9, 'State'),
					yl(),
					yl(),
					yl());
			}
			function Tb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function Mb(t, e) {
				1 & t && (vl(0, 'ul', Pb), vl(1, 'li'), vl(2, 'a'), Tl(3, 'Accordion'), yl(), yl(), vl(4, 'li'), vl(5, 'a'), Tl(6, 'Expand'), yl(), yl(), yl());
			}
			function Ab(t, e) {
				1 & t &&
					(vl(0, 'ul', Pb),
					vl(1, 'li'),
					vl(2, 'a'),
					Tl(3, 'Background'),
					yl(),
					yl(),
					vl(4, 'li'),
					vl(5, 'a'),
					Tl(6, 'Border'),
					yl(),
					yl(),
					vl(7, 'li'),
					vl(8, 'a'),
					Tl(9, 'Hover'),
					yl(),
					yl(),
					vl(10, 'li'),
					vl(11, 'a'),
					Tl(12, 'Text'),
					yl(),
					yl(),
					yl());
			}
			function jb(t, e) {
				1 & t &&
					(vl(0, 'ul', Pb),
					vl(1, 'li'),
					vl(2, 'a'),
					Tl(3, 'Container Column'),
					yl(),
					yl(),
					vl(4, 'li'),
					vl(5, 'a'),
					Tl(6, 'Container Row'),
					yl(),
					yl(),
					vl(7, 'li'),
					vl(8, 'a'),
					Tl(9, 'Item Column'),
					yl(),
					yl(),
					vl(10, 'li'),
					vl(11, 'a'),
					Tl(12, 'Item Order'),
					yl(),
					yl(),
					vl(13, 'li'),
					vl(14, 'a'),
					Tl(15, 'Item Row'),
					yl(),
					yl(),
					vl(16, 'li'),
					vl(17, 'a'),
					Tl(18, 'Item Size'),
					yl(),
					yl(),
					vl(19, 'li'),
					vl(20, 'a'),
					Tl(21, 'Wrap Column'),
					yl(),
					yl(),
					vl(22, 'li'),
					vl(23, 'a'),
					Tl(24, 'Wrap Row'),
					yl(),
					yl(),
					yl());
			}
			function Rb(t, e) {
				1 & t &&
					(vl(0, 'ul', Pb),
					vl(1, 'li'),
					vl(2, 'a'),
					Tl(3, 'Checkbox'),
					yl(),
					yl(),
					vl(4, 'li'),
					vl(5, 'a'),
					Tl(6, 'Field'),
					yl(),
					yl(),
					vl(7, 'li'),
					vl(8, 'a'),
					Tl(9, 'Field Group'),
					yl(),
					yl(),
					vl(10, 'li'),
					vl(11, 'a'),
					Tl(12, 'Fieldset'),
					yl(),
					yl(),
					vl(13, 'li'),
					vl(14, 'a'),
					Tl(15, 'Form Group'),
					yl(),
					yl(),
					vl(16, 'li'),
					vl(17, 'a'),
					Tl(18, 'Label'),
					yl(),
					yl(),
					vl(19, 'li'),
					vl(20, 'a'),
					Tl(21, 'State'),
					yl(),
					yl(),
					yl());
			}
			function Db(t, e) {
				1 & t &&
					(vl(0, 'ul', Pb),
					vl(1, 'li'),
					vl(2, 'a'),
					Tl(3, 'Area'),
					yl(),
					yl(),
					vl(4, 'li'),
					vl(5, 'a'),
					Tl(6, 'Container'),
					yl(),
					yl(),
					vl(7, 'li'),
					vl(8, 'a'),
					Tl(9, 'Item'),
					yl(),
					yl(),
					yl());
			}
			function Nb(t, e) {
				1 & t && (vl(0, 'ul', Pb), vl(1, 'li'), vl(2, 'a'), Tl(3, 'Container'), yl(), yl(), vl(4, 'li'), vl(5, 'a'), Tl(6, 'Sticky Footer'), yl(), yl(), yl());
			}
			function Ub(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function Lb(t, e) {
				1 & t &&
					(vl(0, 'ul', Pb),
					vl(1, 'li'),
					vl(2, 'a'),
					Tl(3, 'Items'),
					yl(),
					yl(),
					vl(4, 'li'),
					vl(5, 'a'),
					Tl(6, 'Links'),
					yl(),
					yl(),
					vl(7, 'li'),
					vl(8, 'a'),
					Tl(9, 'Placement'),
					yl(),
					yl(),
					yl());
			}
			function Hb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function zb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function Vb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function Fb(t, e) {
				1 & t && (vl(0, 'ul', Pb), vl(1, 'li'), vl(2, 'a'), Tl(3, 'Margin'), yl(), yl(), vl(4, 'li'), vl(5, 'a'), Tl(6, 'Padding'), yl(), yl(), yl());
			}
			function Bb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function qb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function Gb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function Zb(t, e) {
				1 & t &&
					(vl(0, 'ul', Pb),
					vl(1, 'li'),
					vl(2, 'a'),
					Tl(3, 'Border'),
					yl(),
					yl(),
					vl(4, 'li'),
					vl(5, 'a'),
					Tl(6, 'Hover'),
					yl(),
					yl(),
					vl(7, 'li'),
					vl(8, 'a'),
					Tl(9, 'Striped'),
					yl(),
					yl(),
					vl(10, 'li'),
					vl(11, 'a'),
					Tl(12, 'Table Cell'),
					yl(),
					yl(),
					vl(13, 'li'),
					vl(14, 'a'),
					Tl(15, 'Table Row'),
					yl(),
					yl(),
					yl());
			}
			function Wb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function Qb(t, e) {
				1 & t && (vl(0, 'ul', Pb), vl(1, 'li'), vl(2, 'a'), Tl(3, 'Font'), yl(), yl(), vl(4, 'li'), vl(5, 'a'), Tl(6, 'Text'), yl(), yl(), yl());
			}
			function Yb(t, e) {
				1 & t && wl(0, 'ul', Pb);
			}
			function Jb(t, e) {
				1 & t && (vl(0, 'ul', Pb), vl(1, 'li'), vl(2, 'a'), Tl(3, 'Hide'), yl(), yl(), vl(4, 'li'), vl(5, 'a'), Tl(6, 'Show'), yl(), yl(), yl());
			}
			var Kb = [1, 'mar-b-lg', 'box-shadow-1', 'border-lr-gray', 'section'],
				Xb = [1, 'pad-a-sm', 'bg-lt-gray', 'border-tb-gray'],
				$b = [1, 'pad-a-sm', 3, 'ngClass'],
				tv = [1, 'alert-bad'],
				ev = [1, 'alert-good'],
				nv = [1, 'alert-info'],
				rv = [1, 'alert-warn'],
				ov = [1, 'pad-a-sm', 'border-tb-gray'],
				iv = [1, 'hljs-tag'],
				av = [1, 'hljs-title'],
				sv = [1, 'hljs-attribute'],
				lv = [1, 'hljs-value'],
				uv = function(t, e) {
					return { flexbox: t, box: e };
				};
			function cv(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'p'),
						Tl(3, 'Alerts are styled with an '),
						vl(4, 'code'),
						Tl(5, '.alert-[bad || good || info || warn]'),
						yl(),
						Tl(6, ' class.'),
						yl(),
						yl(),
						vl(7, 'section', $b),
						vl(8, 'aside', tv),
						Tl(9, 'bad'),
						yl(),
						vl(10, 'aside', ev),
						Tl(11, 'good'),
						yl(),
						vl(12, 'aside', nv),
						Tl(13, 'info'),
						yl(),
						vl(14, 'aside', rv),
						Tl(15, 'warn'),
						yl(),
						vl(16, 'ez-alert', ev),
						Tl(17, 'good'),
						yl(),
						yl(),
						vl(18, 'figure'),
						vl(19, 'pre', ov),
						vl(20, 'span', iv),
						Tl(21, '<'),
						vl(22, 'span', av),
						Tl(23, 'aside'),
						yl(),
						Tl(24, ' '),
						vl(25, 'span', sv),
						Tl(26, 'class'),
						yl(),
						Tl(27, '='),
						vl(28, 'span', lv),
						Tl(29, '"alert-bad"'),
						yl(),
						Tl(30, '>'),
						yl(),
						Tl(31, 'bad'),
						vl(32, 'span', iv),
						Tl(33, '</'),
						vl(34, 'span', av),
						Tl(35, 'aside'),
						yl(),
						Tl(36, '>'),
						yl(),
						Tl(37, '\n'),
						vl(38, 'span', iv),
						Tl(39, '<'),
						vl(40, 'span', av),
						Tl(41, 'aside'),
						yl(),
						Tl(42, ' '),
						vl(43, 'span', sv),
						Tl(44, 'class'),
						yl(),
						Tl(45, '='),
						vl(46, 'span', lv),
						Tl(47, '"alert-good"'),
						yl(),
						Tl(48, '>'),
						yl(),
						Tl(49, 'good'),
						vl(50, 'span', iv),
						Tl(51, '</'),
						vl(52, 'span', av),
						Tl(53, 'aside'),
						yl(),
						Tl(54, '>'),
						yl(),
						Tl(55, '\n'),
						vl(56, 'span', iv),
						Tl(57, '<'),
						vl(58, 'span', av),
						Tl(59, 'aside'),
						yl(),
						Tl(60, ' '),
						vl(61, 'span', sv),
						Tl(62, 'class'),
						yl(),
						Tl(63, '='),
						vl(64, 'span', lv),
						Tl(65, '"alert-info"'),
						yl(),
						Tl(66, '>'),
						yl(),
						Tl(67, 'info'),
						vl(68, 'span', iv),
						Tl(69, '</'),
						vl(70, 'span', av),
						Tl(71, 'aside'),
						yl(),
						Tl(72, '>'),
						yl(),
						Tl(73, '\n'),
						vl(74, 'span', iv),
						Tl(75, '<'),
						vl(76, 'span', av),
						Tl(77, 'aside'),
						yl(),
						Tl(78, ' '),
						vl(79, 'span', sv),
						Tl(80, 'class'),
						yl(),
						Tl(81, '='),
						vl(82, 'span', lv),
						Tl(83, '"alert-warn"'),
						yl(),
						Tl(84, '>'),
						yl(),
						Tl(85, 'warn'),
						vl(86, 'span', iv),
						Tl(87, '</'),
						vl(88, 'span', av),
						Tl(89, 'aside'),
						yl(),
						Tl(90, '>'),
						yl(),
						Tl(91, '\n'),
						vl(92, 'span', iv),
						Tl(93, '<'),
						vl(94, 'span', av),
						Tl(95, 'ez-alert'),
						yl(),
						Tl(96, ' '),
						vl(97, 'span', sv),
						Tl(98, 'class'),
						yl(),
						Tl(99, '='),
						vl(100, 'span', lv),
						Tl(101, '"alert-good"'),
						yl(),
						Tl(102, '>'),
						yl(),
						Tl(103, 'good'),
						vl(104, 'span', iv),
						Tl(105, '</'),
						vl(106, 'span', av),
						Tl(107, 'ez-alert'),
						yl(),
						Tl(108, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(7), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var pv = [1, 'alert-good', 'close'],
				fv = [1, 'close', 'alert-good'];
			function dv(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Close'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Alerts are closed by adding a '),
						vl(6, 'code'),
						Tl(7, '.close'),
						yl(),
						Tl(8, ' class.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'aside', pv),
						Tl(11, 'close'),
						yl(),
						vl(12, 'ez-alert', fv),
						Tl(13, 'close'),
						yl(),
						yl(),
						vl(14, 'figure'),
						vl(15, 'pre', ov),
						vl(16, 'span', iv),
						Tl(17, '<'),
						vl(18, 'span', av),
						Tl(19, 'aside'),
						yl(),
						Tl(20, ' '),
						vl(21, 'span', sv),
						Tl(22, 'class'),
						yl(),
						Tl(23, '='),
						vl(24, 'span', lv),
						Tl(25, '"alert-good close"'),
						yl(),
						Tl(26, '>'),
						yl(),
						Tl(27, 'close'),
						vl(28, 'span', iv),
						Tl(29, '</'),
						vl(30, 'span', av),
						Tl(31, 'aside'),
						yl(),
						Tl(32, '>'),
						yl(),
						Tl(33, '\n'),
						vl(34, 'span', iv),
						Tl(35, '<'),
						vl(36, 'span', av),
						Tl(37, 'ez-alert'),
						yl(),
						Tl(38, ' '),
						vl(39, 'span', sv),
						Tl(40, 'class'),
						yl(),
						Tl(41, '='),
						vl(42, 'span', lv),
						Tl(43, '"close alert-good"'),
						yl(),
						Tl(44, '>'),
						yl(),
						Tl(45, 'close'),
						vl(46, 'span', iv),
						Tl(47, '</'),
						vl(48, 'span', av),
						Tl(49, 'ez-alert'),
						yl(),
						Tl(50, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var hv = [1, 'badge-sm', 'bg-dk-blue', 'text-white'],
				gv = [1, 'badge-md', 'bg-dk-blue', 'text-white'],
				mv = [1, 'badge-lg', 'bg-dk-blue', 'text-white'];
			function bv(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'p'),
						Tl(3, 'Badges are styled with a '),
						vl(4, 'code'),
						Tl(5, '.badge-[sm || md || lg]'),
						yl(),
						Tl(6, ' class.'),
						yl(),
						yl(),
						vl(7, 'section', $b),
						vl(8, 'p', hv),
						Tl(9, '1'),
						yl(),
						vl(10, 'p', gv),
						Tl(11, '20'),
						yl(),
						vl(12, 'p', mv),
						Tl(13, '300'),
						yl(),
						vl(14, 'ez-badge', hv),
						Tl(15, '10'),
						yl(),
						yl(),
						vl(16, 'figure'),
						vl(17, 'pre', ov),
						vl(18, 'span', iv),
						Tl(19, '<'),
						vl(20, 'span', av),
						Tl(21, 'p'),
						yl(),
						Tl(22, ' '),
						vl(23, 'span', sv),
						Tl(24, 'class'),
						yl(),
						Tl(25, '='),
						vl(26, 'span', lv),
						Tl(27, '"badge-sm bg-dk-blue text-white"'),
						yl(),
						Tl(28, '>'),
						yl(),
						Tl(29, '1'),
						vl(30, 'span', iv),
						Tl(31, '</'),
						vl(32, 'span', av),
						Tl(33, 'p'),
						yl(),
						Tl(34, '>'),
						yl(),
						Tl(35, '\n'),
						vl(36, 'span', iv),
						Tl(37, '<'),
						vl(38, 'span', av),
						Tl(39, 'p'),
						yl(),
						Tl(40, ' '),
						vl(41, 'span', sv),
						Tl(42, 'class'),
						yl(),
						Tl(43, '='),
						vl(44, 'span', lv),
						Tl(45, '"badge-md bg-dk-blue text-white"'),
						yl(),
						Tl(46, '>'),
						yl(),
						Tl(47, '20'),
						vl(48, 'span', iv),
						Tl(49, '</'),
						vl(50, 'span', av),
						Tl(51, 'p'),
						yl(),
						Tl(52, '>'),
						yl(),
						Tl(53, '\n'),
						vl(54, 'span', iv),
						Tl(55, '<'),
						vl(56, 'span', av),
						Tl(57, 'p'),
						yl(),
						Tl(58, ' '),
						vl(59, 'span', sv),
						Tl(60, 'class'),
						yl(),
						Tl(61, '='),
						vl(62, 'span', lv),
						Tl(63, '"badge-lg bg-dk-blue text-white"'),
						yl(),
						Tl(64, '>'),
						yl(),
						Tl(65, '300'),
						vl(66, 'span', iv),
						Tl(67, '</'),
						vl(68, 'span', av),
						Tl(69, 'p'),
						yl(),
						Tl(70, '>'),
						yl(),
						Tl(71, '\n'),
						vl(72, 'span', iv),
						Tl(73, '<'),
						vl(74, 'span', av),
						Tl(75, 'ez-badge'),
						yl(),
						Tl(76, ' '),
						vl(77, 'span', sv),
						Tl(78, 'class'),
						yl(),
						Tl(79, '='),
						vl(80, 'span', lv),
						Tl(81, '"badge-sm bg-dk-blue text-white"'),
						yl(),
						Tl(82, '>'),
						yl(),
						Tl(83, '10'),
						vl(84, 'span', iv),
						Tl(85, '</'),
						vl(86, 'span', av),
						Tl(87, 'ez-badge'),
						yl(),
						Tl(88, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(7), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function vv(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Empty'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'If a badge does not contain text, it is not rendered.'),
						yl(),
						yl(),
						vl(6, 'section', $b),
						vl(7, 'p', hv),
						Tl(8, '1'),
						yl(),
						wl(9, 'p', gv),
						yl(),
						vl(10, 'figure'),
						vl(11, 'pre', ov),
						vl(12, 'span', iv),
						Tl(13, '<'),
						vl(14, 'span', av),
						Tl(15, 'p'),
						yl(),
						Tl(16, ' '),
						vl(17, 'span', sv),
						Tl(18, 'class'),
						yl(),
						Tl(19, '='),
						vl(20, 'span', lv),
						Tl(21, '"badge-sm bg-dk-blue text-white"'),
						yl(),
						Tl(22, '>'),
						yl(),
						Tl(23, '1'),
						vl(24, 'span', iv),
						Tl(25, '</'),
						vl(26, 'span', av),
						Tl(27, 'p'),
						yl(),
						Tl(28, '>'),
						yl(),
						Tl(29, '\n'),
						vl(30, 'span', iv),
						Tl(31, '<'),
						vl(32, 'span', av),
						Tl(33, 'p'),
						yl(),
						Tl(34, ' '),
						vl(35, 'span', sv),
						Tl(36, 'class'),
						yl(),
						Tl(37, '='),
						vl(38, 'span', lv),
						Tl(39, '"badge-md bg-dk-blue text-white"'),
						yl(),
						Tl(40, '>'),
						yl(),
						vl(41, 'span', iv),
						Tl(42, '</'),
						vl(43, 'span', av),
						Tl(44, 'p'),
						yl(),
						Tl(45, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(6), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var yv = ['type', 'button', 1, 'btn-xs', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				wv = ['type', 'button', 1, 'btn-sm', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				_v = ['type', 'button', 1, 'btn-md', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				xv = ['type', 'button', 1, 'btn-lg', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Cv = ['type', 'button', 1, 'btn-xl', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				kv = ['type', 'button', 1, 'btn-full', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Sv = [1, 'hljs-class'],
				Pv = [1, 'hljs-keyword'],
				Ev = [1, 'hljs-string'];
			function Ov(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'p'),
						Tl(3, 'Buttons are styled with a '),
						vl(4, 'code'),
						Tl(5, '.btn-[xs || sm || md || lg || xl || full]'),
						yl(),
						Tl(6, ' class.'),
						yl(),
						yl(),
						vl(7, 'section', $b),
						vl(8, 'button', yv),
						Tl(9, 'xs'),
						yl(),
						vl(10, 'button', wv),
						Tl(11, 'sm'),
						yl(),
						vl(12, 'button', _v),
						Tl(13, 'md'),
						yl(),
						vl(14, 'button', xv),
						Tl(15, 'lg'),
						yl(),
						vl(16, 'button', Cv),
						Tl(17, 'xl'),
						yl(),
						vl(18, 'button', kv),
						Tl(19, 'full'),
						yl(),
						yl(),
						vl(20, 'figure'),
						vl(21, 'pre', ov),
						Tl(22, '<button '),
						vl(23, 'span', Sv),
						vl(24, 'span', Pv),
						Tl(25, 'class'),
						yl(),
						Tl(26, '='),
						yl(),
						vl(27, 'span', Ev),
						Tl(28, '"btn-xs bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(29, ' '),
						vl(30, 'span', Sv),
						vl(31, 'span', Pv),
						Tl(32, 'type'),
						yl(),
						Tl(33, '='),
						yl(),
						vl(34, 'span', Ev),
						Tl(35, '"button"'),
						yl(),
						Tl(36, '>xs</button>\n<button '),
						vl(37, 'span', Sv),
						vl(38, 'span', Pv),
						Tl(39, 'class'),
						yl(),
						Tl(40, '='),
						yl(),
						vl(41, 'span', Ev),
						Tl(42, '"btn-sm bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(43, ' '),
						vl(44, 'span', Sv),
						vl(45, 'span', Pv),
						Tl(46, 'type'),
						yl(),
						Tl(47, '='),
						yl(),
						vl(48, 'span', Ev),
						Tl(49, '"button"'),
						yl(),
						Tl(50, '>sm</button>\n<button '),
						vl(51, 'span', Sv),
						vl(52, 'span', Pv),
						Tl(53, 'class'),
						yl(),
						Tl(54, '='),
						yl(),
						vl(55, 'span', Ev),
						Tl(56, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(57, ' '),
						vl(58, 'span', Sv),
						vl(59, 'span', Pv),
						Tl(60, 'type'),
						yl(),
						Tl(61, '='),
						yl(),
						vl(62, 'span', Ev),
						Tl(63, '"button"'),
						yl(),
						Tl(64, '>md</button>\n<button '),
						vl(65, 'span', Sv),
						vl(66, 'span', Pv),
						Tl(67, 'class'),
						yl(),
						Tl(68, '='),
						yl(),
						vl(69, 'span', Ev),
						Tl(70, '"btn-lg bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(71, ' '),
						vl(72, 'span', Sv),
						vl(73, 'span', Pv),
						Tl(74, 'type'),
						yl(),
						Tl(75, '='),
						yl(),
						vl(76, 'span', Ev),
						Tl(77, '"button"'),
						yl(),
						Tl(78, '>lg</button>\n<button '),
						vl(79, 'span', Sv),
						vl(80, 'span', Pv),
						Tl(81, 'class'),
						yl(),
						Tl(82, '='),
						yl(),
						vl(83, 'span', Ev),
						Tl(84, '"btn-xl bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(85, ' '),
						vl(86, 'span', Sv),
						vl(87, 'span', Pv),
						Tl(88, 'type'),
						yl(),
						Tl(89, '='),
						yl(),
						vl(90, 'span', Ev),
						Tl(91, '"button"'),
						yl(),
						Tl(92, '>xl</button>\n<button '),
						vl(93, 'span', Sv),
						vl(94, 'span', Pv),
						Tl(95, 'class'),
						yl(),
						Tl(96, '='),
						yl(),
						vl(97, 'span', Ev),
						Tl(98, '"btn-full bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(99, ' '),
						vl(100, 'span', Sv),
						vl(101, 'span', Pv),
						Tl(102, 'type'),
						yl(),
						Tl(103, '='),
						yl(),
						vl(104, 'span', Ev),
						Tl(105, '"button"'),
						yl(),
						Tl(106, '>full</button>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(7), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Iv = ['role', 'group', 'aria-label', 'button row group', 1, 'btn-group-row'],
				Tv = ['role', 'group', 'aria-label', 'button column group', 1, 'btn-group-col'],
				Mv = ['role', 'group', 'aria-label', 'button full row group', 1, 'btn-group-full'];
			function Av(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Group'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Buttons are grouped with a '),
						vl(6, 'code'),
						Tl(7, '.btn-group-[row || col || full]'),
						yl(),
						Tl(8, ' class on a parent container.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'section', Iv),
						vl(11, 'button', _v),
						Tl(12, 'md'),
						yl(),
						vl(13, 'button', _v),
						Tl(14, 'md'),
						yl(),
						vl(15, 'button', _v),
						Tl(16, 'md'),
						yl(),
						vl(17, 'button', _v),
						Tl(18, 'md'),
						yl(),
						vl(19, 'button', _v),
						Tl(20, 'md'),
						yl(),
						yl(),
						vl(21, 'section', Tv),
						vl(22, 'button', _v),
						Tl(23, 'md'),
						yl(),
						vl(24, 'button', _v),
						Tl(25, 'md'),
						yl(),
						vl(26, 'button', _v),
						Tl(27, 'md'),
						yl(),
						vl(28, 'button', _v),
						Tl(29, 'md'),
						yl(),
						vl(30, 'button', _v),
						Tl(31, 'md'),
						yl(),
						yl(),
						vl(32, 'section', Mv),
						vl(33, 'button', _v),
						Tl(34, 'md'),
						yl(),
						vl(35, 'button', _v),
						Tl(36, 'md'),
						yl(),
						vl(37, 'button', _v),
						Tl(38, 'md'),
						yl(),
						vl(39, 'button', _v),
						Tl(40, 'md'),
						yl(),
						vl(41, 'button', _v),
						Tl(42, 'md'),
						yl(),
						yl(),
						yl(),
						vl(43, 'figure'),
						vl(44, 'pre', ov),
						Tl(45, '<section '),
						vl(46, 'span', Sv),
						vl(47, 'span', Pv),
						Tl(48, 'class'),
						yl(),
						Tl(49, '='),
						yl(),
						vl(50, 'span', Ev),
						Tl(51, '"btn-group-row"'),
						yl(),
						Tl(52, ' role='),
						vl(53, 'span', Ev),
						Tl(54, '"group"'),
						yl(),
						Tl(55, ' aria-label='),
						vl(56, 'span', Ev),
						Tl(57, '"button row group"'),
						yl(),
						Tl(58, '>\n    <button '),
						vl(59, 'span', Sv),
						vl(60, 'span', Pv),
						Tl(61, 'class'),
						yl(),
						Tl(62, '='),
						yl(),
						vl(63, 'span', Ev),
						Tl(64, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(65, ' '),
						vl(66, 'span', Sv),
						vl(67, 'span', Pv),
						Tl(68, 'type'),
						yl(),
						Tl(69, '='),
						yl(),
						vl(70, 'span', Ev),
						Tl(71, '"button"'),
						yl(),
						Tl(72, '>md</button>\n    <button '),
						vl(73, 'span', Sv),
						vl(74, 'span', Pv),
						Tl(75, 'class'),
						yl(),
						Tl(76, '='),
						yl(),
						vl(77, 'span', Ev),
						Tl(78, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(79, ' '),
						vl(80, 'span', Sv),
						vl(81, 'span', Pv),
						Tl(82, 'type'),
						yl(),
						Tl(83, '='),
						yl(),
						vl(84, 'span', Ev),
						Tl(85, '"button"'),
						yl(),
						Tl(86, '>md</button>\n    <button '),
						vl(87, 'span', Sv),
						vl(88, 'span', Pv),
						Tl(89, 'class'),
						yl(),
						Tl(90, '='),
						yl(),
						vl(91, 'span', Ev),
						Tl(92, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(93, ' '),
						vl(94, 'span', Sv),
						vl(95, 'span', Pv),
						Tl(96, 'type'),
						yl(),
						Tl(97, '='),
						yl(),
						vl(98, 'span', Ev),
						Tl(99, '"button"'),
						yl(),
						Tl(100, '>md</button>\n    <button '),
						vl(101, 'span', Sv),
						vl(102, 'span', Pv),
						Tl(103, 'class'),
						yl(),
						Tl(104, '='),
						yl(),
						vl(105, 'span', Ev),
						Tl(106, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(107, ' '),
						vl(108, 'span', Sv),
						vl(109, 'span', Pv),
						Tl(110, 'type'),
						yl(),
						Tl(111, '='),
						yl(),
						vl(112, 'span', Ev),
						Tl(113, '"button"'),
						yl(),
						Tl(114, '>md</button>\n    <button '),
						vl(115, 'span', Sv),
						vl(116, 'span', Pv),
						Tl(117, 'class'),
						yl(),
						Tl(118, '='),
						yl(),
						vl(119, 'span', Ev),
						Tl(120, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(121, ' '),
						vl(122, 'span', Sv),
						vl(123, 'span', Pv),
						Tl(124, 'type'),
						yl(),
						Tl(125, '='),
						yl(),
						vl(126, 'span', Ev),
						Tl(127, '"button"'),
						yl(),
						Tl(128, '>md</button>\n</section>\n<section '),
						vl(129, 'span', Sv),
						vl(130, 'span', Pv),
						Tl(131, 'class'),
						yl(),
						Tl(132, '='),
						yl(),
						vl(133, 'span', Ev),
						Tl(134, '"btn-group-col"'),
						yl(),
						Tl(135, ' role='),
						vl(136, 'span', Ev),
						Tl(137, '"group"'),
						yl(),
						Tl(138, ' aria-label='),
						vl(139, 'span', Ev),
						Tl(140, '"button column group"'),
						yl(),
						Tl(141, '>\n    <button '),
						vl(142, 'span', Sv),
						vl(143, 'span', Pv),
						Tl(144, 'class'),
						yl(),
						Tl(145, '='),
						yl(),
						vl(146, 'span', Ev),
						Tl(147, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(148, ' '),
						vl(149, 'span', Sv),
						vl(150, 'span', Pv),
						Tl(151, 'type'),
						yl(),
						Tl(152, '='),
						yl(),
						vl(153, 'span', Ev),
						Tl(154, '"button"'),
						yl(),
						Tl(155, '>md</button>\n    <button '),
						vl(156, 'span', Sv),
						vl(157, 'span', Pv),
						Tl(158, 'class'),
						yl(),
						Tl(159, '='),
						yl(),
						vl(160, 'span', Ev),
						Tl(161, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(162, ' '),
						vl(163, 'span', Sv),
						vl(164, 'span', Pv),
						Tl(165, 'type'),
						yl(),
						Tl(166, '='),
						yl(),
						vl(167, 'span', Ev),
						Tl(168, '"button"'),
						yl(),
						Tl(169, '>md</button>\n    <button '),
						vl(170, 'span', Sv),
						vl(171, 'span', Pv),
						Tl(172, 'class'),
						yl(),
						Tl(173, '='),
						yl(),
						vl(174, 'span', Ev),
						Tl(175, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(176, ' '),
						vl(177, 'span', Sv),
						vl(178, 'span', Pv),
						Tl(179, 'type'),
						yl(),
						Tl(180, '='),
						yl(),
						vl(181, 'span', Ev),
						Tl(182, '"button"'),
						yl(),
						Tl(183, '>md</button>\n    <button '),
						vl(184, 'span', Sv),
						vl(185, 'span', Pv),
						Tl(186, 'class'),
						yl(),
						Tl(187, '='),
						yl(),
						vl(188, 'span', Ev),
						Tl(189, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(190, ' '),
						vl(191, 'span', Sv),
						vl(192, 'span', Pv),
						Tl(193, 'type'),
						yl(),
						Tl(194, '='),
						yl(),
						vl(195, 'span', Ev),
						Tl(196, '"button"'),
						yl(),
						Tl(197, '>md</button>\n    <button '),
						vl(198, 'span', Sv),
						vl(199, 'span', Pv),
						Tl(200, 'class'),
						yl(),
						Tl(201, '='),
						yl(),
						vl(202, 'span', Ev),
						Tl(203, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(204, ' '),
						vl(205, 'span', Sv),
						vl(206, 'span', Pv),
						Tl(207, 'type'),
						yl(),
						Tl(208, '='),
						yl(),
						vl(209, 'span', Ev),
						Tl(210, '"button"'),
						yl(),
						Tl(211, '>md</button>\n</section>\n<section '),
						vl(212, 'span', Sv),
						vl(213, 'span', Pv),
						Tl(214, 'class'),
						yl(),
						Tl(215, '='),
						yl(),
						vl(216, 'span', Ev),
						Tl(217, '"btn-group-full"'),
						yl(),
						Tl(218, ' role='),
						vl(219, 'span', Ev),
						Tl(220, '"group"'),
						yl(),
						Tl(221, ' aria-label='),
						vl(222, 'span', Ev),
						Tl(223, '"button full row group"'),
						yl(),
						Tl(224, '>\n    <button '),
						vl(225, 'span', Sv),
						vl(226, 'span', Pv),
						Tl(227, 'class'),
						yl(),
						Tl(228, '='),
						yl(),
						vl(229, 'span', Ev),
						Tl(230, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(231, ' '),
						vl(232, 'span', Sv),
						vl(233, 'span', Pv),
						Tl(234, 'type'),
						yl(),
						Tl(235, '='),
						yl(),
						vl(236, 'span', Ev),
						Tl(237, '"button"'),
						yl(),
						Tl(238, '>md</button>\n    <button '),
						vl(239, 'span', Sv),
						vl(240, 'span', Pv),
						Tl(241, 'class'),
						yl(),
						Tl(242, '='),
						yl(),
						vl(243, 'span', Ev),
						Tl(244, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(245, ' '),
						vl(246, 'span', Sv),
						vl(247, 'span', Pv),
						Tl(248, 'type'),
						yl(),
						Tl(249, '='),
						yl(),
						vl(250, 'span', Ev),
						Tl(251, '"button"'),
						yl(),
						Tl(252, '>md</button>\n    <button '),
						vl(253, 'span', Sv),
						vl(254, 'span', Pv),
						Tl(255, 'class'),
						yl(),
						Tl(256, '='),
						yl(),
						vl(257, 'span', Ev),
						Tl(258, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(259, ' '),
						vl(260, 'span', Sv),
						vl(261, 'span', Pv),
						Tl(262, 'type'),
						yl(),
						Tl(263, '='),
						yl(),
						vl(264, 'span', Ev),
						Tl(265, '"button"'),
						yl(),
						Tl(266, '>md</button>\n    <button '),
						vl(267, 'span', Sv),
						vl(268, 'span', Pv),
						Tl(269, 'class'),
						yl(),
						Tl(270, '='),
						yl(),
						vl(271, 'span', Ev),
						Tl(272, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(273, ' '),
						vl(274, 'span', Sv),
						vl(275, 'span', Pv),
						Tl(276, 'type'),
						yl(),
						Tl(277, '='),
						yl(),
						vl(278, 'span', Ev),
						Tl(279, '"button"'),
						yl(),
						Tl(280, '>md</button>\n    <button '),
						vl(281, 'span', Sv),
						vl(282, 'span', Pv),
						Tl(283, 'class'),
						yl(),
						Tl(284, '='),
						yl(),
						vl(285, 'span', Ev),
						Tl(286, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(287, ' '),
						vl(288, 'span', Sv),
						vl(289, 'span', Pv),
						Tl(290, 'type'),
						yl(),
						Tl(291, '='),
						yl(),
						vl(292, 'span', Ev),
						Tl(293, '"button"'),
						yl(),
						Tl(294, '>md</button>\n</section>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var jv = ['type', 'button', 1, 'btn-xs', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Rv = ['type', 'button', 1, 'btn-sm', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Dv = ['type', 'button', 1, 'btn-md', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Nv = ['type', 'button', 1, 'btn-lg', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Uv = ['type', 'button', 1, 'btn-xl', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Lv = ['type', 'button', 1, 'btn-full', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'];
			function Hv(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Rounded'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Buttons are rounded by adding a '),
						vl(6, 'code'),
						Tl(7, '.rounded'),
						yl(),
						Tl(8, ' class.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'button', jv),
						Tl(11, 'xs'),
						yl(),
						vl(12, 'button', Rv),
						Tl(13, 'sm'),
						yl(),
						vl(14, 'button', Dv),
						Tl(15, 'md'),
						yl(),
						vl(16, 'button', Nv),
						Tl(17, 'lg'),
						yl(),
						vl(18, 'button', Uv),
						Tl(19, 'xl'),
						yl(),
						vl(20, 'button', Lv),
						Tl(21, 'full'),
						yl(),
						yl(),
						vl(22, 'figure'),
						vl(23, 'pre', ov),
						Tl(24, '<button '),
						vl(25, 'span', Sv),
						vl(26, 'span', Pv),
						Tl(27, 'class'),
						yl(),
						Tl(28, '='),
						yl(),
						vl(29, 'span', Ev),
						Tl(30, '"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(31, ' '),
						vl(32, 'span', Sv),
						vl(33, 'span', Pv),
						Tl(34, 'type'),
						yl(),
						Tl(35, '='),
						yl(),
						vl(36, 'span', Ev),
						Tl(37, '"button"'),
						yl(),
						Tl(38, '>xs</button>\n<button '),
						vl(39, 'span', Sv),
						vl(40, 'span', Pv),
						Tl(41, 'class'),
						yl(),
						Tl(42, '='),
						yl(),
						vl(43, 'span', Ev),
						Tl(44, '"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(45, ' '),
						vl(46, 'span', Sv),
						vl(47, 'span', Pv),
						Tl(48, 'type'),
						yl(),
						Tl(49, '='),
						yl(),
						vl(50, 'span', Ev),
						Tl(51, '"button"'),
						yl(),
						Tl(52, '>sm</button>\n<button '),
						vl(53, 'span', Sv),
						vl(54, 'span', Pv),
						Tl(55, 'class'),
						yl(),
						Tl(56, '='),
						yl(),
						vl(57, 'span', Ev),
						Tl(58, '"btn-md rounded bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(59, ' '),
						vl(60, 'span', Sv),
						vl(61, 'span', Pv),
						Tl(62, 'type'),
						yl(),
						Tl(63, '='),
						yl(),
						vl(64, 'span', Ev),
						Tl(65, '"button"'),
						yl(),
						Tl(66, '>md</button>\n<button '),
						vl(67, 'span', Sv),
						vl(68, 'span', Pv),
						Tl(69, 'class'),
						yl(),
						Tl(70, '='),
						yl(),
						vl(71, 'span', Ev),
						Tl(72, '"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(73, ' '),
						vl(74, 'span', Sv),
						vl(75, 'span', Pv),
						Tl(76, 'type'),
						yl(),
						Tl(77, '='),
						yl(),
						vl(78, 'span', Ev),
						Tl(79, '"button"'),
						yl(),
						Tl(80, '>lg</button>\n<button '),
						vl(81, 'span', Sv),
						vl(82, 'span', Pv),
						Tl(83, 'class'),
						yl(),
						Tl(84, '='),
						yl(),
						vl(85, 'span', Ev),
						Tl(86, '"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(87, ' '),
						vl(88, 'span', Sv),
						vl(89, 'span', Pv),
						Tl(90, 'type'),
						yl(),
						Tl(91, '='),
						yl(),
						vl(92, 'span', Ev),
						Tl(93, '"button"'),
						yl(),
						Tl(94, '>xl</button>\n<button '),
						vl(95, 'span', Sv),
						vl(96, 'span', Pv),
						Tl(97, 'class'),
						yl(),
						Tl(98, '='),
						yl(),
						vl(99, 'span', Ev),
						Tl(100, '"btn-full rounded bg-dk-blue text-white bg-hover-blue"'),
						yl(),
						Tl(101, ' '),
						vl(102, 'span', Sv),
						vl(103, 'span', Pv),
						Tl(104, 'type'),
						yl(),
						Tl(105, '='),
						yl(),
						vl(106, 'span', Ev),
						Tl(107, '"button"'),
						yl(),
						Tl(108, '>full</button>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var zv = ['type', 'button', 'disabled', '', 1, 'btn-md'];
			function Vv(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'State'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Buttons are disabled by adding a '),
						vl(6, 'code'),
						Tl(7, 'disabled'),
						yl(),
						Tl(8, ' attribute.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'button', zv),
						Tl(11, 'disabled'),
						yl(),
						yl(),
						vl(12, 'figure'),
						vl(13, 'pre', ov),
						Tl(14, '<button '),
						vl(15, 'span', Sv),
						vl(16, 'span', Pv),
						Tl(17, 'class'),
						yl(),
						Tl(18, '='),
						yl(),
						vl(19, 'span', Ev),
						Tl(20, '"btn-md"'),
						yl(),
						Tl(21, ' '),
						vl(22, 'span', Sv),
						vl(23, 'span', Pv),
						Tl(24, 'type'),
						yl(),
						Tl(25, '='),
						yl(),
						vl(26, 'span', Ev),
						Tl(27, '"button"'),
						yl(),
						Tl(28, ' disabled>disabled</button>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function Fv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function Bv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function qv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Accordion'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Gv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Expand'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Zv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function Wv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Background'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Qv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Border'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Yv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Hover'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Jv(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Text'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			var Kv = [1, 'row'],
				Xv = [1, 'row-full'],
				$v = [1, 'col'],
				ty = [1, 'col-full'];
			function ey(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'p'),
						Tl(3, 'In order for flexbox to work, a parent container must have a '),
						vl(4, 'code'),
						Tl(5, '.row[-full]'),
						yl(),
						Tl(6, ' or '),
						vl(7, 'code'),
						Tl(8, '.col[-full]'),
						yl(),
						Tl(9, ' class.'),
						yl(),
						yl(),
						vl(10, 'section', $b),
						vl(11, 'ul', Kv),
						vl(12, 'li'),
						Tl(13, 'row'),
						yl(),
						vl(14, 'li'),
						Tl(15, 'row'),
						yl(),
						yl(),
						vl(16, 'ul', Xv),
						vl(17, 'li'),
						Tl(18, 'full row'),
						yl(),
						vl(19, 'li'),
						Tl(20, 'full row'),
						yl(),
						yl(),
						vl(21, 'ul', $v),
						vl(22, 'li'),
						Tl(23, 'column'),
						yl(),
						vl(24, 'li'),
						Tl(25, 'column'),
						yl(),
						yl(),
						vl(26, 'ul', ty),
						vl(27, 'li'),
						Tl(28, 'full column'),
						yl(),
						vl(29, 'li'),
						Tl(30, 'full column'),
						yl(),
						yl(),
						yl(),
						vl(31, 'figure'),
						vl(32, 'pre', ov),
						vl(33, 'span', iv),
						Tl(34, '<'),
						vl(35, 'span', av),
						Tl(36, 'ul'),
						yl(),
						Tl(37, ' '),
						vl(38, 'span', sv),
						Tl(39, 'class'),
						yl(),
						Tl(40, '='),
						vl(41, 'span', lv),
						Tl(42, '"row"'),
						yl(),
						Tl(43, '>'),
						yl(),
						Tl(44, '\n    '),
						vl(45, 'span', iv),
						Tl(46, '<'),
						vl(47, 'span', av),
						Tl(48, 'li'),
						yl(),
						Tl(49, '>'),
						yl(),
						Tl(50, 'row'),
						vl(51, 'span', iv),
						Tl(52, '</'),
						vl(53, 'span', av),
						Tl(54, 'li'),
						yl(),
						Tl(55, '>'),
						yl(),
						Tl(56, '\n    '),
						vl(57, 'span', iv),
						Tl(58, '<'),
						vl(59, 'span', av),
						Tl(60, 'li'),
						yl(),
						Tl(61, '>'),
						yl(),
						Tl(62, 'row'),
						vl(63, 'span', iv),
						Tl(64, '</'),
						vl(65, 'span', av),
						Tl(66, 'li'),
						yl(),
						Tl(67, '>'),
						yl(),
						Tl(68, '\n'),
						vl(69, 'span', iv),
						Tl(70, '</'),
						vl(71, 'span', av),
						Tl(72, 'ul'),
						yl(),
						Tl(73, '>'),
						yl(),
						Tl(74, '\n'),
						vl(75, 'span', iv),
						Tl(76, '<'),
						vl(77, 'span', av),
						Tl(78, 'ul'),
						yl(),
						Tl(79, ' '),
						vl(80, 'span', sv),
						Tl(81, 'class'),
						yl(),
						Tl(82, '='),
						vl(83, 'span', lv),
						Tl(84, '"row-full"'),
						yl(),
						Tl(85, '>'),
						yl(),
						Tl(86, '\n    '),
						vl(87, 'span', iv),
						Tl(88, '<'),
						vl(89, 'span', av),
						Tl(90, 'li'),
						yl(),
						Tl(91, '>'),
						yl(),
						Tl(92, 'full row'),
						vl(93, 'span', iv),
						Tl(94, '</'),
						vl(95, 'span', av),
						Tl(96, 'li'),
						yl(),
						Tl(97, '>'),
						yl(),
						Tl(98, '\n    '),
						vl(99, 'span', iv),
						Tl(100, '<'),
						vl(101, 'span', av),
						Tl(102, 'li'),
						yl(),
						Tl(103, '>'),
						yl(),
						Tl(104, 'full row'),
						vl(105, 'span', iv),
						Tl(106, '</'),
						vl(107, 'span', av),
						Tl(108, 'li'),
						yl(),
						Tl(109, '>'),
						yl(),
						Tl(110, '\n'),
						vl(111, 'span', iv),
						Tl(112, '</'),
						vl(113, 'span', av),
						Tl(114, 'ul'),
						yl(),
						Tl(115, '>'),
						yl(),
						Tl(116, '\n'),
						vl(117, 'span', iv),
						Tl(118, '<'),
						vl(119, 'span', av),
						Tl(120, 'ul'),
						yl(),
						Tl(121, ' '),
						vl(122, 'span', sv),
						Tl(123, 'class'),
						yl(),
						Tl(124, '='),
						vl(125, 'span', lv),
						Tl(126, '"col"'),
						yl(),
						Tl(127, '>'),
						yl(),
						Tl(128, '\n    '),
						vl(129, 'span', iv),
						Tl(130, '<'),
						vl(131, 'span', av),
						Tl(132, 'li'),
						yl(),
						Tl(133, '>'),
						yl(),
						Tl(134, 'column'),
						vl(135, 'span', iv),
						Tl(136, '</'),
						vl(137, 'span', av),
						Tl(138, 'li'),
						yl(),
						Tl(139, '>'),
						yl(),
						Tl(140, '\n    '),
						vl(141, 'span', iv),
						Tl(142, '<'),
						vl(143, 'span', av),
						Tl(144, 'li'),
						yl(),
						Tl(145, '>'),
						yl(),
						Tl(146, 'column'),
						vl(147, 'span', iv),
						Tl(148, '</'),
						vl(149, 'span', av),
						Tl(150, 'li'),
						yl(),
						Tl(151, '>'),
						yl(),
						Tl(152, '\n'),
						vl(153, 'span', iv),
						Tl(154, '</'),
						vl(155, 'span', av),
						Tl(156, 'ul'),
						yl(),
						Tl(157, '>'),
						yl(),
						Tl(158, '\n'),
						vl(159, 'span', iv),
						Tl(160, '<'),
						vl(161, 'span', av),
						Tl(162, 'ul'),
						yl(),
						Tl(163, ' '),
						vl(164, 'span', sv),
						Tl(165, 'class'),
						yl(),
						Tl(166, '='),
						vl(167, 'span', lv),
						Tl(168, '"col-full"'),
						yl(),
						Tl(169, '>'),
						yl(),
						Tl(170, '\n    '),
						vl(171, 'span', iv),
						Tl(172, '<'),
						vl(173, 'span', av),
						Tl(174, 'li'),
						yl(),
						Tl(175, '>'),
						yl(),
						Tl(176, 'full column'),
						vl(177, 'span', iv),
						Tl(178, '</'),
						vl(179, 'span', av),
						Tl(180, 'li'),
						yl(),
						Tl(181, '>'),
						yl(),
						Tl(182, '\n    '),
						vl(183, 'span', iv),
						Tl(184, '<'),
						vl(185, 'span', av),
						Tl(186, 'li'),
						yl(),
						Tl(187, '>'),
						yl(),
						Tl(188, 'full column'),
						vl(189, 'span', iv),
						Tl(190, '</'),
						vl(191, 'span', av),
						Tl(192, 'li'),
						yl(),
						Tl(193, '>'),
						yl(),
						Tl(194, '\n'),
						vl(195, 'span', iv),
						Tl(196, '</'),
						vl(197, 'span', av),
						Tl(198, 'ul'),
						yl(),
						Tl(199, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(10), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var ny = [1, 'col', 'align-l'],
				ry = [1, 'col', 'align-c'],
				oy = [1, 'col', 'align-r'],
				iy = [1, 'col', 'align-t'],
				ay = [1, 'col', 'align-m'],
				sy = [1, 'col', 'align-b'],
				ly = [1, 'col', 'align-cm'],
				uy = [1, 'col', 'align-sa'],
				cy = [1, 'col', 'align-sb'],
				py = [1, 'col', 'align-st'];
			function fy(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Container Column'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use an '),
						vl(6, 'code'),
						Tl(7, '.align-[l || c || r || t || m || b || cm || sa || sb || st]'),
						yl(),
						Tl(8, ' class to align ALL items in a '),
						vl(9, 'code'),
						Tl(10, '.col'),
						yl(),
						Tl(11, ' flex container.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'ul', ny),
						vl(14, 'li'),
						Tl(15, 'left (default)'),
						yl(),
						vl(16, 'li'),
						Tl(17, 'left (default)'),
						yl(),
						yl(),
						vl(18, 'ul', ry),
						vl(19, 'li'),
						Tl(20, 'center'),
						yl(),
						vl(21, 'li'),
						Tl(22, 'center'),
						yl(),
						yl(),
						vl(23, 'ul', oy),
						vl(24, 'li'),
						Tl(25, 'right'),
						yl(),
						vl(26, 'li'),
						Tl(27, 'right'),
						yl(),
						yl(),
						vl(28, 'ul', iy),
						vl(29, 'li'),
						Tl(30, 'top (default)'),
						yl(),
						vl(31, 'li'),
						Tl(32, 'top (default)'),
						yl(),
						yl(),
						vl(33, 'ul', ay),
						vl(34, 'li'),
						Tl(35, 'middle'),
						yl(),
						vl(36, 'li'),
						Tl(37, 'middle'),
						yl(),
						yl(),
						vl(38, 'ul', sy),
						vl(39, 'li'),
						Tl(40, 'bottom'),
						yl(),
						vl(41, 'li'),
						Tl(42, 'bottom'),
						yl(),
						yl(),
						vl(43, 'ul', ly),
						vl(44, 'li'),
						Tl(45, 'center middle'),
						yl(),
						vl(46, 'li'),
						Tl(47, 'center middle'),
						yl(),
						yl(),
						vl(48, 'ul', uy),
						vl(49, 'li'),
						Tl(50, 'space around'),
						yl(),
						vl(51, 'li'),
						Tl(52, 'space around'),
						yl(),
						yl(),
						vl(53, 'ul', cy),
						vl(54, 'li'),
						Tl(55, 'space between'),
						yl(),
						vl(56, 'li'),
						Tl(57, 'space between'),
						yl(),
						yl(),
						vl(58, 'ul', py),
						vl(59, 'li'),
						Tl(60, 'stretch'),
						yl(),
						vl(61, 'li'),
						Tl(62, 'stretch'),
						yl(),
						yl(),
						yl(),
						vl(63, 'figure'),
						vl(64, 'pre', ov),
						vl(65, 'span', iv),
						Tl(66, '<'),
						vl(67, 'span', av),
						Tl(68, 'ul'),
						yl(),
						Tl(69, ' '),
						vl(70, 'span', sv),
						Tl(71, 'class'),
						yl(),
						Tl(72, '='),
						vl(73, 'span', lv),
						Tl(74, '"col align-l"'),
						yl(),
						Tl(75, '>'),
						yl(),
						Tl(76, '\n    '),
						vl(77, 'span', iv),
						Tl(78, '<'),
						vl(79, 'span', av),
						Tl(80, 'li'),
						yl(),
						Tl(81, '>'),
						yl(),
						Tl(82, 'left (default)'),
						vl(83, 'span', iv),
						Tl(84, '</'),
						vl(85, 'span', av),
						Tl(86, 'li'),
						yl(),
						Tl(87, '>'),
						yl(),
						Tl(88, '\n    '),
						vl(89, 'span', iv),
						Tl(90, '<'),
						vl(91, 'span', av),
						Tl(92, 'li'),
						yl(),
						Tl(93, '>'),
						yl(),
						Tl(94, 'left (default)'),
						vl(95, 'span', iv),
						Tl(96, '</'),
						vl(97, 'span', av),
						Tl(98, 'li'),
						yl(),
						Tl(99, '>'),
						yl(),
						Tl(100, '\n'),
						vl(101, 'span', iv),
						Tl(102, '</'),
						vl(103, 'span', av),
						Tl(104, 'ul'),
						yl(),
						Tl(105, '>'),
						yl(),
						Tl(106, '\n'),
						vl(107, 'span', iv),
						Tl(108, '<'),
						vl(109, 'span', av),
						Tl(110, 'ul'),
						yl(),
						Tl(111, ' '),
						vl(112, 'span', sv),
						Tl(113, 'class'),
						yl(),
						Tl(114, '='),
						vl(115, 'span', lv),
						Tl(116, '"col align-c"'),
						yl(),
						Tl(117, '>'),
						yl(),
						Tl(118, '\n    '),
						vl(119, 'span', iv),
						Tl(120, '<'),
						vl(121, 'span', av),
						Tl(122, 'li'),
						yl(),
						Tl(123, '>'),
						yl(),
						Tl(124, 'center'),
						vl(125, 'span', iv),
						Tl(126, '</'),
						vl(127, 'span', av),
						Tl(128, 'li'),
						yl(),
						Tl(129, '>'),
						yl(),
						Tl(130, '\n    '),
						vl(131, 'span', iv),
						Tl(132, '<'),
						vl(133, 'span', av),
						Tl(134, 'li'),
						yl(),
						Tl(135, '>'),
						yl(),
						Tl(136, 'center'),
						vl(137, 'span', iv),
						Tl(138, '</'),
						vl(139, 'span', av),
						Tl(140, 'li'),
						yl(),
						Tl(141, '>'),
						yl(),
						Tl(142, '\n'),
						vl(143, 'span', iv),
						Tl(144, '</'),
						vl(145, 'span', av),
						Tl(146, 'ul'),
						yl(),
						Tl(147, '>'),
						yl(),
						Tl(148, '\n'),
						vl(149, 'span', iv),
						Tl(150, '<'),
						vl(151, 'span', av),
						Tl(152, 'ul'),
						yl(),
						Tl(153, ' '),
						vl(154, 'span', sv),
						Tl(155, 'class'),
						yl(),
						Tl(156, '='),
						vl(157, 'span', lv),
						Tl(158, '"col align-r"'),
						yl(),
						Tl(159, '>'),
						yl(),
						Tl(160, '\n    '),
						vl(161, 'span', iv),
						Tl(162, '<'),
						vl(163, 'span', av),
						Tl(164, 'li'),
						yl(),
						Tl(165, '>'),
						yl(),
						Tl(166, 'right'),
						vl(167, 'span', iv),
						Tl(168, '</'),
						vl(169, 'span', av),
						Tl(170, 'li'),
						yl(),
						Tl(171, '>'),
						yl(),
						Tl(172, '\n    '),
						vl(173, 'span', iv),
						Tl(174, '<'),
						vl(175, 'span', av),
						Tl(176, 'li'),
						yl(),
						Tl(177, '>'),
						yl(),
						Tl(178, 'right'),
						vl(179, 'span', iv),
						Tl(180, '</'),
						vl(181, 'span', av),
						Tl(182, 'li'),
						yl(),
						Tl(183, '>'),
						yl(),
						Tl(184, '\n'),
						vl(185, 'span', iv),
						Tl(186, '</'),
						vl(187, 'span', av),
						Tl(188, 'ul'),
						yl(),
						Tl(189, '>'),
						yl(),
						Tl(190, '\n'),
						vl(191, 'span', iv),
						Tl(192, '<'),
						vl(193, 'span', av),
						Tl(194, 'ul'),
						yl(),
						Tl(195, ' '),
						vl(196, 'span', sv),
						Tl(197, 'class'),
						yl(),
						Tl(198, '='),
						vl(199, 'span', lv),
						Tl(200, '"col align-t"'),
						yl(),
						Tl(201, '>'),
						yl(),
						Tl(202, '\n    '),
						vl(203, 'span', iv),
						Tl(204, '<'),
						vl(205, 'span', av),
						Tl(206, 'li'),
						yl(),
						Tl(207, '>'),
						yl(),
						Tl(208, 'top (default)'),
						vl(209, 'span', iv),
						Tl(210, '</'),
						vl(211, 'span', av),
						Tl(212, 'li'),
						yl(),
						Tl(213, '>'),
						yl(),
						Tl(214, '\n    '),
						vl(215, 'span', iv),
						Tl(216, '<'),
						vl(217, 'span', av),
						Tl(218, 'li'),
						yl(),
						Tl(219, '>'),
						yl(),
						Tl(220, 'top (default)'),
						vl(221, 'span', iv),
						Tl(222, '</'),
						vl(223, 'span', av),
						Tl(224, 'li'),
						yl(),
						Tl(225, '>'),
						yl(),
						Tl(226, '\n'),
						vl(227, 'span', iv),
						Tl(228, '</'),
						vl(229, 'span', av),
						Tl(230, 'ul'),
						yl(),
						Tl(231, '>'),
						yl(),
						Tl(232, '\n'),
						vl(233, 'span', iv),
						Tl(234, '<'),
						vl(235, 'span', av),
						Tl(236, 'ul'),
						yl(),
						Tl(237, ' '),
						vl(238, 'span', sv),
						Tl(239, 'class'),
						yl(),
						Tl(240, '='),
						vl(241, 'span', lv),
						Tl(242, '"col align-m"'),
						yl(),
						Tl(243, '>'),
						yl(),
						Tl(244, '\n    '),
						vl(245, 'span', iv),
						Tl(246, '<'),
						vl(247, 'span', av),
						Tl(248, 'li'),
						yl(),
						Tl(249, '>'),
						yl(),
						Tl(250, 'middle'),
						vl(251, 'span', iv),
						Tl(252, '</'),
						vl(253, 'span', av),
						Tl(254, 'li'),
						yl(),
						Tl(255, '>'),
						yl(),
						Tl(256, '\n    '),
						vl(257, 'span', iv),
						Tl(258, '<'),
						vl(259, 'span', av),
						Tl(260, 'li'),
						yl(),
						Tl(261, '>'),
						yl(),
						Tl(262, 'middle'),
						vl(263, 'span', iv),
						Tl(264, '</'),
						vl(265, 'span', av),
						Tl(266, 'li'),
						yl(),
						Tl(267, '>'),
						yl(),
						Tl(268, '\n'),
						vl(269, 'span', iv),
						Tl(270, '</'),
						vl(271, 'span', av),
						Tl(272, 'ul'),
						yl(),
						Tl(273, '>'),
						yl(),
						Tl(274, '\n'),
						vl(275, 'span', iv),
						Tl(276, '<'),
						vl(277, 'span', av),
						Tl(278, 'ul'),
						yl(),
						Tl(279, ' '),
						vl(280, 'span', sv),
						Tl(281, 'class'),
						yl(),
						Tl(282, '='),
						vl(283, 'span', lv),
						Tl(284, '"col align-b"'),
						yl(),
						Tl(285, '>'),
						yl(),
						Tl(286, '\n    '),
						vl(287, 'span', iv),
						Tl(288, '<'),
						vl(289, 'span', av),
						Tl(290, 'li'),
						yl(),
						Tl(291, '>'),
						yl(),
						Tl(292, 'bottom'),
						vl(293, 'span', iv),
						Tl(294, '</'),
						vl(295, 'span', av),
						Tl(296, 'li'),
						yl(),
						Tl(297, '>'),
						yl(),
						Tl(298, '\n    '),
						vl(299, 'span', iv),
						Tl(300, '<'),
						vl(301, 'span', av),
						Tl(302, 'li'),
						yl(),
						Tl(303, '>'),
						yl(),
						Tl(304, 'bottom'),
						vl(305, 'span', iv),
						Tl(306, '</'),
						vl(307, 'span', av),
						Tl(308, 'li'),
						yl(),
						Tl(309, '>'),
						yl(),
						Tl(310, '\n'),
						vl(311, 'span', iv),
						Tl(312, '</'),
						vl(313, 'span', av),
						Tl(314, 'ul'),
						yl(),
						Tl(315, '>'),
						yl(),
						Tl(316, '\n'),
						vl(317, 'span', iv),
						Tl(318, '<'),
						vl(319, 'span', av),
						Tl(320, 'ul'),
						yl(),
						Tl(321, ' '),
						vl(322, 'span', sv),
						Tl(323, 'class'),
						yl(),
						Tl(324, '='),
						vl(325, 'span', lv),
						Tl(326, '"col align-cm"'),
						yl(),
						Tl(327, '>'),
						yl(),
						Tl(328, '\n    '),
						vl(329, 'span', iv),
						Tl(330, '<'),
						vl(331, 'span', av),
						Tl(332, 'li'),
						yl(),
						Tl(333, '>'),
						yl(),
						Tl(334, 'center middle'),
						vl(335, 'span', iv),
						Tl(336, '</'),
						vl(337, 'span', av),
						Tl(338, 'li'),
						yl(),
						Tl(339, '>'),
						yl(),
						Tl(340, '\n    '),
						vl(341, 'span', iv),
						Tl(342, '<'),
						vl(343, 'span', av),
						Tl(344, 'li'),
						yl(),
						Tl(345, '>'),
						yl(),
						Tl(346, 'center middle'),
						vl(347, 'span', iv),
						Tl(348, '</'),
						vl(349, 'span', av),
						Tl(350, 'li'),
						yl(),
						Tl(351, '>'),
						yl(),
						Tl(352, '\n'),
						vl(353, 'span', iv),
						Tl(354, '</'),
						vl(355, 'span', av),
						Tl(356, 'ul'),
						yl(),
						Tl(357, '>'),
						yl(),
						Tl(358, '\n'),
						vl(359, 'span', iv),
						Tl(360, '<'),
						vl(361, 'span', av),
						Tl(362, 'ul'),
						yl(),
						Tl(363, ' '),
						vl(364, 'span', sv),
						Tl(365, 'class'),
						yl(),
						Tl(366, '='),
						vl(367, 'span', lv),
						Tl(368, '"col align-sa"'),
						yl(),
						Tl(369, '>'),
						yl(),
						Tl(370, '\n    '),
						vl(371, 'span', iv),
						Tl(372, '<'),
						vl(373, 'span', av),
						Tl(374, 'li'),
						yl(),
						Tl(375, '>'),
						yl(),
						Tl(376, 'space around'),
						vl(377, 'span', iv),
						Tl(378, '</'),
						vl(379, 'span', av),
						Tl(380, 'li'),
						yl(),
						Tl(381, '>'),
						yl(),
						Tl(382, '\n    '),
						vl(383, 'span', iv),
						Tl(384, '<'),
						vl(385, 'span', av),
						Tl(386, 'li'),
						yl(),
						Tl(387, '>'),
						yl(),
						Tl(388, 'space around'),
						vl(389, 'span', iv),
						Tl(390, '</'),
						vl(391, 'span', av),
						Tl(392, 'li'),
						yl(),
						Tl(393, '>'),
						yl(),
						Tl(394, '\n'),
						vl(395, 'span', iv),
						Tl(396, '</'),
						vl(397, 'span', av),
						Tl(398, 'ul'),
						yl(),
						Tl(399, '>'),
						yl(),
						Tl(400, '\n'),
						vl(401, 'span', iv),
						Tl(402, '<'),
						vl(403, 'span', av),
						Tl(404, 'ul'),
						yl(),
						Tl(405, ' '),
						vl(406, 'span', sv),
						Tl(407, 'class'),
						yl(),
						Tl(408, '='),
						vl(409, 'span', lv),
						Tl(410, '"col align-sb"'),
						yl(),
						Tl(411, '>'),
						yl(),
						Tl(412, '\n    '),
						vl(413, 'span', iv),
						Tl(414, '<'),
						vl(415, 'span', av),
						Tl(416, 'li'),
						yl(),
						Tl(417, '>'),
						yl(),
						Tl(418, 'space between'),
						vl(419, 'span', iv),
						Tl(420, '</'),
						vl(421, 'span', av),
						Tl(422, 'li'),
						yl(),
						Tl(423, '>'),
						yl(),
						Tl(424, '\n    '),
						vl(425, 'span', iv),
						Tl(426, '<'),
						vl(427, 'span', av),
						Tl(428, 'li'),
						yl(),
						Tl(429, '>'),
						yl(),
						Tl(430, 'space between'),
						vl(431, 'span', iv),
						Tl(432, '</'),
						vl(433, 'span', av),
						Tl(434, 'li'),
						yl(),
						Tl(435, '>'),
						yl(),
						Tl(436, '\n'),
						vl(437, 'span', iv),
						Tl(438, '</'),
						vl(439, 'span', av),
						Tl(440, 'ul'),
						yl(),
						Tl(441, '>'),
						yl(),
						Tl(442, '\n'),
						vl(443, 'span', iv),
						Tl(444, '<'),
						vl(445, 'span', av),
						Tl(446, 'ul'),
						yl(),
						Tl(447, ' '),
						vl(448, 'span', sv),
						Tl(449, 'class'),
						yl(),
						Tl(450, '='),
						vl(451, 'span', lv),
						Tl(452, '"col align-st"'),
						yl(),
						Tl(453, '>'),
						yl(),
						Tl(454, '\n    '),
						vl(455, 'span', iv),
						Tl(456, '<'),
						vl(457, 'span', av),
						Tl(458, 'li'),
						yl(),
						Tl(459, '>'),
						yl(),
						Tl(460, 'stretch'),
						vl(461, 'span', iv),
						Tl(462, '</'),
						vl(463, 'span', av),
						Tl(464, 'li'),
						yl(),
						Tl(465, '>'),
						yl(),
						Tl(466, '\n    '),
						vl(467, 'span', iv),
						Tl(468, '<'),
						vl(469, 'span', av),
						Tl(470, 'li'),
						yl(),
						Tl(471, '>'),
						yl(),
						Tl(472, 'stretch'),
						vl(473, 'span', iv),
						Tl(474, '</'),
						vl(475, 'span', av),
						Tl(476, 'li'),
						yl(),
						Tl(477, '>'),
						yl(),
						Tl(478, '\n'),
						vl(479, 'span', iv),
						Tl(480, '</'),
						vl(481, 'span', av),
						Tl(482, 'ul'),
						yl(),
						Tl(483, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var dy = [1, 'row', 'align-l'],
				hy = [1, 'row', 'align-c'],
				gy = [1, 'row', 'align-r'],
				my = [1, 'row', 'align-t'],
				by = [1, 'row', 'align-m'],
				vy = [1, 'row', 'align-b'],
				yy = [1, 'row', 'align-cm'],
				wy = [1, 'row', 'align-sa'],
				_y = [1, 'row', 'align-sb'],
				xy = [1, 'row', 'align-st'];
			function Cy(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Container Row'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use an '),
						vl(6, 'code'),
						Tl(7, '.align-[l || c || r || t || m || b || cm || sa || sb || st]'),
						yl(),
						Tl(8, ' class to align ALL items in a '),
						vl(9, 'code'),
						Tl(10, '.row'),
						yl(),
						Tl(11, ' flex container.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'ul', dy),
						vl(14, 'li'),
						Tl(15, 'left (default)'),
						yl(),
						vl(16, 'li'),
						Tl(17, 'left (default)'),
						yl(),
						yl(),
						vl(18, 'ul', hy),
						vl(19, 'li'),
						Tl(20, 'center'),
						yl(),
						vl(21, 'li'),
						Tl(22, 'center'),
						yl(),
						yl(),
						vl(23, 'ul', gy),
						vl(24, 'li'),
						Tl(25, 'right'),
						yl(),
						vl(26, 'li'),
						Tl(27, 'right'),
						yl(),
						yl(),
						vl(28, 'ul', my),
						vl(29, 'li'),
						Tl(30, 'top (default)'),
						yl(),
						vl(31, 'li'),
						Tl(32, 'top (default)'),
						yl(),
						yl(),
						vl(33, 'ul', by),
						vl(34, 'li'),
						Tl(35, 'middle'),
						yl(),
						vl(36, 'li'),
						Tl(37, 'middle'),
						yl(),
						yl(),
						vl(38, 'ul', vy),
						vl(39, 'li'),
						Tl(40, 'bottom'),
						yl(),
						vl(41, 'li'),
						Tl(42, 'bottom'),
						yl(),
						yl(),
						vl(43, 'ul', yy),
						vl(44, 'li'),
						Tl(45, 'center middle'),
						yl(),
						vl(46, 'li'),
						Tl(47, 'center middle'),
						yl(),
						yl(),
						vl(48, 'ul', wy),
						vl(49, 'li'),
						Tl(50, 'space around'),
						yl(),
						vl(51, 'li'),
						Tl(52, 'space around'),
						yl(),
						yl(),
						vl(53, 'ul', _y),
						vl(54, 'li'),
						Tl(55, 'space between'),
						yl(),
						vl(56, 'li'),
						Tl(57, 'space between'),
						yl(),
						yl(),
						vl(58, 'ul', xy),
						vl(59, 'li'),
						Tl(60, 'stretch'),
						yl(),
						vl(61, 'li'),
						Tl(62, 'stretch'),
						yl(),
						yl(),
						yl(),
						vl(63, 'figure'),
						vl(64, 'pre', ov),
						vl(65, 'span', iv),
						Tl(66, '<'),
						vl(67, 'span', av),
						Tl(68, 'ul'),
						yl(),
						Tl(69, ' '),
						vl(70, 'span', sv),
						Tl(71, 'class'),
						yl(),
						Tl(72, '='),
						vl(73, 'span', lv),
						Tl(74, '"row align-l"'),
						yl(),
						Tl(75, '>'),
						yl(),
						Tl(76, '\n    '),
						vl(77, 'span', iv),
						Tl(78, '<'),
						vl(79, 'span', av),
						Tl(80, 'li'),
						yl(),
						Tl(81, '>'),
						yl(),
						Tl(82, 'left (default)'),
						vl(83, 'span', iv),
						Tl(84, '</'),
						vl(85, 'span', av),
						Tl(86, 'li'),
						yl(),
						Tl(87, '>'),
						yl(),
						Tl(88, '\n    '),
						vl(89, 'span', iv),
						Tl(90, '<'),
						vl(91, 'span', av),
						Tl(92, 'li'),
						yl(),
						Tl(93, '>'),
						yl(),
						Tl(94, 'left (default)'),
						vl(95, 'span', iv),
						Tl(96, '</'),
						vl(97, 'span', av),
						Tl(98, 'li'),
						yl(),
						Tl(99, '>'),
						yl(),
						Tl(100, '\n'),
						vl(101, 'span', iv),
						Tl(102, '</'),
						vl(103, 'span', av),
						Tl(104, 'ul'),
						yl(),
						Tl(105, '>'),
						yl(),
						Tl(106, '\n'),
						vl(107, 'span', iv),
						Tl(108, '<'),
						vl(109, 'span', av),
						Tl(110, 'ul'),
						yl(),
						Tl(111, ' '),
						vl(112, 'span', sv),
						Tl(113, 'class'),
						yl(),
						Tl(114, '='),
						vl(115, 'span', lv),
						Tl(116, '"row align-c"'),
						yl(),
						Tl(117, '>'),
						yl(),
						Tl(118, '\n    '),
						vl(119, 'span', iv),
						Tl(120, '<'),
						vl(121, 'span', av),
						Tl(122, 'li'),
						yl(),
						Tl(123, '>'),
						yl(),
						Tl(124, 'center'),
						vl(125, 'span', iv),
						Tl(126, '</'),
						vl(127, 'span', av),
						Tl(128, 'li'),
						yl(),
						Tl(129, '>'),
						yl(),
						Tl(130, '\n    '),
						vl(131, 'span', iv),
						Tl(132, '<'),
						vl(133, 'span', av),
						Tl(134, 'li'),
						yl(),
						Tl(135, '>'),
						yl(),
						Tl(136, 'center'),
						vl(137, 'span', iv),
						Tl(138, '</'),
						vl(139, 'span', av),
						Tl(140, 'li'),
						yl(),
						Tl(141, '>'),
						yl(),
						Tl(142, '\n'),
						vl(143, 'span', iv),
						Tl(144, '</'),
						vl(145, 'span', av),
						Tl(146, 'ul'),
						yl(),
						Tl(147, '>'),
						yl(),
						Tl(148, '\n'),
						vl(149, 'span', iv),
						Tl(150, '<'),
						vl(151, 'span', av),
						Tl(152, 'ul'),
						yl(),
						Tl(153, ' '),
						vl(154, 'span', sv),
						Tl(155, 'class'),
						yl(),
						Tl(156, '='),
						vl(157, 'span', lv),
						Tl(158, '"row align-r"'),
						yl(),
						Tl(159, '>'),
						yl(),
						Tl(160, '\n    '),
						vl(161, 'span', iv),
						Tl(162, '<'),
						vl(163, 'span', av),
						Tl(164, 'li'),
						yl(),
						Tl(165, '>'),
						yl(),
						Tl(166, 'right'),
						vl(167, 'span', iv),
						Tl(168, '</'),
						vl(169, 'span', av),
						Tl(170, 'li'),
						yl(),
						Tl(171, '>'),
						yl(),
						Tl(172, '\n    '),
						vl(173, 'span', iv),
						Tl(174, '<'),
						vl(175, 'span', av),
						Tl(176, 'li'),
						yl(),
						Tl(177, '>'),
						yl(),
						Tl(178, 'right'),
						vl(179, 'span', iv),
						Tl(180, '</'),
						vl(181, 'span', av),
						Tl(182, 'li'),
						yl(),
						Tl(183, '>'),
						yl(),
						Tl(184, '\n'),
						vl(185, 'span', iv),
						Tl(186, '</'),
						vl(187, 'span', av),
						Tl(188, 'ul'),
						yl(),
						Tl(189, '>'),
						yl(),
						Tl(190, '\n'),
						vl(191, 'span', iv),
						Tl(192, '<'),
						vl(193, 'span', av),
						Tl(194, 'ul'),
						yl(),
						Tl(195, ' '),
						vl(196, 'span', sv),
						Tl(197, 'class'),
						yl(),
						Tl(198, '='),
						vl(199, 'span', lv),
						Tl(200, '"row align-t"'),
						yl(),
						Tl(201, '>'),
						yl(),
						Tl(202, '\n    '),
						vl(203, 'span', iv),
						Tl(204, '<'),
						vl(205, 'span', av),
						Tl(206, 'li'),
						yl(),
						Tl(207, '>'),
						yl(),
						Tl(208, 'top (default)'),
						vl(209, 'span', iv),
						Tl(210, '</'),
						vl(211, 'span', av),
						Tl(212, 'li'),
						yl(),
						Tl(213, '>'),
						yl(),
						Tl(214, '\n    '),
						vl(215, 'span', iv),
						Tl(216, '<'),
						vl(217, 'span', av),
						Tl(218, 'li'),
						yl(),
						Tl(219, '>'),
						yl(),
						Tl(220, 'top (default)'),
						vl(221, 'span', iv),
						Tl(222, '</'),
						vl(223, 'span', av),
						Tl(224, 'li'),
						yl(),
						Tl(225, '>'),
						yl(),
						Tl(226, '\n'),
						vl(227, 'span', iv),
						Tl(228, '</'),
						vl(229, 'span', av),
						Tl(230, 'ul'),
						yl(),
						Tl(231, '>'),
						yl(),
						Tl(232, '\n'),
						vl(233, 'span', iv),
						Tl(234, '<'),
						vl(235, 'span', av),
						Tl(236, 'ul'),
						yl(),
						Tl(237, ' '),
						vl(238, 'span', sv),
						Tl(239, 'class'),
						yl(),
						Tl(240, '='),
						vl(241, 'span', lv),
						Tl(242, '"row align-m"'),
						yl(),
						Tl(243, '>'),
						yl(),
						Tl(244, '\n    '),
						vl(245, 'span', iv),
						Tl(246, '<'),
						vl(247, 'span', av),
						Tl(248, 'li'),
						yl(),
						Tl(249, '>'),
						yl(),
						Tl(250, 'middle'),
						vl(251, 'span', iv),
						Tl(252, '</'),
						vl(253, 'span', av),
						Tl(254, 'li'),
						yl(),
						Tl(255, '>'),
						yl(),
						Tl(256, '\n    '),
						vl(257, 'span', iv),
						Tl(258, '<'),
						vl(259, 'span', av),
						Tl(260, 'li'),
						yl(),
						Tl(261, '>'),
						yl(),
						Tl(262, 'middle'),
						vl(263, 'span', iv),
						Tl(264, '</'),
						vl(265, 'span', av),
						Tl(266, 'li'),
						yl(),
						Tl(267, '>'),
						yl(),
						Tl(268, '\n'),
						vl(269, 'span', iv),
						Tl(270, '</'),
						vl(271, 'span', av),
						Tl(272, 'ul'),
						yl(),
						Tl(273, '>'),
						yl(),
						Tl(274, '\n'),
						vl(275, 'span', iv),
						Tl(276, '<'),
						vl(277, 'span', av),
						Tl(278, 'ul'),
						yl(),
						Tl(279, ' '),
						vl(280, 'span', sv),
						Tl(281, 'class'),
						yl(),
						Tl(282, '='),
						vl(283, 'span', lv),
						Tl(284, '"row align-b"'),
						yl(),
						Tl(285, '>'),
						yl(),
						Tl(286, '\n    '),
						vl(287, 'span', iv),
						Tl(288, '<'),
						vl(289, 'span', av),
						Tl(290, 'li'),
						yl(),
						Tl(291, '>'),
						yl(),
						Tl(292, 'bottom'),
						vl(293, 'span', iv),
						Tl(294, '</'),
						vl(295, 'span', av),
						Tl(296, 'li'),
						yl(),
						Tl(297, '>'),
						yl(),
						Tl(298, '\n    '),
						vl(299, 'span', iv),
						Tl(300, '<'),
						vl(301, 'span', av),
						Tl(302, 'li'),
						yl(),
						Tl(303, '>'),
						yl(),
						Tl(304, 'bottom'),
						vl(305, 'span', iv),
						Tl(306, '</'),
						vl(307, 'span', av),
						Tl(308, 'li'),
						yl(),
						Tl(309, '>'),
						yl(),
						Tl(310, '\n'),
						vl(311, 'span', iv),
						Tl(312, '</'),
						vl(313, 'span', av),
						Tl(314, 'ul'),
						yl(),
						Tl(315, '>'),
						yl(),
						Tl(316, '\n'),
						vl(317, 'span', iv),
						Tl(318, '<'),
						vl(319, 'span', av),
						Tl(320, 'ul'),
						yl(),
						Tl(321, ' '),
						vl(322, 'span', sv),
						Tl(323, 'class'),
						yl(),
						Tl(324, '='),
						vl(325, 'span', lv),
						Tl(326, '"row align-cm"'),
						yl(),
						Tl(327, '>'),
						yl(),
						Tl(328, '\n    '),
						vl(329, 'span', iv),
						Tl(330, '<'),
						vl(331, 'span', av),
						Tl(332, 'li'),
						yl(),
						Tl(333, '>'),
						yl(),
						Tl(334, 'center middle'),
						vl(335, 'span', iv),
						Tl(336, '</'),
						vl(337, 'span', av),
						Tl(338, 'li'),
						yl(),
						Tl(339, '>'),
						yl(),
						Tl(340, '\n    '),
						vl(341, 'span', iv),
						Tl(342, '<'),
						vl(343, 'span', av),
						Tl(344, 'li'),
						yl(),
						Tl(345, '>'),
						yl(),
						Tl(346, 'center middle'),
						vl(347, 'span', iv),
						Tl(348, '</'),
						vl(349, 'span', av),
						Tl(350, 'li'),
						yl(),
						Tl(351, '>'),
						yl(),
						Tl(352, '\n'),
						vl(353, 'span', iv),
						Tl(354, '</'),
						vl(355, 'span', av),
						Tl(356, 'ul'),
						yl(),
						Tl(357, '>'),
						yl(),
						Tl(358, '\n'),
						vl(359, 'span', iv),
						Tl(360, '<'),
						vl(361, 'span', av),
						Tl(362, 'ul'),
						yl(),
						Tl(363, ' '),
						vl(364, 'span', sv),
						Tl(365, 'class'),
						yl(),
						Tl(366, '='),
						vl(367, 'span', lv),
						Tl(368, '"row align-sa"'),
						yl(),
						Tl(369, '>'),
						yl(),
						Tl(370, '\n    '),
						vl(371, 'span', iv),
						Tl(372, '<'),
						vl(373, 'span', av),
						Tl(374, 'li'),
						yl(),
						Tl(375, '>'),
						yl(),
						Tl(376, 'space around'),
						vl(377, 'span', iv),
						Tl(378, '</'),
						vl(379, 'span', av),
						Tl(380, 'li'),
						yl(),
						Tl(381, '>'),
						yl(),
						Tl(382, '\n    '),
						vl(383, 'span', iv),
						Tl(384, '<'),
						vl(385, 'span', av),
						Tl(386, 'li'),
						yl(),
						Tl(387, '>'),
						yl(),
						Tl(388, 'space around'),
						vl(389, 'span', iv),
						Tl(390, '</'),
						vl(391, 'span', av),
						Tl(392, 'li'),
						yl(),
						Tl(393, '>'),
						yl(),
						Tl(394, '\n'),
						vl(395, 'span', iv),
						Tl(396, '</'),
						vl(397, 'span', av),
						Tl(398, 'ul'),
						yl(),
						Tl(399, '>'),
						yl(),
						Tl(400, '\n'),
						vl(401, 'span', iv),
						Tl(402, '<'),
						vl(403, 'span', av),
						Tl(404, 'ul'),
						yl(),
						Tl(405, ' '),
						vl(406, 'span', sv),
						Tl(407, 'class'),
						yl(),
						Tl(408, '='),
						vl(409, 'span', lv),
						Tl(410, '"row align-sb"'),
						yl(),
						Tl(411, '>'),
						yl(),
						Tl(412, '\n    '),
						vl(413, 'span', iv),
						Tl(414, '<'),
						vl(415, 'span', av),
						Tl(416, 'li'),
						yl(),
						Tl(417, '>'),
						yl(),
						Tl(418, 'space between'),
						vl(419, 'span', iv),
						Tl(420, '</'),
						vl(421, 'span', av),
						Tl(422, 'li'),
						yl(),
						Tl(423, '>'),
						yl(),
						Tl(424, '\n    '),
						vl(425, 'span', iv),
						Tl(426, '<'),
						vl(427, 'span', av),
						Tl(428, 'li'),
						yl(),
						Tl(429, '>'),
						yl(),
						Tl(430, 'space between'),
						vl(431, 'span', iv),
						Tl(432, '</'),
						vl(433, 'span', av),
						Tl(434, 'li'),
						yl(),
						Tl(435, '>'),
						yl(),
						Tl(436, '\n'),
						vl(437, 'span', iv),
						Tl(438, '</'),
						vl(439, 'span', av),
						Tl(440, 'ul'),
						yl(),
						Tl(441, '>'),
						yl(),
						Tl(442, '\n'),
						vl(443, 'span', iv),
						Tl(444, '<'),
						vl(445, 'span', av),
						Tl(446, 'ul'),
						yl(),
						Tl(447, ' '),
						vl(448, 'span', sv),
						Tl(449, 'class'),
						yl(),
						Tl(450, '='),
						vl(451, 'span', lv),
						Tl(452, '"row align-st"'),
						yl(),
						Tl(453, '>'),
						yl(),
						Tl(454, '\n    '),
						vl(455, 'span', iv),
						Tl(456, '<'),
						vl(457, 'span', av),
						Tl(458, 'li'),
						yl(),
						Tl(459, '>'),
						yl(),
						Tl(460, 'stretch'),
						vl(461, 'span', iv),
						Tl(462, '</'),
						vl(463, 'span', av),
						Tl(464, 'li'),
						yl(),
						Tl(465, '>'),
						yl(),
						Tl(466, '\n    '),
						vl(467, 'span', iv),
						Tl(468, '<'),
						vl(469, 'span', av),
						Tl(470, 'li'),
						yl(),
						Tl(471, '>'),
						yl(),
						Tl(472, 'stretch'),
						vl(473, 'span', iv),
						Tl(474, '</'),
						vl(475, 'span', av),
						Tl(476, 'li'),
						yl(),
						Tl(477, '>'),
						yl(),
						Tl(478, '\n'),
						vl(479, 'span', iv),
						Tl(480, '</'),
						vl(481, 'span', av),
						Tl(482, 'ul'),
						yl(),
						Tl(483, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var ky = [1, 'item-l'],
				Sy = [1, 'item-c'],
				Py = [1, 'item-r'],
				Ey = [1, 'item-t'],
				Oy = [1, 'item-m'],
				Iy = [1, 'item-b'],
				Ty = [1, 'item-cm'],
				My = [1, 'item-st'];
			function Ay(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Item Column'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use '),
						vl(6, 'code'),
						Tl(7, '.item-[l || c || r || t || m || b || cm || st]'),
						yl(),
						Tl(8, ' classes to align ONE child in a '),
						vl(9, 'code'),
						Tl(10, '.col'),
						yl(),
						Tl(11, ' flex container.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'ul', $v),
						vl(14, 'li'),
						Tl(15, 'default'),
						yl(),
						vl(16, 'li', ky),
						Tl(17, 'left (default)'),
						yl(),
						yl(),
						vl(18, 'ul', $v),
						vl(19, 'li'),
						Tl(20, 'default'),
						yl(),
						vl(21, 'li', Sy),
						Tl(22, 'center'),
						yl(),
						yl(),
						vl(23, 'ul', $v),
						vl(24, 'li'),
						Tl(25, 'default'),
						yl(),
						vl(26, 'li', Py),
						Tl(27, 'right'),
						yl(),
						yl(),
						vl(28, 'ul', $v),
						vl(29, 'li'),
						Tl(30, 'default'),
						yl(),
						vl(31, 'li', Ey),
						Tl(32, 'top (default)'),
						yl(),
						yl(),
						vl(33, 'ul', $v),
						vl(34, 'li'),
						Tl(35, 'default'),
						yl(),
						vl(36, 'li', Oy),
						Tl(37, 'middle'),
						yl(),
						yl(),
						vl(38, 'ul', $v),
						vl(39, 'li'),
						Tl(40, 'default'),
						yl(),
						vl(41, 'li', Iy),
						Tl(42, 'bottom'),
						yl(),
						yl(),
						vl(43, 'ul', $v),
						vl(44, 'li'),
						Tl(45, 'default'),
						yl(),
						vl(46, 'li', Ty),
						Tl(47, 'center middle'),
						yl(),
						yl(),
						vl(48, 'ul', $v),
						vl(49, 'li'),
						Tl(50, 'default'),
						yl(),
						vl(51, 'li', My),
						Tl(52, 'stretch'),
						yl(),
						yl(),
						yl(),
						vl(53, 'figure'),
						vl(54, 'pre', ov),
						vl(55, 'span', iv),
						Tl(56, '<'),
						vl(57, 'span', av),
						Tl(58, 'ul'),
						yl(),
						Tl(59, ' '),
						vl(60, 'span', sv),
						Tl(61, 'class'),
						yl(),
						Tl(62, '='),
						vl(63, 'span', lv),
						Tl(64, '"col"'),
						yl(),
						Tl(65, '>'),
						yl(),
						Tl(66, '\n    '),
						vl(67, 'span', iv),
						Tl(68, '<'),
						vl(69, 'span', av),
						Tl(70, 'li'),
						yl(),
						Tl(71, '>'),
						yl(),
						Tl(72, 'default'),
						vl(73, 'span', iv),
						Tl(74, '</'),
						vl(75, 'span', av),
						Tl(76, 'li'),
						yl(),
						Tl(77, '>'),
						yl(),
						Tl(78, '\n    '),
						vl(79, 'span', iv),
						Tl(80, '<'),
						vl(81, 'span', av),
						Tl(82, 'li'),
						yl(),
						Tl(83, ' '),
						vl(84, 'span', sv),
						Tl(85, 'class'),
						yl(),
						Tl(86, '='),
						vl(87, 'span', lv),
						Tl(88, '"item-l"'),
						yl(),
						Tl(89, '>'),
						yl(),
						Tl(90, 'left (default)'),
						vl(91, 'span', iv),
						Tl(92, '</'),
						vl(93, 'span', av),
						Tl(94, 'li'),
						yl(),
						Tl(95, '>'),
						yl(),
						Tl(96, '\n'),
						vl(97, 'span', iv),
						Tl(98, '</'),
						vl(99, 'span', av),
						Tl(100, 'ul'),
						yl(),
						Tl(101, '>'),
						yl(),
						Tl(102, '\n'),
						vl(103, 'span', iv),
						Tl(104, '<'),
						vl(105, 'span', av),
						Tl(106, 'ul'),
						yl(),
						Tl(107, ' '),
						vl(108, 'span', sv),
						Tl(109, 'class'),
						yl(),
						Tl(110, '='),
						vl(111, 'span', lv),
						Tl(112, '"col"'),
						yl(),
						Tl(113, '>'),
						yl(),
						Tl(114, '\n    '),
						vl(115, 'span', iv),
						Tl(116, '<'),
						vl(117, 'span', av),
						Tl(118, 'li'),
						yl(),
						Tl(119, '>'),
						yl(),
						Tl(120, 'default'),
						vl(121, 'span', iv),
						Tl(122, '</'),
						vl(123, 'span', av),
						Tl(124, 'li'),
						yl(),
						Tl(125, '>'),
						yl(),
						Tl(126, '\n    '),
						vl(127, 'span', iv),
						Tl(128, '<'),
						vl(129, 'span', av),
						Tl(130, 'li'),
						yl(),
						Tl(131, ' '),
						vl(132, 'span', sv),
						Tl(133, 'class'),
						yl(),
						Tl(134, '='),
						vl(135, 'span', lv),
						Tl(136, '"item-c"'),
						yl(),
						Tl(137, '>'),
						yl(),
						Tl(138, 'center'),
						vl(139, 'span', iv),
						Tl(140, '</'),
						vl(141, 'span', av),
						Tl(142, 'li'),
						yl(),
						Tl(143, '>'),
						yl(),
						Tl(144, '\n'),
						vl(145, 'span', iv),
						Tl(146, '</'),
						vl(147, 'span', av),
						Tl(148, 'ul'),
						yl(),
						Tl(149, '>'),
						yl(),
						Tl(150, '\n'),
						vl(151, 'span', iv),
						Tl(152, '<'),
						vl(153, 'span', av),
						Tl(154, 'ul'),
						yl(),
						Tl(155, ' '),
						vl(156, 'span', sv),
						Tl(157, 'class'),
						yl(),
						Tl(158, '='),
						vl(159, 'span', lv),
						Tl(160, '"col"'),
						yl(),
						Tl(161, '>'),
						yl(),
						Tl(162, '\n    '),
						vl(163, 'span', iv),
						Tl(164, '<'),
						vl(165, 'span', av),
						Tl(166, 'li'),
						yl(),
						Tl(167, '>'),
						yl(),
						Tl(168, 'default'),
						vl(169, 'span', iv),
						Tl(170, '</'),
						vl(171, 'span', av),
						Tl(172, 'li'),
						yl(),
						Tl(173, '>'),
						yl(),
						Tl(174, '\n    '),
						vl(175, 'span', iv),
						Tl(176, '<'),
						vl(177, 'span', av),
						Tl(178, 'li'),
						yl(),
						Tl(179, ' '),
						vl(180, 'span', sv),
						Tl(181, 'class'),
						yl(),
						Tl(182, '='),
						vl(183, 'span', lv),
						Tl(184, '"item-r"'),
						yl(),
						Tl(185, '>'),
						yl(),
						Tl(186, 'right'),
						vl(187, 'span', iv),
						Tl(188, '</'),
						vl(189, 'span', av),
						Tl(190, 'li'),
						yl(),
						Tl(191, '>'),
						yl(),
						Tl(192, '\n'),
						vl(193, 'span', iv),
						Tl(194, '</'),
						vl(195, 'span', av),
						Tl(196, 'ul'),
						yl(),
						Tl(197, '>'),
						yl(),
						Tl(198, '\n'),
						vl(199, 'span', iv),
						Tl(200, '<'),
						vl(201, 'span', av),
						Tl(202, 'ul'),
						yl(),
						Tl(203, ' '),
						vl(204, 'span', sv),
						Tl(205, 'class'),
						yl(),
						Tl(206, '='),
						vl(207, 'span', lv),
						Tl(208, '"col"'),
						yl(),
						Tl(209, '>'),
						yl(),
						Tl(210, '\n    '),
						vl(211, 'span', iv),
						Tl(212, '<'),
						vl(213, 'span', av),
						Tl(214, 'li'),
						yl(),
						Tl(215, '>'),
						yl(),
						Tl(216, 'default'),
						vl(217, 'span', iv),
						Tl(218, '</'),
						vl(219, 'span', av),
						Tl(220, 'li'),
						yl(),
						Tl(221, '>'),
						yl(),
						Tl(222, '\n    '),
						vl(223, 'span', iv),
						Tl(224, '<'),
						vl(225, 'span', av),
						Tl(226, 'li'),
						yl(),
						Tl(227, ' '),
						vl(228, 'span', sv),
						Tl(229, 'class'),
						yl(),
						Tl(230, '='),
						vl(231, 'span', lv),
						Tl(232, '"item-t"'),
						yl(),
						Tl(233, '>'),
						yl(),
						Tl(234, 'top (default)'),
						vl(235, 'span', iv),
						Tl(236, '</'),
						vl(237, 'span', av),
						Tl(238, 'li'),
						yl(),
						Tl(239, '>'),
						yl(),
						Tl(240, '\n'),
						vl(241, 'span', iv),
						Tl(242, '</'),
						vl(243, 'span', av),
						Tl(244, 'ul'),
						yl(),
						Tl(245, '>'),
						yl(),
						Tl(246, '\n'),
						vl(247, 'span', iv),
						Tl(248, '<'),
						vl(249, 'span', av),
						Tl(250, 'ul'),
						yl(),
						Tl(251, ' '),
						vl(252, 'span', sv),
						Tl(253, 'class'),
						yl(),
						Tl(254, '='),
						vl(255, 'span', lv),
						Tl(256, '"col"'),
						yl(),
						Tl(257, '>'),
						yl(),
						Tl(258, '\n    '),
						vl(259, 'span', iv),
						Tl(260, '<'),
						vl(261, 'span', av),
						Tl(262, 'li'),
						yl(),
						Tl(263, '>'),
						yl(),
						Tl(264, 'default'),
						vl(265, 'span', iv),
						Tl(266, '</'),
						vl(267, 'span', av),
						Tl(268, 'li'),
						yl(),
						Tl(269, '>'),
						yl(),
						Tl(270, '\n    '),
						vl(271, 'span', iv),
						Tl(272, '<'),
						vl(273, 'span', av),
						Tl(274, 'li'),
						yl(),
						Tl(275, ' '),
						vl(276, 'span', sv),
						Tl(277, 'class'),
						yl(),
						Tl(278, '='),
						vl(279, 'span', lv),
						Tl(280, '"item-m"'),
						yl(),
						Tl(281, '>'),
						yl(),
						Tl(282, 'middle'),
						vl(283, 'span', iv),
						Tl(284, '</'),
						vl(285, 'span', av),
						Tl(286, 'li'),
						yl(),
						Tl(287, '>'),
						yl(),
						Tl(288, '\n'),
						vl(289, 'span', iv),
						Tl(290, '</'),
						vl(291, 'span', av),
						Tl(292, 'ul'),
						yl(),
						Tl(293, '>'),
						yl(),
						Tl(294, '\n'),
						vl(295, 'span', iv),
						Tl(296, '<'),
						vl(297, 'span', av),
						Tl(298, 'ul'),
						yl(),
						Tl(299, ' '),
						vl(300, 'span', sv),
						Tl(301, 'class'),
						yl(),
						Tl(302, '='),
						vl(303, 'span', lv),
						Tl(304, '"col"'),
						yl(),
						Tl(305, '>'),
						yl(),
						Tl(306, '\n    '),
						vl(307, 'span', iv),
						Tl(308, '<'),
						vl(309, 'span', av),
						Tl(310, 'li'),
						yl(),
						Tl(311, '>'),
						yl(),
						Tl(312, 'default'),
						vl(313, 'span', iv),
						Tl(314, '</'),
						vl(315, 'span', av),
						Tl(316, 'li'),
						yl(),
						Tl(317, '>'),
						yl(),
						Tl(318, '\n    '),
						vl(319, 'span', iv),
						Tl(320, '<'),
						vl(321, 'span', av),
						Tl(322, 'li'),
						yl(),
						Tl(323, ' '),
						vl(324, 'span', sv),
						Tl(325, 'class'),
						yl(),
						Tl(326, '='),
						vl(327, 'span', lv),
						Tl(328, '"item-b"'),
						yl(),
						Tl(329, '>'),
						yl(),
						Tl(330, 'bottom'),
						vl(331, 'span', iv),
						Tl(332, '</'),
						vl(333, 'span', av),
						Tl(334, 'li'),
						yl(),
						Tl(335, '>'),
						yl(),
						Tl(336, '\n'),
						vl(337, 'span', iv),
						Tl(338, '</'),
						vl(339, 'span', av),
						Tl(340, 'ul'),
						yl(),
						Tl(341, '>'),
						yl(),
						Tl(342, '\n'),
						vl(343, 'span', iv),
						Tl(344, '<'),
						vl(345, 'span', av),
						Tl(346, 'ul'),
						yl(),
						Tl(347, ' '),
						vl(348, 'span', sv),
						Tl(349, 'class'),
						yl(),
						Tl(350, '='),
						vl(351, 'span', lv),
						Tl(352, '"col"'),
						yl(),
						Tl(353, '>'),
						yl(),
						Tl(354, '\n    '),
						vl(355, 'span', iv),
						Tl(356, '<'),
						vl(357, 'span', av),
						Tl(358, 'li'),
						yl(),
						Tl(359, '>'),
						yl(),
						Tl(360, 'default'),
						vl(361, 'span', iv),
						Tl(362, '</'),
						vl(363, 'span', av),
						Tl(364, 'li'),
						yl(),
						Tl(365, '>'),
						yl(),
						Tl(366, '\n    '),
						vl(367, 'span', iv),
						Tl(368, '<'),
						vl(369, 'span', av),
						Tl(370, 'li'),
						yl(),
						Tl(371, ' '),
						vl(372, 'span', sv),
						Tl(373, 'class'),
						yl(),
						Tl(374, '='),
						vl(375, 'span', lv),
						Tl(376, '"item-cm"'),
						yl(),
						Tl(377, '>'),
						yl(),
						Tl(378, 'center middle'),
						vl(379, 'span', iv),
						Tl(380, '</'),
						vl(381, 'span', av),
						Tl(382, 'li'),
						yl(),
						Tl(383, '>'),
						yl(),
						Tl(384, '\n'),
						vl(385, 'span', iv),
						Tl(386, '</'),
						vl(387, 'span', av),
						Tl(388, 'ul'),
						yl(),
						Tl(389, '>'),
						yl(),
						Tl(390, '\n'),
						vl(391, 'span', iv),
						Tl(392, '<'),
						vl(393, 'span', av),
						Tl(394, 'ul'),
						yl(),
						Tl(395, ' '),
						vl(396, 'span', sv),
						Tl(397, 'class'),
						yl(),
						Tl(398, '='),
						vl(399, 'span', lv),
						Tl(400, '"col"'),
						yl(),
						Tl(401, '>'),
						yl(),
						Tl(402, '\n    '),
						vl(403, 'span', iv),
						Tl(404, '<'),
						vl(405, 'span', av),
						Tl(406, 'li'),
						yl(),
						Tl(407, '>'),
						yl(),
						Tl(408, 'default'),
						vl(409, 'span', iv),
						Tl(410, '</'),
						vl(411, 'span', av),
						Tl(412, 'li'),
						yl(),
						Tl(413, '>'),
						yl(),
						Tl(414, '\n    '),
						vl(415, 'span', iv),
						Tl(416, '<'),
						vl(417, 'span', av),
						Tl(418, 'li'),
						yl(),
						Tl(419, ' '),
						vl(420, 'span', sv),
						Tl(421, 'class'),
						yl(),
						Tl(422, '='),
						vl(423, 'span', lv),
						Tl(424, '"item-st"'),
						yl(),
						Tl(425, '>'),
						yl(),
						Tl(426, 'stretch'),
						vl(427, 'span', iv),
						Tl(428, '</'),
						vl(429, 'span', av),
						Tl(430, 'li'),
						yl(),
						Tl(431, '>'),
						yl(),
						Tl(432, '\n'),
						vl(433, 'span', iv),
						Tl(434, '</'),
						vl(435, 'span', av),
						Tl(436, 'ul'),
						yl(),
						Tl(437, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var jy = [1, 'item-order-2'],
				Ry = [1, 'item-order-1'];
			function Dy(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Item Order'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use '),
						vl(6, 'code'),
						Tl(7, '.item-order-[1 - 12]'),
						yl(),
						Tl(8, ' classes to align children in a flex container.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'ul', Kv),
						vl(11, 'li', jy),
						Tl(12, '1'),
						yl(),
						vl(13, 'li', Ry),
						Tl(14, '2'),
						yl(),
						yl(),
						vl(15, 'ul', $v),
						vl(16, 'li', jy),
						Tl(17, '1'),
						yl(),
						vl(18, 'li', Ry),
						Tl(19, '2'),
						yl(),
						yl(),
						yl(),
						vl(20, 'figure'),
						vl(21, 'pre', ov),
						Tl(22, '<ul '),
						vl(23, 'span', Pv),
						Tl(24, 'class'),
						yl(),
						Tl(25, '='),
						vl(26, 'span', Ev),
						Tl(27, '"row"'),
						yl(),
						Tl(28, '>\n    <'),
						vl(29, 'span', Pv),
						Tl(30, 'li'),
						yl(),
						Tl(31, ' '),
						vl(32, 'span', Pv),
						Tl(33, 'class'),
						yl(),
						Tl(34, '='),
						vl(35, 'span', Ev),
						Tl(36, '"item-order-2"'),
						yl(),
						Tl(37, '>1</'),
						vl(38, 'span', Pv),
						Tl(39, 'li'),
						yl(),
						Tl(40, '>\n    <'),
						vl(41, 'span', Pv),
						Tl(42, 'li'),
						yl(),
						Tl(43, ' '),
						vl(44, 'span', Pv),
						Tl(45, 'class'),
						yl(),
						Tl(46, '='),
						vl(47, 'span', Ev),
						Tl(48, '"item-order-1"'),
						yl(),
						Tl(49, '>2</'),
						vl(50, 'span', Pv),
						Tl(51, 'li'),
						yl(),
						Tl(52, '>\n</ul>\n<ul '),
						vl(53, 'span', Pv),
						Tl(54, 'class'),
						yl(),
						Tl(55, '='),
						vl(56, 'span', Ev),
						Tl(57, '"col"'),
						yl(),
						Tl(58, '>\n    <'),
						vl(59, 'span', Pv),
						Tl(60, 'li'),
						yl(),
						Tl(61, ' '),
						vl(62, 'span', Pv),
						Tl(63, 'class'),
						yl(),
						Tl(64, '='),
						vl(65, 'span', Ev),
						Tl(66, '"item-order-2"'),
						yl(),
						Tl(67, '>1</'),
						vl(68, 'span', Pv),
						Tl(69, 'li'),
						yl(),
						Tl(70, '>\n    <'),
						vl(71, 'span', Pv),
						Tl(72, 'li'),
						yl(),
						Tl(73, ' '),
						vl(74, 'span', Pv),
						Tl(75, 'class'),
						yl(),
						Tl(76, '='),
						vl(77, 'span', Ev),
						Tl(78, '"item-order-1"'),
						yl(),
						Tl(79, '>2</'),
						vl(80, 'span', Pv),
						Tl(81, 'li'),
						yl(),
						Tl(82, '>\n</ul>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function Ny(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Item Row'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use an '),
						vl(6, 'code'),
						Tl(7, '.item-[l || c || r || t || m || b || cm || st]'),
						yl(),
						Tl(8, ' class to align ONE child in a '),
						vl(9, 'code'),
						Tl(10, '.row'),
						yl(),
						Tl(11, ' flex container.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'ul', Kv),
						vl(14, 'li'),
						Tl(15, 'default'),
						yl(),
						vl(16, 'li', ky),
						Tl(17, 'left (default)'),
						yl(),
						yl(),
						vl(18, 'ul', Kv),
						vl(19, 'li'),
						Tl(20, 'default'),
						yl(),
						vl(21, 'li', Sy),
						Tl(22, 'center'),
						yl(),
						yl(),
						vl(23, 'ul', Kv),
						vl(24, 'li'),
						Tl(25, 'default'),
						yl(),
						vl(26, 'li', Py),
						Tl(27, 'right'),
						yl(),
						yl(),
						vl(28, 'ul', Kv),
						vl(29, 'li'),
						Tl(30, 'default'),
						yl(),
						vl(31, 'li', Ey),
						Tl(32, 'top (default)'),
						yl(),
						yl(),
						vl(33, 'ul', Kv),
						vl(34, 'li'),
						Tl(35, 'default'),
						yl(),
						vl(36, 'li', Oy),
						Tl(37, 'middle'),
						yl(),
						yl(),
						vl(38, 'ul', Kv),
						vl(39, 'li'),
						Tl(40, 'default'),
						yl(),
						vl(41, 'li', Iy),
						Tl(42, 'bottom'),
						yl(),
						yl(),
						vl(43, 'ul', Kv),
						vl(44, 'li'),
						Tl(45, 'default'),
						yl(),
						vl(46, 'li', Ty),
						Tl(47, 'center middle'),
						yl(),
						yl(),
						vl(48, 'ul', Kv),
						vl(49, 'li'),
						Tl(50, 'default'),
						yl(),
						vl(51, 'li', My),
						Tl(52, 'stretch'),
						yl(),
						yl(),
						yl(),
						vl(53, 'figure'),
						vl(54, 'pre', ov),
						vl(55, 'span', iv),
						Tl(56, '<'),
						vl(57, 'span', av),
						Tl(58, 'ul'),
						yl(),
						Tl(59, ' '),
						vl(60, 'span', sv),
						Tl(61, 'class'),
						yl(),
						Tl(62, '='),
						vl(63, 'span', lv),
						Tl(64, '"row"'),
						yl(),
						Tl(65, '>'),
						yl(),
						Tl(66, '\n    '),
						vl(67, 'span', iv),
						Tl(68, '<'),
						vl(69, 'span', av),
						Tl(70, 'li'),
						yl(),
						Tl(71, '>'),
						yl(),
						Tl(72, 'default'),
						vl(73, 'span', iv),
						Tl(74, '</'),
						vl(75, 'span', av),
						Tl(76, 'li'),
						yl(),
						Tl(77, '>'),
						yl(),
						Tl(78, '\n    '),
						vl(79, 'span', iv),
						Tl(80, '<'),
						vl(81, 'span', av),
						Tl(82, 'li'),
						yl(),
						Tl(83, ' '),
						vl(84, 'span', sv),
						Tl(85, 'class'),
						yl(),
						Tl(86, '='),
						vl(87, 'span', lv),
						Tl(88, '"item-l"'),
						yl(),
						Tl(89, '>'),
						yl(),
						Tl(90, 'left (default)'),
						vl(91, 'span', iv),
						Tl(92, '</'),
						vl(93, 'span', av),
						Tl(94, 'li'),
						yl(),
						Tl(95, '>'),
						yl(),
						Tl(96, '\n'),
						vl(97, 'span', iv),
						Tl(98, '</'),
						vl(99, 'span', av),
						Tl(100, 'ul'),
						yl(),
						Tl(101, '>'),
						yl(),
						Tl(102, '\n'),
						vl(103, 'span', iv),
						Tl(104, '<'),
						vl(105, 'span', av),
						Tl(106, 'ul'),
						yl(),
						Tl(107, ' '),
						vl(108, 'span', sv),
						Tl(109, 'class'),
						yl(),
						Tl(110, '='),
						vl(111, 'span', lv),
						Tl(112, '"row"'),
						yl(),
						Tl(113, '>'),
						yl(),
						Tl(114, '\n    '),
						vl(115, 'span', iv),
						Tl(116, '<'),
						vl(117, 'span', av),
						Tl(118, 'li'),
						yl(),
						Tl(119, '>'),
						yl(),
						Tl(120, 'default'),
						vl(121, 'span', iv),
						Tl(122, '</'),
						vl(123, 'span', av),
						Tl(124, 'li'),
						yl(),
						Tl(125, '>'),
						yl(),
						Tl(126, '\n    '),
						vl(127, 'span', iv),
						Tl(128, '<'),
						vl(129, 'span', av),
						Tl(130, 'li'),
						yl(),
						Tl(131, ' '),
						vl(132, 'span', sv),
						Tl(133, 'class'),
						yl(),
						Tl(134, '='),
						vl(135, 'span', lv),
						Tl(136, '"item-c"'),
						yl(),
						Tl(137, '>'),
						yl(),
						Tl(138, 'center'),
						vl(139, 'span', iv),
						Tl(140, '</'),
						vl(141, 'span', av),
						Tl(142, 'li'),
						yl(),
						Tl(143, '>'),
						yl(),
						Tl(144, '\n'),
						vl(145, 'span', iv),
						Tl(146, '</'),
						vl(147, 'span', av),
						Tl(148, 'ul'),
						yl(),
						Tl(149, '>'),
						yl(),
						Tl(150, '\n'),
						vl(151, 'span', iv),
						Tl(152, '<'),
						vl(153, 'span', av),
						Tl(154, 'ul'),
						yl(),
						Tl(155, ' '),
						vl(156, 'span', sv),
						Tl(157, 'class'),
						yl(),
						Tl(158, '='),
						vl(159, 'span', lv),
						Tl(160, '"row"'),
						yl(),
						Tl(161, '>'),
						yl(),
						Tl(162, '\n    '),
						vl(163, 'span', iv),
						Tl(164, '<'),
						vl(165, 'span', av),
						Tl(166, 'li'),
						yl(),
						Tl(167, '>'),
						yl(),
						Tl(168, 'default'),
						vl(169, 'span', iv),
						Tl(170, '</'),
						vl(171, 'span', av),
						Tl(172, 'li'),
						yl(),
						Tl(173, '>'),
						yl(),
						Tl(174, '\n    '),
						vl(175, 'span', iv),
						Tl(176, '<'),
						vl(177, 'span', av),
						Tl(178, 'li'),
						yl(),
						Tl(179, ' '),
						vl(180, 'span', sv),
						Tl(181, 'class'),
						yl(),
						Tl(182, '='),
						vl(183, 'span', lv),
						Tl(184, '"item-r"'),
						yl(),
						Tl(185, '>'),
						yl(),
						Tl(186, 'right'),
						vl(187, 'span', iv),
						Tl(188, '</'),
						vl(189, 'span', av),
						Tl(190, 'li'),
						yl(),
						Tl(191, '>'),
						yl(),
						Tl(192, '\n'),
						vl(193, 'span', iv),
						Tl(194, '</'),
						vl(195, 'span', av),
						Tl(196, 'ul'),
						yl(),
						Tl(197, '>'),
						yl(),
						Tl(198, '\n'),
						vl(199, 'span', iv),
						Tl(200, '<'),
						vl(201, 'span', av),
						Tl(202, 'ul'),
						yl(),
						Tl(203, ' '),
						vl(204, 'span', sv),
						Tl(205, 'class'),
						yl(),
						Tl(206, '='),
						vl(207, 'span', lv),
						Tl(208, '"row"'),
						yl(),
						Tl(209, '>'),
						yl(),
						Tl(210, '\n    '),
						vl(211, 'span', iv),
						Tl(212, '<'),
						vl(213, 'span', av),
						Tl(214, 'li'),
						yl(),
						Tl(215, '>'),
						yl(),
						Tl(216, 'default'),
						vl(217, 'span', iv),
						Tl(218, '</'),
						vl(219, 'span', av),
						Tl(220, 'li'),
						yl(),
						Tl(221, '>'),
						yl(),
						Tl(222, '\n    '),
						vl(223, 'span', iv),
						Tl(224, '<'),
						vl(225, 'span', av),
						Tl(226, 'li'),
						yl(),
						Tl(227, ' '),
						vl(228, 'span', sv),
						Tl(229, 'class'),
						yl(),
						Tl(230, '='),
						vl(231, 'span', lv),
						Tl(232, '"item-t"'),
						yl(),
						Tl(233, '>'),
						yl(),
						Tl(234, 'top (default)'),
						vl(235, 'span', iv),
						Tl(236, '</'),
						vl(237, 'span', av),
						Tl(238, 'li'),
						yl(),
						Tl(239, '>'),
						yl(),
						Tl(240, '\n'),
						vl(241, 'span', iv),
						Tl(242, '</'),
						vl(243, 'span', av),
						Tl(244, 'ul'),
						yl(),
						Tl(245, '>'),
						yl(),
						Tl(246, '\n'),
						vl(247, 'span', iv),
						Tl(248, '<'),
						vl(249, 'span', av),
						Tl(250, 'ul'),
						yl(),
						Tl(251, ' '),
						vl(252, 'span', sv),
						Tl(253, 'class'),
						yl(),
						Tl(254, '='),
						vl(255, 'span', lv),
						Tl(256, '"row"'),
						yl(),
						Tl(257, '>'),
						yl(),
						Tl(258, '\n    '),
						vl(259, 'span', iv),
						Tl(260, '<'),
						vl(261, 'span', av),
						Tl(262, 'li'),
						yl(),
						Tl(263, '>'),
						yl(),
						Tl(264, 'default'),
						vl(265, 'span', iv),
						Tl(266, '</'),
						vl(267, 'span', av),
						Tl(268, 'li'),
						yl(),
						Tl(269, '>'),
						yl(),
						Tl(270, '\n    '),
						vl(271, 'span', iv),
						Tl(272, '<'),
						vl(273, 'span', av),
						Tl(274, 'li'),
						yl(),
						Tl(275, ' '),
						vl(276, 'span', sv),
						Tl(277, 'class'),
						yl(),
						Tl(278, '='),
						vl(279, 'span', lv),
						Tl(280, '"item-m"'),
						yl(),
						Tl(281, '>'),
						yl(),
						Tl(282, 'middle'),
						vl(283, 'span', iv),
						Tl(284, '</'),
						vl(285, 'span', av),
						Tl(286, 'li'),
						yl(),
						Tl(287, '>'),
						yl(),
						Tl(288, '\n'),
						vl(289, 'span', iv),
						Tl(290, '</'),
						vl(291, 'span', av),
						Tl(292, 'ul'),
						yl(),
						Tl(293, '>'),
						yl(),
						Tl(294, '\n'),
						vl(295, 'span', iv),
						Tl(296, '<'),
						vl(297, 'span', av),
						Tl(298, 'ul'),
						yl(),
						Tl(299, ' '),
						vl(300, 'span', sv),
						Tl(301, 'class'),
						yl(),
						Tl(302, '='),
						vl(303, 'span', lv),
						Tl(304, '"row"'),
						yl(),
						Tl(305, '>'),
						yl(),
						Tl(306, '\n    '),
						vl(307, 'span', iv),
						Tl(308, '<'),
						vl(309, 'span', av),
						Tl(310, 'li'),
						yl(),
						Tl(311, '>'),
						yl(),
						Tl(312, 'default'),
						vl(313, 'span', iv),
						Tl(314, '</'),
						vl(315, 'span', av),
						Tl(316, 'li'),
						yl(),
						Tl(317, '>'),
						yl(),
						Tl(318, '\n    '),
						vl(319, 'span', iv),
						Tl(320, '<'),
						vl(321, 'span', av),
						Tl(322, 'li'),
						yl(),
						Tl(323, ' '),
						vl(324, 'span', sv),
						Tl(325, 'class'),
						yl(),
						Tl(326, '='),
						vl(327, 'span', lv),
						Tl(328, '"item-b"'),
						yl(),
						Tl(329, '>'),
						yl(),
						Tl(330, 'bottom'),
						vl(331, 'span', iv),
						Tl(332, '</'),
						vl(333, 'span', av),
						Tl(334, 'li'),
						yl(),
						Tl(335, '>'),
						yl(),
						Tl(336, '\n'),
						vl(337, 'span', iv),
						Tl(338, '</'),
						vl(339, 'span', av),
						Tl(340, 'ul'),
						yl(),
						Tl(341, '>'),
						yl(),
						Tl(342, '\n'),
						vl(343, 'span', iv),
						Tl(344, '<'),
						vl(345, 'span', av),
						Tl(346, 'ul'),
						yl(),
						Tl(347, ' '),
						vl(348, 'span', sv),
						Tl(349, 'class'),
						yl(),
						Tl(350, '='),
						vl(351, 'span', lv),
						Tl(352, '"row"'),
						yl(),
						Tl(353, '>'),
						yl(),
						Tl(354, '\n    '),
						vl(355, 'span', iv),
						Tl(356, '<'),
						vl(357, 'span', av),
						Tl(358, 'li'),
						yl(),
						Tl(359, '>'),
						yl(),
						Tl(360, 'default'),
						vl(361, 'span', iv),
						Tl(362, '</'),
						vl(363, 'span', av),
						Tl(364, 'li'),
						yl(),
						Tl(365, '>'),
						yl(),
						Tl(366, '\n    '),
						vl(367, 'span', iv),
						Tl(368, '<'),
						vl(369, 'span', av),
						Tl(370, 'li'),
						yl(),
						Tl(371, ' '),
						vl(372, 'span', sv),
						Tl(373, 'class'),
						yl(),
						Tl(374, '='),
						vl(375, 'span', lv),
						Tl(376, '"item-cm"'),
						yl(),
						Tl(377, '>'),
						yl(),
						Tl(378, 'center middle'),
						vl(379, 'span', iv),
						Tl(380, '</'),
						vl(381, 'span', av),
						Tl(382, 'li'),
						yl(),
						Tl(383, '>'),
						yl(),
						Tl(384, '\n'),
						vl(385, 'span', iv),
						Tl(386, '</'),
						vl(387, 'span', av),
						Tl(388, 'ul'),
						yl(),
						Tl(389, '>'),
						yl(),
						Tl(390, '\n'),
						vl(391, 'span', iv),
						Tl(392, '<'),
						vl(393, 'span', av),
						Tl(394, 'ul'),
						yl(),
						Tl(395, ' '),
						vl(396, 'span', sv),
						Tl(397, 'class'),
						yl(),
						Tl(398, '='),
						vl(399, 'span', lv),
						Tl(400, '"row"'),
						yl(),
						Tl(401, '>'),
						yl(),
						Tl(402, '\n    '),
						vl(403, 'span', iv),
						Tl(404, '<'),
						vl(405, 'span', av),
						Tl(406, 'li'),
						yl(),
						Tl(407, '>'),
						yl(),
						Tl(408, 'default'),
						vl(409, 'span', iv),
						Tl(410, '</'),
						vl(411, 'span', av),
						Tl(412, 'li'),
						yl(),
						Tl(413, '>'),
						yl(),
						Tl(414, '\n    '),
						vl(415, 'span', iv),
						Tl(416, '<'),
						vl(417, 'span', av),
						Tl(418, 'li'),
						yl(),
						Tl(419, ' '),
						vl(420, 'span', sv),
						Tl(421, 'class'),
						yl(),
						Tl(422, '='),
						vl(423, 'span', lv),
						Tl(424, '"item-st"'),
						yl(),
						Tl(425, '>'),
						yl(),
						Tl(426, 'stretch'),
						vl(427, 'span', iv),
						Tl(428, '</'),
						vl(429, 'span', av),
						Tl(430, 'li'),
						yl(),
						Tl(431, '>'),
						yl(),
						Tl(432, '\n'),
						vl(433, 'span', iv),
						Tl(434, '</'),
						vl(435, 'span', av),
						Tl(436, 'ul'),
						yl(),
						Tl(437, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Uy = [1, 'item-g-1'],
				Ly = [1, 'item-s-1'],
				Hy = [1, 'item-gs-1'];
			function zy(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Item Size'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use '),
						vl(6, 'code'),
						Tl(7, '.item-[g || s || gs]-[1 - 12]'),
						yl(),
						Tl(8, ' classes to grow and/or shrink children in a flex container.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'ul', Kv),
						vl(11, 'li'),
						Tl(12, 'default'),
						yl(),
						vl(13, 'li', Uy),
						Tl(14, 'grow'),
						yl(),
						yl(),
						vl(15, 'ul', Kv),
						vl(16, 'li'),
						Tl(17, 'default'),
						yl(),
						vl(18, 'li', Ly),
						Tl(19, 'shrink'),
						yl(),
						yl(),
						vl(20, 'ul', Kv),
						vl(21, 'li'),
						Tl(22, 'default'),
						yl(),
						vl(23, 'li', Hy),
						Tl(24, 'grow & shrink'),
						yl(),
						yl(),
						vl(25, 'ul', $v),
						vl(26, 'li'),
						Tl(27, 'default'),
						yl(),
						vl(28, 'li', Uy),
						Tl(29, 'grow'),
						yl(),
						yl(),
						vl(30, 'ul', $v),
						vl(31, 'li'),
						Tl(32, 'default'),
						yl(),
						vl(33, 'li', Ly),
						Tl(34, 'shrink'),
						yl(),
						yl(),
						vl(35, 'ul', $v),
						vl(36, 'li'),
						Tl(37, 'default'),
						yl(),
						vl(38, 'li', Hy),
						Tl(39, 'grow & shrink'),
						yl(),
						yl(),
						yl(),
						vl(40, 'figure'),
						vl(41, 'pre', ov),
						vl(42, 'span', iv),
						Tl(43, '<'),
						vl(44, 'span', av),
						Tl(45, 'ul'),
						yl(),
						Tl(46, ' '),
						vl(47, 'span', sv),
						Tl(48, 'class'),
						yl(),
						Tl(49, '='),
						vl(50, 'span', lv),
						Tl(51, '"row"'),
						yl(),
						Tl(52, '>'),
						yl(),
						Tl(53, '\n    '),
						vl(54, 'span', iv),
						Tl(55, '<'),
						vl(56, 'span', av),
						Tl(57, 'li'),
						yl(),
						Tl(58, '>'),
						yl(),
						Tl(59, 'default'),
						vl(60, 'span', iv),
						Tl(61, '</'),
						vl(62, 'span', av),
						Tl(63, 'li'),
						yl(),
						Tl(64, '>'),
						yl(),
						Tl(65, '\n    '),
						vl(66, 'span', iv),
						Tl(67, '<'),
						vl(68, 'span', av),
						Tl(69, 'li'),
						yl(),
						Tl(70, ' '),
						vl(71, 'span', sv),
						Tl(72, 'class'),
						yl(),
						Tl(73, '='),
						vl(74, 'span', lv),
						Tl(75, '"item-g-1"'),
						yl(),
						Tl(76, '>'),
						yl(),
						Tl(77, 'grow'),
						vl(78, 'span', iv),
						Tl(79, '</'),
						vl(80, 'span', av),
						Tl(81, 'li'),
						yl(),
						Tl(82, '>'),
						yl(),
						Tl(83, '\n'),
						vl(84, 'span', iv),
						Tl(85, '</'),
						vl(86, 'span', av),
						Tl(87, 'ul'),
						yl(),
						Tl(88, '>'),
						yl(),
						Tl(89, '\n'),
						vl(90, 'span', iv),
						Tl(91, '<'),
						vl(92, 'span', av),
						Tl(93, 'ul'),
						yl(),
						Tl(94, ' '),
						vl(95, 'span', sv),
						Tl(96, 'class'),
						yl(),
						Tl(97, '='),
						vl(98, 'span', lv),
						Tl(99, '"row"'),
						yl(),
						Tl(100, '>'),
						yl(),
						Tl(101, '\n    '),
						vl(102, 'span', iv),
						Tl(103, '<'),
						vl(104, 'span', av),
						Tl(105, 'li'),
						yl(),
						Tl(106, '>'),
						yl(),
						Tl(107, 'default'),
						vl(108, 'span', iv),
						Tl(109, '</'),
						vl(110, 'span', av),
						Tl(111, 'li'),
						yl(),
						Tl(112, '>'),
						yl(),
						Tl(113, '\n    '),
						vl(114, 'span', iv),
						Tl(115, '<'),
						vl(116, 'span', av),
						Tl(117, 'li'),
						yl(),
						Tl(118, ' '),
						vl(119, 'span', sv),
						Tl(120, 'class'),
						yl(),
						Tl(121, '='),
						vl(122, 'span', lv),
						Tl(123, '"item-s-1"'),
						yl(),
						Tl(124, '>'),
						yl(),
						Tl(125, 'shrink'),
						vl(126, 'span', iv),
						Tl(127, '</'),
						vl(128, 'span', av),
						Tl(129, 'li'),
						yl(),
						Tl(130, '>'),
						yl(),
						Tl(131, '\n'),
						vl(132, 'span', iv),
						Tl(133, '</'),
						vl(134, 'span', av),
						Tl(135, 'ul'),
						yl(),
						Tl(136, '>'),
						yl(),
						Tl(137, '\n'),
						vl(138, 'span', iv),
						Tl(139, '<'),
						vl(140, 'span', av),
						Tl(141, 'ul'),
						yl(),
						Tl(142, ' '),
						vl(143, 'span', sv),
						Tl(144, 'class'),
						yl(),
						Tl(145, '='),
						vl(146, 'span', lv),
						Tl(147, '"row"'),
						yl(),
						Tl(148, '>'),
						yl(),
						Tl(149, '\n    '),
						vl(150, 'span', iv),
						Tl(151, '<'),
						vl(152, 'span', av),
						Tl(153, 'li'),
						yl(),
						Tl(154, '>'),
						yl(),
						Tl(155, 'default'),
						vl(156, 'span', iv),
						Tl(157, '</'),
						vl(158, 'span', av),
						Tl(159, 'li'),
						yl(),
						Tl(160, '>'),
						yl(),
						Tl(161, '\n    '),
						vl(162, 'span', iv),
						Tl(163, '<'),
						vl(164, 'span', av),
						Tl(165, 'li'),
						yl(),
						Tl(166, ' '),
						vl(167, 'span', sv),
						Tl(168, 'class'),
						yl(),
						Tl(169, '='),
						vl(170, 'span', lv),
						Tl(171, '"item-gs-1"'),
						yl(),
						Tl(172, '>'),
						yl(),
						Tl(173, 'grow &amp; shrink'),
						vl(174, 'span', iv),
						Tl(175, '</'),
						vl(176, 'span', av),
						Tl(177, 'li'),
						yl(),
						Tl(178, '>'),
						yl(),
						Tl(179, '\n'),
						vl(180, 'span', iv),
						Tl(181, '</'),
						vl(182, 'span', av),
						Tl(183, 'ul'),
						yl(),
						Tl(184, '>'),
						yl(),
						Tl(185, '\n'),
						vl(186, 'span', iv),
						Tl(187, '<'),
						vl(188, 'span', av),
						Tl(189, 'ul'),
						yl(),
						Tl(190, ' '),
						vl(191, 'span', sv),
						Tl(192, 'class'),
						yl(),
						Tl(193, '='),
						vl(194, 'span', lv),
						Tl(195, '"col"'),
						yl(),
						Tl(196, '>'),
						yl(),
						Tl(197, '\n    '),
						vl(198, 'span', iv),
						Tl(199, '<'),
						vl(200, 'span', av),
						Tl(201, 'li'),
						yl(),
						Tl(202, '>'),
						yl(),
						Tl(203, 'default'),
						vl(204, 'span', iv),
						Tl(205, '</'),
						vl(206, 'span', av),
						Tl(207, 'li'),
						yl(),
						Tl(208, '>'),
						yl(),
						Tl(209, '\n    '),
						vl(210, 'span', iv),
						Tl(211, '<'),
						vl(212, 'span', av),
						Tl(213, 'li'),
						yl(),
						Tl(214, ' '),
						vl(215, 'span', sv),
						Tl(216, 'class'),
						yl(),
						Tl(217, '='),
						vl(218, 'span', lv),
						Tl(219, '"item-g-1"'),
						yl(),
						Tl(220, '>'),
						yl(),
						Tl(221, 'grow'),
						vl(222, 'span', iv),
						Tl(223, '</'),
						vl(224, 'span', av),
						Tl(225, 'li'),
						yl(),
						Tl(226, '>'),
						yl(),
						Tl(227, '\n'),
						vl(228, 'span', iv),
						Tl(229, '</'),
						vl(230, 'span', av),
						Tl(231, 'ul'),
						yl(),
						Tl(232, '>'),
						yl(),
						Tl(233, '\n'),
						vl(234, 'span', iv),
						Tl(235, '<'),
						vl(236, 'span', av),
						Tl(237, 'ul'),
						yl(),
						Tl(238, ' '),
						vl(239, 'span', sv),
						Tl(240, 'class'),
						yl(),
						Tl(241, '='),
						vl(242, 'span', lv),
						Tl(243, '"col"'),
						yl(),
						Tl(244, '>'),
						yl(),
						Tl(245, '\n    '),
						vl(246, 'span', iv),
						Tl(247, '<'),
						vl(248, 'span', av),
						Tl(249, 'li'),
						yl(),
						Tl(250, '>'),
						yl(),
						Tl(251, 'default'),
						vl(252, 'span', iv),
						Tl(253, '</'),
						vl(254, 'span', av),
						Tl(255, 'li'),
						yl(),
						Tl(256, '>'),
						yl(),
						Tl(257, '\n    '),
						vl(258, 'span', iv),
						Tl(259, '<'),
						vl(260, 'span', av),
						Tl(261, 'li'),
						yl(),
						Tl(262, ' '),
						vl(263, 'span', sv),
						Tl(264, 'class'),
						yl(),
						Tl(265, '='),
						vl(266, 'span', lv),
						Tl(267, '"item-s-1"'),
						yl(),
						Tl(268, '>'),
						yl(),
						Tl(269, 'shrink'),
						vl(270, 'span', iv),
						Tl(271, '</'),
						vl(272, 'span', av),
						Tl(273, 'li'),
						yl(),
						Tl(274, '>'),
						yl(),
						Tl(275, '\n'),
						vl(276, 'span', iv),
						Tl(277, '</'),
						vl(278, 'span', av),
						Tl(279, 'ul'),
						yl(),
						Tl(280, '>'),
						yl(),
						Tl(281, '\n'),
						vl(282, 'span', iv),
						Tl(283, '<'),
						vl(284, 'span', av),
						Tl(285, 'ul'),
						yl(),
						Tl(286, ' '),
						vl(287, 'span', sv),
						Tl(288, 'class'),
						yl(),
						Tl(289, '='),
						vl(290, 'span', lv),
						Tl(291, '"col"'),
						yl(),
						Tl(292, '>'),
						yl(),
						Tl(293, '\n    '),
						vl(294, 'span', iv),
						Tl(295, '<'),
						vl(296, 'span', av),
						Tl(297, 'li'),
						yl(),
						Tl(298, '>'),
						yl(),
						Tl(299, 'default'),
						vl(300, 'span', iv),
						Tl(301, '</'),
						vl(302, 'span', av),
						Tl(303, 'li'),
						yl(),
						Tl(304, '>'),
						yl(),
						Tl(305, '\n    '),
						vl(306, 'span', iv),
						Tl(307, '<'),
						vl(308, 'span', av),
						Tl(309, 'li'),
						yl(),
						Tl(310, ' '),
						vl(311, 'span', sv),
						Tl(312, 'class'),
						yl(),
						Tl(313, '='),
						vl(314, 'span', lv),
						Tl(315, '"item-gs-1"'),
						yl(),
						Tl(316, '>'),
						yl(),
						Tl(317, 'grow &amp; shrink'),
						vl(318, 'span', iv),
						Tl(319, '</'),
						vl(320, 'span', av),
						Tl(321, 'li'),
						yl(),
						Tl(322, '>'),
						yl(),
						Tl(323, '\n'),
						vl(324, 'span', iv),
						Tl(325, '</'),
						vl(326, 'span', av),
						Tl(327, 'ul'),
						yl(),
						Tl(328, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Vy = [1, 'col', 'wrap-c'],
				Fy = [1, 'col', 'wrap-l'],
				By = [1, 'col', 'wrap-r'],
				qy = [1, 'col', 'wrap-sa'],
				Gy = [1, 'col', 'wrap-sb'],
				Zy = [1, 'col', 'wrap-st'];
			function Wy(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Wrap Column'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use a '),
						vl(6, 'code'),
						Tl(7, '.wrap-[c || l || r || sa || sb || st]'),
						yl(),
						Tl(8, ' class to align multi-column items in a '),
						vl(9, 'code'),
						Tl(10, '.col'),
						yl(),
						Tl(11, ' flex container.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'ul', Vy),
						vl(14, 'li'),
						Tl(15, 'center'),
						yl(),
						vl(16, 'li'),
						Tl(17, 'center'),
						yl(),
						vl(18, 'li'),
						Tl(19, 'center'),
						yl(),
						yl(),
						vl(20, 'ul', Fy),
						vl(21, 'li'),
						Tl(22, 'left (default)'),
						yl(),
						vl(23, 'li'),
						Tl(24, 'left (default)'),
						yl(),
						vl(25, 'li'),
						Tl(26, 'left (default)'),
						yl(),
						yl(),
						vl(27, 'ul', By),
						vl(28, 'li'),
						Tl(29, 'right'),
						yl(),
						vl(30, 'li'),
						Tl(31, 'right'),
						yl(),
						vl(32, 'li'),
						Tl(33, 'right'),
						yl(),
						yl(),
						vl(34, 'ul', qy),
						vl(35, 'li'),
						Tl(36, 'space around'),
						yl(),
						vl(37, 'li'),
						Tl(38, 'space around'),
						yl(),
						vl(39, 'li'),
						Tl(40, 'space around'),
						yl(),
						yl(),
						vl(41, 'ul', Gy),
						vl(42, 'li'),
						Tl(43, 'space between'),
						yl(),
						vl(44, 'li'),
						Tl(45, 'space between'),
						yl(),
						vl(46, 'li'),
						Tl(47, 'space between'),
						yl(),
						yl(),
						vl(48, 'ul', Zy),
						vl(49, 'li'),
						Tl(50, 'stretch'),
						yl(),
						vl(51, 'li'),
						Tl(52, 'stretch'),
						yl(),
						vl(53, 'li'),
						Tl(54, 'stretch'),
						yl(),
						yl(),
						yl(),
						vl(55, 'figure'),
						vl(56, 'pre', ov),
						vl(57, 'span', iv),
						Tl(58, '<'),
						vl(59, 'span', av),
						Tl(60, 'ul'),
						yl(),
						Tl(61, ' '),
						vl(62, 'span', sv),
						Tl(63, 'class'),
						yl(),
						Tl(64, '='),
						vl(65, 'span', lv),
						Tl(66, '"col wrap-c"'),
						yl(),
						Tl(67, '>'),
						yl(),
						Tl(68, '\n    '),
						vl(69, 'span', iv),
						Tl(70, '<'),
						vl(71, 'span', av),
						Tl(72, 'li'),
						yl(),
						Tl(73, '>'),
						yl(),
						Tl(74, 'center'),
						vl(75, 'span', iv),
						Tl(76, '</'),
						vl(77, 'span', av),
						Tl(78, 'li'),
						yl(),
						Tl(79, '>'),
						yl(),
						Tl(80, '\n    '),
						vl(81, 'span', iv),
						Tl(82, '<'),
						vl(83, 'span', av),
						Tl(84, 'li'),
						yl(),
						Tl(85, '>'),
						yl(),
						Tl(86, 'center'),
						vl(87, 'span', iv),
						Tl(88, '</'),
						vl(89, 'span', av),
						Tl(90, 'li'),
						yl(),
						Tl(91, '>'),
						yl(),
						Tl(92, '\n    '),
						vl(93, 'span', iv),
						Tl(94, '<'),
						vl(95, 'span', av),
						Tl(96, 'li'),
						yl(),
						Tl(97, '>'),
						yl(),
						Tl(98, 'center'),
						vl(99, 'span', iv),
						Tl(100, '</'),
						vl(101, 'span', av),
						Tl(102, 'li'),
						yl(),
						Tl(103, '>'),
						yl(),
						Tl(104, '\n'),
						vl(105, 'span', iv),
						Tl(106, '</'),
						vl(107, 'span', av),
						Tl(108, 'ul'),
						yl(),
						Tl(109, '>'),
						yl(),
						Tl(110, '\n'),
						vl(111, 'span', iv),
						Tl(112, '<'),
						vl(113, 'span', av),
						Tl(114, 'ul'),
						yl(),
						Tl(115, ' '),
						vl(116, 'span', sv),
						Tl(117, 'class'),
						yl(),
						Tl(118, '='),
						vl(119, 'span', lv),
						Tl(120, '"col wrap-l"'),
						yl(),
						Tl(121, '>'),
						yl(),
						Tl(122, '\n    '),
						vl(123, 'span', iv),
						Tl(124, '<'),
						vl(125, 'span', av),
						Tl(126, 'li'),
						yl(),
						Tl(127, '>'),
						yl(),
						Tl(128, 'left (default)'),
						vl(129, 'span', iv),
						Tl(130, '</'),
						vl(131, 'span', av),
						Tl(132, 'li'),
						yl(),
						Tl(133, '>'),
						yl(),
						Tl(134, '\n    '),
						vl(135, 'span', iv),
						Tl(136, '<'),
						vl(137, 'span', av),
						Tl(138, 'li'),
						yl(),
						Tl(139, '>'),
						yl(),
						Tl(140, 'left (default)'),
						vl(141, 'span', iv),
						Tl(142, '</'),
						vl(143, 'span', av),
						Tl(144, 'li'),
						yl(),
						Tl(145, '>'),
						yl(),
						Tl(146, '\n    '),
						vl(147, 'span', iv),
						Tl(148, '<'),
						vl(149, 'span', av),
						Tl(150, 'li'),
						yl(),
						Tl(151, '>'),
						yl(),
						Tl(152, 'left (default)'),
						vl(153, 'span', iv),
						Tl(154, '</'),
						vl(155, 'span', av),
						Tl(156, 'li'),
						yl(),
						Tl(157, '>'),
						yl(),
						Tl(158, '\n'),
						vl(159, 'span', iv),
						Tl(160, '</'),
						vl(161, 'span', av),
						Tl(162, 'ul'),
						yl(),
						Tl(163, '>'),
						yl(),
						Tl(164, '\n'),
						vl(165, 'span', iv),
						Tl(166, '<'),
						vl(167, 'span', av),
						Tl(168, 'ul'),
						yl(),
						Tl(169, ' '),
						vl(170, 'span', sv),
						Tl(171, 'class'),
						yl(),
						Tl(172, '='),
						vl(173, 'span', lv),
						Tl(174, '"col wrap-r"'),
						yl(),
						Tl(175, '>'),
						yl(),
						Tl(176, '\n    '),
						vl(177, 'span', iv),
						Tl(178, '<'),
						vl(179, 'span', av),
						Tl(180, 'li'),
						yl(),
						Tl(181, '>'),
						yl(),
						Tl(182, 'right'),
						vl(183, 'span', iv),
						Tl(184, '</'),
						vl(185, 'span', av),
						Tl(186, 'li'),
						yl(),
						Tl(187, '>'),
						yl(),
						Tl(188, '\n    '),
						vl(189, 'span', iv),
						Tl(190, '<'),
						vl(191, 'span', av),
						Tl(192, 'li'),
						yl(),
						Tl(193, '>'),
						yl(),
						Tl(194, 'right'),
						vl(195, 'span', iv),
						Tl(196, '</'),
						vl(197, 'span', av),
						Tl(198, 'li'),
						yl(),
						Tl(199, '>'),
						yl(),
						Tl(200, '\n    '),
						vl(201, 'span', iv),
						Tl(202, '<'),
						vl(203, 'span', av),
						Tl(204, 'li'),
						yl(),
						Tl(205, '>'),
						yl(),
						Tl(206, 'right'),
						vl(207, 'span', iv),
						Tl(208, '</'),
						vl(209, 'span', av),
						Tl(210, 'li'),
						yl(),
						Tl(211, '>'),
						yl(),
						Tl(212, '\n'),
						vl(213, 'span', iv),
						Tl(214, '</'),
						vl(215, 'span', av),
						Tl(216, 'ul'),
						yl(),
						Tl(217, '>'),
						yl(),
						Tl(218, '\n'),
						vl(219, 'span', iv),
						Tl(220, '<'),
						vl(221, 'span', av),
						Tl(222, 'ul'),
						yl(),
						Tl(223, ' '),
						vl(224, 'span', sv),
						Tl(225, 'class'),
						yl(),
						Tl(226, '='),
						vl(227, 'span', lv),
						Tl(228, '"col wrap-sa"'),
						yl(),
						Tl(229, '>'),
						yl(),
						Tl(230, '\n    '),
						vl(231, 'span', iv),
						Tl(232, '<'),
						vl(233, 'span', av),
						Tl(234, 'li'),
						yl(),
						Tl(235, '>'),
						yl(),
						Tl(236, 'space around'),
						vl(237, 'span', iv),
						Tl(238, '</'),
						vl(239, 'span', av),
						Tl(240, 'li'),
						yl(),
						Tl(241, '>'),
						yl(),
						Tl(242, '\n    '),
						vl(243, 'span', iv),
						Tl(244, '<'),
						vl(245, 'span', av),
						Tl(246, 'li'),
						yl(),
						Tl(247, '>'),
						yl(),
						Tl(248, 'space around'),
						vl(249, 'span', iv),
						Tl(250, '</'),
						vl(251, 'span', av),
						Tl(252, 'li'),
						yl(),
						Tl(253, '>'),
						yl(),
						Tl(254, '\n    '),
						vl(255, 'span', iv),
						Tl(256, '<'),
						vl(257, 'span', av),
						Tl(258, 'li'),
						yl(),
						Tl(259, '>'),
						yl(),
						Tl(260, 'space around'),
						vl(261, 'span', iv),
						Tl(262, '</'),
						vl(263, 'span', av),
						Tl(264, 'li'),
						yl(),
						Tl(265, '>'),
						yl(),
						Tl(266, '\n'),
						vl(267, 'span', iv),
						Tl(268, '</'),
						vl(269, 'span', av),
						Tl(270, 'ul'),
						yl(),
						Tl(271, '>'),
						yl(),
						Tl(272, '\n'),
						vl(273, 'span', iv),
						Tl(274, '<'),
						vl(275, 'span', av),
						Tl(276, 'ul'),
						yl(),
						Tl(277, ' '),
						vl(278, 'span', sv),
						Tl(279, 'class'),
						yl(),
						Tl(280, '='),
						vl(281, 'span', lv),
						Tl(282, '"col wrap-sb"'),
						yl(),
						Tl(283, '>'),
						yl(),
						Tl(284, '\n    '),
						vl(285, 'span', iv),
						Tl(286, '<'),
						vl(287, 'span', av),
						Tl(288, 'li'),
						yl(),
						Tl(289, '>'),
						yl(),
						Tl(290, 'space between'),
						vl(291, 'span', iv),
						Tl(292, '</'),
						vl(293, 'span', av),
						Tl(294, 'li'),
						yl(),
						Tl(295, '>'),
						yl(),
						Tl(296, '\n    '),
						vl(297, 'span', iv),
						Tl(298, '<'),
						vl(299, 'span', av),
						Tl(300, 'li'),
						yl(),
						Tl(301, '>'),
						yl(),
						Tl(302, 'space between'),
						vl(303, 'span', iv),
						Tl(304, '</'),
						vl(305, 'span', av),
						Tl(306, 'li'),
						yl(),
						Tl(307, '>'),
						yl(),
						Tl(308, '\n    '),
						vl(309, 'span', iv),
						Tl(310, '<'),
						vl(311, 'span', av),
						Tl(312, 'li'),
						yl(),
						Tl(313, '>'),
						yl(),
						Tl(314, 'space between'),
						vl(315, 'span', iv),
						Tl(316, '</'),
						vl(317, 'span', av),
						Tl(318, 'li'),
						yl(),
						Tl(319, '>'),
						yl(),
						Tl(320, '\n'),
						vl(321, 'span', iv),
						Tl(322, '</'),
						vl(323, 'span', av),
						Tl(324, 'ul'),
						yl(),
						Tl(325, '>'),
						yl(),
						Tl(326, '\n'),
						vl(327, 'span', iv),
						Tl(328, '<'),
						vl(329, 'span', av),
						Tl(330, 'ul'),
						yl(),
						Tl(331, ' '),
						vl(332, 'span', sv),
						Tl(333, 'class'),
						yl(),
						Tl(334, '='),
						vl(335, 'span', lv),
						Tl(336, '"col wrap-st"'),
						yl(),
						Tl(337, '>'),
						yl(),
						Tl(338, '\n    '),
						vl(339, 'span', iv),
						Tl(340, '<'),
						vl(341, 'span', av),
						Tl(342, 'li'),
						yl(),
						Tl(343, '>'),
						yl(),
						Tl(344, 'stretch'),
						vl(345, 'span', iv),
						Tl(346, '</'),
						vl(347, 'span', av),
						Tl(348, 'li'),
						yl(),
						Tl(349, '>'),
						yl(),
						Tl(350, '\n    '),
						vl(351, 'span', iv),
						Tl(352, '<'),
						vl(353, 'span', av),
						Tl(354, 'li'),
						yl(),
						Tl(355, '>'),
						yl(),
						Tl(356, 'stretch'),
						vl(357, 'span', iv),
						Tl(358, '</'),
						vl(359, 'span', av),
						Tl(360, 'li'),
						yl(),
						Tl(361, '>'),
						yl(),
						Tl(362, '\n    '),
						vl(363, 'span', iv),
						Tl(364, '<'),
						vl(365, 'span', av),
						Tl(366, 'li'),
						yl(),
						Tl(367, '>'),
						yl(),
						Tl(368, 'stretch'),
						vl(369, 'span', iv),
						Tl(370, '</'),
						vl(371, 'span', av),
						Tl(372, 'li'),
						yl(),
						Tl(373, '>'),
						yl(),
						Tl(374, '\n'),
						vl(375, 'span', iv),
						Tl(376, '</'),
						vl(377, 'span', av),
						Tl(378, 'ul'),
						yl(),
						Tl(379, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Qy = [1, 'row', 'wrap-m'],
				Yy = [1, 'row', 'wrap-t'],
				Jy = [1, 'row', 'wrap-b'],
				Ky = [1, 'row', 'wrap-sa'],
				Xy = [1, 'row', 'wrap-sb'],
				$y = [1, 'row', 'wrap-st'];
			function tw(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Wrap Row'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use a '),
						vl(6, 'code'),
						Tl(7, '.wrap-[m || t || b || sa || sb || st]'),
						yl(),
						Tl(8, ' class to align multi-row items in a '),
						vl(9, 'code'),
						Tl(10, '.row'),
						yl(),
						Tl(11, ' flex container.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'ul', Qy),
						vl(14, 'li'),
						Tl(15, 'middle'),
						yl(),
						vl(16, 'li'),
						Tl(17, 'middle'),
						yl(),
						vl(18, 'li'),
						Tl(19, 'middle'),
						yl(),
						yl(),
						vl(20, 'ul', Yy),
						vl(21, 'li'),
						Tl(22, 'top (default)'),
						yl(),
						vl(23, 'li'),
						Tl(24, 'top (default)'),
						yl(),
						vl(25, 'li'),
						Tl(26, 'top (default)'),
						yl(),
						yl(),
						vl(27, 'ul', Jy),
						vl(28, 'li'),
						Tl(29, 'bottom'),
						yl(),
						vl(30, 'li'),
						Tl(31, 'bottom'),
						yl(),
						vl(32, 'li'),
						Tl(33, 'bottom'),
						yl(),
						yl(),
						vl(34, 'ul', Ky),
						vl(35, 'li'),
						Tl(36, 'space around'),
						yl(),
						vl(37, 'li'),
						Tl(38, 'space around'),
						yl(),
						vl(39, 'li'),
						Tl(40, 'space around'),
						yl(),
						yl(),
						vl(41, 'ul', Xy),
						vl(42, 'li'),
						Tl(43, 'space between'),
						yl(),
						vl(44, 'li'),
						Tl(45, 'space between'),
						yl(),
						vl(46, 'li'),
						Tl(47, 'space between'),
						yl(),
						yl(),
						vl(48, 'ul', $y),
						vl(49, 'li'),
						Tl(50, 'stretch'),
						yl(),
						vl(51, 'li'),
						Tl(52, 'stretch'),
						yl(),
						vl(53, 'li'),
						Tl(54, 'stretch'),
						yl(),
						yl(),
						yl(),
						vl(55, 'figure'),
						vl(56, 'pre', ov),
						vl(57, 'span', iv),
						Tl(58, '<'),
						vl(59, 'span', av),
						Tl(60, 'ul'),
						yl(),
						Tl(61, ' '),
						vl(62, 'span', sv),
						Tl(63, 'class'),
						yl(),
						Tl(64, '='),
						vl(65, 'span', lv),
						Tl(66, '"row wrap-m"'),
						yl(),
						Tl(67, '>'),
						yl(),
						Tl(68, '\n    '),
						vl(69, 'span', iv),
						Tl(70, '<'),
						vl(71, 'span', av),
						Tl(72, 'li'),
						yl(),
						Tl(73, '>'),
						yl(),
						Tl(74, 'middle'),
						vl(75, 'span', iv),
						Tl(76, '</'),
						vl(77, 'span', av),
						Tl(78, 'li'),
						yl(),
						Tl(79, '>'),
						yl(),
						Tl(80, '\n    '),
						vl(81, 'span', iv),
						Tl(82, '<'),
						vl(83, 'span', av),
						Tl(84, 'li'),
						yl(),
						Tl(85, '>'),
						yl(),
						Tl(86, 'middle'),
						vl(87, 'span', iv),
						Tl(88, '</'),
						vl(89, 'span', av),
						Tl(90, 'li'),
						yl(),
						Tl(91, '>'),
						yl(),
						Tl(92, '\n    '),
						vl(93, 'span', iv),
						Tl(94, '<'),
						vl(95, 'span', av),
						Tl(96, 'li'),
						yl(),
						Tl(97, '>'),
						yl(),
						Tl(98, 'middle'),
						vl(99, 'span', iv),
						Tl(100, '</'),
						vl(101, 'span', av),
						Tl(102, 'li'),
						yl(),
						Tl(103, '>'),
						yl(),
						Tl(104, '\n'),
						vl(105, 'span', iv),
						Tl(106, '</'),
						vl(107, 'span', av),
						Tl(108, 'ul'),
						yl(),
						Tl(109, '>'),
						yl(),
						Tl(110, '\n'),
						vl(111, 'span', iv),
						Tl(112, '<'),
						vl(113, 'span', av),
						Tl(114, 'ul'),
						yl(),
						Tl(115, ' '),
						vl(116, 'span', sv),
						Tl(117, 'class'),
						yl(),
						Tl(118, '='),
						vl(119, 'span', lv),
						Tl(120, '"row wrap-t"'),
						yl(),
						Tl(121, '>'),
						yl(),
						Tl(122, '\n    '),
						vl(123, 'span', iv),
						Tl(124, '<'),
						vl(125, 'span', av),
						Tl(126, 'li'),
						yl(),
						Tl(127, '>'),
						yl(),
						Tl(128, 'top (default)'),
						vl(129, 'span', iv),
						Tl(130, '</'),
						vl(131, 'span', av),
						Tl(132, 'li'),
						yl(),
						Tl(133, '>'),
						yl(),
						Tl(134, '\n    '),
						vl(135, 'span', iv),
						Tl(136, '<'),
						vl(137, 'span', av),
						Tl(138, 'li'),
						yl(),
						Tl(139, '>'),
						yl(),
						Tl(140, 'top (default)'),
						vl(141, 'span', iv),
						Tl(142, '</'),
						vl(143, 'span', av),
						Tl(144, 'li'),
						yl(),
						Tl(145, '>'),
						yl(),
						Tl(146, '\n    '),
						vl(147, 'span', iv),
						Tl(148, '<'),
						vl(149, 'span', av),
						Tl(150, 'li'),
						yl(),
						Tl(151, '>'),
						yl(),
						Tl(152, 'top (default)'),
						vl(153, 'span', iv),
						Tl(154, '</'),
						vl(155, 'span', av),
						Tl(156, 'li'),
						yl(),
						Tl(157, '>'),
						yl(),
						Tl(158, '\n'),
						vl(159, 'span', iv),
						Tl(160, '</'),
						vl(161, 'span', av),
						Tl(162, 'ul'),
						yl(),
						Tl(163, '>'),
						yl(),
						Tl(164, '\n'),
						vl(165, 'span', iv),
						Tl(166, '<'),
						vl(167, 'span', av),
						Tl(168, 'ul'),
						yl(),
						Tl(169, ' '),
						vl(170, 'span', sv),
						Tl(171, 'class'),
						yl(),
						Tl(172, '='),
						vl(173, 'span', lv),
						Tl(174, '"row wrap-b"'),
						yl(),
						Tl(175, '>'),
						yl(),
						Tl(176, '\n    '),
						vl(177, 'span', iv),
						Tl(178, '<'),
						vl(179, 'span', av),
						Tl(180, 'li'),
						yl(),
						Tl(181, '>'),
						yl(),
						Tl(182, 'bottom'),
						vl(183, 'span', iv),
						Tl(184, '</'),
						vl(185, 'span', av),
						Tl(186, 'li'),
						yl(),
						Tl(187, '>'),
						yl(),
						Tl(188, '\n    '),
						vl(189, 'span', iv),
						Tl(190, '<'),
						vl(191, 'span', av),
						Tl(192, 'li'),
						yl(),
						Tl(193, '>'),
						yl(),
						Tl(194, 'bottom'),
						vl(195, 'span', iv),
						Tl(196, '</'),
						vl(197, 'span', av),
						Tl(198, 'li'),
						yl(),
						Tl(199, '>'),
						yl(),
						Tl(200, '\n    '),
						vl(201, 'span', iv),
						Tl(202, '<'),
						vl(203, 'span', av),
						Tl(204, 'li'),
						yl(),
						Tl(205, '>'),
						yl(),
						Tl(206, 'bottom'),
						vl(207, 'span', iv),
						Tl(208, '</'),
						vl(209, 'span', av),
						Tl(210, 'li'),
						yl(),
						Tl(211, '>'),
						yl(),
						Tl(212, '\n'),
						vl(213, 'span', iv),
						Tl(214, '</'),
						vl(215, 'span', av),
						Tl(216, 'ul'),
						yl(),
						Tl(217, '>'),
						yl(),
						Tl(218, '\n'),
						vl(219, 'span', iv),
						Tl(220, '<'),
						vl(221, 'span', av),
						Tl(222, 'ul'),
						yl(),
						Tl(223, ' '),
						vl(224, 'span', sv),
						Tl(225, 'class'),
						yl(),
						Tl(226, '='),
						vl(227, 'span', lv),
						Tl(228, '"row wrap-sa"'),
						yl(),
						Tl(229, '>'),
						yl(),
						Tl(230, '\n    '),
						vl(231, 'span', iv),
						Tl(232, '<'),
						vl(233, 'span', av),
						Tl(234, 'li'),
						yl(),
						Tl(235, '>'),
						yl(),
						Tl(236, 'space around'),
						vl(237, 'span', iv),
						Tl(238, '</'),
						vl(239, 'span', av),
						Tl(240, 'li'),
						yl(),
						Tl(241, '>'),
						yl(),
						Tl(242, '\n    '),
						vl(243, 'span', iv),
						Tl(244, '<'),
						vl(245, 'span', av),
						Tl(246, 'li'),
						yl(),
						Tl(247, '>'),
						yl(),
						Tl(248, 'space around'),
						vl(249, 'span', iv),
						Tl(250, '</'),
						vl(251, 'span', av),
						Tl(252, 'li'),
						yl(),
						Tl(253, '>'),
						yl(),
						Tl(254, '\n    '),
						vl(255, 'span', iv),
						Tl(256, '<'),
						vl(257, 'span', av),
						Tl(258, 'li'),
						yl(),
						Tl(259, '>'),
						yl(),
						Tl(260, 'space around'),
						vl(261, 'span', iv),
						Tl(262, '</'),
						vl(263, 'span', av),
						Tl(264, 'li'),
						yl(),
						Tl(265, '>'),
						yl(),
						Tl(266, '\n'),
						vl(267, 'span', iv),
						Tl(268, '</'),
						vl(269, 'span', av),
						Tl(270, 'ul'),
						yl(),
						Tl(271, '>'),
						yl(),
						Tl(272, '\n'),
						vl(273, 'span', iv),
						Tl(274, '<'),
						vl(275, 'span', av),
						Tl(276, 'ul'),
						yl(),
						Tl(277, ' '),
						vl(278, 'span', sv),
						Tl(279, 'class'),
						yl(),
						Tl(280, '='),
						vl(281, 'span', lv),
						Tl(282, '"row wrap-sb"'),
						yl(),
						Tl(283, '>'),
						yl(),
						Tl(284, '\n    '),
						vl(285, 'span', iv),
						Tl(286, '<'),
						vl(287, 'span', av),
						Tl(288, 'li'),
						yl(),
						Tl(289, '>'),
						yl(),
						Tl(290, 'space between'),
						vl(291, 'span', iv),
						Tl(292, '</'),
						vl(293, 'span', av),
						Tl(294, 'li'),
						yl(),
						Tl(295, '>'),
						yl(),
						Tl(296, '\n    '),
						vl(297, 'span', iv),
						Tl(298, '<'),
						vl(299, 'span', av),
						Tl(300, 'li'),
						yl(),
						Tl(301, '>'),
						yl(),
						Tl(302, 'space between'),
						vl(303, 'span', iv),
						Tl(304, '</'),
						vl(305, 'span', av),
						Tl(306, 'li'),
						yl(),
						Tl(307, '>'),
						yl(),
						Tl(308, '\n    '),
						vl(309, 'span', iv),
						Tl(310, '<'),
						vl(311, 'span', av),
						Tl(312, 'li'),
						yl(),
						Tl(313, '>'),
						yl(),
						Tl(314, 'space between'),
						vl(315, 'span', iv),
						Tl(316, '</'),
						vl(317, 'span', av),
						Tl(318, 'li'),
						yl(),
						Tl(319, '>'),
						yl(),
						Tl(320, '\n'),
						vl(321, 'span', iv),
						Tl(322, '</'),
						vl(323, 'span', av),
						Tl(324, 'ul'),
						yl(),
						Tl(325, '>'),
						yl(),
						Tl(326, '\n'),
						vl(327, 'span', iv),
						Tl(328, '<'),
						vl(329, 'span', av),
						Tl(330, 'ul'),
						yl(),
						Tl(331, ' '),
						vl(332, 'span', sv),
						Tl(333, 'class'),
						yl(),
						Tl(334, '='),
						vl(335, 'span', lv),
						Tl(336, '"row wrap-st"'),
						yl(),
						Tl(337, '>'),
						yl(),
						Tl(338, '\n    '),
						vl(339, 'span', iv),
						Tl(340, '<'),
						vl(341, 'span', av),
						Tl(342, 'li'),
						yl(),
						Tl(343, '>'),
						yl(),
						Tl(344, 'stretch'),
						vl(345, 'span', iv),
						Tl(346, '</'),
						vl(347, 'span', av),
						Tl(348, 'li'),
						yl(),
						Tl(349, '>'),
						yl(),
						Tl(350, '\n    '),
						vl(351, 'span', iv),
						Tl(352, '<'),
						vl(353, 'span', av),
						Tl(354, 'li'),
						yl(),
						Tl(355, '>'),
						yl(),
						Tl(356, 'stretch'),
						vl(357, 'span', iv),
						Tl(358, '</'),
						vl(359, 'span', av),
						Tl(360, 'li'),
						yl(),
						Tl(361, '>'),
						yl(),
						Tl(362, '\n    '),
						vl(363, 'span', iv),
						Tl(364, '<'),
						vl(365, 'span', av),
						Tl(366, 'li'),
						yl(),
						Tl(367, '>'),
						yl(),
						Tl(368, 'stretch'),
						vl(369, 'span', iv),
						Tl(370, '</'),
						vl(371, 'span', av),
						Tl(372, 'li'),
						yl(),
						Tl(373, '>'),
						yl(),
						Tl(374, '\n'),
						vl(375, 'span', iv),
						Tl(376, '</'),
						vl(377, 'span', av),
						Tl(378, 'ul'),
						yl(),
						Tl(379, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function ew(t, e) {
				1 & t &&
					(vl(0, 'article', Kb),
					vl(1, 'section', Xb),
					vl(2, 'p'),
					Tl(3, 'Forms are styled with '),
					vl(4, 'code'),
					Tl(5, '.form-group'),
					yl(),
					Tl(6, ', '),
					vl(7, 'code'),
					Tl(8, '.field-group'),
					yl(),
					Tl(9, ', '),
					vl(10, 'code'),
					Tl(11, '.form-label'),
					yl(),
					Tl(12, ', and '),
					vl(13, 'code'),
					Tl(14, '.form-field'),
					yl(),
					Tl(15, ' classes.'),
					yl(),
					yl(),
					yl());
			}
			var nw = [1, 'form-group'],
				rw = [1, 'field-group'],
				ow = ['for', 'name', 1, 'form-label'],
				iw = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 1, 'form-field'],
				aw = [1, 'form-label'],
				sw = [1, 'radio-group'],
				lw = ['type', 'radio', 'name', 'agree', 'id', 'yes', 1, 'form-field'],
				uw = ['for', 'yes', 1, 'form-label'],
				cw = ['type', 'radio', 'name', 'agree', 'id', 'no', 1, 'form-field'],
				pw = ['for', 'no', 1, 'form-label'],
				fw = [1, 'checkbox-group'],
				dw = ['type', 'checkbox', 'name', 'color', 'id', 'blue', 1, 'form-field'],
				hw = ['for', 'blue', 1, 'form-label'],
				gw = ['type', 'checkbox', 'name', 'color', 'id', 'green', 1, 'form-field'],
				mw = ['for', 'green', 1, 'form-label'],
				bw = ['type', 'checkbox', 'name', 'color', 'id', 'red', 1, 'form-field'],
				vw = ['for', 'red', 1, 'form-label'],
				yw = ['type', 'checkbox', 'name', 'color', 'id', 'yellow', 1, 'form-field'],
				ww = ['for', 'yellow', 1, 'form-label'];
			function _w(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Checkbox'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Checkboxes and radio buttons are grouped with a '),
						vl(6, 'code'),
						Tl(7, '.*-group'),
						yl(),
						Tl(8, ' class on a parent container.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'form'),
						vl(11, 'ul', nw),
						vl(12, 'li', rw),
						vl(13, 'label', ow),
						Tl(14, 'Name'),
						yl(),
						wl(15, 'input', iw),
						yl(),
						vl(16, 'li', rw),
						vl(17, 'p', aw),
						Tl(18, 'Agree'),
						yl(),
						vl(19, 'ul', sw),
						vl(20, 'li', rw),
						wl(21, 'input', lw),
						vl(22, 'label', uw),
						Tl(23, 'Yes'),
						yl(),
						yl(),
						vl(24, 'li', rw),
						wl(25, 'input', cw),
						vl(26, 'label', pw),
						Tl(27, 'No'),
						yl(),
						yl(),
						yl(),
						yl(),
						vl(28, 'li', rw),
						vl(29, 'p', aw),
						Tl(30, 'Color'),
						yl(),
						vl(31, 'ul', fw),
						vl(32, 'li', rw),
						wl(33, 'input', dw),
						vl(34, 'label', hw),
						Tl(35, 'Blue'),
						yl(),
						yl(),
						vl(36, 'li', rw),
						wl(37, 'input', gw),
						vl(38, 'label', mw),
						Tl(39, 'Green'),
						yl(),
						yl(),
						vl(40, 'li', rw),
						wl(41, 'input', bw),
						vl(42, 'label', vw),
						Tl(43, 'Red'),
						yl(),
						yl(),
						vl(44, 'li', rw),
						wl(45, 'input', yw),
						vl(46, 'label', ww),
						Tl(47, 'Yellow'),
						yl(),
						yl(),
						yl(),
						yl(),
						yl(),
						yl(),
						yl(),
						vl(48, 'figure'),
						vl(49, 'pre', ov),
						Tl(50, '<'),
						vl(51, 'span', Pv),
						Tl(52, 'form'),
						yl(),
						Tl(53, '>\n    <ul '),
						vl(54, 'span', Pv),
						Tl(55, 'class'),
						yl(),
						Tl(56, '='),
						vl(57, 'span', Ev),
						Tl(58, '"form-group"'),
						yl(),
						Tl(59, '>\n        <'),
						vl(60, 'span', Pv),
						Tl(61, 'li'),
						yl(),
						Tl(62, ' '),
						vl(63, 'span', Pv),
						Tl(64, 'class'),
						yl(),
						Tl(65, '='),
						vl(66, 'span', Ev),
						Tl(67, '"field-group"'),
						yl(),
						Tl(68, '>\n            <'),
						vl(69, 'span', Pv),
						Tl(70, 'label'),
						yl(),
						Tl(71, ' '),
						vl(72, 'span', Pv),
						Tl(73, 'class'),
						yl(),
						Tl(74, '='),
						vl(75, 'span', Ev),
						Tl(76, '"form-label"'),
						yl(),
						Tl(77, ' '),
						vl(78, 'span', Pv),
						Tl(79, 'for'),
						yl(),
						Tl(80, '='),
						vl(81, 'span', Ev),
						Tl(82, '"name"'),
						yl(),
						Tl(83, '>Name</'),
						vl(84, 'span', Pv),
						Tl(85, 'label'),
						yl(),
						Tl(86, '>\n            <'),
						vl(87, 'span', Pv),
						Tl(88, 'input'),
						yl(),
						Tl(89, ' '),
						vl(90, 'span', Pv),
						Tl(91, 'class'),
						yl(),
						Tl(92, '='),
						vl(93, 'span', Ev),
						Tl(94, '"form-field"'),
						yl(),
						Tl(95, ' '),
						vl(96, 'span', Pv),
						Tl(97, 'type'),
						yl(),
						Tl(98, '='),
						vl(99, 'span', Ev),
						Tl(100, '"text"'),
						yl(),
						Tl(101, ' id='),
						vl(102, 'span', Ev),
						Tl(103, '"name"'),
						yl(),
						Tl(104, ' name='),
						vl(105, 'span', Ev),
						Tl(106, '"name"'),
						yl(),
						Tl(107, ' placeholder='),
						vl(108, 'span', Ev),
						Tl(109, '"Enter name"'),
						yl(),
						Tl(110, '>\n        </'),
						vl(111, 'span', Pv),
						Tl(112, 'li'),
						yl(),
						Tl(113, '>\n        <'),
						vl(114, 'span', Pv),
						Tl(115, 'li'),
						yl(),
						Tl(116, ' '),
						vl(117, 'span', Pv),
						Tl(118, 'class'),
						yl(),
						Tl(119, '='),
						vl(120, 'span', Ev),
						Tl(121, '"field-group"'),
						yl(),
						Tl(122, '>\n            <p '),
						vl(123, 'span', Pv),
						Tl(124, 'class'),
						yl(),
						Tl(125, '='),
						vl(126, 'span', Ev),
						Tl(127, '"form-label"'),
						yl(),
						Tl(128, '>Agree</p>\n            <ul '),
						vl(129, 'span', Pv),
						Tl(130, 'class'),
						yl(),
						Tl(131, '='),
						vl(132, 'span', Ev),
						Tl(133, '"radio-group"'),
						yl(),
						Tl(134, '>\n                <'),
						vl(135, 'span', Pv),
						Tl(136, 'li'),
						yl(),
						Tl(137, ' '),
						vl(138, 'span', Pv),
						Tl(139, 'class'),
						yl(),
						Tl(140, '='),
						vl(141, 'span', Ev),
						Tl(142, '"field-group"'),
						yl(),
						Tl(143, '>\n                    <'),
						vl(144, 'span', Pv),
						Tl(145, 'input'),
						yl(),
						Tl(146, ' '),
						vl(147, 'span', Pv),
						Tl(148, 'class'),
						yl(),
						Tl(149, '='),
						vl(150, 'span', Ev),
						Tl(151, '"form-field"'),
						yl(),
						Tl(152, ' '),
						vl(153, 'span', Pv),
						Tl(154, 'type'),
						yl(),
						Tl(155, '='),
						vl(156, 'span', Ev),
						Tl(157, '"radio"'),
						yl(),
						Tl(158, ' name='),
						vl(159, 'span', Ev),
						Tl(160, '"agree"'),
						yl(),
						Tl(161, ' id='),
						vl(162, 'span', Ev),
						Tl(163, '"yes"'),
						yl(),
						Tl(164, '>\n                    <'),
						vl(165, 'span', Pv),
						Tl(166, 'label'),
						yl(),
						Tl(167, ' '),
						vl(168, 'span', Pv),
						Tl(169, 'class'),
						yl(),
						Tl(170, '='),
						vl(171, 'span', Ev),
						Tl(172, '"form-label"'),
						yl(),
						Tl(173, ' '),
						vl(174, 'span', Pv),
						Tl(175, 'for'),
						yl(),
						Tl(176, '='),
						vl(177, 'span', Ev),
						Tl(178, '"yes"'),
						yl(),
						Tl(179, '>Yes</'),
						vl(180, 'span', Pv),
						Tl(181, 'label'),
						yl(),
						Tl(182, '>\n                </'),
						vl(183, 'span', Pv),
						Tl(184, 'li'),
						yl(),
						Tl(185, '>\n                <'),
						vl(186, 'span', Pv),
						Tl(187, 'li'),
						yl(),
						Tl(188, ' '),
						vl(189, 'span', Pv),
						Tl(190, 'class'),
						yl(),
						Tl(191, '='),
						vl(192, 'span', Ev),
						Tl(193, '"field-group"'),
						yl(),
						Tl(194, '>\n                    <'),
						vl(195, 'span', Pv),
						Tl(196, 'input'),
						yl(),
						Tl(197, ' '),
						vl(198, 'span', Pv),
						Tl(199, 'class'),
						yl(),
						Tl(200, '='),
						vl(201, 'span', Ev),
						Tl(202, '"form-field"'),
						yl(),
						Tl(203, ' '),
						vl(204, 'span', Pv),
						Tl(205, 'type'),
						yl(),
						Tl(206, '='),
						vl(207, 'span', Ev),
						Tl(208, '"radio"'),
						yl(),
						Tl(209, ' name='),
						vl(210, 'span', Ev),
						Tl(211, '"agree"'),
						yl(),
						Tl(212, ' id='),
						vl(213, 'span', Ev),
						Tl(214, '"no"'),
						yl(),
						Tl(215, '>\n                    <'),
						vl(216, 'span', Pv),
						Tl(217, 'label'),
						yl(),
						Tl(218, ' '),
						vl(219, 'span', Pv),
						Tl(220, 'class'),
						yl(),
						Tl(221, '='),
						vl(222, 'span', Ev),
						Tl(223, '"form-label"'),
						yl(),
						Tl(224, ' '),
						vl(225, 'span', Pv),
						Tl(226, 'for'),
						yl(),
						Tl(227, '='),
						vl(228, 'span', Ev),
						Tl(229, '"no"'),
						yl(),
						Tl(230, '>'),
						vl(231, 'span', Pv),
						Tl(232, 'No'),
						yl(),
						Tl(233, '</'),
						vl(234, 'span', Pv),
						Tl(235, 'label'),
						yl(),
						Tl(236, '>\n                </'),
						vl(237, 'span', Pv),
						Tl(238, 'li'),
						yl(),
						Tl(239, '>\n            </ul>\n        </'),
						vl(240, 'span', Pv),
						Tl(241, 'li'),
						yl(),
						Tl(242, '>\n        <'),
						vl(243, 'span', Pv),
						Tl(244, 'li'),
						yl(),
						Tl(245, ' '),
						vl(246, 'span', Pv),
						Tl(247, 'class'),
						yl(),
						Tl(248, '='),
						vl(249, 'span', Ev),
						Tl(250, '"field-group"'),
						yl(),
						Tl(251, '>\n            <p '),
						vl(252, 'span', Pv),
						Tl(253, 'class'),
						yl(),
						Tl(254, '='),
						vl(255, 'span', Ev),
						Tl(256, '"form-label"'),
						yl(),
						Tl(257, '>Color</p>\n            <ul '),
						vl(258, 'span', Pv),
						Tl(259, 'class'),
						yl(),
						Tl(260, '='),
						vl(261, 'span', Ev),
						Tl(262, '"checkbox-group"'),
						yl(),
						Tl(263, '>\n                <'),
						vl(264, 'span', Pv),
						Tl(265, 'li'),
						yl(),
						Tl(266, ' '),
						vl(267, 'span', Pv),
						Tl(268, 'class'),
						yl(),
						Tl(269, '='),
						vl(270, 'span', Ev),
						Tl(271, '"field-group"'),
						yl(),
						Tl(272, '>\n                    <'),
						vl(273, 'span', Pv),
						Tl(274, 'input'),
						yl(),
						Tl(275, ' '),
						vl(276, 'span', Pv),
						Tl(277, 'class'),
						yl(),
						Tl(278, '='),
						vl(279, 'span', Ev),
						Tl(280, '"form-field"'),
						yl(),
						Tl(281, ' '),
						vl(282, 'span', Pv),
						Tl(283, 'type'),
						yl(),
						Tl(284, '='),
						vl(285, 'span', Ev),
						Tl(286, '"checkbox"'),
						yl(),
						Tl(287, ' name='),
						vl(288, 'span', Ev),
						Tl(289, '"color"'),
						yl(),
						Tl(290, ' id='),
						vl(291, 'span', Ev),
						Tl(292, '"blue"'),
						yl(),
						Tl(293, '>\n                    <'),
						vl(294, 'span', Pv),
						Tl(295, 'label'),
						yl(),
						Tl(296, ' '),
						vl(297, 'span', Pv),
						Tl(298, 'class'),
						yl(),
						Tl(299, '='),
						vl(300, 'span', Ev),
						Tl(301, '"form-label"'),
						yl(),
						Tl(302, ' '),
						vl(303, 'span', Pv),
						Tl(304, 'for'),
						yl(),
						Tl(305, '='),
						vl(306, 'span', Ev),
						Tl(307, '"blue"'),
						yl(),
						Tl(308, '>Blue</'),
						vl(309, 'span', Pv),
						Tl(310, 'label'),
						yl(),
						Tl(311, '>\n                </'),
						vl(312, 'span', Pv),
						Tl(313, 'li'),
						yl(),
						Tl(314, '>\n                <'),
						vl(315, 'span', Pv),
						Tl(316, 'li'),
						yl(),
						Tl(317, ' '),
						vl(318, 'span', Pv),
						Tl(319, 'class'),
						yl(),
						Tl(320, '='),
						vl(321, 'span', Ev),
						Tl(322, '"field-group"'),
						yl(),
						Tl(323, '>\n                    <'),
						vl(324, 'span', Pv),
						Tl(325, 'input'),
						yl(),
						Tl(326, ' '),
						vl(327, 'span', Pv),
						Tl(328, 'class'),
						yl(),
						Tl(329, '='),
						vl(330, 'span', Ev),
						Tl(331, '"form-field"'),
						yl(),
						Tl(332, ' '),
						vl(333, 'span', Pv),
						Tl(334, 'type'),
						yl(),
						Tl(335, '='),
						vl(336, 'span', Ev),
						Tl(337, '"checkbox"'),
						yl(),
						Tl(338, ' name='),
						vl(339, 'span', Ev),
						Tl(340, '"color"'),
						yl(),
						Tl(341, ' id='),
						vl(342, 'span', Ev),
						Tl(343, '"green"'),
						yl(),
						Tl(344, '>\n                    <'),
						vl(345, 'span', Pv),
						Tl(346, 'label'),
						yl(),
						Tl(347, ' '),
						vl(348, 'span', Pv),
						Tl(349, 'class'),
						yl(),
						Tl(350, '='),
						vl(351, 'span', Ev),
						Tl(352, '"form-label"'),
						yl(),
						Tl(353, ' '),
						vl(354, 'span', Pv),
						Tl(355, 'for'),
						yl(),
						Tl(356, '='),
						vl(357, 'span', Ev),
						Tl(358, '"green"'),
						yl(),
						Tl(359, '>Green</'),
						vl(360, 'span', Pv),
						Tl(361, 'label'),
						yl(),
						Tl(362, '>\n                </'),
						vl(363, 'span', Pv),
						Tl(364, 'li'),
						yl(),
						Tl(365, '>\n                <'),
						vl(366, 'span', Pv),
						Tl(367, 'li'),
						yl(),
						Tl(368, ' '),
						vl(369, 'span', Pv),
						Tl(370, 'class'),
						yl(),
						Tl(371, '='),
						vl(372, 'span', Ev),
						Tl(373, '"field-group"'),
						yl(),
						Tl(374, '>\n                    <'),
						vl(375, 'span', Pv),
						Tl(376, 'input'),
						yl(),
						Tl(377, ' '),
						vl(378, 'span', Pv),
						Tl(379, 'class'),
						yl(),
						Tl(380, '='),
						vl(381, 'span', Ev),
						Tl(382, '"form-field"'),
						yl(),
						Tl(383, ' '),
						vl(384, 'span', Pv),
						Tl(385, 'type'),
						yl(),
						Tl(386, '='),
						vl(387, 'span', Ev),
						Tl(388, '"checkbox"'),
						yl(),
						Tl(389, ' name='),
						vl(390, 'span', Ev),
						Tl(391, '"color"'),
						yl(),
						Tl(392, ' id='),
						vl(393, 'span', Ev),
						Tl(394, '"red"'),
						yl(),
						Tl(395, '>\n                    <'),
						vl(396, 'span', Pv),
						Tl(397, 'label'),
						yl(),
						Tl(398, ' '),
						vl(399, 'span', Pv),
						Tl(400, 'class'),
						yl(),
						Tl(401, '='),
						vl(402, 'span', Ev),
						Tl(403, '"form-label"'),
						yl(),
						Tl(404, ' '),
						vl(405, 'span', Pv),
						Tl(406, 'for'),
						yl(),
						Tl(407, '='),
						vl(408, 'span', Ev),
						Tl(409, '"red"'),
						yl(),
						Tl(410, '>Red</'),
						vl(411, 'span', Pv),
						Tl(412, 'label'),
						yl(),
						Tl(413, '>\n                </'),
						vl(414, 'span', Pv),
						Tl(415, 'li'),
						yl(),
						Tl(416, '>\n                <'),
						vl(417, 'span', Pv),
						Tl(418, 'li'),
						yl(),
						Tl(419, ' '),
						vl(420, 'span', Pv),
						Tl(421, 'class'),
						yl(),
						Tl(422, '='),
						vl(423, 'span', Ev),
						Tl(424, '"field-group"'),
						yl(),
						Tl(425, '>\n                    <'),
						vl(426, 'span', Pv),
						Tl(427, 'input'),
						yl(),
						Tl(428, ' '),
						vl(429, 'span', Pv),
						Tl(430, 'class'),
						yl(),
						Tl(431, '='),
						vl(432, 'span', Ev),
						Tl(433, '"form-field"'),
						yl(),
						Tl(434, ' '),
						vl(435, 'span', Pv),
						Tl(436, 'type'),
						yl(),
						Tl(437, '='),
						vl(438, 'span', Ev),
						Tl(439, '"checkbox"'),
						yl(),
						Tl(440, ' name='),
						vl(441, 'span', Ev),
						Tl(442, '"color"'),
						yl(),
						Tl(443, ' id='),
						vl(444, 'span', Ev),
						Tl(445, '"yellow"'),
						yl(),
						Tl(446, '>\n                    <'),
						vl(447, 'span', Pv),
						Tl(448, 'label'),
						yl(),
						Tl(449, ' '),
						vl(450, 'span', Pv),
						Tl(451, 'class'),
						yl(),
						Tl(452, '='),
						vl(453, 'span', Ev),
						Tl(454, '"form-label"'),
						yl(),
						Tl(455, ' '),
						vl(456, 'span', Pv),
						Tl(457, 'for'),
						yl(),
						Tl(458, '='),
						vl(459, 'span', Ev),
						Tl(460, '"yellow"'),
						yl(),
						Tl(461, '>Yellow</'),
						vl(462, 'span', Pv),
						Tl(463, 'label'),
						yl(),
						Tl(464, '>\n                </'),
						vl(465, 'span', Pv),
						Tl(466, 'li'),
						yl(),
						Tl(467, '>\n            </ul>\n        </'),
						vl(468, 'span', Pv),
						Tl(469, 'li'),
						yl(),
						Tl(470, '>\n    </ul>    \n</'),
						vl(471, 'span', Pv),
						Tl(472, 'form'),
						yl(),
						Tl(473, '>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var xw = ['for', 'gender', 1, 'form-label'],
				Cw = ['name', 'gender', 'id', 'gender', 1, 'form-field'],
				kw = ['value', '1'],
				Sw = ['value', '2'],
				Pw = ['value', '3'],
				Ew = ['for', 'language', 1, 'form-label'],
				Ow = ['name', 'language', 'id', 'language', 'multiple', '', 1, 'form-field'],
				Iw = ['for', 'notes', 1, 'form-label'],
				Tw = ['name', 'notes', 'id', 'notes', 'placeholder', 'Enter notes', 1, 'form-field'];
			function Mw(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Field'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Form fields are styled with a '),
						vl(6, 'code'),
						Tl(7, '.form-field'),
						yl(),
						Tl(8, ' class. Different styles are applied based on the form field.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'form'),
						vl(11, 'ul', nw),
						vl(12, 'li', rw),
						vl(13, 'label', ow),
						Tl(14, 'Name'),
						yl(),
						wl(15, 'input', iw),
						yl(),
						vl(16, 'li', rw),
						vl(17, 'label', xw),
						Tl(18, 'Gender'),
						yl(),
						vl(19, 'select', Cw),
						vl(20, 'option', kw),
						Tl(21, 'Select'),
						yl(),
						vl(22, 'option', Sw),
						Tl(23, 'Female'),
						yl(),
						vl(24, 'option', Pw),
						Tl(25, 'Male'),
						yl(),
						yl(),
						yl(),
						vl(26, 'li', rw),
						vl(27, 'label', Ew),
						Tl(28, 'Language'),
						yl(),
						vl(29, 'select', Ow),
						vl(30, 'option'),
						Tl(31, 'English'),
						yl(),
						vl(32, 'option'),
						Tl(33, 'French'),
						yl(),
						vl(34, 'option'),
						Tl(35, 'Spanish'),
						yl(),
						yl(),
						yl(),
						vl(36, 'li', rw),
						vl(37, 'label', Iw),
						Tl(38, 'Notes'),
						yl(),
						wl(39, 'textarea', Tw),
						yl(),
						yl(),
						yl(),
						yl(),
						vl(40, 'figure'),
						vl(41, 'pre', ov),
						vl(42, 'span', iv),
						Tl(43, '<'),
						vl(44, 'span', av),
						Tl(45, 'form'),
						yl(),
						Tl(46, '>'),
						yl(),
						Tl(47, '\n    '),
						vl(48, 'span', iv),
						Tl(49, '<'),
						vl(50, 'span', av),
						Tl(51, 'ul'),
						yl(),
						Tl(52, ' '),
						vl(53, 'span', sv),
						Tl(54, 'class'),
						yl(),
						Tl(55, '='),
						vl(56, 'span', lv),
						Tl(57, '"form-group"'),
						yl(),
						Tl(58, '>'),
						yl(),
						Tl(59, '\n        '),
						vl(60, 'span', iv),
						Tl(61, '<'),
						vl(62, 'span', av),
						Tl(63, 'li'),
						yl(),
						Tl(64, ' '),
						vl(65, 'span', sv),
						Tl(66, 'class'),
						yl(),
						Tl(67, '='),
						vl(68, 'span', lv),
						Tl(69, '"field-group"'),
						yl(),
						Tl(70, '>'),
						yl(),
						Tl(71, '\n            '),
						vl(72, 'span', iv),
						Tl(73, '<'),
						vl(74, 'span', av),
						Tl(75, 'label'),
						yl(),
						Tl(76, ' '),
						vl(77, 'span', sv),
						Tl(78, 'class'),
						yl(),
						Tl(79, '='),
						vl(80, 'span', lv),
						Tl(81, '"form-label"'),
						yl(),
						Tl(82, ' '),
						vl(83, 'span', sv),
						Tl(84, 'for'),
						yl(),
						Tl(85, '='),
						vl(86, 'span', lv),
						Tl(87, '"name"'),
						yl(),
						Tl(88, '>'),
						yl(),
						Tl(89, 'Name'),
						vl(90, 'span', iv),
						Tl(91, '</'),
						vl(92, 'span', av),
						Tl(93, 'label'),
						yl(),
						Tl(94, '>'),
						yl(),
						Tl(95, '\n            '),
						vl(96, 'span', iv),
						Tl(97, '<'),
						vl(98, 'span', av),
						Tl(99, 'input'),
						yl(),
						Tl(100, ' '),
						vl(101, 'span', sv),
						Tl(102, 'class'),
						yl(),
						Tl(103, '='),
						vl(104, 'span', lv),
						Tl(105, '"form-field"'),
						yl(),
						Tl(106, ' '),
						vl(107, 'span', sv),
						Tl(108, 'type'),
						yl(),
						Tl(109, '='),
						vl(110, 'span', lv),
						Tl(111, '"text"'),
						yl(),
						Tl(112, ' '),
						vl(113, 'span', sv),
						Tl(114, 'id'),
						yl(),
						Tl(115, '='),
						vl(116, 'span', lv),
						Tl(117, '"name"'),
						yl(),
						Tl(118, ' '),
						vl(119, 'span', sv),
						Tl(120, 'name'),
						yl(),
						Tl(121, '='),
						vl(122, 'span', lv),
						Tl(123, '"name"'),
						yl(),
						Tl(124, ' '),
						vl(125, 'span', sv),
						Tl(126, 'placeholder'),
						yl(),
						Tl(127, '='),
						vl(128, 'span', lv),
						Tl(129, '"Enter name"'),
						yl(),
						Tl(130, '>'),
						yl(),
						Tl(131, '\n        '),
						vl(132, 'span', iv),
						Tl(133, '</'),
						vl(134, 'span', av),
						Tl(135, 'li'),
						yl(),
						Tl(136, '>'),
						yl(),
						Tl(137, '\n        '),
						vl(138, 'span', iv),
						Tl(139, '<'),
						vl(140, 'span', av),
						Tl(141, 'li'),
						yl(),
						Tl(142, ' '),
						vl(143, 'span', sv),
						Tl(144, 'class'),
						yl(),
						Tl(145, '='),
						vl(146, 'span', lv),
						Tl(147, '"field-group"'),
						yl(),
						Tl(148, '>'),
						yl(),
						Tl(149, '\n            '),
						vl(150, 'span', iv),
						Tl(151, '<'),
						vl(152, 'span', av),
						Tl(153, 'label'),
						yl(),
						Tl(154, ' '),
						vl(155, 'span', sv),
						Tl(156, 'class'),
						yl(),
						Tl(157, '='),
						vl(158, 'span', lv),
						Tl(159, '"form-label"'),
						yl(),
						Tl(160, ' '),
						vl(161, 'span', sv),
						Tl(162, 'for'),
						yl(),
						Tl(163, '='),
						vl(164, 'span', lv),
						Tl(165, '"gender"'),
						yl(),
						Tl(166, '>'),
						yl(),
						Tl(167, 'Gender'),
						vl(168, 'span', iv),
						Tl(169, '</'),
						vl(170, 'span', av),
						Tl(171, 'label'),
						yl(),
						Tl(172, '>'),
						yl(),
						Tl(173, '\n            '),
						vl(174, 'span', iv),
						Tl(175, '<'),
						vl(176, 'span', av),
						Tl(177, 'select'),
						yl(),
						Tl(178, ' '),
						vl(179, 'span', sv),
						Tl(180, 'class'),
						yl(),
						Tl(181, '='),
						vl(182, 'span', lv),
						Tl(183, '"form-field"'),
						yl(),
						Tl(184, ' '),
						vl(185, 'span', sv),
						Tl(186, 'name'),
						yl(),
						Tl(187, '='),
						vl(188, 'span', lv),
						Tl(189, '"gender"'),
						yl(),
						Tl(190, ' '),
						vl(191, 'span', sv),
						Tl(192, 'id'),
						yl(),
						Tl(193, '='),
						vl(194, 'span', lv),
						Tl(195, '"gender"'),
						yl(),
						Tl(196, '>'),
						yl(),
						Tl(197, '\n                '),
						vl(198, 'span', iv),
						Tl(199, '<'),
						vl(200, 'span', av),
						Tl(201, 'option'),
						yl(),
						Tl(202, ' '),
						vl(203, 'span', sv),
						Tl(204, 'value'),
						yl(),
						Tl(205, '='),
						vl(206, 'span', lv),
						Tl(207, '"1"'),
						yl(),
						Tl(208, '>'),
						yl(),
						Tl(209, 'Select'),
						vl(210, 'span', iv),
						Tl(211, '</'),
						vl(212, 'span', av),
						Tl(213, 'option'),
						yl(),
						Tl(214, '>'),
						yl(),
						Tl(215, '\n                '),
						vl(216, 'span', iv),
						Tl(217, '<'),
						vl(218, 'span', av),
						Tl(219, 'option'),
						yl(),
						Tl(220, ' '),
						vl(221, 'span', sv),
						Tl(222, 'value'),
						yl(),
						Tl(223, '='),
						vl(224, 'span', lv),
						Tl(225, '"2"'),
						yl(),
						Tl(226, '>'),
						yl(),
						Tl(227, 'Female'),
						vl(228, 'span', iv),
						Tl(229, '</'),
						vl(230, 'span', av),
						Tl(231, 'option'),
						yl(),
						Tl(232, '>'),
						yl(),
						Tl(233, '\n                '),
						vl(234, 'span', iv),
						Tl(235, '<'),
						vl(236, 'span', av),
						Tl(237, 'option'),
						yl(),
						Tl(238, ' '),
						vl(239, 'span', sv),
						Tl(240, 'value'),
						yl(),
						Tl(241, '='),
						vl(242, 'span', lv),
						Tl(243, '"3"'),
						yl(),
						Tl(244, '>'),
						yl(),
						Tl(245, 'Male'),
						vl(246, 'span', iv),
						Tl(247, '</'),
						vl(248, 'span', av),
						Tl(249, 'option'),
						yl(),
						Tl(250, '>'),
						yl(),
						Tl(251, '\n            '),
						vl(252, 'span', iv),
						Tl(253, '</'),
						vl(254, 'span', av),
						Tl(255, 'select'),
						yl(),
						Tl(256, '>'),
						yl(),
						Tl(257, '\n        '),
						vl(258, 'span', iv),
						Tl(259, '</'),
						vl(260, 'span', av),
						Tl(261, 'li'),
						yl(),
						Tl(262, '>'),
						yl(),
						Tl(263, '\n        '),
						vl(264, 'span', iv),
						Tl(265, '<'),
						vl(266, 'span', av),
						Tl(267, 'li'),
						yl(),
						Tl(268, ' '),
						vl(269, 'span', sv),
						Tl(270, 'class'),
						yl(),
						Tl(271, '='),
						vl(272, 'span', lv),
						Tl(273, '"field-group"'),
						yl(),
						Tl(274, '>'),
						yl(),
						Tl(275, '\n            '),
						vl(276, 'span', iv),
						Tl(277, '<'),
						vl(278, 'span', av),
						Tl(279, 'label'),
						yl(),
						Tl(280, ' '),
						vl(281, 'span', sv),
						Tl(282, 'class'),
						yl(),
						Tl(283, '='),
						vl(284, 'span', lv),
						Tl(285, '"form-label"'),
						yl(),
						Tl(286, ' '),
						vl(287, 'span', sv),
						Tl(288, 'for'),
						yl(),
						Tl(289, '='),
						vl(290, 'span', lv),
						Tl(291, '"language"'),
						yl(),
						Tl(292, '>'),
						yl(),
						Tl(293, 'Language'),
						vl(294, 'span', iv),
						Tl(295, '</'),
						vl(296, 'span', av),
						Tl(297, 'label'),
						yl(),
						Tl(298, '>'),
						yl(),
						Tl(299, '\n            '),
						vl(300, 'span', iv),
						Tl(301, '<'),
						vl(302, 'span', av),
						Tl(303, 'select'),
						yl(),
						Tl(304, ' '),
						vl(305, 'span', sv),
						Tl(306, 'class'),
						yl(),
						Tl(307, '='),
						vl(308, 'span', lv),
						Tl(309, '"form-field"'),
						yl(),
						Tl(310, ' '),
						vl(311, 'span', sv),
						Tl(312, 'name'),
						yl(),
						Tl(313, '='),
						vl(314, 'span', lv),
						Tl(315, '"language"'),
						yl(),
						Tl(316, ' '),
						vl(317, 'span', sv),
						Tl(318, 'id'),
						yl(),
						Tl(319, '='),
						vl(320, 'span', lv),
						Tl(321, '"language"'),
						yl(),
						Tl(322, ' '),
						vl(323, 'span', sv),
						Tl(324, 'multiple'),
						yl(),
						Tl(325, '>'),
						yl(),
						Tl(326, '\n                '),
						vl(327, 'span', iv),
						Tl(328, '<'),
						vl(329, 'span', av),
						Tl(330, 'option'),
						yl(),
						Tl(331, '>'),
						yl(),
						Tl(332, 'English'),
						vl(333, 'span', iv),
						Tl(334, '</'),
						vl(335, 'span', av),
						Tl(336, 'option'),
						yl(),
						Tl(337, '>'),
						yl(),
						Tl(338, '\n                '),
						vl(339, 'span', iv),
						Tl(340, '<'),
						vl(341, 'span', av),
						Tl(342, 'option'),
						yl(),
						Tl(343, '>'),
						yl(),
						Tl(344, 'French'),
						vl(345, 'span', iv),
						Tl(346, '</'),
						vl(347, 'span', av),
						Tl(348, 'option'),
						yl(),
						Tl(349, '>'),
						yl(),
						Tl(350, '\n                '),
						vl(351, 'span', iv),
						Tl(352, '<'),
						vl(353, 'span', av),
						Tl(354, 'option'),
						yl(),
						Tl(355, '>'),
						yl(),
						Tl(356, 'Spanish'),
						vl(357, 'span', iv),
						Tl(358, '</'),
						vl(359, 'span', av),
						Tl(360, 'option'),
						yl(),
						Tl(361, '>'),
						yl(),
						Tl(362, '\n            '),
						vl(363, 'span', iv),
						Tl(364, '</'),
						vl(365, 'span', av),
						Tl(366, 'select'),
						yl(),
						Tl(367, '>'),
						yl(),
						Tl(368, '\n        '),
						vl(369, 'span', iv),
						Tl(370, '</'),
						vl(371, 'span', av),
						Tl(372, 'li'),
						yl(),
						Tl(373, '>'),
						yl(),
						Tl(374, '\n        '),
						vl(375, 'span', iv),
						Tl(376, '<'),
						vl(377, 'span', av),
						Tl(378, 'li'),
						yl(),
						Tl(379, ' '),
						vl(380, 'span', sv),
						Tl(381, 'class'),
						yl(),
						Tl(382, '='),
						vl(383, 'span', lv),
						Tl(384, '"field-group"'),
						yl(),
						Tl(385, '>'),
						yl(),
						Tl(386, '\n            '),
						vl(387, 'span', iv),
						Tl(388, '<'),
						vl(389, 'span', av),
						Tl(390, 'label'),
						yl(),
						Tl(391, ' '),
						vl(392, 'span', sv),
						Tl(393, 'class'),
						yl(),
						Tl(394, '='),
						vl(395, 'span', lv),
						Tl(396, '"form-label"'),
						yl(),
						Tl(397, ' '),
						vl(398, 'span', sv),
						Tl(399, 'for'),
						yl(),
						Tl(400, '='),
						vl(401, 'span', lv),
						Tl(402, '"notes"'),
						yl(),
						Tl(403, '>'),
						yl(),
						Tl(404, 'Notes'),
						vl(405, 'span', iv),
						Tl(406, '</'),
						vl(407, 'span', av),
						Tl(408, 'label'),
						yl(),
						Tl(409, '>'),
						yl(),
						Tl(410, '\n            '),
						vl(411, 'span', iv),
						Tl(412, '<'),
						vl(413, 'span', av),
						Tl(414, 'textarea'),
						yl(),
						Tl(415, ' '),
						vl(416, 'span', sv),
						Tl(417, 'class'),
						yl(),
						Tl(418, '='),
						vl(419, 'span', lv),
						Tl(420, '"form-field"'),
						yl(),
						Tl(421, ' '),
						vl(422, 'span', sv),
						Tl(423, 'name'),
						yl(),
						Tl(424, '='),
						vl(425, 'span', lv),
						Tl(426, '"notes"'),
						yl(),
						Tl(427, ' '),
						vl(428, 'span', sv),
						Tl(429, 'id'),
						yl(),
						Tl(430, '='),
						vl(431, 'span', lv),
						Tl(432, '"notes"'),
						yl(),
						Tl(433, ' '),
						vl(434, 'span', sv),
						Tl(435, 'placeholder'),
						yl(),
						Tl(436, '='),
						vl(437, 'span', lv),
						Tl(438, '"Enter notes"'),
						yl(),
						Tl(439, '>'),
						yl(),
						vl(440, 'span', iv),
						Tl(441, '</'),
						vl(442, 'span', av),
						Tl(443, 'textarea'),
						yl(),
						Tl(444, '>'),
						yl(),
						Tl(445, '\n        '),
						vl(446, 'span', iv),
						Tl(447, '</'),
						vl(448, 'span', av),
						Tl(449, 'li'),
						yl(),
						Tl(450, '>'),
						yl(),
						Tl(451, '\n    '),
						vl(452, 'span', iv),
						Tl(453, '</'),
						vl(454, 'span', av),
						Tl(455, 'ul'),
						yl(),
						Tl(456, '>'),
						yl(),
						Tl(457, '    \n'),
						vl(458, 'span', iv),
						Tl(459, '</'),
						vl(460, 'span', av),
						Tl(461, 'form'),
						yl(),
						Tl(462, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function Aw(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Field Group'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Field groups are styled with a '),
						vl(6, 'code'),
						Tl(7, '.field-group'),
						yl(),
						Tl(8, ' class.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'form'),
						vl(11, 'ul', nw),
						vl(12, 'li', rw),
						vl(13, 'label', ow),
						Tl(14, 'Name'),
						yl(),
						wl(15, 'input', iw),
						yl(),
						yl(),
						yl(),
						yl(),
						vl(16, 'figure'),
						vl(17, 'pre', ov),
						Tl(18, '<'),
						vl(19, 'span', Pv),
						Tl(20, 'form'),
						yl(),
						Tl(21, '>\n    <ul '),
						vl(22, 'span', Pv),
						Tl(23, 'class'),
						yl(),
						Tl(24, '='),
						vl(25, 'span', Ev),
						Tl(26, '"form-group"'),
						yl(),
						Tl(27, '>\n        <'),
						vl(28, 'span', Pv),
						Tl(29, 'li'),
						yl(),
						Tl(30, ' '),
						vl(31, 'span', Pv),
						Tl(32, 'class'),
						yl(),
						Tl(33, '='),
						vl(34, 'span', Ev),
						Tl(35, '"field-group"'),
						yl(),
						Tl(36, '>\n            <'),
						vl(37, 'span', Pv),
						Tl(38, 'label'),
						yl(),
						Tl(39, ' '),
						vl(40, 'span', Pv),
						Tl(41, 'class'),
						yl(),
						Tl(42, '='),
						vl(43, 'span', Ev),
						Tl(44, '"form-label"'),
						yl(),
						Tl(45, ' '),
						vl(46, 'span', Pv),
						Tl(47, 'for'),
						yl(),
						Tl(48, '='),
						vl(49, 'span', Ev),
						Tl(50, '"name"'),
						yl(),
						Tl(51, '>Name</'),
						vl(52, 'span', Pv),
						Tl(53, 'label'),
						yl(),
						Tl(54, '>\n            <'),
						vl(55, 'span', Pv),
						Tl(56, 'input'),
						yl(),
						Tl(57, ' '),
						vl(58, 'span', Pv),
						Tl(59, 'class'),
						yl(),
						Tl(60, '='),
						vl(61, 'span', Ev),
						Tl(62, '"form-field"'),
						yl(),
						Tl(63, ' '),
						vl(64, 'span', Pv),
						Tl(65, 'type'),
						yl(),
						Tl(66, '='),
						vl(67, 'span', Ev),
						Tl(68, '"text"'),
						yl(),
						Tl(69, ' id='),
						vl(70, 'span', Ev),
						Tl(71, '"name"'),
						yl(),
						Tl(72, ' name='),
						vl(73, 'span', Ev),
						Tl(74, '"name"'),
						yl(),
						Tl(75, ' placeholder='),
						vl(76, 'span', Ev),
						Tl(77, '"Enter name"'),
						yl(),
						Tl(78, '>\n        </'),
						vl(79, 'span', Pv),
						Tl(80, 'li'),
						yl(),
						Tl(81, '>\n    </ul>    \n</'),
						vl(82, 'span', Pv),
						Tl(83, 'form'),
						yl(),
						Tl(84, '>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var jw = [1, 'fieldset'];
			function Rw(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Fieldset'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Fieldsets are styled with a '),
						vl(6, 'code'),
						Tl(7, '.fieldset'),
						yl(),
						Tl(8, ' class and have a '),
						vl(9, 'code'),
						Tl(10, '<legend>'),
						yl(),
						Tl(11, ' tag as the first child.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'form'),
						vl(14, 'fieldset', jw),
						vl(15, 'legend'),
						Tl(16, 'Contact'),
						yl(),
						vl(17, 'ul', nw),
						vl(18, 'li', rw),
						vl(19, 'label', ow),
						Tl(20, 'Name'),
						yl(),
						wl(21, 'input', iw),
						yl(),
						yl(),
						yl(),
						yl(),
						yl(),
						vl(22, 'figure'),
						vl(23, 'pre', ov),
						Tl(24, '<'),
						vl(25, 'span', Pv),
						Tl(26, 'form'),
						yl(),
						Tl(27, '>\n    <fieldset '),
						vl(28, 'span', Pv),
						Tl(29, 'class'),
						yl(),
						Tl(30, '='),
						vl(31, 'span', Ev),
						Tl(32, '"fieldset"'),
						yl(),
						Tl(33, '>\n        <legend>Contact</legend>\n        <ul '),
						vl(34, 'span', Pv),
						Tl(35, 'class'),
						yl(),
						Tl(36, '='),
						vl(37, 'span', Ev),
						Tl(38, '"form-group"'),
						yl(),
						Tl(39, '>\n            <'),
						vl(40, 'span', Pv),
						Tl(41, 'li'),
						yl(),
						Tl(42, ' '),
						vl(43, 'span', Pv),
						Tl(44, 'class'),
						yl(),
						Tl(45, '='),
						vl(46, 'span', Ev),
						Tl(47, '"field-group"'),
						yl(),
						Tl(48, '>\n                <'),
						vl(49, 'span', Pv),
						Tl(50, 'label'),
						yl(),
						Tl(51, ' '),
						vl(52, 'span', Pv),
						Tl(53, 'class'),
						yl(),
						Tl(54, '='),
						vl(55, 'span', Ev),
						Tl(56, '"form-label"'),
						yl(),
						Tl(57, ' '),
						vl(58, 'span', Pv),
						Tl(59, 'for'),
						yl(),
						Tl(60, '='),
						vl(61, 'span', Ev),
						Tl(62, '"name"'),
						yl(),
						Tl(63, '>Name</'),
						vl(64, 'span', Pv),
						Tl(65, 'label'),
						yl(),
						Tl(66, '>\n                <'),
						vl(67, 'span', Pv),
						Tl(68, 'input'),
						yl(),
						Tl(69, ' '),
						vl(70, 'span', Pv),
						Tl(71, 'class'),
						yl(),
						Tl(72, '='),
						vl(73, 'span', Ev),
						Tl(74, '"form-field"'),
						yl(),
						Tl(75, ' '),
						vl(76, 'span', Pv),
						Tl(77, 'type'),
						yl(),
						Tl(78, '='),
						vl(79, 'span', Ev),
						Tl(80, '"text"'),
						yl(),
						Tl(81, ' id='),
						vl(82, 'span', Ev),
						Tl(83, '"name"'),
						yl(),
						Tl(84, ' name='),
						vl(85, 'span', Ev),
						Tl(86, '"name"'),
						yl(),
						Tl(87, ' placeholder='),
						vl(88, 'span', Ev),
						Tl(89, '"Enter name"'),
						yl(),
						Tl(90, '>\n            </'),
						vl(91, 'span', Pv),
						Tl(92, 'li'),
						yl(),
						Tl(93, '>\n        </ul>\n    </fieldset>    \n</'),
						vl(94, 'span', Pv),
						Tl(95, 'form'),
						yl(),
						Tl(96, '>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Dw = [1, 'form-group-inline'],
				Nw = ['for', 'email', 1, 'form-label'],
				Uw = ['type', 'text', 'id', 'email', 'name', 'email', 'placeholder', 'Enter email', 1, 'form-field'];
			function Lw(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Form Group'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Form groups are styled with a '),
						vl(6, 'code'),
						Tl(7, '.form-group'),
						yl(),
						Tl(8, ' class for vertical fields and '),
						vl(9, 'code'),
						Tl(10, '.form-group-inline'),
						yl(),
						Tl(11, ' for horizontal fields.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'form'),
						vl(14, 'ul', Dw),
						vl(15, 'li', rw),
						vl(16, 'label', ow),
						Tl(17, 'Name'),
						yl(),
						wl(18, 'input', iw),
						yl(),
						vl(19, 'li', rw),
						vl(20, 'label', Nw),
						Tl(21, 'Email'),
						yl(),
						wl(22, 'input', Uw),
						yl(),
						yl(),
						vl(23, 'ul', nw),
						vl(24, 'li', rw),
						vl(25, 'label', ow),
						Tl(26, 'Name'),
						yl(),
						wl(27, 'input', iw),
						yl(),
						vl(28, 'li', rw),
						vl(29, 'label', Nw),
						Tl(30, 'Email'),
						yl(),
						wl(31, 'input', Uw),
						yl(),
						yl(),
						yl(),
						yl(),
						vl(32, 'figure'),
						vl(33, 'pre', ov),
						Tl(34, '<'),
						vl(35, 'span', Pv),
						Tl(36, 'form'),
						yl(),
						Tl(37, '>\n    <ul '),
						vl(38, 'span', Pv),
						Tl(39, 'class'),
						yl(),
						Tl(40, '='),
						vl(41, 'span', Ev),
						Tl(42, '"form-group-inline"'),
						yl(),
						Tl(43, '>\n        <'),
						vl(44, 'span', Pv),
						Tl(45, 'li'),
						yl(),
						Tl(46, ' '),
						vl(47, 'span', Pv),
						Tl(48, 'class'),
						yl(),
						Tl(49, '='),
						vl(50, 'span', Ev),
						Tl(51, '"field-group"'),
						yl(),
						Tl(52, '>\n            <'),
						vl(53, 'span', Pv),
						Tl(54, 'label'),
						yl(),
						Tl(55, ' '),
						vl(56, 'span', Pv),
						Tl(57, 'class'),
						yl(),
						Tl(58, '='),
						vl(59, 'span', Ev),
						Tl(60, '"form-label"'),
						yl(),
						Tl(61, ' '),
						vl(62, 'span', Pv),
						Tl(63, 'for'),
						yl(),
						Tl(64, '='),
						vl(65, 'span', Ev),
						Tl(66, '"name"'),
						yl(),
						Tl(67, '>Name</'),
						vl(68, 'span', Pv),
						Tl(69, 'label'),
						yl(),
						Tl(70, '>\n            <'),
						vl(71, 'span', Pv),
						Tl(72, 'input'),
						yl(),
						Tl(73, ' '),
						vl(74, 'span', Pv),
						Tl(75, 'class'),
						yl(),
						Tl(76, '='),
						vl(77, 'span', Ev),
						Tl(78, '"form-field"'),
						yl(),
						Tl(79, ' '),
						vl(80, 'span', Pv),
						Tl(81, 'type'),
						yl(),
						Tl(82, '='),
						vl(83, 'span', Ev),
						Tl(84, '"text"'),
						yl(),
						Tl(85, ' id='),
						vl(86, 'span', Ev),
						Tl(87, '"name"'),
						yl(),
						Tl(88, ' name='),
						vl(89, 'span', Ev),
						Tl(90, '"name"'),
						yl(),
						Tl(91, ' placeholder='),
						vl(92, 'span', Ev),
						Tl(93, '"Enter name"'),
						yl(),
						Tl(94, '>\n        </'),
						vl(95, 'span', Pv),
						Tl(96, 'li'),
						yl(),
						Tl(97, '>\n        <'),
						vl(98, 'span', Pv),
						Tl(99, 'li'),
						yl(),
						Tl(100, ' '),
						vl(101, 'span', Pv),
						Tl(102, 'class'),
						yl(),
						Tl(103, '='),
						vl(104, 'span', Ev),
						Tl(105, '"field-group"'),
						yl(),
						Tl(106, '>\n            <'),
						vl(107, 'span', Pv),
						Tl(108, 'label'),
						yl(),
						Tl(109, ' '),
						vl(110, 'span', Pv),
						Tl(111, 'class'),
						yl(),
						Tl(112, '='),
						vl(113, 'span', Ev),
						Tl(114, '"form-label"'),
						yl(),
						Tl(115, ' '),
						vl(116, 'span', Pv),
						Tl(117, 'for'),
						yl(),
						Tl(118, '='),
						vl(119, 'span', Ev),
						Tl(120, '"email"'),
						yl(),
						Tl(121, '>Email</'),
						vl(122, 'span', Pv),
						Tl(123, 'label'),
						yl(),
						Tl(124, '>\n            <'),
						vl(125, 'span', Pv),
						Tl(126, 'input'),
						yl(),
						Tl(127, ' '),
						vl(128, 'span', Pv),
						Tl(129, 'class'),
						yl(),
						Tl(130, '='),
						vl(131, 'span', Ev),
						Tl(132, '"form-field"'),
						yl(),
						Tl(133, ' '),
						vl(134, 'span', Pv),
						Tl(135, 'type'),
						yl(),
						Tl(136, '='),
						vl(137, 'span', Ev),
						Tl(138, '"text"'),
						yl(),
						Tl(139, ' id='),
						vl(140, 'span', Ev),
						Tl(141, '"email"'),
						yl(),
						Tl(142, ' name='),
						vl(143, 'span', Ev),
						Tl(144, '"email"'),
						yl(),
						Tl(145, ' placeholder='),
						vl(146, 'span', Ev),
						Tl(147, '"Enter email"'),
						yl(),
						Tl(148, '>\n        </'),
						vl(149, 'span', Pv),
						Tl(150, 'li'),
						yl(),
						Tl(151, '>\n    </ul>    \n    <ul '),
						vl(152, 'span', Pv),
						Tl(153, 'class'),
						yl(),
						Tl(154, '='),
						vl(155, 'span', Ev),
						Tl(156, '"form-group"'),
						yl(),
						Tl(157, '>\n        <'),
						vl(158, 'span', Pv),
						Tl(159, 'li'),
						yl(),
						Tl(160, ' '),
						vl(161, 'span', Pv),
						Tl(162, 'class'),
						yl(),
						Tl(163, '='),
						vl(164, 'span', Ev),
						Tl(165, '"field-group"'),
						yl(),
						Tl(166, '>\n            <'),
						vl(167, 'span', Pv),
						Tl(168, 'label'),
						yl(),
						Tl(169, ' '),
						vl(170, 'span', Pv),
						Tl(171, 'class'),
						yl(),
						Tl(172, '='),
						vl(173, 'span', Ev),
						Tl(174, '"form-label"'),
						yl(),
						Tl(175, ' '),
						vl(176, 'span', Pv),
						Tl(177, 'for'),
						yl(),
						Tl(178, '='),
						vl(179, 'span', Ev),
						Tl(180, '"name"'),
						yl(),
						Tl(181, '>Name</'),
						vl(182, 'span', Pv),
						Tl(183, 'label'),
						yl(),
						Tl(184, '>\n            <'),
						vl(185, 'span', Pv),
						Tl(186, 'input'),
						yl(),
						Tl(187, ' '),
						vl(188, 'span', Pv),
						Tl(189, 'class'),
						yl(),
						Tl(190, '='),
						vl(191, 'span', Ev),
						Tl(192, '"form-field"'),
						yl(),
						Tl(193, ' '),
						vl(194, 'span', Pv),
						Tl(195, 'type'),
						yl(),
						Tl(196, '='),
						vl(197, 'span', Ev),
						Tl(198, '"text"'),
						yl(),
						Tl(199, ' id='),
						vl(200, 'span', Ev),
						Tl(201, '"name"'),
						yl(),
						Tl(202, ' name='),
						vl(203, 'span', Ev),
						Tl(204, '"name"'),
						yl(),
						Tl(205, ' placeholder='),
						vl(206, 'span', Ev),
						Tl(207, '"Enter name"'),
						yl(),
						Tl(208, '>\n        </'),
						vl(209, 'span', Pv),
						Tl(210, 'li'),
						yl(),
						Tl(211, '>\n        <'),
						vl(212, 'span', Pv),
						Tl(213, 'li'),
						yl(),
						Tl(214, ' '),
						vl(215, 'span', Pv),
						Tl(216, 'class'),
						yl(),
						Tl(217, '='),
						vl(218, 'span', Ev),
						Tl(219, '"field-group"'),
						yl(),
						Tl(220, '>\n            <'),
						vl(221, 'span', Pv),
						Tl(222, 'label'),
						yl(),
						Tl(223, ' '),
						vl(224, 'span', Pv),
						Tl(225, 'class'),
						yl(),
						Tl(226, '='),
						vl(227, 'span', Ev),
						Tl(228, '"form-label"'),
						yl(),
						Tl(229, ' '),
						vl(230, 'span', Pv),
						Tl(231, 'for'),
						yl(),
						Tl(232, '='),
						vl(233, 'span', Ev),
						Tl(234, '"email"'),
						yl(),
						Tl(235, '>Email</'),
						vl(236, 'span', Pv),
						Tl(237, 'label'),
						yl(),
						Tl(238, '>\n            <'),
						vl(239, 'span', Pv),
						Tl(240, 'input'),
						yl(),
						Tl(241, ' '),
						vl(242, 'span', Pv),
						Tl(243, 'class'),
						yl(),
						Tl(244, '='),
						vl(245, 'span', Ev),
						Tl(246, '"form-field"'),
						yl(),
						Tl(247, ' '),
						vl(248, 'span', Pv),
						Tl(249, 'type'),
						yl(),
						Tl(250, '='),
						vl(251, 'span', Ev),
						Tl(252, '"text"'),
						yl(),
						Tl(253, ' id='),
						vl(254, 'span', Ev),
						Tl(255, '"email"'),
						yl(),
						Tl(256, ' name='),
						vl(257, 'span', Ev),
						Tl(258, '"email"'),
						yl(),
						Tl(259, ' placeholder='),
						vl(260, 'span', Ev),
						Tl(261, '"Enter email"'),
						yl(),
						Tl(262, '>\n        </'),
						vl(263, 'span', Pv),
						Tl(264, 'li'),
						yl(),
						Tl(265, '>\n    </ul>    \n</'),
						vl(266, 'span', Pv),
						Tl(267, 'form'),
						yl(),
						Tl(268, '>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function Hw(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Label'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Form labels are styled with a '),
						vl(6, 'code'),
						Tl(7, '.form-label'),
						yl(),
						Tl(8, ' class.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'form'),
						vl(11, 'ul', nw),
						vl(12, 'li', rw),
						vl(13, 'label', ow),
						Tl(14, 'Name'),
						yl(),
						wl(15, 'input', iw),
						yl(),
						yl(),
						yl(),
						yl(),
						vl(16, 'figure'),
						vl(17, 'pre', ov),
						Tl(18, '<'),
						vl(19, 'span', Pv),
						Tl(20, 'form'),
						yl(),
						Tl(21, '>\n    <ul '),
						vl(22, 'span', Pv),
						Tl(23, 'class'),
						yl(),
						Tl(24, '='),
						vl(25, 'span', Ev),
						Tl(26, '"form-group"'),
						yl(),
						Tl(27, '>\n        <'),
						vl(28, 'span', Pv),
						Tl(29, 'li'),
						yl(),
						Tl(30, ' '),
						vl(31, 'span', Pv),
						Tl(32, 'class'),
						yl(),
						Tl(33, '='),
						vl(34, 'span', Ev),
						Tl(35, '"field-group"'),
						yl(),
						Tl(36, '>\n            <'),
						vl(37, 'span', Pv),
						Tl(38, 'label'),
						yl(),
						Tl(39, ' '),
						vl(40, 'span', Pv),
						Tl(41, 'class'),
						yl(),
						Tl(42, '='),
						vl(43, 'span', Ev),
						Tl(44, '"form-label"'),
						yl(),
						Tl(45, ' '),
						vl(46, 'span', Pv),
						Tl(47, 'for'),
						yl(),
						Tl(48, '='),
						vl(49, 'span', Ev),
						Tl(50, '"name"'),
						yl(),
						Tl(51, '>Name</'),
						vl(52, 'span', Pv),
						Tl(53, 'label'),
						yl(),
						Tl(54, '>\n            <'),
						vl(55, 'span', Pv),
						Tl(56, 'input'),
						yl(),
						Tl(57, ' '),
						vl(58, 'span', Pv),
						Tl(59, 'class'),
						yl(),
						Tl(60, '='),
						vl(61, 'span', Ev),
						Tl(62, '"form-field"'),
						yl(),
						Tl(63, ' '),
						vl(64, 'span', Pv),
						Tl(65, 'type'),
						yl(),
						Tl(66, '='),
						vl(67, 'span', Ev),
						Tl(68, '"text"'),
						yl(),
						Tl(69, ' id='),
						vl(70, 'span', Ev),
						Tl(71, '"name"'),
						yl(),
						Tl(72, ' name='),
						vl(73, 'span', Ev),
						Tl(74, '"name"'),
						yl(),
						Tl(75, ' placeholder='),
						vl(76, 'span', Ev),
						Tl(77, '"Enter name"'),
						yl(),
						Tl(78, '>\n        </'),
						vl(79, 'span', Pv),
						Tl(80, 'li'),
						yl(),
						Tl(81, '>\n    </ul>    \n</'),
						vl(82, 'span', Pv),
						Tl(83, 'form'),
						yl(),
						Tl(84, '>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var zw = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 'disabled', '', 1, 'form-field'],
				Vw = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 'readonly', '', 1, 'form-field'];
			function Fw(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'State'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Form fields can be disabled by adding a '),
						vl(6, 'code'),
						Tl(7, 'disabled'),
						yl(),
						Tl(8, ' attribute or readonly by adding a '),
						vl(9, 'code'),
						Tl(10, 'readonly'),
						yl(),
						Tl(11, ' attribute.'),
						yl(),
						yl(),
						vl(12, 'section', $b),
						vl(13, 'form'),
						vl(14, 'ul', nw),
						vl(15, 'li', rw),
						vl(16, 'label', ow),
						Tl(17, 'Disabled'),
						yl(),
						wl(18, 'input', zw),
						yl(),
						vl(19, 'li', rw),
						vl(20, 'label', ow),
						Tl(21, 'Readonly'),
						yl(),
						wl(22, 'input', Vw),
						yl(),
						yl(),
						yl(),
						yl(),
						vl(23, 'figure'),
						vl(24, 'pre', ov),
						Tl(25, '<'),
						vl(26, 'span', Pv),
						Tl(27, 'form'),
						yl(),
						Tl(28, '>\n    <ul '),
						vl(29, 'span', Pv),
						Tl(30, 'class'),
						yl(),
						Tl(31, '='),
						vl(32, 'span', Ev),
						Tl(33, '"form-group"'),
						yl(),
						Tl(34, '>\n        <'),
						vl(35, 'span', Pv),
						Tl(36, 'li'),
						yl(),
						Tl(37, ' '),
						vl(38, 'span', Pv),
						Tl(39, 'class'),
						yl(),
						Tl(40, '='),
						vl(41, 'span', Ev),
						Tl(42, '"field-group"'),
						yl(),
						Tl(43, '>\n            <'),
						vl(44, 'span', Pv),
						Tl(45, 'label'),
						yl(),
						Tl(46, ' '),
						vl(47, 'span', Pv),
						Tl(48, 'class'),
						yl(),
						Tl(49, '='),
						vl(50, 'span', Ev),
						Tl(51, '"form-label"'),
						yl(),
						Tl(52, ' '),
						vl(53, 'span', Pv),
						Tl(54, 'for'),
						yl(),
						Tl(55, '='),
						vl(56, 'span', Ev),
						Tl(57, '"name"'),
						yl(),
						Tl(58, '>Disabled</'),
						vl(59, 'span', Pv),
						Tl(60, 'label'),
						yl(),
						Tl(61, '>\n            <'),
						vl(62, 'span', Pv),
						Tl(63, 'input'),
						yl(),
						Tl(64, ' '),
						vl(65, 'span', Pv),
						Tl(66, 'class'),
						yl(),
						Tl(67, '='),
						vl(68, 'span', Ev),
						Tl(69, '"form-field"'),
						yl(),
						Tl(70, ' '),
						vl(71, 'span', Pv),
						Tl(72, 'type'),
						yl(),
						Tl(73, '='),
						vl(74, 'span', Ev),
						Tl(75, '"text"'),
						yl(),
						Tl(76, ' id='),
						vl(77, 'span', Ev),
						Tl(78, '"name"'),
						yl(),
						Tl(79, ' name='),
						vl(80, 'span', Ev),
						Tl(81, '"name"'),
						yl(),
						Tl(82, ' placeholder='),
						vl(83, 'span', Ev),
						Tl(84, '"Enter name"'),
						yl(),
						Tl(85, ' disabled>\n        </'),
						vl(86, 'span', Pv),
						Tl(87, 'li'),
						yl(),
						Tl(88, '>\n        <'),
						vl(89, 'span', Pv),
						Tl(90, 'li'),
						yl(),
						Tl(91, ' '),
						vl(92, 'span', Pv),
						Tl(93, 'class'),
						yl(),
						Tl(94, '='),
						vl(95, 'span', Ev),
						Tl(96, '"field-group"'),
						yl(),
						Tl(97, '>\n            <'),
						vl(98, 'span', Pv),
						Tl(99, 'label'),
						yl(),
						Tl(100, ' '),
						vl(101, 'span', Pv),
						Tl(102, 'class'),
						yl(),
						Tl(103, '='),
						vl(104, 'span', Ev),
						Tl(105, '"form-label"'),
						yl(),
						Tl(106, ' '),
						vl(107, 'span', Pv),
						Tl(108, 'for'),
						yl(),
						Tl(109, '='),
						vl(110, 'span', Ev),
						Tl(111, '"name"'),
						yl(),
						Tl(112, '>Readonly</'),
						vl(113, 'span', Pv),
						Tl(114, 'label'),
						yl(),
						Tl(115, '>\n            <'),
						vl(116, 'span', Pv),
						Tl(117, 'input'),
						yl(),
						Tl(118, ' '),
						vl(119, 'span', Pv),
						Tl(120, 'class'),
						yl(),
						Tl(121, '='),
						vl(122, 'span', Ev),
						Tl(123, '"form-field"'),
						yl(),
						Tl(124, ' '),
						vl(125, 'span', Pv),
						Tl(126, 'type'),
						yl(),
						Tl(127, '='),
						vl(128, 'span', Ev),
						Tl(129, '"text"'),
						yl(),
						Tl(130, ' id='),
						vl(131, 'span', Ev),
						Tl(132, '"name"'),
						yl(),
						Tl(133, ' name='),
						vl(134, 'span', Ev),
						Tl(135, '"name"'),
						yl(),
						Tl(136, ' placeholder='),
						vl(137, 'span', Ev),
						Tl(138, '"Enter name"'),
						yl(),
						Tl(139, ' readonly>\n        </'),
						vl(140, 'span', Pv),
						Tl(141, 'li'),
						yl(),
						Tl(142, '>\n    </ul>    \n</'),
						vl(143, 'span', Pv),
						Tl(144, 'form'),
						yl(),
						Tl(145, '>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(12), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function Bw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function qw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Area'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Gw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Container'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Zw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Item'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Ww(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function Qw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Container'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Yw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Sticky Footer'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function Jw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function Kw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function Xw(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Items'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function $w(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Links'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function t_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Placement'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function e_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function n_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function r_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function o_(t, e) {
				1 & t &&
					(vl(0, 'article', Kb),
					vl(1, 'section', Xb),
					vl(2, 'p'),
					Tl(3, 'Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.'),
					yl(),
					yl(),
					yl());
			}
			var i_ = [1, 'mar-t-xs'],
				a_ = [1, 'mar-r-sm'],
				s_ = [1, 'mar-b-md'],
				l_ = [1, 'mar-l-lg'],
				u_ = [1, 'mar-tb-xl'],
				c_ = [1, 'mar-lr-md'],
				p_ = [1, 'mar-a-md'];
			function f_(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Margin'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use a '),
						vl(6, 'code'),
						Tl(7, '.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'),
						yl(),
						Tl(8, ' class to add margin to an element.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'p', i_),
						Tl(11, 'top extra small'),
						yl(),
						vl(12, 'p', a_),
						Tl(13, 'right small'),
						yl(),
						vl(14, 'p', s_),
						Tl(15, 'bottom medium'),
						yl(),
						vl(16, 'p', l_),
						Tl(17, 'left large'),
						yl(),
						vl(18, 'p', u_),
						Tl(19, 'top bottom extra large'),
						yl(),
						vl(20, 'p', c_),
						Tl(21, 'left right medium'),
						yl(),
						vl(22, 'p', p_),
						Tl(23, 'all medium'),
						yl(),
						yl(),
						vl(24, 'figure'),
						vl(25, 'pre', ov),
						Tl(26, '<'),
						vl(27, 'span', iv),
						Tl(28, 'p'),
						yl(),
						Tl(29, ' class='),
						vl(30, 'span', Ev),
						Tl(31, '"mar-t-xs"'),
						yl(),
						Tl(32, '>'),
						vl(33, 'span', sv),
						Tl(34, 'top'),
						yl(),
						Tl(35, ' extra small</p>\n<'),
						vl(36, 'span', iv),
						Tl(37, 'p'),
						yl(),
						Tl(38, ' class='),
						vl(39, 'span', Ev),
						Tl(40, '"mar-r-sm"'),
						yl(),
						Tl(41, '>'),
						vl(42, 'span', sv),
						Tl(43, 'right'),
						yl(),
						Tl(44, ' small</p>\n<'),
						vl(45, 'span', iv),
						Tl(46, 'p'),
						yl(),
						Tl(47, ' class='),
						vl(48, 'span', Ev),
						Tl(49, '"mar-b-md"'),
						yl(),
						Tl(50, '>'),
						vl(51, 'span', sv),
						Tl(52, 'bottom'),
						yl(),
						Tl(53, ' medium</p>\n<'),
						vl(54, 'span', iv),
						Tl(55, 'p'),
						yl(),
						Tl(56, ' class='),
						vl(57, 'span', Ev),
						Tl(58, '"mar-l-lg"'),
						yl(),
						Tl(59, '>'),
						vl(60, 'span', sv),
						Tl(61, 'left'),
						yl(),
						Tl(62, ' large</p>\n<'),
						vl(63, 'span', iv),
						Tl(64, 'p'),
						yl(),
						Tl(65, ' class='),
						vl(66, 'span', Ev),
						Tl(67, '"mar-tb-xl"'),
						yl(),
						Tl(68, '>'),
						vl(69, 'span', sv),
						Tl(70, 'top'),
						yl(),
						Tl(71, ' '),
						vl(72, 'span', sv),
						Tl(73, 'bottom'),
						yl(),
						Tl(74, ' extra large</p>\n<'),
						vl(75, 'span', iv),
						Tl(76, 'p'),
						yl(),
						Tl(77, ' class='),
						vl(78, 'span', Ev),
						Tl(79, '"mar-lr-md"'),
						yl(),
						Tl(80, '>'),
						vl(81, 'span', sv),
						Tl(82, 'left'),
						yl(),
						Tl(83, ' '),
						vl(84, 'span', sv),
						Tl(85, 'right'),
						yl(),
						Tl(86, ' medium</p>\n<'),
						vl(87, 'span', iv),
						Tl(88, 'p'),
						yl(),
						Tl(89, ' class='),
						vl(90, 'span', Ev),
						Tl(91, '"mar-a-md"'),
						yl(),
						Tl(92, '>all medium</p>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var d_ = [1, 'pad-t-xs'],
				h_ = [1, 'pad-r-sm'],
				g_ = [1, 'pad-b-md'],
				m_ = [1, 'pad-l-lg'],
				b_ = [1, 'pad-tb-xl'],
				v_ = [1, 'pad-lr-md'],
				y_ = [1, 'pad-a-md'];
			function w_(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'h2'),
						Tl(3, 'Padding'),
						yl(),
						vl(4, 'p'),
						Tl(5, 'Use a '),
						vl(6, 'code'),
						Tl(7, '.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'),
						yl(),
						Tl(8, ' class to add padding to an element.'),
						yl(),
						yl(),
						vl(9, 'section', $b),
						vl(10, 'p', d_),
						Tl(11, 'top extra small'),
						yl(),
						vl(12, 'p', h_),
						Tl(13, 'right small'),
						yl(),
						vl(14, 'p', g_),
						Tl(15, 'bottom medium'),
						yl(),
						vl(16, 'p', m_),
						Tl(17, 'left large'),
						yl(),
						vl(18, 'p', b_),
						Tl(19, 'top bottom extra large'),
						yl(),
						vl(20, 'p', v_),
						Tl(21, 'left right medium'),
						yl(),
						vl(22, 'p', y_),
						Tl(23, 'all medium'),
						yl(),
						yl(),
						vl(24, 'figure'),
						vl(25, 'pre', ov),
						Tl(26, '<'),
						vl(27, 'span', iv),
						Tl(28, 'p'),
						yl(),
						Tl(29, ' class='),
						vl(30, 'span', Ev),
						Tl(31, '"pad-t-xs"'),
						yl(),
						Tl(32, '>'),
						vl(33, 'span', sv),
						Tl(34, 'top'),
						yl(),
						Tl(35, ' extra small</p>\n<'),
						vl(36, 'span', iv),
						Tl(37, 'p'),
						yl(),
						Tl(38, ' class='),
						vl(39, 'span', Ev),
						Tl(40, '"pad-r-sm"'),
						yl(),
						Tl(41, '>'),
						vl(42, 'span', sv),
						Tl(43, 'right'),
						yl(),
						Tl(44, ' small</p>\n<'),
						vl(45, 'span', iv),
						Tl(46, 'p'),
						yl(),
						Tl(47, ' class='),
						vl(48, 'span', Ev),
						Tl(49, '"pad-b-md"'),
						yl(),
						Tl(50, '>'),
						vl(51, 'span', sv),
						Tl(52, 'bottom'),
						yl(),
						Tl(53, ' medium</p>\n<'),
						vl(54, 'span', iv),
						Tl(55, 'p'),
						yl(),
						Tl(56, ' class='),
						vl(57, 'span', Ev),
						Tl(58, '"pad-l-lg"'),
						yl(),
						Tl(59, '>'),
						vl(60, 'span', sv),
						Tl(61, 'left'),
						yl(),
						Tl(62, ' large</p>\n<'),
						vl(63, 'span', iv),
						Tl(64, 'p'),
						yl(),
						Tl(65, ' class='),
						vl(66, 'span', Ev),
						Tl(67, '"pad-tb-xl"'),
						yl(),
						Tl(68, '>'),
						vl(69, 'span', sv),
						Tl(70, 'top'),
						yl(),
						Tl(71, ' '),
						vl(72, 'span', sv),
						Tl(73, 'bottom'),
						yl(),
						Tl(74, ' extra large</p>\n<'),
						vl(75, 'span', iv),
						Tl(76, 'p'),
						yl(),
						Tl(77, ' class='),
						vl(78, 'span', Ev),
						Tl(79, '"pad-lr-md"'),
						yl(),
						Tl(80, '>'),
						vl(81, 'span', sv),
						Tl(82, 'left'),
						yl(),
						Tl(83, ' '),
						vl(84, 'span', sv),
						Tl(85, 'right'),
						yl(),
						Tl(86, ' medium</p>\n<'),
						vl(87, 'span', iv),
						Tl(88, 'p'),
						yl(),
						Tl(89, ' class='),
						vl(90, 'span', Ev),
						Tl(91, '"pad-a-md"'),
						yl(),
						Tl(92, '>all medium</p>'),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(9), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var __ = [1, 'spinner'],
				x_ = [1, 'spinner-dotted'];
			function C_(t, e) {
				if (
					(1 & t &&
						(vl(0, 'article', Kb),
						vl(1, 'section', Xb),
						vl(2, 'p'),
						Tl(3, 'Spinners are styled with a '),
						vl(4, 'code'),
						Tl(5, '.spinner[-dotted]'),
						yl(),
						Tl(6, ' class.'),
						yl(),
						yl(),
						vl(7, 'section', $b),
						wl(8, 'p', __),
						wl(9, 'p', x_),
						yl(),
						vl(10, 'figure'),
						vl(11, 'pre', ov),
						vl(12, 'span', iv),
						Tl(13, '<'),
						vl(14, 'span', av),
						Tl(15, 'p'),
						yl(),
						Tl(16, ' '),
						vl(17, 'span', sv),
						Tl(18, 'class'),
						yl(),
						Tl(19, '='),
						vl(20, 'span', lv),
						Tl(21, '"spinner"'),
						yl(),
						Tl(22, '>'),
						yl(),
						vl(23, 'span', iv),
						Tl(24, '</'),
						vl(25, 'span', av),
						Tl(26, 'p'),
						yl(),
						Tl(27, '>'),
						yl(),
						Tl(28, '\n'),
						vl(29, 'span', iv),
						Tl(30, '<'),
						vl(31, 'span', av),
						Tl(32, 'p'),
						yl(),
						Tl(33, ' '),
						vl(34, 'span', sv),
						Tl(35, 'class'),
						yl(),
						Tl(36, '='),
						vl(37, 'span', lv),
						Tl(38, '"spinner-dotted"'),
						yl(),
						Tl(39, '>'),
						yl(),
						vl(40, 'span', iv),
						Tl(41, '</'),
						vl(42, 'span', av),
						Tl(43, 'p'),
						yl(),
						Tl(44, '>'),
						yl(),
						yl(),
						yl(),
						yl()),
					2 & t)
				) {
					var n = Sl();
					qa(7), Fs('ngClass', Ku(1, uv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function k_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function S_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function P_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function E_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Border'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function O_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Hover'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function I_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Striped'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function T_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Table Cell'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function M_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Table Row'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function A_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function j_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function R_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Font'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function D_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Text'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function N_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function U_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'p'), Tl(3, 'Coming soon.'), yl(), yl(), yl());
			}
			function L_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Hide'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			function H_(t, e) {
				1 & t && (vl(0, 'article', Kb), vl(1, 'section', Xb), vl(2, 'h2'), Tl(3, 'Show'), yl(), vl(4, 'p'), Tl(5, 'Coming soon.'), yl(), yl(), yl());
			}
			var z_ = function(t) {
					return { 'bg-lt-gray': t };
				},
				V_ = [
					{
						path: 'components',
						component: (function() {
							function t() {}
							return (
								Object.defineProperty(t.prototype, 'section', {
									get: function() {
										return this.selectedSection;
									},
									set: function(t) {
										this.selectedSection = t;
									},
									enumerable: !0,
									configurable: !0
								}),
								(t.prototype.ngOnInit = function() {
									this.section = 'Alert';
								}),
								(t.prototype.checkSection = function(t) {
									return this.section === t;
								}),
								(t.prototype.selectSection = function(t) {
									this.section = t;
								}),
								(t.ngComponentDef = je({
									type: t,
									selectors: [['ng-component']],
									factory: function(e) {
										return new (e || t)();
									},
									consts: 170,
									vars: 166,
									template: function(t, e) {
										1 & t &&
											(vl(0, 'nav', yb),
											vl(1, 'ul'),
											vl(2, 'li'),
											vl(3, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Alert');
											}),
											Tl(4, 'Alert'),
											yl(),
											ul(5, Eb, 4, 0, 'ul', _b),
											yl(),
											vl(6, 'li'),
											vl(7, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Badge');
											}),
											Tl(8, 'Badge'),
											yl(),
											ul(9, Ob, 4, 0, 'ul', _b),
											yl(),
											vl(10, 'li'),
											vl(11, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Button');
											}),
											Tl(12, 'Button'),
											yl(),
											ul(13, Ib, 10, 0, 'ul', _b),
											yl(),
											vl(14, 'li'),
											vl(15, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Card');
											}),
											Tl(16, 'Card'),
											yl(),
											ul(17, Tb, 1, 0, 'ul', _b),
											yl(),
											vl(18, 'li'),
											vl(19, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Collapse');
											}),
											Tl(20, 'Collapse'),
											yl(),
											ul(21, Mb, 7, 0, 'ul', _b),
											yl(),
											vl(22, 'li'),
											vl(23, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Color');
											}),
											Tl(24, 'Color'),
											yl(),
											ul(25, Ab, 13, 0, 'ul', _b),
											yl(),
											vl(26, 'li'),
											vl(27, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Flexbox');
											}),
											Tl(28, 'Flexbox'),
											yl(),
											ul(29, jb, 25, 0, 'ul', _b),
											yl(),
											vl(30, 'li'),
											vl(31, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Form');
											}),
											Tl(32, 'Form'),
											yl(),
											ul(33, Rb, 22, 0, 'ul', _b),
											yl(),
											vl(34, 'li'),
											vl(35, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Grid');
											}),
											Tl(36, 'Grid'),
											yl(),
											ul(37, Db, 10, 0, 'ul', _b),
											yl(),
											vl(38, 'li'),
											vl(39, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Layout');
											}),
											Tl(40, 'Layout'),
											yl(),
											ul(41, Nb, 7, 0, 'ul', _b),
											yl(),
											vl(42, 'li'),
											vl(43, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Modal');
											}),
											Tl(44, 'Modal'),
											yl(),
											ul(45, Ub, 1, 0, 'ul', _b),
											yl(),
											vl(46, 'li'),
											vl(47, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Nav');
											}),
											Tl(48, 'Nav'),
											yl(),
											ul(49, Lb, 10, 0, 'ul', _b),
											yl(),
											vl(50, 'li'),
											vl(51, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Position');
											}),
											Tl(52, 'Position'),
											yl(),
											ul(53, Hb, 1, 0, 'ul', _b),
											yl(),
											vl(54, 'li'),
											vl(55, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Slider');
											}),
											Tl(56, 'Slider'),
											yl(),
											ul(57, zb, 1, 0, 'ul', _b),
											yl(),
											vl(58, 'li'),
											vl(59, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Slideshow');
											}),
											Tl(60, 'Slideshow'),
											yl(),
											ul(61, Vb, 1, 0, 'ul', _b),
											yl(),
											vl(62, 'li'),
											vl(63, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Space');
											}),
											Tl(64, 'Space'),
											yl(),
											ul(65, Fb, 7, 0, 'ul', _b),
											yl(),
											vl(66, 'li'),
											vl(67, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Spinner');
											}),
											Tl(68, 'Spinner'),
											yl(),
											ul(69, Bb, 1, 0, 'ul', _b),
											yl(),
											vl(70, 'li'),
											vl(71, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Switch');
											}),
											Tl(72, 'Switch'),
											yl(),
											ul(73, qb, 1, 0, 'ul', _b),
											yl(),
											vl(74, 'li'),
											vl(75, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Tab');
											}),
											Tl(76, 'Tab'),
											yl(),
											ul(77, Gb, 1, 0, 'ul', _b),
											yl(),
											vl(78, 'li'),
											vl(79, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Table');
											}),
											Tl(80, 'Table'),
											yl(),
											ul(81, Zb, 16, 0, 'ul', _b),
											yl(),
											vl(82, 'li'),
											vl(83, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Tooltip');
											}),
											Tl(84, 'Tooltip'),
											yl(),
											ul(85, Wb, 1, 0, 'ul', _b),
											yl(),
											vl(86, 'li'),
											vl(87, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Typography');
											}),
											Tl(88, 'Typography'),
											yl(),
											ul(89, Qb, 7, 0, 'ul', _b),
											yl(),
											vl(90, 'li'),
											vl(91, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Utilities');
											}),
											Tl(92, 'Utilities'),
											yl(),
											ul(93, Yb, 1, 0, 'ul', _b),
											yl(),
											vl(94, 'li'),
											vl(95, 'a', wb),
											xl('click', function(t) {
												return e.selectSection('Visibility');
											}),
											Tl(96, 'Visibility'),
											yl(),
											ul(97, Jb, 7, 0, 'ul', _b),
											yl(),
											yl(),
											yl(),
											vl(98, 'main', xb, Cb),
											wl(100, 'h1', kb),
											ul(101, cv, 109, 4, 'article', Sb),
											ul(102, dv, 51, 4, 'article', Sb),
											ul(103, bv, 89, 4, 'article', Sb),
											ul(104, vv, 46, 4, 'article', Sb),
											ul(105, Ov, 107, 4, 'article', Sb),
											ul(106, Av, 295, 4, 'article', Sb),
											ul(107, Hv, 109, 4, 'article', Sb),
											ul(108, Vv, 29, 4, 'article', Sb),
											ul(109, Fv, 4, 0, 'article', Sb),
											ul(110, Bv, 4, 0, 'article', Sb),
											ul(111, qv, 6, 0, 'article', Sb),
											ul(112, Gv, 6, 0, 'article', Sb),
											ul(113, Zv, 4, 0, 'article', Sb),
											ul(114, Wv, 6, 0, 'article', Sb),
											ul(115, Qv, 6, 0, 'article', Sb),
											ul(116, Yv, 6, 0, 'article', Sb),
											ul(117, Jv, 6, 0, 'article', Sb),
											ul(118, ey, 200, 4, 'article', Sb),
											ul(119, fy, 484, 4, 'article', Sb),
											ul(120, Cy, 484, 4, 'article', Sb),
											ul(121, Ay, 438, 4, 'article', Sb),
											ul(122, Dy, 83, 4, 'article', Sb),
											ul(123, Ny, 438, 4, 'article', Sb),
											ul(124, zy, 329, 4, 'article', Sb),
											ul(125, Wy, 380, 4, 'article', Sb),
											ul(126, tw, 380, 4, 'article', Sb),
											ul(127, ew, 16, 0, 'article', Sb),
											ul(128, _w, 474, 4, 'article', Sb),
											ul(129, Mw, 463, 4, 'article', Sb),
											ul(130, Aw, 85, 4, 'article', Sb),
											ul(131, Rw, 97, 4, 'article', Sb),
											ul(132, Lw, 269, 4, 'article', Sb),
											ul(133, Hw, 85, 4, 'article', Sb),
											ul(134, Fw, 146, 4, 'article', Sb),
											ul(135, Bw, 4, 0, 'article', Sb),
											ul(136, qw, 6, 0, 'article', Sb),
											ul(137, Gw, 6, 0, 'article', Sb),
											ul(138, Zw, 6, 0, 'article', Sb),
											ul(139, Ww, 4, 0, 'article', Sb),
											ul(140, Qw, 6, 0, 'article', Sb),
											ul(141, Yw, 6, 0, 'article', Sb),
											ul(142, Jw, 4, 0, 'article', Sb),
											ul(143, Kw, 4, 0, 'article', Sb),
											ul(144, Xw, 6, 0, 'article', Sb),
											ul(145, $w, 6, 0, 'article', Sb),
											ul(146, t_, 6, 0, 'article', Sb),
											ul(147, e_, 4, 0, 'article', Sb),
											ul(148, n_, 4, 0, 'article', Sb),
											ul(149, r_, 4, 0, 'article', Sb),
											ul(150, o_, 4, 0, 'article', Sb),
											ul(151, f_, 93, 4, 'article', Sb),
											ul(152, w_, 93, 4, 'article', Sb),
											ul(153, C_, 45, 4, 'article', Sb),
											ul(154, k_, 4, 0, 'article', Sb),
											ul(155, S_, 4, 0, 'article', Sb),
											ul(156, P_, 4, 0, 'article', Sb),
											ul(157, E_, 6, 0, 'article', Sb),
											ul(158, O_, 6, 0, 'article', Sb),
											ul(159, I_, 6, 0, 'article', Sb),
											ul(160, T_, 6, 0, 'article', Sb),
											ul(161, M_, 6, 0, 'article', Sb),
											ul(162, A_, 4, 0, 'article', Sb),
											ul(163, j_, 4, 0, 'article', Sb),
											ul(164, R_, 6, 0, 'article', Sb),
											ul(165, D_, 6, 0, 'article', Sb),
											ul(166, N_, 4, 0, 'article', Sb),
											ul(167, U_, 4, 0, 'article', Sb),
											ul(168, L_, 6, 0, 'article', Sb),
											ul(169, H_, 6, 0, 'article', Sb),
											yl()),
											2 & t &&
												(qa(3),
												Fs('ngClass', Ju(118, z_, e.checkSection('Alert'))),
												qa(5),
												Fs('ngIf', e.checkSection('Alert')),
												qa(7),
												Fs('ngClass', Ju(120, z_, e.checkSection('Badge'))),
												qa(9),
												Fs('ngIf', e.checkSection('Badge')),
												qa(11),
												Fs('ngClass', Ju(122, z_, e.checkSection('Button'))),
												qa(13),
												Fs('ngIf', e.checkSection('Button')),
												qa(15),
												Fs('ngClass', Ju(124, z_, e.checkSection('Card'))),
												qa(17),
												Fs('ngIf', e.checkSection('Card')),
												qa(19),
												Fs('ngClass', Ju(126, z_, e.checkSection('Collapse'))),
												qa(21),
												Fs('ngIf', e.checkSection('Collapse')),
												qa(23),
												Fs('ngClass', Ju(128, z_, e.checkSection('Color'))),
												qa(25),
												Fs('ngIf', e.checkSection('Color')),
												qa(27),
												Fs('ngClass', Ju(130, z_, e.checkSection('Flexbox'))),
												qa(29),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(31),
												Fs('ngClass', Ju(132, z_, e.checkSection('Form'))),
												qa(33),
												Fs('ngIf', e.checkSection('Form')),
												qa(35),
												Fs('ngClass', Ju(134, z_, e.checkSection('Grid'))),
												qa(37),
												Fs('ngIf', e.checkSection('Grid')),
												qa(39),
												Fs('ngClass', Ju(136, z_, e.checkSection('Layout'))),
												qa(41),
												Fs('ngIf', e.checkSection('Layout')),
												qa(43),
												Fs('ngClass', Ju(138, z_, e.checkSection('Modal'))),
												qa(45),
												Fs('ngIf', e.checkSection('Modal')),
												qa(47),
												Fs('ngClass', Ju(140, z_, e.checkSection('Nav'))),
												qa(49),
												Fs('ngIf', e.checkSection('Nav')),
												qa(51),
												Fs('ngClass', Ju(142, z_, e.checkSection('Position'))),
												qa(53),
												Fs('ngIf', e.checkSection('Position')),
												qa(55),
												Fs('ngClass', Ju(144, z_, e.checkSection('Slider'))),
												qa(57),
												Fs('ngIf', e.checkSection('Slider')),
												qa(59),
												Fs('ngClass', Ju(146, z_, e.checkSection('Slideshow'))),
												qa(61),
												Fs('ngIf', e.checkSection('Slideshow')),
												qa(63),
												Fs('ngClass', Ju(148, z_, e.checkSection('Space'))),
												qa(65),
												Fs('ngIf', e.checkSection('Space')),
												qa(67),
												Fs('ngClass', Ju(150, z_, e.checkSection('Spinner'))),
												qa(69),
												Fs('ngIf', e.checkSection('Spinner')),
												qa(71),
												Fs('ngClass', Ju(152, z_, e.checkSection('Switch'))),
												qa(73),
												Fs('ngIf', e.checkSection('Switch')),
												qa(75),
												Fs('ngClass', Ju(154, z_, e.checkSection('Tab'))),
												qa(77),
												Fs('ngIf', e.checkSection('Tab')),
												qa(79),
												Fs('ngClass', Ju(156, z_, e.checkSection('Table'))),
												qa(81),
												Fs('ngIf', e.checkSection('Table')),
												qa(83),
												Fs('ngClass', Ju(158, z_, e.checkSection('Tooltip'))),
												qa(85),
												Fs('ngIf', e.checkSection('Tooltip')),
												qa(87),
												Fs('ngClass', Ju(160, z_, e.checkSection('Typography'))),
												qa(89),
												Fs('ngIf', e.checkSection('Typography')),
												qa(91),
												Fs('ngClass', Ju(162, z_, e.checkSection('Utilities'))),
												qa(93),
												Fs('ngIf', e.checkSection('Utilities')),
												qa(95),
												Fs('ngClass', Ju(164, z_, e.checkSection('Visibility'))),
												qa(97),
												Fs('ngIf', e.checkSection('Visibility')),
												qa(100),
												Fs('innerHTML', e.section, eo),
												qa(101),
												Fs('ngIf', e.checkSection('Alert')),
												qa(102),
												Fs('ngIf', e.checkSection('Alert')),
												qa(103),
												Fs('ngIf', e.checkSection('Badge')),
												qa(104),
												Fs('ngIf', e.checkSection('Badge')),
												qa(105),
												Fs('ngIf', e.checkSection('Button')),
												qa(106),
												Fs('ngIf', e.checkSection('Button')),
												qa(107),
												Fs('ngIf', e.checkSection('Button')),
												qa(108),
												Fs('ngIf', e.checkSection('Button')),
												qa(109),
												Fs('ngIf', e.checkSection('Card')),
												qa(110),
												Fs('ngIf', e.checkSection('Collapse')),
												qa(111),
												Fs('ngIf', e.checkSection('Collapse')),
												qa(112),
												Fs('ngIf', e.checkSection('Collapse')),
												qa(113),
												Fs('ngIf', e.checkSection('Color')),
												qa(114),
												Fs('ngIf', e.checkSection('Color')),
												qa(115),
												Fs('ngIf', e.checkSection('Color')),
												qa(116),
												Fs('ngIf', e.checkSection('Color')),
												qa(117),
												Fs('ngIf', e.checkSection('Color')),
												qa(118),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(119),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(120),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(121),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(122),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(123),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(124),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(125),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(126),
												Fs('ngIf', e.checkSection('Flexbox')),
												qa(127),
												Fs('ngIf', e.checkSection('Form')),
												qa(128),
												Fs('ngIf', e.checkSection('Form')),
												qa(129),
												Fs('ngIf', e.checkSection('Form')),
												qa(130),
												Fs('ngIf', e.checkSection('Form')),
												qa(131),
												Fs('ngIf', e.checkSection('Form')),
												qa(132),
												Fs('ngIf', e.checkSection('Form')),
												qa(133),
												Fs('ngIf', e.checkSection('Form')),
												qa(134),
												Fs('ngIf', e.checkSection('Form')),
												qa(135),
												Fs('ngIf', e.checkSection('Grid')),
												qa(136),
												Fs('ngIf', e.checkSection('Grid')),
												qa(137),
												Fs('ngIf', e.checkSection('Grid')),
												qa(138),
												Fs('ngIf', e.checkSection('Grid')),
												qa(139),
												Fs('ngIf', e.checkSection('Layout')),
												qa(140),
												Fs('ngIf', e.checkSection('Layout')),
												qa(141),
												Fs('ngIf', e.checkSection('Layout')),
												qa(142),
												Fs('ngIf', e.checkSection('Modal')),
												qa(143),
												Fs('ngIf', e.checkSection('Nav')),
												qa(144),
												Fs('ngIf', e.checkSection('Nav')),
												qa(145),
												Fs('ngIf', e.checkSection('Nav')),
												qa(146),
												Fs('ngIf', e.checkSection('Nav')),
												qa(147),
												Fs('ngIf', e.checkSection('Position')),
												qa(148),
												Fs('ngIf', e.checkSection('Slider')),
												qa(149),
												Fs('ngIf', e.checkSection('Slideshow')),
												qa(150),
												Fs('ngIf', e.checkSection('Space')),
												qa(151),
												Fs('ngIf', e.checkSection('Space')),
												qa(152),
												Fs('ngIf', e.checkSection('Space')),
												qa(153),
												Fs('ngIf', e.checkSection('Spinner')),
												qa(154),
												Fs('ngIf', e.checkSection('Switch')),
												qa(155),
												Fs('ngIf', e.checkSection('Tab')),
												qa(156),
												Fs('ngIf', e.checkSection('Table')),
												qa(157),
												Fs('ngIf', e.checkSection('Table')),
												qa(158),
												Fs('ngIf', e.checkSection('Table')),
												qa(159),
												Fs('ngIf', e.checkSection('Table')),
												qa(160),
												Fs('ngIf', e.checkSection('Table')),
												qa(161),
												Fs('ngIf', e.checkSection('Table')),
												qa(162),
												Fs('ngIf', e.checkSection('Tooltip')),
												qa(163),
												Fs('ngIf', e.checkSection('Typography')),
												qa(164),
												Fs('ngIf', e.checkSection('Typography')),
												qa(165),
												Fs('ngIf', e.checkSection('Typography')),
												qa(166),
												Fs('ngIf', e.checkSection('Utilities')),
												qa(167),
												Fs('ngIf', e.checkSection('Visibility')),
												qa(168),
												Fs('ngIf', e.checkSection('Visibility')),
												qa(169),
												Fs('ngIf', e.checkSection('Visibility')));
									},
									directives: [Hp, zp, pd, hd, md, wd, Ed],
									styles: [
										'.styleguide[_ngcontent-%COMP%]{margin-left:16rem}.styleguide[_ngcontent-%COMP%]   .hljs-attr[_ngcontent-%COMP%]{color:#954121}.styleguide-menu[_ngcontent-%COMP%]{left:2rem;top:5.5rem;width:14rem}.styleguide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#6a0080}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .styleguide[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:.875rem}.styleguide[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-width:15rem}#styleguide[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;color:#000;background:#f8f8ff;-webkit-text-size-adjust:none}.diff[_ngcontent-%COMP%]   .hljs-header[_ngcontent-%COMP%], .hljs-comment[_ngcontent-%COMP%]{color:#408080;font-style:italic}.assignment[_ngcontent-%COMP%], .css[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-subst[_ngcontent-%COMP%], .hljs-winutils[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#954121}.hljs-hexcolor[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%]{color:#40a070}.hljs-doctag[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-value[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{color:#219161}.hljs-id[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%]{color:#19469d}.hljs-params[_ngcontent-%COMP%]{color:#00f}.hljs-subst[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{font-weight:400}.haskell[_ngcontent-%COMP%]   .hljs-label[_ngcontent-%COMP%], .hljs-class[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-command[_ngcontent-%COMP%]{color:#458;font-weight:700}.django[_ngcontent-%COMP%]   .hljs-tag[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-rule[_ngcontent-%COMP%]   .hljs-property[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:navy;font-weight:400}.hljs-attr[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .instancevar[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-body[_ngcontent-%COMP%]{color:teal}.hljs-regexp[_ngcontent-%COMP%]{color:#b68}.hljs-class[_ngcontent-%COMP%]{color:#458;font-weight:700}.hljs-symbol[_ngcontent-%COMP%], .input_number[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .keymethods[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-special[_ngcontent-%COMP%]{color:#990073}.builtin[_ngcontent-%COMP%], .constructor[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#0086b3}.hljs-cdata[_ngcontent-%COMP%], .hljs-doctype[_ngcontent-%COMP%], .hljs-pi[_ngcontent-%COMP%], .hljs-pragma[_ngcontent-%COMP%], .hljs-preprocessor[_ngcontent-%COMP%], .hljs-shebang[_ngcontent-%COMP%]{color:#999;font-weight:700}.hljs-deletion[_ngcontent-%COMP%]{background:#fdd}.hljs-addition[_ngcontent-%COMP%]{background:#dfd}.diff[_ngcontent-%COMP%]   .hljs-change[_ngcontent-%COMP%]{background:#0086b3}.hljs-chunk[_ngcontent-%COMP%]{color:#aaa}.tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{opacity:.5}.flexbox[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:wrap}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][_ngcontent-%COMP%]{height:15.625rem;width:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][class*=wrap][_ngcontent-%COMP%]{width:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.col-full[_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][_ngcontent-%COMP%]{height:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][class*=wrap][_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.row[_ngcontent-%COMP%]{width:15.625rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;background-color:#2196f3;color:#fff;-webkit-box-pack:center;justify-content:center;min-height:6.25rem;min-width:7.5rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50;min-height:4.6875rem;min-width:6.25rem}.box[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:1rem;padding:0}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;text-align:center}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50}.box[_ngcontent-%COMP%]   p[class*=pad][_ngcontent-%COMP%]{display:inline-block;margin:0 1rem}'
									]
								})),
								t
							);
						})()
					},
					{ path: '', redirectTo: '/components', pathMatch: 'full' },
					{ path: '**', redirectTo: '/components', pathMatch: 'full' }
				],
				F_ = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[ub.forRoot(V_, { useHash: !0, anchorScrolling: 'enabled' })], ub]
						})),
						t
					);
				})();
			ub.forRoot(V_, { useHash: !0, anchorScrolling: 'enabled' });
			var B_ = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[Bp, Dd]]
						})),
						t
					);
				})(),
				q_ = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Ne({ type: t, bootstrap: [vb] })),
						(t.ngInjectorDef = _t({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[ed, Rd, F_, B_]]
						})),
						t
					);
				})();
			(function() {
				if (Er) throw new Error('Cannot enable prod mode after platform setup.');
				Pr = !1;
			})(),
				$f()
					.bootstrapModule(q_, { defaultEncapsulation: Ce.None })
					.catch(function(t) {
						return console.error(t);
					});
		},
		zn8P: function(t, e) {
			function n(t) {
				return Promise.resolve().then(function() {
					var e = new Error("Cannot find module '" + t + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				});
			}
			(n.keys = function() {
				return [];
			}),
				(n.resolve = n),
				(t.exports = n),
				(n.id = 'zn8P');
		}
	},
	[[0, 0]]
]);
