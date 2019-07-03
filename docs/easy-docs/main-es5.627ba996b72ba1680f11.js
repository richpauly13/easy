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
						(this.closed = !1), (this._parent = null), (this._parents = null), (this._subscriptions = null), t && (this._unsubscribe = t);
					}
					return (
						(t.prototype.unsubscribe = function() {
							var t,
								e = !1;
							if (!this.closed) {
								var n = this._parent,
									r = this._parents,
									o = this._unsubscribe,
									i = this._subscriptions;
								(this.closed = !0), (this._parent = null), (this._parents = null), (this._subscriptions = null);
								for (var a = -1, s = r ? r.length : 0; n; ) n.remove(this), (n = (++a < s && r[a]) || null);
								if (d(o))
									try {
										o.call(this);
									} catch (u) {
										(e = !0), (t = u instanceof g ? b(u.errors) : [u]);
									}
								if (p(i))
									for (a = -1, s = i.length; ++a < s; ) {
										var l = i[a];
										if (f(l))
											try {
												l.unsubscribe();
											} catch (u) {
												(e = !0), (t = t || []), u instanceof g ? (t = t.concat(b(u.errors))) : t.push(u);
											}
									}
								if (e) throw new g(t);
							}
						}),
						(t.prototype.add = function(e) {
							var n = e;
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
									if (!e) return t.EMPTY;
									throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
							}
							if (n._addParent(this)) {
								var o = this._subscriptions;
								o ? o.push(n) : (this._subscriptions = [n]);
							}
							return n;
						}),
						(t.prototype.remove = function(t) {
							var e = this._subscriptions;
							if (e) {
								var n = e.indexOf(t);
								-1 !== n && e.splice(n, 1);
							}
						}),
						(t.prototype._addParent = function(t) {
							var e = this._parent,
								n = this._parents;
							return e !== t && (e ? (n ? -1 === n.indexOf(t) && (n.push(t), !0) : ((this._parents = [t]), !0)) : ((this._parent = t), !0));
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
				});
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
							var t = this._parent,
								e = this._parents;
							return (this._parent = null), (this._parents = null), this.unsubscribe(), (this.closed = !1), (this.isStopped = !1), (this._parent = t), (this._parents = e), this;
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
						e.closed || e.complete();
					};
				},
				z = function(t) {
					return function(e) {
						return (
							t
								.then(
									function(t) {
										e.closed || (e.next(t), e.complete());
									},
									function(t) {
										return e.error(t);
									}
								)
								.then(null, w),
							e
						);
					};
				};
			function V() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			}
			var F = V(),
				B = function(t) {
					return function(e) {
						for (var n = t[F](); ; ) {
							var r = n.next();
							if (r.done) {
								e.complete();
								break;
							}
							if ((e.next(r.value), e.closed)) break;
						}
						return (
							'function' == typeof n.return &&
								e.add(function() {
									n.return && n.return();
								}),
							e
						);
					};
				},
				q = function(t) {
					return function(e) {
						var n = t[S]();
						if ('function' != typeof n.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
						return n.subscribe(e);
					};
				},
				G = function(t) {
					return t && 'number' == typeof t.length && 'function' != typeof t;
				};
			function Z(t) {
				return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
			}
			var W = function(t) {
				if (t instanceof I)
					return function(e) {
						return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e);
					};
				if (t && 'function' == typeof t[S]) return q(t);
				if (G(t)) return H(t);
				if (Z(t)) return z(t);
				if (t && 'function' == typeof t[F]) return B(t);
				var e = f(t) ? 'an invalid object' : "'" + t + "'";
				throw new TypeError('You provided ' + e + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.');
			};
			function Q(t, e, n, r, o) {
				if ((void 0 === o && (o = new L(t, n, r)), !o.closed)) return W(e)(o);
			}
			var Y = (function(t) {
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
			function J(t, e) {
				return function(n) {
					if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
					return n.lift(new K(t, e));
				};
			}
			var K = (function() {
					function t(t, e) {
						(this.project = t), (this.thisArg = e);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new X(t, this.project, this.thisArg));
						}),
						t
					);
				})(),
				X = (function(t) {
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
			function $(t, e) {
				return new I(
					e
						? function(n) {
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
						  }
						: H(t)
				);
			}
			function tt(t, e) {
				if (!e) return t instanceof I ? t : new I(W(t));
				if (null != t) {
					if (
						(function(t) {
							return t && 'function' == typeof t[S];
						})(t)
					)
						return (function(t, e) {
							return new I(
								e
									? function(n) {
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
									  }
									: q(t)
							);
						})(t, e);
					if (Z(t))
						return (function(t, e) {
							return new I(
								e
									? function(n) {
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
									  }
									: z(t)
							);
						})(t, e);
					if (G(t)) return $(t, e);
					if (
						(function(t) {
							return t && 'function' == typeof t[F];
						})(t) ||
						'string' == typeof t
					)
						return (function(t, e) {
							if (!t) throw new Error('Iterable cannot be null');
							return new I(
								e
									? function(n) {
											var r,
												o = new m();
											return (
												o.add(function() {
													r && 'function' == typeof r.return && r.return();
												}),
												o.add(
													e.schedule(function() {
														(r = t[F]()),
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
									  }
									: B(t)
							);
						})(t, e);
				}
				throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
			}
			function et(t, e, n) {
				return (
					void 0 === n && (n = Number.POSITIVE_INFINITY),
					'function' == typeof e
						? function(r) {
								return r.pipe(
									et(function(n, r) {
										return tt(t(n, r)).pipe(
											J(function(t, o) {
												return e(n, t, r, o);
											})
										);
									}, n)
								);
						  }
						: ('number' == typeof e && (n = e),
						  function(e) {
								return e.lift(new nt(t, n));
						  })
				);
			}
			var nt = (function() {
					function t(t, e) {
						void 0 === e && (e = Number.POSITIVE_INFINITY), (this.project = t), (this.concurrent = e);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new rt(t, this.project, this.concurrent));
						}),
						t
					);
				})(),
				rt = (function(t) {
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
							this.destination.add(r), Q(this, t, e, n, r);
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
				})(Y);
			function ot(t) {
				return t;
			}
			function it(t) {
				return void 0 === t && (t = Number.POSITIVE_INFINITY), et(ot, t);
			}
			function at() {
				return function(t) {
					return t.lift(new st(t));
				};
			}
			var st = (function() {
					function t(t) {
						this.connectable = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							var n = this.connectable;
							n._refCount++;
							var r = new lt(t, n),
								o = e.subscribe(r);
							return r.closed || (r.connection = n.connect()), o;
						}),
						t
					);
				})(),
				lt = (function(t) {
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
				ut = (function(t) {
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
									(t = this._connection = new m()).add(this.source.subscribe(new pt(this.getSubject(), this))),
									t.closed ? ((this._connection = null), (t = m.EMPTY)) : (this._connection = t)),
								t
							);
						}),
						(e.prototype.refCount = function() {
							return at()(this);
						}),
						e
					);
				})(I).prototype,
				ct = {
					operator: { value: null },
					_refCount: { value: 0, writable: !0 },
					_subject: { value: null, writable: !0 },
					_connection: { value: null, writable: !0 },
					_subscribe: { value: ut._subscribe },
					_isComplete: { value: ut._isComplete, writable: !0 },
					getSubject: { value: ut.getSubject },
					connect: { value: ut.connect },
					refCount: { value: ut.refCount }
				},
				pt = (function(t) {
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
			function ft() {
				return new D();
			}
			var dt = '__parameters__';
			function ht(t, e, n) {
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
						for (var r = t.hasOwnProperty(dt) ? t[dt] : Object.defineProperty(t, dt, { value: [] })[dt]; r.length <= n; ) r.push(null);
						return (r[n] = r[n] || []).push(i), t;
					}
				}
				return n && (o.prototype = Object.create(n.prototype)), (o.prototype.ngMetadataName = t), (o.annotationCls = o), o;
			}
			var gt = ht('Inject', function(t) {
					return { token: t };
				}),
				mt = ht('Optional'),
				bt = ht('Self'),
				vt = ht('SkipSelf'),
				yt = (function(t) {
					return (t[(t.Default = 0)] = 'Default'), (t[(t.Host = 1)] = 'Host'), (t[(t.Self = 2)] = 'Self'), (t[(t.SkipSelf = 4)] = 'SkipSelf'), (t[(t.Optional = 8)] = 'Optional'), t;
				})({});
			function wt(t) {
				for (var e in t) if (t[e] === wt) return e;
				throw Error('Could not find renamed property on target object.');
			}
			function _t(t, e) {
				for (var n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
			}
			function xt(t) {
				return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 };
			}
			function Ct(t) {
				return { factory: t.factory, providers: t.providers || [], imports: t.imports || [] };
			}
			function kt(t) {
				var e = t[Pt];
				return e && e.token === t ? e : null;
			}
			function St(t) {
				return t && t.hasOwnProperty(Et) ? t[Et] : null;
			}
			var Pt = wt({ ngInjectableDef: wt }),
				Et = wt({ ngInjectorDef: wt });
			function Ot(t) {
				if ('string' == typeof t) return t;
				if (t instanceof Array) return '[' + t.map(Ot).join(', ') + ']';
				if (null == t) return '' + t;
				if (t.overriddenName) return '' + t.overriddenName;
				if (t.name) return '' + t.name;
				var e = t.toString();
				if (null == e) return '' + e;
				var n = e.indexOf('\n');
				return -1 === n ? e : e.substring(0, n);
			}
			var It = wt({ __forward_ref__: wt });
			function Tt(t) {
				return (
					(t.__forward_ref__ = Tt),
					(t.toString = function() {
						return Ot(this());
					}),
					t
				);
			}
			function Mt(t) {
				var e = t;
				return 'function' == typeof e && e.hasOwnProperty(It) && e.__forward_ref__ === Tt ? e() : t;
			}
			var At,
				jt = 'undefined' != typeof globalThis && globalThis,
				Rt = 'undefined' != typeof window && window,
				Dt = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
				Nt = 'undefined' != typeof global && global,
				Ut = jt || Nt || Rt || Dt,
				Lt = (function() {
					function t(t, e) {
						(this._desc = t),
							(this.ngMetadataName = 'InjectionToken'),
							(this.ngInjectableDef = void 0),
							'number' == typeof e ? (this.__NG_ELEMENT_ID__ = e) : void 0 !== e && (this.ngInjectableDef = xt({ token: this, providedIn: e.providedIn || 'root', factory: e.factory }));
					}
					return (
						(t.prototype.toString = function() {
							return 'InjectionToken ' + this._desc;
						}),
						t
					);
				})(),
				Ht = new Lt('INJECTOR', -1),
				zt = new Object(),
				Vt = 'ngTempTokenPath',
				Ft = 'ngTokenPath',
				Bt = /\n/gm,
				qt = '\u0275',
				Gt = '__source',
				Zt = wt({ provide: String, useValue: wt }),
				Wt = void 0;
			function Qt(t) {
				var e = Wt;
				return (Wt = t), e;
			}
			function Yt(t) {
				var e = At;
				return (At = t), e;
			}
			function Jt(t, e) {
				return (
					void 0 === e && (e = yt.Default),
					(At ||
						function(t, e) {
							if ((void 0 === e && (e = yt.Default), void 0 === Wt)) throw new Error('inject() must be called from an injection context');
							return null === Wt ? Kt(t, void 0, e) : Wt.get(t, e & yt.Optional ? null : void 0, e);
						})(t, e)
				);
			}
			function Kt(t, e, n) {
				var r = kt(t);
				if (r && 'root' == r.providedIn) return void 0 === r.value ? (r.value = r.factory()) : r.value;
				if (n & yt.Optional) return null;
				if (void 0 !== e) return e;
				throw new Error('Injector: NOT_FOUND [' + Ot(t) + ']');
			}
			function Xt(t) {
				for (var e = [], n = 0; n < t.length; n++) {
					var r = Mt(t[n]);
					if (Array.isArray(r)) {
						if (0 === r.length) throw new Error('Arguments array must have arguments.');
						for (var o = void 0, i = yt.Default, a = 0; a < r.length; a++) {
							var s = r[a];
							s instanceof mt || 'Optional' === s.ngMetadataName || s === mt
								? (i |= yt.Optional)
								: s instanceof vt || 'SkipSelf' === s.ngMetadataName || s === vt
								? (i |= yt.SkipSelf)
								: s instanceof bt || 'Self' === s.ngMetadataName || s === bt
								? (i |= yt.Self)
								: (o = s instanceof gt || s === gt ? s.token : s);
						}
						e.push(Jt(o, i));
					} else e.push(Jt(r));
				}
				return e;
			}
			var $t = (function() {
				function t() {}
				return (
					(t.prototype.get = function(t, e) {
						if ((void 0 === e && (e = zt), e === zt)) {
							var n = new Error('NullInjectorError: No provider for ' + Ot(t) + '!');
							throw ((n.name = 'NullInjectorError'), n);
						}
						return e;
					}),
					t
				);
			})();
			function te(t) {
				throw new Error('Multiple components match node with tagname ' + t.tagName);
			}
			function ee() {
				throw new Error('Cannot mix multi providers and regular providers');
			}
			var ne = new Lt('The presence of this token marks an injector as being the root injector.'),
				re = {},
				oe = {},
				ie = [],
				ae = void 0;
			function se() {
				return void 0 === ae && (ae = new $t()), ae;
			}
			function le(t, e, n, r) {
				return void 0 === e && (e = null), void 0 === n && (n = null), (e = e || se()), new ue(t, n, e, r);
			}
			var ue = (function() {
				function t(t, e, n, r) {
					var o = this;
					void 0 === r && (r = null), (this.parent = n), (this.records = new Map()), (this.injectorDefTypes = new Set()), (this.onDestroy = new Set()), (this._destroyed = !1);
					var i = [];
					de([t], function(t) {
						return o.processInjectorType(t, [], i);
					}),
						e &&
							de(e, function(n) {
								return o.processProvider(n, t, e);
							}),
						this.records.set(Ht, fe(void 0, this)),
						(this.isRootInjector = this.records.has(ne)),
						this.injectorDefTypes.forEach(function(t) {
							return o.get(t);
						}),
						(this.source = r || ('object' == typeof t ? null : Ot(t)));
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
						void 0 === e && (e = zt), void 0 === n && (n = yt.Default), this.assertNotDestroyed();
						var r,
							o = Qt(this);
						try {
							if (!(n & yt.SkipSelf)) {
								var i = this.records.get(t);
								if (void 0 === i) {
									var a = ('function' == typeof (r = t) || ('object' == typeof r && r instanceof Lt)) && kt(t);
									a && this.injectableDefInScope(a) && ((i = fe(ce(t), re)), this.records.set(t, i));
								}
								if (void 0 !== i) return this.hydrate(t, i);
							}
							return (n & yt.Self ? se() : this.parent).get(t, n & yt.Optional ? null : e);
						} catch (s) {
							if ('NullInjectorError' === s.name) {
								if (((s[Vt] = s[Vt] || []).unshift(Ot(t)), o)) throw s;
								return (function(t, e, n, r) {
									var o = t[Vt];
									throw (e[Gt] && o.unshift(e[Gt]),
									(t.message = (function(t, e, n, r) {
										void 0 === r && (r = null), (t = t && '\n' === t.charAt(0) && t.charAt(1) == qt ? t.substr(2) : t);
										var o = Ot(e);
										if (e instanceof Array) o = e.map(Ot).join(' -> ');
										else if ('object' == typeof e) {
											var i = [];
											for (var a in e)
												if (e.hasOwnProperty(a)) {
													var s = e[a];
													i.push(a + ':' + ('string' == typeof s ? JSON.stringify(s) : Ot(s)));
												}
											o = '{' + i.join(', ') + '}';
										}
										return n + (r ? '(' + r + ')' : '') + '[' + o + ']: ' + t.replace(Bt, '\n  ');
									})('\n' + t.message, o, n, r)),
									(t[Ft] = o),
									(t[Vt] = null),
									t);
								})(s, t, 'R3InjectorError', this.source);
							}
							throw s;
						} finally {
							Qt(o);
						}
					}),
					(t.prototype.toString = function() {
						var t = [];
						return (
							this.records.forEach(function(e, n) {
								return t.push(Ot(n));
							}),
							'R3Injector[' + t.join(', ') + ']'
						);
					}),
					(t.prototype.assertNotDestroyed = function() {
						if (this._destroyed) throw new Error('Injector has already been destroyed.');
					}),
					(t.prototype.processInjectorType = function(t, e, n) {
						var r = this;
						if (!(t = Mt(t))) return !1;
						var o = St(t),
							i = (null == o && t.ngModule) || void 0,
							a = void 0 === i ? t : i,
							s = -1 !== n.indexOf(a);
						if ((void 0 !== i && (o = St(i)), null == o)) return !1;
						if ((this.injectorDefTypes.add(a), this.records.set(a, fe(o.factory, re)), null != o.imports && !s)) {
							var l;
							n.push(a);
							try {
								de(o.imports, function(t) {
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
											de(o, function(t) {
												return r.processProvider(t, n, o || ie);
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
							de(p, function(t) {
								return r.processProvider(t, f, p);
							});
						}
						return void 0 !== i && void 0 !== t.providers;
					}),
					(t.prototype.processProvider = function(t, e, n) {
						var r = ge((t = Mt(t))) ? t : Mt(t && t.provide),
							o = (function(t, e, n) {
								var r = pe(t, e, n);
								return he(t) ? fe(void 0, t.useValue) : fe(r, re);
							})(t, e, n);
						if (ge(t) || !0 !== t.multi) {
							var i = this.records.get(r);
							i && void 0 !== i.multi && ee();
						} else {
							var a = this.records.get(r);
							a
								? void 0 === a.multi && ee()
								: (((a = fe(void 0, re, !0)).factory = function() {
										return Xt(a.multi);
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
							e.value === oe
								? (function(t) {
										throw new Error('Cannot instantiate cyclic dependency! ' + t);
								  })(Ot(t))
								: e.value === re && ((e.value = oe), (e.value = e.factory())),
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
			function ce(t) {
				var e = kt(t);
				if (null !== e) return e.factory;
				var n = St(t);
				if (null !== n) return n.factory;
				if (t instanceof Lt) throw new Error('Token ' + Ot(t) + ' is missing an ngInjectableDef definition.');
				if (t instanceof Function)
					return (function(t) {
						var e = t.length;
						if (e > 0) {
							var n = new Array(e).fill('?');
							throw new Error("Can't resolve all parameters for " + Ot(t) + ': (' + n.join(', ') + ').');
						}
						var r,
							o =
								(r = t) && r[Pt]
									? (console.warn(
											'DEPRECATED: DI is instantiating a token "' +
												r.name +
												'" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "' +
												r.name +
												'" class.'
									  ),
									  r[Pt])
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
			function pe(t, e, n) {
				var r,
					o = void 0;
				if (ge(t)) return ce(Mt(t));
				if (he(t))
					o = function() {
						return Mt(t.useValue);
					};
				else if ((r = t) && r.useExisting)
					o = function() {
						return Jt(Mt(t.useExisting));
					};
				else if (t && t.useFactory)
					o = function() {
						return t.useFactory.apply(t, c(Xt(t.deps || [])));
					};
				else {
					var i = Mt(t && (t.useClass || t.provide));
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
								new Error("Invalid provider for the NgModule '" + Ot(t) + "'" + r));
							})(e, n, t),
						!t.deps)
					)
						return ce(i);
					o = function() {
						return new (i.bind.apply(i, c([void 0], Xt(t.deps))))();
					};
				}
				return o;
			}
			function fe(t, e, n) {
				return void 0 === n && (n = !1), { factory: t, value: e, multi: n ? [] : void 0 };
			}
			function de(t, e) {
				t.forEach(function(t) {
					return Array.isArray(t) ? de(t, e) : e(t);
				});
			}
			function he(t) {
				return null !== t && 'object' == typeof t && Zt in t;
			}
			function ge(t) {
				return 'function' == typeof t;
			}
			var me = function(t, e, n) {
					return le({ name: n }, e, t, n);
				},
				be = (function() {
					function t() {}
					return (
						(t.create = function(t, e) {
							return Array.isArray(t) ? me(t, e, '') : me(t.providers, t.parent, t.name || '');
						}),
						(t.THROW_IF_NOT_FOUND = zt),
						(t.NULL = new $t()),
						(t.ngInjectableDef = xt({
							token: t,
							providedIn: 'any',
							factory: function() {
								return Jt(Ht);
							}
						})),
						(t.__NG_ELEMENT_ID__ = -1),
						t
					);
				})(),
				ve = 'ngDebugContext',
				ye = 'ngOriginalError',
				we = new Lt('AnalyzeForEntryComponents'),
				_e = (function(t) {
					return (t[(t.OnPush = 0)] = 'OnPush'), (t[(t.Default = 1)] = 'Default'), t;
				})({}),
				xe = new Map(),
				Ce = new Set();
			function ke(t) {
				return 'string' == typeof t ? t : t.text();
			}
			var Se = (function(t) {
					return (t[(t.Emulated = 0)] = 'Emulated'), (t[(t.Native = 1)] = 'Native'), (t[(t.None = 2)] = 'None'), (t[(t.ShadowDom = 3)] = 'ShadowDom'), t;
				})({}),
				Pe = {},
				Ee = [],
				Oe = wt({ ngComponentDef: wt }),
				Ie = wt({ ngDirectiveDef: wt }),
				Te = wt({ ngPipeDef: wt }),
				Me = wt({ ngModuleDef: wt }),
				Ae = wt({ ngLocaleIdDef: wt }),
				je = wt({ __NG_ELEMENT_ID__: wt }),
				Re = 0;
			function De(t) {
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
						onPush: t.changeDetection === _e.OnPush,
						directiveDefs: null,
						pipeDefs: null,
						selectors: t.selectors,
						viewQuery: t.viewQuery || null,
						features: t.features || null,
						data: t.data || {},
						encapsulation: t.encapsulation || Se.Emulated,
						id: 'c',
						styles: t.styles || Ee,
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
								(o.id += Re++),
									(o.inputs = He(t.inputs, r)),
									(o.outputs = He(t.outputs)),
									i &&
										i.forEach(function(t) {
											return t(o);
										}),
									(o.directiveDefs = n
										? function() {
												return ('function' == typeof n ? n() : n).map(Ne);
										  }
										: null),
									(o.pipeDefs = a
										? function() {
												return ('function' == typeof a ? a() : a).map(Ue);
										  }
										: null),
									e.hasOwnProperty(Pt) || (e[Pt] = xt({ token: e, factory: t.factory }));
							}
						}),
					o
				);
			}
			function Ne(t) {
				return (
					Ve(t) ||
					(function(t) {
						return t[Ie] || null;
					})(t)
				);
			}
			function Ue(t) {
				return (function(t) {
					return t[Te] || null;
				})(t);
			}
			function Le(t) {
				return {
					type: t.type,
					bootstrap: t.bootstrap || Ee,
					declarations: t.declarations || Ee,
					imports: t.imports || Ee,
					exports: t.exports || Ee,
					transitiveCompileScopes: null,
					schemas: t.schemas || null,
					id: t.id || null
				};
			}
			function He(t, e) {
				if (null == t) return Pe;
				var n = {};
				for (var r in t)
					if (t.hasOwnProperty(r)) {
						var o = t[r],
							i = o;
						Array.isArray(o) && ((i = o[1]), (o = o[0])), (n[o] = r), e && (e[o] = i);
					}
				return n;
			}
			var ze = De;
			function Ve(t) {
				return t[Oe] || null;
			}
			function Fe(t, e) {
				var n = t[Me] || null;
				if (!n && !0 === e) throw new Error('Type ' + Ot(t) + " does not have 'ngModuleDef' property.");
				return n;
			}
			function Be(t) {
				return 'string' == typeof t ? t : null == t ? '' : '' + t;
			}
			function qe(t) {
				return 'function' == typeof t ? t.name || t.toString() : 'object' == typeof t && null != t && 'function' == typeof t.type ? t.type.name || t.type.toString() : Be(t);
			}
			var Ge = (function() {
					return (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(Ut);
				})(),
				Ze = '\ufffd';
			function We(t) {
				return t instanceof Function ? t() : t;
			}
			var Qe = 0,
				Ye = 1,
				Je = 2,
				Ke = 3,
				Xe = 4,
				$e = 5,
				tn = 6,
				en = 7,
				nn = 8,
				rn = 9,
				on = 10,
				an = 11,
				sn = 12,
				ln = 13,
				un = 14,
				cn = 15,
				pn = 17,
				fn = 18,
				dn = 20,
				hn = 1,
				gn = 2,
				mn = 7,
				bn = 9,
				vn = '__ngContext__';
			function yn(t) {
				for (; Array.isArray(t); ) t = t[Qe];
				return t;
			}
			function wn(t) {
				return Array.isArray(t) && 'object' == typeof t[hn];
			}
			function _n(t) {
				return Array.isArray(t) && !0 === t[hn];
			}
			function xn(t) {
				return Array.isArray(t) && 'number' == typeof t[hn];
			}
			function Cn(t, e) {
				return yn(e[t + dn]);
			}
			function kn(t, e) {
				return yn(e[t.index]);
			}
			function Sn(t, e) {
				return e[Ye].data[t + dn];
			}
			function Pn(t, e) {
				var n = e[t];
				return wn(n) ? n : n[Qe];
			}
			function En(t) {
				return 0 != (4 & t.flags);
			}
			function On(t) {
				return 1 == (1 & t.flags);
			}
			function In(t) {
				return null !== t.template;
			}
			function Tn(t) {
				return 0 != (512 & t[Je]);
			}
			function Mn(t) {
				var e = (function(t) {
					return t[vn];
				})(t);
				return e ? (Array.isArray(e) ? e : e.lView) : null;
			}
			function An(t) {
				return _n(t[Ke]);
			}
			function jn(t) {
				t[fn] = 0;
			}
			function Rn(t, e, n, r, o, i) {
				var a = e.onChanges,
					s = e.onInit,
					l = e.doCheck;
				o >= 0 && (!n.preOrderHooks || o === n.preOrderHooks.length) && (a || s || l) && (n.preOrderHooks || (n.preOrderHooks = [])).push(r),
					i >= 0 && (!n.preOrderCheckHooks || i === n.preOrderCheckHooks.length) && (a || l) && (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(r),
					a && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, a), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, a)),
					s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s),
					l && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, l), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, l));
			}
			function Dn(t, e) {
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
			function Nn(t, e, n, r) {
				n || Un(t, e.preOrderHooks, e.preOrderCheckHooks, n, 0, void 0 !== r ? r : null);
			}
			function Un(t, e, n, r, o, i) {
				if (!r) {
					var a = (3 & t[Je]) === o ? e : n;
					a &&
						(function(t, e, n, r) {
							for (var o = null != r ? r : -1, i = 0, a = void 0 !== r ? 65535 & t[fn] : 0; a < e.length; a++)
								if ('number' == typeof e[a + 1]) {
									if (((i = e[a]), null != r && i >= r)) break;
								} else e[a] < 0 && (t[fn] += 65536), (i < o || -1 == o) && (Ln(t, n, e, a), (t[fn] = (4294901760 & t[fn]) + a + 2)), a++;
						})(t, a, o, i),
						null == i && (3 & t[Je]) === o && 3 !== o && ((t[Je] &= 1023), (t[Je] += 1));
				}
			}
			function Ln(t, e, n, r) {
				var o = n[r] < 0,
					i = n[r + 1],
					a = t[o ? -n[r] : n[r]];
				o ? t[Je] >> 10 < t[fn] >> 16 && (3 & t[Je]) === e && ((t[Je] += 1024), i.call(a)) : i.call(a);
			}
			var Hn,
				zn = null;
			function Vn(t) {
				zn = t;
			}
			var Fn,
				Bn = null;
			function qn(t) {
				Bn = t;
			}
			function Gn() {
				return Qn;
			}
			var Zn,
				Wn,
				Qn,
				Yn = 1,
				Jn = Yn,
				Kn = 0,
				Xn = 0;
			function $n(t) {
				void 0 === t && (t = null), Cr !== t && (Sr(null == t ? -1 : t), (Jn = null == t ? 0 : Yn), (Kn = 0), (Xn = 0));
			}
			function tr() {
				return Jn;
			}
			function er() {
				(Jn += 1 + Xn), (Kn = 0), (Xn = 0);
			}
			function nr(t) {
				(Kn += t), (Xn = Math.max(Xn, Kn));
			}
			function rr() {
				return Kn;
			}
			function or(t) {
				pr = t;
			}
			function ir() {
				return Zn;
			}
			function ar(t, e) {
				(Zn = t), (Wn = e);
			}
			function sr(t, e) {
				(Zn = t), (Qn = e);
			}
			function lr() {
				return Wn;
			}
			function ur() {
				Wn = !1;
			}
			function cr(t) {
				return void 0 === t && (t = Qn), 4 == (4 & t[Je]);
			}
			var pr = null,
				fr = !1;
			function dr() {
				return fr;
			}
			function hr(t) {
				fr = t;
			}
			var gr = -1;
			function mr() {
				return gr;
			}
			function br(t) {
				gr = t;
			}
			var vr = 0;
			function yr() {
				return vr;
			}
			function wr(t) {
				vr = t;
			}
			function _r(t, e) {
				var n = Qn;
				return t && (gr = t[Ye].bindingStartIndex), (Zn = e), (Wn = !0), (Qn = pr = t), n;
			}
			function xr(t, e) {
				var n = Qn[Ye];
				if (cr(Qn)) Qn[Je] &= -5;
				else
					try {
						jn(Qn), e && Un(Qn, n.viewHooks, n.viewCheckHooks, fr, 2, void 0);
					} finally {
						(Qn[Je] &= -73), (Qn[en] = n.bindingStartIndex);
					}
				Vn(null), _r(t, null);
			}
			var Cr = -1;
			function kr() {
				return Cr;
			}
			function Sr(t) {
				(Cr = t), Vn(null);
			}
			var Pr = null,
				Er = '__SANITIZER_TRUSTED_BRAND__',
				Or = !0,
				Ir = !1;
			function Tr() {
				return (Ir = !0), Or;
			}
			var Mr = (function() {
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
				Ar = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				jr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function Rr(t) {
				return (t = String(t)).match(Ar) || t.match(jr) ? t : (Tr() && console.warn('WARNING: sanitizing unsafe URL value ' + t + ' (see http://g.co/ng/security#xss)'), 'unsafe:' + t);
			}
			function Dr(t) {
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
			function Nr() {
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
			var Ur,
				Lr = Dr('area,br,col,hr,img,wbr'),
				Hr = Dr('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				zr = Dr('rp,rt'),
				Vr = Nr(zr, Hr),
				Fr = Nr(
					Lr,
					Nr(
						Hr,
						Dr(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					Nr(
						zr,
						Dr(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					Vr
				),
				Br = Dr('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				qr = Dr('srcset'),
				Gr = Nr(
					Br,
					qr,
					Dr(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					),
					Dr(
						'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
					)
				),
				Zr = Dr('script,style,template'),
				Wr = (function() {
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
							if (!Fr.hasOwnProperty(n)) return (this.sanitizedSomething = !0), !Zr.hasOwnProperty(n);
							this.buf.push('<'), this.buf.push(n);
							for (var r = t.attributes, o = 0; o < r.length; o++) {
								var i = r.item(o),
									a = i.name,
									s = a.toLowerCase();
								if (Gr.hasOwnProperty(s)) {
									var l = i.value;
									Br[s] && (l = Rr(l)),
										qr[s] &&
											((e = l),
											(l = (e = String(e))
												.split(',')
												.map(function(t) {
													return Rr(t.trim());
												})
												.join(', '))),
										this.buf.push(' ', a, '="', Jr(l), '"');
								} else this.sanitizedSomething = !0;
							}
							return this.buf.push('>'), !0;
						}),
						(t.prototype.endElement = function(t) {
							var e = t.nodeName.toLowerCase();
							Fr.hasOwnProperty(e) && !Lr.hasOwnProperty(e) && (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
						}),
						(t.prototype.chars = function(t) {
							this.buf.push(Jr(t));
						}),
						(t.prototype.checkClobberedElement = function(t, e) {
							if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
								throw new Error('Failed to sanitize html because the element is clobbered: ' + t.outerHTML);
							return e;
						}),
						t
					);
				})(),
				Qr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				Yr = /([^\#-~ |!])/g;
			function Jr(t) {
				return t
					.replace(/&/g, '&amp;')
					.replace(Qr, function(t) {
						return '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(Yr, function(t) {
						return '&#' + t.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			function Kr(t, e) {
				var n = null;
				try {
					Ur = Ur || new Mr(t);
					var r = e ? String(e) : '';
					n = Ur.getInertBodyElement(r);
					var o = 5,
						i = r;
					do {
						if (0 === o) throw new Error('Failed to sanitize html because the input is unstable');
						o--, (r = i), (i = n.innerHTML), (n = Ur.getInertBodyElement(r));
					} while (r !== i);
					var a = new Wr(),
						s = a.sanitizeChildren(Xr(n) || n);
					return Tr() && a.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), s;
				} finally {
					if (n) for (var l = Xr(n) || n; l.firstChild; ) l.removeChild(l.firstChild);
				}
			}
			function Xr(t) {
				return 'content' in t &&
					(function(t) {
						return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
					})(t)
					? t.content
					: null;
			}
			var $r = (function(t) {
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
				to = (function() {
					return function() {};
				})(),
				eo = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				no = /^url\(([^)]+)\)$/;
			function ro(t) {
				var e,
					n,
					r = (e = Gn()) && e[ln];
				return r ? r.sanitize($r.HTML, t) || '' : ('Html', (n = t) instanceof String && 'Html' === n[Er] ? t.toString() : Kr(document, Be(t)));
			}
			var oo = 8,
				io = 8,
				ao = 9,
				so = -1,
				lo = (function() {
					return function(t, e, n) {
						(this.factory = t), (this.resolving = !1), (this.canSeeViewProviders = e), (this.injectImpl = n);
					};
				})(),
				uo = (function(t) {
					return (t[(t.Important = 1)] = 'Important'), (t[(t.DashCase = 2)] = 'DashCase'), t;
				})({});
			function co(t) {
				return !!t.listen;
			}
			var po = {
				createRenderer: function(t, e) {
					return document;
				}
			};
			function fo(t, e) {
				t[vn] = e;
			}
			var ho = (function() {
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
				go = 0,
				mo = '@';
			function bo(t, e, n, r) {
				var o = [t || null, 0, [], n || [null, null], r || [null, null], [0, 0], [0], [0], null, null];
				return vo(o, go), o;
			}
			function vo(t, e, n, r) {
				void 0 === n && (n = -1);
				for (var o = t[2], i = 2 * e, a = i + 2, s = o.length; s < a; s += 2) o.push(-1, null);
				var l = i + 0;
				n >= 0 && -1 === o[l] && ((o[l] = n), (o[i + 1] = r || null));
			}
			function yo(t, e) {
				for (var n = t, r = e[n], o = e; Array.isArray(r); ) (o = r), (r = r[Qe]);
				if (xn(o)) return o;
				var i = Sn(t - dn, e).stylingTemplate;
				return (
					o !== e && (n = Qe),
					(o[n] = i
						? (function(t, e) {
								for (var n = e.slice(), r = 0; r < 10; r++) {
									var o = e[r];
									Array.isArray(o) && (n[r] = o.slice());
								}
								return (n[0] = t), (n[1] |= 16), n;
						  })(r, i)
						: bo(r))
				);
			}
			function wo(t) {
				return t[0] === mo;
			}
			function _o(t) {
				return 0 != (8 & t.flags);
			}
			function xo(t, e, n, r, o, i) {
				return (
					(i = i || n),
					o ? (t[o] = r) : t.push(r),
					!!r &&
						(r.addEventListener(200, function() {
							var e = t.indexOf(r);
							e && (e < t[0] ? (t[e] = null) : t.splice(e, 1)), r.destroy();
						}),
						(e.playerHandler || (e.playerHandler = new ho())).queuePlayer(r, i),
						!0)
				);
			}
			function Co(t) {
				return 3 === t || 4 === t || 6 === t;
			}
			function ko(t) {
				return t !== so;
			}
			function So(t) {
				return 32767 & t;
			}
			function Po(t) {
				return t >> 16;
			}
			function Eo(t, e) {
				for (var n = Po(t), r = e; n > 0; ) (r = r[pn]), n--;
				return r;
			}
			function Oo(t) {
				var e = t[Ke];
				return _n(e) ? e[Ke] : e;
			}
			function Io(t) {
				for (var e = t[tn]; null !== e && 2 === e.type; ) e = (t = t[pn])[tn];
				return t;
			}
			function To(t) {
				return (function(t) {
					for (var e = wn(t) ? t : Mn(t); e && !(512 & e[Je]); ) e = Oo(e);
					return e;
				})(t)[rn];
			}
			var Mo = !0;
			function Ao(t) {
				var e = Mo;
				return (Mo = t), e;
			}
			var jo = 255,
				Ro = 0;
			function Do(t, e) {
				var n = Uo(t, e);
				if (-1 !== n) return n;
				var r = e[Ye];
				r.firstTemplatePass && ((t.injectorIndex = e.length), No(r.data, t), No(e, null), No(r.blueprint, null));
				var o = Lo(t, e),
					i = So(o),
					a = Eo(o, e),
					s = t.injectorIndex;
				if (ko(o)) for (var l = a[Ye].data, u = 0; u < 8; u++) e[s + u] = a[i + u] | l[i + u];
				return (e[s + io] = o), s;
			}
			function No(t, e) {
				t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
			}
			function Uo(t, e) {
				return -1 === t.injectorIndex || (t.parent && t.parent.injectorIndex === t.injectorIndex) || null == e[t.injectorIndex + io] ? -1 : t.injectorIndex;
			}
			function Lo(t, e) {
				if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
				for (var n = e[tn], r = 1; n && -1 === n.injectorIndex; ) (n = (e = e[pn]) ? e[tn] : null), r++;
				return n ? n.injectorIndex | (r << 16) : -1;
			}
			function Ho(t, e, n) {
				!(function(t, e, n) {
					var r = 'string' != typeof n ? n[je] : n.charCodeAt(0) || 0;
					null == r && (r = n[je] = Ro++);
					var o = r & jo,
						i = 1 << o,
						a = 64 & o,
						s = 32 & o,
						l = e.data;
					128 & o ? (a ? (s ? (l[t + 7] |= i) : (l[t + 6] |= i)) : s ? (l[t + 5] |= i) : (l[t + 4] |= i)) : a ? (s ? (l[t + 3] |= i) : (l[t + 2] |= i)) : s ? (l[t + 1] |= i) : (l[t] |= i);
				})(t, e[Ye], n);
			}
			function zo(t, e, n, r, o) {
				if ((void 0 === r && (r = yt.Default), t)) {
					var i = (function(t) {
						if ('string' == typeof t) return t.charCodeAt(0) || 0;
						var e = t[je];
						return 'number' == typeof e && e > 0 ? e & jo : e;
					})(n);
					if ('function' == typeof i) {
						var a = ir(),
							s = Gn();
						sr(t, e);
						try {
							var l = i();
							if (null != l || r & yt.Optional) return l;
							throw new Error('No provider for ' + qe(n) + '!');
						} finally {
							sr(a, s);
						}
					} else if ('number' == typeof i) {
						if (-1 === i) return new Wo(t, e);
						var u = null,
							c = Uo(t, e),
							p = so,
							f = r & yt.Host ? Io(e)[tn] : null;
						for ((-1 === c || r & yt.SkipSelf) && ((p = -1 === c ? Lo(t, e) : e[c + io]), Zo(r, !1) ? ((u = e[Ye]), (c = So(p)), (e = Eo(p, e))) : (c = -1)); -1 !== c; ) {
							p = e[c + io];
							var d = e[Ye];
							if (Go(i, c, d.data)) {
								var h = Fo(c, e, n, u, r, f);
								if (h !== Vo) return h;
							}
							Zo(r, e[Ye].data[c + oo] === f) && Go(i, c, e) ? ((u = d), (c = So(p)), (e = Eo(p, e))) : (c = -1);
						}
					}
				}
				if ((r & yt.Optional && void 0 === o && (o = null), 0 == (r & (yt.Self | yt.Host)))) {
					var g = e[on],
						m = Yt(void 0);
					try {
						return g ? g.get(n, o, r & yt.Optional) : Kt(n, o, r & yt.Optional);
					} finally {
						Yt(m);
					}
				}
				if (r & yt.Optional) return o;
				throw new Error('NodeInjector: NOT_FOUND [' + qe(n) + ']');
			}
			var Vo = {};
			function Fo(t, e, n, r, o, i) {
				var a = e[Ye],
					s = a.data[t + oo],
					l = Bo(s, a, n, null == r ? On(s) && Mo : r != a && 3 === s.type, o & yt.Host && i === s);
				return null !== l ? qo(a.data, e, l, s) : Vo;
			}
			function Bo(t, e, n, r, o) {
				for (var i = t.providerIndexes, a = e.data, s = 65535 & i, l = t.directiveStart, u = i >> 16, c = o ? s + u : t.directiveEnd, p = r ? s : s + u; p < c; p++) {
					var f = a[p];
					if ((p < l && n === f) || (p >= l && f.type === n)) return p;
				}
				if (o) {
					var d = a[l];
					if (d && In(d) && d.type === n) return l;
				}
				return null;
			}
			function qo(t, e, n, r) {
				var o,
					i = e[n];
				if (null !== (o = i) && 'object' == typeof o && Object.getPrototypeOf(o) == lo.prototype) {
					var a = i;
					if (a.resolving) throw new Error('Circular dep for ' + qe(t[n]));
					var s = Ao(a.canSeeViewProviders);
					a.resolving = !0;
					var l = void 0;
					a.injectImpl && (l = Yt(a.injectImpl));
					var u = ir(),
						c = Gn();
					sr(r, e);
					try {
						i = e[n] = a.factory(null, t, e, r);
					} finally {
						a.injectImpl && Yt(l), Ao(s), (a.resolving = !1), sr(u, c);
					}
				}
				return i;
			}
			function Go(t, e, n) {
				var r = 64 & t,
					o = 32 & t;
				return !!((128 & t ? (r ? (o ? n[e + 7] : n[e + 6]) : o ? n[e + 5] : n[e + 4]) : r ? (o ? n[e + 3] : n[e + 2]) : o ? n[e + 1] : n[e]) & (1 << t));
			}
			function Zo(t, e) {
				return !(t & yt.Self || (t & yt.Host && e));
			}
			var Wo = (function() {
				function t(t, e) {
					(this._tNode = t), (this._lView = e);
				}
				return (
					(t.prototype.get = function(t, e) {
						return zo(this._tNode, this._lView, t, void 0, e);
					}),
					t
				);
			})();
			function Qo(t) {
				return t[ve];
			}
			function Yo(t) {
				return t[ye];
			}
			function Jo(t) {
				for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
				t.error.apply(t, c(e));
			}
			var Ko = (function() {
					function t() {
						this._console = console;
					}
					return (
						(t.prototype.handleError = function(t) {
							var e = this._findOriginalError(t),
								n = this._findContext(t),
								r = (function(t) {
									return t.ngErrorLogger || Jo;
								})(t);
							r(this._console, 'ERROR', t), e && r(this._console, 'ORIGINAL ERROR', e), n && r(this._console, 'ERROR CONTEXT', n);
						}),
						(t.prototype._findContext = function(t) {
							return t ? (Qo(t) ? Qo(t) : this._findContext(Yo(t))) : null;
						}),
						(t.prototype._findOriginalError = function(t) {
							for (var e = Yo(t); e && Yo(e); ) e = Yo(e);
							return e;
						}),
						t
					);
				})(),
				Xo = {},
				$o = (function() {
					return function(t, e) {
						(this.fn = t), (this.value = e);
					};
				})();
			function ti(t, e, n, r) {
				for (var o = 2; o < t.length; o += 3) if (t[o + 0] === e) return void (Li(t[o + 1], n, t[o + 2], r) && Bi(o, t, e, n, r));
				Bi(null, t, e, n, r);
			}
			function ei(t, e, n, r) {
				for (var o = e[4], i = r || 2; i < o.length; ) o[i + 1] && ai(t, o[i + 0], !0, n, null), (i += 3);
				return i;
			}
			function ni(t, e, n, r) {
				for (var o = e[3], i = r || 2; i < o.length; ) {
					var a = o[i + 1];
					a && ii(t, o[i + 0], a, n, null), (i += 3);
				}
				return i;
			}
			function ri(t, e, n, r) {
				for (var o = n; o < r; o += 4) if (Si(t, o) === e) return o;
				return -1;
			}
			function oi(t, e, n) {
				void 0 === n && (n = 0),
					(function(t, e, n, r) {
						if (
							(void 0 === r && (r = 0),
							!(function(t, e, n, r) {
								return !t[6][1 + 4 * n + 0] && (r === Xo || zi(t, !0, n) === r);
							})(t, 0, r, e))
						) {
							var o,
								i,
								a = (e = e === Xo ? zi(t, !0, r) : e) instanceof $o ? new Ri(e, t[0], 1) : null,
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
							'string' == typeof s ? ((i = s.split(/\s+/)), (c = !0)) : (i = s ? Object.keys(s) : Ee),
								(o = gi(t)),
								(function(t, e, n, r, i, a, s, l, u) {
									for (
										var c = !1, p = 1 + 4 * e, f = t[6], d = f[p + 1], h = f[p + 3], g = 1 === f[p + 0] || !(f[p + 2] || !l), m = 0, b = 0, v = !0 === s, y = o, w = a.length;
										y < d;

									) {
										var _ = Si(t, y);
										if (w)
											for (var x = 0; x < a.length; x++) {
												if ((O = (E = a[x]) || null) && _ === O) {
													var C = ki(t, y),
														k = Di(t, y),
														S = !!v || s[O],
														P = Ci(t, y);
													ji(P, C, S) && Li(C, S, k, e) && (vi(t, y, S), yi(t, y, n, e), Ai(t, P, S) && (si(t, y, !0), (c = !0))), (a[x] = null), w--;
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
													if (Si(t, T) === O) {
														var M = Di(t, T),
															A = wi(t, T),
															j = ki(t, T),
															R = Ci(t, T);
														Li(j, S, M, e) &&
															(I && (Oi(t, y, T), m++),
															ji(R, j, S) &&
																((null === S || (void 0 === S && S !== j)) && (g = !0), vi(t, y, S), (null !== j || Ai(t, R, S)) && (si(t, y, !0), (c = !0))),
															(M === e && n === A) || yi(t, y, n, e)),
															(y += 4);
														continue t;
													}
												}
												if (null != S) (g = !0), m++, Ii(t, I ? y : d + 4 * b, !0, O, 1 | Mi(t, O, !0, null), S, e, n), b++, (i += 4), (y += 4), (c = !0);
											}
										}
									}
									for (; y < i; ) {
										g = !0;
										var D = ki(t, y),
											N = Ci(t, y);
										Di(t, y), null != D && (g = !0), ji(N, D, null) && (vi(t, y, null), Ai(t, N, D) && (si(t, y, !0), (c = !0)), yi(t, y, n, e)), (y += 4);
									}
									(function(t, e, n, r, o, i, a, s) {
										var l = t[6],
											u = 1 + 4 * e;
										if (s) for (var c = o + 4 * a, p = u + 4; p < l.length; p += 4) (l[p + 1] = c), (l[p + 0] = 1);
										(l[u + 0] = 0), (l[u + 1] = o), (l[u + 2] = r), (l[u + 3] = a);
										for (var f = a, p = 1; p < u; p += 4) f += l[p + 3];
										l[0] = f;
									})(t, e, 0, l, d, 0, m, (g = g || h !== m)),
										c && Pi(t, !0);
								})(t, r, l, 0, t.length, i, c || s || Pe, e),
								u && Ei(t, !0);
						}
					})(t, e, 0, n);
			}
			function ii(t, e, n, r, o, i, a) {
				(n = o && n ? o(e, n, 3) : n),
					i || a
						? (i && i.setValue(e, n), a && a.setValue(e, n))
						: n
						? ((n = n.toString()), co(r) ? r.setStyle(t, e, n, uo.DashCase) : t.style.setProperty(e, n))
						: co(r)
						? r.removeStyle(t, e, uo.DashCase)
						: t.style.removeProperty(e);
			}
			function ai(t, e, n, r, o, i) {
				o || i ? (o && o.setValue(e, n), i && i.setValue(e, n)) : '' !== e && (n ? (co(r) ? r.addClass(t, e) : t.classList.add(e)) : co(r) ? r.removeClass(t, e) : t.classList.remove(e));
			}
			function si(t, e, n) {
				var r = e >= 10 ? e + 0 : e;
				n ? (t[r] |= 1) : (t[r] &= -2);
			}
			function li(t, e) {
				return 1 == (1 & t[e >= 10 ? e + 0 : e]);
			}
			function ui(t, e) {
				return 2 == (2 & t[e >= 10 ? e + 0 : e]);
			}
			function ci(t, e) {
				return 4 == (4 & t[e >= 10 ? e + 0 : e]);
			}
			function pi(t, e, n) {
				return (31 & t) | (e << 5) | (n << 19);
			}
			function fi(t, e) {
				var n = di(e);
				return (2 & e ? t[4] : t[3])[n];
			}
			function di(t) {
				return (t >> 5) & 16383;
			}
			function hi(t) {
				var e = (t >> 19) & 16383;
				return e >= 10 ? e : -1;
			}
			function gi(t) {
				return t[6][2];
			}
			function mi(t) {
				return t[7][2];
			}
			function bi(t, e, n) {
				t[e + 1] = n;
			}
			function vi(t, e, n) {
				t[e + 2] = n;
			}
			function yi(t, e, n, r) {
				var o = (function(t, e) {
					return (n << 16) | t;
				})(r);
				t[e + 3] = o;
			}
			function wi(t, e) {
				return (t[e + 3] >> 16) & 65535;
			}
			function _i(t, e) {
				var n = wi(t, e);
				if (n) {
					var r = t[9];
					if (r) return r[n];
				}
				return null;
			}
			function xi(t, e, n) {
				t[1 === e ? e : e + 0] = n;
			}
			function Ci(t, e) {
				return t[1 === e ? e : e + 0];
			}
			function ki(t, e) {
				return t[e + 2];
			}
			function Si(t, e) {
				return t[e + 1];
			}
			function Pi(t, e) {
				si(t, 1, e);
			}
			function Ei(t, e) {
				e ? (t[1] |= 8) : (t[1] &= -9);
			}
			function Oi(t, e, n) {
				if (e !== n) {
					var r = ki(t, e),
						o = Si(t, e),
						i = Ci(t, e),
						a = wi(t, e),
						s = Di(t, e),
						l = i,
						u = Ci(t, n),
						c = hi(l);
					c >= 0 && xi(t, c, pi((p = Ci(t, c)), di(p), n));
					var p,
						f = hi(u);
					f >= 0 && xi(t, f, pi((p = Ci(t, f)), di(p), e)),
						vi(t, e, ki(t, n)),
						bi(t, e, Si(t, n)),
						xi(t, e, Ci(t, n)),
						yi(t, e, wi(t, n), Di(t, n)),
						vi(t, n, r),
						bi(t, n, o),
						xi(t, n, i),
						yi(t, n, a, s);
				}
			}
			function Ii(t, e, n, r, o, i, a, s) {
				var l = e < t.length;
				t.splice(e, 0, 1 | o | (n ? 2 : 0), r, i, 0),
					yi(t, e, s, a),
					l &&
						(function(t, n) {
							for (var r = e + 4; r < t.length; r += 4) {
								var o = hi(Ci(t, r));
								if (o > 0) {
									var i = di(Ci(t, o));
									xi(t, o, pi((li(t, o) ? 1 : 0) | (ui(t, o) ? 2 : 0) | (ci(t, o) ? 4 : 0), i, r));
								}
							}
						})(t);
			}
			function Ti(t, e) {
				return null !== t;
			}
			function Mi(t, e, n, r) {
				var o,
					i = r && r(e, null, 1) ? 4 : 0;
				return n ? ((i |= 2), (o = Ni(t[4], e))) : (o = Ni(t[3], e)), pi(i, (o = o > 0 ? o + 1 : 0), 0);
			}
			function Ai(t, e, n) {
				var r = fi(t, e);
				return !r || ji(e, r, n);
			}
			function ji(t, e, n) {
				return !(2 & t) && e && n && 4 & t ? e.toString() !== n.toString() : e !== n;
			}
			var Ri = (function() {
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
			function Di(t, e) {
				return 65535 & t[e + 3];
			}
			function Ni(t, e) {
				for (var n = 2; n < t.length; n += 3) if (t[n] === e) return n;
				return -1;
			}
			function Ui(t, e) {
				var n = t[2];
				return n[2 * e + 1] || n[1] || null;
			}
			function Li(t, e, n, r) {
				return null == t || (null != e ? r <= n : n === r);
			}
			function Hi(t) {
				var e = t[4],
					n = e[1];
				if (null === n) {
					n = '';
					for (var r = 2; r < e.length; r += 3) e[r + 1] && (n += (n.length ? ' ' : '') + e[r]);
					e[1] = n;
				}
				return n;
			}
			function zi(t, e, n) {
				return t[e ? 6 : 7][1 + 4 * n + 2] || null;
			}
			function Vi(t) {
				return t.replace(/[a-z][A-Z]/g, function(t) {
					return t.charAt(0) + '-' + t.charAt(1).toLowerCase();
				});
			}
			function Fi(t, e, n, r, o) {
				void 0 === o && (o = 0);
				var i = t[n ? 6 : 7];
				if (e > 0) for (var a = 1 + 4 * e; i.length < a; ) i.push(0, r, null, 0);
				i.push(0, r, null, o);
			}
			function Bi(t, e, n, r, o) {
				return null === t && ((t = e.length), e.push(null, null, null), (e[t + 0] = n)), (e[t + 1] = r), (e[t + 2] = o), t;
			}
			var qi = 'ng-template';
			function Gi(t, e) {
				var n = t.length,
					r = t.indexOf(e),
					o = r + e.length;
				return !(-1 === r || (r > 0 && ' ' !== t[r - 1]) || (o < n && ' ' !== t[o]));
			}
			function Zi(t, e, n) {
				return e === (0 !== t.type || n ? t.tagName : qi);
			}
			function Wi(t, e, n) {
				for (
					var r = 4,
						o = t.attrs || [],
						i = (function(t) {
							for (var e = 0; e < t.length; e++) if (Co(t[e])) return e;
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
								if (((r = 2 | (1 & r)), ('' !== l && !Zi(t, l, n)) || ('' === l && 1 === e.length))) {
									if (Qi(r)) return !1;
									a = !0;
								}
							} else {
								var u = 8 & r ? l : e[++s];
								if (8 & r && t.stylingTemplate) {
									if (!Gi(Yi(t), u)) {
										if (Qi(r)) return !1;
										a = !0;
									}
									continue;
								}
								var c = Ji(8 & r ? 'class' : l, o, 0 == t.type && t.tagName !== qi, n);
								if (-1 === c) {
									if (Qi(r)) return !1;
									a = !0;
									continue;
								}
								if ('' !== u) {
									var p;
									p = c > i ? '' : o[c + 1];
									var f = 8 & r ? p : null;
									if ((f && !Gi(f, u)) || (2 & r && u !== p)) {
										if (Qi(r)) return !1;
										a = !0;
									}
								}
							}
					} else {
						if (!a && !Qi(r) && !Qi(l)) return !1;
						if (a && Qi(l)) continue;
						(a = !1), (r = l | (1 & r));
					}
				}
				return Qi(r) || a;
			}
			function Qi(t) {
				return 0 == (1 & t);
			}
			function Yi(t) {
				return t.stylingTemplate ? Hi(t.stylingTemplate) : '';
			}
			function Ji(t, e, n, r) {
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
			function Ki(t, e, n) {
				void 0 === n && (n = !1);
				for (var r = 0; r < e.length; r++) if (Wi(t, e[r], n)) return !0;
				return !1;
			}
			function Xi(t, e) {
				t: for (var n = 0; n < e.length; n++) {
					var r = e[n];
					if (t.length === r.length) {
						for (var o = 0; o < t.length; o++) if (t[o] !== r[o]) continue t;
						return !0;
					}
				}
				return !1;
			}
			var $i,
				ta = 0;
			function ea() {
				return ta > 0;
			}
			function na(t) {
				$i = t;
			}
			function ra() {
				return $i;
			}
			var oa = '--MAP--';
			function ia(t, e) {
				t[1] = e;
			}
			function aa(t) {
				return t[0];
			}
			function sa(t, e) {
				return t[e + 2];
			}
			function la(t, e) {
				return 1 & t[e + 0];
			}
			function ua(t, e) {
				return (1 & la(t, e)) > 0;
			}
			function ca(t, e) {
				return t[e + 0] >> 1;
			}
			function pa(t, e, n) {
				var r = la(t, e);
				t[e + 0] = r | (n << 1);
			}
			function fa(t, e) {
				return t[e + 1];
			}
			function da(t, e, n) {
				return t[e + 3 + n];
			}
			function ha(t, e) {
				return e === t[1];
			}
			function ga(t) {
				!(function(t, e) {
					t[0] = e;
				})(t, 1 | aa(t));
			}
			function ma(t) {
				return (1 & aa(t)) > 0;
			}
			function ba(t) {
				return 5 + t[3];
			}
			function va(t, e) {
				return (Array.isArray(t) ? t[0] : t) !== (Array.isArray(e) ? e[0] : e);
			}
			function ya(t) {
				return null != t && '' !== t;
			}
			function wa(t) {
				var e = ra() || t[ln];
				return e && 'function' != typeof e ? (na(e), _a) : e;
			}
			var _a = function(t, e, n) {
					var r = ra();
					return r ? !(2 & n) || r.sanitize($r.STYLE, e) : e;
				},
				xa = null,
				Ca = 1,
				ka = 1,
				Sa = 0,
				Pa = 1,
				Ea = 0,
				Oa = 0,
				Ia = [];
			function Ta(t, e, n, r, o, i, a, s, l) {
				ma(t) ||
					(a
						? (function(t, e, n, r, o) {
								Ia.unshift(t, e, n, r, o);
						  })(t, n, r, o, l)
						: (Ia.length && Ma(), Aa(t, n, r, o, l)));
				var u = s || va(e[o], i);
				return u && (e[o] = i), u;
			}
			function Ma() {
				for (var t = 0; t < Ia.length; ) Aa(Ia[t++], Ia[t++], Ia[t++], Ia[t++], Ia[t++]);
				Ia.length = 0;
			}
			function Aa(t, e, n, r, o) {
				if (n) {
					for (var i = !1, a = ba(t); a < t.length; ) {
						var s = fa(t, a),
							l = sa(t, a);
						if ((i = n <= l)) {
							n < l && ja(t, a, n, o), Ra(t, !1, a, r, e);
							break;
						}
						a += 3 + s;
					}
					i || (ja(t, t.length, n, o), Ra(t, !1, a, r, e));
				} else Ra(t, !0, 2, r, e);
			}
			function ja(t, e, n, r) {
				t.splice(e, 0, r ? 1 : 0, Ca, n, xa), pa(t, e, ka);
			}
			function Ra(t, e, n, r, o) {
				var i = n + 3 + fa(t, n);
				e || i--, 'number' == typeof r ? (t.splice(i, 0, r), t[n + 1]++, pa(t, n, ca(t, n) | (1 << o))) : 'string' == typeof r && null == t[i] && (t[i] = r);
			}
			function Da(t, e, n, r, o, i, a) {
				Ia.length && Ma();
				for (var s = !0 === o ? -1 : !1 === o ? 0 : o, l = Na, u = (s & ca(t, 2)) > 0 ? 1 : 0, c = ba(t); c < t.length; ) {
					var p = fa(t, c);
					if (s & ca(t, c)) {
						for (var f = !1, d = sa(t, c), h = p - 1, g = da(t, c, h), m = 0; m < h; m++) {
							var b = da(t, c, m),
								v = r[b];
							if (ya(v)) {
								i(e, n, d, a && ua(t, c) ? a(d, v, 2) : v, b), (f = !0);
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
			var Na = null,
				Ua = function(t, e, n, r) {
					r ? ((r = r.toString()), t && co(t) ? t.setStyle(e, n, r, uo.DashCase) : e.style.setProperty(n, r)) : t && co(t) ? t.removeStyle(e, n, uo.DashCase) : e.style.removeProperty(n);
				},
				La = function(t, e, n, r) {
					'' !== n && (r ? (t && co(t) ? t.addClass(e, n) : e.classList.add(n)) : t && co(t) ? t.removeClass(e, n) : e.classList.remove(n));
				},
				Ha = function(t, e, n, r, o, i, a, s, l) {
					var u = !1;
					if (fa(t, 2)) {
						var c = !0,
							p = !s;
						p && -2 & a && ((c = !1), (u = !0)),
							c &&
								(u = (function t(e, n, r, o, i, a, s, l, u, c) {
									var p = !1;
									if (u < fa(e, 2)) {
										for (
											var f = da(e, 2, u),
												d = o[f],
												h = (function(t) {
													return t >= Fa.length && Fa.push(1), Fa[t];
												})(u);
											h < d.length;

										) {
											var g = Ba(d, h),
												m = l && g > l,
												b = !m && g === l,
												v = Ga(d, h),
												y = ya(v),
												w = t(e, n, r, o, i, a, m ? s : za(s, y, b), m ? l : g, u + 1, c);
											if (m) break;
											if (!w && Va(s, b)) {
												var _ = b && !y,
													x = _ ? c : v,
													C = _ ? f : null;
												i(n, r, g, a ? a(g, x, 3) : x, C), (w = !0);
											}
											(p = w && b), (h += 2);
										}
										Fa[u] = h;
									}
									return p;
								})(t, e, n, r, o, i, a, s || null, 0, l || null)),
							p &&
								(function() {
									for (var t = 0; t < Fa.length; t++) Fa[t] = 1;
								})();
					}
					return u;
				};
			function za(t, e, n) {
				var r = t;
				return e || !n || 4 & t ? ((r |= 4), (r &= -3)) : ((r |= 2), (r &= -5)), r;
			}
			function Va(t, e) {
				var n = (1 & t) > 0;
				return n ? 4 & t && e && (n = !1) : 2 & t && (n = e), n;
			}
			var Fa = [];
			function Ba(t, e) {
				return t[e + 0];
			}
			function qa(t, e, n) {
				t[e + 1] = n;
			}
			function Ga(t, e) {
				return t[e + 1];
			}
			function Za(t) {
				Wa(Gn(), t);
			}
			function Wa(t, e) {
				Nn(t, t[Ye], dr(), e), Sr(e);
			}
			var Qa = (function() {
				return Promise.resolve(null);
			})();
			function Ya(t) {
				var e = t[Ye],
					n = cr(t);
				if (((e.firstTemplatePass = !1), (t[en] = e.bindingStartIndex), !n)) {
					var r = dr();
					Nn(t, e, r, void 0),
						(function(t) {
							for (var e = t[un]; null !== e; e = e[Xe])
								if (-1 === e[gn] && _n(e))
									for (var n = bn; n < e.length; n++) {
										var r = e[n];
										es(r, r[Ye], r[rn]);
									}
						})(t),
						Ja(e, t),
						jn(t),
						Un(t, e.contentHooks, e.contentCheckHooks, r, 1, void 0),
						(function(t, e) {
							var n = kr();
							try {
								if (t.expandoInstructions) {
									var r = (e[en] = t.expandoStartIndex);
									br(r);
									for (var o = -1, i = -1, a = 0; a < t.expandoInstructions.length; a++) {
										var s = t.expandoInstructions[a];
										if ('number' == typeof s) {
											if (s <= 0) {
												$n((i = -s));
												var l = t.expandoInstructions[++a];
												o = r += ao + l;
											} else r += s;
											br(r);
										} else null !== s && ((e[en] = r), s(2, yn(e[o]), i), er()), o++;
									}
								}
							} finally {
								$n(n);
							}
						})(e, t);
				}
				n && e.staticContentQueries && Ja(e, t),
					(function(t) {
						if (null != t) for (var e = 0; e < t.length; e++) _s(t[e]);
					})(e.components);
			}
			function Ja(t, e) {
				if (null != t.contentQueries) {
					wr(0);
					for (var n = 0; n < t.contentQueries.length; n++) {
						var r = t.contentQueries[n];
						t.data[r].contentQueries(2, e[r], r);
					}
				}
			}
			function Ka(t, e) {
				var n = e || Gn()[sn],
					r = Pr;
				return co(n) ? n.createElement(t, r) : null === r ? n.createElement(t) : n.createElementNS(r, t);
			}
			function Xa(t, e, n, r, o, i, a, s, l, u) {
				var c = e.blueprint.slice();
				return (
					(c[Qe] = o),
					(c[Je] = 140 | r),
					jn(c),
					(c[Ke] = c[pn] = t),
					(c[rn] = n),
					(c[an] = a || (t && t[an])),
					(c[sn] = s || (t && t[sn])),
					(c[ln] = l || (t && t[ln]) || null),
					(c[on] = u || (t && t[on]) || null),
					(c[tn] = i),
					c
				);
			}
			function $a(t, e, n, r, o, i) {
				var a = n + dn,
					s =
						t.data[a] ||
						(function(t, e, n, r, o, i, a) {
							var s = ir(),
								l = lr(),
								u = l ? s : s && s.parent,
								c = (t.data[n] = ls(u && u !== e ? u : null, r, n, o, i));
							return (0 !== a && t.firstChild) || (t.firstChild = c), s && (!l || null != s.child || (null === c.parent && 2 !== s.type) ? l || (s.next = c) : (s.child = c)), c;
						})(t, e, a, r, o, i, n);
				return ar(s, !0), s;
			}
			function ts(t, e, n, r) {
				var o = t.node;
				return null == o && (t.node = o = ls(e, 2, n, null, null)), (r[tn] = o);
			}
			function es(t, e, n) {
				var r,
					o = lr(),
					i = ir();
				if (512 & t[Je]) ks(To(t));
				else {
					var a = !1;
					try {
						ar(null, !0), (r = _r(t, t[tn])), jn(t), rs(t, e.template, os(t), n), (t[Ye].firstTemplatePass = !1), Ya(t), (a = !0);
					} finally {
						xr(r, a), ar(i, o);
					}
				}
			}
			function ns(t, e, n) {
				var r = t[an],
					o = _r(t, t[tn]),
					i = !dr(),
					a = cr(t),
					s = !1;
				try {
					i && !a && r.begin && r.begin(), a && (n && rs(t, n, 1, e), Ya(t), (t[Je] &= -5)), jn(t), n && rs(t, n, 2, e), Ya(t), (s = !0);
				} finally {
					i && !a && r.end && r.end(), xr(o, s);
				}
			}
			function rs(t, e, n, r) {
				Pr = null;
				var o = kr();
				try {
					$n(null), 2 & n && Wa(t, 0), e(n, r);
				} finally {
					Sr(o);
				}
			}
			function os(t) {
				return cr(t) ? 1 : 2;
			}
			function is(t, e, n, r) {
				if ((void 0 === r && (r = kn), Fn)) {
					var o = ir();
					t.firstTemplatePass &&
						(function(t, e, n, r, o) {
							var i = o ? { '': -1 } : null;
							if (n) {
								bs(r, t.data.length, n.length);
								for (var a = 0; a < n.length; a++) (c = n[a]).providersResolver && c.providersResolver(c);
								fs(t, r, n.length);
								var s = (t.preOrderHooks && t.preOrderHooks.length) || 0,
									l = (t.preOrderCheckHooks && t.preOrderCheckHooks.length) || 0,
									u = r.index - dn;
								for (a = 0; a < n.length; a++) {
									var c,
										p = t.data.length;
									vs(t, e, (c = n[a]), c.factory), ms(t.data.length - 1, c, i), Rn(p, c, t, u, s, l);
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
										Ki(n, a.selectors, !1) && (o || (o = []), Ho(Do(ir(), e), e, a.type), In(a) ? (1 & n.flags && te(n), (n.flags = 1), o.unshift(a)) : o.push(a));
									}
								return o;
							})(t, e, o),
							o,
							n || null
						),
						(function(t, e, n) {
							var r = n.directiveStart,
								o = n.directiveEnd;
							!t.firstTemplatePass && r < o && Do(n, e);
							for (var i = r; i < o; i++) {
								var a = t.data[i];
								In(a) && ys(e, n, a), ds(e, qo(t.data, e, i, n), a, i);
							}
						})(t, e, o),
						(function(t, e, n) {
							var r = n.directiveStart,
								o = n.directiveEnd,
								i = t.expandoInstructions,
								a = t.firstTemplatePass,
								s = n.index - dn,
								l = kr();
							try {
								$n(s);
								for (var u = r; u < o; u++) {
									var c = t.data[u];
									c.hostBindings ? (ps(c, i, e[u], n, a), er()) : a && i.push(null);
								}
							} finally {
								$n(l);
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
						$n(null);
				}
			}
			function as(t) {
				return t.tView || (t.tView = ss(-1, t.template, t.consts, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas));
			}
			function ss(t, e, n, r, o, i, a, s) {
				var l = dn + n,
					u = l + r,
					c = (function(t, e) {
						var n = new Array(e).fill(null, 0, t).fill(Xo, t);
						return (n[en] = t), n;
					})(l, u);
				return (c[Ye] = {
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
			function ls(t, e, n, r, o) {
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
			function us(t, e) {
				var n = Gn()[Ye],
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
			var cs = { class: 'className', for: 'htmlFor', formaction: 'formAction', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' };
			function ps(t, e, n, r, o) {
				var i = e.length;
				qn(t), t.hostBindings(1, n, r.index - dn), qn(null), i === e.length && o && e.push(t.hostBindings);
			}
			function fs(t, e, n) {
				var r = -(e.index - dn),
					o = t.data.length - (65535 & e.providerIndexes);
				(t.expandoInstructions || (t.expandoInstructions = [])).push(r, o, n);
			}
			function ds(t, e, n, r) {
				var o = ir();
				hs(t, o, e),
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
					t[Ye].firstTemplatePass && n.contentQueries && (o.flags |= 4),
					In(n) && (Pn(o.index, t)[rn] = e);
			}
			function hs(t, e, n) {
				var r = kn(e, t);
				fo(n, t), r && fo(r, t);
			}
			function gs(t) {
				var e = Gn()[Ye];
				(e.components || (e.components = [])).push(t.index);
			}
			function ms(t, e, n) {
				if (n) {
					if (e.exportAs) for (var r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
					e.template && (n[''] = t);
				}
			}
			function bs(t, e, n) {
				(t.flags = 1 & t.flags), (t.directiveStart = e), (t.directiveEnd = e + n), (t.providerIndexes = e);
			}
			function vs(t, e, n, r) {
				t.data.push(n);
				var o = new lo(r, In(n), null);
				t.blueprint.push(o), e.push(o);
			}
			function ys(t, e, n) {
				var r = kn(e, t),
					o = as(n),
					i = t[an],
					a = xs(t, Xa(t, o, null, n.onPush ? 64 : 16, t[e.index], e, i, i.createRenderer(r, n)));
				(a[tn] = e), (t[e.index] = a), t[Ye].firstTemplatePass && gs(e);
			}
			function ws(t, e, n, r, o) {
				return new Array(t, !0, o ? -1 : 0, e, null, null, r, n, null);
			}
			function _s(t) {
				var e = Gn(),
					n = Pn(t, e);
				(128 == (128 & n[Je]) || cr(e)) &&
					80 & n[Je] &&
					((function(t) {
						for (var e = t[Ye], n = t.length; n < e.blueprint.length; n++) t[n] = e.blueprint[n];
					})(n),
					Es(n, n[rn]));
			}
			function xs(t, e) {
				return t[un] ? (t[cn][Xe] = e) : (t[un] = e), (t[cn] = e), e;
			}
			function Cs(t) {
				for (; t; ) {
					t[Je] |= 64;
					var e = Oo(t);
					if (Tn(t) && !e) return t;
					t = e;
				}
				return null;
			}
			function ks(t) {
				for (var e = 0; e < t.components.length; e++) {
					var n = t.components[e];
					ns(Mn(n), n);
				}
			}
			function Ss(t, e) {
				var n = t[an];
				n.begin && n.begin();
				try {
					cr(t) && Es(t, e), Es(t, e);
				} catch (r) {
					throw (js(t, r), r);
				} finally {
					n.end && n.end();
				}
			}
			function Ps(t) {
				ks(t[rn]);
			}
			function Es(t, e) {
				var n = t[Ye],
					r = _r(t, t[tn]),
					o = n.template,
					i = cr(t),
					a = !1;
				try {
					jn(t), i && Os(1, n, e), rs(t, o, os(t), e), Ya(t), (i && !n.staticViewQueries) || Os(2, n, e), (a = !0);
				} finally {
					xr(r, a);
				}
			}
			function Os(t, e, n) {
				var r = e.viewQuery;
				r && (wr(e.viewQueryStartIndex), r(t, n));
			}
			var Is = Qa;
			function Ts(t) {
				return void 0 === t.inputs && (t.inputs = us(t, 0)), t.inputs;
			}
			function Ms(t) {
				return t[nn] || (t[nn] = []);
			}
			function As(t) {
				return t[Ye].cleanup || (t[Ye].cleanup = []);
			}
			function js(t, e) {
				var n = t[on],
					r = n ? n.get(Ko, null) : null;
				r && r.handleError(e);
			}
			function Rs(t, e, n) {
				for (var r = t[Ye], o = 0; o < e.length; ) {
					var i = e[o++],
						a = e[o++],
						s = e[o++],
						l = t[i],
						u = r.data[i];
					u.setInput ? u.setInput(l, n, a, s) : (l[s] = n);
				}
			}
			function Ds(t) {
				var e;
				if ((e = t.onElementCreationFns)) {
					for (var n = 0; n < e.length; n++) e[n]();
					t.onElementCreationFns = null;
				}
			}
			var Ns = null;
			function Us() {
				if (!Ns) {
					var t = Ut.Symbol;
					if (t && t.iterator) Ns = t.iterator;
					else
						for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
							var r = e[n];
							'entries' !== r && 'size' !== r && Map.prototype[r] === Map.prototype.entries && (Ns = r);
						}
				}
				return Ns;
			}
			function Ls(t, e) {
				return t === e || ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e));
			}
			function Hs(t) {
				return !!zs(t) && (Array.isArray(t) || (!(t instanceof Map) && Us() in t));
			}
			function zs(t) {
				return null !== t && ('function' == typeof t || 'object' == typeof t);
			}
			function Vs(t, e, n) {
				return (t[e] = n);
			}
			function Fs(t, e) {
				return t[e];
			}
			function Bs(t, e, n) {
				var r, o;
				return (o = n), ((r = t[e]) == r || o == o) && r !== o && ((t[e] = n), !0);
			}
			function qs(t, e, n, r) {
				var o = kr(),
					i = Gs(Gn(), e);
				return (
					i !== Xo &&
						(function(t, e, n, r, o, i) {
							var a,
								s,
								l = Gn(),
								u = Cn(t, l),
								c = Sn(t, l);
							if (!o && (a = Ts(c)) && (s = a[e]))
								Rs(l, s, n),
									On(c) &&
										(function(e, n) {
											var r = Pn(t + dn, e);
											16 & r[Je] || (r[Je] |= 64);
										})(l);
							else if (3 === c.type) {
								!(function(t, e, n, r, o) {
									var i = e[en] - 1,
										a = r[i];
									a[0] == Ze && ((r[i] = n + a), o || (-1 == t.propertyMetadataStartIndex && (t.propertyMetadataStartIndex = i), (t.propertyMetadataEndIndex = i + 1)));
								})(c, l, (e = cs[e] || e), l[Ye].data, o);
								var p = l[sn];
								(n = null != r ? r(n, c.tagName || '', e) : n), co(p) ? p.setProperty(u, e, n) : wo(e) || (u.setProperty ? u.setProperty(e, n) : (u[e] = n));
							}
						})(o, t, i, n, r),
					qs
				);
			}
			function Gs(t, e) {
				var n = t[en]++;
				return (
					(function(t, e, n) {
						void 0 === e && (e = ''), void 0 === n && (n = '');
						var r = t[Ye].data,
							o = t[en] - 1;
						null == r[o] && (r[o] = Ze + e + Ze + n);
					})(t),
					Bs(t, n, e) ? e : Xo
				);
			}
			function Zs(t, e, n, r) {
				var o = kr(),
					i = Gn(),
					a = Gs(i, e);
				return (
					a !== Xo &&
						(function(t, e, n, r, o, i) {
							var a = Cn(t, r),
								s = r[sn];
							if (null == n) co(s) ? s.removeAttribute(a, e, i) : a.removeAttribute(e);
							else {
								var l = Sn(t, r),
									u = null == o ? Be(n) : o(n, l.tagName || '', e);
								co(s) ? s.setAttribute(a, e, u, i) : i ? a.setAttributeNS(i, e, u) : a.setAttribute(e, u);
							}
						})(o, t, a, i, n, r),
					Zs
				);
			}
			function Ws(t, e) {
				var n = e[Ke];
				return -1 === t.index ? (_n(n) ? n : null) : n;
			}
			function Qs(t, e) {
				var n = Ws(t, e);
				return n ? ol(e[sn], n[mn]) : null;
			}
			function Ys(t, e, n, r, o) {
				var i,
					a = !1;
				_n(r) ? (i = r) : wn(r) && ((a = !0), (r = r[Qe]));
				var s = yn(r);
				0 === t
					? nl(e, n, s, o || null)
					: 1 === t
					? (function(t, e, n) {
							var r = ol(t, e);
							r &&
								(function(t, e, n, r) {
									co(t) ? t.removeChild(e, n, r) : e.removeChild(n);
								})(t, r, e, n);
					  })(e, s, a)
					: 2 === t && e.destroyNode(s),
					null != i &&
						(function(t, e, n, r, o) {
							var i = n[mn];
							i !== yn(n) && Ys(e, t, r, i, o);
							for (var a = bn; a < n.length; a++) ul(t, e, n[a], r, i);
						})(e, t, i, n, o);
			}
			function Js(t, e, n) {
				var r = Qs(t[Ye].node, t);
				r && ul(t[sn], e ? 0 : 1, t, r, n);
			}
			function Ks(t, e, n) {
				var r = bn + n,
					o = e.length;
				n > 0 && (e[r - 1][Xe] = t), n < o - bn ? ((t[Xe] = e[r]), e.splice(bn + n, 0, t)) : (e.push(t), (t[Xe] = null)), (t[Ke] = e), t[$e] && t[$e].insertView(n), (t[Je] |= 128);
			}
			function Xs(t, e) {
				if (!(t.length <= bn)) {
					var n = bn + e,
						r = t[n];
					return (
						r &&
							(e > 0 && (t[n - 1][Xe] = r[Xe]),
							t.splice(bn + e, 1),
							Js(r, !1),
							128 & r[Je] && !(256 & r[Je]) && r[$e] && r[$e].removeView(),
							(r[Ke] = null),
							(r[Xe] = null),
							(r[Je] &= -129)),
						r
					);
				}
			}
			function $s(t) {
				if (!(256 & t[Je])) {
					var e = t[sn];
					co(e) && e.destroyNode && ul(e, 2, t, null, null),
						(function(t) {
							var e = t[un];
							if (!e) return el(t);
							for (; e; ) {
								var n = null;
								if (wn(e)) n = e[un];
								else {
									var r = e[bn];
									r && (n = r);
								}
								if (!n) {
									for (; e && !e[Xe] && e !== t; ) el(e), (e = tl(e, t));
									el(e || t), (n = e && e[Xe]);
								}
								e = n;
							}
						})(t);
				}
			}
			function tl(t, e) {
				var n;
				return wn(t) && (n = t[tn]) && 2 === n.type ? Ws(n, t) : t[Ke] === e ? null : t[Ke];
			}
			function el(t) {
				if (wn(t) && !(256 & t[Je])) {
					(t[Je] &= -129),
						(t[Je] |= 256),
						(function(t) {
							var e,
								n = t[Ye];
							if (null != n && null != (e = n.destroyHooks))
								for (var r = 0; r < e.length; r += 2) {
									var o = t[e[r]];
									o instanceof lo || e[r + 1].call(o);
								}
						})(t),
						(function(t) {
							var e = t[Ye].cleanup;
							if (null !== e) {
								for (var n = t[nn], r = 0; r < e.length - 1; r += 2)
									if ('string' == typeof e[r]) {
										var o = e[r + 1],
											i = 'function' == typeof o ? o(t) : yn(t[o]),
											a = e[r + 3];
										'boolean' == typeof a ? i.removeEventListener(e[r], n[e[r + 2]], a) : a >= 0 ? n[a]() : n[-a].unsubscribe(), (r += 2);
									} else e[r].call(n[e[r + 1]]);
								t[nn] = null;
							}
						})(t);
					var e = t[tn];
					e && 3 === e.type && co(t[sn]) && t[sn].destroy(), An(t) && t[$e] && t[$e].removeView();
				}
			}
			function nl(t, e, n, r) {
				co(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0);
			}
			function rl(t, e, n, r) {
				null !== r
					? nl(t, e, n, r)
					: (function(t, e, n) {
							co(t) ? t.appendChild(e, n) : e.appendChild(n);
					  })(t, e, n);
			}
			function ol(t, e) {
				return co(t) ? t.parentNode(e) : e.parentNode;
			}
			function il(t, e, n) {
				var r,
					o,
					i = (function(t, e) {
						if (Tn(e)) return ol(e[sn], kn(t, e));
						var n = (function(t) {
								for (; null != t.parent && (4 === t.parent.type || 5 === t.parent.type); ) t = t.parent;
								return t;
							})(t),
							r = n.parent;
						if (null == r) {
							var o = e[tn];
							return 2 === o.type
								? Qs(o, e)
								: (function(t) {
										var e = t[tn];
										return e && 3 === e.type ? kn(e, Oo(t)) : null;
								  })(e);
						}
						var i = n && 5 === n.type;
						if (i && 2 & n.flags) return kn(n, e).parentNode;
						if (1 & r.flags && !i) {
							var a = e[Ye].data,
								s = a[a[r.index].directiveStart].encapsulation;
							if (s !== Se.ShadowDom && s !== Se.Native) return null;
						}
						return kn(r, e);
					})(e, n);
				if (null != i) {
					var a = n[sn],
						s = (function(t, e) {
							if (2 === t.type) {
								var n = Ws(t, e);
								return al(n.indexOf(e, bn) - bn, n);
							}
							return 4 === t.type || 5 === t.type ? kn(t, e) : null;
						})(e.parent || n[tn], n);
					if (Array.isArray(t))
						try {
							for (var u = l(t), c = u.next(); !c.done; c = u.next()) rl(a, i, c.value, s);
						} catch (p) {
							r = { error: p };
						} finally {
							try {
								c && !c.done && (o = u.return) && o.call(u);
							} finally {
								if (r) throw r.error;
							}
						}
					else rl(a, i, t, s);
				}
			}
			function al(t, e) {
				var n = bn + t + 1;
				if (n < e.length) {
					var r = e[n],
						o = r[tn].child;
					return null !== o ? kn(o, r) : e[mn];
				}
				return e[mn];
			}
			function sl(t, e, n, r) {
				for (; t; ) ll(t, e, n, r), (t = t.next);
			}
			function ll(t, e, n, r) {
				var o = kn(t, r);
				il(o, e, n), fo(o, r);
				var i = r[t.index];
				if (0 === t.type) for (var a = bn; a < i.length; a++) Js(i[a], !0, i[mn]);
				else if (5 === t.type) {
					var s = t.child;
					sl(s, s, r, r);
				} else 4 === t.type && sl(t.child, e, n, r), _n(i) && il(i[mn], e, n);
			}
			function ul(t, e, n, r, o) {
				for (var i = n[Ye].node.child; null !== i; ) cl(t, e, n, i, r, o), (i = i.next);
			}
			function cl(t, e, n, r, o, i) {
				var a = r.type;
				4 === a
					? (function(t, e, n, r, o, i) {
							Ys(e, t, o, n[r.index], i);
							for (var a = r.child; a; ) cl(t, e, n, a, o, i), (a = a.next);
					  })(t, e, n, r, o, i)
					: 1 === a
					? (function(t, e, n, r, o, i) {
							var a = Io(n),
								s = a[tn].projection[r.projection];
							if (Array.isArray(s)) for (var l = 0; l < s.length; l++) Ys(e, t, o, s[l], i);
							else for (var u = s, c = a[Ke]; null !== u; ) cl(t, e, c, u, o, i), (u = u.projectionNext);
					  })(t, e, n, r, o, i)
					: Ys(e, t, o, n[r.index], i);
			}
			function pl(t, e, n, r, o, i, a, s) {
				var l = Gn(),
					u = l[Ye],
					c = (function(t, e, n) {
						var r = Gn(),
							o = t + dn,
							i = (r[t + dn] = r[sn].createComment('')),
							a = $a(r[Ye], r[tn], t, 0, e, n),
							s = (r[o] = ws(r[o], r, i, a));
						return il(i, a, r), xs(r, s), a;
					})(t, o || null, i || null);
				u.firstTemplatePass && (c.tViews = ss(-1, e, n, r, u.directiveRegistry, u.pipeRegistry, null, null)),
					is(u, l, a, s),
					(function(t, e) {
						var n = t[$e];
						if (n) {
							var r = t[e.index];
							r[$e] ? n.insertNodeBeforeViews(e) : (n.addNode(e), (r[$e] = n.container()));
						}
					})(l, c),
					fo(kn(c, l), l),
					Dn(u, c),
					ur();
			}
			function fl(t, e) {
				void 0 === e && (e = yt.Default), (t = Mt(t));
				var n = Gn();
				return null == n ? Jt(t, e) : zo(ir(), n, t, e);
			}
			function dl() {
				return tr() + rr();
			}
			function hl(t) {
				return ml(t, !1);
			}
			function gl(t) {
				return ml(t, !0);
			}
			function ml(t, e) {
				var n = e ? t.newClasses : t.newStyles;
				return n || ((n = [0, 0, 1, 0, oa]), e ? (t.newClasses = n) : (t.newStyles = n)), n;
			}
			function bl(t, e, n, r, o) {
				!(function(t, e, n, r, o) {
					if (
						!(16 & t[1]) &&
						(function(t, e, n, r) {
							var o = t[2],
								i = 2 * e;
							return !((i < o.length && o[i + 0] >= 0) || (vo(t, e, t[5].length, r), 0));
						})(t, e, 0, o)
					) {
						r &&
							(r = (function(t) {
								for (var e = [], n = 0; n < t.length; n++) e.push(Vi(t[n]));
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
								-1 == (_ = ri(t, v, 10, p)) && ((_ = p + g), (g += 4), m.push(v)), i.push(_);
							}
						var y = [];
						if (n && n.length)
							for (var w = 0; w < n.length; w++) {
								var _,
									x = n[w];
								-1 == (_ = ri(t, x, p, f)) ? ((_ = f + g), (g += 4), y.push(x)) : (_ += 4 * m.length), i.push(_);
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
								A = Ci(t, I),
								j = di(A),
								R = hi(A);
							xi(t, I, pi(A, j, (R += T ? (M ? 4 * m.length : 0) : 4 * O + 4 * (M ? m.length : 0))));
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
								Z = Ni(G, F);
							-1 === Z ? (Z = Bi(null, G, F, !z && null, e) + 1) : (Z += 1);
							var W = Mi(t, F, z, o || null);
							xi(t, q, pi(W, Z, B)), bi(t, q, F), vi(t, q, null), yi(t, q, 0, e), xi(t, B, pi(W, Z, q)), bi(t, B, F), vi(t, B, null), yi(t, B, 0, e);
						}
						(i[1] = a + y.length), (i[0] = s + m.length), (l[0] += y.length), (u[0] += m.length);
						var Q = 4 * m.length,
							Y = 4 * y.length,
							J = u.length;
						Fi(t, e, !1, f + 4 * s, m.length);
						for (var K = 1; K < J; K += 4) u[K + 1] += Y + Q;
						var X = l.length;
						Fi(t, e, !0, d + 4 * a, y.length);
						for (var $ = 1; $ < X; $ += 4) l[$ + 1] += 2 * Q + Y;
						xi(t, 1, pi(0, 0, f));
					}
				})(t.stylingTemplate, o, e, n, r);
			}
			function vl() {
				return tr() + rr();
			}
			function yl(t, e) {
				var n = zn;
				return n || Vn((n = yo(t + dn, e))), n;
			}
			function wl(t, e, n, r) {
				var o = Gn(),
					i = o[Ye],
					a = (o[t + dn] = Ka(e)),
					s = o[sn],
					l = $a(i, o[tn], t, 3, e, n || null),
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
									var r = bo();
									return (
										(function(t, e, n, r) {
											if (!(16 & t[1])) {
												vo(t, r);
												for (var o = null, i = null, a = -1, s = n; s < e.length; s++) {
													var l = e[s];
													'number' == typeof l ? (a = l) : 1 == a ? ti((o = o || t[4]), l, !0, r) : 2 == a && ti((i = i || t[3]), l, e[++s], r);
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
							for (var n = Gn()[sn], r = co(n), o = 0; o < e.length; ) {
								var i = e[o];
								if ('number' == typeof i) {
									if (0 !== i) break;
									o++;
									var a = e[o++],
										s = e[o++],
										l = e[o++];
									r ? n.setAttribute(t, s, l, a) : t.setAttributeNS(a, s, l);
								} else (l = e[++o]), wo((s = i)) ? r && n.setProperty(t, s, l) : r ? n.setAttribute(t, s, l) : t.setAttribute(s, l), o++;
							}
							return o;
						})(a, n))
					);
					var f = l.stylingTemplate;
					f && ((u = ni(a, f, s)), (c = ei(a, f, s)));
				}
				if ((il(a, l, o), is(i, o, r), 0 === Hn && fo(a, o), Hn++, i.firstTemplatePass)) {
					var d = Ts(l);
					d && d.hasOwnProperty('class') && (l.flags |= 8), d && d.hasOwnProperty('style') && (l.flags |= 16);
				}
				l.stylingTemplate && (ei(a, l.stylingTemplate, s, c), ni(a, l.stylingTemplate, s, u)),
					ea() &&
						p >= 0 &&
						(function(t, e, n) {
							for (var r, o, i = -1, a = p; a < e.length; a++) {
								var s = e[a];
								'number' == typeof s ? (i = s) : 1 == i ? Aa((r = r || gl(t)), -1, s, !0, !1) : 2 == i && Aa((o = o || hl(t)), -1, s, e[++a], !1);
							}
						})(l, n);
				var h = o[$e];
				h && (h.addNode(l), (o[$e] = h.clone(l))),
					(function(t, e, n) {
						if (En(e))
							for (var r = e.directiveEnd, o = e.directiveStart; o < r; o++) {
								var i = t.data[o];
								i.contentQueries && i.contentQueries(1, n[o], o);
							}
					})(i, l, o);
			}
			function _l() {
				var t = ir();
				lr() ? ur() : ar((t = t.parent), !1), t.onElementCreationFns && Ds(t);
				var e = Gn(),
					n = e[$e];
				n && t.index === n.nodeIndex && (e[$e] = n.parent), Dn(e[Ye], t), Hn--;
				var r = null;
				_o(t) && ((r = yo(t.index, e)), Rs(e, t.inputs.class, Hi(r))),
					0 != (16 & t.flags) &&
						((r = r || yo(t.index, e)),
						Rs(
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
			function xl(t, e, n, r) {
				wl(t, e, n, r), _l();
			}
			function Cl(t) {
				return !!t && 'function' == typeof t.then;
			}
			function kl(t, e, n, r) {
				void 0 === n && (n = !1),
					(function(t, e, n, r, o) {
						void 0 === n && (n = !1);
						var i = Gn(),
							a = ir(),
							s = i[Ye],
							l = s.firstTemplatePass && (s.cleanup || (s.cleanup = [])),
							u = !0;
						if (3 === a.type) {
							var c = kn(a, i),
								p = r ? r(c) : Pe,
								f = p.target || c,
								d = i[sn],
								h = (_ = Ms(i)).length,
								g = r
									? function(t) {
											return r(yn(t[a.index])).target;
									  }
									: a.index;
							if (co(d)) {
								var m = null;
								if (
									(!r &&
										(function(t) {
											return t.directiveEnd > t.directiveStart;
										})(a) &&
										(m = (function(t, e, n) {
											var r = t[Ye].cleanup;
											if (null != r)
												for (var o = 0; o < r.length - 1; o += 2) {
													var i = r[o];
													if (i === e && r[o + 1] === n) {
														var a = t[nn],
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
									e = Pl(a, i, e, !1);
									var b = d.listen(p.name || f, t, e);
									_.push(e, b), l && l.push(t, g, h, h + 1);
								}
							} else (e = Pl(a, i, e, !0)), f.addEventListener(t, e, n), _.push(e), l && l.push(t, g, h, n);
						}
						void 0 === a.outputs && (a.outputs = us(a, 1));
						var v,
							y = a.outputs;
						if (u && y && (v = y[t])) {
							var w = v.length;
							if (w)
								for (var _ = Ms(i), x = 0; x < w; x += 3) {
									var C = i[v[x]][v[x + 2]].subscribe(e),
										k = _.length;
									_.push(e, C), l && l.push(t, a.index, k, -(k + 1));
								}
						}
					})(t, e, n, r);
			}
			function Sl(t, e, n) {
				try {
					return !1 !== e(n);
				} catch (r) {
					return js(t, r), !1;
				}
			}
			function Pl(t, e, n, r) {
				return function o(i) {
					var a = 1 & t.flags ? Pn(t.index, e) : e;
					0 == (32 & e[Je]) && Cs(a);
					for (var s = Sl(e, n, i), l = o.__ngNextListenerFn__; l; ) (s = Sl(e, l, i) && s), (l = l.__ngNextListenerFn__);
					return r && !1 === s && (i.preventDefault(), (i.returnValue = !1)), s;
				};
			}
			function El(t) {
				return (
					void 0 === t && (t = 1),
					(function(t) {
						return (
							void 0 === t && (t = 1),
							(pr = (function(t, e) {
								for (; t > 0; ) (e = e[pn]), t--;
								return e;
							})(t, pr))[rn]
						);
					})(t)
				);
			}
			function Ol(t, e) {
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
						if (null === r ? Ki(t, i, !0) : Xi(r, i)) return o;
					} else n = o;
				}
				return n;
			}
			function Il(t) {
				var e = Io(Gn())[tn];
				if (!e.projection)
					for (var n = (e.projection = new Array(t ? t.length : 1).fill(null)), r = n.slice(), o = e.child; null !== o; ) {
						var i = t ? Ol(o, t) : 0;
						null !== i && (r[i] ? (r[i].projectionNext = o) : (n[i] = o), (r[i] = o)), (o = o.next);
					}
			}
			var Tl = !1;
			function Ml(t, e, n) {
				void 0 === e && (e = 0);
				var r = Gn(),
					o = $a(r[Ye], r[tn], t, 1, null, n || null);
				null === o.projection && (o.projection = e),
					ur(),
					Tl ||
						(function t(e, n, r, o) {
							var i = o[Ke],
								a = o[tn].projection[r];
							if (Array.isArray(a)) il(a, n, e);
							else for (; a; ) 32 & a.flags || (1 === a.type ? t(e, n, a.projection, Io(i)) : ((a.flags |= 2), ll(a, n, e, i))), (a = a.projectionNext);
						})(r, o, e, Io(r));
			}
			function Al(t, e) {
				var n = Gn(),
					r = (n[t + dn] = (function(t, e) {
						return co(e) ? e.createText(Be(t)) : e.createTextNode(Be(t));
					})(e, n[sn])),
					o = $a(n[Ye], n[tn], t, 3, null, null);
				ur(), il(r, o, n);
			}
			function jl(t, e) {
				return { components: [], scheduler: t || Ge, clean: Is, playerHandler: e || null, flags: 0 };
			}
			function Rl(t, e) {
				var n = Mn(t)[Ye],
					r = n.data.length - 1;
				Rn(r, e, n, -1, -1, -1), Dn(n, { directiveStart: r, directiveEnd: r + 1 });
			}
			var Dl = (function() {
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
			function Nl(t) {
				t.type.prototype.ngOnChanges &&
					((t.setInput = Ul),
					(t.onChanges = function() {
						var t = Hl(this),
							e = t && t.current;
						if (e) {
							var n = t.previous;
							if (n === Pe) t.previous = e;
							else for (var r in e) n[r] = e[r];
							(t.current = null), this.ngOnChanges(e);
						}
					}));
			}
			function Ul(t, e, n, r) {
				var o =
						Hl(t) ||
						(function(t, e) {
							return (t[Ll] = { previous: Pe, current: null });
						})(t),
					i = o.current || (o.current = {}),
					a = o.previous,
					s = this.declaredInputs[n],
					l = a[s];
				(i[s] = new Dl(l && l.currentValue, e, a === Pe)), (t[r] = e);
			}
			var Ll = '__ngSimpleChanges__';
			function Hl(t) {
				return t[Ll] || null;
			}
			function zl(t) {
				for (var e, n, r = Object.getPrototypeOf(t.type.prototype).constructor; r; ) {
					var o = void 0;
					if (In(t)) o = r.ngComponentDef || r.ngDirectiveDef;
					else {
						if (r.ngComponentDef) throw new Error('Directives cannot inherit Components');
						o = r.ngDirectiveDef;
					}
					var i = r.ngBaseDef;
					if (i || o) {
						var a = t;
						(a.inputs = Vl(t.inputs)), (a.declaredInputs = Vl(t.declaredInputs)), (a.outputs = Vl(t.outputs));
					}
					if (i) {
						var s = i.viewQuery,
							u = i.contentQueries,
							c = i.hostBindings;
						c && ql(t, c), s && Fl(t, s), u && Bl(t, u), _t(t.inputs, i.inputs), _t(t.declaredInputs, i.declaredInputs), _t(t.outputs, i.outputs);
					}
					if (o) {
						var p = o.hostBindings;
						p && ql(t, p);
						var f = o.viewQuery,
							d = o.contentQueries;
						f && Fl(t, f),
							d && Bl(t, d),
							_t(t.inputs, o.inputs),
							_t(t.declaredInputs, o.declaredInputs),
							_t(t.outputs, o.outputs),
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
							v.ngOnChanges && ((Nl.ngInherit = !0), Nl)(t));
					}
					r = Object.getPrototypeOf(r);
				}
			}
			function Vl(t) {
				return t === Pe ? {} : t === Ee ? [] : t;
			}
			function Fl(t, e) {
				var n = t.viewQuery;
				t.viewQuery = n
					? function(t, r) {
							e(t, r), n(t, r);
					  }
					: e;
			}
			function Bl(t, e) {
				var n = t.contentQueries;
				t.contentQueries = n
					? function(t, r, o) {
							e(t, r, o), n(t, r, o);
					  }
					: e;
			}
			function ql(t, e) {
				var n = t.hostBindings;
				e !== n &&
					(t.hostBindings = n
						? function(t, r, o) {
								nr(1);
								try {
									e(t, r, o);
								} finally {
									nr(-1);
								}
								n(t, r, o);
						  }
						: e);
			}
			function Gl(t, e, n, r, o) {
				if (((t = Mt(t)), Array.isArray(t))) for (var i = 0; i < t.length; i++) Gl(t[i], e, n, r, o);
				else {
					var a = Gn(),
						s = ge(t) ? t : Mt(t.provide),
						l = pe(t),
						u = ir(),
						c = 65535 & u.providerIndexes,
						p = u.directiveStart,
						f = u.providerIndexes >> 16;
					if (t.useClass || ge(t)) {
						var d = (t.useClass || t).prototype.ngOnDestroy;
						if (d) {
							var h = a[Ye];
							(h.destroyHooks || (h.destroyHooks = [])).push(e.length, d);
						}
					}
					if (ge(t) || !t.multi) {
						var g = new lo(l, o, fl),
							m = Wl(s, e, o ? c : c + f, p);
						-1 == m ? (Ho(Do(u, a), a, s), e.push(s), u.directiveStart++, u.directiveEnd++, o && (u.providerIndexes += 65536), n.push(g), a.push(g)) : ((n[m] = g), (a[m] = g));
					} else {
						var b = Wl(s, e, c + f, p),
							v = Wl(s, e, c, c + f),
							y = v >= 0 && n[v];
						(o && !y) || (!o && !(b >= 0 && n[b]))
							? (Ho(Do(u, a), a, s),
							  (g = (function(t, e, n, r, o) {
									var i = new lo(t, n, fl);
									return (i.multi = []), (i.index = e), (i.componentProviders = 0), Zl(i, o, r && !n), i;
							  })(o ? Yl : Ql, n.length, o, r, l)),
							  !o && y && (n[v].providerFactory = g),
							  e.push(s),
							  u.directiveStart++,
							  u.directiveEnd++,
							  o && (u.providerIndexes += 65536),
							  n.push(g),
							  a.push(g))
							: Zl(n[o ? v : b], l, !o && r),
							!o && r && y && n[v].componentProviders++;
					}
				}
			}
			function Zl(t, e, n) {
				t.multi.push(e), n && t.componentProviders++;
			}
			function Wl(t, e, n, r) {
				for (var o = n; o < r; o++) if (e[o] === t) return o;
				return -1;
			}
			function Ql(t, e, n, r) {
				return Jl(this.multi, []);
			}
			function Yl(t, e, n, r) {
				var o,
					i = this.multi;
				if (this.providerFactory) {
					var a = this.providerFactory.componentProviders,
						s = qo(e, n, this.providerFactory.index, r);
					Jl(i, (o = s.slice(0, a)));
					for (var l = a; l < s.length; l++) o.push(s[l]);
				} else Jl(i, (o = []));
				return o;
			}
			function Jl(t, e) {
				for (var n = 0; n < t.length; n++) e.push((0, t[n])());
				return e;
			}
			var Kl,
				Xl,
				$l,
				tu = (function() {
					return function() {};
				})(),
				eu = (function() {
					return function() {};
				})(),
				nu = (function() {
					function t() {}
					return (
						(t.prototype.resolveComponentFactory = function(t) {
							throw (function(t) {
								var e = Error('No component factory found for ' + Ot(t) + '. Did you add it to @NgModule.entryComponents?');
								return (e.ngComponent = t), e;
							})(t);
						}),
						t
					);
				})(),
				ru = (function() {
					function t() {}
					return (t.NULL = new nu()), t;
				})(),
				ou = (function() {
					return function() {};
				})(),
				iu = (function() {
					return function() {};
				})(),
				au = (function() {
					function t(t, e, n) {
						(this._context = e), (this._componentIndex = n), (this._appRef = null), (this._viewContainerRef = null), (this._tViewNode = null), (this._lView = t);
					}
					return (
						Object.defineProperty(t.prototype, 'rootNodes', {
							get: function() {
								return null == this._lView[Qe]
									? (function t(e, n, r) {
											for (var o = n.child; o; ) {
												var i = kn(o, e);
												if ((i && r.push(i), 4 === o.type)) t(e, o, r);
												else if (1 === o.type) for (var a = Io(e), s = a[tn], l = Oo(a), u = s.projection[o.projection]; u && l; ) r.push(kn(u, l)), (u = u.next);
												o = o.next;
											}
											return r;
									  })(this._lView, this._lView[tn], [])
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
								return 256 == (256 & this._lView[Je]);
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
							$s(this._lView);
						}),
						(t.prototype.onDestroy = function(t) {
							var e, n;
							(n = t), Ms((e = this._lView)).push(n), e[Ye].firstTemplatePass && As(e).push(e[nn].length - 1, null);
						}),
						(t.prototype.markForCheck = function() {
							Cs(this._lView);
						}),
						(t.prototype.detach = function() {
							this._lView[Je] &= -129;
						}),
						(t.prototype.reattach = function() {
							this._lView[Je] |= 128;
						}),
						(t.prototype.detectChanges = function() {
							Ss(this._lView, this.context);
						}),
						(t.prototype.checkNoChanges = function() {
							!(function(t, e) {
								hr(!0);
								try {
									Ss(t, e);
								} finally {
									hr(!1);
								}
							})(this._lView, this.context);
						}),
						(t.prototype.attachToViewContainerRef = function(t) {
							if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
							this._viewContainerRef = t;
						}),
						(t.prototype.detachFromAppRef = function() {
							var t;
							(this._appRef = null), ul((t = this._lView)[sn], 1, t, null, null);
						}),
						(t.prototype.attachToAppRef = function(t) {
							if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
							this._appRef = t;
						}),
						(t.prototype._lookUpContext = function() {
							return (this._context = Oo(this._lView)[this._componentIndex]);
						}),
						t
					);
				})(),
				su = (function(t) {
					function e(e) {
						var n = t.call(this, e, null, -1) || this;
						return (n._view = e), n;
					}
					return (
						o(e, t),
						(e.prototype.detectChanges = function() {
							Ps(this._view);
						}),
						(e.prototype.checkNoChanges = function() {
							!(function(t) {
								hr(!0);
								try {
									Ps(t);
								} finally {
									hr(!1);
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
				})(au);
			function lu(t, e, n) {
				return (
					Kl ||
						(Kl = (function(t) {
							function e() {
								return (null !== t && t.apply(this, arguments)) || this;
							}
							return o(e, t), e;
						})(t)),
					new Kl(kn(e, n))
				);
			}
			function uu(t, e, n, r) {
				if (
					(Xl ||
						(Xl = (function(t) {
							function e(e, n, r, o, i) {
								var a = t.call(this) || this;
								return (a._declarationParentView = e), (a.elementRef = n), (a._tView = r), (a._hostLContainer = o), (a._injectorIndex = i), a;
							}
							return (
								o(e, t),
								(e.prototype.createEmbeddedView = function(t, e, n) {
									var r = this._declarationParentView[$e];
									r && null == this._hostLContainer[$e] && (this._hostLContainer[$e] = r.container());
									var o = (function(t, e, n, r, o) {
										var i = lr(),
											a = ir();
										ar(null, !0);
										var s = Xa(n, t, e, 16, null, null);
										return (s[pn] = n), r && (s[$e] = r.createView()), ts(t, null, -1, s), t.firstTemplatePass && (t.node.injectorIndex = o), ar(a, i), s;
									})(this._tView, t, this._declarationParentView, this._hostLContainer[$e], this._injectorIndex);
									e && Ks(o, e, n), es(o, this._tView, t);
									var i = new au(o, t, -1);
									return (i._tViewNode = o[tn]), i;
								}),
								e
							);
						})(t)),
					0 === n.type)
				) {
					var i = r[n.index];
					return new Xl(r, lu(e, n, r), n.tViews, i, n.injectorIndex);
				}
				return null;
			}
			var cu = (function() {
					function t(t) {
						this.nativeElement = t;
					}
					return (
						(t.__NG_ELEMENT_ID__ = function() {
							return pu(t);
						}),
						t
					);
				})(),
				pu = function(t) {
					return lu(t, ir(), Gn());
				},
				fu = (function() {
					return function() {};
				})(),
				du = (function(t) {
					return (t[(t.Important = 1)] = 'Important'), (t[(t.DashCase = 2)] = 'DashCase'), t;
				})({}),
				hu = new ((function() {
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
				gu = (function() {
					function t() {}
					return (
						(t.prototype.supports = function(t) {
							return Hs(t);
						}),
						(t.prototype.create = function(t) {
							return new bu(t);
						}),
						t
					);
				})(),
				mu = function(t, e) {
					return e;
				},
				bu = (function() {
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
							(this._trackByFn = t || mu);
					}
					return (
						(t.prototype.forEachItem = function(t) {
							var e;
							for (e = this._itHead; null !== e; e = e._next) t(e);
						}),
						(t.prototype.forEachOperation = function(t) {
							for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n; ) {
								var i = !n || (e && e.currentIndex < _u(n, r, o)) ? e : n,
									a = _u(i, r, o),
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
							if ((null == t && (t = []), !Hs(t))) throw new Error("Error trying to diff '" + Ot(t) + "'. Only arrays and iterables are allowed");
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
										null !== i && Ls(i.trackById, o)
											? (a && (i = this._verifyReinsertion(i, r, o, s)), Ls(i.item, r) || this._addIdentityChange(i, r))
											: ((i = this._mismatch(i, r, o, s)), (a = !0)),
										(i = i._next);
							} else
								(n = 0),
									(function(t, e) {
										if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e(t[n]);
										else for (var r = t[Us()](), o = void 0; !(o = r.next()).done; ) e(o.value);
									})(t, function(t) {
										(o = e._trackByFn(n, t)),
											null !== i && Ls(i.trackById, o)
												? (a && (i = e._verifyReinsertion(i, t, o, n)), Ls(i.item, t) || e._addIdentityChange(i, t))
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
									? (Ls(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r))
									: null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
									? (Ls(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r))
									: (t = this._addAfter(new vu(e, n), o, r)),
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
								null === this._linkedRecords && (this._linkedRecords = new wu()),
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
								null === this._unlinkedRecords && (this._unlinkedRecords = new wu()),
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
				vu = (function() {
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
				yu = (function() {
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
							for (n = this._head; null !== n; n = n._nextDup) if ((null === e || e <= n.currentIndex) && Ls(n.trackById, t)) return n;
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
				wu = (function() {
					function t() {
						this.map = new Map();
					}
					return (
						(t.prototype.put = function(t) {
							var e = t.trackById,
								n = this.map.get(e);
							n || ((n = new yu()), this.map.set(e, n)), n.add(t);
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
			function _u(t, e, n) {
				var r = t.previousIndex;
				if (null === r) return r;
				var o = 0;
				return n && r < n.length && (o = n[r]), r + e + o;
			}
			var xu = (function() {
					function t() {}
					return (
						(t.prototype.supports = function(t) {
							return t instanceof Map || zs(t);
						}),
						(t.prototype.create = function() {
							return new Cu();
						}),
						t
					);
				})(),
				Cu = (function() {
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
								if (!(t instanceof Map || zs(t))) throw new Error("Error trying to diff '" + Ot(t) + "'. Only maps and objects are allowed");
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
							var i = new ku(t);
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
							Ls(e, t.currentValue) || ((t.previousValue = t.currentValue), (t.currentValue = e), this._addToChanges(t));
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
				ku = (function() {
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
				Su = (function() {
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
								deps: [[t, new vt(), new mt()]]
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
						(t.ngInjectableDef = xt({
							token: t,
							providedIn: 'root',
							factory: function() {
								return new t([new gu()]);
							}
						})),
						t
					);
				})(),
				Pu = (function() {
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
								deps: [[t, new vt(), new mt()]]
							};
						}),
						(t.prototype.find = function(t) {
							var e = this.factories.find(function(e) {
								return e.supports(t);
							});
							if (e) return e;
							throw new Error("Cannot find a differ supporting object '" + t + "'");
						}),
						(t.ngInjectableDef = xt({
							token: t,
							providedIn: 'root',
							factory: function() {
								return new t([new xu()]);
							}
						})),
						t
					);
				})(),
				Eu = (function() {
					function t() {}
					return (
						(t.__NG_ELEMENT_ID__ = function() {
							return Ou();
						}),
						t
					);
				})(),
				Ou = function() {
					return (function(t, e, n) {
						if (On(t)) {
							var r = t.directiveStart,
								o = Pn(t.index, e);
							return new au(o, null, r);
						}
						if (3 === t.type || 0 === t.type || 4 === t.type) {
							var i = Io(e);
							return new au(i, i[rn], -1);
						}
						return null;
					})(ir(), Gn());
				},
				Iu = [new xu()],
				Tu = new Su([new gu()]),
				Mu = new Pu(Iu),
				Au = (function() {
					function t() {}
					return (
						(t.__NG_ELEMENT_ID__ = function() {
							return ju(t, cu);
						}),
						t
					);
				})(),
				ju = function(t, e) {
					return uu(t, e, ir(), Gn());
				},
				Ru = (function() {
					function t() {}
					return (
						(t.__NG_ELEMENT_ID__ = function() {
							return Du(t, cu);
						}),
						t
					);
				})(),
				Du = function(t, e) {
					return (function(t, e, n, r) {
						var i;
						$l ||
							($l = (function(t) {
								function n(e, n, r) {
									var o = t.call(this) || this;
									return (o._lContainer = e), (o._hostTNode = n), (o._hostView = r), o;
								}
								return (
									o(n, t),
									Object.defineProperty(n.prototype, 'element', {
										get: function() {
											return lu(e, this._hostTNode, this._hostView);
										},
										enumerable: !0,
										configurable: !0
									}),
									Object.defineProperty(n.prototype, 'injector', {
										get: function() {
											return new Wo(this._hostTNode, this._hostView);
										},
										enumerable: !0,
										configurable: !0
									}),
									Object.defineProperty(n.prototype, 'parentInjector', {
										get: function() {
											var t = Lo(this._hostTNode, this._hostView),
												e = Eo(t, this._hostView),
												n = (function(t, e, n) {
													if (n.parent && -1 !== n.parent.injectorIndex) {
														for (var r = n.parent.injectorIndex, o = n.parent; null != o.parent && r == o.injectorIndex; ) o = o.parent;
														return o;
													}
													for (var i = Po(t), a = e, s = e[tn]; i > 1; ) (s = (a = a[pn])[tn]), i--;
													return s;
												})(t, this._hostView, this._hostTNode);
											return ko(t) && null != n ? new Wo(n, e) : new Wo(null, this._hostView);
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
											var t = this._lContainer.length - bn;
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
										!o && null == t.ngModule && i && (o = i.get(ou, null));
										var a = t.create(i, r, void 0, o);
										return this.insert(a.hostView, e), a;
									}),
									(n.prototype.insert = function(t, e) {
										if (t.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
										this.allocateContainerIfNeeded();
										var n = t._lView,
											r = this._adjustIndex(e);
										return An(n)
											? this.move(t, r)
											: (Ks(n, this._lContainer, r), Js(n, !0, al(r, this._lContainer)), t.attachToViewContainerRef(this), this._lContainer[8].splice(r, 0, t), t);
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
											var r = Xs(t, e);
											r && $s(r);
										})(this._lContainer),
											this._lContainer[8].splice(e, 1);
									}),
									(n.prototype.detach = function(t) {
										this.allocateContainerIfNeeded();
										var e = this._adjustIndex(t, -1),
											n = Xs(this._lContainer, e);
										return n && null != this._lContainer[8].splice(e, 1)[0] ? new au(n, n[rn], -1) : null;
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
						if (_n(a)) (i = a)[gn] = -1;
						else {
							var s;
							if (((s = 4 === n.type ? yn(a) : r[sn].createComment('')), Tn(r))) {
								var l = r[sn],
									u = kn(n, r);
								nl(
									l,
									ol(l, u),
									s,
									(function(t, e) {
										return co(t) ? t.nextSibling(e) : e.nextSibling;
									})(l, u)
								);
							} else il(s, n, r);
							(r[n.index] = i = ws(a, r, s, n, !0)), xs(r, i);
						}
						return new $l(i, n, r);
					})(t, e, ir(), Gn());
				},
				Nu = {},
				Uu = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (n.ngModule = e), n;
					}
					return (
						o(e, t),
						(e.prototype.resolveComponentFactory = function(t) {
							var e = Ve(t);
							return new Vu(e, this.ngModule);
						}),
						e
					);
				})(ru);
			function Lu(t) {
				var e = [];
				for (var n in t) t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
				return e;
			}
			var Hu = new Lt('ROOT_CONTEXT_TOKEN', {
					providedIn: 'root',
					factory: function() {
						return jl(Jt(zu));
					}
				}),
				zu = new Lt('SCHEDULER_TOKEN', {
					providedIn: 'root',
					factory: function() {
						return Ge;
					}
				}),
				Vu = (function(t) {
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
								return Lu(this.componentDef.inputs);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(e.prototype, 'outputs', {
							get: function() {
								return Lu(this.componentDef.outputs);
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
													var i = t.get(n, Nu, o);
													return i !== Nu || r === Nu ? i : e.get(n, r, o);
												}
											};
									  })(t, r.injector)
									: t,
								l = s.get(fu, po),
								u = s.get(to, null),
								c = a
									? Ka(this.selector, l.createRenderer(null, this.componentDef))
									: ((o = n), (i = l.createRenderer(null, null)), 'string' == typeof o ? (co(i) ? i.selectRootElement(o) : i.querySelector(o)) : o),
								p = this.componentDef.onPush ? 576 : 528,
								f = 'string' == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
								d = a || f ? jl() : s.get(Hu),
								h = l.createRenderer(c, this.componentDef);
							n && c && (co(h) ? h.setAttribute(c, 'ng-version', hu.full) : c.setAttribute('ng-version', hu.full));
							var g,
								m,
								b = Xa(null, ss(-1, null, 1, 0, null, null, null, null), d, p, null, null, l, h, u, s),
								v = _r(b, null),
								y = !1;
							try {
								var w = (function(t, e, n, r, o, i) {
									(Wn = !1), (Zn = null), (Hn = 0), (Fn = !0);
									var a = n[Ye];
									n[0 + dn] = c;
									var s = $a(a, null, 0, 3, null, null),
										l = Xa(n, as(e), null, e.onPush ? 64 : 16, n[dn], s, r, o, void 0);
									return a.firstTemplatePass && (Ho(Do(s, n), n, e.type), (s.flags = 1), bs(s, n.length, 1), gs(s)), (n[dn] = l);
								})(0, this.componentDef, b, l, h);
								(m = Sn(0, b)),
									e &&
										(m.projection = e.map(function(t) {
											return Array.from(t);
										})),
									(g = (function(t, e, n, r, o) {
										var i = n[Ye],
											a = (function(t, e, n) {
												var r = ir();
												t.firstTemplatePass && (n.providersResolver && n.providersResolver(n), fs(t, r, 1), vs(t, e, n, n.factory));
												var o = qo(t.data, e, e.length - 1, r);
												return hs(e, r, o), o;
											})(i, n, e);
										r.components.push(a),
											(t[rn] = a),
											o &&
												o.forEach(function(t) {
													return t(a, e);
												}),
											e.contentQueries && e.contentQueries(1, a, n.length - 1);
										var s = ir();
										if (
											(i.firstTemplatePass &&
												e.hostBindings &&
												($n(s.index - dn), ps(e, i.expandoInstructions, a, s, i.firstTemplatePass), s.onElementCreationFns && Ds(s), $n(null)),
											s.stylingTemplate)
										) {
											var l = t[Qe];
											ei(l, s.stylingTemplate, t[sn]), ni(l, s.stylingTemplate, t[sn]);
										}
										return a;
									})(w, this.componentDef, b, d, [Rl])),
									xs(b, w),
									Ya(b),
									(y = !0);
							} finally {
								xr(v, y);
							}
							var _ = new Fu(this.componentType, g, lu(cu, m, b), b, m);
							return a && (_.hostView._tViewNode.child = m), _;
						}),
						e
					);
				})(eu),
				Fu = (function(t) {
					function e(e, n, r, o, i) {
						var a = t.call(this) || this;
						return (
							(a.location = r),
							(a._rootLView = o),
							(a._tNode = i),
							(a.destroyCbs = []),
							(a.instance = n),
							(a.hostView = a.changeDetectorRef = new su(o)),
							(a.hostView._tViewNode = ts(o[Ye], null, -1, o)),
							(a.componentType = e),
							a
						);
					}
					return (
						o(e, t),
						Object.defineProperty(e.prototype, 'injector', {
							get: function() {
								return new Wo(this._tNode, this._rootLView);
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
				})(tu),
				Bu = {},
				qu = (function(t) {
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
				Gu = void 0,
				Zu = [
					'en',
					[['a', 'p'], ['AM', 'PM'], Gu],
					[['AM', 'PM'], Gu, Gu],
					[
						['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
						['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
					],
					Gu,
					[
						['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
						['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
					],
					Gu,
					[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
					0,
					[6, 0],
					['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
					['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
					['{1}, {0}', Gu, "{1} 'at' {0}", Gu],
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
			function Wu(t) {
				t.toLowerCase().replace(/_/g, '-');
			}
			var Qu = new Map(),
				Yu = { provide: ru, useClass: Uu, deps: [ou] },
				Ju = (function(t) {
					function e(e, n) {
						var r = t.call(this) || this;
						(r._parent = n), (r._bootstrapComponents = []), (r.injector = r), (r.destroyCbs = []);
						var o = Fe(e),
							i = e[Ae] || null;
						return i && Wu(i), (r._bootstrapComponents = We(o.bootstrap)), (r._r3Injector = le(e, n, [{ provide: ou, useValue: r }, Yu], Ot(e))), (r.instance = r.get(e)), r;
					}
					return (
						o(e, t),
						(e.prototype.get = function(t, e, n) {
							return void 0 === e && (e = be.THROW_IF_NOT_FOUND), void 0 === n && (n = yt.Default), t === be || t === ou || t === Ht ? this : this._r3Injector.get(t, e, n);
						}),
						Object.defineProperty(e.prototype, 'componentFactoryResolver', {
							get: function() {
								return this.get(ru);
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
				})(ou),
				Ku = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (
							(n.moduleType = e),
							null !== Fe(e) &&
								(function t(e) {
									if (null !== e.ngModuleDef.id) {
										var n = e.ngModuleDef.id;
										(function(t, n, r) {
											if (n && n !== e) throw new Error('Duplicate module registered for ' + t + ' - ' + Ot(n) + ' vs ' + Ot(n.name));
										})(n, Qu.get(n)),
											Qu.set(n, e);
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
							return new Ju(this.moduleType, t);
						}),
						e
					);
				})(iu);
			function Xu(t, e, n, r) {
				var o = Gn(),
					i = mr() + t;
				return Bs(o, i, n) ? Vs(o, i + 1, r ? e.call(r, n) : e(n)) : Fs(o, i + 1);
			}
			function $u(t, e, n, r, o) {
				var i = mr() + t,
					a = Gn();
				return (function(t, e, n, r) {
					var o = Bs(t, e, n);
					return Bs(t, e + 1, r) || o;
				})(a, i, n, r)
					? Vs(a, i + 2, o ? e.call(o, n, r) : e(n, r))
					: Fs(a, i + 2);
			}
			var tc = (function(t) {
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
			function ec() {
				return this._results[Us()]();
			}
			var nc = (function() {
					function t() {
						(this.dirty = !0), (this._results = []), (this.changes = new tc()), (this.length = 0);
						var e = Us(),
							n = t.prototype;
						n[e] || (n[e] = ec);
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
				rc = (function() {
					return function(t, e, n, r, o) {
						(this.next = t), (this.list = e), (this.predicate = n), (this.values = r), (this.containerValues = o);
					};
				})(),
				oc = (function() {
					function t(t, e, n, r) {
						void 0 === r && (r = -1), (this.parent = t), (this.shallow = e), (this.deep = n), (this.nodeIndex = r);
					}
					return (
						(t.prototype.track = function(t, e, n, r) {
							n ? (this.deep = gc(this.deep, t, e, null != r ? r : null)) : (this.shallow = gc(this.shallow, t, e, null != r ? r : null));
						}),
						(t.prototype.clone = function(e) {
							return null !== this.shallow || En(e) ? new t(this, null, this.deep, e.index) : this;
						}),
						(t.prototype.container = function() {
							var e = ic(this.shallow),
								n = ic(this.deep);
							return e || n ? new t(this, e, n) : null;
						}),
						(t.prototype.createView = function() {
							var e = ac(this.shallow),
								n = ac(this.deep);
							return e || n ? new t(this, e, n) : null;
						}),
						(t.prototype.insertView = function(t) {
							sc(t, this.shallow), sc(t, this.deep);
						}),
						(t.prototype.addNode = function(t) {
							dc(this.deep, t, !1), dc(this.shallow, t, !1);
						}),
						(t.prototype.insertNodeBeforeViews = function(t) {
							dc(this.deep, t, !0), dc(this.shallow, t, !0);
						}),
						(t.prototype.removeView = function() {
							lc(this.shallow), lc(this.deep);
						}),
						t
					);
				})();
			function ic(t) {
				for (var e = null; t; ) {
					var n = [];
					t.values.push(n), (e = new rc(e, t.list, t.predicate, n, null)), (t = t.next);
				}
				return e;
			}
			function ac(t) {
				for (var e = null; t; ) (e = new rc(e, t.list, t.predicate, [], t.values)), (t = t.next);
				return e;
			}
			function sc(t, e) {
				for (; e; ) e.containerValues.splice(t, 0, e.values), e.values.length && e.list.setDirty(), (e = e.next);
			}
			function lc(t) {
				for (; t; ) {
					var e = t.containerValues,
						n = e.indexOf(t.values);
					e.splice(n, 1)[0].length && t.list.setDirty(), (t = t.next);
				}
			}
			function uc(t, e) {
				var n = t.localNames;
				if (n) for (var r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
				return null;
			}
			function cc(t, e, n) {
				var r = t[je];
				if ('function' == typeof r) return r();
				var o = n[Ye],
					i = Bo(e, o, t, !1, !1);
				return null !== i ? qo(o.data, n, i, e) : null;
			}
			function pc(t, e, n, r) {
				var o = t[je]();
				return r ? (o ? cc(r, e, n) : null) : o;
			}
			function fc(t, e, n, r) {
				return n
					? cc(n, t, e)
					: r > -1
					? qo(e[Ye].data, e, r, t)
					: (function(t, e) {
							return 3 === t.type || 4 === t.type ? lu(cu, t, e) : 0 === t.type ? uu(Au, cu, t, e) : null;
					  })(t, e);
			}
			function dc(t, e, n) {
				for (var r = Gn(), o = r[Ye]; t; ) {
					var i = t.predicate,
						a = i.type;
					if (a) {
						var s = null;
						a === Au ? (s = pc(a, e, r, i.read)) : null !== (c = Bo(e, o, a, !1, !1)) && (s = fc(e, r, i.read, c)), null !== s && hc(t, s, n);
					} else
						for (var l = i.selector, u = 0; u < l.length; u++) {
							var c;
							null !== (c = uc(e, l[u])) && null !== (s = fc(e, r, i.read, c)) && hc(t, s, n);
						}
					t = t.next;
				}
			}
			function hc(t, e, n) {
				n ? t.values.unshift(e) : t.values.push(e), t.list.setDirty();
			}
			function gc(t, e, n, r) {
				return new rc(
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
			function mc(t) {
				var e = t,
					n = cr();
				return !(!t.dirty || n !== e._static || (t.reset(e._valuesTree || []), t.notifyOnChanges(), 0));
			}
			function bc(t, e, n, r, o, i) {
				e.firstTemplatePass && e.expandoStartIndex++;
				var a = yr(),
					s = (function(t, e, n, r, o, i) {
						var a = new nc(),
							s = t[$e] || (t[$e] = new oc(null, null, null, -1));
						return (
							(a._valuesTree = []),
							(a._static = o),
							s.track(a, e, n, r),
							(function(t, e, n) {
								var r = Ms(t);
								r.push(e), t[Ye].firstTemplatePass && As(t).push(n, r.length - 1);
							})(t, a, a.destroy),
							a
						);
					})(t, n, r, o, i);
				return (
					(function(t, e) {
						var n = Gn(),
							r = n[Ye],
							o = t + dn;
						o >= r.data.length && ((r.data[o] = null), (r.blueprint[o] = null)), (n[o] = e);
					})(a - dn, s),
					wr(a + 1),
					s
				);
			}
			function vc() {
				var t = yr();
				return (
					wr(t + 1),
					(function(t, e) {
						return t[e + dn];
					})(Gn(), t - dn)
				);
			}
			var yc = new Lt('Application Initializer'),
				wc = (function() {
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
										Cl(o) && e.push(o);
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
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)(Jt(yc, 8));
							},
							providedIn: null
						})),
						t
					);
				})(),
				_c = new Lt('AppId'),
				xc = {
					provide: _c,
					useFactory: function() {
						return '' + Cc() + Cc() + Cc();
					},
					deps: []
				};
			function Cc() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			var kc,
				Sc,
				Pc = new Lt('Platform Initializer'),
				Ec = new Lt('Platform ID'),
				Oc = new Lt('appBootstrapListener'),
				Ic = (function() {
					function t() {}
					return (
						(t.prototype.log = function(t) {
							console.log(t);
						}),
						(t.prototype.warn = function(t) {
							console.warn(t);
						}),
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				Tc = new Lt('LocaleId'),
				Mc = (function() {
					return function(t, e) {
						(this.ngModuleFactory = t), (this.componentFactories = e);
					};
				})(),
				Ac = function(t) {
					return new Ku(t);
				},
				jc = Ac,
				Rc = function(t) {
					return Promise.resolve(Ac(t));
				},
				Dc = function(t) {
					var e = Ac(t),
						n = We(Fe(t).declarations).reduce(function(t, e) {
							var n = Ve(e);
							return n && t.push(new Vu(n)), t;
						}, []);
					return new Mc(e, n);
				},
				Nc = Dc,
				Uc = function(t) {
					return Promise.resolve(Dc(t));
				},
				Lc = (function() {
					function t() {
						(this.compileModuleSync = jc), (this.compileModuleAsync = Rc), (this.compileModuleAndAllComponentsSync = Nc), (this.compileModuleAndAllComponentsAsync = Uc);
					}
					return (
						(t.prototype.clearCache = function() {}),
						(t.prototype.clearCacheFor = function(t) {}),
						(t.prototype.getModuleId = function(t) {}),
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				Hc = new Lt('compilerOptions');
			function zc() {
				var t = Ut.wtf;
				return !(!t || !(kc = t.trace) || ((Sc = kc.events), 0));
			}
			var Vc = zc();
			function Fc(t, e) {
				return null;
			}
			var Bc = Vc
					? function(t, e) {
							return void 0 === e && (e = null), Sc.createScope(t, e);
					  }
					: function(t, e) {
							return Fc;
					  },
				qc = Vc
					? function(t, e) {
							return kc.leaveScope(t, e), e;
					  }
					: function(t, e) {
							return e;
					  },
				Gc = (function() {
					return Promise.resolve(0);
				})();
			function Zc(t) {
				'undefined' == typeof Zone
					? Gc.then(function() {
							t && t.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', t);
			}
			var Wc = (function() {
				function t(t) {
					var e,
						n = t.enableLongStackTrace,
						r = void 0 !== n && n;
					if (
						((this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new tc(!1)),
						(this.onMicrotaskEmpty = new tc(!1)),
						(this.onStable = new tc(!1)),
						(this.onError = new tc(!1)),
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
									return Kc(e), t.invokeTask(r, o, i, a);
								} finally {
									Xc(e);
								}
							},
							onInvoke: function(t, n, r, o, i, a, s) {
								try {
									return Kc(e), t.invoke(r, o, i, a, s);
								} finally {
									Xc(e);
								}
							},
							onHasTask: function(t, n, r, o) {
								t.hasTask(r, o),
									n === r && ('microTask' == o.change ? ((e.hasPendingMicrotasks = o.microTask), Jc(e)) : 'macroTask' == o.change && (e.hasPendingMacrotasks = o.macroTask));
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
							i = o.scheduleEventTask('NgZoneEvent: ' + r, t, Yc, Qc, Qc);
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
			function Qc() {}
			var Yc = {};
			function Jc(t) {
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
			function Kc(t) {
				t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
			}
			function Xc(t) {
				t._nesting--, Jc(t);
			}
			var $c,
				tp = (function() {
					function t() {
						(this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new tc()),
							(this.onMicrotaskEmpty = new tc()),
							(this.onStable = new tc()),
							(this.onError = new tc());
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
				ep = (function() {
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
											Wc.assertNotInAngularZone(),
												Zc(function() {
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
								Zc(function() {
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
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)(Jt(Wc));
							},
							providedIn: null
						})),
						t
					);
				})(),
				np = (function() {
					function t() {
						(this._applications = new Map()), rp.addToWindow(this);
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
							return void 0 === e && (e = !0), rp.findTestabilityInTree(this, t, e);
						}),
						((t = a([s('design:paramtypes', [])], t)).ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				rp = new ((function() {
					function t() {}
					return (
						(t.prototype.addToWindow = function(t) {}),
						(t.prototype.findTestabilityInTree = function(t, e, n) {
							return null;
						}),
						t
					);
				})())(),
				op = new Lt('AllowMultipleToken'),
				ip = (function() {
					return function(t, e) {
						(this.name = t), (this.token = e);
					};
				})();
			function ap(t, e, n) {
				void 0 === n && (n = []);
				var r = 'Platform: ' + e,
					o = new Lt(r);
				return function(e) {
					void 0 === e && (e = []);
					var i = sp();
					if (!i || i.injector.get(op, !1))
						if (t) t(n.concat(e).concat({ provide: o, useValue: !0 }));
						else {
							var a = n.concat(e).concat({ provide: o, useValue: !0 });
							!(function(t) {
								if ($c && !$c.destroyed && !$c.injector.get(op, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								$c = t.get(lp);
								var e = t.get(Pc, null);
								e &&
									e.forEach(function(t) {
										return t();
									});
							})(be.create({ providers: a, name: r }));
						}
					return (function(t) {
						var e = sp();
						if (!e) throw new Error('No platform exists!');
						if (!e.injector.get(t, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return e;
					})(o);
				};
			}
			function sp() {
				return $c && !$c.destroyed ? $c : null;
			}
			var lp = (function() {
				function t(t) {
					(this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
				}
				return (
					(t.prototype.bootstrapModuleFactory = function(t, e) {
						var n,
							r = this,
							o = 'noop' === (n = e ? e.ngZone : void 0) ? new tp() : ('zone.js' === n ? void 0 : n) || new Wc({ enableLongStackTrace: Tr() }),
							i = [{ provide: Wc, useValue: o }];
						return o.run(function() {
							var e = be.create({ providers: i, parent: r.injector, name: t.moduleType.name }),
								n = t.create(e),
								a = n.injector.get(Ko, null);
							if (!a) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								Wu(n.injector.get(Tc, 'en-US')),
								n.onDestroy(function() {
									return pp(r._modules, n);
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
											((a = n.injector.get(wc)).runInitializers(),
											a.donePromise.then(function() {
												return r._moduleDoBootstrap(n), n;
											}));
										return Cl(i)
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
						var r = up({}, e);
						return (function(t, e, n) {
							var r = new Ku(n);
							if (0 === xe.size) return Promise.resolve(r);
							var o,
								i,
								a =
									((o = t
										.get(Hc, [])
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
									var t = Ut.ng;
									if (!t || !t.ɵcompilerFacade)
										throw new Error(
											"Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
										);
									return t.ɵcompilerFacade;
								})(),
								l = be.create({ providers: a }).get(s.ResourceLoader);
							return (function(t) {
								var e = [],
									n = new Map();
								function r(e) {
									var r = n.get(e);
									if (!r) {
										var o = t(e);
										n.set(e, (r = o.then(ke)));
									}
									return r;
								}
								return (
									xe.forEach(function(t, n) {
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
												Ce.delete(t);
											})(n);
										});
										e.push(l);
									}),
									(xe = new Map()),
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
						var e = t.injector.get(cp);
						if (t._bootstrapComponents.length > 0)
							t._bootstrapComponents.forEach(function(t) {
								return e.bootstrap(t);
							});
						else {
							if (!t.instance.ngDoBootstrap)
								throw new Error(
									'The module ' +
										Ot(t.instance.constructor) +
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
					(t.ngInjectableDef = xt({
						token: t,
						factory: function(e) {
							return new (e || t)(Jt(be));
						},
						providedIn: null
					})),
					t
				);
			})();
			function up(t, e) {
				return Array.isArray(e) ? e.reduce(up, t) : i({}, t, e);
			}
			var cp = (function() {
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
						(this._enforceNoNewChanges = Tr()),
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
									Wc.assertNotInAngularZone(),
										Zc(function() {
											a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || ((a._stable = !0), t.next(!0));
										});
								});
							});
							var n = a._zone.onUnstable.subscribe(function() {
								Wc.assertInAngularZone(),
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
							null === r && 1 === t.length && t[0] instanceof I ? t[0] : it(n)($(t, r))
						);
					})(
						s,
						l.pipe(function(t) {
							return at()(
								((e = ft),
								function(t) {
									var n;
									n =
										'function' == typeof e
											? e
											: function() {
													return e;
											  };
									var r = Object.create(t, ct);
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
						(n = t instanceof eu ? t : this._componentFactoryResolver.resolveComponentFactory(t)), this.componentTypes.push(n.componentType);
						var o = n.isBoundToModule ? null : this._injector.get(ou),
							i = n.create(be.NULL, [], e || n.selector, o);
						i.onDestroy(function() {
							r._unloadComponent(i);
						});
						var a = i.injector.get(ep, null);
						return (
							a && i.injector.get(np).registerApplication(i.location.nativeElement, a),
							this._loadComponent(i),
							Tr() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
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
							(this._runningTick = !1), qc(a);
						}
					}),
					(t.prototype.attachView = function(t) {
						var e = t;
						this._views.push(e), e.attachToAppRef(this);
					}),
					(t.prototype.detachView = function(t) {
						var e = t;
						pp(this._views, e), e.detachFromAppRef();
					}),
					(t.prototype._loadComponent = function(t) {
						this.attachView(t.hostView),
							this.tick(),
							this.components.push(t),
							this._injector
								.get(Oc, [])
								.concat(this._bootstrapListeners)
								.forEach(function(e) {
									return e(t);
								});
					}),
					(t.prototype._unloadComponent = function(t) {
						this.detachView(t.hostView), pp(this.components, t);
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
					(t._tickScope = Bc('ApplicationRef#tick()')),
					(t.ngInjectableDef = xt({
						token: t,
						factory: function(e) {
							return new (e || t)(Jt(Wc), Jt(Ic), Jt(be), Jt(Ko), Jt(ru), Jt(wc));
						},
						providedIn: null
					})),
					t
				);
			})();
			function pp(t, e) {
				var n = t.indexOf(e);
				n > -1 && t.splice(n, 1);
			}
			var fp = (function() {
					return function() {};
				})(),
				dp = (function() {
					return function() {};
				})(),
				hp = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				gp = (function() {
					function t(t, e) {
						(this._compiler = t), (this._config = e || hp);
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
										return mp(t, o, i);
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
										return mp(t, r, o);
									})
							);
						}),
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)(Jt(Lc), Jt(dp, 8));
							},
							providedIn: null
						})),
						t
					);
				})();
			function mp(t, e, n) {
				if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
				return t;
			}
			var bp = ap(null, 'core', [{ provide: Ec, useValue: 'unknown' }, { provide: lp, deps: [be] }, { provide: np, deps: [] }, { provide: Ic, deps: [] }]),
				vp = [
					{ provide: cp, useClass: cp, deps: [Wc, Ic, be, Ko, ru, wc] },
					{
						provide: zu,
						deps: [Wc],
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
					{ provide: wc, useClass: wc, deps: [[new mt(), yc]] },
					{ provide: Lc, useClass: Lc, deps: [] },
					xc,
					{
						provide: Su,
						useFactory: function() {
							return Tu;
						},
						deps: []
					},
					{
						provide: Pu,
						useFactory: function() {
							return Mu;
						},
						deps: []
					},
					{
						provide: Tc,
						useFactory: function(t) {
							return t || 'en-US';
						},
						deps: [[new gt(Tc), new mt(), new vt()]]
					}
				],
				yp = (function() {
					function t(t) {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)(Jt(cp));
							},
							providers: vp
						})),
						t
					);
				})(),
				wp = (function() {
					return function() {};
				})(),
				_p = new Lt('Location Initialized'),
				xp = (function() {
					return function() {};
				})(),
				Cp = new Lt('appBaseHref'),
				kp = (function() {
					function t(t, n) {
						var r = this;
						(this._subject = new tc()), (this._urlChangeListeners = []), (this._platformStrategy = t);
						var o = this._platformStrategy.getBaseHref();
						(this._platformLocation = n),
							(this._baseHref = e.stripTrailingSlash(Sp(o))),
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
								})(this._baseHref, Sp(t))
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
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)(Jt(xp), Jt(wp));
							},
							providedIn: null
						})),
						t
					);
				})();
			function Sp(t) {
				return t.replace(/\/index.html$/, '');
			}
			var Pp = (function(t) {
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
							var e = kp.joinWithSlash(this._baseHref, t);
							return e.length > 0 ? '#' + e : e;
						}),
						(e.prototype.pushState = function(t, e, n, r) {
							var o = this.prepareExternalUrl(n + kp.normalizeQueryParams(r));
							0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o);
						}),
						(e.prototype.replaceState = function(t, e, n, r) {
							var o = this.prepareExternalUrl(n + kp.normalizeQueryParams(r));
							0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o);
						}),
						(e.prototype.forward = function() {
							this._platformLocation.forward();
						}),
						(e.prototype.back = function() {
							this._platformLocation.back();
						}),
						(e.ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(wp), Jt(Cp, 8));
							},
							providedIn: null
						})),
						e
					);
				})(xp),
				Ep = (function(t) {
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
							return kp.joinWithSlash(this._baseHref, t);
						}),
						(e.prototype.path = function(t) {
							void 0 === t && (t = !1);
							var e = this._platformLocation.pathname + kp.normalizeQueryParams(this._platformLocation.search),
								n = this._platformLocation.hash;
							return n && t ? '' + e + n : e;
						}),
						(e.prototype.pushState = function(t, e, n, r) {
							var o = this.prepareExternalUrl(n + kp.normalizeQueryParams(r));
							this._platformLocation.pushState(t, e, o);
						}),
						(e.prototype.replaceState = function(t, e, n, r) {
							var o = this.prepareExternalUrl(n + kp.normalizeQueryParams(r));
							this._platformLocation.replaceState(t, e, o);
						}),
						(e.prototype.forward = function() {
							this._platformLocation.forward();
						}),
						(e.prototype.back = function() {
							this._platformLocation.back();
						}),
						(e.ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(wp), Jt(Cp, 8));
							},
							providedIn: null
						})),
						e
					);
				})(xp),
				Op = (function(t) {
					return (t[(t.Zero = 0)] = 'Zero'), (t[(t.One = 1)] = 'One'), (t[(t.Two = 2)] = 'Two'), (t[(t.Few = 3)] = 'Few'), (t[(t.Many = 4)] = 'Many'), (t[(t.Other = 5)] = 'Other'), t;
				})({}),
				Ip = new Lt('UseV4Plurals'),
				Tp = (function() {
					return function() {};
				})(),
				Mp = (function(t) {
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
													n = Bu[e];
												if (n) return n;
												var r = e.split('-')[0];
												if ((n = Bu[r])) return n;
												if ('en' === r) return Zu;
												throw new Error('Missing locale data for the locale "' + t + '".');
											})(t)[qu.PluralCase];
									  })(e || this.locale)(t)
							) {
								case Op.Zero:
									return 'zero';
								case Op.One:
									return 'one';
								case Op.Two:
									return 'two';
								case Op.Few:
									return 'few';
								case Op.Many:
									return 'many';
								default:
									return 'other';
							}
						}),
						(e.ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(Tc), Jt(Ip, 8));
							},
							providedIn: null
						})),
						e
					);
				})(Tp),
				Ap = (function() {
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
												if (!Up(Object.keys(e), r)) return !0;
												for (var o = 0; o < r.length; o++) {
													var i = r[o];
													if (e[i] !== n[i]) return !0;
												}
												return !1;
											})(s, this.value, a)),
										t && (e = jp(this._name, n, r, o, a, s));
									break;
								case 4:
								case 8:
									var l = Array.from(this._lastSetValue);
									t || (t = !Up(Object.keys(this.value), l)), t && (e = jp(this._name, n, r, o, l));
									break;
								default:
									e = null;
							}
							return t && (this.value = e), t;
						}),
						t
					);
				})();
			function jp(t, e, n, r, o, i) {
				var a = {};
				if (i)
					for (var s = 0; s < i.length; s++) {
						var l = i[s];
						Dp(a, (l = e ? l.trim() : l), (u = o[l]), n, r);
					}
				else
					for (s = 0; s < o.length; s++) {
						var u;
						Rp(t, (u = o[s])), Dp(a, (u = e ? u.trim() : u), !0, !1, r);
					}
				return a;
			}
			function Rp(t, e) {
				if ('string' != typeof e) throw new Error(t + ' can only toggle CSS classes expressed as strings, got ' + e);
			}
			function Dp(t, e, n, r, o) {
				if (o && e.indexOf(' ') > 0) for (var i = e.split(/\s+/g), a = 0; a < i.length; a++) Np(t, i[a], n, r);
				else Np(t, e, n, r);
			}
			function Np(t, e, n, r) {
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
			function Up(t, e) {
				if (t && e) {
					if (t.length !== e.length) return !1;
					for (var n = 0; n < t.length; n++) if (-1 === e.indexOf(t[n])) return !1;
					return !0;
				}
				return !1;
			}
			var Lp = (function() {
					return function() {};
				})(),
				Hp = {
					provide: Lp,
					useClass: (function() {
						function t() {
							(this._value = null), (this._ngClassDiffer = new Ap('NgClass', 23)), (this._classStringDiffer = null);
						}
						return (
							(t.prototype.getValue = function() {
								return this._value;
							}),
							(t.prototype.setClass = function(t) {
								(t || this._classStringDiffer) && ((this._classStringDiffer = this._classStringDiffer || new Ap('class', 20)), this._classStringDiffer.setValue(t));
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
							(t.ngInjectableDef = xt({
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
				zp = ze({
					type: function() {},
					selectors: null,
					factory: function() {},
					hostBindings: function(t, e, n) {
						1 & t &&
							(function(t, e, n) {
								var r = ir();
								r.stylingTemplate || (r.stylingTemplate = bo());
								var o = vl();
								o
									? (ea() &&
											(function() {
												var t,
													e,
													n = Gn();
												(t = Sn(kr(), n)), (e = dl()), ia(gl(t), e), ia(hl(t), e);
											})(),
									  vo(r.stylingTemplate, o),
									  (r.onElementCreationFns = r.onElementCreationFns || []).push(function() {
											var i, a, s;
											bl(r, t, e, n, o), (a = o), (s = (i = r.stylingTemplate)[8]) || (s = i[8] = [go]), (s[0] = a);
									  }))
									: bl(r, t, e, n, go);
							})(),
							2 & t &&
								((function(t) {
									var e = kr(),
										n = Gn(),
										r = yl(e, n),
										o = vl();
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
										})(0, o, oi, [r, t, o]);
									else {
										var i = Sn(e, n);
										if (_o(i) && t !== Xo) {
											var a = Hi(r),
												s =
													(a.length ? a + ' ' : '') +
													(function(t) {
														return t && 'string' != typeof t && (t = Object.keys(t).join(' ')), t || '';
													})(t);
											Rs(n, i.inputs.class, s), (t = Xo);
										}
										oi(r, t);
									}
									ea() &&
										(function(t) {
											!(function(t, e) {
												Na = Ha;
												var n = kr(),
													r = Gn(),
													o = r[en]++;
												if (t !== Xo) {
													var i = Sn(n, r),
														a = Xn > 0,
														s = r[o],
														l = va(s, t),
														u = (function(t, e) {
															var n = Array.isArray(t) ? t : [null];
															n[0] = e || null;
															for (var r = 1; r < n.length; r += 2) qa(n, r, null);
															var o,
																i = null,
																a = !1;
															if (('string' == typeof e ? e.length && ((i = e.split(/\s+/)), (a = !0)) : ((i = e ? Object.keys(e) : null), (o = e)), i))
																t: for (var s = 0; s < i.length; s++) {
																	var l = i[s],
																		u = !!a || o[l];
																	for (r = 1; r < n.length; r += 2) {
																		var c = Ba(n, r);
																		if (l <= c) {
																			c === l ? qa(n, r, u) : n.splice(r, 0, l, u);
																			continue t;
																		}
																	}
																	n.push(l, u);
																}
															return n;
														})(s, t);
													e
														? (function(t, e, n, o, i, s, l) {
																var c = Sa;
																(Ta(t, r, c, null, o, u, a, l, !1) || l) && (Oa |= 1 << c);
														  })(gl(i), 0, 0, o, 0, 0, l)
														: (wa(r),
														  (function(t, e, n, o, i, s, l, c) {
																var p = Sa;
																(Ta(t, r, p, null, o, u, a, c, !0) || c) && (Ea |= 1 << p);
														  })(hl(i), 0, 0, o, 0, 0, 0, l));
												}
											})(t, !0);
										})(t);
								})(e.getValue()),
								(function() {
									var t,
										e,
										n,
										r = kr(),
										o = vl() || go,
										i = Gn(),
										a = 3 === Sn(r, i).type ? i[sn] : null,
										s = 0 != (8 & i[Je]),
										l = yl(r, i);
									ta < 2 &&
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
													return li(t, 1);
												})(t))
											) {
												for (var l = t[0], u = 8 & t[1], c = mi(t), p = 10; p < t.length; p += 4)
													if (li(t, p)) {
														var f = Ci(t, p),
															d = Di(t, p),
															h = Si(t, p),
															g = ki(t, p),
															m = 4 & f ? Ui(t, d) : null,
															b = _i(t, p),
															v = !!(2 & f),
															y = g;
														p < c && !Ti(y) && (y = ki(t, hi(f))),
															Ti(y) || (y = fi(t, f)),
															e && (!r || y) && (v ? ai(l, h, !!y, e, null, b) : ii(l, h, y, e, m, null, b)),
															si(t, p, !1);
													}
												if (u) {
													var w = Array.isArray(n) ? To(n) : n,
														_ = t[9],
														x = _[0];
													for (p = 1; p < x; p += 2) {
														var C = _[p],
															k = p + 1,
															S = _[k];
														if (C) {
															var P = C.buildPlayer(S, r);
															void 0 !== P && (null != P && xo(_, w, l, P, k) && s++, S && S.destroy());
														} else S && S.destroy();
													}
													Ei(t, !1);
												}
												Pi(t, !1);
											}
											return s;
										})(l, a, i, s, 0, 0, o) > 0 &&
										((n = 0 === (t = To(i)).flags),
										(t.flags |= 2),
										n &&
											t.clean == Qa &&
											((t.clean = new Promise(function(t) {
												return (e = t);
											})),
											t.scheduler(function() {
												if ((1 & t.flags && ((t.flags &= -2), ks(t)), 2 & t.flags)) {
													t.flags &= -3;
													var n = t.playerHandler;
													n && n.flushPlayers();
												}
												(t.clean = Qa), e(null);
											}))),
										Vn(null),
										ea() &&
											(function() {
												var t = kr(),
													e = Gn(),
													n = Sn(t, e),
													r = (function(t, e) {
														return 3 === t.type ? e[sn] : null;
													})(n, e),
													o = (function(t, n) {
														for (var r = e[t + dn], o = e; Array.isArray(r); ) (o = r), (r = r[Qe]);
														return xn(o) ? o[0] : r;
													})(t),
													i = dl();
												!(function(t, e, n, r, o) {
													ha(n, o) && (!ma(n) && ga(n), Oa && (Da(n, t, r, e, Oa, La, null), (Oa = 0)), Pa);
												})(r, e, gl(n), o, i);
												var a = wa(e);
												!(function(t, e, n, r, o, i) {
													ha(n, o) && (!ma(n) && ga(n), Ea && (Da(n, t, r, e, Ea, Ua, i), (Ea = 0)), Pa);
												})(r, e, hl(n), o, i, a),
													na(null);
											})();
								})());
					}
				}),
				Vp = (function(t) {
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
						(e.ngDirectiveDef = ze({
							type: e,
							selectors: [['', 'ngClass', '']],
							factory: function(t) {
								return new (t || e)(fl(Lp));
							},
							inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
							features: [
								((n = [Hp]),
								void 0 === r && (r = []),
								function(t) {
									t.providersResolver = function(t, e) {
										return (function(t, e, n) {
											var r = Gn()[Ye];
											if (r.firstTemplatePass) {
												var o = In(t);
												Gl(n, r.data, r.blueprint, o, !0), Gl(e, r.data, r.blueprint, o, !1);
											}
										})(t, e ? e(n) : n, r);
									};
								}),
								zl
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
							(t.ngDirectiveDef = zp),
							t
						);
					})()
				),
				Fp = (function() {
					function t(t, e) {
						(this._viewContainer = t),
							(this._context = new Bp()),
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
								qp('ngIfThen', t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'ngIfElse', {
							set: function(t) {
								qp('ngIfElse', t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
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
						(t.ngDirectiveDef = ze({
							type: t,
							selectors: [['', 'ngIf', '']],
							factory: function(e) {
								return new (e || t)(fl(Ru), fl(Au));
							},
							inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' }
						})),
						t
					);
				})(),
				Bp = (function() {
					return function() {
						(this.$implicit = null), (this.ngIf = null);
					};
				})();
			function qp(t, e) {
				if (e && !e.createEmbeddedView) throw new Error(t + " must be a TemplateRef, but received '" + Ot(e) + "'.");
			}
			var Gp = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							},
							providers: [{ provide: Tp, useClass: Mp }]
						})),
						t
					);
				})(),
				Zp = new Lt('DocumentToken'),
				Wp = 'server',
				Qp = (function() {
					function t() {}
					return (
						(t.ngInjectableDef = xt({
							token: t,
							providedIn: 'root',
							factory: function() {
								return new Yp(Jt(Zp), window, Jt(Ko));
							}
						})),
						t
					);
				})(),
				Yp = (function() {
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
				Jp = null;
			function Kp() {
				return Jp;
			}
			var Xp,
				$p = (function(t) {
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
				tf = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				ef = {
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
				nf = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' },
				rf = (function() {
					if (Ut.Node)
						return (
							Ut.Node.prototype.contains ||
							function(t) {
								return !!(16 & this.compareDocumentPosition(t));
							}
						);
				})(),
				of = (function(t) {
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
							(t = new e()), Jp || (Jp = t);
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
								return tf;
							},
							enumerable: !0,
							configurable: !0
						}),
						(e.prototype.contains = function(t, e) {
							return rf.call(t, e);
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
								e.startsWith('U+') && ((e = String.fromCharCode(parseInt(e.substring(2), 16))), 3 === t.location && nf.hasOwnProperty(e) && (e = nf[e]));
							}
							return ef[e] || e;
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
								n = af || (af = document.querySelector('base')) ? af.getAttribute('href') : null;
							return null == n ? null : ((e = n), Xp || (Xp = document.createElement('a')), Xp.setAttribute('href', e), '/' === Xp.pathname.charAt(0) ? Xp.pathname : '/' + Xp.pathname);
						}),
						(e.prototype.resetBaseElement = function() {
							af = null;
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
				})($p),
				af = null;
			function sf() {
				return !!window.history.pushState;
			}
			var lf = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (n._doc = e), n._init(), n;
					}
					var n;
					return (
						o(e, t),
						(e.prototype._init = function() {
							(this.location = Kp().getLocation()), (this._history = Kp().getHistory());
						}),
						(e.prototype.getBaseHrefFromDOM = function() {
							return Kp().getBaseHref(this._doc);
						}),
						(e.prototype.onPopState = function(t) {
							Kp()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', t, !1);
						}),
						(e.prototype.onHashChange = function(t) {
							Kp()
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
							sf() ? this._history.pushState(t, e, n) : (this.location.hash = n);
						}),
						(e.prototype.replaceState = function(t, e, n) {
							sf() ? this._history.replaceState(t, e, n) : (this.location.hash = n);
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
								((n = gt(Zp)),
								function(t, e) {
									n(t, e, 0);
								}),
								s('design:paramtypes', [Object])
							],
							e
						)).ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(Zp));
							},
							providedIn: null
						})),
						e
					);
				})(wp),
				uf = new Lt('TRANSITION_ID'),
				cf = [
					{
						provide: yc,
						useFactory: function(t, e, n) {
							return function() {
								n.get(wc).donePromise.then(function() {
									var n = Kp();
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
						deps: [uf, Zp, be],
						multi: !0
					}
				],
				pf = (function() {
					function t() {}
					return (
						(t.init = function() {
							var e;
							(e = new t()), (rp = e);
						}),
						(t.prototype.addToWindow = function(t) {
							(Ut.getAngularTestability = function(e, n) {
								void 0 === n && (n = !0);
								var r = t.findTestabilityInTree(e, n);
								if (null == r) throw new Error('Could not find testability for element.');
								return r;
							}),
								(Ut.getAllAngularTestabilities = function() {
									return t.getAllTestabilities();
								}),
								(Ut.getAllAngularRootElements = function() {
									return t.getAllRootElements();
								}),
								Ut.frameworkStabilizers || (Ut.frameworkStabilizers = []),
								Ut.frameworkStabilizers.push(function(t) {
									var e = Ut.getAllAngularTestabilities(),
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
							return null != r ? r : n ? (Kp().isShadowRoot(e) ? this.findTestabilityInTree(t, Kp().getHost(e), !0) : this.findTestabilityInTree(t, Kp().parentElement(e), !0)) : null;
						}),
						t
					);
				})(),
				ff = new Lt('EventManagerPlugins'),
				df = (function() {
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
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)(Jt(ff), Jt(Wc));
							},
							providedIn: null
						})),
						t
					);
				})(),
				hf = (function() {
					function t(t) {
						this._doc = t;
					}
					return (
						(t.prototype.addGlobalEventListener = function(t, e, n) {
							var r = Kp().getGlobalEventTarget(this._doc, t);
							if (!r) throw new Error('Unsupported event target ' + r + ' for event ' + e);
							return this.addEventListener(r, e, n);
						}),
						t
					);
				})(),
				gf = (function() {
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
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				mf = (function(t) {
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
								return Kp().remove(t);
							});
						}),
						(e.ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(Zp));
							},
							providedIn: null
						})),
						e
					);
				})(gf),
				bf = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/'
				},
				vf = /%COMP%/g,
				yf = '_nghost-%COMP%',
				wf = '_ngcontent-%COMP%';
			function _f(t, e, n) {
				for (var r = 0; r < e.length; r++) {
					var o = e[r];
					Array.isArray(o) ? _f(t, o, n) : ((o = o.replace(vf, t)), n.push(o));
				}
				return n;
			}
			function xf(t) {
				return function(e) {
					!1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
				};
			}
			var Cf = (function() {
					function t(t, e, n) {
						(this.eventManager = t), (this.sharedStylesHost = e), (this.appId = n), (this.rendererByCompId = new Map()), (this.defaultRenderer = new kf(t));
					}
					return (
						(t.prototype.createRenderer = function(t, e) {
							if (!t || !e) return this.defaultRenderer;
							switch (e.encapsulation) {
								case Se.Emulated:
									var n = this.rendererByCompId.get(e.id);
									return n || ((n = new Ef(this.eventManager, this.sharedStylesHost, e, this.appId)), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
								case Se.Native:
								case Se.ShadowDom:
									return new Of(this.eventManager, this.sharedStylesHost, t, e);
								default:
									if (!this.rendererByCompId.has(e.id)) {
										var r = _f(e.id, e.styles, []);
										this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer);
									}
									return this.defaultRenderer;
							}
						}),
						(t.prototype.begin = function() {}),
						(t.prototype.end = function() {}),
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)(Jt(df), Jt(mf), Jt(_c));
							},
							providedIn: null
						})),
						t
					);
				})(),
				kf = (function() {
					function t(t) {
						(this.eventManager = t), (this.data = Object.create(null));
					}
					return (
						(t.prototype.destroy = function() {}),
						(t.prototype.createElement = function(t, e) {
							return e ? document.createElementNS(bf[e] || e, t) : document.createElement(t);
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
								var o = bf[r];
								o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n);
							} else t.setAttribute(e, n);
						}),
						(t.prototype.removeAttribute = function(t, e, n) {
							if (n) {
								var r = bf[n];
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
							r & du.DashCase ? t.style.setProperty(e, n, r & du.Important ? 'important' : '') : (t.style[e] = n);
						}),
						(t.prototype.removeStyle = function(t, e, n) {
							n & du.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
						}),
						(t.prototype.setProperty = function(t, e, n) {
							Pf(e, 'property'), (t[e] = n);
						}),
						(t.prototype.setValue = function(t, e) {
							t.nodeValue = e;
						}),
						(t.prototype.listen = function(t, e, n) {
							return Pf(e, 'listener'), 'string' == typeof t ? this.eventManager.addGlobalEventListener(t, e, xf(n)) : this.eventManager.addEventListener(t, e, xf(n));
						}),
						t
					);
				})(),
				Sf = (function() {
					return '@'.charCodeAt(0);
				})();
			function Pf(t, e) {
				if (t.charCodeAt(0) === Sf) throw new Error('Found the synthetic ' + e + ' ' + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
			}
			var Ef = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						i.component = r;
						var a = _f(o + '-' + r.id, r.styles, []);
						return n.addStyles(a), (i.contentAttr = wf.replace(vf, o + '-' + r.id)), (i.hostAttr = yf.replace(vf, o + '-' + r.id)), i;
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
				})(kf),
				Of = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						(i.sharedStylesHost = n),
							(i.hostEl = r),
							(i.component = o),
							(i.shadowRoot = o.encapsulation === Se.ShadowDom ? r.attachShadow({ mode: 'open' }) : r.createShadowRoot()),
							i.sharedStylesHost.addHost(i.shadowRoot);
						for (var a = _f(o.id, o.styles, []), s = 0; s < a.length; s++) {
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
				})(kf),
				If = (function() {
					return (
						('undefined' != typeof Zone && Zone.__symbol__) ||
						function(t) {
							return '__zone_symbol__' + t;
						}
					);
				})(),
				Tf = If('addEventListener'),
				Mf = If('removeEventListener'),
				Af = {},
				jf = '__zone_symbol__propagationStopped',
				Rf = (function() {
					var t = 'undefined' != typeof Zone && Zone[If('BLACK_LISTED_EVENTS')];
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
				Df = function(t) {
					return !!Rf && Rf.hasOwnProperty(t);
				},
				Nf = function(t) {
					var e = Af[t.type];
					if (e) {
						var n = this[e];
						if (n) {
							var r = [t];
							if (1 === n.length) return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
							for (var o = n.slice(), i = 0; i < o.length && !0 !== t[jf]; i++) {
								var a;
								(a = o[i]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
							}
						}
					}
				},
				Uf = (function(t) {
					function e(e, n, r) {
						var o = t.call(this, e) || this;
						return (
							(o.ngZone = n),
							(r &&
								(function(t) {
									return t === Wp;
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
									this && (this[jf] = !0), t && t.apply(this, arguments);
								};
							}
						}),
						(e.prototype.supports = function(t) {
							return !0;
						}),
						(e.prototype.addEventListener = function(t, e, n) {
							var r = this,
								o = n;
							if (!t[Tf] || (Wc.isInAngularZone() && !Df(e))) t.addEventListener(e, o, !1);
							else {
								var i = Af[e];
								i || (i = Af[e] = If('ANGULAR' + e + 'FALSE'));
								var a = t[i],
									s = a && a.length > 0;
								a || (a = t[i] = []);
								var l = Df(e) ? Zone.root : Zone.current;
								if (0 === a.length) a.push({ zone: l, handler: o });
								else {
									for (var u = !1, c = 0; c < a.length; c++)
										if (a[c].handler === o) {
											u = !0;
											break;
										}
									u || a.push({ zone: l, handler: o });
								}
								s || t[Tf](e, Nf, !1);
							}
							return function() {
								return r.removeEventListener(t, e, o);
							};
						}),
						(e.prototype.removeEventListener = function(t, e, n) {
							var r = t[Mf];
							if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
							var o = Af[e],
								i = o && t[o];
							if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
							for (var a = !1, s = 0; s < i.length; s++)
								if (i[s].handler === n) {
									(a = !0), i.splice(s, 1);
									break;
								}
							a ? 0 === i.length && r.apply(t, [e, Nf, !1]) : t.removeEventListener.apply(t, [e, n, !1]);
						}),
						(e.ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(Zp), Jt(Wc), Jt(Ec, 8));
							},
							providedIn: null
						})),
						e
					);
				})(hf),
				Lf = {
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
				Hf = new Lt('HammerGestureConfig'),
				zf = new Lt('HammerLoader'),
				Vf = (function() {
					function t() {
						(this.events = []), (this.overrides = {});
					}
					return (
						(t.prototype.buildHammer = function(t) {
							var e = new Hammer(t, this.options);
							for (var n in (e.get('pinch').set({ enable: !0 }), e.get('rotate').set({ enable: !0 }), this.overrides)) e.get(n).set(this.overrides[n]);
							return e;
						}),
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)();
							},
							providedIn: null
						})),
						t
					);
				})(),
				Ff = (function(t) {
					function e(e, n, r, o) {
						var i = t.call(this, e) || this;
						return (i._config = n), (i.console = r), (i.loader = o), i;
					}
					return (
						o(e, t),
						(e.prototype.supports = function(t) {
							return !(
								(!Lf.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t)) ||
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
						(e.ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(Zp), Jt(Hf), Jt(Ic), Jt(zf, 8));
							},
							providedIn: null
						})),
						e
					);
				})(hf),
				Bf = ['alt', 'control', 'meta', 'shift'],
				qf = {
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
				Gf = (function(t) {
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
								return Kp().onAndCancel(t, o.domEventName, i);
							});
						}),
						(e.parseEventName = function(t) {
							var e = t.toLowerCase().split('.'),
								r = e.shift();
							if (0 === e.length || ('keydown' !== r && 'keyup' !== r)) return null;
							var o = n._normalizeKey(e.pop()),
								i = '';
							if (
								(Bf.forEach(function(t) {
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
								n = Kp().getEventKey(t);
							return (
								' ' === (n = n.toLowerCase()) ? (n = 'space') : '.' === n && (n = 'dot'),
								Bf.forEach(function(r) {
									r != n && (0, qf[r])(t) && (e += r + '.');
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
						(e.ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(Zp));
							},
							providedIn: null
						})),
						e
					);
				})(hf),
				Zf = (function() {
					return function() {};
				})(),
				Wf = (function(t) {
					function e(e) {
						var n = t.call(this) || this;
						return (n._doc = e), n;
					}
					return (
						o(e, t),
						(e.prototype.sanitize = function(t, e) {
							if (null == e) return null;
							switch (t) {
								case $r.NONE:
									return e;
								case $r.HTML:
									return e instanceof Yf ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, 'HTML'), Kr(this._doc, String(e)));
								case $r.STYLE:
									return e instanceof Jf
										? e.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(e, 'Style'),
										  (function(t) {
												if (!(t = String(t).trim())) return '';
												var e = t.match(no);
												return (e && Rr(e[1]) === e[1]) ||
													(t.match(eo) &&
														(function(t) {
															for (var e = !0, n = !0, r = 0; r < t.length; r++) {
																var o = t.charAt(r);
																"'" === o && n ? (e = !e) : '"' === o && e && (n = !n);
															}
															return e && n;
														})(t))
													? t
													: (Tr() && console.warn('WARNING: sanitizing unsafe style value ' + t + ' (see http://g.co/ng/security#xss).'), 'unsafe');
										  })(e));
								case $r.SCRIPT:
									if (e instanceof Kf) return e.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(e, 'Script'), new Error('unsafe value used in a script context'));
								case $r.URL:
									return e instanceof $f || e instanceof Xf ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, 'URL'), Rr(String(e)));
								case $r.RESOURCE_URL:
									if (e instanceof $f) return e.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(e, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
								default:
									throw new Error('Unexpected SecurityContext ' + t + ' (see http://g.co/ng/security#xss)');
							}
						}),
						(e.prototype.checkNotSafeValue = function(t, e) {
							if (t instanceof Qf) throw new Error('Required a safe ' + e + ', got a ' + t.getTypeName() + ' (see http://g.co/ng/security#xss)');
						}),
						(e.prototype.bypassSecurityTrustHtml = function(t) {
							return new Yf(t);
						}),
						(e.prototype.bypassSecurityTrustStyle = function(t) {
							return new Jf(t);
						}),
						(e.prototype.bypassSecurityTrustScript = function(t) {
							return new Kf(t);
						}),
						(e.prototype.bypassSecurityTrustUrl = function(t) {
							return new Xf(t);
						}),
						(e.prototype.bypassSecurityTrustResourceUrl = function(t) {
							return new $f(t);
						}),
						(e.ngInjectableDef = xt({
							token: e,
							factory: function(t) {
								return new (t || e)(Jt(Zp));
							},
							providedIn: null
						})),
						e
					);
				})(Zf),
				Qf = (function() {
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
				Yf = (function(t) {
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
				})(Qf),
				Jf = (function(t) {
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
				})(Qf),
				Kf = (function(t) {
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
				})(Qf),
				Xf = (function(t) {
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
				})(Qf),
				$f = (function(t) {
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
				})(Qf),
				td = [{ provide: to, useExisting: Zf }, { provide: Zf, useClass: Wf, deps: [Zp] }],
				ed = ap(bp, 'browser', [
					{ provide: Ec, useValue: 'browser' },
					{
						provide: Pc,
						useValue: function() {
							of.makeCurrent(), pf.init();
						},
						multi: !0
					},
					{ provide: wp, useClass: lf, deps: [Zp] },
					{
						provide: Zp,
						useFactory: function() {
							return document;
						},
						deps: []
					}
				]),
				nd = [
					td,
					{ provide: ne, useValue: !0 },
					{
						provide: Ko,
						useFactory: function() {
							return new Ko();
						},
						deps: []
					},
					{ provide: ff, useClass: Uf, multi: !0, deps: [Zp, Wc, Ec] },
					{ provide: ff, useClass: Gf, multi: !0, deps: [Zp] },
					{ provide: ff, useClass: Ff, multi: !0, deps: [Zp, Hf, Ic, [new mt(), zf]] },
					{ provide: Hf, useClass: Vf, deps: [] },
					{ provide: Cf, useClass: Cf, deps: [df, mf, _c] },
					{ provide: fu, useExisting: Cf },
					{ provide: gf, useExisting: mf },
					{ provide: mf, useClass: mf, deps: [Zp] },
					{ provide: ep, useClass: ep, deps: [Wc] },
					{ provide: df, useClass: df, deps: [ff, Wc] },
					[]
				],
				rd = (function() {
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
							return { ngModule: e, providers: [{ provide: _c, useValue: t.appId }, { provide: uf, useExisting: _c }, cf] };
						}),
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(n) {
								return new (n || t)(Jt(e, 12));
							},
							providers: nd,
							imports: [Gp, yp]
						})),
						t
					);
				})();
			'undefined' != typeof window && window;
			const od = ['message'],
				id = ['tabindex', '-1', 3, 'id'],
				ad = ['message', ''],
				sd = ['class', 'close', 'type', 'button', 'aria-label', 'close-alert', 'autofocus', '', 3, 'click', 'blur', 4, 'ngIf'],
				ld = ['type', 'button', 'aria-label', 'close-alert', 'autofocus', '', 1, 'close', 3, 'click', 'blur'];
			function ud(t, e) {
				if (1 & t) {
					const t = Gn();
					wl(0, 'button', ld),
						kl('click', function(e) {
							return or(t), El().closeAlert();
						}),
						kl('blur', function(e) {
							return or(t), El().trap();
						}),
						Al(1, ' X\n'),
						_l();
				}
			}
			const cd = ['*'],
				pd = ['content'],
				fd = ['href', '#', 1, 'show-focus', 3, 'click'];
			var dd = (function() {
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
						(t.ngComponentDef = De({
							type: t,
							selectors: [['ez-alert'], ['', 8, 'alert-bad'], ['', 8, 'alert-good'], ['', 8, 'alert-info'], ['', 8, 'alert-warn']],
							factory: function(e) {
								return new (e || t)(fl(cu));
							},
							viewQuery: function(t, e) {
								var n, r, o, i;
								1 & t && ((r = od), !0, null, bc((o = Gn()), (i = o[Ye]), r, !0, null, !0), (i.staticViewQueries = !0)), 2 & t && mc((n = vc())) && (e.message = n.first);
							},
							hostBindings: function(t, e, n) {
								var r, o;
								1 & t &&
									(o = (r = Gn())[Ye]).firstTemplatePass &&
									((function(t, e, n) {
										var r = t.expandoInstructions,
											o = r.length;
										o >= 2 && r[o - 2] === e.hostBindings ? (r[o - 1] = r[o - 1] + 4) : r.push(e.hostBindings, 4);
									})(o, Bn),
									(function(t, e, n) {
										for (var r = 0; r < 4; r++) e.push(Xo), t.blueprint.push(Xo), t.data.push(null);
									})(o, r)),
									2 & t && (Zs('class', e.hostClass), Zs('tabindex', e.tabindex), Zs('aria-labelledby', e.ariaLabelledby), Zs('role', e.role));
							},
							inputs: { class: 'class' },
							ngContentSelectors: cd,
							consts: 4,
							vars: 2,
							template: function(t, e) {
								1 & t && (Il(), wl(0, 'p', id, ad), Ml(2), _l(), pl(3, ud, 2, 0, 'button', sd)), 2 & t && (Zs('id', e.id), Za(3), qs('ngIf', e.close));
							},
							directives: [Fp],
							styles: [
								'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
							]
						})),
						t
					);
				})(),
				hd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[], Gp]
						})),
						t
					);
				})(),
				gd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[hd]]
						})),
						t
					);
				})(),
				md = (function() {
					function t() {}
					return (
						(t.prototype.ngOnInit = function() {}),
						(t.ngComponentDef = De({
							type: t,
							selectors: [['ez-badge'], ['', 8, 'badge-sm'], ['', 8, 'badge-md'], ['', 8, 'badge-lg']],
							factory: function(e) {
								return new (e || t)();
							},
							ngContentSelectors: cd,
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && (Il(), Ml(0));
							},
							styles: [
								'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
							]
						})),
						t
					);
				})(),
				bd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.prototype.ngOnInit = function() {}),
						(t.ngComponentDef = De({
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
							ngContentSelectors: cd,
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && (Il(), Ml(0));
							},
							styles: [
								'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;-webkit-box-flex:1;flex-grow:1;flex-shrink:0}'
							]
						})),
						t
					);
				})(),
				yd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				_d = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.prototype.ngOnInit = function() {}),
						(t.ngComponentDef = De({
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
							ngContentSelectors: cd,
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && (Il(), Ml(0));
							},
							styles: [
								'@charset "UTF-8";.checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1 1 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border,box-shadow;transition-property:border,box-shadow;-webkit-transition-timing-function:linear;transition-timing-function:linear;border:.0625rem solid #bdbdbd}.form-field[_nghost-%COMP%]:not(:disabled), .form-field[_nghost-%COMP%]:not([disabled]){background-color:#fff}.form-field[_nghost-%COMP%]:-moz-read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[_nghost-%COMP%]:read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[type=checkbox][_nghost-%COMP%], .form-field[type=radio][_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;position:relative;width:1rem}.form-field[type=checkbox][_nghost-%COMP%]::after, .form-field[type=radio][_nghost-%COMP%]::after{display:block;font-size:1.175rem;height:.95rem;left:0;line-height:.8rem;position:absolute;text-align:center;top:0;width:.95rem}.form-field[type=checkbox][_nghost-%COMP%]:checked::after{content:"\u2713"}.form-field[type=radio][_nghost-%COMP%]{border-radius:50%}.form-field[type=radio][_nghost-%COMP%]:checked::after{content:"\u25cf"}.form-field[_nghost-%COMP%]:hover{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border;transition-property:border;-webkit-transition-timing-function:linear;transition-timing-function:linear;border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border,box-shadow;transition-property:border,box-shadow;-webkit-transition-timing-function:linear;transition-timing-function:linear;box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3;outline:#2196f3 dotted 1px}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){-webkit-box-flex:1;flex:1 0 13.75rem;padding:.5rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-moz-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{-webkit-box-flex:1;flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{background-color:inherit;color:#8d8d8d;height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#8d8d8d}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{-webkit-box-flex:0;flex:0 0 7.5rem;flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{-webkit-box-flex:0;flex:none;font-size:1rem;padding-left:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}'
							]
						})),
						t
					);
				})(),
				Cd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Od = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.prototype.ngOnInit = function() {}),
						(t.ngComponentDef = De({
							type: t,
							selectors: [['ez-spinner'], ['', 8, 'spinner'], ['', 8, 'spinner-dotted']],
							factory: function(e) {
								return new (e || t)();
							},
							ngContentSelectors: cd,
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && (Il(), Ml(0));
							},
							styles: [
								'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
							]
						})),
						t
					);
				})(),
				Td = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
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
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				jd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Rd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							}
						})),
						t
					);
				})(),
				Dd = (function() {
					function t(t) {
						this.elementRef = t;
					}
					return (
						(t.prototype.ngOnInit = function() {}),
						(t.prototype.skip = function() {
							this.content.nativeElement.focus();
						}),
						(t.ngComponentDef = De({
							type: t,
							selectors: [['ez-root']],
							factory: function(e) {
								return new (e || t)(fl(cu));
							},
							viewQuery: function(t, e) {
								var n, r, o;
								1 & t && ((r = pd), !0, null, bc((o = Gn()), o[Ye], r, !0, null, !1)), 2 & t && mc((n = vc())) && (e.content = n.first);
							},
							ngContentSelectors: cd,
							consts: 3,
							vars: 0,
							template: function(t, e) {
								1 & t &&
									(Il(),
									wl(0, 'a', fd),
									kl('click', function(t) {
										return e.skip();
									}),
									Al(1, 'Skip to content'),
									_l(),
									Ml(2));
							},
							styles: [
								'@charset "UTF-8";/*! Easy CSS/Angular Framework v0.0.1\n * Author: Paul Chehak\n * License: MIT License\n */a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:"\u2012";color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex="-1"]:focus,input[type=range]:focus{outline:0}/*! Easy CSS/Angular Framework v0.0.1\n * Author: Paul Chehak\n * License: MIT License\n */.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start}.col,.col-full{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{-webkit-box-pack:center;justify-content:center}.align-l,.col.align-t{-webkit-box-pack:start;justify-content:flex-start}.align-r,.col.align-b{-webkit-box-pack:end;justify-content:flex-end}.align-m,.col.align-c{-webkit-box-align:center;align-items:center}.align-b,.col.align-r{-webkit-box-align:end;align-items:flex-end}.align-t,.col.align-l{-webkit-box-align:start;align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{-webkit-box-pack:justify;justify-content:space-between}.align-st{-webkit-box-align:stretch;align-items:stretch}.align-cm{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.item-g-0{-webkit-box-flex:0;flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{-webkit-box-flex:1;flex-grow:1;flex-shrink:1}.item-g-1{-webkit-box-flex:1;flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{-webkit-box-flex:2;flex-grow:2;flex-shrink:2}.item-g-2{-webkit-box-flex:2;flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{-webkit-box-flex:3;flex-grow:3;flex-shrink:3}.item-g-3{-webkit-box-flex:3;flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{-webkit-box-flex:4;flex-grow:4;flex-shrink:4}.item-g-4{-webkit-box-flex:4;flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{-webkit-box-flex:5;flex-grow:5;flex-shrink:5}.item-g-5{-webkit-box-flex:5;flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{-webkit-box-flex:6;flex-grow:6;flex-shrink:6}.item-g-6{-webkit-box-flex:6;flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{-webkit-box-flex:7;flex-grow:7;flex-shrink:7}.item-g-7{-webkit-box-flex:7;flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{-webkit-box-flex:8;flex-grow:8;flex-shrink:8}.item-g-8{-webkit-box-flex:8;flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{-webkit-box-flex:9;flex-grow:9;flex-shrink:9}.item-g-9{-webkit-box-flex:9;flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{-webkit-box-flex:10;flex-grow:10;flex-shrink:10}.item-g-10{-webkit-box-flex:10;flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{-webkit-box-flex:11;flex-grow:11;flex-shrink:11}.item-g-11{-webkit-box-flex:11;flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{-webkit-box-flex:12;flex-grow:12;flex-shrink:12}.item-g-12{-webkit-box-flex:12;flex-grow:12}.item-s-12{flex-shrink:12}[class*=flex-g]{flex-basis:auto}.item-order-1{-webkit-box-ordinal-group:2;order:1}.item-order-2{-webkit-box-ordinal-group:3;order:2}.item-order-3{-webkit-box-ordinal-group:4;order:3}.item-order-4{-webkit-box-ordinal-group:5;order:4}.item-order-5{-webkit-box-ordinal-group:6;order:5}.item-order-6{-webkit-box-ordinal-group:7;order:6}.item-order-7{-webkit-box-ordinal-group:8;order:7}.item-order-8{-webkit-box-ordinal-group:9;order:8}.item-order-9{-webkit-box-ordinal-group:10;order:9}.item-order-10{-webkit-box-ordinal-group:11;order:10}.item-order-11{-webkit-box-ordinal-group:12;order:11}.item-order-12{-webkit-box-ordinal-group:13;order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:46rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}:disabled,[disabled]{background-color:#efefef;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}'
							],
							encapsulation: 2
						})),
						t
					);
				})(),
				Nd = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[]]
						})),
						t
					);
				})(),
				Ud = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [gd, bd, yd, wd, _d, Cd, kd, Sd, Pd, Ed, Od, Td, Md, Ad, jd, Rd]
						})),
						t
					);
				})(),
				Ld = new I(function(t) {
					return t.complete();
				});
			function Hd(t) {
				return t
					? (function(t) {
							return new I(function(e) {
								return t.schedule(function() {
									return e.complete();
								});
							});
					  })(t)
					: Ld;
			}
			function zd(t) {
				var e = new I(function(e) {
					e.next(t), e.complete();
				});
				return (e._isScalar = !0), (e.value = t), e;
			}
			function Vd() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				var n = t[t.length - 1];
				switch ((U(n) ? t.pop() : (n = void 0), t.length)) {
					case 0:
						return Hd(n);
					case 1:
						return n ? $(t, n) : zd(t[0]);
					default:
						return $(t, n);
				}
			}
			var Fd = (function(t) {
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
			function Bd() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			Bd.prototype = Object.create(Error.prototype);
			var qd = Bd,
				Gd = {},
				Zd = (function() {
					function t(t) {
						this.resultSelector = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Wd(t, this.resultSelector));
						}),
						t
					);
				})(),
				Wd = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return (r.resultSelector = n), (r.active = 0), (r.values = []), (r.observables = []), r;
					}
					return (
						o(e, t),
						(e.prototype._next = function(t) {
							this.values.push(Gd), this.observables.push(t);
						}),
						(e.prototype._complete = function() {
							var t = this.observables,
								e = t.length;
							if (0 === e) this.destination.complete();
							else {
								(this.active = e), (this.toRespond = e);
								for (var n = 0; n < e; n++) {
									var r = t[n];
									this.add(Q(this, r, r, n));
								}
							}
						}),
						(e.prototype.notifyComplete = function(t) {
							0 == (this.active -= 1) && this.destination.complete();
						}),
						(e.prototype.notifyNext = function(t, e, n, r, o) {
							var i = this.values,
								a = this.toRespond ? (i[n] === Gd ? --this.toRespond : this.toRespond) : 0;
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
				})(Y);
			function Qd(t) {
				return new I(function(e) {
					var n;
					try {
						n = t();
					} catch (r) {
						return void e.error(r);
					}
					return (n ? tt(n) : Hd()).subscribe(e);
				});
			}
			function Yd() {
				return it(1);
			}
			function Jd(t, e) {
				return function(n) {
					return n.lift(new Kd(t, e));
				};
			}
			var Kd = (function() {
					function t(t, e) {
						(this.predicate = t), (this.thisArg = e);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Xd(t, this.predicate, this.thisArg));
						}),
						t
					);
				})(),
				Xd = (function(t) {
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
			function $d() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			$d.prototype = Object.create(Error.prototype);
			var th = $d;
			function eh(t) {
				return function(e) {
					return 0 === t ? Hd() : e.lift(new nh(t));
				};
			}
			var nh = (function() {
					function t(t) {
						if (((this.total = t), this.total < 0)) throw new th();
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new rh(t, this.total));
						}),
						t
					);
				})(),
				rh = (function(t) {
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
			function oh(t, e, n) {
				return function(r) {
					return r.lift(new ih(t, e, n));
				};
			}
			var ih = (function() {
					function t(t, e, n) {
						(this.nextOrObserver = t), (this.error = e), (this.complete = n);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new ah(t, this.nextOrObserver, this.error, this.complete));
						}),
						t
					);
				})(),
				ah = (function(t) {
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
				sh = function(t) {
					return (
						void 0 === t && (t = lh),
						oh({
							hasValue: !1,
							next: function() {
								this.hasValue = !0;
							},
							complete: function() {
								if (!this.hasValue) throw t();
							}
						})
					);
				};
			function lh() {
				return new qd();
			}
			function uh(t) {
				return (
					void 0 === t && (t = null),
					function(e) {
						return e.lift(new ch(t));
					}
				);
			}
			var ch = (function() {
					function t(t) {
						this.defaultValue = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new ph(t, this.defaultValue));
						}),
						t
					);
				})(),
				ph = (function(t) {
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
			function fh(t, e) {
				var n = arguments.length >= 2;
				return function(r) {
					return r.pipe(
						t
							? Jd(function(e, n) {
									return t(e, n, r);
							  })
							: ot,
						eh(1),
						n
							? uh(e)
							: sh(function() {
									return new qd();
							  })
					);
				};
			}
			function dh(t) {
				return function(e) {
					var n = new hh(t),
						r = e.lift(n);
					return (n.caught = r);
				};
			}
			var hh = (function() {
					function t(t) {
						this.selector = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new gh(t, this.selector, this.caught));
						}),
						t
					);
				})(),
				gh = (function(t) {
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
								this.add(r), Q(this, n, void 0, void 0, r);
							}
						}),
						e
					);
				})(Y);
			function mh(t) {
				return function(e) {
					return 0 === t ? Hd() : e.lift(new bh(t));
				};
			}
			var bh = (function() {
					function t(t) {
						if (((this.total = t), this.total < 0)) throw new th();
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new vh(t, this.total));
						}),
						t
					);
				})(),
				vh = (function(t) {
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
			function yh(t, e) {
				var n = arguments.length >= 2;
				return function(r) {
					return r.pipe(
						t
							? Jd(function(e, n) {
									return t(e, n, r);
							  })
							: ot,
						mh(1),
						n
							? uh(e)
							: sh(function() {
									return new qd();
							  })
					);
				};
			}
			var wh = (function() {
					function t(t, e, n) {
						(this.predicate = t), (this.thisArg = e), (this.source = n);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new _h(t, this.predicate, this.thisArg, this.source));
						}),
						t
					);
				})(),
				_h = (function(t) {
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
			function xh(t, e) {
				return 'function' == typeof e
					? function(n) {
							return n.pipe(
								xh(function(n, r) {
									return tt(t(n, r)).pipe(
										J(function(t, o) {
											return e(n, t, r, o);
										})
									);
								})
							);
					  }
					: function(e) {
							return e.lift(new Ch(t));
					  };
			}
			var Ch = (function() {
					function t(t) {
						this.project = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new kh(t, this.project));
						}),
						t
					);
				})(),
				kh = (function(t) {
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
							this.destination.add(o), (this.innerSubscription = Q(this, t, e, n, o));
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
				})(Y);
			function Sh() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				return Yd()(Vd.apply(void 0, t));
			}
			function Ph(t, e) {
				var n = !1;
				return (
					arguments.length >= 2 && (n = !0),
					function(r) {
						return r.lift(new Eh(t, e, n));
					}
				);
			}
			var Eh = (function() {
					function t(t, e, n) {
						void 0 === n && (n = !1), (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Oh(t, this.accumulator, this.seed, this.hasSeed));
						}),
						t
					);
				})(),
				Oh = (function(t) {
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
			function Ih(t, e) {
				return et(t, e, 1);
			}
			var Th = (function() {
					function t(t) {
						this.callback = t;
					}
					return (
						(t.prototype.call = function(t, e) {
							return e.subscribe(new Mh(t, this.callback));
						}),
						t
					);
				})(),
				Mh = (function(t) {
					function e(e, n) {
						var r = t.call(this, e) || this;
						return r.add(new m(n)), r;
					}
					return o(e, t), e;
				})(C),
				Ah = (function() {
					return function(t, e) {
						(this.id = t), (this.url = e);
					};
				})(),
				jh = (function(t) {
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
				})(Ah),
				Rh = (function(t) {
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
				})(Ah),
				Dh = (function(t) {
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
				})(Ah),
				Nh = (function(t) {
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
				})(Ah),
				Uh = (function(t) {
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
				})(Ah),
				Lh = (function(t) {
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
				})(Ah),
				Hh = (function(t) {
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
				})(Ah),
				zh = (function(t) {
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
				})(Ah),
				Vh = (function(t) {
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
				})(Ah),
				Fh = (function() {
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
				Bh = (function() {
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
				qh = (function() {
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
				Gh = (function() {
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
				Zh = (function() {
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
				Wh = (function() {
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
				Qh = (function() {
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
				Yh = (function() {
					function t() {}
					return (
						(t.ngComponentDef = De({
							type: t,
							selectors: [['ng-component']],
							factory: function(e) {
								return new (e || t)();
							},
							consts: 1,
							vars: 0,
							template: function(t, e) {
								1 & t && xl(0, 'router-outlet');
							},
							directives: function() {
								return [$m];
							},
							encapsulation: 2
						})),
						t
					);
				})(),
				Jh = 'primary',
				Kh = (function() {
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
			function Xh(t) {
				return new Kh(t);
			}
			var $h = 'ngNavigationCancelingError';
			function tg(t) {
				var e = Error('NavigationCancelingError: ' + t);
				return (e[$h] = !0), e;
			}
			function eg(t, e, n) {
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
			var ng = (function() {
				return function(t, e) {
					(this.routes = t), (this.module = e);
				};
			})();
			function rg(t, e) {
				void 0 === e && (e = '');
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					og(r, ig(e, r));
				}
			}
			function og(t, e) {
				if (!t)
					throw new Error(
						"\n      Invalid configuration of route '" +
							e +
							"': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
					);
				if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
				if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== Jh)
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
				t.children && rg(t.children, e);
			}
			function ig(t, e) {
				return e ? (t || e.path ? (t && !e.path ? t + '/' : !t && e.path ? e.path : t + '/' + e.path) : '') : t;
			}
			function ag(t) {
				var e = t.children && t.children.map(ag),
					n = e ? i({}, t, { children: e }) : i({}, t);
				return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== Jh && (n.component = Yh), n;
			}
			function sg(t, e) {
				var n,
					r = Object.keys(t),
					o = Object.keys(e);
				if (!r || !o || r.length != o.length) return !1;
				for (var i = 0; i < r.length; i++) if (t[(n = r[i])] !== e[n]) return !1;
				return !0;
			}
			function lg(t) {
				return Array.prototype.concat.apply([], t);
			}
			function ug(t) {
				return t.length > 0 ? t[t.length - 1] : null;
			}
			function cg(t, e) {
				for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
			}
			function pg(t) {
				return (e = t) && 'function' == typeof e.subscribe ? t : Cl(t) ? tt(Promise.resolve(t)) : Vd(t);
				var e;
			}
			function fg(t, e, n) {
				return n
					? (function(t, e) {
							return sg(t, e);
					  })(t.queryParams, e.queryParams) &&
							(function t(e, n) {
								if (!mg(e.segments, n.segments)) return !1;
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
									if (n.segments.length > o.length) return !!mg((a = n.segments.slice(0, o.length)), o) && !r.hasChildren();
									if (n.segments.length === o.length) {
										if (!mg(n.segments, o)) return !1;
										for (var i in r.children) {
											if (!n.children[i]) return !1;
											if (!t(n.children[i], r.children[i])) return !1;
										}
										return !0;
									}
									var a = o.slice(0, n.segments.length),
										s = o.slice(n.segments.length);
									return !!mg(n.segments, a) && !!n.children[Jh] && e(n.children[Jh], r, s);
								})(e, n, n.segments);
							})(t.root, e.root);
			}
			var dg = (function() {
					function t(t, e, n) {
						(this.root = t), (this.queryParams = e), (this.fragment = n);
					}
					return (
						Object.defineProperty(t.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Xh(this.queryParams)), this._queryParamMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.toString = function() {
							return wg.serialize(this);
						}),
						t
					);
				})(),
				hg = (function() {
					function t(t, e) {
						var n = this;
						(this.segments = t),
							(this.children = e),
							(this.parent = null),
							cg(e, function(t, e) {
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
							return _g(this);
						}),
						t
					);
				})(),
				gg = (function() {
					function t(t, e) {
						(this.path = t), (this.parameters = e);
					}
					return (
						Object.defineProperty(t.prototype, 'parameterMap', {
							get: function() {
								return this._parameterMap || (this._parameterMap = Xh(this.parameters)), this._parameterMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(t.prototype.toString = function() {
							return Eg(this);
						}),
						t
					);
				})();
			function mg(t, e) {
				return (
					t.length === e.length &&
					t.every(function(t, n) {
						return t.path === e[n].path;
					})
				);
			}
			function bg(t, e) {
				var n = [];
				return (
					cg(t.children, function(t, r) {
						r === Jh && (n = n.concat(e(t, r)));
					}),
					cg(t.children, function(t, r) {
						r !== Jh && (n = n.concat(e(t, r)));
					}),
					n
				);
			}
			var vg = (function() {
					return function() {};
				})(),
				yg = (function() {
					function t() {}
					return (
						(t.prototype.parse = function(t) {
							var e = new Ag(t);
							return new dg(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
						}),
						(t.prototype.serialize = function(t) {
							var e, n;
							return (
								'/' +
								(function t(e, n) {
									if (!e.hasChildren()) return _g(e);
									if (n) {
										var r = e.children[Jh] ? t(e.children[Jh], !1) : '',
											o = [];
										return (
											cg(e.children, function(e, n) {
												n !== Jh && o.push(n + ':' + t(e, !1));
											}),
											o.length > 0 ? r + '(' + o.join('//') + ')' : r
										);
									}
									var i = bg(e, function(n, r) {
										return r === Jh ? [t(e.children[Jh], !1)] : [r + ':' + t(n, !1)];
									});
									return _g(e) + '/(' + i.join('//') + ')';
								})(t.root, !0) +
								((e = t.queryParams),
								(n = Object.keys(e).map(function(t) {
									var n = e[t];
									return Array.isArray(n)
										? n
												.map(function(e) {
													return Cg(t) + '=' + Cg(e);
												})
												.join('&')
										: Cg(t) + '=' + Cg(n);
								})).length
									? '?' + n.join('&')
									: '') +
								('string' == typeof t.fragment ? '#' + encodeURI(t.fragment) : '')
							);
						}),
						t
					);
				})(),
				wg = new yg();
			function _g(t) {
				return t.segments
					.map(function(t) {
						return Eg(t);
					})
					.join('/');
			}
			function xg(t) {
				return encodeURIComponent(t)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function Cg(t) {
				return xg(t).replace(/%3B/gi, ';');
			}
			function kg(t) {
				return xg(t)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function Sg(t) {
				return decodeURIComponent(t);
			}
			function Pg(t) {
				return Sg(t.replace(/\+/g, '%20'));
			}
			function Eg(t) {
				return (
					'' +
					kg(t.path) +
					((e = t.parameters),
					Object.keys(e)
						.map(function(t) {
							return ';' + kg(t) + '=' + kg(e[t]);
						})
						.join(''))
				);
				var e;
			}
			var Og = /^[^\/()?;=#]+/;
			function Ig(t) {
				var e = t.match(Og);
				return e ? e[0] : '';
			}
			var Tg = /^[^=?&#]+/,
				Mg = /^[^?&#]+/,
				Ag = (function() {
					function t(t) {
						(this.url = t), (this.remaining = t);
					}
					return (
						(t.prototype.parseRootSegment = function() {
							return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new hg([], {}) : new hg([], this.parseChildren());
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
							return this.peekStartsWith('(') && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[Jh] = new hg(t, e)), n;
						}),
						(t.prototype.parseSegment = function() {
							var t = Ig(this.remaining);
							if ('' === t && this.peekStartsWith(';')) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
							return this.capture(t), new gg(Sg(t), this.parseMatrixParams());
						}),
						(t.prototype.parseMatrixParams = function() {
							for (var t = {}; this.consumeOptional(';'); ) this.parseParam(t);
							return t;
						}),
						(t.prototype.parseParam = function(t) {
							var e = Ig(this.remaining);
							if (e) {
								this.capture(e);
								var n = '';
								if (this.consumeOptional('=')) {
									var r = Ig(this.remaining);
									r && this.capture((n = r));
								}
								t[Sg(e)] = Sg(n);
							}
						}),
						(t.prototype.parseQueryParam = function(t) {
							var e,
								n = (e = this.remaining.match(Tg)) ? e[0] : '';
							if (n) {
								this.capture(n);
								var r = '';
								if (this.consumeOptional('=')) {
									var o = (function(t) {
										var e = t.match(Mg);
										return e ? e[0] : '';
									})(this.remaining);
									o && this.capture((r = o));
								}
								var i = Pg(n),
									a = Pg(r);
								if (t.hasOwnProperty(i)) {
									var s = t[i];
									Array.isArray(s) || (t[i] = s = [s]), s.push(a);
								} else t[i] = a;
							}
						}),
						(t.prototype.parseParens = function(t) {
							var e = {};
							for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
								var n = Ig(this.remaining),
									r = this.remaining[n.length];
								if ('/' !== r && ')' !== r && ';' !== r) throw new Error("Cannot parse url '" + this.url + "'");
								var o = void 0;
								n.indexOf(':') > -1 ? ((o = n.substr(0, n.indexOf(':'))), this.capture(o), this.capture(':')) : t && (o = Jh);
								var i = this.parseChildren();
								(e[o] = 1 === Object.keys(i).length ? i[Jh] : new hg([], i)), this.consumeOptional('//');
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
				jg = (function() {
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
							var e = Rg(t, this._root);
							return e
								? e.children.map(function(t) {
										return t.value;
								  })
								: [];
						}),
						(t.prototype.firstChild = function(t) {
							var e = Rg(t, this._root);
							return e && e.children.length > 0 ? e.children[0].value : null;
						}),
						(t.prototype.siblings = function(t) {
							var e = Dg(t, this._root);
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
							return Dg(t, this._root).map(function(t) {
								return t.value;
							});
						}),
						t
					);
				})();
			function Rg(t, e) {
				var n, r;
				if (t === e.value) return e;
				try {
					for (var o = l(e.children), i = o.next(); !i.done; i = o.next()) {
						var a = Rg(t, i.value);
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
			function Dg(t, e) {
				var n, r;
				if (t === e.value) return [e];
				try {
					for (var o = l(e.children), i = o.next(); !i.done; i = o.next()) {
						var a = Dg(t, i.value);
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
			var Ng = (function() {
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
			function Ug(t) {
				var e = {};
				return (
					t &&
						t.children.forEach(function(t) {
							return (e[t.value.outlet] = t);
						}),
					e
				);
			}
			var Lg = (function(t) {
				function e(e, n) {
					var r = t.call(this, e) || this;
					return (r.snapshot = n), qg(r, e), r;
				}
				return (
					o(e, t),
					(e.prototype.toString = function() {
						return this.snapshot.toString();
					}),
					e
				);
			})(jg);
			function Hg(t, e) {
				var n = (function(t, e) {
						var n = new Fg([], {}, {}, '', {}, Jh, e, null, t.root, -1, {});
						return new Bg('', new Ng(n, []));
					})(t, e),
					r = new Fd([new gg('', {})]),
					o = new Fd({}),
					i = new Fd({}),
					a = new Fd({}),
					s = new Fd(''),
					l = new zg(r, o, a, s, i, Jh, e, n.root);
				return (l.snapshot = n.root), new Lg(new Ng(l, []), n);
			}
			var zg = (function() {
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
										J(function(t) {
											return Xh(t);
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
										J(function(t) {
											return Xh(t);
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
			function Vg(t, e) {
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
			var Fg = (function() {
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
								return this._paramMap || (this._paramMap = Xh(this.params)), this._paramMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(t.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Xh(this.queryParams)), this._queryParamMap;
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
				Bg = (function(t) {
					function e(e, n) {
						var r = t.call(this, n) || this;
						return (r.url = e), qg(r, n), r;
					}
					return (
						o(e, t),
						(e.prototype.toString = function() {
							return Gg(this._root);
						}),
						e
					);
				})(jg);
			function qg(t, e) {
				(e.value._routerState = t),
					e.children.forEach(function(e) {
						return qg(t, e);
					});
			}
			function Gg(t) {
				var e = t.children.length > 0 ? ' { ' + t.children.map(Gg).join(', ') + ' } ' : '';
				return '' + t.value + e;
			}
			function Zg(t) {
				if (t.snapshot) {
					var e = t.snapshot,
						n = t._futureSnapshot;
					(t.snapshot = n),
						sg(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
						e.fragment !== n.fragment && t.fragment.next(n.fragment),
						sg(e.params, n.params) || t.params.next(n.params),
						(function(t, e) {
							if (t.length !== e.length) return !1;
							for (var n = 0; n < t.length; ++n) if (!sg(t[n], e[n])) return !1;
							return !0;
						})(e.url, n.url) || t.url.next(n.url),
						sg(e.data, n.data) || t.data.next(n.data);
				} else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
			}
			function Wg(t, e) {
				var n, r;
				return (
					sg(t.params, e.params) &&
					mg((n = t.url), (r = e.url)) &&
					n.every(function(t, e) {
						return sg(t.parameters, r[e].parameters);
					}) &&
					!(!t.parent != !e.parent) &&
					(!t.parent || Wg(t.parent, e.parent))
				);
			}
			function Qg(t) {
				return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath;
			}
			function Yg(t, e, n, r, o) {
				var i = {};
				return (
					r &&
						cg(r, function(t, e) {
							i[e] = Array.isArray(t)
								? t.map(function(t) {
										return '' + t;
								  })
								: '' + t;
						}),
					new dg(
						n.root === t
							? e
							: (function t(e, n, r) {
									var o = {};
									return (
										cg(e.children, function(e, i) {
											o[i] = e === n ? r : t(e, n, r);
										}),
										new hg(e.segments, o)
									);
							  })(n.root, t, e),
						i,
						o
					)
				);
			}
			var Jg = (function() {
					function t(t, e, n) {
						if (((this.isAbsolute = t), (this.numberOfDoubleDots = e), (this.commands = n), t && n.length > 0 && Qg(n[0]))) throw new Error('Root segment cannot have matrix parameters');
						var r = n.find(function(t) {
							return 'object' == typeof t && null != t && t.outlets;
						});
						if (r && r !== ug(n)) throw new Error('{outlets:{}} has to be the last command');
					}
					return (
						(t.prototype.toRoot = function() {
							return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
						}),
						t
					);
				})(),
				Kg = (function() {
					return function(t, e, n) {
						(this.segmentGroup = t), (this.processChildren = e), (this.index = n);
					};
				})();
			function Xg(t) {
				return 'object' == typeof t && null != t && t.outlets ? t.outlets[Jh] : '' + t;
			}
			function $g(t, e, n) {
				if ((t || (t = new hg([], {})), 0 === t.segments.length && t.hasChildren())) return tm(t, e, n);
				var r = (function(t, e, n) {
						for (var r = 0, o = e, i = { match: !1, pathIndex: 0, commandIndex: 0 }; o < t.segments.length; ) {
							if (r >= n.length) return i;
							var a = t.segments[o],
								s = Xg(n[r]),
								l = r < n.length - 1 ? n[r + 1] : null;
							if (o > 0 && void 0 === s) break;
							if (s && l && 'object' == typeof l && void 0 === l.outlets) {
								if (!om(s, l, a)) return i;
								r += 2;
							} else {
								if (!om(s, {}, a)) return i;
								r++;
							}
							o++;
						}
						return { match: !0, pathIndex: o, commandIndex: r };
					})(t, e, n),
					o = n.slice(r.commandIndex);
				if (r.match && r.pathIndex < t.segments.length) {
					var i = new hg(t.segments.slice(0, r.pathIndex), {});
					return (i.children[Jh] = new hg(t.segments.slice(r.pathIndex), t.children)), tm(i, 0, o);
				}
				return r.match && 0 === o.length ? new hg(t.segments, {}) : r.match && !t.hasChildren() ? em(t, e, n) : r.match ? tm(t, 0, o) : em(t, e, n);
			}
			function tm(t, e, n) {
				if (0 === n.length) return new hg(t.segments, {});
				var r = (function(t) {
						var e, n;
						return 'object' != typeof t[0] ? (((e = {})[Jh] = t), e) : void 0 === t[0].outlets ? (((n = {})[Jh] = t), n) : t[0].outlets;
					})(n),
					o = {};
				return (
					cg(r, function(n, r) {
						null !== n && (o[r] = $g(t.children[r], e, n));
					}),
					cg(t.children, function(t, e) {
						void 0 === r[e] && (o[e] = t);
					}),
					new hg(t.segments, o)
				);
			}
			function em(t, e, n) {
				for (var r = t.segments.slice(0, e), o = 0; o < n.length; ) {
					if ('object' == typeof n[o] && void 0 !== n[o].outlets) {
						var i = nm(n[o].outlets);
						return new hg(r, i);
					}
					if (0 === o && Qg(n[0])) r.push(new gg(t.segments[e].path, n[0])), o++;
					else {
						var a = Xg(n[o]),
							s = o < n.length - 1 ? n[o + 1] : null;
						a && s && Qg(s) ? (r.push(new gg(a, rm(s))), (o += 2)) : (r.push(new gg(a, {})), o++);
					}
				}
				return new hg(r, {});
			}
			function nm(t) {
				var e = {};
				return (
					cg(t, function(t, n) {
						null !== t && (e[n] = em(new hg([], {}), 0, t));
					}),
					e
				);
			}
			function rm(t) {
				var e = {};
				return (
					cg(t, function(t, n) {
						return (e[n] = '' + t);
					}),
					e
				);
			}
			function om(t, e, n) {
				return t == n.path && sg(e, n.parameters);
			}
			var im = (function() {
				function t(t, e, n, r) {
					(this.routeReuseStrategy = t), (this.futureState = e), (this.currState = n), (this.forwardEvent = r);
				}
				return (
					(t.prototype.activate = function(t) {
						var e = this.futureState._root,
							n = this.currState ? this.currState._root : null;
						this.deactivateChildRoutes(e, n, t), Zg(this.futureState.root), this.activateChildRoutes(e, n, t);
					}),
					(t.prototype.deactivateChildRoutes = function(t, e, n) {
						var r = this,
							o = Ug(e);
						t.children.forEach(function(t) {
							var e = t.value.outlet;
							r.deactivateRoutes(t, o[e], n), delete o[e];
						}),
							cg(o, function(t, e) {
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
							var o = Ug(t),
								i = t.value.component ? r.children : e;
							cg(o, function(t, e) {
								return n.deactivateRouteAndItsChildren(t, i);
							}),
								r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated());
						}
					}),
					(t.prototype.activateChildRoutes = function(t, e, n) {
						var r = this,
							o = Ug(e);
						t.children.forEach(function(t) {
							r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new Wh(t.value.snapshot));
						}),
							t.children.length && this.forwardEvent(new Gh(t.value.snapshot));
					}),
					(t.prototype.activateRoutes = function(t, e, n) {
						var r = t.value,
							o = e ? e.value : null;
						if ((Zg(r), r === o))
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
									am(a.route);
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
			function am(t) {
				Zg(t.value), t.children.forEach(am);
			}
			function sm(t) {
				return 'function' == typeof t;
			}
			function lm(t) {
				return t instanceof dg;
			}
			var um = (function() {
					return function(t) {
						this.segmentGroup = t || null;
					};
				})(),
				cm = (function() {
					return function(t) {
						this.urlTree = t;
					};
				})();
			function pm(t) {
				return new I(function(e) {
					return e.error(new um(t));
				});
			}
			function fm(t) {
				return new I(function(e) {
					return e.error(new cm(t));
				});
			}
			function dm(t) {
				return new I(function(e) {
					return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"));
				});
			}
			var hm = (function() {
				function t(t, e, n, r, o) {
					(this.configLoader = e), (this.urlSerializer = n), (this.urlTree = r), (this.config = o), (this.allowRedirects = !0), (this.ngModule = t.get(ou));
				}
				return (
					(t.prototype.apply = function() {
						var t = this;
						return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Jh)
							.pipe(
								J(function(e) {
									return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment);
								})
							)
							.pipe(
								dh(function(e) {
									if (e instanceof cm) return (t.allowRedirects = !1), t.match(e.urlTree);
									if (e instanceof um) throw t.noMatchError(e);
									throw e;
								})
							);
					}),
					(t.prototype.match = function(t) {
						var e = this;
						return this.expandSegmentGroup(this.ngModule, this.config, t.root, Jh)
							.pipe(
								J(function(n) {
									return e.createUrlTree(n, t.queryParams, t.fragment);
								})
							)
							.pipe(
								dh(function(t) {
									if (t instanceof um) throw e.noMatchError(t);
									throw t;
								})
							);
					}),
					(t.prototype.noMatchError = function(t) {
						return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'");
					}),
					(t.prototype.createUrlTree = function(t, e, n) {
						var r,
							o = t.segments.length > 0 ? new hg([], (((r = {})[Jh] = t), r)) : t;
						return new dg(o, e, n);
					}),
					(t.prototype.expandSegmentGroup = function(t, e, n, r) {
						return 0 === n.segments.length && n.hasChildren()
							? this.expandChildren(t, e, n).pipe(
									J(function(t) {
										return new hg([], t);
									})
							  )
							: this.expandSegment(t, n, e, n.segments, r, !0);
					}),
					(t.prototype.expandChildren = function(t, e, n) {
						var r = this;
						return (function(n, o) {
							if (0 === Object.keys(n).length) return Vd({});
							var i = [],
								a = [],
								s = {};
							return (
								cg(n, function(n, o) {
									var l,
										u,
										c = ((l = o), (u = n), r.expandSegmentGroup(t, e, u, l)).pipe(
											J(function(t) {
												return (s[o] = t);
											})
										);
									o === Jh ? i.push(c) : a.push(c);
								}),
								Vd.apply(null, i.concat(a)).pipe(
									Yd(),
									fh(),
									J(function() {
										return s;
									})
								)
							);
						})(n.children);
					}),
					(t.prototype.expandSegment = function(t, e, n, r, o, i) {
						var a = this;
						return Vd.apply(void 0, c(n)).pipe(
							J(function(s) {
								return a.expandSegmentAgainstRoute(t, e, n, s, r, o, i).pipe(
									dh(function(t) {
										if (t instanceof um) return Vd(null);
										throw t;
									})
								);
							}),
							Yd(),
							yh(function(t) {
								return !!t;
							}),
							dh(function(t, n) {
								if (t instanceof qd || 'EmptyError' === t.name) {
									if (a.noLeftoversInUrl(e, r, o)) return Vd(new hg([], {}));
									throw new um(e);
								}
								throw t;
							})
						);
					}),
					(t.prototype.noLeftoversInUrl = function(t, e, n) {
						return 0 === e.length && !t.children[n];
					}),
					(t.prototype.expandSegmentAgainstRoute = function(t, e, n, r, o, i, a) {
						return vm(r) !== i
							? pm(e)
							: void 0 === r.redirectTo
							? this.matchSegmentAgainstRoute(t, e, r, o)
							: a && this.allowRedirects
							? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
							: pm(e);
					}),
					(t.prototype.expandSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
						return '**' === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i);
					}),
					(t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(t, e, n, r) {
						var o = this,
							i = this.applyRedirectCommands([], n.redirectTo, {});
						return n.redirectTo.startsWith('/')
							? fm(i)
							: this.lineralizeSegments(n, i).pipe(
									et(function(n) {
										var i = new hg(n, {});
										return o.expandSegment(t, i, e, n, r, !1);
									})
							  );
					}),
					(t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
						var a = this,
							s = gm(e, r, o),
							l = s.consumedSegments,
							u = s.lastChild,
							c = s.positionalParamSegments;
						if (!s.matched) return pm(e);
						var p = this.applyRedirectCommands(l, r.redirectTo, c);
						return r.redirectTo.startsWith('/')
							? fm(p)
							: this.lineralizeSegments(r, p).pipe(
									et(function(r) {
										return a.expandSegment(t, e, n, r.concat(o.slice(u)), i, !1);
									})
							  );
					}),
					(t.prototype.matchSegmentAgainstRoute = function(t, e, n, r) {
						var o = this;
						if ('**' === n.path)
							return n.loadChildren
								? this.configLoader.load(t.injector, n).pipe(
										J(function(t) {
											return (n._loadedConfig = t), new hg(r, {});
										})
								  )
								: Vd(new hg(r, {}));
						var a = gm(e, n, r),
							s = a.consumedSegments,
							u = a.lastChild;
						if (!a.matched) return pm(e);
						var c = r.slice(u);
						return this.getChildConfig(t, n, r).pipe(
							et(function(t) {
								var n = t.module,
									r = t.routes,
									a = (function(t, e, n, r) {
										return n.length > 0 &&
											(function(t, e, n) {
												return r.some(function(n) {
													return bm(t, e, n) && vm(n) !== Jh;
												});
											})(t, n)
											? {
													segmentGroup: mm(
														new hg(
															e,
															(function(t, e) {
																var n,
																	r,
																	o = {};
																o[Jh] = e;
																try {
																	for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
																		var s = a.value;
																		'' === s.path && vm(s) !== Jh && (o[vm(s)] = new hg([], {}));
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
															})(r, new hg(n, t.children))
														)
													),
													slicedSegments: []
											  }
											: 0 === n.length &&
											  (function(t, e, n) {
													return r.some(function(n) {
														return bm(t, e, n);
													});
											  })(t, n)
											? {
													segmentGroup: mm(
														new hg(
															t.segments,
															(function(t, e, n, r) {
																var o,
																	a,
																	s = {};
																try {
																	for (var u = l(n), c = u.next(); !c.done; c = u.next()) {
																		var p = c.value;
																		bm(t, e, p) && !r[vm(p)] && (s[vm(p)] = new hg([], {}));
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
											J(function(t) {
												return new hg(s, t);
											})
									  )
									: 0 === r.length && 0 === p.length
									? Vd(new hg(s, {}))
									: o.expandSegment(n, u, r, p, Jh, !0).pipe(
											J(function(t) {
												return new hg(s.concat(t.segments), t.children);
											})
									  );
							})
						);
					}),
					(t.prototype.getChildConfig = function(t, e, n) {
						var r = this;
						return e.children
							? Vd(new ng(e.children, t))
							: e.loadChildren
							? void 0 !== e._loadedConfig
								? Vd(e._loadedConfig)
								: (function(t, e, n) {
										var r,
											o = e.canLoad;
										return o && 0 !== o.length
											? tt(o)
													.pipe(
														J(function(r) {
															var o,
																i = t.get(r);
															if (
																(function(t) {
																	return t && sm(t.canLoad);
																})(i)
															)
																o = i.canLoad(e, n);
															else {
																if (!sm(i)) throw new Error('Invalid CanLoad guard');
																o = i(e, n);
															}
															return pg(o);
														})
													)
													.pipe(
														Yd(),
														((r = function(t) {
															return !0 === t;
														}),
														function(t) {
															return t.lift(new wh(r, void 0, t));
														})
													)
											: Vd(!0);
								  })(t.injector, e, n).pipe(
										et(function(n) {
											return n
												? r.configLoader.load(t.injector, e).pipe(
														J(function(t) {
															return (e._loadedConfig = t), t;
														})
												  )
												: (function(t) {
														return new I(function(e) {
															return e.error(tg('Cannot load children because the guard of the route "path: \'' + t.path + '\'" returned false'));
														});
												  })(e);
										})
								  )
							: Vd(new ng([], t));
					}),
					(t.prototype.lineralizeSegments = function(t, e) {
						for (var n = [], r = e.root; ; ) {
							if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Vd(n);
							if (r.numberOfChildren > 1 || !r.children[Jh]) return dm(t.redirectTo);
							r = r.children[Jh];
						}
					}),
					(t.prototype.applyRedirectCommands = function(t, e, n) {
						return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n);
					}),
					(t.prototype.applyRedirectCreatreUrlTree = function(t, e, n, r) {
						var o = this.createSegmentGroup(t, e.root, n, r);
						return new dg(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
					}),
					(t.prototype.createQueryParams = function(t, e) {
						var n = {};
						return (
							cg(t, function(t, r) {
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
							cg(e.children, function(e, i) {
								a[i] = o.createSegmentGroup(t, e, n, r);
							}),
							new hg(i, a)
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
			function gm(t, e, n) {
				if ('' === e.path)
					return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				var r = (e.matcher || eg)(n, t, e);
				return r
					? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function mm(t) {
				if (1 === t.numberOfChildren && t.children[Jh]) {
					var e = t.children[Jh];
					return new hg(t.segments.concat(e.segments), e.children);
				}
				return t;
			}
			function bm(t, e, n) {
				return (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 !== n.redirectTo;
			}
			function vm(t) {
				return t.outlet || Jh;
			}
			var ym = (function() {
					return function(t) {
						(this.path = t), (this.route = this.path[this.path.length - 1]);
					};
				})(),
				wm = (function() {
					return function(t, e) {
						(this.component = t), (this.route = e);
					};
				})();
			function _m(t, e, n) {
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
			function xm(t, e, n, r, o) {
				void 0 === o && (o = { canDeactivateChecks: [], canActivateChecks: [] });
				var i = Ug(e);
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
											return !mg(t.url, e.url);
										case 'pathParamsOrQueryParamsChange':
											return !mg(t.url, e.url) || !sg(t.queryParams, e.queryParams);
										case 'always':
											return !0;
										case 'paramsOrQueryParamsChange':
											return !Wg(t, e) || !sg(t.queryParams, e.queryParams);
										case 'paramsChange':
										default:
											return !Wg(t, e);
									}
								})(a, i, i.routeConfig.runGuardsAndResolvers);
								l ? o.canActivateChecks.push(new ym(r)) : ((i.data = a.data), (i._resolvedData = a._resolvedData)),
									xm(t, e, i.component ? (s ? s.children : null) : n, r, o),
									l && o.canDeactivateChecks.push(new wm((s && s.outlet && s.outlet.component) || null, a));
							} else a && Cm(e, s, o), o.canActivateChecks.push(new ym(r)), xm(t, null, i.component ? (s ? s.children : null) : n, r, o);
						})(t, i[t.value.outlet], n, r.concat([t.value]), o),
							delete i[t.value.outlet];
					}),
					cg(i, function(t, e) {
						return Cm(t, n.getContext(e), o);
					}),
					o
				);
			}
			function Cm(t, e, n) {
				var r = Ug(t),
					o = t.value;
				cg(r, function(t, r) {
					Cm(t, o.component ? (e ? e.children.getContext(r) : null) : e, n);
				}),
					n.canDeactivateChecks.push(new wm(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o));
			}
			var km = Symbol('INITIAL_VALUE');
			function Sm() {
				return xh(function(t) {
					return function() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						var n = null,
							r = null;
						return U(t[t.length - 1]) && (r = t.pop()), 'function' == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && p(t[0]) && (t = t[0]), $(t, r).lift(new Zd(n));
					}
						.apply(
							void 0,
							c(
								t.map(function(t) {
									return t.pipe(
										mh(1),
										(function() {
											for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
											return function(e) {
												var n = t[t.length - 1];
												U(n) ? t.pop() : (n = null);
												var r = t.length;
												return Sh(1 !== r || n ? (r > 0 ? $(t, n) : Hd(n)) : zd(t[0]), e);
											};
										})(km)
									);
								})
							)
						)
						.pipe(
							Ph(function(t, e) {
								var n = !1;
								return e.reduce(function(t, r, o) {
									if (t !== km) return t;
									if ((r === km && (n = !0), !n)) {
										if (!1 === r) return r;
										if (o === e.length - 1 || lm(r)) return r;
									}
									return t;
								}, t);
							}, km),
							Jd(function(t) {
								return t !== km;
							}),
							J(function(t) {
								return lm(t) ? t : !0 === t;
							}),
							mh(1)
						);
				});
			}
			function Pm(t, e) {
				return null !== t && e && e(new Zh(t)), Vd(!0);
			}
			function Em(t, e) {
				return null !== t && e && e(new qh(t)), Vd(!0);
			}
			function Om(t, e, n) {
				var r = e.routeConfig ? e.routeConfig.canActivate : null;
				return r && 0 !== r.length
					? Vd(
							r.map(function(r) {
								return Qd(function() {
									var o,
										i = _m(r, e, n);
									if (
										(function(t) {
											return t && sm(t.canActivate);
										})(i)
									)
										o = pg(i.canActivate(e, t));
									else {
										if (!sm(i)) throw new Error('Invalid CanActivate guard');
										o = pg(i(e, t));
									}
									return o.pipe(yh());
								});
							})
					  ).pipe(Sm())
					: Vd(!0);
			}
			function Im(t, e, n) {
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
							return Qd(function() {
								return Vd(
									e.guards.map(function(o) {
										var i,
											a = _m(o, e.node, n);
										if (
											(function(t) {
												return t && sm(t.canActivateChild);
											})(a)
										)
											i = pg(a.canActivateChild(r, t));
										else {
											if (!sm(a)) throw new Error('Invalid CanActivateChild guard');
											i = pg(a(r, t));
										}
										return i.pipe(yh());
									})
								).pipe(Sm());
							});
						});
				return Vd(o).pipe(Sm());
			}
			var Tm = (function() {
					return function() {};
				})(),
				Mm = (function() {
					function t(t, e, n, r, o, i) {
						(this.rootComponentType = t), (this.config = e), (this.urlTree = n), (this.url = r), (this.paramsInheritanceStrategy = o), (this.relativeLinkResolution = i);
					}
					return (
						(t.prototype.recognize = function() {
							try {
								var t = Rm(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
									e = this.processSegmentGroup(this.config, t, Jh),
									n = new Fg(
										[],
										Object.freeze({}),
										Object.freeze(i({}, this.urlTree.queryParams)),
										this.urlTree.fragment,
										{},
										Jh,
										this.rootComponentType,
										null,
										this.urlTree.root,
										-1,
										{}
									),
									r = new Ng(n, e),
									o = new Bg(this.url, r);
								return this.inheritParamsAndData(o._root), Vd(o);
							} catch (a) {
								return new I(function(t) {
									return t.error(a);
								});
							}
						}),
						(t.prototype.inheritParamsAndData = function(t) {
							var e = this,
								n = t.value,
								r = Vg(n, this.paramsInheritanceStrategy);
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
								o = bg(e, function(e, n) {
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
									return t.value.outlet === Jh ? -1 : e.value.outlet === Jh ? 1 : t.value.outlet.localeCompare(e.value.outlet);
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
										if (!(c instanceof Tm)) throw c;
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
							throw new Tm();
						}),
						(t.prototype.noLeftoversInUrl = function(t, e, n) {
							return 0 === e.length && !t.children[n];
						}),
						(t.prototype.processSegmentAgainstRoute = function(t, e, n, r) {
							if (t.redirectTo) throw new Tm();
							if ((t.outlet || Jh) !== r) throw new Tm();
							var o,
								a = [],
								s = [];
							if ('**' === t.path) {
								var l = n.length > 0 ? ug(n).parameters : {};
								o = new Fg(n, l, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Um(t), r, t.component, t, Am(e), jm(e) + n.length, Lm(t));
							} else {
								var u = (function(t, e, n) {
									if ('' === e.path) {
										if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Tm();
										return { consumedSegments: [], lastChild: 0, parameters: {} };
									}
									var r = (e.matcher || eg)(n, t, e);
									if (!r) throw new Tm();
									var o = {};
									cg(r.posParams, function(t, e) {
										o[e] = t.path;
									});
									var a = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
									return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: a };
								})(e, t, n);
								(a = u.consumedSegments),
									(s = n.slice(u.lastChild)),
									(o = new Fg(a, u.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Um(t), r, t.component, t, Am(e), jm(e) + a.length, Lm(t)));
							}
							var c = (function(t) {
									return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
								})(t),
								p = Rm(e, a, s, c, this.relativeLinkResolution),
								f = p.segmentGroup,
								d = p.slicedSegments;
							if (0 === d.length && f.hasChildren()) {
								var h = this.processChildren(c, f);
								return [new Ng(o, h)];
							}
							if (0 === c.length && 0 === d.length) return [new Ng(o, [])];
							var g = this.processSegment(c, f, d, Jh);
							return [new Ng(o, g)];
						}),
						t
					);
				})();
			function Am(t) {
				for (var e = t; e._sourceSegment; ) e = e._sourceSegment;
				return e;
			}
			function jm(t) {
				for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment; ) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
				return n - 1;
			}
			function Rm(t, e, n, r, o) {
				if (
					n.length > 0 &&
					(function(t, e, n) {
						return r.some(function(n) {
							return Dm(t, e, n) && Nm(n) !== Jh;
						});
					})(t, n)
				) {
					var a = new hg(
						e,
						(function(t, e, n, r) {
							var o,
								i,
								a = {};
							(a[Jh] = r), (r._sourceSegment = t), (r._segmentIndexShift = e.length);
							try {
								for (var s = l(n), u = s.next(); !u.done; u = s.next()) {
									var c = u.value;
									if ('' === c.path && Nm(c) !== Jh) {
										var p = new hg([], {});
										(p._sourceSegment = t), (p._segmentIndexShift = e.length), (a[Nm(c)] = p);
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
						})(t, e, r, new hg(n, t.children))
					);
					return (a._sourceSegment = t), (a._segmentIndexShift = e.length), { segmentGroup: a, slicedSegments: [] };
				}
				if (
					0 === n.length &&
					(function(t, e, n) {
						return r.some(function(n) {
							return Dm(t, e, n);
						});
					})(t, n)
				) {
					var s = new hg(
						t.segments,
						(function(t, e, n, r, o, a) {
							var s,
								u,
								c = {};
							try {
								for (var p = l(r), f = p.next(); !f.done; f = p.next()) {
									var d = f.value;
									if (Dm(t, n, d) && !o[Nm(d)]) {
										var h = new hg([], {});
										(h._sourceSegment = t), (h._segmentIndexShift = 'legacy' === a ? t.segments.length : e.length), (c[Nm(d)] = h);
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
				var u = new hg(t.segments, t.children);
				return (u._sourceSegment = t), (u._segmentIndexShift = e.length), { segmentGroup: u, slicedSegments: n };
			}
			function Dm(t, e, n) {
				return (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 === n.redirectTo;
			}
			function Nm(t) {
				return t.outlet || Jh;
			}
			function Um(t) {
				return t.data || {};
			}
			function Lm(t) {
				return t.resolve || {};
			}
			function Hm(t, e, n, r) {
				var o = _m(t, e, r);
				return pg(o.resolve ? o.resolve(e, n) : o(e, n));
			}
			function zm(t) {
				return function(e) {
					return e.pipe(
						xh(function(e) {
							var n = t(e);
							return n
								? tt(n).pipe(
										J(function() {
											return e;
										})
								  )
								: tt([e]);
						})
					);
				};
			}
			var Vm = (function() {
					return function() {};
				})(),
				Fm = (function() {
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
				Bm = new Lt('ROUTES'),
				qm = (function() {
					function t(t, e, n, r) {
						(this.loader = t), (this.compiler = e), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
					}
					return (
						(t.prototype.load = function(t, e) {
							var n = this;
							return (
								this.onLoadStartListener && this.onLoadStartListener(e),
								this.loadModuleFactory(e.loadChildren).pipe(
									J(function(r) {
										n.onLoadEndListener && n.onLoadEndListener(e);
										var o = r.create(t);
										return new ng(lg(o.injector.get(Bm)).map(ag), o);
									})
								)
							);
						}),
						(t.prototype.loadModuleFactory = function(t) {
							var e = this;
							return 'string' == typeof t
								? tt(this.loader.load(t))
								: pg(t()).pipe(
										et(function(t) {
											return t instanceof iu ? Vd(t) : tt(e.compiler.compileModuleAsync(t));
										})
								  );
						}),
						t
					);
				})(),
				Gm = (function() {
					return function() {};
				})(),
				Zm = (function() {
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
			function Wm(t) {
				throw t;
			}
			function Qm(t, e, n) {
				return e.parse('/');
			}
			function Ym(t, e) {
				return Vd(null);
			}
			var Jm = (function() {
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
							(this.errorHandler = Wm),
							(this.malformedUriErrorHandler = Qm),
							(this.navigated = !1),
							(this.lastSuccessfulId = -1),
							(this.hooks = { beforePreactivation: Ym, afterPreactivation: Ym }),
							(this.urlHandlingStrategy = new Zm()),
							(this.routeReuseStrategy = new Fm()),
							(this.onSameUrlNavigation = 'ignore'),
							(this.paramsInheritanceStrategy = 'emptyOnly'),
							(this.urlUpdateStrategy = 'deferred'),
							(this.relativeLinkResolution = 'legacy'),
							(this.ngModule = o.get(ou)),
							(this.console = o.get(Ic));
						var u = o.get(Wc);
						(this.isNgZoneEnabled = u instanceof Wc),
							this.resetConfig(s),
							(this.currentUrlTree = new dg(new hg([], {}), {}, null)),
							(this.rawUrlTree = this.currentUrlTree),
							(this.browserUrlTree = this.currentUrlTree),
							(this.configLoader = new qm(
								i,
								a,
								function(t) {
									return l.triggerEvent(new Fh(t));
								},
								function(t) {
									return l.triggerEvent(new Bh(t));
								}
							)),
							(this.routerState = Hg(this.currentUrlTree, this.rootComponentType)),
							(this.transitions = new Fd({
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
								Jd(function(t) {
									return 0 !== t.id;
								}),
								J(function(t) {
									return i({}, t, { extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl) });
								}),
								xh(function(t) {
									var r,
										o,
										a,
										s,
										u = !1,
										c = !1;
									return Vd(t).pipe(
										oh(function(t) {
											e.currentNavigation = {
												id: t.id,
												initialUrl: t.currentRawUrl,
												extractedUrl: t.extractedUrl,
												trigger: t.source,
												extras: t.extras,
												previousNavigation: e.lastSuccessfulNavigation ? i({}, e.lastSuccessfulNavigation, { previousNavigation: null }) : null
											};
										}),
										xh(function(t) {
											var r,
												o,
												a,
												s,
												l = !e.navigated || t.extractedUrl.toString() !== e.browserUrlTree.toString();
											if (('reload' === e.onSameUrlNavigation || l) && e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))
												return Vd(t).pipe(
													xh(function(t) {
														var r = e.transitions.getValue();
														return n.next(new jh(t.id, e.serializeUrl(t.extractedUrl), t.source, t.restoredState)), r !== e.transitions.getValue() ? Ld : [t];
													}),
													xh(function(t) {
														return Promise.resolve(t);
													}),
													((r = e.ngModule.injector),
													(o = e.configLoader),
													(a = e.urlSerializer),
													(s = e.config),
													function(t) {
														return t.pipe(
															xh(function(t) {
																return (function(e, n, r, o, i) {
																	return new hm(e, n, r, t.extractedUrl, i).apply();
																})(r, o, a, 0, s).pipe(
																	J(function(e) {
																		return i({}, t, { urlAfterRedirects: e });
																	})
																);
															})
														);
													}),
													oh(function(t) {
														e.currentNavigation = i({}, e.currentNavigation, { finalUrl: t.urlAfterRedirects });
													}),
													(function(t, n, r, o, a) {
														return function(r) {
															return r.pipe(
																et(function(r) {
																	return (function(t, e, n, r, o, i) {
																		return void 0 === o && (o = 'emptyOnly'), void 0 === i && (i = 'legacy'), new Mm(t, e, n, r, o, i).recognize();
																	})(t, n, r.urlAfterRedirects, ((s = r.urlAfterRedirects), e.serializeUrl(s)), o, a).pipe(
																		J(function(t) {
																			return i({}, r, { targetSnapshot: t });
																		})
																	);
																	var s;
																})
															);
														};
													})(e.rootComponentType, e.config, 0, e.paramsInheritanceStrategy, e.relativeLinkResolution),
													oh(function(t) {
														'eager' === e.urlUpdateStrategy &&
															(t.extras.skipLocationChange || e.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state),
															(e.browserUrlTree = t.urlAfterRedirects));
													}),
													oh(function(t) {
														var r = new Uh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
														n.next(r);
													})
												);
											if (l && e.rawUrlTree && e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)) {
												var u = t.extractedUrl,
													c = t.source,
													p = t.restoredState,
													f = t.extras,
													d = new jh(t.id, e.serializeUrl(u), c, p);
												n.next(d);
												var h = Hg(u, e.rootComponentType).snapshot;
												return Vd(i({}, t, { targetSnapshot: h, urlAfterRedirects: u, extras: i({}, f, { skipLocationChange: !1, replaceUrl: !1 }) }));
											}
											return (e.rawUrlTree = t.rawUrl), (e.browserUrlTree = t.urlAfterRedirects), t.resolve(null), Ld;
										}),
										zm(function(t) {
											var n = t.extras;
											return e.hooks.beforePreactivation(t.targetSnapshot, {
												navigationId: t.id,
												appliedUrlTree: t.extractedUrl,
												rawUrlTree: t.rawUrl,
												skipLocationChange: !!n.skipLocationChange,
												replaceUrl: !!n.replaceUrl
											});
										}),
										oh(function(t) {
											var n = new Lh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
											e.triggerEvent(n);
										}),
										J(function(t) {
											return i({}, t, {
												guards: ((n = t.targetSnapshot), (r = t.currentSnapshot), (o = e.rootContexts), (a = n._root), xm(a, r ? r._root : null, o, [a.value]))
											});
											var n, r, o, a;
										}),
										(function(t, e) {
											return function(n) {
												return n.pipe(
													et(function(n) {
														var r = n.targetSnapshot,
															o = n.currentSnapshot,
															a = n.guards,
															s = a.canActivateChecks,
															l = a.canDeactivateChecks;
														return 0 === l.length && 0 === s.length
															? Vd(i({}, n, { guardsResult: !0 }))
															: (function(t, e, n, r) {
																	return tt(l).pipe(
																		et(function(t) {
																			return (function(t, e, n, r, o) {
																				var i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
																				return i && 0 !== i.length
																					? Vd(
																							i.map(function(i) {
																								var a,
																									s = _m(i, e, o);
																								if (
																									(function(t) {
																										return t && sm(t.canDeactivate);
																									})(s)
																								)
																									a = pg(s.canDeactivate(t, e, n, r));
																								else {
																									if (!sm(s)) throw new Error('Invalid CanDeactivate guard');
																									a = pg(s(t, e, n, r));
																								}
																								return a.pipe(yh());
																							})
																					  ).pipe(Sm())
																					: Vd(!0);
																			})(t.component, t.route, n, e, r);
																		}),
																		yh(function(t) {
																			return !0 !== t;
																		}, !0)
																	);
															  })(0, r, o, t).pipe(
																	et(function(n) {
																		return n && 'boolean' == typeof n
																			? (function(t, e, n, r) {
																					return tt(s).pipe(
																						Ih(function(e) {
																							return tt([Em(e.route.parent, r), Pm(e.route, r), Im(t, e.path, n), Om(t, e.route, n)]).pipe(
																								Yd(),
																								yh(function(t) {
																									return !0 !== t;
																								}, !0)
																							);
																						}),
																						yh(function(t) {
																							return !0 !== t;
																						}, !0)
																					);
																			  })(r, 0, t, e)
																			: Vd(n);
																	}),
																	J(function(t) {
																		return i({}, n, { guardsResult: t });
																	})
															  );
													})
												);
											};
										})(e.ngModule.injector, function(t) {
											return e.triggerEvent(t);
										}),
										oh(function(t) {
											if (lm(t.guardsResult)) {
												var n = tg('Redirecting to "' + e.serializeUrl(t.guardsResult) + '"');
												throw ((n.url = t.guardsResult), n);
											}
										}),
										oh(function(t) {
											var n = new Hh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
											e.triggerEvent(n);
										}),
										Jd(function(t) {
											if (!t.guardsResult) {
												e.resetUrlToCurrentUrlTree();
												var r = new Dh(t.id, e.serializeUrl(t.extractedUrl), '');
												return n.next(r), t.resolve(!1), !1;
											}
											return !0;
										}),
										zm(function(t) {
											if (t.guards.canActivateChecks.length)
												return Vd(t).pipe(
													oh(function(t) {
														var n = new zh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
														e.triggerEvent(n);
													}),
													((n = e.paramsInheritanceStrategy),
													(r = e.ngModule.injector),
													function(t) {
														return t.pipe(
															et(function(t) {
																var e = t.targetSnapshot,
																	o = t.guards.canActivateChecks;
																return o.length
																	? tt(o).pipe(
																			Ih(function(t) {
																				return (function(t, n, r, o) {
																					return (function(t, e, n, r) {
																						var o = Object.keys(t);
																						if (0 === o.length) return Vd({});
																						if (1 === o.length) {
																							var i = o[0];
																							return Hm(t[i], e, n, r).pipe(
																								J(function(t) {
																									var e;
																									return ((e = {})[i] = t), e;
																								})
																							);
																						}
																						var a = {};
																						return tt(o)
																							.pipe(
																								et(function(o) {
																									return Hm(t[o], e, n, r).pipe(
																										J(function(t) {
																											return (a[o] = t), t;
																										})
																									);
																								})
																							)
																							.pipe(
																								fh(),
																								J(function() {
																									return a;
																								})
																							);
																					})(t._resolve, t, e, o).pipe(
																						J(function(e) {
																							return (t._resolvedData = e), (t.data = i({}, t.data, Vg(t, r).resolve)), null;
																						})
																					);
																				})(t.route, 0, n, r);
																			}),
																			(function(t, e) {
																				return arguments.length >= 2
																					? function(n) {
																							return E(Ph(t, e), eh(1), uh(e))(n);
																					  }
																					: function(e) {
																							return E(
																								Ph(function(e, n, r) {
																									return t(e, n, r + 1);
																								}),
																								eh(1)
																							)(e);
																					  };
																			})(function(t, e) {
																				return t;
																			}),
																			J(function(e) {
																				return t;
																			})
																	  )
																	: Vd(t);
															})
														);
													}),
													oh(function(t) {
														var n = new Vh(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
														e.triggerEvent(n);
													})
												);
											var n, r;
										}),
										zm(function(t) {
											var n = t.extras;
											return e.hooks.afterPreactivation(t.targetSnapshot, {
												navigationId: t.id,
												appliedUrlTree: t.extractedUrl,
												rawUrlTree: t.rawUrl,
												skipLocationChange: !!n.skipLocationChange,
												replaceUrl: !!n.replaceUrl
											});
										}),
										J(function(t) {
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
															return new Ng(u, o);
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
															u = new zg(
																new Fd((s = n.value).url),
																new Fd(s.params),
																new Fd(s.queryParams),
																new Fd(s.fragment),
																new Fd(s.data),
																s.outlet,
																s.component,
																s
															);
														return (
															(o = n.children.map(function(n) {
																return t(e, n);
															})),
															new Ng(u, o)
														);
													})(e.routeReuseStrategy, (n = t.targetSnapshot)._root, (r = t.currentRouterState) ? r._root : void 0)),
													new Lg(o, n));
											return i({}, t, { targetRouterState: a });
										}),
										oh(function(t) {
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
										J(function(t) {
											return new im(a, t.targetRouterState, t.currentRouterState, s).activate(o), t;
										})),
										oh({
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
												var r = new Dh(t.id, e.serializeUrl(t.extractedUrl), 'Navigation ID ' + t.id + ' is not equal to the current navigation id ' + e.navigationId);
												n.next(r), t.resolve(!1);
											}
											e.currentNavigation = null;
										}),
										function(t) {
											return t.lift(new Th(r));
										}),
										dh(function(r) {
											if (((c = !0), (s = r) && s[$h])) {
												var o = lm(r.url);
												o || ((e.navigated = !0), e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
												var i = new Dh(t.id, e.serializeUrl(t.extractedUrl), r.message);
												n.next(i), t.resolve(!1), o && e.navigateByUrl(r.url);
											} else {
												e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
												var a = new Nh(t.id, e.serializeUrl(t.extractedUrl), r);
												n.next(a);
												try {
													t.resolve(e.errorHandler(r));
												} catch (l) {
													t.reject(l);
												}
											}
											var s;
											return Ld;
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
							rg(t), (this.config = t.map(ag)), (this.navigated = !1), (this.lastSuccessfulId = -1);
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
							Tr() && a && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
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
									if (0 === n.length) return Yg(e.root, e.root, e, r, o);
									var i = (function(t) {
										if ('string' == typeof t[0] && 1 === t.length && '/' === t[0]) return new Jg(!0, 0, t);
										var e = 0,
											n = !1,
											r = t.reduce(function(t, r, o) {
												if ('object' == typeof r && null != r) {
													if (r.outlets) {
														var i = {};
														return (
															cg(r.outlets, function(t, e) {
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
										return new Jg(n, e, r);
									})(n);
									if (i.toRoot()) return Yg(e.root, new hg([], {}), e, r, o);
									var a = (function(t, n, r) {
											if (t.isAbsolute) return new Kg(e.root, !0, 0);
											if (-1 === r.snapshot._lastPathIndex) return new Kg(r.snapshot._urlSegment, !0, 0);
											var o = Qg(t.commands[0]) ? 0 : 1;
											return (function(e, n, i) {
												for (var a = r.snapshot._urlSegment, s = r.snapshot._lastPathIndex + o, l = t.numberOfDoubleDots; l > s; ) {
													if (((l -= s), !(a = a.parent))) throw new Error("Invalid number of '../'");
													s = a.segments.length;
												}
												return new Kg(a, !1, s - l);
											})();
										})(i, 0, t),
										s = a.processChildren ? tm(a.segmentGroup, a.index, i.commands) : $g(a.segmentGroup, a.index, i.commands);
									return Yg(a.segmentGroup, s, e, r, o);
								})(u, this.currentUrlTree, t, f, p)
							);
						}),
						(t.prototype.navigateByUrl = function(t, e) {
							void 0 === e && (e = { skipLocationChange: !1 }),
								Tr() && this.isNgZoneEnabled && !Wc.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
							var n = lm(t) ? t : this.parseUrl(t),
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
							if (lm(t)) return fg(this.currentUrlTree, t, e);
							var n = this.parseUrl(t);
							return fg(this.currentUrlTree, n, e);
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
										t.events.next(new Rh(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(t.currentUrlTree))),
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
				Km = (function() {
					return function() {
						(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new Xm()), (this.attachRef = null);
					};
				})(),
				Xm = (function() {
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
							return e || ((e = new Km()), this.contexts.set(t, e)), e;
						}),
						(t.prototype.getContext = function(t) {
							return this.contexts.get(t) || null;
						}),
						t
					);
				})(),
				$m = (function() {
					function t(t, e, n, r, o) {
						(this.parentContexts = t),
							(this.location = e),
							(this.resolver = n),
							(this.changeDetector = o),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new tc()),
							(this.deactivateEvents = new tc()),
							(this.name = r || Jh),
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
								o = new tb(t, r, this.location.injector);
							(this.activated = this.location.createComponent(n, this.location.length, o)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
						}),
						(t.ngDirectiveDef = ze({
							type: t,
							selectors: [['router-outlet']],
							factory: function(e) {
								return new (e || t)(
									fl(Xm),
									fl(Ru),
									fl(ru),
									('name',
									(function(t, e) {
										var n = t.attrs;
										if (n)
											for (var r = n.length, o = 0; o < r; ) {
												var i = n[o];
												if (Co(i)) break;
												if (0 === i) o += 2;
												else if ('number' == typeof i) {
													for (o++; o < r && 'string' == typeof n[o]; ) o++;
												} else {
													if ('name' === i) return n[o + 1];
													o += 2;
												}
											}
										return null;
									})(ir())),
									fl(Eu)
								);
							},
							outputs: { activateEvents: 'activate', deactivateEvents: 'deactivate' },
							exportAs: ['outlet']
						})),
						t
					);
				})(),
				tb = (function() {
					function t(t, e, n) {
						(this.route = t), (this.childContexts = e), (this.parent = n);
					}
					return (
						(t.prototype.get = function(t, e) {
							return t === zg ? this.route : t === Xm ? this.childContexts : this.parent.get(t, e);
						}),
						t
					);
				})(),
				eb = (function() {
					return function() {};
				})(),
				nb = (function() {
					function t() {}
					return (
						(t.prototype.preload = function(t, e) {
							return e().pipe(
								dh(function() {
									return Vd(null);
								})
							);
						}),
						t
					);
				})(),
				rb = (function() {
					function t() {}
					return (
						(t.prototype.preload = function(t, e) {
							return Vd(null);
						}),
						t
					);
				})(),
				ob = (function() {
					function t(t, e, n, r, o) {
						(this.router = t),
							(this.injector = r),
							(this.preloadingStrategy = o),
							(this.loader = new qm(
								e,
								n,
								function(e) {
									return t.triggerEvent(new Fh(e));
								},
								function(e) {
									return t.triggerEvent(new Bh(e));
								}
							));
					}
					return (
						(t.prototype.setUpPreloading = function() {
							var t = this;
							this.subscription = this.router.events
								.pipe(
									Jd(function(t) {
										return t instanceof Rh;
									}),
									Ih(function() {
										return t.preload();
									})
								)
								.subscribe(function() {});
						}),
						(t.prototype.preload = function() {
							var t = this.injector.get(ou);
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
							return tt(o).pipe(
								it(),
								J(function(t) {})
							);
						}),
						(t.prototype.preloadConfig = function(t, e) {
							var n = this;
							return this.preloadingStrategy.preload(e, function() {
								return n.loader.load(t.injector, e).pipe(
									et(function(t) {
										return (e._loadedConfig = t), n.processRoutes(t.module, t.routes);
									})
								);
							});
						}),
						(t.ngInjectableDef = xt({
							token: t,
							factory: function(e) {
								return new (e || t)(Jt(Jm), Jt(fp), Jt(Lc), Jt(be), Jt(eb));
							},
							providedIn: null
						})),
						t
					);
				})(),
				ib = (function() {
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
								e instanceof jh
									? ((t.store[t.lastId] = t.viewportScroller.getScrollPosition()),
									  (t.lastSource = e.navigationTrigger),
									  (t.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
									: e instanceof Rh && ((t.lastId = e.id), t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment));
							});
						}),
						(t.prototype.consumeScrollEvents = function() {
							var t = this;
							return this.router.events.subscribe(function(e) {
								e instanceof Qh &&
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
							this.router.triggerEvent(new Qh(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, e));
						}),
						(t.prototype.ngOnDestroy = function() {
							this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
						}),
						t
					);
				})(),
				ab = new Lt('ROUTER_CONFIGURATION'),
				sb = new Lt('ROUTER_FORROOT_GUARD'),
				lb = [
					kp,
					{ provide: vg, useClass: yg },
					{
						provide: Jm,
						useFactory: function(t, e, n, r, o, i, a, s, l, u, c) {
							void 0 === l && (l = {});
							var p = new Jm(null, e, n, r, o, i, a, lg(s));
							if (
								(u && (p.urlHandlingStrategy = u),
								c && (p.routeReuseStrategy = c),
								l.errorHandler && (p.errorHandler = l.errorHandler),
								l.malformedUriErrorHandler && (p.malformedUriErrorHandler = l.malformedUriErrorHandler),
								l.enableTracing)
							) {
								var f = Kp();
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
						deps: [cp, vg, Xm, kp, be, fp, Lc, Bm, ab, [Gm, new mt()], [Vm, new mt()]]
					},
					Xm,
					{
						provide: zg,
						useFactory: function(t) {
							return t.routerState.root;
						},
						deps: [Jm]
					},
					{ provide: fp, useClass: gp },
					ob,
					rb,
					nb,
					{ provide: ab, useValue: { enableTracing: !1 } }
				];
			function ub() {
				return new ip('Router', Jm);
			}
			var cb = (function() {
				function t(t, e) {}
				var e;
				return (
					(e = t),
					(t.forRoot = function(t, n) {
						return {
							ngModule: e,
							providers: [
								lb,
								hb(t),
								{ provide: sb, useFactory: db, deps: [[Jm, new mt(), new vt()]] },
								{ provide: ab, useValue: n || {} },
								{ provide: xp, useFactory: fb, deps: [wp, [new gt(Cp), new mt()], ab] },
								{ provide: ib, useFactory: pb, deps: [Jm, Qp, ab] },
								{ provide: eb, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : rb },
								{ provide: ip, multi: !0, useFactory: ub },
								[gb, { provide: yc, multi: !0, useFactory: mb, deps: [gb] }, { provide: vb, useFactory: bb, deps: [gb] }, { provide: Oc, multi: !0, useExisting: vb }]
							]
						};
					}),
					(t.forChild = function(t) {
						return { ngModule: e, providers: [hb(t)] };
					}),
					(t.ngModuleDef = Le({ type: t })),
					(t.ngInjectorDef = Ct({
						factory: function(e) {
							return new (e || t)(Jt(sb, 8), Jt(Jm, 8));
						}
					})),
					t
				);
			})();
			function pb(t, e, n) {
				return n.scrollOffset && e.setOffset(n.scrollOffset), new ib(t, e, n);
			}
			function fb(t, e, n) {
				return void 0 === n && (n = {}), n.useHash ? new Pp(t, e) : new Ep(t, e);
			}
			function db(t) {
				if (t) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function hb(t) {
				return [{ provide: we, multi: !0, useValue: t }, { provide: Bm, multi: !0, useValue: t }];
			}
			var gb = (function() {
				function t(t) {
					(this.injector = t), (this.initNavigation = !1), (this.resultOfPreactivationDone = new D());
				}
				return (
					(t.prototype.appInitializer = function() {
						var t = this;
						return this.injector.get(_p, Promise.resolve(null)).then(function() {
							var e = null,
								n = new Promise(function(t) {
									return (e = t);
								}),
								r = t.injector.get(Jm),
								o = t.injector.get(ab);
							if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
							else if ('disabled' === o.initialNavigation) r.setUpLocationChangeListener(), e(!0);
							else {
								if ('enabled' !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
								(r.hooks.afterPreactivation = function() {
									return t.initNavigation ? Vd(null) : ((t.initNavigation = !0), e(!0), t.resultOfPreactivationDone);
								}),
									r.initialNavigation();
							}
							return n;
						});
					}),
					(t.prototype.bootstrapListener = function(t) {
						var e = this.injector.get(ab),
							n = this.injector.get(ob),
							r = this.injector.get(ib),
							o = this.injector.get(Jm),
							i = this.injector.get(cp);
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
					(t.ngInjectableDef = xt({
						token: t,
						factory: function(e) {
							return new (e || t)(Jt(be));
						},
						providedIn: null
					})),
					t
				);
			})();
			function mb(t) {
				return t.appInitializer.bind(t);
			}
			function bb(t) {
				return t.bootstrapListener.bind(t);
			}
			var vb = new Lt('Router Initializer'),
				yb = (function() {
					function t() {}
					return (
						(t.ngComponentDef = De({
							type: t,
							selectors: [['docs-root']],
							factory: function(e) {
								return new (e || t)();
							},
							consts: 2,
							vars: 0,
							template: function(t, e) {
								1 & t && (wl(0, 'ez-root'), xl(1, 'router-outlet'), _l());
							},
							directives: [Dd, $m],
							styles: ['']
						})),
						t
					);
				})(),
				wb = [1, 'pad-a-sm', 'border-a-gray', 'box-shadow-1', 'fixed-l', 'styleguide-menu'],
				_b = ['href', '#', 1, 'hover', 'bg-hover-lt-gray', 'pad-a-xs', 3, 'ngClass', 'click'],
				xb = ['class', 'pad-l-sm submenu', 4, 'ngIf'],
				Cb = ['tabindex', '-1', 1, 'pad-a-xl', 'styleguide'],
				kb = ['content', ''],
				Sb = [1, 'pad-t-xl', 3, 'innerHTML'],
				Pb = ['class', 'mar-b-lg box-shadow-1 border-lr-gray section', 4, 'ngIf'],
				Eb = [1, 'pad-l-sm', 'submenu'];
			function Ob(t, e) {
				1 & t && (wl(0, 'ul', Eb), wl(1, 'li'), wl(2, 'a'), Al(3, 'Close'), _l(), _l(), _l());
			}
			function Ib(t, e) {
				1 & t && (wl(0, 'ul', Eb), wl(1, 'li'), wl(2, 'a'), Al(3, 'Empty'), _l(), _l(), _l());
			}
			function Tb(t, e) {
				1 & t &&
					(wl(0, 'ul', Eb),
					wl(1, 'li'),
					wl(2, 'a'),
					Al(3, 'Group'),
					_l(),
					_l(),
					wl(4, 'li'),
					wl(5, 'a'),
					Al(6, 'Rounded'),
					_l(),
					_l(),
					wl(7, 'li'),
					wl(8, 'a'),
					Al(9, 'State'),
					_l(),
					_l(),
					_l());
			}
			function Mb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Ab(t, e) {
				1 & t && (wl(0, 'ul', Eb), wl(1, 'li'), wl(2, 'a'), Al(3, 'Accordion'), _l(), _l(), wl(4, 'li'), wl(5, 'a'), Al(6, 'Expand'), _l(), _l(), _l());
			}
			function jb(t, e) {
				1 & t &&
					(wl(0, 'ul', Eb),
					wl(1, 'li'),
					wl(2, 'a'),
					Al(3, 'Background'),
					_l(),
					_l(),
					wl(4, 'li'),
					wl(5, 'a'),
					Al(6, 'Border'),
					_l(),
					_l(),
					wl(7, 'li'),
					wl(8, 'a'),
					Al(9, 'Hover'),
					_l(),
					_l(),
					wl(10, 'li'),
					wl(11, 'a'),
					Al(12, 'Text'),
					_l(),
					_l(),
					_l());
			}
			function Rb(t, e) {
				1 & t &&
					(wl(0, 'ul', Eb),
					wl(1, 'li'),
					wl(2, 'a'),
					Al(3, 'Container Column'),
					_l(),
					_l(),
					wl(4, 'li'),
					wl(5, 'a'),
					Al(6, 'Container Row'),
					_l(),
					_l(),
					wl(7, 'li'),
					wl(8, 'a'),
					Al(9, 'Item Column'),
					_l(),
					_l(),
					wl(10, 'li'),
					wl(11, 'a'),
					Al(12, 'Item Order'),
					_l(),
					_l(),
					wl(13, 'li'),
					wl(14, 'a'),
					Al(15, 'Item Row'),
					_l(),
					_l(),
					wl(16, 'li'),
					wl(17, 'a'),
					Al(18, 'Item Size'),
					_l(),
					_l(),
					wl(19, 'li'),
					wl(20, 'a'),
					Al(21, 'Wrap Column'),
					_l(),
					_l(),
					wl(22, 'li'),
					wl(23, 'a'),
					Al(24, 'Wrap Row'),
					_l(),
					_l(),
					_l());
			}
			function Db(t, e) {
				1 & t &&
					(wl(0, 'ul', Eb),
					wl(1, 'li'),
					wl(2, 'a'),
					Al(3, 'Checkbox'),
					_l(),
					_l(),
					wl(4, 'li'),
					wl(5, 'a'),
					Al(6, 'Field'),
					_l(),
					_l(),
					wl(7, 'li'),
					wl(8, 'a'),
					Al(9, 'Field Group'),
					_l(),
					_l(),
					wl(10, 'li'),
					wl(11, 'a'),
					Al(12, 'Fieldset'),
					_l(),
					_l(),
					wl(13, 'li'),
					wl(14, 'a'),
					Al(15, 'Form Group'),
					_l(),
					_l(),
					wl(16, 'li'),
					wl(17, 'a'),
					Al(18, 'Label'),
					_l(),
					_l(),
					wl(19, 'li'),
					wl(20, 'a'),
					Al(21, 'State'),
					_l(),
					_l(),
					_l());
			}
			function Nb(t, e) {
				1 & t &&
					(wl(0, 'ul', Eb),
					wl(1, 'li'),
					wl(2, 'a'),
					Al(3, 'Area'),
					_l(),
					_l(),
					wl(4, 'li'),
					wl(5, 'a'),
					Al(6, 'Container'),
					_l(),
					_l(),
					wl(7, 'li'),
					wl(8, 'a'),
					Al(9, 'Item'),
					_l(),
					_l(),
					_l());
			}
			function Ub(t, e) {
				1 & t && (wl(0, 'ul', Eb), wl(1, 'li'), wl(2, 'a'), Al(3, 'Container'), _l(), _l(), wl(4, 'li'), wl(5, 'a'), Al(6, 'Sticky Footer'), _l(), _l(), _l());
			}
			function Lb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Hb(t, e) {
				1 & t &&
					(wl(0, 'ul', Eb),
					wl(1, 'li'),
					wl(2, 'a'),
					Al(3, 'Items'),
					_l(),
					_l(),
					wl(4, 'li'),
					wl(5, 'a'),
					Al(6, 'Links'),
					_l(),
					_l(),
					wl(7, 'li'),
					wl(8, 'a'),
					Al(9, 'Placement'),
					_l(),
					_l(),
					_l());
			}
			function zb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Vb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Fb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Bb(t, e) {
				1 & t && (wl(0, 'ul', Eb), wl(1, 'li'), wl(2, 'a'), Al(3, 'Margin'), _l(), _l(), wl(4, 'li'), wl(5, 'a'), Al(6, 'Padding'), _l(), _l(), _l());
			}
			function qb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Gb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Zb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Wb(t, e) {
				1 & t &&
					(wl(0, 'ul', Eb),
					wl(1, 'li'),
					wl(2, 'a'),
					Al(3, 'Border'),
					_l(),
					_l(),
					wl(4, 'li'),
					wl(5, 'a'),
					Al(6, 'Hover'),
					_l(),
					_l(),
					wl(7, 'li'),
					wl(8, 'a'),
					Al(9, 'Striped'),
					_l(),
					_l(),
					wl(10, 'li'),
					wl(11, 'a'),
					Al(12, 'Table Cell'),
					_l(),
					_l(),
					wl(13, 'li'),
					wl(14, 'a'),
					Al(15, 'Table Row'),
					_l(),
					_l(),
					_l());
			}
			function Qb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Yb(t, e) {
				1 & t && (wl(0, 'ul', Eb), wl(1, 'li'), wl(2, 'a'), Al(3, 'Font'), _l(), _l(), wl(4, 'li'), wl(5, 'a'), Al(6, 'Text'), _l(), _l(), _l());
			}
			function Jb(t, e) {
				1 & t && xl(0, 'ul', Eb);
			}
			function Kb(t, e) {
				1 & t && (wl(0, 'ul', Eb), wl(1, 'li'), wl(2, 'a'), Al(3, 'Hide'), _l(), _l(), wl(4, 'li'), wl(5, 'a'), Al(6, 'Show'), _l(), _l(), _l());
			}
			var Xb = [1, 'mar-b-lg', 'box-shadow-1', 'border-lr-gray', 'section'],
				$b = [1, 'pad-a-sm', 'bg-lt-gray', 'border-tb-gray'],
				tv = [1, 'pad-a-sm', 3, 'ngClass'],
				ev = [1, 'alert-bad'],
				nv = [1, 'alert-good'],
				rv = [1, 'alert-info'],
				ov = [1, 'alert-warn'],
				iv = [1, 'pad-a-sm', 'border-tb-gray'],
				av = [1, 'hljs-tag'],
				sv = [1, 'hljs-title'],
				lv = [1, 'hljs-attribute'],
				uv = [1, 'hljs-value'],
				cv = function(t, e) {
					return { flexbox: t, box: e };
				};
			function pv(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'p'),
						Al(3, 'Alerts are styled with an '),
						wl(4, 'code'),
						Al(5, '.alert-[bad || good || info || warn]'),
						_l(),
						Al(6, ' class.'),
						_l(),
						_l(),
						wl(7, 'section', tv),
						wl(8, 'aside', ev),
						Al(9, 'bad'),
						_l(),
						wl(10, 'aside', nv),
						Al(11, 'good'),
						_l(),
						wl(12, 'aside', rv),
						Al(13, 'info'),
						_l(),
						wl(14, 'aside', ov),
						Al(15, 'warn'),
						_l(),
						wl(16, 'ez-alert', nv),
						Al(17, 'good'),
						_l(),
						_l(),
						wl(18, 'figure'),
						wl(19, 'pre', iv),
						wl(20, 'span', av),
						Al(21, '<'),
						wl(22, 'span', sv),
						Al(23, 'aside'),
						_l(),
						Al(24, ' '),
						wl(25, 'span', lv),
						Al(26, 'class'),
						_l(),
						Al(27, '='),
						wl(28, 'span', uv),
						Al(29, '"alert-bad"'),
						_l(),
						Al(30, '>'),
						_l(),
						Al(31, 'bad'),
						wl(32, 'span', av),
						Al(33, '</'),
						wl(34, 'span', sv),
						Al(35, 'aside'),
						_l(),
						Al(36, '>'),
						_l(),
						Al(37, '\n'),
						wl(38, 'span', av),
						Al(39, '<'),
						wl(40, 'span', sv),
						Al(41, 'aside'),
						_l(),
						Al(42, ' '),
						wl(43, 'span', lv),
						Al(44, 'class'),
						_l(),
						Al(45, '='),
						wl(46, 'span', uv),
						Al(47, '"alert-good"'),
						_l(),
						Al(48, '>'),
						_l(),
						Al(49, 'good'),
						wl(50, 'span', av),
						Al(51, '</'),
						wl(52, 'span', sv),
						Al(53, 'aside'),
						_l(),
						Al(54, '>'),
						_l(),
						Al(55, '\n'),
						wl(56, 'span', av),
						Al(57, '<'),
						wl(58, 'span', sv),
						Al(59, 'aside'),
						_l(),
						Al(60, ' '),
						wl(61, 'span', lv),
						Al(62, 'class'),
						_l(),
						Al(63, '='),
						wl(64, 'span', uv),
						Al(65, '"alert-info"'),
						_l(),
						Al(66, '>'),
						_l(),
						Al(67, 'info'),
						wl(68, 'span', av),
						Al(69, '</'),
						wl(70, 'span', sv),
						Al(71, 'aside'),
						_l(),
						Al(72, '>'),
						_l(),
						Al(73, '\n'),
						wl(74, 'span', av),
						Al(75, '<'),
						wl(76, 'span', sv),
						Al(77, 'aside'),
						_l(),
						Al(78, ' '),
						wl(79, 'span', lv),
						Al(80, 'class'),
						_l(),
						Al(81, '='),
						wl(82, 'span', uv),
						Al(83, '"alert-warn"'),
						_l(),
						Al(84, '>'),
						_l(),
						Al(85, 'warn'),
						wl(86, 'span', av),
						Al(87, '</'),
						wl(88, 'span', sv),
						Al(89, 'aside'),
						_l(),
						Al(90, '>'),
						_l(),
						Al(91, '\n'),
						wl(92, 'span', av),
						Al(93, '<'),
						wl(94, 'span', sv),
						Al(95, 'ez-alert'),
						_l(),
						Al(96, ' '),
						wl(97, 'span', lv),
						Al(98, 'class'),
						_l(),
						Al(99, '='),
						wl(100, 'span', uv),
						Al(101, '"alert-good"'),
						_l(),
						Al(102, '>'),
						_l(),
						Al(103, 'good'),
						wl(104, 'span', av),
						Al(105, '</'),
						wl(106, 'span', sv),
						Al(107, 'ez-alert'),
						_l(),
						Al(108, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(7), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var fv = [1, 'alert-good', 'close'],
				dv = [1, 'close', 'alert-good'];
			function hv(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Close'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Alerts are closed by adding a '),
						wl(6, 'code'),
						Al(7, '.close'),
						_l(),
						Al(8, ' class.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'aside', fv),
						Al(11, 'close'),
						_l(),
						wl(12, 'ez-alert', dv),
						Al(13, 'close'),
						_l(),
						_l(),
						wl(14, 'figure'),
						wl(15, 'pre', iv),
						wl(16, 'span', av),
						Al(17, '<'),
						wl(18, 'span', sv),
						Al(19, 'aside'),
						_l(),
						Al(20, ' '),
						wl(21, 'span', lv),
						Al(22, 'class'),
						_l(),
						Al(23, '='),
						wl(24, 'span', uv),
						Al(25, '"alert-good close"'),
						_l(),
						Al(26, '>'),
						_l(),
						Al(27, 'close'),
						wl(28, 'span', av),
						Al(29, '</'),
						wl(30, 'span', sv),
						Al(31, 'aside'),
						_l(),
						Al(32, '>'),
						_l(),
						Al(33, '\n'),
						wl(34, 'span', av),
						Al(35, '<'),
						wl(36, 'span', sv),
						Al(37, 'ez-alert'),
						_l(),
						Al(38, ' '),
						wl(39, 'span', lv),
						Al(40, 'class'),
						_l(),
						Al(41, '='),
						wl(42, 'span', uv),
						Al(43, '"close alert-good"'),
						_l(),
						Al(44, '>'),
						_l(),
						Al(45, 'close'),
						wl(46, 'span', av),
						Al(47, '</'),
						wl(48, 'span', sv),
						Al(49, 'ez-alert'),
						_l(),
						Al(50, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var gv = [1, 'badge-sm', 'bg-dk-blue', 'text-white'],
				mv = [1, 'badge-md', 'bg-dk-blue', 'text-white'],
				bv = [1, 'badge-lg', 'bg-dk-blue', 'text-white'];
			function vv(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'p'),
						Al(3, 'Badges are styled with a '),
						wl(4, 'code'),
						Al(5, '.badge-[sm || md || lg]'),
						_l(),
						Al(6, ' class.'),
						_l(),
						_l(),
						wl(7, 'section', tv),
						wl(8, 'p', gv),
						Al(9, '1'),
						_l(),
						wl(10, 'p', mv),
						Al(11, '20'),
						_l(),
						wl(12, 'p', bv),
						Al(13, '300'),
						_l(),
						wl(14, 'ez-badge', gv),
						Al(15, '10'),
						_l(),
						_l(),
						wl(16, 'figure'),
						wl(17, 'pre', iv),
						wl(18, 'span', av),
						Al(19, '<'),
						wl(20, 'span', sv),
						Al(21, 'p'),
						_l(),
						Al(22, ' '),
						wl(23, 'span', lv),
						Al(24, 'class'),
						_l(),
						Al(25, '='),
						wl(26, 'span', uv),
						Al(27, '"badge-sm bg-dk-blue text-white"'),
						_l(),
						Al(28, '>'),
						_l(),
						Al(29, '1'),
						wl(30, 'span', av),
						Al(31, '</'),
						wl(32, 'span', sv),
						Al(33, 'p'),
						_l(),
						Al(34, '>'),
						_l(),
						Al(35, '\n'),
						wl(36, 'span', av),
						Al(37, '<'),
						wl(38, 'span', sv),
						Al(39, 'p'),
						_l(),
						Al(40, ' '),
						wl(41, 'span', lv),
						Al(42, 'class'),
						_l(),
						Al(43, '='),
						wl(44, 'span', uv),
						Al(45, '"badge-md bg-dk-blue text-white"'),
						_l(),
						Al(46, '>'),
						_l(),
						Al(47, '20'),
						wl(48, 'span', av),
						Al(49, '</'),
						wl(50, 'span', sv),
						Al(51, 'p'),
						_l(),
						Al(52, '>'),
						_l(),
						Al(53, '\n'),
						wl(54, 'span', av),
						Al(55, '<'),
						wl(56, 'span', sv),
						Al(57, 'p'),
						_l(),
						Al(58, ' '),
						wl(59, 'span', lv),
						Al(60, 'class'),
						_l(),
						Al(61, '='),
						wl(62, 'span', uv),
						Al(63, '"badge-lg bg-dk-blue text-white"'),
						_l(),
						Al(64, '>'),
						_l(),
						Al(65, '300'),
						wl(66, 'span', av),
						Al(67, '</'),
						wl(68, 'span', sv),
						Al(69, 'p'),
						_l(),
						Al(70, '>'),
						_l(),
						Al(71, '\n'),
						wl(72, 'span', av),
						Al(73, '<'),
						wl(74, 'span', sv),
						Al(75, 'ez-badge'),
						_l(),
						Al(76, ' '),
						wl(77, 'span', lv),
						Al(78, 'class'),
						_l(),
						Al(79, '='),
						wl(80, 'span', uv),
						Al(81, '"badge-sm bg-dk-blue text-white"'),
						_l(),
						Al(82, '>'),
						_l(),
						Al(83, '10'),
						wl(84, 'span', av),
						Al(85, '</'),
						wl(86, 'span', sv),
						Al(87, 'ez-badge'),
						_l(),
						Al(88, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(7), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function yv(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Empty'),
						_l(),
						wl(4, 'p'),
						Al(5, 'If a badge does not contain text, it is not rendered.'),
						_l(),
						_l(),
						wl(6, 'section', tv),
						wl(7, 'p', gv),
						Al(8, '1'),
						_l(),
						xl(9, 'p', mv),
						_l(),
						wl(10, 'figure'),
						wl(11, 'pre', iv),
						wl(12, 'span', av),
						Al(13, '<'),
						wl(14, 'span', sv),
						Al(15, 'p'),
						_l(),
						Al(16, ' '),
						wl(17, 'span', lv),
						Al(18, 'class'),
						_l(),
						Al(19, '='),
						wl(20, 'span', uv),
						Al(21, '"badge-sm bg-dk-blue text-white"'),
						_l(),
						Al(22, '>'),
						_l(),
						Al(23, '1'),
						wl(24, 'span', av),
						Al(25, '</'),
						wl(26, 'span', sv),
						Al(27, 'p'),
						_l(),
						Al(28, '>'),
						_l(),
						Al(29, '\n'),
						wl(30, 'span', av),
						Al(31, '<'),
						wl(32, 'span', sv),
						Al(33, 'p'),
						_l(),
						Al(34, ' '),
						wl(35, 'span', lv),
						Al(36, 'class'),
						_l(),
						Al(37, '='),
						wl(38, 'span', uv),
						Al(39, '"badge-md bg-dk-blue text-white"'),
						_l(),
						Al(40, '>'),
						_l(),
						wl(41, 'span', av),
						Al(42, '</'),
						wl(43, 'span', sv),
						Al(44, 'p'),
						_l(),
						Al(45, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(6), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var wv = ['type', 'button', 1, 'btn-xs', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				_v = ['type', 'button', 1, 'btn-sm', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				xv = ['type', 'button', 1, 'btn-md', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Cv = ['type', 'button', 1, 'btn-lg', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				kv = ['type', 'button', 1, 'btn-xl', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Sv = ['type', 'button', 1, 'btn-full', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Pv = [1, 'hljs-class'],
				Ev = [1, 'hljs-keyword'],
				Ov = [1, 'hljs-string'];
			function Iv(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'p'),
						Al(3, 'Buttons are styled with a '),
						wl(4, 'code'),
						Al(5, '.btn-[xs || sm || md || lg || xl || full]'),
						_l(),
						Al(6, ' class.'),
						_l(),
						_l(),
						wl(7, 'section', tv),
						wl(8, 'button', wv),
						Al(9, 'xs'),
						_l(),
						wl(10, 'button', _v),
						Al(11, 'sm'),
						_l(),
						wl(12, 'button', xv),
						Al(13, 'md'),
						_l(),
						wl(14, 'button', Cv),
						Al(15, 'lg'),
						_l(),
						wl(16, 'button', kv),
						Al(17, 'xl'),
						_l(),
						wl(18, 'button', Sv),
						Al(19, 'full'),
						_l(),
						_l(),
						wl(20, 'figure'),
						wl(21, 'pre', iv),
						Al(22, '<button '),
						wl(23, 'span', Pv),
						wl(24, 'span', Ev),
						Al(25, 'class'),
						_l(),
						Al(26, '='),
						_l(),
						wl(27, 'span', Ov),
						Al(28, '"btn-xs bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(29, ' '),
						wl(30, 'span', Pv),
						wl(31, 'span', Ev),
						Al(32, 'type'),
						_l(),
						Al(33, '='),
						_l(),
						wl(34, 'span', Ov),
						Al(35, '"button"'),
						_l(),
						Al(36, '>xs</button>\n<button '),
						wl(37, 'span', Pv),
						wl(38, 'span', Ev),
						Al(39, 'class'),
						_l(),
						Al(40, '='),
						_l(),
						wl(41, 'span', Ov),
						Al(42, '"btn-sm bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(43, ' '),
						wl(44, 'span', Pv),
						wl(45, 'span', Ev),
						Al(46, 'type'),
						_l(),
						Al(47, '='),
						_l(),
						wl(48, 'span', Ov),
						Al(49, '"button"'),
						_l(),
						Al(50, '>sm</button>\n<button '),
						wl(51, 'span', Pv),
						wl(52, 'span', Ev),
						Al(53, 'class'),
						_l(),
						Al(54, '='),
						_l(),
						wl(55, 'span', Ov),
						Al(56, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(57, ' '),
						wl(58, 'span', Pv),
						wl(59, 'span', Ev),
						Al(60, 'type'),
						_l(),
						Al(61, '='),
						_l(),
						wl(62, 'span', Ov),
						Al(63, '"button"'),
						_l(),
						Al(64, '>md</button>\n<button '),
						wl(65, 'span', Pv),
						wl(66, 'span', Ev),
						Al(67, 'class'),
						_l(),
						Al(68, '='),
						_l(),
						wl(69, 'span', Ov),
						Al(70, '"btn-lg bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(71, ' '),
						wl(72, 'span', Pv),
						wl(73, 'span', Ev),
						Al(74, 'type'),
						_l(),
						Al(75, '='),
						_l(),
						wl(76, 'span', Ov),
						Al(77, '"button"'),
						_l(),
						Al(78, '>lg</button>\n<button '),
						wl(79, 'span', Pv),
						wl(80, 'span', Ev),
						Al(81, 'class'),
						_l(),
						Al(82, '='),
						_l(),
						wl(83, 'span', Ov),
						Al(84, '"btn-xl bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(85, ' '),
						wl(86, 'span', Pv),
						wl(87, 'span', Ev),
						Al(88, 'type'),
						_l(),
						Al(89, '='),
						_l(),
						wl(90, 'span', Ov),
						Al(91, '"button"'),
						_l(),
						Al(92, '>xl</button>\n<button '),
						wl(93, 'span', Pv),
						wl(94, 'span', Ev),
						Al(95, 'class'),
						_l(),
						Al(96, '='),
						_l(),
						wl(97, 'span', Ov),
						Al(98, '"btn-full bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(99, ' '),
						wl(100, 'span', Pv),
						wl(101, 'span', Ev),
						Al(102, 'type'),
						_l(),
						Al(103, '='),
						_l(),
						wl(104, 'span', Ov),
						Al(105, '"button"'),
						_l(),
						Al(106, '>full</button>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(7), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Tv = ['role', 'group', 'aria-label', 'button row group', 1, 'btn-group-row'],
				Mv = ['role', 'group', 'aria-label', 'button column group', 1, 'btn-group-col'],
				Av = ['role', 'group', 'aria-label', 'button full row group', 1, 'btn-group-full'];
			function jv(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Group'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Buttons are grouped with a '),
						wl(6, 'code'),
						Al(7, '.btn-group-[row || col || full]'),
						_l(),
						Al(8, ' class on a parent container.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'section', Tv),
						wl(11, 'button', xv),
						Al(12, 'md'),
						_l(),
						wl(13, 'button', xv),
						Al(14, 'md'),
						_l(),
						wl(15, 'button', xv),
						Al(16, 'md'),
						_l(),
						wl(17, 'button', xv),
						Al(18, 'md'),
						_l(),
						wl(19, 'button', xv),
						Al(20, 'md'),
						_l(),
						_l(),
						wl(21, 'section', Mv),
						wl(22, 'button', xv),
						Al(23, 'md'),
						_l(),
						wl(24, 'button', xv),
						Al(25, 'md'),
						_l(),
						wl(26, 'button', xv),
						Al(27, 'md'),
						_l(),
						wl(28, 'button', xv),
						Al(29, 'md'),
						_l(),
						wl(30, 'button', xv),
						Al(31, 'md'),
						_l(),
						_l(),
						wl(32, 'section', Av),
						wl(33, 'button', xv),
						Al(34, 'md'),
						_l(),
						wl(35, 'button', xv),
						Al(36, 'md'),
						_l(),
						wl(37, 'button', xv),
						Al(38, 'md'),
						_l(),
						wl(39, 'button', xv),
						Al(40, 'md'),
						_l(),
						wl(41, 'button', xv),
						Al(42, 'md'),
						_l(),
						_l(),
						_l(),
						wl(43, 'figure'),
						wl(44, 'pre', iv),
						Al(45, '<section '),
						wl(46, 'span', Pv),
						wl(47, 'span', Ev),
						Al(48, 'class'),
						_l(),
						Al(49, '='),
						_l(),
						wl(50, 'span', Ov),
						Al(51, '"btn-group-row"'),
						_l(),
						Al(52, ' role='),
						wl(53, 'span', Ov),
						Al(54, '"group"'),
						_l(),
						Al(55, ' aria-label='),
						wl(56, 'span', Ov),
						Al(57, '"button row group"'),
						_l(),
						Al(58, '>\n    <button '),
						wl(59, 'span', Pv),
						wl(60, 'span', Ev),
						Al(61, 'class'),
						_l(),
						Al(62, '='),
						_l(),
						wl(63, 'span', Ov),
						Al(64, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(65, ' '),
						wl(66, 'span', Pv),
						wl(67, 'span', Ev),
						Al(68, 'type'),
						_l(),
						Al(69, '='),
						_l(),
						wl(70, 'span', Ov),
						Al(71, '"button"'),
						_l(),
						Al(72, '>md</button>\n    <button '),
						wl(73, 'span', Pv),
						wl(74, 'span', Ev),
						Al(75, 'class'),
						_l(),
						Al(76, '='),
						_l(),
						wl(77, 'span', Ov),
						Al(78, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(79, ' '),
						wl(80, 'span', Pv),
						wl(81, 'span', Ev),
						Al(82, 'type'),
						_l(),
						Al(83, '='),
						_l(),
						wl(84, 'span', Ov),
						Al(85, '"button"'),
						_l(),
						Al(86, '>md</button>\n    <button '),
						wl(87, 'span', Pv),
						wl(88, 'span', Ev),
						Al(89, 'class'),
						_l(),
						Al(90, '='),
						_l(),
						wl(91, 'span', Ov),
						Al(92, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(93, ' '),
						wl(94, 'span', Pv),
						wl(95, 'span', Ev),
						Al(96, 'type'),
						_l(),
						Al(97, '='),
						_l(),
						wl(98, 'span', Ov),
						Al(99, '"button"'),
						_l(),
						Al(100, '>md</button>\n    <button '),
						wl(101, 'span', Pv),
						wl(102, 'span', Ev),
						Al(103, 'class'),
						_l(),
						Al(104, '='),
						_l(),
						wl(105, 'span', Ov),
						Al(106, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(107, ' '),
						wl(108, 'span', Pv),
						wl(109, 'span', Ev),
						Al(110, 'type'),
						_l(),
						Al(111, '='),
						_l(),
						wl(112, 'span', Ov),
						Al(113, '"button"'),
						_l(),
						Al(114, '>md</button>\n    <button '),
						wl(115, 'span', Pv),
						wl(116, 'span', Ev),
						Al(117, 'class'),
						_l(),
						Al(118, '='),
						_l(),
						wl(119, 'span', Ov),
						Al(120, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(121, ' '),
						wl(122, 'span', Pv),
						wl(123, 'span', Ev),
						Al(124, 'type'),
						_l(),
						Al(125, '='),
						_l(),
						wl(126, 'span', Ov),
						Al(127, '"button"'),
						_l(),
						Al(128, '>md</button>\n</section>\n<section '),
						wl(129, 'span', Pv),
						wl(130, 'span', Ev),
						Al(131, 'class'),
						_l(),
						Al(132, '='),
						_l(),
						wl(133, 'span', Ov),
						Al(134, '"btn-group-col"'),
						_l(),
						Al(135, ' role='),
						wl(136, 'span', Ov),
						Al(137, '"group"'),
						_l(),
						Al(138, ' aria-label='),
						wl(139, 'span', Ov),
						Al(140, '"button column group"'),
						_l(),
						Al(141, '>\n    <button '),
						wl(142, 'span', Pv),
						wl(143, 'span', Ev),
						Al(144, 'class'),
						_l(),
						Al(145, '='),
						_l(),
						wl(146, 'span', Ov),
						Al(147, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(148, ' '),
						wl(149, 'span', Pv),
						wl(150, 'span', Ev),
						Al(151, 'type'),
						_l(),
						Al(152, '='),
						_l(),
						wl(153, 'span', Ov),
						Al(154, '"button"'),
						_l(),
						Al(155, '>md</button>\n    <button '),
						wl(156, 'span', Pv),
						wl(157, 'span', Ev),
						Al(158, 'class'),
						_l(),
						Al(159, '='),
						_l(),
						wl(160, 'span', Ov),
						Al(161, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(162, ' '),
						wl(163, 'span', Pv),
						wl(164, 'span', Ev),
						Al(165, 'type'),
						_l(),
						Al(166, '='),
						_l(),
						wl(167, 'span', Ov),
						Al(168, '"button"'),
						_l(),
						Al(169, '>md</button>\n    <button '),
						wl(170, 'span', Pv),
						wl(171, 'span', Ev),
						Al(172, 'class'),
						_l(),
						Al(173, '='),
						_l(),
						wl(174, 'span', Ov),
						Al(175, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(176, ' '),
						wl(177, 'span', Pv),
						wl(178, 'span', Ev),
						Al(179, 'type'),
						_l(),
						Al(180, '='),
						_l(),
						wl(181, 'span', Ov),
						Al(182, '"button"'),
						_l(),
						Al(183, '>md</button>\n    <button '),
						wl(184, 'span', Pv),
						wl(185, 'span', Ev),
						Al(186, 'class'),
						_l(),
						Al(187, '='),
						_l(),
						wl(188, 'span', Ov),
						Al(189, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(190, ' '),
						wl(191, 'span', Pv),
						wl(192, 'span', Ev),
						Al(193, 'type'),
						_l(),
						Al(194, '='),
						_l(),
						wl(195, 'span', Ov),
						Al(196, '"button"'),
						_l(),
						Al(197, '>md</button>\n    <button '),
						wl(198, 'span', Pv),
						wl(199, 'span', Ev),
						Al(200, 'class'),
						_l(),
						Al(201, '='),
						_l(),
						wl(202, 'span', Ov),
						Al(203, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(204, ' '),
						wl(205, 'span', Pv),
						wl(206, 'span', Ev),
						Al(207, 'type'),
						_l(),
						Al(208, '='),
						_l(),
						wl(209, 'span', Ov),
						Al(210, '"button"'),
						_l(),
						Al(211, '>md</button>\n</section>\n<section '),
						wl(212, 'span', Pv),
						wl(213, 'span', Ev),
						Al(214, 'class'),
						_l(),
						Al(215, '='),
						_l(),
						wl(216, 'span', Ov),
						Al(217, '"btn-group-full"'),
						_l(),
						Al(218, ' role='),
						wl(219, 'span', Ov),
						Al(220, '"group"'),
						_l(),
						Al(221, ' aria-label='),
						wl(222, 'span', Ov),
						Al(223, '"button full row group"'),
						_l(),
						Al(224, '>\n    <button '),
						wl(225, 'span', Pv),
						wl(226, 'span', Ev),
						Al(227, 'class'),
						_l(),
						Al(228, '='),
						_l(),
						wl(229, 'span', Ov),
						Al(230, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(231, ' '),
						wl(232, 'span', Pv),
						wl(233, 'span', Ev),
						Al(234, 'type'),
						_l(),
						Al(235, '='),
						_l(),
						wl(236, 'span', Ov),
						Al(237, '"button"'),
						_l(),
						Al(238, '>md</button>\n    <button '),
						wl(239, 'span', Pv),
						wl(240, 'span', Ev),
						Al(241, 'class'),
						_l(),
						Al(242, '='),
						_l(),
						wl(243, 'span', Ov),
						Al(244, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(245, ' '),
						wl(246, 'span', Pv),
						wl(247, 'span', Ev),
						Al(248, 'type'),
						_l(),
						Al(249, '='),
						_l(),
						wl(250, 'span', Ov),
						Al(251, '"button"'),
						_l(),
						Al(252, '>md</button>\n    <button '),
						wl(253, 'span', Pv),
						wl(254, 'span', Ev),
						Al(255, 'class'),
						_l(),
						Al(256, '='),
						_l(),
						wl(257, 'span', Ov),
						Al(258, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(259, ' '),
						wl(260, 'span', Pv),
						wl(261, 'span', Ev),
						Al(262, 'type'),
						_l(),
						Al(263, '='),
						_l(),
						wl(264, 'span', Ov),
						Al(265, '"button"'),
						_l(),
						Al(266, '>md</button>\n    <button '),
						wl(267, 'span', Pv),
						wl(268, 'span', Ev),
						Al(269, 'class'),
						_l(),
						Al(270, '='),
						_l(),
						wl(271, 'span', Ov),
						Al(272, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(273, ' '),
						wl(274, 'span', Pv),
						wl(275, 'span', Ev),
						Al(276, 'type'),
						_l(),
						Al(277, '='),
						_l(),
						wl(278, 'span', Ov),
						Al(279, '"button"'),
						_l(),
						Al(280, '>md</button>\n    <button '),
						wl(281, 'span', Pv),
						wl(282, 'span', Ev),
						Al(283, 'class'),
						_l(),
						Al(284, '='),
						_l(),
						wl(285, 'span', Ov),
						Al(286, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(287, ' '),
						wl(288, 'span', Pv),
						wl(289, 'span', Ev),
						Al(290, 'type'),
						_l(),
						Al(291, '='),
						_l(),
						wl(292, 'span', Ov),
						Al(293, '"button"'),
						_l(),
						Al(294, '>md</button>\n</section>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Rv = ['type', 'button', 1, 'btn-xs', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Dv = ['type', 'button', 1, 'btn-sm', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Nv = ['type', 'button', 1, 'btn-md', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Uv = ['type', 'button', 1, 'btn-lg', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Lv = ['type', 'button', 1, 'btn-xl', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Hv = ['type', 'button', 1, 'btn-full', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'];
			function zv(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Rounded'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Buttons are rounded by adding a '),
						wl(6, 'code'),
						Al(7, '.rounded'),
						_l(),
						Al(8, ' class.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'button', Rv),
						Al(11, 'xs'),
						_l(),
						wl(12, 'button', Dv),
						Al(13, 'sm'),
						_l(),
						wl(14, 'button', Nv),
						Al(15, 'md'),
						_l(),
						wl(16, 'button', Uv),
						Al(17, 'lg'),
						_l(),
						wl(18, 'button', Lv),
						Al(19, 'xl'),
						_l(),
						wl(20, 'button', Hv),
						Al(21, 'full'),
						_l(),
						_l(),
						wl(22, 'figure'),
						wl(23, 'pre', iv),
						Al(24, '<button '),
						wl(25, 'span', Pv),
						wl(26, 'span', Ev),
						Al(27, 'class'),
						_l(),
						Al(28, '='),
						_l(),
						wl(29, 'span', Ov),
						Al(30, '"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(31, ' '),
						wl(32, 'span', Pv),
						wl(33, 'span', Ev),
						Al(34, 'type'),
						_l(),
						Al(35, '='),
						_l(),
						wl(36, 'span', Ov),
						Al(37, '"button"'),
						_l(),
						Al(38, '>xs</button>\n<button '),
						wl(39, 'span', Pv),
						wl(40, 'span', Ev),
						Al(41, 'class'),
						_l(),
						Al(42, '='),
						_l(),
						wl(43, 'span', Ov),
						Al(44, '"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(45, ' '),
						wl(46, 'span', Pv),
						wl(47, 'span', Ev),
						Al(48, 'type'),
						_l(),
						Al(49, '='),
						_l(),
						wl(50, 'span', Ov),
						Al(51, '"button"'),
						_l(),
						Al(52, '>sm</button>\n<button '),
						wl(53, 'span', Pv),
						wl(54, 'span', Ev),
						Al(55, 'class'),
						_l(),
						Al(56, '='),
						_l(),
						wl(57, 'span', Ov),
						Al(58, '"btn-md rounded bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(59, ' '),
						wl(60, 'span', Pv),
						wl(61, 'span', Ev),
						Al(62, 'type'),
						_l(),
						Al(63, '='),
						_l(),
						wl(64, 'span', Ov),
						Al(65, '"button"'),
						_l(),
						Al(66, '>md</button>\n<button '),
						wl(67, 'span', Pv),
						wl(68, 'span', Ev),
						Al(69, 'class'),
						_l(),
						Al(70, '='),
						_l(),
						wl(71, 'span', Ov),
						Al(72, '"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(73, ' '),
						wl(74, 'span', Pv),
						wl(75, 'span', Ev),
						Al(76, 'type'),
						_l(),
						Al(77, '='),
						_l(),
						wl(78, 'span', Ov),
						Al(79, '"button"'),
						_l(),
						Al(80, '>lg</button>\n<button '),
						wl(81, 'span', Pv),
						wl(82, 'span', Ev),
						Al(83, 'class'),
						_l(),
						Al(84, '='),
						_l(),
						wl(85, 'span', Ov),
						Al(86, '"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(87, ' '),
						wl(88, 'span', Pv),
						wl(89, 'span', Ev),
						Al(90, 'type'),
						_l(),
						Al(91, '='),
						_l(),
						wl(92, 'span', Ov),
						Al(93, '"button"'),
						_l(),
						Al(94, '>xl</button>\n<button '),
						wl(95, 'span', Pv),
						wl(96, 'span', Ev),
						Al(97, 'class'),
						_l(),
						Al(98, '='),
						_l(),
						wl(99, 'span', Ov),
						Al(100, '"btn-full rounded bg-dk-blue text-white bg-hover-blue"'),
						_l(),
						Al(101, ' '),
						wl(102, 'span', Pv),
						wl(103, 'span', Ev),
						Al(104, 'type'),
						_l(),
						Al(105, '='),
						_l(),
						wl(106, 'span', Ov),
						Al(107, '"button"'),
						_l(),
						Al(108, '>full</button>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Vv = ['type', 'button', 'disabled', '', 1, 'btn-md'];
			function Fv(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'State'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Buttons are disabled by adding a '),
						wl(6, 'code'),
						Al(7, 'disabled'),
						_l(),
						Al(8, ' attribute.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'button', Vv),
						Al(11, 'disabled'),
						_l(),
						_l(),
						wl(12, 'figure'),
						wl(13, 'pre', iv),
						Al(14, '<button '),
						wl(15, 'span', Pv),
						wl(16, 'span', Ev),
						Al(17, 'class'),
						_l(),
						Al(18, '='),
						_l(),
						wl(19, 'span', Ov),
						Al(20, '"btn-md"'),
						_l(),
						Al(21, ' '),
						wl(22, 'span', Pv),
						wl(23, 'span', Ev),
						Al(24, 'type'),
						_l(),
						Al(25, '='),
						_l(),
						wl(26, 'span', Ov),
						Al(27, '"button"'),
						_l(),
						Al(28, ' disabled>disabled</button>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function Bv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function qv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function Gv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Accordion'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Zv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Expand'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Wv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function Qv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Background'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Yv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Border'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Jv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Hover'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Kv(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Text'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			var Xv = [1, 'row'],
				$v = [1, 'row-full'],
				ty = [1, 'col'],
				ey = [1, 'col-full'];
			function ny(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'p'),
						Al(3, 'In order for flexbox to work, a parent container must have a '),
						wl(4, 'code'),
						Al(5, '.row[-full]'),
						_l(),
						Al(6, ' or '),
						wl(7, 'code'),
						Al(8, '.col[-full]'),
						_l(),
						Al(9, ' class.'),
						_l(),
						_l(),
						wl(10, 'section', tv),
						wl(11, 'ul', Xv),
						wl(12, 'li'),
						Al(13, 'row'),
						_l(),
						wl(14, 'li'),
						Al(15, 'row'),
						_l(),
						_l(),
						wl(16, 'ul', $v),
						wl(17, 'li'),
						Al(18, 'full row'),
						_l(),
						wl(19, 'li'),
						Al(20, 'full row'),
						_l(),
						_l(),
						wl(21, 'ul', ty),
						wl(22, 'li'),
						Al(23, 'column'),
						_l(),
						wl(24, 'li'),
						Al(25, 'column'),
						_l(),
						_l(),
						wl(26, 'ul', ey),
						wl(27, 'li'),
						Al(28, 'full column'),
						_l(),
						wl(29, 'li'),
						Al(30, 'full column'),
						_l(),
						_l(),
						_l(),
						wl(31, 'figure'),
						wl(32, 'pre', iv),
						wl(33, 'span', av),
						Al(34, '<'),
						wl(35, 'span', sv),
						Al(36, 'ul'),
						_l(),
						Al(37, ' '),
						wl(38, 'span', lv),
						Al(39, 'class'),
						_l(),
						Al(40, '='),
						wl(41, 'span', uv),
						Al(42, '"row"'),
						_l(),
						Al(43, '>'),
						_l(),
						Al(44, '\n    '),
						wl(45, 'span', av),
						Al(46, '<'),
						wl(47, 'span', sv),
						Al(48, 'li'),
						_l(),
						Al(49, '>'),
						_l(),
						Al(50, 'row'),
						wl(51, 'span', av),
						Al(52, '</'),
						wl(53, 'span', sv),
						Al(54, 'li'),
						_l(),
						Al(55, '>'),
						_l(),
						Al(56, '\n    '),
						wl(57, 'span', av),
						Al(58, '<'),
						wl(59, 'span', sv),
						Al(60, 'li'),
						_l(),
						Al(61, '>'),
						_l(),
						Al(62, 'row'),
						wl(63, 'span', av),
						Al(64, '</'),
						wl(65, 'span', sv),
						Al(66, 'li'),
						_l(),
						Al(67, '>'),
						_l(),
						Al(68, '\n'),
						wl(69, 'span', av),
						Al(70, '</'),
						wl(71, 'span', sv),
						Al(72, 'ul'),
						_l(),
						Al(73, '>'),
						_l(),
						Al(74, '\n'),
						wl(75, 'span', av),
						Al(76, '<'),
						wl(77, 'span', sv),
						Al(78, 'ul'),
						_l(),
						Al(79, ' '),
						wl(80, 'span', lv),
						Al(81, 'class'),
						_l(),
						Al(82, '='),
						wl(83, 'span', uv),
						Al(84, '"row-full"'),
						_l(),
						Al(85, '>'),
						_l(),
						Al(86, '\n    '),
						wl(87, 'span', av),
						Al(88, '<'),
						wl(89, 'span', sv),
						Al(90, 'li'),
						_l(),
						Al(91, '>'),
						_l(),
						Al(92, 'full row'),
						wl(93, 'span', av),
						Al(94, '</'),
						wl(95, 'span', sv),
						Al(96, 'li'),
						_l(),
						Al(97, '>'),
						_l(),
						Al(98, '\n    '),
						wl(99, 'span', av),
						Al(100, '<'),
						wl(101, 'span', sv),
						Al(102, 'li'),
						_l(),
						Al(103, '>'),
						_l(),
						Al(104, 'full row'),
						wl(105, 'span', av),
						Al(106, '</'),
						wl(107, 'span', sv),
						Al(108, 'li'),
						_l(),
						Al(109, '>'),
						_l(),
						Al(110, '\n'),
						wl(111, 'span', av),
						Al(112, '</'),
						wl(113, 'span', sv),
						Al(114, 'ul'),
						_l(),
						Al(115, '>'),
						_l(),
						Al(116, '\n'),
						wl(117, 'span', av),
						Al(118, '<'),
						wl(119, 'span', sv),
						Al(120, 'ul'),
						_l(),
						Al(121, ' '),
						wl(122, 'span', lv),
						Al(123, 'class'),
						_l(),
						Al(124, '='),
						wl(125, 'span', uv),
						Al(126, '"col"'),
						_l(),
						Al(127, '>'),
						_l(),
						Al(128, '\n    '),
						wl(129, 'span', av),
						Al(130, '<'),
						wl(131, 'span', sv),
						Al(132, 'li'),
						_l(),
						Al(133, '>'),
						_l(),
						Al(134, 'column'),
						wl(135, 'span', av),
						Al(136, '</'),
						wl(137, 'span', sv),
						Al(138, 'li'),
						_l(),
						Al(139, '>'),
						_l(),
						Al(140, '\n    '),
						wl(141, 'span', av),
						Al(142, '<'),
						wl(143, 'span', sv),
						Al(144, 'li'),
						_l(),
						Al(145, '>'),
						_l(),
						Al(146, 'column'),
						wl(147, 'span', av),
						Al(148, '</'),
						wl(149, 'span', sv),
						Al(150, 'li'),
						_l(),
						Al(151, '>'),
						_l(),
						Al(152, '\n'),
						wl(153, 'span', av),
						Al(154, '</'),
						wl(155, 'span', sv),
						Al(156, 'ul'),
						_l(),
						Al(157, '>'),
						_l(),
						Al(158, '\n'),
						wl(159, 'span', av),
						Al(160, '<'),
						wl(161, 'span', sv),
						Al(162, 'ul'),
						_l(),
						Al(163, ' '),
						wl(164, 'span', lv),
						Al(165, 'class'),
						_l(),
						Al(166, '='),
						wl(167, 'span', uv),
						Al(168, '"col-full"'),
						_l(),
						Al(169, '>'),
						_l(),
						Al(170, '\n    '),
						wl(171, 'span', av),
						Al(172, '<'),
						wl(173, 'span', sv),
						Al(174, 'li'),
						_l(),
						Al(175, '>'),
						_l(),
						Al(176, 'full column'),
						wl(177, 'span', av),
						Al(178, '</'),
						wl(179, 'span', sv),
						Al(180, 'li'),
						_l(),
						Al(181, '>'),
						_l(),
						Al(182, '\n    '),
						wl(183, 'span', av),
						Al(184, '<'),
						wl(185, 'span', sv),
						Al(186, 'li'),
						_l(),
						Al(187, '>'),
						_l(),
						Al(188, 'full column'),
						wl(189, 'span', av),
						Al(190, '</'),
						wl(191, 'span', sv),
						Al(192, 'li'),
						_l(),
						Al(193, '>'),
						_l(),
						Al(194, '\n'),
						wl(195, 'span', av),
						Al(196, '</'),
						wl(197, 'span', sv),
						Al(198, 'ul'),
						_l(),
						Al(199, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(10), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var ry = [1, 'col', 'align-l'],
				oy = [1, 'col', 'align-c'],
				iy = [1, 'col', 'align-r'],
				ay = [1, 'col', 'align-t'],
				sy = [1, 'col', 'align-m'],
				ly = [1, 'col', 'align-b'],
				uy = [1, 'col', 'align-cm'],
				cy = [1, 'col', 'align-sa'],
				py = [1, 'col', 'align-sb'],
				fy = [1, 'col', 'align-st'];
			function dy(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Container Column'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use an '),
						wl(6, 'code'),
						Al(7, '.align-[l || c || r || t || m || b || cm || sa || sb || st]'),
						_l(),
						Al(8, ' class to align ALL items in a '),
						wl(9, 'code'),
						Al(10, '.col'),
						_l(),
						Al(11, ' flex container.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'ul', ry),
						wl(14, 'li'),
						Al(15, 'left (default)'),
						_l(),
						wl(16, 'li'),
						Al(17, 'left (default)'),
						_l(),
						_l(),
						wl(18, 'ul', oy),
						wl(19, 'li'),
						Al(20, 'center'),
						_l(),
						wl(21, 'li'),
						Al(22, 'center'),
						_l(),
						_l(),
						wl(23, 'ul', iy),
						wl(24, 'li'),
						Al(25, 'right'),
						_l(),
						wl(26, 'li'),
						Al(27, 'right'),
						_l(),
						_l(),
						wl(28, 'ul', ay),
						wl(29, 'li'),
						Al(30, 'top (default)'),
						_l(),
						wl(31, 'li'),
						Al(32, 'top (default)'),
						_l(),
						_l(),
						wl(33, 'ul', sy),
						wl(34, 'li'),
						Al(35, 'middle'),
						_l(),
						wl(36, 'li'),
						Al(37, 'middle'),
						_l(),
						_l(),
						wl(38, 'ul', ly),
						wl(39, 'li'),
						Al(40, 'bottom'),
						_l(),
						wl(41, 'li'),
						Al(42, 'bottom'),
						_l(),
						_l(),
						wl(43, 'ul', uy),
						wl(44, 'li'),
						Al(45, 'center middle'),
						_l(),
						wl(46, 'li'),
						Al(47, 'center middle'),
						_l(),
						_l(),
						wl(48, 'ul', cy),
						wl(49, 'li'),
						Al(50, 'space around'),
						_l(),
						wl(51, 'li'),
						Al(52, 'space around'),
						_l(),
						_l(),
						wl(53, 'ul', py),
						wl(54, 'li'),
						Al(55, 'space between'),
						_l(),
						wl(56, 'li'),
						Al(57, 'space between'),
						_l(),
						_l(),
						wl(58, 'ul', fy),
						wl(59, 'li'),
						Al(60, 'stretch'),
						_l(),
						wl(61, 'li'),
						Al(62, 'stretch'),
						_l(),
						_l(),
						_l(),
						wl(63, 'figure'),
						wl(64, 'pre', iv),
						wl(65, 'span', av),
						Al(66, '<'),
						wl(67, 'span', sv),
						Al(68, 'ul'),
						_l(),
						Al(69, ' '),
						wl(70, 'span', lv),
						Al(71, 'class'),
						_l(),
						Al(72, '='),
						wl(73, 'span', uv),
						Al(74, '"col align-l"'),
						_l(),
						Al(75, '>'),
						_l(),
						Al(76, '\n    '),
						wl(77, 'span', av),
						Al(78, '<'),
						wl(79, 'span', sv),
						Al(80, 'li'),
						_l(),
						Al(81, '>'),
						_l(),
						Al(82, 'left (default)'),
						wl(83, 'span', av),
						Al(84, '</'),
						wl(85, 'span', sv),
						Al(86, 'li'),
						_l(),
						Al(87, '>'),
						_l(),
						Al(88, '\n    '),
						wl(89, 'span', av),
						Al(90, '<'),
						wl(91, 'span', sv),
						Al(92, 'li'),
						_l(),
						Al(93, '>'),
						_l(),
						Al(94, 'left (default)'),
						wl(95, 'span', av),
						Al(96, '</'),
						wl(97, 'span', sv),
						Al(98, 'li'),
						_l(),
						Al(99, '>'),
						_l(),
						Al(100, '\n'),
						wl(101, 'span', av),
						Al(102, '</'),
						wl(103, 'span', sv),
						Al(104, 'ul'),
						_l(),
						Al(105, '>'),
						_l(),
						Al(106, '\n'),
						wl(107, 'span', av),
						Al(108, '<'),
						wl(109, 'span', sv),
						Al(110, 'ul'),
						_l(),
						Al(111, ' '),
						wl(112, 'span', lv),
						Al(113, 'class'),
						_l(),
						Al(114, '='),
						wl(115, 'span', uv),
						Al(116, '"col align-c"'),
						_l(),
						Al(117, '>'),
						_l(),
						Al(118, '\n    '),
						wl(119, 'span', av),
						Al(120, '<'),
						wl(121, 'span', sv),
						Al(122, 'li'),
						_l(),
						Al(123, '>'),
						_l(),
						Al(124, 'center'),
						wl(125, 'span', av),
						Al(126, '</'),
						wl(127, 'span', sv),
						Al(128, 'li'),
						_l(),
						Al(129, '>'),
						_l(),
						Al(130, '\n    '),
						wl(131, 'span', av),
						Al(132, '<'),
						wl(133, 'span', sv),
						Al(134, 'li'),
						_l(),
						Al(135, '>'),
						_l(),
						Al(136, 'center'),
						wl(137, 'span', av),
						Al(138, '</'),
						wl(139, 'span', sv),
						Al(140, 'li'),
						_l(),
						Al(141, '>'),
						_l(),
						Al(142, '\n'),
						wl(143, 'span', av),
						Al(144, '</'),
						wl(145, 'span', sv),
						Al(146, 'ul'),
						_l(),
						Al(147, '>'),
						_l(),
						Al(148, '\n'),
						wl(149, 'span', av),
						Al(150, '<'),
						wl(151, 'span', sv),
						Al(152, 'ul'),
						_l(),
						Al(153, ' '),
						wl(154, 'span', lv),
						Al(155, 'class'),
						_l(),
						Al(156, '='),
						wl(157, 'span', uv),
						Al(158, '"col align-r"'),
						_l(),
						Al(159, '>'),
						_l(),
						Al(160, '\n    '),
						wl(161, 'span', av),
						Al(162, '<'),
						wl(163, 'span', sv),
						Al(164, 'li'),
						_l(),
						Al(165, '>'),
						_l(),
						Al(166, 'right'),
						wl(167, 'span', av),
						Al(168, '</'),
						wl(169, 'span', sv),
						Al(170, 'li'),
						_l(),
						Al(171, '>'),
						_l(),
						Al(172, '\n    '),
						wl(173, 'span', av),
						Al(174, '<'),
						wl(175, 'span', sv),
						Al(176, 'li'),
						_l(),
						Al(177, '>'),
						_l(),
						Al(178, 'right'),
						wl(179, 'span', av),
						Al(180, '</'),
						wl(181, 'span', sv),
						Al(182, 'li'),
						_l(),
						Al(183, '>'),
						_l(),
						Al(184, '\n'),
						wl(185, 'span', av),
						Al(186, '</'),
						wl(187, 'span', sv),
						Al(188, 'ul'),
						_l(),
						Al(189, '>'),
						_l(),
						Al(190, '\n'),
						wl(191, 'span', av),
						Al(192, '<'),
						wl(193, 'span', sv),
						Al(194, 'ul'),
						_l(),
						Al(195, ' '),
						wl(196, 'span', lv),
						Al(197, 'class'),
						_l(),
						Al(198, '='),
						wl(199, 'span', uv),
						Al(200, '"col align-t"'),
						_l(),
						Al(201, '>'),
						_l(),
						Al(202, '\n    '),
						wl(203, 'span', av),
						Al(204, '<'),
						wl(205, 'span', sv),
						Al(206, 'li'),
						_l(),
						Al(207, '>'),
						_l(),
						Al(208, 'top (default)'),
						wl(209, 'span', av),
						Al(210, '</'),
						wl(211, 'span', sv),
						Al(212, 'li'),
						_l(),
						Al(213, '>'),
						_l(),
						Al(214, '\n    '),
						wl(215, 'span', av),
						Al(216, '<'),
						wl(217, 'span', sv),
						Al(218, 'li'),
						_l(),
						Al(219, '>'),
						_l(),
						Al(220, 'top (default)'),
						wl(221, 'span', av),
						Al(222, '</'),
						wl(223, 'span', sv),
						Al(224, 'li'),
						_l(),
						Al(225, '>'),
						_l(),
						Al(226, '\n'),
						wl(227, 'span', av),
						Al(228, '</'),
						wl(229, 'span', sv),
						Al(230, 'ul'),
						_l(),
						Al(231, '>'),
						_l(),
						Al(232, '\n'),
						wl(233, 'span', av),
						Al(234, '<'),
						wl(235, 'span', sv),
						Al(236, 'ul'),
						_l(),
						Al(237, ' '),
						wl(238, 'span', lv),
						Al(239, 'class'),
						_l(),
						Al(240, '='),
						wl(241, 'span', uv),
						Al(242, '"col align-m"'),
						_l(),
						Al(243, '>'),
						_l(),
						Al(244, '\n    '),
						wl(245, 'span', av),
						Al(246, '<'),
						wl(247, 'span', sv),
						Al(248, 'li'),
						_l(),
						Al(249, '>'),
						_l(),
						Al(250, 'middle'),
						wl(251, 'span', av),
						Al(252, '</'),
						wl(253, 'span', sv),
						Al(254, 'li'),
						_l(),
						Al(255, '>'),
						_l(),
						Al(256, '\n    '),
						wl(257, 'span', av),
						Al(258, '<'),
						wl(259, 'span', sv),
						Al(260, 'li'),
						_l(),
						Al(261, '>'),
						_l(),
						Al(262, 'middle'),
						wl(263, 'span', av),
						Al(264, '</'),
						wl(265, 'span', sv),
						Al(266, 'li'),
						_l(),
						Al(267, '>'),
						_l(),
						Al(268, '\n'),
						wl(269, 'span', av),
						Al(270, '</'),
						wl(271, 'span', sv),
						Al(272, 'ul'),
						_l(),
						Al(273, '>'),
						_l(),
						Al(274, '\n'),
						wl(275, 'span', av),
						Al(276, '<'),
						wl(277, 'span', sv),
						Al(278, 'ul'),
						_l(),
						Al(279, ' '),
						wl(280, 'span', lv),
						Al(281, 'class'),
						_l(),
						Al(282, '='),
						wl(283, 'span', uv),
						Al(284, '"col align-b"'),
						_l(),
						Al(285, '>'),
						_l(),
						Al(286, '\n    '),
						wl(287, 'span', av),
						Al(288, '<'),
						wl(289, 'span', sv),
						Al(290, 'li'),
						_l(),
						Al(291, '>'),
						_l(),
						Al(292, 'bottom'),
						wl(293, 'span', av),
						Al(294, '</'),
						wl(295, 'span', sv),
						Al(296, 'li'),
						_l(),
						Al(297, '>'),
						_l(),
						Al(298, '\n    '),
						wl(299, 'span', av),
						Al(300, '<'),
						wl(301, 'span', sv),
						Al(302, 'li'),
						_l(),
						Al(303, '>'),
						_l(),
						Al(304, 'bottom'),
						wl(305, 'span', av),
						Al(306, '</'),
						wl(307, 'span', sv),
						Al(308, 'li'),
						_l(),
						Al(309, '>'),
						_l(),
						Al(310, '\n'),
						wl(311, 'span', av),
						Al(312, '</'),
						wl(313, 'span', sv),
						Al(314, 'ul'),
						_l(),
						Al(315, '>'),
						_l(),
						Al(316, '\n'),
						wl(317, 'span', av),
						Al(318, '<'),
						wl(319, 'span', sv),
						Al(320, 'ul'),
						_l(),
						Al(321, ' '),
						wl(322, 'span', lv),
						Al(323, 'class'),
						_l(),
						Al(324, '='),
						wl(325, 'span', uv),
						Al(326, '"col align-cm"'),
						_l(),
						Al(327, '>'),
						_l(),
						Al(328, '\n    '),
						wl(329, 'span', av),
						Al(330, '<'),
						wl(331, 'span', sv),
						Al(332, 'li'),
						_l(),
						Al(333, '>'),
						_l(),
						Al(334, 'center middle'),
						wl(335, 'span', av),
						Al(336, '</'),
						wl(337, 'span', sv),
						Al(338, 'li'),
						_l(),
						Al(339, '>'),
						_l(),
						Al(340, '\n    '),
						wl(341, 'span', av),
						Al(342, '<'),
						wl(343, 'span', sv),
						Al(344, 'li'),
						_l(),
						Al(345, '>'),
						_l(),
						Al(346, 'center middle'),
						wl(347, 'span', av),
						Al(348, '</'),
						wl(349, 'span', sv),
						Al(350, 'li'),
						_l(),
						Al(351, '>'),
						_l(),
						Al(352, '\n'),
						wl(353, 'span', av),
						Al(354, '</'),
						wl(355, 'span', sv),
						Al(356, 'ul'),
						_l(),
						Al(357, '>'),
						_l(),
						Al(358, '\n'),
						wl(359, 'span', av),
						Al(360, '<'),
						wl(361, 'span', sv),
						Al(362, 'ul'),
						_l(),
						Al(363, ' '),
						wl(364, 'span', lv),
						Al(365, 'class'),
						_l(),
						Al(366, '='),
						wl(367, 'span', uv),
						Al(368, '"col align-sa"'),
						_l(),
						Al(369, '>'),
						_l(),
						Al(370, '\n    '),
						wl(371, 'span', av),
						Al(372, '<'),
						wl(373, 'span', sv),
						Al(374, 'li'),
						_l(),
						Al(375, '>'),
						_l(),
						Al(376, 'space around'),
						wl(377, 'span', av),
						Al(378, '</'),
						wl(379, 'span', sv),
						Al(380, 'li'),
						_l(),
						Al(381, '>'),
						_l(),
						Al(382, '\n    '),
						wl(383, 'span', av),
						Al(384, '<'),
						wl(385, 'span', sv),
						Al(386, 'li'),
						_l(),
						Al(387, '>'),
						_l(),
						Al(388, 'space around'),
						wl(389, 'span', av),
						Al(390, '</'),
						wl(391, 'span', sv),
						Al(392, 'li'),
						_l(),
						Al(393, '>'),
						_l(),
						Al(394, '\n'),
						wl(395, 'span', av),
						Al(396, '</'),
						wl(397, 'span', sv),
						Al(398, 'ul'),
						_l(),
						Al(399, '>'),
						_l(),
						Al(400, '\n'),
						wl(401, 'span', av),
						Al(402, '<'),
						wl(403, 'span', sv),
						Al(404, 'ul'),
						_l(),
						Al(405, ' '),
						wl(406, 'span', lv),
						Al(407, 'class'),
						_l(),
						Al(408, '='),
						wl(409, 'span', uv),
						Al(410, '"col align-sb"'),
						_l(),
						Al(411, '>'),
						_l(),
						Al(412, '\n    '),
						wl(413, 'span', av),
						Al(414, '<'),
						wl(415, 'span', sv),
						Al(416, 'li'),
						_l(),
						Al(417, '>'),
						_l(),
						Al(418, 'space between'),
						wl(419, 'span', av),
						Al(420, '</'),
						wl(421, 'span', sv),
						Al(422, 'li'),
						_l(),
						Al(423, '>'),
						_l(),
						Al(424, '\n    '),
						wl(425, 'span', av),
						Al(426, '<'),
						wl(427, 'span', sv),
						Al(428, 'li'),
						_l(),
						Al(429, '>'),
						_l(),
						Al(430, 'space between'),
						wl(431, 'span', av),
						Al(432, '</'),
						wl(433, 'span', sv),
						Al(434, 'li'),
						_l(),
						Al(435, '>'),
						_l(),
						Al(436, '\n'),
						wl(437, 'span', av),
						Al(438, '</'),
						wl(439, 'span', sv),
						Al(440, 'ul'),
						_l(),
						Al(441, '>'),
						_l(),
						Al(442, '\n'),
						wl(443, 'span', av),
						Al(444, '<'),
						wl(445, 'span', sv),
						Al(446, 'ul'),
						_l(),
						Al(447, ' '),
						wl(448, 'span', lv),
						Al(449, 'class'),
						_l(),
						Al(450, '='),
						wl(451, 'span', uv),
						Al(452, '"col align-st"'),
						_l(),
						Al(453, '>'),
						_l(),
						Al(454, '\n    '),
						wl(455, 'span', av),
						Al(456, '<'),
						wl(457, 'span', sv),
						Al(458, 'li'),
						_l(),
						Al(459, '>'),
						_l(),
						Al(460, 'stretch'),
						wl(461, 'span', av),
						Al(462, '</'),
						wl(463, 'span', sv),
						Al(464, 'li'),
						_l(),
						Al(465, '>'),
						_l(),
						Al(466, '\n    '),
						wl(467, 'span', av),
						Al(468, '<'),
						wl(469, 'span', sv),
						Al(470, 'li'),
						_l(),
						Al(471, '>'),
						_l(),
						Al(472, 'stretch'),
						wl(473, 'span', av),
						Al(474, '</'),
						wl(475, 'span', sv),
						Al(476, 'li'),
						_l(),
						Al(477, '>'),
						_l(),
						Al(478, '\n'),
						wl(479, 'span', av),
						Al(480, '</'),
						wl(481, 'span', sv),
						Al(482, 'ul'),
						_l(),
						Al(483, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var hy = [1, 'row', 'align-l'],
				gy = [1, 'row', 'align-c'],
				my = [1, 'row', 'align-r'],
				by = [1, 'row', 'align-t'],
				vy = [1, 'row', 'align-m'],
				yy = [1, 'row', 'align-b'],
				wy = [1, 'row', 'align-cm'],
				_y = [1, 'row', 'align-sa'],
				xy = [1, 'row', 'align-sb'],
				Cy = [1, 'row', 'align-st'];
			function ky(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Container Row'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use an '),
						wl(6, 'code'),
						Al(7, '.align-[l || c || r || t || m || b || cm || sa || sb || st]'),
						_l(),
						Al(8, ' class to align ALL items in a '),
						wl(9, 'code'),
						Al(10, '.row'),
						_l(),
						Al(11, ' flex container.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'ul', hy),
						wl(14, 'li'),
						Al(15, 'left (default)'),
						_l(),
						wl(16, 'li'),
						Al(17, 'left (default)'),
						_l(),
						_l(),
						wl(18, 'ul', gy),
						wl(19, 'li'),
						Al(20, 'center'),
						_l(),
						wl(21, 'li'),
						Al(22, 'center'),
						_l(),
						_l(),
						wl(23, 'ul', my),
						wl(24, 'li'),
						Al(25, 'right'),
						_l(),
						wl(26, 'li'),
						Al(27, 'right'),
						_l(),
						_l(),
						wl(28, 'ul', by),
						wl(29, 'li'),
						Al(30, 'top (default)'),
						_l(),
						wl(31, 'li'),
						Al(32, 'top (default)'),
						_l(),
						_l(),
						wl(33, 'ul', vy),
						wl(34, 'li'),
						Al(35, 'middle'),
						_l(),
						wl(36, 'li'),
						Al(37, 'middle'),
						_l(),
						_l(),
						wl(38, 'ul', yy),
						wl(39, 'li'),
						Al(40, 'bottom'),
						_l(),
						wl(41, 'li'),
						Al(42, 'bottom'),
						_l(),
						_l(),
						wl(43, 'ul', wy),
						wl(44, 'li'),
						Al(45, 'center middle'),
						_l(),
						wl(46, 'li'),
						Al(47, 'center middle'),
						_l(),
						_l(),
						wl(48, 'ul', _y),
						wl(49, 'li'),
						Al(50, 'space around'),
						_l(),
						wl(51, 'li'),
						Al(52, 'space around'),
						_l(),
						_l(),
						wl(53, 'ul', xy),
						wl(54, 'li'),
						Al(55, 'space between'),
						_l(),
						wl(56, 'li'),
						Al(57, 'space between'),
						_l(),
						_l(),
						wl(58, 'ul', Cy),
						wl(59, 'li'),
						Al(60, 'stretch'),
						_l(),
						wl(61, 'li'),
						Al(62, 'stretch'),
						_l(),
						_l(),
						_l(),
						wl(63, 'figure'),
						wl(64, 'pre', iv),
						wl(65, 'span', av),
						Al(66, '<'),
						wl(67, 'span', sv),
						Al(68, 'ul'),
						_l(),
						Al(69, ' '),
						wl(70, 'span', lv),
						Al(71, 'class'),
						_l(),
						Al(72, '='),
						wl(73, 'span', uv),
						Al(74, '"row align-l"'),
						_l(),
						Al(75, '>'),
						_l(),
						Al(76, '\n    '),
						wl(77, 'span', av),
						Al(78, '<'),
						wl(79, 'span', sv),
						Al(80, 'li'),
						_l(),
						Al(81, '>'),
						_l(),
						Al(82, 'left (default)'),
						wl(83, 'span', av),
						Al(84, '</'),
						wl(85, 'span', sv),
						Al(86, 'li'),
						_l(),
						Al(87, '>'),
						_l(),
						Al(88, '\n    '),
						wl(89, 'span', av),
						Al(90, '<'),
						wl(91, 'span', sv),
						Al(92, 'li'),
						_l(),
						Al(93, '>'),
						_l(),
						Al(94, 'left (default)'),
						wl(95, 'span', av),
						Al(96, '</'),
						wl(97, 'span', sv),
						Al(98, 'li'),
						_l(),
						Al(99, '>'),
						_l(),
						Al(100, '\n'),
						wl(101, 'span', av),
						Al(102, '</'),
						wl(103, 'span', sv),
						Al(104, 'ul'),
						_l(),
						Al(105, '>'),
						_l(),
						Al(106, '\n'),
						wl(107, 'span', av),
						Al(108, '<'),
						wl(109, 'span', sv),
						Al(110, 'ul'),
						_l(),
						Al(111, ' '),
						wl(112, 'span', lv),
						Al(113, 'class'),
						_l(),
						Al(114, '='),
						wl(115, 'span', uv),
						Al(116, '"row align-c"'),
						_l(),
						Al(117, '>'),
						_l(),
						Al(118, '\n    '),
						wl(119, 'span', av),
						Al(120, '<'),
						wl(121, 'span', sv),
						Al(122, 'li'),
						_l(),
						Al(123, '>'),
						_l(),
						Al(124, 'center'),
						wl(125, 'span', av),
						Al(126, '</'),
						wl(127, 'span', sv),
						Al(128, 'li'),
						_l(),
						Al(129, '>'),
						_l(),
						Al(130, '\n    '),
						wl(131, 'span', av),
						Al(132, '<'),
						wl(133, 'span', sv),
						Al(134, 'li'),
						_l(),
						Al(135, '>'),
						_l(),
						Al(136, 'center'),
						wl(137, 'span', av),
						Al(138, '</'),
						wl(139, 'span', sv),
						Al(140, 'li'),
						_l(),
						Al(141, '>'),
						_l(),
						Al(142, '\n'),
						wl(143, 'span', av),
						Al(144, '</'),
						wl(145, 'span', sv),
						Al(146, 'ul'),
						_l(),
						Al(147, '>'),
						_l(),
						Al(148, '\n'),
						wl(149, 'span', av),
						Al(150, '<'),
						wl(151, 'span', sv),
						Al(152, 'ul'),
						_l(),
						Al(153, ' '),
						wl(154, 'span', lv),
						Al(155, 'class'),
						_l(),
						Al(156, '='),
						wl(157, 'span', uv),
						Al(158, '"row align-r"'),
						_l(),
						Al(159, '>'),
						_l(),
						Al(160, '\n    '),
						wl(161, 'span', av),
						Al(162, '<'),
						wl(163, 'span', sv),
						Al(164, 'li'),
						_l(),
						Al(165, '>'),
						_l(),
						Al(166, 'right'),
						wl(167, 'span', av),
						Al(168, '</'),
						wl(169, 'span', sv),
						Al(170, 'li'),
						_l(),
						Al(171, '>'),
						_l(),
						Al(172, '\n    '),
						wl(173, 'span', av),
						Al(174, '<'),
						wl(175, 'span', sv),
						Al(176, 'li'),
						_l(),
						Al(177, '>'),
						_l(),
						Al(178, 'right'),
						wl(179, 'span', av),
						Al(180, '</'),
						wl(181, 'span', sv),
						Al(182, 'li'),
						_l(),
						Al(183, '>'),
						_l(),
						Al(184, '\n'),
						wl(185, 'span', av),
						Al(186, '</'),
						wl(187, 'span', sv),
						Al(188, 'ul'),
						_l(),
						Al(189, '>'),
						_l(),
						Al(190, '\n'),
						wl(191, 'span', av),
						Al(192, '<'),
						wl(193, 'span', sv),
						Al(194, 'ul'),
						_l(),
						Al(195, ' '),
						wl(196, 'span', lv),
						Al(197, 'class'),
						_l(),
						Al(198, '='),
						wl(199, 'span', uv),
						Al(200, '"row align-t"'),
						_l(),
						Al(201, '>'),
						_l(),
						Al(202, '\n    '),
						wl(203, 'span', av),
						Al(204, '<'),
						wl(205, 'span', sv),
						Al(206, 'li'),
						_l(),
						Al(207, '>'),
						_l(),
						Al(208, 'top (default)'),
						wl(209, 'span', av),
						Al(210, '</'),
						wl(211, 'span', sv),
						Al(212, 'li'),
						_l(),
						Al(213, '>'),
						_l(),
						Al(214, '\n    '),
						wl(215, 'span', av),
						Al(216, '<'),
						wl(217, 'span', sv),
						Al(218, 'li'),
						_l(),
						Al(219, '>'),
						_l(),
						Al(220, 'top (default)'),
						wl(221, 'span', av),
						Al(222, '</'),
						wl(223, 'span', sv),
						Al(224, 'li'),
						_l(),
						Al(225, '>'),
						_l(),
						Al(226, '\n'),
						wl(227, 'span', av),
						Al(228, '</'),
						wl(229, 'span', sv),
						Al(230, 'ul'),
						_l(),
						Al(231, '>'),
						_l(),
						Al(232, '\n'),
						wl(233, 'span', av),
						Al(234, '<'),
						wl(235, 'span', sv),
						Al(236, 'ul'),
						_l(),
						Al(237, ' '),
						wl(238, 'span', lv),
						Al(239, 'class'),
						_l(),
						Al(240, '='),
						wl(241, 'span', uv),
						Al(242, '"row align-m"'),
						_l(),
						Al(243, '>'),
						_l(),
						Al(244, '\n    '),
						wl(245, 'span', av),
						Al(246, '<'),
						wl(247, 'span', sv),
						Al(248, 'li'),
						_l(),
						Al(249, '>'),
						_l(),
						Al(250, 'middle'),
						wl(251, 'span', av),
						Al(252, '</'),
						wl(253, 'span', sv),
						Al(254, 'li'),
						_l(),
						Al(255, '>'),
						_l(),
						Al(256, '\n    '),
						wl(257, 'span', av),
						Al(258, '<'),
						wl(259, 'span', sv),
						Al(260, 'li'),
						_l(),
						Al(261, '>'),
						_l(),
						Al(262, 'middle'),
						wl(263, 'span', av),
						Al(264, '</'),
						wl(265, 'span', sv),
						Al(266, 'li'),
						_l(),
						Al(267, '>'),
						_l(),
						Al(268, '\n'),
						wl(269, 'span', av),
						Al(270, '</'),
						wl(271, 'span', sv),
						Al(272, 'ul'),
						_l(),
						Al(273, '>'),
						_l(),
						Al(274, '\n'),
						wl(275, 'span', av),
						Al(276, '<'),
						wl(277, 'span', sv),
						Al(278, 'ul'),
						_l(),
						Al(279, ' '),
						wl(280, 'span', lv),
						Al(281, 'class'),
						_l(),
						Al(282, '='),
						wl(283, 'span', uv),
						Al(284, '"row align-b"'),
						_l(),
						Al(285, '>'),
						_l(),
						Al(286, '\n    '),
						wl(287, 'span', av),
						Al(288, '<'),
						wl(289, 'span', sv),
						Al(290, 'li'),
						_l(),
						Al(291, '>'),
						_l(),
						Al(292, 'bottom'),
						wl(293, 'span', av),
						Al(294, '</'),
						wl(295, 'span', sv),
						Al(296, 'li'),
						_l(),
						Al(297, '>'),
						_l(),
						Al(298, '\n    '),
						wl(299, 'span', av),
						Al(300, '<'),
						wl(301, 'span', sv),
						Al(302, 'li'),
						_l(),
						Al(303, '>'),
						_l(),
						Al(304, 'bottom'),
						wl(305, 'span', av),
						Al(306, '</'),
						wl(307, 'span', sv),
						Al(308, 'li'),
						_l(),
						Al(309, '>'),
						_l(),
						Al(310, '\n'),
						wl(311, 'span', av),
						Al(312, '</'),
						wl(313, 'span', sv),
						Al(314, 'ul'),
						_l(),
						Al(315, '>'),
						_l(),
						Al(316, '\n'),
						wl(317, 'span', av),
						Al(318, '<'),
						wl(319, 'span', sv),
						Al(320, 'ul'),
						_l(),
						Al(321, ' '),
						wl(322, 'span', lv),
						Al(323, 'class'),
						_l(),
						Al(324, '='),
						wl(325, 'span', uv),
						Al(326, '"row align-cm"'),
						_l(),
						Al(327, '>'),
						_l(),
						Al(328, '\n    '),
						wl(329, 'span', av),
						Al(330, '<'),
						wl(331, 'span', sv),
						Al(332, 'li'),
						_l(),
						Al(333, '>'),
						_l(),
						Al(334, 'center middle'),
						wl(335, 'span', av),
						Al(336, '</'),
						wl(337, 'span', sv),
						Al(338, 'li'),
						_l(),
						Al(339, '>'),
						_l(),
						Al(340, '\n    '),
						wl(341, 'span', av),
						Al(342, '<'),
						wl(343, 'span', sv),
						Al(344, 'li'),
						_l(),
						Al(345, '>'),
						_l(),
						Al(346, 'center middle'),
						wl(347, 'span', av),
						Al(348, '</'),
						wl(349, 'span', sv),
						Al(350, 'li'),
						_l(),
						Al(351, '>'),
						_l(),
						Al(352, '\n'),
						wl(353, 'span', av),
						Al(354, '</'),
						wl(355, 'span', sv),
						Al(356, 'ul'),
						_l(),
						Al(357, '>'),
						_l(),
						Al(358, '\n'),
						wl(359, 'span', av),
						Al(360, '<'),
						wl(361, 'span', sv),
						Al(362, 'ul'),
						_l(),
						Al(363, ' '),
						wl(364, 'span', lv),
						Al(365, 'class'),
						_l(),
						Al(366, '='),
						wl(367, 'span', uv),
						Al(368, '"row align-sa"'),
						_l(),
						Al(369, '>'),
						_l(),
						Al(370, '\n    '),
						wl(371, 'span', av),
						Al(372, '<'),
						wl(373, 'span', sv),
						Al(374, 'li'),
						_l(),
						Al(375, '>'),
						_l(),
						Al(376, 'space around'),
						wl(377, 'span', av),
						Al(378, '</'),
						wl(379, 'span', sv),
						Al(380, 'li'),
						_l(),
						Al(381, '>'),
						_l(),
						Al(382, '\n    '),
						wl(383, 'span', av),
						Al(384, '<'),
						wl(385, 'span', sv),
						Al(386, 'li'),
						_l(),
						Al(387, '>'),
						_l(),
						Al(388, 'space around'),
						wl(389, 'span', av),
						Al(390, '</'),
						wl(391, 'span', sv),
						Al(392, 'li'),
						_l(),
						Al(393, '>'),
						_l(),
						Al(394, '\n'),
						wl(395, 'span', av),
						Al(396, '</'),
						wl(397, 'span', sv),
						Al(398, 'ul'),
						_l(),
						Al(399, '>'),
						_l(),
						Al(400, '\n'),
						wl(401, 'span', av),
						Al(402, '<'),
						wl(403, 'span', sv),
						Al(404, 'ul'),
						_l(),
						Al(405, ' '),
						wl(406, 'span', lv),
						Al(407, 'class'),
						_l(),
						Al(408, '='),
						wl(409, 'span', uv),
						Al(410, '"row align-sb"'),
						_l(),
						Al(411, '>'),
						_l(),
						Al(412, '\n    '),
						wl(413, 'span', av),
						Al(414, '<'),
						wl(415, 'span', sv),
						Al(416, 'li'),
						_l(),
						Al(417, '>'),
						_l(),
						Al(418, 'space between'),
						wl(419, 'span', av),
						Al(420, '</'),
						wl(421, 'span', sv),
						Al(422, 'li'),
						_l(),
						Al(423, '>'),
						_l(),
						Al(424, '\n    '),
						wl(425, 'span', av),
						Al(426, '<'),
						wl(427, 'span', sv),
						Al(428, 'li'),
						_l(),
						Al(429, '>'),
						_l(),
						Al(430, 'space between'),
						wl(431, 'span', av),
						Al(432, '</'),
						wl(433, 'span', sv),
						Al(434, 'li'),
						_l(),
						Al(435, '>'),
						_l(),
						Al(436, '\n'),
						wl(437, 'span', av),
						Al(438, '</'),
						wl(439, 'span', sv),
						Al(440, 'ul'),
						_l(),
						Al(441, '>'),
						_l(),
						Al(442, '\n'),
						wl(443, 'span', av),
						Al(444, '<'),
						wl(445, 'span', sv),
						Al(446, 'ul'),
						_l(),
						Al(447, ' '),
						wl(448, 'span', lv),
						Al(449, 'class'),
						_l(),
						Al(450, '='),
						wl(451, 'span', uv),
						Al(452, '"row align-st"'),
						_l(),
						Al(453, '>'),
						_l(),
						Al(454, '\n    '),
						wl(455, 'span', av),
						Al(456, '<'),
						wl(457, 'span', sv),
						Al(458, 'li'),
						_l(),
						Al(459, '>'),
						_l(),
						Al(460, 'stretch'),
						wl(461, 'span', av),
						Al(462, '</'),
						wl(463, 'span', sv),
						Al(464, 'li'),
						_l(),
						Al(465, '>'),
						_l(),
						Al(466, '\n    '),
						wl(467, 'span', av),
						Al(468, '<'),
						wl(469, 'span', sv),
						Al(470, 'li'),
						_l(),
						Al(471, '>'),
						_l(),
						Al(472, 'stretch'),
						wl(473, 'span', av),
						Al(474, '</'),
						wl(475, 'span', sv),
						Al(476, 'li'),
						_l(),
						Al(477, '>'),
						_l(),
						Al(478, '\n'),
						wl(479, 'span', av),
						Al(480, '</'),
						wl(481, 'span', sv),
						Al(482, 'ul'),
						_l(),
						Al(483, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Sy = [1, 'item-l'],
				Py = [1, 'item-c'],
				Ey = [1, 'item-r'],
				Oy = [1, 'item-t'],
				Iy = [1, 'item-m'],
				Ty = [1, 'item-b'],
				My = [1, 'item-cm'],
				Ay = [1, 'item-st'];
			function jy(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Item Column'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use '),
						wl(6, 'code'),
						Al(7, '.item-[l || c || r || t || m || b || cm || st]'),
						_l(),
						Al(8, ' classes to align ONE child in a '),
						wl(9, 'code'),
						Al(10, '.col'),
						_l(),
						Al(11, ' flex container.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'ul', ty),
						wl(14, 'li'),
						Al(15, 'default'),
						_l(),
						wl(16, 'li', Sy),
						Al(17, 'left (default)'),
						_l(),
						_l(),
						wl(18, 'ul', ty),
						wl(19, 'li'),
						Al(20, 'default'),
						_l(),
						wl(21, 'li', Py),
						Al(22, 'center'),
						_l(),
						_l(),
						wl(23, 'ul', ty),
						wl(24, 'li'),
						Al(25, 'default'),
						_l(),
						wl(26, 'li', Ey),
						Al(27, 'right'),
						_l(),
						_l(),
						wl(28, 'ul', ty),
						wl(29, 'li'),
						Al(30, 'default'),
						_l(),
						wl(31, 'li', Oy),
						Al(32, 'top (default)'),
						_l(),
						_l(),
						wl(33, 'ul', ty),
						wl(34, 'li'),
						Al(35, 'default'),
						_l(),
						wl(36, 'li', Iy),
						Al(37, 'middle'),
						_l(),
						_l(),
						wl(38, 'ul', ty),
						wl(39, 'li'),
						Al(40, 'default'),
						_l(),
						wl(41, 'li', Ty),
						Al(42, 'bottom'),
						_l(),
						_l(),
						wl(43, 'ul', ty),
						wl(44, 'li'),
						Al(45, 'default'),
						_l(),
						wl(46, 'li', My),
						Al(47, 'center middle'),
						_l(),
						_l(),
						wl(48, 'ul', ty),
						wl(49, 'li'),
						Al(50, 'default'),
						_l(),
						wl(51, 'li', Ay),
						Al(52, 'stretch'),
						_l(),
						_l(),
						_l(),
						wl(53, 'figure'),
						wl(54, 'pre', iv),
						wl(55, 'span', av),
						Al(56, '<'),
						wl(57, 'span', sv),
						Al(58, 'ul'),
						_l(),
						Al(59, ' '),
						wl(60, 'span', lv),
						Al(61, 'class'),
						_l(),
						Al(62, '='),
						wl(63, 'span', uv),
						Al(64, '"col"'),
						_l(),
						Al(65, '>'),
						_l(),
						Al(66, '\n    '),
						wl(67, 'span', av),
						Al(68, '<'),
						wl(69, 'span', sv),
						Al(70, 'li'),
						_l(),
						Al(71, '>'),
						_l(),
						Al(72, 'default'),
						wl(73, 'span', av),
						Al(74, '</'),
						wl(75, 'span', sv),
						Al(76, 'li'),
						_l(),
						Al(77, '>'),
						_l(),
						Al(78, '\n    '),
						wl(79, 'span', av),
						Al(80, '<'),
						wl(81, 'span', sv),
						Al(82, 'li'),
						_l(),
						Al(83, ' '),
						wl(84, 'span', lv),
						Al(85, 'class'),
						_l(),
						Al(86, '='),
						wl(87, 'span', uv),
						Al(88, '"item-l"'),
						_l(),
						Al(89, '>'),
						_l(),
						Al(90, 'left (default)'),
						wl(91, 'span', av),
						Al(92, '</'),
						wl(93, 'span', sv),
						Al(94, 'li'),
						_l(),
						Al(95, '>'),
						_l(),
						Al(96, '\n'),
						wl(97, 'span', av),
						Al(98, '</'),
						wl(99, 'span', sv),
						Al(100, 'ul'),
						_l(),
						Al(101, '>'),
						_l(),
						Al(102, '\n'),
						wl(103, 'span', av),
						Al(104, '<'),
						wl(105, 'span', sv),
						Al(106, 'ul'),
						_l(),
						Al(107, ' '),
						wl(108, 'span', lv),
						Al(109, 'class'),
						_l(),
						Al(110, '='),
						wl(111, 'span', uv),
						Al(112, '"col"'),
						_l(),
						Al(113, '>'),
						_l(),
						Al(114, '\n    '),
						wl(115, 'span', av),
						Al(116, '<'),
						wl(117, 'span', sv),
						Al(118, 'li'),
						_l(),
						Al(119, '>'),
						_l(),
						Al(120, 'default'),
						wl(121, 'span', av),
						Al(122, '</'),
						wl(123, 'span', sv),
						Al(124, 'li'),
						_l(),
						Al(125, '>'),
						_l(),
						Al(126, '\n    '),
						wl(127, 'span', av),
						Al(128, '<'),
						wl(129, 'span', sv),
						Al(130, 'li'),
						_l(),
						Al(131, ' '),
						wl(132, 'span', lv),
						Al(133, 'class'),
						_l(),
						Al(134, '='),
						wl(135, 'span', uv),
						Al(136, '"item-c"'),
						_l(),
						Al(137, '>'),
						_l(),
						Al(138, 'center'),
						wl(139, 'span', av),
						Al(140, '</'),
						wl(141, 'span', sv),
						Al(142, 'li'),
						_l(),
						Al(143, '>'),
						_l(),
						Al(144, '\n'),
						wl(145, 'span', av),
						Al(146, '</'),
						wl(147, 'span', sv),
						Al(148, 'ul'),
						_l(),
						Al(149, '>'),
						_l(),
						Al(150, '\n'),
						wl(151, 'span', av),
						Al(152, '<'),
						wl(153, 'span', sv),
						Al(154, 'ul'),
						_l(),
						Al(155, ' '),
						wl(156, 'span', lv),
						Al(157, 'class'),
						_l(),
						Al(158, '='),
						wl(159, 'span', uv),
						Al(160, '"col"'),
						_l(),
						Al(161, '>'),
						_l(),
						Al(162, '\n    '),
						wl(163, 'span', av),
						Al(164, '<'),
						wl(165, 'span', sv),
						Al(166, 'li'),
						_l(),
						Al(167, '>'),
						_l(),
						Al(168, 'default'),
						wl(169, 'span', av),
						Al(170, '</'),
						wl(171, 'span', sv),
						Al(172, 'li'),
						_l(),
						Al(173, '>'),
						_l(),
						Al(174, '\n    '),
						wl(175, 'span', av),
						Al(176, '<'),
						wl(177, 'span', sv),
						Al(178, 'li'),
						_l(),
						Al(179, ' '),
						wl(180, 'span', lv),
						Al(181, 'class'),
						_l(),
						Al(182, '='),
						wl(183, 'span', uv),
						Al(184, '"item-r"'),
						_l(),
						Al(185, '>'),
						_l(),
						Al(186, 'right'),
						wl(187, 'span', av),
						Al(188, '</'),
						wl(189, 'span', sv),
						Al(190, 'li'),
						_l(),
						Al(191, '>'),
						_l(),
						Al(192, '\n'),
						wl(193, 'span', av),
						Al(194, '</'),
						wl(195, 'span', sv),
						Al(196, 'ul'),
						_l(),
						Al(197, '>'),
						_l(),
						Al(198, '\n'),
						wl(199, 'span', av),
						Al(200, '<'),
						wl(201, 'span', sv),
						Al(202, 'ul'),
						_l(),
						Al(203, ' '),
						wl(204, 'span', lv),
						Al(205, 'class'),
						_l(),
						Al(206, '='),
						wl(207, 'span', uv),
						Al(208, '"col"'),
						_l(),
						Al(209, '>'),
						_l(),
						Al(210, '\n    '),
						wl(211, 'span', av),
						Al(212, '<'),
						wl(213, 'span', sv),
						Al(214, 'li'),
						_l(),
						Al(215, '>'),
						_l(),
						Al(216, 'default'),
						wl(217, 'span', av),
						Al(218, '</'),
						wl(219, 'span', sv),
						Al(220, 'li'),
						_l(),
						Al(221, '>'),
						_l(),
						Al(222, '\n    '),
						wl(223, 'span', av),
						Al(224, '<'),
						wl(225, 'span', sv),
						Al(226, 'li'),
						_l(),
						Al(227, ' '),
						wl(228, 'span', lv),
						Al(229, 'class'),
						_l(),
						Al(230, '='),
						wl(231, 'span', uv),
						Al(232, '"item-t"'),
						_l(),
						Al(233, '>'),
						_l(),
						Al(234, 'top (default)'),
						wl(235, 'span', av),
						Al(236, '</'),
						wl(237, 'span', sv),
						Al(238, 'li'),
						_l(),
						Al(239, '>'),
						_l(),
						Al(240, '\n'),
						wl(241, 'span', av),
						Al(242, '</'),
						wl(243, 'span', sv),
						Al(244, 'ul'),
						_l(),
						Al(245, '>'),
						_l(),
						Al(246, '\n'),
						wl(247, 'span', av),
						Al(248, '<'),
						wl(249, 'span', sv),
						Al(250, 'ul'),
						_l(),
						Al(251, ' '),
						wl(252, 'span', lv),
						Al(253, 'class'),
						_l(),
						Al(254, '='),
						wl(255, 'span', uv),
						Al(256, '"col"'),
						_l(),
						Al(257, '>'),
						_l(),
						Al(258, '\n    '),
						wl(259, 'span', av),
						Al(260, '<'),
						wl(261, 'span', sv),
						Al(262, 'li'),
						_l(),
						Al(263, '>'),
						_l(),
						Al(264, 'default'),
						wl(265, 'span', av),
						Al(266, '</'),
						wl(267, 'span', sv),
						Al(268, 'li'),
						_l(),
						Al(269, '>'),
						_l(),
						Al(270, '\n    '),
						wl(271, 'span', av),
						Al(272, '<'),
						wl(273, 'span', sv),
						Al(274, 'li'),
						_l(),
						Al(275, ' '),
						wl(276, 'span', lv),
						Al(277, 'class'),
						_l(),
						Al(278, '='),
						wl(279, 'span', uv),
						Al(280, '"item-m"'),
						_l(),
						Al(281, '>'),
						_l(),
						Al(282, 'middle'),
						wl(283, 'span', av),
						Al(284, '</'),
						wl(285, 'span', sv),
						Al(286, 'li'),
						_l(),
						Al(287, '>'),
						_l(),
						Al(288, '\n'),
						wl(289, 'span', av),
						Al(290, '</'),
						wl(291, 'span', sv),
						Al(292, 'ul'),
						_l(),
						Al(293, '>'),
						_l(),
						Al(294, '\n'),
						wl(295, 'span', av),
						Al(296, '<'),
						wl(297, 'span', sv),
						Al(298, 'ul'),
						_l(),
						Al(299, ' '),
						wl(300, 'span', lv),
						Al(301, 'class'),
						_l(),
						Al(302, '='),
						wl(303, 'span', uv),
						Al(304, '"col"'),
						_l(),
						Al(305, '>'),
						_l(),
						Al(306, '\n    '),
						wl(307, 'span', av),
						Al(308, '<'),
						wl(309, 'span', sv),
						Al(310, 'li'),
						_l(),
						Al(311, '>'),
						_l(),
						Al(312, 'default'),
						wl(313, 'span', av),
						Al(314, '</'),
						wl(315, 'span', sv),
						Al(316, 'li'),
						_l(),
						Al(317, '>'),
						_l(),
						Al(318, '\n    '),
						wl(319, 'span', av),
						Al(320, '<'),
						wl(321, 'span', sv),
						Al(322, 'li'),
						_l(),
						Al(323, ' '),
						wl(324, 'span', lv),
						Al(325, 'class'),
						_l(),
						Al(326, '='),
						wl(327, 'span', uv),
						Al(328, '"item-b"'),
						_l(),
						Al(329, '>'),
						_l(),
						Al(330, 'bottom'),
						wl(331, 'span', av),
						Al(332, '</'),
						wl(333, 'span', sv),
						Al(334, 'li'),
						_l(),
						Al(335, '>'),
						_l(),
						Al(336, '\n'),
						wl(337, 'span', av),
						Al(338, '</'),
						wl(339, 'span', sv),
						Al(340, 'ul'),
						_l(),
						Al(341, '>'),
						_l(),
						Al(342, '\n'),
						wl(343, 'span', av),
						Al(344, '<'),
						wl(345, 'span', sv),
						Al(346, 'ul'),
						_l(),
						Al(347, ' '),
						wl(348, 'span', lv),
						Al(349, 'class'),
						_l(),
						Al(350, '='),
						wl(351, 'span', uv),
						Al(352, '"col"'),
						_l(),
						Al(353, '>'),
						_l(),
						Al(354, '\n    '),
						wl(355, 'span', av),
						Al(356, '<'),
						wl(357, 'span', sv),
						Al(358, 'li'),
						_l(),
						Al(359, '>'),
						_l(),
						Al(360, 'default'),
						wl(361, 'span', av),
						Al(362, '</'),
						wl(363, 'span', sv),
						Al(364, 'li'),
						_l(),
						Al(365, '>'),
						_l(),
						Al(366, '\n    '),
						wl(367, 'span', av),
						Al(368, '<'),
						wl(369, 'span', sv),
						Al(370, 'li'),
						_l(),
						Al(371, ' '),
						wl(372, 'span', lv),
						Al(373, 'class'),
						_l(),
						Al(374, '='),
						wl(375, 'span', uv),
						Al(376, '"item-cm"'),
						_l(),
						Al(377, '>'),
						_l(),
						Al(378, 'center middle'),
						wl(379, 'span', av),
						Al(380, '</'),
						wl(381, 'span', sv),
						Al(382, 'li'),
						_l(),
						Al(383, '>'),
						_l(),
						Al(384, '\n'),
						wl(385, 'span', av),
						Al(386, '</'),
						wl(387, 'span', sv),
						Al(388, 'ul'),
						_l(),
						Al(389, '>'),
						_l(),
						Al(390, '\n'),
						wl(391, 'span', av),
						Al(392, '<'),
						wl(393, 'span', sv),
						Al(394, 'ul'),
						_l(),
						Al(395, ' '),
						wl(396, 'span', lv),
						Al(397, 'class'),
						_l(),
						Al(398, '='),
						wl(399, 'span', uv),
						Al(400, '"col"'),
						_l(),
						Al(401, '>'),
						_l(),
						Al(402, '\n    '),
						wl(403, 'span', av),
						Al(404, '<'),
						wl(405, 'span', sv),
						Al(406, 'li'),
						_l(),
						Al(407, '>'),
						_l(),
						Al(408, 'default'),
						wl(409, 'span', av),
						Al(410, '</'),
						wl(411, 'span', sv),
						Al(412, 'li'),
						_l(),
						Al(413, '>'),
						_l(),
						Al(414, '\n    '),
						wl(415, 'span', av),
						Al(416, '<'),
						wl(417, 'span', sv),
						Al(418, 'li'),
						_l(),
						Al(419, ' '),
						wl(420, 'span', lv),
						Al(421, 'class'),
						_l(),
						Al(422, '='),
						wl(423, 'span', uv),
						Al(424, '"item-st"'),
						_l(),
						Al(425, '>'),
						_l(),
						Al(426, 'stretch'),
						wl(427, 'span', av),
						Al(428, '</'),
						wl(429, 'span', sv),
						Al(430, 'li'),
						_l(),
						Al(431, '>'),
						_l(),
						Al(432, '\n'),
						wl(433, 'span', av),
						Al(434, '</'),
						wl(435, 'span', sv),
						Al(436, 'ul'),
						_l(),
						Al(437, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Ry = [1, 'item-order-2'],
				Dy = [1, 'item-order-1'];
			function Ny(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Item Order'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use '),
						wl(6, 'code'),
						Al(7, '.item-order-[1 - 12]'),
						_l(),
						Al(8, ' classes to align children in a flex container.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'ul', Xv),
						wl(11, 'li', Ry),
						Al(12, '1'),
						_l(),
						wl(13, 'li', Dy),
						Al(14, '2'),
						_l(),
						_l(),
						wl(15, 'ul', ty),
						wl(16, 'li', Ry),
						Al(17, '1'),
						_l(),
						wl(18, 'li', Dy),
						Al(19, '2'),
						_l(),
						_l(),
						_l(),
						wl(20, 'figure'),
						wl(21, 'pre', iv),
						Al(22, '<ul '),
						wl(23, 'span', Ev),
						Al(24, 'class'),
						_l(),
						Al(25, '='),
						wl(26, 'span', Ov),
						Al(27, '"row"'),
						_l(),
						Al(28, '>\n    <'),
						wl(29, 'span', Ev),
						Al(30, 'li'),
						_l(),
						Al(31, ' '),
						wl(32, 'span', Ev),
						Al(33, 'class'),
						_l(),
						Al(34, '='),
						wl(35, 'span', Ov),
						Al(36, '"item-order-2"'),
						_l(),
						Al(37, '>1</'),
						wl(38, 'span', Ev),
						Al(39, 'li'),
						_l(),
						Al(40, '>\n    <'),
						wl(41, 'span', Ev),
						Al(42, 'li'),
						_l(),
						Al(43, ' '),
						wl(44, 'span', Ev),
						Al(45, 'class'),
						_l(),
						Al(46, '='),
						wl(47, 'span', Ov),
						Al(48, '"item-order-1"'),
						_l(),
						Al(49, '>2</'),
						wl(50, 'span', Ev),
						Al(51, 'li'),
						_l(),
						Al(52, '>\n</ul>\n<ul '),
						wl(53, 'span', Ev),
						Al(54, 'class'),
						_l(),
						Al(55, '='),
						wl(56, 'span', Ov),
						Al(57, '"col"'),
						_l(),
						Al(58, '>\n    <'),
						wl(59, 'span', Ev),
						Al(60, 'li'),
						_l(),
						Al(61, ' '),
						wl(62, 'span', Ev),
						Al(63, 'class'),
						_l(),
						Al(64, '='),
						wl(65, 'span', Ov),
						Al(66, '"item-order-2"'),
						_l(),
						Al(67, '>1</'),
						wl(68, 'span', Ev),
						Al(69, 'li'),
						_l(),
						Al(70, '>\n    <'),
						wl(71, 'span', Ev),
						Al(72, 'li'),
						_l(),
						Al(73, ' '),
						wl(74, 'span', Ev),
						Al(75, 'class'),
						_l(),
						Al(76, '='),
						wl(77, 'span', Ov),
						Al(78, '"item-order-1"'),
						_l(),
						Al(79, '>2</'),
						wl(80, 'span', Ev),
						Al(81, 'li'),
						_l(),
						Al(82, '>\n</ul>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function Uy(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Item Row'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use an '),
						wl(6, 'code'),
						Al(7, '.item-[l || c || r || t || m || b || cm || st]'),
						_l(),
						Al(8, ' class to align ONE child in a '),
						wl(9, 'code'),
						Al(10, '.row'),
						_l(),
						Al(11, ' flex container.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'ul', Xv),
						wl(14, 'li'),
						Al(15, 'default'),
						_l(),
						wl(16, 'li', Sy),
						Al(17, 'left (default)'),
						_l(),
						_l(),
						wl(18, 'ul', Xv),
						wl(19, 'li'),
						Al(20, 'default'),
						_l(),
						wl(21, 'li', Py),
						Al(22, 'center'),
						_l(),
						_l(),
						wl(23, 'ul', Xv),
						wl(24, 'li'),
						Al(25, 'default'),
						_l(),
						wl(26, 'li', Ey),
						Al(27, 'right'),
						_l(),
						_l(),
						wl(28, 'ul', Xv),
						wl(29, 'li'),
						Al(30, 'default'),
						_l(),
						wl(31, 'li', Oy),
						Al(32, 'top (default)'),
						_l(),
						_l(),
						wl(33, 'ul', Xv),
						wl(34, 'li'),
						Al(35, 'default'),
						_l(),
						wl(36, 'li', Iy),
						Al(37, 'middle'),
						_l(),
						_l(),
						wl(38, 'ul', Xv),
						wl(39, 'li'),
						Al(40, 'default'),
						_l(),
						wl(41, 'li', Ty),
						Al(42, 'bottom'),
						_l(),
						_l(),
						wl(43, 'ul', Xv),
						wl(44, 'li'),
						Al(45, 'default'),
						_l(),
						wl(46, 'li', My),
						Al(47, 'center middle'),
						_l(),
						_l(),
						wl(48, 'ul', Xv),
						wl(49, 'li'),
						Al(50, 'default'),
						_l(),
						wl(51, 'li', Ay),
						Al(52, 'stretch'),
						_l(),
						_l(),
						_l(),
						wl(53, 'figure'),
						wl(54, 'pre', iv),
						wl(55, 'span', av),
						Al(56, '<'),
						wl(57, 'span', sv),
						Al(58, 'ul'),
						_l(),
						Al(59, ' '),
						wl(60, 'span', lv),
						Al(61, 'class'),
						_l(),
						Al(62, '='),
						wl(63, 'span', uv),
						Al(64, '"row"'),
						_l(),
						Al(65, '>'),
						_l(),
						Al(66, '\n    '),
						wl(67, 'span', av),
						Al(68, '<'),
						wl(69, 'span', sv),
						Al(70, 'li'),
						_l(),
						Al(71, '>'),
						_l(),
						Al(72, 'default'),
						wl(73, 'span', av),
						Al(74, '</'),
						wl(75, 'span', sv),
						Al(76, 'li'),
						_l(),
						Al(77, '>'),
						_l(),
						Al(78, '\n    '),
						wl(79, 'span', av),
						Al(80, '<'),
						wl(81, 'span', sv),
						Al(82, 'li'),
						_l(),
						Al(83, ' '),
						wl(84, 'span', lv),
						Al(85, 'class'),
						_l(),
						Al(86, '='),
						wl(87, 'span', uv),
						Al(88, '"item-l"'),
						_l(),
						Al(89, '>'),
						_l(),
						Al(90, 'left (default)'),
						wl(91, 'span', av),
						Al(92, '</'),
						wl(93, 'span', sv),
						Al(94, 'li'),
						_l(),
						Al(95, '>'),
						_l(),
						Al(96, '\n'),
						wl(97, 'span', av),
						Al(98, '</'),
						wl(99, 'span', sv),
						Al(100, 'ul'),
						_l(),
						Al(101, '>'),
						_l(),
						Al(102, '\n'),
						wl(103, 'span', av),
						Al(104, '<'),
						wl(105, 'span', sv),
						Al(106, 'ul'),
						_l(),
						Al(107, ' '),
						wl(108, 'span', lv),
						Al(109, 'class'),
						_l(),
						Al(110, '='),
						wl(111, 'span', uv),
						Al(112, '"row"'),
						_l(),
						Al(113, '>'),
						_l(),
						Al(114, '\n    '),
						wl(115, 'span', av),
						Al(116, '<'),
						wl(117, 'span', sv),
						Al(118, 'li'),
						_l(),
						Al(119, '>'),
						_l(),
						Al(120, 'default'),
						wl(121, 'span', av),
						Al(122, '</'),
						wl(123, 'span', sv),
						Al(124, 'li'),
						_l(),
						Al(125, '>'),
						_l(),
						Al(126, '\n    '),
						wl(127, 'span', av),
						Al(128, '<'),
						wl(129, 'span', sv),
						Al(130, 'li'),
						_l(),
						Al(131, ' '),
						wl(132, 'span', lv),
						Al(133, 'class'),
						_l(),
						Al(134, '='),
						wl(135, 'span', uv),
						Al(136, '"item-c"'),
						_l(),
						Al(137, '>'),
						_l(),
						Al(138, 'center'),
						wl(139, 'span', av),
						Al(140, '</'),
						wl(141, 'span', sv),
						Al(142, 'li'),
						_l(),
						Al(143, '>'),
						_l(),
						Al(144, '\n'),
						wl(145, 'span', av),
						Al(146, '</'),
						wl(147, 'span', sv),
						Al(148, 'ul'),
						_l(),
						Al(149, '>'),
						_l(),
						Al(150, '\n'),
						wl(151, 'span', av),
						Al(152, '<'),
						wl(153, 'span', sv),
						Al(154, 'ul'),
						_l(),
						Al(155, ' '),
						wl(156, 'span', lv),
						Al(157, 'class'),
						_l(),
						Al(158, '='),
						wl(159, 'span', uv),
						Al(160, '"row"'),
						_l(),
						Al(161, '>'),
						_l(),
						Al(162, '\n    '),
						wl(163, 'span', av),
						Al(164, '<'),
						wl(165, 'span', sv),
						Al(166, 'li'),
						_l(),
						Al(167, '>'),
						_l(),
						Al(168, 'default'),
						wl(169, 'span', av),
						Al(170, '</'),
						wl(171, 'span', sv),
						Al(172, 'li'),
						_l(),
						Al(173, '>'),
						_l(),
						Al(174, '\n    '),
						wl(175, 'span', av),
						Al(176, '<'),
						wl(177, 'span', sv),
						Al(178, 'li'),
						_l(),
						Al(179, ' '),
						wl(180, 'span', lv),
						Al(181, 'class'),
						_l(),
						Al(182, '='),
						wl(183, 'span', uv),
						Al(184, '"item-r"'),
						_l(),
						Al(185, '>'),
						_l(),
						Al(186, 'right'),
						wl(187, 'span', av),
						Al(188, '</'),
						wl(189, 'span', sv),
						Al(190, 'li'),
						_l(),
						Al(191, '>'),
						_l(),
						Al(192, '\n'),
						wl(193, 'span', av),
						Al(194, '</'),
						wl(195, 'span', sv),
						Al(196, 'ul'),
						_l(),
						Al(197, '>'),
						_l(),
						Al(198, '\n'),
						wl(199, 'span', av),
						Al(200, '<'),
						wl(201, 'span', sv),
						Al(202, 'ul'),
						_l(),
						Al(203, ' '),
						wl(204, 'span', lv),
						Al(205, 'class'),
						_l(),
						Al(206, '='),
						wl(207, 'span', uv),
						Al(208, '"row"'),
						_l(),
						Al(209, '>'),
						_l(),
						Al(210, '\n    '),
						wl(211, 'span', av),
						Al(212, '<'),
						wl(213, 'span', sv),
						Al(214, 'li'),
						_l(),
						Al(215, '>'),
						_l(),
						Al(216, 'default'),
						wl(217, 'span', av),
						Al(218, '</'),
						wl(219, 'span', sv),
						Al(220, 'li'),
						_l(),
						Al(221, '>'),
						_l(),
						Al(222, '\n    '),
						wl(223, 'span', av),
						Al(224, '<'),
						wl(225, 'span', sv),
						Al(226, 'li'),
						_l(),
						Al(227, ' '),
						wl(228, 'span', lv),
						Al(229, 'class'),
						_l(),
						Al(230, '='),
						wl(231, 'span', uv),
						Al(232, '"item-t"'),
						_l(),
						Al(233, '>'),
						_l(),
						Al(234, 'top (default)'),
						wl(235, 'span', av),
						Al(236, '</'),
						wl(237, 'span', sv),
						Al(238, 'li'),
						_l(),
						Al(239, '>'),
						_l(),
						Al(240, '\n'),
						wl(241, 'span', av),
						Al(242, '</'),
						wl(243, 'span', sv),
						Al(244, 'ul'),
						_l(),
						Al(245, '>'),
						_l(),
						Al(246, '\n'),
						wl(247, 'span', av),
						Al(248, '<'),
						wl(249, 'span', sv),
						Al(250, 'ul'),
						_l(),
						Al(251, ' '),
						wl(252, 'span', lv),
						Al(253, 'class'),
						_l(),
						Al(254, '='),
						wl(255, 'span', uv),
						Al(256, '"row"'),
						_l(),
						Al(257, '>'),
						_l(),
						Al(258, '\n    '),
						wl(259, 'span', av),
						Al(260, '<'),
						wl(261, 'span', sv),
						Al(262, 'li'),
						_l(),
						Al(263, '>'),
						_l(),
						Al(264, 'default'),
						wl(265, 'span', av),
						Al(266, '</'),
						wl(267, 'span', sv),
						Al(268, 'li'),
						_l(),
						Al(269, '>'),
						_l(),
						Al(270, '\n    '),
						wl(271, 'span', av),
						Al(272, '<'),
						wl(273, 'span', sv),
						Al(274, 'li'),
						_l(),
						Al(275, ' '),
						wl(276, 'span', lv),
						Al(277, 'class'),
						_l(),
						Al(278, '='),
						wl(279, 'span', uv),
						Al(280, '"item-m"'),
						_l(),
						Al(281, '>'),
						_l(),
						Al(282, 'middle'),
						wl(283, 'span', av),
						Al(284, '</'),
						wl(285, 'span', sv),
						Al(286, 'li'),
						_l(),
						Al(287, '>'),
						_l(),
						Al(288, '\n'),
						wl(289, 'span', av),
						Al(290, '</'),
						wl(291, 'span', sv),
						Al(292, 'ul'),
						_l(),
						Al(293, '>'),
						_l(),
						Al(294, '\n'),
						wl(295, 'span', av),
						Al(296, '<'),
						wl(297, 'span', sv),
						Al(298, 'ul'),
						_l(),
						Al(299, ' '),
						wl(300, 'span', lv),
						Al(301, 'class'),
						_l(),
						Al(302, '='),
						wl(303, 'span', uv),
						Al(304, '"row"'),
						_l(),
						Al(305, '>'),
						_l(),
						Al(306, '\n    '),
						wl(307, 'span', av),
						Al(308, '<'),
						wl(309, 'span', sv),
						Al(310, 'li'),
						_l(),
						Al(311, '>'),
						_l(),
						Al(312, 'default'),
						wl(313, 'span', av),
						Al(314, '</'),
						wl(315, 'span', sv),
						Al(316, 'li'),
						_l(),
						Al(317, '>'),
						_l(),
						Al(318, '\n    '),
						wl(319, 'span', av),
						Al(320, '<'),
						wl(321, 'span', sv),
						Al(322, 'li'),
						_l(),
						Al(323, ' '),
						wl(324, 'span', lv),
						Al(325, 'class'),
						_l(),
						Al(326, '='),
						wl(327, 'span', uv),
						Al(328, '"item-b"'),
						_l(),
						Al(329, '>'),
						_l(),
						Al(330, 'bottom'),
						wl(331, 'span', av),
						Al(332, '</'),
						wl(333, 'span', sv),
						Al(334, 'li'),
						_l(),
						Al(335, '>'),
						_l(),
						Al(336, '\n'),
						wl(337, 'span', av),
						Al(338, '</'),
						wl(339, 'span', sv),
						Al(340, 'ul'),
						_l(),
						Al(341, '>'),
						_l(),
						Al(342, '\n'),
						wl(343, 'span', av),
						Al(344, '<'),
						wl(345, 'span', sv),
						Al(346, 'ul'),
						_l(),
						Al(347, ' '),
						wl(348, 'span', lv),
						Al(349, 'class'),
						_l(),
						Al(350, '='),
						wl(351, 'span', uv),
						Al(352, '"row"'),
						_l(),
						Al(353, '>'),
						_l(),
						Al(354, '\n    '),
						wl(355, 'span', av),
						Al(356, '<'),
						wl(357, 'span', sv),
						Al(358, 'li'),
						_l(),
						Al(359, '>'),
						_l(),
						Al(360, 'default'),
						wl(361, 'span', av),
						Al(362, '</'),
						wl(363, 'span', sv),
						Al(364, 'li'),
						_l(),
						Al(365, '>'),
						_l(),
						Al(366, '\n    '),
						wl(367, 'span', av),
						Al(368, '<'),
						wl(369, 'span', sv),
						Al(370, 'li'),
						_l(),
						Al(371, ' '),
						wl(372, 'span', lv),
						Al(373, 'class'),
						_l(),
						Al(374, '='),
						wl(375, 'span', uv),
						Al(376, '"item-cm"'),
						_l(),
						Al(377, '>'),
						_l(),
						Al(378, 'center middle'),
						wl(379, 'span', av),
						Al(380, '</'),
						wl(381, 'span', sv),
						Al(382, 'li'),
						_l(),
						Al(383, '>'),
						_l(),
						Al(384, '\n'),
						wl(385, 'span', av),
						Al(386, '</'),
						wl(387, 'span', sv),
						Al(388, 'ul'),
						_l(),
						Al(389, '>'),
						_l(),
						Al(390, '\n'),
						wl(391, 'span', av),
						Al(392, '<'),
						wl(393, 'span', sv),
						Al(394, 'ul'),
						_l(),
						Al(395, ' '),
						wl(396, 'span', lv),
						Al(397, 'class'),
						_l(),
						Al(398, '='),
						wl(399, 'span', uv),
						Al(400, '"row"'),
						_l(),
						Al(401, '>'),
						_l(),
						Al(402, '\n    '),
						wl(403, 'span', av),
						Al(404, '<'),
						wl(405, 'span', sv),
						Al(406, 'li'),
						_l(),
						Al(407, '>'),
						_l(),
						Al(408, 'default'),
						wl(409, 'span', av),
						Al(410, '</'),
						wl(411, 'span', sv),
						Al(412, 'li'),
						_l(),
						Al(413, '>'),
						_l(),
						Al(414, '\n    '),
						wl(415, 'span', av),
						Al(416, '<'),
						wl(417, 'span', sv),
						Al(418, 'li'),
						_l(),
						Al(419, ' '),
						wl(420, 'span', lv),
						Al(421, 'class'),
						_l(),
						Al(422, '='),
						wl(423, 'span', uv),
						Al(424, '"item-st"'),
						_l(),
						Al(425, '>'),
						_l(),
						Al(426, 'stretch'),
						wl(427, 'span', av),
						Al(428, '</'),
						wl(429, 'span', sv),
						Al(430, 'li'),
						_l(),
						Al(431, '>'),
						_l(),
						Al(432, '\n'),
						wl(433, 'span', av),
						Al(434, '</'),
						wl(435, 'span', sv),
						Al(436, 'ul'),
						_l(),
						Al(437, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Ly = [1, 'item-g-1'],
				Hy = [1, 'item-s-1'],
				zy = [1, 'item-gs-1'];
			function Vy(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Item Size'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use '),
						wl(6, 'code'),
						Al(7, '.item-[g || s || gs]-[1 - 12]'),
						_l(),
						Al(8, ' classes to grow and/or shrink children in a flex container.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'ul', Xv),
						wl(11, 'li'),
						Al(12, 'default'),
						_l(),
						wl(13, 'li', Ly),
						Al(14, 'grow'),
						_l(),
						_l(),
						wl(15, 'ul', Xv),
						wl(16, 'li'),
						Al(17, 'default'),
						_l(),
						wl(18, 'li', Hy),
						Al(19, 'shrink'),
						_l(),
						_l(),
						wl(20, 'ul', Xv),
						wl(21, 'li'),
						Al(22, 'default'),
						_l(),
						wl(23, 'li', zy),
						Al(24, 'grow & shrink'),
						_l(),
						_l(),
						wl(25, 'ul', ty),
						wl(26, 'li'),
						Al(27, 'default'),
						_l(),
						wl(28, 'li', Ly),
						Al(29, 'grow'),
						_l(),
						_l(),
						wl(30, 'ul', ty),
						wl(31, 'li'),
						Al(32, 'default'),
						_l(),
						wl(33, 'li', Hy),
						Al(34, 'shrink'),
						_l(),
						_l(),
						wl(35, 'ul', ty),
						wl(36, 'li'),
						Al(37, 'default'),
						_l(),
						wl(38, 'li', zy),
						Al(39, 'grow & shrink'),
						_l(),
						_l(),
						_l(),
						wl(40, 'figure'),
						wl(41, 'pre', iv),
						wl(42, 'span', av),
						Al(43, '<'),
						wl(44, 'span', sv),
						Al(45, 'ul'),
						_l(),
						Al(46, ' '),
						wl(47, 'span', lv),
						Al(48, 'class'),
						_l(),
						Al(49, '='),
						wl(50, 'span', uv),
						Al(51, '"row"'),
						_l(),
						Al(52, '>'),
						_l(),
						Al(53, '\n    '),
						wl(54, 'span', av),
						Al(55, '<'),
						wl(56, 'span', sv),
						Al(57, 'li'),
						_l(),
						Al(58, '>'),
						_l(),
						Al(59, 'default'),
						wl(60, 'span', av),
						Al(61, '</'),
						wl(62, 'span', sv),
						Al(63, 'li'),
						_l(),
						Al(64, '>'),
						_l(),
						Al(65, '\n    '),
						wl(66, 'span', av),
						Al(67, '<'),
						wl(68, 'span', sv),
						Al(69, 'li'),
						_l(),
						Al(70, ' '),
						wl(71, 'span', lv),
						Al(72, 'class'),
						_l(),
						Al(73, '='),
						wl(74, 'span', uv),
						Al(75, '"item-g-1"'),
						_l(),
						Al(76, '>'),
						_l(),
						Al(77, 'grow'),
						wl(78, 'span', av),
						Al(79, '</'),
						wl(80, 'span', sv),
						Al(81, 'li'),
						_l(),
						Al(82, '>'),
						_l(),
						Al(83, '\n'),
						wl(84, 'span', av),
						Al(85, '</'),
						wl(86, 'span', sv),
						Al(87, 'ul'),
						_l(),
						Al(88, '>'),
						_l(),
						Al(89, '\n'),
						wl(90, 'span', av),
						Al(91, '<'),
						wl(92, 'span', sv),
						Al(93, 'ul'),
						_l(),
						Al(94, ' '),
						wl(95, 'span', lv),
						Al(96, 'class'),
						_l(),
						Al(97, '='),
						wl(98, 'span', uv),
						Al(99, '"row"'),
						_l(),
						Al(100, '>'),
						_l(),
						Al(101, '\n    '),
						wl(102, 'span', av),
						Al(103, '<'),
						wl(104, 'span', sv),
						Al(105, 'li'),
						_l(),
						Al(106, '>'),
						_l(),
						Al(107, 'default'),
						wl(108, 'span', av),
						Al(109, '</'),
						wl(110, 'span', sv),
						Al(111, 'li'),
						_l(),
						Al(112, '>'),
						_l(),
						Al(113, '\n    '),
						wl(114, 'span', av),
						Al(115, '<'),
						wl(116, 'span', sv),
						Al(117, 'li'),
						_l(),
						Al(118, ' '),
						wl(119, 'span', lv),
						Al(120, 'class'),
						_l(),
						Al(121, '='),
						wl(122, 'span', uv),
						Al(123, '"item-s-1"'),
						_l(),
						Al(124, '>'),
						_l(),
						Al(125, 'shrink'),
						wl(126, 'span', av),
						Al(127, '</'),
						wl(128, 'span', sv),
						Al(129, 'li'),
						_l(),
						Al(130, '>'),
						_l(),
						Al(131, '\n'),
						wl(132, 'span', av),
						Al(133, '</'),
						wl(134, 'span', sv),
						Al(135, 'ul'),
						_l(),
						Al(136, '>'),
						_l(),
						Al(137, '\n'),
						wl(138, 'span', av),
						Al(139, '<'),
						wl(140, 'span', sv),
						Al(141, 'ul'),
						_l(),
						Al(142, ' '),
						wl(143, 'span', lv),
						Al(144, 'class'),
						_l(),
						Al(145, '='),
						wl(146, 'span', uv),
						Al(147, '"row"'),
						_l(),
						Al(148, '>'),
						_l(),
						Al(149, '\n    '),
						wl(150, 'span', av),
						Al(151, '<'),
						wl(152, 'span', sv),
						Al(153, 'li'),
						_l(),
						Al(154, '>'),
						_l(),
						Al(155, 'default'),
						wl(156, 'span', av),
						Al(157, '</'),
						wl(158, 'span', sv),
						Al(159, 'li'),
						_l(),
						Al(160, '>'),
						_l(),
						Al(161, '\n    '),
						wl(162, 'span', av),
						Al(163, '<'),
						wl(164, 'span', sv),
						Al(165, 'li'),
						_l(),
						Al(166, ' '),
						wl(167, 'span', lv),
						Al(168, 'class'),
						_l(),
						Al(169, '='),
						wl(170, 'span', uv),
						Al(171, '"item-gs-1"'),
						_l(),
						Al(172, '>'),
						_l(),
						Al(173, 'grow &amp; shrink'),
						wl(174, 'span', av),
						Al(175, '</'),
						wl(176, 'span', sv),
						Al(177, 'li'),
						_l(),
						Al(178, '>'),
						_l(),
						Al(179, '\n'),
						wl(180, 'span', av),
						Al(181, '</'),
						wl(182, 'span', sv),
						Al(183, 'ul'),
						_l(),
						Al(184, '>'),
						_l(),
						Al(185, '\n'),
						wl(186, 'span', av),
						Al(187, '<'),
						wl(188, 'span', sv),
						Al(189, 'ul'),
						_l(),
						Al(190, ' '),
						wl(191, 'span', lv),
						Al(192, 'class'),
						_l(),
						Al(193, '='),
						wl(194, 'span', uv),
						Al(195, '"col"'),
						_l(),
						Al(196, '>'),
						_l(),
						Al(197, '\n    '),
						wl(198, 'span', av),
						Al(199, '<'),
						wl(200, 'span', sv),
						Al(201, 'li'),
						_l(),
						Al(202, '>'),
						_l(),
						Al(203, 'default'),
						wl(204, 'span', av),
						Al(205, '</'),
						wl(206, 'span', sv),
						Al(207, 'li'),
						_l(),
						Al(208, '>'),
						_l(),
						Al(209, '\n    '),
						wl(210, 'span', av),
						Al(211, '<'),
						wl(212, 'span', sv),
						Al(213, 'li'),
						_l(),
						Al(214, ' '),
						wl(215, 'span', lv),
						Al(216, 'class'),
						_l(),
						Al(217, '='),
						wl(218, 'span', uv),
						Al(219, '"item-g-1"'),
						_l(),
						Al(220, '>'),
						_l(),
						Al(221, 'grow'),
						wl(222, 'span', av),
						Al(223, '</'),
						wl(224, 'span', sv),
						Al(225, 'li'),
						_l(),
						Al(226, '>'),
						_l(),
						Al(227, '\n'),
						wl(228, 'span', av),
						Al(229, '</'),
						wl(230, 'span', sv),
						Al(231, 'ul'),
						_l(),
						Al(232, '>'),
						_l(),
						Al(233, '\n'),
						wl(234, 'span', av),
						Al(235, '<'),
						wl(236, 'span', sv),
						Al(237, 'ul'),
						_l(),
						Al(238, ' '),
						wl(239, 'span', lv),
						Al(240, 'class'),
						_l(),
						Al(241, '='),
						wl(242, 'span', uv),
						Al(243, '"col"'),
						_l(),
						Al(244, '>'),
						_l(),
						Al(245, '\n    '),
						wl(246, 'span', av),
						Al(247, '<'),
						wl(248, 'span', sv),
						Al(249, 'li'),
						_l(),
						Al(250, '>'),
						_l(),
						Al(251, 'default'),
						wl(252, 'span', av),
						Al(253, '</'),
						wl(254, 'span', sv),
						Al(255, 'li'),
						_l(),
						Al(256, '>'),
						_l(),
						Al(257, '\n    '),
						wl(258, 'span', av),
						Al(259, '<'),
						wl(260, 'span', sv),
						Al(261, 'li'),
						_l(),
						Al(262, ' '),
						wl(263, 'span', lv),
						Al(264, 'class'),
						_l(),
						Al(265, '='),
						wl(266, 'span', uv),
						Al(267, '"item-s-1"'),
						_l(),
						Al(268, '>'),
						_l(),
						Al(269, 'shrink'),
						wl(270, 'span', av),
						Al(271, '</'),
						wl(272, 'span', sv),
						Al(273, 'li'),
						_l(),
						Al(274, '>'),
						_l(),
						Al(275, '\n'),
						wl(276, 'span', av),
						Al(277, '</'),
						wl(278, 'span', sv),
						Al(279, 'ul'),
						_l(),
						Al(280, '>'),
						_l(),
						Al(281, '\n'),
						wl(282, 'span', av),
						Al(283, '<'),
						wl(284, 'span', sv),
						Al(285, 'ul'),
						_l(),
						Al(286, ' '),
						wl(287, 'span', lv),
						Al(288, 'class'),
						_l(),
						Al(289, '='),
						wl(290, 'span', uv),
						Al(291, '"col"'),
						_l(),
						Al(292, '>'),
						_l(),
						Al(293, '\n    '),
						wl(294, 'span', av),
						Al(295, '<'),
						wl(296, 'span', sv),
						Al(297, 'li'),
						_l(),
						Al(298, '>'),
						_l(),
						Al(299, 'default'),
						wl(300, 'span', av),
						Al(301, '</'),
						wl(302, 'span', sv),
						Al(303, 'li'),
						_l(),
						Al(304, '>'),
						_l(),
						Al(305, '\n    '),
						wl(306, 'span', av),
						Al(307, '<'),
						wl(308, 'span', sv),
						Al(309, 'li'),
						_l(),
						Al(310, ' '),
						wl(311, 'span', lv),
						Al(312, 'class'),
						_l(),
						Al(313, '='),
						wl(314, 'span', uv),
						Al(315, '"item-gs-1"'),
						_l(),
						Al(316, '>'),
						_l(),
						Al(317, 'grow &amp; shrink'),
						wl(318, 'span', av),
						Al(319, '</'),
						wl(320, 'span', sv),
						Al(321, 'li'),
						_l(),
						Al(322, '>'),
						_l(),
						Al(323, '\n'),
						wl(324, 'span', av),
						Al(325, '</'),
						wl(326, 'span', sv),
						Al(327, 'ul'),
						_l(),
						Al(328, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Fy = [1, 'col', 'wrap-c'],
				By = [1, 'col', 'wrap-l'],
				qy = [1, 'col', 'wrap-r'],
				Gy = [1, 'col', 'wrap-sa'],
				Zy = [1, 'col', 'wrap-sb'],
				Wy = [1, 'col', 'wrap-st'];
			function Qy(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Wrap Column'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use a '),
						wl(6, 'code'),
						Al(7, '.wrap-[c || l || r || sa || sb || st]'),
						_l(),
						Al(8, ' class to align multi-column items in a '),
						wl(9, 'code'),
						Al(10, '.col'),
						_l(),
						Al(11, ' flex container.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'ul', Fy),
						wl(14, 'li'),
						Al(15, 'center'),
						_l(),
						wl(16, 'li'),
						Al(17, 'center'),
						_l(),
						wl(18, 'li'),
						Al(19, 'center'),
						_l(),
						_l(),
						wl(20, 'ul', By),
						wl(21, 'li'),
						Al(22, 'left (default)'),
						_l(),
						wl(23, 'li'),
						Al(24, 'left (default)'),
						_l(),
						wl(25, 'li'),
						Al(26, 'left (default)'),
						_l(),
						_l(),
						wl(27, 'ul', qy),
						wl(28, 'li'),
						Al(29, 'right'),
						_l(),
						wl(30, 'li'),
						Al(31, 'right'),
						_l(),
						wl(32, 'li'),
						Al(33, 'right'),
						_l(),
						_l(),
						wl(34, 'ul', Gy),
						wl(35, 'li'),
						Al(36, 'space around'),
						_l(),
						wl(37, 'li'),
						Al(38, 'space around'),
						_l(),
						wl(39, 'li'),
						Al(40, 'space around'),
						_l(),
						_l(),
						wl(41, 'ul', Zy),
						wl(42, 'li'),
						Al(43, 'space between'),
						_l(),
						wl(44, 'li'),
						Al(45, 'space between'),
						_l(),
						wl(46, 'li'),
						Al(47, 'space between'),
						_l(),
						_l(),
						wl(48, 'ul', Wy),
						wl(49, 'li'),
						Al(50, 'stretch'),
						_l(),
						wl(51, 'li'),
						Al(52, 'stretch'),
						_l(),
						wl(53, 'li'),
						Al(54, 'stretch'),
						_l(),
						_l(),
						_l(),
						wl(55, 'figure'),
						wl(56, 'pre', iv),
						wl(57, 'span', av),
						Al(58, '<'),
						wl(59, 'span', sv),
						Al(60, 'ul'),
						_l(),
						Al(61, ' '),
						wl(62, 'span', lv),
						Al(63, 'class'),
						_l(),
						Al(64, '='),
						wl(65, 'span', uv),
						Al(66, '"col wrap-c"'),
						_l(),
						Al(67, '>'),
						_l(),
						Al(68, '\n    '),
						wl(69, 'span', av),
						Al(70, '<'),
						wl(71, 'span', sv),
						Al(72, 'li'),
						_l(),
						Al(73, '>'),
						_l(),
						Al(74, 'center'),
						wl(75, 'span', av),
						Al(76, '</'),
						wl(77, 'span', sv),
						Al(78, 'li'),
						_l(),
						Al(79, '>'),
						_l(),
						Al(80, '\n    '),
						wl(81, 'span', av),
						Al(82, '<'),
						wl(83, 'span', sv),
						Al(84, 'li'),
						_l(),
						Al(85, '>'),
						_l(),
						Al(86, 'center'),
						wl(87, 'span', av),
						Al(88, '</'),
						wl(89, 'span', sv),
						Al(90, 'li'),
						_l(),
						Al(91, '>'),
						_l(),
						Al(92, '\n    '),
						wl(93, 'span', av),
						Al(94, '<'),
						wl(95, 'span', sv),
						Al(96, 'li'),
						_l(),
						Al(97, '>'),
						_l(),
						Al(98, 'center'),
						wl(99, 'span', av),
						Al(100, '</'),
						wl(101, 'span', sv),
						Al(102, 'li'),
						_l(),
						Al(103, '>'),
						_l(),
						Al(104, '\n'),
						wl(105, 'span', av),
						Al(106, '</'),
						wl(107, 'span', sv),
						Al(108, 'ul'),
						_l(),
						Al(109, '>'),
						_l(),
						Al(110, '\n'),
						wl(111, 'span', av),
						Al(112, '<'),
						wl(113, 'span', sv),
						Al(114, 'ul'),
						_l(),
						Al(115, ' '),
						wl(116, 'span', lv),
						Al(117, 'class'),
						_l(),
						Al(118, '='),
						wl(119, 'span', uv),
						Al(120, '"col wrap-l"'),
						_l(),
						Al(121, '>'),
						_l(),
						Al(122, '\n    '),
						wl(123, 'span', av),
						Al(124, '<'),
						wl(125, 'span', sv),
						Al(126, 'li'),
						_l(),
						Al(127, '>'),
						_l(),
						Al(128, 'left (default)'),
						wl(129, 'span', av),
						Al(130, '</'),
						wl(131, 'span', sv),
						Al(132, 'li'),
						_l(),
						Al(133, '>'),
						_l(),
						Al(134, '\n    '),
						wl(135, 'span', av),
						Al(136, '<'),
						wl(137, 'span', sv),
						Al(138, 'li'),
						_l(),
						Al(139, '>'),
						_l(),
						Al(140, 'left (default)'),
						wl(141, 'span', av),
						Al(142, '</'),
						wl(143, 'span', sv),
						Al(144, 'li'),
						_l(),
						Al(145, '>'),
						_l(),
						Al(146, '\n    '),
						wl(147, 'span', av),
						Al(148, '<'),
						wl(149, 'span', sv),
						Al(150, 'li'),
						_l(),
						Al(151, '>'),
						_l(),
						Al(152, 'left (default)'),
						wl(153, 'span', av),
						Al(154, '</'),
						wl(155, 'span', sv),
						Al(156, 'li'),
						_l(),
						Al(157, '>'),
						_l(),
						Al(158, '\n'),
						wl(159, 'span', av),
						Al(160, '</'),
						wl(161, 'span', sv),
						Al(162, 'ul'),
						_l(),
						Al(163, '>'),
						_l(),
						Al(164, '\n'),
						wl(165, 'span', av),
						Al(166, '<'),
						wl(167, 'span', sv),
						Al(168, 'ul'),
						_l(),
						Al(169, ' '),
						wl(170, 'span', lv),
						Al(171, 'class'),
						_l(),
						Al(172, '='),
						wl(173, 'span', uv),
						Al(174, '"col wrap-r"'),
						_l(),
						Al(175, '>'),
						_l(),
						Al(176, '\n    '),
						wl(177, 'span', av),
						Al(178, '<'),
						wl(179, 'span', sv),
						Al(180, 'li'),
						_l(),
						Al(181, '>'),
						_l(),
						Al(182, 'right'),
						wl(183, 'span', av),
						Al(184, '</'),
						wl(185, 'span', sv),
						Al(186, 'li'),
						_l(),
						Al(187, '>'),
						_l(),
						Al(188, '\n    '),
						wl(189, 'span', av),
						Al(190, '<'),
						wl(191, 'span', sv),
						Al(192, 'li'),
						_l(),
						Al(193, '>'),
						_l(),
						Al(194, 'right'),
						wl(195, 'span', av),
						Al(196, '</'),
						wl(197, 'span', sv),
						Al(198, 'li'),
						_l(),
						Al(199, '>'),
						_l(),
						Al(200, '\n    '),
						wl(201, 'span', av),
						Al(202, '<'),
						wl(203, 'span', sv),
						Al(204, 'li'),
						_l(),
						Al(205, '>'),
						_l(),
						Al(206, 'right'),
						wl(207, 'span', av),
						Al(208, '</'),
						wl(209, 'span', sv),
						Al(210, 'li'),
						_l(),
						Al(211, '>'),
						_l(),
						Al(212, '\n'),
						wl(213, 'span', av),
						Al(214, '</'),
						wl(215, 'span', sv),
						Al(216, 'ul'),
						_l(),
						Al(217, '>'),
						_l(),
						Al(218, '\n'),
						wl(219, 'span', av),
						Al(220, '<'),
						wl(221, 'span', sv),
						Al(222, 'ul'),
						_l(),
						Al(223, ' '),
						wl(224, 'span', lv),
						Al(225, 'class'),
						_l(),
						Al(226, '='),
						wl(227, 'span', uv),
						Al(228, '"col wrap-sa"'),
						_l(),
						Al(229, '>'),
						_l(),
						Al(230, '\n    '),
						wl(231, 'span', av),
						Al(232, '<'),
						wl(233, 'span', sv),
						Al(234, 'li'),
						_l(),
						Al(235, '>'),
						_l(),
						Al(236, 'space around'),
						wl(237, 'span', av),
						Al(238, '</'),
						wl(239, 'span', sv),
						Al(240, 'li'),
						_l(),
						Al(241, '>'),
						_l(),
						Al(242, '\n    '),
						wl(243, 'span', av),
						Al(244, '<'),
						wl(245, 'span', sv),
						Al(246, 'li'),
						_l(),
						Al(247, '>'),
						_l(),
						Al(248, 'space around'),
						wl(249, 'span', av),
						Al(250, '</'),
						wl(251, 'span', sv),
						Al(252, 'li'),
						_l(),
						Al(253, '>'),
						_l(),
						Al(254, '\n    '),
						wl(255, 'span', av),
						Al(256, '<'),
						wl(257, 'span', sv),
						Al(258, 'li'),
						_l(),
						Al(259, '>'),
						_l(),
						Al(260, 'space around'),
						wl(261, 'span', av),
						Al(262, '</'),
						wl(263, 'span', sv),
						Al(264, 'li'),
						_l(),
						Al(265, '>'),
						_l(),
						Al(266, '\n'),
						wl(267, 'span', av),
						Al(268, '</'),
						wl(269, 'span', sv),
						Al(270, 'ul'),
						_l(),
						Al(271, '>'),
						_l(),
						Al(272, '\n'),
						wl(273, 'span', av),
						Al(274, '<'),
						wl(275, 'span', sv),
						Al(276, 'ul'),
						_l(),
						Al(277, ' '),
						wl(278, 'span', lv),
						Al(279, 'class'),
						_l(),
						Al(280, '='),
						wl(281, 'span', uv),
						Al(282, '"col wrap-sb"'),
						_l(),
						Al(283, '>'),
						_l(),
						Al(284, '\n    '),
						wl(285, 'span', av),
						Al(286, '<'),
						wl(287, 'span', sv),
						Al(288, 'li'),
						_l(),
						Al(289, '>'),
						_l(),
						Al(290, 'space between'),
						wl(291, 'span', av),
						Al(292, '</'),
						wl(293, 'span', sv),
						Al(294, 'li'),
						_l(),
						Al(295, '>'),
						_l(),
						Al(296, '\n    '),
						wl(297, 'span', av),
						Al(298, '<'),
						wl(299, 'span', sv),
						Al(300, 'li'),
						_l(),
						Al(301, '>'),
						_l(),
						Al(302, 'space between'),
						wl(303, 'span', av),
						Al(304, '</'),
						wl(305, 'span', sv),
						Al(306, 'li'),
						_l(),
						Al(307, '>'),
						_l(),
						Al(308, '\n    '),
						wl(309, 'span', av),
						Al(310, '<'),
						wl(311, 'span', sv),
						Al(312, 'li'),
						_l(),
						Al(313, '>'),
						_l(),
						Al(314, 'space between'),
						wl(315, 'span', av),
						Al(316, '</'),
						wl(317, 'span', sv),
						Al(318, 'li'),
						_l(),
						Al(319, '>'),
						_l(),
						Al(320, '\n'),
						wl(321, 'span', av),
						Al(322, '</'),
						wl(323, 'span', sv),
						Al(324, 'ul'),
						_l(),
						Al(325, '>'),
						_l(),
						Al(326, '\n'),
						wl(327, 'span', av),
						Al(328, '<'),
						wl(329, 'span', sv),
						Al(330, 'ul'),
						_l(),
						Al(331, ' '),
						wl(332, 'span', lv),
						Al(333, 'class'),
						_l(),
						Al(334, '='),
						wl(335, 'span', uv),
						Al(336, '"col wrap-st"'),
						_l(),
						Al(337, '>'),
						_l(),
						Al(338, '\n    '),
						wl(339, 'span', av),
						Al(340, '<'),
						wl(341, 'span', sv),
						Al(342, 'li'),
						_l(),
						Al(343, '>'),
						_l(),
						Al(344, 'stretch'),
						wl(345, 'span', av),
						Al(346, '</'),
						wl(347, 'span', sv),
						Al(348, 'li'),
						_l(),
						Al(349, '>'),
						_l(),
						Al(350, '\n    '),
						wl(351, 'span', av),
						Al(352, '<'),
						wl(353, 'span', sv),
						Al(354, 'li'),
						_l(),
						Al(355, '>'),
						_l(),
						Al(356, 'stretch'),
						wl(357, 'span', av),
						Al(358, '</'),
						wl(359, 'span', sv),
						Al(360, 'li'),
						_l(),
						Al(361, '>'),
						_l(),
						Al(362, '\n    '),
						wl(363, 'span', av),
						Al(364, '<'),
						wl(365, 'span', sv),
						Al(366, 'li'),
						_l(),
						Al(367, '>'),
						_l(),
						Al(368, 'stretch'),
						wl(369, 'span', av),
						Al(370, '</'),
						wl(371, 'span', sv),
						Al(372, 'li'),
						_l(),
						Al(373, '>'),
						_l(),
						Al(374, '\n'),
						wl(375, 'span', av),
						Al(376, '</'),
						wl(377, 'span', sv),
						Al(378, 'ul'),
						_l(),
						Al(379, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Yy = [1, 'row', 'wrap-m'],
				Jy = [1, 'row', 'wrap-t'],
				Ky = [1, 'row', 'wrap-b'],
				Xy = [1, 'row', 'wrap-sa'],
				$y = [1, 'row', 'wrap-sb'],
				tw = [1, 'row', 'wrap-st'];
			function ew(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Wrap Row'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use a '),
						wl(6, 'code'),
						Al(7, '.wrap-[m || t || b || sa || sb || st]'),
						_l(),
						Al(8, ' class to align multi-row items in a '),
						wl(9, 'code'),
						Al(10, '.row'),
						_l(),
						Al(11, ' flex container.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'ul', Yy),
						wl(14, 'li'),
						Al(15, 'middle'),
						_l(),
						wl(16, 'li'),
						Al(17, 'middle'),
						_l(),
						wl(18, 'li'),
						Al(19, 'middle'),
						_l(),
						_l(),
						wl(20, 'ul', Jy),
						wl(21, 'li'),
						Al(22, 'top (default)'),
						_l(),
						wl(23, 'li'),
						Al(24, 'top (default)'),
						_l(),
						wl(25, 'li'),
						Al(26, 'top (default)'),
						_l(),
						_l(),
						wl(27, 'ul', Ky),
						wl(28, 'li'),
						Al(29, 'bottom'),
						_l(),
						wl(30, 'li'),
						Al(31, 'bottom'),
						_l(),
						wl(32, 'li'),
						Al(33, 'bottom'),
						_l(),
						_l(),
						wl(34, 'ul', Xy),
						wl(35, 'li'),
						Al(36, 'space around'),
						_l(),
						wl(37, 'li'),
						Al(38, 'space around'),
						_l(),
						wl(39, 'li'),
						Al(40, 'space around'),
						_l(),
						_l(),
						wl(41, 'ul', $y),
						wl(42, 'li'),
						Al(43, 'space between'),
						_l(),
						wl(44, 'li'),
						Al(45, 'space between'),
						_l(),
						wl(46, 'li'),
						Al(47, 'space between'),
						_l(),
						_l(),
						wl(48, 'ul', tw),
						wl(49, 'li'),
						Al(50, 'stretch'),
						_l(),
						wl(51, 'li'),
						Al(52, 'stretch'),
						_l(),
						wl(53, 'li'),
						Al(54, 'stretch'),
						_l(),
						_l(),
						_l(),
						wl(55, 'figure'),
						wl(56, 'pre', iv),
						wl(57, 'span', av),
						Al(58, '<'),
						wl(59, 'span', sv),
						Al(60, 'ul'),
						_l(),
						Al(61, ' '),
						wl(62, 'span', lv),
						Al(63, 'class'),
						_l(),
						Al(64, '='),
						wl(65, 'span', uv),
						Al(66, '"row wrap-m"'),
						_l(),
						Al(67, '>'),
						_l(),
						Al(68, '\n    '),
						wl(69, 'span', av),
						Al(70, '<'),
						wl(71, 'span', sv),
						Al(72, 'li'),
						_l(),
						Al(73, '>'),
						_l(),
						Al(74, 'middle'),
						wl(75, 'span', av),
						Al(76, '</'),
						wl(77, 'span', sv),
						Al(78, 'li'),
						_l(),
						Al(79, '>'),
						_l(),
						Al(80, '\n    '),
						wl(81, 'span', av),
						Al(82, '<'),
						wl(83, 'span', sv),
						Al(84, 'li'),
						_l(),
						Al(85, '>'),
						_l(),
						Al(86, 'middle'),
						wl(87, 'span', av),
						Al(88, '</'),
						wl(89, 'span', sv),
						Al(90, 'li'),
						_l(),
						Al(91, '>'),
						_l(),
						Al(92, '\n    '),
						wl(93, 'span', av),
						Al(94, '<'),
						wl(95, 'span', sv),
						Al(96, 'li'),
						_l(),
						Al(97, '>'),
						_l(),
						Al(98, 'middle'),
						wl(99, 'span', av),
						Al(100, '</'),
						wl(101, 'span', sv),
						Al(102, 'li'),
						_l(),
						Al(103, '>'),
						_l(),
						Al(104, '\n'),
						wl(105, 'span', av),
						Al(106, '</'),
						wl(107, 'span', sv),
						Al(108, 'ul'),
						_l(),
						Al(109, '>'),
						_l(),
						Al(110, '\n'),
						wl(111, 'span', av),
						Al(112, '<'),
						wl(113, 'span', sv),
						Al(114, 'ul'),
						_l(),
						Al(115, ' '),
						wl(116, 'span', lv),
						Al(117, 'class'),
						_l(),
						Al(118, '='),
						wl(119, 'span', uv),
						Al(120, '"row wrap-t"'),
						_l(),
						Al(121, '>'),
						_l(),
						Al(122, '\n    '),
						wl(123, 'span', av),
						Al(124, '<'),
						wl(125, 'span', sv),
						Al(126, 'li'),
						_l(),
						Al(127, '>'),
						_l(),
						Al(128, 'top (default)'),
						wl(129, 'span', av),
						Al(130, '</'),
						wl(131, 'span', sv),
						Al(132, 'li'),
						_l(),
						Al(133, '>'),
						_l(),
						Al(134, '\n    '),
						wl(135, 'span', av),
						Al(136, '<'),
						wl(137, 'span', sv),
						Al(138, 'li'),
						_l(),
						Al(139, '>'),
						_l(),
						Al(140, 'top (default)'),
						wl(141, 'span', av),
						Al(142, '</'),
						wl(143, 'span', sv),
						Al(144, 'li'),
						_l(),
						Al(145, '>'),
						_l(),
						Al(146, '\n    '),
						wl(147, 'span', av),
						Al(148, '<'),
						wl(149, 'span', sv),
						Al(150, 'li'),
						_l(),
						Al(151, '>'),
						_l(),
						Al(152, 'top (default)'),
						wl(153, 'span', av),
						Al(154, '</'),
						wl(155, 'span', sv),
						Al(156, 'li'),
						_l(),
						Al(157, '>'),
						_l(),
						Al(158, '\n'),
						wl(159, 'span', av),
						Al(160, '</'),
						wl(161, 'span', sv),
						Al(162, 'ul'),
						_l(),
						Al(163, '>'),
						_l(),
						Al(164, '\n'),
						wl(165, 'span', av),
						Al(166, '<'),
						wl(167, 'span', sv),
						Al(168, 'ul'),
						_l(),
						Al(169, ' '),
						wl(170, 'span', lv),
						Al(171, 'class'),
						_l(),
						Al(172, '='),
						wl(173, 'span', uv),
						Al(174, '"row wrap-b"'),
						_l(),
						Al(175, '>'),
						_l(),
						Al(176, '\n    '),
						wl(177, 'span', av),
						Al(178, '<'),
						wl(179, 'span', sv),
						Al(180, 'li'),
						_l(),
						Al(181, '>'),
						_l(),
						Al(182, 'bottom'),
						wl(183, 'span', av),
						Al(184, '</'),
						wl(185, 'span', sv),
						Al(186, 'li'),
						_l(),
						Al(187, '>'),
						_l(),
						Al(188, '\n    '),
						wl(189, 'span', av),
						Al(190, '<'),
						wl(191, 'span', sv),
						Al(192, 'li'),
						_l(),
						Al(193, '>'),
						_l(),
						Al(194, 'bottom'),
						wl(195, 'span', av),
						Al(196, '</'),
						wl(197, 'span', sv),
						Al(198, 'li'),
						_l(),
						Al(199, '>'),
						_l(),
						Al(200, '\n    '),
						wl(201, 'span', av),
						Al(202, '<'),
						wl(203, 'span', sv),
						Al(204, 'li'),
						_l(),
						Al(205, '>'),
						_l(),
						Al(206, 'bottom'),
						wl(207, 'span', av),
						Al(208, '</'),
						wl(209, 'span', sv),
						Al(210, 'li'),
						_l(),
						Al(211, '>'),
						_l(),
						Al(212, '\n'),
						wl(213, 'span', av),
						Al(214, '</'),
						wl(215, 'span', sv),
						Al(216, 'ul'),
						_l(),
						Al(217, '>'),
						_l(),
						Al(218, '\n'),
						wl(219, 'span', av),
						Al(220, '<'),
						wl(221, 'span', sv),
						Al(222, 'ul'),
						_l(),
						Al(223, ' '),
						wl(224, 'span', lv),
						Al(225, 'class'),
						_l(),
						Al(226, '='),
						wl(227, 'span', uv),
						Al(228, '"row wrap-sa"'),
						_l(),
						Al(229, '>'),
						_l(),
						Al(230, '\n    '),
						wl(231, 'span', av),
						Al(232, '<'),
						wl(233, 'span', sv),
						Al(234, 'li'),
						_l(),
						Al(235, '>'),
						_l(),
						Al(236, 'space around'),
						wl(237, 'span', av),
						Al(238, '</'),
						wl(239, 'span', sv),
						Al(240, 'li'),
						_l(),
						Al(241, '>'),
						_l(),
						Al(242, '\n    '),
						wl(243, 'span', av),
						Al(244, '<'),
						wl(245, 'span', sv),
						Al(246, 'li'),
						_l(),
						Al(247, '>'),
						_l(),
						Al(248, 'space around'),
						wl(249, 'span', av),
						Al(250, '</'),
						wl(251, 'span', sv),
						Al(252, 'li'),
						_l(),
						Al(253, '>'),
						_l(),
						Al(254, '\n    '),
						wl(255, 'span', av),
						Al(256, '<'),
						wl(257, 'span', sv),
						Al(258, 'li'),
						_l(),
						Al(259, '>'),
						_l(),
						Al(260, 'space around'),
						wl(261, 'span', av),
						Al(262, '</'),
						wl(263, 'span', sv),
						Al(264, 'li'),
						_l(),
						Al(265, '>'),
						_l(),
						Al(266, '\n'),
						wl(267, 'span', av),
						Al(268, '</'),
						wl(269, 'span', sv),
						Al(270, 'ul'),
						_l(),
						Al(271, '>'),
						_l(),
						Al(272, '\n'),
						wl(273, 'span', av),
						Al(274, '<'),
						wl(275, 'span', sv),
						Al(276, 'ul'),
						_l(),
						Al(277, ' '),
						wl(278, 'span', lv),
						Al(279, 'class'),
						_l(),
						Al(280, '='),
						wl(281, 'span', uv),
						Al(282, '"row wrap-sb"'),
						_l(),
						Al(283, '>'),
						_l(),
						Al(284, '\n    '),
						wl(285, 'span', av),
						Al(286, '<'),
						wl(287, 'span', sv),
						Al(288, 'li'),
						_l(),
						Al(289, '>'),
						_l(),
						Al(290, 'space between'),
						wl(291, 'span', av),
						Al(292, '</'),
						wl(293, 'span', sv),
						Al(294, 'li'),
						_l(),
						Al(295, '>'),
						_l(),
						Al(296, '\n    '),
						wl(297, 'span', av),
						Al(298, '<'),
						wl(299, 'span', sv),
						Al(300, 'li'),
						_l(),
						Al(301, '>'),
						_l(),
						Al(302, 'space between'),
						wl(303, 'span', av),
						Al(304, '</'),
						wl(305, 'span', sv),
						Al(306, 'li'),
						_l(),
						Al(307, '>'),
						_l(),
						Al(308, '\n    '),
						wl(309, 'span', av),
						Al(310, '<'),
						wl(311, 'span', sv),
						Al(312, 'li'),
						_l(),
						Al(313, '>'),
						_l(),
						Al(314, 'space between'),
						wl(315, 'span', av),
						Al(316, '</'),
						wl(317, 'span', sv),
						Al(318, 'li'),
						_l(),
						Al(319, '>'),
						_l(),
						Al(320, '\n'),
						wl(321, 'span', av),
						Al(322, '</'),
						wl(323, 'span', sv),
						Al(324, 'ul'),
						_l(),
						Al(325, '>'),
						_l(),
						Al(326, '\n'),
						wl(327, 'span', av),
						Al(328, '<'),
						wl(329, 'span', sv),
						Al(330, 'ul'),
						_l(),
						Al(331, ' '),
						wl(332, 'span', lv),
						Al(333, 'class'),
						_l(),
						Al(334, '='),
						wl(335, 'span', uv),
						Al(336, '"row wrap-st"'),
						_l(),
						Al(337, '>'),
						_l(),
						Al(338, '\n    '),
						wl(339, 'span', av),
						Al(340, '<'),
						wl(341, 'span', sv),
						Al(342, 'li'),
						_l(),
						Al(343, '>'),
						_l(),
						Al(344, 'stretch'),
						wl(345, 'span', av),
						Al(346, '</'),
						wl(347, 'span', sv),
						Al(348, 'li'),
						_l(),
						Al(349, '>'),
						_l(),
						Al(350, '\n    '),
						wl(351, 'span', av),
						Al(352, '<'),
						wl(353, 'span', sv),
						Al(354, 'li'),
						_l(),
						Al(355, '>'),
						_l(),
						Al(356, 'stretch'),
						wl(357, 'span', av),
						Al(358, '</'),
						wl(359, 'span', sv),
						Al(360, 'li'),
						_l(),
						Al(361, '>'),
						_l(),
						Al(362, '\n    '),
						wl(363, 'span', av),
						Al(364, '<'),
						wl(365, 'span', sv),
						Al(366, 'li'),
						_l(),
						Al(367, '>'),
						_l(),
						Al(368, 'stretch'),
						wl(369, 'span', av),
						Al(370, '</'),
						wl(371, 'span', sv),
						Al(372, 'li'),
						_l(),
						Al(373, '>'),
						_l(),
						Al(374, '\n'),
						wl(375, 'span', av),
						Al(376, '</'),
						wl(377, 'span', sv),
						Al(378, 'ul'),
						_l(),
						Al(379, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function nw(t, e) {
				1 & t &&
					(wl(0, 'article', Xb),
					wl(1, 'section', $b),
					wl(2, 'p'),
					Al(3, 'Forms are styled with '),
					wl(4, 'code'),
					Al(5, '.form-group'),
					_l(),
					Al(6, ', '),
					wl(7, 'code'),
					Al(8, '.field-group'),
					_l(),
					Al(9, ', '),
					wl(10, 'code'),
					Al(11, '.form-label'),
					_l(),
					Al(12, ', and '),
					wl(13, 'code'),
					Al(14, '.form-field'),
					_l(),
					Al(15, ' classes.'),
					_l(),
					_l(),
					_l());
			}
			var rw = [1, 'form-group'],
				ow = [1, 'field-group'],
				iw = ['for', 'name', 1, 'form-label'],
				aw = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 1, 'form-field'],
				sw = [1, 'form-label'],
				lw = [1, 'radio-group'],
				uw = ['type', 'radio', 'name', 'agree', 'id', 'yes', 1, 'form-field'],
				cw = ['for', 'yes', 1, 'form-label'],
				pw = ['type', 'radio', 'name', 'agree', 'id', 'no', 1, 'form-field'],
				fw = ['for', 'no', 1, 'form-label'],
				dw = [1, 'checkbox-group'],
				hw = ['type', 'checkbox', 'name', 'color', 'id', 'blue', 1, 'form-field'],
				gw = ['for', 'blue', 1, 'form-label'],
				mw = ['type', 'checkbox', 'name', 'color', 'id', 'green', 1, 'form-field'],
				bw = ['for', 'green', 1, 'form-label'],
				vw = ['type', 'checkbox', 'name', 'color', 'id', 'red', 1, 'form-field'],
				yw = ['for', 'red', 1, 'form-label'],
				ww = ['type', 'checkbox', 'name', 'color', 'id', 'yellow', 1, 'form-field'],
				_w = ['for', 'yellow', 1, 'form-label'];
			function xw(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Checkbox'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Checkboxes and radio buttons are grouped with a '),
						wl(6, 'code'),
						Al(7, '.*-group'),
						_l(),
						Al(8, ' class on a parent container.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'form'),
						wl(11, 'ul', rw),
						wl(12, 'li', ow),
						wl(13, 'label', iw),
						Al(14, 'Name'),
						_l(),
						xl(15, 'input', aw),
						_l(),
						wl(16, 'li', ow),
						wl(17, 'p', sw),
						Al(18, 'Agree'),
						_l(),
						wl(19, 'ul', lw),
						wl(20, 'li', ow),
						xl(21, 'input', uw),
						wl(22, 'label', cw),
						Al(23, 'Yes'),
						_l(),
						_l(),
						wl(24, 'li', ow),
						xl(25, 'input', pw),
						wl(26, 'label', fw),
						Al(27, 'No'),
						_l(),
						_l(),
						_l(),
						_l(),
						wl(28, 'li', ow),
						wl(29, 'p', sw),
						Al(30, 'Color'),
						_l(),
						wl(31, 'ul', dw),
						wl(32, 'li', ow),
						xl(33, 'input', hw),
						wl(34, 'label', gw),
						Al(35, 'Blue'),
						_l(),
						_l(),
						wl(36, 'li', ow),
						xl(37, 'input', mw),
						wl(38, 'label', bw),
						Al(39, 'Green'),
						_l(),
						_l(),
						wl(40, 'li', ow),
						xl(41, 'input', vw),
						wl(42, 'label', yw),
						Al(43, 'Red'),
						_l(),
						_l(),
						wl(44, 'li', ow),
						xl(45, 'input', ww),
						wl(46, 'label', _w),
						Al(47, 'Yellow'),
						_l(),
						_l(),
						_l(),
						_l(),
						_l(),
						_l(),
						_l(),
						wl(48, 'figure'),
						wl(49, 'pre', iv),
						Al(50, '<'),
						wl(51, 'span', Ev),
						Al(52, 'form'),
						_l(),
						Al(53, '>\n    <ul '),
						wl(54, 'span', Ev),
						Al(55, 'class'),
						_l(),
						Al(56, '='),
						wl(57, 'span', Ov),
						Al(58, '"form-group"'),
						_l(),
						Al(59, '>\n        <'),
						wl(60, 'span', Ev),
						Al(61, 'li'),
						_l(),
						Al(62, ' '),
						wl(63, 'span', Ev),
						Al(64, 'class'),
						_l(),
						Al(65, '='),
						wl(66, 'span', Ov),
						Al(67, '"field-group"'),
						_l(),
						Al(68, '>\n            <'),
						wl(69, 'span', Ev),
						Al(70, 'label'),
						_l(),
						Al(71, ' '),
						wl(72, 'span', Ev),
						Al(73, 'class'),
						_l(),
						Al(74, '='),
						wl(75, 'span', Ov),
						Al(76, '"form-label"'),
						_l(),
						Al(77, ' '),
						wl(78, 'span', Ev),
						Al(79, 'for'),
						_l(),
						Al(80, '='),
						wl(81, 'span', Ov),
						Al(82, '"name"'),
						_l(),
						Al(83, '>Name</'),
						wl(84, 'span', Ev),
						Al(85, 'label'),
						_l(),
						Al(86, '>\n            <'),
						wl(87, 'span', Ev),
						Al(88, 'input'),
						_l(),
						Al(89, ' '),
						wl(90, 'span', Ev),
						Al(91, 'class'),
						_l(),
						Al(92, '='),
						wl(93, 'span', Ov),
						Al(94, '"form-field"'),
						_l(),
						Al(95, ' '),
						wl(96, 'span', Ev),
						Al(97, 'type'),
						_l(),
						Al(98, '='),
						wl(99, 'span', Ov),
						Al(100, '"text"'),
						_l(),
						Al(101, ' id='),
						wl(102, 'span', Ov),
						Al(103, '"name"'),
						_l(),
						Al(104, ' name='),
						wl(105, 'span', Ov),
						Al(106, '"name"'),
						_l(),
						Al(107, ' placeholder='),
						wl(108, 'span', Ov),
						Al(109, '"Enter name"'),
						_l(),
						Al(110, '>\n        </'),
						wl(111, 'span', Ev),
						Al(112, 'li'),
						_l(),
						Al(113, '>\n        <'),
						wl(114, 'span', Ev),
						Al(115, 'li'),
						_l(),
						Al(116, ' '),
						wl(117, 'span', Ev),
						Al(118, 'class'),
						_l(),
						Al(119, '='),
						wl(120, 'span', Ov),
						Al(121, '"field-group"'),
						_l(),
						Al(122, '>\n            <p '),
						wl(123, 'span', Ev),
						Al(124, 'class'),
						_l(),
						Al(125, '='),
						wl(126, 'span', Ov),
						Al(127, '"form-label"'),
						_l(),
						Al(128, '>Agree</p>\n            <ul '),
						wl(129, 'span', Ev),
						Al(130, 'class'),
						_l(),
						Al(131, '='),
						wl(132, 'span', Ov),
						Al(133, '"radio-group"'),
						_l(),
						Al(134, '>\n                <'),
						wl(135, 'span', Ev),
						Al(136, 'li'),
						_l(),
						Al(137, ' '),
						wl(138, 'span', Ev),
						Al(139, 'class'),
						_l(),
						Al(140, '='),
						wl(141, 'span', Ov),
						Al(142, '"field-group"'),
						_l(),
						Al(143, '>\n                    <'),
						wl(144, 'span', Ev),
						Al(145, 'input'),
						_l(),
						Al(146, ' '),
						wl(147, 'span', Ev),
						Al(148, 'class'),
						_l(),
						Al(149, '='),
						wl(150, 'span', Ov),
						Al(151, '"form-field"'),
						_l(),
						Al(152, ' '),
						wl(153, 'span', Ev),
						Al(154, 'type'),
						_l(),
						Al(155, '='),
						wl(156, 'span', Ov),
						Al(157, '"radio"'),
						_l(),
						Al(158, ' name='),
						wl(159, 'span', Ov),
						Al(160, '"agree"'),
						_l(),
						Al(161, ' id='),
						wl(162, 'span', Ov),
						Al(163, '"yes"'),
						_l(),
						Al(164, '>\n                    <'),
						wl(165, 'span', Ev),
						Al(166, 'label'),
						_l(),
						Al(167, ' '),
						wl(168, 'span', Ev),
						Al(169, 'class'),
						_l(),
						Al(170, '='),
						wl(171, 'span', Ov),
						Al(172, '"form-label"'),
						_l(),
						Al(173, ' '),
						wl(174, 'span', Ev),
						Al(175, 'for'),
						_l(),
						Al(176, '='),
						wl(177, 'span', Ov),
						Al(178, '"yes"'),
						_l(),
						Al(179, '>Yes</'),
						wl(180, 'span', Ev),
						Al(181, 'label'),
						_l(),
						Al(182, '>\n                </'),
						wl(183, 'span', Ev),
						Al(184, 'li'),
						_l(),
						Al(185, '>\n                <'),
						wl(186, 'span', Ev),
						Al(187, 'li'),
						_l(),
						Al(188, ' '),
						wl(189, 'span', Ev),
						Al(190, 'class'),
						_l(),
						Al(191, '='),
						wl(192, 'span', Ov),
						Al(193, '"field-group"'),
						_l(),
						Al(194, '>\n                    <'),
						wl(195, 'span', Ev),
						Al(196, 'input'),
						_l(),
						Al(197, ' '),
						wl(198, 'span', Ev),
						Al(199, 'class'),
						_l(),
						Al(200, '='),
						wl(201, 'span', Ov),
						Al(202, '"form-field"'),
						_l(),
						Al(203, ' '),
						wl(204, 'span', Ev),
						Al(205, 'type'),
						_l(),
						Al(206, '='),
						wl(207, 'span', Ov),
						Al(208, '"radio"'),
						_l(),
						Al(209, ' name='),
						wl(210, 'span', Ov),
						Al(211, '"agree"'),
						_l(),
						Al(212, ' id='),
						wl(213, 'span', Ov),
						Al(214, '"no"'),
						_l(),
						Al(215, '>\n                    <'),
						wl(216, 'span', Ev),
						Al(217, 'label'),
						_l(),
						Al(218, ' '),
						wl(219, 'span', Ev),
						Al(220, 'class'),
						_l(),
						Al(221, '='),
						wl(222, 'span', Ov),
						Al(223, '"form-label"'),
						_l(),
						Al(224, ' '),
						wl(225, 'span', Ev),
						Al(226, 'for'),
						_l(),
						Al(227, '='),
						wl(228, 'span', Ov),
						Al(229, '"no"'),
						_l(),
						Al(230, '>'),
						wl(231, 'span', Ev),
						Al(232, 'No'),
						_l(),
						Al(233, '</'),
						wl(234, 'span', Ev),
						Al(235, 'label'),
						_l(),
						Al(236, '>\n                </'),
						wl(237, 'span', Ev),
						Al(238, 'li'),
						_l(),
						Al(239, '>\n            </ul>\n        </'),
						wl(240, 'span', Ev),
						Al(241, 'li'),
						_l(),
						Al(242, '>\n        <'),
						wl(243, 'span', Ev),
						Al(244, 'li'),
						_l(),
						Al(245, ' '),
						wl(246, 'span', Ev),
						Al(247, 'class'),
						_l(),
						Al(248, '='),
						wl(249, 'span', Ov),
						Al(250, '"field-group"'),
						_l(),
						Al(251, '>\n            <p '),
						wl(252, 'span', Ev),
						Al(253, 'class'),
						_l(),
						Al(254, '='),
						wl(255, 'span', Ov),
						Al(256, '"form-label"'),
						_l(),
						Al(257, '>Color</p>\n            <ul '),
						wl(258, 'span', Ev),
						Al(259, 'class'),
						_l(),
						Al(260, '='),
						wl(261, 'span', Ov),
						Al(262, '"checkbox-group"'),
						_l(),
						Al(263, '>\n                <'),
						wl(264, 'span', Ev),
						Al(265, 'li'),
						_l(),
						Al(266, ' '),
						wl(267, 'span', Ev),
						Al(268, 'class'),
						_l(),
						Al(269, '='),
						wl(270, 'span', Ov),
						Al(271, '"field-group"'),
						_l(),
						Al(272, '>\n                    <'),
						wl(273, 'span', Ev),
						Al(274, 'input'),
						_l(),
						Al(275, ' '),
						wl(276, 'span', Ev),
						Al(277, 'class'),
						_l(),
						Al(278, '='),
						wl(279, 'span', Ov),
						Al(280, '"form-field"'),
						_l(),
						Al(281, ' '),
						wl(282, 'span', Ev),
						Al(283, 'type'),
						_l(),
						Al(284, '='),
						wl(285, 'span', Ov),
						Al(286, '"checkbox"'),
						_l(),
						Al(287, ' name='),
						wl(288, 'span', Ov),
						Al(289, '"color"'),
						_l(),
						Al(290, ' id='),
						wl(291, 'span', Ov),
						Al(292, '"blue"'),
						_l(),
						Al(293, '>\n                    <'),
						wl(294, 'span', Ev),
						Al(295, 'label'),
						_l(),
						Al(296, ' '),
						wl(297, 'span', Ev),
						Al(298, 'class'),
						_l(),
						Al(299, '='),
						wl(300, 'span', Ov),
						Al(301, '"form-label"'),
						_l(),
						Al(302, ' '),
						wl(303, 'span', Ev),
						Al(304, 'for'),
						_l(),
						Al(305, '='),
						wl(306, 'span', Ov),
						Al(307, '"blue"'),
						_l(),
						Al(308, '>Blue</'),
						wl(309, 'span', Ev),
						Al(310, 'label'),
						_l(),
						Al(311, '>\n                </'),
						wl(312, 'span', Ev),
						Al(313, 'li'),
						_l(),
						Al(314, '>\n                <'),
						wl(315, 'span', Ev),
						Al(316, 'li'),
						_l(),
						Al(317, ' '),
						wl(318, 'span', Ev),
						Al(319, 'class'),
						_l(),
						Al(320, '='),
						wl(321, 'span', Ov),
						Al(322, '"field-group"'),
						_l(),
						Al(323, '>\n                    <'),
						wl(324, 'span', Ev),
						Al(325, 'input'),
						_l(),
						Al(326, ' '),
						wl(327, 'span', Ev),
						Al(328, 'class'),
						_l(),
						Al(329, '='),
						wl(330, 'span', Ov),
						Al(331, '"form-field"'),
						_l(),
						Al(332, ' '),
						wl(333, 'span', Ev),
						Al(334, 'type'),
						_l(),
						Al(335, '='),
						wl(336, 'span', Ov),
						Al(337, '"checkbox"'),
						_l(),
						Al(338, ' name='),
						wl(339, 'span', Ov),
						Al(340, '"color"'),
						_l(),
						Al(341, ' id='),
						wl(342, 'span', Ov),
						Al(343, '"green"'),
						_l(),
						Al(344, '>\n                    <'),
						wl(345, 'span', Ev),
						Al(346, 'label'),
						_l(),
						Al(347, ' '),
						wl(348, 'span', Ev),
						Al(349, 'class'),
						_l(),
						Al(350, '='),
						wl(351, 'span', Ov),
						Al(352, '"form-label"'),
						_l(),
						Al(353, ' '),
						wl(354, 'span', Ev),
						Al(355, 'for'),
						_l(),
						Al(356, '='),
						wl(357, 'span', Ov),
						Al(358, '"green"'),
						_l(),
						Al(359, '>Green</'),
						wl(360, 'span', Ev),
						Al(361, 'label'),
						_l(),
						Al(362, '>\n                </'),
						wl(363, 'span', Ev),
						Al(364, 'li'),
						_l(),
						Al(365, '>\n                <'),
						wl(366, 'span', Ev),
						Al(367, 'li'),
						_l(),
						Al(368, ' '),
						wl(369, 'span', Ev),
						Al(370, 'class'),
						_l(),
						Al(371, '='),
						wl(372, 'span', Ov),
						Al(373, '"field-group"'),
						_l(),
						Al(374, '>\n                    <'),
						wl(375, 'span', Ev),
						Al(376, 'input'),
						_l(),
						Al(377, ' '),
						wl(378, 'span', Ev),
						Al(379, 'class'),
						_l(),
						Al(380, '='),
						wl(381, 'span', Ov),
						Al(382, '"form-field"'),
						_l(),
						Al(383, ' '),
						wl(384, 'span', Ev),
						Al(385, 'type'),
						_l(),
						Al(386, '='),
						wl(387, 'span', Ov),
						Al(388, '"checkbox"'),
						_l(),
						Al(389, ' name='),
						wl(390, 'span', Ov),
						Al(391, '"color"'),
						_l(),
						Al(392, ' id='),
						wl(393, 'span', Ov),
						Al(394, '"red"'),
						_l(),
						Al(395, '>\n                    <'),
						wl(396, 'span', Ev),
						Al(397, 'label'),
						_l(),
						Al(398, ' '),
						wl(399, 'span', Ev),
						Al(400, 'class'),
						_l(),
						Al(401, '='),
						wl(402, 'span', Ov),
						Al(403, '"form-label"'),
						_l(),
						Al(404, ' '),
						wl(405, 'span', Ev),
						Al(406, 'for'),
						_l(),
						Al(407, '='),
						wl(408, 'span', Ov),
						Al(409, '"red"'),
						_l(),
						Al(410, '>Red</'),
						wl(411, 'span', Ev),
						Al(412, 'label'),
						_l(),
						Al(413, '>\n                </'),
						wl(414, 'span', Ev),
						Al(415, 'li'),
						_l(),
						Al(416, '>\n                <'),
						wl(417, 'span', Ev),
						Al(418, 'li'),
						_l(),
						Al(419, ' '),
						wl(420, 'span', Ev),
						Al(421, 'class'),
						_l(),
						Al(422, '='),
						wl(423, 'span', Ov),
						Al(424, '"field-group"'),
						_l(),
						Al(425, '>\n                    <'),
						wl(426, 'span', Ev),
						Al(427, 'input'),
						_l(),
						Al(428, ' '),
						wl(429, 'span', Ev),
						Al(430, 'class'),
						_l(),
						Al(431, '='),
						wl(432, 'span', Ov),
						Al(433, '"form-field"'),
						_l(),
						Al(434, ' '),
						wl(435, 'span', Ev),
						Al(436, 'type'),
						_l(),
						Al(437, '='),
						wl(438, 'span', Ov),
						Al(439, '"checkbox"'),
						_l(),
						Al(440, ' name='),
						wl(441, 'span', Ov),
						Al(442, '"color"'),
						_l(),
						Al(443, ' id='),
						wl(444, 'span', Ov),
						Al(445, '"yellow"'),
						_l(),
						Al(446, '>\n                    <'),
						wl(447, 'span', Ev),
						Al(448, 'label'),
						_l(),
						Al(449, ' '),
						wl(450, 'span', Ev),
						Al(451, 'class'),
						_l(),
						Al(452, '='),
						wl(453, 'span', Ov),
						Al(454, '"form-label"'),
						_l(),
						Al(455, ' '),
						wl(456, 'span', Ev),
						Al(457, 'for'),
						_l(),
						Al(458, '='),
						wl(459, 'span', Ov),
						Al(460, '"yellow"'),
						_l(),
						Al(461, '>Yellow</'),
						wl(462, 'span', Ev),
						Al(463, 'label'),
						_l(),
						Al(464, '>\n                </'),
						wl(465, 'span', Ev),
						Al(466, 'li'),
						_l(),
						Al(467, '>\n            </ul>\n        </'),
						wl(468, 'span', Ev),
						Al(469, 'li'),
						_l(),
						Al(470, '>\n    </ul>    \n</'),
						wl(471, 'span', Ev),
						Al(472, 'form'),
						_l(),
						Al(473, '>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Cw = ['for', 'gender', 1, 'form-label'],
				kw = ['name', 'gender', 'id', 'gender', 1, 'form-field'],
				Sw = ['value', '1'],
				Pw = ['value', '2'],
				Ew = ['value', '3'],
				Ow = ['for', 'language', 1, 'form-label'],
				Iw = ['name', 'language', 'id', 'language', 'multiple', '', 1, 'form-field'],
				Tw = ['for', 'notes', 1, 'form-label'],
				Mw = ['name', 'notes', 'id', 'notes', 'placeholder', 'Enter notes', 1, 'form-field'];
			function Aw(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Field'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Form fields are styled with a '),
						wl(6, 'code'),
						Al(7, '.form-field'),
						_l(),
						Al(8, ' class. Different styles are applied based on the form field.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'form'),
						wl(11, 'ul', rw),
						wl(12, 'li', ow),
						wl(13, 'label', iw),
						Al(14, 'Name'),
						_l(),
						xl(15, 'input', aw),
						_l(),
						wl(16, 'li', ow),
						wl(17, 'label', Cw),
						Al(18, 'Gender'),
						_l(),
						wl(19, 'select', kw),
						wl(20, 'option', Sw),
						Al(21, 'Select'),
						_l(),
						wl(22, 'option', Pw),
						Al(23, 'Female'),
						_l(),
						wl(24, 'option', Ew),
						Al(25, 'Male'),
						_l(),
						_l(),
						_l(),
						wl(26, 'li', ow),
						wl(27, 'label', Ow),
						Al(28, 'Language'),
						_l(),
						wl(29, 'select', Iw),
						wl(30, 'option'),
						Al(31, 'English'),
						_l(),
						wl(32, 'option'),
						Al(33, 'French'),
						_l(),
						wl(34, 'option'),
						Al(35, 'Spanish'),
						_l(),
						_l(),
						_l(),
						wl(36, 'li', ow),
						wl(37, 'label', Tw),
						Al(38, 'Notes'),
						_l(),
						xl(39, 'textarea', Mw),
						_l(),
						_l(),
						_l(),
						_l(),
						wl(40, 'figure'),
						wl(41, 'pre', iv),
						wl(42, 'span', av),
						Al(43, '<'),
						wl(44, 'span', sv),
						Al(45, 'form'),
						_l(),
						Al(46, '>'),
						_l(),
						Al(47, '\n    '),
						wl(48, 'span', av),
						Al(49, '<'),
						wl(50, 'span', sv),
						Al(51, 'ul'),
						_l(),
						Al(52, ' '),
						wl(53, 'span', lv),
						Al(54, 'class'),
						_l(),
						Al(55, '='),
						wl(56, 'span', uv),
						Al(57, '"form-group"'),
						_l(),
						Al(58, '>'),
						_l(),
						Al(59, '\n        '),
						wl(60, 'span', av),
						Al(61, '<'),
						wl(62, 'span', sv),
						Al(63, 'li'),
						_l(),
						Al(64, ' '),
						wl(65, 'span', lv),
						Al(66, 'class'),
						_l(),
						Al(67, '='),
						wl(68, 'span', uv),
						Al(69, '"field-group"'),
						_l(),
						Al(70, '>'),
						_l(),
						Al(71, '\n            '),
						wl(72, 'span', av),
						Al(73, '<'),
						wl(74, 'span', sv),
						Al(75, 'label'),
						_l(),
						Al(76, ' '),
						wl(77, 'span', lv),
						Al(78, 'class'),
						_l(),
						Al(79, '='),
						wl(80, 'span', uv),
						Al(81, '"form-label"'),
						_l(),
						Al(82, ' '),
						wl(83, 'span', lv),
						Al(84, 'for'),
						_l(),
						Al(85, '='),
						wl(86, 'span', uv),
						Al(87, '"name"'),
						_l(),
						Al(88, '>'),
						_l(),
						Al(89, 'Name'),
						wl(90, 'span', av),
						Al(91, '</'),
						wl(92, 'span', sv),
						Al(93, 'label'),
						_l(),
						Al(94, '>'),
						_l(),
						Al(95, '\n            '),
						wl(96, 'span', av),
						Al(97, '<'),
						wl(98, 'span', sv),
						Al(99, 'input'),
						_l(),
						Al(100, ' '),
						wl(101, 'span', lv),
						Al(102, 'class'),
						_l(),
						Al(103, '='),
						wl(104, 'span', uv),
						Al(105, '"form-field"'),
						_l(),
						Al(106, ' '),
						wl(107, 'span', lv),
						Al(108, 'type'),
						_l(),
						Al(109, '='),
						wl(110, 'span', uv),
						Al(111, '"text"'),
						_l(),
						Al(112, ' '),
						wl(113, 'span', lv),
						Al(114, 'id'),
						_l(),
						Al(115, '='),
						wl(116, 'span', uv),
						Al(117, '"name"'),
						_l(),
						Al(118, ' '),
						wl(119, 'span', lv),
						Al(120, 'name'),
						_l(),
						Al(121, '='),
						wl(122, 'span', uv),
						Al(123, '"name"'),
						_l(),
						Al(124, ' '),
						wl(125, 'span', lv),
						Al(126, 'placeholder'),
						_l(),
						Al(127, '='),
						wl(128, 'span', uv),
						Al(129, '"Enter name"'),
						_l(),
						Al(130, '>'),
						_l(),
						Al(131, '\n        '),
						wl(132, 'span', av),
						Al(133, '</'),
						wl(134, 'span', sv),
						Al(135, 'li'),
						_l(),
						Al(136, '>'),
						_l(),
						Al(137, '\n        '),
						wl(138, 'span', av),
						Al(139, '<'),
						wl(140, 'span', sv),
						Al(141, 'li'),
						_l(),
						Al(142, ' '),
						wl(143, 'span', lv),
						Al(144, 'class'),
						_l(),
						Al(145, '='),
						wl(146, 'span', uv),
						Al(147, '"field-group"'),
						_l(),
						Al(148, '>'),
						_l(),
						Al(149, '\n            '),
						wl(150, 'span', av),
						Al(151, '<'),
						wl(152, 'span', sv),
						Al(153, 'label'),
						_l(),
						Al(154, ' '),
						wl(155, 'span', lv),
						Al(156, 'class'),
						_l(),
						Al(157, '='),
						wl(158, 'span', uv),
						Al(159, '"form-label"'),
						_l(),
						Al(160, ' '),
						wl(161, 'span', lv),
						Al(162, 'for'),
						_l(),
						Al(163, '='),
						wl(164, 'span', uv),
						Al(165, '"gender"'),
						_l(),
						Al(166, '>'),
						_l(),
						Al(167, 'Gender'),
						wl(168, 'span', av),
						Al(169, '</'),
						wl(170, 'span', sv),
						Al(171, 'label'),
						_l(),
						Al(172, '>'),
						_l(),
						Al(173, '\n            '),
						wl(174, 'span', av),
						Al(175, '<'),
						wl(176, 'span', sv),
						Al(177, 'select'),
						_l(),
						Al(178, ' '),
						wl(179, 'span', lv),
						Al(180, 'class'),
						_l(),
						Al(181, '='),
						wl(182, 'span', uv),
						Al(183, '"form-field"'),
						_l(),
						Al(184, ' '),
						wl(185, 'span', lv),
						Al(186, 'name'),
						_l(),
						Al(187, '='),
						wl(188, 'span', uv),
						Al(189, '"gender"'),
						_l(),
						Al(190, ' '),
						wl(191, 'span', lv),
						Al(192, 'id'),
						_l(),
						Al(193, '='),
						wl(194, 'span', uv),
						Al(195, '"gender"'),
						_l(),
						Al(196, '>'),
						_l(),
						Al(197, '\n                '),
						wl(198, 'span', av),
						Al(199, '<'),
						wl(200, 'span', sv),
						Al(201, 'option'),
						_l(),
						Al(202, ' '),
						wl(203, 'span', lv),
						Al(204, 'value'),
						_l(),
						Al(205, '='),
						wl(206, 'span', uv),
						Al(207, '"1"'),
						_l(),
						Al(208, '>'),
						_l(),
						Al(209, 'Select'),
						wl(210, 'span', av),
						Al(211, '</'),
						wl(212, 'span', sv),
						Al(213, 'option'),
						_l(),
						Al(214, '>'),
						_l(),
						Al(215, '\n                '),
						wl(216, 'span', av),
						Al(217, '<'),
						wl(218, 'span', sv),
						Al(219, 'option'),
						_l(),
						Al(220, ' '),
						wl(221, 'span', lv),
						Al(222, 'value'),
						_l(),
						Al(223, '='),
						wl(224, 'span', uv),
						Al(225, '"2"'),
						_l(),
						Al(226, '>'),
						_l(),
						Al(227, 'Female'),
						wl(228, 'span', av),
						Al(229, '</'),
						wl(230, 'span', sv),
						Al(231, 'option'),
						_l(),
						Al(232, '>'),
						_l(),
						Al(233, '\n                '),
						wl(234, 'span', av),
						Al(235, '<'),
						wl(236, 'span', sv),
						Al(237, 'option'),
						_l(),
						Al(238, ' '),
						wl(239, 'span', lv),
						Al(240, 'value'),
						_l(),
						Al(241, '='),
						wl(242, 'span', uv),
						Al(243, '"3"'),
						_l(),
						Al(244, '>'),
						_l(),
						Al(245, 'Male'),
						wl(246, 'span', av),
						Al(247, '</'),
						wl(248, 'span', sv),
						Al(249, 'option'),
						_l(),
						Al(250, '>'),
						_l(),
						Al(251, '\n            '),
						wl(252, 'span', av),
						Al(253, '</'),
						wl(254, 'span', sv),
						Al(255, 'select'),
						_l(),
						Al(256, '>'),
						_l(),
						Al(257, '\n        '),
						wl(258, 'span', av),
						Al(259, '</'),
						wl(260, 'span', sv),
						Al(261, 'li'),
						_l(),
						Al(262, '>'),
						_l(),
						Al(263, '\n        '),
						wl(264, 'span', av),
						Al(265, '<'),
						wl(266, 'span', sv),
						Al(267, 'li'),
						_l(),
						Al(268, ' '),
						wl(269, 'span', lv),
						Al(270, 'class'),
						_l(),
						Al(271, '='),
						wl(272, 'span', uv),
						Al(273, '"field-group"'),
						_l(),
						Al(274, '>'),
						_l(),
						Al(275, '\n            '),
						wl(276, 'span', av),
						Al(277, '<'),
						wl(278, 'span', sv),
						Al(279, 'label'),
						_l(),
						Al(280, ' '),
						wl(281, 'span', lv),
						Al(282, 'class'),
						_l(),
						Al(283, '='),
						wl(284, 'span', uv),
						Al(285, '"form-label"'),
						_l(),
						Al(286, ' '),
						wl(287, 'span', lv),
						Al(288, 'for'),
						_l(),
						Al(289, '='),
						wl(290, 'span', uv),
						Al(291, '"language"'),
						_l(),
						Al(292, '>'),
						_l(),
						Al(293, 'Language'),
						wl(294, 'span', av),
						Al(295, '</'),
						wl(296, 'span', sv),
						Al(297, 'label'),
						_l(),
						Al(298, '>'),
						_l(),
						Al(299, '\n            '),
						wl(300, 'span', av),
						Al(301, '<'),
						wl(302, 'span', sv),
						Al(303, 'select'),
						_l(),
						Al(304, ' '),
						wl(305, 'span', lv),
						Al(306, 'class'),
						_l(),
						Al(307, '='),
						wl(308, 'span', uv),
						Al(309, '"form-field"'),
						_l(),
						Al(310, ' '),
						wl(311, 'span', lv),
						Al(312, 'name'),
						_l(),
						Al(313, '='),
						wl(314, 'span', uv),
						Al(315, '"language"'),
						_l(),
						Al(316, ' '),
						wl(317, 'span', lv),
						Al(318, 'id'),
						_l(),
						Al(319, '='),
						wl(320, 'span', uv),
						Al(321, '"language"'),
						_l(),
						Al(322, ' '),
						wl(323, 'span', lv),
						Al(324, 'multiple'),
						_l(),
						Al(325, '>'),
						_l(),
						Al(326, '\n                '),
						wl(327, 'span', av),
						Al(328, '<'),
						wl(329, 'span', sv),
						Al(330, 'option'),
						_l(),
						Al(331, '>'),
						_l(),
						Al(332, 'English'),
						wl(333, 'span', av),
						Al(334, '</'),
						wl(335, 'span', sv),
						Al(336, 'option'),
						_l(),
						Al(337, '>'),
						_l(),
						Al(338, '\n                '),
						wl(339, 'span', av),
						Al(340, '<'),
						wl(341, 'span', sv),
						Al(342, 'option'),
						_l(),
						Al(343, '>'),
						_l(),
						Al(344, 'French'),
						wl(345, 'span', av),
						Al(346, '</'),
						wl(347, 'span', sv),
						Al(348, 'option'),
						_l(),
						Al(349, '>'),
						_l(),
						Al(350, '\n                '),
						wl(351, 'span', av),
						Al(352, '<'),
						wl(353, 'span', sv),
						Al(354, 'option'),
						_l(),
						Al(355, '>'),
						_l(),
						Al(356, 'Spanish'),
						wl(357, 'span', av),
						Al(358, '</'),
						wl(359, 'span', sv),
						Al(360, 'option'),
						_l(),
						Al(361, '>'),
						_l(),
						Al(362, '\n            '),
						wl(363, 'span', av),
						Al(364, '</'),
						wl(365, 'span', sv),
						Al(366, 'select'),
						_l(),
						Al(367, '>'),
						_l(),
						Al(368, '\n        '),
						wl(369, 'span', av),
						Al(370, '</'),
						wl(371, 'span', sv),
						Al(372, 'li'),
						_l(),
						Al(373, '>'),
						_l(),
						Al(374, '\n        '),
						wl(375, 'span', av),
						Al(376, '<'),
						wl(377, 'span', sv),
						Al(378, 'li'),
						_l(),
						Al(379, ' '),
						wl(380, 'span', lv),
						Al(381, 'class'),
						_l(),
						Al(382, '='),
						wl(383, 'span', uv),
						Al(384, '"field-group"'),
						_l(),
						Al(385, '>'),
						_l(),
						Al(386, '\n            '),
						wl(387, 'span', av),
						Al(388, '<'),
						wl(389, 'span', sv),
						Al(390, 'label'),
						_l(),
						Al(391, ' '),
						wl(392, 'span', lv),
						Al(393, 'class'),
						_l(),
						Al(394, '='),
						wl(395, 'span', uv),
						Al(396, '"form-label"'),
						_l(),
						Al(397, ' '),
						wl(398, 'span', lv),
						Al(399, 'for'),
						_l(),
						Al(400, '='),
						wl(401, 'span', uv),
						Al(402, '"notes"'),
						_l(),
						Al(403, '>'),
						_l(),
						Al(404, 'Notes'),
						wl(405, 'span', av),
						Al(406, '</'),
						wl(407, 'span', sv),
						Al(408, 'label'),
						_l(),
						Al(409, '>'),
						_l(),
						Al(410, '\n            '),
						wl(411, 'span', av),
						Al(412, '<'),
						wl(413, 'span', sv),
						Al(414, 'textarea'),
						_l(),
						Al(415, ' '),
						wl(416, 'span', lv),
						Al(417, 'class'),
						_l(),
						Al(418, '='),
						wl(419, 'span', uv),
						Al(420, '"form-field"'),
						_l(),
						Al(421, ' '),
						wl(422, 'span', lv),
						Al(423, 'name'),
						_l(),
						Al(424, '='),
						wl(425, 'span', uv),
						Al(426, '"notes"'),
						_l(),
						Al(427, ' '),
						wl(428, 'span', lv),
						Al(429, 'id'),
						_l(),
						Al(430, '='),
						wl(431, 'span', uv),
						Al(432, '"notes"'),
						_l(),
						Al(433, ' '),
						wl(434, 'span', lv),
						Al(435, 'placeholder'),
						_l(),
						Al(436, '='),
						wl(437, 'span', uv),
						Al(438, '"Enter notes"'),
						_l(),
						Al(439, '>'),
						_l(),
						wl(440, 'span', av),
						Al(441, '</'),
						wl(442, 'span', sv),
						Al(443, 'textarea'),
						_l(),
						Al(444, '>'),
						_l(),
						Al(445, '\n        '),
						wl(446, 'span', av),
						Al(447, '</'),
						wl(448, 'span', sv),
						Al(449, 'li'),
						_l(),
						Al(450, '>'),
						_l(),
						Al(451, '\n    '),
						wl(452, 'span', av),
						Al(453, '</'),
						wl(454, 'span', sv),
						Al(455, 'ul'),
						_l(),
						Al(456, '>'),
						_l(),
						Al(457, '    \n'),
						wl(458, 'span', av),
						Al(459, '</'),
						wl(460, 'span', sv),
						Al(461, 'form'),
						_l(),
						Al(462, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function jw(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Field Group'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Field groups are styled with a '),
						wl(6, 'code'),
						Al(7, '.field-group'),
						_l(),
						Al(8, ' class.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'form'),
						wl(11, 'ul', rw),
						wl(12, 'li', ow),
						wl(13, 'label', iw),
						Al(14, 'Name'),
						_l(),
						xl(15, 'input', aw),
						_l(),
						_l(),
						_l(),
						_l(),
						wl(16, 'figure'),
						wl(17, 'pre', iv),
						Al(18, '<'),
						wl(19, 'span', Ev),
						Al(20, 'form'),
						_l(),
						Al(21, '>\n    <ul '),
						wl(22, 'span', Ev),
						Al(23, 'class'),
						_l(),
						Al(24, '='),
						wl(25, 'span', Ov),
						Al(26, '"form-group"'),
						_l(),
						Al(27, '>\n        <'),
						wl(28, 'span', Ev),
						Al(29, 'li'),
						_l(),
						Al(30, ' '),
						wl(31, 'span', Ev),
						Al(32, 'class'),
						_l(),
						Al(33, '='),
						wl(34, 'span', Ov),
						Al(35, '"field-group"'),
						_l(),
						Al(36, '>\n            <'),
						wl(37, 'span', Ev),
						Al(38, 'label'),
						_l(),
						Al(39, ' '),
						wl(40, 'span', Ev),
						Al(41, 'class'),
						_l(),
						Al(42, '='),
						wl(43, 'span', Ov),
						Al(44, '"form-label"'),
						_l(),
						Al(45, ' '),
						wl(46, 'span', Ev),
						Al(47, 'for'),
						_l(),
						Al(48, '='),
						wl(49, 'span', Ov),
						Al(50, '"name"'),
						_l(),
						Al(51, '>Name</'),
						wl(52, 'span', Ev),
						Al(53, 'label'),
						_l(),
						Al(54, '>\n            <'),
						wl(55, 'span', Ev),
						Al(56, 'input'),
						_l(),
						Al(57, ' '),
						wl(58, 'span', Ev),
						Al(59, 'class'),
						_l(),
						Al(60, '='),
						wl(61, 'span', Ov),
						Al(62, '"form-field"'),
						_l(),
						Al(63, ' '),
						wl(64, 'span', Ev),
						Al(65, 'type'),
						_l(),
						Al(66, '='),
						wl(67, 'span', Ov),
						Al(68, '"text"'),
						_l(),
						Al(69, ' id='),
						wl(70, 'span', Ov),
						Al(71, '"name"'),
						_l(),
						Al(72, ' name='),
						wl(73, 'span', Ov),
						Al(74, '"name"'),
						_l(),
						Al(75, ' placeholder='),
						wl(76, 'span', Ov),
						Al(77, '"Enter name"'),
						_l(),
						Al(78, '>\n        </'),
						wl(79, 'span', Ev),
						Al(80, 'li'),
						_l(),
						Al(81, '>\n    </ul>    \n</'),
						wl(82, 'span', Ev),
						Al(83, 'form'),
						_l(),
						Al(84, '>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Rw = [1, 'fieldset'];
			function Dw(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Fieldset'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Fieldsets are styled with a '),
						wl(6, 'code'),
						Al(7, '.fieldset'),
						_l(),
						Al(8, ' class and have a '),
						wl(9, 'code'),
						Al(10, '<legend>'),
						_l(),
						Al(11, ' tag as the first child.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'form'),
						wl(14, 'fieldset', Rw),
						wl(15, 'legend'),
						Al(16, 'Contact'),
						_l(),
						wl(17, 'ul', rw),
						wl(18, 'li', ow),
						wl(19, 'label', iw),
						Al(20, 'Name'),
						_l(),
						xl(21, 'input', aw),
						_l(),
						_l(),
						_l(),
						_l(),
						_l(),
						wl(22, 'figure'),
						wl(23, 'pre', iv),
						Al(24, '<'),
						wl(25, 'span', Ev),
						Al(26, 'form'),
						_l(),
						Al(27, '>\n    <fieldset '),
						wl(28, 'span', Ev),
						Al(29, 'class'),
						_l(),
						Al(30, '='),
						wl(31, 'span', Ov),
						Al(32, '"fieldset"'),
						_l(),
						Al(33, '>\n        <legend>Contact</legend>\n        <ul '),
						wl(34, 'span', Ev),
						Al(35, 'class'),
						_l(),
						Al(36, '='),
						wl(37, 'span', Ov),
						Al(38, '"form-group"'),
						_l(),
						Al(39, '>\n            <'),
						wl(40, 'span', Ev),
						Al(41, 'li'),
						_l(),
						Al(42, ' '),
						wl(43, 'span', Ev),
						Al(44, 'class'),
						_l(),
						Al(45, '='),
						wl(46, 'span', Ov),
						Al(47, '"field-group"'),
						_l(),
						Al(48, '>\n                <'),
						wl(49, 'span', Ev),
						Al(50, 'label'),
						_l(),
						Al(51, ' '),
						wl(52, 'span', Ev),
						Al(53, 'class'),
						_l(),
						Al(54, '='),
						wl(55, 'span', Ov),
						Al(56, '"form-label"'),
						_l(),
						Al(57, ' '),
						wl(58, 'span', Ev),
						Al(59, 'for'),
						_l(),
						Al(60, '='),
						wl(61, 'span', Ov),
						Al(62, '"name"'),
						_l(),
						Al(63, '>Name</'),
						wl(64, 'span', Ev),
						Al(65, 'label'),
						_l(),
						Al(66, '>\n                <'),
						wl(67, 'span', Ev),
						Al(68, 'input'),
						_l(),
						Al(69, ' '),
						wl(70, 'span', Ev),
						Al(71, 'class'),
						_l(),
						Al(72, '='),
						wl(73, 'span', Ov),
						Al(74, '"form-field"'),
						_l(),
						Al(75, ' '),
						wl(76, 'span', Ev),
						Al(77, 'type'),
						_l(),
						Al(78, '='),
						wl(79, 'span', Ov),
						Al(80, '"text"'),
						_l(),
						Al(81, ' id='),
						wl(82, 'span', Ov),
						Al(83, '"name"'),
						_l(),
						Al(84, ' name='),
						wl(85, 'span', Ov),
						Al(86, '"name"'),
						_l(),
						Al(87, ' placeholder='),
						wl(88, 'span', Ov),
						Al(89, '"Enter name"'),
						_l(),
						Al(90, '>\n            </'),
						wl(91, 'span', Ev),
						Al(92, 'li'),
						_l(),
						Al(93, '>\n        </ul>\n    </fieldset>    \n</'),
						wl(94, 'span', Ev),
						Al(95, 'form'),
						_l(),
						Al(96, '>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Nw = [1, 'form-group-inline'],
				Uw = ['for', 'email', 1, 'form-label'],
				Lw = ['type', 'text', 'id', 'email', 'name', 'email', 'placeholder', 'Enter email', 1, 'form-field'];
			function Hw(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Form Group'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Form groups are styled with a '),
						wl(6, 'code'),
						Al(7, '.form-group'),
						_l(),
						Al(8, ' class for vertical fields and '),
						wl(9, 'code'),
						Al(10, '.form-group-inline'),
						_l(),
						Al(11, ' for horizontal fields.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'form'),
						wl(14, 'ul', Nw),
						wl(15, 'li', ow),
						wl(16, 'label', iw),
						Al(17, 'Name'),
						_l(),
						xl(18, 'input', aw),
						_l(),
						wl(19, 'li', ow),
						wl(20, 'label', Uw),
						Al(21, 'Email'),
						_l(),
						xl(22, 'input', Lw),
						_l(),
						_l(),
						wl(23, 'ul', rw),
						wl(24, 'li', ow),
						wl(25, 'label', iw),
						Al(26, 'Name'),
						_l(),
						xl(27, 'input', aw),
						_l(),
						wl(28, 'li', ow),
						wl(29, 'label', Uw),
						Al(30, 'Email'),
						_l(),
						xl(31, 'input', Lw),
						_l(),
						_l(),
						_l(),
						_l(),
						wl(32, 'figure'),
						wl(33, 'pre', iv),
						Al(34, '<'),
						wl(35, 'span', Ev),
						Al(36, 'form'),
						_l(),
						Al(37, '>\n    <ul '),
						wl(38, 'span', Ev),
						Al(39, 'class'),
						_l(),
						Al(40, '='),
						wl(41, 'span', Ov),
						Al(42, '"form-group-inline"'),
						_l(),
						Al(43, '>\n        <'),
						wl(44, 'span', Ev),
						Al(45, 'li'),
						_l(),
						Al(46, ' '),
						wl(47, 'span', Ev),
						Al(48, 'class'),
						_l(),
						Al(49, '='),
						wl(50, 'span', Ov),
						Al(51, '"field-group"'),
						_l(),
						Al(52, '>\n            <'),
						wl(53, 'span', Ev),
						Al(54, 'label'),
						_l(),
						Al(55, ' '),
						wl(56, 'span', Ev),
						Al(57, 'class'),
						_l(),
						Al(58, '='),
						wl(59, 'span', Ov),
						Al(60, '"form-label"'),
						_l(),
						Al(61, ' '),
						wl(62, 'span', Ev),
						Al(63, 'for'),
						_l(),
						Al(64, '='),
						wl(65, 'span', Ov),
						Al(66, '"name"'),
						_l(),
						Al(67, '>Name</'),
						wl(68, 'span', Ev),
						Al(69, 'label'),
						_l(),
						Al(70, '>\n            <'),
						wl(71, 'span', Ev),
						Al(72, 'input'),
						_l(),
						Al(73, ' '),
						wl(74, 'span', Ev),
						Al(75, 'class'),
						_l(),
						Al(76, '='),
						wl(77, 'span', Ov),
						Al(78, '"form-field"'),
						_l(),
						Al(79, ' '),
						wl(80, 'span', Ev),
						Al(81, 'type'),
						_l(),
						Al(82, '='),
						wl(83, 'span', Ov),
						Al(84, '"text"'),
						_l(),
						Al(85, ' id='),
						wl(86, 'span', Ov),
						Al(87, '"name"'),
						_l(),
						Al(88, ' name='),
						wl(89, 'span', Ov),
						Al(90, '"name"'),
						_l(),
						Al(91, ' placeholder='),
						wl(92, 'span', Ov),
						Al(93, '"Enter name"'),
						_l(),
						Al(94, '>\n        </'),
						wl(95, 'span', Ev),
						Al(96, 'li'),
						_l(),
						Al(97, '>\n        <'),
						wl(98, 'span', Ev),
						Al(99, 'li'),
						_l(),
						Al(100, ' '),
						wl(101, 'span', Ev),
						Al(102, 'class'),
						_l(),
						Al(103, '='),
						wl(104, 'span', Ov),
						Al(105, '"field-group"'),
						_l(),
						Al(106, '>\n            <'),
						wl(107, 'span', Ev),
						Al(108, 'label'),
						_l(),
						Al(109, ' '),
						wl(110, 'span', Ev),
						Al(111, 'class'),
						_l(),
						Al(112, '='),
						wl(113, 'span', Ov),
						Al(114, '"form-label"'),
						_l(),
						Al(115, ' '),
						wl(116, 'span', Ev),
						Al(117, 'for'),
						_l(),
						Al(118, '='),
						wl(119, 'span', Ov),
						Al(120, '"email"'),
						_l(),
						Al(121, '>Email</'),
						wl(122, 'span', Ev),
						Al(123, 'label'),
						_l(),
						Al(124, '>\n            <'),
						wl(125, 'span', Ev),
						Al(126, 'input'),
						_l(),
						Al(127, ' '),
						wl(128, 'span', Ev),
						Al(129, 'class'),
						_l(),
						Al(130, '='),
						wl(131, 'span', Ov),
						Al(132, '"form-field"'),
						_l(),
						Al(133, ' '),
						wl(134, 'span', Ev),
						Al(135, 'type'),
						_l(),
						Al(136, '='),
						wl(137, 'span', Ov),
						Al(138, '"text"'),
						_l(),
						Al(139, ' id='),
						wl(140, 'span', Ov),
						Al(141, '"email"'),
						_l(),
						Al(142, ' name='),
						wl(143, 'span', Ov),
						Al(144, '"email"'),
						_l(),
						Al(145, ' placeholder='),
						wl(146, 'span', Ov),
						Al(147, '"Enter email"'),
						_l(),
						Al(148, '>\n        </'),
						wl(149, 'span', Ev),
						Al(150, 'li'),
						_l(),
						Al(151, '>\n    </ul>    \n    <ul '),
						wl(152, 'span', Ev),
						Al(153, 'class'),
						_l(),
						Al(154, '='),
						wl(155, 'span', Ov),
						Al(156, '"form-group"'),
						_l(),
						Al(157, '>\n        <'),
						wl(158, 'span', Ev),
						Al(159, 'li'),
						_l(),
						Al(160, ' '),
						wl(161, 'span', Ev),
						Al(162, 'class'),
						_l(),
						Al(163, '='),
						wl(164, 'span', Ov),
						Al(165, '"field-group"'),
						_l(),
						Al(166, '>\n            <'),
						wl(167, 'span', Ev),
						Al(168, 'label'),
						_l(),
						Al(169, ' '),
						wl(170, 'span', Ev),
						Al(171, 'class'),
						_l(),
						Al(172, '='),
						wl(173, 'span', Ov),
						Al(174, '"form-label"'),
						_l(),
						Al(175, ' '),
						wl(176, 'span', Ev),
						Al(177, 'for'),
						_l(),
						Al(178, '='),
						wl(179, 'span', Ov),
						Al(180, '"name"'),
						_l(),
						Al(181, '>Name</'),
						wl(182, 'span', Ev),
						Al(183, 'label'),
						_l(),
						Al(184, '>\n            <'),
						wl(185, 'span', Ev),
						Al(186, 'input'),
						_l(),
						Al(187, ' '),
						wl(188, 'span', Ev),
						Al(189, 'class'),
						_l(),
						Al(190, '='),
						wl(191, 'span', Ov),
						Al(192, '"form-field"'),
						_l(),
						Al(193, ' '),
						wl(194, 'span', Ev),
						Al(195, 'type'),
						_l(),
						Al(196, '='),
						wl(197, 'span', Ov),
						Al(198, '"text"'),
						_l(),
						Al(199, ' id='),
						wl(200, 'span', Ov),
						Al(201, '"name"'),
						_l(),
						Al(202, ' name='),
						wl(203, 'span', Ov),
						Al(204, '"name"'),
						_l(),
						Al(205, ' placeholder='),
						wl(206, 'span', Ov),
						Al(207, '"Enter name"'),
						_l(),
						Al(208, '>\n        </'),
						wl(209, 'span', Ev),
						Al(210, 'li'),
						_l(),
						Al(211, '>\n        <'),
						wl(212, 'span', Ev),
						Al(213, 'li'),
						_l(),
						Al(214, ' '),
						wl(215, 'span', Ev),
						Al(216, 'class'),
						_l(),
						Al(217, '='),
						wl(218, 'span', Ov),
						Al(219, '"field-group"'),
						_l(),
						Al(220, '>\n            <'),
						wl(221, 'span', Ev),
						Al(222, 'label'),
						_l(),
						Al(223, ' '),
						wl(224, 'span', Ev),
						Al(225, 'class'),
						_l(),
						Al(226, '='),
						wl(227, 'span', Ov),
						Al(228, '"form-label"'),
						_l(),
						Al(229, ' '),
						wl(230, 'span', Ev),
						Al(231, 'for'),
						_l(),
						Al(232, '='),
						wl(233, 'span', Ov),
						Al(234, '"email"'),
						_l(),
						Al(235, '>Email</'),
						wl(236, 'span', Ev),
						Al(237, 'label'),
						_l(),
						Al(238, '>\n            <'),
						wl(239, 'span', Ev),
						Al(240, 'input'),
						_l(),
						Al(241, ' '),
						wl(242, 'span', Ev),
						Al(243, 'class'),
						_l(),
						Al(244, '='),
						wl(245, 'span', Ov),
						Al(246, '"form-field"'),
						_l(),
						Al(247, ' '),
						wl(248, 'span', Ev),
						Al(249, 'type'),
						_l(),
						Al(250, '='),
						wl(251, 'span', Ov),
						Al(252, '"text"'),
						_l(),
						Al(253, ' id='),
						wl(254, 'span', Ov),
						Al(255, '"email"'),
						_l(),
						Al(256, ' name='),
						wl(257, 'span', Ov),
						Al(258, '"email"'),
						_l(),
						Al(259, ' placeholder='),
						wl(260, 'span', Ov),
						Al(261, '"Enter email"'),
						_l(),
						Al(262, '>\n        </'),
						wl(263, 'span', Ev),
						Al(264, 'li'),
						_l(),
						Al(265, '>\n    </ul>    \n</'),
						wl(266, 'span', Ev),
						Al(267, 'form'),
						_l(),
						Al(268, '>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function zw(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Label'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Form labels are styled with a '),
						wl(6, 'code'),
						Al(7, '.form-label'),
						_l(),
						Al(8, ' class.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'form'),
						wl(11, 'ul', rw),
						wl(12, 'li', ow),
						wl(13, 'label', iw),
						Al(14, 'Name'),
						_l(),
						xl(15, 'input', aw),
						_l(),
						_l(),
						_l(),
						_l(),
						wl(16, 'figure'),
						wl(17, 'pre', iv),
						Al(18, '<'),
						wl(19, 'span', Ev),
						Al(20, 'form'),
						_l(),
						Al(21, '>\n    <ul '),
						wl(22, 'span', Ev),
						Al(23, 'class'),
						_l(),
						Al(24, '='),
						wl(25, 'span', Ov),
						Al(26, '"form-group"'),
						_l(),
						Al(27, '>\n        <'),
						wl(28, 'span', Ev),
						Al(29, 'li'),
						_l(),
						Al(30, ' '),
						wl(31, 'span', Ev),
						Al(32, 'class'),
						_l(),
						Al(33, '='),
						wl(34, 'span', Ov),
						Al(35, '"field-group"'),
						_l(),
						Al(36, '>\n            <'),
						wl(37, 'span', Ev),
						Al(38, 'label'),
						_l(),
						Al(39, ' '),
						wl(40, 'span', Ev),
						Al(41, 'class'),
						_l(),
						Al(42, '='),
						wl(43, 'span', Ov),
						Al(44, '"form-label"'),
						_l(),
						Al(45, ' '),
						wl(46, 'span', Ev),
						Al(47, 'for'),
						_l(),
						Al(48, '='),
						wl(49, 'span', Ov),
						Al(50, '"name"'),
						_l(),
						Al(51, '>Name</'),
						wl(52, 'span', Ev),
						Al(53, 'label'),
						_l(),
						Al(54, '>\n            <'),
						wl(55, 'span', Ev),
						Al(56, 'input'),
						_l(),
						Al(57, ' '),
						wl(58, 'span', Ev),
						Al(59, 'class'),
						_l(),
						Al(60, '='),
						wl(61, 'span', Ov),
						Al(62, '"form-field"'),
						_l(),
						Al(63, ' '),
						wl(64, 'span', Ev),
						Al(65, 'type'),
						_l(),
						Al(66, '='),
						wl(67, 'span', Ov),
						Al(68, '"text"'),
						_l(),
						Al(69, ' id='),
						wl(70, 'span', Ov),
						Al(71, '"name"'),
						_l(),
						Al(72, ' name='),
						wl(73, 'span', Ov),
						Al(74, '"name"'),
						_l(),
						Al(75, ' placeholder='),
						wl(76, 'span', Ov),
						Al(77, '"Enter name"'),
						_l(),
						Al(78, '>\n        </'),
						wl(79, 'span', Ev),
						Al(80, 'li'),
						_l(),
						Al(81, '>\n    </ul>    \n</'),
						wl(82, 'span', Ev),
						Al(83, 'form'),
						_l(),
						Al(84, '>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var Vw = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 'disabled', '', 1, 'form-field'],
				Fw = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 'readonly', '', 1, 'form-field'];
			function Bw(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'State'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Form fields can be disabled by adding a '),
						wl(6, 'code'),
						Al(7, 'disabled'),
						_l(),
						Al(8, ' attribute or readonly by adding a '),
						wl(9, 'code'),
						Al(10, 'readonly'),
						_l(),
						Al(11, ' attribute.'),
						_l(),
						_l(),
						wl(12, 'section', tv),
						wl(13, 'form'),
						wl(14, 'ul', rw),
						wl(15, 'li', ow),
						wl(16, 'label', iw),
						Al(17, 'Disabled'),
						_l(),
						xl(18, 'input', Vw),
						_l(),
						wl(19, 'li', ow),
						wl(20, 'label', iw),
						Al(21, 'Readonly'),
						_l(),
						xl(22, 'input', Fw),
						_l(),
						_l(),
						_l(),
						_l(),
						wl(23, 'figure'),
						wl(24, 'pre', iv),
						Al(25, '<'),
						wl(26, 'span', Ev),
						Al(27, 'form'),
						_l(),
						Al(28, '>\n    <ul '),
						wl(29, 'span', Ev),
						Al(30, 'class'),
						_l(),
						Al(31, '='),
						wl(32, 'span', Ov),
						Al(33, '"form-group"'),
						_l(),
						Al(34, '>\n        <'),
						wl(35, 'span', Ev),
						Al(36, 'li'),
						_l(),
						Al(37, ' '),
						wl(38, 'span', Ev),
						Al(39, 'class'),
						_l(),
						Al(40, '='),
						wl(41, 'span', Ov),
						Al(42, '"field-group"'),
						_l(),
						Al(43, '>\n            <'),
						wl(44, 'span', Ev),
						Al(45, 'label'),
						_l(),
						Al(46, ' '),
						wl(47, 'span', Ev),
						Al(48, 'class'),
						_l(),
						Al(49, '='),
						wl(50, 'span', Ov),
						Al(51, '"form-label"'),
						_l(),
						Al(52, ' '),
						wl(53, 'span', Ev),
						Al(54, 'for'),
						_l(),
						Al(55, '='),
						wl(56, 'span', Ov),
						Al(57, '"name"'),
						_l(),
						Al(58, '>Disabled</'),
						wl(59, 'span', Ev),
						Al(60, 'label'),
						_l(),
						Al(61, '>\n            <'),
						wl(62, 'span', Ev),
						Al(63, 'input'),
						_l(),
						Al(64, ' '),
						wl(65, 'span', Ev),
						Al(66, 'class'),
						_l(),
						Al(67, '='),
						wl(68, 'span', Ov),
						Al(69, '"form-field"'),
						_l(),
						Al(70, ' '),
						wl(71, 'span', Ev),
						Al(72, 'type'),
						_l(),
						Al(73, '='),
						wl(74, 'span', Ov),
						Al(75, '"text"'),
						_l(),
						Al(76, ' id='),
						wl(77, 'span', Ov),
						Al(78, '"name"'),
						_l(),
						Al(79, ' name='),
						wl(80, 'span', Ov),
						Al(81, '"name"'),
						_l(),
						Al(82, ' placeholder='),
						wl(83, 'span', Ov),
						Al(84, '"Enter name"'),
						_l(),
						Al(85, ' disabled>\n        </'),
						wl(86, 'span', Ev),
						Al(87, 'li'),
						_l(),
						Al(88, '>\n        <'),
						wl(89, 'span', Ev),
						Al(90, 'li'),
						_l(),
						Al(91, ' '),
						wl(92, 'span', Ev),
						Al(93, 'class'),
						_l(),
						Al(94, '='),
						wl(95, 'span', Ov),
						Al(96, '"field-group"'),
						_l(),
						Al(97, '>\n            <'),
						wl(98, 'span', Ev),
						Al(99, 'label'),
						_l(),
						Al(100, ' '),
						wl(101, 'span', Ev),
						Al(102, 'class'),
						_l(),
						Al(103, '='),
						wl(104, 'span', Ov),
						Al(105, '"form-label"'),
						_l(),
						Al(106, ' '),
						wl(107, 'span', Ev),
						Al(108, 'for'),
						_l(),
						Al(109, '='),
						wl(110, 'span', Ov),
						Al(111, '"name"'),
						_l(),
						Al(112, '>Readonly</'),
						wl(113, 'span', Ev),
						Al(114, 'label'),
						_l(),
						Al(115, '>\n            <'),
						wl(116, 'span', Ev),
						Al(117, 'input'),
						_l(),
						Al(118, ' '),
						wl(119, 'span', Ev),
						Al(120, 'class'),
						_l(),
						Al(121, '='),
						wl(122, 'span', Ov),
						Al(123, '"form-field"'),
						_l(),
						Al(124, ' '),
						wl(125, 'span', Ev),
						Al(126, 'type'),
						_l(),
						Al(127, '='),
						wl(128, 'span', Ov),
						Al(129, '"text"'),
						_l(),
						Al(130, ' id='),
						wl(131, 'span', Ov),
						Al(132, '"name"'),
						_l(),
						Al(133, ' name='),
						wl(134, 'span', Ov),
						Al(135, '"name"'),
						_l(),
						Al(136, ' placeholder='),
						wl(137, 'span', Ov),
						Al(138, '"Enter name"'),
						_l(),
						Al(139, ' readonly>\n        </'),
						wl(140, 'span', Ev),
						Al(141, 'li'),
						_l(),
						Al(142, '>\n    </ul>    \n</'),
						wl(143, 'span', Ev),
						Al(144, 'form'),
						_l(),
						Al(145, '>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(12), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function qw(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function Gw(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Area'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Zw(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Container'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Ww(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Item'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Qw(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function Yw(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Container'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Jw(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Sticky Footer'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function Kw(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function Xw(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function $w(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Items'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function t_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Links'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function e_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Placement'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function n_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function r_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function o_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function i_(t, e) {
				1 & t &&
					(wl(0, 'article', Xb),
					wl(1, 'section', $b),
					wl(2, 'p'),
					Al(3, 'Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.'),
					_l(),
					_l(),
					_l());
			}
			var a_ = [1, 'mar-t-xs'],
				s_ = [1, 'mar-r-sm'],
				l_ = [1, 'mar-b-md'],
				u_ = [1, 'mar-l-lg'],
				c_ = [1, 'mar-tb-xl'],
				p_ = [1, 'mar-lr-md'],
				f_ = [1, 'mar-a-md'];
			function d_(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Margin'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use a '),
						wl(6, 'code'),
						Al(7, '.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'),
						_l(),
						Al(8, ' class to add margin to an element.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'p', a_),
						Al(11, 'top extra small'),
						_l(),
						wl(12, 'p', s_),
						Al(13, 'right small'),
						_l(),
						wl(14, 'p', l_),
						Al(15, 'bottom medium'),
						_l(),
						wl(16, 'p', u_),
						Al(17, 'left large'),
						_l(),
						wl(18, 'p', c_),
						Al(19, 'top bottom extra large'),
						_l(),
						wl(20, 'p', p_),
						Al(21, 'left right medium'),
						_l(),
						wl(22, 'p', f_),
						Al(23, 'all medium'),
						_l(),
						_l(),
						wl(24, 'figure'),
						wl(25, 'pre', iv),
						Al(26, '<'),
						wl(27, 'span', av),
						Al(28, 'p'),
						_l(),
						Al(29, ' class='),
						wl(30, 'span', Ov),
						Al(31, '"mar-t-xs"'),
						_l(),
						Al(32, '>'),
						wl(33, 'span', lv),
						Al(34, 'top'),
						_l(),
						Al(35, ' extra small</p>\n<'),
						wl(36, 'span', av),
						Al(37, 'p'),
						_l(),
						Al(38, ' class='),
						wl(39, 'span', Ov),
						Al(40, '"mar-r-sm"'),
						_l(),
						Al(41, '>'),
						wl(42, 'span', lv),
						Al(43, 'right'),
						_l(),
						Al(44, ' small</p>\n<'),
						wl(45, 'span', av),
						Al(46, 'p'),
						_l(),
						Al(47, ' class='),
						wl(48, 'span', Ov),
						Al(49, '"mar-b-md"'),
						_l(),
						Al(50, '>'),
						wl(51, 'span', lv),
						Al(52, 'bottom'),
						_l(),
						Al(53, ' medium</p>\n<'),
						wl(54, 'span', av),
						Al(55, 'p'),
						_l(),
						Al(56, ' class='),
						wl(57, 'span', Ov),
						Al(58, '"mar-l-lg"'),
						_l(),
						Al(59, '>'),
						wl(60, 'span', lv),
						Al(61, 'left'),
						_l(),
						Al(62, ' large</p>\n<'),
						wl(63, 'span', av),
						Al(64, 'p'),
						_l(),
						Al(65, ' class='),
						wl(66, 'span', Ov),
						Al(67, '"mar-tb-xl"'),
						_l(),
						Al(68, '>'),
						wl(69, 'span', lv),
						Al(70, 'top'),
						_l(),
						Al(71, ' '),
						wl(72, 'span', lv),
						Al(73, 'bottom'),
						_l(),
						Al(74, ' extra large</p>\n<'),
						wl(75, 'span', av),
						Al(76, 'p'),
						_l(),
						Al(77, ' class='),
						wl(78, 'span', Ov),
						Al(79, '"mar-lr-md"'),
						_l(),
						Al(80, '>'),
						wl(81, 'span', lv),
						Al(82, 'left'),
						_l(),
						Al(83, ' '),
						wl(84, 'span', lv),
						Al(85, 'right'),
						_l(),
						Al(86, ' medium</p>\n<'),
						wl(87, 'span', av),
						Al(88, 'p'),
						_l(),
						Al(89, ' class='),
						wl(90, 'span', Ov),
						Al(91, '"mar-a-md"'),
						_l(),
						Al(92, '>all medium</p>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var h_ = [1, 'pad-t-xs'],
				g_ = [1, 'pad-r-sm'],
				m_ = [1, 'pad-b-md'],
				b_ = [1, 'pad-l-lg'],
				v_ = [1, 'pad-tb-xl'],
				y_ = [1, 'pad-lr-md'],
				w_ = [1, 'pad-a-md'];
			function __(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'h2'),
						Al(3, 'Padding'),
						_l(),
						wl(4, 'p'),
						Al(5, 'Use a '),
						wl(6, 'code'),
						Al(7, '.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'),
						_l(),
						Al(8, ' class to add padding to an element.'),
						_l(),
						_l(),
						wl(9, 'section', tv),
						wl(10, 'p', h_),
						Al(11, 'top extra small'),
						_l(),
						wl(12, 'p', g_),
						Al(13, 'right small'),
						_l(),
						wl(14, 'p', m_),
						Al(15, 'bottom medium'),
						_l(),
						wl(16, 'p', b_),
						Al(17, 'left large'),
						_l(),
						wl(18, 'p', v_),
						Al(19, 'top bottom extra large'),
						_l(),
						wl(20, 'p', y_),
						Al(21, 'left right medium'),
						_l(),
						wl(22, 'p', w_),
						Al(23, 'all medium'),
						_l(),
						_l(),
						wl(24, 'figure'),
						wl(25, 'pre', iv),
						Al(26, '<'),
						wl(27, 'span', av),
						Al(28, 'p'),
						_l(),
						Al(29, ' class='),
						wl(30, 'span', Ov),
						Al(31, '"pad-t-xs"'),
						_l(),
						Al(32, '>'),
						wl(33, 'span', lv),
						Al(34, 'top'),
						_l(),
						Al(35, ' extra small</p>\n<'),
						wl(36, 'span', av),
						Al(37, 'p'),
						_l(),
						Al(38, ' class='),
						wl(39, 'span', Ov),
						Al(40, '"pad-r-sm"'),
						_l(),
						Al(41, '>'),
						wl(42, 'span', lv),
						Al(43, 'right'),
						_l(),
						Al(44, ' small</p>\n<'),
						wl(45, 'span', av),
						Al(46, 'p'),
						_l(),
						Al(47, ' class='),
						wl(48, 'span', Ov),
						Al(49, '"pad-b-md"'),
						_l(),
						Al(50, '>'),
						wl(51, 'span', lv),
						Al(52, 'bottom'),
						_l(),
						Al(53, ' medium</p>\n<'),
						wl(54, 'span', av),
						Al(55, 'p'),
						_l(),
						Al(56, ' class='),
						wl(57, 'span', Ov),
						Al(58, '"pad-l-lg"'),
						_l(),
						Al(59, '>'),
						wl(60, 'span', lv),
						Al(61, 'left'),
						_l(),
						Al(62, ' large</p>\n<'),
						wl(63, 'span', av),
						Al(64, 'p'),
						_l(),
						Al(65, ' class='),
						wl(66, 'span', Ov),
						Al(67, '"pad-tb-xl"'),
						_l(),
						Al(68, '>'),
						wl(69, 'span', lv),
						Al(70, 'top'),
						_l(),
						Al(71, ' '),
						wl(72, 'span', lv),
						Al(73, 'bottom'),
						_l(),
						Al(74, ' extra large</p>\n<'),
						wl(75, 'span', av),
						Al(76, 'p'),
						_l(),
						Al(77, ' class='),
						wl(78, 'span', Ov),
						Al(79, '"pad-lr-md"'),
						_l(),
						Al(80, '>'),
						wl(81, 'span', lv),
						Al(82, 'left'),
						_l(),
						Al(83, ' '),
						wl(84, 'span', lv),
						Al(85, 'right'),
						_l(),
						Al(86, ' medium</p>\n<'),
						wl(87, 'span', av),
						Al(88, 'p'),
						_l(),
						Al(89, ' class='),
						wl(90, 'span', Ov),
						Al(91, '"pad-a-md"'),
						_l(),
						Al(92, '>all medium</p>'),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(9), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			var x_ = [1, 'spinner'],
				C_ = [1, 'spinner-dotted'];
			function k_(t, e) {
				if (
					(1 & t &&
						(wl(0, 'article', Xb),
						wl(1, 'section', $b),
						wl(2, 'p'),
						Al(3, 'Spinners are styled with a '),
						wl(4, 'code'),
						Al(5, '.spinner[-dotted]'),
						_l(),
						Al(6, ' class.'),
						_l(),
						_l(),
						wl(7, 'section', tv),
						xl(8, 'p', x_),
						xl(9, 'p', C_),
						_l(),
						wl(10, 'figure'),
						wl(11, 'pre', iv),
						wl(12, 'span', av),
						Al(13, '<'),
						wl(14, 'span', sv),
						Al(15, 'p'),
						_l(),
						Al(16, ' '),
						wl(17, 'span', lv),
						Al(18, 'class'),
						_l(),
						Al(19, '='),
						wl(20, 'span', uv),
						Al(21, '"spinner"'),
						_l(),
						Al(22, '>'),
						_l(),
						wl(23, 'span', av),
						Al(24, '</'),
						wl(25, 'span', sv),
						Al(26, 'p'),
						_l(),
						Al(27, '>'),
						_l(),
						Al(28, '\n'),
						wl(29, 'span', av),
						Al(30, '<'),
						wl(31, 'span', sv),
						Al(32, 'p'),
						_l(),
						Al(33, ' '),
						wl(34, 'span', lv),
						Al(35, 'class'),
						_l(),
						Al(36, '='),
						wl(37, 'span', uv),
						Al(38, '"spinner-dotted"'),
						_l(),
						Al(39, '>'),
						_l(),
						wl(40, 'span', av),
						Al(41, '</'),
						wl(42, 'span', sv),
						Al(43, 'p'),
						_l(),
						Al(44, '>'),
						_l(),
						_l(),
						_l(),
						_l()),
					2 & t)
				) {
					var n = El();
					Za(7), qs('ngClass', $u(1, cv, n.checkSection('Flexbox'), n.checkSection('Space')));
				}
			}
			function S_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function P_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function E_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function O_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Border'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function I_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Hover'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function T_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Striped'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function M_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Table Cell'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function A_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Table Row'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function j_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function R_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function D_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Font'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function N_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Text'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function U_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function L_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'p'), Al(3, 'Coming soon.'), _l(), _l(), _l());
			}
			function H_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Hide'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			function z_(t, e) {
				1 & t && (wl(0, 'article', Xb), wl(1, 'section', $b), wl(2, 'h2'), Al(3, 'Show'), _l(), wl(4, 'p'), Al(5, 'Coming soon.'), _l(), _l(), _l());
			}
			var V_ = function(t) {
					return { 'bg-lt-gray': t };
				},
				F_ = [
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
								(t.ngComponentDef = De({
									type: t,
									selectors: [['ng-component']],
									factory: function(e) {
										return new (e || t)();
									},
									consts: 170,
									vars: 166,
									template: function(t, e) {
										1 & t &&
											(wl(0, 'nav', wb),
											wl(1, 'ul'),
											wl(2, 'li'),
											wl(3, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Alert');
											}),
											Al(4, 'Alert'),
											_l(),
											pl(5, Ob, 4, 0, 'ul', xb),
											_l(),
											wl(6, 'li'),
											wl(7, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Badge');
											}),
											Al(8, 'Badge'),
											_l(),
											pl(9, Ib, 4, 0, 'ul', xb),
											_l(),
											wl(10, 'li'),
											wl(11, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Button');
											}),
											Al(12, 'Button'),
											_l(),
											pl(13, Tb, 10, 0, 'ul', xb),
											_l(),
											wl(14, 'li'),
											wl(15, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Card');
											}),
											Al(16, 'Card'),
											_l(),
											pl(17, Mb, 1, 0, 'ul', xb),
											_l(),
											wl(18, 'li'),
											wl(19, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Collapse');
											}),
											Al(20, 'Collapse'),
											_l(),
											pl(21, Ab, 7, 0, 'ul', xb),
											_l(),
											wl(22, 'li'),
											wl(23, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Color');
											}),
											Al(24, 'Color'),
											_l(),
											pl(25, jb, 13, 0, 'ul', xb),
											_l(),
											wl(26, 'li'),
											wl(27, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Flexbox');
											}),
											Al(28, 'Flexbox'),
											_l(),
											pl(29, Rb, 25, 0, 'ul', xb),
											_l(),
											wl(30, 'li'),
											wl(31, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Form');
											}),
											Al(32, 'Form'),
											_l(),
											pl(33, Db, 22, 0, 'ul', xb),
											_l(),
											wl(34, 'li'),
											wl(35, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Grid');
											}),
											Al(36, 'Grid'),
											_l(),
											pl(37, Nb, 10, 0, 'ul', xb),
											_l(),
											wl(38, 'li'),
											wl(39, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Layout');
											}),
											Al(40, 'Layout'),
											_l(),
											pl(41, Ub, 7, 0, 'ul', xb),
											_l(),
											wl(42, 'li'),
											wl(43, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Modal');
											}),
											Al(44, 'Modal'),
											_l(),
											pl(45, Lb, 1, 0, 'ul', xb),
											_l(),
											wl(46, 'li'),
											wl(47, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Nav');
											}),
											Al(48, 'Nav'),
											_l(),
											pl(49, Hb, 10, 0, 'ul', xb),
											_l(),
											wl(50, 'li'),
											wl(51, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Position');
											}),
											Al(52, 'Position'),
											_l(),
											pl(53, zb, 1, 0, 'ul', xb),
											_l(),
											wl(54, 'li'),
											wl(55, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Slider');
											}),
											Al(56, 'Slider'),
											_l(),
											pl(57, Vb, 1, 0, 'ul', xb),
											_l(),
											wl(58, 'li'),
											wl(59, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Slideshow');
											}),
											Al(60, 'Slideshow'),
											_l(),
											pl(61, Fb, 1, 0, 'ul', xb),
											_l(),
											wl(62, 'li'),
											wl(63, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Space');
											}),
											Al(64, 'Space'),
											_l(),
											pl(65, Bb, 7, 0, 'ul', xb),
											_l(),
											wl(66, 'li'),
											wl(67, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Spinner');
											}),
											Al(68, 'Spinner'),
											_l(),
											pl(69, qb, 1, 0, 'ul', xb),
											_l(),
											wl(70, 'li'),
											wl(71, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Switch');
											}),
											Al(72, 'Switch'),
											_l(),
											pl(73, Gb, 1, 0, 'ul', xb),
											_l(),
											wl(74, 'li'),
											wl(75, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Tab');
											}),
											Al(76, 'Tab'),
											_l(),
											pl(77, Zb, 1, 0, 'ul', xb),
											_l(),
											wl(78, 'li'),
											wl(79, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Table');
											}),
											Al(80, 'Table'),
											_l(),
											pl(81, Wb, 16, 0, 'ul', xb),
											_l(),
											wl(82, 'li'),
											wl(83, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Tooltip');
											}),
											Al(84, 'Tooltip'),
											_l(),
											pl(85, Qb, 1, 0, 'ul', xb),
											_l(),
											wl(86, 'li'),
											wl(87, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Typography');
											}),
											Al(88, 'Typography'),
											_l(),
											pl(89, Yb, 7, 0, 'ul', xb),
											_l(),
											wl(90, 'li'),
											wl(91, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Utilities');
											}),
											Al(92, 'Utilities'),
											_l(),
											pl(93, Jb, 1, 0, 'ul', xb),
											_l(),
											wl(94, 'li'),
											wl(95, 'a', _b),
											kl('click', function(t) {
												return e.selectSection('Visibility');
											}),
											Al(96, 'Visibility'),
											_l(),
											pl(97, Kb, 7, 0, 'ul', xb),
											_l(),
											_l(),
											_l(),
											wl(98, 'main', Cb, kb),
											xl(100, 'h1', Sb),
											pl(101, pv, 109, 4, 'article', Pb),
											pl(102, hv, 51, 4, 'article', Pb),
											pl(103, vv, 89, 4, 'article', Pb),
											pl(104, yv, 46, 4, 'article', Pb),
											pl(105, Iv, 107, 4, 'article', Pb),
											pl(106, jv, 295, 4, 'article', Pb),
											pl(107, zv, 109, 4, 'article', Pb),
											pl(108, Fv, 29, 4, 'article', Pb),
											pl(109, Bv, 4, 0, 'article', Pb),
											pl(110, qv, 4, 0, 'article', Pb),
											pl(111, Gv, 6, 0, 'article', Pb),
											pl(112, Zv, 6, 0, 'article', Pb),
											pl(113, Wv, 4, 0, 'article', Pb),
											pl(114, Qv, 6, 0, 'article', Pb),
											pl(115, Yv, 6, 0, 'article', Pb),
											pl(116, Jv, 6, 0, 'article', Pb),
											pl(117, Kv, 6, 0, 'article', Pb),
											pl(118, ny, 200, 4, 'article', Pb),
											pl(119, dy, 484, 4, 'article', Pb),
											pl(120, ky, 484, 4, 'article', Pb),
											pl(121, jy, 438, 4, 'article', Pb),
											pl(122, Ny, 83, 4, 'article', Pb),
											pl(123, Uy, 438, 4, 'article', Pb),
											pl(124, Vy, 329, 4, 'article', Pb),
											pl(125, Qy, 380, 4, 'article', Pb),
											pl(126, ew, 380, 4, 'article', Pb),
											pl(127, nw, 16, 0, 'article', Pb),
											pl(128, xw, 474, 4, 'article', Pb),
											pl(129, Aw, 463, 4, 'article', Pb),
											pl(130, jw, 85, 4, 'article', Pb),
											pl(131, Dw, 97, 4, 'article', Pb),
											pl(132, Hw, 269, 4, 'article', Pb),
											pl(133, zw, 85, 4, 'article', Pb),
											pl(134, Bw, 146, 4, 'article', Pb),
											pl(135, qw, 4, 0, 'article', Pb),
											pl(136, Gw, 6, 0, 'article', Pb),
											pl(137, Zw, 6, 0, 'article', Pb),
											pl(138, Ww, 6, 0, 'article', Pb),
											pl(139, Qw, 4, 0, 'article', Pb),
											pl(140, Yw, 6, 0, 'article', Pb),
											pl(141, Jw, 6, 0, 'article', Pb),
											pl(142, Kw, 4, 0, 'article', Pb),
											pl(143, Xw, 4, 0, 'article', Pb),
											pl(144, $w, 6, 0, 'article', Pb),
											pl(145, t_, 6, 0, 'article', Pb),
											pl(146, e_, 6, 0, 'article', Pb),
											pl(147, n_, 4, 0, 'article', Pb),
											pl(148, r_, 4, 0, 'article', Pb),
											pl(149, o_, 4, 0, 'article', Pb),
											pl(150, i_, 4, 0, 'article', Pb),
											pl(151, d_, 93, 4, 'article', Pb),
											pl(152, __, 93, 4, 'article', Pb),
											pl(153, k_, 45, 4, 'article', Pb),
											pl(154, S_, 4, 0, 'article', Pb),
											pl(155, P_, 4, 0, 'article', Pb),
											pl(156, E_, 4, 0, 'article', Pb),
											pl(157, O_, 6, 0, 'article', Pb),
											pl(158, I_, 6, 0, 'article', Pb),
											pl(159, T_, 6, 0, 'article', Pb),
											pl(160, M_, 6, 0, 'article', Pb),
											pl(161, A_, 6, 0, 'article', Pb),
											pl(162, j_, 4, 0, 'article', Pb),
											pl(163, R_, 4, 0, 'article', Pb),
											pl(164, D_, 6, 0, 'article', Pb),
											pl(165, N_, 6, 0, 'article', Pb),
											pl(166, U_, 4, 0, 'article', Pb),
											pl(167, L_, 4, 0, 'article', Pb),
											pl(168, H_, 6, 0, 'article', Pb),
											pl(169, z_, 6, 0, 'article', Pb),
											_l()),
											2 & t &&
												(Za(3),
												qs('ngClass', Xu(118, V_, e.checkSection('Alert'))),
												Za(5),
												qs('ngIf', e.checkSection('Alert')),
												Za(7),
												qs('ngClass', Xu(120, V_, e.checkSection('Badge'))),
												Za(9),
												qs('ngIf', e.checkSection('Badge')),
												Za(11),
												qs('ngClass', Xu(122, V_, e.checkSection('Button'))),
												Za(13),
												qs('ngIf', e.checkSection('Button')),
												Za(15),
												qs('ngClass', Xu(124, V_, e.checkSection('Card'))),
												Za(17),
												qs('ngIf', e.checkSection('Card')),
												Za(19),
												qs('ngClass', Xu(126, V_, e.checkSection('Collapse'))),
												Za(21),
												qs('ngIf', e.checkSection('Collapse')),
												Za(23),
												qs('ngClass', Xu(128, V_, e.checkSection('Color'))),
												Za(25),
												qs('ngIf', e.checkSection('Color')),
												Za(27),
												qs('ngClass', Xu(130, V_, e.checkSection('Flexbox'))),
												Za(29),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(31),
												qs('ngClass', Xu(132, V_, e.checkSection('Form'))),
												Za(33),
												qs('ngIf', e.checkSection('Form')),
												Za(35),
												qs('ngClass', Xu(134, V_, e.checkSection('Grid'))),
												Za(37),
												qs('ngIf', e.checkSection('Grid')),
												Za(39),
												qs('ngClass', Xu(136, V_, e.checkSection('Layout'))),
												Za(41),
												qs('ngIf', e.checkSection('Layout')),
												Za(43),
												qs('ngClass', Xu(138, V_, e.checkSection('Modal'))),
												Za(45),
												qs('ngIf', e.checkSection('Modal')),
												Za(47),
												qs('ngClass', Xu(140, V_, e.checkSection('Nav'))),
												Za(49),
												qs('ngIf', e.checkSection('Nav')),
												Za(51),
												qs('ngClass', Xu(142, V_, e.checkSection('Position'))),
												Za(53),
												qs('ngIf', e.checkSection('Position')),
												Za(55),
												qs('ngClass', Xu(144, V_, e.checkSection('Slider'))),
												Za(57),
												qs('ngIf', e.checkSection('Slider')),
												Za(59),
												qs('ngClass', Xu(146, V_, e.checkSection('Slideshow'))),
												Za(61),
												qs('ngIf', e.checkSection('Slideshow')),
												Za(63),
												qs('ngClass', Xu(148, V_, e.checkSection('Space'))),
												Za(65),
												qs('ngIf', e.checkSection('Space')),
												Za(67),
												qs('ngClass', Xu(150, V_, e.checkSection('Spinner'))),
												Za(69),
												qs('ngIf', e.checkSection('Spinner')),
												Za(71),
												qs('ngClass', Xu(152, V_, e.checkSection('Switch'))),
												Za(73),
												qs('ngIf', e.checkSection('Switch')),
												Za(75),
												qs('ngClass', Xu(154, V_, e.checkSection('Tab'))),
												Za(77),
												qs('ngIf', e.checkSection('Tab')),
												Za(79),
												qs('ngClass', Xu(156, V_, e.checkSection('Table'))),
												Za(81),
												qs('ngIf', e.checkSection('Table')),
												Za(83),
												qs('ngClass', Xu(158, V_, e.checkSection('Tooltip'))),
												Za(85),
												qs('ngIf', e.checkSection('Tooltip')),
												Za(87),
												qs('ngClass', Xu(160, V_, e.checkSection('Typography'))),
												Za(89),
												qs('ngIf', e.checkSection('Typography')),
												Za(91),
												qs('ngClass', Xu(162, V_, e.checkSection('Utilities'))),
												Za(93),
												qs('ngIf', e.checkSection('Utilities')),
												Za(95),
												qs('ngClass', Xu(164, V_, e.checkSection('Visibility'))),
												Za(97),
												qs('ngIf', e.checkSection('Visibility')),
												Za(100),
												qs('innerHTML', e.section, ro),
												Za(101),
												qs('ngIf', e.checkSection('Alert')),
												Za(102),
												qs('ngIf', e.checkSection('Alert')),
												Za(103),
												qs('ngIf', e.checkSection('Badge')),
												Za(104),
												qs('ngIf', e.checkSection('Badge')),
												Za(105),
												qs('ngIf', e.checkSection('Button')),
												Za(106),
												qs('ngIf', e.checkSection('Button')),
												Za(107),
												qs('ngIf', e.checkSection('Button')),
												Za(108),
												qs('ngIf', e.checkSection('Button')),
												Za(109),
												qs('ngIf', e.checkSection('Card')),
												Za(110),
												qs('ngIf', e.checkSection('Collapse')),
												Za(111),
												qs('ngIf', e.checkSection('Collapse')),
												Za(112),
												qs('ngIf', e.checkSection('Collapse')),
												Za(113),
												qs('ngIf', e.checkSection('Color')),
												Za(114),
												qs('ngIf', e.checkSection('Color')),
												Za(115),
												qs('ngIf', e.checkSection('Color')),
												Za(116),
												qs('ngIf', e.checkSection('Color')),
												Za(117),
												qs('ngIf', e.checkSection('Color')),
												Za(118),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(119),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(120),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(121),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(122),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(123),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(124),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(125),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(126),
												qs('ngIf', e.checkSection('Flexbox')),
												Za(127),
												qs('ngIf', e.checkSection('Form')),
												Za(128),
												qs('ngIf', e.checkSection('Form')),
												Za(129),
												qs('ngIf', e.checkSection('Form')),
												Za(130),
												qs('ngIf', e.checkSection('Form')),
												Za(131),
												qs('ngIf', e.checkSection('Form')),
												Za(132),
												qs('ngIf', e.checkSection('Form')),
												Za(133),
												qs('ngIf', e.checkSection('Form')),
												Za(134),
												qs('ngIf', e.checkSection('Form')),
												Za(135),
												qs('ngIf', e.checkSection('Grid')),
												Za(136),
												qs('ngIf', e.checkSection('Grid')),
												Za(137),
												qs('ngIf', e.checkSection('Grid')),
												Za(138),
												qs('ngIf', e.checkSection('Grid')),
												Za(139),
												qs('ngIf', e.checkSection('Layout')),
												Za(140),
												qs('ngIf', e.checkSection('Layout')),
												Za(141),
												qs('ngIf', e.checkSection('Layout')),
												Za(142),
												qs('ngIf', e.checkSection('Modal')),
												Za(143),
												qs('ngIf', e.checkSection('Nav')),
												Za(144),
												qs('ngIf', e.checkSection('Nav')),
												Za(145),
												qs('ngIf', e.checkSection('Nav')),
												Za(146),
												qs('ngIf', e.checkSection('Nav')),
												Za(147),
												qs('ngIf', e.checkSection('Position')),
												Za(148),
												qs('ngIf', e.checkSection('Slider')),
												Za(149),
												qs('ngIf', e.checkSection('Slideshow')),
												Za(150),
												qs('ngIf', e.checkSection('Space')),
												Za(151),
												qs('ngIf', e.checkSection('Space')),
												Za(152),
												qs('ngIf', e.checkSection('Space')),
												Za(153),
												qs('ngIf', e.checkSection('Spinner')),
												Za(154),
												qs('ngIf', e.checkSection('Switch')),
												Za(155),
												qs('ngIf', e.checkSection('Tab')),
												Za(156),
												qs('ngIf', e.checkSection('Table')),
												Za(157),
												qs('ngIf', e.checkSection('Table')),
												Za(158),
												qs('ngIf', e.checkSection('Table')),
												Za(159),
												qs('ngIf', e.checkSection('Table')),
												Za(160),
												qs('ngIf', e.checkSection('Table')),
												Za(161),
												qs('ngIf', e.checkSection('Table')),
												Za(162),
												qs('ngIf', e.checkSection('Tooltip')),
												Za(163),
												qs('ngIf', e.checkSection('Typography')),
												Za(164),
												qs('ngIf', e.checkSection('Typography')),
												Za(165),
												qs('ngIf', e.checkSection('Typography')),
												Za(166),
												qs('ngIf', e.checkSection('Utilities')),
												Za(167),
												qs('ngIf', e.checkSection('Visibility')),
												Za(168),
												qs('ngIf', e.checkSection('Visibility')),
												Za(169),
												qs('ngIf', e.checkSection('Visibility')));
									},
									directives: [Vp, Fp, dd, md, vd, xd, Id],
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
				B_ = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[cb.forRoot(F_, { useHash: !0, anchorScrolling: 'enabled' })], cb]
						})),
						t
					);
				})();
			cb.forRoot(F_, { useHash: !0, anchorScrolling: 'enabled' });
			var q_ = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[Gp, Ud]]
						})),
						t
					);
				})(),
				G_ = (function() {
					function t() {}
					return (
						(t.ngModuleDef = Le({ type: t, bootstrap: [yb] })),
						(t.ngInjectorDef = Ct({
							factory: function(e) {
								return new (e || t)();
							},
							imports: [[rd, Nd, B_, q_]]
						})),
						t
					);
				})();
			(function() {
				if (Ir) throw new Error('Cannot enable prod mode after platform setup.');
				Or = !1;
			})(),
				ed()
					.bootstrapModule(G_, { defaultEncapsulation: Se.None })
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
