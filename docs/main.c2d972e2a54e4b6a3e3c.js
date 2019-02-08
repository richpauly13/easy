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
								for (var s = -1, a = e ? e.length : 0; u; ) u.remove(this), (u = (++s < a && e[s]) || null);
								if (d(t))
									try {
										t.call(this);
									} catch (i) {
										(n = !0), (l = i instanceof g ? b(i.errors) : [i]);
									}
								if (p(r))
									for (s = -1, a = r.length; ++s < a; ) {
										var o = r[s];
										if (h(o))
											try {
												o.unsubscribe();
											} catch (i) {
												(n = !0), (l = l || []), i instanceof g ? (l = l.concat(b(i.errors))) : l.push(i);
											}
									}
								if (n) throw new g(l);
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
							if (u._addParent(this)) {
								var t = this._subscriptions;
								t ? t.push(u) : (this._subscriptions = [u]);
							}
							return u;
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
							return n !== l && (n ? (u ? -1 === u.indexOf(l) && (u.push(l), !0) : ((this._parents = [l]), !0)) : ((this._parent = l), !0));
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
				});
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
							var l = this._parent,
								n = this._parents;
							return (this._parent = null), (this._parents = null), this.unsubscribe(), (this.closed = !1), (this.isStopped = !1), (this._parent = l), (this._parents = n), this;
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
				return I(l);
			}
			function I(l) {
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
			var P = (function() {
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
						return 0 === l.length ? this : I(l)(this);
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
							var l = new P();
							return (l.source = this), l;
						}),
						(n.create = function(l, n) {
							return new D(l, n);
						}),
						n
					);
				})(P),
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
						n.closed || n.complete();
					};
				},
				F = function(l) {
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
								.then(null, w),
							n
						);
					};
				};
			function z() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			}
			var H = z(),
				B = function(l) {
					return function(n) {
						for (var u = l[H](); ; ) {
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
				q = function(l) {
					return function(n) {
						var u = l[C]();
						if ('function' != typeof u.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
						return u.subscribe(n);
					};
				},
				G = function(l) {
					return l && 'number' == typeof l.length && 'function' != typeof l;
				};
			function Z(l) {
				return !!l && 'function' != typeof l.subscribe && 'function' == typeof l.then;
			}
			var Q = function(l) {
				if (l instanceof P)
					return function(n) {
						return l._isScalar ? (n.next(l.value), void n.complete()) : l.subscribe(n);
					};
				if (l && 'function' == typeof l[C]) return q(l);
				if (G(l)) return V(l);
				if (Z(l)) return F(l);
				if (l && 'function' == typeof l[H]) return B(l);
				var n = h(l) ? 'an invalid object' : "'" + l + "'";
				throw new TypeError('You provided ' + n + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.');
			};
			function W(l, n, u, e, t) {
				if ((void 0 === t && (t = new L(l, u, e)), !t.closed)) return Q(n)(t);
			}
			var K = (function(l) {
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
			function Y(l, n) {
				return function(u) {
					if ('function' != typeof l) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
					return u.lift(new J(l, n));
				};
			}
			var J = (function() {
					function l(l, n) {
						(this.project = l), (this.thisArg = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new $(l, this.project, this.thisArg));
						}),
						l
					);
				})(),
				$ = (function(l) {
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
			function X(l, n) {
				return new P(
					n
						? function(u) {
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
						  }
						: V(l)
				);
			}
			function ll(l, n) {
				if (!n) return l instanceof P ? l : new P(Q(l));
				if (null != l) {
					if (
						(function(l) {
							return l && 'function' == typeof l[C];
						})(l)
					)
						return (function(l, n) {
							return new P(
								n
									? function(u) {
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
									  }
									: q(l)
							);
						})(l, n);
					if (Z(l))
						return (function(l, n) {
							return new P(
								n
									? function(u) {
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
									  }
									: F(l)
							);
						})(l, n);
					if (G(l)) return X(l, n);
					if (
						(function(l) {
							return l && 'function' == typeof l[H];
						})(l) ||
						'string' == typeof l
					)
						return (function(l, n) {
							if (!l) throw new Error('Iterable cannot be null');
							return new P(
								n
									? function(u) {
											var e,
												t = new m();
											return (
												t.add(function() {
													e && 'function' == typeof e.return && e.return();
												}),
												t.add(
													n.schedule(function() {
														(e = l[H]()),
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
									: B(l)
							);
						})(l, n);
				}
				throw new TypeError(((null !== l && typeof l) || l) + ' is not observable');
			}
			function nl(l, n, u) {
				return (
					void 0 === u && (u = Number.POSITIVE_INFINITY),
					'function' == typeof n
						? function(e) {
								return e.pipe(
									nl(function(u, e) {
										return ll(l(u, e)).pipe(
											Y(function(l, t) {
												return n(u, l, e, t);
											})
										);
									}, u)
								);
						  }
						: ('number' == typeof n && (u = n),
						  function(n) {
								return n.lift(new ul(l, u));
						  })
				);
			}
			var ul = (function() {
					function l(l, n) {
						void 0 === n && (n = Number.POSITIVE_INFINITY), (this.project = l), (this.concurrent = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new el(l, this.project, this.concurrent));
						}),
						l
					);
				})(),
				el = (function(l) {
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
							this.destination.add(e), W(this, l, n, u, e);
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
				})(K);
			function tl(l) {
				return l;
			}
			function rl(l) {
				return void 0 === l && (l = Number.POSITIVE_INFINITY), nl(tl, l);
			}
			function sl() {
				return function(l) {
					return l.lift(new al(l));
				};
			}
			var al = (function() {
					function l(l) {
						this.connectable = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							var u = this.connectable;
							u._refCount++;
							var e = new ol(l, u),
								t = n.subscribe(e);
							return e.closed || (e.connection = u.connect()), t;
						}),
						l
					);
				})(),
				ol = (function(l) {
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
				il = (function(l) {
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
									(l = this._connection = new m()).add(this.source.subscribe(new pl(this.getSubject(), this))),
									l.closed ? ((this._connection = null), (l = m.EMPTY)) : (this._connection = l)),
								l
							);
						}),
						(n.prototype.refCount = function() {
							return sl()(this);
						}),
						n
					);
				})(P).prototype,
				cl = {
					operator: { value: null },
					_refCount: { value: 0, writable: !0 },
					_subject: { value: null, writable: !0 },
					_connection: { value: null, writable: !0 },
					_subscribe: { value: il._subscribe },
					_isComplete: { value: il._isComplete, writable: !0 },
					getSubject: { value: il.getSubject },
					connect: { value: il.connect },
					refCount: { value: il.refCount }
				},
				pl = (function(l) {
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
			function hl() {
				return new N();
			}
			function dl(l) {
				for (var n in l) if (l[n] === dl) return n;
				throw Error('Could not find renamed property on target object.');
			}
			var fl = dl({ ngInjectableDef: dl });
			function gl(l) {
				return { providedIn: l.providedIn || null, factory: l.factory, value: void 0 };
			}
			function ml(l) {
				return l && l.hasOwnProperty(fl) ? l[fl] : null;
			}
			var bl = (function() {
					function l(l, n) {
						(this._desc = l), (this.ngMetadataName = 'InjectionToken'), (this.ngInjectableDef = void 0 !== n ? gl({ providedIn: n.providedIn || 'root', factory: n.factory }) : void 0);
					}
					return (
						(l.prototype.toString = function() {
							return 'InjectionToken ' + this._desc;
						}),
						l
					);
				})(),
				yl = '__parameters__';
			function vl(l, n, u) {
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
						for (var e = l.hasOwnProperty(yl) ? l[yl] : Object.defineProperty(l, yl, { value: [] })[yl]; e.length <= u; ) e.push(null);
						return (e[u] = e[u] || []).push(r), l;
					}
				}
				return u && (t.prototype = Object.create(u.prototype)), (t.prototype.ngMetadataName = l), (t.annotationCls = t), t;
			}
			var wl = new bl('AnalyzeForEntryComponents'),
				jl = 'undefined' != typeof window && window,
				_l = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
				xl = ('undefined' != typeof global && global) || jl || _l,
				kl = Promise.resolve(0),
				Cl = null;
			function Sl() {
				if (!Cl) {
					var l = xl.Symbol;
					if (l && l.iterator) Cl = l.iterator;
					else
						for (var n = Object.getOwnPropertyNames(Map.prototype), u = 0; u < n.length; ++u) {
							var e = n[u];
							'entries' !== e && 'size' !== e && Map.prototype[e] === Map.prototype.entries && (Cl = e);
						}
				}
				return Cl;
			}
			function El(l) {
				'undefined' == typeof Zone
					? kl.then(function() {
							l && l.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', l);
			}
			function Il(l, n) {
				return l === n || ('number' == typeof l && 'number' == typeof n && isNaN(l) && isNaN(n));
			}
			function Pl(l) {
				if ('string' == typeof l) return l;
				if (l instanceof Array) return '[' + l.map(Pl).join(', ') + ']';
				if (null == l) return '' + l;
				if (l.overriddenName) return '' + l.overriddenName;
				if (l.name) return '' + l.name;
				var n = l.toString();
				if (null == n) return '' + n;
				var u = n.indexOf('\n');
				return -1 === u ? n : n.substring(0, u);
			}
			var Ol = dl({ __forward_ref__: dl });
			function Tl(l) {
				return (
					(l.__forward_ref__ = Tl),
					(l.toString = function() {
						return Pl(this());
					}),
					l
				);
			}
			function Ml(l) {
				var n = l;
				return 'function' == typeof n && n.hasOwnProperty(Ol) && n.__forward_ref__ === Tl ? n() : l;
			}
			var Rl,
				Al = (function(l) {
					return (l[(l.Emulated = 0)] = 'Emulated'), (l[(l.Native = 1)] = 'Native'), (l[(l.None = 2)] = 'None'), (l[(l.ShadowDom = 3)] = 'ShadowDom'), l;
				})({}),
				Nl = vl('Inject', function(l) {
					return { token: l };
				}),
				Dl = vl('Optional'),
				Ul = vl('Self'),
				Ll = vl('SkipSelf'),
				Vl = (function(l) {
					return (l[(l.Default = 0)] = 'Default'), (l[(l.Host = 1)] = 'Host'), (l[(l.Self = 2)] = 'Self'), (l[(l.SkipSelf = 4)] = 'SkipSelf'), (l[(l.Optional = 8)] = 'Optional'), l;
				})({}),
				Fl = void 0;
			function zl(l) {
				var n = Fl;
				return (Fl = l), n;
			}
			function Hl(l, n) {
				return (
					void 0 === n && (n = Vl.Default),
					(Rl ||
						function(l, n) {
							if ((void 0 === n && (n = Vl.Default), void 0 === Fl)) throw new Error('inject() must be called from an injection context');
							return null === Fl
								? (function(l, n, u) {
										var e = ml(l);
										if (e && 'root' == e.providedIn) return void 0 === e.value ? (e.value = e.factory()) : e.value;
										if (u & Vl.Optional) return null;
										throw new Error('Injector: NOT_FOUND [' + Pl(l) + ']');
								  })(l, 0, n)
								: Fl.get(l, n & Vl.Optional ? null : void 0, n);
						})(l, n)
				);
			}
			var Bl = /([A-Z])/g;
			function ql(l) {
				try {
					return null != l ? l.toString().slice(0, 30) : l;
				} catch (n) {
					return '[ERROR] Exception while trying to serialize the value';
				}
			}
			function Gl(l, n) {
				var u = Wl(l),
					e = Wl(n);
				return u && e
					? (function(l, n, u) {
							for (var e = l[Sl()](), t = n[Sl()](); ; ) {
								var r = e.next(),
									s = t.next();
								if (r.done && s.done) return !0;
								if (r.done || s.done) return !1;
								if (!u(r.value, s.value)) return !1;
							}
					  })(l, n, Gl)
					: !(u || !l || ('object' != typeof l && 'function' != typeof l) || e || !n || ('object' != typeof n && 'function' != typeof n)) || Il(l, n);
			}
			var Zl = (function() {
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
				Ql = (function() {
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
			function Wl(l) {
				return !!Kl(l) && (Array.isArray(l) || (!(l instanceof Map) && Sl() in l));
			}
			function Kl(l) {
				return null !== l && ('function' == typeof l || 'object' == typeof l);
			}
			function Yl() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
			}
			var Jl = '__source',
				$l = new Object(),
				Xl = new bl('INJECTOR'),
				ln = (function() {
					function l() {}
					return (
						(l.prototype.get = function(l, n) {
							if ((void 0 === n && (n = $l), n === $l)) throw new Error('NullInjectorError: No provider for ' + Pl(l) + '!');
							return n;
						}),
						l
					);
				})(),
				nn = (function() {
					function l() {}
					return (
						(l.create = function(l, n) {
							return Array.isArray(l) ? new hn(l, n) : new hn(l.providers, l.parent, l.name || null);
						}),
						(l.THROW_IF_NOT_FOUND = $l),
						(l.NULL = new ln()),
						(l.ngInjectableDef = gl({
							providedIn: 'any',
							factory: function() {
								return Hl(Xl);
							}
						})),
						(l.__NG_ELEMENT_ID__ = function() {
							return un();
						}),
						l
					);
				})(),
				un = Yl,
				en = function(l) {
					return l;
				},
				tn = [],
				rn = en,
				sn = function() {
					return Array.prototype.slice.call(arguments);
				},
				an = dl({ provide: String, useValue: dl }),
				on = nn.NULL,
				cn = /\n/gm,
				pn = '\u0275',
				hn = (function() {
					function l(l, n, u) {
						void 0 === n && (n = on), void 0 === u && (u = null), (this.parent = n), (this.source = u);
						var e = (this._records = new Map());
						e.set(nn, { token: nn, fn: en, deps: tn, value: this, useNew: !1 }),
							e.set(Xl, { token: Xl, fn: en, deps: tn, value: this, useNew: !1 }),
							(function l(n, u) {
								if (u)
									if ((u = Ml(u)) instanceof Array) for (var e = 0; e < u.length; e++) l(n, u[e]);
									else {
										if ('function' == typeof u) throw gn('Function/Class not supported', u);
										if (!u || 'object' != typeof u || !u.provide) throw gn('Unexpected provider', u);
										var t = Ml(u.provide),
											r = (function(l) {
												var n = (function(l) {
														var n = tn,
															u = l.deps;
														if (u && u.length) {
															n = [];
															for (var e = 0; e < u.length; e++) {
																var t = 6;
																if ((o = Ml(u[e])) instanceof Array)
																	for (var r = 0, s = o; r < s.length; r++) {
																		var a = s[r];
																		a instanceof Dl || a == Dl
																			? (t |= 1)
																			: a instanceof Ll || a == Ll
																			? (t &= -3)
																			: a instanceof Ul || a == Ul
																			? (t &= -5)
																			: (o = a instanceof Nl ? a.token : Ml(a));
																	}
																n.push({ token: o, options: t });
															}
														} else if (l.useExisting) {
															var o;
															n = [{ token: (o = Ml(l.useExisting)), options: 6 }];
														} else if (!(u || an in l)) throw gn("'deps' required", l);
														return n;
													})(l),
													u = en,
													e = tn,
													t = !1,
													r = Ml(l.provide);
												if (an in l) e = l.useValue;
												else if (l.useFactory) u = l.useFactory;
												else if (l.useExisting);
												else if (l.useClass) (t = !0), (u = Ml(l.useClass));
												else {
													if ('function' != typeof r) throw gn('StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable', l);
													(t = !0), (u = r);
												}
												return { deps: n, fn: u, useNew: t, value: e };
											})(u);
										if (!0 === u.multi) {
											var s = n.get(t);
											if (s) {
												if (s.fn !== sn) throw dn(t);
											} else n.set(t, (s = { token: u.provide, deps: [], useNew: !1, fn: sn, value: tn }));
											s.deps.push({ token: (t = u), options: 6 });
										}
										var a = n.get(t);
										if (a && a.fn == sn) throw dn(t);
										n.set(t, r);
									}
							})(e, l);
					}
					return (
						(l.prototype.get = function(l, n, u) {
							void 0 === u && (u = Vl.Default);
							var e = this._records.get(l);
							try {
								return (function l(n, u, e, t, r, s) {
									try {
										return (function(n, u, e, t, r, s) {
											var a, o;
											if (!u || s & Vl.SkipSelf) s & Vl.Self || (o = t.get(n, r, Vl.Default));
											else {
												if ((o = u.value) == rn) throw Error(pn + 'Circular dependency');
												if (o === tn) {
													u.value = rn;
													var i = u.useNew,
														p = u.fn,
														h = u.deps,
														d = tn;
													if (h.length) {
														d = [];
														for (var f = 0; f < h.length; f++) {
															var g = h[f],
																m = g.options,
																b = 2 & m ? e.get(g.token) : void 0;
															d.push(l(g.token, b, e, b || 4 & m ? t : on, 1 & m ? null : nn.THROW_IF_NOT_FOUND, Vl.Default));
														}
													}
													u.value = o = i ? new ((a = p).bind.apply(a, c([void 0], d)))() : p.apply(void 0, d);
												}
											}
											return o;
										})(n, u, e, t, r, s);
									} catch (a) {
										throw (a instanceof Error || (a = new Error(a)), (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(n), u && u.value == rn && (u.value = tn), a);
									}
								})(l, e, this._records, this.parent, n, u);
							} catch (r) {
								var t = r.ngTempTokenPath;
								throw (l[Jl] && t.unshift(l[Jl]), (r.message = fn('\n' + r.message, t, this.source)), (r.ngTokenPath = t), (r.ngTempTokenPath = null), r);
							}
						}),
						(l.prototype.toString = function() {
							var l = [];
							return (
								this._records.forEach(function(n, u) {
									return l.push(Pl(u));
								}),
								'StaticInjector[' + l.join(', ') + ']'
							);
						}),
						l
					);
				})();
			function dn(l) {
				return gn('Cannot mix multi providers and regular providers', l);
			}
			function fn(l, n, u) {
				void 0 === u && (u = null), (l = l && '\n' === l.charAt(0) && l.charAt(1) == pn ? l.substr(2) : l);
				var e = Pl(n);
				if (n instanceof Array) e = n.map(Pl).join(' -> ');
				else if ('object' == typeof n) {
					var t = [];
					for (var r in n)
						if (n.hasOwnProperty(r)) {
							var s = n[r];
							t.push(r + ':' + ('string' == typeof s ? JSON.stringify(s) : Pl(s)));
						}
					e = '{' + t.join(', ') + '}';
				}
				return 'StaticInjectorError' + (u ? '(' + u + ')' : '') + '[' + e + ']: ' + l.replace(cn, '\n  ');
			}
			function gn(l, n) {
				return new Error(fn(l, n));
			}
			var mn = new bl('The presence of this token marks an injector as being the root injector.'),
				bn = (function() {
					return function() {};
				})(),
				yn = (function() {
					return function() {};
				})();
			function vn(l) {
				var n = Error('No component factory found for ' + Pl(l) + '. Did you add it to @NgModule.entryComponents?');
				return (n[wn] = l), n;
			}
			var wn = 'ngComponent',
				jn = (function() {
					function l() {}
					return (
						(l.prototype.resolveComponentFactory = function(l) {
							throw vn(l);
						}),
						l
					);
				})(),
				_n = (function() {
					function l() {}
					return (l.NULL = new jn()), l;
				})(),
				xn = (function() {
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
							if ((!n && this._parent && (n = this._parent.resolveComponentFactory(l)), !n)) throw vn(l);
							return new kn(n, this._ngModule);
						}),
						l
					);
				})(),
				kn = (function(l) {
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
				})(yn),
				Cn = (function() {
					return function() {};
				})(),
				Sn = (function() {
					return function() {};
				})(),
				En = (function() {
					function l(l) {
						this.nativeElement = l;
					}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return In(l);
						}),
						l
					);
				})(),
				In = Yl,
				Pn = (function() {
					return function() {};
				})(),
				On = (function() {
					return function() {};
				})(),
				Tn = (function(l) {
					return (l[(l.Important = 1)] = 'Important'), (l[(l.DashCase = 2)] = 'DashCase'), l;
				})({}),
				Mn = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return Rn();
						}),
						l
					);
				})(),
				Rn = Yl,
				An = (function(l) {
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
				Nn = (function() {
					return function() {};
				})(),
				Dn = new ((function() {
					return function(l) {
						(this.full = l),
							(this.major = l.split('.')[0]),
							(this.minor = l.split('.')[1]),
							(this.patch = l
								.split('.')
								.slice(2)
								.join('.'));
					};
				})())('7.2.4'),
				Un = !0,
				Ln = !1;
			function Vn() {
				return (Ln = !0), Un;
			}
			var Fn = (function() {
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
				zn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				Hn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function Bn(l) {
				return (l = String(l)).match(zn) || l.match(Hn) ? l : (Vn() && console.warn('WARNING: sanitizing unsafe URL value ' + l + ' (see http://g.co/ng/security#xss)'), 'unsafe:' + l);
			}
			function qn(l) {
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
			function Gn() {
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
			var Zn,
				Qn = qn('area,br,col,hr,img,wbr'),
				Wn = qn('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				Kn = qn('rp,rt'),
				Yn = Gn(Kn, Wn),
				Jn = Gn(
					Qn,
					Gn(
						Wn,
						qn(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					Gn(
						Kn,
						qn(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					Yn
				),
				$n = qn('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				Xn = qn('srcset'),
				lu = Gn(
					$n,
					Xn,
					qn(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					)
				),
				nu = (function() {
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
							if (!Jn.hasOwnProperty(u)) return (this.sanitizedSomething = !0), !1;
							this.buf.push('<'), this.buf.push(u);
							for (var e = l.attributes, t = 0; t < e.length; t++) {
								var r = e.item(t),
									s = r.name,
									a = s.toLowerCase();
								if (lu.hasOwnProperty(a)) {
									var o = r.value;
									$n[a] && (o = Bn(o)),
										Xn[a] &&
											((n = o),
											(o = (n = String(n))
												.split(',')
												.map(function(l) {
													return Bn(l.trim());
												})
												.join(', '))),
										this.buf.push(' ', s, '="', tu(o), '"');
								} else this.sanitizedSomething = !0;
							}
							return this.buf.push('>'), !0;
						}),
						(l.prototype.endElement = function(l) {
							var n = l.nodeName.toLowerCase();
							Jn.hasOwnProperty(n) && !Qn.hasOwnProperty(n) && (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
						}),
						(l.prototype.chars = function(l) {
							this.buf.push(tu(l));
						}),
						(l.prototype.checkClobberedElement = function(l, n) {
							if (n && (l.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
								throw new Error('Failed to sanitize html because the element is clobbered: ' + l.outerHTML);
							return n;
						}),
						l
					);
				})(),
				uu = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				eu = /([^\#-~ |!])/g;
			function tu(l) {
				return l
					.replace(/&/g, '&amp;')
					.replace(uu, function(l) {
						return '&#' + (1024 * (l.charCodeAt(0) - 55296) + (l.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(eu, function(l) {
						return '&#' + l.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			function ru(l) {
				return 'content' in l &&
					(function(l) {
						return l.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === l.nodeName;
					})(l)
					? l.content
					: null;
			}
			var su = (function(l) {
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
				au = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return ou(l, En);
						}),
						l
					);
				})(),
				ou = Yl,
				iu = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				cu = /^url\(([^)]+)\)$/,
				pu = (function() {
					return function() {};
				})(),
				hu = 'ngDebugContext',
				du = 'ngOriginalError',
				fu = 'ngErrorLogger';
			function gu(l) {
				return l[hu];
			}
			function mu(l) {
				return l[du];
			}
			function bu(l) {
				for (var n = [], u = 1; u < arguments.length; u++) n[u - 1] = arguments[u];
				l.error.apply(l, c(n));
			}
			var yu = (function() {
				function l() {
					this._console = console;
				}
				return (
					(l.prototype.handleError = function(l) {
						var n = this._findOriginalError(l),
							u = this._findContext(l),
							e = (function(l) {
								return l[fu] || bu;
							})(l);
						e(this._console, 'ERROR', l), n && e(this._console, 'ORIGINAL ERROR', n), u && e(this._console, 'ERROR CONTEXT', u);
					}),
					(l.prototype._findContext = function(l) {
						return l ? (gu(l) ? gu(l) : this._findContext(mu(l))) : null;
					}),
					(l.prototype._findOriginalError = function(l) {
						for (var n = mu(l); n && mu(n); ) n = mu(n);
						return n;
					}),
					l
				);
			})();
			function vu(l) {
				return !!l && 'function' == typeof l.then;
			}
			function wu(l) {
				return !!l && 'function' == typeof l.subscribe;
			}
			var ju = new bl('Application Initializer'),
				_u = (function() {
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
										vu(t) && n.push(t);
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
				xu = new bl('AppId');
			function ku() {
				return '' + Cu() + Cu() + Cu();
			}
			function Cu() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			var Su = new bl('Platform Initializer'),
				Eu = new bl('Platform ID'),
				Iu = new bl('appBootstrapListener'),
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
			function Ou() {
				throw new Error('Runtime compiler is not loaded');
			}
			var Tu,
				Mu,
				Ru = Ou,
				Au = Ou,
				Nu = Ou,
				Du = Ou,
				Uu = (function() {
					function l() {
						(this.compileModuleSync = Ru), (this.compileModuleAsync = Au), (this.compileModuleAndAllComponentsSync = Nu), (this.compileModuleAndAllComponentsAsync = Du);
					}
					return (l.prototype.clearCache = function() {}), (l.prototype.clearCacheFor = function(l) {}), (l.prototype.getModuleId = function(l) {}), l;
				})(),
				Lu = (function() {
					return function() {};
				})();
			function Vu() {
				var l = xl.wtf;
				return !(!l || !(Tu = l.trace) || ((Mu = Tu.events), 0));
			}
			var Fu = Vu();
			function zu(l, n) {
				return null;
			}
			var Hu = Fu
					? function(l, n) {
							return void 0 === n && (n = null), Mu.createScope(l, n);
					  }
					: function(l, n) {
							return zu;
					  },
				Bu = Fu
					? function(l, n) {
							return Tu.leaveScope(l, n), n;
					  }
					: function(l, n) {
							return n;
					  },
				qu = (function() {
					function l(l) {
						var n,
							u = l.enableLongStackTrace,
							e = void 0 !== u && u;
						if (
							((this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new su(!1)),
							(this.onMicrotaskEmpty = new su(!1)),
							(this.onStable = new su(!1)),
							(this.onError = new su(!1)),
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
										return Wu(n), l.invokeTask(e, t, r, s);
									} finally {
										Ku(n);
									}
								},
								onInvoke: function(l, u, e, t, r, s, a) {
									try {
										return Wu(n), l.invoke(e, t, r, s, a);
									} finally {
										Ku(n);
									}
								},
								onHasTask: function(l, u, e, t) {
									l.hasTask(e, t),
										u === e && ('microTask' == t.change ? ((n.hasPendingMicrotasks = t.microTask), Qu(n)) : 'macroTask' == t.change && (n.hasPendingMacrotasks = t.macroTask));
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
								r = t.scheduleEventTask('NgZoneEvent: ' + e, l, Zu, Gu, Gu);
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
			function Gu() {}
			var Zu = {};
			function Qu(l) {
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
			function Wu(l) {
				l._nesting++, l.isStable && ((l.isStable = !1), l.onUnstable.emit(null));
			}
			function Ku(l) {
				l._nesting--, Qu(l);
			}
			var Yu,
				Ju = (function() {
					function l() {
						(this.hasPendingMicrotasks = !1),
							(this.hasPendingMacrotasks = !1),
							(this.isStable = !0),
							(this.onUnstable = new su()),
							(this.onMicrotaskEmpty = new su()),
							(this.onStable = new su()),
							(this.onError = new su());
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
				$u = (function() {
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
											qu.assertNotInAngularZone(),
												El(function() {
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
								El(function() {
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
				Xu = (function() {
					function l() {
						(this._applications = new Map()), le.addToWindow(this);
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
							return void 0 === n && (n = !0), le.findTestabilityInTree(this, l, n);
						}),
						s([a('design:paramtypes', [])], l)
					);
				})(),
				le = new ((function() {
					function l() {}
					return (
						(l.prototype.addToWindow = function(l) {}),
						(l.prototype.findTestabilityInTree = function(l, n, u) {
							return null;
						}),
						l
					);
				})())(),
				ne = new bl('AllowMultipleToken'),
				ue = (function() {
					return function(l, n) {
						(this.name = l), (this.token = n);
					};
				})();
			function ee(l, n, u) {
				void 0 === u && (u = []);
				var e = 'Platform: ' + n,
					t = new bl(e);
				return function(n) {
					void 0 === n && (n = []);
					var r = te();
					if (!r || r.injector.get(ne, !1))
						if (l) l(u.concat(n).concat({ provide: t, useValue: !0 }));
						else {
							var s = u.concat(n).concat({ provide: t, useValue: !0 });
							!(function(l) {
								if (Yu && !Yu.destroyed && !Yu.injector.get(ne, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								Yu = l.get(re);
								var n = l.get(Su, null);
								n &&
									n.forEach(function(l) {
										return l();
									});
							})(nn.create({ providers: s, name: e }));
						}
					return (function(l) {
						var n = te();
						if (!n) throw new Error('No platform exists!');
						if (!n.injector.get(l, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return n;
					})(t);
				};
			}
			function te() {
				return Yu && !Yu.destroyed ? Yu : null;
			}
			var re = (function() {
				function l(l) {
					(this._injector = l), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
				}
				return (
					(l.prototype.bootstrapModuleFactory = function(l, n) {
						var u,
							e = this,
							t = 'noop' === (u = n ? n.ngZone : void 0) ? new Ju() : ('zone.js' === u ? void 0 : u) || new qu({ enableLongStackTrace: Vn() }),
							r = [{ provide: qu, useValue: t }];
						return t.run(function() {
							var n = nn.create({ providers: r, parent: e.injector, name: l.moduleType.name }),
								u = l.create(n),
								s = u.injector.get(yu, null);
							if (!s) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								u.onDestroy(function() {
									return oe(e._modules, u);
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
										var r = ((s = u.injector.get(_u)).runInitializers(),
										s.donePromise.then(function() {
											return e._moduleDoBootstrap(u), u;
										}));
										return vu(r)
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
						var e = se({}, n);
						return (function(l, n, u) {
							return l
								.get(Lu)
								.createCompiler([n])
								.compileModuleAsync(u);
						})(this.injector, e, l).then(function(l) {
							return u.bootstrapModuleFactory(l, e);
						});
					}),
					(l.prototype._moduleDoBootstrap = function(l) {
						var n = l.injector.get(ae);
						if (l._bootstrapComponents.length > 0)
							l._bootstrapComponents.forEach(function(l) {
								return n.bootstrap(l);
							});
						else {
							if (!l.instance.ngDoBootstrap)
								throw new Error(
									'The module ' +
										Pl(l.instance.constructor) +
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
			function se(l, n) {
				return Array.isArray(n) ? n.reduce(se, l) : r({}, l, n);
			}
			var ae = (function() {
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
						(this._enforceNoNewChanges = Vn()),
						this._zone.onMicrotaskEmpty.subscribe({
							next: function() {
								s._zone.run(function() {
									s.tick();
								});
							}
						});
					var a = new P(function(l) {
							(s._stable = s._zone.isStable && !s._zone.hasPendingMacrotasks && !s._zone.hasPendingMicrotasks),
								s._zone.runOutsideAngular(function() {
									l.next(s._stable), l.complete();
								});
						}),
						o = new P(function(l) {
							var n;
							s._zone.runOutsideAngular(function() {
								n = s._zone.onStable.subscribe(function() {
									qu.assertNotInAngularZone(),
										El(function() {
											s._stable || s._zone.hasPendingMacrotasks || s._zone.hasPendingMicrotasks || ((s._stable = !0), l.next(!0));
										});
								});
							});
							var u = s._zone.onUnstable.subscribe(function() {
								qu.assertInAngularZone(),
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
							null === e && 1 === l.length && l[0] instanceof P ? l[0] : rl(u)(X(l, e))
						);
					})(
						a,
						o.pipe(function(l) {
							return sl()(
								((n = hl),
								function(l) {
									var u;
									u =
										'function' == typeof n
											? n
											: function() {
													return n;
											  };
									var e = Object.create(l, cl);
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
						(u = l instanceof yn ? l : this._componentFactoryResolver.resolveComponentFactory(l)), this.componentTypes.push(u.componentType);
						var t = u instanceof kn ? null : this._injector.get(Cn),
							r = u.create(nn.NULL, [], n || u.selector, t);
						r.onDestroy(function() {
							e._unloadComponent(r);
						});
						var s = r.injector.get($u, null);
						return (
							s && r.injector.get(Xu).registerApplication(r.location.nativeElement, s),
							this._loadComponent(r),
							Vn() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
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
							(this._runningTick = !1), Bu(u);
						}
					}),
					(l.prototype.attachView = function(l) {
						var n = l;
						this._views.push(n), n.attachToAppRef(this);
					}),
					(l.prototype.detachView = function(l) {
						var n = l;
						oe(this._views, n), n.detachFromAppRef();
					}),
					(l.prototype._loadComponent = function(l) {
						this.attachView(l.hostView),
							this.tick(),
							this.components.push(l),
							this._injector
								.get(Iu, [])
								.concat(this._bootstrapListeners)
								.forEach(function(n) {
									return n(l);
								});
					}),
					(l.prototype._unloadComponent = function(l) {
						this.detachView(l.hostView), oe(this.components, l);
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
					(l._tickScope = Hu('ApplicationRef#tick()')),
					l
				);
			})();
			function oe(l, n) {
				var u = l.indexOf(n);
				u > -1 && l.splice(u, 1);
			}
			var ie = (function() {
					function l() {
						(this.dirty = !0), (this._results = []), (this.changes = new su()), (this.length = 0);
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
						(l.prototype[Sl()] = function() {
							return this._results[Sl()]();
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
				ce = (function() {
					return function() {};
				})(),
				pe = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				he = (function() {
					function l(l, n) {
						(this._compiler = l), (this._config = n || pe);
					}
					return (
						(l.prototype.load = function(l) {
							return this._compiler instanceof Uu ? this.loadFactory(l) : this.loadAndCompile(l);
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
										return de(l, t, r);
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
										return de(l, e, t);
									})
							);
						}),
						l
					);
				})();
			function de(l, n, u) {
				if (!l) throw new Error("Cannot find '" + u + "' in '" + n + "'");
				return l;
			}
			var fe = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return ge(l, En);
						}),
						l
					);
				})(),
				ge = Yl,
				me = (function() {
					function l() {}
					return (
						(l.__NG_ELEMENT_ID__ = function() {
							return be();
						}),
						l
					);
				})(),
				be = function() {
					for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				},
				ye = (function() {
					return function(l, n) {
						(this.name = l), (this.callback = n);
					};
				})(),
				ve = (function() {
					function l(l, n, u) {
						(this.listeners = []), (this.parent = null), (this._debugContext = u), (this.nativeNode = l), n && n instanceof we && n.addChild(this);
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
				we = (function(l) {
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
										n instanceof we && (u(n) && e.push(n), l(n, u, e));
									});
								})(this, l, n),
								n
							);
						}),
						(n.prototype.queryAllNodes = function(l) {
							var n = [];
							return (
								(function l(n, u, e) {
									n instanceof we &&
										n.childNodes.forEach(function(n) {
											u(n) && e.push(n), n instanceof we && l(n, u, e);
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
				})(ve),
				je = new Map(),
				_e = function(l) {
					return je.get(l) || null;
				};
			function xe(l) {
				je.set(l.nativeNode, l);
			}
			var ke = (function() {
					function l() {}
					return (
						(l.prototype.supports = function(l) {
							return Wl(l);
						}),
						(l.prototype.create = function(l) {
							return new Se(l);
						}),
						l
					);
				})(),
				Ce = function(l, n) {
					return n;
				},
				Se = (function() {
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
							(this._trackByFn = l || Ce);
					}
					return (
						(l.prototype.forEachItem = function(l) {
							var n;
							for (n = this._itHead; null !== n; n = n._next) l(n);
						}),
						(l.prototype.forEachOperation = function(l) {
							for (var n = this._itHead, u = this._removalsHead, e = 0, t = null; n || u; ) {
								var r = !u || (n && n.currentIndex < Oe(u, e, t)) ? n : u,
									s = Oe(r, e, t),
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
							if ((null == l && (l = []), !Wl(l))) throw new Error("Error trying to diff '" + Pl(l) + "'. Only arrays and iterables are allowed");
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
										null !== r && Il(r.trackById, t)
											? (s && (r = this._verifyReinsertion(r, e, t, a)), Il(r.item, e) || this._addIdentityChange(r, e))
											: ((r = this._mismatch(r, e, t, a)), (s = !0)),
										(r = r._next);
							} else
								(u = 0),
									(function(l, n) {
										if (Array.isArray(l)) for (var u = 0; u < l.length; u++) n(l[u]);
										else for (var e = l[Sl()](), t = void 0; !(t = e.next()).done; ) n(t.value);
									})(l, function(l) {
										(t = n._trackByFn(u, l)),
											null !== r && Il(r.trackById, t)
												? (s && (r = n._verifyReinsertion(r, l, t, u)), Il(r.item, l) || n._addIdentityChange(r, l))
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
									? (Il(l.item, n) || this._addIdentityChange(l, n), this._moveAfter(l, t, e))
									: null !== (l = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(u, null))
									? (Il(l.item, n) || this._addIdentityChange(l, n), this._reinsertAfter(l, t, e))
									: (l = this._addAfter(new Ee(n, u), t, e)),
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
				Ee = (function() {
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
				Ie = (function() {
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
							for (u = this._head; null !== u; u = u._nextDup) if ((null === n || n <= u.currentIndex) && Il(u.trackById, l)) return u;
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
							u || ((u = new Ie()), this.map.set(n, u)), u.add(l);
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
			function Oe(l, n, u) {
				var e = l.previousIndex;
				if (null === e) return e;
				var t = 0;
				return u && e < u.length && (t = u[e]), e + n + t;
			}
			var Te = (function() {
					function l() {}
					return (
						(l.prototype.supports = function(l) {
							return l instanceof Map || Kl(l);
						}),
						(l.prototype.create = function() {
							return new Me();
						}),
						l
					);
				})(),
				Me = (function() {
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
								if (!(l instanceof Map || Kl(l))) throw new Error("Error trying to diff '" + Pl(l) + "'. Only maps and objects are allowed");
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
							var r = new Re(l);
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
							Il(n, l.currentValue) || ((l.previousValue = l.currentValue), (l.currentValue = n), this._addToChanges(l));
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
				Re = (function() {
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
				Ae = (function() {
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
								deps: [[l, new Ll(), new Dl()]]
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
						(l.ngInjectableDef = gl({
							providedIn: 'root',
							factory: function() {
								return new l([new ke()]);
							}
						})),
						l
					);
				})(),
				Ne = (function() {
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
								deps: [[l, new Ll(), new Dl()]]
							};
						}),
						(l.prototype.find = function(l) {
							var n = this.factories.find(function(n) {
								return n.supports(l);
							});
							if (n) return n;
							throw new Error("Cannot find a differ supporting object '" + l + "'");
						}),
						(l.ngInjectableDef = gl({
							providedIn: 'root',
							factory: function() {
								return new l([new Te()]);
							}
						})),
						l
					);
				})(),
				De = [new Te()],
				Ue = new Ae([new ke()]),
				Le = new Ne(De),
				Ve = ee(null, 'core', [{ provide: Eu, useValue: 'unknown' }, { provide: re, deps: [nn] }, { provide: Xu, deps: [] }, { provide: Pu, deps: [] }]),
				Fe = new bl('LocaleId');
			function ze() {
				return Ue;
			}
			function He() {
				return Le;
			}
			function Be(l) {
				return l || 'en-US';
			}
			var qe = (function() {
				return function(l) {};
			})();
			function Ge(l, n, u) {
				var e = l.state,
					t = 1792 & e;
				return t === n ? ((l.state = (-1793 & e) | u), (l.initIndex = -1), !0) : t === u;
			}
			function Ze(l, n, u) {
				return (1792 & l.state) === n && l.initIndex <= u && ((l.initIndex = u + 1), !0);
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
			function Je(l, n) {
				return l.nodes[n];
			}
			var $e = {
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
			function Xe(l, n, u, e) {
				var t = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + n + "'. Current value: '" + u + "'.";
				return (
					e && (t += ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
					(function(l, n) {
						var u = new Error(l);
						return lt(u, n), u;
					})(t, l)
				);
			}
			function lt(l, n) {
				(l[hu] = n), (l[fu] = n.logError.bind(n));
			}
			function nt(l) {
				return new Error('ViewDestroyedError: Attempt to use a destroyed view: ' + l);
			}
			var ut = function() {},
				et = new Map();
			function tt(l) {
				var n = et.get(l);
				return n || ((n = Pl(l) + '_' + et.size), et.set(l, n)), n;
			}
			var rt = '$$undefined',
				st = '$$empty';
			function at(l) {
				return { id: rt, styles: l.styles, encapsulation: l.encapsulation, data: l.data };
			}
			var ot = 0;
			function it(l, n, u, e) {
				return !(!(2 & l.state) && Il(l.oldValues[n.bindingIndex + u], e));
			}
			function ct(l, n, u, e) {
				return !!it(l, n, u, e) && ((l.oldValues[n.bindingIndex + u] = e), !0);
			}
			function pt(l, n, u, e) {
				var t = l.oldValues[n.bindingIndex + u];
				if (1 & l.state || !Gl(t, e)) {
					var r = n.bindings[u].name;
					throw Xe($e.createDebugContext(l, n.nodeIndex), r + ': ' + t, r + ': ' + e, 0 != (1 & l.state));
				}
			}
			function ht(l) {
				for (var n = l; n; ) 2 & n.def.flags && (n.state |= 8), (n = n.viewContainerParent || n.parent);
			}
			function dt(l, n) {
				for (var u = l; u && u !== n; ) (u.state |= 64), (u = u.viewContainerParent || u.parent);
			}
			function ft(l, n, u, e) {
				try {
					return ht(33554432 & l.def.nodes[n].flags ? We(l, n).componentView : l), $e.handleEvent(l, n, u, e);
				} catch (t) {
					l.root.errorHandler.handleError(t);
				}
			}
			function gt(l) {
				return l.parent ? We(l.parent, l.parentNodeDef.nodeIndex) : null;
			}
			function mt(l) {
				return l.parent ? l.parentNodeDef.parent : null;
			}
			function bt(l, n) {
				switch (201347067 & n.flags) {
					case 1:
						return We(l, n.nodeIndex).renderElement;
					case 2:
						return Qe(l, n.nodeIndex).renderText;
				}
			}
			function yt(l) {
				return !!l.parent && !!(32768 & l.parentNodeDef.flags);
			}
			function vt(l) {
				return !(!l.parent || 32768 & l.parentNodeDef.flags);
			}
			function wt(l) {
				return 1 << l % 32;
			}
			function jt(l) {
				var n = {},
					u = 0,
					e = {};
				return (
					l &&
						l.forEach(function(l) {
							var t = i(l, 2),
								r = t[0],
								s = t[1];
							'number' == typeof r ? ((n[r] = s), (u |= wt(r))) : (e[r] = s);
						}),
					{ matchedQueries: n, references: e, matchedQueryIds: u }
				);
			}
			function _t(l, n) {
				return l.map(function(l) {
					var u, e, t;
					return (
						Array.isArray(l) ? ((t = (u = i(l, 2))[0]), (e = u[1])) : ((t = 0), (e = l)),
						e && ('function' == typeof e || 'object' == typeof e) && n && Object.defineProperty(e, Jl, { value: n, configurable: !0 }),
						{ flags: t, token: e, tokenKey: tt(e) }
					);
				});
			}
			function xt(l, n, u) {
				var e = u.renderParent;
				return e
					? 0 == (1 & e.flags) || 0 == (33554432 & e.flags) || (e.element.componentRendererType && e.element.componentRendererType.encapsulation === Al.Native)
						? We(l, u.renderParent.nodeIndex).renderElement
						: void 0
					: n;
			}
			var kt = new WeakMap();
			function Ct(l) {
				var n = kt.get(l);
				return (
					n ||
						(((n = l(function() {
							return ut;
						})).factory = l),
						kt.set(l, n)),
					n
				);
			}
			function St(l, n, u, e, t) {
				3 === n && (u = l.renderer.parentNode(bt(l, l.def.lastRenderRootNode))), Et(l, n, 0, l.def.nodes.length - 1, u, e, t);
			}
			function Et(l, n, u, e, t, r, s) {
				for (var a = u; a <= e; a++) {
					var o = l.def.nodes[a];
					11 & o.flags && Pt(l, o, n, t, r, s), (a += o.childCount);
				}
			}
			function It(l, n, u, e, t, r) {
				for (var s = l; s && !yt(s); ) s = s.parent;
				for (var a = s.parent, o = mt(s), i = o.nodeIndex + o.childCount, c = o.nodeIndex + 1; c <= i; c++) {
					var p = a.def.nodes[c];
					p.ngContentIndex === n && Pt(a, p, u, e, t, r), (c += p.childCount);
				}
				if (!a.parent) {
					var h = l.root.projectableNodes[n];
					if (h) for (c = 0; c < h.length; c++) Ot(l, h[c], u, e, t, r);
				}
			}
			function Pt(l, n, u, e, t, r) {
				if (8 & n.flags) It(l, n.ngContent.index, u, e, t, r);
				else {
					var s = bt(l, n);
					if (
						(3 === u && 33554432 & n.flags && 48 & n.bindingFlags
							? (16 & n.bindingFlags && Ot(l, s, u, e, t, r), 32 & n.bindingFlags && Ot(We(l, n.nodeIndex).componentView, s, u, e, t, r))
							: Ot(l, s, u, e, t, r),
						16777216 & n.flags)
					)
						for (var a = We(l, n.nodeIndex).viewContainer._embeddedViews, o = 0; o < a.length; o++) St(a[o], u, e, t, r);
					1 & n.flags && !n.element.name && Et(l, u, n.nodeIndex + 1, n.nodeIndex + n.childCount, e, t, r);
				}
			}
			function Ot(l, n, u, e, t, r) {
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
			var Tt = /^:([^:]+):(.+)$/;
			function Mt(l) {
				if (':' === l[0]) {
					var n = l.match(Tt);
					return [n[1], n[2]];
				}
				return ['', l];
			}
			function Rt(l) {
				for (var n = 0, u = 0; u < l.length; u++) n |= l[u].flags;
				return n;
			}
			function At(l, n, u, e, t, r) {
				l |= 1;
				var s = jt(n);
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
						template: r ? Ct(r) : null,
						componentProvider: null,
						componentView: null,
						componentRendererType: null,
						publicProviders: null,
						allProviders: null,
						handleEvent: t || ut
					},
					provider: null,
					text: null,
					query: null,
					ngContent: null
				};
			}
			function Nt(l, n, u, e, t, r, s, a, o, c, p, h) {
				var d;
				void 0 === s && (s = []), c || (c = ut);
				var f = jt(u),
					g = f.matchedQueries,
					m = f.references,
					b = f.matchedQueryIds,
					y = null,
					v = null;
				r && ((y = (d = i(Mt(r), 2))[0]), (v = d[1])), (a = a || []);
				for (var w = new Array(a.length), j = 0; j < a.length; j++) {
					var _ = i(a[j], 3),
						x = _[0],
						k = _[2],
						C = i(Mt(_[1]), 2),
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
				o = o || [];
				var O = new Array(o.length);
				for (j = 0; j < o.length; j++) {
					var T = i(o[j], 2);
					O[j] = { type: 0, target: T[0], eventName: T[1], propName: null };
				}
				var M = (s = s || []).map(function(l) {
					var n = i(l, 2),
						u = n[1],
						e = i(Mt(n[0]), 2);
					return [e[0], e[1], u];
				});
				return (
					(h = (function(l) {
						if (l && l.id === rt) {
							var n = (null != l.encapsulation && l.encapsulation !== Al.None) || l.styles.length || Object.keys(l.data).length;
							l.id = n ? 'c' + ot++ : st;
						}
						return l && l.id === st && (l = null), l || null;
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
						bindingFlags: Rt(w),
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
							handleEvent: c || ut
						},
						provider: null,
						text: null,
						query: null,
						ngContent: null
					}
				);
			}
			function Dt(l, n, u) {
				var e,
					t = u.element,
					r = l.root.selectorOrNode,
					s = l.renderer;
				if (l.parent || !r) {
					e = t.name ? s.createElement(t.name, t.ns) : s.createComment('');
					var a = xt(l, n, u);
					a && s.appendChild(a, e);
				} else e = s.selectRootElement(r, !!t.componentRendererType && t.componentRendererType.encapsulation === Al.ShadowDom);
				if (t.attrs)
					for (var o = 0; o < t.attrs.length; o++) {
						var c = i(t.attrs[o], 3);
						s.setAttribute(e, c[1], c[2], c[0]);
					}
				return e;
			}
			function Ut(l, n, u, e) {
				for (var t = 0; t < u.outputs.length; t++) {
					var r = u.outputs[t],
						s = Lt(l, u.nodeIndex, ((p = r.eventName), (c = r.target) ? c + ':' + p : p)),
						a = r.target,
						o = l;
					'component' === r.target && ((a = null), (o = n));
					var i = o.renderer.listen(a || e, r.eventName, s);
					l.disposables[u.outputIndex + t] = i;
				}
				var c, p;
			}
			function Lt(l, n, u) {
				return function(e) {
					return ft(l, n, u, e);
				};
			}
			function Vt(l, n, u, e) {
				if (!ct(l, n, u, e)) return !1;
				var t = n.bindings[u],
					r = We(l, n.nodeIndex),
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
							var r = l.root.sanitizer.sanitize(An.STYLE, t);
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
			var Ft = new Object(),
				zt = tt(nn),
				Ht = tt(Xl),
				Bt = tt(Cn);
			function qt(l, n, u, e) {
				return (u = Ml(u)), { index: -1, deps: _t(e, Pl(n)), flags: l, token: n, value: u };
			}
			function Gt(l, n, u) {
				void 0 === u && (u = nn.THROW_IF_NOT_FOUND);
				var e,
					t,
					r = zl(l);
				try {
					if (8 & n.flags) return n.token;
					if ((2 & n.flags && (u = null), 1 & n.flags)) return l._parent.get(n.token, u);
					var s = n.tokenKey;
					switch (s) {
						case zt:
						case Ht:
						case Bt:
							return l;
					}
					var a,
						o = l._def.providersByKey[s];
					if (o) {
						var i = l._providers[o.index];
						return void 0 === i && (i = l._providers[o.index] = Zt(l, o)), i === Ft ? void 0 : i;
					}
					if (
						(a = ml(n.token)) &&
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
							(l._providers[c] = Ft),
							(l._providers[c] = Zt(l, l._def.providersByKey[n.tokenKey]))
						);
					}
					return 4 & n.flags ? u : l._parent.get(n.token, u);
				} finally {
					zl(r);
				}
			}
			function Zt(l, n) {
				var u;
				switch (201347067 & n.flags) {
					case 512:
						u = (function(l, n, u) {
							var e = u.length;
							switch (e) {
								case 0:
									return new n();
								case 1:
									return new n(Gt(l, u[0]));
								case 2:
									return new n(Gt(l, u[0]), Gt(l, u[1]));
								case 3:
									return new n(Gt(l, u[0]), Gt(l, u[1]), Gt(l, u[2]));
								default:
									for (var t = new Array(e), r = 0; r < e; r++) t[r] = Gt(l, u[r]);
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
									return n(Gt(l, u[0]));
								case 2:
									return n(Gt(l, u[0]), Gt(l, u[1]));
								case 3:
									return n(Gt(l, u[0]), Gt(l, u[1]), Gt(l, u[2]));
								default:
									for (var t = Array(e), r = 0; r < e; r++) t[r] = Gt(l, u[r]);
									return n.apply(void 0, c(t));
							}
						})(l, n.value, n.deps);
						break;
					case 2048:
						u = Gt(l, n.deps[0]);
						break;
					case 256:
						u = n.value;
				}
				return u === Ft || null == u || 'object' != typeof u || 131072 & n.flags || 'function' != typeof u.ngOnDestroy || (n.flags |= 131072), void 0 === u ? Ft : u;
			}
			function Qt(l, n) {
				var u = l.viewContainer._embeddedViews;
				if (((null == n || n >= u.length) && (n = u.length - 1), n < 0)) return null;
				var e = u[n];
				return (e.viewContainerParent = null), Jt(u, n), $e.dirtyParentQueries(e), Kt(e), e;
			}
			function Wt(l, n, u) {
				var e = n ? bt(n, n.def.lastRenderRootNode) : l.renderElement,
					t = u.renderer.parentNode(e),
					r = u.renderer.nextSibling(e);
				St(u, 2, t, r, void 0);
			}
			function Kt(l) {
				St(l, 3, null, null, void 0);
			}
			function Yt(l, n, u) {
				n >= l.length ? l.push(u) : l.splice(n, 0, u);
			}
			function Jt(l, n) {
				n >= l.length - 1 ? l.pop() : l.splice(n, 1);
			}
			var $t = new Object();
			function Xt(l, n, u, e, t, r) {
				return new lr(l, n, u, e, t, r);
			}
			var lr = (function(l) {
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
							var t = Ct(this.viewDefFactory),
								r = t.nodes[0].element.componentProvider.nodeIndex,
								s = $e.createRootView(l, n || [], u, t, e, $t),
								a = Ke(s, r).instance;
							return u && s.renderer.setAttribute(We(s, 0).renderElement, 'ng-version', Dn.full), new nr(s, new rr(s), a);
						}),
						n
					);
				})(yn),
				nr = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t._view = n), (t._viewRef = u), (t._component = e), (t._elDef = t._view.def.nodes[0]), (t.hostView = u), (t.changeDetectorRef = u), (t.instance = e), t;
					}
					return (
						t(n, l),
						Object.defineProperty(n.prototype, 'location', {
							get: function() {
								return new En(We(this._view, this._elDef.nodeIndex).renderElement);
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(n.prototype, 'injector', {
							get: function() {
								return new ir(this._view, this._elDef);
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
				})(bn);
			function ur(l, n, u) {
				return new er(l, n, u);
			}
			var er = (function() {
				function l(l, n, u) {
					(this._view = l), (this._elDef = n), (this._data = u), (this._embeddedViews = []);
				}
				return (
					Object.defineProperty(l.prototype, 'element', {
						get: function() {
							return new En(this._data.renderElement);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return new ir(this._view, this._elDef);
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'parentInjector', {
						get: function() {
							for (var l = this._view, n = this._elDef.parent; !n && l; ) (n = mt(l)), (l = l.parent);
							return l ? new ir(l, n) : new ir(this._view, null);
						},
						enumerable: !0,
						configurable: !0
					}),
					(l.prototype.clear = function() {
						for (var l = this._embeddedViews.length - 1; l >= 0; l--) {
							var n = Qt(this._data, l);
							$e.destroyView(n);
						}
					}),
					(l.prototype.get = function(l) {
						var n = this._embeddedViews[l];
						if (n) {
							var u = new rr(n);
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
						t || l instanceof kn || (t = r.get(Cn));
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
							Yt(r, e, t),
							(function(l, n) {
								var u = gt(n);
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
							$e.dirtyParentQueries(t),
							Wt(u, e > 0 ? r[e - 1] : null, t),
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
							Jt(r, e),
							null == t && (t = r.length),
							Yt(r, t, s),
							$e.dirtyParentQueries(s),
							Kt(s),
							Wt(u, t > 0 ? r[t - 1] : null, s),
							l
						);
					}),
					(l.prototype.indexOf = function(l) {
						return this._embeddedViews.indexOf(l._view);
					}),
					(l.prototype.remove = function(l) {
						var n = Qt(this._data, l);
						n && $e.destroyView(n);
					}),
					(l.prototype.detach = function(l) {
						var n = Qt(this._data, l);
						return n ? new rr(n) : null;
					}),
					l
				);
			})();
			function tr(l) {
				return new rr(l);
			}
			var rr = (function() {
				function l(l) {
					(this._view = l), (this._viewContainerRef = null), (this._appRef = null);
				}
				return (
					Object.defineProperty(l.prototype, 'rootNodes', {
						get: function() {
							return St(this._view, 0, void 0, void 0, (l = [])), l;
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
						ht(this._view);
					}),
					(l.prototype.detach = function() {
						this._view.state &= -5;
					}),
					(l.prototype.detectChanges = function() {
						var l = this._view.root.rendererFactory;
						l.begin && l.begin();
						try {
							$e.checkAndUpdateView(this._view);
						} finally {
							l.end && l.end();
						}
					}),
					(l.prototype.checkNoChanges = function() {
						$e.checkNoChangesView(this._view);
					}),
					(l.prototype.reattach = function() {
						this._view.state |= 4;
					}),
					(l.prototype.onDestroy = function(l) {
						this._view.disposables || (this._view.disposables = []), this._view.disposables.push(l);
					}),
					(l.prototype.destroy = function() {
						this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), $e.destroyView(this._view);
					}),
					(l.prototype.detachFromAppRef = function() {
						(this._appRef = null), Kt(this._view), $e.dirtyParentQueries(this._view);
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
			function sr(l, n) {
				return new ar(l, n);
			}
			var ar = (function(l) {
				function n(n, u) {
					var e = l.call(this) || this;
					return (e._parentView = n), (e._def = u), e;
				}
				return (
					t(n, l),
					(n.prototype.createEmbeddedView = function(l) {
						return new rr($e.createEmbeddedView(this._parentView, this._def, this._def.element.template, l));
					}),
					Object.defineProperty(n.prototype, 'elementRef', {
						get: function() {
							return new En(We(this._parentView, this._def.nodeIndex).renderElement);
						},
						enumerable: !0,
						configurable: !0
					}),
					n
				);
			})(au);
			function or(l, n) {
				return new ir(l, n);
			}
			var ir = (function() {
				function l(l, n) {
					(this.view = l), (this.elDef = n);
				}
				return (
					(l.prototype.get = function(l, n) {
						return (
							void 0 === n && (n = nn.THROW_IF_NOT_FOUND),
							$e.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: l, tokenKey: tt(l) }, n)
						);
					}),
					l
				);
			})();
			function cr(l, n) {
				var u = l.def.nodes[n];
				if (1 & u.flags) {
					var e = We(l, u.nodeIndex);
					return u.element.template ? e.template : e.renderElement;
				}
				if (2 & u.flags) return Qe(l, u.nodeIndex).renderText;
				if (20240 & u.flags) return Ke(l, u.nodeIndex).instance;
				throw new Error('Illegal state: read nodeValue for node index ' + n);
			}
			function pr(l) {
				return new hr(l.renderer);
			}
			var hr = (function() {
				function l(l) {
					this.delegate = l;
				}
				return (
					(l.prototype.selectRootElement = function(l) {
						return this.delegate.selectRootElement(l);
					}),
					(l.prototype.createElement = function(l, n) {
						var u = i(Mt(n), 2),
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
						var e = i(Mt(n), 2),
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
			function dr(l, n, u, e) {
				return new fr(l, n, u, e);
			}
			var fr = (function() {
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
									4096 & t.flags || (void 0 === u[e] && (u[e] = Zt(l, t)));
								}
							})(this);
					}
					return (
						(l.prototype.get = function(l, n, u) {
							void 0 === n && (n = nn.THROW_IF_NOT_FOUND), void 0 === u && (u = Vl.Default);
							var e = 0;
							return u & Vl.SkipSelf ? (e |= 1) : u & Vl.Self && (e |= 4), Gt(this, { token: l, tokenKey: tt(l), flags: e }, n);
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
								return this.get(_n);
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.destroy = function() {
							if (this._destroyed) throw new Error('The ng module ' + Pl(this.instance.constructor) + ' has already been destroyed.');
							(this._destroyed = !0),
								(function(l, n) {
									for (var u = l._def, e = new Set(), t = 0; t < u.providers.length; t++)
										if (131072 & u.providers[t].flags) {
											var r = l._providers[t];
											if (r && r !== Ft) {
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
				gr = tt(Pn),
				mr = tt(Mn),
				br = tt(En),
				yr = tt(fe),
				vr = tt(au),
				wr = tt(me),
				jr = tt(nn),
				_r = tt(Xl);
			function xr(l, n, u, e, t, r, s, a) {
				var o = [];
				if (s)
					for (var c in s) {
						var p = i(s[c], 2);
						o[p[0]] = { flags: 8, name: c, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null };
					}
				var h = [];
				if (a) for (var d in a) h.push({ type: 1, propName: d, target: null, eventName: a[d] });
				return (function(l, n, u, e, t, r, s, a, o) {
					var i = jt(u),
						c = i.matchedQueries,
						p = i.references,
						h = i.matchedQueryIds;
					o || (o = []), a || (a = []), (r = Ml(r));
					var d = _t(s, Pl(t));
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
						bindingFlags: Rt(a),
						outputs: o,
						element: null,
						provider: { token: t, value: r, deps: d },
						text: null,
						query: null,
						ngContent: null
					};
				})(l, (n |= 16384), u, e, t, t, r, o, h);
			}
			function kr(l, n) {
				return Ir(l, n);
			}
			function Cr(l, n) {
				for (var u = l; u.parent && !yt(u); ) u = u.parent;
				return Pr(u.parent, mt(u), !0, n.provider.value, n.provider.deps);
			}
			function Sr(l, n) {
				var u = Pr(l, n.parent, (32768 & n.flags) > 0, n.provider.value, n.provider.deps);
				if (n.outputs.length)
					for (var e = 0; e < n.outputs.length; e++) {
						var t = n.outputs[e],
							r = u[t.propName];
						if (!wu(r)) throw new Error('@Output ' + t.propName + " not initialized in '" + u.constructor.name + "'.");
						var s = r.subscribe(Er(l, n.parent.nodeIndex, t.eventName));
						l.disposables[n.outputIndex + e] = s.unsubscribe.bind(s);
					}
				return u;
			}
			function Er(l, n, u) {
				return function(e) {
					return ft(l, n, u, e);
				};
			}
			function Ir(l, n) {
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
									return e(Tr(l, n, u, t[0]));
								case 2:
									return e(Tr(l, n, u, t[0]), Tr(l, n, u, t[1]));
								case 3:
									return e(Tr(l, n, u, t[0]), Tr(l, n, u, t[1]), Tr(l, n, u, t[2]));
								default:
									for (var s = Array(r), a = 0; a < r; a++) s[a] = Tr(l, n, u, t[a]);
									return e.apply(void 0, c(s));
							}
						})(l, n.parent, u, e.value, e.deps);
					case 2048:
						return Tr(l, n.parent, u, e.deps[0]);
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
						return new e(Tr(l, n, u, t[0]));
					case 2:
						return new e(Tr(l, n, u, t[0]), Tr(l, n, u, t[1]));
					case 3:
						return new e(Tr(l, n, u, t[0]), Tr(l, n, u, t[1]), Tr(l, n, u, t[2]));
					default:
						for (var s = new Array(r), a = 0; a < r; a++) s[a] = Tr(l, n, u, t[a]);
						return new (e.bind.apply(e, c([void 0], s)))();
				}
			}
			var Or = {};
			function Tr(l, n, u, e, t) {
				if ((void 0 === t && (t = nn.THROW_IF_NOT_FOUND), 8 & e.flags)) return e.token;
				var r = l;
				2 & e.flags && (t = null);
				var s = e.tokenKey;
				s === wr && (u = !(!n || !n.element.componentView)), n && 1 & e.flags && ((u = !1), (n = n.parent));
				for (var a = l; a; ) {
					if (n)
						switch (s) {
							case gr:
								return pr(Mr(a, n, u));
							case mr:
								return Mr(a, n, u).renderer;
							case br:
								return new En(We(a, n.nodeIndex).renderElement);
							case yr:
								return We(a, n.nodeIndex).viewContainer;
							case vr:
								if (n.element.template) return We(a, n.nodeIndex).template;
								break;
							case wr:
								return tr(Mr(a, n, u));
							case jr:
							case _r:
								return or(a, n);
							default:
								var o = (u ? n.element.allProviders : n.element.publicProviders)[s];
								if (o) {
									var i = Ke(a, o.nodeIndex);
									return i || ((i = { instance: Ir(a, o) }), (a.nodes[o.nodeIndex] = i)), i.instance;
								}
						}
					(u = yt(a)), (n = mt(a)), (a = a.parent), 4 & e.flags && (a = null);
				}
				var c = r.root.injector.get(e.token, Or);
				return c !== Or || t === Or ? c : r.root.ngModule.injector.get(e.token, t);
			}
			function Mr(l, n, u) {
				var e;
				if (u) e = We(l, n.nodeIndex).componentView;
				else for (e = l; e.parent && !yt(e); ) e = e.parent;
				return e;
			}
			function Rr(l, n, u, e, t, r) {
				if (32768 & u.flags) {
					var s = We(l, u.parent.nodeIndex).componentView;
					2 & s.def.flags && (s.state |= 8);
				}
				if (((n.instance[u.bindings[e].name] = t), 524288 & u.flags)) {
					r = r || {};
					var a = Zl.unwrap(l.oldValues[u.bindingIndex + e]);
					r[u.bindings[e].nonMinifiedName] = new Ql(a, t, 0 != (2 & l.state));
				}
				return (l.oldValues[u.bindingIndex + e] = t), r;
			}
			function Ar(l, n) {
				if (l.def.nodeFlags & n)
					for (var u = l.def.nodes, e = 0, t = 0; t < u.length; t++) {
						var r = u[t],
							s = r.parent;
						for (!s && r.flags & n && Dr(l, t, r.flags & n, e++), 0 == (r.childFlags & n) && (t += r.childCount); s && 1 & s.flags && t === s.nodeIndex + s.childCount; )
							s.directChildFlags & n && (e = Nr(l, s, n, e)), (s = s.parent);
					}
			}
			function Nr(l, n, u, e) {
				for (var t = n.nodeIndex + 1; t <= n.nodeIndex + n.childCount; t++) {
					var r = l.def.nodes[t];
					r.flags & u && Dr(l, t, r.flags & u, e++), (t += r.childCount);
				}
				return e;
			}
			function Dr(l, n, u, e) {
				var t = Ke(l, n);
				if (t) {
					var r = t.instance;
					r &&
						($e.setCurrentNode(l, n),
						1048576 & u && Ze(l, 512, e) && r.ngAfterContentInit(),
						2097152 & u && r.ngAfterContentChecked(),
						4194304 & u && Ze(l, 768, e) && r.ngAfterViewInit(),
						8388608 & u && r.ngAfterViewChecked(),
						131072 & u && r.ngOnDestroy());
				}
			}
			function Ur(l, n, u) {
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
					query: { id: n, filterId: wt(n), bindings: e },
					ngContent: null
				};
			}
			function Lr(l) {
				for (var n = l.def.nodeMatchedQueries; l.parent && vt(l); ) {
					var u = l.parentNodeDef;
					l = l.parent;
					for (var e = u.nodeIndex + u.childCount, t = 0; t <= e; t++)
						67108864 & (r = l.def.nodes[t]).flags && 536870912 & r.flags && (r.query.filterId & n) === r.query.filterId && Je(l, t).setDirty(),
							(!(1 & r.flags && t + r.childCount < u.nodeIndex) && 67108864 & r.childFlags && 536870912 & r.childFlags) || (t += r.childCount);
				}
				if (134217728 & l.def.nodeFlags)
					for (t = 0; t < l.def.nodes.length; t++) {
						var r;
						134217728 & (r = l.def.nodes[t]).flags && 536870912 & r.flags && Je(l, t).setDirty(), (t += r.childCount);
					}
			}
			function Vr(l, n) {
				var u = Je(l, n.nodeIndex);
				if (u.dirty) {
					var e,
						t = void 0;
					if (67108864 & n.flags) {
						var r = n.parent.parent;
						(t = Fr(l, r.nodeIndex, r.nodeIndex + r.childCount, n.query, [])), (e = Ke(l, n.parent.nodeIndex).instance);
					} else 134217728 & n.flags && ((t = Fr(l, 0, l.def.nodes.length - 1, n.query, [])), (e = l.component));
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
			function Fr(l, n, u, e, t) {
				for (var r = n; r <= u; r++) {
					var s = l.def.nodes[r],
						a = s.matchedQueries[e.id];
					if ((null != a && t.push(zr(l, s, a)), 1 & s.flags && s.element.template && (s.element.template.nodeMatchedQueries & e.filterId) === e.filterId)) {
						var o = We(l, r);
						if (((s.childMatchedQueries & e.filterId) === e.filterId && (Fr(l, r + 1, r + s.childCount, e, t), (r += s.childCount)), 16777216 & s.flags))
							for (var i = o.viewContainer._embeddedViews, c = 0; c < i.length; c++) {
								var p = i[c],
									h = gt(p);
								h && h === o && Fr(p, 0, p.def.nodes.length - 1, e, t);
							}
						var d = o.template._projectedViews;
						if (d)
							for (c = 0; c < d.length; c++) {
								var f = d[c];
								Fr(f, 0, f.def.nodes.length - 1, e, t);
							}
					}
					(s.childMatchedQueries & e.filterId) !== e.filterId && (r += s.childCount);
				}
				return t;
			}
			function zr(l, n, u) {
				if (null != u)
					switch (u) {
						case 1:
							return We(l, n.nodeIndex).renderElement;
						case 0:
							return new En(We(l, n.nodeIndex).renderElement);
						case 2:
							return We(l, n.nodeIndex).template;
						case 3:
							return We(l, n.nodeIndex).viewContainer;
						case 4:
							return Ke(l, n.nodeIndex).instance;
					}
			}
			function Hr(l, n) {
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
			function Br(l, n, u) {
				var e = xt(l, n, u);
				e && It(l, u.ngContent.index, 1, e, null, void 0);
			}
			function qr(l, n) {
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
						bindingFlags: Rt(e),
						outputs: [],
						element: null,
						provider: null,
						text: null,
						query: null,
						ngContent: null
					};
				})(0, l, t);
			}
			function Gr(l, n, u) {
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
			function Zr(l, n, u) {
				var e,
					t = l.renderer;
				e = t.createText(u.text.prefix);
				var r = xt(l, n, u);
				return r && t.appendChild(r, e), { renderText: e };
			}
			function Qr(l, n) {
				return (null != l ? l.toString() : '') + n.suffix;
			}
			function Wr(l, n, u, e) {
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
					if ((Yr(i, g, n.length), (t += g.bindings.length), (r += g.outputs.length), !c && 3 & g.flags && (d = g), 20224 & g.flags)) {
						p || ((p = !0), (i.element.publicProviders = Object.create(i.element.publicProviders)), (i.element.allProviders = i.element.publicProviders));
						var b = 0 != (32768 & g.flags);
						0 == (8192 & g.flags) || b
							? (i.element.publicProviders[tt(g.provider.token)] = g)
							: (h || ((h = !0), (i.element.allProviders = Object.create(i.element.publicProviders))), (i.element.allProviders[tt(g.provider.token)] = g)),
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
						(i = g), Kr(g) || (c = g);
					else
						for (; i && f === i.nodeIndex + i.childCount; ) {
							var y = i.parent;
							y && ((y.childFlags |= i.childFlags), (y.childMatchedQueries |= i.childMatchedQueries)), (c = (i = y) && Kr(i) ? i.renderParent : i);
						}
				}
				return {
					factory: null,
					nodeFlags: s,
					rootNodeFlags: a,
					nodeMatchedQueries: o,
					flags: l,
					nodes: n,
					updateDirectives: u || ut,
					updateRenderer: e || ut,
					handleEvent: function(l, u, e, t) {
						return n[u].element.handleEvent(l, e, t);
					},
					bindingCount: t,
					outputCount: r,
					lastRenderRootNode: d
				};
			}
			function Kr(l) {
				return 0 != (1 & l.flags) && null === l.element.name;
			}
			function Yr(l, n, u) {
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
			function Jr(l, n, u, e) {
				var t = ls(l.root, l.renderer, l, n, u);
				return ns(t, l.component, e), us(t), t;
			}
			function $r(l, n, u) {
				var e = ls(l, l.renderer, null, null, n);
				return ns(e, u, u), us(e), e;
			}
			function Xr(l, n, u, e) {
				var t,
					r = n.element.componentRendererType;
				return (t = r ? l.root.rendererFactory.createRenderer(e, r) : l.root.renderer), ls(l.root, t, l, n.element.componentProvider, u);
			}
			function ls(l, n, u, e, t) {
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
			function ns(l, n, u) {
				(l.component = n), (l.context = u);
			}
			function us(l) {
				var n;
				yt(l) && (n = We(l.parent, l.parentNodeDef.parent.nodeIndex).renderElement);
				for (var u = l.def, e = l.nodes, t = 0; t < u.nodes.length; t++) {
					var r = u.nodes[t];
					$e.setCurrentNode(l, t);
					var s = void 0;
					switch (201347067 & r.flags) {
						case 1:
							var a = Dt(l, n, r),
								o = void 0;
							if (33554432 & r.flags) {
								var i = Ct(r.element.componentView);
								o = $e.createComponentView(l, r, i, a);
							}
							Ut(l, o, r, a),
								(s = { renderElement: a, componentView: o, viewContainer: null, template: r.element.template ? sr(l, r) : void 0 }),
								16777216 & r.flags && (s.viewContainer = ur(l, r, s));
							break;
						case 2:
							s = Zr(l, n, r);
							break;
						case 512:
						case 1024:
						case 2048:
						case 256:
							(s = e[t]) || 4096 & r.flags || (s = { instance: kr(l, r) });
							break;
						case 16:
							s = { instance: Cr(l, r) };
							break;
						case 16384:
							(s = e[t]) || (s = { instance: Sr(l, r) }), 32768 & r.flags && ns(We(l, r.parent.nodeIndex).componentView, s.instance, s.instance);
							break;
						case 32:
						case 64:
						case 128:
							s = { value: void 0 };
							break;
						case 67108864:
						case 134217728:
							s = new ie();
							break;
						case 8:
							Br(l, n, r), (s = void 0);
					}
					e[t] = s;
				}
				ps(l, cs.CreateViewNodes), gs(l, 201326592, 268435456, 0);
			}
			function es(l) {
				ss(l), $e.updateDirectives(l, 1), hs(l, cs.CheckNoChanges), $e.updateRenderer(l, 1), ps(l, cs.CheckNoChanges), (l.state &= -97);
			}
			function ts(l) {
				1 & l.state ? ((l.state &= -2), (l.state |= 2)) : (l.state &= -3), Ge(l, 0, 256), ss(l), $e.updateDirectives(l, 0), hs(l, cs.CheckAndUpdate), gs(l, 67108864, 536870912, 0);
				var n = Ge(l, 256, 512);
				Ar(l, 2097152 | (n ? 1048576 : 0)),
					$e.updateRenderer(l, 0),
					ps(l, cs.CheckAndUpdate),
					gs(l, 134217728, 536870912, 0),
					Ar(l, 8388608 | ((n = Ge(l, 512, 768)) ? 4194304 : 0)),
					2 & l.def.flags && (l.state &= -9),
					(l.state &= -97),
					Ge(l, 768, 1024);
			}
			function rs(l, n, u, e, t, r, s, a, o, i, p, h, d) {
				return 0 === u
					? (function(l, n, u, e, t, r, s, a, o, i, c, p) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = n.bindings.length,
											d = !1;
										return (
											h > 0 && Vt(l, n, 0, u) && (d = !0),
											h > 1 && Vt(l, n, 1, e) && (d = !0),
											h > 2 && Vt(l, n, 2, t) && (d = !0),
											h > 3 && Vt(l, n, 3, r) && (d = !0),
											h > 4 && Vt(l, n, 4, s) && (d = !0),
											h > 5 && Vt(l, n, 5, a) && (d = !0),
											h > 6 && Vt(l, n, 6, o) && (d = !0),
											h > 7 && Vt(l, n, 7, i) && (d = !0),
											h > 8 && Vt(l, n, 8, c) && (d = !0),
											h > 9 && Vt(l, n, 9, p) && (d = !0),
											d
										);
									})(l, n, u, e, t, r, s, a, o, i, c, p);
								case 2:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = !1,
											d = n.bindings,
											f = d.length;
										if (
											(f > 0 && ct(l, n, 0, u) && (h = !0),
											f > 1 && ct(l, n, 1, e) && (h = !0),
											f > 2 && ct(l, n, 2, t) && (h = !0),
											f > 3 && ct(l, n, 3, r) && (h = !0),
											f > 4 && ct(l, n, 4, s) && (h = !0),
											f > 5 && ct(l, n, 5, a) && (h = !0),
											f > 6 && ct(l, n, 6, o) && (h = !0),
											f > 7 && ct(l, n, 7, i) && (h = !0),
											f > 8 && ct(l, n, 8, c) && (h = !0),
											f > 9 && ct(l, n, 9, p) && (h = !0),
											h)
										) {
											var g = n.text.prefix;
											f > 0 && (g += Qr(u, d[0])),
												f > 1 && (g += Qr(e, d[1])),
												f > 2 && (g += Qr(t, d[2])),
												f > 3 && (g += Qr(r, d[3])),
												f > 4 && (g += Qr(s, d[4])),
												f > 5 && (g += Qr(a, d[5])),
												f > 6 && (g += Qr(o, d[6])),
												f > 7 && (g += Qr(i, d[7])),
												f > 8 && (g += Qr(c, d[8])),
												f > 9 && (g += Qr(p, d[9]));
											var m = Qe(l, n.nodeIndex).renderText;
											l.renderer.setValue(m, g);
										}
										return h;
									})(l, n, u, e, t, r, s, a, o, i, c, p);
								case 16384:
									return (function(l, n, u, e, t, r, s, a, o, i, c, p) {
										var h = Ke(l, n.nodeIndex),
											d = h.instance,
											f = !1,
											g = void 0,
											m = n.bindings.length;
										return (
											m > 0 && it(l, n, 0, u) && ((f = !0), (g = Rr(l, h, n, 0, u, g))),
											m > 1 && it(l, n, 1, e) && ((f = !0), (g = Rr(l, h, n, 1, e, g))),
											m > 2 && it(l, n, 2, t) && ((f = !0), (g = Rr(l, h, n, 2, t, g))),
											m > 3 && it(l, n, 3, r) && ((f = !0), (g = Rr(l, h, n, 3, r, g))),
											m > 4 && it(l, n, 4, s) && ((f = !0), (g = Rr(l, h, n, 4, s, g))),
											m > 5 && it(l, n, 5, a) && ((f = !0), (g = Rr(l, h, n, 5, a, g))),
											m > 6 && it(l, n, 6, o) && ((f = !0), (g = Rr(l, h, n, 6, o, g))),
											m > 7 && it(l, n, 7, i) && ((f = !0), (g = Rr(l, h, n, 7, i, g))),
											m > 8 && it(l, n, 8, c) && ((f = !0), (g = Rr(l, h, n, 8, c, g))),
											m > 9 && it(l, n, 9, p) && ((f = !0), (g = Rr(l, h, n, 9, p, g))),
											g && d.ngOnChanges(g),
											65536 & n.flags && Ze(l, 256, n.nodeIndex) && d.ngOnInit(),
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
											(f > 0 && ct(l, n, 0, u) && (d = !0),
											f > 1 && ct(l, n, 1, e) && (d = !0),
											f > 2 && ct(l, n, 2, t) && (d = !0),
											f > 3 && ct(l, n, 3, r) && (d = !0),
											f > 4 && ct(l, n, 4, s) && (d = !0),
											f > 5 && ct(l, n, 5, a) && (d = !0),
											f > 6 && ct(l, n, 6, o) && (d = !0),
											f > 7 && ct(l, n, 7, i) && (d = !0),
											f > 8 && ct(l, n, 8, c) && (d = !0),
											f > 9 && ct(l, n, 9, p) && (d = !0),
											d)
										) {
											var g = Ye(l, n.nodeIndex),
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
										for (var e = !1, t = 0; t < u.length; t++) Vt(l, n, t, u[t]) && (e = !0);
										return e;
									})(l, n, u);
								case 2:
									return (function(l, n, u) {
										for (var e = n.bindings, t = !1, r = 0; r < u.length; r++) ct(l, n, r, u[r]) && (t = !0);
										if (t) {
											var s = '';
											for (r = 0; r < u.length; r++) s += Qr(u[r], e[r]);
											s = n.text.prefix + s;
											var a = Qe(l, n.nodeIndex).renderText;
											l.renderer.setValue(a, s);
										}
										return t;
									})(l, n, u);
								case 16384:
									return (function(l, n, u) {
										for (var e = Ke(l, n.nodeIndex), t = e.instance, r = !1, s = void 0, a = 0; a < u.length; a++) it(l, n, a, u[a]) && ((r = !0), (s = Rr(l, e, n, a, u[a], s)));
										return s && t.ngOnChanges(s), 65536 & n.flags && Ze(l, 256, n.nodeIndex) && t.ngOnInit(), 262144 & n.flags && t.ngDoCheck(), r;
									})(l, n, u);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u) {
										for (var e = n.bindings, t = !1, r = 0; r < u.length; r++) ct(l, n, r, u[r]) && (t = !0);
										if (t) {
											var s = Ye(l, n.nodeIndex),
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
			function ss(l) {
				var n = l.def;
				if (4 & n.nodeFlags)
					for (var u = 0; u < n.nodes.length; u++) {
						var e = n.nodes[u];
						if (4 & e.flags) {
							var t = We(l, u).template._projectedViews;
							if (t)
								for (var r = 0; r < t.length; r++) {
									var s = t[r];
									(s.state |= 32), dt(s, l);
								}
						} else 0 == (4 & e.childFlags) && (u += e.childCount);
					}
			}
			function as(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				return (
					0 === u
						? (function(l, n, u, e, t, r, s, a, o, i, c, p) {
								var h = n.bindings.length;
								h > 0 && pt(l, n, 0, u),
									h > 1 && pt(l, n, 1, e),
									h > 2 && pt(l, n, 2, t),
									h > 3 && pt(l, n, 3, r),
									h > 4 && pt(l, n, 4, s),
									h > 5 && pt(l, n, 5, a),
									h > 6 && pt(l, n, 6, o),
									h > 7 && pt(l, n, 7, i),
									h > 8 && pt(l, n, 8, c),
									h > 9 && pt(l, n, 9, p);
						  })(l, n, e, t, r, s, a, o, i, c, p, h)
						: (function(l, n, u) {
								for (var e = 0; e < u.length; e++) pt(l, n, e, u[e]);
						  })(l, n, e),
					!1
				);
			}
			function os(l, n) {
				if (Je(l, n.nodeIndex).dirty) throw Xe($e.createDebugContext(l, n.nodeIndex), 'Query ' + n.query.id + ' not dirty', 'Query ' + n.query.id + ' dirty', 0 != (1 & l.state));
			}
			function is(l) {
				if (!(128 & l.state)) {
					if ((hs(l, cs.Destroy), ps(l, cs.Destroy), Ar(l, 131072), l.disposables)) for (var n = 0; n < l.disposables.length; n++) l.disposables[n]();
					!(function(l) {
						if (16 & l.state) {
							var n = gt(l);
							if (n) {
								var u = n.template._projectedViews;
								u && (Jt(u, u.indexOf(l)), $e.dirtyParentQueries(l));
							}
						}
					})(l),
						l.renderer.destroyNode &&
							(function(l) {
								for (var n = l.def.nodes.length, u = 0; u < n; u++) {
									var e = l.def.nodes[u];
									1 & e.flags
										? l.renderer.destroyNode(We(l, u).renderElement)
										: 2 & e.flags
										? l.renderer.destroyNode(Qe(l, u).renderText)
										: (67108864 & e.flags || 134217728 & e.flags) && Je(l, u).destroy();
								}
							})(l),
						yt(l) && l.renderer.destroy(),
						(l.state |= 128);
				}
			}
			var cs = (function(l) {
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
			function ps(l, n) {
				var u = l.def;
				if (33554432 & u.nodeFlags)
					for (var e = 0; e < u.nodes.length; e++) {
						var t = u.nodes[e];
						33554432 & t.flags ? ds(We(l, e).componentView, n) : 0 == (33554432 & t.childFlags) && (e += t.childCount);
					}
			}
			function hs(l, n) {
				var u = l.def;
				if (16777216 & u.nodeFlags)
					for (var e = 0; e < u.nodes.length; e++) {
						var t = u.nodes[e];
						if (16777216 & t.flags) for (var r = We(l, e).viewContainer._embeddedViews, s = 0; s < r.length; s++) ds(r[s], n);
						else 0 == (16777216 & t.childFlags) && (e += t.childCount);
					}
			}
			function ds(l, n) {
				var u = l.state;
				switch (n) {
					case cs.CheckNoChanges:
						0 == (128 & u) && (12 == (12 & u) ? es(l) : 64 & u && fs(l, cs.CheckNoChangesProjectedViews));
						break;
					case cs.CheckNoChangesProjectedViews:
						0 == (128 & u) && (32 & u ? es(l) : 64 & u && fs(l, n));
						break;
					case cs.CheckAndUpdate:
						0 == (128 & u) && (12 == (12 & u) ? ts(l) : 64 & u && fs(l, cs.CheckAndUpdateProjectedViews));
						break;
					case cs.CheckAndUpdateProjectedViews:
						0 == (128 & u) && (32 & u ? ts(l) : 64 & u && fs(l, n));
						break;
					case cs.Destroy:
						is(l);
						break;
					case cs.CreateViewNodes:
						us(l);
				}
			}
			function fs(l, n) {
				hs(l, n), ps(l, n);
			}
			function gs(l, n, u, e) {
				if (l.def.nodeFlags & n && l.def.nodeFlags & u)
					for (var t = l.def.nodes.length, r = 0; r < t; r++) {
						var s = l.def.nodes[r];
						if (s.flags & n && s.flags & u)
							switch (($e.setCurrentNode(l, s.nodeIndex), e)) {
								case 0:
									Vr(l, s);
									break;
								case 1:
									os(l, s);
							}
						(s.childFlags & n && s.childFlags & u) || (r += s.childCount);
					}
			}
			var ms = !1;
			function bs(l, n, u, e, t, r) {
				var s = t.injector.get(On);
				return $r(vs(l, t, s, n, u), e, r);
			}
			function ys(l, n, u, e, t, r) {
				var s = t.injector.get(On),
					a = vs(l, t, new Js(s), n, u),
					o = Ps(e);
				return Ks(Ls.create, $r, null, [a, o, r]);
			}
			function vs(l, n, u, e, t) {
				var r = n.injector.get(Nn),
					s = n.injector.get(yu),
					a = u.createRenderer(null, null);
				return { ngModule: n, injector: l, projectableNodes: e, selectorOrNode: t, sanitizer: r, rendererFactory: u, renderer: a, errorHandler: s };
			}
			function ws(l, n, u, e) {
				var t = Ps(u);
				return Ks(Ls.create, Jr, null, [l, n, t, e]);
			}
			function js(l, n, u, e) {
				return (u = Cs.get(n.element.componentProvider.provider.token) || Ps(u)), Ks(Ls.create, Xr, null, [l, n, u, e]);
			}
			function _s(l, n, u, e) {
				return dr(
					l,
					n,
					u,
					(function(l) {
						var n = (function(l) {
								var n = !1,
									u = !1;
								return 0 === xs.size
									? { hasOverrides: n, hasDeprecatedOverrides: u }
									: (l.providers.forEach(function(l) {
											var e = xs.get(l.token);
											3840 & l.flags && e && ((n = !0), (u = u || e.deprecatedBehavior));
									  }),
									  l.modules.forEach(function(l) {
											ks.forEach(function(e, t) {
												ml(t).providedIn === l && ((n = !0), (u = u || e.deprecatedBehavior));
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
										var t = xs.get(e.token);
										t && ((e.flags = (-3841 & e.flags) | t.flags), (e.deps = _t(t.deps)), (e.value = t.value));
									}
									if (ks.size > 0) {
										var r = new Set(l.modules);
										ks.forEach(function(n, e) {
											if (r.has(ml(e).providedIn)) {
												var t = { token: e, flags: n.flags | (u ? 4096 : 0), deps: _t(n.deps), value: n.value, index: l.providers.length };
												l.providers.push(t), (l.providersByKey[tt(e)] = t);
											}
										});
									}
							  })(
									(l = l.factory(function() {
										return ut;
									}))
							  ),
							  l)
							: l;
					})(e)
				);
			}
			var xs = new Map(),
				ks = new Map(),
				Cs = new Map();
			function Ss(l) {
				var n;
				xs.set(l.token, l), 'function' == typeof l.token && (n = ml(l.token)) && 'function' == typeof n.providedIn && ks.set(l.token, l);
			}
			function Es(l, n) {
				var u = Ct(n.viewDefFactory),
					e = Ct(u.nodes[0].element.componentView);
				Cs.set(l, e);
			}
			function Is() {
				xs.clear(), ks.clear(), Cs.clear();
			}
			function Ps(l) {
				if (0 === xs.size) return l;
				var n = (function(l) {
					for (var n = [], u = null, e = 0; e < l.nodes.length; e++) {
						var t = l.nodes[e];
						1 & t.flags && (u = t), u && 3840 & t.flags && xs.has(t.provider.token) && (n.push(u.nodeIndex), (u = null));
					}
					return n;
				})(l);
				if (0 === n.length) return l;
				l = l.factory(function() {
					return ut;
				});
				for (var u = 0; u < n.length; u++) e(l, n[u]);
				return l;
				function e(l, n) {
					for (var u = n + 1; u < l.nodes.length; u++) {
						var e = l.nodes[u];
						if (1 & e.flags) return;
						if (3840 & e.flags) {
							var t = e.provider,
								r = xs.get(t.token);
							r && ((e.flags = (-3841 & e.flags) | r.flags), (t.deps = _t(r.deps)), (t.value = r.value));
						}
					}
				}
			}
			function Os(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				var d = l.def.nodes[n];
				return rs(l, d, u, e, t, r, s, a, o, i, c, p, h), 224 & d.flags ? Ye(l, n).value : void 0;
			}
			function Ts(l, n, u, e, t, r, s, a, o, i, c, p, h) {
				var d = l.def.nodes[n];
				return as(l, d, u, e, t, r, s, a, o, i, c, p, h), 224 & d.flags ? Ye(l, n).value : void 0;
			}
			function Ms(l) {
				return Ks(Ls.detectChanges, ts, null, [l]);
			}
			function Rs(l) {
				return Ks(Ls.checkNoChanges, es, null, [l]);
			}
			function As(l) {
				return Ks(Ls.destroy, is, null, [l]);
			}
			var Ns,
				Ds,
				Us,
				Ls = (function(l) {
					return (
						(l[(l.create = 0)] = 'create'),
						(l[(l.detectChanges = 1)] = 'detectChanges'),
						(l[(l.checkNoChanges = 2)] = 'checkNoChanges'),
						(l[(l.destroy = 3)] = 'destroy'),
						(l[(l.handleEvent = 4)] = 'handleEvent'),
						l
					);
				})({});
			function Vs(l, n) {
				(Ds = l), (Us = n);
			}
			function Fs(l, n, u, e) {
				return Vs(l, n), Ks(Ls.handleEvent, l.def.handleEvent, null, [l, n, u, e]);
			}
			function zs(l, n) {
				if (128 & l.state) throw nt(Ls[Ns]);
				return (
					Vs(l, Gs(l, 0)),
					l.def.updateDirectives(function(l, u, e) {
						for (var t = [], r = 3; r < arguments.length; r++) t[r - 3] = arguments[r];
						var s = l.def.nodes[u];
						return 0 === n ? Bs(l, s, e, t) : qs(l, s, e, t), 16384 & s.flags && Vs(l, Gs(l, u)), 224 & s.flags ? Ye(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function Hs(l, n) {
				if (128 & l.state) throw nt(Ls[Ns]);
				return (
					Vs(l, Zs(l, 0)),
					l.def.updateRenderer(function(l, u, e) {
						for (var t = [], r = 3; r < arguments.length; r++) t[r - 3] = arguments[r];
						var s = l.def.nodes[u];
						return 0 === n ? Bs(l, s, e, t) : qs(l, s, e, t), 3 & s.flags && Vs(l, Zs(l, u)), 224 & s.flags ? Ye(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function Bs(l, n, u, e) {
				if (rs.apply(void 0, c([l, n, u], e))) {
					var t = 1 === u ? e[0] : e;
					if (16384 & n.flags) {
						for (var r = {}, s = 0; s < n.bindings.length; s++) {
							var a = n.bindings[s],
								o = t[s];
							8 & a.flags &&
								(r[
									((d = a.nonMinifiedName),
									'ng-reflect-' +
										d.replace(/[$@]/g, '_').replace(Bl, function() {
											for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
											return '-' + l[1].toLowerCase();
										}))
								] = ql(o));
						}
						var i = n.parent,
							p = We(l, i.nodeIndex).renderElement;
						if (i.element.name) for (var h in r) null != (o = r[h]) ? l.renderer.setAttribute(p, h, o) : l.renderer.removeAttribute(p, h);
						else l.renderer.setValue(p, 'bindings=' + JSON.stringify(r, null, 2));
					}
				}
				var d;
			}
			function qs(l, n, u, e) {
				as.apply(void 0, c([l, n, u], e));
			}
			function Gs(l, n) {
				for (var u = n; u < l.def.nodes.length; u++) {
					var e = l.def.nodes[u];
					if (16384 & e.flags && e.bindings && e.bindings.length) return u;
				}
				return null;
			}
			function Zs(l, n) {
				for (var u = n; u < l.def.nodes.length; u++) {
					var e = l.def.nodes[u];
					if (3 & e.flags && e.bindings && e.bindings.length) return u;
				}
				return null;
			}
			var Qs = (function() {
				function l(l, n) {
					(this.view = l), (this.nodeIndex = n), null == n && (this.nodeIndex = n = 0), (this.nodeDef = l.def.nodes[n]);
					for (var u = this.nodeDef, e = l; u && 0 == (1 & u.flags); ) u = u.parent;
					if (!u) for (; !u && e; ) (u = mt(e)), (e = e.parent);
					(this.elDef = u), (this.elView = e);
				}
				return (
					Object.defineProperty(l.prototype, 'elOrCompView', {
						get: function() {
							return We(this.elView, this.elDef.nodeIndex).componentView || this.view;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'injector', {
						get: function() {
							return or(this.elView, this.elDef);
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
								Ws(this.elView, this.elDef, l);
								for (var n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
									var u = this.elView.def.nodes[n];
									20224 & u.flags && Ws(this.elView, u, l), (n += u.childCount);
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
								for (; l && !yt(l); ) l = l.parent;
								return l.parent ? We(l.parent, mt(l).nodeIndex) : null;
							})(this.elOrCompView);
							return l ? l.renderElement : void 0;
						},
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(l.prototype, 'renderNode', {
						get: function() {
							return 2 & this.nodeDef.flags ? bt(this.view, this.nodeDef) : bt(this.elView, this.elDef);
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
							return ++s === r ? (n = l.error).bind.apply(n, c([l], e)) : ut;
						}),
							s < r && (l.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), l.error.apply(l, c(e)));
					}),
					l
				);
			})();
			function Ws(l, n, u) {
				for (var e in n.references) u[e] = zr(l, n, n.references[e]);
			}
			function Ks(l, n, u, e) {
				var t = Ns,
					r = Ds,
					s = Us;
				try {
					Ns = l;
					var a = n.apply(u, e);
					return (Ds = r), (Us = s), (Ns = t), a;
				} catch (o) {
					if (gu(o) || !Ds) throw o;
					throw (function(l, n) {
						return l instanceof Error || (l = new Error(l.toString())), lt(l, n), l;
					})(o, Ys());
				}
			}
			function Ys() {
				return Ds ? new Qs(Ds, Us) : null;
			}
			var Js = (function() {
					function l(l) {
						this.delegate = l;
					}
					return (
						(l.prototype.createRenderer = function(l, n) {
							return new $s(this.delegate.createRenderer(l, n));
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
				$s = (function() {
					function l(l) {
						(this.delegate = l), (this.debugContextFactory = Ys), (this.data = this.delegate.data);
					}
					return (
						(l.prototype.createDebugContext = function(l) {
							return this.debugContextFactory(l);
						}),
						(l.prototype.destroyNode = function(l) {
							!(function(l) {
								je.delete(l.nativeNode);
							})(_e(l)),
								this.delegate.destroyNode && this.delegate.destroyNode(l);
						}),
						(l.prototype.destroy = function() {
							this.delegate.destroy();
						}),
						(l.prototype.createElement = function(l, n) {
							var u = this.delegate.createElement(l, n),
								e = this.createDebugContext(u);
							if (e) {
								var t = new we(u, null, e);
								(t.name = l), xe(t);
							}
							return u;
						}),
						(l.prototype.createComment = function(l) {
							var n = this.delegate.createComment(l),
								u = this.createDebugContext(n);
							return u && xe(new ve(n, null, u)), n;
						}),
						(l.prototype.createText = function(l) {
							var n = this.delegate.createText(l),
								u = this.createDebugContext(n);
							return u && xe(new ve(n, null, u)), n;
						}),
						(l.prototype.appendChild = function(l, n) {
							var u = _e(l),
								e = _e(n);
							u && e && u instanceof we && u.addChild(e), this.delegate.appendChild(l, n);
						}),
						(l.prototype.insertBefore = function(l, n, u) {
							var e = _e(l),
								t = _e(n),
								r = _e(u);
							e && t && e instanceof we && e.insertBefore(r, t), this.delegate.insertBefore(l, n, u);
						}),
						(l.prototype.removeChild = function(l, n) {
							var u = _e(l),
								e = _e(n);
							u && e && u instanceof we && u.removeChild(e), this.delegate.removeChild(l, n);
						}),
						(l.prototype.selectRootElement = function(l, n) {
							var u = this.delegate.selectRootElement(l, n),
								e = Ys();
							return e && xe(new we(u, null, e)), u;
						}),
						(l.prototype.setAttribute = function(l, n, u, e) {
							var t = _e(l);
							t && t instanceof we && (t.attributes[e ? e + ':' + n : n] = u), this.delegate.setAttribute(l, n, u, e);
						}),
						(l.prototype.removeAttribute = function(l, n, u) {
							var e = _e(l);
							e && e instanceof we && (e.attributes[u ? u + ':' + n : n] = null), this.delegate.removeAttribute(l, n, u);
						}),
						(l.prototype.addClass = function(l, n) {
							var u = _e(l);
							u && u instanceof we && (u.classes[n] = !0), this.delegate.addClass(l, n);
						}),
						(l.prototype.removeClass = function(l, n) {
							var u = _e(l);
							u && u instanceof we && (u.classes[n] = !1), this.delegate.removeClass(l, n);
						}),
						(l.prototype.setStyle = function(l, n, u, e) {
							var t = _e(l);
							t && t instanceof we && (t.styles[n] = u), this.delegate.setStyle(l, n, u, e);
						}),
						(l.prototype.removeStyle = function(l, n, u) {
							var e = _e(l);
							e && e instanceof we && (e.styles[n] = null), this.delegate.removeStyle(l, n, u);
						}),
						(l.prototype.setProperty = function(l, n, u) {
							var e = _e(l);
							e && e instanceof we && (e.properties[n] = u), this.delegate.setProperty(l, n, u);
						}),
						(l.prototype.listen = function(l, n, u) {
							if ('string' != typeof l) {
								var e = _e(l);
								e && e.listeners.push(new ye(n, u));
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
			function Xs(l, n, u) {
				return new la(l, n, u);
			}
			var la = (function(l) {
					function n(n, u, e) {
						var t = l.call(this) || this;
						return (t.moduleType = n), (t._bootstrapComponents = u), (t._ngModuleDefFactory = e), t;
					}
					return (
						t(n, l),
						(n.prototype.create = function(l) {
							!(function() {
								if (!ms) {
									ms = !0;
									var l = Vn()
										? {
												setCurrentNode: Vs,
												createRootView: ys,
												createEmbeddedView: ws,
												createComponentView: js,
												createNgModuleRef: _s,
												overrideProvider: Ss,
												overrideComponentView: Es,
												clearOverrides: Is,
												checkAndUpdateView: Ms,
												checkNoChangesView: Rs,
												destroyView: As,
												createDebugContext: function(l, n) {
													return new Qs(l, n);
												},
												handleEvent: Fs,
												updateDirectives: zs,
												updateRenderer: Hs
										  }
										: {
												setCurrentNode: function() {},
												createRootView: bs,
												createEmbeddedView: Jr,
												createComponentView: Xr,
												createNgModuleRef: dr,
												overrideProvider: ut,
												overrideComponentView: ut,
												clearOverrides: ut,
												checkAndUpdateView: ts,
												checkNoChangesView: es,
												destroyView: is,
												createDebugContext: function(l, n) {
													return new Qs(l, n);
												},
												handleEvent: function(l, n, u, e) {
													return l.def.handleEvent(l, n, u, e);
												},
												updateDirectives: function(l, n) {
													return l.def.updateDirectives(0 === n ? Os : Ts, l);
												},
												updateRenderer: function(l, n) {
													return l.def.updateRenderer(0 === n ? Os : Ts, l);
												}
										  };
									($e.setCurrentNode = l.setCurrentNode),
										($e.createRootView = l.createRootView),
										($e.createEmbeddedView = l.createEmbeddedView),
										($e.createComponentView = l.createComponentView),
										($e.createNgModuleRef = l.createNgModuleRef),
										($e.overrideProvider = l.overrideProvider),
										($e.overrideComponentView = l.overrideComponentView),
										($e.clearOverrides = l.clearOverrides),
										($e.checkAndUpdateView = l.checkAndUpdateView),
										($e.checkNoChangesView = l.checkNoChangesView),
										($e.destroyView = l.destroyView),
										($e.resolveDep = Tr),
										($e.createDebugContext = l.createDebugContext),
										($e.handleEvent = l.handleEvent),
										($e.updateDirectives = l.updateDirectives),
										($e.updateRenderer = l.updateRenderer),
										($e.dirtyParentQueries = Lr);
								}
							})();
							var n = (function(l) {
								var n = Array.from(l.providers),
									u = Array.from(l.modules),
									e = {};
								for (var t in l.providersByKey) e[t] = l.providersByKey[t];
								return { factory: l.factory, isRoot: l.isRoot, providers: n, modules: u, providersByKey: e };
							})(Ct(this._ngModuleDefFactory));
							return $e.createNgModuleRef(this.moduleType, l || nn.NULL, this._bootstrapComponents, n);
						}),
						n
					);
				})(Sn),
				na = (function() {
					return function() {};
				})(),
				ua = (function() {
					return function() {};
				})(),
				ea = (function() {
					return function() {};
				})(),
				ta = new bl('Location Initialized'),
				ra = (function() {
					return function() {};
				})(),
				sa = new bl('appBaseHref'),
				aa = (function() {
					function l(l) {
						var u = this;
						(this._subject = new su()), (this._platformStrategy = l);
						var e = this._platformStrategy.getBaseHref();
						(this._baseHref = n.stripTrailingSlash(oa(e))),
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
								})(this._baseHref, oa(l))
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
			function oa(l) {
				return l.replace(/\/index.html$/, '');
			}
			var ia = (function(l) {
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
							var n = aa.joinWithSlash(this._baseHref, l);
							return n.length > 0 ? '#' + n : n;
						}),
						(n.prototype.pushState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + aa.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.pushState(l, n, t);
						}),
						(n.prototype.replaceState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + aa.normalizeQueryParams(e));
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
				})(ra),
				ca = (function(l) {
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
							return aa.joinWithSlash(this._baseHref, l);
						}),
						(n.prototype.path = function(l) {
							void 0 === l && (l = !1);
							var n = this._platformLocation.pathname + aa.normalizeQueryParams(this._platformLocation.search),
								u = this._platformLocation.hash;
							return u && l ? '' + n + u : n;
						}),
						(n.prototype.pushState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + aa.normalizeQueryParams(e));
							this._platformLocation.pushState(l, n, t);
						}),
						(n.prototype.replaceState = function(l, n, u, e) {
							var t = this.prepareExternalUrl(u + aa.normalizeQueryParams(e));
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
				})(ra),
				pa = void 0,
				ha = [
					'en',
					[['a', 'p'], ['AM', 'PM'], pa],
					[['AM', 'PM'], pa, pa],
					[
						['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
						['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
					],
					pa,
					[
						['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
						['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
					],
					pa,
					[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
					0,
					[6, 0],
					['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
					['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
					['{1}, {0}', pa, "{1} 'at' {0}", pa],
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
				da = {},
				fa = (function(l) {
					return (l[(l.Zero = 0)] = 'Zero'), (l[(l.One = 1)] = 'One'), (l[(l.Two = 2)] = 'Two'), (l[(l.Few = 3)] = 'Few'), (l[(l.Many = 4)] = 'Many'), (l[(l.Other = 5)] = 'Other'), l;
				})({}),
				ga = new bl('UseV4Plurals'),
				ma = (function() {
					return function() {};
				})(),
				ba = (function(l) {
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
													u = da[n];
												if (u) return u;
												var e = n.split('-')[0];
												if ((u = da[e])) return u;
												if ('en' === e) return ha;
												throw new Error('Missing locale data for the locale "' + l + '".');
											})(l)[18];
									  })(n || this.locale)(l)
							) {
								case fa.Zero:
									return 'zero';
								case fa.One:
									return 'one';
								case fa.Two:
									return 'two';
								case fa.Few:
									return 'few';
								case fa.Many:
									return 'many';
								default:
									return 'other';
							}
						}),
						n
					);
				})(ma),
				ya = (function() {
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
										(Wl(this._rawClass)
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
								if ('string' != typeof l.item) throw new Error('NgClass can only toggle CSS classes expressed as strings, got ' + Pl(l.item));
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
				va = (function() {
					function l(l, n) {
						(this._viewContainer = l),
							(this._context = new wa()),
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
								ja('ngIfThen', l), (this._thenTemplateRef = l), (this._thenViewRef = null), this._updateView();
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'ngIfElse', {
							set: function(l) {
								ja('ngIfElse', l), (this._elseTemplateRef = l), (this._elseViewRef = null), this._updateView();
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
				wa = (function() {
					return function() {
						(this.$implicit = null), (this.ngIf = null);
					};
				})();
			function ja(l, n) {
				if (n && !n.createEmbeddedView) throw new Error(l + " must be a TemplateRef, but received '" + Pl(n) + "'.");
			}
			var _a = (function() {
					return function() {};
				})(),
				xa = new bl('DocumentToken'),
				ka = 'server',
				Ca = (function() {
					function l() {}
					return (
						(l.ngInjectableDef = gl({
							providedIn: 'root',
							factory: function() {
								return new Sa(Hl(xa), window);
							}
						})),
						l
					);
				})(),
				Sa = (function() {
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
				Ea = new P(function(l) {
					return l.complete();
				});
			function Ia(l) {
				return l
					? (function(l) {
							return new P(function(n) {
								return l.schedule(function() {
									return n.complete();
								});
							});
					  })(l)
					: Ea;
			}
			function Pa(l) {
				var n = new P(function(n) {
					n.next(l), n.complete();
				});
				return (n._isScalar = !0), (n.value = l), n;
			}
			function Oa() {
				for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
				var u = l[l.length - 1];
				switch ((U(u) ? l.pop() : (u = void 0), l.length)) {
					case 0:
						return Ia(u);
					case 1:
						return u ? X(l, u) : Pa(l[0]);
					default:
						return X(l, u);
				}
			}
			var Ta = (function(l) {
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
			function Ma() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			Ma.prototype = Object.create(Error.prototype);
			var Ra = Ma,
				Aa = {},
				Na = (function() {
					function l(l) {
						this.resultSelector = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Da(l, this.resultSelector));
						}),
						l
					);
				})(),
				Da = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return (e.resultSelector = u), (e.active = 0), (e.values = []), (e.observables = []), e;
					}
					return (
						t(n, l),
						(n.prototype._next = function(l) {
							this.values.push(Aa), this.observables.push(l);
						}),
						(n.prototype._complete = function() {
							var l = this.observables,
								n = l.length;
							if (0 === n) this.destination.complete();
							else {
								(this.active = n), (this.toRespond = n);
								for (var u = 0; u < n; u++) {
									var e = l[u];
									this.add(W(this, e, e, u));
								}
							}
						}),
						(n.prototype.notifyComplete = function(l) {
							0 == (this.active -= 1) && this.destination.complete();
						}),
						(n.prototype.notifyNext = function(l, n, u, e, t) {
							var r = this.values,
								s = this.toRespond ? (r[u] === Aa ? --this.toRespond : this.toRespond) : 0;
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
				})(K);
			function Ua(l) {
				return new P(function(n) {
					var u;
					try {
						u = l();
					} catch (e) {
						return void n.error(e);
					}
					return (u ? ll(u) : Ia()).subscribe(n);
				});
			}
			function La() {
				return rl(1);
			}
			function Va(l, n) {
				return function(u) {
					return u.lift(new Fa(l, n));
				};
			}
			var Fa = (function() {
					function l(l, n) {
						(this.predicate = l), (this.thisArg = n);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new za(l, this.predicate, this.thisArg));
						}),
						l
					);
				})(),
				za = (function(l) {
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
			function Ha() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			Ha.prototype = Object.create(Error.prototype);
			var Ba = Ha;
			function qa(l) {
				return function(n) {
					return 0 === l ? Ia() : n.lift(new Ga(l));
				};
			}
			var Ga = (function() {
					function l(l) {
						if (((this.total = l), this.total < 0)) throw new Ba();
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Za(l, this.total));
						}),
						l
					);
				})(),
				Za = (function(l) {
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
			function Qa(l, n, u) {
				return function(e) {
					return e.lift(new Wa(l, n, u));
				};
			}
			var Wa = (function() {
					function l(l, n, u) {
						(this.nextOrObserver = l), (this.error = n), (this.complete = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new Ka(l, this.nextOrObserver, this.error, this.complete));
						}),
						l
					);
				})(),
				Ka = (function(l) {
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
				Ya = function(l) {
					return (
						void 0 === l && (l = Ja),
						Qa({
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
			function Ja() {
				return new Ra();
			}
			function $a(l) {
				return (
					void 0 === l && (l = null),
					function(n) {
						return n.lift(new Xa(l));
					}
				);
			}
			var Xa = (function() {
					function l(l) {
						this.defaultValue = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new lo(l, this.defaultValue));
						}),
						l
					);
				})(),
				lo = (function(l) {
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
			function no(l, n) {
				var u = arguments.length >= 2;
				return function(e) {
					return e.pipe(
						l
							? Va(function(n, u) {
									return l(n, u, e);
							  })
							: tl,
						qa(1),
						u
							? $a(n)
							: Ya(function() {
									return new Ra();
							  })
					);
				};
			}
			function uo(l) {
				return function(n) {
					var u = new eo(l),
						e = n.lift(u);
					return (u.caught = e);
				};
			}
			var eo = (function() {
					function l(l) {
						this.selector = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new to(l, this.selector, this.caught));
						}),
						l
					);
				})(),
				to = (function(l) {
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
								this.add(e), W(this, u, void 0, void 0, e);
							}
						}),
						n
					);
				})(K);
			function ro(l) {
				return function(n) {
					return 0 === l ? Ia() : n.lift(new so(l));
				};
			}
			var so = (function() {
					function l(l) {
						if (((this.total = l), this.total < 0)) throw new Ba();
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new ao(l, this.total));
						}),
						l
					);
				})(),
				ao = (function(l) {
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
			function oo(l, n) {
				var u = arguments.length >= 2;
				return function(e) {
					return e.pipe(
						l
							? Va(function(n, u) {
									return l(n, u, e);
							  })
							: tl,
						ro(1),
						u
							? $a(n)
							: Ya(function() {
									return new Ra();
							  })
					);
				};
			}
			var io = (function() {
					function l(l, n, u) {
						(this.predicate = l), (this.thisArg = n), (this.source = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new co(l, this.predicate, this.thisArg, this.source));
						}),
						l
					);
				})(),
				co = (function(l) {
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
			function po(l, n) {
				return 'function' == typeof n
					? function(u) {
							return u.pipe(
								po(function(u, e) {
									return ll(l(u, e)).pipe(
										Y(function(l, t) {
											return n(u, l, e, t);
										})
									);
								})
							);
					  }
					: function(n) {
							return n.lift(new ho(l));
					  };
			}
			var ho = (function() {
					function l(l) {
						this.project = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new fo(l, this.project));
						}),
						l
					);
				})(),
				fo = (function(l) {
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
							this.destination.add(t), (this.innerSubscription = W(this, l, n, u, t));
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
				})(K);
			function go(l, n) {
				var u = !1;
				return (
					arguments.length >= 2 && (u = !0),
					function(e) {
						return e.lift(new mo(l, n, u));
					}
				);
			}
			var mo = (function() {
					function l(l, n, u) {
						void 0 === u && (u = !1), (this.accumulator = l), (this.seed = n), (this.hasSeed = u);
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new bo(l, this.accumulator, this.seed, this.hasSeed));
						}),
						l
					);
				})(),
				bo = (function(l) {
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
			function yo(l, n) {
				return nl(l, n, 1);
			}
			var vo = (function() {
					function l(l) {
						this.callback = l;
					}
					return (
						(l.prototype.call = function(l, n) {
							return n.subscribe(new wo(l, this.callback));
						}),
						l
					);
				})(),
				wo = (function(l) {
					function n(n, u) {
						var e = l.call(this, n) || this;
						return e.add(new m(u)), e;
					}
					return t(n, l), n;
				})(x),
				jo = null;
			function _o() {
				return jo;
			}
			var xo,
				ko = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				Co = {
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
				So = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' };
			xl.Node &&
				(xo =
					xl.Node.prototype.contains ||
					function(l) {
						return !!(16 & this.compareDocumentPosition(l));
					});
			var Eo,
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
							(l = new n()), jo || (jo = l);
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
								return ko;
							},
							enumerable: !0,
							configurable: !0
						}),
						(n.prototype.contains = function(l, n) {
							return xo.call(l, n);
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
								n.startsWith('U+') && ((n = String.fromCharCode(parseInt(n.substring(2), 16))), 3 === l.location && So.hasOwnProperty(n) && (n = So[n]));
							}
							return Co[n] || n;
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
								u = Po || (Po = document.querySelector('base')) ? Po.getAttribute('href') : null;
							return null == u ? null : ((n = u), Eo || (Eo = document.createElement('a')), Eo.setAttribute('href', n), '/' === Eo.pathname.charAt(0) ? Eo.pathname : '/' + Eo.pathname);
						}),
						(n.prototype.resetBaseElement = function() {
							Po = null;
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
				Po = null,
				Oo = xa;
			function To() {
				return !!window.history.pushState;
			}
			var Mo = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), u._init(), u;
					}
					var u;
					return (
						t(n, l),
						(n.prototype._init = function() {
							(this.location = _o().getLocation()), (this._history = _o().getHistory());
						}),
						(n.prototype.getBaseHrefFromDOM = function() {
							return _o().getBaseHref(this._doc);
						}),
						(n.prototype.onPopState = function(l) {
							_o()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', l, !1);
						}),
						(n.prototype.onHashChange = function(l) {
							_o()
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
							To() ? this._history.pushState(l, n, u) : (this.location.hash = u);
						}),
						(n.prototype.replaceState = function(l, n, u) {
							To() ? this._history.replaceState(l, n, u) : (this.location.hash = u);
						}),
						(n.prototype.forward = function() {
							this._history.forward();
						}),
						(n.prototype.back = function() {
							this._history.back();
						}),
						s(
							[
								((u = Nl(Oo)),
								function(l, n) {
									u(l, n, 0);
								}),
								a('design:paramtypes', [Object])
							],
							n
						)
					);
				})(ea),
				Ro = new bl('TRANSITION_ID'),
				Ao = [
					{
						provide: ju,
						useFactory: function(l, n, u) {
							return function() {
								u.get(_u).donePromise.then(function() {
									var u = _o();
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
						deps: [Ro, Oo, nn],
						multi: !0
					}
				],
				No = (function() {
					function l() {}
					return (
						(l.init = function() {
							var n;
							(n = new l()), (le = n);
						}),
						(l.prototype.addToWindow = function(l) {
							(xl.getAngularTestability = function(n, u) {
								void 0 === u && (u = !0);
								var e = l.findTestabilityInTree(n, u);
								if (null == e) throw new Error('Could not find testability for element.');
								return e;
							}),
								(xl.getAllAngularTestabilities = function() {
									return l.getAllTestabilities();
								}),
								(xl.getAllAngularRootElements = function() {
									return l.getAllRootElements();
								}),
								xl.frameworkStabilizers || (xl.frameworkStabilizers = []),
								xl.frameworkStabilizers.push(function(l) {
									var n = xl.getAllAngularTestabilities(),
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
							return null != e ? e : u ? (_o().isShadowRoot(n) ? this.findTestabilityInTree(l, _o().getHost(n), !0) : this.findTestabilityInTree(l, _o().parentElement(n), !0)) : null;
						}),
						l
					);
				})();
			function Do(l, n) {
				('undefined' != typeof COMPILED && COMPILED) || ((xl.ng = xl.ng || {})[l] = n);
			}
			var Uo = { ApplicationRef: ae, NgZone: qu };
			function Lo(l) {
				return _e(l);
			}
			var Vo = new bl('EventManagerPlugins'),
				Fo = (function() {
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
				zo = (function() {
					function l(l) {
						this._doc = l;
					}
					return (
						(l.prototype.addGlobalEventListener = function(l, n, u) {
							var e = _o().getGlobalEventTarget(this._doc, l);
							if (!e) throw new Error('Unsupported event target ' + e + ' for event ' + n);
							return this.addEventListener(e, n, u);
						}),
						l
					);
				})(),
				Ho = (function() {
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
				Bo = (function(l) {
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
								return _o().remove(l);
							});
						}),
						n
					);
				})(Ho),
				qo = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/'
				},
				Go = /%COMP%/g,
				Zo = '_nghost-%COMP%',
				Qo = '_ngcontent-%COMP%';
			function Wo(l, n, u) {
				for (var e = 0; e < n.length; e++) {
					var t = n[e];
					Array.isArray(t) ? Wo(l, t, u) : ((t = t.replace(Go, l)), u.push(t));
				}
				return u;
			}
			function Ko(l) {
				return function(n) {
					!1 === l(n) && (n.preventDefault(), (n.returnValue = !1));
				};
			}
			var Yo = (function() {
					function l(l, n) {
						(this.eventManager = l), (this.sharedStylesHost = n), (this.rendererByCompId = new Map()), (this.defaultRenderer = new Jo(l));
					}
					return (
						(l.prototype.createRenderer = function(l, n) {
							if (!l || !n) return this.defaultRenderer;
							switch (n.encapsulation) {
								case Al.Emulated:
									var u = this.rendererByCompId.get(n.id);
									return u || ((u = new ni(this.eventManager, this.sharedStylesHost, n)), this.rendererByCompId.set(n.id, u)), u.applyToHost(l), u;
								case Al.Native:
								case Al.ShadowDom:
									return new ui(this.eventManager, this.sharedStylesHost, l, n);
								default:
									if (!this.rendererByCompId.has(n.id)) {
										var e = Wo(n.id, n.styles, []);
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
				Jo = (function() {
					function l(l) {
						(this.eventManager = l), (this.data = Object.create(null));
					}
					return (
						(l.prototype.destroy = function() {}),
						(l.prototype.createElement = function(l, n) {
							return n ? document.createElementNS(qo[n], l) : document.createElement(l);
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
								var t = qo[e];
								t ? l.setAttributeNS(t, n, u) : l.setAttribute(n, u);
							} else l.setAttribute(n, u);
						}),
						(l.prototype.removeAttribute = function(l, n, u) {
							if (u) {
								var e = qo[u];
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
							e & Tn.DashCase ? l.style.setProperty(n, u, e & Tn.Important ? 'important' : '') : (l.style[n] = u);
						}),
						(l.prototype.removeStyle = function(l, n, u) {
							u & Tn.DashCase ? l.style.removeProperty(n) : (l.style[n] = '');
						}),
						(l.prototype.setProperty = function(l, n, u) {
							Xo(n, 'property'), (l[n] = u);
						}),
						(l.prototype.setValue = function(l, n) {
							l.nodeValue = n;
						}),
						(l.prototype.listen = function(l, n, u) {
							return Xo(n, 'listener'), 'string' == typeof l ? this.eventManager.addGlobalEventListener(l, n, Ko(u)) : this.eventManager.addEventListener(l, n, Ko(u));
						}),
						l
					);
				})(),
				$o = '@'.charCodeAt(0);
			function Xo(l, n) {
				if (l.charCodeAt(0) === $o) throw new Error('Found the synthetic ' + n + ' ' + l + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.');
			}
			var li,
				ni = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						t.component = e;
						var r = Wo(e.id, e.styles, []);
						return u.addStyles(r), (t.contentAttr = Qo.replace(Go, e.id)), (t.hostAttr = Zo.replace(Go, e.id)), t;
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
				})(Jo),
				ui = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						(r.sharedStylesHost = u),
							(r.hostEl = e),
							(r.component = t),
							(r.shadowRoot = t.encapsulation === Al.ShadowDom ? e.attachShadow({ mode: 'open' }) : e.createShadowRoot()),
							r.sharedStylesHost.addHost(r.shadowRoot);
						for (var s = Wo(t.id, t.styles, []), a = 0; a < s.length; a++) {
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
				})(Jo),
				ei =
					('undefined' != typeof Zone && Zone.__symbol__) ||
					function(l) {
						return '__zone_symbol__' + l;
					},
				ti = ei('addEventListener'),
				ri = ei('removeEventListener'),
				si = {},
				ai = '__zone_symbol__propagationStopped';
			'undefined' != typeof Zone && Zone[ei('BLACK_LISTED_EVENTS')] && (li = {});
			var oi = function(l) {
					return !!li && li.hasOwnProperty(l);
				},
				ii = function(l) {
					var n = si[l.type];
					if (n) {
						var u = this[n];
						if (u) {
							var e = [l];
							if (1 === u.length) return (s = u[0]).zone !== Zone.current ? s.zone.run(s.handler, this, e) : s.handler.apply(this, e);
							for (var t = u.slice(), r = 0; r < t.length && !0 !== l[ai]; r++) {
								var s;
								(s = t[r]).zone !== Zone.current ? s.zone.run(s.handler, this, e) : s.handler.apply(this, e);
							}
						}
					}
				},
				ci = (function(l) {
					function n(n, u, e) {
						var t = l.call(this, n) || this;
						return (
							(t.ngZone = u),
							(e &&
								(function(l) {
									return l === ka;
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
									this && (this[ai] = !0), l && l.apply(this, arguments);
								};
							}
						}),
						(n.prototype.supports = function(l) {
							return !0;
						}),
						(n.prototype.addEventListener = function(l, n, u) {
							var e = this,
								t = u;
							if (!l[ti] || (qu.isInAngularZone() && !oi(n))) l.addEventListener(n, t, !1);
							else {
								var r = si[n];
								r || (r = si[n] = ei('ANGULAR' + n + 'FALSE'));
								var s = l[r],
									a = s && s.length > 0;
								s || (s = l[r] = []);
								var o = oi(n) ? Zone.root : Zone.current;
								if (0 === s.length) s.push({ zone: o, handler: t });
								else {
									for (var i = !1, c = 0; c < s.length; c++)
										if (s[c].handler === t) {
											i = !0;
											break;
										}
									i || s.push({ zone: o, handler: t });
								}
								a || l[ti](n, ii, !1);
							}
							return function() {
								return e.removeEventListener(l, n, t);
							};
						}),
						(n.prototype.removeEventListener = function(l, n, u) {
							var e = l[ri];
							if (!e) return l.removeEventListener.apply(l, [n, u, !1]);
							var t = si[n],
								r = t && l[t];
							if (!r) return l.removeEventListener.apply(l, [n, u, !1]);
							for (var s = !1, a = 0; a < r.length; a++)
								if (r[a].handler === u) {
									(s = !0), r.splice(a, 1);
									break;
								}
							s ? 0 === r.length && e.apply(l, [n, ii, !1]) : l.removeEventListener.apply(l, [n, u, !1]);
						}),
						n
					);
				})(zo),
				pi = {
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
				hi = new bl('HammerGestureConfig'),
				di = new bl('HammerLoader'),
				fi = (function() {
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
				gi = (function(l) {
					function n(n, u, e, t) {
						var r = l.call(this, n) || this;
						return (r._config = u), (r.console = e), (r.loader = t), r;
					}
					return (
						t(n, l),
						(n.prototype.supports = function(l) {
							return !(
								(!pi.hasOwnProperty(l.toLowerCase()) && !this.isCustomEvent(l)) ||
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
				})(zo),
				mi = ['alt', 'control', 'meta', 'shift'],
				bi = {
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
				yi = (function(l) {
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
								return _o().onAndCancel(l, t.domEventName, r);
							});
						}),
						(n.parseEventName = function(l) {
							var n = l.toLowerCase().split('.'),
								e = n.shift();
							if (0 === n.length || ('keydown' !== e && 'keyup' !== e)) return null;
							var t = u._normalizeKey(n.pop()),
								r = '';
							if (
								(mi.forEach(function(l) {
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
								u = _o().getEventKey(l);
							return (
								' ' === (u = u.toLowerCase()) ? (u = 'space') : '.' === u && (u = 'dot'),
								mi.forEach(function(e) {
									e != u && (0, bi[e])(l) && (n += e + '.');
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
				})(zo),
				vi = (function() {
					return function() {};
				})(),
				wi = (function(l) {
					function n(n) {
						var u = l.call(this) || this;
						return (u._doc = n), u;
					}
					return (
						t(n, l),
						(n.prototype.sanitize = function(l, n) {
							if (null == n) return null;
							switch (l) {
								case An.NONE:
									return n;
								case An.HTML:
									return n instanceof _i
										? n.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(n, 'HTML'),
										  (function(l, n) {
												var u = null;
												try {
													Zn = Zn || new Fn(l);
													var e = n ? String(n) : '';
													u = Zn.getInertBodyElement(e);
													var t = 5,
														r = e;
													do {
														if (0 === t) throw new Error('Failed to sanitize html because the input is unstable');
														t--, (e = r), (r = u.innerHTML), (u = Zn.getInertBodyElement(e));
													} while (e !== r);
													var s = new nu(),
														a = s.sanitizeChildren(ru(u) || u);
													return Vn() && s.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), a;
												} finally {
													if (u) for (var o = ru(u) || u; o.firstChild; ) o.removeChild(o.firstChild);
												}
										  })(this._doc, String(n)));
								case An.STYLE:
									return n instanceof xi
										? n.changingThisBreaksApplicationSecurity
										: (this.checkNotSafeValue(n, 'Style'),
										  (function(l) {
												if (!(l = String(l).trim())) return '';
												var n = l.match(cu);
												return (n && Bn(n[1]) === n[1]) ||
													(l.match(iu) &&
														(function(l) {
															for (var n = !0, u = !0, e = 0; e < l.length; e++) {
																var t = l.charAt(e);
																"'" === t && u ? (n = !n) : '"' === t && n && (u = !u);
															}
															return n && u;
														})(l))
													? l
													: (Vn() && console.warn('WARNING: sanitizing unsafe style value ' + l + ' (see http://g.co/ng/security#xss).'), 'unsafe');
										  })(n));
								case An.SCRIPT:
									if (n instanceof ki) return n.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(n, 'Script'), new Error('unsafe value used in a script context'));
								case An.URL:
									return n instanceof Si || n instanceof Ci ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, 'URL'), Bn(String(n)));
								case An.RESOURCE_URL:
									if (n instanceof Si) return n.changingThisBreaksApplicationSecurity;
									throw (this.checkNotSafeValue(n, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
								default:
									throw new Error('Unexpected SecurityContext ' + l + ' (see http://g.co/ng/security#xss)');
							}
						}),
						(n.prototype.checkNotSafeValue = function(l, n) {
							if (l instanceof ji) throw new Error('Required a safe ' + n + ', got a ' + l.getTypeName() + ' (see http://g.co/ng/security#xss)');
						}),
						(n.prototype.bypassSecurityTrustHtml = function(l) {
							return new _i(l);
						}),
						(n.prototype.bypassSecurityTrustStyle = function(l) {
							return new xi(l);
						}),
						(n.prototype.bypassSecurityTrustScript = function(l) {
							return new ki(l);
						}),
						(n.prototype.bypassSecurityTrustUrl = function(l) {
							return new Ci(l);
						}),
						(n.prototype.bypassSecurityTrustResourceUrl = function(l) {
							return new Si(l);
						}),
						n
					);
				})(vi),
				ji = (function() {
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
				_i = (function(l) {
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
				})(ji),
				xi = (function(l) {
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
				})(ji),
				ki = (function(l) {
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
				})(ji),
				Ci = (function(l) {
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
				})(ji),
				Si = (function(l) {
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
				})(ji),
				Ei = ee(Ve, 'browser', [
					{ provide: Eu, useValue: 'browser' },
					{
						provide: Su,
						useValue: function() {
							Io.makeCurrent(), No.init();
						},
						multi: !0
					},
					{ provide: ea, useClass: Mo, deps: [Oo] },
					{
						provide: Oo,
						useFactory: function() {
							return document;
						},
						deps: []
					}
				]);
			function Ii() {
				return new yu();
			}
			var Pi = (function() {
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
						return { ngModule: n, providers: [{ provide: xu, useValue: l.appId }, { provide: Ro, useExisting: xu }, Ao] };
					}),
					l
				);
			})();
			'undefined' != typeof window && window;
			var Oi = (function() {
					return function(l, n) {
						(this.id = l), (this.url = n);
					};
				})(),
				Ti = (function(l) {
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
				})(Oi),
				Mi = (function(l) {
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
				})(Oi),
				Ri = (function(l) {
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
				})(Oi),
				Ai = (function(l) {
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
				})(Oi),
				Ni = (function(l) {
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
				})(Oi),
				Di = (function(l) {
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
				})(Oi),
				Ui = (function(l) {
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
				})(Oi),
				Li = (function(l) {
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
				})(Oi),
				Vi = (function(l) {
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
				})(Oi),
				Fi = (function() {
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
				zi = (function() {
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
				Hi = (function() {
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
				Bi = (function() {
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
				qi = (function() {
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
				Gi = (function() {
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
				Zi = (function() {
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
				Qi = (function() {
					return function() {};
				})(),
				Wi = 'primary',
				Ki = (function() {
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
			function Yi(l) {
				return new Ki(l);
			}
			var Ji = 'ngNavigationCancelingError';
			function $i(l) {
				var n = Error('NavigationCancelingError: ' + l);
				return (n[Ji] = !0), n;
			}
			function Xi(l, n, u) {
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
			var lc = (function() {
				return function(l, n) {
					(this.routes = l), (this.module = n);
				};
			})();
			function nc(l, n) {
				void 0 === n && (n = '');
				for (var u = 0; u < l.length; u++) {
					var e = l[u];
					uc(e, ec(n, e));
				}
			}
			function uc(l, n) {
				if (!l)
					throw new Error(
						"\n      Invalid configuration of route '" +
							n +
							"': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
					);
				if (Array.isArray(l)) throw new Error("Invalid configuration of route '" + n + "': Array cannot be specified");
				if (!l.component && !l.children && !l.loadChildren && l.outlet && l.outlet !== Wi)
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
				l.children && nc(l.children, n);
			}
			function ec(l, n) {
				return n ? (l || n.path ? (l && !n.path ? l + '/' : !l && n.path ? n.path : l + '/' + n.path) : '') : l;
			}
			function tc(l) {
				var n = l.children && l.children.map(tc),
					u = n ? r({}, l, { children: n }) : r({}, l);
				return !u.component && (n || u.loadChildren) && u.outlet && u.outlet !== Wi && (u.component = Qi), u;
			}
			function rc(l, n) {
				var u,
					e = Object.keys(l),
					t = Object.keys(n);
				if (e.length != t.length) return !1;
				for (var r = 0; r < e.length; r++) if (l[(u = e[r])] !== n[u]) return !1;
				return !0;
			}
			function sc(l) {
				return Array.prototype.concat.apply([], l);
			}
			function ac(l) {
				return l.length > 0 ? l[l.length - 1] : null;
			}
			function oc(l, n) {
				for (var u in l) l.hasOwnProperty(u) && n(l[u], u);
			}
			function ic(l) {
				return wu(l) ? l : vu(l) ? ll(Promise.resolve(l)) : Oa(l);
			}
			function cc(l, n, u) {
				return u
					? (function(l, n) {
							return rc(l, n);
					  })(l.queryParams, n.queryParams) &&
							(function l(n, u) {
								if (!fc(n.segments, u.segments)) return !1;
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
									if (u.segments.length > t.length) return !!fc((s = u.segments.slice(0, t.length)), t) && !e.hasChildren();
									if (u.segments.length === t.length) {
										if (!fc(u.segments, t)) return !1;
										for (var r in e.children) {
											if (!u.children[r]) return !1;
											if (!l(u.children[r], e.children[r])) return !1;
										}
										return !0;
									}
									var s = t.slice(0, u.segments.length),
										a = t.slice(u.segments.length);
									return !!fc(u.segments, s) && !!u.children[Wi] && n(u.children[Wi], e, a);
								})(n, u, u.segments);
							})(l.root, n.root);
			}
			var pc = (function() {
					function l(l, n, u) {
						(this.root = l), (this.queryParams = n), (this.fragment = u);
					}
					return (
						Object.defineProperty(l.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Yi(this.queryParams)), this._queryParamMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return yc.serialize(this);
						}),
						l
					);
				})(),
				hc = (function() {
					function l(l, n) {
						var u = this;
						(this.segments = l),
							(this.children = n),
							(this.parent = null),
							oc(n, function(l, n) {
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
							return vc(this);
						}),
						l
					);
				})(),
				dc = (function() {
					function l(l, n) {
						(this.path = l), (this.parameters = n);
					}
					return (
						Object.defineProperty(l.prototype, 'parameterMap', {
							get: function() {
								return this._parameterMap || (this._parameterMap = Yi(this.parameters)), this._parameterMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						(l.prototype.toString = function() {
							return Cc(this);
						}),
						l
					);
				})();
			function fc(l, n) {
				return (
					l.length === n.length &&
					l.every(function(l, u) {
						return l.path === n[u].path;
					})
				);
			}
			function gc(l, n) {
				var u = [];
				return (
					oc(l.children, function(l, e) {
						e === Wi && (u = u.concat(n(l, e)));
					}),
					oc(l.children, function(l, e) {
						e !== Wi && (u = u.concat(n(l, e)));
					}),
					u
				);
			}
			var mc = (function() {
					return function() {};
				})(),
				bc = (function() {
					function l() {}
					return (
						(l.prototype.parse = function(l) {
							var n = new Oc(l);
							return new pc(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment());
						}),
						(l.prototype.serialize = function(l) {
							var n, u;
							return (
								'/' +
								(function l(n, u) {
									if (!n.hasChildren()) return vc(n);
									if (u) {
										var e = n.children[Wi] ? l(n.children[Wi], !1) : '',
											t = [];
										return (
											oc(n.children, function(n, u) {
												u !== Wi && t.push(u + ':' + l(n, !1));
											}),
											t.length > 0 ? e + '(' + t.join('//') + ')' : e
										);
									}
									var r = gc(n, function(u, e) {
										return e === Wi ? [l(n.children[Wi], !1)] : [e + ':' + l(u, !1)];
									});
									return vc(n) + '/(' + r.join('//') + ')';
								})(l.root, !0) +
								((n = l.queryParams),
								(u = Object.keys(n).map(function(l) {
									var u = n[l];
									return Array.isArray(u)
										? u
												.map(function(n) {
													return jc(l) + '=' + jc(n);
												})
												.join('&')
										: jc(l) + '=' + jc(u);
								})).length
									? '?' + u.join('&')
									: '') +
								('string' == typeof l.fragment ? '#' + encodeURI(l.fragment) : '')
							);
						}),
						l
					);
				})(),
				yc = new bc();
			function vc(l) {
				return l.segments
					.map(function(l) {
						return Cc(l);
					})
					.join('/');
			}
			function wc(l) {
				return encodeURIComponent(l)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function jc(l) {
				return wc(l).replace(/%3B/gi, ';');
			}
			function _c(l) {
				return wc(l)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function xc(l) {
				return decodeURIComponent(l);
			}
			function kc(l) {
				return xc(l.replace(/\+/g, '%20'));
			}
			function Cc(l) {
				return (
					'' +
					_c(l.path) +
					((n = l.parameters),
					Object.keys(n)
						.map(function(l) {
							return ';' + _c(l) + '=' + _c(n[l]);
						})
						.join(''))
				);
				var n;
			}
			var Sc = /^[^\/()?;=#]+/;
			function Ec(l) {
				var n = l.match(Sc);
				return n ? n[0] : '';
			}
			var Ic = /^[^=?&#]+/,
				Pc = /^[^?&#]+/,
				Oc = (function() {
					function l(l) {
						(this.url = l), (this.remaining = l);
					}
					return (
						(l.prototype.parseRootSegment = function() {
							return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new hc([], {}) : new hc([], this.parseChildren());
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
							return this.peekStartsWith('(') && (u = this.parseParens(!1)), (l.length > 0 || Object.keys(n).length > 0) && (u[Wi] = new hc(l, n)), u;
						}),
						(l.prototype.parseSegment = function() {
							var l = Ec(this.remaining);
							if ('' === l && this.peekStartsWith(';')) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
							return this.capture(l), new dc(xc(l), this.parseMatrixParams());
						}),
						(l.prototype.parseMatrixParams = function() {
							for (var l = {}; this.consumeOptional(';'); ) this.parseParam(l);
							return l;
						}),
						(l.prototype.parseParam = function(l) {
							var n = Ec(this.remaining);
							if (n) {
								this.capture(n);
								var u = '';
								if (this.consumeOptional('=')) {
									var e = Ec(this.remaining);
									e && this.capture((u = e));
								}
								l[xc(n)] = xc(u);
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
										var n = l.match(Pc);
										return n ? n[0] : '';
									})(this.remaining);
									t && this.capture((e = t));
								}
								var r = kc(u),
									s = kc(e);
								if (l.hasOwnProperty(r)) {
									var a = l[r];
									Array.isArray(a) || (l[r] = a = [a]), a.push(s);
								} else l[r] = s;
							}
						}),
						(l.prototype.parseParens = function(l) {
							var n = {};
							for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
								var u = Ec(this.remaining),
									e = this.remaining[u.length];
								if ('/' !== e && ')' !== e && ';' !== e) throw new Error("Cannot parse url '" + this.url + "'");
								var t = void 0;
								u.indexOf(':') > -1 ? ((t = u.substr(0, u.indexOf(':'))), this.capture(t), this.capture(':')) : l && (t = Wi);
								var r = this.parseChildren();
								(n[t] = 1 === Object.keys(r).length ? r[Wi] : new hc([], r)), this.consumeOptional('//');
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
				Tc = (function() {
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
							var n = Mc(l, this._root);
							return n
								? n.children.map(function(l) {
										return l.value;
								  })
								: [];
						}),
						(l.prototype.firstChild = function(l) {
							var n = Mc(l, this._root);
							return n && n.children.length > 0 ? n.children[0].value : null;
						}),
						(l.prototype.siblings = function(l) {
							var n = Rc(l, this._root);
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
							return Rc(l, this._root).map(function(l) {
								return l.value;
							});
						}),
						l
					);
				})();
			function Mc(l, n) {
				var u, e;
				if (l === n.value) return n;
				try {
					for (var t = o(n.children), r = t.next(); !r.done; r = t.next()) {
						var s = Mc(l, r.value);
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
			function Rc(l, n) {
				var u, e;
				if (l === n.value) return [n];
				try {
					for (var t = o(n.children), r = t.next(); !r.done; r = t.next()) {
						var s = Rc(l, r.value);
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
			var Ac = (function() {
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
			function Nc(l) {
				var n = {};
				return (
					l &&
						l.children.forEach(function(l) {
							return (n[l.value.outlet] = l);
						}),
					n
				);
			}
			var Dc = (function(l) {
				function n(n, u) {
					var e = l.call(this, n) || this;
					return (e.snapshot = u), Hc(e, n), e;
				}
				return (
					t(n, l),
					(n.prototype.toString = function() {
						return this.snapshot.toString();
					}),
					n
				);
			})(Tc);
			function Uc(l, n) {
				var u = (function(l, n) {
						var u = new Fc([], {}, {}, '', {}, Wi, n, null, l.root, -1, {});
						return new zc('', new Ac(u, []));
					})(l, n),
					e = new Ta([new dc('', {})]),
					t = new Ta({}),
					r = new Ta({}),
					s = new Ta({}),
					a = new Ta(''),
					o = new Lc(e, t, s, a, r, Wi, n, u.root);
				return (o.snapshot = u.root), new Dc(new Ac(o, []), u);
			}
			var Lc = (function() {
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
										Y(function(l) {
											return Yi(l);
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
										Y(function(l) {
											return Yi(l);
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
			function Vc(l, n) {
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
			var Fc = (function() {
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
								return this._paramMap || (this._paramMap = Yi(this.params)), this._paramMap;
							},
							enumerable: !0,
							configurable: !0
						}),
						Object.defineProperty(l.prototype, 'queryParamMap', {
							get: function() {
								return this._queryParamMap || (this._queryParamMap = Yi(this.queryParams)), this._queryParamMap;
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
				zc = (function(l) {
					function n(n, u) {
						var e = l.call(this, u) || this;
						return (e.url = n), Hc(e, u), e;
					}
					return (
						t(n, l),
						(n.prototype.toString = function() {
							return Bc(this._root);
						}),
						n
					);
				})(Tc);
			function Hc(l, n) {
				(n.value._routerState = l),
					n.children.forEach(function(n) {
						return Hc(l, n);
					});
			}
			function Bc(l) {
				var n = l.children.length > 0 ? ' { ' + l.children.map(Bc).join(', ') + ' } ' : '';
				return '' + l.value + n;
			}
			function qc(l) {
				if (l.snapshot) {
					var n = l.snapshot,
						u = l._futureSnapshot;
					(l.snapshot = u),
						rc(n.queryParams, u.queryParams) || l.queryParams.next(u.queryParams),
						n.fragment !== u.fragment && l.fragment.next(u.fragment),
						rc(n.params, u.params) || l.params.next(u.params),
						(function(l, n) {
							if (l.length !== n.length) return !1;
							for (var u = 0; u < l.length; ++u) if (!rc(l[u], n[u])) return !1;
							return !0;
						})(n.url, u.url) || l.url.next(u.url),
						rc(n.data, u.data) || l.data.next(u.data);
				} else (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
			}
			function Gc(l, n) {
				var u, e;
				return (
					rc(l.params, n.params) &&
					fc((u = l.url), (e = n.url)) &&
					u.every(function(l, n) {
						return rc(l.parameters, e[n].parameters);
					}) &&
					!(!l.parent != !n.parent) &&
					(!l.parent || Gc(l.parent, n.parent))
				);
			}
			function Zc(l) {
				return 'object' == typeof l && null != l && !l.outlets && !l.segmentPath;
			}
			function Qc(l, n, u, e, t) {
				var r = {};
				return (
					e &&
						oc(e, function(l, n) {
							r[n] = Array.isArray(l)
								? l.map(function(l) {
										return '' + l;
								  })
								: '' + l;
						}),
					new pc(
						u.root === l
							? n
							: (function l(n, u, e) {
									var t = {};
									return (
										oc(n.children, function(n, r) {
											t[r] = n === u ? e : l(n, u, e);
										}),
										new hc(n.segments, t)
									);
							  })(u.root, l, n),
						r,
						t
					)
				);
			}
			var Wc = (function() {
					function l(l, n, u) {
						if (((this.isAbsolute = l), (this.numberOfDoubleDots = n), (this.commands = u), l && u.length > 0 && Zc(u[0]))) throw new Error('Root segment cannot have matrix parameters');
						var e = u.find(function(l) {
							return 'object' == typeof l && null != l && l.outlets;
						});
						if (e && e !== ac(u)) throw new Error('{outlets:{}} has to be the last command');
					}
					return (
						(l.prototype.toRoot = function() {
							return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
						}),
						l
					);
				})(),
				Kc = (function() {
					return function(l, n, u) {
						(this.segmentGroup = l), (this.processChildren = n), (this.index = u);
					};
				})();
			function Yc(l) {
				return 'object' == typeof l && null != l && l.outlets ? l.outlets[Wi] : '' + l;
			}
			function Jc(l, n, u) {
				if ((l || (l = new hc([], {})), 0 === l.segments.length && l.hasChildren())) return $c(l, n, u);
				var e = (function(l, n, u) {
						for (var e = 0, t = n, r = { match: !1, pathIndex: 0, commandIndex: 0 }; t < l.segments.length; ) {
							if (e >= u.length) return r;
							var s = l.segments[t],
								a = Yc(u[e]),
								o = e < u.length - 1 ? u[e + 1] : null;
							if (t > 0 && void 0 === a) break;
							if (a && o && 'object' == typeof o && void 0 === o.outlets) {
								if (!up(a, o, s)) return r;
								e += 2;
							} else {
								if (!up(a, {}, s)) return r;
								e++;
							}
							t++;
						}
						return { match: !0, pathIndex: t, commandIndex: e };
					})(l, n, u),
					t = u.slice(e.commandIndex);
				if (e.match && e.pathIndex < l.segments.length) {
					var r = new hc(l.segments.slice(0, e.pathIndex), {});
					return (r.children[Wi] = new hc(l.segments.slice(e.pathIndex), l.children)), $c(r, 0, t);
				}
				return e.match && 0 === t.length ? new hc(l.segments, {}) : e.match && !l.hasChildren() ? Xc(l, n, u) : e.match ? $c(l, 0, t) : Xc(l, n, u);
			}
			function $c(l, n, u) {
				if (0 === u.length) return new hc(l.segments, {});
				var e = (function(l) {
						var n, u;
						return 'object' != typeof l[0] ? (((n = {})[Wi] = l), n) : void 0 === l[0].outlets ? (((u = {})[Wi] = l), u) : l[0].outlets;
					})(u),
					t = {};
				return (
					oc(e, function(u, e) {
						null !== u && (t[e] = Jc(l.children[e], n, u));
					}),
					oc(l.children, function(l, n) {
						void 0 === e[n] && (t[n] = l);
					}),
					new hc(l.segments, t)
				);
			}
			function Xc(l, n, u) {
				for (var e = l.segments.slice(0, n), t = 0; t < u.length; ) {
					if ('object' == typeof u[t] && void 0 !== u[t].outlets) {
						var r = lp(u[t].outlets);
						return new hc(e, r);
					}
					if (0 === t && Zc(u[0])) e.push(new dc(l.segments[n].path, u[0])), t++;
					else {
						var s = Yc(u[t]),
							a = t < u.length - 1 ? u[t + 1] : null;
						s && a && Zc(a) ? (e.push(new dc(s, np(a))), (t += 2)) : (e.push(new dc(s, {})), t++);
					}
				}
				return new hc(e, {});
			}
			function lp(l) {
				var n = {};
				return (
					oc(l, function(l, u) {
						null !== l && (n[u] = Xc(new hc([], {}), 0, l));
					}),
					n
				);
			}
			function np(l) {
				var n = {};
				return (
					oc(l, function(l, u) {
						return (n[u] = '' + l);
					}),
					n
				);
			}
			function up(l, n, u) {
				return l == u.path && rc(n, u.parameters);
			}
			var ep = (function() {
				function l(l, n, u, e) {
					(this.routeReuseStrategy = l), (this.futureState = n), (this.currState = u), (this.forwardEvent = e);
				}
				return (
					(l.prototype.activate = function(l) {
						var n = this.futureState._root,
							u = this.currState ? this.currState._root : null;
						this.deactivateChildRoutes(n, u, l), qc(this.futureState.root), this.activateChildRoutes(n, u, l);
					}),
					(l.prototype.deactivateChildRoutes = function(l, n, u) {
						var e = this,
							t = Nc(n);
						l.children.forEach(function(l) {
							var n = l.value.outlet;
							e.deactivateRoutes(l, t[n], u), delete t[n];
						}),
							oc(t, function(l, n) {
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
							var t = Nc(l),
								r = l.value.component ? e.children : n;
							oc(t, function(l, n) {
								return u.deactivateRouteAndItsChildren(l, r);
							}),
								e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated());
						}
					}),
					(l.prototype.activateChildRoutes = function(l, n, u) {
						var e = this,
							t = Nc(n);
						l.children.forEach(function(l) {
							e.activateRoutes(l, t[l.value.outlet], u), e.forwardEvent(new Gi(l.value.snapshot));
						}),
							l.children.length && this.forwardEvent(new Bi(l.value.snapshot));
					}),
					(l.prototype.activateRoutes = function(l, n, u) {
						var e = l.value,
							t = n ? n.value : null;
						if ((qc(e), e === t))
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
									tp(s.route);
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
			function tp(l) {
				qc(l.value), l.children.forEach(tp);
			}
			function rp(l) {
				return 'function' == typeof l;
			}
			function sp(l) {
				return l instanceof pc;
			}
			var ap = (function() {
					return function(l) {
						this.segmentGroup = l || null;
					};
				})(),
				op = (function() {
					return function(l) {
						this.urlTree = l;
					};
				})();
			function ip(l) {
				return new P(function(n) {
					return n.error(new ap(l));
				});
			}
			function cp(l) {
				return new P(function(n) {
					return n.error(new op(l));
				});
			}
			function pp(l) {
				return new P(function(n) {
					return n.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + l + "'"));
				});
			}
			var hp = (function() {
				function l(l, n, u, e, t) {
					(this.configLoader = n), (this.urlSerializer = u), (this.urlTree = e), (this.config = t), (this.allowRedirects = !0), (this.ngModule = l.get(Cn));
				}
				return (
					(l.prototype.apply = function() {
						var l = this;
						return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Wi)
							.pipe(
								Y(function(n) {
									return l.createUrlTree(n, l.urlTree.queryParams, l.urlTree.fragment);
								})
							)
							.pipe(
								uo(function(n) {
									if (n instanceof op) return (l.allowRedirects = !1), l.match(n.urlTree);
									if (n instanceof ap) throw l.noMatchError(n);
									throw n;
								})
							);
					}),
					(l.prototype.match = function(l) {
						var n = this;
						return this.expandSegmentGroup(this.ngModule, this.config, l.root, Wi)
							.pipe(
								Y(function(u) {
									return n.createUrlTree(u, l.queryParams, l.fragment);
								})
							)
							.pipe(
								uo(function(l) {
									if (l instanceof ap) throw n.noMatchError(l);
									throw l;
								})
							);
					}),
					(l.prototype.noMatchError = function(l) {
						return new Error("Cannot match any routes. URL Segment: '" + l.segmentGroup + "'");
					}),
					(l.prototype.createUrlTree = function(l, n, u) {
						var e,
							t = l.segments.length > 0 ? new hc([], (((e = {})[Wi] = l), e)) : l;
						return new pc(t, n, u);
					}),
					(l.prototype.expandSegmentGroup = function(l, n, u, e) {
						return 0 === u.segments.length && u.hasChildren()
							? this.expandChildren(l, n, u).pipe(
									Y(function(l) {
										return new hc([], l);
									})
							  )
							: this.expandSegment(l, u, n, u.segments, e, !0);
					}),
					(l.prototype.expandChildren = function(l, n, u) {
						var e = this;
						return (function(u, t) {
							if (0 === Object.keys(u).length) return Oa({});
							var r = [],
								s = [],
								a = {};
							return (
								oc(u, function(u, t) {
									var o,
										i,
										c = ((o = t), (i = u), e.expandSegmentGroup(l, n, i, o)).pipe(
											Y(function(l) {
												return (a[t] = l);
											})
										);
									t === Wi ? r.push(c) : s.push(c);
								}),
								Oa.apply(null, r.concat(s)).pipe(
									La(),
									no(),
									Y(function() {
										return a;
									})
								)
							);
						})(u.children);
					}),
					(l.prototype.expandSegment = function(l, n, u, e, t, r) {
						var s = this;
						return Oa.apply(void 0, c(u)).pipe(
							Y(function(a) {
								return s.expandSegmentAgainstRoute(l, n, u, a, e, t, r).pipe(
									uo(function(l) {
										if (l instanceof ap) return Oa(null);
										throw l;
									})
								);
							}),
							La(),
							oo(function(l) {
								return !!l;
							}),
							uo(function(l, u) {
								if (l instanceof Ra || 'EmptyError' === l.name) {
									if (s.noLeftoversInUrl(n, e, t)) return Oa(new hc([], {}));
									throw new ap(n);
								}
								throw l;
							})
						);
					}),
					(l.prototype.noLeftoversInUrl = function(l, n, u) {
						return 0 === n.length && !l.children[u];
					}),
					(l.prototype.expandSegmentAgainstRoute = function(l, n, u, e, t, r, s) {
						return mp(e) !== r
							? ip(n)
							: void 0 === e.redirectTo
							? this.matchSegmentAgainstRoute(l, n, e, t)
							: s && this.allowRedirects
							? this.expandSegmentAgainstRouteUsingRedirect(l, n, u, e, t, r)
							: ip(n);
					}),
					(l.prototype.expandSegmentAgainstRouteUsingRedirect = function(l, n, u, e, t, r) {
						return '**' === e.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, u, e, r) : this.expandRegularSegmentAgainstRouteUsingRedirect(l, n, u, e, t, r);
					}),
					(l.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(l, n, u, e) {
						var t = this,
							r = this.applyRedirectCommands([], u.redirectTo, {});
						return u.redirectTo.startsWith('/')
							? cp(r)
							: this.lineralizeSegments(u, r).pipe(
									nl(function(u) {
										var r = new hc(u, {});
										return t.expandSegment(l, r, n, u, e, !1);
									})
							  );
					}),
					(l.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(l, n, u, e, t, r) {
						var s = this,
							a = dp(n, e, t),
							o = a.consumedSegments,
							i = a.lastChild,
							c = a.positionalParamSegments;
						if (!a.matched) return ip(n);
						var p = this.applyRedirectCommands(o, e.redirectTo, c);
						return e.redirectTo.startsWith('/')
							? cp(p)
							: this.lineralizeSegments(e, p).pipe(
									nl(function(e) {
										return s.expandSegment(l, n, u, e.concat(t.slice(i)), r, !1);
									})
							  );
					}),
					(l.prototype.matchSegmentAgainstRoute = function(l, n, u, e) {
						var t = this;
						if ('**' === u.path)
							return u.loadChildren
								? this.configLoader.load(l.injector, u).pipe(
										Y(function(l) {
											return (u._loadedConfig = l), new hc(e, {});
										})
								  )
								: Oa(new hc(e, {}));
						var s = dp(n, u, e),
							a = s.consumedSegments,
							i = s.lastChild;
						if (!s.matched) return ip(n);
						var c = e.slice(i);
						return this.getChildConfig(l, u, e).pipe(
							nl(function(l) {
								var u = l.module,
									e = l.routes,
									s = (function(l, n, u, e) {
										return u.length > 0 &&
											(function(l, n, u) {
												return e.some(function(u) {
													return gp(l, n, u) && mp(u) !== Wi;
												});
											})(l, u)
											? {
													segmentGroup: fp(
														new hc(
															n,
															(function(l, n) {
																var u,
																	e,
																	t = {};
																t[Wi] = n;
																try {
																	for (var r = o(l), s = r.next(); !s.done; s = r.next()) {
																		var a = s.value;
																		'' === a.path && mp(a) !== Wi && (t[mp(a)] = new hc([], {}));
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
															})(e, new hc(u, l.children))
														)
													),
													slicedSegments: []
											  }
											: 0 === u.length &&
											  (function(l, n, u) {
													return e.some(function(u) {
														return gp(l, n, u);
													});
											  })(l, u)
											? {
													segmentGroup: fp(
														new hc(
															l.segments,
															(function(l, n, u, e) {
																var t,
																	s,
																	a = {};
																try {
																	for (var i = o(u), c = i.next(); !c.done; c = i.next()) {
																		var p = c.value;
																		gp(l, n, p) && !e[mp(p)] && (a[mp(p)] = new hc([], {}));
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
											Y(function(l) {
												return new hc(a, l);
											})
									  )
									: 0 === e.length && 0 === p.length
									? Oa(new hc(a, {}))
									: t.expandSegment(u, i, e, p, Wi, !0).pipe(
											Y(function(l) {
												return new hc(a.concat(l.segments), l.children);
											})
									  );
							})
						);
					}),
					(l.prototype.getChildConfig = function(l, n, u) {
						var e = this;
						return n.children
							? Oa(new lc(n.children, l))
							: n.loadChildren
							? void 0 !== n._loadedConfig
								? Oa(n._loadedConfig)
								: (function(l, n, u) {
										var e,
											t = n.canLoad;
										return t && 0 !== t.length
											? ll(t)
													.pipe(
														Y(function(e) {
															var t,
																r = l.get(e);
															if (
																(function(l) {
																	return l && rp(l.canLoad);
																})(r)
															)
																t = r.canLoad(n, u);
															else {
																if (!rp(r)) throw new Error('Invalid CanLoad guard');
																t = r(n, u);
															}
															return ic(t);
														})
													)
													.pipe(
														La(),
														((e = function(l) {
															return !0 === l;
														}),
														function(l) {
															return l.lift(new io(e, void 0, l));
														})
													)
											: Oa(!0);
								  })(l.injector, n, u).pipe(
										nl(function(u) {
											return u
												? e.configLoader.load(l.injector, n).pipe(
														Y(function(l) {
															return (n._loadedConfig = l), l;
														})
												  )
												: (function(l) {
														return new P(function(n) {
															return n.error($i('Cannot load children because the guard of the route "path: \'' + l.path + '\'" returned false'));
														});
												  })(n);
										})
								  )
							: Oa(new lc([], l));
					}),
					(l.prototype.lineralizeSegments = function(l, n) {
						for (var u = [], e = n.root; ; ) {
							if (((u = u.concat(e.segments)), 0 === e.numberOfChildren)) return Oa(u);
							if (e.numberOfChildren > 1 || !e.children[Wi]) return pp(l.redirectTo);
							e = e.children[Wi];
						}
					}),
					(l.prototype.applyRedirectCommands = function(l, n, u) {
						return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), l, u);
					}),
					(l.prototype.applyRedirectCreatreUrlTree = function(l, n, u, e) {
						var t = this.createSegmentGroup(l, n.root, u, e);
						return new pc(t, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment);
					}),
					(l.prototype.createQueryParams = function(l, n) {
						var u = {};
						return (
							oc(l, function(l, e) {
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
							oc(n.children, function(n, r) {
								s[r] = t.createSegmentGroup(l, n, u, e);
							}),
							new hc(r, s)
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
			function dp(l, n, u) {
				if ('' === n.path)
					return 'full' === n.pathMatch && (l.hasChildren() || u.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				var e = (n.matcher || Xi)(u, l, n);
				return e
					? { matched: !0, consumedSegments: e.consumed, lastChild: e.consumed.length, positionalParamSegments: e.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function fp(l) {
				if (1 === l.numberOfChildren && l.children[Wi]) {
					var n = l.children[Wi];
					return new hc(l.segments.concat(n.segments), n.children);
				}
				return l;
			}
			function gp(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 !== u.redirectTo;
			}
			function mp(l) {
				return l.outlet || Wi;
			}
			var bp = (function() {
					return function(l) {
						(this.path = l), (this.route = this.path[this.path.length - 1]);
					};
				})(),
				yp = (function() {
					return function(l, n) {
						(this.component = l), (this.route = n);
					};
				})();
			function vp(l, n, u) {
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
			function wp(l, n, u, e, t) {
				void 0 === t && (t = { canDeactivateChecks: [], canActivateChecks: [] });
				var r = Nc(n);
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
											return !fc(l.url, n.url);
										case 'pathParamsOrQueryParamsChange':
											return !fc(l.url, n.url) || !rc(l.queryParams, n.queryParams);
										case 'always':
											return !0;
										case 'paramsOrQueryParamsChange':
											return !Gc(l, n) || !rc(l.queryParams, n.queryParams);
										case 'paramsChange':
										default:
											return !Gc(l, n);
									}
								})(s, r, r.routeConfig.runGuardsAndResolvers);
								o ? t.canActivateChecks.push(new bp(e)) : ((r.data = s.data), (r._resolvedData = s._resolvedData)),
									wp(l, n, r.component ? (a ? a.children : null) : u, e, t),
									o && t.canDeactivateChecks.push(new yp((a && a.outlet && a.outlet.component) || null, s));
							} else s && jp(n, a, t), t.canActivateChecks.push(new bp(e)), wp(l, null, r.component ? (a ? a.children : null) : u, e, t);
						})(l, r[l.value.outlet], u, e.concat([l.value]), t),
							delete r[l.value.outlet];
					}),
					oc(r, function(l, n) {
						return jp(l, u.getContext(n), t);
					}),
					t
				);
			}
			function jp(l, n, u) {
				var e = Nc(l),
					t = l.value;
				oc(e, function(l, e) {
					jp(l, t.component ? (n ? n.children.getContext(e) : null) : n, u);
				}),
					u.canDeactivateChecks.push(new yp(t.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, t));
			}
			var _p = Symbol('INITIAL_VALUE');
			function xp() {
				return po(function(l) {
					return function() {
						for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
						var u = null,
							e = null;
						return U(l[l.length - 1]) && (e = l.pop()), 'function' == typeof l[l.length - 1] && (u = l.pop()), 1 === l.length && p(l[0]) && (l = l[0]), X(l, e).lift(new Na(u));
					}
						.apply(
							void 0,
							c(
								l.map(function(l) {
									return l.pipe(
										ro(1),
										(function() {
											for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
											return function(n) {
												var u = l[l.length - 1];
												U(u) ? l.pop() : (u = null);
												var e = l.length;
												return (function() {
													for (var l = [], n = 0; n < arguments.length; n++) l[n] = arguments[n];
													return La()(Oa.apply(void 0, l));
												})(1 !== e || u ? (e > 0 ? X(l, u) : Ia(u)) : Pa(l[0]), n);
											};
										})(_p)
									);
								})
							)
						)
						.pipe(
							go(function(l, n) {
								var u = !1;
								return n.reduce(function(l, e, t) {
									if (l !== _p) return l;
									if ((e === _p && (u = !0), !u)) {
										if (!1 === e) return e;
										if (t === n.length - 1 || sp(e)) return e;
									}
									return l;
								}, l);
							}, _p),
							Va(function(l) {
								return l !== _p;
							}),
							Y(function(l) {
								return sp(l) ? l : !0 === l;
							}),
							ro(1)
						);
				});
			}
			function kp(l, n) {
				return null !== l && n && n(new qi(l)), Oa(!0);
			}
			function Cp(l, n) {
				return null !== l && n && n(new Hi(l)), Oa(!0);
			}
			function Sp(l, n, u) {
				var e = n.routeConfig ? n.routeConfig.canActivate : null;
				return e && 0 !== e.length
					? Oa(
							e.map(function(e) {
								return Ua(function() {
									var t,
										r = vp(e, n, u);
									if (
										(function(l) {
											return l && rp(l.canActivate);
										})(r)
									)
										t = ic(r.canActivate(n, l));
									else {
										if (!rp(r)) throw new Error('Invalid CanActivate guard');
										t = ic(r(n, l));
									}
									return t.pipe(oo());
								});
							})
					  ).pipe(xp())
					: Oa(!0);
			}
			function Ep(l, n, u) {
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
							return Ua(function() {
								return Oa(
									n.guards.map(function(t) {
										var r,
											s = vp(t, n.node, u);
										if (
											(function(l) {
												return l && rp(l.canActivateChild);
											})(s)
										)
											r = ic(s.canActivateChild(e, l));
										else {
											if (!rp(s)) throw new Error('Invalid CanActivateChild guard');
											r = ic(s(e, l));
										}
										return r.pipe(oo());
									})
								).pipe(xp());
							});
						});
				return Oa(t).pipe(xp());
			}
			var Ip = (function() {
					return function() {};
				})(),
				Pp = (function() {
					function l(l, n, u, e, t, r) {
						(this.rootComponentType = l), (this.config = n), (this.urlTree = u), (this.url = e), (this.paramsInheritanceStrategy = t), (this.relativeLinkResolution = r);
					}
					return (
						(l.prototype.recognize = function() {
							try {
								var l = Mp(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
									n = this.processSegmentGroup(this.config, l, Wi),
									u = new Fc(
										[],
										Object.freeze({}),
										Object.freeze(r({}, this.urlTree.queryParams)),
										this.urlTree.fragment,
										{},
										Wi,
										this.rootComponentType,
										null,
										this.urlTree.root,
										-1,
										{}
									),
									e = new Ac(u, n),
									t = new zc(this.url, e);
								return this.inheritParamsAndData(t._root), Oa(t);
							} catch (s) {
								return new P(function(l) {
									return l.error(s);
								});
							}
						}),
						(l.prototype.inheritParamsAndData = function(l) {
							var n = this,
								u = l.value,
								e = Vc(u, this.paramsInheritanceStrategy);
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
								t = gc(n, function(n, u) {
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
									return l.value.outlet === Wi ? -1 : n.value.outlet === Wi ? 1 : l.value.outlet.localeCompare(n.value.outlet);
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
							if ((l.outlet || Wi) !== e) throw new Ip();
							var t,
								s = [],
								a = [];
							if ('**' === l.path) {
								var o = u.length > 0 ? ac(u).parameters : {};
								t = new Fc(u, o, Object.freeze(r({}, this.urlTree.queryParams)), this.urlTree.fragment, Np(l), e, l.component, l, Op(n), Tp(n) + u.length, Dp(l));
							} else {
								var i = (function(l, n, u) {
									if ('' === n.path) {
										if ('full' === n.pathMatch && (l.hasChildren() || u.length > 0)) throw new Ip();
										return { consumedSegments: [], lastChild: 0, parameters: {} };
									}
									var e = (n.matcher || Xi)(u, l, n);
									if (!e) throw new Ip();
									var t = {};
									oc(e.posParams, function(l, n) {
										t[n] = l.path;
									});
									var s = e.consumed.length > 0 ? r({}, t, e.consumed[e.consumed.length - 1].parameters) : t;
									return { consumedSegments: e.consumed, lastChild: e.consumed.length, parameters: s };
								})(n, l, u);
								(s = i.consumedSegments),
									(a = u.slice(i.lastChild)),
									(t = new Fc(s, i.parameters, Object.freeze(r({}, this.urlTree.queryParams)), this.urlTree.fragment, Np(l), e, l.component, l, Op(n), Tp(n) + s.length, Dp(l)));
							}
							var c = (function(l) {
									return l.children ? l.children : l.loadChildren ? l._loadedConfig.routes : [];
								})(l),
								p = Mp(n, s, a, c, this.relativeLinkResolution),
								h = p.segmentGroup,
								d = p.slicedSegments;
							if (0 === d.length && h.hasChildren()) {
								var f = this.processChildren(c, h);
								return [new Ac(t, f)];
							}
							if (0 === c.length && 0 === d.length) return [new Ac(t, [])];
							var g = this.processSegment(c, h, d, Wi);
							return [new Ac(t, g)];
						}),
						l
					);
				})();
			function Op(l) {
				for (var n = l; n._sourceSegment; ) n = n._sourceSegment;
				return n;
			}
			function Tp(l) {
				for (var n = l, u = n._segmentIndexShift ? n._segmentIndexShift : 0; n._sourceSegment; ) u += (n = n._sourceSegment)._segmentIndexShift ? n._segmentIndexShift : 0;
				return u - 1;
			}
			function Mp(l, n, u, e, t) {
				if (
					u.length > 0 &&
					(function(l, n, u) {
						return e.some(function(u) {
							return Rp(l, n, u) && Ap(u) !== Wi;
						});
					})(l, u)
				) {
					var s = new hc(
						n,
						(function(l, n, u, e) {
							var t,
								r,
								s = {};
							(s[Wi] = e), (e._sourceSegment = l), (e._segmentIndexShift = n.length);
							try {
								for (var a = o(u), i = a.next(); !i.done; i = a.next()) {
									var c = i.value;
									if ('' === c.path && Ap(c) !== Wi) {
										var p = new hc([], {});
										(p._sourceSegment = l), (p._segmentIndexShift = n.length), (s[Ap(c)] = p);
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
						})(l, n, e, new hc(u, l.children))
					);
					return (s._sourceSegment = l), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: [] };
				}
				if (
					0 === u.length &&
					(function(l, n, u) {
						return e.some(function(u) {
							return Rp(l, n, u);
						});
					})(l, u)
				) {
					var a = new hc(
						l.segments,
						(function(l, n, u, e, t, s) {
							var a,
								i,
								c = {};
							try {
								for (var p = o(e), h = p.next(); !h.done; h = p.next()) {
									var d = h.value;
									if (Rp(l, u, d) && !t[Ap(d)]) {
										var f = new hc([], {});
										(f._sourceSegment = l), (f._segmentIndexShift = 'legacy' === s ? l.segments.length : n.length), (c[Ap(d)] = f);
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
				var i = new hc(l.segments, l.children);
				return (i._sourceSegment = l), (i._segmentIndexShift = n.length), { segmentGroup: i, slicedSegments: u };
			}
			function Rp(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 === u.redirectTo;
			}
			function Ap(l) {
				return l.outlet || Wi;
			}
			function Np(l) {
				return l.data || {};
			}
			function Dp(l) {
				return l.resolve || {};
			}
			function Up(l, n, u, e) {
				var t = vp(l, n, e);
				return ic(t.resolve ? t.resolve(n, u) : t(n, u));
			}
			function Lp(l) {
				return function(n) {
					return n.pipe(
						po(function(n) {
							var u = l(n);
							return u
								? ll(u).pipe(
										Y(function() {
											return n;
										})
								  )
								: ll([n]);
						})
					);
				};
			}
			var Vp = (function() {
					return function() {};
				})(),
				Fp = (function() {
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
				zp = new bl('ROUTES'),
				Hp = (function() {
					function l(l, n, u, e) {
						(this.loader = l), (this.compiler = n), (this.onLoadStartListener = u), (this.onLoadEndListener = e);
					}
					return (
						(l.prototype.load = function(l, n) {
							var u = this;
							return (
								this.onLoadStartListener && this.onLoadStartListener(n),
								this.loadModuleFactory(n.loadChildren).pipe(
									Y(function(e) {
										u.onLoadEndListener && u.onLoadEndListener(n);
										var t = e.create(l);
										return new lc(sc(t.injector.get(zp)).map(tc), t);
									})
								)
							);
						}),
						(l.prototype.loadModuleFactory = function(l) {
							var n = this;
							return 'string' == typeof l
								? ll(this.loader.load(l))
								: ic(l()).pipe(
										nl(function(l) {
											return l instanceof Sn ? Oa(l) : ll(n.compiler.compileModuleAsync(l));
										})
								  );
						}),
						l
					);
				})(),
				Bp = (function() {
					return function() {};
				})(),
				qp = (function() {
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
			function Gp(l) {
				throw l;
			}
			function Zp(l, n, u) {
				return n.parse('/');
			}
			function Qp(l, n) {
				return Oa(null);
			}
			var Wp = (function() {
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
							(this.errorHandler = Gp),
							(this.malformedUriErrorHandler = Zp),
							(this.navigated = !1),
							(this.lastSuccessfulId = -1),
							(this.hooks = { beforePreactivation: Qp, afterPreactivation: Qp }),
							(this.urlHandlingStrategy = new qp()),
							(this.routeReuseStrategy = new Fp()),
							(this.onSameUrlNavigation = 'ignore'),
							(this.paramsInheritanceStrategy = 'emptyOnly'),
							(this.urlUpdateStrategy = 'deferred'),
							(this.relativeLinkResolution = 'legacy'),
							(this.ngModule = t.get(Cn)),
							(this.console = t.get(Pu));
						var i = t.get(qu);
						(this.isNgZoneEnabled = i instanceof qu),
							this.resetConfig(a),
							(this.currentUrlTree = new pc(new hc([], {}), {}, null)),
							(this.rawUrlTree = this.currentUrlTree),
							(this.browserUrlTree = this.currentUrlTree),
							(this.configLoader = new Hp(
								r,
								s,
								function(l) {
									return o.triggerEvent(new Fi(l));
								},
								function(l) {
									return o.triggerEvent(new zi(l));
								}
							)),
							(this.routerState = Uc(this.currentUrlTree, this.rootComponentType)),
							(this.transitions = new Ta({
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
								Va(function(l) {
									return 0 !== l.id;
								}),
								Y(function(l) {
									return r({}, l, { extractedUrl: n.urlHandlingStrategy.extract(l.rawUrl) });
								}),
								Qa(function(l) {
									n.currentNavigation = {
										id: l.id,
										initialUrl: l.currentRawUrl,
										extractedUrl: l.extractedUrl,
										trigger: l.source,
										extras: l.extras,
										previousNavigation: n.lastSuccessfulNavigation ? r({}, n.lastSuccessfulNavigation, { previousNavigation: null }) : null
									};
								}),
								po(function(l) {
									var e,
										t,
										s,
										a,
										i = !1,
										c = !1;
									return Oa(l).pipe(
										po(function(l) {
											var e,
												t,
												s,
												a,
												o = !n.navigated || l.extractedUrl.toString() !== n.browserUrlTree.toString();
											if (('reload' === n.onSameUrlNavigation || o) && n.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
												return Oa(l).pipe(
													po(function(l) {
														var e = n.transitions.getValue();
														return u.next(new Ti(l.id, n.serializeUrl(l.extractedUrl), l.source, l.restoredState)), e !== n.transitions.getValue() ? Ea : [l];
													}),
													po(function(l) {
														return Promise.resolve(l);
													}),
													((e = n.ngModule.injector),
													(t = n.configLoader),
													(s = n.urlSerializer),
													(a = n.config),
													function(l) {
														return l.pipe(
															po(function(l) {
																return (function(n, u, e, t, r) {
																	return new hp(n, u, e, l.extractedUrl, r).apply();
																})(e, t, s, 0, a).pipe(
																	Y(function(n) {
																		return r({}, l, { urlAfterRedirects: n });
																	})
																);
															})
														);
													}),
													Qa(function(l) {
														n.currentNavigation = r({}, n.currentNavigation, { finalUrl: l.urlAfterRedirects });
													}),
													(function(l, u, e, t, s) {
														return function(e) {
															return e.pipe(
																nl(function(e) {
																	return (function(l, n, u, e, t, r) {
																		return void 0 === t && (t = 'emptyOnly'), void 0 === r && (r = 'legacy'), new Pp(l, n, u, e, t, r).recognize();
																	})(l, u, e.urlAfterRedirects, ((a = e.urlAfterRedirects), n.serializeUrl(a)), t, s).pipe(
																		Y(function(l) {
																			return r({}, e, { targetSnapshot: l });
																		})
																	);
																	var a;
																})
															);
														};
													})(n.rootComponentType, n.config, 0, n.paramsInheritanceStrategy, n.relativeLinkResolution),
													Qa(function(l) {
														'eager' === n.urlUpdateStrategy &&
															(l.extras.skipLocationChange || n.setBrowserUrl(l.urlAfterRedirects, !!l.extras.replaceUrl, l.id),
															(n.browserUrlTree = l.urlAfterRedirects));
													}),
													Qa(function(l) {
														var e = new Ni(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														u.next(e);
													})
												);
											if (o && n.rawUrlTree && n.urlHandlingStrategy.shouldProcessUrl(n.rawUrlTree)) {
												var i = l.extractedUrl,
													c = l.source,
													p = l.restoredState,
													h = l.extras,
													d = new Ti(l.id, n.serializeUrl(i), c, p);
												u.next(d);
												var f = Uc(i, n.rootComponentType).snapshot;
												return Oa(r({}, l, { targetSnapshot: f, urlAfterRedirects: i, extras: r({}, h, { skipLocationChange: !1, replaceUrl: !1 }) }));
											}
											return (n.rawUrlTree = l.rawUrl), l.resolve(null), Ea;
										}),
										Lp(function(l) {
											var u = l.extras;
											return n.hooks.beforePreactivation(l.targetSnapshot, {
												navigationId: l.id,
												appliedUrlTree: l.extractedUrl,
												rawUrlTree: l.rawUrl,
												skipLocationChange: !!u.skipLocationChange,
												replaceUrl: !!u.replaceUrl
											});
										}),
										Qa(function(l) {
											var u = new Di(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
											n.triggerEvent(u);
										}),
										Y(function(l) {
											return r({}, l, {
												guards: ((u = l.targetSnapshot), (e = l.currentSnapshot), (t = n.rootContexts), (s = u._root), wp(s, e ? e._root : null, t, [s.value]))
											});
											var u, e, t, s;
										}),
										(function(l, n) {
											return function(u) {
												return u.pipe(
													nl(function(u) {
														var e = u.targetSnapshot,
															t = u.currentSnapshot,
															s = u.guards,
															a = s.canActivateChecks,
															o = s.canDeactivateChecks;
														return 0 === o.length && 0 === a.length
															? Oa(r({}, u, { guardsResult: !0 }))
															: (function(l, n, u, e) {
																	return ll(o).pipe(
																		nl(function(l) {
																			return (function(l, n, u, e, t) {
																				var r = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
																				return r && 0 !== r.length
																					? Oa(
																							r.map(function(r) {
																								var s,
																									a = vp(r, n, t);
																								if (
																									(function(l) {
																										return l && rp(l.canDeactivate);
																									})(a)
																								)
																									s = ic(a.canDeactivate(l, n, u, e));
																								else {
																									if (!rp(a)) throw new Error('Invalid CanDeactivate guard');
																									s = ic(a(l, n, u, e));
																								}
																								return s.pipe(oo());
																							})
																					  ).pipe(xp())
																					: Oa(!0);
																			})(l.component, l.route, u, n, e);
																		}),
																		oo(function(l) {
																			return !0 !== l;
																		}, !0)
																	);
															  })(0, e, t, l).pipe(
																	nl(function(u) {
																		return u && 'boolean' == typeof u
																			? (function(l, n, u, e) {
																					return ll(a).pipe(
																						yo(function(n) {
																							return ll([Cp(n.route.parent, e), kp(n.route, e), Ep(l, n.path, u), Sp(l, n.route, u)]).pipe(
																								La(),
																								oo(function(l) {
																									return !0 !== l;
																								}, !0)
																							);
																						}),
																						oo(function(l) {
																							return !0 !== l;
																						}, !0)
																					);
																			  })(e, 0, l, n)
																			: Oa(u);
																	}),
																	Y(function(l) {
																		return r({}, u, { guardsResult: l });
																	})
															  );
													})
												);
											};
										})(n.ngModule.injector, function(l) {
											return n.triggerEvent(l);
										}),
										Qa(function(l) {
											if (sp(l.guardsResult)) {
												var u = $i('Redirecting to "' + n.serializeUrl(l.guardsResult) + '"');
												throw ((u.url = l.guardsResult), u);
											}
										}),
										Qa(function(l) {
											var u = new Ui(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
											n.triggerEvent(u);
										}),
										Va(function(l) {
											if (!l.guardsResult) {
												n.resetUrlToCurrentUrlTree();
												var e = new Ri(l.id, n.serializeUrl(l.extractedUrl), '');
												return u.next(e), l.resolve(!1), !1;
											}
											return !0;
										}),
										Lp(function(l) {
											if (l.guards.canActivateChecks.length)
												return Oa(l).pipe(
													Qa(function(l) {
														var u = new Li(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														n.triggerEvent(u);
													}),
													((u = n.paramsInheritanceStrategy),
													(e = n.ngModule.injector),
													function(l) {
														return l.pipe(
															nl(function(l) {
																var n = l.targetSnapshot,
																	t = l.guards.canActivateChecks;
																return t.length
																	? ll(t).pipe(
																			yo(function(l) {
																				return (function(l, u, e, t) {
																					return (function(l, n, u, e) {
																						var t = Object.keys(l);
																						if (0 === t.length) return Oa({});
																						if (1 === t.length) {
																							var r = t[0];
																							return Up(l[r], n, u, e).pipe(
																								Y(function(l) {
																									var n;
																									return ((n = {})[r] = l), n;
																								})
																							);
																						}
																						var s = {};
																						return ll(t)
																							.pipe(
																								nl(function(t) {
																									return Up(l[t], n, u, e).pipe(
																										Y(function(l) {
																											return (s[t] = l), l;
																										})
																									);
																								})
																							)
																							.pipe(
																								no(),
																								Y(function() {
																									return s;
																								})
																							);
																					})(l._resolve, l, n, t).pipe(
																						Y(function(n) {
																							return (l._resolvedData = n), (l.data = r({}, l.data, Vc(l, e).resolve)), null;
																						})
																					);
																				})(l.route, 0, u, e);
																			}),
																			(function(l, n) {
																				return arguments.length >= 2
																					? function(n) {
																							return E(go(l, void 0), qa(1), $a(void 0))(n);
																					  }
																					: function(n) {
																							return E(
																								go(function(n, u, e) {
																									return l(n);
																								}),
																								qa(1)
																							)(n);
																					  };
																			})(function(l, n) {
																				return l;
																			}),
																			Y(function(n) {
																				return l;
																			})
																	  )
																	: Oa(l);
															})
														);
													}),
													Qa(function(l) {
														var u = new Vi(l.id, n.serializeUrl(l.extractedUrl), n.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
														n.triggerEvent(u);
													})
												);
											var u, e;
										}),
										Lp(function(l) {
											var u = l.extras;
											return n.hooks.afterPreactivation(l.targetSnapshot, {
												navigationId: l.id,
												appliedUrlTree: l.extractedUrl,
												rawUrlTree: l.rawUrl,
												skipLocationChange: !!u.skipLocationChange,
												replaceUrl: !!u.replaceUrl
											});
										}),
										Y(function(l) {
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
														return new Ac(i, t);
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
														i = new Lc(new Ta((a = u.value).url), new Ta(a.params), new Ta(a.queryParams), new Ta(a.fragment), new Ta(a.data), a.outlet, a.component, a);
													return (
														(t = u.children.map(function(u) {
															return l(n, u);
														})),
														new Ac(i, t)
													);
												})(n.routeReuseStrategy, (u = l.targetSnapshot)._root, (e = l.currentRouterState) ? e._root : void 0)),
												new Dc(t, u));
											return r({}, l, { targetRouterState: s });
										}),
										Qa(function(l) {
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
										Y(function(l) {
											return new ep(s, l.targetRouterState, l.currentRouterState, a).activate(t), l;
										})),
										Qa({
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
												var e = new Ri(l.id, n.serializeUrl(l.extractedUrl), 'Navigation ID ' + l.id + ' is not equal to the current navigation id ' + n.navigationId);
												u.next(e), l.resolve(!1);
											}
											n.currentNavigation = null;
										}),
										function(l) {
											return l.lift(new vo(e));
										}),
										uo(function(e) {
											if (((c = !0), (a = e) && a[Ji])) {
												n.navigated = !0;
												var t = sp(e.url);
												t || n.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl);
												var r = new Ri(l.id, n.serializeUrl(l.extractedUrl), e.message);
												u.next(r), l.resolve(!1), t && n.navigateByUrl(e.url);
											} else {
												n.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl);
												var s = new Ai(l.id, n.serializeUrl(l.extractedUrl), e);
												u.next(s);
												try {
													l.resolve(n.errorHandler(e));
												} catch (o) {
													l.reject(o);
												}
											}
											var a;
											return Ea;
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
							nc(l), (this.config = l.map(tc)), (this.navigated = !1), (this.lastSuccessfulId = -1);
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
							Vn() && s && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
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
									if (0 === u.length) return Qc(n.root, n.root, n, e, t);
									var r = (function(l) {
										if ('string' == typeof l[0] && 1 === l.length && '/' === l[0]) return new Wc(!0, 0, l);
										var n = 0,
											u = !1,
											e = l.reduce(function(l, e, t) {
												if ('object' == typeof e && null != e) {
													if (e.outlets) {
														var r = {};
														return (
															oc(e.outlets, function(l, n) {
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
										return new Wc(u, n, e);
									})(u);
									if (r.toRoot()) return Qc(n.root, new hc([], {}), n, e, t);
									var s = (function(l, u, e) {
											if (l.isAbsolute) return new Kc(n.root, !0, 0);
											if (-1 === e.snapshot._lastPathIndex) return new Kc(e.snapshot._urlSegment, !0, 0);
											var t = Zc(l.commands[0]) ? 0 : 1;
											return (function(n, u, r) {
												for (var s = e.snapshot._urlSegment, a = e.snapshot._lastPathIndex + t, o = l.numberOfDoubleDots; o > a; ) {
													if (((o -= a), !(s = s.parent))) throw new Error("Invalid number of '../'");
													a = s.segments.length;
												}
												return new Kc(s, !1, a - o);
											})();
										})(r, 0, l),
										a = s.processChildren ? $c(s.segmentGroup, s.index, r.commands) : Jc(s.segmentGroup, s.index, r.commands);
									return Qc(s.segmentGroup, a, n, e, t);
								})(i, this.currentUrlTree, l, h, p)
							);
						}),
						(l.prototype.navigateByUrl = function(l, n) {
							void 0 === n && (n = { skipLocationChange: !1 }),
								Vn() && this.isNgZoneEnabled && !qu.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
							var u = sp(l) ? l : this.parseUrl(l),
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
							if (sp(l)) return cc(this.currentUrlTree, l, n);
							var u = this.parseUrl(l);
							return cc(this.currentUrlTree, u, n);
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
										l.events.next(new Mi(n.id, l.serializeUrl(n.extractedUrl), l.serializeUrl(l.currentUrlTree))),
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
				Kp = (function() {
					return function() {
						(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new Yp()), (this.attachRef = null);
					};
				})(),
				Yp = (function() {
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
							return n || ((n = new Kp()), this.contexts.set(l, n)), n;
						}),
						(l.prototype.getContext = function(l) {
							return this.contexts.get(l) || null;
						}),
						l
					);
				})(),
				Jp = (function() {
					function l(l, n, u, e, t) {
						(this.parentContexts = l),
							(this.location = n),
							(this.resolver = u),
							(this.changeDetector = t),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new su()),
							(this.deactivateEvents = new su()),
							(this.name = e || Wi),
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
								t = new $p(l, e, this.location.injector);
							(this.activated = this.location.createComponent(u, this.location.length, t)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
						}),
						l
					);
				})(),
				$p = (function() {
					function l(l, n, u) {
						(this.route = l), (this.childContexts = n), (this.parent = u);
					}
					return (
						(l.prototype.get = function(l, n) {
							return l === Lc ? this.route : l === Yp ? this.childContexts : this.parent.get(l, n);
						}),
						l
					);
				})(),
				Xp = (function() {
					return function() {};
				})(),
				lh = (function() {
					function l() {}
					return (
						(l.prototype.preload = function(l, n) {
							return n().pipe(
								uo(function() {
									return Oa(null);
								})
							);
						}),
						l
					);
				})(),
				nh = (function() {
					function l() {}
					return (
						(l.prototype.preload = function(l, n) {
							return Oa(null);
						}),
						l
					);
				})(),
				uh = (function() {
					function l(l, n, u, e, t) {
						(this.router = l),
							(this.injector = e),
							(this.preloadingStrategy = t),
							(this.loader = new Hp(
								n,
								u,
								function(n) {
									return l.triggerEvent(new Fi(n));
								},
								function(n) {
									return l.triggerEvent(new zi(n));
								}
							));
					}
					return (
						(l.prototype.setUpPreloading = function() {
							var l = this;
							this.subscription = this.router.events
								.pipe(
									Va(function(l) {
										return l instanceof Mi;
									}),
									yo(function() {
										return l.preload();
									})
								)
								.subscribe(function() {});
						}),
						(l.prototype.preload = function() {
							var l = this.injector.get(Cn);
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
							return ll(t).pipe(
								rl(),
								Y(function(l) {})
							);
						}),
						(l.prototype.preloadConfig = function(l, n) {
							var u = this;
							return this.preloadingStrategy.preload(n, function() {
								return u.loader.load(l.injector, n).pipe(
									nl(function(l) {
										return (n._loadedConfig = l), u.processRoutes(l.module, l.routes);
									})
								);
							});
						}),
						l
					);
				})(),
				eh = (function() {
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
								n instanceof Ti
									? ((l.store[l.lastId] = l.viewportScroller.getScrollPosition()),
									  (l.lastSource = n.navigationTrigger),
									  (l.restoredId = n.restoredState ? n.restoredState.navigationId : 0))
									: n instanceof Mi && ((l.lastId = n.id), l.scheduleScrollEvent(n, l.router.parseUrl(n.urlAfterRedirects).fragment));
							});
						}),
						(l.prototype.consumeScrollEvents = function() {
							var l = this;
							return this.router.events.subscribe(function(n) {
								n instanceof Zi &&
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
							this.router.triggerEvent(new Zi(l, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, n));
						}),
						(l.prototype.ngOnDestroy = function() {
							this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
						}),
						l
					);
				})(),
				th = new bl('ROUTER_CONFIGURATION'),
				rh = new bl('ROUTER_FORROOT_GUARD'),
				sh = [
					aa,
					{ provide: mc, useClass: bc },
					{ provide: Wp, useFactory: dh, deps: [ae, mc, Yp, aa, nn, pu, Uu, zp, th, [Bp, new Dl()], [Vp, new Dl()]] },
					Yp,
					{ provide: Lc, useFactory: fh, deps: [Wp] },
					{ provide: pu, useClass: he },
					uh,
					nh,
					lh,
					{ provide: th, useValue: { enableTracing: !1 } }
				];
			function ah() {
				return new ue('Router', Wp);
			}
			var oh = (function() {
				function l(l, n) {}
				var n;
				return (
					(n = l),
					(l.forRoot = function(l, u) {
						return {
							ngModule: n,
							providers: [
								sh,
								hh(l),
								{ provide: rh, useFactory: ph, deps: [[Wp, new Dl(), new Ll()]] },
								{ provide: th, useValue: u || {} },
								{ provide: ra, useFactory: ch, deps: [ea, [new Nl(sa), new Dl()], th] },
								{ provide: eh, useFactory: ih, deps: [Wp, Ca, th] },
								{ provide: Xp, useExisting: u && u.preloadingStrategy ? u.preloadingStrategy : nh },
								{ provide: ue, multi: !0, useFactory: ah },
								[gh, { provide: ju, multi: !0, useFactory: mh, deps: [gh] }, { provide: yh, useFactory: bh, deps: [gh] }, { provide: Iu, multi: !0, useExisting: yh }]
							]
						};
					}),
					(l.forChild = function(l) {
						return { ngModule: n, providers: [hh(l)] };
					}),
					l
				);
			})();
			function ih(l, n, u) {
				return u.scrollOffset && n.setOffset(u.scrollOffset), new eh(l, n, u);
			}
			function ch(l, n, u) {
				return void 0 === u && (u = {}), u.useHash ? new ia(l, n) : new ca(l, n);
			}
			function ph(l) {
				if (l) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function hh(l) {
				return [{ provide: wl, multi: !0, useValue: l }, { provide: zp, multi: !0, useValue: l }];
			}
			function dh(l, n, u, e, t, r, s, a, o, i, c) {
				void 0 === o && (o = {});
				var p = new Wp(null, n, u, e, t, r, s, sc(a));
				if (
					(i && (p.urlHandlingStrategy = i),
					c && (p.routeReuseStrategy = c),
					o.errorHandler && (p.errorHandler = o.errorHandler),
					o.malformedUriErrorHandler && (p.malformedUriErrorHandler = o.malformedUriErrorHandler),
					o.enableTracing)
				) {
					var h = _o();
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
			function fh(l) {
				return l.routerState.root;
			}
			var gh = (function() {
				function l(l) {
					(this.injector = l), (this.initNavigation = !1), (this.resultOfPreactivationDone = new N());
				}
				return (
					(l.prototype.appInitializer = function() {
						var l = this;
						return this.injector.get(ta, Promise.resolve(null)).then(function() {
							var n = null,
								u = new Promise(function(l) {
									return (n = l);
								}),
								e = l.injector.get(Wp),
								t = l.injector.get(th);
							if (l.isLegacyDisabled(t) || l.isLegacyEnabled(t)) n(!0);
							else if ('disabled' === t.initialNavigation) e.setUpLocationChangeListener(), n(!0);
							else {
								if ('enabled' !== t.initialNavigation) throw new Error("Invalid initialNavigation options: '" + t.initialNavigation + "'");
								(e.hooks.afterPreactivation = function() {
									return l.initNavigation ? Oa(null) : ((l.initNavigation = !0), n(!0), l.resultOfPreactivationDone);
								}),
									e.initialNavigation();
							}
							return u;
						});
					}),
					(l.prototype.bootstrapListener = function(l) {
						var n = this.injector.get(th),
							u = this.injector.get(uh),
							e = this.injector.get(eh),
							t = this.injector.get(Wp),
							r = this.injector.get(ae);
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
			function mh(l) {
				return l.appInitializer.bind(l);
			}
			function bh(l) {
				return l.bootstrapListener.bind(l);
			}
			var yh = new bl('Router Initializer'),
				vh = at({ encapsulation: 2, styles: [], data: {} });
			function wh(l) {
				return Wr(
					0,
					[(l()(), Nt(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)), xr(1, 212992, null, 0, Jp, [Yp, fe, _n, [8, null], me], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			function jh(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 1, 'ng-component', [], null, null, null, wh, vh)), xr(1, 49152, null, 0, Qi, [], null, null)], null, null);
			}
			var _h = Xt('ng-component', Qi, jh, {}, {}, []),
				xh = (function() {
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
				kh = (function() {
					return function() {};
				})(),
				Ch = (function() {
					return function() {};
				})(),
				Sh = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				Eh = (function() {
					return function() {};
				})(),
				Ih = (function() {
					function l() {}
					return (l.prototype.ngOnInit = function() {}), l;
				})(),
				Ph = (function() {
					return function() {};
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
				Kh = at({
					encapsulation: 2,
					styles: [
						"a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:'\\2012';color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex='-1']:focus,input[type=range]:focus{outline:0}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}:disabled,[disabled]{background-color:#bdbdbd;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{align-items:flex-start;display:flex;justify-content:flex-start}.col,.col-full{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{justify-content:center}.align-l,.col.align-t{justify-content:flex-start}.align-r,.col.align-b{justify-content:flex-end}.align-m,.col.align-c{align-items:center}.align-b,.col.align-r{align-items:flex-end}.align-t,.col.align-l{align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{justify-content:space-between}.align-st{align-items:stretch}.align-cm{align-items:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{flex-grow:0;flex-shrink:0}.item-g-0{flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{flex-grow:1;flex-shrink:1}.item-g-1{flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{flex-grow:2;flex-shrink:2}.item-g-2{flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{flex-grow:3;flex-shrink:3}.item-g-3{flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{flex-grow:4;flex-shrink:4}.item-g-4{flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{flex-grow:5;flex-shrink:5}.item-g-5{flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{flex-grow:6;flex-shrink:6}.item-g-6{flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{flex-grow:7;flex-shrink:7}.item-g-7{flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{flex-grow:8;flex-shrink:8}.item-g-8{flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{flex-grow:9;flex-shrink:9}.item-g-9{flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{flex-grow:10;flex-shrink:10}.item-g-10{flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{flex-grow:11;flex-shrink:11}.item-g-11{flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{flex-grow:12;flex-shrink:12}.item-g-12{flex-grow:12}.item-s-12{flex-shrink:12}[class*=flex-g]{flex-basis:0%}.item-order-1{order:1}.item-order-2{order:2}.item-order-3{order:3}.item-order-4{order:4}.item-order-5{order:5}.item-order-6{order:6}.item-order-7{order:7}.item-order-8{order:8}.item-order-9{order:9}.item-order-10{order:10}.item-order-11{order:11}.item-order-12{order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:48rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}"
					],
					data: {}
				});
			function Yh(l) {
				return Wr(
					0,
					[
						Ur(402653184, 1, { content: 0 }),
						(l()(),
						Nt(
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
						(l()(), Gr(-1, null, ['Skip to content'])),
						Hr(null, 0)
					],
					null,
					null
				);
			}
			var Jh = at({
				encapsulation: 0,
				styles: [
					'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;color:#fff;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
				],
				data: {}
			});
			function $h(l) {
				return Wr(
					0,
					[
						(l()(),
						Nt(
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
						(l()(), Gr(-1, null, [' X\n']))
					],
					null,
					null
				);
			}
			function Xh(l) {
				return Wr(
					0,
					[
						Ur(402653184, 1, { message: 0 }),
						(l()(), Nt(1, 0, [[1, 0], ['message', 1]], null, 1, 'p', [['tabindex', '-1']], [[1, 'id', 0]], null, null, null, null)),
						Hr(null, 0),
						(l()(), At(16777216, null, null, 1, null, $h)),
						xr(4, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						l(n, 4, 0, n.component.close);
					},
					function(l, n) {
						l(n, 1, 0, n.component.id);
					}
				);
			}
			var ld = at({
				encapsulation: 0,
				styles: [
					'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
				],
				data: {}
			});
			function nd(l) {
				return Wr(0, [Hr(null, 0)], null, null);
			}
			var ud = at({
				encapsulation: 0,
				styles: [
					'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;flex-grow:1;flex-shrink:0}'
				],
				data: {}
			});
			function ed(l) {
				return Wr(0, [Hr(null, 0)], null, null);
			}
			var td = at({
				encapsulation: 0,
				styles: [
					'.checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex:1 0 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;background-color:#fff;border:.0625rem solid #bdbdbd;padding:.5rem}.form-field[_nghost-%COMP%]:hover{border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){flex:1 0 13.75rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:.54}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#191919}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{flex:none;font-size:1rem;padding-left:.5rem;padding-right:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{flex:1 0 auto}'
				],
				data: {}
			});
			function rd(l) {
				return Wr(0, [Hr(null, 0)], null, null);
			}
			var sd = at({
				encapsulation: 0,
				styles: [
					'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
				],
				data: {}
			});
			function ad(l) {
				return Wr(0, [Hr(null, 0)], null, null);
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
				id = at({
					encapsulation: 0,
					styles: [
						[
							'.styleguide[_ngcontent-%COMP%]{margin-left:16rem}.styleguide[_ngcontent-%COMP%]   .hljs-attr[_ngcontent-%COMP%]{color:#954121}.styleguide-menu[_ngcontent-%COMP%]{left:2rem;top:5.5rem;width:14rem}.styleguide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#6a0080}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .styleguide[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:.875rem}.styleguide[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-width:15rem}#styleguide[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;color:#000;background:#f8f8ff;-webkit-text-size-adjust:none}.diff[_ngcontent-%COMP%]   .hljs-header[_ngcontent-%COMP%], .hljs-comment[_ngcontent-%COMP%]{color:#408080;font-style:italic}.assignment[_ngcontent-%COMP%], .css[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-subst[_ngcontent-%COMP%], .hljs-winutils[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#954121}.hljs-hexcolor[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%]{color:#40a070}.hljs-doctag[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-value[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{color:#219161}.hljs-id[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%]{color:#19469d}.hljs-params[_ngcontent-%COMP%]{color:#00f}.hljs-subst[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{font-weight:400}.haskell[_ngcontent-%COMP%]   .hljs-label[_ngcontent-%COMP%], .hljs-class[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-command[_ngcontent-%COMP%]{color:#458;font-weight:700}.django[_ngcontent-%COMP%]   .hljs-tag[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-rule[_ngcontent-%COMP%]   .hljs-property[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:navy;font-weight:400}.hljs-attr[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .instancevar[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-body[_ngcontent-%COMP%]{color:teal}.hljs-regexp[_ngcontent-%COMP%]{color:#b68}.hljs-class[_ngcontent-%COMP%]{color:#458;font-weight:700}.hljs-symbol[_ngcontent-%COMP%], .input_number[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .keymethods[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-special[_ngcontent-%COMP%]{color:#990073}.builtin[_ngcontent-%COMP%], .constructor[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#0086b3}.hljs-cdata[_ngcontent-%COMP%], .hljs-doctype[_ngcontent-%COMP%], .hljs-pi[_ngcontent-%COMP%], .hljs-pragma[_ngcontent-%COMP%], .hljs-preprocessor[_ngcontent-%COMP%], .hljs-shebang[_ngcontent-%COMP%]{color:#999;font-weight:700}.hljs-deletion[_ngcontent-%COMP%]{background:#fdd}.hljs-addition[_ngcontent-%COMP%]{background:#dfd}.diff[_ngcontent-%COMP%]   .hljs-change[_ngcontent-%COMP%]{background:#0086b3}.hljs-chunk[_ngcontent-%COMP%]{color:#aaa}.tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{opacity:.5}.flexbox[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][_ngcontent-%COMP%]{height:15.625rem;width:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][class*=wrap][_ngcontent-%COMP%]{width:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.col-full[_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][_ngcontent-%COMP%]{height:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][class*=wrap][_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.row[_ngcontent-%COMP%]{width:15.625rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;background-color:#2196f3;color:#fff;justify-content:center;min-height:6.25rem;min-width:7.5rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50;min-height:4.6875rem;min-width:6.25rem}.box[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:1rem;padding:0}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;text-align:center}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50}.box[_ngcontent-%COMP%]   p[class*=pad][_ngcontent-%COMP%]{display:inline-block;margin:0 1rem}'
						]
					],
					data: {}
				});
			function cd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Close']))
					],
					null,
					null
				);
			}
			function pd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Empty']))
					],
					null,
					null
				);
			}
			function hd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Group'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Rounded'])),
						(l()(), Nt(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function dd(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function fd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Accordion'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Expand']))
					],
					null,
					null
				);
			}
			function gd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 12, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Background'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Border'])),
						(l()(), Nt(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Hover'])),
						(l()(), Nt(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function md(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function bd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 24, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Container Column'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Container Row'])),
						(l()(), Nt(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item Column'])),
						(l()(), Nt(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item Order'])),
						(l()(), Nt(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item Row'])),
						(l()(), Nt(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item Size'])),
						(l()(), Nt(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Wrap Column'])),
						(l()(), Nt(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(23, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Wrap Row']))
					],
					null,
					null
				);
			}
			function yd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 18, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Checkbox'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Field'])),
						(l()(), Nt(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Field Group'])),
						(l()(), Nt(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Fieldset'])),
						(l()(), Nt(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Form Group'])),
						(l()(), Nt(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Label']))
					],
					null,
					null
				);
			}
			function vd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Area'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Container'])),
						(l()(), Nt(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item']))
					],
					null,
					null
				);
			}
			function wd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Container'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Sticky Footer']))
					],
					null,
					null
				);
			}
			function jd(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function _d(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Items'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Links'])),
						(l()(), Nt(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Placement']))
					],
					null,
					null
				);
			}
			function xd(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function kd(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Cd(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Sd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Margin'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Padding']))
					],
					null,
					null
				);
			}
			function Ed(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Id(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Pd(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Od(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 15, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Border'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Hover'])),
						(l()(), Nt(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Striped'])),
						(l()(), Nt(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Table Cell'])),
						(l()(), Nt(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Table Row']))
					],
					null,
					null
				);
			}
			function Td(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Md(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Font'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function Rd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Hide'])),
						(l()(), Nt(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Nt(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Show']))
					],
					null,
					null
				);
			}
			function Ad(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 115, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Alerts are styled with an '])),
						(l()(), Nt(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.alert-[bad || good || info || warn]'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(7, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(8, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(9, { flexbox: 0, box: 1 }),
						(l()(), Nt(10, 0, null, null, 2, 'aside', [['class', 'alert-bad']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						xr(11, 114688, null, 0, xh, [En], { class: [0, 'class'] }, null),
						(l()(), Gr(-1, 0, ['bad'])),
						(l()(), Nt(13, 0, null, null, 2, 'aside', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						xr(14, 114688, null, 0, xh, [En], { class: [0, 'class'] }, null),
						(l()(), Gr(-1, 0, ['good'])),
						(l()(), Nt(16, 0, null, null, 2, 'aside', [['class', 'alert-info']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						xr(17, 114688, null, 0, xh, [En], { class: [0, 'class'] }, null),
						(l()(), Gr(-1, 0, ['info'])),
						(l()(), Nt(19, 0, null, null, 2, 'aside', [['class', 'alert-warn']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						xr(20, 114688, null, 0, xh, [En], { class: [0, 'class'] }, null),
						(l()(), Gr(-1, 0, ['warn'])),
						(l()(), Nt(22, 0, null, null, 2, 'ez-alert', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						xr(23, 114688, null, 0, xh, [En], { class: [0, 'class'] }, null),
						(l()(), Gr(-1, 0, ['good'])),
						(l()(), Nt(25, 0, null, null, 90, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(26, 0, null, null, 89, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(27, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(29, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(32, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(35, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"alert-bad"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bad'])),
						(l()(), Nt(39, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(41, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(45, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(47, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(50, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(53, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"alert-good"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['good'])),
						(l()(), Nt(57, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(59, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(63, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(68, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"alert-info"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['info'])),
						(l()(), Nt(75, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(77, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(81, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"alert-warn"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['warn'])),
						(l()(), Nt(93, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(95, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(99, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(101, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ez-alert'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(104, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(107, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"alert-good"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['good'])),
						(l()(), Nt(111, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(113, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ez-alert'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 9, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 8, 0, 'pad-a-sm', e), l(n, 11, 0, 'alert-bad'), l(n, 14, 0, 'alert-good'), l(n, 17, 0, 'alert-info'), l(n, 20, 0, 'alert-warn'), l(n, 23, 0, 'alert-good');
					},
					function(l, n) {
						l(n, 10, 0, cr(n, 11).ariaLabelledby, cr(n, 11).hostClass, cr(n, 11).role, cr(n, 11).tabindex),
							l(n, 13, 0, cr(n, 14).ariaLabelledby, cr(n, 14).hostClass, cr(n, 14).role, cr(n, 14).tabindex),
							l(n, 16, 0, cr(n, 17).ariaLabelledby, cr(n, 17).hostClass, cr(n, 17).role, cr(n, 17).tabindex),
							l(n, 19, 0, cr(n, 20).ariaLabelledby, cr(n, 20).hostClass, cr(n, 20).role, cr(n, 20).tabindex),
							l(n, 22, 0, cr(n, 23).ariaLabelledby, cr(n, 23).hostClass, cr(n, 23).role, cr(n, 23).tabindex);
					}
				);
			}
			function Nd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 54, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Close'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Alerts are closed by adding a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.close'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(9, 0, null, null, 8, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(),
						Nt(12, 0, null, null, 2, 'aside', [['class', 'alert-good close']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						xr(13, 114688, null, 0, xh, [En], { class: [0, 'class'] }, null),
						(l()(), Gr(-1, 0, ['close'])),
						(l()(),
						Nt(15, 0, null, null, 2, 'ez-alert', [['class', 'close alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, Xh, Jh)),
						xr(16, 114688, null, 0, xh, [En], { class: [0, 'class'] }, null),
						(l()(), Gr(-1, 0, ['close'])),
						(l()(), Nt(18, 0, null, null, 36, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(19, 0, null, null, 35, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(20, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(22, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(25, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(28, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"alert-good close"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['close'])),
						(l()(), Nt(32, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(34, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['aside'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(38, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(40, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ez-alert'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(43, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(46, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"close alert-good"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['close'])),
						(l()(), Nt(50, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(52, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ez-alert'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 13, 0, 'alert-good close'), l(n, 16, 0, 'close alert-good');
					},
					function(l, n) {
						l(n, 12, 0, cr(n, 13).ariaLabelledby, cr(n, 13).hostClass, cr(n, 13).role, cr(n, 13).tabindex),
							l(n, 15, 0, cr(n, 16).ariaLabelledby, cr(n, 16).hostClass, cr(n, 16).role, cr(n, 16).tabindex);
					}
				);
			}
			function Dd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 94, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Badges are styled with a '])),
						(l()(), Nt(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.badge-[sm || md || lg]'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(7, 0, null, null, 14, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(8, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(9, { flexbox: 0, box: 1 }),
						(l()(), Nt(10, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, nd, ld)),
						xr(11, 114688, null, 0, Sh, [], null, null),
						(l()(), Gr(-1, 0, ['1'])),
						(l()(), Nt(13, 0, null, null, 2, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, nd, ld)),
						xr(14, 114688, null, 0, Sh, [], null, null),
						(l()(), Gr(-1, 0, ['20'])),
						(l()(), Nt(16, 0, null, null, 2, 'p', [['class', 'badge-lg bg-dk-blue text-white']], null, null, null, nd, ld)),
						xr(17, 114688, null, 0, Sh, [], null, null),
						(l()(), Gr(-1, 0, ['300'])),
						(l()(), Nt(19, 0, null, null, 2, 'ez-badge', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, nd, ld)),
						xr(20, 114688, null, 0, Sh, [], null, null),
						(l()(), Gr(-1, 0, ['10'])),
						(l()(), Nt(22, 0, null, null, 72, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(23, 0, null, null, 71, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(24, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(26, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(29, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['1'])),
						(l()(), Nt(36, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(38, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(42, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(44, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(47, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['20'])),
						(l()(), Nt(54, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(56, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(62, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"badge-lg bg-dk-blue text-white"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['300'])),
						(l()(), Nt(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(74, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(78, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(80, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ez-badge'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['10'])),
						(l()(), Nt(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(92, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ez-badge'])),
						(l()(), Gr(-1, null, ['>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 49, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Empty'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['If a badge does not contain text, it is not rendered.'])),
						(l()(), Nt(6, 0, null, null, 7, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(7, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(8, { flexbox: 0, box: 1 }),
						(l()(), Nt(9, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, nd, ld)),
						xr(10, 114688, null, 0, Sh, [], null, null),
						(l()(), Gr(-1, 0, ['1'])),
						(l()(), Nt(12, 0, null, null, 1, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, nd, ld)),
						xr(13, 114688, null, 0, Sh, [], null, null),
						(l()(), Nt(14, 0, null, null, 35, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(15, 0, null, null, 34, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(18, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(21, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(24, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['1'])),
						(l()(), Nt(28, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(30, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(34, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(36, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(39, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(45, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(47, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, ['>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 114, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Buttons are styled with a '])),
						(l()(), Nt(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.btn-[xs || sm || md || lg || xl || full]'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(7, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(8, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(9, { flexbox: 0, box: 1 }),
						(l()(), Nt(10, 0, null, null, 2, 'button', [['class', 'btn-xs bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(11, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['xs'])),
						(l()(), Nt(13, 0, null, null, 2, 'button', [['class', 'btn-sm bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(14, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['sm'])),
						(l()(), Nt(16, 0, null, null, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(17, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(19, 0, null, null, 2, 'button', [['class', 'btn-lg bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(20, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['lg'])),
						(l()(), Nt(22, 0, null, null, 2, 'button', [['class', 'btn-xl bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(23, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['xl'])),
						(l()(), Nt(25, 0, null, null, 2, 'button', [['class', 'btn-full bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(26, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['full'])),
						(l()(), Nt(28, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(29, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<button '])),
						(l()(), Nt(31, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(35, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-xs bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(38, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(39, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>xs</button>\n<button '])),
						(l()(), Nt(45, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-sm bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(52, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>sm</button>\n<button '])),
						(l()(), Nt(59, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(60, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(63, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(66, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n<button '])),
						(l()(), Nt(73, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-lg bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(80, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>lg</button>\n<button '])),
						(l()(), Nt(87, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(91, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-xl bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(94, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(95, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(98, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>xl</button>\n<button '])),
						(l()(), Nt(101, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-full bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(108, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(112, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>full</button>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 314, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Group'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Buttons are grouped with a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.btn-group-[row || col || full]'])),
						(l()(), Gr(-1, null, [' class on a parent container.'])),
						(l()(), Nt(9, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 16, 'section', [['aria-label', 'button row group'], ['class', 'btn-group-row'], ['role', 'group']], null, null, null, ed, ud)),
						xr(13, 114688, null, 0, Ih, [], null, null),
						(l()(), Nt(14, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(15, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(17, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(18, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(20, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(21, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(23, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(24, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(26, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(27, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(29, 0, null, null, 16, 'section', [['aria-label', 'button column group'], ['class', 'btn-group-col'], ['role', 'group']], null, null, null, ed, ud)),
						xr(30, 114688, null, 0, Ih, [], null, null),
						(l()(), Nt(31, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(32, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(34, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(35, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(37, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(38, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(40, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(41, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(43, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(44, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(46, 0, null, null, 16, 'section', [['aria-label', 'button full row group'], ['class', 'btn-group-full'], ['role', 'group']], null, null, null, ed, ud)),
						xr(47, 114688, null, 0, Ih, [], null, null),
						(l()(), Nt(48, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(49, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(51, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(52, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(54, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(55, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(57, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(58, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(60, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(61, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(63, 0, null, null, 251, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(64, 0, null, null, 250, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<section '])),
						(l()(), Nt(66, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(70, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-group-row"'])),
						(l()(), Gr(-1, null, [' role='])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"group"'])),
						(l()(), Gr(-1, null, [' aria-label='])),
						(l()(), Nt(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button row group"'])),
						(l()(), Gr(-1, null, ['>\n    <button '])),
						(l()(), Nt(79, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(80, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(86, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(87, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(93, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(94, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(97, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(100, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(101, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(104, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(107, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(108, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(111, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(114, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(118, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(121, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(122, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(125, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(128, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(129, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(135, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(136, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(139, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(142, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(143, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(146, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), Nt(149, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(150, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(153, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-group-col"'])),
						(l()(), Gr(-1, null, [' role='])),
						(l()(), Nt(156, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"group"'])),
						(l()(), Gr(-1, null, [' aria-label='])),
						(l()(), Nt(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button column group"'])),
						(l()(), Gr(-1, null, ['>\n    <button '])),
						(l()(), Nt(162, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(163, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(166, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(169, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(170, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(173, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(176, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(177, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(180, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(183, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(184, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(187, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(190, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(191, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(194, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(197, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(198, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(201, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(204, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(205, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(208, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(211, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(212, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(215, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(218, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(219, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(222, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(225, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(226, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(229, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), Nt(232, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(233, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(236, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-group-full"'])),
						(l()(), Gr(-1, null, [' role='])),
						(l()(), Nt(239, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"group"'])),
						(l()(), Gr(-1, null, [' aria-label='])),
						(l()(), Nt(242, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button full row group"'])),
						(l()(), Gr(-1, null, ['>\n    <button '])),
						(l()(), Nt(245, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(246, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(249, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(252, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(253, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(256, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(259, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(260, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(263, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(266, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(267, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(270, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(273, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(274, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(277, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(280, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(281, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(284, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(287, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(288, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(291, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(294, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(295, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(298, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n    <button '])),
						(l()(), Nt(301, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(302, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(305, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(308, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(309, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(312, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n</section>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 116, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Rounded'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Buttons are rounded by adding a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.rounded'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(9, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 2, 'button', [['class', 'btn-xs rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(13, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['xs'])),
						(l()(), Nt(15, 0, null, null, 2, 'button', [['class', 'btn-sm rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(16, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['sm'])),
						(l()(), Nt(18, 0, null, null, 2, 'button', [['class', 'btn-md rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(19, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['md'])),
						(l()(), Nt(21, 0, null, null, 2, 'button', [['class', 'btn-lg rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(22, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['lg'])),
						(l()(), Nt(24, 0, null, null, 2, 'button', [['class', 'btn-xl rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(25, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['xl'])),
						(l()(), Nt(27, 0, null, null, 2, 'button', [['class', 'btn-full rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, ed, ud)),
						xr(28, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['full'])),
						(l()(), Nt(30, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(31, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<button '])),
						(l()(), Nt(33, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(37, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(40, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(41, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(44, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>xs</button>\n<button '])),
						(l()(), Nt(47, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(48, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(54, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>sm</button>\n<button '])),
						(l()(), Nt(61, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(68, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(69, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(72, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>md</button>\n<button '])),
						(l()(), Nt(75, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(76, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(82, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>lg</button>\n<button '])),
						(l()(), Nt(89, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(90, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(96, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(97, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(100, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>xl</button>\n<button '])),
						(l()(), Nt(103, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(104, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(107, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-full rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(110, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(114, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, ['>full</button>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 31, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['State'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Buttons are disabled by adding a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['disabled'])),
						(l()(), Gr(-1, null, [' attribute.'])),
						(l()(), Nt(9, 0, null, null, 5, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 2, 'button', [['class', 'btn-md'], ['disabled', ''], ['type', 'button']], null, null, null, ed, ud)),
						xr(13, 114688, null, 0, Ih, [], null, null),
						(l()(), Gr(-1, 0, ['disabled'])),
						(l()(), Nt(15, 0, null, null, 16, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 15, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<button '])),
						(l()(), Nt(18, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(19, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(22, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"btn-md"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(25, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(29, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"button"'])),
						(l()(), Gr(-1, null, [' disabled>disabled</button>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Bd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function qd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Accordion'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Gd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Expand'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Zd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Qd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Background'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Wd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Border'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Kd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Hover'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Yd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Text'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Jd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function $d(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 201, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['In order for flexbox to work, a parent container must have a '])),
						(l()(), Nt(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.row[-full]'])),
						(l()(), Gr(-1, null, [' or '])),
						(l()(), Nt(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.col[-full]'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(10, 0, null, null, 22, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(11, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(12, { flexbox: 0, box: 1 }),
						(l()(), Nt(13, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(14, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['row'])),
						(l()(), Nt(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['row'])),
						(l()(), Nt(18, 0, null, null, 4, 'ul', [['class', 'row-full']], null, null, null, null, null)),
						(l()(), Nt(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['full row'])),
						(l()(), Nt(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['full row'])),
						(l()(), Nt(23, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['column'])),
						(l()(), Nt(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['column'])),
						(l()(), Nt(28, 0, null, null, 4, 'ul', [['class', 'col-full']], null, null, null, null, null)),
						(l()(), Nt(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['full column'])),
						(l()(), Nt(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['full column'])),
						(l()(), Nt(33, 0, null, null, 168, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(34, 0, null, null, 167, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(35, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(37, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(40, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(43, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(47, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(49, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['row'])),
						(l()(), Nt(53, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(55, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(59, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(61, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['row'])),
						(l()(), Nt(65, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(71, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(77, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(79, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(82, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(85, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row-full"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(89, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(91, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['full row'])),
						(l()(), Nt(95, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(97, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(101, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(103, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['full row'])),
						(l()(), Nt(107, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(109, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(113, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(115, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(119, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(121, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(124, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(127, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(131, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(133, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['column'])),
						(l()(), Nt(137, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(139, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(143, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(145, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['column'])),
						(l()(), Nt(149, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(151, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(155, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(157, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(161, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(163, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(166, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(169, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col-full"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(173, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(175, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['full column'])),
						(l()(), Nt(179, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(181, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(185, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(187, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['full column'])),
						(l()(), Nt(191, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(193, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(197, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(199, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Xd(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 485, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Container Column'])),
						(l()(), Nt(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use an '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), Gr(-1, null, [' class to align ALL items in a '])),
						(l()(), Nt(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.col'])),
						(l()(), Gr(-1, null, [' flex container.'])),
						(l()(), Nt(12, 0, null, null, 52, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(13, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(14, { flexbox: 0, box: 1 }),
						(l()(), Nt(15, 0, null, null, 4, 'ul', [['class', 'col align-l']], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(20, 0, null, null, 4, 'ul', [['class', 'col align-c']], null, null, null, null, null)),
						(l()(), Nt(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(25, 0, null, null, 4, 'ul', [['class', 'col align-r']], null, null, null, null, null)),
						(l()(), Nt(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(30, 0, null, null, 4, 'ul', [['class', 'col align-t']], null, null, null, null, null)),
						(l()(), Nt(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(35, 0, null, null, 4, 'ul', [['class', 'col align-m']], null, null, null, null, null)),
						(l()(), Nt(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(40, 0, null, null, 4, 'ul', [['class', 'col align-b']], null, null, null, null, null)),
						(l()(), Nt(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(43, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(45, 0, null, null, 4, 'ul', [['class', 'col align-cm']], null, null, null, null, null)),
						(l()(), Nt(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(48, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(50, 0, null, null, 4, 'ul', [['class', 'col align-sa']], null, null, null, null, null)),
						(l()(), Nt(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(53, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(55, 0, null, null, 4, 'ul', [['class', 'col align-sb']], null, null, null, null, null)),
						(l()(), Nt(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(58, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(60, 0, null, null, 4, 'ul', [['class', 'col align-st']], null, null, null, null, null)),
						(l()(), Nt(61, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(63, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(65, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(66, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(67, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(69, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(72, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(75, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-l"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(79, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(81, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(85, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(87, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(91, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(93, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(97, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(99, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(103, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(105, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(109, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(111, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(114, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(117, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-c"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(121, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(123, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(127, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(129, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(133, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(135, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(139, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(141, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(145, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(147, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(151, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(153, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(156, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-r"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(163, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(165, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(169, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(171, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(175, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(177, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(181, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(183, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(187, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(189, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(193, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(195, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(198, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(201, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-t"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(205, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(207, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(211, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(213, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(217, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(219, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(223, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(225, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(229, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(231, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(235, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(237, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(240, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-m"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(247, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(249, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(253, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(255, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(259, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(261, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(265, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(267, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(271, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(273, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(277, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(279, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(282, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(285, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-b"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(289, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(291, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(295, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(297, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(301, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(303, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(307, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(309, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(313, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(315, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(319, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(321, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(324, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(327, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-cm"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(331, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(333, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(337, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(339, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(343, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(345, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(349, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(351, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(355, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(357, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(361, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(363, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(366, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(369, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-sa"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(373, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(375, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(379, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(381, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(385, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(387, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(391, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(393, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(397, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(399, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(403, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(405, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(408, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(411, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-sb"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(415, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(417, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(421, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(423, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(427, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(429, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(433, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(435, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(439, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(441, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(445, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(447, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(450, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(453, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col align-st"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(457, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(459, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(463, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(465, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(469, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(471, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(475, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(477, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(481, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(483, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 485, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Container Row'])),
						(l()(), Nt(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use an '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), Gr(-1, null, [' class to align ALL items in a '])),
						(l()(), Nt(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.row'])),
						(l()(), Gr(-1, null, [' flex container.'])),
						(l()(), Nt(12, 0, null, null, 52, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(13, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(14, { flexbox: 0, box: 1 }),
						(l()(), Nt(15, 0, null, null, 4, 'ul', [['class', 'row align-l']], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(20, 0, null, null, 4, 'ul', [['class', 'row align-c']], null, null, null, null, null)),
						(l()(), Nt(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(25, 0, null, null, 4, 'ul', [['class', 'row align-r']], null, null, null, null, null)),
						(l()(), Nt(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(30, 0, null, null, 4, 'ul', [['class', 'row align-t']], null, null, null, null, null)),
						(l()(), Nt(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(35, 0, null, null, 4, 'ul', [['class', 'row align-m']], null, null, null, null, null)),
						(l()(), Nt(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(40, 0, null, null, 4, 'ul', [['class', 'row align-b']], null, null, null, null, null)),
						(l()(), Nt(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(43, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(45, 0, null, null, 4, 'ul', [['class', 'row align-cm']], null, null, null, null, null)),
						(l()(), Nt(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(48, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(50, 0, null, null, 4, 'ul', [['class', 'row align-sa']], null, null, null, null, null)),
						(l()(), Nt(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(53, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(55, 0, null, null, 4, 'ul', [['class', 'row align-sb']], null, null, null, null, null)),
						(l()(), Nt(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(58, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(60, 0, null, null, 4, 'ul', [['class', 'row align-st']], null, null, null, null, null)),
						(l()(), Nt(61, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(63, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(65, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(66, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(67, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(69, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(72, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(75, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-l"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(79, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(81, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(85, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(87, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(91, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(93, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(97, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(99, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(103, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(105, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(109, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(111, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(114, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(117, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-c"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(121, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(123, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(127, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(129, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(133, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(135, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(139, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(141, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(145, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(147, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(151, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(153, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(156, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-r"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(163, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(165, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(169, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(171, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(175, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(177, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(181, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(183, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(187, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(189, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(193, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(195, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(198, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(201, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-t"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(205, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(207, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(211, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(213, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(217, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(219, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(223, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(225, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(229, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(231, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(235, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(237, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(240, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-m"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(247, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(249, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(253, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(255, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(259, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(261, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(265, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(267, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(271, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(273, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(277, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(279, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(282, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(285, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-b"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(289, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(291, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(295, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(297, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(301, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(303, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(307, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(309, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(313, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(315, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(319, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(321, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(324, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(327, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-cm"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(331, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(333, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(337, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(339, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(343, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(345, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(349, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(351, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(355, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(357, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(361, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(363, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(366, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(369, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-sa"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(373, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(375, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(379, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(381, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(385, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(387, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(391, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(393, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(397, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(399, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(403, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(405, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(408, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(411, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-sb"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(415, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(417, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(421, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(423, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(427, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(429, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(433, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(435, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(439, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(441, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(445, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(447, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(450, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(453, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row align-st"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(457, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(459, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(463, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(465, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(469, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(471, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(475, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(477, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(481, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(483, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 439, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item Column'])),
						(l()(), Nt(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), Gr(-1, null, [' classes to align ONE child in a '])),
						(l()(), Nt(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.col'])),
						(l()(), Gr(-1, null, [' flex container.'])),
						(l()(), Nt(12, 0, null, null, 42, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(13, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(14, { flexbox: 0, box: 1 }),
						(l()(), Nt(15, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(18, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(20, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(23, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(25, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(28, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(30, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(33, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(35, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(38, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(40, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(43, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(45, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(48, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(50, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(53, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(55, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(56, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(57, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(59, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(62, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(69, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(71, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(75, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(77, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(81, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-l"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(93, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(95, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(99, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(101, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(105, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(107, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(110, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(113, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(117, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(119, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(123, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(125, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(129, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(131, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(134, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(137, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-c"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(141, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(143, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(147, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(149, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(153, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(155, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(158, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(161, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(165, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(167, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(171, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(173, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(177, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(179, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(182, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(185, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-r"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(189, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(191, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(195, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(197, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(201, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(203, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(206, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(209, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(213, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(215, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(219, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(221, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(225, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(227, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(230, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(233, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-t"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(237, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(239, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(243, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(245, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(249, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(251, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(254, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(257, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(261, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(263, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(267, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(269, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(273, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(275, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(278, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(281, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-m"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(285, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(287, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(291, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(293, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(297, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(299, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(302, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(305, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(309, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(311, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(315, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(317, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(321, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(323, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(326, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(329, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-b"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(333, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(335, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(339, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(341, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(345, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(347, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(350, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(353, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(357, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(359, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(363, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(365, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(369, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(371, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(374, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(377, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-cm"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(381, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(383, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(387, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(389, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(393, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(395, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(398, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(401, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(405, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(407, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(411, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(413, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(417, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(419, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(422, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(425, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-st"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(429, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(431, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(435, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(437, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function uf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 84, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item Order'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.item-order-[1 - 12]'])),
						(l()(), Gr(-1, null, [' classes to align children in a flex container.'])),
						(l()(), Nt(9, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(13, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['1'])),
						(l()(), Nt(15, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['2'])),
						(l()(), Nt(17, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(18, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['1'])),
						(l()(), Nt(20, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['2'])),
						(l()(), Nt(22, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(23, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<ul '])),
						(l()(), Nt(25, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(28, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>\n    <'])),
						(l()(), Nt(31, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(37, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-order-2"'])),
						(l()(), Gr(-1, null, ['>1</'])),
						(l()(), Nt(40, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n    <'])),
						(l()(), Nt(43, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-order-1"'])),
						(l()(), Gr(-1, null, ['>2</'])),
						(l()(), Nt(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n</ul>\n<ul '])),
						(l()(), Nt(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>\n    <'])),
						(l()(), Nt(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-order-2"'])),
						(l()(), Gr(-1, null, ['>1</'])),
						(l()(), Nt(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n    <'])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(76, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-order-1"'])),
						(l()(), Gr(-1, null, ['>2</'])),
						(l()(), Nt(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n</ul>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function ef(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 439, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item Row'])),
						(l()(), Nt(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use an '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), Gr(-1, null, [' class to align ONE child in a '])),
						(l()(), Nt(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.row'])),
						(l()(), Gr(-1, null, [' flex container.'])),
						(l()(), Nt(12, 0, null, null, 42, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(13, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(14, { flexbox: 0, box: 1 }),
						(l()(), Nt(15, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(18, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(20, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(23, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(25, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(28, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(30, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(33, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(35, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(36, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(38, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(40, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(43, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(45, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(48, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(50, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(53, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(55, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(56, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(57, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(59, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(62, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(69, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(71, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(75, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(77, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(81, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-l"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(93, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(95, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(99, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(101, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(105, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(107, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(110, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(113, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(117, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(119, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(123, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(125, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(129, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(131, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(134, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(137, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-c"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(141, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(143, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(147, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(149, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(153, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(155, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(158, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(161, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(165, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(167, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(171, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(173, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(177, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(179, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(182, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(185, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-r"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(189, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(191, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(195, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(197, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(201, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(203, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(206, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(209, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(213, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(215, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(219, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(221, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(225, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(227, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(230, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(233, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-t"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(237, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(239, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(243, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(245, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(249, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(251, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(254, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(257, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(261, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(263, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(267, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(269, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(273, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(275, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(278, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(281, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-m"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(285, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(287, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(291, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(293, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(297, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(299, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(302, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(305, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(309, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(311, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(315, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(317, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(321, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(323, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(326, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(329, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-b"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(333, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(335, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(339, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(341, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(345, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(347, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(350, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(353, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(357, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(359, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(363, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(365, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(369, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(371, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(374, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(377, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-cm"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center middle'])),
						(l()(), Nt(381, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(383, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(387, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(389, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(393, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(395, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(398, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(401, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(405, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(407, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(411, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(413, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(417, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(419, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(422, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(425, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-st"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(429, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(431, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(435, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(437, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function tf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 330, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item Size'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.item-[g || s || gs]-[1 - 12]'])),
						(l()(), Gr(-1, null, [' classes to grow and/or shrink children in a flex container.'])),
						(l()(), Nt(9, 0, null, null, 32, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(13, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(15, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['grow'])),
						(l()(), Nt(17, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(20, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['shrink'])),
						(l()(), Nt(22, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Nt(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(25, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['grow & shrink'])),
						(l()(), Nt(27, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(30, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['grow'])),
						(l()(), Nt(32, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(35, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['shrink'])),
						(l()(), Nt(37, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Nt(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(40, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['grow & shrink'])),
						(l()(), Nt(42, 0, null, null, 288, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(43, 0, null, null, 287, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(44, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(46, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(49, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(52, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(56, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(58, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(62, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(64, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(68, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(70, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-g-1"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['grow'])),
						(l()(), Nt(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(82, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(88, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(92, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(94, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(97, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(100, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(106, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(110, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(112, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(116, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(118, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(121, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(124, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-s-1"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['shrink'])),
						(l()(), Nt(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(130, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(136, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(140, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(142, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(145, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(148, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(152, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(154, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(158, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(160, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(164, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(166, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(169, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(172, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-gs-1"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['grow &amp; shrink'])),
						(l()(), Nt(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(178, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(184, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(188, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(190, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(193, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(196, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(200, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(202, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(208, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(212, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(214, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(217, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(220, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-g-1"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['grow'])),
						(l()(), Nt(224, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(226, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(230, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(232, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(236, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(238, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(241, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(244, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(250, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(256, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(260, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(262, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(265, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(268, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-s-1"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['shrink'])),
						(l()(), Nt(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(274, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(278, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(280, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(284, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(286, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(289, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(292, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(298, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['default'])),
						(l()(), Nt(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(304, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(308, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(310, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(313, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(316, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"item-gs-1"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['grow &amp; shrink'])),
						(l()(), Nt(320, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(322, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(326, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(328, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function rf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 381, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Wrap Column'])),
						(l()(), Nt(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.wrap-[c || l || r || sa || sb || st]'])),
						(l()(), Gr(-1, null, [' class to align multi-column items in a '])),
						(l()(), Nt(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.col'])),
						(l()(), Gr(-1, null, [' flex container.'])),
						(l()(), Nt(12, 0, null, null, 44, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(13, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(14, { flexbox: 0, box: 1 }),
						(l()(), Nt(15, 0, null, null, 6, 'ul', [['class', 'col wrap-c']], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(20, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(22, 0, null, null, 6, 'ul', [['class', 'col wrap-l']], null, null, null, null, null)),
						(l()(), Nt(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(25, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(29, 0, null, null, 6, 'ul', [['class', 'col wrap-r']], null, null, null, null, null)),
						(l()(), Nt(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(36, 0, null, null, 6, 'ul', [['class', 'col wrap-sa']], null, null, null, null, null)),
						(l()(), Nt(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(43, 0, null, null, 6, 'ul', [['class', 'col wrap-sb']], null, null, null, null, null)),
						(l()(), Nt(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(48, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(50, 0, null, null, 6, 'ul', [['class', 'col wrap-st']], null, null, null, null, null)),
						(l()(), Nt(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(53, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(55, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(57, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(58, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(59, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(61, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(64, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col wrap-c"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(71, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(77, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(79, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(83, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(85, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(89, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(91, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(95, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(97, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['center'])),
						(l()(), Nt(101, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(103, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(107, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(109, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(113, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(115, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(118, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(121, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col wrap-l"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(125, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(127, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(131, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(133, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(137, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(139, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(143, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(145, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(149, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(151, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['left (default)'])),
						(l()(), Nt(155, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(157, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(161, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(163, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(167, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(169, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(172, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(175, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col wrap-r"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(179, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(181, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(185, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(187, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(191, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(193, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(197, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(199, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(203, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(205, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Nt(209, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(211, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(215, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(217, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(221, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(223, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(226, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(229, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col wrap-sa"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(233, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(235, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(239, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(241, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(245, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(247, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(251, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(253, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(257, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(259, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(263, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(265, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(269, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(271, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(275, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(277, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(280, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(283, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col wrap-sb"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(287, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(289, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(293, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(295, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(299, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(301, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(305, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(307, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(311, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(313, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(317, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(319, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(323, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(325, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(329, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(331, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(334, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(337, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"col wrap-st"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(341, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(343, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(347, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(349, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(353, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(355, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(359, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(361, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(365, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(367, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(371, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(373, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(377, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(379, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 381, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Wrap Row'])),
						(l()(), Nt(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.wrap-[m || t || b || sa || sb || st]'])),
						(l()(), Gr(-1, null, [' class to align multi-row items in a '])),
						(l()(), Nt(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.row'])),
						(l()(), Gr(-1, null, [' flex container.'])),
						(l()(), Nt(12, 0, null, null, 44, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(13, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(14, { flexbox: 0, box: 1 }),
						(l()(), Nt(15, 0, null, null, 6, 'ul', [['class', 'row wrap-m']], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(18, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(20, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(22, 0, null, null, 6, 'ul', [['class', 'row wrap-t']], null, null, null, null, null)),
						(l()(), Nt(23, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(25, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(29, 0, null, null, 6, 'ul', [['class', 'row wrap-b']], null, null, null, null, null)),
						(l()(), Nt(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(36, 0, null, null, 6, 'ul', [['class', 'row wrap-sa']], null, null, null, null, null)),
						(l()(), Nt(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(41, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(43, 0, null, null, 6, 'ul', [['class', 'row wrap-sb']], null, null, null, null, null)),
						(l()(), Nt(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(46, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(48, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(50, 0, null, null, 6, 'ul', [['class', 'row wrap-st']], null, null, null, null, null)),
						(l()(), Nt(51, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(53, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(55, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(57, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(58, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(59, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(61, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(64, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row wrap-m"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(71, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(77, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(79, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(83, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(85, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(89, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(91, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(95, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(97, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['middle'])),
						(l()(), Nt(101, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(103, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(107, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(109, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(113, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(115, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(118, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(121, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row wrap-t"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(125, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(127, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(131, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(133, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(137, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(139, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(143, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(145, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(149, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(151, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['top (default)'])),
						(l()(), Nt(155, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(157, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(161, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(163, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(167, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(169, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(172, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(175, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row wrap-b"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(179, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(181, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(185, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(187, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(191, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(193, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(197, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(199, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(203, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(205, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Nt(209, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(211, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(215, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(217, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(221, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(223, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(226, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(229, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row wrap-sa"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(233, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(235, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(239, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(241, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(245, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(247, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(251, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(253, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(257, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(259, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space around'])),
						(l()(), Nt(263, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(265, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(269, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(271, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(275, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(277, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(280, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(283, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row wrap-sb"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(287, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(289, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(293, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(295, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(299, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(301, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(305, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(307, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(311, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(313, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['space between'])),
						(l()(), Nt(317, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(319, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(323, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(325, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(329, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(331, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(334, 0, null, null, 1, 'span', [['class', 'hljs-attr']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(337, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"row wrap-st"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(341, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(343, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(347, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(349, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(353, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(355, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(359, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(361, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n    '])),
						(l()(), Nt(365, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(367, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['stretch'])),
						(l()(), Nt(371, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(373, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n'])),
						(l()(), Nt(377, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(379, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['ul'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function af(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 97, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 14, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 13, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Forms are styled with '])),
						(l()(), Nt(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.form-group'])),
						(l()(), Gr(-1, null, [', '])),
						(l()(), Nt(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.field-group'])),
						(l()(), Gr(-1, null, [', '])),
						(l()(), Nt(10, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.form-label'])),
						(l()(), Gr(-1, null, [', '])),
						(l()(), Nt(13, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.form-field'])),
						(l()(), Gr(-1, null, [' classes.'])),
						(l()(), Nt(16, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(17, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(18, { flexbox: 0, box: 1 }),
						(l()(), Nt(19, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Nt(20, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						xr(21, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(22, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(23, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(24, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						xr(25, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Name'])),
						(l()(), Nt(27, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						xr(28, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(29, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(30, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>\n    <ul '])),
						(l()(), Nt(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-group"'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(41, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(47, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(50, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(62, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, ['>Name</'])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter name"'])),
						(l()(), Gr(-1, null, ['>\n        </'])),
						(l()(), Nt(92, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Nt(95, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 18, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 17, 0, 'pad-a-sm', e), l(n, 21, 0), l(n, 23, 0), l(n, 25, 0), l(n, 28, 0);
					},
					null
				);
			}
			function of(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 503, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Checkbox'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Checkboxes and radio buttons are grouped with a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.*-group'])),
						(l()(), Gr(-1, null, [' class on a parent container.'])),
						(l()(), Nt(9, 0, null, null, 68, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 65, 'form', [], null, null, null, null, null)),
						(l()(), Nt(13, 0, null, null, 64, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						xr(14, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(15, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(16, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(17, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						xr(18, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Name'])),
						(l()(), Nt(20, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						xr(21, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(22, 0, null, 0, 20, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(23, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(24, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, rd, td)),
						xr(25, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Agree'])),
						(l()(), Nt(27, 0, null, 0, 15, 'ul', [['class', 'radio-group']], null, null, null, rd, td)),
						xr(28, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(29, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(30, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(31, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yes'], ['name', 'agree'], ['type', 'radio']], null, null, null, rd, td)),
						xr(32, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(33, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yes']], null, null, null, rd, td)),
						xr(34, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Yes'])),
						(l()(), Nt(36, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(37, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(38, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'no'], ['name', 'agree'], ['type', 'radio']], null, null, null, rd, td)),
						xr(39, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(40, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'no']], null, null, null, rd, td)),
						xr(41, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['No'])),
						(l()(), Nt(43, 0, null, 0, 34, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(44, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(45, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, rd, td)),
						xr(46, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Color'])),
						(l()(), Nt(48, 0, null, 0, 29, 'ul', [['class', 'checkbox-group']], null, null, null, rd, td)),
						xr(49, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(50, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(51, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(52, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'blue'], ['name', 'color'], ['type', 'checkbox']], null, null, null, rd, td)),
						xr(53, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(54, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'blue']], null, null, null, rd, td)),
						xr(55, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Blue'])),
						(l()(), Nt(57, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(58, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(59, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'green'], ['name', 'color'], ['type', 'checkbox']], null, null, null, rd, td)),
						xr(60, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(61, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'green']], null, null, null, rd, td)),
						xr(62, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Green'])),
						(l()(), Nt(64, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(65, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(66, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'red'], ['name', 'color'], ['type', 'checkbox']], null, null, null, rd, td)),
						xr(67, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(68, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'red']], null, null, null, rd, td)),
						xr(69, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Red'])),
						(l()(), Nt(71, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(72, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(73, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yellow'], ['name', 'color'], ['type', 'checkbox']], null, null, null, rd, td)),
						xr(74, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(75, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yellow']], null, null, null, rd, td)),
						xr(76, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Yellow'])),
						(l()(), Nt(78, 0, null, null, 425, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(79, 0, null, null, 424, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>\n    <ul '])),
						(l()(), Nt(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-group"'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(90, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(93, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(96, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(108, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(111, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, ['>Name</'])),
						(l()(), Nt(114, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(120, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(123, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(126, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(129, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(135, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(138, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter name"'])),
						(l()(), Gr(-1, null, ['>\n        </'])),
						(l()(), Nt(141, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(147, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(150, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <p '])),
						(l()(), Nt(153, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(156, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, ['>Agree</p>\n            <ul '])),
						(l()(), Nt(159, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(162, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"radio-group"'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(165, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(168, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(171, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(174, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(177, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(180, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(183, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(186, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"radio"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(189, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"agree"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(192, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"yes"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(195, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(198, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(201, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(204, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(207, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"yes"'])),
						(l()(), Gr(-1, null, ['>Yes</'])),
						(l()(), Nt(210, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n                </'])),
						(l()(), Nt(213, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(216, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(219, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(222, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(225, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(228, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(231, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(234, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(237, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"radio"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(240, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"agree"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"no"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(246, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(249, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(252, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(255, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(258, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"no"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(261, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['No'])),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(264, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n                </'])),
						(l()(), Nt(267, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), Nt(270, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(273, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(276, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(279, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <p '])),
						(l()(), Nt(282, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(285, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, ['>Color</p>\n            <ul '])),
						(l()(), Nt(288, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(291, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"checkbox-group"'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(294, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(297, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(300, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(303, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(306, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(309, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(312, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(315, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"checkbox"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(318, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"color"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(321, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"blue"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(324, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(327, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(330, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(333, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(336, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"blue"'])),
						(l()(), Gr(-1, null, ['>Blue</'])),
						(l()(), Nt(339, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n                </'])),
						(l()(), Nt(342, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(345, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(348, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(351, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(354, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(357, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(360, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(363, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(366, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"checkbox"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(369, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"color"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(372, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"green"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(375, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(378, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(381, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(384, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(387, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"green"'])),
						(l()(), Gr(-1, null, ['>Green</'])),
						(l()(), Nt(390, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n                </'])),
						(l()(), Nt(393, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(396, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(399, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(402, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(405, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(408, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(411, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(414, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(417, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"checkbox"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(420, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"color"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(423, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"red"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(426, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(429, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(432, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(435, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(438, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"red"'])),
						(l()(), Gr(-1, null, ['>Red</'])),
						(l()(), Nt(441, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n                </'])),
						(l()(), Nt(444, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(447, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(450, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(453, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(456, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(459, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(462, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(465, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(468, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"checkbox"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(471, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"color"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(474, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"yellow"'])),
						(l()(), Gr(-1, null, ['>\n                    <'])),
						(l()(), Nt(477, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(480, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(483, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(486, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(489, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"yellow"'])),
						(l()(), Gr(-1, null, ['>Yellow</'])),
						(l()(), Nt(492, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n                </'])),
						(l()(), Nt(495, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), Nt(498, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Nt(501, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>']))
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
			function cf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 183, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Field'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Form fields are styled with a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.form-field'])),
						(l()(), Gr(-1, null, [' class. Different styles are applied based on the form field.'])),
						(l()(), Nt(9, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 42, 'form', [], null, null, null, null, null)),
						(l()(), Nt(13, 0, null, null, 41, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						xr(14, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(15, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(16, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(17, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						xr(18, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Name'])),
						(l()(), Nt(20, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						xr(21, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(22, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(23, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(24, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'gender']], null, null, null, rd, td)),
						xr(25, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Gender'])),
						(l()(), Nt(27, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'gender'], ['name', 'gender']], null, null, null, rd, td)),
						xr(28, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(29, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Select'])),
						(l()(), Nt(31, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Female'])),
						(l()(), Nt(33, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Male'])),
						(l()(), Nt(35, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(36, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(37, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'language']], null, null, null, rd, td)),
						xr(38, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Language'])),
						(l()(), Nt(40, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'language'], ['multiple', ''], ['name', 'language']], null, null, null, rd, td)),
						xr(41, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(42, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['English'])),
						(l()(), Nt(44, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['French'])),
						(l()(), Nt(46, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Spanish'])),
						(l()(), Nt(48, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(49, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(50, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'notes']], null, null, null, rd, td)),
						xr(51, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Notes'])),
						(l()(), Nt(53, 0, null, 0, 1, 'textarea', [['class', 'form-field'], ['id', 'notes'], ['name', 'notes'], ['placeholder', 'Enter notes']], null, null, null, rd, td)),
						xr(54, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(55, 0, null, null, 128, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(56, 0, null, null, 127, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<form>\n    <ul '])),
						(l()(), Nt(58, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-group">\n        <li '])),
						(l()(), Nt(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="field-group">\n            <label '])),
						(l()(), Nt(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-label" '])),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['="name">'])),
						(l()(), Nt(70, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Name'])),
						(l()(), Gr(-1, null, ['</label>\n            <'])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(76, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-field" '])),
						(l()(), Nt(79, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['="text" id="name" '])),
						(l()(), Nt(82, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['name'])),
						(l()(), Gr(-1, null, ['="name" placeholder="Enter name">\n        </li>\n        <li '])),
						(l()(), Nt(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="field-group">\n            <label '])),
						(l()(), Nt(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-label" '])),
						(l()(), Nt(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['="gender">Gender</label>\n            <'])),
						(l()(), Nt(94, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['select'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(97, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-field" '])),
						(l()(), Nt(100, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['name'])),
						(l()(), Gr(-1, null, ['="gender" id="gender">\n                <'])),
						(l()(), Nt(103, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(106, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Select'])),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>Female</'])),
						(l()(), Nt(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>Male</'])),
						(l()(), Nt(121, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>\n            </'])),
						(l()(), Nt(124, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['select'])),
						(l()(), Gr(-1, null, ['>\n        </li>\n        <li '])),
						(l()(), Nt(127, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="field-group">\n            <label '])),
						(l()(), Nt(130, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-label" '])),
						(l()(), Nt(133, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['="language">'])),
						(l()(), Nt(136, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Language'])),
						(l()(), Gr(-1, null, ['</label>\n            <'])),
						(l()(), Nt(139, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['select'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(142, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-field" '])),
						(l()(), Nt(145, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['name'])),
						(l()(), Gr(-1, null, ['="language" id="language" multiple>\n                <'])),
						(l()(), Nt(148, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>English</'])),
						(l()(), Nt(151, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(154, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>French</'])),
						(l()(), Nt(157, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(160, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>Spanish</'])),
						(l()(), Nt(163, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['option'])),
						(l()(), Gr(-1, null, ['>\n            </'])),
						(l()(), Nt(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['select'])),
						(l()(), Gr(-1, null, ['>\n        </li>\n        <li '])),
						(l()(), Nt(169, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="field-group">\n            <label '])),
						(l()(), Nt(172, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-label" '])),
						(l()(), Nt(175, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['="notes">Notes</label>\n            <textarea '])),
						(l()(), Nt(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['="form-field" '])),
						(l()(), Nt(181, 0, null, null, 1, 'span', [['class', 'hljs-type']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['name'])),
						(l()(), Gr(-1, null, ['="notes" id="notes" placeholder="Enter notes"></textarea>\n        </li>\n    </ul>    \n</form>']))
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
			function pf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 90, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Field Group'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Field groups are styled with a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.field-group'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(9, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Nt(13, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						xr(14, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(15, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(16, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(17, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						xr(18, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Name'])),
						(l()(), Nt(20, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						xr(21, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(22, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(23, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(25, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>\n    <ul '])),
						(l()(), Nt(28, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(31, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-group"'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(37, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(40, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(43, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(55, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, ['>Name</'])),
						(l()(), Nt(58, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter name"'])),
						(l()(), Gr(-1, null, ['>\n        </'])),
						(l()(), Nt(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Nt(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 16, 0), l(n, 18, 0), l(n, 21, 0);
					},
					null
				);
			}
			function hf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 103, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Fieldset'])),
						(l()(), Nt(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Fieldsets are styled with a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.fieldset'])),
						(l()(), Gr(-1, null, [' class and have a '])),
						(l()(), Nt(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<legend>'])),
						(l()(), Gr(-1, null, [' tag as the first child.'])),
						(l()(), Nt(12, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(13, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(14, { flexbox: 0, box: 1 }),
						(l()(), Nt(15, 0, null, null, 13, 'form', [], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 12, 'fieldset', [['class', 'fieldset']], null, null, null, rd, td)),
						xr(17, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(18, 0, null, 0, 1, 'legend', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Contact'])),
						(l()(), Nt(20, 0, null, 0, 8, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						xr(21, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(22, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(23, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(24, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						xr(25, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Name'])),
						(l()(), Nt(27, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						xr(28, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(29, 0, null, null, 74, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(30, 0, null, null, 73, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>\n    <fieldset '])),
						(l()(), Nt(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"fieldset"'])),
						(l()(), Gr(-1, null, ['>\n        <legend>Contact</legend>\n        <ul '])),
						(l()(), Nt(41, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(44, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(50, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(53, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(62, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, ['>Name</'])),
						(l()(), Nt(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n                <'])),
						(l()(), Nt(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(89, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(95, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter name"'])),
						(l()(), Gr(-1, null, ['>\n            </'])),
						(l()(), Nt(98, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n        </ul>\n    </fieldset>    \n</'])),
						(l()(), Nt(101, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 14, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 13, 0, 'pad-a-sm', e), l(n, 17, 0), l(n, 21, 0), l(n, 23, 0), l(n, 25, 0), l(n, 28, 0);
					},
					null
				);
			}
			function df(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 284, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Form Group'])),
						(l()(), Nt(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Form groups are styled with a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.form-group'])),
						(l()(), Gr(-1, null, [' class for vertical fields and '])),
						(l()(), Nt(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.form-group-inline'])),
						(l()(), Gr(-1, null, [' for horizontal fields.'])),
						(l()(), Nt(12, 0, null, null, 35, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(13, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(14, { flexbox: 0, box: 1 }),
						(l()(), Nt(15, 0, null, null, 32, 'form', [], null, null, null, null, null)),
						(l()(), Nt(16, 0, null, null, 15, 'ul', [['class', 'form-group-inline']], null, null, null, rd, td)),
						xr(17, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(18, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(19, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(20, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						xr(21, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Name'])),
						(l()(), Nt(23, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						xr(24, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(25, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(26, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(27, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, rd, td)),
						xr(28, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Email'])),
						(l()(),
						Nt(30, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, rd, td)),
						xr(31, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(32, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						xr(33, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(34, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(35, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(36, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						xr(37, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Name'])),
						(l()(), Nt(39, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						xr(40, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(41, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(42, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(43, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, rd, td)),
						xr(44, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Email'])),
						(l()(),
						Nt(46, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, rd, td)),
						xr(47, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(48, 0, null, null, 236, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(49, 0, null, null, 235, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(51, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>\n    <ul '])),
						(l()(), Nt(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(57, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-group-inline"'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(60, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(69, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(75, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(78, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, ['>Name</'])),
						(l()(), Nt(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(87, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(90, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(99, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(102, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter name"'])),
						(l()(), Gr(-1, null, ['>\n        </'])),
						(l()(), Nt(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(114, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(120, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(126, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(129, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(132, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(135, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"email"'])),
						(l()(), Gr(-1, null, ['>Email</'])),
						(l()(), Nt(138, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(141, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(147, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(150, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(153, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(156, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"email"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(159, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"email"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(162, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter email"'])),
						(l()(), Gr(-1, null, ['>\n        </'])),
						(l()(), Nt(165, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n    </ul>    \n    <ul '])),
						(l()(), Nt(168, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(171, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-group"'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(174, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(177, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(180, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(183, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(186, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(189, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(192, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(195, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, ['>Name</'])),
						(l()(), Nt(198, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(201, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(204, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(207, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(210, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(213, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(216, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(219, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(222, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter name"'])),
						(l()(), Gr(-1, null, ['>\n        </'])),
						(l()(), Nt(225, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(228, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(231, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(234, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(237, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(240, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(246, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(249, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"email"'])),
						(l()(), Gr(-1, null, ['>Email</'])),
						(l()(), Nt(252, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(255, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(258, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(261, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(264, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(267, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(270, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"email"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(273, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"email"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(276, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter email"'])),
						(l()(), Gr(-1, null, ['>\n        </'])),
						(l()(), Nt(279, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Nt(282, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>']))
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
			function ff(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 90, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Label'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Form labels are styled with a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.form-label'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(9, 0, null, null, 12, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Nt(13, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, rd, td)),
						xr(14, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(15, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, rd, td)),
						xr(16, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(17, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, rd, td)),
						xr(18, 114688, null, 0, Rh, [], null, null),
						(l()(), Gr(-1, 0, ['Name'])),
						(l()(), Nt(20, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, rd, td)),
						xr(21, 114688, null, 0, Rh, [], null, null),
						(l()(), Nt(22, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(23, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(25, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>\n    <ul '])),
						(l()(), Nt(28, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(31, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-group"'])),
						(l()(), Gr(-1, null, ['>\n        <'])),
						(l()(), Nt(34, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(37, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(40, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"field-group"'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(43, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(46, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(49, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-label"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['for'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(55, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, ['>Name</'])),
						(l()(), Nt(58, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['label'])),
						(l()(), Gr(-1, null, ['>\n            <'])),
						(l()(), Nt(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['input'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"form-field"'])),
						(l()(), Gr(-1, null, [' '])),
						(l()(), Nt(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['type'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"text"'])),
						(l()(), Gr(-1, null, [' id='])),
						(l()(), Nt(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' name='])),
						(l()(), Nt(79, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"name"'])),
						(l()(), Gr(-1, null, [' placeholder='])),
						(l()(), Nt(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"Enter name"'])),
						(l()(), Gr(-1, null, ['>\n        </'])),
						(l()(), Nt(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['li'])),
						(l()(), Gr(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Nt(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['form'])),
						(l()(), Gr(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 11, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 10, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 16, 0), l(n, 18, 0), l(n, 21, 0);
					},
					null
				);
			}
			function gf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function mf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Area'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function bf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Container'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function yf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Item'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function vf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function wf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Container'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function jf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Sticky Footer'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function _f(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function xf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function kf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Items'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Cf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Links'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Sf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Placement'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ef(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function If(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Pf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Of(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.']))
					],
					null,
					null
				);
			}
			function Tf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 88, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Margin'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), Gr(-1, null, [' class to add margin to an element.'])),
						(l()(), Nt(9, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 1, 'p', [['class', 'mar-t-xs']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top extra small'])),
						(l()(), Nt(14, 0, null, null, 1, 'p', [['class', 'mar-r-sm']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right small'])),
						(l()(), Nt(16, 0, null, null, 1, 'p', [['class', 'mar-b-md']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom medium'])),
						(l()(), Nt(18, 0, null, null, 1, 'p', [['class', 'mar-l-lg']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left large'])),
						(l()(), Nt(20, 0, null, null, 1, 'p', [['class', 'mar-tb-xl']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top bottom extra large'])),
						(l()(), Nt(22, 0, null, null, 1, 'p', [['class', 'mar-lr-md']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left right medium'])),
						(l()(), Nt(24, 0, null, null, 1, 'p', [['class', 'mar-a-md']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['all medium'])),
						(l()(), Nt(26, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(27, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(29, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"mar-t-xs"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(35, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top'])),
						(l()(), Gr(-1, null, [' extra small</p>\n<'])),
						(l()(), Nt(38, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"mar-r-sm"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(44, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Gr(-1, null, [' small</p>\n<'])),
						(l()(), Nt(47, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"mar-b-md"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(53, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Gr(-1, null, [' medium</p>\n<'])),
						(l()(), Nt(56, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"mar-l-lg"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(62, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left'])),
						(l()(), Gr(-1, null, [' large</p>\n<'])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"mar-tb-xl"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(71, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top'])),
						(l()(), Gr(-1, null, [' bottom extra large</p>\n<'])),
						(l()(), Nt(74, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"mar-lr-md"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(80, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left'])),
						(l()(), Gr(-1, null, [' right medium</p>\n<'])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"mar-a-md"'])),
						(l()(), Gr(-1, null, ['>all medium</p>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 88, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Padding'])),
						(l()(), Nt(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Use a '])),
						(l()(), Nt(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), Gr(-1, null, [' class to add padding to an element.'])),
						(l()(), Nt(9, 0, null, null, 16, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(10, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(11, { flexbox: 0, box: 1 }),
						(l()(), Nt(12, 0, null, null, 1, 'p', [['class', 'pad-t-xs']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top extra small'])),
						(l()(), Nt(14, 0, null, null, 1, 'p', [['class', 'pad-r-sm']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right small'])),
						(l()(), Nt(16, 0, null, null, 1, 'p', [['class', 'pad-b-md']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom medium'])),
						(l()(), Nt(18, 0, null, null, 1, 'p', [['class', 'pad-l-lg']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left large'])),
						(l()(), Nt(20, 0, null, null, 1, 'p', [['class', 'pad-tb-xl']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top bottom extra large'])),
						(l()(), Nt(22, 0, null, null, 1, 'p', [['class', 'pad-lr-md']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left right medium'])),
						(l()(), Nt(24, 0, null, null, 1, 'p', [['class', 'pad-a-md']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['all medium'])),
						(l()(), Nt(26, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(27, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<'])),
						(l()(), Nt(29, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"pad-t-xs"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(35, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top'])),
						(l()(), Gr(-1, null, [' extra small</p>\n<'])),
						(l()(), Nt(38, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"pad-r-sm"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(44, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['right'])),
						(l()(), Gr(-1, null, [' small</p>\n<'])),
						(l()(), Nt(47, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"pad-b-md"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(53, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['bottom'])),
						(l()(), Gr(-1, null, [' medium</p>\n<'])),
						(l()(), Nt(56, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"pad-l-lg"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(62, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left'])),
						(l()(), Gr(-1, null, [' large</p>\n<'])),
						(l()(), Nt(65, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"pad-tb-xl"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(71, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['top'])),
						(l()(), Gr(-1, null, [' bottom extra large</p>\n<'])),
						(l()(), Nt(74, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"pad-lr-md"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(80, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['left'])),
						(l()(), Gr(-1, null, [' right medium</p>\n<'])),
						(l()(), Nt(83, 0, null, null, 1, 'span', [['class', 'hljs-selector-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, [' class='])),
						(l()(), Nt(86, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"pad-a-md"'])),
						(l()(), Gr(-1, null, ['>all medium</p>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 43, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Spinners are styled with a '])),
						(l()(), Nt(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['.spinner[-dotted]'])),
						(l()(), Gr(-1, null, [' class.'])),
						(l()(), Nt(7, 0, null, null, 6, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						xr(8, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(9, { flexbox: 0, box: 1 }),
						(l()(), Nt(10, 0, null, null, 1, 'p', [['class', 'spinner']], null, null, null, ad, sd)),
						xr(11, 114688, null, 0, Fh, [], null, null),
						(l()(), Nt(12, 0, null, null, 1, 'p', [['class', 'spinner-dotted']], null, null, null, ad, sd)),
						xr(13, 114688, null, 0, Fh, [], null, null),
						(l()(), Nt(14, 0, null, null, 29, 'figure', [], null, null, null, null, null)),
						(l()(), Nt(15, 0, null, null, 28, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['<p '])),
						(l()(), Nt(17, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(18, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(21, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"spinner"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(24, 0, null, null, 5, 'span', [['class', 'xml']], null, null, null, null, null)),
						(l()(), Nt(25, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(27, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Gr(-1, null, ['\n<p '])),
						(l()(), Nt(31, 0, null, null, 2, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Nt(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['class'])),
						(l()(), Gr(-1, null, ['='])),
						(l()(), Nt(35, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['"spinner-dotted"'])),
						(l()(), Gr(-1, null, ['>'])),
						(l()(), Nt(38, 0, null, null, 5, 'span', [['class', 'xml']], null, null, null, null, null)),
						(l()(), Nt(39, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['</'])),
						(l()(), Nt(41, 0, null, null, 1, 'span', [['class', 'hljs-name']], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['p'])),
						(l()(), Gr(-1, null, ['>']))
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
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Nf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Df(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Uf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Border'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Lf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Hover'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Vf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Striped'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ff(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Table Cell'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function zf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Table Row'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Hf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Bf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function qf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Font'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Gf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Text'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Zf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Qf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Hide'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Wf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Show'])),
						(l()(), Nt(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Gr(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Kf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 169, 'nav', [['class', 'pad-a-sm border-a-gray box-shadow-1 fixed-l styleguide-menu']], null, null, null, null, null)),
						(l()(), Nt(1, 0, null, null, 168, 'ul', [], null, null, null, null, null)),
						(l()(), Nt(2, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(4, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(5, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Alert'])),
						(l()(), At(16777216, null, null, 1, null, cd)),
						xr(8, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(9, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(11, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(12, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Badge'])),
						(l()(), At(16777216, null, null, 1, null, pd)),
						xr(15, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(16, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(18, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(19, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Button'])),
						(l()(), At(16777216, null, null, 1, null, hd)),
						xr(22, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(23, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(25, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(26, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Card'])),
						(l()(), At(16777216, null, null, 1, null, dd)),
						xr(29, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(30, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(32, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(33, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Collapse'])),
						(l()(), At(16777216, null, null, 1, null, fd)),
						xr(36, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(37, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(39, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(40, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Color'])),
						(l()(), At(16777216, null, null, 1, null, gd)),
						xr(43, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(44, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(46, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(47, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Dropdown'])),
						(l()(), At(16777216, null, null, 1, null, md)),
						xr(50, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(51, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(53, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(54, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Flexbox'])),
						(l()(), At(16777216, null, null, 1, null, bd)),
						xr(57, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(58, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(60, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(61, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Form'])),
						(l()(), At(16777216, null, null, 1, null, yd)),
						xr(64, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(65, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(67, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(68, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Grid'])),
						(l()(), At(16777216, null, null, 1, null, vd)),
						xr(71, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(72, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(74, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(75, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Layout'])),
						(l()(), At(16777216, null, null, 1, null, wd)),
						xr(78, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(79, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(81, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(82, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Modal'])),
						(l()(), At(16777216, null, null, 1, null, jd)),
						xr(85, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(86, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(88, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(89, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Nav'])),
						(l()(), At(16777216, null, null, 1, null, _d)),
						xr(92, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(93, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(95, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(96, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Position'])),
						(l()(), At(16777216, null, null, 1, null, xd)),
						xr(99, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(100, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(102, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(103, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Slider'])),
						(l()(), At(16777216, null, null, 1, null, kd)),
						xr(106, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(107, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(109, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(110, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Slideshow'])),
						(l()(), At(16777216, null, null, 1, null, Cd)),
						xr(113, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(114, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(116, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(117, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Space'])),
						(l()(), At(16777216, null, null, 1, null, Sd)),
						xr(120, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(121, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(123, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(124, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Spinner'])),
						(l()(), At(16777216, null, null, 1, null, Ed)),
						xr(127, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(128, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(130, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(131, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Switch'])),
						(l()(), At(16777216, null, null, 1, null, Id)),
						xr(134, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(135, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(137, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(138, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Tab'])),
						(l()(), At(16777216, null, null, 1, null, Pd)),
						xr(141, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(142, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(144, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(145, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Table'])),
						(l()(), At(16777216, null, null, 1, null, Od)),
						xr(148, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(149, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(151, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(152, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Tooltip'])),
						(l()(), At(16777216, null, null, 1, null, Td)),
						xr(155, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(156, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(158, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(159, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Typography'])),
						(l()(), At(16777216, null, null, 1, null, Md)),
						xr(162, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(163, 0, null, null, 6, 'li', [], null, null, null, null, null)),
						(l()(),
						Nt(
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
						xr(165, 278528, null, 0, ya, [Ae, Ne, En, Mn], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						qr(166, { 'bg-lt-gray': 0 }),
						(l()(), Gr(-1, null, ['Visibility'])),
						(l()(), At(16777216, null, null, 1, null, Rd)),
						xr(169, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Nt(170, 0, [['content', 1]], null, 137, 'main', [['class', 'pad-a-xl styleguide'], ['tabindex', '-1']], null, null, null, null, null)),
						(l()(), Nt(171, 0, null, null, 0, 'h1', [['class', 'pad-t-xl']], [[8, 'innerHTML', 1]], null, null, null, null)),
						(l()(), At(16777216, null, null, 1, null, Ad)),
						xr(173, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Nd)),
						xr(175, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Dd)),
						xr(177, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Ud)),
						xr(179, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Ld)),
						xr(181, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Vd)),
						xr(183, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Fd)),
						xr(185, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, zd)),
						xr(187, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Hd)),
						xr(189, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Bd)),
						xr(191, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, qd)),
						xr(193, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Gd)),
						xr(195, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Zd)),
						xr(197, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Qd)),
						xr(199, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Wd)),
						xr(201, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Kd)),
						xr(203, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Yd)),
						xr(205, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Jd)),
						xr(207, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, $d)),
						xr(209, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Xd)),
						xr(211, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, lf)),
						xr(213, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, nf)),
						xr(215, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, uf)),
						xr(217, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, ef)),
						xr(219, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, tf)),
						xr(221, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, rf)),
						xr(223, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, sf)),
						xr(225, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, af)),
						xr(227, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, of)),
						xr(229, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, cf)),
						xr(231, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, pf)),
						xr(233, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, hf)),
						xr(235, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, df)),
						xr(237, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, ff)),
						xr(239, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, gf)),
						xr(241, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, mf)),
						xr(243, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, bf)),
						xr(245, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, yf)),
						xr(247, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, vf)),
						xr(249, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, wf)),
						xr(251, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, jf)),
						xr(253, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, _f)),
						xr(255, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, xf)),
						xr(257, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, kf)),
						xr(259, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Cf)),
						xr(261, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Sf)),
						xr(263, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Ef)),
						xr(265, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, If)),
						xr(267, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Pf)),
						xr(269, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Of)),
						xr(271, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Tf)),
						xr(273, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Mf)),
						xr(275, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Rf)),
						xr(277, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Af)),
						xr(279, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Nf)),
						xr(281, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Df)),
						xr(283, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Uf)),
						xr(285, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Lf)),
						xr(287, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Vf)),
						xr(289, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Ff)),
						xr(291, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, zf)),
						xr(293, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Hf)),
						xr(295, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Bf)),
						xr(297, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, qf)),
						xr(299, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Gf)),
						xr(301, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Zf)),
						xr(303, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Qf)),
						xr(305, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null),
						(l()(), At(16777216, null, null, 1, null, Wf)),
						xr(307, 16384, null, 0, va, [fe, au], { ngIf: [0, 'ngIf'] }, null)
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
			function Yf(l) {
				return Wr(
					0,
					[(l()(), Nt(0, 0, null, null, 1, 'ng-component', [], null, null, null, Kf, id)), xr(1, 114688, null, 0, od, [], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			var Jf = Xt('ng-component', od, Yf, {}, {}, []),
				$f = at({ encapsulation: 0, styles: [['']], data: {} });
			function Xf(l) {
				return Wr(
					0,
					[
						(l()(), Nt(0, 0, null, null, 3, 'ez-root', [], null, null, null, Yh, Kh)),
						xr(1, 114688, null, 0, Zh, [En], null, null),
						(l()(), Nt(2, 16777216, null, 0, 1, 'router-outlet', [], null, null, null, null, null)),
						xr(3, 212992, null, 0, Jp, [Yp, fe, _n, [8, null], me], null, null)
					],
					function(l, n) {
						l(n, 1, 0), l(n, 3, 0);
					},
					null
				);
			}
			function lg(l) {
				return Wr(0, [(l()(), Nt(0, 0, null, null, 1, 'docs-root', [], null, null, null, Xf, $f)), xr(1, 49152, null, 0, ua, [], null, null)], null, null);
			}
			var ng = Xt('docs-root', ua, lg, {}, {}, []),
				ug = (function() {
					return function() {};
				})(),
				eg = (function() {
					return function() {};
				})(),
				tg = Xs(na, [ua], function(l) {
					return (function(l) {
						for (var n = {}, u = [], e = !1, t = 0; t < l.length; t++) {
							var r = l[t];
							r.token === mn && !0 === r.value && (e = !0), 1073741824 & r.flags && u.push(r.token), (r.index = t), (n[tt(r.token)] = r);
						}
						return { factory: null, providersByKey: n, providers: l, modules: u, isRoot: e };
					})([
						qt(512, _n, xn, [[8, [_h, Jf, ng]], [3, _n], Cn]),
						qt(5120, Fe, Be, [[3, Fe]]),
						qt(4608, ma, ba, [Fe, [2, ga]]),
						qt(5120, xu, ku, []),
						qt(5120, Ae, ze, []),
						qt(5120, Ne, He, []),
						qt(4608, vi, wi, [xa]),
						qt(6144, Nn, null, [vi]),
						qt(4608, hi, fi, []),
						qt(
							5120,
							Vo,
							function(l, n, u, e, t, r, s, a) {
								return [new ci(l, n, u), new yi(e), new gi(t, r, s, a)];
							},
							[xa, qu, Eu, xa, xa, hi, Pu, [2, di]]
						),
						qt(4608, Fo, Fo, [Vo, qu]),
						qt(135680, Bo, Bo, [xa]),
						qt(4608, Yo, Yo, [Fo, Bo]),
						qt(6144, On, null, [Yo]),
						qt(6144, Ho, null, [Bo]),
						qt(4608, $u, $u, [qu]),
						qt(5120, Lc, fh, [Wp]),
						qt(4608, nh, nh, []),
						qt(6144, Xp, null, [nh]),
						qt(135680, uh, uh, [Wp, pu, Uu, nn, Xp]),
						qt(4608, lh, lh, []),
						qt(5120, eh, ih, [Wp, Ca, th]),
						qt(5120, yh, bh, [gh]),
						qt(
							5120,
							Iu,
							function(l) {
								return [l];
							},
							[yh]
						),
						qt(1073742336, _a, _a, []),
						qt(1024, yu, Ii, []),
						qt(
							1024,
							ue,
							function() {
								return [ah()];
							},
							[]
						),
						qt(512, gh, gh, [nn]),
						qt(
							1024,
							ju,
							function(l, n) {
								return [
									((u = l),
									Do('probe', Lo),
									Do(
										'coreTokens',
										r(
											{},
											Uo,
											(u || []).reduce(function(l, n) {
												return (l[n.name] = n.token), l;
											}, {})
										)
									),
									function() {
										return Lo;
									}),
									mh(n)
								];
								var u;
							},
							[[2, ue], gh]
						),
						qt(512, _u, _u, [[2, ju]]),
						qt(131584, ae, ae, [qu, Pu, nn, yu, _n, _u]),
						qt(1073742336, qe, qe, [ae]),
						qt(1073742336, Pi, Pi, [[3, Pi]]),
						qt(1073742336, Qh, Qh, []),
						qt(1024, rh, ph, [[3, Wp]]),
						qt(512, mc, bc, []),
						qt(512, Yp, Yp, []),
						qt(256, th, { useHash: !0, anchorScrolling: 'enabled' }, []),
						qt(1024, ra, ch, [ea, [2, sa], th]),
						qt(512, aa, aa, [ra]),
						qt(512, Uu, Uu, []),
						qt(512, pu, he, [Uu, [2, ce]]),
						qt(
							1024,
							zp,
							function() {
								return [
									[{ path: 'components', component: od }, { path: '', redirectTo: '/components', pathMatch: 'full' }, { path: '**', redirectTo: '/components', pathMatch: 'full' }]
								];
							},
							[]
						),
						qt(1024, Wp, dh, [ae, mc, Yp, aa, nn, pu, Uu, zp, th, [2, Bp], [2, Vp]]),
						qt(1073742336, oh, oh, [[2, rh], [2, Wp]]),
						qt(1073742336, ug, ug, []),
						qt(1073742336, kh, kh, []),
						qt(1073742336, Ch, Ch, []),
						qt(1073742336, Eh, Eh, []),
						qt(1073742336, Ph, Ph, []),
						qt(1073742336, Oh, Oh, []),
						qt(1073742336, Th, Th, []),
						qt(1073742336, Mh, Mh, []),
						qt(1073742336, Ah, Ah, []),
						qt(1073742336, Nh, Nh, []),
						qt(1073742336, Dh, Dh, []),
						qt(1073742336, Uh, Uh, []),
						qt(1073742336, Lh, Lh, []),
						qt(1073742336, Vh, Vh, []),
						qt(1073742336, zh, zh, []),
						qt(1073742336, Hh, Hh, []),
						qt(1073742336, Bh, Bh, []),
						qt(1073742336, qh, qh, []),
						qt(1073742336, Gh, Gh, []),
						qt(1073742336, Wh, Wh, []),
						qt(1073742336, eg, eg, []),
						qt(1073742336, na, na, []),
						qt(256, mn, !0, [])
					]);
				});
			(function() {
				if (Ln) throw new Error('Cannot enable prod mode after platform setup.');
				Un = !1;
			})(),
				Ei()
					.bootstrapModuleFactory(tg)
					.catch(function(l) {
						return console.log(l);
					});
		}
	},
	[[0, 0]]
]);
//# sourceMappingURL=main.c2d972e2a54e4b6a3e3c.js.map
