(window.webpackJsonp = window.webpackJsonp || []).push([
	[1],
	{
		0: function(e, t, n) {
			e.exports = n('zUnb');
		},
		zUnb: function(e, t, n) {
			'use strict';
			function r(e) {
				return 'function' == typeof e;
			}
			n.r(t);
			let s = !1;
			const o = {
				Promise: void 0,
				set useDeprecatedSynchronousErrorHandling(e) {
					s = e;
				},
				get useDeprecatedSynchronousErrorHandling() {
					return s;
				}
			};
			function i(e) {
				setTimeout(() => {
					throw e;
				});
			}
			const a = {
					closed: !0,
					next(e) {},
					error(e) {
						if (o.useDeprecatedSynchronousErrorHandling) throw e;
						i(e);
					},
					complete() {}
				},
				l = Array.isArray || ((e) => e && 'number' == typeof e.length);
			function c(e) {
				return null !== e && 'object' == typeof e;
			}
			function u(e) {
				return (
					Error.call(this),
					(this.message = e ? `${e.length} errors occurred during unsubscription:\n${e.map((e, t) => `${t + 1}) ${e.toString()}`).join('\n  ')}` : ''),
					(this.name = 'UnsubscriptionError'),
					(this.errors = e),
					this
				);
			}
			u.prototype = Object.create(Error.prototype);
			const p = u,
				h = (() => {
					class e {
						constructor(e) {
							(this.closed = !1), (this._parent = null), (this._parents = null), (this._subscriptions = null), e && (this._unsubscribe = e);
						}
						unsubscribe() {
							let e,
								t = !1;
							if (this.closed) return;
							let { _parent: n, _parents: s, _unsubscribe: o, _subscriptions: i } = this;
							(this.closed = !0), (this._parent = null), (this._parents = null), (this._subscriptions = null);
							let a = -1,
								u = s ? s.length : 0;
							for (; n; ) n.remove(this), (n = (++a < u && s[a]) || null);
							if (r(o))
								try {
									o.call(this);
								} catch (h) {
									(t = !0), (e = h instanceof p ? d(h.errors) : [h]);
								}
							if (l(i))
								for (a = -1, u = i.length; ++a < u; ) {
									const n = i[a];
									if (c(n))
										try {
											n.unsubscribe();
										} catch (h) {
											(t = !0), (e = e || []), h instanceof p ? (e = e.concat(d(h.errors))) : e.push(h);
										}
								}
							if (t) throw new p(e);
						}
						add(t) {
							let n = t;
							switch (typeof t) {
								case 'function':
									n = new e(t);
								case 'object':
									if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
									if (this.closed) return n.unsubscribe(), n;
									if (!(n instanceof e)) {
										const t = n;
										(n = new e())._subscriptions = [t];
									}
									break;
								default:
									if (!t) return e.EMPTY;
									throw new Error('unrecognized teardown ' + t + ' added to Subscription.');
							}
							if (n._addParent(this)) {
								const e = this._subscriptions;
								e ? e.push(n) : (this._subscriptions = [n]);
							}
							return n;
						}
						remove(e) {
							const t = this._subscriptions;
							if (t) {
								const n = t.indexOf(e);
								-1 !== n && t.splice(n, 1);
							}
						}
						_addParent(e) {
							let { _parent: t, _parents: n } = this;
							return t !== e && (t ? (n ? -1 === n.indexOf(e) && (n.push(e), !0) : ((this._parents = [e]), !0)) : ((this._parent = e), !0));
						}
					}
					return (
						(e.EMPTY = (function(e) {
							return (e.closed = !0), e;
						})(new e())),
						e
					);
				})();
			function d(e) {
				return e.reduce((e, t) => e.concat(t instanceof p ? t.errors : t), []);
			}
			const f = 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
			class g extends h {
				constructor(e, t, n) {
					switch ((super(), (this.syncErrorValue = null), (this.syncErrorThrown = !1), (this.syncErrorThrowable = !1), (this.isStopped = !1), arguments.length)) {
						case 0:
							this.destination = a;
							break;
						case 1:
							if (!e) {
								this.destination = a;
								break;
							}
							if ('object' == typeof e) {
								e instanceof g
									? ((this.syncErrorThrowable = e.syncErrorThrowable), (this.destination = e), e.add(this))
									: ((this.syncErrorThrowable = !0), (this.destination = new m(this, e)));
								break;
							}
						default:
							(this.syncErrorThrowable = !0), (this.destination = new m(this, e, t, n));
					}
				}
				[f]() {
					return this;
				}
				static create(e, t, n) {
					const r = new g(e, t, n);
					return (r.syncErrorThrowable = !1), r;
				}
				next(e) {
					this.isStopped || this._next(e);
				}
				error(e) {
					this.isStopped || ((this.isStopped = !0), this._error(e));
				}
				complete() {
					this.isStopped || ((this.isStopped = !0), this._complete());
				}
				unsubscribe() {
					this.closed || ((this.isStopped = !0), super.unsubscribe());
				}
				_next(e) {
					this.destination.next(e);
				}
				_error(e) {
					this.destination.error(e), this.unsubscribe();
				}
				_complete() {
					this.destination.complete(), this.unsubscribe();
				}
				_unsubscribeAndRecycle() {
					const { _parent: e, _parents: t } = this;
					return (this._parent = null), (this._parents = null), this.unsubscribe(), (this.closed = !1), (this.isStopped = !1), (this._parent = e), (this._parents = t), this;
				}
			}
			class m extends g {
				constructor(e, t, n, s) {
					let o;
					super(), (this._parentSubscriber = e);
					let i = this;
					r(t)
						? (o = t)
						: t &&
						  ((o = t.next),
						  (n = t.error),
						  (s = t.complete),
						  t !== a && (r((i = Object.create(t)).unsubscribe) && this.add(i.unsubscribe.bind(i)), (i.unsubscribe = this.unsubscribe.bind(this)))),
						(this._context = i),
						(this._next = o),
						(this._error = n),
						(this._complete = s);
				}
				next(e) {
					if (!this.isStopped && this._next) {
						const { _parentSubscriber: t } = this;
						o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e);
					}
				}
				error(e) {
					if (!this.isStopped) {
						const { _parentSubscriber: t } = this,
							{ useDeprecatedSynchronousErrorHandling: n } = o;
						if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
						else if (t.syncErrorThrowable) n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : i(e), this.unsubscribe();
						else {
							if ((this.unsubscribe(), n)) throw e;
							i(e);
						}
					}
				}
				complete() {
					if (!this.isStopped) {
						const { _parentSubscriber: e } = this;
						if (this._complete) {
							const t = () => this._complete.call(this._context);
							o.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, t), this.unsubscribe()) : (this.__tryOrUnsub(t), this.unsubscribe());
						} else this.unsubscribe();
					}
				}
				__tryOrUnsub(e, t) {
					try {
						e.call(this._context, t);
					} catch (n) {
						if ((this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling)) throw n;
						i(n);
					}
				}
				__tryOrSetError(e, t, n) {
					if (!o.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
					try {
						t.call(this._context, n);
					} catch (r) {
						return o.useDeprecatedSynchronousErrorHandling ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0) : (i(r), !0);
					}
					return !1;
				}
				_unsubscribe() {
					const { _parentSubscriber: e } = this;
					(this._context = null), (this._parentSubscriber = null), e.unsubscribe();
				}
			}
			const b = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
			function y() {}
			function w(...e) {
				return _(e);
			}
			function _(e) {
				return e
					? 1 === e.length
						? e[0]
						: function(t) {
								return e.reduce((e, t) => t(e), t);
						  }
					: y;
			}
			const v = (() => {
				class e {
					constructor(e) {
						(this._isScalar = !1), e && (this._subscribe = e);
					}
					lift(t) {
						const n = new e();
						return (n.source = this), (n.operator = t), n;
					}
					subscribe(e, t, n) {
						const { operator: r } = this,
							s = (function(e, t, n) {
								if (e) {
									if (e instanceof g) return e;
									if (e[f]) return e[f]();
								}
								return e || t || n ? new g(e, t, n) : new g(a);
							})(e, t, n);
						if (
							(s.add(r ? r.call(s, this.source) : this.source || (o.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable) ? this._subscribe(s) : this._trySubscribe(s)),
							o.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && ((s.syncErrorThrowable = !1), s.syncErrorThrown))
						)
							throw s.syncErrorValue;
						return s;
					}
					_trySubscribe(e) {
						try {
							return this._subscribe(e);
						} catch (t) {
							o.useDeprecatedSynchronousErrorHandling && ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
								(function(e) {
									for (; e; ) {
										const { closed: t, destination: n, isStopped: r } = e;
										if (t || r) return !1;
										e = n && n instanceof g ? n : null;
									}
									return !0;
								})(e)
									? e.error(t)
									: console.warn(t);
						}
					}
					forEach(e, t) {
						return new (t = x(t))((t, n) => {
							let r;
							r = this.subscribe(
								(t) => {
									try {
										e(t);
									} catch (s) {
										n(s), r && r.unsubscribe();
									}
								},
								n,
								t
							);
						});
					}
					_subscribe(e) {
						const { source: t } = this;
						return t && t.subscribe(e);
					}
					[b]() {
						return this;
					}
					pipe(...e) {
						return 0 === e.length ? this : _(e)(this);
					}
					toPromise(e) {
						return new (e = x(e))((e, t) => {
							let n;
							this.subscribe((e) => (n = e), (e) => t(e), () => e(n));
						});
					}
				}
				return (e.create = (t) => new e(t)), e;
			})();
			function x(e) {
				if ((e || (e = o.Promise || Promise), !e)) throw new Error('no Promise impl found');
				return e;
			}
			function C() {
				return Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this;
			}
			C.prototype = Object.create(Error.prototype);
			const k = C;
			class S extends h {
				constructor(e, t) {
					super(), (this.subject = e), (this.subscriber = t), (this.closed = !1);
				}
				unsubscribe() {
					if (this.closed) return;
					this.closed = !0;
					const e = this.subject,
						t = e.observers;
					if (((this.subject = null), !t || 0 === t.length || e.isStopped || e.closed)) return;
					const n = t.indexOf(this.subscriber);
					-1 !== n && t.splice(n, 1);
				}
			}
			class O extends g {
				constructor(e) {
					super(e), (this.destination = e);
				}
			}
			const E = (() => {
				class e extends v {
					constructor() {
						super(), (this.observers = []), (this.closed = !1), (this.isStopped = !1), (this.hasError = !1), (this.thrownError = null);
					}
					[f]() {
						return new O(this);
					}
					lift(e) {
						const t = new T(this, this);
						return (t.operator = e), t;
					}
					next(e) {
						if (this.closed) throw new k();
						if (!this.isStopped) {
							const { observers: t } = this,
								n = t.length,
								r = t.slice();
							for (let s = 0; s < n; s++) r[s].next(e);
						}
					}
					error(e) {
						if (this.closed) throw new k();
						(this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
						const { observers: t } = this,
							n = t.length,
							r = t.slice();
						for (let s = 0; s < n; s++) r[s].error(e);
						this.observers.length = 0;
					}
					complete() {
						if (this.closed) throw new k();
						this.isStopped = !0;
						const { observers: e } = this,
							t = e.length,
							n = e.slice();
						for (let r = 0; r < t; r++) n[r].complete();
						this.observers.length = 0;
					}
					unsubscribe() {
						(this.isStopped = !0), (this.closed = !0), (this.observers = null);
					}
					_trySubscribe(e) {
						if (this.closed) throw new k();
						return super._trySubscribe(e);
					}
					_subscribe(e) {
						if (this.closed) throw new k();
						return this.hasError ? (e.error(this.thrownError), h.EMPTY) : this.isStopped ? (e.complete(), h.EMPTY) : (this.observers.push(e), new S(this, e));
					}
					asObservable() {
						const e = new v();
						return (e.source = this), e;
					}
				}
				return (e.create = (e, t) => new T(e, t)), e;
			})();
			class T extends E {
				constructor(e, t) {
					super(), (this.destination = e), (this.source = t);
				}
				next(e) {
					const { destination: t } = this;
					t && t.next && t.next(e);
				}
				error(e) {
					const { destination: t } = this;
					t && t.error && this.destination.error(e);
				}
				complete() {
					const { destination: e } = this;
					e && e.complete && this.destination.complete();
				}
				_subscribe(e) {
					const { source: t } = this;
					return t ? this.source.subscribe(e) : h.EMPTY;
				}
			}
			function I(e) {
				return e && 'function' == typeof e.schedule;
			}
			class P extends g {
				constructor(e, t, n) {
					super(), (this.parent = e), (this.outerValue = t), (this.outerIndex = n), (this.index = 0);
				}
				_next(e) {
					this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this);
				}
				_error(e) {
					this.parent.notifyError(e, this), this.unsubscribe();
				}
				_complete() {
					this.parent.notifyComplete(this), this.unsubscribe();
				}
			}
			const M = (e) => (t) => {
					for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
					t.closed || t.complete();
				},
				A = (e) => (t) => (
					e
						.then(
							(e) => {
								t.closed || (t.next(e), t.complete());
							},
							(e) => t.error(e)
						)
						.then(null, i),
					t
				);
			function R() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			}
			const j = R(),
				D = (e) => (t) => {
					const n = e[j]();
					for (;;) {
						const e = n.next();
						if (e.done) {
							t.complete();
							break;
						}
						if ((t.next(e.value), t.closed)) break;
					}
					return (
						'function' == typeof n.return &&
							t.add(() => {
								n.return && n.return();
							}),
						t
					);
				},
				N = (e) => (t) => {
					const n = e[b]();
					if ('function' != typeof n.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
					return n.subscribe(t);
				},
				U = (e) => e && 'number' == typeof e.length && 'function' != typeof e;
			function L(e) {
				return !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then;
			}
			const H = (e) => {
				if (e instanceof v) return (t) => (e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t));
				if (e && 'function' == typeof e[b]) return N(e);
				if (U(e)) return M(e);
				if (L(e)) return A(e);
				if (e && 'function' == typeof e[j]) return D(e);
				{
					const t = c(e) ? 'an invalid object' : `'${e}'`;
					throw new TypeError(`You provided ${t} where a stream was expected.` + ' You can provide an Observable, Promise, Array, or Iterable.');
				}
			};
			function F(e, t, n, r, s = new P(e, n, r)) {
				if (!s.closed) return H(t)(s);
			}
			class z extends g {
				notifyNext(e, t, n, r, s) {
					this.destination.next(t);
				}
				notifyError(e, t) {
					this.destination.error(e);
				}
				notifyComplete(e) {
					this.destination.complete();
				}
			}
			function V(e, t) {
				return function(n) {
					if ('function' != typeof e) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
					return n.lift(new $(e, t));
				};
			}
			class $ {
				constructor(e, t) {
					(this.project = e), (this.thisArg = t);
				}
				call(e, t) {
					return t.subscribe(new B(e, this.project, this.thisArg));
				}
			}
			class B extends g {
				constructor(e, t, n) {
					super(e), (this.project = t), (this.count = 0), (this.thisArg = n || this);
				}
				_next(e) {
					let t;
					try {
						t = this.project.call(this.thisArg, e, this.count++);
					} catch (n) {
						return void this.destination.error(n);
					}
					this.destination.next(t);
				}
			}
			function q(e, t) {
				return new v(
					t
						? (n) => {
								const r = new h();
								let s = 0;
								return (
									r.add(
										t.schedule(function() {
											s !== e.length ? (n.next(e[s++]), n.closed || r.add(this.schedule())) : n.complete();
										})
									),
									r
								);
						  }
						: M(e)
				);
			}
			function Z(e, t) {
				if (!t) return e instanceof v ? e : new v(H(e));
				if (null != e) {
					if (
						(function(e) {
							return e && 'function' == typeof e[b];
						})(e)
					)
						return (function(e, t) {
							return new v(
								t
									? (n) => {
											const r = new h();
											return (
												r.add(
													t.schedule(() => {
														const s = e[b]();
														r.add(
															s.subscribe({
																next(e) {
																	r.add(t.schedule(() => n.next(e)));
																},
																error(e) {
																	r.add(t.schedule(() => n.error(e)));
																},
																complete() {
																	r.add(t.schedule(() => n.complete()));
																}
															})
														);
													})
												),
												r
											);
									  }
									: N(e)
							);
						})(e, t);
					if (L(e))
						return (function(e, t) {
							return new v(
								t
									? (n) => {
											const r = new h();
											return (
												r.add(
													t.schedule(() =>
														e.then(
															(e) => {
																r.add(
																	t.schedule(() => {
																		n.next(e), r.add(t.schedule(() => n.complete()));
																	})
																);
															},
															(e) => {
																r.add(t.schedule(() => n.error(e)));
															}
														)
													)
												),
												r
											);
									  }
									: A(e)
							);
						})(e, t);
					if (U(e)) return q(e, t);
					if (
						(function(e) {
							return e && 'function' == typeof e[j];
						})(e) ||
						'string' == typeof e
					)
						return (function(e, t) {
							if (!e) throw new Error('Iterable cannot be null');
							return new v(
								t
									? (n) => {
											const r = new h();
											let s;
											return (
												r.add(() => {
													s && 'function' == typeof s.return && s.return();
												}),
												r.add(
													t.schedule(() => {
														(s = e[j]()),
															r.add(
																t.schedule(function() {
																	if (n.closed) return;
																	let e, t;
																	try {
																		const o = s.next();
																		(e = o.value), (t = o.done);
																	} catch (r) {
																		return void n.error(r);
																	}
																	t ? n.complete() : (n.next(e), this.schedule());
																})
															);
													})
												),
												r
											);
									  }
									: D(e)
							);
						})(e, t);
				}
				throw new TypeError(((null !== e && typeof e) || e) + ' is not observable');
			}
			function G(e, t, n = Number.POSITIVE_INFINITY) {
				return 'function' == typeof t ? (r) => r.pipe(G((n, r) => Z(e(n, r)).pipe(V((e, s) => t(n, e, r, s))), n)) : ('number' == typeof t && (n = t), (t) => t.lift(new W(e, n)));
			}
			class W {
				constructor(e, t = Number.POSITIVE_INFINITY) {
					(this.project = e), (this.concurrent = t);
				}
				call(e, t) {
					return t.subscribe(new Q(e, this.project, this.concurrent));
				}
			}
			class Q extends z {
				constructor(e, t, n = Number.POSITIVE_INFINITY) {
					super(e), (this.project = t), (this.concurrent = n), (this.hasCompleted = !1), (this.buffer = []), (this.active = 0), (this.index = 0);
				}
				_next(e) {
					this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
				}
				_tryNext(e) {
					let t;
					const n = this.index++;
					try {
						t = this.project(e, n);
					} catch (r) {
						return void this.destination.error(r);
					}
					this.active++, this._innerSub(t, e, n);
				}
				_innerSub(e, t, n) {
					const r = new P(this, void 0, void 0);
					this.destination.add(r), F(this, e, t, n, r);
				}
				_complete() {
					(this.hasCompleted = !0), 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
				}
				notifyNext(e, t, n, r, s) {
					this.destination.next(t);
				}
				notifyComplete(e) {
					const t = this.buffer;
					this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
				}
			}
			function Y(e) {
				return e;
			}
			function J(e = Number.POSITIVE_INFINITY) {
				return G(Y, e);
			}
			function K() {
				return function(e) {
					return e.lift(new X(e));
				};
			}
			class X {
				constructor(e) {
					this.connectable = e;
				}
				call(e, t) {
					const { connectable: n } = this;
					n._refCount++;
					const r = new ee(e, n),
						s = t.subscribe(r);
					return r.closed || (r.connection = n.connect()), s;
				}
			}
			class ee extends g {
				constructor(e, t) {
					super(e), (this.connectable = t);
				}
				_unsubscribe() {
					const { connectable: e } = this;
					if (!e) return void (this.connection = null);
					this.connectable = null;
					const t = e._refCount;
					if (t <= 0) return void (this.connection = null);
					if (((e._refCount = t - 1), t > 1)) return void (this.connection = null);
					const { connection: n } = this,
						r = e._connection;
					(this.connection = null), !r || (n && r !== n) || r.unsubscribe();
				}
			}
			const te = class extends v {
					constructor(e, t) {
						super(), (this.source = e), (this.subjectFactory = t), (this._refCount = 0), (this._isComplete = !1);
					}
					_subscribe(e) {
						return this.getSubject().subscribe(e);
					}
					getSubject() {
						const e = this._subject;
						return (e && !e.isStopped) || (this._subject = this.subjectFactory()), this._subject;
					}
					connect() {
						let e = this._connection;
						return (
							e ||
								((this._isComplete = !1),
								(e = this._connection = new h()).add(this.source.subscribe(new re(this.getSubject(), this))),
								e.closed ? ((this._connection = null), (e = h.EMPTY)) : (this._connection = e)),
							e
						);
					}
					refCount() {
						return K()(this);
					}
				}.prototype,
				ne = {
					operator: { value: null },
					_refCount: { value: 0, writable: !0 },
					_subject: { value: null, writable: !0 },
					_connection: { value: null, writable: !0 },
					_subscribe: { value: te._subscribe },
					_isComplete: { value: te._isComplete, writable: !0 },
					getSubject: { value: te.getSubject },
					connect: { value: te.connect },
					refCount: { value: te.refCount }
				};
			class re extends O {
				constructor(e, t) {
					super(e), (this.connectable = t);
				}
				_error(e) {
					this._unsubscribe(), super._error(e);
				}
				_complete() {
					(this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
				}
				_unsubscribe() {
					const e = this.connectable;
					if (e) {
						this.connectable = null;
						const t = e._connection;
						(e._refCount = 0), (e._subject = null), (e._connection = null), t && t.unsubscribe();
					}
				}
			}
			function se() {
				return new E();
			}
			const oe = '__parameters__';
			function ie(e, t, n) {
				const r = (function(e) {
					return function(...t) {
						if (e) {
							const n = e(...t);
							for (const e in n) this[e] = n[e];
						}
					};
				})(t);
				function s(...e) {
					if (this instanceof s) return r.apply(this, e), this;
					const t = new s(...e);
					return (n.annotation = t), n;
					function n(e, n, r) {
						const s = e.hasOwnProperty(oe) ? e[oe] : Object.defineProperty(e, oe, { value: [] })[oe];
						for (; s.length <= r; ) s.push(null);
						return (s[r] = s[r] || []).push(t), e;
					}
				}
				return n && (s.prototype = Object.create(n.prototype)), (s.prototype.ngMetadataName = e), (s.annotationCls = s), s;
			}
			const ae = ie('Inject', (e) => ({ token: e })),
				le = ie('Optional'),
				ce = ie('Self'),
				ue = ie('SkipSelf');
			var pe = (function(e) {
				return (e[(e.Default = 0)] = 'Default'), (e[(e.Host = 1)] = 'Host'), (e[(e.Self = 2)] = 'Self'), (e[(e.SkipSelf = 4)] = 'SkipSelf'), (e[(e.Optional = 8)] = 'Optional'), e;
			})({});
			function he(e) {
				for (let t in e) if (e[t] === he) return t;
				throw Error('Could not find renamed property on target object.');
			}
			function de(e, t) {
				for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
			}
			function fe(e) {
				return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
			}
			function ge(e) {
				return { factory: e.factory, providers: e.providers || [], imports: e.imports || [] };
			}
			function me(e) {
				const t = e[ye];
				return t && t.token === e ? t : null;
			}
			function be(e) {
				return e && e.hasOwnProperty(we) ? e[we] : null;
			}
			const ye = he({ ngInjectableDef: he }),
				we = he({ ngInjectorDef: he });
			function _e(e) {
				if ('string' == typeof e) return e;
				if (e instanceof Array) return '[' + e.map(_e).join(', ') + ']';
				if (null == e) return '' + e;
				if (e.overriddenName) return `${e.overriddenName}`;
				if (e.name) return `${e.name}`;
				const t = e.toString();
				if (null == t) return '' + t;
				const n = t.indexOf('\n');
				return -1 === n ? t : t.substring(0, n);
			}
			const ve = he({ __forward_ref__: he });
			function xe(e) {
				return (
					(e.__forward_ref__ = xe),
					(e.toString = function() {
						return _e(this());
					}),
					e
				);
			}
			function Ce(e) {
				const t = e;
				return 'function' == typeof t && t.hasOwnProperty(ve) && t.__forward_ref__ === xe ? t() : e;
			}
			const ke = 'undefined' != typeof globalThis && globalThis,
				Se = 'undefined' != typeof window && window,
				Oe = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
				Ee = 'undefined' != typeof global && global,
				Te = ke || Ee || Se || Oe;
			class Ie {
				constructor(e, t) {
					(this._desc = e),
						(this.ngMetadataName = 'InjectionToken'),
						(this.ngInjectableDef = void 0),
						'number' == typeof t ? (this.__NG_ELEMENT_ID__ = t) : void 0 !== t && (this.ngInjectableDef = fe({ token: this, providedIn: t.providedIn || 'root', factory: t.factory }));
				}
				toString() {
					return `InjectionToken ${this._desc}`;
				}
			}
			const Pe = new Ie('INJECTOR', -1),
				Me = new Object(),
				Ae = 'ngTempTokenPath',
				Re = 'ngTokenPath',
				je = /\n/gm,
				De = '\u0275',
				Ne = '__source',
				Ue = he({ provide: String, useValue: he });
			let Le,
				He = void 0;
			function Fe(e) {
				const t = He;
				return (He = e), t;
			}
			function ze(e) {
				const t = Le;
				return (Le = e), t;
			}
			function Ve(e, t = pe.Default) {
				return (Le ||
					function(e, t = pe.Default) {
						if (void 0 === He) throw new Error('inject() must be called from an injection context');
						return null === He ? $e(e, void 0, t) : He.get(e, t & pe.Optional ? null : void 0, t);
					})(e, t);
			}
			function $e(e, t, n) {
				const r = me(e);
				if (r && 'root' == r.providedIn) return void 0 === r.value ? (r.value = r.factory()) : r.value;
				if (n & pe.Optional) return null;
				if (void 0 !== t) return t;
				throw new Error(`Injector: NOT_FOUND [${_e(e)}]`);
			}
			function Be(e) {
				const t = [];
				for (let n = 0; n < e.length; n++) {
					const r = Ce(e[n]);
					if (Array.isArray(r)) {
						if (0 === r.length) throw new Error('Arguments array must have arguments.');
						let e = void 0,
							n = pe.Default;
						for (let t = 0; t < r.length; t++) {
							const s = r[t];
							s instanceof le || 'Optional' === s.ngMetadataName || s === le
								? (n |= pe.Optional)
								: s instanceof ue || 'SkipSelf' === s.ngMetadataName || s === ue
								? (n |= pe.SkipSelf)
								: s instanceof ce || 'Self' === s.ngMetadataName || s === ce
								? (n |= pe.Self)
								: (e = s instanceof ae || s === ae ? s.token : s);
						}
						t.push(Ve(e, n));
					} else t.push(Ve(r));
				}
				return t;
			}
			class qe {
				get(e, t = Me) {
					if (t === Me) {
						const t = new Error(`NullInjectorError: No provider for ${_e(e)}!`);
						throw ((t.name = 'NullInjectorError'), t);
					}
					return t;
				}
			}
			function Ze(e) {
				throw new Error(`Multiple components match node with tagname ${e.tagName}`);
			}
			function Ge() {
				throw new Error('Cannot mix multi providers and regular providers');
			}
			const We = new Ie('The presence of this token marks an injector as being the root injector.'),
				Qe = {},
				Ye = {},
				Je = [];
			let Ke = void 0;
			function Xe() {
				return void 0 === Ke && (Ke = new qe()), Ke;
			}
			function et(e, t = null, n = null, r) {
				return (t = t || Xe()), new tt(e, n, t, r);
			}
			class tt {
				constructor(e, t, n, r = null) {
					(this.parent = n), (this.records = new Map()), (this.injectorDefTypes = new Set()), (this.onDestroy = new Set()), (this._destroyed = !1);
					const s = [];
					ot([e], (e) => this.processInjectorType(e, [], s)),
						t && ot(t, (n) => this.processProvider(n, e, t)),
						this.records.set(Pe, st(void 0, this)),
						(this.isRootInjector = this.records.has(We)),
						this.injectorDefTypes.forEach((e) => this.get(e)),
						(this.source = r || ('object' == typeof e ? null : _e(e)));
				}
				get destroyed() {
					return this._destroyed;
				}
				destroy() {
					this.assertNotDestroyed(), (this._destroyed = !0);
					try {
						this.onDestroy.forEach((e) => e.ngOnDestroy());
					} finally {
						this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
					}
				}
				get(e, t = Me, n = pe.Default) {
					this.assertNotDestroyed();
					const r = Fe(this);
					try {
						if (!(n & pe.SkipSelf)) {
							let t = this.records.get(e);
							if (void 0 === t) {
								const n = ('function' == typeof (s = e) || ('object' == typeof s && s instanceof Ie)) && me(e);
								n && this.injectableDefInScope(n) && ((t = st(nt(e), Qe)), this.records.set(e, t));
							}
							if (void 0 !== t) return this.hydrate(e, t);
						}
						return (n & pe.Self ? Xe() : this.parent).get(e, n & pe.Optional ? null : t);
					} catch (o) {
						if ('NullInjectorError' === o.name) {
							if (((o[Ae] = o[Ae] || []).unshift(_e(e)), r)) throw o;
							return (function(e, t, n, r) {
								const s = e[Ae];
								throw (t[Ne] && s.unshift(t[Ne]),
								(e.message = (function(e, t, n, r = null) {
									e = e && '\n' === e.charAt(0) && e.charAt(1) == De ? e.substr(2) : e;
									let s = _e(t);
									if (t instanceof Array) s = t.map(_e).join(' -> ');
									else if ('object' == typeof t) {
										let e = [];
										for (let n in t)
											if (t.hasOwnProperty(n)) {
												let r = t[n];
												e.push(n + ':' + ('string' == typeof r ? JSON.stringify(r) : _e(r)));
											}
										s = `{${e.join(', ')}}`;
									}
									return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${e.replace(je, '\n  ')}`;
								})('\n' + e.message, s, n, r)),
								(e[Re] = s),
								(e[Ae] = null),
								e);
							})(o, e, 'R3InjectorError', this.source);
						}
						throw o;
					} finally {
						Fe(r);
					}
					var s;
				}
				toString() {
					const e = [];
					return this.records.forEach((t, n) => e.push(_e(n))), `R3Injector[${e.join(', ')}]`;
				}
				assertNotDestroyed() {
					if (this._destroyed) throw new Error('Injector has already been destroyed.');
				}
				processInjectorType(e, t, n) {
					if (!(e = Ce(e))) return !1;
					let r = be(e);
					const s = (null == r && e.ngModule) || void 0,
						o = void 0 === s ? e : s,
						i = -1 !== n.indexOf(o);
					if ((void 0 !== s && (r = be(s)), null == r)) return !1;
					if ((this.injectorDefTypes.add(o), this.records.set(o, st(r.factory, Qe)), null != r.imports && !i)) {
						let e;
						n.push(o);
						try {
							ot(r.imports, (r) => {
								this.processInjectorType(r, t, n) && (void 0 === e && (e = []), e.push(r));
							});
						} finally {
						}
						if (void 0 !== e)
							for (let t = 0; t < e.length; t++) {
								const { ngModule: n, providers: r } = e[t];
								ot(r, (e) => this.processProvider(e, n, r || Je));
							}
					}
					const a = r.providers;
					if (null != a && !i) {
						const t = e;
						ot(a, (e) => this.processProvider(e, t, a));
					}
					return void 0 !== s && void 0 !== e.providers;
				}
				processProvider(e, t, n) {
					let r = at((e = Ce(e))) ? e : Ce(e && e.provide);
					const s = (function(e, t, n) {
						let r = rt(e, t, n);
						return it(e) ? st(void 0, e.useValue) : st(r, Qe);
					})(e, t, n);
					if (at(e) || !0 !== e.multi) {
						const e = this.records.get(r);
						e && void 0 !== e.multi && Ge();
					} else {
						let t = this.records.get(r);
						t ? void 0 === t.multi && Ge() : (((t = st(void 0, Qe, !0)).factory = () => Be(t.multi)), this.records.set(r, t)), (r = e), t.multi.push(e);
					}
					this.records.set(r, s);
				}
				hydrate(e, t) {
					var n;
					return (
						t.value === Ye
							? (function(e) {
									throw new Error(`Cannot instantiate cyclic dependency! ${e}`);
							  })(_e(e))
							: t.value === Qe && ((t.value = Ye), (t.value = t.factory())),
						'object' == typeof t.value && t.value && null !== (n = t.value) && 'object' == typeof n && 'function' == typeof n.ngOnDestroy && this.onDestroy.add(t.value),
						t.value
					);
				}
				injectableDefInScope(e) {
					return !!e.providedIn && ('string' == typeof e.providedIn ? 'any' === e.providedIn || ('root' === e.providedIn && this.isRootInjector) : this.injectorDefTypes.has(e.providedIn));
				}
			}
			function nt(e) {
				const t = me(e);
				if (null !== t) return t.factory;
				const n = be(e);
				if (null !== n) return n.factory;
				if (e instanceof Ie) throw new Error(`Token ${_e(e)} is missing an ngInjectableDef definition.`);
				if (e instanceof Function)
					return (function(e) {
						const t = e.length;
						if (t > 0) {
							const n = new Array(t).fill('?');
							throw new Error(`Can't resolve all parameters for ${_e(e)}: (${n.join(', ')}).`);
						}
						const n =
							(r = e) && r[ye]
								? (console.warn(
										`DEPRECATED: DI is instantiating a token "${r.name}" that inherits its @Injectable decorator but does not provide one itself.\n` +
											`This will become an error in v10. Please add @Injectable() to the "${r.name}" class.`
								  ),
								  r[ye])
								: null;
						var r;
						return null !== n ? () => n.factory(e) : () => new e();
					})(e);
				throw new Error('unreachable');
			}
			function rt(e, t, n) {
				let r = void 0;
				if (at(e)) return nt(Ce(e));
				if (it(e)) r = () => Ce(e.useValue);
				else if ((s = e) && s.useExisting) r = () => Ve(Ce(e.useExisting));
				else if (e && e.useFactory) r = () => e.useFactory(...Be(e.deps || []));
				else {
					const s = Ce(e && (e.useClass || e.provide));
					if (
						(s ||
							(function(e, t, n) {
								let r = '';
								throw (e && t && (r = ` - only instances of Provider and Type are allowed, got: [${t.map((e) => (e == n ? '?' + n + '?' : '...')).join(', ')}]`),
								new Error(`Invalid provider for the NgModule '${_e(e)}'` + r));
							})(t, n, e),
						!e.deps)
					)
						return nt(s);
					r = () => new s(...Be(e.deps));
				}
				var s;
				return r;
			}
			function st(e, t, n = !1) {
				return { factory: e, value: t, multi: n ? [] : void 0 };
			}
			function ot(e, t) {
				e.forEach((e) => (Array.isArray(e) ? ot(e, t) : t(e)));
			}
			function it(e) {
				return null !== e && 'object' == typeof e && Ue in e;
			}
			function at(e) {
				return 'function' == typeof e;
			}
			const lt = function(e, t, n) {
					return et({ name: n }, t, e, n);
				},
				ct = (() => {
					class e {
						static create(e, t) {
							return Array.isArray(e) ? lt(e, t, '') : lt(e.providers, e.parent, e.name || '');
						}
					}
					return (e.THROW_IF_NOT_FOUND = Me), (e.NULL = new qe()), (e.ngInjectableDef = fe({ token: e, providedIn: 'any', factory: () => Ve(Pe) })), (e.__NG_ELEMENT_ID__ = -1), e;
				})(),
				ut = 'ngDebugContext',
				pt = 'ngOriginalError',
				ht = 'ngErrorLogger',
				dt = new Ie('AnalyzeForEntryComponents'),
				ft = (function() {
					var e = { OnPush: 0, Default: 1 };
					return (e[e.OnPush] = 'OnPush'), (e[e.Default] = 'Default'), e;
				})();
			let gt = new Map();
			const mt = new Set();
			function bt(e) {
				return 'string' == typeof e ? e : e.text();
			}
			const yt = (function() {
					var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
					return (e[e.Emulated] = 'Emulated'), (e[e.Native] = 'Native'), (e[e.None] = 'None'), (e[e.ShadowDom] = 'ShadowDom'), e;
				})(),
				wt = {},
				_t = [],
				vt = he({ ngComponentDef: he }),
				xt = he({ ngDirectiveDef: he }),
				Ct = he({ ngPipeDef: he }),
				kt = he({ ngModuleDef: he }),
				St = he({ ngLocaleIdDef: he }),
				Ot = he({ __NG_ELEMENT_ID__: he });
			let Et = 0;
			function Tt(e) {
				const t = e.type,
					n = t.prototype,
					r = {},
					s = {
						type: t,
						providersResolver: null,
						consts: e.consts,
						vars: e.vars,
						factory: e.factory,
						template: e.template || null,
						ngContentSelectors: e.ngContentSelectors,
						hostBindings: e.hostBindings || null,
						contentQueries: e.contentQueries || null,
						declaredInputs: r,
						inputs: null,
						outputs: null,
						exportAs: e.exportAs || null,
						onChanges: null,
						onInit: n.ngOnInit || null,
						doCheck: n.ngDoCheck || null,
						afterContentInit: n.ngAfterContentInit || null,
						afterContentChecked: n.ngAfterContentChecked || null,
						afterViewInit: n.ngAfterViewInit || null,
						afterViewChecked: n.ngAfterViewChecked || null,
						onDestroy: n.ngOnDestroy || null,
						onPush: e.changeDetection === ft.OnPush,
						directiveDefs: null,
						pipeDefs: null,
						selectors: e.selectors,
						viewQuery: e.viewQuery || null,
						features: e.features || null,
						data: e.data || {},
						encapsulation: e.encapsulation || yt.Emulated,
						id: 'c',
						styles: e.styles || _t,
						_: null,
						setInput: null,
						schemas: e.schemas || null,
						tView: null
					};
				return (
					(s._ =
						'' +
						{
							toString: () => {
								const n = e.directives,
									o = e.features,
									i = e.pipes;
								(s.id += Et++),
									(s.inputs = At(e.inputs, r)),
									(s.outputs = At(e.outputs)),
									o && o.forEach((e) => e(s)),
									(s.directiveDefs = n ? () => ('function' == typeof n ? n() : n).map(It) : null),
									(s.pipeDefs = i ? () => ('function' == typeof i ? i() : i).map(Pt) : null),
									t.hasOwnProperty(ye) || (t[ye] = fe({ token: t, factory: e.factory }));
							}
						}),
					s
				);
			}
			function It(e) {
				return (
					jt(e) ||
					(function(e) {
						return e[xt] || null;
					})(e)
				);
			}
			function Pt(e) {
				return (function(e) {
					return e[Ct] || null;
				})(e);
			}
			function Mt(e) {
				return {
					type: e.type,
					bootstrap: e.bootstrap || _t,
					declarations: e.declarations || _t,
					imports: e.imports || _t,
					exports: e.exports || _t,
					transitiveCompileScopes: null,
					schemas: e.schemas || null,
					id: e.id || null
				};
			}
			function At(e, t) {
				if (null == e) return wt;
				const n = {};
				for (const r in e)
					if (e.hasOwnProperty(r)) {
						let s = e[r],
							o = s;
						Array.isArray(s) && ((o = s[1]), (s = s[0])), (n[s] = r), t && (t[s] = o);
					}
				return n;
			}
			const Rt = Tt;
			function jt(e) {
				return e[vt] || null;
			}
			function Dt(e, t) {
				const n = e[kt] || null;
				if (!n && !0 === t) throw new Error(`Type ${_e(e)} does not have 'ngModuleDef' property.`);
				return n;
			}
			function Nt(e) {
				return 'string' == typeof e ? e : null == e ? '' : '' + e;
			}
			function Ut(e) {
				return 'function' == typeof e ? e.name || e.toString() : 'object' == typeof e && null != e && 'function' == typeof e.type ? e.type.name || e.type.toString() : Nt(e);
			}
			const Lt = (() => (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(Te))(),
				Ht = '\ufffd';
			function Ft(e) {
				return e instanceof Function ? e() : e;
			}
			const zt = 0,
				Vt = 1,
				$t = 2,
				Bt = 3,
				qt = 4,
				Zt = 5,
				Gt = 6,
				Wt = 7,
				Qt = 8,
				Yt = 9,
				Jt = 10,
				Kt = 11,
				Xt = 12,
				en = 13,
				tn = 14,
				nn = 15,
				rn = 17,
				sn = 18,
				on = 20,
				an = 1,
				ln = 2,
				cn = 7,
				un = 9,
				pn = '__ngContext__';
			function hn(e) {
				for (; Array.isArray(e); ) e = e[zt];
				return e;
			}
			function dn(e) {
				return Array.isArray(e) && 'object' == typeof e[an];
			}
			function fn(e) {
				return Array.isArray(e) && !0 === e[an];
			}
			function gn(e) {
				return Array.isArray(e) && 'number' == typeof e[an];
			}
			function mn(e, t) {
				return hn(t[e + on]);
			}
			function bn(e, t) {
				return hn(t[e.index]);
			}
			function yn(e, t) {
				return t[Vt].data[e + on];
			}
			function wn(e, t) {
				const n = t[e];
				return dn(n) ? n : n[zt];
			}
			function _n(e) {
				return 0 != (4 & e.flags);
			}
			function vn(e) {
				return 1 == (1 & e.flags);
			}
			function xn(e) {
				return null !== e.template;
			}
			function Cn(e) {
				return 0 != (512 & e[$t]);
			}
			function kn(e) {
				const t = (function(e) {
					return e[pn];
				})(e);
				return t ? (Array.isArray(t) ? t : t.lView) : null;
			}
			function Sn(e) {
				return fn(e[Bt]);
			}
			function On(e) {
				e[sn] = 0;
			}
			function En(e, t, n, r, s, o) {
				const { onChanges: i, onInit: a, doCheck: l } = t;
				s >= 0 && (!n.preOrderHooks || s === n.preOrderHooks.length) && (i || a || l) && (n.preOrderHooks || (n.preOrderHooks = [])).push(r),
					o >= 0 && (!n.preOrderCheckHooks || o === n.preOrderCheckHooks.length) && (i || l) && (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(r),
					i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, i)),
					a && (n.preOrderHooks || (n.preOrderHooks = [])).push(-e, a),
					l && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, l), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, l));
			}
			function Tn(e, t) {
				if (e.firstTemplatePass)
					for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
						const t = e.data[n];
						t.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(-n, t.afterContentInit),
							t.afterContentChecked &&
								((e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, t.afterContentChecked)),
							t.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(-n, t.afterViewInit),
							t.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, t.afterViewChecked)),
							null != t.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, t.onDestroy);
					}
			}
			function In(e, t, n, r) {
				n || Pn(e, t.preOrderHooks, t.preOrderCheckHooks, n, 0, void 0 !== r ? r : null);
			}
			function Pn(e, t, n, r, s, o) {
				if (r) return;
				const i = (3 & e[$t]) === s ? t : n;
				i &&
					(function(e, t, n, r) {
						const s = null != r ? r : -1;
						let o = 0;
						for (let i = void 0 !== r ? 65535 & e[sn] : 0; i < t.length; i++)
							if ('number' == typeof t[i + 1]) {
								if (((o = t[i]), null != r && o >= r)) break;
							} else t[i] < 0 && (e[sn] += 65536), (o < s || -1 == s) && (Mn(e, n, t, i), (e[sn] = (4294901760 & e[sn]) + i + 2)), i++;
					})(e, i, s, o),
					null == o && (3 & e[$t]) === s && 3 !== s && ((e[$t] &= 1023), (e[$t] += 1));
			}
			function Mn(e, t, n, r) {
				const s = n[r] < 0,
					o = n[r + 1],
					i = e[s ? -n[r] : n[r]];
				s ? e[$t] >> 10 < e[sn] >> 16 && (3 & e[$t]) === t && ((e[$t] += 1024), o.call(i)) : o.call(i);
			}
			let An,
				Rn = null;
			function jn(e) {
				Rn = e;
			}
			let Dn,
				Nn = null;
			function Un(e) {
				Nn = e;
			}
			function Ln() {
				return Vn;
			}
			const Hn = 1;
			let Fn,
				zn,
				Vn,
				$n = Hn,
				Bn = 0,
				qn = 0;
			function Zn(e = null) {
				mr !== e && (yr(null == e ? -1 : e), ($n = null == e ? 0 : Hn), (Bn = 0), (qn = 0));
			}
			function Gn() {
				return $n;
			}
			function Wn() {
				($n += 1 + qn), (Bn = 0), (qn = 0);
			}
			function Qn(e) {
				(Bn += e), (qn = Math.max(qn, Bn));
			}
			function Yn() {
				return Bn;
			}
			function Jn(e) {
				sr = e;
			}
			function Kn() {
				return Fn;
			}
			function Xn(e, t) {
				(Fn = e), (zn = t);
			}
			function er(e, t) {
				(Fn = e), (Vn = t);
			}
			function tr() {
				return zn;
			}
			function nr() {
				zn = !1;
			}
			function rr(e = Vn) {
				return 4 == (4 & e[$t]);
			}
			let sr = null,
				or = !1;
			function ir() {
				return or;
			}
			function ar(e) {
				or = e;
			}
			let lr = -1;
			function cr() {
				return lr;
			}
			function ur(e) {
				lr = e;
			}
			let pr = 0;
			function hr() {
				return pr;
			}
			function dr(e) {
				pr = e;
			}
			function fr(e, t) {
				const n = Vn;
				return e && (lr = e[Vt].bindingStartIndex), (Fn = t), (zn = !0), (Vn = sr = e), n;
			}
			function gr(e, t) {
				const n = Vn[Vt];
				if (rr(Vn)) Vn[$t] &= -5;
				else
					try {
						On(Vn), t && Pn(Vn, n.viewHooks, n.viewCheckHooks, or, 2, void 0);
					} finally {
						(Vn[$t] &= -73), (Vn[Wt] = n.bindingStartIndex);
					}
				jn(null), fr(e, null);
			}
			let mr = -1;
			function br() {
				return mr;
			}
			function yr(e) {
				(mr = e), jn(null);
			}
			let wr = null;
			const _r = '__SANITIZER_TRUSTED_BRAND__';
			let vr = !0,
				xr = !1;
			function Cr() {
				return (xr = !0), vr;
			}
			class kr {
				constructor(e) {
					if (
						((this.defaultDoc = e),
						(this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
						(this.inertBodyElement = this.inertDocument.body),
						null == this.inertBodyElement)
					) {
						const e = this.inertDocument.createElement('html');
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
										} catch (e) {
											return !1;
										}
									})()
										? this.getInertBodyElement_DOMParser
										: this.getInertBodyElement_InertDocument))
							: (this.getInertBodyElement = this.getInertBodyElement_XHR);
				}
				getInertBodyElement_XHR(e) {
					e = '<body><remove></remove>' + e + '</body>';
					try {
						e = encodeURI(e);
					} catch (r) {
						return null;
					}
					const t = new XMLHttpRequest();
					(t.responseType = 'document'), t.open('GET', 'data:text/html;charset=utf-8,' + e, !1), t.send(void 0);
					const n = t.response.body;
					return n.removeChild(n.firstChild), n;
				}
				getInertBodyElement_DOMParser(e) {
					e = '<body><remove></remove>' + e + '</body>';
					try {
						const n = new window.DOMParser().parseFromString(e, 'text/html').body;
						return n.removeChild(n.firstChild), n;
					} catch (t) {
						return null;
					}
				}
				getInertBodyElement_InertDocument(e) {
					const t = this.inertDocument.createElement('template');
					return 'content' in t
						? ((t.innerHTML = e), t)
						: ((this.inertBodyElement.innerHTML = e), this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement);
				}
				stripCustomNsAttrs(e) {
					const t = e.attributes;
					for (let r = t.length - 1; 0 < r; r--) {
						const n = t.item(r).name;
						('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) || e.removeAttribute(n);
					}
					let n = e.firstChild;
					for (; n; ) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), (n = n.nextSibling);
				}
			}
			const Sr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				Or = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function Er(e) {
				return (e = String(e)).match(Sr) || e.match(Or) ? e : (Cr() && console.warn(`WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`), 'unsafe:' + e);
			}
			function Tr(e) {
				const t = {};
				for (const n of e.split(',')) t[n] = !0;
				return t;
			}
			function Ir(...e) {
				const t = {};
				for (const n of e) for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
				return t;
			}
			const Pr = Tr('area,br,col,hr,img,wbr'),
				Mr = Tr('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				Ar = Tr('rp,rt'),
				Rr = Ir(Ar, Mr),
				jr = Ir(
					Pr,
					Ir(
						Mr,
						Tr(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					Ir(
						Ar,
						Tr(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					Rr
				),
				Dr = Tr('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				Nr = Tr('srcset'),
				Ur = Ir(
					Dr,
					Nr,
					Tr(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					),
					Tr(
						'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
					)
				),
				Lr = Tr('script,style,template');
			class Hr {
				constructor() {
					(this.sanitizedSomething = !1), (this.buf = []);
				}
				sanitizeChildren(e) {
					let t = e.firstChild,
						n = !0;
					for (; t; )
						if (
							(t.nodeType === Node.ELEMENT_NODE ? (n = this.startElement(t)) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : (this.sanitizedSomething = !0),
							n && t.firstChild)
						)
							t = t.firstChild;
						else
							for (; t; ) {
								t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
								let e = this.checkClobberedElement(t, t.nextSibling);
								if (e) {
									t = e;
									break;
								}
								t = this.checkClobberedElement(t, t.parentNode);
							}
					return this.buf.join('');
				}
				startElement(e) {
					const t = e.nodeName.toLowerCase();
					if (!jr.hasOwnProperty(t)) return (this.sanitizedSomething = !0), !Lr.hasOwnProperty(t);
					this.buf.push('<'), this.buf.push(t);
					const n = e.attributes;
					for (let s = 0; s < n.length; s++) {
						const e = n.item(s),
							t = e.name,
							o = t.toLowerCase();
						if (!Ur.hasOwnProperty(o)) {
							this.sanitizedSomething = !0;
							continue;
						}
						let i = e.value;
						Dr[o] && (i = Er(i)),
							Nr[o] &&
								((r = i),
								(i = (r = String(r))
									.split(',')
									.map((e) => Er(e.trim()))
									.join(', '))),
							this.buf.push(' ', t, '="', Vr(i), '"');
					}
					var r;
					return this.buf.push('>'), !0;
				}
				endElement(e) {
					const t = e.nodeName.toLowerCase();
					jr.hasOwnProperty(t) && !Pr.hasOwnProperty(t) && (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
				}
				chars(e) {
					this.buf.push(Vr(e));
				}
				checkClobberedElement(e, t) {
					if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
						throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);
					return t;
				}
			}
			const Fr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				zr = /([^\#-~ |!])/g;
			function Vr(e) {
				return e
					.replace(/&/g, '&amp;')
					.replace(Fr, function(e) {
						return '&#' + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(zr, function(e) {
						return '&#' + e.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			let $r;
			function Br(e, t) {
				let n = null;
				try {
					$r = $r || new kr(e);
					let r = t ? String(t) : '';
					n = $r.getInertBodyElement(r);
					let s = 5,
						o = r;
					do {
						if (0 === s) throw new Error('Failed to sanitize html because the input is unstable');
						s--, (r = o), (o = n.innerHTML), (n = $r.getInertBodyElement(r));
					} while (r !== o);
					const i = new Hr(),
						a = i.sanitizeChildren(qr(n) || n);
					return Cr() && i.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), a;
				} finally {
					if (n) {
						const e = qr(n) || n;
						for (; e.firstChild; ) e.removeChild(e.firstChild);
					}
				}
			}
			function qr(e) {
				return 'content' in e &&
					(function(e) {
						return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
					})(e)
					? e.content
					: null;
			}
			const Zr = (function() {
				var e = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
				return (e[e.NONE] = 'NONE'), (e[e.HTML] = 'HTML'), (e[e.STYLE] = 'STYLE'), (e[e.SCRIPT] = 'SCRIPT'), (e[e.URL] = 'URL'), (e[e.RESOURCE_URL] = 'RESOURCE_URL'), e;
			})();
			class Gr {}
			const Wr = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				Qr = /^url\(([^)]+)\)$/;
			function Yr(e) {
				const t = (function() {
					const e = Ln();
					return e && e[en];
				})();
				return t ? t.sanitize(Zr.HTML, e) || '' : ('Html', (n = e) instanceof String && 'Html' === n[_r] ? e.toString() : Br(document, Nt(e)));
				var n;
			}
			const Jr = 8,
				Kr = 8,
				Xr = 9,
				es = -1;
			class ts {
				constructor(e, t, n) {
					(this.factory = e), (this.resolving = !1), (this.canSeeViewProviders = t), (this.injectImpl = n);
				}
			}
			const ns = (function() {
				var e = { Important: 1, DashCase: 2 };
				return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
			})();
			function rs(e) {
				return !!e.listen;
			}
			const ss = { createRenderer: (e, t) => document };
			function os(e, t) {
				e[pn] = t;
			}
			class is {
				constructor() {
					this._players = [];
				}
				flushPlayers() {
					for (let e = 0; e < this._players.length; e++) {
						const t = this._players[e];
						t.parent || 0 !== t.state || t.play();
					}
					this._players.length = 0;
				}
				queuePlayer(e) {
					this._players.push(e);
				}
			}
			const as = 0,
				ls = '@';
			function cs(e, t, n, r) {
				const s = [e || null, 0, [], n || [null, null], r || [null, null], [0, 0], [0], [0], null, null];
				return us(s, as), s;
			}
			function us(e, t, n = -1, r) {
				const s = e[2],
					o = 2 * t,
					i = o + 2;
				for (let l = s.length; l < i; l += 2) s.push(-1, null);
				const a = o + 0;
				n >= 0 && -1 === s[a] && ((s[a] = n), (s[o + 1] = r || null));
			}
			function ps(e, t) {
				let n = e,
					r = t[n],
					s = t;
				for (; Array.isArray(r); ) (s = r), (r = r[zt]);
				if (gn(s)) return s;
				{
					const o = yn(e - on, t).stylingTemplate;
					return (
						s !== t && (n = zt),
						(s[n] = o
							? (function(e, t) {
									const n = t.slice();
									for (let r = 0; r < 10; r++) {
										const e = t[r];
										Array.isArray(e) && (n[r] = e.slice());
									}
									return (n[0] = e), (n[1] |= 16), n;
							  })(r, o)
							: cs(r))
					);
				}
			}
			function hs(e) {
				return e[0] === ls;
			}
			function ds(e) {
				return 0 != (8 & e.flags);
			}
			function fs(e, t, n, r, s, o) {
				return (
					(o = o || n),
					s ? (e[s] = r) : e.push(r),
					!!r &&
						(r.addEventListener(200, () => {
							const t = e.indexOf(r);
							t && (t < e[0] ? (e[t] = null) : e.splice(t, 1)), r.destroy();
						}),
						(t.playerHandler || (t.playerHandler = new is())).queuePlayer(r, o),
						!0)
				);
			}
			function gs(e) {
				return 3 === e || 4 === e || 6 === e;
			}
			function ms(e) {
				return e !== es;
			}
			function bs(e) {
				return 32767 & e;
			}
			function ys(e) {
				return e >> 16;
			}
			function ws(e, t) {
				let n = ys(e),
					r = t;
				for (; n > 0; ) (r = r[rn]), n--;
				return r;
			}
			function _s(e) {
				const t = e[Bt];
				return fn(t) ? t[Bt] : t;
			}
			function vs(e) {
				let t = e[Gt];
				for (; null !== t && 2 === t.type; ) t = (e = e[rn])[Gt];
				return e;
			}
			function xs(e) {
				return (function(e) {
					let t = dn(e) ? e : kn(e);
					for (; t && !(512 & t[$t]); ) t = _s(t);
					return t;
				})(e)[Yt];
			}
			let Cs = !0;
			function ks(e) {
				const t = Cs;
				return (Cs = e), t;
			}
			const Ss = 255;
			let Os = 0;
			function Es(e, t) {
				const n = Is(e, t);
				if (-1 !== n) return n;
				const r = t[Vt];
				r.firstTemplatePass && ((e.injectorIndex = t.length), Ts(r.data, e), Ts(t, null), Ts(r.blueprint, null));
				const s = Ps(e, t),
					o = bs(s),
					i = ws(s, t),
					a = e.injectorIndex;
				if (ms(s)) {
					const e = i[Vt].data;
					for (let n = 0; n < 8; n++) t[a + n] = i[o + n] | e[o + n];
				}
				return (t[a + Kr] = s), a;
			}
			function Ts(e, t) {
				e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
			}
			function Is(e, t) {
				return -1 === e.injectorIndex || (e.parent && e.parent.injectorIndex === e.injectorIndex) || null == t[e.injectorIndex + Kr] ? -1 : e.injectorIndex;
			}
			function Ps(e, t) {
				if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
				let n = t[Gt],
					r = 1;
				for (; n && -1 === n.injectorIndex; ) (n = (t = t[rn]) ? t[Gt] : null), r++;
				return n ? n.injectorIndex | (r << 16) : -1;
			}
			function Ms(e, t, n) {
				!(function(e, t, n) {
					let r = 'string' != typeof n ? n[Ot] : n.charCodeAt(0) || 0;
					null == r && (r = n[Ot] = Os++);
					const s = r & Ss,
						o = 1 << s,
						i = 64 & s,
						a = 32 & s,
						l = t.data;
					128 & s ? (i ? (a ? (l[e + 7] |= o) : (l[e + 6] |= o)) : a ? (l[e + 5] |= o) : (l[e + 4] |= o)) : i ? (a ? (l[e + 3] |= o) : (l[e + 2] |= o)) : a ? (l[e + 1] |= o) : (l[e] |= o);
				})(e, t[Vt], n);
			}
			function As(e, t, n, r = pe.Default, s) {
				if (e) {
					const s = (function(e) {
						if ('string' == typeof e) return e.charCodeAt(0) || 0;
						const t = e[Ot];
						return 'number' == typeof t && t > 0 ? t & Ss : t;
					})(n);
					if ('function' == typeof s) {
						const o = Kn(),
							i = Ln();
						er(e, t);
						try {
							const e = s();
							if (null != e || r & pe.Optional) return e;
							throw new Error(`No provider for ${Ut(n)}!`);
						} finally {
							er(o, i);
						}
					} else if ('number' == typeof s) {
						if (-1 === s) return new Hs(e, t);
						let o = null,
							i = Is(e, t),
							a = es,
							l = r & pe.Host ? vs(t)[Gt] : null;
						for ((-1 === i || r & pe.SkipSelf) && ((a = -1 === i ? Ps(e, t) : t[i + Kr]), Ls(r, !1) ? ((o = t[Vt]), (i = bs(a)), (t = ws(a, t))) : (i = -1)); -1 !== i; ) {
							a = t[i + Kr];
							const e = t[Vt];
							if (Us(s, i, e.data)) {
								const e = js(i, t, n, o, r, l);
								if (e !== Rs) return e;
							}
							Ls(r, t[Vt].data[i + Jr] === l) && Us(s, i, t) ? ((o = e), (i = bs(a)), (t = ws(a, t))) : (i = -1);
						}
					}
				}
				if ((r & pe.Optional && void 0 === s && (s = null), 0 == (r & (pe.Self | pe.Host)))) {
					const e = t[Jt],
						o = ze(void 0);
					try {
						return e ? e.get(n, s, r & pe.Optional) : $e(n, s, r & pe.Optional);
					} finally {
						ze(o);
					}
				}
				if (r & pe.Optional) return s;
				throw new Error(`NodeInjector: NOT_FOUND [${Ut(n)}]`);
			}
			const Rs = {};
			function js(e, t, n, r, s, o) {
				const i = t[Vt],
					a = i.data[e + Jr],
					l = Ds(a, i, n, null == r ? vn(a) && Cs : r != i && 3 === a.type, s & pe.Host && o === a);
				return null !== l ? Ns(i.data, t, l, a) : Rs;
			}
			function Ds(e, t, n, r, s) {
				const o = e.providerIndexes,
					i = t.data,
					a = 65535 & o,
					l = e.directiveStart,
					c = o >> 16,
					u = s ? a + c : e.directiveEnd;
				for (let p = r ? a : a + c; p < u; p++) {
					const e = i[p];
					if ((p < l && n === e) || (p >= l && e.type === n)) return p;
				}
				if (s) {
					const e = i[l];
					if (e && xn(e) && e.type === n) return l;
				}
				return null;
			}
			function Ns(e, t, n, r) {
				let s = t[n];
				if (null !== (o = s) && 'object' == typeof o && Object.getPrototypeOf(o) == ts.prototype) {
					const o = s;
					if (o.resolving) throw new Error(`Circular dep for ${Ut(e[n])}`);
					const i = ks(o.canSeeViewProviders);
					let a;
					(o.resolving = !0), o.injectImpl && (a = ze(o.injectImpl));
					const l = Kn(),
						c = Ln();
					er(r, t);
					try {
						s = t[n] = o.factory(null, e, t, r);
					} finally {
						o.injectImpl && ze(a), ks(i), (o.resolving = !1), er(l, c);
					}
				}
				var o;
				return s;
			}
			function Us(e, t, n) {
				const r = 64 & e,
					s = 32 & e;
				let o;
				return !!((o = 128 & e ? (r ? (s ? n[t + 7] : n[t + 6]) : s ? n[t + 5] : n[t + 4]) : r ? (s ? n[t + 3] : n[t + 2]) : s ? n[t + 1] : n[t]) & (1 << e));
			}
			function Ls(e, t) {
				return !(e & pe.Self || (e & pe.Host && t));
			}
			class Hs {
				constructor(e, t) {
					(this._tNode = e), (this._lView = t);
				}
				get(e, t) {
					return As(this._tNode, this._lView, e, void 0, t);
				}
			}
			function Fs(e) {
				return e[ut];
			}
			function zs(e) {
				return e[pt];
			}
			function Vs(e, ...t) {
				e.error(...t);
			}
			class $s {
				constructor() {
					this._console = console;
				}
				handleError(e) {
					const t = this._findOriginalError(e),
						n = this._findContext(e),
						r = (function(e) {
							return e[ht] || Vs;
						})(e);
					r(this._console, 'ERROR', e), t && r(this._console, 'ORIGINAL ERROR', t), n && r(this._console, 'ERROR CONTEXT', n);
				}
				_findContext(e) {
					return e ? (Fs(e) ? Fs(e) : this._findContext(zs(e))) : null;
				}
				_findOriginalError(e) {
					let t = zs(e);
					for (; t && zs(t); ) t = zs(t);
					return t;
				}
			}
			const Bs = {};
			class qs {
				constructor(e, t) {
					(this.fn = e), (this.value = t);
				}
			}
			function Zs(e, t, n, r) {
				for (let s = 2; s < e.length; s += 3) if (e[s + 0] === t) return void (Mo(e[s + 1], n, e[s + 2], r) && No(s, e, t, n, r));
				No(null, e, t, n, r);
			}
			function Gs(e, t, n, r) {
				const s = t[4];
				let o = r || 2;
				for (; o < s.length; ) s[o + 1] && Ks(e, s[o + 0], !0, n, null), (o += 3);
				return o;
			}
			function Ws(e, t, n, r) {
				const s = t[3];
				let o = r || 2;
				for (; o < s.length; ) {
					const t = s[o + 1];
					t && Js(e, s[o + 0], t, n, null), (o += 3);
				}
				return o;
			}
			function Qs(e, t, n, r) {
				for (let s = n; s < r; s += 4) if (yo(e, s) === t) return s;
				return -1;
			}
			function Ys(e, t, n = 0) {
				!(function(e, t, n, r = 0) {
					if (
						(function(e, t, n, r) {
							return !e[6][1 + 4 * n + 0] && (r === Bs || Ro(e, !0, n) === r);
						})(e, 0, r, t)
					)
						return;
					const s = (t = t === Bs ? Ro(e, !0, r) : t) instanceof qs ? new Eo(t, e[0], 1) : null,
						o = s ? t.value : t;
					let i,
						a,
						l,
						c = s ? 1 : 0,
						u = !1;
					(function(e, t, n) {
						const r = e[9];
						if (s) {
							if (!r) return !0;
						} else if (!r) return !1;
						return r[1] !== s;
					})(e) &&
						((function(e, t, n) {
							let r = e[9] || (e[9] = [5, null, null, null, null]);
							n > 0 ? (r[n] = t) : (r.splice((n = r[0]), 0, t, null), (r[0] += 2));
						})(e, s, 1),
						(u = !0));
					let p = !1;
					'string' == typeof o ? ((l = o.split(/\s+/)), (p = !0)) : (l = o ? Object.keys(o) : _t),
						(i = ao(e)),
						(function(e, t, n, r, s, o, a, l, c) {
							let u = !1;
							const p = 1 + 4 * t,
								h = e[6],
								d = h[p + 1],
								f = h[p + 3];
							let g = 1 === h[p + 0] || !(h[p + 2] || !l),
								m = 0,
								b = 0;
							const y = !0 === a;
							let w = i,
								_ = o.length;
							for (; w < d; ) {
								const r = yo(e, w);
								if (_)
									for (let s = 0; s < o.length; s++) {
										const i = o[s],
											l = i || null;
										if (l && r === l) {
											const r = bo(e, w),
												i = To(e, w),
												c = !!y || a[l],
												p = mo(e, w);
											Oo(p, r, c) && Mo(r, c, i, t) && (uo(e, w, c), po(e, w, n, t), So(e, p, c) && (Xs(e, w, !0), (u = !0))), (o[s] = null), _--;
											break;
										}
									}
								w += 4;
							}
							if (_) {
								const r = null;
								e: for (let i = 0; i < o.length; i++) {
									const l = o[i];
									if (!l) continue;
									const c = !!y || a[l],
										p = l,
										h = w >= d;
									for (let r = w; r < s; r += 4) {
										if (yo(e, r) === p) {
											const s = To(e, r),
												o = ho(e, r),
												i = bo(e, r),
												a = mo(e, r);
											Mo(i, c, s, t) &&
												(h && (vo(e, w, r), m++),
												Oo(a, i, c) && ((null === c || (void 0 === c && c !== i)) && (g = !0), uo(e, w, c), (null !== i || So(e, a, c)) && (Xs(e, w, !0), (u = !0))),
												(s === t && n === o) || po(e, w, n, t)),
												(w += 4);
											continue e;
										}
									}
									if (null != c) {
										(g = !0), m++, xo(e, h ? w : d + 4 * b, !0, p, 1 | ko(e, p, !0, r), c, t, n), b++, (s += 4), (w += 4), (u = !0);
									}
								}
							}
							for (; w < s; ) {
								g = !0;
								const r = bo(e, w),
									s = mo(e, w);
								To(e, w), null != r && (g = !0), Oo(s, r, null) && (uo(e, w, null), So(e, s, r) && (Xs(e, w, !0), (u = !0)), po(e, w, n, t)), (w += 4);
							}
							(function(e, t, n, r, s, o, i, a) {
								const l = e[6],
									c = 1 + 4 * t;
								if (a) {
									const e = s + 4 * i;
									for (let t = c + 4; t < l.length; t += 4) (l[t + 1] = e), (l[t + 0] = 1);
								}
								(l[c + 0] = 0), (l[c + 1] = s), (l[c + 2] = r), (l[c + 3] = i);
								let u = i;
								for (let p = 1; p < c; p += 4) u += l[p + 3];
								l[0] = u;
							})(e, t, 0, l, d, 0, m, (g = g || f !== m)),
								u && wo(e, !0);
						})(e, r, c, 0, (a = e.length), l, p || o || wt, t),
						u && _o(e, !0);
				})(e, t, 0, n);
			}
			function Js(e, t, n, r, s, o, i) {
				(n = s && n ? s(t, n, 3) : n),
					o || i
						? (o && o.setValue(t, n), i && i.setValue(t, n))
						: n
						? ((n = n.toString()), rs(r) ? r.setStyle(e, t, n, ns.DashCase) : e.style.setProperty(t, n))
						: rs(r)
						? r.removeStyle(e, t, ns.DashCase)
						: e.style.removeProperty(t);
			}
			function Ks(e, t, n, r, s, o) {
				s || o ? (s && s.setValue(t, n), o && o.setValue(t, n)) : '' !== t && (n ? (rs(r) ? r.addClass(e, t) : e.classList.add(t)) : rs(r) ? r.removeClass(e, t) : e.classList.remove(t));
			}
			function Xs(e, t, n) {
				const r = t >= 10 ? t + 0 : t;
				n ? (e[r] |= 1) : (e[r] &= -2);
			}
			function eo(e, t) {
				return 1 == (1 & e[t >= 10 ? t + 0 : t]);
			}
			function to(e, t) {
				return 2 == (2 & e[t >= 10 ? t + 0 : t]);
			}
			function no(e, t) {
				return 4 == (4 & e[t >= 10 ? t + 0 : t]);
			}
			function ro(e, t, n) {
				return (31 & e) | (t << 5) | (n << 19);
			}
			function so(e, t) {
				const n = oo(t);
				return (2 & t ? e[4] : e[3])[n];
			}
			function oo(e) {
				return (e >> 5) & 16383;
			}
			function io(e) {
				const t = (e >> 19) & 16383;
				return t >= 10 ? t : -1;
			}
			function ao(e) {
				return e[6][2];
			}
			function lo(e) {
				return e[7][2];
			}
			function co(e, t, n) {
				e[t + 1] = n;
			}
			function uo(e, t, n) {
				e[t + 2] = n;
			}
			function po(e, t, n, r) {
				const s = (function(e, t) {
					return (n << 16) | e;
				})(r);
				e[t + 3] = s;
			}
			function ho(e, t) {
				return (e[t + 3] >> 16) & 65535;
			}
			function fo(e, t) {
				const n = ho(e, t);
				if (n) {
					const t = e[9];
					if (t) return t[n];
				}
				return null;
			}
			function go(e, t, n) {
				e[1 === t ? t : t + 0] = n;
			}
			function mo(e, t) {
				return e[1 === t ? t : t + 0];
			}
			function bo(e, t) {
				return e[t + 2];
			}
			function yo(e, t) {
				return e[t + 1];
			}
			function wo(e, t) {
				Xs(e, 1, t);
			}
			function _o(e, t) {
				t ? (e[1] |= 8) : (e[1] &= -9);
			}
			function vo(e, t, n) {
				if (t === n) return;
				const r = bo(e, t),
					s = yo(e, t),
					o = mo(e, t),
					i = ho(e, t),
					a = To(e, t);
				let l = o,
					c = mo(e, n);
				const u = io(l);
				if (u >= 0) {
					const t = mo(e, u);
					go(e, u, ro(t, oo(t), n));
				}
				const p = io(c);
				if (p >= 0) {
					const n = mo(e, p);
					go(e, p, ro(n, oo(n), t));
				}
				uo(e, t, bo(e, n)), co(e, t, yo(e, n)), go(e, t, mo(e, n)), po(e, t, ho(e, n), To(e, n)), uo(e, n, r), co(e, n, s), go(e, n, o), po(e, n, i, a);
			}
			function xo(e, t, n, r, s, o, i, a) {
				const l = t < e.length;
				e.splice(t, 0, 1 | s | (n ? 2 : 0), r, o, 0),
					po(e, t, a, i),
					l &&
						(function(e, n) {
							for (let r = t + 4; r < e.length; r += 4) {
								const t = io(mo(e, r));
								if (t > 0) {
									const n = oo(mo(e, t));
									go(e, t, ro((eo(e, t) ? 1 : 0) | (to(e, t) ? 2 : 0) | (no(e, t) ? 4 : 0), n, r));
								}
							}
						})(e);
			}
			function Co(e, t) {
				return null !== e;
			}
			function ko(e, t, n, r) {
				let s,
					o = r && r(t, null, 1) ? 4 : 0;
				return n ? ((o |= 2), (s = Io(e[4], t))) : (s = Io(e[3], t)), ro(o, (s = s > 0 ? s + 1 : 0), 0);
			}
			function So(e, t, n) {
				const r = so(e, t);
				return !r || Oo(t, r, n);
			}
			function Oo(e, t, n) {
				return !(2 & e) && t && n && 4 & e ? t.toString() !== n.toString() : t !== n;
			}
			class Eo {
				constructor(e, t, n) {
					(this._element = t), (this._type = n), (this._values = {}), (this._dirty = !1), (this._factory = e);
				}
				setValue(e, t) {
					this._values[e] !== t && ((this._values[e] = t), (this._dirty = !0));
				}
				buildPlayer(e, t) {
					if (this._dirty) {
						const n = this._factory.fn(this._element, this._type, this._values, t, e || null);
						return (this._values = {}), (this._dirty = !1), n;
					}
				}
			}
			function To(e, t) {
				return 65535 & e[t + 3];
			}
			function Io(e, t) {
				for (let n = 2; n < e.length; n += 3) if (e[n] === t) return n;
				return -1;
			}
			function Po(e, t) {
				const n = e[2];
				return n[2 * t + 1] || n[1] || null;
			}
			function Mo(e, t, n, r) {
				return null == e || (null != t ? r <= n : n === r);
			}
			function Ao(e) {
				const t = e[4];
				let n = t[1];
				if (null === n) {
					n = '';
					for (let e = 2; e < t.length; e += 3) t[e + 1] && (n += (n.length ? ' ' : '') + t[e]);
					t[1] = n;
				}
				return n;
			}
			function Ro(e, t, n) {
				return e[t ? 6 : 7][1 + 4 * n + 2] || null;
			}
			function jo(e) {
				return e.replace(/[a-z][A-Z]/g, (e) => `${e.charAt(0)}-${e.charAt(1).toLowerCase()}`);
			}
			function Do(e, t, n, r, s = 0) {
				const o = e[n ? 6 : 7];
				if (t > 0) {
					const e = 1 + 4 * t;
					for (; o.length < e; ) o.push(0, r, null, 0);
				}
				o.push(0, r, null, s);
			}
			function No(e, t, n, r, s) {
				return null === e && ((e = t.length), t.push(null, null, null), (t[e + 0] = n)), (t[e + 1] = r), (t[e + 2] = s), e;
			}
			const Uo = 'ng-template';
			function Lo(e, t) {
				const n = e.length,
					r = e.indexOf(t),
					s = r + t.length;
				return !(-1 === r || (r > 0 && ' ' !== e[r - 1]) || (s < n && ' ' !== e[s]));
			}
			function Ho(e, t, n) {
				return t === (0 !== e.type || n ? e.tagName : Uo);
			}
			function Fo(e, t, n) {
				let r = 4;
				const s = e.attrs || [],
					o = (function(e) {
						for (let t = 0; t < e.length; t++) if (gs(e[t])) return t;
						return e.length;
					})(s);
				let i = !1;
				for (let a = 0; a < t.length; a++) {
					const l = t[a];
					if ('number' != typeof l) {
						if (!i)
							if (4 & r) {
								if (((r = 2 | (1 & r)), ('' !== l && !Ho(e, l, n)) || ('' === l && 1 === t.length))) {
									if (zo(r)) return !1;
									i = !0;
								}
							} else {
								const c = 8 & r ? l : t[++a];
								if (8 & r && e.stylingTemplate) {
									if (!Lo(Vo(e), c)) {
										if (zo(r)) return !1;
										i = !0;
									}
									continue;
								}
								const u = $o(8 & r ? 'class' : l, s, 0 == e.type && e.tagName !== Uo, n);
								if (-1 === u) {
									if (zo(r)) return !1;
									i = !0;
									continue;
								}
								if ('' !== c) {
									let e;
									e = u > o ? '' : s[u + 1];
									const t = 8 & r ? e : null;
									if ((t && !Lo(t, c)) || (2 & r && c !== e)) {
										if (zo(r)) return !1;
										i = !0;
									}
								}
							}
					} else {
						if (!i && !zo(r) && !zo(l)) return !1;
						if (i && zo(l)) continue;
						(i = !1), (r = l | (1 & r));
					}
				}
				return zo(r) || i;
			}
			function zo(e) {
				return 0 == (1 & e);
			}
			function Vo(e) {
				return e.stylingTemplate ? Ao(e.stylingTemplate) : '';
			}
			function $o(e, t, n, r) {
				if (null === t) return -1;
				let s = 0;
				if (r || !n) {
					let n = !1;
					for (; s < t.length; ) {
						const r = t[s];
						if (r === e) return s;
						if (3 === r || 6 === r) n = !0;
						else {
							if (1 === r) {
								let e = t[++s];
								for (; 'string' == typeof e; ) e = t[++s];
								continue;
							}
							if (4 === r) break;
							if (0 === r) {
								s += 4;
								continue;
							}
						}
						s += n ? 1 : 2;
					}
					return -1;
				}
				return (function(e, t) {
					let n = e.indexOf(4);
					if (n > -1)
						for (n++; n < e.length; ) {
							if (e[n] === t) return n;
							n++;
						}
					return -1;
				})(t, e);
			}
			function Bo(e, t, n = !1) {
				for (let r = 0; r < t.length; r++) if (Fo(e, t[r], n)) return !0;
				return !1;
			}
			function qo(e, t) {
				e: for (let n = 0; n < t.length; n++) {
					const r = t[n];
					if (e.length === r.length) {
						for (let t = 0; t < e.length; t++) if (e[t] !== r[t]) continue e;
						return !0;
					}
				}
				return !1;
			}
			let Zo,
				Go = 0;
			function Wo() {
				return Go > 0;
			}
			function Qo(e) {
				Zo = e;
			}
			function Yo() {
				return Zo;
			}
			const Jo = '--MAP--';
			function Ko(e, t) {
				e[1] = t;
			}
			function Xo(e) {
				return e[0];
			}
			function ei(e, t) {
				return e[t + 2];
			}
			function ti(e, t) {
				return 1 & e[t + 0];
			}
			function ni(e, t) {
				return (1 & ti(e, t)) > 0;
			}
			function ri(e, t) {
				return e[t + 0] >> 1;
			}
			function si(e, t, n) {
				const r = ti(e, t);
				e[t + 0] = r | (n << 1);
			}
			function oi(e, t) {
				return e[t + 1];
			}
			function ii(e, t, n) {
				return e[t + 3 + n];
			}
			function ai(e, t) {
				return t === e[1];
			}
			function li(e) {
				!(function(e, t) {
					e[0] = t;
				})(e, 1 | Xo(e));
			}
			function ci(e) {
				return (1 & Xo(e)) > 0;
			}
			function ui(e) {
				return 5 + e[3];
			}
			function pi(e, t) {
				return (Array.isArray(e) ? e[0] : e) !== (Array.isArray(t) ? t[0] : t);
			}
			function hi(e) {
				return null != e && '' !== e;
			}
			function di(e) {
				const t = Yo() || e[en];
				return t && 'function' != typeof t ? (Qo(t), fi) : t;
			}
			const fi = (e, t, n) => {
					const r = Yo();
					return r ? !(2 & n) || r.sanitize(Zr.STYLE, t) : t;
				},
				gi = null,
				mi = 1,
				bi = 1,
				yi = 0,
				wi = 1;
			let _i = wi,
				vi = wi,
				xi = 0,
				Ci = 0,
				ki = [];
			function Si(e, t, n, r, s, o, i, a, l) {
				ci(e) ||
					(i
						? (function(e, t, n, r, s) {
								ki.unshift(e, t, n, r, s);
						  })(e, n, r, s, l)
						: (ki.length && Oi(), Ei(e, n, r, s, l)));
				const c = a || pi(t[s], o);
				return c && (t[s] = o), c;
			}
			function Oi() {
				let e = 0;
				for (; e < ki.length; ) Ei(ki[e++], ki[e++], ki[e++], ki[e++], ki[e++]);
				ki.length = 0;
			}
			function Ei(e, t, n, r, s) {
				if (n) {
					let o = !1,
						i = ui(e);
					for (; i < e.length; ) {
						const a = oi(e, i),
							l = ei(e, i);
						if ((o = n <= l)) {
							n < l && Ti(e, i, n, s), Ii(e, !1, i, r, t);
							break;
						}
						i += 3 + a;
					}
					o || (Ti(e, e.length, n, s), Ii(e, !1, i, r, t));
				} else Ii(e, !0, 2, r, t);
			}
			function Ti(e, t, n, r) {
				e.splice(t, 0, r ? 1 : 0, mi, n, gi), si(e, t, bi);
			}
			function Ii(e, t, n, r, s) {
				let o = n + 3 + oi(e, n);
				t || o--, 'number' == typeof r ? (e.splice(o, 0, r), e[n + 1]++, si(e, n, ri(e, n) | (1 << s))) : 'string' == typeof r && null == e[o] && (e[o] = r);
			}
			function Pi(e, t, n, r, s, o, i) {
				ki.length && Oi();
				const a = !0 === (l = s) ? -1 : !1 === l ? 0 : l;
				var l;
				const c = Mi,
					u = (a & ri(e, 2)) > 0 ? 1 : 0;
				let p = ui(e);
				for (; p < e.length; ) {
					const s = oi(e, p);
					if (a & ri(e, p)) {
						let a = !1;
						const l = ei(e, p),
							h = s - 1,
							d = ii(e, p, h);
						for (let s = 0; s < h; s++) {
							const c = ii(e, p, s),
								u = r[c];
							if (hi(u)) {
								o(t, n, l, i && ni(e, p) ? i(l, u, 2) : u, c), (a = !0);
								break;
							}
						}
						if (c) {
							const s = c(e, t, n, r, o, i, u | (a ? 4 : 2), l, d);
							a = a || s;
						}
						a || o(t, n, l, d);
					}
					p += 3 + s;
				}
				c && c(e, t, n, r, o, i, u);
			}
			let Mi = null;
			const Ai = (e, t, n, r) => {
					r ? ((r = r.toString()), e && rs(e) ? e.setStyle(t, n, r, ns.DashCase) : t.style.setProperty(n, r)) : e && rs(e) ? e.removeStyle(t, n, ns.DashCase) : t.style.removeProperty(n);
				},
				Ri = (e, t, n, r) => {
					'' !== n && (r ? (e && rs(e) ? e.addClass(t, n) : t.classList.add(n)) : e && rs(e) ? e.removeClass(t, n) : t.classList.remove(n));
				},
				ji = (e, t, n, r, s, o, i, a, l) => {
					let c = !1;
					if (oi(e, 2)) {
						let u = !0;
						const p = !a;
						p && -2 & i && ((u = !1), (c = !0)),
							u &&
								(c = (function e(t, n, r, s, o, i, a, l, c, u) {
									let p = !1;
									if (c < oi(t, 2)) {
										const h = ii(t, 2, c),
											d = s[h];
										let f = (function(e) {
											return e >= Ui.length && Ui.push(1), Ui[e];
										})(c);
										for (; f < d.length; ) {
											const g = Li(d, f),
												m = l && g > l,
												b = !m && g === l,
												y = Fi(d, f),
												w = hi(y);
											let _ = e(t, n, r, s, o, i, m ? a : Di(a, w, b), m ? l : g, c + 1, u);
											if (m) break;
											if (!_ && Ni(a, b)) {
												const e = b && !w,
													t = e ? u : y,
													s = e ? h : null;
												o(n, r, g, i ? i(g, t, 3) : t, s), (_ = !0);
											}
											(p = _ && b), (f += 2);
										}
										Ui[c] = f;
									}
									return p;
								})(e, t, n, r, s, o, i, a || null, 0, l || null)),
							p &&
								(function() {
									for (let e = 0; e < Ui.length; e++) Ui[e] = 1;
								})();
					}
					return c;
				};
			function Di(e, t, n) {
				let r = e;
				return t || !n || 4 & e ? ((r |= 4), (r &= -3)) : ((r |= 2), (r &= -5)), r;
			}
			function Ni(e, t) {
				let n = (1 & e) > 0;
				return n ? 4 & e && t && (n = !1) : 2 & e && (n = t), n;
			}
			const Ui = [];
			function Li(e, t) {
				return e[t + 0];
			}
			function Hi(e, t, n) {
				e[t + 1] = n;
			}
			function Fi(e, t) {
				return e[t + 1];
			}
			function zi(e) {
				Vi(Ln(), e);
			}
			function Vi(e, t) {
				In(e, e[Vt], ir(), t), yr(t);
			}
			const $i = (() => Promise.resolve(null))();
			function Bi(e) {
				const t = e[Vt],
					n = rr(e);
				if (((t.firstTemplatePass = !1), (e[Wt] = t.bindingStartIndex), !n)) {
					const n = ir();
					In(e, t, n, void 0),
						(function(e) {
							for (let t = e[tn]; null !== t; t = t[qt])
								if (-1 === t[ln] && fn(t))
									for (let e = un; e < t.length; e++) {
										const n = t[e];
										Yi(n, n[Vt], n[Yt]);
									}
						})(e),
						qi(t, e),
						On(e),
						Pn(e, t.contentHooks, t.contentCheckHooks, n, 1, void 0),
						(function(e, t) {
							const n = br();
							try {
								if (e.expandoInstructions) {
									let n = (t[Wt] = e.expandoStartIndex);
									ur(n);
									let r = -1,
										s = -1;
									for (let o = 0; o < e.expandoInstructions.length; o++) {
										const i = e.expandoInstructions[o];
										if ('number' == typeof i) {
											if (i <= 0) {
												Zn((s = -i));
												const t = e.expandoInstructions[++o];
												r = n += Xr + t;
											} else n += i;
											ur(n);
										} else null !== i && ((t[Wt] = n), i(2, hn(t[r]), s), Wn()), r++;
									}
								}
							} finally {
								Zn(n);
							}
						})(t, e);
				}
				n && t.staticContentQueries && qi(t, e),
					(function(e) {
						if (null != e) for (let t = 0; t < e.length; t++) ma(e[t]);
					})(t.components);
			}
			function qi(e, t) {
				if (null != e.contentQueries) {
					dr(0);
					for (let n = 0; n < e.contentQueries.length; n++) {
						const r = e.contentQueries[n];
						e.data[r].contentQueries(2, t[r], r);
					}
				}
			}
			function Zi(e, t) {
				const n = t || Ln()[Xt],
					r = wr;
				return rs(n) ? n.createElement(e, r) : null === r ? n.createElement(e) : n.createElementNS(r, e);
			}
			function Gi(e, t, n, r, s, o, i, a, l, c) {
				const u = t.blueprint.slice();
				return (
					(u[zt] = s),
					(u[$t] = 140 | r),
					On(u),
					(u[Bt] = u[rn] = e),
					(u[Yt] = n),
					(u[Kt] = i || (e && e[Kt])),
					(u[Xt] = a || (e && e[Xt])),
					(u[en] = l || (e && e[en]) || null),
					(u[Jt] = c || (e && e[Jt]) || null),
					(u[Gt] = o),
					u
				);
			}
			function Wi(e, t, n, r, s, o) {
				const i = n + on,
					a =
						e.data[i] ||
						(function(e, t, n, r, s, o, i) {
							const a = Kn(),
								l = tr(),
								c = l ? a : a && a.parent,
								u = (e.data[n] = ra(c && c !== t ? c : null, r, n, s, o));
							return (0 !== i && e.firstChild) || (e.firstChild = u), a && (!l || null != a.child || (null === u.parent && 2 !== a.type) ? l || (a.next = u) : (a.child = u)), u;
						})(e, t, i, r, s, o, n);
				return Xn(a, !0), a;
			}
			function Qi(e, t, n, r) {
				let s = e.node;
				return null == s && (e.node = s = ra(t, 2, n, null, null)), (r[Gt] = s);
			}
			function Yi(e, t, n) {
				const r = tr(),
					s = Kn();
				let o;
				if (512 & e[$t]) wa(xs(e));
				else {
					let i = !1;
					try {
						Xn(null, !0), (o = fr(e, e[Gt])), On(e), Ki(e, t.template, Xi(e), n), (e[Vt].firstTemplatePass = !1), Bi(e), (i = !0);
					} finally {
						gr(o, i), Xn(s, r);
					}
				}
			}
			function Ji(e, t, n) {
				const r = e[Kt],
					s = fr(e, e[Gt]),
					o = !ir(),
					i = rr(e);
				let a = !1;
				try {
					o && !i && r.begin && r.begin(), i && (n && Ki(e, n, 1, t), Bi(e), (e[$t] &= -5)), On(e), n && Ki(e, n, 2, t), Bi(e), (a = !0);
				} finally {
					o && !i && r.end && r.end(), gr(s, a);
				}
			}
			function Ki(e, t, n, r) {
				wr = null;
				const s = br();
				try {
					Zn(null), 2 & n && Vi(e, 0), t(n, r);
				} finally {
					yr(s);
				}
			}
			function Xi(e) {
				return rr(e) ? 1 : 2;
			}
			function ea(e, t, n, r = bn) {
				if (!Dn) return;
				const s = Kn();
				e.firstTemplatePass &&
					(function(e, t, n, r, s) {
						const o = s ? { '': -1 } : null;
						if (n) {
							ha(r, e.data.length, n.length);
							for (let e = 0; e < n.length; e++) {
								const t = n[e];
								t.providersResolver && t.providersResolver(t);
							}
							aa(e, r, n.length);
							const s = (e.preOrderHooks && e.preOrderHooks.length) || 0,
								i = (e.preOrderCheckHooks && e.preOrderCheckHooks.length) || 0,
								a = r.index - on;
							for (let r = 0; r < n.length; r++) {
								const l = n[r],
									c = e.data.length;
								da(e, t, l, l.factory), pa(e.data.length - 1, l, o), En(c, l, e, a, s, i);
							}
						}
						o &&
							(function(e, t, n) {
								if (t) {
									const r = (e.localNames = []);
									for (let e = 0; e < t.length; e += 2) {
										const s = n[t[e + 1]];
										if (null == s) throw new Error(`Export of name '${t[e + 1]}' not found!`);
										r.push(t[e], s);
									}
								}
							})(r, s, o);
					})(
						e,
						t,
						(function(e, t, n) {
							const r = e.directiveRegistry;
							let s = null;
							if (r)
								for (let o = 0; o < r.length; o++) {
									const e = r[o];
									Bo(n, e.selectors, !1) && (s || (s = []), Ms(Es(Kn(), t), t, e.type), xn(e) ? (1 & n.flags && Ze(n), (n.flags = 1), s.unshift(e)) : s.push(e));
								}
							return s;
						})(e, t, s),
						s,
						n || null
					),
					(function(e, t, n) {
						const r = n.directiveStart,
							s = n.directiveEnd;
						!e.firstTemplatePass && r < s && Es(n, t);
						for (let o = r; o < s; o++) {
							const r = e.data[o];
							xn(r) && fa(t, n, r), la(t, Ns(e.data, t, o, n), r, o);
						}
					})(e, t, s),
					(function(e, t, n) {
						const r = n.directiveStart,
							s = n.directiveEnd,
							o = e.expandoInstructions,
							i = e.firstTemplatePass,
							a = n.index - on,
							l = br();
						try {
							Zn(a);
							for (let a = r; a < s; a++) {
								const r = e.data[a],
									s = t[a];
								r.hostBindings ? (ia(r, o, s, n, i), Wn()) : i && o.push(null);
							}
						} finally {
							Zn(l);
						}
					})(e, t, s),
					(function(e, t, n) {
						const r = t.localNames;
						if (r) {
							let s = t.index + 1;
							for (let o = 0; o < r.length; o += 2) {
								const i = r[o + 1],
									a = -1 === i ? n(t, e) : e[i];
								e[s++] = a;
							}
						}
					})(t, s, r),
					Zn(null);
			}
			function ta(e) {
				return e.tView || (e.tView = na(-1, e.template, e.consts, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas));
			}
			function na(e, t, n, r, s, o, i, a) {
				const l = on + n,
					c = l + r,
					u = (function(e, t) {
						const n = new Array(t).fill(null, 0, e).fill(Bs, e);
						return (n[Wt] = e), n;
					})(l, c);
				return (u[Vt] = {
					id: e,
					blueprint: u,
					template: t,
					viewQuery: i,
					node: null,
					data: u.slice().fill(null, l),
					bindingStartIndex: l,
					viewQueryStartIndex: c,
					expandoStartIndex: c,
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
					directiveRegistry: 'function' == typeof s ? s() : s,
					pipeRegistry: 'function' == typeof o ? o() : o,
					firstChild: null,
					schemas: a
				});
			}
			function ra(e, t, n, r, s) {
				return {
					type: t,
					index: n,
					injectorIndex: e ? e.injectorIndex : -1,
					directiveStart: -1,
					directiveEnd: -1,
					propertyMetadataStartIndex: -1,
					propertyMetadataEndIndex: -1,
					flags: 0,
					providerIndexes: 0,
					tagName: r,
					attrs: s,
					localNames: null,
					initialInputs: void 0,
					inputs: void 0,
					outputs: void 0,
					tViews: null,
					next: null,
					projectionNext: null,
					child: null,
					parent: e,
					stylingTemplate: null,
					projection: null,
					onElementCreationFns: null,
					newStyles: null,
					newClasses: null
				};
			}
			function sa(e, t) {
				const n = Ln()[Vt];
				let r = null;
				const s = e.directiveStart,
					o = e.directiveEnd;
				if (o > s) {
					const e = 0 === t,
						i = n.data;
					for (let t = s; t < o; t++) {
						const n = i[t],
							s = e ? n.inputs : n.outputs;
						for (let e in s)
							if (s.hasOwnProperty(e)) {
								const n = s[e];
								(r = r || {}).hasOwnProperty(e) ? r[e].push(t, e, n) : (r[e] = [t, e, n]);
							}
					}
				}
				return r;
			}
			const oa = { class: 'className', for: 'htmlFor', formaction: 'formAction', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' };
			function ia(e, t, n, r, s) {
				const o = t.length;
				Un(e), e.hostBindings(1, n, r.index - on), Un(null), o === t.length && s && t.push(e.hostBindings);
			}
			function aa(e, t, n) {
				const r = -(t.index - on),
					s = e.data.length - (65535 & t.providerIndexes);
				(e.expandoInstructions || (e.expandoInstructions = [])).push(r, s, n);
			}
			function la(e, t, n, r) {
				const s = Kn();
				ca(e, s, t),
					s &&
						s.attrs &&
						(function(e, t, n, r) {
							let o = s.initialInputs;
							(void 0 === o || e >= o.length) &&
								(o = (function(e, t, n) {
									const r = n.initialInputs || (n.initialInputs = []);
									for (let i = r.length; i <= e; i++) r.push(null);
									const s = n.attrs;
									let o = 0;
									for (; o < s.length; ) {
										const n = s[o];
										if (0 === n) {
											o += 4;
											continue;
										}
										if (5 === n) {
											o += 2;
											continue;
										}
										if ('number' == typeof n) break;
										const i = t[n],
											a = s[o + 1];
										void 0 !== i && (r[e] || (r[e] = [])).push(n, i, a), (o += 2);
									}
									return r;
								})(e, n.inputs, s));
							const i = o[e];
							if (i) {
								const e = n.setInput;
								for (let r = 0; r < i.length; ) {
									const s = i[r++],
										o = i[r++],
										a = i[r++];
									e ? n.setInput(t, a, s, o) : (t[o] = a);
								}
							}
						})(r, t, n),
					e[Vt].firstTemplatePass && n.contentQueries && (s.flags |= 4),
					xn(n) && (wn(s.index, e)[Yt] = t);
			}
			function ca(e, t, n) {
				const r = bn(t, e);
				os(n, e), r && os(r, e);
			}
			function ua(e) {
				const t = Ln()[Vt];
				(t.components || (t.components = [])).push(e.index);
			}
			function pa(e, t, n) {
				if (n) {
					if (t.exportAs) for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
					t.template && (n[''] = e);
				}
			}
			function ha(e, t, n) {
				(e.flags = 1 & e.flags), (e.directiveStart = t), (e.directiveEnd = t + n), (e.providerIndexes = t);
			}
			function da(e, t, n, r) {
				e.data.push(n);
				const s = new ts(r, xn(n), null);
				e.blueprint.push(s), t.push(s);
			}
			function fa(e, t, n) {
				const r = bn(t, e),
					s = ta(n),
					o = e[Kt],
					i = ba(e, Gi(e, s, null, n.onPush ? 64 : 16, e[t.index], t, o, o.createRenderer(r, n)));
				(i[Gt] = t), (e[t.index] = i), e[Vt].firstTemplatePass && ua(t);
			}
			function ga(e, t, n, r, s) {
				return new Array(e, !0, s ? -1 : 0, t, null, null, r, n, null);
			}
			function ma(e) {
				const t = Ln(),
					n = wn(e, t);
				(128 == (128 & n[$t]) || rr(t)) &&
					80 & n[$t] &&
					((function(e) {
						const t = e[Vt];
						for (let n = e.length; n < t.blueprint.length; n++) e[n] = t.blueprint[n];
					})(n),
					xa(n, n[Yt]));
			}
			function ba(e, t) {
				return e[tn] ? (e[nn][qt] = t) : (e[tn] = t), (e[nn] = t), t;
			}
			function ya(e) {
				for (; e; ) {
					e[$t] |= 64;
					const t = _s(e);
					if (Cn(e) && !t) return e;
					e = t;
				}
				return null;
			}
			function wa(e) {
				for (let t = 0; t < e.components.length; t++) {
					const n = e.components[t];
					Ji(kn(n), n);
				}
			}
			function _a(e, t) {
				const n = e[Kt];
				n.begin && n.begin();
				try {
					rr(e) && xa(e, t), xa(e, t);
				} catch (r) {
					throw (Ta(e, r), r);
				} finally {
					n.end && n.end();
				}
			}
			function va(e) {
				wa(e[Yt]);
			}
			function xa(e, t) {
				const n = e[Vt],
					r = fr(e, e[Gt]),
					s = n.template,
					o = rr(e);
				let i = !1;
				try {
					On(e), o && Ca(1, n, t), Ki(e, s, Xi(e), t), Bi(e), (o && !n.staticViewQueries) || Ca(2, n, t), (i = !0);
				} finally {
					gr(r, i);
				}
			}
			function Ca(e, t, n) {
				const r = t.viewQuery;
				r && (dr(t.viewQueryStartIndex), r(e, n));
			}
			const ka = $i;
			function Sa(e) {
				return void 0 === e.inputs && (e.inputs = sa(e, 0)), e.inputs;
			}
			function Oa(e) {
				return e[Qt] || (e[Qt] = []);
			}
			function Ea(e) {
				return e[Vt].cleanup || (e[Vt].cleanup = []);
			}
			function Ta(e, t) {
				const n = e[Jt],
					r = n ? n.get($s, null) : null;
				r && r.handleError(t);
			}
			function Ia(e, t, n) {
				const r = e[Vt];
				for (let s = 0; s < t.length; ) {
					const o = t[s++],
						i = t[s++],
						a = t[s++],
						l = e[o],
						c = r.data[o];
					c.setInput ? c.setInput(l, n, i, a) : (l[a] = n);
				}
			}
			function Pa(e) {
				let t;
				if ((t = e.onElementCreationFns)) {
					for (let e = 0; e < t.length; e++) t[e]();
					e.onElementCreationFns = null;
				}
			}
			let Ma = null;
			function Aa() {
				if (!Ma) {
					const e = Te.Symbol;
					if (e && e.iterator) Ma = e.iterator;
					else {
						const e = Object.getOwnPropertyNames(Map.prototype);
						for (let t = 0; t < e.length; ++t) {
							const n = e[t];
							'entries' !== n && 'size' !== n && Map.prototype[n] === Map.prototype.entries && (Ma = n);
						}
					}
				}
				return Ma;
			}
			function Ra(e, t) {
				return e === t || ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t));
			}
			function ja(e) {
				return !!Da(e) && (Array.isArray(e) || (!(e instanceof Map) && Aa() in e));
			}
			function Da(e) {
				return null !== e && ('function' == typeof e || 'object' == typeof e);
			}
			function Na(e, t, n) {
				return (e[t] = n);
			}
			function Ua(e, t) {
				return e[t];
			}
			function La(e, t, n) {
				return (s = n), ((r = e[t]) == r || s == s) && r !== s && ((e[t] = n), !0);
				var r, s;
			}
			function Ha(e, t, n, r) {
				const s = br(),
					o = Fa(Ln(), t);
				return (
					o !== Bs &&
						(function(e, t, n, r, s, o) {
							const i = Ln(),
								a = mn(e, i),
								l = yn(e, i);
							let c, u;
							if (!s && (c = Sa(l)) && (u = c[t]))
								Ia(i, u, n),
									vn(l) &&
										(function(t, n) {
											const r = wn(e + on, t);
											16 & r[$t] || (r[$t] |= 64);
										})(i);
							else if (3 === l.type) {
								!(function(e, t, n, r, s) {
									const o = t[Wt] - 1,
										i = r[o];
									i[0] == Ht && ((r[o] = n + i), s || (-1 == e.propertyMetadataStartIndex && (e.propertyMetadataStartIndex = o), (e.propertyMetadataEndIndex = o + 1)));
								})(l, i, (t = oa[t] || t), i[Vt].data, s);
								const e = i[Xt];
								(n = null != r ? r(n, l.tagName || '', t) : n), rs(e) ? e.setProperty(a, t, n) : hs(t) || (a.setProperty ? a.setProperty(t, n) : (a[t] = n));
							}
						})(s, e, o, n, r),
					Ha
				);
			}
			function Fa(e, t) {
				const n = e[Wt]++;
				return (
					(function(e, t = '', n = '') {
						const r = e[Vt].data,
							s = e[Wt] - 1;
						null == r[s] && (r[s] = Ht + t + Ht + n);
					})(e),
					La(e, n, t) ? t : Bs
				);
			}
			function za(e, t, n, r) {
				const s = br(),
					o = Ln(),
					i = Fa(o, t);
				return (
					i !== Bs &&
						(function(e, t, n, r, s, o) {
							const i = mn(e, r),
								a = r[Xt];
							if (null == n) rs(a) ? a.removeAttribute(i, t, o) : i.removeAttribute(t);
							else {
								const l = yn(e, r),
									c = null == s ? Nt(n) : s(n, l.tagName || '', t);
								rs(a) ? a.setAttribute(i, t, c, o) : o ? i.setAttributeNS(o, t, c) : i.setAttribute(t, c);
							}
						})(s, e, i, o, n, r),
					za
				);
			}
			function Va(e, t) {
				const n = t[Bt];
				return -1 === e.index ? (fn(n) ? n : null) : n;
			}
			function $a(e, t) {
				const n = Va(e, t);
				return n ? Xa(t[Xt], n[cn]) : null;
			}
			function Ba(e, t, n, r, s) {
				let o,
					i = !1;
				fn(r) ? (o = r) : dn(r) && ((i = !0), (r = r[zt]));
				const a = hn(r);
				0 === e
					? Ja(t, n, a, s || null)
					: 1 === e
					? (function(e, t, n) {
							const r = Xa(e, t);
							r &&
								(function(e, t, n, r) {
									rs(e) ? e.removeChild(t, n, r) : t.removeChild(n);
								})(e, r, t, n);
					  })(t, a, i)
					: 2 === e && t.destroyNode(a),
					null != o &&
						(function(e, t, n, r, s) {
							const o = n[cn];
							o !== hn(n) && Ba(t, e, r, o, s);
							for (let i = un; i < n.length; i++) sl(e, t, n[i], r, o);
						})(t, e, o, n, s);
			}
			function qa(e, t, n) {
				const r = $a(e[Vt].node, e);
				r && sl(e[Xt], t ? 0 : 1, e, r, n);
			}
			function Za(e, t, n) {
				const r = un + n,
					s = t.length;
				n > 0 && (t[r - 1][qt] = e), n < s - un ? ((e[qt] = t[r]), t.splice(un + n, 0, e)) : (t.push(e), (e[qt] = null)), (e[Bt] = t), e[Zt] && e[Zt].insertView(n), (e[$t] |= 128);
			}
			function Ga(e, t) {
				if (e.length <= un) return;
				const n = un + t,
					r = e[n];
				return (
					r &&
						(t > 0 && (e[n - 1][qt] = r[qt]),
						e.splice(un + t, 1),
						qa(r, !1),
						128 & r[$t] && !(256 & r[$t]) && r[Zt] && r[Zt].removeView(),
						(r[Bt] = null),
						(r[qt] = null),
						(r[$t] &= -129)),
					r
				);
			}
			function Wa(e) {
				if (!(256 & e[$t])) {
					const t = e[Xt];
					rs(t) && t.destroyNode && sl(t, 2, e, null, null),
						(function(e) {
							let t = e[tn];
							if (!t) return Ya(e);
							for (; t; ) {
								let n = null;
								if (dn(t)) n = t[tn];
								else {
									const e = t[un];
									e && (n = e);
								}
								if (!n) {
									for (; t && !t[qt] && t !== e; ) Ya(t), (t = Qa(t, e));
									Ya(t || e), (n = t && t[qt]);
								}
								t = n;
							}
						})(e);
				}
			}
			function Qa(e, t) {
				let n;
				return dn(e) && (n = e[Gt]) && 2 === n.type ? Va(n, e) : e[Bt] === t ? null : e[Bt];
			}
			function Ya(e) {
				if (dn(e) && !(256 & e[$t])) {
					(e[$t] &= -129),
						(e[$t] |= 256),
						(function(e) {
							const t = e[Vt];
							let n;
							if (null != t && null != (n = t.destroyHooks))
								for (let r = 0; r < n.length; r += 2) {
									const t = e[n[r]];
									t instanceof ts || n[r + 1].call(t);
								}
						})(e),
						(function(e) {
							const t = e[Vt].cleanup;
							if (null !== t) {
								const n = e[Qt];
								for (let r = 0; r < t.length - 1; r += 2)
									if ('string' == typeof t[r]) {
										const s = t[r + 1],
											o = 'function' == typeof s ? s(e) : hn(e[s]),
											i = n[t[r + 2]],
											a = t[r + 3];
										'boolean' == typeof a ? o.removeEventListener(t[r], i, a) : a >= 0 ? n[a]() : n[-a].unsubscribe(), (r += 2);
									} else t[r].call(n[t[r + 1]]);
								e[Qt] = null;
							}
						})(e);
					const t = e[Gt];
					t && 3 === t.type && rs(e[Xt]) && e[Xt].destroy(), Sn(e) && e[Zt] && e[Zt].removeView();
				}
			}
			function Ja(e, t, n, r) {
				rs(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0);
			}
			function Ka(e, t, n, r) {
				null !== r
					? Ja(e, t, n, r)
					: (function(e, t, n) {
							rs(e) ? e.appendChild(t, n) : t.appendChild(n);
					  })(e, t, n);
			}
			function Xa(e, t) {
				return rs(e) ? e.parentNode(t) : t.parentNode;
			}
			function el(e, t, n) {
				const r = (function(e, t) {
					if (Cn(t)) return Xa(t[Xt], bn(e, t));
					const n = (function(e) {
							for (; null != e.parent && (4 === e.parent.type || 5 === e.parent.type); ) e = e.parent;
							return e;
						})(e),
						r = n.parent;
					if (null == r) {
						const e = t[Gt];
						return 2 === e.type
							? $a(e, t)
							: (function(e) {
									const t = e[Gt];
									return t && 3 === t.type ? bn(t, _s(e)) : null;
							  })(t);
					}
					{
						const e = n && 5 === n.type;
						if (e && 2 & n.flags) return bn(n, t).parentNode;
						if (1 & r.flags && !e) {
							const e = t[Vt].data,
								n = e[e[r.index].directiveStart].encapsulation;
							if (n !== yt.ShadowDom && n !== yt.Native) return null;
						}
						return bn(r, t);
					}
				})(t, n);
				if (null != r) {
					const s = n[Xt],
						o = (function(e, t) {
							if (2 === e.type) {
								const n = Va(e, t);
								return tl(n.indexOf(t, un) - un, n);
							}
							return 4 === e.type || 5 === e.type ? bn(e, t) : null;
						})(t.parent || n[Gt], n);
					if (Array.isArray(e)) for (let t of e) Ka(s, r, t, o);
					else Ka(s, r, e, o);
				}
			}
			function tl(e, t) {
				const n = un + e + 1;
				if (n < t.length) {
					const e = t[n],
						r = e[Gt].child;
					return null !== r ? bn(r, e) : t[cn];
				}
				return t[cn];
			}
			function nl(e, t, n, r) {
				for (; e; ) rl(e, t, n, r), (e = e.next);
			}
			function rl(e, t, n, r) {
				const s = bn(e, r);
				el(s, t, n), os(s, r);
				const o = r[e.index];
				if (0 === e.type) for (let i = un; i < o.length; i++) qa(o[i], !0, o[cn]);
				else if (5 === e.type) {
					let t = e.child;
					nl(t, t, r, r);
				} else 4 === e.type && nl(e.child, t, n, r), fn(o) && el(o[cn], t, n);
			}
			function sl(e, t, n, r, s) {
				let o = n[Vt].node.child;
				for (; null !== o; ) ol(e, t, n, o, r, s), (o = o.next);
			}
			function ol(e, t, n, r, s, o) {
				const i = r.type;
				4 === i
					? (function(e, t, n, r, s, o) {
							Ba(t, e, s, n[r.index], o);
							let i = r.child;
							for (; i; ) ol(e, t, n, i, s, o), (i = i.next);
					  })(e, t, n, r, s, o)
					: 1 === i
					? (function(e, t, n, r, s, o) {
							const i = vs(n),
								a = i[Gt].projection[r.projection];
							if (Array.isArray(a)) for (let l = 0; l < a.length; l++) Ba(t, e, s, a[l], o);
							else {
								let n = a;
								const r = i[Bt];
								for (; null !== n; ) ol(e, t, r, n, s, o), (n = n.projectionNext);
							}
					  })(e, t, n, r, s, o)
					: Ba(t, e, s, n[r.index], o);
			}
			function il(e, t, n, r, s, o, i, a) {
				const l = Ln(),
					c = l[Vt],
					u = (function(e, t, n) {
						const r = Ln(),
							s = e + on,
							o = (r[e + on] = r[Xt].createComment('')),
							i = Wi(r[Vt], r[Gt], e, 0, t, n),
							a = (r[s] = ga(r[s], r, o, i));
						return el(o, i, r), ba(r, a), i;
					})(e, s || null, o || null);
				c.firstTemplatePass && (u.tViews = na(-1, t, n, r, c.directiveRegistry, c.pipeRegistry, null, null)),
					ea(c, l, i, a),
					(function(e, t) {
						const n = e[Zt];
						if (n) {
							const r = e[t.index];
							r[Zt] ? n.insertNodeBeforeViews(t) : (n.addNode(t), (r[Zt] = n.container()));
						}
					})(l, u),
					os(bn(u, l), l),
					Tn(c, u),
					nr();
			}
			function al(e, t = pe.Default) {
				e = Ce(e);
				const n = Ln();
				return null == n ? Ve(e, t) : As(Kn(), n, e, t);
			}
			function ll() {
				return Gn() + Yn();
			}
			function cl(e) {
				return pl(e, !1);
			}
			function ul(e) {
				return pl(e, !0);
			}
			function pl(e, t) {
				let n = t ? e.newClasses : e.newStyles;
				return n || ((n = [0, 0, 1, 0, Jo]), t ? (e.newClasses = n) : (e.newStyles = n)), n;
			}
			function hl(e, t, n, r, s) {
				!(function(e, t, n, r, s) {
					if (16 & e[1]) return;
					if (
						!(function(e, t, n, r) {
							const s = e[2],
								o = 2 * t;
							return !((o < s.length && s[o + 0] >= 0) || (us(e, t, e[5].length, r), 0));
						})(e, t, 0, s)
					)
						return;
					r &&
						(r = (function(e) {
							const t = [];
							for (let n = 0; n < e.length; n++) t.push(jo(e[n]));
							return t;
						})(r));
					const o = e[5],
						i = o[1],
						a = o[0],
						l = e[6],
						c = e[7],
						u = 4 * a;
					let p = 10 + u,
						h = p + 4 * i,
						d = h + u;
					const f = o.length;
					o.push(r ? r.length : 0, n ? n.length : 0);
					let g = 0;
					const m = [];
					if (r && r.length)
						for (let O = 0; O < r.length; O++) {
							const t = r[O];
							let n = Qs(e, t, 10, p);
							-1 == n && ((n = p + g), (g += 4), m.push(t)), o.push(n);
						}
					const b = [];
					if (n && n.length)
						for (let O = 0; O < n.length; O++) {
							const t = n[O];
							let r = Qs(e, t, p, h);
							-1 == r ? ((r = h + g), (g += 4), b.push(t)) : (r += 4 * m.length), o.push(r);
						}
					let y = 2;
					if (m.length)
						for (; y < f; ) {
							const e = o[y + 0],
								t = o[y + 1];
							if (t) {
								const n = y + 2 + e;
								for (let e = n; e < n + t; e++) o[e] += 4 * m.length;
							}
							y += 2 + (e + t);
						}
					const w = b.length + m.length;
					for (let O = 10; O < e.length; O += 4) {
						const t = O >= h,
							n = O >= (t ? d : p),
							r = mo(e, O),
							s = oo(r);
						let o = io(r);
						go(e, O, ro(r, s, (o += t ? (n ? 4 * m.length : 0) : 4 * w + 4 * (n ? m.length : 0))));
					}
					for (let O = 0; O < 4 * m.length; O++) e.splice(d, 0, null), e.splice(p, 0, null), p++, h++, (d += 2);
					for (let O = 0; O < 4 * b.length; O++) e.splice(h, 0, null), e.push(null), h++, d++;
					const _ = e[4],
						v = e[3];
					for (let O = 0; O < w; O++) {
						const n = O >= m.length,
							r = n ? O - m.length : O,
							o = n ? b[r] : m[r];
						let l, c;
						n ? ((l = d + 4 * (i + r)), (c = p + 4 * (i + r))) : ((l = h + 4 * (a + r)), (c = 10 + 4 * (a + r)));
						let u = n ? _ : v,
							f = Io(u, o);
						-1 === f ? (f = No(null, u, o, !n && null, t) + 1) : (f += 1);
						const g = ko(e, o, n, s || null);
						go(e, c, ro(g, f, l)), co(e, c, o), uo(e, c, null), po(e, c, 0, t), go(e, l, ro(g, f, c)), co(e, l, o), uo(e, l, null), po(e, l, 0, t);
					}
					(o[1] = i + b.length), (o[0] = a + m.length), (l[0] += b.length), (c[0] += m.length);
					const x = 4 * m.length,
						C = 4 * b.length,
						k = c.length;
					Do(e, t, !1, h + 4 * a, m.length);
					for (let O = 1; O < k; O += 4) c[O + 1] += C + x;
					const S = l.length;
					Do(e, t, !0, d + 4 * i, b.length);
					for (let O = 1; O < S; O += 4) l[O + 1] += 2 * x + C;
					go(e, 1, ro(0, 0, h));
				})(e.stylingTemplate, s, t, n, r);
			}
			function dl() {
				return Gn() + Yn();
			}
			function fl(e, t) {
				let n = Rn;
				return n || jn((n = ps(e + on, t))), n;
			}
			function gl(e, t, n, r) {
				const s = Ln(),
					o = s[Vt],
					i = (s[e + on] = Zi(t)),
					a = s[Xt],
					l = Wi(o, s[Gt], e, 3, t, n || null);
				let c = 0,
					u = 0,
					p = -1;
				if (n) {
					!(function(e, t, n, r) {
						if (e.firstTemplatePass && !t.stylingTemplate) {
							const e = (function(e, t) {
								for (let n = r; n < e.length; n++) {
									const t = e[n];
									if (1 === t || 2 === t) return n;
								}
								return -1;
							})(n);
							e >= 0 &&
								(t.stylingTemplate = (function(e, t, n = 0) {
									const r = cs();
									return (
										(function(e, t, n, r) {
											if (16 & e[1]) return;
											us(e, r);
											let s = null,
												o = null,
												i = -1;
											for (let a = n; a < t.length; a++) {
												const n = t[a];
												'number' == typeof n ? (i = n) : 1 == i ? Zs((s = s || e[4]), n, !0, r) : 2 == i && Zs((o = o || e[3]), n, t[++a], r);
											}
										})(r, e, t, n),
										r
									);
								})(n, e));
						}
					})(
						o,
						l,
						n,
						(p = (function(e, t) {
							const n = Ln()[Xt],
								r = rs(n);
							let s = 0;
							for (; s < t.length; ) {
								const o = t[s];
								if ('number' == typeof o) {
									if (0 !== o) break;
									s++;
									const i = t[s++],
										a = t[s++],
										l = t[s++];
									r ? n.setAttribute(e, a, l, i) : e.setAttributeNS(i, a, l);
								} else {
									const i = o,
										a = t[++s];
									hs(i) ? r && n.setProperty(e, i, a) : r ? n.setAttribute(e, i, a) : e.setAttribute(i, a), s++;
								}
							}
							return s;
						})(i, n))
					);
					const e = l.stylingTemplate;
					e && ((c = Ws(i, e, a)), (u = Gs(i, e, a)));
				}
				if ((el(i, l, s), ea(o, s, r), 0 === An && os(i, s), An++, o.firstTemplatePass)) {
					const e = Sa(l);
					e && e.hasOwnProperty('class') && (l.flags |= 8), e && e.hasOwnProperty('style') && (l.flags |= 16);
				}
				l.stylingTemplate && (Gs(i, l.stylingTemplate, a, u), Ws(i, l.stylingTemplate, a, c)),
					Wo() &&
						p >= 0 &&
						(function(e, t, n) {
							let r,
								s,
								o = -1;
							for (let i = p; i < t.length; i++) {
								const n = t[i];
								'number' == typeof n ? (o = n) : 1 == o ? Ei((r = r || ul(e)), -1, n, !0, !1) : 2 == o && Ei((s = s || cl(e)), -1, n, t[++i], !1);
							}
						})(l, n);
				const h = s[Zt];
				h && (h.addNode(l), (s[Zt] = h.clone(l))),
					(function(e, t, n) {
						if (_n(t)) {
							const r = t.directiveEnd;
							for (let s = t.directiveStart; s < r; s++) {
								const t = e.data[s];
								t.contentQueries && t.contentQueries(1, n[s], s);
							}
						}
					})(o, l, s);
			}
			function ml() {
				let e = Kn();
				tr() ? nr() : Xn((e = e.parent), !1), e.onElementCreationFns && Pa(e);
				const t = Ln(),
					n = t[Zt];
				n && e.index === n.nodeIndex && (t[Zt] = n.parent), Tn(t[Vt], e), An--;
				let r = null;
				ds(e) && ((r = ps(e.index, t)), Ia(t, e.inputs.class, Ao(r))),
					0 != (16 & e.flags) &&
						((r = r || ps(e.index, t)),
						Ia(
							t,
							e.inputs.style,
							(function(e) {
								const t = r[3];
								let n = t[1];
								if (null === n) {
									n = '';
									for (let e = 2; e < t.length; e += 3) {
										const r = t[e + 1];
										null !== r && (n += (n.length ? ';' : '') + `${t[e]}:${r}`);
									}
									t[1] = n;
								}
								return n;
							})()
						));
			}
			function bl(e, t, n, r) {
				gl(e, t, n, r), ml();
			}
			function yl(e) {
				return !!e && 'function' == typeof e.then;
			}
			function wl(e, t, n = !1, r) {
				!(function(e, t, n = !1, r, s) {
					const o = Ln(),
						i = Kn(),
						a = o[Vt],
						l = a.firstTemplatePass && (a.cleanup || (a.cleanup = []));
					let c = !0;
					if (3 === i.type) {
						const s = bn(i, o),
							a = r ? r(s) : wt,
							u = a.target || s,
							p = o[Xt],
							h = Oa(o),
							d = h.length,
							f = r ? (e) => r(hn(e[i.index])).target : i.index;
						if (rs(p)) {
							let n = null;
							if (
								(!r &&
									(function(e) {
										return e.directiveEnd > e.directiveStart;
									})(i) &&
									(n = (function(e, t, n) {
										const r = e[Vt].cleanup;
										if (null != r)
											for (let s = 0; s < r.length - 1; s += 2) {
												const o = r[s];
												if (o === t && r[s + 1] === n) {
													const t = e[Qt],
														n = r[s + 2];
													return t.length > n ? t[n] : null;
												}
												'string' == typeof o && (s += 2);
											}
										return null;
									})(o, e, i.index)),
								null !== n)
							)
								(t.__ngNextListenerFn__ = n.__ngNextListenerFn__), (n.__ngNextListenerFn__ = t), (c = !1);
							else {
								t = vl(i, o, t, !1);
								const n = p.listen(a.name || u, e, t);
								h.push(t, n), l && l.push(e, f, d, d + 1);
							}
						} else (t = vl(i, o, t, !0)), u.addEventListener(e, t, n), h.push(t), l && l.push(e, f, d, n);
					}
					void 0 === i.outputs && (i.outputs = sa(i, 1));
					const u = i.outputs;
					let p;
					if (c && u && (p = u[e])) {
						const n = p.length;
						if (n) {
							const r = Oa(o);
							for (let s = 0; s < n; s += 3) {
								const n = o[p[s]][p[s + 2]].subscribe(t),
									a = r.length;
								r.push(t, n), l && l.push(e, i.index, a, -(a + 1));
							}
						}
					}
				})(e, t, n, r);
			}
			function _l(e, t, n) {
				try {
					return !1 !== t(n);
				} catch (r) {
					return Ta(e, r), !1;
				}
			}
			function vl(e, t, n, r) {
				return function s(o) {
					const i = 1 & e.flags ? wn(e.index, t) : t;
					0 == (32 & t[$t]) && ya(i);
					let a = _l(t, n, o),
						l = s.__ngNextListenerFn__;
					for (; l; ) (a = _l(t, l, o) && a), (l = l.__ngNextListenerFn__);
					return r && !1 === a && (o.preventDefault(), (o.returnValue = !1)), a;
				};
			}
			function xl(e = 1) {
				return (function(e = 1) {
					return (sr = (function(e, t) {
						for (; e > 0; ) (t = t[rn]), e--;
						return t;
					})(e, sr))[Yt];
				})(e);
			}
			function Cl(e, t) {
				let n = null;
				const r = (function(e) {
					const t = e.attrs;
					if (null != t) {
						const e = t.indexOf(5);
						if (0 == (1 & e)) return t[e + 1];
					}
					return null;
				})(e);
				for (let s = 0; s < t.length; s++) {
					const o = t[s];
					if ('*' !== o) {
						if (null === r ? Bo(e, o, !0) : qo(r, o)) return s;
					} else n = s;
				}
				return n;
			}
			function kl(e) {
				const t = vs(Ln())[Gt];
				if (!t.projection) {
					const n = (t.projection = new Array(e ? e.length : 1).fill(null)),
						r = n.slice();
					let s = t.child;
					for (; null !== s; ) {
						const t = e ? Cl(s, e) : 0;
						null !== t && (r[t] ? (r[t].projectionNext = s) : (n[t] = s), (r[t] = s)), (s = s.next);
					}
				}
			}
			let Sl = !1;
			function Ol(e, t = 0, n) {
				const r = Ln(),
					s = Wi(r[Vt], r[Gt], e, 1, null, n || null);
				null === s.projection && (s.projection = t),
					nr(),
					Sl ||
						(function e(t, n, r, s) {
							const o = s[Bt];
							let i = s[Gt].projection[r];
							if (Array.isArray(i)) el(i, n, t);
							else for (; i; ) 32 & i.flags || (1 === i.type ? e(t, n, i.projection, vs(o)) : ((i.flags |= 2), rl(i, n, t, o))), (i = i.projectionNext);
						})(r, s, t, vs(r));
			}
			function El(e, t) {
				const n = Ln(),
					r = (n[e + on] = (function(e, t) {
						return rs(t) ? t.createText(Nt(e)) : t.createTextNode(Nt(e));
					})(t, n[Xt])),
					s = Wi(n[Vt], n[Gt], e, 3, null, null);
				nr(), el(r, s, n);
			}
			function Tl(e, t) {
				return { components: [], scheduler: e || Lt, clean: ka, playerHandler: t || null, flags: 0 };
			}
			function Il(e, t) {
				const n = kn(e)[Vt],
					r = n.data.length - 1;
				En(r, t, n, -1, -1, -1), Tn(n, { directiveStart: r, directiveEnd: r + 1 });
			}
			class Pl {
				constructor(e, t, n) {
					(this.previousValue = e), (this.currentValue = t), (this.firstChange = n);
				}
				isFirstChange() {
					return this.firstChange;
				}
			}
			function Ml(e) {
				e.type.prototype.ngOnChanges &&
					((e.setInput = Al),
					(e.onChanges = function() {
						const e = jl(this),
							t = e && e.current;
						if (t) {
							const n = e.previous;
							if (n === wt) e.previous = t;
							else for (let e in t) n[e] = t[e];
							(e.current = null), this.ngOnChanges(t);
						}
					}));
			}
			function Al(e, t, n, r) {
				const s =
						jl(e) ||
						(function(e, t) {
							return (e[Rl] = { previous: wt, current: null });
						})(e),
					o = s.current || (s.current = {}),
					i = s.previous,
					a = this.declaredInputs[n],
					l = i[a];
				(o[a] = new Pl(l && l.currentValue, t, i === wt)), (e[r] = t);
			}
			const Rl = '__ngSimpleChanges__';
			function jl(e) {
				return e[Rl] || null;
			}
			function Dl(e) {
				let t = Object.getPrototypeOf(e.type.prototype).constructor;
				for (; t; ) {
					let n = void 0;
					if (xn(e)) n = t.ngComponentDef || t.ngDirectiveDef;
					else {
						if (t.ngComponentDef) throw new Error('Directives cannot inherit Components');
						n = t.ngDirectiveDef;
					}
					const r = t.ngBaseDef;
					if (r || n) {
						const t = e;
						(t.inputs = Nl(e.inputs)), (t.declaredInputs = Nl(e.declaredInputs)), (t.outputs = Nl(e.outputs));
					}
					if (r) {
						const t = r.viewQuery,
							n = r.contentQueries,
							s = r.hostBindings;
						s && Hl(e, s), t && Ul(e, t), n && Ll(e, n), de(e.inputs, r.inputs), de(e.declaredInputs, r.declaredInputs), de(e.outputs, r.outputs);
					}
					if (n) {
						const t = n.hostBindings;
						t && Hl(e, t);
						const r = n.viewQuery,
							s = n.contentQueries;
						r && Ul(e, r),
							s && Ll(e, s),
							de(e.inputs, n.inputs),
							de(e.declaredInputs, n.declaredInputs),
							de(e.outputs, n.outputs),
							(e.afterContentChecked = e.afterContentChecked || n.afterContentChecked),
							(e.afterContentInit = e.afterContentInit || n.afterContentInit),
							(e.afterViewChecked = e.afterViewChecked || n.afterViewChecked),
							(e.afterViewInit = e.afterViewInit || n.afterViewInit),
							(e.doCheck = e.doCheck || n.doCheck),
							(e.onDestroy = e.onDestroy || n.onDestroy),
							(e.onInit = e.onInit || n.onInit);
						const o = n.features;
						if (o) for (const n of o) n && n.ngInherit && n(e);
					} else {
						const n = t.prototype;
						n &&
							((e.afterContentChecked = e.afterContentChecked || n.ngAfterContentChecked),
							(e.afterContentInit = e.afterContentInit || n.ngAfterContentInit),
							(e.afterViewChecked = e.afterViewChecked || n.ngAfterViewChecked),
							(e.afterViewInit = e.afterViewInit || n.ngAfterViewInit),
							(e.doCheck = e.doCheck || n.ngDoCheck),
							(e.onDestroy = e.onDestroy || n.ngOnDestroy),
							(e.onInit = e.onInit || n.ngOnInit),
							n.ngOnChanges && ((Ml.ngInherit = !0), Ml)(e));
					}
					t = Object.getPrototypeOf(t);
				}
			}
			function Nl(e) {
				return e === wt ? {} : e === _t ? [] : e;
			}
			function Ul(e, t) {
				const n = e.viewQuery;
				e.viewQuery = n
					? (e, r) => {
							t(e, r), n(e, r);
					  }
					: t;
			}
			function Ll(e, t) {
				const n = e.contentQueries;
				e.contentQueries = n
					? (e, r, s) => {
							t(e, r, s), n(e, r, s);
					  }
					: t;
			}
			function Hl(e, t) {
				const n = e.hostBindings;
				t !== n &&
					(e.hostBindings = n
						? (e, r, s) => {
								Qn(1);
								try {
									t(e, r, s);
								} finally {
									Qn(-1);
								}
								n(e, r, s);
						  }
						: t);
			}
			function Fl(e, t, n, r, s) {
				if (((e = Ce(e)), Array.isArray(e))) for (let o = 0; o < e.length; o++) Fl(e[o], t, n, r, s);
				else {
					const o = Ln();
					let i = at(e) ? e : Ce(e.provide),
						a = rt(e);
					const l = Kn(),
						c = 65535 & l.providerIndexes,
						u = l.directiveStart,
						p = l.providerIndexes >> 16;
					if (e.useClass || at(e)) {
						const n = (e.useClass || e).prototype.ngOnDestroy;
						if (n) {
							const e = o[Vt];
							(e.destroyHooks || (e.destroyHooks = [])).push(t.length, n);
						}
					}
					if (at(e) || !e.multi) {
						const e = new ts(a, s, al),
							r = Vl(i, t, s ? c : c + p, u);
						-1 == r ? (Ms(Es(l, o), o, i), t.push(i), l.directiveStart++, l.directiveEnd++, s && (l.providerIndexes += 65536), n.push(e), o.push(e)) : ((n[r] = e), (o[r] = e));
					} else {
						const e = Vl(i, t, c + p, u),
							h = Vl(i, t, c, c + p),
							d = e >= 0 && n[e],
							f = h >= 0 && n[h];
						if ((s && !f) || (!s && !d)) {
							Ms(Es(l, o), o, i);
							const e = (function(e, t, n, r, s) {
								const o = new ts(e, n, al);
								return (o.multi = []), (o.index = t), (o.componentProviders = 0), zl(o, s, r && !n), o;
							})(s ? Bl : $l, n.length, s, r, a);
							!s && f && (n[h].providerFactory = e), t.push(i), l.directiveStart++, l.directiveEnd++, s && (l.providerIndexes += 65536), n.push(e), o.push(e);
						} else zl(n[s ? h : e], a, !s && r);
						!s && r && f && n[h].componentProviders++;
					}
				}
			}
			function zl(e, t, n) {
				e.multi.push(t), n && e.componentProviders++;
			}
			function Vl(e, t, n, r) {
				for (let s = n; s < r; s++) if (t[s] === e) return s;
				return -1;
			}
			function $l(e, t, n, r) {
				return ql(this.multi, []);
			}
			function Bl(e, t, n, r) {
				const s = this.multi;
				let o;
				if (this.providerFactory) {
					const e = this.providerFactory.componentProviders,
						i = Ns(t, n, this.providerFactory.index, r);
					ql(s, (o = i.slice(0, e)));
					for (let t = e; t < i.length; t++) o.push(i[t]);
				} else ql(s, (o = []));
				return o;
			}
			function ql(e, t) {
				for (let n = 0; n < e.length; n++) t.push((0, e[n])());
				return t;
			}
			function Zl(e, t = []) {
				return (n) => {
					n.providersResolver = (n, r) =>
						(function(e, t, n) {
							const r = Ln()[Vt];
							if (r.firstTemplatePass) {
								const s = xn(e);
								Fl(n, r.data, r.blueprint, s, !0), Fl(t, r.data, r.blueprint, s, !1);
							}
						})(n, r ? r(e) : e, t);
				};
			}
			class Gl {}
			class Wl {}
			const Ql = 'ngComponent';
			class Yl {
				resolveComponentFactory(e) {
					throw (function(e) {
						const t = Error(`No component factory found for ${_e(e)}. Did you add it to @NgModule.entryComponents?`);
						return (t[Ql] = e), t;
					})(e);
				}
			}
			const Jl = (() => {
				class e {}
				return (e.NULL = new Yl()), e;
			})();
			class Kl {}
			class Xl {}
			class ec {
				constructor(e, t, n) {
					(this._context = t), (this._componentIndex = n), (this._appRef = null), (this._viewContainerRef = null), (this._tViewNode = null), (this._lView = e);
				}
				get rootNodes() {
					return null == this._lView[zt]
						? (function e(t, n, r) {
								let s = n.child;
								for (; s; ) {
									const n = bn(s, t);
									if ((n && r.push(n), 4 === s.type)) e(t, s, r);
									else if (1 === s.type) {
										const e = vs(t),
											n = e[Gt],
											o = _s(e);
										let i = n.projection[s.projection];
										for (; i && o; ) r.push(bn(i, o)), (i = i.next);
									}
									s = s.next;
								}
								return r;
						  })(this._lView, this._lView[Gt], [])
						: [];
				}
				get context() {
					return this._context ? this._context : this._lookUpContext();
				}
				get destroyed() {
					return 256 == (256 & this._lView[$t]);
				}
				destroy() {
					if (this._appRef) this._appRef.detachView(this);
					else if (this._viewContainerRef) {
						const e = this._viewContainerRef.indexOf(this);
						e > -1 && this._viewContainerRef.detach(e), (this._viewContainerRef = null);
					}
					Wa(this._lView);
				}
				onDestroy(e) {
					var t, n;
					(n = e), Oa((t = this._lView)).push(n), t[Vt].firstTemplatePass && Ea(t).push(t[Qt].length - 1, null);
				}
				markForCheck() {
					ya(this._lView);
				}
				detach() {
					this._lView[$t] &= -129;
				}
				reattach() {
					this._lView[$t] |= 128;
				}
				detectChanges() {
					_a(this._lView, this.context);
				}
				checkNoChanges() {
					!(function(e, t) {
						ar(!0);
						try {
							_a(e, t);
						} finally {
							ar(!1);
						}
					})(this._lView, this.context);
				}
				attachToViewContainerRef(e) {
					if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
					this._viewContainerRef = e;
				}
				detachFromAppRef() {
					(this._appRef = null),
						(function(e) {
							sl(e[Xt], 1, e, null, null);
						})(this._lView);
				}
				attachToAppRef(e) {
					if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
					this._appRef = e;
				}
				_lookUpContext() {
					return (this._context = _s(this._lView)[this._componentIndex]);
				}
			}
			class tc extends ec {
				constructor(e) {
					super(e, null, -1), (this._view = e);
				}
				detectChanges() {
					va(this._view);
				}
				checkNoChanges() {
					!(function(e) {
						ar(!0);
						try {
							va(e);
						} finally {
							ar(!1);
						}
					})(this._view);
				}
				get context() {
					return null;
				}
			}
			let nc, rc, sc;
			function oc(e, t, n) {
				return nc || (nc = class extends e {}), new nc(bn(t, n));
			}
			function ic(e, t, n, r) {
				if (
					(rc ||
						(rc = class extends e {
							constructor(e, t, n, r, s) {
								super(), (this._declarationParentView = e), (this.elementRef = t), (this._tView = n), (this._hostLContainer = r), (this._injectorIndex = s);
							}
							createEmbeddedView(e, t, n) {
								const r = this._declarationParentView[Zt];
								r && null == this._hostLContainer[Zt] && (this._hostLContainer[Zt] = r.container());
								const s = (function(e, t, n, r, s) {
									const o = tr(),
										i = Kn();
									Xn(null, !0);
									const a = Gi(n, e, t, 16, null, null);
									return (a[rn] = n), r && (a[Zt] = r.createView()), Qi(e, null, -1, a), e.firstTemplatePass && (e.node.injectorIndex = s), Xn(i, o), a;
								})(this._tView, e, this._declarationParentView, this._hostLContainer[Zt], this._injectorIndex);
								t && Za(s, t, n), Yi(s, this._tView, e);
								const o = new ec(s, e, -1);
								return (o._tViewNode = s[Gt]), o;
							}
						}),
					0 === n.type)
				) {
					const e = r[n.index];
					return new rc(r, oc(t, n, r), n.tViews, e, n.injectorIndex);
				}
				return null;
			}
			const ac = (() => {
					class e {
						constructor(e) {
							this.nativeElement = e;
						}
					}
					return (e.__NG_ELEMENT_ID__ = () => lc(e)), e;
				})(),
				lc = function(e) {
					return oc(e, Kn(), Ln());
				};
			class cc {}
			const uc = (function() {
				var e = { Important: 1, DashCase: 2 };
				return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
			})();
			class pc {
				constructor(e) {
					(this.full = e),
						(this.major = e.split('.')[0]),
						(this.minor = e.split('.')[1]),
						(this.patch = e
							.split('.')
							.slice(2)
							.join('.'));
				}
			}
			const hc = new pc('8.1.0');
			class dc {
				constructor() {}
				supports(e) {
					return ja(e);
				}
				create(e) {
					return new gc(e);
				}
			}
			const fc = (e, t) => t;
			class gc {
				constructor(e) {
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
						(this._trackByFn = e || fc);
				}
				forEachItem(e) {
					let t;
					for (t = this._itHead; null !== t; t = t._next) e(t);
				}
				forEachOperation(e) {
					let t = this._itHead,
						n = this._removalsHead,
						r = 0,
						s = null;
					for (; t || n; ) {
						const o = !n || (t && t.currentIndex < wc(n, r, s)) ? t : n,
							i = wc(o, r, s),
							a = o.currentIndex;
						if (o === n) r--, (n = n._nextRemoved);
						else if (((t = t._next), null == o.previousIndex)) r++;
						else {
							s || (s = []);
							const e = i - r,
								t = a - r;
							if (e != t) {
								for (let n = 0; n < e; n++) {
									const r = n < s.length ? s[n] : (s[n] = 0),
										o = r + n;
									t <= o && o < e && (s[n] = r + 1);
								}
								s[o.previousIndex] = t - e;
							}
						}
						i !== a && e(o, i, a);
					}
				}
				forEachPreviousItem(e) {
					let t;
					for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
				}
				forEachAddedItem(e) {
					let t;
					for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
				}
				forEachMovedItem(e) {
					let t;
					for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
				}
				forEachRemovedItem(e) {
					let t;
					for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
				}
				forEachIdentityChange(e) {
					let t;
					for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t);
				}
				diff(e) {
					if ((null == e && (e = []), !ja(e))) throw new Error(`Error trying to diff '${_e(e)}'. Only arrays and iterables are allowed`);
					return this.check(e) ? this : null;
				}
				onDestroy() {}
				check(e) {
					this._reset();
					let t,
						n,
						r,
						s = this._itHead,
						o = !1;
					if (Array.isArray(e)) {
						this.length = e.length;
						for (let t = 0; t < this.length; t++)
							(r = this._trackByFn(t, (n = e[t]))),
								null !== s && Ra(s.trackById, r)
									? (o && (s = this._verifyReinsertion(s, n, r, t)), Ra(s.item, n) || this._addIdentityChange(s, n))
									: ((s = this._mismatch(s, n, r, t)), (o = !0)),
								(s = s._next);
					} else
						(t = 0),
							(function(e, t) {
								if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
								else {
									const n = e[Aa()]();
									let r;
									for (; !(r = n.next()).done; ) t(r.value);
								}
							})(e, (e) => {
								(r = this._trackByFn(t, e)),
									null !== s && Ra(s.trackById, r)
										? (o && (s = this._verifyReinsertion(s, e, r, t)), Ra(s.item, e) || this._addIdentityChange(s, e))
										: ((s = this._mismatch(s, e, r, t)), (o = !0)),
									(s = s._next),
									t++;
							}),
							(this.length = t);
					return this._truncate(s), (this.collection = e), this.isDirty;
				}
				get isDirty() {
					return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
				}
				_reset() {
					if (this.isDirty) {
						let e, t;
						for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
						for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
						for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) (e.previousIndex = e.currentIndex), (t = e._nextMoved);
						(this._movesHead = this._movesTail = null), (this._removalsHead = this._removalsTail = null), (this._identityChangesHead = this._identityChangesTail = null);
					}
				}
				_mismatch(e, t, n, r) {
					let s;
					return (
						null === e ? (s = this._itTail) : ((s = e._prev), this._remove(e)),
						null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
							? (Ra(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, s, r))
							: null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
							? (Ra(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, s, r))
							: (e = this._addAfter(new mc(t, n), s, r)),
						e
					);
				}
				_verifyReinsertion(e, t, n, r) {
					let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
					return null !== s ? (e = this._reinsertAfter(s, e._prev, r)) : e.currentIndex != r && ((e.currentIndex = r), this._addToMoves(e, r)), e;
				}
				_truncate(e) {
					for (; null !== e; ) {
						const t = e._next;
						this._addToRemovals(this._unlink(e)), (e = t);
					}
					null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
						null !== this._additionsTail && (this._additionsTail._nextAdded = null),
						null !== this._movesTail && (this._movesTail._nextMoved = null),
						null !== this._itTail && (this._itTail._next = null),
						null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
						null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
				}
				_reinsertAfter(e, t, n) {
					null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
					const r = e._prevRemoved,
						s = e._nextRemoved;
					return (
						null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
						null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
						this._insertAfter(e, t, n),
						this._addToMoves(e, n),
						e
					);
				}
				_moveAfter(e, t, n) {
					return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e;
				}
				_addAfter(e, t, n) {
					return this._insertAfter(e, t, n), (this._additionsTail = null === this._additionsTail ? (this._additionsHead = e) : (this._additionsTail._nextAdded = e)), e;
				}
				_insertAfter(e, t, n) {
					const r = null === t ? this._itHead : t._next;
					return (
						(e._next = r),
						(e._prev = t),
						null === r ? (this._itTail = e) : (r._prev = e),
						null === t ? (this._itHead = e) : (t._next = e),
						null === this._linkedRecords && (this._linkedRecords = new yc()),
						this._linkedRecords.put(e),
						(e.currentIndex = n),
						e
					);
				}
				_remove(e) {
					return this._addToRemovals(this._unlink(e));
				}
				_unlink(e) {
					null !== this._linkedRecords && this._linkedRecords.remove(e);
					const t = e._prev,
						n = e._next;
					return null === t ? (this._itHead = n) : (t._next = n), null === n ? (this._itTail = t) : (n._prev = t), e;
				}
				_addToMoves(e, t) {
					return e.previousIndex === t ? e : ((this._movesTail = null === this._movesTail ? (this._movesHead = e) : (this._movesTail._nextMoved = e)), e);
				}
				_addToRemovals(e) {
					return (
						null === this._unlinkedRecords && (this._unlinkedRecords = new yc()),
						this._unlinkedRecords.put(e),
						(e.currentIndex = null),
						(e._nextRemoved = null),
						null === this._removalsTail
							? ((this._removalsTail = this._removalsHead = e), (e._prevRemoved = null))
							: ((e._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = e)),
						e
					);
				}
				_addIdentityChange(e, t) {
					return (e.item = t), (this._identityChangesTail = null === this._identityChangesTail ? (this._identityChangesHead = e) : (this._identityChangesTail._nextIdentityChange = e)), e;
				}
			}
			class mc {
				constructor(e, t) {
					(this.item = e),
						(this.trackById = t),
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
				}
			}
			class bc {
				constructor() {
					(this._head = null), (this._tail = null);
				}
				add(e) {
					null === this._head
						? ((this._head = this._tail = e), (e._nextDup = null), (e._prevDup = null))
						: ((this._tail._nextDup = e), (e._prevDup = this._tail), (e._nextDup = null), (this._tail = e));
				}
				get(e, t) {
					let n;
					for (n = this._head; null !== n; n = n._nextDup) if ((null === t || t <= n.currentIndex) && Ra(n.trackById, e)) return n;
					return null;
				}
				remove(e) {
					const t = e._prevDup,
						n = e._nextDup;
					return null === t ? (this._head = n) : (t._nextDup = n), null === n ? (this._tail = t) : (n._prevDup = t), null === this._head;
				}
			}
			class yc {
				constructor() {
					this.map = new Map();
				}
				put(e) {
					const t = e.trackById;
					let n = this.map.get(t);
					n || ((n = new bc()), this.map.set(t, n)), n.add(e);
				}
				get(e, t) {
					const n = this.map.get(e);
					return n ? n.get(e, t) : null;
				}
				remove(e) {
					const t = e.trackById;
					return this.map.get(t).remove(e) && this.map.delete(t), e;
				}
				get isEmpty() {
					return 0 === this.map.size;
				}
				clear() {
					this.map.clear();
				}
			}
			function wc(e, t, n) {
				const r = e.previousIndex;
				if (null === r) return r;
				let s = 0;
				return n && r < n.length && (s = n[r]), r + t + s;
			}
			class _c {
				constructor() {}
				supports(e) {
					return e instanceof Map || Da(e);
				}
				create() {
					return new vc();
				}
			}
			class vc {
				constructor() {
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
				get isDirty() {
					return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
				}
				forEachItem(e) {
					let t;
					for (t = this._mapHead; null !== t; t = t._next) e(t);
				}
				forEachPreviousItem(e) {
					let t;
					for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
				}
				forEachChangedItem(e) {
					let t;
					for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
				}
				forEachAddedItem(e) {
					let t;
					for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
				}
				forEachRemovedItem(e) {
					let t;
					for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
				}
				diff(e) {
					if (e) {
						if (!(e instanceof Map || Da(e))) throw new Error(`Error trying to diff '${_e(e)}'. Only maps and objects are allowed`);
					} else e = new Map();
					return this.check(e) ? this : null;
				}
				onDestroy() {}
				check(e) {
					this._reset();
					let t = this._mapHead;
					if (
						((this._appendAfter = null),
						this._forEach(e, (e, n) => {
							if (t && t.key === n) this._maybeAddToChanges(t, e), (this._appendAfter = t), (t = t._next);
							else {
								const r = this._getOrCreateRecordForKey(n, e);
								t = this._insertBeforeOrAppend(t, r);
							}
						}),
						t)
					) {
						t._prev && (t._prev._next = null), (this._removalsHead = t);
						for (let e = t; null !== e; e = e._nextRemoved)
							e === this._mapHead && (this._mapHead = null),
								this._records.delete(e.key),
								(e._nextRemoved = e._next),
								(e.previousValue = e.currentValue),
								(e.currentValue = null),
								(e._prev = null),
								(e._next = null);
					}
					return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
				}
				_insertBeforeOrAppend(e, t) {
					if (e) {
						const n = e._prev;
						return (t._next = e), (t._prev = n), (e._prev = t), n && (n._next = t), e === this._mapHead && (this._mapHead = t), (this._appendAfter = e), e;
					}
					return this._appendAfter ? ((this._appendAfter._next = t), (t._prev = this._appendAfter)) : (this._mapHead = t), (this._appendAfter = t), null;
				}
				_getOrCreateRecordForKey(e, t) {
					if (this._records.has(e)) {
						const n = this._records.get(e);
						this._maybeAddToChanges(n, t);
						const r = n._prev,
							s = n._next;
						return r && (r._next = s), s && (s._prev = r), (n._next = null), (n._prev = null), n;
					}
					const n = new xc(e);
					return this._records.set(e, n), (n.currentValue = t), this._addToAdditions(n), n;
				}
				_reset() {
					if (this.isDirty) {
						let e;
						for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
						for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
						for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
						(this._changesHead = this._changesTail = null), (this._additionsHead = this._additionsTail = null), (this._removalsHead = null);
					}
				}
				_maybeAddToChanges(e, t) {
					Ra(t, e.currentValue) || ((e.previousValue = e.currentValue), (e.currentValue = t), this._addToChanges(e));
				}
				_addToAdditions(e) {
					null === this._additionsHead ? (this._additionsHead = this._additionsTail = e) : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
				}
				_addToChanges(e) {
					null === this._changesHead ? (this._changesHead = this._changesTail = e) : ((this._changesTail._nextChanged = e), (this._changesTail = e));
				}
				_forEach(e, t) {
					e instanceof Map ? e.forEach(t) : Object.keys(e).forEach((n) => t(e[n], n));
				}
			}
			class xc {
				constructor(e) {
					(this.key = e),
						(this.previousValue = null),
						(this.currentValue = null),
						(this._nextPrevious = null),
						(this._next = null),
						(this._prev = null),
						(this._nextAdded = null),
						(this._nextRemoved = null),
						(this._nextChanged = null);
				}
			}
			const Cc = (() => {
					class e {
						constructor(e) {
							this.factories = e;
						}
						static create(t, n) {
							if (null != n) {
								const e = n.factories.slice();
								t = t.concat(e);
							}
							return new e(t);
						}
						static extend(t) {
							return {
								provide: e,
								useFactory: (n) => {
									if (!n) throw new Error('Cannot extend IterableDiffers without a parent injector');
									return e.create(t, n);
								},
								deps: [[e, new ue(), new le()]]
							};
						}
						find(e) {
							const t = this.factories.find((t) => t.supports(e));
							if (null != t) return t;
							throw new Error(`Cannot find a differ supporting object '${e}' of type '${((n = e), n.name || typeof n)}'`);
							var n;
						}
					}
					return (e.ngInjectableDef = fe({ token: e, providedIn: 'root', factory: () => new e([new dc()]) })), e;
				})(),
				kc = (() => {
					class e {
						constructor(e) {
							this.factories = e;
						}
						static create(t, n) {
							if (n) {
								const e = n.factories.slice();
								t = t.concat(e);
							}
							return new e(t);
						}
						static extend(t) {
							return {
								provide: e,
								useFactory: (n) => {
									if (!n) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
									return e.create(t, n);
								},
								deps: [[e, new ue(), new le()]]
							};
						}
						find(e) {
							const t = this.factories.find((t) => t.supports(e));
							if (t) return t;
							throw new Error(`Cannot find a differ supporting object '${e}'`);
						}
					}
					return (e.ngInjectableDef = fe({ token: e, providedIn: 'root', factory: () => new e([new _c()]) })), e;
				})(),
				Sc = (() => {
					class e {}
					return (e.__NG_ELEMENT_ID__ = () => Oc()), e;
				})(),
				Oc = function() {
					return (function(e, t, n) {
						if (vn(e)) {
							const n = e.directiveStart,
								r = wn(e.index, t);
							return new ec(r, null, n);
						}
						if (3 === e.type || 0 === e.type || 4 === e.type) {
							const e = vs(t);
							return new ec(e, e[Yt], -1);
						}
						return null;
					})(Kn(), Ln());
				},
				Ec = [new _c()],
				Tc = new Cc([new dc()]),
				Ic = new kc(Ec),
				Pc = (() => {
					class e {}
					return (e.__NG_ELEMENT_ID__ = () => Mc(e, ac)), e;
				})(),
				Mc = function(e, t) {
					return ic(e, t, Kn(), Ln());
				},
				Ac = (() => {
					class e {}
					return (e.__NG_ELEMENT_ID__ = () => Rc(e, ac)), e;
				})(),
				Rc = function(e, t) {
					return (function(e, t, n, r) {
						let s;
						sc ||
							(sc = class extends e {
								constructor(e, t, n) {
									super(), (this._lContainer = e), (this._hostTNode = t), (this._hostView = n);
								}
								get element() {
									return oc(t, this._hostTNode, this._hostView);
								}
								get injector() {
									return new Hs(this._hostTNode, this._hostView);
								}
								get parentInjector() {
									const e = Ps(this._hostTNode, this._hostView),
										t = ws(e, this._hostView),
										n = (function(e, t, n) {
											if (n.parent && -1 !== n.parent.injectorIndex) {
												const e = n.parent.injectorIndex;
												let t = n.parent;
												for (; null != t.parent && e == t.injectorIndex; ) t = t.parent;
												return t;
											}
											let r = ys(e),
												s = t,
												o = t[Gt];
											for (; r > 1; ) (o = (s = s[rn])[Gt]), r--;
											return o;
										})(e, this._hostView, this._hostTNode);
									return ms(e) && null != n ? new Hs(n, t) : new Hs(null, this._hostView);
								}
								clear() {
									for (; this.length; ) this.remove(0);
								}
								get(e) {
									return (null !== this._lContainer[8] && this._lContainer[8][e]) || null;
								}
								get length() {
									const e = this._lContainer.length - un;
									return e > 0 ? e : 0;
								}
								createEmbeddedView(e, t, n) {
									this.allocateContainerIfNeeded();
									const r = this._adjustIndex(n),
										s = e.createEmbeddedView(t || {}, this._lContainer, r);
									return s.attachToViewContainerRef(this), this._lContainer[8].splice(r, 0, s), s;
								}
								createComponent(e, t, n, r, s) {
									const o = n || this.parentInjector;
									!s && null == e.ngModule && o && (s = o.get(Kl, null));
									const i = e.create(o, r, void 0, s);
									return this.insert(i.hostView, t), i;
								}
								insert(e, t) {
									if (e.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
									this.allocateContainerIfNeeded();
									const n = e._lView,
										r = this._adjustIndex(t);
									return Sn(n)
										? this.move(e, r)
										: (Za(n, this._lContainer, r), qa(n, !0, tl(r, this._lContainer)), e.attachToViewContainerRef(this), this._lContainer[8].splice(r, 0, e), e);
								}
								move(e, t) {
									if (e.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
									const n = this.indexOf(e);
									return -1 !== n && this.detach(n), this.insert(e, t), e;
								}
								indexOf(e) {
									return null !== this._lContainer[8] ? this._lContainer[8].indexOf(e) : 0;
								}
								remove(e) {
									this.allocateContainerIfNeeded();
									const t = this._adjustIndex(e, -1);
									(function(e, n) {
										const r = Ga(e, t);
										r && Wa(r);
									})(this._lContainer),
										this._lContainer[8].splice(t, 1);
								}
								detach(e) {
									this.allocateContainerIfNeeded();
									const t = this._adjustIndex(e, -1),
										n = Ga(this._lContainer, t);
									return n && null != this._lContainer[8].splice(t, 1)[0] ? new ec(n, n[Yt], -1) : null;
								}
								_adjustIndex(e, t = 0) {
									return null == e ? this.length + t : e;
								}
								allocateContainerIfNeeded() {
									null === this._lContainer[8] && (this._lContainer[8] = []);
								}
							});
						const o = r[n.index];
						if (fn(o)) (s = o)[ln] = -1;
						else {
							let e;
							if (((e = 4 === n.type ? hn(o) : r[Xt].createComment('')), Cn(r))) {
								const t = r[Xt],
									s = bn(n, r);
								Ja(
									t,
									Xa(t, s),
									e,
									(function(e, t) {
										return rs(e) ? e.nextSibling(t) : t.nextSibling;
									})(t, s)
								);
							} else el(e, n, r);
							(r[n.index] = s = ga(o, r, e, n, !0)), ba(r, s);
						}
						return new sc(s, n, r);
					})(e, t, Kn(), Ln());
				},
				jc = {};
			function Dc(e) {
				const t = [];
				for (let n in e) e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
				return t;
			}
			const Nc = new Ie('ROOT_CONTEXT_TOKEN', { providedIn: 'root', factory: () => Tl(Ve(Uc)) }),
				Uc = new Ie('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => Lt });
			class Lc extends Wl {
				constructor(e, t) {
					super(),
						(this.componentDef = e),
						(this.ngModule = t),
						(this.componentType = e.type),
						(this.selector = e.selectors[0][0]),
						(this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : []),
						(this.isBoundToModule = !!t);
				}
				get inputs() {
					return Dc(this.componentDef.inputs);
				}
				get outputs() {
					return Dc(this.componentDef.outputs);
				}
				create(e, t, n, r) {
					const s = void 0 === n,
						o = (r = r || this.ngModule)
							? (function(e, t) {
									return {
										get: (n, r, s) => {
											const o = e.get(n, jc, s);
											return o !== jc || r === jc ? o : t.get(n, r, s);
										}
									};
							  })(e, r.injector)
							: e,
						i = o.get(cc, ss),
						a = o.get(Gr, null),
						l = s
							? Zi(this.selector, i.createRenderer(null, this.componentDef))
							: (function(e, t) {
									const n = i.createRenderer(null, null);
									return 'string' == typeof t ? (rs(n) ? n.selectRootElement(t) : n.querySelector(t)) : t;
							  })(0, n),
						c = this.componentDef.onPush ? 576 : 528,
						u = 'string' == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
						p = s || u ? Tl() : o.get(Nc),
						h = i.createRenderer(l, this.componentDef);
					n && l && (rs(h) ? h.setAttribute(l, 'ng-version', hc.full) : l.setAttribute('ng-version', hc.full));
					const d = Gi(null, na(-1, null, 1, 0, null, null, null, null), p, c, null, null, i, h, a, o),
						f = fr(d, null);
					let g,
						m,
						b = !1;
					try {
						const e = (function(e, t, n, r, s, o) {
							(zn = !1), (Fn = null), (An = 0), (Dn = !0);
							const i = n[Vt];
							n[0 + on] = l;
							const a = Wi(i, null, 0, 3, null, null),
								c = Gi(n, ta(t), null, t.onPush ? 64 : 16, n[on], a, r, s, void 0);
							return i.firstTemplatePass && (Ms(Es(a, n), n, t.type), (a.flags = 1), ha(a, n.length, 1), ua(a)), (n[on] = c);
						})(0, this.componentDef, d, i, h);
						(m = yn(0, d)),
							t && (m.projection = t.map((e) => Array.from(e))),
							(g = (function(e, t, n, r, s) {
								const o = n[Vt],
									i = (function(e, t, n) {
										const r = Kn();
										e.firstTemplatePass && (n.providersResolver && n.providersResolver(n), aa(e, r, 1), da(e, t, n, n.factory));
										const s = Ns(e.data, t, t.length - 1, r);
										return ca(t, r, s), s;
									})(o, n, t);
								r.components.push(i), (e[Yt] = i), s && s.forEach((e) => e(i, t)), t.contentQueries && t.contentQueries(1, i, n.length - 1);
								const a = Kn();
								if (
									(o.firstTemplatePass && t.hostBindings && (Zn(a.index - on), ia(t, o.expandoInstructions, i, a, o.firstTemplatePass), a.onElementCreationFns && Pa(a), Zn(null)),
									a.stylingTemplate)
								) {
									const t = e[zt];
									Gs(t, a.stylingTemplate, e[Xt]), Ws(t, a.stylingTemplate, e[Xt]);
								}
								return i;
							})(e, this.componentDef, d, p, [Il])),
							ba(d, e),
							Bi(d),
							(b = !0);
					} finally {
						gr(f, b);
					}
					const y = new Hc(this.componentType, g, oc(ac, m, d), d, m);
					return s && (y.hostView._tViewNode.child = m), y;
				}
			}
			class Hc extends Gl {
				constructor(e, t, n, r, s) {
					super(),
						(this.location = n),
						(this._rootLView = r),
						(this._tNode = s),
						(this.destroyCbs = []),
						(this.instance = t),
						(this.hostView = this.changeDetectorRef = new tc(r)),
						(this.hostView._tViewNode = Qi(r[Vt], null, -1, r)),
						(this.componentType = e);
				}
				get injector() {
					return new Hs(this._tNode, this._rootLView);
				}
				destroy() {
					this.destroyCbs && (this.destroyCbs.forEach((e) => e()), (this.destroyCbs = null), !this.hostView.destroyed && this.hostView.destroy());
				}
				onDestroy(e) {
					this.destroyCbs && this.destroyCbs.push(e);
				}
			}
			const Fc = {},
				zc = (function() {
					var e = {
						LocaleId: 0,
						DayPeriodsFormat: 1,
						DayPeriodsStandalone: 2,
						DaysFormat: 3,
						DaysStandalone: 4,
						MonthsFormat: 5,
						MonthsStandalone: 6,
						Eras: 7,
						FirstDayOfWeek: 8,
						WeekendRange: 9,
						DateFormat: 10,
						TimeFormat: 11,
						DateTimeFormat: 12,
						NumberSymbols: 13,
						NumberFormats: 14,
						CurrencySymbol: 15,
						CurrencyName: 16,
						Currencies: 17,
						PluralCase: 18,
						ExtraData: 19
					};
					return (
						(e[e.LocaleId] = 'LocaleId'),
						(e[e.DayPeriodsFormat] = 'DayPeriodsFormat'),
						(e[e.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
						(e[e.DaysFormat] = 'DaysFormat'),
						(e[e.DaysStandalone] = 'DaysStandalone'),
						(e[e.MonthsFormat] = 'MonthsFormat'),
						(e[e.MonthsStandalone] = 'MonthsStandalone'),
						(e[e.Eras] = 'Eras'),
						(e[e.FirstDayOfWeek] = 'FirstDayOfWeek'),
						(e[e.WeekendRange] = 'WeekendRange'),
						(e[e.DateFormat] = 'DateFormat'),
						(e[e.TimeFormat] = 'TimeFormat'),
						(e[e.DateTimeFormat] = 'DateTimeFormat'),
						(e[e.NumberSymbols] = 'NumberSymbols'),
						(e[e.NumberFormats] = 'NumberFormats'),
						(e[e.CurrencySymbol] = 'CurrencySymbol'),
						(e[e.CurrencyName] = 'CurrencyName'),
						(e[e.Currencies] = 'Currencies'),
						(e[e.PluralCase] = 'PluralCase'),
						(e[e.ExtraData] = 'ExtraData'),
						e
					);
				})(),
				Vc = void 0;
			var $c = [
				'en',
				[['a', 'p'], ['AM', 'PM'], Vc],
				[['AM', 'PM'], Vc, Vc],
				[
					['S', 'M', 'T', 'W', 'T', 'F', 'S'],
					['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
					['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
				],
				Vc,
				[
					['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
					['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
				],
				Vc,
				[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
				0,
				[6, 0],
				['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
				['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
				['{1}, {0}', Vc, "{1} 'at' {0}", Vc],
				['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
				['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
				'$',
				'US Dollar',
				{},
				function(e) {
					let t = Math.floor(Math.abs(e)),
						n = e.toString().replace(/^[^.]*\.?/, '').length;
					return 1 === t && 0 === n ? 1 : 5;
				}
			];
			const Bc = 'en-US';
			let qc = Bc;
			function Zc(e) {
				qc = e.toLowerCase().replace(/_/g, '-');
			}
			const Gc = new Map(),
				Wc = {
					provide: Jl,
					useClass: class extends Jl {
						constructor(e) {
							super(), (this.ngModule = e);
						}
						resolveComponentFactory(e) {
							const t = jt(e);
							return new Lc(t, this.ngModule);
						}
					},
					deps: [Kl]
				};
			class Qc extends Kl {
				constructor(e, t) {
					super(), (this._parent = t), (this._bootstrapComponents = []), (this.injector = this), (this.destroyCbs = []);
					const n = Dt(e),
						r = e[St] || null;
					r && Zc(r), (this._bootstrapComponents = Ft(n.bootstrap)), (this._r3Injector = et(e, t, [{ provide: Kl, useValue: this }, Wc], _e(e))), (this.instance = this.get(e));
				}
				get(e, t = ct.THROW_IF_NOT_FOUND, n = pe.Default) {
					return e === ct || e === Kl || e === Pe ? this : this._r3Injector.get(e, t, n);
				}
				get componentFactoryResolver() {
					return this.get(Jl);
				}
				destroy() {
					const e = this._r3Injector;
					!e.destroyed && e.destroy(), this.destroyCbs.forEach((e) => e()), (this.destroyCbs = null);
				}
				onDestroy(e) {
					this.destroyCbs.push(e);
				}
			}
			class Yc extends Xl {
				constructor(e) {
					super(),
						(this.moduleType = e),
						null !== Dt(e) &&
							(function e(t) {
								if (null !== t.ngModuleDef.id) {
									const e = t.ngModuleDef.id;
									(function(e, n, r) {
										if (n && n !== t) throw new Error(`Duplicate module registered for ${e} - ${_e(n)} vs ${_e(n.name)}`);
									})(e, Gc.get(e)),
										Gc.set(e, t);
								}
								let n = t.ngModuleDef.imports;
								n instanceof Function && (n = n()), n && n.forEach((t) => e(t));
							})(e);
				}
				create(e) {
					return new Qc(this.moduleType, e);
				}
			}
			function Jc(e, t, n, r) {
				const s = Ln(),
					o = cr() + e;
				return La(s, o, n) ? Na(s, o + 1, r ? t.call(r, n) : t(n)) : Ua(s, o + 1);
			}
			function Kc(e, t, n, r, s) {
				const o = cr() + e,
					i = Ln();
				return (function(e, t, n, r) {
					const s = La(e, t, n);
					return La(e, t + 1, r) || s;
				})(i, o, n, r)
					? Na(i, o + 2, s ? t.call(s, n, r) : t(n, r))
					: Ua(i, o + 2);
			}
			class Xc extends E {
				constructor(e = !1) {
					super(), (this.__isAsync = e);
				}
				emit(e) {
					super.next(e);
				}
				subscribe(e, t, n) {
					let r,
						s = (e) => null,
						o = () => null;
					e && 'object' == typeof e
						? ((r = this.__isAsync
								? (t) => {
										setTimeout(() => e.next(t));
								  }
								: (t) => {
										e.next(t);
								  }),
						  e.error &&
								(s = this.__isAsync
									? (t) => {
											setTimeout(() => e.error(t));
									  }
									: (t) => {
											e.error(t);
									  }),
						  e.complete &&
								(o = this.__isAsync
									? () => {
											setTimeout(() => e.complete());
									  }
									: () => {
											e.complete();
									  }))
						: ((r = this.__isAsync
								? (t) => {
										setTimeout(() => e(t));
								  }
								: (t) => {
										e(t);
								  }),
						  t &&
								(s = this.__isAsync
									? (e) => {
											setTimeout(() => t(e));
									  }
									: (e) => {
											t(e);
									  }),
						  n &&
								(o = this.__isAsync
									? () => {
											setTimeout(() => n());
									  }
									: () => {
											n();
									  }));
					const i = super.subscribe(r, s, o);
					return e instanceof h && e.add(i), i;
				}
			}
			function eu() {
				return this._results[Aa()]();
			}
			class tu {
				constructor() {
					(this.dirty = !0), (this._results = []), (this.changes = new Xc()), (this.length = 0);
					const e = Aa(),
						t = tu.prototype;
					t[e] || (t[e] = eu);
				}
				map(e) {
					return this._results.map(e);
				}
				filter(e) {
					return this._results.filter(e);
				}
				find(e) {
					return this._results.find(e);
				}
				reduce(e, t) {
					return this._results.reduce(e, t);
				}
				forEach(e) {
					this._results.forEach(e);
				}
				some(e) {
					return this._results.some(e);
				}
				toArray() {
					return this._results.slice();
				}
				toString() {
					return this._results.toString();
				}
				reset(e) {
					(this._results = (function e(t, n) {
						void 0 === n && (n = t);
						for (let r = 0; r < t.length; r++) {
							let s = t[r];
							Array.isArray(s) ? (n === t && (n = t.slice(0, r)), e(s, n)) : n !== t && n.push(s);
						}
						return n;
					})(e)),
						(this.dirty = !1),
						(this.length = this._results.length),
						(this.last = this._results[this.length - 1]),
						(this.first = this._results[0]);
				}
				notifyOnChanges() {
					this.changes.emit(this);
				}
				setDirty() {
					this.dirty = !0;
				}
				destroy() {
					this.changes.complete(), this.changes.unsubscribe();
				}
			}
			class nu {
				constructor(e, t, n, r, s) {
					(this.next = e), (this.list = t), (this.predicate = n), (this.values = r), (this.containerValues = s);
				}
			}
			class ru {
				constructor(e, t, n, r = -1) {
					(this.parent = e), (this.shallow = t), (this.deep = n), (this.nodeIndex = r);
				}
				track(e, t, n, r) {
					n ? (this.deep = fu(this.deep, e, t, null != r ? r : null)) : (this.shallow = fu(this.shallow, e, t, null != r ? r : null));
				}
				clone(e) {
					return null !== this.shallow || _n(e) ? new ru(this, null, this.deep, e.index) : this;
				}
				container() {
					const e = su(this.shallow),
						t = su(this.deep);
					return e || t ? new ru(this, e, t) : null;
				}
				createView() {
					const e = ou(this.shallow),
						t = ou(this.deep);
					return e || t ? new ru(this, e, t) : null;
				}
				insertView(e) {
					iu(e, this.shallow), iu(e, this.deep);
				}
				addNode(e) {
					hu(this.deep, e, !1), hu(this.shallow, e, !1);
				}
				insertNodeBeforeViews(e) {
					hu(this.deep, e, !0), hu(this.shallow, e, !0);
				}
				removeView() {
					au(this.shallow), au(this.deep);
				}
			}
			function su(e) {
				let t = null;
				for (; e; ) {
					const n = [];
					e.values.push(n), (t = new nu(t, e.list, e.predicate, n, null)), (e = e.next);
				}
				return t;
			}
			function ou(e) {
				let t = null;
				for (; e; ) (t = new nu(t, e.list, e.predicate, [], e.values)), (e = e.next);
				return t;
			}
			function iu(e, t) {
				for (; t; ) t.containerValues.splice(e, 0, t.values), t.values.length && t.list.setDirty(), (t = t.next);
			}
			function au(e) {
				for (; e; ) {
					const t = e.containerValues,
						n = t.indexOf(e.values);
					t.splice(n, 1)[0].length && e.list.setDirty(), (e = e.next);
				}
			}
			function lu(e, t) {
				const n = e.localNames;
				if (n) for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
				return null;
			}
			function cu(e, t, n) {
				const r = e[Ot];
				if ('function' == typeof r) return r();
				{
					const r = n[Vt],
						s = Ds(t, r, e, !1, !1);
					if (null !== s) return Ns(r.data, n, s, t);
				}
				return null;
			}
			function uu(e, t, n, r) {
				const s = e[Ot]();
				return r ? (s ? cu(r, t, n) : null) : s;
			}
			function pu(e, t, n, r) {
				return n
					? cu(n, e, t)
					: r > -1
					? Ns(t[Vt].data, t, r, e)
					: (function(e, t) {
							return 3 === e.type || 4 === e.type ? oc(ac, e, t) : 0 === e.type ? ic(Pc, ac, e, t) : null;
					  })(e, t);
			}
			function hu(e, t, n) {
				const r = Ln(),
					s = r[Vt];
				for (; e; ) {
					const o = e.predicate,
						i = o.type;
					if (i) {
						let a = null;
						if (i === Pc) a = uu(i, t, r, o.read);
						else {
							const e = Ds(t, s, i, !1, !1);
							null !== e && (a = pu(t, r, o.read, e));
						}
						null !== a && du(e, a, n);
					} else {
						const s = o.selector;
						for (let i = 0; i < s.length; i++) {
							const a = lu(t, s[i]);
							if (null !== a) {
								const s = pu(t, r, o.read, a);
								null !== s && du(e, s, n);
							}
						}
					}
					e = e.next;
				}
			}
			function du(e, t, n) {
				n ? e.values.unshift(t) : e.values.push(t), e.list.setDirty();
			}
			function fu(e, t, n, r) {
				return new nu(
					e,
					t,
					(function(e, t) {
						const n = Array.isArray(e);
						return { type: n ? null : e, selector: n ? e : null, read: t };
					})(n, r),
					t._valuesTree,
					null
				);
			}
			function gu(e) {
				const t = e,
					n = rr();
				return !(!e.dirty || n !== t._static || (e.reset(t._valuesTree || []), e.notifyOnChanges(), 0));
			}
			function mu(e, t, n, r, s, o) {
				t.firstTemplatePass && t.expandoStartIndex++;
				const i = hr(),
					a = (function(e, t, n, r, s, o) {
						const i = new tu(),
							a = e[Zt] || (e[Zt] = new ru(null, null, null, -1));
						return (
							(i._valuesTree = []),
							(i._static = s),
							a.track(i, t, n, r),
							(function(e, t, n) {
								const r = Oa(e);
								r.push(t), e[Vt].firstTemplatePass && Ea(e).push(n, r.length - 1);
							})(e, i, i.destroy),
							i
						);
					})(e, n, r, s, o);
				return (
					(function(e, t) {
						const n = Ln(),
							r = n[Vt],
							s = e + on;
						s >= r.data.length && ((r.data[s] = null), (r.blueprint[s] = null)), (n[s] = t);
					})(i - on, a),
					dr(i + 1),
					a
				);
			}
			function bu() {
				const e = hr();
				return (
					dr(e + 1),
					(function(e, t) {
						return e[t + on];
					})(Ln(), e - on)
				);
			}
			const yu = new Ie('Application Initializer'),
				wu = (() => {
					class e {
						constructor(e) {
							(this.appInits = e),
								(this.initialized = !1),
								(this.done = !1),
								(this.donePromise = new Promise((e, t) => {
									(this.resolve = e), (this.reject = t);
								}));
						}
						runInitializers() {
							if (this.initialized) return;
							const e = [],
								t = () => {
									(this.done = !0), this.resolve();
								};
							if (this.appInits)
								for (let n = 0; n < this.appInits.length; n++) {
									const t = this.appInits[n]();
									yl(t) && e.push(t);
								}
							Promise.all(e)
								.then(() => {
									t();
								})
								.catch((e) => {
									this.reject(e);
								}),
								0 === e.length && t(),
								(this.initialized = !0);
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(yu, 8));
							},
							providedIn: null
						})),
						e
					);
				})(),
				_u = new Ie('AppId'),
				vu = {
					provide: _u,
					useFactory: function() {
						return `${xu()}${xu()}${xu()}`;
					},
					deps: []
				};
			function xu() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			const Cu = new Ie('Platform Initializer'),
				ku = new Ie('Platform ID'),
				Su = new Ie('appBootstrapListener'),
				Ou = (() => {
					class e {
						log(e) {
							console.log(e);
						}
						warn(e) {
							console.warn(e);
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)();
							},
							providedIn: null
						})),
						e
					);
				})(),
				Eu = new Ie('LocaleId');
			class Tu {
				constructor(e, t) {
					(this.ngModuleFactory = e), (this.componentFactories = t);
				}
			}
			const Iu = function(e) {
					return new Yc(e);
				},
				Pu = Iu,
				Mu = function(e) {
					return Promise.resolve(Iu(e));
				},
				Au = function(e) {
					const t = Iu(e),
						n = Ft(Dt(e).declarations).reduce((e, t) => {
							const n = jt(t);
							return n && e.push(new Lc(n)), e;
						}, []);
					return new Tu(t, n);
				},
				Ru = Au,
				ju = function(e) {
					return Promise.resolve(Au(e));
				},
				Du = (() => {
					class e {
						constructor() {
							(this.compileModuleSync = Pu), (this.compileModuleAsync = Mu), (this.compileModuleAndAllComponentsSync = Ru), (this.compileModuleAndAllComponentsAsync = ju);
						}
						clearCache() {}
						clearCacheFor(e) {}
						getModuleId(e) {}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)();
							},
							providedIn: null
						})),
						e
					);
				})(),
				Nu = new Ie('compilerOptions');
			let Uu, Lu;
			function Hu() {
				const e = Te.wtf;
				return !(!e || !(Uu = e.trace) || ((Lu = Uu.events), 0));
			}
			const Fu = Hu(),
				zu = Fu
					? function(e, t = null) {
							return Lu.createScope(e, t);
					  }
					: (e, t) =>
							function(e, t) {
								return null;
							},
				Vu = Fu
					? function(e, t) {
							return Uu.leaveScope(e, t), t;
					  }
					: (e, t) => t,
				$u = (() => Promise.resolve(0))();
			function Bu(e) {
				'undefined' == typeof Zone
					? $u.then(() => {
							e && e.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', e);
			}
			class qu {
				constructor({ enableLongStackTrace: e = !1 }) {
					if (
						((this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new Xc(!1)),
						(this.onMicrotaskEmpty = new Xc(!1)),
						(this.onStable = new Xc(!1)),
						(this.onError = new Xc(!1)),
						'undefined' == typeof Zone)
					)
						throw new Error('In this configuration Angular requires Zone.js');
					var t;
					Zone.assertZonePatched(),
						(this._nesting = 0),
						(this._outer = this._inner = Zone.current),
						Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
						Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
						e && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
						((t = this)._inner = t._inner.fork({
							name: 'angular',
							properties: { isAngularZone: !0 },
							onInvokeTask: (e, n, r, s, o, i) => {
								try {
									return Qu(t), e.invokeTask(r, s, o, i);
								} finally {
									Yu(t);
								}
							},
							onInvoke: (e, n, r, s, o, i, a) => {
								try {
									return Qu(t), e.invoke(r, s, o, i, a);
								} finally {
									Yu(t);
								}
							},
							onHasTask: (e, n, r, s) => {
								e.hasTask(r, s),
									n === r && ('microTask' == s.change ? ((t.hasPendingMicrotasks = s.microTask), Wu(t)) : 'macroTask' == s.change && (t.hasPendingMacrotasks = s.macroTask));
							},
							onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
						}));
				}
				static isInAngularZone() {
					return !0 === Zone.current.get('isAngularZone');
				}
				static assertInAngularZone() {
					if (!qu.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
				}
				static assertNotInAngularZone() {
					if (qu.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
				}
				run(e, t, n) {
					return this._inner.run(e, t, n);
				}
				runTask(e, t, n, r) {
					const s = this._inner,
						o = s.scheduleEventTask('NgZoneEvent: ' + r, e, Gu, Zu, Zu);
					try {
						return s.runTask(o, t, n);
					} finally {
						s.cancelTask(o);
					}
				}
				runGuarded(e, t, n) {
					return this._inner.runGuarded(e, t, n);
				}
				runOutsideAngular(e) {
					return this._outer.run(e);
				}
			}
			function Zu() {}
			const Gu = {};
			function Wu(e) {
				if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
					try {
						e._nesting++, e.onMicrotaskEmpty.emit(null);
					} finally {
						if ((e._nesting--, !e.hasPendingMicrotasks))
							try {
								e.runOutsideAngular(() => e.onStable.emit(null));
							} finally {
								e.isStable = !0;
							}
					}
			}
			function Qu(e) {
				e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
			}
			function Yu(e) {
				e._nesting--, Wu(e);
			}
			class Ju {
				constructor() {
					(this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new Xc()),
						(this.onMicrotaskEmpty = new Xc()),
						(this.onStable = new Xc()),
						(this.onError = new Xc());
				}
				run(e) {
					return e();
				}
				runGuarded(e) {
					return e();
				}
				runOutsideAngular(e) {
					return e();
				}
				runTask(e) {
					return e();
				}
			}
			const Ku = (() => {
					class e {
						constructor(e) {
							(this._ngZone = e),
								(this._pendingCount = 0),
								(this._isZoneStable = !0),
								(this._didWork = !1),
								(this._callbacks = []),
								(this.taskTrackingZone = null),
								this._watchAngularEvents(),
								e.run(() => {
									this.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
								});
						}
						_watchAngularEvents() {
							this._ngZone.onUnstable.subscribe({
								next: () => {
									(this._didWork = !0), (this._isZoneStable = !1);
								}
							}),
								this._ngZone.runOutsideAngular(() => {
									this._ngZone.onStable.subscribe({
										next: () => {
											qu.assertNotInAngularZone(),
												Bu(() => {
													(this._isZoneStable = !0), this._runCallbacksIfReady();
												});
										}
									});
								});
						}
						increasePendingRequestCount() {
							return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
						}
						decreasePendingRequestCount() {
							if (((this._pendingCount -= 1), this._pendingCount < 0)) throw new Error('pending async requests below zero');
							return this._runCallbacksIfReady(), this._pendingCount;
						}
						isStable() {
							return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
						}
						_runCallbacksIfReady() {
							if (this.isStable())
								Bu(() => {
									for (; 0 !== this._callbacks.length; ) {
										let e = this._callbacks.pop();
										clearTimeout(e.timeoutId), e.doneCb(this._didWork);
									}
									this._didWork = !1;
								});
							else {
								let e = this.getPendingTasks();
								(this._callbacks = this._callbacks.filter((t) => !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1))), (this._didWork = !0);
							}
						}
						getPendingTasks() {
							return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((e) => ({ source: e.source, creationLocation: e.creationLocation, data: e.data })) : [];
						}
						addCallback(e, t, n) {
							let r = -1;
							t &&
								t > 0 &&
								(r = setTimeout(() => {
									(this._callbacks = this._callbacks.filter((e) => e.timeoutId !== r)), e(this._didWork, this.getPendingTasks());
								}, t)),
								this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
						}
						whenStable(e, t, n) {
							if (n && !this.taskTrackingZone)
								throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
							this.addCallback(e, t, n), this._runCallbacksIfReady();
						}
						getPendingRequestCount() {
							return this._pendingCount;
						}
						findProviders(e, t, n) {
							return [];
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(qu));
							},
							providedIn: null
						})),
						e
					);
				})(),
				Xu = (() => {
					class e {
						constructor() {
							(this._applications = new Map()), np.addToWindow(this);
						}
						registerApplication(e, t) {
							this._applications.set(e, t);
						}
						unregisterApplication(e) {
							this._applications.delete(e);
						}
						unregisterAllApplications() {
							this._applications.clear();
						}
						getTestability(e) {
							return this._applications.get(e) || null;
						}
						getAllTestabilities() {
							return Array.from(this._applications.values());
						}
						getAllRootElements() {
							return Array.from(this._applications.keys());
						}
						findTestabilityInTree(e, t = !0) {
							return np.findTestabilityInTree(this, e, t);
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)();
							},
							providedIn: null
						})),
						(e.ctorParameters = () => []),
						e
					);
				})();
			class ep {
				addToWindow(e) {}
				findTestabilityInTree(e, t, n) {
					return null;
				}
			}
			let tp,
				np = new ep(),
				rp = function(e, t, n) {
					const r = new Yc(n);
					if (0 === gt.size) return Promise.resolve(r);
					const s = (function(e) {
						const t = [];
						return e.forEach((e) => e && t.push(...e)), t;
					})(
						e
							.get(Nu, [])
							.concat(t)
							.map((e) => e.providers)
					);
					if (0 === s.length) return Promise.resolve(r);
					const o = (function() {
							const e = Te.ng;
							if (!e || !e.ɵcompilerFacade)
								throw new Error(
									"Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
								);
							return e.ɵcompilerFacade;
						})(),
						i = ct.create({ providers: s }).get(o.ResourceLoader);
					return (function(e) {
						const t = [],
							n = new Map();
						function r(t) {
							let r = n.get(t);
							if (!r) {
								const s = e(t);
								n.set(t, (r = s.then(bt)));
							}
							return r;
						}
						return (
							gt.forEach((e, n) => {
								const s = [];
								e.templateUrl &&
									s.push(
										r(e.templateUrl).then((t) => {
											e.template = t;
										})
									);
								const o = e.styleUrls,
									i = e.styles || (e.styles = []),
									a = e.styles.length;
								o &&
									o.forEach((t, n) => {
										i.push(''),
											s.push(
												r(t).then((r) => {
													(i[a + n] = r), o.splice(o.indexOf(t), 1), 0 == o.length && (e.styleUrls = void 0);
												})
											);
									});
								const l = Promise.all(s).then(() =>
									(function(e) {
										mt.delete(e);
									})(n)
								);
								t.push(l);
							}),
							(gt = new Map()),
							Promise.all(t).then(() => void 0)
						);
					})((e) => Promise.resolve(i.get(e))).then(() => r);
				},
				sp = function(e) {
					return e.isBoundToModule;
				};
			const op = new Ie('AllowMultipleToken');
			class ip {
				constructor(e, t) {
					(this.name = e), (this.token = t);
				}
			}
			function ap(e, t, n = []) {
				const r = `Platform: ${t}`,
					s = new Ie(r);
				return (t = []) => {
					let o = lp();
					if (!o || o.injector.get(op, !1))
						if (e) e(n.concat(t).concat({ provide: s, useValue: !0 }));
						else {
							const e = n.concat(t).concat({ provide: s, useValue: !0 });
							!(function(e) {
								if (tp && !tp.destroyed && !tp.injector.get(op, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								tp = e.get(cp);
								const t = e.get(Cu, null);
								t && t.forEach((e) => e());
							})(ct.create({ providers: e, name: r }));
						}
					return (function(e) {
						const t = lp();
						if (!t) throw new Error('No platform exists!');
						if (!t.injector.get(e, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return t;
					})(s);
				};
			}
			function lp() {
				return tp && !tp.destroyed ? tp : null;
			}
			const cp = (() => {
				class e {
					constructor(e) {
						(this._injector = e), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
					}
					bootstrapModuleFactory(e, t) {
						const n = 'noop' === (s = t ? t.ngZone : void 0) ? new Ju() : ('zone.js' === s ? void 0 : s) || new qu({ enableLongStackTrace: Cr() }),
							r = [{ provide: qu, useValue: n }];
						var s;
						return n.run(() => {
							const t = ct.create({ providers: r, parent: this.injector, name: e.moduleType.name }),
								s = e.create(t),
								o = s.injector.get($s, null);
							if (!o) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								Zc(s.injector.get(Eu, Bc)),
								s.onDestroy(() => hp(this._modules, s)),
								n.runOutsideAngular(() =>
									n.onError.subscribe({
										next: (e) => {
											o.handleError(e);
										}
									})
								),
								(function(e, t, n) {
									try {
										const s = n();
										return yl(s)
											? s.catch((n) => {
													throw (t.runOutsideAngular(() => e.handleError(n)), n);
											  })
											: s;
									} catch (r) {
										throw (t.runOutsideAngular(() => e.handleError(r)), r);
									}
								})(o, n, () => {
									const e = s.injector.get(wu);
									return e.runInitializers(), e.donePromise.then(() => (this._moduleDoBootstrap(s), s));
								})
							);
						});
					}
					bootstrapModule(e, t = []) {
						const n = up({}, t);
						return rp(this.injector, n, e).then((e) => this.bootstrapModuleFactory(e, n));
					}
					_moduleDoBootstrap(e) {
						const t = e.injector.get(pp);
						if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach((e) => t.bootstrap(e));
						else {
							if (!e.instance.ngDoBootstrap)
								throw new Error(
									`The module ${_e(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
										'Please define one of these.'
								);
							e.instance.ngDoBootstrap(t);
						}
						this._modules.push(e);
					}
					onDestroy(e) {
						this._destroyListeners.push(e);
					}
					get injector() {
						return this._injector;
					}
					destroy() {
						if (this._destroyed) throw new Error('The platform has already been destroyed!');
						this._modules.slice().forEach((e) => e.destroy()), this._destroyListeners.forEach((e) => e()), (this._destroyed = !0);
					}
					get destroyed() {
						return this._destroyed;
					}
				}
				return (
					(e.ngInjectableDef = fe({
						token: e,
						factory: function(t) {
							return new (t || e)(Ve(ct));
						},
						providedIn: null
					})),
					e
				);
			})();
			function up(e, t) {
				return Array.isArray(t) ? t.reduce(up, e) : Object.assign({}, e, t);
			}
			const pp = (() => {
				class e {
					constructor(e, t, n, r, s, o) {
						(this._zone = e),
							(this._console = t),
							(this._injector = n),
							(this._exceptionHandler = r),
							(this._componentFactoryResolver = s),
							(this._initStatus = o),
							(this._bootstrapListeners = []),
							(this._views = []),
							(this._runningTick = !1),
							(this._enforceNoNewChanges = !1),
							(this._stable = !0),
							(this.componentTypes = []),
							(this.components = []),
							(this._enforceNoNewChanges = Cr()),
							this._zone.onMicrotaskEmpty.subscribe({
								next: () => {
									this._zone.run(() => {
										this.tick();
									});
								}
							});
						const i = new v((e) => {
								(this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
									this._zone.runOutsideAngular(() => {
										e.next(this._stable), e.complete();
									});
							}),
							a = new v((e) => {
								let t;
								this._zone.runOutsideAngular(() => {
									t = this._zone.onStable.subscribe(() => {
										qu.assertNotInAngularZone(),
											Bu(() => {
												this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || ((this._stable = !0), e.next(!0));
											});
									});
								});
								const n = this._zone.onUnstable.subscribe(() => {
									qu.assertInAngularZone(),
										this._stable &&
											((this._stable = !1),
											this._zone.runOutsideAngular(() => {
												e.next(!1);
											}));
								});
								return () => {
									t.unsubscribe(), n.unsubscribe();
								};
							});
						this.isStable = (function(...e) {
							let t = Number.POSITIVE_INFINITY,
								n = null,
								r = e[e.length - 1];
							return (
								I(r) ? ((n = e.pop()), e.length > 1 && 'number' == typeof e[e.length - 1] && (t = e.pop())) : 'number' == typeof r && (t = e.pop()),
								null === n && 1 === e.length && e[0] instanceof v ? e[0] : J(t)(q(e, n))
							);
						})(
							i,
							a.pipe((e) =>
								K()(
									(function(e, t) {
										return function(t) {
											let n;
											n =
												'function' == typeof e
													? e
													: function() {
															return e;
													  };
											const r = Object.create(t, ne);
											return (r.source = t), (r.subjectFactory = n), r;
										};
									})(se)(e)
								)
							)
						);
					}
					bootstrap(e, t) {
						if (!this._initStatus.done)
							throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
						let n;
						(n = e instanceof Wl ? e : this._componentFactoryResolver.resolveComponentFactory(e)), this.componentTypes.push(n.componentType);
						const r = sp(n) ? null : this._injector.get(Kl),
							s = n.create(ct.NULL, [], t || n.selector, r);
						s.onDestroy(() => {
							this._unloadComponent(s);
						});
						const o = s.injector.get(Ku, null);
						return (
							o && s.injector.get(Xu).registerApplication(s.location.nativeElement, o),
							this._loadComponent(s),
							Cr() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
							s
						);
					}
					tick() {
						if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
						const t = e._tickScope();
						try {
							this._runningTick = !0;
							for (let e of this._views) e.detectChanges();
							if (this._enforceNoNewChanges) for (let e of this._views) e.checkNoChanges();
						} catch (n) {
							this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n));
						} finally {
							(this._runningTick = !1), Vu(t);
						}
					}
					attachView(e) {
						const t = e;
						this._views.push(t), t.attachToAppRef(this);
					}
					detachView(e) {
						const t = e;
						hp(this._views, t), t.detachFromAppRef();
					}
					_loadComponent(e) {
						this.attachView(e.hostView),
							this.tick(),
							this.components.push(e),
							this._injector
								.get(Su, [])
								.concat(this._bootstrapListeners)
								.forEach((t) => t(e));
					}
					_unloadComponent(e) {
						this.detachView(e.hostView), hp(this.components, e);
					}
					ngOnDestroy() {
						this._views.slice().forEach((e) => e.destroy());
					}
					get viewCount() {
						return this._views.length;
					}
				}
				return (
					(e.ngInjectableDef = fe({
						token: e,
						factory: function(t) {
							return new (t || e)(Ve(qu), Ve(Ou), Ve(ct), Ve($s), Ve(Jl), Ve(wu));
						},
						providedIn: null
					})),
					(e._tickScope = zu('ApplicationRef#tick()')),
					e
				);
			})();
			function hp(e, t) {
				const n = e.indexOf(t);
				n > -1 && e.splice(n, 1);
			}
			class dp {}
			const fp = !0,
				gp = '#',
				mp = 'NgFactory';
			class bp {}
			const yp = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				wp = (() => {
					class e {
						constructor(e, t) {
							(this._compiler = e), (this._config = t || yp);
						}
						load(e) {
							return !fp && this._compiler instanceof Du ? this.loadFactory(e) : this.loadAndCompile(e);
						}
						loadAndCompile(e) {
							let [t, r] = e.split(gp);
							return (
								void 0 === r && (r = 'default'),
								n('zn8P')(t)
									.then((e) => e[r])
									.then((e) => _p(e, t, r))
									.then((e) => this._compiler.compileModuleAsync(e))
							);
						}
						loadFactory(e) {
							let [t, r] = e.split(gp),
								s = mp;
							return (
								void 0 === r && ((r = 'default'), (s = '')),
								n('zn8P')(this._config.factoryPathPrefix + t + this._config.factoryPathSuffix)
									.then((e) => e[r + s])
									.then((e) => _p(e, t, r))
							);
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(Du), Ve(bp, 8));
							},
							providedIn: null
						})),
						e
					);
				})();
			function _p(e, t, n) {
				if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
				return e;
			}
			const vp = ap(null, 'core', [{ provide: ku, useValue: 'unknown' }, { provide: cp, deps: [ct] }, { provide: Xu, deps: [] }, { provide: Ou, deps: [] }]),
				xp = [
					{ provide: pp, useClass: pp, deps: [qu, Ou, ct, $s, Jl, wu] },
					{
						provide: Uc,
						deps: [qu],
						useFactory: function(e) {
							let t = [];
							return (
								e.onStable.subscribe(() => {
									for (; t.length; ) t.pop()();
								}),
								function(e) {
									t.push(e);
								}
							);
						}
					},
					{ provide: wu, useClass: wu, deps: [[new le(), yu]] },
					{ provide: Du, useClass: Du, deps: [] },
					vu,
					{
						provide: Cc,
						useFactory: function() {
							return Tc;
						},
						deps: []
					},
					{
						provide: kc,
						useFactory: function() {
							return Ic;
						},
						deps: []
					},
					{
						provide: Eu,
						useFactory: function(e) {
							return e || 'en-US';
						},
						deps: [[new ae(Eu), new le(), new ue()]]
					}
				],
				Cp = (() => {
					class e {
						constructor(e) {}
					}
					return (
						(e.ngModuleDef = Mt({ type: e })),
						(e.ngInjectorDef = ge({
							factory: function(t) {
								return new (t || e)(Ve(pp));
							},
							providers: xp
						})),
						e
					);
				})();
			class kp {}
			const Sp = new Ie('Location Initialized');
			class Op {}
			const Ep = new Ie('appBaseHref'),
				Tp = (() => {
					class e {
						constructor(t, n) {
							(this._subject = new Xc()), (this._urlChangeListeners = []), (this._platformStrategy = t);
							const r = this._platformStrategy.getBaseHref();
							(this._platformLocation = n),
								(this._baseHref = e.stripTrailingSlash(Ip(r))),
								this._platformStrategy.onPopState((e) => {
									this._subject.emit({ url: this.path(!0), pop: !0, state: e.state, type: e.type });
								});
						}
						path(e = !1) {
							return this.normalize(this._platformStrategy.path(e));
						}
						getState() {
							return this._platformLocation.getState();
						}
						isCurrentPathEqualTo(t, n = '') {
							return this.path() == this.normalize(t + e.normalizeQueryParams(n));
						}
						normalize(t) {
							return e.stripTrailingSlash(
								(function(e, t) {
									return e && t.startsWith(e) ? t.substring(e.length) : t;
								})(this._baseHref, Ip(t))
							);
						}
						prepareExternalUrl(e) {
							return e && '/' !== e[0] && (e = '/' + e), this._platformStrategy.prepareExternalUrl(e);
						}
						go(t, n = '', r = null) {
							this._platformStrategy.pushState(r, '', t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r);
						}
						replaceState(t, n = '', r = null) {
							this._platformStrategy.replaceState(r, '', t, n), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + e.normalizeQueryParams(n)), r);
						}
						forward() {
							this._platformStrategy.forward();
						}
						back() {
							this._platformStrategy.back();
						}
						onUrlChange(e) {
							this._urlChangeListeners.push(e),
								this.subscribe((e) => {
									this._notifyUrlChangeListeners(e.url, e.state);
								});
						}
						_notifyUrlChangeListeners(e = '', t) {
							this._urlChangeListeners.forEach((n) => n(e, t));
						}
						subscribe(e, t, n) {
							return this._subject.subscribe({ next: e, error: t, complete: n });
						}
						static normalizeQueryParams(e) {
							return e && '?' !== e[0] ? '?' + e : e;
						}
						static joinWithSlash(e, t) {
							if (0 == e.length) return t;
							if (0 == t.length) return e;
							let n = 0;
							return e.endsWith('/') && n++, t.startsWith('/') && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t;
						}
						static stripTrailingSlash(e) {
							const t = e.match(/#|\?|$/),
								n = (t && t.index) || e.length;
							return e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n);
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(Op), Ve(kp));
							},
							providedIn: null
						})),
						e
					);
				})();
			function Ip(e) {
				return e.replace(/\/index.html$/, '');
			}
			const Pp = (() => {
					class e extends Op {
						constructor(e, t) {
							super(), (this._platformLocation = e), (this._baseHref = ''), null != t && (this._baseHref = t);
						}
						onPopState(e) {
							this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
						}
						getBaseHref() {
							return this._baseHref;
						}
						path(e = !1) {
							let t = this._platformLocation.hash;
							return null == t && (t = '#'), t.length > 0 ? t.substring(1) : t;
						}
						prepareExternalUrl(e) {
							const t = Tp.joinWithSlash(this._baseHref, e);
							return t.length > 0 ? '#' + t : t;
						}
						pushState(e, t, n, r) {
							let s = this.prepareExternalUrl(n + Tp.normalizeQueryParams(r));
							0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(e, t, s);
						}
						replaceState(e, t, n, r) {
							let s = this.prepareExternalUrl(n + Tp.normalizeQueryParams(r));
							0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, s);
						}
						forward() {
							this._platformLocation.forward();
						}
						back() {
							this._platformLocation.back();
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(kp), Ve(Ep, 8));
							},
							providedIn: null
						})),
						e
					);
				})(),
				Mp = (() => {
					class e extends Op {
						constructor(e, t) {
							if ((super(), (this._platformLocation = e), null == t && (t = this._platformLocation.getBaseHrefFromDOM()), null == t))
								throw new Error('No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.');
							this._baseHref = t;
						}
						onPopState(e) {
							this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e);
						}
						getBaseHref() {
							return this._baseHref;
						}
						prepareExternalUrl(e) {
							return Tp.joinWithSlash(this._baseHref, e);
						}
						path(e = !1) {
							const t = this._platformLocation.pathname + Tp.normalizeQueryParams(this._platformLocation.search),
								n = this._platformLocation.hash;
							return n && e ? `${t}${n}` : t;
						}
						pushState(e, t, n, r) {
							const s = this.prepareExternalUrl(n + Tp.normalizeQueryParams(r));
							this._platformLocation.pushState(e, t, s);
						}
						replaceState(e, t, n, r) {
							const s = this.prepareExternalUrl(n + Tp.normalizeQueryParams(r));
							this._platformLocation.replaceState(e, t, s);
						}
						forward() {
							this._platformLocation.forward();
						}
						back() {
							this._platformLocation.back();
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(kp), Ve(Ep, 8));
							},
							providedIn: null
						})),
						e
					);
				})(),
				Ap = (function() {
					var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
					return (e[e.Zero] = 'Zero'), (e[e.One] = 'One'), (e[e.Two] = 'Two'), (e[e.Few] = 'Few'), (e[e.Many] = 'Many'), (e[e.Other] = 'Other'), e;
				})(),
				Rp = function(e) {
					return (function(e) {
						const t = e.toLowerCase().replace(/_/g, '-');
						let n = Fc[t];
						if (n) return n;
						const r = t.split('-')[0];
						if ((n = Fc[r])) return n;
						if ('en' === r) return $c;
						throw new Error(`Missing locale data for the locale "${e}".`);
					})(e)[zc.PluralCase];
				},
				jp = new Ie('UseV4Plurals');
			class Dp {}
			const Np = (() => {
				class e extends Dp {
					constructor(e, t) {
						super(), (this.locale = e), (this.deprecatedPluralFn = t);
					}
					getPluralCategory(e, t) {
						switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(t || this.locale, e) : Rp(t || this.locale)(e)) {
							case Ap.Zero:
								return 'zero';
							case Ap.One:
								return 'one';
							case Ap.Two:
								return 'two';
							case Ap.Few:
								return 'few';
							case Ap.Many:
								return 'many';
							default:
								return 'other';
						}
					}
				}
				return (
					(e.ngInjectableDef = fe({
						token: e,
						factory: function(t) {
							return new (t || e)(Ve(Eu), Ve(jp, 8));
						},
						providedIn: null
					})),
					e
				);
			})();
			class Up {
				constructor(e, t) {
					(this._name = e), (this._options = t), (this.value = null), (this._lastSetValue = null), (this._lastSetValueType = 0), (this._lastSetValueIdentityChange = !1);
				}
				setValue(e) {
					if (Array.isArray(e)) this._lastSetValueType = 4;
					else if (e instanceof Set) this._lastSetValueType = 8;
					else if (e && 'string' == typeof e) {
						if (!(4 & this._options)) throw new Error(this._name + ' string values are not allowed');
						this._lastSetValueType = 1;
					} else this._lastSetValueType = e ? 2 : 0;
					(this._lastSetValueIdentityChange = !0), (this._lastSetValue = e || null);
				}
				hasValueChanged() {
					let e = this._lastSetValueIdentityChange;
					if (!(e || 14 & this._lastSetValueType)) return !1;
					let t = null;
					const n = !!(1 & this._options),
						r = !!(8 & this._options),
						s = !!(2 & this._options);
					switch (this._lastSetValueType) {
						case 1:
							const o = this._lastSetValue.split(/\s+/g);
							16 & this._options ? ((t = {}), o.forEach((e, n) => (t[e] = !0))) : (t = o.reduce((e, t, n) => e + (n ? ' ' : '') + t));
							break;
						case 2:
							const i = this._lastSetValue,
								a = Object.keys(i);
							e ||
								(e =
									!this.value ||
									(function(e, t, n) {
										const r = e;
										if (!Vp(Object.keys(t), r)) return !0;
										for (let s = 0; s < r.length; s++) {
											const e = r[s];
											if (t[e] !== n[e]) return !0;
										}
										return !1;
									})(a, this.value, i)),
								e && (t = Lp(this._name, n, r, s, i, a));
							break;
						case 4:
						case 8:
							const l = Array.from(this._lastSetValue);
							e || (e = !Vp(Object.keys(this.value), l)), e && (t = Lp(this._name, n, r, s, l));
							break;
						default:
							t = null;
					}
					return e && (this.value = t), e;
				}
			}
			function Lp(e, t, n, r, s, o) {
				const i = {};
				if (o)
					for (let a = 0; a < o.length; a++) {
						let e = o[a];
						Fp(i, (e = t ? e.trim() : e), s[e], n, r);
					}
				else
					for (let a = 0; a < s.length; a++) {
						let n = s[a];
						Hp(e, n), Fp(i, (n = t ? n.trim() : n), !0, !1, r);
					}
				return i;
			}
			function Hp(e, t) {
				if ('string' != typeof t) throw new Error(`${e} can only toggle CSS classes expressed as strings, got ${t}`);
			}
			function Fp(e, t, n, r, s) {
				if (s && t.indexOf(' ') > 0) {
					const s = t.split(/\s+/g);
					for (let t = 0; t < s.length; t++) zp(e, s[t], n, r);
				} else zp(e, t, n, r);
			}
			function zp(e, t, n, r) {
				if (r) {
					const e = (function(e, t) {
						const n = e.indexOf('.');
						if (n > 0) {
							const r = e.substr(n + 1);
							(e = e.substring(0, n)), null != t && (t += r);
						}
						return { key: e, value: t };
					})(t, n);
					(n = e.value), (t = e.key);
				}
				e[t] = n;
			}
			function Vp(e, t) {
				if (e && t) {
					if (e.length !== t.length) return !1;
					for (let n = 0; n < e.length; n++) if (-1 === t.indexOf(e[n])) return !1;
					return !0;
				}
				return !1;
			}
			class $p {}
			const Bp = {
					provide: $p,
					useClass: (() => {
						class e {
							constructor() {
								(this._value = null), (this._ngClassDiffer = new Up('NgClass', 23)), (this._classStringDiffer = null);
							}
							getValue() {
								return this._value;
							}
							setClass(e) {
								(e || this._classStringDiffer) && ((this._classStringDiffer = this._classStringDiffer || new Up('class', 20)), this._classStringDiffer.setValue(e));
							}
							setNgClass(e) {
								this._ngClassDiffer.setValue(e);
							}
							applyChanges() {
								const e = !!this._classStringDiffer && this._classStringDiffer.hasValueChanged(),
									t = this._ngClassDiffer.hasValueChanged();
								if (e || t) {
									let e = this._ngClassDiffer.value;
									if (this._classStringDiffer) {
										let t = this._classStringDiffer.value;
										t && (e = e ? Object.assign({}, t, e) : t);
									}
									this._value = e;
								}
							}
						}
						return (
							(e.ngInjectableDef = fe({
								token: e,
								factory: function(t) {
									return new (t || e)();
								},
								providedIn: null
							})),
							e
						);
					})()
				},
				qp = Rt({
					type: function() {},
					selectors: null,
					factory: () => {},
					hostBindings: function(e, t, n) {
						1 & e &&
							(function(e, t, n) {
								const r = Kn();
								r.stylingTemplate || (r.stylingTemplate = cs());
								const s = dl();
								s
									? (Wo() &&
											(function() {
												const e = Ln();
												var t, n;
												(t = yn(br(), e)), (n = ll()), Ko(ul(t), n), Ko(cl(t), n);
											})(),
									  us(r.stylingTemplate, s),
									  (r.onElementCreationFns = r.onElementCreationFns || []).push(() => {
											hl(r, e, t, n, s),
												(function(e, t) {
													let n = e[8];
													n || (n = e[8] = [as]), (n[0] = t);
												})(r.stylingTemplate, s);
									  }))
									: hl(r, e, t, n, as);
							})(),
							2 & e &&
								((function(e) {
									const t = br(),
										n = Ln(),
										r = fl(t, n),
										s = dl();
									if (s)
										!(function(e, t, n, s) {
											const o = r[8];
											if (null != o) {
												const e = (function(e, t) {
													for (let n = 1; n < e.length; n += 3) if (e[n + 0] > t) return n;
													return e.length;
												})(o, t);
												o.splice(e, 0, t, n, s);
											}
										})(0, s, Ys, [r, e, s]);
									else {
										const s = yn(t, n);
										if (ds(s) && e !== Bs) {
											const t = Ao(r),
												o =
													(t.length ? t + ' ' : '') +
													(function(e) {
														return e && 'string' != typeof e && (e = Object.keys(e).join(' ')), e || '';
													})(e);
											Ia(n, s.inputs.class, o), (e = Bs);
										}
										Ys(r, e);
									}
									Wo() &&
										(function(e) {
											!(function(e, t) {
												Mi = ji;
												const n = br(),
													r = Ln(),
													s = r[Wt]++;
												if (e !== Bs) {
													const o = yn(n, r),
														i = qn > 0,
														a = r[s],
														l = pi(a, e),
														c = (function(e, t) {
															const n = Array.isArray(e) ? e : [null];
															n[0] = t || null;
															for (let i = 1; i < n.length; i += 2) Hi(n, i, null);
															let r,
																s = null,
																o = !1;
															if (('string' == typeof t ? t.length && ((s = t.split(/\s+/)), (o = !0)) : ((s = t ? Object.keys(t) : null), (r = t)), s))
																e: for (let i = 0; i < s.length; i++) {
																	const e = s[i],
																		t = !!o || r[e];
																	for (let r = 1; r < n.length; r += 2) {
																		const s = Li(n, r);
																		if (e <= s) {
																			s === e ? Hi(n, r, t) : n.splice(r, 0, e, t);
																			continue e;
																		}
																	}
																	n.push(e, t);
																}
															return n;
														})(a, e);
													t
														? (function(e, t, n, s, o, a, l) {
																const u = yi;
																(Si(e, r, u, null, s, c, i, l, !1) || l) && (Ci |= 1 << u);
														  })(ul(o), 0, 0, s, 0, 0, l)
														: (di(r),
														  (function(e, t, n, s, o, a, l, u) {
																const p = yi;
																(Si(e, r, p, null, s, c, i, u, !0) || u) && (xi |= 1 << p);
														  })(cl(o), 0, 0, s, 0, 0, 0, l));
												}
											})(e, !0);
										})(e);
								})(t.getValue()),
								(function() {
									const e = br(),
										t = dl() || as,
										n = Ln(),
										r = 3 === yn(e, n).type ? n[Xt] : null,
										s = 0 != (8 & n[$t]),
										o = fl(e, n);
									Go < 2 &&
										(function(e, t, n, r, s, o, i = 0) {
											let a = 0;
											if (
												(function(e, t) {
													const n = e[8];
													return !n || n[0] === t;
												})(e, i) &&
												((function(e) {
													const t = e[8];
													if (t) {
														for (let e = 1; e < t.length; e += 3) t[e + 1].apply(this, t[e + 2]);
														t.length = 1;
													}
												})(e),
												(function(e) {
													return eo(e, 1);
												})(e))
											) {
												const s = e[0],
													o = 8 & e[1],
													i = lo(e);
												for (let n = 10; n < e.length; n += 4)
													if (eo(e, n)) {
														const o = mo(e, n),
															a = To(e, n),
															l = yo(e, n),
															c = bo(e, n),
															u = 4 & o ? Po(e, a) : null,
															p = fo(e, n),
															h = !!(2 & o);
														let d = c;
														n < i && !Co(d) && (d = bo(e, io(o))),
															Co(d) || (d = so(e, o)),
															t && (!r || d) && (h ? Ks(s, l, !!d, t, null, p) : Js(s, l, d, t, u, null, p)),
															Xs(e, n, !1);
													}
												if (o) {
													const t = Array.isArray(n) ? xs(n) : n,
														o = e[9],
														i = o[0];
													for (let e = 1; e < i; e += 2) {
														const n = o[e],
															i = e + 1,
															l = o[i];
														if (n) {
															const e = n.buildPlayer(l, r);
															void 0 !== e && (null != e && fs(o, t, s, e, i) && a++, l && l.destroy());
														} else l && l.destroy();
													}
													_o(e, !1);
												}
												wo(e, !1);
											}
											return a;
										})(o, r, n, s, 0, 0, t) > 0 &&
										(function(e, t) {
											const n = 0 === e.flags;
											if (((e.flags |= 2), n && e.clean == $i)) {
												let t;
												(e.clean = new Promise((e) => (t = e))),
													e.scheduler(() => {
														if ((1 & e.flags && ((e.flags &= -2), wa(e)), 2 & e.flags)) {
															e.flags &= -3;
															const t = e.playerHandler;
															t && t.flushPlayers();
														}
														(e.clean = $i), t(null);
													});
											}
										})(xs(n)),
										jn(null),
										Wo() &&
											(function() {
												const e = br(),
													t = Ln(),
													n = yn(e, t),
													r = (function(e, t) {
														return 3 === e.type ? t[Xt] : null;
													})(n, t),
													s = (function(e, n) {
														let r = t[e + on],
															s = t;
														for (; Array.isArray(r); ) (s = r), (r = r[zt]);
														return gn(s) ? s[0] : r;
													})(e),
													o = ll();
												!(function(e, t, n, r, s) {
													ai(n, s) && (!ci(n) && li(n), Ci && (Pi(n, e, r, t, Ci, Ri, null), (Ci = 0)), (vi = wi));
												})(r, t, ul(n), s, o);
												const i = di(t);
												!(function(e, t, n, r, s, o) {
													ai(n, s) && (!ci(n) && li(n), xi && (Pi(n, e, r, t, xi, Ai, o), (xi = 0)), (_i = wi));
												})(r, t, cl(n), s, o, i),
													Qo(null);
											})();
								})());
					}
				}),
				Zp = (() => {
					class e {
						constructor(e) {
							this._delegate = e;
						}
						getValue() {
							return this._delegate.getValue();
						}
					}
					return (e.ngDirectiveDef = qp), e;
				})(),
				Gp = (() => {
					class e extends Zp {
						constructor(e) {
							super(e);
						}
						set klass(e) {
							this._delegate.setClass(e);
						}
						set ngClass(e) {
							this._delegate.setNgClass(e);
						}
						ngDoCheck() {
							this._delegate.applyChanges();
						}
					}
					return (
						(e.ngDirectiveDef = Rt({
							type: e,
							selectors: [['', 'ngClass', '']],
							factory: function(t) {
								return new (t || e)(al($p));
							},
							inputs: { klass: ['class', 'klass'], ngClass: 'ngClass' },
							features: [Zl([Bp]), Dl]
						})),
						e
					);
				})(),
				Wp = (() => {
					class e {
						constructor(e, t) {
							(this._viewContainer = e),
								(this._context = new Qp()),
								(this._thenTemplateRef = null),
								(this._elseTemplateRef = null),
								(this._thenViewRef = null),
								(this._elseViewRef = null),
								(this._thenTemplateRef = t);
						}
						set ngIf(e) {
							(this._context.$implicit = this._context.ngIf = e), this._updateView();
						}
						set ngIfThen(e) {
							Yp('ngIfThen', e), (this._thenTemplateRef = e), (this._thenViewRef = null), this._updateView();
						}
						set ngIfElse(e) {
							Yp('ngIfElse', e), (this._elseTemplateRef = e), (this._elseViewRef = null), this._updateView();
						}
						_updateView() {
							this._context.$implicit
								? this._thenViewRef ||
								  (this._viewContainer.clear(),
								  (this._elseViewRef = null),
								  this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
								: this._elseViewRef ||
								  (this._viewContainer.clear(),
								  (this._thenViewRef = null),
								  this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
						}
					}
					return (
						(e.ngDirectiveDef = Rt({
							type: e,
							selectors: [['', 'ngIf', '']],
							factory: function(t) {
								return new (t || e)(al(Ac), al(Pc));
							},
							inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' }
						})),
						e
					);
				})();
			class Qp {
				constructor() {
					(this.$implicit = null), (this.ngIf = null);
				}
			}
			function Yp(e, t) {
				if (t && !t.createEmbeddedView) throw new Error(`${e} must be a TemplateRef, but received '${_e(t)}'.`);
			}
			const Jp = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Jp.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Jp)();
				},
				providers: [{ provide: Dp, useClass: Np }]
			});
			const Kp = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Kp.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Kp)();
				},
				providers: [
					{
						provide: jp,
						useValue: function(e, t) {
							'string' == typeof t && (t = parseInt(t, 10));
							const n = t,
								r = n.toString().replace(/^[^.]*\.?/, ''),
								s = Math.floor(Math.abs(n)),
								o = r.length,
								i = parseInt(r, 10),
								a = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
							switch (e.split('-')[0].toLowerCase()) {
								case 'af':
								case 'asa':
								case 'az':
								case 'bem':
								case 'bez':
								case 'bg':
								case 'brx':
								case 'ce':
								case 'cgg':
								case 'chr':
								case 'ckb':
								case 'ee':
								case 'el':
								case 'eo':
								case 'es':
								case 'eu':
								case 'fo':
								case 'fur':
								case 'gsw':
								case 'ha':
								case 'haw':
								case 'hu':
								case 'jgo':
								case 'jmc':
								case 'ka':
								case 'kk':
								case 'kkj':
								case 'kl':
								case 'ks':
								case 'ksb':
								case 'ky':
								case 'lb':
								case 'lg':
								case 'mas':
								case 'mgo':
								case 'ml':
								case 'mn':
								case 'nb':
								case 'nd':
								case 'ne':
								case 'nn':
								case 'nnh':
								case 'nyn':
								case 'om':
								case 'or':
								case 'os':
								case 'ps':
								case 'rm':
								case 'rof':
								case 'rwk':
								case 'saq':
								case 'seh':
								case 'sn':
								case 'so':
								case 'sq':
								case 'ta':
								case 'te':
								case 'teo':
								case 'tk':
								case 'tr':
								case 'ug':
								case 'uz':
								case 'vo':
								case 'vun':
								case 'wae':
								case 'xog':
									return 1 === n ? Ap.One : Ap.Other;
								case 'ak':
								case 'ln':
								case 'mg':
								case 'pa':
								case 'ti':
									return n === Math.floor(n) && n >= 0 && n <= 1 ? Ap.One : Ap.Other;
								case 'am':
								case 'as':
								case 'bn':
								case 'fa':
								case 'gu':
								case 'hi':
								case 'kn':
								case 'mr':
								case 'zu':
									return 0 === s || 1 === n ? Ap.One : Ap.Other;
								case 'ar':
									return 0 === n
										? Ap.Zero
										: 1 === n
										? Ap.One
										: 2 === n
										? Ap.Two
										: n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10
										? Ap.Few
										: n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99
										? Ap.Many
										: Ap.Other;
								case 'ast':
								case 'ca':
								case 'de':
								case 'en':
								case 'et':
								case 'fi':
								case 'fy':
								case 'gl':
								case 'it':
								case 'nl':
								case 'sv':
								case 'sw':
								case 'ur':
								case 'yi':
									return 1 === s && 0 === o ? Ap.One : Ap.Other;
								case 'be':
									return n % 10 == 1 && n % 100 != 11
										? Ap.One
										: n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14)
										? Ap.Few
										: n % 10 == 0 || (n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9) || (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
										? Ap.Many
										: Ap.Other;
								case 'br':
									return n % 10 == 1 && n % 100 != 11 && n % 100 != 71 && n % 100 != 91
										? Ap.One
										: n % 10 == 2 && n % 100 != 12 && n % 100 != 72 && n % 100 != 92
										? Ap.Two
										: n % 10 === Math.floor(n % 10) &&
										  ((n % 10 >= 3 && n % 10 <= 4) || n % 10 == 9) &&
										  !((n % 100 >= 10 && n % 100 <= 19) || (n % 100 >= 70 && n % 100 <= 79) || (n % 100 >= 90 && n % 100 <= 99))
										? Ap.Few
										: 0 !== n && n % 1e6 == 0
										? Ap.Many
										: Ap.Other;
								case 'bs':
								case 'hr':
								case 'sr':
									return (0 === o && s % 10 == 1 && s % 100 != 11) || (i % 10 == 1 && i % 100 != 11)
										? Ap.One
										: (0 === o && s % 10 === Math.floor(s % 10) && s % 10 >= 2 && s % 10 <= 4 && !(s % 100 >= 12 && s % 100 <= 14)) ||
										  (i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14))
										? Ap.Few
										: Ap.Other;
								case 'cs':
								case 'sk':
									return 1 === s && 0 === o ? Ap.One : s === Math.floor(s) && s >= 2 && s <= 4 && 0 === o ? Ap.Few : 0 !== o ? Ap.Many : Ap.Other;
								case 'cy':
									return 0 === n ? Ap.Zero : 1 === n ? Ap.One : 2 === n ? Ap.Two : 3 === n ? Ap.Few : 6 === n ? Ap.Many : Ap.Other;
								case 'da':
									return 1 === n || (0 !== a && (0 === s || 1 === s)) ? Ap.One : Ap.Other;
								case 'dsb':
								case 'hsb':
									return (0 === o && s % 100 == 1) || i % 100 == 1
										? Ap.One
										: (0 === o && s % 100 == 2) || i % 100 == 2
										? Ap.Two
										: (0 === o && s % 100 === Math.floor(s % 100) && s % 100 >= 3 && s % 100 <= 4) || (i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4)
										? Ap.Few
										: Ap.Other;
								case 'ff':
								case 'fr':
								case 'hy':
								case 'kab':
									return 0 === s || 1 === s ? Ap.One : Ap.Other;
								case 'fil':
									return (0 === o && (1 === s || 2 === s || 3 === s)) ||
										(0 === o && s % 10 != 4 && s % 10 != 6 && s % 10 != 9) ||
										(0 !== o && i % 10 != 4 && i % 10 != 6 && i % 10 != 9)
										? Ap.One
										: Ap.Other;
								case 'ga':
									return 1 === n ? Ap.One : 2 === n ? Ap.Two : n === Math.floor(n) && n >= 3 && n <= 6 ? Ap.Few : n === Math.floor(n) && n >= 7 && n <= 10 ? Ap.Many : Ap.Other;
								case 'gd':
									return 1 === n || 11 === n ? Ap.One : 2 === n || 12 === n ? Ap.Two : n === Math.floor(n) && ((n >= 3 && n <= 10) || (n >= 13 && n <= 19)) ? Ap.Few : Ap.Other;
								case 'gv':
									return 0 === o && s % 10 == 1
										? Ap.One
										: 0 === o && s % 10 == 2
										? Ap.Two
										: 0 !== o || (s % 100 != 0 && s % 100 != 20 && s % 100 != 40 && s % 100 != 60 && s % 100 != 80)
										? 0 !== o
											? Ap.Many
											: Ap.Other
										: Ap.Few;
								case 'he':
									return 1 === s && 0 === o ? Ap.One : 2 === s && 0 === o ? Ap.Two : 0 !== o || (n >= 0 && n <= 10) || n % 10 != 0 ? Ap.Other : Ap.Many;
								case 'is':
									return (0 === a && s % 10 == 1 && s % 100 != 11) || 0 !== a ? Ap.One : Ap.Other;
								case 'ksh':
									return 0 === n ? Ap.Zero : 1 === n ? Ap.One : Ap.Other;
								case 'kw':
								case 'naq':
								case 'se':
								case 'smn':
									return 1 === n ? Ap.One : 2 === n ? Ap.Two : Ap.Other;
								case 'lag':
									return 0 === n ? Ap.Zero : (0 !== s && 1 !== s) || 0 === n ? Ap.Other : Ap.One;
								case 'lt':
									return n % 10 != 1 || (n % 100 >= 11 && n % 100 <= 19)
										? n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 && !(n % 100 >= 11 && n % 100 <= 19)
											? Ap.Few
											: 0 !== i
											? Ap.Many
											: Ap.Other
										: Ap.One;
								case 'lv':
								case 'prg':
									return n % 10 == 0 ||
										(n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19) ||
										(2 === o && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 19)
										? Ap.Zero
										: (n % 10 == 1 && n % 100 != 11) || (2 === o && i % 10 == 1 && i % 100 != 11) || (2 !== o && i % 10 == 1)
										? Ap.One
										: Ap.Other;
								case 'mk':
									return (0 === o && s % 10 == 1) || i % 10 == 1 ? Ap.One : Ap.Other;
								case 'mt':
									return 1 === n
										? Ap.One
										: 0 === n || (n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
										? Ap.Few
										: n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19
										? Ap.Many
										: Ap.Other;
								case 'pl':
									return 1 === s && 0 === o
										? Ap.One
										: 0 === o && s % 10 === Math.floor(s % 10) && s % 10 >= 2 && s % 10 <= 4 && !(s % 100 >= 12 && s % 100 <= 14)
										? Ap.Few
										: (0 === o && 1 !== s && s % 10 === Math.floor(s % 10) && s % 10 >= 0 && s % 10 <= 1) ||
										  (0 === o && s % 10 === Math.floor(s % 10) && s % 10 >= 5 && s % 10 <= 9) ||
										  (0 === o && s % 100 === Math.floor(s % 100) && s % 100 >= 12 && s % 100 <= 14)
										? Ap.Many
										: Ap.Other;
								case 'pt':
									return n === Math.floor(n) && n >= 0 && n <= 2 && 2 !== n ? Ap.One : Ap.Other;
								case 'ro':
									return 1 === s && 0 === o ? Ap.One : 0 !== o || 0 === n || (1 !== n && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19) ? Ap.Few : Ap.Other;
								case 'ru':
								case 'uk':
									return 0 === o && s % 10 == 1 && s % 100 != 11
										? Ap.One
										: 0 === o && s % 10 === Math.floor(s % 10) && s % 10 >= 2 && s % 10 <= 4 && !(s % 100 >= 12 && s % 100 <= 14)
										? Ap.Few
										: (0 === o && s % 10 == 0) ||
										  (0 === o && s % 10 === Math.floor(s % 10) && s % 10 >= 5 && s % 10 <= 9) ||
										  (0 === o && s % 100 === Math.floor(s % 100) && s % 100 >= 11 && s % 100 <= 14)
										? Ap.Many
										: Ap.Other;
								case 'shi':
									return 0 === s || 1 === n ? Ap.One : n === Math.floor(n) && n >= 2 && n <= 10 ? Ap.Few : Ap.Other;
								case 'si':
									return 0 === n || 1 === n || (0 === s && 1 === i) ? Ap.One : Ap.Other;
								case 'sl':
									return 0 === o && s % 100 == 1
										? Ap.One
										: 0 === o && s % 100 == 2
										? Ap.Two
										: (0 === o && s % 100 === Math.floor(s % 100) && s % 100 >= 3 && s % 100 <= 4) || 0 !== o
										? Ap.Few
										: Ap.Other;
								case 'tzm':
									return (n === Math.floor(n) && n >= 0 && n <= 1) || (n === Math.floor(n) && n >= 11 && n <= 99) ? Ap.One : Ap.Other;
								default:
									return Ap.Other;
							}
						}
					}
				]
			});
			const Xp = new Ie('DocumentToken'),
				eh = 'server',
				th = (() => {
					class e {}
					return (e.ngInjectableDef = fe({ token: e, providedIn: 'root', factory: () => new nh(Ve(Xp), window, Ve($s)) })), e;
				})();
			class nh {
				constructor(e, t, n) {
					(this.document = e), (this.window = t), (this.errorHandler = n), (this.offset = () => [0, 0]);
				}
				setOffset(e) {
					this.offset = Array.isArray(e) ? () => e : e;
				}
				getScrollPosition() {
					return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
				}
				scrollToPosition(e) {
					this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
				}
				scrollToAnchor(e) {
					if (this.supportScrollRestoration()) {
						e = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(e) : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
						try {
							const n = this.document.querySelector(`#${e}`);
							if (n) return void this.scrollToElement(n);
							const r = this.document.querySelector(`[name='${e}']`);
							if (r) return void this.scrollToElement(r);
						} catch (t) {
							this.errorHandler.handleError(t);
						}
					}
				}
				setHistoryScrollRestoration(e) {
					if (this.supportScrollRestoration()) {
						const t = this.window.history;
						t && t.scrollRestoration && (t.scrollRestoration = e);
					}
				}
				scrollToElement(e) {
					const t = e.getBoundingClientRect(),
						n = t.left + this.window.pageXOffset,
						r = t.top + this.window.pageYOffset,
						s = this.offset();
					this.window.scrollTo(n - s[0], r - s[1]);
				}
				supportScrollRestoration() {
					try {
						return !!this.window && !!this.window.scrollTo;
					} catch (e) {
						return !1;
					}
				}
			}
			let rh = null;
			function sh() {
				return rh;
			}
			class oh {
				constructor() {
					this.resourceLoaderType = null;
				}
				get attrToPropMap() {
					return this._attrToPropMap;
				}
				set attrToPropMap(e) {
					this._attrToPropMap = e;
				}
			}
			class ih extends oh {
				constructor() {
					super(), (this._animationPrefix = null), (this._transitionEnd = null);
					try {
						const t = this.createElement('div', document);
						if (null != this.getStyle(t, 'animationName')) this._animationPrefix = '';
						else {
							const e = ['Webkit', 'Moz', 'O', 'ms'];
							for (let n = 0; n < e.length; n++)
								if (null != this.getStyle(t, e[n] + 'AnimationName')) {
									this._animationPrefix = '-' + e[n].toLowerCase() + '-';
									break;
								}
						}
						const n = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd otransitionend', transition: 'transitionend' };
						Object.keys(n).forEach((e) => {
							null != this.getStyle(t, e) && (this._transitionEnd = n[e]);
						});
					} catch (e) {
						(this._animationPrefix = null), (this._transitionEnd = null);
					}
				}
				getDistributedNodes(e) {
					return e.getDistributedNodes();
				}
				resolveAndSetHref(e, t, n) {
					e.href = null == n ? t : t + '/../' + n;
				}
				supportsDOMEvents() {
					return !0;
				}
				supportsNativeShadowDOM() {
					return 'function' == typeof document.body.createShadowRoot;
				}
				getAnimationPrefix() {
					return this._animationPrefix ? this._animationPrefix : '';
				}
				getTransitionEnd() {
					return this._transitionEnd ? this._transitionEnd : '';
				}
				supportsAnimation() {
					return null != this._animationPrefix && null != this._transitionEnd;
				}
			}
			const ah = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				lh = 3,
				ch = {
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
				uh = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' },
				ph = (() => {
					if (Te.Node)
						return (
							Te.Node.prototype.contains ||
							function(e) {
								return !!(16 & this.compareDocumentPosition(e));
							}
						);
				})();
			class hh extends ih {
				parse(e) {
					throw new Error('parse not implemented');
				}
				static makeCurrent() {
					var e;
					(e = new hh()), rh || (rh = e);
				}
				hasProperty(e, t) {
					return t in e;
				}
				setProperty(e, t, n) {
					e[t] = n;
				}
				getProperty(e, t) {
					return e[t];
				}
				invoke(e, t, n) {
					e[t](...n);
				}
				logError(e) {
					window.console && (console.error ? console.error(e) : console.log(e));
				}
				log(e) {
					window.console && window.console.log && window.console.log(e);
				}
				logGroup(e) {
					window.console && window.console.group && window.console.group(e);
				}
				logGroupEnd() {
					window.console && window.console.groupEnd && window.console.groupEnd();
				}
				get attrToPropMap() {
					return ah;
				}
				contains(e, t) {
					return ph.call(e, t);
				}
				querySelector(e, t) {
					return e.querySelector(t);
				}
				querySelectorAll(e, t) {
					return e.querySelectorAll(t);
				}
				on(e, t, n) {
					e.addEventListener(t, n, !1);
				}
				onAndCancel(e, t, n) {
					return (
						e.addEventListener(t, n, !1),
						() => {
							e.removeEventListener(t, n, !1);
						}
					);
				}
				dispatchEvent(e, t) {
					e.dispatchEvent(t);
				}
				createMouseEvent(e) {
					const t = this.getDefaultDocument().createEvent('MouseEvent');
					return t.initEvent(e, !0, !0), t;
				}
				createEvent(e) {
					const t = this.getDefaultDocument().createEvent('Event');
					return t.initEvent(e, !0, !0), t;
				}
				preventDefault(e) {
					e.preventDefault(), (e.returnValue = !1);
				}
				isPrevented(e) {
					return e.defaultPrevented || (null != e.returnValue && !e.returnValue);
				}
				getInnerHTML(e) {
					return e.innerHTML;
				}
				getTemplateContent(e) {
					return 'content' in e && this.isTemplateElement(e) ? e.content : null;
				}
				getOuterHTML(e) {
					return e.outerHTML;
				}
				nodeName(e) {
					return e.nodeName;
				}
				nodeValue(e) {
					return e.nodeValue;
				}
				type(e) {
					return e.type;
				}
				content(e) {
					return this.hasProperty(e, 'content') ? e.content : e;
				}
				firstChild(e) {
					return e.firstChild;
				}
				nextSibling(e) {
					return e.nextSibling;
				}
				parentElement(e) {
					return e.parentNode;
				}
				childNodes(e) {
					return e.childNodes;
				}
				childNodesAsList(e) {
					const t = e.childNodes,
						n = new Array(t.length);
					for (let r = 0; r < t.length; r++) n[r] = t[r];
					return n;
				}
				clearNodes(e) {
					for (; e.firstChild; ) e.removeChild(e.firstChild);
				}
				appendChild(e, t) {
					e.appendChild(t);
				}
				removeChild(e, t) {
					e.removeChild(t);
				}
				replaceChild(e, t, n) {
					e.replaceChild(t, n);
				}
				remove(e) {
					return e.parentNode && e.parentNode.removeChild(e), e;
				}
				insertBefore(e, t, n) {
					e.insertBefore(n, t);
				}
				insertAllBefore(e, t, n) {
					n.forEach((n) => e.insertBefore(n, t));
				}
				insertAfter(e, t, n) {
					e.insertBefore(n, t.nextSibling);
				}
				setInnerHTML(e, t) {
					e.innerHTML = t;
				}
				getText(e) {
					return e.textContent;
				}
				setText(e, t) {
					e.textContent = t;
				}
				getValue(e) {
					return e.value;
				}
				setValue(e, t) {
					e.value = t;
				}
				getChecked(e) {
					return e.checked;
				}
				setChecked(e, t) {
					e.checked = t;
				}
				createComment(e) {
					return this.getDefaultDocument().createComment(e);
				}
				createTemplate(e) {
					const t = this.getDefaultDocument().createElement('template');
					return (t.innerHTML = e), t;
				}
				createElement(e, t) {
					return (t = t || this.getDefaultDocument()).createElement(e);
				}
				createElementNS(e, t, n) {
					return (n = n || this.getDefaultDocument()).createElementNS(e, t);
				}
				createTextNode(e, t) {
					return (t = t || this.getDefaultDocument()).createTextNode(e);
				}
				createScriptTag(e, t, n) {
					const r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
					return r.setAttribute(e, t), r;
				}
				createStyleElement(e, t) {
					const n = (t = t || this.getDefaultDocument()).createElement('style');
					return this.appendChild(n, this.createTextNode(e, t)), n;
				}
				createShadowRoot(e) {
					return e.createShadowRoot();
				}
				getShadowRoot(e) {
					return e.shadowRoot;
				}
				getHost(e) {
					return e.host;
				}
				clone(e) {
					return e.cloneNode(!0);
				}
				getElementsByClassName(e, t) {
					return e.getElementsByClassName(t);
				}
				getElementsByTagName(e, t) {
					return e.getElementsByTagName(t);
				}
				classList(e) {
					return Array.prototype.slice.call(e.classList, 0);
				}
				addClass(e, t) {
					e.classList.add(t);
				}
				removeClass(e, t) {
					e.classList.remove(t);
				}
				hasClass(e, t) {
					return e.classList.contains(t);
				}
				setStyle(e, t, n) {
					e.style[t] = n;
				}
				removeStyle(e, t) {
					e.style[t] = '';
				}
				getStyle(e, t) {
					return e.style[t];
				}
				hasStyle(e, t, n) {
					const r = this.getStyle(e, t) || '';
					return n ? r == n : r.length > 0;
				}
				tagName(e) {
					return e.tagName;
				}
				attributeMap(e) {
					const t = new Map(),
						n = e.attributes;
					for (let r = 0; r < n.length; r++) {
						const e = n.item(r);
						t.set(e.name, e.value);
					}
					return t;
				}
				hasAttribute(e, t) {
					return e.hasAttribute(t);
				}
				hasAttributeNS(e, t, n) {
					return e.hasAttributeNS(t, n);
				}
				getAttribute(e, t) {
					return e.getAttribute(t);
				}
				getAttributeNS(e, t, n) {
					return e.getAttributeNS(t, n);
				}
				setAttribute(e, t, n) {
					e.setAttribute(t, n);
				}
				setAttributeNS(e, t, n, r) {
					e.setAttributeNS(t, n, r);
				}
				removeAttribute(e, t) {
					e.removeAttribute(t);
				}
				removeAttributeNS(e, t, n) {
					e.removeAttributeNS(t, n);
				}
				templateAwareRoot(e) {
					return this.isTemplateElement(e) ? this.content(e) : e;
				}
				createHtmlDocument() {
					return document.implementation.createHTMLDocument('fakeTitle');
				}
				getDefaultDocument() {
					return document;
				}
				getBoundingClientRect(e) {
					try {
						return e.getBoundingClientRect();
					} catch (t) {
						return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
					}
				}
				getTitle(e) {
					return e.title;
				}
				setTitle(e, t) {
					e.title = t || '';
				}
				elementMatches(e, t) {
					return !!this.isElementNode(e) && ((e.matches && e.matches(t)) || (e.msMatchesSelector && e.msMatchesSelector(t)) || (e.webkitMatchesSelector && e.webkitMatchesSelector(t)));
				}
				isTemplateElement(e) {
					return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
				}
				isTextNode(e) {
					return e.nodeType === Node.TEXT_NODE;
				}
				isCommentNode(e) {
					return e.nodeType === Node.COMMENT_NODE;
				}
				isElementNode(e) {
					return e.nodeType === Node.ELEMENT_NODE;
				}
				hasShadowRoot(e) {
					return null != e.shadowRoot && e instanceof HTMLElement;
				}
				isShadowRoot(e) {
					return e instanceof DocumentFragment;
				}
				importIntoDoc(e) {
					return document.importNode(this.templateAwareRoot(e), !0);
				}
				adoptNode(e) {
					return document.adoptNode(e);
				}
				getHref(e) {
					return e.getAttribute('href');
				}
				getEventKey(e) {
					let t = e.key;
					if (null == t) {
						if (null == (t = e.keyIdentifier)) return 'Unidentified';
						t.startsWith('U+') && ((t = String.fromCharCode(parseInt(t.substring(2), 16))), e.location === lh && uh.hasOwnProperty(t) && (t = uh[t]));
					}
					return ch[t] || t;
				}
				getGlobalEventTarget(e, t) {
					return 'window' === t ? window : 'document' === t ? e : 'body' === t ? e.body : null;
				}
				getHistory() {
					return window.history;
				}
				getLocation() {
					return window.location;
				}
				getBaseHref(e) {
					const t = fh || (fh = document.querySelector('base')) ? fh.getAttribute('href') : null;
					return null == t ? null : ((n = t), dh || (dh = document.createElement('a')), dh.setAttribute('href', n), '/' === dh.pathname.charAt(0) ? dh.pathname : '/' + dh.pathname);
					var n;
				}
				resetBaseElement() {
					fh = null;
				}
				getUserAgent() {
					return window.navigator.userAgent;
				}
				setData(e, t, n) {
					this.setAttribute(e, 'data-' + t, n);
				}
				getData(e, t) {
					return this.getAttribute(e, 'data-' + t);
				}
				getComputedStyle(e) {
					return getComputedStyle(e);
				}
				supportsWebAnimation() {
					return 'function' == typeof Element.prototype.animate;
				}
				performanceNow() {
					return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
				}
				supportsCookies() {
					return !0;
				}
				getCookie(e) {
					return (function(e, t) {
						t = encodeURIComponent(t);
						for (const n of e.split(';')) {
							const e = n.indexOf('='),
								[r, s] = -1 == e ? [n, ''] : [n.slice(0, e), n.slice(e + 1)];
							if (r.trim() === t) return decodeURIComponent(s);
						}
						return null;
					})(document.cookie, e);
				}
				setCookie(e, t) {
					document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
				}
			}
			let dh,
				fh = null;
			function gh() {
				return !!window.history.pushState;
			}
			const mh = (() => {
					class e extends kp {
						constructor(e) {
							super(), (this._doc = e), this._init();
						}
						_init() {
							(this.location = sh().getLocation()), (this._history = sh().getHistory());
						}
						getBaseHrefFromDOM() {
							return sh().getBaseHref(this._doc);
						}
						onPopState(e) {
							sh()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', e, !1);
						}
						onHashChange(e) {
							sh()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('hashchange', e, !1);
						}
						get href() {
							return this.location.href;
						}
						get protocol() {
							return this.location.protocol;
						}
						get hostname() {
							return this.location.hostname;
						}
						get port() {
							return this.location.port;
						}
						get pathname() {
							return this.location.pathname;
						}
						get search() {
							return this.location.search;
						}
						get hash() {
							return this.location.hash;
						}
						set pathname(e) {
							this.location.pathname = e;
						}
						pushState(e, t, n) {
							gh() ? this._history.pushState(e, t, n) : (this.location.hash = n);
						}
						replaceState(e, t, n) {
							gh() ? this._history.replaceState(e, t, n) : (this.location.hash = n);
						}
						forward() {
							this._history.forward();
						}
						back() {
							this._history.back();
						}
						getState() {
							return this._history.state;
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(Xp));
							},
							providedIn: null
						})),
						(e.ctorParameters = () => [{ type: void 0, decorators: [{ type: ae, args: [Xp] }] }]),
						e
					);
				})(),
				bh = new Ie('TRANSITION_ID'),
				yh = [
					{
						provide: yu,
						useFactory: function(e, t, n) {
							return () => {
								n.get(wu).donePromise.then(() => {
									const n = sh();
									Array.prototype.slice
										.apply(n.querySelectorAll(t, 'style[ng-transition]'))
										.filter((t) => n.getAttribute(t, 'ng-transition') === e)
										.forEach((e) => n.remove(e));
								});
							};
						},
						deps: [bh, Xp, ct],
						multi: !0
					}
				];
			class wh {
				static init() {
					var e;
					(e = new wh()), (np = e);
				}
				addToWindow(e) {
					(Te.getAngularTestability = (t, n = !0) => {
						const r = e.findTestabilityInTree(t, n);
						if (null == r) throw new Error('Could not find testability for element.');
						return r;
					}),
						(Te.getAllAngularTestabilities = () => e.getAllTestabilities()),
						(Te.getAllAngularRootElements = () => e.getAllRootElements()),
						Te.frameworkStabilizers || (Te.frameworkStabilizers = []),
						Te.frameworkStabilizers.push((e) => {
							const t = Te.getAllAngularTestabilities();
							let n = t.length,
								r = !1;
							const s = function(t) {
								(r = r || t), 0 == --n && e(r);
							};
							t.forEach(function(e) {
								e.whenStable(s);
							});
						});
				}
				findTestabilityInTree(e, t, n) {
					if (null == t) return null;
					const r = e.getTestability(t);
					return null != r ? r : n ? (sh().isShadowRoot(t) ? this.findTestabilityInTree(e, sh().getHost(t), !0) : this.findTestabilityInTree(e, sh().parentElement(t), !0)) : null;
				}
			}
			const _h = new Ie('EventManagerPlugins'),
				vh = (() => {
					class e {
						constructor(e, t) {
							(this._zone = t), (this._eventNameToPlugin = new Map()), e.forEach((e) => (e.manager = this)), (this._plugins = e.slice().reverse());
						}
						addEventListener(e, t, n) {
							return this._findPluginFor(t).addEventListener(e, t, n);
						}
						addGlobalEventListener(e, t, n) {
							return this._findPluginFor(t).addGlobalEventListener(e, t, n);
						}
						getZone() {
							return this._zone;
						}
						_findPluginFor(e) {
							const t = this._eventNameToPlugin.get(e);
							if (t) return t;
							const n = this._plugins;
							for (let r = 0; r < n.length; r++) {
								const t = n[r];
								if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
							}
							throw new Error(`No event manager plugin found for event ${e}`);
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(_h), Ve(qu));
							},
							providedIn: null
						})),
						e
					);
				})();
			class xh {
				constructor(e) {
					this._doc = e;
				}
				addGlobalEventListener(e, t, n) {
					const r = sh().getGlobalEventTarget(this._doc, e);
					if (!r) throw new Error(`Unsupported event target ${r} for event ${t}`);
					return this.addEventListener(r, t, n);
				}
			}
			const Ch = (() => {
					class e {
						constructor() {
							this._stylesSet = new Set();
						}
						addStyles(e) {
							const t = new Set();
							e.forEach((e) => {
								this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
							}),
								this.onStylesAdded(t);
						}
						onStylesAdded(e) {}
						getAllStyles() {
							return Array.from(this._stylesSet);
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)();
							},
							providedIn: null
						})),
						e
					);
				})(),
				kh = (() => {
					class e extends Ch {
						constructor(e) {
							super(), (this._doc = e), (this._hostNodes = new Set()), (this._styleNodes = new Set()), this._hostNodes.add(e.head);
						}
						_addStylesToHost(e, t) {
							e.forEach((e) => {
								const n = this._doc.createElement('style');
								(n.textContent = e), this._styleNodes.add(t.appendChild(n));
							});
						}
						addHost(e) {
							this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
						}
						removeHost(e) {
							this._hostNodes.delete(e);
						}
						onStylesAdded(e) {
							this._hostNodes.forEach((t) => this._addStylesToHost(e, t));
						}
						ngOnDestroy() {
							this._styleNodes.forEach((e) => sh().remove(e));
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(Xp));
							},
							providedIn: null
						})),
						e
					);
				})(),
				Sh = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/'
				},
				Oh = /%COMP%/g,
				Eh = '_nghost-%COMP%',
				Th = '_ngcontent-%COMP%';
			function Ih(e, t, n) {
				for (let r = 0; r < t.length; r++) {
					let s = t[r];
					Array.isArray(s) ? Ih(e, s, n) : ((s = s.replace(Oh, e)), n.push(s));
				}
				return n;
			}
			function Ph(e) {
				return (t) => {
					!1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
				};
			}
			const Mh = (() => {
				class e {
					constructor(e, t, n) {
						(this.eventManager = e), (this.sharedStylesHost = t), (this.appId = n), (this.rendererByCompId = new Map()), (this.defaultRenderer = new Ah(e));
					}
					createRenderer(e, t) {
						if (!e || !t) return this.defaultRenderer;
						switch (t.encapsulation) {
							case yt.Emulated: {
								let n = this.rendererByCompId.get(t.id);
								return n || ((n = new Dh(this.eventManager, this.sharedStylesHost, t, this.appId)), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n;
							}
							case yt.Native:
							case yt.ShadowDom:
								return new Nh(this.eventManager, this.sharedStylesHost, e, t);
							default:
								if (!this.rendererByCompId.has(t.id)) {
									const e = Ih(t.id, t.styles, []);
									this.sharedStylesHost.addStyles(e), this.rendererByCompId.set(t.id, this.defaultRenderer);
								}
								return this.defaultRenderer;
						}
					}
					begin() {}
					end() {}
				}
				return (
					(e.ngInjectableDef = fe({
						token: e,
						factory: function(t) {
							return new (t || e)(Ve(vh), Ve(kh), Ve(_u));
						},
						providedIn: null
					})),
					e
				);
			})();
			class Ah {
				constructor(e) {
					(this.eventManager = e), (this.data = Object.create(null));
				}
				destroy() {}
				createElement(e, t) {
					return t ? document.createElementNS(Sh[t] || t, e) : document.createElement(e);
				}
				createComment(e) {
					return document.createComment(e);
				}
				createText(e) {
					return document.createTextNode(e);
				}
				appendChild(e, t) {
					e.appendChild(t);
				}
				insertBefore(e, t, n) {
					e && e.insertBefore(t, n);
				}
				removeChild(e, t) {
					e && e.removeChild(t);
				}
				selectRootElement(e, t) {
					let n = 'string' == typeof e ? document.querySelector(e) : e;
					if (!n) throw new Error(`The selector "${e}" did not match any elements`);
					return t || (n.textContent = ''), n;
				}
				parentNode(e) {
					return e.parentNode;
				}
				nextSibling(e) {
					return e.nextSibling;
				}
				setAttribute(e, t, n, r) {
					if (r) {
						t = r + ':' + t;
						const s = Sh[r];
						s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n);
					} else e.setAttribute(t, n);
				}
				removeAttribute(e, t, n) {
					if (n) {
						const r = Sh[n];
						r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
					} else e.removeAttribute(t);
				}
				addClass(e, t) {
					e.classList.add(t);
				}
				removeClass(e, t) {
					e.classList.remove(t);
				}
				setStyle(e, t, n, r) {
					r & uc.DashCase ? e.style.setProperty(t, n, r & uc.Important ? 'important' : '') : (e.style[t] = n);
				}
				removeStyle(e, t, n) {
					n & uc.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
				}
				setProperty(e, t, n) {
					jh(t, 'property'), (e[t] = n);
				}
				setValue(e, t) {
					e.nodeValue = t;
				}
				listen(e, t, n) {
					return jh(t, 'listener'), 'string' == typeof e ? this.eventManager.addGlobalEventListener(e, t, Ph(n)) : this.eventManager.addEventListener(e, t, Ph(n));
				}
			}
			const Rh = (() => '@'.charCodeAt(0))();
			function jh(e, t) {
				if (e.charCodeAt(0) === Rh) throw new Error(`Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`);
			}
			class Dh extends Ah {
				constructor(e, t, n, r) {
					super(e), (this.component = n);
					const s = Ih(r + '-' + n.id, n.styles, []);
					t.addStyles(s), (this.contentAttr = Th.replace(Oh, r + '-' + n.id)), (this.hostAttr = Eh.replace(Oh, r + '-' + n.id));
				}
				applyToHost(e) {
					super.setAttribute(e, this.hostAttr, '');
				}
				createElement(e, t) {
					const n = super.createElement(e, t);
					return super.setAttribute(n, this.contentAttr, ''), n;
				}
			}
			class Nh extends Ah {
				constructor(e, t, n, r) {
					super(e),
						(this.sharedStylesHost = t),
						(this.hostEl = n),
						(this.component = r),
						(this.shadowRoot = r.encapsulation === yt.ShadowDom ? n.attachShadow({ mode: 'open' }) : n.createShadowRoot()),
						this.sharedStylesHost.addHost(this.shadowRoot);
					const s = Ih(r.id, r.styles, []);
					for (let o = 0; o < s.length; o++) {
						const e = document.createElement('style');
						(e.textContent = s[o]), this.shadowRoot.appendChild(e);
					}
				}
				nodeOrShadowRoot(e) {
					return e === this.hostEl ? this.shadowRoot : e;
				}
				destroy() {
					this.sharedStylesHost.removeHost(this.shadowRoot);
				}
				appendChild(e, t) {
					return super.appendChild(this.nodeOrShadowRoot(e), t);
				}
				insertBefore(e, t, n) {
					return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
				}
				removeChild(e, t) {
					return super.removeChild(this.nodeOrShadowRoot(e), t);
				}
				parentNode(e) {
					return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
				}
			}
			const Uh = (() =>
					('undefined' != typeof Zone && Zone.__symbol__) ||
					function(e) {
						return '__zone_symbol__' + e;
					})(),
				Lh = Uh('addEventListener'),
				Hh = Uh('removeEventListener'),
				Fh = {},
				zh = 'FALSE',
				Vh = 'ANGULAR',
				$h = 'addEventListener',
				Bh = 'removeEventListener',
				qh = '__zone_symbol__propagationStopped',
				Zh = '__zone_symbol__stopImmediatePropagation',
				Gh = (() => {
					const e = 'undefined' != typeof Zone && Zone[Uh('BLACK_LISTED_EVENTS')];
					if (e) {
						const t = {};
						return (
							e.forEach((e) => {
								t[e] = e;
							}),
							t
						);
					}
				})(),
				Wh = function(e) {
					return !!Gh && Gh.hasOwnProperty(e);
				},
				Qh = function(e) {
					const t = Fh[e.type];
					if (!t) return;
					const n = this[t];
					if (!n) return;
					const r = [e];
					if (1 === n.length) {
						const e = n[0];
						return e.zone !== Zone.current ? e.zone.run(e.handler, this, r) : e.handler.apply(this, r);
					}
					{
						const t = n.slice();
						for (let n = 0; n < t.length && !0 !== e[qh]; n++) {
							const e = t[n];
							e.zone !== Zone.current ? e.zone.run(e.handler, this, r) : e.handler.apply(this, r);
						}
					}
				},
				Yh = (() => {
					class e extends xh {
						constructor(e, t, n) {
							super(e),
								(this.ngZone = t),
								(n &&
									(function(e) {
										return e === eh;
									})(n)) ||
									this.patchEvent();
						}
						patchEvent() {
							if ('undefined' == typeof Event || !Event || !Event.prototype) return;
							if (Event.prototype[Zh]) return;
							const e = (Event.prototype[Zh] = Event.prototype.stopImmediatePropagation);
							Event.prototype.stopImmediatePropagation = function() {
								this && (this[qh] = !0), e && e.apply(this, arguments);
							};
						}
						supports(e) {
							return !0;
						}
						addEventListener(e, t, n) {
							let r = n;
							if (!e[Lh] || (qu.isInAngularZone() && !Wh(t))) e[$h](t, r, !1);
							else {
								let n = Fh[t];
								n || (n = Fh[t] = Uh(Vh + t + zh));
								let s = e[n];
								const o = s && s.length > 0;
								s || (s = e[n] = []);
								const i = Wh(t) ? Zone.root : Zone.current;
								if (0 === s.length) s.push({ zone: i, handler: r });
								else {
									let e = !1;
									for (let t = 0; t < s.length; t++)
										if (s[t].handler === r) {
											e = !0;
											break;
										}
									e || s.push({ zone: i, handler: r });
								}
								o || e[Lh](t, Qh, !1);
							}
							return () => this.removeEventListener(e, t, r);
						}
						removeEventListener(e, t, n) {
							let r = e[Hh];
							if (!r) return e[Bh].apply(e, [t, n, !1]);
							let s = Fh[t],
								o = s && e[s];
							if (!o) return e[Bh].apply(e, [t, n, !1]);
							let i = !1;
							for (let a = 0; a < o.length; a++)
								if (o[a].handler === n) {
									(i = !0), o.splice(a, 1);
									break;
								}
							i ? 0 === o.length && r.apply(e, [t, Qh, !1]) : e[Bh].apply(e, [t, n, !1]);
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(Xp), Ve(qu), Ve(ku, 8));
							},
							providedIn: null
						})),
						e
					);
				})(),
				Jh = {
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
				Kh = new Ie('HammerGestureConfig'),
				Xh = new Ie('HammerLoader'),
				ed = (() => {
					class e {
						constructor() {
							(this.events = []), (this.overrides = {});
						}
						buildHammer(e) {
							const t = new Hammer(e, this.options);
							t.get('pinch').set({ enable: !0 }), t.get('rotate').set({ enable: !0 });
							for (const n in this.overrides) t.get(n).set(this.overrides[n]);
							return t;
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)();
							},
							providedIn: null
						})),
						e
					);
				})(),
				td = (() => {
					class e extends xh {
						constructor(e, t, n, r) {
							super(e), (this._config = t), (this.console = n), (this.loader = r);
						}
						supports(e) {
							return !(
								(!Jh.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
								(!window.Hammer &&
									!this.loader &&
									(this.console.warn(`The "${e}" event cannot be bound because Hammer.JS is not ` + 'loaded and no custom loader has been specified.'), 1))
							);
						}
						addEventListener(e, t, n) {
							const r = this.manager.getZone();
							if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
								let r = !1,
									s = () => {
										r = !0;
									};
								return (
									this.loader()
										.then(() => {
											if (!window.Hammer) return this.console.warn('The custom HAMMER_LOADER completed, but Hammer.JS is not present.'), void (s = () => {});
											r || (s = this.addEventListener(e, t, n));
										})
										.catch(() => {
											this.console.warn(`The "${t}" event cannot be bound because the custom ` + 'Hammer.JS loader failed.'), (s = () => {});
										}),
									() => {
										s();
									}
								);
							}
							return r.runOutsideAngular(() => {
								const s = this._config.buildHammer(e),
									o = function(e) {
										r.runGuarded(function() {
											n(e);
										});
									};
								return (
									s.on(t, o),
									() => {
										s.off(t, o), 'function' == typeof s.destroy && s.destroy();
									}
								);
							});
						}
						isCustomEvent(e) {
							return this._config.events.indexOf(e) > -1;
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(Xp), Ve(Kh), Ve(Ou), Ve(Xh, 8));
							},
							providedIn: null
						})),
						e
					);
				})(),
				nd = ['alt', 'control', 'meta', 'shift'],
				rd = { alt: (e) => e.altKey, control: (e) => e.ctrlKey, meta: (e) => e.metaKey, shift: (e) => e.shiftKey },
				sd = (() => {
					class e extends xh {
						constructor(e) {
							super(e);
						}
						supports(t) {
							return null != e.parseEventName(t);
						}
						addEventListener(t, n, r) {
							const s = e.parseEventName(n),
								o = e.eventCallback(s.fullKey, r, this.manager.getZone());
							return this.manager.getZone().runOutsideAngular(() => sh().onAndCancel(t, s.domEventName, o));
						}
						static parseEventName(t) {
							const n = t.toLowerCase().split('.'),
								r = n.shift();
							if (0 === n.length || ('keydown' !== r && 'keyup' !== r)) return null;
							const s = e._normalizeKey(n.pop());
							let o = '';
							if (
								(nd.forEach((e) => {
									const t = n.indexOf(e);
									t > -1 && (n.splice(t, 1), (o += e + '.'));
								}),
								(o += s),
								0 != n.length || 0 === s.length)
							)
								return null;
							const i = {};
							return (i.domEventName = r), (i.fullKey = o), i;
						}
						static getEventFullKey(e) {
							let t = '',
								n = sh().getEventKey(e);
							return (
								' ' === (n = n.toLowerCase()) ? (n = 'space') : '.' === n && (n = 'dot'),
								nd.forEach((r) => {
									r != n && (0, rd[r])(e) && (t += r + '.');
								}),
								(t += n)
							);
						}
						static eventCallback(t, n, r) {
							return (s) => {
								e.getEventFullKey(s) === t && r.runGuarded(() => n(s));
							};
						}
						static _normalizeKey(e) {
							switch (e) {
								case 'esc':
									return 'escape';
								default:
									return e;
							}
						}
					}
					return (
						(e.ngInjectableDef = fe({
							token: e,
							factory: function(t) {
								return new (t || e)(Ve(Xp));
							},
							providedIn: null
						})),
						e
					);
				})();
			class od {}
			class id {
				constructor(e) {
					this.changingThisBreaksApplicationSecurity = e;
				}
				toString() {
					return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + ' (see http://g.co/ng/security#xss)';
				}
			}
			class ad extends id {
				getTypeName() {
					return 'HTML';
				}
			}
			class ld extends id {
				getTypeName() {
					return 'Style';
				}
			}
			class cd extends id {
				getTypeName() {
					return 'Script';
				}
			}
			class ud extends id {
				getTypeName() {
					return 'URL';
				}
			}
			class pd extends id {
				getTypeName() {
					return 'ResourceURL';
				}
			}
			const hd = [
					{ provide: Gr, useExisting: od },
					{
						provide: od,
						useClass: (() => {
							class e extends od {
								constructor(e) {
									super(), (this._doc = e);
								}
								sanitize(e, t) {
									if (null == t) return null;
									switch (e) {
										case Zr.NONE:
											return t;
										case Zr.HTML:
											return t instanceof ad ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, 'HTML'), Br(this._doc, String(t)));
										case Zr.STYLE:
											return t instanceof ld
												? t.changingThisBreaksApplicationSecurity
												: (this.checkNotSafeValue(t, 'Style'),
												  (function(e) {
														if (!(e = String(e).trim())) return '';
														const t = e.match(Qr);
														return (t && Er(t[1]) === t[1]) ||
															(e.match(Wr) &&
																(function(e) {
																	let t = !0,
																		n = !0;
																	for (let r = 0; r < e.length; r++) {
																		const s = e.charAt(r);
																		"'" === s && n ? (t = !t) : '"' === s && t && (n = !n);
																	}
																	return t && n;
																})(e))
															? e
															: (Cr() && console.warn(`WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`), 'unsafe');
												  })(t));
										case Zr.SCRIPT:
											if (t instanceof cd) return t.changingThisBreaksApplicationSecurity;
											throw (this.checkNotSafeValue(t, 'Script'), new Error('unsafe value used in a script context'));
										case Zr.URL:
											return t instanceof pd || t instanceof ud ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, 'URL'), Er(String(t)));
										case Zr.RESOURCE_URL:
											if (t instanceof pd) return t.changingThisBreaksApplicationSecurity;
											throw (this.checkNotSafeValue(t, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
										default:
											throw new Error(`Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`);
									}
								}
								checkNotSafeValue(e, t) {
									if (e instanceof id) throw new Error(`Required a safe ${t}, got a ${e.getTypeName()} ` + '(see http://g.co/ng/security#xss)');
								}
								bypassSecurityTrustHtml(e) {
									return new ad(e);
								}
								bypassSecurityTrustStyle(e) {
									return new ld(e);
								}
								bypassSecurityTrustScript(e) {
									return new cd(e);
								}
								bypassSecurityTrustUrl(e) {
									return new ud(e);
								}
								bypassSecurityTrustResourceUrl(e) {
									return new pd(e);
								}
							}
							return (
								(e.ngInjectableDef = fe({
									token: e,
									factory: function(t) {
										return new (t || e)(Ve(Xp));
									},
									providedIn: null
								})),
								e
							);
						})(),
						deps: [Xp]
					}
				],
				dd = ap(vp, 'browser', [
					{ provide: ku, useValue: 'browser' },
					{
						provide: Cu,
						useValue: function() {
							hh.makeCurrent(), wh.init();
						},
						multi: !0
					},
					{ provide: kp, useClass: mh, deps: [Xp] },
					{
						provide: Xp,
						useFactory: function() {
							return document;
						},
						deps: []
					}
				]),
				fd = [
					hd,
					{ provide: We, useValue: !0 },
					{
						provide: $s,
						useFactory: function() {
							return new $s();
						},
						deps: []
					},
					{ provide: _h, useClass: Yh, multi: !0, deps: [Xp, qu, ku] },
					{ provide: _h, useClass: sd, multi: !0, deps: [Xp] },
					{ provide: _h, useClass: td, multi: !0, deps: [Xp, Kh, Ou, [new le(), Xh]] },
					{ provide: Kh, useClass: ed, deps: [] },
					{ provide: Mh, useClass: Mh, deps: [vh, kh, _u] },
					{ provide: cc, useExisting: Mh },
					{ provide: Ch, useExisting: kh },
					{ provide: kh, useClass: kh, deps: [Xp] },
					{ provide: Ku, useClass: Ku, deps: [qu] },
					{ provide: vh, useClass: vh, deps: [_h, qu] },
					[]
				],
				gd = (() => {
					class e {
						constructor(e) {
							if (e)
								throw new Error(
									'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
								);
						}
						static withServerTransition(t) {
							return { ngModule: e, providers: [{ provide: _u, useValue: t.appId }, { provide: bh, useExisting: _u }, yh] };
						}
					}
					return (e.ngModuleDef = Mt({ type: e })), e;
				})();
			(gd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || gd)(Ve(gd, 12));
				},
				providers: fd,
				imports: [Jp, Cp]
			})),
				'undefined' != typeof window && window;
			const md = ['message'],
				bd = ['tabindex', '-1', 3, 'id'],
				yd = ['message', ''],
				wd = ['class', 'close', 'type', 'button', 'aria-label', 'close-alert', 'autofocus', '', 3, 'click', 'blur', 4, 'ngIf'],
				_d = ['type', 'button', 'aria-label', 'close-alert', 'autofocus', '', 1, 'close', 3, 'click', 'blur'];
			function vd(e, t) {
				if (1 & e) {
					const e = Ln();
					gl(0, 'button', _d),
						wl('click', function(t) {
							return Jn(e), xl().closeAlert();
						}),
						wl('blur', function(t) {
							return Jn(e), xl().trap();
						}),
						El(1, ' X\n'),
						ml();
				}
			}
			const xd = ['*'],
				Cd = ['content'],
				kd = ['href', '#', 1, 'show-focus', 3, 'click'],
				Sd = (() => {
					class e {
						constructor(e) {
							this.elementRef = e;
						}
						set class(e) {
							e.includes('close')
								? ((this.classList = e.replace(/ close|close /g, '')), (this.close = !0), (this.role = 'alertdialog'))
								: ((this.classList = e), (this.close = !1), (this.role = 'alert')),
								(this.ariaLabelledby = this.id = this.class.match(/\balert\S+\b/)[0]);
						}
						get class() {
							return this.classList;
						}
						ngOnInit() {
							(this.hostClass = this.class), (this.tabindex = '-1');
						}
						closeAlert() {
							this.hostClass = 'hide';
						}
						trap() {
							this.elementRef.nativeElement.focus();
						}
					}
					return (
						(e.ngComponentDef = Tt({
							type: e,
							selectors: [['ez-alert'], ['', 8, 'alert-bad'], ['', 8, 'alert-good'], ['', 8, 'alert-info'], ['', 8, 'alert-warn']],
							factory: function(t) {
								return new (t || e)(al(ac));
							},
							viewQuery: function(e, t) {
								var n;
								1 & e &&
									(function(e, t, n) {
										const r = Ln(),
											s = r[Vt];
										mu(r, s, e, !0, null, !0), (s.staticViewQueries = !0);
									})(md),
									2 & e && gu((n = bu())) && (t.message = n.first);
							},
							hostBindings: function(e, t, n) {
								1 & e &&
									(function(e) {
										const t = Ln(),
											n = t[Vt];
										n.firstTemplatePass &&
											((function(e, t, n) {
												const r = e.expandoInstructions,
													s = r.length;
												s >= 2 && r[s - 2] === t.hostBindings ? (r[s - 1] = r[s - 1] + 4) : r.push(t.hostBindings, 4);
											})(n, Nn),
											(function(e, t, n) {
												for (let r = 0; r < 4; r++) t.push(Bs), e.blueprint.push(Bs), e.data.push(null);
											})(n, t));
									})(),
									2 & e && (za('role', t.role), za('aria-labelledby', t.ariaLabelledby), za('class', t.hostClass), za('tabindex', t.tabindex));
							},
							inputs: { class: 'class' },
							ngContentSelectors: xd,
							consts: 4,
							vars: 2,
							template: function(e, t) {
								1 & e && (kl(), gl(0, 'p', bd, yd), Ol(2), ml(), il(3, vd, 2, 0, 'button', wd)), 2 & e && (za('id', t.id), zi(3), Ha('ngIf', t.close));
							},
							directives: [Wp],
							styles: [
								'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;color:#fff;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
							]
						})),
						e
					);
				})(),
				Od = (() => {
					class e {}
					return (e.ngModuleDef = Mt({ type: e })), e;
				})();
			Od.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Od)();
				},
				imports: [[], Jp]
			});
			const Ed = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Ed.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Ed)();
				},
				imports: [[Od]]
			});
			const Td = (() => {
					class e {
						constructor() {}
						ngOnInit() {}
					}
					return (
						(e.ngComponentDef = Tt({
							type: e,
							selectors: [['ez-badge'], ['', 8, 'badge-sm'], ['', 8, 'badge-md'], ['', 8, 'badge-lg']],
							factory: function(t) {
								return new (t || e)();
							},
							ngContentSelectors: xd,
							consts: 1,
							vars: 0,
							template: function(e, t) {
								1 & e && (kl(), Ol(0));
							},
							styles: [
								'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
							]
						})),
						e
					);
				})(),
				Id = (() => {
					class e {}
					return (e.ngModuleDef = Mt({ type: e })), e;
				})();
			Id.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Id)();
				}
			});
			const Pd = (() => {
					class e {
						constructor() {}
						ngOnInit() {}
					}
					return (
						(e.ngComponentDef = Tt({
							type: e,
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
							factory: function(t) {
								return new (t || e)();
							},
							ngContentSelectors: xd,
							consts: 1,
							vars: 0,
							template: function(e, t) {
								1 & e && (kl(), Ol(0));
							},
							styles: [
								'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;-webkit-box-flex:1;flex-grow:1;flex-shrink:0}'
							]
						})),
						e
					);
				})(),
				Md = (() => {
					class e {}
					return (e.ngModuleDef = Mt({ type: e })), e;
				})();
			Md.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Md)();
				}
			});
			const Ad = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Ad.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Ad)();
				}
			});
			const Rd = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Rd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Rd)();
				}
			});
			const jd = (() => {
					class e {
						constructor() {}
						ngOnInit() {}
					}
					return (
						(e.ngComponentDef = Tt({
							type: e,
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
							factory: function(t) {
								return new (t || e)();
							},
							ngContentSelectors: xd,
							consts: 1,
							vars: 0,
							template: function(e, t) {
								1 & e && (kl(), Ol(0));
							},
							styles: [
								'@charset "UTF-8";.checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:1 1 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border,box-shadow;transition-property:border,box-shadow;-webkit-transition-timing-function:linear;transition-timing-function:linear;border:.0625rem solid #bdbdbd}.form-field[_nghost-%COMP%]:not(:disabled), .form-field[_nghost-%COMP%]:not([disabled]){background-color:#fff}.form-field[_nghost-%COMP%]:-moz-read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[_nghost-%COMP%]:read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[type=checkbox][_nghost-%COMP%], .form-field[type=radio][_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;position:relative;width:1rem}.form-field[type=checkbox][_nghost-%COMP%]::after, .form-field[type=radio][_nghost-%COMP%]::after{display:block;font-size:1.175rem;height:.95rem;left:0;line-height:.8rem;position:absolute;text-align:center;top:0;width:.95rem}.form-field[type=checkbox][_nghost-%COMP%]:checked::after{content:"\u2713"}.form-field[type=radio][_nghost-%COMP%]{border-radius:50%}.form-field[type=radio][_nghost-%COMP%]:checked::after{content:"\u25cf"}.form-field[_nghost-%COMP%]:hover{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border;transition-property:border;-webkit-transition-timing-function:linear;transition-timing-function:linear;border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:border,box-shadow;transition-property:border,box-shadow;-webkit-transition-timing-function:linear;transition-timing-function:linear;box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3;outline:#2196f3 dotted 1px}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){-webkit-box-flex:1;flex:1 0 13.75rem;padding:.5rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-moz-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{-webkit-box-flex:1;flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{background-color:inherit;color:#8d8d8d;height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#8d8d8d}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{-webkit-box-flex:0;flex:0 0 7.5rem;flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{-webkit-box-flex:0;flex:none;font-size:1rem;padding-left:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{-webkit-box-flex:1;flex:1 0 auto}'
							]
						})),
						e
					);
				})(),
				Dd = (() => {
					class e {}
					return (e.ngModuleDef = Mt({ type: e })), e;
				})();
			Dd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Dd)();
				}
			});
			const Nd = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Nd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Nd)();
				}
			});
			const Ud = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Ud.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Ud)();
				}
			});
			const Ld = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Ld.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Ld)();
				}
			});
			const Hd = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Hd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Hd)();
				}
			});
			const Fd = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Fd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Fd)();
				}
			});
			const zd = (() => {
					class e {
						constructor() {}
						ngOnInit() {}
					}
					return (
						(e.ngComponentDef = Tt({
							type: e,
							selectors: [['ez-spinner'], ['', 8, 'spinner'], ['', 8, 'spinner-dotted']],
							factory: function(t) {
								return new (t || e)();
							},
							ngContentSelectors: xd,
							consts: 1,
							vars: 0,
							template: function(e, t) {
								1 & e && (kl(), Ol(0));
							},
							styles: [
								'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
							]
						})),
						e
					);
				})(),
				Vd = (() => {
					class e {}
					return (e.ngModuleDef = Mt({ type: e })), e;
				})();
			Vd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Vd)();
				}
			});
			const $d = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			$d.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || $d)();
				}
			});
			const Bd = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Bd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Bd)();
				}
			});
			const qd = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			qd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || qd)();
				}
			});
			const Zd = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Zd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Zd)();
				}
			});
			const Gd = (() => {
					class e {
						constructor(e) {
							this.elementRef = e;
						}
						ngOnInit() {}
						skip() {
							this.content.nativeElement.focus();
						}
					}
					return (
						(e.ngComponentDef = Tt({
							type: e,
							selectors: [['ez-root']],
							factory: function(t) {
								return new (t || e)(al(ac));
							},
							viewQuery: function(e, t) {
								var n;
								1 & e &&
									(function(e, t, n) {
										const r = Ln();
										mu(r, r[Vt], e, !0, null, !1);
									})(Cd),
									2 & e && gu((n = bu())) && (t.content = n.first);
							},
							ngContentSelectors: xd,
							consts: 3,
							vars: 0,
							template: function(e, t) {
								1 & e &&
									(kl(),
									gl(0, 'a', kd),
									wl('click', function(e) {
										return t.skip();
									}),
									El(1, 'Skip to content'),
									ml(),
									Ol(2));
							},
							styles: [
								'@charset "UTF-8";/*! Easy CSS/Angular Framework v0.0.1\n * Author: Paul Chehak\n * License: MIT License\n */a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:"\u2012";color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex="-1"]:focus,input[type=range]:focus{outline:0}/*! Easy CSS/Angular Framework v0.0.1\n * Author: Paul Chehak\n * License: MIT License\n */.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start}.col,.col-full{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{-webkit-box-pack:center;justify-content:center}.align-l,.col.align-t{-webkit-box-pack:start;justify-content:flex-start}.align-r,.col.align-b{-webkit-box-pack:end;justify-content:flex-end}.align-m,.col.align-c{-webkit-box-align:center;align-items:center}.align-b,.col.align-r{-webkit-box-align:end;align-items:flex-end}.align-t,.col.align-l{-webkit-box-align:start;align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{-webkit-box-pack:justify;justify-content:space-between}.align-st{-webkit-box-align:stretch;align-items:stretch}.align-cm{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{-webkit-box-flex:0;flex-grow:0;flex-shrink:0}.item-g-0{-webkit-box-flex:0;flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{-webkit-box-flex:1;flex-grow:1;flex-shrink:1}.item-g-1{-webkit-box-flex:1;flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{-webkit-box-flex:2;flex-grow:2;flex-shrink:2}.item-g-2{-webkit-box-flex:2;flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{-webkit-box-flex:3;flex-grow:3;flex-shrink:3}.item-g-3{-webkit-box-flex:3;flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{-webkit-box-flex:4;flex-grow:4;flex-shrink:4}.item-g-4{-webkit-box-flex:4;flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{-webkit-box-flex:5;flex-grow:5;flex-shrink:5}.item-g-5{-webkit-box-flex:5;flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{-webkit-box-flex:6;flex-grow:6;flex-shrink:6}.item-g-6{-webkit-box-flex:6;flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{-webkit-box-flex:7;flex-grow:7;flex-shrink:7}.item-g-7{-webkit-box-flex:7;flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{-webkit-box-flex:8;flex-grow:8;flex-shrink:8}.item-g-8{-webkit-box-flex:8;flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{-webkit-box-flex:9;flex-grow:9;flex-shrink:9}.item-g-9{-webkit-box-flex:9;flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{-webkit-box-flex:10;flex-grow:10;flex-shrink:10}.item-g-10{-webkit-box-flex:10;flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{-webkit-box-flex:11;flex-grow:11;flex-shrink:11}.item-g-11{-webkit-box-flex:11;flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{-webkit-box-flex:12;flex-grow:12;flex-shrink:12}.item-g-12{-webkit-box-flex:12;flex-grow:12}.item-s-12{flex-shrink:12}[class*=flex-g]{flex-basis:auto}.item-order-1{-webkit-box-ordinal-group:2;order:1}.item-order-2{-webkit-box-ordinal-group:3;order:2}.item-order-3{-webkit-box-ordinal-group:4;order:3}.item-order-4{-webkit-box-ordinal-group:5;order:4}.item-order-5{-webkit-box-ordinal-group:6;order:5}.item-order-6{-webkit-box-ordinal-group:7;order:6}.item-order-7{-webkit-box-ordinal-group:8;order:7}.item-order-8{-webkit-box-ordinal-group:9;order:8}.item-order-9{-webkit-box-ordinal-group:10;order:9}.item-order-10{-webkit-box-ordinal-group:11;order:10}.item-order-11{-webkit-box-ordinal-group:12;order:11}.item-order-12{-webkit-box-ordinal-group:13;order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:46rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}:disabled,[disabled]{background-color:#efefef;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}'
							],
							encapsulation: 2
						})),
						e
					);
				})(),
				Wd = (() => {
					class e {}
					return (e.ngModuleDef = Mt({ type: e })), e;
				})();
			Wd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Wd)();
				},
				imports: [[]]
			});
			const Qd = (() => {
				class e {}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			Qd.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || Qd)();
				},
				imports: [Ed, Id, Md, Ad, Rd, Dd, Nd, Ud, Ld, Hd, Fd, Vd, $d, Bd, qd, Zd]
			});
			const Yd = new v((e) => e.complete());
			function Jd(e) {
				return e
					? (function(e) {
							return new v((t) => e.schedule(() => t.complete()));
					  })(e)
					: Yd;
			}
			function Kd(e) {
				const t = new v((t) => {
					t.next(e), t.complete();
				});
				return (t._isScalar = !0), (t.value = e), t;
			}
			function Xd(...e) {
				let t = e[e.length - 1];
				switch ((I(t) ? e.pop() : (t = void 0), e.length)) {
					case 0:
						return Jd(t);
					case 1:
						return t ? q(e, t) : Kd(e[0]);
					default:
						return q(e, t);
				}
			}
			class ef extends E {
				constructor(e) {
					super(), (this._value = e);
				}
				get value() {
					return this.getValue();
				}
				_subscribe(e) {
					const t = super._subscribe(e);
					return t && !t.closed && e.next(this._value), t;
				}
				getValue() {
					if (this.hasError) throw this.thrownError;
					if (this.closed) throw new k();
					return this._value;
				}
				next(e) {
					super.next((this._value = e));
				}
			}
			function tf() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			tf.prototype = Object.create(Error.prototype);
			const nf = tf,
				rf = {};
			class sf {
				constructor(e) {
					this.resultSelector = e;
				}
				call(e, t) {
					return t.subscribe(new of(e, this.resultSelector));
				}
			}
			class of extends z {
				constructor(e, t) {
					super(e), (this.resultSelector = t), (this.active = 0), (this.values = []), (this.observables = []);
				}
				_next(e) {
					this.values.push(rf), this.observables.push(e);
				}
				_complete() {
					const e = this.observables,
						t = e.length;
					if (0 === t) this.destination.complete();
					else {
						(this.active = t), (this.toRespond = t);
						for (let n = 0; n < t; n++) {
							const t = e[n];
							this.add(F(this, t, t, n));
						}
					}
				}
				notifyComplete(e) {
					0 == (this.active -= 1) && this.destination.complete();
				}
				notifyNext(e, t, n, r, s) {
					const o = this.values,
						i = this.toRespond ? (o[n] === rf ? --this.toRespond : this.toRespond) : 0;
					(o[n] = t), 0 === i && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()));
				}
				_tryResultSelector(e) {
					let t;
					try {
						t = this.resultSelector.apply(this, e);
					} catch (n) {
						return void this.destination.error(n);
					}
					this.destination.next(t);
				}
			}
			function af(e) {
				return new v((t) => {
					let n;
					try {
						n = e();
					} catch (r) {
						return void t.error(r);
					}
					return (n ? Z(n) : Jd()).subscribe(t);
				});
			}
			function lf() {
				return J(1);
			}
			function cf(e, t) {
				return function(n) {
					return n.lift(new uf(e, t));
				};
			}
			class uf {
				constructor(e, t) {
					(this.predicate = e), (this.thisArg = t);
				}
				call(e, t) {
					return t.subscribe(new pf(e, this.predicate, this.thisArg));
				}
			}
			class pf extends g {
				constructor(e, t, n) {
					super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
				}
				_next(e) {
					let t;
					try {
						t = this.predicate.call(this.thisArg, e, this.count++);
					} catch (n) {
						return void this.destination.error(n);
					}
					t && this.destination.next(e);
				}
			}
			function hf() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			hf.prototype = Object.create(Error.prototype);
			const df = hf;
			function ff(e) {
				return function(t) {
					return 0 === e ? Jd() : t.lift(new gf(e));
				};
			}
			class gf {
				constructor(e) {
					if (((this.total = e), this.total < 0)) throw new df();
				}
				call(e, t) {
					return t.subscribe(new mf(e, this.total));
				}
			}
			class mf extends g {
				constructor(e, t) {
					super(e), (this.total = t), (this.ring = new Array()), (this.count = 0);
				}
				_next(e) {
					const t = this.ring,
						n = this.total,
						r = this.count++;
					t.length < n ? t.push(e) : (t[r % n] = e);
				}
				_complete() {
					const e = this.destination;
					let t = this.count;
					if (t > 0) {
						const n = this.count >= this.total ? this.total : this.count,
							r = this.ring;
						for (let s = 0; s < n; s++) {
							const s = t++ % n;
							e.next(r[s]);
						}
					}
					e.complete();
				}
			}
			function bf(e, t, n) {
				return function(r) {
					return r.lift(new yf(e, t, n));
				};
			}
			class yf {
				constructor(e, t, n) {
					(this.nextOrObserver = e), (this.error = t), (this.complete = n);
				}
				call(e, t) {
					return t.subscribe(new wf(e, this.nextOrObserver, this.error, this.complete));
				}
			}
			class wf extends g {
				constructor(e, t, n, s) {
					super(e),
						(this._tapNext = y),
						(this._tapError = y),
						(this._tapComplete = y),
						(this._tapError = n || y),
						(this._tapComplete = s || y),
						r(t)
							? ((this._context = this), (this._tapNext = t))
							: t && ((this._context = t), (this._tapNext = t.next || y), (this._tapError = t.error || y), (this._tapComplete = t.complete || y));
				}
				_next(e) {
					try {
						this._tapNext.call(this._context, e);
					} catch (t) {
						return void this.destination.error(t);
					}
					this.destination.next(e);
				}
				_error(e) {
					try {
						this._tapError.call(this._context, e);
					} catch (e) {
						return void this.destination.error(e);
					}
					this.destination.error(e);
				}
				_complete() {
					try {
						this._tapComplete.call(this._context);
					} catch (e) {
						return void this.destination.error(e);
					}
					return this.destination.complete();
				}
			}
			const _f = (
				e = function() {
					return new nf();
				}
			) =>
				bf({
					hasValue: !1,
					next() {
						this.hasValue = !0;
					},
					complete() {
						if (!this.hasValue) throw e();
					}
				});
			function vf(e = null) {
				return (t) => t.lift(new xf(e));
			}
			class xf {
				constructor(e) {
					this.defaultValue = e;
				}
				call(e, t) {
					return t.subscribe(new Cf(e, this.defaultValue));
				}
			}
			class Cf extends g {
				constructor(e, t) {
					super(e), (this.defaultValue = t), (this.isEmpty = !0);
				}
				_next(e) {
					(this.isEmpty = !1), this.destination.next(e);
				}
				_complete() {
					this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
				}
			}
			function kf(e, t) {
				const n = arguments.length >= 2;
				return (r) =>
					r.pipe(
						e ? cf((t, n) => e(t, n, r)) : Y,
						ff(1),
						n ? vf(t) : _f(() => new nf())
					);
			}
			function Sf(e) {
				return function(t) {
					const n = new Of(e),
						r = t.lift(n);
					return (n.caught = r);
				};
			}
			class Of {
				constructor(e) {
					this.selector = e;
				}
				call(e, t) {
					return t.subscribe(new Ef(e, this.selector, this.caught));
				}
			}
			class Ef extends z {
				constructor(e, t, n) {
					super(e), (this.selector = t), (this.caught = n);
				}
				error(e) {
					if (!this.isStopped) {
						let n;
						try {
							n = this.selector(e, this.caught);
						} catch (t) {
							return void super.error(t);
						}
						this._unsubscribeAndRecycle();
						const r = new P(this, void 0, void 0);
						this.add(r), F(this, n, void 0, void 0, r);
					}
				}
			}
			function Tf(e) {
				return (t) => (0 === e ? Jd() : t.lift(new If(e)));
			}
			class If {
				constructor(e) {
					if (((this.total = e), this.total < 0)) throw new df();
				}
				call(e, t) {
					return t.subscribe(new Pf(e, this.total));
				}
			}
			class Pf extends g {
				constructor(e, t) {
					super(e), (this.total = t), (this.count = 0);
				}
				_next(e) {
					const t = this.total,
						n = ++this.count;
					n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()));
				}
			}
			function Mf(e, t) {
				const n = arguments.length >= 2;
				return (r) =>
					r.pipe(
						e ? cf((t, n) => e(t, n, r)) : Y,
						Tf(1),
						n ? vf(t) : _f(() => new nf())
					);
			}
			class Af {
				constructor(e, t, n) {
					(this.predicate = e), (this.thisArg = t), (this.source = n);
				}
				call(e, t) {
					return t.subscribe(new Rf(e, this.predicate, this.thisArg, this.source));
				}
			}
			class Rf extends g {
				constructor(e, t, n, r) {
					super(e), (this.predicate = t), (this.thisArg = n), (this.source = r), (this.index = 0), (this.thisArg = n || this);
				}
				notifyComplete(e) {
					this.destination.next(e), this.destination.complete();
				}
				_next(e) {
					let t = !1;
					try {
						t = this.predicate.call(this.thisArg, e, this.index++, this.source);
					} catch (n) {
						return void this.destination.error(n);
					}
					t || this.notifyComplete(!1);
				}
				_complete() {
					this.notifyComplete(!0);
				}
			}
			function jf(e, t) {
				return 'function' == typeof t ? (n) => n.pipe(jf((n, r) => Z(e(n, r)).pipe(V((e, s) => t(n, e, r, s))))) : (t) => t.lift(new Df(e));
			}
			class Df {
				constructor(e) {
					this.project = e;
				}
				call(e, t) {
					return t.subscribe(new Nf(e, this.project));
				}
			}
			class Nf extends z {
				constructor(e, t) {
					super(e), (this.project = t), (this.index = 0);
				}
				_next(e) {
					let t;
					const n = this.index++;
					try {
						t = this.project(e, n);
					} catch (r) {
						return void this.destination.error(r);
					}
					this._innerSub(t, e, n);
				}
				_innerSub(e, t, n) {
					const r = this.innerSubscription;
					r && r.unsubscribe();
					const s = new P(this, void 0, void 0);
					this.destination.add(s), (this.innerSubscription = F(this, e, t, n, s));
				}
				_complete() {
					const { innerSubscription: e } = this;
					(e && !e.closed) || super._complete(), this.unsubscribe();
				}
				_unsubscribe() {
					this.innerSubscription = null;
				}
				notifyComplete(e) {
					this.destination.remove(e), (this.innerSubscription = null), this.isStopped && super._complete();
				}
				notifyNext(e, t, n, r, s) {
					this.destination.next(t);
				}
			}
			function Uf(e, t) {
				let n = !1;
				return (
					arguments.length >= 2 && (n = !0),
					function(r) {
						return r.lift(new Lf(e, t, n));
					}
				);
			}
			class Lf {
				constructor(e, t, n = !1) {
					(this.accumulator = e), (this.seed = t), (this.hasSeed = n);
				}
				call(e, t) {
					return t.subscribe(new Hf(e, this.accumulator, this.seed, this.hasSeed));
				}
			}
			class Hf extends g {
				constructor(e, t, n, r) {
					super(e), (this.accumulator = t), (this._seed = n), (this.hasSeed = r), (this.index = 0);
				}
				get seed() {
					return this._seed;
				}
				set seed(e) {
					(this.hasSeed = !0), (this._seed = e);
				}
				_next(e) {
					if (this.hasSeed) return this._tryNext(e);
					(this.seed = e), this.destination.next(e);
				}
				_tryNext(e) {
					const t = this.index++;
					let n;
					try {
						n = this.accumulator(this.seed, e, t);
					} catch (r) {
						this.destination.error(r);
					}
					(this.seed = n), this.destination.next(n);
				}
			}
			function Ff(e, t) {
				return G(e, t, 1);
			}
			class zf {
				constructor(e) {
					this.callback = e;
				}
				call(e, t) {
					return t.subscribe(new Vf(e, this.callback));
				}
			}
			class Vf extends g {
				constructor(e, t) {
					super(e), this.add(new h(t));
				}
			}
			class $f {
				constructor(e, t) {
					(this.id = e), (this.url = t);
				}
			}
			class Bf extends $f {
				constructor(e, t, n = 'imperative', r = null) {
					super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
				}
				toString() {
					return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
				}
			}
			class qf extends $f {
				constructor(e, t, n) {
					super(e, t), (this.urlAfterRedirects = n);
				}
				toString() {
					return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
				}
			}
			class Zf extends $f {
				constructor(e, t, n) {
					super(e, t), (this.reason = n);
				}
				toString() {
					return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
				}
			}
			class Gf extends $f {
				constructor(e, t, n) {
					super(e, t), (this.error = n);
				}
				toString() {
					return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
				}
			}
			class Wf extends $f {
				constructor(e, t, n, r) {
					super(e, t), (this.urlAfterRedirects = n), (this.state = r);
				}
				toString() {
					return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Qf extends $f {
				constructor(e, t, n, r) {
					super(e, t), (this.urlAfterRedirects = n), (this.state = r);
				}
				toString() {
					return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Yf extends $f {
				constructor(e, t, n, r, s) {
					super(e, t), (this.urlAfterRedirects = n), (this.state = r), (this.shouldActivate = s);
				}
				toString() {
					return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
				}
			}
			class Jf extends $f {
				constructor(e, t, n, r) {
					super(e, t), (this.urlAfterRedirects = n), (this.state = r);
				}
				toString() {
					return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Kf extends $f {
				constructor(e, t, n, r) {
					super(e, t), (this.urlAfterRedirects = n), (this.state = r);
				}
				toString() {
					return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Xf {
				constructor(e) {
					this.route = e;
				}
				toString() {
					return `RouteConfigLoadStart(path: ${this.route.path})`;
				}
			}
			class eg {
				constructor(e) {
					this.route = e;
				}
				toString() {
					return `RouteConfigLoadEnd(path: ${this.route.path})`;
				}
			}
			class tg {
				constructor(e) {
					this.snapshot = e;
				}
				toString() {
					return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class ng {
				constructor(e) {
					this.snapshot = e;
				}
				toString() {
					return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class rg {
				constructor(e) {
					this.snapshot = e;
				}
				toString() {
					return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class sg {
				constructor(e) {
					this.snapshot = e;
				}
				toString() {
					return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class og {
				constructor(e, t, n) {
					(this.routerEvent = e), (this.position = t), (this.anchor = n);
				}
				toString() {
					return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`;
				}
			}
			const ig = (() => {
					class e {}
					return (
						(e.ngComponentDef = Tt({
							type: e,
							selectors: [['ng-component']],
							factory: function(t) {
								return new (t || e)();
							},
							consts: 1,
							vars: 0,
							template: function(e, t) {
								1 & e && bl(0, 'router-outlet');
							},
							directives: function() {
								return [cb];
							},
							encapsulation: 2
						})),
						e
					);
				})(),
				ag = 'primary';
			class lg {
				constructor(e) {
					this.params = e || {};
				}
				has(e) {
					return this.params.hasOwnProperty(e);
				}
				get(e) {
					if (this.has(e)) {
						const t = this.params[e];
						return Array.isArray(t) ? t[0] : t;
					}
					return null;
				}
				getAll(e) {
					if (this.has(e)) {
						const t = this.params[e];
						return Array.isArray(t) ? t : [t];
					}
					return [];
				}
				get keys() {
					return Object.keys(this.params);
				}
			}
			function cg(e) {
				return new lg(e);
			}
			const ug = 'ngNavigationCancelingError';
			function pg(e) {
				const t = Error('NavigationCancelingError: ' + e);
				return (t[ug] = !0), t;
			}
			function hg(e, t, n) {
				const r = n.path.split('/');
				if (r.length > e.length) return null;
				if ('full' === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
				const s = {};
				for (let o = 0; o < r.length; o++) {
					const t = r[o],
						n = e[o];
					if (t.startsWith(':')) s[t.substring(1)] = n;
					else if (t !== n.path) return null;
				}
				return { consumed: e.slice(0, r.length), posParams: s };
			}
			class dg {
				constructor(e, t) {
					(this.routes = e), (this.module = t);
				}
			}
			function fg(e, t = '') {
				for (let n = 0; n < e.length; n++) {
					const r = e[n];
					gg(r, mg(t, r));
				}
			}
			function gg(e, t) {
				if (!e)
					throw new Error(
						`\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
					);
				if (Array.isArray(e)) throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);
				if (!e.component && !e.children && !e.loadChildren && e.outlet && e.outlet !== ag)
					throw new Error(`Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`);
				if (e.redirectTo && e.children) throw new Error(`Invalid configuration of route '${t}': redirectTo and children cannot be used together`);
				if (e.redirectTo && e.loadChildren) throw new Error(`Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`);
				if (e.children && e.loadChildren) throw new Error(`Invalid configuration of route '${t}': children and loadChildren cannot be used together`);
				if (e.redirectTo && e.component) throw new Error(`Invalid configuration of route '${t}': redirectTo and component cannot be used together`);
				if (e.path && e.matcher) throw new Error(`Invalid configuration of route '${t}': path and matcher cannot be used together`);
				if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren)
					throw new Error(`Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`);
				if (void 0 === e.path && void 0 === e.matcher) throw new Error(`Invalid configuration of route '${t}': routes must have either a path or a matcher specified`);
				if ('string' == typeof e.path && '/' === e.path.charAt(0)) throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);
				if ('' === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
					throw new Error(
						`Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
					);
				if (void 0 !== e.pathMatch && 'full' !== e.pathMatch && 'prefix' !== e.pathMatch)
					throw new Error(`Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`);
				e.children && fg(e.children, t);
			}
			function mg(e, t) {
				return t ? (e || t.path ? (e && !t.path ? `${e}/` : !e && t.path ? t.path : `${e}/${t.path}`) : '') : e;
			}
			function bg(e) {
				const t = e.children && e.children.map(bg),
					n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
				return !n.component && (t || n.loadChildren) && n.outlet && n.outlet !== ag && (n.component = ig), n;
			}
			function yg(e, t) {
				const n = Object.keys(e),
					r = Object.keys(t);
				if (!n || !r || n.length != r.length) return !1;
				let s;
				for (let o = 0; o < n.length; o++) if (e[(s = n[o])] !== t[s]) return !1;
				return !0;
			}
			function wg(e) {
				return Array.prototype.concat.apply([], e);
			}
			function _g(e) {
				return e.length > 0 ? e[e.length - 1] : null;
			}
			function vg(e, t) {
				for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
			}
			function xg(e) {
				return (t = e) && 'function' == typeof t.subscribe ? e : yl(e) ? Z(Promise.resolve(e)) : Xd(e);
				var t;
			}
			function Cg(e, t, n) {
				return n
					? (function(e, t) {
							return yg(e, t);
					  })(e.queryParams, t.queryParams) &&
							(function e(t, n) {
								if (!Eg(t.segments, n.segments)) return !1;
								if (t.numberOfChildren !== n.numberOfChildren) return !1;
								for (const r in n.children) {
									if (!t.children[r]) return !1;
									if (!e(t.children[r], n.children[r])) return !1;
								}
								return !0;
							})(e.root, t.root)
					: (function(e, t) {
							return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every((n) => t[n] === e[n]);
					  })(e.queryParams, t.queryParams) &&
							(function e(t, n) {
								return (function t(n, r, s) {
									if (n.segments.length > s.length) {
										return !!Eg(n.segments.slice(0, s.length), s) && !r.hasChildren();
									}
									if (n.segments.length === s.length) {
										if (!Eg(n.segments, s)) return !1;
										for (const t in r.children) {
											if (!n.children[t]) return !1;
											if (!e(n.children[t], r.children[t])) return !1;
										}
										return !0;
									}
									{
										const e = s.slice(0, n.segments.length),
											o = s.slice(n.segments.length);
										return !!Eg(n.segments, e) && !!n.children[ag] && t(n.children[ag], r, o);
									}
								})(t, n, n.segments);
							})(e.root, t.root);
			}
			class kg {
				constructor(e, t, n) {
					(this.root = e), (this.queryParams = t), (this.fragment = n);
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = cg(this.queryParams)), this._queryParamMap;
				}
				toString() {
					return Mg.serialize(this);
				}
			}
			class Sg {
				constructor(e, t) {
					(this.segments = e), (this.children = t), (this.parent = null), vg(t, (e, t) => (e.parent = this));
				}
				hasChildren() {
					return this.numberOfChildren > 0;
				}
				get numberOfChildren() {
					return Object.keys(this.children).length;
				}
				toString() {
					return Ag(this);
				}
			}
			class Og {
				constructor(e, t) {
					(this.path = e), (this.parameters = t);
				}
				get parameterMap() {
					return this._parameterMap || (this._parameterMap = cg(this.parameters)), this._parameterMap;
				}
				toString() {
					return Lg(this);
				}
			}
			function Eg(e, t) {
				return e.length === t.length && e.every((e, n) => e.path === t[n].path);
			}
			function Tg(e, t) {
				let n = [];
				return (
					vg(e.children, (e, r) => {
						r === ag && (n = n.concat(t(e, r)));
					}),
					vg(e.children, (e, r) => {
						r !== ag && (n = n.concat(t(e, r)));
					}),
					n
				);
			}
			class Ig {}
			class Pg {
				parse(e) {
					const t = new $g(e);
					return new kg(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
				}
				serialize(e) {
					var t;
					return `${`/${(function e(t, n) {
						if (!t.hasChildren()) return Ag(t);
						if (n) {
							const n = t.children[ag] ? e(t.children[ag], !1) : '',
								r = [];
							return (
								vg(t.children, (t, n) => {
									n !== ag && r.push(`${n}:${e(t, !1)}`);
								}),
								r.length > 0 ? `${n}(${r.join('//')})` : n
							);
						}
						{
							const n = Tg(t, (n, r) => (r === ag ? [e(t.children[ag], !1)] : [`${r}:${e(n, !1)}`]));
							return `${Ag(t)}/(${n.join('//')})`;
						}
					})(e.root, !0)}`}${(function(e) {
						const t = Object.keys(e).map((t) => {
							const n = e[t];
							return Array.isArray(n) ? n.map((e) => `${jg(t)}=${jg(e)}`).join('&') : `${jg(t)}=${jg(n)}`;
						});
						return t.length ? `?${t.join('&')}` : '';
					})(e.queryParams)}${'string' == typeof e.fragment ? `#${((t = e.fragment), encodeURI(t))}` : ''}`;
				}
			}
			const Mg = new Pg();
			function Ag(e) {
				return e.segments.map((e) => Lg(e)).join('/');
			}
			function Rg(e) {
				return encodeURIComponent(e)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function jg(e) {
				return Rg(e).replace(/%3B/gi, ';');
			}
			function Dg(e) {
				return Rg(e)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function Ng(e) {
				return decodeURIComponent(e);
			}
			function Ug(e) {
				return Ng(e.replace(/\+/g, '%20'));
			}
			function Lg(e) {
				return `${Dg(e.path)}${((t = e.parameters),
				Object.keys(t)
					.map((e) => `;${Dg(e)}=${Dg(t[e])}`)
					.join(''))}`;
				var t;
			}
			const Hg = /^[^\/()?;=#]+/;
			function Fg(e) {
				const t = e.match(Hg);
				return t ? t[0] : '';
			}
			const zg = /^[^=?&#]+/,
				Vg = /^[^?&#]+/;
			class $g {
				constructor(e) {
					(this.url = e), (this.remaining = e);
				}
				parseRootSegment() {
					return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new Sg([], {}) : new Sg([], this.parseChildren());
				}
				parseQueryParams() {
					const e = {};
					if (this.consumeOptional('?'))
						do {
							this.parseQueryParam(e);
						} while (this.consumeOptional('&'));
					return e;
				}
				parseFragment() {
					return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
				}
				parseChildren() {
					if ('' === this.remaining) return {};
					this.consumeOptional('/');
					const e = [];
					for (this.peekStartsWith('(') || e.push(this.parseSegment()); this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/('); )
						this.capture('/'), e.push(this.parseSegment());
					let t = {};
					this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
					let n = {};
					return this.peekStartsWith('(') && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n[ag] = new Sg(e, t)), n;
				}
				parseSegment() {
					const e = Fg(this.remaining);
					if ('' === e && this.peekStartsWith(';')) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
					return this.capture(e), new Og(Ng(e), this.parseMatrixParams());
				}
				parseMatrixParams() {
					const e = {};
					for (; this.consumeOptional(';'); ) this.parseParam(e);
					return e;
				}
				parseParam(e) {
					const t = Fg(this.remaining);
					if (!t) return;
					this.capture(t);
					let n = '';
					if (this.consumeOptional('=')) {
						const e = Fg(this.remaining);
						e && this.capture((n = e));
					}
					e[Ng(t)] = Ng(n);
				}
				parseQueryParam(e) {
					const t = (function(e) {
						const t = e.match(zg);
						return t ? t[0] : '';
					})(this.remaining);
					if (!t) return;
					this.capture(t);
					let n = '';
					if (this.consumeOptional('=')) {
						const e = (function(e) {
							const t = e.match(Vg);
							return t ? t[0] : '';
						})(this.remaining);
						e && this.capture((n = e));
					}
					const r = Ug(t),
						s = Ug(n);
					if (e.hasOwnProperty(r)) {
						let t = e[r];
						Array.isArray(t) || (e[r] = t = [t]), t.push(s);
					} else e[r] = s;
				}
				parseParens(e) {
					const t = {};
					for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
						const n = Fg(this.remaining),
							r = this.remaining[n.length];
						if ('/' !== r && ')' !== r && ';' !== r) throw new Error(`Cannot parse url '${this.url}'`);
						let s = void 0;
						n.indexOf(':') > -1 ? ((s = n.substr(0, n.indexOf(':'))), this.capture(s), this.capture(':')) : e && (s = ag);
						const o = this.parseChildren();
						(t[s] = 1 === Object.keys(o).length ? o[ag] : new Sg([], o)), this.consumeOptional('//');
					}
					return t;
				}
				peekStartsWith(e) {
					return this.remaining.startsWith(e);
				}
				consumeOptional(e) {
					return !!this.peekStartsWith(e) && ((this.remaining = this.remaining.substring(e.length)), !0);
				}
				capture(e) {
					if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
				}
			}
			class Bg {
				constructor(e) {
					this._root = e;
				}
				get root() {
					return this._root.value;
				}
				parent(e) {
					const t = this.pathFromRoot(e);
					return t.length > 1 ? t[t.length - 2] : null;
				}
				children(e) {
					const t = qg(e, this._root);
					return t ? t.children.map((e) => e.value) : [];
				}
				firstChild(e) {
					const t = qg(e, this._root);
					return t && t.children.length > 0 ? t.children[0].value : null;
				}
				siblings(e) {
					const t = Zg(e, this._root);
					return t.length < 2 ? [] : t[t.length - 2].children.map((e) => e.value).filter((t) => t !== e);
				}
				pathFromRoot(e) {
					return Zg(e, this._root).map((e) => e.value);
				}
			}
			function qg(e, t) {
				if (e === t.value) return t;
				for (const n of t.children) {
					const t = qg(e, n);
					if (t) return t;
				}
				return null;
			}
			function Zg(e, t) {
				if (e === t.value) return [t];
				for (const n of t.children) {
					const r = Zg(e, n);
					if (r.length) return r.unshift(t), r;
				}
				return [];
			}
			class Gg {
				constructor(e, t) {
					(this.value = e), (this.children = t);
				}
				toString() {
					return `TreeNode(${this.value})`;
				}
			}
			function Wg(e) {
				const t = {};
				return e && e.children.forEach((e) => (t[e.value.outlet] = e)), t;
			}
			class Qg extends Bg {
				constructor(e, t) {
					super(e), (this.snapshot = t), tm(this, e);
				}
				toString() {
					return this.snapshot.toString();
				}
			}
			function Yg(e, t) {
				const n = (function(e, t) {
						const n = new Xg([], {}, {}, '', {}, ag, t, null, e.root, -1, {});
						return new em('', new Gg(n, []));
					})(e, t),
					r = new ef([new Og('', {})]),
					s = new ef({}),
					o = new ef({}),
					i = new ef({}),
					a = new ef(''),
					l = new Jg(r, s, i, a, o, ag, t, n.root);
				return (l.snapshot = n.root), new Qg(new Gg(l, []), n);
			}
			class Jg {
				constructor(e, t, n, r, s, o, i, a) {
					(this.url = e), (this.params = t), (this.queryParams = n), (this.fragment = r), (this.data = s), (this.outlet = o), (this.component = i), (this._futureSnapshot = a);
				}
				get routeConfig() {
					return this._futureSnapshot.routeConfig;
				}
				get root() {
					return this._routerState.root;
				}
				get parent() {
					return this._routerState.parent(this);
				}
				get firstChild() {
					return this._routerState.firstChild(this);
				}
				get children() {
					return this._routerState.children(this);
				}
				get pathFromRoot() {
					return this._routerState.pathFromRoot(this);
				}
				get paramMap() {
					return this._paramMap || (this._paramMap = this.params.pipe(V((e) => cg(e)))), this._paramMap;
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(V((e) => cg(e)))), this._queryParamMap;
				}
				toString() {
					return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
				}
			}
			function Kg(e, t = 'emptyOnly') {
				const n = e.pathFromRoot;
				let r = 0;
				if ('always' !== t)
					for (r = n.length - 1; r >= 1; ) {
						const e = n[r],
							t = n[r - 1];
						if (e.routeConfig && '' === e.routeConfig.path) r--;
						else {
							if (t.component) break;
							r--;
						}
					}
				return (function(e) {
					return e.reduce((e, t) => ({ params: Object.assign({}, e.params, t.params), data: Object.assign({}, e.data, t.data), resolve: Object.assign({}, e.resolve, t._resolvedData) }), {
						params: {},
						data: {},
						resolve: {}
					});
				})(n.slice(r));
			}
			class Xg {
				constructor(e, t, n, r, s, o, i, a, l, c, u) {
					(this.url = e),
						(this.params = t),
						(this.queryParams = n),
						(this.fragment = r),
						(this.data = s),
						(this.outlet = o),
						(this.component = i),
						(this.routeConfig = a),
						(this._urlSegment = l),
						(this._lastPathIndex = c),
						(this._resolve = u);
				}
				get root() {
					return this._routerState.root;
				}
				get parent() {
					return this._routerState.parent(this);
				}
				get firstChild() {
					return this._routerState.firstChild(this);
				}
				get children() {
					return this._routerState.children(this);
				}
				get pathFromRoot() {
					return this._routerState.pathFromRoot(this);
				}
				get paramMap() {
					return this._paramMap || (this._paramMap = cg(this.params)), this._paramMap;
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = cg(this.queryParams)), this._queryParamMap;
				}
				toString() {
					return `Route(url:'${this.url.map((e) => e.toString()).join('/')}', path:'${this.routeConfig ? this.routeConfig.path : ''}')`;
				}
			}
			class em extends Bg {
				constructor(e, t) {
					super(t), (this.url = e), tm(this, t);
				}
				toString() {
					return nm(this._root);
				}
			}
			function tm(e, t) {
				(t.value._routerState = e), t.children.forEach((t) => tm(e, t));
			}
			function nm(e) {
				const t = e.children.length > 0 ? ` { ${e.children.map(nm).join(', ')} } ` : '';
				return `${e.value}${t}`;
			}
			function rm(e) {
				if (e.snapshot) {
					const t = e.snapshot,
						n = e._futureSnapshot;
					(e.snapshot = n),
						yg(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams),
						t.fragment !== n.fragment && e.fragment.next(n.fragment),
						yg(t.params, n.params) || e.params.next(n.params),
						(function(e, t) {
							if (e.length !== t.length) return !1;
							for (let n = 0; n < e.length; ++n) if (!yg(e[n], t[n])) return !1;
							return !0;
						})(t.url, n.url) || e.url.next(n.url),
						yg(t.data, n.data) || e.data.next(n.data);
				} else (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
			}
			function sm(e, t) {
				var n, r;
				return (
					yg(e.params, t.params) && Eg((n = e.url), (r = t.url)) && n.every((e, t) => yg(e.parameters, r[t].parameters)) && !(!e.parent != !t.parent) && (!e.parent || sm(e.parent, t.parent))
				);
			}
			function om(e) {
				return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
			}
			function im(e, t, n, r, s) {
				let o = {};
				return (
					r &&
						vg(r, (e, t) => {
							o[t] = Array.isArray(e) ? e.map((e) => `${e}`) : `${e}`;
						}),
					new kg(
						n.root === e
							? t
							: (function e(t, n, r) {
									const s = {};
									return (
										vg(t.children, (t, o) => {
											s[o] = t === n ? r : e(t, n, r);
										}),
										new Sg(t.segments, s)
									);
							  })(n.root, e, t),
						o,
						s
					)
				);
			}
			class am {
				constructor(e, t, n) {
					if (((this.isAbsolute = e), (this.numberOfDoubleDots = t), (this.commands = n), e && n.length > 0 && om(n[0]))) throw new Error('Root segment cannot have matrix parameters');
					const r = n.find((e) => 'object' == typeof e && null != e && e.outlets);
					if (r && r !== _g(n)) throw new Error('{outlets:{}} has to be the last command');
				}
				toRoot() {
					return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
				}
			}
			class lm {
				constructor(e, t, n) {
					(this.segmentGroup = e), (this.processChildren = t), (this.index = n);
				}
			}
			function cm(e) {
				return 'object' == typeof e && null != e && e.outlets ? e.outlets[ag] : `${e}`;
			}
			function um(e, t, n) {
				if ((e || (e = new Sg([], {})), 0 === e.segments.length && e.hasChildren())) return pm(e, t, n);
				const r = (function(e, t, n) {
						let r = 0,
							s = t;
						const o = { match: !1, pathIndex: 0, commandIndex: 0 };
						for (; s < e.segments.length; ) {
							if (r >= n.length) return o;
							const t = e.segments[s],
								i = cm(n[r]),
								a = r < n.length - 1 ? n[r + 1] : null;
							if (s > 0 && void 0 === i) break;
							if (i && a && 'object' == typeof a && void 0 === a.outlets) {
								if (!gm(i, a, t)) return o;
								r += 2;
							} else {
								if (!gm(i, {}, t)) return o;
								r++;
							}
							s++;
						}
						return { match: !0, pathIndex: s, commandIndex: r };
					})(e, t, n),
					s = n.slice(r.commandIndex);
				if (r.match && r.pathIndex < e.segments.length) {
					const t = new Sg(e.segments.slice(0, r.pathIndex), {});
					return (t.children[ag] = new Sg(e.segments.slice(r.pathIndex), e.children)), pm(t, 0, s);
				}
				return r.match && 0 === s.length ? new Sg(e.segments, {}) : r.match && !e.hasChildren() ? hm(e, t, n) : r.match ? pm(e, 0, s) : hm(e, t, n);
			}
			function pm(e, t, n) {
				if (0 === n.length) return new Sg(e.segments, {});
				{
					const r = (function(e) {
							return 'object' != typeof e[0] ? { [ag]: e } : void 0 === e[0].outlets ? { [ag]: e } : e[0].outlets;
						})(n),
						s = {};
					return (
						vg(r, (n, r) => {
							null !== n && (s[r] = um(e.children[r], t, n));
						}),
						vg(e.children, (e, t) => {
							void 0 === r[t] && (s[t] = e);
						}),
						new Sg(e.segments, s)
					);
				}
			}
			function hm(e, t, n) {
				const r = e.segments.slice(0, t);
				let s = 0;
				for (; s < n.length; ) {
					if ('object' == typeof n[s] && void 0 !== n[s].outlets) {
						const e = dm(n[s].outlets);
						return new Sg(r, e);
					}
					if (0 === s && om(n[0])) {
						r.push(new Og(e.segments[t].path, n[0])), s++;
						continue;
					}
					const o = cm(n[s]),
						i = s < n.length - 1 ? n[s + 1] : null;
					o && i && om(i) ? (r.push(new Og(o, fm(i))), (s += 2)) : (r.push(new Og(o, {})), s++);
				}
				return new Sg(r, {});
			}
			function dm(e) {
				const t = {};
				return (
					vg(e, (e, n) => {
						null !== e && (t[n] = hm(new Sg([], {}), 0, e));
					}),
					t
				);
			}
			function fm(e) {
				const t = {};
				return vg(e, (e, n) => (t[n] = `${e}`)), t;
			}
			function gm(e, t, n) {
				return e == n.path && yg(t, n.parameters);
			}
			const mm = (e, t, n) => V((r) => (new bm(t, r.targetRouterState, r.currentRouterState, n).activate(e), r));
			class bm {
				constructor(e, t, n, r) {
					(this.routeReuseStrategy = e), (this.futureState = t), (this.currState = n), (this.forwardEvent = r);
				}
				activate(e) {
					const t = this.futureState._root,
						n = this.currState ? this.currState._root : null;
					this.deactivateChildRoutes(t, n, e), rm(this.futureState.root), this.activateChildRoutes(t, n, e);
				}
				deactivateChildRoutes(e, t, n) {
					const r = Wg(t);
					e.children.forEach((e) => {
						const t = e.value.outlet;
						this.deactivateRoutes(e, r[t], n), delete r[t];
					}),
						vg(r, (e, t) => {
							this.deactivateRouteAndItsChildren(e, n);
						});
				}
				deactivateRoutes(e, t, n) {
					const r = e.value,
						s = t ? t.value : null;
					if (r === s)
						if (r.component) {
							const s = n.getContext(r.outlet);
							s && this.deactivateChildRoutes(e, t, s.children);
						} else this.deactivateChildRoutes(e, t, n);
					else s && this.deactivateRouteAndItsChildren(t, n);
				}
				deactivateRouteAndItsChildren(e, t) {
					this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t);
				}
				detachAndStoreRouteSubtree(e, t) {
					const n = t.getContext(e.value.outlet);
					if (n && n.outlet) {
						const t = n.outlet.detach(),
							r = n.children.onOutletDeactivated();
						this.routeReuseStrategy.store(e.value.snapshot, { componentRef: t, route: e, contexts: r });
					}
				}
				deactivateRouteAndOutlet(e, t) {
					const n = t.getContext(e.value.outlet);
					if (n) {
						const r = Wg(e),
							s = e.value.component ? n.children : t;
						vg(r, (e, t) => this.deactivateRouteAndItsChildren(e, s)), n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated());
					}
				}
				activateChildRoutes(e, t, n) {
					const r = Wg(t);
					e.children.forEach((e) => {
						this.activateRoutes(e, r[e.value.outlet], n), this.forwardEvent(new sg(e.value.snapshot));
					}),
						e.children.length && this.forwardEvent(new ng(e.value.snapshot));
				}
				activateRoutes(e, t, n) {
					const r = e.value,
						s = t ? t.value : null;
					if ((rm(r), r === s))
						if (r.component) {
							const s = n.getOrCreateContext(r.outlet);
							this.activateChildRoutes(e, t, s.children);
						} else this.activateChildRoutes(e, t, n);
					else if (r.component) {
						const t = n.getOrCreateContext(r.outlet);
						if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
							const e = this.routeReuseStrategy.retrieve(r.snapshot);
							this.routeReuseStrategy.store(r.snapshot, null),
								t.children.onOutletReAttached(e.contexts),
								(t.attachRef = e.componentRef),
								(t.route = e.route.value),
								t.outlet && t.outlet.attach(e.componentRef, e.route.value),
								ym(e.route);
						} else {
							const n = (function(e) {
									for (let t = r.snapshot.parent; t; t = t.parent) {
										const e = t.routeConfig;
										if (e && e._loadedConfig) return e._loadedConfig;
										if (e && e.component) return null;
									}
									return null;
								})(),
								s = n ? n.module.componentFactoryResolver : null;
							(t.attachRef = null), (t.route = r), (t.resolver = s), t.outlet && t.outlet.activateWith(r, s), this.activateChildRoutes(e, null, t.children);
						}
					} else this.activateChildRoutes(e, null, n);
				}
			}
			function ym(e) {
				rm(e.value), e.children.forEach(ym);
			}
			function wm(e) {
				return 'function' == typeof e;
			}
			function _m(e) {
				return e instanceof kg;
			}
			class vm {
				constructor(e) {
					this.segmentGroup = e || null;
				}
			}
			class xm {
				constructor(e) {
					this.urlTree = e;
				}
			}
			function Cm(e) {
				return new v((t) => t.error(new vm(e)));
			}
			function km(e) {
				return new v((t) => t.error(new xm(e)));
			}
			function Sm(e) {
				return new v((t) => t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)));
			}
			class Om {
				constructor(e, t, n, r, s) {
					(this.configLoader = t), (this.urlSerializer = n), (this.urlTree = r), (this.config = s), (this.allowRedirects = !0), (this.ngModule = e.get(Kl));
				}
				apply() {
					return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, ag)
						.pipe(V((e) => this.createUrlTree(e, this.urlTree.queryParams, this.urlTree.fragment)))
						.pipe(
							Sf((e) => {
								if (e instanceof xm) return (this.allowRedirects = !1), this.match(e.urlTree);
								if (e instanceof vm) throw this.noMatchError(e);
								throw e;
							})
						);
				}
				match(e) {
					return this.expandSegmentGroup(this.ngModule, this.config, e.root, ag)
						.pipe(V((t) => this.createUrlTree(t, e.queryParams, e.fragment)))
						.pipe(
							Sf((e) => {
								if (e instanceof vm) throw this.noMatchError(e);
								throw e;
							})
						);
				}
				noMatchError(e) {
					return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`);
				}
				createUrlTree(e, t, n) {
					const r = e.segments.length > 0 ? new Sg([], { [ag]: e }) : e;
					return new kg(r, t, n);
				}
				expandSegmentGroup(e, t, n, r) {
					return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(e, t, n).pipe(V((e) => new Sg([], e))) : this.expandSegment(e, n, t, n.segments, r, !0);
				}
				expandChildren(e, t, n) {
					return (function(e, t) {
						if (0 === Object.keys(e).length) return Xd({});
						const n = [],
							r = [],
							s = {};
						return (
							vg(e, (e, o) => {
								const i = t(o, e).pipe(V((e) => (s[o] = e)));
								o === ag ? n.push(i) : r.push(i);
							}),
							Xd.apply(null, n.concat(r)).pipe(
								lf(),
								kf(),
								V(() => s)
							)
						);
					})(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
				}
				expandSegment(e, t, n, r, s, o) {
					return Xd(...n).pipe(
						V((i) =>
							this.expandSegmentAgainstRoute(e, t, n, i, r, s, o).pipe(
								Sf((e) => {
									if (e instanceof vm) return Xd(null);
									throw e;
								})
							)
						),
						lf(),
						Mf((e) => !!e),
						Sf((e, n) => {
							if (e instanceof nf || 'EmptyError' === e.name) {
								if (this.noLeftoversInUrl(t, r, s)) return Xd(new Sg([], {}));
								throw new vm(t);
							}
							throw e;
						})
					);
				}
				noLeftoversInUrl(e, t, n) {
					return 0 === t.length && !e.children[n];
				}
				expandSegmentAgainstRoute(e, t, n, r, s, o, i) {
					return Pm(r) !== o
						? Cm(t)
						: void 0 === r.redirectTo
						? this.matchSegmentAgainstRoute(e, t, r, s)
						: i && this.allowRedirects
						? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, o)
						: Cm(t);
				}
				expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, o) {
					return '**' === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, o) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, o);
				}
				expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
					const s = this.applyRedirectCommands([], n.redirectTo, {});
					return n.redirectTo.startsWith('/')
						? km(s)
						: this.lineralizeSegments(n, s).pipe(
								G((n) => {
									const s = new Sg(n, {});
									return this.expandSegment(e, s, t, n, r, !1);
								})
						  );
				}
				expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, o) {
					const { matched: i, consumedSegments: a, lastChild: l, positionalParamSegments: c } = Em(t, r, s);
					if (!i) return Cm(t);
					const u = this.applyRedirectCommands(a, r.redirectTo, c);
					return r.redirectTo.startsWith('/') ? km(u) : this.lineralizeSegments(r, u).pipe(G((r) => this.expandSegment(e, t, n, r.concat(s.slice(l)), o, !1)));
				}
				matchSegmentAgainstRoute(e, t, n, r) {
					if ('**' === n.path) return n.loadChildren ? this.configLoader.load(e.injector, n).pipe(V((e) => ((n._loadedConfig = e), new Sg(r, {})))) : Xd(new Sg(r, {}));
					const { matched: s, consumedSegments: o, lastChild: i } = Em(t, n, r);
					if (!s) return Cm(t);
					const a = r.slice(i);
					return this.getChildConfig(e, n, r).pipe(
						G((e) => {
							const n = e.module,
								r = e.routes,
								{ segmentGroup: s, slicedSegments: i } = (function(e, t, n, r) {
									return n.length > 0 &&
										(function(e, t, n) {
											return r.some((n) => Im(e, t, n) && Pm(n) !== ag);
										})(e, n)
										? {
												segmentGroup: Tm(
													new Sg(
														t,
														(function(e, t) {
															const n = {};
															n[ag] = t;
															for (const r of e) '' === r.path && Pm(r) !== ag && (n[Pm(r)] = new Sg([], {}));
															return n;
														})(r, new Sg(n, e.children))
													)
												),
												slicedSegments: []
										  }
										: 0 === n.length &&
										  (function(e, t, n) {
												return r.some((n) => Im(e, t, n));
										  })(e, n)
										? {
												segmentGroup: Tm(
													new Sg(
														e.segments,
														(function(e, t, n, r) {
															const s = {};
															for (const o of n) Im(e, t, o) && !r[Pm(o)] && (s[Pm(o)] = new Sg([], {}));
															return Object.assign({}, r, s);
														})(e, n, r, e.children)
													)
												),
												slicedSegments: n
										  }
										: { segmentGroup: e, slicedSegments: n };
								})(t, o, a, r);
							return 0 === i.length && s.hasChildren()
								? this.expandChildren(n, r, s).pipe(V((e) => new Sg(o, e)))
								: 0 === r.length && 0 === i.length
								? Xd(new Sg(o, {}))
								: this.expandSegment(n, s, r, i, ag, !0).pipe(V((e) => new Sg(o.concat(e.segments), e.children)));
						})
					);
				}
				getChildConfig(e, t, n) {
					return t.children
						? Xd(new dg(t.children, e))
						: t.loadChildren
						? void 0 !== t._loadedConfig
							? Xd(t._loadedConfig)
							: (function(e, t, n) {
									const r = t.canLoad;
									return r && 0 !== r.length
										? Z(r)
												.pipe(
													V((r) => {
														const s = e.get(r);
														let o;
														if (
															(function(e) {
																return e && wm(e.canLoad);
															})(s)
														)
															o = s.canLoad(t, n);
														else {
															if (!wm(s)) throw new Error('Invalid CanLoad guard');
															o = s(t, n);
														}
														return xg(o);
													})
												)
												.pipe(
													lf(),
													((s = (e) => !0 === e), (e) => e.lift(new Af(s, void 0, e)))
												)
										: Xd(!0);
									var s;
							  })(e.injector, t, n).pipe(
									G((n) =>
										n
											? this.configLoader.load(e.injector, t).pipe(V((e) => ((t._loadedConfig = e), e)))
											: (function(e) {
													return new v((t) => t.error(pg(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`)));
											  })(t)
									)
							  )
						: Xd(new dg([], e));
				}
				lineralizeSegments(e, t) {
					let n = [],
						r = t.root;
					for (;;) {
						if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Xd(n);
						if (r.numberOfChildren > 1 || !r.children[ag]) return Sm(e.redirectTo);
						r = r.children[ag];
					}
				}
				applyRedirectCommands(e, t, n) {
					return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n);
				}
				applyRedirectCreatreUrlTree(e, t, n, r) {
					const s = this.createSegmentGroup(e, t.root, n, r);
					return new kg(s, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment);
				}
				createQueryParams(e, t) {
					const n = {};
					return (
						vg(e, (e, r) => {
							if ('string' == typeof e && e.startsWith(':')) {
								const s = e.substring(1);
								n[r] = t[s];
							} else n[r] = e;
						}),
						n
					);
				}
				createSegmentGroup(e, t, n, r) {
					const s = this.createSegments(e, t.segments, n, r);
					let o = {};
					return (
						vg(t.children, (t, s) => {
							o[s] = this.createSegmentGroup(e, t, n, r);
						}),
						new Sg(s, o)
					);
				}
				createSegments(e, t, n, r) {
					return t.map((t) => (t.path.startsWith(':') ? this.findPosParam(e, t, r) : this.findOrReturn(t, n)));
				}
				findPosParam(e, t, n) {
					const r = n[t.path.substring(1)];
					if (!r) throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);
					return r;
				}
				findOrReturn(e, t) {
					let n = 0;
					for (const r of t) {
						if (r.path === e.path) return t.splice(n), r;
						n++;
					}
					return e;
				}
			}
			function Em(e, t, n) {
				if ('' === t.path)
					return 'full' === t.pathMatch && (e.hasChildren() || n.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				const r = (t.matcher || hg)(n, e, t);
				return r
					? { matched: !0, consumedSegments: r.consumed, lastChild: r.consumed.length, positionalParamSegments: r.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function Tm(e) {
				if (1 === e.numberOfChildren && e.children[ag]) {
					const t = e.children[ag];
					return new Sg(e.segments.concat(t.segments), t.children);
				}
				return e;
			}
			function Im(e, t, n) {
				return (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 !== n.redirectTo;
			}
			function Pm(e) {
				return e.outlet || ag;
			}
			class Mm {
				constructor(e) {
					(this.path = e), (this.route = this.path[this.path.length - 1]);
				}
			}
			class Am {
				constructor(e, t) {
					(this.component = e), (this.route = t);
				}
			}
			function Rm(e, t, n) {
				const r = e._root;
				return (function e(t, n, r, s, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
					const i = Wg(n);
					return (
						t.children.forEach((t) => {
							!(function(t, n, r, s, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
								const i = t.value,
									a = n ? n.value : null,
									l = r ? r.getContext(t.value.outlet) : null;
								if (a && i.routeConfig === a.routeConfig) {
									const c = (function(e, t, n) {
										if ('function' == typeof n) return n(e, t);
										switch (n) {
											case 'pathParamsChange':
												return !Eg(e.url, t.url);
											case 'pathParamsOrQueryParamsChange':
												return !Eg(e.url, t.url) || !yg(e.queryParams, t.queryParams);
											case 'always':
												return !0;
											case 'paramsOrQueryParamsChange':
												return !sm(e, t) || !yg(e.queryParams, t.queryParams);
											case 'paramsChange':
											default:
												return !sm(e, t);
										}
									})(a, i, i.routeConfig.runGuardsAndResolvers);
									if (
										(c ? o.canActivateChecks.push(new Mm(s)) : ((i.data = a.data), (i._resolvedData = a._resolvedData)),
										e(t, n, i.component ? (l ? l.children : null) : r, s, o),
										c)
									) {
										o.canDeactivateChecks.push(new Am((l && l.outlet && l.outlet.component) || null, a));
									}
								} else a && Dm(n, l, o), o.canActivateChecks.push(new Mm(s)), e(t, null, i.component ? (l ? l.children : null) : r, s, o);
							})(t, i[t.value.outlet], r, s.concat([t.value]), o),
								delete i[t.value.outlet];
						}),
						vg(i, (e, t) => Dm(e, r.getContext(t), o)),
						o
					);
				})(r, t ? t._root : null, n, [r.value]);
			}
			function jm(e, t, n) {
				const r = (function(e) {
					if (!e) return null;
					for (let t = e.parent; t; t = t.parent) {
						const e = t.routeConfig;
						if (e && e._loadedConfig) return e._loadedConfig;
					}
					return null;
				})(t);
				return (r ? r.module.injector : n).get(e);
			}
			function Dm(e, t, n) {
				const r = Wg(e),
					s = e.value;
				vg(r, (e, r) => {
					Dm(e, s.component ? (t ? t.children.getContext(r) : null) : t, n);
				}),
					n.canDeactivateChecks.push(new Am(s.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, s));
			}
			const Nm = Symbol('INITIAL_VALUE');
			function Um() {
				return jf((e) =>
					(function(...e) {
						let t = null,
							n = null;
						return I(e[e.length - 1]) && (n = e.pop()), 'function' == typeof e[e.length - 1] && (t = e.pop()), 1 === e.length && l(e[0]) && (e = e[0]), q(e, n).lift(new sf(t));
					})(
						...e.map((e) =>
							e.pipe(
								Tf(1),
								(function(...e) {
									return (t) => {
										let n = e[e.length - 1];
										I(n) ? e.pop() : (n = null);
										const r = e.length;
										return (function(...e) {
											return lf()(Xd(...e));
										})(1 !== r || n ? (r > 0 ? q(e, n) : Jd(n)) : Kd(e[0]), t);
									};
								})(Nm)
							)
						)
					).pipe(
						Uf((e, t) => {
							let n = !1;
							return t.reduce((e, r, s) => {
								if (e !== Nm) return e;
								if ((r === Nm && (n = !0), !n)) {
									if (!1 === r) return r;
									if (s === t.length - 1 || _m(r)) return r;
								}
								return e;
							}, e);
						}, Nm),
						cf((e) => e !== Nm),
						V((e) => (_m(e) ? e : !0 === e)),
						Tf(1)
					)
				);
			}
			function Lm(e, t) {
				return null !== e && t && t(new rg(e)), Xd(!0);
			}
			function Hm(e, t) {
				return null !== e && t && t(new tg(e)), Xd(!0);
			}
			function Fm(e, t, n) {
				const r = t.routeConfig ? t.routeConfig.canActivate : null;
				return r && 0 !== r.length
					? Xd(
							r.map((r) =>
								af(() => {
									const s = jm(r, t, n);
									let o;
									if (
										(function(e) {
											return e && wm(e.canActivate);
										})(s)
									)
										o = xg(s.canActivate(t, e));
									else {
										if (!wm(s)) throw new Error('Invalid CanActivate guard');
										o = xg(s(t, e));
									}
									return o.pipe(Mf());
								})
							)
					  ).pipe(Um())
					: Xd(!0);
			}
			function zm(e, t, n) {
				const r = t[t.length - 1],
					s = t
						.slice(0, t.length - 1)
						.reverse()
						.map((e) =>
							(function(e) {
								const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
								return t && 0 !== t.length ? { node: e, guards: t } : null;
							})(e)
						)
						.filter((e) => null !== e)
						.map((t) =>
							af(() =>
								Xd(
									t.guards.map((s) => {
										const o = jm(s, t.node, n);
										let i;
										if (
											(function(e) {
												return e && wm(e.canActivateChild);
											})(o)
										)
											i = xg(o.canActivateChild(r, e));
										else {
											if (!wm(o)) throw new Error('Invalid CanActivateChild guard');
											i = xg(o(r, e));
										}
										return i.pipe(Mf());
									})
								).pipe(Um())
							)
						);
				return Xd(s).pipe(Um());
			}
			class Vm {}
			class $m {
				constructor(e, t, n, r, s, o) {
					(this.rootComponentType = e), (this.config = t), (this.urlTree = n), (this.url = r), (this.paramsInheritanceStrategy = s), (this.relativeLinkResolution = o);
				}
				recognize() {
					try {
						const t = Zm(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
							n = this.processSegmentGroup(this.config, t, ag),
							r = new Xg(
								[],
								Object.freeze({}),
								Object.freeze(Object.assign({}, this.urlTree.queryParams)),
								this.urlTree.fragment,
								{},
								ag,
								this.rootComponentType,
								null,
								this.urlTree.root,
								-1,
								{}
							),
							s = new Gg(r, n),
							o = new em(this.url, s);
						return this.inheritParamsAndData(o._root), Xd(o);
					} catch (e) {
						return new v((t) => t.error(e));
					}
				}
				inheritParamsAndData(e) {
					const t = e.value,
						n = Kg(t, this.paramsInheritanceStrategy);
					(t.params = Object.freeze(n.params)), (t.data = Object.freeze(n.data)), e.children.forEach((e) => this.inheritParamsAndData(e));
				}
				processSegmentGroup(e, t, n) {
					return 0 === t.segments.length && t.hasChildren() ? this.processChildren(e, t) : this.processSegment(e, t, t.segments, n);
				}
				processChildren(e, t) {
					const n = Tg(t, (t, n) => this.processSegmentGroup(e, t, n));
					return (
						(function(e) {
							const t = {};
							n.forEach((e) => {
								const n = t[e.value.outlet];
								if (n) {
									const t = n.url.map((e) => e.toString()).join('/'),
										r = e.value.url.map((e) => e.toString()).join('/');
									throw new Error(`Two segments cannot have the same outlet name: '${t}' and '${r}'.`);
								}
								t[e.value.outlet] = e.value;
							});
						})(),
						n.sort((e, t) => (e.value.outlet === ag ? -1 : t.value.outlet === ag ? 1 : e.value.outlet.localeCompare(t.value.outlet))),
						n
					);
				}
				processSegment(e, t, n, r) {
					for (const o of e)
						try {
							return this.processSegmentAgainstRoute(o, t, n, r);
						} catch (s) {
							if (!(s instanceof Vm)) throw s;
						}
					if (this.noLeftoversInUrl(t, n, r)) return [];
					throw new Vm();
				}
				noLeftoversInUrl(e, t, n) {
					return 0 === t.length && !e.children[n];
				}
				processSegmentAgainstRoute(e, t, n, r) {
					if (e.redirectTo) throw new Vm();
					if ((e.outlet || ag) !== r) throw new Vm();
					let s,
						o = [],
						i = [];
					if ('**' === e.path) {
						const o = n.length > 0 ? _g(n).parameters : {};
						s = new Xg(n, o, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Qm(e), r, e.component, e, Bm(t), qm(t) + n.length, Ym(e));
					} else {
						const a = (function(e, t, n) {
							if ('' === t.path) {
								if ('full' === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new Vm();
								return { consumedSegments: [], lastChild: 0, parameters: {} };
							}
							const r = (t.matcher || hg)(n, e, t);
							if (!r) throw new Vm();
							const s = {};
							vg(r.posParams, (e, t) => {
								s[t] = e.path;
							});
							const o = r.consumed.length > 0 ? Object.assign({}, s, r.consumed[r.consumed.length - 1].parameters) : s;
							return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: o };
						})(t, e, n);
						(o = a.consumedSegments),
							(i = n.slice(a.lastChild)),
							(s = new Xg(o, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Qm(e), r, e.component, e, Bm(t), qm(t) + o.length, Ym(e)));
					}
					const a = (function(e) {
							return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : [];
						})(e),
						{ segmentGroup: l, slicedSegments: c } = Zm(t, o, i, a, this.relativeLinkResolution);
					if (0 === c.length && l.hasChildren()) {
						const e = this.processChildren(a, l);
						return [new Gg(s, e)];
					}
					if (0 === a.length && 0 === c.length) return [new Gg(s, [])];
					const u = this.processSegment(a, l, c, ag);
					return [new Gg(s, u)];
				}
			}
			function Bm(e) {
				let t = e;
				for (; t._sourceSegment; ) t = t._sourceSegment;
				return t;
			}
			function qm(e) {
				let t = e,
					n = t._segmentIndexShift ? t._segmentIndexShift : 0;
				for (; t._sourceSegment; ) n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0;
				return n - 1;
			}
			function Zm(e, t, n, r, s) {
				if (
					n.length > 0 &&
					(function(e, t, n) {
						return r.some((n) => Gm(e, t, n) && Wm(n) !== ag);
					})(e, n)
				) {
					const s = new Sg(
						t,
						(function(e, t, n, r) {
							const s = {};
							(s[ag] = r), (r._sourceSegment = e), (r._segmentIndexShift = t.length);
							for (const o of n)
								if ('' === o.path && Wm(o) !== ag) {
									const n = new Sg([], {});
									(n._sourceSegment = e), (n._segmentIndexShift = t.length), (s[Wm(o)] = n);
								}
							return s;
						})(e, t, r, new Sg(n, e.children))
					);
					return (s._sourceSegment = e), (s._segmentIndexShift = t.length), { segmentGroup: s, slicedSegments: [] };
				}
				if (
					0 === n.length &&
					(function(e, t, n) {
						return r.some((n) => Gm(e, t, n));
					})(e, n)
				) {
					const o = new Sg(
						e.segments,
						(function(e, t, n, r, s, o) {
							const i = {};
							for (const a of r)
								if (Gm(e, n, a) && !s[Wm(a)]) {
									const n = new Sg([], {});
									(n._sourceSegment = e), (n._segmentIndexShift = 'legacy' === o ? e.segments.length : t.length), (i[Wm(a)] = n);
								}
							return Object.assign({}, s, i);
						})(e, t, n, r, e.children, s)
					);
					return (o._sourceSegment = e), (o._segmentIndexShift = t.length), { segmentGroup: o, slicedSegments: n };
				}
				const o = new Sg(e.segments, e.children);
				return (o._sourceSegment = e), (o._segmentIndexShift = t.length), { segmentGroup: o, slicedSegments: n };
			}
			function Gm(e, t, n) {
				return (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 === n.redirectTo;
			}
			function Wm(e) {
				return e.outlet || ag;
			}
			function Qm(e) {
				return e.data || {};
			}
			function Ym(e) {
				return e.resolve || {};
			}
			function Jm(e, t, n, r) {
				const s = jm(e, t, r);
				return xg(s.resolve ? s.resolve(t, n) : s(t, n));
			}
			function Km(e) {
				return function(t) {
					return t.pipe(
						jf((t) => {
							const n = e(t);
							return n ? Z(n).pipe(V(() => t)) : Z([t]);
						})
					);
				};
			}
			class Xm {
				shouldDetach(e) {
					return !1;
				}
				store(e, t) {}
				shouldAttach(e) {
					return !1;
				}
				retrieve(e) {
					return null;
				}
				shouldReuseRoute(e, t) {
					return e.routeConfig === t.routeConfig;
				}
			}
			const eb = new Ie('ROUTES');
			class tb {
				constructor(e, t, n, r) {
					(this.loader = e), (this.compiler = t), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
				}
				load(e, t) {
					return (
						this.onLoadStartListener && this.onLoadStartListener(t),
						this.loadModuleFactory(t.loadChildren).pipe(
							V((n) => {
								this.onLoadEndListener && this.onLoadEndListener(t);
								const r = n.create(e);
								return new dg(wg(r.injector.get(eb)).map(bg), r);
							})
						)
					);
				}
				loadModuleFactory(e) {
					return 'string' == typeof e ? Z(this.loader.load(e)) : xg(e()).pipe(G((e) => (e instanceof Xl ? Xd(e) : Z(this.compiler.compileModuleAsync(e)))));
				}
			}
			class nb {
				shouldProcessUrl(e) {
					return !0;
				}
				extract(e) {
					return e;
				}
				merge(e, t) {
					return e;
				}
			}
			function rb(e) {
				throw e;
			}
			function sb(e, t, n) {
				return t.parse('/');
			}
			function ob(e, t) {
				return Xd(null);
			}
			class ib {
				constructor(e, t, n, r, s, o, i, a) {
					(this.rootComponentType = e),
						(this.urlSerializer = t),
						(this.rootContexts = n),
						(this.location = r),
						(this.config = a),
						(this.lastSuccessfulNavigation = null),
						(this.currentNavigation = null),
						(this.navigationId = 0),
						(this.isNgZoneEnabled = !1),
						(this.events = new E()),
						(this.errorHandler = rb),
						(this.malformedUriErrorHandler = sb),
						(this.navigated = !1),
						(this.lastSuccessfulId = -1),
						(this.hooks = { beforePreactivation: ob, afterPreactivation: ob }),
						(this.urlHandlingStrategy = new nb()),
						(this.routeReuseStrategy = new Xm()),
						(this.onSameUrlNavigation = 'ignore'),
						(this.paramsInheritanceStrategy = 'emptyOnly'),
						(this.urlUpdateStrategy = 'deferred'),
						(this.relativeLinkResolution = 'legacy'),
						(this.ngModule = s.get(Kl)),
						(this.console = s.get(Ou));
					const l = s.get(qu);
					(this.isNgZoneEnabled = l instanceof qu),
						this.resetConfig(a),
						(this.currentUrlTree = new kg(new Sg([], {}), {}, null)),
						(this.rawUrlTree = this.currentUrlTree),
						(this.browserUrlTree = this.currentUrlTree),
						(this.configLoader = new tb(o, i, (e) => this.triggerEvent(new Xf(e)), (e) => this.triggerEvent(new eg(e)))),
						(this.routerState = Yg(this.currentUrlTree, this.rootComponentType)),
						(this.transitions = new ef({
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
				setupNavigations(e) {
					const t = this.events;
					return e.pipe(
						cf((e) => 0 !== e.id),
						V((e) => Object.assign({}, e, { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl) })),
						jf((e) => {
							let n = !1,
								r = !1;
							return Xd(e).pipe(
								bf((e) => {
									this.currentNavigation = {
										id: e.id,
										initialUrl: e.currentRawUrl,
										extractedUrl: e.extractedUrl,
										trigger: e.source,
										extras: e.extras,
										previousNavigation: this.lastSuccessfulNavigation ? Object.assign({}, this.lastSuccessfulNavigation, { previousNavigation: null }) : null
									};
								}),
								jf((e) => {
									const n = !this.navigated || e.extractedUrl.toString() !== this.browserUrlTree.toString();
									if (('reload' === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl))
										return Xd(e).pipe(
											jf((e) => {
												const n = this.transitions.getValue();
												return t.next(new Bf(e.id, this.serializeUrl(e.extractedUrl), e.source, e.restoredState)), n !== this.transitions.getValue() ? Yd : [e];
											}),
											jf((e) => Promise.resolve(e)),
											(function(e, t, n, r) {
												return function(s) {
													return s.pipe(
														jf((s) =>
															(function(e, t, n, r, o) {
																return new Om(e, t, n, s.extractedUrl, o).apply();
															})(e, t, n, 0, r).pipe(V((e) => Object.assign({}, s, { urlAfterRedirects: e })))
														)
													);
												};
											})(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config),
											bf((e) => {
												this.currentNavigation = Object.assign({}, this.currentNavigation, { finalUrl: e.urlAfterRedirects });
											}),
											(function(e, t, n, r, s) {
												return function(o) {
													return o.pipe(
														G((o) =>
															(function(e, t, n, r, s = 'emptyOnly', o = 'legacy') {
																return new $m(e, t, n, r, s, o).recognize();
															})(e, t, o.urlAfterRedirects, n(o.urlAfterRedirects), r, s).pipe(V((e) => Object.assign({}, o, { targetSnapshot: e })))
														)
													);
												};
											})(this.rootComponentType, this.config, (e) => this.serializeUrl(e), this.paramsInheritanceStrategy, this.relativeLinkResolution),
											bf((e) => {
												'eager' === this.urlUpdateStrategy &&
													(e.extras.skipLocationChange || this.setBrowserUrl(e.urlAfterRedirects, !!e.extras.replaceUrl, e.id, e.extras.state),
													(this.browserUrlTree = e.urlAfterRedirects));
											}),
											bf((e) => {
												const n = new Wf(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
												t.next(n);
											})
										);
									if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
										const { id: n, extractedUrl: r, source: s, restoredState: o, extras: i } = e,
											a = new Bf(n, this.serializeUrl(r), s, o);
										t.next(a);
										const l = Yg(r, this.rootComponentType).snapshot;
										return Xd(Object.assign({}, e, { targetSnapshot: l, urlAfterRedirects: r, extras: Object.assign({}, i, { skipLocationChange: !1, replaceUrl: !1 }) }));
									}
									return (this.rawUrlTree = e.rawUrl), (this.browserUrlTree = e.urlAfterRedirects), e.resolve(null), Yd;
								}),
								Km((e) => {
									const {
										targetSnapshot: t,
										id: n,
										extractedUrl: r,
										rawUrl: s,
										extras: { skipLocationChange: o, replaceUrl: i }
									} = e;
									return this.hooks.beforePreactivation(t, { navigationId: n, appliedUrlTree: r, rawUrlTree: s, skipLocationChange: !!o, replaceUrl: !!i });
								}),
								bf((e) => {
									const t = new Qf(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
									this.triggerEvent(t);
								}),
								V((e) => Object.assign({}, e, { guards: Rm(e.targetSnapshot, e.currentSnapshot, this.rootContexts) })),
								(function(e, t) {
									return function(n) {
										return n.pipe(
											G((n) => {
												const {
													targetSnapshot: r,
													currentSnapshot: s,
													guards: { canActivateChecks: o, canDeactivateChecks: i }
												} = n;
												return 0 === i.length && 0 === o.length
													? Xd(Object.assign({}, n, { guardsResult: !0 }))
													: (function(e, t, n, r) {
															return Z(i).pipe(
																G((e) =>
																	(function(e, t, n, r, s) {
																		const o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
																		return o && 0 !== o.length
																			? Xd(
																					o.map((o) => {
																						const i = jm(o, t, s);
																						let a;
																						if (
																							(function(e) {
																								return e && wm(e.canDeactivate);
																							})(i)
																						)
																							a = xg(i.canDeactivate(e, t, n, r));
																						else {
																							if (!wm(i)) throw new Error('Invalid CanDeactivate guard');
																							a = xg(i(e, t, n, r));
																						}
																						return a.pipe(Mf());
																					})
																			  ).pipe(Um())
																			: Xd(!0);
																	})(e.component, e.route, n, t, r)
																),
																Mf((e) => !0 !== e, !0)
															);
													  })(0, r, s, e).pipe(
															G((n) =>
																n &&
																(function(e) {
																	return 'boolean' == typeof n;
																})()
																	? (function(e, t, n, r) {
																			return Z(o).pipe(
																				Ff((t) =>
																					Z([Hm(t.route.parent, r), Lm(t.route, r), zm(e, t.path, n), Fm(e, t.route, n)]).pipe(
																						lf(),
																						Mf((e) => !0 !== e, !0)
																					)
																				),
																				Mf((e) => !0 !== e, !0)
																			);
																	  })(r, 0, e, t)
																	: Xd(n)
															),
															V((e) => Object.assign({}, n, { guardsResult: e }))
													  );
											})
										);
									};
								})(this.ngModule.injector, (e) => this.triggerEvent(e)),
								bf((e) => {
									if (_m(e.guardsResult)) {
										const t = pg(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);
										throw ((t.url = e.guardsResult), t);
									}
								}),
								bf((e) => {
									const t = new Yf(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot, !!e.guardsResult);
									this.triggerEvent(t);
								}),
								cf((e) => {
									if (!e.guardsResult) {
										this.resetUrlToCurrentUrlTree();
										const n = new Zf(e.id, this.serializeUrl(e.extractedUrl), '');
										return t.next(n), e.resolve(!1), !1;
									}
									return !0;
								}),
								Km((e) => {
									if (e.guards.canActivateChecks.length)
										return Xd(e).pipe(
											bf((e) => {
												const t = new Jf(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
												this.triggerEvent(t);
											}),
											(function(e, t) {
												return function(n) {
													return n.pipe(
														G((n) => {
															const {
																targetSnapshot: r,
																guards: { canActivateChecks: s }
															} = n;
															return s.length
																? Z(s).pipe(
																		Ff((n) =>
																			(function(e, t, n, s) {
																				return (function(e, t, n, r) {
																					const s = Object.keys(e);
																					if (0 === s.length) return Xd({});
																					if (1 === s.length) {
																						const o = s[0];
																						return Jm(e[o], t, n, r).pipe(V((e) => ({ [o]: e })));
																					}
																					const o = {};
																					return Z(s)
																						.pipe(G((s) => Jm(e[s], t, n, r).pipe(V((e) => ((o[s] = e), e)))))
																						.pipe(
																							kf(),
																							V(() => o)
																						);
																				})(e._resolve, e, r, s).pipe(
																					V((t) => ((e._resolvedData = t), (e.data = Object.assign({}, e.data, Kg(e, n).resolve)), null))
																				);
																			})(n.route, 0, e, t)
																		),
																		(function(e, t) {
																			return arguments.length >= 2
																				? function(n) {
																						return w(Uf(e, t), ff(1), vf(t))(n);
																				  }
																				: function(t) {
																						return w(Uf((t, n, r) => e(t, n, r + 1)), ff(1))(t);
																				  };
																		})((e, t) => e),
																		V((e) => n)
																  )
																: Xd(n);
														})
													);
												};
											})(this.paramsInheritanceStrategy, this.ngModule.injector),
											bf((e) => {
												const t = new Kf(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(e.urlAfterRedirects), e.targetSnapshot);
												this.triggerEvent(t);
											})
										);
								}),
								Km((e) => {
									const {
										targetSnapshot: t,
										id: n,
										extractedUrl: r,
										rawUrl: s,
										extras: { skipLocationChange: o, replaceUrl: i }
									} = e;
									return this.hooks.afterPreactivation(t, { navigationId: n, appliedUrlTree: r, rawUrlTree: s, skipLocationChange: !!o, replaceUrl: !!i });
								}),
								V((e) => {
									const t = (function(e, t, n) {
										const r = (function e(t, n, r) {
											if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
												const s = r.value;
												s._futureSnapshot = n.value;
												const o = (function(t, n, r) {
													return n.children.map((n) => {
														for (const s of r.children) if (t.shouldReuseRoute(s.value.snapshot, n.value)) return e(t, n, s);
														return e(t, n);
													});
												})(t, n, r);
												return new Gg(s, o);
											}
											{
												const r = t.retrieve(n.value);
												if (r) {
													const e = r.route;
													return (
														(function e(t, n) {
															if (t.value.routeConfig !== n.value.routeConfig) throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
															if (t.children.length !== n.children.length) throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
															n.value._futureSnapshot = t.value;
															for (let r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r]);
														})(n, e),
														e
													);
												}
												{
													const r = new Jg(new ef((s = n.value).url), new ef(s.params), new ef(s.queryParams), new ef(s.fragment), new ef(s.data), s.outlet, s.component, s),
														o = n.children.map((n) => e(t, n));
													return new Gg(r, o);
												}
											}
											var s;
										})(e, t._root, n ? n._root : void 0);
										return new Qg(r, t);
									})(this.routeReuseStrategy, e.targetSnapshot, e.currentRouterState);
									return Object.assign({}, e, { targetRouterState: t });
								}),
								bf((e) => {
									(this.currentUrlTree = e.urlAfterRedirects),
										(this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e.rawUrl)),
										(this.routerState = e.targetRouterState),
										'deferred' === this.urlUpdateStrategy &&
											(e.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!e.extras.replaceUrl, e.id, e.extras.state),
											(this.browserUrlTree = e.urlAfterRedirects));
								}),
								mm(this.rootContexts, this.routeReuseStrategy, (e) => this.triggerEvent(e)),
								bf({
									next() {
										n = !0;
									},
									complete() {
										n = !0;
									}
								}),
								(function(e) {
									return (t) => t.lift(new zf(e));
								})(() => {
									if (!n && !r) {
										this.resetUrlToCurrentUrlTree();
										const n = new Zf(e.id, this.serializeUrl(e.extractedUrl), `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`);
										t.next(n), e.resolve(!1);
									}
									this.currentNavigation = null;
								}),
								Sf((n) => {
									if (
										((r = !0),
										(function(e) {
											return n && n[ug];
										})())
									) {
										const r = _m(n.url);
										r || ((this.navigated = !0), this.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl));
										const s = new Zf(e.id, this.serializeUrl(e.extractedUrl), n.message);
										t.next(s), e.resolve(!1), r && this.navigateByUrl(n.url);
									} else {
										this.resetStateAndUrl(e.currentRouterState, e.currentUrlTree, e.rawUrl);
										const r = new Gf(e.id, this.serializeUrl(e.extractedUrl), n);
										t.next(r);
										try {
											e.resolve(this.errorHandler(n));
										} catch (s) {
											e.reject(s);
										}
									}
									return Yd;
								})
							);
						})
					);
				}
				resetRootComponentType(e) {
					(this.rootComponentType = e), (this.routerState.root.component = this.rootComponentType);
				}
				getTransition() {
					const e = this.transitions.value;
					return (e.urlAfterRedirects = this.browserUrlTree), e;
				}
				setTransition(e) {
					this.transitions.next(Object.assign({}, this.getTransition(), e));
				}
				initialNavigation() {
					this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
				}
				setUpLocationChangeListener() {
					this.locationSubscription ||
						(this.locationSubscription = this.location.subscribe((e) => {
							let t = this.parseUrl(e.url);
							const n = 'popstate' === e.type ? 'popstate' : 'hashchange',
								r = e.state && e.state.navigationId ? e.state : null;
							setTimeout(() => {
								this.scheduleNavigation(t, n, r, { replaceUrl: !0 });
							}, 0);
						}));
				}
				get url() {
					return this.serializeUrl(this.currentUrlTree);
				}
				getCurrentNavigation() {
					return this.currentNavigation;
				}
				triggerEvent(e) {
					this.events.next(e);
				}
				resetConfig(e) {
					fg(e), (this.config = e.map(bg)), (this.navigated = !1), (this.lastSuccessfulId = -1);
				}
				ngOnDestroy() {
					this.dispose();
				}
				dispose() {
					this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
				}
				createUrlTree(e, t = {}) {
					const { relativeTo: n, queryParams: r, fragment: s, preserveQueryParams: o, queryParamsHandling: i, preserveFragment: a } = t;
					Cr() && o && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
					const l = n || this.routerState.root,
						c = a ? this.currentUrlTree.fragment : s;
					let u = null;
					if (i)
						switch (i) {
							case 'merge':
								u = Object.assign({}, this.currentUrlTree.queryParams, r);
								break;
							case 'preserve':
								u = this.currentUrlTree.queryParams;
								break;
							default:
								u = r || null;
						}
					else u = o ? this.currentUrlTree.queryParams : r || null;
					return (
						null !== u && (u = this.removeEmptyProps(u)),
						(function(e, t, n, r, s) {
							if (0 === n.length) return im(t.root, t.root, t, r, s);
							const o = (function(e) {
								if ('string' == typeof e[0] && 1 === e.length && '/' === e[0]) return new am(!0, 0, e);
								let t = 0,
									n = !1;
								const r = e.reduce((e, r, s) => {
									if ('object' == typeof r && null != r) {
										if (r.outlets) {
											const t = {};
											return (
												vg(r.outlets, (e, n) => {
													t[n] = 'string' == typeof e ? e.split('/') : e;
												}),
												[...e, { outlets: t }]
											);
										}
										if (r.segmentPath) return [...e, r.segmentPath];
									}
									return 'string' != typeof r
										? [...e, r]
										: 0 === s
										? (r.split('/').forEach((r, s) => {
												(0 == s && '.' === r) || (0 == s && '' === r ? (n = !0) : '..' === r ? t++ : '' != r && e.push(r));
										  }),
										  e)
										: [...e, r];
								}, []);
								return new am(n, t, r);
							})(n);
							if (o.toRoot()) return im(t.root, new Sg([], {}), t, r, s);
							const i = (function(e, n, r) {
									if (e.isAbsolute) return new lm(t.root, !0, 0);
									if (-1 === r.snapshot._lastPathIndex) return new lm(r.snapshot._urlSegment, !0, 0);
									const s = om(e.commands[0]) ? 0 : 1;
									return (function(t, n, o) {
										let i = r.snapshot._urlSegment,
											a = r.snapshot._lastPathIndex + s,
											l = e.numberOfDoubleDots;
										for (; l > a; ) {
											if (((l -= a), !(i = i.parent))) throw new Error("Invalid number of '../'");
											a = i.segments.length;
										}
										return new lm(i, !1, a - l);
									})();
								})(o, 0, e),
								a = i.processChildren ? pm(i.segmentGroup, i.index, o.commands) : um(i.segmentGroup, i.index, o.commands);
							return im(i.segmentGroup, a, t, r, s);
						})(l, this.currentUrlTree, e, u, c)
					);
				}
				navigateByUrl(e, t = { skipLocationChange: !1 }) {
					Cr() && this.isNgZoneEnabled && !qu.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
					const n = _m(e) ? e : this.parseUrl(e),
						r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
					return this.scheduleNavigation(r, 'imperative', null, t);
				}
				navigate(e, t = { skipLocationChange: !1 }) {
					return (
						(function(e) {
							for (let t = 0; t < e.length; t++) {
								const n = e[t];
								if (null == n) throw new Error(`The requested path contains ${n} segment at index ${t}`);
							}
						})(e),
						this.navigateByUrl(this.createUrlTree(e, t), t)
					);
				}
				serializeUrl(e) {
					return this.urlSerializer.serialize(e);
				}
				parseUrl(e) {
					let t;
					try {
						t = this.urlSerializer.parse(e);
					} catch (n) {
						t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
					}
					return t;
				}
				isActive(e, t) {
					if (_m(e)) return Cg(this.currentUrlTree, e, t);
					const n = this.parseUrl(e);
					return Cg(this.currentUrlTree, n, t);
				}
				removeEmptyProps(e) {
					return Object.keys(e).reduce((t, n) => {
						const r = e[n];
						return null != r && (t[n] = r), t;
					}, {});
				}
				processNavigations() {
					this.navigations.subscribe(
						(e) => {
							(this.navigated = !0),
								(this.lastSuccessfulId = e.id),
								this.events.next(new qf(e.id, this.serializeUrl(e.extractedUrl), this.serializeUrl(this.currentUrlTree))),
								(this.lastSuccessfulNavigation = this.currentNavigation),
								(this.currentNavigation = null),
								e.resolve(!0);
						},
						(e) => {
							this.console.warn('Unhandled Navigation Error: ');
						}
					);
				}
				scheduleNavigation(e, t, n, r) {
					const s = this.getTransition();
					if (s && 'imperative' !== t && 'imperative' === s.source && s.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
					if (s && 'hashchange' == t && 'popstate' === s.source && s.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
					if (s && 'popstate' == t && 'hashchange' === s.source && s.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
					let o = null,
						i = null;
					const a = new Promise((e, t) => {
							(o = e), (i = t);
						}),
						l = ++this.navigationId;
					return (
						this.setTransition({
							id: l,
							source: t,
							restoredState: n,
							currentUrlTree: this.currentUrlTree,
							currentRawUrl: this.rawUrlTree,
							rawUrl: e,
							extras: r,
							resolve: o,
							reject: i,
							promise: a,
							currentSnapshot: this.routerState.snapshot,
							currentRouterState: this.routerState
						}),
						a.catch((e) => Promise.reject(e))
					);
				}
				setBrowserUrl(e, t, n, r) {
					const s = this.urlSerializer.serialize(e);
					(r = r || {}),
						this.location.isCurrentPathEqualTo(s) || t
							? this.location.replaceState(s, '', Object.assign({}, r, { navigationId: n }))
							: this.location.go(s, '', Object.assign({}, r, { navigationId: n }));
				}
				resetStateAndUrl(e, t, n) {
					(this.routerState = e), (this.currentUrlTree = t), (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)), this.resetUrlToCurrentUrlTree();
				}
				resetUrlToCurrentUrlTree() {
					this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', { navigationId: this.lastSuccessfulId });
				}
			}
			class ab {
				constructor() {
					(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new lb()), (this.attachRef = null);
				}
			}
			class lb {
				constructor() {
					this.contexts = new Map();
				}
				onChildOutletCreated(e, t) {
					const n = this.getOrCreateContext(e);
					(n.outlet = t), this.contexts.set(e, n);
				}
				onChildOutletDestroyed(e) {
					const t = this.getContext(e);
					t && (t.outlet = null);
				}
				onOutletDeactivated() {
					const e = this.contexts;
					return (this.contexts = new Map()), e;
				}
				onOutletReAttached(e) {
					this.contexts = e;
				}
				getOrCreateContext(e) {
					let t = this.getContext(e);
					return t || ((t = new ab()), this.contexts.set(e, t)), t;
				}
				getContext(e) {
					return this.contexts.get(e) || null;
				}
			}
			const cb = (() => {
				class e {
					constructor(e, t, n, r, s) {
						(this.parentContexts = e),
							(this.location = t),
							(this.resolver = n),
							(this.changeDetector = s),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new Xc()),
							(this.deactivateEvents = new Xc()),
							(this.name = r || ag),
							e.onChildOutletCreated(this.name, this);
					}
					ngOnDestroy() {
						this.parentContexts.onChildOutletDestroyed(this.name);
					}
					ngOnInit() {
						if (!this.activated) {
							const e = this.parentContexts.getContext(this.name);
							e && e.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null));
						}
					}
					get isActivated() {
						return !!this.activated;
					}
					get component() {
						if (!this.activated) throw new Error('Outlet is not activated');
						return this.activated.instance;
					}
					get activatedRoute() {
						if (!this.activated) throw new Error('Outlet is not activated');
						return this._activatedRoute;
					}
					get activatedRouteData() {
						return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
					}
					detach() {
						if (!this.activated) throw new Error('Outlet is not activated');
						this.location.detach();
						const e = this.activated;
						return (this.activated = null), (this._activatedRoute = null), e;
					}
					attach(e, t) {
						(this.activated = e), (this._activatedRoute = t), this.location.insert(e.hostView);
					}
					deactivate() {
						if (this.activated) {
							const e = this.component;
							this.activated.destroy(), (this.activated = null), (this._activatedRoute = null), this.deactivateEvents.emit(e);
						}
					}
					activateWith(e, t) {
						if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
						this._activatedRoute = e;
						const n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
							r = this.parentContexts.getOrCreateContext(this.name).children,
							s = new ub(e, r, this.location.injector);
						(this.activated = this.location.createComponent(n, this.location.length, s)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
					}
				}
				return (
					(e.ngDirectiveDef = Rt({
						type: e,
						selectors: [['router-outlet']],
						factory: function(t) {
							return new (t || e)(
								al(lb),
								al(Ac),
								al(Jl),
								('name',
								(function(e, t) {
									const n = e.attrs;
									if (n) {
										const e = n.length;
										let t = 0;
										for (; t < e; ) {
											const r = n[t];
											if (gs(r)) break;
											if (0 === r) t += 2;
											else if ('number' == typeof r) for (t++, 0; t < e && 'string' == typeof n[t]; ) t++;
											else {
												if ('name' === r) return n[t + 1];
												t += 2;
											}
										}
									}
									return null;
								})(Kn())),
								al(Sc)
							);
						},
						outputs: { activateEvents: 'activate', deactivateEvents: 'deactivate' },
						exportAs: ['outlet']
					})),
					e
				);
			})();
			class ub {
				constructor(e, t, n) {
					(this.route = e), (this.childContexts = t), (this.parent = n);
				}
				get(e, t) {
					return e === Jg ? this.route : e === lb ? this.childContexts : this.parent.get(e, t);
				}
			}
			class pb {}
			class hb {
				preload(e, t) {
					return Xd(null);
				}
			}
			const db = (() => {
				class e {
					constructor(e, t, n, r, s) {
						(this.router = e), (this.injector = r), (this.preloadingStrategy = s), (this.loader = new tb(t, n, (t) => e.triggerEvent(new Xf(t)), (t) => e.triggerEvent(new eg(t))));
					}
					setUpPreloading() {
						this.subscription = this.router.events
							.pipe(
								cf((e) => e instanceof qf),
								Ff(() => this.preload())
							)
							.subscribe(() => {});
					}
					preload() {
						const e = this.injector.get(Kl);
						return this.processRoutes(e, this.router.config);
					}
					ngOnDestroy() {
						this.subscription.unsubscribe();
					}
					processRoutes(e, t) {
						const n = [];
						for (const r of t)
							if (r.loadChildren && !r.canLoad && r._loadedConfig) {
								const e = r._loadedConfig;
								n.push(this.processRoutes(e.module, e.routes));
							} else r.loadChildren && !r.canLoad ? n.push(this.preloadConfig(e, r)) : r.children && n.push(this.processRoutes(e, r.children));
						return Z(n).pipe(
							J(),
							V((e) => void 0)
						);
					}
					preloadConfig(e, t) {
						return this.preloadingStrategy.preload(t, () => this.loader.load(e.injector, t).pipe(G((e) => ((t._loadedConfig = e), this.processRoutes(e.module, e.routes)))));
					}
				}
				return (
					(e.ngInjectableDef = fe({
						token: e,
						factory: function(t) {
							return new (t || e)(Ve(ib), Ve(dp), Ve(Du), Ve(ct), Ve(pb));
						},
						providedIn: null
					})),
					e
				);
			})();
			class fb {
				constructor(e, t, n = {}) {
					(this.router = e),
						(this.viewportScroller = t),
						(this.options = n),
						(this.lastId = 0),
						(this.lastSource = 'imperative'),
						(this.restoredId = 0),
						(this.store = {}),
						(n.scrollPositionRestoration = n.scrollPositionRestoration || 'disabled'),
						(n.anchorScrolling = n.anchorScrolling || 'disabled');
				}
				init() {
					'disabled' !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration('manual'),
						(this.routerEventsSubscription = this.createScrollEvents()),
						(this.scrollEventsSubscription = this.consumeScrollEvents());
				}
				createScrollEvents() {
					return this.router.events.subscribe((e) => {
						e instanceof Bf
							? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
							  (this.lastSource = e.navigationTrigger),
							  (this.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
							: e instanceof qf && ((this.lastId = e.id), this.scheduleScrollEvent(e, this.router.parseUrl(e.urlAfterRedirects).fragment));
					});
				}
				consumeScrollEvents() {
					return this.router.events.subscribe((e) => {
						e instanceof og &&
							(e.position
								? 'top' === this.options.scrollPositionRestoration
									? this.viewportScroller.scrollToPosition([0, 0])
									: 'enabled' === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(e.position)
								: e.anchor && 'enabled' === this.options.anchorScrolling
								? this.viewportScroller.scrollToAnchor(e.anchor)
								: 'disabled' !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]));
					});
				}
				scheduleScrollEvent(e, t) {
					this.router.triggerEvent(new og(e, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, t));
				}
				ngOnDestroy() {
					this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
				}
			}
			const gb = new Ie('ROUTER_CONFIGURATION'),
				mb = new Ie('ROUTER_FORROOT_GUARD'),
				bb = [
					Tp,
					{ provide: Ig, useClass: Pg },
					{
						provide: ib,
						useFactory: function(e, t, n, r, s, o, i, a, l = {}, c, u) {
							const p = new ib(null, t, n, r, s, o, i, wg(a));
							if (
								(c && (p.urlHandlingStrategy = c),
								u && (p.routeReuseStrategy = u),
								l.errorHandler && (p.errorHandler = l.errorHandler),
								l.malformedUriErrorHandler && (p.malformedUriErrorHandler = l.malformedUriErrorHandler),
								l.enableTracing)
							) {
								const e = sh();
								p.events.subscribe((t) => {
									e.logGroup(`Router Event: ${t.constructor.name}`), e.log(t.toString()), e.log(t), e.logGroupEnd();
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
						deps: [pp, Ig, lb, Tp, ct, dp, Du, eb, gb, [class {}, new le()], [class {}, new le()]]
					},
					lb,
					{
						provide: Jg,
						useFactory: function(e) {
							return e.routerState.root;
						},
						deps: [ib]
					},
					{ provide: dp, useClass: wp },
					db,
					hb,
					class {
						preload(e, t) {
							return t().pipe(Sf(() => Xd(null)));
						}
					},
					{ provide: gb, useValue: { enableTracing: !1 } }
				];
			function yb() {
				return new ip('Router', ib);
			}
			const wb = (() => {
				class e {
					constructor(e, t) {}
					static forRoot(t, n) {
						return {
							ngModule: e,
							providers: [
								bb,
								Cb(t),
								{ provide: mb, useFactory: xb, deps: [[ib, new le(), new ue()]] },
								{ provide: gb, useValue: n || {} },
								{ provide: Op, useFactory: vb, deps: [kp, [new ae(Ep), new le()], gb] },
								{ provide: fb, useFactory: _b, deps: [ib, th, gb] },
								{ provide: pb, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : hb },
								{ provide: ip, multi: !0, useFactory: yb },
								[kb, { provide: yu, multi: !0, useFactory: Sb, deps: [kb] }, { provide: Eb, useFactory: Ob, deps: [kb] }, { provide: Su, multi: !0, useExisting: Eb }]
							]
						};
					}
					static forChild(t) {
						return { ngModule: e, providers: [Cb(t)] };
					}
				}
				return (e.ngModuleDef = Mt({ type: e })), e;
			})();
			function _b(e, t, n) {
				return n.scrollOffset && t.setOffset(n.scrollOffset), new fb(e, t, n);
			}
			function vb(e, t, n = {}) {
				return n.useHash ? new Pp(e, t) : new Mp(e, t);
			}
			function xb(e) {
				if (e) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function Cb(e) {
				return [{ provide: dt, multi: !0, useValue: e }, { provide: eb, multi: !0, useValue: e }];
			}
			wb.ngInjectorDef = ge({
				factory: function(e) {
					return new (e || wb)(Ve(mb, 8), Ve(ib, 8));
				}
			});
			const kb = (() => {
				class e {
					constructor(e) {
						(this.injector = e), (this.initNavigation = !1), (this.resultOfPreactivationDone = new E());
					}
					appInitializer() {
						return this.injector.get(Sp, Promise.resolve(null)).then(() => {
							let e = null;
							const t = new Promise((t) => (e = t)),
								n = this.injector.get(ib),
								r = this.injector.get(gb);
							if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
							else if ('disabled' === r.initialNavigation) n.setUpLocationChangeListener(), e(!0);
							else {
								if ('enabled' !== r.initialNavigation) throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
								(n.hooks.afterPreactivation = () => (this.initNavigation ? Xd(null) : ((this.initNavigation = !0), e(!0), this.resultOfPreactivationDone))), n.initialNavigation();
							}
							return t;
						});
					}
					bootstrapListener(e) {
						const t = this.injector.get(gb),
							n = this.injector.get(db),
							r = this.injector.get(fb),
							s = this.injector.get(ib),
							o = this.injector.get(pp);
						e === o.components[0] &&
							(this.isLegacyEnabled(t) ? s.initialNavigation() : this.isLegacyDisabled(t) && s.setUpLocationChangeListener(),
							n.setUpPreloading(),
							r.init(),
							s.resetRootComponentType(o.componentTypes[0]),
							this.resultOfPreactivationDone.next(null),
							this.resultOfPreactivationDone.complete());
					}
					isLegacyEnabled(e) {
						return 'legacy_enabled' === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation;
					}
					isLegacyDisabled(e) {
						return 'legacy_disabled' === e.initialNavigation || !1 === e.initialNavigation;
					}
				}
				return (
					(e.ngInjectableDef = fe({
						token: e,
						factory: function(t) {
							return new (t || e)(Ve(ct));
						},
						providedIn: null
					})),
					e
				);
			})();
			function Sb(e) {
				return e.appInitializer.bind(e);
			}
			function Ob(e) {
				return e.bootstrapListener.bind(e);
			}
			const Eb = new Ie('Router Initializer'),
				Tb = (() => {
					class e {
						constructor() {}
					}
					return (
						(e.ngComponentDef = Tt({
							type: e,
							selectors: [['docs-root']],
							factory: function(t) {
								return new (t || e)();
							},
							consts: 2,
							vars: 0,
							template: function(e, t) {
								1 & e && (gl(0, 'ez-root'), bl(1, 'router-outlet'), ml());
							},
							directives: [Gd, cb],
							styles: ['']
						})),
						e
					);
				})(),
				Ib = [1, 'pad-a-sm', 'border-a-gray', 'box-shadow-1', 'fixed-l', 'styleguide-menu'],
				Pb = ['href', '#', 1, 'hover', 'bg-hover-lt-gray', 'pad-a-xs', 3, 'ngClass', 'click'],
				Mb = ['class', 'pad-l-sm submenu', 4, 'ngIf'],
				Ab = ['tabindex', '-1', 1, 'pad-a-xl', 'styleguide'],
				Rb = ['content', ''],
				jb = [1, 'pad-t-xl', 3, 'innerHTML'],
				Db = ['class', 'mar-b-lg box-shadow-1 border-lr-gray section', 4, 'ngIf'],
				Nb = [1, 'pad-l-sm', 'submenu'];
			function Ub(e, t) {
				1 & e && (gl(0, 'ul', Nb), gl(1, 'li'), gl(2, 'a'), El(3, 'Close'), ml(), ml(), ml());
			}
			function Lb(e, t) {
				1 & e && (gl(0, 'ul', Nb), gl(1, 'li'), gl(2, 'a'), El(3, 'Empty'), ml(), ml(), ml());
			}
			function Hb(e, t) {
				1 & e &&
					(gl(0, 'ul', Nb),
					gl(1, 'li'),
					gl(2, 'a'),
					El(3, 'Group'),
					ml(),
					ml(),
					gl(4, 'li'),
					gl(5, 'a'),
					El(6, 'Rounded'),
					ml(),
					ml(),
					gl(7, 'li'),
					gl(8, 'a'),
					El(9, 'State'),
					ml(),
					ml(),
					ml());
			}
			function Fb(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function zb(e, t) {
				1 & e && (gl(0, 'ul', Nb), gl(1, 'li'), gl(2, 'a'), El(3, 'Accordion'), ml(), ml(), gl(4, 'li'), gl(5, 'a'), El(6, 'Expand'), ml(), ml(), ml());
			}
			function Vb(e, t) {
				1 & e &&
					(gl(0, 'ul', Nb),
					gl(1, 'li'),
					gl(2, 'a'),
					El(3, 'Background'),
					ml(),
					ml(),
					gl(4, 'li'),
					gl(5, 'a'),
					El(6, 'Border'),
					ml(),
					ml(),
					gl(7, 'li'),
					gl(8, 'a'),
					El(9, 'Hover'),
					ml(),
					ml(),
					gl(10, 'li'),
					gl(11, 'a'),
					El(12, 'Text'),
					ml(),
					ml(),
					ml());
			}
			function $b(e, t) {
				1 & e &&
					(gl(0, 'ul', Nb),
					gl(1, 'li'),
					gl(2, 'a'),
					El(3, 'Container Column'),
					ml(),
					ml(),
					gl(4, 'li'),
					gl(5, 'a'),
					El(6, 'Container Row'),
					ml(),
					ml(),
					gl(7, 'li'),
					gl(8, 'a'),
					El(9, 'Item Column'),
					ml(),
					ml(),
					gl(10, 'li'),
					gl(11, 'a'),
					El(12, 'Item Order'),
					ml(),
					ml(),
					gl(13, 'li'),
					gl(14, 'a'),
					El(15, 'Item Row'),
					ml(),
					ml(),
					gl(16, 'li'),
					gl(17, 'a'),
					El(18, 'Item Size'),
					ml(),
					ml(),
					gl(19, 'li'),
					gl(20, 'a'),
					El(21, 'Wrap Column'),
					ml(),
					ml(),
					gl(22, 'li'),
					gl(23, 'a'),
					El(24, 'Wrap Row'),
					ml(),
					ml(),
					ml());
			}
			function Bb(e, t) {
				1 & e &&
					(gl(0, 'ul', Nb),
					gl(1, 'li'),
					gl(2, 'a'),
					El(3, 'Checkbox'),
					ml(),
					ml(),
					gl(4, 'li'),
					gl(5, 'a'),
					El(6, 'Field'),
					ml(),
					ml(),
					gl(7, 'li'),
					gl(8, 'a'),
					El(9, 'Field Group'),
					ml(),
					ml(),
					gl(10, 'li'),
					gl(11, 'a'),
					El(12, 'Fieldset'),
					ml(),
					ml(),
					gl(13, 'li'),
					gl(14, 'a'),
					El(15, 'Form Group'),
					ml(),
					ml(),
					gl(16, 'li'),
					gl(17, 'a'),
					El(18, 'Label'),
					ml(),
					ml(),
					gl(19, 'li'),
					gl(20, 'a'),
					El(21, 'State'),
					ml(),
					ml(),
					ml());
			}
			function qb(e, t) {
				1 & e &&
					(gl(0, 'ul', Nb),
					gl(1, 'li'),
					gl(2, 'a'),
					El(3, 'Area'),
					ml(),
					ml(),
					gl(4, 'li'),
					gl(5, 'a'),
					El(6, 'Container'),
					ml(),
					ml(),
					gl(7, 'li'),
					gl(8, 'a'),
					El(9, 'Item'),
					ml(),
					ml(),
					ml());
			}
			function Zb(e, t) {
				1 & e && (gl(0, 'ul', Nb), gl(1, 'li'), gl(2, 'a'), El(3, 'Container'), ml(), ml(), gl(4, 'li'), gl(5, 'a'), El(6, 'Sticky Footer'), ml(), ml(), ml());
			}
			function Gb(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function Wb(e, t) {
				1 & e &&
					(gl(0, 'ul', Nb),
					gl(1, 'li'),
					gl(2, 'a'),
					El(3, 'Items'),
					ml(),
					ml(),
					gl(4, 'li'),
					gl(5, 'a'),
					El(6, 'Links'),
					ml(),
					ml(),
					gl(7, 'li'),
					gl(8, 'a'),
					El(9, 'Placement'),
					ml(),
					ml(),
					ml());
			}
			function Qb(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function Yb(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function Jb(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function Kb(e, t) {
				1 & e && (gl(0, 'ul', Nb), gl(1, 'li'), gl(2, 'a'), El(3, 'Margin'), ml(), ml(), gl(4, 'li'), gl(5, 'a'), El(6, 'Padding'), ml(), ml(), ml());
			}
			function Xb(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function ey(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function ty(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function ny(e, t) {
				1 & e &&
					(gl(0, 'ul', Nb),
					gl(1, 'li'),
					gl(2, 'a'),
					El(3, 'Border'),
					ml(),
					ml(),
					gl(4, 'li'),
					gl(5, 'a'),
					El(6, 'Hover'),
					ml(),
					ml(),
					gl(7, 'li'),
					gl(8, 'a'),
					El(9, 'Striped'),
					ml(),
					ml(),
					gl(10, 'li'),
					gl(11, 'a'),
					El(12, 'Table Cell'),
					ml(),
					ml(),
					gl(13, 'li'),
					gl(14, 'a'),
					El(15, 'Table Row'),
					ml(),
					ml(),
					ml());
			}
			function ry(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function sy(e, t) {
				1 & e && (gl(0, 'ul', Nb), gl(1, 'li'), gl(2, 'a'), El(3, 'Font'), ml(), ml(), gl(4, 'li'), gl(5, 'a'), El(6, 'Text'), ml(), ml(), ml());
			}
			function oy(e, t) {
				1 & e && bl(0, 'ul', Nb);
			}
			function iy(e, t) {
				1 & e && (gl(0, 'ul', Nb), gl(1, 'li'), gl(2, 'a'), El(3, 'Hide'), ml(), ml(), gl(4, 'li'), gl(5, 'a'), El(6, 'Show'), ml(), ml(), ml());
			}
			const ay = [1, 'mar-b-lg', 'box-shadow-1', 'border-lr-gray', 'section'],
				ly = [1, 'pad-a-sm', 'bg-lt-gray', 'border-tb-gray'],
				cy = [1, 'pad-a-sm', 3, 'ngClass'],
				uy = [1, 'alert-bad'],
				py = [1, 'alert-good'],
				hy = [1, 'alert-info'],
				dy = [1, 'alert-warn'],
				fy = [1, 'pad-a-sm', 'border-tb-gray'],
				gy = [1, 'hljs-tag'],
				my = [1, 'hljs-title'],
				by = [1, 'hljs-attribute'],
				yy = [1, 'hljs-value'],
				wy = function(e, t) {
					return { flexbox: e, box: t };
				};
			function _y(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'p'),
						El(3, 'Alerts are styled with an '),
						gl(4, 'code'),
						El(5, '.alert-[bad || good || info || warn]'),
						ml(),
						El(6, ' class.'),
						ml(),
						ml(),
						gl(7, 'section', cy),
						gl(8, 'aside', uy),
						El(9, 'bad'),
						ml(),
						gl(10, 'aside', py),
						El(11, 'good'),
						ml(),
						gl(12, 'aside', hy),
						El(13, 'info'),
						ml(),
						gl(14, 'aside', dy),
						El(15, 'warn'),
						ml(),
						gl(16, 'ez-alert', py),
						El(17, 'good'),
						ml(),
						ml(),
						gl(18, 'figure'),
						gl(19, 'pre', fy),
						gl(20, 'span', gy),
						El(21, '<'),
						gl(22, 'span', my),
						El(23, 'aside'),
						ml(),
						El(24, ' '),
						gl(25, 'span', by),
						El(26, 'class'),
						ml(),
						El(27, '='),
						gl(28, 'span', yy),
						El(29, '"alert-bad"'),
						ml(),
						El(30, '>'),
						ml(),
						El(31, 'bad'),
						gl(32, 'span', gy),
						El(33, '</'),
						gl(34, 'span', my),
						El(35, 'aside'),
						ml(),
						El(36, '>'),
						ml(),
						El(37, '\n'),
						gl(38, 'span', gy),
						El(39, '<'),
						gl(40, 'span', my),
						El(41, 'aside'),
						ml(),
						El(42, ' '),
						gl(43, 'span', by),
						El(44, 'class'),
						ml(),
						El(45, '='),
						gl(46, 'span', yy),
						El(47, '"alert-good"'),
						ml(),
						El(48, '>'),
						ml(),
						El(49, 'good'),
						gl(50, 'span', gy),
						El(51, '</'),
						gl(52, 'span', my),
						El(53, 'aside'),
						ml(),
						El(54, '>'),
						ml(),
						El(55, '\n'),
						gl(56, 'span', gy),
						El(57, '<'),
						gl(58, 'span', my),
						El(59, 'aside'),
						ml(),
						El(60, ' '),
						gl(61, 'span', by),
						El(62, 'class'),
						ml(),
						El(63, '='),
						gl(64, 'span', yy),
						El(65, '"alert-info"'),
						ml(),
						El(66, '>'),
						ml(),
						El(67, 'info'),
						gl(68, 'span', gy),
						El(69, '</'),
						gl(70, 'span', my),
						El(71, 'aside'),
						ml(),
						El(72, '>'),
						ml(),
						El(73, '\n'),
						gl(74, 'span', gy),
						El(75, '<'),
						gl(76, 'span', my),
						El(77, 'aside'),
						ml(),
						El(78, ' '),
						gl(79, 'span', by),
						El(80, 'class'),
						ml(),
						El(81, '='),
						gl(82, 'span', yy),
						El(83, '"alert-warn"'),
						ml(),
						El(84, '>'),
						ml(),
						El(85, 'warn'),
						gl(86, 'span', gy),
						El(87, '</'),
						gl(88, 'span', my),
						El(89, 'aside'),
						ml(),
						El(90, '>'),
						ml(),
						El(91, '\n'),
						gl(92, 'span', gy),
						El(93, '<'),
						gl(94, 'span', my),
						El(95, 'ez-alert'),
						ml(),
						El(96, ' '),
						gl(97, 'span', by),
						El(98, 'class'),
						ml(),
						El(99, '='),
						gl(100, 'span', yy),
						El(101, '"alert-good"'),
						ml(),
						El(102, '>'),
						ml(),
						El(103, 'good'),
						gl(104, 'span', gy),
						El(105, '</'),
						gl(106, 'span', my),
						El(107, 'ez-alert'),
						ml(),
						El(108, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(7), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const vy = [1, 'alert-good', 'close'],
				xy = [1, 'close', 'alert-good'];
			function Cy(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Close'),
						ml(),
						gl(4, 'p'),
						El(5, 'Alerts are closed by adding a '),
						gl(6, 'code'),
						El(7, '.close'),
						ml(),
						El(8, ' class.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'aside', vy),
						El(11, 'close'),
						ml(),
						gl(12, 'ez-alert', xy),
						El(13, 'close'),
						ml(),
						ml(),
						gl(14, 'figure'),
						gl(15, 'pre', fy),
						gl(16, 'span', gy),
						El(17, '<'),
						gl(18, 'span', my),
						El(19, 'aside'),
						ml(),
						El(20, ' '),
						gl(21, 'span', by),
						El(22, 'class'),
						ml(),
						El(23, '='),
						gl(24, 'span', yy),
						El(25, '"alert-good close"'),
						ml(),
						El(26, '>'),
						ml(),
						El(27, 'close'),
						gl(28, 'span', gy),
						El(29, '</'),
						gl(30, 'span', my),
						El(31, 'aside'),
						ml(),
						El(32, '>'),
						ml(),
						El(33, '\n'),
						gl(34, 'span', gy),
						El(35, '<'),
						gl(36, 'span', my),
						El(37, 'ez-alert'),
						ml(),
						El(38, ' '),
						gl(39, 'span', by),
						El(40, 'class'),
						ml(),
						El(41, '='),
						gl(42, 'span', yy),
						El(43, '"close alert-good"'),
						ml(),
						El(44, '>'),
						ml(),
						El(45, 'close'),
						gl(46, 'span', gy),
						El(47, '</'),
						gl(48, 'span', my),
						El(49, 'ez-alert'),
						ml(),
						El(50, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const ky = [1, 'badge-sm', 'bg-dk-blue', 'text-white'],
				Sy = [1, 'badge-md', 'bg-dk-blue', 'text-white'],
				Oy = [1, 'badge-lg', 'bg-dk-blue', 'text-white'];
			function Ey(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'p'),
						El(3, 'Badges are styled with a '),
						gl(4, 'code'),
						El(5, '.badge-[sm || md || lg]'),
						ml(),
						El(6, ' class.'),
						ml(),
						ml(),
						gl(7, 'section', cy),
						gl(8, 'p', ky),
						El(9, '1'),
						ml(),
						gl(10, 'p', Sy),
						El(11, '20'),
						ml(),
						gl(12, 'p', Oy),
						El(13, '300'),
						ml(),
						gl(14, 'ez-badge', ky),
						El(15, '10'),
						ml(),
						ml(),
						gl(16, 'figure'),
						gl(17, 'pre', fy),
						gl(18, 'span', gy),
						El(19, '<'),
						gl(20, 'span', my),
						El(21, 'p'),
						ml(),
						El(22, ' '),
						gl(23, 'span', by),
						El(24, 'class'),
						ml(),
						El(25, '='),
						gl(26, 'span', yy),
						El(27, '"badge-sm bg-dk-blue text-white"'),
						ml(),
						El(28, '>'),
						ml(),
						El(29, '1'),
						gl(30, 'span', gy),
						El(31, '</'),
						gl(32, 'span', my),
						El(33, 'p'),
						ml(),
						El(34, '>'),
						ml(),
						El(35, '\n'),
						gl(36, 'span', gy),
						El(37, '<'),
						gl(38, 'span', my),
						El(39, 'p'),
						ml(),
						El(40, ' '),
						gl(41, 'span', by),
						El(42, 'class'),
						ml(),
						El(43, '='),
						gl(44, 'span', yy),
						El(45, '"badge-md bg-dk-blue text-white"'),
						ml(),
						El(46, '>'),
						ml(),
						El(47, '20'),
						gl(48, 'span', gy),
						El(49, '</'),
						gl(50, 'span', my),
						El(51, 'p'),
						ml(),
						El(52, '>'),
						ml(),
						El(53, '\n'),
						gl(54, 'span', gy),
						El(55, '<'),
						gl(56, 'span', my),
						El(57, 'p'),
						ml(),
						El(58, ' '),
						gl(59, 'span', by),
						El(60, 'class'),
						ml(),
						El(61, '='),
						gl(62, 'span', yy),
						El(63, '"badge-lg bg-dk-blue text-white"'),
						ml(),
						El(64, '>'),
						ml(),
						El(65, '300'),
						gl(66, 'span', gy),
						El(67, '</'),
						gl(68, 'span', my),
						El(69, 'p'),
						ml(),
						El(70, '>'),
						ml(),
						El(71, '\n'),
						gl(72, 'span', gy),
						El(73, '<'),
						gl(74, 'span', my),
						El(75, 'ez-badge'),
						ml(),
						El(76, ' '),
						gl(77, 'span', by),
						El(78, 'class'),
						ml(),
						El(79, '='),
						gl(80, 'span', yy),
						El(81, '"badge-sm bg-dk-blue text-white"'),
						ml(),
						El(82, '>'),
						ml(),
						El(83, '10'),
						gl(84, 'span', gy),
						El(85, '</'),
						gl(86, 'span', my),
						El(87, 'ez-badge'),
						ml(),
						El(88, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(7), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			function Ty(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Empty'),
						ml(),
						gl(4, 'p'),
						El(5, 'If a badge does not contain text, it is not rendered.'),
						ml(),
						ml(),
						gl(6, 'section', cy),
						gl(7, 'p', ky),
						El(8, '1'),
						ml(),
						bl(9, 'p', Sy),
						ml(),
						gl(10, 'figure'),
						gl(11, 'pre', fy),
						gl(12, 'span', gy),
						El(13, '<'),
						gl(14, 'span', my),
						El(15, 'p'),
						ml(),
						El(16, ' '),
						gl(17, 'span', by),
						El(18, 'class'),
						ml(),
						El(19, '='),
						gl(20, 'span', yy),
						El(21, '"badge-sm bg-dk-blue text-white"'),
						ml(),
						El(22, '>'),
						ml(),
						El(23, '1'),
						gl(24, 'span', gy),
						El(25, '</'),
						gl(26, 'span', my),
						El(27, 'p'),
						ml(),
						El(28, '>'),
						ml(),
						El(29, '\n'),
						gl(30, 'span', gy),
						El(31, '<'),
						gl(32, 'span', my),
						El(33, 'p'),
						ml(),
						El(34, ' '),
						gl(35, 'span', by),
						El(36, 'class'),
						ml(),
						El(37, '='),
						gl(38, 'span', yy),
						El(39, '"badge-md bg-dk-blue text-white"'),
						ml(),
						El(40, '>'),
						ml(),
						gl(41, 'span', gy),
						El(42, '</'),
						gl(43, 'span', my),
						El(44, 'p'),
						ml(),
						El(45, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(6), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Iy = ['type', 'button', 1, 'btn-xs', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Py = ['type', 'button', 1, 'btn-sm', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				My = ['type', 'button', 1, 'btn-md', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Ay = ['type', 'button', 1, 'btn-lg', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Ry = ['type', 'button', 1, 'btn-xl', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				jy = ['type', 'button', 1, 'btn-full', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Dy = [1, 'hljs-class'],
				Ny = [1, 'hljs-keyword'],
				Uy = [1, 'hljs-string'];
			function Ly(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'p'),
						El(3, 'Buttons are styled with a '),
						gl(4, 'code'),
						El(5, '.btn-[xs || sm || md || lg || xl || full]'),
						ml(),
						El(6, ' class.'),
						ml(),
						ml(),
						gl(7, 'section', cy),
						gl(8, 'button', Iy),
						El(9, 'xs'),
						ml(),
						gl(10, 'button', Py),
						El(11, 'sm'),
						ml(),
						gl(12, 'button', My),
						El(13, 'md'),
						ml(),
						gl(14, 'button', Ay),
						El(15, 'lg'),
						ml(),
						gl(16, 'button', Ry),
						El(17, 'xl'),
						ml(),
						gl(18, 'button', jy),
						El(19, 'full'),
						ml(),
						ml(),
						gl(20, 'figure'),
						gl(21, 'pre', fy),
						El(22, '<button '),
						gl(23, 'span', Dy),
						gl(24, 'span', Ny),
						El(25, 'class'),
						ml(),
						El(26, '='),
						ml(),
						gl(27, 'span', Uy),
						El(28, '"btn-xs bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(29, ' '),
						gl(30, 'span', Dy),
						gl(31, 'span', Ny),
						El(32, 'type'),
						ml(),
						El(33, '='),
						ml(),
						gl(34, 'span', Uy),
						El(35, '"button"'),
						ml(),
						El(36, '>xs</button>\n<button '),
						gl(37, 'span', Dy),
						gl(38, 'span', Ny),
						El(39, 'class'),
						ml(),
						El(40, '='),
						ml(),
						gl(41, 'span', Uy),
						El(42, '"btn-sm bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(43, ' '),
						gl(44, 'span', Dy),
						gl(45, 'span', Ny),
						El(46, 'type'),
						ml(),
						El(47, '='),
						ml(),
						gl(48, 'span', Uy),
						El(49, '"button"'),
						ml(),
						El(50, '>sm</button>\n<button '),
						gl(51, 'span', Dy),
						gl(52, 'span', Ny),
						El(53, 'class'),
						ml(),
						El(54, '='),
						ml(),
						gl(55, 'span', Uy),
						El(56, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(57, ' '),
						gl(58, 'span', Dy),
						gl(59, 'span', Ny),
						El(60, 'type'),
						ml(),
						El(61, '='),
						ml(),
						gl(62, 'span', Uy),
						El(63, '"button"'),
						ml(),
						El(64, '>md</button>\n<button '),
						gl(65, 'span', Dy),
						gl(66, 'span', Ny),
						El(67, 'class'),
						ml(),
						El(68, '='),
						ml(),
						gl(69, 'span', Uy),
						El(70, '"btn-lg bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(71, ' '),
						gl(72, 'span', Dy),
						gl(73, 'span', Ny),
						El(74, 'type'),
						ml(),
						El(75, '='),
						ml(),
						gl(76, 'span', Uy),
						El(77, '"button"'),
						ml(),
						El(78, '>lg</button>\n<button '),
						gl(79, 'span', Dy),
						gl(80, 'span', Ny),
						El(81, 'class'),
						ml(),
						El(82, '='),
						ml(),
						gl(83, 'span', Uy),
						El(84, '"btn-xl bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(85, ' '),
						gl(86, 'span', Dy),
						gl(87, 'span', Ny),
						El(88, 'type'),
						ml(),
						El(89, '='),
						ml(),
						gl(90, 'span', Uy),
						El(91, '"button"'),
						ml(),
						El(92, '>xl</button>\n<button '),
						gl(93, 'span', Dy),
						gl(94, 'span', Ny),
						El(95, 'class'),
						ml(),
						El(96, '='),
						ml(),
						gl(97, 'span', Uy),
						El(98, '"btn-full bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(99, ' '),
						gl(100, 'span', Dy),
						gl(101, 'span', Ny),
						El(102, 'type'),
						ml(),
						El(103, '='),
						ml(),
						gl(104, 'span', Uy),
						El(105, '"button"'),
						ml(),
						El(106, '>full</button>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(7), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Hy = ['role', 'group', 'aria-label', 'button row group', 1, 'btn-group-row'],
				Fy = ['role', 'group', 'aria-label', 'button column group', 1, 'btn-group-col'],
				zy = ['role', 'group', 'aria-label', 'button full row group', 1, 'btn-group-full'];
			function Vy(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Group'),
						ml(),
						gl(4, 'p'),
						El(5, 'Buttons are grouped with a '),
						gl(6, 'code'),
						El(7, '.btn-group-[row || col || full]'),
						ml(),
						El(8, ' class on a parent container.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'section', Hy),
						gl(11, 'button', My),
						El(12, 'md'),
						ml(),
						gl(13, 'button', My),
						El(14, 'md'),
						ml(),
						gl(15, 'button', My),
						El(16, 'md'),
						ml(),
						gl(17, 'button', My),
						El(18, 'md'),
						ml(),
						gl(19, 'button', My),
						El(20, 'md'),
						ml(),
						ml(),
						gl(21, 'section', Fy),
						gl(22, 'button', My),
						El(23, 'md'),
						ml(),
						gl(24, 'button', My),
						El(25, 'md'),
						ml(),
						gl(26, 'button', My),
						El(27, 'md'),
						ml(),
						gl(28, 'button', My),
						El(29, 'md'),
						ml(),
						gl(30, 'button', My),
						El(31, 'md'),
						ml(),
						ml(),
						gl(32, 'section', zy),
						gl(33, 'button', My),
						El(34, 'md'),
						ml(),
						gl(35, 'button', My),
						El(36, 'md'),
						ml(),
						gl(37, 'button', My),
						El(38, 'md'),
						ml(),
						gl(39, 'button', My),
						El(40, 'md'),
						ml(),
						gl(41, 'button', My),
						El(42, 'md'),
						ml(),
						ml(),
						ml(),
						gl(43, 'figure'),
						gl(44, 'pre', fy),
						El(45, '<section '),
						gl(46, 'span', Dy),
						gl(47, 'span', Ny),
						El(48, 'class'),
						ml(),
						El(49, '='),
						ml(),
						gl(50, 'span', Uy),
						El(51, '"btn-group-row"'),
						ml(),
						El(52, ' role='),
						gl(53, 'span', Uy),
						El(54, '"group"'),
						ml(),
						El(55, ' aria-label='),
						gl(56, 'span', Uy),
						El(57, '"button row group"'),
						ml(),
						El(58, '>\n    <button '),
						gl(59, 'span', Dy),
						gl(60, 'span', Ny),
						El(61, 'class'),
						ml(),
						El(62, '='),
						ml(),
						gl(63, 'span', Uy),
						El(64, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(65, ' '),
						gl(66, 'span', Dy),
						gl(67, 'span', Ny),
						El(68, 'type'),
						ml(),
						El(69, '='),
						ml(),
						gl(70, 'span', Uy),
						El(71, '"button"'),
						ml(),
						El(72, '>md</button>\n    <button '),
						gl(73, 'span', Dy),
						gl(74, 'span', Ny),
						El(75, 'class'),
						ml(),
						El(76, '='),
						ml(),
						gl(77, 'span', Uy),
						El(78, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(79, ' '),
						gl(80, 'span', Dy),
						gl(81, 'span', Ny),
						El(82, 'type'),
						ml(),
						El(83, '='),
						ml(),
						gl(84, 'span', Uy),
						El(85, '"button"'),
						ml(),
						El(86, '>md</button>\n    <button '),
						gl(87, 'span', Dy),
						gl(88, 'span', Ny),
						El(89, 'class'),
						ml(),
						El(90, '='),
						ml(),
						gl(91, 'span', Uy),
						El(92, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(93, ' '),
						gl(94, 'span', Dy),
						gl(95, 'span', Ny),
						El(96, 'type'),
						ml(),
						El(97, '='),
						ml(),
						gl(98, 'span', Uy),
						El(99, '"button"'),
						ml(),
						El(100, '>md</button>\n    <button '),
						gl(101, 'span', Dy),
						gl(102, 'span', Ny),
						El(103, 'class'),
						ml(),
						El(104, '='),
						ml(),
						gl(105, 'span', Uy),
						El(106, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(107, ' '),
						gl(108, 'span', Dy),
						gl(109, 'span', Ny),
						El(110, 'type'),
						ml(),
						El(111, '='),
						ml(),
						gl(112, 'span', Uy),
						El(113, '"button"'),
						ml(),
						El(114, '>md</button>\n    <button '),
						gl(115, 'span', Dy),
						gl(116, 'span', Ny),
						El(117, 'class'),
						ml(),
						El(118, '='),
						ml(),
						gl(119, 'span', Uy),
						El(120, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(121, ' '),
						gl(122, 'span', Dy),
						gl(123, 'span', Ny),
						El(124, 'type'),
						ml(),
						El(125, '='),
						ml(),
						gl(126, 'span', Uy),
						El(127, '"button"'),
						ml(),
						El(128, '>md</button>\n</section>\n<section '),
						gl(129, 'span', Dy),
						gl(130, 'span', Ny),
						El(131, 'class'),
						ml(),
						El(132, '='),
						ml(),
						gl(133, 'span', Uy),
						El(134, '"btn-group-col"'),
						ml(),
						El(135, ' role='),
						gl(136, 'span', Uy),
						El(137, '"group"'),
						ml(),
						El(138, ' aria-label='),
						gl(139, 'span', Uy),
						El(140, '"button column group"'),
						ml(),
						El(141, '>\n    <button '),
						gl(142, 'span', Dy),
						gl(143, 'span', Ny),
						El(144, 'class'),
						ml(),
						El(145, '='),
						ml(),
						gl(146, 'span', Uy),
						El(147, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(148, ' '),
						gl(149, 'span', Dy),
						gl(150, 'span', Ny),
						El(151, 'type'),
						ml(),
						El(152, '='),
						ml(),
						gl(153, 'span', Uy),
						El(154, '"button"'),
						ml(),
						El(155, '>md</button>\n    <button '),
						gl(156, 'span', Dy),
						gl(157, 'span', Ny),
						El(158, 'class'),
						ml(),
						El(159, '='),
						ml(),
						gl(160, 'span', Uy),
						El(161, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(162, ' '),
						gl(163, 'span', Dy),
						gl(164, 'span', Ny),
						El(165, 'type'),
						ml(),
						El(166, '='),
						ml(),
						gl(167, 'span', Uy),
						El(168, '"button"'),
						ml(),
						El(169, '>md</button>\n    <button '),
						gl(170, 'span', Dy),
						gl(171, 'span', Ny),
						El(172, 'class'),
						ml(),
						El(173, '='),
						ml(),
						gl(174, 'span', Uy),
						El(175, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(176, ' '),
						gl(177, 'span', Dy),
						gl(178, 'span', Ny),
						El(179, 'type'),
						ml(),
						El(180, '='),
						ml(),
						gl(181, 'span', Uy),
						El(182, '"button"'),
						ml(),
						El(183, '>md</button>\n    <button '),
						gl(184, 'span', Dy),
						gl(185, 'span', Ny),
						El(186, 'class'),
						ml(),
						El(187, '='),
						ml(),
						gl(188, 'span', Uy),
						El(189, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(190, ' '),
						gl(191, 'span', Dy),
						gl(192, 'span', Ny),
						El(193, 'type'),
						ml(),
						El(194, '='),
						ml(),
						gl(195, 'span', Uy),
						El(196, '"button"'),
						ml(),
						El(197, '>md</button>\n    <button '),
						gl(198, 'span', Dy),
						gl(199, 'span', Ny),
						El(200, 'class'),
						ml(),
						El(201, '='),
						ml(),
						gl(202, 'span', Uy),
						El(203, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(204, ' '),
						gl(205, 'span', Dy),
						gl(206, 'span', Ny),
						El(207, 'type'),
						ml(),
						El(208, '='),
						ml(),
						gl(209, 'span', Uy),
						El(210, '"button"'),
						ml(),
						El(211, '>md</button>\n</section>\n<section '),
						gl(212, 'span', Dy),
						gl(213, 'span', Ny),
						El(214, 'class'),
						ml(),
						El(215, '='),
						ml(),
						gl(216, 'span', Uy),
						El(217, '"btn-group-full"'),
						ml(),
						El(218, ' role='),
						gl(219, 'span', Uy),
						El(220, '"group"'),
						ml(),
						El(221, ' aria-label='),
						gl(222, 'span', Uy),
						El(223, '"button full row group"'),
						ml(),
						El(224, '>\n    <button '),
						gl(225, 'span', Dy),
						gl(226, 'span', Ny),
						El(227, 'class'),
						ml(),
						El(228, '='),
						ml(),
						gl(229, 'span', Uy),
						El(230, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(231, ' '),
						gl(232, 'span', Dy),
						gl(233, 'span', Ny),
						El(234, 'type'),
						ml(),
						El(235, '='),
						ml(),
						gl(236, 'span', Uy),
						El(237, '"button"'),
						ml(),
						El(238, '>md</button>\n    <button '),
						gl(239, 'span', Dy),
						gl(240, 'span', Ny),
						El(241, 'class'),
						ml(),
						El(242, '='),
						ml(),
						gl(243, 'span', Uy),
						El(244, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(245, ' '),
						gl(246, 'span', Dy),
						gl(247, 'span', Ny),
						El(248, 'type'),
						ml(),
						El(249, '='),
						ml(),
						gl(250, 'span', Uy),
						El(251, '"button"'),
						ml(),
						El(252, '>md</button>\n    <button '),
						gl(253, 'span', Dy),
						gl(254, 'span', Ny),
						El(255, 'class'),
						ml(),
						El(256, '='),
						ml(),
						gl(257, 'span', Uy),
						El(258, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(259, ' '),
						gl(260, 'span', Dy),
						gl(261, 'span', Ny),
						El(262, 'type'),
						ml(),
						El(263, '='),
						ml(),
						gl(264, 'span', Uy),
						El(265, '"button"'),
						ml(),
						El(266, '>md</button>\n    <button '),
						gl(267, 'span', Dy),
						gl(268, 'span', Ny),
						El(269, 'class'),
						ml(),
						El(270, '='),
						ml(),
						gl(271, 'span', Uy),
						El(272, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(273, ' '),
						gl(274, 'span', Dy),
						gl(275, 'span', Ny),
						El(276, 'type'),
						ml(),
						El(277, '='),
						ml(),
						gl(278, 'span', Uy),
						El(279, '"button"'),
						ml(),
						El(280, '>md</button>\n    <button '),
						gl(281, 'span', Dy),
						gl(282, 'span', Ny),
						El(283, 'class'),
						ml(),
						El(284, '='),
						ml(),
						gl(285, 'span', Uy),
						El(286, '"btn-md bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(287, ' '),
						gl(288, 'span', Dy),
						gl(289, 'span', Ny),
						El(290, 'type'),
						ml(),
						El(291, '='),
						ml(),
						gl(292, 'span', Uy),
						El(293, '"button"'),
						ml(),
						El(294, '>md</button>\n</section>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const $y = ['type', 'button', 1, 'btn-xs', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				By = ['type', 'button', 1, 'btn-sm', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				qy = ['type', 'button', 1, 'btn-md', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Zy = ['type', 'button', 1, 'btn-lg', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Gy = ['type', 'button', 1, 'btn-xl', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'],
				Wy = ['type', 'button', 1, 'btn-full', 'rounded', 'bg-dk-blue', 'text-white', 'bg-hover-blue'];
			function Qy(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Rounded'),
						ml(),
						gl(4, 'p'),
						El(5, 'Buttons are rounded by adding a '),
						gl(6, 'code'),
						El(7, '.rounded'),
						ml(),
						El(8, ' class.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'button', $y),
						El(11, 'xs'),
						ml(),
						gl(12, 'button', By),
						El(13, 'sm'),
						ml(),
						gl(14, 'button', qy),
						El(15, 'md'),
						ml(),
						gl(16, 'button', Zy),
						El(17, 'lg'),
						ml(),
						gl(18, 'button', Gy),
						El(19, 'xl'),
						ml(),
						gl(20, 'button', Wy),
						El(21, 'full'),
						ml(),
						ml(),
						gl(22, 'figure'),
						gl(23, 'pre', fy),
						El(24, '<button '),
						gl(25, 'span', Dy),
						gl(26, 'span', Ny),
						El(27, 'class'),
						ml(),
						El(28, '='),
						ml(),
						gl(29, 'span', Uy),
						El(30, '"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(31, ' '),
						gl(32, 'span', Dy),
						gl(33, 'span', Ny),
						El(34, 'type'),
						ml(),
						El(35, '='),
						ml(),
						gl(36, 'span', Uy),
						El(37, '"button"'),
						ml(),
						El(38, '>xs</button>\n<button '),
						gl(39, 'span', Dy),
						gl(40, 'span', Ny),
						El(41, 'class'),
						ml(),
						El(42, '='),
						ml(),
						gl(43, 'span', Uy),
						El(44, '"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(45, ' '),
						gl(46, 'span', Dy),
						gl(47, 'span', Ny),
						El(48, 'type'),
						ml(),
						El(49, '='),
						ml(),
						gl(50, 'span', Uy),
						El(51, '"button"'),
						ml(),
						El(52, '>sm</button>\n<button '),
						gl(53, 'span', Dy),
						gl(54, 'span', Ny),
						El(55, 'class'),
						ml(),
						El(56, '='),
						ml(),
						gl(57, 'span', Uy),
						El(58, '"btn-md rounded bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(59, ' '),
						gl(60, 'span', Dy),
						gl(61, 'span', Ny),
						El(62, 'type'),
						ml(),
						El(63, '='),
						ml(),
						gl(64, 'span', Uy),
						El(65, '"button"'),
						ml(),
						El(66, '>md</button>\n<button '),
						gl(67, 'span', Dy),
						gl(68, 'span', Ny),
						El(69, 'class'),
						ml(),
						El(70, '='),
						ml(),
						gl(71, 'span', Uy),
						El(72, '"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(73, ' '),
						gl(74, 'span', Dy),
						gl(75, 'span', Ny),
						El(76, 'type'),
						ml(),
						El(77, '='),
						ml(),
						gl(78, 'span', Uy),
						El(79, '"button"'),
						ml(),
						El(80, '>lg</button>\n<button '),
						gl(81, 'span', Dy),
						gl(82, 'span', Ny),
						El(83, 'class'),
						ml(),
						El(84, '='),
						ml(),
						gl(85, 'span', Uy),
						El(86, '"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(87, ' '),
						gl(88, 'span', Dy),
						gl(89, 'span', Ny),
						El(90, 'type'),
						ml(),
						El(91, '='),
						ml(),
						gl(92, 'span', Uy),
						El(93, '"button"'),
						ml(),
						El(94, '>xl</button>\n<button '),
						gl(95, 'span', Dy),
						gl(96, 'span', Ny),
						El(97, 'class'),
						ml(),
						El(98, '='),
						ml(),
						gl(99, 'span', Uy),
						El(100, '"btn-full rounded bg-dk-blue text-white bg-hover-blue"'),
						ml(),
						El(101, ' '),
						gl(102, 'span', Dy),
						gl(103, 'span', Ny),
						El(104, 'type'),
						ml(),
						El(105, '='),
						ml(),
						gl(106, 'span', Uy),
						El(107, '"button"'),
						ml(),
						El(108, '>full</button>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Yy = ['type', 'button', 'disabled', '', 1, 'btn-md'];
			function Jy(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'State'),
						ml(),
						gl(4, 'p'),
						El(5, 'Buttons are disabled by adding a '),
						gl(6, 'code'),
						El(7, 'disabled'),
						ml(),
						El(8, ' attribute.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'button', Yy),
						El(11, 'disabled'),
						ml(),
						ml(),
						gl(12, 'figure'),
						gl(13, 'pre', fy),
						El(14, '<button '),
						gl(15, 'span', Dy),
						gl(16, 'span', Ny),
						El(17, 'class'),
						ml(),
						El(18, '='),
						ml(),
						gl(19, 'span', Uy),
						El(20, '"btn-md"'),
						ml(),
						El(21, ' '),
						gl(22, 'span', Dy),
						gl(23, 'span', Ny),
						El(24, 'type'),
						ml(),
						El(25, '='),
						ml(),
						gl(26, 'span', Uy),
						El(27, '"button"'),
						ml(),
						El(28, ' disabled>disabled</button>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			function Ky(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function Xy(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function ew(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Accordion'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function tw(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Expand'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function nw(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function rw(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Background'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function sw(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Border'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function ow(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Hover'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function iw(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Text'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			const aw = [1, 'row'],
				lw = [1, 'row-full'],
				cw = [1, 'col'],
				uw = [1, 'col-full'];
			function pw(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'p'),
						El(3, 'In order for flexbox to work, a parent container must have a '),
						gl(4, 'code'),
						El(5, '.row[-full]'),
						ml(),
						El(6, ' or '),
						gl(7, 'code'),
						El(8, '.col[-full]'),
						ml(),
						El(9, ' class.'),
						ml(),
						ml(),
						gl(10, 'section', cy),
						gl(11, 'ul', aw),
						gl(12, 'li'),
						El(13, 'row'),
						ml(),
						gl(14, 'li'),
						El(15, 'row'),
						ml(),
						ml(),
						gl(16, 'ul', lw),
						gl(17, 'li'),
						El(18, 'full row'),
						ml(),
						gl(19, 'li'),
						El(20, 'full row'),
						ml(),
						ml(),
						gl(21, 'ul', cw),
						gl(22, 'li'),
						El(23, 'column'),
						ml(),
						gl(24, 'li'),
						El(25, 'column'),
						ml(),
						ml(),
						gl(26, 'ul', uw),
						gl(27, 'li'),
						El(28, 'full column'),
						ml(),
						gl(29, 'li'),
						El(30, 'full column'),
						ml(),
						ml(),
						ml(),
						gl(31, 'figure'),
						gl(32, 'pre', fy),
						gl(33, 'span', gy),
						El(34, '<'),
						gl(35, 'span', my),
						El(36, 'ul'),
						ml(),
						El(37, ' '),
						gl(38, 'span', by),
						El(39, 'class'),
						ml(),
						El(40, '='),
						gl(41, 'span', yy),
						El(42, '"row"'),
						ml(),
						El(43, '>'),
						ml(),
						El(44, '\n    '),
						gl(45, 'span', gy),
						El(46, '<'),
						gl(47, 'span', my),
						El(48, 'li'),
						ml(),
						El(49, '>'),
						ml(),
						El(50, 'row'),
						gl(51, 'span', gy),
						El(52, '</'),
						gl(53, 'span', my),
						El(54, 'li'),
						ml(),
						El(55, '>'),
						ml(),
						El(56, '\n    '),
						gl(57, 'span', gy),
						El(58, '<'),
						gl(59, 'span', my),
						El(60, 'li'),
						ml(),
						El(61, '>'),
						ml(),
						El(62, 'row'),
						gl(63, 'span', gy),
						El(64, '</'),
						gl(65, 'span', my),
						El(66, 'li'),
						ml(),
						El(67, '>'),
						ml(),
						El(68, '\n'),
						gl(69, 'span', gy),
						El(70, '</'),
						gl(71, 'span', my),
						El(72, 'ul'),
						ml(),
						El(73, '>'),
						ml(),
						El(74, '\n'),
						gl(75, 'span', gy),
						El(76, '<'),
						gl(77, 'span', my),
						El(78, 'ul'),
						ml(),
						El(79, ' '),
						gl(80, 'span', by),
						El(81, 'class'),
						ml(),
						El(82, '='),
						gl(83, 'span', yy),
						El(84, '"row-full"'),
						ml(),
						El(85, '>'),
						ml(),
						El(86, '\n    '),
						gl(87, 'span', gy),
						El(88, '<'),
						gl(89, 'span', my),
						El(90, 'li'),
						ml(),
						El(91, '>'),
						ml(),
						El(92, 'full row'),
						gl(93, 'span', gy),
						El(94, '</'),
						gl(95, 'span', my),
						El(96, 'li'),
						ml(),
						El(97, '>'),
						ml(),
						El(98, '\n    '),
						gl(99, 'span', gy),
						El(100, '<'),
						gl(101, 'span', my),
						El(102, 'li'),
						ml(),
						El(103, '>'),
						ml(),
						El(104, 'full row'),
						gl(105, 'span', gy),
						El(106, '</'),
						gl(107, 'span', my),
						El(108, 'li'),
						ml(),
						El(109, '>'),
						ml(),
						El(110, '\n'),
						gl(111, 'span', gy),
						El(112, '</'),
						gl(113, 'span', my),
						El(114, 'ul'),
						ml(),
						El(115, '>'),
						ml(),
						El(116, '\n'),
						gl(117, 'span', gy),
						El(118, '<'),
						gl(119, 'span', my),
						El(120, 'ul'),
						ml(),
						El(121, ' '),
						gl(122, 'span', by),
						El(123, 'class'),
						ml(),
						El(124, '='),
						gl(125, 'span', yy),
						El(126, '"col"'),
						ml(),
						El(127, '>'),
						ml(),
						El(128, '\n    '),
						gl(129, 'span', gy),
						El(130, '<'),
						gl(131, 'span', my),
						El(132, 'li'),
						ml(),
						El(133, '>'),
						ml(),
						El(134, 'column'),
						gl(135, 'span', gy),
						El(136, '</'),
						gl(137, 'span', my),
						El(138, 'li'),
						ml(),
						El(139, '>'),
						ml(),
						El(140, '\n    '),
						gl(141, 'span', gy),
						El(142, '<'),
						gl(143, 'span', my),
						El(144, 'li'),
						ml(),
						El(145, '>'),
						ml(),
						El(146, 'column'),
						gl(147, 'span', gy),
						El(148, '</'),
						gl(149, 'span', my),
						El(150, 'li'),
						ml(),
						El(151, '>'),
						ml(),
						El(152, '\n'),
						gl(153, 'span', gy),
						El(154, '</'),
						gl(155, 'span', my),
						El(156, 'ul'),
						ml(),
						El(157, '>'),
						ml(),
						El(158, '\n'),
						gl(159, 'span', gy),
						El(160, '<'),
						gl(161, 'span', my),
						El(162, 'ul'),
						ml(),
						El(163, ' '),
						gl(164, 'span', by),
						El(165, 'class'),
						ml(),
						El(166, '='),
						gl(167, 'span', yy),
						El(168, '"col-full"'),
						ml(),
						El(169, '>'),
						ml(),
						El(170, '\n    '),
						gl(171, 'span', gy),
						El(172, '<'),
						gl(173, 'span', my),
						El(174, 'li'),
						ml(),
						El(175, '>'),
						ml(),
						El(176, 'full column'),
						gl(177, 'span', gy),
						El(178, '</'),
						gl(179, 'span', my),
						El(180, 'li'),
						ml(),
						El(181, '>'),
						ml(),
						El(182, '\n    '),
						gl(183, 'span', gy),
						El(184, '<'),
						gl(185, 'span', my),
						El(186, 'li'),
						ml(),
						El(187, '>'),
						ml(),
						El(188, 'full column'),
						gl(189, 'span', gy),
						El(190, '</'),
						gl(191, 'span', my),
						El(192, 'li'),
						ml(),
						El(193, '>'),
						ml(),
						El(194, '\n'),
						gl(195, 'span', gy),
						El(196, '</'),
						gl(197, 'span', my),
						El(198, 'ul'),
						ml(),
						El(199, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(10), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const hw = [1, 'col', 'align-l'],
				dw = [1, 'col', 'align-c'],
				fw = [1, 'col', 'align-r'],
				gw = [1, 'col', 'align-t'],
				mw = [1, 'col', 'align-m'],
				bw = [1, 'col', 'align-b'],
				yw = [1, 'col', 'align-cm'],
				ww = [1, 'col', 'align-sa'],
				_w = [1, 'col', 'align-sb'],
				vw = [1, 'col', 'align-st'];
			function xw(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Container Column'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use an '),
						gl(6, 'code'),
						El(7, '.align-[l || c || r || t || m || b || cm || sa || sb || st]'),
						ml(),
						El(8, ' class to align ALL items in a '),
						gl(9, 'code'),
						El(10, '.col'),
						ml(),
						El(11, ' flex container.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'ul', hw),
						gl(14, 'li'),
						El(15, 'left (default)'),
						ml(),
						gl(16, 'li'),
						El(17, 'left (default)'),
						ml(),
						ml(),
						gl(18, 'ul', dw),
						gl(19, 'li'),
						El(20, 'center'),
						ml(),
						gl(21, 'li'),
						El(22, 'center'),
						ml(),
						ml(),
						gl(23, 'ul', fw),
						gl(24, 'li'),
						El(25, 'right'),
						ml(),
						gl(26, 'li'),
						El(27, 'right'),
						ml(),
						ml(),
						gl(28, 'ul', gw),
						gl(29, 'li'),
						El(30, 'top (default)'),
						ml(),
						gl(31, 'li'),
						El(32, 'top (default)'),
						ml(),
						ml(),
						gl(33, 'ul', mw),
						gl(34, 'li'),
						El(35, 'middle'),
						ml(),
						gl(36, 'li'),
						El(37, 'middle'),
						ml(),
						ml(),
						gl(38, 'ul', bw),
						gl(39, 'li'),
						El(40, 'bottom'),
						ml(),
						gl(41, 'li'),
						El(42, 'bottom'),
						ml(),
						ml(),
						gl(43, 'ul', yw),
						gl(44, 'li'),
						El(45, 'center middle'),
						ml(),
						gl(46, 'li'),
						El(47, 'center middle'),
						ml(),
						ml(),
						gl(48, 'ul', ww),
						gl(49, 'li'),
						El(50, 'space around'),
						ml(),
						gl(51, 'li'),
						El(52, 'space around'),
						ml(),
						ml(),
						gl(53, 'ul', _w),
						gl(54, 'li'),
						El(55, 'space between'),
						ml(),
						gl(56, 'li'),
						El(57, 'space between'),
						ml(),
						ml(),
						gl(58, 'ul', vw),
						gl(59, 'li'),
						El(60, 'stretch'),
						ml(),
						gl(61, 'li'),
						El(62, 'stretch'),
						ml(),
						ml(),
						ml(),
						gl(63, 'figure'),
						gl(64, 'pre', fy),
						gl(65, 'span', gy),
						El(66, '<'),
						gl(67, 'span', my),
						El(68, 'ul'),
						ml(),
						El(69, ' '),
						gl(70, 'span', by),
						El(71, 'class'),
						ml(),
						El(72, '='),
						gl(73, 'span', yy),
						El(74, '"col align-l"'),
						ml(),
						El(75, '>'),
						ml(),
						El(76, '\n    '),
						gl(77, 'span', gy),
						El(78, '<'),
						gl(79, 'span', my),
						El(80, 'li'),
						ml(),
						El(81, '>'),
						ml(),
						El(82, 'left (default)'),
						gl(83, 'span', gy),
						El(84, '</'),
						gl(85, 'span', my),
						El(86, 'li'),
						ml(),
						El(87, '>'),
						ml(),
						El(88, '\n    '),
						gl(89, 'span', gy),
						El(90, '<'),
						gl(91, 'span', my),
						El(92, 'li'),
						ml(),
						El(93, '>'),
						ml(),
						El(94, 'left (default)'),
						gl(95, 'span', gy),
						El(96, '</'),
						gl(97, 'span', my),
						El(98, 'li'),
						ml(),
						El(99, '>'),
						ml(),
						El(100, '\n'),
						gl(101, 'span', gy),
						El(102, '</'),
						gl(103, 'span', my),
						El(104, 'ul'),
						ml(),
						El(105, '>'),
						ml(),
						El(106, '\n'),
						gl(107, 'span', gy),
						El(108, '<'),
						gl(109, 'span', my),
						El(110, 'ul'),
						ml(),
						El(111, ' '),
						gl(112, 'span', by),
						El(113, 'class'),
						ml(),
						El(114, '='),
						gl(115, 'span', yy),
						El(116, '"col align-c"'),
						ml(),
						El(117, '>'),
						ml(),
						El(118, '\n    '),
						gl(119, 'span', gy),
						El(120, '<'),
						gl(121, 'span', my),
						El(122, 'li'),
						ml(),
						El(123, '>'),
						ml(),
						El(124, 'center'),
						gl(125, 'span', gy),
						El(126, '</'),
						gl(127, 'span', my),
						El(128, 'li'),
						ml(),
						El(129, '>'),
						ml(),
						El(130, '\n    '),
						gl(131, 'span', gy),
						El(132, '<'),
						gl(133, 'span', my),
						El(134, 'li'),
						ml(),
						El(135, '>'),
						ml(),
						El(136, 'center'),
						gl(137, 'span', gy),
						El(138, '</'),
						gl(139, 'span', my),
						El(140, 'li'),
						ml(),
						El(141, '>'),
						ml(),
						El(142, '\n'),
						gl(143, 'span', gy),
						El(144, '</'),
						gl(145, 'span', my),
						El(146, 'ul'),
						ml(),
						El(147, '>'),
						ml(),
						El(148, '\n'),
						gl(149, 'span', gy),
						El(150, '<'),
						gl(151, 'span', my),
						El(152, 'ul'),
						ml(),
						El(153, ' '),
						gl(154, 'span', by),
						El(155, 'class'),
						ml(),
						El(156, '='),
						gl(157, 'span', yy),
						El(158, '"col align-r"'),
						ml(),
						El(159, '>'),
						ml(),
						El(160, '\n    '),
						gl(161, 'span', gy),
						El(162, '<'),
						gl(163, 'span', my),
						El(164, 'li'),
						ml(),
						El(165, '>'),
						ml(),
						El(166, 'right'),
						gl(167, 'span', gy),
						El(168, '</'),
						gl(169, 'span', my),
						El(170, 'li'),
						ml(),
						El(171, '>'),
						ml(),
						El(172, '\n    '),
						gl(173, 'span', gy),
						El(174, '<'),
						gl(175, 'span', my),
						El(176, 'li'),
						ml(),
						El(177, '>'),
						ml(),
						El(178, 'right'),
						gl(179, 'span', gy),
						El(180, '</'),
						gl(181, 'span', my),
						El(182, 'li'),
						ml(),
						El(183, '>'),
						ml(),
						El(184, '\n'),
						gl(185, 'span', gy),
						El(186, '</'),
						gl(187, 'span', my),
						El(188, 'ul'),
						ml(),
						El(189, '>'),
						ml(),
						El(190, '\n'),
						gl(191, 'span', gy),
						El(192, '<'),
						gl(193, 'span', my),
						El(194, 'ul'),
						ml(),
						El(195, ' '),
						gl(196, 'span', by),
						El(197, 'class'),
						ml(),
						El(198, '='),
						gl(199, 'span', yy),
						El(200, '"col align-t"'),
						ml(),
						El(201, '>'),
						ml(),
						El(202, '\n    '),
						gl(203, 'span', gy),
						El(204, '<'),
						gl(205, 'span', my),
						El(206, 'li'),
						ml(),
						El(207, '>'),
						ml(),
						El(208, 'top (default)'),
						gl(209, 'span', gy),
						El(210, '</'),
						gl(211, 'span', my),
						El(212, 'li'),
						ml(),
						El(213, '>'),
						ml(),
						El(214, '\n    '),
						gl(215, 'span', gy),
						El(216, '<'),
						gl(217, 'span', my),
						El(218, 'li'),
						ml(),
						El(219, '>'),
						ml(),
						El(220, 'top (default)'),
						gl(221, 'span', gy),
						El(222, '</'),
						gl(223, 'span', my),
						El(224, 'li'),
						ml(),
						El(225, '>'),
						ml(),
						El(226, '\n'),
						gl(227, 'span', gy),
						El(228, '</'),
						gl(229, 'span', my),
						El(230, 'ul'),
						ml(),
						El(231, '>'),
						ml(),
						El(232, '\n'),
						gl(233, 'span', gy),
						El(234, '<'),
						gl(235, 'span', my),
						El(236, 'ul'),
						ml(),
						El(237, ' '),
						gl(238, 'span', by),
						El(239, 'class'),
						ml(),
						El(240, '='),
						gl(241, 'span', yy),
						El(242, '"col align-m"'),
						ml(),
						El(243, '>'),
						ml(),
						El(244, '\n    '),
						gl(245, 'span', gy),
						El(246, '<'),
						gl(247, 'span', my),
						El(248, 'li'),
						ml(),
						El(249, '>'),
						ml(),
						El(250, 'middle'),
						gl(251, 'span', gy),
						El(252, '</'),
						gl(253, 'span', my),
						El(254, 'li'),
						ml(),
						El(255, '>'),
						ml(),
						El(256, '\n    '),
						gl(257, 'span', gy),
						El(258, '<'),
						gl(259, 'span', my),
						El(260, 'li'),
						ml(),
						El(261, '>'),
						ml(),
						El(262, 'middle'),
						gl(263, 'span', gy),
						El(264, '</'),
						gl(265, 'span', my),
						El(266, 'li'),
						ml(),
						El(267, '>'),
						ml(),
						El(268, '\n'),
						gl(269, 'span', gy),
						El(270, '</'),
						gl(271, 'span', my),
						El(272, 'ul'),
						ml(),
						El(273, '>'),
						ml(),
						El(274, '\n'),
						gl(275, 'span', gy),
						El(276, '<'),
						gl(277, 'span', my),
						El(278, 'ul'),
						ml(),
						El(279, ' '),
						gl(280, 'span', by),
						El(281, 'class'),
						ml(),
						El(282, '='),
						gl(283, 'span', yy),
						El(284, '"col align-b"'),
						ml(),
						El(285, '>'),
						ml(),
						El(286, '\n    '),
						gl(287, 'span', gy),
						El(288, '<'),
						gl(289, 'span', my),
						El(290, 'li'),
						ml(),
						El(291, '>'),
						ml(),
						El(292, 'bottom'),
						gl(293, 'span', gy),
						El(294, '</'),
						gl(295, 'span', my),
						El(296, 'li'),
						ml(),
						El(297, '>'),
						ml(),
						El(298, '\n    '),
						gl(299, 'span', gy),
						El(300, '<'),
						gl(301, 'span', my),
						El(302, 'li'),
						ml(),
						El(303, '>'),
						ml(),
						El(304, 'bottom'),
						gl(305, 'span', gy),
						El(306, '</'),
						gl(307, 'span', my),
						El(308, 'li'),
						ml(),
						El(309, '>'),
						ml(),
						El(310, '\n'),
						gl(311, 'span', gy),
						El(312, '</'),
						gl(313, 'span', my),
						El(314, 'ul'),
						ml(),
						El(315, '>'),
						ml(),
						El(316, '\n'),
						gl(317, 'span', gy),
						El(318, '<'),
						gl(319, 'span', my),
						El(320, 'ul'),
						ml(),
						El(321, ' '),
						gl(322, 'span', by),
						El(323, 'class'),
						ml(),
						El(324, '='),
						gl(325, 'span', yy),
						El(326, '"col align-cm"'),
						ml(),
						El(327, '>'),
						ml(),
						El(328, '\n    '),
						gl(329, 'span', gy),
						El(330, '<'),
						gl(331, 'span', my),
						El(332, 'li'),
						ml(),
						El(333, '>'),
						ml(),
						El(334, 'center middle'),
						gl(335, 'span', gy),
						El(336, '</'),
						gl(337, 'span', my),
						El(338, 'li'),
						ml(),
						El(339, '>'),
						ml(),
						El(340, '\n    '),
						gl(341, 'span', gy),
						El(342, '<'),
						gl(343, 'span', my),
						El(344, 'li'),
						ml(),
						El(345, '>'),
						ml(),
						El(346, 'center middle'),
						gl(347, 'span', gy),
						El(348, '</'),
						gl(349, 'span', my),
						El(350, 'li'),
						ml(),
						El(351, '>'),
						ml(),
						El(352, '\n'),
						gl(353, 'span', gy),
						El(354, '</'),
						gl(355, 'span', my),
						El(356, 'ul'),
						ml(),
						El(357, '>'),
						ml(),
						El(358, '\n'),
						gl(359, 'span', gy),
						El(360, '<'),
						gl(361, 'span', my),
						El(362, 'ul'),
						ml(),
						El(363, ' '),
						gl(364, 'span', by),
						El(365, 'class'),
						ml(),
						El(366, '='),
						gl(367, 'span', yy),
						El(368, '"col align-sa"'),
						ml(),
						El(369, '>'),
						ml(),
						El(370, '\n    '),
						gl(371, 'span', gy),
						El(372, '<'),
						gl(373, 'span', my),
						El(374, 'li'),
						ml(),
						El(375, '>'),
						ml(),
						El(376, 'space around'),
						gl(377, 'span', gy),
						El(378, '</'),
						gl(379, 'span', my),
						El(380, 'li'),
						ml(),
						El(381, '>'),
						ml(),
						El(382, '\n    '),
						gl(383, 'span', gy),
						El(384, '<'),
						gl(385, 'span', my),
						El(386, 'li'),
						ml(),
						El(387, '>'),
						ml(),
						El(388, 'space around'),
						gl(389, 'span', gy),
						El(390, '</'),
						gl(391, 'span', my),
						El(392, 'li'),
						ml(),
						El(393, '>'),
						ml(),
						El(394, '\n'),
						gl(395, 'span', gy),
						El(396, '</'),
						gl(397, 'span', my),
						El(398, 'ul'),
						ml(),
						El(399, '>'),
						ml(),
						El(400, '\n'),
						gl(401, 'span', gy),
						El(402, '<'),
						gl(403, 'span', my),
						El(404, 'ul'),
						ml(),
						El(405, ' '),
						gl(406, 'span', by),
						El(407, 'class'),
						ml(),
						El(408, '='),
						gl(409, 'span', yy),
						El(410, '"col align-sb"'),
						ml(),
						El(411, '>'),
						ml(),
						El(412, '\n    '),
						gl(413, 'span', gy),
						El(414, '<'),
						gl(415, 'span', my),
						El(416, 'li'),
						ml(),
						El(417, '>'),
						ml(),
						El(418, 'space between'),
						gl(419, 'span', gy),
						El(420, '</'),
						gl(421, 'span', my),
						El(422, 'li'),
						ml(),
						El(423, '>'),
						ml(),
						El(424, '\n    '),
						gl(425, 'span', gy),
						El(426, '<'),
						gl(427, 'span', my),
						El(428, 'li'),
						ml(),
						El(429, '>'),
						ml(),
						El(430, 'space between'),
						gl(431, 'span', gy),
						El(432, '</'),
						gl(433, 'span', my),
						El(434, 'li'),
						ml(),
						El(435, '>'),
						ml(),
						El(436, '\n'),
						gl(437, 'span', gy),
						El(438, '</'),
						gl(439, 'span', my),
						El(440, 'ul'),
						ml(),
						El(441, '>'),
						ml(),
						El(442, '\n'),
						gl(443, 'span', gy),
						El(444, '<'),
						gl(445, 'span', my),
						El(446, 'ul'),
						ml(),
						El(447, ' '),
						gl(448, 'span', by),
						El(449, 'class'),
						ml(),
						El(450, '='),
						gl(451, 'span', yy),
						El(452, '"col align-st"'),
						ml(),
						El(453, '>'),
						ml(),
						El(454, '\n    '),
						gl(455, 'span', gy),
						El(456, '<'),
						gl(457, 'span', my),
						El(458, 'li'),
						ml(),
						El(459, '>'),
						ml(),
						El(460, 'stretch'),
						gl(461, 'span', gy),
						El(462, '</'),
						gl(463, 'span', my),
						El(464, 'li'),
						ml(),
						El(465, '>'),
						ml(),
						El(466, '\n    '),
						gl(467, 'span', gy),
						El(468, '<'),
						gl(469, 'span', my),
						El(470, 'li'),
						ml(),
						El(471, '>'),
						ml(),
						El(472, 'stretch'),
						gl(473, 'span', gy),
						El(474, '</'),
						gl(475, 'span', my),
						El(476, 'li'),
						ml(),
						El(477, '>'),
						ml(),
						El(478, '\n'),
						gl(479, 'span', gy),
						El(480, '</'),
						gl(481, 'span', my),
						El(482, 'ul'),
						ml(),
						El(483, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Cw = [1, 'row', 'align-l'],
				kw = [1, 'row', 'align-c'],
				Sw = [1, 'row', 'align-r'],
				Ow = [1, 'row', 'align-t'],
				Ew = [1, 'row', 'align-m'],
				Tw = [1, 'row', 'align-b'],
				Iw = [1, 'row', 'align-cm'],
				Pw = [1, 'row', 'align-sa'],
				Mw = [1, 'row', 'align-sb'],
				Aw = [1, 'row', 'align-st'];
			function Rw(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Container Row'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use an '),
						gl(6, 'code'),
						El(7, '.align-[l || c || r || t || m || b || cm || sa || sb || st]'),
						ml(),
						El(8, ' class to align ALL items in a '),
						gl(9, 'code'),
						El(10, '.row'),
						ml(),
						El(11, ' flex container.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'ul', Cw),
						gl(14, 'li'),
						El(15, 'left (default)'),
						ml(),
						gl(16, 'li'),
						El(17, 'left (default)'),
						ml(),
						ml(),
						gl(18, 'ul', kw),
						gl(19, 'li'),
						El(20, 'center'),
						ml(),
						gl(21, 'li'),
						El(22, 'center'),
						ml(),
						ml(),
						gl(23, 'ul', Sw),
						gl(24, 'li'),
						El(25, 'right'),
						ml(),
						gl(26, 'li'),
						El(27, 'right'),
						ml(),
						ml(),
						gl(28, 'ul', Ow),
						gl(29, 'li'),
						El(30, 'top (default)'),
						ml(),
						gl(31, 'li'),
						El(32, 'top (default)'),
						ml(),
						ml(),
						gl(33, 'ul', Ew),
						gl(34, 'li'),
						El(35, 'middle'),
						ml(),
						gl(36, 'li'),
						El(37, 'middle'),
						ml(),
						ml(),
						gl(38, 'ul', Tw),
						gl(39, 'li'),
						El(40, 'bottom'),
						ml(),
						gl(41, 'li'),
						El(42, 'bottom'),
						ml(),
						ml(),
						gl(43, 'ul', Iw),
						gl(44, 'li'),
						El(45, 'center middle'),
						ml(),
						gl(46, 'li'),
						El(47, 'center middle'),
						ml(),
						ml(),
						gl(48, 'ul', Pw),
						gl(49, 'li'),
						El(50, 'space around'),
						ml(),
						gl(51, 'li'),
						El(52, 'space around'),
						ml(),
						ml(),
						gl(53, 'ul', Mw),
						gl(54, 'li'),
						El(55, 'space between'),
						ml(),
						gl(56, 'li'),
						El(57, 'space between'),
						ml(),
						ml(),
						gl(58, 'ul', Aw),
						gl(59, 'li'),
						El(60, 'stretch'),
						ml(),
						gl(61, 'li'),
						El(62, 'stretch'),
						ml(),
						ml(),
						ml(),
						gl(63, 'figure'),
						gl(64, 'pre', fy),
						gl(65, 'span', gy),
						El(66, '<'),
						gl(67, 'span', my),
						El(68, 'ul'),
						ml(),
						El(69, ' '),
						gl(70, 'span', by),
						El(71, 'class'),
						ml(),
						El(72, '='),
						gl(73, 'span', yy),
						El(74, '"row align-l"'),
						ml(),
						El(75, '>'),
						ml(),
						El(76, '\n    '),
						gl(77, 'span', gy),
						El(78, '<'),
						gl(79, 'span', my),
						El(80, 'li'),
						ml(),
						El(81, '>'),
						ml(),
						El(82, 'left (default)'),
						gl(83, 'span', gy),
						El(84, '</'),
						gl(85, 'span', my),
						El(86, 'li'),
						ml(),
						El(87, '>'),
						ml(),
						El(88, '\n    '),
						gl(89, 'span', gy),
						El(90, '<'),
						gl(91, 'span', my),
						El(92, 'li'),
						ml(),
						El(93, '>'),
						ml(),
						El(94, 'left (default)'),
						gl(95, 'span', gy),
						El(96, '</'),
						gl(97, 'span', my),
						El(98, 'li'),
						ml(),
						El(99, '>'),
						ml(),
						El(100, '\n'),
						gl(101, 'span', gy),
						El(102, '</'),
						gl(103, 'span', my),
						El(104, 'ul'),
						ml(),
						El(105, '>'),
						ml(),
						El(106, '\n'),
						gl(107, 'span', gy),
						El(108, '<'),
						gl(109, 'span', my),
						El(110, 'ul'),
						ml(),
						El(111, ' '),
						gl(112, 'span', by),
						El(113, 'class'),
						ml(),
						El(114, '='),
						gl(115, 'span', yy),
						El(116, '"row align-c"'),
						ml(),
						El(117, '>'),
						ml(),
						El(118, '\n    '),
						gl(119, 'span', gy),
						El(120, '<'),
						gl(121, 'span', my),
						El(122, 'li'),
						ml(),
						El(123, '>'),
						ml(),
						El(124, 'center'),
						gl(125, 'span', gy),
						El(126, '</'),
						gl(127, 'span', my),
						El(128, 'li'),
						ml(),
						El(129, '>'),
						ml(),
						El(130, '\n    '),
						gl(131, 'span', gy),
						El(132, '<'),
						gl(133, 'span', my),
						El(134, 'li'),
						ml(),
						El(135, '>'),
						ml(),
						El(136, 'center'),
						gl(137, 'span', gy),
						El(138, '</'),
						gl(139, 'span', my),
						El(140, 'li'),
						ml(),
						El(141, '>'),
						ml(),
						El(142, '\n'),
						gl(143, 'span', gy),
						El(144, '</'),
						gl(145, 'span', my),
						El(146, 'ul'),
						ml(),
						El(147, '>'),
						ml(),
						El(148, '\n'),
						gl(149, 'span', gy),
						El(150, '<'),
						gl(151, 'span', my),
						El(152, 'ul'),
						ml(),
						El(153, ' '),
						gl(154, 'span', by),
						El(155, 'class'),
						ml(),
						El(156, '='),
						gl(157, 'span', yy),
						El(158, '"row align-r"'),
						ml(),
						El(159, '>'),
						ml(),
						El(160, '\n    '),
						gl(161, 'span', gy),
						El(162, '<'),
						gl(163, 'span', my),
						El(164, 'li'),
						ml(),
						El(165, '>'),
						ml(),
						El(166, 'right'),
						gl(167, 'span', gy),
						El(168, '</'),
						gl(169, 'span', my),
						El(170, 'li'),
						ml(),
						El(171, '>'),
						ml(),
						El(172, '\n    '),
						gl(173, 'span', gy),
						El(174, '<'),
						gl(175, 'span', my),
						El(176, 'li'),
						ml(),
						El(177, '>'),
						ml(),
						El(178, 'right'),
						gl(179, 'span', gy),
						El(180, '</'),
						gl(181, 'span', my),
						El(182, 'li'),
						ml(),
						El(183, '>'),
						ml(),
						El(184, '\n'),
						gl(185, 'span', gy),
						El(186, '</'),
						gl(187, 'span', my),
						El(188, 'ul'),
						ml(),
						El(189, '>'),
						ml(),
						El(190, '\n'),
						gl(191, 'span', gy),
						El(192, '<'),
						gl(193, 'span', my),
						El(194, 'ul'),
						ml(),
						El(195, ' '),
						gl(196, 'span', by),
						El(197, 'class'),
						ml(),
						El(198, '='),
						gl(199, 'span', yy),
						El(200, '"row align-t"'),
						ml(),
						El(201, '>'),
						ml(),
						El(202, '\n    '),
						gl(203, 'span', gy),
						El(204, '<'),
						gl(205, 'span', my),
						El(206, 'li'),
						ml(),
						El(207, '>'),
						ml(),
						El(208, 'top (default)'),
						gl(209, 'span', gy),
						El(210, '</'),
						gl(211, 'span', my),
						El(212, 'li'),
						ml(),
						El(213, '>'),
						ml(),
						El(214, '\n    '),
						gl(215, 'span', gy),
						El(216, '<'),
						gl(217, 'span', my),
						El(218, 'li'),
						ml(),
						El(219, '>'),
						ml(),
						El(220, 'top (default)'),
						gl(221, 'span', gy),
						El(222, '</'),
						gl(223, 'span', my),
						El(224, 'li'),
						ml(),
						El(225, '>'),
						ml(),
						El(226, '\n'),
						gl(227, 'span', gy),
						El(228, '</'),
						gl(229, 'span', my),
						El(230, 'ul'),
						ml(),
						El(231, '>'),
						ml(),
						El(232, '\n'),
						gl(233, 'span', gy),
						El(234, '<'),
						gl(235, 'span', my),
						El(236, 'ul'),
						ml(),
						El(237, ' '),
						gl(238, 'span', by),
						El(239, 'class'),
						ml(),
						El(240, '='),
						gl(241, 'span', yy),
						El(242, '"row align-m"'),
						ml(),
						El(243, '>'),
						ml(),
						El(244, '\n    '),
						gl(245, 'span', gy),
						El(246, '<'),
						gl(247, 'span', my),
						El(248, 'li'),
						ml(),
						El(249, '>'),
						ml(),
						El(250, 'middle'),
						gl(251, 'span', gy),
						El(252, '</'),
						gl(253, 'span', my),
						El(254, 'li'),
						ml(),
						El(255, '>'),
						ml(),
						El(256, '\n    '),
						gl(257, 'span', gy),
						El(258, '<'),
						gl(259, 'span', my),
						El(260, 'li'),
						ml(),
						El(261, '>'),
						ml(),
						El(262, 'middle'),
						gl(263, 'span', gy),
						El(264, '</'),
						gl(265, 'span', my),
						El(266, 'li'),
						ml(),
						El(267, '>'),
						ml(),
						El(268, '\n'),
						gl(269, 'span', gy),
						El(270, '</'),
						gl(271, 'span', my),
						El(272, 'ul'),
						ml(),
						El(273, '>'),
						ml(),
						El(274, '\n'),
						gl(275, 'span', gy),
						El(276, '<'),
						gl(277, 'span', my),
						El(278, 'ul'),
						ml(),
						El(279, ' '),
						gl(280, 'span', by),
						El(281, 'class'),
						ml(),
						El(282, '='),
						gl(283, 'span', yy),
						El(284, '"row align-b"'),
						ml(),
						El(285, '>'),
						ml(),
						El(286, '\n    '),
						gl(287, 'span', gy),
						El(288, '<'),
						gl(289, 'span', my),
						El(290, 'li'),
						ml(),
						El(291, '>'),
						ml(),
						El(292, 'bottom'),
						gl(293, 'span', gy),
						El(294, '</'),
						gl(295, 'span', my),
						El(296, 'li'),
						ml(),
						El(297, '>'),
						ml(),
						El(298, '\n    '),
						gl(299, 'span', gy),
						El(300, '<'),
						gl(301, 'span', my),
						El(302, 'li'),
						ml(),
						El(303, '>'),
						ml(),
						El(304, 'bottom'),
						gl(305, 'span', gy),
						El(306, '</'),
						gl(307, 'span', my),
						El(308, 'li'),
						ml(),
						El(309, '>'),
						ml(),
						El(310, '\n'),
						gl(311, 'span', gy),
						El(312, '</'),
						gl(313, 'span', my),
						El(314, 'ul'),
						ml(),
						El(315, '>'),
						ml(),
						El(316, '\n'),
						gl(317, 'span', gy),
						El(318, '<'),
						gl(319, 'span', my),
						El(320, 'ul'),
						ml(),
						El(321, ' '),
						gl(322, 'span', by),
						El(323, 'class'),
						ml(),
						El(324, '='),
						gl(325, 'span', yy),
						El(326, '"row align-cm"'),
						ml(),
						El(327, '>'),
						ml(),
						El(328, '\n    '),
						gl(329, 'span', gy),
						El(330, '<'),
						gl(331, 'span', my),
						El(332, 'li'),
						ml(),
						El(333, '>'),
						ml(),
						El(334, 'center middle'),
						gl(335, 'span', gy),
						El(336, '</'),
						gl(337, 'span', my),
						El(338, 'li'),
						ml(),
						El(339, '>'),
						ml(),
						El(340, '\n    '),
						gl(341, 'span', gy),
						El(342, '<'),
						gl(343, 'span', my),
						El(344, 'li'),
						ml(),
						El(345, '>'),
						ml(),
						El(346, 'center middle'),
						gl(347, 'span', gy),
						El(348, '</'),
						gl(349, 'span', my),
						El(350, 'li'),
						ml(),
						El(351, '>'),
						ml(),
						El(352, '\n'),
						gl(353, 'span', gy),
						El(354, '</'),
						gl(355, 'span', my),
						El(356, 'ul'),
						ml(),
						El(357, '>'),
						ml(),
						El(358, '\n'),
						gl(359, 'span', gy),
						El(360, '<'),
						gl(361, 'span', my),
						El(362, 'ul'),
						ml(),
						El(363, ' '),
						gl(364, 'span', by),
						El(365, 'class'),
						ml(),
						El(366, '='),
						gl(367, 'span', yy),
						El(368, '"row align-sa"'),
						ml(),
						El(369, '>'),
						ml(),
						El(370, '\n    '),
						gl(371, 'span', gy),
						El(372, '<'),
						gl(373, 'span', my),
						El(374, 'li'),
						ml(),
						El(375, '>'),
						ml(),
						El(376, 'space around'),
						gl(377, 'span', gy),
						El(378, '</'),
						gl(379, 'span', my),
						El(380, 'li'),
						ml(),
						El(381, '>'),
						ml(),
						El(382, '\n    '),
						gl(383, 'span', gy),
						El(384, '<'),
						gl(385, 'span', my),
						El(386, 'li'),
						ml(),
						El(387, '>'),
						ml(),
						El(388, 'space around'),
						gl(389, 'span', gy),
						El(390, '</'),
						gl(391, 'span', my),
						El(392, 'li'),
						ml(),
						El(393, '>'),
						ml(),
						El(394, '\n'),
						gl(395, 'span', gy),
						El(396, '</'),
						gl(397, 'span', my),
						El(398, 'ul'),
						ml(),
						El(399, '>'),
						ml(),
						El(400, '\n'),
						gl(401, 'span', gy),
						El(402, '<'),
						gl(403, 'span', my),
						El(404, 'ul'),
						ml(),
						El(405, ' '),
						gl(406, 'span', by),
						El(407, 'class'),
						ml(),
						El(408, '='),
						gl(409, 'span', yy),
						El(410, '"row align-sb"'),
						ml(),
						El(411, '>'),
						ml(),
						El(412, '\n    '),
						gl(413, 'span', gy),
						El(414, '<'),
						gl(415, 'span', my),
						El(416, 'li'),
						ml(),
						El(417, '>'),
						ml(),
						El(418, 'space between'),
						gl(419, 'span', gy),
						El(420, '</'),
						gl(421, 'span', my),
						El(422, 'li'),
						ml(),
						El(423, '>'),
						ml(),
						El(424, '\n    '),
						gl(425, 'span', gy),
						El(426, '<'),
						gl(427, 'span', my),
						El(428, 'li'),
						ml(),
						El(429, '>'),
						ml(),
						El(430, 'space between'),
						gl(431, 'span', gy),
						El(432, '</'),
						gl(433, 'span', my),
						El(434, 'li'),
						ml(),
						El(435, '>'),
						ml(),
						El(436, '\n'),
						gl(437, 'span', gy),
						El(438, '</'),
						gl(439, 'span', my),
						El(440, 'ul'),
						ml(),
						El(441, '>'),
						ml(),
						El(442, '\n'),
						gl(443, 'span', gy),
						El(444, '<'),
						gl(445, 'span', my),
						El(446, 'ul'),
						ml(),
						El(447, ' '),
						gl(448, 'span', by),
						El(449, 'class'),
						ml(),
						El(450, '='),
						gl(451, 'span', yy),
						El(452, '"row align-st"'),
						ml(),
						El(453, '>'),
						ml(),
						El(454, '\n    '),
						gl(455, 'span', gy),
						El(456, '<'),
						gl(457, 'span', my),
						El(458, 'li'),
						ml(),
						El(459, '>'),
						ml(),
						El(460, 'stretch'),
						gl(461, 'span', gy),
						El(462, '</'),
						gl(463, 'span', my),
						El(464, 'li'),
						ml(),
						El(465, '>'),
						ml(),
						El(466, '\n    '),
						gl(467, 'span', gy),
						El(468, '<'),
						gl(469, 'span', my),
						El(470, 'li'),
						ml(),
						El(471, '>'),
						ml(),
						El(472, 'stretch'),
						gl(473, 'span', gy),
						El(474, '</'),
						gl(475, 'span', my),
						El(476, 'li'),
						ml(),
						El(477, '>'),
						ml(),
						El(478, '\n'),
						gl(479, 'span', gy),
						El(480, '</'),
						gl(481, 'span', my),
						El(482, 'ul'),
						ml(),
						El(483, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const jw = [1, 'item-l'],
				Dw = [1, 'item-c'],
				Nw = [1, 'item-r'],
				Uw = [1, 'item-t'],
				Lw = [1, 'item-m'],
				Hw = [1, 'item-b'],
				Fw = [1, 'item-cm'],
				zw = [1, 'item-st'];
			function Vw(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Item Column'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use '),
						gl(6, 'code'),
						El(7, '.item-[l || c || r || t || m || b || cm || st]'),
						ml(),
						El(8, ' classes to align ONE child in a '),
						gl(9, 'code'),
						El(10, '.col'),
						ml(),
						El(11, ' flex container.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'ul', cw),
						gl(14, 'li'),
						El(15, 'default'),
						ml(),
						gl(16, 'li', jw),
						El(17, 'left (default)'),
						ml(),
						ml(),
						gl(18, 'ul', cw),
						gl(19, 'li'),
						El(20, 'default'),
						ml(),
						gl(21, 'li', Dw),
						El(22, 'center'),
						ml(),
						ml(),
						gl(23, 'ul', cw),
						gl(24, 'li'),
						El(25, 'default'),
						ml(),
						gl(26, 'li', Nw),
						El(27, 'right'),
						ml(),
						ml(),
						gl(28, 'ul', cw),
						gl(29, 'li'),
						El(30, 'default'),
						ml(),
						gl(31, 'li', Uw),
						El(32, 'top (default)'),
						ml(),
						ml(),
						gl(33, 'ul', cw),
						gl(34, 'li'),
						El(35, 'default'),
						ml(),
						gl(36, 'li', Lw),
						El(37, 'middle'),
						ml(),
						ml(),
						gl(38, 'ul', cw),
						gl(39, 'li'),
						El(40, 'default'),
						ml(),
						gl(41, 'li', Hw),
						El(42, 'bottom'),
						ml(),
						ml(),
						gl(43, 'ul', cw),
						gl(44, 'li'),
						El(45, 'default'),
						ml(),
						gl(46, 'li', Fw),
						El(47, 'center middle'),
						ml(),
						ml(),
						gl(48, 'ul', cw),
						gl(49, 'li'),
						El(50, 'default'),
						ml(),
						gl(51, 'li', zw),
						El(52, 'stretch'),
						ml(),
						ml(),
						ml(),
						gl(53, 'figure'),
						gl(54, 'pre', fy),
						gl(55, 'span', gy),
						El(56, '<'),
						gl(57, 'span', my),
						El(58, 'ul'),
						ml(),
						El(59, ' '),
						gl(60, 'span', by),
						El(61, 'class'),
						ml(),
						El(62, '='),
						gl(63, 'span', yy),
						El(64, '"col"'),
						ml(),
						El(65, '>'),
						ml(),
						El(66, '\n    '),
						gl(67, 'span', gy),
						El(68, '<'),
						gl(69, 'span', my),
						El(70, 'li'),
						ml(),
						El(71, '>'),
						ml(),
						El(72, 'default'),
						gl(73, 'span', gy),
						El(74, '</'),
						gl(75, 'span', my),
						El(76, 'li'),
						ml(),
						El(77, '>'),
						ml(),
						El(78, '\n    '),
						gl(79, 'span', gy),
						El(80, '<'),
						gl(81, 'span', my),
						El(82, 'li'),
						ml(),
						El(83, ' '),
						gl(84, 'span', by),
						El(85, 'class'),
						ml(),
						El(86, '='),
						gl(87, 'span', yy),
						El(88, '"item-l"'),
						ml(),
						El(89, '>'),
						ml(),
						El(90, 'left (default)'),
						gl(91, 'span', gy),
						El(92, '</'),
						gl(93, 'span', my),
						El(94, 'li'),
						ml(),
						El(95, '>'),
						ml(),
						El(96, '\n'),
						gl(97, 'span', gy),
						El(98, '</'),
						gl(99, 'span', my),
						El(100, 'ul'),
						ml(),
						El(101, '>'),
						ml(),
						El(102, '\n'),
						gl(103, 'span', gy),
						El(104, '<'),
						gl(105, 'span', my),
						El(106, 'ul'),
						ml(),
						El(107, ' '),
						gl(108, 'span', by),
						El(109, 'class'),
						ml(),
						El(110, '='),
						gl(111, 'span', yy),
						El(112, '"col"'),
						ml(),
						El(113, '>'),
						ml(),
						El(114, '\n    '),
						gl(115, 'span', gy),
						El(116, '<'),
						gl(117, 'span', my),
						El(118, 'li'),
						ml(),
						El(119, '>'),
						ml(),
						El(120, 'default'),
						gl(121, 'span', gy),
						El(122, '</'),
						gl(123, 'span', my),
						El(124, 'li'),
						ml(),
						El(125, '>'),
						ml(),
						El(126, '\n    '),
						gl(127, 'span', gy),
						El(128, '<'),
						gl(129, 'span', my),
						El(130, 'li'),
						ml(),
						El(131, ' '),
						gl(132, 'span', by),
						El(133, 'class'),
						ml(),
						El(134, '='),
						gl(135, 'span', yy),
						El(136, '"item-c"'),
						ml(),
						El(137, '>'),
						ml(),
						El(138, 'center'),
						gl(139, 'span', gy),
						El(140, '</'),
						gl(141, 'span', my),
						El(142, 'li'),
						ml(),
						El(143, '>'),
						ml(),
						El(144, '\n'),
						gl(145, 'span', gy),
						El(146, '</'),
						gl(147, 'span', my),
						El(148, 'ul'),
						ml(),
						El(149, '>'),
						ml(),
						El(150, '\n'),
						gl(151, 'span', gy),
						El(152, '<'),
						gl(153, 'span', my),
						El(154, 'ul'),
						ml(),
						El(155, ' '),
						gl(156, 'span', by),
						El(157, 'class'),
						ml(),
						El(158, '='),
						gl(159, 'span', yy),
						El(160, '"col"'),
						ml(),
						El(161, '>'),
						ml(),
						El(162, '\n    '),
						gl(163, 'span', gy),
						El(164, '<'),
						gl(165, 'span', my),
						El(166, 'li'),
						ml(),
						El(167, '>'),
						ml(),
						El(168, 'default'),
						gl(169, 'span', gy),
						El(170, '</'),
						gl(171, 'span', my),
						El(172, 'li'),
						ml(),
						El(173, '>'),
						ml(),
						El(174, '\n    '),
						gl(175, 'span', gy),
						El(176, '<'),
						gl(177, 'span', my),
						El(178, 'li'),
						ml(),
						El(179, ' '),
						gl(180, 'span', by),
						El(181, 'class'),
						ml(),
						El(182, '='),
						gl(183, 'span', yy),
						El(184, '"item-r"'),
						ml(),
						El(185, '>'),
						ml(),
						El(186, 'right'),
						gl(187, 'span', gy),
						El(188, '</'),
						gl(189, 'span', my),
						El(190, 'li'),
						ml(),
						El(191, '>'),
						ml(),
						El(192, '\n'),
						gl(193, 'span', gy),
						El(194, '</'),
						gl(195, 'span', my),
						El(196, 'ul'),
						ml(),
						El(197, '>'),
						ml(),
						El(198, '\n'),
						gl(199, 'span', gy),
						El(200, '<'),
						gl(201, 'span', my),
						El(202, 'ul'),
						ml(),
						El(203, ' '),
						gl(204, 'span', by),
						El(205, 'class'),
						ml(),
						El(206, '='),
						gl(207, 'span', yy),
						El(208, '"col"'),
						ml(),
						El(209, '>'),
						ml(),
						El(210, '\n    '),
						gl(211, 'span', gy),
						El(212, '<'),
						gl(213, 'span', my),
						El(214, 'li'),
						ml(),
						El(215, '>'),
						ml(),
						El(216, 'default'),
						gl(217, 'span', gy),
						El(218, '</'),
						gl(219, 'span', my),
						El(220, 'li'),
						ml(),
						El(221, '>'),
						ml(),
						El(222, '\n    '),
						gl(223, 'span', gy),
						El(224, '<'),
						gl(225, 'span', my),
						El(226, 'li'),
						ml(),
						El(227, ' '),
						gl(228, 'span', by),
						El(229, 'class'),
						ml(),
						El(230, '='),
						gl(231, 'span', yy),
						El(232, '"item-t"'),
						ml(),
						El(233, '>'),
						ml(),
						El(234, 'top (default)'),
						gl(235, 'span', gy),
						El(236, '</'),
						gl(237, 'span', my),
						El(238, 'li'),
						ml(),
						El(239, '>'),
						ml(),
						El(240, '\n'),
						gl(241, 'span', gy),
						El(242, '</'),
						gl(243, 'span', my),
						El(244, 'ul'),
						ml(),
						El(245, '>'),
						ml(),
						El(246, '\n'),
						gl(247, 'span', gy),
						El(248, '<'),
						gl(249, 'span', my),
						El(250, 'ul'),
						ml(),
						El(251, ' '),
						gl(252, 'span', by),
						El(253, 'class'),
						ml(),
						El(254, '='),
						gl(255, 'span', yy),
						El(256, '"col"'),
						ml(),
						El(257, '>'),
						ml(),
						El(258, '\n    '),
						gl(259, 'span', gy),
						El(260, '<'),
						gl(261, 'span', my),
						El(262, 'li'),
						ml(),
						El(263, '>'),
						ml(),
						El(264, 'default'),
						gl(265, 'span', gy),
						El(266, '</'),
						gl(267, 'span', my),
						El(268, 'li'),
						ml(),
						El(269, '>'),
						ml(),
						El(270, '\n    '),
						gl(271, 'span', gy),
						El(272, '<'),
						gl(273, 'span', my),
						El(274, 'li'),
						ml(),
						El(275, ' '),
						gl(276, 'span', by),
						El(277, 'class'),
						ml(),
						El(278, '='),
						gl(279, 'span', yy),
						El(280, '"item-m"'),
						ml(),
						El(281, '>'),
						ml(),
						El(282, 'middle'),
						gl(283, 'span', gy),
						El(284, '</'),
						gl(285, 'span', my),
						El(286, 'li'),
						ml(),
						El(287, '>'),
						ml(),
						El(288, '\n'),
						gl(289, 'span', gy),
						El(290, '</'),
						gl(291, 'span', my),
						El(292, 'ul'),
						ml(),
						El(293, '>'),
						ml(),
						El(294, '\n'),
						gl(295, 'span', gy),
						El(296, '<'),
						gl(297, 'span', my),
						El(298, 'ul'),
						ml(),
						El(299, ' '),
						gl(300, 'span', by),
						El(301, 'class'),
						ml(),
						El(302, '='),
						gl(303, 'span', yy),
						El(304, '"col"'),
						ml(),
						El(305, '>'),
						ml(),
						El(306, '\n    '),
						gl(307, 'span', gy),
						El(308, '<'),
						gl(309, 'span', my),
						El(310, 'li'),
						ml(),
						El(311, '>'),
						ml(),
						El(312, 'default'),
						gl(313, 'span', gy),
						El(314, '</'),
						gl(315, 'span', my),
						El(316, 'li'),
						ml(),
						El(317, '>'),
						ml(),
						El(318, '\n    '),
						gl(319, 'span', gy),
						El(320, '<'),
						gl(321, 'span', my),
						El(322, 'li'),
						ml(),
						El(323, ' '),
						gl(324, 'span', by),
						El(325, 'class'),
						ml(),
						El(326, '='),
						gl(327, 'span', yy),
						El(328, '"item-b"'),
						ml(),
						El(329, '>'),
						ml(),
						El(330, 'bottom'),
						gl(331, 'span', gy),
						El(332, '</'),
						gl(333, 'span', my),
						El(334, 'li'),
						ml(),
						El(335, '>'),
						ml(),
						El(336, '\n'),
						gl(337, 'span', gy),
						El(338, '</'),
						gl(339, 'span', my),
						El(340, 'ul'),
						ml(),
						El(341, '>'),
						ml(),
						El(342, '\n'),
						gl(343, 'span', gy),
						El(344, '<'),
						gl(345, 'span', my),
						El(346, 'ul'),
						ml(),
						El(347, ' '),
						gl(348, 'span', by),
						El(349, 'class'),
						ml(),
						El(350, '='),
						gl(351, 'span', yy),
						El(352, '"col"'),
						ml(),
						El(353, '>'),
						ml(),
						El(354, '\n    '),
						gl(355, 'span', gy),
						El(356, '<'),
						gl(357, 'span', my),
						El(358, 'li'),
						ml(),
						El(359, '>'),
						ml(),
						El(360, 'default'),
						gl(361, 'span', gy),
						El(362, '</'),
						gl(363, 'span', my),
						El(364, 'li'),
						ml(),
						El(365, '>'),
						ml(),
						El(366, '\n    '),
						gl(367, 'span', gy),
						El(368, '<'),
						gl(369, 'span', my),
						El(370, 'li'),
						ml(),
						El(371, ' '),
						gl(372, 'span', by),
						El(373, 'class'),
						ml(),
						El(374, '='),
						gl(375, 'span', yy),
						El(376, '"item-cm"'),
						ml(),
						El(377, '>'),
						ml(),
						El(378, 'center middle'),
						gl(379, 'span', gy),
						El(380, '</'),
						gl(381, 'span', my),
						El(382, 'li'),
						ml(),
						El(383, '>'),
						ml(),
						El(384, '\n'),
						gl(385, 'span', gy),
						El(386, '</'),
						gl(387, 'span', my),
						El(388, 'ul'),
						ml(),
						El(389, '>'),
						ml(),
						El(390, '\n'),
						gl(391, 'span', gy),
						El(392, '<'),
						gl(393, 'span', my),
						El(394, 'ul'),
						ml(),
						El(395, ' '),
						gl(396, 'span', by),
						El(397, 'class'),
						ml(),
						El(398, '='),
						gl(399, 'span', yy),
						El(400, '"col"'),
						ml(),
						El(401, '>'),
						ml(),
						El(402, '\n    '),
						gl(403, 'span', gy),
						El(404, '<'),
						gl(405, 'span', my),
						El(406, 'li'),
						ml(),
						El(407, '>'),
						ml(),
						El(408, 'default'),
						gl(409, 'span', gy),
						El(410, '</'),
						gl(411, 'span', my),
						El(412, 'li'),
						ml(),
						El(413, '>'),
						ml(),
						El(414, '\n    '),
						gl(415, 'span', gy),
						El(416, '<'),
						gl(417, 'span', my),
						El(418, 'li'),
						ml(),
						El(419, ' '),
						gl(420, 'span', by),
						El(421, 'class'),
						ml(),
						El(422, '='),
						gl(423, 'span', yy),
						El(424, '"item-st"'),
						ml(),
						El(425, '>'),
						ml(),
						El(426, 'stretch'),
						gl(427, 'span', gy),
						El(428, '</'),
						gl(429, 'span', my),
						El(430, 'li'),
						ml(),
						El(431, '>'),
						ml(),
						El(432, '\n'),
						gl(433, 'span', gy),
						El(434, '</'),
						gl(435, 'span', my),
						El(436, 'ul'),
						ml(),
						El(437, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const $w = [1, 'item-order-2'],
				Bw = [1, 'item-order-1'];
			function qw(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Item Order'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use '),
						gl(6, 'code'),
						El(7, '.item-order-[1 - 12]'),
						ml(),
						El(8, ' classes to align children in a flex container.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'ul', aw),
						gl(11, 'li', $w),
						El(12, '1'),
						ml(),
						gl(13, 'li', Bw),
						El(14, '2'),
						ml(),
						ml(),
						gl(15, 'ul', cw),
						gl(16, 'li', $w),
						El(17, '1'),
						ml(),
						gl(18, 'li', Bw),
						El(19, '2'),
						ml(),
						ml(),
						ml(),
						gl(20, 'figure'),
						gl(21, 'pre', fy),
						El(22, '<ul '),
						gl(23, 'span', Ny),
						El(24, 'class'),
						ml(),
						El(25, '='),
						gl(26, 'span', Uy),
						El(27, '"row"'),
						ml(),
						El(28, '>\n    <'),
						gl(29, 'span', Ny),
						El(30, 'li'),
						ml(),
						El(31, ' '),
						gl(32, 'span', Ny),
						El(33, 'class'),
						ml(),
						El(34, '='),
						gl(35, 'span', Uy),
						El(36, '"item-order-2"'),
						ml(),
						El(37, '>1</'),
						gl(38, 'span', Ny),
						El(39, 'li'),
						ml(),
						El(40, '>\n    <'),
						gl(41, 'span', Ny),
						El(42, 'li'),
						ml(),
						El(43, ' '),
						gl(44, 'span', Ny),
						El(45, 'class'),
						ml(),
						El(46, '='),
						gl(47, 'span', Uy),
						El(48, '"item-order-1"'),
						ml(),
						El(49, '>2</'),
						gl(50, 'span', Ny),
						El(51, 'li'),
						ml(),
						El(52, '>\n</ul>\n<ul '),
						gl(53, 'span', Ny),
						El(54, 'class'),
						ml(),
						El(55, '='),
						gl(56, 'span', Uy),
						El(57, '"col"'),
						ml(),
						El(58, '>\n    <'),
						gl(59, 'span', Ny),
						El(60, 'li'),
						ml(),
						El(61, ' '),
						gl(62, 'span', Ny),
						El(63, 'class'),
						ml(),
						El(64, '='),
						gl(65, 'span', Uy),
						El(66, '"item-order-2"'),
						ml(),
						El(67, '>1</'),
						gl(68, 'span', Ny),
						El(69, 'li'),
						ml(),
						El(70, '>\n    <'),
						gl(71, 'span', Ny),
						El(72, 'li'),
						ml(),
						El(73, ' '),
						gl(74, 'span', Ny),
						El(75, 'class'),
						ml(),
						El(76, '='),
						gl(77, 'span', Uy),
						El(78, '"item-order-1"'),
						ml(),
						El(79, '>2</'),
						gl(80, 'span', Ny),
						El(81, 'li'),
						ml(),
						El(82, '>\n</ul>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			function Zw(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Item Row'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use an '),
						gl(6, 'code'),
						El(7, '.item-[l || c || r || t || m || b || cm || st]'),
						ml(),
						El(8, ' class to align ONE child in a '),
						gl(9, 'code'),
						El(10, '.row'),
						ml(),
						El(11, ' flex container.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'ul', aw),
						gl(14, 'li'),
						El(15, 'default'),
						ml(),
						gl(16, 'li', jw),
						El(17, 'left (default)'),
						ml(),
						ml(),
						gl(18, 'ul', aw),
						gl(19, 'li'),
						El(20, 'default'),
						ml(),
						gl(21, 'li', Dw),
						El(22, 'center'),
						ml(),
						ml(),
						gl(23, 'ul', aw),
						gl(24, 'li'),
						El(25, 'default'),
						ml(),
						gl(26, 'li', Nw),
						El(27, 'right'),
						ml(),
						ml(),
						gl(28, 'ul', aw),
						gl(29, 'li'),
						El(30, 'default'),
						ml(),
						gl(31, 'li', Uw),
						El(32, 'top (default)'),
						ml(),
						ml(),
						gl(33, 'ul', aw),
						gl(34, 'li'),
						El(35, 'default'),
						ml(),
						gl(36, 'li', Lw),
						El(37, 'middle'),
						ml(),
						ml(),
						gl(38, 'ul', aw),
						gl(39, 'li'),
						El(40, 'default'),
						ml(),
						gl(41, 'li', Hw),
						El(42, 'bottom'),
						ml(),
						ml(),
						gl(43, 'ul', aw),
						gl(44, 'li'),
						El(45, 'default'),
						ml(),
						gl(46, 'li', Fw),
						El(47, 'center middle'),
						ml(),
						ml(),
						gl(48, 'ul', aw),
						gl(49, 'li'),
						El(50, 'default'),
						ml(),
						gl(51, 'li', zw),
						El(52, 'stretch'),
						ml(),
						ml(),
						ml(),
						gl(53, 'figure'),
						gl(54, 'pre', fy),
						gl(55, 'span', gy),
						El(56, '<'),
						gl(57, 'span', my),
						El(58, 'ul'),
						ml(),
						El(59, ' '),
						gl(60, 'span', by),
						El(61, 'class'),
						ml(),
						El(62, '='),
						gl(63, 'span', yy),
						El(64, '"row"'),
						ml(),
						El(65, '>'),
						ml(),
						El(66, '\n    '),
						gl(67, 'span', gy),
						El(68, '<'),
						gl(69, 'span', my),
						El(70, 'li'),
						ml(),
						El(71, '>'),
						ml(),
						El(72, 'default'),
						gl(73, 'span', gy),
						El(74, '</'),
						gl(75, 'span', my),
						El(76, 'li'),
						ml(),
						El(77, '>'),
						ml(),
						El(78, '\n    '),
						gl(79, 'span', gy),
						El(80, '<'),
						gl(81, 'span', my),
						El(82, 'li'),
						ml(),
						El(83, ' '),
						gl(84, 'span', by),
						El(85, 'class'),
						ml(),
						El(86, '='),
						gl(87, 'span', yy),
						El(88, '"item-l"'),
						ml(),
						El(89, '>'),
						ml(),
						El(90, 'left (default)'),
						gl(91, 'span', gy),
						El(92, '</'),
						gl(93, 'span', my),
						El(94, 'li'),
						ml(),
						El(95, '>'),
						ml(),
						El(96, '\n'),
						gl(97, 'span', gy),
						El(98, '</'),
						gl(99, 'span', my),
						El(100, 'ul'),
						ml(),
						El(101, '>'),
						ml(),
						El(102, '\n'),
						gl(103, 'span', gy),
						El(104, '<'),
						gl(105, 'span', my),
						El(106, 'ul'),
						ml(),
						El(107, ' '),
						gl(108, 'span', by),
						El(109, 'class'),
						ml(),
						El(110, '='),
						gl(111, 'span', yy),
						El(112, '"row"'),
						ml(),
						El(113, '>'),
						ml(),
						El(114, '\n    '),
						gl(115, 'span', gy),
						El(116, '<'),
						gl(117, 'span', my),
						El(118, 'li'),
						ml(),
						El(119, '>'),
						ml(),
						El(120, 'default'),
						gl(121, 'span', gy),
						El(122, '</'),
						gl(123, 'span', my),
						El(124, 'li'),
						ml(),
						El(125, '>'),
						ml(),
						El(126, '\n    '),
						gl(127, 'span', gy),
						El(128, '<'),
						gl(129, 'span', my),
						El(130, 'li'),
						ml(),
						El(131, ' '),
						gl(132, 'span', by),
						El(133, 'class'),
						ml(),
						El(134, '='),
						gl(135, 'span', yy),
						El(136, '"item-c"'),
						ml(),
						El(137, '>'),
						ml(),
						El(138, 'center'),
						gl(139, 'span', gy),
						El(140, '</'),
						gl(141, 'span', my),
						El(142, 'li'),
						ml(),
						El(143, '>'),
						ml(),
						El(144, '\n'),
						gl(145, 'span', gy),
						El(146, '</'),
						gl(147, 'span', my),
						El(148, 'ul'),
						ml(),
						El(149, '>'),
						ml(),
						El(150, '\n'),
						gl(151, 'span', gy),
						El(152, '<'),
						gl(153, 'span', my),
						El(154, 'ul'),
						ml(),
						El(155, ' '),
						gl(156, 'span', by),
						El(157, 'class'),
						ml(),
						El(158, '='),
						gl(159, 'span', yy),
						El(160, '"row"'),
						ml(),
						El(161, '>'),
						ml(),
						El(162, '\n    '),
						gl(163, 'span', gy),
						El(164, '<'),
						gl(165, 'span', my),
						El(166, 'li'),
						ml(),
						El(167, '>'),
						ml(),
						El(168, 'default'),
						gl(169, 'span', gy),
						El(170, '</'),
						gl(171, 'span', my),
						El(172, 'li'),
						ml(),
						El(173, '>'),
						ml(),
						El(174, '\n    '),
						gl(175, 'span', gy),
						El(176, '<'),
						gl(177, 'span', my),
						El(178, 'li'),
						ml(),
						El(179, ' '),
						gl(180, 'span', by),
						El(181, 'class'),
						ml(),
						El(182, '='),
						gl(183, 'span', yy),
						El(184, '"item-r"'),
						ml(),
						El(185, '>'),
						ml(),
						El(186, 'right'),
						gl(187, 'span', gy),
						El(188, '</'),
						gl(189, 'span', my),
						El(190, 'li'),
						ml(),
						El(191, '>'),
						ml(),
						El(192, '\n'),
						gl(193, 'span', gy),
						El(194, '</'),
						gl(195, 'span', my),
						El(196, 'ul'),
						ml(),
						El(197, '>'),
						ml(),
						El(198, '\n'),
						gl(199, 'span', gy),
						El(200, '<'),
						gl(201, 'span', my),
						El(202, 'ul'),
						ml(),
						El(203, ' '),
						gl(204, 'span', by),
						El(205, 'class'),
						ml(),
						El(206, '='),
						gl(207, 'span', yy),
						El(208, '"row"'),
						ml(),
						El(209, '>'),
						ml(),
						El(210, '\n    '),
						gl(211, 'span', gy),
						El(212, '<'),
						gl(213, 'span', my),
						El(214, 'li'),
						ml(),
						El(215, '>'),
						ml(),
						El(216, 'default'),
						gl(217, 'span', gy),
						El(218, '</'),
						gl(219, 'span', my),
						El(220, 'li'),
						ml(),
						El(221, '>'),
						ml(),
						El(222, '\n    '),
						gl(223, 'span', gy),
						El(224, '<'),
						gl(225, 'span', my),
						El(226, 'li'),
						ml(),
						El(227, ' '),
						gl(228, 'span', by),
						El(229, 'class'),
						ml(),
						El(230, '='),
						gl(231, 'span', yy),
						El(232, '"item-t"'),
						ml(),
						El(233, '>'),
						ml(),
						El(234, 'top (default)'),
						gl(235, 'span', gy),
						El(236, '</'),
						gl(237, 'span', my),
						El(238, 'li'),
						ml(),
						El(239, '>'),
						ml(),
						El(240, '\n'),
						gl(241, 'span', gy),
						El(242, '</'),
						gl(243, 'span', my),
						El(244, 'ul'),
						ml(),
						El(245, '>'),
						ml(),
						El(246, '\n'),
						gl(247, 'span', gy),
						El(248, '<'),
						gl(249, 'span', my),
						El(250, 'ul'),
						ml(),
						El(251, ' '),
						gl(252, 'span', by),
						El(253, 'class'),
						ml(),
						El(254, '='),
						gl(255, 'span', yy),
						El(256, '"row"'),
						ml(),
						El(257, '>'),
						ml(),
						El(258, '\n    '),
						gl(259, 'span', gy),
						El(260, '<'),
						gl(261, 'span', my),
						El(262, 'li'),
						ml(),
						El(263, '>'),
						ml(),
						El(264, 'default'),
						gl(265, 'span', gy),
						El(266, '</'),
						gl(267, 'span', my),
						El(268, 'li'),
						ml(),
						El(269, '>'),
						ml(),
						El(270, '\n    '),
						gl(271, 'span', gy),
						El(272, '<'),
						gl(273, 'span', my),
						El(274, 'li'),
						ml(),
						El(275, ' '),
						gl(276, 'span', by),
						El(277, 'class'),
						ml(),
						El(278, '='),
						gl(279, 'span', yy),
						El(280, '"item-m"'),
						ml(),
						El(281, '>'),
						ml(),
						El(282, 'middle'),
						gl(283, 'span', gy),
						El(284, '</'),
						gl(285, 'span', my),
						El(286, 'li'),
						ml(),
						El(287, '>'),
						ml(),
						El(288, '\n'),
						gl(289, 'span', gy),
						El(290, '</'),
						gl(291, 'span', my),
						El(292, 'ul'),
						ml(),
						El(293, '>'),
						ml(),
						El(294, '\n'),
						gl(295, 'span', gy),
						El(296, '<'),
						gl(297, 'span', my),
						El(298, 'ul'),
						ml(),
						El(299, ' '),
						gl(300, 'span', by),
						El(301, 'class'),
						ml(),
						El(302, '='),
						gl(303, 'span', yy),
						El(304, '"row"'),
						ml(),
						El(305, '>'),
						ml(),
						El(306, '\n    '),
						gl(307, 'span', gy),
						El(308, '<'),
						gl(309, 'span', my),
						El(310, 'li'),
						ml(),
						El(311, '>'),
						ml(),
						El(312, 'default'),
						gl(313, 'span', gy),
						El(314, '</'),
						gl(315, 'span', my),
						El(316, 'li'),
						ml(),
						El(317, '>'),
						ml(),
						El(318, '\n    '),
						gl(319, 'span', gy),
						El(320, '<'),
						gl(321, 'span', my),
						El(322, 'li'),
						ml(),
						El(323, ' '),
						gl(324, 'span', by),
						El(325, 'class'),
						ml(),
						El(326, '='),
						gl(327, 'span', yy),
						El(328, '"item-b"'),
						ml(),
						El(329, '>'),
						ml(),
						El(330, 'bottom'),
						gl(331, 'span', gy),
						El(332, '</'),
						gl(333, 'span', my),
						El(334, 'li'),
						ml(),
						El(335, '>'),
						ml(),
						El(336, '\n'),
						gl(337, 'span', gy),
						El(338, '</'),
						gl(339, 'span', my),
						El(340, 'ul'),
						ml(),
						El(341, '>'),
						ml(),
						El(342, '\n'),
						gl(343, 'span', gy),
						El(344, '<'),
						gl(345, 'span', my),
						El(346, 'ul'),
						ml(),
						El(347, ' '),
						gl(348, 'span', by),
						El(349, 'class'),
						ml(),
						El(350, '='),
						gl(351, 'span', yy),
						El(352, '"row"'),
						ml(),
						El(353, '>'),
						ml(),
						El(354, '\n    '),
						gl(355, 'span', gy),
						El(356, '<'),
						gl(357, 'span', my),
						El(358, 'li'),
						ml(),
						El(359, '>'),
						ml(),
						El(360, 'default'),
						gl(361, 'span', gy),
						El(362, '</'),
						gl(363, 'span', my),
						El(364, 'li'),
						ml(),
						El(365, '>'),
						ml(),
						El(366, '\n    '),
						gl(367, 'span', gy),
						El(368, '<'),
						gl(369, 'span', my),
						El(370, 'li'),
						ml(),
						El(371, ' '),
						gl(372, 'span', by),
						El(373, 'class'),
						ml(),
						El(374, '='),
						gl(375, 'span', yy),
						El(376, '"item-cm"'),
						ml(),
						El(377, '>'),
						ml(),
						El(378, 'center middle'),
						gl(379, 'span', gy),
						El(380, '</'),
						gl(381, 'span', my),
						El(382, 'li'),
						ml(),
						El(383, '>'),
						ml(),
						El(384, '\n'),
						gl(385, 'span', gy),
						El(386, '</'),
						gl(387, 'span', my),
						El(388, 'ul'),
						ml(),
						El(389, '>'),
						ml(),
						El(390, '\n'),
						gl(391, 'span', gy),
						El(392, '<'),
						gl(393, 'span', my),
						El(394, 'ul'),
						ml(),
						El(395, ' '),
						gl(396, 'span', by),
						El(397, 'class'),
						ml(),
						El(398, '='),
						gl(399, 'span', yy),
						El(400, '"row"'),
						ml(),
						El(401, '>'),
						ml(),
						El(402, '\n    '),
						gl(403, 'span', gy),
						El(404, '<'),
						gl(405, 'span', my),
						El(406, 'li'),
						ml(),
						El(407, '>'),
						ml(),
						El(408, 'default'),
						gl(409, 'span', gy),
						El(410, '</'),
						gl(411, 'span', my),
						El(412, 'li'),
						ml(),
						El(413, '>'),
						ml(),
						El(414, '\n    '),
						gl(415, 'span', gy),
						El(416, '<'),
						gl(417, 'span', my),
						El(418, 'li'),
						ml(),
						El(419, ' '),
						gl(420, 'span', by),
						El(421, 'class'),
						ml(),
						El(422, '='),
						gl(423, 'span', yy),
						El(424, '"item-st"'),
						ml(),
						El(425, '>'),
						ml(),
						El(426, 'stretch'),
						gl(427, 'span', gy),
						El(428, '</'),
						gl(429, 'span', my),
						El(430, 'li'),
						ml(),
						El(431, '>'),
						ml(),
						El(432, '\n'),
						gl(433, 'span', gy),
						El(434, '</'),
						gl(435, 'span', my),
						El(436, 'ul'),
						ml(),
						El(437, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Gw = [1, 'item-g-1'],
				Ww = [1, 'item-s-1'],
				Qw = [1, 'item-gs-1'];
			function Yw(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Item Size'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use '),
						gl(6, 'code'),
						El(7, '.item-[g || s || gs]-[1 - 12]'),
						ml(),
						El(8, ' classes to grow and/or shrink children in a flex container.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'ul', aw),
						gl(11, 'li'),
						El(12, 'default'),
						ml(),
						gl(13, 'li', Gw),
						El(14, 'grow'),
						ml(),
						ml(),
						gl(15, 'ul', aw),
						gl(16, 'li'),
						El(17, 'default'),
						ml(),
						gl(18, 'li', Ww),
						El(19, 'shrink'),
						ml(),
						ml(),
						gl(20, 'ul', aw),
						gl(21, 'li'),
						El(22, 'default'),
						ml(),
						gl(23, 'li', Qw),
						El(24, 'grow & shrink'),
						ml(),
						ml(),
						gl(25, 'ul', cw),
						gl(26, 'li'),
						El(27, 'default'),
						ml(),
						gl(28, 'li', Gw),
						El(29, 'grow'),
						ml(),
						ml(),
						gl(30, 'ul', cw),
						gl(31, 'li'),
						El(32, 'default'),
						ml(),
						gl(33, 'li', Ww),
						El(34, 'shrink'),
						ml(),
						ml(),
						gl(35, 'ul', cw),
						gl(36, 'li'),
						El(37, 'default'),
						ml(),
						gl(38, 'li', Qw),
						El(39, 'grow & shrink'),
						ml(),
						ml(),
						ml(),
						gl(40, 'figure'),
						gl(41, 'pre', fy),
						gl(42, 'span', gy),
						El(43, '<'),
						gl(44, 'span', my),
						El(45, 'ul'),
						ml(),
						El(46, ' '),
						gl(47, 'span', by),
						El(48, 'class'),
						ml(),
						El(49, '='),
						gl(50, 'span', yy),
						El(51, '"row"'),
						ml(),
						El(52, '>'),
						ml(),
						El(53, '\n    '),
						gl(54, 'span', gy),
						El(55, '<'),
						gl(56, 'span', my),
						El(57, 'li'),
						ml(),
						El(58, '>'),
						ml(),
						El(59, 'default'),
						gl(60, 'span', gy),
						El(61, '</'),
						gl(62, 'span', my),
						El(63, 'li'),
						ml(),
						El(64, '>'),
						ml(),
						El(65, '\n    '),
						gl(66, 'span', gy),
						El(67, '<'),
						gl(68, 'span', my),
						El(69, 'li'),
						ml(),
						El(70, ' '),
						gl(71, 'span', by),
						El(72, 'class'),
						ml(),
						El(73, '='),
						gl(74, 'span', yy),
						El(75, '"item-g-1"'),
						ml(),
						El(76, '>'),
						ml(),
						El(77, 'grow'),
						gl(78, 'span', gy),
						El(79, '</'),
						gl(80, 'span', my),
						El(81, 'li'),
						ml(),
						El(82, '>'),
						ml(),
						El(83, '\n'),
						gl(84, 'span', gy),
						El(85, '</'),
						gl(86, 'span', my),
						El(87, 'ul'),
						ml(),
						El(88, '>'),
						ml(),
						El(89, '\n'),
						gl(90, 'span', gy),
						El(91, '<'),
						gl(92, 'span', my),
						El(93, 'ul'),
						ml(),
						El(94, ' '),
						gl(95, 'span', by),
						El(96, 'class'),
						ml(),
						El(97, '='),
						gl(98, 'span', yy),
						El(99, '"row"'),
						ml(),
						El(100, '>'),
						ml(),
						El(101, '\n    '),
						gl(102, 'span', gy),
						El(103, '<'),
						gl(104, 'span', my),
						El(105, 'li'),
						ml(),
						El(106, '>'),
						ml(),
						El(107, 'default'),
						gl(108, 'span', gy),
						El(109, '</'),
						gl(110, 'span', my),
						El(111, 'li'),
						ml(),
						El(112, '>'),
						ml(),
						El(113, '\n    '),
						gl(114, 'span', gy),
						El(115, '<'),
						gl(116, 'span', my),
						El(117, 'li'),
						ml(),
						El(118, ' '),
						gl(119, 'span', by),
						El(120, 'class'),
						ml(),
						El(121, '='),
						gl(122, 'span', yy),
						El(123, '"item-s-1"'),
						ml(),
						El(124, '>'),
						ml(),
						El(125, 'shrink'),
						gl(126, 'span', gy),
						El(127, '</'),
						gl(128, 'span', my),
						El(129, 'li'),
						ml(),
						El(130, '>'),
						ml(),
						El(131, '\n'),
						gl(132, 'span', gy),
						El(133, '</'),
						gl(134, 'span', my),
						El(135, 'ul'),
						ml(),
						El(136, '>'),
						ml(),
						El(137, '\n'),
						gl(138, 'span', gy),
						El(139, '<'),
						gl(140, 'span', my),
						El(141, 'ul'),
						ml(),
						El(142, ' '),
						gl(143, 'span', by),
						El(144, 'class'),
						ml(),
						El(145, '='),
						gl(146, 'span', yy),
						El(147, '"row"'),
						ml(),
						El(148, '>'),
						ml(),
						El(149, '\n    '),
						gl(150, 'span', gy),
						El(151, '<'),
						gl(152, 'span', my),
						El(153, 'li'),
						ml(),
						El(154, '>'),
						ml(),
						El(155, 'default'),
						gl(156, 'span', gy),
						El(157, '</'),
						gl(158, 'span', my),
						El(159, 'li'),
						ml(),
						El(160, '>'),
						ml(),
						El(161, '\n    '),
						gl(162, 'span', gy),
						El(163, '<'),
						gl(164, 'span', my),
						El(165, 'li'),
						ml(),
						El(166, ' '),
						gl(167, 'span', by),
						El(168, 'class'),
						ml(),
						El(169, '='),
						gl(170, 'span', yy),
						El(171, '"item-gs-1"'),
						ml(),
						El(172, '>'),
						ml(),
						El(173, 'grow &amp; shrink'),
						gl(174, 'span', gy),
						El(175, '</'),
						gl(176, 'span', my),
						El(177, 'li'),
						ml(),
						El(178, '>'),
						ml(),
						El(179, '\n'),
						gl(180, 'span', gy),
						El(181, '</'),
						gl(182, 'span', my),
						El(183, 'ul'),
						ml(),
						El(184, '>'),
						ml(),
						El(185, '\n'),
						gl(186, 'span', gy),
						El(187, '<'),
						gl(188, 'span', my),
						El(189, 'ul'),
						ml(),
						El(190, ' '),
						gl(191, 'span', by),
						El(192, 'class'),
						ml(),
						El(193, '='),
						gl(194, 'span', yy),
						El(195, '"col"'),
						ml(),
						El(196, '>'),
						ml(),
						El(197, '\n    '),
						gl(198, 'span', gy),
						El(199, '<'),
						gl(200, 'span', my),
						El(201, 'li'),
						ml(),
						El(202, '>'),
						ml(),
						El(203, 'default'),
						gl(204, 'span', gy),
						El(205, '</'),
						gl(206, 'span', my),
						El(207, 'li'),
						ml(),
						El(208, '>'),
						ml(),
						El(209, '\n    '),
						gl(210, 'span', gy),
						El(211, '<'),
						gl(212, 'span', my),
						El(213, 'li'),
						ml(),
						El(214, ' '),
						gl(215, 'span', by),
						El(216, 'class'),
						ml(),
						El(217, '='),
						gl(218, 'span', yy),
						El(219, '"item-g-1"'),
						ml(),
						El(220, '>'),
						ml(),
						El(221, 'grow'),
						gl(222, 'span', gy),
						El(223, '</'),
						gl(224, 'span', my),
						El(225, 'li'),
						ml(),
						El(226, '>'),
						ml(),
						El(227, '\n'),
						gl(228, 'span', gy),
						El(229, '</'),
						gl(230, 'span', my),
						El(231, 'ul'),
						ml(),
						El(232, '>'),
						ml(),
						El(233, '\n'),
						gl(234, 'span', gy),
						El(235, '<'),
						gl(236, 'span', my),
						El(237, 'ul'),
						ml(),
						El(238, ' '),
						gl(239, 'span', by),
						El(240, 'class'),
						ml(),
						El(241, '='),
						gl(242, 'span', yy),
						El(243, '"col"'),
						ml(),
						El(244, '>'),
						ml(),
						El(245, '\n    '),
						gl(246, 'span', gy),
						El(247, '<'),
						gl(248, 'span', my),
						El(249, 'li'),
						ml(),
						El(250, '>'),
						ml(),
						El(251, 'default'),
						gl(252, 'span', gy),
						El(253, '</'),
						gl(254, 'span', my),
						El(255, 'li'),
						ml(),
						El(256, '>'),
						ml(),
						El(257, '\n    '),
						gl(258, 'span', gy),
						El(259, '<'),
						gl(260, 'span', my),
						El(261, 'li'),
						ml(),
						El(262, ' '),
						gl(263, 'span', by),
						El(264, 'class'),
						ml(),
						El(265, '='),
						gl(266, 'span', yy),
						El(267, '"item-s-1"'),
						ml(),
						El(268, '>'),
						ml(),
						El(269, 'shrink'),
						gl(270, 'span', gy),
						El(271, '</'),
						gl(272, 'span', my),
						El(273, 'li'),
						ml(),
						El(274, '>'),
						ml(),
						El(275, '\n'),
						gl(276, 'span', gy),
						El(277, '</'),
						gl(278, 'span', my),
						El(279, 'ul'),
						ml(),
						El(280, '>'),
						ml(),
						El(281, '\n'),
						gl(282, 'span', gy),
						El(283, '<'),
						gl(284, 'span', my),
						El(285, 'ul'),
						ml(),
						El(286, ' '),
						gl(287, 'span', by),
						El(288, 'class'),
						ml(),
						El(289, '='),
						gl(290, 'span', yy),
						El(291, '"col"'),
						ml(),
						El(292, '>'),
						ml(),
						El(293, '\n    '),
						gl(294, 'span', gy),
						El(295, '<'),
						gl(296, 'span', my),
						El(297, 'li'),
						ml(),
						El(298, '>'),
						ml(),
						El(299, 'default'),
						gl(300, 'span', gy),
						El(301, '</'),
						gl(302, 'span', my),
						El(303, 'li'),
						ml(),
						El(304, '>'),
						ml(),
						El(305, '\n    '),
						gl(306, 'span', gy),
						El(307, '<'),
						gl(308, 'span', my),
						El(309, 'li'),
						ml(),
						El(310, ' '),
						gl(311, 'span', by),
						El(312, 'class'),
						ml(),
						El(313, '='),
						gl(314, 'span', yy),
						El(315, '"item-gs-1"'),
						ml(),
						El(316, '>'),
						ml(),
						El(317, 'grow &amp; shrink'),
						gl(318, 'span', gy),
						El(319, '</'),
						gl(320, 'span', my),
						El(321, 'li'),
						ml(),
						El(322, '>'),
						ml(),
						El(323, '\n'),
						gl(324, 'span', gy),
						El(325, '</'),
						gl(326, 'span', my),
						El(327, 'ul'),
						ml(),
						El(328, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Jw = [1, 'col', 'wrap-c'],
				Kw = [1, 'col', 'wrap-l'],
				Xw = [1, 'col', 'wrap-r'],
				e_ = [1, 'col', 'wrap-sa'],
				t_ = [1, 'col', 'wrap-sb'],
				n_ = [1, 'col', 'wrap-st'];
			function r_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Wrap Column'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use a '),
						gl(6, 'code'),
						El(7, '.wrap-[c || l || r || sa || sb || st]'),
						ml(),
						El(8, ' class to align multi-column items in a '),
						gl(9, 'code'),
						El(10, '.col'),
						ml(),
						El(11, ' flex container.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'ul', Jw),
						gl(14, 'li'),
						El(15, 'center'),
						ml(),
						gl(16, 'li'),
						El(17, 'center'),
						ml(),
						gl(18, 'li'),
						El(19, 'center'),
						ml(),
						ml(),
						gl(20, 'ul', Kw),
						gl(21, 'li'),
						El(22, 'left (default)'),
						ml(),
						gl(23, 'li'),
						El(24, 'left (default)'),
						ml(),
						gl(25, 'li'),
						El(26, 'left (default)'),
						ml(),
						ml(),
						gl(27, 'ul', Xw),
						gl(28, 'li'),
						El(29, 'right'),
						ml(),
						gl(30, 'li'),
						El(31, 'right'),
						ml(),
						gl(32, 'li'),
						El(33, 'right'),
						ml(),
						ml(),
						gl(34, 'ul', e_),
						gl(35, 'li'),
						El(36, 'space around'),
						ml(),
						gl(37, 'li'),
						El(38, 'space around'),
						ml(),
						gl(39, 'li'),
						El(40, 'space around'),
						ml(),
						ml(),
						gl(41, 'ul', t_),
						gl(42, 'li'),
						El(43, 'space between'),
						ml(),
						gl(44, 'li'),
						El(45, 'space between'),
						ml(),
						gl(46, 'li'),
						El(47, 'space between'),
						ml(),
						ml(),
						gl(48, 'ul', n_),
						gl(49, 'li'),
						El(50, 'stretch'),
						ml(),
						gl(51, 'li'),
						El(52, 'stretch'),
						ml(),
						gl(53, 'li'),
						El(54, 'stretch'),
						ml(),
						ml(),
						ml(),
						gl(55, 'figure'),
						gl(56, 'pre', fy),
						gl(57, 'span', gy),
						El(58, '<'),
						gl(59, 'span', my),
						El(60, 'ul'),
						ml(),
						El(61, ' '),
						gl(62, 'span', by),
						El(63, 'class'),
						ml(),
						El(64, '='),
						gl(65, 'span', yy),
						El(66, '"col wrap-c"'),
						ml(),
						El(67, '>'),
						ml(),
						El(68, '\n    '),
						gl(69, 'span', gy),
						El(70, '<'),
						gl(71, 'span', my),
						El(72, 'li'),
						ml(),
						El(73, '>'),
						ml(),
						El(74, 'center'),
						gl(75, 'span', gy),
						El(76, '</'),
						gl(77, 'span', my),
						El(78, 'li'),
						ml(),
						El(79, '>'),
						ml(),
						El(80, '\n    '),
						gl(81, 'span', gy),
						El(82, '<'),
						gl(83, 'span', my),
						El(84, 'li'),
						ml(),
						El(85, '>'),
						ml(),
						El(86, 'center'),
						gl(87, 'span', gy),
						El(88, '</'),
						gl(89, 'span', my),
						El(90, 'li'),
						ml(),
						El(91, '>'),
						ml(),
						El(92, '\n    '),
						gl(93, 'span', gy),
						El(94, '<'),
						gl(95, 'span', my),
						El(96, 'li'),
						ml(),
						El(97, '>'),
						ml(),
						El(98, 'center'),
						gl(99, 'span', gy),
						El(100, '</'),
						gl(101, 'span', my),
						El(102, 'li'),
						ml(),
						El(103, '>'),
						ml(),
						El(104, '\n'),
						gl(105, 'span', gy),
						El(106, '</'),
						gl(107, 'span', my),
						El(108, 'ul'),
						ml(),
						El(109, '>'),
						ml(),
						El(110, '\n'),
						gl(111, 'span', gy),
						El(112, '<'),
						gl(113, 'span', my),
						El(114, 'ul'),
						ml(),
						El(115, ' '),
						gl(116, 'span', by),
						El(117, 'class'),
						ml(),
						El(118, '='),
						gl(119, 'span', yy),
						El(120, '"col wrap-l"'),
						ml(),
						El(121, '>'),
						ml(),
						El(122, '\n    '),
						gl(123, 'span', gy),
						El(124, '<'),
						gl(125, 'span', my),
						El(126, 'li'),
						ml(),
						El(127, '>'),
						ml(),
						El(128, 'left (default)'),
						gl(129, 'span', gy),
						El(130, '</'),
						gl(131, 'span', my),
						El(132, 'li'),
						ml(),
						El(133, '>'),
						ml(),
						El(134, '\n    '),
						gl(135, 'span', gy),
						El(136, '<'),
						gl(137, 'span', my),
						El(138, 'li'),
						ml(),
						El(139, '>'),
						ml(),
						El(140, 'left (default)'),
						gl(141, 'span', gy),
						El(142, '</'),
						gl(143, 'span', my),
						El(144, 'li'),
						ml(),
						El(145, '>'),
						ml(),
						El(146, '\n    '),
						gl(147, 'span', gy),
						El(148, '<'),
						gl(149, 'span', my),
						El(150, 'li'),
						ml(),
						El(151, '>'),
						ml(),
						El(152, 'left (default)'),
						gl(153, 'span', gy),
						El(154, '</'),
						gl(155, 'span', my),
						El(156, 'li'),
						ml(),
						El(157, '>'),
						ml(),
						El(158, '\n'),
						gl(159, 'span', gy),
						El(160, '</'),
						gl(161, 'span', my),
						El(162, 'ul'),
						ml(),
						El(163, '>'),
						ml(),
						El(164, '\n'),
						gl(165, 'span', gy),
						El(166, '<'),
						gl(167, 'span', my),
						El(168, 'ul'),
						ml(),
						El(169, ' '),
						gl(170, 'span', by),
						El(171, 'class'),
						ml(),
						El(172, '='),
						gl(173, 'span', yy),
						El(174, '"col wrap-r"'),
						ml(),
						El(175, '>'),
						ml(),
						El(176, '\n    '),
						gl(177, 'span', gy),
						El(178, '<'),
						gl(179, 'span', my),
						El(180, 'li'),
						ml(),
						El(181, '>'),
						ml(),
						El(182, 'right'),
						gl(183, 'span', gy),
						El(184, '</'),
						gl(185, 'span', my),
						El(186, 'li'),
						ml(),
						El(187, '>'),
						ml(),
						El(188, '\n    '),
						gl(189, 'span', gy),
						El(190, '<'),
						gl(191, 'span', my),
						El(192, 'li'),
						ml(),
						El(193, '>'),
						ml(),
						El(194, 'right'),
						gl(195, 'span', gy),
						El(196, '</'),
						gl(197, 'span', my),
						El(198, 'li'),
						ml(),
						El(199, '>'),
						ml(),
						El(200, '\n    '),
						gl(201, 'span', gy),
						El(202, '<'),
						gl(203, 'span', my),
						El(204, 'li'),
						ml(),
						El(205, '>'),
						ml(),
						El(206, 'right'),
						gl(207, 'span', gy),
						El(208, '</'),
						gl(209, 'span', my),
						El(210, 'li'),
						ml(),
						El(211, '>'),
						ml(),
						El(212, '\n'),
						gl(213, 'span', gy),
						El(214, '</'),
						gl(215, 'span', my),
						El(216, 'ul'),
						ml(),
						El(217, '>'),
						ml(),
						El(218, '\n'),
						gl(219, 'span', gy),
						El(220, '<'),
						gl(221, 'span', my),
						El(222, 'ul'),
						ml(),
						El(223, ' '),
						gl(224, 'span', by),
						El(225, 'class'),
						ml(),
						El(226, '='),
						gl(227, 'span', yy),
						El(228, '"col wrap-sa"'),
						ml(),
						El(229, '>'),
						ml(),
						El(230, '\n    '),
						gl(231, 'span', gy),
						El(232, '<'),
						gl(233, 'span', my),
						El(234, 'li'),
						ml(),
						El(235, '>'),
						ml(),
						El(236, 'space around'),
						gl(237, 'span', gy),
						El(238, '</'),
						gl(239, 'span', my),
						El(240, 'li'),
						ml(),
						El(241, '>'),
						ml(),
						El(242, '\n    '),
						gl(243, 'span', gy),
						El(244, '<'),
						gl(245, 'span', my),
						El(246, 'li'),
						ml(),
						El(247, '>'),
						ml(),
						El(248, 'space around'),
						gl(249, 'span', gy),
						El(250, '</'),
						gl(251, 'span', my),
						El(252, 'li'),
						ml(),
						El(253, '>'),
						ml(),
						El(254, '\n    '),
						gl(255, 'span', gy),
						El(256, '<'),
						gl(257, 'span', my),
						El(258, 'li'),
						ml(),
						El(259, '>'),
						ml(),
						El(260, 'space around'),
						gl(261, 'span', gy),
						El(262, '</'),
						gl(263, 'span', my),
						El(264, 'li'),
						ml(),
						El(265, '>'),
						ml(),
						El(266, '\n'),
						gl(267, 'span', gy),
						El(268, '</'),
						gl(269, 'span', my),
						El(270, 'ul'),
						ml(),
						El(271, '>'),
						ml(),
						El(272, '\n'),
						gl(273, 'span', gy),
						El(274, '<'),
						gl(275, 'span', my),
						El(276, 'ul'),
						ml(),
						El(277, ' '),
						gl(278, 'span', by),
						El(279, 'class'),
						ml(),
						El(280, '='),
						gl(281, 'span', yy),
						El(282, '"col wrap-sb"'),
						ml(),
						El(283, '>'),
						ml(),
						El(284, '\n    '),
						gl(285, 'span', gy),
						El(286, '<'),
						gl(287, 'span', my),
						El(288, 'li'),
						ml(),
						El(289, '>'),
						ml(),
						El(290, 'space between'),
						gl(291, 'span', gy),
						El(292, '</'),
						gl(293, 'span', my),
						El(294, 'li'),
						ml(),
						El(295, '>'),
						ml(),
						El(296, '\n    '),
						gl(297, 'span', gy),
						El(298, '<'),
						gl(299, 'span', my),
						El(300, 'li'),
						ml(),
						El(301, '>'),
						ml(),
						El(302, 'space between'),
						gl(303, 'span', gy),
						El(304, '</'),
						gl(305, 'span', my),
						El(306, 'li'),
						ml(),
						El(307, '>'),
						ml(),
						El(308, '\n    '),
						gl(309, 'span', gy),
						El(310, '<'),
						gl(311, 'span', my),
						El(312, 'li'),
						ml(),
						El(313, '>'),
						ml(),
						El(314, 'space between'),
						gl(315, 'span', gy),
						El(316, '</'),
						gl(317, 'span', my),
						El(318, 'li'),
						ml(),
						El(319, '>'),
						ml(),
						El(320, '\n'),
						gl(321, 'span', gy),
						El(322, '</'),
						gl(323, 'span', my),
						El(324, 'ul'),
						ml(),
						El(325, '>'),
						ml(),
						El(326, '\n'),
						gl(327, 'span', gy),
						El(328, '<'),
						gl(329, 'span', my),
						El(330, 'ul'),
						ml(),
						El(331, ' '),
						gl(332, 'span', by),
						El(333, 'class'),
						ml(),
						El(334, '='),
						gl(335, 'span', yy),
						El(336, '"col wrap-st"'),
						ml(),
						El(337, '>'),
						ml(),
						El(338, '\n    '),
						gl(339, 'span', gy),
						El(340, '<'),
						gl(341, 'span', my),
						El(342, 'li'),
						ml(),
						El(343, '>'),
						ml(),
						El(344, 'stretch'),
						gl(345, 'span', gy),
						El(346, '</'),
						gl(347, 'span', my),
						El(348, 'li'),
						ml(),
						El(349, '>'),
						ml(),
						El(350, '\n    '),
						gl(351, 'span', gy),
						El(352, '<'),
						gl(353, 'span', my),
						El(354, 'li'),
						ml(),
						El(355, '>'),
						ml(),
						El(356, 'stretch'),
						gl(357, 'span', gy),
						El(358, '</'),
						gl(359, 'span', my),
						El(360, 'li'),
						ml(),
						El(361, '>'),
						ml(),
						El(362, '\n    '),
						gl(363, 'span', gy),
						El(364, '<'),
						gl(365, 'span', my),
						El(366, 'li'),
						ml(),
						El(367, '>'),
						ml(),
						El(368, 'stretch'),
						gl(369, 'span', gy),
						El(370, '</'),
						gl(371, 'span', my),
						El(372, 'li'),
						ml(),
						El(373, '>'),
						ml(),
						El(374, '\n'),
						gl(375, 'span', gy),
						El(376, '</'),
						gl(377, 'span', my),
						El(378, 'ul'),
						ml(),
						El(379, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const s_ = [1, 'row', 'wrap-m'],
				o_ = [1, 'row', 'wrap-t'],
				i_ = [1, 'row', 'wrap-b'],
				a_ = [1, 'row', 'wrap-sa'],
				l_ = [1, 'row', 'wrap-sb'],
				c_ = [1, 'row', 'wrap-st'];
			function u_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Wrap Row'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use a '),
						gl(6, 'code'),
						El(7, '.wrap-[m || t || b || sa || sb || st]'),
						ml(),
						El(8, ' class to align multi-row items in a '),
						gl(9, 'code'),
						El(10, '.row'),
						ml(),
						El(11, ' flex container.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'ul', s_),
						gl(14, 'li'),
						El(15, 'middle'),
						ml(),
						gl(16, 'li'),
						El(17, 'middle'),
						ml(),
						gl(18, 'li'),
						El(19, 'middle'),
						ml(),
						ml(),
						gl(20, 'ul', o_),
						gl(21, 'li'),
						El(22, 'top (default)'),
						ml(),
						gl(23, 'li'),
						El(24, 'top (default)'),
						ml(),
						gl(25, 'li'),
						El(26, 'top (default)'),
						ml(),
						ml(),
						gl(27, 'ul', i_),
						gl(28, 'li'),
						El(29, 'bottom'),
						ml(),
						gl(30, 'li'),
						El(31, 'bottom'),
						ml(),
						gl(32, 'li'),
						El(33, 'bottom'),
						ml(),
						ml(),
						gl(34, 'ul', a_),
						gl(35, 'li'),
						El(36, 'space around'),
						ml(),
						gl(37, 'li'),
						El(38, 'space around'),
						ml(),
						gl(39, 'li'),
						El(40, 'space around'),
						ml(),
						ml(),
						gl(41, 'ul', l_),
						gl(42, 'li'),
						El(43, 'space between'),
						ml(),
						gl(44, 'li'),
						El(45, 'space between'),
						ml(),
						gl(46, 'li'),
						El(47, 'space between'),
						ml(),
						ml(),
						gl(48, 'ul', c_),
						gl(49, 'li'),
						El(50, 'stretch'),
						ml(),
						gl(51, 'li'),
						El(52, 'stretch'),
						ml(),
						gl(53, 'li'),
						El(54, 'stretch'),
						ml(),
						ml(),
						ml(),
						gl(55, 'figure'),
						gl(56, 'pre', fy),
						gl(57, 'span', gy),
						El(58, '<'),
						gl(59, 'span', my),
						El(60, 'ul'),
						ml(),
						El(61, ' '),
						gl(62, 'span', by),
						El(63, 'class'),
						ml(),
						El(64, '='),
						gl(65, 'span', yy),
						El(66, '"row wrap-m"'),
						ml(),
						El(67, '>'),
						ml(),
						El(68, '\n    '),
						gl(69, 'span', gy),
						El(70, '<'),
						gl(71, 'span', my),
						El(72, 'li'),
						ml(),
						El(73, '>'),
						ml(),
						El(74, 'middle'),
						gl(75, 'span', gy),
						El(76, '</'),
						gl(77, 'span', my),
						El(78, 'li'),
						ml(),
						El(79, '>'),
						ml(),
						El(80, '\n    '),
						gl(81, 'span', gy),
						El(82, '<'),
						gl(83, 'span', my),
						El(84, 'li'),
						ml(),
						El(85, '>'),
						ml(),
						El(86, 'middle'),
						gl(87, 'span', gy),
						El(88, '</'),
						gl(89, 'span', my),
						El(90, 'li'),
						ml(),
						El(91, '>'),
						ml(),
						El(92, '\n    '),
						gl(93, 'span', gy),
						El(94, '<'),
						gl(95, 'span', my),
						El(96, 'li'),
						ml(),
						El(97, '>'),
						ml(),
						El(98, 'middle'),
						gl(99, 'span', gy),
						El(100, '</'),
						gl(101, 'span', my),
						El(102, 'li'),
						ml(),
						El(103, '>'),
						ml(),
						El(104, '\n'),
						gl(105, 'span', gy),
						El(106, '</'),
						gl(107, 'span', my),
						El(108, 'ul'),
						ml(),
						El(109, '>'),
						ml(),
						El(110, '\n'),
						gl(111, 'span', gy),
						El(112, '<'),
						gl(113, 'span', my),
						El(114, 'ul'),
						ml(),
						El(115, ' '),
						gl(116, 'span', by),
						El(117, 'class'),
						ml(),
						El(118, '='),
						gl(119, 'span', yy),
						El(120, '"row wrap-t"'),
						ml(),
						El(121, '>'),
						ml(),
						El(122, '\n    '),
						gl(123, 'span', gy),
						El(124, '<'),
						gl(125, 'span', my),
						El(126, 'li'),
						ml(),
						El(127, '>'),
						ml(),
						El(128, 'top (default)'),
						gl(129, 'span', gy),
						El(130, '</'),
						gl(131, 'span', my),
						El(132, 'li'),
						ml(),
						El(133, '>'),
						ml(),
						El(134, '\n    '),
						gl(135, 'span', gy),
						El(136, '<'),
						gl(137, 'span', my),
						El(138, 'li'),
						ml(),
						El(139, '>'),
						ml(),
						El(140, 'top (default)'),
						gl(141, 'span', gy),
						El(142, '</'),
						gl(143, 'span', my),
						El(144, 'li'),
						ml(),
						El(145, '>'),
						ml(),
						El(146, '\n    '),
						gl(147, 'span', gy),
						El(148, '<'),
						gl(149, 'span', my),
						El(150, 'li'),
						ml(),
						El(151, '>'),
						ml(),
						El(152, 'top (default)'),
						gl(153, 'span', gy),
						El(154, '</'),
						gl(155, 'span', my),
						El(156, 'li'),
						ml(),
						El(157, '>'),
						ml(),
						El(158, '\n'),
						gl(159, 'span', gy),
						El(160, '</'),
						gl(161, 'span', my),
						El(162, 'ul'),
						ml(),
						El(163, '>'),
						ml(),
						El(164, '\n'),
						gl(165, 'span', gy),
						El(166, '<'),
						gl(167, 'span', my),
						El(168, 'ul'),
						ml(),
						El(169, ' '),
						gl(170, 'span', by),
						El(171, 'class'),
						ml(),
						El(172, '='),
						gl(173, 'span', yy),
						El(174, '"row wrap-b"'),
						ml(),
						El(175, '>'),
						ml(),
						El(176, '\n    '),
						gl(177, 'span', gy),
						El(178, '<'),
						gl(179, 'span', my),
						El(180, 'li'),
						ml(),
						El(181, '>'),
						ml(),
						El(182, 'bottom'),
						gl(183, 'span', gy),
						El(184, '</'),
						gl(185, 'span', my),
						El(186, 'li'),
						ml(),
						El(187, '>'),
						ml(),
						El(188, '\n    '),
						gl(189, 'span', gy),
						El(190, '<'),
						gl(191, 'span', my),
						El(192, 'li'),
						ml(),
						El(193, '>'),
						ml(),
						El(194, 'bottom'),
						gl(195, 'span', gy),
						El(196, '</'),
						gl(197, 'span', my),
						El(198, 'li'),
						ml(),
						El(199, '>'),
						ml(),
						El(200, '\n    '),
						gl(201, 'span', gy),
						El(202, '<'),
						gl(203, 'span', my),
						El(204, 'li'),
						ml(),
						El(205, '>'),
						ml(),
						El(206, 'bottom'),
						gl(207, 'span', gy),
						El(208, '</'),
						gl(209, 'span', my),
						El(210, 'li'),
						ml(),
						El(211, '>'),
						ml(),
						El(212, '\n'),
						gl(213, 'span', gy),
						El(214, '</'),
						gl(215, 'span', my),
						El(216, 'ul'),
						ml(),
						El(217, '>'),
						ml(),
						El(218, '\n'),
						gl(219, 'span', gy),
						El(220, '<'),
						gl(221, 'span', my),
						El(222, 'ul'),
						ml(),
						El(223, ' '),
						gl(224, 'span', by),
						El(225, 'class'),
						ml(),
						El(226, '='),
						gl(227, 'span', yy),
						El(228, '"row wrap-sa"'),
						ml(),
						El(229, '>'),
						ml(),
						El(230, '\n    '),
						gl(231, 'span', gy),
						El(232, '<'),
						gl(233, 'span', my),
						El(234, 'li'),
						ml(),
						El(235, '>'),
						ml(),
						El(236, 'space around'),
						gl(237, 'span', gy),
						El(238, '</'),
						gl(239, 'span', my),
						El(240, 'li'),
						ml(),
						El(241, '>'),
						ml(),
						El(242, '\n    '),
						gl(243, 'span', gy),
						El(244, '<'),
						gl(245, 'span', my),
						El(246, 'li'),
						ml(),
						El(247, '>'),
						ml(),
						El(248, 'space around'),
						gl(249, 'span', gy),
						El(250, '</'),
						gl(251, 'span', my),
						El(252, 'li'),
						ml(),
						El(253, '>'),
						ml(),
						El(254, '\n    '),
						gl(255, 'span', gy),
						El(256, '<'),
						gl(257, 'span', my),
						El(258, 'li'),
						ml(),
						El(259, '>'),
						ml(),
						El(260, 'space around'),
						gl(261, 'span', gy),
						El(262, '</'),
						gl(263, 'span', my),
						El(264, 'li'),
						ml(),
						El(265, '>'),
						ml(),
						El(266, '\n'),
						gl(267, 'span', gy),
						El(268, '</'),
						gl(269, 'span', my),
						El(270, 'ul'),
						ml(),
						El(271, '>'),
						ml(),
						El(272, '\n'),
						gl(273, 'span', gy),
						El(274, '<'),
						gl(275, 'span', my),
						El(276, 'ul'),
						ml(),
						El(277, ' '),
						gl(278, 'span', by),
						El(279, 'class'),
						ml(),
						El(280, '='),
						gl(281, 'span', yy),
						El(282, '"row wrap-sb"'),
						ml(),
						El(283, '>'),
						ml(),
						El(284, '\n    '),
						gl(285, 'span', gy),
						El(286, '<'),
						gl(287, 'span', my),
						El(288, 'li'),
						ml(),
						El(289, '>'),
						ml(),
						El(290, 'space between'),
						gl(291, 'span', gy),
						El(292, '</'),
						gl(293, 'span', my),
						El(294, 'li'),
						ml(),
						El(295, '>'),
						ml(),
						El(296, '\n    '),
						gl(297, 'span', gy),
						El(298, '<'),
						gl(299, 'span', my),
						El(300, 'li'),
						ml(),
						El(301, '>'),
						ml(),
						El(302, 'space between'),
						gl(303, 'span', gy),
						El(304, '</'),
						gl(305, 'span', my),
						El(306, 'li'),
						ml(),
						El(307, '>'),
						ml(),
						El(308, '\n    '),
						gl(309, 'span', gy),
						El(310, '<'),
						gl(311, 'span', my),
						El(312, 'li'),
						ml(),
						El(313, '>'),
						ml(),
						El(314, 'space between'),
						gl(315, 'span', gy),
						El(316, '</'),
						gl(317, 'span', my),
						El(318, 'li'),
						ml(),
						El(319, '>'),
						ml(),
						El(320, '\n'),
						gl(321, 'span', gy),
						El(322, '</'),
						gl(323, 'span', my),
						El(324, 'ul'),
						ml(),
						El(325, '>'),
						ml(),
						El(326, '\n'),
						gl(327, 'span', gy),
						El(328, '<'),
						gl(329, 'span', my),
						El(330, 'ul'),
						ml(),
						El(331, ' '),
						gl(332, 'span', by),
						El(333, 'class'),
						ml(),
						El(334, '='),
						gl(335, 'span', yy),
						El(336, '"row wrap-st"'),
						ml(),
						El(337, '>'),
						ml(),
						El(338, '\n    '),
						gl(339, 'span', gy),
						El(340, '<'),
						gl(341, 'span', my),
						El(342, 'li'),
						ml(),
						El(343, '>'),
						ml(),
						El(344, 'stretch'),
						gl(345, 'span', gy),
						El(346, '</'),
						gl(347, 'span', my),
						El(348, 'li'),
						ml(),
						El(349, '>'),
						ml(),
						El(350, '\n    '),
						gl(351, 'span', gy),
						El(352, '<'),
						gl(353, 'span', my),
						El(354, 'li'),
						ml(),
						El(355, '>'),
						ml(),
						El(356, 'stretch'),
						gl(357, 'span', gy),
						El(358, '</'),
						gl(359, 'span', my),
						El(360, 'li'),
						ml(),
						El(361, '>'),
						ml(),
						El(362, '\n    '),
						gl(363, 'span', gy),
						El(364, '<'),
						gl(365, 'span', my),
						El(366, 'li'),
						ml(),
						El(367, '>'),
						ml(),
						El(368, 'stretch'),
						gl(369, 'span', gy),
						El(370, '</'),
						gl(371, 'span', my),
						El(372, 'li'),
						ml(),
						El(373, '>'),
						ml(),
						El(374, '\n'),
						gl(375, 'span', gy),
						El(376, '</'),
						gl(377, 'span', my),
						El(378, 'ul'),
						ml(),
						El(379, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			function p_(e, t) {
				1 & e &&
					(gl(0, 'article', ay),
					gl(1, 'section', ly),
					gl(2, 'p'),
					El(3, 'Forms are styled with '),
					gl(4, 'code'),
					El(5, '.form-group'),
					ml(),
					El(6, ', '),
					gl(7, 'code'),
					El(8, '.field-group'),
					ml(),
					El(9, ', '),
					gl(10, 'code'),
					El(11, '.form-label'),
					ml(),
					El(12, ', and '),
					gl(13, 'code'),
					El(14, '.form-field'),
					ml(),
					El(15, ' classes.'),
					ml(),
					ml(),
					ml());
			}
			const h_ = [1, 'form-group'],
				d_ = [1, 'field-group'],
				f_ = ['for', 'name', 1, 'form-label'],
				g_ = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 1, 'form-field'],
				m_ = [1, 'form-label'],
				b_ = [1, 'radio-group'],
				y_ = ['type', 'radio', 'name', 'agree', 'id', 'yes', 1, 'form-field'],
				w_ = ['for', 'yes', 1, 'form-label'],
				__ = ['type', 'radio', 'name', 'agree', 'id', 'no', 1, 'form-field'],
				v_ = ['for', 'no', 1, 'form-label'],
				x_ = [1, 'checkbox-group'],
				C_ = ['type', 'checkbox', 'name', 'color', 'id', 'blue', 1, 'form-field'],
				k_ = ['for', 'blue', 1, 'form-label'],
				S_ = ['type', 'checkbox', 'name', 'color', 'id', 'green', 1, 'form-field'],
				O_ = ['for', 'green', 1, 'form-label'],
				E_ = ['type', 'checkbox', 'name', 'color', 'id', 'red', 1, 'form-field'],
				T_ = ['for', 'red', 1, 'form-label'],
				I_ = ['type', 'checkbox', 'name', 'color', 'id', 'yellow', 1, 'form-field'],
				P_ = ['for', 'yellow', 1, 'form-label'];
			function M_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Checkbox'),
						ml(),
						gl(4, 'p'),
						El(5, 'Checkboxes and radio buttons are grouped with a '),
						gl(6, 'code'),
						El(7, '.*-group'),
						ml(),
						El(8, ' class on a parent container.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'form'),
						gl(11, 'ul', h_),
						gl(12, 'li', d_),
						gl(13, 'label', f_),
						El(14, 'Name'),
						ml(),
						bl(15, 'input', g_),
						ml(),
						gl(16, 'li', d_),
						gl(17, 'p', m_),
						El(18, 'Agree'),
						ml(),
						gl(19, 'ul', b_),
						gl(20, 'li', d_),
						bl(21, 'input', y_),
						gl(22, 'label', w_),
						El(23, 'Yes'),
						ml(),
						ml(),
						gl(24, 'li', d_),
						bl(25, 'input', __),
						gl(26, 'label', v_),
						El(27, 'No'),
						ml(),
						ml(),
						ml(),
						ml(),
						gl(28, 'li', d_),
						gl(29, 'p', m_),
						El(30, 'Color'),
						ml(),
						gl(31, 'ul', x_),
						gl(32, 'li', d_),
						bl(33, 'input', C_),
						gl(34, 'label', k_),
						El(35, 'Blue'),
						ml(),
						ml(),
						gl(36, 'li', d_),
						bl(37, 'input', S_),
						gl(38, 'label', O_),
						El(39, 'Green'),
						ml(),
						ml(),
						gl(40, 'li', d_),
						bl(41, 'input', E_),
						gl(42, 'label', T_),
						El(43, 'Red'),
						ml(),
						ml(),
						gl(44, 'li', d_),
						bl(45, 'input', I_),
						gl(46, 'label', P_),
						El(47, 'Yellow'),
						ml(),
						ml(),
						ml(),
						ml(),
						ml(),
						ml(),
						ml(),
						gl(48, 'figure'),
						gl(49, 'pre', fy),
						El(50, '<'),
						gl(51, 'span', Ny),
						El(52, 'form'),
						ml(),
						El(53, '>\n    <ul '),
						gl(54, 'span', Ny),
						El(55, 'class'),
						ml(),
						El(56, '='),
						gl(57, 'span', Uy),
						El(58, '"form-group"'),
						ml(),
						El(59, '>\n        <'),
						gl(60, 'span', Ny),
						El(61, 'li'),
						ml(),
						El(62, ' '),
						gl(63, 'span', Ny),
						El(64, 'class'),
						ml(),
						El(65, '='),
						gl(66, 'span', Uy),
						El(67, '"field-group"'),
						ml(),
						El(68, '>\n            <'),
						gl(69, 'span', Ny),
						El(70, 'label'),
						ml(),
						El(71, ' '),
						gl(72, 'span', Ny),
						El(73, 'class'),
						ml(),
						El(74, '='),
						gl(75, 'span', Uy),
						El(76, '"form-label"'),
						ml(),
						El(77, ' '),
						gl(78, 'span', Ny),
						El(79, 'for'),
						ml(),
						El(80, '='),
						gl(81, 'span', Uy),
						El(82, '"name"'),
						ml(),
						El(83, '>Name</'),
						gl(84, 'span', Ny),
						El(85, 'label'),
						ml(),
						El(86, '>\n            <'),
						gl(87, 'span', Ny),
						El(88, 'input'),
						ml(),
						El(89, ' '),
						gl(90, 'span', Ny),
						El(91, 'class'),
						ml(),
						El(92, '='),
						gl(93, 'span', Uy),
						El(94, '"form-field"'),
						ml(),
						El(95, ' '),
						gl(96, 'span', Ny),
						El(97, 'type'),
						ml(),
						El(98, '='),
						gl(99, 'span', Uy),
						El(100, '"text"'),
						ml(),
						El(101, ' id='),
						gl(102, 'span', Uy),
						El(103, '"name"'),
						ml(),
						El(104, ' name='),
						gl(105, 'span', Uy),
						El(106, '"name"'),
						ml(),
						El(107, ' placeholder='),
						gl(108, 'span', Uy),
						El(109, '"Enter name"'),
						ml(),
						El(110, '>\n        </'),
						gl(111, 'span', Ny),
						El(112, 'li'),
						ml(),
						El(113, '>\n        <'),
						gl(114, 'span', Ny),
						El(115, 'li'),
						ml(),
						El(116, ' '),
						gl(117, 'span', Ny),
						El(118, 'class'),
						ml(),
						El(119, '='),
						gl(120, 'span', Uy),
						El(121, '"field-group"'),
						ml(),
						El(122, '>\n            <p '),
						gl(123, 'span', Ny),
						El(124, 'class'),
						ml(),
						El(125, '='),
						gl(126, 'span', Uy),
						El(127, '"form-label"'),
						ml(),
						El(128, '>Agree</p>\n            <ul '),
						gl(129, 'span', Ny),
						El(130, 'class'),
						ml(),
						El(131, '='),
						gl(132, 'span', Uy),
						El(133, '"radio-group"'),
						ml(),
						El(134, '>\n                <'),
						gl(135, 'span', Ny),
						El(136, 'li'),
						ml(),
						El(137, ' '),
						gl(138, 'span', Ny),
						El(139, 'class'),
						ml(),
						El(140, '='),
						gl(141, 'span', Uy),
						El(142, '"field-group"'),
						ml(),
						El(143, '>\n                    <'),
						gl(144, 'span', Ny),
						El(145, 'input'),
						ml(),
						El(146, ' '),
						gl(147, 'span', Ny),
						El(148, 'class'),
						ml(),
						El(149, '='),
						gl(150, 'span', Uy),
						El(151, '"form-field"'),
						ml(),
						El(152, ' '),
						gl(153, 'span', Ny),
						El(154, 'type'),
						ml(),
						El(155, '='),
						gl(156, 'span', Uy),
						El(157, '"radio"'),
						ml(),
						El(158, ' name='),
						gl(159, 'span', Uy),
						El(160, '"agree"'),
						ml(),
						El(161, ' id='),
						gl(162, 'span', Uy),
						El(163, '"yes"'),
						ml(),
						El(164, '>\n                    <'),
						gl(165, 'span', Ny),
						El(166, 'label'),
						ml(),
						El(167, ' '),
						gl(168, 'span', Ny),
						El(169, 'class'),
						ml(),
						El(170, '='),
						gl(171, 'span', Uy),
						El(172, '"form-label"'),
						ml(),
						El(173, ' '),
						gl(174, 'span', Ny),
						El(175, 'for'),
						ml(),
						El(176, '='),
						gl(177, 'span', Uy),
						El(178, '"yes"'),
						ml(),
						El(179, '>Yes</'),
						gl(180, 'span', Ny),
						El(181, 'label'),
						ml(),
						El(182, '>\n                </'),
						gl(183, 'span', Ny),
						El(184, 'li'),
						ml(),
						El(185, '>\n                <'),
						gl(186, 'span', Ny),
						El(187, 'li'),
						ml(),
						El(188, ' '),
						gl(189, 'span', Ny),
						El(190, 'class'),
						ml(),
						El(191, '='),
						gl(192, 'span', Uy),
						El(193, '"field-group"'),
						ml(),
						El(194, '>\n                    <'),
						gl(195, 'span', Ny),
						El(196, 'input'),
						ml(),
						El(197, ' '),
						gl(198, 'span', Ny),
						El(199, 'class'),
						ml(),
						El(200, '='),
						gl(201, 'span', Uy),
						El(202, '"form-field"'),
						ml(),
						El(203, ' '),
						gl(204, 'span', Ny),
						El(205, 'type'),
						ml(),
						El(206, '='),
						gl(207, 'span', Uy),
						El(208, '"radio"'),
						ml(),
						El(209, ' name='),
						gl(210, 'span', Uy),
						El(211, '"agree"'),
						ml(),
						El(212, ' id='),
						gl(213, 'span', Uy),
						El(214, '"no"'),
						ml(),
						El(215, '>\n                    <'),
						gl(216, 'span', Ny),
						El(217, 'label'),
						ml(),
						El(218, ' '),
						gl(219, 'span', Ny),
						El(220, 'class'),
						ml(),
						El(221, '='),
						gl(222, 'span', Uy),
						El(223, '"form-label"'),
						ml(),
						El(224, ' '),
						gl(225, 'span', Ny),
						El(226, 'for'),
						ml(),
						El(227, '='),
						gl(228, 'span', Uy),
						El(229, '"no"'),
						ml(),
						El(230, '>'),
						gl(231, 'span', Ny),
						El(232, 'No'),
						ml(),
						El(233, '</'),
						gl(234, 'span', Ny),
						El(235, 'label'),
						ml(),
						El(236, '>\n                </'),
						gl(237, 'span', Ny),
						El(238, 'li'),
						ml(),
						El(239, '>\n            </ul>\n        </'),
						gl(240, 'span', Ny),
						El(241, 'li'),
						ml(),
						El(242, '>\n        <'),
						gl(243, 'span', Ny),
						El(244, 'li'),
						ml(),
						El(245, ' '),
						gl(246, 'span', Ny),
						El(247, 'class'),
						ml(),
						El(248, '='),
						gl(249, 'span', Uy),
						El(250, '"field-group"'),
						ml(),
						El(251, '>\n            <p '),
						gl(252, 'span', Ny),
						El(253, 'class'),
						ml(),
						El(254, '='),
						gl(255, 'span', Uy),
						El(256, '"form-label"'),
						ml(),
						El(257, '>Color</p>\n            <ul '),
						gl(258, 'span', Ny),
						El(259, 'class'),
						ml(),
						El(260, '='),
						gl(261, 'span', Uy),
						El(262, '"checkbox-group"'),
						ml(),
						El(263, '>\n                <'),
						gl(264, 'span', Ny),
						El(265, 'li'),
						ml(),
						El(266, ' '),
						gl(267, 'span', Ny),
						El(268, 'class'),
						ml(),
						El(269, '='),
						gl(270, 'span', Uy),
						El(271, '"field-group"'),
						ml(),
						El(272, '>\n                    <'),
						gl(273, 'span', Ny),
						El(274, 'input'),
						ml(),
						El(275, ' '),
						gl(276, 'span', Ny),
						El(277, 'class'),
						ml(),
						El(278, '='),
						gl(279, 'span', Uy),
						El(280, '"form-field"'),
						ml(),
						El(281, ' '),
						gl(282, 'span', Ny),
						El(283, 'type'),
						ml(),
						El(284, '='),
						gl(285, 'span', Uy),
						El(286, '"checkbox"'),
						ml(),
						El(287, ' name='),
						gl(288, 'span', Uy),
						El(289, '"color"'),
						ml(),
						El(290, ' id='),
						gl(291, 'span', Uy),
						El(292, '"blue"'),
						ml(),
						El(293, '>\n                    <'),
						gl(294, 'span', Ny),
						El(295, 'label'),
						ml(),
						El(296, ' '),
						gl(297, 'span', Ny),
						El(298, 'class'),
						ml(),
						El(299, '='),
						gl(300, 'span', Uy),
						El(301, '"form-label"'),
						ml(),
						El(302, ' '),
						gl(303, 'span', Ny),
						El(304, 'for'),
						ml(),
						El(305, '='),
						gl(306, 'span', Uy),
						El(307, '"blue"'),
						ml(),
						El(308, '>Blue</'),
						gl(309, 'span', Ny),
						El(310, 'label'),
						ml(),
						El(311, '>\n                </'),
						gl(312, 'span', Ny),
						El(313, 'li'),
						ml(),
						El(314, '>\n                <'),
						gl(315, 'span', Ny),
						El(316, 'li'),
						ml(),
						El(317, ' '),
						gl(318, 'span', Ny),
						El(319, 'class'),
						ml(),
						El(320, '='),
						gl(321, 'span', Uy),
						El(322, '"field-group"'),
						ml(),
						El(323, '>\n                    <'),
						gl(324, 'span', Ny),
						El(325, 'input'),
						ml(),
						El(326, ' '),
						gl(327, 'span', Ny),
						El(328, 'class'),
						ml(),
						El(329, '='),
						gl(330, 'span', Uy),
						El(331, '"form-field"'),
						ml(),
						El(332, ' '),
						gl(333, 'span', Ny),
						El(334, 'type'),
						ml(),
						El(335, '='),
						gl(336, 'span', Uy),
						El(337, '"checkbox"'),
						ml(),
						El(338, ' name='),
						gl(339, 'span', Uy),
						El(340, '"color"'),
						ml(),
						El(341, ' id='),
						gl(342, 'span', Uy),
						El(343, '"green"'),
						ml(),
						El(344, '>\n                    <'),
						gl(345, 'span', Ny),
						El(346, 'label'),
						ml(),
						El(347, ' '),
						gl(348, 'span', Ny),
						El(349, 'class'),
						ml(),
						El(350, '='),
						gl(351, 'span', Uy),
						El(352, '"form-label"'),
						ml(),
						El(353, ' '),
						gl(354, 'span', Ny),
						El(355, 'for'),
						ml(),
						El(356, '='),
						gl(357, 'span', Uy),
						El(358, '"green"'),
						ml(),
						El(359, '>Green</'),
						gl(360, 'span', Ny),
						El(361, 'label'),
						ml(),
						El(362, '>\n                </'),
						gl(363, 'span', Ny),
						El(364, 'li'),
						ml(),
						El(365, '>\n                <'),
						gl(366, 'span', Ny),
						El(367, 'li'),
						ml(),
						El(368, ' '),
						gl(369, 'span', Ny),
						El(370, 'class'),
						ml(),
						El(371, '='),
						gl(372, 'span', Uy),
						El(373, '"field-group"'),
						ml(),
						El(374, '>\n                    <'),
						gl(375, 'span', Ny),
						El(376, 'input'),
						ml(),
						El(377, ' '),
						gl(378, 'span', Ny),
						El(379, 'class'),
						ml(),
						El(380, '='),
						gl(381, 'span', Uy),
						El(382, '"form-field"'),
						ml(),
						El(383, ' '),
						gl(384, 'span', Ny),
						El(385, 'type'),
						ml(),
						El(386, '='),
						gl(387, 'span', Uy),
						El(388, '"checkbox"'),
						ml(),
						El(389, ' name='),
						gl(390, 'span', Uy),
						El(391, '"color"'),
						ml(),
						El(392, ' id='),
						gl(393, 'span', Uy),
						El(394, '"red"'),
						ml(),
						El(395, '>\n                    <'),
						gl(396, 'span', Ny),
						El(397, 'label'),
						ml(),
						El(398, ' '),
						gl(399, 'span', Ny),
						El(400, 'class'),
						ml(),
						El(401, '='),
						gl(402, 'span', Uy),
						El(403, '"form-label"'),
						ml(),
						El(404, ' '),
						gl(405, 'span', Ny),
						El(406, 'for'),
						ml(),
						El(407, '='),
						gl(408, 'span', Uy),
						El(409, '"red"'),
						ml(),
						El(410, '>Red</'),
						gl(411, 'span', Ny),
						El(412, 'label'),
						ml(),
						El(413, '>\n                </'),
						gl(414, 'span', Ny),
						El(415, 'li'),
						ml(),
						El(416, '>\n                <'),
						gl(417, 'span', Ny),
						El(418, 'li'),
						ml(),
						El(419, ' '),
						gl(420, 'span', Ny),
						El(421, 'class'),
						ml(),
						El(422, '='),
						gl(423, 'span', Uy),
						El(424, '"field-group"'),
						ml(),
						El(425, '>\n                    <'),
						gl(426, 'span', Ny),
						El(427, 'input'),
						ml(),
						El(428, ' '),
						gl(429, 'span', Ny),
						El(430, 'class'),
						ml(),
						El(431, '='),
						gl(432, 'span', Uy),
						El(433, '"form-field"'),
						ml(),
						El(434, ' '),
						gl(435, 'span', Ny),
						El(436, 'type'),
						ml(),
						El(437, '='),
						gl(438, 'span', Uy),
						El(439, '"checkbox"'),
						ml(),
						El(440, ' name='),
						gl(441, 'span', Uy),
						El(442, '"color"'),
						ml(),
						El(443, ' id='),
						gl(444, 'span', Uy),
						El(445, '"yellow"'),
						ml(),
						El(446, '>\n                    <'),
						gl(447, 'span', Ny),
						El(448, 'label'),
						ml(),
						El(449, ' '),
						gl(450, 'span', Ny),
						El(451, 'class'),
						ml(),
						El(452, '='),
						gl(453, 'span', Uy),
						El(454, '"form-label"'),
						ml(),
						El(455, ' '),
						gl(456, 'span', Ny),
						El(457, 'for'),
						ml(),
						El(458, '='),
						gl(459, 'span', Uy),
						El(460, '"yellow"'),
						ml(),
						El(461, '>Yellow</'),
						gl(462, 'span', Ny),
						El(463, 'label'),
						ml(),
						El(464, '>\n                </'),
						gl(465, 'span', Ny),
						El(466, 'li'),
						ml(),
						El(467, '>\n            </ul>\n        </'),
						gl(468, 'span', Ny),
						El(469, 'li'),
						ml(),
						El(470, '>\n    </ul>    \n</'),
						gl(471, 'span', Ny),
						El(472, 'form'),
						ml(),
						El(473, '>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const A_ = ['for', 'gender', 1, 'form-label'],
				R_ = ['name', 'gender', 'id', 'gender', 1, 'form-field'],
				j_ = ['value', '1'],
				D_ = ['value', '2'],
				N_ = ['value', '3'],
				U_ = ['for', 'language', 1, 'form-label'],
				L_ = ['name', 'language', 'id', 'language', 'multiple', '', 1, 'form-field'],
				H_ = ['for', 'notes', 1, 'form-label'],
				F_ = ['name', 'notes', 'id', 'notes', 'placeholder', 'Enter notes', 1, 'form-field'];
			function z_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Field'),
						ml(),
						gl(4, 'p'),
						El(5, 'Form fields are styled with a '),
						gl(6, 'code'),
						El(7, '.form-field'),
						ml(),
						El(8, ' class. Different styles are applied based on the form field.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'form'),
						gl(11, 'ul', h_),
						gl(12, 'li', d_),
						gl(13, 'label', f_),
						El(14, 'Name'),
						ml(),
						bl(15, 'input', g_),
						ml(),
						gl(16, 'li', d_),
						gl(17, 'label', A_),
						El(18, 'Gender'),
						ml(),
						gl(19, 'select', R_),
						gl(20, 'option', j_),
						El(21, 'Select'),
						ml(),
						gl(22, 'option', D_),
						El(23, 'Female'),
						ml(),
						gl(24, 'option', N_),
						El(25, 'Male'),
						ml(),
						ml(),
						ml(),
						gl(26, 'li', d_),
						gl(27, 'label', U_),
						El(28, 'Language'),
						ml(),
						gl(29, 'select', L_),
						gl(30, 'option'),
						El(31, 'English'),
						ml(),
						gl(32, 'option'),
						El(33, 'French'),
						ml(),
						gl(34, 'option'),
						El(35, 'Spanish'),
						ml(),
						ml(),
						ml(),
						gl(36, 'li', d_),
						gl(37, 'label', H_),
						El(38, 'Notes'),
						ml(),
						bl(39, 'textarea', F_),
						ml(),
						ml(),
						ml(),
						ml(),
						gl(40, 'figure'),
						gl(41, 'pre', fy),
						gl(42, 'span', gy),
						El(43, '<'),
						gl(44, 'span', my),
						El(45, 'form'),
						ml(),
						El(46, '>'),
						ml(),
						El(47, '\n    '),
						gl(48, 'span', gy),
						El(49, '<'),
						gl(50, 'span', my),
						El(51, 'ul'),
						ml(),
						El(52, ' '),
						gl(53, 'span', by),
						El(54, 'class'),
						ml(),
						El(55, '='),
						gl(56, 'span', yy),
						El(57, '"form-group"'),
						ml(),
						El(58, '>'),
						ml(),
						El(59, '\n        '),
						gl(60, 'span', gy),
						El(61, '<'),
						gl(62, 'span', my),
						El(63, 'li'),
						ml(),
						El(64, ' '),
						gl(65, 'span', by),
						El(66, 'class'),
						ml(),
						El(67, '='),
						gl(68, 'span', yy),
						El(69, '"field-group"'),
						ml(),
						El(70, '>'),
						ml(),
						El(71, '\n            '),
						gl(72, 'span', gy),
						El(73, '<'),
						gl(74, 'span', my),
						El(75, 'label'),
						ml(),
						El(76, ' '),
						gl(77, 'span', by),
						El(78, 'class'),
						ml(),
						El(79, '='),
						gl(80, 'span', yy),
						El(81, '"form-label"'),
						ml(),
						El(82, ' '),
						gl(83, 'span', by),
						El(84, 'for'),
						ml(),
						El(85, '='),
						gl(86, 'span', yy),
						El(87, '"name"'),
						ml(),
						El(88, '>'),
						ml(),
						El(89, 'Name'),
						gl(90, 'span', gy),
						El(91, '</'),
						gl(92, 'span', my),
						El(93, 'label'),
						ml(),
						El(94, '>'),
						ml(),
						El(95, '\n            '),
						gl(96, 'span', gy),
						El(97, '<'),
						gl(98, 'span', my),
						El(99, 'input'),
						ml(),
						El(100, ' '),
						gl(101, 'span', by),
						El(102, 'class'),
						ml(),
						El(103, '='),
						gl(104, 'span', yy),
						El(105, '"form-field"'),
						ml(),
						El(106, ' '),
						gl(107, 'span', by),
						El(108, 'type'),
						ml(),
						El(109, '='),
						gl(110, 'span', yy),
						El(111, '"text"'),
						ml(),
						El(112, ' '),
						gl(113, 'span', by),
						El(114, 'id'),
						ml(),
						El(115, '='),
						gl(116, 'span', yy),
						El(117, '"name"'),
						ml(),
						El(118, ' '),
						gl(119, 'span', by),
						El(120, 'name'),
						ml(),
						El(121, '='),
						gl(122, 'span', yy),
						El(123, '"name"'),
						ml(),
						El(124, ' '),
						gl(125, 'span', by),
						El(126, 'placeholder'),
						ml(),
						El(127, '='),
						gl(128, 'span', yy),
						El(129, '"Enter name"'),
						ml(),
						El(130, '>'),
						ml(),
						El(131, '\n        '),
						gl(132, 'span', gy),
						El(133, '</'),
						gl(134, 'span', my),
						El(135, 'li'),
						ml(),
						El(136, '>'),
						ml(),
						El(137, '\n        '),
						gl(138, 'span', gy),
						El(139, '<'),
						gl(140, 'span', my),
						El(141, 'li'),
						ml(),
						El(142, ' '),
						gl(143, 'span', by),
						El(144, 'class'),
						ml(),
						El(145, '='),
						gl(146, 'span', yy),
						El(147, '"field-group"'),
						ml(),
						El(148, '>'),
						ml(),
						El(149, '\n            '),
						gl(150, 'span', gy),
						El(151, '<'),
						gl(152, 'span', my),
						El(153, 'label'),
						ml(),
						El(154, ' '),
						gl(155, 'span', by),
						El(156, 'class'),
						ml(),
						El(157, '='),
						gl(158, 'span', yy),
						El(159, '"form-label"'),
						ml(),
						El(160, ' '),
						gl(161, 'span', by),
						El(162, 'for'),
						ml(),
						El(163, '='),
						gl(164, 'span', yy),
						El(165, '"gender"'),
						ml(),
						El(166, '>'),
						ml(),
						El(167, 'Gender'),
						gl(168, 'span', gy),
						El(169, '</'),
						gl(170, 'span', my),
						El(171, 'label'),
						ml(),
						El(172, '>'),
						ml(),
						El(173, '\n            '),
						gl(174, 'span', gy),
						El(175, '<'),
						gl(176, 'span', my),
						El(177, 'select'),
						ml(),
						El(178, ' '),
						gl(179, 'span', by),
						El(180, 'class'),
						ml(),
						El(181, '='),
						gl(182, 'span', yy),
						El(183, '"form-field"'),
						ml(),
						El(184, ' '),
						gl(185, 'span', by),
						El(186, 'name'),
						ml(),
						El(187, '='),
						gl(188, 'span', yy),
						El(189, '"gender"'),
						ml(),
						El(190, ' '),
						gl(191, 'span', by),
						El(192, 'id'),
						ml(),
						El(193, '='),
						gl(194, 'span', yy),
						El(195, '"gender"'),
						ml(),
						El(196, '>'),
						ml(),
						El(197, '\n                '),
						gl(198, 'span', gy),
						El(199, '<'),
						gl(200, 'span', my),
						El(201, 'option'),
						ml(),
						El(202, ' '),
						gl(203, 'span', by),
						El(204, 'value'),
						ml(),
						El(205, '='),
						gl(206, 'span', yy),
						El(207, '"1"'),
						ml(),
						El(208, '>'),
						ml(),
						El(209, 'Select'),
						gl(210, 'span', gy),
						El(211, '</'),
						gl(212, 'span', my),
						El(213, 'option'),
						ml(),
						El(214, '>'),
						ml(),
						El(215, '\n                '),
						gl(216, 'span', gy),
						El(217, '<'),
						gl(218, 'span', my),
						El(219, 'option'),
						ml(),
						El(220, ' '),
						gl(221, 'span', by),
						El(222, 'value'),
						ml(),
						El(223, '='),
						gl(224, 'span', yy),
						El(225, '"2"'),
						ml(),
						El(226, '>'),
						ml(),
						El(227, 'Female'),
						gl(228, 'span', gy),
						El(229, '</'),
						gl(230, 'span', my),
						El(231, 'option'),
						ml(),
						El(232, '>'),
						ml(),
						El(233, '\n                '),
						gl(234, 'span', gy),
						El(235, '<'),
						gl(236, 'span', my),
						El(237, 'option'),
						ml(),
						El(238, ' '),
						gl(239, 'span', by),
						El(240, 'value'),
						ml(),
						El(241, '='),
						gl(242, 'span', yy),
						El(243, '"3"'),
						ml(),
						El(244, '>'),
						ml(),
						El(245, 'Male'),
						gl(246, 'span', gy),
						El(247, '</'),
						gl(248, 'span', my),
						El(249, 'option'),
						ml(),
						El(250, '>'),
						ml(),
						El(251, '\n            '),
						gl(252, 'span', gy),
						El(253, '</'),
						gl(254, 'span', my),
						El(255, 'select'),
						ml(),
						El(256, '>'),
						ml(),
						El(257, '\n        '),
						gl(258, 'span', gy),
						El(259, '</'),
						gl(260, 'span', my),
						El(261, 'li'),
						ml(),
						El(262, '>'),
						ml(),
						El(263, '\n        '),
						gl(264, 'span', gy),
						El(265, '<'),
						gl(266, 'span', my),
						El(267, 'li'),
						ml(),
						El(268, ' '),
						gl(269, 'span', by),
						El(270, 'class'),
						ml(),
						El(271, '='),
						gl(272, 'span', yy),
						El(273, '"field-group"'),
						ml(),
						El(274, '>'),
						ml(),
						El(275, '\n            '),
						gl(276, 'span', gy),
						El(277, '<'),
						gl(278, 'span', my),
						El(279, 'label'),
						ml(),
						El(280, ' '),
						gl(281, 'span', by),
						El(282, 'class'),
						ml(),
						El(283, '='),
						gl(284, 'span', yy),
						El(285, '"form-label"'),
						ml(),
						El(286, ' '),
						gl(287, 'span', by),
						El(288, 'for'),
						ml(),
						El(289, '='),
						gl(290, 'span', yy),
						El(291, '"language"'),
						ml(),
						El(292, '>'),
						ml(),
						El(293, 'Language'),
						gl(294, 'span', gy),
						El(295, '</'),
						gl(296, 'span', my),
						El(297, 'label'),
						ml(),
						El(298, '>'),
						ml(),
						El(299, '\n            '),
						gl(300, 'span', gy),
						El(301, '<'),
						gl(302, 'span', my),
						El(303, 'select'),
						ml(),
						El(304, ' '),
						gl(305, 'span', by),
						El(306, 'class'),
						ml(),
						El(307, '='),
						gl(308, 'span', yy),
						El(309, '"form-field"'),
						ml(),
						El(310, ' '),
						gl(311, 'span', by),
						El(312, 'name'),
						ml(),
						El(313, '='),
						gl(314, 'span', yy),
						El(315, '"language"'),
						ml(),
						El(316, ' '),
						gl(317, 'span', by),
						El(318, 'id'),
						ml(),
						El(319, '='),
						gl(320, 'span', yy),
						El(321, '"language"'),
						ml(),
						El(322, ' '),
						gl(323, 'span', by),
						El(324, 'multiple'),
						ml(),
						El(325, '>'),
						ml(),
						El(326, '\n                '),
						gl(327, 'span', gy),
						El(328, '<'),
						gl(329, 'span', my),
						El(330, 'option'),
						ml(),
						El(331, '>'),
						ml(),
						El(332, 'English'),
						gl(333, 'span', gy),
						El(334, '</'),
						gl(335, 'span', my),
						El(336, 'option'),
						ml(),
						El(337, '>'),
						ml(),
						El(338, '\n                '),
						gl(339, 'span', gy),
						El(340, '<'),
						gl(341, 'span', my),
						El(342, 'option'),
						ml(),
						El(343, '>'),
						ml(),
						El(344, 'French'),
						gl(345, 'span', gy),
						El(346, '</'),
						gl(347, 'span', my),
						El(348, 'option'),
						ml(),
						El(349, '>'),
						ml(),
						El(350, '\n                '),
						gl(351, 'span', gy),
						El(352, '<'),
						gl(353, 'span', my),
						El(354, 'option'),
						ml(),
						El(355, '>'),
						ml(),
						El(356, 'Spanish'),
						gl(357, 'span', gy),
						El(358, '</'),
						gl(359, 'span', my),
						El(360, 'option'),
						ml(),
						El(361, '>'),
						ml(),
						El(362, '\n            '),
						gl(363, 'span', gy),
						El(364, '</'),
						gl(365, 'span', my),
						El(366, 'select'),
						ml(),
						El(367, '>'),
						ml(),
						El(368, '\n        '),
						gl(369, 'span', gy),
						El(370, '</'),
						gl(371, 'span', my),
						El(372, 'li'),
						ml(),
						El(373, '>'),
						ml(),
						El(374, '\n        '),
						gl(375, 'span', gy),
						El(376, '<'),
						gl(377, 'span', my),
						El(378, 'li'),
						ml(),
						El(379, ' '),
						gl(380, 'span', by),
						El(381, 'class'),
						ml(),
						El(382, '='),
						gl(383, 'span', yy),
						El(384, '"field-group"'),
						ml(),
						El(385, '>'),
						ml(),
						El(386, '\n            '),
						gl(387, 'span', gy),
						El(388, '<'),
						gl(389, 'span', my),
						El(390, 'label'),
						ml(),
						El(391, ' '),
						gl(392, 'span', by),
						El(393, 'class'),
						ml(),
						El(394, '='),
						gl(395, 'span', yy),
						El(396, '"form-label"'),
						ml(),
						El(397, ' '),
						gl(398, 'span', by),
						El(399, 'for'),
						ml(),
						El(400, '='),
						gl(401, 'span', yy),
						El(402, '"notes"'),
						ml(),
						El(403, '>'),
						ml(),
						El(404, 'Notes'),
						gl(405, 'span', gy),
						El(406, '</'),
						gl(407, 'span', my),
						El(408, 'label'),
						ml(),
						El(409, '>'),
						ml(),
						El(410, '\n            '),
						gl(411, 'span', gy),
						El(412, '<'),
						gl(413, 'span', my),
						El(414, 'textarea'),
						ml(),
						El(415, ' '),
						gl(416, 'span', by),
						El(417, 'class'),
						ml(),
						El(418, '='),
						gl(419, 'span', yy),
						El(420, '"form-field"'),
						ml(),
						El(421, ' '),
						gl(422, 'span', by),
						El(423, 'name'),
						ml(),
						El(424, '='),
						gl(425, 'span', yy),
						El(426, '"notes"'),
						ml(),
						El(427, ' '),
						gl(428, 'span', by),
						El(429, 'id'),
						ml(),
						El(430, '='),
						gl(431, 'span', yy),
						El(432, '"notes"'),
						ml(),
						El(433, ' '),
						gl(434, 'span', by),
						El(435, 'placeholder'),
						ml(),
						El(436, '='),
						gl(437, 'span', yy),
						El(438, '"Enter notes"'),
						ml(),
						El(439, '>'),
						ml(),
						gl(440, 'span', gy),
						El(441, '</'),
						gl(442, 'span', my),
						El(443, 'textarea'),
						ml(),
						El(444, '>'),
						ml(),
						El(445, '\n        '),
						gl(446, 'span', gy),
						El(447, '</'),
						gl(448, 'span', my),
						El(449, 'li'),
						ml(),
						El(450, '>'),
						ml(),
						El(451, '\n    '),
						gl(452, 'span', gy),
						El(453, '</'),
						gl(454, 'span', my),
						El(455, 'ul'),
						ml(),
						El(456, '>'),
						ml(),
						El(457, '    \n'),
						gl(458, 'span', gy),
						El(459, '</'),
						gl(460, 'span', my),
						El(461, 'form'),
						ml(),
						El(462, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			function V_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Field Group'),
						ml(),
						gl(4, 'p'),
						El(5, 'Field groups are styled with a '),
						gl(6, 'code'),
						El(7, '.field-group'),
						ml(),
						El(8, ' class.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'form'),
						gl(11, 'ul', h_),
						gl(12, 'li', d_),
						gl(13, 'label', f_),
						El(14, 'Name'),
						ml(),
						bl(15, 'input', g_),
						ml(),
						ml(),
						ml(),
						ml(),
						gl(16, 'figure'),
						gl(17, 'pre', fy),
						El(18, '<'),
						gl(19, 'span', Ny),
						El(20, 'form'),
						ml(),
						El(21, '>\n    <ul '),
						gl(22, 'span', Ny),
						El(23, 'class'),
						ml(),
						El(24, '='),
						gl(25, 'span', Uy),
						El(26, '"form-group"'),
						ml(),
						El(27, '>\n        <'),
						gl(28, 'span', Ny),
						El(29, 'li'),
						ml(),
						El(30, ' '),
						gl(31, 'span', Ny),
						El(32, 'class'),
						ml(),
						El(33, '='),
						gl(34, 'span', Uy),
						El(35, '"field-group"'),
						ml(),
						El(36, '>\n            <'),
						gl(37, 'span', Ny),
						El(38, 'label'),
						ml(),
						El(39, ' '),
						gl(40, 'span', Ny),
						El(41, 'class'),
						ml(),
						El(42, '='),
						gl(43, 'span', Uy),
						El(44, '"form-label"'),
						ml(),
						El(45, ' '),
						gl(46, 'span', Ny),
						El(47, 'for'),
						ml(),
						El(48, '='),
						gl(49, 'span', Uy),
						El(50, '"name"'),
						ml(),
						El(51, '>Name</'),
						gl(52, 'span', Ny),
						El(53, 'label'),
						ml(),
						El(54, '>\n            <'),
						gl(55, 'span', Ny),
						El(56, 'input'),
						ml(),
						El(57, ' '),
						gl(58, 'span', Ny),
						El(59, 'class'),
						ml(),
						El(60, '='),
						gl(61, 'span', Uy),
						El(62, '"form-field"'),
						ml(),
						El(63, ' '),
						gl(64, 'span', Ny),
						El(65, 'type'),
						ml(),
						El(66, '='),
						gl(67, 'span', Uy),
						El(68, '"text"'),
						ml(),
						El(69, ' id='),
						gl(70, 'span', Uy),
						El(71, '"name"'),
						ml(),
						El(72, ' name='),
						gl(73, 'span', Uy),
						El(74, '"name"'),
						ml(),
						El(75, ' placeholder='),
						gl(76, 'span', Uy),
						El(77, '"Enter name"'),
						ml(),
						El(78, '>\n        </'),
						gl(79, 'span', Ny),
						El(80, 'li'),
						ml(),
						El(81, '>\n    </ul>    \n</'),
						gl(82, 'span', Ny),
						El(83, 'form'),
						ml(),
						El(84, '>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const $_ = [1, 'fieldset'];
			function B_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Fieldset'),
						ml(),
						gl(4, 'p'),
						El(5, 'Fieldsets are styled with a '),
						gl(6, 'code'),
						El(7, '.fieldset'),
						ml(),
						El(8, ' class and have a '),
						gl(9, 'code'),
						El(10, '<legend>'),
						ml(),
						El(11, ' tag as the first child.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'form'),
						gl(14, 'fieldset', $_),
						gl(15, 'legend'),
						El(16, 'Contact'),
						ml(),
						gl(17, 'ul', h_),
						gl(18, 'li', d_),
						gl(19, 'label', f_),
						El(20, 'Name'),
						ml(),
						bl(21, 'input', g_),
						ml(),
						ml(),
						ml(),
						ml(),
						ml(),
						gl(22, 'figure'),
						gl(23, 'pre', fy),
						El(24, '<'),
						gl(25, 'span', Ny),
						El(26, 'form'),
						ml(),
						El(27, '>\n    <fieldset '),
						gl(28, 'span', Ny),
						El(29, 'class'),
						ml(),
						El(30, '='),
						gl(31, 'span', Uy),
						El(32, '"fieldset"'),
						ml(),
						El(33, '>\n        <legend>Contact</legend>\n        <ul '),
						gl(34, 'span', Ny),
						El(35, 'class'),
						ml(),
						El(36, '='),
						gl(37, 'span', Uy),
						El(38, '"form-group"'),
						ml(),
						El(39, '>\n            <'),
						gl(40, 'span', Ny),
						El(41, 'li'),
						ml(),
						El(42, ' '),
						gl(43, 'span', Ny),
						El(44, 'class'),
						ml(),
						El(45, '='),
						gl(46, 'span', Uy),
						El(47, '"field-group"'),
						ml(),
						El(48, '>\n                <'),
						gl(49, 'span', Ny),
						El(50, 'label'),
						ml(),
						El(51, ' '),
						gl(52, 'span', Ny),
						El(53, 'class'),
						ml(),
						El(54, '='),
						gl(55, 'span', Uy),
						El(56, '"form-label"'),
						ml(),
						El(57, ' '),
						gl(58, 'span', Ny),
						El(59, 'for'),
						ml(),
						El(60, '='),
						gl(61, 'span', Uy),
						El(62, '"name"'),
						ml(),
						El(63, '>Name</'),
						gl(64, 'span', Ny),
						El(65, 'label'),
						ml(),
						El(66, '>\n                <'),
						gl(67, 'span', Ny),
						El(68, 'input'),
						ml(),
						El(69, ' '),
						gl(70, 'span', Ny),
						El(71, 'class'),
						ml(),
						El(72, '='),
						gl(73, 'span', Uy),
						El(74, '"form-field"'),
						ml(),
						El(75, ' '),
						gl(76, 'span', Ny),
						El(77, 'type'),
						ml(),
						El(78, '='),
						gl(79, 'span', Uy),
						El(80, '"text"'),
						ml(),
						El(81, ' id='),
						gl(82, 'span', Uy),
						El(83, '"name"'),
						ml(),
						El(84, ' name='),
						gl(85, 'span', Uy),
						El(86, '"name"'),
						ml(),
						El(87, ' placeholder='),
						gl(88, 'span', Uy),
						El(89, '"Enter name"'),
						ml(),
						El(90, '>\n            </'),
						gl(91, 'span', Ny),
						El(92, 'li'),
						ml(),
						El(93, '>\n        </ul>\n    </fieldset>    \n</'),
						gl(94, 'span', Ny),
						El(95, 'form'),
						ml(),
						El(96, '>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const q_ = [1, 'form-group-inline'],
				Z_ = ['for', 'email', 1, 'form-label'],
				G_ = ['type', 'text', 'id', 'email', 'name', 'email', 'placeholder', 'Enter email', 1, 'form-field'];
			function W_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Form Group'),
						ml(),
						gl(4, 'p'),
						El(5, 'Form groups are styled with a '),
						gl(6, 'code'),
						El(7, '.form-group'),
						ml(),
						El(8, ' class for vertical fields and '),
						gl(9, 'code'),
						El(10, '.form-group-inline'),
						ml(),
						El(11, ' for horizontal fields.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'form'),
						gl(14, 'ul', q_),
						gl(15, 'li', d_),
						gl(16, 'label', f_),
						El(17, 'Name'),
						ml(),
						bl(18, 'input', g_),
						ml(),
						gl(19, 'li', d_),
						gl(20, 'label', Z_),
						El(21, 'Email'),
						ml(),
						bl(22, 'input', G_),
						ml(),
						ml(),
						gl(23, 'ul', h_),
						gl(24, 'li', d_),
						gl(25, 'label', f_),
						El(26, 'Name'),
						ml(),
						bl(27, 'input', g_),
						ml(),
						gl(28, 'li', d_),
						gl(29, 'label', Z_),
						El(30, 'Email'),
						ml(),
						bl(31, 'input', G_),
						ml(),
						ml(),
						ml(),
						ml(),
						gl(32, 'figure'),
						gl(33, 'pre', fy),
						El(34, '<'),
						gl(35, 'span', Ny),
						El(36, 'form'),
						ml(),
						El(37, '>\n    <ul '),
						gl(38, 'span', Ny),
						El(39, 'class'),
						ml(),
						El(40, '='),
						gl(41, 'span', Uy),
						El(42, '"form-group-inline"'),
						ml(),
						El(43, '>\n        <'),
						gl(44, 'span', Ny),
						El(45, 'li'),
						ml(),
						El(46, ' '),
						gl(47, 'span', Ny),
						El(48, 'class'),
						ml(),
						El(49, '='),
						gl(50, 'span', Uy),
						El(51, '"field-group"'),
						ml(),
						El(52, '>\n            <'),
						gl(53, 'span', Ny),
						El(54, 'label'),
						ml(),
						El(55, ' '),
						gl(56, 'span', Ny),
						El(57, 'class'),
						ml(),
						El(58, '='),
						gl(59, 'span', Uy),
						El(60, '"form-label"'),
						ml(),
						El(61, ' '),
						gl(62, 'span', Ny),
						El(63, 'for'),
						ml(),
						El(64, '='),
						gl(65, 'span', Uy),
						El(66, '"name"'),
						ml(),
						El(67, '>Name</'),
						gl(68, 'span', Ny),
						El(69, 'label'),
						ml(),
						El(70, '>\n            <'),
						gl(71, 'span', Ny),
						El(72, 'input'),
						ml(),
						El(73, ' '),
						gl(74, 'span', Ny),
						El(75, 'class'),
						ml(),
						El(76, '='),
						gl(77, 'span', Uy),
						El(78, '"form-field"'),
						ml(),
						El(79, ' '),
						gl(80, 'span', Ny),
						El(81, 'type'),
						ml(),
						El(82, '='),
						gl(83, 'span', Uy),
						El(84, '"text"'),
						ml(),
						El(85, ' id='),
						gl(86, 'span', Uy),
						El(87, '"name"'),
						ml(),
						El(88, ' name='),
						gl(89, 'span', Uy),
						El(90, '"name"'),
						ml(),
						El(91, ' placeholder='),
						gl(92, 'span', Uy),
						El(93, '"Enter name"'),
						ml(),
						El(94, '>\n        </'),
						gl(95, 'span', Ny),
						El(96, 'li'),
						ml(),
						El(97, '>\n        <'),
						gl(98, 'span', Ny),
						El(99, 'li'),
						ml(),
						El(100, ' '),
						gl(101, 'span', Ny),
						El(102, 'class'),
						ml(),
						El(103, '='),
						gl(104, 'span', Uy),
						El(105, '"field-group"'),
						ml(),
						El(106, '>\n            <'),
						gl(107, 'span', Ny),
						El(108, 'label'),
						ml(),
						El(109, ' '),
						gl(110, 'span', Ny),
						El(111, 'class'),
						ml(),
						El(112, '='),
						gl(113, 'span', Uy),
						El(114, '"form-label"'),
						ml(),
						El(115, ' '),
						gl(116, 'span', Ny),
						El(117, 'for'),
						ml(),
						El(118, '='),
						gl(119, 'span', Uy),
						El(120, '"email"'),
						ml(),
						El(121, '>Email</'),
						gl(122, 'span', Ny),
						El(123, 'label'),
						ml(),
						El(124, '>\n            <'),
						gl(125, 'span', Ny),
						El(126, 'input'),
						ml(),
						El(127, ' '),
						gl(128, 'span', Ny),
						El(129, 'class'),
						ml(),
						El(130, '='),
						gl(131, 'span', Uy),
						El(132, '"form-field"'),
						ml(),
						El(133, ' '),
						gl(134, 'span', Ny),
						El(135, 'type'),
						ml(),
						El(136, '='),
						gl(137, 'span', Uy),
						El(138, '"text"'),
						ml(),
						El(139, ' id='),
						gl(140, 'span', Uy),
						El(141, '"email"'),
						ml(),
						El(142, ' name='),
						gl(143, 'span', Uy),
						El(144, '"email"'),
						ml(),
						El(145, ' placeholder='),
						gl(146, 'span', Uy),
						El(147, '"Enter email"'),
						ml(),
						El(148, '>\n        </'),
						gl(149, 'span', Ny),
						El(150, 'li'),
						ml(),
						El(151, '>\n    </ul>    \n    <ul '),
						gl(152, 'span', Ny),
						El(153, 'class'),
						ml(),
						El(154, '='),
						gl(155, 'span', Uy),
						El(156, '"form-group"'),
						ml(),
						El(157, '>\n        <'),
						gl(158, 'span', Ny),
						El(159, 'li'),
						ml(),
						El(160, ' '),
						gl(161, 'span', Ny),
						El(162, 'class'),
						ml(),
						El(163, '='),
						gl(164, 'span', Uy),
						El(165, '"field-group"'),
						ml(),
						El(166, '>\n            <'),
						gl(167, 'span', Ny),
						El(168, 'label'),
						ml(),
						El(169, ' '),
						gl(170, 'span', Ny),
						El(171, 'class'),
						ml(),
						El(172, '='),
						gl(173, 'span', Uy),
						El(174, '"form-label"'),
						ml(),
						El(175, ' '),
						gl(176, 'span', Ny),
						El(177, 'for'),
						ml(),
						El(178, '='),
						gl(179, 'span', Uy),
						El(180, '"name"'),
						ml(),
						El(181, '>Name</'),
						gl(182, 'span', Ny),
						El(183, 'label'),
						ml(),
						El(184, '>\n            <'),
						gl(185, 'span', Ny),
						El(186, 'input'),
						ml(),
						El(187, ' '),
						gl(188, 'span', Ny),
						El(189, 'class'),
						ml(),
						El(190, '='),
						gl(191, 'span', Uy),
						El(192, '"form-field"'),
						ml(),
						El(193, ' '),
						gl(194, 'span', Ny),
						El(195, 'type'),
						ml(),
						El(196, '='),
						gl(197, 'span', Uy),
						El(198, '"text"'),
						ml(),
						El(199, ' id='),
						gl(200, 'span', Uy),
						El(201, '"name"'),
						ml(),
						El(202, ' name='),
						gl(203, 'span', Uy),
						El(204, '"name"'),
						ml(),
						El(205, ' placeholder='),
						gl(206, 'span', Uy),
						El(207, '"Enter name"'),
						ml(),
						El(208, '>\n        </'),
						gl(209, 'span', Ny),
						El(210, 'li'),
						ml(),
						El(211, '>\n        <'),
						gl(212, 'span', Ny),
						El(213, 'li'),
						ml(),
						El(214, ' '),
						gl(215, 'span', Ny),
						El(216, 'class'),
						ml(),
						El(217, '='),
						gl(218, 'span', Uy),
						El(219, '"field-group"'),
						ml(),
						El(220, '>\n            <'),
						gl(221, 'span', Ny),
						El(222, 'label'),
						ml(),
						El(223, ' '),
						gl(224, 'span', Ny),
						El(225, 'class'),
						ml(),
						El(226, '='),
						gl(227, 'span', Uy),
						El(228, '"form-label"'),
						ml(),
						El(229, ' '),
						gl(230, 'span', Ny),
						El(231, 'for'),
						ml(),
						El(232, '='),
						gl(233, 'span', Uy),
						El(234, '"email"'),
						ml(),
						El(235, '>Email</'),
						gl(236, 'span', Ny),
						El(237, 'label'),
						ml(),
						El(238, '>\n            <'),
						gl(239, 'span', Ny),
						El(240, 'input'),
						ml(),
						El(241, ' '),
						gl(242, 'span', Ny),
						El(243, 'class'),
						ml(),
						El(244, '='),
						gl(245, 'span', Uy),
						El(246, '"form-field"'),
						ml(),
						El(247, ' '),
						gl(248, 'span', Ny),
						El(249, 'type'),
						ml(),
						El(250, '='),
						gl(251, 'span', Uy),
						El(252, '"text"'),
						ml(),
						El(253, ' id='),
						gl(254, 'span', Uy),
						El(255, '"email"'),
						ml(),
						El(256, ' name='),
						gl(257, 'span', Uy),
						El(258, '"email"'),
						ml(),
						El(259, ' placeholder='),
						gl(260, 'span', Uy),
						El(261, '"Enter email"'),
						ml(),
						El(262, '>\n        </'),
						gl(263, 'span', Ny),
						El(264, 'li'),
						ml(),
						El(265, '>\n    </ul>    \n</'),
						gl(266, 'span', Ny),
						El(267, 'form'),
						ml(),
						El(268, '>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			function Q_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Label'),
						ml(),
						gl(4, 'p'),
						El(5, 'Form labels are styled with a '),
						gl(6, 'code'),
						El(7, '.form-label'),
						ml(),
						El(8, ' class.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'form'),
						gl(11, 'ul', h_),
						gl(12, 'li', d_),
						gl(13, 'label', f_),
						El(14, 'Name'),
						ml(),
						bl(15, 'input', g_),
						ml(),
						ml(),
						ml(),
						ml(),
						gl(16, 'figure'),
						gl(17, 'pre', fy),
						El(18, '<'),
						gl(19, 'span', Ny),
						El(20, 'form'),
						ml(),
						El(21, '>\n    <ul '),
						gl(22, 'span', Ny),
						El(23, 'class'),
						ml(),
						El(24, '='),
						gl(25, 'span', Uy),
						El(26, '"form-group"'),
						ml(),
						El(27, '>\n        <'),
						gl(28, 'span', Ny),
						El(29, 'li'),
						ml(),
						El(30, ' '),
						gl(31, 'span', Ny),
						El(32, 'class'),
						ml(),
						El(33, '='),
						gl(34, 'span', Uy),
						El(35, '"field-group"'),
						ml(),
						El(36, '>\n            <'),
						gl(37, 'span', Ny),
						El(38, 'label'),
						ml(),
						El(39, ' '),
						gl(40, 'span', Ny),
						El(41, 'class'),
						ml(),
						El(42, '='),
						gl(43, 'span', Uy),
						El(44, '"form-label"'),
						ml(),
						El(45, ' '),
						gl(46, 'span', Ny),
						El(47, 'for'),
						ml(),
						El(48, '='),
						gl(49, 'span', Uy),
						El(50, '"name"'),
						ml(),
						El(51, '>Name</'),
						gl(52, 'span', Ny),
						El(53, 'label'),
						ml(),
						El(54, '>\n            <'),
						gl(55, 'span', Ny),
						El(56, 'input'),
						ml(),
						El(57, ' '),
						gl(58, 'span', Ny),
						El(59, 'class'),
						ml(),
						El(60, '='),
						gl(61, 'span', Uy),
						El(62, '"form-field"'),
						ml(),
						El(63, ' '),
						gl(64, 'span', Ny),
						El(65, 'type'),
						ml(),
						El(66, '='),
						gl(67, 'span', Uy),
						El(68, '"text"'),
						ml(),
						El(69, ' id='),
						gl(70, 'span', Uy),
						El(71, '"name"'),
						ml(),
						El(72, ' name='),
						gl(73, 'span', Uy),
						El(74, '"name"'),
						ml(),
						El(75, ' placeholder='),
						gl(76, 'span', Uy),
						El(77, '"Enter name"'),
						ml(),
						El(78, '>\n        </'),
						gl(79, 'span', Ny),
						El(80, 'li'),
						ml(),
						El(81, '>\n    </ul>    \n</'),
						gl(82, 'span', Ny),
						El(83, 'form'),
						ml(),
						El(84, '>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Y_ = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 'disabled', '', 1, 'form-field'],
				J_ = ['type', 'text', 'id', 'name', 'name', 'name', 'placeholder', 'Enter name', 'readonly', '', 1, 'form-field'];
			function K_(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'State'),
						ml(),
						gl(4, 'p'),
						El(5, 'Form fields can be disabled by adding a '),
						gl(6, 'code'),
						El(7, 'disabled'),
						ml(),
						El(8, ' attribute or readonly by adding a '),
						gl(9, 'code'),
						El(10, 'readonly'),
						ml(),
						El(11, ' attribute.'),
						ml(),
						ml(),
						gl(12, 'section', cy),
						gl(13, 'form'),
						gl(14, 'ul', h_),
						gl(15, 'li', d_),
						gl(16, 'label', f_),
						El(17, 'Disabled'),
						ml(),
						bl(18, 'input', Y_),
						ml(),
						gl(19, 'li', d_),
						gl(20, 'label', f_),
						El(21, 'Readonly'),
						ml(),
						bl(22, 'input', J_),
						ml(),
						ml(),
						ml(),
						ml(),
						gl(23, 'figure'),
						gl(24, 'pre', fy),
						El(25, '<'),
						gl(26, 'span', Ny),
						El(27, 'form'),
						ml(),
						El(28, '>\n    <ul '),
						gl(29, 'span', Ny),
						El(30, 'class'),
						ml(),
						El(31, '='),
						gl(32, 'span', Uy),
						El(33, '"form-group"'),
						ml(),
						El(34, '>\n        <'),
						gl(35, 'span', Ny),
						El(36, 'li'),
						ml(),
						El(37, ' '),
						gl(38, 'span', Ny),
						El(39, 'class'),
						ml(),
						El(40, '='),
						gl(41, 'span', Uy),
						El(42, '"field-group"'),
						ml(),
						El(43, '>\n            <'),
						gl(44, 'span', Ny),
						El(45, 'label'),
						ml(),
						El(46, ' '),
						gl(47, 'span', Ny),
						El(48, 'class'),
						ml(),
						El(49, '='),
						gl(50, 'span', Uy),
						El(51, '"form-label"'),
						ml(),
						El(52, ' '),
						gl(53, 'span', Ny),
						El(54, 'for'),
						ml(),
						El(55, '='),
						gl(56, 'span', Uy),
						El(57, '"name"'),
						ml(),
						El(58, '>Disabled</'),
						gl(59, 'span', Ny),
						El(60, 'label'),
						ml(),
						El(61, '>\n            <'),
						gl(62, 'span', Ny),
						El(63, 'input'),
						ml(),
						El(64, ' '),
						gl(65, 'span', Ny),
						El(66, 'class'),
						ml(),
						El(67, '='),
						gl(68, 'span', Uy),
						El(69, '"form-field"'),
						ml(),
						El(70, ' '),
						gl(71, 'span', Ny),
						El(72, 'type'),
						ml(),
						El(73, '='),
						gl(74, 'span', Uy),
						El(75, '"text"'),
						ml(),
						El(76, ' id='),
						gl(77, 'span', Uy),
						El(78, '"name"'),
						ml(),
						El(79, ' name='),
						gl(80, 'span', Uy),
						El(81, '"name"'),
						ml(),
						El(82, ' placeholder='),
						gl(83, 'span', Uy),
						El(84, '"Enter name"'),
						ml(),
						El(85, ' disabled>\n        </'),
						gl(86, 'span', Ny),
						El(87, 'li'),
						ml(),
						El(88, '>\n        <'),
						gl(89, 'span', Ny),
						El(90, 'li'),
						ml(),
						El(91, ' '),
						gl(92, 'span', Ny),
						El(93, 'class'),
						ml(),
						El(94, '='),
						gl(95, 'span', Uy),
						El(96, '"field-group"'),
						ml(),
						El(97, '>\n            <'),
						gl(98, 'span', Ny),
						El(99, 'label'),
						ml(),
						El(100, ' '),
						gl(101, 'span', Ny),
						El(102, 'class'),
						ml(),
						El(103, '='),
						gl(104, 'span', Uy),
						El(105, '"form-label"'),
						ml(),
						El(106, ' '),
						gl(107, 'span', Ny),
						El(108, 'for'),
						ml(),
						El(109, '='),
						gl(110, 'span', Uy),
						El(111, '"name"'),
						ml(),
						El(112, '>Readonly</'),
						gl(113, 'span', Ny),
						El(114, 'label'),
						ml(),
						El(115, '>\n            <'),
						gl(116, 'span', Ny),
						El(117, 'input'),
						ml(),
						El(118, ' '),
						gl(119, 'span', Ny),
						El(120, 'class'),
						ml(),
						El(121, '='),
						gl(122, 'span', Uy),
						El(123, '"form-field"'),
						ml(),
						El(124, ' '),
						gl(125, 'span', Ny),
						El(126, 'type'),
						ml(),
						El(127, '='),
						gl(128, 'span', Uy),
						El(129, '"text"'),
						ml(),
						El(130, ' id='),
						gl(131, 'span', Uy),
						El(132, '"name"'),
						ml(),
						El(133, ' name='),
						gl(134, 'span', Uy),
						El(135, '"name"'),
						ml(),
						El(136, ' placeholder='),
						gl(137, 'span', Uy),
						El(138, '"Enter name"'),
						ml(),
						El(139, ' readonly>\n        </'),
						gl(140, 'span', Ny),
						El(141, 'li'),
						ml(),
						El(142, '>\n    </ul>    \n</'),
						gl(143, 'span', Ny),
						El(144, 'form'),
						ml(),
						El(145, '>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(12), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			function X_(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function ev(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Area'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function tv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Container'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function nv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Item'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function rv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function sv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Container'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function ov(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Sticky Footer'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function iv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function av(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function lv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Items'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function cv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Links'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function uv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Placement'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function pv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function hv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function dv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function fv(e, t) {
				1 & e &&
					(gl(0, 'article', ay),
					gl(1, 'section', ly),
					gl(2, 'p'),
					El(3, 'Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.'),
					ml(),
					ml(),
					ml());
			}
			const gv = [1, 'mar-t-xs'],
				mv = [1, 'mar-r-sm'],
				bv = [1, 'mar-b-md'],
				yv = [1, 'mar-l-lg'],
				wv = [1, 'mar-tb-xl'],
				_v = [1, 'mar-lr-md'],
				vv = [1, 'mar-a-md'];
			function xv(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Margin'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use a '),
						gl(6, 'code'),
						El(7, '.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'),
						ml(),
						El(8, ' class to add margin to an element.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'p', gv),
						El(11, 'top extra small'),
						ml(),
						gl(12, 'p', mv),
						El(13, 'right small'),
						ml(),
						gl(14, 'p', bv),
						El(15, 'bottom medium'),
						ml(),
						gl(16, 'p', yv),
						El(17, 'left large'),
						ml(),
						gl(18, 'p', wv),
						El(19, 'top bottom extra large'),
						ml(),
						gl(20, 'p', _v),
						El(21, 'left right medium'),
						ml(),
						gl(22, 'p', vv),
						El(23, 'all medium'),
						ml(),
						ml(),
						gl(24, 'figure'),
						gl(25, 'pre', fy),
						El(26, '<'),
						gl(27, 'span', gy),
						El(28, 'p'),
						ml(),
						El(29, ' class='),
						gl(30, 'span', Uy),
						El(31, '"mar-t-xs"'),
						ml(),
						El(32, '>'),
						gl(33, 'span', by),
						El(34, 'top'),
						ml(),
						El(35, ' extra small</p>\n<'),
						gl(36, 'span', gy),
						El(37, 'p'),
						ml(),
						El(38, ' class='),
						gl(39, 'span', Uy),
						El(40, '"mar-r-sm"'),
						ml(),
						El(41, '>'),
						gl(42, 'span', by),
						El(43, 'right'),
						ml(),
						El(44, ' small</p>\n<'),
						gl(45, 'span', gy),
						El(46, 'p'),
						ml(),
						El(47, ' class='),
						gl(48, 'span', Uy),
						El(49, '"mar-b-md"'),
						ml(),
						El(50, '>'),
						gl(51, 'span', by),
						El(52, 'bottom'),
						ml(),
						El(53, ' medium</p>\n<'),
						gl(54, 'span', gy),
						El(55, 'p'),
						ml(),
						El(56, ' class='),
						gl(57, 'span', Uy),
						El(58, '"mar-l-lg"'),
						ml(),
						El(59, '>'),
						gl(60, 'span', by),
						El(61, 'left'),
						ml(),
						El(62, ' large</p>\n<'),
						gl(63, 'span', gy),
						El(64, 'p'),
						ml(),
						El(65, ' class='),
						gl(66, 'span', Uy),
						El(67, '"mar-tb-xl"'),
						ml(),
						El(68, '>'),
						gl(69, 'span', by),
						El(70, 'top'),
						ml(),
						El(71, ' '),
						gl(72, 'span', by),
						El(73, 'bottom'),
						ml(),
						El(74, ' extra large</p>\n<'),
						gl(75, 'span', gy),
						El(76, 'p'),
						ml(),
						El(77, ' class='),
						gl(78, 'span', Uy),
						El(79, '"mar-lr-md"'),
						ml(),
						El(80, '>'),
						gl(81, 'span', by),
						El(82, 'left'),
						ml(),
						El(83, ' '),
						gl(84, 'span', by),
						El(85, 'right'),
						ml(),
						El(86, ' medium</p>\n<'),
						gl(87, 'span', gy),
						El(88, 'p'),
						ml(),
						El(89, ' class='),
						gl(90, 'span', Uy),
						El(91, '"mar-a-md"'),
						ml(),
						El(92, '>all medium</p>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Cv = [1, 'pad-t-xs'],
				kv = [1, 'pad-r-sm'],
				Sv = [1, 'pad-b-md'],
				Ov = [1, 'pad-l-lg'],
				Ev = [1, 'pad-tb-xl'],
				Tv = [1, 'pad-lr-md'],
				Iv = [1, 'pad-a-md'];
			function Pv(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'h2'),
						El(3, 'Padding'),
						ml(),
						gl(4, 'p'),
						El(5, 'Use a '),
						gl(6, 'code'),
						El(7, '.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'),
						ml(),
						El(8, ' class to add padding to an element.'),
						ml(),
						ml(),
						gl(9, 'section', cy),
						gl(10, 'p', Cv),
						El(11, 'top extra small'),
						ml(),
						gl(12, 'p', kv),
						El(13, 'right small'),
						ml(),
						gl(14, 'p', Sv),
						El(15, 'bottom medium'),
						ml(),
						gl(16, 'p', Ov),
						El(17, 'left large'),
						ml(),
						gl(18, 'p', Ev),
						El(19, 'top bottom extra large'),
						ml(),
						gl(20, 'p', Tv),
						El(21, 'left right medium'),
						ml(),
						gl(22, 'p', Iv),
						El(23, 'all medium'),
						ml(),
						ml(),
						gl(24, 'figure'),
						gl(25, 'pre', fy),
						El(26, '<'),
						gl(27, 'span', gy),
						El(28, 'p'),
						ml(),
						El(29, ' class='),
						gl(30, 'span', Uy),
						El(31, '"pad-t-xs"'),
						ml(),
						El(32, '>'),
						gl(33, 'span', by),
						El(34, 'top'),
						ml(),
						El(35, ' extra small</p>\n<'),
						gl(36, 'span', gy),
						El(37, 'p'),
						ml(),
						El(38, ' class='),
						gl(39, 'span', Uy),
						El(40, '"pad-r-sm"'),
						ml(),
						El(41, '>'),
						gl(42, 'span', by),
						El(43, 'right'),
						ml(),
						El(44, ' small</p>\n<'),
						gl(45, 'span', gy),
						El(46, 'p'),
						ml(),
						El(47, ' class='),
						gl(48, 'span', Uy),
						El(49, '"pad-b-md"'),
						ml(),
						El(50, '>'),
						gl(51, 'span', by),
						El(52, 'bottom'),
						ml(),
						El(53, ' medium</p>\n<'),
						gl(54, 'span', gy),
						El(55, 'p'),
						ml(),
						El(56, ' class='),
						gl(57, 'span', Uy),
						El(58, '"pad-l-lg"'),
						ml(),
						El(59, '>'),
						gl(60, 'span', by),
						El(61, 'left'),
						ml(),
						El(62, ' large</p>\n<'),
						gl(63, 'span', gy),
						El(64, 'p'),
						ml(),
						El(65, ' class='),
						gl(66, 'span', Uy),
						El(67, '"pad-tb-xl"'),
						ml(),
						El(68, '>'),
						gl(69, 'span', by),
						El(70, 'top'),
						ml(),
						El(71, ' '),
						gl(72, 'span', by),
						El(73, 'bottom'),
						ml(),
						El(74, ' extra large</p>\n<'),
						gl(75, 'span', gy),
						El(76, 'p'),
						ml(),
						El(77, ' class='),
						gl(78, 'span', Uy),
						El(79, '"pad-lr-md"'),
						ml(),
						El(80, '>'),
						gl(81, 'span', by),
						El(82, 'left'),
						ml(),
						El(83, ' '),
						gl(84, 'span', by),
						El(85, 'right'),
						ml(),
						El(86, ' medium</p>\n<'),
						gl(87, 'span', gy),
						El(88, 'p'),
						ml(),
						El(89, ' class='),
						gl(90, 'span', Uy),
						El(91, '"pad-a-md"'),
						ml(),
						El(92, '>all medium</p>'),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(9), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			const Mv = [1, 'spinner'],
				Av = [1, 'spinner-dotted'];
			function Rv(e, t) {
				if (
					(1 & e &&
						(gl(0, 'article', ay),
						gl(1, 'section', ly),
						gl(2, 'p'),
						El(3, 'Spinners are styled with a '),
						gl(4, 'code'),
						El(5, '.spinner[-dotted]'),
						ml(),
						El(6, ' class.'),
						ml(),
						ml(),
						gl(7, 'section', cy),
						bl(8, 'p', Mv),
						bl(9, 'p', Av),
						ml(),
						gl(10, 'figure'),
						gl(11, 'pre', fy),
						gl(12, 'span', gy),
						El(13, '<'),
						gl(14, 'span', my),
						El(15, 'p'),
						ml(),
						El(16, ' '),
						gl(17, 'span', by),
						El(18, 'class'),
						ml(),
						El(19, '='),
						gl(20, 'span', yy),
						El(21, '"spinner"'),
						ml(),
						El(22, '>'),
						ml(),
						gl(23, 'span', gy),
						El(24, '</'),
						gl(25, 'span', my),
						El(26, 'p'),
						ml(),
						El(27, '>'),
						ml(),
						El(28, '\n'),
						gl(29, 'span', gy),
						El(30, '<'),
						gl(31, 'span', my),
						El(32, 'p'),
						ml(),
						El(33, ' '),
						gl(34, 'span', by),
						El(35, 'class'),
						ml(),
						El(36, '='),
						gl(37, 'span', yy),
						El(38, '"spinner-dotted"'),
						ml(),
						El(39, '>'),
						ml(),
						gl(40, 'span', gy),
						El(41, '</'),
						gl(42, 'span', my),
						El(43, 'p'),
						ml(),
						El(44, '>'),
						ml(),
						ml(),
						ml(),
						ml()),
					2 & e)
				) {
					const e = xl();
					zi(7), Ha('ngClass', Kc(1, wy, e.checkSection('Flexbox'), e.checkSection('Space')));
				}
			}
			function jv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function Dv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function Nv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function Uv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Border'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function Lv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Hover'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function Hv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Striped'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function Fv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Table Cell'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function zv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Table Row'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function Vv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function $v(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function Bv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Font'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function qv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Text'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function Zv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function Gv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'p'), El(3, 'Coming soon.'), ml(), ml(), ml());
			}
			function Wv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Hide'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			function Qv(e, t) {
				1 & e && (gl(0, 'article', ay), gl(1, 'section', ly), gl(2, 'h2'), El(3, 'Show'), ml(), gl(4, 'p'), El(5, 'Coming soon.'), ml(), ml(), ml());
			}
			const Yv = function(e) {
					return { 'bg-lt-gray': e };
				},
				Jv = [
					{
						path: 'components',
						component: (() => {
							class e {
								constructor() {}
								get section() {
									return this.selectedSection;
								}
								set section(e) {
									this.selectedSection = e;
								}
								ngOnInit() {
									this.section = 'Alert';
								}
								checkSection(e) {
									return this.section === e;
								}
								selectSection(e) {
									this.section = e;
								}
							}
							return (
								(e.ngComponentDef = Tt({
									type: e,
									selectors: [['ng-component']],
									factory: function(t) {
										return new (t || e)();
									},
									consts: 170,
									vars: 166,
									template: function(e, t) {
										1 & e &&
											(gl(0, 'nav', Ib),
											gl(1, 'ul'),
											gl(2, 'li'),
											gl(3, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Alert');
											}),
											El(4, 'Alert'),
											ml(),
											il(5, Ub, 4, 0, 'ul', Mb),
											ml(),
											gl(6, 'li'),
											gl(7, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Badge');
											}),
											El(8, 'Badge'),
											ml(),
											il(9, Lb, 4, 0, 'ul', Mb),
											ml(),
											gl(10, 'li'),
											gl(11, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Button');
											}),
											El(12, 'Button'),
											ml(),
											il(13, Hb, 10, 0, 'ul', Mb),
											ml(),
											gl(14, 'li'),
											gl(15, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Card');
											}),
											El(16, 'Card'),
											ml(),
											il(17, Fb, 1, 0, 'ul', Mb),
											ml(),
											gl(18, 'li'),
											gl(19, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Collapse');
											}),
											El(20, 'Collapse'),
											ml(),
											il(21, zb, 7, 0, 'ul', Mb),
											ml(),
											gl(22, 'li'),
											gl(23, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Color');
											}),
											El(24, 'Color'),
											ml(),
											il(25, Vb, 13, 0, 'ul', Mb),
											ml(),
											gl(26, 'li'),
											gl(27, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Flexbox');
											}),
											El(28, 'Flexbox'),
											ml(),
											il(29, $b, 25, 0, 'ul', Mb),
											ml(),
											gl(30, 'li'),
											gl(31, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Form');
											}),
											El(32, 'Form'),
											ml(),
											il(33, Bb, 22, 0, 'ul', Mb),
											ml(),
											gl(34, 'li'),
											gl(35, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Grid');
											}),
											El(36, 'Grid'),
											ml(),
											il(37, qb, 10, 0, 'ul', Mb),
											ml(),
											gl(38, 'li'),
											gl(39, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Layout');
											}),
											El(40, 'Layout'),
											ml(),
											il(41, Zb, 7, 0, 'ul', Mb),
											ml(),
											gl(42, 'li'),
											gl(43, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Modal');
											}),
											El(44, 'Modal'),
											ml(),
											il(45, Gb, 1, 0, 'ul', Mb),
											ml(),
											gl(46, 'li'),
											gl(47, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Nav');
											}),
											El(48, 'Nav'),
											ml(),
											il(49, Wb, 10, 0, 'ul', Mb),
											ml(),
											gl(50, 'li'),
											gl(51, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Position');
											}),
											El(52, 'Position'),
											ml(),
											il(53, Qb, 1, 0, 'ul', Mb),
											ml(),
											gl(54, 'li'),
											gl(55, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Slider');
											}),
											El(56, 'Slider'),
											ml(),
											il(57, Yb, 1, 0, 'ul', Mb),
											ml(),
											gl(58, 'li'),
											gl(59, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Slideshow');
											}),
											El(60, 'Slideshow'),
											ml(),
											il(61, Jb, 1, 0, 'ul', Mb),
											ml(),
											gl(62, 'li'),
											gl(63, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Space');
											}),
											El(64, 'Space'),
											ml(),
											il(65, Kb, 7, 0, 'ul', Mb),
											ml(),
											gl(66, 'li'),
											gl(67, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Spinner');
											}),
											El(68, 'Spinner'),
											ml(),
											il(69, Xb, 1, 0, 'ul', Mb),
											ml(),
											gl(70, 'li'),
											gl(71, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Switch');
											}),
											El(72, 'Switch'),
											ml(),
											il(73, ey, 1, 0, 'ul', Mb),
											ml(),
											gl(74, 'li'),
											gl(75, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Tab');
											}),
											El(76, 'Tab'),
											ml(),
											il(77, ty, 1, 0, 'ul', Mb),
											ml(),
											gl(78, 'li'),
											gl(79, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Table');
											}),
											El(80, 'Table'),
											ml(),
											il(81, ny, 16, 0, 'ul', Mb),
											ml(),
											gl(82, 'li'),
											gl(83, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Tooltip');
											}),
											El(84, 'Tooltip'),
											ml(),
											il(85, ry, 1, 0, 'ul', Mb),
											ml(),
											gl(86, 'li'),
											gl(87, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Typography');
											}),
											El(88, 'Typography'),
											ml(),
											il(89, sy, 7, 0, 'ul', Mb),
											ml(),
											gl(90, 'li'),
											gl(91, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Utilities');
											}),
											El(92, 'Utilities'),
											ml(),
											il(93, oy, 1, 0, 'ul', Mb),
											ml(),
											gl(94, 'li'),
											gl(95, 'a', Pb),
											wl('click', function(e) {
												return t.selectSection('Visibility');
											}),
											El(96, 'Visibility'),
											ml(),
											il(97, iy, 7, 0, 'ul', Mb),
											ml(),
											ml(),
											ml(),
											gl(98, 'main', Ab, Rb),
											bl(100, 'h1', jb),
											il(101, _y, 109, 4, 'article', Db),
											il(102, Cy, 51, 4, 'article', Db),
											il(103, Ey, 89, 4, 'article', Db),
											il(104, Ty, 46, 4, 'article', Db),
											il(105, Ly, 107, 4, 'article', Db),
											il(106, Vy, 295, 4, 'article', Db),
											il(107, Qy, 109, 4, 'article', Db),
											il(108, Jy, 29, 4, 'article', Db),
											il(109, Ky, 4, 0, 'article', Db),
											il(110, Xy, 4, 0, 'article', Db),
											il(111, ew, 6, 0, 'article', Db),
											il(112, tw, 6, 0, 'article', Db),
											il(113, nw, 4, 0, 'article', Db),
											il(114, rw, 6, 0, 'article', Db),
											il(115, sw, 6, 0, 'article', Db),
											il(116, ow, 6, 0, 'article', Db),
											il(117, iw, 6, 0, 'article', Db),
											il(118, pw, 200, 4, 'article', Db),
											il(119, xw, 484, 4, 'article', Db),
											il(120, Rw, 484, 4, 'article', Db),
											il(121, Vw, 438, 4, 'article', Db),
											il(122, qw, 83, 4, 'article', Db),
											il(123, Zw, 438, 4, 'article', Db),
											il(124, Yw, 329, 4, 'article', Db),
											il(125, r_, 380, 4, 'article', Db),
											il(126, u_, 380, 4, 'article', Db),
											il(127, p_, 16, 0, 'article', Db),
											il(128, M_, 474, 4, 'article', Db),
											il(129, z_, 463, 4, 'article', Db),
											il(130, V_, 85, 4, 'article', Db),
											il(131, B_, 97, 4, 'article', Db),
											il(132, W_, 269, 4, 'article', Db),
											il(133, Q_, 85, 4, 'article', Db),
											il(134, K_, 146, 4, 'article', Db),
											il(135, X_, 4, 0, 'article', Db),
											il(136, ev, 6, 0, 'article', Db),
											il(137, tv, 6, 0, 'article', Db),
											il(138, nv, 6, 0, 'article', Db),
											il(139, rv, 4, 0, 'article', Db),
											il(140, sv, 6, 0, 'article', Db),
											il(141, ov, 6, 0, 'article', Db),
											il(142, iv, 4, 0, 'article', Db),
											il(143, av, 4, 0, 'article', Db),
											il(144, lv, 6, 0, 'article', Db),
											il(145, cv, 6, 0, 'article', Db),
											il(146, uv, 6, 0, 'article', Db),
											il(147, pv, 4, 0, 'article', Db),
											il(148, hv, 4, 0, 'article', Db),
											il(149, dv, 4, 0, 'article', Db),
											il(150, fv, 4, 0, 'article', Db),
											il(151, xv, 93, 4, 'article', Db),
											il(152, Pv, 93, 4, 'article', Db),
											il(153, Rv, 45, 4, 'article', Db),
											il(154, jv, 4, 0, 'article', Db),
											il(155, Dv, 4, 0, 'article', Db),
											il(156, Nv, 4, 0, 'article', Db),
											il(157, Uv, 6, 0, 'article', Db),
											il(158, Lv, 6, 0, 'article', Db),
											il(159, Hv, 6, 0, 'article', Db),
											il(160, Fv, 6, 0, 'article', Db),
											il(161, zv, 6, 0, 'article', Db),
											il(162, Vv, 4, 0, 'article', Db),
											il(163, $v, 4, 0, 'article', Db),
											il(164, Bv, 6, 0, 'article', Db),
											il(165, qv, 6, 0, 'article', Db),
											il(166, Zv, 4, 0, 'article', Db),
											il(167, Gv, 4, 0, 'article', Db),
											il(168, Wv, 6, 0, 'article', Db),
											il(169, Qv, 6, 0, 'article', Db),
											ml()),
											2 & e &&
												(zi(3),
												Ha('ngClass', Jc(118, Yv, t.checkSection('Alert'))),
												zi(5),
												Ha('ngIf', t.checkSection('Alert')),
												zi(7),
												Ha('ngClass', Jc(120, Yv, t.checkSection('Badge'))),
												zi(9),
												Ha('ngIf', t.checkSection('Badge')),
												zi(11),
												Ha('ngClass', Jc(122, Yv, t.checkSection('Button'))),
												zi(13),
												Ha('ngIf', t.checkSection('Button')),
												zi(15),
												Ha('ngClass', Jc(124, Yv, t.checkSection('Card'))),
												zi(17),
												Ha('ngIf', t.checkSection('Card')),
												zi(19),
												Ha('ngClass', Jc(126, Yv, t.checkSection('Collapse'))),
												zi(21),
												Ha('ngIf', t.checkSection('Collapse')),
												zi(23),
												Ha('ngClass', Jc(128, Yv, t.checkSection('Color'))),
												zi(25),
												Ha('ngIf', t.checkSection('Color')),
												zi(27),
												Ha('ngClass', Jc(130, Yv, t.checkSection('Flexbox'))),
												zi(29),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(31),
												Ha('ngClass', Jc(132, Yv, t.checkSection('Form'))),
												zi(33),
												Ha('ngIf', t.checkSection('Form')),
												zi(35),
												Ha('ngClass', Jc(134, Yv, t.checkSection('Grid'))),
												zi(37),
												Ha('ngIf', t.checkSection('Grid')),
												zi(39),
												Ha('ngClass', Jc(136, Yv, t.checkSection('Layout'))),
												zi(41),
												Ha('ngIf', t.checkSection('Layout')),
												zi(43),
												Ha('ngClass', Jc(138, Yv, t.checkSection('Modal'))),
												zi(45),
												Ha('ngIf', t.checkSection('Modal')),
												zi(47),
												Ha('ngClass', Jc(140, Yv, t.checkSection('Nav'))),
												zi(49),
												Ha('ngIf', t.checkSection('Nav')),
												zi(51),
												Ha('ngClass', Jc(142, Yv, t.checkSection('Position'))),
												zi(53),
												Ha('ngIf', t.checkSection('Position')),
												zi(55),
												Ha('ngClass', Jc(144, Yv, t.checkSection('Slider'))),
												zi(57),
												Ha('ngIf', t.checkSection('Slider')),
												zi(59),
												Ha('ngClass', Jc(146, Yv, t.checkSection('Slideshow'))),
												zi(61),
												Ha('ngIf', t.checkSection('Slideshow')),
												zi(63),
												Ha('ngClass', Jc(148, Yv, t.checkSection('Space'))),
												zi(65),
												Ha('ngIf', t.checkSection('Space')),
												zi(67),
												Ha('ngClass', Jc(150, Yv, t.checkSection('Spinner'))),
												zi(69),
												Ha('ngIf', t.checkSection('Spinner')),
												zi(71),
												Ha('ngClass', Jc(152, Yv, t.checkSection('Switch'))),
												zi(73),
												Ha('ngIf', t.checkSection('Switch')),
												zi(75),
												Ha('ngClass', Jc(154, Yv, t.checkSection('Tab'))),
												zi(77),
												Ha('ngIf', t.checkSection('Tab')),
												zi(79),
												Ha('ngClass', Jc(156, Yv, t.checkSection('Table'))),
												zi(81),
												Ha('ngIf', t.checkSection('Table')),
												zi(83),
												Ha('ngClass', Jc(158, Yv, t.checkSection('Tooltip'))),
												zi(85),
												Ha('ngIf', t.checkSection('Tooltip')),
												zi(87),
												Ha('ngClass', Jc(160, Yv, t.checkSection('Typography'))),
												zi(89),
												Ha('ngIf', t.checkSection('Typography')),
												zi(91),
												Ha('ngClass', Jc(162, Yv, t.checkSection('Utilities'))),
												zi(93),
												Ha('ngIf', t.checkSection('Utilities')),
												zi(95),
												Ha('ngClass', Jc(164, Yv, t.checkSection('Visibility'))),
												zi(97),
												Ha('ngIf', t.checkSection('Visibility')),
												zi(100),
												Ha('innerHTML', t.section, Yr),
												zi(101),
												Ha('ngIf', t.checkSection('Alert')),
												zi(102),
												Ha('ngIf', t.checkSection('Alert')),
												zi(103),
												Ha('ngIf', t.checkSection('Badge')),
												zi(104),
												Ha('ngIf', t.checkSection('Badge')),
												zi(105),
												Ha('ngIf', t.checkSection('Button')),
												zi(106),
												Ha('ngIf', t.checkSection('Button')),
												zi(107),
												Ha('ngIf', t.checkSection('Button')),
												zi(108),
												Ha('ngIf', t.checkSection('Button')),
												zi(109),
												Ha('ngIf', t.checkSection('Card')),
												zi(110),
												Ha('ngIf', t.checkSection('Collapse')),
												zi(111),
												Ha('ngIf', t.checkSection('Collapse')),
												zi(112),
												Ha('ngIf', t.checkSection('Collapse')),
												zi(113),
												Ha('ngIf', t.checkSection('Color')),
												zi(114),
												Ha('ngIf', t.checkSection('Color')),
												zi(115),
												Ha('ngIf', t.checkSection('Color')),
												zi(116),
												Ha('ngIf', t.checkSection('Color')),
												zi(117),
												Ha('ngIf', t.checkSection('Color')),
												zi(118),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(119),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(120),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(121),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(122),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(123),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(124),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(125),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(126),
												Ha('ngIf', t.checkSection('Flexbox')),
												zi(127),
												Ha('ngIf', t.checkSection('Form')),
												zi(128),
												Ha('ngIf', t.checkSection('Form')),
												zi(129),
												Ha('ngIf', t.checkSection('Form')),
												zi(130),
												Ha('ngIf', t.checkSection('Form')),
												zi(131),
												Ha('ngIf', t.checkSection('Form')),
												zi(132),
												Ha('ngIf', t.checkSection('Form')),
												zi(133),
												Ha('ngIf', t.checkSection('Form')),
												zi(134),
												Ha('ngIf', t.checkSection('Form')),
												zi(135),
												Ha('ngIf', t.checkSection('Grid')),
												zi(136),
												Ha('ngIf', t.checkSection('Grid')),
												zi(137),
												Ha('ngIf', t.checkSection('Grid')),
												zi(138),
												Ha('ngIf', t.checkSection('Grid')),
												zi(139),
												Ha('ngIf', t.checkSection('Layout')),
												zi(140),
												Ha('ngIf', t.checkSection('Layout')),
												zi(141),
												Ha('ngIf', t.checkSection('Layout')),
												zi(142),
												Ha('ngIf', t.checkSection('Modal')),
												zi(143),
												Ha('ngIf', t.checkSection('Nav')),
												zi(144),
												Ha('ngIf', t.checkSection('Nav')),
												zi(145),
												Ha('ngIf', t.checkSection('Nav')),
												zi(146),
												Ha('ngIf', t.checkSection('Nav')),
												zi(147),
												Ha('ngIf', t.checkSection('Position')),
												zi(148),
												Ha('ngIf', t.checkSection('Slider')),
												zi(149),
												Ha('ngIf', t.checkSection('Slideshow')),
												zi(150),
												Ha('ngIf', t.checkSection('Space')),
												zi(151),
												Ha('ngIf', t.checkSection('Space')),
												zi(152),
												Ha('ngIf', t.checkSection('Space')),
												zi(153),
												Ha('ngIf', t.checkSection('Spinner')),
												zi(154),
												Ha('ngIf', t.checkSection('Switch')),
												zi(155),
												Ha('ngIf', t.checkSection('Tab')),
												zi(156),
												Ha('ngIf', t.checkSection('Table')),
												zi(157),
												Ha('ngIf', t.checkSection('Table')),
												zi(158),
												Ha('ngIf', t.checkSection('Table')),
												zi(159),
												Ha('ngIf', t.checkSection('Table')),
												zi(160),
												Ha('ngIf', t.checkSection('Table')),
												zi(161),
												Ha('ngIf', t.checkSection('Table')),
												zi(162),
												Ha('ngIf', t.checkSection('Tooltip')),
												zi(163),
												Ha('ngIf', t.checkSection('Typography')),
												zi(164),
												Ha('ngIf', t.checkSection('Typography')),
												zi(165),
												Ha('ngIf', t.checkSection('Typography')),
												zi(166),
												Ha('ngIf', t.checkSection('Utilities')),
												zi(167),
												Ha('ngIf', t.checkSection('Visibility')),
												zi(168),
												Ha('ngIf', t.checkSection('Visibility')),
												zi(169),
												Ha('ngIf', t.checkSection('Visibility')));
									},
									directives: [Gp, Wp, Sd, Td, Pd, jd, zd],
									styles: [
										'.styleguide[_ngcontent-%COMP%]{margin-left:16rem}.styleguide[_ngcontent-%COMP%]   .hljs-attr[_ngcontent-%COMP%]{color:#954121}.styleguide-menu[_ngcontent-%COMP%]{left:2rem;top:5.5rem;width:14rem}.styleguide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#6a0080}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .styleguide[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:.875rem}.styleguide[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-width:15rem}#styleguide[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;color:#000;background:#f8f8ff;-webkit-text-size-adjust:none}.diff[_ngcontent-%COMP%]   .hljs-header[_ngcontent-%COMP%], .hljs-comment[_ngcontent-%COMP%]{color:#408080;font-style:italic}.assignment[_ngcontent-%COMP%], .css[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-subst[_ngcontent-%COMP%], .hljs-winutils[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#954121}.hljs-hexcolor[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%]{color:#40a070}.hljs-doctag[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-value[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{color:#219161}.hljs-id[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%]{color:#19469d}.hljs-params[_ngcontent-%COMP%]{color:#00f}.hljs-subst[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{font-weight:400}.haskell[_ngcontent-%COMP%]   .hljs-label[_ngcontent-%COMP%], .hljs-class[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-command[_ngcontent-%COMP%]{color:#458;font-weight:700}.django[_ngcontent-%COMP%]   .hljs-tag[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-rule[_ngcontent-%COMP%]   .hljs-property[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:navy;font-weight:400}.hljs-attr[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .instancevar[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-body[_ngcontent-%COMP%]{color:teal}.hljs-regexp[_ngcontent-%COMP%]{color:#b68}.hljs-class[_ngcontent-%COMP%]{color:#458;font-weight:700}.hljs-symbol[_ngcontent-%COMP%], .input_number[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .keymethods[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-special[_ngcontent-%COMP%]{color:#990073}.builtin[_ngcontent-%COMP%], .constructor[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#0086b3}.hljs-cdata[_ngcontent-%COMP%], .hljs-doctype[_ngcontent-%COMP%], .hljs-pi[_ngcontent-%COMP%], .hljs-pragma[_ngcontent-%COMP%], .hljs-preprocessor[_ngcontent-%COMP%], .hljs-shebang[_ngcontent-%COMP%]{color:#999;font-weight:700}.hljs-deletion[_ngcontent-%COMP%]{background:#fdd}.hljs-addition[_ngcontent-%COMP%]{background:#dfd}.diff[_ngcontent-%COMP%]   .hljs-change[_ngcontent-%COMP%]{background:#0086b3}.hljs-chunk[_ngcontent-%COMP%]{color:#aaa}.tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{opacity:.5}.flexbox[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:wrap}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][_ngcontent-%COMP%]{height:15.625rem;width:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][class*=wrap][_ngcontent-%COMP%]{width:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.col-full[_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][_ngcontent-%COMP%]{height:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][class*=wrap][_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.row[_ngcontent-%COMP%]{width:15.625rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;background-color:#2196f3;color:#fff;-webkit-box-pack:center;justify-content:center;min-height:6.25rem;min-width:7.5rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50;min-height:4.6875rem;min-width:6.25rem}.box[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:1rem;padding:0}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;text-align:center}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50}.box[_ngcontent-%COMP%]   p[class*=pad][_ngcontent-%COMP%]{display:inline-block;margin:0 1rem}'
									]
								})),
								e
							);
						})()
					},
					{ path: '', redirectTo: '/components', pathMatch: 'full' },
					{ path: '**', redirectTo: '/components', pathMatch: 'full' }
				],
				Kv = (() => {
					class e {}
					return (
						(e.ngModuleDef = Mt({ type: e })),
						(e.ngInjectorDef = ge({
							factory: function(t) {
								return new (t || e)();
							},
							imports: [[wb.forRoot(Jv, { useHash: !0, anchorScrolling: 'enabled' })], wb]
						})),
						e
					);
				})();
			wb.forRoot(Jv, { useHash: !0, anchorScrolling: 'enabled' });
			const Xv = (() => {
					class e {}
					return (
						(e.ngModuleDef = Mt({ type: e })),
						(e.ngInjectorDef = ge({
							factory: function(t) {
								return new (t || e)();
							},
							imports: [[Jp, Qd]]
						})),
						e
					);
				})(),
				ex = (() => {
					class e {}
					return (
						(e.ngModuleDef = Mt({ type: e, bootstrap: [Tb] })),
						(e.ngInjectorDef = ge({
							factory: function(t) {
								return new (t || e)();
							},
							imports: [[gd, Wd, Kv, Xv]]
						})),
						e
					);
				})();
			(function() {
				if (xr) throw new Error('Cannot enable prod mode after platform setup.');
				vr = !1;
			})(),
				dd()
					.bootstrapModule(ex, { defaultEncapsulation: yt.None })
					.catch((e) => console.error(e));
		},
		zn8P: function(e, t) {
			function n(e) {
				return Promise.resolve().then(function() {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = 'MODULE_NOT_FOUND'), t);
				});
			}
			(n.keys = function() {
				return [];
			}),
				(n.resolve = n),
				(e.exports = n),
				(n.id = 'zn8P');
		}
	},
	[[0, 0]]
]);
