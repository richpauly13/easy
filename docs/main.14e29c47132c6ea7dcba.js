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
				else for (var o = l.length - 1; o >= 0; o--) (t = l[o]) && (s = (r < 3 ? t(s) : r > 3 ? t(n, u, s) : t(n, u)) || s);
				return r > 3 && s && Object.defineProperty(n, u, s), s;
			}
			function o(l, n) {
				if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(l, n);
			}
			function a(l) {
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
				} catch (o) {
					t = { error: o };
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
				return null != l && 'object' == typeof l;
			}
			function d(l) {
				return 'function' == typeof l;
			}
			var f,
				g = { e: {} };
			function m() {
				try {
					return f.apply(this, arguments);
				} catch (l) {
					return (g.e = l), g;
				}
			}
			function b(l) {
				return (f = l), m;
			}
			function y(l) {
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
			y.prototype = Object.create(Error.prototype);
			var v = y,
				w = (function() {
					function l(l) {
						(this.closed = !1), (this._parent = null), (this._parents = null), (this._subscriptions = null), l && (this._unsubscribe = l);
					}
					var n;
					return (
						(l.prototype.unsubscribe = function() {
							var l,
								n = !1;
							if (!this.closed) {
								var u = this._parent,
									e = this._parents,
									t = this._unsubscribe,
									r = this._subscriptions;
								(this.closed = !0), (this._parent = null), (this._parents = null), (this._subscriptions = null);
								for (var s = -1, o = e ? e.length : 0; u; ) u.remove(this), (u = (++s < o && e[s]) || null);
								if ((d(t) && b(t).call(this) === g && ((n = !0), (l = l || (g.e instanceof v ? j(g.e.errors) : [g.e]))), p(r)))
									for (s = -1, o = r.length; ++s < o; ) {
										var a = r[s];
										if (h(a) && b(a.unsubscribe).call(a) === g) {
											(n = !0), (l = l || []);
											var i = g.e;
											i instanceof v ? (l = l.concat(j(i.errors))) : l.push(i);
										}
									}
								if (n) throw new v(l);
							}
						}),
						(l.prototype.add = function(n) {
							if (!n || n === l.EMPTY) return l.EMPTY;
							if (n === this) return this;
							var u = n;
							switch (typeof n) {
								case 'function':
									u = new l(n);
								case 'object':
									if (u.closed || 'function' != typeof u.unsubscribe) return u;
									if (this.closed) return u.unsubscribe(), u;
									if ('function' != typeof u._addParent) {
										var e = u;
										(u = new l())._subscriptions = [e];
									}
									break;
								default:
									throw new Error('unrecognized teardown ' + n + ' added to Subscription.');
							}
							return (this._subscriptions || (this._subscriptions = [])).push(u), u._addParent(this), u;
						}),
						(l.prototype.remove = function(l) {
							var n = this._subscriptions;
							if (n) {
								var u = n.indexOf(l);
								-1 !== u && n.splice(u, 1);
							}
						}),
						(l.prototype._addParent = function(l) {
							var n = this._parent,
								u = this._parents;
							n && n !== l ? (u ? -1 === u.indexOf(l) && u.push(l) : (this._parents = [l])) : (this._parent = l);
						}),
						(l.EMPTY = (((n = new l()).closed = !0), n)),
						l
					);
				})();
			function j(l) {
				return l.reduce(function(l, n) {
					return l.concat(n instanceof v ? n.errors : n);
				}, []);
			}
			var _ = !1,
				x = {
					Promise: void 0,
					set useDeprecatedSynchronousErrorHandling(l) {
						_ = l;
					},
					get useDeprecatedSynchronousErrorHandling() {
						return _;
					}
				};
			function k(l) {
				setTimeout(function() {
					throw l;
				});
			}
			var C = {
					closed: !0,
					next: function(l) {},
					error: function(l) {
						if (x.useDeprecatedSynchronousErrorHandling) throw l;
						k(l);
					},
					complete: function() {}
				},
				S = 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random(),
				E = (function(l) {
					function n(u, e, t) {
						var r = l.call(this) || this;
						switch (((r.syncErrorValue = null), (r.syncErrorThrown = !1), (r.syncErrorThrowable = !1), (r.isStopped = !1), (r._parentSubscription = null), arguments.length)) {
							case 0:
								r.destination = C;
								break;
							case 1:
								if (!u) {
									r.destination = C;
									break;
								}
								if ('object' == typeof u) {
									u instanceof n ? ((r.syncErrorThrowable = u.syncErrorThrowable), (r.destination = u), u.add(r)) : ((r.syncErrorThrowable = !0), (r.destination = new I(r, u)));
									break;
								}
							default:
								(r.syncErrorThrowable = !0), (r.destination = new I(r, u, e, t));
						}
						return r;
					}
					return (
						t(n, l),
						(n.prototype[S] = function() {
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
							var l = this._parent,
								n = this._parents;
							return (
								(this._parent = null),
								(this._parents = null),
								this.unsubscribe(),
								(this.closed = !1),
								(this.isStopped = !1),
								(this._parent = l),
								(this._parents = n),
								(this._parentSubscription = null),
								this
							);
						}),
						n
					);
				})(w),
				I = (function(l) {
					function n(n, u, e, t) {
						var r,
							s = l.call(this) || this;
						s._parentSubscriber = n;
						var o = s;
						return (
							d(u)
								? (r = u)
								: u &&
								  ((r = u.next),
								  (e = u.error),
								  (t = u.complete),
								  u !== C && (d((o = Object.create(u)).unsubscribe) && s.add(o.unsubscribe.bind(o)), (o.unsubscribe = s.unsubscribe.bind(s)))),
							(s._context = o),
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
								x.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? this.__tryOrSetError(n, this._next, l) && this.unsubscribe() : this.__tryOrUnsub(this._next, l);
							}
						}),
						(n.prototype.error = function(l) {
							if (!this.isStopped) {
								var n = this._parentSubscriber,
									u = x.useDeprecatedSynchronousErrorHandling;
								if (this._error) u && n.syncErrorThrowable ? (this.__tryOrSetError(n, this._error, l), this.unsubscribe()) : (this.__tryOrUnsub(this._error, l), this.unsubscribe());
								else if (n.syncErrorThrowable) u ? ((n.syncErrorValue = l), (n.syncErrorThrown = !0)) : k(l), this.unsubscribe();
								else {
									if ((this.unsubscribe(), u)) throw l;
									k(l);
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
									x.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? (this.__tryOrSetError(n, u), this.unsubscribe()) : (this.__tryOrUnsub(u), this.unsubscribe());
								} else this.unsubscribe();
							}
						}),
						(n.prototype.__tryOrUnsub = function(l, n) {
							try {
								l.call(this._context, n);
							} catch (u) {
								if ((this.unsubscribe(), x.useDeprecatedSynchronousErrorHandling)) throw u;
								k(u);
							}
						}),
						(n.prototype.__tryOrSetError = function(l, n, u) {
							if (!x.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
							try {
								n.call(this._context, u);
							} catch (e) {
								return x.useDeprecatedSynchronousErrorHandling ? ((l.syncErrorValue = e), (l.syncErrorThrown = !0), !0) : (k(e), !0);
							}
							return !1;
						}),
						(n.prototype._unsubscribe = function() {
							var l = this._parentSubscriber;
							(this._context = null), (this._parentSubscriber = null), l.unsubscribe();
						}),
						n
					);
				})(E),
				P = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
			function O() {}
			function T() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				return M(l);
			}
			function M(l) {
				return l
					? 1 === l.length
						? l[0]
						: function(n) {
								return l.reduce(function(l, n) {
									return n(l);
								}, n);
						  }
					: O;
			}
			var R = (function() {
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
									if (l instanceof E) return l;
									if (l[S]) return l[S]();
								}
								return l || n || u ? new E(l, n, u) : new E(C);
							})(l, n, u);
						if (
							(e ? e.call(t, this.source) : t.add(this.source || (x.useDeprecatedSynchronousErrorHandling && !t.syncErrorThrowable) ? this._subscribe(t) : this._trySubscribe(t)),
							x.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable && ((t.syncErrorThrowable = !1), t.syncErrorThrown))
						)
							throw t.syncErrorValue;
						return t;
					}),
					(l.prototype._trySubscribe = function(l) {
						try {
							return this._subscribe(l);
						} catch (n) {
							x.useDeprecatedSynchronousErrorHandling && ((l.syncErrorThrown = !0), (l.syncErrorValue = n)),
								(function(l) {
									for (; l; ) {
										var n = l.destination;
										if (l.closed || l.isStopped) return !1;
										l = n && n instanceof E ? n : null;
									}
									return !0;
								})(l)
									? l.error(n)
									: console.warn(n);
						}
					}),
					(l.prototype.forEach = function(l, n) {
						var u = this;
						return new (n = A(n))(function(n, e) {
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
					(l.prototype[P] = function() {
						return this;
					}),
					(l.prototype.pipe = function() {
						for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
						return 0 === l.length ? this : M(l)(this);
					}),
					(l.prototype.toPromise = function(l) {
						var n = this;
						return new (l = A(l))(function(l, u) {
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
			function A(l) {
				if ((l || (l = x.Promise || Promise), !l)) throw new Error('no Promise impl found');
				return l;
			}
			function N() {
				return Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this;
			}
			N.prototype = Object.create(Error.prototype);
			var D = N,
				V = (function(l) {
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
				})(w),
				U = (function(l) {
					function n(n) {
						var u = l.call(this, n) || this;
						return (u.destination = n), u;
					}
					return t(n, l), n;
				})(E),
				L = (function(l) {
					function n() {
						var n = l.call(this) || this;
						return (n.observers = []), (n.closed = !1), (n.isStopped = !1), (n.hasError = !1), (n.thrownError = null), n;
					}
					return (
						t(n, l),
						(n.prototype[S] = function() {
							return new U(this);
						}),
						(n.prototype.lift = function(l) {
							var n = new H(this, this);
							return (n.operator = l), n;
						}),
						(n.prototype.next = function(l) {
							if (this.closed) throw new D();
							if (!this.isStopped) for (var n = this.observers, u = n.length, e = n.slice(), t = 0; t < u; t++) e[t].next(l);
						}),
						(n.prototype.error = function(l) {
							if (this.closed) throw new D();
							(this.hasError = !0), (this.thrownError = l), (this.isStopped = !0);
							for (var n = this.observers, u = n.length, e = n.slice(), t = 0; t < u; t++) e[t].error(l);
							this.observers.length = 0;
						}),
						(n.prototype.complete = function() {
							if (this.closed) throw new D();
							this.isStopped = !0;
							for (var l = this.observers, n = l.length, u = l.slice(), e = 0; e < n; e++) u[e].complete();
							this.observers.length = 0;
						}),
						(n.prototype.unsubscribe = function() {
							(this.isStopped = !0), (this.closed = !0), (this.observers = null);
						}),
						(n.prototype._trySubscribe = function(n) {
							if (this.closed) throw new D();
							return l.prototype._trySubscribe.call(this, n);
						}),
						(n.prototype._subscribe = function(l) {
							if (this.closed) throw new D();
							return this.hasError ? (l.error(this.thrownError), w.EMPTY) : this.isStopped ? (l.complete(), w.EMPTY) : (this.observers.push(l), new V(this, l));
						}),
						(n.prototype.asObservable = function() {
							var l = new R();
							return (l.source = this), l;
						}),
						(n.create = function(l, n) {
							return new H(l, n);
						}),
						n
					);
				})(R),
				H = (function(l) {
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
							return this.source ? this.source.subscribe(l) : w.EMPTY;
						}),
						n
					);
				})(L);
			function F(l) {
				return l && 'function' == typeof l.schedule;
			}
			var z = (function(l) {
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
				})(E),
				B = function(l) {
					return function(n) {
						for (var u = 0, e = l.length; u < e && !n.closed; u++) n.next(l[u]);
						n.closed || n.complete();
					};
				},
				q = function(l) {
					return function(n) {
						return (
							l
								.then(
									function(l) {
										n.closed || (n.next(l), n.complete());
									},
									function(l) {
										return n.error(l);
									}
								)
								.then(null, k),
							n
						);
					};
				};
			function G() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			}
			var Q = G(),
				Z = function(l) {
					return function(n) {
						for (var u = l[Q](); ; ) {
							var e = u.next();
							if (e.done) {
								n.complete();
								break;
							}
							if ((n.next(e.value), n.closed)) break;
						}
						return (
							'function' == typeof u.return &&
								n.add(function() {
									u.return && u.return();
								}),
							n
						);
					};
				},
				W = function(l) {
					return function(n) {
						var u = l[P]();
						if ('function' != typeof u.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
						return u.subscribe(n);
					};
				},
				K = function(l) {
					return l && 'number' == typeof l.length && 'function' != typeof l;
				};
			function Y(l) {
				return l && 'function' != typeof l.subscribe && 'function' == typeof l.then;
			}
			var J = function(l) {
				if (l instanceof R)
					return function(n) {
						return l._isScalar ? (n.next(l.value), void n.complete()) : l.subscribe(n);
					};
				if (l && 'function' == typeof l[P]) return W(l);
				if (K(l)) return B(l);
				if (Y(l)) return q(l);
				if (l && 'function' == typeof l[Q]) return Z(l);
				var n = h(l) ? 'an invalid object' : "'" + l + "'";
				throw new TypeError('You provided ' + n + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.');
			};
			function $(l, n, u, e, t) {
				if ((void 0 === t && (t = new z(l, u, e)), !t.closed)) return J(n)(t);
			}
			var X = (function(l) {
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
			})(E);
			function ll(l, n) {
				return function(u) {
					if ('function' != typeof l) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
					return u.lift(new nl(l, n));
				};
			}
			var nl = (function() {
					function l(l, n) {
						(this.project = l), (this.thisArg = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new ul(l, this.project, this.thisArg));
						}),
						l
					);
				})(),
				ul = (function(l) {
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
				})(E);
			function el(l, n) {
				return new R(
					n
						? function(u) {
								var e = new w(),
									t = 0;
								return (
									e.add(
										n.schedule(function() {
											t !== l.length ? (u.next(l[t++]), u.closed || e.add(this.schedule())) : u.complete();
										})
									),
									e
								);
						  }
						: B(l)
				);
			}
			function tl(l, n) {
				if (!n) return l instanceof R ? l : new R(J(l));
				if (null != l) {
					if (
						(function(l) {
							return l && 'function' == typeof l[P];
						})(l)
					)
						return (function(l, n) {
							return new R(
								n
									? function(u) {
											var e = new w();
											return (
												e.add(
													n.schedule(function() {
														var t = l[P]();
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
									  }
									: W(l)
							);
						})(l, n);
					if (Y(l))
						return (function(l, n) {
							return new R(
								n
									? function(u) {
											var e = new w();
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
									  }
									: q(l)
							);
						})(l, n);
					if (K(l)) return el(l, n);
					if (
						(function(l) {
							return l && 'function' == typeof l[Q];
						})(l) ||
						'string' == typeof l
					)
						return (function(l, n) {
							if (!l) throw new Error('Iterable cannot be null');
							return new R(
								n
									? function(u) {
											var e,
												t = new w();
											return (
												t.add(function() {
													e && 'function' == typeof e.return && e.return();
												}),
												t.add(
													n.schedule(function() {
														(e = l[Q]()),
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
									  }
									: Z(l)
							);
						})(l, n);
				}
				throw new TypeError(((null !== l && typeof l) || l) + ' is not observable');
			}
			function rl(l, n, u) {
				return (
					void 0 === u && (u = Number.POSITIVE_INFINITY),
					'function' == typeof n
						? function(e) {
								return e.pipe(
									rl(function(u, e) {
										return tl(l(u, e)).pipe(
											ll(function(l, t) {
												return n(u, l, e, t);
											})
										);
									}, u)
								);
						  }
						: ('number' == typeof n && (u = n),
						  function(n) {
								return n.lift(new sl(l, u));
						  })
				);
			}
			var sl = (function() {
					function l(l, n) {
						void 0 === n && (n = Number.POSITIVE_INFINITY), (this.project = l), (this.concurrent = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new ol(l, this.project, this.concurrent));
						}),
						l
					);
				})(),
				ol = (function(l) {
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
							var e = new z(this, void 0, void 0);
							this.destination.add(e), $(this, l, n, u, e);
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
				})(X);
			function al(l) {
				return l;
			}
			function il(l) {
				return void 0 === l && (l = Number.POSITIVE_INFINITY), rl(al, l);
			}
			function cl() {
				return function(l) {
					return l.lift(new pl(l));
				};
			}
			var pl = (function() {
					function l(l) {
						this.connectable = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							var u = this.connectable;
							u._refCount++;
							var e = new hl(l, u),
								t = n.subscribe(e);
							return e.closed || (e.connection = u.connect()), t;
						}),
						l
					);
				})(),
				hl = (function(l) {
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
				})(E),
				dl = (function(l) {
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
									(l = this._connection = new w()).add(this.source.subscribe(new gl(this.getSubject(), this))),
									l.closed ? ((this._connection = null), (l = w.EMPTY)) : (this._connection = l)),
								l
							);
						}),
						(n.prototype.refCount = function() {
							return cl()(this);
						}),
						n
					);
				})(R).prototype,
				fl = {
					operator: { value: null },
					_refCount: { value: 0, writable: !0 },
					_subject: { value: null, writable: !0 },
					_connection: { value: null, writable: !0 },
					_subscribe: { value: dl._subscribe },
					_isComplete: { value: dl._isComplete, writable: !0 },
					getSubject: { value: dl.getSubject },
					connect: { value: dl.connect },
					refCount: { value: dl.refCount }
				},
				gl = (function(l) {
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
				})(U);
			function ml() {
				return new L();
			}
			function bl(l) {
				for (var n in l) if (l[n] === bl) return n;
				throw Error('Could not find renamed property on target object.');
			}
			var yl = bl({ ngComponentDef: bl }),
				vl = bl({ ngInjectableDef: bl }),
				wl = bl({ ngInjectorDef: bl }),
				jl = bl({ ngModuleDef: bl }),
				_l = bl({ __NG_ELEMENT_ID__: bl });
			function xl(l) {
				return { providedIn: l.providedIn || null, factory: l.factory, value: void 0 };
			}
			function kl(l) {
				return l && l.hasOwnProperty(vl) ? l[vl] : null;
			}
			function Cl(l) {
				return l && l.hasOwnProperty(wl) ? l[wl] : null;
			}
			var Sl = (function() {
					function l(l, n) {
						(this._desc = l), (this.ngMetadataName = 'InjectionToken'), (this.ngInjectableDef = void 0 !== n ? xl({ providedIn: n.providedIn || 'root', factory: n.factory }) : void 0);
					}
					return (
						(l.prototype.toString = function() {
							return 'InjectionToken ' + this._desc;
						}),
						l
					);
				})(),
				El = '__parameters__';
			function Il(l, n, u) {
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
						for (var e = l.hasOwnProperty(El) ? l[El] : Object.defineProperty(l, El, { value: [] })[El]; e.length <= u; ) e.push(null);
						return (e[u] = e[u] || []).push(r), l;
					}
				}
				return u && (t.prototype = Object.create(u.prototype)), (t.prototype.ngMetadataName = l), (t.annotationCls = t), t;
			}
			var Pl = new Sl('AnalyzeForEntryComponents'),
				Ol = 'undefined' != typeof window && window,
				Tl = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
				Ml = ('undefined' != typeof global && global) || Ol || Tl,
				Rl = Promise.resolve(0),
				Al = null;
			function Nl() {
				if (!Al) {
					var l = Ml.Symbol;
					if (l && l.iterator) Al = l.iterator;
					else
						for (var n = Object.getOwnPropertyNames(Map.prototype), u = 0; u < n.length; ++u) {
							var e = n[u];
							'entries' !== e && 'size' !== e && Map.prototype[e] === Map.prototype.entries && (Al = e);
						}
				}
				return Al;
			}
			function Dl(l) {
				'undefined' == typeof Zone
					? Rl.then(function() {
							l && l.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', l);
			}
			function Vl(l, n) {
				return l === n || ('number' == typeof l && 'number' == typeof n && isNaN(l) && isNaN(n));
			}
			function Ul(l) {
				if ('string' == typeof l) return l;
				if (l instanceof Array) return '[' + l.map(Ul).join(', ') + ']';
				if (null == l) return '' + l;
				if (l.overriddenName) return '' + l.overriddenName;
				if (l.name) return '' + l.name;
				var n = l.toString();
				if (null == n) return '' + n;
				var u = n.indexOf('\n');
				return -1 === u ? n : n.substring(0, u);
			}
			var Ll = bl({ __forward_ref__: bl });
			function Hl(l) {
				return (
					(l.__forward_ref__ = Hl),
					(l.toString = function() {
						return Ul(this());
					}),
					l
				);
			}
			function Fl(l) {
				var n = l;
				return 'function' == typeof n && n.hasOwnProperty(Ll) && n.__forward_ref__ === Hl ? n() : l;
			}
			var zl = (function(l) {
					return (l[(l.Emulated = 0)] = 'Emulated'), (l[(l.Native = 1)] = 'Native'), (l[(l.None = 2)] = 'None'), (l[(l.ShadowDom = 3)] = 'ShadowDom'), l;
				})({}),
				Bl = 0,
				ql = 1,
				Gl = 2,
				Ql = 3,
				Zl = 5,
				Wl = 6,
				Kl = 7,
				Yl = 8,
				Jl = 9,
				$l = 10,
				Xl = 11,
				ln = 12,
				nn = 13,
				un = 15,
				en = 17,
				tn = 18,
				rn = 0,
				sn = 1,
				on = 6,
				an = 8,
				cn = '__ngContext__',
				pn = 8,
				hn = 8,
				dn = 9,
				fn = -1,
				gn = (function() {
					return function(l, n, u) {
						(this.factory = l), (this.resolving = !1), (this.canSeeViewProviders = n), (this.injectImpl = u);
					};
				})(),
				mn = gn.prototype;
			function bn(l) {
				return 'function' == typeof l ? l.name || l : 'string' == typeof l ? l : null == l ? '' : 'object' == typeof l && 'function' == typeof l.type ? l.type.name || l.type : '' + l;
			}
			function yn(l) {
				for (; Array.isArray(l); ) l = l[Zl];
				return l;
			}
			function vn(l, n) {
				return yn(n[l.index]);
			}
			function wn(l, n) {
				var u = n[l];
				return u.length >= tn ? u : u[Zl];
			}
			function jn(l) {
				return null !== l.template;
			}
			function _n(l) {
				return l[cn];
			}
			function xn(l) {
				var n = _n(l);
				return n ? (Array.isArray(n) ? n : n.lView) : null;
			}
			function kn(l) {
				return 32767 & l;
			}
			function Cn(l, n) {
				for (var u = l >> 16, e = n; u > 0; ) (e = e[en]), u--;
				return e;
			}
			var Sn = (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(Ml);
			function En(l) {
				for (var n = l[Wl]; n && 2 === n.type; ) n = (l = l[en])[Wl];
				return l;
			}
			var In,
				Pn,
				On,
				Tn,
				Mn = Il('Inject', function(l) {
					return { token: l };
				}),
				Rn = Il('Optional'),
				An = Il('Self'),
				Nn = Il('SkipSelf'),
				Dn = (function(l) {
					return (l[(l.Default = 0)] = 'Default'), (l[(l.Host = 1)] = 'Host'), (l[(l.Self = 2)] = 'Self'), (l[(l.SkipSelf = 4)] = 'SkipSelf'), (l[(l.Optional = 8)] = 'Optional'), l;
				})({}),
				Vn = void 0;
			function Un(l) {
				var n = Vn;
				return (Vn = l), n;
			}
			function Ln(l) {
				var n = In;
				return (In = l), n;
			}
			function Hn(l, n) {
				return (
					void 0 === n && (n = Dn.Default),
					(In ||
						function(l, n) {
							if ((void 0 === n && (n = Dn.Default), void 0 === Vn)) throw new Error('inject() must be called from an injection context');
							return null === Vn ? Fn(l, void 0, n) : Vn.get(l, n & Dn.Optional ? null : void 0, n);
						})(l, n)
				);
			}
			function Fn(l, n, u) {
				var e = kl(l);
				if (e && 'root' == e.providedIn) return void 0 === e.value ? (e.value = e.factory()) : e.value;
				if (u & Dn.Optional) return null;
				if (void 0 !== n) return n;
				throw new Error('Injector: NOT_FOUND [' + Ul(l) + ']');
			}
			function zn(l) {
				for (var n = [], u = 0; u < l.length; u++) {
					var e = l[u];
					if (Array.isArray(e)) {
						if (0 === e.length) throw new Error('Arguments array must have arguments.');
						for (var t = void 0, r = Dn.Default, s = 0; s < e.length; s++) {
							var o = e[s];
							o instanceof Rn || 'Optional' === o.ngMetadataName
								? (r |= Dn.Optional)
								: o instanceof Nn || 'SkipSelf' === o.ngMetadataName
								? (r |= Dn.SkipSelf)
								: o instanceof An || 'Self' === o.ngMetadataName
								? (r |= Dn.Self)
								: (t = o instanceof Mn ? o.token : o);
						}
						n.push(Hn(t, r));
					} else n.push(Hn(e));
				}
				return n;
			}
			function Bn(l, n, u) {
				l.afterContentInit && (n.contentHooks || (n.contentHooks = [])).push(u, l.afterContentInit),
					l.afterContentChecked &&
						((n.contentHooks || (n.contentHooks = [])).push(u, l.afterContentChecked), (n.contentCheckHooks || (n.contentCheckHooks = [])).push(u, l.afterContentChecked));
			}
			function qn(l, n, u) {
				l.afterViewInit && (n.viewHooks || (n.viewHooks = [])).push(u, l.afterViewInit),
					l.afterViewChecked && ((n.viewHooks || (n.viewHooks = [])).push(u, l.afterViewChecked), (n.viewCheckHooks || (n.viewCheckHooks = [])).push(u, l.afterViewChecked));
			}
			function Gn(l, n, u) {
				null != l.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(u, l.onDestroy);
			}
			function Qn(l, n, u, e) {
				if (!e) {
					var t = 2 & l[ql] ? n : u;
					t && Zn(l, t);
				}
			}
			function Zn(l, n) {
				for (var u = 0; u < n.length; u += 2) n[u + 1].call(l[n[u]]);
			}
			function Wn() {
				return Tn;
			}
			function Kn() {
				return Pn;
			}
			function Yn(l) {
				Pn = l;
			}
			function Jn(l, n) {
				(Pn = l), (Tn = n);
			}
			function $n() {
				return On;
			}
			function Xn(l) {
				On = l;
			}
			function lu(l) {
				return void 0 === l && (l = Tn), 1 == (1 & l[ql]);
			}
			var nu = !1;
			function uu() {
				return nu;
			}
			function eu(l) {
				nu = l;
			}
			var tu = !0;
			function ru() {
				return tu;
			}
			function su(l) {
				tu = l;
			}
			function ou(l, n) {
				var u = Tn;
				l && (tu = l[Bl].firstTemplatePass);
				return (Pn = n), (On = !0), (Tn = l), u;
			}
			function au(l) {
				var n = Tn[Bl];
				lu(Tn) ? (Tn[ql] &= -2) : (Qn(Tn, n.viewHooks, n.viewCheckHooks, nu), (Tn[ql] &= -11), (Tn[ql] |= 32), (Tn[Kl] = n.bindingStartIndex)), ou(l, null);
			}
			var iu = !0;
			function cu(l) {
				var n = iu;
				return (iu = l), n;
			}
			var pu = 255,
				hu = 0;
			function du(l, n) {
				l.push(0, 0, 0, 0, 0, 0, 0, 0, n);
			}
			function fu(l, n) {
				return -1 === l.injectorIndex || (l.parent && l.parent.injectorIndex === l.injectorIndex) || null == n[l.injectorIndex + hn] ? -1 : l.injectorIndex;
			}
			function gu(l, n) {
				if (l.parent && -1 !== l.parent.injectorIndex) return l.parent.injectorIndex;
				for (var u = n[Wl], e = 1; u && -1 === u.injectorIndex; ) (u = (n = n[en]) ? n[Wl] : null), e++;
				return u ? u.injectorIndex | (e << 16) : -1;
			}
			var mu = {};
			function bu(l, n, u, e, t, r) {
				var s = n[Bl],
					o = s.data[l + pn],
					a = (function(l, n, u, e, t) {
						for (var r = l.providerIndexes, s = n[Bl].data, o = 65535 & r, a = l.directiveStart, i = r >> 16, c = t ? o + i : l.directiveEnd, p = e ? o : o + i; p < c; p++) {
							var h = s[p];
							if ((p < a && u === h) || (p >= a && h.type === u)) return p;
						}
						if (t) {
							var d = s[a];
							if (d && jn(d) && d.type === u) return a;
						}
						return null;
					})(
						o,
						n,
						u,
						null == e
							? (function(l) {
									return 1 == (1 & l.flags);
							  })(o) && iu
							: e != s && 3 === o.type,
						t & Dn.Host && r === o
					);
				return null !== a ? yu(s.data, n, a, o) : mu;
			}
			function yu(l, n, u, e) {
				var t,
					r = n[u];
				if (null != (t = r) && 'object' == typeof t && Object.getPrototypeOf(t) == mn) {
					var s = r;
					if (s.resolving) throw new Error('Circular dep for ' + bn(l[u]));
					var o = cu(s.canSeeViewProviders);
					s.resolving = !0;
					var a = void 0;
					s.injectImpl && (a = Ln(s.injectImpl));
					var i = Kn(),
						c = Wn();
					Jn(e, n);
					try {
						r = n[u] = s.factory(null, l, n, e);
					} finally {
						s.injectImpl && Ln(a), cu(o), (s.resolving = !1), Jn(i, c);
					}
				}
				return r;
			}
			function vu(l, n, u) {
				var e = 64 & l,
					t = 32 & l;
				return !!((128 & l ? (e ? (t ? u[n + 7] : u[n + 6]) : t ? u[n + 5] : u[n + 4]) : e ? (t ? u[n + 3] : u[n + 2]) : t ? u[n + 1] : u[n]) & (1 << l));
			}
			function wu(l, n) {
				return !(l & Dn.Self || (l & Dn.Host && n));
			}
			var ju = (function() {
				function l(l, n) {
					(this._tNode = l), (this._lView = n);
				}
				return (
					(l.prototype.get = function(l, n) {
						return (function(l, n, u, e, t) {
							if ((void 0 === e && (e = Dn.Default), l)) {
								var r = (function(l) {
									if ('string' == typeof l) return l.charCodeAt(0) || 0;
									var n = l[_l];
									return 'number' == typeof n ? n & pu : n;
								})(u);
								if ('function' == typeof r) {
									var s = Kn(),
										o = Wn();
									Jn(l, n);
									try {
										var a = r();
										if (null != a || e & Dn.Optional) return a;
										throw new Error('No provider for ' + bn(u) + '!');
									} finally {
										Jn(s, o);
									}
								} else if ('number' == typeof r) {
									var i = null,
										c = fu(l, n),
										p = fn,
										h = e & Dn.Host ? En(n)[Wl] : null;
									for ((-1 === c || e & Dn.SkipSelf) && ((p = -1 === c ? gu(l, n) : n[c + hn]), wu(e, !1) ? ((i = n[Bl]), (c = kn(p)), (n = Cn(p, n))) : (c = -1)); -1 !== c; ) {
										p = n[c + hn];
										var d = n[Bl];
										if (vu(r, c, d.data)) {
											var f = bu(c, n, u, i, e, h);
											if (f !== mu) return f;
										}
										wu(e, n[Bl].data[c + pn] === h) && vu(r, c, n) ? ((i = d), (c = kn(p)), (n = Cn(p, n))) : (c = -1);
									}
								}
							}
							if ((e & Dn.Optional && void 0 === t && (t = null), 0 == (e & (Dn.Self | Dn.Host)))) {
								var g = n[$l];
								return g ? g.get(u, t, e & Dn.Optional) : Fn(u, t, e & Dn.Optional);
							}
							if (e & Dn.Optional) return t;
							throw new Error('NodeInjector: NOT_FOUND [' + bn(u) + ']');
						})(this._tNode, this._lView, l, void 0, n);
					}),
					l
				);
			})();
			function _u(l, n) {
				l[cn] = n;
			}
			var xu = /([A-Z])/g;
			function ku(l) {
				try {
					return null != l ? l.toString().slice(0, 30) : l;
				} catch (n) {
					return '[ERROR] Exception while trying to serialize the value';
				}
			}
			function Cu(l, n) {
				var u = Iu(l),
					e = Iu(n);
				return u && e
					? (function(l, n, u) {
							for (var e = l[Nl()](), t = n[Nl()](); ; ) {
								var r = e.next(),
									s = t.next();
								if (r.done && s.done) return !0;
								if (r.done || s.done) return !1;
								if (!u(r.value, s.value)) return !1;
							}
					  })(l, n, Cu)
					: !(u || !l || ('object' != typeof l && 'function' != typeof l) || e || !n || ('object' != typeof n && 'function' != typeof n)) || Vl(l, n);
			}
			var Su = (function() {
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
				Eu = (function() {
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
			function Iu(l) {
				return !!Pu(l) && (Array.isArray(l) || (!(l instanceof Map) && Nl() in l));
			}
			function Pu(l) {
				return null !== l && ('function' == typeof l || 'object' == typeof l);
			}
			var Ou = {},
				Tu = 'ngProjectAs';
			function Mu(l) {
				return !!l.listen;
			}
			var Ru = {
					createRenderer: function(l, n) {
						return document;
					}
				},
				Au = [];
			function Nu(l, n, u, e, t) {
				0 === l ? (Mu(n) ? n.insertBefore(u, e, t) : u.insertBefore(e, t, !0)) : 1 === l ? (Mu(n) ? n.removeChild(u, e) : u.removeChild(e)) : 2 === l && n.destroyNode(e);
			}
			function Du(l) {
				var n = l[Bl].childIndex;
				return -1 === n ? null : l[n];
			}
			function Vu(l, n) {
				var u;
				return l.length >= tn && (u = l[Wl]) && 2 === u.type
					? (function(n, u) {
							if (-1 === n.index) {
								var e = l[un];
								return e > -1 ? l[Gl][e] : null;
							}
							return l[Gl][n.parent.index];
					  })(u)
					: l[Gl] === n
					? null
					: l[Gl];
			}
			function Uu(l) {
				if (l.length >= tn) {
					var n = l;
					!(function(l) {
						var n,
							u = l[Bl];
						null != u && null != (n = u.destroyHooks) && Zn(l, n);
					})(n),
						(t = (e = n)[Bl] && e[Bl].pipeDestroyHooks) && Zn(e, t),
						(function(l) {
							var n = l[Bl].cleanup;
							if (null != n) {
								for (var u = l[Yl], e = 0; e < n.length - 1; e += 2)
									if ('string' == typeof n[e]) {
										var t = u[n[e + 2]],
											r = yn(l[n[e + 1]]),
											s = n[e + 3];
										'boolean' == typeof s ? r.removeEventListener(n[e], t, s) : s >= 0 ? u[s]() : u[-s].unsubscribe(), (e += 2);
									} else 'number' == typeof n[e] ? (0, u[n[e]])() : n[e].call(u[n[e + 1]]);
								l[Yl] = null;
							}
						})(n);
					var u = n[Wl];
					u && 3 === u.type && Mu(n[ln]) && n[ln].destroy();
				}
				var e, t;
			}
			var Lu = '@',
				Hu = Promise.resolve(null);
			function Fu(l) {
				var n = l[Bl];
				if (((n.firstTemplatePass = !1), su(!1), !lu(l))) {
					var u = uu();
					(function(l, n, u) {
						!u && 32 & l[ql] && (Qn(l, n.initHooks, n.checkHooks, u), (l[ql] &= -33));
					})(l, n, u),
						(function(l) {
							for (var n = Du(l); null !== n; n = n[Ql])
								if (n.length < tn && -1 === n[rn])
									for (var u = n, e = 0; e < u[sn].length; e++) {
										var t = u[sn][e];
										qu(t, t[Bl], t[Jl]);
									}
						})(l),
						(function(l) {
							if (null != l.contentQueries)
								for (var n = 0; n < l.contentQueries.length; n += 2) {
									var u = l.contentQueries[n];
									l.data[u].contentQueriesRefresh(u - tn, l.contentQueries[n + 1]);
								}
						})(n),
						Qn(l, n.contentHooks, n.contentCheckHooks, u),
						(function(l, n) {
							if (l.expandoInstructions)
								for (var u = (n[Kl] = l.expandoStartIndex), e = -1, t = -1, r = 0; r < l.expandoInstructions.length; r++) {
									var s = l.expandoInstructions[r];
									if ('number' == typeof s)
										if (s <= 0) {
											t = -s;
											var o = l.expandoInstructions[++r];
											e = u += dn + o;
										} else u += s;
									else null !== s && ((n[Kl] = u), s(2, yn(n[e]), t)), e++;
								}
						})(n, l);
				}
				!(function(l) {
					if (null != l)
						for (var n = 0; n < l.length; n++)
							void 0,
								void 0,
								16 == (16 & (u = wn(l[n], Wn()))[ql]) &&
									12 & u[ql] &&
									((function(l) {
										for (var n = l[Bl], u = l.length; u < n.blueprint.length; u++) l[u] = n.blueprint[u];
									})(u),
									le(u, u[Jl]));
					var u;
				})(n.components);
			}
			function zu(l, n, u, e, t, r, s, o) {
				var a = n.blueprint.slice();
				return (
					(a[ql] = 51 | e),
					(a[Gl] = a[en] = l),
					(a[Jl] = u),
					(a[Xl] = t || (l && l[Xl])),
					(a[ln] = r || (l && l[ln])),
					(a[nn] = s || (l && l[nn]) || null),
					(a[$l] = o || (l && l[$l]) || null),
					a
				);
			}
			function Bu(l, n, u, e, t) {
				var r = Wn(),
					s = r[Bl],
					o = l + tn;
				r[o] = u;
				var a = s.data[o];
				null == a && (a = s.data[o] = Yu(r, n, o, e, t, null));
				var i = Kn(),
					c = $n();
				return i && (!c || null != i.child || (null === a.parent && 2 !== i.type) ? c || (i.next = a) : (i.child = a)), null == s.firstChild && (s.firstChild = a), Yn(a), Xn(!0), a;
			}
			function qu(l, n, u) {
				var e,
					t = $n(),
					r = Kn();
				if ((Xn(!0), Yn(null), 128 & l[ql]))
					Ju(
						(function(l) {
							for (var n = Array.isArray(l) ? l : xn(l); n && !(128 & n[ql]); ) n = n[Gl];
							return n;
						})(l)[Jl]
					);
				else
					try {
						Xn(!0), Yn(null), (e = ou(l, l[Wl])), Wu(), n.template(Qu(l), u), (l[Bl].firstTemplatePass = !1), su(!1), Fu(l);
					} finally {
						au(e), Xn(t), Yn(r);
					}
			}
			function Gu(l, n, u) {
				var e = l[Xl],
					t = ou(l, l[Wl]),
					r = !uu();
				try {
					r && e.begin && e.begin(), lu(l) && (u && (Wu(), u(1, n)), Fu(l), (l[ql] &= -2)), u && u(2, n), Fu(l);
				} finally {
					r && e.end && e.end(), au(t);
				}
			}
			function Qu(l) {
				return lu(l) ? 1 : 2;
			}
			var Zu = null;
			function Wu() {
				Zu = null;
			}
			function Ku(l, n, u, e, t, r, s) {
				var o = tn + u,
					a = o + e,
					i = (function(l, n) {
						var u = new Array(n).fill(null, 0, l).fill(Ou, l);
						return (u[un] = -1), (u[Kl] = l), u;
					})(o, a);
				return (i[Bl] = {
					id: l,
					blueprint: i,
					template: n,
					viewQuery: s,
					node: null,
					data: i.slice(),
					childIndex: -1,
					bindingStartIndex: o,
					expandoStartIndex: a,
					expandoInstructions: null,
					firstTemplatePass: !0,
					initHooks: null,
					checkHooks: null,
					contentHooks: null,
					contentCheckHooks: null,
					viewHooks: null,
					viewCheckHooks: null,
					destroyHooks: null,
					pipeDestroyHooks: null,
					cleanup: null,
					contentQueries: null,
					components: null,
					directiveRegistry: 'function' == typeof t ? t() : t,
					pipeRegistry: 'function' == typeof r ? r() : r,
					firstChild: null
				});
			}
			function Yu(l, n, u, e, t, r) {
				var s = Kn(),
					o = $n() ? s : s && s.parent,
					a = o && l && o !== l[Wl] ? o : null;
				return {
					type: n,
					index: u,
					injectorIndex: a ? a.injectorIndex : -1,
					directiveStart: -1,
					directiveEnd: -1,
					flags: 0,
					providerIndexes: 0,
					tagName: e,
					attrs: t,
					localNames: null,
					initialInputs: void 0,
					inputs: void 0,
					outputs: void 0,
					tViews: r,
					next: null,
					child: null,
					parent: a,
					detached: null,
					stylingTemplate: null,
					projection: null
				};
			}
			function Ju(l) {
				for (var n = 0; n < l.components.length; n++) {
					var u = l.components[n];
					Gu(xn(u), u);
				}
			}
			function $u(l, n) {
				var u = l[Xl];
				u.begin && u.begin(), lu(l) && le(l, n), le(l, n), u.end && u.end();
			}
			function Xu(l) {
				Ju(l[Jl]);
			}
			function le(l, n) {
				var u = l[Bl],
					e = ou(l, l[Wl]),
					t = u.template,
					r = u.viewQuery;
				try {
					Wu(),
						(function(n, u, e) {
							n && lu(l) && n(1, e);
						})(r, 0, n),
						t(Qu(l), n),
						Fu(l),
						(function(n, u, e) {
							n && !lu(l) && n(2, e);
						})(r, 0, n);
				} finally {
					au(e);
				}
			}
			var ne = Hu;
			function ue(l, n, u, e, t, r) {
				(On = !1), (Pn = null);
				var s,
					o = u[Bl],
					a = zu(u, (s = n.template).ngPrivateData || (s.ngPrivateData = Ku(-1, s, n.consts, n.vars, n.directiveDefs, n.pipeDefs, n.viewQuery)), null, n.onPush ? 8 : 4, e, t, r),
					i = Bu(0, 3, l, null, null);
				return (
					o.firstTemplatePass &&
						((function(l, n, u) {
							var e = 'string' != typeof u ? u[_l] : u.charCodeAt(0) || 0;
							null == e && (e = u[_l] = hu++);
							var t = e & pu,
								r = 1 << t,
								s = 64 & t,
								o = 32 & t,
								a = n.data;
							128 & t
								? s
									? o
										? (a[l + 7] |= r)
										: (a[l + 6] |= r)
									: o
									? (a[l + 5] |= r)
									: (a[l + 4] |= r)
								: s
								? o
									? (a[l + 3] |= r)
									: (a[l + 2] |= r)
								: o
								? (a[l + 1] |= r)
								: (a[l] |= r);
						})(
							(function(l, n) {
								var u = fu(l, n);
								if (-1 !== u) return u;
								var e = n[Bl];
								e.firstTemplatePass && ((l.injectorIndex = n.length), du(e.data, l), du(n, null), du(e.blueprint, null));
								var t = gu(l, n),
									r = kn(t),
									s = Cn(t, n),
									o = l.injectorIndex;
								if (t !== fn) for (var a = s[Bl].data, i = 0; i < 8; i++) n[o + i] = s[r + i] | a[r + i];
								return (n[o + hn] = t), o;
							})(i, u),
							u[Bl],
							n.type
						),
						(i.flags = 1),
						(function(l, n, u) {
							(l.flags = 1 & l.flags), (l.directiveStart = n), (l.directiveEnd = n + 1), (l.providerIndexes = n);
						})(i, u.length),
						(function(l) {
							var n = Wn()[Bl];
							(n.components || (n.components = [])).push(l.index);
						})(i)),
					(a[Zl] = u[tn]),
					(a[Wl] = i),
					(u[tn] = a)
				);
			}
			function ee(l, n, u, e, t) {
				var r = u[Bl],
					s = (function(l, n, u) {
						var e = Kn();
						l.firstTemplatePass &&
							(u.providersResolver && u.providersResolver(u),
							(function(l, n, u) {
								var t = -(e.index - tn),
									r = l.data.length - (65535 & e.providerIndexes);
								(l.expandoInstructions || (l.expandoInstructions = [])).push(t, r, 1);
							})(l),
							(function(l, n, u, e) {
								l.data.push(u);
								var t = new gn(e, jn(u), null);
								l.blueprint.push(t), n.push(t);
							})(l, n, u, u.factory));
						var t = yu(l.data, n, n.length - 1, e);
						return (
							(function(l, n, u, e) {
								var t = vn(n, l);
								_u(u, l),
									t && _u(t, l),
									null != e.attributes &&
										3 == n.type &&
										(function(l, n) {
											for (var u = Wn()[ln], e = Mu(u), t = 0; t < n.length; ) {
												var r = n[t++];
												if ('number' == typeof r) {
													if (0 !== r) break;
													var s = n[t++],
														o = n[t++],
														a = n[t++];
													e ? u.setAttribute(l, o, a, s) : l.setAttributeNS(s, o, a);
												} else (a = n[t++]), r !== Tu && (r[0] === Lu ? e && u.setProperty(l, r, a) : e ? u.setAttribute(l, r, a) : l.setAttribute(r, a));
											}
										})(t, e.attributes);
							})(n, e, t, u),
							t
						);
					})(r, u, n);
				if (
					(e.components.push(s),
					(l[Jl] = s),
					t &&
						t.forEach(function(l) {
							return l(s, n);
						}),
					r.firstTemplatePass && n.hostBindings)
				) {
					var o = Kn();
					n.hostBindings(1, s, o.index - tn);
				}
				return s;
			}
			function te(l, n) {
				return { components: [], scheduler: l || Sn, clean: ne, playerHandler: n || null, flags: 0 };
			}
			function re(l, n) {
				var u,
					e,
					t,
					r,
					s = xn(l)[Bl],
					o = s.data.length - 1;
				(u = o),
					(t = n.doCheck),
					(r = s),
					(e = n.onInit) && (r.initHooks || (r.initHooks = [])).push(u, e),
					t && ((r.initHooks || (r.initHooks = [])).push(u, t), (r.checkHooks || (r.checkHooks = [])).push(u, t)),
					(function(l, n) {
						if (l.firstTemplatePass)
							for (var u = n.directiveStart, e = n.directiveEnd; u < e; u++) {
								var t = l.data[u];
								Bn(t, l, u), qn(t, l, u), Gn(t, l, u);
							}
					})(s, { directiveStart: o, directiveEnd: o + 1 });
			}
			function se() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
			}
			var oe = '__source',
				ae = new Object(),
				ie = ae,
				ce = new Sl('INJECTOR'),
				pe = (function() {
					function l() {}
					return (
						(l.prototype.get = function(l, n) {
							if ((void 0 === n && (n = ae), n === ae)) throw new Error('NullInjectorError: No provider for ' + Ul(l) + '!');
							return n;
						}),
						l
					);
				})(),
				he = (function() {
					function l() {}
					return (
						(l.create = function(l, n) {
							return Array.isArray(l) ? new _e(l, n) : new _e(l.providers, l.parent, l.name || null);
						}),
						(l.THROW_IF_NOT_FOUND = ae),
						(l.NULL = new pe()),
						(l.ngInjectableDef = xl({
							providedIn: 'any',
							factory: function() {
								return Hn(ce);
							}
						})),
						(l.__NG_ELEMENT_ID__ = function() {
							return de();
						}),
						l
					);
				})(),
				de = se,
				fe = function(l) {
					return l;
				},
				ge = [],
				me = fe,
				be = function() {
					return Array.prototype.slice.call(arguments);
				},
				ye = bl({ provide: String, useValue: bl }),
				ve = he.NULL,
				we = /\n/gm,
				je = '\u0275',
				_e = (function() {
					function l(l, n, u) {
						void 0 === n && (n = ve), void 0 === u && (u = null), (this.parent = n), (this.source = u);
						var e = (this._records = new Map());
						e.set(he, { token: he, fn: fe, deps: ge, value: this, useNew: !1 }),
							e.set(ce, { token: ce, fn: fe, deps: ge, value: this, useNew: !1 }),
							(function l(n, u) {
								if (u)
									if ((u = Fl(u)) instanceof Array) for (var e = 0; e < u.length; e++) l(n, u[e]);
									else {
										if ('function' == typeof u) throw Ce('Function/Class not supported', u);
										if (!u || 'object' != typeof u || !u.provide) throw Ce('Unexpected provider', u);
										var t = Fl(u.provide),
											r = (function(l) {
												var n = (function(l) {
														var n = ge,
															u = l.deps;
														if (u && u.length) {
															n = [];
															for (var e = 0; e < u.length; e++) {
																var t = 6;
																if ((a = Fl(u[e])) instanceof Array)
																	for (var r = 0, s = a; r < s.length; r++) {
																		var o = s[r];
																		o instanceof Rn || o == Rn
																			? (t |= 1)
																			: o instanceof Nn || o == Nn
																			? (t &= -3)
																			: o instanceof An || o == An
																			? (t &= -5)
																			: (a = o instanceof Mn ? o.token : Fl(o));
																	}
																n.push({ token: a, options: t });
															}
														} else if (l.useExisting) {
															var a;
															n = [{ token: (a = Fl(l.useExisting)), options: 6 }];
														} else if (!(u || ye in l)) throw Ce("'deps' required", l);
														return n;
													})(l),
													u = fe,
													e = ge,
													t = !1,
													r = Fl(l.provide);
												if (ye in l) e = l.useValue;
												else if (l.useFactory) u = l.useFactory;
												else if (l.useExisting);
												else if (l.useClass) (t = !0), (u = Fl(l.useClass));
												else {
													if ('function' != typeof r) throw Ce('StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable', l);
													(t = !0), (u = r);
												}
												return { deps: n, fn: u, useNew: t, value: e };
											})(u);
										if (!0 === u.multi) {
											var s = n.get(t);
											if (s) {
												if (s.fn !== be) throw xe(t);
											} else n.set(t, (s = { token: u.provide, deps: [], useNew: !1, fn: be, value: ge }));
											s.deps.push({ token: (t = u), options: 6 });
										}
										var o = n.get(t);
										if (o && o.fn == be) throw xe(t);
										n.set(t, r);
									}
							})(e, l);
					}
					return (
						(l.prototype.get = function(l, n, u) {
							void 0 === u && (u = Dn.Default);
							var e = this._records.get(l);
							try {
								return (function l(n, u, e, t, r, s) {
									try {
										return (function(n, u, e, t, r, s) {
											var o, a;
											if (!u || s & Dn.SkipSelf) s & Dn.Self || (a = t.get(n, r, Dn.Default));
											else {
												if ((a = u.value) == me) throw Error(je + 'Circular dependency');
												if (a === ge) {
													u.value = me;
													var i = u.useNew,
														p = u.fn,
														h = u.deps,
														d = ge;
													if (h.length) {
														d = [];
														for (var f = 0; f < h.length; f++) {
															var g = h[f],
																m = g.options,
																b = 2 & m ? e.get(g.token) : void 0;
															d.push(l(g.token, b, e, b || 4 & m ? t : ve, 1 & m ? null : he.THROW_IF_NOT_FOUND, Dn.Default));
														}
													}
													u.value = a = i ? new ((o = p).bind.apply(o, c([void 0], d)))() : p.apply(void 0, d);
												}
											}
											return a;
										})(n, u, e, t, r, s);
									} catch (o) {
										throw (o instanceof Error || (o = new Error(o)), (o.ngTempTokenPath = o.ngTempTokenPath || []).unshift(n), u && u.value == me && (u.value = ge), o);
									}
								})(l, e, this._records, this.parent, n, u);
							} catch (r) {
								var t = r.ngTempTokenPath;
								throw (l[oe] && t.unshift(l[oe]), (r.message = ke('\n' + r.message, t, this.source)), (r.ngTokenPath = t), (r.ngTempTokenPath = null), r);
							}
						}),
						(l.prototype.toString = function() {
							var l = [];
							return (
								this._records.forEach(function(n, u) {
									return l.push(Ul(u));
								}),
								'StaticInjector[' + l.join(', ') + ']'
							);
						}),
						l
					);
				})();
			function xe(l) {
				return Ce('Cannot mix multi providers and regular providers', l);
			}
			function ke(l, n, u) {
				void 0 === u && (u = null), (l = l && '\n' === l.charAt(0) && l.charAt(1) == je ? l.substr(2) : l);
				var e = Ul(n);
				if (n instanceof Array) e = n.map(Ul).join(' -> ');
				else if ('object' == typeof n) {
					var t = [];
					for (var r in n)
						if (n.hasOwnProperty(r)) {
							var s = n[r];
							t.push(r + ':' + ('string' == typeof s ? JSON.stringify(s) : Ul(s)));
						}
					e = '{' + t.join(', ') + '}';
				}
				return 'StaticInjectorError' + (u ? '(' + u + ')' : '') + '[' + e + ']: ' + l.replace(we, '\n  ');
			}
			function Ce(l, n) {
				return new Error(ke(l, n));
			}
			var Se = new Sl('The presence of this token marks an injector as being the root injector.'),
				Ee = {},
				Ie = {},
				Pe = [],
				Oe = void 0;
			function Te() {
				return void 0 === Oe && (Oe = new pe()), Oe;
			}
			var Me = (function() {
				function l(l, n, u) {
					var e = this;
					(this.parent = u), (this.records = new Map()), (this.injectorDefTypes = new Set()), (this.onDestroy = new Set()), (this.destroyed = !1);
					var t = [];
					Ne([l], function(l) {
						return e.processInjectorType(l, [], t);
					}),
						n &&
							Ne(n, function(u) {
								return e.processProvider(u, l, n);
							}),
						this.records.set(ce, Ae(void 0, this)),
						(this.isRootInjector = this.records.has(Se)),
						this.injectorDefTypes.forEach(function(l) {
							return e.get(l);
						});
				}
				return (
					(l.prototype.destroy = function() {
						this.assertNotDestroyed(), (this.destroyed = !0);
						try {
							this.onDestroy.forEach(function(l) {
								return l.ngOnDestroy();
							});
						} finally {
							this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
						}
					}),
					(l.prototype.get = function(l, n, u) {
						void 0 === n && (n = ie), void 0 === u && (u = Dn.Default), this.assertNotDestroyed();
						var e,
							t = Un(this);
						try {
							if (!(u & Dn.SkipSelf)) {
								var r = this.records.get(l);
								if (void 0 === r) {
									var s = ('function' == typeof (e = l) || ('object' == typeof e && e instanceof Sl)) && kl(l);
									s && this.injectableDefInScope(s) && ((r = Ae(Re(l), Ee)), this.records.set(l, r));
								}
								if (void 0 !== r) return this.hydrate(l, r);
							}
							return (u & Dn.Self ? Te() : this.parent).get(l, n);
						} finally {
							Un(t);
						}
					}),
					(l.prototype.assertNotDestroyed = function() {
						if (this.destroyed) throw new Error('Injector has already been destroyed.');
					}),
					(l.prototype.processInjectorType = function(l, n, u) {
						var e = this;
						if ((l = Fl(l))) {
							var t = Cl(l),
								r = (null == t && l.ngModule) || void 0,
								s = void 0 === r ? l : r,
								o = -1 !== u.indexOf(s),
								a = (void 0 !== r && l.providers) || Pe;
							if ((void 0 !== r && (t = Cl(r)), null != t)) {
								if ((this.injectorDefTypes.add(s), this.records.set(s, Ae(t.factory, Ee)), null != t.imports && !o)) {
									u.push(s);
									try {
										Ne(t.imports, function(l) {
											return e.processInjectorType(l, n, u);
										});
									} finally {
									}
								}
								var i = t.providers;
								if (null != i && !o) {
									var c = l;
									Ne(i, function(l) {
										return e.processProvider(l, c, i);
									});
								}
								var p = l.ngModule;
								Ne(a, function(l) {
									return e.processProvider(l, p, a);
								});
							}
						}
					}),
					(l.prototype.processProvider = function(l, n, u) {
						var e = Ve((l = Fl(l))) ? l : Fl(l && l.provide),
							t = (function(l, n, u) {
								var e = (function(l, n, u) {
									var e,
										t = void 0;
									if (Ve(l)) return Re(Fl(l));
									if (De(l))
										t = function() {
											return Fl(l.useValue);
										};
									else if ((e = l) && e.useExisting)
										t = function() {
											return Hn(Fl(l.useExisting));
										};
									else if (l && l.useFactory)
										t = function() {
											return l.useFactory.apply(l, c(zn(l.deps || [])));
										};
									else {
										var r = Fl(l && (l.useClass || l.provide));
										if (!r) {
											var s = '';
											throw (n &&
												u &&
												(s =
													' - only instances of Provider and Type are allowed, got: [' +
													u
														.map(function(n) {
															return n == l ? '?' + l + '?' : '...';
														})
														.join(', ') +
													']'),
											new Error("Invalid provider for the NgModule '" + Ul(n) + "'" + s));
										}
										if (!l.deps) return Re(r);
										t = function() {
											return new (r.bind.apply(r, c([void 0], zn(l.deps))))();
										};
									}
									return t;
								})(l, n, u);
								return De(l) ? Ae(void 0, l.useValue) : Ae(e, Ee);
							})(l, n, u);
						if (Ve(l) || !0 !== l.multi) {
							var r = this.records.get(e);
							if (r && void 0 !== r.multi) throw new Error('Mixed multi-provider for ' + Ul(e));
						} else {
							var s = this.records.get(e);
							if (s) {
								if (void 0 === s.multi) throw new Error('Mixed multi-provider for ' + e + '.');
							} else
								((s = Ae(void 0, Ee, !0)).factory = function() {
									return zn(s.multi);
								}),
									this.records.set(e, s);
							(e = l), s.multi.push(l);
						}
						this.records.set(e, t);
					}),
					(l.prototype.hydrate = function(l, n) {
						if (n.value === Ie) throw new Error('Cannot instantiate cyclic dependency! ' + Ul(l));
						var u;
						return (
							n.value === Ee && ((n.value = Ie), (n.value = n.factory())),
							'object' == typeof n.value &&
								n.value &&
								'object' == typeof (u = n.value) &&
								null != u &&
								u.ngOnDestroy &&
								'function' == typeof u.ngOnDestroy &&
								this.onDestroy.add(n.value),
							n.value
						);
					}),
					(l.prototype.injectableDefInScope = function(l) {
						return (
							!!l.providedIn && ('string' == typeof l.providedIn ? 'any' === l.providedIn || ('root' === l.providedIn && this.isRootInjector) : this.injectorDefTypes.has(l.providedIn))
						);
					}),
					l
				);
			})();
			function Re(l) {
				var n = kl(l);
				if (null === n) {
					var u = Cl(l);
					if (null !== u) return u.factory;
					if (l instanceof Sl) throw new Error('Token ' + Ul(l) + ' is missing an ngInjectableDef definition.');
					if (l instanceof Function) {
						var e = l.length;
						if (e > 0) {
							var t = new Array(e).fill('?');
							throw new Error("Can't resolve all parameters for " + Ul(l) + ': (' + t.join(', ') + ').');
						}
						return function() {
							return new l();
						};
					}
					throw new Error('unreachable');
				}
				return n.factory;
			}
			function Ae(l, n, u) {
				return void 0 === u && (u = !1), { factory: l, value: n, multi: u ? [] : void 0 };
			}
			function Ne(l, n) {
				l.forEach(function(l) {
					return Array.isArray(l) ? Ne(l, n) : n(l);
				});
			}
			function De(l) {
				return l && 'object' == typeof l && ye in l;
			}
			function Ve(l) {
				return 'function' == typeof l;
			}
			var Ue = (function() {
					return function() {};
				})(),
				Le = (function() {
					return function() {};
				})();
			function He(l) {
				var n = Error('No component factory found for ' + Ul(l) + '. Did you add it to @NgModule.entryComponents?');
				return (n[ze] = l), n;
			}
			var Fe,
				ze = 'ngComponent',
				Be = (function() {
					function l() {}
					return (
						(l.prototype.resolveComponentFactory = function(l) {
							throw He(l);
						}),
						l
					);
				})(),
				qe = (function() {
					function l() {}
					return (l.NULL = new Be()), l;
				})(),
				Ge = (function() {
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
							if ((!n && this._parent && (n = this._parent.resolveComponentFactory(l)), !n)) throw He(l);
							return new Qe(n, this._ngModule);
						}),
						l
					);
				})(),
				Qe = (function(l) {
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
				})(Le),
				Ze = (function() {
					return function() {};
				})(),
				We = (function() {
					return function() {};
				})(),
				Ke = (function(l) {
					function n(n) {
						var u = l.call(this, n, null, -1) || this;
						return (u._view = n), u;
					}
					return (
						t(n, l),
						(n.prototype.detectChanges = function() {
							Xu(this._view);
						}),
						(n.prototype.checkNoChanges = function() {
							!(function(l) {
								eu(!0);
								try {
									Xu(l);
								} finally {
									eu(!1);
								}
							})(this._view);
						}),
						Object.defineProperty(n.prototype, 'context', {
							get: function() {
								return null;
							},
							enumerable: !0,
							configurable: !0
						}),
						n
					);
				})(
					(function() {
						function l(l, n, u) {
							(this._context = n), (this._componentIndex = u), (this._appRef = null), (this._viewContainerRef = null), (this._tViewNode = null), (this._lView = l);
						}
						return (
							Object.defineProperty(l.prototype, 'rootNodes', {
								get: function() {
									return null == this._lView[Zl]
										? (function l(n, u, e) {
												for (var t = u.child; t; ) e.push(vn(t, n)), 4 === t.type && l(n, t, e), (t = t.next);
												return e;
										  })(this._lView, this._lView[Wl], [])
										: [];
								},
								enumerable: !0,
								configurable: !0
							}),
							Object.defineProperty(l.prototype, 'context', {
								get: function() {
									return this._context ? this._context : this._lookUpContext();
								},
								enumerable: !0,
								configurable: !0
							}),
							Object.defineProperty(l.prototype, 'destroyed', {
								get: function() {
									return 64 == (64 & this._lView[ql]);
								},
								enumerable: !0,
								configurable: !0
							}),
							(l.prototype.destroy = function() {
								if (this._appRef) this._appRef.detachView(this);
								else if (this._viewContainerRef) {
									var l = this._viewContainerRef.indexOf(this);
									l > -1 && this._viewContainerRef.detach(l), (this._viewContainerRef = null);
								}
								var n, u;
								Mu((u = (n = this._lView)[ln])) &&
									u.destroyNode &&
									(function(l, u, e, t, r) {
										for (var s = n[Bl].node, o = -1, a = n, i = s.child; i; ) {
											var c = null;
											if (3 === i.type) {
												Nu(2, e, null, vn(i, a), r);
												var p = a[i.index];
												(g = p), Array.isArray(g) && g.length === an && Nu(2, e, null, p[on], r);
											} else if (0 === i.type) {
												var h = a[i.index];
												Nu(2, e, null, h[on], r), h[sn].length && ((c = (a = h[sn][0])[Bl].node), (r = h[on]));
											} else if (1 === i.type) {
												var d = En(a),
													f = d[Wl].projection[i.projection];
												(Au[++o] = i), (Au[++o] = a), f && (c = (a = d[Gl])[Bl].data[f.index]);
											} else c = i.child;
											if (null === c)
												for (null === i.next && 2 & i.flags && ((a = Au[o--]), (i = Au[o--])), c = i.next; !c; ) {
													if (null === (i = i.parent || a[Bl].node) || i === s) return null;
													0 === i.type && (r = (a = a[Gl])[i.index][on]), (c = 2 === i.type && a[Ql] ? (a = a[Ql])[Bl].node : i.next);
												}
											i = c;
										}
										var g;
									})(0, 0, u),
									(function(l) {
										if (-1 === l[Bl].childIndex) return Uu(l);
										for (var n = Du(l); n; ) {
											var u = null;
											if ((n.length >= tn ? n[Bl].childIndex > -1 && (u = Du(n)) : n[sn].length && (u = n[sn][0]), null == u)) {
												for (; n && !n[Ql] && n !== l; ) Uu(n), (n = Vu(n, l));
												Uu(n || l), (u = n && n[Ql]);
											}
											n = u;
										}
									})(n),
									(n[ql] |= 64);
							}),
							(l.prototype.onDestroy = function(l) {
								var n, u;
								(u = l),
									(function(l) {
										return l[Yl] || (l[Yl] = []);
									})((n = this._lView)).push(u),
									n[Bl].firstTemplatePass &&
										(function(l) {
											return l[Bl].cleanup || (l[Bl].cleanup = []);
										})(n).push(n[Yl].length - 1, null);
							}),
							(l.prototype.markForCheck = function() {
								!(function(l) {
									for (; l && !(128 & l[ql]); ) (l[ql] |= 8), (l = l[Gl]);
									var n, u, e;
									(l[ql] |= 8),
										(e = 0 === (n = l[Jl]).flags),
										(n.flags |= 1),
										e &&
											n.clean == Hu &&
											((n.clean = new Promise(function(l) {
												return (u = l);
											})),
											n.scheduler(function() {
												if ((1 & n.flags && ((n.flags &= -2), Ju(n)), 2 & n.flags)) {
													n.flags &= -3;
													var l = n.playerHandler;
													l && l.flushPlayers();
												}
												(n.clean = Hu), u(null);
											}));
								})(this._lView);
							}),
							(l.prototype.detach = function() {
								this._lView[ql] &= -17;
							}),
							(l.prototype.reattach = function() {
								this._lView[ql] |= 16;
							}),
							(l.prototype.detectChanges = function() {
								$u(this._lView, this.context);
							}),
							(l.prototype.checkNoChanges = function() {
								!(function(l) {
									eu(!0);
									try {
										!(function(l) {
											$u(
												(function(l) {
													var n,
														u = _n(l);
													if (Array.isArray(u)) {
														var e = (function(l, n) {
															var u = l[Bl].components;
															if (u)
																for (var e = 0; e < u.length; e++) {
																	var t = u[e];
																	if (wn(t, l)[Jl] === n) return t;
																}
															else if (wn(tn, l)[Jl] === n) return tn;
															return -1;
														})(u, l);
														((t = (function(l, n, u) {
															return { lView: l, nodeIndex: n, native: u, component: void 0, directives: void 0, localRefs: void 0 };
														})(u, e, (n = wn(e, u))[Zl])).component = l),
															_u(l, t),
															_u(t.native, t);
													} else {
														var t;
														n = wn((t = u).nodeIndex, t.lView);
													}
													return n;
												})(l),
												l
											);
										})(l);
									} finally {
										eu(!1);
									}
								})(this.context);
							}),
							(l.prototype.attachToViewContainerRef = function(l) {
								if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
								this._viewContainerRef = l;
							}),
							(l.prototype.detachFromAppRef = function() {
								this._appRef = null;
							}),
							(l.prototype.attachToAppRef = function(l) {
								if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
								this._appRef = l;
							}),
							(l.prototype._lookUpContext = function() {
								return (this._context = this._lView[Gl][this._componentIndex]);
							}),
							l
						);
					})()
				),
				Ye = (function() {
					function l(l) {
						this.nativeElement = l;
					}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Je(l);
						}),
						l
					);
				})(),
				Je = se,
				$e = (function() {
					return function() {};
				})(),
				Xe = (function() {
					return function() {};
				})(),
				lt = (function(l) {
					return (l[(l.Important = 1)] = 'Important'), (l[(l.DashCase = 2)] = 'DashCase'), l;
				})({}),
				nt = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return ut();
						}),
						l
					);
				})(),
				ut = se,
				et = (function(l) {
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
				tt = (function() {
					return function() {};
				})(),
				rt = new ((function() {
					return function(l) {
						(this.full = l),
							(this.major = l.split('.')[0]),
							(this.minor = l.split('.')[1]),
							(this.patch = l
								.split('.')
								.slice(2)
								.join('.'));
					};
				})())('7.2.2'),
				st = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u.ngModule = n), u;
					}
					return (
						t(n, l),
						(n.prototype.resolveComponentFactory = function(l) {
							return new pt(l[yl] || null, this.ngModule);
						}),
						n
					);
				})(qe);
			function ot(l) {
				var n = [];
				for (var u in l) l.hasOwnProperty(u) && n.push({ propName: l[u], templateName: u });
				return n;
			}
			var at = new Sl('ROOT_CONTEXT_TOKEN', {
					providedIn: 'root',
					factory: function() {
						return te(Hn(it));
					}
				}),
				it = new Sl('SCHEDULER_TOKEN', {
					providedIn: 'root',
					factory: function() {
						return Sn;
					}
				}),
				ct = {},
				pt = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						return (e.componentDef = n), (e.ngModule = u), (e.componentType = n.type), (e.selector = n.selectors[0][0]), (e.ngContentSelectors = []), e;
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'inputs', {
							get: function() {
								return ot(this.componentDef.inputs);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'outputs', {
							get: function() {
								return ot(this.componentDef.outputs);
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.create = function(l, n, u, e) {
							var r,
								s,
								o,
								a,
								i = void 0 === u,
								c = (e = e || this.ngModule)
									? (function(l, n) {
											return {
												get: function(u, e) {
													var t = l.get(u, ct);
													return t !== ct || e === ct ? t : n.get(u, e);
												}
											};
									  })(l, e.injector)
									: l,
								p = c.get(Xe, Ru),
								h = c.get(tt, null),
								d = i
									? ((o = this.selector),
									  Mu((a = p.createRenderer(null, this.componentDef) || Wn()[ln])) ? a.createElement(o, Zu) : null === Zu ? a.createElement(o) : a.createElementNS(Zu, o))
									: ((r = u), (s = p.createRenderer(null, null)), 'string' == typeof r ? (Mu(s) ? s.selectRootElement(r) : s.querySelector(r)) : r),
								f = this.componentDef.onPush ? 136 : 132,
								g = i ? te() : c.get(at),
								m = p.createRenderer(d, this.componentDef);
							u && d && (Mu(m) ? m.setAttribute(d, 'ng-version', rt.full) : d.setAttribute('ng-version', rt.full));
							var b,
								y,
								v = zu(null, Ku(-1, null, 1, 0, null, null, null), g, f, p, m, h, c),
								w = ou(v, null);
							try {
								p.begin && p.begin();
								var j = ue(d, this.componentDef, v, p, m);
								if (((y = v[Bl].data[0 + tn]), n))
									for (var _ = 0, x = v[Bl], k = (y.projection = []), C = 0; C < n.length; C++) {
										for (var S = n[C], E = null, I = null, P = 0; P < S.length; P++) {
											x.firstTemplatePass && (x.expandoStartIndex++, x.blueprint.splice(++_ + tn, 0, null), x.data.splice(_ + tn, 0, null), v.splice(_ + tn, 0, null));
											var O = Bu(_, 3, S[P], null, null);
											I ? (I.next = O) : (E = O), (I = O);
										}
										k.push(E);
									}
								(b = ee(j, this.componentDef, v, g, [re])),
									(function(l, n, u) {
										var e = l[Bl],
											t = ru();
										l[14] ? (l[14][Ql] = u) : t && (e.childIndex = n), (l[14] = u);
									})(v, tn, j),
									Fu(v);
							} finally {
								au(w), p.end && p.end();
							}
							var T = new ht(
								this.componentType,
								b,
								(function(l, n, u) {
									return (
										Fe ||
											(Fe = (function(l) {
												function n() {
													return (null !== l && l.apply(this, arguments)) || this;
												}
												return t(n, l), n;
											})(Ye)),
										new Fe(vn(n, u))
									);
								})(0, y, v),
								v,
								y
							);
							return i && (T.hostView._tViewNode.child = y), T;
						}),
						n
					);
				})(Le),
				ht = (function(l) {
					function n(n, u, e, t, r) {
						var s,
							o = l.call(this) || this;
						return (
							(o.location = e),
							(o._rootLView = t),
							(o._tNode = r),
							(o.destroyCbs = []),
							(o.instance = u),
							(o.hostView = o.changeDetectorRef = new Ke(t)),
							(o.hostView._tViewNode = (-1, null == (s = t)[Bl].node && (s[Bl].node = Yu(s, 2, -1, null, null, null)), (s[Wl] = s[Bl].node))),
							(o.componentType = n),
							o
						);
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'injector', {
							get: function() {
								return new ju(this._tNode, this._rootLView);
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.destroy = function() {
							this.destroyCbs.forEach(function(l) {
								return l();
							}),
								(this.destroyCbs = null),
								this.hostView.destroy();
						}),
						(n.prototype.onDestroy = function(l) {
							this.destroyCbs.push(l);
						}),
						n
					);
				})(Ue),
				dt = !0,
				ft = !1;
			function gt() {
				return (ft = !0), dt;
			}
			var mt = (function() {
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
				bt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				yt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function vt(l) {
				return (l = String(l)).match(bt) || l.match(yt) ? l : (gt() && console.warn('WARNING: sanitizing unsafe URL value ' + l + ' (see http://g.co/ng/security#xss)'), 'unsafe:' + l);
			}
			function wt(l) {
				var n,
					u,
					e = {};
				try {
					for (var t = a(l.split(',')), r = t.next(); !r.done; r = t.next()) e[r.value] = !0;
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
			function jt() {
				for (var l, n, u = [], e = 0; e < arguments.length; e++) u[e] = arguments[e];
				var t = {};
				try {
					for (var r = a(u), s = r.next(); !s.done; s = r.next()) {
						var o = s.value;
						for (var i in o) o.hasOwnProperty(i) && (t[i] = !0);
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
			var _t,
				xt = wt('area,br,col,hr,img,wbr'),
				kt = wt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				Ct = wt('rp,rt'),
				St = jt(Ct, kt),
				Et = jt(
					xt,
					jt(
						kt,
						wt(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					jt(
						Ct,
						wt(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					St
				),
				It = wt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				Pt = wt('srcset'),
				Ot = jt(
					It,
					Pt,
					wt(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					)
				),
				Tt = (function() {
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
							if (!Et.hasOwnProperty(u)) return (this.sanitizedSomething = !0), !1;
							this.buf.push('<'), this.buf.push(u);
							for (var e = l.attributes, t = 0; t < e.length; t++) {
								var r = e.item(t),
									s = r.name,
									o = s.toLowerCase();
								if (Ot.hasOwnProperty(o)) {
									var a = r.value;
									It[o] && (a = vt(a)),
										Pt[o] &&
											((n = a),
											(a = (n = String(n))
												.split(',')
												.map(function(l) {
													return vt(l.trim());
												})
												.join(', '))),
										this.buf.push(' ', s, '="', At(a), '"');
								} else this.sanitizedSomething = !0;
							}
							return this.buf.push('>'), !0;
						}),
						(l.prototype.endElement = function(l) {
							var n = l.nodeName.toLowerCase();
							Et.hasOwnProperty(n) && !xt.hasOwnProperty(n) && (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
						}),
						(l.prototype.chars = function(l) {
							this.buf.push(At(l));
						}),
						(l.prototype.checkClobberedElement = function(l, n) {
							if (n && (l.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
								throw new Error('Failed to sanitize html because the element is clobbered: ' + l.outerHTML);
							return n;
						}),
						l
					);
				})(),
				Mt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				Rt = /([^\#-~ |!])/g;
			function At(l) {
				return l
					.replace(/&/g, '&amp;')
					.replace(Mt, function(l) {
						return '&#' + (1024 * (l.charCodeAt(0) - 55296) + (l.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(Rt, function(l) {
						return '&#' + l.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			function Nt(l) {
				return 'content' in l &&
					(function(l) {
						return l.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === l.nodeName;
					})(l)
					? l.content
					: null;
			}
			var Dt = { provide: qe, useClass: st, deps: [Ze] },
				Vt = (function(l) {
					function n(n, u) {
						var e = l.call(this) || this;
						(e._parent = u), (e._bootstrapComponents = []), (e.injector = e), (e.destroyCbs = []);
						var t = (function(l, u) {
							var e = n[jl] || null;
							return e;
						})();
						return (
							(e._bootstrapComponents = t.bootstrap),
							(e._r3Injector = (function(l, n, u) {
								return void 0 === n && (n = null), void 0 === u && (u = null), (n = n || Te()), new Me(l, u, n);
							})(n, u, [{ provide: Ze, useValue: e }, Dt])),
							(e.instance = e.get(n)),
							e
						);
					}
					return (
						t(n, l),
						(n.prototype.get = function(l, n, u) {
							return void 0 === n && (n = he.THROW_IF_NOT_FOUND), void 0 === u && (u = Dn.Default), l === he || l === Ze || l === ce ? this : this._r3Injector.get(l, n, u);
						}),
						Object.defineProperty(n.prototype, 'componentFactoryResolver', {
							get: function() {
								return this.get(qe);
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.destroy = function() {
							this.destroyCbs.forEach(function(l) {
								return l();
							}),
								(this.destroyCbs = null);
						}),
						(n.prototype.onDestroy = function(l) {
							this.destroyCbs.push(l);
						}),
						n
					);
				})(Ze);
			!(function(l) {
				function n(n) {
					var u = l.call(this) || this;
					return (u.moduleType = n), u;
				}
				t(n, l),
					(n.prototype.create = function(l) {
						return new Vt(this.moduleType, l);
					});
			})(We);
			var Ut = (function(l) {
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
							var o = l.prototype.subscribe.call(this, t, r, s);
							return n instanceof w && n.add(o), o;
						}),
						n
					);
				})(L),
				Lt = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Ht(l, Ye);
						}),
						l
					);
				})(),
				Ht = se,
				Ft = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				zt = /^url\(([^)]+)\)$/,
				Bt = (function() {
					return function() {};
				})();
			Function, String, String;
			var qt = 'ngDebugContext',
				Gt = 'ngOriginalError',
				Qt = 'ngErrorLogger';
			function Zt(l) {
				return l[qt];
			}
			function Wt(l) {
				return l[Gt];
			}
			function Kt(l) {
				for (var n = [], u = 1; u < arguments.length; u++) n[u - 1] = arguments[u];
				l.error.apply(l, c(n));
			}
			var Yt = (function() {
				function l() {
					this._console = console;
				}
				return (
					(l.prototype.handleError = function(l) {
						var n = this._findOriginalError(l),
							u = this._findContext(l),
							e = (function(l) {
								return l[Qt] || Kt;
							})(l);
						e(this._console, 'ERROR', l), n && e(this._console, 'ORIGINAL ERROR', n), u && e(this._console, 'ERROR CONTEXT', u);
					}),
					(l.prototype._findContext = function(l) {
						return l ? (Zt(l) ? Zt(l) : this._findContext(Wt(l))) : null;
					}),
					(l.prototype._findOriginalError = function(l) {
						for (var n = Wt(l); n && Wt(n); ) n = Wt(n);
						return n;
					}),
					l
				);
			})();
			function Jt(l) {
				return !!l && 'function' == typeof l.then;
			}
			function $t(l) {
				return !!l && 'function' == typeof l.subscribe;
			}
			var Xt = new Sl('Application Initializer'),
				lr = (function() {
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
										Jt(t) && n.push(t);
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
				nr = new Sl('AppId');
			function ur() {
				return '' + er() + er() + er();
			}
			function er() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			var tr = new Sl('Platform Initializer'),
				rr = new Sl('Platform ID'),
				sr = new Sl('appBootstrapListener'),
				or = (function() {
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
			function ar() {
				throw new Error('Runtime compiler is not loaded');
			}
			var ir,
				cr,
				pr = ar,
				hr = ar,
				dr = ar,
				fr = ar,
				gr = (function() {
					function l() {
						(this.compileModuleSync = pr), (this.compileModuleAsync = hr), (this.compileModuleAndAllComponentsSync = dr), (this.compileModuleAndAllComponentsAsync = fr);
					}
					return (l.prototype.clearCache = function() {}), (l.prototype.clearCacheFor = function(l) {}), (l.prototype.getModuleId = function(l) {}), l;
				})(),
				mr = (function() {
					return function() {};
				})();
			function br() {
				var l = Ml.wtf;
				return !(!l || !(ir = l.trace) || ((cr = ir.events), 0));
			}
			var yr = br();
			function vr(l, n) {
				return null;
			}
			var wr = yr
					? function(l, n) {
							return void 0 === n && (n = null), cr.createScope(l, n);
					  }
					: function(l, n) {
							return vr;
					  },
				jr = yr
					? function(l, n) {
							return ir.leaveScope(l, n), n;
					  }
					: function(l, n) {
							return n;
					  },
				_r = (function() {
					function l(l) {
						var n,
							u = l.enableLongStackTrace,
							e = void 0 !== u && u;
						if (
							((this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new Ut(!1)),
							(this.onMicrotaskEmpty = new Ut(!1)),
							(this.onStable = new Ut(!1)),
							(this.onError = new Ut(!1)),
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
										return Sr(n), l.invokeTask(e, t, r, s);
									} finally {
										Er(n);
									}
								},
								onInvoke: function(l, u, e, t, r, s, o) {
									try {
										return Sr(n), l.invoke(e, t, r, s, o);
									} finally {
										Er(n);
									}
								},
								onHasTask: function(l, u, e, t) {
									l.hasTask(e, t),
										u === e && ('microTask' == t.change ? ((n.hasPendingMicrotasks = t.microTask), Cr(n)) : 'macroTask' == t.change && (n.hasPendingMacrotasks = t.macroTask));
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
								r = t.scheduleEventTask('NgZoneEvent: ' + e, l, kr, xr, xr);
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
			function xr() {}
			var kr = {};
			function Cr(l) {
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
			function Sr(l) {
				l._nesting++, l.isStable && ((l.isStable = !1), l.onUnstable.emit(null));
			}
			function Er(l) {
				l._nesting--, Cr(l);
			}
			var Ir,
				Pr = (function() {
					function l() {
						(this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new Ut()),
							(this.onMicrotaskEmpty = new Ut()),
							(this.onStable = new Ut()),
							(this.onError = new Ut());
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
				Or = (function() {
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
											_r.assertNotInAngularZone(),
												Dl(function() {
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
								Dl(function() {
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
				Tr = (function() {
					function l() {
						(this._applications = new Map()), Mr.addToWindow(this);
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
							return void 0 === n && (n = !0), Mr.findTestabilityInTree(this, l, n);
						}),
						s([o('design:paramtypes', [])], l)
					);
				})(),
				Mr = new ((function() {
					function l() {}
					return (
						(l.prototype.addToWindow = function(l) {}),
						(l.prototype.findTestabilityInTree = function(l, n, u) {
							return null;
						}),
						l
					);
				})())(),
				Rr = new Sl('AllowMultipleToken'),
				Ar = (function() {
					return function(l, n) {
						(this.name = l), (this.token = n);
					};
				})();
			function Nr(l, n, u) {
				void 0 === u && (u = []);
				var e = 'Platform: ' + n,
					t = new Sl(e);
				return function(n) {
					void 0 === n && (n = []);
					var r = Dr();
					if (!r || r.injector.get(Rr, !1))
						if (l) l(u.concat(n).concat({ provide: t, useValue: !0 }));
						else {
							var s = u.concat(n).concat({ provide: t, useValue: !0 });
							!(function(l) {
								if (Ir && !Ir.destroyed && !Ir.injector.get(Rr, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								Ir = l.get(Vr);
								var n = l.get(tr, null);
								n &&
									n.forEach(function(l) {
										return l();
									});
							})(he.create({ providers: s, name: e }));
						}
					return (function(l) {
						var n = Dr();
						if (!n) throw new Error('No platform exists!');
						if (!n.injector.get(l, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return n;
					})(t);
				};
			}
			function Dr() {
				return Ir && !Ir.destroyed ? Ir : null;
			}
			var Vr = (function() {
				function l(l) {
					(this._injector = l), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
				}
				return (
					(l.prototype.bootstrapModuleFactory = function(l, n) {
						var u,
							e = this,
							t = 'noop' === (u = n ? n.ngZone : void 0) ? new Pr() : ('zone.js' === u ? void 0 : u) || new _r({ enableLongStackTrace: gt() }),
							r = [{ provide: _r, useValue: t }];
						return t.run(function() {
							var n = he.create({ providers: r, parent: e.injector, name: l.moduleType.name }),
								u = l.create(n),
								s = u.injector.get(Yt, null);
							if (!s) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								u.onDestroy(function() {
									return Hr(e._modules, u);
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
										var r = ((s = u.injector.get(lr)).runInitializers(),
										s.donePromise.then(function() {
											return e._moduleDoBootstrap(u), u;
										}));
										return Jt(r)
											? r.catch(function(u) {
													throw (n.runOutsideAngular(function() {
														return l.handleError(u);
													}),
													u);
											  })
											: r;
									} catch (o) {
										throw (n.runOutsideAngular(function() {
											return l.handleError(o);
										}),
										o);
									}
									var s;
								})(s, t)
							);
						});
					}),
					(l.prototype.bootstrapModule = function(l, n) {
						var u = this;
						void 0 === n && (n = []);
						var e = Ur({}, n);
						return (function(l, n, u) {
							return l
								.get(mr)
								.createCompiler([n])
								.compileModuleAsync(u);
						})(this.injector, e, l).then(function(l) {
							return u.bootstrapModuleFactory(l, e);
						});
					}),
					(l.prototype._moduleDoBootstrap = function(l) {
						var n = l.injector.get(Lr);
						if (l._bootstrapComponents.length > 0)
							l._bootstrapComponents.forEach(function(l) {
								return n.bootstrap(l);
							});
						else {
							if (!l.instance.ngDoBootstrap)
								throw new Error(
									'The module ' +
										Ul(l.instance.constructor) +
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
			function Ur(l, n) {
				return Array.isArray(n) ? n.reduce(Ur, l) : r({}, l, n);
			}
			var Lr = (function() {
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
						(this._enforceNoNewChanges = gt()),
						this._zone.onMicrotaskEmpty.subscribe({
							next: function() {
								s._zone.run(function() {
									s.tick();
								});
							}
						});
					var o = new R(function(l) {
							(s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks),
								s._zone.runOutsideAngular(function() {
									l.next(s._stable), l.complete();
								});
						}),
						a = new R(function(l) {
							var n;
							s._zone.runOutsideAngular(function() {
								n = s._zone.onStable.subscribe(function() {
									_r.assertNotInAngularZone(),
										Dl(function() {
											s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || ((s._stable = !0), l.next(!0));
										});
								});
							});
							var u = s._zone.onUnstable.subscribe(function() {
								_r.assertInAngularZone(),
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
							F(t) ? ((e = l.pop()), l.length > 1 && 'number' == typeof l[l.length - 1] && (u = l.pop())) : 'number' == typeof t && (u = l.pop()),
							null === e && 1 === l.length && l[0] instanceof R ? l[0] : il(u)(el(l, e))
						);
					})(
						o,
						a.pipe(function(l) {
							return cl()(
								((n = ml),
								function(l) {
									var u;
									u =
										'function' == typeof n
											? n
											: function() {
													return n;
											  };
									var e = Object.create(l, fl);
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
						(u = l instanceof Le ? l : this._componentFactoryResolver.resolveComponentFactory(l)), this.componentTypes.push(u.componentType);
						var t = u instanceof Qe ? null : this._injector.get(Ze),
							r = u.create(he.NULL, [], n || u.selector, t);
						r.onDestroy(function() {
							e._unloadComponent(r);
						});
						var s = r.injector.get(Or, null);
						return (
							s && r.injector.get(Tr).registerApplication(r.location.nativeElement, s),
							this._loadComponent(r),
							gt() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
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
							(this._runningTick = !1), jr(u);
						}
					}),
					(l.prototype.attachView = function(l) {
						var n = l;
						this._views.push(n), n.attachToAppRef(this);
					}),
					(l.prototype.detachView = function(l) {
						var n = l;
						Hr(this._views, n), n.detachFromAppRef();
					}),
					(l.prototype._loadComponent = function(l) {
						this.attachView(l.hostView),
							this.tick(),
							this.components.push(l),
							this._injector
								.get(sr, [])
								.concat(this._bootstrapListeners)
								.forEach(function(n) {
									return n(l);
								});
					}),
					(l.prototype._unloadComponent = function(l) {
						this.detachView(l.hostView), Hr(this.components, l);
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
					(l._tickScope = wr('ApplicationRef#tick()')),
					l
				);
			})();
			function Hr(l, n) {
				var u = l.indexOf(n);
				u > -1 && l.splice(u, 1);
			}
			var Fr = (function() {
					function l() {
						(this.dirty = !0), (this._results = []), (this.changes = new Ut()), (this.length = 0);
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
						(l.prototype[Nl()] = function() {
							return this._results[Nl()]();
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
				zr = (function() {
					return function() {};
				})(),
				Br = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				qr = (function() {
					function l(l, n) {
						(this._compiler = l), (this._config = n || Br);
					}
					return (
						(l.prototype.load = function(l) {
							return this._compiler instanceof gr ? this.loadFactory(l) : this.loadAndCompile(l);
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
										return Gr(l, t, r);
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
										return Gr(l, e, t);
									})
							);
						}),
						l
					);
				})();
			function Gr(l, n, u) {
				if (!l) throw new Error("Cannot find '" + u + "' in '" + n + "'");
				return l;
			}
			var Qr,
				Zr = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Wr(l, Ye);
						}),
						l
					);
				})(),
				Wr = se,
				Kr = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Yr();
						}),
						l
					);
				})(),
				Yr = function() {
					for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				},
				Jr = (t(function() {
					return (null !== Qr && Qr.apply(this, arguments)) || this;
				}, (Qr = Kr)),
				(function() {
					return function(l, n) {
						(this.name = l), (this.callback = n);
					};
				})()),
				$r = (function() {
					function l(l, n, u) {
						(this.listeners = []), (this.parent = null), (this._debugContext = u), (this.nativeNode = l), n && n instanceof Xr && n.addChild(this);
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
				Xr = (function(l) {
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
										n instanceof Xr && (u(n) && e.push(n), l(n, u, e));
									});
								})(this, l, n),
								n
							);
						}),
						(n.prototype.queryAllNodes = function(l) {
							var n = [];
							return (
								(function l(n, u, e) {
									n instanceof Xr &&
										n.childNodes.forEach(function(n) {
											u(n) && e.push(n), n instanceof Xr && l(n, u, e);
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
				})($r),
				ls = new Map(),
				ns = function(l) {
					return ls.get(l) || null;
				};
			function us(l) {
				ls.set(l.nativeNode, l);
			}
			var es = (function() {
					function l() {}
					return (
						(l.prototype.supports = function(l) {
							return Iu(l);
						}),
						(l.prototype.create = function(l) {
							return new rs(l);
						}),
						l
					);
				})(),
				ts = function(l, n) {
					return n;
				},
				rs = (function() {
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
							(this._trackByFn = l || ts);
					}
					return (
						(l.prototype.forEachItem = function(l) {
							var n;
							for (n = this._itHead; null !== n; n = n._next) l(n);
						}),
						(l.prototype.forEachOperation = function(l) {
							for (var n = this._itHead, u = this._removalsHead, e = 0, t = null; n || u; ) {
								var r = !u || (n && n.currentIndex < is(u, e, t)) ? n : u,
									s = is(r, e, t),
									o = r.currentIndex;
								if (r === u) e--, (u = u._nextRemoved);
								else if (((n = n._next), null == r.previousIndex)) e++;
								else {
									t || (t = []);
									var a = s - e,
										i = o - e;
									if (a != i) {
										for (var c = 0; c < a; c++) {
											var p = c < t.length ? t[c] : (t[c] = 0),
												h = p + c;
											i <= h && h < a && (t[c] = p + 1);
										}
										t[r.previousIndex] = i - a;
									}
								}
								s !== o && l(r, s, o);
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
							if ((null == l && (l = []), !Iu(l))) throw new Error("Error trying to diff '" + Ul(l) + "'. Only arrays and iterables are allowed");
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
								for (var o = 0; o < this.length; o++)
									(t = this._trackByFn(o, (e = l[o]))),
										null !== r && Vl(r.trackById, t)
											? (s && (r = this._verifyReinsertion(r, e, t, o)), Vl(r.item, e) || this._addIdentityChange(r, e))
											: ((r = this._mismatch(r, e, t, o)), (s = !0)),
										(r = r._next);
							} else
								(u = 0),
									(function(l, n) {
										if (Array.isArray(l)) for (var u = 0; u < l.length; u++) n(l[u]);
										else for (var e = l[Nl()](), t = void 0; !(t = e.next()).done; ) n(t.value);
									})(l, function(l) {
										(t = n._trackByFn(u, l)),
											null !== r && Vl(r.trackById, t)
												? (s && (r = n._verifyReinsertion(r, l, t, u)), Vl(r.item, l) || n._addIdentityChange(r, l))
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
									? (Vl(l.item, n) || this._addIdentityChange(l, n), this._moveAfter(l, t, e))
									: null !== (l = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(u, null))
									? (Vl(l.item, n) || this._addIdentityChange(l, n), this._reinsertAfter(l, t, e))
									: (l = this._addAfter(new ss(n, u), t, e)),
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
								null === this._linkedRecords && (this._linkedRecords = new as()),
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
								null === this._unlinkedRecords && (this._unlinkedRecords = new as()),
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
				ss = (function() {
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
				os = (function() {
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
							for (u = this._head; null !== u; u = u._nextDup) if ((null === n || n <= u.currentIndex) && Vl(u.trackById, l)) return u;
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
				as = (function() {
					function l() {
						this.map = new Map();
					}
					return (
						(l.prototype.put = function(l) {
							var n = l.trackById,
								u = this.map.get(n);
							u || ((u = new os()), this.map.set(n, u)), u.add(l);
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
			function is(l, n, u) {
				var e = l.previousIndex;
				if (null === e) return e;
				var t = 0;
				return u && e < u.length && (t = u[e]), e + n + t;
			}
			var cs = (function() {
					function l() {}
					return (
						(l.prototype.supports = function(l) {
							return l instanceof Map || Pu(l);
						}),
						(l.prototype.create = function() {
							return new ps();
						}),
						l
					);
				})(),
				ps = (function() {
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
								if (!(l instanceof Map || Pu(l))) throw new Error("Error trying to diff '" + Ul(l) + "'. Only maps and objects are allowed");
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
							var r = new hs(l);
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
							Vl(n, l.currentValue) || ((l.previousValue = l.currentValue), (l.currentValue = n), this._addToChanges(l));
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
				hs = (function() {
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
				ds = (function() {
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
								deps: [[l, new Nn(), new Rn()]]
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
						(l.ngInjectableDef = xl({
							providedIn: 'root',
							factory: function() {
								return new l([new es()]);
							}
						})),
						l
					);
				})(),
				fs = (function() {
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
								deps: [[l, new Nn(), new Rn()]]
							};
						}),
						(l.prototype.find = function(l) {
							var n = this.factories.find(function(n) {
								return n.supports(l);
							});
							if (n) return n;
							throw new Error("Cannot find a differ supporting object '" + l + "'");
						}),
						(l.ngInjectableDef = xl({
							providedIn: 'root',
							factory: function() {
								return new l([new cs()]);
							}
						})),
						l
					);
				})(),
				gs = [new cs()],
				ms = new ds([new es()]),
				bs = new fs(gs),
				ys = Nr(null, 'core', [{ provide: rr, useValue: 'unknown' }, { provide: Vr, deps: [he] }, { provide: Tr, deps: [] }, { provide: or, deps: [] }]),
				vs = new Sl('LocaleId');
			function ws() {
				return ms;
			}
			function js() {
				return bs;
			}
			function _s(l) {
				return l || 'en-US';
			}
			var xs = (function() {
				return function(l) {};
			})();
			function ks(l, n, u) {
				var e = l.state,
					t = 1792 & e;
				return t === n ? ((l.state = (-1793 & e) | u), (l.initIndex = -1), !0) : t === u;
			}
			function Cs(l, n, u) {
				return (1792 & l.state) === n && l.initIndex <= u && ((l.initIndex = u + 1), !0);
			}
			function Ss(l, n) {
				return l.nodes[n];
			}
			function Es(l, n) {
				return l.nodes[n];
			}
			function Is(l, n) {
				return l.nodes[n];
			}
			function Ps(l, n) {
				return l.nodes[n];
			}
			function Os(l, n) {
				return l.nodes[n];
			}
			var Ts = {
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
			function Ms(l, n, u, e) {
				var t = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + n + "'. Current value: '" + u + "'.";
				return (
					e && (t += ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
					(function(l, n) {
						var u = new Error(l);
						return Rs(u, n), u;
					})(t, l)
				);
			}
			function Rs(l, n) {
				(l[qt] = n), (l[Qt] = n.logError.bind(n));
			}
			function As(l) {
				return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + l);
			}
			var Ns = function() {},
				Ds = new Map();
			function Vs(l) {
				var n = Ds.get(l);
				return n || ((n = Ul(l) + '_' + Ds.size), Ds.set(l, n)), n;
			}
			var Us = '$$undefined',
				Ls = '$$empty';
			function Hs(l) {
				return { id: Us, styles: l.styles, encapsulation: l.encapsulation, data: l.data };
			}
			var Fs = 0;
			function zs(l, n, u, e) {
				return !(!(2 & l.state) && Vl(l.oldValues[n.bindingIndex + u], e));
			}
			function Bs(l, n, u, e) {
				return !!zs(l, n, u, e) && ((l.oldValues[n.bindingIndex + u] = e), !0);
			}
			function qs(l, n, u, e) {
				var t = l.oldValues[n.bindingIndex + u];
				if (1 & l.state || !Cu(t, e)) {
					var r = n.bindings[u].name;
					throw Ms(Ts.createDebugContext(l, n.nodeIndex), r + ': ' + t, r + ': ' + e, 0 != (1 & l.state));
				}
			}
			function Gs(l) {
				for (var n = l; n; ) 2 & n.def.flags && (n.state |= 8), (n = n.viewContainerParent || n.parent);
			}
			function Qs(l, n) {
				for (var u = l; u && u !== n; ) (u.state |= 64), (u = u.viewContainerParent || u.parent);
			}
			function Zs(l, n, u, e) {
				try {
					return Gs(33554432 & l.def.nodes[n].flags ? Es(l, n).componentView : l), Ts.handleEvent(l, n, u, e);
				} catch (t) {
					l.root.errorHandler.handleError(t);
				}
			}
			function Ws(l) {
				return l.parent ? Es(l.parent, l.parentNodeDef.nodeIndex) : null;
			}
			function Ks(l) {
				return l.parent ? l.parentNodeDef.parent : null;
			}
			function Ys(l, n) {
				switch (201347067 & n.flags) {
					case 1:
						return Es(l, n.nodeIndex).renderElement;
					case 2:
						return Ss(l, n.nodeIndex).renderText;
				}
			}
			function Js(l) {
				return !!l.parent && !!(32768 & l.parentNodeDef.flags);
			}
			function $s(l) {
				return !(!l.parent || 32768 & l.parentNodeDef.flags);
			}
			function Xs(l) {
				return 1 << l % 32;
			}
			function lo(l) {
				var n = {},
					u = 0,
					e = {};
				return (
					l &&
						l.forEach(function(l) {
							var t = i(l, 2),
								r = t[0],
								s = t[1];
							'number' == typeof r ? ((n[r] = s), (u |= Xs(r))) : (e[r] = s);
						}),
					{ matchedQueries: n, references: e, matchedQueryIds: u }
				);
			}
			function no(l, n) {
				return l.map(function(l) {
					var u, e, t;
					return (
						Array.isArray(l) ? ((t = (u = i(l, 2))[0]), (e = u[1])) : ((t = 0), (e = l)),
						e && ('function' == typeof e || 'object' == typeof e) && n && Object.defineProperty(e, oe, { value: n, configurable: !0 }),
						{ flags: t, token: e, tokenKey: Vs(e) }
					);
				});
			}
			function uo(l, n, u) {
				var e = u.renderParent;
				return e
					? 0 == (1 & e.flags) || 0 == (33554432 & e.flags) || (e.element.componentRendererType && e.element.componentRendererType.encapsulation === zl.Native)
						? Es(l, u.renderParent.nodeIndex).renderElement
						: void 0
					: n;
			}
			var eo = new WeakMap();
			function to(l) {
				var n = eo.get(l);
				return (
					n ||
						(((n = l(function() {
							return Ns;
						})).factory = l),
						eo.set(l, n)),
					n
				);
			}
			function ro(l, n, u, e, t) {
				3 === n && (u = l.renderer.parentNode(Ys(l, l.def.lastRenderRootNode))), so(l, n, 0, l.def.nodes.length - 1, u, e, t);
			}
			function so(l, n, u, e, t, r, s) {
				for (var o = u; o <= e; o++) {
					var a = l.def.nodes[o];
					11 & a.flags && ao(l, a, n, t, r, s), (o += a.childCount);
				}
			}
			function oo(l, n, u, e, t, r) {
				for (var s = l; s && !Js(s); ) s = s.parent;
				for (var o = s.parent, a = Ks(s), i = a.nodeIndex + a.childCount, c = a.nodeIndex + 1; c <= i; c++) {
					var p = o.def.nodes[c];
					p.ngContentIndex === n && ao(o, p, u, e, t, r), (c += p.childCount);
				}
				if (!o.parent) {
					var h = l.root.projectableNodes[n];
					if (h) for (c = 0; c < h.length; c++) io(l, h[c], u, e, t, r);
				}
			}
			function ao(l, n, u, e, t, r) {
				if (8 & n.flags) oo(l, n.ngContent.index, u, e, t, r);
				else {
					var s = Ys(l, n);
					if (
						(3 === u && 33554432 & n.flags && 48 & n.bindingFlags
							? (16 & n.bindingFlags && io(l, s, u, e, t, r), 32 & n.bindingFlags && io(Es(l, n.nodeIndex).componentView, s, u, e, t, r))
							: io(l, s, u, e, t, r),
						16777216 & n.flags)
					)
						for (var o = Es(l, n.nodeIndex).viewContainer._embeddedViews, a = 0; a < o.length; a++) ro(o[a], u, e, t, r);
					1 & n.flags && !n.element.name && so(l, u, n.nodeIndex + 1, n.nodeIndex + n.childCount, e, t, r);
				}
			}
			function io(l, n, u, e, t, r) {
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
			var co = /^:([^:]+):(.+)$/;
			function po(l) {
				if (':' === l[0]) {
					var n = l.match(co);
					return [n[1], n[2]];
				}
				return ['', l];
			}
			function ho(l) {
				for (var n = 0, u = 0; u < l.length; u++) n |= l[u].flags;
				return n;
			}
			function fo(l, n, u, e, t, r) {
				l |= 1;
				var s = lo(n);
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
						template: r ? to(r) : null,
						componentProvider: null,
						componentView: null,
						componentRendererType: null,
						publicProviders: null,
						allProviders: null,
						handleEvent: t || Ns
					},
					provider: null,
					text: null,
					query: null,
					ngContent: null
				};
			}
			function go(l, n, u, e, t, r, s, o, a, c, p, h) {
				var d;
				void 0 === s && (s = []), c || (c = Ns);
				var f = lo(u),
					g = f.matchedQueries,
					m = f.references,
					b = f.matchedQueryIds,
					y = null,
					v = null;
				r && ((y = (d = i(po(r), 2))[0]), (v = d[1])), (o = o || []);
				for (var w = new Array(o.length), j = 0; j < o.length; j++) {
					var _ = i(o[j], 3),
						x = _[0],
						k = _[2],
						C = i(po(_[1]), 2),
						S = C[0],
						E = C[1],
						I = void 0,
						P = void 0;
					switch (15 & x) {
						case 4:
							P = k;
							break;
						case 1:
						case 8:
							I = k;
					}
					w[j] = { flags: x, ns: S, name: E, nonMinifiedName: E, securityContext: I, suffix: P };
				}
				a = a || [];
				var O = new Array(a.length);
				for (j = 0; j < a.length; j++) {
					var T = i(a[j], 2);
					O[j] = { type: 0, target: T[0], eventName: T[1], propName: null };
				}
				var M = (s = s || []).map(function(l) {
					var n = i(l, 2),
						u = n[1],
						e = i(po(n[0]), 2);
					return [e[0], e[1], u];
				});
				return (
					(h = (function(l) {
						if (l && l.id === Us) {
							var n = (null != l.encapsulation && l.encapsulation !== zl.None) || l.styles.length || Object.keys(l.data).length;
							l.id = n ? 'c' + Fs++ : Ls;
						}
						return l && l.id === Ls && (l = null), l || null;
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
						bindingFlags: ho(w),
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
							handleEvent: c || Ns
						},
						provider: null,
						text: null,
						query: null,
						ngContent: null
					}
				);
			}
			function mo(l, n, u) {
				var e,
					t = u.element,
					r = l.root.selectorOrNode,
					s = l.renderer;
				if (l.parent || !r) {
					e = t.name ? s.createElement(t.name, t.ns) : s.createComment('');
					var o = uo(l, n, u);
					o && s.appendChild(o, e);
				} else e = s.selectRootElement(r, !!t.componentRendererType && t.componentRendererType.encapsulation === zl.ShadowDom);
				if (t.attrs)
					for (var a = 0; a < t.attrs.length; a++) {
						var c = i(t.attrs[a], 3);
						s.setAttribute(e, c[1], c[2], c[0]);
					}
				return e;
			}
			function bo(l, n, u, e) {
				for (var t = 0; t < u.outputs.length; t++) {
					var r = u.outputs[t],
						s = yo(l, u.nodeIndex, ((p = r.eventName), (c = r.target) ? c + ':' + p : p)),
						o = r.target,
						a = l;
					'component' === r.target && ((o = null), (a = n));
					var i = a.renderer.listen(o || e, r.eventName, s);
					l.disposables[u.outputIndex + t] = i;
				}
				var c, p;
			}
			function yo(l, n, u) {
				return function(e) {
					return Zs(l, n, u, e);
				};
			}
			function vo(l, n, u, e) {
				if (!Bs(l, n, u, e)) return !1;
				var t = n.bindings[u],
					r = Es(l, n.nodeIndex),
					s = r.renderElement,
					o = t.name;
				switch (15 & t.flags) {
					case 1:
						!(function(l, n, u, e, t, r) {
							var s = n.securityContext,
								o = s ? l.root.sanitizer.sanitize(s, r) : r;
							o = null != o ? o.toString() : null;
							var a = l.renderer;
							null != r ? a.setAttribute(u, t, o, e) : a.removeAttribute(u, t, e);
						})(l, t, s, t.ns, o, e);
						break;
					case 2:
						!(function(l, n, u, e) {
							var t = l.renderer;
							e ? t.addClass(n, u) : t.removeClass(n, u);
						})(l, s, o, e);
						break;
					case 4:
						!(function(l, n, u, e, t) {
							var r = l.root.sanitizer.sanitize(et.STYLE, t);
							if (null != r) {
								r = r.toString();
								var s = n.suffix;
								null != s && (r += s);
							} else r = null;
							var o = l.renderer;
							null != r ? o.setStyle(u, e, r) : o.removeStyle(u, e);
						})(l, t, s, o, e);
						break;
					case 8:
						!(function(l, n, u, e, t) {
							var r = n.securityContext,
								s = r ? l.root.sanitizer.sanitize(r, t) : t;
							l.renderer.setProperty(u, e, s);
						})(33554432 & n.flags && 32 & t.flags ? r.componentView : l, t, s, o, e);
				}
				return !0;
			}
			var wo = new Object(),
				jo = Vs(he),
				_o = Vs(ce),
				xo = Vs(Ze);
			function ko(l, n, u, e) {
				return (u = Fl(u)), { index: -1, deps: no(e, Ul(n)), flags: l, token: n, value: u };
			}
			function Co(l, n, u) {
				void 0 === u && (u = he.THROW_IF_NOT_FOUND);
				var e,
					t,
					r = Un(l);
				try {
					if (8 & n.flags) return n.token;
					if ((2 & n.flags && (u = null), 1 & n.flags)) return l._parent.get(n.token, u);
					var s = n.tokenKey;
					switch (s) {
						case jo:
						case _o:
						case xo:
							return l;
					}
					var o,
						a = l._def.providersByKey[s];
					if (a) {
						var i = l._providers[a.index];
						return void 0 === i && (i = l._providers[a.index] = So(l, a)), i === wo ? void 0 : i;
					}
					if (
						(o = kl(n.token)) &&
						((e = l),
						null != (t = o).providedIn &&
							((function(l, n) {
								return l._def.modules.indexOf(t.providedIn) > -1;
							})(e) ||
								('root' === t.providedIn && e._def.isRoot)))
					) {
						var c = l._providers.length;
						return (
							(l._def.providersByKey[n.tokenKey] = { flags: 5120, value: o.factory, deps: [], index: c, token: n.token }),
							(l._providers[c] = wo),
							(l._providers[c] = So(l, l._def.providersByKey[n.tokenKey]))
						);
					}
					return 4 & n.flags ? u : l._parent.get(n.token, u);
				} finally {
					Un(r);
				}
			}
			function So(l, n) {
				var u;
				switch (201347067 & n.flags) {
					case 512:
						u = (function(l, n, u) {
							var e = u.length;
							switch (e) {
								case 0:
									return new n();
								case 1:
									return new n(Co(l, u[0]));
								case 2:
									return new n(Co(l, u[0]), Co(l, u[1]));
								case 3:
									return new n(Co(l, u[0]), Co(l, u[1]), Co(l, u[2]));
								default:
									for (var t = new Array(e), r = 0; r < e; r++) t[r] = Co(l, u[r]);
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
									return n(Co(l, u[0]));
								case 2:
									return n(Co(l, u[0]), Co(l, u[1]));
								case 3:
									return n(Co(l, u[0]), Co(l, u[1]), Co(l, u[2]));
								default:
									for (var t = Array(e), r = 0; r < e; r++) t[r] = Co(l, u[r]);
									return n.apply(void 0, c(t));
							}
						})(l, n.value, n.deps);
						break;
					case 2048:
						u = Co(l, n.deps[0]);
						break;
					case 256:
						u = n.value;
				}
				return u === wo || null == u || 'object' != typeof u || 131072 & n.flags || 'function' != typeof u.ngOnDestroy || (n.flags |= 131072), void 0 === u ? wo : u;
			}
			function Eo(l, n) {
				var u = l.viewContainer._embeddedViews;
				if (((null == n || n >= u.length) && (n = u.length - 1), n < 0)) return null;
				var e = u[n];
				return (e.viewContainerParent = null), To(u, n), Ts.dirtyParentQueries(e), Po(e), e;
			}
			function Io(l, n, u) {
				var e = n ? Ys(n, n.def.lastRenderRootNode) : l.renderElement,
					t = u.renderer.parentNode(e),
					r = u.renderer.nextSibling(e);
				ro(u, 2, t, r, void 0);
			}
			function Po(l) {
				ro(l, 3, null, null, void 0);
			}
			function Oo(l, n, u) {
				n >= l.length ? l.push(u) : l.splice(n, 0, u);
			}
			function To(l, n) {
				n >= l.length - 1 ? l.pop() : l.splice(n, 1);
			}
			var Mo = new Object();
			function Ro(l, n, u, e, t, r) {
				return new Ao(l, n, u, e, t, r);
			}
			var Ao = (function(l) {
					function n(n, u, e, t, r, s) {
						var o = l.call(this) || this;
						return (o.selector = n), (o.componentType = u), (o._inputs = t), (o._outputs = r), (o.ngContentSelectors = s), (o.viewDefFactory = e), o;
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
							var t = to(this.viewDefFactory),
								r = t.nodes[0].element.componentProvider.nodeIndex,
								s = Ts.createRootView(l, n || [], u, t, e, Mo),
								o = Is(s, r).instance;
							return u && s.renderer.setAttribute(Es(s, 0).renderElement, 'ng-version', rt.full), new No(s, new Lo(s), o);
						}),
						n
					);
				})(Le),
				No = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t._view = n), (t._viewRef = u), (t._component = e), (t._elDef = t._view.def.nodes[0]), (t.hostView = u), (t.changeDetectorRef = u), (t.instance = e), t;
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'location', {
							get: function() {
								return new Ye(Es(this._view, this._elDef.nodeIndex).renderElement);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'injector', {
							get: function() {
								return new Bo(this._view, this._elDef);
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
				})(Ue);
			function Do(l, n, u) {
				return new Vo(l, n, u);
			}
			var Vo = (function() {
				function l(l, n, u) {
					(this._view = l), (this._elDef = n), (this._data = u), (this._embeddedViews = []);
				}
				return (
					Object.defineProperty(l.prototype, 'element', {
						get: function() {
							return new Ye(this._data.renderElement);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return new Bo(this._view, this._elDef);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'parentInjector', {
						get: function() {
							for (var l = this._view, n = this._elDef.parent; !n && l; ) (n = Ks(l)), (l = l.parent);
							return l ? new Bo(l, n) : new Bo(this._view, null);
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.clear = function() {
						for (var l = this._embeddedViews.length - 1; l >= 0; l--) {
							var n = Eo(this._data, l);
							Ts.destroyView(n);
						}
					}),
					(l.prototype.get = function(l) {
						var n = this._embeddedViews[l];
						if (n) {
							var u = new Lo(n);
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
						t || l instanceof Qe || (t = r.get(Ze));
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
							Oo(r, e, t),
							(function(l, n) {
								var u = Ws(n);
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
							Ts.dirtyParentQueries(t),
							Io(u, e > 0 ? r[e - 1] : null, t),
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
							o = this._embeddedViews.indexOf(l._view);
						return (
							(t = n),
							(s = (r = (u = this._data).viewContainer._embeddedViews)[(e = o)]),
							To(r, e),
							null == t && (t = r.length),
							Oo(r, t, s),
							Ts.dirtyParentQueries(s),
							Po(s),
							Io(u, t > 0 ? r[t - 1] : null, s),
							l
						);
					}),
					(l.prototype.indexOf = function(l) {
						return this._embeddedViews.indexOf(l._view);
					}),
					(l.prototype.remove = function(l) {
						var n = Eo(this._data, l);
						n && Ts.destroyView(n);
					}),
					(l.prototype.detach = function(l) {
						var n = Eo(this._data, l);
						return n ? new Lo(n) : null;
					}),
					l
				);
			})();
			function Uo(l) {
				return new Lo(l);
			}
			var Lo = (function() {
				function l(l) {
					(this._view = l), (this._viewContainerRef = null), (this._appRef = null);
				}
				return (
					Object.defineProperty(l.prototype, 'rootNodes', {
						get: function() {
							return ro(this._view, 0, void 0, void 0, (l = [])), l;
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
						Gs(this._view);
					}),
					(l.prototype.detach = function() {
						this._view.state &= -5;
					}),
					(l.prototype.detectChanges = function() {
						var l = this._view.root.rendererFactory;
						l.begin && l.begin();
						try {
							Ts.checkAndUpdateView(this._view);
						} finally {
							l.end && l.end();
						}
					}),
					(l.prototype.checkNoChanges = function() {
						Ts.checkNoChangesView(this._view);
					}),
					(l.prototype.reattach = function() {
						this._view.state |= 4;
					}),
					(l.prototype.onDestroy = function(l) {
						this._view.disposables || (this._view.disposables = []), this._view.disposables.push(l);
					}),
					(l.prototype.destroy = function() {
						this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Ts.destroyView(this._view);
					}),
					(l.prototype.detachFromAppRef = function() {
						(this._appRef = null), Po(this._view), Ts.dirtyParentQueries(this._view);
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
			function Ho(l, n) {
				return new Fo(l, n);
			}
			var Fo = (function(l) {
				function n(n, u) {
					var e = l.call(this) || this;
					return (e._parentView = n), (e._def = u), e;
				}
				return (
					t(n, l),
					(n.prototype.createEmbeddedView = function(l) {
						return new Lo(Ts.createEmbeddedView(this._parentView, this._def, this._def.element.template, l));
					}),
					Object.defineProperty(n.prototype, 'elementRef', {
						get: function() {
							return new Ye(Es(this._parentView, this._def.nodeIndex).renderElement);
						},
						enumerable: !0,
						configurable: !0
					}),
					n
				);
			})(Lt);
			function zo(l, n) {
				return new Bo(l, n);
			}
			var Bo = (function() {
				function l(l, n) {
					(this.view = l), (this.elDef = n);
				}
				return (
					(l.prototype.get = function(l, n) {
						return (
							void 0 === n && (n = he.THROW_IF_NOT_FOUND),
							Ts.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: l, tokenKey: Vs(l) }, n)
						);
					}),
					l
				);
			})();
			function qo(l, n) {
				var u = l.def.nodes[n];
				if (1 & u.flags) {
					var e = Es(l, u.nodeIndex);
					return u.element.template ? e.template : e.renderElement;
				}
				if (2 & u.flags) return Ss(l, u.nodeIndex).renderText;
				if (20240 & u.flags) return Is(l, u.nodeIndex).instance;
				throw new Error('Illegal state: read nodeValue for node index ' + n);
			}
			function Go(l) {
				return new Qo(l.renderer);
			}
			var Qo = (function() {
				function l(l) {
					this.delegate = l;
				}
				return (
					(l.prototype.selectRootElement = function(l) {
						return this.delegate.selectRootElement(l);
					}),
					(l.prototype.createElement = function(l, n) {
						var u = i(po(n), 2),
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
						var e = i(po(n), 2),
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
			function Zo(l, n, u, e) {
				return new Wo(l, n, u, e);
			}
			var Wo = (function() {
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
									4096 & t.flags || (void 0 === u[e] && (u[e] = So(l, t)));
								}
							})(this);
					}
					return (
						(l.prototype.get = function(l, n, u) {
							void 0 === n && (n = he.THROW_IF_NOT_FOUND), void 0 === u && (u = Dn.Default);
							var e = 0;
							return u & Dn.SkipSelf ? (e |= 1) : u & Dn.Self && (e |= 4), Co(this, { token: l, tokenKey: Vs(l), flags: e }, n);
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
								return this.get(qe);
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.destroy = function() {
							if (this._destroyed) throw new Error('The ng module ' + Ul(this.instance.constructor) + ' has already been destroyed.');
							(this._destroyed = !0),
								(function(l, n) {
									for (var u = l._def, e = new Set(), t = 0; t < u.providers.length; t++)
										if (131072 & u.providers[t].flags) {
											var r = l._providers[t];
											if (r && r !== wo) {
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
				Ko = Vs($e),
				Yo = Vs(nt),
				Jo = Vs(Ye),
				$o = Vs(Zr),
				Xo = Vs(Lt),
				la = Vs(Kr),
				na = Vs(he),
				ua = Vs(ce);
			function ea(l, n, u, e, t, r, s, o) {
				var a = [];
				if (s)
					for (var c in s) {
						var p = i(s[c], 2);
						a[p[0]] = { flags: 8, name: c, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null };
					}
				var h = [];
				if (o) for (var d in o) h.push({ type: 1, propName: d, target: null, eventName: o[d] });
				return (function(l, n, u, e, t, r, s, o, a) {
					var i = lo(u),
						c = i.matchedQueries,
						p = i.references,
						h = i.matchedQueryIds;
					a || (a = []), o || (o = []), (r = Fl(r));
					var d = no(s, Ul(t));
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
						bindings: o,
						bindingFlags: ho(o),
						outputs: a,
						element: null,
						provider: { token: t, value: r, deps: d },
						text: null,
						query: null,
						ngContent: null
					};
				})(l, (n |= 16384), u, e, t, t, r, a, h);
			}
			function ta(l, n) {
				return aa(l, n);
			}
			function ra(l, n) {
				for (var u = l; u.parent && !Js(u); ) u = u.parent;
				return ia(u.parent, Ks(u), !0, n.provider.value, n.provider.deps);
			}
			function sa(l, n) {
				var u = ia(l, n.parent, (32768 & n.flags) > 0, n.provider.value, n.provider.deps);
				if (n.outputs.length)
					for (var e = 0; e < n.outputs.length; e++) {
						var t = n.outputs[e],
							r = u[t.propName];
						if (!$t(r)) throw new Error('@Output ' + t.propName + " not initialized in '" + u.constructor.name + "'.");
						var s = r.subscribe(oa(l, n.parent.nodeIndex, t.eventName));
						l.disposables[n.outputIndex + e] = s.unsubscribe.bind(s);
					}
				return u;
			}
			function oa(l, n, u) {
				return function(e) {
					return Zs(l, n, u, e);
				};
			}
			function aa(l, n) {
				var u = (8192 & n.flags) > 0,
					e = n.provider;
				switch (201347067 & n.flags) {
					case 512:
						return ia(l, n.parent, u, e.value, e.deps);
					case 1024:
						return (function(l, n, u, e, t) {
							var r = t.length;
							switch (r) {
								case 0:
									return e();
								case 1:
									return e(pa(l, n, u, t[0]));
								case 2:
									return e(pa(l, n, u, t[0]), pa(l, n, u, t[1]));
								case 3:
									return e(pa(l, n, u, t[0]), pa(l, n, u, t[1]), pa(l, n, u, t[2]));
								default:
									for (var s = Array(r), o = 0; o < r; o++) s[o] = pa(l, n, u, t[o]);
									return e.apply(void 0, c(s));
							}
						})(l, n.parent, u, e.value, e.deps);
					case 2048:
						return pa(l, n.parent, u, e.deps[0]);
					case 256:
						return e.value;
				}
			}
			function ia(l, n, u, e, t) {
				var r = t.length;
				switch (r) {
					case 0:
						return new e();
					case 1:
						return new e(pa(l, n, u, t[0]));
					case 2:
						return new e(pa(l, n, u, t[0]), pa(l, n, u, t[1]));
					case 3:
						return new e(pa(l, n, u, t[0]), pa(l, n, u, t[1]), pa(l, n, u, t[2]));
					default:
						for (var s = new Array(r), o = 0; o < r; o++) s[o] = pa(l, n, u, t[o]);
						return new (e.bind.apply(e, c([void 0], s)))();
				}
			}
			var ca = {};
			function pa(l, n, u, e, t) {
				if ((void 0 === t && (t = he.THROW_IF_NOT_FOUND), 8 & e.flags)) return e.token;
				var r = l;
				2 & e.flags && (t = null);
				var s = e.tokenKey;
				s === la && (u = !(!n || !n.element.componentView)), n && 1 & e.flags && ((u = !1), (n = n.parent));
				for (var o = l; o; ) {
					if (n)
						switch (s) {
							case Ko:
								return Go(ha(o, n, u));
							case Yo:
								return ha(o, n, u).renderer;
							case Jo:
								return new Ye(Es(o, n.nodeIndex).renderElement);
							case $o:
								return Es(o, n.nodeIndex).viewContainer;
							case Xo:
								if (n.element.template) return Es(o, n.nodeIndex).template;
								break;
							case la:
								return Uo(ha(o, n, u));
							case na:
							case ua:
								return zo(o, n);
							default:
								var a = (u ? n.element.allProviders : n.element.publicProviders)[s];
								if (a) {
									var i = Is(o, a.nodeIndex);
									return i || ((i = { instance: aa(o, a) }), (o.nodes[a.nodeIndex] = i)), i.instance;
								}
						}
					(u = Js(o)), (n = Ks(o)), (o = o.parent), 4 & e.flags && (o = null);
				}
				var c = r.root.injector.get(e.token, ca);
				return c !== ca || t === ca ? c : r.root.ngModule.injector.get(e.token, t);
			}
			function ha(l, n, u) {
				var e;
				if (u) e = Es(l, n.nodeIndex).componentView;
				else for (e = l; e.parent && !Js(e); ) e = e.parent;
				return e;
			}
			function da(l, n, u, e, t, r) {
				if (32768 & u.flags) {
					var s = Es(l, u.parent.nodeIndex).componentView;
					2 & s.def.flags && (s.state |= 8);
				}
				if (((n.instance[u.bindings[e].name] = t), 524288 & u.flags)) {
					r = r || {};
					var o = Su.unwrap(l.oldValues[u.bindingIndex + e]);
					r[u.bindings[e].nonMinifiedName] = new Eu(o, t, 0 != (2 & l.state));
				}
				return (l.oldValues[u.bindingIndex + e] = t), r;
			}
			function fa(l, n) {
				if (l.def.nodeFlags & n)
					for (var u = l.def.nodes, e = 0, t = 0; t < u.length; t++) {
						var r = u[t],
							s = r.parent;
						for (!s && r.flags & n && ma(l, t, r.flags & n, e++), 0 == (r.childFlags & n) && (t += r.childCount); s && 1 & s.flags && t === s.nodeIndex + s.childCount; )
							s.directChildFlags & n && (e = ga(l, s, n, e)), (s = s.parent);
					}
			}
			function ga(l, n, u, e) {
				for (var t = n.nodeIndex + 1; t <= n.nodeIndex + n.childCount; t++) {
					var r = l.def.nodes[t];
					r.flags & u && ma(l, t, r.flags & u, e++), (t += r.childCount);
				}
				return e;
			}
			function ma(l, n, u, e) {
				var t = Is(l, n);
				if (t) {
					var r = t.instance;
					r &&
						(Ts.setCurrentNode(l, n),
						1048576 & u && Cs(l, 512, e) && r.ngAfterContentInit(),
						2097152 & u && r.ngAfterContentChecked(),
						4194304 & u && Cs(l, 768, e) && r.ngAfterViewInit(),
						8388608 & u && r.ngAfterViewChecked(),
						131072 & u && r.ngOnDestroy());
				}
			}
			function ba(l, n, u) {
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
					query: { id: n, filterId: Xs(n), bindings: e },
					ngContent: null
				};
			}
			function ya(l) {
				for (var n = l.def.nodeMatchedQueries; l.parent && $s(l); ) {
					var u = l.parentNodeDef;
					l = l.parent;
					for (var e = u.nodeIndex + u.childCount, t = 0; t <= e; t++)
						67108864 & (r = l.def.nodes[t]).flags && 536870912 & r.flags && (r.query.filterId & n) === r.query.filterId && Os(l, t).setDirty(),
							(!(1 & r.flags && t + r.childCount < u.nodeIndex) && 67108864 & r.childFlags && 536870912 & r.childFlags) || (t += r.childCount);
				}
				if (134217728 & l.def.nodeFlags)
					for (t = 0; t < l.def.nodes.length; t++) {
						var r;
						134217728 & (r = l.def.nodes[t]).flags && 536870912 & r.flags && Os(l, t).setDirty(), (t += r.childCount);
					}
			}
			function va(l, n) {
				var u = Os(l, n.nodeIndex);
				if (u.dirty) {
					var e,
						t = void 0;
					if (67108864 & n.flags) {
						var r = n.parent.parent;
						(t = wa(l, r.nodeIndex, r.nodeIndex + r.childCount, n.query, [])), (e = Is(l, n.parent.nodeIndex).instance);
					} else 134217728 & n.flags && ((t = wa(l, 0, l.def.nodes.length - 1, n.query, [])), (e = l.component));
					u.reset(t);
					for (var s = n.query.bindings, o = !1, a = 0; a < s.length; a++) {
						var i = s[a],
							c = void 0;
						switch (i.bindingType) {
							case 0:
								c = u.first;
								break;
							case 1:
								(c = u), (o = !0);
						}
						e[i.propName] = c;
					}
					o && u.notifyOnChanges();
				}
			}
			function wa(l, n, u, e, t) {
				for (var r = n; r <= u; r++) {
					var s = l.def.nodes[r],
						o = s.matchedQueries[e.id];
					if ((null != o && t.push(ja(l, s, o)), 1 & s.flags && s.element.template && (s.element.template.nodeMatchedQueries & e.filterId) === e.filterId)) {
						var a = Es(l, r);
						if (((s.childMatchedQueries & e.filterId) === e.filterId && (wa(l, r + 1, r + s.childCount, e, t), (r += s.childCount)), 16777216 & s.flags))
							for (var i = a.viewContainer._embeddedViews, c = 0; c < i.length; c++) {
								var p = i[c],
									h = Ws(p);
								h && h === a && wa(p, 0, p.def.nodes.length - 1, e, t);
							}
						var d = a.template._projectedViews;
						if (d)
							for (c = 0; c < d.length; c++) {
								var f = d[c];
								wa(f, 0, f.def.nodes.length - 1, e, t);
							}
					}
					(s.childMatchedQueries & e.filterId) !== e.filterId && (r += s.childCount);
				}
				return t;
			}
			function ja(l, n, u) {
				if (null != u)
					switch (u) {
						case 1:
							return Es(l, n.nodeIndex).renderElement;
						case 0:
							return new Ye(Es(l, n.nodeIndex).renderElement);
						case 2:
							return Es(l, n.nodeIndex).template;
						case 3:
							return Es(l, n.nodeIndex).viewContainer;
						case 4:
							return Is(l, n.nodeIndex).instance;
					}
			}
			function _a(l, n) {
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
			function xa(l, n, u) {
				var e = uo(l, n, u);
				e && oo(l, u.ngContent.index, 1, e, null, void 0);
			}
			function ka(l, n) {
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
						bindingFlags: ho(e),
						outputs: [],
						element: null,
						provider: null,
						text: null,
						query: null,
						ngContent: null
					};
				})(0, l, t);
			}
			function Ca(l, n, u) {
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
			function Sa(l, n, u) {
				var e,
					t = l.renderer;
				e = t.createText(u.text.prefix);
				var r = uo(l, n, u);
				return r && t.appendChild(r, e), { renderText: e };
			}
			function Ea(l, n) {
				return (null != l ? l.toString() : '') + n.suffix;
			}
			function Ia(l, n, u, e) {
				for (var t = 0, r = 0, s = 0, o = 0, a = 0, i = null, c = null, p = !1, h = !1, d = null, f = 0; f < n.length; f++) {
					var g = n[f];
					if (((g.nodeIndex = f), (g.parent = i), (g.bindingIndex = t), (g.outputIndex = r), (g.renderParent = c), (s |= g.flags), (a |= g.matchedQueryIds), g.element)) {
						var m = g.element;
						(m.publicProviders = i ? i.element.publicProviders : Object.create(null)),
							(m.allProviders = m.publicProviders),
							(p = !1),
							(h = !1),
							g.element.template && (a |= g.element.template.nodeMatchedQueries);
					}
					if ((Oa(i, g, n.length), (t += g.bindings.length), (r += g.outputs.length), !c && 3 & g.flags && (d = g), 20224 & g.flags)) {
						p || ((p = !0), (i.element.publicProviders = Object.create(i.element.publicProviders)), (i.element.allProviders = i.element.publicProviders));
						var b = 0 != (32768 & g.flags);
						0 == (8192 & g.flags) || b
							? (i.element.publicProviders[Vs(g.provider.token)] = g)
							: (h || ((h = !0), (i.element.allProviders = Object.create(i.element.publicProviders))), (i.element.allProviders[Vs(g.provider.token)] = g)),
							b && (i.element.componentProvider = g);
					}
					if (
						(i
							? ((i.childFlags |= g.flags),
							  (i.directChildFlags |= g.flags),
							  (i.childMatchedQueries |= g.matchedQueryIds),
							  g.element && g.element.template && (i.childMatchedQueries |= g.element.template.nodeMatchedQueries))
							: (o |= g.flags),
						g.childCount > 0)
					)
						(i = g), Pa(g) || (c = g);
					else
						for (; i && f === i.nodeIndex + i.childCount; ) {
							var y = i.parent;
							y && ((y.childFlags |= i.childFlags), (y.childMatchedQueries |= i.childMatchedQueries)), (c = (i = y) && Pa(i) ? i.renderParent : i);
						}
				}
				return {
					factory: null,
					nodeFlags: s,
					rootNodeFlags: o,
					nodeMatchedQueries: a,
					flags: l,
					nodes: n,
					updateDirectives: u || Ns,
					updateRenderer: e || Ns,
					handleEvent: function(l, u, e, t) {
						return n[u].element.handleEvent(l, e, t);
					},
					bindingCount: t,
					outputCount: r,
					lastRenderRootNode: d
				};
			}
			function Pa(l) {
				return 0 != (1 & l.flags) && null === l.element.name;
			}
			function Oa(l, n, u) {
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
			function Ta(l, n, u, e) {
				var t = Aa(l.root, l.renderer, l, n, u);
				return Na(t, l.component, e), Da(t), t;
			}
			function Ma(l, n, u) {
				var e = Aa(l, l.renderer, null, null, n);
				return Na(e, u, u), Da(e), e;
			}
			function Ra(l, n, u, e) {
				var t,
					r = n.element.componentRendererType;
				return (t = r ? l.root.rendererFactory.createRenderer(e, r) : l.root.renderer), Aa(l.root, t, l, n.element.componentProvider, u);
			}
			function Aa(l, n, u, e, t) {
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
			function Na(l, n, u) {
				(l.component = n), (l.context = u);
			}
			function Da(l) {
				var n;
				Js(l) && (n = Es(l.parent, l.parentNodeDef.parent.nodeIndex).renderElement);
				for (var u = l.def, e = l.nodes, t = 0; t < u.nodes.length; t++) {
					var r = u.nodes[t];
					Ts.setCurrentNode(l, t);
					var s = void 0;
					switch (201347067 & r.flags) {
						case 1:
							var o = mo(l, n, r),
								a = void 0;
							if (33554432 & r.flags) {
								var i = to(r.element.componentView);
								a = Ts.createComponentView(l, r, i, o);
							}
							bo(l, a, r, o),
								(s = { renderElement: o, componentView: a, viewContainer: null, template: r.element.template ? Ho(l, r) : void 0 }),
								16777216 & r.flags && (s.viewContainer = Do(l, r, s));
							break;
						case 2:
							s = Sa(l, n, r);
							break;
						case 512:
						case 1024:
						case 2048:
						case 256:
							(s = e[t]) || 4096 & r.flags || (s = { instance: ta(l, r) });
							break;
						case 16:
							s = { instance: ra(l, r) };
							break;
						case 16384:
							(s = e[t]) || (s = { instance: sa(l, r) }), 32768 & r.flags && Na(Es(l, r.parent.nodeIndex).componentView, s.instance, s.instance);
							break;
						case 32:
						case 64:
						case 128:
							s = { value: void 0 };
							break;
						case 67108864:
						case 134217728:
							s = new Fr();
							break;
						case 8:
							xa(l, n, r), (s = void 0);
					}
					e[t] = s;
				}
				Ga(l, qa.CreateViewNodes), Ka(l, 201326592, 268435456, 0);
			}
			function Va(l) {
				Ha(l), Ts.updateDirectives(l, 1), Qa(l, qa.CheckNoChanges), Ts.updateRenderer(l, 1), Ga(l, qa.CheckNoChanges), (l.state &= -97);
			}
			function Ua(l) {
				1 & l.state ? ((l.state &= -2), (l.state |= 2)) : (l.state &= -3), ks(l, 0, 256), Ha(l), Ts.updateDirectives(l, 0), Qa(l, qa.CheckAndUpdate), Ka(l, 67108864, 536870912, 0);
				var n = ks(l, 256, 512);
				fa(l, 2097152 | (n ? 1048576 : 0)),
					Ts.updateRenderer(l, 0),
					Ga(l, qa.CheckAndUpdate),
					Ka(l, 134217728, 536870912, 0),
					fa(l, 8388608 | ((n = ks(l, 512, 768)) ? 4194304 : 0)),
					2 & l.def.flags && (l.state &= -9),
					(l.state &= -97),
					ks(l, 768, 1024);
			}
			function La(l, n, u, e, t, r, s, o, a, i, p, h, d) {
				return 0 === u
					? (function(l, n, u, e, t, r, s, o, a, i, c, p) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u, e, t, r, s, o, a, i, c, p) {
										var h = n.bindings.length,
											d = !1;
										return (
											h > 0 && vo(l, n, 0, u) && (d = !0),
											h > 1 && vo(l, n, 1, e) && (d = !0),
											h > 2 && vo(l, n, 2, t) && (d = !0),
											h > 3 && vo(l, n, 3, r) && (d = !0),
											h > 4 && vo(l, n, 4, s) && (d = !0),
											h > 5 && vo(l, n, 5, o) && (d = !0),
											h > 6 && vo(l, n, 6, a) && (d = !0),
											h > 7 && vo(l, n, 7, i) && (d = !0),
											h > 8 && vo(l, n, 8, c) && (d = !0),
											h > 9 && vo(l, n, 9, p) && (d = !0),
											d
										);
									})(l, n, u, e, t, r, s, o, a, i, c, p);
								case 2:
									return (function(l, n, u, e, t, r, s, o, a, i, c, p) {
										var h = !1,
											d = n.bindings,
											f = d.length;
										if (
											(f > 0 && Bs(l, n, 0, u) && (h = !0),
											f > 1 && Bs(l, n, 1, e) && (h = !0),
											f > 2 && Bs(l, n, 2, t) && (h = !0),
											f > 3 && Bs(l, n, 3, r) && (h = !0),
											f > 4 && Bs(l, n, 4, s) && (h = !0),
											f > 5 && Bs(l, n, 5, o) && (h = !0),
											f > 6 && Bs(l, n, 6, a) && (h = !0),
											f > 7 && Bs(l, n, 7, i) && (h = !0),
											f > 8 && Bs(l, n, 8, c) && (h = !0),
											f > 9 && Bs(l, n, 9, p) && (h = !0),
											h)
										) {
											var g = n.text.prefix;
											f > 0 && (g += Ea(u, d[0])),
												f > 1 && (g += Ea(e, d[1])),
												f > 2 && (g += Ea(t, d[2])),
												f > 3 && (g += Ea(r, d[3])),
												f > 4 && (g += Ea(s, d[4])),
												f > 5 && (g += Ea(o, d[5])),
												f > 6 && (g += Ea(a, d[6])),
												f > 7 && (g += Ea(i, d[7])),
												f > 8 && (g += Ea(c, d[8])),
												f > 9 && (g += Ea(p, d[9]));
											var m = Ss(l, n.nodeIndex).renderText;
											l.renderer.setValue(m, g);
										}
										return h;
									})(l, n, u, e, t, r, s, o, a, i, c, p);
								case 16384:
									return (function(l, n, u, e, t, r, s, o, a, i, c, p) {
										var h = Is(l, n.nodeIndex),
											d = h.instance,
											f = !1,
											g = void 0,
											m = n.bindings.length;
										return (
											m > 0 && zs(l, n, 0, u) && ((f = !0), (g = da(l, h, n, 0, u, g))),
											m > 1 && zs(l, n, 1, e) && ((f = !0), (g = da(l, h, n, 1, e, g))),
											m > 2 && zs(l, n, 2, t) && ((f = !0), (g = da(l, h, n, 2, t, g))),
											m > 3 && zs(l, n, 3, r) && ((f = !0), (g = da(l, h, n, 3, r, g))),
											m > 4 && zs(l, n, 4, s) && ((f = !0), (g = da(l, h, n, 4, s, g))),
											m > 5 && zs(l, n, 5, o) && ((f = !0), (g = da(l, h, n, 5, o, g))),
											m > 6 && zs(l, n, 6, a) && ((f = !0), (g = da(l, h, n, 6, a, g))),
											m > 7 && zs(l, n, 7, i) && ((f = !0), (g = da(l, h, n, 7, i, g))),
											m > 8 && zs(l, n, 8, c) && ((f = !0), (g = da(l, h, n, 8, c, g))),
											m > 9 && zs(l, n, 9, p) && ((f = !0), (g = da(l, h, n, 9, p, g))),
											g && d.ngOnChanges(g),
											65536 & n.flags && Cs(l, 256, n.nodeIndex) && d.ngOnInit(),
											262144 & n.flags && d.ngDoCheck(),
											f
										);
									})(l, n, u, e, t, r, s, o, a, i, c, p);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u, e, t, r, s, o, a, i, c, p) {
										var h = n.bindings,
											d = !1,
											f = h.length;
										if (
											(f > 0 && Bs(l, n, 0, u) && (d = !0),
											f > 1 && Bs(l, n, 1, e) && (d = !0),
											f > 2 && Bs(l, n, 2, t) && (d = !0),
											f > 3 && Bs(l, n, 3, r) && (d = !0),
											f > 4 && Bs(l, n, 4, s) && (d = !0),
											f > 5 && Bs(l, n, 5, o) && (d = !0),
											f > 6 && Bs(l, n, 6, a) && (d = !0),
											f > 7 && Bs(l, n, 7, i) && (d = !0),
											f > 8 && Bs(l, n, 8, c) && (d = !0),
											f > 9 && Bs(l, n, 9, p) && (d = !0),
											d)
										) {
											var g = Ps(l, n.nodeIndex),
												m = void 0;
											switch (201347067 & n.flags) {
												case 32:
													(m = new Array(h.length)),
														f > 0 && (m[0] = u),
														f > 1 && (m[1] = e),
														f > 2 && (m[2] = t),
														f > 3 && (m[3] = r),
														f > 4 && (m[4] = s),
														f > 5 && (m[5] = o),
														f > 6 && (m[6] = a),
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
														f > 5 && (m[h[5].name] = o),
														f > 6 && (m[h[6].name] = a),
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
															m = b.transform(e, t, r, s, o);
															break;
														case 7:
															m = b.transform(e, t, r, s, o, a);
															break;
														case 8:
															m = b.transform(e, t, r, s, o, a, i);
															break;
														case 9:
															m = b.transform(e, t, r, s, o, a, i, c);
															break;
														case 10:
															m = b.transform(e, t, r, s, o, a, i, c, p);
													}
											}
											g.value = m;
										}
										return d;
									})(l, n, u, e, t, r, s, o, a, i, c, p);
								default:
									throw 'unreachable';
							}
					  })(l, n, e, t, r, s, o, a, i, p, h, d)
					: (function(l, n, u) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u) {
										for (var e = !1, t = 0; t < u.length; t++) vo(l, n, t, u[t]) && (e = !0);
										return e;
									})(l, n, u);
								case 2:
									return (function(l, n, u) {
										for (var e = n.bindings, t = !1, r = 0; r < u.length; r++) Bs(l, n, r, u[r]) && (t = !0);
										if (t) {
											var s = '';
											for (r = 0; r < u.length; r++) s += Ea(u[r], e[r]);
											s = n.text.prefix + s;
											var o = Ss(l, n.nodeIndex).renderText;
											l.renderer.setValue(o, s);
										}
										return t;
									})(l, n, u);
								case 16384:
									return (function(l, n, u) {
										for (var e = Is(l, n.nodeIndex), t = e.instance, r = !1, s = void 0, o = 0; o < u.length; o++) zs(l, n, o, u[o]) && ((r = !0), (s = da(l, e, n, o, u[o], s)));
										return s && t.ngOnChanges(s), 65536 & n.flags && Cs(l, 256, n.nodeIndex) && t.ngOnInit(), 262144 & n.flags && t.ngDoCheck(), r;
									})(l, n, u);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u) {
										for (var e = n.bindings, t = !1, r = 0; r < u.length; r++) Bs(l, n, r, u[r]) && (t = !0);
										if (t) {
											var s = Ps(l, n.nodeIndex),
												o = void 0;
											switch (201347067 & n.flags) {
												case 32:
													o = u;
													break;
												case 64:
													for (o = {}, r = 0; r < u.length; r++) o[e[r].name] = u[r];
													break;
												case 128:
													var a = u[0],
														i = u.slice(1);
													o = a.transform.apply(a, c(i));
											}
											s.value = o;
										}
										return t;
									})(l, n, u);
								default:
									throw 'unreachable';
							}
					  })(l, n, e);
			}
			function Ha(l) {
				var n = l.def;
				if (4 & n.nodeFlags)
					for (var u = 0; u < n.nodes.length; u++) {
						var e = n.nodes[u];
						if (4 & e.flags) {
							var t = Es(l, u).template._projectedViews;
							if (t)
								for (var r = 0; r < t.length; r++) {
									var s = t[r];
									(s.state |= 32), Qs(s, l);
								}
						} else 0 == (4 & e.childFlags) && (u += e.childCount);
					}
			}
			function Fa(l, n, u, e, t, r, s, o, a, i, c, p, h) {
				return (
					0 === u
						? (function(l, n, u, e, t, r, s, o, a, i, c, p) {
								var h = n.bindings.length;
								h > 0 && qs(l, n, 0, u),
									h > 1 && qs(l, n, 1, e),
									h > 2 && qs(l, n, 2, t),
									h > 3 && qs(l, n, 3, r),
									h > 4 && qs(l, n, 4, s),
									h > 5 && qs(l, n, 5, o),
									h > 6 && qs(l, n, 6, a),
									h > 7 && qs(l, n, 7, i),
									h > 8 && qs(l, n, 8, c),
									h > 9 && qs(l, n, 9, p);
						  })(l, n, e, t, r, s, o, a, i, c, p, h)
						: (function(l, n, u) {
								for (var e = 0; e < u.length; e++) qs(l, n, e, u[e]);
						  })(l, n, e),
					!1
				);
			}
			function za(l, n) {
				if (Os(l, n.nodeIndex).dirty) throw Ms(Ts.createDebugContext(l, n.nodeIndex), 'Query ' + n.query.id + ' not dirty', 'Query ' + n.query.id + ' dirty', 0 != (1 & l.state));
			}
			function Ba(l) {
				if (!(128 & l.state)) {
					if ((Qa(l, qa.Destroy), Ga(l, qa.Destroy), fa(l, 131072), l.disposables)) for (var n = 0; n < l.disposables.length; n++) l.disposables[n]();
					!(function(l) {
						if (16 & l.state) {
							var n = Ws(l);
							if (n) {
								var u = n.template._projectedViews;
								u && (To(u, u.indexOf(l)), Ts.dirtyParentQueries(l));
							}
						}
					})(l),
						l.renderer.destroyNode &&
							(function(l) {
								for (var n = l.def.nodes.length, u = 0; u < n; u++) {
									var e = l.def.nodes[u];
									1 & e.flags
										? l.renderer.destroyNode(Es(l, u).renderElement)
										: 2 & e.flags
										? l.renderer.destroyNode(Ss(l, u).renderText)
										: (67108864 & e.flags || 134217728 & e.flags) && Os(l, u).destroy();
								}
							})(l),
						Js(l) && l.renderer.destroy(),
						(l.state |= 128);
				}
			}
			var qa = (function(l) {
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
			function Ga(l, n) {
				var u = l.def;
				if (33554432 & u.nodeFlags)
					for (var e = 0; e < u.nodes.length; e++) {
						var t = u.nodes[e];
						33554432 & t.flags ? Za(Es(l, e).componentView, n) : 0 == (33554432 & t.childFlags) && (e += t.childCount);
					}
			}
			function Qa(l, n) {
				var u = l.def;
				if (16777216 & u.nodeFlags)
					for (var e = 0; e < u.nodes.length; e++) {
						var t = u.nodes[e];
						if (16777216 & t.flags) for (var r = Es(l, e).viewContainer._embeddedViews, s = 0; s < r.length; s++) Za(r[s], n);
						else 0 == (16777216 & t.childFlags) && (e += t.childCount);
					}
			}
			function Za(l, n) {
				var u = l.state;
				switch (n) {
					case qa.CheckNoChanges:
						0 == (128 & u) && (12 == (12 & u) ? Va(l) : 64 & u && Wa(l, qa.CheckNoChangesProjectedViews));
						break;
					case qa.CheckNoChangesProjectedViews:
						0 == (128 & u) && (32 & u ? Va(l) : 64 & u && Wa(l, n));
						break;
					case qa.CheckAndUpdate:
						0 == (128 & u) && (12 == (12 & u) ? Ua(l) : 64 & u && Wa(l, qa.CheckAndUpdateProjectedViews));
						break;
					case qa.CheckAndUpdateProjectedViews:
						0 == (128 & u) && (32 & u ? Ua(l) : 64 & u && Wa(l, n));
						break;
					case qa.Destroy:
						Ba(l);
						break;
					case qa.CreateViewNodes:
						Da(l);
				}
			}
			function Wa(l, n) {
				Qa(l, n), Ga(l, n);
			}
			function Ka(l, n, u, e) {
				if (l.def.nodeFlags & n && l.def.nodeFlags & u)
					for (var t = l.def.nodes.length, r = 0; r < t; r++) {
						var s = l.def.nodes[r];
						if (s.flags & n && s.flags & u)
							switch ((Ts.setCurrentNode(l, s.nodeIndex), e)) {
								case 0:
									va(l, s);
									break;
								case 1:
									za(l, s);
							}
						(s.childFlags & n && s.childFlags & u) || (r += s.childCount);
					}
			}
			var Ya = !1;
			function Ja(l, n, u, e, t, r) {
				var s = t.injector.get(Xe);
				return Ma(Xa(l, t, s, n, u), e, r);
			}
			function $a(l, n, u, e, t, r) {
				var s = t.injector.get(Xe),
					o = Xa(l, t, new Ti(s), n, u),
					a = ii(e);
				return Pi(yi.create, Ma, null, [o, a, r]);
			}
			function Xa(l, n, u, e, t) {
				var r = n.injector.get(tt),
					s = n.injector.get(Yt),
					o = u.createRenderer(null, null);
				return { ngModule: n, injector: l, projectableNodes: e, selectorOrNode: t, sanitizer: r, rendererFactory: u, renderer: o, errorHandler: s };
			}
			function li(l, n, u, e) {
				var t = ii(u);
				return Pi(yi.create, Ta, null, [l, n, t, e]);
			}
			function ni(l, n, u, e) {
				return (u = ri.get(n.element.componentProvider.provider.token) || ii(u)), Pi(yi.create, Ra, null, [l, n, u, e]);
			}
			function ui(l, n, u, e) {
				return Zo(
					l,
					n,
					u,
					(function(l) {
						var n = (function(l) {
								var n = !1,
									u = !1;
								return 0 === ei.size
									? { hasOverrides: n, hasDeprecatedOverrides: u }
									: (l.providers.forEach(function(l) {
											var e = ei.get(l.token);
											3840 & l.flags && e && ((n = !0), (u = u || e.deprecatedBehavior));
									  }),
									  l.modules.forEach(function(l) {
											ti.forEach(function(e, t) {
												kl(t).providedIn === l && ((n = !0), (u = u || e.deprecatedBehavior));
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
										var t = ei.get(e.token);
										t && ((e.flags = (-3841 & e.flags) | t.flags), (e.deps = no(t.deps)), (e.value = t.value));
									}
									if (ti.size > 0) {
										var r = new Set(l.modules);
										ti.forEach(function(n, e) {
											if (r.has(kl(e).providedIn)) {
												var t = { token: e, flags: n.flags | (u ? 4096 : 0), deps: no(n.deps), value: n.value, index: l.providers.length };
												l.providers.push(t), (l.providersByKey[Vs(e)] = t);
											}
										});
									}
							  })(
									(l = l.factory(function() {
										return Ns;
									}))
							  ),
							  l)
							: l;
					})(e)
				);
			}
			var ei = new Map(),
				ti = new Map(),
				ri = new Map();
			function si(l) {
				var n;
				ei.set(l.token, l), 'function' == typeof l.token && (n = kl(l.token)) && 'function' == typeof n.providedIn && ti.set(l.token, l);
			}
			function oi(l, n) {
				var u = to(n.viewDefFactory),
					e = to(u.nodes[0].element.componentView);
				ri.set(l, e);
			}
			function ai() {
				ei.clear(), ti.clear(), ri.clear();
			}
			function ii(l) {
				if (0 === ei.size) return l;
				var n = (function(l) {
					for (var n = [], u = null, e = 0; e < l.nodes.length; e++) {
						var t = l.nodes[e];
						1 & t.flags && (u = t), u && 3840 & t.flags && ei.has(t.provider.token) && (n.push(u.nodeIndex), (u = null));
					}
					return n;
				})(l);
				if (0 === n.length) return l;
				l = l.factory(function() {
					return Ns;
				});
				for (var u = 0; u < n.length; u++) e(l, n[u]);
				return l;
				function e(l, n) {
					for (var u = n + 1; u < l.nodes.length; u++) {
						var e = l.nodes[u];
						if (1 & e.flags) return;
						if (3840 & e.flags) {
							var t = e.provider,
								r = ei.get(t.token);
							r && ((e.flags = (-3841 & e.flags) | r.flags), (t.deps = no(r.deps)), (t.value = r.value));
						}
					}
				}
			}
			function ci(l, n, u, e, t, r, s, o, a, i, c, p, h) {
				var d = l.def.nodes[n];
				return La(l, d, u, e, t, r, s, o, a, i, c, p, h), 224 & d.flags ? Ps(l, n).value : void 0;
			}
			function pi(l, n, u, e, t, r, s, o, a, i, c, p, h) {
				var d = l.def.nodes[n];
				return Fa(l, d, u, e, t, r, s, o, a, i, c, p, h), 224 & d.flags ? Ps(l, n).value : void 0;
			}
			function hi(l) {
				return Pi(yi.detectChanges, Ua, null, [l]);
			}
			function di(l) {
				return Pi(yi.checkNoChanges, Va, null, [l]);
			}
			function fi(l) {
				return Pi(yi.destroy, Ba, null, [l]);
			}
			var gi,
				mi,
				bi,
				yi = (function(l) {
					return (
						(l[(l.create = 0)] = 'create'),
						(l[(l.detectChanges = 1)] = 'detectChanges'),
						(l[(l.checkNoChanges = 2)] = 'checkNoChanges'),
						(l[(l.destroy = 3)] = 'destroy'),
						(l[(l.handleEvent = 4)] = 'handleEvent'),
						l
					);
				})({});
			function vi(l, n) {
				(mi = l), (bi = n);
			}
			function wi(l, n, u, e) {
				return vi(l, n), Pi(yi.handleEvent, l.def.handleEvent, null, [l, n, u, e]);
			}
			function ji(l, n) {
				if (128 & l.state) throw As(yi[gi]);
				return (
					vi(l, Ci(l, 0)),
					l.def.updateDirectives(function(l, u, e) {
						for (var t = [], r = 3; r < arguments.length; r++) t[r - 3] = arguments[r];
						var s = l.def.nodes[u];
						return 0 === n ? xi(l, s, e, t) : ki(l, s, e, t), 16384 & s.flags && vi(l, Ci(l, u)), 224 & s.flags ? Ps(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function _i(l, n) {
				if (128 & l.state) throw As(yi[gi]);
				return (
					vi(l, Si(l, 0)),
					l.def.updateRenderer(function(l, u, e) {
						for (var t = [], r = 3; r < arguments.length; r++) t[r - 3] = arguments[r];
						var s = l.def.nodes[u];
						return 0 === n ? xi(l, s, e, t) : ki(l, s, e, t), 3 & s.flags && vi(l, Si(l, u)), 224 & s.flags ? Ps(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function xi(l, n, u, e) {
				if (La.apply(void 0, c([l, n, u], e))) {
					var t = 1 === u ? e[0] : e;
					if (16384 & n.flags) {
						for (var r = {}, s = 0; s < n.bindings.length; s++) {
							var o = n.bindings[s],
								a = t[s];
							8 & o.flags &&
								(r[
									((d = o.nonMinifiedName),
									'ng-reflect-' +
										d.replace(/[$@]/g, '_').replace(xu, function() {
											for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
											return '-' + l[1].toLowerCase();
										}))
								] = ku(a));
						}
						var i = n.parent,
							p = Es(l, i.nodeIndex).renderElement;
						if (i.element.name) for (var h in r) null != (a = r[h]) ? l.renderer.setAttribute(p, h, a) : l.renderer.removeAttribute(p, h);
						else l.renderer.setValue(p, 'bindings=' + JSON.stringify(r, null, 2));
					}
				}
				var d;
			}
			function ki(l, n, u, e) {
				Fa.apply(void 0, c([l, n, u], e));
			}
			function Ci(l, n) {
				for (var u = n; u < l.def.nodes.length; u++) {
					var e = l.def.nodes[u];
					if (16384 & e.flags && e.bindings && e.bindings.length) return u;
				}
				return null;
			}
			function Si(l, n) {
				for (var u = n; u < l.def.nodes.length; u++) {
					var e = l.def.nodes[u];
					if (3 & e.flags && e.bindings && e.bindings.length) return u;
				}
				return null;
			}
			var Ei = (function() {
				function l(l, n) {
					(this.view = l), (this.nodeIndex = n), null == n && (this.nodeIndex = n = 0), (this.nodeDef = l.def.nodes[n]);
					for (var u = this.nodeDef, e = l; u && 0 == (1 & u.flags); ) u = u.parent;
					if (!u) for (; !u && e; ) (u = Ks(e)), (e = e.parent);
					(this.elDef = u), (this.elView = e);
				}
				return (
					Object.defineProperty(l.prototype, 'elOrCompView', {
						get: function() {
							return Es(this.elView, this.elDef.nodeIndex).componentView || this.view;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return zo(this.elView, this.elDef);
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
								Ii(this.elView, this.elDef, l);
								for (var n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
									var u = this.elView.def.nodes[n];
									20224 & u.flags && Ii(this.elView, u, l), (n += u.childCount);
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
								for (; l && !Js(l); ) l = l.parent;
								return l.parent ? Es(l.parent, Ks(l).nodeIndex) : null;
							})(this.elOrCompView);
							return l ? l.renderElement : void 0;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'renderNode', {
						get: function() {
							return 2 & this.nodeDef.flags ? Ys(this.view, this.nodeDef) : Ys(this.elView, this.elDef);
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
							return ++s === r ? (n = l.error).bind.apply(n, c([l], e)) : Ns;
						}),
							s < r && (l.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), l.error.apply(l, c(e)));
					}),
					l
				);
			})();
			function Ii(l, n, u) {
				for (var e in n.references) u[e] = ja(l, n, n.references[e]);
			}
			function Pi(l, n, u, e) {
				var t = gi,
					r = mi,
					s = bi;
				try {
					gi = l;
					var o = n.apply(u, e);
					return (mi = r), (bi = s), (gi = t), o;
				} catch (a) {
					if (Zt(a) || !mi) throw a;
					throw (function(l, n) {
						return l instanceof Error || (l = new Error(l.toString())), Rs(l, n), l;
					})(a, Oi());
				}
			}
			function Oi() {
				return mi ? new Ei(mi, bi) : null;
			}
			var Ti = (function() {
					function l(l) {
						this.delegate = l;
					}
					return (
						(l.prototype.createRenderer = function(l, n) {
							return new Mi(this.delegate.createRenderer(l, n));
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
				Mi = (function() {
					function l(l) {
						(this.delegate = l), (this.debugContextFactory = Oi), (this.data = this.delegate.data);
					}
					return (
						(l.prototype.createDebugContext = function(l) {
							return this.debugContextFactory(l);
						}),
						(l.prototype.destroyNode = function(l) {
							!(function(l) {
								ls.delete(l.nativeNode);
							})(ns(l)),
								this.delegate.destroyNode && this.delegate.destroyNode(l);
						}),
						(l.prototype.destroy = function() {
							this.delegate.destroy();
						}),
						(l.prototype.createElement = function(l, n) {
							var u = this.delegate.createElement(l, n),
								e = this.createDebugContext(u);
							if (e) {
								var t = new Xr(u, null, e);
								(t.name = l), us(t);
							}
							return u;
						}),
						(l.prototype.createComment = function(l) {
							var n = this.delegate.createComment(l),
								u = this.createDebugContext(n);
							return u && us(new $r(n, null, u)), n;
						}),
						(l.prototype.createText = function(l) {
							var n = this.delegate.createText(l),
								u = this.createDebugContext(n);
							return u && us(new $r(n, null, u)), n;
						}),
						(l.prototype.appendChild = function(l, n) {
							var u = ns(l),
								e = ns(n);
							u && e && u instanceof Xr && u.addChild(e), this.delegate.appendChild(l, n);
						}),
						(l.prototype.insertBefore = function(l, n, u) {
							var e = ns(l),
								t = ns(n),
								r = ns(u);
							e && t && e instanceof Xr && e.insertBefore(r, t), this.delegate.insertBefore(l, n, u);
						}),
						(l.prototype.removeChild = function(l, n) {
							var u = ns(l),
								e = ns(n);
							u && e && u instanceof Xr && u.removeChild(e), this.delegate.removeChild(l, n);
						}),
						(l.prototype.selectRootElement = function(l, n) {
							var u = this.delegate.selectRootElement(l, n),
								e = Oi();
							return e && us(new Xr(u, null, e)), u;
						}),
						(l.prototype.setAttribute = function(l, n, u, e) {
							var t = ns(l);
							t && t instanceof Xr && (t.attributes[e ? e + ':' + n : n] = u), this.delegate.setAttribute(l, n, u, e);
						}),
						(l.prototype.removeAttribute = function(l, n, u) {
							var e = ns(l);
							e && e instanceof Xr && (e.attributes[u ? u + ':' + n : n] = null), this.delegate.removeAttribute(l, n, u);
						}),
						(l.prototype.addClass = function(l, n) {
							var u = ns(l);
							u && u instanceof Xr && (u.classes[n] = !0), this.delegate.addClass(l, n);
						}),
						(l.prototype.removeClass = function(l, n) {
							var u = ns(l);
							u && u instanceof Xr && (u.classes[n] = !1), this.delegate.removeClass(l, n);
						}),
						(l.prototype.setStyle = function(l, n, u, e) {
							var t = ns(l);
							t && t instanceof Xr && (t.styles[n] = u), this.delegate.setStyle(l, n, u, e);
						}),
						(l.prototype.removeStyle = function(l, n, u) {
							var e = ns(l);
							e && e instanceof Xr && (e.styles[n] = null), this.delegate.removeStyle(l, n, u);
						}),
						(l.prototype.setProperty = function(l, n, u) {
							var e = ns(l);
							e && e instanceof Xr && (e.properties[n] = u), this.delegate.setProperty(l, n, u);
						}),
						(l.prototype.listen = function(l, n, u) {
							if ('string' != typeof l) {
								var e = ns(l);
								e && e.listeners.push(new Jr(n, u));
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
			function Ri(l, n, u) {
				return new Ai(l, n, u);
			}
			var Ai = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t.moduleType = n), (t._bootstrapComponents = u), (t._ngModuleDefFactory = e), t;
					}
					return (
						t(n, l),
						(n.prototype.create = function(l) {
							!(function() {
								if (!Ya) {
									Ya = !0;
									var l = gt()
										? {
												setCurrentNode: vi,
												createRootView: $a,
												createEmbeddedView: li,
												createComponentView: ni,
												createNgModuleRef: ui,
												overrideProvider: si,
												overrideComponentView: oi,
												clearOverrides: ai,
												checkAndUpdateView: hi,
												checkNoChangesView: di,
												destroyView: fi,
												createDebugContext: function(l, n) {
													return new Ei(l, n);
												},
												handleEvent: wi,
												updateDirectives: ji,
												updateRenderer: _i
										  }
										: {
												setCurrentNode: function() {},
												createRootView: Ja,
												createEmbeddedView: Ta,
												createComponentView: Ra,
												createNgModuleRef: Zo,
												overrideProvider: Ns,
												overrideComponentView: Ns,
												clearOverrides: Ns,
												checkAndUpdateView: Ua,
												checkNoChangesView: Va,
												destroyView: Ba,
												createDebugContext: function(l, n) {
													return new Ei(l, n);
												},
												handleEvent: function(l, n, u, e) {
													return l.def.handleEvent(l, n, u, e);
												},
												updateDirectives: function(l, n) {
													return l.def.updateDirectives(0 === n ? ci : pi, l);
												},
												updateRenderer: function(l, n) {
													return l.def.updateRenderer(0 === n ? ci : pi, l);
												}
										  };
									(Ts.setCurrentNode = l.setCurrentNode),
										(Ts.createRootView = l.createRootView),
										(Ts.createEmbeddedView = l.createEmbeddedView),
										(Ts.createComponentView = l.createComponentView),
										(Ts.createNgModuleRef = l.createNgModuleRef),
										(Ts.overrideProvider = l.overrideProvider),
										(Ts.overrideComponentView = l.overrideComponentView),
										(Ts.clearOverrides = l.clearOverrides),
										(Ts.checkAndUpdateView = l.checkAndUpdateView),
										(Ts.checkNoChangesView = l.checkNoChangesView),
										(Ts.destroyView = l.destroyView),
										(Ts.resolveDep = pa),
										(Ts.createDebugContext = l.createDebugContext),
										(Ts.handleEvent = l.handleEvent),
										(Ts.updateDirectives = l.updateDirectives),
										(Ts.updateRenderer = l.updateRenderer),
										(Ts.dirtyParentQueries = ya);
								}
							})();
							var n = (function(l) {
								var n = Array.from(l.providers),
									u = Array.from(l.modules),
									e = {};
								for (var t in l.providersByKey) e[t] = l.providersByKey[t];
								return { factory: l.factory, isRoot: l.isRoot, providers: n, modules: u, providersByKey: e };
							})(to(this._ngModuleDefFactory));
							return Ts.createNgModuleRef(this.moduleType, l || he.NULL, this._bootstrapComponents, n);
						}),
						n
					);
				})(We),
				Ni = (function() {
					return function() {};
				})(),
				Di = (function() {
					return function() {};
				})(),
				Vi = (function() {
					return function() {};
				})(),
				Ui = new Sl('Location Initialized'),
				Li = (function() {
					return function() {};
				})(),
				Hi = new Sl('appBaseHref'),
				Fi = (function() {
					function l(l) {
						var u = this;
						(this._subject = new Ut()), (this._platformStrategy = l);
						var e = this._platformStrategy.getBaseHref();
						(this._baseHref = n.stripTrailingSlash(zi(e))),
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
								})(this._baseHref, zi(l))
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
			function zi(l) {
				return l.replace(/\/index.html$/, '');
			}
			var Bi = (function(l) {
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
							var n = Fi.joinWithSlash(this._baseHref, l);
							return n.length > 0 ? '#' + n : n;
						}),
						(n.prototype.pushState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + Fi.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.pushState(l, n, t);
						}),
						(n.prototype.replaceState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + Fi.normalizeQueryParams(e));
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
				})(Li),
				qi = (function(l) {
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
							return Fi.joinWithSlash(this._baseHref, l);
						}),
						(n.prototype.path = function(l) {
							void 0 === l && (l = !1);
							var n = this._platformLocation.pathname + Fi.normalizeQueryParams(this._platformLocation.search),
								u = this._platformLocation.hash;
							return u && l ? '' + n + u : n;
						}),
						(n.prototype.pushState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + Fi.normalizeQueryParams(e));
							this._platformLocation.pushState(l, n, t);
						}),
						(n.prototype.replaceState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + Fi.normalizeQueryParams(e));
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
				})(Li),
				Gi = void 0,
				Qi = [
					'en',
					[['a', 'p'], ['AM', 'PM'], Gi],
					[['AM', 'PM'], Gi, Gi],
					[
						['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
						['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
					],
					Gi,
					[
						['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
						['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
					],
					Gi,
					[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
					0,
					[6, 0],
					['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
					['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
					['{1}, {0}', Gi, "{1} 'at' {0}", Gi],
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
				Zi = {},
				Wi = (function(l) {
					return (l[(l.Zero = 0)] = 'Zero'), (l[(l.One = 1)] = 'One'), (l[(l.Two = 2)] = 'Two'), (l[(l.Few = 3)] = 'Few'), (l[(l.Many = 4)] = 'Many'), (l[(l.Other = 5)] = 'Other'), l;
				})({}),
				Ki = new Sl('UseV4Plurals'),
				Yi = (function() {
					return function() {};
				})(),
				Ji = (function(l) {
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
													u = Zi[n];
												if (u) return u;
												var e = n.split('-')[0];
												if ((u = Zi[e])) return u;
												if ('en' === e) return Qi;
												throw new Error('Missing locale data for the locale "' + l + '".');
											})(l)[18];
									  })(n || this.locale)(l)
							) {
								case Wi.Zero:
									return 'zero';
								case Wi.One:
									return 'one';
								case Wi.Two:
									return 'two';
								case Wi.Few:
									return 'few';
								case Wi.Many:
									return 'many';
								default:
									return 'other';
							}
						}),
						n
					);
				})(Yi),
				$i = (function() {
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
										(Iu(this._rawClass)
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
								if ('string' != typeof l.item) throw new Error('NgClass can only toggle CSS classes expressed as strings, got ' + Ul(l.item));
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
				Xi = (function() {
					function l(l, n) {
						(this._viewContainer = l),
							(this._context = new lc()),
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
								nc('ngIfThen', l), (this._thenTemplateRef = l), (this._thenViewRef = null), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'ngIfElse', {
							set: function(l) {
								nc('ngIfElse', l), (this._elseTemplateRef = l), (this._elseViewRef = null), this._updateView();
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
				lc = (function() {
					return function() {
						(this.$implicit = null), (this.ngIf = null);
					};
				})();
			function nc(l, n) {
				if (n && !n.createEmbeddedView) throw new Error(l + " must be a TemplateRef, but received '" + Ul(n) + "'.");
			}
			var uc = (function() {
					return function() {};
				})(),
				ec = new Sl('DocumentToken'),
				tc = 'server',
				rc = (function() {
					function l() {}
					return (
						(l.ngInjectableDef = xl({
							providedIn: 'root',
							factory: function() {
								return new sc(Hn(ec), window);
							}
						})),
						l
					);
				})(),
				sc = (function() {
					function l(l, n) {
						(this.document = l),
							(this.window = n),
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
								var n = this.document.querySelector('#' + l);
								if (n) return void this.scrollToElement(n);
								var u = this.document.querySelector("[name='" + l + "']");
								if (u) return void this.scrollToElement(u);
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
				})(),
				oc = new R(function(l) {
					return l.complete();
				});
			function ac(l) {
				return l
					? (function(l) {
							return new R(function(n) {
								return l.schedule(function() {
									return n.complete();
								});
							});
					  })(l)
					: oc;
			}
			function ic(l) {
				var n = new R(function(n) {
					n.next(l), n.complete();
				});
				return (n._isScalar = !0), (n.value = l), n;
			}
			function cc() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				var u = l[l.length - 1];
				switch ((F(u) ? l.pop() : (u = void 0), l.length)) {
					case 0:
						return ac(u);
					case 1:
						return u ? el(l, u) : ic(l[0]);
					default:
						return el(l, u);
				}
			}
			var pc = (function(l) {
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
						if (this.closed) throw new D();
						return this._value;
					}),
					(n.prototype.next = function(n) {
						l.prototype.next.call(this, (this._value = n));
					}),
					n
				);
			})(L);
			function hc() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			hc.prototype = Object.create(Error.prototype);
			var dc = hc,
				fc = {},
				gc = (function() {
					function l(l) {
						this.resultSelector = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new mc(l, this.resultSelector));
						}),
						l
					);
				})(),
				mc = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.resultSelector = u), (e.active = 0), (e.values = []), (e.observables = []), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							this.values.push(fc), this.observables.push(l);
						}),
						(n.prototype._complete = function() {
							var l = this.observables,
								n = l.length;
							if (0 === n) this.destination.complete();
							else {
								(this.active = n), (this.toRespond = n);
								for (var u = 0; u < n; u++) {
									var e = l[u];
									this.add($(this, e, e, u));
								}
							}
						}),
						(n.prototype.notifyComplete = function(l) {
							0 == (this.active -= 1) && this.destination.complete();
						}),
						(n.prototype.notifyNext = function(l, n, u, e, t) {
							var r = this.values,
								s = this.toRespond ? (r[u] === fc ? --this.toRespond : this.toRespond) : 0;
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
				})(X);
			function bc(l) {
				return new R(function(n) {
					var u;
					try {
						u = l();
					} catch (e) {
						return void n.error(e);
					}
					return (u ? tl(u) : ac()).subscribe(n);
				});
			}
			function yc() {
				return il(1);
			}
			function vc(l, n) {
				return function(u) {
					return u.lift(new wc(l, n));
				};
			}
			var wc = (function() {
					function l(l, n) {
						(this.predicate = l), (this.thisArg = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new jc(l, this.predicate, this.thisArg));
						}),
						l
					);
				})(),
				jc = (function(l) {
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
				})(E);
			function _c() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			_c.prototype = Object.create(Error.prototype);
			var xc = _c;
			function kc(l) {
				return function(n) {
					return 0 === l ? ac() : n.lift(new Cc(l));
				};
			}
			var Cc = (function() {
					function l(l) {
						if (((this.total = l), this.total < 0)) throw new xc();
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Sc(l, this.total));
						}),
						l
					);
				})(),
				Sc = (function(l) {
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
				})(E);
			function Ec(l, n, u) {
				return function(e) {
					return e.lift(new Ic(l, n, u));
				};
			}
			var Ic = (function() {
					function l(l, n, u) {
						(this.nextOrObserver = l), (this.error = n), (this.complete = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Pc(l, this.nextOrObserver, this.error, this.complete));
						}),
						l
					);
				})(),
				Pc = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						return (
							(r._tapNext = O),
							(r._tapError = O),
							(r._tapComplete = O),
							(r._tapError = e || O),
							(r._tapComplete = t || O),
							d(u) ? ((r._context = r), (r._tapNext = u)) : u && ((r._context = u), (r._tapNext = u.next || O), (r._tapError = u.error || O), (r._tapComplete = u.complete || O)),
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
				})(E),
				Oc = function(l) {
					return (
						void 0 === l && (l = Tc),
						Ec({
							hasValue: !1,
							next: function() {
								this.hasValue = !0;
							},
							complete: function() {
								if (!this.hasValue) throw l();
							}
						})
					);
				};
			function Tc() {
				return new dc();
			}
			function Mc(l) {
				return (
					void 0 === l && (l = null),
					function(n) {
						return n.lift(new Rc(l));
					}
				);
			}
			var Rc = (function() {
					function l(l) {
						this.defaultValue = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Ac(l, this.defaultValue));
						}),
						l
					);
				})(),
				Ac = (function(l) {
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
				})(E);
			function Nc(l, n) {
				var u = arguments.length >= 2;
				return function(e) {
					return e.pipe(
						l
							? vc(function(n, u) {
									return l(n, u, e);
							  })
							: al,
						kc(1),
						u
							? Mc(n)
							: Oc(function() {
									return new dc();
							  })
					);
				};
			}
			function Dc(l) {
				return function(n) {
					var u = new Vc(l),
						e = n.lift(u);
					return (u.caught = e);
				};
			}
			var Vc = (function() {
					function l(l) {
						this.selector = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Uc(l, this.selector, this.caught));
						}),
						l
					);
				})(),
				Uc = (function(l) {
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
								var e = new z(this, void 0, void 0);
								this.add(e), $(this, u, void 0, void 0, e);
							}
						}),
						n
					);
				})(X);
			function Lc(l) {
				return function(n) {
					return 0 === l ? ac() : n.lift(new Hc(l));
				};
			}
			var Hc = (function() {
					function l(l) {
						if (((this.total = l), this.total < 0)) throw new xc();
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Fc(l, this.total));
						}),
						l
					);
				})(),
				Fc = (function(l) {
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
				})(E);
			function zc(l, n) {
				var u = arguments.length >= 2;
				return function(e) {
					return e.pipe(
						l
							? vc(function(n, u) {
									return l(n, u, e);
							  })
							: al,
						Lc(1),
						u
							? Mc(n)
							: Oc(function() {
									return new dc();
							  })
					);
				};
			}
			var Bc = (function() {
					function l(l, n, u) {
						(this.predicate = l), (this.thisArg = n), (this.source = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new qc(l, this.predicate, this.thisArg, this.source));
						}),
						l
					);
				})(),
				qc = (function(l) {
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
				})(E);
			function Gc(l, n) {
				return 'function' == typeof n
					? function(u) {
							return u.pipe(
								Gc(function(u, e) {
									return tl(l(u, e)).pipe(
										ll(function(l, t) {
											return n(u, l, e, t);
										})
									);
								})
							);
					  }
					: function(n) {
							return n.lift(new Qc(l));
					  };
			}
			var Qc = (function() {
					function l(l) {
						this.project = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Zc(l, this.project));
						}),
						l
					);
				})(),
				Zc = (function(l) {
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
							var t = new z(this, void 0, void 0);
							this.destination.add(t), (this.innerSubscription = $(this, l, n, u, t));
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
				})(X);
			function Wc(l, n) {
				var u = !1;
				return (
					arguments.length >= 2 && (u = !0),
					function(e) {
						return e.lift(new Kc(l, n, u));
					}
				);
			}
			var Kc = (function() {
					function l(l, n, u) {
						void 0 === u && (u = !1), (this.accumulator = l), (this.seed = n), (this.hasSeed = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Yc(l, this.accumulator, this.seed, this.hasSeed));
						}),
						l
					);
				})(),
				Yc = (function(l) {
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
				})(E);
			function Jc(l, n) {
				return rl(l, n, 1);
			}
			var $c = (function() {
					function l(l) {
						this.callback = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Xc(l, this.callback));
						}),
						l
					);
				})(),
				Xc = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return e.add(new w(u)), e;
					}
					return t(n, l), n;
				})(E),
				lp = null;
			function np() {
				return lp;
			}
			var up,
				ep = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				tp = {
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
				rp = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' };
			Ml.Node &&
				(up =
					Ml.Node.prototype.contains ||
					function(l) {
						return !!(16 & this.compareDocumentPosition(l));
					});
			var sp,
				op = (function(l) {
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
							(l = new n()), lp || (lp = l);
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
								return ep;
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.contains = function(l, n) {
							return up.call(l, n);
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
								n.startsWith('U+') && ((n = String.fromCharCode(parseInt(n.substring(2), 16))), 3 === l.location && rp.hasOwnProperty(n) && (n = rp[n]));
							}
							return tp[n] || n;
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
								u = ap || (ap = document.querySelector('base')) ? ap.getAttribute('href') : null;
							return null == u ? null : ((n = u), sp || (sp = document.createElement('a')), sp.setAttribute('href', n), '/' === sp.pathname.charAt(0) ? sp.pathname : '/' + sp.pathname);
						}),
						(n.prototype.resetBaseElement = function() {
							ap = null;
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
									for (var t = a(l.split(';')), r = t.next(); !r.done; r = t.next()) {
										var s = r.value,
											o = s.indexOf('='),
											c = i(-1 == o ? [s, ''] : [s.slice(0, o), s.slice(o + 1)], 2),
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
				ap = null,
				ip = ec;
			function cp() {
				return !!window.history.pushState;
			}
			var pp = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), u._init(), u;
					}
					var u;
					return (
						t(n, l),
						(n.prototype._init = function() {
							(this.location = np().getLocation()), (this._history = np().getHistory());
						}),
						(n.prototype.getBaseHrefFromDOM = function() {
							return np().getBaseHref(this._doc);
						}),
						(n.prototype.onPopState = function(l) {
							np()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', l, !1);
						}),
						(n.prototype.onHashChange = function(l) {
							np()
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
							cp() ? this._history.pushState(l, n, u) : (this.location.hash = u);
						}),
						(n.prototype.replaceState = function(l, n, u) {
							cp() ? this._history.replaceState(l, n, u) : (this.location.hash = u);
						}),
						(n.prototype.forward = function() {
							this._history.forward();
						}),
						(n.prototype.back = function() {
							this._history.back();
						}),
						s(
							[
								((u = Mn(ip)),
								function(l, n) {
									u(l, n, 0);
								}),
								o('design:paramtypes', [Object])
							],
							n
						)
					);
				})(Vi),
				hp = new Sl('TRANSITION_ID'),
				dp = [
					{
						provide: Xt,
						useFactory: function(l, n, u) {
							return function() {
								u.get(lr).donePromise.then(function() {
									var u = np();
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
						deps: [hp, ip, he],
						multi: !0
					}
				],
				fp = (function() {
					function l() {}
					return (
						(l.init = function() {
							var n;
							(n = new l()), (Mr = n);
						}),
						(l.prototype.addToWindow = function(l) {
							(Ml.getAngularTestability = function(n, u) {
								void 0 === u && (u = !0);
								var e = l.findTestabilityInTree(n, u);
								if (null == e) throw new Error('Could not find testability for element.');
								return e;
							}),
								(Ml.getAllAngularTestabilities = function() {
									return l.getAllTestabilities();
								}),
								(Ml.getAllAngularRootElements = function() {
									return l.getAllRootElements();
								}),
								Ml.frameworkStabilizers || (Ml.frameworkStabilizers = []),
								Ml.frameworkStabilizers.push(function(l) {
									var n = Ml.getAllAngularTestabilities(),
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
							return null != e ? e : u ? (np().isShadowRoot(n) ? this.findTestabilityInTree(l, np().getHost(n), !0) : this.findTestabilityInTree(l, np().parentElement(n), !0)) : null;
						}),
						l
					);
				})();
			function gp(l, n) {
				('undefined' != typeof COMPILED && COMPILED) || ((Ml.ng = Ml.ng || {})[l] = n);
			}
			var mp = { ApplicationRef: Lr, NgZone: _r };
			function bp(l) {
				return ns(l);
			}
			var yp = new Sl('EventManagerPlugins'),
				vp = (function() {
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
				wp = (function() {
					function l(l) {
						this._doc = l;
					}
					return (
						(l.prototype.addGlobalEventListener = function(l, n, u) {
							var e = np().getGlobalEventTarget(this._doc, l);
							if (!e) throw new Error('Unsupported event target ' + e + ' for event ' + n);
							return this.addEventListener(e, n, u);
						}),
						l
					);
				})(),
				jp = (function() {
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
				_p = (function(l) {
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
								return np().remove(l);
							});
						}),
						n
					);
				})(jp),
				xp = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/'
				},
				kp = /%COMP%/g,
				Cp = '_nghost-%COMP%',
				Sp = '_ngcontent-%COMP%';
			function Ep(l, n, u) {
				for (var e = 0; e < n.length; e++) {
					var t = n[e];
					Array.isArray(t) ? Ep(l, t, u) : ((t = t.replace(kp, l)), u.push(t));
				}
				return u;
			}
			function Ip(l) {
				return function(n) {
					!1 === l(n) && (n.preventDefault(), (n.returnValue = !1));
				};
			}
			var Pp = (function() {
					function l(l, n) {
						(this.eventManager = l), (this.sharedStylesHost = n), (this.rendererByCompId = new Map()), (this.defaultRenderer = new Op(l));
					}
					return (
						(l.prototype.createRenderer = function(l, n) {
							if (!l || !n) return this.defaultRenderer;
							switch (n.encapsulation) {
								case zl.Emulated:
									var u = this.rendererByCompId.get(n.id);
									return u || ((u = new Ap(this.eventManager, this.sharedStylesHost, n)), this.rendererByCompId.set(n.id, u)), u.applyToHost(l), u;
								case zl.Native:
								case zl.ShadowDom:
									return new Np(this.eventManager, this.sharedStylesHost, l, n);
								default:
									if (!this.rendererByCompId.has(n.id)) {
										var e = Ep(n.id, n.styles, []);
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
				Op = (function() {
					function l(l) {
						(this.eventManager = l), (this.data = Object.create(null));
					}
					return (
						(l.prototype.destroy = function() {}),
						(l.prototype.createElement = function(l, n) {
							return n ? document.createElementNS(xp[n], l) : document.createElement(l);
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
								var t = xp[e];
								t ? l.setAttributeNS(t, n, u) : l.setAttribute(n, u);
							} else l.setAttribute(n, u);
						}),
						(l.prototype.removeAttribute = function(l, n, u) {
							if (u) {
								var e = xp[u];
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
							e & lt.DashCase ? l.style.setProperty(n, u, e & lt.Important ? 'important' : '') : (l.style[n] = u);
						}),
						(l.prototype.removeStyle = function(l, n, u) {
							u & lt.DashCase ? l.style.removeProperty(n) : (l.style[n] = '');
						}),
						(l.prototype.setProperty = function(l, n, u) {
							Mp(n, 'property'), (l[n] = u);
						}),
						(l.prototype.setValue = function(l, n) {
							l.nodeValue = n;
						}),
						(l.prototype.listen = function(l, n, u) {
							return Mp(n, 'listener'), 'string' == typeof l ? this.eventManager.addGlobalEventListener(l, n, Ip(u)) : this.eventManager.addEventListener(l, n, Ip(u));
						}),
						l
					);
				})(),
				Tp = '@'.charCodeAt(0);
			function Mp(l, n) {
				if (l.charCodeAt(0) === Tp) throw new Error('Found the synthetic ' + n + ' ' + l + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
			}
			var Rp,
				Ap = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						t.component = e;
						var r = Ep(e.id, e.styles, []);
						return u.addStyles(r), (t.contentAttr = Sp.replace(kp, e.id)), (t.hostAttr = Cp.replace(kp, e.id)), t;
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
				})(Op),
				Np = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						(r.sharedStylesHost = u),
							(r.hostEl = e),
							(r.component = t),
							(r.shadowRoot = t.encapsulation === zl.ShadowDom ? e.attachShadow({ mode: 'open' }) : e.createShadowRoot()),
							r.sharedStylesHost.addHost(r.shadowRoot);
						for (var s = Ep(t.id, t.styles, []), o = 0; o < s.length; o++) {
							var a = document.createElement('style');
							(a.textContent = s[o]), r.shadowRoot.appendChild(a);
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
				})(Op),
				Dp =
					('undefined' != typeof Zone && Zone.__symbol__) ||
					function(l) {
						return '__zone_symbol__' + l;
					},
				Vp = Dp('addEventListener'),
				Up = Dp('removeEventListener'),
				Lp = {},
				Hp = '__zone_symbol__propagationStopped';
			'undefined' != typeof Zone && Zone[Dp('BLACK_LISTED_EVENTS')] && (Rp = {});
			var Fp = function(l) {
					return !!Rp && Rp.hasOwnProperty(l);
				},
				zp = function(l) {
					var n = Lp[l.type];
					if (n) {
						var u = this[n];
						if (u) {
							var e = [l];
							if (1 === u.length) return (s = u[0]).zone !== Zone.current ? s.zone.run(s.handler, this, e) : s.handler.apply(this, e);
							for (var t = u.slice(), r = 0; r < t.length && !0 !== l[Hp]; r++) {
								var s;
								(s = t[r]).zone !== Zone.current ? s.zone.run(s.handler, this, e) : s.handler.apply(this, e);
							}
						}
					}
				},
				Bp = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						return (
							(t.ngZone = u),
							(e &&
								(function(l) {
									return l === tc;
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
									this && (this[Hp] = !0), l && l.apply(this, arguments);
								};
							}
						}),
						(n.prototype.supports = function(l) {
							return !0;
						}),
						(n.prototype.addEventListener = function(l, n, u) {
							var e = this,
								t = u;
							if (!l[Vp] || (_r.isInAngularZone() && !Fp(n))) l.addEventListener(n, t, !1);
							else {
								var r = Lp[n];
								r || (r = Lp[n] = Dp('ANGULAR' + n + 'FALSE'));
								var s = l[r],
									o = s && s.length > 0;
								s || (s = l[r] = []);
								var a = Fp(n) ? Zone.root : Zone.current;
								if (0 === s.length) s.push({ zone: a, handler: t });
								else {
									for (var i = !1, c = 0; c < s.length; c++)
										if (s[c].handler === t) {
											i = !0;
											break;
										}
									i || s.push({ zone: a, handler: t });
								}
								o || l[Vp](n, zp, !1);
							}
							return function() {
								return e.removeEventListener(l, n, t);
							};
						}),
						(n.prototype.removeEventListener = function(l, n, u) {
							var e = l[Up];
							if (!e) return l.removeEventListener.apply(l, [n, u, !1]);
							var t = Lp[n],
								r = t && l[t];
							if (!r) return l.removeEventListener.apply(l, [n, u, !1]);
							for (var s = !1, o = 0; o < r.length; o++)
								if (r[o].handler === u) {
									(s = !0), r.splice(o, 1);
									break;
								}
							s ? 0 === r.length && e.apply(l, [n, zp, !1]) : l.removeEventListener.apply(l, [n, u, !1]);
						}),
						n
					);
				})(wp),
				qp = {
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
				Gp = new Sl('HammerGestureConfig'),
				Qp = new Sl('HammerLoader'),
				Zp = (function() {
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
				Wp = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						return (r._config = u), (r.console = e), (r.loader = t), r;
					}
					return (
						t(n, l),
						(n.prototype.supports = function(l) {
							return !(
								(!qp.hasOwnProperty(l.toLowerCase()) && !this.isCustomEvent(l)) ||
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
				})(wp),
				Kp = ['alt', 'control', 'meta', 'shift'],
				Yp = {
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
				Jp = (function(l) {
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
								return np().onAndCancel(l, t.domEventName, r);
							});
						}),
						(n.parseEventName = function(l) {
							var n = l.toLowerCase().split('.'),
								e = n.shift();
							if (0 === n.length || ('keydown' !== e && 'keyup' !== e)) return null;
							var t = u._normalizeKey(n.pop()),
								r = '';
							if (
								(Kp.forEach(function(l) {
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
								u = np().getEventKey(l);
							return (
								' ' === (u = u.toLowerCase()) ? (u = 'space') : '.' === u && (u = 'dot'),
								Kp.forEach(function(e) {
									e != u && (0, Yp[e])(l) && (n += e + '.');
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
				})(wp),
				$p = (function() {
					return function() {};
				})(),
				Xp = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), u;
					}
					return (
						t(n, l),
						(n.prototype.sanitize = function(l, n) {
							if (null == n) return null;
							switch (l) {
								case et.NONE:
									return n;
								case et.HTML:
									return n instanceof nh
										? n.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(n, 'HTML'),
										  (function(l, n) {
												var u = null;
												try {
													_t = _t || new mt(l);
													var e = n ? String(n) : '';
													u = _t.getInertBodyElement(e);
													var t = 5,
														r = e;
													do {
														if (0 === t) throw new Error('Failed to sanitize html because the input is unstable');
														t--, (e = r), (r = u.innerHTML), (u = _t.getInertBodyElement(e));
													} while (e !== r);
													var s = new Tt(),
														o = s.sanitizeChildren(Nt(u) || u);
													return gt() && s.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), o;
												} finally {
													if (u) for (var a = Nt(u) || u; a.firstChild; ) a.removeChild(a.firstChild);
												}
										  })(this._doc, String(n)));
								case et.STYLE:
									return n instanceof uh
										? n.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(n, 'Style'),
										  (function(l) {
												if (!(l = String(l).trim())) return '';
												var n = l.match(zt);
												return (n && vt(n[1]) === n[1]) ||
													(l.match(Ft) &&
														(function(l) {
															for (var n = !0, u = !0, e = 0; e < l.length; e++) {
																var t = l.charAt(e);
																"'" === t && u ? (n = !n) : '"' === t && n && (u = !u);
															}
															return n && u;
														})(l))
													? l
													: (gt() && console.warn('WARNING: sanitizing unsafe style value ' + l + ' (see http://g.co/ng/security#xss).'), 'unsafe');
										  })(n));
								case et.SCRIPT:
									if (n instanceof eh) return n.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(n, 'Script'), new Error('unsafe value used in a script context'));
								case et.URL:
									return n instanceof rh || n instanceof th ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, 'URL'), vt(String(n)));
								case et.RESOURCE_URL:
									if (n instanceof rh) return n.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(n, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
								default:
									throw new Error('Unexpected SecurityContext ' + l + ' (see http://g.co/ng/security#xss)');
							}
						}),
						(n.prototype.checkNotSafeValue = function(l, n) {
							if (l instanceof lh) throw new Error('Required a safe ' + n + ', got a ' + l.getTypeName() + ' (see http://g.co/ng/security#xss)');
						}),
						(n.prototype.bypassSecurityTrustHtml = function(l) {
							return new nh(l);
						}),
						(n.prototype.bypassSecurityTrustStyle = function(l) {
							return new uh(l);
						}),
						(n.prototype.bypassSecurityTrustScript = function(l) {
							return new eh(l);
						}),
						(n.prototype.bypassSecurityTrustUrl = function(l) {
							return new th(l);
						}),
						(n.prototype.bypassSecurityTrustResourceUrl = function(l) {
							return new rh(l);
						}),
						n
					);
				})($p),
				lh = (function() {
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
				nh = (function(l) {
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
				})(lh),
				uh = (function(l) {
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
				})(lh),
				eh = (function(l) {
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
				})(lh),
				th = (function(l) {
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
				})(lh),
				rh = (function(l) {
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
				})(lh),
				sh = Nr(ys, 'browser', [
					{ provide: rr, useValue: 'browser' },
					{
						provide: tr,
						useValue: function() {
							op.makeCurrent(), fp.init();
						},
						multi: !0
					},
					{ provide: Vi, useClass: pp, deps: [ip] },
					{
						provide: ip,
						useFactory: function() {
							return document;
						},
						deps: []
					}
				]);
			function oh() {
				return new Yt();
			}
			var ah = (function() {
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
						return { ngModule: n, providers: [{ provide: nr, useValue: l.appId }, { provide: hp, useExisting: nr }, dp] };
					}),
					l
				);
			})();
			'undefined' != typeof window && window;
			var ih = (function() {
					return function(l, n) {
						(this.id = l), (this.url = n);
					};
				})(),
				ch = (function(l) {
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
				})(ih),
				ph = (function(l) {
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
				})(ih),
				hh = (function(l) {
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
				})(ih),
				dh = (function(l) {
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
				})(ih),
				fh = (function(l) {
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
				})(ih),
				gh = (function(l) {
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
				})(ih),
				mh = (function(l) {
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
				})(ih),
				bh = (function(l) {
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
				})(ih),
				yh = (function(l) {
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
				})(ih),
				vh = (function() {
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
				wh = (function() {
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
				jh = (function() {
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
				_h = (function() {
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
				xh = (function() {
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
				kh = (function() {
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
				Ch = (function() {
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
				Sh = (function() {
					return function() {};
				})(),
				Eh = 'primary',
				Ih = (function() {
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
			function Ph(l) {
				return new Ih(l);
			}
			var Oh = 'ngNavigationCancelingError';
			function Th(l) {
				var n = Error('NavigationCancelingError: ' + l);
				return (n[Oh] = !0), n;
			}
			function Mh(l, n, u) {
				var e = u.path.split('/');
				if (e.length > l.length) return null;
				if ('full' === u.pathMatch && (n.hasChildren() || e.length < l.length)) return null;
				for (var t = {}, r = 0; r < e.length; r++) {
					var s = e[r],
						o = l[r];
					if (s.startsWith(':')) t[s.substring(1)] = o;
					else if (s !== o.path) return null;
				}
				return { consumed: l.slice(0, e.length), posParams: t };
			}
			var Rh = (function() {
				return function(l, n) {
					(this.routes = l), (this.module = n);
				};
			})();
			function Ah(l, n) {
				void 0 === n && (n = '');
				for (var u = 0; u < l.length; u++) {
					var e = l[u];
					Nh(e, Dh(n, e));
				}
			}
			function Nh(l, n) {
				if (!l)
					throw new Error(
						"\n      Invalid configuration of route '" +
							n +
							"': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
					);
				if (Array.isArray(l)) throw new Error("Invalid configuration of route '" + n + "': Array cannot be specified");
				if (!l.component && !l.children && !l.loadChildren && l.outlet && l.outlet !== Eh)
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
				l.children && Ah(l.children, n);
			}
			function Dh(l, n) {
				return n ? (l || n.path ? (l && !n.path ? l + '/' : !l && n.path ? n.path : l + '/' + n.path) : '') : l;
			}
			function Vh(l) {
				var n = l.children && l.children.map(Vh),
					u = n ? r({}, l, { children: n }) : r({}, l);
				return !u.component && (n || u.loadChildren) && u.outlet && u.outlet !== Eh && (u.component = Sh), u;
			}
			function Uh(l, n) {
				var u,
					e = Object.keys(l),
					t = Object.keys(n);
				if (e.length != t.length) return !1;
				for (var r = 0; r < e.length; r++) if (l[(u = e[r])] !== n[u]) return !1;
				return !0;
			}
			function Lh(l) {
				return Array.prototype.concat.apply([], l);
			}
			function Hh(l) {
				return l.length > 0 ? l[l.length - 1] : null;
			}
			function Fh(l, n) {
				for (var u in l) l.hasOwnProperty(u) && n(l[u], u);
			}
			function zh(l) {
				return $t(l) ? l : Jt(l) ? tl(Promise.resolve(l)) : cc(l);
			}
			function Bh(l, n, u) {
				return u
					? (function(l, n) {
							return Uh(l, n);
					  })(l.queryParams, n.queryParams) &&
							(function l(n, u) {
								if (!Zh(n.segments, u.segments)) return !1;
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
									if (u.segments.length > t.length) return !!Zh((s = u.segments.slice(0, t.length)), t) && !e.hasChildren();
									if (u.segments.length === t.length) {
										if (!Zh(u.segments, t)) return !1;
										for (var r in e.children) {
											if (!u.children[r]) return !1;
											if (!l(u.children[r], e.children[r])) return !1;
										}
										return !0;
									}
									var s = t.slice(0, u.segments.length),
										o = t.slice(u.segments.length);
									return !!Zh(u.segments, s) && !!u.children[Eh] && n(u.children[Eh], e, o);
								})(n, u, u.segments);
							})(l.root, n.root);
			}
			var qh = (function() {
					function l(l, n, u) {
						(this.root = l), (this.queryParams = n), (this.fragment = u);
					}
					return (
						Object.defineProperty(l.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Ph(this.queryParams)), this._queryParamMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return Jh.serialize(this);
						}),
						l
					);
				})(),
				Gh = (function() {
					function l(l, n) {
						var u = this;
						(this.segments = l),
							(this.children = n),
							(this.parent = null),
							Fh(n, function(l, n) {
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
							return $h(this);
						}),
						l
					);
				})(),
				Qh = (function() {
					function l(l, n) {
						(this.path = l), (this.parameters = n);
					}
					return (
						Object.defineProperty(l.prototype, 'parameterMap', {
							get: function() {
								return this._parameterMap || (this._parameterMap = Ph(this.parameters)), this._parameterMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return td(this);
						}),
						l
					);
				})();
			function Zh(l, n) {
				return (
					l.length === n.length &&
					l.every(function(l, u) {
						return l.path === n[u].path;
					})
				);
			}
			function Wh(l, n) {
				var u = [];
				return (
					Fh(l.children, function(l, e) {
						e === Eh && (u = u.concat(n(l, e)));
					}),
					Fh(l.children, function(l, e) {
						e !== Eh && (u = u.concat(n(l, e)));
					}),
					u
				);
			}
			var Kh = (function() {
					return function() {};
				})(),
				Yh = (function() {
					function l() {}
					return (
						(l.prototype.parse = function(l) {
							var n = new id(l);
							return new qh(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment());
						}),
						(l.prototype.serialize = function(l) {
							var n, u;
							return (
								'/' +
								(function l(n, u) {
									if (!n.hasChildren()) return $h(n);
									if (u) {
										var e = n.children[Eh] ? l(n.children[Eh], !1) : '',
											t = [];
										return (
											Fh(n.children, function(n, u) {
												u !== Eh && t.push(u + ':' + l(n, !1));
											}),
											t.length > 0 ? e + '(' + t.join('//') + ')' : e
										);
									}
									var r = Wh(n, function(u, e) {
										return e === Eh ? [l(n.children[Eh], !1)] : [e + ':' + l(u, !1)];
									});
									return $h(n) + '/(' + r.join('//') + ')';
								})(l.root, !0) +
								((n = l.queryParams),
								(u = Object.keys(n).map(function(l) {
									var u = n[l];
									return Array.isArray(u)
										? u
												.map(function(n) {
													return ld(l) + '=' + ld(n);
												})
												.join('&')
										: ld(l) + '=' + ld(u);
								})).length
									? '?' + u.join('&')
									: '') +
								('string' == typeof l.fragment ? '#' + encodeURI(l.fragment) : '')
							);
						}),
						l
					);
				})(),
				Jh = new Yh();
			function $h(l) {
				return l.segments
					.map(function(l) {
						return td(l);
					})
					.join('/');
			}
			function Xh(l) {
				return encodeURIComponent(l)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function ld(l) {
				return Xh(l).replace(/%3B/gi, ';');
			}
			function nd(l) {
				return Xh(l)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function ud(l) {
				return decodeURIComponent(l);
			}
			function ed(l) {
				return ud(l.replace(/\+/g, '%20'));
			}
			function td(l) {
				return (
					'' +
					nd(l.path) +
					((n = l.parameters),
					Object.keys(n)
						.map(function(l) {
							return ';' + nd(l) + '=' + nd(n[l]);
						})
						.join(''))
				);
				var n;
			}
			var rd = /^[^\/()?;=#]+/;
			function sd(l) {
				var n = l.match(rd);
				return n ? n[0] : '';
			}
			var od = /^[^=?&#]+/,
				ad = /^[^?&#]+/,
				id = (function() {
					function l(l) {
						(this.url = l), (this.remaining = l);
					}
					return (
						(l.prototype.parseRootSegment = function() {
							return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new Gh([], {}) : new Gh([], this.parseChildren());
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
							return this.peekStartsWith('(') && (u = this.parseParens(!1)), (l.length > 0 || Object.keys(n).length > 0) && (u[Eh] = new Gh(l, n)), u;
						}),
						(l.prototype.parseSegment = function() {
							var l = sd(this.remaining);
							if ('' === l && this.peekStartsWith(';')) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
							return this.capture(l), new Qh(ud(l), this.parseMatrixParams());
						}),
						(l.prototype.parseMatrixParams = function() {
							for (var l = {}; this.consumeOptional(';'); ) this.parseParam(l);
							return l;
						}),
						(l.prototype.parseParam = function(l) {
							var n = sd(this.remaining);
							if (n) {
								this.capture(n);
								var u = '';
								if (this.consumeOptional('=')) {
									var e = sd(this.remaining);
									e && this.capture((u = e));
								}
								l[ud(n)] = ud(u);
							}
						}),
						(l.prototype.parseQueryParam = function(l) {
							var n,
								u = (n = this.remaining.match(od)) ? n[0] : '';
							if (u) {
								this.capture(u);
								var e = '';
								if (this.consumeOptional('=')) {
									var t = (function(l) {
										var n = l.match(ad);
										return n ? n[0] : '';
									})(this.remaining);
									t && this.capture((e = t));
								}
								var r = ed(u),
									s = ed(e);
								if (l.hasOwnProperty(r)) {
									var o = l[r];
									Array.isArray(o) || (l[r] = o = [o]), o.push(s);
								} else l[r] = s;
							}
						}),
						(l.prototype.parseParens = function(l) {
							var n = {};
							for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
								var u = sd(this.remaining),
									e = this.remaining[u.length];
								if ('/' !== e && ')' !== e && ';' !== e) throw new Error("Cannot parse url '" + this.url + "'");
								var t = void 0;
								u.indexOf(':') > -1 ? ((t = u.substr(0, u.indexOf(':'))), this.capture(t), this.capture(':')) : l && (t = Eh);
								var r = this.parseChildren();
								(n[t] = 1 === Object.keys(r).length ? r[Eh] : new Gh([], r)), this.consumeOptional('//');
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
				cd = (function() {
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
							var n = pd(l, this._root);
							return n
								? n.children.map(function(l) {
										return l.value;
								  })
								: [];
						}),
						(l.prototype.firstChild = function(l) {
							var n = pd(l, this._root);
							return n && n.children.length > 0 ? n.children[0].value : null;
						}),
						(l.prototype.siblings = function(l) {
							var n = hd(l, this._root);
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
							return hd(l, this._root).map(function(l) {
								return l.value;
							});
						}),
						l
					);
				})();
			function pd(l, n) {
				var u, e;
				if (l === n.value) return n;
				try {
					for (var t = a(n.children), r = t.next(); !r.done; r = t.next()) {
						var s = pd(l, r.value);
						if (s) return s;
					}
				} catch (o) {
					u = { error: o };
				} finally {
					try {
						r && !r.done && (e = t.return) && e.call(t);
					} finally {
						if (u) throw u.error;
					}
				}
				return null;
			}
			function hd(l, n) {
				var u, e;
				if (l === n.value) return [n];
				try {
					for (var t = a(n.children), r = t.next(); !r.done; r = t.next()) {
						var s = hd(l, r.value);
						if (s.length) return s.unshift(n), s;
					}
				} catch (o) {
					u = { error: o };
				} finally {
					try {
						r && !r.done && (e = t.return) && e.call(t);
					} finally {
						if (u) throw u.error;
					}
				}
				return [];
			}
			var dd = (function() {
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
			function fd(l) {
				var n = {};
				return (
					l &&
						l.children.forEach(function(l) {
							return (n[l.value.outlet] = l);
						}),
					n
				);
			}
			var gd = (function(l) {
				function n(n, u) {
					var e = l.call(this, n) || this;
					return (e.snapshot = u), jd(e, n), e;
				}
				return (
					t(n, l),
					(n.prototype.toString = function() {
						return this.snapshot.toString();
					}),
					n
				);
			})(cd);
			function md(l, n) {
				var u = (function(l, n) {
						var u = new vd([], {}, {}, '', {}, Eh, n, null, l.root, -1, {});
						return new wd('', new dd(u, []));
					})(l, n),
					e = new pc([new Qh('', {})]),
					t = new pc({}),
					r = new pc({}),
					s = new pc({}),
					o = new pc(''),
					a = new bd(e, t, s, o, r, Eh, n, u.root);
				return (a.snapshot = u.root), new gd(new dd(a, []), u);
			}
			var bd = (function() {
				function l(l, n, u, e, t, r, s, o) {
					(this.url = l), (this.params = n), (this.queryParams = u), (this.fragment = e), (this.data = t), (this.outlet = r), (this.component = s), (this._futureSnapshot = o);
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
										ll(function(l) {
											return Ph(l);
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
										ll(function(l) {
											return Ph(l);
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
			function yd(l, n) {
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
			var vd = (function() {
					function l(l, n, u, e, t, r, s, o, a, i, c) {
						(this.url = l),
							(this.params = n),
							(this.queryParams = u),
							(this.fragment = e),
							(this.data = t),
							(this.outlet = r),
							(this.component = s),
							(this.routeConfig = o),
							(this._urlSegment = a),
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
								return this._paramMap || (this._paramMap = Ph(this.params)), this._paramMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Ph(this.queryParams)), this._queryParamMap;
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
				wd = (function(l) {
					function n(n, u) {
						var e = l.call(this, u) || this;
						return (e.url = n), jd(e, u), e;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return _d(this._root);
						}),
						n
					);
				})(cd);
			function jd(l, n) {
				(n.value._routerState = l),
					n.children.forEach(function(n) {
						return jd(l, n);
					});
			}
			function _d(l) {
				var n = l.children.length > 0 ? ' { ' + l.children.map(_d).join(', ') + ' } ' : '';
				return '' + l.value + n;
			}
			function xd(l) {
				if (l.snapshot) {
					var n = l.snapshot,
						u = l._futureSnapshot;
					(l.snapshot = u),
						Uh(n.queryParams, u.queryParams) || l.queryParams.next(u.queryParams),
						n.fragment !== u.fragment && l.fragment.next(u.fragment),
						Uh(n.params, u.params) || l.params.next(u.params),
						(function(l, n) {
							if (l.length !== n.length) return !1;
							for (var u = 0; u < l.length; ++u) if (!Uh(l[u], n[u])) return !1;
							return !0;
						})(n.url, u.url) || l.url.next(u.url),
						Uh(n.data, u.data) || l.data.next(u.data);
				} else (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
			}
			function kd(l, n) {
				var u, e;
				return (
					Uh(l.params, n.params) &&
					Zh((u = l.url), (e = n.url)) &&
					u.every(function(l, n) {
						return Uh(l.parameters, e[n].parameters);
					}) &&
					!(!l.parent != !n.parent) &&
					(!l.parent || kd(l.parent, n.parent))
				);
			}
			function Cd(l) {
				return 'object' == typeof l && null != l && !l.outlets && !l.segmentPath;
			}
			function Sd(l, n, u, e, t) {
				var r = {};
				return (
					e &&
						Fh(e, function(l, n) {
							r[n] = Array.isArray(l)
								? l.map(function(l) {
										return '' + l;
								  })
								: '' + l;
						}),
					new qh(
						u.root === l
							? n
							: (function l(n, u, e) {
									var t = {};
									return (
										Fh(n.children, function(n, r) {
											t[r] = n === u ? e : l(n, u, e);
										}),
										new Gh(n.segments, t)
									);
							  })(u.root, l, n),
						r,
						t
					)
				);
			}
			var Ed = (function() {
					function l(l, n, u) {
						if (((this.isAbsolute = l), (this.numberOfDoubleDots = n), (this.commands = u), l && u.length > 0 && Cd(u[0]))) throw new Error('Root segment cannot have matrix parameters');
						var e = u.find(function(l) {
							return 'object' == typeof l && null != l && l.outlets;
						});
						if (e && e !== Hh(u)) throw new Error('{outlets:{}} has to be the last command');
					}
					return (
						(l.prototype.toRoot = function() {
							return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
						}),
						l
					);
				})(),
				Id = (function() {
					return function(l, n, u) {
						(this.segmentGroup = l), (this.processChildren = n), (this.index = u);
					};
				})();
			function Pd(l) {
				return 'object' == typeof l && null != l && l.outlets ? l.outlets[Eh] : '' + l;
			}
			function Od(l, n, u) {
				if ((l || (l = new Gh([], {})), 0 === l.segments.length && l.hasChildren())) return Td(l, n, u);
				var e = (function(l, n, u) {
						for (var e = 0, t = n, r = { match: !1, pathIndex: 0, commandIndex: 0 }; t < l.segments.length; ) {
							if (e >= u.length) return r;
							var s = l.segments[t],
								o = Pd(u[e]),
								a = e < u.length - 1 ? u[e + 1] : null;
							if (t > 0 && void 0 === o) break;
							if (o && a && 'object' == typeof a && void 0 === a.outlets) {
								if (!Nd(o, a, s)) return r;
								e += 2;
							} else {
								if (!Nd(o, {}, s)) return r;
								e++;
							}
							t++;
						}
						return { match: !0, pathIndex: t, commandIndex: e };
					})(l, n, u),
					t = u.slice(e.commandIndex);
				if (e.match && e.pathIndex < l.segments.length) {
					var r = new Gh(l.segments.slice(0, e.pathIndex), {});
					return (r.children[Eh] = new Gh(l.segments.slice(e.pathIndex), l.children)), Td(r, 0, t);
				}
				return e.match && 0 === t.length ? new Gh(l.segments, {}) : e.match && !l.hasChildren() ? Md(l, n, u) : e.match ? Td(l, 0, t) : Md(l, n, u);
			}
			function Td(l, n, u) {
				if (0 === u.length) return new Gh(l.segments, {});
				var e = (function(l) {
						var n, u;
						return 'object' != typeof l[0] ? (((n = {})[Eh] = l), n) : void 0 === l[0].outlets ? (((u = {})[Eh] = l), u) : l[0].outlets;
					})(u),
					t = {};
				return (
					Fh(e, function(u, e) {
						null !== u && (t[e] = Od(l.children[e], n, u));
					}),
					Fh(l.children, function(l, n) {
						void 0 === e[n] && (t[n] = l);
					}),
					new Gh(l.segments, t)
				);
			}
			function Md(l, n, u) {
				for (var e = l.segments.slice(0, n), t = 0; t < u.length; ) {
					if ('object' == typeof u[t] && void 0 !== u[t].outlets) {
						var r = Rd(u[t].outlets);
						return new Gh(e, r);
					}
					if (0 === t && Cd(u[0])) e.push(new Qh(l.segments[n].path, u[0])), t++;
					else {
						var s = Pd(u[t]),
							o = t < u.length - 1 ? u[t + 1] : null;
						s && o && Cd(o) ? (e.push(new Qh(s, Ad(o))), (t += 2)) : (e.push(new Qh(s, {})), t++);
					}
				}
				return new Gh(e, {});
			}
			function Rd(l) {
				var n = {};
				return (
					Fh(l, function(l, u) {
						null !== l && (n[u] = Md(new Gh([], {}), 0, l));
					}),
					n
				);
			}
			function Ad(l) {
				var n = {};
				return (
					Fh(l, function(l, u) {
						return (n[u] = '' + l);
					}),
					n
				);
			}
			function Nd(l, n, u) {
				return l == u.path && Uh(n, u.parameters);
			}
			var Dd = (function() {
				function l(l, n, u, e) {
					(this.routeReuseStrategy = l), (this.futureState = n), (this.currState = u), (this.forwardEvent = e);
				}
				return (
					(l.prototype.activate = function(l) {
						var n = this.futureState._root,
							u = this.currState ? this.currState._root : null;
						this.deactivateChildRoutes(n, u, l), xd(this.futureState.root), this.activateChildRoutes(n, u, l);
					}),
					(l.prototype.deactivateChildRoutes = function(l, n, u) {
						var e = this,
							t = fd(n);
						l.children.forEach(function(l) {
							var n = l.value.outlet;
							e.deactivateRoutes(l, t[n], u), delete t[n];
						}),
							Fh(t, function(l, n) {
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
							var t = fd(l),
								r = l.value.component ? e.children : n;
							Fh(t, function(l, n) {
								return u.deactivateRouteAndItsChildren(l, r);
							}),
								e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated());
						}
					}),
					(l.prototype.activateChildRoutes = function(l, n, u) {
						var e = this,
							t = fd(n);
						l.children.forEach(function(l) {
							e.activateRoutes(l, t[l.value.outlet], u), e.forwardEvent(new kh(l.value.snapshot));
						}),
							l.children.length && this.forwardEvent(new _h(l.value.snapshot));
					}),
					(l.prototype.activateRoutes = function(l, n, u) {
						var e = l.value,
							t = n ? n.value : null;
						if ((xd(e), e === t))
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
									Vd(s.route);
							} else {
								var o = (function(l) {
										for (var n = e.snapshot.parent; n; n = n.parent) {
											var u = n.routeConfig;
											if (u && u._loadedConfig) return u._loadedConfig;
											if (u && u.component) return null;
										}
										return null;
									})(),
									a = o ? o.module.componentFactoryResolver : null;
								(r.attachRef = null), (r.route = e), (r.resolver = a), r.outlet && r.outlet.activateWith(e, a), this.activateChildRoutes(l, null, r.children);
							}
						else this.activateChildRoutes(l, null, u);
					}),
					l
				);
			})();
			function Vd(l) {
				xd(l.value), l.children.forEach(Vd);
			}
			function Ud(l) {
				return 'function' == typeof l;
			}
			function Ld(l) {
				return l instanceof qh;
			}
			var Hd = (function() {
					return function(l) {
						this.segmentGroup = l || null;
					};
				})(),
				Fd = (function() {
					return function(l) {
						this.urlTree = l;
					};
				})();
			function zd(l) {
				return new R(function(n) {
					return n.error(new Hd(l));
				});
			}
			function Bd(l) {
				return new R(function(n) {
					return n.error(new Fd(l));
				});
			}
			function qd(l) {
				return new R(function(n) {
					return n.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + l + "'"));
				});
			}
			var Gd = (function() {
				function l(l, n, u, e, t) {
					(this.configLoader = n), (this.urlSerializer = u), (this.urlTree = e), (this.config = t), (this.allowRedirects = !0), (this.ngModule = l.get(Ze));
				}
				return (
					(l.prototype.apply = function() {
						var l = this;
						return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Eh)
							.pipe(
								ll(function(n) {
									return l.createUrlTree(n, l.urlTree.queryParams, l.urlTree.fragment);
								})
							)
							.pipe(
								Dc(function(n) {
									if (n instanceof Fd) return (l.allowRedirects = !1), l.match(n.urlTree);
									if (n instanceof Hd) throw l.noMatchError(n);
									throw n;
								})
							);
					}),
					(l.prototype.match = function(l) {
						var n = this;
						return this.expandSegmentGroup(this.ngModule, this.config, l.root, Eh)
							.pipe(
								ll(function(u) {
									return n.createUrlTree(u, l.queryParams, l.fragment);
								})
							)
							.pipe(
								Dc(function(l) {
									if (l instanceof Hd) throw n.noMatchError(l);
									throw l;
								})
							);
					}),
					(l.prototype.noMatchError = function(l) {
						return new Error("Cannot match any routes. URL Segment: '" + l.segmentGroup + "'");
					}),
					(l.prototype.createUrlTree = function(l, n, u) {
						var e,
							t = l.segments.length > 0 ? new Gh([], (((e = {})[Eh] = l), e)) : l;
						return new qh(t, n, u);
					}),
					(l.prototype.expandSegmentGroup = function(l, n, u, e) {
						return 0 === u.segments.length && u.hasChildren()
							? this.expandChildren(l, n, u).pipe(
									ll(function(l) {
										return new Gh([], l);
									})
							  )
							: this.expandSegment(l, u, n, u.segments, e, !0);
					}),
					(l.prototype.expandChildren = function(l, n, u) {
						var e = this;
						return (function(u, t) {
							if (0 === Object.keys(u).length) return cc({});
							var r = [],
								s = [],
								o = {};
							return (
								Fh(u, function(u, t) {
									var a,
										i,
										c = ((a = t), (i = u), e.expandSegmentGroup(l, n, i, a)).pipe(
											ll(function(l) {
												return (o[t] = l);
											})
										);
									t === Eh ? r.push(c) : s.push(c);
								}),
								cc.apply(null, r.concat(s)).pipe(
									yc(),
									Nc(),
									ll(function() {
										return o;
									})
								)
							);
						})(u.children);
					}),
					(l.prototype.expandSegment = function(l, n, u, e, t, r) {
						var s = this;
						return cc.apply(void 0, c(u)).pipe(
							ll(function(o) {
								return s.expandSegmentAgainstRoute(l, n, u, o, e, t, r).pipe(
									Dc(function(l) {
										if (l instanceof Hd) return cc(null);
										throw l;
									})
								);
							}),
							yc(),
							zc(function(l) {
								return !!l;
							}),
							Dc(function(l, u) {
								if (l instanceof dc || 'EmptyError' === l.name) {
									if (s.noLeftoversInUrl(n, e, t)) return cc(new Gh([], {}));
									throw new Hd(n);
								}
								throw l;
							})
						);
					}),
					(l.prototype.noLeftoversInUrl = function(l, n, u) {
						return 0 === n.length && !l.children[u];
					}),
					(l.prototype.expandSegmentAgainstRoute = function(l, n, u, e, t, r, s) {
						return Kd(e) !== r
							? zd(n)
							: void 0 === e.redirectTo
							? this.matchSegmentAgainstRoute(l, n, e, t)
							: s && this.allowRedirects
							? this.expandSegmentAgainstRouteUsingRedirect(l, n, u, e, t, r)
							: zd(n);
					}),
					(l.prototype.expandSegmentAgainstRouteUsingRedirect = function(l, n, u, e, t, r) {
						return '**' === e.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, u, e, r) : this.expandRegularSegmentAgainstRouteUsingRedirect(l, n, u, e, t, r);
					}),
					(l.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(l, n, u, e) {
						var t = this,
							r = this.applyRedirectCommands([], u.redirectTo, {});
						return u.redirectTo.startsWith('/')
							? Bd(r)
							: this.lineralizeSegments(u, r).pipe(
									rl(function(u) {
										var r = new Gh(u, {});
										return t.expandSegment(l, r, n, u, e, !1);
									})
							  );
					}),
					(l.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(l, n, u, e, t, r) {
						var s = this,
							o = Qd(n, e, t),
							a = o.consumedSegments,
							i = o.lastChild,
							c = o.positionalParamSegments;
						if (!o.matched) return zd(n);
						var p = this.applyRedirectCommands(a, e.redirectTo, c);
						return e.redirectTo.startsWith('/')
							? Bd(p)
							: this.lineralizeSegments(e, p).pipe(
									rl(function(e) {
										return s.expandSegment(l, n, u, e.concat(t.slice(i)), r, !1);
									})
							  );
					}),
					(l.prototype.matchSegmentAgainstRoute = function(l, n, u, e) {
						var t = this;
						if ('**' === u.path)
							return u.loadChildren
								? this.configLoader.load(l.injector, u).pipe(
										ll(function(l) {
											return (u._loadedConfig = l), new Gh(e, {});
										})
								  )
								: cc(new Gh(e, {}));
						var s = Qd(n, u, e),
							o = s.consumedSegments,
							i = s.lastChild;
						if (!s.matched) return zd(n);
						var c = e.slice(i);
						return this.getChildConfig(l, u, e).pipe(
							rl(function(l) {
								var u = l.module,
									e = l.routes,
									s = (function(l, n, u, e) {
										return u.length > 0 &&
											(function(l, n, u) {
												return e.some(function(u) {
													return Wd(l, n, u) && Kd(u) !== Eh;
												});
											})(l, u)
											? {
													segmentGroup: Zd(
														new Gh(
															n,
															(function(l, n) {
																var u,
																	e,
																	t = {};
																t[Eh] = n;
																try {
																	for (var r = a(l), s = r.next(); !s.done; s = r.next()) {
																		var o = s.value;
																		'' === o.path && Kd(o) !== Eh && (t[Kd(o)] = new Gh([], {}));
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
															})(e, new Gh(u, l.children))
														)
													),
													slicedSegments: []
											  }
											: 0 === u.length &&
											  (function(l, n, u) {
													return e.some(function(u) {
														return Wd(l, n, u);
													});
											  })(l, u)
											? {
													segmentGroup: Zd(
														new Gh(
															l.segments,
															(function(l, n, u, e) {
																var t,
																	s,
																	o = {};
																try {
																	for (var i = a(u), c = i.next(); !c.done; c = i.next()) {
																		var p = c.value;
																		Wd(l, n, p) && !e[Kd(p)] && (o[Kd(p)] = new Gh([], {}));
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
																return r({}, e, o);
															})(l, u, e, l.children)
														)
													),
													slicedSegments: u
											  }
											: { segmentGroup: l, slicedSegments: u };
									})(n, o, c, e),
									i = s.segmentGroup,
									p = s.slicedSegments;
								return 0 === p.length && i.hasChildren()
									? t.expandChildren(u, e, i).pipe(
											ll(function(l) {
												return new Gh(o, l);
											})
									  )
									: 0 === e.length && 0 === p.length
									? cc(new Gh(o, {}))
									: t.expandSegment(u, i, e, p, Eh, !0).pipe(
											ll(function(l) {
												return new Gh(o.concat(l.segments), l.children);
											})
									  );
							})
						);
					}),
					(l.prototype.getChildConfig = function(l, n, u) {
						var e = this;
						return n.children
							? cc(new Rh(n.children, l))
							: n.loadChildren
							? void 0 !== n._loadedConfig
								? cc(n._loadedConfig)
								: (function(l, n, u) {
										var e,
											t = n.canLoad;
										return t && 0 !== t.length
											? tl(t)
													.pipe(
														ll(function(e) {
															var t,
																r = l.get(e);
															if (
																(function(l) {
																	return l && Ud(l.canLoad);
																})(r)
															)
																t = r.canLoad(n, u);
															else {
																if (!Ud(r)) throw new Error('Invalid CanLoad guard');
																t = r(n, u);
															}
															return zh(t);
														})
													)
													.pipe(
														yc(),
														((e = function(l) {
															return !0 === l;
														}),
														function(l) {
															return l.lift(new Bc(e, void 0, l));
														})
													)
											: cc(!0);
								  })(l.injector, n, u).pipe(
										rl(function(u) {
											return u
												? e.configLoader.load(l.injector, n).pipe(
														ll(function(l) {
															return (n._loadedConfig = l), l;
														})
												  )
												: (function(l) {
														return new R(function(n) {
															return n.error(Th('Cannot load children because the guard of the route "path: \'' + l.path + '\'" returned false'));
														});
												  })(n);
										})
								  )
							: cc(new Rh([], l));
					}),
					(l.prototype.lineralizeSegments = function(l, n) {
						for (var u = [], e = n.root; ; ) {
							if (((u = u.concat(e.segments)), 0 === e.numberOfChildren)) return cc(u);
							if (e.numberOfChildren > 1 || !e.children[Eh]) return qd(l.redirectTo);
							e = e.children[Eh];
						}
					}),
					(l.prototype.applyRedirectCommands = function(l, n, u) {
						return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), l, u);
					}),
					(l.prototype.applyRedirectCreatreUrlTree = function(l, n, u, e) {
						var t = this.createSegmentGroup(l, n.root, u, e);
						return new qh(t, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment);
					}),
					(l.prototype.createQueryParams = function(l, n) {
						var u = {};
						return (
							Fh(l, function(l, e) {
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
							Fh(n.children, function(n, r) {
								s[r] = t.createSegmentGroup(l, n, u, e);
							}),
							new Gh(r, s)
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
							for (var r = a(n), s = r.next(); !s.done; s = r.next()) {
								var o = s.value;
								if (o.path === l.path) return n.splice(t), o;
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
			function Qd(l, n, u) {
				if ('' === n.path)
					return 'full' === n.pathMatch && (l.hasChildren() || u.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				var e = (n.matcher || Mh)(u, l, n);
				return e
					? { matched: !0, consumedSegments: e.consumed, lastChild: e.consumed.length, positionalParamSegments: e.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function Zd(l) {
				if (1 === l.numberOfChildren && l.children[Eh]) {
					var n = l.children[Eh];
					return new Gh(l.segments.concat(n.segments), n.children);
				}
				return l;
			}
			function Wd(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 !== u.redirectTo;
			}
			function Kd(l) {
				return l.outlet || Eh;
			}
			var Yd = (function() {
					return function(l) {
						(this.path = l), (this.route = this.path[this.path.length - 1]);
					};
				})(),
				Jd = (function() {
					return function(l, n) {
						(this.component = l), (this.route = n);
					};
				})();
			function $d(l, n, u) {
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
			function Xd(l, n, u, e, t) {
				void 0 === t && (t = { canDeactivateChecks: [], canActivateChecks: [] });
				var r = fd(n);
				return (
					l.children.forEach(function(l) {
						!(function(l, n, u, e, t) {
							void 0 === t && (t = { canDeactivateChecks: [], canActivateChecks: [] });
							var r = l.value,
								s = n ? n.value : null,
								o = u ? u.getContext(l.value.outlet) : null;
							if (s && r.routeConfig === s.routeConfig) {
								var a = (function(l, n, u) {
									if ('function' == typeof u) return u(l, n);
									switch (u) {
										case 'pathParamsChange':
											return !Zh(l.url, n.url);
										case 'pathParamsOrQueryParamsChange':
											return !Zh(l.url, n.url) || !Uh(l.queryParams, n.queryParams);
										case 'always':
											return !0;
										case 'paramsOrQueryParamsChange':
											return !kd(l, n) || !Uh(l.queryParams, n.queryParams);
										case 'paramsChange':
										default:
											return !kd(l, n);
									}
								})(s, r, r.routeConfig.runGuardsAndResolvers);
								a ? t.canActivateChecks.push(new Yd(e)) : ((r.data = s.data), (r._resolvedData = s._resolvedData)),
									Xd(l, n, r.component ? (o ? o.children : null) : u, e, t),
									a && t.canDeactivateChecks.push(new Jd((o && o.outlet && o.outlet.component) || null, s));
							} else s && lf(n, o, t), t.canActivateChecks.push(new Yd(e)), Xd(l, null, r.component ? (o ? o.children : null) : u, e, t);
						})(l, r[l.value.outlet], u, e.concat([l.value]), t),
							delete r[l.value.outlet];
					}),
					Fh(r, function(l, n) {
						return lf(l, u.getContext(n), t);
					}),
					t
				);
			}
			function lf(l, n, u) {
				var e = fd(l),
					t = l.value;
				Fh(e, function(l, e) {
					lf(l, t.component ? (n ? n.children.getContext(e) : null) : n, u);
				}),
					u.canDeactivateChecks.push(new Jd(t.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, t));
			}
			var nf = Symbol('INITIAL_VALUE');
			function uf() {
				return Gc(function(l) {
					return function() {
						for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
						var u = null,
							e = null;
						return F(l[l.length - 1]) && (e = l.pop()), 'function' == typeof l[l.length - 1] && (u = l.pop()), 1 === l.length && p(l[0]) && (l = l[0]), el(l, e).lift(new gc(u));
					}
						.apply(
							void 0,
							c(
								l.map(function(l) {
									return l.pipe(
										Lc(1),
										(function() {
											for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
											return function(n) {
												var u = l[l.length - 1];
												F(u) ? l.pop() : (u = null);
												var e = l.length;
												return (function() {
													for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
													return 1 === l.length || (2 === l.length && F(l[1])) ? tl(l[0]) : yc()(cc.apply(void 0, l));
												})(1 !== e || u ? (e > 0 ? el(l, u) : ac(u)) : ic(l[0]), n);
											};
										})(nf)
									);
								})
							)
						)
						.pipe(
							Wc(function(l, n) {
								var u = !1;
								return n.reduce(function(l, e, t) {
									if (l !== nf) return l;
									if ((e === nf && (u = !0), !u)) {
										if (!1 === e) return e;
										if (t === n.length - 1 || Ld(e)) return e;
									}
									return l;
								}, l);
							}, nf),
							vc(function(l) {
								return l !== nf;
							}),
							ll(function(l) {
								return Ld(l) ? l : !0 === l;
							}),
							Lc(1)
						);
				});
			}
			function ef(l, n) {
				return null !== l && n && n(new xh(l)), cc(!0);
			}
			function tf(l, n) {
				return null !== l && n && n(new jh(l)), cc(!0);
			}
			function rf(l, n, u) {
				var e = n.routeConfig ? n.routeConfig.canActivate : null;
				return e && 0 !== e.length
					? cc(
							e.map(function(e) {
								return bc(function() {
									var t,
										r = $d(e, n, u);
									if (
										(function(l) {
											return l && Ud(l.canActivate);
										})(r)
									)
										t = zh(r.canActivate(n, l));
									else {
										if (!Ud(r)) throw new Error('Invalid CanActivate guard');
										t = zh(r(n, l));
									}
									return t.pipe(zc());
								});
							})
					  ).pipe(uf())
					: cc(!0);
			}
			function sf(l, n, u) {
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
							return bc(function() {
								return cc(
									n.guards.map(function(t) {
										var r,
											s = $d(t, n.node, u);
										if (
											(function(l) {
												return l && Ud(l.canActivateChild);
											})(s)
										)
											r = zh(s.canActivateChild(e, l));
										else {
											if (!Ud(s)) throw new Error('Invalid CanActivateChild guard');
											r = zh(s(e, l));
										}
										return r.pipe(zc());
									})
								).pipe(uf());
							});
						});
				return cc(t).pipe(uf());
			}
			var of = (function() {
					return function() {};
				})(),
				af = (function() {
					function l(l, n, u, e, t, r) {
						(this.rootComponentType = l), (this.config = n), (this.urlTree = u), (this.url = e), (this.paramsInheritanceStrategy = t), (this.relativeLinkResolution = r);
					}
					return (
						(l.prototype.recognize = function() {
							try {
								var l = hf(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
									n = this.processSegmentGroup(this.config, l, Eh),
									u = new vd(
										[],
										Object.freeze({}),
										Object.freeze(r({}, this.urlTree.queryParams)),
										this.urlTree.fragment,
										{},
										Eh,
										this.rootComponentType,
										null,
										this.urlTree.root,
										-1,
										{}
									),
									e = new dd(u, n),
									t = new wd(this.url, e);
								return this.inheritParamsAndData(t._root), cc(t);
							} catch (s) {
								return new R(function(l) {
									return l.error(s);
								});
							}
						}),
						(l.prototype.inheritParamsAndData = function(l) {
							var n = this,
								u = l.value,
								e = yd(u, this.paramsInheritanceStrategy);
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
								t = Wh(n, function(n, u) {
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
									return l.value.outlet === Eh ? -1 : n.value.outlet === Eh ? 1 : l.value.outlet.localeCompare(n.value.outlet);
								}),
								t
							);
						}),
						(l.prototype.processSegment = function(l, n, u, e) {
							var t, r;
							try {
								for (var s = a(l), o = s.next(); !o.done; o = s.next()) {
									var i = o.value;
									try {
										return this.processSegmentAgainstRoute(i, n, u, e);
									} catch (c) {
										if (!(c instanceof of)) throw c;
									}
								}
							} catch (p) {
								t = { error: p };
							} finally {
								try {
									o && !o.done && (r = s.return) && r.call(s);
								} finally {
									if (t) throw t.error;
								}
							}
							if (this.noLeftoversInUrl(n, u, e)) return [];
							throw new of();
						}),
						(l.prototype.noLeftoversInUrl = function(l, n, u) {
							return 0 === n.length && !l.children[u];
						}),
						(l.prototype.processSegmentAgainstRoute = function(l, n, u, e) {
							if (l.redirectTo) throw new of();
							if ((l.outlet || Eh) !== e) throw new of();
							var t,
								s = [],
								o = [];
							if ('**' === l.path) {
								var a = u.length > 0 ? Hh(u).parameters : {};
								t = new vd(u, a, Object.freeze(r({}, this.urlTree.queryParams)), this.urlTree.fragment, gf(l), e, l.component, l, cf(n), pf(n) + u.length, mf(l));
							} else {
								var i = (function(l, n, u) {
									if ('' === n.path) {
										if ('full' === n.pathMatch && (l.hasChildren() || u.length > 0)) throw new of();
										return { consumedSegments: [], lastChild: 0, parameters: {} };
									}
									var e = (n.matcher || Mh)(u, l, n);
									if (!e) throw new of();
									var t = {};
									Fh(e.posParams, function(l, n) {
										t[n] = l.path;
									});
									var s = e.consumed.length > 0 ? r({}, t, e.consumed[e.consumed.length - 1].parameters) : t;
									return { consumedSegments: e.consumed, lastChild: e.consumed.length, parameters: s };
								})(n, l, u);
								(s = i.consumedSegments),
									(o = u.slice(i.lastChild)),
									(t = new vd(s, i.parameters, Object.freeze(r({}, this.urlTree.queryParams)), this.urlTree.fragment, gf(l), e, l.component, l, cf(n), pf(n) + s.length, mf(l)));
							}
							var c = (function(l) {
									return l.children ? l.children : l.loadChildren ? l._loadedConfig.routes : [];
								})(l),
								p = hf(n, s, o, c, this.relativeLinkResolution),
								h = p.segmentGroup,
								d = p.slicedSegments;
							if (0 === d.length && h.hasChildren()) {
								var f = this.processChildren(c, h);
								return [new dd(t, f)];
							}
							if (0 === c.length && 0 === d.length) return [new dd(t, [])];
							var g = this.processSegment(c, h, d, Eh);
							return [new dd(t, g)];
						}),
						l
					);
				})();
			function cf(l) {
				for (var n = l; n._sourceSegment; ) n = n._sourceSegment;
				return n;
			}
			function pf(l) {
				for (var n = l, u = n._segmentIndexShift ? n._segmentIndexShift : 0; n._sourceSegment; ) u += (n = n._sourceSegment)._segmentIndexShift ? n._segmentIndexShift : 0;
				return u - 1;
			}
			function hf(l, n, u, e, t) {
				if (
					u.length > 0 &&
					(function(l, n, u) {
						return e.some(function(u) {
							return df(l, n, u) && ff(u) !== Eh;
						});
					})(l, u)
				) {
					var s = new Gh(
						n,
						(function(l, n, u, e) {
							var t,
								r,
								s = {};
							(s[Eh] = e), (e._sourceSegment = l), (e._segmentIndexShift = n.length);
							try {
								for (var o = a(u), i = o.next(); !i.done; i = o.next()) {
									var c = i.value;
									if ('' === c.path && ff(c) !== Eh) {
										var p = new Gh([], {});
										(p._sourceSegment = l), (p._segmentIndexShift = n.length), (s[ff(c)] = p);
									}
								}
							} catch (h) {
								t = { error: h };
							} finally {
								try {
									i && !i.done && (r = o.return) && r.call(o);
								} finally {
									if (t) throw t.error;
								}
							}
							return s;
						})(l, n, e, new Gh(u, l.children))
					);
					return (s._sourceSegment = l), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: [] };
				}
				if (
					0 === u.length &&
					(function(l, n, u) {
						return e.some(function(u) {
							return df(l, n, u);
						});
					})(l, u)
				) {
					var o = new Gh(
						l.segments,
						(function(l, n, u, e, t, s) {
							var o,
								i,
								c = {};
							try {
								for (var p = a(e), h = p.next(); !h.done; h = p.next()) {
									var d = h.value;
									if (df(l, u, d) && !t[ff(d)]) {
										var f = new Gh([], {});
										(f._sourceSegment = l), (f._segmentIndexShift = 'legacy' === s ? l.segments.length : n.length), (c[ff(d)] = f);
									}
								}
							} catch (g) {
								o = { error: g };
							} finally {
								try {
									h && !h.done && (i = p.return) && i.call(p);
								} finally {
									if (o) throw o.error;
								}
							}
							return r({}, t, c);
						})(l, n, u, e, l.children, t)
					);
					return (o._sourceSegment = l), (o._segmentIndexShift = n.length), { segmentGroup: o, slicedSegments: u };
				}
				var i = new Gh(l.segments, l.children);
				return (i._sourceSegment = l), (i._segmentIndexShift = n.length), { segmentGroup: i, slicedSegments: u };
			}
			function df(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 === u.redirectTo;
			}
			function ff(l) {
				return l.outlet || Eh;
			}
			function gf(l) {
				return l.data || {};
			}
			function mf(l) {
				return l.resolve || {};
			}
			function bf(l, n, u, e) {
				var t = $d(l, n, e);
				return zh(t.resolve ? t.resolve(n, u) : t(n, u));
			}
			function yf(l) {
				return function(n) {
					return n.pipe(
						Gc(function(n) {
							var u = l(n);
							return u
								? tl(u).pipe(
										ll(function() {
											return n;
										})
								  )
								: tl([n]);
						})
					);
				};
			}
			var vf = (function() {
					return function() {};
				})(),
				wf = (function() {
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
				jf = new Sl('ROUTES'),
				_f = (function() {
					function l(l, n, u, e) {
						(this.loader = l), (this.compiler = n), (this.onLoadStartListener = u), (this.onLoadEndListener = e);
					}
					return (
						(l.prototype.load = function(l, n) {
							var u = this;
							return (
								this.onLoadStartListener && this.onLoadStartListener(n),
								this.loadModuleFactory(n.loadChildren).pipe(
									ll(function(e) {
										u.onLoadEndListener && u.onLoadEndListener(n);
										var t = e.create(l);
										return new Rh(Lh(t.injector.get(jf)).map(Vh), t);
									})
								)
							);
						}),
						(l.prototype.loadModuleFactory = function(l) {
							var n = this;
							return 'string' == typeof l
								? tl(this.loader.load(l))
								: zh(l()).pipe(
										rl(function(l) {
											return l instanceof We ? cc(l) : tl(n.compiler.compileModuleAsync(l));
										})
								  );
						}),
						l
					);
				})(),
				xf = (function() {
					return function() {};
				})(),
				kf = (function() {
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
			function Cf(l) {
				throw l;
			}
			function Sf(l, n, u) {
				return n.parse('/');
			}
			function Ef(l, n) {
				return cc(null);
			}
			var If = (function() {
					function l(l, n, u, e, t, r, s, o) {
						var a = this;
						(this.rootComponentType = l),
							(this.urlSerializer = n),
							(this.rootContexts = u),
							(this.location = e),
							(this.config = o),
							(this.lastSuccessfulNavigation = null),
							(this.currentNavigation = null),
							(this.navigationId = 0),
							(this.isNgZoneEnabled = !1),
							(this.events = new L()),
							(this.errorHandler = Cf),
							(this.malformedUriErrorHandler = Sf),
							(this.navigated = !1),
							(this.lastSuccessfulId = -1),
							(this.hooks = { beforePreactivation: Ef, afterPreactivation: Ef }),
							(this.urlHandlingStrategy = new kf()),
							(this.routeReuseStrategy = new wf()),
							(this.onSameUrlNavigation = 'ignore'),
							(this.paramsInheritanceStrategy = 'emptyOnly'),
							(this.urlUpdateStrategy = 'deferred'),
							(this.relativeLinkResolution = 'legacy'),
							(this.ngModule = t.get(Ze)),
							(this.console = t.get(or));
						var i = t.get(_r);
						(this.isNgZoneEnabled = i instanceof _r),
							this.resetConfig(o),
							(this.currentUrlTree = new qh(new Gh([], {}), {}, null)),
							(this.rawUrlTree = this.currentUrlTree),
							(this.browserUrlTree = this.parseUrl(this.location.path())),
							(this.configLoader = new _f(
								r,
								s,
								function(l) {
									return a.triggerEvent(new vh(l));
								},
								function(l) {
									return a.triggerEvent(new wh(l));
								}
							)),
							(this.routerState = md(this.currentUrlTree, this.rootComponentType)),
							(this.transitions = new pc({
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
								vc(function(l) {
									return 0 !== l.id;
								}),
								ll(function(l) {
									return r({}, l, { extractedUrl: n.urlHandlingStrategy.extract(l.rawUrl) });
								}),
								Ec(function(l) {
									n.currentNavigation = {
										id: l.id,
										initialUrl: l.currentRawUrl,
										extractedUrl: l.extractedUrl,
										trigger: l.source,
										extras: l.extras,
										previousNavigation: n.lastSuccessfulNavigation ? r({}, n.lastSuccessfulNavigation, { previousNavigation: null }) : null
									};
								}),
								Gc(function(l) {
									var e,
										t,
										s,
										o,
										i = !1,
										c = !1;
									return cc(l).pipe(
										Gc(function(l) {
											var e,
												t,
												s,
												o,
												a = !n.navigated || l.extractedUrl.toString() !== n.browserUrlTree.toString();
											if (('reload' === n.onSameUrlNavigation || a) && n.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
												return cc(l).pipe(
													Gc(function(l) {
														var e = n.transitions.getValue();
														return u.next(new ch(l.id, n.serializeUrl(l.extractedUrl), l.source, l.restoredState)), e !== n.transitions.getValue() ? oc : [l];
													}),
													Gc(function(l) {
														return Promise.resolve(l);
													}),
													((e = n.ngModule.injector),
													(t = n.configLoader),
													(s = n.urlSerializer),
													(o = n.config),
													function(l) {
														return l.pipe(
															Gc(function(l) {
																return (function(n, u, e, t, r) {
																	return new Gd(n, u, e, l.extractedUrl, r).apply();
																})(e, t, s, 0, o).pipe(
																	ll(function(n) {
																		return r({}, l, { urlAfterRedirects: n });
																	})
																);
															})
														);
													}),
													Ec(function(l) {
														n.currentNavigation = r({}, n.currentNavigation, { finalUrl: l.urlAfterRedirects });
													}),
													(function(l, u, e, t, s) {
														return function(e) {
															return e.pipe(
																rl(function(e) {
																	return (function(l, n, u, e, t, r) {
																		return void 0 === t && (t = 'emptyOnly'), void 0 === r && (r = 'legacy'), new af(l, n, u, e, t, r).recognize();
																	})(l, u, e.urlAfterRedirects, ((o = e.urlAfterRedirects), n.serializeUrl(o)), t, s).pipe(
																		ll(function(l) {
																			return r({}, e, { targetSnapshot: l });
																		})
																	);
																	var o;
																})
															);
														};
													})(n.rootComponentType, n.config, 0, n.paramsInheritanceStrategy, n.relativeLinkResolution),
													Ec(function(l) {
														'eager' === n.urlUpdateStrategy &&
															(l.extras.skipLocationChange || n.setBrowserUrl(l.urlAfterRedirects, !!l.extras.replaceUrl, l.id),
															(n.browserUrlTree = l.urlAfterRedirects));
													}),
													Ec(function(l) {
														var e = new fh(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														u.next(e);
													})
												);
											if (a && n.rawUrlTree && n.urlHandlingStrategy.shouldProcessUrl(n.rawUrlTree)) {
												var i = l.extractedUrl,
													c = l.source,
													p = l.restoredState,
													h = l.extras,
													d = new ch(l.id, n.serializeUrl(i), c, p);
												u.next(d);
												var f = md(i, n.rootComponentType).snapshot;
												return cc(r({}, l, { targetSnapshot: f, urlAfterRedirects: i, extras: r({}, h, { skipLocationChange: !1, replaceUrl: !1 }) }));
											}
											return (n.rawUrlTree = l.rawUrl), l.resolve(null), oc;
										}),
										yf(function(l) {
											var u = l.extras;
											return n.hooks.beforePreactivation(l.targetSnapshot, {
												navigationId: l.id,
												appliedUrlTree: l.extractedUrl,
												rawUrlTree: l.rawUrl,
												skipLocationChange: !!u.skipLocationChange,
												replaceUrl: !!u.replaceUrl
											});
										}),
										Ec(function(l) {
											var u = new gh(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
											n.triggerEvent(u);
										}),
										ll(function(l) {
											return r({}, l, {
												guards: ((u = l.targetSnapshot), (e = l.currentSnapshot), (t = n.rootContexts), (s = u._root), Xd(s, e ? e._root : null, t, [s.value]))
											});
											var u, e, t, s;
										}),
										(function(l, n) {
											return function(u) {
												return u.pipe(
													rl(function(u) {
														var e = u.targetSnapshot,
															t = u.currentSnapshot,
															s = u.guards,
															o = s.canActivateChecks,
															a = s.canDeactivateChecks;
														return 0 === a.length && 0 === o.length
															? cc(r({}, u, { guardsResult: !0 }))
															: (function(l, n, u, e) {
																	return tl(a).pipe(
																		rl(function(l) {
																			return (function(l, n, u, e, t) {
																				var r = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
																				return r && 0 !== r.length
																					? cc(
																							r.map(function(r) {
																								var s,
																									o = $d(r, n, t);
																								if (
																									(function(l) {
																										return l && Ud(l.canDeactivate);
																									})(o)
																								)
																									s = zh(o.canDeactivate(l, n, u, e));
																								else {
																									if (!Ud(o)) throw new Error('Invalid CanDeactivate guard');
																									s = zh(o(l, n, u, e));
																								}
																								return s.pipe(zc());
																							})
																					  ).pipe(uf())
																					: cc(!0);
																			})(l.component, l.route, u, n, e);
																		}),
																		zc(function(l) {
																			return !0 !== l;
																		}, !0)
																	);
															  })(0, e, t, l).pipe(
																	rl(function(u) {
																		return u && 'boolean' == typeof u
																			? (function(l, n, u, e) {
																					return tl(o).pipe(
																						Jc(function(n) {
																							return tl([tf(n.route.parent, e), ef(n.route, e), sf(l, n.path, u), rf(l, n.route, u)]).pipe(
																								yc(),
																								zc(function(l) {
																									return !0 !== l;
																								}, !0)
																							);
																						}),
																						zc(function(l) {
																							return !0 !== l;
																						}, !0)
																					);
																			  })(e, 0, l, n)
																			: cc(u);
																	}),
																	ll(function(l) {
																		return r({}, u, { guardsResult: l });
																	})
															  );
													})
												);
											};
										})(n.ngModule.injector, function(l) {
											return n.triggerEvent(l);
										}),
										Ec(function(l) {
											if (Ld(l.guardsResult)) {
												var u = Th('Redirecting to "' + n.serializeUrl(l.guardsResult) + '"');
												throw ((u.url = l.guardsResult), u);
											}
										}),
										Ec(function(l) {
											var u = new mh(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
											n.triggerEvent(u);
										}),
										vc(function(l) {
											if (!l.guardsResult) {
												n.resetUrlToCurrentUrlTree();
												var e = new hh(l.id, n.serializeUrl(l.extractedUrl), '');
												return u.next(e), l.resolve(!1), !1;
											}
											return !0;
										}),
										yf(function(l) {
											if (l.guards.canActivateChecks.length)
												return cc(l).pipe(
													Ec(function(l) {
														var u = new bh(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														n.triggerEvent(u);
													}),
													((u = n.paramsInheritanceStrategy),
													(e = n.ngModule.injector),
													function(l) {
														return l.pipe(
															rl(function(l) {
																var n = l.targetSnapshot,
																	t = l.guards.canActivateChecks;
																return t.length
																	? tl(t).pipe(
																			Jc(function(l) {
																				return (function(l, u, e, t) {
																					return (function(l, n, u, e) {
																						var t = Object.keys(l);
																						if (0 === t.length) return cc({});
																						if (1 === t.length) {
																							var r = t[0];
																							return bf(l[r], n, u, e).pipe(
																								ll(function(l) {
																									var n;
																									return ((n = {})[r] = l), n;
																								})
																							);
																						}
																						var s = {};
																						return tl(t)
																							.pipe(
																								rl(function(t) {
																									return bf(l[t], n, u, e).pipe(
																										ll(function(l) {
																											return (s[t] = l), l;
																										})
																									);
																								})
																							)
																							.pipe(
																								Nc(),
																								ll(function() {
																									return s;
																								})
																							);
																					})(l._resolve, l, n, t).pipe(
																						ll(function(n) {
																							return (l._resolvedData = n), (l.data = r({}, l.data, yd(l, e).resolve)), null;
																						})
																					);
																				})(l.route, 0, u, e);
																			}),
																			(function(l, n) {
																				return arguments.length >= 2
																					? function(n) {
																							return T(Wc(l, void 0), kc(1), Mc(void 0))(n);
																					  }
																					: function(n) {
																							return T(
																								Wc(function(n, u, e) {
																									return l(n);
																								}),
																								kc(1)
																							)(n);
																					  };
																			})(function(l, n) {
																				return l;
																			}),
																			ll(function(n) {
																				return l;
																			})
																	  )
																	: cc(l);
															})
														);
													}),
													Ec(function(l) {
														var u = new yh(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														n.triggerEvent(u);
													})
												);
											var u, e;
										}),
										yf(function(l) {
											var u = l.extras;
											return n.hooks.afterPreactivation(l.targetSnapshot, {
												navigationId: l.id,
												appliedUrlTree: l.extractedUrl,
												rawUrlTree: l.rawUrl,
												skipLocationChange: !!u.skipLocationChange,
												replaceUrl: !!u.replaceUrl
											});
										}),
										ll(function(l) {
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
																	for (var s = a(e.children), o = s.next(); !o.done; o = s.next()) {
																		var i = o.value;
																		if (n.shouldReuseRoute(i.value.snapshot, u.value)) return l(n, u, i);
																	}
																} catch (c) {
																	t = { error: c };
																} finally {
																	try {
																		o && !o.done && (r = s.return) && r.call(s);
																	} finally {
																		if (t) throw t.error;
																	}
																}
																return l(n, u);
															});
														})(n, u, e);
														return new dd(i, t);
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
													var o,
														i = new bd(new pc((o = u.value).url), new pc(o.params), new pc(o.queryParams), new pc(o.fragment), new pc(o.data), o.outlet, o.component, o);
													return (
														(t = u.children.map(function(u) {
															return l(n, u);
														})),
														new dd(i, t)
													);
												})(n.routeReuseStrategy, (u = l.targetSnapshot)._root, (e = l.currentRouterState) ? e._root : void 0)),
												new gd(t, u));
											return r({}, l, { targetRouterState: s });
										}),
										Ec(function(l) {
											(n.currentUrlTree = l.urlAfterRedirects),
												(n.rawUrlTree = n.urlHandlingStrategy.merge(n.currentUrlTree, l.rawUrl)),
												(n.routerState = l.targetRouterState),
												'deferred' === n.urlUpdateStrategy &&
													(l.extras.skipLocationChange || n.setBrowserUrl(n.rawUrlTree, !!l.extras.replaceUrl, l.id, l.extras.state),
													(n.browserUrlTree = l.urlAfterRedirects));
										}),
										((t = n.rootContexts),
										(s = n.routeReuseStrategy),
										(o = function(l) {
											return n.triggerEvent(l);
										}),
										ll(function(l) {
											return new Dd(s, l.targetRouterState, l.currentRouterState, o).activate(t), l;
										})),
										Ec({
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
												var e = new hh(l.id, n.serializeUrl(l.extractedUrl), 'Navigation ID ' + l.id + ' is not equal to the current navigation id ' + n.navigationId);
												u.next(e), l.resolve(!1);
											}
											n.currentNavigation = null;
										}),
										function(l) {
											return l.lift(new $c(e));
										}),
										Dc(function(e) {
											if (((c = !0), (o = e) && o[Oh])) {
												n.navigated = !0;
												var t = Ld(e.url);
												t || n.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl);
												var r = new hh(l.id, n.serializeUrl(l.extractedUrl), e.message);
												u.next(r), l.resolve(!1), t && n.navigateByUrl(e.url);
											} else {
												n.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl);
												var s = new dh(l.id, n.serializeUrl(l.extractedUrl), e);
												u.next(s);
												try {
													l.resolve(n.errorHandler(e));
												} catch (a) {
													l.reject(a);
												}
											}
											var o;
											return oc;
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
							Ah(l), (this.config = l.map(Vh)), (this.navigated = !1), (this.lastSuccessfulId = -1);
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
								o = n.queryParamsHandling,
								a = n.preserveFragment;
							gt() && s && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
							var i = u || this.routerState.root,
								p = a ? this.currentUrlTree.fragment : t,
								h = null;
							if (o)
								switch (o) {
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
									if (0 === u.length) return Sd(n.root, n.root, n, e, t);
									var r = (function(l) {
										if ('string' == typeof l[0] && 1 === l.length && '/' === l[0]) return new Ed(!0, 0, l);
										var n = 0,
											u = !1,
											e = l.reduce(function(l, e, t) {
												if ('object' == typeof e && null != e) {
													if (e.outlets) {
														var r = {};
														return (
															Fh(e.outlets, function(l, n) {
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
										return new Ed(u, n, e);
									})(u);
									if (r.toRoot()) return Sd(n.root, new Gh([], {}), n, e, t);
									var s = (function(l, u, e) {
											if (l.isAbsolute) return new Id(n.root, !0, 0);
											if (-1 === e.snapshot._lastPathIndex) return new Id(e.snapshot._urlSegment, !0, 0);
											var t = Cd(l.commands[0]) ? 0 : 1;
											return (function(n, u, r) {
												for (var s = e.snapshot._urlSegment, o = e.snapshot._lastPathIndex + t, a = l.numberOfDoubleDots; a > o; ) {
													if (((a -= o), !(s = s.parent))) throw new Error("Invalid number of '../'");
													o = s.segments.length;
												}
												return new Id(s, !1, o - a);
											})();
										})(r, 0, l),
										o = s.processChildren ? Td(s.segmentGroup, s.index, r.commands) : Od(s.segmentGroup, s.index, r.commands);
									return Sd(s.segmentGroup, o, n, e, t);
								})(i, this.currentUrlTree, l, h, p)
							);
						}),
						(l.prototype.navigateByUrl = function(l, n) {
							void 0 === n && (n = { skipLocationChange: !1 }),
								gt() && this.isNgZoneEnabled && !_r.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
							var u = Ld(l) ? l : this.parseUrl(l),
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
							if (Ld(l)) return Bh(this.currentUrlTree, l, n);
							var u = this.parseUrl(l);
							return Bh(this.currentUrlTree, u, n);
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
										l.events.next(new ph(n.id, l.serializeUrl(n.extractedUrl), l.serializeUrl(l.currentUrlTree))),
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
								o = new Promise(function(l, n) {
									(r = l), (s = n);
								}),
								a = ++this.navigationId;
							return (
								this.setTransition({
									id: a,
									source: n,
									restoredState: u,
									currentUrlTree: this.currentUrlTree,
									currentRawUrl: this.rawUrlTree,
									rawUrl: l,
									extras: e,
									resolve: r,
									reject: s,
									promise: o,
									currentSnapshot: this.routerState.snapshot,
									currentRouterState: this.routerState
								}),
								o.catch(function(l) {
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
				Pf = (function() {
					return function() {
						(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new Of()), (this.attachRef = null);
					};
				})(),
				Of = (function() {
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
							return n || ((n = new Pf()), this.contexts.set(l, n)), n;
						}),
						(l.prototype.getContext = function(l) {
							return this.contexts.get(l) || null;
						}),
						l
					);
				})(),
				Tf = (function() {
					function l(l, n, u, e, t) {
						(this.parentContexts = l),
							(this.location = n),
							(this.resolver = u),
							(this.changeDetector = t),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new Ut()),
							(this.deactivateEvents = new Ut()),
							(this.name = e || Eh),
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
								t = new Mf(l, e, this.location.injector);
							(this.activated = this.location.createComponent(u, this.location.length, t)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
						}),
						l
					);
				})(),
				Mf = (function() {
					function l(l, n, u) {
						(this.route = l), (this.childContexts = n), (this.parent = u);
					}
					return (
						(l.prototype.get = function(l, n) {
							return l === bd ? this.route : l === Of ? this.childContexts : this.parent.get(l, n);
						}),
						l
					);
				})(),
				Rf = (function() {
					return function() {};
				})(),
				Af = (function() {
					function l() {}
					return (
						(l.prototype.preload = function(l, n) {
							return n().pipe(
								Dc(function() {
									return cc(null);
								})
							);
						}),
						l
					);
				})(),
				Nf = (function() {
					function l() {}
					return (
						(l.prototype.preload = function(l, n) {
							return cc(null);
						}),
						l
					);
				})(),
				Df = (function() {
					function l(l, n, u, e, t) {
						(this.router = l),
							(this.injector = e),
							(this.preloadingStrategy = t),
							(this.loader = new _f(
								n,
								u,
								function(n) {
									return l.triggerEvent(new vh(n));
								},
								function(n) {
									return l.triggerEvent(new wh(n));
								}
							));
					}
					return (
						(l.prototype.setUpPreloading = function() {
							var l = this;
							this.subscription = this.router.events
								.pipe(
									vc(function(l) {
										return l instanceof ph;
									}),
									Jc(function() {
										return l.preload();
									})
								)
								.subscribe(function() {});
						}),
						(l.prototype.preload = function() {
							var l = this.injector.get(Ze);
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
								for (var r = a(n), s = r.next(); !s.done; s = r.next()) {
									var o = s.value;
									if (o.loadChildren && !o.canLoad && o._loadedConfig) {
										var i = o._loadedConfig;
										t.push(this.processRoutes(i.module, i.routes));
									} else o.loadChildren && !o.canLoad ? t.push(this.preloadConfig(l, o)) : o.children && t.push(this.processRoutes(l, o.children));
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
							return tl(t).pipe(
								il(),
								ll(function(l) {})
							);
						}),
						(l.prototype.preloadConfig = function(l, n) {
							var u = this;
							return this.preloadingStrategy.preload(n, function() {
								return u.loader.load(l.injector, n).pipe(
									rl(function(l) {
										return (n._loadedConfig = l), u.processRoutes(l.module, l.routes);
									})
								);
							});
						}),
						l
					);
				})(),
				Vf = (function() {
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
								n instanceof ch
									? ((l.store[l.lastId] = l.viewportScroller.getScrollPosition()),
									  (l.lastSource = n.navigationTrigger),
									  (l.restoredId = n.restoredState ? n.restoredState.navigationId : 0))
									: n instanceof ph && ((l.lastId = n.id), l.scheduleScrollEvent(n, l.router.parseUrl(n.urlAfterRedirects).fragment));
							});
						}),
						(l.prototype.consumeScrollEvents = function() {
							var l = this;
							return this.router.events.subscribe(function(n) {
								n instanceof Ch &&
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
							this.router.triggerEvent(new Ch(l, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, n));
						}),
						(l.prototype.ngOnDestroy = function() {
							this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
						}),
						l
					);
				})(),
				Uf = new Sl('ROUTER_CONFIGURATION'),
				Lf = new Sl('ROUTER_FORROOT_GUARD'),
				Hf = [
					Fi,
					{ provide: Kh, useClass: Yh },
					{ provide: If, useFactory: Zf, deps: [Lr, Kh, Of, Fi, he, Bt, gr, jf, Uf, [xf, new Rn()], [vf, new Rn()]] },
					Of,
					{ provide: bd, useFactory: Wf, deps: [If] },
					{ provide: Bt, useClass: qr },
					Df,
					Nf,
					Af,
					{ provide: Uf, useValue: { enableTracing: !1 } }
				];
			function Ff() {
				return new Ar('Router', If);
			}
			var zf = (function() {
				function l(l, n) {}
				var n;
				return (
					(n = l),
					(l.forRoot = function(l, u) {
						return {
							ngModule: n,
							providers: [
								Hf,
								Qf(l),
								{ provide: Lf, useFactory: Gf, deps: [[If, new Rn(), new Nn()]] },
								{ provide: Uf, useValue: u || {} },
								{ provide: Li, useFactory: qf, deps: [Vi, [new Mn(Hi), new Rn()], Uf] },
								{ provide: Vf, useFactory: Bf, deps: [If, rc, Uf] },
								{ provide: Rf, useExisting: u && u.preloadingStrategy ? u.preloadingStrategy : Nf },
								{ provide: Ar, multi: !0, useFactory: Ff },
								[Kf, { provide: Xt, multi: !0, useFactory: Yf, deps: [Kf] }, { provide: $f, useFactory: Jf, deps: [Kf] }, { provide: sr, multi: !0, useExisting: $f }]
							]
						};
					}),
					(l.forChild = function(l) {
						return { ngModule: n, providers: [Qf(l)] };
					}),
					l
				);
			})();
			function Bf(l, n, u) {
				return u.scrollOffset && n.setOffset(u.scrollOffset), new Vf(l, n, u);
			}
			function qf(l, n, u) {
				return void 0 === u && (u = {}), u.useHash ? new Bi(l, n) : new qi(l, n);
			}
			function Gf(l) {
				if (l) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function Qf(l) {
				return [{ provide: Pl, multi: !0, useValue: l }, { provide: jf, multi: !0, useValue: l }];
			}
			function Zf(l, n, u, e, t, r, s, o, a, i, c) {
				void 0 === a && (a = {});
				var p = new If(null, n, u, e, t, r, s, Lh(o));
				if (
					(i && (p.urlHandlingStrategy = i),
					c && (p.routeReuseStrategy = c),
					a.errorHandler && (p.errorHandler = a.errorHandler),
					a.malformedUriErrorHandler && (p.malformedUriErrorHandler = a.malformedUriErrorHandler),
					a.enableTracing)
				) {
					var h = np();
					p.events.subscribe(function(l) {
						h.logGroup('Router Event: ' + l.constructor.name), h.log(l.toString()), h.log(l), h.logGroupEnd();
					});
				}
				return (
					a.onSameUrlNavigation && (p.onSameUrlNavigation = a.onSameUrlNavigation),
					a.paramsInheritanceStrategy && (p.paramsInheritanceStrategy = a.paramsInheritanceStrategy),
					a.urlUpdateStrategy && (p.urlUpdateStrategy = a.urlUpdateStrategy),
					a.relativeLinkResolution && (p.relativeLinkResolution = a.relativeLinkResolution),
					p
				);
			}
			function Wf(l) {
				return l.routerState.root;
			}
			var Kf = (function() {
				function l(l) {
					(this.injector = l), (this.initNavigation = !1), (this.resultOfPreactivationDone = new L());
				}
				return (
					(l.prototype.appInitializer = function() {
						var l = this;
						return this.injector.get(Ui, Promise.resolve(null)).then(function() {
							var n = null,
								u = new Promise(function(l) {
									return (n = l);
								}),
								e = l.injector.get(If),
								t = l.injector.get(Uf);
							if (l.isLegacyDisabled(t) || l.isLegacyEnabled(t)) n(!0);
							else if ('disabled' === t.initialNavigation) e.setUpLocationChangeListener(), n(!0);
							else {
								if ('enabled' !== t.initialNavigation) throw new Error("Invalid initialNavigation options: '" + t.initialNavigation + "'");
								(e.hooks.afterPreactivation = function() {
									return l.initNavigation ? cc(null) : ((l.initNavigation = !0), n(!0), l.resultOfPreactivationDone);
								}),
									e.initialNavigation();
							}
							return u;
						});
					}),
					(l.prototype.bootstrapListener = function(l) {
						var n = this.injector.get(Uf),
							u = this.injector.get(Df),
							e = this.injector.get(Vf),
							t = this.injector.get(If),
							r = this.injector.get(Lr);
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
			function Yf(l) {
				return l.appInitializer.bind(l);
			}
			function Jf(l) {
				return l.bootstrapListener.bind(l);
			}
			var $f = new Sl('Router Initializer'),
				Xf = Hs({ encapsulation: 2, styles: [], data: {} });
			function lg(l) {
				return Ia(
					0,
					[(l()(), go(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)), ea(1, 212992, null, 0, Tf, [Of, Zr, qe, [8, null], Kr], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			function ng(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 1, 'ng-component', [], null, null, null, lg, Xf)), ea(1, 49152, null, 0, Sh, [], null, null)], null, null);
			}
			var ug = Ro('ng-component', Sh, ng, {}, {}, []),
				eg = (function() {
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
				tg = (function() {
					return function() {};
				})(),
				rg = (function() {
					return function() {};
				})(),
				sg = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				og = (function() {
					return function() {};
				})(),
				ag = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				ig = (function() {
					return function() {};
				})(),
				cg = (function() {
					return function() {};
				})(),
				pg = (function() {
					return function() {};
				})(),
				hg = (function() {
					return function() {};
				})(),
				dg = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				fg = (function() {
					return function() {};
				})(),
				gg = (function() {
					return function() {};
				})(),
				mg = (function() {
					return function() {};
				})(),
				bg = (function() {
					return function() {};
				})(),
				yg = (function() {
					return function() {};
				})(),
				vg = (function() {
					return function() {};
				})(),
				wg = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				jg = (function() {
					return function() {};
				})(),
				_g = (function() {
					return function() {};
				})(),
				xg = (function() {
					return function() {};
				})(),
				kg = (function() {
					return function() {};
				})(),
				Cg = (function() {
					return function() {};
				})(),
				Sg = (function() {
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
				Eg = (function() {
					return function() {};
				})(),
				Ig = (function() {
					return function() {};
				})(),
				Pg = Hs({
					encapsulation: 2,
					styles: [
						"a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:'\\2012';color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex='-1']:focus,input[type=range]:focus{outline:0}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}:disabled,[disabled]{background-color:#bdbdbd;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{align-items:flex-start;display:flex;justify-content:flex-start}.col,.col-full{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{justify-content:center}.align-l,.col.align-t{justify-content:flex-start}.align-r,.col.align-b{justify-content:flex-end}.align-m,.col.align-c{align-items:center}.align-b,.col.align-r{align-items:flex-end}.align-t,.col.align-l{align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{justify-content:space-between}.align-st{align-items:stretch}.align-cm{align-items:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{flex-grow:0;flex-shrink:0}.item-g-0{flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{flex-grow:1;flex-shrink:1}.item-g-1{flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{flex-grow:2;flex-shrink:2}.item-g-2{flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{flex-grow:3;flex-shrink:3}.item-g-3{flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{flex-grow:4;flex-shrink:4}.item-g-4{flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{flex-grow:5;flex-shrink:5}.item-g-5{flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{flex-grow:6;flex-shrink:6}.item-g-6{flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{flex-grow:7;flex-shrink:7}.item-g-7{flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{flex-grow:8;flex-shrink:8}.item-g-8{flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{flex-grow:9;flex-shrink:9}.item-g-9{flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{flex-grow:10;flex-shrink:10}.item-g-10{flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{flex-grow:11;flex-shrink:11}.item-g-11{flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{flex-grow:12;flex-shrink:12}.item-g-12{flex-grow:12}.item-s-12{flex-shrink:12}.item-gs-n{flex:none}[class*=flex-g]{flex-basis:0%}.item-order-1{order:1}.item-order-2{order:2}.item-order-3{order:3}.item-order-4{order:4}.item-order-5{order:5}.item-order-6{order:6}.item-order-7{order:7}.item-order-8{order:8}.item-order-9{order:9}.item-order-10{order:10}.item-order-11{order:11}.item-order-12{order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:48rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}"
					],
					data: {}
				});
			function Og(l) {
				return Ia(
					0,
					[
						ba(402653184, 1, { content: 0 }),
						(l()(),
						go(
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
						(l()(), Ca(-1, null, ['Skip to content'])),
						_a(null, 0)
					],
					null,
					null
				);
			}
			var Tg = Hs({
				encapsulation: 0,
				styles: [
					'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;color:#fff;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
				],
				data: {}
			});
			function Mg(l) {
				return Ia(
					0,
					[
						(l()(),
						go(
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
						(l()(), Ca(-1, null, [' X\n']))
					],
					null,
					null
				);
			}
			function Rg(l) {
				return Ia(
					0,
					[
						ba(402653184, 1, { message: 0 }),
						(l()(), go(1, 0, [[1, 0], ['message', 1]], null, 1, 'p', [['tabindex', '-1']], [[1, 'id', 0]], null, null, null, null)),
						_a(null, 0),
						(l()(), fo(16777216, null, null, 1, null, Mg)),
						ea(4, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						l(n, 4, 0, n.component.close);
					},
					function(l, n) {
						l(n, 1, 0, n.component.id);
					}
				);
			}
			var Ag = Hs({
				encapsulation: 0,
				styles: [
					'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
				],
				data: {}
			});
			function Ng(l) {
				return Ia(0, [_a(null, 0)], null, null);
			}
			var Dg = Hs({
				encapsulation: 0,
				styles: [
					'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;flex-grow:1;flex-shrink:0}'
				],
				data: {}
			});
			function Vg(l) {
				return Ia(0, [_a(null, 0)], null, null);
			}
			var Ug = Hs({
				encapsulation: 0,
				styles: [
					'.checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex:1 0 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;background-color:#fff;border:.0625rem solid #bdbdbd;padding:.5rem}.form-field[_nghost-%COMP%]:hover{border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){flex:1 0 13.75rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:.54}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#191919}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{flex:none;font-size:1rem;padding-left:.5rem;padding-right:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{flex:1 0 auto}'
				],
				data: {}
			});
			function Lg(l) {
				return Ia(0, [_a(null, 0)], null, null);
			}
			var Hg = Hs({
				encapsulation: 0,
				styles: [
					'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
				],
				data: {}
			});
			function Fg(l) {
				return Ia(0, [_a(null, 0)], null, null);
			}
			var zg = (function() {
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
				Bg = Hs({
					encapsulation: 0,
					styles: [
						[
							'.styleguide[_ngcontent-%COMP%]{margin-left:16rem}.styleguide[_ngcontent-%COMP%]   .hljs-attr[_ngcontent-%COMP%]{color:#954121}.styleguide-menu[_ngcontent-%COMP%]{left:2rem;top:5.5rem;width:14rem}.styleguide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#6a0080}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .styleguide[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:.875rem}.styleguide[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-width:15rem}#styleguide[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;color:#000;background:#f8f8ff;-webkit-text-size-adjust:none}.diff[_ngcontent-%COMP%]   .hljs-header[_ngcontent-%COMP%], .hljs-comment[_ngcontent-%COMP%]{color:#408080;font-style:italic}.assignment[_ngcontent-%COMP%], .css[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-subst[_ngcontent-%COMP%], .hljs-winutils[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#954121}.hljs-hexcolor[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%]{color:#40a070}.hljs-doctag[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-value[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{color:#219161}.hljs-id[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%]{color:#19469d}.hljs-params[_ngcontent-%COMP%]{color:#00f}.hljs-subst[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{font-weight:400}.haskell[_ngcontent-%COMP%]   .hljs-label[_ngcontent-%COMP%], .hljs-class[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-command[_ngcontent-%COMP%]{color:#458;font-weight:700}.django[_ngcontent-%COMP%]   .hljs-tag[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-rule[_ngcontent-%COMP%]   .hljs-property[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:navy;font-weight:400}.hljs-attr[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .instancevar[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-body[_ngcontent-%COMP%]{color:teal}.hljs-regexp[_ngcontent-%COMP%]{color:#b68}.hljs-class[_ngcontent-%COMP%]{color:#458;font-weight:700}.hljs-symbol[_ngcontent-%COMP%], .input_number[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .keymethods[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-special[_ngcontent-%COMP%]{color:#990073}.builtin[_ngcontent-%COMP%], .constructor[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#0086b3}.hljs-cdata[_ngcontent-%COMP%], .hljs-doctype[_ngcontent-%COMP%], .hljs-pi[_ngcontent-%COMP%], .hljs-pragma[_ngcontent-%COMP%], .hljs-preprocessor[_ngcontent-%COMP%], .hljs-shebang[_ngcontent-%COMP%]{color:#999;font-weight:700}.hljs-deletion[_ngcontent-%COMP%]{background:#fdd}.hljs-addition[_ngcontent-%COMP%]{background:#dfd}.diff[_ngcontent-%COMP%]   .hljs-change[_ngcontent-%COMP%]{background:#0086b3}.hljs-chunk[_ngcontent-%COMP%]{color:#aaa}.tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{opacity:.5}.flexbox[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][_ngcontent-%COMP%]{height:15.625rem;width:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][class*=wrap][_ngcontent-%COMP%]{width:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.col-full[_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][_ngcontent-%COMP%]{height:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][class*=wrap][_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.row[_ngcontent-%COMP%]{width:15.625rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;background-color:#2196f3;color:#fff;justify-content:center;min-height:6.25rem;min-width:7.5rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50;min-height:4.6875rem;min-width:6.25rem}.box[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:1rem;padding:0}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;text-align:center}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50}.box[_ngcontent-%COMP%]   p[class*=pad][_ngcontent-%COMP%]{display:inline-block;margin:0 1rem}'
						]
					],
					data: {}
				});
			function qg(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Close']))
					],
					null,
					null
				);
			}
			function Gg(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Empty']))
					],
					null,
					null
				);
			}
			function Qg(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Group'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Rounded'])),
						(l()(), go(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function Zg(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Wg(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Accordion'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Expand']))
					],
					null,
					null
				);
			}
			function Kg(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 12, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Background'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Border'])),
						(l()(), go(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Hover'])),
						(l()(), go(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function Yg(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Jg(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 24, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Container Column'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Container Row'])),
						(l()(), go(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item Column'])),
						(l()(), go(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item Order'])),
						(l()(), go(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item Row'])),
						(l()(), go(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item Size'])),
						(l()(), go(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Wrap Column'])),
						(l()(), go(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(23, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Wrap Row']))
					],
					null,
					null
				);
			}
			function $g(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 18, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Checkbox'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Field'])),
						(l()(), go(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Field Group'])),
						(l()(), go(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Fieldset'])),
						(l()(), go(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Form Group'])),
						(l()(), go(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Label']))
					],
					null,
					null
				);
			}
			function Xg(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Area'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Container'])),
						(l()(), go(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item']))
					],
					null,
					null
				);
			}
			function lm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Container'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Sticky Footer']))
					],
					null,
					null
				);
			}
			function nm(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function um(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Items'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Links'])),
						(l()(), go(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Placement']))
					],
					null,
					null
				);
			}
			function em(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function tm(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function rm(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function sm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Margin'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Padding']))
					],
					null,
					null
				);
			}
			function om(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function am(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function im(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function cm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 15, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Border'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Hover'])),
						(l()(), go(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Striped'])),
						(l()(), go(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Table Cell'])),
						(l()(), go(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Table Row']))
					],
					null,
					null
				);
			}
			function pm(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function hm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Font'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function dm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Hide'])),
						(l()(), go(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Show']))
					],
					null,
					null
				);
			}
			function fm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 118, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Alerts are styled with an '])),
						(l()(), go(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.alert-[bad || good || info || warn]'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(10, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(11, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(12, { flexbox: 0, box: 1 }),
						(l()(), go(13, 0, null, null, 2, 'aside', [['class', 'alert-bad']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Rg, Tg)),
						ea(14, 114688, null, 0, eg, [Ye], { class: [0, 'class'] }, null),
						(l()(), Ca(-1, 0, ['bad'])),
						(l()(), go(16, 0, null, null, 2, 'aside', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Rg, Tg)),
						ea(17, 114688, null, 0, eg, [Ye], { class: [0, 'class'] }, null),
						(l()(), Ca(-1, 0, ['good'])),
						(l()(), go(19, 0, null, null, 2, 'aside', [['class', 'alert-info']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Rg, Tg)),
						ea(20, 114688, null, 0, eg, [Ye], { class: [0, 'class'] }, null),
						(l()(), Ca(-1, 0, ['info'])),
						(l()(), go(22, 0, null, null, 2, 'aside', [['class', 'alert-warn']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Rg, Tg)),
						ea(23, 114688, null, 0, eg, [Ye], { class: [0, 'class'] }, null),
						(l()(), Ca(-1, 0, ['warn'])),
						(l()(), go(25, 0, null, null, 2, 'ez-alert', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Rg, Tg)),
						ea(26, 114688, null, 0, eg, [Ye], { class: [0, 'class'] }, null),
						(l()(), Ca(-1, 0, ['good'])),
						(l()(), go(28, 0, null, null, 90, 'figure', [], null, null, null, null, null)),
						(l()(), go(29, 0, null, null, 89, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(30, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(32, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(35, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"alert-bad"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bad'])),
						(l()(), go(42, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(44, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(48, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(50, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(53, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"alert-good"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['good'])),
						(l()(), go(60, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(62, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(66, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(68, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(71, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"alert-info"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['info'])),
						(l()(), go(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(80, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(84, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(89, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"alert-warn"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['warn'])),
						(l()(), go(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(98, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(102, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(104, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ez-alert'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(107, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(110, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"alert-good"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['good'])),
						(l()(), go(114, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(116, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ez-alert'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0, 'alert-bad'), l(n, 17, 0, 'alert-good'), l(n, 20, 0, 'alert-info'), l(n, 23, 0, 'alert-warn'), l(n, 26, 0, 'alert-good');
					},
					function(l, n) {
						l(n, 13, 0, qo(n, 14).ariaLabelledby, qo(n, 14).hostClass, qo(n, 14).role, qo(n, 14).tabindex),
							l(n, 16, 0, qo(n, 17).ariaLabelledby, qo(n, 17).hostClass, qo(n, 17).role, qo(n, 17).tabindex),
							l(n, 19, 0, qo(n, 20).ariaLabelledby, qo(n, 20).hostClass, qo(n, 20).role, qo(n, 20).tabindex),
							l(n, 22, 0, qo(n, 23).ariaLabelledby, qo(n, 23).hostClass, qo(n, 23).role, qo(n, 23).tabindex),
							l(n, 25, 0, qo(n, 26).ariaLabelledby, qo(n, 26).hostClass, qo(n, 26).role, qo(n, 26).tabindex);
					}
				);
			}
			function gm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 57, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Close'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Alerts are closed by adding a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.close'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(12, 0, null, null, 8, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(),
						go(15, 0, null, null, 2, 'aside', [['class', 'alert-good close']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Rg, Tg)),
						ea(16, 114688, null, 0, eg, [Ye], { class: [0, 'class'] }, null),
						(l()(), Ca(-1, 0, ['close'])),
						(l()(),
						go(18, 0, null, null, 2, 'ez-alert', [['class', 'close alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Rg, Tg)),
						ea(19, 114688, null, 0, eg, [Ye], { class: [0, 'class'] }, null),
						(l()(), Ca(-1, 0, ['close'])),
						(l()(), go(21, 0, null, null, 36, 'figure', [], null, null, null, null, null)),
						(l()(), go(22, 0, null, null, 35, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(23, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(25, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(28, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(31, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"alert-good close"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['close'])),
						(l()(), go(35, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(37, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['aside'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(41, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(43, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ez-alert'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(46, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"close alert-good"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['close'])),
						(l()(), go(53, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(55, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ez-alert'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e), l(n, 16, 0, 'alert-good close'), l(n, 19, 0, 'close alert-good');
					},
					function(l, n) {
						l(n, 15, 0, qo(n, 16).ariaLabelledby, qo(n, 16).hostClass, qo(n, 16).role, qo(n, 16).tabindex),
							l(n, 18, 0, qo(n, 19).ariaLabelledby, qo(n, 19).hostClass, qo(n, 19).role, qo(n, 19).tabindex);
					}
				);
			}
			function mm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 116, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Badges are styled with a '])),
						(l()(), go(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.badge-[sm || md || lg]'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(10, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(11, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(12, { flexbox: 0, box: 1 }),
						(l()(), go(13, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, Ng, Ag)),
						ea(14, 114688, null, 0, sg, [], null, null),
						(l()(), Ca(-1, 0, ['1'])),
						(l()(), go(16, 0, null, null, 2, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, Ng, Ag)),
						ea(17, 114688, null, 0, sg, [], null, null),
						(l()(), Ca(-1, 0, ['20'])),
						(l()(), go(19, 0, null, null, 2, 'p', [['class', 'badge-lg bg-dk-blue text-white']], null, null, null, Ng, Ag)),
						ea(20, 114688, null, 0, sg, [], null, null),
						(l()(), Ca(-1, 0, ['300'])),
						(l()(), go(22, 0, null, null, 1, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, Ng, Ag)),
						ea(23, 114688, null, 0, sg, [], null, null),
						(l()(), go(24, 0, null, null, 2, 'ez-badge', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, Ng, Ag)),
						ea(25, 114688, null, 0, sg, [], null, null),
						(l()(), Ca(-1, 0, ['10'])),
						(l()(), go(27, 0, null, null, 89, 'figure', [], null, null, null, null, null)),
						(l()(), go(28, 0, null, null, 88, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(29, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(31, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(34, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(37, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['1'])),
						(l()(), go(41, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(43, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(47, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(49, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(52, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(55, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['20'])),
						(l()(), go(59, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(61, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(65, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(67, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"badge-lg bg-dk-blue text-white"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['300'])),
						(l()(), go(77, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(79, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(83, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(85, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(88, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(91, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(96, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(100, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(102, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ez-badge'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(105, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['10'])),
						(l()(), go(112, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(114, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ez-badge'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 17, 0), l(n, 20, 0), l(n, 23, 0), l(n, 25, 0);
					},
					null
				);
			}
			function bm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 52, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Empty'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['If a badge does not contain text, it is not rendered.'])),
						(l()(), go(9, 0, null, null, 7, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(10, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(11, { flexbox: 0, box: 1 }),
						(l()(), go(12, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, Ng, Ag)),
						ea(13, 114688, null, 0, sg, [], null, null),
						(l()(), Ca(-1, 0, ['1'])),
						(l()(), go(15, 0, null, null, 1, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, Ng, Ag)),
						ea(16, 114688, null, 0, sg, [], null, null),
						(l()(), go(17, 0, null, null, 35, 'figure', [], null, null, null, null, null)),
						(l()(), go(18, 0, null, null, 34, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(21, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(24, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(27, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['1'])),
						(l()(), go(31, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(33, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(37, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(39, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(42, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(45, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(48, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(50, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 13, 0), l(n, 16, 0);
					},
					null
				);
			}
			function ym(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 117, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Buttons are styled with a '])),
						(l()(), go(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.btn-[xs || sm || md || lg || xl || full]'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(10, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(11, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(12, { flexbox: 0, box: 1 }),
						(l()(), go(13, 0, null, null, 2, 'button', [['class', 'btn-xs bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(14, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['xs'])),
						(l()(), go(16, 0, null, null, 2, 'button', [['class', 'btn-sm bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(17, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['sm'])),
						(l()(), go(19, 0, null, null, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(20, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(22, 0, null, null, 2, 'button', [['class', 'btn-lg bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(23, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['lg'])),
						(l()(), go(25, 0, null, null, 2, 'button', [['class', 'btn-xl bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(26, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['xl'])),
						(l()(), go(28, 0, null, null, 2, 'button', [['class', 'btn-full bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(29, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['full'])),
						(l()(), go(31, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), go(32, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<button '])),
						(l()(), go(34, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-xs bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(41, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(42, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(45, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>xs</button>\n<button '])),
						(l()(), go(48, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(49, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(52, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-sm bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(55, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>sm</button>\n<button '])),
						(l()(), go(62, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(69, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n<button '])),
						(l()(), go(76, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-lg bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(83, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>lg</button>\n<button '])),
						(l()(), go(90, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(94, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-xl bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(97, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(98, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(101, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>xl</button>\n<button '])),
						(l()(), go(104, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(105, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-full bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(111, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(115, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 17, 0), l(n, 20, 0), l(n, 23, 0), l(n, 26, 0), l(n, 29, 0);
					},
					null
				);
			}
			function vm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 317, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Group'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Buttons are grouped with a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.btn-group-[row || col || full]'])),
						(l()(), Ca(-1, null, [' class on a parent container.'])),
						(l()(), go(12, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 16, 'section', [['aria-label', 'button row group'], ['class', 'btn-group-row'], ['role', 'group']], null, null, null, Vg, Dg)),
						ea(16, 114688, null, 0, ag, [], null, null),
						(l()(), go(17, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(18, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(20, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(21, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(23, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(24, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(26, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(27, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(29, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(30, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(32, 0, null, null, 16, 'section', [['aria-label', 'button column group'], ['class', 'btn-group-col'], ['role', 'group']], null, null, null, Vg, Dg)),
						ea(33, 114688, null, 0, ag, [], null, null),
						(l()(), go(34, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(35, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(37, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(38, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(40, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(41, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(43, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(44, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(46, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(47, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(49, 0, null, null, 16, 'section', [['aria-label', 'button full row group'], ['class', 'btn-group-full'], ['role', 'group']], null, null, null, Vg, Dg)),
						ea(50, 114688, null, 0, ag, [], null, null),
						(l()(), go(51, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(52, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(54, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(55, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(57, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(58, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(60, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(61, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(63, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(64, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(66, 0, null, null, 251, 'figure', [], null, null, null, null, null)),
						(l()(), go(67, 0, null, null, 250, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<section '])),
						(l()(), go(69, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-group-row"'])),
						(l()(), Ca(-1, null, [' role='])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"group"'])),
						(l()(), Ca(-1, null, [' aria-label='])),
						(l()(), go(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button row group"'])),
						(l()(), Ca(-1, null, ['>\n    <button '])),
						(l()(), go(82, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(83, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(89, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(90, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(96, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(97, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(100, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(103, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(104, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(107, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(110, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(114, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(117, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(121, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(124, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(125, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(128, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(131, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(132, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(135, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(138, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(139, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(142, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(145, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(146, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(149, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), go(152, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(153, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(156, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-group-col"'])),
						(l()(), Ca(-1, null, [' role='])),
						(l()(), go(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"group"'])),
						(l()(), Ca(-1, null, [' aria-label='])),
						(l()(), go(162, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button column group"'])),
						(l()(), Ca(-1, null, ['>\n    <button '])),
						(l()(), go(165, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(169, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(172, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(173, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(176, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(179, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(180, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(183, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(186, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(187, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(190, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(193, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(194, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(197, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(200, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(201, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(204, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(207, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(208, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(211, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(214, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(215, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(218, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(221, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(222, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(225, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(228, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(229, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(232, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), go(235, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(236, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(239, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-group-full"'])),
						(l()(), Ca(-1, null, [' role='])),
						(l()(), go(242, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"group"'])),
						(l()(), Ca(-1, null, [' aria-label='])),
						(l()(), go(245, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button full row group"'])),
						(l()(), Ca(-1, null, ['>\n    <button '])),
						(l()(), go(248, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(249, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(252, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(255, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(256, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(259, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(262, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(263, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(266, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(269, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(270, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(273, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(276, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(277, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(280, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(283, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(284, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(287, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(290, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(291, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(294, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(297, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(298, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(301, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n    <button '])),
						(l()(), go(304, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(305, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(308, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(311, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(312, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(315, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n</section>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e),
							l(n, 16, 0),
							l(n, 18, 0),
							l(n, 21, 0),
							l(n, 24, 0),
							l(n, 27, 0),
							l(n, 30, 0),
							l(n, 33, 0),
							l(n, 35, 0),
							l(n, 38, 0),
							l(n, 41, 0),
							l(n, 44, 0),
							l(n, 47, 0),
							l(n, 50, 0),
							l(n, 52, 0),
							l(n, 55, 0),
							l(n, 58, 0),
							l(n, 61, 0),
							l(n, 64, 0);
					},
					null
				);
			}
			function wm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 119, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Rounded'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Buttons are rounded by adding a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.rounded'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(12, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 2, 'button', [['class', 'btn-xs rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(16, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['xs'])),
						(l()(), go(18, 0, null, null, 2, 'button', [['class', 'btn-sm rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(19, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['sm'])),
						(l()(), go(21, 0, null, null, 2, 'button', [['class', 'btn-md rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(22, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['md'])),
						(l()(), go(24, 0, null, null, 2, 'button', [['class', 'btn-lg rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(25, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['lg'])),
						(l()(), go(27, 0, null, null, 2, 'button', [['class', 'btn-xl rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(28, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['xl'])),
						(l()(), go(30, 0, null, null, 2, 'button', [['class', 'btn-full rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(31, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['full'])),
						(l()(), go(33, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), go(34, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<button '])),
						(l()(), go(36, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(37, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(40, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(43, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(47, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>xs</button>\n<button '])),
						(l()(), go(50, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(51, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(54, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(57, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(58, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(61, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>sm</button>\n<button '])),
						(l()(), go(64, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(71, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(75, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>md</button>\n<button '])),
						(l()(), go(78, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(79, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(85, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>lg</button>\n<button '])),
						(l()(), go(92, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(93, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(96, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(99, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(100, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(103, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>xl</button>\n<button '])),
						(l()(), go(106, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(107, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(110, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-full rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(113, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(114, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(117, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e), l(n, 16, 0), l(n, 19, 0), l(n, 22, 0), l(n, 25, 0), l(n, 28, 0), l(n, 31, 0);
					},
					null
				);
			}
			function jm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 34, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['State'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Buttons are disabled by adding a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['disabled'])),
						(l()(), Ca(-1, null, [' attribute.'])),
						(l()(), go(12, 0, null, null, 5, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 2, 'button', [['class', 'btn-md'], ['disabled', ''], ['type', 'button']], null, null, null, Vg, Dg)),
						ea(16, 114688, null, 0, ag, [], null, null),
						(l()(), Ca(-1, 0, ['disabled'])),
						(l()(), go(18, 0, null, null, 16, 'figure', [], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 15, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<button '])),
						(l()(), go(21, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(22, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(25, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"btn-md"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(28, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(29, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"button"'])),
						(l()(), Ca(-1, null, [' disabled>disabled</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e), l(n, 16, 0);
					},
					null
				);
			}
			function _m(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function xm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function km(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Accordion'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Cm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Expand'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Sm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Em(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Background'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Im(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Border'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Pm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Hover'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Om(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Text'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Tm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Mm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 204, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 11, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['In order for flexbox to work, a parent container must have a '])),
						(l()(), go(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.row[-full]'])),
						(l()(), Ca(-1, null, [' or '])),
						(l()(), go(10, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.col[-full]'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(13, 0, null, null, 22, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(14, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(15, { flexbox: 0, box: 1 }),
						(l()(), go(16, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['row'])),
						(l()(), go(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['row'])),
						(l()(), go(21, 0, null, null, 4, 'ul', [['class', 'row-full']], null, null, null, null, null)),
						(l()(), go(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['full row'])),
						(l()(), go(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['full row'])),
						(l()(), go(26, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['column'])),
						(l()(), go(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['column'])),
						(l()(), go(31, 0, null, null, 4, 'ul', [['class', 'col-full']], null, null, null, null, null)),
						(l()(), go(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['full column'])),
						(l()(), go(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['full column'])),
						(l()(), go(36, 0, null, null, 168, 'figure', [], null, null, null, null, null)),
						(l()(), go(37, 0, null, null, 167, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(38, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(40, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(43, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(46, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(50, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(52, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['row'])),
						(l()(), go(56, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(58, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(62, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(64, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['row'])),
						(l()(), go(68, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(74, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(80, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(82, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(85, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(88, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row-full"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(94, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['full row'])),
						(l()(), go(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(100, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(106, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['full row'])),
						(l()(), go(110, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(112, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(116, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(118, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(122, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(124, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(127, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(130, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(136, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['column'])),
						(l()(), go(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(142, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(148, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['column'])),
						(l()(), go(152, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(154, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(158, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(160, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(164, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(166, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(169, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(172, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col-full"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(178, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['full column'])),
						(l()(), go(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(184, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(190, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['full column'])),
						(l()(), go(194, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(196, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(200, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(202, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Rm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 488, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 13, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Container Column'])),
						(l()(), go(4, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use an '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), Ca(-1, null, [' class to align ALL items in a '])),
						(l()(), go(12, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.col'])),
						(l()(), Ca(-1, null, [' flex container.'])),
						(l()(), go(15, 0, null, null, 52, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(16, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(17, { flexbox: 0, box: 1 }),
						(l()(), go(18, 0, null, null, 4, 'ul', [['class', 'col align-l']], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(23, 0, null, null, 4, 'ul', [['class', 'col align-c']], null, null, null, null, null)),
						(l()(), go(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(28, 0, null, null, 4, 'ul', [['class', 'col align-r']], null, null, null, null, null)),
						(l()(), go(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(33, 0, null, null, 4, 'ul', [['class', 'col align-t']], null, null, null, null, null)),
						(l()(), go(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(38, 0, null, null, 4, 'ul', [['class', 'col align-m']], null, null, null, null, null)),
						(l()(), go(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(43, 0, null, null, 4, 'ul', [['class', 'col align-b']], null, null, null, null, null)),
						(l()(), go(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(48, 0, null, null, 4, 'ul', [['class', 'col align-cm']], null, null, null, null, null)),
						(l()(), go(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(53, 0, null, null, 4, 'ul', [['class', 'col align-sa']], null, null, null, null, null)),
						(l()(), go(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(58, 0, null, null, 4, 'ul', [['class', 'col align-sb']], null, null, null, null, null)),
						(l()(), go(59, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(61, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(63, 0, null, null, 4, 'ul', [['class', 'col align-st']], null, null, null, null, null)),
						(l()(), go(64, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(66, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(68, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), go(69, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(70, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(72, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(75, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-l"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(82, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(84, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(88, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(90, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(96, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(100, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(102, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(106, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(108, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(112, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(114, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(117, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(120, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-c"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(124, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(126, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(130, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(132, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(136, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(138, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(142, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(144, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(150, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(156, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(159, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(162, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-r"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(166, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(168, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(172, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(174, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(178, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(180, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(184, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(186, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(190, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(192, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(196, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(198, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(201, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(204, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-t"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(208, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(210, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(214, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(216, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(220, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(222, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(226, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(228, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(232, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(234, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(238, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(240, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(243, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(246, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-m"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(250, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(252, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(256, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(258, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(264, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(270, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(274, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(276, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(280, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(282, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(285, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(288, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-b"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(292, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(294, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(298, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(300, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(304, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(306, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(312, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(316, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(318, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(322, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(324, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(327, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(330, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-cm"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(334, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(336, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(340, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(342, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(346, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(348, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(352, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(354, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(358, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(360, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(364, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(366, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(369, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(372, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-sa"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(376, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(378, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(382, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(384, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(388, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(390, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(394, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(396, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(400, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(402, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(406, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(408, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(411, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(414, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-sb"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(418, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(420, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(424, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(426, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(430, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(432, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(436, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(438, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(442, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(444, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(448, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(450, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(453, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(456, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col align-st"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(460, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(462, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(466, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(468, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(472, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(474, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(478, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(480, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(484, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(486, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 17, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 16, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Am(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 488, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 13, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Container Row'])),
						(l()(), go(4, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use an '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), Ca(-1, null, [' class to align ALL items in a '])),
						(l()(), go(12, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.row'])),
						(l()(), Ca(-1, null, [' flex container.'])),
						(l()(), go(15, 0, null, null, 52, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(16, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(17, { flexbox: 0, box: 1 }),
						(l()(), go(18, 0, null, null, 4, 'ul', [['class', 'row align-l']], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(23, 0, null, null, 4, 'ul', [['class', 'row align-c']], null, null, null, null, null)),
						(l()(), go(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(28, 0, null, null, 4, 'ul', [['class', 'row align-r']], null, null, null, null, null)),
						(l()(), go(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(33, 0, null, null, 4, 'ul', [['class', 'row align-t']], null, null, null, null, null)),
						(l()(), go(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(38, 0, null, null, 4, 'ul', [['class', 'row align-m']], null, null, null, null, null)),
						(l()(), go(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(43, 0, null, null, 4, 'ul', [['class', 'row align-b']], null, null, null, null, null)),
						(l()(), go(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(48, 0, null, null, 4, 'ul', [['class', 'row align-cm']], null, null, null, null, null)),
						(l()(), go(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(53, 0, null, null, 4, 'ul', [['class', 'row align-sa']], null, null, null, null, null)),
						(l()(), go(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(58, 0, null, null, 4, 'ul', [['class', 'row align-sb']], null, null, null, null, null)),
						(l()(), go(59, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(61, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(63, 0, null, null, 4, 'ul', [['class', 'row align-st']], null, null, null, null, null)),
						(l()(), go(64, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(66, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(68, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), go(69, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(70, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(72, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(75, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-l"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(82, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(84, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(88, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(90, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(96, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(100, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(102, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(106, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(108, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(112, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(114, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(117, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(120, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-c"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(124, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(126, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(130, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(132, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(136, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(138, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(142, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(144, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(150, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(156, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(159, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(162, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-r"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(166, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(168, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(172, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(174, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(178, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(180, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(184, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(186, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(190, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(192, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(196, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(198, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(201, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(204, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-t"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(208, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(210, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(214, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(216, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(220, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(222, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(226, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(228, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(232, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(234, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(238, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(240, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(243, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(246, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-m"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(250, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(252, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(256, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(258, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(264, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(270, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(274, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(276, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(280, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(282, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(285, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(288, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-b"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(292, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(294, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(298, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(300, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(304, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(306, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(312, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(316, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(318, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(322, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(324, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(327, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(330, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-cm"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(334, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(336, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(340, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(342, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(346, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(348, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(352, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(354, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(358, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(360, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(364, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(366, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(369, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(372, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-sa"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(376, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(378, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(382, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(384, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(388, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(390, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(394, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(396, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(400, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(402, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(406, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(408, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(411, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(414, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-sb"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(418, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(420, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(424, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(426, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(430, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(432, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(436, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(438, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(442, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(444, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(448, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(450, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(453, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(456, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row align-st"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(460, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(462, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(466, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(468, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(472, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(474, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(478, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(480, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(484, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(486, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 17, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 16, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Nm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 442, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 13, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item Column'])),
						(l()(), go(4, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), Ca(-1, null, [' classes to align ONE child in a '])),
						(l()(), go(12, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.col'])),
						(l()(), Ca(-1, null, [' flex container.'])),
						(l()(), go(15, 0, null, null, 42, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(16, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(17, { flexbox: 0, box: 1 }),
						(l()(), go(18, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(21, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(23, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(26, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(28, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(31, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(33, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(36, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(38, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(41, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(43, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(46, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(48, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(51, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(53, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(56, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(58, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), go(59, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(62, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(65, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(74, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(80, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(84, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(89, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-l"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(98, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(104, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(108, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(110, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(113, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(116, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(120, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(122, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(126, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(128, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(132, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(134, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(137, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(140, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-c"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(146, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(152, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(156, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(158, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(161, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(164, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(168, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(170, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(174, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(176, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(180, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(182, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(185, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(188, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-r"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(194, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(200, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(204, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(206, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(209, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(212, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(216, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(218, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(222, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(224, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(228, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(230, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(233, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(236, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-t"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(240, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(242, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(246, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(248, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(252, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(254, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(257, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(260, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(264, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(266, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(270, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(272, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(276, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(278, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(281, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(284, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-m"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(288, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(290, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(294, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(296, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(300, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(302, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(305, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(308, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(312, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(314, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(318, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(320, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(324, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(326, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(329, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(332, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-b"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(336, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(338, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(344, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(348, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(350, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(353, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(356, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(362, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(368, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(372, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(374, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(377, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(380, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-cm"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(384, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(386, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(390, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(392, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(396, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(398, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(401, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(404, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(408, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(410, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(414, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(416, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(420, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(422, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(425, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(428, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-st"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(432, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(434, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(438, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(440, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 17, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 16, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Dm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 87, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item Order'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.item-order-[1 - 12]'])),
						(l()(), Ca(-1, null, [' classes to align children in a flex container.'])),
						(l()(), go(12, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(16, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['1'])),
						(l()(), go(18, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['2'])),
						(l()(), go(20, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(21, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['1'])),
						(l()(), go(23, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['2'])),
						(l()(), go(25, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), go(26, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<ul '])),
						(l()(), go(28, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(31, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>\n    <'])),
						(l()(), go(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(37, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(40, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-order-2"'])),
						(l()(), Ca(-1, null, ['>1</'])),
						(l()(), go(43, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n    <'])),
						(l()(), go(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(49, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(52, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-order-1"'])),
						(l()(), Ca(-1, null, ['>2</'])),
						(l()(), go(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n</ul>\n<ul '])),
						(l()(), go(58, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(61, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>\n    <'])),
						(l()(), go(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-order-2"'])),
						(l()(), Ca(-1, null, ['>1</'])),
						(l()(), go(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n    <'])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(79, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-order-1"'])),
						(l()(), Ca(-1, null, ['>2</'])),
						(l()(), go(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n</ul>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Vm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 442, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 13, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item Row'])),
						(l()(), go(4, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use an '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), Ca(-1, null, [' class to align ONE child in a '])),
						(l()(), go(12, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.row'])),
						(l()(), Ca(-1, null, [' flex container.'])),
						(l()(), go(15, 0, null, null, 42, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(16, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(17, { flexbox: 0, box: 1 }),
						(l()(), go(18, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(21, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(23, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(26, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(28, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(31, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(33, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(36, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(38, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(41, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(43, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(46, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(48, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(51, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(53, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(56, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(58, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), go(59, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(62, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(65, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(74, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(80, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(84, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(89, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-l"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(98, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(104, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(108, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(110, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(113, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(116, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(120, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(122, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(126, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(128, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(132, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(134, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(137, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(140, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-c"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(146, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(152, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(156, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(158, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(161, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(164, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(168, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(170, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(174, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(176, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(180, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(182, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(185, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(188, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-r"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(194, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(200, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(204, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(206, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(209, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(212, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(216, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(218, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(222, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(224, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(228, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(230, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(233, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(236, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-t"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(240, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(242, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(246, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(248, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(252, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(254, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(257, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(260, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(264, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(266, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(270, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(272, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(276, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(278, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(281, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(284, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-m"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(288, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(290, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(294, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(296, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(300, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(302, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(305, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(308, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(312, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(314, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(318, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(320, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(324, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(326, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(329, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(332, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-b"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(336, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(338, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(344, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(348, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(350, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(353, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(356, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(362, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(368, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(372, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(374, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(377, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(380, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-cm"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center middle'])),
						(l()(), go(384, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(386, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(390, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(392, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(396, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(398, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(401, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(404, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(408, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(410, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(414, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(416, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(420, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(422, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(425, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(428, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-st"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(432, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(434, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(438, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(440, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 17, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 16, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Um(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 333, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item Size'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.item-[g || s || gs]-[1 - 12]'])),
						(l()(), Ca(-1, null, [' classes to grow and/or shrink children in a flex container.'])),
						(l()(), go(12, 0, null, null, 32, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(18, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['grow'])),
						(l()(), go(20, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(23, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['shrink'])),
						(l()(), go(25, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), go(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(28, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['grow & shrink'])),
						(l()(), go(30, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(33, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['grow'])),
						(l()(), go(35, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(38, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['shrink'])),
						(l()(), go(40, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), go(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(43, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['grow & shrink'])),
						(l()(), go(45, 0, null, null, 288, 'figure', [], null, null, null, null, null)),
						(l()(), go(46, 0, null, null, 287, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(47, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(49, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(52, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(55, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(59, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(61, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(65, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(67, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(71, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(73, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-g-1"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['grow'])),
						(l()(), go(83, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(85, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(89, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(91, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(95, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(97, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(100, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(103, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(107, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(109, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(113, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(115, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(119, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(121, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(124, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(127, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-s-1"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['shrink'])),
						(l()(), go(131, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(133, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(137, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(139, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(143, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(145, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(148, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(151, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(155, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(157, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(161, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(163, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(167, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(169, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(172, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(175, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-gs-1"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['grow &amp; shrink'])),
						(l()(), go(179, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(181, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(185, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(187, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(191, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(193, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(196, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(199, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(203, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(205, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(209, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(211, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(215, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(217, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(220, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-g-1"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['grow'])),
						(l()(), go(227, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(229, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(233, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(235, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(239, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(241, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(244, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(247, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(251, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(253, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(257, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(259, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(263, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(265, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(268, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(271, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-s-1"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['shrink'])),
						(l()(), go(275, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(277, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(281, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(283, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(287, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(289, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(292, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(295, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(299, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(301, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['default'])),
						(l()(), go(305, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(307, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(311, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(313, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(316, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(319, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"item-gs-1"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['grow &amp; shrink'])),
						(l()(), go(323, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(325, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(329, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(331, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Lm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 384, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 13, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Wrap Column'])),
						(l()(), go(4, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.wrap-[c || l || r || sa || sb || st]'])),
						(l()(), Ca(-1, null, [' class to align multi-column items in a '])),
						(l()(), go(12, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.col'])),
						(l()(), Ca(-1, null, [' flex container.'])),
						(l()(), go(15, 0, null, null, 44, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(16, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(17, { flexbox: 0, box: 1 }),
						(l()(), go(18, 0, null, null, 6, 'ul', [['class', 'col wrap-c']], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(25, 0, null, null, 6, 'ul', [['class', 'col wrap-l']], null, null, null, null, null)),
						(l()(), go(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(32, 0, null, null, 6, 'ul', [['class', 'col wrap-r']], null, null, null, null, null)),
						(l()(), go(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(35, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(39, 0, null, null, 6, 'ul', [['class', 'col wrap-sa']], null, null, null, null, null)),
						(l()(), go(40, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(46, 0, null, null, 6, 'ul', [['class', 'col wrap-sb']], null, null, null, null, null)),
						(l()(), go(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(53, 0, null, null, 6, 'ul', [['class', 'col wrap-st']], null, null, null, null, null)),
						(l()(), go(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(58, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(60, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), go(61, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(62, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(64, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(67, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col wrap-c"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(74, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(82, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(88, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(94, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(100, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['center'])),
						(l()(), go(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(106, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(110, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(112, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(116, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(118, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(121, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(124, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col wrap-l"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(130, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(136, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(142, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(148, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(152, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(154, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['left (default)'])),
						(l()(), go(158, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(160, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(164, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(166, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(170, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(172, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(175, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(178, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col wrap-r"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(184, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(190, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(194, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(196, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(200, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(202, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(208, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), go(212, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(214, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(218, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(220, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(224, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(226, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(229, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(232, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col wrap-sa"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(236, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(238, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(242, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(244, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(250, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(256, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(260, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(262, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(266, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(268, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(274, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(278, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(280, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(283, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(286, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col wrap-sb"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(290, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(292, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(298, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(304, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(308, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(310, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(314, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(316, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(320, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(322, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(326, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(328, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(332, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(334, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(337, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(340, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"col wrap-st"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(344, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(346, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(350, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(352, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(356, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(358, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(362, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(364, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(368, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(370, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(374, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(376, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(380, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(382, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 17, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 16, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Hm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 384, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 13, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Wrap Row'])),
						(l()(), go(4, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.wrap-[m || t || b || sa || sb || st]'])),
						(l()(), Ca(-1, null, [' class to align multi-row items in a '])),
						(l()(), go(12, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.row'])),
						(l()(), Ca(-1, null, [' flex container.'])),
						(l()(), go(15, 0, null, null, 44, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(16, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(17, { flexbox: 0, box: 1 }),
						(l()(), go(18, 0, null, null, 6, 'ul', [['class', 'row wrap-m']], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(25, 0, null, null, 6, 'ul', [['class', 'row wrap-t']], null, null, null, null, null)),
						(l()(), go(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(32, 0, null, null, 6, 'ul', [['class', 'row wrap-b']], null, null, null, null, null)),
						(l()(), go(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(35, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(39, 0, null, null, 6, 'ul', [['class', 'row wrap-sa']], null, null, null, null, null)),
						(l()(), go(40, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(46, 0, null, null, 6, 'ul', [['class', 'row wrap-sb']], null, null, null, null, null)),
						(l()(), go(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(53, 0, null, null, 6, 'ul', [['class', 'row wrap-st']], null, null, null, null, null)),
						(l()(), go(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(58, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(60, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), go(61, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), go(62, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(64, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(67, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row wrap-m"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(74, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(82, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(88, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(94, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(100, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['middle'])),
						(l()(), go(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(106, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(110, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(112, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(116, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(118, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(121, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(124, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row wrap-t"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(130, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(136, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(142, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(148, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(152, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(154, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['top (default)'])),
						(l()(), go(158, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(160, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(164, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(166, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(170, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(172, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(175, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(178, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row wrap-b"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(184, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(190, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(194, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(196, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(200, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(202, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(208, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), go(212, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(214, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(218, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(220, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(224, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(226, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(229, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(232, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row wrap-sa"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(236, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(238, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(242, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(244, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(250, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(256, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(260, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(262, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space around'])),
						(l()(), go(266, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(268, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(274, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(278, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(280, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(283, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(286, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row wrap-sb"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(290, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(292, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(298, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(304, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(308, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(310, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(314, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(316, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['space between'])),
						(l()(), go(320, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(322, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(326, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(328, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(332, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(334, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(337, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(340, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"row wrap-st"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(344, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(346, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(350, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(352, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(356, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(358, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(362, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(364, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n    '])),
						(l()(), go(368, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(370, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['stretch'])),
						(l()(), go(374, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(376, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n'])),
						(l()(), go(380, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(382, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['ul'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 17, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 16, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Fm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 100, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 17, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 16, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 14, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 13, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Forms are styled with '])),
						(l()(), go(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.form-group'])),
						(l()(), Ca(-1, null, [', '])),
						(l()(), go(10, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.field-group'])),
						(l()(), Ca(-1, null, [', '])),
						(l()(), go(13, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.form-label'])),
						(l()(), Ca(-1, null, [', '])),
						(l()(), go(16, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.form-field'])),
						(l()(), Ca(-1, null, [' classes.'])),
						(l()(), go(19, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(20, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(21, { flexbox: 0, box: 1 }),
						(l()(), go(22, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), go(23, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, Lg, Ug)),
						ea(24, 114688, null, 0, dg, [], null, null),
						(l()(), go(25, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(26, 114688, null, 0, dg, [], null, null),
						(l()(), go(27, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, Lg, Ug)),
						ea(28, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Name'])),
						(l()(), go(30, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(31, 114688, null, 0, dg, [], null, null),
						(l()(), go(32, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), go(33, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>\n    <ul '])),
						(l()(), go(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-group"'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(65, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, ['>Name</'])),
						(l()(), go(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(80, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter name"'])),
						(l()(), Ca(-1, null, ['>\n        </'])),
						(l()(), go(95, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), go(98, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 21, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 20, 0, 'pad-a-sm', e), l(n, 24, 0), l(n, 26, 0), l(n, 28, 0), l(n, 31, 0);
					},
					null
				);
			}
			function zm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 506, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Checkbox'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Checkboxes and radio buttons are grouped with a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.*-group'])),
						(l()(), Ca(-1, null, [' class on a parent container.'])),
						(l()(), go(12, 0, null, null, 68, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 65, 'form', [], null, null, null, null, null)),
						(l()(), go(16, 0, null, null, 64, 'ul', [['class', 'form-group']], null, null, null, Lg, Ug)),
						ea(17, 114688, null, 0, dg, [], null, null),
						(l()(), go(18, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(19, 114688, null, 0, dg, [], null, null),
						(l()(), go(20, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, Lg, Ug)),
						ea(21, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Name'])),
						(l()(), go(23, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(24, 114688, null, 0, dg, [], null, null),
						(l()(), go(25, 0, null, 0, 20, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(26, 114688, null, 0, dg, [], null, null),
						(l()(), go(27, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, Lg, Ug)),
						ea(28, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Agree'])),
						(l()(), go(30, 0, null, 0, 15, 'ul', [['class', 'radio-group']], null, null, null, Lg, Ug)),
						ea(31, 114688, null, 0, dg, [], null, null),
						(l()(), go(32, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(33, 114688, null, 0, dg, [], null, null),
						(l()(), go(34, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yes'], ['name', 'agree'], ['type', 'radio']], null, null, null, Lg, Ug)),
						ea(35, 114688, null, 0, dg, [], null, null),
						(l()(), go(36, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yes']], null, null, null, Lg, Ug)),
						ea(37, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Yes'])),
						(l()(), go(39, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(40, 114688, null, 0, dg, [], null, null),
						(l()(), go(41, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'no'], ['name', 'agree'], ['type', 'radio']], null, null, null, Lg, Ug)),
						ea(42, 114688, null, 0, dg, [], null, null),
						(l()(), go(43, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'no']], null, null, null, Lg, Ug)),
						ea(44, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['No'])),
						(l()(), go(46, 0, null, 0, 34, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(47, 114688, null, 0, dg, [], null, null),
						(l()(), go(48, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, Lg, Ug)),
						ea(49, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Color'])),
						(l()(), go(51, 0, null, 0, 29, 'ul', [['class', 'checkbox-group']], null, null, null, Lg, Ug)),
						ea(52, 114688, null, 0, dg, [], null, null),
						(l()(), go(53, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(54, 114688, null, 0, dg, [], null, null),
						(l()(), go(55, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'blue'], ['name', 'color'], ['type', 'checkbox']], null, null, null, Lg, Ug)),
						ea(56, 114688, null, 0, dg, [], null, null),
						(l()(), go(57, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'blue']], null, null, null, Lg, Ug)),
						ea(58, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Blue'])),
						(l()(), go(60, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(61, 114688, null, 0, dg, [], null, null),
						(l()(), go(62, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'green'], ['name', 'color'], ['type', 'checkbox']], null, null, null, Lg, Ug)),
						ea(63, 114688, null, 0, dg, [], null, null),
						(l()(), go(64, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'green']], null, null, null, Lg, Ug)),
						ea(65, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Green'])),
						(l()(), go(67, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(68, 114688, null, 0, dg, [], null, null),
						(l()(), go(69, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'red'], ['name', 'color'], ['type', 'checkbox']], null, null, null, Lg, Ug)),
						ea(70, 114688, null, 0, dg, [], null, null),
						(l()(), go(71, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'red']], null, null, null, Lg, Ug)),
						ea(72, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Red'])),
						(l()(), go(74, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(75, 114688, null, 0, dg, [], null, null),
						(l()(), go(76, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yellow'], ['name', 'color'], ['type', 'checkbox']], null, null, null, Lg, Ug)),
						ea(77, 114688, null, 0, dg, [], null, null),
						(l()(), go(78, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yellow']], null, null, null, Lg, Ug)),
						ea(79, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Yellow'])),
						(l()(), go(81, 0, null, null, 425, 'figure', [], null, null, null, null, null)),
						(l()(), go(82, 0, null, null, 424, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>\n    <ul '])),
						(l()(), go(87, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-group"'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(93, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(99, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(105, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(114, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, ['>Name</'])),
						(l()(), go(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(120, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(126, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(129, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(135, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(138, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(141, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter name"'])),
						(l()(), Ca(-1, null, ['>\n        </'])),
						(l()(), go(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(147, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(150, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(153, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <p '])),
						(l()(), go(156, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, ['>Agree</p>\n            <ul '])),
						(l()(), go(162, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(165, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"radio-group"'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(168, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(171, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(174, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(177, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(180, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(183, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(186, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(189, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"radio"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(192, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"agree"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(195, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"yes"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(198, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(201, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(204, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(207, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(210, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"yes"'])),
						(l()(), Ca(-1, null, ['>Yes</'])),
						(l()(), go(213, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n                </'])),
						(l()(), go(216, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(219, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(222, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(225, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(228, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(231, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(234, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(237, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(240, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"radio"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"agree"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(246, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"no"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(249, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(252, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(255, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(258, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(261, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"no"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(264, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['No'])),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(267, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n                </'])),
						(l()(), go(270, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), go(273, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(276, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(279, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(282, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <p '])),
						(l()(), go(285, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(288, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, ['>Color</p>\n            <ul '])),
						(l()(), go(291, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(294, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"checkbox-group"'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(297, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(300, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(303, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(306, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(309, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(312, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(315, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(318, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"checkbox"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(321, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"color"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(324, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"blue"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(327, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(330, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(333, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(336, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(339, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"blue"'])),
						(l()(), Ca(-1, null, ['>Blue</'])),
						(l()(), go(342, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n                </'])),
						(l()(), go(345, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(348, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(351, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(354, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(357, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(360, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(363, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(366, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(369, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"checkbox"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(372, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"color"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(375, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"green"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(378, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(381, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(384, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(387, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(390, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"green"'])),
						(l()(), Ca(-1, null, ['>Green</'])),
						(l()(), go(393, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n                </'])),
						(l()(), go(396, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(399, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(402, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(405, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(408, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(411, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(414, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(417, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(420, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"checkbox"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(423, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"color"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(426, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"red"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(429, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(432, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(435, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(438, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(441, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"red"'])),
						(l()(), Ca(-1, null, ['>Red</'])),
						(l()(), go(444, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n                </'])),
						(l()(), go(447, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(450, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(453, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(456, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(459, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(462, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(465, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(468, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(471, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"checkbox"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(474, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"color"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(477, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"yellow"'])),
						(l()(), Ca(-1, null, ['>\n                    <'])),
						(l()(), go(480, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(483, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(486, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(489, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(492, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"yellow"'])),
						(l()(), Ca(-1, null, ['>Yellow</'])),
						(l()(), go(495, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n                </'])),
						(l()(), go(498, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), go(501, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), go(504, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>']))
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
							l(n, 47, 0),
							l(n, 49, 0),
							l(n, 52, 0),
							l(n, 54, 0),
							l(n, 56, 0),
							l(n, 58, 0),
							l(n, 61, 0),
							l(n, 63, 0),
							l(n, 65, 0),
							l(n, 68, 0),
							l(n, 70, 0),
							l(n, 72, 0),
							l(n, 75, 0),
							l(n, 77, 0),
							l(n, 79, 0);
					},
					null
				);
			}
			function Bm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 186, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Field'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Form fields are styled with a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.form-field'])),
						(l()(), Ca(-1, null, [' class. Different styles are applied based on the form field.'])),
						(l()(), go(12, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 42, 'form', [], null, null, null, null, null)),
						(l()(), go(16, 0, null, null, 41, 'ul', [['class', 'form-group']], null, null, null, Lg, Ug)),
						ea(17, 114688, null, 0, dg, [], null, null),
						(l()(), go(18, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(19, 114688, null, 0, dg, [], null, null),
						(l()(), go(20, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, Lg, Ug)),
						ea(21, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Name'])),
						(l()(), go(23, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(24, 114688, null, 0, dg, [], null, null),
						(l()(), go(25, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(26, 114688, null, 0, dg, [], null, null),
						(l()(), go(27, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'gender']], null, null, null, Lg, Ug)),
						ea(28, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Gender'])),
						(l()(), go(30, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'gender'], ['name', 'gender']], null, null, null, Lg, Ug)),
						ea(31, 114688, null, 0, dg, [], null, null),
						(l()(), go(32, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Select'])),
						(l()(), go(34, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Female'])),
						(l()(), go(36, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Male'])),
						(l()(), go(38, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(39, 114688, null, 0, dg, [], null, null),
						(l()(), go(40, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'language']], null, null, null, Lg, Ug)),
						ea(41, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Language'])),
						(l()(), go(43, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'language'], ['multiple', ''], ['name', 'language']], null, null, null, Lg, Ug)),
						ea(44, 114688, null, 0, dg, [], null, null),
						(l()(), go(45, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['English'])),
						(l()(), go(47, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['French'])),
						(l()(), go(49, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Spanish'])),
						(l()(), go(51, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(52, 114688, null, 0, dg, [], null, null),
						(l()(), go(53, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'notes']], null, null, null, Lg, Ug)),
						ea(54, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Notes'])),
						(l()(), go(56, 0, null, 0, 1, 'textarea', [['class', 'form-field'], ['id', 'notes'], ['name', 'notes'], ['placeholder', 'Enter notes']], null, null, null, Lg, Ug)),
						ea(57, 114688, null, 0, dg, [], null, null),
						(l()(), go(58, 0, null, null, 128, 'figure', [], null, null, null, null, null)),
						(l()(), go(59, 0, null, null, 127, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<form>\n    <ul '])),
						(l()(), go(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-group">\n        <li '])),
						(l()(), go(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="field-group">\n            <label '])),
						(l()(), go(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-label" '])),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['="name">'])),
						(l()(), go(73, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Name'])),
						(l()(), Ca(-1, null, ['</label>\n            <'])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(79, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-field" '])),
						(l()(), go(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['="text" id="name" '])),
						(l()(), go(85, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['name'])),
						(l()(), Ca(-1, null, ['="name" placeholder="Enter name">\n        </li>\n        <li '])),
						(l()(), go(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="field-group">\n            <label '])),
						(l()(), go(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-label" '])),
						(l()(), go(94, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['="gender">Gender</label>\n            <'])),
						(l()(), go(97, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['select'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(100, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-field" '])),
						(l()(), go(103, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['name'])),
						(l()(), Ca(-1, null, ['="gender" id="gender">\n                <'])),
						(l()(), go(106, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Select'])),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>Female</'])),
						(l()(), go(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(121, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>Male</'])),
						(l()(), go(124, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>\n            </'])),
						(l()(), go(127, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['select'])),
						(l()(), Ca(-1, null, ['>\n        </li>\n        <li '])),
						(l()(), go(130, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="field-group">\n            <label '])),
						(l()(), go(133, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-label" '])),
						(l()(), go(136, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['="language">'])),
						(l()(), go(139, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Language'])),
						(l()(), Ca(-1, null, ['</label>\n            <'])),
						(l()(), go(142, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['select'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(145, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-field" '])),
						(l()(), go(148, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['name'])),
						(l()(), Ca(-1, null, ['="language" id="language" multiple>\n                <'])),
						(l()(), go(151, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>English</'])),
						(l()(), go(154, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(157, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>French</'])),
						(l()(), go(160, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(163, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>Spanish</'])),
						(l()(), go(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['option'])),
						(l()(), Ca(-1, null, ['>\n            </'])),
						(l()(), go(169, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['select'])),
						(l()(), Ca(-1, null, ['>\n        </li>\n        <li '])),
						(l()(), go(172, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="field-group">\n            <label '])),
						(l()(), go(175, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-label" '])),
						(l()(), go(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['="notes">Notes</label>\n            <textarea '])),
						(l()(), go(181, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['="form-field" '])),
						(l()(), go(184, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['name'])),
						(l()(), Ca(-1, null, ['="notes" id="notes" placeholder="Enter notes"></textarea>\n        </li>\n    </ul>    \n</form>']))
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
							l(n, 39, 0),
							l(n, 41, 0),
							l(n, 44, 0),
							l(n, 52, 0),
							l(n, 54, 0),
							l(n, 57, 0);
					},
					null
				);
			}
			function qm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 93, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Field Group'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Field groups are styled with a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.field-group'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(12, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), go(16, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, Lg, Ug)),
						ea(17, 114688, null, 0, dg, [], null, null),
						(l()(), go(18, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(19, 114688, null, 0, dg, [], null, null),
						(l()(), go(20, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, Lg, Ug)),
						ea(21, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Name'])),
						(l()(), go(23, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(24, 114688, null, 0, dg, [], null, null),
						(l()(), go(25, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), go(26, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(28, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>\n    <ul '])),
						(l()(), go(31, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(34, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-group"'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(37, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(40, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(43, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(49, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(52, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, ['>Name</'])),
						(l()(), go(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(85, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter name"'])),
						(l()(), Ca(-1, null, ['>\n        </'])),
						(l()(), go(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), go(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e), l(n, 17, 0), l(n, 19, 0), l(n, 21, 0), l(n, 24, 0);
					},
					null
				);
			}
			function Gm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 106, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 13, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Fieldset'])),
						(l()(), go(4, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Fieldsets are styled with a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.fieldset'])),
						(l()(), Ca(-1, null, [' class and have a '])),
						(l()(), go(12, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<legend>'])),
						(l()(), Ca(-1, null, [' tag as the first child.'])),
						(l()(), go(15, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(16, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(17, { flexbox: 0, box: 1 }),
						(l()(), go(18, 0, null, null, 13, 'form', [], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 12, 'fieldset', [['class', 'fieldset']], null, null, null, Lg, Ug)),
						ea(20, 114688, null, 0, dg, [], null, null),
						(l()(), go(21, 0, null, 0, 1, 'legend', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Contact'])),
						(l()(), go(23, 0, null, 0, 8, 'ul', [['class', 'form-group']], null, null, null, Lg, Ug)),
						ea(24, 114688, null, 0, dg, [], null, null),
						(l()(), go(25, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(26, 114688, null, 0, dg, [], null, null),
						(l()(), go(27, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, Lg, Ug)),
						ea(28, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Name'])),
						(l()(), go(30, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(31, 114688, null, 0, dg, [], null, null),
						(l()(), go(32, 0, null, null, 74, 'figure', [], null, null, null, null, null)),
						(l()(), go(33, 0, null, null, 73, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>\n    <fieldset '])),
						(l()(), go(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"fieldset"'])),
						(l()(), Ca(-1, null, ['>\n        <legend>Contact</legend>\n        <ul '])),
						(l()(), go(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(47, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(50, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(65, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, ['>Name</'])),
						(l()(), go(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n                <'])),
						(l()(), go(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(80, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(95, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(98, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter name"'])),
						(l()(), Ca(-1, null, ['>\n            </'])),
						(l()(), go(101, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n        </ul>\n    </fieldset>    \n</'])),
						(l()(), go(104, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 17, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 16, 0, 'pad-a-sm', e), l(n, 20, 0), l(n, 24, 0), l(n, 26, 0), l(n, 28, 0), l(n, 31, 0);
					},
					null
				);
			}
			function Qm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 287, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 13, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Form Group'])),
						(l()(), go(4, 0, null, null, 10, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 8, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Form groups are styled with a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.form-group'])),
						(l()(), Ca(-1, null, [' class for vertical fields and '])),
						(l()(), go(12, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.form-group-inline'])),
						(l()(), Ca(-1, null, [' for horizontal fields.'])),
						(l()(), go(15, 0, null, null, 35, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(16, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(17, { flexbox: 0, box: 1 }),
						(l()(), go(18, 0, null, null, 32, 'form', [], null, null, null, null, null)),
						(l()(), go(19, 0, null, null, 15, 'ul', [['class', 'form-group-inline']], null, null, null, Lg, Ug)),
						ea(20, 114688, null, 0, dg, [], null, null),
						(l()(), go(21, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(22, 114688, null, 0, dg, [], null, null),
						(l()(), go(23, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, Lg, Ug)),
						ea(24, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Name'])),
						(l()(), go(26, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(27, 114688, null, 0, dg, [], null, null),
						(l()(), go(28, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(29, 114688, null, 0, dg, [], null, null),
						(l()(), go(30, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, Lg, Ug)),
						ea(31, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Email'])),
						(l()(),
						go(33, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(34, 114688, null, 0, dg, [], null, null),
						(l()(), go(35, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, Lg, Ug)),
						ea(36, 114688, null, 0, dg, [], null, null),
						(l()(), go(37, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(38, 114688, null, 0, dg, [], null, null),
						(l()(), go(39, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, Lg, Ug)),
						ea(40, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Name'])),
						(l()(), go(42, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(43, 114688, null, 0, dg, [], null, null),
						(l()(), go(44, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(45, 114688, null, 0, dg, [], null, null),
						(l()(), go(46, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, Lg, Ug)),
						ea(47, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Email'])),
						(l()(),
						go(49, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(50, 114688, null, 0, dg, [], null, null),
						(l()(), go(51, 0, null, null, 236, 'figure', [], null, null, null, null, null)),
						(l()(), go(52, 0, null, null, 235, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>\n    <ul '])),
						(l()(), go(57, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-group-inline"'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(66, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, ['>Name</'])),
						(l()(), go(87, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(90, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(93, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(96, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(102, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(111, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter name"'])),
						(l()(), Ca(-1, null, ['>\n        </'])),
						(l()(), go(114, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(120, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(123, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(126, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(129, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(135, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(138, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"email"'])),
						(l()(), Ca(-1, null, ['>Email</'])),
						(l()(), go(141, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(147, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(150, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(153, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(156, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"email"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(162, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"email"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(165, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter email"'])),
						(l()(), Ca(-1, null, ['>\n        </'])),
						(l()(), go(168, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n    </ul>    \n    <ul '])),
						(l()(), go(171, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(174, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-group"'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(177, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(180, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(183, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(186, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(189, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(192, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(195, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(198, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, ['>Name</'])),
						(l()(), go(201, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(204, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(207, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(210, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(213, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(216, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(219, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(222, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(225, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter name"'])),
						(l()(), Ca(-1, null, ['>\n        </'])),
						(l()(), go(228, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(231, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(234, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(237, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(240, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(243, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(246, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(249, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(252, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"email"'])),
						(l()(), Ca(-1, null, ['>Email</'])),
						(l()(), go(255, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(258, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(261, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(264, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(267, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(270, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(273, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"email"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(276, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"email"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(279, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter email"'])),
						(l()(), Ca(-1, null, ['>\n        </'])),
						(l()(), go(282, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), go(285, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 17, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 16, 0, 'pad-a-sm', e),
							l(n, 20, 0),
							l(n, 22, 0),
							l(n, 24, 0),
							l(n, 27, 0),
							l(n, 29, 0),
							l(n, 31, 0),
							l(n, 34, 0),
							l(n, 36, 0),
							l(n, 38, 0),
							l(n, 40, 0),
							l(n, 43, 0),
							l(n, 45, 0),
							l(n, 47, 0),
							l(n, 50, 0);
					},
					null
				);
			}
			function Zm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 93, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Label'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Form labels are styled with a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.form-label'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(12, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), go(16, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, Lg, Ug)),
						ea(17, 114688, null, 0, dg, [], null, null),
						(l()(), go(18, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, Lg, Ug)),
						ea(19, 114688, null, 0, dg, [], null, null),
						(l()(), go(20, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, Lg, Ug)),
						ea(21, 114688, null, 0, dg, [], null, null),
						(l()(), Ca(-1, 0, ['Name'])),
						(l()(), go(23, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, Lg, Ug)),
						ea(24, 114688, null, 0, dg, [], null, null),
						(l()(), go(25, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), go(26, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(28, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>\n    <ul '])),
						(l()(), go(31, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(34, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-group"'])),
						(l()(), Ca(-1, null, ['>\n        <'])),
						(l()(), go(37, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(40, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(43, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"field-group"'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(49, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(52, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-label"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['for'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, ['>Name</'])),
						(l()(), go(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['label'])),
						(l()(), Ca(-1, null, ['>\n            <'])),
						(l()(), go(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['input'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"form-field"'])),
						(l()(), Ca(-1, null, [' '])),
						(l()(), go(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['type'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"text"'])),
						(l()(), Ca(-1, null, [' id='])),
						(l()(), go(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' name='])),
						(l()(), go(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"name"'])),
						(l()(), Ca(-1, null, [' placeholder='])),
						(l()(), go(85, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"Enter name"'])),
						(l()(), Ca(-1, null, ['>\n        </'])),
						(l()(), go(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['li'])),
						(l()(), Ca(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), go(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['form'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e), l(n, 17, 0), l(n, 19, 0), l(n, 21, 0), l(n, 24, 0);
					},
					null
				);
			}
			function Wm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Km(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Area'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ym(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Container'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Jm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Item'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function $m(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Xm(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Container'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function lb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Sticky Footer'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function nb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ub(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function eb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Items'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function tb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Links'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function rb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Placement'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function sb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ob(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ab(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ib(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.']))
					],
					null,
					null
				);
			}
			function cb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 91, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Margin'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), Ca(-1, null, [' class to add margin to an element.'])),
						(l()(), go(12, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 1, 'p', [['class', 'mar-t-xs']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top extra small'])),
						(l()(), go(17, 0, null, null, 1, 'p', [['class', 'mar-r-sm']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right small'])),
						(l()(), go(19, 0, null, null, 1, 'p', [['class', 'mar-b-md']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom medium'])),
						(l()(), go(21, 0, null, null, 1, 'p', [['class', 'mar-l-lg']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left large'])),
						(l()(), go(23, 0, null, null, 1, 'p', [['class', 'mar-tb-xl']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top bottom extra large'])),
						(l()(), go(25, 0, null, null, 1, 'p', [['class', 'mar-lr-md']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left right medium'])),
						(l()(), go(27, 0, null, null, 1, 'p', [['class', 'mar-a-md']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['all medium'])),
						(l()(), go(29, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), go(30, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(32, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(35, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"mar-t-xs"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(38, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top'])),
						(l()(), Ca(-1, null, [' extra small</p>\n<'])),
						(l()(), go(41, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(44, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"mar-r-sm"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(47, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), Ca(-1, null, [' small</p>\n<'])),
						(l()(), go(50, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(53, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"mar-b-md"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(56, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), Ca(-1, null, [' medium</p>\n<'])),
						(l()(), go(59, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(62, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"mar-l-lg"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left'])),
						(l()(), Ca(-1, null, [' large</p>\n<'])),
						(l()(), go(68, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"mar-tb-xl"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(74, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top'])),
						(l()(), Ca(-1, null, [' bottom extra large</p>\n<'])),
						(l()(), go(77, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"mar-lr-md"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(83, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left'])),
						(l()(), Ca(-1, null, [' right medium</p>\n<'])),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"mar-a-md"'])),
						(l()(), Ca(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function pb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 91, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Padding'])),
						(l()(), go(4, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Use a '])),
						(l()(), go(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), Ca(-1, null, [' class to add padding to an element.'])),
						(l()(), go(12, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(13, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(14, { flexbox: 0, box: 1 }),
						(l()(), go(15, 0, null, null, 1, 'p', [['class', 'pad-t-xs']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top extra small'])),
						(l()(), go(17, 0, null, null, 1, 'p', [['class', 'pad-r-sm']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right small'])),
						(l()(), go(19, 0, null, null, 1, 'p', [['class', 'pad-b-md']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom medium'])),
						(l()(), go(21, 0, null, null, 1, 'p', [['class', 'pad-l-lg']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left large'])),
						(l()(), go(23, 0, null, null, 1, 'p', [['class', 'pad-tb-xl']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top bottom extra large'])),
						(l()(), go(25, 0, null, null, 1, 'p', [['class', 'pad-lr-md']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left right medium'])),
						(l()(), go(27, 0, null, null, 1, 'p', [['class', 'pad-a-md']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['all medium'])),
						(l()(), go(29, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), go(30, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<'])),
						(l()(), go(32, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(35, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"pad-t-xs"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(38, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top'])),
						(l()(), Ca(-1, null, [' extra small</p>\n<'])),
						(l()(), go(41, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(44, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"pad-r-sm"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(47, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['right'])),
						(l()(), Ca(-1, null, [' small</p>\n<'])),
						(l()(), go(50, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(53, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"pad-b-md"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(56, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['bottom'])),
						(l()(), Ca(-1, null, [' medium</p>\n<'])),
						(l()(), go(59, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(62, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"pad-l-lg"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left'])),
						(l()(), Ca(-1, null, [' large</p>\n<'])),
						(l()(), go(68, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"pad-tb-xl"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(74, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['top'])),
						(l()(), Ca(-1, null, [' bottom extra large</p>\n<'])),
						(l()(), go(77, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"pad-lr-md"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(83, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['left'])),
						(l()(), Ca(-1, null, [' right medium</p>\n<'])),
						(l()(), go(86, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, [' class='])),
						(l()(), go(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"pad-a-md"'])),
						(l()(), Ca(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function hb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 46, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 7, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 5, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Spinners are styled with a '])),
						(l()(), go(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['.spinner[-dotted]'])),
						(l()(), Ca(-1, null, [' class.'])),
						(l()(), go(10, 0, null, null, 6, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						ea(11, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(12, { flexbox: 0, box: 1 }),
						(l()(), go(13, 0, null, null, 1, 'p', [['class', 'spinner']], null, null, null, Fg, Hg)),
						ea(14, 114688, null, 0, wg, [], null, null),
						(l()(), go(15, 0, null, null, 1, 'p', [['class', 'spinner-dotted']], null, null, null, Fg, Hg)),
						ea(16, 114688, null, 0, wg, [], null, null),
						(l()(), go(17, 0, null, null, 29, 'figure', [], null, null, null, null, null)),
						(l()(), go(18, 0, null, null, 28, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['<p '])),
						(l()(), go(20, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(21, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(24, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"spinner"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(27, 0, null, null, 5, 'span', [['class', 'xml']], null, null, null, null, null)),
						(l()(), go(28, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(30, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), Ca(-1, null, ['\n<p '])),
						(l()(), go(34, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), go(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['class'])),
						(l()(), Ca(-1, null, ['='])),
						(l()(), go(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['"spinner-dotted"'])),
						(l()(), Ca(-1, null, ['>'])),
						(l()(), go(41, 0, null, null, 5, 'span', [['class', 'xml']], null, null, null, null, null)),
						(l()(), go(42, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['</'])),
						(l()(), go(44, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['p'])),
						(l()(), Ca(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 16, 0);
					},
					null
				);
			}
			function db(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function fb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function gb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function mb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Border'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function bb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Hover'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function yb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Striped'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function vb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Table Cell'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function wb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Table Row'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function jb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function _b(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function xb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Font'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function kb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Text'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Cb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 6, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(3, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(4, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Sb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Hide'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Eb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 8, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Show'])),
						(l()(), go(4, 0, null, null, 4, 'html', [], null, null, null, null, null)),
						(l()(), go(5, 0, null, null, 0, 'head', [], null, null, null, null, null)),
						(l()(), go(6, 0, null, null, 2, 'body', [], null, null, null, null, null)),
						(l()(), go(7, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Ca(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ib(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 169, 'nav', [['class', 'pad-a-sm border-a-gray box-shadow-1 fixed-l styleguide-menu']], null, null, null, null, null)),
						(l()(), go(1, 0, null, null, 168, 'ul', [], null, null, null, null, null)),
						(l()(), go(2, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
						ea(4, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(5, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Alert'])),
						(l()(), fo(16777216, null, null, 1, null, qg)),
						ea(8, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(9, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
						ea(11, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(12, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Badge'])),
						(l()(), fo(16777216, null, null, 1, null, Gg)),
						ea(15, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(16, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
						ea(18, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(19, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Button'])),
						(l()(), fo(16777216, null, null, 1, null, Qg)),
						ea(22, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(23, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
						ea(25, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(26, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Card'])),
						(l()(), fo(16777216, null, null, 1, null, Zg)),
						ea(29, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(30, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
						ea(32, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(33, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Collapse'])),
						(l()(), fo(16777216, null, null, 1, null, Wg)),
						ea(36, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(37, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
						ea(39, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(40, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Color'])),
						(l()(), fo(16777216, null, null, 1, null, Kg)),
						ea(43, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(44, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Dropdown') && e), e;
							},
							null,
							null
						)),
						ea(46, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(47, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Dropdown'])),
						(l()(), fo(16777216, null, null, 1, null, Yg)),
						ea(50, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(51, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Flexbox') && e), e;
							},
							null,
							null
						)),
						ea(53, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(54, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Flexbox'])),
						(l()(), fo(16777216, null, null, 1, null, Jg)),
						ea(57, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(58, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Form') && e), e;
							},
							null,
							null
						)),
						ea(60, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(61, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Form'])),
						(l()(), fo(16777216, null, null, 1, null, $g)),
						ea(64, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(65, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Grid') && e), e;
							},
							null,
							null
						)),
						ea(67, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(68, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Grid'])),
						(l()(), fo(16777216, null, null, 1, null, Xg)),
						ea(71, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(72, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Layout') && e), e;
							},
							null,
							null
						)),
						ea(74, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(75, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Layout'])),
						(l()(), fo(16777216, null, null, 1, null, lm)),
						ea(78, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(79, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Modal') && e), e;
							},
							null,
							null
						)),
						ea(81, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(82, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Modal'])),
						(l()(), fo(16777216, null, null, 1, null, nm)),
						ea(85, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(86, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Nav') && e), e;
							},
							null,
							null
						)),
						ea(88, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(89, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Nav'])),
						(l()(), fo(16777216, null, null, 1, null, um)),
						ea(92, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(93, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Position') && e), e;
							},
							null,
							null
						)),
						ea(95, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(96, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Position'])),
						(l()(), fo(16777216, null, null, 1, null, em)),
						ea(99, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(100, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Slider') && e), e;
							},
							null,
							null
						)),
						ea(102, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(103, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Slider'])),
						(l()(), fo(16777216, null, null, 1, null, tm)),
						ea(106, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(107, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Slideshow') && e), e;
							},
							null,
							null
						)),
						ea(109, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(110, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Slideshow'])),
						(l()(), fo(16777216, null, null, 1, null, rm)),
						ea(113, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(114, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Space') && e), e;
							},
							null,
							null
						)),
						ea(116, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(117, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Space'])),
						(l()(), fo(16777216, null, null, 1, null, sm)),
						ea(120, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(121, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Spinner') && e), e;
							},
							null,
							null
						)),
						ea(123, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(124, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Spinner'])),
						(l()(), fo(16777216, null, null, 1, null, om)),
						ea(127, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(128, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Switch') && e), e;
							},
							null,
							null
						)),
						ea(130, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(131, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Switch'])),
						(l()(), fo(16777216, null, null, 1, null, am)),
						ea(134, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(135, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Tab') && e), e;
							},
							null,
							null
						)),
						ea(137, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(138, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Tab'])),
						(l()(), fo(16777216, null, null, 1, null, im)),
						ea(141, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(142, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Table') && e), e;
							},
							null,
							null
						)),
						ea(144, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(145, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Table'])),
						(l()(), fo(16777216, null, null, 1, null, cm)),
						ea(148, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(149, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Tooltip') && e), e;
							},
							null,
							null
						)),
						ea(151, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(152, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Tooltip'])),
						(l()(), fo(16777216, null, null, 1, null, pm)),
						ea(155, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(156, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
								return 'click' === n && (e = !1 !== l.component.selectSection('Typography') && e), e;
							},
							null,
							null
						)),
						ea(158, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(159, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Typography'])),
						(l()(), fo(16777216, null, null, 1, null, hm)),
						ea(162, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(163, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						go(
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
						ea(165, 278528, null, 0, $i, [ds, fs, Ye, nt], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						ka(166, { 'bg-lt-gray': 0 }),
						(l()(), Ca(-1, null, ['Visibility'])),
						(l()(), fo(16777216, null, null, 1, null, dm)),
						ea(169, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), go(170, 0, [['content', 1]], null, 137, 'main', [['class', 'pad-a-xl styleguide'], ['tabindex', '-1']], null, null, null, null, null)),
						(l()(), go(171, 0, null, null, 0, 'h1', [['class', 'pad-t-xl']], [[8, 'innerHTML', 1]], null, null, null, null)),
						(l()(), fo(16777216, null, null, 1, null, fm)),
						ea(173, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, gm)),
						ea(175, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, mm)),
						ea(177, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, bm)),
						ea(179, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, ym)),
						ea(181, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, vm)),
						ea(183, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, wm)),
						ea(185, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, jm)),
						ea(187, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, _m)),
						ea(189, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, xm)),
						ea(191, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, km)),
						ea(193, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Cm)),
						ea(195, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Sm)),
						ea(197, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Em)),
						ea(199, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Im)),
						ea(201, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Pm)),
						ea(203, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Om)),
						ea(205, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Tm)),
						ea(207, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Mm)),
						ea(209, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Rm)),
						ea(211, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Am)),
						ea(213, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Nm)),
						ea(215, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Dm)),
						ea(217, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Vm)),
						ea(219, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Um)),
						ea(221, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Lm)),
						ea(223, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Hm)),
						ea(225, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Fm)),
						ea(227, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, zm)),
						ea(229, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Bm)),
						ea(231, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, qm)),
						ea(233, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Gm)),
						ea(235, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Qm)),
						ea(237, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Zm)),
						ea(239, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Wm)),
						ea(241, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Km)),
						ea(243, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Ym)),
						ea(245, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Jm)),
						ea(247, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, $m)),
						ea(249, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Xm)),
						ea(251, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, lb)),
						ea(253, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, nb)),
						ea(255, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, ub)),
						ea(257, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, eb)),
						ea(259, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, tb)),
						ea(261, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, rb)),
						ea(263, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, sb)),
						ea(265, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, ob)),
						ea(267, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, ab)),
						ea(269, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, ib)),
						ea(271, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, cb)),
						ea(273, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, pb)),
						ea(275, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, hb)),
						ea(277, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, db)),
						ea(279, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, fb)),
						ea(281, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, gb)),
						ea(283, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, mb)),
						ea(285, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, bb)),
						ea(287, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, yb)),
						ea(289, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, vb)),
						ea(291, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, wb)),
						ea(293, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, jb)),
						ea(295, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, _b)),
						ea(297, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, xb)),
						ea(299, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, kb)),
						ea(301, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Cb)),
						ea(303, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Sb)),
						ea(305, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null),
						(l()(), fo(16777216, null, null, 1, null, Eb)),
						ea(307, 16384, null, 0, Xi, [Zr, Lt], { ngIf: [0, 'ngIf'] }, null)
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
						var o = l(n, 33, 0, u.checkSection('Collapse'));
						l(n, 32, 0, 'hover bg-hover-lt-gray pad-a-xs', o), l(n, 36, 0, u.checkSection('Collapse'));
						var a = l(n, 40, 0, u.checkSection('Color'));
						l(n, 39, 0, 'hover bg-hover-lt-gray pad-a-xs', a), l(n, 43, 0, u.checkSection('Color'));
						var i = l(n, 47, 0, u.checkSection('Dropdown'));
						l(n, 46, 0, 'hover bg-hover-lt-gray pad-a-xs', i), l(n, 50, 0, u.checkSection('Dropdown'));
						var c = l(n, 54, 0, u.checkSection('Flexbox'));
						l(n, 53, 0, 'hover bg-hover-lt-gray pad-a-xs', c), l(n, 57, 0, u.checkSection('Flexbox'));
						var p = l(n, 61, 0, u.checkSection('Form'));
						l(n, 60, 0, 'hover bg-hover-lt-gray pad-a-xs', p), l(n, 64, 0, u.checkSection('Form'));
						var h = l(n, 68, 0, u.checkSection('Grid'));
						l(n, 67, 0, 'hover bg-hover-lt-gray pad-a-xs', h), l(n, 71, 0, u.checkSection('Grid'));
						var d = l(n, 75, 0, u.checkSection('Layout'));
						l(n, 74, 0, 'hover bg-hover-lt-gray pad-a-xs', d), l(n, 78, 0, u.checkSection('Layout'));
						var f = l(n, 82, 0, u.checkSection('Modal'));
						l(n, 81, 0, 'hover bg-hover-lt-gray pad-a-xs', f), l(n, 85, 0, u.checkSection('Modal'));
						var g = l(n, 89, 0, u.checkSection('Nav'));
						l(n, 88, 0, 'hover bg-hover-lt-gray pad-a-xs', g), l(n, 92, 0, u.checkSection('Nav'));
						var m = l(n, 96, 0, u.checkSection('Position'));
						l(n, 95, 0, 'hover bg-hover-lt-gray pad-a-xs', m), l(n, 99, 0, u.checkSection('Position'));
						var b = l(n, 103, 0, u.checkSection('Slider'));
						l(n, 102, 0, 'hover bg-hover-lt-gray pad-a-xs', b), l(n, 106, 0, u.checkSection('Slider'));
						var y = l(n, 110, 0, u.checkSection('Slideshow'));
						l(n, 109, 0, 'hover bg-hover-lt-gray pad-a-xs', y), l(n, 113, 0, u.checkSection('Slideshow'));
						var v = l(n, 117, 0, u.checkSection('Space'));
						l(n, 116, 0, 'hover bg-hover-lt-gray pad-a-xs', v), l(n, 120, 0, u.checkSection('Space'));
						var w = l(n, 124, 0, u.checkSection('Spinner'));
						l(n, 123, 0, 'hover bg-hover-lt-gray pad-a-xs', w), l(n, 127, 0, u.checkSection('Spinner'));
						var j = l(n, 131, 0, u.checkSection('Switch'));
						l(n, 130, 0, 'hover bg-hover-lt-gray pad-a-xs', j), l(n, 134, 0, u.checkSection('Switch'));
						var _ = l(n, 138, 0, u.checkSection('Tab'));
						l(n, 137, 0, 'hover bg-hover-lt-gray pad-a-xs', _), l(n, 141, 0, u.checkSection('Tab'));
						var x = l(n, 145, 0, u.checkSection('Table'));
						l(n, 144, 0, 'hover bg-hover-lt-gray pad-a-xs', x), l(n, 148, 0, u.checkSection('Table'));
						var k = l(n, 152, 0, u.checkSection('Tooltip'));
						l(n, 151, 0, 'hover bg-hover-lt-gray pad-a-xs', k), l(n, 155, 0, u.checkSection('Tooltip'));
						var C = l(n, 159, 0, u.checkSection('Typography'));
						l(n, 158, 0, 'hover bg-hover-lt-gray pad-a-xs', C), l(n, 162, 0, u.checkSection('Typography'));
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
							l(n, 207, 0, u.checkSection('Dropdown')),
							l(n, 209, 0, u.checkSection('Flexbox')),
							l(n, 211, 0, u.checkSection('Flexbox')),
							l(n, 213, 0, u.checkSection('Flexbox')),
							l(n, 215, 0, u.checkSection('Flexbox')),
							l(n, 217, 0, u.checkSection('Flexbox')),
							l(n, 219, 0, u.checkSection('Flexbox')),
							l(n, 221, 0, u.checkSection('Flexbox')),
							l(n, 223, 0, u.checkSection('Flexbox')),
							l(n, 225, 0, u.checkSection('Flexbox')),
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
							l(n, 303, 0, u.checkSection('Visibility')),
							l(n, 305, 0, u.checkSection('Visibility')),
							l(n, 307, 0, u.checkSection('Visibility'));
					},
					function(l, n) {
						l(n, 171, 0, n.component.section);
					}
				);
			}
			function Pb(l) {
				return Ia(
					0,
					[(l()(), go(0, 0, null, null, 1, 'ng-component', [], null, null, null, Ib, Bg)), ea(1, 114688, null, 0, zg, [], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			var Ob = Ro('ng-component', zg, Pb, {}, {}, []),
				Tb = Hs({ encapsulation: 0, styles: [['']], data: {} });
			function Mb(l) {
				return Ia(
					0,
					[
						(l()(), go(0, 0, null, null, 3, 'ez-root', [], null, null, null, Og, Pg)),
						ea(1, 114688, null, 0, Sg, [Ye], null, null),
						(l()(), go(2, 16777216, null, 0, 1, 'router-outlet', [], null, null, null, null, null)),
						ea(3, 212992, null, 0, Tf, [Of, Zr, qe, [8, null], Kr], null, null)
					],
					function(l, n) {
						l(n, 1, 0), l(n, 3, 0);
					},
					null
				);
			}
			function Rb(l) {
				return Ia(0, [(l()(), go(0, 0, null, null, 1, 'docs-root', [], null, null, null, Mb, Tb)), ea(1, 49152, null, 0, Di, [], null, null)], null, null);
			}
			var Ab = Ro('docs-root', Di, Rb, {}, {}, []),
				Nb = (function() {
					return function() {};
				})(),
				Db = (function() {
					return function() {};
				})(),
				Vb = Ri(Ni, [Di], function(l) {
					return (function(l) {
						for (var n = {}, u = [], e = !1, t = 0; t < l.length; t++) {
							var r = l[t];
							r.token === Se && !0 === r.value && (e = !0), 1073741824 & r.flags && u.push(r.token), (r.index = t), (n[Vs(r.token)] = r);
						}
						return { factory: null, providersByKey: n, providers: l, modules: u, isRoot: e };
					})([
						ko(512, qe, Ge, [[8, [ug, Ob, Ab]], [3, qe], Ze]),
						ko(5120, vs, _s, [[3, vs]]),
						ko(4608, Yi, Ji, [vs, [2, Ki]]),
						ko(5120, nr, ur, []),
						ko(5120, ds, ws, []),
						ko(5120, fs, js, []),
						ko(4608, $p, Xp, [ec]),
						ko(6144, tt, null, [$p]),
						ko(4608, Gp, Zp, []),
						ko(
							5120,
							yp,
							function(l, n, u, e, t, r, s, o) {
								return [new Bp(l, n, u), new Jp(e), new Wp(t, r, s, o)];
							},
							[ec, _r, rr, ec, ec, Gp, or, [2, Qp]]
						),
						ko(4608, vp, vp, [yp, _r]),
						ko(135680, _p, _p, [ec]),
						ko(4608, Pp, Pp, [vp, _p]),
						ko(6144, Xe, null, [Pp]),
						ko(6144, jp, null, [_p]),
						ko(4608, Or, Or, [_r]),
						ko(5120, bd, Wf, [If]),
						ko(4608, Nf, Nf, []),
						ko(6144, Rf, null, [Nf]),
						ko(135680, Df, Df, [If, Bt, gr, he, Rf]),
						ko(4608, Af, Af, []),
						ko(5120, Vf, Bf, [If, rc, Uf]),
						ko(5120, $f, Jf, [Kf]),
						ko(
							5120,
							sr,
							function(l) {
								return [l];
							},
							[$f]
						),
						ko(1073742336, uc, uc, []),
						ko(1024, Yt, oh, []),
						ko(
							1024,
							Ar,
							function() {
								return [Ff()];
							},
							[]
						),
						ko(512, Kf, Kf, [he]),
						ko(
							1024,
							Xt,
							function(l, n) {
								return [
									((u = l),
									gp('probe', bp),
									gp(
										'coreTokens',
										r(
											{},
											mp,
											(u || []).reduce(function(l, n) {
												return (l[n.name] = n.token), l;
											}, {})
										)
									),
									function() {
										return bp;
									}),
									Yf(n)
								];
								var u;
							},
							[[2, Ar], Kf]
						),
						ko(512, lr, lr, [[2, Xt]]),
						ko(131584, Lr, Lr, [_r, or, he, Yt, qe, lr]),
						ko(1073742336, xs, xs, [Lr]),
						ko(1073742336, ah, ah, [[3, ah]]),
						ko(1073742336, Eg, Eg, []),
						ko(1024, Lf, Gf, [[3, If]]),
						ko(512, Kh, Yh, []),
						ko(512, Of, Of, []),
						ko(256, Uf, { useHash: !0, anchorScrolling: 'enabled' }, []),
						ko(1024, Li, qf, [Vi, [2, Hi], Uf]),
						ko(512, Fi, Fi, [Li]),
						ko(512, gr, gr, []),
						ko(512, Bt, qr, [gr, [2, zr]]),
						ko(
							1024,
							jf,
							function() {
								return [
									[{ path: 'components', component: zg }, { path: '', redirectTo: '/components', pathMatch: 'full' }, { path: '**', redirectTo: '/components', pathMatch: 'full' }]
								];
							},
							[]
						),
						ko(1024, If, Zf, [Lr, Kh, Of, Fi, he, Bt, gr, jf, Uf, [2, xf], [2, vf]]),
						ko(1073742336, zf, zf, [[2, Lf], [2, If]]),
						ko(1073742336, Nb, Nb, []),
						ko(1073742336, tg, tg, []),
						ko(1073742336, rg, rg, []),
						ko(1073742336, og, og, []),
						ko(1073742336, ig, ig, []),
						ko(1073742336, cg, cg, []),
						ko(1073742336, pg, pg, []),
						ko(1073742336, hg, hg, []),
						ko(1073742336, fg, fg, []),
						ko(1073742336, gg, gg, []),
						ko(1073742336, mg, mg, []),
						ko(1073742336, bg, bg, []),
						ko(1073742336, yg, yg, []),
						ko(1073742336, vg, vg, []),
						ko(1073742336, jg, jg, []),
						ko(1073742336, _g, _g, []),
						ko(1073742336, xg, xg, []),
						ko(1073742336, kg, kg, []),
						ko(1073742336, Cg, Cg, []),
						ko(1073742336, Ig, Ig, []),
						ko(1073742336, Db, Db, []),
						ko(1073742336, Ni, Ni, []),
						ko(256, Se, !0, [])
					]);
				});
			(function() {
				if (ft) throw new Error('Cannot enable prod mode after platform setup.');
				dt = !1;
			})(),
				sh()
					.bootstrapModuleFactory(Vb)
					.catch(function(l) {
						return console.log(l);
					});
		}
	},
	[[0, 0]]
]);
//# sourceMappingURL=main.14e29c47132c6ea7dcba.js.map
